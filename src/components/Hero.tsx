import heroImage from "@/assets/hero-product-box.png";
import heroBadge from "@/assets/hero-badge.png";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-hero">
      <div className="container mx-auto px-4 mobile-lg:px-6 py-12 tablet:py-20">
        <div className="grid tablet:grid-cols-2 gap-8 tablet:gap-12 items-center">
          <div className="space-y-6 text-hero-foreground">
            <div className="inline-block">
              <span className="text-hero-accent text-3xl mobile-lg:text-4xl tablet:text-5xl font-huile font-bold">
                Completely Black Hat
              </span>
            </div>
            
            <h1 className="text-4xl mobile-lg:text-5xl tablet:text-6xl desktop:text-7xl font-black leading-tight">
              GOOGLE PROOF SEO COURSE
            </h1>
            
            <h2 className="text-2xl mobile-lg:text-3xl tablet:text-4xl font-bold">
              LEARN HOW TO RANK #1 ON GOOGLE IN 24-48 HOURS GUARANTEED, WITH NO BACKLINKS AND ZERO DOMAIN AUTHORITY
            </h2>
            
            <p className="text-lg mobile-lg:text-xl font-medium max-w-xl">
              120 Pages of STRAIGHT TO THE POINT SEO content Revealed for the FIRST TIME EVER!
            </p>
            
            <div className="pt-4">
              <a
                href="https://sidpress.sell.app/product/straight-to-the-point-course"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-hero-foreground text-hero px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
              >
                BUY NOW - $900 USD
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center min-h-[500px] tablet:min-h-[600px]">
            <img
              src={heroImage}
              alt="SEO Course Product Box"
              className="w-full max-w-lg tablet:max-w-xl desktop:max-w-2xl h-auto object-contain"
            />
            <img
              src={heroBadge}
              alt="Straight to the Point Badge"
              className="absolute -bottom-4 -right-4 w-32 tablet:w-48 h-auto animate-pulse"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
