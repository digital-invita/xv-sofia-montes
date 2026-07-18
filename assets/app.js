(() => {
  "use strict";

  
  // Evita listeners, timers y animaciones duplicadas si el script se inyecta dos veces.
  if (window.__DIGITAL_INVITA_APP_INITIALIZED__) {
    console.warn("Digital Invita ya estaba inicializada; se omitio una segunda carga.");
    return;
  }
  window.__DIGITAL_INVITA_APP_INITIALIZED__ = true;

    const INVITATION_CONFIG =
{
  "meta": {
    "pageTitle": "Prim. Justo Sierra",
    "ogTitle": "",
    "ogDescription": "Tenemos el honor de invitarle a la\nceremonia de Graduación"
  },
  "event": {
    "label": "Mi graduación",
    "celebrantName": "Prim. Justo Sierra",
    "eventDate": "2026-07-13T07:30",
    "eventEnd": "2026-07-13T13:00",
    "timeZone": "America/Mexico_City",
    "eventLocation": "Top Salón Obispado",
    "rsvpPhone": "871 221 47 4"
  },
  "theme": {
    "bgTop": "#081c3a",
    "bgMid": "#1f4e79",
    "bgBottom": "#6e8fb8",
    "gold500": "#f2c06f",
    "particleColor": "#fff4cf",
    "text": "#fffaf3",
    "muted": "#ffffff",
    "bodyFont": "Cormorant Garamond",
    "scriptFont": "Dancing Script",
    "displayFont": "Dancing Script"
  },
  "images": {
    "hero": "FPrincipal.jpg",
    "story": "FHistoria.jpg",
    "dress": "vestimenta.png",
    "envelope": "sobre.png",
    "surprise": "regalo.png",
    "gallery": [
      "G1.jpg",
      "G2.jpg",
      "G3.jpg",
      "G4.jpg",
      "G5.jpg",
      "G6.jpg"
    ]
  },
  "story": {
    "title": "Nuestro camino",
    "paragraph1": "Hoy celebramos la culminación de una etapa llena de aprendizajes, esfuerzo y dedicación. Cada experiencia, cada reto y cada logro nos han traído hasta este momento tan especial, que representa el fruto de nuestro trabajo y perseverancia.",
    "paragraph2": "Hoy cerramos un capítulo lleno de recuerdos inolvidables y abrimos las puertas a un futuro lleno de oportunidades. Con ilusión y gratitud, damos el primer paso hacia nuevos sueños, metas y grandes experiencias.",
    "showImage": true
  },
  "family": {
    "parentsEyebrow": "Directora Escolar",
    "parentsNamesHtml": "NO<br>&amp;<br>NO",
    "parentsInviteText": "Tenemos el honor de invitarle a la\nceremonia de Graduación ",
    "godparentsEyebrow": "Subdirectora escolar",
    "godparentsNamesHtml": "NO<br>&amp;<br>NO"
  },
  "ceremony": {
    "title": "Ceremonia",
    "time": "07:30 hrs",
    "place": "Iglesia de Santo Domingo",
    "mediaMode": "preview",
    "iconSrc": "cereminia.png",
    "mapEmbed": "https://www.google.com/maps/embed?pb=!3m2!1ses-419!2smx!4v1783215245354!5m2!1ses-419!2smx!6m8!1m7!1sXqwZ3P_w80Gb_Uw0kTJt2Q!2m2!1d19.76261599633266!2d-98.95470081715561!3f66.04353500702416!4f10.648578501892814!5f0.7820865974627469",
    "photoSrc": "",
    "mapLink": "https://maps.app.goo.gl/aM8sywzDeYyj5qZt5"
  },
  "reception": {
    "title": "Ceremonia cívica ",
    "time": "09:00 hrs ",
    "place": "Escuela Primaria Federal Justo Sierra",
    "mediaMode": "preview",
    "iconSrc": "recepcion.png",
    "mapLink": "https://maps.app.goo.gl/sNmobFSgyiobFDS57",
    "mapEmbed": "https://www.google.com/maps/embed?pb=!3m2!1ses-419!2smx!4v1783215391846!5m2!1ses-419!2smx!6m8!1m7!1sXqwZ3P_w80Gb_Uw0kTJt2Q!2m2!1d19.76261599633266!2d-98.95470081715561!3f237.93126738436632!4f7.140937497379113!5f0.4000000000000002",
    "photoSrc": ""
  },
  "timeline": {
    "items": [
      {
        "time": "07:30 hrs",
        "title": "Ceremonia",
        "desc": "Iglesia de Santo Domingo"
      },
      {
        "time": "09:00 hrs",
        "title": "Ceremonia cívica ",
        "desc": "Escuela Primaria Federal Justo Sierra"
      },
      {
        "time": "",
        "title": "Vals",
        "desc": "Un momento lleno de emoción para celebrar el esfuerzo, la amistad y el inicio de una nueva etapa."
      },
      {
        "time": "",
        "title": "Ultimo pase de lista ",
        "desc": "Un momento especial para despedir esta etapa escolar."
      },
      {
        "time": "",
        "title": "Entrega de documentos ",
        "desc": "Entrega oficial de los documentos de fin de curso."
      }
    ]
  },
  "countdown": {
    "title": "Faltan pocos días",
    "intro": "Cada día nos acerca a la celebración de una meta alcanzada."
  },
  "dressCode": {
    "title": "Dress Code",
    "value": "Formal",
    "note": "Rose Gold reservado para la quinceañera."
  },
  "gifts": {
    "title": "Opciones de regalo",
    "intro": "Tu presencia es el regalo más valioso para mí, pero si deseas tener un detalle, aquí encontrarás algunas opciones pensadas con mucho cariño.",
    "option1Title": "Lluvia de sobres",
    "option1Copy": "Si lo prefieres, podrás acompañarme con un sobre el día del evento. Será un detalle recibido con muchísimo cariño y gratitud.",
    "showOption1": true,
    "option2Title": "Regalo sorpresa",
    "option2Copy": "También puedes sorprenderme con un detalle especial elegido por ti. Lo importante será el cariño con el que venga.",
    "showOption2": true,
    "linksIntro": "Si prefieres elegir un detalle en línea, también puedes apoyarte en estas opciones de mesa de regalos:",
    "showLinks": false,
    "links": [
      {
        "label": "Mesa de regalos Liverpool",
        "href": "https://www.liverpool.com.mx/tienda/mesa-de-regalos",
        "style": "primary"
      },
      {
        "label": "Celebra Palacio",
        "href": "https://www.elpalaciodehierro.com/sucursales/palacio-mitikah.html",
        "style": "secondary"
      }
    ]
  },
  "album": {
    "title": "Álbum digital",
    "copy": "Comparte las mejores fotos de este gran día y conserva en un solo lugar los recuerdos más especiales.",
    "buttonLabel": "Ver álbum digital",
    "buttonHref": "#"
  },
  "rsvp": {
    "showGuestCount": false,
    "maxGuests": 6
  },
  "sections": {
    "story": true,
    "parents": false,
    "godparents": false,
    "ceremony": true,
    "reception": true,
    "timeline": true,
    "countdown": true,
    "gallery": false,
    "dress": false,
    "rsvp": false,
    "gifts": false,
    "agenda": true,
    "album": false,
    "closing": true
  },
  "layout": {
    "sectionOrder": [
      "story",
      "parents",
      "godparents",
      "ceremony",
      "reception",
      "timeline",
      "countdown",
      "gallery",
      "dress",
      "rsvp",
      "gifts",
      "agenda",
      "album",
      "closing"
    ]
  },
  "closing": {
    "note": "\"Cada meta alcanzada es el inicio de un nuevo camino.\nHoy celebramos el esfuerzo, la dedicación y los sueños\nque comienzan a hacerse realidad.\""
  },
  "brand": {
    "creditText": "Creado por Digital Invita",
    "creditHref": "https://www.facebook.com/profile.php?id=61587804296779&locale=es_LA",
    "ctaLabel": "Contáctanos",
    "ctaHref": "https://wa.me/525550591264?text=Hola%21%20Quiero%20una%20invitaci%C3%B3n%20digital%20con%20estilo%20elegante%20y%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n."
  }
}
      
      ;

    let EVENT_DATE = new Date(INVITATION_CONFIG.event.eventDate);
    let EVENT_END = new Date(INVITATION_CONFIG.event.eventEnd);
    let EVENT_LOCATION = INVITATION_CONFIG.event.eventLocation;
    let RSVP_PHONE = INVITATION_CONFIG.event.rsvpPhone;
    let scrollLockY = 0;

    const body = document.body;
    const overlay = document.getElementById("overlay");
    const openBtn = document.getElementById("openBtn");
    const audio = document.getElementById("audio");
    const musicBtn = document.getElementById("musicBtn");
    const toTopBtn = document.getElementById("toTopBtn");
    const brandFooter = document.querySelector(".brand-footer");
    const heroName = document.getElementById("nombre");
    const heroLabel = document.querySelector(".hero-label");
    const fechaEvento = document.getElementById("fechaEvento");
    const countdownEl = document.getElementById("countdown");
    const countdownCaption = document.getElementById("countdownCaption");
    const sections = document.querySelectorAll(".section");
    const storySection = document.getElementById("storySection");
    const storyParagraphs = Array.from(document.querySelectorAll(".story-text"));
    let galleryImages = [];
    const galleryPreviewImg = document.getElementById("galleryPreviewImg");
    const galleryMetaIndex = document.getElementById("galleryMetaIndex");
    const galleryMetaHint = document.getElementById("galleryMetaHint");
    const galleryPrev = document.getElementById("galleryPrev");
    const galleryNext = document.getElementById("galleryNext");
    const galleryStage = document.getElementById("galleryStage");
    const galleryShowcase = document.querySelector(".gallery-showcase");
    const galleryGrid = document.getElementById("galleryGrid");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxMain = document.querySelector(".lightbox-main");
    const viewerCounter = document.getElementById("viewerCounter");
    const thumbs = document.getElementById("thumbs");
    const closeLightbox = document.getElementById("closeLightbox");
    const guestName = document.getElementById("guestName");
    const guestCount = document.getElementById("guestCount");
    const confirmYes = document.getElementById("confirmYes");
    const confirmNo = document.getElementById("confirmNo");
    const calendarBtn = document.getElementById("calendarBtn");
    const verCuenta = document.getElementById("verCuenta");
    const toast = document.getElementById("toast");
    const agendaSection = calendarBtn.closest(".section");
    const guestCountField = document.getElementById("guestCountField");
    const giftLinks = document.getElementById("giftLinks");
    const giftOption1Card = document.getElementById("giftOption1Card");
    const giftOption2Card = document.getElementById("giftOption2Card");
    const timelineList = document.getElementById("timelineList");
    const editorPanel = document.getElementById("editorPanel");
    const editorOverlay = document.getElementById("editorOverlay");
    const editorToggle = document.getElementById("editorToggle");
    const editorContent = editorPanel.querySelector(".editor-content");
    const editorGiftLinksList = document.getElementById("editorGiftLinksList");
    const editorGalleryList = document.getElementById("editorGalleryList");
    const editorTimelineList = document.getElementById("editorTimelineList");
    const editorEventSummary = document.getElementById("editorEventSummary");
    const addGiftLinkBtn = document.getElementById("addGiftLinkBtn");
    const addGalleryImageBtn = document.getElementById("addGalleryImageBtn");
    const addTimelineRowBtn = document.getElementById("addTimelineRowBtn");
    const copyEditorConfigBtn = document.getElementById("copyEditorConfigBtn");
    const exportEditorConfigBtn = document.getElementById("exportEditorConfigBtn");
    const saveEditorConfigBtn = document.getElementById("saveEditorConfigBtn");
    const saveEditorBaseBtn = document.getElementById("saveEditorBaseBtn");
    const resetEditorConfigBtn = document.getElementById("resetEditorConfigBtn");
    const editorSecretHotspot = document.getElementById("editorSecretHotspot");
    const editorAuth = document.getElementById("editorAuth");
    const editorUsername = document.getElementById("editorUsername");
    const editorPassword = document.getElementById("editorPassword");
    const editorAuthError = document.getElementById("editorAuthError");
    const editorLoginBtn = document.getElementById("editorLoginBtn");
    const editorCancelBtn = document.getElementById("editorCancelBtn");
    const overlayScene = document.getElementById("overlayScene");
    const bodyFontPreview = document.getElementById("bodyFontPreview");
    const scriptFontPreview = document.getElementById("scriptFontPreview");
    const displayFontPreview = document.getElementById("displayFontPreview");
    const heroImage = document.getElementById("heroImage");
    const storyImage = document.getElementById("storyImage");
    const ceremonyImage = document.getElementById("ceremonyImage");
    const ceremonyPhoto = document.getElementById("ceremonyPhoto");
    const ceremonyMapEmbed = document.getElementById("ceremonyMapEmbed");
    const ceremonyIconWrap = document.getElementById("ceremonyIconWrap");
    const ceremonyMapWrap = document.getElementById("ceremonyMapWrap");
    const ceremonyPhotoWrap = document.getElementById("ceremonyPhotoWrap");
    const receptionImage = document.getElementById("receptionImage");
    const receptionPhoto = document.getElementById("receptionPhoto");
    const receptionMapEmbed = document.getElementById("receptionMapEmbed");
    const receptionIconWrap = document.getElementById("receptionIconWrap");
    const receptionMapWrap = document.getElementById("receptionMapWrap");
    const receptionPhotoWrap = document.getElementById("receptionPhotoWrap");
    const dressImage = document.getElementById("dressImage");
    const envelopeImage = document.getElementById("envelopeImage");
    const surpriseImage = document.getElementById("surpriseImage");

    let currentIndex = 0;
    let previewIndex = 0;
    let previousParts = [];
    let storyStarted = false;
    let toastTimer = 0;
    let zoomScale = 1;
    let zoomX = 0;
    let zoomY = 0;
    let pinchStartDistance = 0;
    let pinchStartScale = 1;
    let panStartX = 0;
    let panStartY = 0;
    let dragOriginX = 0;
    let dragOriginY = 0;
    let isPanningImage = false;
    let lastTapTime = 0;
    let editorTapCount = 0;
    let editorTapTimer = 0;
    let editorAuthenticated = false;
    let isHydratingEditor = false;
    let liveApplyTimer = 0;

    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const STORAGE_KEY = "digital-invita-editor-config-v1";
    const BASE_STORAGE_KEY = "digital-invita-editor-base-v1";
    const EDITOR_SECRET = [85, 115, 101, 114].map((code) => String.fromCharCode(code)).join("");
    const EDITOR_KEY = [49, 54, 50, 56].map((code) => String.fromCharCode(code)).join("");
    const IS_MOBILE_DEVICE = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const IS_LOW_POWER_DEVICE = IS_MOBILE_DEVICE
      && ((navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 6)
      || (navigator.deviceMemory && navigator.deviceMemory <= 6));

    if (IS_LOW_POWER_DEVICE) {
      body.classList.add("low-power");
    }
    if (IS_MOBILE_DEVICE) {
      body.classList.add("mobile-optimized");
    }

    function setText(id, value) {
      const node = document.getElementById(id);
      if (node && value !== undefined && value !== null) node.textContent = value;
    }

    function setHTML(id, value) {
      const node = document.getElementById(id);
      if (node && value !== undefined && value !== null) node.innerHTML = value;
    }

    function setHref(id, value) {
      const node = document.getElementById(id);
      if (node && value !== undefined && value !== null) node.href = value;
    }

    function setOptionalLink(id, value) {
      const node = document.getElementById(id);
      if (!node) return;
      if (value) {
        node.href = value;
        node.hidden = false;
      } else {
        node.href = "#";
        node.hidden = true;
      }
    }

    function setScrollLocked(locked) {
      if (locked && !body.classList.contains("locked")) {
        scrollLockY = window.scrollY || document.documentElement.scrollTop || 0;
        body.style.position = "fixed";
        body.style.top = `-${scrollLockY}px`;
        body.style.left = "0";
        body.style.right = "0";
        body.style.width = "100%";
      }
      document.documentElement.classList.toggle("locked-scroll", locked);
      body.classList.toggle("locked", locked);
      if (!locked) {
        body.style.position = "";
        body.style.top = "";
        body.style.left = "";
        body.style.right = "";
        body.style.width = "";
        window.scrollTo(0, scrollLockY);
      }
    }

    function updateOverlayScale() {
      if (!overlayScene) return;
      const widthScale = window.innerWidth / 410;
      const heightScale = window.innerHeight / 900;
      const scale = Math.max(0.72, Math.min(1, Math.min(widthScale, heightScale)));
      document.documentElement.style.setProperty("--overlay-scale", scale.toFixed(3));
    }

    function setVisibility(node, visible) {
      if (!node) return;
      node.hidden = !visible;
    }

    function applyLocationMedia(config, nodes) {
      if (!nodes) return;

      const iconSrc = (config.iconSrc || "").trim();
      const mapEmbed = (config.mapEmbed || "").trim();
      const photoSrc = (config.photoSrc || "").trim();
      const requestedMode = config.mediaMode || "icon";

      // El modo del panel decide que recurso existe en DOM activo; evita mapas ocultos cargando en segundo plano.
      let mode = requestedMode;
      if ((mode === "icon" || mode === "combined") && !iconSrc) {
        mode = mapEmbed ? "preview" : (photoSrc ? "photo" : "icon");
      }
      if ((mode === "preview" || mode === "combined") && !mapEmbed) {
        mode = iconSrc ? "icon" : (photoSrc ? "photo" : "preview");
      }
      if (mode === "photo" && !photoSrc) {
        mode = iconSrc ? "icon" : (mapEmbed ? "preview" : "photo");
      }

      const showIcon = mode === "icon" || mode === "combined";
      const showMap = mode === "preview" || mode === "combined";
      const showPhoto = mode === "photo";

      if (nodes.icon) {
        if (showIcon && iconSrc) {
          nodes.icon.src = iconSrc;
        } else {
          nodes.icon.removeAttribute("src");
        }
      }
      if (nodes.map) {
        if (showMap && mapEmbed) {
          nodes.map.src = mapEmbed;
        } else {
          nodes.map.removeAttribute("src");
        }
      }
      if (nodes.photo) {
        if (showPhoto && photoSrc) {
          nodes.photo.src = photoSrc;
        } else {
          nodes.photo.removeAttribute("src");
        }
      }

      setVisibility(nodes.iconWrap, showIcon);
      setVisibility(nodes.mapWrap, showMap);
      setVisibility(nodes.photoWrap, showPhoto);
    }

    function deepMerge(base, override) {
      if (Array.isArray(base)) {
        return Array.isArray(override) ? override : base;
      }

      const result = { ...base };
      Object.keys(override || {}).forEach((key) => {
        const baseValue = base[key];
        const overrideValue = override[key];
        if (baseValue && typeof baseValue === "object" && !Array.isArray(baseValue) && overrideValue && typeof overrideValue === "object" && !Array.isArray(overrideValue)) {
          result[key] = deepMerge(baseValue, overrideValue);
        } else {
          result[key] = overrideValue;
        }
      });
      return result;
    }

    const DEFAULT_CONFIG = JSON.parse(JSON.stringify(INVITATION_CONFIG));
    let BASE_CONFIG = JSON.parse(JSON.stringify(DEFAULT_CONFIG));

    function readStorageItem(key) {
      try {
        return localStorage.getItem(key);
      } catch (error) {
        console.warn("No se pudo leer almacenamiento local.", error);
        return null;
      }
    }

    function writeStorageItem(key, value) {
      try {
        localStorage.setItem(key, value);
        return true;
      } catch (error) {
        console.warn("No se pudo escribir almacenamiento local.", error);
        return false;
      }
    }

    function loadSavedConfig() {
      try {
        const baseRaw = readStorageItem(BASE_STORAGE_KEY);
        if (baseRaw) {
          BASE_CONFIG = deepMerge(DEFAULT_CONFIG, JSON.parse(baseRaw));
          Object.assign(INVITATION_CONFIG, deepMerge(INVITATION_CONFIG, BASE_CONFIG));
        }

        const raw = readStorageItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          Object.assign(INVITATION_CONFIG, deepMerge(INVITATION_CONFIG, parsed));
        }
      } catch (error) {
        console.warn("No se pudo cargar la configuración guardada.", error);
      }
      // Toda configuracion, venga del codigo o del panel, pasa por la misma normalizacion.
      sanitizeInvitationConfig();
    }

    function saveConfigToStorage() {
      sanitizeInvitationConfig();
      return writeStorageItem(STORAGE_KEY, JSON.stringify(INVITATION_CONFIG));
    }

    function saveBaseConfigToStorage() {
      sanitizeInvitationConfig();
      BASE_CONFIG = JSON.parse(JSON.stringify(INVITATION_CONFIG));
      return writeStorageItem(BASE_STORAGE_KEY, JSON.stringify(BASE_CONFIG));
    }

    function validateStorageSnapshot(key) {
      try {
        const saved = readStorageItem(key);
        return Boolean(saved && JSON.parse(saved));
      } catch (error) {
        return false;
      }
    }

    function replaceConfig(target) {
      const clone = JSON.parse(JSON.stringify(target));
      Object.keys(INVITATION_CONFIG).forEach((key) => {
        delete INVITATION_CONFIG[key];
      });
      Object.assign(INVITATION_CONFIG, clone);
    }

    function setRootVar(name, value) {
      document.documentElement.style.setProperty(name, value);
    }

    function readEditorValue(id) {
      const field = getEditorField(id);
      return field ? field.value : "";
    }

    function extractFileName(value, fallback = "") {
      const source = String(value || "").trim() || String(fallback || "").trim();
      const cleaned = source.split(/[\\/]/).pop().trim();
      if (!cleaned) return "";

      if (/\.[a-z0-9]{2,5}$/i.test(cleaned)) return cleaned;

      const fallbackMatch = String(fallback || "").trim().match(/\.([a-z0-9]{2,5})$/i);
      const fallbackExt = fallbackMatch ? `.${fallbackMatch[1]}` : ".jpg";
      return `${cleaned}${fallbackExt}`;
    }

    function extractMapEmbedUrl(value) {
      const source = String(value || "").trim();
      if (!source) return "";

      // El panel acepta la URL directa o el iframe completo copiado desde Google Maps.
      const srcMatch = source.match(/\bsrc=(["'])(.*?)\1/i);
      const candidate = srcMatch ? srcMatch[2] : source;
      return /^https:\/\/www\.google\.com\/maps\/embed\?/i.test(candidate) ? candidate : "";
    }

    function normalizeMediaMode(value, fallback = "icon") {
      return ["icon", "preview", "combined", "photo"].includes(value) ? value : fallback;
    }

    function sanitizeImageConfig() {
      INVITATION_CONFIG.images.hero = extractFileName(INVITATION_CONFIG.images.hero, DEFAULT_CONFIG.images.hero);
      INVITATION_CONFIG.images.story = extractFileName(INVITATION_CONFIG.images.story, DEFAULT_CONFIG.images.story);
      INVITATION_CONFIG.images.dress = extractFileName(INVITATION_CONFIG.images.dress, DEFAULT_CONFIG.images.dress);
      INVITATION_CONFIG.images.envelope = extractFileName(INVITATION_CONFIG.images.envelope, DEFAULT_CONFIG.images.envelope);
      INVITATION_CONFIG.images.surprise = extractFileName(INVITATION_CONFIG.images.surprise, DEFAULT_CONFIG.images.surprise);
      INVITATION_CONFIG.images.gallery = (INVITATION_CONFIG.images.gallery || [])
        .map((item, index) => extractFileName(item, DEFAULT_CONFIG.images.gallery[index] || "foto.jpg"))
        .filter(Boolean);
    }

    function sanitizeLocationConfig(locationConfig, fallbackMode = "icon") {
      if (!locationConfig) return;
      locationConfig.mediaMode = normalizeMediaMode(locationConfig.mediaMode, fallbackMode);
      locationConfig.iconSrc = extractFileName(locationConfig.iconSrc, "");
      locationConfig.photoSrc = extractFileName(locationConfig.photoSrc, "");
      locationConfig.mapEmbed = extractMapEmbedUrl(locationConfig.mapEmbed);
      locationConfig.mapLink = String(locationConfig.mapLink || "").trim();
    }

    function sanitizeInvitationConfig() {
      sanitizeImageConfig();
      sanitizeLocationConfig(INVITATION_CONFIG.ceremony, "icon");
      sanitizeLocationConfig(INVITATION_CONFIG.reception, "icon");
    }

    function readEditorTrimmedValue(id) {
      return readEditorValue(id).trim();
    }

    function readEditorNonEmptyValue(id, fallback = "") {
      const value = readEditorTrimmedValue(id);
      return value || fallback;
    }

    function normalizeEventLabel(label) {
      return (label || "").trim().replace(/\s+/g, " ");
    }

    function getEventCopy() {
      const name = (INVITATION_CONFIG.event.celebrantName || "").trim();
      const label = normalizeEventLabel(INVITATION_CONFIG.event.label);
      const normalized = label.toLowerCase();

      if (!label && !name) {
        return {
          pageTitle: "Invitación digital",
          celebrationText: "este evento tan especial",
          eventHeader: "Invitación digital",
          calendarTitle: "Invitación digital",
          calendarDetails: "Acompáñame a celebrar este momento especial."
        };
      }

      if (/^mis\s*xv$/.test(normalized) || /^xv$/.test(normalized)) {
        return {
          pageTitle: name ? `${label} | ${name}` : label,
          celebrationText: name ? `los XV de ${name}` : "los XV",
          eventHeader: name ? `XV de ${name}` : "XV",
          calendarTitle: name ? `XV de ${name}` : "XV",
          calendarDetails: name
            ? `Acompáñame a celebrar los XV de ${name}.`
            : "Acompáñame a celebrar unos XV inolvidables."
        };
      }

      const joinedTitle = [label, name].filter(Boolean).join(" de ");
      return {
        pageTitle: joinedTitle || label || name,
        celebrationText: joinedTitle || label || name,
        eventHeader: joinedTitle || label || name,
        calendarTitle: joinedTitle || label || name,
        calendarDetails: joinedTitle
          ? `Acompáñame a celebrar ${joinedTitle}.`
          : "Acompáñame a celebrar este momento especial."
      };
    }

    function cssFontValue(label, fallback) {
      if (label === "Georgia") return "Georgia, serif";
      if (label === "Times New Roman") return "\"Times New Roman\", serif";
      if (label === "Great Vibes") return "\"Great Vibes\", cursive";
      if (label === "Dancing Script") return "\"Dancing Script\", cursive";
      return fallback;
    }

    function slugifyText(value) {
      return (value || "invitacion-digital")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        || "invitacion-digital";
    }

    function buildConfigCodeBlock() {
      return [
        "const INVITATION_CONFIG = ",
        JSON.stringify(INVITATION_CONFIG, null, 2),
        ";"
      ].join("");
    }

    function updateFontPreviews() {
      if (bodyFontPreview) bodyFontPreview.style.fontFamily = cssFontValue(getEditorField("cfgBodyFont").value, "\"Cormorant Garamond\", serif");
      if (scriptFontPreview) scriptFontPreview.style.fontFamily = cssFontValue(getEditorField("cfgScriptFont").value, "\"Dancing Script\", cursive");
      if (displayFontPreview) displayFontPreview.style.fontFamily = cssFontValue(getEditorField("cfgDisplayFont").value, "\"Great Vibes\", cursive");
    }

    function clampColorChannel(value) {
      return Math.max(0, Math.min(255, Math.round(value)));
    }

    function normalizeHexColor(value, fallback = "#ffffff") {
      const source = String(value || "").trim();
      const shortMatch = source.match(/^#([0-9a-f]{3})$/i);
      if (shortMatch) {
        return `#${shortMatch[1].split("").map((char) => char + char).join("")}`.toLowerCase();
      }
      if (/^#[0-9a-f]{6}$/i.test(source)) return source.toLowerCase();
      return fallback;
    }

    function hexToRgb(value, fallback = "#ffffff") {
      const hex = normalizeHexColor(value, fallback).slice(1);
      return {
        r: parseInt(hex.slice(0, 2), 16),
        g: parseInt(hex.slice(2, 4), 16),
        b: parseInt(hex.slice(4, 6), 16)
      };
    }

    function rgbToHex({ r, g, b }) {
      return `#${[r, g, b].map((channel) => clampColorChannel(channel).toString(16).padStart(2, "0")).join("")}`;
    }

    function mixColors(color, target, amount) {
      const base = hexToRgb(color);
      const mix = hexToRgb(target);
      return rgbToHex({
        r: base.r + (mix.r - base.r) * amount,
        g: base.g + (mix.g - base.g) * amount,
        b: base.b + (mix.b - base.b) * amount
      });
    }

    function rgbList(value, fallback = "#ffffff") {
      const { r, g, b } = hexToRgb(value, fallback);
      return `${r}, ${g}, ${b}`;
    }

    function rgbaColor(value, alpha) {
      return `rgba(${rgbList(value)}, ${alpha})`;
    }

    function applyThemeColors() {
      const bgTop = normalizeHexColor(INVITATION_CONFIG.theme.bgTop, DEFAULT_CONFIG.theme.bgTop);
      const bgMid = normalizeHexColor(INVITATION_CONFIG.theme.bgMid, DEFAULT_CONFIG.theme.bgMid);
      const bgBottom = normalizeHexColor(INVITATION_CONFIG.theme.bgBottom, DEFAULT_CONFIG.theme.bgBottom);
      const gold = normalizeHexColor(INVITATION_CONFIG.theme.gold500, DEFAULT_CONFIG.theme.gold500);
      const text = normalizeHexColor(INVITATION_CONFIG.theme.text, DEFAULT_CONFIG.theme.text);
      const muted = normalizeHexColor(INVITATION_CONFIG.theme.muted, DEFAULT_CONFIG.theme.muted || text);
      const gold100 = mixColors(gold, "#ffffff", 0.72);
      const gold300 = mixColors(gold, "#ffffff", 0.34);
      const gold700 = mixColors(gold, "#000000", 0.36);
      const particleColor = normalizeHexColor(INVITATION_CONFIG.theme.particleColor || gold100, gold100);

      Object.assign(INVITATION_CONFIG.theme, {
        bgTop,
        bgMid,
        bgBottom,
        gold500: gold,
        particleColor,
        text,
        muted
      });

      setRootVar("--bg-top", bgTop);
      setRootVar("--bg-mid", bgMid);
      setRootVar("--bg-bottom", bgBottom);
      setRootVar("--bg-glow-top", rgbaColor(bgTop, 0.18));
      setRootVar("--bg-glow-mid", rgbaColor(bgMid, 0.18));
      setRootVar("--bg-glow-bottom", rgbaColor(bgBottom, 0.14));
      setRootVar("--gold-100", gold100);
      setRootVar("--gold-300", gold300);
      setRootVar("--gold-500", gold);
      setRootVar("--gold-700", gold700);
      setRootVar("--gold-rgb", rgbList(gold));
      setRootVar("--gold-soft-rgb", rgbList(gold100));
      setRootVar("--particle-color", particleColor);
      setRootVar("--particle-rgb", rgbList(particleColor));
      setRootVar("--line", rgbaColor(gold, 0.28));
      setRootVar("--text", text);
      setRootVar("--muted", muted);
    }

    function applyThemePreset(preset) {
      const presets = {
        rosa: {
          bgTop: "#5a132d",
          bgMid: "#7f1f3f",
          bgBottom: "#2a0a15",
          gold500: "#f2c06f",
          particleColor: "#fff4cf",
          text: "#fffaf3",
          muted: "#f9e6e0"
        },
        champagne: {
          bgTop: "#6a4a58",
          bgMid: "#4a2f3b",
          bgBottom: "#24161f",
          gold500: "#f4c97a",
          particleColor: "#fff0c2",
          text: "#fff8f2",
          muted: "#f0ddd1"
        },
        rojo: {
          bgTop: "#6a1026",
          bgMid: "#431022",
          bgBottom: "#210711",
          gold500: "#ffcf6a",
          particleColor: "#fff1c4",
          text: "#fff7f1",
          muted: "#efd7d1"
        }
      };

      if (!presets[preset]) return;
      Object.assign(INVITATION_CONFIG.theme, presets[preset]);
      fillEditorPanel();
      applyInvitationConfig();
    }

    function renderGiftButtons() {
      if (!giftLinks) return;
      giftLinks.innerHTML = "";

      const links = INVITATION_CONFIG.gifts.links || [];
      const showLinks = INVITATION_CONFIG.gifts.showLinks !== false;
      const intro = document.getElementById("giftLinksIntro");

      if (intro) intro.style.display = showLinks && links.length ? "" : "none";
      if (!showLinks || !links.length) {
        giftLinks.style.display = "none";
        return;
      }

      giftLinks.style.display = "grid";
      links.forEach((link) => {
        const anchor = document.createElement("a");
        anchor.className = link.style === "secondary" ? "btn btn-secondary" : "btn";
        anchor.href = link.href || "#";
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
        anchor.textContent = link.label || "Botón";
        giftLinks.appendChild(anchor);
      });
    }

    function updateEditorSummary() {
      if (!editorEventSummary) return;
      const label = normalizeEventLabel(INVITATION_CONFIG.event.label) || "Invitación";
      const name = (INVITATION_CONFIG.event.celebrantName || "").trim();
      editorEventSummary.textContent = [label, name].filter(Boolean).join(" | ") || "Invitación editable";
    }

    function updateGiftLinkPreview(card) {
      if (!card) return;
      const labelInput = card.querySelector('[data-gift-link-field="label"]');
      const hrefInput = card.querySelector('[data-gift-link-field="href"]');
      const styleInput = card.querySelector('[data-gift-link-field="style"]');
      const preview = card.querySelector("[data-gift-link-preview]");
      if (!labelInput || !hrefInput || !styleInput || !preview) return;

      const label = labelInput.value.trim() || "Vista previa del botón";
      const href = hrefInput.value.trim() || "#";
      const style = styleInput.value === "secondary" ? "secondary" : "primary";
      preview.textContent = label;
      preview.href = href;
      preview.className = `editor-button-preview ${style}`;
      preview.setAttribute("title", href);
    }

    function updateFileChip(inputId, chipId, fallback) {
      const input = getEditorField(inputId);
      const chip = document.getElementById(chipId);
      if (!input || !chip) return;
      chip.textContent = extractFileName(input.value, fallback);
    }

    function renderEditorGalleryList() {
      if (!editorGalleryList) return;
      editorGalleryList.innerHTML = "";

      const images = INVITATION_CONFIG.images.gallery || [];
      if (!images.length) {
        const empty = document.createElement("div");
        empty.className = "editor-helper";
        empty.textContent = "Todavía no hay imágenes en la galería. Usa “Agregar imagen a galería” para crear la primera.";
        editorGalleryList.appendChild(empty);
        return;
      }

      images.forEach((fileName, index) => {
        const item = document.createElement("div");
        item.className = "editor-builder-item";
        item.innerHTML = `
          <div class="editor-builder-head">
            <strong>Imagen ${index + 1}</strong>
            <button class="editor-btn" type="button" data-remove-gallery-image="${index}">Eliminar</button>
          </div>
          <div class="editor-filename-wrap">
            <div class="editor-field">
              <label>Nombre de archivo</label>
              <input type="text" data-gallery-field="name" data-index="${index}" value="${fileName || ""}" placeholder="G${index + 1}.jpg">
            </div>
            <span class="editor-file-chip" data-gallery-chip="${index}">${extractFileName(fileName, `G${index + 1}.jpg`)}</span>
          </div>
        `;
        editorGalleryList.appendChild(item);
      });
    }

    function updateGalleryItemPreview(item) {
      if (!item) return;
      const input = item.querySelector('[data-gallery-field="name"]');
      const chip = item.querySelector("[data-gallery-chip]");
      if (!input || !chip) return;
      chip.textContent = extractFileName(input.value, "foto.jpg");
    }

    function syncEditorPills() {
      editorPanel.querySelectorAll("[data-editor-pill-group]").forEach((group) => {
        const input = group.querySelector("input[type=\"hidden\"]");
        if (!input) return;
        group.querySelectorAll("[data-pill-value]").forEach((button) => {
          button.classList.toggle("active", button.dataset.pillValue === input.value);
        });
      });
    }

    function queueLiveEditorApply() {
      if (isHydratingEditor) return;
      clearTimeout(liveApplyTimer);
      liveApplyTimer = setTimeout(() => {
        readEditorPanel();
        saveConfigToStorage();
        applyInvitationConfig();
      }, 90);
    }

    function updateEditorNavState() {
      if (!editorContent) return;
      const sections = Array.from(editorPanel.querySelectorAll(".editor-section"));
      const active = sections.find((section) => section.offsetTop - editorContent.scrollTop > -80)
        || sections[sections.length - 1];
      if (!active) return;
      const activeId = active.id;
      editorPanel.querySelectorAll("[data-editor-jump]").forEach((button) => {
        button.classList.toggle("active", button.dataset.editorJump === activeId);
      });
    }

    function renderGalleryGrid() {
      if (!galleryGrid) return;
      galleryGrid.innerHTML = "";
      const items = INVITATION_CONFIG.images.gallery || [];
      items.forEach((src, index) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = `Galería ${index + 1}`;
        img.loading = "lazy";
        img.decoding = "async";
        if (items.length > 3 && (index % 6 === 2 || index % 6 === 3)) img.classList.add("big");
        galleryGrid.appendChild(img);
      });
      galleryImages = Array.from(galleryGrid.querySelectorAll("img"));
      if (galleryImages.length) {
        if (galleryShowcase) galleryShowcase.style.display = "";
        previewIndex = Math.min(previewIndex, galleryImages.length - 1);
        currentIndex = Math.min(currentIndex, galleryImages.length - 1);
        updateGalleryPreview(previewIndex);
      } else {
        if (galleryShowcase) galleryShowcase.style.display = "none";
        previewIndex = 0;
        currentIndex = 0;
      }
    }

    function renderTimeline() {
      if (!timelineList) return;
      timelineList.innerHTML = "";

      (INVITATION_CONFIG.timeline.items || []).forEach((item) => {
        const node = document.createElement("div");
        node.className = "timeline-item";
        node.innerHTML = `
          <div class="timeline-time">${item.time || ""}</div>
          <div class="timeline-title">${item.title || ""}</div>
          <div class="timeline-desc">${item.desc || ""}</div>
        `;
        timelineList.appendChild(node);
      });
    }

    function getSectionMap() {
      return {
        story: document.getElementById("storySection"),
        parents: document.getElementById("parentsSection"),
        godparents: document.getElementById("godparentsSection"),
        ceremony: document.getElementById("ceremonySection"),
        reception: document.getElementById("receptionSection"),
        timeline: document.getElementById("timelineSection"),
        countdown: document.getElementById("countdown-section"),
        gallery: document.getElementById("gallerySection"),
        dress: document.getElementById("dressSection"),
        rsvp: document.getElementById("rsvpSection"),
        gifts: document.getElementById("giftSection"),
        agenda: document.getElementById("agendaSectionUi"),
        album: document.getElementById("albumSection"),
        closing: document.getElementById("closingNote")
      };
    }

    function applySectionOrder() {
      const page = document.querySelector(".page");
      if (!page || !brandFooter) return;

      const blockMap = getSectionMap();

      const requestedOrder = Array.isArray(INVITATION_CONFIG.layout?.sectionOrder)
        ? INVITATION_CONFIG.layout.sectionOrder
        : [];
      const resolvedOrder = [];
      const seen = new Set();

      requestedOrder.forEach((key) => {
        if (!blockMap[key] || seen.has(key)) return;
        resolvedOrder.push(key);
        seen.add(key);
      });

      Object.keys(blockMap).forEach((key) => {
        if (!blockMap[key] || seen.has(key)) return;
        resolvedOrder.push(key);
      });

      Array.from(page.querySelectorAll(".separator")).forEach((separator) => separator.remove());
      Object.values(blockMap).forEach((node) => {
        if (node?.parentNode === page) page.removeChild(node);
      });

      const fragment = document.createDocumentFragment();
      resolvedOrder.forEach((key) => {
        const node = blockMap[key];
        if (!node) return;
        const separator = document.createElement("div");
        separator.className = "separator";
        fragment.appendChild(separator);
        fragment.appendChild(node);
      });

      page.insertBefore(fragment, brandFooter);
    }

    function syncSeparators() {
      const page = document.querySelector(".page");
      if (!page) return;

      const children = Array.from(page.children);
      const isVisibleBlock = (node) => {
        if (!node) return false;
        if (!node.matches(".section, .closing-note")) return false;
        return getComputedStyle(node).display !== "none";
      };

      children.forEach((node, index) => {
        if (!node.classList.contains("separator")) return;

        let prevVisible = false;
        let nextVisible = false;

        for (let prevIndex = index - 1; prevIndex >= 0; prevIndex -= 1) {
          const prevNode = children[prevIndex];
          if (prevNode.classList.contains("separator")) continue;
          prevVisible = isVisibleBlock(prevNode);
          break;
        }

        for (let nextIndex = index + 1; nextIndex < children.length; nextIndex += 1) {
          const nextNode = children[nextIndex];
          if (nextNode.classList.contains("separator")) continue;
          nextVisible = isVisibleBlock(nextNode);
          break;
        }

        node.style.display = prevVisible && nextVisible ? "" : "none";
      });
    }

    function applySectionVisibility() {
      const sectionMap = getSectionMap();

      Object.entries(sectionMap).forEach(([key, element]) => {
        if (!element) return;
        element.style.display = INVITATION_CONFIG.sections[key] === false ? "none" : "";
      });

      syncSeparators();
    }

    function syncEventRuntimeValues() {
      EVENT_DATE = new Date(INVITATION_CONFIG.event.eventDate);
      EVENT_END = new Date(INVITATION_CONFIG.event.eventEnd);
      EVENT_LOCATION = INVITATION_CONFIG.reception.place
        || INVITATION_CONFIG.event.eventLocation
        || INVITATION_CONFIG.ceremony.place
        || "";
      RSVP_PHONE = INVITATION_CONFIG.event.rsvpPhone;

      fechaEvento.textContent = EVENT_DATE.toLocaleDateString("es-MX", {
        day: "numeric",
        month: "long",
        year: "numeric"
      });
    }

    function applyInvitationConfig() {
      sanitizeInvitationConfig();
      const eventCopy = getEventCopy();
      const resolvedPageTitle = INVITATION_CONFIG.meta.pageTitle?.trim()
        || eventCopy.pageTitle;
      const resolvedOgTitle = INVITATION_CONFIG.meta.ogTitle?.trim()
        || resolvedPageTitle;
      document.title = resolvedPageTitle;

      const ogTitle = document.querySelector('meta[property="og:title"]');
      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogTitle) ogTitle.setAttribute("content", resolvedOgTitle);
      if (ogDescription) ogDescription.setAttribute("content", INVITATION_CONFIG.meta.ogDescription);

      setText("overlayKicker", INVITATION_CONFIG.event.label);
      setText("overlayTitle", INVITATION_CONFIG.event.celebrantName);
      setText("heroLabel", INVITATION_CONFIG.event.label);
      setText("nombre", INVITATION_CONFIG.event.celebrantName);
      syncEventRuntimeValues();

      applyThemeColors();
      document.documentElement.style.setProperty("--overlay-image", `url("../${INVITATION_CONFIG.images.hero}")`);
      setRootVar("--font-body", cssFontValue(INVITATION_CONFIG.theme.bodyFont, "\"Cormorant Garamond\", serif"));
      setRootVar("--font-script", cssFontValue(INVITATION_CONFIG.theme.scriptFont, "\"Dancing Script\", cursive"));
      setRootVar("--font-display", cssFontValue(INVITATION_CONFIG.theme.displayFont, "\"Great Vibes\", cursive"));
      if (heroImage) heroImage.src = INVITATION_CONFIG.images.hero;
      if (storyImage) storyImage.src = INVITATION_CONFIG.images.story;
      if (heroImage) heroImage.alt = `Portada de ${INVITATION_CONFIG.event.celebrantName}`;
      if (storyImage) storyImage.alt = `Fotografía de ${INVITATION_CONFIG.event.celebrantName}`;
      if (dressImage) dressImage.src = INVITATION_CONFIG.images.dress;
      if (envelopeImage) envelopeImage.src = INVITATION_CONFIG.images.envelope;
      if (surpriseImage) surpriseImage.src = INVITATION_CONFIG.images.surprise;
      updateEditorSummary();
      if (storySection) storySection.classList.toggle("story-no-image", INVITATION_CONFIG.story.showImage === false);
      renderGalleryGrid();

      setText("storyTitle", INVITATION_CONFIG.story.title);
      const story1 = document.getElementById("storyText1");
      const story2 = document.getElementById("storyText2");
      if (story1) {
        story1.dataset.fulltext = INVITATION_CONFIG.story.paragraph1;
        story1.textContent = storyStarted ? INVITATION_CONFIG.story.paragraph1 : "";
      }
      if (story2) {
        story2.dataset.fulltext = INVITATION_CONFIG.story.paragraph2;
        story2.textContent = storyStarted ? INVITATION_CONFIG.story.paragraph2 : "";
      }

      setText("parentsEyebrow", INVITATION_CONFIG.family.parentsEyebrow);
      setHTML("parentsNames", INVITATION_CONFIG.family.parentsNamesHtml);
      setText("parentsInviteText", INVITATION_CONFIG.family.parentsInviteText);
      setText("godparentsEyebrow", INVITATION_CONFIG.family.godparentsEyebrow);
      setHTML("godparentsNames", INVITATION_CONFIG.family.godparentsNamesHtml);

      setText("ceremonyTitle", INVITATION_CONFIG.ceremony.title);
      setText("ceremonyTime", INVITATION_CONFIG.ceremony.time);
      setText("ceremonyPlace", INVITATION_CONFIG.ceremony.place);
      setOptionalLink("ceremonyMapLink", INVITATION_CONFIG.ceremony.mapLink);
      applyLocationMedia({
        ...INVITATION_CONFIG.ceremony
      }, {
        icon: ceremonyImage,
        map: ceremonyMapEmbed,
        photo: ceremonyPhoto,
        iconWrap: ceremonyIconWrap,
        mapWrap: ceremonyMapWrap,
        photoWrap: ceremonyPhotoWrap
      });

      setText("receptionTitle", INVITATION_CONFIG.reception.title);
      setText("receptionTime", INVITATION_CONFIG.reception.time);
      setText("receptionPlace", INVITATION_CONFIG.reception.place);
      setOptionalLink("receptionMapLink", INVITATION_CONFIG.reception.mapLink);
      applyLocationMedia(INVITATION_CONFIG.reception, {
        icon: receptionImage,
        map: receptionMapEmbed,
        photo: receptionPhoto,
        iconWrap: receptionIconWrap,
        mapWrap: receptionMapWrap,
        photoWrap: receptionPhotoWrap
      });
      renderTimeline();

      setText("countdownTitle", INVITATION_CONFIG.countdown.title);
      setText("countdownIntro", INVITATION_CONFIG.countdown.intro);

      setText("dressTitle", INVITATION_CONFIG.dressCode.title);
      setText("dressValue", INVITATION_CONFIG.dressCode.value);
      setText("dressNote", INVITATION_CONFIG.dressCode.note);

      setText("giftTitle", INVITATION_CONFIG.gifts.title);
      setText("giftIntro", INVITATION_CONFIG.gifts.intro);
      setText("giftOption1Title", INVITATION_CONFIG.gifts.option1Title);
      setText("giftOption1Copy", INVITATION_CONFIG.gifts.option1Copy);
      setText("giftOption2Title", INVITATION_CONFIG.gifts.option2Title);
      setText("giftOption2Copy", INVITATION_CONFIG.gifts.option2Copy);
      setText("giftLinksIntro", INVITATION_CONFIG.gifts.linksIntro);
      if (giftOption1Card) giftOption1Card.style.display = INVITATION_CONFIG.gifts.showOption1 === false ? "none" : "";
      if (giftOption2Card) giftOption2Card.style.display = INVITATION_CONFIG.gifts.showOption2 === false ? "none" : "";
      const giftOptions = document.querySelector(".gift-options");
      if (giftOptions) {
        const visibleGiftCards = [INVITATION_CONFIG.gifts.showOption1 !== false, INVITATION_CONFIG.gifts.showOption2 !== false].filter(Boolean).length;
        giftOptions.classList.toggle("single-option", visibleGiftCards <= 1);
      }
      renderGiftButtons();
      if (galleryImages.length) updateGalleryPreview(previewIndex);

      setText("albumTitle", INVITATION_CONFIG.album?.title || "Álbum digital");
      setText("albumCopy", INVITATION_CONFIG.album?.copy || "");
      setText("albumBtn", INVITATION_CONFIG.album?.buttonLabel || "Ver álbum digital");
      setHref("albumBtn", INVITATION_CONFIG.album?.buttonHref || "#");

      setText("closingNote", INVITATION_CONFIG.closing.note);
      setText("brandLink", INVITATION_CONFIG.brand.creditText);
      setHref("brandLink", INVITATION_CONFIG.brand.creditHref);
      setText("brandCtaLink", INVITATION_CONFIG.brand.ctaLabel);
      setHref("brandCtaLink", INVITATION_CONFIG.brand.ctaHref);

      guestCount.dataset.pases = String(INVITATION_CONFIG.rsvp.maxGuests || 1);
      guestCountField.style.display = INVITATION_CONFIG.rsvp.showGuestCount === false ? "none" : "";
      applySectionOrder();
      applySectionVisibility();
      populateGuestOptions();
    }

    loadSavedConfig();
    applyInvitationConfig();
    updateOverlayScale();
    setScrollLocked(!overlay.classList.contains("hidden"));

    function populateGuestOptions() {
      if (INVITATION_CONFIG.rsvp.showGuestCount === false) {
        guestCount.innerHTML = '<option value="">No aplica</option>';
        return;
      }

      const maxPases = Number(guestCount.dataset.pases) || 1;
      guestCount.innerHTML = '<option value="">Selecciona una opción</option>';

      for (let i = 0; i < maxPases; i += 1) {
        const option = document.createElement("option");
        if (i === 0) {
          option.value = "Asistiré solo";
          option.textContent = "Asistiré solo";
        } else {
          const plural = i > 1 ? "s" : "";
          const acompana = i > 1 ? "n" : "";
          option.value = `Me acompaña${acompana} ${i} persona${plural}`;
          option.textContent = option.value;
        }
        guestCount.appendChild(option);
      }
    }

    function updateCountdown() {
      const now = new Date();
      const diff = EVENT_DATE - now;

      if (diff <= 0) {
        const ended = [
          ["00", "Días"],
          ["00", "Horas"],
          ["00", "Min"],
          ["00", "Seg"]
        ];
        countdownEl.innerHTML = ended.map(([value, label]) => `
          <div class="count-box tick">
            <strong>${value}</strong>
            <span>${label}</span>
          </div>
        `).join("");
        countdownCaption.textContent = "Gracias por formar parte de este momento.";
        previousParts = ended.map(([value]) => value);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      const parts = [
        [String(days), "Días"],
        [String(hours).padStart(2, "0"), "Horas"],
        [String(minutes).padStart(2, "0"), "Min"],
        [String(seconds).padStart(2, "0"), "Seg"]
      ];

      countdownEl.innerHTML = parts.map(([value, label]) => `
        <div class="count-box">
          <strong>${value}</strong>
          <span>${label}</span>
        </div>
      `).join("");

      Array.from(countdownEl.querySelectorAll(".count-box")).forEach((box, index) => {
        if (!previousParts.length || previousParts[index] !== parts[index][0]) {
          box.classList.add("tick");
        }
      });

      previousParts = parts.map(([value]) => value);

      if (days > 30) {
        countdownCaption.textContent = "Cada día suma emoción para esta noche especial.";
      } else if (days > 7) {
        countdownCaption.textContent = "La emoción empieza a sentirse cada vez más cerca.";
      } else if (days > 0) {
        countdownCaption.textContent = "Entramos en la recta final para celebrar en grande.";
      } else {
        countdownCaption.textContent = "Todo está listo para una noche inolvidable.";
      }
    }

    function revealOnScroll() {
      const trigger = window.innerHeight * 0.88;
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top < trigger) {
          section.classList.add("show");
        }
      });

      const timelineItems = document.querySelectorAll(".timeline-item");
      timelineItems.forEach((item, index) => {
        if (item.getBoundingClientRect().top < trigger - 30) {
          setTimeout(() => item.classList.add("show"), index * 120);
        }
      });

      if (!storyStarted && storySection && storySection.getBoundingClientRect().top < trigger - 20) {
        storyStarted = true;
        typeStoryParagraphs();
      }
    }

    function typeText(element, text, speed = 20) {
      return new Promise((resolve) => {
        let index = 0;
        element.textContent = "";
        element.classList.add("is-typing");

        function step() {
          if (index < text.length) {
            element.textContent += text.charAt(index);
            index += 1;
            setTimeout(step, speed);
          } else {
            element.classList.remove("is-typing");
            resolve();
          }
        }

        step();
      });
    }

    async function typeStoryParagraphs() {
      for (const paragraph of storyParagraphs) {
        const fullText = paragraph.dataset.fulltext || "";
        await typeText(paragraph, fullText, 18);
        await new Promise((resolve) => setTimeout(resolve, 220));
      }
    }

    function showToast(message) {
      toast.textContent = message;
      toast.classList.add("show");
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        toast.classList.remove("show");
      }, 2200);
    }

    function updateFloatingButtons() {
      const shouldShow = window.scrollY > 420;
      const agendaVisible = agendaSection && getComputedStyle(agendaSection).display !== "none";
      const agendaTop = agendaVisible ? agendaSection.getBoundingClientRect().top : Number.POSITIVE_INFINITY;
      const isAtAgenda = agendaTop < window.innerHeight * 0.78;

      toTopBtn.classList.toggle("show", shouldShow && !isAtAgenda);
      if (!overlay.classList.contains("hidden")) {
        musicBtn.classList.remove("show");
      } else {
        musicBtn.classList.toggle("show", !isAtAgenda);
      }
    }

    function renderThumbs() {
      if (!galleryImages.length) {
        thumbs.innerHTML = "";
        return;
      }
      thumbs.innerHTML = "";
      galleryImages.forEach((image, index) => {
        const thumb = document.createElement("img");
        thumb.src = image.src;
        thumb.alt = image.alt || `Miniatura ${index + 1}`;
        thumb.classList.toggle("active", index === currentIndex);
        thumb.addEventListener("click", () => {
          currentIndex = index;
          updateLightbox();
        });
        thumbs.appendChild(thumb);
      });
    }

    function clampZoomOffsets() {
      const maxOffsetX = ((zoomScale - 1) * lightboxMain.clientWidth) / 2;
      const maxOffsetY = ((zoomScale - 1) * lightboxMain.clientHeight) / 2;
      zoomX = Math.max(-maxOffsetX, Math.min(maxOffsetX, zoomX));
      zoomY = Math.max(-maxOffsetY, Math.min(maxOffsetY, zoomY));
    }

    function applyImageZoom() {
      clampZoomOffsets();
      lightboxImg.style.transform = `translate3d(${zoomX}px, ${zoomY}px, 0) scale(${zoomScale})`;
      lightboxMain.classList.toggle("is-zoomed", zoomScale > 1.01);
    }

    function resetImageZoom(animate = false) {
      zoomScale = 1;
      zoomX = 0;
      zoomY = 0;
      if (animate) {
        lightboxImg.style.transition = "opacity 0.25s ease, transform 0.25s ease, filter 0.25s ease";
      }
      applyImageZoom();
      if (animate) {
        setTimeout(() => {
          lightboxImg.style.transition = "opacity 0.25s ease, transform 0.25s ease, filter 0.25s ease";
        }, 260);
      }
    }

    function getTouchDistance(touches) {
      const dx = touches[0].clientX - touches[1].clientX;
      const dy = touches[0].clientY - touches[1].clientY;
      return Math.hypot(dx, dy);
    }

    function updateGalleryPreview(index) {
      if (!galleryImages.length) return;
      previewIndex = (index + galleryImages.length) % galleryImages.length;
      const activeImage = galleryImages[previewIndex];

      galleryPreviewImg.style.opacity = "0";
      galleryPreviewImg.style.transform = "scale(0.97)";
      galleryPreviewImg.src = activeImage.src;
      galleryPreviewImg.alt = activeImage.alt || `Galería ${previewIndex + 1}`;
      galleryMetaIndex.textContent = `Foto ${previewIndex + 1} de ${galleryImages.length}`;
      galleryMetaHint.textContent = "Usa las flechas o toca una miniatura para explorar.";

      galleryImages.forEach((image, imageIndex) => {
        image.classList.toggle("is-active", imageIndex === previewIndex);
      });

      requestAnimationFrame(() => {
        galleryPreviewImg.style.opacity = "1";
        galleryPreviewImg.style.transform = "scale(1)";
      });
    }

    function updateLightbox() {
      if (!galleryImages.length) return;
      const activeImage = galleryImages[currentIndex];
      resetImageZoom();
      lightboxImg.style.opacity = "0";
      lightboxImg.style.transform = "translate3d(0, 0, 0) scale(0.97)";
      lightboxImg.src = activeImage.src;
      lightboxImg.alt = activeImage.alt || "Imagen ampliada";
      viewerCounter.textContent = `${currentIndex + 1} / ${galleryImages.length}`;
      Array.from(thumbs.querySelectorAll("img")).forEach((thumb, index) => {
        thumb.classList.toggle("active", index === currentIndex);
      });
      requestAnimationFrame(() => {
        lightboxImg.style.opacity = "1";
        applyImageZoom();
      });
    }

    function openLightbox(index) {
      if (!galleryImages.length) return;
      currentIndex = index;
      renderThumbs();
      updateLightbox();
      lightbox.classList.add("show");
      lightbox.setAttribute("aria-hidden", "false");
      setScrollLocked(true);
      closeLightbox.focus();
    }

    function closeGallery() {
      resetImageZoom();
      lightbox.classList.remove("show");
      lightbox.setAttribute("aria-hidden", "true");
      if (overlay.classList.contains("hidden")) {
        setScrollLocked(false);
      }
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % galleryImages.length;
      updateLightbox();
    }

    function prevImage() {
      currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      updateLightbox();
    }

    function nextPreview() {
      updateGalleryPreview(previewIndex + 1);
    }

    function prevPreview() {
      updateGalleryPreview(previewIndex - 1);
    }

    function getEditorField(id) {
      return document.getElementById(id);
    }

    function renderEditorGiftLinks() {
      if (!editorGiftLinksList) return;
      editorGiftLinksList.innerHTML = "";

      (INVITATION_CONFIG.gifts.links || []).forEach((link, index) => {
        const card = document.createElement("div");
        card.className = "editor-link-card";
        card.innerHTML = `
          <div class="editor-link-card-header">
            <strong>Botón ${index + 1}</strong>
            <button class="editor-btn" type="button" data-remove-gift-link="${index}">Quitar</button>
          </div>
          <div class="editor-grid">
            <div class="editor-field">
              <label>Nombre del botón</label>
              <input type="text" data-gift-link-field="label" data-index="${index}" value="${link.label || ""}" placeholder="Ej. Mesa de regalos Liverpool">
            </div>
            <div class="editor-field">
              <label>Link</label>
              <input type="text" data-gift-link-field="href" data-index="${index}" value="${link.href || ""}" placeholder="https://...">
            </div>
            <div class="editor-field">
              <label>Estilo</label>
              <select data-gift-link-field="style" data-index="${index}">
                <option value="primary" ${link.style !== "secondary" ? "selected" : ""}>Principal</option>
                <option value="secondary" ${link.style === "secondary" ? "selected" : ""}>Secundario</option>
              </select>
            </div>
          </div>
          <div class="editor-link-preview">
            <a class="editor-button-preview ${link.style === "secondary" ? "secondary" : "primary"}" data-gift-link-preview href="${link.href || "#"}" target="_blank" rel="noopener noreferrer">${link.label || "Vista previa del botón"}</a>
          </div>
        `;
        editorGiftLinksList.appendChild(card);
        updateGiftLinkPreview(card);
      });
    }

    function renderEditorTimelineRows() {
      if (!editorTimelineList) return;
      editorTimelineList.innerHTML = "";

      const items = INVITATION_CONFIG.timeline.items || [];
      if (!items.length) {
        const empty = document.createElement("div");
        empty.className = "editor-helper";
        empty.textContent = "Todavía no hay eventos. Usa “Agregar evento” para crear el primero.";
        editorTimelineList.appendChild(empty);
        return;
      }

      items.forEach((item, index) => {
        const row = document.createElement("div");
        row.className = "timeline-editor-row";
        row.innerHTML = `
          <div class="timeline-editor-grid">
            <div class="editor-field">
              <label>Hora</label>
              <input type="text" data-timeline-field="time" data-index="${index}" value="${item.time || ""}" placeholder="Ej. 7:00 pm">
            </div>
            <div class="editor-field">
              <label>Título</label>
              <input type="text" data-timeline-field="title" data-index="${index}" value="${item.title || ""}" placeholder="Ej. Recepción">
            </div>
          </div>
          <div class="editor-field">
            <label>Descripción</label>
            <input type="text" data-timeline-field="desc" data-index="${index}" value="${item.desc || ""}" placeholder="Opcional">
          </div>
          <button class="editor-btn" type="button" data-remove-timeline-row="${index}">Quitar evento</button>
        `;
        editorTimelineList.appendChild(row);
      });
    }

    function fillEditorPanel() {
      isHydratingEditor = true;
      sanitizeInvitationConfig();
      getEditorField("cfgThemePreset").value = "";
      getEditorField("cfgBgTop").value = INVITATION_CONFIG.theme.bgTop;
      getEditorField("cfgBgMid").value = INVITATION_CONFIG.theme.bgMid;
      getEditorField("cfgBgBottom").value = INVITATION_CONFIG.theme.bgBottom;
      getEditorField("cfgGold").value = INVITATION_CONFIG.theme.gold500;
      getEditorField("cfgParticleColor").value = INVITATION_CONFIG.theme.particleColor || INVITATION_CONFIG.theme.gold500;
      getEditorField("cfgTextColor").value = INVITATION_CONFIG.theme.text;
      getEditorField("cfgMutedColor").value = INVITATION_CONFIG.theme.muted.startsWith("#") ? INVITATION_CONFIG.theme.muted : "#fef0e1";
      getEditorField("cfgBodyFont").value = INVITATION_CONFIG.theme.bodyFont;
      getEditorField("cfgScriptFont").value = INVITATION_CONFIG.theme.scriptFont;
      getEditorField("cfgDisplayFont").value = INVITATION_CONFIG.theme.displayFont;
      getEditorField("cfgEventLabel").value = INVITATION_CONFIG.event.label;
      getEditorField("cfgCelebrantName").value = INVITATION_CONFIG.event.celebrantName;
      getEditorField("cfgEventDate").value = INVITATION_CONFIG.event.eventDate.slice(0, 16);
      getEditorField("cfgEventEnd").value = INVITATION_CONFIG.event.eventEnd.slice(0, 16);
      getEditorField("cfgPageTitle").value = INVITATION_CONFIG.meta.pageTitle || "";
      getEditorField("cfgOgDescription").value = INVITATION_CONFIG.meta.ogDescription || "";
      getEditorField("cfgHeroImageSrc").value = INVITATION_CONFIG.images.hero || "";
      getEditorField("cfgStoryImageSrc").value = INVITATION_CONFIG.images.story || "";
      getEditorField("cfgDressImageSrc").value = INVITATION_CONFIG.images.dress || "";
      getEditorField("cfgEnvelopeImageSrc").value = INVITATION_CONFIG.images.envelope || "";
      getEditorField("cfgSurpriseImageSrc").value = INVITATION_CONFIG.images.surprise || "";
      getEditorField("cfgStoryTitle").value = INVITATION_CONFIG.story.title;
      getEditorField("cfgStoryText1").value = INVITATION_CONFIG.story.paragraph1;
      getEditorField("cfgStoryText2").value = INVITATION_CONFIG.story.paragraph2;
      getEditorField("cfgParentsEyebrow").value = INVITATION_CONFIG.family.parentsEyebrow;
      getEditorField("cfgParentsNames").value = INVITATION_CONFIG.family.parentsNamesHtml;
      getEditorField("cfgParentsInviteText").value = INVITATION_CONFIG.family.parentsInviteText;
      getEditorField("cfgGodparentsEyebrow").value = INVITATION_CONFIG.family.godparentsEyebrow;
      getEditorField("cfgGodparentsNames").value = INVITATION_CONFIG.family.godparentsNamesHtml;
      getEditorField("cfgCeremonyTitle").value = INVITATION_CONFIG.ceremony.title;
      getEditorField("cfgCeremonyTime").value = INVITATION_CONFIG.ceremony.time;
      getEditorField("cfgCeremonyPlace").value = INVITATION_CONFIG.ceremony.place;
      getEditorField("cfgCeremonyMediaMode").value = INVITATION_CONFIG.ceremony.mediaMode || "icon";
      getEditorField("cfgCeremonyIconSrc").value = INVITATION_CONFIG.ceremony.iconSrc || "";
      getEditorField("cfgCeremonyMapEmbed").value = INVITATION_CONFIG.ceremony.mapEmbed || "";
      getEditorField("cfgCeremonyPhotoSrc").value = INVITATION_CONFIG.ceremony.photoSrc || "";
      getEditorField("cfgCeremonyMapLink").value = INVITATION_CONFIG.ceremony.mapLink || "";
      getEditorField("cfgReceptionTitle").value = INVITATION_CONFIG.reception.title;
      getEditorField("cfgReceptionTime").value = INVITATION_CONFIG.reception.time;
      getEditorField("cfgReceptionPlace").value = INVITATION_CONFIG.reception.place;
      getEditorField("cfgReceptionMediaMode").value = INVITATION_CONFIG.reception.mediaMode || "preview";
      getEditorField("cfgReceptionIconSrc").value = INVITATION_CONFIG.reception.iconSrc || "";
      getEditorField("cfgReceptionMapLink").value = INVITATION_CONFIG.reception.mapLink || "";
      getEditorField("cfgReceptionMapEmbed").value = INVITATION_CONFIG.reception.mapEmbed || "";
      getEditorField("cfgReceptionPhotoSrc").value = INVITATION_CONFIG.reception.photoSrc || "";
      getEditorField("cfgCountdownTitle").value = INVITATION_CONFIG.countdown.title;
      getEditorField("cfgCountdownIntro").value = INVITATION_CONFIG.countdown.intro;
      getEditorField("cfgDressTitle").value = INVITATION_CONFIG.dressCode.title;
      getEditorField("cfgDressValue").value = INVITATION_CONFIG.dressCode.value;
      getEditorField("cfgDressNote").value = INVITATION_CONFIG.dressCode.note;
      getEditorField("cfgGiftTitle").value = INVITATION_CONFIG.gifts.title;
      getEditorField("cfgGiftIntro").value = INVITATION_CONFIG.gifts.intro;
      getEditorField("cfgGiftOption1Title").value = INVITATION_CONFIG.gifts.option1Title;
      getEditorField("cfgGiftOption1Copy").value = INVITATION_CONFIG.gifts.option1Copy;
      getEditorField("cfgGiftOption2Title").value = INVITATION_CONFIG.gifts.option2Title;
      getEditorField("cfgGiftOption2Copy").value = INVITATION_CONFIG.gifts.option2Copy;
      getEditorField("cfgGiftLinksIntro").value = INVITATION_CONFIG.gifts.linksIntro;
      getEditorField("cfgAlbumTitle").value = INVITATION_CONFIG.album.title;
      getEditorField("cfgAlbumCopy").value = INVITATION_CONFIG.album.copy;
      getEditorField("cfgAlbumButtonLabel").value = INVITATION_CONFIG.album.buttonLabel;
      getEditorField("cfgClosingNote").value = INVITATION_CONFIG.closing.note;
      getEditorField("cfgShowStory").checked = INVITATION_CONFIG.sections.story !== false;
      getEditorField("cfgShowParents").checked = INVITATION_CONFIG.sections.parents !== false;
      getEditorField("cfgShowGodparents").checked = INVITATION_CONFIG.sections.godparents !== false;
      getEditorField("cfgShowCeremony").checked = INVITATION_CONFIG.sections.ceremony !== false;
      getEditorField("cfgShowReception").checked = INVITATION_CONFIG.sections.reception !== false;
      getEditorField("cfgShowTimeline").checked = INVITATION_CONFIG.sections.timeline !== false;
      getEditorField("cfgShowCountdown").checked = INVITATION_CONFIG.sections.countdown !== false;
      getEditorField("cfgShowGallery").checked = INVITATION_CONFIG.sections.gallery !== false;
      getEditorField("cfgShowDress").checked = INVITATION_CONFIG.sections.dress !== false;
      getEditorField("cfgShowRsvp").checked = INVITATION_CONFIG.sections.rsvp !== false;
      getEditorField("cfgShowGifts").checked = INVITATION_CONFIG.sections.gifts !== false;
      getEditorField("cfgShowAgenda").checked = INVITATION_CONFIG.sections.agenda !== false;
      getEditorField("cfgShowAlbum").checked = INVITATION_CONFIG.sections.album !== false;
      getEditorField("cfgShowClosing").checked = INVITATION_CONFIG.sections.closing !== false;
      getEditorField("cfgRsvpPhone").value = INVITATION_CONFIG.event.rsvpPhone;
      getEditorField("cfgShowGuestCount").checked = INVITATION_CONFIG.rsvp.showGuestCount !== false;
      getEditorField("cfgMaxGuests").value = INVITATION_CONFIG.rsvp.maxGuests || 1;
      getEditorField("cfgBrandCreditText").value = INVITATION_CONFIG.brand.creditText;
      getEditorField("cfgBrandCreditHref").value = INVITATION_CONFIG.brand.creditHref || "";
      getEditorField("cfgBrandCtaLabel").value = INVITATION_CONFIG.brand.ctaLabel;
      getEditorField("cfgBrandCtaHref").value = INVITATION_CONFIG.brand.ctaHref || "";
      getEditorField("cfgStoryImage").checked = INVITATION_CONFIG.story.showImage !== false;
      getEditorField("cfgShowGiftOption1").checked = INVITATION_CONFIG.gifts.showOption1 !== false;
      getEditorField("cfgShowGiftOption2").checked = INVITATION_CONFIG.gifts.showOption2 !== false;
      getEditorField("cfgShowGiftLinks").checked = INVITATION_CONFIG.gifts.showLinks !== false;
      renderEditorGalleryList();
      renderEditorGiftLinks();
      renderEditorTimelineRows();
      updateFontPreviews();
      updateEditorSummary();
      updateFileChip("cfgHeroImageSrc", "cfgHeroImageChip", DEFAULT_CONFIG.images.hero);
      updateFileChip("cfgStoryImageSrc", "cfgStoryImageChip", DEFAULT_CONFIG.images.story);
      updateFileChip("cfgDressImageSrc", "cfgDressImageChip", DEFAULT_CONFIG.images.dress);
      updateFileChip("cfgEnvelopeImageSrc", "cfgEnvelopeImageChip", DEFAULT_CONFIG.images.envelope);
      updateFileChip("cfgSurpriseImageSrc", "cfgSurpriseImageChip", DEFAULT_CONFIG.images.surprise);
      syncEditorPills();
      isHydratingEditor = false;
    }

    function readEditorPanel() {
      INVITATION_CONFIG.theme.bgTop = readEditorValue("cfgBgTop");
      INVITATION_CONFIG.theme.bgMid = readEditorValue("cfgBgMid");
      INVITATION_CONFIG.theme.bgBottom = readEditorValue("cfgBgBottom");
      INVITATION_CONFIG.theme.gold500 = readEditorValue("cfgGold");
      INVITATION_CONFIG.theme.particleColor = readEditorValue("cfgParticleColor");
      INVITATION_CONFIG.theme.text = readEditorValue("cfgTextColor");
      INVITATION_CONFIG.theme.muted = readEditorValue("cfgMutedColor");
      INVITATION_CONFIG.theme.bodyFont = readEditorValue("cfgBodyFont");
      INVITATION_CONFIG.theme.scriptFont = readEditorValue("cfgScriptFont");
      INVITATION_CONFIG.theme.displayFont = readEditorValue("cfgDisplayFont");
      INVITATION_CONFIG.meta.pageTitle = readEditorTrimmedValue("cfgPageTitle");
      INVITATION_CONFIG.meta.ogDescription = readEditorTrimmedValue("cfgOgDescription");
      INVITATION_CONFIG.event.label = readEditorNonEmptyValue("cfgEventLabel", INVITATION_CONFIG.event.label);
      INVITATION_CONFIG.event.celebrantName = readEditorNonEmptyValue("cfgCelebrantName", INVITATION_CONFIG.event.celebrantName);
      INVITATION_CONFIG.event.eventDate = readEditorValue("cfgEventDate") || INVITATION_CONFIG.event.eventDate;
      INVITATION_CONFIG.event.eventEnd = readEditorValue("cfgEventEnd") || INVITATION_CONFIG.event.eventEnd;
      INVITATION_CONFIG.images.hero = extractFileName(readEditorTrimmedValue("cfgHeroImageSrc"), DEFAULT_CONFIG.images.hero);
      INVITATION_CONFIG.images.story = extractFileName(readEditorTrimmedValue("cfgStoryImageSrc"), DEFAULT_CONFIG.images.story);
      INVITATION_CONFIG.images.dress = extractFileName(readEditorTrimmedValue("cfgDressImageSrc"), DEFAULT_CONFIG.images.dress);
      INVITATION_CONFIG.images.envelope = extractFileName(readEditorTrimmedValue("cfgEnvelopeImageSrc"), DEFAULT_CONFIG.images.envelope);
      INVITATION_CONFIG.images.surprise = extractFileName(readEditorTrimmedValue("cfgSurpriseImageSrc"), DEFAULT_CONFIG.images.surprise);
      INVITATION_CONFIG.images.gallery = Array.from(editorGalleryList.querySelectorAll('[data-gallery-field="name"]'))
        .map((input, index) => extractFileName(input.value, DEFAULT_CONFIG.images.gallery[index] || `G${index + 1}.jpg`))
        .filter(Boolean);
      INVITATION_CONFIG.story.title = readEditorValue("cfgStoryTitle");
      INVITATION_CONFIG.story.paragraph1 = readEditorValue("cfgStoryText1");
      INVITATION_CONFIG.story.paragraph2 = readEditorValue("cfgStoryText2");
      INVITATION_CONFIG.family.parentsEyebrow = readEditorValue("cfgParentsEyebrow");
      INVITATION_CONFIG.family.parentsNamesHtml = readEditorValue("cfgParentsNames");
      INVITATION_CONFIG.family.parentsInviteText = readEditorValue("cfgParentsInviteText");
      INVITATION_CONFIG.family.godparentsEyebrow = readEditorValue("cfgGodparentsEyebrow");
      INVITATION_CONFIG.family.godparentsNamesHtml = readEditorValue("cfgGodparentsNames");
      INVITATION_CONFIG.ceremony.title = readEditorValue("cfgCeremonyTitle");
      INVITATION_CONFIG.ceremony.time = readEditorValue("cfgCeremonyTime");
      INVITATION_CONFIG.ceremony.place = readEditorValue("cfgCeremonyPlace");
      INVITATION_CONFIG.ceremony.mediaMode = readEditorValue("cfgCeremonyMediaMode") || "icon";
      INVITATION_CONFIG.ceremony.iconSrc = readEditorTrimmedValue("cfgCeremonyIconSrc");
      INVITATION_CONFIG.ceremony.mapEmbed = readEditorTrimmedValue("cfgCeremonyMapEmbed");
      INVITATION_CONFIG.ceremony.photoSrc = readEditorTrimmedValue("cfgCeremonyPhotoSrc");
      INVITATION_CONFIG.ceremony.mapLink = readEditorTrimmedValue("cfgCeremonyMapLink");
      INVITATION_CONFIG.reception.title = readEditorValue("cfgReceptionTitle");
      INVITATION_CONFIG.reception.time = readEditorValue("cfgReceptionTime");
      INVITATION_CONFIG.reception.place = readEditorValue("cfgReceptionPlace");
      INVITATION_CONFIG.reception.mediaMode = readEditorValue("cfgReceptionMediaMode") || "preview";
      INVITATION_CONFIG.reception.iconSrc = readEditorTrimmedValue("cfgReceptionIconSrc");
      INVITATION_CONFIG.reception.mapLink = readEditorTrimmedValue("cfgReceptionMapLink");
      INVITATION_CONFIG.reception.mapEmbed = readEditorTrimmedValue("cfgReceptionMapEmbed");
      INVITATION_CONFIG.reception.photoSrc = readEditorTrimmedValue("cfgReceptionPhotoSrc");
      const timeFields = editorTimelineList.querySelectorAll('[data-timeline-field="time"]');
      const titleFields = editorTimelineList.querySelectorAll('[data-timeline-field="title"]');
      const descFields = editorTimelineList.querySelectorAll('[data-timeline-field="desc"]');
      INVITATION_CONFIG.timeline.items = Array.from(timeFields).map((input, index) => ({
        time: input.value || "",
        title: titleFields[index].value || "",
        desc: descFields[index].value || ""
      })).filter((item) => item.time || item.title || item.desc);
      INVITATION_CONFIG.countdown.title = readEditorValue("cfgCountdownTitle");
      INVITATION_CONFIG.countdown.intro = readEditorValue("cfgCountdownIntro");
      INVITATION_CONFIG.dressCode.title = readEditorValue("cfgDressTitle");
      INVITATION_CONFIG.dressCode.value = readEditorValue("cfgDressValue");
      INVITATION_CONFIG.dressCode.note = readEditorValue("cfgDressNote");
      INVITATION_CONFIG.gifts.title = readEditorValue("cfgGiftTitle");
      INVITATION_CONFIG.gifts.intro = readEditorValue("cfgGiftIntro");
      INVITATION_CONFIG.gifts.option1Title = readEditorValue("cfgGiftOption1Title");
      INVITATION_CONFIG.gifts.option1Copy = readEditorValue("cfgGiftOption1Copy");
      INVITATION_CONFIG.gifts.option2Title = readEditorValue("cfgGiftOption2Title");
      INVITATION_CONFIG.gifts.option2Copy = readEditorValue("cfgGiftOption2Copy");
      INVITATION_CONFIG.gifts.linksIntro = readEditorValue("cfgGiftLinksIntro");
      INVITATION_CONFIG.album.title = readEditorValue("cfgAlbumTitle");
      INVITATION_CONFIG.album.copy = readEditorValue("cfgAlbumCopy");
      INVITATION_CONFIG.album.buttonLabel = readEditorValue("cfgAlbumButtonLabel");
      INVITATION_CONFIG.closing.note = readEditorValue("cfgClosingNote");
      INVITATION_CONFIG.event.rsvpPhone = readEditorNonEmptyValue("cfgRsvpPhone", INVITATION_CONFIG.event.rsvpPhone);
      INVITATION_CONFIG.sections.story = getEditorField("cfgShowStory").checked;
      INVITATION_CONFIG.sections.parents = getEditorField("cfgShowParents").checked;
      INVITATION_CONFIG.sections.godparents = getEditorField("cfgShowGodparents").checked;
      INVITATION_CONFIG.sections.ceremony = getEditorField("cfgShowCeremony").checked;
      INVITATION_CONFIG.sections.reception = getEditorField("cfgShowReception").checked;
      INVITATION_CONFIG.sections.timeline = getEditorField("cfgShowTimeline").checked;
      INVITATION_CONFIG.sections.countdown = getEditorField("cfgShowCountdown").checked;
      INVITATION_CONFIG.sections.gallery = getEditorField("cfgShowGallery").checked;
      INVITATION_CONFIG.sections.dress = getEditorField("cfgShowDress").checked;
      INVITATION_CONFIG.sections.rsvp = getEditorField("cfgShowRsvp").checked;
      INVITATION_CONFIG.sections.gifts = getEditorField("cfgShowGifts").checked;
      INVITATION_CONFIG.sections.agenda = getEditorField("cfgShowAgenda").checked;
      INVITATION_CONFIG.sections.album = getEditorField("cfgShowAlbum").checked;
      INVITATION_CONFIG.sections.closing = getEditorField("cfgShowClosing").checked;
      INVITATION_CONFIG.rsvp.showGuestCount = getEditorField("cfgShowGuestCount").checked;
      INVITATION_CONFIG.rsvp.maxGuests = Math.max(1, Number(getEditorField("cfgMaxGuests").value) || 1);
      INVITATION_CONFIG.brand.creditText = readEditorValue("cfgBrandCreditText");
      INVITATION_CONFIG.brand.creditHref = readEditorTrimmedValue("cfgBrandCreditHref");
      INVITATION_CONFIG.brand.ctaLabel = readEditorValue("cfgBrandCtaLabel");
      INVITATION_CONFIG.brand.ctaHref = readEditorTrimmedValue("cfgBrandCtaHref");
      INVITATION_CONFIG.story.showImage = getEditorField("cfgStoryImage").checked;
      INVITATION_CONFIG.gifts.showOption1 = getEditorField("cfgShowGiftOption1").checked;
      INVITATION_CONFIG.gifts.showOption2 = getEditorField("cfgShowGiftOption2").checked;
      INVITATION_CONFIG.gifts.showLinks = getEditorField("cfgShowGiftLinks").checked;
      sanitizeInvitationConfig();

      const labels = editorGiftLinksList.querySelectorAll('[data-gift-link-field="label"]');
      const hrefs = editorGiftLinksList.querySelectorAll('[data-gift-link-field="href"]');
      const styles = editorGiftLinksList.querySelectorAll('[data-gift-link-field="style"]');

      INVITATION_CONFIG.gifts.links = Array.from(labels).map((input, index) => ({
        label: input.value.trim() || `Botón ${index + 1}`,
        href: hrefs[index].value.trim() || "#",
        style: styles[index].value || "primary"
      }));
    }

    function openEditorPanel() {
      closeEditorAuth();
      body.classList.add("editor-open");
      editorPanel.setAttribute("aria-hidden", "false");
      editorOverlay.setAttribute("aria-hidden", "false");
      fillEditorPanel();
      if (editorContent) editorContent.scrollTop = 0;
      updateEditorNavState();
      editorToggle.focus();
    }

    function closeEditorPanel() {
      body.classList.remove("editor-open");
      editorPanel.setAttribute("aria-hidden", "true");
      editorOverlay.setAttribute("aria-hidden", "true");
    }

    function openEditorAuth() {
      editorAuth.classList.add("show");
      editorAuthError.textContent = "";
      editorUsername.value = "";
      editorPassword.value = "";
      setTimeout(() => editorUsername.focus(), 30);
    }

    function closeEditorAuth() {
      editorAuth.classList.remove("show");
      editorAuthError.textContent = "";
    }

    function requestEditorAccess() {
      if (editorAuthenticated) {
        openEditorPanel();
        return;
      }
      openEditorAuth();
    }

    function registerEditorTap() {
      editorTapCount += 1;
      clearTimeout(editorTapTimer);
      editorTapTimer = setTimeout(() => {
        editorTapCount = 0;
      }, 1800);

      if (editorTapCount >= 8) {
        editorTapCount = 0;
        requestEditorAccess();
      }
    }

    function normalizeWhatsAppPhone(phone) {
      let digits = String(phone || "").replace(/\D/g, "");
      if (digits.length === 10) digits = `52${digits}`;
      if (digits.length === 11 && digits.startsWith("1")) digits = `52${digits.slice(1)}`;
      return digits;
    }

    function sendConfirmation(attending) {
      const name = guestName.value.trim();
      const count = guestCount.value;
      const eventCopy = getEventCopy();

      if (!name) {
        showToast("Por favor escribe tu nombre.");
        guestName.focus();
        return;
      }

      let message = "";

      if (attending) {
        if (INVITATION_CONFIG.rsvp.showGuestCount !== false && !count) {
          showToast("Selecciona cuántas personas asistirán.");
          guestCount.focus();
          return;
        }

        message = [
          " Confirmación de asistencia ",
          "",
          `Con mucha alegría confirmo mi presencia para celebrar ${eventCopy.celebrationText}.`,
          "",
          `Nombre: ${name}`,
          ...(INVITATION_CONFIG.rsvp.showGuestCount !== false ? [count] : []),
          "",
          "Será un honor acompañarte en este día tan especial."
        ].join("\n");
      } else {
        message = [
          ` ${eventCopy.eventHeader} `,
          "",
          `Hola, mi nombre es ${name}.`,
          "",
          "Con mucho cariño quiero decir que en esta ocasión no podré acompañarte,",
          "pero te deseo un día maravilloso y lleno de felicidad."
        ].join("\n");
      }

      const button = attending ? confirmYes : confirmNo;
      const originalText = button.textContent;
      button.disabled = true;
      button.textContent = attending ? "Preparando mensaje..." : "Avisando...";
      showToast(attending ? "Estamos preparando tu confirmación." : "Estamos preparando tu mensaje.");

      setTimeout(() => {
        const phone = normalizeWhatsAppPhone(RSVP_PHONE);
        if (!phone) {
          showToast("Revisa el número de WhatsApp en el panel.");
          button.disabled = false;
          button.textContent = originalText;
          return;
        }
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
        button.disabled = false;
        button.textContent = originalText;
      }, 520);
    }

    function fadeInAudio() {
      audio.volume = 0;
      audio.play().then(() => {
        let volume = 0;
        const interval = setInterval(() => {
          volume = Math.min(1, volume + 0.08);
          audio.volume = volume;
          if (volume >= 1) clearInterval(interval);
        }, 120);
      }).catch(() => {});
    }

    function applyHeroParallax() {
      const hero = document.querySelector(".hero");
      const heroImage = hero.querySelector("img");
      const rect = hero.getBoundingClientRect();
      const progress = Math.max(-1, Math.min(1, rect.top / window.innerHeight));
      heroImage.style.transform = `scale(1.03) translate3d(0, ${progress * -18}px, 0)`;
    }

    function escapeICSValue(value) {
      return String(value || "")
        .replace(/\\/g, "\\\\")
        .replace(/\r?\n/g, "\\n")
        .replace(/,/g, "\\,")
        .replace(/;/g, "\\;");
    }

    function foldICSLine(line) {
      const limit = 74;
      if (line.length <= limit) return line;
      let output = "";
      for (let index = 0; index < line.length; index += limit) {
        const chunk = line.slice(index, index + limit);
        output += index === 0 ? chunk : `\r\n ${chunk}`;
      }
      return output;
    }

    function getCalendarTimeZone() {
      return INVITATION_CONFIG.event.timeZone || "America/Mexico_City";
    }

    function getConfiguredDateParts(value) {
      const match = String(value || "").match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/);
      if (match) {
        return {
          year: match[1],
          month: match[2],
          day: match[3],
          hour: match[4],
          minute: match[5],
          second: "00"
        };
      }

      const date = new Date(value);
      return {
        year: String(date.getFullYear()).padStart(4, "0"),
        month: String(date.getMonth() + 1).padStart(2, "0"),
        day: String(date.getDate()).padStart(2, "0"),
        hour: String(date.getHours()).padStart(2, "0"),
        minute: String(date.getMinutes()).padStart(2, "0"),
        second: "00"
      };
    }

    function formatCalendarLocalDate(value) {
      const parts = getConfiguredDateParts(value);
      return `${parts.year}${parts.month}${parts.day}T${parts.hour}${parts.minute}${parts.second}`;
    }

    function formatUrlLocalDate(value) {
      const parts = getConfiguredDateParts(value);
      return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}:${parts.second}`;
    }

    function formatUTCStamp(date) {
      return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    }

    function buildICSFile(title, details, location) {
      const uidBase = `${slugifyText(title || "evento")}-${EVENT_DATE.getTime()}`;
      const timeZone = getCalendarTimeZone();
      const lines = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//Digital Invita//Editor de Invitaciones//ES",
        "CALSCALE:GREGORIAN",
        "METHOD:PUBLISH",
        foldICSLine(`X-WR-CALNAME:${escapeICSValue(title)}`),
        "BEGIN:VEVENT",
        foldICSLine(`UID:${escapeICSValue(uidBase)}@digitalinvita`),
        `DTSTAMP:${formatUTCStamp(new Date())}`,
        `DTSTART;TZID=${timeZone}:${formatCalendarLocalDate(INVITATION_CONFIG.event.eventDate)}`,
        `DTEND;TZID=${timeZone}:${formatCalendarLocalDate(INVITATION_CONFIG.event.eventEnd)}`,
        foldICSLine(`SUMMARY:${escapeICSValue(title)}`),
        foldICSLine(`DESCRIPTION:${escapeICSValue(details)}`),
        foldICSLine(`LOCATION:${escapeICSValue(location)}`),
        "STATUS:CONFIRMED",
        "TRANSP:OPAQUE",
        foldICSLine(`URL:${escapeICSValue(window.location.href)}`),
        "END:VEVENT",
        "END:VCALENDAR"
      ];
      return lines.join("\r\n");
    }

    function downloadICSFile(filename, content) {
      try {
        const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => URL.revokeObjectURL(url), 1200);
        return true;
      } catch (error) {
        console.warn("No se pudo generar el archivo de calendario.", error);
        return false;
      }
    }

    function buildGoogleCalendarUrl(title, details, location) {
      const start = formatCalendarLocalDate(INVITATION_CONFIG.event.eventDate);
      const end = formatCalendarLocalDate(INVITATION_CONFIG.event.eventEnd);
      const timeZone = getCalendarTimeZone();
      return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${start}/${end}&ctz=${encodeURIComponent(timeZone)}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
    }

    function buildOutlookCalendarUrl(title, details, location) {
      const start = formatUrlLocalDate(INVITATION_CONFIG.event.eventDate);
      const end = formatUrlLocalDate(INVITATION_CONFIG.event.eventEnd);
      return `https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&subject=${encodeURIComponent(title)}&startdt=${encodeURIComponent(start)}&enddt=${encodeURIComponent(end)}&body=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
    }

    function openCalendarProvider(url) {
      try {
        const opened = window.open(url, "_blank", "noopener,noreferrer");
        return Boolean(opened);
      } catch (error) {
        console.warn("No se pudo abrir el proveedor de calendario.", error);
        return false;
      }
    }

    function addToCalendar(event) {
      event.preventDefault();

      const eventCopy = getEventCopy();
      const title = eventCopy.calendarTitle;
      const details = eventCopy.calendarDetails;
      const userAgent = navigator.userAgent;
      const isApple = /iPad|iPhone|iPod|Mac/i.test(userAgent);
      const isWindows = /Windows/i.test(userAgent);
      const isAndroid = /Android/i.test(userAgent);
      const icsContent = buildICSFile(title, details, EVENT_LOCATION);
      const filename = `${slugifyText(eventCopy.calendarTitle)}.ics`;
      const downloaded = downloadICSFile(filename, icsContent);

      if (isApple) {
        showToast(downloaded ? "Calendario listo para Apple Calendar." : "Calendario listo. Si no se descargó, intenta de nuevo.");
        return;
      }

      const providerUrl = isWindows
        ? buildOutlookCalendarUrl(title, details, EVENT_LOCATION)
        : buildGoogleCalendarUrl(title, details, EVENT_LOCATION);
      const opened = openCalendarProvider(providerUrl);

      if (opened) {
        showToast(isWindows
          ? "Se abrió Outlook y también se descargó respaldo .ics."
          : "Se abrió Google Calendar y también se descargó respaldo .ics.");
        return;
      }

      showToast(isAndroid
        ? "Se descargó un archivo .ics compatible con Samsung Calendar."
        : "Se descargó un archivo .ics compatible con tu calendario.");
    }

    function initParticles() {
      const canvas = document.getElementById("particles");
      if (!canvas) return null;
      const ctx = canvas.getContext("2d", { alpha: true });
      if (!ctx) return null;

      let width = 0;
      let height = 0;
      let particles = [];
      let animationId = 0;
      const lowPower = IS_LOW_POWER_DEVICE
        || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4)
        || (navigator.deviceMemory && navigator.deviceMemory <= 4);

      function createParticle() {
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * 1.8 + 0.6,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          alpha: Math.random() * 0.35 + 0.15
        };
      }

      function resize() {
        const dpr = Math.min(window.devicePixelRatio || 1, IS_MOBILE_DEVICE ? 1.15 : 1.6);
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        const total = IS_MOBILE_DEVICE
          ? (width < 768 ? 10 : 16)
          : (lowPower
            ? (width < 768 ? 16 : 26)
            : (width < 768 ? 44 : 82));
        particles = Array.from({ length: total }, createParticle);
      }

      function animate() {
        ctx.clearRect(0, 0, width, height);
        const particleRgb = getComputedStyle(document.documentElement).getPropertyValue("--particle-rgb").trim() || "255, 244, 207";
        particles.forEach((particle) => {
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.x < 0 || particle.x > width) particle.vx *= -1;
          if (particle.y < 0 || particle.y > height) particle.vy *= -1;

          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${particleRgb}, ${particle.alpha})`;
          ctx.fill();
        });
        animationId = requestAnimationFrame(animate);
      }

      resize();
      animate();
      window.addEventListener("resize", resize, { passive: true });
      const handleParticleVisibility = () => {
        if (document.hidden) {
          cancelAnimationFrame(animationId);
          animationId = 0;
        } else if (!animationId) {
          animate();
        }
      };
      document.addEventListener("visibilitychange", handleParticleVisibility);

      return () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener("resize", resize);
        document.removeEventListener("visibilitychange", handleParticleVisibility);
      };
    }

    function initLightProtection() {
      document.addEventListener("contextmenu", (event) => {
        const protectedTarget = event.target.closest("img, .gallery-stage, .gallery, .lightbox, .hero");
        if (!protectedTarget) return;
        event.preventDefault();
        showToast("Esta vista está protegida.");
      });

      document.addEventListener("dragstart", (event) => {
        if (event.target.closest("img")) {
          event.preventDefault();
        }
      });

      document.addEventListener("keydown", (event) => {
        const key = event.key.toLowerCase();
        const isBlockedShortcut =
          key === "f12"
          || (event.ctrlKey && event.shiftKey && (key === "i" || key === "j" || key === "c"))
          || (event.ctrlKey && key === "u")
          || (event.metaKey && event.altKey && key === "i")
          || (event.metaKey && event.altKey && key === "j")
          || (event.metaKey && key === "u");

        if (!isBlockedShortcut) return;

        event.preventDefault();
        showToast("Acción desactivada en esta invitación.");
      });
    }

    openBtn.addEventListener("click", () => {
      if (overlay.classList.contains("hidden")) return;
      musicBtn.classList.add("show");
      fadeInAudio();
      musicBtn.classList.remove("is-paused");
      overlay.classList.add("hidden");
      overlay.setAttribute("aria-hidden", "true");
      setScrollLocked(false);
      heroLabel.classList.add("animate");
      heroName.classList.add("animate");
      fechaEvento.classList.add("animate");
    });

    musicBtn.addEventListener("click", () => {
      if (audio.paused) {
        audio.play().catch(() => {});
        musicBtn.classList.remove("is-paused");
        musicBtn.setAttribute("aria-label", "Pausar música");
      } else {
        audio.pause();
        musicBtn.classList.add("is-paused");
        musicBtn.setAttribute("aria-label", "Reproducir música");
      }
    });

    toTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    galleryGrid.addEventListener("mouseover", (event) => {
      const image = event.target.closest("img");
      if (!image) return;
      const index = galleryImages.indexOf(image);
      if (index >= 0) updateGalleryPreview(index);
    });

    galleryGrid.addEventListener("click", (event) => {
      const image = event.target.closest("img");
      if (!image) return;
      const index = galleryImages.indexOf(image);
      if (index >= 0) {
        updateGalleryPreview(index);
        openLightbox(index);
      }
    });

    galleryPrev.addEventListener("click", prevPreview);
    galleryNext.addEventListener("click", nextPreview);
    galleryStage.addEventListener("click", () => openLightbox(previewIndex));

    closeLightbox.addEventListener("click", closeGallery);
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) closeGallery();
    });

    editorToggle.addEventListener("click", closeEditorPanel);
    editorOverlay.addEventListener("click", closeEditorPanel);
    editorSecretHotspot.addEventListener("click", registerEditorTap);
    editorLoginBtn.addEventListener("click", () => {
      if (editorUsername.value === EDITOR_SECRET && editorPassword.value === EDITOR_KEY) {
        editorAuthenticated = true;
        closeEditorAuth();
        openEditorPanel();
      } else {
        editorAuthError.textContent = "Usuario o contraseña incorrectos.";
      }
    });
    editorCancelBtn.addEventListener("click", closeEditorAuth);
    editorPassword.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        editorLoginBtn.click();
      }
    });
    addGiftLinkBtn.addEventListener("click", () => {
      INVITATION_CONFIG.gifts.links.push({
        label: "Nuevo botón",
        href: "#",
        style: "primary"
      });
      renderEditorGiftLinks();
      queueLiveEditorApply();
    });

    addGalleryImageBtn.addEventListener("click", () => {
      INVITATION_CONFIG.images.gallery.push(`nueva-imagen-${(INVITATION_CONFIG.images.gallery || []).length + 1}.jpg`);
      renderEditorGalleryList();
      queueLiveEditorApply();
    });

    addTimelineRowBtn.addEventListener("click", () => {
      INVITATION_CONFIG.timeline.items.push({
        time: "",
        title: "",
        desc: ""
      });
      renderEditorTimelineRows();
      queueLiveEditorApply();
    });

    editorGiftLinksList.addEventListener("click", (event) => {
      const button = event.target.closest("[data-remove-gift-link]");
      if (!button) return;
      const index = Number(button.dataset.removeGiftLink);
      INVITATION_CONFIG.gifts.links.splice(index, 1);
      renderEditorGiftLinks();
      queueLiveEditorApply();
    });

    editorGiftLinksList.addEventListener("input", (event) => {
      const card = event.target.closest(".editor-link-card");
      if (card) updateGiftLinkPreview(card);
    });

    editorGiftLinksList.addEventListener("change", (event) => {
      const card = event.target.closest(".editor-link-card");
      if (card) updateGiftLinkPreview(card);
    });

    editorTimelineList.addEventListener("click", (event) => {
      const button = event.target.closest("[data-remove-timeline-row]");
      if (!button) return;
      const index = Number(button.dataset.removeTimelineRow);
      INVITATION_CONFIG.timeline.items.splice(index, 1);
      renderEditorTimelineRows();
      queueLiveEditorApply();
    });

    editorGalleryList.addEventListener("click", (event) => {
      const button = event.target.closest("[data-remove-gallery-image]");
      if (!button) return;
      const index = Number(button.dataset.removeGalleryImage);
      INVITATION_CONFIG.images.gallery.splice(index, 1);
      renderEditorGalleryList();
      queueLiveEditorApply();
    });

    editorGalleryList.addEventListener("input", (event) => {
      const item = event.target.closest(".editor-builder-item");
      if (item) updateGalleryItemPreview(item);
    });

    editorPanel.querySelectorAll("[data-editor-jump]").forEach((button) => {
      button.addEventListener("click", () => {
        const target = document.getElementById(button.dataset.editorJump);
        if (!target || !editorContent) return;
        const offset = target.offsetTop - 8;
        editorContent.scrollTo({ top: offset, behavior: "smooth" });
        editorPanel.querySelectorAll("[data-editor-jump]").forEach((node) => node.classList.toggle("active", node === button));
      });
    });

    editorPanel.querySelectorAll("[data-editor-pill-group]").forEach((group) => {
      const hiddenInput = group.querySelector("input[type=\"hidden\"]");
      group.querySelectorAll("[data-pill-value]").forEach((button) => {
        button.addEventListener("click", () => {
          if (!hiddenInput) return;
          hiddenInput.value = button.dataset.pillValue || "";
          syncEditorPills();
          queueLiveEditorApply();
        });
      });
    });

    ["cfgBodyFont", "cfgScriptFont", "cfgDisplayFont"].forEach((id) => {
      const field = getEditorField(id);
      if (field) field.addEventListener("change", updateFontPreviews);
    });

    ["cfgEventLabel", "cfgCelebrantName"].forEach((id) => {
      const field = getEditorField(id);
      if (!field) return;
      field.addEventListener("input", () => {
        const label = (getEditorField("cfgEventLabel").value || "").trim();
        const name = (getEditorField("cfgCelebrantName").value || "").trim();
        if (editorEventSummary) editorEventSummary.textContent = [label, name].filter(Boolean).join(" | ") || "Invitación editable";
      });
    });

    getEditorField("cfgThemePreset").addEventListener("change", (event) => {
      if (event.target.value) applyThemePreset(event.target.value);
    });

    [
      ["cfgHeroImageSrc", "cfgHeroImageChip", DEFAULT_CONFIG.images.hero],
      ["cfgStoryImageSrc", "cfgStoryImageChip", DEFAULT_CONFIG.images.story],
      ["cfgDressImageSrc", "cfgDressImageChip", DEFAULT_CONFIG.images.dress],
      ["cfgEnvelopeImageSrc", "cfgEnvelopeImageChip", DEFAULT_CONFIG.images.envelope],
      ["cfgSurpriseImageSrc", "cfgSurpriseImageChip", DEFAULT_CONFIG.images.surprise]
    ].forEach(([inputId, chipId, fallback]) => {
      const field = getEditorField(inputId);
      if (!field) return;
      field.addEventListener("input", () => updateFileChip(inputId, chipId, fallback));
      field.addEventListener("change", () => updateFileChip(inputId, chipId, fallback));
    });

    editorPanel.addEventListener("input", (event) => {
      if (isHydratingEditor) return;
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      if (target.closest("#editorGiftLinksList") || target.closest("#editorGalleryList") || target.closest("#editorTimelineList")) {
        queueLiveEditorApply();
        return;
      }
      if (target.matches("input, textarea")) queueLiveEditorApply();
    });

    editorPanel.addEventListener("change", (event) => {
      if (isHydratingEditor) return;
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      if (target.matches("select, input[type=\"checkbox\"], input[type=\"number\"], input[type=\"datetime-local\"], input[type=\"color\"]")) {
        queueLiveEditorApply();
      }
    });

    if (editorContent) {
      editorContent.addEventListener("scroll", updateEditorNavState);
    }

    saveEditorConfigBtn.addEventListener("click", () => {
      readEditorPanel();
      saveConfigToStorage();
      applyInvitationConfig();
      showToast(validateStorageSnapshot(STORAGE_KEY) ? "Configuración guardada en este navegador." : "No se pudo validar el guardado local.");
    });

    saveEditorBaseBtn.addEventListener("click", () => {
      readEditorPanel();
      applyInvitationConfig();
      saveBaseConfigToStorage();
      saveConfigToStorage();
      showToast(validateStorageSnapshot(BASE_STORAGE_KEY) ? "Base guardada correctamente." : "No se pudo validar la base guardada.");
    });

    copyEditorConfigBtn.addEventListener("click", async () => {
      readEditorPanel();
      const configCode = buildConfigCodeBlock();
      try {
        await navigator.clipboard.writeText(configCode);
        showToast("Config copiada. Reemplaza el bloque INVITATION_CONFIG en el código.");
      } catch (error) {
        showToast("No se pudo copiar. Usa Exportar como respaldo.");
      }
    });

    exportEditorConfigBtn.addEventListener("click", () => {
      readEditorPanel();
      const blob = new Blob([JSON.stringify(INVITATION_CONFIG, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "digital-invita-config.json";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    });

    resetEditorConfigBtn.addEventListener("click", () => {
      replaceConfig(BASE_CONFIG || DEFAULT_CONFIG);
      saveConfigToStorage();
      applyInvitationConfig();
      fillEditorPanel();
      showToast("Se restableció la base guardada.");
    });

    document.addEventListener("keydown", (event) => {
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key.toLowerCase() === "e") {
        event.preventDefault();
        if (body.classList.contains("editor-open")) closeEditorPanel();
        else requestEditorAccess();
        return;
      }
      if (event.key === "Escape" && editorAuth.classList.contains("show")) {
        closeEditorAuth();
        return;
      }
      if (!lightbox.classList.contains("show")) return;
      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowRight") nextImage();
      if (event.key === "ArrowLeft") prevImage();
    });

    lightboxMain.addEventListener("dblclick", (event) => {
      event.preventDefault();
      if (zoomScale > 1.01) {
        resetImageZoom(true);
      } else {
        zoomScale = 2;
        zoomX = 0;
        zoomY = 0;
        applyImageZoom();
      }
    });

    lightboxMain.addEventListener("wheel", (event) => {
      event.preventDefault();
      const direction = event.deltaY < 0 ? 0.22 : -0.22;
      zoomScale = Math.max(1, Math.min(3, zoomScale + direction));
      if (zoomScale <= 1.02) {
        resetImageZoom();
      } else {
        applyImageZoom();
      }
    }, { passive: false });

    lightboxMain.addEventListener("touchstart", (event) => {
      if (event.touches.length === 2) {
        pinchStartDistance = getTouchDistance(event.touches);
        pinchStartScale = zoomScale;
        isPanningImage = false;
        return;
      }

      if (event.touches.length === 1) {
        const now = Date.now();
        if (now - lastTapTime < 280) {
          event.preventDefault();
          if (zoomScale > 1.01) resetImageZoom(true);
          else {
            zoomScale = 2;
            zoomX = 0;
            zoomY = 0;
            applyImageZoom();
          }
        }
        lastTapTime = now;

        if (zoomScale > 1.01) {
          isPanningImage = true;
          lightboxMain.classList.add("is-panning");
          dragOriginX = event.touches[0].clientX - zoomX;
          dragOriginY = event.touches[0].clientY - zoomY;
        } else {
          panStartX = event.touches[0].clientX;
          panStartY = event.touches[0].clientY;
        }
      }
    }, { passive: false });

    lightboxMain.addEventListener("touchmove", (event) => {
      if (event.touches.length === 2) {
        event.preventDefault();
        const distance = getTouchDistance(event.touches);
        zoomScale = Math.max(1, Math.min(3, pinchStartScale * (distance / Math.max(pinchStartDistance, 1))));
        if (zoomScale <= 1.02) {
          zoomScale = 1;
          zoomX = 0;
          zoomY = 0;
        }
        applyImageZoom();
        return;
      }

      if (event.touches.length === 1 && zoomScale > 1.01 && isPanningImage) {
        event.preventDefault();
        zoomX = event.touches[0].clientX - dragOriginX;
        zoomY = event.touches[0].clientY - dragOriginY;
        applyImageZoom();
      }
    }, { passive: false });

    lightboxMain.addEventListener("touchend", (event) => {
      lightboxMain.classList.remove("is-panning");
      isPanningImage = false;

      if (zoomScale > 1.01) return;

      if (event.changedTouches.length === 1) {
        const diffX = panStartX - event.changedTouches[0].clientX;
        const diffY = panStartY - event.changedTouches[0].clientY;
        if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY)) {
          if (diffX > 0) nextImage();
          else prevImage();
        }
      }
    });

    confirmYes.addEventListener("click", () => sendConfirmation(true));
    confirmNo.addEventListener("click", () => sendConfirmation(false));
    calendarBtn.addEventListener("click", addToCalendar);
    verCuenta.addEventListener("click", (event) => {
      event.preventDefault();
      document.getElementById("countdown-section").scrollIntoView({ behavior: "smooth", block: "center" });
    });

    let scrollTicking = false;
    let mobileScrollTimer = 0;

    function handleScrollFrame() {
      revealOnScroll();
      updateFloatingButtons();
      if (!IS_MOBILE_DEVICE) applyHeroParallax();
      scrollTicking = false;
    }

    updateCountdown();
    revealOnScroll();
    updateFloatingButtons();
    const cleanupParticles = initParticles();
    initLightProtection();
    if (!IS_MOBILE_DEVICE) applyHeroParallax();
    updateOverlayScale();
    fillEditorPanel();

    const countdownTimer = window.setInterval(updateCountdown, 1000);
    window.addEventListener("resize", updateOverlayScale, { passive: true });
    window.addEventListener("scroll", () => {
      if (scrollTicking) return;
      scrollTicking = true;
      if (IS_MOBILE_DEVICE) {
        clearTimeout(mobileScrollTimer);
        mobileScrollTimer = setTimeout(handleScrollFrame, 34);
      } else {
        requestAnimationFrame(handleScrollFrame);
      }
    }, { passive: true });

    window.addEventListener("pagehide", () => {
      window.clearInterval(countdownTimer);
      clearTimeout(mobileScrollTimer);
      if (typeof cleanupParticles === "function") cleanupParticles();
    }, { once: true });
})();
