import React from 'react';
import StackedCardsHero from "../components/sections/StackedCardsHero.jsx";
import StorySection from "../components/sections/StorySection.jsx";
import HighlightCardsSection from "../components/sections/HighlightCardsSection.jsx";
import LegalProfileSection from "../components/sections/LegalProfileSection.jsx";
import NumberedListSection from "../components/sections/NumberedListSection.jsx";
import CtaBandSection from "../components/sections/CtaBandSection.jsx";
import {ArrowButton} from "../components/sections/ui.jsx";
import SEOManager from "../components/SEO/SEOManager.jsx";
import {COMPANY, seoConfigs} from "./seo-configs.js";
import {useI18n} from "../i18n";

// Trang Giới thiệu: định vị → triết lý kinh doanh → giá trị cốt lõi → hồ sơ pháp lý → cam kết.
const About = () => {
    const {t} = useI18n();
    const hero = 'corporate.about.hero';

    return (
        <div>
            <SEOManager seo={seoConfigs.about} />

            <StackedCardsHero
                badge={t(`${hero}.badge`)}
                titleLine1={t(`${hero}.titleLine1`)}
                titleLine2={t(`${hero}.titleLine2`)}
                description={t(`${hero}.description`)}
                cards={[
                    {title: t(`${hero}.cards.vision`), description: t('corporate.home.about.vision')},
                    {title: t(`${hero}.cards.mission`), description: t('corporate.home.about.mission')},
                    {title: t(`${hero}.cards.values`), description: t(`${hero}.cards.valuesDescription`)}
                ]}
                actions={
                    <>
                        <ArrowButton to="/contact" variant="gradient">{t('corporate.cta.partner')}</ArrowButton>
                        <ArrowButton href={COMPANY.profilePdf} download icon="download">{t('corporate.cta.profile')}</ArrowButton>
                    </>
                }
            />

            <StorySection
                badge={t('corporate.about.story.badge')}
                titleLine1={t('corporate.about.story.titleLine1')}
                titleLine2={t('corporate.about.story.titleLine2')}
                subtitle={t('corporate.about.story.subtitle')}
                paragraphs={t('corporate.about.story.paragraphs')}
                image="/assets/images/trust.webp"
                imageAlt={t('corporate.about.story.imageAlt')}
                insetContent={<img src="/assets/images/brand/activate-mark.svg" alt="Activate" className="w-full h-full object-contain" />}
            />

            <HighlightCardsSection
                badge={t('corporate.home.values.badge')}
                title={t('corporate.home.values.title')}
                items={t('corporate.home.values.items')}
                numbered
            />

            <LegalProfileSection />

            <NumberedListSection
                className="pb-[60px] lg:pb-[90px]"
                badge={t('corporate.fields.shared.commitments.badge')}
                title={t('corporate.fields.shared.commitments.title')}
                items={t('corporate.fields.shared.commitments.items')}
            />

            <CtaBandSection />
        </div>
    );
};

export default About;
