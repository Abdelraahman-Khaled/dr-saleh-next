import { useTranslations } from 'next-intl';

export default function SurgicalCareIntroSection() {
    const t = useTranslations('operationsPage.specialties.surgicalCare');
    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                        {t('heading')}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        {t('description')}
                    </p>
                    <a
                        href="https://wa.me/966508277780"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold hover:bg-[#20BA5A] transition-colors shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
                    >
                        <i className="ri-whatsapp-line text-xl"></i>
                        {t('whatsapp')}
                    </a>
                </div>
            </div>
        </section>
    );
}
