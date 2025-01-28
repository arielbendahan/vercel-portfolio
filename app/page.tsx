"use client";

import Image from "next/image";
import { useState } from "react";
import { socialLinks } from "./config";

export default function Page() {
  const [activeSection, setActiveSection] = useState("Section1");
  return (
    <section>
{/*         <Image
          src="/profile.jpg"
          alt="Profile photo"
          className="rounded-full block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
          unoptimized
          width={200}
          height={160}
          priority
        /> */}

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Welcome to my Portfolio!
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Hi! My name is Ariel Bendahan, and welcome to my portfolio.
          This portfolio features all of my social links where you can reach me
          and also showcases a few of my projects on GitHub.
        </p>
        
        <p>
          I'm a 19-year-old student at Collège LaSalle Montréal, and I am finishing my DEC in Computer Science Programming.
          I excel in full-stack development and also have extensive knowledge of the following programming languages:
        </p>

        <div className="button-group">
          <button className="btn" onClick={() => setActiveSection("Section1")}>Programming Languages</button>
          <button className="btn" onClick={() => setActiveSection("Section2")}>Technologies</button>
        </div>

        {activeSection === "Section1" && (
          <div className="prose prose-neutral dark:prose-invert">
            <h3>Programming Languages:</h3>
            <ul className="language-list">
              <li><img src="https://raw.githubusercontent.com/jmnote/z-icons/master/svg/java.svg" alt="csharp" width="40" height="40"/> Java</li>
              <li><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="csharp" width="40" height="40"/> C#</li>
              <li><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" width="40" height="40"/> C++</li>
              <li><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> Python</li>
              <li><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg" alt="swift" width="40" height="40"/> Swift</li>
              <li><img src="https://www.svgrepo.com/download/303229/microsoft-sql-server-logo.svg" alt="sql" width="40" height="40"/> SQL</li>
              <li><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="css" width="40" height="40"/> HTML + CSS</li>
              <li><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> JavaScript</li>
              <li><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php" width="40" height="40"/> PHP</li>
            </ul>
          </div>
        )}

        {activeSection === "Section2" && (
          <div className="prose prose-neutral dark:prose-invert">
            <h3>Technologies:</h3>
            <ul className="language-list">
              <li><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/visualstudio/visualstudio-plain.svg" alt="visualstudio" width="40" height="40"/> Visual Studio and VS Code</li>
              <li><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" alt="docker" width="40" height="40"/> Docker</li>
              <li><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original.svg" alt="aspnet" width="40" height="40"/> ASP.NET</li>
              <li><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg" alt="firebase" width="40" height="40"/> Firebase</li>
              <li><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg" alt="oracle" width="40" height="40"/> Oracle Database</li>
              <li><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="github" width="40" height="40"/> Git and GitHub</li>
            </ul>
          </div>
        )}
        <h2 className="mb-8 text-2xl font-medium tracking-tight">
          About Me
        </h2>
        <p>
          Ever since I could remember, I was always interested in electronics, especially computers. I would use them for hours on end, modding the various consoles I had, learning about new
          technologies like virtual reality and AI and even building my own computer. I took the many hours I invested in gaming and used this interest in technology to learn more about the computer.
          I learnt many amazing things like I learnt that I actually have a knack for technical support, which made me the go-to technician at home and I even started learning some basic programming for game development.
        </p>
        <p>
          Eventually, all of those hours I invested learning about modern technology brought me here, where instead of being a consumer of a program, I aspire to be a developer of one.
          I always push myself to try and learn new things in my field so that when I decide to make a career out of my skills, I will prosper when I become a great programmer!
        </p>
        <p>
          Thank you for visiting my portfolio!
        </p>
      </div>
            <style jsx>{`
        .button-group {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }
        .btn {
          background-color: black;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: background-color 0.3s;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }
        .btn:hover {
          background-color: #333333;
        }
        .language-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .language-list li {
          list-style: none;
          margin-right: 20px;
        }
        .language-list img {
          margin-right: 10px;
          vertical-align: middle;
        }
      `}</style>
    </section>
  );
}
