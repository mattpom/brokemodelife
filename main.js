/* ============================================================
   BROKE MODE LIFE — Global JavaScript
   ============================================================ */

// ── NAV TOGGLE ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    // Close menu when any link is clicked
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!toggle.contains(e.target) && !links.contains(e.target)) {
        links.classList.remove('open');
      }
    });
  }
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
});

// ── EMAIL FORM ───────────────────────────────────────────────
function handleEmail(e) {
  e.preventDefault();
  const status = document.getElementById('form-status');
  if (status) status.textContent = "✓ You're in. Welcome to Broke Mode.";
  e.target.reset();
}

// ── CONTENT BANKS ────────────────────────────────────────────
const CONTENT_BANKS = {
  home: [
    { title: "Today's Broke Mode Power Moves", intro: "Five things that cost nothing but pay big today.",
      items: [
        { title: "Audit your subscriptions", desc: "Cancel anything you haven't used in 30 days — that's $20–$80/month back instantly." },
        { title: "Meal prep today", desc: "Four hours once a week eliminates $150+ in impulse food spending. Sunday is your most powerful financial day." },
        { title: "Use your library card", desc: "Free books, audiobooks, movies, and museum passes. Most people forget this exists — don't be most people." },
        { title: "Stack cashback apps", desc: "Rakuten + Ibotta + store app = triple dipping on every purchase. Set up once, profit forever." },
        { title: "Call and negotiate", desc: "Internet, insurance, phone — one 10-minute call saves an average of $30/month. They expect you not to call." }
      ], tip: "The best financial move is the one you actually make today, not the perfect plan you never start." },
    { title: "5 Zero-Cost Wins for Right Now", intro: "No money required. Just attention and action.",
      items: [
        { title: "Check your bank fees", desc: "The average American pays $200/year in avoidable bank fees. Call and complain — most get refunded immediately." },
        { title: "Price match your groceries", desc: "Most major stores will match a competitor's price on the spot. Screenshot it, show it, save it." },
        { title: "Turn off one-click buying", desc: "Remove saved payment methods from Amazon. The friction saves hundreds per year." },
        { title: "Negotiate your rent", desc: "If you've been a reliable tenant, ask. Many landlords prefer a known tenant over finding a new one." },
        { title: "Eat what you have", desc: "Before any grocery run, do a full pantry sweep. Most households have 3–5 full meals sitting ignored." }
      ], tip: "Broke mode isn't about deprivation — it's about attention. Pay attention to where your money actually goes." },
    { title: "Broke Mode Moves That Hit Different", intro: "Strategies the financially comfortable never had to learn.",
      items: [
        { title: "Buy used, sell used", desc: "Facebook Marketplace and OfferUp are a parallel economy. Buy everything used, sell everything you don't use." },
        { title: "Free trials are a skill", desc: "Master the calendar reminder. One free trial per month = $120+ in software you never paid for annually." },
        { title: "Generic is usually identical", desc: "Store brand medications and cleaning supplies are often made in the same factory. Read the label." },
        { title: "DIY your cleaning supplies", desc: "Vinegar, baking soda, and dish soap clean everything. Stop paying $8 per bottle for branded water." },
        { title: "Walk or bike when possible", desc: "Every trip under 2 miles costs $1–2 in fuel and wear. That's $50–100/month for most people." }
      ], tip: "Financial resilience is built in the daily decisions nobody else sees you making." },
    { title: "This Week's Budget Power Plays", intro: "Small moves, compounding results.",
      items: [
        { title: "Pack lunch three days", desc: "Bringing lunch just 3 days a week saves $150–200/month vs buying out. That's a car payment." },
        { title: "Unsubscribe from retail emails", desc: "You cannot buy what you don't know is on sale. Unsubscribe from every store email today." },
        { title: "Use cash for discretionary spending", desc: "Physically handing over bills creates awareness that cards never will. Try it for one week." },
        { title: "Find your local Buy Nothing group", desc: "Facebook has hyperlocal groups where people give away furniture, appliances, and clothes for free." },
        { title: "Refinance anything with interest", desc: "High-interest debt costs you money every day. Even dropping 2% on a balance saves real money fast." }
      ], tip: "The gap between where you are and where you want to be is filled with small daily decisions." },
    { title: "Hustle-Mode Financial Hacks", intro: "For when you're playing offense AND defense.",
      items: [
        { title: "Sell something today", desc: "Walk around your home and find one thing to sell on Facebook Marketplace. Most people have $200–500 sitting unused." },
        { title: "Open a high-yield savings account", desc: "If your savings pays less than 4%, you're losing to inflation. Takes 10 minutes to fix." },
        { title: "Do a no-spend challenge", desc: "Pick 3 days this week to spend zero dollars outside fixed bills. It resets your spending baseline fast." },
        { title: "Ask for a raise", desc: "The single highest ROI hour of your year is spent preparing a case for a raise. Most people never ask." },
        { title: "Automate your savings", desc: "Set up a $25/week automatic transfer. You will not miss it. In a year that's $1,300 you didn't have." }
      ], tip: "You don't need a perfect budget. You need one or two habits that run on autopilot." }
  ],
  food: [
    { title: "This Week's Cheap Eats Playbook", intro: "Five ways to eat well and spend almost nothing.",
      items: [
        { title: "Rice + beans + anything", desc: "Complete protein, dirt cheap, infinitely customizable. Master this and you've solved 30% of your food budget." },
        { title: "Frozen vegetables beat fresh", desc: "Frozen veg is picked at peak ripeness — often more nutritious than 'fresh' that traveled 1,500 miles." },
        { title: "Egg every meal", desc: "At $0.20–0.30 per egg, it's the most affordable complete protein on earth. Breakfast, lunch, dinner — eggs work everywhere." },
        { title: "Shop the store perimeter", desc: "Inner aisles have the highest margins and lowest nutrition. Perimeter = produce, proteins, dairy." },
        { title: "Batch cook on Sunday", desc: "Cook grains, roast vegetables, prep proteins. Mix and match all week for near-zero effort meals." }
      ], tip: "The cheapest meal you'll ever eat is the one you made from what was already in your kitchen." },
    { title: "5 Meals Under $2 Per Serving", intro: "Real food. Real cheap. No compromise on taste.",
      items: [
        { title: "Lentil soup", desc: "Lentils, canned tomatoes, onion, garlic, cumin. $1.20/serving, feeds 6, takes 30 minutes." },
        { title: "Oatmeal power bowl", desc: "Rolled oats, banana, peanut butter, honey. $0.80/serving and keeps you full for 5 hours." },
        { title: "Stir fry with whatever", desc: "Frozen veg bag + rice + soy sauce + egg = complete meal for under $1.50." },
        { title: "Black bean tacos", desc: "Canned black beans, corn tortillas, cabbage slaw. $1.40/serving and genuinely delicious." },
        { title: "Pasta aglio e olio", desc: "Pasta, olive oil, garlic, red pepper flakes. Italian peasant food for $0.90/serving that impresses everyone." }
      ], tip: "The most expensive ingredient in any meal is the one you didn't use and threw away. Plan before you shop." }
  ],
  health: [
    { title: "Free Ways to Stay Healthy This Week", intro: "Five health moves that cost absolutely nothing.",
      items: [
        { title: "Walk 30 minutes daily", desc: "Free, no equipment needed, burns calories, reduces cortisol, improves sleep. The most underrated health intervention." },
        { title: "Drink more water", desc: "Most people are mildly dehydrated constantly. Before supplements, try an extra 32oz daily for one week." },
        { title: "Sleep is your cheapest medicine", desc: "7–9 hours improves immune function, metabolism, mood, and performance. It costs nothing and most people skip it." },
        { title: "Bodyweight workouts", desc: "Push-ups, squats, lunges, planks. Zero equipment needed. YouTube has thousands of free guided workouts." },
        { title: "Breathe intentionally", desc: "4-7-8 breathing reduces cortisol measurably. Inhale 4 counts, hold 7, exhale 8. Free and actually works." }
      ], tip: "The most expensive health decision you'll ever make is ignoring the free stuff that actually works." }
  ],
  style: [
    { title: "Budget Style Moves That Hit Different", intro: "Five ways to look expensive without spending like it.",
      items: [
        { title: "Thrift store basics first", desc: "Buy T-shirts, jeans, and chinos used — spend what you saved on one quality piece that elevates everything." },
        { title: "Learn basic tailoring", desc: "A $10 thrift store blazer altered to fit beats a $200 off-the-rack blazer that doesn't. Fit is everything." },
        { title: "Neutral color palette", desc: "Black, white, grey, navy, tan. Everything matches everything. You look intentional with half the wardrobe." },
        { title: "Shoe care extends life by years", desc: "A $5 brush and polish turns $40 shoes into shoes that look $120. Clean shoes signal everything." },
        { title: "Depop and Poshmark for brands", desc: "Designer items at 70–90% off. If you know your measurements, online thrifting is a superpower." }
      ], tip: "Style is mostly confidence. Confidence is mostly fit. Fit costs $15 at a tailor." }
  ],
  travel: [
    { title: "Broke Mode Travel Playbook", intro: "Five ways to go further and spend less.",
      items: [
        { title: "Google Flights explore map", desc: "Click Explore, enter your airport — it shows the cheapest destinations available right now. Let price lead." },
        { title: "Fly Tuesday and Wednesday", desc: "Flights on these days are statistically 20–30% cheaper than weekends. Flexibility is the best travel hack." },
        { title: "Housesit for free accommodation", desc: "TrustedHousesitters connects travelers with homeowners. Stay free in exchange for watching the place." },
        { title: "Eat where locals eat", desc: "Walk three blocks from any tourist attraction and prices drop 40–60%. The food is also better." },
        { title: "Travel carry-on only", desc: "Baggage fees average $35–70 per bag per flight. Master packing light and save $100+ on every round trip." }
      ], tip: "The best travel hack is going where it's cheap right now, not where your bucket list says." }
  ],
  freestuff: [
    { title: "This Week's Free Score Guide", intro: "Five legit ways to get something for nothing.",
      items: [
        { title: "Birthday freebies route", desc: "Starbucks, Sephora, Denny's, Chick-fil-A — plan a birthday route and collect free food and products all day." },
        { title: "PINCHme samples", desc: "Sign up at PINCHme.com for monthly free full-size product samples. New drops every Tuesday — set an alarm." },
        { title: "Reddit r/freebies daily", desc: "Updated constantly with verified free products, samples, and no-purchase offers from real people." },
        { title: "Library of Things", desc: "Many public libraries loan tools, cameras, instruments, and board games. Check your local library's catalog." },
        { title: "Email the manufacturer", desc: "Tell your favorite brand you love their product. Most will send coupons or free samples directly." }
      ], tip: "The freebie mindset isn't about being cheap — it's about knowing what you're owed as a loyal customer." }
  ],
  shop: [
    { title: "This Week's Smart Shopping Moves", intro: "Five ways to buy smarter and spend less right now.",
      items: [
        { title: "CamelCamelCamel before Amazon", desc: "Check price history before buying anything on Amazon. Most items go on sale cyclically — wait and save 20–40%." },
        { title: "Open box at Best Buy", desc: "Open box items are often returns with zero defects. Same product, same warranty, 15–30% cheaper." },
        { title: "Buy refurbished electronics", desc: "Apple Certified Refurbished, Dell Outlet, Amazon Renewed — same quality with warranties at 20–40% off retail." },
        { title: "Warehouse stores for staples", desc: "Costco and Sam's Club unit prices on paper products and pantry staples beat every other option." },
        { title: "Wait 72 hours on any purchase over $50", desc: "The 72-hour rule kills impulse buys. If you still want it after three days, it's probably worth it." }
      ], tip: "The best purchase is the one you didn't make impulsively. Patience is the most profitable shopping strategy." }
  ],
  pets: [
    { title: "Broke Mode Pet Parent Guide", intro: "Five ways to spoil your pet without breaking the bank.",
      items: [
        { title: "Buy pet food in bulk", desc: "Chewy's Autoship saves 35% on repeat orders. Set it, forget it, never pay full price again." },
        { title: "Low-cost vet clinics", desc: "PetSmart and Petco partner with low-cost clinics for vaccines at 50–70% below private vet prices." },
        { title: "DIY toys work just as well", desc: "A cardboard box, paper bag, crinkled foil ball — cats especially don't care about price tags." },
        { title: "Preventative care saves thousands", desc: "Monthly flea prevention, dental chews, and regular nail trims prevent the vet bills that actually hurt." },
        { title: "Pet insurance for young animals", desc: "$30–50/month for a puppy pays for itself on the first emergency. Don't wait until rates go up." }
      ], tip: "Your pet doesn't know what their toys cost. They know if you showed up. Show up." }
  ],
  drinks: [
    { title: "This Week's Broke Mode Bar Cart", intro: "Five ways to drink well and spend less.",
      items: [
        { title: "Buy handles not bottles", desc: "The 1.75L handle is 30–40% cheaper per ounce than the 750ml bottle. Do the math once." },
        { title: "Learn 3 cocktails well", desc: "Old Fashioned, Margarita, Gin & Tonic. Know these cold and you never overpay at a bar for basics again." },
        { title: "Trader Joe's wine section", desc: "Their $5–8 wines consistently outperform bottles costing 3x as much in blind tastings." },
        { title: "Happy hour is a lifestyle", desc: "Most bars offer 50% off from 4–6pm. Shift your schedule 90 minutes and cut your bar tab in half." },
        { title: "SodaStream upgrade", desc: "Pays for itself in 3 months vs buying sparkling water. Great mixer, zero waste, always on hand." }
      ], tip: "Drinking well on a budget is about knowing what you actually like and buying more of that." }
  ],
  music: [
    { title: "Broke Mode Listening Guide", intro: "Five ways to fill your ears without emptying your wallet.",
      items: [
        { title: "Spotify free is genuinely fine", desc: "Shuffle mode and ads are a small price for 100 million songs. Use it on WiFi and data stays flat." },
        { title: "YouTube Music free tier", desc: "No subscription required for full catalog access. Video ads are a small price for infinite music." },
        { title: "Library digital access", desc: "Libby and Hoopla give free audiobooks and music through your library card. Completely free." },
        { title: "SoundCloud for discovery", desc: "Independent artists, early releases, underground scenes — content you literally can't find anywhere else." },
        { title: "Family plans split six ways", desc: "Spotify Family split 6 ways costs under $3/month each. Find 5 people and make it happen." }
      ], tip: "The best music is the music that moves you. Most of it is free if you know where to look." }
  ],

  beauty: [
    { title: "Broke Mode Beauty Playbook", intro: "Five ways to glow up without paying up.",
      items: [
        { title: "Vitamin C serum is the cheat code", desc: "The one skincare ingredient dermatologists universally agree on. Find it for $12–15 and skip the $80 branded version." },
        { title: "Drugstore dupes are real", desc: "e.l.f., Wet n Wild, and NYX consistently beat prestige brands in blind tests. Learn 3 dupes for your most-used products." },
        { title: "SPF every single day", desc: "The most anti-aging thing you can do costs $8 and takes 30 seconds. Skipping it costs thousands in treatments later." },
        { title: "Vaseline is a luxury dupe", desc: "High-end lip treatments, cuticle creams, and skin balms are mostly petrolatum. Vaseline does the same thing for $3." },
        { title: "Request samples before buying", desc: "Sephora, Ulta, and most beauty counters will give samples on request. Test before spending $40 on something that breaks you out." }
      ], tip: "The beauty industry is built on convincing you that price equals quality. It rarely does." }
  ],
  meals: [
    { title: "5 Quick Meals Under $5 Per Serving", intro: "Fast, cheap, and actually good.",
      items: [
        { title: "Fried rice 10-minute version", desc: "Day-old rice, egg, soy sauce, frozen peas, sesame oil. Under $1.50/serving and better than takeout." },
        { title: "Bean and cheese quesadillas", desc: "Canned beans, shredded cheese, flour tortillas. $1.20/serving, ready in 8 minutes, customizable infinitely." },
        { title: "Pasta with canned tomatoes", desc: "Pasta, canned crushed tomatoes, garlic, olive oil, basil. $0.90/serving and tastes like you actually cooked." },
        { title: "Loaded baked potato", desc: "Potato, canned chili, shredded cheese, sour cream. $1.80/serving and filling enough to skip dessert." },
        { title: "Scrambled egg tacos", desc: "Eggs, corn tortillas, salsa, whatever cheese you have. $1.10/serving and works for breakfast, lunch, or dinner." }
      ], tip: "The fastest meal you can make is the one with ingredients already in your kitchen. Shop your pantry first." }
  ],
  coupons: [
    { title: "Stack These Deals This Week", intro: "Five ways to legally pay less for everything.",
      items: [
        { title: "The triple stack method", desc: "Store sale + manufacturer coupon + cashback app = paying almost nothing. Ibotta + store circular + paper coupon is the trifecta." },
        { title: "Cashback credit cards on everything", desc: "If you pay it off monthly, a 2% cashback card on all spending is $240/year back on $12,000 in normal expenses." },
        { title: "Price match guarantee stacking", desc: "Show Target a lower price, get it matched, then use your Target Circle coupon on top. Most stores allow this." },
        { title: "Ibotta before every grocery run", desc: "Check Ibotta before your list is final. Build your list around what has cashback this week. Saves $15–30 per trip." },
        { title: "Browser extensions are passive money", desc: "Honey and Rakuten run in the background and find codes automatically. Install once, save forever." }
      ], tip: "Couponing isn't about clipping paper. It's about building a system that runs while you shop normally." }
  ],
  fun: [
    { title: "This Weekend's Free Fun Ideas", intro: "Five things to do that cost next to nothing.",
      items: [
        { title: "National Park free days", desc: "The NPS offers free entry on specific days all year. Check nps.gov/planyourvisit/fee-free-parks.htm." },
        { title: "Free museum days", desc: "Most major museums offer free admission once a month. Google your city + 'free museum days' and build a calendar." },
        { title: "Outdoor movie nights", desc: "Cities run free outdoor screenings all summer. Bring a blanket, make popcorn at home, arrive early." },
        { title: "Community events calendar", desc: "Your city parks and rec department runs free concerts, festivals, and workshops most people never find." },
        { title: "Host a game night", desc: "Potluck + board games + good people = a better night than any $60/person restaurant. Host one this week." }
      ], tip: "The most memorable nights rarely cost the most money. They cost the most intention." }
  ]
};

