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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/images/avatar.svg",
    "revision": "5cf06986e00e8c5fdbdb0449345f035b"
  },
  {
    "url": "assets/images/favicon.png",
    "revision": "3a211d9f13d2e10e172a133caa46df3d"
  },
  {
    "url": "assets/images/flag.svg",
    "revision": "0c0cfe47a64be0dd96acaf8e132032f0"
  },
  {
    "url": "assets/images/miniFlagMexico.png",
    "revision": "a0fbdf6b7a6da085de9bb34ea13b7154"
  },
  {
    "url": "index.css",
    "revision": "c6c46431a8b0714c2128d561630b0ac3"
  },
  {
    "url": "index.html",
    "revision": "2f6e393eea543c7d13920639112b4c4b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
