
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: 1,
    title: "Портреты на заказ",
    description: "Индивидуальные портреты, выполненные в технике гиперреализма. Возможно создание как по фотографии, так и при личной встрече.",
    icon: "UserCircle",
    price: "от 25 000 ₽",
    popular: true
  },
  {
    id: 2,
    title: "Роспись стен",
    description: "Художественная роспись стен в любом помещении. Создание уникальных дизайнов под стиль интерьера.",
    icon: "Paintbrush",
    price: "от 5 000 ₽/м²",
    popular: false
  },
  {
    id: 3,
    title: "Пейзажи и натюрморты",
    description: "Реалистичные изображения природы, городских пейзажей или натюрмортов. Идеально подходят для украшения интерьера.",
    icon: "Mountain",
    price: "от 20 000 ₽",
    popular: false
  },
  {
    id: 4,
    title: "Картины на заказ",
    description: "Создание уникальных картин по вашей идее или концепции. Возможно выполнение в различных стилях и техниках.",
    icon: "Palette",
    price: "от 30 000 ₽",
    popular: false
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
            Мои услуги
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Профессиональный подход к каждому проекту. Высокое качество исполнения и внимание к деталям гарантированы.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.id} className={`overflow-hidden h-full flex flex-col ${service.popular ? 'border-purple-300 shadow-lg relative' : ''}`}>
              {service.popular && (
                <div className="absolute top-0 right-0 bg-purple-600 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                  Популярно
                </div>
              )}
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 flex items-center justify-center rounded-full ${service.popular ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-700'} mb-4`}>
                  <Icon name={service.icon} className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
              <CardFooter className="flex flex-col items-start pt-4 space-y-4">
                <div className="text-xl font-medium text-purple-700">{service.price}</div>
                <Button className={`w-full ${service.popular ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-800 hover:bg-gray-900'}`}>
                  Заказать
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-purple-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
            Нужна особенная работа?
          </h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            Если у вас есть специфические требования или идеи для вашего проекта, свяжитесь со мной напрямую для обсуждения деталей.
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8">
            <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
            Обсудить индивидуальный заказ
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
