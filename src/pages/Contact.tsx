import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingDock from '@/components/FloatingDock';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { instituteData } from '@/data/institute';
import { toast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }

    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleCall = () => {
    window.location.href = `tel:${instituteData.contact.phones[0]}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${instituteData.contact.whatsapp.replace(/[^0-9]/g, '')}`, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Rana Academy of Chemistry</title>
        <meta name="description" content={`Get in touch with Rana Academy. Located at ${instituteData.contact.address.street}, Karnal. Call ${instituteData.contact.phones[0]}`} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero */}
          <section className="py-12 bg-secondary">
            <div className="container mx-auto px-4 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-heading text-4xl md:text-5xl font-bold text-navy mb-4"
              >
                Contact Us
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-muted-foreground"
              >
                We're here to answer your questions and guide you
              </motion.p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="font-heading text-3xl font-bold text-navy mb-6">
                    Get In Touch
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Have questions about our courses or admissions? Reach out to us through any of the channels below.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-sky flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy mb-1">Address</h3>
                        <p className="text-muted-foreground">
                          {instituteData.contact.address.street}<br />
                          {instituteData.contact.address.city}, {instituteData.contact.address.state}<br />
                          {instituteData.contact.address.pincode}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-sky flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy mb-1">Phone</h3>
                        {instituteData.contact.phones.map((phone, idx) => (
                          <a
                            key={idx}
                            href={`tel:${phone}`}
                            className="block text-muted-foreground hover:text-primary transition-colors"
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-sky flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy mb-1">Email</h3>
                        <a
                          href={`mailto:${instituteData.contact.email}`}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {instituteData.contact.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-sky flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy mb-1">Timings</h3>
                        <p className="text-muted-foreground">
                          Weekdays: {instituteData.timings.weekdays}<br />
                          Saturday: {instituteData.timings.saturday}<br />
                          Sunday: {instituteData.timings.sunday}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Button onClick={handleCall} className="btn-hero flex-1">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now
                    </Button>
                    <Button onClick={handleWhatsApp} className="btn-cta flex-1">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="card-soft p-8"
                >
                  <h3 className="font-heading text-2xl font-bold text-navy mb-6">
                    Send Us a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">
                        Name *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98XXX XXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">
                        Message *
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your query..."
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" className="btn-hero w-full">
                      Send Message
                    </Button>
                  </form>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Map Section */}
          <section className="py-16 bg-secondary">
            <div className="container mx-auto px-4">
              <h2 className="font-heading text-3xl font-bold text-navy text-center mb-8">
                Find Us Here
              </h2>
              <div className="card-soft overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.8951629915855!2d76.99043931512!3d29.688709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e4b3f5f5f5f5f%3A0x5f5f5f5f5f5f5f5f!2sSector%2014%2C%20Karnal%2C%20Haryana%20132001!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rana Academy Location"
                ></iframe>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <FloatingDock />
      </div>
    </>
  );
};

export default Contact;
