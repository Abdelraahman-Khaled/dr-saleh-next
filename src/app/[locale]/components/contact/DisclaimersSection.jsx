import { useTranslations } from 'next-intl';

export default function DisclaimersSection() {
    const t = useTranslations('contactPage.disclaimers');
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Medical Disclaimer */}
                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <i className="ri-error-warning-line text-amber-600 text-2xl"></i>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-3">{t('medical.title')}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {t('medical.content')}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Privacy Notice */}
                    <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <i className="ri-shield-user-line text-green-600 text-2xl"></i>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-3">{t('privacy.title')}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {t('privacy.content')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
