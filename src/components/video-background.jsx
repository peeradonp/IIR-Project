// VideoBackground.js

import React, { useRef, useEffect } from "react"

const VideoBackground = () => {
    const videoRef = useRef(null)

    useEffect(() => {
        const video = videoRef.current

        const handleCanPlay = () => {
            // Ensure the video is muted for autoplay to work on mobile
            video.muted = true
            video.play().catch((error) => console.error("Error playing video:", error))
        }

        video.addEventListener("canplay", handleCanPlay)

        // Mobile browsers may require user interaction to autoplay videos
        const handleInteraction = () => {
            video.play().catch((error) => console.error("Error playing video:", error))
            document.removeEventListener("touchstart", handleInteraction)
        }

        document.addEventListener("touchstart", handleInteraction)

        return () => {
            video.removeEventListener("canplay", handleCanPlay)
            document.removeEventListener("touchstart", handleInteraction)
        }
    }, [])

    return (
        <div style={{ height: "135svh", marginTop: "-18svh" }}>
            <video ref={videoRef} className='video' loop muted playsInline>
                <source src='1080p.mp4' type='video/mp4' />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default VideoBackground
