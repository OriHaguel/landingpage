import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export function AppHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.pageYOffset);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when clicking outside
    useEffect(() => {
        const closeMenu = (e) => {
            if (isMenuOpen && !e.target.closest('.app-header__nav') && !e.target.closest('.app-header__menu-toggle')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', closeMenu);
        return () => document.removeEventListener('click', closeMenu);
    }, [isMenuOpen]);

    return (
        <header className={`app-header ${scrollPosition > 50 ? 'scrolled' : ''}`}>
            <div className="app-header__background"></div>
            <div className="app-header__content">
                <h1 className="app-header__logo">
                    <span className="app-header__logo-highlight">Ori Haguel</span>
                </h1>
                <button
                    className={`app-header__menu-toggle ${isMenuOpen ? 'open' : ''}`}
                    onClick={toggleMenu}
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <nav className={`app-header__nav ${isMenuOpen ? 'open' : ''}`}>
                    <Link to="/" className="app-header__link" onClick={() => setIsMenuOpen(false)}>Home</Link>
                    <Link to="/about" className="app-header__link" onClick={() => setIsMenuOpen(false)}>About</Link>
                    <Link to="/services" className="app-header__link" onClick={() => setIsMenuOpen(false)}>Services</Link>
                    <Link to="/contact" className="app-header__link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                </nav>
            </div>
        </header>
    );
}