'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d54b8d027ee6cf6c2c76e6bc41f1a458",
".git/config": "63270d22b1a41ecd2e8142505d043d55",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0f2ea91d45f4802219b8c4fcc6503a66",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "e05aea9f284723e4e434a06a4be9217c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "12989b22962257714e99aa64d0a74502",
".git/logs/refs/heads/master": "917e9686730cdbb12c2009b93db06541",
".git/logs/refs/remotes/origin/master": "4585f6be6345edb66158170a65d41b75",
".git/objects/00/7274255e395845a0e131ea7b7e6a26c078ca7b": "fd9193d566e51c90c62af0fa5bd13f76",
".git/objects/13/a7d815419de7ad2477762e663cfa867ce47057": "0d86427b6be7647d0f2952ce95785f07",
".git/objects/16/e6d3835cdda81eccf6543da07674b325decfd5": "0e7b1eef206154b28bd6d673a149fe9e",
".git/objects/18/cd00434dbeabfa9335571f13f381ab9489d7c3": "e7a0e9859cfc2ca5bba105d45de9dd0d",
".git/objects/19/51282e9f72eb32d352d92f8ac1765d6552a429": "08617287660ad6a402a41dfed92d10ff",
".git/objects/1d/105b94c862a9957bd8ff8a517196e099fa2e6e": "6fc7ce1911647a7b5bc62f5a3baf63af",
".git/objects/28/ed3be9ff5228951d9257cc5b762107e49cc5ae": "147ce182a7e9b6b310e470a7c5d5444f",
".git/objects/2c/5ced4f1fa493a4ba67cf0cf3817b9d06a6208d": "6625d1bd1aba6b91d7d41ec03a939809",
".git/objects/2c/7d73dc5059edb9dffe8242254805d6a34124b3": "194e0d64fa8eb4d58dbcbc6b5e94006b",
".git/objects/2d/95bc4f4dc5c850c61caf106e7e4dcb5f03a31f": "5dc4e8e9fd1a6b60bc26a99650d6853a",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3b/d724a4095860dc3d595aa0523d4974a01be339": "8d7b0b0cc9ce6ee6990306a5caf55935",
".git/objects/3c/dce3feb8ad75fdb9652787220c8392fbb178d1": "4c574ff65f628009fad934895998be9f",
".git/objects/3e/13bbc8eb2ea085a5f2c41e068fea76e2dcf486": "86fbc2a252effcbb7d28db1e5cb3466a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/7f41ae59ed69f50e7f54cfab0ddadeb18f3a5e": "f28bf27df40d83e65d7f09eb85483fbe",
".git/objects/4f/48dab188785e765aab742781913ec493b22e51": "062fcf06df7e28819ba9213d97172b7d",
".git/objects/55/15b001ab9feccf403ff014862ec49fd963ec63": "7c3cffc3cfa73bb57ee21767d1b3ef30",
".git/objects/55/b9306636e92e06986f48ca1b318fce79baeb1e": "2691552550a7f020542186aa0a6d7cf2",
".git/objects/59/0459753792af07f9a7fc2340dd5d4be6c3f009": "2482e7876e9c98055bbe9ec112d71b20",
".git/objects/6f/d64a7dd5df39d76578b6f4444b54a0dddb152c": "16b1a9d866a3d7e9e9c645369db08564",
".git/objects/70/acba7044594a4860137e1432b6f3ff84fbc4eb": "81e099febdec8a59d7679f8a939a362e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/3719d5774e17ed0b87b3d4a6e4fe1c4736bf4a": "cf611bbba1deaa1a9bde6c0da586e14e",
".git/objects/7e/80b469bd32464c0e0d2a8b7889fcb01c58b525": "7e38fefc25ad6a67d0f74e61395f2c85",
".git/objects/7f/c0f3cf1c1018db3bc344f19e744445a95c83d7": "09fb66bdf82418da78de36e51e550278",
".git/objects/86/10a746b58ee9def8e59c34c9dc0d7e9f63e780": "32bd009a131671bd4f9d317944c1f367",
".git/objects/86/3c6b1c0dca25f11f772091a07081a1a41ce551": "b51429c37365228cdcb272d490298382",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/d434a2eba21869774fdea39ea76be29a371ffa": "9546cc4097ad1591ae4272201570807a",
".git/objects/8e/b9067256252617a12a894d851445bdd99ca30c": "fa0a3fb35b52e977c6ed476e198e7306",
".git/objects/91/0a94e2caf172aaaf151b539118b24cf8f26277": "09379079236899bb2c76726f1c8cc3c9",
".git/objects/91/0f4ddec6095a1eaa4593a15f72991dbe30156a": "7578c7be9a8c83744b5dfd983d3a0770",
".git/objects/92/9587843395f95b6aec8b1b8136a3ec29680fa9": "87f4c11e4e85332383e79789415445da",
".git/objects/9d/998fae1cd8cabc12f01f8b3bef7af65b9daf6a": "eff8b56c6aa03e218a2d755cc706c353",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/2cf3d4c2d5ca7dcdede4dca77f127081327868": "1e0dd377a4cb1be47d527c682a3c7d1a",
".git/objects/a6/3c2e769b8c6330b5868bdcfa41b1df3fb1416f": "3608be584c4b7831ac6fd75b6e4801f7",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/9ee7acb8eeacf64632c0ca44cd1fb3debee976": "d8256d578e6a371fae895100cb6ce2ef",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/af/bd8aa32a79ad4e3a64e403488da08126a3b4b4": "2933a42c22a0cf4b701ccf6f0c4d17ad",
".git/objects/b2/5c96b1394e0c955f0b89da6edbc1dc9d166090": "8bbc668b4d2f385f9235b1300985d13a",
".git/objects/b5/fd6e1f018b102b8c241a39ebf13dd72f93c5aa": "465f6444dad1f18b9a8a969890dfe420",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/8b0cd30e39a14c2873a3824d7d804ba2ceb784": "6d56b37bade35bc18674a32a3cf6773a",
".git/objects/ba/1cab0aed9bd644739e8080df9422528e05210e": "c8de62fefe2409a0f7482e0dea27e1e9",
".git/objects/bb/def7a27a094adad0b8ec69acc44cea84b310d6": "c4a9d90cd28334a21dc7e2d6c5bf750f",
".git/objects/c5/6c1a054084815835b6dcc6600c981959c29cc9": "a01cb4954734323d79bce1a4d1e3fe66",
".git/objects/c6/fc20c9cca8263428db952a1ae0d5b6e48fee5a": "81612764f66637b0ed35b1fa38995461",
".git/objects/c9/75b88e42ae9cce689c895d14f31019f6974c49": "1a91c39db9688784dc03c8117c85f1d4",
".git/objects/ca/e86bff5f018ea5a264b26d9470c9ef710e2f1d": "a44d5f19674a2fca2626f7a86657b983",
".git/objects/d2/c7d4c6a6ab66e517dd6ada84c729abdcf787db": "1c76a9ef80f2a32d13c065ad7d8853f4",
".git/objects/d6/b2a7d283abd40435961a695c0fca6cbd00355b": "a106d97d8fc2683ea6441d0427da93db",
".git/objects/e3/ee5607a99c5778772f83f3373e625be1dcc73a": "87677191eb2275a00e8739726877c8cc",
".git/objects/e4/6b7c447c7f1dc40e4107b929324a77cc9e2fbc": "dc655e2008ac32c7d22531d67ea68768",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/42763cb0b0cec39415a02a5ede8c1d383d69aa": "9fb5bd09d09b65464c63fe611c55bcc4",
".git/objects/e9/9a29a1f71bef40b03746731d3ccf667f5b10d6": "472cef0de411ab03b91c01a10f076e01",
".git/objects/ed/e50fde57ff4d261455ee0c564fc433724d9b71": "21f370814e11d2d8b77e151695350963",
".git/objects/f0/c86be311d5578738895308888576367e7b03cb": "ab3b37d863807c68b800dde6e15613f4",
".git/objects/f6/ba477415f08f100eb1cc7beec6c517e1551844": "aa0d9808014a3350928eb58b97936859",
".git/objects/fc/51ef7fccf634d23cdc672715a23f68c8eadac4": "a8dc5a88b3b02683cdb2d2a59d9efd56",
".git/objects/ff/f73f9ed564578ce4394714e21a4bfb636a5e1d": "669ec1d91f3c2b87a323b314b5dc64a1",
".git/refs/heads/master": "81f8bcea7bf073311ea389a4cd286bb6",
".git/refs/remotes/origin/master": "81f8bcea7bf073311ea389a4cd286bb6",
"assets/AssetManifest.json": "1bf0231f78454021548a7ef5912fb753",
"assets/assets/images/banner-horseracing.jpg": "5443439a4dd5733f63a52d8e33ac93c1",
"assets/assets/images/Racing_Background.jpg": "e5eb30a37f0ca3f4f50ace920e72d2da",
"assets/assets/images/temp_banner.jpg": "482af76fc493a49299a14dd78e449773",
"assets/assets/images/temp_logo.jpg": "d6a5c5359e811f56b57a762a4d17554d",
"assets/data/race_details_2021-10-24.json": "794438b5dfa6f8035041ad529dce3c39",
"assets/data/race_details_2021-10-27.json": "37c52c8e8fe203c9d5ead9ad2cd1cd16",
"assets/data/race_details_2021-10-31.json": "8af99d32bc68595df226525aed90b9d4",
"assets/data/race_details_2021-11-03.json": "a050555d12b097cd2e3b8f1af9b68d5a",
"assets/data/race_details_2021-11-07.json": "f0fc87c9d55640457051322ab1cdcb5b",
"assets/data/race_details_2021-11-10.json": "37b045d9a66ca99ecdb4422ce1d65674",
"assets/data/race_details_2021-11-13.json": "c1912dfd0928f830fcfe902669159291",
"assets/data/race_details_2021-11-17.json": "6e1238a92ea5da4c8aa083717f135908",
"assets/data/race_prediction_2021-09-08.json": "efbdb13153321462ff627326e176e8e1",
"assets/data/race_prediction_2021-09-12.json": "6f09388d3c66c10bba3a5e93dbe25fb6",
"assets/data/race_prediction_2021-09-15.json": "444ac15407dc6b86fe3dbd347630fe62",
"assets/data/race_prediction_2021-09-19.json": "7a8448ddf633e4a5115b9e85a2f0560e",
"assets/data/race_prediction_2021-10-01.json": "d1370236492186f5eae371ac793b67a3",
"assets/data/race_prediction_2021-10-10.json": "318097b701656e0f1fa90eacd11c95d9",
"assets/data/race_prediction_2021-10-17.json": "a0ac5e2520f66bea198b2cf50db098dc",
"assets/data/race_prediction_2021-10-20.json": "8655a3cc62826282fbf65afd01d409c6",
"assets/data/race_prediction_2021-10-23.json": "41d6c27c12989c2f336e404c953648cd",
"assets/data/race_prediction_2021-10-24.json": "bb933787bb0bd5cbde7fbedd36f040ae",
"assets/data/race_prediction_2021-10-27.json": "15a5b3c470ad5b403fd0b6a40539a1e8",
"assets/data/race_prediction_2021-10-31.json": "ce39295e5a8298a88b4b077821204983",
"assets/data/race_prediction_2021-11-03.json": "904ecbadab04556997b56ebd9839d436",
"assets/data/race_prediction_2021-11-07.json": "03e5d0636ebaf1a262facab1b17487b6",
"assets/data/race_prediction_2021-11-10.json": "b3e977657ed9336a8106e7aa2b238c12",
"assets/data/race_prediction_2021-11-13.json": "5a39b55b09ff96fd2b9f26a400478f17",
"assets/data/race_prediction_2021-11-17.json": "b6e1d5bc59391b24f45c86edf6fcb385",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/banner-horseracing.jpg": "5443439a4dd5733f63a52d8e33ac93c1",
"assets/images/Racing_Background.jpg": "e5eb30a37f0ca3f4f50ace920e72d2da",
"assets/images/temp_banner.jpg": "482af76fc493a49299a14dd78e449773",
"assets/images/temp_logo.jpg": "d6a5c5359e811f56b57a762a4d17554d",
"assets/NOTICES": "0dbb3075bca210ecd556b00d1abf4e58",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.ico": "47305c21af63eb47d148c80a6ccffcb5",
"icons/favicon-16x16.png": "ad0b77c7d14d0e16fd5e4cb16d1bb351",
"icons/favicon-32x32.png": "ef391293a07ef5972640d64568a173fd",
"icons/favicon-96x96.png": "ebfb7848fae6559e69d250361bc691b5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/ms-icon-144x144.png": "77770bce16b7cda3be99aa22c591363f",
"index.html": "8d6cc2c6103fa40ab96c1c2d28f10e4a",
"/": "8d6cc2c6103fa40ab96c1c2d28f10e4a",
"main.dart.js": "edace779e96cfc1e1953ee21a63019a3",
"manifest.json": "187fbe2a9ebbba9cdc414f4dc7dac188",
"version.json": "ebfd7652ce89ed8d95f88448879580e2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
