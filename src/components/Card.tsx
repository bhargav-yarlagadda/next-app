"use client";
import React from "react";
import Image from "next/image";
import { BackgroundGradient } from "./ui/background-gradient";

interface CardProps {
  title: string;
  description: string;
  instructor: string;
  image: string;
  price:any
}

export function Card({ title, description, instructor, image ,price}: CardProps) {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <div className="w-full h-48 relative mb-4 rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {title}
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
          {description}
        </p>
        
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4">
          Instructor: {instructor}
        </p>

        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            {price}
          </span>
        </button>
      </BackgroundGradient>
    </div>
  );
}
