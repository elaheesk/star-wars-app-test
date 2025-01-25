import Link from 'next/link'
const NavBar = () => {
    return (
        <header className="navbar">
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/actors"> Actors</Link></li>
                    <li><Link href="/cars">Cars</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default NavBar;