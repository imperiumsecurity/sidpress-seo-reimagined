import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 mobile-lg:px-6 py-12 tablet:py-20">
        <h1 className="text-4xl mobile-lg:text-5xl font-black mb-8">Blog</h1>
        <p className="text-lg text-muted-foreground">
          Stay tuned for upcoming SEO insights, tips, and strategies.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
