import { Heart, Camera, Utensils, Music, MapPin, Cake, PartyPopper } from "lucide-react";

interface ScheduleItem {
  time: string;
  duration: string;
  title: string;
  description: string;
  location: string;
  icon: React.ReactNode;
}

interface DaySchedule {
  date: string;
  title: string;
  items: ScheduleItem[];
}

export default function Schedule() {
  const scheduleData: DaySchedule[] = [
    {
      date: "19.08.2026",
      title: "💍✨ Pre-Wedding Get-Together ✨💍",
      items: [
        {
          time: "17:00-21:00",
          duration: "",
          title: "Pre-Wedding Get-Together",
          description: "Lasst uns gemeinsam auf die Liebe anstoßen! Bevor wir 'Ja' sagen, wollen wir mit euch in entspannter Runde feiern - lachen, trinken und die Vorfreude genießen! Für Bier, Wein, Snacks und gute Stimmung ist gesorgt. Kommt vorbei, bringt gute Laune mit - und feiert mit uns den Start in ein unvergessliches Hochzeitswochenende! ❤ Menia & Flo",
          location: "Überraschung",
          icon: <PartyPopper className="text-wedding-medium-brown mr-2 h-5 w-5" />
        }
      ]
    },
    {
      date: "21.08.2026",
      title: "💍✨ Hochzeitstag ✨💍",
      items: [
        {
          time: "18:00",
          duration: "",
          title: "Trauung",
          description: "Begleitet uns beim Austausch der Ehegelübde in der malerischen Kulisse der Kallithea Quellen",
          location: "Quellen von Kallithea",
          icon: <Heart className="text-wedding-medium-brown mr-2 h-5 w-5" />
        },
        {
          time: "18:30",
          duration: "",
          title: "Sektempfang und Fotos",
          description: "Genießt Prosecco und griechische Häppchen, während wir Erinnerungen festhalten",
          location: "Gärten der Kallithea Quellen",
          icon: <Camera className="text-wedding-medium-brown mr-2 h-5 w-5" />
        },
        {
          time: "20:00",
          duration: "",
          title: "Dinner",
          description: "Mediterranisches Buffet mit Meerblick",
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
      ]
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
            Feiert mit uns einen Tag voller Liebe, Lachen und Freude
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {scheduleData.map((day, dayIndex) => (
              <div key={dayIndex} className="space-y-6">
                {/* Day Header */}
                <div className="text-center">
                  <h3 className="font-serif text-3xl font-semibold text-wedding-dark-brown mb-2">
                    {day.title}
                  </h3>
                  <div className="text-xl font-medium text-wedding-medium-brown bg-white rounded-full px-6 py-2 inline-block shadow-md">
                    {day.date}
                  </div>
                </div>
                
                {/* Day Events */}
                <div className="space-y-6">
                  {day.items.map((item, index) => (
                    <div key={index} className="flex flex-col md:flex-row items-start md:items-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="md:w-1/4 mb-4 md:mb-0">
                        <div className="text-2xl font-serif font-semibold text-wedding-medium-brown">
                          {item.time}
                        </div>
                      </div>
                      <div className="md:w-3/4">
                        <h4 className="text-xl font-serif font-semibold text-wedding-dark-brown mb-2 flex items-center">
                          {item.icon}
                          {item.title}
                        </h4>
                        <p className="text-wedding-dark-brown mb-2 leading-relaxed">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
