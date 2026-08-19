// APP LOGIC FOR SERVIDOM S.A. (EMPRESA 3) WEB PORTAL

// 1. Mobile Menu Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    navMenu.style.flexDirection = 'column';
    navMenu.style.position = 'absolute';
    navMenu.style.top = '75px';
    navMenu.style.left = '0';
    navMenu.style.width = '100%';
    navMenu.style.background = 'white';
    navMenu.style.padding = '20px';
    navMenu.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
  });
}

// 2. Interactive Quotation Calculator
function updateQuote() {
  const service = document.getElementById('serviceType').value;
  const hosts = parseInt(document.getElementById('hostsCount').value) || 1;
  const sla = document.getElementById('slaLevel').value;

  let baseRate = 500;
  if (service === 'callcenter') baseRate = 850;
  if (service === 'ecommerce') baseRate = 650;
  if (service === 'infra') baseRate = 1200;
  if (service === 'vpn') baseRate = 400;

  let hostCost = hosts * 25;
  let slaMultiplier = 1.0;
  if (sla === 'gold') slaMultiplier = 1.35;
  if (sla === 'platinum') slaMultiplier = 1.75;

  const totalUSD = (baseRate + hostCost) * slaMultiplier;
  const totalDOP = totalUSD * 60.0; // Tasa 60 DOP/USD

  document.getElementById('priceUSD').innerText = '$' + totalUSD.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' USD';
  document.getElementById('priceDOP').innerText = '(Aprox. RD$ ' + totalDOP.toLocaleString('es-DO', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' DOP)';
}

function calculateQuote(e) {
  e.preventDefault();
  alert('¡Solicitud de cotización enviada con éxito al equipo comercial de SERVIDOM S.A.! Un representante de ventas se comunicará contigo.');
}

// 3. Simulated Live Call Center Chat
const chatResponses = [
  "Gracias por comunicarte con SERVIDOM S.A. Estamos verificando los servicios de atención telefónica para tu empresa.",
  "Nuestra sede de La Romana procesa más de 10,000 llamadas al día con disponibilidad continua gracias a la VPN IPsec hacia Santo Domingo.",
  "Contamos con agentes especializados en ventas directas y soporte técnico de nivel 1, 2 y 3.",
  "Todos nuestros servidores en Santiago operan bajo autenticación centralizada RADIUS y DNS interno institucional."
];
let respIndex = 0;

function handleChatKey(e) {
  if (e.key === 'Enter') {
    sendChatMessage();
  }
}

function sendChatMessage() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;

  const chatBody = document.getElementById('chatBody');

  // Add user message
  const userMsg = document.createElement('div');
  userMsg.className = 'msg outgoing';
  userMsg.innerHTML = `<p>${escapeHtml(text)}</p><span class="msg-time">Ahora</span>`;
  chatBody.appendChild(userMsg);
  input.value = '';

  chatBody.scrollTop = chatBody.scrollHeight;

  // Simulate incoming agent reply
  setTimeout(() => {
    const agentMsg = document.createElement('div');
    agentMsg.className = 'msg incoming';
    const reply = chatResponses[respIndex % chatResponses.length];
    respIndex++;
    agentMsg.innerHTML = `<p>${reply}</p><span class="msg-time">Ahora</span>`;
    chatBody.appendChild(agentMsg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 1000);
}

function escapeHtml(string) {
  return String(string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// 4. Intranet RADIUS Authentication Simulator
const authorizedUsers = {
  '2025-0720': { name: 'Cristopher Navarro', role: 'Director General de TI & Web', email: 'cnavarro@servidom.com.do' },
  'cnavarro': { name: 'Cristopher Navarro', role: 'Director General de TI & Web', email: 'cnavarro@servidom.com.do' },
  '2025-0054': { name: 'Justin Luciano', role: 'Coordinador de Servicios Digitales & Finanzas', email: 'jluciano@servidom.com.do' },
  'jluciano': { name: 'Justin Luciano', role: 'Coordinador de Servicios Digitales & Finanzas', email: 'jluciano@servidom.com.do' },
  '2025-0035': { name: 'Gregory Morel', role: 'Especialista en Conmutación LAN (Santo Domingo)', email: 'gmorel@servidom.com.do' },
  'gmorel': { name: 'Gregory Morel', role: 'Especialista en Conmutación LAN (Santo Domingo)', email: 'gmorel@servidom.com.do' },
  '2025-1364': { name: 'Sayid Cabral', role: 'Ingeniero de Infraestructura & CECOMPE Liaison', email: 'scabral@servidom.com.do' },
  'scabral': { name: 'Sayid Cabral', role: 'Ingeniero de Infraestructura & CECOMPE Liaison', email: 'scabral@servidom.com.do' },
  '2025-1365': { name: 'Yadhier López', role: 'Administrador de DataCenter & Linux (Santiago)', email: 'ylopez@servidom.com.do' },
  'ylopez': { name: 'Yadhier López', role: 'Administrador de DataCenter & Linux (Santiago)', email: 'ylopez@servidom.com.do' },
  '2025-0753': { name: 'Enmanuel Mendez', role: 'Especialista en Enrutamiento WAN & IPsec (La Romana)', email: 'emendez@servidom.com.do' },
  'emendez': { name: 'Enmanuel Mendez', role: 'Especialista en Enrutamiento WAN & IPsec (La Romana)', email: 'emendez@servidom.com.do' }
};

function fillLogin(matricula) {
  document.getElementById('intraUser').value = matricula;
  document.getElementById('intraPass').value = 'Servidom2026!';
}

function handleIntranetLogin(e) {
  e.preventDefault();
  const user = document.getElementById('intraUser').value.trim().toLowerCase();
  const feedback = document.getElementById('loginFeedback');

  if (authorizedUsers[user]) {
    const info = authorizedUsers[user];
    feedback.className = 'login-feedback success';
    feedback.innerHTML = `<i class="fas fa-check-circle"></i> <strong>Autenticación RADIUS Exitosa (Access-Accept):</strong><br>Bienvenido, <strong>${info.name}</strong><br><em>Rol: ${info.role}</em><br>Correo: ${info.email}`;
  } else {
    feedback.className = 'login-feedback error';
    feedback.innerHTML = `<i class="fas fa-times-circle"></i> <strong>Acceso Denegado (Access-Reject):</strong><br>Usuario no registrado en el servidor RADIUS centralizado. Verifique sus credenciales.`;
  }
}

// Initial quote calculation
updateQuote();
