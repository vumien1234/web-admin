import React, { useEffect, useState } from "react";
import { Box, Menu, MenuItem } from "@mui/material";
import Avata from "../../assets/image/avatar.jpg";
import { BsBell } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import Overlay from "../common/Overlay";
import { IoMdClose } from "react-icons/io";
import { MdHistory, MdPerson, MdLogout } from "react-icons/md";
import { paths, routes } from "../../routes";
import { useLocation, useNavigate } from "react-router-dom";
import { CiCircleRemove } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { cleanup } from "../../modules/auth/slices";
import CustomButton from "../common/Button";
const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [anchorEl, setAnchorEl] = useState(null);
    const [currentMenuTitle, setCurrentMenuTitle] = useState("");
    const [openLogout, setOpenLogout] = useState(false);

    useEffect(() => {
        const findCurrentTitle = () => {
            if (location.pathname === "/profile") {
                setCurrentMenuTitle("profile");
                return;
            }

            paths.forEach((path) => {
                if (path.to === location.pathname) {
                    setCurrentMenuTitle(path.category || path.name);
                } else if (path.children) {
                    path.children.forEach((child) => {
                        if (child.to === location.pathname) {
                            setCurrentMenuTitle(child.name);
                        }
                    });
                }
            });
        };

        findCurrentTitle();
    }, [location.pathname]);

    const handleOpenSearch = () => {
        setIsSearchOpen(true);
    };

    const handleCloseSearch = () => {
        setIsSearchOpen(false);
        setSearchValue("");
    };

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleAvatarClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleProfile = () => {
        handleCloseMenu();
        navigate("/profile");
    };


    const handleClearInput = () => {
        setSearchValue("");
    };

    const handleLogout = () => {
        dispatch(cleanup());
        localStorage.removeItem("token");
        navigate(routes.login.path);
    };

    const handleClose = () => {
        setOpenLogout(false);
    };

    return (
        <Box sx={{ px: 2.5 }} className="wrapper-header">
            <p className="breacrumb-header">{currentMenuTitle}</p>
            <div className="header-right">
                <BsBell className="information" />
                <div className="header-search" onClick={handleOpenSearch}>
                    <CiSearch id="icon-search" />
                    <span id="text-search">search</span>
                </div>
                <img
                    alt="Avatar"
                    src={Avata}
                    className="avata-personal cursor-pointer"
                    onClick={handleAvatarClick}
                />
            </div>
            <Overlay isOpen={isSearchOpen} onClose={handleCloseSearch}>
                <Box className="popup-search relative p-4">
                    <div className="relative flex items-center pb-2 border-b border-gray-300">
                        <CiSearch className="mr-2 text-[17px] text-[#0D5EF4]" />
                        <div className="flex items-center justify-between w-full relative">
                            <input
                                type="text"
                                className="text-gray-500 text-[12px] outline-none flex-1 relative"
                                placeholder="Tìm kiếm..."
                                value={searchValue}
                                onChange={handleInputChange}
                                autoFocus
                            />
                            {searchValue && (
                                <CiCircleRemove
                                    className="cursor-pointer absolute right-7 top-1/2 transform -translate-y-1/2"
                                    onClick={handleClearInput}
                                />
                            )}
                        </div>
                    </div>
                    <div
                        className="button-close-search right-2 absolute text-[25px] cursor-pointer top-3"
                        onClick={handleCloseSearch}>
                        <IoMdClose />
                    </div>
                    <div>
                        <p className="text-[12px] mt-2 text-gray-500">recently</p>
                        <div
                            id="item-history"
                            className="flex items-center p-2 mt-2 h-[40px] border bg-gray-50 rounded cursor-pointer">
                            <MdHistory id="icon-history" className="text-[#898989cc] text-[16px]" />
                            <p className="pl-3 text-[12px]">aircraft_management</p>
                        </div>
                    </div>
                </Box>
            </Overlay>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                className="mt-2">
                <MenuItem onClick={handleProfile}>
                    <MdPerson className="mr-2 text-[18px]" />
                    profile
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                    <MdLogout className="mr-2 text-[18px]" />
                    <p onClick={handleLogout}>logout</p>
                </MenuItem>
            </Menu>

            <Overlay isOpen={openLogout} onClose={handleClose}>
                <div style={{ width: "500px" }}>
                    <div className="mb-4 text-[16px] font-bold bg-[#c1fdec] p-3 header-edit-afterFlying">
                        Đăng xuất
                    </div>
                    <div className="pl-4 pr-4 pb-4">
                        <div className="text-[16px]">Bạn có chắc chắn muốn đăng xuất không ?</div>
                        <div className="flex justify-end gap-2 mt-4">
                            <CustomButton type="primary" color="inherit">
                                <p onClick={handleClose}>Hủy</p>
                            </CustomButton>
                            <CustomButton type="success" color="primary">
                                <p>Đồng ý</p>
                            </CustomButton>
                        </div>
                    </div>
                </div>
            </Overlay>
        </Box>
    );
};

export default Header;
