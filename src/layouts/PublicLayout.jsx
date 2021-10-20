import React from 'react'
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const PublicLayout = ({ children }) => {
    return (
        <div>
            
            <main className='mainContainer'>{children}</main>

            <Footer />
        </div>

    );

};


export default PublicLayout;
