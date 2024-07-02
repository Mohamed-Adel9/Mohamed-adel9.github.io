'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b0c080b4a52ec870156b2f5415f6b875",
"assets/AssetManifest.bin.json": "62d08993253af7311192206b46847043",
"assets/AssetManifest.json": "0075a083868532b8435006b959486024",
"assets/assets/fonts/Orbitron/Orbitron-Bold.ttf": "446368d913de79c000895e4b91dfb1af",
"assets/assets/fonts/Orbitron/Orbitron-Medium.ttf": "2221bcc8b245fa0e73b75d9babf9626a",
"assets/assets/fonts/Orbitron/Orbitron-Regular.ttf": "7c062f5378d9bca93937259466fcddc7",
"assets/assets/fonts/Orbitron/Orbitron-SemiBold.ttf": "ba8511f076fe49d64ae9c1a50a2d96be",
"assets/assets/fonts/ReadexPro/ReadexPro-Bold.ttf": "37da4efe33b3e774e7585dd4f285058b",
"assets/assets/fonts/ReadexPro/ReadexPro-Medium.ttf": "ae2b7f6d8d1792897e0270e122e77b7a",
"assets/assets/fonts/ReadexPro/ReadexPro-Regular.ttf": "7b7b051bc5a9e8afed7313e794550ab9",
"assets/assets/fonts/ReadexPro/ReadexPro-SemiBold.ttf": "88de789da14c49cd8e33611dfeb0636e",
"assets/assets/images/background.png": "c777b4c4932b0de6897191f43a0de550",
"assets/assets/images/BG.png": "08a5cc474c31d818902cc962c2d33a7c",
"assets/assets/images/Ellipse.png": "55f58b1d70e550d1667bfe7333104401",
"assets/assets/images/google_play.png": "84560c5b99ae1621e9c1c007c561449a",
"assets/assets/images/Logo.png": "5beaa8dab46f2e801cfafae043c21206",
"assets/assets/images/me.jpg": "c01be4eea13af512301312e323d401e0",
"assets/assets/images/projects/chatEase.png": "756b2b9a804d2271f70dbc4b9e44ad1b",
"assets/assets/images/projects/gallery.png": "83bfe3f4a91a58f04b92245a88845b77",
"assets/assets/images/projects/hassanat.png": "40fd7a7aa789f96f712424711e0785bc",
"assets/assets/images/projects/news.png": "07f66feb2405a75757990d6674116228",
"assets/assets/images/projects/quran.png": "0470e9b0d8a2118c1a30fb168a24e181",
"assets/assets/images/projects/tut.png": "124dbc77eaed7a4b01885585eaef2e9c",
"assets/assets/images/projects/wallet.png": "bbf7c84ce687febb4c52c6dcf2cf4f2e",
"assets/assets/images/social/facebook.png": "dffa53426a3841aa24eebb04c17e48bd",
"assets/assets/images/social/github.png": "740b697e7068d6ee27bcee8fb1cc2899",
"assets/assets/images/social/instagram.png": "a4c1b65d1112004a4c2b36993be50aa6",
"assets/assets/images/social/linkedin.png": "d5707b1379bf6a604c40457e55619ae7",
"assets/assets/images/social/wahtsapp.png": "3db05f40f9bfbfa4818e5f841359ac18",
"assets/assets/images/whatIDo/api.png": "aae3c3e996429f75822920bfc409066b",
"assets/assets/images/whatIDo/bloc.png": "bfa035bfbc15f9612dae44409b79823e",
"assets/assets/images/whatIDo/c.png": "311ee4e8dcfc7062d9fa695fcc4777a0",
"assets/assets/images/whatIDo/dart.png": "b73081b39828581f204c481373c77e4e",
"assets/assets/images/whatIDo/database.png": "d51d8b2ff28db324ed1be2766f793c43",
"assets/assets/images/whatIDo/figma.png": "ac00fa7b6768286ad44283e4595dd07e",
"assets/assets/images/whatIDo/firebase.png": "88a6bb4260e3cd103b7e9c004be00038",
"assets/assets/images/whatIDo/flutter.png": "0ee7b2475a1b7d3fa4a1d811b97321c2",
"assets/assets/images/whatIDo/github.png": "f3b32b31be25ba1b50eb092530be56b5",
"assets/assets/images/whatIDo/photoshop.png": "59f9aa8743e2512ca6f4fb6336b42f84",
"assets/assets/images/whatIDo/python.png": "eb1d40d00b548388140a4f3b98c7ea6c",
"assets/assets/images/whatIDo/responsive-page.png": "abbadc84bfc1df11a7ee0f4d80e1d242",
"assets/FontManifest.json": "39e3a53e0730851d2409c7f7dfe0f8df",
"assets/fonts/MaterialIcons-Regular.otf": "471ab3266c6c39f7dcad331aec444b7a",
"assets/NOTICES": "913006a5208e273b3a682cb92c83d08a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "39e20af6740c0bbbaf28bc2c8985a629",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "76a192aab5b0e54b200f13642d958b6c",
"/": "76a192aab5b0e54b200f13642d958b6c",
"main.dart.js": "0c76a01ea1edf8856e4c36659b77a74a",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
