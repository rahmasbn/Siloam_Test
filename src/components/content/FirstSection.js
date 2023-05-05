import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function FirstSection() {
  return (
    <section>
      <div className={`${styles.firstSection} `}>
        <div className={`${styles["bg-siloam"]} ${styles.container}`}>
          <div className={styles.rectangle} />
          <div className={styles.textWrapper}>
            <div>
              <Image
                src={require("../../../public/images/mysiloam.png")}
                alt="my siloam"
              />
            </div>
            <div className={styles.textBody} style={{ marginTop: 16 }}>
              <p
                style={{
                  color: "#848485",
                  fontSize: 16,
                }}
              >
                Dibuat oleh Siloam Hospitals, untuk
              </p>
              <div style={{ fontSize: 20, marginTop: 16 }}>
                <h2 style={{ color: "#1e266d", fontWeight: 1000 }}>
                  Mempermudah Perjalanan
                </h2>
                <h2 style={{ color: "#1e266d", fontWeight: 1000 }}>
                  Kesehatan Anda
                </h2>
              </div>
            </div>
            <div className={styles.textBody} style={{ marginTop: 30 }}>
              <p style={{ color: "#848485", fontSize: 16 }}>
                Klik link untuk mengunduh aplikasi
              </p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.siloam.android"
                  target="_blank"
                  style={{ marginTop: 10, marginRight: 12 }}
                  className={styles.linkDownload}
                >
                  <Image
                    src={require("../../../public/images/playstore.png")}
                    alt="playstore"
                    width={150}
                    height={50}
                  />
                </Link>
                <Link
                  href="https://apps.apple.com/id/app/id1456325611"
                  target="_blank"
                  style={{ marginTop: 10 }}
                  className={styles.linkDownload}
                >
                  <Image
                    src={require("../../../public/images/appstore.png")}
                    alt="playstore"
                    width={150}
                    height={50}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.appWrapper}>
            <Image
              src={require("../../../public/images/mysiloam-app.png")}
              className={styles["mysiloam-app"]}
              alt="mysiloam"
              width={400}
              height={550}
            />
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className={styles["firstSection-mobile"]}>
        <div className={styles["bg-siloam-mobile"]}>
          <div className={styles["rectangle-mobile"]} />
          <div style={{ margin: "0 auto 0 auto" }}>
            <Image
              src={require("../../../public/images/mysiloam-app.png")}
              className={`${styles["mysiloam-app"]} ${styles["mysiloam-app-mobile"]}`}
              alt="mysiloam"
              width={350}
              height={500}
            />
          </div>
        </div>
        <div
          className={`${styles["textWrapper-mobile"]} ${styles.container}`}
          style={{ width: "100%", margin: "16px 0" }}
        >
          <div className={styles["flex-center"]}>
            <Image
              src={require("../../../public/images/mysiloam.png")}
              alt="my siloam"
            />
          </div>
          <div style={{ marginTop: 16, textAlign: "center" }}>
            <p
              style={{
                color: "#848485",
                fontSize: 16,
              }}
            >
              Dibuat oleh Siloam Hospitals, untuk
            </p>
            <div
              style={{
                fontSize: 22,
                marginTop: 16,
              }}
            >
              <h2 style={{ color: "#1e266d" }}>Mempermudah Perjalanan</h2>
              <h2 style={{ color: "#1e266d" }}>Kesehatan Anda</h2>
            </div>
          </div>
          <div style={{ marginTop: 30, textAlign: "center" }}>
            <p style={{ color: "#848485", fontSize: 16 }}>
              Klik link untuk mengunduh aplikasi
            </p>
            <div className={styles["flex-center"]}>
              <Link
                href="https://play.google.com/store/apps/details?id=com.siloam.android"
                target="_blank"
                style={{ marginTop: 10, marginRight: 12 }}
                className={styles.linkDownload}
              >
                <Image
                  src={require("../../../public/images/playstore.png")}
                  alt="playstore"
                  width={150}
                  height={50}
                />
              </Link>
              <Link
                href="https://apps.apple.com/id/app/id1456325611"
                target="_blank"
                style={{ marginTop: 10 }}
                className={styles.linkDownload}
              >
                <Image
                  src={require("../../../public/images/appstore.png")}
                  alt="playstore"
                  width={150}
                  height={50}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
