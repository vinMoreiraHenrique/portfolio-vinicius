import Image from "next/image";

import { theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import Header from "@/components/Header";
import CommonButton from "@/components/CommonButton";
import GenericContainer from "@/components/GenericContainer";
import WelcomeSection from "@/components/WelcomeSection";


export default function Home() {
  return (
    <main>
      <div>
        <Header />
        <WelcomeSection />
        
      </div>
    </main>
  );
}
