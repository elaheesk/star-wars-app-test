import type { Metadata } from "next";

import './styles/globals.css';
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
    title: "Star Wars Movies",
    description: "Explore the characters of Star Wars movies!",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <html lang="en">
            <body>
                <div className="layout-container">
                    <NavBar />
                    <main className="layout-content">
                        {children}
                    </main>
                 {/*   <Footer />*/}
                </div>
            {/*    <main>{children}</main>*/}
            </body>
        </html>
    );
}
