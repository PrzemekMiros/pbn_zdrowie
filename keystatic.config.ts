import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local', // Zmień na 'github' przy wdrożeniu online
  },
  // --- SINGLETONY (Ustawienia globalne) ---
  singletons: {
    ustawienia: singleton({
      label: 'Ustawienia strony',
      path: 'src/content/ustawienia',
      format: { data: 'json' },
      schema: {
        siteTitle: fields.text({ 
          label: 'Tytuł strony (SEO)',
          description: 'Pojawia się na pasku przeglądarki i w Google'
        }),
        metaDescription: fields.text({ 
          label: 'Meta opis strony', 
          multiline: true,
          description: 'Krótki opis witryny dla wyszukiwarek (zalecane do 160 znaków)'
        }),
        logo: fields.image({
          label: 'Logo strony',
          directory: 'src/assets/images/global',
          publicPath: '/assets/images/global/',
        }),
        favicon: fields.image({
          label: 'Favicon (ikona strony)',
          directory: 'src/assets/images/global',
          publicPath: '/assets/images/global/',
        }),
        footerText: fields.text({ 
          label: 'Tekst w stopce', 
          multiline: true 
        }),
      },
    }),
  },

  // --- KOLEKCJE (Twoje dotychczasowe osobistości) ---
  collections: {
    opinie: collection({
      label: 'Opinie',
      slugField: 'slug',
      path: 'src/content/opinie/*',
      format: { data: 'json' },
      schema: {
        slug: fields.slug({ name: { label: 'Nazwa klienta' } }),
        name: fields.text({ label: 'Imie i nazwisko / Firma' }),
        role: fields.text({
          label: 'Stanowisko / Rola',
          validation: { isRequired: false },
        }),
        quote: fields.text({ label: 'Opinia', multiline: true }),
        order: fields.integer({
          label: 'Kolejnosc na liscie',
          validation: { isRequired: false },
        }),
      },
    }),
    osobistosci: collection({
      label: 'Osobistości',
      slugField: 'tytul_wpisu',
      path: 'src/content/osobistosci/*',
      format: { data: 'json' },
      schema: {
        tytul_wpisu: fields.slug({ name: { label: 'Imię i Nazwisko (Tytuł)' } }),
        zdjecie: fields.image({
          label: 'Zdjęcie profilowe',
          directory: 'src/assets/images/osobistosci',
          publicPath: '/assets/images/osobistosci/',
        }),
        tytul_naukowy: fields.text({ label: 'Funkcja zawodowa / Tytuł naukowy' }),
        stanowisko: fields.text({ label: 'Stanowisko i instytucja', multiline: true }),
        biografia: fields.text({ label: 'Biografia zawodowa', multiline: true }),
        osiagniecia: fields.text({ label: 'Najważniejsze osiągnięcia', multiline: true }),
        wklad_branza: fields.text({ label: 'Wkład w rozwój branży', multiline: true }),
        motto: fields.text({ label: 'Ulubione motto lub cytat' }),
      },
    }),
    realizacje: collection({
      label: 'Realizacje',
      slugField: 'title',
      path: 'src/content/realizacje/*',
      format: { data: 'yaml', contentField: 'content' },
      schema: {
        title: fields.text({ label: 'Tytul realizacji' }),
        description: fields.text({ label: 'Opis', multiline: true }),
        author: fields.text({ label: 'Autor' }),
        client: fields.text({ label: 'Klient' }),
        link: fields.url({ label: 'Link (URL)' }),
        thumbnail: fields.text({ label: 'Miniatura (sciezka)' }),
        imageMain: fields.text({ label: 'Obraz glowny (sciezka)' }),
        imageGridOne: fields.text({
          label: 'Obraz siatki 1 (sciezka)',
          validation: { isRequired: false },
        }),
        imageGridTwo: fields.text({
          label: 'Obraz siatki 2 (sciezka)',
          validation: { isRequired: false },
        }),
        imageMobile: fields.text({
          label: 'Obraz mobile (sciezka)',
          validation: { isRequired: false },
        }),
        category: fields.array(fields.text({ label: 'Kategoria' }), {
          label: 'Kategorie',
        }),
        order: fields.integer({ label: 'Kolejnosc na liscie' }),
        date: fields.datetime({ label: 'Data' }),
        content: fields.markdoc({ label: 'Tresc', extension: 'md' }),
      },
    }),
  },
});
