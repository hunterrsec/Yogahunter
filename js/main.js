// (function(){
//   var header=document.getElementById('header');
//   function onScroll(){ if(header) header.classList.toggle('scrolled',window.scrollY>50); }
//   window.addEventListener('scroll',onScroll); onScroll();

//   var ham=document.getElementById('hamburger'), nav=document.getElementById('navLinks');
//   if(ham&&nav){
//     ham.addEventListener('click',function(){nav.classList.toggle('open');});
//     nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('open');});});
//   }

//   document.querySelectorAll('.faq-q').forEach(function(q){
//     q.addEventListener('click',function(){
//       var a=this.nextElementSibling;
//       var open=a.style.maxHeight;
//       document.querySelectorAll('.faq-a').forEach(function(x){x.style.maxHeight=null;});
//       document.querySelectorAll('.faq-q span').forEach(function(s){s.textContent='+';});
//       if(!open){a.style.maxHeight=a.scrollHeight+'px';this.querySelector('span').textContent='−';}
//     });
//   });

//   var lb=document.getElementById('lightbox'), lbImg=document.getElementById('lbImg');
//   function bindGallery(grid){
//     if(!grid) return;
//     grid.addEventListener('click',function(e){
//       var img=e.target.closest('img');
//       if(!img) return;
//       if(lb){lbImg.src=img.getAttribute('data-full')||img.src;lb.classList.add('open');}
//     });
//   }
//   bindGallery(document.getElementById('galGrid'));
//   bindGallery(document.getElementById('retreatGrid'));
//   bindGallery(document.getElementById('ttcGrid'));
//   document.querySelectorAll('.gallery-grid-extra').forEach(function(g){ bindGallery(g); });
//   if(lb){
//     lb.addEventListener('click',function(){lb.classList.remove('open');});
//     document.addEventListener('keydown',function(e){if(e.key==='Escape')lb.classList.remove('open');});
//   }

//   function thumb(url){
//     var m=url.match(/dc56da_([a-f0-9]+)~mv2\.(jpg|png|jpeg)/);
//     if(!m) return url;
//     return 'https://static.wixstatic.com/media/dc56da_'+m[1]+'~mv2.'+m[2]+'/v1/fill/w_800,h_800,al_c,q_85,enc_auto/dc56da_'+m[1]+'~mv2.'+m[2];
//   }

//   var galleryImages=[
//     'https://static.wixstatic.com/media/dc56da_16ca80d4462d4dcbb930e9fb324ec664~mv2.jpg',
//     'https://static.wixstatic.com/media/dc56da_10404e899699440baf7f3bfbcbac8101~mv2.jpg',
//     'https://static.wixstatic.com/media/dc56da_73d392f1d2364f319ea22d2b62e61bb2~mv2.jpg',
//     'https://static.wixstatic.com/media/dc56da_517a5891d0af4af3a00f3e7a7fa3ac0f~mv2.jpg',
//     'https://static.wixstatic.com/media/dc56da_5819f4f5bcb84d199f71a59386bc3e7f~mv2.jpg',
//     'https://static.wixstatic.com/media/dc56da_7670a3b90e7c4489945a1d8cbcc6cf9c~mv2.jpg',
//     'https://static.wixstatic.com/media/dc56da_8574cee6f57a4a34853f019025acacb4~mv2.jpg',
//     'https://static.wixstatic.com/media/dc56da_778dbbd1a45b4e15b800820be5f13d63~mv2.jpg',
//     'https://static.wixstatic.com/media/dc56da_e7b219719f4e45ada209a0527df6cd56~mv2.jpg',
//     'https://static.wixstatic.com/media/dc56da_95e952c4a6f14d728d2df45304f219a8~mv2.jpg',
//     'https://static.wixstatic.com/media/dc56da_a0e9f2253c4c41b7bdd49b0b26c02bcb~mv2.jpg',
//     'https://static.wixstatic.com/media/dc56da_ceefa96e2bb34b6ebc539b067aef9732~mv2.jpg',
//     'https://static.wixstatic.com/media/dc56da_8a51b26190e54a78a0e6791519433b6b~mv2.jpg',
//   //  'https://raw.githubusercontent.com/hunterrsec/Photos_Atul/refs/heads/main/yoga/New16.png',
//     'https://static.wixstatic.com/media/dc56da_eef099334e604b1e95a0c41bb0d5a9f7~mv2.jpg',
//     'https://static.wixstatic.com/media/dc56da_95bdf7270cbc4515bc2813ab178d6310~mv2.jpg',
//     'https://static.wixstatic.com/media/dc56da_20b686c145fd458fa22a628397a3f363~mv2.jpg',
//     'https://static.wixstatic.com/media/dc56da_6d3525e7a98f48feb9304707665011b0~mv2.jpg',
//     'https://static.wixstatic.com/media/dc56da_8a146f83e1bd4fb2be26e80b53207349~mv2.jpg',
//     'https://static.wixstatic.com/media/dc56da_de08da9a2a1541c18431faaff6d25bb0~mv2.png',
//     'https://static.wixstatic.com/media/dc56da_f8019f6c8ebc42f0af4747c818e5d300~mv2.jpg',
//     'https://static.wixstatic.com/media/dc56da_5ce12eb422c047629938edb029d8ef4e~mv2.png',
//     'https://static.wixstatic.com/media/dc56da_1173109135734f96b6ea9f65e914a55c~mv2.jpg',
//     'https://static.wixstatic.com/media/dc56da_852bc357ce3c459a8504042509d58f14~mv2.jpg'
//   ];
//   var grid=document.getElementById('galGrid');
//   if(grid){
//     var html='';
//     galleryImages.forEach(function(u,i){
//       var cls=(i===2||i===5||i===9||i===13)?'gal-item tall':'gal-item';
//       html+='<div class="'+cls+'"><img loading="lazy" src="'+thumb(u)+'" data-full="'+u+'" alt="Polem Beach Yoga Goa gallery image"></div>';
//     });
//     grid.innerHTML=html;
//   }

