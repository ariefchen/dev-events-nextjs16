"use client";
import Image from "next/image"

const ExplorerBtn = () => {
  return (
    <button type="button" id="explore-btn" className="mt-7 mx-auto"onClick={() => console.log('CLICK')}>
      <a href="#events">
        Explorer Events
        <Image src="/icons/arrow-down.svg" width={24} height={24} alt="arrow-down" />
      </a>
    </button>
  )
}

export default ExplorerBtn