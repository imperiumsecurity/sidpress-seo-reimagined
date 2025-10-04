import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Does this really work in 24-48 hours?",
    answer: "Yes! The method exploits opportunities where there's virtually no to low competition. When you're one of the first to produce HIGH QUALITY, COMPREHENSIVE NEW content in your niche, Google ranks you immediately. I've documented a case study inside, showing rankings within 24-48 hours for even 60-70 medium competition keywords. However, the results are NOT guaranteed because we can't control google, and can't control what you going to do on your side with the information. IE: if you will follow the method correctly, and to the point, or not!"
  },
  {
    question: "Can I really rank pages, posts, and youtube videos FAST?",
    answer: "Yes! But results will vary and take more or less time and effort/investment, based on niche difficulty/keyword difficulty and by effort and implementation. We could rank pages in 24 hours by consistently finding quality low to medium competition keywords 'first' and creating quality content. The key is being first to market with keywords that have generous amount of search volume per month. The method shows you exactly how to find these opportunities."
  },
  {
    question: "What if I'm a complete beginner to SEO?",
    answer: "Perfect! This method is actually easier for beginners because we offer IN-DEPTH and step-by-step information on every detail, and the proven blueprint we follow, does most of the heavy lifting for finding opportunities."
  },
  {
    question: "Will this work in my niche?",
    answer: "The Method works across ANY niche whether you're in AI tools, SaaS, digital marketing, health, finance, or any other market, this method helps you identify and exploit low to medium competition keywords that are EASY TO RANK with quality content, and who have BIG SEARCH VOLUME (untapped goldmines) before your competition arrives!"
  },
  {
    question: "Do I need any special tools or software?",
    answer: "Yes you will need access to a couple of paid SEO research tools, that you can use to implement all the method, immediately. All the AI prompts given will also work with the best version/paid version of Claude AI."
  },
  {
    question: "How much time does this take per week?",
    answer: "Once you master the detection techniques (2-4 hours to go through everything and learn), finding opportunities becomes systematic and efficient. Creating content takes 2-4 hours per article. Most students spend 5-10 hours per week and see significant results within the first month."
  },
  {
    question: "What's your refund policy?",
    answer: "In order to avoid/protect our VALUABLE and UNIQUE knowledge from leaking/sharing/resellers/pirates, we have put a higher price tag, and have a strict NO REFUND policy in place for the customers who receive access to the course. Which means after we send you access to the course, then a refund is not possible anymore. However we are 100% confident that, like all the other previous customers: YOU GONNA ABSOLUTELY LOVE OUR COURSE ❤️, as it is right now BEST SEO COURSE out. There are no competition to the best seo course we have, in terms of quality and unique content/one of a kind SEO information shared inside, out there."
  },
  {
    question: "Can I use this for clients SEO work?",
    answer: "Absolutely! Many of our customers use it for doing client SEO work. It's especially powerful for SaaS companies and startups who need fast visibility for their new products. You can charge premium rates for guaranteed rapid rankings."
  },
  {
    question: "Why the extra/bonus content on ranking pages in 24 hours is only given as a GIFT to customers who leave you a positive feedback on trustpilot/forums?",
    answer: "As stated before: Our course is ONE OF A KIND with PRICELESS information on SEO latest SNEAKY tricks and tactics, that you cannot simply find out there in a ALL IN ONE fashion, like you can find teached here in our 4 COURSE LEVELS/4 DOCUMENT course. So in order to reward the customers who demonstrate THEIR WORTH and TRUST in us by not only PAYING us the money for the course access, but who ALSO give us a VOUCH/DEMONSTRATE their appreciation and trust for our work, then we wanted to develop a system to REWARD this kinds of SERIOUS people. This helps us to protect our most valuable assets/knowledge, from window shoppers/refunders/time-wasters as well. So bear in mind that the SPECIAL CONTENT designed to teach how to ran pages and posts in 24-48 hours are only teached INSIDE THE LAST / 4TH DOCUMENT which is given only as BONUS/GIFT to those who leave a vouch/positive feedback for us on trustpilot, then. Hope you understand."
  }
];

export const FAQ = () => {
  return (
    <section className="py-16 tablet:py-24 bg-background">
      <div className="container mx-auto px-4 mobile-lg:px-6">
        <h2 className="text-3xl mobile-lg:text-4xl tablet:text-5xl font-black text-center mb-12 tablet:mb-16">
          Frequently Asked Questions
        </h2>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 border-primary rounded-xl bg-[#FFF9E6] hover:bg-[#FFF5D6] transition-colors overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-5 text-left hover:no-underline [&[data-state=open]]:bg-[#FFF5D6]">
                  <span className="text-base tablet:text-lg font-bold text-[#8B7500] pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 pt-2">
                  <p className="text-sm tablet:text-base text-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
