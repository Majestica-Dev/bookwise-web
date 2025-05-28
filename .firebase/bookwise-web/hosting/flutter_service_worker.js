'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6d42650949e56c2fb3a5c1f658dc9575",
"version.json": "728f904fc9f0c8fea32dd7ce509de5ce",
"index.html": "1af8670ec62fe8bd64ea0e6f0046eef0",
"/": "1af8670ec62fe8bd64ea0e6f0046eef0",
"main.dart.js": "6ba5f58500508eae83010db5168e97d7",
".well-known/apple-app-site-association": "a00af3400c1271dcd17fc93f747dd53d",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "8ff4cb129d393ec50ff901fbba3d5a3f",
"icons/Icon-192.png": "cb7410780da2d794c13b0336f3d24eb2",
"icons/Icon-maskable-192.png": "cb7410780da2d794c13b0336f3d24eb2",
"icons/Icon-maskable-512.png": "6bcb6a84f980ef76265dd346422ab65a",
"icons/Icon-512.png": "6bcb6a84f980ef76265dd346422ab65a",
"manifest.json": "a3835343fffba715a464a50907db6b36",
"assets/AssetManifest.json": "650076801f22a1c86250ed64b906352d",
"assets/NOTICES": "dec05b092503448b58e38f1683c5e6be",
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
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/assets/images/app_ilustration.png": "04f45597553cf1037f3cee4868e120c0",
"assets/assets/icons/app_icon.png": "5cf79009406b62beee1fc402fee8ad6e",
"assets/assets/icons/app_icon.svg": "fe683bcf0e71a5f9f1722c999bddc77c",
"assets/assets/fonts/SF-Pro-Text-Regular.otf": "cbfbcf2689b9e77092efb754be49cd18",
"assets/assets/fonts/NewYorkLarge-Regular.otf": "bff39c1675b0ee3aa8b8d71536ba5b30",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
