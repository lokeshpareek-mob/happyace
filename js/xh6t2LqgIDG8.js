let currentReviewsIndex = 0;
function reviewsArrow(direction) {
  const containerp = document.getElementById("gpReviews");
  const container = document.querySelectorAll(".gp_reviews_container")[0];
  const slides = document.querySelectorAll(".reviews-item");
  const containerWidth = container.offsetWidth;
  const endPos = direction === "right" ? -containerWidth : containerWidth;

  // Move the container
  containerp.style.transition = "transform 0.5s";
  currentReviewsIndex =
    (currentReviewsIndex +
      (direction === "right" ? 1 : -1) +
      slides.length / 2) %
    (slides.length / 2);
  containerp.scrollLeft = currentReviewsIndex * Math.abs(endPos);
}

function goTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    // behavior: "smooth",
  });
}

var TGAPKURL =
  "https://d1fb2aqk1yyubf.cloudfront.net/apk/com.gold.teenpatti.tgchannel01/HappyaceCasino.apk";
function isTgUrl() {
  var pathname = window.location.pathname;
  var tgPath = pathname.split("/");
  if (tgPath.length < 2) {
    return false;
  }
  if (tgPath[1] == "tg") {
    return true;
  }
  return false;
}
function downloadApp() {
  thinkdataChnup("Happyace_download", {});
  event.preventDefault();
  chnup("click");
  let tgStatus = isTgUrl();
  window.isdownload = true;
  setCookie("intoType", false);
  if (tgStatus) {
    window.location.href = TGAPKURL;
    return;
  }
  // console.log("download android")
  try {
    var url = decodeURI(window.location.href);
    var wlist = url.split("?");
    var code = "";
    if (wlist.length > 1) {
      var list = wlist[1].split("&");
      for (let i = 0; i < list.length; i++) {
        var arr = list[i].split("=");
        if (arr.length == 1) {
          code = arr[0];
          break;
        } else if (arr[0] == "i") {
          code = arr[1];
          break;
        }
      }
    } else {
      code = getCookie("code");
      if (code == null) code = "";
    }
    // // if (wlist.length < 2) {
    // //     return
    // // }
    // if (!wlist[1]) {
    //   const code = getCookie("code");
    //   wlist[1] = code;
    // }
    // console.log(wlist[1]);
    var reqUrl =
      "https://gate.highrummy.online/api/invite/down/url/?code=" +
      code +
      "&refer=" +
      document.referrer;

    serviceRequest = new XMLHttpRequest();
    serviceRequest.open("GET", reqUrl, true);
    serviceRequest.onreadystatechange = readyUrl;
    serviceRequest.send();
  } catch (err) {
    var reqUrl =
      "https://test-api.highrummy.online/api/invite/down/url/?code=" +
      "" +
      "&refer=" +
      document.referrer;

    serviceRequest = new XMLHttpRequest();
    serviceRequest.open("GET", reqUrl, true);
    serviceRequest.onreadystatechange = readyUrl;
    serviceRequest.send();
  }
}
function readyUrl() {
  if (serviceRequest.readyState == 4) {
    let response = JSON.parse(serviceRequest.response);
    if (response.status == 0 && response.data.down_url != "") {
      window._latest_apk = "";
      window._latest_apk = response.data.down_url;
      // downloadApkAsync(window._latest_apk)
      window.location.href = window._latest_apk;
      thinkdataChnup("Happyace_download_success", {});
      return;
    }
  } else {
  }
}
function chnup(event) {
  var xmlhttp = new XMLHttpRequest();
  window._chnup_name = "com.gold.teenpatti.invite";
  xmlhttp.open("POST", "https://gate.highrummy.online/api/sys/chnup/", true);
  xmlhttp.send(
    "action=" +
      event +
      "&page=" +
      encodeURIComponent(location.href) +
      "&chn=" +
      window._chnup_name +
      "&refer=" +
      document.referrer
  );
}
function getCookie(name) {
  const cookieString = document.cookie;
  const cookies = cookieString.split("; ");
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName === name) {
      return cookieValue;
    }
  }
  return null;
}
window.onscroll = function () {
  scrollFunction();
  var drop = document.getElementById("dropdownMenu");
  if (drop) {
    drop.style.display == "block" ? (drop.style.display = "none") : "";
  }
};
function scrollFunction() {
  var topBtn = document.getElementById("topBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    if (topBtn) topBtn.style.display = "block";
  } else {
    if (topBtn) topBtn.style.display = "none";
  }
  var bot = document.getElementById("bottomBanner");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    if (bot) bot.style.display = "flex";
  } else {
    if (bot) bot.style.display = "none";
  }
}
function showMenu() {
  event.stopPropagation();
  document.getElementById("dropdownMenu").style.display = "block";
}
function closeMenu() {
  event.stopPropagation();
  document.getElementById("dropdownMenu").style.display = "none";
}
window.onload = function () {
  sessionStorage.setItem("gameQueryParams", null);
  var width = window.innerWidth;
  if (width <= 767) {
    changeDomStyle("load");
  }
};
document.addEventListener("DOMContentLoaded", function () {
  // console.log("DOMContentLoaded");
  let val = getCookie("intoType");
  if (!val) {
    setCookie("code", "", -1);
    thinkdataChnup("Happyace_uv", {});
    thinkdataChnup("Happyace_ip", {});
    getUrl();
  } else {
    thinkdataChnup("Happyace_pv", {});
  }
  setCookie("intoType", false);
  var fh = document.getElementById("footer").offsetHeight;
  var hh = document.querySelectorAll(".main-header")[0].offsetHeight;
  document.querySelectorAll(
    ".main-content"
  )[0].style.minHeight = `calc(100vh - ${fh + hh}px)`;
  var elements = document.getElementsByClassName("menu_li");
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function () {
      setCookie("intoType", true);
    });
  }
});
window.addEventListener("orientationchange", function () {
  changeDomStyle();
});
document.addEventListener("click", function (event) {
  if (!window.isdownload) {
    setCookie("intoType", true);
  }
  window.isdownload = false;
});
window.addEventListener("beforeunload", function (event) {
  let val = getCookie("intoType");
  if (!val) {
    thinkdataChnup("Happyace_br", {});
  }
});
function getUrl() {
  var url = decodeURI(window.location.href);
  var wlist = url.split("?");
  var code = "";
  if (wlist.length > 1) {
    var list = wlist[1].split("&");
    for (let i = 0; i < list.length; i++) {
      var arr = list[i].split("=");
      if (arr.length == 1) {
        code = arr[0];
        break;
      } else if (arr[0] == "i") {
        code = arr[1];
        break;
      }
    }
  } else {
    code = getCookie("code");
    if (code == null) code = "";
  }
  setCookie("code", code);
  // console.log(url, wlist);
  // if (wlist.length == 2) {
  //   let value = wlist[1];
  //   setCookie("code", value);
  // }
}
function setCookie(name, value, daysToLive) {
  var expires = "";
  if (daysToLive) {
    var date = new Date();
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  var hostname = window.location.hostname;
  var path = "; path=/";
  var secure = "; secure";

  var domainPart = hostname ? "; domain=" + hostname : "";
  document.cookie = name + "=" + (value || "") + domainPart + path + secure;
  // console.log("document.cookie=", document.cookie);
}

function changeDomStyle() {
  var height = Math.max(window.innerHeight, window.innerWidth);
  if (document.getElementById("bannerBox")) {
    document.getElementById("bannerBox").style.height = height + "px";
  }
}
function thinkdataChnup(event, arg) {
  ta.track(event, arg);
}
