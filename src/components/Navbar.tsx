import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-gradient">Nyasha Gandah</a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 ">
            {menuItems.slice(0, -1).map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 px-3 py-2"
                onClick={closeMenu}
              >
                {item.name}
              </a>
            ))}
            {/* Unique rightmost link */}
            <a
              href={menuItems[menuItems.length - 1].href}
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-300"
              onClick={closeMenu}
            >
              {menuItems[menuItems.length - 1].name}
            </a>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass-morphism p-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 py-2"
                onClick={closeMenu}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;