
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-purple-800/70 to-purple-700/60 z-10"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1579762593175-20226054cad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')",
          filter: "brightness(0.8)"
        }}
      ></div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40 relative z-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight">
              Искусство, которое оживает
            </h1>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Гиперреалистичные картины и роспись стен от художницы Софии Идрисовой.
              Индивидуальный подход и внимание к деталям в каждом проекте.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg">
                <Icon name="Gallery" className="mr-2 h-5 w-5" />
                Смотреть работы
              </Button>
              <Button variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white px-8 py-6 text-lg">
                <Icon name="Phone" className="mr-2 h-5 w-5" />
                +7 911 478-21-37
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/files/a9240372-1380-4f7c-9f38-5248e24c5302.jpg" 
                alt="София Идрисова" 
                className="w-72 h-72 object-cover rounded-full border-4 border-purple-300 shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-purple-600 text-white px-6 py-2 rounded-full shadow-lg">
                Художник
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
