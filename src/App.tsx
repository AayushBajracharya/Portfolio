import { SpeedInsights } from "@vercel/speed-insights/react";
import ScrollProgress from "./components/common/ScrollProgress";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <ScrollProgress />
      <AppRoutes />
      <SpeedInsights />
    </>
  );
}

export default App;
