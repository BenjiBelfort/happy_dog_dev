'use client';

import Link from 'next/link';
import { IoMdArrowRoundForward } from "react-icons/io";
import { Zilla_Slab } from "next/font/google";

const zillaSlab = Zilla_Slab({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
  });

interface LinkButtonProps {
    text: string;
    href: string;
    bgColor?: string; // ex: "bg-emerald-700"
    hoverColor?: string; // ex: 'hover:bg-emerald-800'
    className?: string;
}  

import React from 'react'

const LinkButton = ({
        text,
        href,
        bgColor = 'bg-emerald-700',
        hoverColor = 'hover:bg-emerald-800',
        className = '',
    }: LinkButtonProps) => {
  return (
    <div className="relative group inline-block m-4">
        {/* Sur-bouton qui apparaît derrière */}
        <div
            className="bg-yellow-300/50 absolute inset-0 rounded-2xl transition-all duration-300 ease-out 
             opacity-0 group-hover:opacity-100 group-hover:scale-x-110 group-hover:scale-y-123 shadow-md/10"
        />
      
        {/* Bouton principal */}
        <Link
            href={href}
            className={`relative z-10 flex items-center gap-4 ${bgColor} ${hoverColor} text-white font-bold text-xl rounded-xl px-6 py-4 transition duration-300 ${zillaSlab.className} ${className}`}
        >
        {text}
            <span className="transform transition duration-300 group-hover:translate-x-1">
                <IoMdArrowRoundForward size={18} />
            </span>
        </Link>
    </div>
  );
};

export default LinkButton;
