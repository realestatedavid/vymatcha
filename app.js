// ─── DRINK DATA ──────────────────────────────────────────────
const DRINKS = {
  matcha: [
    { id:'ein', name:'Signature Einspanner', desc:'Matcha with pillowy cream top', emoji:'🍵', seasonal:false },
    { id:'reg', name:'Regular Matcha Latte', desc:'Classic matcha with your choice of milk', emoji:'🍵', seasonal:false },
    { id:'str', name:'Strawberry Matcha', desc:'Matcha layered with fresh strawberry', emoji:'🍓', seasonal:false },
    { id:'jas', name:'Jasmine Tea Matcha Cloud', desc:'Jasmine milk tea with matcha cloud', emoji:'🌸', seasonal:false },
    { id:'pan', name:'Pandan Matcha', desc:'Pandan infused matcha latte', emoji:'🌿', seasonal:false },
    { id:'coc', name:'Coconut Cloud', desc:'Coconut water with matcha cream top', emoji:'🥥', seasonal:false },
    { id:'map', name:'Maple Matcha', desc:'Matcha with pure maple syrup', emoji:'🍁', seasonal:false },
    { id:'man', name:'Mango Matcha', desc:'Matcha layered with ripe mango', emoji:'🥭', seasonal:true },
    { id:'ube', name:'Ube Matcha', desc:'Matcha latte with ube cold foam', emoji:'💜', seasonal:false },
  ],
  jasmine: [
    { id:'jh',   name:'Honey Jasmine', desc:'Jasmine green tea with wildflower honey', emoji:'🍯' },
    { id:'jstr', name:'Strawberry Jasmine', desc:'Jasmine green tea with fresh strawberry', emoji:'🍓' },
    { id:'jman', name:'Mango Jasmine', desc:'Jasmine green tea with fresh mango puree', emoji:'🥭' },
    { id:'jpas', name:'Passionfruit Jasmine', desc:'Jasmine green tea with tangy passionfruit', emoji:'🧪' },
  ],
  refreshers: [
    { id:'lim', name:'Limeade', desc:'Freshly squeezed lime with cane sugar', emoji:'🍋‍🟩' },
    { id:'lem', name:'Lemonade', desc:'Fresh lemon with cane sugar', emoji:'🍋' },
  ],
  coffee: [
    { id:'vc',  name:'Vietnamese Coffee', desc:'Rich drip coffee with condensed milk', emoji:'☕' },
    { id:'bs',  name:'Brown Sugar Shaken Espresso', desc:'Espresso, brown sugar, shaken over ice', emoji:'🤎' },
    { id:'wm',  name:'White Mocha Iced Latte', desc:'Espresso, white choc mocha, milk & ice', emoji:'🥛' },
    { id:'moc', name:'Mocha Iced Latte', desc:'Espresso, chocolate mocha, milk & ice', emoji:'🍫' },
  ],
  other_tea: [
    { id:'tt', name:'Thai Tea', desc:'Thai-spiced black tea, sweet & creamy', emoji:'🧡' },
    { id:'tg', name:'Thai Green Tea', desc:'Thai green tea base, condensed milk', emoji:'🌿' },
  ]
};

const TOPPINGS = [
  { id:'boba',   label:'Boba Pearls',  icon:'⚫' },
  { id:'lychee', label:'Lychee Jelly', icon:'⚪' },
];

const MILK_OPTIONS = ['Oat', 'Soy', 'Whole'];
const ICE_LEVELS   = ['Low', 'Regular', 'Extra'];
const SUGAR_LEVELS = ['No', 'Low', 'Regular', 'Extra'];

// ─── STATE ───────────────────────────────────────────────────
let cart = [];
let modal = { drink:null, sugar:'Regular', toppings:[], milk:'Oat', ice:'Regular', qty:1 };
let activeCategory = 'matcha';

// ─── DOM ─────────────────────────────────────────────────────
const grids = {
  matcha: document.getElementById('grid-matcha'),
  jasmine: document.getElementById('grid-jasmine'),
  refreshers: document.getElementById('grid-refreshers'),
  coffee: document.getElementById('grid-coffee'),
  other_tea: document.getElementById('grid-other-tea'),
};

