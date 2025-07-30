import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-08-21T18:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-wedding-medium-brown to-wedding-dark-brown">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-white mb-8">
          Countdown bis zur Hochzeit
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-white border border-white/30">
            <div className="text-3xl md:text-5xl font-bold font-serif mb-2">
              {timeLeft.days}
            </div>
            <div className="text-sm md:text-base uppercase tracking-wider">
              {timeLeft.days === 1 ? 'Tag' : 'Tage'}
            </div>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-white border border-white/30">
            <div className="text-3xl md:text-5xl font-bold font-serif mb-2">
              {timeLeft.hours}
            </div>
            <div className="text-sm md:text-base uppercase tracking-wider">
              {timeLeft.hours === 1 ? 'Stunde' : 'Stunden'}
            </div>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-white border border-white/30">
            <div className="text-3xl md:text-5xl font-bold font-serif mb-2">
              {timeLeft.minutes}
            </div>
            <div className="text-sm md:text-base uppercase tracking-wider">
              {timeLeft.minutes === 1 ? 'Minute' : 'Minuten'}
            </div>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-white border border-white/30">
            <div className="text-3xl md:text-5xl font-bold font-serif mb-2">
              {timeLeft.seconds}
            </div>
            <div className="text-sm md:text-base uppercase tracking-wider">
              {timeLeft.seconds === 1 ? 'Sekunde' : 'Sekunden'}
            </div>
          </div>
        </div>
        
        <p className="text-white/80 mt-8 text-lg">
          Freitag, 21. August 2026 um 18:00 Uhr
        </p>
      </div>
    </section>
  );
}