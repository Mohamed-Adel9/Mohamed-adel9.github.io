'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "0538d7e74a9b6cd282fb3349fa44e1a5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "37d229319ea83942bee55ed323afe18f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1da46d37e846557ddcf2c6c4de894695",
".git/logs/refs/heads/main": "f446ba44036382bafb39a0f485e6a49d",
".git/logs/refs/remotes/origin/main": "e91b3b7291d69a14c31ec2be6bce3430",
".git/objects/00/0b2b2868b1c492fffbfc2d8cde5056065c78ae": "90704232e1351d553a08ef45e08cc3d5",
".git/objects/07/2d7c098201e41d19249b8c9366c38be5d3a43e": "8ffff375df5a870ef76e66301c8d9830",
".git/objects/07/79316ad021b8bf6ca42c540cbdda88e713b9c1": "ba0af5879d18031a6a1ffafa877aab20",
".git/objects/09/44ee52eb52d5bab922cd4a54a74e0cb13a66e4": "619d1a5a0ae55b31ac4870ffff3fe644",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/18/8ebc0b0cbe1c6692610ce92ddadd2780bd0a3c": "9bd104ec109d5695dcc0319662be5284",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/19/bc8f060d19ba398e027466649c6e6e49a3f266": "c0223cc74974959a0e21f6f38874bf9c",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/eb3ef604bcf72eb0af7dfa5e23f7ea195ebfef": "17c7158076e8466f72fa7607dd749a4a",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/86f983a92c2c9ec7655b6b9bd0a319daccf894": "cf9756de387589cda554cc252e625f40",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/25/622070e5cafdde31d0b8ec8a24a3cb1e0ccc5f": "117d15af2d6d2d6efab0901902b7d20e",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/ee2d6063fb5b79461bdc4ea710b0bea63fcba4": "6ffcd97a40bcd8ef284f47c3f6d18e81",
".git/objects/26/db935c3e8858217571077e4f4dcfaa73f45b1e": "b2178cf6b884ae75a99d5c433b524c3e",
".git/objects/27/527560919b7005c6b41469080c9cbc09589d12": "7b15a08609817c652b4cb9d9a1def7a1",
".git/objects/3d/838ca5d716b5b38dcbcabd8a3f09233c74fd94": "5007e9851617f97eb5ad54216171ce70",
".git/objects/3e/4d3d819ea3b6daddbaa37ceefeebb7729904bc": "841f96ee9c8ab7131e9ca8fd2c094a1c",
".git/objects/3e/de60f086f0d780c47bef38041aa0bd155db421": "12c3a213e78d4b0f5c66c20e0d49b5d9",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4f/4eade907bcb6a2cfaac8c5300963fb75eb6fca": "da9c53016ea6fb0d9ad5b4e86db834d8",
".git/objects/52/69ddf349a9b07c05a214234fc8fbfe554b4f1d": "10506985ec46a700ea8fea3a8fdf215a",
".git/objects/53/23a75cbed988adf2e81aad198e875a8603aa1b": "a727de9c430008ca0450f6ed50afefda",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5c/a7312224ba9497ba7f895203029488545a6ec5": "b94db07aed8940e584d50d32799c6d9f",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/62/e8511521e93d8908921d683618db2f3c2d4b83": "6b9bd889f88acbeb1c70912ade7bd869",
".git/objects/6b/5b44f7fa3a5ca799fc50a33bee767dcb043193": "3bfc7a1fddb131262121628de86f3630",
".git/objects/6d/754e8c707c449aa06923987fd3f5a9b5cea5ff": "81d00f8d5e924a2c693d988982986ab5",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/72/ab275a3c24e0ffa34f0ba2f7f5435b82b86289": "d762cf94006d87e9d2483aefa1c44636",
".git/objects/78/38f02e376a2d9760e74c1ed8c5c38c708c6b36": "3d71ef60f72b67638626d58fe756fb55",
".git/objects/7a/1b6a9fef41184f411ecf4d5095d5a4e9523a3d": "da79503777e5915cbfa6125a74c8e023",
".git/objects/7a/6d2b82de8322955576a87e90486aca1d0a4b9c": "52cfeeb3236d828cbbdec5482688aec4",
".git/objects/7b/127f4610a39485026bd1a87ffc70593bf421f5": "bcc0c072149599b96d454f2c33ce284c",
".git/objects/7f/56cba41c9574053ac7650f43b3d3175ecf9a96": "f896b4c81a2941c012bdd60b262cbf0b",
".git/objects/81/894d58d18ef7ed3b63fb5d923c52dcf78f1b01": "ddaf294cf578d66cf9a6e87dc97385e2",
".git/objects/84/dcc2a2a528bf661247666a0636831debe9ff2e": "c072b0529f7b773ad9e3af22e4be2a09",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/2e5a20c9ddbc5d9c798eb3e54c8de5cb6c86d0": "f6f0eb1853abc711451d5afe3bfd131f",
".git/objects/88/c11181d8e59a71f9222b8c007647c35077f783": "16a36cc0c7dd6ba3cc6d98f6ae823f03",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/74d711767699fb760bbde7718f7c3b55be946d": "d2d0fa98102c486d416a33a803f6446a",
".git/objects/8e/f5fa925f110a611c1fc7688564bcefea5d9c92": "7038a119d923e3fd028b37ea25d60250",
".git/objects/93/fc8922a4430521fce41f95efb4f557ef28139f": "878343b8b45ae3c344ad072dc31a5b28",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/98/a52ff8aea3a5f2e7e5e1a0a93750c5334974cd": "39a69fe50dc77df75972c4fd0c2d9a6a",
".git/objects/9c/8643c4a6062a93fb882ec6ff026564554d9098": "aef14fc2acf9ec84deff9f83d05e84f6",
".git/objects/9c/c3be02a1f1aa1f945fc003390b5886f46e622b": "61d45683a5652571a195acf62dd813bd",
".git/objects/9e/2c4be076b62fe924828ca065171a694dfb6f23": "c0bbcab7511061f742b195620009a220",
".git/objects/9e/8418c31b04c6820052218d76f208b7378c5509": "1d588e450b1ebfb039586718371f47e1",
".git/objects/a0/61f4b34c6e15d40830ca7ad03c28ac722a8195": "d850863b8ca47ffcbe51cf3140aac1af",
".git/objects/a1/a3b6dbe5cd6b6d14cfeea137625e8783d1f82d": "6cf5649ddb72876ced45c558b77be884",
".git/objects/a2/4d8bc5f902a22a743afedbee6893365ea79a60": "600fa225c5f45e393dcfe6da704e6b04",
".git/objects/ab/0530b2bc711c770e3acd828e00691f97b2273d": "c7875a7c23c7263d9045c18dc20bb475",
".git/objects/ab/a93974ebf2d885a11a41b55c3ebe66c8ff1f57": "b8660300432d91cbf2bb2a9bf8b306ea",
".git/objects/ab/d3cf9043698a806e4bb9185e6fba4ed557e2c8": "b1e70453bed589bb29e4bfd3d61dfbd9",
".git/objects/b3/09e57d04cd382b50681d8f6cdf74783e761e4d": "7867a82cc3d97d87c10f819d900be333",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/235ca15009f008dd99ec926fc00107af4e63ab": "11b659ac6609ce3a171ea2decaf8aba8",
".git/objects/bb/393eee0e360c4c7b4ffa4f2075348e70cf640d": "2083a989e319d91326638c2364315071",
".git/objects/bf/00aef3a2ad843d14807796df193f564c78e315": "1f58e24db3e41d05da6c45afc8449a08",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ce/4ce41983b0fdbb17f947e111e1600185eeec08": "9b13a01eef27a568c21423a0d12d8cb6",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/5de7a41ff1fc0c0f369bb83a42d7bfd316fab0": "a55a5c1fc4d93e7c4287bae829200f8c",
".git/objects/da/19aee8194cdd3ff1716fbe12c629a7f6675d2a": "13b627cf821ccdeac6840b03fb33eaf2",
".git/objects/de/9695dd447c58a533e38e4635cd2e1530f6ba6b": "a061128698d2ca4e0290a8ef238a0e94",
".git/objects/e0/e8efd00626801b374fa175b9fb0c622237c8b0": "413fa7de8baba1317f916fed7920659d",
".git/objects/e1/dd2831b076d253f02dd81ea3d7db7fdac87ffc": "2eb022f902894fdb95963cb5c7033ad3",
".git/objects/e7/9f2a14cea5f7bccf978a827e33b3f9bc059a0f": "c8afb925e1a1dd3da6ea3e4cf1cf1dd4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/aece0a3ffbf60c57f63b75db01609f106427c4": "b7da162f3b9138ac271534af5e4c79b1",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/627e1fe76298b2f138edbdf846e364c8afa7b3": "080c720b3f6f99208d76273fe39649cc",
".git/objects/f8/d9e58e16212fc1539c603428e99a393479ebd7": "cd209ce83988117feab2226efdc6a5fd",
".git/objects/fb/9f271aa1ce66a2c270530828fdfac694579037": "d2f9532ea2db853ab7270cf885c7db2c",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/main": "3d08f3e0ab7beee419c0b481912eee0e",
".git/refs/remotes/origin/main": "3d08f3e0ab7beee419c0b481912eee0e",
"assets/AssetManifest.bin": "b0c080b4a52ec870156b2f5415f6b875",
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
"flutter_bootstrap.js": "b7b37de41d4d1c29877ceedfd9630727",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "76a192aab5b0e54b200f13642d958b6c",
"/": "76a192aab5b0e54b200f13642d958b6c",
"main.dart.js": "d7fb74b9c0bc364dd96c3f9646a64f10",
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
