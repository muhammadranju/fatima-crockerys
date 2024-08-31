import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import { HeroSection } from "./customUI/HeroSection";
import { FeatureSection } from "./customUI/FeatureSection";
import { Navbar } from "./customUI/Navbar";
import { ProductSection } from "./customUI/ProductSection";
import { FooterSection } from "./customUI/FooterSection";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {/* <div className="bg-gray-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]  dark:bg-slate-900 text-gray-800 dark:text-gray-100"> */}
        <div className="absolute top-0 z-[-2]  w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          <Navbar />
          <HeroSection />
          <FeatureSection />
          <ProductSection />
          <FooterSection />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
