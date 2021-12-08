'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "568b4671a9db81e565b1eb44664ef356",
".git/config": "f662fedf74e1fd9aa141c754f7162cfd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4a00db67264f62bcb521565011d5566a",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f893ed5c6c130fccbba8f636df1e69a8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a358645fe300621f31db645b036e51a2",
".git/logs/refs/heads/master": "a358645fe300621f31db645b036e51a2",
".git/logs/refs/remotes/origin/HEAD": "031280bb8466e6d8506cd83e0a0789ca",
".git/logs/refs/remotes/origin/master": "fd014662068375224ee8ecce9eba2abf",
".git/objects/00/1d8a8999b6e984d0ef316b5a1222dfc7024ed8": "f34d92baa031ef3f9f9416e7367e8286",
".git/objects/03/2d2a73d586fce9796d278504e6c15e34e0e28d": "ce8cd9ef3b09e8e5fa56ba21452cbfde",
".git/objects/08/929ee5f31b6fab492fdc5c7eea2d66591e71a4": "6189449420ae2f31d6a60cc3ba55e9c7",
".git/objects/0c/51bea6d20f7bdba336e67f622b0439094d19b3": "0ea32b3bb68a0d018849dfba8ba888ca",
".git/objects/17/2db0bda1888ebecb78ebd8aa5d00bddf1dd972": "655b6b6cee412b65841c864138ab9f41",
".git/objects/1c/a098f33ce04bd615170d800f2b698142e731b5": "3637116d92062094d58bd5e2d7a2c94f",
".git/objects/30/1baa1f8efa4578a4bcce7e6d4662a251c26e06": "2c7092697e07ca034657ef20b2858ad6",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/39/6c683681f45958cf60317299f499ab542a1f49": "1dd7a65c7720a2517724f9a8f7cbe70f",
".git/objects/3b/8756295b194e4d97a4d9852cff073b5a09bf1f": "03370795e71505883024050c96702110",
".git/objects/3d/6544254eb1041bcca5d31314c5bef7c2422696": "d0018d22f8b7f184293d9f51bf3d499a",
".git/objects/4d/aff25573f16d4b5022152e93a34856435fa457": "90c847f60c34869ff95137b0b209f202",
".git/objects/5d/9e6098bbf47dc4049872ab923be459aeb23370": "c293a8e9c647f3190724ebbde0213c61",
".git/objects/64/22f1e49f4c0914c97a21043b15326a1235e49c": "6d9a2e12082b5f8fb1dc24904c844b5f",
".git/objects/69/9b6df379404156fc633d8a6d5b9837781e03ce": "012899ef7c865bc6d040018bdad1f619",
".git/objects/6b/84da309ede5835f702ee952ff004970b6768e7": "8aa42288efb9c6773a869fa928e47573",
".git/objects/75/6bab34554e0b832c2f40791f2bbb402509bc4c": "d03186455bcac7df63e77c125fe7fdf5",
".git/objects/77/7c3ee1958d3f645b567380daa46095c4ec3fd0": "8ed386cb8564da6b719ff062baff9d91",
".git/objects/7a/37e063675df28d6e45d16abc20e14eb3ecfa3d": "dd90336142f230d1593d0b1616aef14f",
".git/objects/7d/2d189db29e5d251c1f4d0417c71e08ac0a707b": "c9e223608a659847199a2b867de1b570",
".git/objects/7f/5d79822e08b8f4e473602e02ceb5daef2ca5fa": "f7180716da9cef3c8b109c027ef7f5ab",
".git/objects/88/e610af77b0f760408df4b07dda29336843ec3e": "a5d4bcdedab5bf289194aa83782d50b8",
".git/objects/89/610ef6b499ee489edb241fd5f7defe2509f25e": "9310cdc9195037e49a446b80753323ee",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/94/c71d94ac6d6e65b8dc6c1495d2b2f0b2904da0": "3965abe3a051631027cfc3993c9417b3",
".git/objects/97/615e65b9d564e301fe2288e68a085b7c1d8b89": "41cb9d8abc0e8d1d7106af732c434af4",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/a5/55db11cd1687ce8f64547148c8544a094fd2af": "43164718c28f241dca30b2d8bbf66649",
".git/objects/a7/46f38d5cc346c14547b7ea048f3907f0ebbc5f": "6c02b111dc3277b3330d949b61a3a457",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/b9/f6090b6271e74604240ed6a5b6976228730fb5": "7cce5d66a2b88c38fa09ffad4d61863f",
".git/objects/be/902578033651ff76344b526bc87a8cc16a25b5": "ec7704d6b67879f0b8d3e553a4571163",
".git/objects/c0/afe6a8be3da3af25f2bc7c2f1cb11e8c6065c3": "9d6a7a20bffa67ffba25d6e89ac09089",
".git/objects/c2/e65541a54cdf375de8108a0f2bc5ae71c68ba3": "21c45dfb5528ee18927f6c80150afe5c",
".git/objects/c9/030a7b3969fee7ff028f7dc719b9dc790f5814": "75e1b3bca45513bdd5d4e98abcd27a3d",
".git/objects/ca/0e52a0a0a2554147d9663e30bccf592464f1a0": "0518ca9c8cfdf1d4a15a6f1f8f661bfc",
".git/objects/cc/1c919ab93ae16604e31599d9dd8e463691e958": "14700fc76c5f2240f36e9b87a053d59a",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/da/b85ea6558969048190a9b922630e9a0ba35bfb": "7809ecdf04c53c212ae195874b0ae46c",
".git/objects/e2/5a4c04cec834cf4ef2f5510f2bbf8846b05e8c": "5add7ed014a18a113045997119917657",
".git/objects/e5/86e0f02015fcd92f9a99653f1f5985571eceb3": "485dea9eca35bd99bb2deec8f4685a69",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/ed/fb245d548668cd43605381608b85af2bca3364": "5fbdec18ae57732e81448e5ebbf50b4f",
".git/objects/f0/093fce6816afd2909f8d288bf43452efdb3737": "cfafcda3eb479cb8fd5c53ef327decab",
".git/objects/fd/3ec9f18426409fcf494be946cd19516c148672": "7d4e45c29f44168cc74367d969cc87ba",
".git/objects/pack/pack-4a37791e4f81bac1df0852dc3b58dd873e437a58.idx": "d3bdc8062cc436790e6086bf98235658",
".git/objects/pack/pack-4a37791e4f81bac1df0852dc3b58dd873e437a58.pack": "f00bab3f3290212c1b6ab00bfeaf7800",
".git/packed-refs": "208bbbdbc45dad182effe8cc3c195ab7",
".git/refs/heads/master": "c0a1f4c2e951c8e828ee1666b2beb682",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "c0a1f4c2e951c8e828ee1666b2beb682",
"assets/AssetManifest.json": "58c9c5f9873eee5880e895047fd7c6a7",
"assets/assets/images/banner-horseracing.jpg": "5443439a4dd5733f63a52d8e33ac93c1",
"assets/assets/images/Racing_Background.jpg": "e5eb30a37f0ca3f4f50ace920e72d2da",
"assets/assets/images/templogo.jpg": "d6a5c5359e811f56b57a762a4d17554d",
"assets/assets/images/temp_banner.jpg": "482af76fc493a49299a14dd78e449773",
"assets/data/race_details.json": "1da62f987d6c74a0477ad6c37ce7be67",
"assets/data/race_prediction.json": "19b9d8ec73c4d4f9ada13fc8df07fee5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/banner-horseracing.jpg": "5443439a4dd5733f63a52d8e33ac93c1",
"assets/images/Racing_Background.jpg": "e5eb30a37f0ca3f4f50ace920e72d2da",
"assets/images/temp_banner.jpg": "482af76fc493a49299a14dd78e449773",
"assets/images/temp_logo.jpg": "d6a5c5359e811f56b57a762a4d17554d",
"assets/NOTICES": "38415168494d59bf9d4143e051425240",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.ico": "47305c21af63eb47d148c80a6ccffcb5",
"icons/favicon-16x16.png": "ad0b77c7d14d0e16fd5e4cb16d1bb351",
"icons/favicon-32x32.png": "ef391293a07ef5972640d64568a173fd",
"icons/favicon-96x96.png": "ebfb7848fae6559e69d250361bc691b5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/ms-icon-144x144.png": "77770bce16b7cda3be99aa22c591363f",
"index.html": "4aa58b8ae55015fcf9c25241d1e3717b",
"/": "4aa58b8ae55015fcf9c25241d1e3717b",
"main.dart.js": "f9fc5855f69e7830c8b7cfb7212d0595",
"manifest.json": "187fbe2a9ebbba9cdc414f4dc7dac188",
"version.json": "6fdddf62c0b8e5f990110360d16f4b61"
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
