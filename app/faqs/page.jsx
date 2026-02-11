'use client';
import Link from 'next/link';
import { useState } from 'react';
import ScrollTicker from '../components/home/ScrollingTicker';

export default function FaqsPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqCategories = [
    {
      title: 'أسئلة عامة',
      faqs: [
        {
          question: 'كيف أحجز استشارة مع د. صالح الخلف؟',
          answer:
            'يمكنك حجز استشارة من خلال التواصل معنا عبر الهاتف أو الواتساب أو من خلال نموذج الحجز على موقعنا. سيقوم فريقنا بتحديد موعد مناسب لك.',
        },
        {
          question: 'ما هي تكلفة الاستشارة الأولية؟',
          answer:
            'تختلف تكلفة الاستشارة حسب نوع الإجراء المطلوب. يرجى التواصل معنا للحصول على معلومات تفصيلية عن التكاليف.',
        },
        {
          question: 'هل يمكنني إجراء استشارة عن بُعد؟',
          answer:
            'نعم، نوفر خدمة الاستشارات عن بُعد عبر مكالمات الفيديو للمرضى من خارج المنطقة. تواصل معنا لترتيب موعد.',
        },
      ],
    },
    {
      title: 'قبل الجراحة',
      faqs: [
        {
          question: 'ما هي التحضيرات المطلوبة قبل الجراحة؟',
          answer:
            'سنقدم لك قائمة مفصلة بالتحضيرات المطلوبة والتي تشمل: التوقف عن بعض الأدوية، الصيام قبل العملية، وإجراء الفحوصات اللازمة.',
        },
        {
          question: 'هل يجب أن أتوقف عن التدخين قبل الجراحة؟',
          answer:
            'نعم، ننصح بشدة بالتوقف عن التدخين قبل الجراحة بأسبوعين على الأقل وبعدها بأسبوعين، حيث يؤثر التدخين سلباً على عملية الشفاء.',
        },
        {
          question: 'ما هي الفحوصات المطلوبة قبل العملية؟',
          answer:
            'تشمل الفحوصات عادةً: تحاليل الدم الشاملة، تخطيط القلب، وفحوصات أخرى حسب نوع العملية وحالتك الصحية.',
        },
      ],
    },
    {
      title: 'بعد الجراحة',
      faqs: [
        {
          question: 'كم تستغرق فترة التعافي؟',
          answer:
            'تختلف فترة التعافي حسب نوع الجراحة. بشكل عام، يمكن العودة للأنشطة الخفيفة خلال أسبوع إلى أسبوعين، والأنشطة الكاملة خلال 4-6 أسابيع.',
        },
        {
          question: 'هل سأشعر بألم بعد العملية؟',
          answer:
            'من الطبيعي الشعور ببعض الانزعاج بعد الجراحة، لكننا نوفر أدوية مسكنة فعالة للتحكم في الألم وضمان راحتك.',
        },
        {
          question: 'متى تظهر النتائج النهائية؟',
          answer:
            'تبدأ النتائج بالظهور تدريجياً بعد زوال التورم. النتائج النهائية تظهر عادةً خلال 3-6 أشهر حسب نوع الإجراء.',
        },
      ],
    },
    {
      title: 'العمليات المحددة',
      faqs: [
        {
          question: 'هل عملية تجميل الأنف مؤلمة؟',
          answer:
            'تُجرى العملية تحت التخدير الكامل، لذا لن تشعر بأي ألم أثناء الإجراء. بعد العملية، قد يكون هناك انزعاج خفيف يُعالج بالمسكنات.',
        },
        {
          question: 'كم تستمر نتائج شد الوجه؟',
          answer:
            'نتائج شد الوجه تدوم عادةً من 7 إلى 10 سنوات، مع الحفاظ على العناية بالبشرة ونمط حياة صحي.',
        },
        {
          question: 'هل شفط الدهون بديل عن إنقاص الوزن؟',
          answer:
            'لا، شفط الدهون ليس بديلاً عن إنقاص الوزن. هو إجراء لإزالة الدهون العنيدة في مناطق محددة لتحسين شكل الجسم.',
        },
      ],
    },
  ];

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://readdy.ai/api/search-image?query=Elegant%20frequently%20asked%20questions%20concept%20featuring%20large%20stylized%20question%20mark%20symbols%20floating%20above%20open%20book%20with%20glowing%20pages%20surrounded%20by%20lightbulbs%20representing%20answers%20and%20knowledge%20in%20modern%20turquoise%20teal%20color%20palette%20with%20soft%20gradients%20clean%20minimalist%20aesthetic%20professional%20medical%20consultation%20theme%20abstract%20geometric%20shapes%20and%20smooth%20lighting%20creating%20sense%20of%20clarity%20understanding%20and%20helpful%20information&width=1920&height=600&seq=faqs-hero-new-design-v7&orientation=landscape)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#17a2b8]/85 via-[#17a2b8]/75 to-[#138496]/85" />
        <div className="container mx-auto px-4 relative z-10 py-32">
          <div className="text-center text-white">
            <nav className="flex items-center justify-center gap-2 text-sm mb-6 opacity-90">
              <Link href="/" className="hover:underline cursor-pointer">الرئيسية</Link>
              <i className="ri-arrow-left-s-line"></i>
              <span>الأسئلة الشائعة</span>
            </nav>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">إجابات على أسئلتك</h1>
            <p className="text-xl opacity-95 max-w-2xl mx-auto">
              نجيب على أكثر الأسئلة شيوعاً حول جراحات التجميل والترميم
            </p>
          </div>
        </div>
      </section>

      {/* Scrolling Ticker */}
   <ScrollTicker/>

      {/* FAQ Accordion */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, catIndex) => (
              <div key={catIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#17a2b8] rounded-full flex items-center justify-center">
                    <i className="ri-question-line text-white"></i>
                  </div>
                  {category.title}
                </h2>

                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const globalIndex = catIndex * 10 + faqIndex;
                    const isOpen = openIndex === globalIndex;

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
                          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        >
                          <span className="font-bold text-gray-900 text-lg">{faq.question}</span>
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
                          className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'
                            }`}
                        >
                          <div className="px-6 pb-5">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-[#17a2b8]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-question-answer-line text-[#17a2b8] text-4xl"></i>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              لم تجد إجابة سؤالك؟
            </h2>
            <p className="text-gray-600 mb-8">
              لا تتردد في التواصل معنا مباشرة. فريقنا جاهز للإجابة على جميع استفساراتك
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#17a2b8] text-white rounded-full font-medium hover:bg-[#138496] transition-colors whitespace-nowrap cursor-pointer"
              >
                تواصل معنا
                <i className="ri-arrow-left-line"></i>
              </Link>
              <a
                href="https://wa.me/966508277780"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#25D366] text-white rounded-full font-medium hover:bg-[#128C7E] transition-colors whitespace-nowrap cursor-pointer"
              >
                <i className="ri-whatsapp-line text-xl"></i>
                واتساب
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Animation Styles */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </>
  );
}
