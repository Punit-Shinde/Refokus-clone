import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

// Import your videos from the assets folder
import video1 from "../assets/arqitel.webm";
import video2 from "../assets/TTR.webm";
import video3 from "../assets/yahoo.webm";
import video4 from "../assets/YIR.webm";

function Products() {
  var products = [
    {
      title: "Arqitel",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores nesciunt esse dolore! Beatae quod natus tenetur veniam.",
      live: true,
      case: false,
      videoSrc: video1, // Use imported video for each product
    },
    {
      title: "TTR",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores nesciunt esse dolore! Beatae quod natus tenetur veniam.",
      live: true,
      case: false,
      videoSrc: video2,
    },
    {
      title: "YIR 2022",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores nesciunt esse dolore! Beatae quod natus tenetur veniam.",
      live: true,
      case: true,
      videoSrc: video3,
    },
    {
      title: "Yahoo!",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores nesciunt esse dolore! Beatae quod natus tenetur veniam.",
      live: true,
      case: true,
      videoSrc: video4,
    },
  ];

  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="mt-32 relative">
      {products.map((val, index) => (
        <Product key={index} val={val} mover={mover} count={index} />
      ))}
      <div className="absolute w-full h-full top-0 pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + "rem" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute w-[32rem] h-[23rem]  left-[45%] -translate-x-[50%] overflow-hidden"
        >
          <div className=" w-full h-full top-0 pointer-events-none">
            <motion.div
              animate={{ y: -pos + "rem" }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className="w-full h-full "
            >
              <video
                src={products[pos / 23].videoSrc} // Set the source of the video dynamically based on the current position
                muted
                autoPlay
                loop
              />
            </motion.div>
            <motion.div
              animate={{ y: -pos + "rem" }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className="w-full h-full"
            >
              <video
                src={products[pos / 23].videoSrc} // Set the source of the video dynamically based on the current position
                muted
                autoPlay
                loop
              />
            </motion.div>
            <motion.div
              animate={{ y: -pos + "rem" }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className="w-full h-full"
            >
              <video
                src={products[pos / 23].videoSrc} // Set the source of the video dynamically based on the current position
                muted
                autoPlay
                loop
              />
            </motion.div>
            <motion.div
              animate={{ y: -pos + "rem" }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className="w-full h-full"
            >
              <video
                src={products[pos / 23].videoSrc} // Set the source of the video dynamically based on the current position
                muted
                autoPlay
                loop
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
