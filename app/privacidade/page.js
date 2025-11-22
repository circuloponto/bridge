'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ParallaxBackground from '@/components/ParallaxBackground';
import { getTranslation } from '@/lib/i18n';
import { useLanguage } from '@/hooks/useLanguage';
import { Shield, Mail, Lock, Eye, UserCheck } from 'lucide-react';

export default function PrivacidadePage() {
  const [language, setLanguage] = useLanguage();
  const t = getTranslation(language);

  const sections = [
    {
      icon: Shield,
      title: language === 'pt' ? 'Proteção de Dados' : 'Data Protection',
      content: language === 'pt'
        ? 'O projeto BRIDGE está comprometido com a proteção da sua privacidade e dos seus dados pessoais. Esta política explica como tratamos as suas informações.'
        : 'The BRIDGE project is committed to protecting your privacy and personal data. This policy explains how we handle your information.'
    },
    {
      icon: Eye,
      title: language === 'pt' ? 'Sem Cookies' : 'No Cookies',
      content: language === 'pt'
        ? 'Este website não utiliza cookies de rastreamento ou análise. Não recolhemos informações sobre a sua navegação através de cookies ou tecnologias similares.'
        : 'This website does not use tracking or analytics cookies. We do not collect information about your browsing through cookies or similar technologies.'
    },
    {
      icon: Mail,
      title: language === 'pt' ? 'Recolha de Email' : 'Email Collection',
      content: language === 'pt'
        ? 'O único dado pessoal que recolhemos é o seu endereço de email quando nos contacta através do formulário de contacto. Este email é usado exclusivamente para responder à sua mensagem.'
        : 'The only personal data we collect is your email address when you contact us through the contact form. This email is used exclusively to respond to your message.'
    },
    {
      icon: Lock,
      title: language === 'pt' ? 'Armazenamento e Segurança' : 'Storage and Security',
      content: language === 'pt'
        ? 'Os emails recebidos são armazenados de forma segura e mantidos apenas pelo tempo necessário para responder à sua solicitação. Implementamos medidas técnicas e organizacionais adequadas para proteger os seus dados.'
        : 'Received emails are stored securely and kept only for the time necessary to respond to your request. We implement appropriate technical and organizational measures to protect your data.'
    },
    {
      icon: UserCheck,
      title: language === 'pt' ? 'Os Seus Direitos' : 'Your Rights',
      content: language === 'pt'
        ? 'Tem o direito de aceder, retificar ou eliminar os seus dados pessoais. Para exercer estes direitos ou para qualquer questão sobre privacidade, contacte-nos através de info@bridge-project.eu.'
        : 'You have the right to access, rectify or delete your personal data. To exercise these rights or for any privacy questions, contact us at info@bridge-project.eu.'
    }
  ];

  return (
    <>
      <ParallaxBackground />
      <Navigation t={t} currentLang={language} onLanguageChange={setLanguage} />

      <main style={{ paddingTop: '80px' }}>
        <section style={{
          padding: 'var(--space-20) 0',
          background: 'var(--color-bg)'
        }}>
          <div className="max-w-7xl">
            <div style={{
              maxWidth: '800px',
              margin: '0 auto',
              textAlign: 'center',
              marginBottom: 'var(--space-16)'
            }}>
              <div className="section-badge">
                {language === 'pt' ? 'Privacidade' : 'Privacy'}
              </div>
              <h1 style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: '700',
                marginBottom: 'var(--space-6)',
                color: 'var(--color-primary)'
              }}>
                {language === 'pt' ? 'Política de Privacidade' : 'Privacy Policy'}
              </h1>
              <p style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--color-text-light)',
                lineHeight: '1.8'
              }}>
                {language === 'pt'
                  ? 'Transparência e proteção dos seus dados pessoais'
                  : 'Transparency and protection of your personal data'}
              </p>
            </div>

            <div style={{
              display: 'grid',
              gap: 'var(--space-8)',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <div key={index} className="card">
                    <div style={{
                      display: 'flex',
                      gap: 'var(--space-6)',
                      alignItems: 'flex-start'
                    }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: 'var(--color-cream)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <Icon size={24} style={{ color: 'var(--color-secondary)' }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <h3 style={{
                          fontSize: 'var(--text-xl)',
                          fontWeight: '600',
                          marginBottom: 'var(--space-3)',
                          color: 'var(--color-primary)'
                        }}>
                          {section.title}
                        </h3>
                        <p style={{
                          fontSize: 'var(--text-base)',
                          color: 'var(--color-text-light)',
                          lineHeight: '1.8'
                        }}>
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{
              marginTop: 'var(--space-12)',
              padding: 'var(--space-8)',
              background: 'var(--color-cream)',
              borderRadius: 'var(--radius-2xl)',
              maxWidth: '900px',
              margin: 'var(--space-12) auto 0'
            }}>
              <h3 style={{
                fontSize: 'var(--text-xl)',
                fontWeight: '600',
                marginBottom: 'var(--space-4)',
                color: 'var(--color-primary)'
              }}>
                {language === 'pt' ? 'Conformidade RGPD' : 'GDPR Compliance'}
              </h3>
              <p style={{
                fontSize: 'var(--text-base)',
                color: 'var(--color-text-light)',
                lineHeight: '1.8',
                marginBottom: 'var(--space-4)'
              }}>
                {language === 'pt'
                  ? 'Esta política está em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD) da União Europeia. Para mais informações ou questões sobre como tratamos os seus dados, contacte-nos.'
                  : 'This policy complies with the European Union\'s General Data Protection Regulation (GDPR). For more information or questions about how we handle your data, contact us.'}
              </p>
              <p style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--color-text-light)'
              }}>
                {language === 'pt' ? 'Última atualização: ' : 'Last updated: '}
                {new Date().toLocaleDateString(language === 'pt' ? 'pt-PT' : 'en-GB')}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer t={t} />
    </>
  );
}
