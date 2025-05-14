/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import axios from 'axios'
import { ApexOptions } from 'apexcharts';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const StockSearchCard = () => {
  const API_KEY = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_KEY
  console.log(API_KEY)
  const [symbol, setSymbol] = useState('BTC')
  const [series, setSeries] = useState<any[]>([])
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light')
  const [categories, setCategories] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  // const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light')
  console.log(categories)
  useEffect(() => {
    // Detect system theme
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setThemeMode(isDark ? 'dark' : 'light')

    // Listen for theme changes
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const listener = (e: MediaQueryListEvent) => setThemeMode(e.matches ? 'dark' : 'light')
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [])

  const fetchStockData = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await axios.get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`
      )

      const data = res.data['Time Series (Daily)']
      if (!data) throw new Error('Invalid symbol or API limit exceeded')

      const entries = Object.entries(data).slice(0, 30).reverse() // last 30 days

      const prices = entries.map(([date, ohlc]: any) => ({
        x: date,
        y: [
          parseFloat(ohlc['1. open']),
          parseFloat(ohlc['2. high']),
          parseFloat(ohlc['3. low']),
          parseFloat(ohlc['4. close'])
        ]
      }))

      setCategories(entries.map(([date]) => date))
      setSeries([{ data: prices }])
    } catch (err: any) {
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchStockData()
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') fetchStockData()
  }

  // Chart options with theme support
  // const chartOptions = {
  //   chart: {
  //     type: 'candlestick',
  //     background: 'transparent',
  //     toolbar: { show: true }
  //   },
  //   theme: {
  //     mode: themeMode
  //   },
  //   xaxis: {
  //     type: 'category',
  //     categories,
  //     labels: {
  //       style: {
  //         colors: themeMode === 'dark' ? '#E5E7EB' : '#374151'
  //       }
  //     }
  //   },
  //   yaxis: {
  //     labels: {
  //       style: {
  //         colors: themeMode === 'dark' ? '#E5E7EB' : '#374151'
  //       }
  //     }
  //   },
  //   grid: {
  //     borderColor: themeMode === 'dark' ? '#374151' : '#E5E7EB'
  //   },
  //   title: {
  //     text: `Candlestick Chart: ${symbol}`,
  //     align: 'left',
  //     style: {
  //       color: themeMode === 'dark' ? '#D1D5DB' : '#111827'
  //     }
  //   },
  //   tooltip: {
  //     theme: themeMode
  //   }
  // }
  const chartOptions: ApexOptions = {
  chart: {
    type: 'candlestick', // ✅ now allowed
    background: '#1F2937',
    toolbar: {
      show: false,
    },
  },
  theme: {
    mode: 'dark', // or 'light'
  },
  xaxis: {
    type: 'category',
    categories: ['Mon', 'Tue', 'Wed'],
    labels: {
      style: {
        colors: '#fff',
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: '#fff',
      },
    },
  },
  grid: {
    borderColor: '#374151',
  },
  title: {
    text: 'Stock Price',
    style: {
      color: '#fff',
    },
  },
  tooltip: {
    enabled: true,
  },
};


  return (
    <div className="w-full p-4 rounded-xl shadow bg-white text-black dark:bg-gray-800 dark:text-white transition-colors">
      <div className="mb-4 flex items-center justify-between gap-2">
        <input
          type="text"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value.toUpperCase())}
          onKeyDown={handleKeyDown}
          placeholder="Enter stock symbol (e.g. AAPL)"
          className="border border-gray-300 dark:border-gray-600 px-4 py-2 rounded w-full bg-white dark:bg-gray-700 dark:text-white"
        />
        <button
          onClick={fetchStockData}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {loading && <p>Loading...</p>}
      {!loading && series.length > 0 && (
        <ApexChart options={chartOptions} series={series} type="candlestick" height={350} />
      )}
    </div>
  )
}

export default StockSearchCard
