import { Star } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import trustpilotReview from "@/assets/trustpilot-review.jpg";

export const SocialProof = () => {
  // Random avatar images (using placeholder service)
  const avatars = [
    "https://i.pravatar.cc/150?img=1",
    "https://i.pravatar.cc/150?img=2",
    "https://i.pravatar.cc/150?img=3",
    "https://i.pravatar.cc/150?img=4",
    "https://i.pravatar.cc/150?img=5",
    "https://i.pravatar.cc/150?img=6",
    "https://i.pravatar.cc/150?img=7",
    "https://i.pravatar.cc/150?img=8",
  ];

  return (
    <section className="py-12 tablet:py-16 bg-background">
      <div className="container mx-auto px-4 mobile-lg:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-3xl mobile-lg:text-4xl tablet:text-5xl desktop:text-6xl font-black text-center mb-8 tablet:mb-12">
            OUR CUSTOMERS ARE LOVING OUR COURSE
          </h1>

          {/* Rating Section with Blue Background */}
          <div className="bg-blue-600 rounded-lg py-8 tablet:py-10 px-6 mb-8 tablet:mb-12">
            {/* Circular Avatars */}
            <div className="flex justify-center mb-4">
              {avatars.map((avatar, index) => (
                <Avatar
                  key={index}
                  className="w-10 h-10 tablet:w-12 tablet:h-12 border-2 border-white -ml-2 first:ml-0"
                >
                  <AvatarImage src={avatar} alt={`Customer ${index + 1}`} />
                  <AvatarFallback>U{index + 1}</AvatarFallback>
                </Avatar>
              ))}
            </div>

            {/* 4.8 Stars Rating */}
            <div className="text-center">
              <div className="text-4xl tablet:text-5xl font-black text-white mb-3">
                4.8
              </div>
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 tablet:w-7 tablet:h-7 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
