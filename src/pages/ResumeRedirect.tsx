import React, { useEffect } from 'react';

const ResumeRedirect: React.FC = () => {
    useEffect(() => {
        window.location.href = "/Resume.pdf";
    }, []);

    return <div style={{ backgroundColor: '#141414', height: '100vh', width: '100vw' }} />;
};

export default ResumeRedirect;
