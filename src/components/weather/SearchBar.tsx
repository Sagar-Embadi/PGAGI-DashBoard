'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'

interface SearchBarProps {
  onSearch: (query: string) => void
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    const trimmedQuery = query.trim()
    if (trimmedQuery) {
      onSearch(trimmedQuery)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="flex items-center w-full max-w-xl bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2 shadow focus-within:ring-2 focus-within:ring-blue-500 transition">
      <Search className="text-gray-500 dark:text-gray-400 mr-2" />
      <input
        type="text"
        placeholder="Search for your preferred city..."
        className="bg-transparent flex-1 outline-none text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default SearchBar
