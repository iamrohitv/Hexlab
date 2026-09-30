import Image from "next/image";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};
export const AnimatedTestimonials = ({
  testimonials,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const testimonial = testimonials[0];

  return (
    <div className="mx-auto max-w-sm px-4 py-10 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        <div>
          <div className="relative h-60 md:h-80 w-full">
            <Image
              src={testimonial.src}
              alt={testimonial.name}
              width={500}
              height={500}
              draggable={false}
              className="h-full w-full rounded-3xl object-cover object-center"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-10">
          <div>
            <h3 className="text-2xl font-bold text-black">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-500">
              {testimonial.designation}
            </p>
            <p className="mt-8 text-base text-gray-500">
              {testimonial.quote}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
