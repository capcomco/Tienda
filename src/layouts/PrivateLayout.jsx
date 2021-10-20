import React from 'react'
import Navbar from '../components/Navbar';


const  PrivateLayout= ({ children }) => {
    return (
        <div className='flex'>
            <Navbar />
            {children}
            
        </div>

    )
};

export default PrivateLayout;
