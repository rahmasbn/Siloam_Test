import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.wrapper}>
        <div className={`${styles.footer} ${styles.container}`}>
          <div className={styles["footer-wrapper"]}>
            <div className={styles["footer-content"]}>
              <Image
                src={require("../../public/images/images.png")}
                alt="siloam hospitals"
                width={170}
                height={35}
                style={{ marginTop: "-10px" }}
              />
              <div style={{ marginTop: 5 }}>
                <p style={{ color: "#6c6c6d", fontSize: 14 }}>
                  PT Siloam International Hospitals Tbk (Siloam) merupakan
                  penyedia layanan kesehatan terdepan di Indonesia yang memiliki
                  standar layanan kesehatan berkualitas di Indonesia.
                </p>
              </div>
            </div>
            <div className={styles["footer-content"]}>
              <p className={styles["footer-text"]}>Penghargaan</p>
              <div style={{ marginTop: 15 }}>
                <Image
                  src={require("../../public/images/gold-medal.jpg")}
                  alt="medal"
                  width={230}
                  height={80}
                />
                <Image
                  src={require("../../public/images/frost.png")}
                  alt="img"
                  width={230}
                  height={15}
                />
              </div>
            </div>
            <div className={styles["footer-content"]}>
              <p className={styles["footer-text"]}>Rekan Kerja</p>
              <div style={{ marginTop: 15 }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Image
                    src={require("../../public/images/gkci.png")}
                    alt="siloam hospitals"
                    width={110}
                    height={55}
                    style={{ marginRight: 10 }}
                  />
                  <Image
                    src={require("../../public/images/lippo.png")}
                    alt="siloam hospitals"
                    width={110}
                    height={65}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 5,
                  }}
                >
                  <Image
                    src={require("../../public/images/mrin.png")}
                    alt="siloam hospitals"
                    width={110}
                    height={50}
                    style={{ marginRight: 10 }}
                  />
                  <Image
                    src={require("../../public/images/uph.png")}
                    alt="siloam hospitals"
                    width={110}
                    height={33}
                  />
                </div>
              </div>
            </div>
            <div className={styles["footer-content"]}>
              <p className={styles["footer-text"]}>Download Aplikasi</p>
              <div
                style={{
                  marginTop: 15,
                  textAlign: "center",
                }}
              >
                <Link
                  href="https://play.google.com/store/apps/details?id=com.siloam.android"
                  target="_blank"
                >
                  <Image
                    src={require("../../public/images/playstore.png")}
                    alt="playstore"
                    width={150}
                    height={50}
                  />
                </Link>
                <Link
                  href="https://apps.apple.com/id/app/id1456325611"
                  target="_blank"
                >
                  <Image
                    src={require("../../public/images/appstore.png")}
                    alt="playstore"
                    width={150}
                    height={50}
                  />
                </Link>
              </div>
            </div>
            <div className={styles["footer-content"]}>
              <p className={styles["footer-text"]}>Ikuti Kami</p>
              <div style={{ marginTop: 15 }}>
                <Link
                  href="https://www.facebook.com/siloamhospitalsgroup"
                  className={styles["link-social"]}
                >
                  <Image
                    src={require("../../public/icons/facebook-icon.svg")}
                    alt="icon"
                    width={20}
                    height={20}
                  />
                  <p style={{ fontSize: 14 }}>Facebook</p>
                </Link>
                <Link
                  className={styles["link-social"]}
                  href="https://www.instagram.com/siloamhospitals"
                >
                  <Image
                    src={require("../../public/icons/instagram-icon.svg")}
                    alt="icon"
                    width={20}
                    height={20}
                  />
                  <p style={{ fontSize: 14 }}>Instagram</p>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/siloam-hospitals-group/"
                  className={styles["link-social"]}
                >
                  <Image
                    src={require("../../public/icons/linkedin-icon.svg")}
                    alt="icon"
                    width={20}
                    height={20}
                  />
                  <p style={{ fontSize: 14 }}>Linkedin</p>
                </Link>
                <Link
                  href="https://www.youtube.com/channel/UCgKxmZNgM7fi-E6Yidr-Q6g"
                  className={styles["link-social"]}
                >
                  <Image
                    src={require("../../public/icons/youtube-icon.svg")}
                    alt="icon"
                    width={20}
                    height={20}
                  />
                  <p style={{ fontSize: 14 }}>Youtube</p>
                </Link>
              </div>
            </div>
          </div>
          <div
            className={styles["flex-center"]}
            style={{ fontSize: 14, color: "#6c6c6d" }}
          >
            <Link href="https://www.siloamhospitals.com/tentang-kami">
              Tentang Kami &bull;&ensp;
            </Link>

            <Link href="https://www.siloamhospitals.com/karir">
              Karir &bull;&ensp;
            </Link>
            <Link href="https://www.siloamhospitals.com/tentang-kami/hubungan-investor  ">
              Hubungan Investor &bull;&ensp;
            </Link>
            <Link href="https://www.siloamhospitals.com/faqs">
              FAQs &bull;&ensp;
            </Link>
            <Link href="https://www.siloamhospitals.com/syarat-dan-ketentuan">
              Syarat dan Ketentuan &bull;&ensp;
            </Link>
            <Link href="https://www.siloamhospitals.com/kebijakan-privasi">
              Kebijakan Privasi
            </Link>
          </div>
          <hr
            style={{
              background: "#cecece",
              border: "none",
              height: 1,
              margin: "20px 0",
            }}
          />
          <p style={{ textAlign: "center", color: "#6c6c6d", fontSize: 14 }}>
            &#169; Copyright 2023, PT Siloam International Hospitals Tbk.
          </p>
        </div>
      </footer>
    </>
  );
}
