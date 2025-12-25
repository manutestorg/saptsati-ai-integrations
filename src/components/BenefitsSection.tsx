import { motion } from "framer-motion";
import { Check, TrendingUp, Clock, Users, Target } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Increased Efficiency",
    description: "Reduce manual work by up to 80% with intelligent automation and AI-powered workflows.",
  },
  {
    icon: Clock,
    title: "Faster Time-to-Market",
    description: "Accelerate product development and deployment with pre-built AI integration frameworks.",
  },
  {
    icon: Users,
    title: "Enhanced Customer Experience",
    description: "Deliver personalized, AI-driven experiences that delight your customers at scale.",
  },
  {
    icon: Target,
    title: "Data-Driven Decisions",
    description: "Make smarter business decisions backed by AI-powered insights and analytics.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-gradient">Saptsati</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We don't just implement AI – we transform how your organization thinks, 
              operates, and grows. Our expert team ensures seamless integration with 
              minimal disruption to your existing workflows.
            </p>
            
            <div className="space-y-4">
              {[
                "Expert team with 10+ years in AI/ML",
                "Proven track record across industries",
                "24/7 dedicated support",
                "Scalable solutions that grow with you",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Benefits Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl glass hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
