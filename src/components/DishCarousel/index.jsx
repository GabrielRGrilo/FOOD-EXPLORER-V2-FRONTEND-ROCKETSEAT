import { useState, useEffect, useRef } from 'react';

import { Container } from './styles';

import { motion} from 'framer-motion';

export function DishCarousel({ title, children }) {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <Container>
      <h2>{title}</h2>

      <motion.div
        className="carousel"
        whileTap={{ cursor: 'grabbing' }}
        ref={carousel}
      >
        <motion.div
          className="slider"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {children}
        </motion.div>
      </motion.div>
    </Container>
  );
}
