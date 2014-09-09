// Save Current Page to Flipboard

(function (d, w, p, s, r, t, l) {
    t = (w.screenTop || w.screenY) + 50;
    l = (w.screenX || w.screenLeft) + (w.innerWidth || d.documentElement.offsetWidth || 0) / 2 - s / 2;
    w.__flipboard = w.open('https://share.flipboard.com/bookmarklet/popout?v=2&title=' + encodeURIComponent(d.title) + '&url=' + encodeURIComponent(w.location.href) + '&t=' + p, '__flipboard_flipit', 'width=' + s + ',height=' + r + ',top=' + t + ',left=' + l + ',location=yes,resizable=yes,status=no,scrollbars=no,personalbar=no,toolbar=no,menubar=no');
    s = d.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', 'https://d2jsycj2ly2vqh.cloudfront.net/bookmarklet/js/popout-helper.min.js?t=' + p);
    d.body.appendChild(s);
    setTimeout(function () {
        w.__flipboard.focus()
    }, 50);
})(document, window, (new Date().getTime()), 535, 565)