import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeroCarousel } from "@/components/hero-carousel";
import {
  Sparkles,
  Baby,
  Palette,
  BookOpen,
  GraduationCap,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pb-20 bg-amber-50/30">
      {/* Hero Slideshow */}
      <HeroCarousel />

      {/* Introduction / Hero Content */}
      <section className="relative mt-8 px-4 sm:mt-12 sm:px-6 z-10">
        <div className="mx-auto max-w-4xl transform rounded-[2.5rem] bg-white/90 backdrop-blur-sm p-8 text-center shadow-2xl ring-4 ring-white/50 sm:p-12 transition-all hover:scale-[1.01]">
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center rounded-full bg-violet-100 px-4 py-1.5 text-sm font-bold text-violet-700 ring-1 ring-inset ring-violet-700/10 shadow-sm">
              <Sparkles className="mr-1.5 h-4 w-4 text-violet-600" />
              Welcome to Gyan Sagar
            </span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-7xl">
            Admission open for <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-600 block mt-2 sm:inline sm:mt-0">2025-26</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-700 font-medium">
            Play Group, Nursery, LKG, UKG. Apply soon — <span className="font-bold text-rose-600">limited seats available</span>.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="rounded-full text-lg shadow-lg shadow-violet-500/25 bg-violet-600 hover:bg-violet-700 transition-all hover:-translate-y-1 hover:shadow-xl">
              <Link href="/admission-enquiry">
                Get Admission <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full text-lg border-2 border-violet-200 text-violet-700 hover:bg-violet-50">
              <Link href="/activity">View Activities</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="space-y-24 pt-24">
        {/* Vision */}
        <section className="mx-auto max-w-6xl px-4">
          <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-fuchsia-100 via-violet-100 to-cyan-100 p-8 text-center ring-1 ring-white/50 shadow-lg sm:p-20">
            <div className="absolute -left-12 -top-12 h-64 w-64 rounded-full bg-yellow-300 blur-3xl opacity-40 mix-blend-multiply animate-pulse" />
            <div className="absolute -right-12 -bottom-12 h-64 w-64 rounded-full bg-pink-300 blur-3xl opacity-40 mix-blend-multiply animate-pulse" />

            <h2 className="relative text-3xl font-black tracking-tight text-slate-800 sm:text-5xl">
              Our Vision
            </h2>
            <p className="relative mx-auto mt-6 max-w-3xl text-xl font-medium leading-relaxed text-slate-700">
              "Learn with fun through a holistic, Montessori-inspired approach that nurtures
              language, cognitive, social, emotional, creative and physical development."
            </p>
          </div>
        </section>

        {/* Programs */}
        <section className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Our Programs</h2>
            <p className="mt-4 text-xl text-slate-600">Curated learning paths for every age group</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <ProgramCard
              title="Play Group"
              tagline="Ready to Bloom"
              description="A child-safe environment where every child is valued and cared for."
              icon={Baby}
              accentColor="bg-rose-100 text-rose-600 ring-rose-200"
              gradient="from-rose-50 to-white"
            />
            <ProgramCard
              title="Nursery"
              tagline="Exploring Wonder"
              description="Freedom to explore with guided, engaging activities led by trained staff."
              icon={Palette}
              accentColor="bg-amber-100 text-amber-600 ring-amber-200"
              gradient="from-amber-50 to-white"
            />
            <ProgramCard
              title="LKG"
              tagline="Shining Stars"
              description="Activity-based modules to build early literacy, numeracy, and confidence."
              icon={BookOpen}
              accentColor="bg-emerald-100 text-emerald-600 ring-emerald-200"
              gradient="from-emerald-50 to-white"
            />
            <ProgramCard
              title="UKG"
              tagline="Brilliant Brains"
              description="Practical learning that supports holistic growth in a joyful environment."
              icon={GraduationCap}
              accentColor="bg-cyan-100 text-cyan-600 ring-cyan-200"
              gradient="from-cyan-50 to-white"
            />
          </div>
        </section>

        {/* Contact */}
        <section className="mx-auto max-w-6xl px-4">
          <div className="overflow-hidden rounded-[3rem] bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-2xl ring-4 ring-white/20">
            <div className="grid gap-12 p-10 md:grid-cols-2 md:p-16">
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <h3 className="text-4xl font-black mb-4">Have Questions?</h3>
                  <p className="text-indigo-100 text-xl leading-relaxed">
                    We'd love to hear from you. Reach out to us for admission inquiries or to schedule a campus tour.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <a href="tel:+919752410870" className="group flex items-center gap-4 rounded-2xl bg-white/10 p-4 hover:bg-white/20 transition-all">
                    <div className="rounded-xl bg-white/20 p-2 group-hover:bg-white/30 transition-colors">
                      <Phone className="h-6 w-6" />
                    </div>
                    <span className="font-bold text-lg">+91 9752410870</span>
                  </a>
                  <a href="mailto:gspsmedia@gsce.edu.in" className="group flex items-center gap-4 rounded-2xl bg-white/10 p-4 hover:bg-white/20 transition-all">
                    <div className="rounded-xl bg-white/20 p-2 group-hover:bg-white/30 transition-colors">
                      <Mail className="h-6 w-6" />
                    </div>
                    <span className="font-bold text-lg">gspsmedia@gsce.edu.in</span>
                  </a>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center md:items-end">
                <div className="w-full max-w-md rounded-3xl bg-white p-8 text-slate-800 shadow-xl transform rotate-2 transition-transform hover:rotate-0">
                  <h4 className="font-bold text-2xl mb-2 text-violet-900">Admissions Open</h4>
                  <p className="text-slate-600 mb-6 text-lg">Join the Gyan Sagar family today!</p>
                  <Button asChild className="w-full rounded-2xl h-12 text-lg font-bold bg-violet-600 hover:bg-violet-700" size="lg">
                    <Link href="/admission-enquiry">Enquire Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function ProgramCard({
  title,
  tagline,
  description,
  icon: Icon,
  accentColor,
  gradient,
}: {
  title: string;
  tagline: string;
  description: string;
  icon: any;
  accentColor: string;
  gradient: string;
}) {
  return (
    <Card className={`group relative overflow-hidden rounded-[2rem] border-0 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl bg-gradient-to-br ${gradient}`}>
      <div className={`absolute right-4 top-4 h-14 w-14 rounded-2xl ${accentColor} flex items-center justify-center ring-2 ring-white/50 opacity-100 shadow-sm group-hover:scale-110 transition-transform`}>
        <Icon className="h-7 w-7" />
      </div>
      <CardHeader className="pt-10">
        <CardTitle className="text-2xl font-bold text-slate-900">{title}</CardTitle>
        <p className="text-sm font-bold tracking-wide uppercase text-slate-500 opacity-80">“{tagline}”</p>
      </CardHeader>
      <CardContent>
        <p className="text-slate-600 font-medium leading-relaxed">{description}</p>
      </CardContent>
      <div className={`absolute bottom-0 left-0 h-1.5 w-full ${accentColor.split(' ')[0]} transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100 origin-left`} />
    </Card>
  );
}
