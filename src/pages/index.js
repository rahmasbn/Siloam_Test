import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Layout from "@/components/Layout";
import FirstSection from "@/components/content/firstSection";
import SecSection from "@/components/content/SecSection";
import ThirdSection from "@/components/content/thirdSection";
import FourthSection from "@/components/content/FourthSection";
import FifthSection from "@/components/content/FifthSection";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleTwo, setIsVisibleTwo] = useState(false);
  const [isVisibleThree, setIsVisibleThree] = useState(false);
  const [isVisibleFour, setIsVisibleFour] = useState(false);

  const ref = useRef(null);
  const refTwo = useRef(null);
  const refThree = useRef(null);
  const refFour = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const { top: topOne } = ref.current.getBoundingClientRect();
      const { top: topTwo } = refTwo.current.getBoundingClientRect();
      const { top: topThree } = refThree.current.getBoundingClientRect();
      const { top: topFour } = refFour.current.getBoundingClientRect();

      const windowHeight = window.innerHeight;
      if (topOne < windowHeight * 0.8) {
        setIsVisible(true);
      }
      if (topTwo < windowHeight * 0.8) {
        setIsVisibleTwo(true);
      }
      if (topThree < windowHeight * 0.8) {
        setIsVisibleThree(true);
      }
      if (topFour < windowHeight * 0.8) {
        setIsVisibleFour(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Layout title="Aplikasi My Siloam" />
      <main className={`${styles.main} ${styles.wrapper}`}>
        <FirstSection />
        <SecSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />

        {/* 6th section */}
        <section>
          <div
            className={styles["flex-center"]}
            style={{ padding: "60px 80px" }}
          >
            <div style={{ textAlign: "right", padding: "0 30px 0 10px" }}>
              <h2 className={styles.subTitle}>Reservasi Dokter Anda</h2>
              <p className={styles.text}>
                Nikmati kemudahan membuat janji temu dengan dokter via MySiloam.
              </p>
              <div style={{ marginTop: 30 }}>
                <h2 className={styles.subTitle}>
                  Reservasi Medical Check Up Anda
                </h2>
                <p className={styles.text}>
                  Jelajahi paket kami atau ikuti kuesioner 10 menit untuk
                  mengetahui paket Medical Check-Up mana yang paling cocok untuk
                  Anda.
                </p>
              </div>
            </div>
            <div style={{ marginLeft: "auto" }}>
              <Image
                src={require("../../public/images/phone-landing.png")}
                alt="apps"
                width={520}
                height={520}
                className={`${isVisible && styles["mysiloam-app"]}`}
                ref={ref}
              />
            </div>
          </div>
        </section>

        {/* 7th section */}
        <section>
          <div style={{ background: "#f9f9f9" }}>
            <div className={`${styles.patientPortal} ${styles.container}`}>
              <div style={{ flex: 1, textAlign: "center" }}>
                <Image
                  src={require("../../public/images/phone-landing-2.png")}
                  // className={styles["mysiloam-app"]}
                  className={`${isVisibleTwo && styles["mysiloam-app"]}`}
                  alt="apps"
                  height={500}
                  width={350}
                  ref={refTwo}
                />
              </div>
              <div style={{ flex: 1, margin: "0 7px" }}>
                <h2 className={styles.subTitle}>
                  Akses data kesehatan Anda dimana saja, kapan saja
                </h2>
                <div style={{ marginTop: 30 }}>
                  <div className={styles.card}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Image
                        src={require("../../public/icons/healthTracker-icon.svg")}
                        alt="icon"
                        height={40}
                        width={40}
                      />
                      <p className={styles.text} style={{ paddingLeft: 20 }}>
                        Cek hasil laboratorium dan radiologi Anda
                      </p>
                    </div>
                  </div>
                  <div className={styles.card}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Image
                        src={require("../../public/icons/drugs-icon.svg")}
                        alt="icon"
                        height={40}
                        width={40}
                      />
                      <p className={styles.text} style={{ paddingLeft: 20 }}>
                        Akses riwayat pembelian obat
                      </p>
                    </div>
                  </div>
                  <div className={styles.card}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Image
                        src={require("../../public/icons/invoice-icon.svg")}
                        alt="icon"
                        height={40}
                        width={40}
                      />
                      <p className={styles.text} style={{ paddingLeft: 20 }}>
                        Monitor proses pemulangan dan jumlah tagihan berjalan
                        selama dirawat inap
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8th section */}
        <section>
          <div className={styles["bg-mysiloam"]}>
            <div className={styles.patientPortal}>
              <div style={{ flex: 1, textAlign: "right", paddingLeft: 50 }}>
                <h2 className={styles.subTitle}>
                  Pesan Test COVID-19 hanya dengan beberapa klik
                </h2>
                <div style={{ marginTop: 30 }}>
                  <div className={styles.card}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                      }}
                    >
                      <p className={styles.text} style={{ paddingRight: 20 }}>
                        Pilih tes yang Anda perlukan
                      </p>
                      <Image
                        src={require("../../public/icons/tap-icon.svg")}
                        alt="icon"
                        height={45}
                        width={45}
                      />
                    </div>
                  </div>
                  <div className={styles.card}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                      }}
                    >
                      <p className={styles.text} style={{ paddingRight: 20 }}>
                        Isi detail dan lengkapi proses
                      </p>
                      <Image
                        src={require("../../public/icons/clipboard-icon.svg")}
                        alt="icon"
                        height={45}
                        width={45}
                      />
                    </div>
                  </div>
                  <div className={styles.card}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                      }}
                    >
                      <p className={styles.text} style={{ paddingRight: 20 }}>
                        Anda siap untuk melakukan tes
                      </p>
                      <Image
                        src={require("../../public/icons/check-icon.svg")}
                        alt="icon"
                        height={45}
                        width={45}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ flex: 1, textAlign: "center" }}>
                <Image
                  src={require("../../public/images/phone-landing-3.png")}
                  alt="apps"
                  width={370}
                  height={500}
                  className={`${isVisibleThree && styles["mysiloam-app"]}`}
                  ref={refThree}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 9th section */}
        <section>
          <div
            className={styles["flex-center"]}
            style={{ padding: "40px 60px" }}
          >
            <div style={{ flex: 1, textAlign: "center" }}>
              <Image
                src={require("../../public/images/map.png")}
                alt="maps"
                width={510}
                height={350}
                className={`${isVisibleFour && styles["mysiloam-app"]}`}
                ref={refFour}
              />
            </div>
            <div style={{ flex: 1 }}>
              <h2 className={styles.subTitle}>Rumah Sakit Siloam</h2>
              <p className={styles.text} style={{ marginTop: 20 }}>
                Siloam Hospitals tersebar di lebih dari 20 kota di Indonesia
                untuk mendukung pemeliharaan kesehatan Anda. Pesan janji temu
                Anda dengan kami.
              </p>
            </div>
          </div>
        </section>

        {/* 10th section */}
        <section>
          <div className={styles["bg-mysiloam-bottom"]}>
            <div style={{ padding: "80px 0" }}>
              <div className={styles["flex-center"]}>
                <Image
                  src={require("../../public/images/logo.png")}
                  alt="logo"
                  width={150}
                  height={150}
                />
              </div>
              <div style={{ marginTop: 30, textAlign: "center" }}>
                <h2 style={{ color: "#fff", fontSize: 32 }}>
                  &quot;Save Your Time, Improve Your Life&quot;
                </h2>
                <p style={{ color: "#fff", fontSize: 16, margin: "16px 0" }}>
                  Klik link untuk mengunduh aplikasi
                </p>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.siloam.android"
                  target="_blank"
                  style={{ marginTop: 10, marginRight: 12 }}
                  className={styles.linkDownload}
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
                  style={{ marginTop: 10 }}
                  className={styles.linkDownload}
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
          </div>
        </section>

        {/* 11th section */}
        <section>
          <div
            style={{ paddingTop: 20, paddingBottom: 20 }}
            className={styles.container}
          >
            <Link href={"https://www.siloamhospitals.com/privacy-policy"}>
              <p className={styles.textPolicy}>Privacy & Policy</p>
            </Link>
            <hr style={{ background: "#cecece", border: "none", height: 1 }} />
          </div>
        </section>
      </main>
    </>
  );
}
