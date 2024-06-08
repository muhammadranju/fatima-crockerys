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
        <div className="relative h-full w-full bg-slate-950">
          <div className="absolute bottom-0  left-0 right-0 top-0 bg-[radial-gradient(circle_1200px_at_50%_100px,#fed7aa,transparent)]"></div>
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
