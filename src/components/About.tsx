// Template-enhanced component (UNIQUE VERSION)
// Generated: 2025-08-22T09:55:04.080Z
// Section: about
// Category: about
// Template ID: about-c001
// Page: Home
// Component: About

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Award,
  Users,
  TrendingUp,
  Globe,
  ArrowRight,
  Quote,
  Star,
  Home,
  Briefcase,
  Percent
} from "lucide-react"

export default function About() {
  const values = [
    {
      icon: Home,
      title: "Luxury Expertise",
      description: "Our team specializes in the high-end Beverly Hills real estate market, providing unparalleled knowledge and insights."
    },
    {
      icon: Briefcase,
      title: "Proven Track Record",
      description: "With decades of combined experience, we've successfully closed countless luxury home transactions for our clients."
    },
    {
      icon: Percent,
      title: "Exceptional Results",
      description: "Our focus on delivering the best possible outcomes has earned us a reputation for excellence in the industry."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Through our extensive network and marketing strategies, we connect luxury buyers and sellers from around the world."
    }
  ]

  const stats = [
    { value: "20+", label: "Years of Experience", icon: Award },
    { value: "$1B+", label: "Total Sales Volume", icon: TrendingUp },
    { value: "98%", label: "Client Satisfaction", icon: Users },
    { value: "20+", label: "Luxury Listings", icon: Home }
  ]

  const team = [
    {
      name: "Amanda Foster",
      role: "Founder & Lead Realtor",
      image: "AF",
      bio: "Renowned for her expertise in the Beverly Hills luxury real estate market, Amanda has over two decades of experience helping high-net-worth clients buy and sell their dream homes."
    },
    {
      name: "Michael Goldstein",
      role: "Senior Realtor",
      image: "MG",
      bio: "With a keen eye for detail and a deep understanding of the local market, Michael has been instrumental in securing the best deals for our clients."
    },
    {
      name: "Sarah Williamson",
      role: "Luxury Estates Specialist",
      image: "SW",
      bio: "Sarah's passion for luxury real estate and her exceptional negotiation skills have made her a trusted advisor to our most discerning clients."
    },
    {
      name: "David Lee",
      role: "Investment Properties Advisor",
      image: "DL",
      bio: "David's expertise in the luxury investment property market has helped our clients build wealth through strategic real estate investments."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            About Amanda Foster Luxury Homes
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Elevating Luxury Real Estate
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              in Beverly Hills
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Amanda Foster Luxury Homes is a premier real estate firm specializing in the
            high-end Beverly Hills market. Our team of seasoned professionals is dedicated
            to providing exceptional service and delivering unparalleled results for our
            discerning clientele.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded by Amanda Foster, a renowned expert in the Beverly Hills luxury real estate
                market, our firm has been serving the needs of high-net-worth individuals for over
                two decades.
              </p>
              <p>
                With a deep understanding of the local market, a commitment to exceptional service,
                and a track record of delivering exceptional results, we have established ourselves
                as the go-to choice for those seeking the finest luxury homes in Beverly Hills.
              </p>
              <p>
                Our team of seasoned professionals, each with their own unique expertise, work
                tirelessly to ensure our clients' real estate goals are not only met, but exceeded.
              </p>
            </div>
            <Button className="group">
              Learn More About Our Story
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Amanda Foster Luxury Homes is the premier choice for those seeking the finest
                      luxury real estate in Beverly Hills. Their unparalleled expertise and
                      dedication to excellence are unmatched in the industry."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- John Doe, Luxury Investor</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Commitment to Excellence</h3>
            <p className="text-muted-foreground">
              The principles that guide our approach to luxury real estate.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Meet Our Luxury Real Estate Experts</h3>
            <p className="text-muted-foreground">
              The talented individuals who make up the Amanda Foster Luxury Homes team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="group">
              View All Team Members
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "Amanda Foster Luxury Homes has been an invaluable partner in our search for the
                perfect Beverly Hills estate. Their unparalleled market knowledge and dedication
                to finding us the ideal property have been truly exceptional."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  JD
                </div>
                <div className="text-left">
                  <div className="font-semibold">John Doe</div>
                  <div className="text-sm text-muted-foreground">Luxury Homebuyer</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}