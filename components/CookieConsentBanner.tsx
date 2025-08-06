"use client";

interface CookieConsentBannerProps {
  onAccept: () => void;
}

const CookieConsentBanner = ({ onAccept }: CookieConsentBannerProps) => {
  return (
    <div className="fixed bottom-4 right-4 z-50 bg-gray-900 bg-opacity-90 text-white shadow-lg backdrop-blur-sm rounded-md overflow-hidden">
      <div className="p-4 flex flex-col items-end gap-2 md:flex-row md:items-center md:justify-between">
        <p className="text-center text-sm md:text-left">
          เว็บไซต์นี้ใช้คุกกี้เพื่อรวบรวมข้อมูลการใช้งาน
          สำหรับนำไปวิเคราะห์และพัฒนาบริการของเราให้ดียิ่งขึ้น
        </p>
        <button
          onClick={onAccept}
          className="shrink-0 rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-700"
        >
          ยอมรับ
        </button>
      </div>
    </div>
  );
};
export default CookieConsentBanner;
