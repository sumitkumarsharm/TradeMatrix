import React from "react";
import SignupHome from "./SignupHome";
import SignupDematAccount from "./SignupDematAccount";
import SignupAccountType from "./SignupAccountType";
import SignupFAQ from "./SignupFAQ";
import OpenAccount from "../../components/OpenAccount";

const SignUppage = () => {
  return (
    <div>
      <SignupHome />
      <SignupDematAccount />
      <SignupAccountType />
      <SignupFAQ />
      <OpenAccount />
    </div>
  );
};

export default SignUppage;
