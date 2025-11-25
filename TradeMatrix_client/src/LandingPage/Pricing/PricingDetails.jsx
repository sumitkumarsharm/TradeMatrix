import React from "react";

const PricingDetails = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-10">
          Charges explained
        </h2>

        {/* TWO COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-700 leading-relaxed text-sm">
          {/* LEFT COLUMN */}
          <div className="space-y-4">
            {/* Securities/Commodities tax */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Securities/Commodities transaction tax
              </h3>
              <p className="text-xs">
                Tax by the government when transacting on the exchanges. Charged
                as above on both buy and sell sides when trading equity
                delivery. Charged only on selling side when trading intraday or
                on F&O.
              </p>
              <p className="mt-3 text-xs">
                When trading at Zerodha, STT/CTT can be a lot more than the
                brokerage we charge. Important to keep a tab.
              </p>
            </div>

            {/* Transaction charges */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Transaction/Turnover Charges
              </h3>
              <p className="text-xs">
                Charged by exchanges (NSE, BSE, MCX) on the value of your
                transactions.
              </p>

              <p className="mt-3 text-xs">
                BSE has revised transaction charges in XC, XD, XT, Z and ZP
                groups to ₹10,000 per crore w.e.f. 01.01.2016. XC and XD groups
                have been merged into a new group X w.e.f. 03.12.2018.
              </p>

              <p className="mt-2 text-xs">
                BSE has revised transaction charges in SS and ST groups to
                ₹10,000 per crore of gross turnover.
              </p>

              <p className="mt-2 text-xs">
                BSE has revised transaction charges for group A, B and other
                non-exclusive scripts (non-exclusive scripts from group E, F,
                FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate
                basis w.e.f. December 1, 2022.
              </p>

              <p className="mt-2 text-xs">
                BSE has revised transaction charges in M, MT, TS and MS groups
                to ₹275 per crore of gross turnover.
              </p>
            </div>

            {/* Call & trade */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Call & trade</h3>
              <p className="text-xs">
                Additional charges of ₹50 per order for orders placed through a
                dealer at Zerodha including auto square off orders.
              </p>
            </div>

            {/* Stamp charges */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Stamp charges
              </h3>
              <p className="text-xs">
                Stamp charges by the Government of India as per the Indian Stamp
                Act of 1899 for transacting in instruments on the stock
                exchanges and depositories.
              </p>
            </div>

            {/* NRI charges */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-2 text-xs">
                NRI brokerage charges
              </h3>
              <ul className="list-disc ml-5 space-y-1">
                <li className="text-xs">
                  For a non-PIS account, 0.5% or ₹100 per executed order for
                  equity and F&O (whichever is lower).
                </li>
                <li className="text-xs">
                  For a PIS account, 0.5% or ₹200 per executed order for equity
                  (whichever is lower).
                </li>
                <li className="text-xs">
                  ₹500 + GST as yearly account maintenance charges (AMC)
                  charges.
                </li>
              </ul>
            </div>

            {/* Account with debit balance */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Account with debit balance
              </h3>
              <p className="text-xs">
                If the account is in debit balance, any order placed will be
                charged ₹40 per executed order instead of ₹20 per executed
                order.
              </p>
            </div>

            {/* IPFT charges */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Charges for Investor’s Protection Fund Trust (IPFT) by NSE
              </h3>
              <ul className="list-disc ml-5 space-y-1">
                <li className="text-xs">
                  Equity and Futures - ₹10 per crore + GST of the traded value.
                </li>
                <li className="text-xs">
                  Options - ₹50 per crore + GST traded value (premium value).
                </li>
                <li className="text-xs">
                  Currency - ₹0.05 per lakh + GST turnover for Futures and ₹2
                  per lakh + GST of premium for Options.
                </li>
              </ul>
            </div>

            {/* MTF charges */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Margin Trading Facility (MTF)
              </h3>
              <ul className="list-disc ml-5 space-y-1">
                <li className="text-xs">
                  MTF Interest: 0.04% per day (₹40 per lakh) on the funded
                  amount. The interest is applied from T+1 day until the day MTF
                  stocks are sold.
                </li>
                <li className="text-xs">
                  MTF Brokerage: 0.3% or ₹30, whichever is lower.
                </li>
                <li className="text-xs">
                  MTF pledge charges: 18% + GST per pledge and unpledge request
                  per ISIN.
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-4">
            {/* GST */}
            <div>
              <strong className=" text-gray-900 ">GST</strong>
              <p className="text-xs">
                Tax levied by the government on the services rendered. 18% of
                (brokerage + SEBI charges + transaction charges)
              </p>
            </div>

            {/* SEBI charges */}
            <div>
              <strong className="font-semibold text-gray-900 ">
                SEBI Charges
              </strong>
              <p className="text-xs">
                Charged at ₹10 per crore + GST by Securities and Exchange Board
                of India for regulating the markets.
              </p>
            </div>

            {/* DP charges */}
            <div>
              <strong className="font-semibold text-gray-900 ">
                DP (Depository participant) charges
              </strong>
              <p className="text-xs">
                ₹13.5 per scrip (₹13.5 CDSL fee + ₹5.5 Zerodha fee + ₹2.34 GST)
                is charged on the trading account ledger when stocks are sold,
                irrespective of quantity.
              </p>
              <p className="mt-3 text-xs">
                Female demat account holders (as first holder) will enjoy a
                discount of ₹0.25 per transaction on the CDSL fee.
              </p>
              <p className="mt-3 text-xs">
                Debit transactions of mutual funds & bonds get an additional
                discount of ₹0.25 on the CDSL fee.
              </p>
            </div>

            {/* Pledging */}
            <div>
              <strong className="font-semibold text-gray-900 ">
                Pledging charges
              </strong>
              <p className="text-xs">₹30 + GST per pledge request per ISIN.</p>
            </div>

            {/* AMC */}
            <div>
              <strong className="font-semibold text-gray-900 ">
                AMC (Account maintenance charges)
              </strong>
              <p className="text-xs">
                For BSDA demat account: Zero charges if the holding value is
                less than ₹40,000. To learn more about BSDA, Click here.
              </p>
              <p className="mt-3">
                For non-BSDA demat accounts: ₹300/year + 18% GST charged
                quarterly (90 days). To learn more about AMC, Click here.
              </p>
            </div>

            {/* Corporate action */}
            <div>
              <strong className="font-semibold text-gray-900 ">
                Corporate action order charges
              </strong>
              <p className="text-xs">
                ₹20 plus GST will be charged for OFS / buyback / takeover /
                delisting orders placed through Console.
              </p>
            </div>

            {/* Off-market */}
            <div>
              <strong className="font-semibold text-gray-900 ">
                Off-market transfer charges
              </strong>
              <p className="text-xs">₹25 per transaction.</p>
            </div>

            {/* CMR */}
            <div>
              <strong className="font-semibold text-gray-900 ">
                Physical CMR request
              </strong>
              <p className="text-xs">
                First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST
                for subsequent requests.
              </p>
            </div>

            {/* Payment Gateway */}
            <div>
              <strong className="font-semibold text-gray-900 ">
                Payment gateway charges
              </strong>
              <p className="text-xs">
                ₹9 + GST (Not levied on transfers done via UPI)
              </p>
            </div>

            {/* Delayed Payment */}
            <div>
              <strong className="font-semibold text-gray-900 ">
                Delayed Payment Charges
              </strong>
              <p className="text-xs">
                Interest is levied at 18% a year or 0.05% per day on the debit
                balance in your trading account. Learn more.
              </p>
            </div>

            {/* 3-in-1 */}
            <div>
              <strong className="font-semibold text-gray-900 ">
                Trading using 3-in-1 account with block functionality
              </strong>
              <ul className="list-disc ml-5 space-y-1">
                <li className="text-xs">
                  Delivery & MTF Brokerage: 0.5% per executed order.
                </li>
                <li className="text-xs">
                  Intraday Brokerage: 0.05% per executed order.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Disclaimer */}
        <div className="mt-7">
          <strong className="font-semibold text-gray-900  ">Disclaimer</strong>
          <p className=" text-xs">
            For Delivery based trades, a minimum of ₹0.01 will be charged per
            contract note. Clients who opt to receive physical contract notes
            will be charged ₹20 per contract note plus courier charges.
          </p>
          <p className="mt-3 text-xs">
            Brokerage will not exceed the rates prescribed by SEBI and the
            exchanges. All statutory and regulatory charges will be levied at
            actuals. Brokerage is also charged on expired, exercised, and
            assigned options contracts. These instruments are available only for
            our retail individual clients.
          </p>
          <p className="mt-3 text-xs">
            Companies, Partnership Firms, Trusts, and HUFs need to pay 0.1% or
            ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25%
            of the contract value will be charged for contracts where physical
            delivery happens. For netted off positions in physically settled
            contracts, a brokerage of 0.1% will be charged.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingDetails;
