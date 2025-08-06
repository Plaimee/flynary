import KeynoteClient from "@/components/KeynoteClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Keynote",
};
const KeynotePage = () => {
  return <KeynoteClient />;
};
export default KeynotePage;
