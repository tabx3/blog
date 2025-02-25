import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Mdx_Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
}
