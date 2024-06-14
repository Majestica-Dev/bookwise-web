'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5f34eb820654aa1ef231c464628777ed",
"version.json": "728f904fc9f0c8fea32dd7ce509de5ce",
"index.html": "5d60fa063e4244b57f34ade3a6ff4bce",
"/": "5d60fa063e4244b57f34ade3a6ff4bce",
"main.dart.js": "1dd34fa81478b2df161aed3ae828500a",
".well-known/apple-app-site-association": "19009b2cf8512d174fd22107b1228e88",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "8ff4cb129d393ec50ff901fbba3d5a3f",
"icons/Icon-192.png": "cb7410780da2d794c13b0336f3d24eb2",
"icons/Icon-maskable-192.png": "cb7410780da2d794c13b0336f3d24eb2",
"icons/Icon-maskable-512.png": "6bcb6a84f980ef76265dd346422ab65a",
"icons/Icon-512.png": "6bcb6a84f980ef76265dd346422ab65a",
"manifest.json": "a3835343fffba715a464a50907db6b36",
"assets/AssetManifest.json": "650076801f22a1c86250ed64b906352d",
"assets/NOTICES": "1ef2bc7637b535683b90dcf9d7d9ecad",
"assets/FontManifest.json": "dcb7c42d9adfe06133f1ac5d3204d4c2",
"assets/AssetManifest.bin.json": "66a40810efe151bdfaaf8098c27ccecf",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Duotone.ttf": "aad23b975d521339314bdc3ab4d4fbf0",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Fill.ttf": "773ebba095ec3590660722932c6e8500",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor.ttf": "1b9aa14436c86843d7081313d68f2e72",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Light.ttf": "e0bf253dc822f16a3c2a27cc229e03c5",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Bold.ttf": "946de7fd1470d676b40bcb8f3fbffef1",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Thin.ttf": "afd764841ed1ab86e0d8070e83531e68",
"assets/packages/majestica_ds/assets/gamefication/icons/door_shape.svg": "7bdb201e37d0e686a7df76be63bffd34",
"assets/packages/majestica_ds/assets/gamefication/icons/unachieved_circle.svg": "8bb309f34d9bf35e00bc4c68077d5bbf",
"assets/packages/majestica_ds/assets/gamefication/icons/unachieved_shield.svg.svg": "80ed3264ee4e4fa4176ea8a74858cb5c",
"assets/packages/majestica_ds/assets/gamefication/icons/circle_shape.svg": "1e7e16869a8fa33f605c62926eaca37f",
"assets/packages/majestica_ds/assets/gamefication/icons/hexagon_shape.svg": "a3e3e3d0527cdb4959f3410ad1459411",
"assets/packages/majestica_ds/assets/gamefication/icons/unachieved_hexagon.svg": "659abbfe99be62357f6aa4fc53e6c9e5",
"assets/packages/majestica_ds/assets/gamefication/icons/shield_shape.svg": "1e617364b2acf519caef46f130da969e",
"assets/packages/majestica_ds/assets/gamefication/icons/unachieved_door.svg.svg": "741034e7b6f23d942f4eeb85d3fc7368",
"assets/packages/majestica_ds/assets/gamefication/effects/hexagon_blurer.svg": "b7c4ae0ab5f263fae1a4a722c737e566",
"assets/packages/majestica_ds/assets/gamefication/effects/door_blurer.svg": "12cf62865b961403900e0afa5c487c13",
"assets/packages/majestica_ds/assets/gamefication/effects/shield_blurer.svg": "9735818c1cb83d9d956cad9714c4d2d8",
"assets/packages/majestica_ds/assets/gamefication/effects/circle_blurer.svg": "c90ec1c5c5260c6899e95d2b79ca2b3b",
"assets/packages/majestica_ds/assets/gamefication/effects/shine.svg": "0e5886ac350bda343ac91f2cf06cf842",
"assets/packages/majestica_ds/assets/gamefication/effects/shine.png": "2c82150a4b9f2494406404386182a4bf",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "600d99768d53dc2282f2527e0a5491e1",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/app_ilustration.png": "04f45597553cf1037f3cee4868e120c0",
"assets/assets/icons/app_icon.png": "5cf79009406b62beee1fc402fee8ad6e",
"assets/assets/icons/app_icon.svg": "fe683bcf0e71a5f9f1722c999bddc77c",
"assets/assets/fonts/SF-Pro-Text-Regular.otf": "cbfbcf2689b9e77092efb754be49cd18",
"assets/assets/fonts/NewYorkLarge-Regular.otf": "bff39c1675b0ee3aa8b8d71536ba5b30",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
