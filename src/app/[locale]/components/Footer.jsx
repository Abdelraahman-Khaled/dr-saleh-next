'use client';
import { useTranslations } from 'next-intl';
import { Link } from '../../../navigation';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('navbar');

  const links = [
    { href: '/', label: tNav('links.home') },
    { href: '/about', label: tNav('links.about') },
    { href: '/operations', label: tNav('links.operations') },
    { href: '/blogs', label: tNav('links.blogs') },
    { href: '/media', label: tNav('links.media') },
    { href: '/patient-journey', label: tNav('links.patientJourney') },
    { href: '/faqs', label: tNav('links.faqs') },
    { href: '/contact', label: tNav('links.contact') },
  ];

  const operations = [0, 1, 2, 3, 4, 5].map((i) => ({
    href: '/operations',
    label: t(`operationList.${i}`)
  }));

  return (
    <footer className="bg-[#1a1f2e] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <img
              src="https://dr-saaleh.netlify.app/assets/img/footer-logo.png"
              alt="Logo"
              className="h-12 mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('description')}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#17a2b8] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{t('operations')}</h3>
            <ul className="space-y-2 text-sm">
              {operations.map((op, idx) => (
                <li key={idx}>
                  <Link
                    href={op.href}
                    className="text-gray-400 hover:text-[#17a2b8] transition-colors"
                  >
                    {op.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{t('socialMedia')}</h3>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://tiktok.com/@dr.salehalkhalaf"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#17a2b8] transition-colors"
              >
                <i className="ri-tiktok-line"></i>
              </a>
              <a
                href="https://x.com/drsalehalkhalaf"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#17a2b8] transition-colors"
              >
                <i className="ri-twitter-x-line"></i>
              </a>
              <a
                href="https://www.youtube.com/@dr.salehalkhalaf"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#17a2b8] transition-colors"
              >
                <i className="ri-youtube-line"></i>
              </a>
              <a
                href="https://www.instagram.com/dr.salehalkhalaf"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#17a2b8] transition-colors"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a
                href="https://www.facebook.com/dr.salehalkhalaf/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#17a2b8] transition-colors"
              >
                <i className="ri-facebook-line"></i>
              </a>
              <a
                href="https://www.snapchat.com/@drsalehalkhalaf"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#17a2b8] transition-colors"
              >
                <i className="ri-snapchat-line"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/%D8%B5%D8%A7%D9%84%D8%AD-%D8%A7%D9%84%D8%BA%D8%A7%D9%85%D8%AF%D9%8I/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#17a2b8] transition-colors"
              >
                <i className="ri-linkedin-line"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            {t('rights')} |
            <a
              href="https://readdy.ai/?ref=logo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#17a2b8] hover:underline ml-1"
            >
              Website Builder
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
