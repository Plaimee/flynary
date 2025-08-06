import Image from "next/image";
import LogoTypo from "@/public/logotypo.svg";
import SULogo from "@/public/ict_silpakorn_logo.svg";
import { logoSponsors, teamRoles, textSponsors } from "@/lib/data";
import { socialLinks } from "@/lib/data";
import Link from "next/link";
import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <div className="text-grey-scale-black gap-y-3 p-8 md:p-16 background: linear-gradient(180deg, rgba(225, 206, 255, 0.00) 0%, #E1CEFF 114.25%);">
      <section className="flex flex-col items-center lg:flex-row lg:items-start lg:gap-16">
        <h2 className="text-base font-semibold mb-4 lg:w-1/4 lg:text-left lg:mb-0 text-grey-scale-black">
          About
        </h2>
        <p className="w-full text-sm leading-relaxed text-center lg:w-3/4 lg:text-left text-grey-scale-black">
          งานนิทรรศการฟลายแนร์รี ของเรามีแนวคิดเรื่องการขยับปีกของผีเสื้อ (fly,
          butterfly effect) ผลจากการปัดค่าทศนิยม ที่มีค่าน้อยมากๆ
          แต่สามารถนำไปสู่ความแตกต่างกันอย่างมหาศาล
          เมื่อระยะเวลาผ่านไปหลายปีผสมผสาน กับชุดรหัสดิจิทัลเลขฐานสอง (binary
          code) ซึ่งเป็นภาษาคอมพิวเตอร์ที่ใช้ในการสั่งงานอุปกรณ์ดิจิทัลให้ทำงาน
          หรือสร้างสรรค์ความสามารถในการแก้ปัญหาให้กับโลกที่กำลังเปลี่ยนแปลงอย่างไม่หยุดนิ่ง
          โดย นักศึกษาวิชาเอกอินเทอร์แอคทีฟแอปพลิเคชัน
          คณะเทคโนโลยีสารสนเทศและการสื่อสาร มหาวิทยาลัยศิลปากร
        </p>
      </section>

      <hr className="border-t border-black/20 my-12" />

      <header className="flex flex-col lg:flex-row w-full space-y-4 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-1/4 text-center lg:text-start text-base font-bold text-grey-scale-black">
          Insider
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 w-full lg:w-3/4">
          {teamRoles.map((data) => (
            <div key={data.role} className="text-center lg:text-start">
              <h3 className="text-base font-semibold text-grey-scale-black mb-3">
                {data.role}
              </h3>
              <ul className="space-y-2">
                {data.names.map((name) => (
                  <li key={name} className="text-grey-scale-grey md:truncate">
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </header>

      <Image
        src={LogoTypo}
        width={400}
        height={217}
        className="flex justify-center w-full p-4 lg:p-12"
        alt="logo"
      />

      <hr className="border-t border-black/20 my-12" />

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="lg:w-2/6">
          <h2 className="text-base text-center font-bold text-grey-scale-black lg:text-left">
            Supported By
          </h2>
        </div>

        <div className="flex-1 flex flex-col items-center lg:items-start gap-12">
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-10 sm:gap-16">
            {logoSponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className="flex flex-col items-center text-center gap-3"
              >
                <Link
                  href={`${sponsor.websiteUrl}?ref=flynary2025`}
                  target="_blank"
                >
                  <Image
                    src={sponsor.logoUrl}
                    alt={sponsor.name}
                    width={100}
                    height={100}
                    className="h-16 w-auto"
                  />
                </Link>
              </div>
            ))}
          </div>

          {/* ส่วนของ Sponsor ที่เป็น Text */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 w-full max-w-4xl">
            {textSponsors.map((sponsor) => (
              <div key={sponsor.name} className="text-center sm:text-left">
                <h3 className="font-semibold text-sm tracking-wider text-grey-scale-black">
                  {sponsor.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-t border-black/20 my-12" />

      <section className="flex flex-col items-center lg:flex-row lg:items-start w-full gap-4 lg:gap-8">
        <h2 className="text-lg font-semibold lg:w-1/4 lg:text-left text-grey-scale-black">
          Website Repo
        </h2>

        <div className="flex w-full justify-center gap-4 lg:w-3/4 lg:justify-end">
          <a
            href="https://github.com/Plaimee/flynary/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-grey-scale-grey transition-colors duration-200 hover:text-grey-scale-black"
          >
            <div className="flex w-full gap-x-5 underline">
              <Github className="h-6 w-6" />
              F[ynary (Github)
            </div>
          </a>
        </div>
      </section>

      <hr className="border-t border-black/20 my-12" />

      <section className="flex flex-col items-center lg:flex-row lg:items-start w-full gap-4 lg:gap-8">
        {/* ส่วนของ Title */}
        <h2 className="text-lg font-semibold lg:w-1/4 lg:text-left text-grey-scale-black">
          Follow us
        </h2>

        {/* ส่วนของไอคอน (แก้ไขแล้ว) */}
        <div className="flex w-full justify-center gap-4 lg:w-3/4 lg:justify-end">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-grey-scale-grey hover:text-grey-scale-black transition-colors duration-200"
              >
                <IconComponent className="w-6 h-6" />
              </a>
            );
          })}
        </div>
      </section>

      <div className="flex w-full flex-col items-center mt-6 gap-8 md:flex-row md:justify-between">
        <div className="flex-shrink-0">
          <Image
            src={SULogo}
            alt="ICT Silpakorn Logo"
            width={300}
            height={90}
            className="object-contain"
          />
        </div>

        <div className="text-center text-[14px] tracking-wider text-grey-scale-grey md:text-right">
          <Link href={`https://ict.su.ac.th/`}>
            <p className="uppercase">Interactive Application Programme</p>
            <p>INFORMATION AND COMMUNICATION</p>
            <p>TECHNOLOGY, SILPAKORN UNIVERSITY</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
