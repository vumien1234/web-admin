import React, { useState, useEffect } from 'react';
import Drawer from './Drawer';
import Header from './Header';
import { routes } from '../../routes';
import { useLocation, useNavigate } from 'react-router-dom';
import MobileLayout from '../../modules/mobiles/LayoutMobile';

const Layout = ({ children }) => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  // const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const pageHidenMenu = [routes.login.path];

  const isHiddenPage = pageHidenMenu.includes(location.pathname);

  if (isHiddenPage) {
    return <div className="auth-layout">{children}</div>;
  }

  if (isMobile) {
    return <MobileLayout>{children}</MobileLayout>;
  }

  return (
    <div className='relative'>
      <div className='flex'>
        <Drawer />
        <main className='main-content min-h-screen flex-grow relative'>
          <Header />
          <div className='content-container relative p-7'>
            {children}
          </div>
          <p className='text-[12px] absolute bottom-0 left-0 right-0 flex justify-center text-[#ccc] p-2'> Developed by Phenikaa University @2024</p>
        </main>
      </div>
    </div>
  );
};

export default Layout;