const cartDrawer   = document.getElementById('cart-drawer');
const cartOverlay  = document.getElementById('cart-overlay');
const cartItems    = document.getElementById('cart-items');
const cartCount    = document.getElementById('cart-count');
const cartTotalEl  = document.getElementById('cart-total-val');
const modalOverlay = document.getElementById('modal-overlay');
const sugarContainer    = document.getElementById('sugar-container');
const toppingsContainer = document.getElementById('toppings-container');
const milkContainer     = document.getElementById('milk-container');
const iceContainer      = document.getElementById('ice-container');
const modalName    = document.getElementById('modal-name');
const modalDesc    = document.getElementById('modal-desc');
const modalIcon    = document.getElementById('modal-icon');
const qtyNum       = document.getElementById('qty-num');
const confirmOverlay = document.getElementById('confirm-overlay');
const toast        = document.getElementById('toast');

// ─── RENDER DRINKS ───────────────────────────────────────────
function getSVG(id, large) {
  const svg = (typeof DRINK_SVGS !== 'undefined' && DRINK_SVGS[id]) || '';
  if (!svg) return `<div style="width:${large?100:72}px;height:${large?120:86}px;background:rgba(106,148,98,0.1);border-radius:12px;"></div>`;
  if (!large) {
    return svg.replace(/width="80"/, 'width="72"').replace(/height="96"/, 'height="86"');
  }
  return svg.replace(/width="80"/, 'width="100"').replace(/height="96"/, 'height="120"');
}

function renderDrinks() {
  Object.keys(DRINKS).forEach(cat => {
    const grid = grids[cat];
    if (!grid) return;
    grid.innerHTML = DRINKS[cat].map(d => `
      <div class="drink-card" data-id="${d.id}" data-cat="${cat}" tabindex="0" role="button" aria-label="Customize ${d.name}">
        <div class="card-svg">${getSVG(d.id, false)}</div>
        <div class="card-body">
          <div class="card-name">${d.name}${d.seasonal ? '<span class="tag-seasonal">Seasonal</span>' : ''}</div>
          <div class="card-desc">${d.desc}</div>
        </div>
        <div class="card-hint">Customize ✦</div>
      </div>`).join('');
    grid.querySelectorAll('.drink-card').forEach(card => {
      card.addEventListener('click', () => openModal(card.dataset.id, card.dataset.cat));
      card.addEventListener('keydown', e => { if (e.key==='Enter'||e.key===' ') openModal(card.dataset.id, card.dataset.cat); });
    });
  });
}

// ─── TABS ────────────────────────────────────────────────────
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    activeCategory = btn.dataset.cat;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.category-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('panel-' + activeCategory).classList.add('active');
  });
});

// ─── MODAL ───────────────────────────────────────────────────
function openModal(id, cat) {
  const drink = DRINKS[cat].find(d => d.id === id);
  if (!drink) return;
  modal = { drink, sugar:'Regular', toppings:[], milk:'Oat', ice:'Regular', qty:1 };

  modalName.textContent = drink.name;
  modalDesc.textContent = drink.desc;
  modalIcon.innerHTML   = getSVG(drink.id, true);
  qtyNum.textContent    = '1';

  renderSugar();
  renderToppings();
  renderMilk();
  renderIce();

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modal-close').addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });

// Sugar
function renderSugar() {
  sugarContainer.innerHTML = SUGAR_LEVELS.map(s => `
    <button class="milk-opt${s==='Regular'?' selected':''}" data-sugar="${s}">${s}</button>`).join('');
  sugarContainer.querySelectorAll('[data-sugar]').forEach(btn => {
    btn.addEventListener('click', () => {
      modal.sugar = btn.dataset.sugar;
      sugarContainer.querySelectorAll('[data-sugar]').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });
}

// Toppings
function renderToppings() {
  toppingsContainer.innerHTML = TOPPINGS.map(t => `
    <button class="topping-chip" data-top="${t.id}" aria-pressed="false">
      <span>${t.icon}</span> ${t.label}
    </button>`).join('');
  toppingsContainer.querySelectorAll('.topping-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      const top = btn.dataset.top;
      if (modal.toppings.includes(top)) {
        modal.toppings = modal.toppings.filter(t => t !== top);
        btn.classList.remove('selected');
      } else {
        modal.toppings.push(top);
        btn.classList.add('selected');
      }
    });
  });
}

