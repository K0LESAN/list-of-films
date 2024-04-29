import type { IKinopoiskConfig } from './kinopoisk.interface';

const kinopoiskConfig: IKinopoiskConfig = {
  protocol: 'https://',
  url: 'api.kinopoisk.dev/',
  version: 'v1.4/',
  getURL(): string {
    return `${this.protocol}${this.url}${this.version}`;
  }
};

export default kinopoiskConfig;