// ── CONTENT ENGINE ────────────────────────────────────────────
function loadAIContent(containerId, topic, promptText) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let bank = CONTENT_BANKS.home;
  const t = (topic || '').toLowerCase();
  if (t.includes('food') || t.includes('meal') || t.includes('eat'))             bank = CONTENT_BANKS.food;
  else if (t.includes('health') || t.includes('wellness'))                        bank = CONTENT_BANKS.health;
  else if (t.includes('style') || t.includes('fashion'))                          bank = CONTENT_BANKS.style;
  else if (t.includes('travel'))                                                   bank = CONTENT_BANKS.travel;
  else if (t.includes('free') || t.includes('freebie') || t.includes('sample'))  bank = CONTENT_BANKS.freestuff;
  else if (t.includes('shop') || t.includes('buy') || t.includes('deal'))        bank = CONTENT_BANKS.shop;
  else if (t.includes('pet'))                                                      bank = CONTENT_BANKS.pets;
  else if (t.includes('drink') || t.includes('cocktail') || t.includes('bar'))   bank = CONTENT_BANKS.drinks;
  else if (t.includes('music') || t.includes('audio') || t.includes('listen'))   bank = CONTENT_BANKS.music;
  else if (t.includes('fun') || t.includes('entertain') || t.includes('activ'))  bank = CONTENT_BANKS.fun;
  else if (t.includes('beauty') || t.includes('skincare') || t.includes('makeup'))   bank = CONTENT_BANKS.beauty;
  else if (t.includes('meal') || t.includes('quick') || t.includes('recipe'))         bank = CONTENT_BANKS.meals;
  else if (t.includes('coupon') || t.includes('stack') || t.includes('deal hunt'))    bank = CONTENT_BANKS.coupons;

  const data = bank[Math.floor(Math.random() * bank.length)];
  renderAIContent(container, data, topic);
}

