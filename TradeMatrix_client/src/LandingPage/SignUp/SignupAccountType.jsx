import React from "react";

// Icons
import {
  GlobeLock,
  Building2,
  Baby,
  UserCircle2Icon,
  Users,
} from "lucide-react";

const accountTypes = [
  {
    title: "Individual Account",
    desc: "Invest in equity, mutual funds and derivatives",
    icon: UserCircle2Icon,
  },
  {
    title: "HUF Account",
    desc: "Make tax-efficient investments for your family",
    icon: Users,
  },
  {
    title: "NRI Account",
    desc: "Invest in equity, mutual funds, debentures, and more",
    icon: GlobeLock,
  },
  {
    title: "Minor Account",
    desc: "Teach your little ones about money & invest for their future with them",
    icon: Baby,
  },
  {
    title: "Corporate / LLP/ Partnership",
    desc: "Manage your business surplus and investments easily",
    icon: Building2,
  },
];

const SignupAccountType = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-2xl md:text-3xl font-medium text-gray-800 mb-16">
          Explore different account types
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {accountTypes.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={index}
                className="
                  border rounded-md p-6
                  hover:shadow-sm
                  transition-all duration-200
                  cursor-pointer
                  bg-white
                "
              >
                <div className="flex items-start gap-4">
                  <div className="text-blue-600">
                    <Icon aria-hidden="true" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SignupAccountType;
