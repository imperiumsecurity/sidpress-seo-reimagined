import { Check } from "lucide-react";
import bitcoinLogo from "@/assets/bitcoin-accepted.png";
import morpheusChoice from "@/assets/morpheus-choice.png";

const features = [
  "120 Pages of STRAIGHT TO THE POINT SEO content",
  "White Hat Parasite SEO Secrets (15+ DA 90-95 platforms)",
  "Fast Rankings in 24 hours to 15 days guaranteed",
  "Perfect Keyword Research Parameters & Guidelines",
  "Digital PR Backlinks Strategy & Sources",
  "Expired Domains Acquisition Techniques",
  "AI Content Generation Methods ($0.015/article)",
  "Competitor Backlink Reverse Engineering (Video Tutorial)",
  "YouTube Video Ranking Secrets (24-hour results)",
  "Topical Authority Content Map Generation",
  "BONUS: Underground Parasite SEO Document",
  "BONUS: Custom AI Prompts for 100% Human Content",
  "BONUS: Zero Search Volume Keyword Secrets",
  "Lifetime Access to All Course Materials",
  "Future Updates Included",
];

const paymentMethods = [
  {
    name: "Visa",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg",
  },
  {
    name: "MasterCard",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
  },
  {
    name: "Stripe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
  },
];

export const Pricing = () => {
  return (
    <section className="py-16 tablet:py-24 bg-secondary">
      <div className="container mx-auto px-4 mobile-lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl mobile-lg:text-4xl tablet:text-5xl font-black mb-4">
            BUY YOUR ACCESS NOW
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card border-2 border-primary rounded-xl shadow-2xl overflow-hidden">
            <div className="bg-primary p-6 text-center">
              <div className="text-sm font-semibold uppercase tracking-wide mb-2 text-hero-foreground">
                One-Time Payment
              </div>
              <div className="text-5xl tablet:text-6xl font-black text-hero-foreground">
                $900
              </div>
              <div className="text-lg text-hero-foreground/80">USD</div>
            </div>

            <div className="p-8 tablet:p-10">
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                    <span className="text-sm mobile-lg:text-base">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://sidpress.sell.app/product/straight-to-the-point-course"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-hero text-hero-foreground text-center py-4 rounded-lg font-bold text-lg hover:opacity-90 hover:scale-105 transition-all mb-6"
              >
                BUY NOW
              </a>

              <div className="border-t pt-6">
                <p className="text-sm text-center text-muted-foreground mb-4">
                  We accept the following payment methods:
                </p>
                <div className="flex justify-center items-center gap-6 flex-wrap">
                  {paymentMethods.map((method, index) => (
                    <img
                      key={index}
                      src={method.logo}
                      alt={method.name}
                      className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity"
                    />
                  ))}
                  <img
                    src={bitcoinLogo}
                    alt="Bitcoin Accepted"
                    className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-card rounded-xl border-2 border-primary overflow-hidden shadow-2xl">
            <div className="relative">
              <img
                src={morpheusChoice}
                alt="Your Choice Today"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
            </div>
            
            <div className="p-8 tablet:p-10 -mt-20 relative z-10">
              <h3 className="text-2xl mobile-lg:text-3xl tablet:text-4xl font-black text-center mb-8">
                YOUR CHOICE TODAY
              </h3>
              
              <div className="grid mobile-lg:grid-cols-2 gap-6">
                <div className="bg-destructive/10 border-2 border-destructive rounded-lg p-6 text-center">
                  <h4 className="text-xl font-bold text-destructive mb-3">OPTION #1</h4>
                  <p className="text-sm text-muted-foreground">
                    Keep struggling with outdated SEO tactics, watching your rankings (and income) BEING DESTROYED with every update.
                  </p>
                </div>
                
                <div className="bg-success/10 border-2 border-success rounded-lg p-6 text-center">
                  <h4 className="text-xl font-bold text-success mb-3">OPTION #2</h4>
                  <p className="text-sm text-muted-foreground">
                    Get the playbook, deploy your first white-hat CAMPAIGN this week, and start earning while others panic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
