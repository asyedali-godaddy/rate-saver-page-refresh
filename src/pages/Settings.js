import { useState } from 'react';
import Box from '@ux/box';
import Button from '@ux/button';
import Card from '@ux/card';
import Tabs from '@ux/tabs';
import text from '@ux/text';
import ChevronDown from '@ux/icon/chevron-down';
import ChevronUp from '@ux/icon/chevron-up';

import '@ux/box/styles';
import '@ux/button/styles';
import '@ux/card/styles';
import '@ux/tabs/styles';
import '@ux/text/styles';
import '@ux/icon/chevron-down/styles';
import '@ux/icon/chevron-up/styles';

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

const FAQ_ITEMS = [
  { id: 'faq-1', question: 'How does Rate Saver work?', answer: 'Rate Saver passes a portion of your payment processing costs to customers as a surcharge, so you pay 0% on eligible credit card transactions.' },
  { id: 'faq-2', question: 'What products is Rate Saver available for?', answer: 'Rate Saver is available for GoDaddy Payments and compatible point-of-sale and online solutions.' },
  { id: 'faq-3', question: 'How will my customers be informed about charges?', answer: 'Customers see the surcharge amount clearly at checkout and on their receipt. You can also display a printable notice at your place of business.' },
  { id: 'faq-4', question: 'Are fees applied before or after tax?', answer: 'Surcharges are typically applied to the transaction total, which may include tax depending on your configuration.' },
];

function Settings() {
  const [activeTab, setActiveTab] = useState('rate-saver');
  const [expandedFaq, setExpandedFaq] = useState(null);

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
          {/* Hero section */}
          <section className="rate-saver-hero">
            <div className="rate-saver-hero-content">
              <span className="rate-saver-badge">FREE TRIAL</span>
              <text.h2 as="title" size={1} className="rate-saver-headline">
                Pay 0% on credit card processing with Rate Saver
              </text.h2>
              <p className="rate-saver-description">
                Pass a portion of processing costs to customers as a surcharge. You pay 0% on eligible credit card transactions and keep 100% of your sale.
              </p>
              <div className="rate-saver-actions">
                <Button design="primary" size="md">Choose a plan</Button>
                <a href={`${process.env.PUBLIC_URL || ''}/assets/videos/${encodeURIComponent('Rate Saver _ Explainer.mov')}`} target="_blank" rel="noopener noreferrer" className="rate-saver-video-link">▷ Watch Video</a>
              </div>
            </div>
            <div className="rate-saver-hero-media">
              <div className="rate-saver-video-placeholder">
                <span className="rate-saver-play-icon">▶</span>
                <span className="rate-saver-video-label">More savings Lowest payment processing fees</span>
              </div>
            </div>
          </section>

          {/* Savings summary */}
          <div className="rate-saver-summary-row">
            <div className="rate-saver-saved-card">
              <text.span as="title" size={-2} className="rate-saver-saved-label">$50.42 SAVED</text.span>
              <text.span as="caption" size={-2} className="rate-saver-saved-sublabel">Last payout with Rate Saver $1,070.63</text.span>
            </div>
            <Card className="rate-saver-estimate-card">
              <Box gap="md" inlineAlignChildren="start">
                <text.h3 as="title" size={-2}>Want a personalized estimate?</text.h3>
                <p className="rate-saver-estimate-desc">
                  See how much you could save based on your revenue and typical transaction mix.
                </p>
                <Button design="secondary" size="sm">Calculate Savings</Button>
                <text.span as="caption" size={-2} className="rate-saver-estimate-note">Based on your own revenue — not averages</text.span>
              </Box>
            </Card>
          </div>

          {/* How Rate Saver helps */}
          <section className="rate-saver-cards">
            <text.h2 as="title" size={0} className="rate-saver-section-title">How Rate Saver helps reduce processing costs</text.h2>
            <div className="rate-saver-cards-grid">
              <Card>
                <Box gap="md" inlineAlignChildren="start">
                  <text.h3 as="title" size={-2}>Payment Fees With Rate Saver</text.h3>
                  <div className="rate-saver-fee-row">
                    <span className="rate-saver-fee-item">You Pay 0%</span>
                    <span className="rate-saver-fee-item">You Keep 100%</span>
                    <span className="rate-saver-fee-item">Customer Pays 3%</span>
                  </div>
                  <p className="rate-saver-card-desc">Lower your credit card processing costs while staying transparent with customers.</p>
                </Box>
              </Card>
              <Card>
                <Box gap="md" inlineAlignChildren="start">
                  <text.h3 as="title" size={-2}>Transparency with customers</text.h3>
                  <div className="rate-saver-terminal-mock">
                    <div className="rate-saver-receipt-mock">
                      <div>Thank You!</div>
                      <div>Price $100.00</div>
                      <div>Surcharge $3.00</div>
                      <div>Total Payment $103.00</div>
                    </div>
                  </div>
                  <p className="rate-saver-card-desc">Customers see the surcharge clearly on their receipt at checkout.</p>
                </Box>
              </Card>
            </div>
          </section>

          {/* Help customers understand */}
          <section className="rate-saver-notice">
            <text.h2 as="title" size={0} className="rate-saver-section-title">Help customers understand credit card pricing</text.h2>
            <p className="rate-saver-notice-desc">
              Download a printable notice to display at your place of business so customers know about the surcharge before they pay.
            </p>
            <Button design="secondary" size="md">Download Notice</Button>
            <div className="rate-saver-notice-mock">
              <div className="rate-saver-notice-poster">Credit Card Surcharge Notice</div>
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
      )}

      {activeTab !== 'rate-saver' && (
        <Box inlinePadding="lg" blockPadding="lg">
          <text.span as="body">Select a section above to view its settings.</text.span>
        </Box>
      )}
    </div>
  );
}

export default Settings;
