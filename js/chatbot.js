// Determina la ruta base para los enlaces internos del chatbot
const buildPageLink = page => `/${page}/`;
const CHATBOT_LINKS = {
  servicios: buildPageLink('servicios'),
  precios: buildPageLink('precios'),
  portafolio: buildPageLink('portafolio'),
  contacto: buildPageLink('contacto'),
  proceso: buildPageLink('proceso'),
  faq: buildPageLink('faq')
};

const CHATBOT_KNOWLEDGE = [
  {
    id: 'saludo',
    keywords: ['hola', 'buenas', 'buenos dias', 'buenas tardes', 'buenas noches', 'que tal', 'hey', 'hi'],
    response: `
      <p>Hola, soy <strong>Ox</strong>, el asistente virtual de Orvenix.</p>
      <p>Puedo ayudarte con servicios, precios, tiempos de entrega, portafolio o contacto.</p>
    `,
    suggestions: ['Servicios', 'Precios', 'Contacto']
  },
  {
    id: 'servicios',
    keywords: ['servicios', 'que ofrecen', 'que hacen', 'soluciones', 'desarrollo', 'web', 'app', 'apps', 'ecommerce', 'tienda'],
    response: `
      <p>En Orvenix trabajamos con estas soluciones:</p>
      <p><strong>Sitios web</strong>, <strong>e-commerce</strong>, <strong>apps móviles</strong>, <strong>SEO</strong>, <strong>consultoría</strong> y <strong>mantenimiento</strong>.</p>
      <p>Puedes ver el detalle en <a href="${CHATBOT_LINKS.servicios}">Servicios</a>.</p>
    `,
    suggestions: ['Sitio web', 'Tienda en línea', 'App móvil']
  },
  {
    id: 'precios',
    keywords: ['precio', 'precios', 'costo', 'costos', 'cuanto cuesta', 'presupuesto', 'planes', 'inversion'],
    response: `
      <p>Los precios cambian según el alcance del proyecto.</p>
      <p>Si quieres una referencia rápida, revisa <a href="${CHATBOT_LINKS.precios}">la página de precios</a> o cuéntame qué necesitas para orientarte.</p>
    `,
    suggestions: ['Plan Startup', 'Plan Professional', 'Cotización personalizada']
  },
  {
    id: 'portafolio',
    keywords: ['portafolio', 'portfolio', 'proyectos', 'ejemplos', 'casos de exito', 'trabajos'],
    response: `
      <p>Tenemos proyectos en sitios corporativos, e-commerce, dashboards y productos digitales.</p>
      <p>Puedes revisarlos en <a href="${CHATBOT_LINKS.portafolio}">Portafolio</a>.</p>
    `,
    suggestions: ['Ver portafolio', 'Resultados de proyectos', 'E-commerce']
  },
  {
    id: 'contacto',
    keywords: ['contacto', 'contactar', 'hablar', 'asesor', 'especialista', 'email', 'correo', 'telefono', 'whatsapp'],
    response: `
      <p>Estas son las formas más rápidas de contacto:</p>
      <p><strong>Email:</strong> <a href="mailto:hola@orvenix.com">hola@orvenix.com</a><br><strong>WhatsApp:</strong> <a href="https://wa.me/528112345678" target="_blank" rel="noopener noreferrer">+52 81 1234 5678</a></p>
      <p>Si prefieres, también puedes usar <a href="${CHATBOT_LINKS.contacto}">el formulario de contacto</a>.</p>
    `,
    suggestions: ['Abrir contacto', 'Abrir WhatsApp', 'Solicitar propuesta']
  },
  {
    id: 'tiempos',
    keywords: ['tiempo', 'cuanto tarda', 'plazo', 'duracion', 'entrega', 'semanas', 'dias'],
    response: `
      <p>Como referencia:</p>
      <p><strong>Landing page:</strong> 1 a 2 semanas<br><strong>Sitio corporativo:</strong> 3 a 6 semanas<br><strong>E-commerce o app:</strong> desde 6 semanas</p>
      <p>El tiempo exacto depende del alcance y contenido.</p>
    `,
    suggestions: ['Quiero una landing', 'Necesito e-commerce', 'Cómo trabajan']
  },
  {
    id: 'proceso',
    keywords: ['proceso', 'como trabajan', 'metodologia', 'pasos', 'workflow'],
    response: `
      <p>Nuestro proceso habitual es: <strong>descubrimiento</strong>, <strong>diseño</strong>, <strong>desarrollo</strong> y <strong>lanzamiento</strong>.</p>
      <p>Puedes verlo completo en <a href="${CHATBOT_LINKS.proceso}">la página de Proceso</a>.</p>
    `,
    suggestions: ['Ver proceso', 'Pedir propuesta', 'Tiempo de entrega']
  },
  {
    id: 'sitio-web',
    keywords: ['sitio web', 'pagina web', 'landing page', 'landing', 'web corporativa'],
    response: `
      <p>Un sitio web con Orvenix puede incluir diseño responsive, optimización SEO, velocidad, analítica y formularios de contacto.</p>
      <p>Si quieres, el siguiente paso es enviarnos el objetivo del sitio y te orientamos mejor.</p>
    `,
    suggestions: ['Quiero una landing', 'Quiero precios', 'Solicitar propuesta']
  },
  {
    id: 'ecommerce',
    keywords: ['ecommerce', 'tienda online', 'tienda en linea', 'shopify', 'woocommerce', 'catalogo'],
    response: `
      <p>Podemos crear tiendas online con catálogo, carrito, pagos, panel de gestión y optimización de conversión.</p>
      <p>Si buscas vender en línea, conviene revisar <a href="${CHATBOT_LINKS.servicios}">la página de Servicios</a> y después te orientamos según tu caso.</p>
    `,
    suggestions: ['Costo de tienda', 'Ver e-commerce', 'Hablar con ventas']
  },
  {
    id: 'app',
    keywords: ['app', 'aplicacion', 'aplicacion movil', 'ios', 'android', 'react native', 'flutter'],
    response: `
      <p>Desarrollamos apps móviles y productos web a medida según el flujo de negocio que necesites.</p>
      <p>Si quieres una recomendación precisa, cuéntame qué problema resolverá la app.</p>
    `,
    suggestions: ['App móvil', 'Tiempo de entrega', 'Cotización personalizada']
  },
  {
    id: 'ip-ia',
    keywords: ['ip', 'ip de una ia', 'ip inteligencia artificial', 'direccion ip', 'ip de ai', 'tiene ip', 'ip propia', 'ip chatbot', 'ip robot', 'ip de la ia'],
    response: `
      <p><strong>Sí, una IA puede tener una dirección IP</strong>, pero no directamente.</p>
      <p>La IA en sí es software, no tiene IP propia. Sin embargo, el <strong>servidor donde está alojada</strong> sí tiene una IP (o varias) asignada por el proveedor de hosting o nube.</p>
      <p>Por ejemplo, cuando usas ChatGPT, Claude u otro chatbot, tus peticiones llegan a la IP del servidor de esa empresa.</p>
      <p>Si despliegas tu propia IA en un VPS o servidor dedicado, ese servidor tendrá una IP pública que puedes usar para acceder a tu modelo.</p>
      <p>¿Necesitas alojar una IA en un servidor? Podemos ayudarte con infraestructura y desarrollo.</p>
    `,
    suggestions: ['Hablar con un especialista', 'Ver servicios', 'Solicitar propuesta']
  },
  {
    id: 'gracias',
    keywords: ['gracias', 'perfecto', 'excelente', 'ok', 'vale'],
    response: `
      <p>De acuerdo. Si quieres, puedo llevarte a precios, portafolio o contacto.</p>
    `,
    suggestions: ['Ver precios', 'Ver portafolio', 'Ir a contacto']
  }
];

