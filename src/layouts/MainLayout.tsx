import { useEffect, useState } from 'react';
import { Footer, Header, Sidebar } from 'src/components';

interface Props {
    children?: React.ReactNode;
}
function MainLayout({ children }: Props) {
    const [toggleSidebar, setToggleSidebar] = useState<boolean>(true);

    const toggleSidebarHandlerClick = () => {
        setToggleSidebar(!toggleSidebar);
    };

    return (
        <>
            <Sidebar toggleSidebar={toggleSidebar} />
            <div className={`wrapper ${toggleSidebar ? 'collapsed' : 'expanded'}`}>
                <Header toggleSidebarHandlerClick={toggleSidebarHandlerClick} />
                <div className='content'>
                    {children}
                    <Footer />
                </div>
            </div>
            {toggleSidebar && (
                <button onClick={toggleSidebarHandlerClick}>
                    <div className='sidebar-overlay active'></div>
                </button>
            )}
        </>
    );
}

export default MainLayout;
