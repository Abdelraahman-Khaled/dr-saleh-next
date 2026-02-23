import { useTranslations } from 'next-intl';

export default function AcademicResearchSection() {
    const t = useTranslations('aboutPage.academic');

    const academicRoles = [
        t('leadership.roles.r1'),
        t('leadership.roles.r2'),
        t('leadership.roles.r3'),
        t('leadership.roles.r4'),
        t('leadership.roles.r5'),
    ];

    const researchList = [
        t('research.items.i1'),
        t('research.items.i2'),
        t('research.items.i3'),
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Academic Leadership */}
                    <div className="bg-gradient-to-br from-[#17a2b8]/5 to-[#17a2b8]/10 rounded-3xl p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-[#17a2b8] rounded-full flex items-center justify-center">
                                <i className="ri-building-line text-white text-xl"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">{t('leadership.title')}</h3>
                                <span className="text-[#17a2b8] text-sm">{t('leadership.tagline')}</span>
                            </div>
                        </div>
                        <p className="text-gray-600 mb-6">
                            {t('leadership.description')}
                        </p>
                        <ul className="space-y-3">
                            {academicRoles.map((role, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <i className="ri-arrow-left-s-line text-[#17a2b8] mt-1"></i>
                                    <span className="text-gray-700">{role}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Research */}
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-[#17a2b8] rounded-full flex items-center justify-center">
                                <i className="ri-microscope-line text-white text-xl"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">{t('research.title')}</h3>
                                <span className="text-[#17a2b8] text-sm">{t('research.tagline')}</span>
                            </div>
                        </div>
                        <p className="text-gray-600 mb-6">
                            {t('research.description')}
                        </p>
                        <ul className="space-y-3 mb-6">
                            {researchList.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <i className="ri-file-text-line text-[#17a2b8] mt-1"></i>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-gray-500 text-sm border-t border-gray-200 pt-4">
                            {t('research.footer')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
