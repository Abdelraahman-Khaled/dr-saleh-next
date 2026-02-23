'use client';

import { Link } from '../../../navigation';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-center px-4 bg-gray-50 overflow-hidden">
      <h1 className="absolute text-[15rem] md:text-[25rem] font-black text-gray-200/40 select-none pointer-events-none z-0 font-heading">
        404
      </h1>

      <div className="relative z-10 max-w-lg">
        <div className="w-24 h-24 bg-[#17a2b8]/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <i className="ri-error-warning-line text-5xl text-[#17a2b8]"></i>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
          {t('title')}
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          {t('description')}
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3 bg-[#17a2b8] text-white rounded-full font-bold hover:bg-[#138496] transition-all shadow-lg hover:shadow-xl active:scale-95"
        >
          <i className="ri-home-4-line"></i>
          {t('backHome')}
        </Link>
      </div>
    </div>
  );
}