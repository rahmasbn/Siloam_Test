import styles from "@/styles/Home.module.css";
import Image from "next/image";


export default function FourthSection() {
  return (
    <>
    <section>
          <div
            className={`${styles["wrapper-third-section"]} ${styles.container}`}
          >
            <div style={{ paddingRight: 20 }}>
              <Image
                src={require("../../../public/images/bannerLanding.png")}
                alt="banner"
                width={600}
                height={400}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles["about-mysiloam"]}>
              <Image
                src={require("../../../public/images/mysiloam.png")}
                alt="my siloam"
                style={{ marginBottom: 16 }}
              />
              <p className={styles.text}>
                Lahir melalui komitmen kami untuk terus meningkatkan layanan
                kami kepada Anda, aplikasi ini menawarkan kemudahan dalam
                menjaga kesehatan Anda saat bepergian karena Anda dapat membuat
                janji dengan dokter Anda dalam beberapa klik di mana saja, kapan
                saja.
              </p>
              <p className={styles.text}>
                Untuk lebih meningkatkan pengalaman perawatan kesehatan Anda,
                kami juga memberi Anda informasi tentang rumah sakit kami,
                membantu Anda dalam memfasilitasi pemesanan pemeriksaan
                kesehatan Anda, akses riwayat kesehatan Anda dan memberi Anda
                tips &amp; artikel kesehatan yang diperbarui secara berkala.
              </p>
            </div>
          </div>
        </section>
    </>
  )
}
