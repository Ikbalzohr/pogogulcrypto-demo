import React from "react";
import { useState } from "react";
import { Nav } from "../components/Navbar";
import { Footer } from "../components/Footer";
import NewsTitle from "../components/NewsTitle";
import { NewsDetils } from "../components/NewsDetils";

const News = () => {
  const wDF = "w-7/12";
  const [id, setid] = useState("");
  const [isWeight, setWeight] = useState(wDF);
  const [hide, setHiddeCls] = useState("");

  const setClik = (id) => {
    setid(id);
    if (id == id) {
      setWeight("w-3/12");
    } else if (id == "") {
      setWeight(wDF);
    }
  };

  const setClose = () => {
    id !== id ? setHiddeCls("hidden") : setHiddeCls("");
    setid("");
    setWeight(wDF);
  };

  return (
    <section>
      <Nav />
      <div className="mx-auto pt-16 pb-3 flex flex-row h-screen">
        <div className="relative m-auto p-5 mt-10 flex flex-row gap justify-center w-9/12">
          {id !== "" ? (
            <button onClick={() => setClose()} className={`h-5 w-5 absolute grid place-content-center right-32 top-10 ml-5 ${hide}`}>
              <div>
                <svg
                  height="30px"
                  id="Layer_1"
                  style={{ enableBackground: "new 0 0 512 512" }}
                  version="1.1"
                  viewBox="0 0 512 512"
                  width="512px"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
                </svg>
              </div>
            </button>
          ) : (
            ""
          )}
          <div className={`mx-10 p-3 flex justify-center ${isWeight}`}>
            <button onClick={() => setClik(1)}>
              <NewsTitle />
            </button>
          </div>
          {id == 1 ? (
            <div className="mx-auto p-3 w-9/12 ">
              <NewsDetils />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default News;
