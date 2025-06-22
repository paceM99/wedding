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
      time: "2:30 PM",
      duration: "30 minutes",
      title: "Wedding Ceremony",
      description: "Join us as we exchange vows in the beautiful Rose Garden",
      location: "Rosewood Manor Gardens",
      icon: <Heart className="text-wedding-medium-brown mr-2 h-5 w-5" />
    },
    {
      time: "3:30 PM",
      duration: "90 minutes",
      title: "Cocktail Hour & Photos",
      description: "Enjoy drinks and canapés while we capture memories",
      location: "Manor Terrace & Grounds",
      icon: <Camera className="text-wedding-medium-brown mr-2 h-5 w-5" />
    },
    {
      time: "6:00 PM",
      duration: "3 hours",
      title: "Wedding Reception",
      description: "Three-course dinner with speeches and toasts",
      location: "Grand Ballroom",
      icon: <Utensils className="text-wedding-medium-brown mr-2 h-5 w-5" />
    },
    {
      time: "9:00 PM",
      duration: "Until late",
      title: "Dancing & Celebration",
      description: "Live band and DJ to dance the night away",
      location: "Grand Ballroom & Terrace",
      icon: <Music className="text-wedding-medium-brown mr-2 h-5 w-5" />
    }
  ];

  return (
    <section id="schedule" className="py-20 bg-wedding-creme">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-wedding-dark-brown mb-4">
            Wedding Schedule
          </h2>
          <p className="text-lg text-wedding-medium-brown max-w-2xl mx-auto">
            Join us for a day filled with love, laughter, and celebration
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
