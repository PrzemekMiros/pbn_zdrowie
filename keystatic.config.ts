import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: { kind: 'local' },

  collections: {
    artykuly: collection({
      label: 'Artykuły',
      path: 'src/content/artykuly/*',
      slugField: 'slug',
      format: { contentField: 'body', contentExtension: '.md' },
      schema: {
        slug: fields.slug({ name: { label: 'Tytuł' } }),
        title: fields.text({ label: 'Tytuł' }),
        description: fields.text({ label: 'Opis', multiline: true, optional: true }),
        author: fields.text({ label: 'Autor', optional: true }),
        date: fields.date({ label: 'Data' }),
        tags: fields.array(fields.text({ label: 'Tag' }), { label: 'Tagi', optional: true }),
        category: fields.array(fields.text({ label: 'Kategoria' }), { label: 'Kategorie', optional: true }),
        thumbnail: fields.text({ label: 'Thumbnail', optional: true }),
        tileImage: fields.text({ label: 'Tile image', optional: true }),
        imageMain: fields.text({ label: 'Image main', optional: true }),
        background: fields.text({ label: 'Background', optional: true }),
        tileBg: fields.text({ label: 'Tile background', optional: true }),
        robots: fields.text({ label: 'Robots', optional: true }),
        order: fields.integer({ label: 'Kolejność', optional: true }),
        body: fields.markdoc({ label: 'Treść', extension: 'md' }),
      },
    }),

    realizacje: collection({
      label: 'Realizacje',
      path: 'src/content/realizacje/*',
      slugField: 'slug',
      format: { contentField: 'body', contentExtension: '.md' },
      schema: {
        slug: fields.slug({ name: { label: 'Tytuł' } }),
        title: fields.text({ label: 'Tytuł' }),
        description: fields.text({ label: 'Opis', multiline: true, optional: true }),
        author: fields.text({ label: 'Autor', optional: true }),
        client: fields.text({ label: 'Klient', optional: true }),
        category: fields.array(fields.text({ label: 'Kategoria' }), { label: 'Kategorie', optional: true }),
        link: fields.text({ label: 'Link', optional: true }),
        thumbnail: fields.text({ label: 'Thumbnail', optional: true }),
        tileImage: fields.text({ label: 'Tile image', optional: true }),
        imageMain: fields.text({ label: 'Image main', optional: true }),
        background: fields.text({ label: 'Background', optional: true }),
        tileBg: fields.text({ label: 'Tile background', optional: true }),
        robots: fields.text({ label: 'Robots', optional: true }),
        order: fields.integer({ label: 'Kolejność', optional: true }),
        date: fields.date({ label: 'Data' }),
        body: fields.markdoc({ label: 'Treść', extension: 'md' }),
      },
    }),

    miasta: collection({
      label: 'Miasta',
      path: 'src/content/miasta/*',
      slugField: 'slug',
      format: { contentField: 'body', contentExtension: '.md' },
      schema: {
        slug: fields.slug({ name: { label: 'Miasto' } }),
        town: fields.text({ label: 'Miasto' }),
        title: fields.text({ label: 'Tytuł' }),
        description: fields.text({ label: 'Opis', multiline: true }),
        maplink: fields.text({ label: 'Map link', multiline: true }),
        body: fields.markdoc({ label: 'Treść', extension: 'md' }),
      },
    }),

    faq: collection({
      label: 'FAQ',
      path: 'src/content/faq/*',
      slugField: 'slug',
      format: { contentField: 'body', contentExtension: '.md' },
      schema: {
        slug: fields.slug({ name: { label: 'Pytanie' } }),
        title: fields.text({ label: 'Pytanie' }),
        answer: fields.text({ label: 'Odpowiedź', multiline: true }),
        body: fields.markdoc({ label: 'Treść (opcjonalnie)', extension: 'md' }),
      },
    }),

    opinie: collection({
      label: 'Opinie',
      path: 'src/content/opinie/*',
      slugField: 'title',
      format: { contentField: 'body' },
      schema: {
        title: fields.slug({ name: { label: 'Autor' } }),
        client: fields.text({ label: 'Klient', optional: true }),
        industry: fields.text({ label: 'Branża', optional: true }),
        review: fields.text({ label: 'Opinia', multiline: true }),
        clientlogo: fields.text({ label: 'Logo', optional: true }),
        clientavatar: fields.text({ label: 'Avatar', optional: true }),
        addate: fields.text({ label: 'Data dodania', optional: true }),
        order: fields.integer({ label: 'Kolejność', optional: true }),
        body: fields.emptyContent({ extension: 'md' }),
      },
    }),

    klienci: collection({
      label: 'Klienci',
      path: 'src/content/klienci/*',
      slugField: 'slug',
      format: { contentField: 'body', contentExtension: '.md' },
      schema: {
        slug: fields.slug({ name: { label: 'Nazwa klienta' } }),
        title: fields.text({ label: 'Nazwa klienta' }),
        logo: fields.text({ label: 'Logo', optional: true }),
        body: fields.markdoc({ label: 'Treść (opcjonalnie)', extension: 'md' }),
      },
    }),
  },
});
