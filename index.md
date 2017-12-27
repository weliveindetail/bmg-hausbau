---
layout: default
---

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>{{ page.title | escape }}</title>
  <meta name="description" content="{{ page.excerpt | default: site.description | strip_html | normalize_whitespace | truncate: 160 | escape }}">

  <link rel="stylesheet" href="{{ "/assets/main.css" | relative_url }}">
  <link rel="canonical" href="{{ page.url | replace:'index.html','' | absolute_url }}">

  <script language="JavaScript" type="text/javascript">
    if (window.location.host == "weliveindetail.github.io" && window.location.protocol != "https:") {
      window.location.protocol = "https:";
    }
  </script>

  <script language="JavaScript" type="text/javascript"
          src="{{ "/js/jquery/jquery-3.2.1.js" | relative_url }}">
  </script>

  {% if jekyll.environment == 'production' and site.google_analytics %}
  {% include google-analytics.html %}
  {% endif %}
</head>

<body>
  <main class="page-content" aria-label="Content">
    <div class="wrapper">
      <div id="home" class="page0" style="position: relative;">
        <header class="site-header" role="banner">
          <div class="wrapper">
            {% assign default_paths = site.pages | map: "path" %}
            {% assign page_paths = site.header_pages | default: default_paths %}
            <a class="site-title" href="{{ "/" | relative_url }}">{{ site.title | escape }}</a>

            {% if page_paths %}
              <nav class="site-nav">
                <input type="checkbox" id="nav-trigger" class="nav-trigger" />
                <label for="nav-trigger">
                  <span class="menu-icon">
                    <svg viewBox="0 0 18 15" width="18px" height="15px">
                      <path fill="#424242" d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.031C17.335,0,18,0.665,18,1.484L18,1.484z"/>
                      <path fill="#424242" d="M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0c0-0.82,0.665-1.484,1.484-1.484 h15.031C17.335,6.031,18,6.696,18,7.516L18,7.516z"/>
                      <path fill="#424242" d="M18,13.516C18,14.335,17.335,15,16.516,15H1.484C0.665,15,0,14.335,0,13.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.031C17.335,12.031,18,12.696,18,13.516L18,13.516z"/>
                    </svg>
                  </span>
                </label>

                <div class="trigger">
                  <a class="page-link" href="#leistungen">Leistungen</a>
                  <a class="page-link" href="#referenzen">Referenzen</a>
                  <a class="page-link" href="#kontakt">Kontakt</a>
                </div>
              </nav>
            {% endif %}
          </div>
        </header>

        <div style="position: absolute; bottom: 0pt; color: #222;">
          <div style="margin: 10pt 0pt; text-shadow: 2px 0px #cccccc; font-size: 8vmin;">
            <span style="background: #ffffffaa; padding: 5pt 15pt 5pt 10pt;">
              Wir bauen
            </span>
          </div>
          <div style="margin: 10pt 0pt; text-shadow: 2px 0px #cccccc; font-size: 8vmin;">
            <span style="background: #ffffffaa; padding: 5pt 15pt 5pt 10pt;">
              Ihr Zuhause
            </span>
          </div>
          <div style="margin-top: 10pt; margin-bottom: 0pt; background: #ffffffaa; padding: 10pt 15pt 10pt 10pt; font-size: 3.5vmin;">
            Tel.: <a href="tel:+491608576884">(0)160 85 76 88 4</a><br>
            E-Mail: <a href="click:the.address.will.be.decrypted.by.javascript"
                       id="MailAddress_header" onclick='openMailer(this);'></a><br>
            Baumanagement Mathias Gränitz
          </div>
        </div>
      </div>

      <div class="home">
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
      </div>
    </div>
  </main>

  <footer class="site-footer">
    <div id="kontakt" class="wrapper">
      <div class="footer-col-wrapper" style="margin-left: 0px;">
        <div class="footer-col footer-col-1" style="padding-left: 15pt;">
          Baumanagement Mathias Gränitz<br>
          Wittgensdorfer Weg 4<br>
          09244 Lichtenau<br>
          <br>
          Tel.: <a href="tel:+491608576884">(0)160 85 76 88 4</a><br>
          E-Mail: <a href="click:the.address.will.be.decrypted.by.javascript" id="MailAddress_footer" onclick='openMailer(this);'></a>
        </div>

        <div class="footer-col footer-col-3">
          <!--<p>{{ site.description | escape }}</p>-->
          &nbsp;
        </div>
      </div>
    </div>

    <script language="JavaScript" type="text/javascript">
      function decode(a, shift) {
        return a.replace(/[a-zA-Z]/g, function(c){
          return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + shift) ? c : c - 26);
        })
      };
      function encode(a, shift) {
        return a.replace(/[a-zA-Z]/g, function(c){
          return String.fromCharCode((c >= "a" ? 97 : 65) <= (c = c.charCodeAt(0) - shift) ? c : c + 26);
        })
      };
      function decodeAddress() {
        return decode("tenravgm-onh", 13) + "@" + decode("pvg.mn", 17);
      }
      function openMailer(element) {
        element.setAttribute("href", "mailto:" + decodeAddress());
        element.setAttribute("onclick", "");
      };

      var addr = decodeAddress();
      $("#MailAddress_header").html(addr);
      $("#MailAddress_footer").html(addr);

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
  </footer>
</body>
