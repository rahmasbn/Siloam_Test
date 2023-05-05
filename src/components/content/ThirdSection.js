import { useEffect, useRef } from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { dataImg } from "../../../images";

export default function ThirdSection() {
  const carouselRef = useRef(null);
  const timeoutIdRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let isDragging = false,
      startX,
      startScrollLeft,
      timeoutId;
    const itemWidth = carousel.querySelector("div").clientWidth;

    const dragStart = (e) => {
      isDragging = true;
      carousel.classList.add("dragging");
      // Records the initial cursor and scroll position of the carousel
      startX = e.pageX;
      startScrollLeft = carousel.scrollLeft;
      clearTimeout(timeoutIdRef.current);
    };
    const dragging = (e) => {
      if (!isDragging) return; // if isDragging is false return from here
      // Updates the scroll position of the carousel based on the cursor movement
      carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    };
    const dragStop = () => {
      isDragging = false;
      carousel.classList.remove("dragging");
      autoPlay();
    };
    const autoPlay = () => {
      clearTimeout(timeoutIdRef.current);
      if (window.innerWidth < 800) return;
      timeoutIdRef.current = setTimeout(() => {
        carousel.scrollLeft += carousel.firstElementChild.clientWidth;
        if (
          carousel.scrollLeft + carousel.clientWidth >=
          carousel.scrollWidth
        ) {
          carousel.scrollLeft = 0;
        }
        autoPlay();
      }, 2000);
    };
    autoPlay();

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    carousel.addEventListener("mouseup", dragStop);

    return () => {
      carousel.removeEventListener("mousedown", dragStart);
      carousel.removeEventListener("mousemove", dragging);
      carousel.removeEventListener("mouseup", dragStop);
      clearTimeout(timeoutIdRef.current);
    };
  }, [carouselRef]);

  return (
    <>
      <section className={`${styles.container} ${styles.thirdSection}`}>
        <h2
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: 32,
            marginBottom: 40,
            fontWeight: 1000,
          }}
        >
          Fitur Aplikasi
        </h2>
        <div className={styles.carousel} ref={carouselRef}>
          {dataImg.map((item, idx) => (
            <>
              <div key={idx} style={{ width: "100%" }}>
                <Image
                  src={item.src}
                  alt="app feature"
                  width={292}
                  height={549}
                  draggable={false}
                />
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
}
