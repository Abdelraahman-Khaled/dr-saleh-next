import { useState } from 'react';
import { useLocale } from 'next-intl';

export default function FaqAccordion({ faqs }) {
    const [openIndex, setOpenIndex] = useState(null);
    const locale = useLocale();

    if (!faqs || faqs.length === 0) return null;

    return (
        <div className="space-y-4">
            {faqs.map((faq, faqIndex) => {
                const isOpen = openIndex === faqIndex;
                const question = locale === 'ar' ? faq.question_ar : faq.question_en;
                const answer = locale === 'ar' ? faq.answer_ar : faq.answer_en;

                const videoId = faq.video_url ? (() => {
                    const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=|shorts\/)|youtu\.be\/)([^"&?\/\s]{11})/;
                    const match = faq.video_url.match(regExp);
                    return (match && match[1]) ? match[1] : null;
                })() : null;

                return (
                    <div
                        key={faqIndex}
                        className={`bg-white rounded-2xl border-2 transition-all duration-300 ${isOpen
                            ? 'border-[#17a2b8] shadow-lg'
                            : 'border-gray-100 hover:border-gray-200'
                            }`}
                    >
                        <button
                            className="w-full px-6 py-5 flex items-center justify-between text-right cursor-pointer"
                            onClick={() => setOpenIndex(isOpen ? null : faqIndex)}
                        >
                            <span className="font-bold text-gray-900 text-lg">{question}</span>
                            <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'bg-[#17a2b8] rotate-180' : 'bg-gray-100'
                                    }`}
                            >
                                <i
                                    className={`ri-arrow-down-s-line text-xl ${isOpen ? 'text-white' : 'text-gray-600'
                                        }`}
                                ></i>
                            </div>
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[800px]' : 'max-h-0'
                                }`}
                        >
                            <div className="px-6 pb-5">
                                <div
                                    className="text-gray-600 leading-relaxed blog-detail-content mb-4"
                                    dangerouslySetInnerHTML={{ __html: answer }}
                                />
                                {videoId && (
                                    <div className="relative w-full aspect-video rounded-lg overflow-hidden mt-4">
                                        <iframe
                                            className="absolute top-0 left-0 w-full h-full"
                                            src={`https://www.youtube.com/embed/${videoId}`}
                                            title="FAQ Video"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
