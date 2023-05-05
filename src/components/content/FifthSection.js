import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function FifthSection() {
  return (
    <>
      <section>
        <div className={`${styles["bg-blue"]} ${styles.container}`}>
          <div style={{ padding: "60px 0" }}>
            <h2 className={styles.subTitle} style={{ textAlign: "center" }}>
              Informasi Rumah Sakit
            </h2>
          </div>
          <div className={styles["flex-center"]}>
            <div className={styles.boxCard}>
              <div style={{ textAlign: "center" }}>
                <Image
                  src={require("../../../public/icons/hospital-icon.svg")}
                  alt="icon"
                  width={150}
                  height={150}
                />
                <p className={styles.text}>
                  Temukan rumah sakit Siloam terdekat dari tempat Anda.
                </p>
              </div>
            </div>
            <div className={styles.boxCard}>
              <div style={{ textAlign: "center" }}>
                <Image
                  src={require("../../../public/icons/stethoscope-icon.svg")}
                  alt="icon"
                  width={150}
                  height={150}
                />
                <p className={styles.text}>Cari & temukan Spesialis kami.</p>
              </div>
            </div>
            <div className={styles.boxCard}>
              <div style={{ textAlign: "center" }}>
                <Image
                  src={require("../../../public/icons/lung-icon.svg")}
                  alt="icon"
                  width={150}
                  height={150}
                />
                <p className={styles.text}>
                  Temukan informasi tentang rumah sakit kami meliputi alamat,
                  nomor kontak, dan lain-lainnya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