// Milk
function renderMilk() {
  milkContainer.innerHTML = MILK_OPTIONS.map(m => `
    <button class="milk-opt${m==='Oat'?' selected':''}" data-milk="${m}">${m}</button>`).join('');
  milkContainer.querySelectorAll('.milk-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      modal.milk = btn.dataset.milk;
      milkContainer.querySelectorAll('.milk-opt').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });
}

// Ice Level
function renderIce() {
  iceContainer.innerHTML = ICE_LEVELS.map(lvl => `
    <button class="milk-opt${lvl==='Regular'?' selected':''}" data-ice="${lvl}">${lvl}</button>`).join('');
  iceContainer.querySelectorAll('[data-ice]').forEach(btn => {
    btn.addEventListener('click', () => {
      modal.ice = btn.dataset.ice;
      iceContainer.querySelectorAll('[data-ice]').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });
}

// Qty
document.getElementById('qty-minus').addEventListener('click', () => {
  if (modal.qty > 1) { modal.qty--; qtyNum.textContent = modal.qty; }
});
document.getElementById('qty-plus').addEventListener('click', () => {
  modal.qty++; qtyNum.textContent = modal.qty;
});

// Add to order
document.getElementById('add-to-order').addEventListener('click', () => {
  const { drink, sugar, toppings, milk, ice, qty } = modal;
  const tops = toppings.map(t => TOPPINGS.find(x => x.id === t));
  for (let i = 0; i < qty; i++) {
    cart.push({ id: Date.now() + i, drink, sugar, toppings: tops, milk, ice });
  }
  closeModal();
  renderCart();
  showToast(`${drink.name} added!`);
});

// ─── CART ────────────────────────────────────────────────────
function renderCart() {
  const count = cart.length;
  cartCount.textContent = count;
  cartCount.classList.toggle('visible', count > 0);

  if (cart.length === 0) {
    cartItems.innerHTML = `<div class="cart-empty"><div class="empty-icon">🍃</div><p>Your order is empty</p></div>`;
    if (cartTotalEl) cartTotalEl.closest('.cart-total').style.display = 'none';
  } else {
    if (cartTotalEl) cartTotalEl.closest('.cart-total').style.display = 'flex';
    cartItems.innerHTML = cart.map(item => `
      <div class="cart-item" data-cart-id="${item.id}">
        <div class="cart-item-icon">${item.drink.emoji}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.drink.name}</div>
          <div class="cart-item-detail">
            Sugar: ${item.sugar} · Ice: ${item.ice} · Milk: ${item.milk}
            ${item.toppings.length ? '<br>+ ' + item.toppings.map(t=>t.label).join(', ') : ''}
          </div>
        </div>
        <button class="cart-item-remove" data-remove="${item.id}" aria-label="Remove">✕</button>
      </div>`).join('');
    cartItems.querySelectorAll('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        cart = cart.filter(c => c.id !== parseInt(btn.dataset.remove));
        renderCart();
      });
    });
  }
  document.getElementById('place-order-btn').disabled = cart.length === 0;
}

function openCart() {
  cartDrawer.classList.add('open');
  cartOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  cartDrawer.classList.remove('open');
  cartOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('cart-btn').addEventListener('click', openCart);
document.getElementById('cart-close').addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

document.getElementById('place-order-btn').addEventListener('click', () => {
  closeCart();
  confirmOverlay.classList.add('open');
  cart = [];
  renderCart();
});
document.getElementById('confirm-close').addEventListener('click', () => {
  confirmOverlay.classList.remove('open');
});

// ─── TOAST ───────────────────────────────────────────────────
let toastTimer;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

// ─── INIT ────────────────────────────────────────────────────
renderDrinks();
renderCart();
