
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-playfair text-2xl font-bold text-purple-700">София Идрисова</span>
          <span className="hidden md:block text-sm text-gray-500 italic">Художник-гиперреалист</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#gallery" className="text-gray-700 hover:text-purple-700 font-medium">Галерея</a>
          <a href="#upload" className="text-gray-700 hover:text-purple-700 font-medium">Добавить работы</a>
          <a href="#services" className="text-gray-700 hover:text-purple-700 font-medium">Услуги</a>
          <a href="#contact" className="text-gray-700 hover:text-purple-700 font-medium">Контакты</a>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Icon name="Phone" className="mr-2 h-4 w-4" />
            Связаться
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Icon name={isMenuOpen ? "X" : "Menu"} className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            <a 
              href="#gallery" 
              className="text-gray-700 hover:text-purple-700 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Галерея
            </a>
            <a 
              href="#upload" 
              className="text-gray-700 hover:text-purple-700 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Добавить работы
            </a>
            <a 
              href="#services" 
              className="text-gray-700 hover:text-purple-700 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Услуги
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-purple-700 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </a>
            <Button className="bg-purple-600 hover:bg-purple-700 w-full">
              <Icon name="Phone" className="mr-2 h-4 w-4" />
              Связаться
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
