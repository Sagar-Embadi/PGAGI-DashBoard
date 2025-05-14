import type { Metadata } from "next";
import React from "react";
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
        <WeatherSearchCard/>
      </div>

      <div className="col-span-12 xl:col-span-6">
        <StockSearchCard/>
      </div>

      <div className="col-span-12">
        <NewsFeed/>
      </div>
    </div>
  );
}
