import type { KinopoiskConfig } from './kinopoisk.interface';

const kinopoiskConfig: KinopoiskConfig = {
  protocol: 'https://',
  url: 'api.kinopoisk.dev/',
  version: 'v1.4/',
  getURL(): string {
    return `${this.protocol}${this.url}${this.version}`;
  }
};

export default kinopoiskConfig;
