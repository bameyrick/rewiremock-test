import rewiremock from 'rewiremock/webpack';

import promiseInstanceMock from './promise.stub.spec';
import fetchMock from './fetch.stub.spec';

const rewireMock = rewiremock.default;

describe('Tests', () => {
    it('should mock fetch', () => {
        const promiseInstance = promiseInstanceMock();
        const mockedFetch = fetchMock(promiseInstance);
        
        rewireMock('./js/fetch')
            .withDefault(mockedFetch);

        rewireMock.enable();

        const mod = require('../js/module').default;
        const mockedMod = new mod();

        mockedMod.doThing();

        expect(mockedFetch).to.be.spy;
        expect(mockedFetch).to.have.been.called();
    });
});