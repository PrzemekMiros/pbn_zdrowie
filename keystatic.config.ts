import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'PrzemekMiros/astro-starter' // WAŻNE: Uzupełnij nazwę swojego repozytorium GitHub (np. jan-kowalski/moj-blog)
  },
  // --- SINGLETONY (Ustawienia  globalne) ---
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

  collections: {

    realizacje: collection({
      label: 'Realizacje',
      slugField: 'title',
      path: 'src/content/realizacje/*',
      media: '/content/realizacje/img/',
      format: { data: 'yaml', contentField: 'content' },
      schema: {
        title: fields.text({ label: 'Tytul realizacji' }),
        description: fields.text({ label: 'Opis', multiline: true }),
        author: fields.text({ label: 'Autor' }),
        client: fields.text({ label: 'Klient' }),
        link: fields.url({ label: 'Link (URL)' }),
        thumbnail: fields.image({
          label: 'Miniatura',
          directory: 'src/content/realizacje/img',
          publicPath: '/content/realizacje/img/',
        }),
        category: fields.array(fields.text({ label: 'Kategoria' }), {
          label: 'Kategorie',
        }),
        order: fields.integer({ label: 'Kolejnosc na liscie' }),
        date: fields.datetime({ label: 'Data' }),
        background: fields.text({
          label: 'Kolor tla (HEX)',
          validation: { isRequired: false },
        }),
        content: fields.markdoc({ label: 'Tresc', extension: 'md' }),
      },
    }),
  },
});
