import { Page } from '@core/models/page';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pages: Page[] = [
      { param: 'page-one', name: 'Page 1', content: 'Page 1 content...' },
      { param: 'page-two', name: 'Page 2', content: 'Page 2 content...' }
    ];
    return { pages };
  }
}
