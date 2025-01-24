import type { Metadata } from "next";

import './styles/globals.css';

export const metadata: Metadata = {
    title: "Star Wars Movies",
    description: "Explore the characters of Star Wars movies!",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <html lang="en">
            <body>
                <main>{children}</main>
            </body>
        </html>
    );
}
