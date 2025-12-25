import { motion } from "framer-motion";
import { Brain, Workflow, Shield, Gauge, Code, Database } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Model Integration",
    description: "Connect your systems with state-of-the-art language models, computer vision, and predictive analytics.",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description: "Automate repetitive tasks and workflows with intelligent AI agents that learn and adapt.",
  },
  {
    icon: Code,
    title: "Custom AI Solutions",
    description: "Tailored AI applications designed specifically for your unique business requirements.",
  },
  {
    icon: Database,
    title: "Data Pipeline Optimization",
    description: "Build robust data infrastructure that powers your AI initiatives efficiently.",
  },
  {
    icon: Shield,
    title: "AI Security & Compliance",
    description: "Implement AI with enterprise-grade security and regulatory compliance standards.",
  },
  {
    icon: Gauge,
    title: "Performance Analytics",
    description: "Monitor, measure, and optimize your AI systems for maximum ROI and efficiency.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive AI solutions designed to elevate your business capabilities
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl glass hover:border-primary/50 transition-all duration-500 hover:glow-primary">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
