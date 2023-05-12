import Image from "next/image";

import { theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <div>
        <Header />
      </div>
    </main>
  );
}
