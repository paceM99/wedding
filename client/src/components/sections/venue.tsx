import { Building, MapPin, Phone, Car, Users, Train, Plane } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Venue() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Leaflet map
    const initMap = async () => {
      const L = (await import('leaflet')).default;
      
      if (mapRef.current && !mapRef.current.hasChildNodes()) {
        const map = L.map(mapRef.current).setView([52.0378, -1.7822], 13);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(map);
        
        // Add marker for venue
        L.marker([52.0378, -1.7822])
          .addTo(map)
          .bindPopup('Rosewood Manor<br>Chipping Campden, Cotswolds')
          .openPopup();
      }
    };
    
    initMap();
  }, []);

  return (
    <section id="venue" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-wedding-dark-brown mb-4">
            Venue & Location
          </h2>
          <p className="text-lg text-wedding-medium-brown max-w-2xl mx-auto">
            Nestled in the heart of the beautiful Cotswolds countryside
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            {/* Beautiful venue image */}
            <img 
              src="https://images.unsplash.com/photo-1519167758481-83f29da47cc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Elegant English manor house wedding venue surrounded by gardens" 
              className="w-full h-80 object-cover rounded-2xl shadow-2xl mb-8"
            />
            
            <div className="bg-wedding-creme rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-semibold text-wedding-dark-brown mb-4 flex items-center">
                <Building className="text-wedding-medium-brown mr-2 h-6 w-6" />
                Rosewood Manor
              </h3>
              <div className="space-y-3 text-wedding-dark-brown">
                <p className="flex items-start">
                  <MapPin className="text-wedding-medium-brown mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                  <span>Manor Lane, Chipping Campden, GL55 6UW</span>
                </p>
                <p className="flex items-start">
                  <Phone className="text-wedding-medium-brown mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                  <span>+44 1386 840 317</span>
                </p>
                <p className="flex items-start">
                  <Car className="text-wedding-medium-brown mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                  <span>Free parking available on-site</span>
                </p>
                <p className="flex items-start">
                  <Users className="text-wedding-medium-brown mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                  <span>Wheelchair accessible facilities</span>
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
                Getting There
              </h4>
              
              <div className="bg-white border border-wedding-light-brown rounded-lg p-4">
                <h5 className="font-semibold text-wedding-dark-brown mb-2 flex items-center">
                  <Car className="text-wedding-medium-brown mr-2 h-5 w-5" />
                  By Car
                </h5>
                <p className="text-sm text-wedding-dark-brown">
                  From London: M40 to Junction 8, then A40 towards Cheltenham
                </p>
              </div>

              <div className="bg-white border border-wedding-light-brown rounded-lg p-4">
                <h5 className="font-semibold text-wedding-dark-brown mb-2 flex items-center">
                  <Train className="text-wedding-medium-brown mr-2 h-5 w-5" />
                  By Train
                </h5>
                <p className="text-sm text-wedding-dark-brown">
                  Nearest station: Moreton-in-Marsh (15 minutes by taxi)
                </p>
              </div>

              <div className="bg-white border border-wedding-light-brown rounded-lg p-4">
                <h5 className="font-semibold text-wedding-dark-brown mb-2 flex items-center">
                  <Plane className="text-wedding-medium-brown mr-2 h-5 w-5" />
                  By Air
                </h5>
                <p className="text-sm text-wedding-dark-brown">
                  Birmingham Airport (1 hour drive) or Heathrow (1.5 hours)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
