

import BarChartModal from "./components/BarChartModal";
import CalendarView from "./components/CalendarView";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl  px-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-1">
          📅 React Big Calendar with Bar Graph
        </h1>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <CalendarView />
        </div>
      </div>
      <BarChartModal />
    </div>
  );
}
