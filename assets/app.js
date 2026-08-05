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
    "pageTitle": "Mis XV | Sofia Montes",
    "ogTitle": "",
    "ogDescription": "Acompáñanos a celebrar este día tan especial",
    "publicUrl": ""
  },
  "event": {
    "template": "xv",
    "label": "Mis XV",
    "celebrantName": "Sofia Montes",
    "person1Name": "",
    "person2Name": "",
    "eventDate": "2027-03-11T15:33",
    "eventEnd": "2027-03-11T23:11",
    "timeZone": "America/Mexico_City",
    "eventLocation": "Top Salón Obispado",
    "rsvpPhone": "5550591264"
  },
  "theme": {
    "bgTop": "#ffc2d4",
    "bgMid": "#f7c5d3",
    "bgBottom": "#ffe0ea",
    "gold500": "#b85d7a",
    "sectionTitle": "#8f3154",
    "scriptColor": "#a14463",
    "timelineColor": "#b85d7a",
    "timelineTimeColor": "#964063",
    "timelineTitleColor": "#8d3254",
    "timelineDescColor": "#964063",
    "timelineFont": "Cormorant Garamond",
    "locationTitleColor": "#8e3154",
    "locationTimeColor": "#964063",
    "locationPlaceColor": "#964063",
    "particleColor": "#ff0000",
    "buttonBg": "#8f3154",
    "buttonText": "#ffffff",
    "fieldLabel": "#7e2d4d",
    "fieldText": "#3d2332",
    "closingColor": "#8f3154",
    "openingKicker": "#ffffff",
    "openingTitle": "#ffffff",
    "openingAccent": "#ffffff",
    "text": "#382536",
    "muted": "#6e5264",
    "sectionOpacity": 20,
    "openingOpacity": 50,
    "particlesEnabled": true,
    "backgroundImage": "media/ffi.png",
    "backgroundImageOpacity": 34,
    "backgroundImagePositionX": 15,
    "styleMode": "classic",
    "bodyFont": "Cormorant Garamond",
    "scriptFont": "Tangerine",
    "displayFont": "Tangerine"
  },
  "images": {
    "hero": "media/fprincipal.jpg",
    "heroType": "image",
    "og": "media/portada-og.jpg",
    "story": "media/fhistoria.jpg",
    "seal": "media/sello_cera.png",
    "dress": "media/v2.png",
    "envelope": "media/s.png",
    "surprise": "media/r.png",
    "gallery": [
      "media/g1.jpg",
      "media/g2.jpg",
      "media/g3.jpg",
      "media/g4.jpg",
      "media/g5.jpg",
      "media/g6.jpg"
    ],
    "galleryMediaTypes": [
      "image",
      "image",
      "image",
      "image",
      "image",
      "image"
    ]
  },
  "audio": {
    "src": "cancio.mp3"
  },
  "story": {
    "title": "Mi historia",
    "paragraph1": "Hoy celebro no solo mis 15 años, sino cada sonrisa que iluminó mi camino, cada aprendizaje que fortaleció mi corazón y cada sueño que, con amor y esperanza, me ha traído hasta este momento tan especial de mi vida.",
    "paragraph2": "Aquí termina un capítulo lleno de recuerdos que atesoraré por siempre y comienza uno nuevo, donde la ilusión, la luz y los sueños por cumplir marcan el inicio de todo lo que está por venir.",
    "showImage": true
  },
  "family": {
    "parentsEyebrow": "En compañía de mis padres",
    "parentsNamesHtml": "Adriana López Hernández<br>&amp;<br>Javier Montes Ramírez",
    "parentsGroups": [],
    "parentsInviteText": "Tenemos el honor de invitarles a celebrar mis XV años.",
    "godparentsEyebrow": "Mis padrinos",
    "godparentsNamesHtml": "Gabriela Ruiz Mendoza<br>&amp;<br>Alejandro Hernández García",
    "godparentsItems": []
  },
  "ceremony": {
    "title": "Ceremonia",
    "time": "15:30 hrs",
    "place": "Parroquia del Sagrado Corazón de Jesús",
    "mediaMode": "preview",
    "iconSrc": "media/cereminia.png",
    "mapEmbed": "https://www.google.com/maps/embed?pb=!3m2!1ses-419!2smx!4v1784406042559!5m2!1ses-419!2smx!6m8!1m7!1sW1KCTr9gtixxUy_1R9Ew2w!2m2!1d25.57659913575704!2d-103.5004368052986!3f202.70293243660157!4f15.440215328659107!5f1.7540701999762476",
    "photoSrc": "",
    "mapLink": "https://maps.app.goo.gl/zTPBsYBQpmymGXzX6"
  },
  "reception": {
    "title": "Recepción",
    "time": "17:00 hrs",
    "place": "Centro de Convenciones Posada del Río",
    "mediaMode": "preview",
    "iconSrc": "media/recepcion.png",
    "mapLink": "https://maps.app.goo.gl/DwvQGpkTec4dTeVr8",
    "mapEmbed": "https://www.google.com/maps/embed?pb=!3m2!1ses-419!2smx!4v1784406356581!5m2!1ses-419!2smx!6m8!1m7!1sSGFER0nSRDCKnO10adm2DA!2m2!1d25.55719968234142!2d-103.4943993146966!3f68.19951991550872!4f17.272107396622715!5f0.4000000000000002",
    "photoSrc": ""
  },
  "timeline": {
    "items": [
      {
        "time": "15:30 hrs",
        "title": "Ceremonia",
        "desc": "Parroquia del Sagrado Corazón de Jesús."
      },
      {
        "time": "17:00 hrs",
        "title": "Recepción",
        "desc": "Centro de Convenciones Posada del Río."
      },
      {
        "time": "18:00 hrs",
        "title": "Comida",
        "desc": "Un momento para brindar y compartir."
      },
      {
        "time": "20:00 hrs",
        "title": "Vals",
        "desc": "Presentación de Sofia."
      }
    ]
  },
  "countdown": {
    "title": "Faltan pocos días",
    "intro": "Cada día nos acerca a la celebración de una meta alcanzada.",
    "style": "classic"
  },
  "dressCode": {
    "title": "Dress Code",
    "value": "Formal",
    "note": "Rosa reservado para la quinceañera."
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
        "style": "primary",
        "image": "",
        "showImage": false
      },
      {
        "label": "Celebra Palacio",
        "href": "https://www.elpalaciodehierro.com/sucursales/palacio-mitikah.html",
        "style": "secondary",
        "image": "",
        "showImage": false
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
    "showGuestCount": true,
    "maxGuests": 6,
    "confirmMessage": " Confirmación de asistencia \n\nCon mucha alegría confirmo mi presencia para celebrar {celebracion}.\n\nNombre: {nombre}\n{pases}\n\nSerá un honor acompañarte en este día tan especial.",
    "declineMessage": " {evento} \n\nHola, mi nombre es {nombre}.\n\nCon mucho cariño quiero decir que en esta ocasión no podré acompañarte,\npero te deseo un día maravilloso y lleno de felicidad."
  },
  "sections": {
    "story": true,
    "parents": true,
    "godparents": true,
    "ceremony": true,
    "reception": true,
    "timeline": true,
    "countdown": true,
    "gallery": true,
    "dress": true,
    "rsvp": true,
    "gifts": true,
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
    "note": "Gracias por ser parte de este momento inolvidable"
  },
  "brand": {
    "creditText": "Creado por Digital Invita",
    "creditHref": "https://www.facebook.com/profile.php?id=61587804296779&locale=es_LA",
    "ctaLabel": "Contáctanos",
    "ctaHref": "https://wa.me/525550591264?text=Hola%21%20Quiero%20una%20invitaci%C3%B3n%20digital%20con%20estilo%20elegante%20y%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n."
  }
}
      ;

    const DEFAULT_CONFIRM_MESSAGE = [
      " Confirmación de asistencia ",
      "",
      "Con mucha alegría confirmo mi presencia para celebrar {celebracion}.",
      "",
      "Nombre: {nombre}",
      "{pases}",
      "",
      "Será un honor acompañarte en este día tan especial."
    ].join("\n");
    const DEFAULT_DECLINE_MESSAGE = [
      " {evento} ",
      "",
      "Hola, mi nombre es {nombre}.",
      "",
      "Con mucho cariño quiero decir que en esta ocasión no podré acompañarte,",
      "pero te deseo un día maravilloso y lleno de felicidad."
    ].join("\n");

    let EVENT_DATE = new Date(INVITATION_CONFIG.event.eventDate);
    let EVENT_END = new Date(INVITATION_CONFIG.event.eventEnd);
    let EVENT_LOCATION = INVITATION_CONFIG.event.eventLocation;
    let RSVP_PHONE = INVITATION_CONFIG.event.rsvpPhone;
    let scrollLockY = 0;

    const body = document.body;
    const overlay = document.getElementById("overlay");
    const openBtn = document.getElementById("openBtn");
    const audio = document.getElementById("audio");
    const audioSource = audio?.querySelector("source");
    const musicBtn = document.getElementById("musicBtn");
    const toTopBtn = document.getElementById("toTopBtn");
    const warpFlash = document.getElementById("warpFlash");
    const missionAccepted = document.getElementById("missionAccepted");
    const brandFooter = document.querySelector(".brand-footer");
    const heroName = document.getElementById("nombre");
    const heroLabel = document.querySelector(".hero-label");
    const fechaEvento = document.getElementById("fechaEvento");
    const countdownEl = document.getElementById("countdown");
    const countdownCaption = document.getElementById("countdownCaption");
    const sections = document.querySelectorAll(".section");
    const storySection = document.getElementById("storySection");
    const storyParagraphs = Array.from(document.querySelectorAll(".story-text"));
    let galleryItems = [];
    const galleryPreviewImg = document.getElementById("galleryPreviewImg");
    const galleryPreviewVideo = document.getElementById("galleryPreviewVideo");
    const galleryMetaIndex = document.getElementById("galleryMetaIndex");
    const galleryMetaHint = document.getElementById("galleryMetaHint");
    const galleryPrev = document.getElementById("galleryPrev");
    const galleryNext = document.getElementById("galleryNext");
    const galleryStage = document.getElementById("galleryStage");
    const galleryShowcase = document.querySelector(".gallery-showcase");
    const galleryGrid = document.getElementById("galleryGrid");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxVideo = document.getElementById("lightboxVideo");
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
    const overlayScene = document.getElementById("overlayScene");
    const smartBackground = document.getElementById("smartBackground");
    const smartBackgroundImage = document.getElementById("smartBackgroundImage");
    const bodyFontPreview = document.getElementById("bodyFontPreview");
    const scriptFontPreview = document.getElementById("scriptFontPreview");
    const displayFontPreview = document.getElementById("displayFontPreview");
    const sealImage = document.getElementById("sealImage");
    const waxCaption = document.querySelector(".wax-caption");
    const heroImage = document.getElementById("heroImage");
    const heroVideo = document.getElementById("heroVideo");
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
    let smartBackgroundNatural = { width: 0, height: 0 };

    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const PUBLIC_CONFIG_KEY = "digital_invita_public_config_v1";
    const PREVIEW_SKIP_OPENING_KEY = "digital_invita_preview_skip_opening_v1";
    const PREVIEW_SCROLL_KEY = "digital_invita_preview_scroll_y_v1";
    const IS_MOBILE_DEVICE = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const IS_LOW_POWER_DEVICE = IS_MOBILE_DEVICE
      && ((navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 6)
      || (navigator.deviceMemory && navigator.deviceMemory <= 6));

    if (IS_LOW_POWER_DEVICE) {
      body.classList.add("low-power");
    }
    if (window.self !== window.top) {
      document.documentElement.classList.add("preview-embed");
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

    function setOptionalImage(node, value) {
      if (!node) return;
      if (value) {
        node.src = value;
        node.closest(".gift-figure, .dresscode-figure, .featured-photo")?.removeAttribute("hidden");
      } else {
        node.removeAttribute("src");
        node.closest(".gift-figure, .dresscode-figure, .featured-photo")?.setAttribute("hidden", "");
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
        const raw = readStorageItem(PUBLIC_CONFIG_KEY);
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

    function normalizeMediaSource(value, fallback = "") {
      const source = String(value || "").trim() || String(fallback || "").trim();
      if (!source) return "";
      if (/^(https?:|blob:|data:)/i.test(source)) return source;

      const normalized = source.replace(/^\/+/, "").replace(/\\/g, "/");
      if (normalized.startsWith("media/") || normalized.startsWith("assets/")) return normalized;

      const cleaned = normalized.split("/").pop().trim();
      if (!cleaned) return "";
      if (/\.[a-z0-9]{2,5}$/i.test(cleaned)) return `media/${cleaned}`;

      const fallbackMatch = String(fallback || "").trim().match(/\.([a-z0-9]{2,5})$/i);
      const fallbackExt = fallbackMatch ? `.${fallbackMatch[1]}` : ".jpg";
      return `media/${cleaned}${fallbackExt}`;
    }

    function normalizeAudioSource(value, fallback = "cancio.mp3") {
      const source = String(value || "").trim() || String(fallback || "").trim();
      if (!source) return "";
      if (/^(https?:|blob:|data:)/i.test(source)) return source;
      const normalized = source.replace(/^\/+/, "").replace(/\\/g, "/");
      if (normalized === "cancio.mp3" || normalized.startsWith("media/") || normalized.startsWith("assets/")) return normalized;
      const cleaned = normalized.split("/").pop().trim();
      return cleaned ? `media/${cleaned}` : "";
    }

    function mediaTypeFromSource(value, fallback = "image") {
      const hint = String(fallback || "").toLowerCase();
      if (hint === "video" || hint === "image") return hint;
      const source = String(value || "").trim();
      if (/^data:video\//i.test(source)) return "video";
      if (/^data:image\//i.test(source)) return "image";
      return /\.(mp4|m4v|mov|webm|ogv)$/i.test(source.split(/[?#]/)[0]) ? "video" : "image";
    }

    function mediaLabel(type) {
      return type === "video" ? "Video" : "Foto";
    }

    function cssMediaUrl(value) {
      const source = String(value || "").trim();
      if (/^(https?:|blob:|data:)/i.test(source)) return `url("${source}")`;
      return `url("../${source}")`;
    }

    function cleanPublicUrl(value) {
      const source = String(value || "").trim();
      return /^https?:\/\//i.test(source) ? source : "";
    }

    function makeAbsoluteUrl(baseUrl, path) {
      const source = String(path || "").trim();
      if (!source || /^(https?:|data:|blob:)/i.test(source)) return source;
      const base = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
      return new URL(source.replace(/^\/+/, ""), base).href;
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

    function normalizeCountdownStyle(value) {
      return ["classic", "pulse", "crystal", "editorial"].includes(value) ? value : "classic";
    }

    function sanitizeImageConfig() {
      if (INVITATION_CONFIG.images.hero === "media/FPrincipal_buzz.jpg") INVITATION_CONFIG.images.hero = "media/FPrincipal.jpg";
      if (INVITATION_CONFIG.images.seal === "media/sello_cera_buzz.png") INVITATION_CONFIG.images.seal = "media/sello_cera.png";
      if (INVITATION_CONFIG.images.envelope === "media/sobre_buzz.svg") INVITATION_CONFIG.images.envelope = "";
      if (INVITATION_CONFIG.images.surprise === "media/regalo_buzz.svg") INVITATION_CONFIG.images.surprise = "";
      INVITATION_CONFIG.images.gallery = (INVITATION_CONFIG.images.gallery || []).filter((item) => ![
        "media/FPrincipal_buzz.jpg",
        "media/sobre_buzz.svg",
        "media/regalo_buzz.svg"
      ].includes(item));
      INVITATION_CONFIG.images.hero = normalizeMediaSource(INVITATION_CONFIG.images.hero, DEFAULT_CONFIG.images.hero);
      INVITATION_CONFIG.images.heroType = mediaTypeFromSource(INVITATION_CONFIG.images.hero, INVITATION_CONFIG.images.heroType);
      INVITATION_CONFIG.images.og = normalizeMediaSource(INVITATION_CONFIG.images.og, "");
      INVITATION_CONFIG.images.story = INVITATION_CONFIG.story?.showImage === false
        ? normalizeMediaSource(INVITATION_CONFIG.images.story, "")
        : normalizeMediaSource(INVITATION_CONFIG.images.story, DEFAULT_CONFIG.images.story);
      INVITATION_CONFIG.images.seal = normalizeMediaSource(INVITATION_CONFIG.images.seal, "media/sello_cera.png");
      INVITATION_CONFIG.images.dress = normalizeMediaSource(INVITATION_CONFIG.images.dress, DEFAULT_CONFIG.images.dress);
      INVITATION_CONFIG.images.envelope = normalizeMediaSource(INVITATION_CONFIG.images.envelope, "");
      INVITATION_CONFIG.images.surprise = normalizeMediaSource(INVITATION_CONFIG.images.surprise, "");
      INVITATION_CONFIG.images.gallery = (INVITATION_CONFIG.images.gallery || [])
        .map((item, index) => normalizeMediaSource(item, DEFAULT_CONFIG.images.gallery[index] || "foto.jpg"))
        .filter(Boolean);
      const galleryTypes = Array.isArray(INVITATION_CONFIG.images.galleryMediaTypes)
        ? INVITATION_CONFIG.images.galleryMediaTypes
        : [];
      INVITATION_CONFIG.images.galleryMediaTypes = INVITATION_CONFIG.images.gallery
        .map((item, index) => mediaTypeFromSource(item, galleryTypes[index]));
    }

    function sanitizeLocationConfig(locationConfig, fallbackMode = "icon") {
      if (!locationConfig) return;
      locationConfig.mediaMode = normalizeMediaMode(locationConfig.mediaMode, fallbackMode);
      locationConfig.iconSrc = normalizeMediaSource(locationConfig.iconSrc, "");
      locationConfig.photoSrc = normalizeMediaSource(locationConfig.photoSrc, "");
      locationConfig.mapEmbed = extractMapEmbedUrl(locationConfig.mapEmbed);
      locationConfig.mapLink = String(locationConfig.mapLink || "").trim();
    }

    function sanitizeInvitationConfig() {
      sanitizeImageConfig();
      INVITATION_CONFIG.audio = INVITATION_CONFIG.audio || {};
      INVITATION_CONFIG.audio.src = normalizeAudioSource(INVITATION_CONFIG.audio.src, DEFAULT_CONFIG.audio?.src || "cancio.mp3");
      sanitizeLocationConfig(INVITATION_CONFIG.ceremony, "icon");
      sanitizeLocationConfig(INVITATION_CONFIG.reception, "icon");
      INVITATION_CONFIG.theme.particlesEnabled = INVITATION_CONFIG.theme.particlesEnabled !== false;
      INVITATION_CONFIG.theme.backgroundImage = normalizeMediaSource(INVITATION_CONFIG.theme.backgroundImage, "");
      INVITATION_CONFIG.theme.backgroundImageOpacity = clampPercent(INVITATION_CONFIG.theme.backgroundImageOpacity, 55);
      INVITATION_CONFIG.theme.backgroundImagePositionX = clampPercent(INVITATION_CONFIG.theme.backgroundImagePositionX, 50);
      INVITATION_CONFIG.theme.styleMode = INVITATION_CONFIG.theme.styleMode === "space-ranger" ? "space-ranger" : "classic";
      INVITATION_CONFIG.rsvp = {
        showGuestCount: INVITATION_CONFIG.rsvp?.showGuestCount !== false,
        maxGuests: Math.max(1, Number(INVITATION_CONFIG.rsvp?.maxGuests) || 1),
        confirmMessage: INVITATION_CONFIG.rsvp?.confirmMessage || DEFAULT_CONFIRM_MESSAGE,
        declineMessage: INVITATION_CONFIG.rsvp?.declineMessage || DEFAULT_DECLINE_MESSAGE
      };
      INVITATION_CONFIG.gifts.links = (INVITATION_CONFIG.gifts.links || []).map((link) => ({
        ...link,
        image: normalizeMediaSource(link.image, ""),
        showImage: Boolean(link.showImage && link.image)
      }));
      INVITATION_CONFIG.gifts.showOption1 = INVITATION_CONFIG.gifts.showOption1 !== false;
      INVITATION_CONFIG.gifts.showOption2 = INVITATION_CONFIG.gifts.showOption2 !== false;
      INVITATION_CONFIG.gifts.showLinks = INVITATION_CONFIG.gifts.showLinks !== false;
      INVITATION_CONFIG.countdown = {
        title: INVITATION_CONFIG.countdown?.title || DEFAULT_CONFIG.countdown?.title || "Faltan pocos días",
        intro: INVITATION_CONFIG.countdown?.intro || DEFAULT_CONFIG.countdown?.intro || "",
        style: normalizeCountdownStyle(INVITATION_CONFIG.countdown?.style)
      };
      INVITATION_CONFIG.family = INVITATION_CONFIG.family || {};
      INVITATION_CONFIG.family.parentsGroups = Array.isArray(INVITATION_CONFIG.family.parentsGroups)
        ? INVITATION_CONFIG.family.parentsGroups.filter((group) => group?.label || group?.namesHtml)
        : [];
      INVITATION_CONFIG.family.godparentsItems = Array.isArray(INVITATION_CONFIG.family.godparentsItems)
        ? INVITATION_CONFIG.family.godparentsItems.filter((item) => item?.role || item?.namesHtml)
        : [];
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

      if (INVITATION_CONFIG.event.template === "wedding" || normalized.includes("boda") || normalized.includes("matrimonio")) {
        return {
          pageTitle: [label || "Nuestra Boda", name].filter(Boolean).join(" | "),
          celebrationText: name ? `la boda de ${name}` : "nuestra boda",
          eventHeader: name ? `Boda de ${name}` : (label || "Nuestra Boda"),
          calendarTitle: name ? `Boda de ${name}` : (label || "Nuestra Boda"),
          calendarDetails: name
            ? `Acompáñanos a celebrar la boda de ${name}.`
            : "Acompáñanos a celebrar nuestra boda."
        };
      }

      if (INVITATION_CONFIG.event.template === "kids" || normalized.includes("misión") || normalized.includes("mision") || normalized.includes("cumple") || normalized.includes("añito")) {
        return {
          pageTitle: [label || "Misión de cumpleaños", name].filter(Boolean).join(" | "),
          celebrationText: name ? `la misión de cumpleaños de ${name}` : "esta misión de cumpleaños",
          eventHeader: name ? `Misión de ${name}` : (label || "Misión de cumpleaños"),
          calendarTitle: name ? `Cumpleaños de ${name}` : (label || "Misión de cumpleaños"),
          calendarDetails: name
            ? `Acompáñanos a celebrar la misión de cumpleaños de ${name}.`
            : "Acompáñanos a celebrar esta misión de cumpleaños."
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
      label = String(label || "").split(" - ")[0].trim();
      const knownFonts = new Set([
        "Alex Brush",
        "Allura",
        "Bodoni Moda",
        "Cinzel",
        "Cormorant Garamond",
        "Cormorant Infant",
        "Dancing Script",
        "EB Garamond",
        "Forum",
        "GFS Didot",
        "Great Vibes",
        "Imperial Script",
        "Italianno",
        "Libre Baskerville",
        "Lora",
        "Marcellus",
        "Montserrat",
        "Mrs Saint Delafield",
        "Nanum Myeongjo",
        "Orbitron",
        "Parisienne",
        "Petit Formal Script",
        "Pinyon Script",
        "Playfair Display",
        "Poppins",
        "Prata",
        "Sacramento",
        "Tangerine"
      ]);
      if (label === "Georgia") return "Georgia, serif";
      if (label === "Times New Roman") return "\"Times New Roman\", serif";
      if (knownFonts.has(label)) {
        const fallbackFamily = ["Montserrat", "Poppins", "Orbitron"].includes(label) ? "sans-serif" : "serif";
        return `"${label}", ${fallbackFamily}`;
      }
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

    function clampPercent(value, fallback = 100) {
      const number = Number(value);
      if (!Number.isFinite(number)) return fallback;
      return Math.max(0, Math.min(100, Math.round(number)));
    }

    function applyThemeColors() {
      const bgTop = normalizeHexColor(INVITATION_CONFIG.theme.bgTop, DEFAULT_CONFIG.theme.bgTop);
      const bgMid = normalizeHexColor(INVITATION_CONFIG.theme.bgMid, DEFAULT_CONFIG.theme.bgMid);
      const bgBottom = normalizeHexColor(INVITATION_CONFIG.theme.bgBottom, DEFAULT_CONFIG.theme.bgBottom);
      const gold = normalizeHexColor(INVITATION_CONFIG.theme.gold500, DEFAULT_CONFIG.theme.gold500);
      const gold100 = mixColors(gold, "#ffffff", 0.72);
      const gold300 = mixColors(gold, "#ffffff", 0.34);
      const gold700 = mixColors(gold, "#000000", 0.36);
      const sectionTitle = normalizeHexColor(INVITATION_CONFIG.theme.sectionTitle || gold100, gold100);
      const scriptColor = normalizeHexColor(INVITATION_CONFIG.theme.scriptColor || sectionTitle, sectionTitle);
      const timelineColor = normalizeHexColor(INVITATION_CONFIG.theme.timelineColor || gold, gold);
      const text = normalizeHexColor(INVITATION_CONFIG.theme.text, DEFAULT_CONFIG.theme.text);
      const muted = normalizeHexColor(INVITATION_CONFIG.theme.muted, DEFAULT_CONFIG.theme.muted || text);
      const timelineTimeColor = normalizeHexColor(INVITATION_CONFIG.theme.timelineTimeColor || sectionTitle, sectionTitle);
      const timelineTitleColor = normalizeHexColor(INVITATION_CONFIG.theme.timelineTitleColor || text, text);
      const timelineDescColor = normalizeHexColor(INVITATION_CONFIG.theme.timelineDescColor || muted, muted);
      const timelineFont = INVITATION_CONFIG.theme.timelineFont || INVITATION_CONFIG.theme.bodyFont || DEFAULT_CONFIG.theme.bodyFont;
      const locationTitleColor = normalizeHexColor(INVITATION_CONFIG.theme.locationTitleColor || sectionTitle, sectionTitle);
      const locationTimeColor = normalizeHexColor(INVITATION_CONFIG.theme.locationTimeColor || sectionTitle, sectionTitle);
      const locationPlaceColor = normalizeHexColor(INVITATION_CONFIG.theme.locationPlaceColor || text, text);
      const particleColor = normalizeHexColor(INVITATION_CONFIG.theme.particleColor || gold100, gold100);
      const buttonBg = normalizeHexColor(INVITATION_CONFIG.theme.buttonBg || gold, gold);
      const buttonText = normalizeHexColor(INVITATION_CONFIG.theme.buttonText || "#ffffff", "#ffffff");
      const fieldLabel = normalizeHexColor(INVITATION_CONFIG.theme.fieldLabel || sectionTitle, sectionTitle);
      const fieldText = normalizeHexColor(INVITATION_CONFIG.theme.fieldText || text, text);
      const closingColor = normalizeHexColor(INVITATION_CONFIG.theme.closingColor || sectionTitle, sectionTitle);
      const openingKicker = normalizeHexColor(INVITATION_CONFIG.theme.openingKicker || sectionTitle, sectionTitle);
      const openingTitle = normalizeHexColor(INVITATION_CONFIG.theme.openingTitle || scriptColor, scriptColor);
      const openingAccent = normalizeHexColor(INVITATION_CONFIG.theme.openingAccent || gold, gold);
      const openingTitleSoft = mixColors(openingTitle, "#ffffff", 0.34);
      const sectionOpacity = clampPercent(INVITATION_CONFIG.theme.sectionOpacity, 100);
      const openingOpacity = clampPercent(INVITATION_CONFIG.theme.openingOpacity, 100);
      const particlesEnabled = INVITATION_CONFIG.theme.particlesEnabled !== false;
      const backgroundImage = normalizeMediaSource(INVITATION_CONFIG.theme.backgroundImage, "");
      const backgroundImageOpacity = clampPercent(INVITATION_CONFIG.theme.backgroundImageOpacity, 55);
      const backgroundImagePositionX = clampPercent(INVITATION_CONFIG.theme.backgroundImagePositionX, 50);
      const styleMode = INVITATION_CONFIG.theme.styleMode === "space-ranger" ? "space-ranger" : "classic";
      const sectionRatio = sectionOpacity / 100;
      const openingRatio = openingOpacity / 100;

      Object.assign(INVITATION_CONFIG.theme, {
        bgTop,
        bgMid,
        bgBottom,
        gold500: gold,
        sectionTitle,
        scriptColor,
        timelineColor,
        timelineTimeColor,
        timelineTitleColor,
        timelineDescColor,
        timelineFont,
        locationTitleColor,
        locationTimeColor,
        locationPlaceColor,
        particleColor,
        buttonBg,
        buttonText,
        fieldLabel,
        fieldText,
        closingColor,
        openingKicker,
        openingTitle,
        openingAccent,
        openingTitleSoft,
        text,
        muted,
        sectionOpacity,
        openingOpacity,
        particlesEnabled,
        backgroundImage,
        backgroundImageOpacity,
        backgroundImagePositionX,
        styleMode
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
      setRootVar("--section-title", sectionTitle);
      setRootVar("--section-title-rgb", rgbList(sectionTitle));
      setRootVar("--script-color", scriptColor);
      setRootVar("--script-rgb", rgbList(scriptColor));
      setRootVar("--timeline-color", timelineColor);
      setRootVar("--timeline-rgb", rgbList(timelineColor));
      setRootVar("--timeline-time-color", timelineTimeColor);
      setRootVar("--timeline-title-color", timelineTitleColor);
      setRootVar("--timeline-desc-color", timelineDescColor);
      setRootVar("--timeline-font", cssFontValue(timelineFont, "\"Cormorant Garamond\", serif"));
      setRootVar("--location-title-color", locationTitleColor);
      setRootVar("--location-time-color", locationTimeColor);
      setRootVar("--location-place-color", locationPlaceColor);
      setRootVar("--particle-color", particleColor);
      setRootVar("--particle-rgb", rgbList(particleColor));
      setRootVar("--button-bg", buttonBg);
      setRootVar("--button-bg-rgb", rgbList(buttonBg));
      setRootVar("--button-text", buttonText);
      setRootVar("--field-label", fieldLabel);
      setRootVar("--field-text", fieldText);
      setRootVar("--closing-color", closingColor);
      setRootVar("--opening-kicker", openingKicker);
      setRootVar("--opening-title", openingTitle);
      setRootVar("--opening-title-soft", openingTitleSoft);
      setRootVar("--opening-title-rgb", rgbList(openingTitle));
      setRootVar("--opening-accent", openingAccent);
      setRootVar("--opening-accent-rgb", rgbList(openingAccent));
      setRootVar("--line", rgbaColor(gold, 0.28));
      setRootVar("--text", text);
      setRootVar("--muted", muted);
      setRootVar("--section-fill-top", `rgba(255, 255, 255, ${(0.09 * sectionRatio).toFixed(3)})`);
      setRootVar("--section-fill-bottom", `rgba(255, 255, 255, ${(0.05 * sectionRatio).toFixed(3)})`);
      setRootVar("--space-section-fill-bottom", `rgba(8, 20, 47, ${(0.42 * sectionRatio).toFixed(3)})`);
      setRootVar("--space-section-accent-a", (0.08 * sectionRatio).toFixed(3));
      setRootVar("--space-section-particle-a", (0.06 * sectionRatio).toFixed(3));
      setRootVar("--section-blur", `${(18 * sectionRatio).toFixed(1)}px`);
      setRootVar("--smart-bg-opacity", (backgroundImageOpacity / 100).toFixed(3));
      setRootVar("--opening-bg-a", (0.82 * openingRatio).toFixed(3));
      setRootVar("--opening-bg-strong-a", (0.9 * openingRatio).toFixed(3));
      setRootVar("--opening-photo-a", (0.2 * openingRatio).toFixed(3));
      setRootVar("--opening-glass-top-a", (0.065 * openingRatio).toFixed(3));
      setRootVar("--opening-glass-mid-a", (0.018 * openingRatio).toFixed(3));
      setRootVar("--opening-glass-bottom-a", (0.04 * openingRatio).toFixed(3));
      setRootVar("--overlay-glass-blur", `${(14 * openingRatio).toFixed(1)}px`);
      document.documentElement.classList.toggle("particles-disabled", !particlesEnabled);
      document.documentElement.classList.toggle("theme-space-ranger", styleMode === "space-ranger");
    }

    function getDocumentHeight() {
      return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        window.innerHeight
      );
    }

    function updateSmartBackgroundLayout() {
      if (!smartBackground || !smartBackgroundImage || !smartBackground.classList.contains("is-active")) return;
      const naturalWidth = smartBackgroundNatural.width || smartBackgroundImage.naturalWidth;
      const naturalHeight = smartBackgroundNatural.height || smartBackgroundImage.naturalHeight;
      if (!naturalWidth || !naturalHeight) return;

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const documentHeight = getDocumentHeight();
      const scale = Math.max(viewportWidth / naturalWidth, viewportHeight / naturalHeight);
      const renderedWidth = Math.ceil(naturalWidth * scale);
      const renderedHeight = Math.ceil(naturalHeight * scale);
      const extraX = Math.max(0, renderedWidth - viewportWidth);
      const extraY = Math.max(0, renderedHeight - viewportHeight);
      const scrollablePage = Math.max(1, documentHeight - viewportHeight);
      const scrollProgress = Math.max(0, Math.min(1, window.scrollY / scrollablePage));
      const positionX = clampPercent(INVITATION_CONFIG.theme.backgroundImagePositionX, 50) / 100;
      const x = -extraX * positionX;
      const y = extraY > 1 ? -extraY * scrollProgress : 0;

      smartBackgroundImage.style.width = `${renderedWidth}px`;
      smartBackgroundImage.style.height = `${renderedHeight}px`;
      smartBackgroundImage.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      setRootVar("--smart-bg-y", `${y}px`);
    }

    function applySmartBackground() {
      if (!smartBackground || !smartBackgroundImage) return;
      const source = INVITATION_CONFIG.theme.backgroundImage;
      const active = Boolean(source);
      smartBackground.classList.toggle("is-active", active);
      if (!active) {
        smartBackgroundImage.removeAttribute("src");
        smartBackgroundNatural = { width: 0, height: 0 };
        return;
      }

      if (smartBackgroundImage.getAttribute("src") !== source) {
        smartBackgroundNatural = { width: 0, height: 0 };
        smartBackgroundImage.onload = () => {
          smartBackgroundNatural = {
            width: smartBackgroundImage.naturalWidth,
            height: smartBackgroundImage.naturalHeight
          };
          updateSmartBackgroundLayout();
        };
        smartBackgroundImage.src = source;
      } else {
        updateSmartBackgroundLayout();
      }
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
        const hasImage = Boolean(link.showImage && link.image);
        anchor.className = [
          link.style === "secondary" ? "btn btn-secondary" : "btn",
          hasImage ? "gift-link-card" : ""
        ].filter(Boolean).join(" ");
        anchor.href = link.href || "#";
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
        if (hasImage) {
          const text = document.createElement("span");
          text.textContent = link.label || "Botón";
          const image = document.createElement("img");
          image.src = link.image;
          image.alt = link.label || "Mesa de regalos";
          image.loading = "lazy";
          image.decoding = "async";
          anchor.append(text, image);
        } else {
          anchor.textContent = link.label || "Botón";
        }
        giftLinks.appendChild(anchor);
      });
    }

    function configureInlineVideo(video, src, options = {}) {
      if (!video) return;
      video.src = src || "";
      video.muted = options.muted !== false;
      video.loop = options.loop !== false;
      video.playsInline = true;
      video.preload = options.preload || "metadata";
      video.controls = Boolean(options.controls);
      if (options.autoplay !== false) {
        video.play().catch(() => {});
      }
    }

    function createGalleryMedia(item, options = {}) {
      const node = document.createElement(item.type === "video" ? "video" : "img");
      node.className = "gallery-media";
      node.dataset.mediaType = item.type;
      if (item.type === "video") {
        configureInlineVideo(node, item.src, {
          controls: false,
          muted: true,
          loop: true,
          preload: "metadata",
          autoplay: options.autoplay !== false
        });
        node.setAttribute("aria-label", item.alt);
      } else {
        node.src = item.src;
        node.alt = item.alt;
        node.loading = "lazy";
        node.decoding = "async";
      }
      return node;
    }

    function applyHeroMedia() {
      const src = INVITATION_CONFIG.images.hero;
      const type = mediaTypeFromSource(src, INVITATION_CONFIG.images.heroType);
      if (type === "video" && heroVideo) {
        if (heroImage) heroImage.hidden = true;
        heroVideo.hidden = false;
        configureInlineVideo(heroVideo, src, { controls: false, muted: true, loop: true, preload: "metadata" });
      } else if (heroImage) {
        if (heroVideo) {
          heroVideo.pause();
          heroVideo.removeAttribute("src");
          heroVideo.load();
          heroVideo.hidden = true;
        }
        heroImage.hidden = false;
        heroImage.src = src;
        heroImage.alt = `Portada de ${INVITATION_CONFIG.event.celebrantName}`;
      }
    }

    function renderGalleryGrid() {
      if (!galleryGrid) return;
      galleryGrid.innerHTML = "";
      const items = INVITATION_CONFIG.images.gallery || [];
      const types = INVITATION_CONFIG.images.galleryMediaTypes || [];
      galleryItems = items.map((src, index) => {
        const type = mediaTypeFromSource(src, types[index]);
        const item = {
          src,
          type,
          alt: `${mediaLabel(type)} ${index + 1}`,
          element: null
        };
        const button = document.createElement("button");
        button.type = "button";
        button.className = "gallery-item";
        button.dataset.galleryIndex = String(index);
        button.setAttribute("aria-label", `Abrir ${item.alt}`);
        if (items.length > 3 && (index % 6 === 2 || index % 6 === 3)) button.classList.add("big");
        button.appendChild(createGalleryMedia(item));
        if (type === "video") {
          const badge = document.createElement("span");
          badge.className = "gallery-video-badge";
          badge.textContent = "▶";
          button.appendChild(badge);
        }
        item.element = button;
        galleryGrid.appendChild(button);
        return item;
      });
      if (galleryItems.length) {
        if (galleryShowcase) galleryShowcase.style.display = "";
        previewIndex = Math.min(previewIndex, galleryItems.length - 1);
        currentIndex = Math.min(currentIndex, galleryItems.length - 1);
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

    function renderFamilyGroups() {
      const simpleParents = document.getElementById("parentsNames");
      const groupsWrap = document.getElementById("parentsGroups");
      const groups = INVITATION_CONFIG.family.parentsGroups || [];
      if (!groupsWrap || !simpleParents) return;
      groupsWrap.innerHTML = "";
      groupsWrap.hidden = !groups.length;
      simpleParents.hidden = Boolean(groups.length);
      groups.forEach((group) => {
        const node = document.createElement("article");
        node.className = "family-group";
        node.innerHTML = `
          ${group.label ? `<strong class="family-label">${group.label}</strong>` : ""}
          ${group.namesHtml ? `<div class="family-names">${group.namesHtml}</div>` : ""}
        `;
        groupsWrap.appendChild(node);
      });
    }

    function renderGodparentsItems() {
      const simpleGodparents = document.getElementById("godparentsNames");
      const itemsWrap = document.getElementById("godparentsItems");
      const items = INVITATION_CONFIG.family.godparentsItems || [];
      if (!itemsWrap || !simpleGodparents) return;
      itemsWrap.innerHTML = "";
      itemsWrap.hidden = !items.length;
      simpleGodparents.hidden = Boolean(items.length);
      items.forEach((item) => {
        const node = document.createElement("article");
        node.className = "godparent-item";
        node.innerHTML = `
          ${item.role ? `<strong class="godparent-role">${item.role}</strong>` : ""}
          ${item.namesHtml ? `<div class="godparent-names">${item.namesHtml}</div>` : ""}
        `;
        itemsWrap.appendChild(node);
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

    function applyCountdownStyle() {
      const countdownSection = document.getElementById("countdown-section");
      if (!countdownSection) return;
      const style = normalizeCountdownStyle(INVITATION_CONFIG.countdown?.style);
      countdownSection.classList.remove(
        "countdown-style-classic",
        "countdown-style-pulse",
        "countdown-style-crystal",
        "countdown-style-editorial"
      );
      countdownSection.classList.add(`countdown-style-${style}`);
    }

    function syncEventRuntimeValues() {
      EVENT_DATE = new Date(INVITATION_CONFIG.event.eventDate);
      EVENT_END = new Date(INVITATION_CONFIG.event.eventEnd);
      EVENT_LOCATION = INVITATION_CONFIG.reception.place
        || INVITATION_CONFIG.event.eventLocation
        || INVITATION_CONFIG.ceremony.place
        || "";
      RSVP_PHONE = INVITATION_CONFIG.event.rsvpPhone;

      fechaEvento.textContent = Number.isNaN(EVENT_DATE.getTime())
        ? ""
        : EVENT_DATE.toLocaleDateString("es-MX", {
          day: "numeric",
          month: "long",
          year: "numeric"
        });
    }

    function applyAudioSource() {
      if (!audioSource) return;
      const nextSource = normalizeAudioSource(INVITATION_CONFIG.audio?.src, "cancio.mp3");
      if (audioSource.getAttribute("src") === nextSource) return;
      const wasPaused = audio.paused;
      audioSource.setAttribute("src", nextSource);
      audio.load();
      if (!wasPaused) audio.play().catch(() => {});
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
      const ogImage = document.querySelector('meta[property="og:image"]');
      const ogSecureImage = document.querySelector('meta[property="og:image:secure_url"]');
      const twitterImage = document.querySelector('meta[name="twitter:image"]');
      const ogUrl = document.querySelector('meta[property="og:url"]');
      const publicUrl = cleanPublicUrl(INVITATION_CONFIG.meta.publicUrl || "");
      const shareImage = INVITATION_CONFIG.images.og || (mediaTypeFromSource(INVITATION_CONFIG.images.hero, INVITATION_CONFIG.images.heroType) === "image" ? INVITATION_CONFIG.images.hero : INVITATION_CONFIG.images.story);
      const shareImageUrl = publicUrl ? makeAbsoluteUrl(publicUrl, shareImage) : shareImage;
      if (ogTitle) ogTitle.setAttribute("content", resolvedOgTitle);
      if (ogDescription) ogDescription.setAttribute("content", INVITATION_CONFIG.meta.ogDescription);
      if (ogImage && shareImageUrl) ogImage.setAttribute("content", shareImageUrl);
      if (ogSecureImage && shareImageUrl) ogSecureImage.setAttribute("content", shareImageUrl);
      if (twitterImage && shareImageUrl) twitterImage.setAttribute("content", shareImageUrl);
      if (ogUrl) ogUrl.setAttribute("content", publicUrl);

      setText("overlayKicker", INVITATION_CONFIG.event.label);
      setText("overlayTitle", INVITATION_CONFIG.event.celebrantName);
      setText("heroLabel", INVITATION_CONFIG.event.label);
      setText("nombre", INVITATION_CONFIG.event.celebrantName);
      syncEventRuntimeValues();
      applyAudioSource();

      applyThemeColors();
      applyCountdownStyle();
      applySmartBackground();
      window.dispatchEvent(new CustomEvent("digitalInvita:visualSettingsChanged"));
      document.documentElement.style.setProperty("--overlay-image", cssMediaUrl(INVITATION_CONFIG.images.hero));
      setRootVar("--font-body", cssFontValue(INVITATION_CONFIG.theme.bodyFont, "\"Cormorant Garamond\", serif"));
      setRootVar("--font-script", cssFontValue(INVITATION_CONFIG.theme.scriptFont, "\"Dancing Script\", cursive"));
      setRootVar("--font-display", cssFontValue(INVITATION_CONFIG.theme.displayFont, "\"Great Vibes\", cursive"));
      if (waxCaption) waxCaption.textContent = INVITATION_CONFIG.theme.styleMode === "space-ranger" ? "Iniciar misión" : "Abrir invitación";
      if (missionAccepted) missionAccepted.textContent = "Misión aceptada";
      if (sealImage) sealImage.src = INVITATION_CONFIG.images.seal || "sello_cera.png";
      applyHeroMedia();
      if (storyImage) storyImage.src = INVITATION_CONFIG.images.story;
      if (storyImage) storyImage.alt = `Fotografía de ${INVITATION_CONFIG.event.celebrantName}`;
      if (dressImage) dressImage.src = INVITATION_CONFIG.images.dress;
      setOptionalImage(envelopeImage, INVITATION_CONFIG.images.envelope);
      setOptionalImage(surpriseImage, INVITATION_CONFIG.images.surprise);
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
      renderFamilyGroups();
      setText("parentsInviteText", INVITATION_CONFIG.family.parentsInviteText);
      setText("godparentsEyebrow", INVITATION_CONFIG.family.godparentsEyebrow);
      setHTML("godparentsNames", INVITATION_CONFIG.family.godparentsNamesHtml);
      renderGodparentsItems();

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
      if (galleryItems.length) updateGalleryPreview(previewIndex);

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

    function applyPreviewOpenState() {
      if (!document.documentElement.classList.contains("preview-embed")) return;

      const skipOpening = readStorageItem(PREVIEW_SKIP_OPENING_KEY) !== "false";
      document.documentElement.classList.toggle("preview-live", skipOpening);
      if (!skipOpening) return;

      overlay.classList.add("hidden");
      overlay.setAttribute("aria-hidden", "true");
      setScrollLocked(false);
      musicBtn.classList.add("show");
      musicBtn.classList.add("is-paused");
      heroLabel.classList.add("animate");
      heroName.classList.add("animate");
      fechaEvento.classList.add("animate");

      const scrollY = Number(readStorageItem(PREVIEW_SCROLL_KEY) || 0);
      if (scrollY > 0) {
        requestAnimationFrame(() => window.scrollTo(0, scrollY));
      }
    }

    function exposePreviewBridge() {
      if (!document.documentElement.classList.contains("preview-embed")) return;

      window.digitalInvitaPreviewApply = (nextConfig, scrollY = window.scrollY) => {
        replaceConfig(deepMerge(DEFAULT_CONFIG, nextConfig || {}));
        storyStarted = true;
        applyInvitationConfig();
        applyPreviewOpenState();
        updateCountdown();
        revealOnScroll();
        requestAnimationFrame(() => window.scrollTo(0, Math.max(0, Number(scrollY) || 0)));
      };

      window.addEventListener("scroll", () => {
        try {
          localStorage.setItem(PREVIEW_SCROLL_KEY, String(window.scrollY || 0));
        } catch {}
      }, { passive: true });
    }

    loadSavedConfig();
    applyInvitationConfig();
    applyPreviewOpenState();
    exposePreviewBridge();
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
      if (Number.isNaN(EVENT_DATE.getTime())) {
        countdownEl.innerHTML = [
          ["--", "Días"],
          ["--", "Horas"],
          ["--", "Min"],
          ["--", "Seg"]
        ].map(([value, label]) => `
          <div class="count-box">
            <strong>${value}</strong>
            <span>${label}</span>
          </div>
        `).join("");
        countdownCaption.textContent = "Fecha por definir.";
        previousParts = [];
        return;
      }

      const now = new Date();
      const diff = EVENT_DATE - now;
      const spaceMode = INVITATION_CONFIG.theme.styleMode === "space-ranger";

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

      const parts = spaceMode
        ? [
          [String(days), "Días", "D-"],
          [String(hours).padStart(2, "0"), "Horas", "H-"],
          [String(minutes).padStart(2, "0"), "Min", "M-"],
          [String(seconds).padStart(2, "0"), "Seg", "S-"]
        ]
        : [
          [String(days), "Días", ""],
          [String(hours).padStart(2, "0"), "Horas", ""],
          [String(minutes).padStart(2, "0"), "Min", ""],
          [String(seconds).padStart(2, "0"), "Seg", ""]
        ];

      countdownEl.innerHTML = parts.map(([value, label, code]) => `
        <div class="count-box">
          ${code ? `<em>${code}</em>` : ""}
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

      if (spaceMode && days > 30) {
        countdownCaption.textContent = "La nave ya está en preparación para el gran despegue.";
      } else if (spaceMode && days > 7) {
        countdownCaption.textContent = "La misión está cada vez más cerca.";
      } else if (spaceMode && days > 0) {
        countdownCaption.textContent = "Entramos en la recta final de lanzamiento.";
      } else if (spaceMode) {
        countdownCaption.textContent = "Todo está listo para despegar.";
      } else if (days > 30) {
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
      if (!galleryItems.length) {
        thumbs.innerHTML = "";
        return;
      }
      thumbs.innerHTML = "";
      galleryItems.forEach((item, index) => {
        const thumb = document.createElement("button");
        thumb.type = "button";
        thumb.className = "thumb-item";
        thumb.classList.toggle("active", index === currentIndex);
        thumb.setAttribute("aria-label", `Ver ${item.alt}`);
        const media = createGalleryMedia(item, { autoplay: false });
        media.removeAttribute("class");
        thumb.appendChild(media);
        if (item.type === "video") {
          const badge = document.createElement("span");
          badge.className = "thumb-video-badge";
          badge.textContent = "▶";
          thumb.appendChild(badge);
        }
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
      if (lightboxMain.classList.contains("is-video")) return;
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
      if (!galleryItems.length) return;
      previewIndex = (index + galleryItems.length) % galleryItems.length;
      const activeItem = galleryItems[previewIndex];
      const isVideo = activeItem.type === "video";

      galleryPreviewImg.style.opacity = "0";
      galleryPreviewImg.style.transform = "scale(0.97)";
      if (galleryPreviewVideo) {
        galleryPreviewVideo.style.opacity = "0";
        galleryPreviewVideo.style.transform = "scale(0.97)";
        galleryPreviewVideo.pause();
      }

      if (isVideo && galleryPreviewVideo) {
        galleryPreviewImg.hidden = true;
        galleryPreviewVideo.hidden = false;
        configureInlineVideo(galleryPreviewVideo, activeItem.src, { controls: false, muted: true, loop: true, preload: "metadata" });
      } else {
        if (galleryPreviewVideo) {
          galleryPreviewVideo.hidden = true;
          galleryPreviewVideo.removeAttribute("src");
          galleryPreviewVideo.load();
        }
        galleryPreviewImg.hidden = false;
        galleryPreviewImg.src = activeItem.src;
        galleryPreviewImg.alt = activeItem.alt || `Galería ${previewIndex + 1}`;
      }
      galleryMetaIndex.textContent = `${mediaLabel(activeItem.type)} ${previewIndex + 1} de ${galleryItems.length}`;
      galleryMetaHint.textContent = "Usa las flechas o toca una miniatura para explorar.";

      galleryItems.forEach((item, imageIndex) => {
        item.element?.classList.toggle("is-active", imageIndex === previewIndex);
      });

      requestAnimationFrame(() => {
        const activeNode = isVideo ? galleryPreviewVideo : galleryPreviewImg;
        if (!activeNode) return;
        activeNode.style.opacity = "1";
        activeNode.style.transform = "scale(1)";
      });
    }

    function updateLightbox() {
      if (!galleryItems.length) return;
      const activeItem = galleryItems[currentIndex];
      const isVideo = activeItem.type === "video";
      resetImageZoom();
      lightboxMain.classList.toggle("is-video", isVideo);
      lightboxImg.style.opacity = "0";
      lightboxImg.style.transform = "translate3d(0, 0, 0) scale(0.97)";
      if (lightboxVideo) {
        lightboxVideo.style.opacity = "0";
        lightboxVideo.pause();
      }

      if (isVideo && lightboxVideo) {
        lightboxImg.hidden = true;
        lightboxVideo.hidden = false;
        configureInlineVideo(lightboxVideo, activeItem.src, { controls: true, muted: false, loop: false, preload: "metadata", autoplay: false });
      } else {
        if (lightboxVideo) {
          lightboxVideo.hidden = true;
          lightboxVideo.removeAttribute("src");
          lightboxVideo.load();
        }
        lightboxImg.hidden = false;
        lightboxImg.src = activeItem.src;
        lightboxImg.alt = activeItem.alt || "Imagen ampliada";
      }
      viewerCounter.textContent = `${currentIndex + 1} / ${galleryItems.length}`;
      Array.from(thumbs.querySelectorAll(".thumb-item")).forEach((thumb, index) => {
        thumb.classList.toggle("active", index === currentIndex);
      });
      requestAnimationFrame(() => {
        if (isVideo && lightboxVideo) {
          lightboxVideo.style.opacity = "1";
        } else {
          lightboxImg.style.opacity = "1";
          applyImageZoom();
        }
      });
    }

    function openLightbox(index) {
      if (!galleryItems.length) return;
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
      if (lightboxVideo) lightboxVideo.pause();
      lightbox.classList.remove("show");
      lightbox.setAttribute("aria-hidden", "true");
      if (overlay.classList.contains("hidden")) {
        setScrollLocked(false);
      }
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % galleryItems.length;
      updateLightbox();
    }

    function prevImage() {
      currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
      updateLightbox();
    }

    function nextPreview() {
      updateGalleryPreview(previewIndex + 1);
    }

    function prevPreview() {
      updateGalleryPreview(previewIndex - 1);
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

      if (attending) {
        if (INVITATION_CONFIG.rsvp.showGuestCount !== false && !count) {
          showToast("Selecciona cuántas personas asistirán.");
          guestCount.focus();
          return;
        }
      }

      const message = buildRsvpMessage(attending, {
        name,
        count,
        eventCopy
      });

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

    function buildRsvpMessage(attending, { name, count, eventCopy }) {
      const template = attending
        ? (INVITATION_CONFIG.rsvp.confirmMessage || DEFAULT_CONFIRM_MESSAGE)
        : (INVITATION_CONFIG.rsvp.declineMessage || DEFAULT_DECLINE_MESSAGE);
      const passes = INVITATION_CONFIG.rsvp.showGuestCount !== false ? count : "";
      return template
        .replaceAll("{nombre}", name)
        .replaceAll("{evento}", eventCopy.eventHeader)
        .replaceAll("{festejada}", INVITATION_CONFIG.event.celebrantName || "")
        .replaceAll("{celebracion}", eventCopy.celebrationText)
        .replaceAll("{pases}", passes)
        .split("\n")
        .filter((line) => line.trim() || !line.includes("{pases}"))
        .join("\n")
        .replace(/\n{3,}/g, "\n\n")
        .trim();
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
      const heroImage = hero.querySelector("img:not([hidden]), video:not([hidden])");
      if (!heroImage) return;
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
        "PRODID:-//Digital Invita//Invitacion Digital//ES",
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
      let lastFrameTime = 0;
      const lowPower = IS_LOW_POWER_DEVICE
        || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4)
        || (navigator.deviceMemory && navigator.deviceMemory <= 4);

      function particlesEnabled() {
        return INVITATION_CONFIG.theme.particlesEnabled !== false;
      }

      function createParticle(index) {
        const depth = Math.random();
        const angle = Math.random() * Math.PI * 2;
        const baseSpeed = lowPower
          ? 0.035 + depth * 0.065
          : 0.045 + depth * 0.115;
        const hasTrail = index % (lowPower ? 8 : 5) === 0;
        const isLarge = index % (lowPower ? 11 : 6) === 2;
        const speed = hasTrail
          ? (lowPower ? 0.08 + depth * 0.1 : 0.14 + depth * 0.24)
          : baseSpeed;
        const radius = isLarge
          ? 1.9 + Math.random() * 1.45
          : 0.46 + Math.pow(depth, 1.35) * 1.45;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          r: radius,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed * (hasTrail ? 0.72 : 1),
          orbitX: (isLarge ? 1.5 : 3) + Math.random() * (isLarge ? 5 : 11),
          orbitY: (isLarge ? 1.5 : 2) + Math.random() * (isLarge ? 4 : 8),
          orbitSpeedX: 0.00045 + Math.random() * 0.0007,
          orbitSpeedY: 0.00035 + Math.random() * 0.00055,
          phase: Math.random() * Math.PI * 2,
          alpha: isLarge ? Math.random() * 0.08 + 0.08 : Math.random() * 0.2 + 0.14,
          trail: hasTrail,
          trailLimit: hasTrail ? Math.round(30 + Math.random() * 16) : 0,
          history: hasTrail ? [] : null,
          depth,
          drawX: 0,
          drawY: 0
        };
      }

      function wrapParticle(particle) {
        const margin = 34;
        let wrapped = false;
        if (particle.x < -margin) {
          particle.x = width + margin;
          wrapped = true;
        }
        if (particle.x > width + margin) {
          particle.x = -margin;
          wrapped = true;
        }
        if (particle.y < -margin) {
          particle.y = height + margin;
          wrapped = true;
        }
        if (particle.y > height + margin) {
          particle.y = -margin;
          wrapped = true;
        }
        if (wrapped && particle.history) particle.history.length = 0;
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
          ? (width < 768 ? 16 : 24)
          : (lowPower
            ? (width < 768 ? 16 : 26)
            : (width < 768 ? 36 : 68));
        particles = Array.from({ length: total }, (_, index) => createParticle(index));
      }

      function stopParticles() {
        cancelAnimationFrame(animationId);
        animationId = 0;
        ctx.clearRect(0, 0, width, height);
      }

      function syncParticleState() {
        const enabled = particlesEnabled();
        canvas.hidden = !enabled;
        if (!enabled) {
          stopParticles();
          return;
        }
        if (!width || !height || !particles.length) resize();
        if (!animationId && !document.hidden) {
          lastFrameTime = 0;
          animationId = requestAnimationFrame(animate);
        }
      }

      function updateTrail(particle, x, y) {
        if (!particle.history) return;
        particle.history.push({ x, y });
        while (particle.history.length > particle.trailLimit) particle.history.shift();
      }

      function drawTrail(particle, particleRgb, alpha, radius) {
        if (!particle.history || particle.history.length < 2) return;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        for (let index = 1; index < particle.history.length; index += 1) {
          const from = particle.history[index - 1];
          const to = particle.history[index];
          const progress = index / (particle.history.length - 1);
          ctx.beginPath();
          ctx.moveTo(from.x, from.y);
          ctx.lineTo(to.x, to.y);
          ctx.lineWidth = Math.max(0.4, radius * 0.68 * progress);
          ctx.strokeStyle = `rgba(${particleRgb}, ${alpha * 0.42 * progress})`;
          ctx.stroke();
        }
      }

      function drawParticle(particle, particleRgb, time) {
        const breath = Math.sin(time * 0.0012 + particle.phase) * 0.035;
        const alpha = Math.max(0.08, particle.alpha + breath);
        const radius = particle.r;
        const drawX = particle.x + Math.sin(time * particle.orbitSpeedX + particle.phase) * particle.orbitX;
        const drawY = particle.y + Math.cos(time * particle.orbitSpeedY + particle.phase) * particle.orbitY;
        updateTrail(particle, drawX, drawY);
        drawTrail(particle, particleRgb, alpha, radius);

        ctx.beginPath();
        ctx.arc(drawX, drawY, radius * 2.1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleRgb}, ${alpha * 0.08})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(drawX, drawY, radius * 1.25, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleRgb}, ${alpha * 0.22})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(drawX, drawY, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleRgb}, ${alpha * 0.76})`;
        ctx.fill();

        particle.drawX = drawX;
        particle.drawY = drawY;
      }

      function animate(time = 0) {
        if (!particlesEnabled()) {
          stopParticles();
          return;
        }
        const delta = lastFrameTime ? Math.min(2.2, (time - lastFrameTime) / 16.67) : 1;
        lastFrameTime = time;
        ctx.clearRect(0, 0, width, height);
        const particleRgb = getComputedStyle(document.documentElement).getPropertyValue("--particle-rgb").trim() || "255, 244, 207";
        particles.forEach((particle) => {
          particle.x += particle.vx * delta;
          particle.y += particle.vy * delta;
          wrapParticle(particle);

          drawParticle(particle, particleRgb, time);
        });
        animationId = requestAnimationFrame(animate);
      }

      resize();
      syncParticleState();
      window.addEventListener("resize", resize, { passive: true });
      window.addEventListener("digitalInvita:visualSettingsChanged", syncParticleState);
      const handleParticleVisibility = () => {
        if (document.hidden) {
          stopParticles();
        } else if (!animationId) {
          syncParticleState();
        }
      };
      document.addEventListener("visibilitychange", handleParticleVisibility);

      return () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener("resize", resize);
        window.removeEventListener("digitalInvita:visualSettingsChanged", syncParticleState);
        document.removeEventListener("visibilitychange", handleParticleVisibility);
      };
    }

    function initLightProtection() {
      document.addEventListener("contextmenu", (event) => {
        const protectedTarget = event.target.closest("img, video, .gallery-stage, .gallery, .lightbox, .hero");
        if (!protectedTarget) return;
        event.preventDefault();
        showToast("Esta vista está protegida.");
      });

      document.addEventListener("dragstart", (event) => {
        if (event.target.closest("img, video")) {
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

    function finishOpeningInvitation() {
      overlay.classList.add("hidden");
      overlay.setAttribute("aria-hidden", "true");
      setScrollLocked(false);
      heroLabel.classList.add("animate");
      heroName.classList.add("animate");
      fechaEvento.classList.add("animate");
    }

    function triggerWarpFlash() {
      if (!warpFlash) return;
      warpFlash.classList.remove("active");
      void warpFlash.offsetWidth;
      warpFlash.classList.add("active");
      window.setTimeout(() => {
        warpFlash.classList.remove("active");
      }, 1050);
    }

    function triggerMissionAccepted() {
      if (!missionAccepted) return;
      missionAccepted.classList.remove("active");
      void missionAccepted.offsetWidth;
      missionAccepted.classList.add("active");
      window.setTimeout(() => {
        missionAccepted.classList.remove("active");
      }, 1900);
    }

    openBtn.addEventListener("click", () => {
      if (overlay.classList.contains("hidden")) return;
      musicBtn.classList.add("show");
      fadeInAudio();
      musicBtn.classList.remove("is-paused");
      if (INVITATION_CONFIG.theme.styleMode === "space-ranger") {
        openBtn.disabled = true;
        overlay.classList.add("opening");
        window.setTimeout(triggerWarpFlash, 260);
        window.setTimeout(() => {
          finishOpeningInvitation();
          window.setTimeout(triggerMissionAccepted, 420);
        }, 680);
        return;
      }
      finishOpeningInvitation();
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
      const item = event.target.closest("[data-gallery-index]");
      if (!item) return;
      const index = Number(item.dataset.galleryIndex);
      if (index >= 0) updateGalleryPreview(index);
    });

    galleryGrid.addEventListener("click", (event) => {
      const item = event.target.closest("[data-gallery-index]");
      if (!item) return;
      const index = Number(item.dataset.galleryIndex);
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

    document.addEventListener("keydown", (event) => {
      if (!lightbox.classList.contains("show")) return;
      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowRight") nextImage();
      if (event.key === "ArrowLeft") prevImage();
    });

    lightboxMain.addEventListener("dblclick", (event) => {
      if (lightboxMain.classList.contains("is-video")) return;
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
      if (lightboxMain.classList.contains("is-video")) return;
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
      if (lightboxMain.classList.contains("is-video")) return;
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
      if (lightboxMain.classList.contains("is-video")) return;
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
      if (lightboxMain.classList.contains("is-video")) return;
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
      updateSmartBackgroundLayout();
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

    const countdownTimer = window.setInterval(updateCountdown, 1000);
    window.addEventListener("resize", () => {
      updateOverlayScale();
      updateSmartBackgroundLayout();
    }, { passive: true });
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
