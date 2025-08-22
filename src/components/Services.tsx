// Template-enhanced component (UNIQUE VERSION)
// Generated: 2025-08-22T09:55:04.194Z
// Section: services
// Category: services
// Template ID: services-c001
// Page: Home
// Component: Services

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Home,
  Briefcase,
  TrendingUp,
  Handshake,
  Clipboard,
  Layers,
  ArrowRight
} from "lucide-react"

export default function AmandasServicesCardGrid() {
  const services = [
    {
      id: "luxury-home-sales",
      title: "Luxury Home Sales",
      description: "Expertly guide high-net-worth clients through the process of buying and selling premium properties in Beverly Hills.",
      icon: Home,
      badge: "Specialty",
      features: ["Off-Market Listings", "Discreet Transactions", "Tailored Strategies"],
      link: "/services/luxury-home-sales"
    },
    {
      id: "investment-properties",
      title: "Investment Properties",
      description: "Leverage Amanda's market expertise to build a profitable real estate investment portfolio.",
      icon: Briefcase,
      features: ["Market Analysis", "Property Evaluation", "Portfolio Management"],
      link: "/services/investment-properties"
    },
    {
      id: "luxury-home-staging",
      title: "Luxury Home Staging",
      description: "Elevate the presentation of your luxury listing with Amanda's impeccable design and staging services.",
      icon: Layers,
      badge: "New",
      features: ["Curated Furnishings", "Professional Photography", "Targeted Marketing"],
      link: "/services/luxury-home-staging"
    },
    {
      id: "market-insights",
      title: "Market Insights",
      description: "Stay ahead of the curve with Amanda's in-depth analysis of the Beverly Hills luxury real estate market.",
      icon: TrendingUp,
      features: ["Pricing Trends", "Inventory Forecasts", "Buyer Preferences"],
      link: "/services/market-insights"
    },
    {
      id: "client-concierge",
      title: "Client Concierge",
      description: "Enjoy a white-glove experience with Amanda's personalized concierge services for her clients.",
      icon: Handshake,
      features: ["Relocation Assistance", "Vendor Referrals", "Lifestyle Coordination"],
      link: "/services/client-concierge"
    },
    {
      id: "property-evaluation",
      title: "Property Evaluation",
      description: "Get a comprehensive assessment of your luxury property's value and potential with Amanda's expert evaluation.",
      icon: Clipboard,
      features: ["Comparative Market Analysis", "Condition Assessment", "Pricing Recommendations"],
      link: "/services/property-evaluation"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Amanda's Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Elevating Luxury Real Estate
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              in Beverly Hills
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Tailored solutions to help high-net-worth clients buy, sell, and invest in premium properties
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            
            return (
              <Card 
                key={service.id}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    {service.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="size-1.5 rounded-full bg-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Learn More Link */}
                  <Button 
                    variant="ghost" 
                    className="w-full group/btn justify-between hover:bg-primary/10"
                    asChild
                  >
                    <a href={service.link}>
                      <span>Learn More</span>
                      <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to elevate your luxury real estate experience?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline">
              View All Services
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}