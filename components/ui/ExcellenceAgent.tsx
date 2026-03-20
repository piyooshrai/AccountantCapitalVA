// ExcellenceAgent.tsx - Customized for Accountant Capital VA
'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

const AGENT_CONFIG = {
  name: 'Accountant Capital VA',
  agentName: 'Maya',
  phone: '(813) 761-8268',
  email: 'info@thehuman.capital',
  bookingLink: '/contact',
};

const AGENT_IMAGES: Record<string, string> = {
  'Maya': '/agents/maya.jpg',
  'Daniel': '/agents/daniel.jpg',
  'Elena': '/agents/elena.jpg',
};

type MessageOption = {
  label: string;
  next: string;
};

type FlowNode = {
  text: string;
  options?: MessageOption[];
  capture?: 'email';
  cta?: 'book' | 'call' | 'apply';
  delay?: number;
};

const FLOWS: Record<string, FlowNode> = {
  start: {
    text: `Hey — I'm ${AGENT_CONFIG.agentName} from ${AGENT_CONFIG.name}. Looking for bookkeeping support for your business, or interested in joining our team?`,
    options: [
      { label: 'I need a VA for my business', next: 'prospect_start' },
      { label: 'I want to work as a VA', next: 'applicant_start' },
      { label: 'Just browsing', next: 'browsing' },
    ],
  },

  prospect_start: {
    text: `Good. What's your biggest headache right now?`,
    options: [
      { label: 'Books are behind / messy', next: 'prospect_books' },
      { label: 'Need someone on QuickBooks', next: 'prospect_qbo' },
      { label: 'Invoicing and collections', next: 'prospect_invoicing' },
      { label: 'Payroll is a nightmare', next: 'prospect_payroll' },
    ],
  },

  prospect_books: {
    text: `We get that a lot. Catch-up, cleanup, ongoing bookkeeping—we handle it all. Works inside QuickBooks, Xero, FreshBooks, whatever you use. Most clients say their CPA loves us after. Want a quick call to talk through it?`,
    options: [
      { label: 'Yeah, let\'s talk', next: 'prospect_book' },
      { label: 'How much does it cost?', next: 'prospect_pricing' },
      { label: 'Tell me more', next: 'prospect_details' },
    ],
  },

  prospect_qbo: {
    text: `QuickBooks Online, Desktop, Xero—we train on all of it. We become part of your team, handling daily reconciliation, invoicing, AR, AP, even payroll support. Dedicated person, same VA every day. Starts at $700/mo. Want to set up a call?`,
    options: [
      { label: 'Book a call', next: 'prospect_book' },
      { label: 'Send me pricing', next: 'prospect_email' },
    ],
  },

  prospect_invoicing: {
    text: `Invoice creation, payment tracking, overdue follow-ups, collections—that's our wheelhouse. Plus we'll reconcile your AR to make sure nothing falls through the cracks. $700/mo part-time. Want to chat about it?`,
    options: [
      { label: 'Let\'s talk', next: 'prospect_book' },
      { label: 'Send pricing info', next: 'prospect_email' },
    ],
  },

  prospect_payroll: {
    text: `Payroll data entry, hours tracking, PTO, new employee setup, payroll tax tracking—we handle it so you don't have to. Works with Gusto, ADP, Paychex, OnPay. $700-$1,300/mo depending on scope. Want a quick call to see if we're a fit?`,
    options: [
      { label: 'Book a call', next: 'prospect_book' },
      { label: 'Send me pricing', next: 'prospect_email' },
    ],
  },

  prospect_pricing: {
    text: `$700/mo for part-time (up to 20 hrs/week), $1,300/mo for full-time (up to 40 hrs/week). Month-to-month, cancel anytime. Includes a dedicated VA, Client Manager, background check, and NDA. That's less than a local bookkeeper and you get a full financial admin. Sound good?`,
    options: [
      { label: 'Book a call', next: 'prospect_book' },
      { label: 'How do you compare to Bench?', next: 'prospect_bench' },
    ],
  },

  prospect_bench: {
    text: `Bench gives you a shared team and their own software. We give you one dedicated person who works inside YOUR QuickBooks or Xero, plus a Client Manager overseeing quality. Same person every day, not rotating staff. And we do invoicing, AR, AP, payroll support—Bench is bookkeeping only.`,
    options: [
      { label: 'Okay, I\'m sold', next: 'prospect_book' },
      { label: 'Send me more info', next: 'prospect_email' },
    ],
  },

  prospect_details: {
    text: `Here's the deal: you get one dedicated VA assigned only to you. They learn your books, your preferences, your workflows. A Client Manager oversees everything—quality checks, performance reviews, backup if your VA is out. We vet the top 3% of applicants. $700-$1,300/mo, month-to-month. Want to book a call?`,
    options: [
      { label: 'Book a call', next: 'prospect_book' },
      { label: 'Send me pricing details', next: 'prospect_email' },
    ],
  },

  prospect_book: {
    text: `Perfect. Here's the link to schedule your strategy call—takes 30 seconds. We'll assess your needs and if it's a fit, match you with a VA within 48 hours.`,
    cta: 'book',
  },

  prospect_email: {
    text: `Drop your email and I'll send over our pricing breakdown and how we work.`,
    capture: 'email',
  },

  prospect_email_thanks: {
    text: `Sent. Check your inbox. If you want to skip ahead and book a call, no pressure—just a conversation.`,
    cta: 'book',
  },

  applicant_start: {
    text: `Great — we're hiring. Quick overview: we hire the top 3% of applicants. You'd be a dedicated VA assigned to one bookkeeping client, not juggling multiple accounts. What's your background?`,
    options: [
      { label: 'Bookkeeping / Accounting', next: 'applicant_info' },
      { label: 'Admin / Executive Assistant', next: 'applicant_info' },
      { label: 'Other', next: 'applicant_info' },
    ],
  },

  applicant_info: {
    text: `Good. Our process: resume review, skills assessment (QuickBooks, Xero, etc.), video interview, Checkr background check, paid trial. If you make it, you're matched with a dedicated client. Drop your email and we'll send the application link.`,
    capture: 'email',
  },

  applicant_email_thanks: {
    text: `Got it. You'll get the application link shortly. Process takes 5-7 business days. We'd love to have you on the team.`,
    options: [
      { label: 'Thanks!', next: 'end' },
    ],
  },

  browsing: {
    text: `No problem. Two things worth checking out: our pricing (starts at $700/mo) and how we compare to Bench, Pilot, and others.`,
    options: [
      { label: 'Show me pricing', next: 'browsing_pricing' },
      { label: 'Actually, I have a question', next: 'prospect_start' },
    ],
  },

  browsing_pricing: {
    text: `$700/mo for part-time (20 hrs/week). $1,300/mo for full-time (40 hrs/week). Both include a dedicated VA, Client Manager, background check, NDA, backup coverage. Month-to-month. Want the full breakdown?`,
    options: [
      { label: 'Send it over', next: 'prospect_email' },
      { label: 'Book a call instead', next: 'prospect_book' },
    ],
  },

  end: {
    text: `Appreciate you stopping by. If you need anything later, we're here. ${AGENT_CONFIG.phone} or ${AGENT_CONFIG.email}.`,
  },
};

