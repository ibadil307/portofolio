import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            Hey, I&apos;m Ibadil<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            Saya adalah <span>mahasiswa di Politeknik Negeri Tanah Laut</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
            Saya adalah seorang mahasiswa aktif di Politeknik Negeri Tanah Laut, 
            tengah menempuh studi di jurusan D4 Teknologi Rekayasa Komputer
          </p>
        </Reveal>
        <Reveal>
          <StandardButton
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            Contact me
          </StandardButton>
        </Reveal>
      </div>
      <DotGrid />
    </section>
  );
};
