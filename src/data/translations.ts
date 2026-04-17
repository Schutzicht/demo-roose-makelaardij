export type Lang = 'nl' | 'en' | 'de';

export const languages: Record<Lang, { label: string; flag: string }> = {
  nl: { label: 'Nederlands', flag: '🇳🇱' },
  en: { label: 'English', flag: '🇬🇧' },
  de: { label: 'Deutsch', flag: '🇩🇪' },
};

export const defaultLang: Lang = 'nl';

const translations = {
  // Navigation
  'nav.home': { nl: 'Home', en: 'Home', de: 'Startseite' },
  'nav.properties': { nl: 'Woningaanbod', en: 'Properties', de: 'Immobilien' },
  'nav.allProperties': { nl: 'Alle woningen', en: 'All properties', de: 'Alle Immobilien' },
  'nav.recreation': { nl: 'Recreatiewoningen', en: 'Holiday homes', de: 'Ferienhäuser' },
  'nav.newBuild': { nl: 'Nieuwbouw', en: 'New build', de: 'Neubau' },
  'nav.holidayRental': { nl: 'Vakantieverhuur', en: 'Holiday rental', de: 'Ferienvermietung' },
  'nav.sold': { nl: 'Recent verkocht', en: 'Recently sold', de: 'Kürzlich verkauft' },
  'nav.services': { nl: 'Diensten', en: 'Services', de: 'Dienstleistungen' },
  'nav.sell': { nl: 'Uw woning verkopen', en: 'Sell your property', de: 'Ihre Immobilie verkaufen' },
  'nav.valuation': { nl: 'Gratis waardebepaling', en: 'Free valuation', de: 'Kostenlose Bewertung' },
  'nav.register': { nl: 'Inschrijven', en: 'Register', de: 'Anmelden' },
  'nav.about': { nl: 'Over ons', en: 'About us', de: 'Über uns' },
  'nav.contact': { nl: 'Contact', en: 'Contact', de: 'Kontakt' },

  // Hero
  'hero.badge': { nl: 'NVM Makelaar sinds 1979', en: 'NVM Real Estate Agent since 1979', de: 'NVM Immobilienmakler seit 1979' },
  'hero.title1': { nl: 'Uw droomwoning aan de', en: 'Your dream home on the', de: 'Ihr Traumhaus an der' },
  'hero.title2': { nl: 'Walcherse Kust', en: 'Walcheren Coast', de: 'Walcherer Küste' },
  'hero.subtitle': {
    nl: 'Al meer dan 45 jaar uw betrouwbare partner in onroerend goed. Van sfeervolle recreatiewoningen tot karakteristieke dorpshuizen in Zoutelande en omgeving.',
    en: 'Your trusted real estate partner for over 45 years. From charming holiday homes to characteristic village houses in Zoutelande and surroundings.',
    de: 'Ihr vertrauenswürdiger Immobilienpartner seit über 45 Jahren. Von charmanten Ferienhäusern bis zu charakteristischen Dorfhäusern in Zoutelande und Umgebung.',
  },
  'hero.cta1': { nl: 'Bekijk woningaanbod', en: 'View properties', de: 'Immobilien ansehen' },
  'hero.cta2': { nl: 'Gratis waardebepaling', en: 'Free valuation', de: 'Kostenlose Bewertung' },
  'hero.experience': { nl: 'Jaar ervaring', en: 'Years experience', de: 'Jahre Erfahrung' },
  'hero.certified': { nl: 'Gecertificeerd', en: 'Certified', de: 'Zertifiziert' },
  'hero.partner': { nl: 'Partner', en: 'Partner', de: 'Partner' },

  // Sections
  'featured.subtitle': { nl: 'Uitgelicht aanbod', en: 'Featured properties', de: 'Ausgewählte Immobilien' },
  'featured.title': { nl: 'Onze nieuwste woningen', en: 'Our latest properties', de: 'Unsere neuesten Immobilien' },
  'featured.viewAll': { nl: 'Bekijk alle woningen', en: 'View all properties', de: 'Alle Immobilien ansehen' },

  'about.subtitle': { nl: 'Over Roose Makelaardij', en: 'About Roose Makelaardij', de: 'Über Roose Makelaardij' },
  'about.title1': { nl: 'Uw vertrouwde makelaar aan de', en: 'Your trusted agent on the', de: 'Ihr vertrauenswürdiger Makler an der' },
  'about.title2': { nl: 'Zeeuwse kust', en: 'Zeeland coast', de: 'Zeeländischen Küste' },
  'about.p1': {
    nl: 'Bij Roose Makelaardij bent u aan het juiste adres voor een succesvolle en betrouwbare verkoop van uw (recreatie)woning of appartement. Met meer dan 45 jaar ervaring kennen wij de Walcherse kust als geen ander.',
    en: 'At Roose Makelaardij you are at the right address for a successful and reliable sale of your (holiday) home or apartment. With over 45 years of experience, we know the Walcheren coast like no other.',
    de: 'Bei Roose Makelaardij sind Sie an der richtigen Adresse für einen erfolgreichen und zuverlässigen Verkauf Ihrer (Ferien-)Immobilie oder Wohnung. Mit über 45 Jahren Erfahrung kennen wir die Walcherer Küste wie kein anderer.',
  },
  'about.p2': {
    nl: 'Als lid van de NVM en partner van Funda garanderen wij een professionele en transparante dienstverlening. Onze lokale kennis en persoonlijke aanpak maken het verschil.',
    en: 'As a member of the NVM and partner of Funda, we guarantee a professional and transparent service. Our local knowledge and personal approach make the difference.',
    de: 'Als Mitglied der NVM und Partner von Funda garantieren wir einen professionellen und transparenten Service. Unser lokales Wissen und unser persönlicher Ansatz machen den Unterschied.',
  },
  'about.more': { nl: 'Meer over ons', en: 'More about us', de: 'Mehr über uns' },
  'about.usp1': { nl: 'NVM gecertificeerd', en: 'NVM certified', de: 'NVM zertifiziert' },
  'about.usp2': { nl: 'Persoonlijke aanpak', en: 'Personal approach', de: 'Persönlicher Ansatz' },
  'about.usp3': { nl: 'Lokale marktkennis', en: 'Local market knowledge', de: 'Lokale Marktkenntnis' },
  'about.usp4': { nl: 'Funda partner', en: 'Funda partner', de: 'Funda Partner' },

  'services.subtitle': { nl: 'Onze diensten', en: 'Our services', de: 'Unsere Dienstleistungen' },
  'services.title': { nl: 'Wat kunnen wij voor u betekenen?', en: 'What can we do for you?', de: 'Was können wir für Sie tun?' },
  'services.more': { nl: 'Meer informatie', en: 'More information', de: 'Mehr Informationen' },
  'services.sellTitle': { nl: 'Uw woning verkopen', en: 'Sell your property', de: 'Ihre Immobilie verkaufen' },
  'services.sellDesc': {
    nl: 'Wij begeleiden u van A tot Z bij de verkoop van uw woning. Met onze jarenlange ervaring en lokale kennis realiseren wij de beste verkoopprijs.',
    en: 'We guide you from A to Z in selling your property. With our years of experience and local knowledge, we achieve the best selling price.',
    de: 'Wir begleiten Sie von A bis Z beim Verkauf Ihrer Immobilie. Mit unserer langjährigen Erfahrung und lokalen Kenntnis erzielen wir den besten Verkaufspreis.',
  },
  'services.valuationTitle': { nl: 'Gratis waardebepaling', en: 'Free valuation', de: 'Kostenlose Bewertung' },
  'services.valuationDesc': {
    nl: 'Benieuwd naar de waarde van uw woning? Wij maken vrijblijvend een professionele waardebepaling op basis van actuele marktgegevens.',
    en: 'Curious about your property\'s value? We provide a free professional valuation based on current market data.',
    de: 'Neugierig auf den Wert Ihrer Immobilie? Wir erstellen eine kostenlose professionelle Bewertung auf Basis aktueller Marktdaten.',
  },
  'services.searchTitle': { nl: 'Woning zoeken', en: 'Find a property', de: 'Immobilie suchen' },
  'services.searchDesc': {
    nl: 'Op zoek naar uw droomhuis aan de Walcherse Kust? Schrijf u in en ontvang als eerste nieuwe woningen die passen bij uw wensen.',
    en: 'Looking for your dream home on the Walcheren Coast? Register and be the first to receive new properties matching your wishes.',
    de: 'Suchen Sie Ihr Traumhaus an der Walcherer Küste? Melden Sie sich an und erhalten Sie als Erster neue Immobilien, die Ihren Wünschen entsprechen.',
  },

  'stats.sold': { nl: 'Woningen verkocht', en: 'Properties sold', de: 'Immobilien verkauft' },
  'stats.experience': { nl: 'Jaar ervaring', en: 'Years experience', de: 'Jahre Erfahrung' },
  'stats.rating': { nl: 'Klantwaardering', en: 'Client rating', de: 'Kundenbewertung' },
  'stats.locations': { nl: 'Plaatsen actief', en: 'Active locations', de: 'Aktive Standorte' },

  'werkgebied.subtitle': { nl: 'Werkgebied', en: 'Service area', de: 'Einzugsgebiet' },
  'werkgebied.title': { nl: 'Actief aan de Walcherse Kust', en: 'Active on the Walcheren Coast', de: 'Aktiv an der Walcherer Küste' },
  'werkgebied.description': {
    nl: 'Roose Makelaardij is actief in heel Walcheren, met een focus op de prachtige kustdorpen. Ontdek ons aanbod per locatie.',
    en: 'Roose Makelaardij is active throughout Walcheren, with a focus on the beautiful coastal villages. Discover our offerings by location.',
    de: 'Roose Makelaardij ist in ganz Walcheren aktiv, mit Schwerpunkt auf den wunderschönen Küstendörfern. Entdecken Sie unser Angebot nach Standort.',
  },
  'werkgebied.properties': { nl: 'woningen', en: 'properties', de: 'Immobilien' },

  'cta.title': { nl: 'Benieuwd naar de waarde van uw woning?', en: 'Curious about your property\'s value?', de: 'Neugierig auf den Wert Ihrer Immobilie?' },
  'cta.description': {
    nl: 'Vraag een gratis en vrijblijvende waardebepaling aan. Onze experts komen graag bij u langs voor een professionele inschatting.',
    en: 'Request a free and non-binding valuation. Our experts are happy to visit you for a professional assessment.',
    de: 'Fordern Sie eine kostenlose und unverbindliche Bewertung an. Unsere Experten besuchen Sie gerne für eine professionelle Einschätzung.',
  },
  'cta.valuation': { nl: 'Gratis waardebepaling', en: 'Free valuation', de: 'Kostenlose Bewertung' },
  'cta.quickContact': { nl: 'Snel contact', en: 'Quick contact', de: 'Schnellkontakt' },

  // Property
  'property.rooms': { nl: 'kamers', en: 'rooms', de: 'Zimmer' },
  'property.new': { nl: 'Nieuw', en: 'New', de: 'Neu' },
  'property.forSale': { nl: 'Te koop', en: 'For sale', de: 'Zu verkaufen' },
  'property.sold': { nl: 'Verkocht', en: 'Sold', de: 'Verkauft' },
  'property.reserved': { nl: 'Onder bod', en: 'Reserved', de: 'Reserviert' },
  'property.rented': { nl: 'Verhuurd', en: 'Rented', de: 'Vermietet' },

  // Mobile CTA
  'mobile.call': { nl: 'Bellen', en: 'Call', de: 'Anrufen' },
  'mobile.email': { nl: 'E-mailen', en: 'Email', de: 'E-Mail' },

  // Footer
  'footer.rights': { nl: 'Alle rechten voorbehouden.', en: 'All rights reserved.', de: 'Alle Rechte vorbehalten.' },
  'footer.navigation': { nl: 'Navigatie', en: 'Navigation', de: 'Navigation' },
  'footer.services': { nl: 'Diensten', en: 'Services', de: 'Dienstleistungen' },
  'footer.contact': { nl: 'Contact', en: 'Contact', de: 'Kontakt' },
  'footer.hours': { nl: 'Openingstijden', en: 'Opening hours', de: 'Öffnungszeiten' },
  'footer.sellService': { nl: 'Uw woning verkopen', en: 'Sell your property', de: 'Ihre Immobilie verkaufen' },
  'footer.valuationService': { nl: 'Gratis waardebepaling', en: 'Free valuation', de: 'Kostenlose Bewertung' },
  'footer.searchService': { nl: 'Zoekopdracht inschrijven', en: 'Register search', de: 'Suchauftrag anmelden' },
} as const;

export type TranslationKey = keyof typeof translations;

export function t(key: TranslationKey, lang: Lang = defaultLang): string {
  return translations[key]?.[lang] ?? translations[key]?.nl ?? key;
}

export function getLangFromUrl(url: URL): Lang {
  const [, langSegment] = url.pathname.split('/');
  if (langSegment === 'en' || langSegment === 'de') return langSegment;
  return 'nl';
}
