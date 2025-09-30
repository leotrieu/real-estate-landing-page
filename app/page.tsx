"use client"

import { useState, useEffect } from "react"
import {
  Search,
  Home,
  DollarSign,
  MapPin,
  Bed,
  Bath,
  Square,
  TrendingUp,
  Users,
  Award,
  Star,
  ChevronRight,
  Menu,
  X,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react"

export default function RealEstateLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [hoveredProperty, setHoveredProperty] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const properties = [
    {
      id: 1,
      image: "/modern-luxury-villa-pool.png",
      price: "$2,450,000",
      location: "Beverly Hills, CA",
      beds: 5,
      baths: 4,
      sqft: "4,200",
      type: "Villa",
    },
    {
      id: 2,
      image: "/contemporary-penthouse-apartment-city-view.jpg",
      price: "$1,850,000",
      location: "Manhattan, NY",
      beds: 3,
      baths: 3,
      sqft: "2,800",
      type: "Penthouse",
    },
    {
      id: 3,
      image: "/elegant-modern-house-with-garden.jpg",
      price: "$3,200,000",
      location: "Malibu, CA",
      beds: 6,
      baths: 5,
      sqft: "5,500",
      type: "Estate",
    },
    {
      id: 4,
      image: "/sleek-urban-loft-interior.jpg",
      price: "$950,000",
      location: "Miami, FL",
      beds: 2,
      baths: 2,
      sqft: "1,600",
      type: "Loft",
    },
    {
      id: 5,
      image: "/luxury-waterfront-property.png",
      price: "$4,100,000",
      location: "Seattle, WA",
      beds: 4,
      baths: 4,
      sqft: "3,900",
      type: "Waterfront",
    },
    {
      id: 6,
      image: "/modern-minimalist-house-architecture.jpg",
      price: "$1,650,000",
      location: "Austin, TX",
      beds: 4,
      baths: 3,
      sqft: "3,200",
      type: "Modern",
    },
  ]

  const stats = [
    { icon: Home, value: "2,500+", label: "Properties Sold" },
    { icon: Users, value: "10,000+", label: "Happy Clients" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Star, value: "4.9", label: "Average Rating" },
  ]

  const features = [
    {
      icon: TrendingUp,
      title: "Market Expertise",
      description: "Deep understanding of local markets and trends to help you make informed decisions.",
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "Dedicated agents who understand your unique needs and preferences.",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Thousands of successful transactions and satisfied clients over 15 years.",
    },
    {
      icon: Home,
      title: "Exclusive Listings",
      description: "Access to premium properties before they hit the market.",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      image: "/professional-woman-smiling.png",
      rating: 5,
      quote:
        "Finding our dream home was effortless with their expert guidance. The team went above and beyond to ensure we found the perfect property.",
    },
    {
      name: "Michael Chen",
      role: "Property Investor",
      image: "/professional-man-portrait.png",
      rating: 5,
      quote:
        "Their market knowledge and professionalism are unmatched. They helped me build a profitable real estate portfolio.",
    },
    {
      name: "Emily Rodriguez",
      role: "First-Time Buyer",
      image: "/young-professional-woman.png",
      rating: 5,
      quote:
        "As a first-time buyer, I was nervous, but they made the entire process smooth and stress-free. Highly recommended!",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-lg shadow-lg" : "bg-transparent"}`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Home className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">LuxeEstate</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#properties" className="text-foreground/80 hover:text-primary transition-colors">
                Properties
              </a>
              <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">
                About
              </a>
              <a href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">
                Contact
              </a>
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-xl hover:scale-105 transition-transform">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-in slide-in-from-top">
              <a href="#properties" className="text-foreground/80 hover:text-primary transition-colors">
                Properties
              </a>
              <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">
                About
              </a>
              <a href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">
                Contact
              </a>
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-xl hover:scale-105 transition-transform">
                Get Started
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
        <div className="absolute inset-0 bg-[url('/luxury-modern-house-exterior.png')] bg-cover bg-center opacity-10" />

        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">
              Discover Your Dream Home in Paradise
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-12 text-pretty font-light">
              Explore exclusive luxury properties curated for those who demand excellence
            </p>

            {/* Search Bar */}
            <div className="bg-card/80 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-border/50">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-3 bg-background/50 rounded-xl px-4 py-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <input
                    type="text"
                    placeholder="Location"
                    className="bg-transparent border-none outline-none w-full text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div className="flex items-center gap-3 bg-background/50 rounded-xl px-4 py-3">
                  <DollarSign className="h-5 w-5 text-primary" />
                  <input
                    type="text"
                    placeholder="Price Range"
                    className="bg-transparent border-none outline-none w-full text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div className="flex items-center gap-3 bg-background/50 rounded-xl px-4 py-3">
                  <Home className="h-5 w-5 text-primary" />
                  <select className="bg-transparent border-none outline-none w-full text-foreground">
                    <option>Property Type</option>
                    <option>Villa</option>
                    <option>Penthouse</option>
                    <option>Estate</option>
                  </select>
                </div>
                <button className="bg-primary text-primary-foreground rounded-xl px-6 py-3 hover:scale-105 transition-transform flex items-center justify-center gap-2 font-semibold">
                  <Search className="h-5 w-5" />
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      </section>

      {/* Featured Properties */}
      <section id="properties" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Properties</h2>
            <p className="text-xl text-foreground/70 font-light">Handpicked luxury homes for discerning buyers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div
                key={property.id}
                className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50"
                onMouseEnter={() => setHoveredProperty(property.id)}
                onMouseLeave={() => setHoveredProperty(null)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.location}
                    className={`w-full h-full object-cover transition-transform duration-500 ${hoveredProperty === property.id ? "scale-110" : "scale-100"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-xl font-semibold">
                    {property.type}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-foreground">{property.price}</h3>
                    <div className="flex items-center gap-1 text-accent">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm text-foreground/70">{property.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-foreground/70">
                    <div className="flex items-center gap-2">
                      <Bed className="h-5 w-5 text-primary" />
                      <span>{property.beds} Beds</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="h-5 w-5 text-primary" />
                      <span>{property.baths} Baths</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Square className="h-5 w-5 text-primary" />
                      <span>{property.sqft} sqft</span>
                    </div>
                  </div>

                  <button className="mt-6 w-full bg-primary/10 text-primary py-3 rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center gap-2 font-semibold group-hover:scale-105">
                    View Details
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-2xl mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-foreground/70 font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why Choose Us</h2>
            <p className="text-xl text-foreground/70 font-light">Excellence in every aspect of real estate</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/20 rounded-xl mb-6">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-foreground/70 font-light leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gradient-to-br from-accent/10 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Client Stories</h2>
            <p className="text-xl text-foreground/70 font-light">Hear from our satisfied clients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-card via-card to-accent/5 backdrop-blur-xl rounded-2xl p-8 border-2 border-accent/30 hover:border-accent/60 shadow-xl hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl group-hover:bg-accent/30 transition-all duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-accent text-accent drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] group-hover:scale-110 transition-transform duration-300"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>

                  <div className="relative mb-8">
                    <div className="absolute -top-2 -left-2 text-6xl text-accent/20 font-serif leading-none">"</div>
                    <p className="text-foreground/90 leading-relaxed text-lg relative z-10 pl-6">{testimonial.quote}</p>
                  </div>

                  <div className="flex items-center gap-4 pt-6 border-t border-accent/20">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="relative w-14 h-14 rounded-full object-cover border-2 border-accent/50 group-hover:border-accent transition-colors"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-foreground text-lg">{testimonial.name}</div>
                      <div className="text-sm text-accent font-medium">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-r from-primary to-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern.png')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Find Your Dream Home?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 font-light">
              Schedule a consultation with our expert agents today and start your journey to luxury living
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-background text-foreground px-8 py-4 rounded-xl hover:scale-105 transition-transform font-semibold text-lg shadow-xl">
                Schedule Consultation
              </button>
              <button className="bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground border-2 border-primary-foreground/50 px-8 py-4 rounded-xl hover:scale-105 transition-transform font-semibold text-lg">
                View All Properties
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Home className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-foreground">LuxeEstate</span>
              </div>
              <p className="text-foreground/70 font-light leading-relaxed">
                Your trusted partner in finding luxury properties that exceed expectations.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#properties" className="text-foreground/70 hover:text-primary transition-colors">
                    Properties
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-foreground/70 hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-foreground/70 hover:text-primary transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-foreground/70">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-center gap-2 text-foreground/70">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>info@luxeestate.com</span>
                </li>
                <li className="flex items-center gap-2 text-foreground/70">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>123 Luxury Ave, CA 90210</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-foreground/60">
            <p>&copy; 2025 LuxeEstate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
