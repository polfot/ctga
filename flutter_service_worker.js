'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "fd21be0f8e99b4fcab47f7b7fe163add",
"version.json": "ec6a4d1e9d6a65953ce1a6b4ea1041ee",
"index.html": "7d86e8cc8f038dea6b9a25feb0bf06ab",
"/": "7d86e8cc8f038dea6b9a25feb0bf06ab",
"main.dart.js": "d73d828be213b231ce489d8fd6e51f72",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2cb3bba4e73d8b952fd69fa1df56217d",
".git/config": "9f44ae1e49c2e058c28f4e917ba0e5e5",
".git/objects/92/13134ea93a5a3e7c1d5643fc93b281378c4b2d": "f14f388a40c105da57a76f23ca9ff800",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3c/4149c1b00cb77d5695e76291cdeede5008976d": "6d2465e64d838b04d3ecea2b7f8d033d",
".git/objects/3c/74c594bcd12838cbb30001cb2e92e2eca45ba5": "13b43348eae42adcc174dc4a9e3d2d9c",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/93/8ffaa81779d15f4dc9f640964297a48ee47788": "9fd0b9b0943a090ea96789b792a8967c",
".git/objects/93/ee73ad51e441ecfd5408fc4205aac2a7bb35b3": "bef37c850d5f705abe5085020beacd98",
".git/objects/5a/094db4bb6705a8a0c1add8cba7053afec24bd9": "b720d44e650f426d9198a75fb9c32734",
".git/objects/33/92ef18f204ec26039344690671eaec6ff314b0": "9e95e57f6fc23e3b87f0e3b48fbffaa4",
".git/objects/b5/2975f5b3fe7f893d67df5e124329e4f025e7f0": "a812e8db3417d4a601579bc9512f018e",
".git/objects/ad/cb1d737c3666425526c0d2c672fa962408ace2": "869569d42d1f32e222d5b10d391f12c6",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/be/67fa9e5d1a9cabd805ed585acbb1ef7d795133": "5b05b97395356ca4c19dad9d73c70931",
".git/objects/b3/543a0d5c21d3bda5d5b5fc266e4c672a6ce085": "702fa228b5df72b46a369f90956685e6",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/a2/a81cd2e6eeb0640e8921e94f661fcd82e3569d": "83edc001450d2ba11e42841458c8ee4a",
".git/objects/bd/79399b5ba391e4508d099b63993ca6baffc625": "ae6fff684122f8c8604dc4216220e1f3",
".git/objects/d6/418c636bc81b9eb18f365f45ec813773cb5e90": "a8e4d50efd65190a49f6b3a12ece2b13",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/eb675ff6e50964444d7b2ded2a8da4da46ae3b": "b6423f9bbb632d5ad247e2b4a1735b6c",
".git/objects/e5/e035e394c71f6434f8d869fd92740d653d737c": "f7a3b4d2a4a9a0cb1888f47f0df1e48c",
".git/objects/f4/02f7db11c4da0b4a55018aefbbdccc0aa93144": "b231fe3b5f4399ca40ccd0f3fb628b87",
".git/objects/f4/1b3421b0878845aaf268f1e654f3e971e0bab8": "94b30d2fe044cf8f6b472cf093936cf7",
".git/objects/f4/c4d5714522223e2c74aa0409c436612807063d": "db17e21b5b16921f92ca294b70b4021b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/00ecd48368ec1c0edc111105075ca7e3c691c1": "4452d9e94d547a4f8058488ff9371f66",
".git/objects/ca/593a77483df0c2a140910f0d289c6a4b3cf920": "20d49703b12bd6114a9bb01ec8ac0a48",
".git/objects/c1/12773aa1ceab657d0caa21b413fd569e37ffa9": "a71bab77fd6818b583174067922ed54b",
".git/objects/11/a502f5561d39177c3ecc661fea84d66037a188": "af476ee8e67f4082ee20121a4f220e4e",
".git/objects/16/1b5fea64fc3a88c82e055d083815d4bdb6a49e": "e77b827fc5a1da51721f7c01bf5d00e3",
".git/objects/80/b57fe661209a9d99ccd3cb9df6365cbd33516c": "e51385763dbd8336b4d73047bce84fe8",
".git/objects/74/fcce9f7e7ff172759ec7d07df5a781ae442522": "0820984ff7b4b64b8cf785c927a7582a",
".git/objects/28/d055bb8407b77d7ddc17cbb76dccf00c4017e9": "88a9a1ec3ea4de6cc1439b85305f2331",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/86/106e0f3cec7d2161fa67d97b34613d2fe72a5e": "85d0dc85a8dd55de9fe0970f44941362",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/2f/c15f89865e59129c5dbe0e5da42abc82504f54": "12e6d697787fed18fba6cb32e1d19cce",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/33afa4fe1df5250a4f0b52e663a40403a76f78": "08539f27cc0fb0a72a57cc47a0aeeb73",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/38/bbc6c24cb1a941fe57139d36b6127b99993ff6": "4c56cf19a0c808ac9239b18989489a21",
".git/objects/00/9c2f1dd34970127c21117872f32a4ac9470669": "11ae64ee6d9bb86ea44e65b85d31daa4",
".git/objects/00/aa1accb114d81cdb9a6df79a9cc1cba4087db7": "1617141fd5eb6bfc95e56a964518e32a",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/9c82497b709f3428f0424b58c63025204677a1": "8424e7e46541793cf30d7e87f3cf843c",
".git/objects/3a/60f1dcfae8e2249ca76c8c928efff3457b18ce": "40eb384a5d2ad67ccfec9102a9baac45",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/5e/4797833bd7266a0fa100c1036195736df76ad0": "d651975674c32a35ec1f3aa83905cd0c",
".git/objects/5b/07ac357d0917df4f7a7b17c6d50333cd3dd8bd": "d8b4446c25cbeb2f86be46b1a0066dff",
".git/objects/08/2d71bdcdb0ad5b701ba427265f96b66d0c2127": "e3b3d53b80141757d48543c2f73d77ca",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/6d/740a2116e17703e1c4a798a98ede646464791d": "c55dc9dcbcfff5083429cbc26885cfa8",
".git/objects/06/212b7754f7fe97bf469c9722a5774df7099234": "c415a61004fd6ede9eab46dc684d7362",
".git/objects/6c/7471a87f5f9e469234d2d578c2c21a34678990": "7499fd2ee13e58f33fe6d7cf4200017e",
".git/objects/39/d9eb7d50ae3de89d804cd90321e77622955da3": "87a6259cc253c7512403b0e7ca554609",
".git/objects/99/95bb5ba8763bbc271bf55e62e8801a763cb54b": "c709456704861b6529cb323929e918e5",
".git/objects/90/268395c1f5f1f3e7548f44c82064b4190ae274": "b8289ea9bf7fc6a6cef24b81f443c2fd",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/526fbeaf3a5e152564a57917927ba0df6254c2": "42ed14223dc0d142fe2426806a375938",
".git/objects/de/d2720f30834f9f06c94a4083af83187a6ae67f": "8937179300aafce053aa4aad11c45c67",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/8c8e64b5be89e32f77fefc6b9ca1e206ec59ce": "0a9035f21fefcac912d129fdc7c1eadf",
".git/objects/e1/082d253f8504b6fa4b0c8180d551d860d59ce8": "7435692939845c31e1e21b04ccbb0dae",
".git/objects/cd/42b524dc9554d46edaa0b69aed5e6cd3550c57": "d8d2758f98ad0f37d2dfff50613feb15",
".git/objects/f7/ec2bc9449dc032d26b7e93028554272746509c": "a9330be1ce4ad79e8a3c72a216a61d6e",
".git/objects/f6/805434bccfa5df2c2b9e25b730c1f50b711e33": "720c365585d11d69da3920e4d1722b58",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/0e3faa3daca927b5f1e3b8efb0d6e30e5c81ce": "cf267b03743c3ed4db4ffd01e21a96ea",
".git/objects/79/71653cd3f0127a80f09c2657e7be895c784993": "9536a4fbf5e05a4e9229e1bff942e20f",
".git/objects/48/07665697ee84e892cc4f1bef5bfaf1da746672": "720ba50855fd62cb077ffb01569c15b9",
".git/objects/1e/0d6cc2abd1df82ff3fd8039fd2d4fc2c40b70c": "3db7bb267f663eaf345ca5e3f237d2bc",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/8d/91ed692b247f0e124c9bbe151f1f2365f9665b": "565bcf4a1a0a6ff9d81cd23441d03288",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/2b/90f438a5a9f5b81ec4bf2564f31055aeaf55df": "c7ef6deae4b42f2739d614f773d250f0",
".git/objects/7a/7b0c7e4c279c6d142cafe4597cbaf64dbe926d": "37929a2d39dd5dcf119ab16c9dbfd0ac",
".git/objects/7a/a04450eb875e670eb8ce3816794aafb144908d": "f4d313a8c6c08e159ddbf35bf19c1925",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "86da5c2fd4d2c98ba4fe80b56e2f2a28",
".git/logs/refs/heads/main": "855c8b0b0219438c2eace565c44c519f",
".git/logs/refs/remotes/origin/main": "dd7f9a4a1c8a8f328678605aeb12e5ec",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "738edd16fe6ac06aeb26df13c5fae2d1",
".git/refs/remotes/origin/main": "738edd16fe6ac06aeb26df13c5fae2d1",
".git/index": "6ce05ac9ebd51be1c230d48477dcdc34",
".git/COMMIT_EDITMSG": "4aaeaf5919f6184c468c4b84d217729e",
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
