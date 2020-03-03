import { expect } from 'chai';
import { Client } from '../src';

describe('Client', () => {
    it('can execute', () => {
        const c = new Client();
        c.execute();
    })
})