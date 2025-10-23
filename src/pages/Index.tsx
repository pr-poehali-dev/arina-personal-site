import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    {
      id: 'about',
      title: 'Арина',
      subtitle: '17 лет, Киров',
      content: 'Привет! Меня зовут Арина, мне 17 лет. Я живу в прекрасном городе Киров и каждый день открываю для себя что-то новое.',
      image: 'https://cdn.poehali.dev/projects/84f1b801-55d9-4be0-bbc4-ed3f112b88d9/files/2e65776f-5a49-43bf-a8b5-a95ffed3e44e.jpg',
      icon: 'Sparkles',
      color: 'from-pink-100 to-purple-100'
    },
    {
      id: 'city',
      title: 'Мой город',
      subtitle: 'Киров',
      content: 'Киров — это мой родной город, где я родилась и выросла. Здесь я нашла свои любимые места, познакомилась с удивительными людьми и создала множество воспоминаний.',
      image: 'https://cdn.poehali.dev/projects/84f1b801-55d9-4be0-bbc4-ed3f112b88d9/files/a6be004f-7dd7-46ea-8887-7dbc20d0f739.jpg',
      icon: 'MapPin',
      color: 'from-blue-100 to-cyan-100'
    },
    {
      id: 'education',
      title: 'Учёба',
      subtitle: 'Школа №51',
      content: 'Я учусь в 51 школе и готовлюсь к поступлению в университет. Мои профильные предметы — литература и обществознание. Эти дисциплины помогают мне лучше понимать мир вокруг.',
      image: 'https://cdn.poehali.dev/projects/84f1b801-55d9-4be0-bbc4-ed3f112b88d9/files/527dc25b-51c1-41fc-a757-1a214879b38c.jpg',
      icon: 'BookOpen',
      color: 'from-purple-100 to-pink-100'
    },
    {
      id: 'hobbies',
      title: 'Увлечения',
      subtitle: 'Рисование и чтение',
      content: 'В свободное время я обожаю рисовать и читать книги. Рисование позволяет мне выражать свои эмоции и идеи, а чтение открывает двери в другие миры и помогает расширять кругозор.',
      image: 'https://cdn.poehali.dev/projects/84f1b801-55d9-4be0-bbc4-ed3f112b88d9/files/527dc25b-51c1-41fc-a757-1a214879b38c.jpg',
      icon: 'Palette',
      color: 'from-rose-100 to-orange-100'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-200/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-playfair font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Арина
            </h1>
            <div className="flex gap-6">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => {
                    document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`hidden md:block text-sm font-medium transition-all duration-300 ${
                    activeSection === index
                      ? 'text-purple-600 scale-110'
                      : 'text-gray-600 hover:text-purple-500'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        {sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className={`min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br ${section.color}`}
          >
            <div className="container mx-auto max-w-6xl">
              <Card className={`overflow-hidden border-0 shadow-2xl bg-white/70 backdrop-blur-sm animate-fade-in`}>
                <div className={`grid md:grid-cols-2 gap-8 ${index % 2 === 0 ? '' : 'md:grid-flow-dense'}`}>
                  <div className={`relative h-64 md:h-full ${index % 2 === 0 ? '' : 'md:col-start-2'}`}>
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 === 0 ? '' : 'md:col-start-1 md:row-start-1'}`}>
                    <div className="inline-flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                        <Icon name={section.icon} className="text-white" size={24} />
                      </div>
                      <div>
                        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-1">
                          {section.title}
                        </h2>
                        <p className="text-lg text-purple-600 font-medium">{section.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed font-montserrat">
                      {section.content}
                    </p>
                    <div className="mt-8 flex gap-2">
                      {sections.map((_, i) => (
                        <div
                          key={i}
                          className={`h-1 rounded-full transition-all duration-300 ${
                            i === index ? 'w-12 bg-purple-500' : 'w-8 bg-purple-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        ))}
      </div>

      <footer className="bg-white/80 backdrop-blur-md border-t border-purple-200/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 font-montserrat">
            Создано с 💜 в Кирове
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
