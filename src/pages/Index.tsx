
import { useState } from "react";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CallToAction from "@/components/CallToAction";
import { MapPin, Bell, CheckSquare, Route, AlertTriangle, Smartphone, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [features] = useState([
    {
      icon: <MapPin className="h-12 w-12 text-blue-600" />,
      title: "Real-Time Tracking",
      description: "Track your child's bus in real-time and ensure their safety with live updates."
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Smart Attendance",
      description: "Easily mark and monitor attendance through our user-friendly app."
    },
    {
      icon: <Bell className="h-12 w-12 text-blue-600" />,
      title: "Instant Alerts",
      description: "Receive timely alerts about your bus's arrival and ensure timely pick-ups."
    },
    {
      icon: <Route className="h-12 w-12 text-blue-600" />,
      title: "Route Optimization",
      description: "Efficient routes for quick and safe travel."
    },
    {
      icon: <AlertTriangle className="h-12 w-12 text-blue-600" />,
      title: "Emergency Alerts",
      description: "Stay informed with instant emergency notifications."
    },
    {
      icon: <CheckSquare className="h-12 w-12 text-blue-600" />,
      title: "Check-In/Check-Out",
      description: "Simplified check-in and check-out process for students."
    },
    {
      icon: <Smartphone className="h-12 w-12 text-blue-600" />,
      title: "Multi-Device Support",
      description: "Access the app on multiple devices for convenience."
    }
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard 
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/features" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800">
                Learn more about our features
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </section>
        
        <CallToAction 
          headline="Ready to enhance your school's transportation system?"
          description="Join thousands of schools and parents who trust SmartBus for safe and efficient transportation management."
          buttonText="Get Started Today"
          buttonLink="#"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
