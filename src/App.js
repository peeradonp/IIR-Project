import "./App.css"

import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { useRef } from "react"
import VideoBackground from "./components/video-background"

const url = (name, wrap = false) =>
    `${wrap ? "url(" : ""}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
        wrap ? ")" : ""
    }`

function App() {
    const parallax = useRef(null)
    return (
        <div style={{ width: "100%", height: "100%" }}>
            <Parallax ref={parallax} pages={5} style={{ background: "black" }}>
                <ParallaxLayer offset={0} speed={0}>
                    <VideoBackground />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={0}
                    speed={0.1}
                    onClick={() => parallax.current.scrollTo(1)}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <div className='text-[180px] text-white pointer-events-none'>IIR</div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    speed={0}
                    factor={3}
                    style={{
                        backgroundImage: url("stars", true),
                        backgroundSize: "cover"
                    }}
                />

                <ParallaxLayer sticky={{ start: 1, end: 4 }} style={{ height: "auto" }}>
                    <div className='text-white px-8 flex items-center backdrop-blur-sm'>
                        <div className='text-[min(10vw,80px)] pointer-events-none'>IIR</div>
                        <div className='text-[min(3vw,30px)] flex-1'>
                            <div className='flex space-x-6 justify-end uppercase'>
                                <div onClick={() => parallax.current.scrollTo(0)}>Home</div>
                                <div onClick={() => parallax.current.scrollTo(1)}>About Us</div>
                                <div onClick={() => parallax.current.scrollTo(3)}>Reel</div>
                                <div onClick={() => parallax.current.scrollTo(4)}>Contact</div>
                            </div>
                        </div>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    speed={0.1}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <div className='md:mx-64 mx-8 text-white text-center'>
                        Eiusmod ea sint veniam laboris ipsum. Anim deserunt consequat labore quis
                        exercitation id enim commodo. Do laborum exercitation ad ipsum ex eu culpa
                        qui esse enim et cupidatat. Minim ea irure irure non tempor culpa. Occaecat
                        do non et esse esse. Est commodo sit voluptate incididunt ullamco deserunt
                        occaecat duis ullamco cillum non aliquip. Labore eu incididunt in amet non
                        in officia voluptate esse ullamco commodo. Consectetur do consequat ea
                        reprehenderit deserunt nulla. Nisi adipisicing enim ipsum anim.
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2}
                    speed={0.1}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <div className='md:mx-64 mx-8 text-white text-center justify-center'>
                        <div className='flex justify-center p-8'>
                            <img alt='' width={"128px"} src={"person.jpg"} />
                        </div>
                        <div>
                            Eiusmod ea sint veniam laboris ipsum. Anim deserunt consequat labore
                            quis exercitation id enim commodo. Do laborum exercitation ad ipsum ex
                            eu culpa qui esse enim et cupidatat. Minim ea irure irure non tempor
                            culpa. Occaecat do non et esse esse. Est commodo sit voluptate
                            incididunt ullamco deserunt occaecat duis ullamco cillum non aliquip.
                            Labore eu incididunt in amet non in officia voluptate esse ullamco
                            commodo. Consectetur do consequat ea reprehenderit deserunt nulla. Nisi
                            adipisicing enim ipsum anim.
                        </div>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2.85}
                    speed={0.1}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <div className='md:mx-64 mx-8 text-white text-center justify-center text-[min(3vw,30px)] '>
                        Project's we've worked on
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={3}
                    speed={-0.3}
                    style={{
                        backgroundSize: "80%",
                        backgroundPosition: "center",
                        backgroundImage: url("clients", true)
                    }}
                />

                <ParallaxLayer
                    offset={3}
                    speed={-0}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <img alt='' src={url("clients-main")} style={{ width: "40%" }} />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={3.9}
                    speed={0.1}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <div className='justify-center space-y-8'>
                        <div className='md:mx-64 mx-8 text-white text-center justify-center text-[min(8vw,30px)]'>
                            Contact us {":)"}
                        </div>
                        <div className='flex space-x-8 justify-center'>
                            <div>
                                <a
                                    alt=''
                                    rel='noreferrer'
                                    href='https://www.linkedin.com/in/peeradon-phraekjinda-565b40239/'
                                    target='_blank'
                                    title='LinkedIn'
                                >
                                    <img
                                        alt='LinkedIn'
                                        class='h-[2rem] w-auto'
                                        src='https://floating-rock.com/storage/uploads/f33828d2-e8c0-4135-9d23-c1cd428b7d79/linkedin.svg'
                                    />
                                </a>
                            </div>
                            <div>
                                <a
                                    alt=''
                                    rel='noreferrer'
                                    href='https://www.linkedin.com/in/peeradon-phraekjinda-565b40239/'
                                    target='_blank'
                                    title='Facebook'
                                >
                                    <img
                                        alt='Facebook'
                                        class='h-[2rem] w-auto'
                                        src='https://floating-rock.com/storage/uploads/914a0043-77c5-473a-9718-6265d2cc0adc/facebook.svg'
                                    />
                                </a>
                            </div>
                            <div>
                                <a
                                    alt=''
                                    rel='noreferrer'
                                    href='https://www.linkedin.com/in/peeradon-phraekjinda-565b40239/'
                                    target='_blank'
                                    title='TikTok'
                                >
                                    <img
                                        alt='TikTok'
                                        class='h-[2rem] w-auto'
                                        src='https://floating-rock.com/storage/uploads/c1f9de6e-03a0-4743-9935-9c87a1a63290/tiktok.svg'
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                    <img
                        alt=''
                        src={url("cloud")}
                        style={{ display: "block", width: "20%", marginLeft: "55%" }}
                    />
                    <img
                        alt=''
                        src={url("cloud")}
                        style={{ display: "block", width: "10%", marginLeft: "15%" }}
                    />
                </ParallaxLayer>

                <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
                    <img
                        alt=''
                        src={url("cloud")}
                        style={{ display: "block", width: "20%", marginLeft: "70%" }}
                    />
                    <img
                        alt=''
                        src={url("cloud")}
                        style={{ display: "block", width: "20%", marginLeft: "40%" }}
                    />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
                    <img
                        alt=''
                        src={url("cloud")}
                        style={{ display: "block", width: "10%", marginLeft: "10%" }}
                    />
                    <img
                        alt=''
                        src={url("cloud")}
                        style={{ display: "block", width: "20%", marginLeft: "75%" }}
                    />
                </ParallaxLayer>

                <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
                    <img
                        alt=''
                        src={url("cloud")}
                        style={{ display: "block", width: "20%", marginLeft: "60%" }}
                    />
                    <img
                        alt=''
                        src={url("cloud")}
                        style={{ display: "block", width: "25%", marginLeft: "30%" }}
                    />
                    <img
                        alt=''
                        src={url("cloud")}
                        style={{ display: "block", width: "10%", marginLeft: "80%" }}
                    />
                </ParallaxLayer>

                <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
                    <img
                        alt=''
                        src={url("cloud")}
                        style={{ display: "block", width: "20%", marginLeft: "5%" }}
                    />
                    <img
                        alt=''
                        src={url("cloud")}
                        style={{ display: "block", width: "15%", marginLeft: "75%" }}
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={4.5}
                    speed={-0.4}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        pointerEvents: "none"
                    }}
                >
                    <img alt='' src={url("earth")} style={{ width: "60%" }} />
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}

export default App
