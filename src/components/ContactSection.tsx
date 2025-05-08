
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
            Связаться со мной
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Заинтересованы в сотрудничестве? Свяжитесь со мной, чтобы обсудить ваш проект или задать любые вопросы.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Отправить сообщение</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Имя
                    </label>
                    <Input
                      id="name"
                      placeholder="Ваше имя"
                      className="border-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Ваш email"
                      className="border-gray-300"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Тема
                  </label>
                  <Input
                    id="subject"
                    placeholder="Тема сообщения"
                    className="border-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Ваше сообщение..."
                    className="min-h-[120px] border-gray-300"
                  />
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <Card className="mb-6 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Контактная информация</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Icon name="Phone" className="h-5 w-5 text-purple-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Телефон</p>
                      <a href="tel:+79114782137" className="text-purple-700 hover:underline">
                        +7 911 478-21-37
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Mail" className="h-5 w-5 text-purple-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:sofia.idrisova@example.com" className="text-purple-700 hover:underline">
                        sofia.idrisova@example.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Clock" className="h-5 w-5 text-purple-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Время работы</p>
                      <p className="text-gray-600">Пн-Пт: 10:00 - 19:00</p>
                      <p className="text-gray-600">Сб: 11:00 - 16:00</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-purple-700 text-white shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Почему стоит выбрать меня</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="h-5 w-5 text-purple-200 mt-0.5 shrink-0" />
                    <p>Более 10 лет опыта в создании гиперреалистичных работ</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="h-5 w-5 text-purple-200 mt-0.5 shrink-0" />
                    <p>Индивидуальный подход к каждому клиенту</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="h-5 w-5 text-purple-200 mt-0.5 shrink-0" />
                    <p>Гарантия качества и соблюдение сроков</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="h-5 w-5 text-purple-200 mt-0.5 shrink-0" />
                    <p>Работа с клиентами по всей России</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
