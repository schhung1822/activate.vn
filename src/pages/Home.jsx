import React from 'react';
import {Scale, ShieldCheck, Warehouse} from 'lucide-react';
import HeroSection from "../components/home/HeroSection.jsx";
import InfiniteLogoSlider from "../components/home/InfiniteLogoSlider.jsx";
import HomeClientsPartnersSection from "../components/home/HomeClientsPartnersSection.jsx";
import SplitIntroSection from "../components/sections/SplitIntroSection.jsx";
import FieldsShowcaseSection from "../components/sections/FieldsShowcaseSection.jsx";
import HighlightCardsSection from "../components/sections/HighlightCardsSection.jsx";
import BentoSection from "../components/sections/BentoSection.jsx";
import ProcessSection from "../components/sections/ProcessSection.jsx";
import PartnerFormSection from "../components/sections/PartnerFormSection.jsx";
import {ArrowButton} from "../components/sections/ui.jsx";
import {COMPANY, seoConfigs} from "./seo-configs.js";
import SEOManager from "../components/SEO/SEOManager.jsx";
import {generateBreadcrumbSchema, organizationSchema, websiteSchema} from "../components/SEO/schemas.js";
import {useI18n} from "../i18n";

// Trang chủ hồ sơ doanh nghiệp: Hero → Băng logo đối tác → Giới thiệu & triết lý → 3 lĩnh vực → Giá trị cốt lõi
// → Hạ tầng & vận hành → Quy trình hợp tác → Khách hàng & đối tác → Cổng thông tin đối tác.
const Home = () => {
    const {t} = useI18n();
    const breadcrumbs = [{name: t('common.home'), url: '/'}];
    const ops = 'corporate.home.operations';

    return (
        <>
            <SEOManager
                seo={seoConfigs.home}
                structuredData={[organizationSchema, websiteSchema, generateBreadcrumbSchema(breadcrumbs)]}
            />
            <div className="home-page">
                <HeroSection />
                {/* Băng logo đối tác thật của Activate */}
                <InfiniteLogoSlider />

                <SplitIntroSection
                    id="gioi-thieu"
                    badge={t('corporate.home.about.badge')}
                    titleLine1={t('corporate.home.about.titleLine1')}
                    titleLine2={t('corporate.home.about.titleLine2')}
                    description={t('corporate.home.about.description')}
                    image="/assets/images/about-2.webp"
                    imageAlt={t('corporate.home.about.titleLine1')}
                    highlights={[
                        {label: t('corporate.home.about.visionLabel'), text: t('corporate.home.about.vision')},
                        {label: t('corporate.home.about.missionLabel'), text: t('corporate.home.about.mission')}
                    ]}
                    actions={<ArrowButton to="/about">{t('corporate.cta.aboutMore')}</ArrowButton>}
                />

                <FieldsShowcaseSection id="linh-vuc" />

                <HighlightCardsSection
                    badge={t('corporate.home.values.badge')}
                    title={t('corporate.home.values.title')}
                    items={t('corporate.home.values.items')}
                    numbered
                />

                <BentoSection
                    id="van-hanh"
                    className="pb-[60px] lg:pb-[90px]"
                    titleLine1={t(`${ops}.titleLine1`)}
                    titleHighlight={t(`${ops}.titleHighlight`)}
                    subtitle={t(`${ops}.subtitle`)}
                    intro={t(`${ops}.intro`)}
                    badges={t(`${ops}.badges`)}
                    image="/assets/images/about-1.webp"
                    imageAlt={t(`${ops}.imageAlt`)}
                    cards={[
                        {...t(`${ops}.warehouse`), icon: Warehouse},
                        {...t(`${ops}.quality`), icon: ShieldCheck},
                        {...t(`${ops}.compliance`), icon: Scale}
                    ]}
                    stat={{
                        label: t('corporate.fields.shared.why.cards.taxLabel'),
                        value: COMPANY.taxId,
                        caption: t('corporate.fields.shared.why.cards.taxCaption')
                    }}
                />

                <ProcessSection
                    className="pb-[60px] lg:pb-[90px]"
                    title={t('corporate.home.process.title')}
                    subtitle={t('corporate.home.process.subtitle')}
                    steps={t('corporate.home.process.steps')}
                />

                {/* Khách hàng & đối tác chiến lược */}
                <HomeClientsPartnersSection />

                <PartnerFormSection id="doi-tac" />
            </div>
        </>
    );
};

export default Home;
