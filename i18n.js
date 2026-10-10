(function () {
  const translations = {
    es: {
      htmlLang: 'es',
      meta: {
        title: 'Nicolás Scarselli — Diseñador de Producto y Marca | Senior UX/UI',
        description: 'Nicolás Scarselli — Diseñador senior de producto, UX/UI y marca con más de 18 años de experiencia. Diseño de experiencias digitales, design systems, análisis Web UX e implementación front-end.'
      },
      nav: {
        logoAria: 'Nicolás Scarselli - Inicio',
        projects: 'Proyectos',
        services: 'Servicios',
        method: 'Método',
        about: 'Sobre mí',
        experience: 'Experiencia',
        store: 'Store',
        talk: 'Hablemos',
        langAria: 'Cambiar idioma a inglés',
        langBtn: 'EN',
        themeAria: 'Cambiar tema',
        menuAriaOpen: 'Abrir menú',
        menuAriaClose: 'Cerrar menú'
      },
      hero: {
        title: 'Diseño digital, con estrategia y resultados.',
        lead: 'Soy Nicolás Scarselli, diseñador senior de producto y marca. Ayudo a empresas y equipos a convertir problemas complejos en marcas, productos y experiencias digitales claras, coherentes y posibles de construir.',
        cta: 'Cómo puedo ayudarte',
        portraitAlt: 'Retrato profesional de Nicolás Scarselli',
        captionRole: 'Diseñador de Producto y Marca',
        captionSkills: 'UX/UI · Brand · Implementación'
      },
      projects: {
        heading: 'Trabajo seleccionado',
        sub: 'Cinco proyectos donde combiné estrategia, UX/UI, sistemas visuales e implementación.',
        behanceLink: 'Ver todo en Behance ↗',
        viewFullProject: 'Ver proyecto completo ↗',
        resultLabel: 'Resultado',
        directv: {
          tag: 'Producto digital · Design Systems',
          title: 'DIRECTV — Portal de Estadísticas QATAR 2022',
          p1: 'El portal debía funcionar en televisión mediante una interfaz 10-foot, con navegación por control remoto y lectura a distancia. La versión anterior concentraba demasiada información en listas extensas, con jerarquías poco claras y una carga cognitiva elevada para una experiencia de consulta rápida.',
          p2: 'Reorganicé la arquitectura visual y los recorridos, aplicando principios perceptivos, jerarquías más marcadas y componentes reutilizables. El sistema priorizó el reconocimiento sobre la lectura constante y contempló las restricciones de distintos decodificadores.',
          result: 'Una experiencia más clara y consistente para consultar estadísticas, con menor esfuerzo de lectura y un lenguaje visual unificado entre pantallas, estados y dispositivos.',
          zoomAria: 'Ampliar imagen de DIRECTV',
          imgAlt: 'Portal de estadísticas DIRECTV en pantalla de televisión'
        },
        procrisa: {
          tag: 'Estrategia · Identidad · Web',
          title: 'Procrisa — Presencia digital industrial',
          p1: 'Procrisa necesitaba presentar una oferta técnica amplia de aberturas de PVC sin convertir el sitio en un catálogo difícil de entender. La presencia existente no acompañaba la calidad industrial de la empresa ni ayudaba a encontrar información relevante.',
          p2: 'Definí una arquitectura simple, ordené productos y contenidos por necesidades de consulta, prototipé la experiencia responsive en Figma y desarrollé la interfaz. La implementación en WordPress permitió conservar el criterio visual y facilitar la administración.',
          result: 'Un sitio responsive, profesional y administrable, con catálogo estructurado, contenidos editables y una presentación más clara de la capacidad técnica de la empresa.',
          zoomAria: 'Ampliar imagen de Procrisa',
          imgAlt: 'Sitio web industrial de Procrisa'
        },
        bae: {
          tag: 'Identidad · Eventos · Comunicación',
          title: 'Build Africa Expo — Identidad de marca',
          p1: 'El evento necesitaba una identidad reconocible capaz de conectar empresas, instituciones y audiencias diferentes. Debía funcionar con consistencia en promoción, señalética, materiales impresos, espacios físicos y entornos digitales.',
          p2: 'Construí una identidad basada en tramas geométricas modulares, una paleta de alto contraste y jerarquías tipográficas flexibles. El sistema permite variar composiciones sin perder reconocimiento ni lógica visual.',
          result: 'Un ecosistema de marca integral con aplicaciones institucionales y promocionales, piezas para el evento, brochure y diseño web, preparado para escalar a nuevas ediciones y soportes.',
          zoomAria: 'Ampliar imagen de Build Africa Expo',
          imgAlt: 'Sistema de identidad de Build Africa Expo'
        },
        coiron: {
          tag: 'Branding · Posicionamiento',
          title: 'Coirón — Identidad institucional',
          p1: 'Coirón, una consultora argentina de seguridad e higiene, necesitaba superar una presentación genérica y construir una identidad capaz de transmitir conocimiento técnico, confianza y profesionalismo.',
          p2: 'Desarrollé un sistema visual completo: logotipo, paleta, tipografía, criterios de composición y aplicaciones. Cada elemento fue pensado para comunicación comercial, documentación técnica, indumentaria y señalética.',
          result: 'Una marca sólida y consistente que traduce la especialización de la empresa en una presencia clara, profesional y aplicable en distintos soportes.',
          zoomAria: 'Ampliar imagen de Coirón',
          imgAlt: 'Identidad visual de Coirón aplicada'
        },
        iris: {
          tag: 'UX/UI · Producto digital',
          title: 'Iris Hotel — Experiencia digital',
          p1: 'Iris Hotel es un hotel boutique de lujo en Toubab Dialaw, Senegal. Con una propuesta y una ubicación excepcionales, necesitaba construir una presencia digital capaz de comunicar su identidad y posicionarlo ante una audiencia internacional.',
          p2: 'Diseñé una experiencia web responsive en español, inglés y francés, con un lenguaje editorial alineado al carácter del hotel. Organicé la información de habitaciones y servicios, y sumé un buscador de disponibilidad para hacer más claro el recorrido hacia la reserva directa, priorizando el uso desde mobile.',
          result: 'Una propuesta digital consistente que presenta la experiencia del hotel, facilita la consulta y reserva en tres idiomas y ofrece un canal directo como alternativa a las plataformas intermediarias.',
          zoomAria: 'Ampliar imagen de Iris Hotel',
          imgAlt: 'Experiencia web e identidad digital de Iris Hotel'
        }
      },
      services: {
        title: 'Cómo puedo ayudarte',
        sub: 'No siempre hace falta empezar de cero. Primero identifico qué está frenando la claridad, la confianza o la consistencia; después diseño la solución que realmente necesita el negocio.',
        idealPrefix: 'Ideal para',
        card1: {
          title: 'Análisis Web UX',
          desc: 'Detecto qué está limitando la claridad, credibilidad y efectividad de tu sitio web. Auditoría visual, experiencia de usuario, arquitectura de información, benchmark competitivo y oportunidades de mejora priorizadas.',
          fit: 'empresas que sienten que su web ya no representa la calidad de lo que ofrecen.',
          tags: ['Auditoría UX', 'Heurísticas', 'Accesibilidad', 'Priorización']
        },
        card2: {
          title: 'Estrategia de Marca',
          desc: 'Construyo sistemas de identidad pensados para diferenciar, comunicar mejor y acompañar el crecimiento. Posicionamiento, narrativa, identidad visual, dirección de arte y criterios para aplicar la marca con coherencia.',
          fit: 'empresas que crecieron, pero cuya marca quedó atrás.',
          tags: ['Posicionamiento', 'Identidad', 'Dirección de arte', 'Guidelines']
        },
        card3: {
          title: 'Experiencias Digitales',
          desc: 'Diseño sitios web y productos digitales enfocados en claridad, confianza y toma de decisiones. Arquitectura, UX, UI, contenido, prototipos, diseño responsive y acompañamiento de implementación.',
          fit: 'organizaciones que necesitan transformar una presencia digital desordenada en una experiencia profesional.',
          tags: ['Arquitectura', 'UX/UI', 'Prototipos', 'Front-end']
        },
        card4: {
          title: 'Design Systems',
          desc: 'Creo sistemas escalables para mantener consistencia entre negocio, diseño y desarrollo. Componentes, variables, patrones, documentación, handoff y criterios de evolución para productos digitales.',
          fit: 'equipos que quieren crecer sin perder calidad ni coherencia.',
          tags: ['Componentes', 'Variables', 'Documentación', 'Gobernanza']
        }
      },
      method: {
        title: 'Analizar antes de diseñar. Diseñar pensando en implementar.',
        step1: {
          title: 'Analizar',
          desc: 'Contexto, objetivos, usuarios, competencia y restricciones.'
        },
        step2: {
          title: 'Definir',
          desc: 'Prioridades, estrategia, contenidos y criterios de diseño.'
        },
        step3: {
          title: 'Diseñar',
          desc: 'Experiencias, interfaces y sistemas con una razón detrás.'
        },
        step4: {
          title: 'Implementar',
          desc: 'Acompañamiento, documentación y evolución junto a los equipos.'
        }
      },
      about: {
        title: 'Me interesa el diseño que puede explicarse, implementarse y sostenerse.',
        p1: 'Soy Nicolás Scarselli, diseñador de producto, UX/UI y marca con más de 18 años de experiencia en productos digitales, identidad visual y comunicación.',
        p2: 'Mi enfoque combina diagnóstico, estrategia visual, experiencia de usuario, design systems e implementación front-end. Primero entiendo el problema; después diseño el sistema que mejor puede resolverlo.',
        imgAlt: 'Nicolás Scarselli en su espacio de trabajo'
      },
      experience: {
        title: 'Experiencia',
        sub: 'Diseño, producto y sistemas para equipos digitales exigentes.',
        badgeCurrent: 'Actual',
        cvBtn: 'CV DIGITAL',
        item1: {
          period: 'Feb 2024 — Presente',
          role: 'Senior UX/UI Designer',
          company: 'Accenture — Buenos Aires, Argentina'
        },
        item2: {
          period: 'Nov 2021 — Ene 2024',
          role: 'UX/UI Designer Senior',
          company: 'DIRECTV / SKY / Vrio Corp — Argentina'
        },
        item3: {
          period: 'Nov 2020 — Sep 2021',
          role: 'UX/UI Designer',
          company: 'Red Link S.A. — Argentina'
        },
        item4: {
          period: 'Nov 2016 — Sep 2020',
          role: 'Diseñador Digital y Web Senior',
          company: 'Latcom / Contenidos Advertising — Argentina'
        },
        item5: {
          period: 'Oct 2011 — Oct 2016',
          role: 'Diseñador UI/UX y Multimedia',
          company: 'Timwe Tech — Buenos Aires, Argentina'
        },
        item6: {
          period: '2006 — 2011',
          role: 'Diseñador Gráfico y Web',
          company: 'CT Educación · Eventoplus — Argentina'
        }
      },
      audit: {
        kicker: 'Análisis Web UX',
        title: '¿Tu web refleja el verdadero nivel de tu empresa?',
        desc: 'Una revisión profesional puede revelar problemas de claridad, credibilidad y experiencia antes de que inviertas en un rediseño completo. Recibe un diagnóstico directo y prioridades concretas para decidir el próximo paso.',
        btn: 'Solicitar análisis',
        mailSubject: 'Solicitud de Análisis Web UX',
        small: 'Diagnóstico · prioridades · recomendaciones'
      },
      contact: {
        title: 'Contame sobre tu próximo proyecto',
        phoneLabel: 'Teléfono',
        locationLabel: 'Ubicación',
        locationValue: 'Buenos Aires, Argentina',
        photoLabel: 'Fotografía ↗'
      },
      footer: {
        metaCopy: '© 2026 Nicolás Scarselli · Buenos Aires · ',
        moreInfo: 'MAS INFORMACION',
        backToTop: 'Volver arriba ↑'
      },
      dialog: {
        closeAria: 'Cerrar'
      }
    },
    en: {
      htmlLang: 'en',
      meta: {
        title: 'Nicolás Scarselli — Product & Brand Designer | Senior UX/UI',
        description: 'Nicolás Scarselli — Senior product, UX/UI, and brand designer with 18+ years of experience. Digital experience design, design systems, Web UX audits, and front-end implementation.'
      },
      nav: {
        logoAria: 'Nicolás Scarselli - Home',
        projects: 'Projects',
        services: 'Services',
        method: 'Method',
        about: 'About',
        experience: 'Experience',
        store: 'Store',
        talk: 'Let’s talk',
        langAria: 'Switch language to Spanish',
        langBtn: 'ES',
        themeAria: 'Toggle theme',
        menuAriaOpen: 'Open menu',
        menuAriaClose: 'Close menu'
      },
      hero: {
        title: 'Digital design, driven by strategy and results.',
        lead: 'I am Nicolás Scarselli, senior product and brand designer. I help companies and teams turn complex problems into clear, coherent, and buildable brands, digital products, and experiences.',
        cta: 'How I can help you',
        portraitAlt: 'Professional portrait of Nicolás Scarselli',
        captionRole: 'Product & Brand Designer',
        captionSkills: 'UX/UI · Brand · Implementation'
      },
      projects: {
        heading: 'Selected Work',
        sub: 'Five projects combining strategy, UX/UI, visual systems, and implementation.',
        behanceLink: 'View all on Behance ↗',
        viewFullProject: 'View full project ↗',
        resultLabel: 'Outcome',
        directv: {
          tag: 'Digital Product · Design Systems',
          title: 'DIRECTV — QATAR 2022 Statistics Portal',
          p1: 'The portal had to operate on TV through a 10-foot interface with remote control navigation and lean-back viewing. The previous version packed too much data into dense lists with weak hierarchy, creating high cognitive load for quick consultations.',
          p2: 'I restructured the visual architecture and flows using perceptual principles, sharper hierarchies, and reusable components. The system prioritized instant recognition over continuous reading, accounting for varying set-top box constraints.',
          result: 'A clearer, consistent stats experience with reduced reading friction and a unified visual language across screens, states, and devices.',
          zoomAria: 'Enlarge DIRECTV image',
          imgAlt: 'DIRECTV statistics portal on television screen'
        },
        procrisa: {
          tag: 'Strategy · Identity · Web',
          title: 'Procrisa — Industrial Digital Presence',
          p1: 'Procrisa needed to present a broad technical catalog of PVC apertures without overwhelming visitors. The legacy presence fell short of the company’s manufacturing quality and made key technical information hard to discover.',
          p2: 'I defined a simplified information architecture, grouped products by user intent, prototyped the responsive experience in Figma, and developed the interface. The WordPress implementation maintained visual rigor while enabling easy content management.',
          result: 'A responsive, professional, and manageable website featuring a structured catalog, editable content, and a much sharper presentation of technical capabilities.',
          zoomAria: 'Enlarge Procrisa image',
          imgAlt: 'Procrisa industrial website'
        },
        bae: {
          tag: 'Identity · Events · Communication',
          title: 'Build Africa Expo — Brand Identity',
          p1: 'The expo required a distinctive brand identity capable of connecting diverse companies, institutions, and attendees. It had to perform consistently across promotional collateral, signage, print, physical venues, and digital environments.',
          p2: 'I built an identity anchored in modular geometric patterns, high-contrast color palettes, and flexible typographic hierarchies. The system allows broad compositional variation without losing brand recognition or visual coherence.',
          result: 'A comprehensive brand ecosystem spanning corporate and promo materials, event assets, brochures, and web design, primed to scale across future editions.',
          zoomAria: 'Enlarge Build Africa Expo image',
          imgAlt: 'Build Africa Expo identity system'
        },
        coiron: {
          tag: 'Branding · Positioning',
          title: 'Coirón — Institutional Identity',
          p1: 'Coirón, an Argentine occupational safety and environmental consultancy, needed to move past a generic look to project technical authority, trust, and senior professionalism.',
          p2: 'I developed a comprehensive visual system: logotype, color palette, typography, layout guidelines, and branded touchpoints. Every component was designed for commercial communications, technical reports, uniforms, and signage.',
          result: 'A solid, consistent brand that translates deep industry specialization into a clear, credible presence across all physical and digital touchpoints.',
          zoomAria: 'Enlarge Coirón image',
          imgAlt: 'Applied visual identity of Coirón'
        },
        iris: {
          tag: 'UX/UI · Digital Product',
          title: 'Iris Hotel — Digital Experience',
          p1: 'Iris Hotel is a luxury boutique hotel in Toubab Dialaw, Senegal. With an exceptional offering and location, it needed a digital presence that articulated its character and positioned it for a discerning international audience.',
          p2: 'I crafted a responsive website experience in Spanish, English, and French with an editorial tone tailored to the property’s aesthetic. I structured room and amenity details and introduced an intuitive availability search to streamline direct bookings, with mobile-first usability.',
          result: 'A cohesive digital experience that communicates the hotel ambiance, facilitates multi-language browsing and booking, and provides a powerful direct channel alongside third-party OTAs.',
          zoomAria: 'Enlarge Iris Hotel image',
          imgAlt: 'Web experience and digital identity for Iris Hotel'
        }
      },
      services: {
        title: 'How I can help you',
        sub: 'You do not always need to start from scratch. First, I identify what is hindering clarity, trust, or consistency; then I design the solution your business genuinely needs.',
        idealPrefix: 'Best for',
        card1: {
          title: 'Web UX Audit',
          desc: 'I pinpoint what is limiting the clarity, credibility, and conversion of your website. Visual inspection, user experience evaluation, information architecture, competitive benchmarking, and prioritized recommendations.',
          fit: 'companies that feel their current website no longer reflects the true quality of what they deliver.',
          tags: ['UX Audit', 'Heuristics', 'Accessibility', 'Prioritization']
        },
        card2: {
          title: 'Brand Strategy',
          desc: 'I build identity systems designed to differentiate, communicate clearly, and support business growth. Positioning, narrative, visual identity, art direction, and guidelines for cohesive brand application.',
          fit: 'businesses that have grown, but whose branding was left behind.',
          tags: ['Positioning', 'Identity', 'Art Direction', 'Guidelines']
        },
        card3: {
          title: 'Digital Experiences',
          desc: 'I design websites and digital products optimized for clarity, user trust, and informed decision-making. Information architecture, UX, UI, content strategy, interactive prototypes, responsive design, and front-end delivery support.',
          fit: 'organizations that need to turn a cluttered digital presence into a crisp, high-performing experience.',
          tags: ['Architecture', 'UX/UI', 'Prototypes', 'Front-end']
        },
        card4: {
          title: 'Design Systems',
          desc: 'I build scalable systems that align business goals, design craft, and engineering velocity. Design tokens, reusable components, interaction patterns, documentation, handoff workflows, and governance.',
          fit: 'product teams looking to scale fast without sacrificing craft or visual consistency.',
          tags: ['Components', 'Variables', 'Documentation', 'Governance']
        }
      },
      method: {
        title: 'Analyze before designing. Design ready for implementation.',
        step1: {
          title: 'Analyze',
          desc: 'Context, business goals, user needs, competitors, and constraints.'
        },
        step2: {
          title: 'Define',
          desc: 'Priorities, overarching strategy, content structure, and design principles.'
        },
        step3: {
          title: 'Design',
          desc: 'Experiences, interfaces, and visual systems grounded in clear purpose.'
        },
        step4: {
          title: 'Implement',
          desc: 'Hands-on collaboration, engineering handoff, documentation, and continuous evolution.'
        }
      },
      about: {
        title: 'I care about design that can be explained, implemented, and sustained.',
        p1: 'I am Nicolás Scarselli, product, UX/UI, and brand designer with 18+ years of experience across digital products, visual identity, and strategic communication.',
        p2: 'My approach fuses diagnostic analysis, visual strategy, user experience, design systems, and front-end implementation. First, I understand the core problem; then, I design the system that best solves it.',
        imgAlt: 'Nicolás Scarselli at his workspace'
      },
      experience: {
        title: 'Experience',
        sub: 'Design, product strategy, and design systems for demanding digital teams.',
        badgeCurrent: 'Current',
        cvBtn: 'DIGITAL RESUME',
        item1: {
          period: 'Feb 2024 — Present',
          role: 'Senior UX/UI Designer',
          company: 'Accenture — Buenos Aires, Argentina'
        },
        item2: {
          period: 'Nov 2021 — Jan 2024',
          role: 'Senior UX/UI Designer',
          company: 'DIRECTV / SKY / Vrio Corp — Argentina'
        },
        item3: {
          period: 'Nov 2020 — Sep 2021',
          role: 'UX/UI Designer',
          company: 'Red Link S.A. — Argentina'
        },
        item4: {
          period: 'Nov 2016 — Sep 2020',
          role: 'Senior Digital & Web Designer',
          company: 'Latcom / Contenidos Advertising — Argentina'
        },
        item5: {
          period: 'Oct 2011 — Oct 2016',
          role: 'UI/UX & Multimedia Designer',
          company: 'Timwe Tech — Buenos Aires, Argentina'
        },
        item6: {
          period: '2006 — 2011',
          role: 'Graphic & Web Designer',
          company: 'CT Educación · Eventoplus — Argentina'
        }
      },
      audit: {
        kicker: 'Web UX Audit',
        title: 'Does your website reflect your company’s true caliber?',
        desc: 'A professional review uncovers clarity, trust, and usability friction before you commit to an expensive redesign. Get an objective diagnostic with concrete, prioritized steps for your next phase.',
        btn: 'Request audit',
        mailSubject: 'Web UX Audit Request',
        small: 'Diagnostic · priorities · recommendations'
      },
      contact: {
        title: 'Tell me about your next project',
        phoneLabel: 'Phone',
        locationLabel: 'Location',
        locationValue: 'Buenos Aires, Argentina',
        photoLabel: 'Photography ↗'
      },
      footer: {
        metaCopy: '© 2026 Nicolás Scarselli · Buenos Aires · ',
        moreInfo: 'MORE INFORMATION',
        backToTop: 'Back to top ↑'
      },
      dialog: {
        closeAria: 'Close'
      }
    }
  };

  const STORAGE_KEY = 'portfolio_lang';

  function getSavedLang() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'es' || stored === 'en') return stored;
    } catch (e) { }

    const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    return browserLang.startsWith('es') ? 'es' : 'en';
  }

  function setLanguage(lang) {
    const t = translations[lang] || translations.es;

    // 1. Update <html> attribute
    document.documentElement.lang = t.htmlLang;

    // 2. Update page title & meta description
    if (t.meta) {
      document.title = t.meta.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', t.meta.description);
    }

    // 3. Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = getProp(t, key);
      if (val !== undefined) {
        el.textContent = val;
      }
    });

    // 4. Update elements with data-i18n-attr (e.g. data-i18n-attr="aria-label:nav.langAria")
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const spec = el.getAttribute('data-i18n-attr');
      // format: "attr:key,attr2:key2"
      spec.split(',').forEach(pair => {
        const [attr, key] = pair.split(':').map(s => s.trim());
        const val = getProp(t, key);
        if (attr && val !== undefined) {
          el.setAttribute(attr, val);
        }
      });
    });

    // 5. Update audit email link subject
    const auditBtn = document.querySelector('.audit a.btn');
    if (auditBtn && t.audit && t.audit.mailSubject) {
      const encodedSubject = encodeURIComponent(t.audit.mailSubject);
      auditBtn.href = `mailto:scarselli.nicolas@gmail.com?subject=${encodedSubject}`;
    }

    // 6. Update Lang Toggle button visual label & aria
    const langBtn = document.querySelector('#lang-toggle');
    if (langBtn) {
      langBtn.textContent = t.nav.langBtn;
      langBtn.setAttribute('aria-label', t.nav.langAria);
    }

    // 7. Persist choice
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) { }
  }

  function getProp(obj, path) {
    return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
  }

  // Initialize language switch handler
  window.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.querySelector('#lang-toggle');
    let currentLang = getSavedLang();

    setLanguage(currentLang);

    if (langBtn) {
      langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        setLanguage(currentLang);
      });
    }
  });
})();
