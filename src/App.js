import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LandingHeader from "./components/landingPages/LandingHeader";
import LandingFooter from "./components/landingPages/LandingFooter";
import WebsiteHeader from "./components/website/WebsiteHeader";
import WebsiteFooter from "./components/website/WebsiteFooter";
import { routes } from "./constant";
import { lazy, Suspense } from "react";
import { LoadingSpinner } from "./components/common/LoadingSpinner";
import SpinnerContextProvider, {
  LoadingSpinnerContext,
} from "./components/SpinnerContext";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/common/ScrollToTop";
import TawkToChat from "./components/common/TawkToChat";
import WhatsappIcon from "./components/common/WhatsappIcon";

const LandingPage = lazy(() => import("./pages/landingPages/LandingPage"));
const Thankyou = lazy(() => import("./pages/Thankyou"));

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

AOS.init({
  once: true,
  duration: 500,
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SpinnerContextProvider>
        <LoadingSpinnerContext />
        <Suspense fallback={<LoadingSpinner />}>
          <Toaster />
          <ScrollToTop />
          <WhatsappIcon />
          <TawkToChat />
          <Routes>
            {/* Website Pages */}
            {routes.map(({ component, name, path }, index) => (
              <Route
                key={path}
                path={path}
                element={
                  <>
                    <WebsiteHeader name={name} />
                    {component}
                    <WebsiteFooter />
                  </>
                }
              />
            ))}

            <Route path="/thankyou" element={<Thankyou />} />

            {/* Landing Pages */}
            <Route
              path="/web-development"
              element={
                <>
                  <LandingHeader page={"web"} />
                  <LandingPage page={"web"} />
                  <LandingFooter />
                </>
              }
            />
            <Route
              path="/app-development"
              element={
                <>
                  <LandingHeader page={"app"} />
                  <LandingPage page={"app"} />
                  <LandingFooter />
                </>
              }
            />
            <Route
              path="/ai-development"
              element={
                <>
                  <LandingHeader page={"ai"} />
                  <LandingPage page={"ai"} />
                  <LandingFooter />
                </>
              }
            />
            <Route
              path="/iot-development"
              element={
                <>
                  <LandingHeader page={"iot"} />
                  <LandingPage page={"iot"} />
                  <LandingFooter />
                </>
              }
            />
          </Routes>
        </Suspense>
      </SpinnerContextProvider>
    </QueryClientProvider>
  );
}
