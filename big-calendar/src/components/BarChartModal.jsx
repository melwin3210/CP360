import { useDispatch, useSelector } from "react-redux";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { closeModal } from "../redux/slices/CalendarSlice";

export default function BarChartModal() {
  const dispatch = useDispatch();
  const { selectedDate, events, modalOpen } = useSelector((state) => state.calendar);

  if (!modalOpen) return null;

  const data = events[selectedDate];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 sm:p-8 rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Data for {selectedDate}</h2>
        {!data ? (
          <div className="text-center py-12">
            <div className="text-yellow-500 text-4xl mb-4">⚠️</div>
            <p className="text-gray-600 text-lg">No data found for the selected date.</p>
          </div>
        ) : (
          <div className="flex justify-center mb-6 overflow-x-auto">
            <BarChart width={Math.min(500, window.innerWidth - 100)} height={300} data={data}>
              <CartesianGrid stroke="#e5e7eb" />
              <XAxis dataKey="user" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#3b82f6" />
            </BarChart>
          </div>
        )}
        <div className="text-center">
          <button 
            onClick={() => dispatch(closeModal())}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
