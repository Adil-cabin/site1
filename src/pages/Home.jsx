import Hero from '../components/home/Hero'
import Features from '../components/home/Features'
import Testimonials from '../components/home/Testimonials'
import CTASection from '../components/shared/CTASection'

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      <Hero />
      <Features />
      <Testimonials />
      <CTASection />
    </div>
  )
}