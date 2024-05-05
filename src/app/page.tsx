"use client";
import Navbar from "@/components/Navbar";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import Font Awesome styles
import './globals.css';
import { useEffect } from "react";

config.autoAddCss = false;

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_HOSTNAME}`)
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])

  const words = [
    {
      text: "Find",
    },
    {
      text: "nearby",
    },
    {
      text: "tutors easily",
    },
    {
      text: "with",
    },
    {
      text: "Phoenix Tutorium.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="page">

      <div className="">

        <Navbar />

        <div className="flex flex-col items-center justify-center h-[40rem]  ">
          <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
            The road to knowledge starts here
          </p>
          <TypewriterEffectSmooth words={words} />
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
            <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm"
              onClick={() => {
                router.push('/search');
              }}
            >
              Find Tutor
            </button>
            <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
              Signup
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
