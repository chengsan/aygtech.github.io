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
    "revision": "4316eaa4f0e67ecd24d119799361bdb5"
  },
  {
    "url": "assets/css/0.styles.8e0d51a5.css",
    "revision": "8b369afa03203ae584a70a53308d27ff"
  },
  {
    "url": "assets/img/debug1.35fccfe4.png",
    "revision": "35fccfe4ab797b8ffe407c40ae3eb4e8"
  },
  {
    "url": "assets/img/debug2.042bf797.png",
    "revision": "042bf79707589fca59eef912a65641f0"
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
    "url": "assets/js/10.8152a3a2.js",
    "revision": "f416b5ccec95c4caa277f3433ff7be64"
  },
  {
    "url": "assets/js/11.1e99432d.js",
    "revision": "06db75c9955339514ecafd125bc480e2"
  },
  {
    "url": "assets/js/12.916e1339.js",
    "revision": "4a24a4b41a7c3696cab02b265890d7d2"
  },
  {
    "url": "assets/js/13.4cf81b5a.js",
    "revision": "82dc6c76ccee14661749cbe04c2c3600"
  },
  {
    "url": "assets/js/14.f2efb5ef.js",
    "revision": "80254e69db363e1f7a69f09d632c359d"
  },
  {
    "url": "assets/js/15.86f4d40d.js",
    "revision": "c4cbdd5e79fee631116305c5954302bf"
  },
  {
    "url": "assets/js/2.79907540.js",
    "revision": "f6668df5583d15e0e6d66979a72d1c9b"
  },
  {
    "url": "assets/js/3.05edb05d.js",
    "revision": "dc431be7a86999d372cb49d5ffe4242f"
  },
  {
    "url": "assets/js/4.2d08dde4.js",
    "revision": "5abfff16769e6c00daa4423518439769"
  },
  {
    "url": "assets/js/5.ebc1cd3d.js",
    "revision": "0c247dc3513a4a930c73b9dd4b743b2c"
  },
  {
    "url": "assets/js/6.5a6bc04d.js",
    "revision": "b5c4bf81c62aa9f2da4df9650caa1f4b"
  },
  {
    "url": "assets/js/7.166727b1.js",
    "revision": "5e71216e7c123b21bfa3e3a4853472bd"
  },
  {
    "url": "assets/js/8.c5ece06c.js",
    "revision": "22766484393ab0e7458fe36d3efbfa37"
  },
  {
    "url": "assets/js/9.ff4aa8ff.js",
    "revision": "f30aaa434d932c543959768418039594"
  },
  {
    "url": "assets/js/app.1f1cee94.js",
    "revision": "26ea91f4eb938b8c0f400bd7b10127a2"
  },
  {
    "url": "config/index.html",
    "revision": "718f48e83e1a806bc36ca097f6f8dee1"
  },
  {
    "url": "debug1.png",
    "revision": "35fccfe4ab797b8ffe407c40ae3eb4e8"
  },
  {
    "url": "debug2.png",
    "revision": "042bf79707589fca59eef912a65641f0"
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
    "revision": "105afe347beff7aac5d0b8a89d0380e7"
  },
  {
    "url": "done.png",
    "revision": "59c16027d193ff963cc9e61dcd7c3437"
  },
  {
    "url": "guide/assets.html",
    "revision": "4f7b5f8573ebe95b353a94364520cb6a"
  },
  {
    "url": "guide/debug.html",
    "revision": "ca5c6d210be3f30931123632d21008a4"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "059e918f7d37c2f36613a1322bcf8046"
  },
  {
    "url": "guide/index.html",
    "revision": "fa3001a63ed8dbbdc2eb12fd9afd0bbc"
  },
  {
    "url": "guide/module.html",
    "revision": "c74031974a2d9547163a96a9d3fd8157"
  },
  {
    "url": "guide/native-android.html",
    "revision": "a4cd8955df04ab3c4ff26a21ba26fb1d"
  },
  {
    "url": "guide/native-ios.html",
    "revision": "d4af4470eff0e971e8828db0a127bc6a"
  },
  {
    "url": "guide/project.html",
    "revision": "d9afb83a1df37fd433f6793fc9acf982"
  },
  {
    "url": "guide/who-s-using.html",
    "revision": "5ea48f206ba31b87b84f43d7af62c4af"
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
    "url": "index.html",
    "revision": "fbf0a838d999bdd8cbd6c28df2bcaed2"
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
    "revision": "6b7fc72eee2bce0e11b0829f07a9d2c9"
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