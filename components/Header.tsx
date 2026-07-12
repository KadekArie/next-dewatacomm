'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header(): React.JSX.Element {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isMenuOpen]);

  const isPlainPage = pathname !== '/';
  // Jika menu terbuka, paksa background jadi putih (tidak transparan)
  const shouldBeWhite = isScrolled || isMenuOpen || isPlainPage;

  const textColor = 'var(--primary-blue)';
  const burgerColor = 'var(--primary-blue)';
  
  const isServicesActive = pathname === '/layanan';
  const isAboutActive = pathname === '/tentang-kami';
  const isContactActive = pathname === '/hubungi-kami';

  return (
    <header 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        zIndex: 9999,
        backgroundColor: shouldBeWhite ? '#ffffff' : 'transparent', 
        backdropFilter: shouldBeWhite ? 'blur(8px)' : 'none',
        WebkitBackdropFilter: shouldBeWhite ? 'blur(8px)' : 'none',
        borderBottom: shouldBeWhite ? '1px solid var(--deep-steel)' : 'none', 
        boxShadow: isScrolled && !isMenuOpen ? '0 2px 10px rgba(0,0,0,0.05)' : 'none',
        transition: 'background-color 0.3s ease-in-out, border 0.3s ease-in-out, box-shadow 0.3s ease-in-out'
      }}
    >
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: isScrolled ? '12px 20px' : '20px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
        transition: 'padding 0.3s ease-in-out'
      }}>
        
        <div className="header-logo-wrapper" style={{ display: 'flex', alignItems: 'center', zIndex: 10002 }}>
          <Link href="/" onClick={() => setIsMenuOpen(false)} style={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src="/dewatacomm-logo.webp" 
              alt="Logo Dewatacomm" 
              style={{ width: '45px', height: 'auto', objectFit: 'contain' }} 
            />
          </Link>
        </div>

        <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          <nav className="nav" style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <div className="menu-item">
              <Link href="/layanan" style={{ color: isServicesActive ? 'var(--secondary-orange)' : textColor, fontWeight: isServicesActive ? '700' : '600', textDecoration: 'none', transition: 'color 0.3s' }} className={isServicesActive ? '' : 'nav-link-item'}>Layanan</Link>
            </div>
            <div className="menu-item">
              <Link href="/tentang-kami" style={{ color: isAboutActive ? 'var(--secondary-orange)' : textColor, fontWeight: isAboutActive ? '700' : '600', textDecoration: 'none', transition: 'color 0.3s' }} className={isAboutActive ? '' : 'nav-link-item'}>Tentang Kami</Link>
            </div>
          </nav>

          <Link href="/hubungi-kami" className="btn" style={{ borderColor: isContactActive ? 'var(--secondary-orange)' : 'var(--primary-blue)', color: isContactActive ? 'var(--secondary-orange)' : 'var(--primary-blue)', background: 'transparent', padding: '8px 20px', borderRadius: '50px', borderStyle: 'solid', borderWidth: '2px', fontWeight: '700', cursor: 'pointer', textDecoration: 'none', transition: 'all 0.3s ease-in-out' }}>
            Hubungi Kami
          </Link>
        </div>

        <div 
          className="burger-wrapper" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ cursor: 'pointer', width: '28px', height: '20px', position: 'relative', display: 'none', zIndex: 10002 }}
        >
          <span style={{ position: 'absolute', width: '100%', height: '3px', backgroundColor: burgerColor, top: isMenuOpen ? '9px' : '0', transform: isMenuOpen ? 'rotate(45deg)' : 'none', transition: 'all 0.3s' }} />
          <span style={{ position: 'absolute', width: '100%', height: '3px', backgroundColor: burgerColor, top: '9px', opacity: isMenuOpen ? 0 : 1, transition: 'all 0.3s' }} />
          <span style={{ position: 'absolute', width: '100%', height: '3px', backgroundColor: burgerColor, top: isMenuOpen ? '9px' : '18px', transform: isMenuOpen ? 'rotate(-45deg)' : 'none', transition: 'all 0.3s' }} />
        </div>
      </div>

      {/* MOBILE MENU OVERLAY - Diletakkan di luar kontainer untuk menutupi seluruh halaman */}
      {isMenuOpen && (
        <div 
          onClick={() => setIsMenuOpen(false)} 
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100vw', 
            height: '100vh', 
            backgroundColor: 'rgba(0,0,0,0.5)', 
            zIndex: 9998 
          }} 
        />
      )}

      {/* MOBILE NAV LACI */}
      <div style={{ 
        position: 'fixed', top: 0, right: isMenuOpen ? 0 : '-100%', width: '80%', maxWidth: '300px', height: '100vh', backgroundColor: '#ffffff', zIndex: 10000, padding: '80px 40px', transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)', boxShadow: isMenuOpen ? '-5px 0 15px rgba(0,0,0,0.1)' : 'none', boxSizing: 'border-box'
      }}>
        <nav className="nav" style={{ display: 'flex', flexDirection: 'column', gap: '30px', textAlign: 'left' }}>
          <Link href="/layanan" onClick={() => setIsMenuOpen(false)} style={{ fontSize: '20px', fontWeight: isServicesActive ? '700' : '600', color: isServicesActive ? 'var(--secondary-orange)' : 'var(--primary-blue)', textDecoration: 'none' }}>Layanan</Link>
          <Link href="/tentang-kami" onClick={() => setIsMenuOpen(false)} style={{ fontSize: '20px', fontWeight: isAboutActive ? '700' : '600', color: isAboutActive ? 'var(--secondary-orange)' : 'var(--primary-blue)', textDecoration: 'none' }}>Tentang Kami</Link>
          <Link href="/hubungi-kami" onClick={() => setIsMenuOpen(false)} style={{ fontSize: '20px', fontWeight: isContactActive ? '700' : '600', color: isContactActive ? 'var(--secondary-orange)' : 'var(--primary-blue)', textDecoration: 'none' }}>Hubungi Kami</Link>
        </nav>
      </div>

      <style>{`
        .nav-link-item:hover { color: var(--secondary-orange) !important; }
        @media (max-width: 1024px) {
          .nav-desktop { display: none !important; }
          .burger-wrapper { display: block !important; }
        }
      `}</style>
    </header>
  );
}