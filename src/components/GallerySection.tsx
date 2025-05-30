
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Sample artwork data
const artworks = [
  {
    id: 1,
    title: "Ангелы классицизма",
    image: "https://cdn.poehali.dev/files/e45659f7-9e49-4c85-805c-6a119e1f4ef2.jpg",
    category: "Классика",
    description: "Репродукция классического произведения с ангелами. Техника масляной живописи на холсте."
  },
  {
    id: 2,
    title: "Городской пейзаж в дождь",
    image: "https://images.unsplash.com/photo-1583119912267-cc97c911e416?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Пейзаж",
    description: "Городской пейзаж, выполненный в технике гиперреализма. Особое внимание уделено отражениям на мокром асфальте."
  },
  {
    id: 3,
    title: "Портрет молодой женщины",
    image: "https://images.unsplash.com/photo-1582201942933-68ccff5518a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    category: "Портрет",
    description: "Портрет молодой женщины, выполненный в смешанной технике. Акцент на глаза и эмоциональное состояние модели."
  },
  {
    id: 4,
    title: "Натюрморт с фруктами",
    image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Натюрморт",
    description: "Классический натюрморт с фруктами. Исполнение масляными красками с особым вниманием к световым эффектам."
  },
  {
    id: 5,
    title: "Роспись стены в спальне",
    image: "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80",
    category: "Роспись стен",
    description: "Пример росписи стены в жилом помещении. Сочетание абстрактных мотивов с элементами природы."
  },
  {
    id: 6,
    title: "Закат над морем",
    image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    category: "Пейзаж",
    description: "Морской пейзаж на закате. Особое внимание уделено цветовым переходам неба и отражениям в воде."
  },
];

// Categories for filtering
const categories = ["Все", "Классика", "Пейзаж", "Портрет", "Натюрморт", "Роспись стен", "Абстракция"];

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const filteredArtworks = selectedCategory === "Все" 
    ? artworks 
    : artworks.filter(artwork => artwork.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
            Галерея работ
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Исследуйте мир гиперреализма через работы Софии Идрисовой. Каждая картина - это история, рассказанная через мельчайшие детали.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={selectedCategory === category ? "bg-purple-600" : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Artwork (First Item) */}
        {filteredArtworks.length > 0 && (
          <Dialog>
            <DialogTrigger asChild>
              <Card className="mb-8 overflow-hidden cursor-pointer hover:shadow-md transition-all group">
                <CardContent className="p-0 relative">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <img 
                      src={filteredArtworks[0].image} 
                      alt={filteredArtworks[0].title} 
                      className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="flex flex-col justify-center p-8 bg-white">
                      <div className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm mb-4">
                        {filteredArtworks[0].category}
                      </div>
                      <h3 className="text-2xl font-playfair font-bold mb-4">{filteredArtworks[0].title}</h3>
                      <p className="text-gray-600 mb-6">{filteredArtworks[0].description}</p>
                      <Button className="self-start bg-purple-600 hover:bg-purple-700">
                        Подробнее
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <img 
                    src={filteredArtworks[0].image} 
                    alt={filteredArtworks[0].title} 
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-playfair font-bold mb-2">{filteredArtworks[0].title}</h3>
                    <p className="text-purple-600 mb-4">{filteredArtworks[0].category}</p>
                    <p className="text-gray-600">
                      {filteredArtworks[0].description}
                    </p>
                  </div>
                  <Button className="mt-4 bg-purple-600 hover:bg-purple-700">
                    Заказать похожую работу
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtworks.slice(1).map((artwork) => (
            <Dialog key={artwork.id}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden cursor-pointer hover:shadow-md transition-all group">
                  <CardContent className="p-0 relative">
                    <img 
                      src={artwork.image} 
                      alt={artwork.title} 
                      className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="text-xl font-medium">{artwork.title}</h3>
                        <p className="text-sm text-gray-200">{artwork.category}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <img 
                      src={artwork.image} 
                      alt={artwork.title} 
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-playfair font-bold mb-2">{artwork.title}</h3>
                      <p className="text-purple-600 mb-4">{artwork.category}</p>
                      <p className="text-gray-600">
                        {artwork.description}
                      </p>
                    </div>
                    <Button className="mt-4 bg-purple-600 hover:bg-purple-700">
                      Заказать похожую работу
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
            Показать больше работ
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
