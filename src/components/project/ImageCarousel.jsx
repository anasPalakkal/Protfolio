import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function ImageCarousel({ images }) {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) return null;
  const hasMultiple = images.length > 1;

  function step(direction) {
    setIndex((current) => (current + direction + images.length) % images.length);
  }

  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-surface-alt">
      <div className="h-56 w-full sm:h-72 md:h-80 lg:h-[22rem]">
        <img
          src={images[index].src}
          alt={images[index].alt}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface text-text-primary shadow-md transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next image"
            className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface text-text-primary shadow-md transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
          >
            <ChevronRight size={20} aria-hidden="true" />
          </button>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5" role="tablist" aria-label="Project images">
            {images.map((image, i) => (
              <button
                key={image.src}
                type="button"
                role="tab"
                onClick={() => setIndex(i)}
                aria-label={`Go to image ${i + 1}`}
                aria-selected={i === index}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  i === index ? 'bg-accent' : 'bg-surface/80'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}