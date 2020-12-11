function loadPage(href) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", href, false);
  xmlhttp.send();
  return xmlhttp.responseText;
}

document.getElementById("max-main").innerHTML = loadPage("../pages/index.html");

$(".max-nav-link").click(function (e) {
  $(".max-active-link").removeClass("max-active-link");
  $(".max-main").empty();
  document.getElementById("max-main").innerHTML = loadPage(
    e.currentTarget.dataset.href
  );
  $(".animated-icon1").click();
  if (e.currentTarget.dataset.hrefs) $.getScript(e.currentTarget.dataset.hrefs);
  $(e.currentTarget).addClass("max-active-link");
});

$(".max-normal-link").click(function (e) {
  $(".max-active-link").removeClass("max-active-link");
  $(".max-main").empty();
  document.getElementById("max-main").innerHTML = loadPage(
    e.currentTarget.dataset.href
  );
  if (e.currentTarget.dataset.hrefs) $.getScript(e.currentTarget.dataset.hrefs);
  $(e.currentTarget).addClass("max-active-link");
});
