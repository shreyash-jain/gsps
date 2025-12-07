import Image from "next/image";
import { Camera } from "lucide-react";

const images = [
  // Hero/Carousel large images
  "https://gyansagarplayschool.co.in/wp-content/uploads/2024/03/IMG-20240312-WA0008.jpg",
  "https://gyansagarplayschool.co.in/wp-content/uploads/2023/11/IMG-20231120-WA0006-1-e1710268687963-1024x957.jpg",
  "https://gyansagarplayschool.co.in/wp-content/uploads/2023/11/IMG_20231118_121211-1024x956.jpg",
  "https://gyansagarplayschool.co.in/wp-content/uploads/2023/11/IMG_20231118_121141-1024x962.jpg",
  "https://gyansagarplayschool.co.in/wp-content/uploads/2023/12/IMG-20231205-WA0010-1024x969.jpg",
  // Teaching methodology large images
  "https://gyansagarplayschool.co.in/wp-content/uploads/2023/11/IMG-20231120-WA0011.jpg",
  "https://gyansagarplayschool.co.in/wp-content/uploads/2023/11/IMG-20231120-WA0012.jpg",
  "https://gyansagarplayschool.co.in/wp-content/uploads/2023/11/IMG-20231120-WA0013.jpg",
  "https://gyansagarplayschool.co.in/wp-content/uploads/2023/11/IMG-20231120-WA0014-e1700474535279.jpg",
  "https://gyansagarplayschool.co.in/wp-content/uploads/2023/11/IMG-20231120-WA0015.jpg",
  "https://gyansagarplayschool.co.in/wp-content/uploads/2023/11/Screenshot_2023-11-20-15-22-23-397_org.mozilla.firefox-scaled-e1700474044780.jpg",
  // Program section images
  "https://gyansagarplayschool.co.in/wp-content/uploads/2023/11/download.jpeg",
  "https://gyansagarplayschool.co.in/wp-content/uploads/2023/11/IMG-20231116-WA0805.jpg",
  "https://gyansagarplayschool.co.in/wp-content/uploads/2023/11/images-3.jpeg",
  "https://gyansagarplayschool.co.in/wp-content/uploads/2023/11/images-4.jpeg",
  // Thumbnails and additional activities
  "https://gyansagarplayschool.co.in/wp-content/uploads/2024/03/1-3-150x150.jpg",
  "https://gyansagarplayschool.co.in/wp-content/uploads/2024/01/IMG202310191027511-150x150.jpg",
  "https://gyansagarplayschool.co.in/wp-content/uploads/2023/12/IMG20231103101327-150x150.jpg",
  "https://gyansagarplayschool.co.in/wp-content/uploads/2023/12/IMG_20231103_104325-150x150.jpg",
  "https://gyansagarplayschool.co.in/wp-content/uploads/2023/12/IMG_20231118_120008-150x150.jpg",
  "https://gyansagarplayschool.co.in/wp-content/uploads/2023/12/IMG20231103125257-150x150.jpg",
  "https://gyansagarplayschool.co.in/wp-content/uploads/2023/12/IMG-20230814-WA0293-1-150x150.jpg",
  "https://gyansagarplayschool.co.in/wp-content/uploads/2023/12/IMG-20230814-WA0044-1-150x150.jpg",
  "https://gyansagarplayschool.co.in/wp-content/uploads/2023/12/IMG20231019115121-1-150x150.jpg",
  "https://gyansagarplayschool.co.in/wp-content/uploads/2023/12/IMG-20230914-WA0055-150x150.jpg",
  "https://gyansagarplayschool.co.in/wp-content/uploads/2023/12/IMG-20230828-WA0217-150x150.jpg",
  "https://gyansagarplayschool.co.in/wp-content/uploads/2023/11/IMG-20231116-WA0805-150x150.jpg",
  "https://gyansagarplayschool.co.in/wp-content/uploads/2023/11/IMG-20231116-WA0808-150x150.jpg",
  "https://gyansagarplayschool.co.in/wp-content/uploads/2023/11/IMG-20231118-WA0007-150x150.jpg",
  "https://gyansagarplayschool.co.in/wp-content/uploads/2023/11/IMG-20231118-WA0018-150x150.jpg",
  "https://gyansagarplayschool.co.in/wp-content/uploads/2023/11/IMG-20231116-WA0691-150x150.jpg",
  "https://gyansagarplayschool.co.in/wp-content/uploads/2023/11/IMG-20231120-WA0015-150x150.jpg",
  "https://gyansagarplayschool.co.in/wp-content/uploads/2023/12/IMG-20230906-WA0026-150x150.jpg",
  "https://gyansagarplayschool.co.in/wp-content/uploads/2023/12/IMG_20231118_120315-150x150.jpg",
  "https://gyansagarplayschool.co.in/wp-content/uploads/2023/12/IMG20231204123924-150x150.jpg",
  "https://gyansagarplayschool.co.in/wp-content/uploads/2023/12/IMG-20230811-WA0063-150x150.jpg",
  "https://gyansagarplayschool.co.in/wp-content/uploads/2023/12/IMG_20231116_153803-150x150.jpg",
  "https://gyansagarplayschool.co.in/wp-content/uploads/2024/03/4-3-150x150.jpg",
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


