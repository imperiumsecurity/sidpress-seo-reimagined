import yahooLogo from "@/assets/yahoo-logo.png";
import forbesLogo from "@/assets/forbes-logo.png";
import entrepreneurLogo from "@/assets/entrepreneur-logo.png";

export const LogoTicker = () => {
  const logos = [
    { src: yahooLogo, alt: "Yahoo News" },
    { src: forbesLogo, alt: "Forbes" },
    { src: entrepreneurLogo, alt: "Entrepreneur Magazine" },
  ];

  return (
    <section className="py-8 bg-muted overflow-hidden">
      <div className="relative">
        <div className="flex animate-slide-left whitespace-nowrap">
          {/* First set of logos */}
          <div className="flex items-center gap-16 px-8 shrink-0 min-w-full justify-around">
            {logos.map((logo, index) => (
              <img
                key={`first-${index}`}
                src={logo.src}
                alt={logo.alt}
                className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              />
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center gap-16 px-8 shrink-0 min-w-full justify-around">
            {logos.map((logo, index) => (
              <img
                key={`second-${index}`}
                src={logo.src}
                alt={logo.alt}
                className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              />
            ))}
          </div>
          {/* Third set for seamless loop */}
          <div className="flex items-center gap-16 px-8 shrink-0 min-w-full justify-around">
            {logos.map((logo, index) => (
              <img
                key={`third-${index}`}
                src={logo.src}
                alt={logo.alt}
                className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
