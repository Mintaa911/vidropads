import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({children}) {
  return (
    <div className='xl:container mx-auto px-4 flex flex-col h-screen'>
      <Header/>
      <main className='mb-auto'>
        {children}
      </main>
      <Footer/>
    </div>
  );
}

export default Layout;
