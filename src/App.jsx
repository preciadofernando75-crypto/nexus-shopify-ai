import { useEffect, useState } from 'react';

const initialMessages = [
  {
    role: 'assistant',
    text: 'Nexus online. Store systems are stable. I can monitor revenue, product velocity, inventory risk, and suggest actions.',
  },
];

function App() {
  const [overview, setOverview] = useState({
    storeName: 'Astra Atelier',
    kpis: [],
    alerts: [],
    topProducts: [],
  });
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchOverview = async () => {
      try {
        const response = await fetch('/api/store/overview');
        const data = await response.json();
        setOverview(data);
      } catch (error) {
        console.error('Overview fetch failed:', error);
      }
    };

    fetchOverview();
  }, []);

  const submitPrompt = async () => {
    const trimmed = inputValue.trim();
    if (!trimmed || loading) return;

    const nextMessage = { role: 'user', text: trimmed };
    setMessages((prev) => [...prev, nextMessage]);
    setInputValue('');
    setLoading(true);

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { role: 'assistant', text: data.answer }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: 'I hit a signal issue. Please check the server or OpenRouter key, then try again.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-block">
          <div className="brand-mark">N</div>
          <div>
            <div className="brand-name">NEXUS</div>
            <div className="brand-subtitle">Shopify AI</div>
          </div>
        </div>

        <nav className="nav-list">
          <button className="nav-item active">Overview</button>
          <button className="nav-item">Orders</button>
          <button className="nav-item">Inventory</button>
          <button className="nav-item">Analytics</button>
          <button className="nav-item">Campaigns</button>
          <button className="nav-item">Forecasts</button>
        </nav>

        <div className="system-panel">
          <div className="label-row">
            <span>System</span>
            <span className="status-pill online">Online</span>
          </div>
          <ul>
            <li>Cash flow healthy</li>
            <li>Inventory risk low</li>
            <li>Cart recovery stable</li>
          </ul>
        </div>
      </aside>

      <main className="content">
        <header className="topbar">
          <div>
            <div className="eyebrow">Astra Atelier</div>
            <h1>Command Center</h1>
          </div>
          <div className="user-badge">Operator / Fernando</div>
        </header>

        <section className="kpi-grid">
          {overview.kpis?.map((kpi) => (
            <div className="kpi-card" key={kpi.label}>
              <div className="kpi-label">{kpi.label}</div>
              <div className="kpi-value">{kpi.value}</div>
              <div className="kpi-trend">{kpi.change}</div>
            </div>
          ))}
        </section>

        <section className="main-grid">
          <div className="panel wide-panel">
            <div className="panel-header">
              <h3>AI Advisor</h3>
              <span className="mini-badge">Live</span>
            </div>

            <div className="chat-window">
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.role}`}>
                  <div className="avatar">{message.role === 'assistant' ? 'N' : 'U'}</div>
                  <div className="bubble">{message.text}</div>
                </div>
              ))}
            </div>

            <div className="composer">
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') submitPrompt();
                }}
                placeholder="Ask Nexus: 'What is risking my top-selling products?'"
              />
              <button onClick={submitPrompt} disabled={loading}>
                {loading ? 'Working...' : 'Send'}
              </button>
            </div>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h3>Store Alerts</h3>
              <span className="mini-badge warning">{overview.alerts?.length || 0}</span>
            </div>
            <ul className="alert-list">
              {overview.alerts?.map((alert) => (
                <li key={alert.title}>
                  <span className="alert-dot" />
                  <div>
                    <strong>{alert.title}</strong>
                    <p>{alert.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bottom-grid">
          <div className="panel">
            <div className="panel-header">
              <h3>Top Products</h3>
            </div>
            <div className="product-list">
              {overview.topProducts?.map((product) => (
                <div className="product-item" key={product.name}>
                  <div>
                    <strong>{product.name}</strong>
                    <small>{product.category}</small>
                  </div>
                  <span>{product.sales}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h3>Recommended Actions</h3>
            </div>
            <div className="action-list">
              <button>Reorder best seller</button>
              <button>Optimize pricing</button>
              <button>Boost cart recovery</button>
              <button>Draft campaign</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
