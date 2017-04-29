import * as U from 'karet.util';
import * as L from 'partial.lenses';

const store = U.atom();

const state = U.view(L.define({}), store);

store.log('store');
state.log('state');

state.modify(L.set(['foo', 'bar'], 1));
