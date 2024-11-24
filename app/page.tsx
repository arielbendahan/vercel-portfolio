import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
        <Image
          src="/profile.jpg"
          alt="Profile photo"
          className="rounded-full block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
          unoptimized
          width={200}
          height={160}
          priority
        />

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Welcome to my Portfolio!
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Hi! My name is Ariel Bendahan and, welcome to my portfolio.
          This portfolio features all of my social links where you can reach me
          and also showcases a few of my projects on GitHub.
        </p>
        <p>
          I'm a 19 year-old student at Collège LaSalle Montréal finishing my DEC in Computer Science Programming.
          I excel in Java programming, more specifically Android development, and I'm also strong in SQL Database Management and C#.
        </p>
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
