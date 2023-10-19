import Navbar from "@/app/navbar";
import axios from "axios";

const Payment = (props: any) => {
  const { params } = props;

  return <Navbar>{params.slug}</Navbar>;
};

export default Payment;
