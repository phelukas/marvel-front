import React from 'react';
import Link from 'next/link';


const AboutPage = () => {
    return (
        <div>

            <Link href="/login">
                <h1>LOGIN</h1>
            </Link>
            <Link href="/register">
                <h1>ADD</h1>
            </Link>
        </div>
    );
};


export default AboutPage;
