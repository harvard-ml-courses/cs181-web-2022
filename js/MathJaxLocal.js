MathJax.Hub.Config({
  jax: ["input/TeX", "output/svg"],
  tex2jax: {
    inlineMath: [['$', '$']],
    displayMath: [['$$', '$$'],['\\[','\\]']],
    processEscapes: true,
    skipTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
  },
  messageStyle: "none",
  "HTML-CSS": { preferredFont: "TeX", availableFonts: ["STIX","TeX"] },
  TeX: {
    equationNumbers: { autoNumber: "AMS" },
    extensions: ["AMSmath.js", "AMSsymbols.js","AMScd.js"],
    TagSide: "left",
  }
});

MathJax.Ajax.loadComplete("https://harvard-ml-courses.github.io/cs181-web/js/MathJaxLocal.js");
