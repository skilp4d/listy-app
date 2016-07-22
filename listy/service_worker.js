self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('listy ').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/css/main.css',
       'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css'
       '/css/Ply.css',
       '/js/jquery.js',
       '/js/sortable.js',
       '/js/Ply.js',
       '/js/utils.js'
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {
 console.log(event.request.url);
 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});
