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
          <ul>
            <li>Java</li>
            <li>C#</li>
            <li>C++</li>
            <li>Python</li>
            <li>Swift</li>
            <li>SQL</li>
            <li>HTML + CSS</li>
            <li>JavaScript</li>
            <li>PHP</li>
          </ul>
        </div>
      )}

      {activeSection === "Section2" && (
        <div className="prose prose-neutral dark:prose-invert">
          <h3>Technologies:</h3>
          <ul>
            <li>Visual Studio and VS Code</li>
            <li>Docker</li>
            <li>ASP.NET</li>
            <li>Firebase</li>
            <li>Oracle Database</li>
            <li>Git and GitHub</li>
          </ul>
        </div>
      )}
        <h2 className="mb-8 text-2xl font-medium tracking-tight">
          About Me
        </h2>
        <p>
          Ever since I was young, I was always interested in electronics, especially computers. I would tinker them by modding various consoles, learning about new
          technologies like virtual reality and even built my own computer. I always try to learn new things in my field and push myself
          to explore innovative solutions, whether through coding, hardware modding, or keeping up with the latest tech trends.
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
      `}</style>
    </section>
  );
}
