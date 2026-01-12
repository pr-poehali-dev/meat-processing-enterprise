import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    { 
      name: 'Колбасные изделия', 
      description: 'Варёные, полукопчёные, сырокопчёные колбасы премиум качества',
      icon: 'ChefHat' 
    },
    { 
      name: 'Деликатесы', 
      description: 'Изысканные мясные деликатесы для гурманов',
      icon: 'Award' 
    },
    { 
      name: 'Охлаждённое мясо', 
      description: 'Свежее мясо говядины, свинины, птицы',
      icon: 'Beef' 
    },
    { 
      name: 'Полуфабрикаты', 
      description: 'Котлеты, пельмени, блинчики собственного производства',
      icon: 'Package' 
    },
  ];

  const achievements = [
    { number: '30+', label: 'Лет на рынке' },
    { number: '500+', label: 'Видов продукции' },
    { number: '15 000 т', label: 'Производим в год' },
    { number: '98%', label: 'Довольных клиентов' },
  ];

  const news = [
    {
      title: 'Новая линия по производству деликатесов',
      date: '15 декабря 2024',
      description: 'Запущена современная производственная линия европейского образца',
      image: 'https://cdn.poehali.dev/projects/c68bdca7-6e26-4de3-ad06-33a631f85767/files/cb8723bc-01b7-4b2e-aefb-56550824c3a0.jpg'
    },
    {
      title: 'МЯСТОРГ получил сертификат качества ISO',
      date: '3 декабря 2024',
      description: 'Подтверждено соответствие международным стандартам качества',
      image: 'https://cdn.poehali.dev/projects/c68bdca7-6e26-4de3-ad06-33a631f85767/files/4025602d-ede6-466e-b9cc-0195f08c5c5a.jpg'
    },
    {
      title: 'Расширение производства в 2025 году',
      date: '20 ноября 2024',
      description: 'Планируется увеличение мощностей на 40%',
      image: 'https://cdn.poehali.dev/projects/c68bdca7-6e26-4de3-ad06-33a631f85767/files/6bad1b10-5e5a-472d-9bff-ea5a245b0ab0.jpg'
    },
  ];

  const vacancies = [
    {
      title: 'Технолог мясного производства',
      type: 'Полная занятость',
      salary: 'от 80 000 ₽',
      requirements: 'Высшее образование, опыт от 2 лет'
    },
    {
      title: 'Оператор линии',
      type: 'Сменный график',
      salary: 'от 60 000 ₽',
      requirements: 'Ответственность, внимательность'
    },
    {
      title: 'Мастер производства',
      type: 'Полная занятость',
      salary: 'от 90 000 ₽',
      requirements: 'Опыт управления персоналом от 3 лет'
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-2xl">🥩</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">МЯСТОРГ</h1>
                <p className="text-xs text-muted-foreground">Качество проверенное временем</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              {['home', 'about', 'products', 'news', 'vacancies', 'contacts'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {item === 'home' && 'Главная'}
                  {item === 'about' && 'О компании'}
                  {item === 'products' && 'Продукция'}
                  {item === 'news' && 'Новости'}
                  {item === 'vacancies' && 'Вакансии'}
                  {item === 'contacts' && 'Контакты'}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary/20 to-background">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        </div>
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-6 border border-white/20">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-semibold">30 лет традиций качества</span>
              </div>
              
              <h2 className="text-6xl md:text-8xl font-bold mb-6 leading-none">
                <span className="bg-gradient-to-r from-primary via-red-600 to-primary bg-clip-text text-transparent animate-fade-in">МЯСТОРГ</span>
              </h2>
              
              <p className="text-2xl md:text-3xl font-semibold mb-4 leading-tight">
                Мясные продукты<br />премиум класса
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                Современное оборудование, строгий контроль качества и опытные специалисты с 1994 года
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('products')} className="text-lg px-8 shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/60 transition-all">
                  Наша продукция
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('about')} className="text-lg px-8 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20">
                  О компании
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Видов продукции</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">15k т</div>
                  <div className="text-sm text-muted-foreground">Производим в год</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-scale-in hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-transparent rounded-3xl blur-2xl" />
              <div className="relative bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <img 
                  src="https://cdn.poehali.dev/projects/c68bdca7-6e26-4de3-ad06-33a631f85767/files/4025602d-ede6-466e-b9cc-0195f08c5c5a.jpg" 
                  alt="Продукция МЯСТОРГ"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-white rounded-2xl p-6 shadow-2xl">
                  <div className="text-4xl font-bold">30+</div>
                  <div className="text-sm opacity-90">Лет на рынке</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="text-muted-foreground" size={32} />
        </div>
      </section>



      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4">О нас</Badge>
              <h2 className="text-4xl font-bold mb-6">История и достижения</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">МЯСТОРГ</strong> — одно из ведущих мясоперерабатывающих предприятий региона. 
                  С 1994 года мы поставляем качественную продукцию на столы тысяч семей.
                </p>
                <p>
                  Наше производство оснащено современным европейским оборудованием, что позволяет 
                  выпускать более 500 наименований продукции по новейшим технологиям.
                </p>
                <p>
                  Мы гордимся нашей командой профессионалов — более 400 специалистов ежедневно 
                  работают над тем, чтобы наша продукция соответствовала самым высоким стандартам качества.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Icon name="Award" className="text-primary" size={24} />
                  <span className="font-semibold">Сертификат ISO 9001</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Shield" className="text-primary" size={24} />
                  <span className="font-semibold">HACCP система</span>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/c68bdca7-6e26-4de3-ad06-33a631f85767/files/cb8723bc-01b7-4b2e-aefb-56550824c3a0.jpg" 
                alt="Производство"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Продукция</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши категории</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Широкий ассортимент качественной мясной продукции для любого случая
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={product.icon as any} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription className="text-base">{product.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Новости</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Последние публикации</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Будьте в курсе развития нашего предприятия
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in cursor-pointer group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2">{item.date}</div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{item.title}</CardTitle>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="vacancies" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Карьера</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Открытые вакансии</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Присоединяйтесь к нашей команде профессионалов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {vacancies.map((vacancy, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl mb-2">{vacancy.title}</CardTitle>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Clock" size={16} />
                      <span>{vacancy.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <Icon name="Wallet" size={16} />
                      <span>{vacancy.salary}</span>
                    </div>
                    <div className="flex items-start gap-2 text-muted-foreground">
                      <Icon name="CheckCircle2" size={16} className="mt-0.5 flex-shrink-0" />
                      <span>{vacancy.requirements}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Откликнуться</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="animate-fade-in">
              <Badge className="mb-4">Контакты</Badge>
              <h2 className="text-4xl font-bold mb-6">Свяжитесь с нами</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Адрес</h3>
                    <p className="text-muted-foreground">г. Москва, ул. Промышленная, д. 15</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@myastorg.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Режим работы</h3>
                    <p className="text-muted-foreground">Пн-Пт: 8:00 - 20:00<br />Сб-Вс: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle>Отправить сообщение</CardTitle>
                <CardDescription>Мы ответим вам в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Телефон" />
                  </div>
                  <div>
                    <Textarea placeholder="Ваше сообщение" rows={4} />
                  </div>
                  <Button className="w-full" size="lg">
                    Отправить
                    <Icon name="Send" className="ml-2" size={18} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🥩</span>
                <h3 className="text-xl font-bold">МЯСТОРГ</h3>
              </div>
              <p className="text-sm opacity-80">Качество проверенное временем с 1994 года</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Колбасные изделия</li>
                <li>Деликатесы</li>
                <li>Охлаждённое мясо</li>
                <li>Полуфабрикаты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>О нас</li>
                <li>Новости</li>
                <li>Вакансии</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (495) 123-45-67</li>
                <li>info@myastorg.ru</li>
                <li>г. Москва, ул. Промышленная, 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2024 МЯСТОРГ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;