import Image from "next/image";

import { theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import Header from "@/components/Header";
import CommonButton from "@/components/CommonButton";

export default function Home() {
  return (
    <main>
      <div>
        <Header />
        <CommonButton text="Click on me"/>
      </div>
    </main>
  );
}