//   var wa=document.getElementById('waFloat');
//   if(wa){ wa.addEventListener('click',function(){window.open('https://wa.me/919270318818','_blank');}); }

//   var obs=new IntersectionObserver(function(entries){
//     entries.forEach(function(en){ if(en.isIntersecting){en.target.classList.add('in');obs.unobserve(en.target);} });
//   },{threshold:.12});
//   document.querySelectorAll('.reveal').forEach(function(el){obs.observe(el);});

//   var revealers=document.querySelectorAll('.section-head h2,.program,.pillar,.curr,.pack,.hl,.amen,.testi,.gal-item,.split,.c-card');
//   revealers.forEach(function(el){ if(!el.classList.contains('reveal')) el.classList.add('reveal'); obs.observe(el); });
// })();

(function () {
  /* =========================
     HEADER / NAVIGATION
  ========================== */

  var header = document.getElementById("header");

  function onScroll() {
    if (header) {
      header.classList.toggle("scrolled", window.scrollY > 50);
    }
  }

  window.addEventListener("scroll", onScroll);
  onScroll();

  var ham = document.getElementById("hamburger");
  var nav = document.getElementById("navLinks");

  if (ham && nav) {
    ham.addEventListener("click", function () {
      nav.classList.toggle("open");
      ham.classList.toggle("active");
    });

    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        ham.classList.remove("active");
      });
    });
  }


  /* =========================
     FAQ
  ========================== */

  document.querySelectorAll(".faq-q").forEach(function (q) {
    q.addEventListener("click", function () {
      var answer = this.nextElementSibling;
      var isOpen = answer && answer.style.maxHeight;

      document.querySelectorAll(".faq-a").forEach(function (x) {
        x.style.maxHeight = null;
      });

      document.querySelectorAll(".faq-q span").forEach(function (s) {
        s.textContent = "+";
      });

      if (answer && !isOpen) {
        answer.style.maxHeight = answer.scrollHeight + "px";

        var icon = this.querySelector("span");
        if (icon) {
          icon.textContent = "−";
        }
      }
    });
  });


  /* =========================
     LIGHTBOX
  ========================== */

  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lbImg");

  function bindGallery(grid) {
    if (!grid) return;

    grid.addEventListener("click", function (e) {
      var img = e.target.closest("img");

      if (!img) return;

      var fullImage =
        img.getAttribute("data-full") ||
        img.currentSrc ||
        img.src;

      if (lightbox && lightboxImg) {
        lightboxImg.src = fullImage;
        lightbox.classList.add("open");
        document.body.classList.add("lightbox-open");
      }
    });
  }

  bindGallery(document.getElementById("galGrid"));
  bindGallery(document.getElementById("retreatGrid"));
  bindGallery(document.getElementById("ttcGrid"));

  document.querySelectorAll(".gallery-grid-extra").forEach(function (grid) {
    bindGallery(grid);
  });

  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (
        e.target === lightbox ||
        e.target.classList.contains("lightbox-close")
      ) {
        lightbox.classList.remove("open");
        document.body.classList.remove("lightbox-open");
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        lightbox.classList.remove("open");
        document.body.classList.remove("lightbox-open");
      }
    });
  }


  /* =========================
     IMAGE URL OPTIMIZATION
  ========================== */

  function optimizedImage(url, width) {
    if (!url) return "";

    width = width || 1200;

    /*
      Wix image CDN optimization.
      Do NOT force the image into 800x800.
      This preserves the original aspect ratio.
    */

    if (url.indexOf("static.wixstatic.com/media/") === -1) {
      return url;
    }

    var parts = url.split("/media/");

    if (parts.length < 2) {
      return url;
    }

    var fileName = parts[1];

    /*
      Remove an existing Wix transformation if present.
    */
    fileName = fileName.split("/v1/")[0];

    return (
      "https://static.wixstatic.com/media/" +
      fileName +
      "/v1/fit/w_" +
      width +
      ",q_85,enc_auto/" +
      fileName
    );
  }


  /* =========================
     GALLERY IMAGES
  ========================== */

  var galleryImages = [
    "https://raw.githubusercontent.com/hunterrsec/Photos_Atul/main/yoga/1.jpg",
    "https://raw.githubusercontent.com/hunterrsec/Photos_Atul/main/yoga/2.jpg",
    "https://raw.githubusercontent.com/hunterrsec/Photos_Atul/main/yoga/3.jpg",
    "https://raw.githubusercontent.com/hunterrsec/Photos_Atul/main/yoga/4.jpg",
    "https://raw.githubusercontent.com/hunterrsec/Photos_Atul/main/yoga/5.jpg",
    "https://raw.githubusercontent.com/hunterrsec/Photos_Atul/main/yoga/6.jpg",
    "https://raw.githubusercontent.com/hunterrsec/Photos_Atul/main/yoga/7.jpg",
    "https://raw.githubusercontent.com/hunterrsec/Photos_Atul/main/yoga/8.jpg",
    "https://raw.githubusercontent.com/hunterrsec/Photos_Atul/main/yoga/9.jpg",
    "https://raw.githubusercontent.com/hunterrsec/Photos_Atul/main/yoga/New10.png",
    "https://raw.githubusercontent.com/hunterrsec/Photos_Atul/main/yoga/New11.png",
    "https://raw.githubusercontent.com/hunterrsec/Photos_Atul/main/yoga/New12.png",
    "https://raw.githubusercontent.com/hunterrsec/Photos_Atul/main/yoga/New13.png",
    "https://raw.githubusercontent.com/hunterrsec/Photos_Atul/main/yoga/New15.png",
    "https://raw.githubusercontent.com/hunterrsec/Photos_Atul/main/yoga/New14.png",
    "https://raw.githubusercontent.com/hunterrsec/Photos_Atul/main/yoga/New16.png",
    "https://raw.githubusercontent.com/hunterrsec/Photos_Atul/main/yoga/8.jpg",
    "https://raw.githubusercontent.com/hunterrsec/Photos_Atul/main/yoga/18.jpg",
    "https://raw.githubusercontent.com/hunterrsec/Photos_Atul/main/yoga/19.jpg",
    "https://raw.githubusercontent.com/hunterrsec/Photos_Atul/main/yoga/20.jpg",
    "https://raw.githubusercontent.com/hunterrsec/Photos_Atul/refs/heads/main/yoga/23.png",
    "https://static.wixstatic.com/media/dc56da_1c18ec950dbb405986bc2ff25bfb9624~mv2.jpg",
    "https://raw.githubusercontent.com/hunterrsec/Photos_Atul/refs/heads/main/yoga/7.jpg"
  ];


  /* =========================
     BUILD GALLERY
  ========================== */

  var grid = document.getElementById("galGrid");

  if (grid) {
    var html = "";

    galleryImages.forEach(function (url, index) {

      /*
        Every few images get a larger gallery card.
        CSS controls the actual visual ratio.
      */

      var large =
        index === 2 ||
        index === 5 ||
        index === 9 ||
        index === 13 ||
        index === 17;

      var className = large
        ? "gal-item gal-large"
        : "gal-item";

      html +=
        '<div class="' +
        className +
        '">' +
        '<img ' +
        'loading="lazy" ' +
        'decoding="async" ' +
        'src="' +
        optimizedImage(url, 1200) +
        '" ' +
        'data-full="' +
        url +
        '" ' +
        'alt="Polem Beach Yoga Goa gallery image ' +
        (index + 1) +
        '" ' +
        'draggable="false">' +
        "</div>";
    });

    grid.innerHTML = html;
  }


  /* =========================
     WHATSAPP
  ========================== */

  var wa = document.getElementById("waFloat");

  if (wa) {
    wa.addEventListener("click", function () {
      window.open(
        "https://wa.me/919270318818",
        "_blank",
        "noopener,noreferrer"
      );
    });
  }


  /* =========================
     SCROLL REVEAL
  ========================== */

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  document.querySelectorAll(".reveal").forEach(function (el) {
    observer.observe(el);
  });

  var revealers = document.querySelectorAll(
    ".section-head h2, .program, .pillar, .curr, .pack, .hl, .amen, .testi, .gal-item, .split, .c-card"
  );

  revealers.forEach(function (el) {
    if (!el.classList.contains("reveal")) {
      el.classList.add("reveal");
    }

    observer.observe(el);
  });

})();