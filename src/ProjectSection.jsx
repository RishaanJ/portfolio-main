"use client"
import { ArrowUpRight } from "lucide-react"
import subzicentervideo from './assets/subzicenter.mp4'
import brieflyvideo from './assets/briefly.mp4'

const projects = [
  {
    id: 1,
    title: "Subzi Center",
    description:
      "A full-stack web application built with React where users can signup and rate their personal experience with popular Indian vegetables. This project helped me learn React and Firebase data systems.",
    mediaType: "video",
    mediaSrc: subzicentervideo, // Replace with your video
    isApp: false,
    tags: ["React", "Firebase", "Full-Stack"],
  },
  {
    id: 2,
    title: "Briefly",
    description:
      "A communication app designed to help effective collaboration, built using React and Firebase. Features themes, beautiful UI, emoji keyboard, and content filtering.",
    mediaType: "video",
    mediaSrc: "/placeholder.svg?height=500&width=300", // Replace with your video
    isApp: false,
    tags: ["React", "Firebase", "Communication"],
  },
]

function ProjectCard({ title, description, mediaType, mediaSrc, isApp, tags }) {
  return (
    <div className="group cursor-pointer">
      <div
        className={`
        bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-800
        flex flex-col overflow-hidden
        transition-all duration-300 ease-out
        hover:border-gray-300 dark:hover:border-gray-700
        hover:shadow-lg dark:hover:shadow-gray-900/20
        ${isApp ? "h-[30rem]" : "h-[26rem]"}
      `}
      >
        {/* Media Container */}
        <div className="relative overflow-hidden">
          {mediaType === "video" ? (
            <video
              autoPlay
              loop
              muted
              className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                isApp ? "h-48" : "h-44"
              }`}
            >
              <source src={mediaSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={mediaSrc || "/placeholder.svg"}
              alt={title}
              className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                isApp ? "h-48" : "h-44"
              }`}
              style={{ filter: "grayscale(100%)" }}
            />
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-200">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-grow mb-6">{description}</p>

          {/* CTA Button */}
          <button className="group/btn flex items-center gap-2 self-start text-gray-900 dark:text-white font-medium transition-all duration-200 hover:gap-3">
            <span>View Project</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 mt-24 mb-24">
      <div className="text-center mb-16">
        {/* Badge */}
        <div className="inline-block border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 text-sm font-medium px-4 py-2 rounded-full mb-8">
          Projects
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">
          Big Projects In the Works!
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Coming VERY soon!
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

      </div>

      {/* View All Projects CTA */}
      {/* <div className="text-center">
        <button className="group inline-flex items-center gap-2 border border-gray-200 dark:border-gray-700 px-6 py-3 rounded-lg font-medium text-gray-900 dark:text-white transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-600 hover:gap-3">
          <span>View All Projects</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div> */}
    </section>
  )
}
