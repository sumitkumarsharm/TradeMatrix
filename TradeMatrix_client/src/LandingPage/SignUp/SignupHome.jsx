import React from "react";
import { IndianRupee, ChevronDown } from "lucide-react";
import AccountOpen from "../../assets/account_open.svg";

const SignupHome = () => {
  return (
    <section className="w-full py-20 bg-white pt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h1 className="text-2xl md:text-4xl font-semibold text-center text-gray-800">
          Open a free demat and trading account online
        </h1>

        <p className="text-gray-500 text-center mt-4 text-lg">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 items-center">
          <div className="flex justify-center">
            <img
              src={AccountOpen}
              alt="Open account illustration"
              loading="lazy"
              className="w-full max-w-lg"
            />
          </div>

          <div className="w-full flex flex-col items-start">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Signup now
            </h2>

            <p className="text-gray-500 mb-6">
              Or track your existing application
            </p>

            {/* Signup Form */}
            <form className="w-full">
              <div className="w-full flex items-center border rounded-lg overflow-hidden shadow-sm bg-white">
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-r">
                  <img
                    src="https://flagcdn.com/w20/in.png"
                    alt="India Flag"
                    loading="lazy"
                    className="w-5 h-5 rounded-sm"
                  />
                  <span className="text-gray-700 font-medium">+91</span>
                  <ChevronDown size={16} className="text-gray-500" />
                </div>

                <input
                  type="tel"
                  aria-label="Mobile number"
                  placeholder="Enter your mobile number"
                  className="w-full px-4 py-3 text-gray-700 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md mt-6 text-lg font-medium hover:bg-blue-700 transition-all shadow"
              >
                Get OTP
              </button>
            </form>

            <p className="text-gray-500 text-sm mt-4">
              By proceeding, you agree to the TradeMatrix{" "}
              <span className="text-blue-600 cursor-pointer hover:underline">
                terms & privacy policy
              </span>
            </p>

            <p className="text-gray-700 text-sm mt-4">
              Looking to open NRI account?{" "}
              <span className="text-blue-600 cursor-pointer hover:underline">
                Click here
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupHome;
