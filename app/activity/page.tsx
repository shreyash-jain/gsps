import {
  Rocket,
  BookOpen,
  Leaf,
  Music,
  Palette,
  Users
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ActivityPage() {
  return (
    <div className="space-y-12 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-100 via-purple-100 to-fuchsia-100 py-16 text-center sm:py-20 lg:py-24 shadow-inner">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-xl -rotate-6 transform transition-transform hover:rotate-0 ring-4 ring-white/50">
            <Rocket className="h-8 w-8 text-violet-600" />
          </div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-6xl">
            Activities & <span className="text-violet-600">Learning</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl font-medium text-slate-700">
            From phonetics and storytelling to experiential learning, our activities are
            designed to foster curiosity, confidence, and core skills in a playful way.
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-yellow-300 blur-3xl opacity-60 mix-blend-multiply animate-pulse" />
        <div className="absolute right-10 bottom-10 h-32 w-32 rounded-full bg-pink-300 blur-3xl opacity-60 mix-blend-multiply animate-pulse animation-delay-2000" />
      </section>

      {/* Activities Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <ActivityCard
            icon={BookOpen}
            title="Thematic Learning"
            description="Engaging themes aimed at value inculcation and holistic understanding of the world around us."
            color="bg-sky-50 text-sky-700 ring-sky-200"
            iconColor="bg-sky-100 text-sky-600"
          />
          <ActivityCard
            icon={Music}
            title="Phonetics & Storytelling"
            description="Interactive sessions that build language skills through rhythm, rhyme, and captivating stories."
            color="bg-fuchsia-50 text-fuchsia-700 ring-fuchsia-200"
            iconColor="bg-fuchsia-100 text-fuchsia-600"
          />
          <ActivityCard
            icon={Users}
            title="Indoor & Outdoor Games"
            description="Structured play to develop fine and gross motor skills, teamwork, and physical fitness."
            color="bg-emerald-50 text-emerald-700 ring-emerald-200"
            iconColor="bg-emerald-100 text-emerald-600"
          />
          <ActivityCard
            icon={Leaf}
            title="Nature & Experiential"
            description="Plantation drives, picnics, and outings that connect children with nature and real-world experiences."
            color="bg-amber-50 text-amber-700 ring-amber-200"
            iconColor="bg-amber-100 text-amber-600"
          />
          <ActivityCard
            icon={Palette}
            title="Arts & Creativity"
            description="Expression through drawing, painting, and craft work to unleash the inner artist in every child."
            color="bg-rose-50 text-rose-700 ring-rose-200"
            iconColor="bg-rose-100 text-rose-600"
          />
          <ActivityCard
            icon={Rocket}
            title="Skill Development"
            description="Focus on cognitive skills, logical thinking, and problem-solving through age-appropriate puzzles and games."
            color="bg-indigo-50 text-indigo-700 ring-indigo-200"
            iconColor="bg-indigo-100 text-indigo-600"
          />
        </div>
      </div>
    </div>
  );
}

function ActivityCard({
  icon: Icon,
  title,
  description,
  color,
  iconColor,
}: {
  icon: any;
  title: string;
  description: string;
  color: string;
  iconColor: string;
}) {
  return (
    <Card className={`group relative overflow-hidden rounded-3xl border-0 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ring-1 ring-slate-200 hover:ring-2 hover:ring-offset-2 ${color.split(" ").pop()?.replace("text", "ring")}`}>
      <div className="absolute top-0 right-0 p-4 opacity-100 transition-opacity">
        <div className={`rounded-2xl p-3 ${iconColor} shadow-sm group-hover:scale-110 transition-transform`}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <CardHeader className="pt-10">
        <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className={`text-sm font-medium leading-relaxed ${color}`}>
          {description}
        </p>
      </CardContent>
    </Card>
  );
}




