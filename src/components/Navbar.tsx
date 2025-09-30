import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "@/assets/logo.png";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 mobile-lg:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="SIDPRESS Logo" className="h-10 w-auto invert dark:invert-0" />
          </Link>

          <div className="hidden tablet:flex items-center gap-8">
            <Link
              to="/"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              Home
            </Link>
            <Link
              to="/blog"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              Blog
            </Link>
            <Link
              to="/privacy-policy"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              Terms & Conditions
            </Link>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="tablet:hidden p-2">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  to="/"
                  className="text-lg font-medium text-foreground transition-colors hover:text-primary py-2"
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/blog"
                  className="text-lg font-medium text-foreground transition-colors hover:text-primary py-2"
                  onClick={() => setOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  to="/privacy-policy"
                  className="text-lg font-medium text-foreground transition-colors hover:text-primary py-2"
                  onClick={() => setOpen(false)}
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="text-lg font-medium text-foreground transition-colors hover:text-primary py-2"
                  onClick={() => setOpen(false)}
                >
                  Terms & Conditions
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
