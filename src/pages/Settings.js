import { useState } from 'react';
import Box from '@ux/box';
import Button from '@ux/button';
import Card from '@ux/card';
import Tabs from '@ux/tabs';
import text from '@ux/text';
import Tag from '@ux/tag';
import Modal from '@ux/modal';
import ChevronDown from '@ux/icon/chevron-down';
import ChevronUp from '@ux/icon/chevron-up';
import Diamond from '@ux/icon/diamond';
import Download from '@ux/icon/download';
import Sparkles from '@ux/icon/sparkles';

import '@ux/box/styles';
import '@ux/button/styles';
import '@ux/card/styles';
import '@ux/tabs/styles';
import '@ux/text/styles';
import '@ux/tag/styles';
import '@ux/modal/styles';
import '@ux/icon/chevron-down/styles';
import '@ux/icon/chevron-up/styles';
import '@ux/icon/diamond/styles';
import '@ux/icon/download/styles';
import '@ux/icon/sparkles/styles';

import '../styles/settings.css';

const SETTINGS_TABS = [
  { id: 'contact-info', text: 'Contact Info' },
  { id: 'pricing', text: 'Pricing' },
  { id: 'payouts', text: 'Payouts' },
  { id: 'tax-center', text: 'Tax Center' },
  { id: 'rate-saver', text: 'Rate Saver' },
  { id: 'receipts', text: 'Receipts & Statements' },
  { id: 'tips', text: 'Tips' },
  { id: 'offline', text: 'Offline Payments' },
  { id: 'payment-methods', text: 'Payment Methods' },
];

const RATE_SAVER_VIDEO_URL = `${process.env.PUBLIC_URL || ''}/assets/videos/${encodeURIComponent('Rate Saver _ Explainer.mov')}`;

const FAQ_ITEMS = [
  { id: 'faq-1', question: 'How does Rate Saver work?', answer: 'Rate Saver passes a portion of your payment processing costs to customers as a surcharge, so you pay 0% on eligible credit card transactions.' },
  { id: 'faq-2', question: 'What products is Rate Saver available for?', answer: 'Rate Saver is available for GoDaddy Payments and compatible point-of-sale and online solutions.' },
  { id: 'faq-3', question: 'How will my customers be informed about charges?', answer: 'Customers see the surcharge amount clearly at checkout and on their receipt. You can also display a printable notice at your place of business.' },
  { id: 'faq-4', question: 'Are fees applied before or after tax?', answer: 'Surcharges are typically applied to the transaction total, which may include tax depending on your configuration.' },
];

