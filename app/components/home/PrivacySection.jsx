export default function PrivacySection() {
    return (
        <section className="py-20 bg-gradient-to-br from-[#17a2b8] to-[#138496] relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center text-white">
                    <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-6">
                        الخصوصية
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                        خصوصيتك وأمان معلوماتك الشخصية مهمان لدينا.
                    </h2>
                    <p className="text-lg leading-relaxed opacity-95">
                        جميع المعلومات الشخصية التي تقدمها عبر هذا الموقع تُعامل بسرية تامة وتُستخدم فقط لأغراض الاستشارة والرعاية الطبية.
                    </p>
                </div>
            </div>
        </section>
    );
}
