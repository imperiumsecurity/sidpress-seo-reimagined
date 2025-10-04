import ranking1 from "@/assets/ranking24hs1.jpg";
import ranking2 from "@/assets/ranking24hs.jpg";
import ranking3 from "@/assets/imagerankings2.jpg";
import ranking4 from "@/assets/imagerankings1.jpg";

export const RankingProof = () => {
  const proofImages = [
    { src: ranking1, alt: "SEO Ranking Proof 1" },
    { src: ranking2, alt: "SEO Ranking Proof 2" },
    { src: ranking3, alt: "SEO Ranking Proof 3" },
    { src: ranking4, alt: "SEO Ranking Proof 4" },
  ];

  return (
    <section className="py-16 tablet:py-24 bg-muted">
      <div className="container mx-auto px-4 mobile-lg:px-6">
        {/* Main Heading */}
          <h1 className="text-3xl mobile-lg:text-4xl tablet:text-5xl desktop:text-6xl font-black text-center mb-8 tablet:mb-12">
            Your Competitors <span className="relative inline-block">
              <span className="relative z-10">Rank in Days</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-yellow-400 -rotate-1 -z-0 opacity-80"></span>
            </span>. While You Waiting Months. Here's Why.
          </h1>

        {/* Opening Content */}
        <div className="max-w-4xl mx-auto space-y-6 tablet:space-y-8 mb-12 tablet:mb-16">
          <p className="text-lg tablet:text-xl desktop:text-2xl font-bold text-center">
            Right now, while you're reading this, someone with half your expertise just claimed the #1 spot for your keyword.
          </p>

          {/* Styled Table */}
          <div className="bg-card border-2 border-destructive rounded-lg p-6 tablet:p-8 shadow-lg max-w-2xl mx-auto">
            <div className="space-y-3 tablet:space-y-4">
              <div className="flex items-start gap-3 tablet:gap-4">
                <span className="text-2xl tablet:text-3xl shrink-0">❌</span>
                <p className="text-base tablet:text-lg font-semibold">They didn't wait 6-12 months.</p>
              </div>
              <div className="flex items-start gap-3 tablet:gap-4">
                <span className="text-2xl tablet:text-3xl shrink-0">❌</span>
                <p className="text-base tablet:text-lg font-semibold">They didn't build 100 backlinks.</p>
              </div>
              <div className="flex items-start gap-3 tablet:gap-4">
                <span className="text-2xl tablet:text-3xl shrink-0">❌</span>
                <p className="text-base tablet:text-lg font-semibold">They didn't have a DR90 domain.</p>
              </div>
            </div>
          </div>

          {/* Middle Content */}
          <div className="text-base tablet:text-lg desktop:text-xl space-y-4 tablet:space-y-6">
            <p className="font-bold text-center">They knew something you don't.</p>
            
            <p className="text-center">
              While you're grinding away at "proper SEO"—creating pillar content, building authority, praying to the Google gods—smart marketers are exploiting loopholes that puts them on page one before you even get indexed.
            </p>
            
            <p className="font-bold text-center text-xl tablet:text-2xl">The game has changed.</p>
            
            <p className="text-center">
              Those big brands dominating your SERPs? They're not unbeatable.
            </p>
            
            <p className="text-center">
              Every morning at 9am, Google refreshes its algorithm. For exactly 4 hours, there's a ranking window where fresh content can leapfrog established players. Miss it, and you're back to waiting months.
            </p>
            
            <p className="font-bold text-center text-xl tablet:text-2xl">
              This isn't theory. This is happening right now.
            </p>
          </div>
        </div>

        {/* Proof Heading */}
        <h1 className="text-3xl mobile-lg:text-4xl tablet:text-5xl font-black text-center mb-8 tablet:mb-12">
          Last week, we ranked #1 for exactly 60-70 competitive in 37 hours. Here's proof
        </h1>

        {/* Image Grid with Duct Tape Effect */}
        <div className="max-w-5xl mx-auto mb-12 tablet:mb-16">
          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-16 tablet:gap-20">{proofImages.map((image, index) => (
              <a
                key={index}
                href={image.src}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                {/* Duct Tape Corners */}
                <div className="absolute -top-4 -left-4 w-20 h-8 bg-[#FFA500] transform -rotate-45 z-10 shadow-lg"></div>
                <div className="absolute -top-4 -right-4 w-20 h-8 bg-[#FFA500] transform rotate-45 z-10 shadow-lg"></div>
                <div className="absolute bottom-0 -left-4 w-20 h-8 bg-[#FFA500] transform rotate-45 z-10 shadow-lg"></div>
                <div className="absolute bottom-0 -right-4 w-20 h-8 bg-[#FFA500] transform -rotate-45 z-10 shadow-lg"></div>
                
                {/* Image Container */}
                <div className="relative border-4 border-primary shadow-2xl overflow-hidden rounded-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Closing Content */}
        <div className="max-w-4xl mx-auto space-y-6 tablet:space-y-8 text-base tablet:text-lg desktop:text-xl">
          <p className="font-bold text-center">Yesterday, someone beat Amazon for a product keyword.</p>
          
          <p className="font-bold text-center">Tomorrow, it could be you.</p>
          
          <p className="text-center">
            The STRAIGHT TO THE POINT SEO COURSE doesn't teach you to compete—it teaches you to bypass competition entirely.
          </p>
          
          <p className="text-center">
            Stop fighting battles you can't win. Start exploiting the system that's hiding in plain sight.
          </p>
          
          <p className="font-bold text-center text-xl tablet:text-2xl">
            The door is open. But not for long...
          </p>
        </div>
      </div>
    </section>
  );
};
