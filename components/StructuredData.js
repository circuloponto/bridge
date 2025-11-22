'use client';

export default function StructuredData() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "BRIDGE Project",
        "alternateName": "Building Resilience in Digital Gender Equality",
        "url": "https://bridge-project.eu",
        "logo": "https://bridge-project.eu/logo.svg",
        "description": "O projeto BRIDGE oferece suporte legal, financeiro e logístico para cuidadores informais em Portugal.",
        "email": "info@bridge-project.eu",
        "telephone": "+351210000000",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Lisboa",
            "addressCountry": "PT"
        },
        "sameAs": [
            "https://facebook.com/bridge-project",
            "https://twitter.com/bridge-project",
            "https://linkedin.com/company/bridge-project"
        ],
        "areaServed": {
            "@type": "Country",
            "name": "Portugal"
        },
        "knowsAbout": [
            "Cuidadores Informais",
            "Apoio Legal",
            "Assistência Financeira",
            "Suporte Logístico",
            "Informal Caregivers",
            "Legal Support",
            "Financial Assistance"
        ]
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "BRIDGE Project",
        "url": "https://bridge-project.eu",
        "description": "Suporte legal, financeiro e logístico para cuidadores informais",
        "inLanguage": ["pt-PT", "en-GB", "fr-FR"],
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://bridge-project.eu/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
        </>
    );
}
