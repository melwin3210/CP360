

import BarChartModal from "./components/BarChartModal";
import CalendarView from "./components/CalendarView";

export default function App() {
  return (
    <div>
      <h1 className="font-bold text-2xl">📅 React Big Calendar with Bar Graph</h1>
      <CalendarView />
      <BarChartModal />
    </div>
  );
}
