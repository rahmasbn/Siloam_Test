import styles from "@/styles/Home.module.css";

export default function SecSection() {
  return (
    <>
      <section className={`${styles["bg-blue"]} ${styles.container}`}>
        <div className={styles["flex-center"]}>
          <div style={{ textAlign: "center", marginTop: 30 }}>
            <h2
              style={{
                color: "#1e266d",
                fontSize: 32,
                margin: "15px 0",
                fontWeight: 1000,
              }}
            >
              Tentang Aplikasi MySiloam
            </h2>
            <p className={styles.text}>Ketahui lebih banyak tentang MySiloam</p>
          </div>
        </div>
        <div
          className={styles["flex-center"]}
          style={{ marginTop: 30, paddingBottom: 50 }}
        >
          <iframe
            width="850"
            height="480"
            src="https://www.youtube.com/embed/Ewrb0bmI1XA"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>
    </>
  );
}
