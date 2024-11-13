import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogAdmin } from "../../../store/blogSlice";

export default function BlogStatusChart() {
  const dispatch = useDispatch();
  const [chartData, setChartData] = useState([]);
  const status_counts = useSelector((state) => state.blog.status_counts);

  useEffect(() => {
    dispatch(getAllBlogAdmin());
  }, [dispatch]);

  useEffect(() => {
    if (status_counts) {
      const data = [
        { name: "Draft", count: status_counts.draft },
        { name: "Published", count: status_counts.published },
      ];
      setChartData(data);
    }
  }, [status_counts]);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8">
          <LabelList dataKey="count" position="top" fill="#8884d8" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
