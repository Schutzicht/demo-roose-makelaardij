export const siteConfig = {
  name: 'Roose Makelaardij o.g.',
  shortName: 'Roose Makelaardij',
  tagline: 'Al meer dan 45 jaar uw onroerendgoed adviseur voor de Walcherse Kust',
  description: 'Makelaar in Zoutelande - Roose Makelaardij is al meer dan 45 jaar uw betrouwbare NVM-makelaar voor de Walcherse Kust. Gespecialiseerd in (recreatie)woningen.',
  url: 'https://www.roosemakelaardij.nl',

  contact: {
    address: 'Langendam 43',
    postalCode: '4374 AB',
    city: 'Zoutelande',
    country: 'Nederland',
    phone: '0118-561675',
    email: 'info@roosemakelaardij.nl',
    coordinates: { lat: 51.502679, lng: 3.488737 },
  },

  business: {
    btw: 'NL8038.55.497.B01',
    kvk: '22037543',
    nvm: true,
    funda: true,
    yearsExperience: 45,
    founded: 1979,
  },

  openingHours: [
    { day: 'Maandag', hours: '09:00 - 17:00' },
    { day: 'Dinsdag', hours: '09:00 - 17:00' },
    { day: 'Woensdag', hours: '09:00 - 17:00' },
    { day: 'Donderdag', hours: '09:00 - 17:00' },
    { day: 'Vrijdag', hours: '09:00 - 17:00' },
    { day: 'Zaterdag', hours: 'Op afspraak' },
    { day: 'Zondag', hours: 'Gesloten' },
  ],

  social: {
    facebook: 'https://www.facebook.com/roosemakelaardij68',
    linkedin: 'https://nl.linkedin.com/in/ronald-roose-922368a5',
    twitter: 'https://twitter.com/ronaldroose',
  },

  werkgebied: [
    'Zoutelande',
    'Westkapelle',
    'Biggekerke',
    'Oostkapelle',
    'Meliskerke',
    'Middelburg',
    'Vlissingen',
    'Oost-Souburg',
  ],

  navigation: [
    { label: 'Home', href: '/' },
    {
      label: 'Woningaanbod',
      href: '/aanbod/',
      children: [
        { label: 'Alle woningen', href: '/aanbod/' },
        { label: 'Recreatiewoningen', href: '/aanbod/?categorie=recreatie' },
        { label: 'Nieuwbouw', href: '/aanbod/?categorie=nieuwbouw' },
        { label: 'Vakantieverhuur', href: '/vakantieverhuur/' },
      ],
    },
    { label: 'Recent verkocht', href: '/verkocht/' },
    {
      label: 'Diensten',
      href: '/diensten/',
      children: [
        { label: 'Uw woning verkopen', href: '/diensten/verkopen/' },
        { label: 'Gratis waardebepaling', href: '/diensten/waardebepaling/' },
        { label: 'Inschrijven', href: '/diensten/inschrijven/' },
      ],
    },
    {
      label: 'Over ons',
      href: '/over-ons/',
    },
    { label: 'Contact', href: '/contact/' },
  ],
} as const;
