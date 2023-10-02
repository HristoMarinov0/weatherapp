import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import App from "./App";
import HourlyChart from './components/HourlyChart';
import ErrorPage from "./components/ErrorPage";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route path="daily/:dayNumber" element={<HourlyChart />} />
    </Route>
  )
);

export default router;
