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
      description: 'Варёные, полукопчёные, сырокопчёные',
      icon: 'ChefHat',
      color: 'from-primary to-pink-500'
    },
    { 
      name: 'Деликатесы', 
      description: 'Изысканные мясные деликатесы',
      icon: 'Award',
      color: 'from-secondary to-emerald-500'
    },
    { 
      name: 'Охлаждённое мясо', 
      description: 'Свежее мясо высшего качества',
      icon: 'Beef',
      color: 'from-accent to-orange-500'
    },
    { 
      name: 'Полуфабрикаты', 
      description: 'Готовые решения для кухни',
      icon: 'Package',
      color: 'from-blue-500 to-cyan-500'
    },
  ];

  const news = [
    {
      title: 'Новая линия по производству деликатесов',
      date: '15 дек 2024',
      description: 'Запущена современная производственная линия европейского образца',
      image: 'https://cdn.poehali.dev/projects/c68bdca7-6e26-4de3-ad06-33a631f85767/files/cb8723bc-01b7-4b2e-aefb-56550824c3a0.jpg',
      category: 'Производство'
    },
    {
      title: 'МЯСТОРГ получил сертификат качества ISO',
      date: '3 дек 2024',
      description: 'Подтверждено соответствие международным стандартам',
      image: 'https://cdn.poehali.dev/projects/c68bdca7-6e26-4de3-ad06-33a631f85767/files/4025602d-ede6-466e-b9cc-0195f08c5c5a.jpg',
      category: 'Сертификация'
    },
    {
      title: 'Расширение производства в 2025 году',
      date: '20 ноя 2024',
      description: 'Планируется увеличение мощностей на 40%',
      image: 'https://cdn.poehali.dev/projects/c68bdca7-6e26-4de3-ad06-33a631f85767/files/6bad1b10-5e5a-472d-9bff-ea5a245b0ab0.jpg',
      category: 'Развитие'
    },
  ];

  const vacancies = [
    {
      title: 'Технолог мясного производства',
      type: 'Полная занятость',
      salary: '80-120k ₽',
      location: 'Москва',
      tags: ['Производство', 'Технологии']
    },
    {
      title: 'Оператор линии',
      type: 'Сменный график',
      salary: '60-80k ₽',
      location: 'Московская обл.',
      tags: ['Производство']
    },
    {
      title: 'Мастер производства',
      type: 'Полная занятость',
      salary: '90-140k ₽',
      location: 'Москва',
      tags: ['Управление', 'Производство']
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gradient-to-br from-primary via-pink-500 to-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30">
                <span className="text-2xl">🥩</span>
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight">МЯСТОРГ</h1>
                <p className="text-xs text-muted-foreground">Premium Quality</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-1">
              {['home', 'about', 'products', 'news', 'vacancies', 'contacts'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    activeSection === item 
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {item === 'home' && 'Главная'}
                  {item === 'about' && 'О нас'}
                  {item === 'products' && 'Продукция'}
                  {item === 'news' && 'Новости'}
                  {item === 'vacancies' && 'Вакансии'}
                  {item === 'contacts' && 'Контакты'}
                </button>
              ))}
            </nav>
            <Button className="hidden md:flex shadow-lg shadow-primary/40">
              Связаться
            </Button>
          </div>
        </div>
      </header>

      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-muted/50 backdrop-blur-sm rounded-full px-4 py-2 border border-border">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </div>
                <span className="text-sm font-medium">30 лет на рынке</span>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-6xl lg:text-8xl font-bold leading-none tracking-tight">
                  <span className="bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
                    МЯСТОРГ
                  </span>
                </h2>
                
                <p className="text-2xl lg:text-3xl font-semibold text-foreground/90 leading-tight">
                  Мясные продукты премиум класса
                </p>
                
                <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                  Современное оборудование, строгий контроль качества и команда профессионалов с 1994 года
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('products')} className="bg-primary hover:bg-primary/90 shadow-xl shadow-primary/40 text-lg px-8 h-14 rounded-2xl">
                  Наша продукция
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('about')} className="border-2 text-lg px-8 h-14 rounded-2xl hover:bg-muted">
                  О компании
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="space-y-1">
                  <div className="text-4xl font-bold bg-gradient-to-br from-primary to-pink-500 bg-clip-text text-transparent">500+</div>
                  <div className="text-sm text-muted-foreground">Видов продукции</div>
                </div>
                <div className="space-y-1">
                  <div className="text-4xl font-bold bg-gradient-to-br from-secondary to-emerald-500 bg-clip-text text-transparent">15k</div>
                  <div className="text-sm text-muted-foreground">Тонн в год</div>
                </div>
                <div className="space-y-1">
                  <div className="text-4xl font-bold bg-gradient-to-br from-accent to-orange-500 bg-clip-text text-transparent">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных</div>
                </div>
              </div>
            </div>
            
            <div className="relative hidden lg:block animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-transparent to-secondary/40 rounded-[3rem] blur-3xl" />
                <Card className="relative border-2 border-border/50 overflow-hidden backdrop-blur-sm bg-card/50">
                  <img 
                    src="https://cdn.poehali.dev/projects/c68bdca7-6e26-4de3-ad06-33a631f85767/files/4025602d-ede6-466e-b9cc-0195f08c5c5a.jpg" 
                    alt="Продукция"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-background/90 backdrop-blur-xl rounded-2xl p-6 border border-border">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Производство</div>
                          <div className="text-3xl font-bold">15 000 т/год</div>
                        </div>
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-pink-500 rounded-2xl flex items-center justify-center">
                          <Icon name="TrendingUp" className="text-white" size={32} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-primary/30 rounded-[3rem] blur-3xl" />
              <Card className="relative border-2 border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/c68bdca7-6e26-4de3-ad06-33a631f85767/files/cb8723bc-01b7-4b2e-aefb-56550824c3a0.jpg" 
                  alt="О компании"
                  className="w-full h-[400px] object-cover"
                />
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-secondary to-emerald-500 rounded-2xl flex items-center justify-center">
                      <Icon name="Award" className="text-white" size={28} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Сертифицировано</div>
                      <div className="text-xl font-bold">ISO 9001</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-pink-500 rounded-2xl flex items-center justify-center">
                      <Icon name="Shield" className="text-white" size={28} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Безопасность</div>
                      <div className="text-xl font-bold">HACCP</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6 animate-fade-in">
              <div>
                <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">О нас</Badge>
                <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">История и достижения</h2>
              </div>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  <span className="text-foreground font-semibold">МЯСТОРГ</span> — одно из ведущих мясоперерабатывающих предприятий региона. 
                  С 1994 года мы поставляем качественную продукцию тысячам семей.
                </p>
                <p>
                  Производство оснащено современным европейским оборудованием, что позволяет 
                  выпускать более 500 наименований продукции по новейшим технологиям.
                </p>
                <p>
                  Более 400 специалистов ежедневно работают над тем, чтобы наша продукция 
                  соответствовала самым высоким стандартам качества.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Продукция</Badge>
            <h2 className="text-5xl lg:text-6xl font-bold mb-4 tracking-tight">Наши категории</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Широкий ассортимент качественной мясной продукции
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card 
                key={index}
                className="group relative border-2 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 cursor-pointer animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <CardHeader className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${product.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon name={product.icon as any} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-2xl">{product.name}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground">{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <Button variant="ghost" className="w-full justify-between group-hover:bg-muted">
                    Подробнее
                    <Icon name="ArrowRight" className="group-hover:translate-x-1 transition-transform" size={18} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">Новости</Badge>
            <h2 className="text-5xl lg:text-6xl font-bold mb-4 tracking-tight">Последние публикации</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Будьте в курсе развития предприятия
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <Card 
                key={index}
                className="group border-2 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 cursor-pointer animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm">
                    {item.category}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Icon name="Calendar" size={14} />
                    <span>{item.date}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors leading-tight">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full justify-between group-hover:bg-muted">
                    Читать далее
                    <Icon name="ArrowRight" className="group-hover:translate-x-1 transition-transform" size={18} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="vacancies" className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">Карьера</Badge>
            <h2 className="text-5xl lg:text-6xl font-bold mb-4 tracking-tight">Открытые вакансии</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Присоединяйтесь к команде профессионалов
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {vacancies.map((vacancy, index) => (
              <Card 
                key={index}
                className="group border-2 border-border/50 bg-card/50 backdrop-blur-sm hover:border-secondary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl mb-4">{vacancy.title}</CardTitle>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Clock" size={18} className="text-secondary" />
                      <span className="text-sm">{vacancy.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="DollarSign" size={18} className="text-secondary" />
                      <span className="text-lg font-bold text-secondary">{vacancy.salary}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="MapPin" size={18} className="text-primary" />
                      <span className="text-sm">{vacancy.location}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {vacancy.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-secondary hover:bg-secondary/90 shadow-lg shadow-secondary/40">
                    Откликнуться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8 animate-fade-in">
              <div>
                <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Контакты</Badge>
                <h2 className="text-5xl font-bold mb-4 tracking-tight">Свяжитесь с нами</h2>
                <p className="text-lg text-muted-foreground">Ответим на все вопросы в ближайшее время</p>
              </div>
              
              <div className="space-y-4">
                <Card className="border-2 border-border/50 bg-card/50 backdrop-blur-sm p-6 hover:border-primary/50 transition-all cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon name="MapPin" className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Адрес</h3>
                      <p className="text-muted-foreground">г. Москва, ул. Промышленная, д. 15</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="border-2 border-border/50 bg-card/50 backdrop-blur-sm p-6 hover:border-secondary/50 transition-all cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-secondary to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon name="Phone" className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="border-2 border-border/50 bg-card/50 backdrop-blur-sm p-6 hover:border-accent/50 transition-all cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-accent to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon name="Mail" className="text-background" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">info@myastorg.ru</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            
            <Card className="border-2 border-border/50 bg-card/50 backdrop-blur-sm animate-scale-in">
              <CardHeader>
                <CardTitle className="text-3xl">Отправить сообщение</CardTitle>
                <CardDescription className="text-base">Заполните форму и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" className="h-12 bg-background/50" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" className="h-12 bg-background/50" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Телефон" className="h-12 bg-background/50" />
                  </div>
                  <div>
                    <Textarea placeholder="Ваше сообщение" rows={5} className="bg-background/50" />
                  </div>
                  <Button className="w-full h-12 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/40 text-lg">
                    Отправить
                    <Icon name="Send" className="ml-2" size={18} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="relative py-16 border-t border-border">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 bg-gradient-to-br from-primary to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30">
                  <span className="text-2xl">🥩</span>
                </div>
                <h3 className="text-xl font-bold">МЯСТОРГ</h3>
              </div>
              <p className="text-sm text-muted-foreground">Качество проверенное временем с 1994 года</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-foreground cursor-pointer transition-colors">Колбасные изделия</li>
                <li className="hover:text-foreground cursor-pointer transition-colors">Деликатесы</li>
                <li className="hover:text-foreground cursor-pointer transition-colors">Охлаждённое мясо</li>
                <li className="hover:text-foreground cursor-pointer transition-colors">Полуфабрикаты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-foreground cursor-pointer transition-colors">О нас</li>
                <li className="hover:text-foreground cursor-pointer transition-colors">Новости</li>
                <li className="hover:text-foreground cursor-pointer transition-colors">Вакансии</li>
                <li className="hover:text-foreground cursor-pointer transition-colors">Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (495) 123-45-67</li>
                <li>info@myastorg.ru</li>
                <li>г. Москва, ул. Промышленная, 15</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2024 МЯСТОРГ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
