import Chatty from "@/components/Chatty";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <>
      <div className=" relative bg-gray-200/10 transition-colors duration-150 delay-150 ">

      <div className="main">
        <div className="gradient-1 -z-10 " />
        <Navbar />
        <div>
          <Hero />
        </div>
        <div className="w-full" >
          <Chatty/>
        </div>
      </div>
      </div>
    </>
  )
}
