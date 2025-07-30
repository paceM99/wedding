import { Building, MapPin, Phone, Car, Users, Train, Plane } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Venue() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Leaflet map
    const initMap = async () => {
      const L = (await import('leaflet')).default;
      
      if (mapRef.current && !mapRef.current.hasChildNodes()) {
        const map = L.map(mapRef.current).setView([36.378437, 28.238842], 13);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(map);
        
        // Create red icon for wedding venue
        const redIcon = L.icon({
          iconUrl: 'data:image/svg+xml;base64,' + btoa(`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36" width="24" height="36">
              <path fill="#dc2626" stroke="#ffffff" stroke-width="1" d="M12 0C5.4 0 0 5.4 0 12c0 9 12 24 12 24s12-15 12-24c0-6.6-5.4-12-12-12z"/>
              <circle cx="12" cy="12" r="6" fill="#ffffff"/>
            </svg>
          `),
          iconSize: [24, 36],
          iconAnchor: [12, 36],
          popupAnchor: [0, -36]
        });

        // Add marker for venue with red icon
        L.marker([36.378437, 28.238842], { icon: redIcon })
          .addTo(map)
          .bindPopup('Quellen von Kallithea<br>Leof. Kallitheas 80, Rhodes, Greece')
          .openPopup();
        
        // Add marker for Rhodes Airport
        L.marker([36.402218, 28.081913])
          .addTo(map)
          .bindPopup('Rhodes Airport (RHO)<br>Diagoras International Airport');
      }
    };
    
    initMap();
  }, []);

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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            {/* Beautiful venue image */}
            <img 
              src="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Beautiful Greek island wedding venue with crystal clear waters and Mediterranean architecture" 
              className="w-full h-80 object-cover rounded-2xl shadow-2xl mb-8"
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

          <div>
            {/* Map */}
            <div 
              ref={mapRef}
              className="bg-wedding-creme rounded-2xl h-80 mb-8"
              style={{ minHeight: '320px' }}
            />

            <div className="space-y-4">
              <h4 className="font-serif text-xl font-semibold text-wedding-dark-brown">
                Anreise
              </h4>
              
              <div className="bg-white border border-wedding-light-brown rounded-lg p-4">
                <h5 className="font-semibold text-wedding-dark-brown mb-2 flex items-center">
                  <Plane className="text-wedding-medium-brown mr-2 h-5 w-5" />
                  Mit dem Flugzeug
                </h5>
                <p className="text-sm text-wedding-dark-brown">
                  Direktflüge aus Deutschland zum Flughafen Rhodos
                </p>
              </div>

              <div className="bg-white border border-wedding-light-brown rounded-lg p-4">
                <h5 className="font-semibold text-wedding-dark-brown mb-2 flex items-center">
                  <Car className="text-wedding-medium-brown mr-2 h-5 w-5" />
                  Zur Hochzeit
                </h5>
                <p className="text-sm text-wedding-dark-brown">
                  Von Rhodos Stadt: 9 km östlich über die Kallithea Avenue
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
