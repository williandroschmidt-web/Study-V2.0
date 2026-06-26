/* ==========================================================
   Study+ V2
   Service Worker
========================================================== */

const CACHE_NAME = "studyplus-v1";

const FILES_TO_CACHE = [

    "./",

    "./index.html",

    "./css/style.css",

    "./css/animations.css",

    "./css/responsive.css",

    "./js/app.js",

    "./js/theme.js"

];

/* Instala */

self.addEventListener("install",(event)=>{

    event.waitUntil(

        caches.open(CACHE_NAME)

        .then(cache=>cache.addAll(FILES_TO_CACHE))

    );

});

/* Ativa */

self.addEventListener("activate",(event)=>{

    event.waitUntil(

        caches.keys()

        .then(keys=>{

            return Promise.all(

                keys.map(key=>{

                    if(key!==CACHE_NAME){

                        return caches.delete(key);

                    }

                })

            );

        })

    );

});

/* Busca */

self.addEventListener("fetch",(event)=>{

    event.respondWith(

        caches.match(event.request)

        .then(response=>{

            return response || fetch(event.request);

        })

    );

});
