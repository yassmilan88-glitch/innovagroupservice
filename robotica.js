const translations = {
  "skip": "Aller au contenu",
  "navOffer": "Offre",
  "navPartner": "Pour les fabricants",
  "navContact": "Contact",
  "heroA": "La robotique rencontre",
  "heroB": "le marché italien.",
  "heroLead": "Depuis Cuneo, nous développons des projets de robotique pour les événements et les entreprises. Nous proposons aux fabricants internationaux une démarche pour tester leurs solutions en Italie et développer un canal commercial local.",
  "heroPartner": "Collaborez avec Innova",
  "heroOffer": "Découvrez l’offre",
  "about": "QUI SOMMES-NOUS",
  "aboutTitle": "Des compétences techniques, un ancrage à Cuneo.",
  "aboutDesc": "Innova Group Service SRL s’appuie sur une expérience de terrain dans les secteurs technique et électrique, avec des chantiers dans les régions de Cuneo et de Turin. Sur cette base, nous développons un projet consacré à la robotique, avec le Piémont comme premier territoire d’intervention.",
  "aboutLink": "Découvrez Innova Group Service",
  "offer": "NOTRE OFFRE",
  "offerTitle": "De l’événement au canal de vente.",
  "rent": "Location événementielle",
  "rentDesc": "Pour les salons, congrès et showrooms. Nous étudions le robot, les interactions et les conditions d’utilisation selon le lieu, la date et le public.",
  "sales": "Vente aux entreprises",
  "salesDesc": "Pour l’accueil, les démonstrations et les interactions avec les visiteurs. Nous partons de votre usage pour vérifier la configuration, la disponibilité et l’assistance auprès des fournisseurs.",
  "distribution": "Distribution en Italie",
  "distributionDesc": "Pour les fabricants intéressés par le marché italien. Nous étudions ensemble la clientèle à cibler, la présentation du produit et les conditions d’une distribution viable.",
  "maker": "POUR LES FABRICANTS INTERNATIONAUX",
  "makerTitle": "Un point de départ pour entrer sur le marché italien.",
  "makerLead": "Nous proposons de partir d’usages concrets dans le Piémont. Une démonstration auprès de clients potentiels aide à mesurer l’intérêt, à identifier les adaptations nécessaires et à préparer la commercialisation.",
  "makerCta": "Présentez votre technologie",
  "process": "Comment nous travaillons ensemble",
  "step1": "Échange sur le produit",
  "step1Desc": "Nous examinons la gamme, les applications, les prix indicatifs et les objectifs pour l’Italie.",
  "step2": "Démonstration et retours du terrain",
  "step2Desc": "Nous définissons un cas d’usage, les conditions de l’essai et les retours à recueillir.",
  "step3": "Conditions commerciales",
  "step3Desc": "Si l’essai est concluant, nous discutons des canaux de vente, de l’approvisionnement, de l’assistance et des responsabilités opérationnelles.",
  "dialogues": "RELATIONS COMMERCIALES",
  "dialoguesTitle": "Discussions et prises de contact.",
  "dialoguesIntro": "Les échanges sont préliminaires. Les éventuels accords commerciaux et la disponibilité des produits restent à confirmer.",
  "noetix": "Discussions préliminaires",
  "noetixDesc": "Échanges autour de la gamme humanoïde BUMI et de démonstrations possibles pour le marché italien.",
  "maztech": "Discussions préliminaires",
  "maztechDesc": "Échanges exploratoires sur les solutions robotiques et les formes possibles de collaboration commerciale.",
  "unitree": "Contacts exploratoires",
  "unitreeDesc": "Contacts auprès de fournisseurs pour mieux connaître les solutions Unitree et les conditions d’accès aux produits.",
  "contact": "CONTACT",
  "contactTitle": "Parlons de votre projet.",
  "contactDesc": "Parlez-nous de votre projet. Les boutons ouvrent un e-mail avec les informations à renseigner.",
  "italy": "Italie",
  "back": "Retour aux projets Innova",
  "faqLabel": "AVANT DE NOUS ÉCRIRE",
  "faqTitle": "Questions fréquentes.",
  "faqEvent": "Comment vérifier la disponibilité pour mon événement ?",
  "faqEventAnswer": "Indiquez-nous la date, le lieu et le type de public. Nous vérifions auprès des fournisseurs les modèles adaptés, leur disponibilité et les coûts avant de vous faire une proposition.",
  "faqDemo": "Comment organiser une démonstration en Italie ?",
  "faqDemoAnswer": "Nous partons d’un cas d’usage et définissons avec le fabricant le lieu, le responsable de l’essai et les retours à recueillir. La date est fixée après vérification de la faisabilité.",
  "faqSupport": "Qui assure la formation et l’assistance ?",
  "faqSupportAnswer": "Pour une vente ou une distribution, nous vérifions avec le fabricant qui peut assurer la formation, la fourniture de pièces et l’assistance, ainsi que les délais. Les responsabilités sont précisées dans la proposition.",
  "eventCta": "J’organise un événement",
  "producerCta": "Je fabrique des robots"
};

