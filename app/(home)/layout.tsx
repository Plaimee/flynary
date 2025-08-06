import HomepageNavbar from "@/components/HomepageNavbar";
import HomepageFooter from "@/components/HomepageFooter";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "Home"
}  

export default function HomepageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="homepage-bg flex flex-col min-h-screen">
      <HomepageNavbar />
      <main className="flex-grow container mx-auto px-4">{children}</main>
      <HomepageFooter />
    </div>
  );
}
