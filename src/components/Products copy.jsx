import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  var products = [
    {
      title: "Arqitel",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores nesciunt esse dolore! Beatae quod natus tenetur veniam.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores nesciunt esse dolore! Beatae quod natus tenetur veniam.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores nesciunt esse dolore! Beatae quod natus tenetur veniam.",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores nesciunt esse dolore! Beatae quod natus tenetur veniam.",
      live: true,
      case: true,
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
          className="window absolute w-[32rem] h-[23rem] bg-white left-[45%] -translate-x-[50%] overflow-hidden"
        >
          <div className=" w-full h-full top-0 pointer-events-none">
            <motion.div
              animate={{ y: -pos + "rem" }}
              transition={{ease:[0.76, 0, 0.24, 1], duration:0.5}}
              className="w-full h-full bg-sky-100"
            ></motion.div>
            <motion.div
              animate={{ y: -pos + "rem" }}
              transition={{ease:[0.76, 0, 0.24, 1], duration:0.5}}
              className="w-full h-full bg-sky-300"
            ></motion.div>
            <motion.div
              animate={{ y: -pos + "rem" }}
              transition={{ease:[0.76, 0, 0.24, 1], duration:0.5}}
              className="w-full h-full bg-sky-500"
            ></motion.div>
            <motion.div
              animate={{ y: -pos + "rem" }}
              transition={{ease:[0.76, 0, 0.24, 1], duration:0.5}}
              className="w-full h-full bg-sky-700"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
