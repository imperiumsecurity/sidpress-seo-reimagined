import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 tablet:py-16">
      <div className="container mx-auto px-4 mobile-lg:px-6">
        <div className="grid mobile-lg:grid-cols-2 tablet:grid-cols-4 gap-8 mb-8">
          <div className="mobile-lg:col-span-2">
            <img src={logo} alt="SIDPRESS Logo" className="h-12 w-auto mb-4 invert" />
            <p className="text-sm text-background/80 max-w-md">
              SIDPRESS - Straight to the Point SEO Course. Learn all the SEO loopholes and secrets
              that would take you 5-10 years to discover on your own.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-background/80 hover:text-background transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-background/80 hover:text-background transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a
                  href="https://sidpress.sell.app/product/straight-to-the-point-course"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-background/80 hover:text-background transition-colors"
                >
                  Buy Course
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-sm text-background/80 hover:text-background transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-background/80 hover:text-background transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col tablet:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a
                href="mailto:SidPressOrg@Gmail.com"
                className="text-sm text-background/80 hover:text-background transition-colors"
              >
                SidPressOrg@Gmail.com
              </a>
            </div>
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} SIDPRESS. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
