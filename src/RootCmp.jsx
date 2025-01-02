import { Routes, Route } from 'react-router'
import { AppHeader } from './cmps/AppHeader'
import { Home } from './page/Home'

export function RootCmp() {
    const isMobile = () => {
        return window.matchMedia("(max-width: 768px)").matches;
    };
    const mobile = isMobile();
    return (
        <div className={`${mobile && 'main-container'}`}>
            <AppHeader />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </main>
        </div>
    )
}


