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
    <div style={{
      position: "absolute",
      top: "100px",
      left: "50%",
      transform: "translateX(-50%)",
      background: "#fff",
      padding: "20px",
      border: "1px solid #ddd",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      zIndex: 1000
    }}>
      <h2>Data for {selectedDate}</h2>
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="user" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
      <button onClick={() => dispatch(closeModal())}>Close</button>
    </div>
  );
}
