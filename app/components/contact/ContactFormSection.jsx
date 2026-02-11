'use client';
import { useState } from 'react';

export default function ContactFormSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone_number: '',
        msg_subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg(null);
        setIsSubmitting(true);

        if (formData.message.length > 500) {
            setErrorMsg('الرسالة يجب أن تكون أقل من 500 حرف');
            setIsSubmitting(false);
            return;
        }

        try {
            const formBody = new URLSearchParams();
            formBody.append('name', formData.name);
            formBody.append('email', formData.email);
            formBody.append('phone_number', formData.phone_number);
            formBody.append('msg_subject', formData.msg_subject);
            formBody.append('message', formData.message);

            const response = await fetch('https://readdy.ai/api/form/d62fhvgr3m6fkobknsa0', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formBody.toString(),
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({
                    name: '',
                    email: '',
                    phone_number: '',
                    msg_subject: '',
                    message: '',
                });
            } else {
                throw new Error('فشل في الإرسال');
            }
        } catch (err) {
            console.error('Form submission failed:', err);
            setErrorMsg('حدث خطأ أثناء إرسال النموذج، يرجى المحاولة مرة أخرى.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: 'ri-phone-line',
            title: 'هاتف',
            value: '+966 50 827 7780',
            link: 'tel:+966508277780',
            color: 'bg-[#17a2b8]',
        },
        {
            icon: 'ri-whatsapp-line',
            title: 'واتساب',
            value: '+966 50 827 7780',
            link: 'https://wa.me/966508277780',
            color: 'bg-green-500',
        },
        {
            icon: 'ri-mail-line',
            title: 'بريد إلكتروني',
            value: 'support@drsalehalkhalaf.com',
            link: 'mailto:support@drsalehalkhalaf.com',
            color: 'bg-orange-500',
        },
        {
            icon: 'ri-map-pin-line',
            title: 'الموقع',
            value: 'عنوان العيادة',
            link: '#',
            color: 'bg-red-500',
        },
        {
            icon: 'ri-time-line',
            title: 'ساعات العمل',
            value: 'Sun - Thu: 9AM - 9PM',
            link: '#',
            color: 'bg-purple-500',
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">التواصل والمواعيد</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        إذا كنت تفكر في إجراء جراحة تجميلية أو ترميمية، فإن الخطوة الأولى هي استشارة طبية متخصصة.
                        فريقنا متاح لمساعدتك في حجز المواعيد والإجابة عن الاستفسارات العامة.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Contact Form */}
                    <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8">
                        {submitted ? (
                            <div className="text-center py-12">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <i className="ri-check-line text-green-500 text-4xl"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">تم إرسال رسالتك بنجاح!</h3>
                                <p className="text-gray-600 mb-6">سنتواصل معك قريباً</p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="text-[#17a2b8] font-medium hover:underline cursor-pointer"
                                >
                                    إرسال رسالة أخرى
                                </button>
                            </div>
                        ) : (
                            <form
                                id="contactForm"
                                data-readdy-form
                                onSubmit={handleSubmit}
                                className="space-y-6"
                            >
                                {errorMsg && (
                                    <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm text-center">
                                        {errorMsg}
                                    </div>
                                )}

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17a2b8] focus:border-transparent text-sm"
                                            placeholder="الاسم"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17a2b8] focus:border-transparent text-sm"
                                            placeholder="البريد الإلكتروني"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <input
                                            type="tel"
                                            name="phone_number"
                                            required
                                            value={formData.phone_number}
                                            onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17a2b8] focus:border-transparent text-sm"
                                            placeholder="رقم الهاتف"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            name="msg_subject"
                                            required
                                            value={formData.msg_subject}
                                            onChange={(e) => setFormData({ ...formData, msg_subject: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17a2b8] focus:border-transparent text-sm"
                                            placeholder="الموضوع"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <textarea
                                        name="message"
                                        rows={6}
                                        required
                                        maxLength={500}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17a2b8] focus:border-transparent text-sm resize-none"
                                        placeholder="اكتب رسالتك هنا..."
                                    />
                                    <p className="text-gray-400 text-xs mt-1 text-left">{formData.message.length}/500</p>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="inline-flex items-center gap-2 px-8 py-3 bg-[#17a2b8] text-white rounded-lg font-medium hover:bg-[#138496] transition-colors disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <i className="ri-loader-4-line animate-spin"></i>
                                            جاري الإرسال...
                                        </>
                                    ) : (
                                        <>
                                            <i className="ri-send-plane-line"></i>
                                            إرسال رسالة
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Contact Info Sidebar */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">معلومات التواصل</h3>
                        {contactInfo.map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                target={item.link.startsWith('http') ? '_blank' : '_self'}
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all group cursor-pointer"
                            >
                                <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                                    <i className={`${item.icon} text-white text-xl`}></i>
                                </div>
                                <div>
                                    <span className="text-gray-500 text-sm block">{item.title}</span>
                                    <span className="text-gray-900 font-medium text-sm" dir={item.link.startsWith('tel') || item.link.startsWith('https://wa') ? 'ltr' : 'rtl'}>
                                        {item.value}
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
