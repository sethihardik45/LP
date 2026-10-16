// Renders an astrologer landing page from window.ASTROLOGER (defined in each page's index.html).
(function () {
  var a = window.ASTROLOGER || {};
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  var page = el("div", "page");

  var top = el("header", "top");
  var logo = el("img"); logo.src = "../assets/logo.webp"; logo.alt = "Pandit Ji";
  top.appendChild(logo);
  page.appendChild(top);

  var hero = el("div", "hero");
  if (a.photoStyle === "circle") {
    // For cut-out / round photos: shown as a circle on an orange backdrop
    hero.className = "hero hero-circle";
    var ph = el("img", "circle-photo");
    ph.src = a.photo || "";
    ph.alt = a.name || "";
    hero.appendChild(ph);
  } else {
    if (a.photo) hero.style.backgroundImage = "url('" + a.photo.replace(/'/g, "%27") + "')";
    hero.setAttribute("role", "img");
    hero.setAttribute("aria-label", a.name || "");
  }
  page.appendChild(hero);

  var name = el("div", "name");
  name.appendChild(el("span", "role", a.role || "Astrologer"));
  name.appendChild(el("h1", null, a.name));
  page.appendChild(name);
  page.appendChild(el("div", "bar"));


  var cta = el("a", "cta", a.ctaText || ("Talk to " + a.name));
  cta.href = a.ctaLink || "#";
  page.appendChild(cta);

  document.getElementById("app").appendChild(page);
})();
