!(function () {
  function _typeof(e) {
    return (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function _classCallCheck(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  function _createClass(e, t, r) {
    t && _defineProperties(e.prototype, t), r && _defineProperties(e, r);
  }
  "object" !== ("undefined" == typeof JSON ? "undefined" : _typeof(JSON)) &&
    (JSON = {}),
    !(function () {
      var rx_one = /^[\],:{}\s]*$/,
        rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
        rx_three =
          /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        rx_four = /(?:^|:|,)(?:\s*\[)+/g,
        rx_escapable =
          /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        rx_dangerous =
          /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta,
        rep;
      function f(e) {
        return e < 10 ? "0" + e : e;
      }
      function this_value() {
        return this.valueOf();
      }
      function quote(e) {
        return (
          (rx_escapable.lastIndex = 0),
          rx_escapable.test(e)
            ? '"' +
              e.replace(rx_escapable, function (e) {
                var t = meta[e];
                return "string" == typeof t
                  ? t
                  : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
              }) +
              '"'
            : '"' + e + '"'
        );
      }
      function str(e, t) {
        var r,
          n,
          i,
          o,
          s,
          a = gap,
          c = t[e];
        switch (
          (c &&
            "object" === _typeof(c) &&
            "function" == typeof c.toJSON &&
            (c = c.toJSON(e)),
          _typeof((c = "function" == typeof rep ? rep.call(t, e, c) : c)))
        ) {
          case "string":
            return quote(c);
          case "number":
            return isFinite(c) ? String(c) : "null";
          case "boolean":
          case "null":
            return String(c);
          case "object":
            if (!c) return "null";
            if (
              ((gap += indent),
              (s = []),
              "[object Array]" === Object.prototype.toString.apply(c))
            ) {
              for (o = c.length, r = 0; r < o; r += 1)
                s[r] = str(r, c) || "null";
              i =
                0 === s.length
                  ? "[]"
                  : gap
                  ? "[\n" + gap + s.join(",\n" + gap) + "\n" + a + "]"
                  : "[" + s.join(",") + "]";
            } else {
              if (rep && "object" === _typeof(rep))
                for (o = rep.length, r = 0; r < o; r += 1)
                  "string" == typeof rep[r] &&
                    (i = str((n = rep[r]), c)) &&
                    s.push(quote(n) + (gap ? ": " : ":") + i);
              else
                for (n in c)
                  Object.prototype.hasOwnProperty.call(c, n) &&
                    (i = str(n, c)) &&
                    s.push(quote(n) + (gap ? ": " : ":") + i);
              i =
                0 === s.length
                  ? "{}"
                  : gap
                  ? "{\n" + gap + s.join(",\n" + gap) + "\n" + a + "}"
                  : "{" + s.join(",") + "}";
            }
            return (gap = a), i;
        }
      }
      "function" != typeof Date.prototype.toJSON &&
        ((Date.prototype.toJSON = function () {
          return isFinite(this.valueOf())
            ? this.getUTCFullYear() +
                "-" +
                f(this.getUTCMonth() + 1) +
                "-" +
                f(this.getUTCDate()) +
                "T" +
                f(this.getUTCHours()) +
                ":" +
                f(this.getUTCMinutes()) +
                ":" +
                f(this.getUTCSeconds()) +
                "Z"
            : null;
        }),
        (Boolean.prototype.toJSON = this_value),
        (Number.prototype.toJSON = this_value),
        (String.prototype.toJSON = this_value)),
        "function" != typeof JSON.stringify &&
          ((meta = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\",
          }),
          (JSON.stringify = function (e, t, r) {
            var n;
            if (((indent = gap = ""), "number" == typeof r))
              for (n = 0; n < r; n += 1) indent += " ";
            else "string" == typeof r && (indent = r);
            if (
              !(rep = t) ||
              "function" == typeof t ||
              ("object" === _typeof(t) && "number" == typeof t.length)
            )
              return str("", { "": e });
            throw new Error("JSON.stringify");
          })),
        "function" != typeof JSON.parse &&
          (JSON.parse = function (text, reviver) {
            var j;
            function walk(e, t) {
              var r,
                n,
                i = e[t];
              if (i && "object" === _typeof(i))
                for (r in i)
                  Object.prototype.hasOwnProperty.call(i, r) &&
                    (void 0 !== (n = walk(i, r)) ? (i[r] = n) : delete i[r]);
              return reviver.call(e, t, i);
            }
            if (
              ((text = String(text)),
              (rx_dangerous.lastIndex = 0),
              rx_dangerous.test(text) &&
                (text = text.replace(rx_dangerous, function (e) {
                  return (
                    "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                  );
                })),
              rx_one.test(
                text
                  .replace(rx_two, "@")
                  .replace(rx_three, "]")
                  .replace(rx_four, "")
              ))
            )
              return (
                (j = eval("(" + text + ")")),
                "function" == typeof reviver ? walk({ "": j }, "") : j
              );
            throw new SyntaxError("JSON.parse");
          });
    })();
  var Config = { LIB_VERSION: "2.0.4" },
    MAX_REFERRER_STRING_LENGTH = 200,
    ArrayProto = Array.prototype,
    ObjProto = Object.prototype,
    slice = ArrayProto.slice,
    toString = ObjProto.toString,
    hasOwnProperty = ObjProto.hasOwnProperty,
    nativeForEach = ArrayProto.forEach,
    breaker = {},
    utmTypes = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_content",
      "utm_term",
    ],
    _ = {
      each: function (e, t, r) {
        if (null !== e)
          if (nativeForEach && e.forEach === nativeForEach) e.forEach(t, r);
          else if (e.length === +e.length) {
            for (var n = 0, i = e.length; n < i; n++)
              if (n in e && t.call(r, e[n], n, e) === breaker) return;
          } else
            for (var o in e)
              if (
                hasOwnProperty.call(e, o) &&
                t.call(r, e[o], o, e) === breaker
              )
                return;
      },
      extend: function (r) {
        return (
          _.each(slice.call(arguments, 1), function (e) {
            for (var t in e) void 0 !== e[t] && (r[t] = e[t]);
          }),
          r
        );
      },
      formatDate: function (e) {
        function t(e) {
          return e < 10 ? "0" + e : e;
        }
        return (
          e.getFullYear() +
          "-" +
          t(e.getMonth() + 1) +
          "-" +
          t(e.getDate()) +
          " " +
          t(e.getHours()) +
          ":" +
          t(e.getMinutes()) +
          ":" +
          t(e.getSeconds()) +
          "." +
          ((e = e.getMilliseconds()) < 10 ? "00" + e : e < 100 ? "0" + e : e)
        );
      },
      formatTimeZone: function (e, t) {
        var r;
        return "number" != typeof t
          ? e
          : ((r = e.getTime()),
            (e = 6e4 * e.getTimezoneOffset()),
            new Date(r + e + 36e5 * t));
      },
      formatJsonString: function (t) {
        try {
          return JSON.stringify(t, null, 8);
        } catch (e) {
          return JSON.stringify(t);
        }
      },
      searchObjDate: function (r, n) {
        (_.check.isObject(r) || _.check.isArray(r)) &&
          _.each(r, function (e, t) {
            _.check.isObject(e) || _.check.isArray(e)
              ? _.searchObjDate(r[t], n)
              : _.check.isDate(e) &&
                (r[t] = _.formatDate(_.formatTimeZone(e, n)));
          });
      },
      check: {
        isUndefined: function (e) {
          return void 0 === e;
        },
        isObject: function (e) {
          return "[object Object]" === toString.call(e) && null !== e;
        },
        isEmptyObject: function (e) {
          if (_.check.isObject(e)) {
            for (var t in e) if (hasOwnProperty.call(e, t)) return !1;
            return !0;
          }
          return !1;
        },
        isArray: function (e) {
          return "[object Array]" === toString.call(e);
        },
        isString: function (e) {
          return "[object String]" === toString.call(e);
        },
        isDate: function (e) {
          return "[object Date]" === toString.call(e);
        },
        isNumber: function (e) {
          return "[object Number]" === toString.call(e);
        },
        isBoolean: function (e) {
          return "[object Boolean]" === toString.call(e);
        },
        isJSONString: function (e) {
          try {
            JSON.parse(e);
          } catch (e) {
            return !1;
          }
          return !0;
        },
      },
    },
    Log =
      ((_.UUID = (() => {
        function t() {
          for (var e = +new Date(), t = 0; e === +new Date(); ) t++;
          return e.toString(16) + t.toString(16);
        }
        return function () {
          var e =
              (e = String(screen.height * screen.width)) && /\d{5,}/.test(e)
                ? e.toString(16)
                : String(31242 * Math.random())
                    .replace(".", "")
                    .slice(0, 8),
            e =
              t() +
              "-" +
              Math.random().toString(16).replace(".", "") +
              "-" +
              (() => {
                var e,
                  t,
                  r = navigator.userAgent,
                  i = [],
                  n = 0;
                function o(e, t) {
                  for (var r = 0, n = 0; n < t.length; n++)
                    r |= i[n] << (8 * n);
                  return e ^ r;
                }
                for (e = 0; e < r.length; e++)
                  (t = r.charCodeAt(e)),
                    i.unshift(255 & t),
                    4 <= i.length && ((n = o(n, i)), (i = []));
                return (n = 0 < i.length ? o(n, i) : n).toString(16);
              })() +
              "-" +
              e +
              "-" +
              t();
          return (
            e ||
            (
              String(Math.random()) +
              String(Math.random()) +
              String(Math.random())
            ).slice(2, 15)
          );
        };
      })()),
      (_.UUIDv4 = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
          /[xy]/g,
          function (e) {
            var t = (16 * Math.random()) | 0;
            return ("x" == e ? t : (3 & t) | 8).toString(16);
          }
        );
      }),
      (_.getReferrer = function (e) {
        e = e || document.referrer;
        return "string" != typeof e
          ? "referrer exception" + String(e)
          : "string" ==
            typeof (e = (e =
              0 === e.indexOf("https://www.baidu.com/")
                ? e.split("?")[0]
                : e).slice(0, MAX_REFERRER_STRING_LENGTH))
          ? e
          : "";
      }),
      (_.url = (() => {
        function i() {
          return new RegExp(
            /(.*?)\.?([^\.]*?)\.(com|net|org|biz|ws|in|me|co\.uk|co|org\.uk|ltd\.uk|plc\.uk|me\.uk|edu|mil|br\.com|cn\.com|eu\.com|hu\.com|no\.com|qc\.com|sa\.com|se\.com|se\.net|us\.com|uy\.com|ac|co\.ac|gv\.ac|or\.ac|ac\.ac|af|am|as|at|ac\.at|co\.at|gv\.at|or\.at|asn\.au|com\.au|edu\.au|org\.au|net\.au|id\.au|be|ac\.be|adm\.br|adv\.br|am\.br|arq\.br|art\.br|bio\.br|cng\.br|cnt\.br|com\.br|ecn\.br|eng\.br|esp\.br|etc\.br|eti\.br|fm\.br|fot\.br|fst\.br|g12\.br|gov\.br|ind\.br|inf\.br|jor\.br|lel\.br|med\.br|mil\.br|net\.br|nom\.br|ntr\.br|odo\.br|org\.br|ppg\.br|pro\.br|psc\.br|psi\.br|rec\.br|slg\.br|tmp\.br|tur\.br|tv\.br|vet\.br|zlg\.br|br|ab\.ca|bc\.ca|mb\.ca|nb\.ca|nf\.ca|ns\.ca|nt\.ca|on\.ca|pe\.ca|qc\.ca|sk\.ca|yk\.ca|ca|cc|ac\.cn|net\.cn|com\.cn|edu\.cn|gov\.cn|org\.cn|bj\.cn|sh\.cn|tj\.cn|cq\.cn|he\.cn|nm\.cn|ln\.cn|jl\.cn|hl\.cn|js\.cn|zj\.cn|ah\.cn|gd\.cn|gx\.cn|hi\.cn|sc\.cn|gz\.cn|yn\.cn|xz\.cn|sn\.cn|gs\.cn|qh\.cn|nx\.cn|xj\.cn|tw\.cn|hk\.cn|mo\.cn|cn|cx|cz|de|dk|fo|com\.ec|tm\.fr|com\.fr|asso\.fr|presse\.fr|fr|gf|gs|co\.il|net\.il|ac\.il|k12\.il|gov\.il|muni\.il|ac\.in|co\.in|org\.in|ernet\.in|gov\.in|net\.in|res\.in|is|it|ac\.jp|co\.jp|go\.jp|or\.jp|ne\.jp|ac\.kr|co\.kr|go\.kr|ne\.kr|nm\.kr|or\.kr|li|lt|lu|asso\.mc|tm\.mc|com\.mm|org\.mm|net\.mm|edu\.mm|gov\.mm|ms|nl|no|nu|pl|ro|org\.ro|store\.ro|tm\.ro|firm\.ro|www\.ro|arts\.ro|rec\.ro|info\.ro|nom\.ro|nt\.ro|se|si|com\.sg|org\.sg|net\.sg|gov\.sg|sk|st|tf|ac\.th|co\.th|go\.th|mi\.th|net\.th|or\.th|tm|to|com\.tr|edu\.tr|gov\.tr|k12\.tr|net\.tr|org\.tr|com\.tw|org\.tw|net\.tw|ac\.uk|uk\.com|uk\.net|gb\.com|gb\.net|vg|sh|kz|ch|info|ua|gov|name|pro|ie|hk|com\.hk|org\.hk|net\.hk|edu\.hk|us|tk|cd|by|ad|lv|eu\.lv|bz|es|jp|cl|ag|mobi|eu|co\.nz|org\.nz|net\.nz|maori\.nz|iwi\.nz|io|la|md|sc|sg|vc|tw|travel|my|se|tv|pt|com\.pt|edu\.pt|asia|fi|com\.ve|net\.ve|fi|org\.ve|web\.ve|info\.ve|co\.ve|tel|im|gr|ru|net\.ru|org\.ru|hr|com\.hr|ly|xyz)$/
          );
        }
        function o(e, t) {
          var r = e.charAt(0),
            t = t.split(r);
          return r === e
            ? t
            : t[(e = parseInt(e.substring(1), 10)) < 0 ? t.length + e : e - 1];
        }
        function s(e, t) {
          for (
            var r,
              n = e.charAt(0),
              i = t.split("&"),
              o = [],
              s = {},
              a = e.substring(1),
              c = 0,
              u = i.length;
            c < u;
            c++
          )
            if (
              "" !==
              (o = (o = i[c].match(/(.*?)=(.*)/)) || [
                i[c],
                i[c],
                "",
              ])[1].replace(/\s/g, "")
            ) {
              if (
                ((o[2] =
                  ((r = o[2] || ""),
                  _.decodeURIComponent(r.replace(/\+/g, " ")))),
                a === o[1])
              )
                return o[2];
              (r = o[1].match(/(.*)\[([0-9]+)\]/))
                ? ((s[r[1]] = s[r[1]] || []), (s[r[1]][r[2]] = o[2]))
                : (s[o[1]] = o[2]);
            }
          return n === e ? s : s[a];
        }
        return function (e, t) {
          var r,
            n = {};
          if ("tld?" === e) return i();
          if (((t = t || window.location.toString()), !e)) return t;
          if (((e = e.toString()), (r = t.match(/^mailto:([^\/].+)/))))
            (n.protocol = "mailto"), (n.email = r[1]);
          else {
            if (
              ((r = (t = (r = t.match(/(.*?)\/#\!(.*)/))
                ? r[1] + r[2]
                : t).match(/(.*?)#(.*)/)) && ((n.hash = r[2]), (t = r[1])),
              n.hash && e.match(/^#/))
            )
              return s(e, n.hash);
            if (
              ((r = t.match(/(.*?)\?(.*)/)) && ((n.query = r[2]), (t = r[1])),
              n.query && e.match(/^\?/))
            )
              return s(e, n.query);
            if (
              ((r = t.match(/(.*?)\:?\/\/(.*)/)) &&
                ((n.protocol = r[1].toLowerCase()), (t = r[2])),
              (r = t.match(/(.*?)(\/.*)/)) && ((n.path = r[2]), (t = r[1])),
              (n.path = (n.path || "")
                .replace(/^([^\/])/, "/$1")
                .replace(/\/$/, "")),
              (e = e.match(/^[\-0-9]+$/)
                ? e.replace(/^([^\/])/, "/$1")
                : e).match(/^\//))
            )
              return o(e, n.path.substring(1));
            if (
              ((r =
                (r = o("/-1", n.path.substring(1))) &&
                r.match(/(.*?)\.(.*)/)) &&
                ((n.file = r[0]), (n.filename = r[1]), (n.fileext = r[2])),
              (r = t.match(/(.*)\:([0-9]+)$/)) && ((n.port = r[2]), (t = r[1])),
              (r = t.match(/(.*?)@(.*)/)) && ((n.auth = r[1]), (t = r[2])),
              n.auth &&
                ((r = n.auth.match(/(.*)\:(.*)/)),
                (n.user = r ? r[1] : n.auth),
                (n.pass = r ? r[2] : void 0)),
              (n.hostname = t.toLowerCase()),
              "." === e.charAt(0))
            )
              return o(e, n.hostname);
            i() &&
              (r = n.hostname.match(i())) &&
              ((n.tld = r[3]),
              (n.domain = r[2] ? r[2] + "." + r[3] : void 0),
              (n.sub = r[1] || void 0));
            t = n.port ? ":" + n.port : "";
            (n.protocol =
              n.protocol || window.location.protocol.replace(":", "")),
              (n.port = n.port || ("https" === n.protocol ? "443" : "80")),
              (n.protocol =
                n.protocol || ("443" === n.port ? "https" : "http")),
              (n.basic = n.protocol + "://" + n.hostname + t);
          }
          return e in n ? n[e] : "{}" === e ? n : "";
        };
      })()),
      (_.hashCode = function (e) {
        if ("string" != typeof e) return 0;
        var t = 0;
        if (0 !== e.length)
          for (var r = 0; r < e.length; r++)
            (t = (t << 5) - t + e.charCodeAt(r)), (t &= t);
        return t;
      }),
      (_.decodeURIComponent = function (t) {
        var r = "";
        try {
          r = decodeURIComponent(t);
        } catch (e) {
          r = t;
        }
        return r;
      }),
      (_.encodeURIComponent = function (t) {
        var r = "";
        try {
          r = encodeURIComponent(t);
        } catch (e) {
          r = t;
        }
        return r;
      }),
      (_.utf8Encode = function (e) {
        for (
          var t,
            r = "",
            n = (t = 0),
            i = (e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n"))
              .length,
            o = 0;
          o < i;
          o++
        ) {
          var s = e.charCodeAt(o),
            a = null;
          s < 128
            ? t++
            : (a =
                127 < s && s < 2048
                  ? String.fromCharCode((s >> 6) | 192, (63 & s) | 128)
                  : String.fromCharCode(
                      (s >> 12) | 224,
                      ((s >> 6) & 63) | 128,
                      (63 & s) | 128
                    )),
            null !== a &&
              (n < t && (r += e.substring(n, t)), (r += a), (n = t = o + 1));
        }
        return n < t && (r += e.substring(n, e.length)), r;
      }),
      (_.base64Encode = function (e) {
        var t,
          r,
          n,
          i,
          o =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          s = 0,
          a = 0,
          c = "",
          u = [];
        if (!e) return e;
        for (
          e = _.utf8Encode(e);
          (t =
            ((i =
              (e.charCodeAt(s++) << 16) |
              (e.charCodeAt(s++) << 8) |
              e.charCodeAt(s++)) >>
              12) &
            63),
            (r = (i >> 6) & 63),
            (n = 63 & i),
            (u[a++] =
              o.charAt((i >> 18) & 63) +
              o.charAt(t) +
              o.charAt(r) +
              o.charAt(n)),
            s < e.length;

        );
        switch (((c = u.join("")), e.length % 3)) {
          case 1:
            c = c.slice(0, -2) + "==";
            break;
          case 2:
            c = c.slice(0, -1) + "=";
        }
        return c;
      }),
      (_.cookie = {
        get: function (e) {
          for (
            var t = e + "=", r = document.cookie.split(";"), n = 0;
            n < r.length;
            n++
          ) {
            for (var i = r[n]; " " === i.charAt(0); )
              i = i.substring(1, i.length);
            if (0 === i.indexOf(t))
              return _.decodeURIComponent(i.substring(t.length, i.length));
          }
          return null;
        },
        set: function (e, t, r, n, i) {
          var o = "",
            s = "",
            a = "",
            r =
              ((r = null === r ? 73e3 : r),
              n &&
                (o = (n = _.url("domain", location.href))
                  ? "; domain=." + n
                  : ""),
              r &&
                ((n = new Date()),
                "s" === String(r).slice(-1)
                  ? n.setTime(
                      n.getTime() + 1e3 * Number(String(r).slice(0, -1))
                    )
                  : n.setTime(n.getTime() + 24 * r * 60 * 60 * 1e3),
                (s = "; expires=" + n.toGMTString())),
              i && (a = "; secure"),
              e + "=" + encodeURIComponent(t) + s + "; path=/" + o + a);
          return (document.cookie = r);
        },
        remove: function (e, t) {
          _.cookie.set(e, "", -1, t);
        },
      }),
      (_.localStorage = {
        get: function (e) {
          try {
            return window.localStorage.getItem(e);
          } catch (e) {
            _.localStorage.error(e);
          }
        },
        parse: function (e) {
          var t;
          try {
            t = JSON.parse(_.localStorage.get(e)) || null;
          } catch (e) {
            _.localStorage.error(e);
          }
          return t;
        },
        set: function (e, t) {
          try {
            window.localStorage.setItem(e, t);
          } catch (e) {
            _.localStorage.error(e);
          }
        },
        remove: function (e) {
          try {
            window.localStorage.removeItem(e);
          } catch (e) {
            _.localStorage.error(e);
          }
        },
        error: function (e) {
          console.error("localStorage error: " + e);
        },
        isSupported: function () {
          var t = !0;
          try {
            var e = "__thinkingdatasupport__",
              r = "testIsSupportStorage";
            _.localStorage.set(e, r),
              _.localStorage.get(e) !== r && (t = !1),
              _.localStorage.remove(e);
          } catch (e) {
            t = !1;
          }
          return t;
        },
      }),
      (_.stripEmptyProperties = function (e) {
        var r = {};
        return (
          _.each(e, function (e, t) {
            _.check.isString(e) && 0 < e.length && (r[t] = e);
          }),
          r
        );
      }),
      (_.info = {
        os: function () {
          var e = navigator.userAgent;
          return /Windows/i.test(e)
            ? /Phone/.test(e) || /WPDesktop/.test(e)
              ? "Windows Phone"
              : "Windows"
            : /(iPhone|iPad|iPod)/.test(e)
            ? "iOS"
            : /Android/.test(e)
            ? "Android"
            : /(BlackBerry|PlayBook|BB10)/i.test(e)
            ? "BlackBerry"
            : /Mac/i.test(e)
            ? "Mac OS X"
            : /Linux/.test(e)
            ? "Linux"
            : /CrOS/.test(e)
            ? "Chrome OS"
            : "";
        },
        browser: function () {
          var e = { type: "", version: "" };
          try {
            var t,
              r,
              n = navigator.userAgent.toLowerCase(),
              i = [];
            null !== n.match(/baidubrowser/)
              ? ((e.type = "baidu"), i.push(/baidubrowser\/([\d.]+)/))
              : null !== n.match(/bidubrowser/)
              ? ((e.type = "baidu"), i.push(/bidubrowser\/([\d.]+)/))
              : null !== n.match(/edga/)
              ? ((e.type = "edge"), i.push(/edga\/([\d.]+)/))
              : null !== n.match(/edgios/)
              ? ((e.type = "edge"), i.push(/edgios\/([\d.]+)/))
              : null !== n.match(/liebaofast/)
              ? ((e.type = "liebao"), i.push(/liebaofast\/([\d.]+)/))
              : null !== n.match(/sogoumobilebrowser/)
              ? ((e.type = "sogou"), i.push(/sogoumobilebrowser\/([\d.]+)/))
              : null !== n.match(/lbbrowser/)
              ? ((e.type = "liebao"), i.push(/lbbrowser\/([\d.]+)/))
              : null !== n.match(/crios/)
              ? ((e.type = "chrome"), i.push(/crios\/([\d.]+)/))
              : null !== n.match(/qihoobrowser/)
              ? ((e.type = "360"), i.push(/qihoobrowser\/([\d.]+)/))
              : null !== n.match(/mxios/)
              ? ((e.type = "maxthon"), i.push(/mxios\/([\d.]+)/))
              : null !== n.match(/fxios/)
              ? ((e.type = "firefox"), i.push(/fxios\/([\d.\w]+)/))
              : null !== n.match(/edge/)
              ? ((e.type = "edge"), i.push(/edge\/([\d.]+)/))
              : null !== n.match(/metasr/)
              ? ((e.type = "sogou"), i.push(/metasr ([\d.]+)/))
              : null !== n.match(/micromessenger/)
              ? ((e.type = "micromessenger"),
                i.push(/micromessenger\/([\d.]+)/))
              : null !== n.match(/mqqbrowser/)
              ? ((e.type = "qq"), i.push(/mqqbrowser\/([\d.]+)/))
              : null !== n.match(/qqbrowserlite/)
              ? ((e.type = "qq"), i.push(/qqbrowserlite\/([\d.]+)/))
              : null !== n.match(/tencenttraveler/)
              ? ((e.type = "qq"), i.push(/tencenttraveler\/([\d.]+)/))
              : null !== n.match(/qqbrowser/)
              ? ((e.type = "qq"), i.push(/qqbrowser\/([\d.]+)/))
              : null !== n.match(/maxthon/)
              ? ((e.type = "maxthon"), i.push(/maxthon\/([\d.]+)/))
              : null !== n.match(/ubrowser/)
              ? ((e.type = "uc"), i.push(/ubrowser\/([\d.]+)/))
              : null !== n.match(/ucbrowser/)
              ? ((e.type = "uc"), i.push(/ucbrowser\/([\d.]+)/))
              : null !== n.match(/firefox/)
              ? ((e.type = "firefox"), i.push(/firefox\/([\d.]+)/))
              : null !== n.match(/opera/)
              ? ((e.type = "opera"), i.push(/opera\/([\d.]+)/))
              : null !== n.match(/opr/)
              ? ((e.type = "opera"), i.push(/opr\/([\d.]+)/))
              : null !== n.match(/chrome/)
              ? ((e.type = "chrome"), i.push(/chrome\/([\d.]+)/))
              : null !== n.match(/safari/)
              ? ((e.type = "safari"), i.push(/version\/([\d.]+)/))
              : (null === n.match(/trident/) && null === n.match(/msie/)) ||
                (e.type = "ie"),
              "ie" === e.type
                ? ((t = n.match(/trident\/([\d.]+)/)
                    ? n.match(/trident\/([\d.]+)/)[1]
                    : ""),
                  (r = n.match(/msie ([\d.]+)/)
                    ? n.match(/msie ([\d.]+)/)[1]
                    : ""),
                  "" !== t
                    ? (e.version = String(parseInt(t) + 4))
                    : "" !== r && (e.version = r))
                : i && (e.version = n.match(i[0]) ? n.match(i[0])[1] : "");
          } catch (e) {
            Log.w("getting browser info failed due to ", e);
          }
          return e;
        },
        properties: function () {
          var e = _.info.browser();
          return _.extend({
            "#os": _.info.os(),
            "#lib_version": Config.LIB_VERSION,
            "#lib": "js",
            "#screen_height": screen.height,
            "#screen_width": screen.width,
            "#browser": e.type,
            "#browser_version": e.version,
            "#system_language": _.check.isString(navigator.language)
              ? navigator.language
              : "Value exception",
            "#ua": _.check.isString(navigator.userAgent)
              ? navigator.userAgent.toLowerCase()
              : "Value exception",
            "#utm": _.getUtm(),
          });
        },
        pageProperties: function () {
          var e = _.getReferrer();
          return _.stripEmptyProperties({
            "#referrer": e,
            "#referrer_host": e && _.url("hostname", e),
            "#url": location.href,
            "#url_path": location.pathname,
            "#title": document.title,
          });
        },
      }),
      (_.getUtm = function () {
        var r = {};
        return (
          _.each(utmTypes, function (e) {
            var t = _.getQueryParam(location.href, e);
            t.length && (r[e] = t);
          }),
          JSON.stringify(r)
        );
      }),
      (_.getQueryParam = function (e, t) {
        (t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]")),
          (e = _.decodeURIComponent(e));
        t = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(e);
        return null === t || (t && "string" != typeof t[1] && t[1].length)
          ? ""
          : _.decodeURIComponent(t[1]);
      }),
      (_.createString = function (e) {
        for (
          var t = e, r = Math.random().toString(36).substr(2);
          r.length < t;

        )
          r += Math.random().toString(36).substr(2);
        return (r = r.substr(0, e));
      }),
      (_.createAesKey = function () {
        return _.createString(16);
      }),
      (_.generateEncryptyData = function (e, t) {
        if (void 0 !== t) {
          var r = t.publicKey,
            t = t.version;
          if (
            void 0 !== r &&
            void 0 !== t &&
            "undefined" != typeof CryptoJS &&
            "undefined" != typeof JSEncrypt
          ) {
            var n = _.createAesKey();
            try {
              var i = CryptoJS.enc.Utf8.parse(n),
                o = CryptoJS.enc.Utf8.parse(JSON.stringify(e)),
                s = CryptoJS.AES.encrypt(o, i, {
                  mode: CryptoJS.mode.ECB,
                  padding: CryptoJS.pad.Pkcs7,
                }).toString(),
                a = new JSEncrypt(),
                c = (a.setPublicKey(r), a.encrypt(n));
              return !1 === c
                ? (Log.w("encryption failed"), e)
                : { pkv: t, ekey: c, payload: s };
            } catch (e) {
              Log.w("encryption failed");
            }
          }
        }
        return e;
      }),
      (_.paramType = function (e) {
        return Object.prototype.toString
          .call(e)
          .replace("[object ", "")
          .replace("]", "");
      }),
      (_.addEvent = function (e, t, r, n) {
        if (document.addEventListener)
          if (
            ("Array" !== this.paramType(e) &&
              "HTMLCollection" !== this.paramType(e)) ||
            !e.length ||
            e === window
          )
            e.addEventListener(t, r, n);
          else for (var i = 0; i < e.length; i++) this.addEvent(e[i], t, r, n);
        else if (e.length && e !== window)
          for (var o = 0; o < e.length; o++) this.addEvent(e[o], t, r);
        else
          e.attachEvent("on" + t, function () {
            return r.call(e, window.event);
          });
      }),
      (_.getRandom = function () {
        return new Date().getTime() + "_" + Math.floor(1e6 * Math.random());
      }),
      (_.safeJSONParse = function (t) {
        var e = null;
        try {
          e = JSON.parse(t);
        } catch (e) {
          return t;
        }
        return e;
      }),
      (_.saveObjectVal = function (e, t) {
        _.check.isString(t) || (t = JSON.stringify(t)),
          _.localStorage.set(e, t);
      }),
      (_.readObjectVal = function (e) {
        e = _.localStorage.get(e);
        return e ? _.safeJSONParse(e) : null;
      }),
      (_.indexOf = function (e, t) {
        var r = e.indexOf;
        if (r) return r.call(e, t);
        for (var n = 0; n < e.length; n++) if (t === e[n]) return n;
        return -1;
      }),
      (_.hasEncrypty = function (e) {
        return (
          !!_.check.isObject() &&
          "undefined" !== e.pkv &&
          "undefined" !== e.ekey &&
          "undefined" !== e.payload
        );
      }),
      (_.addSiteEvent = function (e, t, r, u) {
        function h(e) {
          return (
            e &&
              ((e.preventDefault = h.preventDefault),
              (e.stopPropagation = h.stopPropagation),
              (e._getPath = h._getPath)),
            e
          );
        }
        h._getPath = function () {
          var e;
          return (
            this.path ||
            (this.composedPath && this.composedPath()) ||
            ((e = this.target), new n(e).getParents())
          );
        };
        var n = function (e) {
          this.ele = e;
        };
        (h.preventDefault = function () {
          this.returnValue = !1;
        }),
          (h.stopPropagation = function () {
            this.cancelBubble = !0;
          });
        !function (e, t, r) {
          var n, i, o, s, a, c;
          void 0 === u && "click" === t && (u = !0),
            e && e.addEventListener
              ? e.addEventListener(
                  t,
                  function (e) {
                    (e._getPath = h._getPath), r.call(this, e);
                  },
                  u
                )
              : ((i = e[(n = "on" + t)]),
                (e[n] =
                  ((o = e),
                  (s = r),
                  (a = i),
                  (c = t),
                  function (e) {
                    var t, r;
                    if ((e = e || h(window.event)))
                      return (
                        (e.target = e.srcElement),
                        (t = !0),
                        "function" == typeof a && (r = a(e)),
                        (e = s.call(o, e)),
                        "beforeunload" !== c
                          ? !1 !== r && !1 !== e && t
                          : void 0
                      );
                  })));
        }.apply(null, arguments);
      }),
      (_.getURLSearchParams = function (e) {
        for (
          var t = {}, r = (e = e || "").substring(1).split("&"), n = 0;
          n < r.length;
          n++
        ) {
          var i,
            o = r[n].indexOf("=");
          -1 !== o &&
            ((i = r[n].substring(0, o)),
            (o = r[n].substring(o + 1)),
            (i = _.decodeURIComponent(i)),
            (o = _.decodeURIComponent(o)),
            (t[i] = o));
        }
        return t;
      }),
      (_.urlParse = function (e) {
        function t(e) {
          (this._fields = {
            Username: 4,
            Password: 5,
            Port: 7,
            Protocol: 2,
            Host: 6,
            Path: 8,
            URL: 0,
            QueryString: 9,
            Fragment: 10,
          }),
            (this._values = {}),
            (this._regex =
              /^((\w+):\/\/)?((\w+):?(\w+)?@)?([^\/\?:]+):?(\d+)?(\/?[^\?#]+)?\??([^#]+)?#?(\w*)/),
            void 0 !== e && this._parse(e);
        }
        return (
          (t.prototype.setUrl = function (e) {
            this._parse(e);
          }),
          (t.prototype._initValues = function () {
            for (var e in this._fields) this._values[e] = "";
          }),
          (t.prototype.addQueryString = function (e) {
            if ("object" !== _typeof(e)) return !1;
            var t,
              r = this._values.QueryString || "";
            for (t in e)
              r = new RegExp(t + "[^&]+").test(r)
                ? r.replace(new RegExp(t + "[^&]+"), t + "=" + e[t])
                : "&" === r.slice(-1)
                ? r + t + "=" + e[t]
                : "" === r
                ? t + "=" + e[t]
                : r + "&" + t + "=" + e[t];
            this._values.QueryString = r;
          }),
          (t.prototype.getUrl = function () {
            var e = "";
            return (
              (e += this._values.Origin) +
              (this._values.Port ? ":" + this._values.Port : "") +
              this._values.Path +
              (this._values.QueryString ? "?" + this._values.QueryString : "") +
              (this._values.Fragment ? "#" + this._values.Fragment : "")
            );
          }),
          (t.prototype._parse = function (e) {
            this._initValues();
            this._regex.exec(e) || Log.i("URLParser::_parse -> Invalid URL");
            var t,
              e = e.split("#"),
              r = e[0],
              e = e.slice(1).join("#"),
              n = this._regex.exec(r);
            for (t in this._fields)
              void 0 !== n[this._fields[t]] &&
                (this._values[t] = n[this._fields[t]]);
            (this._values.Hostname = this._values.Host.replace(/:\d+$/, "")),
              (this._values.Origin =
                this._values.Protocol + "://" + this._values.Hostname),
              (this._values.Fragment = e);
          }),
          new t(e)
        );
      }),
      (_.trim = function (e) {
        return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      }),
      (_.URL = function (e) {
        var t,
          r,
          n = {};
        if (
          "function" == typeof window.URL &&
          (() => {
            try {
              return (
                "http://modernizr.com/" ===
                new URL("http://modernizr.com/").href
              );
            } catch (e) {
              return !1;
            }
          })()
        )
          (n = new URL(e)).searchParams ||
            (n.searchParams =
              ((r = _.getURLSearchParams(n.search)),
              {
                get: function (e) {
                  return r[e];
                },
              }));
        else {
          _.check.isString(e) || (e = String(e)), (e = _.trim(e));
          if (!1 === /^https?:\/\/.+/.test(e)) return void Log.w("Invalid URL");
          e = _.urlParse(e);
          (n.hash = e._values.Fragment),
            (n.host = e._values.Host
              ? e._values.Host + (e._values.Port ? ":" + e._values.Port : "")
              : ""),
            (n.href = e._values.URL),
            (n.password = e._values.Password),
            (n.pathname = e._values.Path),
            (n.port = e._values.Port),
            (n.search = e._values.QueryString
              ? "?" + e._values.QueryString
              : ""),
            (n.username = e._values.Username),
            (n.hostname = e._values.Hostname),
            (n.protocol = e._values.Protocol ? e._values.Protocol + ":" : ""),
            (n.origin = e._values.Origin
              ? e._values.Origin + (e._values.Port ? ":" + e._values.Port : "")
              : ""),
            (n.searchParams =
              ((t = _.getURLSearchParams("?" + e._values.QueryString)),
              {
                get: function (e) {
                  return t[e];
                },
              }));
        }
        return n;
      }),
      (() => {
        function e() {
          _classCallCheck(this, e);
        }
        return (
          _createClass(e, null, [
            {
              key: "i",
              value: function () {
                if (!this.showLog) return !1;
                if (
                  ((!0 !== this.showLog && "string" !== this.showLog) ||
                    (arguments[0] = _.formatJsonString(arguments[0])),
                  "object" ===
                    ("undefined" == typeof console
                      ? "undefined"
                      : _typeof(console)) && console.log)
                )
                  try {
                    // return console.log.apply(console, arguments);
                    return console.log();
                  } catch (e) {
                    console.log(arguments[0]);
                  }
              },
            },
            {
              key: "w",
              value: function () {
                if (!this.showLog) return !1;
                if (
                  ((!0 !== this.showLog && "string" !== this.showLog) ||
                    (arguments[0] = _.formatJsonString(arguments[0])),
                  "object" ===
                    ("undefined" == typeof console
                      ? "undefined"
                      : _typeof(console)) && console.warn)
                )
                  try {
                    return console.warn.apply(console, arguments);
                  } catch (e) {
                    console.warn(arguments[0]);
                  }
              },
            },
          ]),
          e
        );
      })()),
    KEY_NAME_MATCH_REGEX = /^[a-zA-Z][a-zA-Z0-9_]{0,49}$/,
    PropertyChecker = (() => {
      function e() {
        _classCallCheck(this, e);
      }
      return (
        _createClass(e, null, [
          {
            key: "stripProperties",
            value: function (e) {
              return (
                _.check.isObject(e) &&
                  _.each(e, function (e, t) {
                    _.check.isString(e) ||
                      _.check.isNumber(e) ||
                      _.check.isDate(e) ||
                      _.check.isBoolean(e) ||
                      _.check.isArray(e) ||
                      _.check.isObject(e) ||
                      Log.w(
                        "The format of Data-",
                        t,
                        e,
                        " does not meet the requirements and may not be stored correctly. The attribute value only supports String, Number, Date, Boolean, Array，Object"
                      );
                  }),
                e
              );
            },
          },
          {
            key: "_checkPropertiesKey",
            value: function (e) {
              var r = !0;
              return (
                _.each(e, function (e, t) {
                  KEY_NAME_MATCH_REGEX.test(t) ||
                    (Log.w("invalid key: " + t), (r = !1));
                }),
                r
              );
            },
          },
          {
            key: "event",
            value: function (e) {
              return (
                !(!_.check.isString(e) || !KEY_NAME_MATCH_REGEX.test(e)) ||
                (Log.w(
                  "Please check the parameter format, eventName must be an English letter or a string starting with '_', containing letters and numbers with no more than 50 characters: " +
                    e
                ),
                !1)
              );
            },
          },
          {
            key: "propertyName",
            value: function (e) {
              return (
                !(!_.check.isString(e) || !KEY_NAME_MATCH_REGEX.test(e)) ||
                (Log.w(
                  "Please check the parameter format, propertyName must be an English letter or a string starting with '_', containing letters and numbers with no more than 50 characters: " +
                    e
                ),
                !1)
              );
            },
          },
          {
            key: "properties",
            value: function (e) {
              return (
                this.stripProperties(e),
                !e ||
                  !(
                    !_.check.isObject(e) ||
                    (!this._checkPropertiesKey(e) &&
                      (Log.w(
                        "Please check the parameter format, the key of properties can only start with a letter, contain numbers, letters and underscores _, and the maximum length is 50 characters"
                      ),
                      1))
                  )
              );
            },
          },
          {
            key: "propertiesMust",
            value: function (e) {
              return (
                this.stripProperties(e),
                void 0 === e || !_.check.isObject(e) || _.check.isEmptyObject(e)
                  ? (Log.w("properties must be objects and have values"), !1)
                  : !!this._checkPropertiesKey(e) ||
                    (Log.w(
                      "Please check the parameter format, the key of properties can only start with a letter, contain numbers, letters and underscores _, and the maximum length is 50 characters"
                    ),
                    !1)
              );
            },
          },
          {
            key: "userId",
            value: function (e) {
              return (
                !(!_.check.isString(e) || !/^.{1,63}$/.test(e)) ||
                (Log.w(
                  "User id must be a string that cannot be empty and is less than 64 bits"
                ),
                !1)
              );
            },
          },
        ]),
        e
      );
    })(),
    MASTER_INSTANCE_NAME = "thinkingdata",
    DEFAULT_CONFIG = {
      _name: MASTER_INSTANCE_NAME,
      appId: "",
      send_method: "image",
      persistence: "localStorage",
      persistencePrefix: "ThinkingDataJSSDK",
      persistenceEnabled: !0,
      crossSubDomain: !0,
      maxReferrerStringLength: 200,
      showLog: !0,
      dataSendTimeout: 3e3,
      useAppTrack: !1,
      strict: !1,
      tryCount: 3,
      enableCalibrationTime: !1,
      imgUseCrossorigin: !1,
    },
    ThinkingDataPersistence = function (e) {
      (this._state = {}),
        (this.crossSubDomain = e.crossSubDomain),
        (this.enabled = e.persistenceEnabled);
      var t,
        r = null;
      this.enabled &&
        (!1 === e.crossSubDomain
          ? ((t = _.url("sub", location.href)),
            (this.name =
              "string" == typeof t && "" !== t
                ? e.persistencePrefix + "_" + t
                : e.persistencePrefix + "_root"))
          : (this.name = e.persistencePrefix + "_cross"),
        "cookie" !== (t = e.persistence) &&
          "localStorage" !== t &&
          (Log.i("Unknown persistence type " + t + "; falling back to cookie"),
          (t = e.persistence = "cookie")),
        "localStorage" === t && _.localStorage.isSupported()
          ? ((this.storage = _.localStorage),
            (r = _.cookie.get(this.name)) &&
              _.cookie.remove(this.name, this.crossSubDomain))
          : (Log.i(
              "localStorage is not support by the browser; falling back to cookie"
            ),
            (this.storage = _.cookie))),
        this._load(r),
        this.getDistinctId() ||
          ((t = e.uuid || _.UUID()),
          this._setDeviceId(t),
          this.setDistinctId(t));
    },
    TDAnalytics =
      ((ThinkingDataPersistence.prototype._load = function (e) {
        var t;
        this.enabled &&
          (null !== (t = null !== e ? e : this.storage.get(this.name)) &&
            _.check.isJSONString(t) &&
            (this._state = _.extend({}, JSON.parse(t))),
          null !== e) &&
          this._save();
      }),
      (ThinkingDataPersistence.prototype.getDistinctId = function () {
        return this._state.distinct_id;
      }),
      (ThinkingDataPersistence.prototype.setDistinctId = function (e) {
        this._set("distinct_id", e);
      }),
      (ThinkingDataPersistence.prototype.setEnableTracking = function (e) {
        this._set("enable_tracking", e);
      }),
      (ThinkingDataPersistence.prototype.getEnableTracking = function () {
        return (
          !!_.check.isUndefined(this._state.enable_tracking) ||
          this._state.enable_tracking
        );
      }),
      (ThinkingDataPersistence.prototype.clear = function () {
        (this._state = {}), this._save();
      }),
      (ThinkingDataPersistence.prototype.setOptTracking = function (e) {
        this._set("opt_tracking", e);
      }),
      (ThinkingDataPersistence.prototype.getOptTracking = function () {
        return (
          !!_.check.isUndefined(this._state.opt_tracking) ||
          this._state.opt_tracking
        );
      }),
      (ThinkingDataPersistence.prototype.setDistinctId = function (e) {
        this._set("distinct_id", e);
      }),
      (ThinkingDataPersistence.prototype.getAccountId = function () {
        return this._state.account_id;
      }),
      (ThinkingDataPersistence.prototype.setAccountId = function (e) {
        this._set("account_id", e);
      }),
      (ThinkingDataPersistence.prototype.getDeviceId = function () {
        return this._state.device_id;
      }),
      (ThinkingDataPersistence.prototype.setSuperProperties = function (e) {
        this._set("super_properties", e);
      }),
      (ThinkingDataPersistence.prototype.getSuperProperties = function () {
        return this._state.super_properties || {};
      }),
      (ThinkingDataPersistence.prototype.setEventTimer = function (e, t) {
        var r = this._state.event_timers || {};
        (r[e] = t), this._set("event_timers", r);
      }),
      (ThinkingDataPersistence.prototype.clearEventTimer = function () {
        this._set("event_timers", {});
      }),
      (ThinkingDataPersistence.prototype.removeEventTimer = function (e) {
        var t = (this._state.event_timers || {})[e];
        return (
          _.check.isUndefined(t) ||
            (delete this._state.event_timers[e], this._save()),
          t
        );
      }),
      (ThinkingDataPersistence.prototype._setDeviceId = function (e) {
        this._state.device_id
          ? Log.w(
              "Current device_id is ",
              this.getDeviceId(),
              ", it couldn't been set to: ",
              e
            )
          : this._set("device_id", e);
      }),
      (ThinkingDataPersistence.prototype._save = function () {
        this.enabled &&
          this.storage.set(
            this.name,
            JSON.stringify(this._state),
            73e3,
            this.crossSubDomain
          );
      }),
      (ThinkingDataPersistence.prototype._set = function (e, t) {
        (this._state = this._state || {}), (this._state[e] = t), this._save();
      }),
      function () {}),
    tabStoragePrefix =
      ((TDAnalytics.prototype.trackLink = function (e, r, n) {
        var i,
          o,
          s = this;
        this._isCollectData() &&
          ((i = this._getConfig("strict")),
          !PropertyChecker.properties(n) && i
            ? Log.w("trackLink failed due to invalid properties.")
            : e &&
              _.check.isObject(e) &&
              ((o = []),
              _.each(e, function (e, r) {
                e &&
                  _.check.isArray(e) &&
                  _.each(e, function (e) {
                    switch (r) {
                      case "tag":
                        _.each(document.getElementsByTagName(e), function (e) {
                          o.indexOf(e) < 0 && o.push(e);
                        });
                        break;
                      case "class":
                        _.each(
                          document.getElementsByClassName(e),
                          function (e) {
                            o.indexOf(e) < 0 && o.push(e);
                          }
                        );
                        break;
                      case "id":
                        var t = document.getElementById(e);
                        null !== t && o.indexOf(t) < 0 && o.push(t);
                    }
                  });
              }),
              _.each(o, function (e) {
                var t;
                null !== e &&
                  (((t = _.extend({}, _.info.pageProperties(), n))[
                    "#element_type"
                  ] = e.nodeName.toLowerCase()),
                  _.check.isUndefined(t.name) &&
                    (t.name =
                      e.getAttribute("td-name") ||
                      e.innerHTML ||
                      e.value ||
                      "Unable to get Identify"),
                  e.addEventListener("click", function () {
                    s._sendRequest({
                      type: "track",
                      event: r,
                      properties: i ? PropertyChecker.stripProperties(t) : t,
                    });
                  }));
              })));
      }),
      (TDAnalytics.prototype.setPageProperty = function (e) {
        this._isCollectData() &&
          (PropertyChecker.properties(e) || !this._getConfig("strict")
            ? _.extend(this.currentProps, e)
            : Log.w("Page property setting error"));
      }),
      (TDAnalytics.prototype.getPageProperty = function () {
        return this.currentProps;
      }),
      (TDAnalytics.prototype.getPresetProperties = function () {
        var e = _.info.properties(),
          t = {},
          e =
            ((t.os = e["#os"]),
            (t.screenWidth = e["#screen_width"]),
            (t.screenHeight = e["#screen_height"]),
            (t.browser = e["#browser"]),
            (t.browserVersion = e["#browser_version"]),
            (t.deviceId = this.getDeviceId()),
            0 - new Date().getTimezoneOffset() / 60);
        return (
          this._getConfig("zoneOffset") && (e = this._getConfig("zoneOffset")),
          (t.zoneOffset = e),
          (t.toEventPresetProperties = function () {
            return {
              "#os": t.os,
              "#screen_width": t.screenWidth,
              "#screen_height": t.screenHeight,
              "#browser": t.browser,
              "#browser_version": t.browserVersion,
              "#device_id": t.deviceId,
              "#zone_offset": t.zoneOffset,
            };
          }),
          t
        );
      }),
      (TDAnalytics.prototype.login = function (e) {
        this._isCollectData() &&
          ("number" == typeof e && (e = String(e)),
          PropertyChecker.userId(e) || !this._getConfig("strict")
            ? e !== this.persistence.getAccountId() &&
              (this.persistence.setAccountId(e),
              Log.i("[ThinkingData] Info: Login SDK, AccountId = " + e))
            : Log.e("The parameters of the login API must be strings"));
      }),
      (TDAnalytics.prototype.logout = function (e) {
        this._isCollectData() &&
          (!0 === e && ((e = _.UUID()), this.persistence.setDistinctId(e)),
          this.persistence.setAccountId(""),
          Log.i("[ThinkingData] Info: Logout SDK"));
      }),
      (TDAnalytics.prototype.userSet = function (e, t) {
        !this._isCollectData() ||
          (!PropertyChecker.propertiesMust(e) && this._getConfig("strict")) ||
          this._sendRequest({ type: "user_set", properties: e }, t);
      }),
      (TDAnalytics.prototype.userSetOnce = function (e, t) {
        !this._isCollectData() ||
          (!PropertyChecker.propertiesMust(e) && this._getConfig("strict")) ||
          this._sendRequest({ type: "user_setOnce", properties: e }, t);
      }),
      (TDAnalytics.prototype.userUnset = function (e, t) {
        var r;
        !this._isCollectData() ||
          (!PropertyChecker.propertyName(e) && this._getConfig("strict")) ||
          (((r = {})[e] = 0),
          this._sendRequest({ type: "user_unset", properties: r }, t));
      }),
      (TDAnalytics.prototype.userAdd = function (e, t) {
        var r;
        this._isCollectData() &&
          (_.check.isString(e) && ((r = e), ((e = {})[r] = 1)),
          PropertyChecker.propertiesMust(e)) &&
          (((e) => {
            for (var t in e) if (!/-*\d+/.test(String(e[t]))) return;
            return 1;
          })(e) || !this._getConfig("strict")
            ? this._sendRequest({ type: "user_add", properties: e }, t)
            : Log.w("The property value of useradd api must be a number"));
      }),
      (TDAnalytics.prototype.userAppend = function (e, t) {
        this._isCollectData() &&
          ((PropertyChecker.propertiesMust(e) &&
            ((e) => {
              for (var t in e) if (!_.check.isArray(e[t])) return;
              return 1;
            })(e)) ||
          !this._getConfig("strict")
            ? this._sendRequest({ type: "user_append", properties: e }, t)
            : Log.w("The value in the userAppend property can only be Array"));
      }),
      (TDAnalytics.prototype.userUniqAppend = function (e, t) {
        this._isCollectData() &&
          ((PropertyChecker.propertiesMust(e) &&
            ((e) => {
              for (var t in e) if (!_.check.isArray(e[t])) return;
              return 1;
            })(e)) ||
          !this._getConfig("strict")
            ? this._sendRequest({ type: "user_uniq_append", properties: e }, t)
            : Log.w(
                "The value in the userUniqAppend property can only be Array"
              ));
      }),
      (TDAnalytics.prototype.flush = function () {
        this.batchConsumer && !this._isDebug() && this.batchConsumer.flush();
      }),
      (TDAnalytics.prototype.userDel = function (e) {
        this.userDelete(e);
      }),
      (TDAnalytics.prototype.userDelete = function (e) {
        this._isCollectData() && this._sendRequest({ type: "user_del" }, e);
      }),
      (TDAnalytics.prototype._sendRequest = function (e, t, r) {
        var n,
          i =
            _.check.isUndefined(e.time) || !_.check.isDate(e.time)
              ? new Date()
              : e.time,
          o = {
            data: [
              {
                "#type": e.type,
                "#time": _.formatDate(
                  _.formatTimeZone(i, this._getConfig("zoneOffset"))
                ),
                "#distinct_id": this.persistence.getDistinctId(),
              },
            ],
          };
        if (
          (this.persistence.getAccountId() &&
            (o.data[0]["#account_id"] = this.persistence.getAccountId()),
          "track" === e.type ||
          "track_update" === e.type ||
          "track_overwrite" === e.type
            ? ((o.data[0]["#event_name"] = e.event),
              "track_update" === e.type || "track_overwrite" === e.type
                ? (o.data[0]["#default"] = e.extraId)
                : e.firstCheckId &&
                  (o.data[0]["#first_check_id"] = e.firstCheckId),
              (i = 0 - i.getTimezoneOffset() / 60),
              void 0 !== this._getConfig("zoneOffset") &&
                (i = this._getConfig("zoneOffset")),
              (o.data[0].properties = _.extend(
                {},
                {
                  "#device_id": this.persistence.getDeviceId(),
                  "#zone_offset": i,
                },
                _.info.properties(),
                this.getSuperProperties(),
                this.dynamicProperties ? this.dynamicProperties() : {},
                this.getPageProperty()
              )),
              (i = this.persistence.removeEventTimer(e.event)),
              _.check.isUndefined(i) ||
                ((i = new Date().getTime() - i),
                (i = parseFloat((i / 1e3).toFixed(3))),
                (o.data[0].properties["#duration"] = i =
                  86400 < i ? 86400 : i)))
            : (o.data[0].properties = {}),
          _.check.isObject(e.properties) &&
            !_.check.isEmptyObject(e.properties) &&
            _.extend(o.data[0].properties, e.properties),
          _.searchObjDate(o.data[0], this._getConfig("zoneOffset")),
          "ajax" === this._getConfig("send_method") &&
            (o.data[0] = _.generateEncryptyData(
              o.data[0],
              this._getConfig("secretKey")
            )),
          (o["#app_id"] = this._getConfig("appId")),
          (o["#flush_time"] = _.formatTimeZone(
            new Date(),
            this._getConfig("zoneOffset")
          ).getTime()),
          Log.i("[ThinkingData] Info: Enqueue data : "),
          Log.i(o),
          this._getConfig("useAppTrack"))
        ) {
          var i = window.ThinkingData_APP_JS_Bridge || {};
          if ("object" === _typeof(i) && i.thinkingdata_track)
            return (
              i.thinkingdata_track(JSON.stringify(o)),
              void ("function" == typeof t && t())
            );
          if (/td-sdk-ios/.test(navigator.userAgent) && !window.MSStream)
            return (
              (e = document.createElement("iframe")).setAttribute(
                "src",
                "thinkinganalytics://trackEvent?event=" +
                  _.encodeURIComponent(JSON.stringify(o))
              ),
              document.documentElement.appendChild(e),
              e.parentNode.removeChild(e),
              (e = null),
              void ("function" == typeof t && t())
            );
          if (window.ThinkingData_APP_Flutter_Bridge)
            return void window.ThinkingData_APP_Flutter_Bridge.postMessage(
              JSON.stringify(o)
            );
          if (
            window.ReactNativeWebView &&
            window.ThinkingData_APP_ReactNative_Bridge
          )
            return void window.ThinkingData_APP_ReactNative_Bridge(
              JSON.stringify({ type: "tdanalytics_reactnative_sdk", event: o })
            );
        }
        r && (o.data[0]["#uuid"] = _.UUIDv4()),
          !this.batchConsumer || this._isDebug() || r
            ? (this._isDebug()
                ? ((n =
                    "&data=" +
                    _.encodeURIComponent(JSON.stringify(o.data[0])) +
                    "&source=client&deviceId=" +
                    this.getDeviceId() +
                    "&appid=" +
                    this._getConfig("appId") +
                    "&version=" +
                    Config.LIB_VERSION),
                  "debug_only" === this._getConfig("mode") &&
                    (n += "&dryRun=1"))
                : ((o = JSON.stringify(o)),
                  (i = _.base64Encode(o)),
                  (e = "crc=" + _.hashCode(i)),
                  (n =
                    "&data=" +
                    _.encodeURIComponent(i) +
                    "&ext=" +
                    _.encodeURIComponent(e) +
                    "&version=" +
                    Config.LIB_VERSION)),
              r &&
              void 0 !==
                ("undefined" == typeof navigator
                  ? "undefined"
                  : _typeof(navigator)) &&
              navigator.sendBeacon
                ? ((i = new FormData()),
                  this._isDebug()
                    ? (i.append("data", JSON.stringify(o.data[0])),
                      i.append("source", "client"),
                      i.append("deviceId", this.getDeviceId()),
                      i.append("appid", this._getConfig("appId")),
                      i.append("version", Config.LIB_VERSION),
                      "debug_only" === this._getConfig("mode") &&
                        i.append("dryRun", 1))
                    : i.append("data", _.base64Encode(o)),
                  navigator.sendBeacon(this._getConfig("serverUrl"), i))
                : "ajax" === this._getConfig("send_method")
                ? new AjaxTask(
                    n,
                    this._getConfig("serverUrl"),
                    this._getConfig("tryCount"),
                    t,
                    null,
                    this._isDebug(),
                    this._getConfig("dataSendTimeout")
                  ).run()
                : this._sendRequestWithImage(n, t))
            : this.batchConsumer.add(o.data[0]);
      }),
      "tab_"),
    storagePrefix = "ta_jssdk_";
  function BatchConsumer(e) {
    (this.config = e),
      (this.timer = null),
      (this.batchConfig = _.extend(
        { size: 6, interval: 6e3, maxLimit: 500 },
        this.config.batch
      )),
      this.batchConfig.size < 1 && (this.batchConfig.size = 1),
      30 < this.batchConfig.size && (this.batchConfig.size = 30),
      (this.maxLimit = this.batchConfig.maxLimit),
      (this.batchList = []),
      (this.storageKey = storagePrefix + this.config.appId);
    try {
      var t = JSON.parse(_.localStorage.get(this.storageKey));
      _.check.isArray(t) && (this.batchList = t);
      var r =
          this.config.persistencePrefix + tabStoragePrefix + this.config.appId,
        n = JSON.parse(_.localStorage.get(r));
      if (_.check.isArray(n)) {
        for (var i = 0; i < n.length; i++) {
          var o = JSON.parse(_.localStorage.get(n[i]));
          console.log(o), this.batchList.push(o), _.localStorage.remove(n[i]);
        }
        _.localStorage.remove(r);
      }
    } catch (e) {
      Log.e(e);
    }
    (this.dataHasChange = !1), (this.dataSendTimeStamp = 0);
  }
  BatchConsumer.prototype = {
    batchInterval: function () {
      this.loopWrite(), this.loopSend();
    },
    loopWrite: function () {
      var e = this;
      setTimeout(function () {
        e.batchWrite(), e.loopWrite();
      }, 500);
    },
    batchWrite: function () {
      this.dataHasChange &&
        ((this.dataHasChange = !1),
        _.localStorage.set(this.storageKey, JSON.stringify(this.batchList)));
    },
    loopSend: function () {
      var e = this;
      e.timer = setTimeout(function () {
        e.batchSend(), clearTimeout(e.timer), e.loopSend();
      }, this.batchConfig.interval);
    },
    add: function (e) {
      this.batchList.length > this.maxLimit && this.batchList.shift(),
        this.batchList.push(e),
        (this.dataHasChange = !0),
        this.batchList.length > this.batchConfig.size && this.batchSend();
    },
    batchSend: function () {
      var e,
        t,
        r,
        n = new Date();
      (0 !== this.dataSendTimeStamp &&
        n.getTime() - this.dataSendTimeStamp <
          this.config.dataSendTimeout + 500) ||
        ((this.dataSendTimeStamp = n.getTime()),
        (e = (n =
          50 < this.batchList.length
            ? this.batchList.slice(0, 50)
            : this.batchList).length),
        (t = this),
        0 < e &&
          (((r = {}).data = n),
          (r["#app_id"] = this.config.appId),
          (r["#flush_time"] = new Date().getTime()),
          Log.i("[ThinkingData] Debug: Send event, Request ="),
          Log.i(r),
          (n = JSON.stringify(r)),
          (r = _.base64Encode(n)),
          (n = "crc=" + _.hashCode(r)),
          (r =
            "&data=" +
            _.encodeURIComponent(r) +
            "&ext=" +
            _.encodeURIComponent(n) +
            "&version=" +
            Config.LIB_VERSION),
          new AjaxTask(
            r,
            this.config.serverUrl,
            0,
            function () {
              t.batchRemove(e);
            },
            function () {
              t.dataSendTimeStamp = 0;
            },
            !1,
            this.config.dataSendTimeout
          ).run()));
    },
    flush: function () {
      clearTimeout(this.timer), this.batchSend(), this.loopSend();
    },
    batchRemove: function (e) {
      (this.dataSendTimeStamp = 0),
        this.batchList.splice(0, e),
        (this.dataHasChange = !0),
        this.batchWrite(),
        0 < this.batchList.length && this.flush();
    },
  };
  var AjaxTask = (() => {
      function a(e, t, r, n, i, o, s) {
        _classCallCheck(this, a),
          (this.data = e),
          (this.serverUrl = t),
          (this.tryCount = null == r ? 3 : r),
          (this.success = n),
          (this.error = i),
          (this.isDebug = o),
          (this.dataSendTimeout = s);
      }
      return (
        _createClass(a, [
          {
            key: "run",
            value: function () {
              var t,
                r = null,
                n =
                  ((r = window.XMLHttpRequest
                    ? new XMLHttpRequest()
                    : new ActiveXObject("Microsoft.XMLHTTP")).open(
                    "post",
                    this.serverUrl,
                    !0
                  ),
                  r.setRequestHeader(
                    "Content-type",
                    "application/x-www-form-urlencoded"
                  ),
                  this);
              (t = setTimeout(function () {
                try {
                  r && "object" === _typeof(r) && r.abort && r.abort();
                } catch (e) {
                  Log.e(e);
                }
                t &&
                  (clearTimeout(t),
                  (t = null),
                  n.error && n.error(),
                  (r.onreadystatechange = null),
                  (r.onload = null),
                  (r.onerror = null));
              }, this.dataSendTimeout)),
                (r.onreadystatechange = function () {
                  try {
                    var e;
                    4 === r.readyState &&
                      (100 <= r.status && r.status < 200
                        ? Log.i("Ignoring temporary status code 1xx.")
                        : (200 <= r.status && r.status < 300) ||
                          304 === r.status
                        ? (n.success && n.success(),
                          t && (clearTimeout(t), (t = null)),
                          n.isDebug &&
                            (0 !== (e = JSON.parse(r.response)).errorLevel
                              ? Log.w(e)
                              : Log.i(e)))
                        : (n.error && n.error(),
                          t && (clearTimeout(t), (t = null)),
                          0 < n.tryCount && n.onFailed()));
                  } catch (e) {
                    Log.e(e);
                  }
                }),
                r.send(this.data);
            },
          },
          {
            key: "onFailed",
            value: function () {
              0 <= --this.tryCount && this.run();
            },
          },
        ]),
        a
      );
    })(),
    PageLifeCycle =
      ((TDAnalytics.prototype._isDebug = function () {
        return (
          "debug" === this._getConfig("mode") ||
          "debug_only" === this._getConfig("mode")
        );
      }),
      (TDAnalytics.prototype._sendRequestWithImage = function (e, t) {
        function r(e) {
          e && !e.hasCalled && ((e.hasCalled = !0), e.callback) && e.callback();
        }
        var e =
            (-1 !== this._getConfig("serverUrl").indexOf("?")
              ? this._getConfig("serverUrl")
              : this._getConfig("serverUrl") + "?") + e,
          n = document.createElement("img");
        (n.callback = t),
          this._getConfig("imgUseCrossorigin") && (n.crossOrigin = "anonymous"),
          setTimeout(r, this._getConfig("dataSendTimeout"), n),
          (n.onload = function () {
            (this.onload = null), r(this);
          }),
          (n.onerror = function () {
            (this.onerror = null), r(this);
          }),
          (n.onabort = function () {
            (this.onabort = null), r(this);
          }),
          (n.src = e);
      }),
      (TDAnalytics.prototype.track = function (e, t, r, n) {
        this._isCollectData() &&
          ("ta_page_show" === e ||
            "ta_page_hide" === e ||
            (PropertyChecker.event(e) && PropertyChecker.properties(t)) ||
            !this._getConfig("strict")) &&
          this._sendRequest(
            { type: "track", event: e, time: r, properties: t },
            n
          );
      }),
      (TDAnalytics.prototype.trackUpdate = function (e) {
        this._isCollectData() &&
          (_.check.isObject(e)
            ? ((PropertyChecker.event(e.eventName) &&
                PropertyChecker.properties(e.properties)) ||
                !this._getConfig("strict")) &&
              this._sendRequest(
                {
                  type: "track_update",
                  event: e.eventName,
                  time: e.eventTime,
                  properties: e.properties,
                  extraId: e.eventId,
                },
                e.callback
              )
            : Log.e(
                "The parameter of updateble event does not meet the requirements"
              ));
      }),
      (TDAnalytics.prototype.trackOverwrite = function (e) {
        this._isCollectData() &&
          (_.check.isObject(e)
            ? ((PropertyChecker.event(e.eventName) &&
                PropertyChecker.properties(e.properties)) ||
                !this._getConfig("strict")) &&
              this._sendRequest(
                {
                  type: "track_overwrite",
                  event: e.eventName,
                  time: e.eventTime,
                  properties: e.properties,
                  extraId: e.eventId,
                },
                e.callback
              )
            : Log.e(
                "The parameter of overwritable event  does not meet the requirements"
              ));
      }),
      (TDAnalytics.prototype.trackFirstEvent = function (e) {
        this.trackFirst(e);
      }),
      (TDAnalytics.prototype.trackFirst = function (e) {
        this._isCollectData() &&
          (_.check.isObject(e)
            ? ((PropertyChecker.event(e.eventName) &&
                PropertyChecker.properties(e.properties)) ||
                !this._getConfig("strict")) &&
              this._sendRequest(
                {
                  type: "track",
                  event: e.eventName,
                  time: e.eventTime,
                  properties: e.properties,
                  firstCheckId: e.firstCheckId || this.getDeviceId(),
                },
                e.callback
              )
            : Log.e(
                "The parameter of first event does not meet the requirements"
              ));
      }),
      (TDAnalytics.prototype.trackWithBeacon = function (e, t, r, n) {
        ("ta_page_hide" === e ||
          (PropertyChecker.event(e) && PropertyChecker.properties(t)) ||
          !this._getConfig("strict")) &&
          this._sendRequest(
            { type: "track", event: e, time: r, properties: t },
            n,
            !0
          );
      }),
      (TDAnalytics.prototype.identify = function (e) {
        this.setDistinctId(e);
      }),
      (TDAnalytics.prototype.setDistinctId = function (e) {
        this._isCollectData() &&
          ("number" == typeof e && (e = String(e)),
          PropertyChecker.userId(e) || !this._getConfig("strict")
            ? e !== this.persistence.getDistinctId() &&
              (this.persistence.setDistinctId(e),
              Log.i(
                "[ThinkingData] Info: Setting distinct ID, DistinctId = " + e
              ))
            : Log.e("The parameter of setDistinctId API requires a string"));
      }),
      (TDAnalytics.prototype.getDistinctId = function () {
        return this.persistence.getDistinctId();
      }),
      (TDAnalytics.prototype.getDeviceId = function () {
        return this.persistence.getDeviceId();
      }),
      (TDAnalytics.prototype._isCollectData = function () {
        return (
          this.persistence.getOptTracking() &&
          this.persistence.getEnableTracking()
        );
      }),
      (TDAnalytics.prototype.setSuperProperties = function (e) {
        this._isCollectData() &&
          (PropertyChecker.propertiesMust(e) || !this._getConfig("strict")
            ? this.persistence.setSuperProperties(
                _.extend({}, this.getSuperProperties(), e)
              )
            : Log.w("The paramater of setSuperProperties API requires object"));
      }),
      (TDAnalytics.prototype.getSuperProperties = function () {
        return this.persistence.getSuperProperties();
      }),
      (TDAnalytics.prototype.clearSuperProperties = function () {
        this._isCollectData() && this.persistence.setSuperProperties({});
      }),
      (TDAnalytics.prototype.unsetSuperProperty = function (e) {
        var t;
        this._isCollectData() &&
          _.check.isString(e) &&
          (delete (t = this.getSuperProperties())[e],
          this.persistence.setSuperProperties(t));
      }),
      (TDAnalytics.prototype.setDynamicSuperProperties = function (e) {
        this._isCollectData() &&
          ("function" == typeof e
            ? PropertyChecker.properties(e()) || !this._getConfig("strict")
              ? (this.dynamicProperties = e)
              : Log.w(
                  "The return value of dynamic properties requires an object"
                )
            : Log.w(
                "The paramater of setDynamicSuperProperties API requires function type"
              ));
      }),
      (TDAnalytics.prototype.timeEvent = function (e) {
        this._isCollectData() &&
          (_.check.isUndefined(e)
            ? Log.w("No event name provided to timeEvent")
            : this.persistence.setEventTimer(e, new Date().getTime()));
      }),
      (TDAnalytics.prototype.quick = function (e, t) {
        var r;
        this._isCollectData() &&
          ("string" == typeof e && "autoTrack" === e
            ? ((r = {}),
              PropertyChecker.properties(t) && _.extend(r, t),
              this._sendRequest({
                type: "track",
                event: "ta_pageview",
                properties: _.extend(r, _.info.pageProperties()),
              }))
            : "string" == typeof e && "siteLinker" === e
            ? siteLinker.init(this, t)
            : Log.w("The quick method does not support the parameter of" + e));
      }),
      (TDAnalytics.prototype._setConfig = function (e) {
        _.check.isObject(e) &&
          (_.extend(this.config, e),
          this._getConfig("persistencePrefix") ||
            (this.config.persistencePrefix = this.config.cookiePrefix),
          this.persistence);
      }),
      (TDAnalytics.prototype._getConfig = function (e) {
        return this.config[e];
      }),
      (TDAnalytics.prototype.init = function (e) {
        var t;
        _.check.isUndefined(this.config)
          ? ((this.config = {}),
            (this.currentProps = this.currentProps || {}),
            this._setConfig(_.extend({}, DEFAULT_CONFIG, e)),
            (this.persistence = new ThinkingDataPersistence(this.config)),
            (t = this._getConfig("appId")),
            _.check.isUndefined(t) ||
              this._setConfig({ appId: t.replace(/\s*/g, "") }),
            (Log.showLog = this._getConfig("showLog")),
            "image" !== (t = this._getConfig("send_method")) &&
              "ajax" !== t &&
              "beacon" !== t &&
              (Log.i(
                "send_method",
                t,
                "is not supported. Changed to image as default value"
              ),
              this._setConfig({ send_method: "image" })),
            this._isDebug()
              ? this._setConfig({
                  serverUrl: _.url("basic", e.serverUrl) + "/data_debug",
                })
              : this._setConfig({
                  serverUrl: _.url("basic", e.serverUrl) + "/sync_js",
                }),
            void 0 !== this._getConfig("batch") &&
              !1 !== this._getConfig("batch") &&
              _.localStorage.isSupported() &&
              ((this.batchConsumer = new BatchConsumer(this.config)),
              this.batchConsumer.batchInterval()),
            new PageLifeCycle(this, this._getConfig("autoTrack")).start(),
            (t = "normal"),
            this.config.mode && (t = this.config.mode),
            Log.i(
              "[ThinkingData] Info: TDAnalytics SDK initialize success, AppId = " +
                this.config.appId +
                ", ServerUrl = " +
                this.config.serverUrl +
                ", Mode = " +
                t +
                ", DeviceId = " +
                this.getDeviceId() +
                ", Lib = js, LibVersion = " +
                Config.LIB_VERSION
            ))
          : Log.i("The ThinkingData libraray has been initialized.");
      }),
      (() => {
        function r(e, t) {
          _classCallCheck(this, r),
            (this.taLib = e),
            "Object" === _.paramType(t) && "Boolean" === _.paramType(t.pageShow)
              ? (this.autoPageShow = t.pageShow)
              : (this.autoPageShow = !1),
            "Object" === _.paramType(t) && "Boolean" === _.paramType(t.pageHide)
              ? (this.autoPageHide = t.pageHide)
              : (this.autoPageHide = !1);
        }
        return (
          _createClass(r, [
            {
              key: "start",
              value: function () {
                var e = this;
                e.trackPageShowEvent(),
                  "onvisibilitychange" in document &&
                    _.addEvent(document, "visibilitychange", function () {
                      document.hidden
                        ? e.trackPageHideEvent()
                        : e.trackPageShowEvent();
                    });
              },
            },
            {
              key: "trackPageShowEvent",
              value: function () {
                this.autoPageShow &&
                  this.taLib.track("ta_page_show", _.info.pageProperties()),
                  this.taLib.timeEvent("ta_page_hide");
              },
            },
            {
              key: "trackPageHideEvent",
              value: function () {
                this.autoPageHide &&
                  this.taLib.trackWithBeacon(
                    "ta_page_hide",
                    _.info.pageProperties()
                  );
              },
            },
            {
              key: "trackPageHideEventOnClose",
              value: function () {
                this.autoPageHide &&
                  this.isPageShow &&
                  this.taLib.trackWithBeacon(
                    "ta_page_hide",
                    _.info.pageProperties()
                  );
              },
            },
          ]),
          r
        );
      })()),
    siteLinker =
      ((TDAnalytics.prototype.initInstance = function (e, t) {
        if (
          !_.check.isString(e) ||
          (!_.check.isUndefined(t) && !_.check.isObject(t))
        )
          return (
            Log.w("invalid parameter of initInstance(string, object)."), null
          );
        if (this._getConfig("_name") !== MASTER_INSTANCE_NAME)
          return (
            Log.w("This function is allowed for master instance only"), null
          );
        if (e === MASTER_INSTANCE_NAME || this[e])
          return (
            Log.w("The name ", e, " couldn't be used for create new instance."),
            null
          );
        _.check.isUndefined(t) && (t = {});
        var r = new TDAnalytics(),
          t = _.extend(
            {},
            this.config,
            { _name: e, persistenceEnabled: !1, uuid: this.getDeviceId() },
            t
          );
        t.persistenceEnabled &&
          (t.persistencePrefix = t.persistencePrefix + "_" + e),
          r.init(t),
          (this[e] = r);
      }),
      (TDAnalytics.prototype.enableTracking = function (e) {
        "boolean" == typeof e && this.persistence.setEnableTracking(e);
      }),
      (TDAnalytics.prototype.optOutTracking = function () {
        this.persistence.setSuperProperties({}),
          this.persistence.setAccountId(""),
          this.persistence.clearEventTimer(),
          this.persistence.setOptTracking(!1);
      }),
      (TDAnalytics.prototype.optInTracking = function () {
        this.persistence.setOptTracking(!0);
      }),
      (TDAnalytics.prototype.setTrackStatus = function (e) {
        _.check.isObject(e) &&
          ((e = e.status),
          Log.i("[ThinkingData] Info: Change Status to " + e),
          "pause" === e
            ? this.enableTracking(!1)
            : "stop" === e
            ? this.optOutTracking()
            : "normal" === e &&
              (this.enableTracking(!0), this.optInTracking()));
      }),
      {}),
    tdMaster;
  function initFromSnippet() {
    var e, t;
    (tdMaster && tdMaster.isLoadSDK) ||
      ((e = window.ThinkingDataAnalyticalTool) &&
        "function" == typeof (tdMaster = window[e]) &&
        ((tdMaster.__SV || 0) < 1.1
          ? console.error(
              "Version mismatch; please ensure you're using the latest version of the thinkingdata snippet."
            )
          : ((tdMaster.isLoadSDK = !0),
            (t = new TDAnalytics()).init(tdMaster.param),
            tdMaster._q1 &&
              _.check.isArray(tdMaster._q1) &&
              0 < tdMaster._q1.length &&
              _.each(tdMaster._q1, function (e) {
                t[e[0]].apply(t, slice.call(e[1]));
              }),
            "function" == typeof t._getConfig("loaded") &&
              t._getConfig("loaded")(t),
            (window[e] = t),
            tdMaster._q &&
              _.check.isArray(tdMaster._q) &&
              0 < tdMaster._q.length &&
              _.each(tdMaster._q, function (e) {
                3 === e.length
                  ? t[e[2]][e[0]].apply(t[e[2]], slice.call(e[1]))
                  : t[e[0]].apply(t, slice.call(e[1]));
              }))));
  }
  (siteLinker.getPartUrl = function (e) {
    var t = this.option.length;
    if (t)
      for (var r = 0; r < t; r++)
        if (-1 < e.indexOf(this.option[r].part_url)) return !0;
    return !1;
  }),
    (siteLinker.getPartHash = function (e) {
      var t = this.option.length;
      if (t)
        for (var r = 0; r < t; r++)
          if (-1 < e.indexOf(this.option[r].part_url))
            return this.option[r].after_hash;
      return !1;
    }),
    (siteLinker.getCurrenId = function () {
      var e = this.ta.getDistinctId();
      return encodeURIComponent("d" + e);
    }),
    (siteLinker.rewriteUrl = function (e, t) {
      var r,
        n,
        i,
        o = /([^?#]+)(\?[^#]*)?(#.*)?/.exec(e),
        s = "";
      if (o)
        return (
          (r = o[1] || ""),
          (n = o[2] || ""),
          (o = o[3] || ""),
          (s = this.getPartHash(e)
            ? ((i = o.indexOf("_tasdk")),
              -1 < o.indexOf("?")
                ? -1 < i
                  ? r +
                    n +
                    "#" +
                    o.substring(1, i) +
                    "_tasdk=" +
                    this.getCurrenId()
                  : r +
                    n +
                    "#" +
                    o.substring(1) +
                    "&_tasdk=" +
                    this.getCurrenId()
                : r +
                  n +
                  "#" +
                  o.substring(1) +
                  "?_tasdk=" +
                  this.getCurrenId())
            : ((i = n.indexOf("_tasdk")),
              /^\?(\w)+/.test(n)
                ? -1 < i
                  ? r +
                    "?" +
                    n.substring(1, i) +
                    "_tasdk=" +
                    this.getCurrenId() +
                    o
                  : r +
                    "?" +
                    n.substring(1) +
                    "&_tasdk=" +
                    this.getCurrenId() +
                    o
                : r +
                  "?" +
                  n.substring(1) +
                  "_tasdk=" +
                  this.getCurrenId() +
                  o)),
          t && (t.href = s),
          s
        );
    }),
    (siteLinker.addClickListen = function () {
      function e(e) {
        var t,
          r = (e = e.target).tagName.toLowerCase(),
          n = e.parentNode;
        (("a" === r && e.href) ||
          (n && n.tagName && "a" === n.tagName.toLowerCase() && n.href)) &&
          ((r = "a" === r && e.href ? ((t = e.href), e) : ((t = n.href), n)),
          ("http:" !== (e = _.URL(t).protocol) && "https:" !== e) ||
            (i.getPartUrl(t) && i.rewriteUrl(t, r)));
      }
      var i = this;
      _.addSiteEvent(document, "mousedown", e),
        window.PointerEvent &&
          "maxTouchPoints" in window.navigator &&
          0 <= window.navigator.maxTouchPoints &&
          _.addSiteEvent(document, "pointerdown", e);
    }),
    (siteLinker.getUrlId = function () {
      var e = location.href.match(/_tasdk=([aufd][^\?\#\&\=]+)/);
      return _.check.isArray(e) && e[1] ? decodeURIComponent(e[1]) : "";
    }),
    (siteLinker.setRefferId = function () {
      var e,
        t = this.ta.getDistinctId(),
        r = this.getUrlId();
      return (
        "" !== r &&
        ((e = "d" === r.substring(0, 1)), (r = r.substring(1)) !== t) &&
        void (r && e && this.ta.setDistinctId(r))
      );
    }),
    (siteLinker.init = function (e, t) {
      this.isInited ||
        ((this.isInited = !0),
        (this.ta = e),
        this.setRefferId(),
        _.check.isObject(t) &&
          _.check.isArray(t.linker) &&
          0 < t.linker.length &&
          (this.addClickListen(),
          (this.option = t.linker),
          (this.option = ((e) => {
            for (var t = e.length, r = [], n = 0; n < t; n++)
              /[A-Za-z0-9]+\./.test(e[n].part_url) &&
              "[object Boolean]" ===
                Object.prototype.toString.call(e[n].after_hash)
                ? r.push(e[n])
                : Log.w(
                    "The configuration of linker " +
                      (n + 1) +
                      " is not supported.Please check format"
                  );
            return r;
          })(this.option))));
    }),
    initFromSnippet();
})();
