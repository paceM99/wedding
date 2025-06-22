import { Reply, Calendar, Mail, Phone, User, Users, Info } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-light text-wedding-dark-brown mb-4">
          Kontakt & Zusage
        </h2>
        <p className="text-lg text-wedding-medium-brown mb-12 max-w-2xl mx-auto">
          Wir können es kaum erwarten, mit Ihnen zu feiern! Bitte lassen Sie uns wissen, ob Sie dabei sein können.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-wedding-creme rounded-2xl p-8">
            <h3 className="font-serif text-xl font-semibold text-wedding-dark-brown mb-6 flex items-center justify-center">
              <Reply className="text-wedding-medium-brown mr-2 h-6 w-6" />
              Zusage Details
            </h3>
            <div className="space-y-4 text-left">
              <p className="flex items-center text-wedding-dark-brown">
                <Calendar className="text-wedding-medium-brown mr-3 h-5 w-5" />
                <span><strong>Zusage bis:</strong> 15. April 2024</span>
              </p>
              <p className="flex items-center text-wedding-dark-brown">
                <Mail className="text-wedding-medium-brown mr-3 h-5 w-5" />
                <span><strong>E-Mail:</strong> rsvp@meniaundFlorian.de</span>
              </p>
              <p className="flex items-center text-wedding-dark-brown">
                <Phone className="text-wedding-medium-brown mr-3 h-5 w-5" />
                <span><strong>Telefon:</strong> +49 176 123 456 78</span>
              </p>
              <p className="text-sm text-wedding-medium-brown mt-4">
                Bitte teilen Sie uns eventuelle Ernährungsanforderungen oder Barrierefreiheits-Bedürfnisse mit.
              </p>
            </div>
          </div>

          <div className="bg-wedding-creme rounded-2xl p-8">
            <h3 className="font-serif text-xl font-semibold text-wedding-dark-brown mb-6 flex items-center justify-center">
              <Info className="text-wedding-medium-brown mr-2 h-6 w-6" />
              Fragen?
            </h3>
            <div className="space-y-4 text-left">
              <div className="flex items-start text-wedding-dark-brown">
                <User className="text-wedding-medium-brown mr-3 mt-1 h-5 w-5" />
                <div>
                  <strong>Braut:</strong> Menia Schmidt<br />
                  <span className="text-sm">menia@meniaundFlorian.de</span>
                </div>
              </div>
              <div className="flex items-start text-wedding-dark-brown">
                <User className="text-wedding-medium-brown mr-3 mt-1 h-5 w-5" />
                <div>
                  <strong>Bräutigam:</strong> Florian Müller<br />
                  <span className="text-sm">florian@meniaundFlorian.de</span>
                </div>
              </div>
              <div className="flex items-start text-wedding-dark-brown">
                <Users className="text-wedding-medium-brown mr-3 mt-1 h-5 w-5" />
                <div>
                  <strong>Hochzeitsplanerin:</strong> Sarah Schmidt<br />
                  <span className="text-sm">sarah@perfectday.de</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Beautiful closing image */}
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
            alt="Romantic sunset wedding scene with couple silhouette and golden lighting" 
            className="w-full h-64 object-cover rounded-2xl shadow-2xl"
          />
        </div>

        <div className="text-center">
          <p className="font-serif text-2xl text-wedding-dark-brown mb-4">
            "Liebe bedeutet nicht nur, sich anzusehen, sondern gemeinsam in dieselbe Richtung zu blicken."
          </p>
          <p className="text-wedding-medium-brown">
            Vielen Dank, dass Sie Teil unseres besonderen Tages sind
          </p>
        </div>
      </div>
    </section>
  );
}
