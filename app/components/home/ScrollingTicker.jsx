"use client"
import Image from 'next/image'
import { useTranslation } from '../../../context/useTranslation';
import { useLanguage } from '../../../context/LanguageContext';
import { useMemo } from 'react';

const ScrollTicker = () => {
    const t = useTranslation('home');
    const { language } = useLanguage();

    const items = useMemo(() => t.scrollingTicker?.items || [
        'جراحة تجميلية',
        'جراحة ترميمية',
        'جراحة الحروق',
        'جراحة اليد',
        'الأمان والشفافية',
    ], [t, language]);

    const TickerItems = () => (
        <>
            {items.map((item, index) => (
                <span key={index} className='flex flex-raw align-center gap-4 text-white'>
                    <Image
                        src="/assets/logo1.png"
                        alt={item}
                        width={100}
                        height={6}
                    />
                    {item}
                </span>
            ))}
        </>
    );

    return (
        <div className="our-scrolling-ticker bg-[#17a2b8]">
            <div className="scrolling-ticker-box">
                <div className="scrolling-content">
                    <TickerItems />
                    <TickerItems />
                    <TickerItems />
                </div>

                <div className="scrolling-content">
                    <TickerItems />
                    <TickerItems />
                    <TickerItems />
                </div>
            </div>
        </div>
    )
}

export default ScrollTicker;