const RATE_LIMIT = { maxPerSession: 30, minIntervalMs: 2000 };

interface ChatMessage {
  role: 'agent' | 'user';
  text: string;
  timestamp: number;
}

export default function ExcellenceAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentNode, setCurrentNode] = useState<string>('start');
  const [emailInput, setEmailInput] = useState('');
  const [capturedEmail, setCapturedEmail] = useState('');
  const [messageCount, setMessageCount] = useState(0);
  const [lastMessageTime, setLastMessageTime] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  const currentPage = typeof window !== 'undefined' ? window.location.pathname : '/';
  const hideOnContactPage = currentPage === '/contact';

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && !hasOpened) {
      setHasOpened(true);
      addAgentMessage(FLOWS.start.text);
    }
  }, [isOpen, hasOpened]);

  const addAgentMessage = useCallback((text: string) => {
    setIsTyping(true);
    const delay = Math.min(text.length * 15, 1500);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { role: 'agent', text, timestamp: Date.now() }]);
    }, delay);
  }, []);

  const handleOption = useCallback((option: MessageOption) => {
    const now = Date.now();
    if (now - lastMessageTime < RATE_LIMIT.minIntervalMs) return;
    if (messageCount >= RATE_LIMIT.maxPerSession) {
      addAgentMessage(`We're moving fast. Best to call us directly at ${AGENT_CONFIG.phone} or book at ${AGENT_CONFIG.bookingLink}`);
      return;
    }

    setLastMessageTime(now);
    setMessageCount(prev => prev + 1);

    setMessages(prev => [...prev, { role: 'user', text: option.label, timestamp: now }]);

    const nextNode = FLOWS[option.next];
    if (nextNode) {
      setCurrentNode(option.next);
      addAgentMessage(nextNode.text);
    }
  }, [lastMessageTime, messageCount, addAgentMessage]);

  const handleEmailSubmit = useCallback(async () => {
    const email = emailInput.trim();
    if (!email || !email.includes('@')) return;

    setCapturedEmail(email);
    setMessages(prev => [...prev, { role: 'user', text: email, timestamp: Date.now() }]);
    setEmailInput('');

    const thanksNode = currentNode === 'applicant_info' ? 'applicant_email_thanks' : 'prospect_email_thanks';
    setCurrentNode(thanksNode);
    addAgentMessage(FLOWS[thanksNode].text);

    sendTranscript(email);
  }, [emailInput, currentNode, messages, addAgentMessage]);

  const sendTranscript = async (email: string) => {
    const transcript = messages
      .map(m => `${m.role === 'agent' ? AGENT_CONFIG.agentName : 'Visitor'}: ${m.text}`)
      .join('\n');

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `Chat Lead — ${email}`,
          email: email,
          company: `Page: ${currentPage}`,
          message: `--- CHAT TRANSCRIPT ---\n\n${transcript}\n\n--- END TRANSCRIPT ---\n\nCaptured from: ${currentPage}\nTime: ${new Date().toISOString()}\nMessages: ${messages.length}`,
        }),
      });
    } catch (e) {
      // Silent fail
    }
  };

  useEffect(() => {
    const handleBeforeUnload = () => {
      if (capturedEmail && messages.length > 2) {
        navigator.sendBeacon('/api/contact', JSON.stringify({
          name: `Chat Lead (exit) — ${capturedEmail}`,
          email: capturedEmail,
          company: `Page: ${currentPage}`,
          message: messages.map(m => `${m.role === 'agent' ? AGENT_CONFIG.agentName : 'Visitor'}: ${m.text}`).join('\n'),
        }));
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [capturedEmail, messages, currentPage]);

  const node = FLOWS[currentNode];

  if (dismissed || hideOnContactPage) return null;

  return (
    <>
      {!isOpen && (
        <div style={{
          position: 'fixed', bottom: '24px', right: '24px', zIndex: 9998,
          display: 'flex', alignItems: 'center', gap: '12px',
        }}>
          <div
            onClick={() => setIsOpen(true)}
            style={{
              width: '60px', height: '60px', borderRadius: '50%',
              background: '#1B3A2D', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
        </div>
      )}

      {isOpen && (
        <div style={{
          position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999,
          width: '380px', maxHeight: '560px',
          background: 'white', borderRadius: '16px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.15), 0 2px 8px rgba(0,0,0,0.08)',
          display: 'flex', flexDirection: 'column', overflow: 'hidden',
          fontFamily: 'Manrope, sans-serif',
          animation: 'slideUp 0.3s ease',
        }}>
          <div style={{
            background: '#1B3A2D', padding: '16px 20px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img
                src={AGENT_IMAGES[AGENT_CONFIG.agentName] || '/agents/maya.jpg'}
                alt={AGENT_CONFIG.agentName}
                style={{
                  width: '36px', height: '36px', borderRadius: '50%',
                  objectFit: 'cover', border: '2px solid rgba(255,255,255,0.2)',
                }}
              />
              <div>
                <div style={{ color: 'white', fontSize: '14px', fontWeight: 600 }}>{AGENT_CONFIG.agentName}</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px' }}>
                  <span style={{ display: 'inline-block', width: '6px', height: '6px', background: '#7DD4AA', borderRadius: '50%', marginRight: '4px' }}></span>
                  Online now
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '6px',
                  width: '28px', height: '28px', cursor: 'pointer', color: 'white', fontSize: '14px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >—</button>
              <button
                onClick={() => { setIsOpen(false); setDismissed(true); }}
                style={{
                  background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '6px',
                  width: '28px', height: '28px', cursor: 'pointer', color: 'white', fontSize: '14px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >✕</button>
            </div>
          </div>

          <div ref={chatBodyRef} style={{
            flex: 1, overflowY: 'auto', padding: '16px',
            display: 'flex', flexDirection: 'column', gap: '12px',
            maxHeight: '340px', minHeight: '200px',
          }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
              }}>
                <div style={{
                  maxWidth: '80%', padding: '10px 14px', borderRadius: '12px',
                  fontSize: '14px', lineHeight: '1.5',
                  ...(msg.role === 'agent' ? {
                    background: '#F5F2EC', color: '#1A1A1A',
                    borderBottomLeftRadius: '4px',
                  } : {
                    background: '#1B3A2D', color: 'white',
                    borderBottomRightRadius: '4px',
                  }),
                }}>
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{
                  background: '#F5F2EC', padding: '10px 14px', borderRadius: '12px',
                  borderBottomLeftRadius: '4px', fontSize: '14px', color: '#9A9A9A',
                }}>
                  <span style={{ animation: 'blink 1.2s infinite' }}>•</span>
                  <span style={{ animation: 'blink 1.2s infinite 0.2s' }}> •</span>
                  <span style={{ animation: 'blink 1.2s infinite 0.4s' }}> •</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div style={{
            borderTop: '1px solid #F5F2EC', padding: '12px 16px',
            background: '#FAFAFA',
          }}>
            {node?.cta === 'book' && (
              <a href={AGENT_CONFIG.bookingLink} style={{
                display: 'block', width: '100%', padding: '12px', textAlign: 'center',
                background: '#1B3A2D', color: 'white', borderRadius: '8px',
                fontSize: '13px', fontWeight: 600, letterSpacing: '0.02em',
              }}>
                Book a Strategy Call
              </a>
            )}

            {node?.cta === 'call' && (
              <a href={`tel:${AGENT_CONFIG.phone.replace(/[^0-9]/g, '')}`} style={{
                display: 'block', width: '100%', padding: '12px', textAlign: 'center',
                background: '#1B3A2D', color: 'white', borderRadius: '8px',
                fontSize: '13px', fontWeight: 600,
              }}>
                Call {AGENT_CONFIG.phone}
              </a>
            )}

            {node?.capture === 'email' && !capturedEmail && (
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="email"
                  value={emailInput}
                  onChange={e => setEmailInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleEmailSubmit()}
                  placeholder="your@email.com"
                  style={{
                    flex: 1, padding: '10px 12px', border: '1px solid #E5E7EB',
                    borderRadius: '8px', fontSize: '14px', outline: 'none',
                    fontFamily: 'inherit',
                  }}
                />
                <button
                  onClick={handleEmailSubmit}
                  style={{
                    padding: '10px 16px', background: '#1B3A2D', color: 'white',
                    border: 'none', borderRadius: '8px', fontSize: '13px',
                    fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
                  }}
                >
                  Send
                </button>
              </div>
            )}

            {node?.options && !node.capture && !node.cta && !isTyping && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {node.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleOption(opt)}
                    style={{
                      width: '100%', padding: '10px 14px', textAlign: 'left',
                      background: 'white', border: '1px solid #E5E7EB',
                      borderRadius: '8px', fontSize: '13px', color: '#1A1A1A',
                      cursor: 'pointer', fontFamily: 'inherit', fontWeight: 500,
                      transition: 'all 0.15s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = '#1B3A2D';
                      e.currentTarget.style.background = '#F8F9FA';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = '#E5E7EB';
                      e.currentTarget.style.background = 'white';
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}

            {currentNode === 'end' && (
              <div style={{ fontSize: '12px', color: '#9A9A9A', textAlign: 'center', padding: '4px' }}>
                {AGENT_CONFIG.phone} — {AGENT_CONFIG.email}
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </>
  );
}
