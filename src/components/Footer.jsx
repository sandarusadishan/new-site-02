import { motion } from "framer-motion";

const socialLinks = [
  { name: "Facebook", url: "https://www.facebook.com/softvisionitgroup", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> },
  { name: "LinkedIn", url: "https://www.linkedin.com/company/svg-lk/?viewAsMember=true", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg> },
  { name: "Instagram", url: "https://www.instagram.com/softvision.lk/", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg> },
  { name: "WhatsApp", url: "https://wa.me/+94714318753", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg> },
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
