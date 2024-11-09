import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogAdmin } from "../../../store/blogSlice";

export default function BlogStatusChart() {
  const dispatch = useDispatch();
  const [chartData, setChartData] = useState([]);
  const { blogs } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getAllBlogAdmin());
  }, [dispatch]);

  useEffect(() => {
    if (blogs && blogs.status_counts) {
      const data = [
        { name: "Draft", count: blogs.status_counts.draft },
        { name: "Published", count: blogs.status_counts.published },
      ];
      setChartData(data);
    }
  }, [blogs]);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="count"
          stroke="#8884d8"
          label={{ position: "top", fill: "#8884d8" }} 
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
