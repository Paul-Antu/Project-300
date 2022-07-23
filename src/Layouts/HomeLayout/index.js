import Header from "./Header";
import Footer from "./Footer";

import React from 'react'

function HomeLayout({children}) {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export default HomeLayout
