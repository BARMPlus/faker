import { Faker } from '..';
import tr from '../locales/tr';
import en from '../locales/en';

const faker = new Faker({
  locale: 'tr',
  localeFallback: 'en',
  locales: {
    tr,
    en,
  },
});

export = faker;
