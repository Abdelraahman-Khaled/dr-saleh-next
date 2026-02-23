"use client"
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl';
import { useMemo } from 'react';

const ScrollTicker = () => {
    const t = useTranslations('home');
    const locale = useLocale();

    const items = useMemo(() => [
        t('scrollingTicker.items.0'),
        t('scrollingTicker.items.1'),
        t('scrollingTicker.items.2'),
        t('scrollingTicker.items.3'),
        t('scrollingTicker.items.4'),
    ], [t]);

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
                <div className={`scrolling-content ${locale}`}>
                    <TickerItems />
                    <TickerItems />
                    <TickerItems />
                </div>

                <div className={`scrolling-content ${locale}`}>
                    <TickerItems />
                    <TickerItems />
                    <TickerItems />
                </div>
            </div>
        </div>
    )
}

export default ScrollTicker;