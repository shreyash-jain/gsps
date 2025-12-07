"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const slides = [
    "/home-page-slides/slide-1.jpg",
    "/home-page-slides/slide-2.jpg",
    "/home-page-slides/slide-3.jpg",
];

export function HeroCarousel() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative aspect-[4/3] w-full overflow-hidden md:h-[70vh] md:aspect-auto">
            {slides.map((slide, index) => (
                <div
                    key={slide}
                    className={cn(
                        "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                        index === current ? "opacity-100" : "opacity-0"
                    )}
                >
                    <Image
                        src={slide}
                        alt={`Slide ${index + 1}`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />
                    {/* Gradient for smoother transition to content below if needed, or just aesthetics */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/5" />
                </div>
            ))}

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={cn(
                            "h-2 w-2 rounded-full transition-all",
                            index === current ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"
                        )}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
