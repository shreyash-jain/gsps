"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/activity", label: "Activity" },
  // Admission handled separately as CTA
  { href: "/parent-login", label: "Parent Login" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight">
          <span className="relative inline-block h-10 w-10 overflow-hidden rounded-full ring-2 ring-primary ring-offset-2">
            <Image
              src="https://gyansagarplayschool.co.in/wp-content/uploads/2023/11/cropped-IMG-20231103-WA0003.jpg"
              alt="GSPS Logo"
              fill
              className="object-cover"
            />
          </span>
          <span className="hidden sm:inline-block text-lg font-bold text-slate-800">Gyan Sagar Play School</span>
          <span className="sm:hidden text-lg font-bold text-slate-800">GSPS</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex ml-auto mr-4">
          <NavigationMenuList className="gap-1">
            {nav.map((item) => (
              <NavigationMenuItem key={item.href}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      "group inline-flex h-9 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-slate-100/50 data-[state=open]:bg-slate-100/50",
                      pathname === item.href
                        ? "bg-slate-100 text-slate-900 font-semibold"
                        : "text-slate-600"
                    )}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden md:block">
          <Button asChild className="rounded-full shadow-md hover:shadow-lg transition-all">
            <Link href="/admission-enquiry">Admissions Open</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 sm:w-80">
              <SheetTitle className="text-left text-lg font-bold">Menu</SheetTitle>
              <nav className="mt-8 flex flex-col gap-4">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-base font-medium transition-colors hover:bg-slate-100",
                      pathname === item.href ? "bg-slate-100 text-primary font-bold" : "text-slate-600"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-slate-100">
                  <Button asChild className="w-full rounded-xl" size="lg">
                    <Link href="/admission-enquiry">Admissions Open</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}


