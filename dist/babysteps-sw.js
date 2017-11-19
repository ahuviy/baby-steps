importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "index.html",
    "revision": "3ab9a5344434a23f0e62600301685256"
  },
  {
    "url": "inline.613c81bd35af9e48f172.bundle.js",
    "revision": "617f9d2ece1fe9ccfe8ef8409fcde201"
  },
  {
    "url": "main.f1f063ec35c1d404441a.bundle.js",
    "revision": "14b744d632d4cb45733f8142a56b0def"
  },
  {
    "url": "polyfills.900aaf0d520c2ec873a7.bundle.js",
    "revision": "a1a42d9eb5149e7037b56e5b0ac3d08e"
  },
  {
    "url": "vendor.f68c8c71753a4c6f25d8.bundle.js",
    "revision": "258c2adf3a9a0aca14fcf31ea69a994b"
  },
  {
    "url": "styles.880c1924e64b71ac06e3.bundle.css",
    "revision": "880c1924e64b71ac06e35bc207cc1d1f"
  },
  {
    "url": "favicon.ico",
    "revision": "b9aa7c338693424aae99599bec875b5f"
  },
  {
    "url": "assets/fonts/source-sans-pro-regular.woff2",
    "revision": "967c60da0742e7f2bdfbde13accaf519"
  },
  {
    "url": "assets/fonts/source-sans-pro-semibold.woff2",
    "revision": "5a4f76c9cb1886f5682d1093f4fac915"
  },
  {
    "url": "assets/headings.png",
    "revision": "26faeb537f0350adebc18df3a5ebe530"
  },
  {
    "url": "assets/icons_small.png",
    "revision": "93345e20a885601492392d5c1eb563e1"
  },
  {
    "url": "assets/images/header_text.jpg",
    "revision": "63077873b96361dc148268d3ef6bb1db"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "babysteps"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerNavigationRoute("/index.html");
