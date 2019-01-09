import fetch from 'js/fetch';

export default class Mod {
    constructor() {
        console.log(fetch);
    }
    doThing() {
        fetch()
            .then(() => console.log('yes'))
            .catch(() => console.log('no'));
    }
}