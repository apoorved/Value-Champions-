
import * as React from "react";
import { MobileNav } from "./MobileNav";
import { LargeNav } from "./LargeNav";
import { navConfig } from "../configs/navConfig";
import Image from "next/image";

function ResponsiveAppBar() {
  return (
    <>
      <MobileNav {...{ pages: navConfig}}/>
      <LargeNav {...{ pages: navConfig}}/>
    </>
  );
}
export default ResponsiveAppBar;