const languageContent = {
  it: {
    title: 'Robotica per eventi, imprese e produttori | Innova Group Service SRL',
    description: 'Innova Group Service SRL, Cuneo. Robotica per eventi e imprese, con progetti di noleggio, vendita e distribuzione in Italia.',
    language: 'Lingua',
    nav: 'Robotica',
    partner: 'Proposta di collaborazione robotica',
    project: 'Robotica per un evento'
  },
  fr: {
    title: 'Robotique pour les événements, les entreprises et les fabricants | Innova Group Service SRL',
    description: 'Innova Group Service SRL, Cuneo. Robotique pour les événements et les entreprises, avec des projets de location, de vente et de distribution en Italie.',
    language: 'Langue',
    nav: 'Robotique',
    partner: 'Proposition de collaboration en robotique',
    project: 'Robotique pour un événement'
  }
};

const emailBodies = {
  "it": {
    "partner": "Buongiorno,\nvorrei presentarvi la nostra tecnologia.\n\nAzienda e sito web:\nProdotto o scheda tecnica:\nApplicazioni principali:\nObiettivi per il mercato italiano:\n",
    "project": "Buongiorno,\nvorrei valutare un robot per il nostro evento.\n\nCittà e sede:\nData e durata:\nPubblico previsto:\nTipo di interazione desiderata:\n"
  },
  "fr": {
    "partner": "Bonjour,\nje souhaite vous présenter notre technologie.\n\nEntreprise et site web :\nProduit ou fiche technique :\nPrincipales applications :\nObjectifs sur le marché italien :\n",
    "project": "Bonjour,\nje souhaite étudier la possibilité d’utiliser un robot lors de notre événement.\n\nVille et lieu :\nDate et durée :\nPublic attendu :\nType d’interaction souhaité :\n"
  }
};

const labels = [...document.querySelectorAll('[data-i18n]')].map(element => ({
  element,
  it: element.textContent,
  fr: translations[element.dataset.i18n]
}));
const buttons = document.querySelectorAll('[data-lang]');

function setLanguage(language) {
  const content = languageContent[language];
  document.documentElement.lang = language;
  document.title = content.title;
  document.querySelector('meta[name="description"]').content = content.description;
  document.querySelector('.languages').setAttribute('aria-label', content.language);
  document.querySelector('.nav').setAttribute('aria-label', content.nav);
  labels.forEach(label => { label.element.textContent = label[language]; });
  buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === language)));
  document.querySelectorAll('[data-subject]').forEach(link => {
    const type = link.dataset.subject;
    const params = new URLSearchParams({
      subject: content[type],
      body: emailBodies[language][type].replaceAll('\n', '\r\n')
    });
    link.href = 'mailto:info@innovagroupservice.eu?' + params.toString().replaceAll('+', '%20');
  });
}

let preferredLanguage = 'it';
try {
  if (localStorage.getItem('innova-lang') === 'fr') preferredLanguage = 'fr';
} catch {
  // Browsers may disable storage. Language switching still works on this page.
}
setLanguage(preferredLanguage);

buttons.forEach(button => button.addEventListener('click', () => {
  const language = button.dataset.lang;
  setLanguage(language);
  try {
    localStorage.setItem('innova-lang', language);
  } catch {
    // Keep the language selected for the current visit.
  }
}));

if ('IntersectionObserver' in window && matchMedia('(prefers-reduced-motion: no-preference)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        observer.unobserve(entry.target);
      }
    });
  });
  document.querySelectorAll('[data-reveal]').forEach(element => observer.observe(element));
}

