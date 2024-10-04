import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export function AppHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToPosition = (position) => {
        window.scrollTo({
            top: position,
            behavior: 'smooth'
        });
        setIsMenuOpen(false);
    };

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
        <header className="app-header">
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
                    <Link className="app-header__link" onClick={() => scrollToPosition(0)}>Home</Link>
                    <Link className="app-header__link" onClick={() => scrollToPosition(0)}>About</Link>
                    <Link className="app-header__link" onClick={() => scrollToPosition(460)}>Proficiencies</Link>
                    <Link className="app-header__link" onClick={() => scrollToPosition(1000)}>Projects</Link>
                </nav>
            </div>
        </header>
    );
}