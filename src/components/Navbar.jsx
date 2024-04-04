const Navbar = () => {
    return (
        <nav>
            {['iPhones', 'Macbook', 'Tablet'].map((nav) => (
                <div key={nav}>
                    {nav}
                </div>
            ))}
        </nav>
    )
}

export default Navbar