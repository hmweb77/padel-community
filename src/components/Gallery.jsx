import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1632831753809-4db4fb0d7efc?auto=format&fit=crop&q=80",
    alt: "Padel match in action",
  },
  {
    src: "https://images.unsplash.com/photo-1632831753810-4db4fb0d7efd?auto=format&fit=crop&q=80",
    alt: "Tournament winners",
  },
  {
    src: "https://images.unsplash.com/photo-1632831753811-4db4fb0d7efe?auto=format&fit=crop&q=80",
    alt: "Community event",
  },
  {
    src: "https://images.unsplash.com/photo-1632831753812-4db4fb0d7eff?auto=format&fit=crop&q=80",
    alt: "Training session",
  },
];

export default function Gallery() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Capturing the excitement and community spirit of our padel events
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-lg overflow-hidden group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-sm font-medium px-4 text-center">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}