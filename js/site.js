(function () {
  document.querySelectorAll("[data-quote-form]").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        var invalid = form.querySelector(":invalid");
        if (invalid) invalid.focus();
        return;
      }
      var field = form.elements.namedItem("name");
      var name = field && field.value ? field.value.replace(/\s+/g, " ").trim() : "";
      if (!name) name = "there";
      var thanks = form.parentNode.querySelector("[data-quote-thanks]");
      if (!thanks) return;
      var heading = thanks.querySelector("[data-thanks-heading]");
      if (heading) heading.textContent = "Thanks " + name + ", your request is in";
      form.hidden = true;
      thanks.hidden = false;
      thanks.focus();
    });
  });
})();
