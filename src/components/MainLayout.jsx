import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Section from './Section';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        {/* <Sidebar /> */}
        <main style={{ flex: 1 }}>
          <Section />
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