const CHATBOT_FALLBACK = {
  response: `
    <p>Puedo ayudarte con información de <strong>servicios</strong>, <strong>precios</strong>, <strong>portafolio</strong>, <strong>tiempos</strong> o <strong>contacto</strong>.</p>
    <p>Si tu consulta es específica, también puedes escribirnos desde <a href="${CHATBOT_LINKS.contacto}">Contacto</a>.</p>
  `
};

const CHATBOT_SHORTCUTS = [
  { match: ['abrir whatsapp', 'whatsapp'], action: () => window.open('https://wa.me/528112345678', '_blank', 'noopener') },
  { match: ['abrir contacto', 'ir a contacto', 'solicitar propuesta', 'contacto'], action: () => window.location.href = CHATBOT_LINKS.contacto },
  { match: ['ver servicios', 'servicios'], action: () => window.location.href = CHATBOT_LINKS.servicios },
  { match: ['ver portafolio', 'portafolio'], action: () => window.location.href = CHATBOT_LINKS.portafolio },
  { match: ['ver precios', 'quiero precios', 'precios'], action: () => window.location.href = CHATBOT_LINKS.precios },
  { match: ['ver proceso', 'proceso'], action: () => window.location.href = CHATBOT_LINKS.proceso },
  { match: ['faq', 'preguntas frecuentes'], action: () => window.location.href = CHATBOT_LINKS.faq }
];

