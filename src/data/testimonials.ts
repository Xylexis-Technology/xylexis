/** Testimonial data from agency clients. */

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;   // initials for CSS avatar fallback
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "tola",
    name: "Tola Adeboye",
    role: "CEO",
    company: "Nexora Real Estate",
    avatar: "TA",
    quote:
      "Xylexis delivered a sleek, modern website that perfectly fits our brand. The team was truly professional, responsive, and a joy to work with. Our lead volume tripled in two months.",
  },
  {
    id: "chinelo",
    name: "Chinelo Okafor",
    role: "Operations Manager",
    company: "BrightPath Academy",
    avatar: "CO",
    quote:
      "The automation solution they built for us has saved hours of manual work every week. Highly recommended — their attention to detail and understanding of our workflow was exceptional.",
  },
  {
    id: "funke",
    name: "Funke Adeyemi",
    role: "Founder",
    company: "The Wellness Hub",
    avatar: "FA",
    quote:
      "From the initial consultation to the final delivery, Xylexis showed a deep understanding of our needs and delivered beyond expectations. The platform is stunning and our members love it.",
  },
];
