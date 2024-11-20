import React from "react";
import { Empty } from "antd";
import { Table, TableBody, TableHead } from "@mui/material";
import TableRow from "../../components/common/TableRow";
import TableCell from "../../components/common/TableCell";


const Overview = () => {
  const data = [
    {
      title: "Tổng số gia sư",
      count: "14k",
      percentage: "+25%",
      color: "#237920",
      bgColor: "#f6fef7",
      gradientId: "area-gradient-14k"
    },
    {
      title: "Tổng số học viên",
      count: "25k",
      percentage: "+30%",
      color: "#237920",
      bgColor: "#f6fef7",
      gradientId: "area-gradient-25k"
    },
    {
      title: "Tổng doanh thu",
      count: "500M",
      percentage: "+10%",
      color: "#237920",
      bgColor: "#f6fef7",
      gradientId: "area-gradient-500M"
    },
    {
      title: "Số lượng yêu cầu hỗ trợ",
      count: "20M",
      percentage: "+50%",
      color: "#237920",
      bgColor: "#f6fef7",
      gradientId: "area-gradient-500M"
    },
  ];
  // Data for table
  const tableData = [
    {
      title: "Tổng số lớp học đã thực hiện",
      count: "8,000",
    },
    {
      title: "Tổng số lớp học còn lại",
      count: "5,000",
    },
    {
      title: "Số lượng gia sư đang hoạt động",
      count: "10,000",
    },
    {
      title: "Số lượng học viên mới",
      count: "1,200",
    },
    {
      title: "Tỷ lệ học viên hoàn thành khóa học",
      count: "85%",
    },
    {
      title: "Số lượng lớp học đã được đánh giá",
      count: "7,500",
    },
    {
      title: "Số lượng gia sư được đánh giá",
      count: "8,000",
    },
    {
      title: "Tỷ lệ gia sư đạt điểm đánh giá cao",
      count: "70%",
    },
    {
      title: "Số lượng lớp học bị hủy",
      count: "200",
    },
    {
      title: "Số lượng lớp học bị hoãn",
      count: "150",
    },
  ];

  const columns = [
    { title: "Tên", key: "title" },
    { title: "Số lượng", key: "count" },
  ];

  return (
    <div className="!bg-[#fcfcfc]">
      <div className="flex gap-5">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 w-[380px] h-[150px] shadow-sm rounded-md p-4"
          >
            <h3 className="text-sm font-semibold">{item.title}</h3>
            <div className="flex justify-between items-center mt-2">
              <h2 className="text-2xl font-bold">{item.count}</h2>
              <div
                className="w-[60px] px-1 flex items-center justify-center rounded-full"
                style={{
                  backgroundColor: item.bgColor,
                  borderColor: item.color,
                }}
              >
                <p
                  className="font-bold text-[14px]"
                  style={{ color: item.color }}
                >
                  {item.percentage}
                </p>
              </div>
            </div>
            <p className="text-[13px] text-gray-500">Sau 30 ngày</p>
            <div className="MuiBox-root css-1sj397l">
              <div className="css-1sdz8ad">
                <svg
                  width={348}
                  height={50}
                  viewBox="0 0 348 50"
                  className="css-fa55ma"
                >
                  <title />
                  <desc />
                  <defs>
                    <linearGradient
                      id={item.gradientId}
                      x1="50%"
                      y1="0%"
                      x2="50%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        stopColor="hsl(120, 60%, 45%)"
                        stopOpacity="0.3"
                      />
                      <stop
                        offset="100%"
                        stopColor="hsl(120, 60%, 45%)"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <g>
                    <clipPath
                      id=":r143:-auto-generated-id-0-area-clip"
                    >
                      <rect x={0} y={0} width={348} height={50} />
                    </clipPath>
                    <g clipPath="url(#:r143:-auto-generated-id-0-area-clip)">
                      <path
                        cursor="unset"
                        className="MuiAreaElement-root MuiAreaElement-series-auto-generated-id-0 css-161qctm"
                        d="M10.633,37L21.9,44.04L33.167,36.2L44.433,34.6L55.7,35.4L66.967,29.8L78.233,41L89.5,35.4L100.767,33.8L112.033,35.4L123.3,33L134.567,31.4L145.833,32.2L157.1,30.6L168.367,31.4L179.633,29.8L190.9,30.6L202.167,29L213.433,29.8L224.7,28.2L235.967,29L247.233,19.4L258.5,31.4L269.767,26.6L281.033,27.4L292.3,25.8L303.567,26.6L314.833,21L326.1,9.8L337.367,8.2L337.367,45L326.1,45L314.833,45L303.567,45L292.3,45L281.033,45L269.767,45L258.5,45L247.233,45L235.967,45L224.7,45L213.433,45L202.167,45L190.9,45L179.633,45L168.367,45L157.1,45L145.833,45L134.567,45L123.3,45L112.033,45L100.767,45L89.5,45L78.233,45L66.967,45L55.7,45L44.433,45L33.167,45L21.9,45L10.633,45Z"
                        fill={`url(#${item.gradientId})`}
                      />
                    </g>
                  </g>
                  <g>
                    <clipPath
                      id=":r143:-auto-generated-id-0-line-clip"
                    >
                      <rect x={0} y={0} width={348} height={50} />
                    </clipPath>
                    <g clipPath="url(#:r143:-auto-generated-id-0-line-clip)">
                      <path
                        cursor="unset"
                        className="MuiLineElement-root MuiLineElement-series-auto-generated-id-0 css-ac5jcf"
                        d="M10.633,37L21.9,44.04L33.167,36.2L44.433,34.6L55.7,35.4L66.967,29.8L78.233,41L89.5,35.4L100.767,33.8L112.033,35.4L123.3,33L134.567,31.4L145.833,32.2L157.1,30.6L168.367,31.4L179.633,29.8L190.9,30.6L202.167,29L213.433,29.8L224.7,28.2L235.967,29L247.233,19.4L258.5,31.4L269.767,26.6L281.033,27.4L292.3,25.8L303.567,26.6L314.833,21L326.1,9.8L337.367,8.2"
                        fill="none"
                        stroke="hsl(120, 60%, 45%)"
                        strokeWidth="2"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Table for overview data */}
      <div className="mt-7">
        <h3 className="font-bold text-base mb-4">Chi tiết thống kê</h3>
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow isHeader={true}>
              {columns.map((column, index) => (
                <TableCell key={index}>{column.title}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData?.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          {tableData?.length === 0 && (
            <TableRow>
              <TableCell colSpan={columns.length} className="py-4">
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
              </TableCell>
            </TableRow>
          )}
        </Table>
      </div>
    </div>
  );
};

export default Overview;
