import React from "react";
import { useState } from "react";
import { Nav } from "../components/Navbar";

const News = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isWeight, setWeight] = useState("");

  const setClik = () => {
    setIsOpen(!isOpen);
    !isOpen ? setWeight("w-4/12") : setWeight("w-8/12");
  };

  return (
    <section>
      <Nav />
      {isOpen && (
        <div className="border border-blue-700 absolute p-7 pt-16 mt-10 flex justify-center">
          <div>
            <p>Lorem ipsum, dolor sit amet consectetur</p>
            <p>Lorem ipsum, dolor sit amet consectetur</p>
            <p>Lorem ipsum, dolor sit amet consectetur</p>
            <p>Lorem ipsum, dolor sit amet consectetur</p>
          </div>
        </div>
      )}
      <div className="border border-blue-500 container mx-auto pt-16 pb-3 flex flex-row">
        <div className="border border-red-600 m-auto p-5 mt-10 flex flex-row gap-8 justify-start w-9/12">
          <div className={`border border-emerald-500 mx-auto p-3 ${isWeight}`}>
            <button onClick={() => setClik()}>
              <p>Lorem ipsum dolor sit amet</p>
            </button>
          </div>
          {isOpen && (
            <div className="border border-yellow-500 mx-auto p-3 w-8/12 ">
              <p>
                Lorem dolor, sit amet consectetur adipisicing elit. Sed, ut. Ab debitis incidunt atque quia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fugit debitis, asperiores ipsa culpa amet itaque vitae, illum
                officia veritatis minus nihil eos eveniet accusamus tempora! Alias eum quis fugit.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default News;
