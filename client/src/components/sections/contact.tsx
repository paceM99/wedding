import { Reply, Calendar, Mail, Phone, User, Users, Info } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-light text-wedding-dark-brown mb-4">
          Contact & RSVP
        </h2>
        <p className="text-lg text-wedding-medium-brown mb-12 max-w-2xl mx-auto">
          We can't wait to celebrate with you! Please let us know if you can join us.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-wedding-creme rounded-2xl p-8">
            <h3 className="font-serif text-xl font-semibold text-wedding-dark-brown mb-6 flex items-center justify-center">
              <Reply className="text-wedding-medium-brown mr-2 h-6 w-6" />
              RSVP Details
            </h3>
            <div className="space-y-4 text-left">
              <p className="flex items-center text-wedding-dark-brown">
                <Calendar className="text-wedding-medium-brown mr-3 h-5 w-5" />
                <span><strong>RSVP by:</strong> April 15th, 2024</span>
              </p>
              <p className="flex items-center text-wedding-dark-brown">
                <Mail className="text-wedding-medium-brown mr-3 h-5 w-5" />
                <span><strong>Email:</strong> rsvp@emmaandjames.co.uk</span>
              </p>
              <p className="flex items-center text-wedding-dark-brown">
                <Phone className="text-wedding-medium-brown mr-3 h-5 w-5" />
                <span><strong>Phone:</strong> +44 7785 123 456</span>
              </p>
              <p className="text-sm text-wedding-medium-brown mt-4">
                Please include any dietary requirements or accessibility needs in your response.
              </p>
            </div>
          </div>

          <div className="bg-wedding-creme rounded-2xl p-8">
            <h3 className="font-serif text-xl font-semibold text-wedding-dark-brown mb-6 flex items-center justify-center">
              <Info className="text-wedding-medium-brown mr-2 h-6 w-6" />
              Questions?
            </h3>
            <div className="space-y-4 text-left">
              <div className="flex items-start text-wedding-dark-brown">
                <User className="text-wedding-medium-brown mr-3 mt-1 h-5 w-5" />
                <div>
                  <strong>Bride:</strong> Emma Richards<br />
                  <span className="text-sm">emma@emmaandjames.co.uk</span>
                </div>
              </div>
              <div className="flex items-start text-wedding-dark-brown">
                <User className="text-wedding-medium-brown mr-3 mt-1 h-5 w-5" />
                <div>
                  <strong>Groom:</strong> James Mitchell<br />
                  <span className="text-sm">james@emmaandjames.co.uk</span>
                </div>
              </div>
              <div className="flex items-start text-wedding-dark-brown">
                <Users className="text-wedding-medium-brown mr-3 mt-1 h-5 w-5" />
                <div>
                  <strong>Wedding Planner:</strong> Sarah Collins<br />
                  <span className="text-sm">sarah@perfectday.co.uk</span>
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
            "Love is not just looking at each other, it's looking in the same direction."
          </p>
          <p className="text-wedding-medium-brown">
            Thank you for being part of our special day ✨
          </p>
        </div>
      </div>
    </section>
  );
}
