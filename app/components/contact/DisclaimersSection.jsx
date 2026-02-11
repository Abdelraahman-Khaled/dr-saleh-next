export default function DisclaimersSection() {
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
                                <h4 className="text-lg font-bold text-gray-900 mb-3">إخلاء المسؤولية الطبية</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    المعلومات الواردة في هذا الموقع هي لأغراض تعليمية فقط ولا تُغني عن الاستشارة الطبية المباشرة.
                                    تختلف نتائج العمليات الجراحية من مريض لآخر بحسب العوامل الطبية والتشريحية الفردية،
                                    ولا يمكن ضمان نتائج محددة.
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
                                <h4 className="text-lg font-bold text-gray-900 mb-3">إشعار الخصوصية</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    تُعامل جميع المعلومات الشخصية والطبية التي تتم مشاركتها عبر هذا الموقع بسرية تامة،
                                    ويتم التعامل معها وفقًا لأنظمة حماية البيانات المعمول بها.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
