import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Table, TableBody, TableHead, TablePagination, TextField } from "@mui/material";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { CiCircleRemove } from "react-icons/ci";
import { Empty } from "antd";
import TableCell from "../../components/common/TableCell";
import TableRow from "../../components/common/TableRow";
import CustomButton from "../../components/common/Button";
import Overlay from "../../components/common/Overlay";

const PaymentStudent = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const inputRef = useRef(null);

  const { openDelete } = useSelector((state) => state.support);

  const handleInputChange = (event) => {
	setKeyword(event.target.value);
  };

  const handleClearClick = () => {
	setKeyword("");
	if (inputRef.current) {
	  inputRef.current.focus();
	}
  };
  const columns = [
	{ title: "Tên học viên", type: "text" },
	{ title: "Môn học", type: "text" },
	{ title: "Học phí", type: "text" },
	{ title: "Ngày thanh toán", type: "date" },
	{ title: "Trạng thái thanh toán", type: "text" },
	{ title: "Phương thức thanh toán", type: "text" },
	{ title: "Hành động", type: "action" },
  ];
  

  const data = [
	{
	  name: "Nguyễn Văn A",
	  course: "Lập trình Web",
	  tuition: "2,000,000 VND",
	  payment_date: "2024-11-20",
	  status: "Đã thanh toán",
	  payment_method: "Chuyển khoản",
	},
	{
	  name: "Trần Thị B",
	  course: "Tiếng Anh giao tiếp",
	  tuition: "1,500,000 VND",
	  payment_date: "2024-11-19",
	  status: "Chưa thanh toán",
	  payment_method: "Thẻ tín dụng",
	},
	{
	  name: "Lê Minh C",
	  course: "Toán cao cấp",
	  tuition: "2,500,000 VND",
	  payment_date: "2024-11-18",
	  status: "Đang chờ xác nhận",
	  payment_method: "Tiền mặt",
	},
	{
	  name: "Phạm Thị D",
	  course: "Lập trình Python",
	  tuition: "2,000,000 VND",
	  payment_date: "2024-11-17",
	  status: "Chưa thanh toán",
	  payment_method: "Chuyển khoản",
	},
	{
	  name: "Hoàng Thị E",
	  course: "Hóa học đại cương",
	  tuition: "1,800,000 VND",
	  payment_date: "2024-11-16",
	  status: "Đã thanh toán",
	  payment_method: "Thẻ tín dụng",
	},
  ];
  

  const totalCount = data.length;

  return (
	<>
	  <div className="relative border border-gray-300 flex items-center mx-auto rounded-lg max-w-md h-10 mt-3 mb-5">
		<div style={{ width: "85%" }} className="flex items-center justify-between">
		  <TextField
			id="keyword"
			type="text"
			placeholder="search"
			size="small"
			fullWidth
			value={keyword}
			onChange={handleInputChange}
			inputProps={{ maxLength: 255 }}
			InputProps={{
			  style: {
				border: "none",
				width: "100%",
			  },
			  classes: {
				notchedOutline: "customOutline",
			  },
			}}
			className="relative border"
			variant="outlined"
		  />
		  {keyword && (
			<CiCircleRemove className="mr-2 cursor-pointer" onClick={handleClearClick} />
		  )}
		</div>

		<button
		  id="button-search"
		  style={{ width: "15%" }}
		  className=" h-10 flex justify-center items-center bg-[#1c5474] text-white text-[20px] absolute right-0">
		  <IoSearchOutline />
		</button>
	  </div>

	  <div className="flex justify-end mt-3">
		<p className="text-sm text-gray-500">Total: {totalCount}</p>
	  </div>
	  <div className="overflow-x-auto">
		<Table sx={{ minWidth: 700 }}>
		  <TableHead>
			<TableRow isHeader={true}>
			  {columns.map((column, index) => (
				<TableCell key={index} type="header">
				  {column.title}
				</TableCell>
			  ))}
			</TableRow>
		  </TableHead>
		  <TableBody>
			{data?.length > 0 && data.map((row, rowIndex) => (
			  <TableRow key={rowIndex}>
				{columns.map((column, colIndex) => (
				  <TableCell key={colIndex} type={column.type}>
					{column.title === "Hành động" ? (
					  <div className="text-[16px] ml-5">
						<button onClick={() => dispatch()}>
						  <FaRegTrashCan />
						</button>
					  </div>
					) : (
						{
							"Tên học viên": row.name,
							"Môn học": row.course,
							"Học phí": row.tuition,
							"Ngày thanh toán": row.payment_date,
							"Trạng thái thanh toán": row.status,
							"Phương thức thanh toán": row.payment_method,
						  }[column.title] || null
						  
					)}
				  </TableCell>

				))}
			  </TableRow>
			))}
		  </TableBody>

		  {data?.length === 0 && (
			<TableRow>
			  <TableCell colSpan={Object.keys(columns).length} className="py-4">
				<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
			  </TableCell>
			</TableRow>
		  )}
		</Table>

		{data?.length > 0 && (
		  <Box display="flex" justifyContent="end" mt={1}>
			<TablePagination
			  component="div"
			  count={data.length}
			  rowsPerPageOptions={[5, 10, 25]}
			  showFirstButton
			  showLastButton
			  labelRowsPerPage={"Số bản ghi hiển thị trên mỗi trang"}
			/>
		  </Box>
		)}
	  </div>

	  <Overlay isOpen={openDelete} onClose={() => dispatch()} title="Xóa Thông Tin">
		<div className="pl-4 pr-4 pb-4">
		  <div className="text-[16px]">Bạn có chắc chắn muốn xóa không?</div>
		  <div className="flex justify-end mt-4">
			<CustomButton type="primary" color="inherit" onClick={() => dispatch()}>
			  <p>Hủy</p>
			</CustomButton>
			<CustomButton type="success" color="primary">
			  <p>Đồng ý</p>
			</CustomButton>
		  </div>
		</div>
	  </Overlay>
	</>
  );
};

export default PaymentStudent;
