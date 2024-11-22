// import { Racquet } from "lucide-react";
import Link from "next/link";
import { Icon } from 'lucide-react';
import { tennisRacket } from '@lucide/lab';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
            <Icon iconNode={tennisRacket} className="h-8 w-8 text-white"  />
              <span className="font-bold text-xl text-white">World Padel Trips</span>
            </div>
            <p className="text-sm">
              Join the fastest growing padel community and elevate your game.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#events" className="hover:text-white">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-white">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#join" className="hover:text-white">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>Email: info@padelhub.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Padel Street</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>© {new Date().getFullYear()} World Padel Trips. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;