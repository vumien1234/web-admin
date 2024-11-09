import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Drawer from "../../components/custom/Drawer";
import AvatarAccount from "../../assets/image/avatar.jpg";
import { MdPerson, MdLogout, MdOutlineLanguage } from "react-icons/md";
import { MenuItem, Box } from "@mui/material";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Overlay from "../../components/common/Overlay";

const MobileLayout = ({ children, activeItem }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [contentHeight, setContentHeight] = useState("auto");
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    // Toggle Drawer
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    // Update content height based on window size
    useEffect(() => {
        const updateHeight = () => {
            const headerHeight = 70;
            const availableHeight = window.innerHeight - headerHeight;
            setContentHeight(availableHeight);
        };

        updateHeight();
        window.addEventListener("resize", updateHeight);

        return () => {
            window.removeEventListener("resize", updateHeight);
        };
    }, []);
    // Handle navigation to profile
    const handleProfile = () => {
        setIsDrawerOpen(false);
        navigate("/profile");
    };

    // Handle logout action
    const handleLogout = () => {
        console.log("Logged out");
    };

    // Open search modal
    const handleOpenSearch = () => {
        setIsSearchOpen(true);
    };

    // Close search modal
    const handleCloseSearch = () => {
        setIsSearchOpen(false);
        setSearchValue("");
    };

    // Handle input change
    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className="mobile-layout relative min-h-screen overflow-hidden">
            {/* Mobile Header */}
            <header
                style={{ height: "70px" }}
                className="mobile-header p-4 bg-[#44C79E] text-white fixed w-full z-50">
                <h1 className="text-xl">Drone</h1>
                <div className="flex items-center">
                    <IoSearchOutline
                        className="text-[25px] cursor-pointer"
                        onClick={handleOpenSearch}
                    />
                    <button className="text-2xl pl-5" onClick={toggleDrawer}>
                        {isDrawerOpen ? "✖" : "☰"}
                    </button>
                </div>
            </header>

            {/* Drawer Menu */}
            {isDrawerOpen && (
                <div
                    className="drawer-overlay fixed inset-0 bg-gray-800 bg-opacity-50 z-40"
                    onClick={toggleDrawer}
                />
            )}
            <div
                className={`drawer-content fixed top-[70px] right-0 bg-white z-50 transition-transform transform ${
                    isDrawerOpen ? "translate-x-0" : "translate-x-full"
                }`}
                style={{ width: "80%", height: `${contentHeight}px` }}>
                <div className="flex items-center p-4 border-b border-b-gray-300">
                    <img className="w-10 h-10 rounded-lg" src={AvatarAccount} alt="User Avatar" />
                    <div className="ml-4">
                        <p className="font-bold">Vũ Thị Miên</p>
                        <p className="text-[#bfbfbf]">mocmien@gmail.com</p>
                    </div>
                </div>

                <div className="mt-5">
                    <p className="text-[#9f9e9e] pl-5">Page</p>
                    <Drawer closeDrawer={toggleDrawer} />
                </div>

                <div>
                    <p className="text-[#9f9e9e] pl-5">User</p>
                    {/* Profile Option */}
                    <MenuItem
                        onClick={handleProfile}
                        className={`flex items-center p-2 ${
                            activeItem === "profile" ? "active-section" : ""
                        }`}>
                        <MdPerson className="mr-2 text-[18px]" />
                        profile
                    </MenuItem>

                    {/* Logout Option */}
                    <MenuItem
                        onClick={handleLogout}
                        className={`flex items-center p-2 ${
                            activeItem === "logout" ? "active-section" : ""
                        }`}>
                        <MdLogout className="mr-2 text-[18px]" />
                        logout
                    </MenuItem>
                </div>
            </div>

            {/* Search Modal */}
            <Overlay isOpen={isSearchOpen} onClose={handleCloseSearch}>
                <Box className="popup-search relative p-4 bg-white rounded-lg">
                    <div className="flex items-center pb-2 border-b border-gray-300">
                        <IoSearchOutline className="mr-2 text-[20px] text-[#0D5EF4]" />
                        <input
                            type="text"
                            className="text-gray-500 text-[14px] outline-none flex-1"
                            placeholder="search"
                            value={searchValue}
                            onChange={handleInputChange}
                            autoFocus
                        />
                        <div
                            id="close-popup-search"
                            className="absolute right-0 text-[24px] cursor-pointer"
                            onClick={handleCloseSearch}>
                            <IoMdClose />
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="text-[14px] text-gray-500">recently</p>
                        <div
                            id="item-history"
                            className="flex items-center p-2 mt-2 h-[40px] border bg-gray-50 rounded cursor-pointer">
                            <MdPerson id="icon-history" className="text-[#898989cc] text-[18px]" />
                            <p className="pl-3 text-[14px]">aircraft_management</p>
                        </div>
                    </div>
                </Box>
            </Overlay>

            {/* Main Content */}
            <main className="pt-16 p-4 mt-5">{children}</main>
        </div>
    );
};

export default MobileLayout;
