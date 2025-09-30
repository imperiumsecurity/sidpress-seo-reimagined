import featureKeyword from "@/assets/feature-keyword.png";
import featureStealingTraffic from "@/assets/feature-stealing-traffic.png";
import featureRankings from "@/assets/feature-rankings.jpg";
import featureContent from "@/assets/feature-content.jpg";
import featureParasiteSeo from "@/assets/feature-parasite-seo.jpg";

const features = [
  {
    title: "Keyword Research Done RIGHT",
    description:
      "Tap into a wealth of SECRETS/GUIDELINES/PARAMETERS for none other than PERFECT keyword research. I'll reveal to you all the secret parameters YOU SHOULD LOOK FOR when doing keyword research in order TO UNCOVER THOUSANDS of LOW competition keywords from YOUR COMPETITORS directly, that will be SUPER EASY for you to rank for and that will bring you MASSIVE TRAFFIC when you get ranks for them, on pretty much ANY NICHE you may be working with on your projects.",
    image: featureKeyword,
    imageAlt: "Keyword Research Visualization",
  },
  {
    title: "Hijack/Steal Traffic (Legally)",
    description:
      "Learn the steps required to: Hijack/Steal traffic (legally) and outrank ANY COMPETITOR on pretty much ANY NICHE",
    image: featureStealingTraffic,
    imageAlt: "Stealing Traffic Legally",
  },
  {
    title: "Rank new websites and parasite pages in 24 hours",
    description:
      "FAST RANKINGS GUARANTEED The MOST IMPORTANT THING: 100% STRAIGHT TO THE POINT, ACTIONABLE STEPS that WILL GET YOU ultra fast rankings (IN AS FAST AS 24 HOURS for lower competition keywords) guaranteed. If you apply everything we laid out on this course precisely, then the rankings will be inevitable!",
    image: featureRankings,
    imageAlt: "Fast Ranking Results",
  },
  {
    title: "Fast Rankings Guaranteed",
    description:
      "Learn the steps required to: Get your pages ranked in AS FAST as 24 hours to 15 days with my secret methods to achieve TOP 10 results on google and other search engines.",
    image: featureContent,
    imageAlt: "Fast Rankings Guaranteed",
  },
  {
    title: "WHITE HAT AND BLACK HAT PARASITE SEO SECRETS",
    description:
      "ONE OF THE BEST KEPT SECRETS OF SEO: Master the SIMPLEST yet most effective technique about SEO that few people know about; Discover the number #1 White Hat & Black Hat Parasite SEO Secrets and hijack the massive authority of 15+ 90-95 DA (Domain Authority) platforms that you NEED TO USE right now in order to GUARANTEE top rankings for your projects/websites pretty much OVERNIGHT !",
    image: featureParasiteSeo,
    imageAlt: "Parasite SEO Secrets",
  },
];

export const Features = () => {
  return (
    <section className="py-16 tablet:py-24 bg-background">
      <div className="container mx-auto px-4 mobile-lg:px-6">
        <div className="text-center mb-12 tablet:mb-16">
          <h2 className="text-3xl mobile-lg:text-4xl tablet:text-5xl font-black mb-4">
            Here's a glimpse of the unparalleled secret knowledge waiting for you inside
          </h2>
        </div>

        <div className="space-y-16 tablet:space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid tablet:grid-cols-2 gap-8 tablet:gap-12 items-center ${
                index % 2 === 1 ? "tablet:direction-rtl" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "tablet:order-2" : ""}>
                <img
                  src={feature.image}
                  alt={feature.imageAlt}
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
              <div className={index % 2 === 1 ? "tablet:order-1" : ""}>
                <h3 className="text-2xl mobile-lg:text-3xl tablet:text-4xl font-bold mb-4">
                  {feature.title}
                </h3>
                <p className="text-base mobile-lg:text-lg text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
