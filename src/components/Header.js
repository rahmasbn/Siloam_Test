import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <nav className={styles.navbar}>
        <div
          className={styles.wrapper}
          style={{ height: "100%", position: "relative", display: "block" }}
        >
          <div
            className={`${styles.container} ${styles.topNav}`}
            style={{ display: "flex", alignItems: "center" }}
          >
            <p style={{ fontSize: 12, color: "#fff" }}>Hubungi Kami</p>
            <hr className={styles.divider} />
            <div className={styles["flex-center"]}>
              <Link
                href="https://api.whatsapp.com/send/?phone=628118951181&text&app_absent=0"
                className={styles["flex-center"]}
              >
                <Image
                  src={require("../../public/icons/whatsapp-icon.svg")}
                  alt="icon"
                  width={15}
                  height={15}
                />
                <span style={{ fontSize: 12, color: "#fff" }}>
                  &ensp;+62 811-8951-181 &ensp;
                </span>
              </Link>
              <Link
                href="https://www.siloamhospitals.com/call-center"
                className={styles["flex-center"]}
              >
                <Image
                  src={require("../../public/icons/headphone-icon.svg")}
                  alt="icon"
                  width={15}
                  height={15}
                />
                <span style={{ fontSize: 12, color: "#fff" }}>
                  &ensp;Contact Center: 1-500-181 &ensp;
                </span>
              </Link>
              <Link
                href="https://www.instagram.com/siloamhospitals/"
                className={styles["flex-center"]}
              >
                <Image
                  src={require("../../public/icons/ig-white.svg")}
                  alt="icon"
                  width={15}
                  height={15}
                />
                <span style={{ fontSize: 12, color: "#fff" }}>
                  &ensp;siloamhospitals&ensp;
                </span>
              </Link>
              <Link
                href="https://www.facebook.com/siloamhospitalsgroup"
                className={styles["flex-center"]}
              >
                <Image
                  src={require("../../public/icons/fb-white.svg")}
                  alt="icon"
                  width={15}
                  height={15}
                />
                <span style={{ fontSize: 12, color: "#fff" }}>
                  &ensp;Siloam Hospitals
                </span>
              </Link>
            </div>
            <div style={{ marginRight: "auto", marginLeft: "auto" }}>
              <button
                className={`${styles.btnEmergency} ${styles["flex-center"]}`}
              >
                <Image
                  src={require("../../public/icons/ambulance-icon.svg")}
                  alt="icon"
                  width={20}
                  height={18}
                />
                <p className={styles["text-nav"]} style={{ padding: "0 8px" }}>
                  For Emergency 1-500-911
                </p>
              </button>
            </div>
            <div className={styles["flex-center"]}>
              <Image
                src={require("../../public/icons/language-icon.svg")}
                alt="icon"
                width={20}
                height={20}
              />
              <p style={{ padding: "0 8px", color: "#fff", fontSize: 14 }}>
                ID{" "}
                <i
                  className="bi bi-chevron-down"
                  style={{ fontSize: 10, color: "#fff" }}
                />
              </p>
            </div>
          </div>

          {/* bottom nav */}
          <div
            className={`${styles.bottomNav} ${styles.container}`}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Image
              src={require("../../public/images/images.png")}
              alt="images"
              width={150}
              height={37}
            />
            <div style={{ marginLeft: 20, fontSize: 14 }}>
              <p>Buat Janji Temu</p>
            </div>
            <div style={{ marginLeft: 20, fontSize: 14 }}>
              <p>
                Medichal Check Up{" "}
                <i className="bi bi-chevron-down" style={{ fontSize: 10 }} />
              </p>
            </div>
            <div style={{ marginLeft: 20, fontSize: 14 }}>
              <p>
                Laboratorium & Radiologi{" "}
                <i className="bi bi-chevron-down" style={{ fontSize: 10 }} />
              </p>
            </div>
            <div style={{ marginLeft: 20, fontSize: 14 }}>
              <p>
                Paket Medis{" "}
                <i className="bi bi-chevron-down" style={{ fontSize: 10 }} />
              </p>
            </div>
            <div style={{ marginLeft: 20, fontSize: 14 }}>
              <p>
                Informasi Siloam{" "}
                <i className="bi bi-chevron-down" style={{ fontSize: 10 }} />
              </p>
            </div>
            <div
              className={styles["flex-center"]}
              style={{ marginLeft: "auto" }}
            >
              <Image
                src={require("../../public/icons/search-icon.svg")}
                alt="icon"
                width={25}
                height={25}
              />
              <button className={styles.btnLogin}>Login</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