function renderAIContent(container, data, topic) {
  const itemsHTML = (data.items || []).map(item => `
    <li style="margin-bottom:0.8rem"><strong style="color:var(--white)">${item.title}</strong> — ${item.desc}</li>
  `).join('');

  container.innerHTML = `
    <div class="ai-block">
      <span class="ai-badge">✦ Fresh Pick</span>
      <h3>${data.title || topic}</h3>
      ${data.intro ? `<p style="margin-bottom:1rem">${data.intro}</p>` : ''}
      ${itemsHTML ? `<ul style="margin:1rem 0;padding-left:1.2rem">${itemsHTML}</ul>` : ''}
      ${data.tip ? `<p style="color:var(--lime);margin-top:1.2rem">💡 ${data.tip}</p>` : ''}
    </div>`;
}

// ── BLOG RSS FEED ─────────────────────────────────────────────
const RSS_FEEDS = [
  { name: 'The Penny Hoarder',     url: 'https://www.thepennyhoarder.com/feed/' },
  { name: 'Frugalwoods',           url: 'https://www.frugalwoods.com/feed/' },
  { name: 'Budget Bytes',          url: 'https://www.budgetbytes.com/feed/' },
  { name: 'Making Sense of Cents', url: 'https://www.makingsenseofcents.com/feed' },
];

