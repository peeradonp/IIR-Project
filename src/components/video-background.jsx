import React, { useRef, useEffect } from "react"

const VideoBackground = () => {
    const videoRef = useRef(null)

    useEffect(() => {
        const video = videoRef.current

        const handleCanPlay = () => {
            video.play().catch((error) => console.error("Error playing video:", error))
        }

        video.addEventListener("canplay", handleCanPlay)

        return () => {
            video.removeEventListener("canplay", handleCanPlay)
        }
    }, [])

    return (
        <div style={{ height: "100lvh" }}>
            <video ref={videoRef} className='video' loop muted playsInline>
                <source src='1080p.mp4' type='video/mp4' />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default VideoBackground
