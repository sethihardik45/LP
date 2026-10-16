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
  var logo = el("img"); logo.src = "../assets/logo.svg"; logo.alt = "";
  top.appendChild(logo);
  top.appendChild(el("span", null, "Astrotalk"));
  page.appendChild(top);

  var hero = el("div", "hero");
  if (a.photo) hero.style.backgroundImage = "url('" + a.photo.replace(/'/g, "%27") + "')";
  hero.setAttribute("role", "img");
  hero.setAttribute("aria-label", a.name || "");
  page.appendChild(hero);

  var name = el("div", "name");
  name.appendChild(el("span", "role", a.role || "Astrologer"));
  name.appendChild(el("h1", null, a.name));
  page.appendChild(name);
  page.appendChild(el("div", "bar"));

  if (a.skills && a.skills.length) {
    var s = el("div", "skills");
    a.skills.forEach(function (t) { s.appendChild(el("div", null, t)); });
    page.appendChild(s);
  }

  var cta = el("a", "cta", a.ctaText || ("Talk to " + a.name));
  cta.href = a.ctaLink || "#";
  page.appendChild(cta);

  document.getElementById("app").appendChild(page);
})();