async function loadBlogFeed(containerId, maxItems = 9) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '<div class="ai-loading" style="padding:3rem 2rem">Loading latest articles...</div>';

  const allItems = [];

  // Try multiple RSS-to-JSON services in sequence
  const PROXIES = [
    (url) => `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}&count=4`,
    (url) => `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
    (url) => `https://rss.app/feeds/v1.1/${encodeURIComponent(url)}.json`,
  ];

  for (const feed of RSS_FEEDS) {
    let loaded = false;

    // Try rss2json first
    try {
      const res  = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed.url)}&count=4`);
      const json = await res.json();
      if (json.status === 'ok' && json.items && json.items.length > 0) {
        json.items.forEach(item => {
          const title = item.title || '';
          const link  = item.link || '#';
          const desc  = (item.description || item.content || '').replace(/<[^>]+>/g,'').slice(0,120);
          const date  = item.pubDate || '';
          if (title) allItems.push({ title, link, desc, date, source: feed.name });
        });
        loaded = true;
      }
    } catch(e) {}

    // Fallback to allorigins if rss2json failed for this feed
    if (!loaded) {
      try {
        const res   = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(feed.url)}`);
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
      } catch(e) {}
    }
  }

  if (allItems.length === 0) {
    // Show static fallback articles so page is never empty
    const fallback = [
      { source:'The Penny Hoarder', title:'25 Legit Ways to Make Extra Money This Month', link:'https://www.thepennyhoarder.com', desc:'Whether you need a little extra cash or want to build a side income, these proven strategies actually work.', date:'' },
      { source:'Budget Bytes', title:'How to Meal Prep for the Week for Under $50', link:'https://www.budgetbytes.com', desc:'Batch cooking saves time and money. Here's how to stock your fridge with a week of meals without breaking the bank.', date:'' },
      { source:'Frugalwoods', title:'The Simple Framework for Achieving Financial Independence', link:'https://www.frugalwoods.com', desc:'Financial independence doesn't require a six-figure income. It requires a gap between what you earn and what you spend.', date:'' },
      { source:'Making Sense of Cents', title:'How I Paid Off $40,000 in Debt While Working Full Time', link:'https://www.makingsenseofcents.com', desc:'Debt payoff is possible on any income. The key is consistency, a plan, and knowing exactly where every dollar goes.', date:'' },
      { source:'The Penny Hoarder', title:'Best Cashback Apps That Actually Pay You Back', link:'https://www.thepennyhoarder.com', desc:'Ibotta, Rakuten, and others put real cash back in your pocket on purchases you were already making.', date:'' },
      { source:'Budget Bytes', title:'10 Dinners Under $2 Per Serving', link:'https://www.budgetbytes.com', desc:'Eating well on a tight budget is completely doable. These recipes prove you don't have to sacrifice taste to save money.', date:'' },
    ];
    allItems.push(...fallback);
  }

  allItems.sort(() => Math.random() - 0.5);
  const shown = allItems.slice(0, maxItems);

  container.innerHTML = '<div class="blog-grid">' + shown.map(item =>
    '<a class="blog-card" href="' + item.link + '" target="_blank" rel="noopener">' +
    '<span class="blog-source">' + item.source + '</span>' +
    '<span class="blog-title">' + item.title + '</span>' +
    '<span class="blog-desc">' + item.desc + '...</span>' +
    '<span class="blog-date">' + (item.date ? new Date(item.date).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}) : '') + '</span>' +
    '</a>'
  ).join('') + '</div>';
}
