'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/asset/circulaires/couverture_sanitaire_handicapes.pdf": "05c59a15aa67f7eb26f794a9c79cb393",
"assets/asset/circulaires/couverture_sanitaire_migrants.pdf": "dd8e3de612fd51824e32f6a2147bafa9",
"assets/asset/circulaires/ecoute_cicsr.pdf": "2c8fd3d4cd696b799de0c9d09160e555",
"assets/asset/circulaires/epls_journ%25C3%25A9es2023.pdf": "bdc3997f9750e345e9e9d5b45abfad62",
"assets/asset/circulaires/integration_handicap.pdf": "e1c08486674d843c1f797bca6c5d025a",
"assets/asset/circulaires/org_calend2012.pdf": "b2a26a4e649af8b5899d082e05cba3e2",
"assets/asset/circulaires/org_calend2015.pdf": "c6cfd905871b5da57d451d2a5dd2871b",
"assets/asset/circulaires/org_etudiants.pdf": "4ad4f84c4fa8228b596e87de3c5f89eb",
"assets/asset/circulaires/org_gratuit%25C3%25A9.pdf": "8403c8d956f796eb54341f7e6f05ae69",
"assets/asset/circulaires/org_report.pdf": "f34e0ef12ee6e8ec78239d6c7e8c27cd",
"assets/asset/circulaires/org_temps_ref.pdf": "9ffe2c444e7a7677677ef79b269f0d4a",
"assets/asset/circulaires/org_tranfert_dossiers.pdf": "6fbf2cf2aa1650f4cd1f6e71bb5a344b",
"assets/asset/circulaires/postvention_suicide.pdf": "21868d58697b265ee0cd414106b10ee5",
"assets/asset/circulaires/vacc_antirabique.pdf": "9ef8559d0c24ead0b6eb84d1ea32f109",
"assets/asset/circulaires/vacc_calendrier.pdf": "f3224cdab06f1d9fb4ad3b8845fba32a",
"assets/asset/circulaires/vacc_hvb.pdf": "bed31fe3eacdd9693e8e43dce8628d17",
"assets/asset/circulaires/vm_anticipee.pdf": "22beeae4ce867012c7e4629c6efb47ad",
"assets/asset/circulaires/vm_association.pdf": "a05a8acad5ece722160d943babb66a64",
"assets/asset/circulaires/vm_univ.pdf": "72be19441de38ed60ed5fdfc31f58408",
"assets/asset/enquetes/gyts2017.pdf": "74aa091036a3503774012d1f61b6464c",
"assets/asset/enquetes/medspad3.pdf": "76ea695e27e7da6defe1a5398f1ff2d9",
"assets/asset/enquetes/MICS6.pdf": "e0b53ae654dddb4bd3c5bb1256b6abd5",
"assets/asset/enquetes/rapport_enfance2021.pdf": "3289b45827aca2c71e8e83fa425517d2",
"assets/asset/enquetes/Resultats%2520enquete%2520sbd%25202003.pdf": "4e66fa349099afea6c333c6459e71de7",
"assets/asset/enquetes/Revue_Prog_ado.pdf": "de1e2a2c5cb111014942a7b85f40a19b",
"assets/asset/enquetes/thes-rapport2020.pdf": "ceeda025d4c3ea7c670e8f0e4784893a",
"assets/asset/fichier_scolaire/cicsr_id_activite.pdf": "cedd8c9aff8393701e704efc88a53ddd",
"assets/asset/fichier_scolaire/crmsu_activite.pdf": "672f1061d053ba670dbf63a46ce08577",
"assets/asset/fichier_scolaire/csu_activite.pdf": "eae077343beb47be517ab2cdcfbfceed",
"assets/asset/fichier_scolaire/csu_id.pdf": "f69e67dd2a611d3ff0ffede0e3ed6591",
"assets/asset/fichier_scolaire/cs_formulaires.pdf": "0957ba4eccb357f64a30c6fea273ea6c",
"assets/asset/fichier_scolaire/enrpt_bilans.pdf": "73eed66914fa7d549c1c30566d18eeef",
"assets/asset/fichier_scolaire/enrpt_vm.pdf": "dca6320ad934ea21b13c289ce86d59e7",
"assets/asset/fichier_scolaire/epidemio_declaration_covid.pdf": "e5e77e7e3263eb5c6888b30dcce6696b",
"assets/asset/fichier_scolaire/epidemio_situation.pdf": "a003caa696aeaf36264d37b812d3b99b",
"assets/asset/fichier_scolaire/epls_club_sante.pdf": "7322f4369cd6b410d83df9b6b23c68c0",
"assets/asset/fichier_scolaire/epls_resg.pdf": "3f018f580c4a27f74613597d898f1abe",
"assets/asset/fichier_scolaire/fir_primaire.pdf": "2799eea644cf9e17ad14c4eceef5b4b3",
"assets/asset/fichier_scolaire/fir_ps.pdf": "e6c96154fc4fd8657346ec3ccd408e3a",
"assets/asset/fichier_scolaire/fir_secondaire.pdf": "cb413d694b49862d12df1c31b1eff0bf",
"assets/asset/fichier_scolaire/fir_u.pdf": "96678a04d064669cc44a798b6d50014d",
"assets/asset/fichier_scolaire/registre_primaire.pdf": "c07fcfe76f60658d14463536b74b4acb",
"assets/asset/fichier_scolaire/registre_ps.pdf": "bf53fddf0e0f48c1c3800b3bac7333ba",
"assets/asset/fichier_scolaire/registre_secondaire.pdf": "8122f8408ab9382be809cea24f0f36ca",
"assets/asset/fichier_scolaire/registre_universitaire.pdf": "65e0cc867b080557221abc46103b637a",
"assets/asset/fichier_scolaire/report_univ.pdf": "048733e50e289b813fdc6dccfa087622",
"assets/asset/fichier_scolaire/suicide_declaration.pdf": "3b3267b3ac2a33a83ab3f1a984576a26",
"assets/asset/fichier_scolaire/vacc_avancement.pdf": "1c54ab6d404a043569a1162dd466ee46",
"assets/asset/fichier_scolaire/vacc_avp.pdf": "5eae5c12ccc0cbb608aa99a5ce8f1d4c",
"assets/asset/fichier_scolaire/vacc_mapi.pdf": "891eb3032c5174577b3b0f20909b0018",
"assets/asset/fichier_scolaire/vacc_vacg.pdf": "87df820b823ad319d85f8335fcfa7bf7",
"assets/asset/fichier_scolaire/vhs_foyers_u.pdf": "0e84df9f3a87d903a93f34b566464d12",
"assets/asset/fichier_scolaire/vhs_internats.pdf": "3bd5ee9c316aac92d9a37cd5e2cccddf",
"assets/asset/fichier_scolaire/vhs_ps.pdf": "2947453c81febbeb61bca60f5c7c1ba7",
"assets/asset/fichier_scolaire/vhs_restau_u.pdf": "f406969214a0867bca89e379d064f96d",
"assets/asset/fichier_scolaire/vhs_u.pdf": "cbc352237b3e46b17414e75a87c56b52",
"assets/asset/fichier_scolaire/vm_fiche_dentaire.pdf": "01cda2346cb126d0028f3a901740a74d",
"assets/asset/fichier_scolaire/vm_fms.pdf": "cd74a8544d9c3032b485dcffa48f5771",
"assets/asset/fichier_scolaire/vm_fm_ps.pdf": "1cef79b7a2c28430705a613a9c2b61a2",
"assets/asset/fichier_scolaire/vm_rapu_csb.pdf": "b32522ba9cf9d06d302eaec77b6f4e39",
"assets/asset/fichier_scolaire/vm_rapu_rattrappage.pdf": "7cdfd165f95b0e5a57bac52ddc369939",
"assets/asset/img_couverture/COUV_CARIE-min.PNG": "8de57f87a5ab6a2701f6ce1062cb66f0",
"assets/asset/img_couverture/couv_chast-min.PNG": "591077c62fdef19c2072a06e315cd59d",
"assets/asset/img_couverture/couv_ecoute_fr-min.png": "febc4476be5929b65d3fdb05e7a116f6",
"assets/asset/img_couverture/couv_PNS-min.PNG": "ce07adb8ca9130c9c39d2754c64e034c",
"assets/asset/img_couverture/couv_pnv-min.PNG": "7b2662078d12c5e641b9c01186be2a7f",
"assets/asset/img_couverture/couv_polio-min.PNG": "6282ad6b4f59aab27e2dfb33674b2d9c",
"assets/asset/img_couverture/couv_protocoles_soins-min.png": "517dbfd3cc4cc7303cd6177578bfb5be",
"assets/asset/img_couverture/couv_tsa_ar-min.PNG": "ac53df86f9e70ed5ce10b27329e32d39",
"assets/asset/img_couverture/couv_tsa_fr.PNG": "e438a8d45e3972fd97c1e350e3fd6860",
"assets/asset/img_couverture/enq_enfance-min.PNG": "2d497ffdea3aee430ac4c365ef96ab64",
"assets/asset/img_couverture/enq_medspad-min.PNG": "480f9fd8fd2f3a402f26c92c4577fc3f",
"assets/asset/img_couverture/enq_revue%2520prog-min.PNG": "5d4dfe8f80882fc090910a400d29d7ad",
"assets/asset/img_couverture/enq_SITAN-min.PNG": "d54e4d4eab660371bd517ce613dc9934",
"assets/asset/img_couverture/enq_TES-min.PNG": "9f4e315ad1f3c686bf1225b6e5a12694",
"assets/asset/img_couverture/en_%2520gyts-min.PNG": "743c02238d2aa5e7df63609d4d29e66d",
"assets/asset/img_couverture/img_couverture.rar": "c4067cc76c33e729d628d2815df80a74",
"assets/asset/img_couverture/logodmsu-min.png": "c27e7d432cc840b2f5eacb35911064ec",
"assets/asset/modules_formation/formation_accompagnement_psy.pdf": "ae2b171355f4a320dfb88e47847652f9",
"assets/asset/modules_formation/formation_carie_paro.pdf": "6220107f12cb2d877b09b8db482b7fbd",
"assets/asset/modules_formation/formation_ecoute_conseil.pdf": "fc6c4cc8efdcc641c1ece6441964419c",
"assets/asset/modules_formation/formation_guide_polio.pdf": "7936ce0b0c3dbd6280729edf685e7ea1",
"assets/asset/modules_formation/formation_manuel_chast.pdf": "410b58a74e5754adbcef57243881e719",
"assets/asset/modules_formation/formation_pns2030.pdf": "02118b8831e5e883e4b57283d14e8d3c",
"assets/asset/modules_formation/formation_pnsbd.pdf": "d8306e6a6b3147beb173cd1a18fa69a5",
"assets/asset/modules_formation/formation_pnv.pdf": "65ee52fd2479ed66f3961464cc9a9e1c",
"assets/asset/modules_formation/formation_protocoles_de_soins.pdf": "3fddcb599d56dceb112d572bc1c3019f",
"assets/asset/modules_formation/formation_strategie_mnt.pdf": "1cb2a05e302da15a03b0439e41cf3fd7",
"assets/asset/modules_formation/formation_tsa_ar.pdf": "5138defcbf5762afe43f7db11b820fe7",
"assets/asset/modules_formation/formation_tsa_fr.pdf": "507deda81bd74ff0a8a1973aa9a7bf21",
"assets/asset/supports_epls/epls_accidents%2520prescolaire.pdf": "34c7ea71b24b88314357cb7b866b3844",
"assets/asset/supports_epls/epls_activite_physique.pdf": "2e021e5c236c28179295d160919c8cca",
"assets/asset/supports_epls/epls_cancer_affiche.pdf": "7fca1b0e16b35f50528c8f09686997d2",
"assets/asset/supports_epls/epls_comportment_risque.pdf": "f149887f8959e47c17b503e368f0028f",
"assets/asset/supports_epls/epls_covid_affiche.pdf": "6dadfbb8a61a8cdd06c2400dee4ab238",
"assets/asset/supports_epls/epls_cyberaddiction_brochure.pdf": "5eb3500a5d295e7f0c14a00cdf7a22f4",
"assets/asset/supports_epls/epls_drogue_affiche.pdf": "dc3f71de62c31621f4ca8dc67fe690a2",
"assets/asset/supports_epls/epls_estime_affiche.pdf": "cf7f632c83862e35895ec82ce20034c6",
"assets/asset/supports_epls/epls_hyg_menstruelle.pdf": "d80ecd56c7ef838d2dd5fa9b649cda62",
"assets/asset/supports_epls/epls_lavage_mains.pdf": "b962b6fd274bf6cee726281613f1c542",
"assets/asset/supports_epls/epls_medicament_affiche.pdf": "30f0bbea9c6c8f1f3ce1b5eb0c97b204",
"assets/asset/supports_epls/epls_mode_sain_affiche.pdf": "53c75fc185a25d04b7081963a3d19f7d",
"assets/asset/supports_epls/epls_nutrition_affiches.pdf": "9916858f8757a3ba637b165007a9d95e",
"assets/asset/supports_epls/epls_rage_affiche.pdf": "ed4ba53a5f2c607cb407934c952a37b0",
"assets/asset/supports_epls/epls_sbd_affiches.pdf": "4e1d91e62bc57ae9f2345f750af685b9",
"assets/asset/supports_epls/epls_sbd_divers.pdf": "1da26fc01ec3fbf7cd5bf6859b142868",
"assets/asset/supports_epls/epls_sbd_flipshart.pdf": "6fb54a288ab8bb568d7a8c1ea557233c",
"assets/asset/supports_epls/epls_sbsd_coloriage.pdf": "6a2dabe5e5da8509c31b3f3834111a0a",
"assets/asset/supports_epls/epls_shigellose.pdf": "51693e51d002d189670261b1910fc5fb",
"assets/asset/supports_epls/epls_sida_affiche.pdf": "07b9fdb3c86e46b2174e9efa7a91f04d",
"assets/asset/supports_epls/epls_tabac_affiche.pdf": "c9a19106fc661507a8945ba24bcbc3fa",
"assets/asset/supports_epls/supports_epls.rar": "eca08b8c7fbf9866f116c5837fb2e637",
"assets/AssetManifest.bin": "b24c4dde2d156e7aeba9e707860003f3",
"assets/AssetManifest.json": "c26a97b1fdac7d50e0becc84819ab538",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "0100e01f78619bc354a9ccb16575dcac",
"assets/NOTICES": "b163721790dd712aaaf63df871fa4870",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/flutter_signin_button/assets/logos/2.0x/facebook_new.png": "83bf0093719b2db2b16e2839aee1069f",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_dark.png": "937022ea241c167c8ce463d2ef7ed105",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_light.png": "8f10eb93525f0c0259c5e97271796b3c",
"assets/packages/flutter_signin_button/assets/logos/3.0x/facebook_new.png": "12531aa3541312b7e5ddd41223fc60cb",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_dark.png": "ac553491f0002941159b405c2d37e8c6",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_light.png": "fe46d37e7d6a16ecd15d5908a795b4ee",
"assets/packages/flutter_signin_button/assets/logos/facebook_new.png": "e1dff5c319a9d7898aee817f624336e3",
"assets/packages/flutter_signin_button/assets/logos/google_dark.png": "c32e2778b1d6552b7b4055e49407036f",
"assets/packages/flutter_signin_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7ce5017993b42ab9556f7e5cbaf8456b",
"/": "7ce5017993b42ab9556f7e5cbaf8456b",
"main.dart.js": "96a3636ad9fdc290ccbb84434a68cb88",
"manifest.json": "6c72a51351db1606624a6cff34ff8133",
"version.json": "7b010a5e7ca47c705a5c0db697e182d7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
