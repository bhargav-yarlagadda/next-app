import FeaturedSection from "@/components/FeaturedSection"
import HeroSection from "@/components/Hero"
const page = () => {
  return (
    <div className="min-h-screen bg-black antialiased bg-grid-white/[0.02]" >
      <HeroSection/>
      <FeaturedSection/>
    </div>
  )
}

export default page
