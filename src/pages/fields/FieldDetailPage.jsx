import React from 'react';
import {
    Anchor,
    BadgeCheck,
    ClipboardCheck,
    FileText,
    GraduationCap,
    Home as HomeIcon,
    Package,
    Search,
    Shirt,
    ShieldCheck,
    Store,
    UserCheck,
    Cpu
} from 'lucide-react';
import FeatureHero from '../../components/sections/FeatureHero.jsx';
import ScopeBand from '../../components/sections/ScopeBand.jsx';
import HighlightCardsSection from '../../components/sections/HighlightCardsSection.jsx';
import ModelsSection from '../../components/sections/ModelsSection.jsx';
import ProcessSection from '../../components/sections/ProcessSection.jsx';
import BentoSection from '../../components/sections/BentoSection.jsx';
import NumberedListSection from '../../components/sections/NumberedListSection.jsx';
import PartnerFormSection from '../../components/sections/PartnerFormSection.jsx';
import {ArrowButton} from '../../components/sections/ui.jsx';
import {scrollToSection} from '../../components/sections/helpers.js';
import SEOManager from '../../components/SEO/SEOManager.jsx';
import {generateBreadcrumbSchema, generateServiceSchema} from '../../components/SEO/schemas.js';
import {FIELDS_OVERVIEW_PATH, getBusinessField} from '../../data/businessFields.js';
import {COMPANY, seoConfigs} from '../seo-configs.js';
import {useI18n} from '../../i18n';

// Icon cho 4 ô "phạm vi" của từng lĩnh vực (chữ lấy từ corporate.fields.<key>.scope.items)
const SCOPE_ICONS = {
    wholesale: [Package, HomeIcon, Shirt, Cpu],
    trade: [Search, FileText, ClipboardCheck, Anchor],
    agency: [UserCheck, BadgeCheck, GraduationCap, Store]
};

const FORM_ID = 'lien-he-hop-tac';

/** Trang chi tiết một lĩnh vực hoạt động - cùng một bố cục cho cả ba lĩnh vực. */
const FieldDetailPage = ({fieldKey}) => {
    const {t} = useI18n();
    const field = getBusinessField(fieldKey);
    const base = `corporate.fields.${fieldKey}`;
    const why = 'corporate.fields.shared.why';
    const seo = seoConfigs.fields[fieldKey];

    const breadcrumbs = [
        {name: t('common.home'), url: '/'},
        {name: t('corporate.nav.fields'), url: FIELDS_OVERVIEW_PATH},
        {name: t(`${base}.name`), url: field.path}
    ];

    return (
        <div>
            <SEOManager
                seo={seo}
                structuredData={[
                    generateServiceSchema({
                        serviceName: t(`${base}.name`),
                        serviceType: t(`${base}.label`),
                        description: seo.description,
                        url: field.path
                    }),
                    generateBreadcrumbSchema(breadcrumbs)
                ]}
            />

            <FeatureHero
                eyebrow={t(`${base}.label`)}
                titleLine1={t(`${base}.hero.titleLine1`)}
                titleLine2={t(`${base}.hero.titleLine2`)}
                description={t(`${base}.hero.description`)}
                bullets={t(`${base}.hero.bullets`)}
                image={field.image}
                imageAlt={t(`${base}.name`)}
                icon={field.icon}
                actions={
                    <>
                        <ArrowButton onClick={() => scrollToSection(FORM_ID)} variant="gradient">{t('corporate.cta.partner')}</ArrowButton>
                        <ArrowButton href={COMPANY.profilePdf} download icon="download">{t('corporate.cta.profile')}</ArrowButton>
                    </>
                }
            />

            <ScopeBand
                badge={t(`${base}.scope.badge`)}
                items={t(`${base}.scope.items`).map((label, index) => ({label, icon: SCOPE_ICONS[fieldKey][index]}))}
            />

            <HighlightCardsSection
                badge={t(`${base}.benefits.badge`)}
                title={t(`${base}.benefits.title`)}
                items={t(`${base}.benefits.items`)}
            />

            <ModelsSection
                badge={t(`${base}.models.badge`)}
                title={t(`${base}.models.title`)}
                items={t(`${base}.models.items`)}
                footer={
                    <ArrowButton onClick={() => scrollToSection(FORM_ID)} variant="gradient">{t('corporate.cta.sendProposal')}</ArrowButton>
                }
            />

            <ProcessSection title={t(`${base}.process.title`)} subtitle={t(`${base}.process.subtitle`)} steps={t(`${base}.process.steps`)} />

            <BentoSection
                className="pb-[60px] lg:pb-[90px]"
                titleLine1={t(`${why}.titleLine1`)}
                titleHighlight="Activate?"
                subtitle={t(`${why}.subtitle`)}
                intro={t(`${why}.intro`)}
                badges={t(`${why}.badges`)}
                image="/assets/images/tien-phong.webp"
                cards={[
                    {...t(`${why}.cards.legal`), icon: ShieldCheck},
                    t(`${why}.cards.quality`),
                    t(`${why}.cards.contact`)
                ]}
                stat={{label: t(`${why}.cards.taxLabel`), value: COMPANY.taxId, caption: t(`${why}.cards.taxCaption`)}}
            />

            <NumberedListSection
                className="pb-[60px] lg:pb-[90px]"
                badge={t('corporate.fields.shared.commitments.badge')}
                title={t('corporate.fields.shared.commitments.title')}
                items={t('corporate.fields.shared.commitments.items')}
            />

            <PartnerFormSection id={FORM_ID} />
        </div>
    );
};


export default FieldDetailPage;
