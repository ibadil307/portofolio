import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            Contact<span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            Kirimi saya email jika Anda ingin terhubung! Anda juga dapat menemukan saya di{" "}
            <Link
              href="https://wa.me/6289603418082"
              target="_blank"
              rel="nofollow"
            >
              Whatsapp
            </Link>{" "}
            atau{" "}
            <Link href="https://linktree.ibadil.com" target="_blank" rel="nofollow">
              Linktree
            </Link>{" "}
          </p>
        </Reveal>
        <Reveal width="100%">
          <Link href="mailto:ibadil307@gmail.com">
            <div className={styles.contactEmail}>
              <AiFillMail size="2.4rem" />
              <span>ibadil307@gmail.com</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
