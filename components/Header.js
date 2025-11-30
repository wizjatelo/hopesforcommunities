function Header() {
  try {
    const [isOpen, setIsOpen] = React.useState(false);

    const navLinks = [
      { name: 'Home', href: 'index.html' },
      { name: 'About', href: 'about.html' },
      { name: 'Programs', href: 'programs.html' },
      { name: 'Get Involved', href: 'get-involved.html' },
      { name: 'Impact', href: 'impact.html' },
      { name: 'Partners', href: 'partners.html' },
      { name: 'Events', href: 'events.html' },
      { name: 'Contact', href: 'contact.html' }
    ];

    return (
      <header className="bg-white shadow-sm sticky top-0 z-50" data-name="header" data-file="components/Header.js">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="index.html" className="flex items-center space-x-2">
              <div className="icon-heart text-2xl text-[var(--primary-color)]"></div>
              <span className="text-xl font-bold text-[var(--text-dark)]">Hopes for Communities</span>
            </a>

            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <a key={index} href={link.href} className="text-[var(--text-light)] hover:text-[var(--primary-color)] transition-colors">
                  {link.name}
                </a>
              ))}
              <a href="get-involved.html" className="btn-primary">Donate Now</a>
            </nav>

            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
              <div className={`icon-${isOpen ? 'x' : 'menu'} text-2xl text-[var(--text-dark)]`}></div>
            </button>
          </div>

          {isOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t pt-4">
              {navLinks.map((link, index) => (
                <a key={index} href={link.href} className="block py-2 text-[var(--text-light)] hover:text-[var(--primary-color)]">
                  {link.name}
                </a>
              ))}
              <a href="get-involved.html" className="block mt-4 btn-primary text-center">Donate Now</a>
            </nav>
          )}
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}
