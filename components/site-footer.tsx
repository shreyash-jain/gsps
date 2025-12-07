import Image from "next/image";
import Link from "next/link";
import { Facebook, Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="relative inline-block h-8 w-8 overflow-hidden rounded-full ring-1 ring-primary ring-offset-1">
                <Image
                  src="/logo/IMG_7954.jpg"
                  alt="GSPS Logo"
                  fill
                  className="object-cover"
                />
              </span>
              <h3 className="text-lg font-bold text-slate-900">Gyan Sagar Play School</h3>
            </div>
            <p className="text-sm text-slate-600 max-w-xs">
              Nurturing young minds with love, care, and creativity. A holistic environment for your child's first steps in education.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/activity" className="hover:text-primary transition-colors">Activities</Link></li>
              <li><Link href="/admission-enquiry" className="hover:text-primary transition-colors">Admissions</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Contact Us</h3>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>Near Medical College, Sagar (M.P.)</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+919752410870" className="hover:text-primary transition-colors">+91 9752410870</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:gspsmedia@gsce.edu.in" className="hover:text-primary transition-colors">gspsmedia@gsce.edu.in</a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Follow Us</h3>
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61550657609868&mibextid=ZbWKwL"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-colors hover:bg-blue-600 hover:text-white"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-slate-200 pt-8 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Gyan Sagar Play School. All rights reserved.</p>
          <div className="mt-4 flex gap-4 sm:mt-0">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}




