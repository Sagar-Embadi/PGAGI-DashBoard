import type { Metadata } from "next";
import { EcommerceMetrics } from "@/components/ecommerce/EcommerceMetrics";
import React from "react";
import MonthlyTarget from "@/components/ecommerce/MonthlyTarget";
import MonthlySalesChart from "@/components/ecommerce/MonthlySalesChart";
import StatisticsChart from "@/components/ecommerce/StatisticsChart";
import RecentOrders from "@/components/ecommerce/RecentOrders";
import DemographicCard from "@/components/ecommerce/DemographicCard";
import WeatherSearchCard from "@/components/weather/WeatherSearchCard";
import NewsFeed from "@/components/news/NewsFeed";
import StockSearchCard from "@/components/stocks/StockSearchCard";

export const metadata: Metadata = {
  title:"PG-AGI - Dashboard",
  description: "This is PG-AGI Dashboard Template",
};

export default function Ecommerce() {
  return (
    <div className="grid grid-cols-12 gap-3 md:gap-6">
      <div className="col-span-8 space-y-6 xl:col-span-6">
        {/* <EcommerceMetrics /> */}
        <WeatherSearchCard/>

        {/* <MonthlySalesChart /> */}
      </div>

      <div className="col-span-12 xl:col-span-6">
        {/* <MonthlyTarget /> */}
        {/* finance here */}
        <StockSearchCard/>
      </div>

      <div className="col-span-12">
        <NewsFeed/>
        {/* <StatisticsChart /> */}
      </div>

      <div className="col-span-12 xl:col-span-5">
        {/* <DemographicCard /> */}
      </div>

      <div className="col-span-12 xl:col-span-7">
        {/* <RecentOrders /> */}
      </div>
    </div>
  );
}
