import React, { useState } from "react";

const faqList = [
  {
    q: "What is a TradeMatrix account?",
    a: (
      <p>
        A TradeMatrix account is a combined demat and trading account that
        allows investors to buy, sell, and hold securities digitally.
      </p>
    ),
  },
  {
    q: "What documents are required to open a demat account?",
    a: (
      <>
        <p>
          The following documents are required to open a TradeMatrix account
          online:
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>PAN number</li>
          <li>
            Aadhaar Card (linked with a phone number for OTP verification)
          </li>
          <li>
            Cancelled cheque or bank account statement (to link your bank
            account)
          </li>
          <li>Income proof (only if you wish to trade in Futures & Options)</li>
        </ul>
      </>
    ),
  },
  {
    q: "Is TradeMatrix account opening free?",
    a: <p>Yes, it is completely free.</p>,
  },
  {
    q: "Are there any maintenance charges for a demat account?",
    a: (
      <p>
        The account maintenance charges depend on the account type.
        <br />
        <br />
        <strong>BSDA:</strong> Zero charges if holdings &lt; ₹4,00,000.
        <br />
        <strong>Non-BSDA:</strong> ₹300/year + GST.
        <br />
        <br />
        To learn more,{" "}
        <a href="#" className="text-blue-600 underline">
          Click here
        </a>
        .
      </p>
    ),
  },
  {
    q: "Can I open a demat account without a bank account?",
    a: (
      <p>
        You must have a bank account. If UPI verification succeeds → no bank
        proof required. Otherwise → cancelled cheque or bank statement needed.
      </p>
    ),
  },
];

const SignupFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-medium mb-10 text-gray-900">
        FAQs
      </h2>

      {faqList.map((item, i) => {
        const isOpen = openIndex === i;

        return (
          <article key={i} className="pb-4 mb-3">
            {/* Blue line */}
            <div
              className={`h-[3px] bg-blue-500 transition-all duration-300 ${
                isOpen ? "w-32" : "w-0 group-hover:w-32"
              }`}
            ></div>

            {/* Question */}
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="group w-full flex justify-between items-center text-left hover:bg-gray-50 cursor-pointer px-2 py-3 transition"
            >
              <h4 className="text-[17px] font-normal text-gray-800">
                {item.q}
              </h4>

              <span
                aria-hidden="true"
                className={`text-gray-600 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </button>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-[500px] mt-3" : "max-h-0"
              }`}
            >
              <div className="text-gray-700 leading-relaxed px-2 pb-3 text-[15px]">
                {item.a}
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default SignupFAQ;
