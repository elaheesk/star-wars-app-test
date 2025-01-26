import Link from 'next/link'
const NavBar = () => {
    return (
        <header className="navbar">
            <nav>
                <ul>
                    <li className="mr-6"><Link href="/">Home</Link></li>
                    <li className="mr-6"><Link href="/actors"> Actors</Link></li>
                    <li className="mr-6"><Link href="/cars">Cars</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default NavBar;