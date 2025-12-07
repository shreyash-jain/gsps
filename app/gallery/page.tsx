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
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4 space-y-6">
          {images.map((src, index) => (
            <div
              key={src}
              className={`group relative overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:rotate-1 break-inside-avoid ring-4 ${index % 3 === 0 ? "ring-rose-100" : index % 3 === 1 ? "ring-amber-100" : "ring-emerald-100"
                }`}
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={src}
                  alt={`School activity ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


