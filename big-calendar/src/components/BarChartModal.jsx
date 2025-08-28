import { useDispatch, useSelector } from "react-redux";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { closeModal } from "../redux/slices/CalendarSlice";

export default function BarChartModal() {
  const dispatch = useDispatch();
  const { selectedDate, events, modalOpen } = useSelector((state) => state.calendar);

  if (!modalOpen) return null;

  const data = events[selectedDate];
  if (!data) {
    alert("No data found for the selected date.");
    dispatch(closeModal());
    return null;
  }

  return (
    <div className="absolute top-24 left-1/2 transform -translate-x-1/2 bg-white p-6 border border-gray-300 shadow-lg rounded-lg z-50">
      <h2 className="text-xl font-semibold mb-4">Data for {selectedDate}</h2>
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="user" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
      <button 
        onClick={() => dispatch(closeModal())}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Close
      </button>
    </div>
  );
}
