import React from 'react';
import { useI18n } from '../../i18n';
import {Clock, TrendingUp, Package, Gift, Percent, CreditCard, ChevronRight, ArrowUpRight} from 'lucide-react';
import {Link} from "react-router-dom";

const OffersSection = () => {
    const { t, tm } = useI18n();
    // Con số ưu đãi giữ trong code, phần chữ lấy từ từ điển
    const commitmentOffers = tm('shared.offers.commitment.durations').map((duration, index) => ({
        duration,
        discount: ['5%', '10%', '15%'][index],
        bonus: index === 2 ? t('shared.offers.commitment.bonus') : null
    }));

    const growthOffers = tm('shared.offers.growth.budgets').map((budget, index) => ({
        budget,
        cashback: ['2%', '5%', '8%'][index],
        method: t('shared.offers.growth.method')
    }));

    const comboOffers = tm('shared.offers.combo.items').map((services, index) => ({
        services,
        discount: ['3%', '5%'][index]
    }));

    const scrollToContact = (e) => {
        e.preventDefault();
        const contactSection = document.getElementById('lilcontact');
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <section className="bg-gradient-to-b from-black via-black to-[#2D0F3B] py-[60px] lg:py-[90px]">
            <div className="md:max-w-[700px] lg:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-4 lg:mb-8">
                    {/* Badge */}
                    <div className="inline-flex items-center justify-center mb-2">
                        <span className=" text-[#ee3e99] rounded-full text-[11px] lg:text-[13px] font-medium font-archivo tracking-[0.4rem] uppercase">
                            Facebook ads
                        </span>
                    </div>
                    <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-archivo font-bold text-white uppercase leading-[1.45] mb-1">
                        {t('shared.offers.title')}
                    </h2>
                </div>

                {/* Offers Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-2 bg-black rounded-2xl">
                    {/* Gói cam kết */}
                    <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-lg p-8 border-2 border-white/10 transition-all duration-500 group hover:bg-gradient-to-br hover:from-white/8 hover:to-white/15 hover:shadow-2xl hover:shadow-white/5 hover:-translate-y-1">
                        <div className="text-center mb-6">
                            <div className="inline-flex items-center justify-center w-14 h-14 bg-[#ee3e99] rounded-xl mb-4 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-[#ee3e99]/30">
                                <Clock className="w-8 h-8 text-white transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <h3 className="text-[18px] lg:text-[24px] font-medium text-white transition-colors duration-300 group-hover:text-[#ee3e99]">{t('shared.offers.commitment.title')}</h3>
                            <p className="text-gray-300 text-sm transition-colors duration-300 group-hover:text-gray-300">{t('shared.offers.commitment.subtitle')}</p>
                        </div>

                        <div className="space-y-2">
                            {commitmentOffers.map((offer, index) => (
                                <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 offer-item">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-white text-[13px] lg:text-[15px] font-medium transition-colors duration-300">{offer.duration}</span>
                                        <span className="text-[#ee3e99] text-[13px] lg:text-[15px] font-medium transition-all duration-300 group-hover:text-[#f7a8cf]">{t('shared.offers.discountValue', {value: offer.discount})}</span>
                                    </div>
                                    {offer.bonus && (
                                        <div className="flex items-start gap-2 mt-3 pt-3 border-t border-white/10 transition-colors duration-300">
                                            <Gift className="w-4 h-4 text-[#ee3e99] mt-0.5 flex-shrink-0 transition-colors duration-300 group-hover:text-[#f7a8cf]" />
                                            <p className="text-[13px] lg:text-[14px] text-gray-200 transition-colors duration-300 group-hover:text-gray-100">{offer.bonus}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Gói tăng trưởng */}
                    <div className="bg-[#ee3e99] rounded-lg p-8 border-2 border-white/70 transition-all duration-500 group hover:shadow-2xl hover:shadow-white/5 hover:-translate-y-1">
                        <div className="text-center mb-6">
                            <div className="inline-flex items-center justify-center w-14 h-14 bg-black rounded-xl mb-4 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-[#ee3e99]/30">
                                <TrendingUp className="w-8 h-8 text-white transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <h3 className="text-[18px] lg:text-[24px] font-medium text-black transition-colors duration-300">{t('shared.offers.growth.title')}</h3>
                            <p className="text-gray-700 text-sm transition-colors duration-300">{t('shared.offers.growth.subtitle')}</p>
                        </div>
                        <div className="p-2 bg-white/35 backdrop-blur-2xl rounded-xl">
                            <div className="space-y-2">
                                <div className="grid grid-cols-3 gap-2 text-[13px] lg:text-[15px] font-medium text-black transition-colors duration-300">
                                    <span className="text-center">{t('shared.offers.growth.budgetLabel')}</span>
                                    <span className="">{t('shared.offers.growth.cashbackLabel')}</span>
                                    <span className="">{t('shared.offers.growth.methodLabel')}</span>
                                </div>
                                {growthOffers.map((offer, index) => (
                                    <div key={index} className="bg-[#1f1f1f] rounded-xl p-3 border border-[#363636] transition-all duration-300">
                                        <div className="grid grid-cols-3 gap-2 items-center">
                                            <div className="flex items-center ">
                                                <ChevronRight className="w-4 h-4 text-white transition-colors duration-300" />
                                                <span className="text-white font-medium text-[13px] lg:text-[15px] transition-colors duration-300">{offer.budget}</span>
                                            </div>
                                            <span className="text-white font-semibold text-[15px] lg:text-[18px] text-center transition-colors duration-300">{offer.cashback}</span>
                                            <div className="flex items-center">
                                                <span className="text-[11px] lg:text-[13px] text-white transition-colors duration-300">{offer.method}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Gói combo đa kênh */}
                    <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-lg p-8 border-2 border-white/10 transition-all duration-500 group hover:bg-gradient-to-br hover:from-white/8 hover:to-white/15 hover:shadow-2xl hover:shadow-white/5 hover:-translate-y-1">
                        <div className="text-center mb-6">
                            <div className="inline-flex items-center justify-center w-14 h-14 bg-[#ee3e99] rounded-xl mb-4 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-[#ee3e99]/30">
                                <Package className="w-8 h-8 text-white transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <h3 className="text-[18px] lg:text-[24px] font-medium text-white transition-colors duration-300 group-hover:text-[#ee3e99]">{t('shared.offers.combo.title')}</h3>
                            <p className="text-gray-300 text-sm transition-colors duration-300 group-hover:text-gray-300">{t('shared.offers.combo.subtitle')}</p>
                        </div>

                        <div className="space-y-2">
                            <div className="grid grid-cols-2 gap-2 text-[13px] lg:text-[15px] font-medium text-white  transition-colors duration-300 group-hover:text-gray-300">
                                <span>{t('shared.offers.combo.countLabel')}</span>
                                <span className="text-right">{t('shared.offers.combo.discountLabel')}</span>
                            </div>
                            {comboOffers.map((offer, index) => (
                                <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-1">
                                            {index === 1 && <ChevronRight className="w-4 h-4 text-[#ee3e99] transition-colors duration-300 group-hover:text-[#f7a8cf]" />}
                                            <span className="text-white text-[14px] lg:text-[16px] transition-colors duration-300">{offer.services}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Percent className="w-4 h-4 text-[#ee3e99] transition-colors duration-300 group-hover:text-[#f7a8cf]" />
                                            <span className="text-[#ee3e99] font-semibold text-[14px] lg:text-[16px] transition-colors duration-300 group-hover:text-[#f7a8cf]">{t('shared.offers.discountValue', {value: offer.discount})}</span>
                                        </div>
                                    </div>
                                    <p className="text-[11px] lg:text-[13px] text-gray-200 text-right transition-colors duration-300 group-hover:text-gray-100">{t('shared.offers.totalCost')}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-8">
                    <p className="text-gray-100 mb-4 text-[15px] lg:text-[18px] transition-colors duration-300">
                        {t('shared.offers.footer')}
                    </p>
                    {/* Desktop CTA Button */}
                    <div className="flex justify-center items-center space-x-4">
                        <button
                            onClick={scrollToContact}
                            className="relative flex items-center space-x-3 pl-6 pr-1.5 py-1.5 bg-gradient-to-r from-[#6a4fdb] via-[#ee3e99] to-[#6a4fdb] text-[16px] text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-fuchsia-500/20 hover:scale-105 group animate-gradient-shift"
                            style={{
                                backgroundSize: '200% 200%'
                            }}
                        >
        <span className="">
            {t('shared.cta.partnerNow')}
        </span>
                            <div className="w-[2.5rem] h-[2.5rem] bg-black rounded-full flex items-center justify-center neu-shadow-xs transition-all duration-300">
                                <ArrowUpRight className="w-5 h-5 text-white transition-all duration-300 group-hover:rotate-12 group-hover:scale-105" strokeWidth={2.5}/>
                            </div>
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default OffersSection;