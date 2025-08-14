import { Building, MapPin, Phone, Car, Users } from "lucide-react";
import { useEffect, useRef } from "react";
import venueImage from "@assets/venue_image.jpeg";

export default function Venue() {
  const mapRef = useRef<HTMLDivElement>(null);



  return (
    <section id="venue" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-wedding-dark-brown mb-4">
            Veranstaltungsort & Lage
          </h2>
          <p className="text-lg text-wedding-medium-brown max-w-2xl mx-auto">
            Am kristallklaren Wasser der berühmten Kallithea Quellen auf Rhodos
          </p>
        </div>

        <div className="space-y-12">
          {/* Venue Information Section */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Beautiful venue image */}
            <img 
              src={venueImage} 
              alt="Kallithea Springs wedding venue in Rhodes with crystal clear waters and beautiful Mediterranean architecture" 
              className="w-full h-80 object-cover rounded-2xl shadow-2xl"
            />
            
            <div className="bg-wedding-creme rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-semibold text-wedding-dark-brown mb-4 flex items-center">
                <Building className="text-wedding-medium-brown mr-2 h-6 w-6" />
                Quellen von Kallithea
              </h3>
              <div className="space-y-3 text-wedding-dark-brown">
                <p className="flex items-start">
                  <MapPin className="text-wedding-medium-brown mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                  <span>Leof. Kallitheas 80, Rodos 851 00, Griechenland</span>
                </p>
                <p className="flex items-start">
                  <Phone className="text-wedding-medium-brown mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                  <span>+30 22410 65691</span>
                </p>
                <p className="flex items-start">
                  <Car className="text-wedding-medium-brown mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                  <span>Kostenlose Parkplätze vor Ort</span>
                </p>
                <p className="flex items-start">
                  <Users className="text-wedding-medium-brown mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                  <span>Rollstuhlgerechte Einrichtungen</span>
                </p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="w-full">
            <h3 className="font-serif text-2xl font-semibold text-wedding-dark-brown mb-6 text-center">
              Lage & Umgebung
            </h3>
            <div 
              ref={mapRef}
              className="bg-wedding-creme rounded-2xl h-96 w-full shadow-lg"
              style={{ minHeight: '400px' }}
            />
            
            {/* Map Legend */}
            <div className="mt-6 bg-white rounded-lg p-6 shadow-lg">
              <h4 className="font-serif text-lg font-semibold text-wedding-dark-brown mb-4 text-center">
                Kartenlegende
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-6 h-6 bg-red-600 rounded-full border-2 border-white shadow-md"></div>
                  <span className="text-wedding-dark-brown font-medium">Hochzeitslocation</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full border-2 border-white shadow-md"></div>
                  <span className="text-wedding-dark-brown font-medium">Empfohlene Unterkunftsorte</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full border-2 border-white shadow-md"></div>
                  <span className="text-wedding-dark-brown font-medium">Flughafen</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
