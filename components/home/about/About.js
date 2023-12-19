import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={styles.aboutText}>
              Halo! Perkenalkan, saya Muhammad Ibadil Mukhlasin. Saya adalah 
              seorang mahasiswa aktif di Politeknik Negeri Tanah Laut, tengah 
              menempuh studi di jurusan D4 Teknologi Rekayasa Komputer. 
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Saya memiliki ketertarikan yang mendalam dalam bidang perangkat 
              keras dan perangkat lunak. Sebagai mahasiswa, saya telah belajar dan 
              memperoleh pemahaman yang kuat tentang instalasi, konfigurasi, dan 
              pemeliharaan perangkat jaringan seperti router, switch, dan access point.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Saya juga telah mengembangkan keterampilan dalam menggunakan aplikasi dan 
              melakukan pemecahan masalah pada sistem operasi. Selama studi saya, saya 
              telah terlibat dalam berbagai proyek yang melibatkan implementasi jaringan 
              komputer dan instalasi sistem operasi. Hal ini telah memberi saya kesempatan 
              untuk mengembangkan pemahaman praktis tentang perangkat keras dan perangkat 
              lunak serta kemampuan dalam menghadapi tantangan yang mungkin timbul.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
            Saya adalah seorang yang tekun, antusias, dan berorientasi pada detail. 
            Saya senang mempelajari hal-hal baru dan selalu siap untuk menghadapi 
            tantangan baru dalam bidang perangkat keras dan perangkat lunak. Saya 
            percaya bahwa penggabungan pengetahuan teknis dan keterampilan interpersonal 
            dapat membantu saya dalam meraih kesuksesan di dunia profesional. Saya 
            senang berkolaborasi dengan orang-orang yang memiliki minat dan komitmen 
            yang sama dalam bidang ini.
            </p>
          </Reveal>
              <Reveal>
              <p className={styles.aboutText}>
              Jika Anda memiliki proyek menarik atau peluang kerja yang sesuai dengan 
              keahlian saya, saya sangat berharap dapat berdiskusi lebih lanjut dan 
              berkontribusi pada kemajuan perusahaan atau tim Anda. Terima kasih telah 
              meluangkan waktu untuk membaca &quot;About Me&quot; saya. Jika Anda memiliki pertanyaan 
              atau ingin berhubungan, jangan ragu untuk menghubungi saya. 
              Terima kasih atas perhatian Anda.
              </p>
              </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
