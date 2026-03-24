/* ============================================================
   BROKE MODE LIFE — Global JavaScript
   ============================================================ */

// ── NAV TOGGLE ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }

  // Mark active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
});

// ── EMAIL FORM ───────────────────────────────────────────────
function handleEmail(e) {
  e.preventDefault();
  const status = document.getElementById('form-status');
  if (status) status.textContent = '✓ You\'re in. Welcome to Broke Mode.';
  e.target.reset();
}

// ── AI CONTENT ENGINE ────────────────────────────────────────
// Calls Anthropic API to generate fresh, relevant content per topic
async function loadAIContent(containerId, topic, promptText) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `<div class="ai-loading">Generating fresh content...</div>`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [{
          role: 'user',
          content: promptText
        }]
      })
    });

    const data = await response.json();
    const text = data.content?.[0]?.text || '';

    // Parse JSON response
    let parsed;
    try {
      const clean = text.replace(/```json|```/g, '').trim();
      parsed = JSON.parse(clean);
    } catch {
      parsed = { title: topic, items: [], body: text };
    }

    renderAIContent(container, parsed, topic);

  } catch (err) {
    container.innerHTML = `
      <div class="ai-block">
        <span class="ai-badge">AI Content</span>
        <h3>${topic}</h3>
        <p style="color:#666;">Content loading... refresh to try again.</p>
      </div>`;
  }
}

function renderAIContent(container, data, topic) {
  const itemsHTML = (data.items || []).map(item => `
    <li><strong style="color:var(--white)">${item.title || item}</strong>${item.desc ? ` — ${item.desc}` : ''}</li>
  `).join('');

  container.innerHTML = `
    <div class="ai-block">
      <span class="ai-badge">✦ AI Updated</span>
      <h3>${data.title || topic}</h3>
      ${data.intro ? `<p>${data.intro}</p>` : ''}
      ${itemsHTML ? `<ul style="margin:1rem 0">${itemsHTML}</ul>` : ''}
      ${data.tip ? `<p style="color:var(--lime);margin-top:1rem">💡 ${data.tip}</p>` : ''}
      ${data.body ? `<p>${data.body}</p>` : ''}
    </div>`;
}

// ── BLOG RSS FEED (via allorigins proxy) ─────────────────────
const RSS_FEEDS = [
  { name: 'The Penny Hoarder',  url: 'https://www.thepennyhoarder.com/feed/' },
  { name: 'Frugalwoods',        url: 'https://www.frugalwoods.com/feed/' },
  { name: 'Budget Bytes',       url: 'https://www.budgetbytes.com/feed/' },
  { name: 'Making Sense of Cents', url: 'https://www.makingsenseofcents.com/feed' },
];

async function loadBlogFeed(containerId, maxItems = 9) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `<div class="ai-loading" style="padding:3rem 2rem">Loading latest articles...</div>`;

  const allItems = [];

  await Promise.allSettled(RSS_FEEDS.map(async feed => {
    try {
      const proxy = `https://api.allorigins.win/get?url=${encodeURIComponent(feed.url)}`;
      const res   = await fetch(proxy);
      const json  = await res.json();
      const parser = new DOMParser();
      const xml   = parser.parseFromString(json.contents, 'text/xml');
      const items = [...xml.querySelectorAll('item')].slice(0, 4);
      items.forEach(item => {
        const title = item.querySelector('title')?.textContent || '';
        const link  = item.querySelector('link')?.textContent || '#';
        const desc  = item.querySelector('description')?.textContent?.replace(/<[^>]+>/g,'').slice(0,120) || '';
        const date  = item.querySelector('pubDate')?.textContent || '';
        if (title) allItems.push({ title, link, desc, date, source: feed.name });
      });
    } catch { /* skip failed feed */ }
  }));

  if (allItems.length === 0) {
    container.innerHTML = `<p style="color:#666;padding:2rem">Could not load feeds right now. Check back soon.</p>`;
    return;
  }

  // Shuffle and limit
  allItems.sort(() => Math.random() - 0.5);
  const shown = allItems.slice(0, maxItems);

  container.innerHTML = `<div class="blog-grid">${shown.map(item => `
    <a class="blog-card" href="${item.link}" target="_blank" rel="noopener">
      <span class="blog-source">${item.source}</span>
      <span class="blog-title">${item.title}</span>
      <span class="blog-desc">${item.desc}...</span>
      <span class="blog-date">${item.date ? new Date(item.date).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}) : ''}</span>
    </a>`).join('')}
  </div>`;
}
