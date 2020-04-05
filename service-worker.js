/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2016/06/27/2016-06-27-change_javafx_webview_dropdown_style/index.html","da4776ce985d96cb12c07d71a357e713"],["/2016/12/09/2016-12-09-Add_Sublime_text_to_click_menu/index.html","b9dc9112c6d2aefbc3c5b48e6715a2a7"],["/2017/05/02/2017-05-02-Deploy_docker_on_ESXi/index.html","cb089b295ef6a7a3d9a60f1b2b25660b"],["/2017/07/15/2017-07-15-Install_R_On_MacOS/index.html","7768260b07fac0c68dab1d1b71a9a0eb"],["/2017/10/06/MigrateToHexo/index.html","fbd6d8c75dc3803228ed99a2afff912b"],["/about/index.html","47075af77c2d4c3c3f8126e95814f2cd"],["/archives/2016/06/index.html","3dcf185a89e10e7e2407120e9c27730d"],["/archives/2016/12/index.html","cd85bad0326ce681097c4e9c1c55fbb0"],["/archives/2016/index.html","62102e0d1f5907ec38ca69444037d6dc"],["/archives/2017/05/index.html","2860c5031a00d91fd966ca76f64a06cd"],["/archives/2017/07/index.html","d8a1ef5378462d4fcc07e73291bdfb18"],["/archives/2017/10/index.html","de06f89432056a8a1231e593baf996a1"],["/archives/2017/index.html","7df0fe6f331d3723a89a56b0a8e76ecc"],["/archives/index.html","2f0886c767bb06736423fece51c57a07"],["/categories/Tech/index.html","3d6716eb432a193ce662459ac24cb203"],["/categories/index.html","b38ea72373ef8e26a8b1623b837e5e89"],["/css/main.css","0495c3435712922151518ec0ae1f7d7a"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/icons/android-icon-144x144.png","11c864fe42646b9fc1bb501978663b6b"],["/images/icons/android-icon-192x192.png","072a9061f323635d501e998a9671705a"],["/images/icons/android-icon-36x36.png","efa0521221cf709f351a58a344038f51"],["/images/icons/android-icon-48x48.png","c78557faada660b5664d870808e53bef"],["/images/icons/android-icon-72x72.png","a109548b50f05ab98bdb575bf40ea378"],["/images/icons/android-icon-96x96.png","056de2bdf0b89c0a2be49b3016178f88"],["/images/icons/apple-icon-114x114.png","167733e13bfdad10cceba25a8bd7f59f"],["/images/icons/apple-icon-120x120.png","9c2eb720f5880b7c0d05ded4aa30b4d5"],["/images/icons/apple-icon-144x144.png","11c864fe42646b9fc1bb501978663b6b"],["/images/icons/apple-icon-152x152.png","e802512b4eaff80d756344dade4a6739"],["/images/icons/apple-icon-180x180.png","396da72423b80a55d5763f2761e0f542"],["/images/icons/apple-icon-57x57.png","5fc07a94ace3ecd03d318ce689f297c5"],["/images/icons/apple-icon-60x60.png","b75abec35c8bd0edfde9b6893923ea53"],["/images/icons/apple-icon-72x72.png","a109548b50f05ab98bdb575bf40ea378"],["/images/icons/apple-icon-76x76.png","b21abe0a9e4dc3e6d833329b9b023914"],["/images/icons/apple-icon-precomposed.png","a30846d288f4d97556ea2aecf7705ff7"],["/images/icons/apple-icon.png","a30846d288f4d97556ea2aecf7705ff7"],["/images/icons/favicon-16x16.png","0ff0287903b0dab9bbb9c293b5cb783c"],["/images/icons/favicon-32x32.png","106f61e7fcddaa49454c9bc0ab46d0f9"],["/images/icons/favicon-96x96.png","056de2bdf0b89c0a2be49b3016178f88"],["/images/icons/ms-icon-144x144.png","11c864fe42646b9fc1bb501978663b6b"],["/images/icons/ms-icon-150x150.png","1782d6f4e6d70ea64a48258007e20bde"],["/images/icons/ms-icon-310x310.png","1e6701a01fdaf04d40e8973816f311ac"],["/images/icons/ms-icon-70x70.png","e0a3d45ba5057567a4770de0527cc26f"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/index.html","7929f1beb8b25bdadb888aea4701eca1"],["/js/algolia-search.js","eef725f1fcfecc74f39864dc414f14a1"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","c2ca0fea0b27f456779b7fdbda432b41"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","3e28949cf979b211ee729596d0c5743f"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","a6b493cad5467017b961202302b25c91"],["/js/utils.js","119e6f3f4399cc4eee245338729717fe"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/math/index.html","afef255a30abe8cce83f76be1bd48c68"],["/math/logo192.png","33dbdd0177549353eeeb785d02c294af"],["/math/logo512.png","917515db74ea8d1aee6a246cfbcc0b45"],["/math/precache-manifest.d08b6b0297d02035a3ea5cd41c5cd5e9.js","d08b6b0297d02035a3ea5cd41c5cd5e9"],["/math/service-worker.js","9db08d0605fd1e66e905ef5e1a84ea74"],["/math/static/css/2.43a1c8b7.chunk.css","da985be46ef8bc84aa14527ca3b02968"],["/math/static/css/main.cbfde64a.chunk.css","cf19d43f5e6b9aebfcfedef961288e10"],["/math/static/js/2.f71d1abe.chunk.js","38d6daace9eceb7cdbdbaaa6bbdee755"],["/math/static/js/main.7c5effef.chunk.js","dd946f28ff7e7fe4fa80f410ea5e5a22"],["/math/static/js/runtime-main.c69e6a2a.js","b3430708a65a229867b10858ca075838"],["/math/static/media/roboto-latin-100.5cb7edfc.woff","5cb7edfceb233100075dc9a1e12e8da3"],["/math/static/media/roboto-latin-100.7370c367.woff2","7370c3679472e9560965ff48a4399d0b"],["/math/static/media/roboto-latin-100italic.f8b1df51.woff2","f8b1df51ba843179fa1cc9b53d58127a"],["/math/static/media/roboto-latin-100italic.f9e8e590.woff","f9e8e590b4e0f1ff83469bb2a55b8488"],["/math/static/media/roboto-latin-300.b00849e0.woff","b00849e00f4c2331cddd8ffb44a6720b"],["/math/static/media/roboto-latin-300.ef7c6637.woff2","ef7c6637c68f269a882e73bcb57a7f6a"],["/math/static/media/roboto-latin-300italic.14286f3b.woff2","14286f3ba79c6627433572dfa925202e"],["/math/static/media/roboto-latin-300italic.4df32891.woff","4df32891a5f2f98a363314f595482e08"],["/math/static/media/roboto-latin-400.479970ff.woff2","479970ffb74f2117317f9d24d9e317fe"],["/math/static/media/roboto-latin-400.60fa3c06.woff","60fa3c0614b8fb2f394fa29944c21540"],["/math/static/media/roboto-latin-400italic.51521a2a.woff2","51521a2a8da71e50d871ac6fd2187e87"],["/math/static/media/roboto-latin-400italic.fe65b833.woff","fe65b8335ee19dd944289f9ed3178c78"],["/math/static/media/roboto-latin-500.020c97dc.woff2","020c97dc8e0463259c2f9df929bb0c69"],["/math/static/media/roboto-latin-500.87284894.woff","87284894879f5b1c229cb49c8ff6decc"],["/math/static/media/roboto-latin-500italic.288ad9c6.woff","288ad9c6e8b43cf02443a1f499bdf67e"],["/math/static/media/roboto-latin-500italic.db4a2a23.woff2","db4a2a231f52e497c0191e8966b0ee58"],["/math/static/media/roboto-latin-700.2735a3a6.woff2","2735a3a69b509faf3577afd25bdf552e"],["/math/static/media/roboto-latin-700.adcde98f.woff","adcde98f1d584de52060ad7b16373da3"],["/math/static/media/roboto-latin-700italic.81f57861.woff","81f57861ed4ac74741f5671e1dff2fd9"],["/math/static/media/roboto-latin-700italic.da0e7178.woff2","da0e717829e033a69dec97f1e155ae42"],["/math/static/media/roboto-latin-900.9b3766ef.woff2","9b3766ef4a402ad3fdeef7501a456512"],["/math/static/media/roboto-latin-900.bb1e4dc6.woff","bb1e4dc6333675d11ada2e857e7f95d7"],["/math/static/media/roboto-latin-900italic.28f91510.woff","28f9151055c950874d2c6803a39b425b"],["/math/static/media/roboto-latin-900italic.ebf6d164.woff2","ebf6d1640ccddb99fb49f73c052c55a8"],["/media/dockeresxi.jpg","bc150f2f87472b27c9d9317746c14fe0"],["/media/dockerimages.jpg","10d24e4f2e2fa907cef79ee0139ab677"],["/media/dockerps.jpg","f7f5fee9903d8d4ec21a6ad71a5ee975"],["/tags/Docker/index.html","c36aa5f14c70d029ac4dd5fe63cedb4d"],["/tags/ESXi/index.html","7e9598636aea1ab540222b60910b4fa0"],["/tags/JavaFx/index.html","5e9d769852a7663b4bf82cc503dca5ce"],["/tags/MacOS/index.html","dcbf16e08d4cbd00409c16682a98a1bd"],["/tags/Personal/index.html","e88fd8718d026152b2818119188a932e"],["/tags/R/index.html","a539ceff882c7695a9a4c924503d327f"],["/tags/Sublime/index.html","464171c5b97f9d2a4d9075fec41157cd"],["/tags/Windows/index.html","e8d00ebef14a2be741e00dfabcd6813c"],["/tags/index.html","e9ffc0e9ed6f7c333a154bc7105f9537"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







