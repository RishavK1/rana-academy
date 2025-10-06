import { Link } from 'react-router-dom';
import { GraduationCap, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { instituteData } from '@/data/institute';

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <Link to="/" className="flex items-center gap-2 font-heading font-bold text-xl mb-4">
              <GraduationCap className="w-8 h-8 text-warm-yellow" />
              <span>{instituteData.name}</span>
            </Link>
            <p className="text-sm text-gray-300 mb-4">
              Premier chemistry coaching institute in Karnal with proven track record of success.
            </p>
            <div className="flex gap-3">
              <a href={instituteData.social.facebook} className="hover:text-warm-yellow transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={instituteData.social.instagram} className="hover:text-warm-yellow transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={instituteData.social.youtube} className="hover:text-warm-yellow transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href={instituteData.social.twitter} className="hover:text-warm-yellow transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/courses" className="hover:text-warm-yellow transition-colors">Courses</Link></li>
              <li><Link to="/results" className="hover:text-warm-yellow transition-colors">Results</Link></li>
              <li><Link to="/faculty" className="hover:text-warm-yellow transition-colors">Faculty</Link></li>
              <li><Link to="/blog" className="hover:text-warm-yellow transition-colors">Blog</Link></li>
              <li><Link to="/about" className="hover:text-warm-yellow transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-warm-yellow transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Our Courses</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/courses/jee-chemistry" className="hover:text-warm-yellow transition-colors">JEE Chemistry</Link></li>
              <li><Link to="/courses/class-xii-chemistry" className="hover:text-warm-yellow transition-colors">Class XII</Link></li>
              <li><Link to="/courses/class-x-chemistry" className="hover:text-warm-yellow transition-colors">Class X</Link></li>
              <li><Link to="/courses/foundation-chemistry" className="hover:text-warm-yellow transition-colors">Foundation</Link></li>
              <li><Link to="/courses/jee-crash-course" className="hover:text-warm-yellow transition-colors">Crash Course</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 text-warm-yellow" />
                <span>
                  {instituteData.contact.address.street}<br />
                  {instituteData.contact.address.city}, {instituteData.contact.address.state}<br />
                  {instituteData.contact.address.pincode}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-warm-yellow" />
                <a href={`tel:${instituteData.contact.phones[0]}`} className="hover:text-warm-yellow transition-colors">
                  {instituteData.contact.phones[0]}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-warm-yellow" />
                <a href={`mailto:${instituteData.contact.email}`} className="hover:text-warm-yellow transition-colors">
                  {instituteData.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} {instituteData.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
