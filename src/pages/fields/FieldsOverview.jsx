import React from 'react';
import {Network} from 'lucide-react';
import FeatureHero from '../../components/sections/FeatureHero.jsx';
import FieldsShowcaseSection from '../../components/sections/FieldsShowcaseSection.jsx';
import ProcessSection from '../../components/sections/ProcessSection.jsx';
import CtaBandSection from '../../components/sections/CtaBandSection.jsx';
import {ArrowButton} from '../../components/sections/ui.jsx';
import {scrollToSection} from '../../components/sections/helpers.js';
import SEOManager from '../../components/SEO/SEOManager.jsx';
import {generateBreadcrumbSchema} from '../../components/SEO/schemas.js';
import {BUSINESS_FIELDS, FIELDS_OVERVIEW_PATH} from '../../data/businessFields.js';
import {seoConfigs} from '../seo-configs.js';
import {useI18n} from '../../i18n';

// Trang "Lĩnh vực hoạt động": tổng quan 3 trụ cột, mỗi trụ cột dẫn sang trang riêng.
const FieldsOverview = () => {
    const {t} = useI18n();
    const breadcrumbs = [
        {name: t('common.home'), url: '/'},
        {name: t('corporate.nav.fields'), url: FIELDS_OVERVIEW_PATH}
    ];

    return (
        <div>
            <SEOManager seo={seoConfigs.fields.overview} structuredData={[generateBreadcrumbSchema(breadcrumbs)]} />

            <FeatureHero
                eyebrow={t('corporate.home.hero.badge')}
                titleLine1={t('corporate.fieldsPage.hero.titleLine1')}
                titleLine2={t('corporate.fieldsPage.hero.titleLine2')}
                description={t('corporate.fieldsPage.hero.description')}
                bullets={BUSINESS_FIELDS.map((field) => t(`corporate.fields.${field.key}.name`))}
                image="/assets/images/about-2.webp"
                icon={Network}
                actions={
                    <>
                        <ArrowButton onClick={() => scrollToSection('linh-vuc')} variant="gradient">{t('corporate.cta.learnMore')}</ArrowButton>
                        <ArrowButton to="/contact">{t('corporate.cta.partner')}</ArrowButton>
                    </>
                }
            />

            <FieldsShowcaseSection id="linh-vuc" />

            <ProcessSection
                title={t('corporate.home.process.title')}
                subtitle={t('corporate.home.process.subtitle')}
                steps={t('corporate.home.process.steps')}
            />

            <CtaBandSection />
        </div>
    );
};

export default FieldsOverview;
