"use client"

import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { projects } from "./data/projects"
import ProjectCard from "./project-card"

export default function ProjectCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true, // 🔁 gerçek loop
    align: "center",
  })

  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on("select", onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  return (
    <div className="relative w-full">
      {/* Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
      >
        <ArrowRight className="w-5 h-5" />
      </button>

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {projects.map((project, index) => {
            const isActive = index === selectedIndex

            //  Sadece ilk kart clone olduğunda görünmesin
            const isCloneOverlap = index === 0 && selectedIndex === 1+1



            return (
<div
  key={index}
  className={`flex-shrink-0 transition-transform duration-300 ease-in-out pb-10 ${
    isActive
      ? "w-[90%] md:w-[60%] scale-100 z-10"
      : "w-[70%] md:w-[30%] scale-90 opacity-50 blur-[1px] z-0"
  } px-4 ${
    isCloneOverlap ? "absolute w-0 h-0 overflow-hidden opacity-0 pointer-events-none" : ""
  }`}
>
  <ProjectCard {...project} />
</div>

            )
          })}
        </div>
      </div>
    </div>
  )
}
