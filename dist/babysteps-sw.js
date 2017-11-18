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
    "revision": "d4dff19e062f7e772ec474f5c34811ab"
  },
  {
    "url": "inline.568f59f83fca78fe283e.bundle.js",
    "revision": "521d4facdcfbb4a888a8b91f2067fe14"
  },
  {
    "url": "main.4f142acfbdea58f15a16.bundle.js",
    "revision": "e12ee9f31497aafa56c04d2d6e352727"
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
    "url": "styles.8c94fdb7a90f4341ae37.bundle.css",
    "revision": "8c94fdb7a90f4341ae37142f394ed2b1"
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
