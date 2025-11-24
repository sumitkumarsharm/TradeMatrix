import React from "react";
import Austin from "../../assets/Austin.jpg";
import Hanan from "../../assets/Hanan.jpg";
import Nikhil from "../../assets/Nikhil.jpg";
import nithin_kamath from "../../assets/nithin-kamath.jpg";
import Seema from "../../assets/Seema.jpg";
import Venu from "../../assets/Venu.jpg";

const teamData = [
  {
    img: Austin,
    name: "Austin",
    role: "Tech Lead",
  },
  {
    img: Hanan,
    name: "Hanan",
    role: "Senior Developer",
  },
  {
    img: Nikhil,
    name: "Nikhil",
    role: "UI/UX Designer",
  },
  {
    img: nithin_kamath,
    name: "Nithin Kamath",
    role: "Advisor",
  },
  {
    img: Venu,
    name: "Venu",
    role: "Marketing Strategist",
  },
  {
    img: Seema,
    name: "Seema",
    role: "Operations Manager",
  },
];

const AboutTeam = () => {
  return (
    <section className="w-full bg-white mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h3 className="sr-only">Team Members</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 place-items-center">
          {teamData.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.img}
                alt={`${member.name} - ${member.role} at TradeMatrix`}
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover mx-auto"
              />
              <h4 className="text-sm font-medium text-gray-900 mt-4">
                {member.name}
              </h4>
              <p className="text-xs text-gray-500">{member.role}</p>

              {/* Bio Button (Accessible, SEO friendly) */}
              <button
                aria-label={`View bio of ${member.name}`}
                className="text-xs text-blue-600 hover:underline mt-1"
              >
                Bio ▼
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
