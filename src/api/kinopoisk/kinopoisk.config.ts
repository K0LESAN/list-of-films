import type { KinopoiskConfig } from './kinopoisk.interface';

export const kinopoiskConfig: KinopoiskConfig = {
  protocol: 'https://',
  url: 'api.kinopoisk.dev/',
  version: 'v1.4/',
  getURL(): string {
    return `${this.protocol}${this.url}${this.version}`;
  }
};
