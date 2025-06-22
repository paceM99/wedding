import { MapPin, Star } from "lucide-react";

interface Accommodation {
  name: string;
  location: string;
  description: string;
  priceRange: string;
  rating: number;
  image: string;
  specialOffer: string;
}

export default function Accommodation() {
  const accommodations: Accommodation[] = [
    {
      name: "The Rose & Crown Inn",
      location: "Chipping Campden (2 minutes from venue)",
      description: "Historic coaching inn with individually designed rooms and award-winning restaurant.",
      priceRange: "£120-180/night",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      specialOffer: 'Quote "Emma&James" for 15% discount'
    },
    {
      name: "Cotswold Manor Hotel",
      location: "Broadway (8 minutes from venue)",
      description: "Luxury hotel in a 16th-century manor with spa facilities and beautiful gardens.",
      priceRange: "£200-350/night",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      specialOffer: 'Quote "Emma&James" for 20% discount'
    },
    {
      name: "Meadowside B&B",
      location: "Mickleton (5 minutes from venue)",
      description: "Charming family-run B&B with homemade breakfast and beautiful countryside views.",
      priceRange: "£80-120/night",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1520637836862-4d197d17c50a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      specialOffer: 'Quote "Emma&James" for 10% discount'
    },
    {
      name: "The Lygon Arms",
      location: "Broadway (10 minutes from venue)",
      description: "Iconic hotel with 600 years of history, recently renovated with modern luxury.",
      priceRange: "£180-280/night",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      specialOffer: "Group booking available"
    },
    {
      name: "Honeysuckle Cottage",
      location: "Hidcote (7 minutes from venue)",
      description: "Self-catering cottage perfect for families, sleeps up to 6 guests.",
      priceRange: "£150-200/night",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1505916349660-8d91a99c3e23?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      specialOffer: "Minimum 2-night stay"
    },
    {
      name: "The Old Barn",
      location: "Broad Campden (3 minutes from venue)",
      description: "Converted 18th-century barn with modern amenities and countryside views.",
      priceRange: "£100-160/night",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      specialOffer: "Pet-friendly option available"
    }
  ];

  return (
    <section id="accommodation" className="py-20 bg-wedding-creme">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-wedding-dark-brown mb-4">
            Where to Stay
          </h2>
          <p className="text-lg text-wedding-medium-brown max-w-2xl mx-auto">
            We've arranged special rates at these lovely local accommodations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodations.map((accommodation, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={accommodation.image}
                alt={`${accommodation.name} - charming accommodation near wedding venue`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-wedding-dark-brown mb-2">
                  {accommodation.name}
                </h3>
                <p className="text-sm text-wedding-medium-brown mb-3 flex items-center">
                  <MapPin className="mr-1 h-4 w-4" />
                  {accommodation.location}
                </p>
                <p className="text-wedding-dark-brown text-sm mb-4">
                  {accommodation.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-wedding-medium-brown font-semibold">
                    {accommodation.priceRange}
                  </span>
                  <div className="text-xs text-wedding-dark-brown flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    {accommodation.rating}/5
                  </div>
                </div>
                <div className="mt-4 text-xs text-wedding-medium-brown">
                  {accommodation.specialOffer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-serif text-xl font-semibold text-wedding-dark-brown mb-4">
              Booking Information
            </h3>
            <p className="text-wedding-dark-brown mb-4">
              We recommend booking accommodation as soon as possible, especially for June weekends. 
              All listed properties have been contacted about our wedding group.
            </p>
            <p className="text-sm text-wedding-medium-brown">
              For assistance with bookings or alternative options, please contact us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
