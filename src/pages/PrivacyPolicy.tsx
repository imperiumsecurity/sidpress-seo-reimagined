import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 mobile-lg:px-6 py-12 tablet:py-20 max-w-4xl">
        <h1 className="text-4xl mobile-lg:text-5xl font-black mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <p className="text-muted-foreground">
              When you purchase our SEO course, we collect necessary information including your name,
              email address, and payment details through our secure payment processor.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground">
              We use your information to process your course purchase, provide customer support, and
              send you course updates and materials. We will never sell your personal information to
              third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-muted-foreground">
              We implement industry-standard security measures to protect your personal information.
              All payment processing is handled through secure, encrypted channels.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about our privacy policy, please contact us at{" "}
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

export default PrivacyPolicy;
