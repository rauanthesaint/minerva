import { useSnapCarousel } from "react-snap-carousel";
import { Children } from "react";
import styles from "./Carousel.module.scss";

export const Carousel = ({ children }: { children: React.ReactNode }) => {
  const { scrollRef, activePageIndex, goTo, snapPointIndexes } = useSnapCarousel();
  const items = Children.toArray(children);

  return (
    <div className={styles.Carousel}>
      <div ref={scrollRef} className={styles.CarouselContainer}>
        {items.map((item, index) => (
          <div
            className={styles.CarouselItem}
            key={index}
            onClick={() => index !== activePageIndex && goTo(index)}
            style={{
              scrollSnapAlign: snapPointIndexes.has(index) ? "center" : undefined,
              // cursor: i !== activePageIndex ? "pointer" : "default",
            }}
          >
            {item}
          </div>
        ))}
      </div>
      <div className={styles.CarouselIndicator}>
        {new Array(items.length).fill(null).map((_item, index) => {
          return <div key={index} data-active={activePageIndex === index} />;
        })}
      </div>
    </div>
  );
};
