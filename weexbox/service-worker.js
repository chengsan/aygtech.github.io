/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "91717e70cf5dcd113d4813516681533f"
  },
  {
    "url": "assets/css/0.styles.821759a7.css",
    "revision": "effbb00c63acf12869bb8158c3f61485"
  },
  {
    "url": "assets/img/bug1.af5f40d1.png",
    "revision": "af5f40d122e23d5d33ab47ba0ce497e7"
  },
  {
    "url": "assets/img/bug2.e18293bb.png",
    "revision": "e18293bbcaa7019c822869dbd7dc0125"
  },
  {
    "url": "assets/img/bug3.03a91a4d.png",
    "revision": "03a91a4dbc17d006bc8699ff19596357"
  },
  {
    "url": "assets/img/bug4.577e17c5.png",
    "revision": "577e17c5dc41b72029bf8517cddd7608"
  },
  {
    "url": "assets/img/bug6.cc0d905f.png",
    "revision": "cc0d905f342dd62ef319923f4b32e818"
  },
  {
    "url": "assets/img/bug7.bebb76e4.png",
    "revision": "bebb76e48437bfe444e3ea8b4762979b"
  },
  {
    "url": "assets/img/bug8.411cd975.png",
    "revision": "411cd975a279a75a5cfc322de779b391"
  },
  {
    "url": "assets/img/bug9.df3c2d88.png",
    "revision": "df3c2d880ab82e3cbbaf50e58296a289"
  },
  {
    "url": "assets/img/debug2.d7c24ebe.png",
    "revision": "d7c24ebe037a428758101df3c2fa7163"
  },
  {
    "url": "assets/img/debug4.f4aad4d4.png",
    "revision": "f4aad4d4aa3a62e952a48a7cf4c74074"
  },
  {
    "url": "assets/img/debug5.ca1a85a6.png",
    "revision": "ca1a85a63941f1cd359968cac384c18c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e7c1e381.js",
    "revision": "b5e9021007bd42010fb3de1f22fe327e"
  },
  {
    "url": "assets/js/11.3ba9586a.js",
    "revision": "f456dbe893d63a4ecac39b830f5c7e3a"
  },
  {
    "url": "assets/js/12.16ebfd77.js",
    "revision": "b1f6cdb16122ef9f598eff6e0c31547c"
  },
  {
    "url": "assets/js/13.156e2fc0.js",
    "revision": "fa863d39376a5018b5562fe80b5a61da"
  },
  {
    "url": "assets/js/14.8c88ea15.js",
    "revision": "a9386b44826951cdc4be47d74addd3cb"
  },
  {
    "url": "assets/js/15.070a0310.js",
    "revision": "02621e82f3b4639ee062e475162c515c"
  },
  {
    "url": "assets/js/16.6c520e80.js",
    "revision": "c389268cb07a9ef829de09e6027ac97a"
  },
  {
    "url": "assets/js/17.3a5d7ea7.js",
    "revision": "463ace47f6ceb8f6f6d544e4268b8192"
  },
  {
    "url": "assets/js/18.ff22947a.js",
    "revision": "10cb80a9470fc3d25d037ff07d1ca5a2"
  },
  {
    "url": "assets/js/19.6475b4bd.js",
    "revision": "a3fc28029131d02d377b1cabd1bd8723"
  },
  {
    "url": "assets/js/2.db7adbae.js",
    "revision": "aceb60d2cdb872dcef73fc6d35598278"
  },
  {
    "url": "assets/js/20.a2e1ccae.js",
    "revision": "d4d15221c06680ea0deb8bb23bf7c741"
  },
  {
    "url": "assets/js/3.a392218e.js",
    "revision": "788a27e243467c63e77294f3711bc5f9"
  },
  {
    "url": "assets/js/4.7c852cbd.js",
    "revision": "69ed760d9337d85c86c9ea45a44da068"
  },
  {
    "url": "assets/js/5.c83ae3da.js",
    "revision": "c2080fa8a01e9720118644fb698ee24f"
  },
  {
    "url": "assets/js/6.90d63484.js",
    "revision": "0635039bde9d79c6d8323c6d22798f92"
  },
  {
    "url": "assets/js/7.12237cc5.js",
    "revision": "2b1f4f7ff5fc262dcb0d1cd35961919d"
  },
  {
    "url": "assets/js/8.22f022ae.js",
    "revision": "4001265d45518df999abb4a09ed1933c"
  },
  {
    "url": "assets/js/9.cf1ca687.js",
    "revision": "a197da788f83b57a253d742ba47a2985"
  },
  {
    "url": "assets/js/app.90f93bc6.js",
    "revision": "1c43150f4d23f9f53824198bd953f844"
  },
  {
    "url": "camera.png",
    "revision": "3ead9b35903b562541ed4ab1f41abfb2"
  },
  {
    "url": "config/index.html",
    "revision": "ae7d34d1a3a932e53cae23ae67264dce"
  },
  {
    "url": "debug1.png",
    "revision": "04b9976587fa44f414d853e359a3e6ef"
  },
  {
    "url": "debug2.png",
    "revision": "d7c24ebe037a428758101df3c2fa7163"
  },
  {
    "url": "debug3.png",
    "revision": "f77773272edb88c73c218a227944d54b"
  },
  {
    "url": "debug4.png",
    "revision": "f4aad4d4aa3a62e952a48a7cf4c74074"
  },
  {
    "url": "debug5.png",
    "revision": "ca1a85a63941f1cd359968cac384c18c"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "23d0fe0d6ad47fd406e6a9d8357b57a8"
  },
  {
    "url": "done.png",
    "revision": "9180e4bfa05d56a58f0f314c4b743049"
  },
  {
    "url": "guide/assets.html",
    "revision": "ab0b8b443ddd25ff185f24582feb8da5"
  },
  {
    "url": "guide/change-log.html",
    "revision": "72499a3df96aa72ec6fd7fe9740590f0"
  },
  {
    "url": "guide/component.html",
    "revision": "b70898c39bd45a2ade89754d7d7d3622"
  },
  {
    "url": "guide/debug.html",
    "revision": "332dc87099d190eb9e02ddf2ac57bb1b"
  },
  {
    "url": "guide/eslint.html",
    "revision": "9660ab13ebdab25b970c108b949f3774"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "497929f9d156d5d8de6165c10ac0ecc6"
  },
  {
    "url": "guide/hello-world.html",
    "revision": "6132626c1df52b1e5f8f233d9ca3c435"
  },
  {
    "url": "guide/index.html",
    "revision": "9bb6d006182e899dd0ebcea0432b80de"
  },
  {
    "url": "guide/lottie.html",
    "revision": "01e11d7ff0286c75abc5ee872f883b5f"
  },
  {
    "url": "guide/module.html",
    "revision": "a15dacb623511733f0c89aac18b4e299"
  },
  {
    "url": "guide/native-android.html",
    "revision": "3e00a45708c987896b4f185d755a5754"
  },
  {
    "url": "guide/native-ios.html",
    "revision": "f512bd23f8dec4f4b1d2b79b4a47b309"
  },
  {
    "url": "guide/project.html",
    "revision": "fd2bd2c4c6f22daa3f5a911b90bb757c"
  },
  {
    "url": "guide/who-s-using.html",
    "revision": "06f49b26205eef739d600109cc0501ee"
  },
  {
    "url": "helloworld.png",
    "revision": "d4baca8a7d78a0cdd58aaf10af7c1fd9"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "image/debugger/bug1.png",
    "revision": "af5f40d122e23d5d33ab47ba0ce497e7"
  },
  {
    "url": "image/debugger/bug2.png",
    "revision": "e18293bbcaa7019c822869dbd7dc0125"
  },
  {
    "url": "image/debugger/bug3.png",
    "revision": "03a91a4dbc17d006bc8699ff19596357"
  },
  {
    "url": "image/debugger/bug4.png",
    "revision": "577e17c5dc41b72029bf8517cddd7608"
  },
  {
    "url": "image/debugger/bug5.png",
    "revision": "eede40abe9f4cce9894479e2bf462fe2"
  },
  {
    "url": "image/debugger/bug6.png",
    "revision": "cc0d905f342dd62ef319923f4b32e818"
  },
  {
    "url": "image/debugger/bug7.png",
    "revision": "bebb76e48437bfe444e3ea8b4762979b"
  },
  {
    "url": "image/debugger/bug8.png",
    "revision": "411cd975a279a75a5cfc322de779b391"
  },
  {
    "url": "image/debugger/bug9.png",
    "revision": "df3c2d880ab82e3cbbaf50e58296a289"
  },
  {
    "url": "image/modal/actionSheet.png",
    "revision": "e2a0dbb0bdad7837d25ad345d8dd4cdf"
  },
  {
    "url": "image/modal/alert.png",
    "revision": "9f2c601a551c87b37501e2a2723151e0"
  },
  {
    "url": "image/modal/confirm.png",
    "revision": "5723a2353a85aa4e3ba312bc2b97702f"
  },
  {
    "url": "image/modal/prompt.png",
    "revision": "1c31212b2214c9a6f780111afa030b04"
  },
  {
    "url": "image/modal/showLoading.png",
    "revision": "28cc23f269828a978448ba110b785439"
  },
  {
    "url": "image/modal/showToast.png",
    "revision": "3a426d37f98d8a09f72332c9f52085a2"
  },
  {
    "url": "index.html",
    "revision": "2ca94c6fa0b7a07191a98cb057c3217c"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "534548720548c4ddcb634d05a271f06e"
  },
  {
    "url": "refesh.png",
    "revision": "66db8f9957c08745a864258b19db4e77"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
