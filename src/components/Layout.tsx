import React from 'react';

const Layout: React.FC = ({children}) => {
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <main className="max-w-4xl mx-auto">{children}</main>
        </div>
    );
};

export default Layout;
