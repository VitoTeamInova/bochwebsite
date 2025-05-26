
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Inicio from "./pages/Inicio";
import AreasAtuacao from "./pages/AreasAtuacao";
import QuemSomos from "./pages/QuemSomos";
import Depoimentos from "./pages/Depoimentos";
import Noticias from "./pages/Noticias";
import Contato from "./pages/Contato";
import AreaCliente from "./pages/AreaCliente";
import DataConfig from "./pages/DataConfig";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="areas-atuacao" element={<AreasAtuacao />} />
            <Route path="quem-somos" element={<QuemSomos />} />
            <Route path="depoimentos" element={<Depoimentos />} />
            <Route path="noticias" element={<Noticias />} />
            <Route path="contato" element={<Contato />} />
            <Route path="area-cliente" element={<AreaCliente />} />
            <Route path="data-config" element={<DataConfig />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
