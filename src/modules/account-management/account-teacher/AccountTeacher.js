import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Table, TableBody, TableHead, TablePagination, TextField } from "@mui/material";
import TableRow from "../../../components/common/TableRow";
import TableCell from "../../../components/common/TableCell";
import { FiEdit } from "react-icons/fi";
import { FaRegTrashCan } from "react-icons/fa6";
import Overlay from "../../../components/common/Overlay";
import FormEdit from "./FormEditTeacher";
import FormCreate from "./FormCreateTeacher";
import { IoSearchOutline } from "react-icons/io5";
import { CiCircleRemove } from "react-icons/ci";
import CustomButton from "../../../components/common/Button";
import { Empty } from "antd";
import { setOpenCreate, setOpenDelete, setOpenEdit } from "../slices";

const AccountTeacher = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const inputRef = useRef(null);

  const { openEdit, openCreate, openDelete } = useSelector((state) => state.accountUser);

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
    { title: "Họ và tên", type: "text" },
    { title: "Email", type: "text" },
    { title: "Số điện thoại", type: "text" },
    { title: "Ngày sinh", type: "date" },
    { title: "Giới tính", type: "text" },
    { title: "Chuyên môn", type: "text" },
    { title: "Trạng thái", type: "text" },
    { title: "Ngày tạo", type: "date" },
    { title: "Ngày cập nhật", type: "date" },
    { title: "Hành động" },
  ];

  const data = [
    {
      id: "PSS135",
      username: "Nguyễn văn A",
      email: "nguyen.a@gmail.com",
      phone: "0987654321",
      dob: "1990-01-15",
      gender: "Nam",
      expertise: "Toán, Lý",
      status: "Đang hoạt động",
      created_at: "2023-03-16",
      updated_at: "2023-03-16"
    },
    {
      id: "PSS135",
      username: "Nguyễn Thị B",
      email: "nguyen.b@gmail.com",
      phone: "0912345678",
      dob: "1992-02-20",
      gender: "Nữ",
      expertise: "Tiếng Anh, Văn",
      status: "Chờ duyệt",
      created_at: "2023-02-12",
      updated_at: "2023-02-15"
    },
    {
      id: "PSS135",
      username: "Lê Minh C",
      email: "le.c@gmail.com",
      phone: "0934123456",
      dob: "1985-06-25",
      gender: "Nam",
      expertise: "Vật lý, Hóa học",
      status: "Đang hoạt động",
      created_at: "2020-06-24",
      updated_at: "2021-06-25"
    },
    {
      id: "PSS135",
      username: "Trần Thị D",
      email: "tran.d@gmail.com",
      phone: "0908765432",
      dob: "1998-08-15",
      gender: "Nữ",
      expertise: "Hóa học, Sinh học",
      status: "Tạm ngưng",
      created_at: "2019-05-18",
      updated_at: "2020-05-19"
    },
    {
      id: "PSS135",
      username: "Phạm Minh E",
      email: "pham.e@gmail.com",
      phone: "0945678901",
      dob: "1990-09-30",
      gender: "Nam",
      expertise: "Toán, Tin học",
      status: "Đang hoạt động",
      created_at: "2021-09-30",
      updated_at: "2021-10-01"
    },
  ];


  const totalCount = data.length;

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-[18px] font-bold">Danh sách tài khoản gia sư</p>
        <CustomButton onClick={() => dispatch(setOpenCreate(true))}>
          <p>Tạo tài khoản</p>
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
            {data.map((row, rowIndex) => (
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
                        "Họ và tên": row.username,
                        "Email": row.email,
                        "Số điện thoại": row.phone,
                        "Ngày sinh": row.dob,
                        "Giới tính": row.gender,
                        "Chuyên môn": row.expertise,
                        "Trạng thái": row.status,
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
        <FormCreate onCancel={() => dispatch(setOpenCreate(false))} />
      </Overlay>

      {/* Modal chỉnh sửa */}
      <Overlay isOpen={openEdit} onClose={() => dispatch(setOpenEdit(false))} title="Chỉnh Sửa">
        <FormEdit onCancel={() => dispatch(setOpenEdit(false))} />
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

export default AccountTeacher;