class Chatbot {
  constructor() {
    this.isOpen = false;
    this.messages = [];
    this.typingTimer = null;
    this.init();
  }

  init() {
    this.removeLegacyMarkup();
    this.createElements();
    this.cacheDom();
    this.attachEventListeners();
    this.addWelcomeMessage();
  }

  removeLegacyMarkup() {
    const legacyContainer = document.getElementById('chatbot');
    if (legacyContainer) {
      legacyContainer.remove();
    }

    const currentWidget = document.querySelector('.chatbot-widget-wrapper');
    if (currentWidget) {
      currentWidget.remove();
    }
  }

  createElements() {
    const html = `
      <div class="chatbot-backdrop" id="chatbotBackdrop" aria-hidden="true"></div>
      <div class="chatbot-widget-wrapper">
        <div class="chatbot-welcome-bubble" id="chatbotWelcomeBubble">
          <span class="chatbot-welcome-label">Asistente Orvenix</span>
          <strong>Ox está listo para ayudarte</strong>
          <span>Pide precios, tiempos, servicios o contacto y te orienta al instante.</span>
        </div>

        <button class="chatbot-fab" id="chatbotFab" aria-label="Abrir chat de Orvenix" aria-expanded="false" aria-controls="chatbotContainer">
          <svg class="robot-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect x="3" y="11" width="18" height="10" rx="2"></rect>
            <circle cx="12" cy="5" r="2"></circle>
            <path d="M12 7v4"></path>
            <path d="M8 16h.01"></path>
            <path d="M16 16h.01"></path>
            <polyline points="9 22 9 20 15 20 15 22"></polyline>
          </svg>
        </button>

        <section class="chatbot-container" id="chatbotContainer" aria-label="Asistente virtual de Orvenix" aria-hidden="true">
          <div class="chatbot-header">
            <div class="bot-info">
              <div class="bot-avatar">OX</div>
              <div>
                <div class="bot-name">Ox de Orvenix</div>
                <div class="bot-status"><span class="bot-status-dot"></span>Disponible ahora</div>
              </div>
            </div>
            <button class="chatbot-close" id="chatbotClose" aria-label="Cerrar chat">×</button>
          </div>

          <div class="chatbot-topbar">
            <button type="button" class="chatbot-chip" data-chatbot-action="servicios">Servicios</button>
            <button type="button" class="chatbot-chip" data-chatbot-action="precios">Precios</button>
            <button type="button" class="chatbot-chip" data-chatbot-action="proceso">Proceso</button>
            <button type="button" class="chatbot-chip" data-chatbot-action="contacto">Contacto</button>
          </div>

          <div class="chatbot-messages" id="chatbotMessages"></div>

          <form class="chatbot-input-area" id="chatbotForm">
            <input
              type="text"
              class="chatbot-input"
              id="chatbotInput"
              placeholder="Escribe tu pregunta..."
              aria-label="Escribe tu mensaje"
              autocomplete="off"
            />
            <button class="chatbot-send" id="chatbotSend" type="submit" aria-label="Enviar mensaje" disabled>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polyline points="22 2 15 22 11 13 2 9 22 2"></polyline>
              </svg>
            </button>
          </form>

          <div class="chatbot-footer-note">
            Respuestas rápidas sobre servicios, precios, tiempos y contacto.
          </div>
        </section>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', html);
  }

  cacheDom() {
    this.widgetWrapper = document.querySelector('.chatbot-widget-wrapper');
    this.backdrop = document.getElementById('chatbotBackdrop');
    this.fab = document.getElementById('chatbotFab');
    this.closeButton = document.getElementById('chatbotClose');
    this.container = document.getElementById('chatbotContainer');
    this.messagesContainer = document.getElementById('chatbotMessages');
    this.input = document.getElementById('chatbotInput');
    this.sendButton = document.getElementById('chatbotSend');
    this.form = document.getElementById('chatbotForm');
    this.welcomeBubble = document.getElementById('chatbotWelcomeBubble');
    this.quickActions = document.querySelectorAll('[data-chatbot-action]');
  }

  attachEventListeners() {
    if (!this.widgetWrapper || !this.fab || !this.container || !this.input || !this.sendButton || !this.form) {
      return;
    }

    this.fab.addEventListener('click', () => {
      this.toggle();
      this.hideWelcomeBubble();
    });

    if (this.closeButton) {
      this.closeButton.addEventListener('click', () => this.close());
    }

    this.form.addEventListener('submit', (event) => {
      event.preventDefault();
      this.sendMessage();
    });

    this.input.addEventListener('input', () => {
      this.sendButton.disabled = !this.input.value.trim();
    });

    this.quickActions.forEach((button) => {
      button.addEventListener('click', () => {
        const action = button.dataset.chatbotAction;
        if (!action) {
          return;
        }
        this.open();
        this.hideWelcomeBubble();
        this.addMessage('user', button.textContent || action);
        this.processUserMessage(action);
      });
    });

    if (this.backdrop) {
      this.backdrop.addEventListener('click', () => {
        console.log('Backdrop clicked, closing chatbot');
        this.close();
      });
    }

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });

    window.setTimeout(() => {
      this.hideWelcomeBubble();
    }, 10000);
  }

  toggle() {
    if (this.isOpen) {
      this.close();
      return;
    }

    this.open();
  }

  open() {
    this.isOpen = true;
    this.container.classList.add('active');
    this.fab.classList.add('active');
    this.fab.setAttribute('aria-expanded', 'true');
    this.container.setAttribute('aria-hidden', 'false');
    if (this.backdrop) {
      this.backdrop.classList.add('active');
    }
    this.input.focus();
  }

  close() {
    this.isOpen = false;
    this.container.classList.remove('active');
    this.fab.classList.remove('active');
    this.fab.setAttribute('aria-expanded', 'false');
    this.container.setAttribute('aria-hidden', 'true');
    if (this.backdrop) {
      this.backdrop.classList.remove('active');
    }
  }

  hideWelcomeBubble() {
    if (!this.welcomeBubble) {
      return;
    }

    this.welcomeBubble.classList.add('is-hidden');
  }

  addWelcomeMessage() {
    window.setTimeout(() => {
      this.addMessage(
        'bot',
        `
          <p><strong>Hola, soy Ox.</strong> Estoy aquí para ayudarte a aterrizar tu proyecto digital.</p>
          <p>Puedo orientarte en <strong>servicios</strong>, <strong>precios</strong>, <strong>tiempos</strong>, <strong>proceso</strong> o llevarte directo a <strong>contacto</strong>.</p>
        `,
        ['Servicios', 'Precios', 'Proceso', 'Contacto']
      );
    }, 350);
  }

  addMessage(sender, html, suggestions = []) {
    if (!this.messagesContainer) {
      return;
    }

    const messageElement = document.createElement('div');
    messageElement.className = `chatbot-message ${sender}`;

    const contentElement = document.createElement('div');
    contentElement.className = 'chatbot-message-content';

    if (sender === 'user') {
      contentElement.textContent = html;
    } else {
      contentElement.innerHTML = html;
    }

    messageElement.appendChild(contentElement);

    if (suggestions.length > 0) {
      const suggestionsElement = document.createElement('div');
      suggestionsElement.className = 'chatbot-suggestions';

      suggestions.forEach((suggestion) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'chatbot-suggestion';
        button.textContent = suggestion;
        button.addEventListener('click', () => {
          this.addMessage('user', suggestion);
          this.processUserMessage(suggestion);
        });
        suggestionsElement.appendChild(button);
      });

      messageElement.appendChild(suggestionsElement);
    }

    this.messagesContainer.appendChild(messageElement);
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    this.messages.push({ sender, html });
  }

  sendMessage() {
    const message = this.input.value.trim();

    if (!message) {
      return;
    }

    this.addMessage('user', message);
    this.input.value = '';
    this.sendButton.disabled = true;
    this.processUserMessage(message);
  }

  processUserMessage(message) {
    const shortcut = this.findShortcut(message);
    const reply = this.findReply(message);

    this.showTypingIndicator();

    this.typingTimer = window.setTimeout(() => {
      this.removeTypingIndicator();
      this.addMessage('bot', reply.response, reply.suggestions);

      if (shortcut) {
        window.setTimeout(() => shortcut.action(), 250);
      }
    }, 500);
  }

  findReply(message) {
    const normalizedMessage = this.normalizeText(message);
    let bestMatch = null;

    CHATBOT_KNOWLEDGE.forEach((item) => {
      const score = item.keywords.reduce((total, keyword) => {
        return normalizedMessage.includes(this.normalizeText(keyword)) ? total + 1 : total;
      }, 0);

      if (!bestMatch || score > bestMatch.score) {
        bestMatch = { score, item };
      }
    });

    return bestMatch && bestMatch.score > 0 ? bestMatch.item : CHATBOT_FALLBACK;
  }

  findShortcut(message) {
    const normalizedMessage = this.normalizeText(message);
    return CHATBOT_SHORTCUTS.find((shortcut) => {
      return shortcut.match.some((phrase) => normalizedMessage.includes(this.normalizeText(phrase)));
    });
  }

  normalizeText(value) {
    return value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[¿?¡!.,]/g, '')
      .trim();
  }

  showTypingIndicator() {
    if (!this.messagesContainer) {
      return;
    }

    this.removeTypingIndicator();

    const typingElement = document.createElement('div');
    typingElement.className = 'chatbot-message bot';
    typingElement.id = 'typingIndicator';
    typingElement.innerHTML = `
      <div class="chatbot-message-content">
        <div class="typing-indicator" aria-label="Escribiendo">
          <span class="typing-dot"></span>
          <span class="typing-dot"></span>
          <span class="typing-dot"></span>
        </div>
      </div>
    `;

    this.messagesContainer.appendChild(typingElement);
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
  }

  removeTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) {
      indicator.remove();
    }

    if (this.typingTimer) {
      window.clearTimeout(this.typingTimer);
      this.typingTimer = null;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Chatbot();
});
