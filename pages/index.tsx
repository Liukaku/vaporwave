import Link from "next/link";
import Head from "next/head";
import Modal from "../components/Modal";
import { useState } from "react";

const IndexPage = () => {
  const [viewModal, updateModal] = useState<Boolean>(false);

  return (
    <div className="w-11/12 mx-auto">
      <Modal
        name={"Header Text"}
        display={viewModal}
        updateDisplay={updateModal}
      />
      <div className="text-center">
        <button
          onClick={() => {
            updateModal(true);
          }}
        >
          Hello
        </button>
      </div>
    </div>
  );
};

export default IndexPage;
