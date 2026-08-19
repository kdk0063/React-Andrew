import Link from "./Link";

function Navbar() {
  const links = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/sideprojects' },
  ];

  return (
    <header className="flex justify-between items-center px-6 md:px-10 py-6">
      <Link to="/" className="text-sm font-medium tracking-tight text-ink">
        AK
      </Link>

      <nav className="flex items-center gap-6">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="text-sm text-muted hover:text-ink transition-colors duration-200"
            activeClassName="text-ink"
          >
            {link.label}
          </Link>
        ))}
        <a
          href="mailto:kdk0063@gmail.com"
          className="text-sm text-muted hover:text-ink transition-colors duration-200"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
export default Navbar;
