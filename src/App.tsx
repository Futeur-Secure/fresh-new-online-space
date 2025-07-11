
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import GetStarted from "./pages/GetStarted";
import BookDemo from "./pages/BookDemo";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import FuteurShield from "./pages/FuteurShield"
import FuteurVault from "./pages/FuteurVault"
import FeaturesBenefits from "./pages/Features"
import ProductsSolutions from "./pages/Soutions"
import Documentation from "./pages/Documentation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/book-demo" element={<BookDemo />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/shield" element={<FuteurShield />} />
        <Route path="/vault" element={<FuteurVault />} />
        <Route path="/solutions" element={<ProductsSolutions />} />
        <Route path="/features" element={<FeaturesBenefits />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
