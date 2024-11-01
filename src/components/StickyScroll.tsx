"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Live Classes",
    description:
      "Join live classes led by experienced instructors. Learn music theory, techniques, and instruments in a collaborative environment with real-time feedback, and improve your skills under expert guidance.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--indigo-500))] flex items-center justify-center text-white">
Live Classes
      </div>
    ),
  },
  {
    title: "Interactive Practice Tools",
    description:
      "Practice anytime with interactive tools designed to enhance your learning. Access a library of exercises, track your progress, and work towards mastery at your own pace.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
            Interactive Practice Tools
      </div>
    ),
  },
  {
    title: "Personalized Feedback",
    description:
      "Get personalized feedback on your performance from skilled mentors. Our platform enables one-on-one reviews to help you understand your strengths and areas for improvement, tailored to your musical journey.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] flex items-center justify-center text-white">
        Personalized Feedback
      </div>
    ),
  },
  {
    title: "Community and Collaboration",
    description:
      "Connect with fellow musicians and collaborate on projects. Share your progress, get inspired by others, and be part of a thriving music community that supports your growth.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--teal-500),var(--lime-500))] flex items-center justify-center text-white">
        Community and Collaboration
      </div>
    ),
  },
];

export function StickyScrollSection() {
  return (
    <div className="p-10" style={{ scrollbarWidth: 'none' }}>
      <StickyScroll content={content} />
    </div>
  );
}
