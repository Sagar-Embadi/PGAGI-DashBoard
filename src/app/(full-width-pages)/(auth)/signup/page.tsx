import SignUpForm from "@/components/auth/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PG-AGI - SignUp",
  description: "This is PG-AGI Dashboard SignUp Page",
  // other metadata
};

export default function SignUp() {
  return <SignUpForm />;
}
