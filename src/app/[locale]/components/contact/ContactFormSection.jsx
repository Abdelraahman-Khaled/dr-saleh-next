'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function ContactFormSection() {
    const t = useTranslations('contactPage.form');
    const tInfo = useTranslations('contactPage.info');
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
            setErrorMsg(t('validation.messageTooLong'));
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone_number: formData.phone_number,
                    msg_subject: formData.msg_subject,
                    message: formData.message,
                }),
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
                throw new Error(t('feedback.error'));
            }
        } catch (err) {
            console.error('Form submission failed:', err);
            setErrorMsg(t('feedback.errorDetails'));
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: 'ri-phone-line',
            title: tInfo('phone.title'),
            value: tInfo('phone.value'),
            link: `tel:${tInfo('phone.value').replace(/\s/g, '')}`,
            color: 'bg-[#17a2b8]',
        },
        {
            icon: 'ri-whatsapp-line',
            title: tInfo('whatsapp.title'),
            value: tInfo('whatsapp.value'),
            link: `https://wa.me/${tInfo('whatsapp.value').replace(/\s/g, '').replace('+', '')}`,
            color: 'bg-green-500',
        },
        {
            icon: 'ri-mail-line',
            title: tInfo('email.title'),
            value: tInfo('email.value'),
            link: `mailto:${tInfo('email.value')}`,
            color: 'bg-orange-500',
        },
        {
            icon: 'ri-map-pin-line',
            title: tInfo('location.title'),
            value: tInfo('location.value'),
            link: '#',
            color: 'bg-red-500',
        },
        {
            icon: 'ri-time-line',
            title: tInfo('workingHours.title'),
            value: tInfo('workingHours.value'),
            link: '#',
            color: 'bg-purple-500',
        },
    ];

    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">{t('title')}</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {t('description')}
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8"
                    >
                        {submitted ? (
                            <div className="text-center py-12">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <i className="ri-check-line text-green-500 text-4xl"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('feedback.success')}</h3>
                                <p className="text-gray-600 mb-6">{t('feedback.successDetails')}</p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="text-[#17a2b8] font-medium hover:underline cursor-pointer"
                                >
                                    {t('feedback.sendAnother')}
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
                                            placeholder={t('labels.name')}
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
                                            placeholder={t('labels.email')}
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
                                            placeholder={t('labels.phone')}
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
                                            placeholder={t('labels.subject')}
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
                                        placeholder={t('labels.message')}
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
                                            {t('buttons.sending')}
                                        </>
                                    ) : (
                                        <>
                                            <i className="ri-send-plane-line"></i>
                                            {t('buttons.submit')}
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>

                    {/* Contact Info Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h3 className="text-xl font-bold text-gray-900 mb-6 font-heading">{tInfo('title')}</h3>
                        {contactInfo.map((item, index) => (
                            <motion.a
                                whileHover={{ scale: 1.02, x: 5 }}
                                transition={{ duration: 0.2 }}
                                key={index}
                                href={item.link}
                                target={item.link.startsWith('http') ? '_blank' : '_self'}
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all group cursor-pointer border border-gray-100"
                            >
                                <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center flex-shrink-0 shadow-sm`}>
                                    <i className={`${item.icon} text-white text-xl`}></i>
                                </div>
                                <div>
                                    <span className="text-gray-500 text-sm block">{item.title}</span>
                                    <span className="text-gray-900 font-medium text-sm" dir={item.link.startsWith('tel') || item.link.startsWith('https://wa') ? 'ltr' : 'rtl'}>
                                        {item.value}
                                    </span>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
