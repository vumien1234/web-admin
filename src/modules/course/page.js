import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Table, TableBody, TableHead, TablePagination, TextField } from "@mui/material";
import { FiEdit } from "react-icons/fi";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { CiCircleRemove } from "react-icons/ci";
import { Empty } from "antd";
import TableCell from "../../components/common/TableCell";
import TableRow from "../../components/common/TableRow";
import Overlay from "../../components/common/Overlay";
import FormCreateCourse from "./FormCreateCourse";
import FormEditCourse from "./FormEditCourse";
import CustomButton from "../../components/common/Button";
import { setOpenCreate, setOpenDelete, setOpenEdit } from "./slice";

const Course = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const inputRef = useRef(null);

  const { openEdit, openCreate, openDelete } = useSelector((state) => state.course);

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
    { title: "id", type: "string" },
    { title: "Tên khóa học", type: "text" },
    { title: "Giảng viên", type: "text" },
    { title: "Chuyên ngành", type: "text" },
    { title: "Ngày bắt đầu", type: "date" },
    { title: "Ngày kết thúc", type: "date" },
    { title: "Số tín chỉ", type: "number" },
    { title: "Trạng thái", type: "text" },
    { title: "Học phí", type: "number" },
    { title: "Ngày tạo", type: "date" },
    { title: "Ngày cập nhật", type: "date" },
    { title: "Hành động" },
  ];
  
  const data = [
    {
      id: "KH001",
      courseName: "Toán học cơ bản",
      instructor: "Nguyễn Văn A",
      major: "Toán học",
      startDate: "2024-01-15",
      endDate: "2024-06-15",
      credits: 3,
      status: "Đang mở",
      tuition: 2000000,
      created_at: "2023-12-01",
      updated_at: "2024-01-10"
    },
    {
      id: "KH002",
      courseName: "Tiếng Anh nâng cao",
      instructor: "Trần Thị B",
      major: "Tiếng Anh",
      startDate: "2024-02-01",
      endDate: "2024-07-01",
      credits: 4,
      status: "Đã kết thúc",
      tuition: 3500000,
      created_at: "2023-11-15",
      updated_at: "2024-01-05"
    },
    {
      id: "KH003",
      courseName: "Hóa học ứng dụng",
      instructor: "Lê Minh C",
      major: "Hóa học",
      startDate: "2023-09-01",
      endDate: "2023-12-15",
      credits: 3,
      status: "Tạm ngưng",
      tuition: 2500000,
      created_at: "2023-07-10",
      updated_at: "2023-08-01"
    },
    {
      id: "KH004",
      courseName: "Kỹ năng giao tiếp",
      instructor: "Phạm Thị D",
      major: "Kỹ năng mềm",
      startDate: "2024-03-01",
      endDate: "2024-06-01",
      credits: 2,
      status: "Đang mở",
      tuition: 1500000,
      created_at: "2023-12-20",
      updated_at: "2024-01-15"
    },
    {
      id: "KH005",
      courseName: "Cơ bản lập trình Python",
      instructor: "Phạm Minh E",
      major: "Khoa học máy tính",
      startDate: "2024-04-01",
      endDate: "2024-07-30",
      credits: 5,
      status: "Đang mở",
      tuition: 4000000,
      created_at: "2023-12-25",
      updated_at: "2024-02-01"
    },
  ];
  
  const totalCount = data.length;

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-[18px] font-bold">Danh sách khoá học</p>
        <CustomButton onClick={() => dispatch(setOpenCreate(true))}>
          <p>Tạo khoá học</p>
        </CustomButton>
      </div>

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
                      <div className="text-[16px]">
                        <button className="pr-3" onClick={() => dispatch(setOpenEdit(true))}>
                          <FiEdit />
                        </button>
                        <button onClick={() => dispatch(setOpenDelete(true))}>
                          <FaRegTrashCan />
                        </button>
                      </div>
                    ) : (
                      {
                        "id": row.id,
                        "Tên khóa học": row.courseName,
                        "Giảng viên": row.instructor,
                        "Chuyên ngành": row.major,
                        "Ngày bắt đầu": row.startDate,
                        "Ngày kết thúc": row.endDate,
                        "Số tín chỉ": row.credits,
                        "Trạng thái": row.status,
                        "Học phí": row.tuition,
                        "Ngày tạo": row.created_at,
                        "Ngày cập nhật": row.updated_at,
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

      {/* Modal tạo mới */}
      <Overlay isOpen={openCreate} onClose={() => dispatch(setOpenCreate(false))} title="Tạo mới">
        <FormCreateCourse onCancel={() => dispatch(setOpenCreate(false))} />
      </Overlay>

      {/* Modal chỉnh sửa */}
      <Overlay isOpen={openEdit} onClose={() => dispatch(setOpenEdit(false))} title="Chỉnh Sửa">
        <FormEditCourse onCancel={() => dispatch(setOpenEdit(false))} />
      </Overlay>

      {/* Modal xóa */}
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

    </div>
  );
};

export default Course;
