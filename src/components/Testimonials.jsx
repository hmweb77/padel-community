import { Quote } from "lucide-react";

const testimonials = [
  {
    content:
      "Joining World Padel Trips was the best decision I made. The community is amazing, and the tournaments are professionally organized.",
    author: "Sarah Johnson",
    role: "Amateur Player",
    avatar: "SJ",
  },
  {
    content:
      "The workshops helped me improve my game significantly. The coaches are experienced and very supportive.",
    author: "Michael Chen",
    role: "Intermediate Player",
    avatar: "MC",
  },
  {
    content:
      "Great community, amazing facilities, and professional organization. Couldn't ask for more!",
    author: "Emma Rodriguez",
    role: "Advanced Player",
    avatar: "ER",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What Our Members Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Hear from our community members about their experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg border border-gray-200 p-6"
            >
              <div className="pt-6">
                <Quote className="h-8 w-8 text-blue-600 mb-4" />
                <p className="text-gray-600 mb-6">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="ml-4">
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
