
import Link from 'next/link';
import ScrollTicker from '../components/home/ScrollingTicker';

export default function PatientJourneyPage() {
  const journeySteps = [
    {
      number: 1,
      title: 'حجز الاستشارة',
      stage: 'المرحلة 1',
      image: '/patient/1.jpg',
      description: 'تبدأ الرحلة بالتواصل مع العيادة لحجز موعد استشارة أولية. خلال هذه المرحلة:',
      icon: 'ri-calendar-check-line',
      details: [
        'يتم الاستماع بعناية لاحتياجات المريض وتوقعاته',
        'الإجابة على جميع الأسئلة والاستفسارات',
        'شرح مبدئي للإجراءات الممكنة وما يمكن توقعه',
        'توفير بيئة مريحة تشجع على الحوار الصادق دون ضغط',
      ],
    },
    {
      number: 2,
      title: 'التقييم الطبي الشامل',
      stage: 'المرحلة 2',
      image: '/patient/2.jpg',
      description: 'في موعد الاستشارة، يقوم د. صالح بإجراء تقييم طبي دقيق يشمل:',
      icon: 'ri-stethoscope-line',
      details: [
        'مراجعة التاريخ الصحي والحالة العامة',
        'تقييم تشريحي دقيق مرتبط بالإجراء المطلوب',
        'فهم أهداف المريض من العلاج',
        'مناقشة التوقعات الواقعية والنتائج الممكنة',
        'توضيح الخيارات الطبية المناسبة بناءً على العلم والخبرة',
      ],
      note: 'الشفافية هنا عنصر أساسي، لأن القرار الطبي الصحيح يبدأ من فهم كامل للحالة.',
    },
    {
      number: 3,
      title: 'وضع الخطة العلاجية المخصّصة',
      stage: 'المرحلة 3',
      image: '/patient/3.jpg',
      description: 'بعد التقييم، يتم بناء خطة علاجية فردية ومتكاملة:',
      icon: 'ri-file-list-3-line',
      details: [
        'مصممة خصيصًا وفق حالة المريض الصحية',
        'متوافقة مع المعايير الطبية الآمنة',
        'توضّح نوع الإجراء، مراحله، ومدته',
        'شرح الفوائد والمخاطر المحتملة بوضوح',
        'الإجابة على أي تساؤلات قبل اتخاذ القرار',
      ],
    },
    {
      number: 4,
      title: 'الإجراء الطبي',
      stage: 'المرحلة 4',
      image: '/patient/4.jpg',
      description: 'يتم تنفيذ الإجراء الطبي:',
      icon: 'ri-surgical-mask-line',
      details: [
        'وفق أعلى معايير السلامة والجودة',
        'باستخدام تقنيات حديثة ومعتمدة',
        'في بيئة طبية مجهّزة بالكامل',
        'مع عناية دقيقة بكل التفاصيل لضمان أفضل نتيجة ممكنة',
      ],
      note: 'راحة المريض وسلامته هي الأولوية القصوى في هذه المرحلة.',
    },
    {
      number: 5,
      title: 'المتابعة بعد العلاج',
      stage: 'المرحلة 5',
      image: '/patient/5.jpg',
      description: 'لا تنتهي الرحلة بانتهاء الإجراء، بل تبدأ مرحلة المتابعة:',
      icon: 'ri-heart-pulse-line',
      details: [
        'زيارات متابعة منتظمة حسب الحالة',
        'مراقبة التعافي والتأكد من سلامة النتائج',
        'تقديم إرشادات واضحة للعناية بعد الإجراء',
        'التعامل السريع مع أي ملاحظات أو استفسارات',
      ],
    },
    {
      number: 6,
      title: 'الدعم المستمر',
      stage: 'المرحلة 6',
      image: '/patient/6.jpg',
      description: 'نؤمن بأن الرعاية الطبية الحقيقية مستمرة:',
      icon: 'ri-customer-service-2-line',
      details: [
        'إمكانية التواصل مع الفريق الطبي عند الحاجة',
        'دعم طبي ونفسي يضمن راحة المريض',
        'متابعة طويلة الأمد لتحقيق أفضل النتائج الممكنة',
      ],
      note: 'لأن اهتمامنا بك لا يتوقف عند انتهاء العلاج.',
    },
  ];

  const whyChooseUs = [
    {
      number: '01',
      text: 'خبرة واسعة في الجراحة التجميلية والترميمية',
    },
    {
      number: '02',
      text: 'فهم عميق لأنواع الندبات وسلوك الجلد',
    },
    {
      number: '03',
      text: 'منهج علمي واقعي يركز على التحسن وليس الوعود غير الدقيقة',
    },
    {
      number: '04',
      text: 'احترام طبيعة الجلد وهوية المريض',
    },
    {
      number: '05',
      text: 'متابعة دقيقة وطويلة الأمد بعد الإجراء',
    },
  ];

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Patient%20care%20journey%20concept%20with%20warm%20welcoming%20medical%20environment%20showing%20pathway%20steps%20consultation%20room%20elegant%20teal%20and%20white%20color%20scheme%20professional%20healthcare%20setting%20with%20soft%20lighting%20and%20modern%20clean%20aesthetic&width=1920&height=600&seq=patient-journey-hero-new-1&orientation=landscape"
            alt="رحلة المريض"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#17a2b8]/80 via-[#17a2b8]/70 to-[#138496]/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 pt-32 pb-16">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">رحلة المريض مع د. صالح</h1>
            <div className="flex items-center justify-center gap-2 text-white/90">
              <Link href="/" className="hover:text-white transition-colors">الرئيسية</Link>
              <span>/</span>
              <span>رحلة المريض مع د. صالح</span>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Ticker */}
      <ScrollTicker />

      {/* Intro Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border-r-4 border-[#17a2b8]">
              <p className="text-gray-700 text-lg leading-relaxed">
                نؤمن بأن تجربة المريض لا تقتصر على الإجراء الطبي فقط، بل تبدأ من أول تواصل وتستمر حتى تحقيق النتائج المرجوة. لذلك صُمّمت رحلة المريض مع د. صالح لتكون واضحة، منظمة، وإنسانية، مع التركيز على الأمان، الفهم، والاحترام الكامل لاحتياجات كل مريض.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#17a2b8]/10 text-[#17a2b8] rounded-full text-sm font-semibold mb-4">
              الرحلة
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">خطوات رحلة المريض</h2>
          </div>

          <div className="max-w-6xl mx-auto">
            {journeySteps.map((step, index) => (
              <div key={step.number} className="relative mb-12 last:mb-0">
                {/* Connector Line */}
                {index < journeySteps.length - 1 && (
                  <div className="hidden lg:block absolute right-1/2 top-full w-1 h-12 bg-gradient-to-b from-[#17a2b8] to-[#17a2b8]/30 transform translate-x-1/2"></div>
                )}

                <div className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <div className="w-full lg:w-2/5">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-64 lg:h-80 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#17a2b8]/60 to-transparent"></div>
                      <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2">
                        <span className="text-[#17a2b8] font-bold text-lg">{step.stage}</span>
                      </div>
                    </div>
                  </div>

                  {/* Step Number Circle */}
                  <div className="hidden lg:flex flex-shrink-0 items-center justify-center">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#17a2b8] to-[#138496] rounded-full flex items-center justify-center shadow-xl z-10 relative">
                        <span className="text-white text-3xl font-bold">{step.number}</span>
                      </div>
                      <div className="absolute inset-0 bg-[#17a2b8] rounded-full blur-xl opacity-30 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="w-full lg:w-2/5">
                    <Link href="/contact" className="block h-full cursor-pointer">
                      <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow border border-gray-100">
                        {/* Mobile Step Number */}
                        <div className="lg:hidden flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#17a2b8] to-[#138496] rounded-full flex items-center justify-center">
                            <span className="text-white text-xl font-bold">{step.number}</span>
                          </div>
                          <span className="text-[#17a2b8] font-semibold">{step.stage}</span>
                        </div>

                        <div className="flex items-start gap-4 mb-6">
                          <div className="w-14 h-14 bg-[#17a2b8]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                            <i className={`${step.icon} text-[#17a2b8] text-2xl`}></i>
                          </div>
                          <div>
                            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                              <div className="w-6 h-6 bg-[#17a2b8] rounded-full flex items-center justify-center flex-shrink-0">
                                <i className="ri-check-line text-white text-xs"></i>
                              </div>
                              <span className="text-gray-700 text-sm">{detail}</span>
                            </div>
                          ))}
                        </div>

                        {step.note && (
                          <div className="mt-4 bg-[#17a2b8]/5 border-r-4 border-[#17a2b8] rounded-xl p-4">
                            <div className="flex items-start gap-3">
                              <i className="ri-information-line text-[#17a2b8] text-xl mt-0.5"></i>
                              <p className="text-gray-600 text-sm">{step.note}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-[#17a2b8] to-[#138496] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">لماذا تختار د. صالح؟</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all border border-white/20"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl font-bold text-white/30">{item.number}</span>
                  <div className="flex items-center gap-2 pt-2">
                    <i className="ri-check-double-line text-[#4ade80] text-xl"></i>
                    <span className="text-white font-medium">{item.text}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Quote */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 relative">
              <div className="absolute top-6 right-6 text-[#17a2b8]/20">
                <i className="ri-double-quotes-r text-8xl"></i>
              </div>
              <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 relative z-10">
                النجاح في تصحيح الندبات لا يعني اختفاءها، بل أن تصبح أقل وضوحًا، أكثر مرونة، وأكثر انسجامًا مع الجلد.
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#17a2b8]/10 rounded-full flex items-center justify-center">
                  <i className="ri-user-3-line text-[#17a2b8] text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">د. صالح الخلف</h4>
                  <p className="text-gray-500">جراح تجميل وترميم</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://dr-saaleh.netlify.app/assets/img/cta-bg.jpg"
            alt="احجز استشارة"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#17a2b8]/95 to-[#138496]/95"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-white text-sm font-semibold mb-4">
              احجز موعدك
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">احجز استشارة مع د. صالح</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              ابدأ باستشارة قائمة على المعرفة. الحوار الأولي هو الخطوة الأولى نحو خطة علاج آمنة ونتائج ذات معنى.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h4 className="text-white font-bold text-lg mb-6">كيفية الحجز</h4>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="tel:966508277780"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#17a2b8] rounded-2xl font-bold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
                >
                  <div className="w-10 h-10 bg-[#17a2b8]/10 rounded-full flex items-center justify-center">
                    <i className="ri-phone-line text-[#17a2b8] text-xl"></i>
                  </div>
                  <div className="text-right">
                    <span className="block text-xs text-gray-500">اتصل بنا</span>
                    <span className="block text-[#17a2b8]">الاتصال الهاتفي بالعيادة</span>
                  </div>
                </a>
                <a
                  href="https://wa.me/966508277780"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-2xl font-bold hover:bg-[#128C7E] transition-colors whitespace-nowrap cursor-pointer"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <i className="ri-whatsapp-line text-white text-xl"></i>
                  </div>
                  <div className="text-right">
                    <span className="block text-xs text-white/80">واتساب</span>
                    <span className="block">التواصل المباشر عبر واتساب</span>
                  </div>
                </a>
              </div>
              <p className="text-white/70 text-sm mt-6">
                سيقوم فريقنا بإرشادك إلى الخطوات التالية ومتطلبات التحضير.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Disclaimer */}
      <section className="py-12 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-lg border-r-4 border-amber-500">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-error-warning-line text-amber-600 text-2xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">إخلاء المسؤولية الطبية</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  المعلومات الواردة في هذا الموقع لأغراض تعليمية فقط ولا تُغني عن الاستشارة الطبية المباشرة. تختلف نتائج تصحيح الندبات من مريض لآخر بحسب نوع الجلد، طبيعة الندبة، والعوامل الطبية الفردية، ولا يمكن ضمان نتائج محددة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </>
  );
}
