# Mapcar [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Dependency Status][DependencyStatusIMGURL]][DependencyStatusURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL]

Mapcar applies function `fn` to elements of lists with same index.

Each application result is put into resulting `list`.

Length of resulting list is the length of the shortest list argument.

Came from [lisp](http://jtra.cz/stuff/lisp/sclr/mapcar.html).

## Install

```
npm i mapcar --save
bower i mapcar --save
```

## How to use?

```js
mapcar(sum, [1,2,3,4], [1,2]));

// results [2,4]

function sum(array) {
    return array.reduce(function(value, item) {
        return value + item,
    }, 0);
}

```

## License

MIT

[NPMIMGURL]:                https://img.shields.io/npm/v/mapcar.svg?style=flat
[BuildStatusIMGURL]:        https://img.shields.io/travis/coderaiser/mapcar/master.svg?style=flat
[DependencyStatusIMGURL]:   https://img.shields.io/gemnasium/coderaiser/mapcar.svg?style=flat
[LicenseIMGURL]:            https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat
[NPMURL]:                   https://npmjs.org/package/mapcar "npm"
[BuildStatusURL]:           https://travis-ci.org/coderaiser/mapcar  "Build Status"
[DependencyStatusURL]:      https://gemnasium.com/coderaiser/mapcar "Dependency Status"
[LicenseURL]:               https://tldrlegal.com/license/mit-license "MIT License"

