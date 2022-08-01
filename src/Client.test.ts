import { Client } from './Client';

describe('Client', () => {
  it('can execute', () => {
    const c = new Client();
    c.execute();
  });
});
