import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <main className="max-w-4xl mx-auto">{children}</main>
        </div>
    );
};

export default Layout;
