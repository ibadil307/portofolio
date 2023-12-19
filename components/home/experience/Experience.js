import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "TALENT SCOUTING ACADEMY",
    position: "Network Engineer",
    time: "2022",
    location: "Desa Kayu Abang - Tanah Laut",
    description:
      "Di projek ini saya membantu desa yang awalnya susah mendapatkan jaringan yang stabil agar mendapatkan koneksi internet menjadi lebih lancar.",
    tech: [
      "Angular",
      "Python",
      "GCP",
      "Git",
      "GitHub",
      "Java",
      "Golang",
      "K8s",
    ],
  },
];
