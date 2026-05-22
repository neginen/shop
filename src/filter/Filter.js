import React from "react";
import data from "../data.json";

export default function Filter() {
  return (
    <>      
      <details className="overflow-hidden border-gray-200 border [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
          <span className="text-sm font-medium text-gray-700">دسته بندی ها</span>
          <span className="transition group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </summary>
        <div className="border-t border-gray-200 bg-white text-end">
          <ul className="space-y-1 border-t border-gray-200 text-gray-600 p-4">
            <li>
              <button className="w-full text-end focus:outline-none focus:text-rose-800" >
                تمامی محصولات
              </button>
            </li>
            {data.map((item) => (
              <li key={item.id}>
                <button className="w-full text-end focus:outline-none focus:text-rose-800">
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </details>
      <details className="overflow-hidden border [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
          <span className="text-sm font-medium text-gray-700">قیمت</span>
          <span className="transition group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </summary>
        <div className="border-t border-gray-200 bg-white">
          <header className="flex items-center justify-between p-4">
            <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
              پاک کردن
            </button>
          </header>
          <div className="border-t border-gray-200 p-4">
            <div className="flex justify-between gap-4">
              <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                <span className="text-sm text-gray-600">تومان</span>
                <input
                  id="FilterPriceTo"
                  placeholder="96000"
                  className="w-full rounded-md  border-gray-200 border p-2 focus:outline-none" 
                />
              </label>
              <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
                <span className="text-sm text-gray-600">تومان</span>
                <input
                  id="FilterPriceFrom"
                  placeholder="0"
                  className="w-full border rounded-md border-gray-200  p-2 focus:outline-none"                 
                />
              </label>
            </div>
          </div>
        </div>
      </details>
    </>
  );
}
