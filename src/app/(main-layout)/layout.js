import Footer from '@/components/shared/Footer/Footer';
import Navbar from '@/components/shared/Navbar/Navbar';
import RegisterModal from '@/components/registration/RegisterModal/RegisterModal';
import React from 'react';
import LoginModal from '@/components/registration/RegisterModal/LoginModal';

const layout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
            <RegisterModal></RegisterModal>
            <LoginModal></LoginModal>
        </div>
    );
};

export default layout;