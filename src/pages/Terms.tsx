import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 mobile-lg:px-6 py-12 tablet:py-20 max-w-4xl">
        <h1 className="text-4xl mobile-lg:text-5xl font-black mb-8">Terms & Conditions</h1>
        
        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">Course Access</h2>
            <p className="text-muted-foreground">
              Upon purchase, you will receive lifetime access to the SIDPRESS SEO Course materials.
              All content is for personal use only and may not be shared or distributed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Refund Policy</h2>
            <p className="text-muted-foreground">
              Due to the digital nature of our course, all sales are final. We do not offer refunds
              after purchase. Please review the course description carefully before purchasing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Results Disclaimer</h2>
            <p className="text-muted-foreground">
              While we provide comprehensive SEO strategies and techniques, individual results may
              vary. Success depends on proper implementation, niche selection, and consistent effort.
              We guarantee the quality of our content, but cannot guarantee specific ranking outcomes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
            <p className="text-muted-foreground">
              All course materials, including text, graphics, videos, and downloadable content, are
              protected by copyright and owned by SIDPRESS. Unauthorized reproduction or distribution
              is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-muted-foreground">
              For any questions regarding these terms, please contact us at{" "}
              <a href="mailto:SidPressOrg@Gmail.com" className="text-primary hover:underline">
                SidPressOrg@Gmail.com
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
