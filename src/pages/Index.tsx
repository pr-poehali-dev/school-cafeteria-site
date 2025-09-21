import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const menuItems = [
    {
      id: 1,
      name: "Борщ домашний",
      description: "Наваристый борщ со сметаной и зеленью",
      price: 45,
      category: "Первые блюда",
      image: "/img/9469012c-35fc-40b7-a4a5-f183a417938c.jpg",
      popular: true
    },
    {
      id: 2,
      name: "Котлета куриная с пюре",
      description: "Сочная котлета из куриного фарша с картофельным пюре",
      price: 85,
      category: "Горячие блюда",
      image: "/img/58c838b3-483e-4531-9447-9acb40add07a.jpg",
      popular: true
    },
    {
      id: 3,
      name: "Салат овощной",
      description: "Свежие овощи с подсолнечным маслом",
      price: 35,
      category: "Салаты",
      image: "/img/9469012c-35fc-40b7-a4a5-f183a417938c.jpg",
      popular: false
    },
    {
      id: 4,
      name: "Гречка с мясом",
      description: "Рассыпчатая гречка с тушеным мясом",
      price: 75,
      category: "Горячие блюда",
      image: "/img/58c838b3-483e-4531-9447-9acb40add07a.jpg",
      popular: false
    },
    {
      id: 5,
      name: "Компот из сухофруктов",
      description: "Домашний компот из сухофруктов",
      price: 20,
      category: "Напитки",
      image: "/img/9469012c-35fc-40b7-a4a5-f183a417938c.jpg",
      popular: false
    },
    {
      id: 6,
      name: "Булочка с маком",
      description: "Свежая выпечка с маковой начинкой",
      price: 25,
      category: "Выпечка",
      image: "/img/58c838b3-483e-4531-9447-9acb40add07a.jpg",
      popular: false
    }
  ];

  const comboMeals = [
    {
      id: 1,
      name: "Комплекс №1",
      description: "Борщ + Котлета с пюре + Салат + Компот",
      price: 150,
      originalPrice: 185,
      items: ["Борщ домашний", "Котлета куриная с пюре", "Салат овощной", "Компот"]
    },
    {
      id: 2,
      name: "Комплекс №2", 
      description: "Суп + Гречка с мясом + Булочка + Чай",
      price: 120,
      originalPrice: 145,
      items: ["Суп куриный", "Гречка с мясом", "Булочка с маком", "Чай сладкий"]
    },
    {
      id: 3,
      name: "Легкий обед",
      description: "Салат + Булочка + Компот",
      price: 65,
      originalPrice: 80,
      items: ["Салат овощной", "Булочка с маком", "Компот из сухофруктов"]
    }
  ];

  const categories = ["Все", "Первые блюда", "Горячие блюда", "Салаты", "Напитки", "Выпечка"];

  return (
    <div className="min-h-screen bg-warm-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-warm-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="ChefHat" size={32} className="text-primary" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900 font-montserrat">Школьная столовая</h1>
                <p className="text-warm-700 font-opensans">Вкусно и полезно каждый день</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Icon name="Clock" size={20} className="text-warm-600" />
              <span className="text-warm-800 font-opensans">Пн-Пт: 8:00-16:00</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 font-montserrat animate-fade-in">Добро пожаловать в нашу столовую!</h2>
          <p className="text-xl mb-8 font-opensans animate-fade-in" style={{animationDelay: '0.2s'}}>
            Здоровое питание для наших учеников - наша главная забота
          </p>
          <Button className="bg-white text-primary hover:bg-warm-100 font-semibold px-8 py-3 animate-scale-in" style={{animationDelay: '0.4s'}}>
            <Icon name="UtensilsCrossed" size={20} className="mr-2" />
            Посмотреть меню
          </Button>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Menu Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">Наше меню</h3>
            <p className="text-warm-700 font-opensans max-w-2xl mx-auto">
              Свежие и вкусные блюда, приготовленные с любовью нашими поварами
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Все" ? "default" : "outline"}
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {menuItems.map((item, index) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  {item.popular && (
                    <Badge className="absolute top-2 right-2 bg-primary text-white">
                      <Icon name="Star" size={14} className="mr-1" />
                      Популярное
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-montserrat">{item.name}</CardTitle>
                    <span className="text-xl font-bold text-primary">{item.price}₽</span>
                  </div>
                  <Badge variant="outline" className="text-warm-700 border-warm-300 w-fit">
                    {item.category}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-opensans">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Combo Meals Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">Комплексные обеды</h3>
            <p className="text-warm-700 font-opensans max-w-2xl mx-auto">
              Выгодные комплексы для полноценного питания. Экономьте до 35₽!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comboMeals.map((combo, index) => (
              <Card key={combo.id} className="relative overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{animationDelay: `${index * 0.15}s`}}>
                <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                  -{combo.originalPrice - combo.price}₽
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-montserrat flex items-center">
                    <Icon name="Package" size={24} className="mr-2 text-primary" />
                    {combo.name}
                  </CardTitle>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl font-bold text-primary">{combo.price}₽</span>
                    <span className="text-lg line-through text-gray-500">{combo.originalPrice}₽</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 font-opensans">{combo.description}</CardDescription>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-warm-800">В комплект входит:</h4>
                    <ul className="space-y-1">
                      {combo.items.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm text-warm-700 font-opensans">
                          <Icon name="Check" size={16} className="mr-2 text-green-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full mt-4 bg-primary hover:bg-secondary">
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    Заказать комплекс
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Info Section */}
        <section className="bg-white rounded-lg shadow-sm p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Icon name="Heart" size={48} className="mx-auto mb-4 text-primary" />
              <h4 className="text-lg font-semibold mb-2 font-montserrat">Здоровое питание</h4>
              <p className="text-warm-700 font-opensans">Только свежие продукты и сбалансированные блюда</p>
            </div>
            <div className="text-center">
              <Icon name="Clock" size={48} className="mx-auto mb-4 text-primary" />
              <h4 className="text-lg font-semibold mb-2 font-montserrat">Быстрое обслуживание</h4>
              <p className="text-warm-700 font-opensans">Горячие блюда всегда готовы к подаче</p>
            </div>
            <div className="text-center">
              <Icon name="Coins" size={48} className="mx-auto mb-4 text-primary" />
              <h4 className="text-lg font-semibold mb-2 font-montserrat">Доступные цены</h4>
              <p className="text-warm-700 font-opensans">Качественное питание по справедливым ценам</p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-secondary text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="ChefHat" size={24} />
            <span className="text-xl font-semibold font-montserrat">Школьная столовая</span>
          </div>
          <p className="font-opensans opacity-90">Работаем с заботой о здоровье наших учеников</p>
          <p className="font-opensans text-sm opacity-75 mt-2">Пн-Пт: 8:00-16:00 | Обед: 12:00-13:00</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;