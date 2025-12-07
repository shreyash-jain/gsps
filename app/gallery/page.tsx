import Image from "next/image";
import { Camera } from "lucide-react";

const images = [
  "/gallery/IMG_7908.jpg",
  "/gallery/IMG_7909.jpg",
  "/gallery/IMG_7910.jpg",
  "/gallery/IMG_7911.jpg",
  "/gallery/IMG_7913.jpg",
  "/gallery/IMG_7917.jpg",
  "/gallery/IMG_7918.jpg",
  "/gallery/IMG_7919.jpg",
  "/gallery/IMG_7920.jpg",
  "/gallery/IMG_7921.jpg",
  "/gallery/IMG_7922.jpg",
  "/gallery/IMG_7923.jpg",
  "/gallery/IMG_7926.jpg",
  "/gallery/IMG_7927.jpg",
  "/gallery/IMG_7928.jpg",
];

export default function GalleryPage() {
  return (
    <div className="space-y-12 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-100 py-16 text-center sm:py-20 lg:py-24 shadow-inner">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-xl rotate-3 transform transition-transform hover:rotate-0 ring-4 ring-white/50">
            <Camera className="h-8 w-8 text-cyan-600" />
          </div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-6xl">
            Happy <span className="text-cyan-600">Moments</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl font-medium text-slate-700">
            A glimpse into activities, celebrations, and happy learning moments at Gyan Sagar Play School.
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-cyan-200 blur-3xl opacity-60 mix-blend-multiply animate-pulse" />
        <div className="absolute right-10 bottom-10 h-32 w-32 rounded-full bg-blue-200 blur-3xl opacity-60 mix-blend-multiply animate-pulse animation-delay-2000" />
      </section>

      {/* Gallery Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[250px] grid-flow-dense">
          {images.map((src, index) => {
            // Logic for sizing
            const isLarge = index % 5 === 0 || index === 7;
            const sizeClass = isLarge ? "sm:col-span-2 sm:row-span-2" : "col-span-1 row-span-1";

            // Logic for rotation and color (pseudo-random feel)
            const rotations = ["rotate-1", "-rotate-1", "rotate-2", "-rotate-2", "rotate-0"];
            const rotation = rotations[index % rotations.length];

            const rings = ["ring-rose-100", "ring-amber-100", "ring-emerald-100", "ring-sky-100", "ring-purple-100"];
            const ringColor = rings[index % rings.length];

            return (
              <div
                key={src}
                className={`group relative overflow-hidden rounded-[2rem] bg-white shadow-md transition-all duration-300 hover:z-10 hover:scale-105 hover:shadow-2xl hover:rotate-0 ring-4 ${sizeClass} ${rotation} ${ringColor}`}
              >
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src={src}
                    alt={`School activity ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes={isLarge ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Decorative 'tape' effect or sticker on hover could go here, for now just the nice ring */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


