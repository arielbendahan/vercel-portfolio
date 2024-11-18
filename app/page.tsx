import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
          unoptimized
          width={160}
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
          I excel in Java programming, more specifically Android development, and I'm also strong in SQL Database Management and C#.
        </p>
        <p>
          Thank you for visiting my portfolio!
        </p>
      </div>
    </section>
  );
}
