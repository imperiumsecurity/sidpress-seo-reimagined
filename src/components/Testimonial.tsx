import { Star } from "lucide-react";

export const Testimonial = () => {
  return (
    <section className="py-8 tablet:py-12 bg-background">
      <div className="container mx-auto px-4 mobile-lg:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Top Stars */}
          <div className="flex justify-center gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-8 h-8 fill-yellow-500 text-yellow-500"
              />
            ))}
          </div>

          {/* Text Content */}
          <div className="bg-yellow-500 px-6 mobile-lg:px-8 tablet:px-12 py-8 tablet:py-10">
            <p className="text-black text-base mobile-lg:text-lg tablet:text-xl font-black uppercase leading-relaxed text-center">
              Secrets of SEO that would take you no less than 5~10 years of practical experience to discover and master out there without the proper short-cuts and effective methodologies shared in our course. Designed to fast track your progress on learning the IN's and OUT'S of ranking any pages/websites/projects on TOP 10 results of google and other search engines in RECORD TIME (24 hours to 15 Days depending on niche difficulty) are taught inside the course.
            </p>
          </div>

          {/* Bottom Stars */}
          <div className="flex justify-center gap-2 mt-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-8 h-8 fill-yellow-500 text-yellow-500"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
