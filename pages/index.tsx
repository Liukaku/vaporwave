import Link from "next/link";
import Head from "next/head";
import Modal from "../components/Modal";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Draggable from "react-draggable";

const IndexPage = () => {
  const [viewModal, updateModal] = useState<Boolean>(false);
  useEffect(() => {
    console.log("mounted");
    return () => {
      console.log("unmounted");
    };
  }, []);

  return (
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
  );
};

export default IndexPage;
