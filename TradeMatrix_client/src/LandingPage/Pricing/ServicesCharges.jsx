import React from "react";

const ServicesCharges = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-20">
          <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-4">
            Charges for account opening
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 text-sm text-left">
              <thead className="bg-white">
                <tr className="text-gray-700">
                  <th className="px-4 py-3">Type of account</th>
                  <th className="px-4 py-3">Charges</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t border-gray-100 bg-white">
                  <td className="px-4 py-3">Online account</td>
                  <td className="px-4 py-3">
                    <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                      FREE
                    </span>
                  </td>
                </tr>

                <tr className="border-t border-gray-100 bg-gray-50">
                  <td className="px-4 py-3">Offline account</td>
                  <td className="px-4 py-3">
                    <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                      FREE
                    </span>
                  </td>
                </tr>

                <tr className="border-t border-gray-100 bg-white">
                  <td className="px-4 py-3">NRI account (offline only)</td>
                  <td className="px-4 py-3">₹ 500</td>
                </tr>

                <tr className="border-t border-gray-100 bg-gray-50">
                  <td className="px-4 py-3">
                    Partnership, LLP, HUF, or Corporate accounts
                  </td>
                  <td className="px-4 py-3">₹ 500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-24">
          <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-4">
            Demat AMC (Annual Maintenance Charge)
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 text-sm text-left">
              <thead className="bg-white">
                <tr className="text-gray-700">
                  <th className="px-4 py-3">Value of holdings</th>
                  <th className="px-4 py-3">AMC</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t border-gray-100 bg-white">
                  <td className="px-4 py-3">Up to ₹4 lakh</td>
                  <td className="px-4 py-3">
                    <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                      FREE
                    </span>
                  </td>
                </tr>

                <tr className="border-t border-gray-100 bg-gray-50">
                  <td className="px-4 py-3">₹4 lakh – ₹10 lakh</td>
                  <td className="px-4 py-3">
                    ₹ 100 per year, charged quarterly*
                  </td>
                </tr>

                <tr className="border-t border-gray-100 bg-white">
                  <td className="px-4 py-3">Above ₹10 lakh</td>
                  <td className="px-4 py-3">
                    ₹ 300 per year, charged quarterly
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-500 mt-3">
            * Lower AMC applies only if the account qualifies as a BSDA account.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-4">
            Charges for optional value added services
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 text-sm text-left">
              <thead className="bg-white">
                <tr className="text-gray-700">
                  <th className="px-4 py-3">Service</th>
                  <th className="px-4 py-3">Billing Frequency</th>
                  <th className="px-4 py-3">Charges</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t border-gray-100 bg-white">
                  <td className="px-4 py-3">Tickertape</td>
                  <td className="px-4 py-3">Monthly / Annual</td>
                  <td className="px-4 py-3">Free: 0 | Pro: 249/2399</td>
                </tr>

                <tr className="border-t border-gray-100 bg-gray-50">
                  <td className="px-4 py-3">Smallcase</td>
                  <td className="px-4 py-3">Per transaction</td>
                  <td className="px-4 py-3">Buy 100 | SIP 10</td>
                </tr>

                <tr className="border-t border-gray-100 bg-white">
                  <td className="px-4 py-3">Kite Connect</td>
                  <td className="px-4 py-3">Monthly</td>
                  <td className="px-4 py-3">Connect 500 | Personal Free</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCharges;
