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
import { setOpenDelete } from "./slices";

const Support = () => {
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
    { title: "Tên", type: "text" },
    { title: "Email", type: "text" },
    { title: "Số điện thoại", type: "text" },
    { title: "Ngày gửi", type: "date" },
    { title: "Trạng thái", type: "text" },
    { title: "Lời nhắn", type: "text" },
    { title: "Hành động", type: "action" },
  ];

  const data = [
    {
      name: "Nguyễn Văn A",
      email: "example@gmail.com",
      phone: "0987654321",
      created_at: "2024-11-20",
      status: "Chưa xử lý",
      message: "Mình có vấn đề với học phí",
    },
    {
      name: "Trần Thị B",
      email: "test@email.com",
      phone: "0123456789",
      created_at: "2024-11-19",
      status: "Đã phản hồi",
      message: "Cần hỗ trợ về khóa học Tiếng Anh",
    },
    {
      name: "Lê Minh C",
      email: "minh.c@example.com",
      phone: "0981234567",
      created_at: "2024-11-18",
      status: "Đang xử lý",
      message: "Khóa học Hóa học không hoạt động",
    },
    {
      name: "Phạm Thị D",
      email: "pham.d@example.com",
      phone: "0932323423",
      created_at: "2024-11-17",
      status: "Chưa xử lý",
      message: "Có câu hỏi về chương trình học lập trình Python",
    },
    {
      name: "Hoàng Thị E",
      email: "hoang.e@example.com",
      phone: "0912345678",
      created_at: "2024-11-16",
      status: "Đã phản hồi",
      message: "Yêu cầu thêm tài liệu học tiếng Anh",
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
                        <button onClick={() => dispatch(setOpenDelete(true))}>
                          <FaRegTrashCan />
                        </button>
                      </div>
                    ) : (
                      {
                        "Tên": row.name,
                        "Email": row.email,
                        "Số điện thoại": row.phone,
                        "Ngày gửi": row.created_at,
                        "Trạng thái": row.status,
                        "Lời nhắn": row.message,
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

      <Overlay isOpen={openDelete} onClose={() => dispatch(setOpenDelete(false))} title="Xóa Thông Tin">
        <div className="pl-4 pr-4 pb-4">
          <div className="text-[16px]">Bạn có chắc chắn muốn xóa không?</div>
          <div className="flex justify-end mt-4">
            <CustomButton type="primary" color="inherit" onClick={() => dispatch(setOpenDelete(false))}>
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

export default Support;
