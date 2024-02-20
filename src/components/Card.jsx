import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ width, start, para, hover = "false" }) {
  return (
    <motion.div
      whileHover={{
        backgroundColor: hover === "true" ? "#7443ff" : "#3E3E46",
        padding: "25px",
      }}
      className={`bg-zinc-800 p-5 rounded-xl   min-h-[30rem] ${width} flex flex-col justify-between`}
    >
      <div className="w-full">
        <div className="w-full flex items-center justify-between">
          <h3>Heading one</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-5">Heading Two</h1>
      </div>
      <div className="down w-ful">
        {start === true ? (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              start a project
            </h1>
            <button className="rounded-full py-2 px-5 border-[1px] border-zinc-50 mt-5">
              Contact us
            </button>
          </>
        ) : null}

        {para === true ? (
          <p className="text-sm font-medium text-zinc-500">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        ) : null}
      </div>
    </motion.div>
  );
}

export default Card;
