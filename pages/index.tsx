import Link from "next/link";
import Head from "next/head";
import Modal from "../components/Modal";

const IndexPage = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Modal name={"Header Text"} />
      <p className="text-center">Hello</p>
    </div>
  );
};

export default IndexPage;
