import SignInForm from "@/components/auth/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PG-AGI - SignIn",
  description: "This is PG-AGI Dashboard SignIn Page",
};

export default function SignIn() {
  return <SignInForm />;
}
