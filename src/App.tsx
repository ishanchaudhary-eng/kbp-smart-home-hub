import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import PageTracker from "@/components/PageTracker";
import ScrollToTop from "@/components/ScrollToTop";
import StickyButtons from "@/components/StickyButtons";
import Index from "./pages/Index";
import About from "./pages/About";
import Apartments from "./pages/Apartments";
import Plots from "./pages/Plots";
import Commercial from "./pages/Commercial";
import Location from "./pages/Location";
import Amenities from "./pages/Amenities";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PageTracker />
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/apartments" element={<Apartments />} />
          <Route path="/plots" element={<Plots />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/location" element={<Location />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <StickyButtons />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
