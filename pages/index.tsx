import Link from "next/link";
import Head from "next/head";
import Modal from "../components/Modal";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Draggable from "react-draggable";
import { CTX } from "../components/util/store";

const IndexPage = () => {
  const [viewModal, updateModal] = useState<Boolean>(false);
  const [theme, selectTheme] = useState<Number>(0);
  useEffect(() => {
    console.log("mounted");
    return () => {
      console.log("unmounted");
    };
  }, []);

  return (
    <CTX.Provider value={[theme, selectTheme]}>
      <div className="w-11/12 mx-auto">
        <div className="text-center">
          <button
            onClick={() => {
              updateModal(true);
            }}
          >
            Hello
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              selectTheme(0);
            }}
          >
            0
          </button>
          <button
            onClick={() => {
              selectTheme(1);
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              selectTheme(2);
            }}
          >
            2
          </button>
        </div>
        <AnimatePresence>
          {viewModal ? (
            <Modal
              name={"Header Text"}
              display={true}
              updateDisplay={updateModal}
            />
          ) : (
            ""
          )}
        </AnimatePresence>
      </div>
    </CTX.Provider>
  );
};

export default IndexPage;
