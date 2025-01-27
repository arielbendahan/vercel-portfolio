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
          <h2 className="mb-8 text-2xl font-medium tracking-tight">
            Programming Languages
          </h2>

      <div>
        <button onClick={() => setActiveSection("Section1")}>Section 1</button>
        <button onClick={() => setActiveSection("Section2")}>Section 2</button>
        <button onClick={() => setActiveSection("Section3")}>Section 3</button>
      </div>

      {activeSection === "Section1" && (
        <div className="prose prose-neutral dark:prose-invert">
          <h3>Languages I excel at:</h3>
          <ul>
            <li>Java</li>
            <li>SQL</li>
            <li>C#</li>
          </ul>
        </div>
      )}

      {activeSection === "Section2" && (
        <div className="prose prose-neutral dark:prose-invert">
          <h3>Other languages I am proficient in:</h3>
          <ul>
            <li>JavaScript</li>
            <li>Python</li>
            <li>HTML/CSS</li>
          </ul>
        </div>
      )}

      {activeSection === "Section3" && (
        <div className="prose prose-neutral dark:prose-invert">
          <h3>Languages I am familiar with:</h3>
          <ul>
            <li>Ruby</li>
            <li>PHP</li>
            <li>Go</li>
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
    </section>
  );
}
