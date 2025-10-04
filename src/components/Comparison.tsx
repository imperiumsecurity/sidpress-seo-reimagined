import { Check, X, HelpCircle } from "lucide-react";
import seoLogo from "@/assets/seo-logo-circle.png";

const comparisonData = [
  {
    feature: "Plenty of backlinks sources",
    ours: true,
    others: "Very Few",
  },
  {
    feature: "Teach how to actually rank in 24-48 hours",
    ours: true,
    others: false,
  },
  {
    feature: "Teach how to conduct proper keyword research",
    ours: true,
    others: "Limited",
  },
  {
    feature: "Teach how to rank youtube videos in 24 hours",
    ours: true,
    others: false,
  },
  {
    feature: "CUSTOM prompts given for content generation & more",
    ours: true,
    others: "Sometimes",
  },
  {
    feature: "Teaches how to get QUALITY backlinks for dirty cheap",
    ours: true,
    others: false,
  },
  {
    feature: "Teaches ALL White Hat & Black hat Parasite Seo Secrets",
    ours: true,
    others: false,
  },
  {
    feature: "Teaches all the secrets on acquiring expired SEO domains",
    ours: true,
    others: false,
  },
  {
    feature: "Teaches competitor backlink reverse engineering",
    ours: true,
    others: "Very Limited",
  },
  {
    feature: "Teaches Topical Authority Content Map Generation",
    ours: true,
    others: "Paid Solutions",
  },
  {
    feature: "Teaches 100% HUMAN sounding content generation tactics",
    ours: true,
    others: false,
  },
  {
    feature: "Gives dozens and dozens of cheap backlinks suppliers etc",
    ours: true,
    others: false,
  },
];

export const Comparison = () => {
  return (
    <section className="py-16 tablet:py-24 bg-background">
      <div className="container mx-auto px-4 mobile-lg:px-6">
        <h1 className="text-3xl mobile-lg:text-4xl tablet:text-5xl font-black text-center mb-12 tablet:mb-16">
          Why our SEO Course Is better then all the others
        </h1>

        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-xl border-2 border-primary shadow-2xl overflow-hidden">
            {/* Header Row */}
            <div className="grid grid-cols-[2fr,1fr,1fr] gap-4 p-4 tablet:p-6 bg-secondary border-b-2 border-primary">
              <div className="text-lg tablet:text-xl font-bold">Features</div>
              <div className="flex flex-col items-center justify-center gap-2">
                <img
                  src={seoLogo}
                  alt="Straight to the Point SEO"
                  className="w-10 h-10 tablet:w-12 tablet:h-12"
                />
                <span className="text-xs tablet:text-sm font-semibold text-center">Our Course</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="w-10 h-10 tablet:w-12 tablet:h-12 rounded-full bg-muted flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 tablet:w-7 tablet:h-7 text-muted-foreground" />
                </div>
                <span className="text-xs tablet:text-sm font-semibold text-center">Other SEO Courses</span>
              </div>
            </div>

            {/* Comparison Rows */}
            <div className="divide-y divide-border">
              {comparisonData.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[2fr,1fr,1fr] gap-4 p-4 tablet:p-6 hover:bg-secondary/50 transition-colors"
                >
                  <div className="text-sm tablet:text-base font-medium flex items-center">
                    {item.feature}
                  </div>
                  <div className="flex items-center justify-center">
                    {item.ours && (
                      <Check className="w-5 h-5 tablet:w-6 tablet:h-6 text-[#FFA500] shrink-0" />
                    )}
                  </div>
                  <div className="flex items-center justify-center text-center">
                    {typeof item.others === "boolean" ? (
                      item.others ? (
                        <Check className="w-5 h-5 tablet:w-6 tablet:h-6 text-success shrink-0" />
                      ) : (
                        <X className="w-5 h-5 tablet:w-6 tablet:h-6 text-muted-foreground shrink-0" />
                      )
                    ) : (
                      <span className="text-xs tablet:text-sm text-muted-foreground font-medium">
                        {item.others}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
