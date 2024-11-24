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
  Label,
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
        { name: "Draft", count: status_counts.draft, color: "#8884d8" }, 
        { name: "Published", count: status_counts.published, color: "#82ca9d" }, 
      ];
      setChartData(data);
    }
  }, [status_counts]);

  return (
    <div style={{ textAlign: "center" }}>
      <h3 style={{ marginBottom: "20px" }}>Blog Status Overview</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name">
            <Label value="Blog Status" offset={-10} position="insideBottom" />
          </XAxis>
          <YAxis>
            <Label
              value="Number of Blogs"
              angle={-90}
              position="insideLeft"
              style={{ textAnchor: "middle" }}
            />
          </YAxis>
          <Tooltip />
          <Legend />
          <Bar dataKey="count">
            {chartData.map((entry, index) => (
              <Bar key={`bar-${index}`} dataKey="count" fill={entry.color}>
                <LabelList dataKey="count" position="top" fill={entry.color} />
              </Bar>
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
