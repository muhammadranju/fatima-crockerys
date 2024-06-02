// import "./App.css";
// import { ThemeProvider } from "@/components/theme-provider";

import { HeroSection } from "./customUI/HeroSection";
import { FeatureSection } from "./customUI/FeatureSection";
import { Navbar } from "./customUI/Navbar";
import { ProductSection } from "./customUI/ProductSection";
import { FooterSection } from "./customUI/FooterSection";

function App() {
  return (
    <>
      {/* <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme"> */}
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <ProductSection />
      <FooterSection />

      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
