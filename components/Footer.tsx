'use client';

import React from 'react';

export default function Footer(): React.JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      style={{ 
        backgroundColor: '#ffffff', 
        borderTop: '1px solid var(--deep-steel)', 
        borderBottom: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        padding: '20px 0', 
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      <div className="container" style={{ margin: '0 auto', padding: '0 24px' }}>
        <div className="copyright-wrapper" style={{ textAlign: 'center', border: 'none', padding: 0, margin: 0 }}>
          <p 
            className="copyright" 
            style={{ 
              margin: 0, 
              padding: 0,
              color: 'var(--cool-gray)', 
              fontSize: 'var(--fs-small)',
              fontWeight: '500'
            }}
          >
            &copy; {currentYear} Dewatacomm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}