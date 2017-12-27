---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
---

<div id="leistungen" class="page1" style="font-size: 3.5vmin; padding: 20pt;">
  <h2>Leistungen</h2>

  <div style="padding-right: 20%;">
    <div>
      Wenn Sie den Neubau eines Ein- oder Zweifamilienhauses in Betracht ziehen, sind Sie hier genau richtig. Ich begleite Sie gern bei der Realisierung Ihres Traumes von den eigenen vier Wänden.
    </div>
    <br>
    <div>
      Profitieren Sie von meinen in über 20 jähriger aktiver Bautätigkeit erworbenen Fähigkeiten. Ich stehe privaten Bauherrn und gewerblichen Auftraggebern gleichermaßen zur Verfügung.
    </div>
    <br>
    <div>
      Besonders wichtig bei der Durchführung Ihrer Baumaßnahme ist Ihre aktive Mitwirkung und Mitgestaltung. Gewöhnlich entstehen die meisten Fragen wenn der Bau einmal läuft.
    </div>
  </div>
</div>
<div id="referenzen" class="page2" style="font-size: 3.5vmin; padding: 20pt;">
  <h2>Referenzen</h2>

  <div style="margin: 0 auto;">
    <img src="img/ref/03.jpg" style="width: 80vmin; height: auto;" />
  </div>
</div>

<script>
  function scaleLandingPage(page) {
    page.css("top", 0);
    page.css("height", window.innerHeight);
  }

  function scaleBkgnd(page) {
    var screenRatio = window.innerWidth / window.innerHeight;
    page.css("background-size", (screenRatio > 4 / 3) ? "100% auto" : "auto 100%");
  }

  function adjustBkgnd() {
    var pageHome = $("#home");
    var pageLeistungen = $("#leistungen");
    var pageReferenzen = $("#referenzen");

    scaleLandingPage(pageHome);

    scaleBkgnd(pageHome);
    scaleBkgnd(pageLeistungen);
    scaleBkgnd(pageReferenzen);
  }

  $(window).resize(function() { adjustBkgnd() });
  $(window).ready(function() { adjustBkgnd() });
</script>
