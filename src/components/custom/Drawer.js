/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, List, ListItem, ListItemText, Popover } from "@mui/material";
import Logo from "../../assets/image/React-icon.svg.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { paths } from "../../routes";

const Drawer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeParent, setActiveParent] = useState(null);
  const [indexMenuActive, setIndexMenuActive] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openSubMenuParent, setOpenSubMenuParent] = useState(null);

  useEffect(() => {
    let found = false;

    paths.forEach((parent, index) => {
      // Check if the parent is the exact match
      if (location.pathname === parent.to) {
        setActiveParent(parent.key);
        setIndexMenuActive(index);
        setActiveSubMenu(null);
        setShowSubMenu(parent.children ? true : false);
        setOpenSubMenuParent(null);
        found = true;
      }

      // Check if any child is the exact match
      if (parent.children) {
        parent.children.forEach((child) => {
          if (location.pathname === child.to) {
            setActiveParent(null);
            setIndexMenuActive(null);
            setActiveSubMenu(child.key);
            setShowSubMenu(true);
            setOpenSubMenuParent(parent.key);
            found = true;
          }
        });
      }
    });

    if (!found) {
      setActiveParent(null);
      setIndexMenuActive(null);
      setActiveSubMenu(null);
      setShowSubMenu(false);
      setOpenSubMenuParent(null);
    }
  }, [location.pathname]);

  const handleChangeScreen = (event, path, key, index) => {
    event.preventDefault();

    if (path !== location.pathname) {
      // If the clicked item is a parent with children
      if (paths[index]?.children) {
        if (openSubMenuParent === key) {
          // Close the submenu if it's already open
          setOpenSubMenuParent(null);
          setShowSubMenu(false);
        } else {
          // Open the submenu if a different parent is clicked
          setOpenSubMenuParent(key);
          setShowSubMenu(true);
        }
        setActiveParent(key);
        setIndexMenuActive(index);
        setActiveSubMenu(null);
        if (!isDrawerOpen) {
          setAnchorEl(event.currentTarget);
        }
      } else {
        // If it's a parent without children or a direct path
        setOpenSubMenuParent(null);
        setActiveParent(key);
        setIndexMenuActive(index);
        setActiveSubMenu(null);
        setShowSubMenu(false);
        navigate(path);
      }
    }
  };

  const handleSubMenuClick = (path, key) => {
    if (path !== location.pathname) {
      setActiveParent(null); // Ensure parent is deactivated
      setIndexMenuActive(null); // Deactivate any parent active state
      setActiveSubMenu(key); // Activate the child menu
      navigate(path);
      setAnchorEl(null);
    } else {
      setActiveSubMenu(key); // Highlight the current submenu
    }
  };

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  return (
    <div className={`wrapper-drawer ${isDrawerOpen ? "open" : "closed"}`}>
      <Box sx={{ ml: 1.5 }} className="header-drawer">
        <img
          id="img-header"
          style={{ width: "40px", height: "35px" }}
          src={Logo}
          alt="image"
        />
        {isDrawerOpen && <p className="title-header">TUTORMASTER</p>}
      </Box>
      <Box className="item-content-drawer mt-4">
        <List>
          {paths.map((parent, index) => (
            <React.Fragment key={parent.key}>
              <ListItem
                onClick={(event) =>
                  handleChangeScreen(event, parent.to, parent.key, index)
                }
                className={`item-drawer ${index === indexMenuActive ? "activeItem" : ""
                  }`}>
                <ListItemText>
                  <Box sx={{ display: "flex", alignItems: "center", ml: 0.5 }}>
                    {parent.icon && (
                      <Box className="icon-menu-drawer" sx={{ mr: 2 }}>
                        {parent.icon}
                      </Box>
                    )}
                    {isDrawerOpen && (
                      <span style={{ fontSize: "14px" }}>
                        {parent.category}
                      </span>
                    )}
                  </Box>
                </ListItemText>
              </ListItem>
              {isDrawerOpen &&
                openSubMenuParent === parent.key &&
                parent.children && (
                  <List>
                    {parent.children.map((child) => (
                      <ListItem
                        key={child.key}
                        onClick={() =>
                          handleSubMenuClick(child.to, child.key)
                        }
                        className={`submenu-item ${activeSubMenu === child.key ? "activeItem" : ""
                          }`}>
                        <ListItemText>
                          <Box sx={{ pl: 6, cursor: "pointer" }}>
                            <span style={{ fontSize: "14px" }}>
                              {child.name}
                            </span>
                          </Box>
                        </ListItemText>
                      </ListItem>
                    ))}
                  </List>
                )}
            </React.Fragment>
          ))}
        </List>
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => {
            setAnchorEl(null);
            setOpenSubMenuParent(null);
            setShowSubMenu(false);
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}>
          {paths[indexMenuActive]?.children && (
            <List>
              {paths[indexMenuActive].children.map((child) => (
                <ListItem
                  key={child.key}
                  onClick={() => handleSubMenuClick(child.to, child.key)}
                  className={`submenu-item ${activeSubMenu === child.key ? "activeItem" : ""
                    }`}>
                  <ListItemText>
                    <Box sx={{ pl: 2, cursor: "pointer" }}>
                      <span style={{ fontSize: "14px" }}>{child.name}</span>
                    </Box>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          )}
        </Popover>
      </Box>
      <div className="close-menu" onClick={toggleDrawer} style={{ cursor: "pointer" }}>
        {isDrawerOpen ? <FaChevronLeft /> : <FaChevronRight />}
      </div>
    </div>
  );
};

export default Drawer;
