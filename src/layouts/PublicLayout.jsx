import React from 'react'
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
