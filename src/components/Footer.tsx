
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">София Идрисова</h3>
            <p className="text-gray-400 mb-4">
              Профессиональный художник-гиперреалист. Создание уникальных картин и роспись стен с вниманием к каждой детали.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Icon name="Youtube" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Icon name="MessageCircle" className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Главная</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-white">Галерея работ</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">Услуги</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">Контакты</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Icon name="Phone" className="h-5 w-5 text-purple-400" />
                <a href="tel:+79114782137" className="text-gray-400 hover:text-white">
                  +7 911 478-21-37
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Mail" className="h-5 w-5 text-purple-400" />
                <a href="mailto:sofia.idrisova@example.com" className="text-gray-400 hover:text-white">
                  sofia.idrisova@example.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="MapPin" className="h-5 w-5 text-purple-400" />
                <span className="text-gray-400">Россия</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} София Идрисова. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