function Settings() {
  const [activeTab, setActiveTab] = useState('rate-saver');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [videoLightboxOpen, setVideoLightboxOpen] = useState(false);

  const toggleFaq = (id) => {
    setExpandedFaq((prev) => (prev === id ? null : id));
  };

  return (
    <div className="settings-page">
      <text.h1 as="heading" size={0} className="settings-page-title">Settings</text.h1>

      <Tabs
        design="underline"
        id="settings-tabs"
        items={SETTINGS_TABS}
        selected={activeTab}
        onChange={(selectedId) => setActiveTab(selectedId)}
        role="menubar"
      />

      {activeTab === 'rate-saver' && (
        <div className="settings-rate-saver">
          <div className="rate-saver-main">
            {/* Hero section */}
            <section className="rate-saver-hero">
              <div className="rate-saver-hero-content">
                <Tag
                  design="inline"
                  emphasis="premium"
                  highcontrast
                  icon={<Diamond height={14} width={14} />}
                  size="sm"
                  className="rate-saver-badge"
                >
                  FREE TRIAL
                </Tag>
                <text.h2 as="title" size={1} className="rate-saver-headline">
                  Pay 0% on credit card processing with Rate Saver
                </text.h2>
                <p className="rate-saver-description">
                  Opt-in to Rate Saver with all Point of Sale, Invoicing, and Pay Links Plus plans to surcharge credit card transactions. Invest your savings to help grow your business.
                </p>
                <div className="rate-saver-actions">
                  <Button design="primary" size="md">Choose a plan</Button>
                  <button type="button" className="rate-saver-video-link" onClick={() => setVideoLightboxOpen(true)}>▷ Watch Video</button>
                </div>
              </div>
              <div className="rate-saver-hero-media">
                <button
                  type="button"
                  className="rate-saver-hero-card"
                  onClick={() => setVideoLightboxOpen(true)}
                  aria-label="Play Rate Saver explainer video"
                >
                  <img
                    src={`${process.env.PUBLIC_URL || ''}/assets/images/rate-saver-hero-card.png`}
                    alt="More savings — Lowest payment processing fees"
                    className="rate-saver-hero-card-image"
                  />
                  <span className="rate-saver-hero-play" aria-hidden>▶</span>
                </button>
              </div>
            </section>

            {/* How Rate Saver helps (Figma 32-8014) */}
            <section className="rate-saver-cards">
              <text.h2 as="title" size={0} className="rate-saver-section-title">How Rate Saver helps reduce processing costs</text.h2>
              <div className="rate-saver-cards-grid">
                <Card className="rate-saver-card">
                  <img
                    src={`${process.env.PUBLIC_URL || ''}/assets/images/rate-saver-fees-card.png`}
                    alt="Payment Fees With Rate Saver: You Pay 0%, You Keep 100%, Customer Pays 3%"
                    className="rate-saver-card-image"
                  />
                  <div className="rate-saver-card-body">
                    <text.h3 as="title" size={-2} className="rate-saver-card-heading">Lower your credit card processing costs</text.h3>
                    <p className="rate-saver-card-desc">With Rate Saver, credit card transactions are priced differently so you can offset processing fees. You pay 0% on credit card payments, while any applicable surcharge is clearly shown to customers before checkout.</p>
                  </div>
                </Card>
                <Card className="rate-saver-card">
                  <img
                    src={`${process.env.PUBLIC_URL || ''}/assets/images/rate-saver-transparency-card.png`}
                    alt="Receipt showing Price $100.00, Surcharge $3.00, Total Payment $103.00 with contactless payment"
                    className="rate-saver-card-image"
                  />
                  <div className="rate-saver-card-body">
                    <text.h3 as="title" size={-2} className="rate-saver-card-heading">Transparency with customers</text.h3>
                    <p className="rate-saver-card-desc">Rate Saver keeps checkout clear and transparent. Customers see any credit card surcharge upfront and as a separate line item on their receipt, with no impact to debit card payments.</p>
                  </div>
                </Card>
              </div>
            </section>

            {/* Help customers understand (Figma 32-8036) */}
            <section className="rate-saver-notice">
              <div className="rate-saver-notice-card">
                <div className="rate-saver-notice-content">
                  <text.h3 as="title" size={0} className="rate-saver-notice-title">Help customers understand credit card pricing</text.h3>
                  <p className="rate-saver-notice-desc">
                    Download a printable notice you can display at checkout to explain credit card surcharges clearly and upfront. This helps set expectations and keeps pricing transparent for your customers.
                  </p>
                  <a href="#" className="rate-saver-notice-download" onClick={(e) => e.preventDefault()}>
                    <Download height={20} width={20} aria-hidden />
                    Download Notice
                  </a>
                </div>
                <div className="rate-saver-notice-media">
                  <img
                    src={`${process.env.PUBLIC_URL || ''}/assets/images/rate-saver-notice.png`}
                    alt="Credit Card Surcharge Notice sign and payment terminal at checkout"
                    className="rate-saver-notice-image"
                  />
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="rate-saver-faq">
              <text.h2 as="title" size={0} className="rate-saver-section-title">Frequently Asked Questions</text.h2>
              <ul className="rate-saver-faq-list">
                {FAQ_ITEMS.map(({ id, question, answer }) => (
                  <li key={id} className="rate-saver-faq-item">
                    <button
                      type="button"
                      className={`rate-saver-faq-question ${expandedFaq === id ? 'expanded' : ''}`}
                      onClick={() => toggleFaq(id)}
                      aria-expanded={expandedFaq === id}
                    >
                      {question}
                      {expandedFaq === id ? <ChevronUp height={20} width={20} /> : <ChevronDown height={20} width={20} />}
                    </button>
                    {expandedFaq === id && (
                      <div className="rate-saver-faq-answer">
                        <p>{answer}</p>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right column: Savings summary (Figma 32-8044) */}
          <aside className="rate-saver-sidebar" aria-label="Rate Saver savings summary">
            <div className="rate-saver-sidebar-card">
              <div className="rate-saver-saved-card">
                <Tag design="inline" emphasis="success" size="sm" className="rate-saver-saved-tag">$50.42 SAVED</Tag>
                <p className="rate-saver-saved-sublabel">
                  <strong>Last payout</strong> with Rate Saver
                </p>
                <text.span as="title" size={0} className="rate-saver-saved-amount">$1,070.63</text.span>
              </div>
              <div className="rate-saver-estimate-block">
                <img
                  src={`${process.env.PUBLIC_URL || ''}/assets/images/airo-logo.png`}
                  alt="Airo"
                  className="rate-saver-airo-logo"
                />
                <Box gap="md" inlineAlignChildren="start">
                  <text.h3 as="title" size={-2} className="rate-saver-estimate-heading">Want a personalized estimate?</text.h3>
                  <p className="rate-saver-estimate-desc">
                    Use the savings calculator to estimate how Rate Saver could reduce your processing fees using your own revenue.
                  </p>
                  <Button design="secondary" size="sm" text="Calculate Savings" icon={<Sparkles height={16} width={16} />} />
                  <text.span as="caption" size={-2} className="rate-saver-estimate-note">Based on your own revenue — not averages</text.span>
                </Box>
              </div>
            </div>
          </aside>
        </div>
      )}

      {activeTab !== 'rate-saver' && (
        <Box inlinePadding="lg" blockPadding="lg">
          <text.span as="body">Select a section above to view its settings.</text.span>
        </Box>
      )}

      {videoLightboxOpen && (
        <Modal
          show
          title="Rate Saver explainer video"
          onClose={() => setVideoLightboxOpen(false)}
          className="rate-saver-video-lightbox"
        >
          <div className="rate-saver-video-lightbox-video-wrap">
            <video
              src={RATE_SAVER_VIDEO_URL}
              controls
              autoPlay
              className="rate-saver-video-lightbox-video"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Settings;
