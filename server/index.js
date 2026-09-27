* {
  box-sizing: border-box;
}

:root {
  --bg: #06141f;
  --bg-2: #0a1c2c;
  --panel: rgba(8, 19, 31, 0.9);
  --panel-alt: rgba(14, 29, 44, 0.95);
  --line: rgba(112, 146, 170, 0.25);
  --text: #edf7ff;
  --muted: #96afbf;
  --cyan: #58d9ff;
  --green: #5ef2a2;
  --amber: #f6af53;
  --red: #ff6a6a;
  --shadow: 0 0 28px rgba(88, 217, 255, 0.18);
}

html, body, #root {
  margin: 0;
  min-height: 100%;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  background:
    radial-gradient(circle at top left, rgba(25, 101, 160, 0.22), transparent 30%),
    radial-gradient(circle at bottom right, rgba(37, 168, 130, 0.14), transparent 30%),
    var(--bg);
  color: var(--text);
}

body {
  min-height: 100vh;
}

button, input {
  font: inherit;
}

.app-shell {
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  min-height: 100vh;
}

.sidebar {
  padding: 24px 18px;
  border-right: 1px solid var(--line);
  background: rgba(6, 17, 25, 0.9);
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 8px 22px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, rgba(88, 217, 255, 0.28), rgba(94, 242, 162, 0.18));
  border: 1px solid rgba(88, 217, 255, 0.46);
  box-shadow: var(--shadow);
  font-weight: 800;
}

.brand-name {
  font-size: 1.05rem;
  letter-spacing: 0.14rem;
  font-weight: 700;
}

.brand-subtitle {
  color: var(--muted);
  font-size: 0.72rem;
}

.nav-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 18px;
}

.nav-item {
  background: transparent;
  border: 1px solid transparent;
  border-radius: 10px;
  color: var(--text);
  text-align: left;
  padding: 12px 10px;
  cursor: pointer;
  transition: 0.2s ease;
}

.nav-item:hover,
.nav-item.active {
  border-color: rgba(88, 217, 255, 0.4);
  background: rgba(88, 217, 255, 0.08);
}

.system-panel {
  margin-top: 30px;
  background: rgba(12, 27, 38, 0.9);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 16px;
}

.label-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  color: var(--muted);
  font-size: 0.8rem;
}

.status-pill,
.mini-badge {
  border-radius: 999px;
  padding: 5px 8px;
  font-size: 0.7rem;
  letter-spacing: 0.04rem;
  border: 1px solid rgba(94, 242, 162, 0.4);
  background: rgba(94, 242, 162, 0.12);
  color: var(--green);
}

.status-pill.online {
  border-color: rgba(94, 242, 162, 0.4);
  color: var(--green);
}

.system-panel ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
  color: var(--muted);
}

.content {
  padding: 24px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.eyebrow {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.12rem;
  color: var(--cyan);
}

h1 {
  margin: 8px 0 0;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
}

.user-badge {
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 10px 16px;
  background: rgba(255, 255, 255, 0.02);
  color: var(--muted);
}

.kpi-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(160px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}

.kpi-card,
.panel {
  background: rgba(10, 20, 31, 0.86);
  border: 1px solid var(--line);
  border-radius: 16px;
  box-shadow: var(--shadow);
}

.kpi-card {
  padding: 18px 18px 16px;
}

.kpi-label {
  color: var(--muted);
  font-size: 0.8rem;
  margin-bottom: 16px;
}

.kpi-value {
  font-size: clamp(1.5rem, 2.4vw, 2.2rem);
  font-weight: 800;
  margin-bottom: 10px;
}

.kpi-trend {
  color: var(--green);
  font-size: 0.82rem;
}

.main-grid,
.bottom-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.8fr) minmax(320px, 0.85fr);
  gap: 20px;
  margin-bottom: 20px;
}

.panel {
  padding: 18px;
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}

.panel-header h3 {
  margin: 0;
  font-size: 1.05rem;
}

.mini-badge.warning {
  background: rgba(246, 175, 83, 0.12);
  border-color: rgba(246, 175, 83, 0.4);
  color: var(--amber);
}

.chat-window {
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-height: 330px;
  overflow-y: auto;
  padding-right: 6px;
}

.message {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.message.user {
  flex-direction: row-reverse;
}

.avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, rgba(88, 217, 255, 0.28), rgba(94, 242, 162, 0.2));
  border: 1px solid rgba(88, 217, 255, 0.4);
  font-size: 0.85rem;
  font-weight: 700;
}

.bubble {
  max-width: 80%;
  padding: 12px 14px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--line);
  color: var(--text);
  line-height: 1.5;
}

.message.user .bubble {
  background: rgba(88, 217, 255, 0.08);
  border-color: rgba(88, 217, 255, 0.35);
}

.composer {
  display: flex;
  gap: 10px;
  margin-top: 18px;
}

.composer input {
  flex: 1;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
  padding: 12px 14px;
  outline: none;
}

.composer button,
.action-list button {
  border: 1px solid rgba(88, 217, 255, 0.4);
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(88, 217, 255, 0.14), rgba(94, 242, 162, 0.06));
  color: var(--text);
  padding: 12px 16px;
  cursor: pointer;
}

.alert-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 16px;
}

.alert-list li {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.alert-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--amber);
  box-shadow: 0 0 14px rgba(246, 175, 83, 0.7);
  margin-top: 6px;
}

.alert-list strong {
  display: block;
  margin-bottom: 4px;
}

.alert-list p {
  margin: 0;
  color: var(--muted);
  font-size: 0.88rem;
}

.product-list,
.action-list {
  display: grid;
  gap: 12px;
}

.product-item {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 10px;
  border-radius: 10px;
  border: 1px solid var(--line);
}

.product-item small {
  display: block;
  color: var(--muted);
  margin-top: 4px;
}

.action-list button {
  width: 100%;
  text-align: left;
}

@media (max-width: 960px) {
  .app-shell {
    grid-template-columns: 1fr;
  }

  .sidebar {
    border-right: none;
    border-bottom: 1px solid var(--line);
  }

  .kpi-grid,
  .main-grid,
  .bottom-grid {
    grid-template-columns: 1fr;
  }
}
