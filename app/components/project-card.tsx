"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export interface ProjectCardProps {
  title: string
  description: string
  mediaType: "image" | "video"
  mediaSrc: string
  link: string
  website?: string
  tags: string[]
}

export default function ProjectCard({
  title,
  description,
  mediaType,
  mediaSrc,
  link,
  website,
  tags,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden pt-0 bg-white/10 dark:bg-black/20 backdrop-blur-md shadow-xl border border-white/10 hover:scale-[1.02] transition-transform duration-300">
      <div className="relative aspect-video overflow-hidden">
        {mediaType === "video" ? (
          <video
            src={mediaSrc}
            autoPlay
            muted
            loop
            playsInline
            title={title}
            aria-label={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <Image
            src={mediaSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover transition-transform hover:scale-105"
          />
        )}
      </div>

      <CardContent className="p-4 pt-0">
        <h3 className="font-bold text-xl text-purple-700 dark:text-purple-300 mb-2">{title}</h3>
        <p className="text-sm text-purple-900 dark:text-purple-200 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-700  to-purple-700 px-3 py-1 text-xs font-medium text-white shadow-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex gap-4">
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-blue-900 dark:text-blue-300 hover:text-white transition-colors"
        >
          <Github className="h-4 w-4" />
          GitHub
        </Link>
        {website && (
          <Link
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-blue-900 dark:text-blue-300 hover:text-white transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            Website
          </Link>
        )}
      </CardFooter>
    </Card>
  )
}
