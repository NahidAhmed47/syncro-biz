import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            {children}
            <footer>footer</footer>
        </div>
    );
};

export default layout;