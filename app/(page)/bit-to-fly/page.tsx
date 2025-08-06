import BitToFlyClient from "@/components/BitToFlyClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bit to Fly",
};

const BitToFlyPage = () => {
  return <BitToFlyClient />;
};
export default BitToFlyPage;
