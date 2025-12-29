import { motion } from "framer-motion";

const socialLinks = [
  { name: "Facebook", url: "https://www.facebook.com/softvision.lk/", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> },
  { name: "LinkedIn", url: "https://www.linkedin.com/company/softvision-group-pvt-ltd/", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg> },
  { name: "Instagram", url: "https://www.instagram.com/softvision.lk/", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg> },
  { name: "WhatsApp", url: "https://wa.me/94777345345", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> },
];

const SocialIcon = ({ name, url, icon }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={name}
    className="text-slate-400 hover:text-blue-400 hover:scale-110 transition-all duration-300"
  >
    {icon}
  </a>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0B1120] text-white py-16 font-sans">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16"
        >
          {/* About */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold tracking-wide">SoftVision Group</h3>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Leading the future of software innovation with cutting-edge solutions and dedicated expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold tracking-wide">Our Companies</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://svg.lk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                >
                  SoftVision IT Group
                </a>
              </li>
              <li>
                <a
                  href="https://busy.lk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Soft Vision Technologies
                </a>
              </li>
              <li>
                <a
                  href="https://www.busyerp.lk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                >
                  BusyERP
                </a>
              </li>
              <li>
                <a
                  href="https://skyb.lk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Skyb Overseas Consultants
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold tracking-wide">Connect With Us</h3>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Discover how we can transform your business with innovative technology solutions.
            </p>
            <div className="flex space-x-5 pt-2">
              {socialLinks.map((link) => (
                <SocialIcon key={link.name} {...link} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-slate-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-slate-500">
            <p>
              © {currentYear} SoftVision Group. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative gradient for very bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-50" />
    </footer>
  );
};

export default Footer;
