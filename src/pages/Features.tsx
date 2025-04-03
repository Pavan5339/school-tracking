
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import { MapPin, Bell, CheckSquare, Route, AlertTriangle, Smartphone, Users } from "lucide-react";

const FeaturesPage = () => {
  const features = [
    {
      icon: <MapPin className="h-16 w-16 text-blue-600" />,
      title: "Real-Time Tracking",
      description: "Track your child's bus in real-time and ensure their safety with live updates. Our GPS-based tracking system provides accurate location data with minimal delay.",
      details: [
        "Live GPS tracking of school buses",
        "Estimated time of arrival",
        "Route visualization on map",
        "Bus stop information"
      ]
    },
    {
      icon: <Users className="h-16 w-16 text-blue-600" />,
      title: "Smart Attendance",
      description: "Easily mark and monitor attendance through our user-friendly app. Administrators can access reports and analytics to monitor trends.",
      details: [
        "Automated check-in/check-out",
        "Attendance history and reports",
        "Parent notifications on check-in",
        "Digital attendance records"
      ]
    },
    {
      icon: <Bell className="h-16 w-16 text-blue-600" />,
      title: "Instant Alerts",
      description: "Receive timely alerts about your bus's arrival and ensure timely pick-ups. Get notified about delays, route changes, or other important updates.",
      details: [
        "Bus arrival notifications",
        "Delay alerts",
        "School announcements",
        "Customizable alert preferences"
      ]
    },
    {
      icon: <Route className="h-16 w-16 text-blue-600" />,
      title: "Route Optimization",
      description: "Efficient routes for quick and safe travel. Our system analyzes traffic patterns and student locations to suggest optimal routes.",
      details: [
        "Traffic-aware route planning",
        "Fuel efficiency optimization",
        "Reduced travel time",
        "Alternative route suggestions"
      ]
    },
    {
      icon: <AlertTriangle className="h-16 w-16 text-blue-600" />,
      title: "Emergency Alerts",
      description: "Stay informed with instant emergency notifications. Critical alerts are sent to all relevant stakeholders in case of emergencies.",
      details: [
        "Weather alerts",
        "Breakdown notifications",
        "Emergency contact system",
        "SOS button for drivers"
      ]
    },
    {
      icon: <CheckSquare className="h-16 w-16 text-blue-600" />,
      title: "Check-In/Check-Out",
      description: "Simplified check-in and check-out process for students. Track when students board and exit the bus for complete peace of mind.",
      details: [
        "Digital student ID scanning",
        "Timestamp records",
        "Student boarding verification",
        "Historical ridership data"
      ]
    },
    {
      icon: <Smartphone className="h-16 w-16 text-blue-600" />,
      title: "Multi-Device Support",
      description: "Access the app on multiple devices for convenience. Our platform works seamlessly across smartphones, tablets, and desktop computers.",
      details: [
        "iOS and Android compatibility",
        "Web portal access",
        "Cross-device synchronization",
        "Responsive design"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-12 px-4 bg-blue-50">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Features</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the powerful features that make SmartBus the most reliable school bus tracking system for schools and parents.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-24 last:mb-0`}
              >
                <div className="md:w-1/2 p-8 flex justify-center">
                  <div className="p-6 bg-blue-50 rounded-full">
                    {feature.icon}
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CallToAction 
          headline="Ready to enhance school bus safety?"
          description="Join thousands of schools and parents who trust SmartBus for safe and efficient transportation management."
          buttonText="Get Started Today"
          buttonLink="#"
          bgColor="bg-blue-600"
          textColor="text-white"
          buttonColor="bg-white hover:bg-blue-50"
          buttonTextColor="text-blue-600"
        />
      </main>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
