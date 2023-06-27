import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            <footer>footer</footer>
        </div>
    );
};

export default layout;