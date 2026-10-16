// Renders an astrologer page from window.ASTROLOGER (defined in each page's index.html).
(function () {
  var a = window.ASTROLOGER || {};
  var root = document.getElementById("app");

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function card(title) {
    var c = el("section", "card");
    c.appendChild(el("h2", null, title));
    return c;
  }
  function chips(list) {
    var w = el("div", "chips");
    (list || []).forEach(function (t) { w.appendChild(el("span", "chip", t)); });
    return w;
  }

  var wrap = el("main", "wrap");

  var hero = el("header", "hero");
  var img = el("img", "avatar");
  img.src = a.photo || "";
  img.alt = a.name || "";
  hero.appendChild(img);
  hero.appendChild(el("h1", null, a.name));
  hero.appendChild(el("p", "title", a.title));
  if (a.verified) hero.appendChild(el("span", "verified", "✓ Verified Astrologer"));
  wrap.appendChild(hero);

  var stats = el("div", "stats");
  [
    [a.rating ? a.rating + " ★" : "", "Rating"],
    [a.experienceYears ? a.experienceYears + "+ yrs" : "", "Experience"],
    [a.consultations || "", "Consultations"]
  ].forEach(function (s) {
    if (!s[0]) return;
    var d = el("div", "stat");
    d.appendChild(el("b", null, s[0]));
    d.appendChild(el("span", null, s[1]));
    stats.appendChild(d);
  });
  wrap.appendChild(stats);

  if (a.about) { var c1 = card("About"); c1.appendChild(el("p", null, a.about)); wrap.appendChild(c1); }
  if (a.expertise && a.expertise.length) { var c2 = card("Expertise"); c2.appendChild(chips(a.expertise)); wrap.appendChild(c2); }
  if (a.languages && a.languages.length) { var c3 = card("Languages"); c3.appendChild(chips(a.languages)); wrap.appendChild(c3); }
  if (a.reviews && a.reviews.length) {
    var c4 = card("What clients say");
    a.reviews.forEach(function (r) {
      var d = el("div", "review");
      d.appendChild(el("p", null, "“" + r.text + "”"));
      d.appendChild(el("small", null, "— " + r.name));
      c4.appendChild(d);
    });
    wrap.appendChild(c4);
  }

  var bar = el("div", "cta");
  if (a.price) {
    var p = el("div", "price");
    p.appendChild(document.createTextNode("Starting at "));
    p.appendChild(el("b", null, a.price));
    bar.appendChild(p);
  }
  var btn = el("a", "btn", a.ctaText || "Consult Now");
  btn.href = a.ctaLink || "#";
  bar.appendChild(btn);

  root.appendChild(wrap);
  root.appendChild(bar);
})();
