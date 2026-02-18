'use client';
import Link from 'next/link';
import { useTranslation } from '../../../context/useTranslation';

export default function AboutSection() {
    const t = useTranslation('home');
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-[#17a2b8] font-semibold text-sm mb-3 block">
                            الخبرات
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                            خبرة لا تُقاس بالزمن، بل بالحكم الطبي والمسؤولية
                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            لا تُقاس خبرة د. صالح الخلف بالعدد أو الزمن، بل بالحكم الطبي والمسؤولية —
                            مع الالتزام الدائم بمبدأ الثبات والجودة الذي يميز حلول الرعاية
                            الجراحية المتفوقة.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-[#17a2b8]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <i className="ri-user-smile-line text-[#17a2b8] text-xl"></i>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">جراحات تجميل الوجه</h3>
                                    <ul className="space-y-2 text-gray-600 text-sm">
                                        <li className="flex items-start gap-2">
                                            <i className="ri-check-line text-[#17a2b8] mt-1"></i>
                                            <span>تجميل الأنف الوظيفي والتجميلي</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <i className="ri-check-line text-[#17a2b8] mt-1"></i>
                                            <span>تجديد شباب الوجه وتقنيات شد الوجه</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <i className="ri-check-line text-[#17a2b8] mt-1"></i>
                                            <span>جراحة الجفون (العلوية والسفلية)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <i className="ri-check-line text-[#17a2b8] mt-1"></i>
                                            <span>تحديد الذقن وخط الفك</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <i className="ri-check-line text-[#17a2b8] mt-1"></i>
                                            <span>رفع الشفة ونقل الدهون للوجه</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-[#17a2b8]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <i className="ri-heart-pulse-line text-[#17a2b8] text-xl"></i>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">
                                        تجميل الأنف الوظيفي والترميمي
                                    </h3>
                                    <ul className="space-y-2 text-gray-600 text-sm">
                                        <li className="flex items-start gap-2">
                                            <i className="ri-check-line text-[#17a2b8] mt-1"></i>
                                            <span>انسداد الأنف الوظيفي</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <i className="ri-check-line text-[#17a2b8] mt-1"></i>
                                            <span>تشوهات الأنف بعد الإصابات</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <i className="ri-check-line text-[#17a2b8] mt-1"></i>
                                            <span>تجميل الأنف التصحيحي</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <i className="ri-check-line text-[#17a2b8] mt-1"></i>
                                            <span>التشوهات الخِلقية للأنف</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <Link
                            href="/contact"
                            className="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-[#17a2b8] text-white rounded-full font-medium hover:bg-[#138496] transition-colors whitespace-nowrap"
                        >
                            {t.about?.button || 'احجز استشارة'}
                            <i className="ri-calendar-check-line"></i>
                        </Link>
                    </div>

                    <div className="flex justify-end">
                        <div className="w-full max-w-md">
                            <img
                                src="/doctor/pic-24.jpeg"
                                alt="Doctor"
                                className="w-full h-auto rounded-3xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
