import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export function AppHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const yOffset = -80; // Adjust this value based on your header height
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
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
                    <Link className="app-header__link" onClick={() => scrollToSection('about')}>About</Link>
                    <Link className="app-header__link" onClick={() => scrollToSection('Technologies')}>Technologies</Link>
                    <Link className="app-header__link" onClick={() => scrollToSection('projects')}>Projects</Link>
                    <Link className="app-header__link" onClick={() => scrollToSection('contacts')}>Contacts</Link>
                </nav>
            </div>
        </header>
    );
}