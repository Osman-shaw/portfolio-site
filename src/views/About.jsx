import { useState } from "react";
import profile from "../assets/osman.jpg";
import Bootstrap from "../assets/skills/bootstrap.png";
import Css from "../assets/skills/css.png";
import Git from "../assets/skills/Git.jpg";
import Github from "../assets/skills/github.png";
import HTML from "../assets/skills/HTML.png";
import JS from "../assets/skills/js.png";
import MU from "../assets/skills/Mui.png";
import Mysql from "../assets/skills/mysql-icon.png";
import Oracle from "../assets/skills/oracle.jpg";
import PHP from "../assets/skills/php.png";
import Frame from "../assets/skills/react.png";
import Wordpress from "../assets/skills/wordpress.png";
import Tableau from "../assets/skills/Tableau.jpeg";
import Typescript from "../assets/skills/typescript.png";
import Forex from "../assets/skills/Forex.jpeg";

const imagesList = [
  { id: 0, src: Bootstrap, alt: "bootstrap" },
  { id: 1, src: Css, alt: "Css" },
  { id: 2, src: Git, alt: "Git" },
  { id: 3, src: Github, alt: "Github" },
  { id: 4, src: Wordpress, alt: "wordpress" },
  { id: 5, src: HTML, alt: "HTML" },
  { id: 6, src: JS, alt: "js" },
  { id: 7, src: MU, alt: "Mu" },
  { id: 8, src: Oracle, alt: "oracle" },
  { id: 9, src: PHP, alt: "PHP" },
  { id: 10, src: Mysql, alt: "MYSQL" },
  { id: 11, src: Frame, alt: "frame" },
  { id: 12, src: Tableau, alt: "Tableau" },
  { id: 13, src: Typescript, alt: "Typescript" },
  { id: 14, src: Forex, alt: "forex" },
];

const About = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="m-4 grid gap-4 sm:grid-cols-2 pt-5">
      {/* Left Column: Bio */}
      <div className="min-h-[100px] rounded-lg bg-indigo-980 shadow">
        <div className="px-4 py-3">
          <h1 className="text-2xl md:text-3xl font-semibold text-yellow-750 mb-4">
            Osman Shaw
          </h1>
          <p className="text-lg text-white-600">
            As a Front-end developer with years of professional
            experience, I have a strong skillset in Javascript and Php. I am
            proficient in using ReactJS to build efficient and user-friendly web
            applications and a solid grasp of REST APIs for seamless and dynamic
            user experiences. I like what I’m currently doing which is Web
            Development… and very much interested in Forex Trading & Data Analysis.
          </p>
          <div className="pt-4">
            <button
              onClick={() => setOpen(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Read more
            </button>
          </div>
        </div>
      </div>

      {/* Right Column: Profile and Contact */}
      <div className="min-h-[100px] rounded-lg bg-indigo-980 shadow">
        <div className="px-4">
          <img
            className="w-full h-70 object-cover rounded-t-lg"
            src={profile}
            alt="Osman Shaw"
          />
        </div>
        <div className="px-4 py-3">
          <p className="text-sm md:text-base font-bold text-white-600">
            Email: shawosman090@gmail.com <br />
            Phone: +232 73146157 <br />
            Freelance: Available
          </p>
        </div>
      </div>

      {/* Skills Modal */}
      {open && (
        <div className="fixed inset-0 bg-indigo-980 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-indigo-980 rounded-lg shadow-lg max-w-2xl w-full p-6 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-white-600 hover:text-yellow-750"
            >
              ✕
            </button>
            <h2 className="text-2xl font-semibold text-yellow-750 mb-4">
              Skills
            </h2>
            <p className="text-lg text-white-600 mb-4">
              These are the technologies, frameworks, and utilities with which I
              have experience.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
              {imagesList.map((image) => (
                <div
                  key={image.id}
                  className="flex justify-center items-center bg-[#10172d] rounded-md p-2"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="max-w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;