self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('listy').then(function(cache) {
     return cache.addAll([
      '/listy/',
       '/listy/index.html',
       '/listy/css/main.css',
       'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css',
       '/listy/css/Ply.css',
       '/listy/js/jquery.js',
       '/listy/js/sortable.js',
       '/listy/js/Ply.js',
       '/listy/js/utils.js'
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {
 console.log("from_cache : " + event.request.url);
 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});
