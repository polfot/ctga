'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ca288334bf85cdc07e91a0b3df7a1fea",
"version.json": "ec6a4d1e9d6a65953ce1a6b4ea1041ee",
"index.html": "7d86e8cc8f038dea6b9a25feb0bf06ab",
"/": "7d86e8cc8f038dea6b9a25feb0bf06ab",
"main.dart.js": "7594e9fb5eec2654c215e857300342b9",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2cb3bba4e73d8b952fd69fa1df56217d",
"assets/AssetManifest.json": "9cedf6bc5356feb2d7a832ca0c948dac",
"assets/NOTICES": "753b34a73ac1e812a2c73395982c2e20",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "0f0fb7142fba82fe291270aa6c62b38f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "63e26c41d3da50a2d9c61fdfcb19ffc5",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/lib/assets/types/8.png": "bd005eaedbc721c2763f636b2c9a9658",
"assets/lib/assets/types/9.png": "ed87436bd996acbd294b1df13af73635",
"assets/lib/assets/types/11.png": "7d4f4af616d8cdfcd252ff5450d78a61",
"assets/lib/assets/types/10.png": "28cd6a07f00173d3622ff45cad5dbb29",
"assets/lib/assets/types/4.png": "6b9aba5a733327630d544276e9db346e",
"assets/lib/assets/types/5.png": "863d9a6984d5538f63291e88c82aa524",
"assets/lib/assets/types/7.png": "ad0c6dd883ed2d3ac1255167e58d499e",
"assets/lib/assets/types/6.png": "11608fbb5b017746ee6fa18dae2bc382",
"assets/lib/assets/types/2.png": "22b3908da2753e294e148ffb633701f2",
"assets/lib/assets/types/3.png": "554aa474fe4959c057379e3a9537e11d",
"assets/lib/assets/types/1.png": "c9c90bf9bb594f95fa1f78267398b522",
"assets/lib/assets/types/0.png": "62926dc1691697e91f7e2740f5750ba3",
"assets/lib/assets/images/logo_color_1.png": "48c5a837a54ca6a84eea42205f2548a9",
"assets/lib/assets/images/ico.png": "995901f30b70da40fd9ef057fe29f91c",
"assets/lib/assets/images/favicon.png": "c38a0c4f6b27e15212ec3a8afe884edd",
"assets/lib/assets/icons/icon_x.png": "d29fc3fd606749a95506c43e7062ba73",
"assets/lib/assets/icons/icon_comment.png": "62199f27efcc8d0f9a15780584a753ad",
"assets/lib/assets/icons/icon_xmark.png": "349d695d2da25cc2eaf59da449a497b3",
"assets/lib/assets/icons/icon_wallet.png": "efdfc18171d22d96cf7e872e00485ab1",
"assets/lib/assets/icons/icon_clock.png": "544c54be05f87a04b08d01f7dd2ae7ad",
"assets/lib/assets/icons/icon_menu.png": "54753cf3a44bdf0afab6db3084afd4ef",
"assets/lib/assets/icons/icon_heart.png": "b5a51fb4ef1d7808ac4c328ca3793947",
"assets/lib/assets/icons/icon_chart.png": "58af7810c6cd2e9b2aa3417036ce3e34",
"assets/lib/assets/icons/icon_user.png": "e5014b9c6dcb2baa7da51bc250b42b81",
"assets/lib/assets/icons/icon_marker.png": "9f660ef59f584b0b3bdc12e59a566cbc",
"assets/lib/assets/icons/icon_mountain.png": "76357a306ffcc7dcf553bf2a607a1df6",
"assets/lib/assets/icons/icon_journey.png": "5e077a5949d623821406404be783dd22",
"assets/lib/assets/icons/icon_add.png": "69af4e82fded9dc7eec702c806991624",
"assets/lib/assets/icons/icon_square_info.png": "749c2eda114eb1669e3aee9e01eed565",
"assets/lib/assets/icons/icon_checkbox.png": "a4e1a59db5021ab14cc49658a53ea844",
"assets/lib/assets/icons/icon_world.png": "ad3f04278c49011e83f49e244ac1bae9",
"assets/lib/assets/icons/icon_envelope_open.png": "99dfc54999f7a67fe00a78bf5cee2827",
"assets/lib/assets/icons/icon_euro.png": "0f833a24ad5882e07bea72d4185a478e",
"assets/AssetManifest.bin": "41a43c8ebecac8cb439236b602eb8d10",
"assets/fonts/MaterialIcons-Regular.otf": "5bda5247898b3ce0b6e650db651b55b4",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
