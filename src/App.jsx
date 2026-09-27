import { useState } from 'react';

const plans = [
  { name: 'FREE', price: '$0', description: 'For getting started with NEXUS.', features: ['Basic NEXUS AI', 'Basic chat', 'Limited memory', 'Basic tasks', 'Basic voice', 'Basic projects'], button: 'CURRENT PLAN' },
  { name: 'NEXUS PLUS', price: '$9.99', description: 'More room to think, build, and automate.', features: ['Expanded AI usage', 'Expanded memory', 'Voice mode', 'File analysis', 'More projects', 'Web research', 'Automations'], button: 'START 7-DAY FREE TRIAL' },
  { name: 'NEXUS PRO', price: '$19.99', description: 'The complete NEXUS command center.', features: ['Advanced AI models', 'Advanced reasoning', 'Large memory', 'Advanced voice', 'Advanced projects', 'Advanced web research', 'Code Lab', 'Blueprint generation', 'Advanced simulations', 'Automations'], button: 'START 7-DAY FREE TRIAL', popular: true },
  { name: 'NEXUS ULTRA', price: '$39.99', description: 'Maximum intelligence. Early access.', features: ['Highest available AI access', 'Maximum context', 'Advanced reasoning', 'Advanced voice', 'Advanced Lab', 'Advanced coding', 'Maximum automation', 'Early-access features'], button: 'START 7-DAY FREE TRIAL' },
];

function Orb({ state = 'idle', small = false }) {
  return <div className={`orb orb-${state} ${small ? 'orb-small' : ''}`} aria-label={`NEXUS ${state} orb`}><span className="orb-ring ring-one" /><span className="orb-ring ring-two" /><span className="orb-core"><i /><b /><em /></span><span className="orb-particle p-one" /><span className="orb-particle p-two" /><span className="orb-particle p-three" /></div>;
}

function App() {
  const [modal, setModal] = useState(false);
  const [active, setActive] = useState('Overview');
  const [trialStarted, setTrialStarted] = useState(false);

  const startTrial = () => { setTrialStarted(true); setModal(false); };

  return <div className="app-shell">
    <aside className="sidebar">
      <div className="brand-block"><div className="brand-mark">N</div><div><div className="brand-name">NEXUS</div><div className="brand-subtitle">AI COMMAND CENTER</div></div></div>
      <nav className="nav-list">{['Overview', 'Intelligence', 'Projects', 'Automations', 'Pricing'].map(item => <button key={item} className={`nav-item ${active === item ? 'active' : ''}`} onClick={() => setActive(item)}><span>{['⌂', '◈', '◇', '↗', '✦'][['Overview', 'Intelligence', 'Projects', 'Automations', 'Pricing'].indexOf(item)]}</span>{item}</button>)}</nav>
      <div className="sidebar-spacer" />
      <div className="system-panel"><div className="label-row"><span>SYSTEM STATUS</span><span className="status-pill online">● ONLINE</span></div><div className="system-orb"><Orb state="idle" small /></div><strong>NEXUS CORE</strong><p>All systems operational</p><div className="system-line"><span /><span /></div></div>
      <div className="profile"><div className="avatar">F</div><div><strong>Fernando</strong><small>Free account</small></div><span>•••</span></div>
    </aside>

    <main className="content">
      <header className="topbar"><div><div className="eyebrow">NEXUS / {active.toUpperCase()}</div><h1>{active === 'Pricing' ? 'Choose your NEXUS' : 'Good evening, Fernando.'}</h1></div><div className="top-actions"><button className="icon-button">⌕</button><button className="icon-button">◌</button><button className="user-badge">F <span>Operator</span>⌄</button></div></header>

      {trialStarted ? <section className="trial-banner"><div><span className="eyebrow">NEXUS PRO</span><h2>FREE TRIAL</h2><p>Your premium command center is unlocked.</p></div><div className="trial-meter"><div className="trial-meta"><strong>7 days remaining</strong><span>0%</span></div><div className="progress"><span /></div><div className="trial-actions"><button className="button button-gold" onClick={() => setActive('Pricing')}>UPGRADE NOW</button><button className="button button-ghost">MANAGE PLAN</button></div></div></section> : <section className="hero-strip"><div><span className="eyebrow">YOUR INTELLIGENCE LAYER</span><h2>Everything connected.<br /><span>Nothing missed.</span></h2><p>Experience the next generation of personal AI.</p><button className="button button-gold" onClick={() => setModal(true)}>START 7-DAY FREE TRIAL <span>→</span></button></div><div className="hero-orb"><Orb state="idle" /><div className="orb-caption"><span className="live-dot" />NEXUS IS READY</div></div></section>}

      <section className="section-heading"><div><span className="eyebrow">PREMIUM ACCESS</span><h2>Choose your NEXUS</h2><p>Start free. Upgrade when you need more.</p></div><div className="free-callout"><strong>7 DAYS FREE</strong><span>No commitment. Explore premium NEXUS features first.</span></div></section>
      <section className="pricing-grid">{plans.map(plan => <article key={plan.name} className={`plan-card ${plan.popular ? 'popular' : ''}`}>{plan.popular && <div className="popular-badge">✦ MOST POPULAR</div>}<div className="plan-top"><div><span className="plan-kicker">{plan.name === 'FREE' ? 'ESSENTIAL' : 'PREMIUM AI'}</span><h3>{plan.name}</h3></div><div className="plan-mark">{plan.name === 'NEXUS PRO' ? '✦' : plan.name === 'FREE' ? '○' : '◇'}</div></div><div className="price"><strong>{plan.price}</strong><span>/month</span></div><p className="plan-description">{plan.description}</p><ul>{plan.features.map(feature => <li key={feature}><span>✓</span>{feature}</li>)}</ul><button className={`plan-button ${plan.popular ? 'gold' : ''}`} disabled={plan.name === 'FREE'} onClick={() => setModal(true)}>{plan.button}<span>→</span></button></article>)}</section>
      <footer><span>© 2026 NEXUS INTELLIGENCE</span><span>BLACK / GOLD / GLASS / PRECISION</span></footer>
    </main>

    {modal && <div className="modal-backdrop" onClick={() => setModal(false)}><div className="upgrade-modal" onClick={e => e.stopPropagation()}><button className="modal-close" onClick={() => setModal(false)}>×</button><Orb state="thinking" small /><span className="eyebrow">NEXUS PROTOCOL</span><h2>Unlock NEXUS PRO</h2><p>Start your 7-day free trial and unlock advanced NEXUS capabilities.</p><div className="modal-features">{['Advanced AI', 'Voice', 'Memory', 'Code Lab', 'Web Research', 'Simulations', 'Blueprints', 'Automations'].map(item => <span key={item}>✓ {item}</span>)}</div><button className="button button-gold full" onClick={startTrial}>START FREE TRIAL <span>→</span></button><button className="modal-not-now" onClick={() => setModal(false)}>NOT NOW</button><small>No payment required to begin. You will not be charged automatically.</small></div></div>}
  </div>;
}

export default App;
