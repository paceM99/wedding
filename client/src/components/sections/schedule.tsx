import { Heart, Camera, Utensils, Music, MapPin } from "lucide-react";

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
      time: "14:30",
      duration: "30 Minuten",
      title: "Trauungszeremonie",
      description: "Begleiten Sie uns beim Austausch der Ehegelübde im wunderschönen Rosengarten",
      location: "Rosewood Manor Gärten",
      icon: <Heart className="text-wedding-medium-brown mr-2 h-5 w-5" />
    },
    {
      time: "15:30",
      duration: "90 Minuten",
      title: "Sektempfang & Fotos",
      description: "Genießen Sie Getränke und Canapés, während wir Erinnerungen festhalten",
      location: "Herrenhaus Terrasse & Garten",
      icon: <Camera className="text-wedding-medium-brown mr-2 h-5 w-5" />
    },
    {
      time: "18:00",
      duration: "3 Stunden",
      title: "Hochzeitsfeier",
      description: "Drei-Gänge-Menü mit Reden und Ansprachen",
      location: "Großer Ballsaal",
      icon: <Utensils className="text-wedding-medium-brown mr-2 h-5 w-5" />
    },
    {
      time: "21:00",
      duration: "Bis spät",
      title: "Tanz & Feier",
      description: "Live-Band und DJ zum Tanzen bis in die frühen Morgenstunden",
      location: "Großer Ballsaal & Terrasse",
      icon: <Music className="text-wedding-medium-brown mr-2 h-5 w-5" />
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
                  <div className="text-sm text-wedding-dark-brown">
                    {item.duration}
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
