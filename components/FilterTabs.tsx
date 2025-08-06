"use client";
import { useMemo } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "./Icon";

// 1. สร้าง Interface สำหรับข้อมูล Category
interface CategoryData {
  name: string;
  count: number;
}

interface FilterTabsProps {
  categories: CategoryData[]; // รับข้อมูลเป็น array of objects
  activeTab: string;
  onTabClick: (category: string) => void;
}

const FilterTabs = ({ categories, activeTab, onTabClick }: FilterTabsProps) => {
  // 2. ใช้ findIndex เพื่อหา active index จากชื่อ
  const activeIndex = useMemo(
    () => categories.findIndex((category) => category.name === activeTab),
    [categories, activeTab]
  );

  const handlePrev = () => {
    const prevIndex = (activeIndex - 1 + categories.length) % categories.length;
    // 3. ส่งเฉพาะชื่อ category กลับไป
    onTabClick(categories[prevIndex].name);
  };

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % categories.length;
    // 3. ส่งเฉพาะชื่อ category กลับไป
    onTabClick(categories[nextIndex].name);
  };

  // ตรวจสอบกรณีไม่พบ activeIndex
  if (activeIndex === -1) {
    return null; // หรือแสดง UI fallback
  }

  return (
    <div className="relative flex items-center justify-center border border-primary-500 rounded-full w-full max-w-sm p-3 sm:max-w-none sm:w-auto sm:px-8">
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-500 sm:hidden"
        aria-label="Previous Category"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>

      {/* Desktop View */}
      <div className="hidden sm:inline-flex items-center justify-center gap-x-8">
        {categories.map((category) => (
          <button
            key={category.name} // ใช้ชื่อเป็น key
            onClick={() => onTabClick(category.name)} // ส่งชื่อกลับไป
            className="relative px-3 py-1 text-base transition-colors duration-300"
          >
            <span
              className={`relative z-10 ${
                activeTab === category.name
                  ? "text-primary-500 font-bold cursor-pointer"
                  : "text-primary-100 hover:text-primary-500 cursor-pointer"
              }`}
            >
              {/* 4. แสดงชื่อและจำนวนจาก object */}
              {category.name} ({category.count})
            </span>
          </button>
        ))}
      </div>

      {/* Mobile View */}
      <div className="w-full overflow-hidden sm:hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex w-full flex-shrink-0 items-center justify-center"
            >
              <span className="text-base font-bold text-primary-500">
                {category.name} ({category.count})
              </span>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-500 sm:hidden"
        aria-label="Next Category"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default FilterTabs;
