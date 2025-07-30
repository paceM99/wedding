import { Heart, Camera, Utensils, Music, MapPin, Cake } from "lucide-react";

interface ScheduleItem {
  time: string;
  duration: string;
  title: string;
  description: string;
  location: string;
  icon: React.ReactNode;
}

export default function Schedule() {
  const scheduleItems: ScheduleItem[] = [
    {
      time: "18:00",
      duration: "",
      title: "Trauung",
      description: "Begleiten Sie uns beim Austausch der Ehegelübde in der malerischen Kulisse der Kallithea Quellen",
      location: "Quellen von Kallithea",
      icon: <Heart className="text-wedding-medium-brown mr-2 h-5 w-5" />
    },
    {
      time: "18:30",
      duration: "",
      title: "Sektempfang und Fotos",
      description: "Genießen Sie Prosecco und griechische Häppchen, während wir Erinnerungen festhalten",
      location: "Gärten der Kallithea Quellen",
      icon: <Camera className="text-wedding-medium-brown mr-2 h-5 w-5" />
    },
    {
      time: "20:00",
      duration: "",
      title: "Dinner",
      description: "Authentisches griechisches Drei-Gänge-Menü mit Meerblick und Reden",
      location: "Terrasse am Meer",
      icon: <Utensils className="text-wedding-medium-brown mr-2 h-5 w-5" />
    },
    {
      time: "21:30",
      duration: "",
      title: "First Dance, Hochzeitstorte & Party",
      description: "Eröffnungstanz, Anschnitt der Torte und Feier bis in die frühen Morgenstunden",
      location: "Terrasse & Tanzbereich",
      icon: <Cake className="text-wedding-medium-brown mr-2 h-5 w-5" />
    }
  ];

  return (
    <section id="schedule" className="py-20 bg-wedding-creme">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-wedding-dark-brown mb-4">
            Hochzeitsablauf
          </h2>
          <p className="text-lg text-wedding-medium-brown max-w-2xl mx-auto">
            Feiern Sie mit uns einen Tag voller Liebe, Lachen und Freude
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {scheduleItems.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="text-2xl font-serif font-semibold text-wedding-medium-brown">
                    {item.time}
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-serif font-semibold text-wedding-dark-brown mb-2 flex items-center">
                    {item.icon}
                    {item.title}
                  </h3>
                  <p className="text-wedding-dark-brown mb-2">
                    {item.description}
                  </p>
                  <p className="text-sm text-wedding-medium-brown flex items-center">
                    <MapPin className="mr-1 h-4 w-4" />
                    {item.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
