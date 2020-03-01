/*BassoonTracker v0.3.0 by Steffest - build 2019-01-25 - Full source on https://github.com/steffest/BassoonTracker */
var BassoonTracker = function() {
    function a(a, c) {
        function d(a, b) {
            for (var c = a.length + b.length, d = new Float32Array(c), e = 0, f = 0; e < c;) d[e++] = a[f], d[e++] = b[f], f++;
            return d
        }
        c = c || {};
        var e, f = a.numberOfChannels,
            g = a.sampleRate,
            h = c.float32 ? 3 : 1,
            i = 3 === h ? 32 : 16;
        return e = 2 === f ? d(a.getChannelData(0), a.getChannelData(1)) : a.getChannelData(0), b(e, h, g, f, i)
    }

    function b(a, b, c, d, e) {
        function f(a, b, c) {
            for (var d = 0; d < c.length; d++) a.setUint8(b + d, c.charCodeAt(d))
        }
        var g = e / 8,
            h = d * g,
            i = 44 + a.length * g,
            j = new ArrayBuffer(i),
            k = new DataView(j);
        f(k, 0, "RIFF"), k.setUint32(4, 36 + a.length * g, !0), f(k, 8, "WAVE"), f(k, 12, "fmt "), k.setUint32(16, 16, !0), k.setUint16(20, b, !0), k.setUint16(22, d, !0), k.setUint32(24, c, !0), k.setUint32(28, c * h, !0), k.setUint16(32, h, !0), k.setUint16(34, e, !0), f(k, 36, "data"), k.setUint32(40, a.length * g, !0);
        var l, m = 44;
        if (1 === b)
            for (l = 0; l < a.length; l++, m += 2) {
                var n = Math.max(-1, Math.min(1, a[l]));
                k.setInt16(m, n < 0 ? 32768 * n : 32767 * n, !0)
            } else
                for (l = 0; l < a.length; l++, m += 4) k.setFloat32(m, a[l], !0);
        return j
    }

    function c(a) {
        if (window.location.getParameter) return window.location.getParameter(a);
        if (location.search)
            for (var b = location.search.substring(1).split("&"), c = 0; c < b.length; c++) {
                var d = b[c].split("=");
                if (d[0] && d[0] == a) return d[1] || !0
            }
    }

    function d(a) {
        var b = "k";
        return isNaN(a) && (a = 0), a = Math.round(a / 1e3), a > 1e3 && (a = Math.round(a / 100) / 10, b = "MB"), a + b
    }

    function e(a) {
        var b = {
            "Á": "A",
            "Ă": "A",
            "Ắ": "A",
            "Ặ": "A",
            "Ằ": "A",
            "Ẳ": "A",
            "Ẵ": "A",
            "Ǎ": "A",
            "Â": "A",
            "Ấ": "A",
            "Ậ": "A",
            "Ầ": "A",
            "Ẩ": "A",
            "Ẫ": "A",
            "Ä": "A",
            "Ǟ": "A",
            "Ȧ": "A",
            "Ǡ": "A",
            "Ạ": "A",
            "Ȁ": "A",
            "À": "A",
            "Ả": "A",
            "Ȃ": "A",
            "Ā": "A",
            "Ą": "A",
            "Å": "A",
            "Ǻ": "A",
            "Ḁ": "A",
            "Ⱥ": "A",
            "Ã": "A",
            "Ꜳ": "AA",
            "Æ": "AE",
            "Ǽ": "AE",
            "Ǣ": "AE",
            "Ꜵ": "AO",
            "Ꜷ": "AU",
            "Ꜹ": "AV",
            "Ꜻ": "AV",
            "Ꜽ": "AY",
            "Ḃ": "B",
            "Ḅ": "B",
            "Ɓ": "B",
            "Ḇ": "B",
            "Ƀ": "B",
            "Ƃ": "B",
            "Ć": "C",
            "Č": "C",
            "Ç": "C",
            "Ḉ": "C",
            "Ĉ": "C",
            "Ċ": "C",
            "Ƈ": "C",
            "Ȼ": "C",
            "Ď": "D",
            "Ḑ": "D",
            "Ḓ": "D",
            "Ḋ": "D",
            "Ḍ": "D",
            "Ɗ": "D",
            "Ḏ": "D",
            "ǲ": "D",
            "ǅ": "D",
            "Đ": "D",
            "Ƌ": "D",
            "Ǳ": "DZ",
            "Ǆ": "DZ",
            "É": "E",
            "Ĕ": "E",
            "Ě": "E",
            "Ȩ": "E",
            "Ḝ": "E",
            "Ê": "E",
            "Ế": "E",
            "Ệ": "E",
            "Ề": "E",
            "Ể": "E",
            "Ễ": "E",
            "Ḙ": "E",
            "Ë": "E",
            "Ė": "E",
            "Ẹ": "E",
            "Ȅ": "E",
            "È": "E",
            "Ẻ": "E",
            "Ȇ": "E",
            "Ē": "E",
            "Ḗ": "E",
            "Ḕ": "E",
            "Ę": "E",
            "Ɇ": "E",
            "Ẽ": "E",
            "Ḛ": "E",
            "Ꝫ": "ET",
            "Ḟ": "F",
            "Ƒ": "F",
            "Ǵ": "G",
            "Ğ": "G",
            "Ǧ": "G",
            "Ģ": "G",
            "Ĝ": "G",
            "Ġ": "G",
            "Ɠ": "G",
            "Ḡ": "G",
            "Ǥ": "G",
            "Ḫ": "H",
            "Ȟ": "H",
            "Ḩ": "H",
            "Ĥ": "H",
            "Ⱨ": "H",
            "Ḧ": "H",
            "Ḣ": "H",
            "Ḥ": "H",
            "Ħ": "H",
            "Í": "I",
            "Ĭ": "I",
            "Ǐ": "I",
            "Î": "I",
            "Ï": "I",
            "Ḯ": "I",
            "İ": "I",
            "Ị": "I",
            "Ȉ": "I",
            "Ì": "I",
            "Ỉ": "I",
            "Ȋ": "I",
            "Ī": "I",
            "Į": "I",
            "Ɨ": "I",
            "Ĩ": "I",
            "Ḭ": "I",
            "Ꝺ": "D",
            "Ꝼ": "F",
            "Ᵹ": "G",
            "Ꞃ": "R",
            "Ꞅ": "S",
            "Ꞇ": "T",
            "Ꝭ": "IS",
            "Ĵ": "J",
            "Ɉ": "J",
            "Ḱ": "K",
            "Ǩ": "K",
            "Ķ": "K",
            "Ⱪ": "K",
            "Ꝃ": "K",
            "Ḳ": "K",
            "Ƙ": "K",
            "Ḵ": "K",
            "Ꝁ": "K",
            "Ꝅ": "K",
            "Ĺ": "L",
            "Ƚ": "L",
            "Ľ": "L",
            "Ļ": "L",
            "Ḽ": "L",
            "Ḷ": "L",
            "Ḹ": "L",
            "Ⱡ": "L",
            "Ꝉ": "L",
            "Ḻ": "L",
            "Ŀ": "L",
            "Ɫ": "L",
            "ǈ": "L",
            "Ł": "L",
            "Ǉ": "LJ",
            "Ḿ": "M",
            "Ṁ": "M",
            "Ṃ": "M",
            "Ɱ": "M",
            "Ń": "N",
            "Ň": "N",
            "Ņ": "N",
            "Ṋ": "N",
            "Ṅ": "N",
            "Ṇ": "N",
            "Ǹ": "N",
            "Ɲ": "N",
            "Ṉ": "N",
            "Ƞ": "N",
            "ǋ": "N",
            "Ñ": "N",
            "Ǌ": "NJ",
            "Ó": "O",
            "Ŏ": "O",
            "Ǒ": "O",
            "Ô": "O",
            "Ố": "O",
            "Ộ": "O",
            "Ồ": "O",
            "Ổ": "O",
            "Ỗ": "O",
            "Ö": "O",
            "Ȫ": "O",
            "Ȯ": "O",
            "Ȱ": "O",
            "Ọ": "O",
            "Ő": "O",
            "Ȍ": "O",
            "Ò": "O",
            "Ỏ": "O",
            "Ơ": "O",
            "Ớ": "O",
            "Ợ": "O",
            "Ờ": "O",
            "Ở": "O",
            "Ỡ": "O",
            "Ȏ": "O",
            "Ꝋ": "O",
            "Ꝍ": "O",
            "Ō": "O",
            "Ṓ": "O",
            "Ṑ": "O",
            "Ɵ": "O",
            "Ǫ": "O",
            "Ǭ": "O",
            "Ø": "O",
            "Ǿ": "O",
            "Õ": "O",
            "Ṍ": "O",
            "Ṏ": "O",
            "Ȭ": "O",
            "Ƣ": "OI",
            "Ꝏ": "OO",
            "Ɛ": "E",
            "Ɔ": "O",
            "Ȣ": "OU",
            "Ṕ": "P",
            "Ṗ": "P",
            "Ꝓ": "P",
            "Ƥ": "P",
            "Ꝕ": "P",
            "Ᵽ": "P",
            "Ꝑ": "P",
            "Ꝙ": "Q",
            "Ꝗ": "Q",
            "Ŕ": "R",
            "Ř": "R",
            "Ŗ": "R",
            "Ṙ": "R",
            "Ṛ": "R",
            "Ṝ": "R",
            "Ȑ": "R",
            "Ȓ": "R",
            "Ṟ": "R",
            "Ɍ": "R",
            "Ɽ": "R",
            "Ꜿ": "C",
            "Ǝ": "E",
            "Ś": "S",
            "Ṥ": "S",
            "Š": "S",
            "Ṧ": "S",
            "Ş": "S",
            "Ŝ": "S",
            "Ș": "S",
            "Ṡ": "S",
            "Ṣ": "S",
            "Ṩ": "S",
            "Ť": "T",
            "Ţ": "T",
            "Ṱ": "T",
            "Ț": "T",
            "Ⱦ": "T",
            "Ṫ": "T",
            "Ṭ": "T",
            "Ƭ": "T",
            "Ṯ": "T",
            "Ʈ": "T",
            "Ŧ": "T",
            "Ɐ": "A",
            "Ꞁ": "L",
            "Ɯ": "M",
            "Ʌ": "V",
            "Ꜩ": "TZ",
            "Ú": "U",
            "Ŭ": "U",
            "Ǔ": "U",
            "Û": "U",
            "Ṷ": "U",
            "Ü": "U",
            "Ǘ": "U",
            "Ǚ": "U",
            "Ǜ": "U",
            "Ǖ": "U",
            "Ṳ": "U",
            "Ụ": "U",
            "Ű": "U",
            "Ȕ": "U",
            "Ù": "U",
            "Ủ": "U",
            "Ư": "U",
            "Ứ": "U",
            "Ự": "U",
            "Ừ": "U",
            "Ử": "U",
            "Ữ": "U",
            "Ȗ": "U",
            "Ū": "U",
            "Ṻ": "U",
            "Ų": "U",
            "Ů": "U",
            "Ũ": "U",
            "Ṹ": "U",
            "Ṵ": "U",
            "Ꝟ": "V",
            "Ṿ": "V",
            "Ʋ": "V",
            "Ṽ": "V",
            "Ꝡ": "VY",
            "Ẃ": "W",
            "Ŵ": "W",
            "Ẅ": "W",
            "Ẇ": "W",
            "Ẉ": "W",
            "Ẁ": "W",
            "Ⱳ": "W",
            "Ẍ": "X",
            "Ẋ": "X",
            "Ý": "Y",
            "Ŷ": "Y",
            "Ÿ": "Y",
            "Ẏ": "Y",
            "Ỵ": "Y",
            "Ỳ": "Y",
            "Ƴ": "Y",
            "Ỷ": "Y",
            "Ỿ": "Y",
            "Ȳ": "Y",
            "Ɏ": "Y",
            "Ỹ": "Y",
            "Ź": "Z",
            "Ž": "Z",
            "Ẑ": "Z",
            "Ⱬ": "Z",
            "Ż": "Z",
            "Ẓ": "Z",
            "Ȥ": "Z",
            "Ẕ": "Z",
            "Ƶ": "Z",
            "Ĳ": "IJ",
            "Œ": "OE",
            "ᴀ": "A",
            "ᴁ": "AE",
            "ʙ": "B",
            "ᴃ": "B",
            "ᴄ": "C",
            "ᴅ": "D",
            "ᴇ": "E",
            "ꜰ": "F",
            "ɢ": "G",
            "ʛ": "G",
            "ʜ": "H",
            "ɪ": "I",
            "ʁ": "R",
            "ᴊ": "J",
            "ᴋ": "K",
            "ʟ": "L",
            "ᴌ": "L",
            "ᴍ": "M",
            "ɴ": "N",
            "ᴏ": "O",
            "ɶ": "OE",
            "ᴐ": "O",
            "ᴕ": "OU",
            "ᴘ": "P",
            "ʀ": "R",
            "ᴎ": "N",
            "ᴙ": "R",
            "ꜱ": "S",
            "ᴛ": "T",
            "ⱻ": "E",
            "ᴚ": "R",
            "ᴜ": "U",
            "ᴠ": "V",
            "ᴡ": "W",
            "ʏ": "Y",
            "ᴢ": "Z",
            "á": "a",
            "ă": "a",
            "ắ": "a",
            "ặ": "a",
            "ằ": "a",
            "ẳ": "a",
            "ẵ": "a",
            "ǎ": "a",
            "â": "a",
            "ấ": "a",
            "ậ": "a",
            "ầ": "a",
            "ẩ": "a",
            "ẫ": "a",
            "ä": "a",
            "ǟ": "a",
            "ȧ": "a",
            "ǡ": "a",
            "ạ": "a",
            "ȁ": "a",
            "à": "a",
            "ả": "a",
            "ȃ": "a",
            "ā": "a",
            "ą": "a",
            "ᶏ": "a",
            "ẚ": "a",
            "å": "a",
            "ǻ": "a",
            "ḁ": "a",
            "ⱥ": "a",
            "ã": "a",
            "ꜳ": "aa",
            "æ": "ae",
            "ǽ": "ae",
            "ǣ": "ae",
            "ꜵ": "ao",
            "ꜷ": "au",
            "ꜹ": "av",
            "ꜻ": "av",
            "ꜽ": "ay",
            "ḃ": "b",
            "ḅ": "b",
            "ɓ": "b",
            "ḇ": "b",
            "ᵬ": "b",
            "ᶀ": "b",
            "ƀ": "b",
            "ƃ": "b",
            "ɵ": "o",
            "ć": "c",
            "č": "c",
            "ç": "c",
            "ḉ": "c",
            "ĉ": "c",
            "ɕ": "c",
            "ċ": "c",
            "ƈ": "c",
            "ȼ": "c",
            "ď": "d",
            "ḑ": "d",
            "ḓ": "d",
            "ȡ": "d",
            "ḋ": "d",
            "ḍ": "d",
            "ɗ": "d",
            "ᶑ": "d",
            "ḏ": "d",
            "ᵭ": "d",
            "ᶁ": "d",
            "đ": "d",
            "ɖ": "d",
            "ƌ": "d",
            "ı": "i",
            "ȷ": "j",
            "ɟ": "j",
            "ʄ": "j",
            "ǳ": "dz",
            "ǆ": "dz",
            "é": "e",
            "ĕ": "e",
            "ě": "e",
            "ȩ": "e",
            "ḝ": "e",
            "ê": "e",
            "ế": "e",
            "ệ": "e",
            "ề": "e",
            "ể": "e",
            "ễ": "e",
            "ḙ": "e",
            "ë": "e",
            "ė": "e",
            "ẹ": "e",
            "ȅ": "e",
            "è": "e",
            "ẻ": "e",
            "ȇ": "e",
            "ē": "e",
            "ḗ": "e",
            "ḕ": "e",
            "ⱸ": "e",
            "ę": "e",
            "ᶒ": "e",
            "ɇ": "e",
            "ẽ": "e",
            "ḛ": "e",
            "ꝫ": "et",
            "ḟ": "f",
            "ƒ": "f",
            "ᵮ": "f",
            "ᶂ": "f",
            "ǵ": "g",
            "ğ": "g",
            "ǧ": "g",
            "ģ": "g",
            "ĝ": "g",
            "ġ": "g",
            "ɠ": "g",
            "ḡ": "g",
            "ᶃ": "g",
            "ǥ": "g",
            "ḫ": "h",
            "ȟ": "h",
            "ḩ": "h",
            "ĥ": "h",
            "ⱨ": "h",
            "ḧ": "h",
            "ḣ": "h",
            "ḥ": "h",
            "ɦ": "h",
            "ẖ": "h",
            "ħ": "h",
            "ƕ": "hv",
            "í": "i",
            "ĭ": "i",
            "ǐ": "i",
            "î": "i",
            "ï": "i",
            "ḯ": "i",
            "ị": "i",
            "ȉ": "i",
            "ì": "i",
            "ỉ": "i",
            "ȋ": "i",
            "ī": "i",
            "į": "i",
            "ᶖ": "i",
            "ɨ": "i",
            "ĩ": "i",
            "ḭ": "i",
            "ꝺ": "d",
            "ꝼ": "f",
            "ᵹ": "g",
            "ꞃ": "r",
            "ꞅ": "s",
            "ꞇ": "t",
            "ꝭ": "is",
            "ǰ": "j",
            "ĵ": "j",
            "ʝ": "j",
            "ɉ": "j",
            "ḱ": "k",
            "ǩ": "k",
            "ķ": "k",
            "ⱪ": "k",
            "ꝃ": "k",
            "ḳ": "k",
            "ƙ": "k",
            "ḵ": "k",
            "ᶄ": "k",
            "ꝁ": "k",
            "ꝅ": "k",
            "ĺ": "l",
            "ƚ": "l",
            "ɬ": "l",
            "ľ": "l",
            "ļ": "l",
            "ḽ": "l",
            "ȴ": "l",
            "ḷ": "l",
            "ḹ": "l",
            "ⱡ": "l",
            "ꝉ": "l",
            "ḻ": "l",
            "ŀ": "l",
            "ɫ": "l",
            "ᶅ": "l",
            "ɭ": "l",
            "ł": "l",
            "ǉ": "lj",
            "ſ": "s",
            "ẜ": "s",
            "ẛ": "s",
            "ẝ": "s",
            "ḿ": "m",
            "ṁ": "m",
            "ṃ": "m",
            "ɱ": "m",
            "ᵯ": "m",
            "ᶆ": "m",
            "ń": "n",
            "ň": "n",
            "ņ": "n",
            "ṋ": "n",
            "ȵ": "n",
            "ṅ": "n",
            "ṇ": "n",
            "ǹ": "n",
            "ɲ": "n",
            "ṉ": "n",
            "ƞ": "n",
            "ᵰ": "n",
            "ᶇ": "n",
            "ɳ": "n",
            "ñ": "n",
            "ǌ": "nj",
            "ó": "o",
            "ŏ": "o",
            "ǒ": "o",
            "ô": "o",
            "ố": "o",
            "ộ": "o",
            "ồ": "o",
            "ổ": "o",
            "ỗ": "o",
            "ö": "o",
            "ȫ": "o",
            "ȯ": "o",
            "ȱ": "o",
            "ọ": "o",
            "ő": "o",
            "ȍ": "o",
            "ò": "o",
            "ỏ": "o",
            "ơ": "o",
            "ớ": "o",
            "ợ": "o",
            "ờ": "o",
            "ở": "o",
            "ỡ": "o",
            "ȏ": "o",
            "ꝋ": "o",
            "ꝍ": "o",
            "ⱺ": "o",
            "ō": "o",
            "ṓ": "o",
            "ṑ": "o",
            "ǫ": "o",
            "ǭ": "o",
            "ø": "o",
            "ǿ": "o",
            "õ": "o",
            "ṍ": "o",
            "ṏ": "o",
            "ȭ": "o",
            "ƣ": "oi",
            "ꝏ": "oo",
            "ɛ": "e",
            "ᶓ": "e",
            "ɔ": "o",
            "ᶗ": "o",
            "ȣ": "ou",
            "ṕ": "p",
            "ṗ": "p",
            "ꝓ": "p",
            "ƥ": "p",
            "ᵱ": "p",
            "ᶈ": "p",
            "ꝕ": "p",
            "ᵽ": "p",
            "ꝑ": "p",
            "ꝙ": "q",
            "ʠ": "q",
            "ɋ": "q",
            "ꝗ": "q",
            "ŕ": "r",
            "ř": "r",
            "ŗ": "r",
            "ṙ": "r",
            "ṛ": "r",
            "ṝ": "r",
            "ȑ": "r",
            "ɾ": "r",
            "ᵳ": "r",
            "ȓ": "r",
            "ṟ": "r",
            "ɼ": "r",
            "ᵲ": "r",
            "ᶉ": "r",
            "ɍ": "r",
            "ɽ": "r",
            "ↄ": "c",
            "ꜿ": "c",
            "ɘ": "e",
            "ɿ": "r",
            "ś": "s",
            "ṥ": "s",
            "š": "s",
            "ṧ": "s",
            "ş": "s",
            "ŝ": "s",
            "ș": "s",
            "ṡ": "s",
            "ṣ": "s",
            "ṩ": "s",
            "ʂ": "s",
            "ᵴ": "s",
            "ᶊ": "s",
            "ȿ": "s",
            "ɡ": "g",
            "ᴑ": "o",
            "ᴓ": "o",
            "ᴝ": "u",
            "ť": "t",
            "ţ": "t",
            "ṱ": "t",
            "ț": "t",
            "ȶ": "t",
            "ẗ": "t",
            "ⱦ": "t",
            "ṫ": "t",
            "ṭ": "t",
            "ƭ": "t",
            "ṯ": "t",
            "ᵵ": "t",
            "ƫ": "t",
            "ʈ": "t",
            "ŧ": "t",
            "ᵺ": "th",
            "ɐ": "a",
            "ᴂ": "ae",
            "ǝ": "e",
            "ᵷ": "g",
            "ɥ": "h",
            "ʮ": "h",
            "ʯ": "h",
            "ᴉ": "i",
            "ʞ": "k",
            "ꞁ": "l",
            "ɯ": "m",
            "ɰ": "m",
            "ᴔ": "oe",
            "ɹ": "r",
            "ɻ": "r",
            "ɺ": "r",
            "ⱹ": "r",
            "ʇ": "t",
            "ʌ": "v",
            "ʍ": "w",
            "ʎ": "y",
            "ꜩ": "tz",
            "ú": "u",
            "ŭ": "u",
            "ǔ": "u",
            "û": "u",
            "ṷ": "u",
            "ü": "u",
            "ǘ": "u",
            "ǚ": "u",
            "ǜ": "u",
            "ǖ": "u",
            "ṳ": "u",
            "ụ": "u",
            "ű": "u",
            "ȕ": "u",
            "ù": "u",
            "ủ": "u",
            "ư": "u",
            "ứ": "u",
            "ự": "u",
            "ừ": "u",
            "ử": "u",
            "ữ": "u",
            "ȗ": "u",
            "ū": "u",
            "ṻ": "u",
            "ų": "u",
            "ᶙ": "u",
            "ů": "u",
            "ũ": "u",
            "ṹ": "u",
            "ṵ": "u",
            "ᵫ": "ue",
            "ꝸ": "um",
            "ⱴ": "v",
            "ꝟ": "v",
            "ṿ": "v",
            "ʋ": "v",
            "ᶌ": "v",
            "ⱱ": "v",
            "ṽ": "v",
            "ꝡ": "vy",
            "ẃ": "w",
            "ŵ": "w",
            "ẅ": "w",
            "ẇ": "w",
            "ẉ": "w",
            "ẁ": "w",
            "ⱳ": "w",
            "ẘ": "w",
            "ẍ": "x",
            "ẋ": "x",
            "ᶍ": "x",
            "ý": "y",
            "ŷ": "y",
            "ÿ": "y",
            "ẏ": "y",
            "ỵ": "y",
            "ỳ": "y",
            "ƴ": "y",
            "ỷ": "y",
            "ỿ": "y",
            "ȳ": "y",
            "ẙ": "y",
            "ɏ": "y",
            "ỹ": "y",
            "ź": "z",
            "ž": "z",
            "ẑ": "z",
            "ʑ": "z",
            "ⱬ": "z",
            "ż": "z",
            "ẓ": "z",
            "ȥ": "z",
            "ẕ": "z",
            "ᵶ": "z",
            "ᶎ": "z",
            "ʐ": "z",
            "ƶ": "z",
            "ɀ": "z",
            "ﬀ": "ff",
            "ﬃ": "ffi",
            "ﬄ": "ffl",
            "ﬁ": "fi",
            "ﬂ": "fl",
            "ĳ": "ij",
            "œ": "oe",
            "ﬆ": "st",
            "ₐ": "a",
            "ₑ": "e",
            "ᵢ": "i",
            "ⱼ": "j",
            "ₒ": "o",
            "ᵣ": "r",
            "ᵤ": "u",
            "ᵥ": "v",
            "ₓ": "x"
        };
        return a = a.split(" ").join("-"), a = a.replace(/[^A-Za-z0-9\[\] ]/g, function(a) {
            return b[a] || a
        }), a = a.toLowerCase(), a = a.replace(/[^a-z0-9\-]+/g, "")
    }

    function f(a, b) {
        var c = new XMLHttpRequest;
        c.open("GET", a, !0), c.responseType = "arraybuffer", c.onload = function(a) {
            var d = c.response;
            d ? b && b(d) : b && b(!1)
        }, c.send(null)
    }

    function g(a, b) {
        function c(a) {
            a = 0 === a ? a : a || d.index, a < 0 && (a = 0), a >= d.length && (a = d.length - 1), d.index = a
        }
        var d = {
            index: 0,
            litteEndian: !b
        };
        return d.goto = function(a) {
            c(a)
        }, d.jump = function(a) {
            this.goto(this.index + a)
        }, d.readByte = function(a) {
            c(a);
            var b = this.dataView.getInt8(this.index);
            return this.index++, b
        }, d.writeByte = function(a, b) {
            c(b), this.dataView.setInt8(this.index, a), this.index++
        }, d.readUbyte = function(a) {
            c(a);
            var b = this.dataView.getUint8(this.index);
            return this.index++, b
        }, d.writeUByte = function(a, b) {
            c(b), this.dataView.setUint8(this.index, a), this.index++
        }, d.readUint = function(a) {
            c(a);
            var b = this.dataView.getUint32(this.index, this.litteEndian);
            return this.index += 4, b
        }, d.writeUint = function(a, b) {
            c(b), this.dataView.setUint32(this.index, a, this.litteEndian), this.index += 4
        }, d.readBytes = function(a, b) {
            c(b);
            var d = new Uint8Array(a),
                e = this.index;
            (a += e) > this.length && (a = this.length);
            for (var f = 0; e < a; ++e) d.setUint8(f++, this.dataView.getUint8(e));
            return this.index = a, d
        }, d.readString = function(a, b) {
            c(b);
            var d = this.index,
                e = this.dataView,
                f = "";
            for ((a += d) > this.length && (a = this.length); d < a; ++d) {
                var g = e.getUint8(d);
                if (0 == g) break;
                f += String.fromCharCode(g)
            }
            return this.index = a, f
        }, d.writeString = function(a, b) {
            c(b);
            for (var d = this.dataView, e = a.length, f = 0; f < e; f++) d.setUint8(this.index + f, a.charCodeAt(f));
            this.index += e
        }, d.writeStringSection = function(a, b, e, f) {
            c(f), b = b || 1, a = a || "", e = e || 0;
            var g = a.length;
            g > b && (a = a.substr(0, b)), d.writeString(a), d.fill(e, b - g)
        }, d.readWord = function(a) {
            c(a);
            var b = this.dataView.getUint16(this.index, this.litteEndian);
            return this.index += 2, b
        }, d.writeWord = function(a, b) {
            c(b), this.dataView.setUint16(this.index, a, this.litteEndian), this.index += 2
        }, d.readLong = d.readDWord = d.readUint, d.writeLong = d.writeDWord = d.writeUint, d.readShort = function(a, b) {
            c(b);
            var d = this.dataView.getInt16(this.index, this.litteEndian);
            return this.index += 2, d
        }, d.clear = function(a) {
            d.fill(0, a)
        }, d.fill = function(a, b) {
            a = a || 0, b = b || 0;
            for (var c = 0; c < b; c++) d.writeByte(a)
        }, d.isEOF = function(a) {
            return a = a || 0, this.index >= this.length - a
        }, d.buffer = a, d.dataView = new DataView(a), d.length = a.byteLength, d
    }

    function h(a, b) {
        function c() {
            var b = {};
            return b.name = a.readString(4), b.size = a.readDWord(), b
        }
        a.litteEndian = !1, a.goto(12);
        for (var d = c();
            "BODY" != d.name && !a.isEOF(10);) "NAME" == d.name ? b.name = a.readString(d.size) : a.jump(d.size), d = c();
        if ("BODY" == d.name)
            for (var e = 0; e < d.size; e++) {
                var f = a.readByte();
                b.data.push(f / 127)
            }
    }

    function k(a, b) {
        var c = x.RAW_8BIT,
            d = m;
        a.goto(0);
        var e = a.readString(4);
        if ("RIFF" == e && (c = x.WAVE_PCM, d = n), "FORM" == e) {
            a.goto(8);
            var f = a.readString(4);
            "8SVX" == f && (c = x.IFF_8SVX, d = h)
        }
        return b && b.name && ".mp3" == b.name.toLowerCase().slice(-4) && (c = x.MP3, d = l), b && d ? void d(a, b) : c
    }

    function l(a, b) {
        O.context.decodeAudioData(a.buffer, function(a) {
            return a ? (b.data = a.getChannelData(0), void(b.length = a.length)) : void alert("error decoding file data: " + url)
        }, function(a) {})
    }

    function m(a, b) {
        a.goto(0);
        for (var c = 0; c < b.length; c++) {
            var d = a.readByte();
            b.data.push(d / 127)
        }
    }

    function n(a, b) {
        a.litteEndian = !0, a.goto(4);
        var c = {};
        c.chunkSize = a.readDWord(), c.format = a.readString(4), c.subChunk = a.readString(4), c.subChuckSize = a.readDWord();
        var d = a.index + c.subChuckSize;
        if (c.audioFormat = a.readWord(), c.numberOfChannels = a.readWord(), c.sampleRate = a.readDWord(), c.byteRate = a.readDWord(), c.blockalign = a.readWord(), c.bits = a.readWord(), a.goto(d), c.dataChunk = a.readString(4), c.dataChuckSize = a.readDWord(), 8 === c.bits) {
            b.length = c.dataChuckSize;
            for (var e = 0; e < b.length; e++) {
                var f = a.readUbyte();
                f -= 128, b.data.push(f / 128)
            }
        } else l(a, b)
    }

    function o(a, b) {
        var c = a.length,
            d = 8e3,
            e = d;
        16 === b && (c = 2 * a.length, e = 2 * d);
        var f = c;
        f % 2 === 1 && f++;
        var h = new ArrayBuffer(46 + f),
            i = new g(h, !1);
        if (i.goto(0), i.writeString("RIFF"), i.writeDWord(38 + f), i.writeString("WAVE"), i.writeString("fmt "), i.writeDWord(18), i.writeWord(1), i.writeWord(1), i.writeDWord(d), i.writeDWord(e), i.writeWord(Math.floor(b / 8)), i.writeWord(b), i.writeWord(0), i.writeString("data"), i.writeDWord(c), 16 === b)
            for (var j = 0; j < a.length; j++) i.writeWord(32767 * a[j]);
        else
            for (var j = 0; j < a.length; j++) i.writeUByte(Math.round(127 * a[j]) + 127);
        return c < f && i.writeUByte(0), i
    }
    var p = {
            images: {},
            audio: {},
            json: {},
            arrayBuffer: {}
        },
        q = void 0,
        r = {
            image: 1,
            audio: 2,
            json: 3,
            binary: 4
        },
        s = {
            instrumentChange: 1,
            patternChange: 2,
            patternPosChange: 3,
            patternTableChange: 4,
            recordingChange: 5,
            cursorPositionChange: 6,
            trackStateChange: 7,
            playingChange: 8,
            playTypeChange: 9,
            songPositionChange: 10,
            songSpeedChange: 11,
            songBPMChange: 12,
            samplePlay: 13,
            screenRefresh: 14,
            screenRender: 15,
            songPropertyChange: 16,
            instrumentNameChange: 17,
            command: 18,
            pianoNoteOn: 19,
            pianoNoteOff: 20,
            statusChange: 21,
            diskOperationTargetChange: 22,
            diskOperationActionChange: 23,
            trackCountChange: 24,
            patternHorizontalScrollChange: 25,
            songLoaded: 26,
            songLoading: 27,
            trackerModeChanged: 28,
            instrumentListChange: 29,
            showView: 30,
            toggleView: 31,
            visibleTracksCountChange: 32,
            filterChainCountChange: 33,
            fxPanelToggle: 34,
            samplePropertyChange: 35,
            sampleIndexChange: 36,
            second: 37,
            minute: 38,
            dropboxConnect: 39,
            dropboxConnectCancel: 40,
            trackScopeClick: 41,
            octaveChanged: 42,
            skipFrameChanged: 43,
            showContextMenu: 44,
            hideContextMenu: 45,
            clockEventExpired: 46,
            commandUndo: 50,
            commandRedo: 51,
            commandSelectAll: 52
        },
        t = {
            newFile: 1,
            openFile: 2,
            saveFile: 3,
            clearTrack: 4,
            clearPattern: 5,
            clearSong: 6,
            clearInstruments: 7,
            showMain: 8,
            showOptions: 9,
            showFileOperations: 10,
            showSampleEditor: 11,
            showAbout: 12,
            showHelp: 13,
            togglePiano: 14,
            showTopMain: 15,
            showBottomMain: 16,
            randomSong: 17,
            randomSongXM: 18,
            showGithub: 19,
            showStats: 20,
            cut: 21,
            copy: 22,
            paste: 23,
            pattern2Sample: 24
        },
        u = {
            song: 1,
            pattern: 2
        },
        v = {
            module: 1,
            sample: 2,
            pattern: 3,
            track: 4
        },
        w = {
            mod: 1,
            xm: 2
        },
        x = {
            RAW_8BIT: 1,
            WAVE_PCM: 2,
            IFF_8SVX: 3,
            MP3: 4,
            RIFF_8BIT: 5,
            RIFF_16BIT: 6
        },
        y = {
            FULL: 1,
            BALANCED: 2,
            NONE: 3
        },
        z = {
            NONE: 0,
            FORWARD: 1,
            PINGPONG: 2
        },
        A = {
            RESET: 1,
            CLEAR: 2,
            CUT: 3,
            COPY: 4,
            PASTE: 5,
            POSITION: 6
        },
        B = 7093790,
        C = 7158728,
        D = B / 2,
        E = C / 2,
        F = {
            C1: {
                period: 856,
                name: "C-1",
                tune: [907, 900, 894, 887, 881, 875, 868, 862, 856, 850, 844, 838, 832, 826, 820, 814]
            },
            Cs1: {
                period: 808,
                name: "C#1",
                tune: [856, 850, 844, 838, 832, 826, 820, 814, 808, 802, 796, 791, 785, 779, 774, 768]
            },
            D1: {
                period: 762,
                name: "D-1",
                tune: [808, 802, 796, 791, 785, 779, 774, 768, 762, 757, 752, 746, 741, 736, 730, 725]
            },
            Ds1: {
                period: 720,
                name: "D#1",
                tune: [762, 757, 752, 746, 741, 736, 730, 725, 720, 715, 709, 704, 699, 694, 689, 684]
            },
            E1: {
                period: 678,
                name: "E-1",
                tune: [720, 715, 709, 704, 699, 694, 689, 684, 678, 674, 670, 665, 660, 655, 651, 646]
            },
            F1: {
                period: 640,
                name: "F-1",
                tune: [678, 675, 670, 665, 660, 655, 651, 646, 640, 637, 632, 628, 623, 619, 614, 610]
            },
            Fs1: {
                period: 604,
                name: "F#1",
                tune: [640, 636, 632, 628, 623, 619, 614, 610, 604, 601, 597, 592, 588, 584, 580, 575]
            },
            G1: {
                period: 570,
                name: "G-1",
                tune: [604, 601, 597, 592, 588, 584, 580, 575, 570, 567, 563, 559, 555, 551, 547, 543]
            },
            Gs1: {
                period: 538,
                name: "G#1",
                tune: [570, 567, 563, 559, 555, 551, 547, 543, 538, 535, 532, 528, 524, 520, 516, 513]
            },
            A1: {
                period: 508,
                name: "A-1",
                tune: [538, 535, 532, 528, 524, 520, 516, 513, 508, 505, 502, 498, 495, 491, 487, 484]
            },
            As1: {
                period: 480,
                name: "A#1",
                tune: [508, 505, 502, 498, 494, 491, 487, 484, 480, 477, 474, 470, 467, 463, 460, 457]
            },
            B1: {
                period: 453,
                name: "B-1",
                tune: [480, 477, 474, 470, 467, 463, 460, 457, 453, 450, 447, 444, 441, 437, 434, 431]
            },
            C2: {
                period: 428,
                name: "C-2",
                tune: [453, 450, 447, 444, 441, 437, 434, 431, 428, 425, 422, 419, 416, 413, 410, 407]
            },
            Cs2: {
                period: 404,
                name: "C#2",
                tune: [428, 425, 422, 419, 416, 413, 410, 407, 404, 401, 398, 395, 392, 390, 387, 384]
            },
            D2: {
                period: 381,
                name: "D-2",
                tune: [404, 401, 398, 395, 392, 390, 387, 384, 381, 379, 376, 373, 370, 368, 365, 363]
            },
            Ds2: {
                period: 360,
                name: "D#2",
                tune: [381, 379, 376, 373, 370, 368, 365, 363, 360, 357, 355, 352, 350, 347, 345, 342]
            },
            E2: {
                period: 339,
                name: "E-2",
                tune: [360, 357, 355, 352, 350, 347, 345, 342, 339, 337, 335, 332, 330, 328, 325, 323]
            },
            F2: {
                period: 320,
                name: "F-2",
                tune: [339, 337, 335, 332, 330, 328, 325, 323, 320, 318, 316, 314, 312, 309, 307, 305]
            },
            Fs2: {
                period: 302,
                name: "F#2",
                tune: [320, 318, 316, 314, 312, 309, 307, 305, 302, 300, 298, 296, 294, 292, 290, 288]
            },
            G2: {
                period: 285,
                name: "G-2",
                tune: [302, 300, 298, 296, 294, 292, 290, 288, 285, 284, 282, 280, 278, 276, 274, 272]
            },
            Gs2: {
                period: 269,
                name: "G#2",
                tune: [285, 284, 282, 280, 278, 276, 274, 272, 269, 268, 266, 264, 262, 260, 258, 256]
            },
            A2: {
                period: 254,
                name: "A-2",
                tune: [269, 268, 266, 264, 262, 260, 258, 256, 254, 253, 251, 249, 247, 245, 244, 242]
            },
            As2: {
                period: 240,
                name: "A#2",
                tune: [254, 253, 251, 249, 247, 245, 244, 242, 240, 239, 237, 235, 233, 232, 230, 228]
            },
            B2: {
                period: 226,
                name: "B-2",
                tune: [240, 238, 237, 235, 233, 232, 230, 228, 226, 225, 224, 222, 220, 219, 217, 216]
            },
            C3: {
                period: 214,
                name: "C-3",
                tune: [226, 225, 223, 222, 220, 219, 217, 216, 214, 213, 211, 209, 208, 206, 205, 204]
            },
            Cs3: {
                period: 202,
                name: "C#3",
                tune: [214, 212, 211, 209, 208, 206, 205, 203, 202, 201, 199, 198, 196, 195, 193, 192]
            },
            D3: {
                period: 190,
                name: "D-3",
                tune: [202, 200, 199, 198, 196, 195, 193, 192, 190, 189, 188, 187, 185, 184, 183, 181]
            },
            Ds3: {
                period: 180,
                name: "D#3",
                tune: [190, 189, 188, 187, 185, 184, 183, 181, 180, 179, 177, 176, 175, 174, 172, 171]
            },
            E3: {
                period: 170,
                name: "E-3",
                tune: [180, 179, 177, 176, 175, 174, 172, 171, 170, 169, 167, 166, 165, 164, 163, 161]
            },
            F3: {
                period: 160,
                name: "F-3",
                tune: [170, 169, 167, 166, 165, 164, 163, 161, 160, 159, 158, 157, 156, 155, 154, 152]
            },
            Fs3: {
                period: 151,
                name: "F#3",
                tune: [160, 159, 158, 157, 156, 155, 154, 152, 151, 150, 149, 148, 147, 146, 145, 144]
            },
            G3: {
                period: 143,
                name: "G-3",
                tune: [151, 150, 149, 148, 147, 146, 145, 144, 143, 142, 141, 140, 139, 138, 137, 136]
            },
            Gs3: {
                period: 135,
                name: "G#3",
                tune: [143, 142, 141, 140, 139, 138, 137, 136, 135, 134, 133, 132, 131, 130, 129, 128]
            },
            A3: {
                period: 127,
                name: "A-3",
                tune: [135, 134, 133, 132, 131, 130, 129, 128, 127, 126, 125, 125, 124, 123, 122, 121]
            },
            As3: {
                period: 120,
                name: "A#3",
                tune: [127, 126, 125, 125, 123, 123, 122, 121, 120, 119, 118, 118, 117, 116, 115, 114]
            },
            B3: {
                period: 113,
                name: "B-3",
                tune: [120, 119, 118, 118, 117, 116, 115, 114, 113, 113, 112, 111, 110, 109, 109, 108]
            }
        },
        G = {
            None: {
                name: "---"
            },
            C0: {
                name: "C-0",
                period: 6848
            },
            Cs0: {
                name: "C#0",
                period: 6464
            },
            D0: {
                name: "D-0",
                period: 6096
            },
            Ds0: {
                name: "D#0",
                period: 5760
            },
            E0: {
                name: "E-0",
                period: 5424
            },
            F0: {
                name: "F-0",
                period: 5120
            },
            Fs0: {
                name: "F#0",
                period: 4832
            },
            G0: {
                name: "G-0",
                period: 4560
            },
            Gs0: {
                name: "G#0",
                period: 4304
            },
            A0: {
                name: "A-0",
                period: 4064
            },
            As0: {
                name: "A#0",
                period: 3840
            },
            B0: {
                name: "B-0",
                period: 3624
            },
            C1: {
                name: "C-1",
                period: 3424
            },
            Cs1: {
                name: "C#1",
                period: 3232
            },
            D1: {
                name: "D-1",
                period: 3048
            },
            Ds1: {
                name: "D#1",
                period: 2880
            },
            E1: {
                name: "E-1",
                period: 2712
            },
            F1: {
                name: "F-1",
                period: 2560
            },
            Fs1: {
                name: "F#1",
                period: 2416
            },
            G1: {
                name: "G-1",
                period: 2280
            },
            Gs1: {
                name: "G#1",
                period: 2152
            },
            A1: {
                name: "A-1",
                period: 2032
            },
            As1: {
                name: "A#1",
                period: 1920
            },
            B1: {
                name: "B-1",
                period: 1812
            },
            C2: {
                name: "C-2",
                period: 1712
            },
            Cs2: {
                name: "C#2",
                period: 1616
            },
            D2: {
                name: "D-2",
                period: 1524
            },
            Ds2: {
                name: "D#2",
                period: 1440
            },
            E2: {
                name: "E-2",
                period: 1356
            },
            F2: {
                name: "F-2",
                period: 1280
            },
            Fs2: {
                name: "F#2",
                period: 1208
            },
            G2: {
                name: "G-2",
                period: 1140
            },
            Gs2: {
                name: "G#2",
                period: 1076
            },
            A2: {
                name: "A-2",
                period: 1016
            },
            As2: {
                name: "A#2",
                period: 960
            },
            B2: {
                name: "B-2",
                period: 906
            },
            C3: {
                name: "C-3",
                period: 856
            },
            Cs3: {
                name: "C#3",
                period: 808
            },
            D3: {
                name: "D-3",
                period: 762
            },
            Ds3: {
                name: "D#3",
                period: 720
            },
            E3: {
                name: "E-3",
                period: 678
            },
            F3: {
                name: "F-3",
                period: 640
            },
            Fs3: {
                name: "F#3",
                period: 604
            },
            G3: {
                name: "G-3",
                period: 570
            },
            Gs3: {
                name: "G#3",
                period: 538
            },
            A3: {
                name: "A-3",
                period: 508
            },
            As3: {
                name: "A#3",
                period: 480
            },
            B3: {
                name: "B-3",
                period: 453
            },
            C4: {
                name: "C-4",
                period: 428
            },
            Cs4: {
                name: "C#4",
                period: 404
            },
            D4: {
                name: "D-4",
                period: 381
            },
            Ds4: {
                name: "D#4",
                period: 360
            },
            E4: {
                name: "E-4",
                period: 339
            },
            F4: {
                name: "F-4",
                period: 320
            },
            Fs4: {
                name: "F#4",
                period: 302
            },
            G4: {
                name: "G-4",
                period: 285
            },
            Gs4: {
                name: "G#4",
                period: 269
            },
            A4: {
                name: "A-4",
                period: 254
            },
            As4: {
                name: "A#4",
                period: 240
            },
            B4: {
                name: "B-4",
                period: 226.5,
                modPeriod: 226
            },
            C5: {
                name: "C-5",
                period: 214
            },
            Cs5: {
                name: "C#5",
                period: 202
            },
            D5: {
                name: "D-5",
                period: 190.5,
                modPeriod: 190
            },
            Ds5: {
                name: "D#5",
                period: 180
            },
            E5: {
                name: "E-5",
                period: 169.5,
                modPeriod: 170
            },
            F5: {
                name: "F-5",
                period: 160
            },
            Fs5: {
                name: "F#5",
                period: 151
            },
            G5: {
                name: "G-5",
                period: 142.5,
                modPeriod: 143
            },
            Gs5: {
                name: "G#5",
                period: 134.5,
                modPeriod: 135
            },
            A5: {
                name: "A-5",
                period: 127
            },
            As5: {
                name: "A#5",
                period: 120
            },
            B5: {
                name: "B-5",
                period: 113.25,
                modPeriod: 113
            },
            C6: {
                name: "C-6",
                period: 107
            },
            Cs6: {
                name: "C#6",
                period: 101
            },
            D6: {
                name: "D-6",
                period: 95.25,
                modPeriod: 95
            },
            Ds6: {
                name: "D#6",
                period: 90
            },
            E6: {
                name: "E-6",
                period: 84.75,
                modPeriod: 85
            },
            F6: {
                name: "F-6",
                period: 80
            },
            Fs6: {
                name: "F#6",
                period: 75.5,
                modPeriod: 75
            },
            G6: {
                name: "G-6",
                period: 71.25,
                modPeriod: 71
            },
            Gs6: {
                name: "G#6",
                period: 67.25,
                modPeriod: 67
            },
            A6: {
                name: "A-6",
                period: 63.5,
                modPeriod: 63
            },
            As6: {
                name: "A#6",
                period: 60
            },
            B6: {
                name: "B-6",
                period: 56.625,
                modPeriod: 56
            },
            C7: {
                name: "C-7",
                period: 53.5,
                modPeriod: 53
            },
            Cs7: {
                name: "C#7",
                period: 50.5,
                modPeriod: 50
            },
            D7: {
                name: "D-7",
                period: 47.625,
                modPeriod: 47
            },
            Ds7: {
                name: "D#7",
                period: 45
            },
            E7: {
                name: "E-7",
                period: 42.375,
                modPeriod: 42
            },
            F7: {
                name: "F-7",
                period: 40
            },
            Fs7: {
                name: "F#7",
                period: 37.75,
                modPeriod: 37
            },
            G7: {
                name: "G-7",
                period: 35.625,
                modPeriod: 35
            },
            Gs7: {
                name: "G#7",
                period: 33.625,
                modPeriod: 33
            },
            A7: {
                name: "A-7",
                period: 31.75,
                modPeriod: 31
            },
            As7: {
                name: "A#7",
                period: 30
            },
            B7: {
                name: "B-7",
                period: 28.3125,
                modPeriod: 28
            },
            C8: {
                name: "C-8",
                period: 26.75
            },
            Cs8: {
                name: "C#8",
                period: 25.25
            },
            D8: {
                name: "D-8",
                period: 23.8125
            },
            Ds8: {
                name: "D#8",
                period: 22.5
            },
            E8: {
                name: "E-8",
                period: 21.1875
            },
            F8: {
                name: "F-8",
                period: 20
            },
            Fs8: {
                name: "F#8",
                period: 18.875
            },
            G8: {
                name: "G-8",
                period: 17.8125
            },
            Gs8: {
                name: "G#8",
                period: 16.8125
            },
            A8: {
                name: "A-8",
                period: 15.875
            },
            As8: {
                name: "A#8",
                period: 15
            },
            B8: {
                name: "B-8",
                period: 14.15625
            },
            C9: {
                name: "C-9",
                period: 13.375
            },
            Cs9: {
                name: "C#9",
                period: 12.625
            },
            D9: {
                name: "D-9",
                period: 11.90625
            },
            Ds9: {
                name: "D#9",
                period: 11.25
            },
            E9: {
                name: "E-9",
                period: 10.59375
            },
            F9: {
                name: "F-9",
                period: 10
            },
            Fs9: {
                name: "F#9",
                period: 9.4375
            },
            G9: {
                name: "G-9",
                period: 8.90625
            },
            Gs9: {
                name: "G#9",
                period: 8.40625
            },
            A9: {
                name: "A-9",
                period: 7.9375
            },
            As9: {
                name: "A#9",
                period: 7.5
            },
            B9: {
                name: "B-9",
                period: 7.078125
            },
            C10: {
                name: "C-10",
                period: 6.6875
            },
            Cs10: {
                name: "C#10",
                period: 6.3125
            },
            D10: {
                name: "D-10",
                period: 5.953125
            },
            Ds10: {
                name: "D#10",
                period: 5.625
            },
            E10: {
                name: "E-10",
                period: 5.296875
            },
            F10: {
                name: "F-10",
                period: 5
            },
            Fs10: {
                name: "F#10",
                period: 4.71875
            },
            G10: {
                name: "G-10",
                period: 4.453125
            },
            Gs10: {
                name: "G#10",
                period: 4.203125
            },
            A10: {
                name: "A-10",
                period: 3.96875
            },
            As10: {
                name: "A#10",
                period: 3.75
            },
            B10: {
                name: "B-10",
                period: 3.5390625
            },
            C11: {
                name: "C-11",
                period: 3.34375
            },
            Cs11: {
                name: "C#11",
                period: 3.15625
            },
            D11: {
                name: "D-11",
                period: 2.9765625
            },
            Ds11: {
                name: "D#11",
                period: 2.8125
            },
            E11: {
                name: "E-11",
                period: 2.6484375
            },
            F11: {
                name: "F-11",
                period: 2.5
            },
            Fs11: {
                name: "F#11",
                period: 2.359375
            },
            G11: {
                name: "G-11",
                period: 2.2265625
            },
            Gs11: {
                name: "G#11",
                period: 2.1015625
            },
            A11: {
                name: "A-11",
                period: 1.984375
            },
            As11: {
                name: "A#11",
                period: 1.875
            },
            B11: {
                name: "B-11",
                period: 1.76953125
            },
            OFF: {
                name: "OFF",
                period: 0
            }
        },
        H = 145,
        I = {
            OFF: 0,
            C: 1,
            Csharp: 2,
            D: 3,
            Dsharp: 4,
            E: 5,
            F: 6,
            Fsharp: 7,
            G: 8,
            Gsharp: 9,
            A: 10,
            Asharp: 11,
            B: 12,
            COctaveUp: 13,
            CsharpOctaveUp: 14,
            DOctaveUp: 15,
            DsharpOctaveUp: 16,
            EOctaveUp: 17,
            FOctaveUp: 18,
            FsharpOctaveUp: 19,
            GOctaveUp: 20,
            GsharpOctaveUp: 21,
            AOctaveUp: 22,
            AsharpOctaveUp: 23,
            BOctaveUp: 24,
            COctaveUp2: 25,
            CsharpOctaveUp2: 26,
            DOctaveUp2: 27
        },
        J = {
            0: {
                name: "OFF"
            },
            1: {
                name: "C"
            },
            2: {
                name: "Cs"
            },
            3: {
                name: "D"
            },
            4: {
                name: "Ds"
            },
            5: {
                name: "E"
            },
            6: {
                name: "F"
            },
            7: {
                name: "Fs"
            },
            8: {
                name: "G"
            },
            9: {
                name: "Gs"
            },
            10: {
                name: "A"
            },
            11: {
                name: "As"
            },
            12: {
                name: "B"
            }
        },
        K = {
            azerty: {
                a: I.COctaveUp,
                z: I.DOctaveUp,
                e: I.EOctaveUp,
                r: I.FOctaveUp,
                t: I.GOctaveUp,
                y: I.AOctaveUp,
                u: I.BOctaveUp,
                i: I.COctaveUp2,
                o: I.DOctaveUp2,
                "é": I.CsharpOctaveUp,
                '"': I.DsharpOctaveUp,
                "(": I.FsharpOctaveUp,
                "§": I.GsharpOctaveUp,
                "è": I.AsharpOctaveUp,
                "ç": I.CsharpOctaveUp2,
                w: I.C,
                x: I.D,
                c: I.E,
                v: I.F,
                b: I.G,
                n: I.A,
                ",": I.B,
                ";": I.COctaveUp,
                ":": I.DOctaveUp,
                s: I.Csharp,
                d: I.Dsharp,
                g: I.Fsharp,
                h: I.Gsharp,
                j: I.Asharp,
                "<": I.OFF
            },
            dvorak: {
                "'": I.COctaveUp,
                ",": I.DOctaveUp,
                ".": I.EOctaveUp,
                p: I.FOctaveUp,
                y: I.GOctaveUp,
                f: I.AOctaveUp,
                g: I.BOctaveUp,
                c: I.COctaveUp2,
                r: I.DOctaveUp2,
                2: I.CsharpOctaveUp,
                3: I.DsharpOctaveUp,
                5: I.FsharpOctaveUp,
                6: I.GsharpOctaveUp,
                7: I.AsharpOctaveUp,
                9: I.CsharpOctaveUp2,
                ";": I.C,
                q: I.D,
                j: I.E,
                k: I.F,
                x: I.G,
                b: I.A,
                m: I.B,
                w: I.COctaveUp,
                v: I.DOctaveUp,
                o: I.Csharp,
                e: I.Dsharp,
                i: I.Fsharp,
                d: I.Gsharp,
                h: I.Asharp,
                n: I.CsharpOctaveUp,
                "\\": I.OFF
            },
            qwerty: {
                q: I.COctaveUp,
                w: I.DOctaveUp,
                e: I.EOctaveUp,
                r: I.FOctaveUp,
                t: I.GOctaveUp,
                y: I.AOctaveUp,
                u: I.BOctaveUp,
                i: I.COctaveUp2,
                o: I.DOctaveUp2,
                2: I.CsharpOctaveUp,
                3: I.DsharpOctaveUp,
                5: I.FsharpOctaveUp,
                6: I.GsharpOctaveUp,
                7: I.AsharpOctaveUp,
                9: I.CsharpOctaveUp2,
                z: I.C,
                x: I.D,
                c: I.E,
                v: I.F,
                b: I.G,
                n: I.A,
                m: I.B,
                ",": I.COctaveUp,
                ".": I.DOctaveUp,
                s: I.Csharp,
                d: I.Dsharp,
                g: I.Fsharp,
                h: I.Gsharp,
                j: I.Asharp,
                "\\": I.OFF
            },
            qwertz: {
                q: I.COctaveUp,
                w: I.DOctaveUp,
                e: I.EOctaveUp,
                r: I.FOctaveUp,
                t: I.GOctaveUp,
                z: I.AOctaveUp,
                u: I.BOctaveUp,
                i: I.COctaveUp2,
                o: I.DOctaveUp2,
                2: I.CsharpOctaveUp,
                3: I.DsharpOctaveUp,
                5: I.FsharpOctaveUp,
                6: I.GsharpOctaveUp,
                7: I.AsharpOctaveUp,
                9: I.CsharpOctaveUp2,
                y: I.C,
                x: I.D,
                c: I.E,
                v: I.F,
                b: I.G,
                n: I.A,
                m: I.B,
                ",": I.COctaveUp,
                ".": I.DOctaveUp,
                s: I.Csharp,
                d: I.Dsharp,
                g: I.Fsharp,
                h: I.Gsharp,
                j: I.Asharp,
                "\\": I.OFF
            }
        },
        L = {
            PROTRACKER: 1,
            FASTTRACKER: 2
        },
        M = {
            unrollLoops: !1,
            unrollShortLoops: !1,
            sustainKeyboardNotes: !1,
            useHover: !0,
            keyboardTable: "qwerty",
            vubars: !0,
            stereoSeparation: y.BALANCED,
            emulateProtracker1OffsetBug: !0
        },
        N = function() {
            var a = {},
                b = {};
            return b.on = function(b, c) {
                var d = a[b];
                d || (d = [], a[b] = d), d.push(c)
            }, b.trigger = function(b, c) {
                var d = a[b];
                if (d) {
                    var e, f = d.length;
                    for (e = 0; e < f; e++) d[e](c, b)
                }
            }, b
        }(),
        O = function() {
            function a(a) {
                e = a.createGain(), e.gain.setValueAtTime(1, 0), e.connect(a.destination), d = a.createGain(), d.connect(e), b.setMasterVolume(1), f = a.createBiquadFilter(), f.type = "lowpass", f.frequency.setValueAtTime(2e4, 0), f.connect(d), b.masterVolume = d, b.cutOffVolume = e, b.lowPassfilter = f
            }
            var b = {};
            window.AudioContext = window.AudioContext || window.webkitAudioContext, window.OfflineAudioContext = window.OfflineAudioContext || window.webkitOfflineAudioContext;
            var c, d, e, f, g, h, i, j, k, l, m = [],
                n = [],
                o = y.BALANCED,
                p = 0,
                q = [
                    [],
                    [],
                    []
                ],
                r = 0,
                t = 4143.569,
                u = {
                    volume: !0,
                    panning: !0,
                    high: !0,
                    mid: !0,
                    low: !0,
                    lowPass: !0,
                    reverb: !0,
                    distortion: !1
                },
                v = !1;
            return AudioContext && (c = new AudioContext), b.init = function(d) {
                function e() {
                    var a = FilterChain(u);
                    a.output().connect(f), m.push(a)
                }
                if (d = d || c) {
                    k = !!O.context.createStereoPanner, l = "undefined" != typeof R, a(d);
                    var h = da.getTrackCount();
                    for (m = [], g = 0; g < h; g++) e();
                    b.filterChains = m, b.usePanning = k, v || (N.on(s.trackStateChange, function(a) {
                        "undefined" != typeof a.track && m[a.track] && m[a.track].volumeValue(a.mute ? 0 : 70)
                    }), N.on(s.trackCountChange, function(a) {
                        for (g = m.length; g < a; g++) e();
                        N.trigger(s.filterChainCountChange, a), b.setStereoSeparation(o)
                    }), N.on(s.trackerModeChanged, function(a) {
                        b.setStereoSeparation()
                    }))
                }
            }, b.enable = function() {
                e.gain.setValueAtTime(1, 0), b.cutOff = !1
            }, b.disable = function() {
                e.gain.setValueAtTime(0, 0), b.cutOff = !0;
                var a = 0;
                q.forEach(function(b, c) {
                    a += b.length, b.forEach(function(a) {
                        a.gain.cancelScheduledValues(0), a.gain.setValueAtTime(0, 0)
                    }), q[c] = []
                })
            }, b.checkState = function() {
                c && "suspended" === c.state && c.resume && c.resume()
            }, b.playSample = function(a, d, e, f, h, i, n) {
                var o;
                v ? o = j : (o = c, b.enable()), d = d || 428, f = f || (l ? R.getCurrentTrack() : 0), i = i || c.currentTime, n === H && (e = 0);
                var p, u, w, x = da.getInstrument(a),
                    y = d,
                    z = 0;
                if (x) {
                    var A, B = 0,
                        C = 0;
                    e = "undefined" == typeof e ? 100 * x.sample.volume / 64 : e, z = (x.sample.panning || 0) / 128;
                    var D;
                    da.inFTMode() ? da.useLinearFrequency ? d -= x.getFineTune() / 2 : x.getFineTune() && (d = b.getFineTuneForNote(n, x.getFineTune())) : x.getFineTune() && (d = b.getFineTuneForPeriod(d, x.getFineTune())), D = b.getSampleRateForPeriod(d);
                    var E = 1;
                    x.sample.data.length ? (C = x.sample.data.length, h && h.offset && (h.offset.value >= C && (h.offset.value = C - 1), B = h.offset.value / o.sampleRate), A = o.createBuffer(1, C, o.sampleRate), E = D / o.sampleRate) : (A = o.createBuffer(1, 1, o.sampleRate), B = 0);
                    var F = A.getChannelData(0);
                    for (g = 0; g < C; g++) F[g] = x.sample.data[g];
                    t = D;
                    var G = o.createBufferSource();
                    G.buffer = A;
                    var I = o.createGain();
                    if (I.gain.value = e / 100, I.gain.setValueAtTime(e / 100, i), x.sample.loop.enabled && x.sample.loop.length > 2 && (M.unrollLoops || (G.loop = !0, G.loopStart = x.sample.loop.start / o.sampleRate, G.loopEnd = (x.sample.loop.start + x.sample.loop.length) / o.sampleRate)), x.volumeEnvelope.enabled || x.panningEnvelope.enabled || x.hasVibrato()) {
                        var J = x.noteOn(i),
                            K = G;
                        J.volume && (p = J.volume, G.connect(p), K = p), J.panning && (u = J.panning, K.connect(u), K = u), w = J.scheduled, K.connect(I)
                    } else G.connect(I);
                    var L = O.context.createGain();
                    if (L.gain.setValueAtTime(0, i), L.gain.linearRampToValueAtTime(1, i + .01), I.connect(L), k) {
                        var P = O.context.createStereoPanner();
                        P.pan.setValueAtTime(z, i), L.connect(P), P.connect(m[f].input())
                    } else L.connect(m[f].input());
                    G.playbackRate.value = E;
                    var Q = 0,
                        S = i + Q;
                    G.start(S, B);
                    var T = {
                        source: G,
                        volume: I,
                        panning: P,
                        volumeEnvelope: p,
                        panningEnvelope: u,
                        volumeFadeOut: L,
                        startVolume: e,
                        currentVolume: e,
                        startPeriod: d,
                        basePeriod: y,
                        noteIndex: n,
                        startPlaybackRate: E,
                        sampleRate: D,
                        instrumentIndex: a,
                        effects: h,
                        track: f,
                        time: i,
                        scheduled: w
                    };
                    return q[r].push(I), v || N.trigger(s.samplePlay, T), T
                }
                return {}
            }, b.playSilence = function() {
                if (c) {
                    var a = c.createBufferSource();
                    a.connect(d), a.start()
                }
            }, b.playRaw = function(a, b) {
                if (c && a && a.length) {
                    var e;
                    e = c.createBuffer(1, a.length, c.sampleRate);
                    var f = b / audioContext.sampleRate,
                        g = c.createBufferSource();
                    g.buffer = e, g.loop = !0, g.playbackRate.value = f, g.connect(d), g.start()
                }
            }, b.isRecording = function() {
                return h
            }, b.startRecording = function() {
                if (!h && c && c.createMediaStreamDestination) {
                    var a = c.createMediaStreamDestination();
                    i = new MediaRecorder(a.stream), i.ondataavailable = function(a) {
                        n.push(a.data)
                    }, i.onstop = function(a) {
                        var b = new Blob(n, {
                            type: "audio/ogg; codecs=opus"
                        });
                        P(b, "recording.opus")
                    }, d.connect(a), i.start(), h = !0
                }
            }, b.stopRecording = function() {
                h && (h = !1, i.stop())
            }, b.startRendering = function(a) {
                v = !0, j = new OfflineAudioContext(2, 44100 * a, 44100), b.context = j, b.init(j)
            }, b.stopRendering = function(d) {
                v = !1, j.startRendering().then(function(a) {
                    d && d(a)
                }).catch(function(a) {}), b.context = c, a(c), b.init(c)
            }, b.setStereoSeparation = function(a) {
                var b, c = da.getTrackCount();
                if (da.inFTMode()) b = 0;
                else switch (a = a || o, o = a, a) {
                    case y.NONE:
                        b = 0, M.stereoSeparation = y.NONE;
                        break;
                    case y.FULL:
                        b = 1, M.stereoSeparation = y.FULL;
                        break;
                    default:
                        b = .5, M.stereoSeparation = y.BALANCED
                }
                for (g = 0; g < c; g++) {
                    var d = m[g];
                    d && d.panningValue(g % 2 == 0 ? -b : b)
                }
            }, b.getPrevSampleRate = function() {
                return t
            }, b.context = c, b.getSemiToneFrom = function(a, c, d) {
                var e = a;
                if (d && (a = b.getFineTuneBasePeriod(a, d), a || (a = e)), c) {
                    var f = Z[a];
                    if (f) {
                        var g = aa.indexOf(f.name),
                            h = aa[g + c];
                        if (h) {
                            var i = _[h];
                            i && (e = i.period, d && (e = b.getFineTuneForPeriod(e, d)))
                        }
                    }
                }
                return e
            }, b.getNearestSemiTone = function(a, b) {
                var c = 8;
                if (b) {
                    var d = da.getInstrument(b);
                    d && d.sample.finetune && (c += d.sample.finetune)
                }
                var e = 1e5,
                    f = a;
                for (var g in F)
                    if (F.hasOwnProperty(g)) {
                        var h = F[g].tune[c],
                            i = Math.abs(h - a);
                        i < e && (e = i, f = h)
                    } return f
            }, b.getFineTuneForPeriod = function(a, b) {
                var c = a,
                    d = Z[a];
                if (d && d.tune) {
                    var e = 8 + b;
                    e >= 0 && e < d.tune.length && (c = d.tune[e])
                }
                return c
            }, b.getFineTuneForNote = function(a, b) {
                if (a === H) return 1;
                var c = ba[a],
                    d = b > 0 ? ba[a + 1] : ba[a - 1];
                if (c && d) {
                    var e = Math.abs(d.period - c.period) / 127;
                    return c.period - e * b
                }
                return c ? c.period : 1e5
            }, b.getFineTuneBasePeriod = function(a, b) {
                var c = a,
                    d = $[b];
                return d && (c = d[a]), c
            }, b.getSampleRateForPeriod = function(a) {
                return da.inFTMode() ? da.useLinearFrequency ? 8363 * Math.pow(2, (4608 - a) / 768) : E / a : D / a
            }, b.limitAmigaPeriod = function(a) {
                return a = Math.max(a, 113), a = Math.min(a, 856)
            }, b.setAmigaLowPassFilter = function(a, b) {
                var c = a ? 2e3 : 2e4;
                f.frequency.setValueAtTime(c, b)
            }, b.setMasterVolume = function(a, b) {
                b = b || c.currentTime, a *= .7, d.gain.setValueAtTime(p, b), d.gain.linearRampToValueAtTime(a, b + .02), p = a
            }, b.slideMasterVolume = function(a, b) {
                b = b || c.currentTime, a *= .7, d.gain.linearRampToValueAtTime(a, b), p = a
            }, b.getLastMasterVolume = function() {
                return p / .7
            }, b.clearScheduledNotesCache = function() {
                r++, r > 2 && (r = 0), q[r] = []
            }, b.waveFormFunction = {
                sine: function(a, b, c, d) {
                    return a + Math.sin(b * c) * d * 2
                },
                saw: function(a, b, c, d) {
                    var e = 1 - Math.abs(b * c / 7 % 1);
                    return e = 2 * e - 1, e = e * d * -2, a + e
                },
                square: function(a, b, c, d) {
                    var e = Math.sin(b * c) <= 0 ? -1 : 1;
                    return e = e * d * 2, a + e
                },
                sawInverse: function(a, b, c, d) {
                    var e = Math.abs(b * c / 7 % 1);
                    return e = 2 * e - 1, e = e * d * -2, a + e
                }
            }, b
        }();
    ! function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b() : a[a.__dropbox_export || "dropboxService"] = b()
    }(this, function() {
        "use strict";

        function a(a, b) {
            return "[object Function]" == e.call(a)
        }

        function b(a, b) {
            return "[object String]" == e.call(a)
        }

        function c(a, b) {
            return "[object Object]" == e.call(a)
        }

        function d() {
            return window.location.hash.replace(/^#/, "").split("&").reduce(function(a, b) {
                return "" == b ? a : (b = b.split("="), a[decodeURIComponent(b[0])] = decodeURIComponent(b[1]), a)
            }, {})
        }
        var e = {}.toString,
            f = "https://api.dropboxapi.com/2/",
            g = "https://content.dropboxapi.com/2/",
            h = function(a, b) {
                return arguments.length > 1 ? localStorage[a] = b : localStorage[a]
            },
            i = void 0,
            j = {
                "auth/token/revoke": {
                    contentType: null
                },
                "users/get_current_account": {
                    contentType: "application/json"
                },
                "files/upload": {
                    baseUri: g,
                    format: "content-upload"
                },
                "files/get_thumbnail": {
                    baseUri: g,
                    format: "content-download"
                },
                "files/download": {
                    baseUri: g,
                    format: "content-download"
                },
                "files/get_preview": {
                    baseUri: g,
                    format: "content-download"
                },
                "files/upload_session/append": {
                    baseUri: g,
                    format: "content-upload"
                },
                "files/upload_session/append_v2": {
                    baseUri: g,
                    format: "content-upload"
                },
                "files/upload_session/finish": {
                    baseUri: g,
                    format: "content-upload"
                },
                "files/upload_session/start": {
                    baseUri: g,
                    format: "content-upload"
                },
                "files/get_shared_link_file": {
                    baseUri: g,
                    format: "content-download"
                }
            },
            k = {
                rpc: "application/json",
                "content-upload": "application/octet-stream"
            },
            l = function(b, d) {
                var e = [].slice.call(arguments),
                    g = j[b] || {},
                    l = g.baseUri || f,
                    m = g.format || "rpc",
                    n = g.contentType || null === g.contentType ? null : k[m],
                    o = e[e.length - 1],
                    p = e.length > 2 && (c(o) || a(o)) ? o : {};
                a(p) && (p = {
                    onComplete: p
                });
                var q, r = {};
                Promise && (q = new Promise(function(a, b) {
                    r.resolve = a, r.reject = b
                }));
                var s = new XMLHttpRequest;
                s.open("POST", l + b, !0), s.setRequestHeader("Authorization", "Bearer " + (h("__dbat") || "000000000000000000000000_00000-000000000000000000000000000000000")), "content-download" == m && (s.responseType = "blob"), d && d.responseType && (s.responseType = d.responseType, delete d.responseType), n && s.setRequestHeader("Content-Type", n), !d || "content-upload" != m && "content-download" != m || s.setRequestHeader("Dropbox-API-Arg", JSON.stringify(d)), p.onDownloadProgress && s.addEventListener("progress", p.onDownloadProgress), p.onUploadProgress && s.upload && s.upload.addEventListener("progress", p.onUploadProgress), (p.onError || i) && s.addEventListener("error", function(a) {
                    var b = p.onError && p.onError(a.target);
                    q && r.reject && r.reject(a.target), i && i(a.target, b)
                }), s.onreadystatechange = function() {
                    if (4 == s.readyState)
                        if (200 == s.status) {
                            var a = JSON.parse(s.getResponseHeader("dropbox-api-result") || s.responseText);
                            "auth/token/revoke" == b && h("__dbat", ""), p.onComplete && p.onComplete(a, s.response, s), q && r.resolve && r.resolve(a, s.response, s)
                        } else {
                            var c = p.onError && p.onError(s);
                            q && r.reject && r.reject(s), i && i(s, c)
                        }
                };
                var t = e.length > 2 && "content-upload" == m ? e[2] : void 0;
                return t = t || (d && "rpc" == m ? JSON.stringify(d) : null), t ? s.send(t) : s.send(), q
            };
        return l.setGlobalErrorHandler = function(a) {
            i = a
        }, l.setTokenStore = function(a) {
            h = a
        }, l.authenticate = function(c, e) {
            e = e || {}, a(e) && (e = {
                onComplete: e
            }), c = c || {}, b(c) && (c = {
                client_id: c
            }), c.redirect_uri = c.redirect_uri || window.location.href;
            var f, g = {};
            if (Promise && (f = new Promise(function(a, b) {
                    g.resolve = a, g.reject = b
                })), h("__dbat")) return e.onComplete(), f && f.resolve && f.resolve(), f;
            var j = d(),
                k = h("__dbcsrf");
            if (j.state && k && j.state == k)
                if (j.access_token) h("__dbat", j.access_token), h("__dbcsrf", ""), window.location.replace(window.location.href.replace(/#.*/, ""));
                else {
                    var l = e.onError && e.onError(j);
                    f && f.reject && f.reject(j), i && i(j, l)
                }
            else k = "" + Math.floor(1e5 * Math.random()), h("__dbcsrf", k), window.location = "https://www.dropbox.com/1/oauth2/authorize?response_type=token&client_id=" + encodeURIComponent(c.client_id) + "&redirect_uri=" + encodeURIComponent(c.redirect_uri) + "&state=" + encodeURIComponent(k);
            return f
        }, l.getAccessToken = function() {
            return h("__dbat")
        }, l.clearAccessToken = function() {
            return h("__dbat", "")
        }, l
    });
    var P = P || function(a) {
        "use strict";
        if (!("undefined" == typeof a || "undefined" != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
            var b = a.document,
                c = function() {
                    return a.URL || a.webkitURL || a
                },
                d = b.createElementNS("http://www.w3.org/1999/xhtml", "a"),
                e = "download" in d,
                f = function(a) {
                    var b = new MouseEvent("click");
                    a.dispatchEvent(b)
                },
                g = /constructor/i.test(a.HTMLElement) || a.safari,
                h = /CriOS\/[\d]+/.test(navigator.userAgent),
                i = function(b) {
                    (a.setImmediate || a.setTimeout)(function() {
                        throw b
                    }, 0)
                },
                j = "application/octet-stream",
                k = 4e4,
                l = function(a) {
                    var b = function() {
                        "string" == typeof a ? c().revokeObjectURL(a) : a.remove()
                    };
                    setTimeout(b, k)
                },
                m = function(a, b, c) {
                    b = [].concat(b);
                    for (var d = b.length; d--;) {
                        var e = a["on" + b[d]];
                        if ("function" == typeof e) try {
                            e.call(a, c || a)
                        } catch (a) {
                            i(a)
                        }
                    }
                },
                n = function(a) {
                    return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob([String.fromCharCode(65279), a], {
                        type: a.type
                    }) : a
                },
                o = function(b, i, k) {
                    k || (b = n(b));
                    var o, p = this,
                        q = b.type,
                        r = q === j,
                        s = function() {
                            m(p, "writestart progress write writeend".split(" "))
                        },
                        t = function() {
                            if ((h || r && g) && a.FileReader) {
                                var d = new FileReader;
                                return d.onloadend = function() {
                                    var b = h ? d.result : d.result.replace(/^data:[^;]*;/, "data:attachment/file;"),
                                        c = a.open(b, "_blank");
                                    c || (a.location.href = b), b = void 0, p.readyState = p.DONE, s()
                                }, d.readAsDataURL(b), void(p.readyState = p.INIT)
                            }
                            if (o || (o = c().createObjectURL(b)), r) a.location.href = o;
                            else {
                                var e = a.open(o, "_blank");
                                e || (a.location.href = o)
                            }
                            p.readyState = p.DONE, s(), l(o)
                        };
                    return p.readyState = p.INIT, e ? (o = c().createObjectURL(b), void setTimeout(function() {
                        d.href = o, d.download = i, f(d), s(), l(o), p.readyState = p.DONE
                    })) : void t()
                },
                p = o.prototype,
                q = function(a, b, c) {
                    return new o(a, b || a.name || "download", c)
                };
            return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function(a, b, c) {
                return b = b || a.name || "download", c || (a = n(a)), navigator.msSaveOrOpenBlob(a, b)
            } : (p.abort = function() {}, p.readyState = p.INIT = 0, p.WRITING = 1, p.DONE = 2, p.error = p.onwritestart = p.onprogress = p.onwrite = p.onabort = p.onerror = p.onwriteend = null, q)
        }
    }("undefined" != typeof self && self || "undefined" != typeof window && window || this.content);
    "undefined" != typeof module && module.exports ? module.exports.saveAs = P : "undefined" != typeof define && null !== define && null !== define.amd && define("FileSaver.js", function() {
            return P
        }),
        function(a, b, c) {
            function d(c, f) {
                if (!b[c]) {
                    if (!a[c]) {
                        var g = "function" == typeof require && require;
                        if (!f && g) return g(c, !0);
                        if (e) return e(c, !0);
                        throw new Error("Cannot find module '" + c + "'")
                    }
                    var h = b[c] = {
                        exports: {}
                    };
                    a[c][0].call(h.exports, function(b) {
                        var e = a[c][1][b];
                        return d(e ? e : b)
                    }, h, h.exports)
                }
                return b[c].exports
            }
            for (var e = "function" == typeof require && require, f = 0; f < c.length; f++) d(c[f]);
            return d
        }({
            1: [function(a, b, c) {
                var d = a("./lib/WAAClock");
                b.exports = d, "undefined" != typeof window && (window.WAAClock = d)
            }, {
                "./lib/WAAClock": 2
            }],
            3: [function(a, b, c) {
                var d = b.exports = {};
                d.nextTick = function() {
                    var a = "undefined" != typeof window && window.setImmediate,
                        b = "undefined" != typeof window && window.postMessage && window.addEventListener;
                    if (a) return function(a) {
                        return window.setImmediate(a)
                    };
                    if (b) {
                        var c = [];
                        return window.addEventListener("message", function(a) {
                                var b = a.source;
                                if ((b === window || null === b) && "process-tick" === a.data && (a.stopPropagation(), c.length > 0)) {
                                    var d = c.shift();
                                    d()
                                }
                            }, !0),
                            function(a) {
                                c.push(a), window.postMessage("process-tick", "*")
                            }
                    }
                    return function(a) {
                        setTimeout(a, 0)
                    }
                }(), d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.binding = function(a) {
                    throw new Error("process.binding is not supported")
                }, d.cwd = function() {
                    return "/"
                }, d.chdir = function(a) {
                    throw new Error("process.chdir is not supported")
                }
            }, {}],
            2: [function(a, b, c) {
                var d = a("__browserify_process"),
                    e = "undefined" != typeof window;
                if (e && !AudioContext) throw new Error("This browser doesn't seem to support web audio API");
                var f = {
                        toleranceLate: .1,
                        toleranceEarly: .001
                    },
                    g = function(a, b, c) {
                        this.clock = a, this.func = c, this.repeatTime = null, this.toleranceLate = f.toleranceLate, this.toleranceEarly = f.toleranceEarly, this._armed = !1, this._latestTime = null, this._earliestTime = null, this.schedule(b)
                    };
                g.prototype.clear = function() {
                    return this.clock._removeEvent(this), this
                }, g.prototype.repeat = function(a) {
                    if (0 === a) throw new Error("delay cannot be 0");
                    return this.repeatTime = a, this
                }, g.prototype.tolerance = function(a) {
                    return "number" == typeof a.late && (this.toleranceLate = a.late), "number" == typeof a.early && (this.toleranceEarly = a.early), this._update(), this
                }, g.prototype.isRepeated = function() {
                    return null !== this.repeatTime
                }, g.prototype.schedule = function(a) {
                    this._armed = !0, this.deadline = a, this._update(), this.clock.context.currentTime >= this._earliestTime && (this.clock._removeEvent(this), this._execute())
                }, g.prototype._execute = function() {
                    this._armed = !1, this.clock.context.currentTime < this._latestTime ? this.func(this) : N && N.trigger(s.clockEventExpired), this._armed === !1 && this.isRepeated() && this.schedule(this.deadline + this.repeatTime)
                }, g.prototype._update = function() {
                    this._latestTime = this.deadline + this.toleranceLate, this._earliestTime = this.deadline - this.toleranceEarly, this.clock._removeEvent(this), this.clock._insertEvent(this)
                };
                var h = b.exports = function(a, b) {
                    b = b || {}, this.toleranceEarly = b.toleranceEarly || f.toleranceEarly, this.toleranceLate = b.toleranceLate || f.toleranceLate, this.context = a, this._events = [], this._started = !1
                };
                h.prototype.setTimeout = function(a, b) {
                    return this._createEvent(a, this._absTime(b))
                }, h.prototype.callbackAtTime = function(a, b) {
                    return this._createEvent(a, b)
                }, h.prototype.timeStretch = function(a, b, c) {
                    var d = this,
                        e = d.context.currentTime;
                    return b.forEach(function(b) {
                        b.isRepeated() && b.repeat(b.repeatTime * c);
                        var d = a + c * (b.deadline - a);
                        if (b.isRepeated())
                            for (; e >= d - b.toleranceEarly;) d += b.repeatTime;
                        b.schedule(d)
                    }), b
                }, h.prototype.start = function() {
                    if (this._started === !1) {
                        var a = this;
                        this._started = !0, this._events = [];
                        var b = 256;
                        this._clockNode = this.context.createScriptProcessor(b, 1, 1), this._clockNode.connect(this.context.destination), this._clockNode.onaudioprocess = function() {
                            d.nextTick(function() {
                                a._tick()
                            })
                        }
                    }
                }, h.prototype.stop = function() {
                    this._started === !0 && (this._started = !1, this._clockNode.disconnect())
                }, h.prototype._tick = function() {
                    for (var a = this._events.shift(); a && a._earliestTime <= this.context.currentTime;) a._execute(), a = this._events.shift();
                    a && this._events.unshift(a)
                }, h.prototype._createEvent = function(a, b) {
                    var c = new g(this, b, a);
                    return c.tolerance({
                        late: this.toleranceLate,
                        early: this.toleranceEarly
                    }), c
                }, h.prototype._insertEvent = function(a) {
                    this._events.splice(this._indexByTime(a._earliestTime), 0, a)
                }, h.prototype._removeEvent = function(a) {
                    var b = this._events.indexOf(a);
                    b !== -1 && this._events.splice(b, 1)
                }, h.prototype._indexByTime = function(a) {
                    for (var b, c = 0, d = this._events.length; c < d;) b = Math.floor((c + d) / 2), this._events[b]._earliestTime < a ? c = b + 1 : d = b;
                    return c
                }, h.prototype._absTime = function(a) {
                    return a + this.context.currentTime
                }, h.prototype._relTime = function(a) {
                    return a - this.context.currentTime
                }
            }, {
                __browserify_process: 3
            }]
        }, {}, [1]),
        function(a) {
            "use strict";

            function b() {
                this.crc = -1
            }

            function c() {}

            function d(a, b, c) {
                if (b < 0 || c < 0 || b + c > a.size) throw new RangeError("offset:" + b + ", length:" + c + ", size:" + a.size);
                return a.slice ? a.slice(b, b + c) : a.webkitSlice ? a.webkitSlice(b, b + c) : a.mozSlice ? a.mozSlice(b, b + c) : a.msSlice ? a.msSlice(b, b + c) : void 0
            }

            function e(a, b) {
                var c, d;
                return c = new ArrayBuffer(a), d = new Uint8Array(c), b && d.set(b, 0), {
                    buffer: c,
                    array: d,
                    view: new DataView(c)
                }
            }

            function f() {}

            function g(a) {
                function b(b, c) {
                    var f = new Blob([a], {
                        type: R
                    });
                    d = new i(f), d.init(function() {
                        e.size = d.size, b()
                    }, c)
                }

                function c(a, b, c, e) {
                    d.readUint8Array(a, b, c, e)
                }
                var d, e = this;
                e.size = 0, e.init = b, e.readUint8Array = c
            }

            function h(b) {
                function c(a) {
                    for (var c = b.length;
                        "=" == b.charAt(c - 1);) c--;
                    f = b.indexOf(",") + 1, g.size = Math.floor(.75 * (c - f)), a()
                }

                function d(c, d, g) {
                    var h, i = e(d),
                        j = 4 * Math.floor(c / 3),
                        k = 4 * Math.ceil((c + d) / 3),
                        l = a.atob(b.substring(j + f, k + f)),
                        m = c - 3 * Math.floor(j / 4);
                    for (h = m; h < m + d; h++) i.array[h - m] = l.charCodeAt(h);
                    g(i.array)
                }
                var f, g = this;
                g.size = 0, g.init = c, g.readUint8Array = d
            }

            function i(a) {
                function b(b) {
                    e.size = a.size, b()
                }

                function c(b, c, e, f) {
                    var g = new FileReader;
                    g.onload = function(a) {
                        e(new Uint8Array(a.target.result))
                    }, g.onerror = f;
                    try {
                        g.readAsArrayBuffer(d(a, b, c))
                    } catch (a) {
                        f(a)
                    }
                }
                var e = this;
                e.size = 0, e.init = b, e.readUint8Array = c
            }

            function j(a) {
                function b(b, c) {
                    d.size = a.byteLength, b()
                }

                function c(b, c, d, e) {
                    d(new Uint8Array(a.slice(b, b + c)))
                }
                var d = this;
                d.size = 0, d.init = b, d.readUint8Array = c
            }

            function k() {}

            function l(a) {
                function b(a) {
                    e = new Blob([], {
                        type: R
                    }), a()
                }

                function c(a, b) {
                    e = new Blob([e, G ? a : a.buffer], {
                        type: R
                    }), b()
                }

                function d(b, c) {
                    var d = new FileReader;
                    d.onload = function(a) {
                        b(a.target.result)
                    }, d.onerror = c, d.readAsText(e, a)
                }
                var e, f = this;
                f.init = b, f.writeUint8Array = c, f.getData = d
            }

            function m(b) {
                function c(a) {
                    g += "data:" + (b || "") + ";base64,", a()
                }

                function d(b, c) {
                    var d, e = h.length,
                        f = h;
                    for (h = "", d = 0; d < 3 * Math.floor((e + b.length) / 3) - e; d++) f += String.fromCharCode(b[d]);
                    for (; d < b.length; d++) h += String.fromCharCode(b[d]);
                    f.length > 2 ? g += a.btoa(f) : h = f, c()
                }

                function e(b) {
                    b(g + a.btoa(h))
                }
                var f = this,
                    g = "",
                    h = "";
                f.init = c, f.writeUint8Array = d, f.getData = e
            }

            function n(a) {
                function b(b) {
                    e = new Blob([], {
                        type: a
                    }), b()
                }

                function c(b, c) {
                    e = new Blob([e, G ? b : b.buffer], {
                        type: a
                    }), c()
                }

                function d(a) {
                    a(e)
                }
                var e, f = this;
                f.init = b, f.writeUint8Array = c, f.getData = d
            }

            function o() {
                function a(a, b) {
                    d = new Uint8Array, a()
                }

                function b(a, b, c) {
                    var e = new Uint8Array(d.length + a.length);
                    e.set(d), e.set(a, d.length), d = e, b()
                }

                function c(a) {
                    a(d.buffer)
                }
                var d, e = this;
                e.init = a, e.writeUint8Array = b, e.getData = c
            }

            function p(a, b, c, d, e, f, g, h, i, j) {
                function k() {
                    a.removeEventListener("message", l, !1), h(o, p)
                }

                function l(b) {
                    var c = b.data,
                        e = c.data,
                        h = c.error;
                    if (h) return h.toString = function() {
                        return "Error: " + this.message
                    }, void i(h);
                    if (c.sn === r) switch ("number" == typeof c.codecTime && (a.codecTime += c.codecTime), "number" == typeof c.crcTime && (a.crcTime += c.crcTime), c.type) {
                        case "append":
                            e ? (o += e.length, d.writeUint8Array(e, function() {
                                m()
                            }, j)) : m();
                            break;
                        case "flush":
                            p = c.crc, e ? (o += e.length, d.writeUint8Array(e, function() {
                                k()
                            }, j)) : k();
                            break;
                        case "progress":
                            g && g(n + c.loaded, f);
                            break;
                        case "importScripts":
                        case "newTask":
                        case "echo":
                    }
                }

                function m() {
                    n = q * Q, n <= f ? c.readUint8Array(e + n, Math.min(Q, f - n), function(c) {
                        g && g(n, f);
                        var d = 0 === n ? b : {
                            sn: r
                        };
                        d.type = "append", d.data = c;
                        try {
                            a.postMessage(d, [c.buffer])
                        } catch (b) {
                            a.postMessage(d)
                        }
                        q++
                    }, i) : a.postMessage({
                        sn: r,
                        type: "flush"
                    })
                }
                var n, o, p, q = 0,
                    r = b.sn;
                o = 0, a.addEventListener("message", l, !1), m()
            }

            function q(a, c, d, e, f, g, h, i, j, k) {
                function l() {
                    var b;
                    if (m = n * Q, m < f) c.readUint8Array(e + m, Math.min(Q, f - m), function(b) {
                        var c;
                        try {
                            c = a.append(b, function(a) {
                                h && h(m + a, f)
                            })
                        } catch (a) {
                            return void j(a)
                        }
                        c ? (o += c.length, d.writeUint8Array(c, function() {
                            n++, setTimeout(l, 1)
                        }, k), q && r.append(c)) : (n++, setTimeout(l, 1)), p && r.append(b), h && h(m, f)
                    }, j);
                    else {
                        try {
                            b = a.flush()
                        } catch (a) {
                            return void j(a)
                        }
                        b ? (q && r.append(b), o += b.length, d.writeUint8Array(b, function() {
                            i(o, r.get())
                        }, k)) : i(o, r.get())
                    }
                }
                var m, n = 0,
                    o = 0,
                    p = "input" === g,
                    q = "output" === g,
                    r = new b;
                l()
            }

            function r(b, c, d, e, f, g, h, i, j, k, l) {
                var m = h ? "output" : "none";
                if (a.zip.useWebWorkers) {
                    var n = {
                        sn: c,
                        codecClass: "Inflater",
                        crcType: m
                    };
                    p(b, n, d, e, f, g, j, i, k, l)
                } else q(new a.zip.Inflater, d, e, f, g, m, j, i, k, l)
            }

            function s(b, c, d, e, f, g, h, i, j) {
                var k = "input";
                if (a.zip.useWebWorkers) {
                    var l = {
                        sn: c,
                        options: {
                            level: f
                        },
                        codecClass: "Deflater",
                        crcType: k
                    };
                    p(b, l, d, e, 0, d.size, h, g, i, j)
                } else q(new a.zip.Deflater, d, e, 0, d.size, k, h, g, i, j)
            }

            function t(b, d, e, f, g, h, i, j, k, l, m) {
                var n = "input";
                if (a.zip.useWebWorkers && i) {
                    var o = {
                        sn: d,
                        codecClass: "NOOP",
                        crcType: n
                    };
                    p(b, o, e, f, g, h, k, j, l, m)
                } else q(new c, e, f, g, h, n, k, j, l, m)
            }

            function u(a) {
                var b, c, d = "",
                    e = ["Ç", "ü", "é", "â", "ä", "à", "å", "ç", "ê", "ë", "è", "ï", "î", "ì", "Ä", "Å", "É", "æ", "Æ", "ô", "ö", "ò", "û", "ù", "ÿ", "Ö", "Ü", "ø", "£", "Ø", "×", "ƒ", "á", "í", "ó", "ú", "ñ", "Ñ", "ª", "º", "¿", "®", "¬", "½", "¼", "¡", "«", "»", "_", "_", "_", "¦", "¦", "Á", "Â", "À", "©", "¦", "¦", "+", "+", "¢", "¥", "+", "+", "-", "-", "+", "-", "+", "ã", "Ã", "+", "+", "-", "-", "¦", "-", "+", "¤", "ð", "Ð", "Ê", "Ë", "È", "i", "Í", "Î", "Ï", "+", "+", "_", "_", "¦", "Ì", "_", "Ó", "ß", "Ô", "Ò", "õ", "Õ", "µ", "þ", "Þ", "Ú", "Û", "Ù", "ý", "Ý", "¯", "´", "­", "±", "_", "¾", "¶", "§", "÷", "¸", "°", "¨", "·", "¹", "³", "²", "_", " "];
                for (b = 0; b < a.length; b++) c = 255 & a.charCodeAt(b), d += c > 127 ? e[c - 128] : String.fromCharCode(c);
                return d
            }

            function v(a) {
                return decodeURIComponent(escape(a))
            }

            function w(a) {
                var b, c = "";
                for (b = 0; b < a.length; b++) c += String.fromCharCode(a[b]);
                return c
            }

            function x(a) {
                var b = (4294901760 & a) >> 16,
                    c = 65535 & a;
                try {
                    return new Date(1980 + ((65024 & b) >> 9), ((480 & b) >> 5) - 1, 31 & b, (63488 & c) >> 11, (2016 & c) >> 5, 2 * (31 & c), 0)
                } catch (a) {}
            }

            function y(a, b, c, d, e) {
                return a.version = b.view.getUint16(c, !0), a.bitFlag = b.view.getUint16(c + 2, !0), a.compressionMethod = b.view.getUint16(c + 4, !0), a.lastModDateRaw = b.view.getUint32(c + 6, !0), a.lastModDate = x(a.lastModDateRaw), 1 === (1 & a.bitFlag) ? void e(J) : ((d || 8 != (8 & a.bitFlag)) && (a.crc32 = b.view.getUint32(c + 10, !0), a.compressedSize = b.view.getUint32(c + 14, !0), a.uncompressedSize = b.view.getUint32(c + 18, !0)), 4294967295 === a.compressedSize || 4294967295 === a.uncompressedSize ? void e(K) : (a.filenameLength = b.view.getUint16(c + 22, !0), void(a.extraFieldLength = b.view.getUint16(c + 24, !0))))
            }

            function z(b, c, d) {
                function f() {}

                function g(a) {
                    function c(c, f) {
                        b.readUint8Array(b.size - c, c, function(b) {
                            for (var c = b.length - e; c >= 0; c--)
                                if (80 === b[c] && 75 === b[c + 1] && 5 === b[c + 2] && 6 === b[c + 3]) return void a(new DataView(b.buffer, c, e));
                            f()
                        }, function() {
                            d(L)
                        })
                    }
                    var e = 22;
                    if (b.size < e) return void d(H);
                    var f = 65536,
                        g = e + f;
                    c(e, function() {
                        c(Math.min(g, b.size), function() {
                            d(H)
                        })
                    })
                }
                var h = 0;
                f.prototype.getData = function(a, c, f, g) {
                    function i(a) {
                        var b = e(4);
                        return b.view.setUint32(0, a), m.crc32 == b.view.getUint32(0)
                    }

                    function j(b, e) {
                        g && !i(e) ? d(I) : a.getData(function(a) {
                            c(a)
                        })
                    }

                    function k(a) {
                        d(a || O)
                    }

                    function l(a) {
                        d(a || N)
                    }
                    var m = this;
                    b.readUint8Array(m.offset, 30, function(c) {
                        var i, n = e(c.length, c);
                        return 1347093252 != n.view.getUint32(0) ? void d(H) : (y(m, n, 4, !1, d), i = m.offset + 30 + m.filenameLength + m.extraFieldLength, void a.init(function() {
                            0 === m.compressionMethod ? t(m._worker, h++, b, a, i, m.compressedSize, g, j, f, k, l) : r(m._worker, h++, b, a, i, m.compressedSize, g, j, f, k, l)
                        }, l))
                    }, k)
                };
                var i = {
                    getEntries: function(a) {
                        var c = this._worker;
                        g(function(g) {
                            var h, i;
                            return h = g.getUint32(16, !0), i = g.getUint16(8, !0), h < 0 || h >= b.size ? void d(H) : void b.readUint8Array(h, b.size - h, function(b) {
                                var g, h, j, k, l = 0,
                                    m = [],
                                    n = e(b.length, b);
                                for (g = 0; g < i; g++) {
                                    if (h = new f, h._worker = c, 1347092738 != n.view.getUint32(l)) return void d(H);
                                    y(h, n, l + 6, !0, d), h.commentLength = n.view.getUint16(l + 32, !0), h.directory = 16 == (16 & n.view.getUint8(l + 38)), h.offset = n.view.getUint32(l + 42, !0), j = w(n.array.subarray(l + 46, l + 46 + h.filenameLength)), h.filename = 2048 === (2048 & h.bitFlag) ? v(j) : u(j), h.directory || "/" != h.filename.charAt(h.filename.length - 1) || (h.directory = !0), k = w(n.array.subarray(l + 46 + h.filenameLength + h.extraFieldLength, l + 46 + h.filenameLength + h.extraFieldLength + h.commentLength)), h.comment = 2048 === (2048 & h.bitFlag) ? v(k) : u(k), m.push(h), l += 46 + h.filenameLength + h.extraFieldLength + h.commentLength
                                }
                                a(m)
                            }, function() {
                                d(L)
                            })
                        })
                    },
                    close: function(a) {
                        this._worker && (this._worker.terminate(), this._worker = null), a && a()
                    },
                    _worker: null
                };
                a.zip.useWebWorkers ? E("inflater", function(a) {
                    i._worker = a, c(i)
                }, function(a) {
                    d(a)
                }) : c(i)
            }

            function A(a) {
                return unescape(encodeURIComponent(a))
            }

            function B(a) {
                var b, c = [];
                for (b = 0; b < a.length; b++) c.push(a.charCodeAt(b));
                return c
            }

            function C(b, c, d, f) {
                function g(a) {
                    d(a || M)
                }

                function h(a) {
                    d(a || O)
                }
                var i = {},
                    j = [],
                    k = 0,
                    l = 0,
                    m = {
                        add: function(a, c, m, n, o) {
                            function p(c) {
                                var d;
                                w = o.lastModDate || new Date, u = e(26), i[a] = {
                                    headerArray: u.array,
                                    directory: o.directory,
                                    filename: v,
                                    offset: k,
                                    comment: B(A(o.comment || ""))
                                }, u.view.setUint32(0, 335546376), o.version && u.view.setUint8(0, o.version), f || 0 === o.level || o.directory || u.view.setUint16(4, 2048), u.view.setUint16(6, (w.getHours() << 6 | w.getMinutes()) << 5 | w.getSeconds() / 2, !0), u.view.setUint16(8, (w.getFullYear() - 1980 << 4 | w.getMonth() + 1) << 5 | w.getDate(), !0), u.view.setUint16(22, v.length, !0), d = e(30 + v.length), d.view.setUint32(0, 1347093252), d.array.set(u.array, 4), d.array.set(v, 30), k += d.array.length, b.writeUint8Array(d.array, c, g)
                            }

                            function q(a, d) {
                                var f = e(16);
                                k += a || 0, f.view.setUint32(0, 1347094280), "undefined" != typeof d && (u.view.setUint32(10, d, !0), f.view.setUint32(4, d, !0)), c && (f.view.setUint32(8, a, !0), u.view.setUint32(14, a, !0), f.view.setUint32(12, c.size, !0), u.view.setUint32(18, c.size, !0)), b.writeUint8Array(f.array, function() {
                                    k += 16, m()
                                }, g)
                            }

                            function r() {
                                return o = o || {}, a = a.trim(), o.directory && "/" != a.charAt(a.length - 1) && (a += "/"), i.hasOwnProperty(a) ? void d(P) : (v = B(A(a)), j.push(a), void p(function() {
                                    c ? f || 0 === o.level ? t(x, l++, c, b, 0, c.size, !0, q, n, h, g) : s(x, l++, c, b, o.level, q, n, h, g) : q()
                                }, g))
                            }
                            var u, v, w, x = this._worker;
                            c ? c.init(r, h) : r()
                        },
                        close: function(a) {
                            this._worker && (this._worker.terminate(), this._worker = null);
                            var c, d, f, h = 0,
                                l = 0;
                            for (d = 0; d < j.length; d++) f = i[j[d]], h += 46 + f.filename.length + f.comment.length;
                            for (c = e(h + 22), d = 0; d < j.length; d++) f = i[j[d]], c.view.setUint32(l, 1347092738), c.view.setUint16(l + 4, 5120), c.array.set(f.headerArray, l + 6), c.view.setUint16(l + 32, f.comment.length, !0), f.directory && c.view.setUint8(l + 38, 16), c.view.setUint32(l + 42, f.offset, !0), c.array.set(f.filename, l + 46), c.array.set(f.comment, l + 46 + f.filename.length), l += 46 + f.filename.length + f.comment.length;
                            c.view.setUint32(l, 1347093766), c.view.setUint16(l + 8, j.length, !0), c.view.setUint16(l + 10, j.length, !0), c.view.setUint32(l + 12, h, !0), c.view.setUint32(l + 16, k, !0), b.writeUint8Array(c.array, function() {
                                b.getData(a)
                            }, g)
                        },
                        _worker: null
                    };
                a.zip.useWebWorkers ? E("deflater", function(a) {
                    m._worker = a, c(m)
                }, function(a) {
                    d(a)
                }) : c(m)
            }

            function D(a) {
                var b = document.createElement("a");
                return a.map(function(a) {
                    return b.href = a
                })
            }

            function E(b, c, d) {
                function e(a) {
                    var b = a.data;
                    return b.error ? (h.terminate(), void d(b.error)) : void("importScripts" === b.type && (h.removeEventListener("message", e), h.removeEventListener("error", f), c(h)))
                }

                function f(a) {
                    h.terminate(), d(a)
                }
                if (null !== a.zip.workerScripts && null !== a.zip.workerScriptsPath) return void d(new Error("Either zip.workerScripts or zip.workerScriptsPath may be set, not both."));
                var g;
                if (a.zip.workerScripts) {
                    if (g = a.zip.workerScripts[b], !Array.isArray(g)) return void d(new Error("zip.workerScripts." + b + " is not an array!"));
                    g = D(g)
                } else g = S[b].slice(0), g[0] = (a.zip.workerScriptsPath || "") + g[0];
                var h = new Worker(g[0]);
                h.codecTime = h.crcTime = 0, h.postMessage({
                    type: "importScripts",
                    scripts: g.slice(1)
                }), h.addEventListener("message", e), h.addEventListener("error", f)
            }

            function F(a) {}
            var G, H = "File format is not recognized.",
                I = "CRC failed.",
                J = "File contains encrypted entry.",
                K = "File is using Zip64 (4gb+ file size).",
                L = "Error while reading zip file.",
                M = "Error while writing zip file.",
                N = "Error while writing file data.",
                O = "Error while reading file data.",
                P = "File already exists.",
                Q = 524288,
                R = "text/plain";
            try {
                G = 0 === new Blob([new DataView(new ArrayBuffer(0))]).size
            } catch (a) {}
            b.prototype.append = function(a) {
                for (var b = 0 | this.crc, c = this.table, d = 0, e = 0 | a.length; d < e; d++) b = b >>> 8 ^ c[255 & (b ^ a[d])];
                this.crc = b
            }, b.prototype.get = function() {
                return ~this.crc
            }, b.prototype.table = function() {
                var a, b, c, d = [];
                for (a = 0; a < 256; a++) {
                    for (c = a, b = 0; b < 8; b++) 1 & c ? c = c >>> 1 ^ 3988292384 : c >>>= 1;
                    d[a] = c
                }
                return d
            }(), c.prototype.append = function(a, b) {
                return a
            }, c.prototype.flush = function() {}, g.prototype = new f, g.prototype.constructor = g, h.prototype = new f, h.prototype.constructor = h, i.prototype = new f, i.prototype.constructor = i, j.prototype = new f, j.prototype.constructor = j, k.prototype.getData = function(a) {
                a(this.data)
            }, l.prototype = new k, l.prototype.constructor = l, m.prototype = new k, m.prototype.constructor = m, n.prototype = new k, n.prototype.constructor = n, o.prototype = new k, o.prototype.constructor = o;
            var S = {
                deflater: ["z-worker.js", "deflate.js"],
                inflater: ["z-worker.js", "inflate.js"]
            };
            a.zip = {
                Reader: f,
                Writer: k,
                BlobReader: i,
                ArrayBufferReader: j,
                Data64URIReader: h,
                TextReader: g,
                BlobWriter: n,
                ArrayBufferWriter: o,
                Data64URIWriter: m,
                TextWriter: l,
                createReader: function(a, b, c) {
                    c = c || F, a.init(function() {
                        z(a, b, c)
                    }, c)
                },
                createWriter: function(a, b, c, d) {
                    c = c || F, d = !!d, a.init(function() {
                        C(a, b, c, d)
                    }, c)
                },
                useWebWorkers: !0,
                workerScriptsPath: null,
                workerScripts: null
            }
        }(this);
    var Q = function() {
            var a = {};
            return a.init = function() {
                N.on(s.command, function(a) {
                    switch (a) {
                        case t.newFile:
                            da.new();
                            break;
                        case t.openFile:
                            N.trigger(s.showView, "diskop_modules_load");
                            break;
                        case t.saveFile:
                            N.trigger(s.showView, "diskop_modules_save");
                            break;
                        case t.clearTrack:
                            R.clearTrack();
                            break;
                        case t.clearPattern:
                            R.clearPattern();
                            break;
                        case t.clearInstruments:
                            da.clearInstruments();
                            break;
                        case t.clearSong:
                            R.clearSong();
                            break;
                        case t.showMain:
                            N.trigger(s.showView, "main");
                            break;
                        case t.showTopMain:
                            N.trigger(s.showView, "topmain");
                            break;
                        case t.showBottomMain:
                            N.trigger(s.showView, "bottommain");
                            break;
                        case t.showOptions:
                            N.trigger(s.showView, "options");
                            break;
                        case t.showFileOperations:
                            N.trigger(s.showView, "diskop_load");
                            break;
                        case t.showSampleEditor:
                            N.trigger(s.showView, "sample");
                            break;
                        case t.togglePiano:
                            N.trigger(s.toggleView, "piano");
                            break;
                        case t.showAbout:
                            var b = q.modalDialog();
                            b.setProperties({
                                width: q.mainPanel.width,
                                height: q.mainPanel.height,
                                top: 0,
                                left: 0,
                                ok: !0
                            }), b.onClick = b.close;
                            var c = "undefined" == typeof versionNumber ? "dev" : versionNumber;
                            "undefined" == typeof buildNumber ? (new Date).getTime() : buildNumber;
                            b.setText("BASSOONTRACKER//Old School Amiga MOD and XM tracker/in plain javascript//©2017-2018 by Steffest//version " + c + "//Fork me on Github!"), q.setModalElement(b);
                            break;
                        case t.showHelp:
                            window.open("https://www.stef.be/bassoontracker/docs/");
                            break;
                        case t.randomSong:
                            q.diskOperations.playRandomSong();
                            break;
                        case t.randomSongXM:
                            q.diskOperations.playRandomSong("xm");
                            break;
                        case t.showGithub:
                            window.open("https://github.com/steffest/bassoontracker");
                            break;
                        case t.showStats:
                            var d = document.getElementById("MrDStats");
                            if (!d) {
                                var e = document.createElement("script");
                                e.onload = function() {
                                    var a = new Stats;
                                    document.body.appendChild(a.dom), requestAnimationFrame(function b() {
                                        a.update(), requestAnimationFrame(b)
                                    })
                                }, e.src = "script/plugins/stats.js", document.head.appendChild(e);
                                break
                            }
                            break;
                        case t.cut:
                            q.cutSelection(!0);
                            break;
                        case t.copy:
                            q.copySelection(!0);
                            break;
                        case t.paste:
                            q.pasteSelection(!0);
                            break;
                        case t.pattern2Sample:
                            R.renderTrackToBuffer()
                    }
                })
            }, a.doCommand = function(a) {
                N.trigger(s.command, a)
            }, a
        }(),
        R = function() {
            var b, c = {},
                d = 0,
                e = 0,
                f = 0,
                g = 0,
                h = 0,
                j = {};
            return c.getStepsPerTrack = function() {
                return da.inFTMode() ? 8 : 6
            }, c.setCurrentCursorPosition = function(a) {
                f = a;
                var g = c.getStepsPerTrack();
                d = Math.floor(f / g), e = f % g, b !== f && N.trigger(s.cursorPositionChange, f), b = f
            }, c.getCurrentCursorPosition = function() {
                return f
            }, c.moveCursorPosition = function(a) {
                var b = c.getStepsPerTrack(),
                    d = f + a,
                    e = da.getTrackCount() * b - 1;
                d > e && (d = 0), d < 0 && (d = e), c.setCurrentCursorPosition(d)
            }, c.getCurrentTrack = function() {
                return d
            }, c.setCurrentTrack = function(a) {
                var b = c.getStepsPerTrack();
                c.setCurrentCursorPosition(a * b + e)
            }, c.getCurrentTrackPosition = function() {
                return e
            }, c.setCurrentTrackPosition = function(a) {
                var b = c.getStepsPerTrack();
                c.setCurrentCursorPosition(d * b + a)
            }, c.putNote = function(a, b, c) {
                var e = da.getSong().patterns[g][h][d];
                e && (e.instrument = a, c ? e.setIndex(c) : e.setPeriod(b)), da.getSong().patterns[g][h][d] = e, N.trigger(s.patternChange, g)
            }, c.putNoteParam = function(a, b) {
                var c, e, f = da.getSong().patterns[g][h][d];
                if (f) {
                    if (1 == a || 2 == a) {
                        var i = f.instrument;
                        c = i >> 4, e = 15 & i, 1 == a && (c = b), 2 == a && (e = b), f.instrument = (c << 4) + e
                    }
                    var j = 0;
                    if (da.inFTMode() && (j = 2, 3 == a || 4 == a)) {
                        var k = f.volumeEffect;
                        c = k >> 4 || 1, e = 15 & k, 3 == a && (c = b + 1), 4 == a && (e = b), f.volumeEffect = (c << 4) + e, f.volumeEffect < 16 && (f.volumeEffect = 0)
                    }
                    if (a == 3 + j && (f.effect = b), a == 4 + j || a == 5 + j) {
                        var l = f.param;
                        c = l >> 4, e = 15 & l, a == 4 + j && (c = b), a == 5 + j && (e = b), f.param = (c << 4) + e
                    }
                }
                da.getSong().patterns[g][h][d] = f, N.trigger(s.patternChange, g)
            }, c.clearTrack = function() {
                for (var a = da.getCurrentPatternData().length, b = 0; b < a; b++) {
                    var c = da.getSong().patterns[g][b][d];
                    c && c.clear()
                }
                N.trigger(s.patternChange, g)
            }, c.clearPattern = function() {
                for (var a = da.getCurrentPatternData().length, b = 0; b < a; b++)
                    for (var c = 0; c < da.getTrackCount(); c++) {
                        var d = da.getSong().patterns[g][b][c];
                        d && d.clear()
                    }
                N.trigger(s.patternChange, g)
            }, c.clearSong = function() {
                var a = da.getSong();
                da.setCurrentPattern(0), c.clearPattern();
                var b = a.patterns[0];
                a.patterns = [b], a.length = 1, a.restartPosition = 0;
                for (var d = [], e = 0; e < 128; ++e) d[e] = 0;
                a.patternTable = d, da.setAmigaSpeed(6), da.setBPM(125), da.setCurrentSongPosition(1), N.trigger(s.songPropertyChange, a), N.trigger(s.patternTableChange)
            }, c.copyTrack = function(a) {
                var b = "undefined" != typeof a;
                b || (a = d);
                for (var c = da.getCurrentPatternData().length, e = [], f = 0; f < c; f++) {
                    var h = da.getSong().patterns[g][f][a];
                    e.push(h.duplicate())
                }
                return b ? e : void(j.track = e)
            }, c.copyPattern = function() {
                for (var a = [], b = 0; b < da.getTrackCount(); b++) {
                    var d = c.copyTrack(b);
                    a.push(d)
                }
                j.pattern = a
            }, c.getPasteData = function() {
                return j
            }, c.pasteTrack = function(a, b) {
                var c = "undefined" != typeof a,
                    e = b;
                if (c || (a = d, e = j.track), e) {
                    for (var f = da.getCurrentPatternData().length, h = 0; h < f; h++) {
                        var i = da.getSong().patterns[g][h][a],
                            k = e[h];
                        i.populate(k)
                    }
                    return c || N.trigger(s.patternChange, g), !0
                }
                return !1
            }, c.pastePattern = function() {
                var a = j.pattern;
                if (a) {
                    for (var b = 0; b < da.getTrackCount(); b++) c.pasteTrack(b, a[b]);
                    return N.trigger(s.patternChange, g), !0
                }
                return !1
            }, c.insertNote = function() {
                for (var a = da.getSong().patterns[g].length - 2, b = h, c = a; c >= b; c--) {
                    var e = da.getSong().patterns[g][c][d],
                        f = da.getSong().patterns[g][c + 1][d];
                    f.instrument = e.instrument, f.period = e.period, f.effect = e.effect, f.volumeEffect = e.volumeEffect, f.param = e.param, f.index = e.index
                }
                e = da.getSong().patterns[g][h][d], e && e.clear(), N.trigger(s.patternChange, g)
            }, c.removeNote = function(a, b) {
                if ("undefined" == typeof a && (a = d), "undefined" == typeof b && (b = h), 0 !== b) {
                    for (var c = b, e = da.getSong().patterns[g].length - 1, f = c; f <= e; f++) {
                        var i = da.getSong().patterns[g][f][a],
                            j = da.getSong().patterns[g][f - 1][a];
                        j.instrument = i.instrument, j.period = i.period, j.effect = i.effect, j.volumeEffect = i.volumeEffect, j.param = i.param, j.index = i.index
                    }
                    i = da.getSong().patterns[g][e][a], i && i.clear(), N.trigger(s.patternChange, g)
                }
            }, c.renderTrackToBuffer = function(b, d) {
                var e = da.getSong(),
                    f = 0,
                    g = da.getCurrentSongPosition(),
                    h = da.getCurrentPatternData().length,
                    i = .1,
                    j = da.getProperties(),
                    k = j.ticksPerStep,
                    l = j.tickTime,
                    m = 1;
                g = 0;
                var n = g + m;
                n = Math.min(n, e.length), m = n - g;
                var o = k * l * h * m + .2;
                for (O.startRendering(o); g < n;) {
                    var p = e.patternTable[g],
                        q = e.patterns[p];
                    for (h = q.length; f < h;) da.playPatternStep(f, i, q), i += k * l, f++;
                    f = 0, g++
                }
                O.stopRendering(function(d) {
                    var e = !1;
                    if (e) {
                        var f = a(d),
                            g = new Blob([f], {
                                type: "octet/stream"
                            });
                        b = b || da.getSong().title.replace(/ /g, "-").replace(/\W/g, "") + ".wav" || "module-export.wav", P(g, b)
                    } else c.buffer2Sample(d)
                })
            }, c.save = function(a, b) {
                q.setStatus("Exporting ...", !0), c.buildBinary(da.inFTMode() ? w.xm : w.mod, function(d) {
                    var e = new Blob([d.buffer], {
                            type: "application/octet-stream"
                        }),
                        f = a || c.getFileName();
                    "dropbox" === b ? (T.info("save to dropbox " + f), ra.putFile("/" + f, e, function(a) {
                        q.setStatus(a ? "" : "Error while saving to Dropbox ...")
                    })) : (T.info("save " + f), P(e, f), q.setStatus(""))
                })
            }, c.importSample = function(a, b) {
                var c = da.getCurrentInstrument() || na();
                c.name = b, c.sample.length = a.length, c.sample.loop.start = 0, c.sample.loop.length = 0, c.setFineTune(0), c.sample.volume = 64, c.sample.data = [], c.sample.name = b, k(a, c.sample), N.trigger(s.instrumentChange, da.getCurrentInstrumentIndex()), N.trigger(s.instrumentNameChange, da.getCurrentInstrumentIndex())
            }, c.buffer2Sample = function(a) {
                var b = da.getCurrentInstrument() || na(),
                    c = "pattern " + da.getCurrentPattern();
                b.name = c, b.sample.loop.start = 0, b.sample.loop.length = 0, b.setFineTune(0), b.sample.volume = 64, b.sample.name = c;
                var d = a.getChannelData(0);
                b.sample.data = [];
                var e = Math.floor(O.context.sampleRate / 10);
                for (i = e, len = d.length; i < len; i += 4) b.sample.data.push(d[i]);
                b.sample.length = b.sample.data.length, N.trigger(s.instrumentChange, da.getCurrentInstrumentIndex()), N.trigger(s.instrumentNameChange, da.getCurrentInstrumentIndex())
            }, c.buildBinary = function(a, b) {
                a = a || w.mod;
                var c;
                a === w.mod && (c = la()), a === w.xm && (c = ka()), c && c.write(b)
            }, N.on(s.trackerModeChanged, function(a) {
                c.setCurrentTrackPosition(0)
            }), N.on(s.patternChange, function(a) {
                g = a
            }), N.on(s.patternPosChange, function(a) {
                h = a.current
            }), N.on(s.trackCountChange, function(a) {
                var b = a * c.getStepsPerTrack();
                f >= b && c.setCurrentTrack(a - 1)
            }), c
        }(),
        S = function() {
            var a = {},
                b = 3e4;
            return a.get = function(b, c) {
                a.ajax({
                    url: b,
                    success: function(a) {
                        c(a)
                    },
                    error: function(a) {
                        c(void 0, a)
                    }
                })
            }, a.post = function(b, c, d) {
                var e = c;
                if ("object" == typeof c) {
                    e = "";
                    for (var f in c) c.hasOwnProperty(f) && (e += "&" + f + "=" + encodeURIComponent(c[f]));
                    e.length && (e = e.substr(1))
                }
                a.ajax({
                    method: "POST",
                    url: b,
                    data: e,
                    datatype: "form",
                    success: function(a) {
                        d(a)
                    },
                    error: function(a) {
                        d(void 0, a)
                    }
                })
            }, a.sendBinary = function(b, c, d) {
                a.ajax({
                    method: "POST",
                    url: b,
                    data: c,
                    success: function(a) {
                        d(a)
                    },
                    error: function(a) {
                        d(void 0, a)
                    }
                })
            }, a.json = function(b, c) {
                "undefined" == typeof c && (c = function() {}), a.ajax({
                    url: b,
                    cache: !1,
                    datatype: "json",
                    headers: [{
                        key: "Accept",
                        value: "application/json"
                    }],
                    success: function(a) {
                        c(a)
                    },
                    error: function(a) {
                        c(void 0, a)
                    }
                })
            }, a.html = function(b, c) {
                a.ajax({
                    url: b,
                    cache: !1,
                    datatype: "html",
                    success: function(a) {
                        c(a)
                    },
                    error: function(a) {
                        c(void 0, a)
                    }
                })
            }, a.ajax = function(a) {
                var c = new XMLHttpRequest;
                a.error = a.error || function() {
                    a.success(!1)
                }, "jsonp" === a.datatype && a.error(c);
                var d = a.url;
                if ("boolean" == typeof a.cache && !a.cache) {
                    var e = (new Date).getTime();
                    d += d.indexOf("?") > 0 ? "&r=" + e : "?r=" + e
                }
                var f = a.method || "GET";
                c.onreadystatechange = function() {
                    if (!(c.readyState < 4) && 4 === c.readyState)
                        if (200 !== c.status && 201 !== c.status) a.error(c);
                        else {
                            var b = c.responseText;
                            "json" === a.datatype && (b = JSON.parse(b)), "html" === a.datatype && (b = document.createElement("div"), b.innerHTML = c.responseText), a.success(b)
                        }
                }, c.ontimeout = function(a) {}, c.open(f, d, !0), c.timeout = a.timeout || b, a.headers && a.headers.forEach(function(a) {
                    c.setRequestHeader(a.key, a.value);
                });
                var g = a.data || "";
                "POST" === f && a.data && "form" === a.datatype && c.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), c.send(g)
            }, a
        }(),
        T = function() {
            var a = {},
                b = "https://www.stef.be/bassoontracker/api/log/";
            a.info = function(a) {
                c("info", a)
            }, a.warn = function(a) {
                c("warn", a)
            }, a.error = function(a) {
                c("error", a)
            };
            var c = function(a, c) {
                var d = q.stats(),
                    f = "undefined" == typeof versionNumber ? "dev" : versionNumber;
                c = e(c), S.get(b + a + "/" + c + "/" + d.averageFps + "/" + d.skipRenderSteps + "/" + f + "/" + U.width + "x" + U.height, function(a) {})
            };
            return a
        }();
    document.addEventListener("DOMContentLoaded", function() {
        da.init(), O.init(), q.init(function() {
            if (O.context) X.readSettings(), Q.init();
            else {
                var a = q.modalDialog();
                a.setProperties({
                    width: q.mainPanel.width,
                    height: q.mainPanel.height,
                    top: 0,
                    left: 0,
                    ok: !0
                }), a.onDown = function() {
                    window.location.href = "https://www.google.com/chrome/"
                }, a.setText("Sorry//Your browser does not support WebAudio//Supported browsers are/Chrome,Firefox,Safari and Edge"), q.setModalElement(a)
            }
        })
    });
    var U, V, W = function() {
            var a = {};
            a.load = function(c, d, e) {
                a.type = d || r.image, a.loadCount = 0, a.max = c.length, a.next = e;
                for (var f = 0, g = c.length; f < g; f++) b(c[f])
            };
            var b = function(b) {
                if (a.type == r.image) {
                    var c = new Image;
                    c.onload = function() {
                        p.images[b] = this, ++a.loadCount == a.max && a.next && a.next()
                    }, c.onerror = function() {
                        alert("BufferLoader: XHR error")
                    }, c.src = b
                }
                if (a.type == r.audio) {
                    var d = new XMLHttpRequest;
                    d.responseType = "arraybuffer", d.open("GET", b, !0), d.onload = function() {
                        O.context.decodeAudioData(d.response, function(c) {
                            return c ? (p.audio[b] = c, void(++a.loadCount == a.max && a.next && a.next())) : void alert("error decoding file data: " + b)
                        }, function(a) {})
                    }, d.onerror = function() {
                        alert("BufferLoader: XHR error")
                    }, d.send()
                }
            };
            return a
        },
        X = function() {
            function a() {
                M.keyboardTable = "qwerty", M.vubars = "colour", M.stereoSeparation = y.BALANCED, M.dropboxMode = "rename", M.skipFrame = 1, q.skipFrame(M.skipFrame)
            }
            var b = {};
            return b.readSettings = function() {
                a();
                var b = Y.get("bassoonTrackerSettings");
                if (b) {
                    try {
                        b = JSON.parse(b)
                    } catch (a) {
                        return !1
                    }
                    for (var c in b)
                        if (M.hasOwnProperty(c) && b.hasOwnProperty(c) && (M[c] = b[c], "skipFrame" === c)) {
                            var d = parseInt(M[c], 10);
                            isNaN(d) || q.skipFrame(d)
                        } M.stereoSeparation && O.setStereoSeparation(M.stereoSeparation)
                }
            }, b.saveSettings = function() {
                var a = {
                    vubars: M.vubars,
                    keyboardTable: M.keyboardTable,
                    stereoSeparation: M.stereoSeparation,
                    dropboxMode: M.dropboxMode,
                    skipFrame: q.getSkipFrame()
                };
                Y.set("bassoonTrackerSettings", JSON.stringify(a))
            }, b.reset = function() {
                a(), b.saveSettings()
            }, b
        }(),
        Y = function() {
            var a = {};
            return a.get = function(a) {
                return localStorage.getItem(a)
            }, a.set = function(a, b) {
                return localStorage.setItem(a, b)
            }, a
        }(),
        Z = {},
        $ = {},
        _ = {},
        aa = [],
        ba = [],
        ca = [],
        da = function() {
            function a(a) {
                a = a || 0, m = m || new WAAClock(O.context), m.start(), O.enable(), q && q.setStatus("Playing"), fa = [], ga = [], t = n.patterns[a];
                var c = t.length,
                    d = {},
                    e = 0,
                    f = O.context.currentTime + .1,
                    g = .2,
                    h = 1,
                    j = t,
                    k = J;
                ea = [], x = m.setTimeout(function(m) {
                    e > 1 && (g = h, x.repeat(g));
                    var o = m.deadline + g;
                    for (O.clearScheduledNotesCache(); f < o;)
                        if (y.setStateAtTime(f, {
                                patternPos: e,
                                songPos: k
                            }), d.patternDelay) {
                            for (d.patternDelay--, ha = 0; ha < T; ha++) i(ha, f);
                            f += Q * S
                        } else if (d = b(e, f, j, k), f += Q * S, e++, e >= c || d.patternBreak)
                        if (d.positionBreak && d.targetSongPosition == k || (fa = [], ga = []), e = 0, da.getPlayType() == u.song) {
                            var p = d.positionBreak ? d.targetSongPosition : ++k;
                            p >= n.length && (p = n.restartPosition ? n.restartPosition - 1 : 0), p >= n.length && (p = 0), k = p, a = n.patternTable[k], j = n.patterns[a], j || (j = l(), n.patterns[a] = j), c = j.length, d.patternBreak && (e = d.targetPatternPosition || 0, e > j.length && (e = 0))
                        } else d.patternBreak && (e = d.targetPatternPosition || 0, e > U && (e = 0));
                    for (ha = 0; ha < T; ha++) {
                        var q = X[ha];
                        if (q && q.time && q.scheduled) {
                            var r = y.getInstrument(q.instrumentIndex);
                            if (q.scheduled.volume && f + g >= q.scheduled.volume) {
                                var s = r.scheduleEnvelopeLoop(q.volumeEnvelope, q.scheduled.volume, 2);
                                q.scheduled.volume += s
                            }
                            q.scheduled.panning && f + g >= q.scheduled.panning && (s = r.scheduleEnvelopeLoop(q.panningEnvelope, q.scheduled.panning, 2), q.scheduled.panning += s)
                        }
                    }
                }, .01).repeat(g).tolerance({
                    early: .1
                })
            }

            function b(a, b, c, e) {
                c = c || t;
                for (var f, g = c[a], h = T, j = {}, k = 0; k < h; k++) l = g[k], l && l.effect && 15 == l.effect && (l.param <= 32 ? (0 == l.param && (l.param = 1), da.setAmigaSpeed(l.param)) : da.setBPM(l.param));
                for (var k = 0; k < h; k++) {
                    var l = g[k];
                    if (l) {
                        var m = {
                                position: e,
                                step: a
                            },
                            n = b;
                        if (W) {
                            var o = (Math.random() * W * 2 - W) / 1e3;
                            n += o
                        }
                        f = d(l, k, n, m), f.patternBreak && (j.patternBreak = !0, j.targetPatternPosition = f.targetPatternPosition || 0), f.positionBreak && (j.positionBreak = !0, j.targetPatternPosition = f.targetPatternPosition || 0, j.targetSongPosition = f.targetSongPosition || 0), f.patternDelay && (j.patternDelay = f.patternDelay)
                    }
                }
                for (k = 0; k < h; k++) i(k, b);
                return j
            }

            function d(a, b, c, d) {
                var f = 100,
                    g = {},
                    h = a.instrument,
                    i = a.period,
                    j = a.index;
                i && !h && (h = X[b].currentInstrument, f = "number" == typeof X[b].currentVolume ? X[b].currentVolume : f, M.emulateProtracker1OffsetBug && h && Y[b].offset && Y[b].offset.instrument === h && (g.offset = Y[b].offset)), "number" == typeof a.instrument && (A = y.getInstrument(a.instrument), A && (f = 100 * (A.sample.volume / 64), M.emulateProtracker1OffsetBug && (Y[b].offset = Y[b].offset || {}, Y[b].offset.value = 0, Y[b].offset.instrument = a.instrument)));
                var k = f,
                    l = !0;
                if ("number" == typeof h && (A = y.getInstrument(h)), j && y.inFTMode())
                    if (97 === j && (j = H), j === H) {
                        var m = A || y.getInstrument(X[b].currentInstrument);
                        k = m ? m.noteOff(c, X[b]) : 0, f = k, l = !1
                    } else if (A && (A.setSampleForNoteIndex(j), A.sample.relativeNote && (j += A.sample.relativeNote)), y.useLinearFrequency) i = 7680 - 64 * (j - 1);
                else {
                    var n = ba[j];
                    n && (i = n.period)
                }
                var o, p, q = a.param,
                    r = {};
                if (a.volumeEffect && y.inFTMode()) {
                    var s = a.volumeEffect;
                    if (o = s >> 4, p = 15 & s, s > 15 && s <= 80) k = (s - 16) / 64 * 100, f = k, g.volume = {
                        value: k
                    };
                    else switch (o) {
                        case 6:
                            g.fade = {
                                value: p * -1 * 100 / 64
                            };
                            break;
                        case 7:
                            g.fade = {
                                value: 100 * p / 64
                            };
                            break;
                        case 8:
                            g.fade = {
                                value: 100 * -p / 64,
                                fine: !0
                            };
                            break;
                        case 9:
                            g.fade = {
                                value: 100 * p / 64,
                                fine: !0
                            };
                            break;
                        case 10:
                            break;
                        case 11:
                            break;
                        case 12:
                            g.panning = {
                                value: 17 * (s - 192),
                                slide: !1
                            };
                            break;
                        case 13:
                            g.panning = {
                                value: s,
                                slide: !0
                            };
                            break;
                        case 14:
                            break;
                        case 15:
                    }
                }
                switch (a.effect) {
                    case 0:
                        if (q) {
                            o = q >> 4, p = 15 & q;
                            var t = 0;
                            if (A = A || y.getInstrument(X[b].currentInstrument), y.inFTMode()) {
                                if (A) {
                                    var u = j || X[b].noteIndex,
                                        x = A.getPeriodForNote(u, !0);
                                    j === H ? g.arpeggio = Y[b].arpeggio : (g.arpeggio = {
                                        root: x,
                                        interval1: x - A.getPeriodForNote(u + o, !0),
                                        interval2: x - A.getPeriodForNote(u + p, !0),
                                        step: 1
                                    }, Y[b].arpeggio = g.arpeggio)
                                }
                            } else x = i || X[b].startPeriod, A && (t = A.getFineTune(), t && (x = O.getFineTuneForPeriod(x, t))), g.arpeggio = {
                                root: x,
                                interval1: x - O.getSemiToneFrom(x, o, t),
                                interval2: x - O.getSemiToneFrom(x, p, t),
                                step: 1
                            }
                        }
                        a.instrument && (g.volume = {
                            value: f
                        });
                        break;
                    case 1:
                        q *= -1, y.inFTMode() && !q && Y[b].slideUp && (q = Y[b].slideUp.value), g.slide = {
                            value: q
                        }, Y[b].slideUp = g.slide;
                        break;
                    case 2:
                        y.inFTMode() && !q && Y[b].slideDown && (q = Y[b].slideDown.value), g.slide = {
                            value: q
                        }, Y[b].slideDown = g.slide;
                        break;
                    case 3:
                        l = !1;
                        var z = i;
                        if (y.inFTMode() && j === H && (z = 0), X[b].currentInstrument && (h = X[b].currentInstrument), z && h) {
                            var A = y.getInstrument(h);
                            A && A.getFineTune() && (z = y.inFTMode() ? A.getPeriodForNote(j, !0) : O.getFineTuneForPeriod(z, A.getFineTune()))
                        }
                        var B = Y[b].slide;
                        B && (q || (q = B.value)), z || (z = Y[b].defaultSlideTarget), g.slide = {
                            value: q,
                            target: z,
                            canUseGlissando: !0,
                            resetVolume: !!a.instrument,
                            volume: f
                        }, Y[b].slide = g.slide, a.instrument && (g.volume = {
                            value: f
                        });
                        break;
                    case 4:
                        a.instrument && (X[b].startVolume && (g.volume = {
                            value: k
                        }), X[b].vibratoTimer = 0), o = q >> 4, p = 15 & q;
                        var C = o * Q / 64,
                            D = Y[b].vibrato;
                        0 == o && D && (C = D.freq), 0 == p && D && (p = D.amplitude), g.vibrato = {
                            amplitude: p,
                            freq: C
                        }, Y[b].vibrato = g.vibrato;
                        break;
                    case 5:
                        l = !1, z = i, z && h && (A = y.getInstrument(h), A && A.getFineTune() && (z = y.inFTMode() ? O.getFineTuneForNote(j, A.getFineTune()) : O.getFineTuneForPeriod(z, A.getFineTune()))), q = 1;
                        var B = Y[b].slide;
                        B && (z || (z = B.target || 0), q = B.value), g.slide = {
                            value: q,
                            target: z
                        }, Y[b].slide = g.slide, a.instrument && (g.volume = {
                            value: f
                        }), q = a.param, q && (a.param < 16 ? q *= -1 : q = a.param >> 4, q = 100 * q / 64, g.fade = {
                            value: q,
                            resetOnStep: !!a.instrument
                        }, Y[b].fade = g.fade);
                        break;
                    case 6:
                        a.instrument && (X[b].startVolume && (g.volume = {
                            value: k
                        }), X[b].vibratoTimer = 0), a.param ? (a.param < 16 ? q *= -1 : q = 15 & a.param, q = 100 * q / 64, g.fade = {
                            value: q
                        }, Y[b].fade = g.fade) : da.inFTMode() && Y[b].fade && (g.fade = Y[b].fade), Y[b].vibrato && (g.vibrato = Y[b].vibrato);
                        break;
                    case 7:
                        i && !a.instrument && (X[b].startVolume && (g.volume = {
                            value: k
                        }), X[b].tremoloTimer = 0), o = q >> 4, p = 15 & q;
                        var E = p,
                            C = o * Q / 64,
                            F = Y[b].tremolo;
                        0 == o && F && (C = F.freq), 0 == p && F && (E = F.amplitude), g.tremolo = {
                            amplitude: E,
                            freq: C
                        }, Y[b].tremolo = g.tremolo;
                        break;
                    case 8:
                        g.panning = {
                            value: q,
                            slide: !1
                        };
                        break;
                    case 9:
                        q <<= 8, !q && Y[b].offset && (q = Y[b].offset.stepValue || Y[b].offset.value || 0);
                        var G = q;
                        M.emulateProtracker1OffsetBug && !a.instrument && Y[b].offset && (q += Y[b].offset.value), g.offset = {
                            value: q,
                            stepValue: G
                        }, Y[b].offset = Y[b].offset || {}, Y[b].offset.value = g.offset.value, Y[b].offset.stepValue = g.offset.stepValue, M.emulateProtracker1OffsetBug && (a.instrument && (Y[b].offset.instrument = a.instrument), i && (Y[b].offset.value += G)), a.instrument && (g.volume = {
                            value: f
                        });
                        break;
                    case 10:
                        if (a.param < 16 ? q *= -1 : q = a.param >> 4, q = 100 * q / 64, !a.param) {
                            var I = Y[b].fade;
                            I && (q = I.value)
                        }
                        g.fade = {
                            value: q,
                            resetOnStep: !!a.instrument
                        }, y.inFTMode() && (Y[b].fade = g.fade);
                        break;
                    case 11:
                        r.patternBreak = !0, r.positionBreak = !0, r.targetSongPosition = a.param, r.targetPatternPosition = 0;
                        break;
                    case 12:
                        k = a.param / 64 * 100, g.volume = {
                            value: k
                        };
                        break;
                    case 13:
                        r.patternBreak = !0, o = q >> 4, p = 15 & q, r.targetPatternPosition = 10 * o + p;
                        break;
                    case 14:
                        var J = q >> 4,
                            K = 15 & q;
                        switch (J) {
                            case 0:
                                y.inFTMode() || O.setAmigaLowPassFilter(!K, c);
                                break;
                            case 1:
                                K *= -1, !K && Y[b].fineSlide && (K = Y[b].fineSlide.value), g.slide = {
                                    value: K,
                                    fine: !0
                                }, Y[b].fineSlide = g.slide;
                                break;
                            case 2:
                                !K && Y[b].fineSlide && (K = Y[b].fineSlide.value), g.slide = {
                                    value: K,
                                    fine: !0
                                }, Y[b].fineSlide = g.slide;
                                break;
                            case 3:
                                Y[b].glissando = !!K;
                                break;
                            case 4:
                                switch (K) {
                                    case 1:
                                        v = O.waveFormFunction.saw;
                                        break;
                                    case 2:
                                        v = O.waveFormFunction.square;
                                        break;
                                    case 3:
                                        v = O.waveFormFunction.sine;
                                        break;
                                    case 4:
                                        v = O.waveFormFunction.sine;
                                        break;
                                    case 5:
                                        v = O.waveFormFunction.saw;
                                        break;
                                    case 6:
                                        v = O.waveFormFunction.square;
                                        break;
                                    case 7:
                                        v = O.waveFormFunction.sine;
                                        break;
                                    default:
                                        v = O.waveFormFunction.sine
                                }
                                break;
                            case 5:
                                if (h) {
                                    var A = y.getInstrument(h);
                                    g.fineTune = {
                                        original: A.getFineTune(),
                                        instrument: A
                                    }, A.setFineTune(K)
                                }
                                break;
                            case 6:
                                K ? (ga[b] = ga[b] || 0, ga[b] < K ? (ga[b]++, r.patternBreak = !0, r.positionBreak = !0, r.targetSongPosition = d.position, r.targetPatternPosition = fa[b] || 0) : ga[b] = 0) : fa[b] = d.step;
                                break;
                            case 7:
                                switch (K) {
                                    case 1:
                                        w = O.waveFormFunction.saw;
                                        break;
                                    case 2:
                                        w = O.waveFormFunction.square;
                                        break;
                                    case 3:
                                        w = O.waveFormFunction.sine;
                                        break;
                                    case 4:
                                        w = O.waveFormFunction.sine;
                                        break;
                                    case 5:
                                        w = O.waveFormFunction.saw;
                                        break;
                                    case 6:
                                        w = O.waveFormFunction.square;
                                        break;
                                    case 7:
                                        w = O.waveFormFunction.sine;
                                        break;
                                    default:
                                        w = O.waveFormFunction.sine
                                }
                                break;
                            case 8:
                                break;
                            case 9:
                                K && (g.reTrigger = {
                                    value: K
                                });
                                break;
                            case 10:
                                K = 100 * K / 64, g.fade = {
                                    value: K,
                                    fine: !0
                                };
                                break;
                            case 11:
                                K = 100 * K / 64, g.fade = {
                                    value: -K,
                                    fine: !0
                                };
                                break;
                            case 12:
                                K ? K < Q && (g.cutNote = {
                                    value: K
                                }) : l = !1;
                                break;
                            case 13:
                                K && (K < Q ? c += S * K : l = !1);
                                break;
                            case 14:
                                r.patternDelay = K;
                                break;
                            case 15:
                        }
                        break;
                    case 15:
                        a.param <= 32 ? (0 == a.param && (a.param = 1), da.setAmigaSpeed(a.param)) : da.setBPM(a.param);
                        break;
                    case 16:
                        q = Math.min(q, 64), O.setMasterVolume(q / 64, c);
                        break;
                    case 17:
                        o = q >> 4, p = 15 & q;
                        var L = 64 * O.getLastMasterVolume(),
                            N = 0;
                        if (o) {
                            var P = c + o * S;
                            N = o * (Q - 1)
                        } else p && (P = c + p * S, N = -p * (Q - 1));
                        N && (q = (L + N) / 64, q = Math.max(0, q), q = Math.min(1, q), O.slideMasterVolume(q, P));
                        break;
                    case 20:
                        y.inFTMode() && (m = A || y.getInstrument(X[b].currentInstrument), k = m ? m.noteOff(c, X[b]) : 0, f = k, l = !1);
                        break;
                    case 21:
                        break;
                    case 25:
                        break;
                    case 27:
                        g.reTrigger = {
                            value: a.param
                        };
                        break;
                    case 29:
                        break;
                    case 33:
                }
                return l && h && i && (e(b, c), X[b] = {}, A && (X[b] = A.play(j, i, k, b, g, c)), Y[b].defaultSlideTarget = X[b].startPeriod), h && (X[b].currentInstrument = h, g.fineTune && g.fineTune.instrument && g.fineTune.instrument.setFineTune(g.fineTune.original || 0)), A && A.hasVibrato() && (X[b].hasAutoVibrato = !0), X[b].effects = g, X[b].note = a, r
            }

            function e(a, b) {
                try {
                    if (X[a].source) {
                        var c = X[a].volume.gain;
                        c.setValueAtTime(X[a].currentVolume / 100, b - .002), c.linearRampToValueAtTime(0, b), X[a].source.stop(b + .02)
                    }
                } catch (a) {}
            }

            function h(a, b) {
                var c = y.getInstrument(a.instrumentIndex);
                if (c) {
                    var d = -c.vibrato.rate / 40,
                        e = c.vibrato.depth / 8;
                    if (y.useLinearFrequency && (e *= 4), a.vibratoTimer = a.vibratoTimer || 0, c.vibrato.sweep && a.vibratoTimer < c.vibrato.sweep) {
                        var f = 1 - (c.vibrato.sweep - a.vibratoTimer) / c.vibrato.sweep;
                        e *= f
                    }
                    var g = c.getAutoVibratoFunction(),
                        h = g(b, a.vibratoTimer, d, e);
                    return a.vibratoTimer++, h
                }
                return b
            }

            function i(a, b) {
                var c = X[a],
                    d = c.effects;
                if (c && d) {
                    var f, g = !1;
                    if (c.startVibratotimer = c.vibratoTimer || 0, c.resetPeriodOnStep && c.source) {
                        var i = c.currentPeriod || c.startPeriod;
                        y.setPeriodAtTime(c, i, b), c.resetPeriodOnStep = !1
                    }
                    if (d.volume) {
                        var j = d.volume.value;
                        c.volume && c.volume.gain.setValueAtTime(j / 100, b), c.currentVolume = j
                    }
                    if (d.panning && (f = d.panning.value, 255 === f && (f = 254), c.panning && c.panning.pan.setValueAtTime((f - 127) / 127, b)), d.fade) {
                        f = d.fade.value;
                        var k, l = 1;
                        k = d.fade.resetOnStep ? c.startVolume : c.currentVolume;
                        var m = Q;
                        d.fade.fine && (l = 0, m = 1);
                        for (var n = l; n < m; n++) c.volume && (c.volume.gain.setValueAtTime(k / 100, b + n * S), k += f, k = Math.max(k, 0), k = Math.min(k, 100));
                        c.currentVolume = k
                    }
                    if (d.slide && c.source) {
                        var o = c.currentPeriod || c.startPeriod,
                            i = o,
                            m = Q;
                        d.slide.fine && (m = 2);
                        var p = d.slide.value;
                        if (y.inFTMode() && y.useLinearFrequency && (p = 4 * d.slide.value), f = Math.abs(p), y.inFTMode() && d.slide.resetVolume && (c.volumeFadeOut || c.volumeEnvelope)) {
                            var q = y.getInstrument(c.instrumentIndex);
                            q && q.resetVolume(b, c)
                        }
                        c.vibratotimer = c.startVibratotimer;
                        for (var n = 1; n < m; n++) {
                            d.slide.target ? (Y[a].defaultSlideTarget = d.slide.target, i < d.slide.target ? (i += f, i > d.slide.target && (i = d.slide.target)) : (i -= f, i < d.slide.target && (i = d.slide.target))) : (i += p, Y[a].defaultSlideTarget && (Y[a].defaultSlideTarget += p)), y.inFTMode() || (i = O.limitAmigaPeriod(i));
                            var r = i;
                            d.slide.canUseGlissando && Y[a].glissando && (r = O.getNearestSemiTone(i, c.instrumentIndex)), r !== c.currentPeriod && (c.currentPeriod = i, c.hasAutoVibrato && y.inFTMode() && (i = h(c, i), g = !0), y.setPeriodAtTime(c, r, b + n * S))
                        }
                    }
                    if (d.arpeggio && c.source) {
                        var i, o = c.currentPeriod || c.startPeriod;
                        c.resetPeriodOnStep = !0, c.vibratotimer = c.startVibratotimer;
                        for (var n = 0; n < Q; n++) {
                            var s = n % 3;
                            0 == s && (i = o), 1 == s && d.arpeggio.interval1 && (i = o - d.arpeggio.interval1), 2 == s && d.arpeggio.interval2 && (i = o - d.arpeggio.interval2), c.hasAutoVibrato && y.inFTMode() && (i = h(c, i), g = !0), y.setPeriodAtTime(c, i, b + n * S)
                        }
                    }
                    if (d.vibrato || c.hasAutoVibrato && !g) {
                        d.vibrato = d.vibrato || {
                            freq: 0,
                            amplitude: 0
                        };
                        var t = d.vibrato.freq,
                            u = d.vibrato.amplitude;
                        if (y.inFTMode() && y.useLinearFrequency && (u *= 4), c.vibratoTimer = c.vibratoTimer || 0, c.source) {
                            c.resetPeriodOnStep = !0, o = c.currentPeriod || c.startPeriod, c.vibratotimer = c.startVibratotimer;
                            for (var n = 0; n < Q; n++) i = v(o, c.vibratoTimer, t, u), c.hasAutoVibrato && y.inFTMode() && (i = h(c, i), g = !0), y.setPeriodAtTime(c, i, b + n * S)
                        }
                    }
                    if (d.tremolo) {
                        var t = d.tremolo.freq,
                            u = d.tremolo.amplitude;
                        if (c.tremoloTimer = c.tremoloTimer || 0, c.volume)
                            for (var x = c.startVolume, n = 0; n < Q; n++) x = w(x, c.tremoloTimer, t, u), x < 0 && (x = 0), x > 100 && (x = 100), c.volume.gain.setValueAtTime(x / 100, b + n * S), c.currentVolume = x, c.tremoloTimer++
                    }
                    if (d.cutNote && (c.volume && c.volume.gain.setValueAtTime(0, b + d.cutNote.value * S), c.currentVolume = 0), d.reTrigger) {
                        var z = c.instrumentIndex,
                            A = c.startPeriod;
                        j = c.startVolume;
                        for (var B = c.noteIndex, C = d.reTrigger.value || 1, D = C; D < Q;) {
                            var E = b + D * S;
                            e(a, E), X[a] = O.playSample(z, A, j, a, d, E, B), D += C
                        }
                    }
                }
            }

            function j() {
                q && q.setInfo(n.title), n.channels && y.setTrackCount(n.channels), r = void 0, o = void 0, p = void 0, K = void 0, y.setCurrentSongPosition(0), y.setCurrentPatternPos(0), y.setCurrentInstrumentIndex(1), y.clearEffectCache(), N.trigger(s.songLoaded, n), N.trigger(s.songPropertyChange, n)
            }

            function k() {
                y.setAmigaSpeed(6), y.setBPM(125), v = O.waveFormFunction.sine, w = O.waveFormFunction.sine, Y = [], X = [];
                for (var a = 0; a < T; a++) X.push({}), Y.push({});
                y.useLinearFrequency = !1, y.setTrackerMode(L.PROTRACKER), O.setMasterVolume(1), O.setAmigaLowPassFilter(!1, 0)
            }

            function l() {
                for (var a = [], b = 0; b < U; b++) {
                    var c, d = [];
                    for (c = 0; c < T; c++) d.push(oa());
                    a.push(d)
                }
                return a
            }
            for (var m, n, o, p, r, t, v, w, x, y = {}, z = !1, A = !1, B = [], C = 1, D = 0, E = 0, I = u.song, J = 0, K = 0, P = 125, Q = 6, S = 2.5 / P, T = 4, U = 64, V = L.PROTRACKER, W = 0, X = [], Y = [], ea = [], fa = [], ga = [], ha = 0; ha < T; ha++) X.push({}), Y.push({});
            y.init = function(a) {
                for (var b = -8; b < 8; b++) $[b] = {};
                for (var c in F)
                    if (F.hasOwnProperty(c)) {
                        var d = F[c];
                        if (Z[d.period] = d, _[d.name] = d, aa.push(d.name), d.tune)
                            for (b = -8; b < 8; b++) {
                                var e = $[b],
                                    f = b + 8;
                                e[d.tune[f]] = d.period
                            }
                    } var g = 0;
                for (c in G)
                    if (G.hasOwnProperty(c)) {
                        var h = G[c];
                        h.period || (h.period = 1), ba.push(h), ca[h.period] = g, h.modPeriod && (ca[h.modPeriod] = g), g++
                    } a && (O.init(), a.plugin && q.initPlugin(a))
            }, y.setCurrentInstrumentIndex = function(a) {
                if (n.instruments[a]) C = a, o != C && N.trigger(s.instrumentChange, C), o = C;
                else if (a <= y.getMaxInstruments()) {
                    for (var b = n.instruments.length, c = a; b <= c; b++) y.setInstrument(b, na());
                    var d = [];
                    for (b = 1; b <= c; b++) {
                        var e = n.instruments[b] || {
                            name: ""
                        };
                        d.push({
                            label: b + " " + e.name,
                            data: b
                        }), N.trigger(s.instrumentListChange, d)
                    }
                    C = a, o != C && N.trigger(s.instrumentChange, C), o = C
                }
            }, y.getCurrentInstrumentIndex = function() {
                return C
            }, y.getCurrentInstrument = function() {
                return B[C]
            }, y.getMaxInstruments = function() {
                return y.inFTMode() ? 128 : 31
            }, y.setCurrentPattern = function(a) {
                D = a, t = n.patterns[D], t || (t = l(), n.patterns[D] = t), U = t.length, p != D && N.trigger(s.patternChange, D), p = D
            }, y.getCurrentPattern = function() {
                return D
            }, y.getCurrentPatternData = function() {
                return t
            }, y.updatePatternTable = function(a, b) {
                n.patternTable[a] = b, N.trigger(s.patternTableChange, b), a == J && (p = void 0, da.setCurrentPattern(b))
            }, y.setCurrentPatternPos = function(a) {
                E = a, r != E && N.trigger(s.patternPosChange, {
                    current: E,
                    prev: r
                }), r = E
            }, y.getCurrentPatternPos = function() {
                return E
            }, y.moveCurrentPatternPos = function(a) {
                var b = E + a,
                    c = U - 1;
                b < 0 && (b = c), b > c && (b = 0), y.setCurrentPatternPos(b)
            }, y.getCurrentSongPosition = function() {
                return J
            }, y.setCurrentSongPosition = function(a, b) {
                J = a, J != K && (N.trigger(s.songPositionChange, J), n.patternTable && y.setCurrentPattern(n.patternTable[J]), K = J, b && y.isPlaying() && (y.stop(), y.togglePlay()))
            }, y.addToPatternTable = function(a, b) {
                "undefined" == typeof a && (a = n.length), b = b || 0, a == n.length && (n.patternTable[a] = b, n.length++), N.trigger(s.songPropertyChange, n), N.trigger(s.patternTableChange)
            }, y.removeFromPatternTable = function(a) {
                n.length < 2 || ("undefined" == typeof a && (a = n.length - 1), a == n.length - 1 && (n.patternTable[a] = 0, n.length--), J == n.length && y.setCurrentSongPosition(J - 1), N.trigger(s.songPropertyChange, n), N.trigger(s.patternTableChange))
            }, y.setPlayType = function(a) {
                I = a, N.trigger(s.playTypeChange, I)
            }, y.getPlayType = function() {
                return I
            }, y.playSong = function() {
                y.stop(), O.checkState(), y.setPlayType(u.song), A = !0, a(D), N.trigger(s.playingChange, A)
            }, y.playPattern = function() {
                y.stop(), O.checkState(), E = 0, y.setPlayType(u.pattern), A = !0, a(D), N.trigger(s.playingChange, A)
            }, y.stop = function() {
                m && m.stop(), O.disable(), q && (q.setStatus("Ready"), ia.clearInputNotes()), y.clearEffectCache();
                for (var a = 0; a < T; a++)
                    if (X[a].source) try {
                        X[a].source.stop()
                    } catch (a) {}
                A = !1, N.trigger(s.playingChange, A)
            }, y.togglePlay = function() {
                y.isPlaying() ? y.stop() : I == u.pattern ? y.playPattern() : y.playSong()
            }, y.getProperties = function() {
                return {
                    ticksPerStep: Q,
                    tickTime: S
                }
            }, y.playPatternStep = b, y.cutNote = e, y.setBPM = function(a) {
                m && m.timeStretch(O.context.currentTime, [x], P / a), P = a, S = 2.5 / P, N.trigger(s.songBPMChange, P)
            }, y.getBPM = function() {
                return P
            }, y.setAmigaSpeed = function(a) {
                Q = a
            }, y.getAmigaSpeed = function() {
                return Q
            }, y.getSwing = function() {
                return W
            }, y.setSwing = function(a) {
                W = a
            }, y.getPatternLength = function() {
                return U
            }, y.setPatternLength = function(a) {
                U = a;
                var b = n.patterns[D].length;
                if (b !== U) {
                    if (b < U)
                        for (var c = b; c < U; c++) {
                            var d, e = [];
                            for (d = 0; d < T; d++) e.push(oa());
                            n.patterns[D].push(e)
                        } else n.patterns[D] = n.patterns[D].splice(0, U), E >= U && y.setCurrentPatternPos(U - 1);
                    N.trigger(s.patternChange, D)
                }
            }, y.getTrackCount = function() {
                return T
            }, y.setTrackCount = function(a) {
                T = a;
                for (var b = X.length; b < T; b++) X.push({});
                for (b = Y.length; b < T; b++) Y.push({});
                N.trigger(s.trackCountChange, T)
            }, y.toggleRecord = function() {
                y.stop(), z = !z, N.trigger(s.recordingChange, z)
            }, y.isPlaying = function() {
                return A
            }, y.isRecording = function() {
                return z
            }, y.setStateAtTime = function(a, b) {
                ea.push({
                    time: a,
                    state: b
                })
            }, y.getStateAtTime = function(a) {
                for (var b = void 0, c = 0, d = ea.length; c < d; c++) {
                    var e = ea[0];
                    if (!(e.time < a)) return b;
                    b = ea.shift().state
                }
                return b
            }, y.getTimeStates = function() {
                return ea
            }, y.setPeriodAtTime = function(a, b, c) {
                if (b = Math.max(b, 1), y.inFTMode() && y.useLinearFrequency) var d = 8363 * Math.pow(2, (4608 - b) / 768),
                    e = d / O.context.sampleRate;
                else e = a.startPeriod / b, e *= a.startPlaybackRate;
                a.source.playbackRate.setValueAtTime(e, c), a.source.playbackRate.setValueAtTime(e, c + .005)
            }, y.load = function(a, b, c) {
                a = a || "demomods/StardustMemories.mod", q && (q.setInfo(""), q.setLoading());
                var d = function(d) {
                        y.processFile(d, e, function(d) {
                            if (q && q.setStatus("Ready"), d) {
                                var f = "",
                                    g = "";
                                if ("string" == typeof a) {
                                    if (a.indexOf("modarchive.org") > 0) {
                                        var h = a.split("moduleid=")[1];
                                        n.filename = h.split("#")[1] || h, h = h.split("#")[0], h = h.split("&")[0], g = "modArchive", f = "https://modarchive.org/index.php?request=view_by_moduleid&query=" + h, N.trigger(s.songPropertyChange, n)
                                    }
                                    a.indexOf("modules.pl") > 0 && (h = a.split("modules.pl/")[1], n.filename = h.split("#")[1] || h, h = h.split("#")[0], h = h.split("&")[0], g = "modules.pl", f = "http://www.modules.pl/?id=module&mod=" + h, N.trigger(s.songPropertyChange, n))
                                }
                                q && q.setInfo(n.title, g, f)
                            }
                            if (q && d && !b) {
                                var i = window.location.pathname,
                                    j = i.substring(i.lastIndexOf("/") + 1);
                                window.history.pushState && window.history.pushState({}, e, j + "?file=" + encodeURIComponent(a))
                            }
                            d && ka(b), c && c()
                        })
                    },
                    e = "";
                "string" == typeof a ? (e = a.substr(a.lastIndexOf("/") + 1), f(a, function(a) {
                    d(a)
                })) : (e = a.name || "", b = !0, d(a.buffer || a))
            };
            var ka = function(a) {
                var b = c("autoplay");
                !q && a && (b = "1"), "true" != b && "1" != b || da.playSong()
            };
            return y.handleUpload = function(a) {
                if (a.length) {
                    var b = a[0],
                        c = new FileReader;
                    c.onload = function() {
                        y.processFile(c.result, b.name, function(a) {
                            q && q.setStatus("Ready")
                        })
                    }, c.readAsArrayBuffer(b)
                }
            }, y.processFile = function(a, b, c) {
                var d = !1,
                    e = new g(a, !0),
                    f = ja.detect(e, b);
                f && "ZIP" == f.name && (q && q.setStatus("Extracting Zip file"), zip.workerScriptsPath = "script/src/lib/zip/", zip.createReader(new zip.ArrayBufferReader(a), function(a) {
                    var d, e = 0;
                    a.getEntries(function(a) {
                        a && a.length && a.forEach(function(a) {
                            a.uncompressedSize > e && (e = a.uncompressedSize, d = a)
                        }), d ? d.getData(new zip.ArrayBufferWriter, function(a) {
                            a && a.byteLength && y.processFile(a, b, c)
                        }) : c && c(!1)
                    })
                }, function(a) {
                    c && c(!1)
                })), f.isMod && f.loader && (d = !0, y.isPlaying() && y.stop(), k(), n = f.loader().load(e, b), n.filename = b, j()), f.isSample && R.importSample(e, b), c && c(d)
            }, y.getSong = function() {
                return n
            }, y.getInstruments = function() {
                return B
            }, y.getInstrument = function(a) {
                return B[a]
            }, y.setInstrument = function(a, b) {
                b.instrumentIndex = a, B[a] = b
            }, y.clearEffectCache = function() {
                Y = [];
                for (var a = 0; a < T; a++) Y.push({})
            }, y.clearInstruments = function(a) {
                var b = [],
                    c = a || n.instruments.length - 1;
                for (B = [], ha = 1; ha <= c; ha++) y.setInstrument(ha, na()), b.push({
                    label: ha + " ",
                    data: ha
                });
                n.instruments = B, N.trigger(s.instrumentListChange, b), N.trigger(s.instrumentChange, C)
            }, y.setTrackerMode = function(a) {
                V = a, M.emulateProtracker1OffsetBug = !y.inFTMode(), N.trigger(s.trackerModeChanged, a)
            }, y.getTrackerMode = function() {
                return V
            }, y.inFTMode = function() {
                return V === L.FASTTRACKER
            }, y.new = function() {
                k(), n = {
                    patterns: [],
                    instruments: []
                }, y.clearInstruments(32), n.typeId = "M.K.", n.title = "new song", n.length = 1, n.restartPosition = 0, n.patterns.push(l());
                for (var a = [], b = 0; b < 128; ++b) a[b] = 0;
                n.patternTable = a, j()
            }, y.clearInstrument = function() {
                B[C] = na(), N.trigger(s.instrumentChange, C), N.trigger(s.instrumentNameChange, C)
            }, y.getFileName = function() {
                return n.filename || (n.title ? n.title.replace(/ /g, "-").replace(/\W/g, "") + ".mod" : "new.mod")
            }, y.useLinearFrequency = !0, y
        }(),
        ea = function() {
            var a = {};
            return a.sprites = {}, a.getImage = function(b) {
                return a.sprites[b] ? a.sprites[b].canvas : void 0
            }, a.loadImage = function(a, b) {
                var c = new Image;
                c.onload = function() {
                    b && b(c)
                }, c.onerror = function() {}, c.src = a
            }, a
        }(),
        fa = ea,
        q = function() {
            function a(a) {
                if (!a.length) return 0;
                for (var b = 0, c = 0, d = a.length; c < d; c++) b += a[c];
                return b / d
            }
            var b, d, e, f, g, h, i, j, k, l = {},
                m = [],
                n = 1200,
                o = !0,
                p = 0,
                r = 0,
                t = 0,
                u = 0,
                v = 100,
                w = [],
                x = 0,
                y = {},
                z = c("tracks");
            8 == z && (n = 1200), 16 == z && (n = 1600), z >= 32 && (n = 3200), l.init = function(a) {
                U = document.getElementById("canvas"), V = U.getContext("2d");
                var b = window.innerWidth;
                b > n && (b = n), U.width = b, U.height = window.innerHeight, V.fillStyle = "black", V.fillRect(0, 0, U.width, U.height), q.Assets.preLoad(function() {
                    B(), C();
                    var b = c("file");
                    b = b ? decodeURIComponent(b) : "demomods/Tinytune.mod", da.load(b, !0), "undefined" != typeof versionNumber && S.json("package.json?ts=" + (new Date).getTime(), function(a) {
                        
                    	/*
                        if (a && a.version && a.version !== versionNumber) {
                            var b = localStorage.getItem("updatemessageshown") || 0;

                            if (b = parseInt(b, 10), isNaN(b) && (b = 0), window.reload = function() {
                                    localStorage.setItem("updatemessageshown", (new Date).getTime()), window.location.reload(!0)
                                }, (new Date).getTime() - b > 18e5) {
                                var c = document.createElement("div");
                                c.className = "message", c.innerHTML = 'A new version of BassoonTracker is available. Please <a href="#" onclick="reload()">refresh your browser</a>', document.body.appendChild(c)
                            }
                        }
                        */

                    }), a && a()
                })
            }, l.initPlugin = function(a) {
                if (a.canvas) U = a.canvas;
                else {
                    U = document.getElementById("canvas");
                    var b = window.innerWidth;
                    b > n && (b = n), U.width = b, U.height = window.innerHeight
                }
                V = U.getContext("2d"), V.fillStyle = "black", V.fillRect(0, 0, U.width, U.height), X.baseUrl = a.baseUrl, Q.isPlugin = !0, buildNumber = Math.random(), q.Assets.preLoad(function() {
                    B(), C(), X.readSettings(), Q.init(), a.callback && a.callback()
                })
            }, l.setSize = function(a, b) {
                a > n && (a = n), a == U.width && b == U.height || (V.clearRect(0, 0, U.width, U.height), U.width = a, U.height = b, l.mainPanel.setSize(a, b), h && h.setProperties({
                    width: a,
                    height: b
                }), o = !0)
            };
            var B = function() {
                    var a = fa.getImage("font");
                    b = ha(), b.generate({
                        image: a,
                        startX: 1,
                        startY: 1,
                        charWidth: 6,
                        charHeight: 6,
                        spaceWidth: 6,
                        margin: 0,
                        charsPerLine: 42,
                        chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890.+-_#>",
                        onlyUpperCase: !0
                    }), window.fontSmall = b, d = ha(), d.generate({
                        image: a,
                        startX: 1,
                        startY: 110,
                        charWidth: 8,
                        charHeight: 8,
                        spaceWidth: 8,
                        margin: 1,
                        charsPerLine: 26,
                        lineSpacing: 1,
                        chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789↑↓-#:.!©_?;()=/+<>&[]{}\\*%$'\"`°,",
                        onlyUpperCase: !0
                    }), d.generateColor("green", "rgba(80, 140, 0,0.9)"), d.generateColor("orange", "rgba(161, 82, 0,0.9)"), window.fontMed = d, e = ha(), e.generate({
                        image: a,
                        startX: 1,
                        startY: 10,
                        charWidth: 11,
                        charHeight: 11,
                        spaceWidth: 11,
                        margin: 1,
                        charsPerLine: 20,
                        onlyUpperCase: !0
                    }), window.fontBig = e, f = ha(), f.generate({
                        image: a,
                        startX: 1,
                        startY: 145,
                        charHeight: 12,
                        spaceWidth: 4,
                        margin: 1,
                        charsPerLine: [26, 26, 40],
                        lineSpacing: 0,
                        chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890#©_-&\"'()!.,?+=*$/\\;:[]{}",
                        charWidth: "888888883888998888888899987777757735739777757578987777777777778868864553348767888435555",
                        onlyUpperCase: !1,
                        debug: !0
                    }), window.fontFT = f, g = ha(), g.generate({
                        image: a,
                        startX: 1,
                        startY: 184,
                        charHeight: 10,
                        spaceWidth: 5,
                        margin: 0,
                        charsPerLine: [26, 26, 10],
                        lineSpacing: 0,
                        chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
                        charWidth: "6666556625656666666666666655555455245365555454566555",
                        onlyUpperCase: !1
                    }), window.fontCondensed = g;
                    var c = ha();
                    c.generate({
                        image: a,
                        startX: 2,
                        startY: 208,
                        charHeight: 8,
                        charWidth: 4,
                        spaceWidth: 4,
                        margin: 0,
                        charsPerLine: [45],
                        lineSpacing: 0,
                        chars: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_.-#+><↑↓",
                        onlyUpperCase: !0
                    }), c.generateColor("green", "rgba(80, 140, 0,0.9)"), c.generateColor("orange", "rgba(161, 82, 0,0.9)"), window.fontSuperCondensed = c;
                    var h = ha();
                    h.generate({
                        image: a,
                        startX: 107,
                        startY: 68,
                        charWidth: 8,
                        charHeight: 13,
                        spaceWidth: 8,
                        margin: 0,
                        charsPerLine: 20,
                        chars: " 0123456789-"
                    }), window.fontLed = h;
                    var i = ha();
                    i.generate({
                        image: a,
                        startX: 9,
                        startY: 82,
                        charWidth: 14,
                        charHeight: 22,
                        spaceWidth: 8,
                        margin: 0,
                        charsPerLine: 11,
                        chars: " 0123456789"
                    }), window.fontLedBig = i;
                    var j = ha();
                    j.generate({
                        image: a,
                        startX: 1,
                        startY: 216,
                        charHeight: 9,
                        spaceWidth: 5,
                        margin: 0,
                        charsPerLine: [40],
                        lineSpacing: 0,
                        chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890():-",
                        charWidth: "7777667736768777877778887746666666664434",
                        onlyUpperCase: !0
                    }), window.fontDark = j, q.Assets.init(), q.mainPanel = q.MainPanel(), m.push(q.mainPanel), ia.init()
                },
                C = function(a) {
                    var b = !0;
                    if (da.isPlaying()) {
                        var c = da.getStateAtTime(O.context.currentTime + .01);
                        c && (c.patternPos != y.patternPos && (da.setCurrentPatternPos(c.patternPos), y.patternPos = c.patternPos), c.songPos != y.songPos && (da.setCurrentSongPosition(c.songPos), y.songPos = c.songPos))
                    }
                    p && (r++, b = r > p);
                    var d = O.context ? O.context.currentTime : 0;
                    b && (r = 0, N.trigger(s.screenRefresh), o && (m.forEach(function(a) {
                        a.needsRendering && a.render()
                    }), N.trigger(s.screenRender), h && (h.render(), o = !1))), d && (t = t || d, u++, d > t + 1 && (i = u / (d - t), v = Math.min(v, i), t = d, u = 0, w.push(i), w.length > 20 && w.shift(), N.trigger(s.second))), window.requestAnimationFrame(C)
                };
            return l.setModalElement = function(a) {
                h = a
            }, l.getModalElement = function() {
                return h
            }, l.removeModalElement = function() {
                h = void 0, q.mainPanel.refresh(), o = !0, window.requestAnimationFrame(C)
            }, l.setSelection = function(a) {
                j = a, k = j
            }, l.getSelection = function() {
                return j
            }, l.clearSelection = function() {
                if (j) {
                    var a = j(A.RESET);
                    a && (j = void 0)
                }
            }, l.copySelection = function(a) {
                j && (j(A.COPY), a && j(A.RESET)), j = void 0
            }, l.cutSelection = function(a) {
                j && (j(A.CUT), a && j(A.RESET)), j = void 0
            }, l.pasteSelection = function(a) {
                !j && k && (j = k)(A.POSITION), j && (j(A.PASTE), a && j(A.RESET)), j = void 0
            }, l.showContextMenu = function(a) {
                N.trigger(s.showContextMenu, a)
            }, l.hideContextMenu = function() {
                N.trigger(s.hideContextMenu)
            }, l.getChildren = function() {
                return m
            }, l.getEventElement = function(a, b) {
                for (var c = void 0, d = 0, e = m.length; d < e; d++) {
                    var f = m[d];
                    if (f.isVisible() && f.containsPoint(a, b)) {
                        c = f;
                        break
                    }
                }
                return c && c.children && c.children.length && (c = c.getElementAtPoint(a, b)), c
            }, l.getInternalPoint = function(a, b, c) {
                for (var d = {
                        left: 0,
                        top: 0
                    }; c.parent;) d.left += c.left, d.top += c.top, c = c.parent;
                return {
                    x: a - d.left,
                    y: b - d.top
                }
            }, l.setLoading = function() {
                l.setStatus("Loading", !0), N.trigger(s.songLoading)
            }, l.setStatus = function(a, b) {
                N.trigger(s.statusChange, {
                    status: a,
                    showSpinner: !!b
                })
            }, l.setInfo = function(a, b, c) {
                N.trigger(s.statusChange, {
                    info: a,
                    source: b,
                    url: c
                })
            }, l.stats = function() {
                return {
                    fps: i,
                    minFps: v,
                    averageFps: a(w),
                    fpsList: w,
                    skipRenderSteps: p
                }
            }, l.children = m, l.getAverageFps = function() {
                return w.length > 2 ? a(w) : 60
            }, l.resetAverageFps = function() {
                var a = w.pop();
                w = a ? [a] : []
            }, l.skipFrame = function(a) {
                p = a, M.skipFrame = a, N.trigger(s.skipFrameChanged, p)
            }, l.getSkipFrame = function() {
                return p
            }, N.on(s.clockEventExpired, function() {
                var a = (new Date).getTime();
                a - x > 2e3 && (T.warn("throttling back"), p < 4 ? l.skipFrame(p + 1) : T.warn("Browser can't keep up"), x = a)
            }), l
        }();
    q.buttonGroup = function(a, b) {
        var c = q.panel();
        c.hide();
        var d = q.scale9Panel(0, 0, 20, 20, q.Assets.panelDarkGreyScale9);
        d.ignoreEvents = !0, c.addChild(d);
        var e = q.label({
            label: a,
            font: fontSmall,
            width: 60,
            top: 1
        });
        c.addChild(e);
        var f = [];
        return b.forEach(function(a) {
            if ("number" === a.type) {
                var b = q.numberDisplay();
                b.setValue(a.value)
            } else b = q.Assets.generate("buttonLight"), b.setLabel(a.label), b.onClick = a.onClick;
            b.widthParam = a.width || 100, c.addChild(b), f.push(b), a.onSamplePropertyChange && N.on(s.samplePropertyChange, function(c) {
                a.onSamplePropertyChange(b, c)
            })
        }), c.onResize = function() {
            d.setSize(c.width, 18);
            var a = 20,
                b = (c.height - a - 2) / 4,
                e = c.width,
                g = 0;
            f.forEach(function(c, d) {
                c.setProperties({
                    width: Math.floor(e * c.widthParam / 100),
                    height: b,
                    left: Math.floor(g * e / 100),
                    top: a
                }), g += c.widthParam, g > 95 && (g = 0, a += b)
            })
        }, c
    }, q.app_patternView = function(a, b, c, d) {
        function e(a, b, c) {
            if (da.inFTMode()) var d = "i" + a.index + "." + t.charWidth;
            else d = "p" + a.period + "." + t.charWidth;
            if (!G[d]) {
                var e = document.createElement("canvas");
                e.height = C, e.width = 3 * t.charWidth + 2;
                var f = e.getContext("2d");
                if (da.inFTMode())
                    if (a.index) {
                        var g = ba[a.index];
                        97 === a.index && (g = ba[H]);
                        var h = g ? g.name : "???"
                    } else {
                        h = "---";
                        var i = ca[a.period];
                        i && (g = ba[i], g && (h = g.name))
                    }
                else i = Z[a.period], h = i ? i.name : "---";
                t.write(f, h, 0, 0, 0), G[d] = e
            }
            y.ctx.drawImage(G[d], b, c)
        }

        function f(a, b, c) {
            b += 3 * t.charWidth + 4;
            var d = "n" + a.instrument + "." + (u ? a.volumeEffect : "") + "." + a.effect + "." + a.param + "." + t.charWidth;
            if (!I[d]) {
                var e = document.createElement("canvas");
                e.height = C, e.width = 7 * t.charWidth + 10;
                var f = e.getContext("2d"),
                    g = j(a.instrument, 2, "0");
                "00" == g && (g = "..");
                var h = 0;
                if (t.write(f, g, h, 0, 0, "green"), u) {
                    h += 2 * t.charWidth + 4;
                    var i = a.volumeEffect || 0;
                    if (i && (i -= 16), i < 80) g = j(i, 2, "0");
                    else {
                        var l = (i >> 4).toString(16).toUpperCase(),
                            m = (15 & i).toString(16).toUpperCase(),
                            n = {
                                5: "-",
                                6: "+",
                                7: "↓",
                                8: "↑",
                                9: "S",
                                A: "V",
                                B: "P",
                                C: "<",
                                D: ">",
                                E: "M"
                            };
                        l = n[l] || l, g = l + m
                    }
                    a.volumeEffect || (g = ".."), t.write(f, g, h, 0, 0)
                }
                h += 2 * t.charWidth + 4, g = a.effect > 15 ? k(a.effect) : j(a.effect), g += j(a.param, 2, "0"), "000" === g && (g = "..."), t.write(f, g, h, 0, 0, "orange"), I[d] = e
            }
            y.ctx.drawImage(I[d], b, c)
        }

        function g(a, b, c, d, e) {
            if (da.isPlaying() && a && a.period && Y[d] !== e) {
                var f = 100;
                if (12 === a.effect) f = 100 * a.param / 64;
                else {
                    var g = da.getInstrument(a.instrument);
                    g && (f = 100 * g.sample.volume / 64)
                }
                X[d] = f, Y[d] = e
            }
            if (X[d]) {
                v = !0;
                var h = X[d] * _ / 100,
                    i = 100 * h / _;
                if ("colour" === M.vubars) {
                    var j = fa.getImage("vubar");
                    y.ctx.drawImage(j, 0, 100 - i, 26, i, b, c - h, 10, h)
                } else "trans" === M.vubars && (y.ctx.fillStyle = "rgba(120,190,255,0.3)", y.ctx.fillRect(b, c - h, 10, h));
                X[d] -= $, X[d] < 0 && (X[d] = 0)
            }
        }

        function h(a, b, c) {
            var d = "" + a;
            a < 10 && (d = "0" + d);
            var e = d + "." + t.charWidth;
            if (!J[e]) {
                var f = document.createElement("canvas");
                f.height = C, f.width = 3 * t.charWidth;
                var g = f.getContext("2d"),
                    h = !1;
                a % 4 === 0 && (h = "orange"), t.write(g, d, 0, 0, 0, h), J[e] = f
            }
            y.ctx.drawImage(J[e], b, c)
        }

        function i(a, b, c, d) {
            t.write(y.ctx, a, b, c, 0, d)
        }

        function j(a, b, c) {
            if (d = a.toString(16).toUpperCase(), b && d.length < b)
                for (c = c || "0"; d.length < b;) d = c + d;
            return d
        }

        function k(a, b, c) {
            if (d = a.toString(36).toUpperCase(), b && d.length < b)
                for (c = c || "0"; d.length < b;) d = c + d;
            return d
        }

        function l() {
            var a = da.getCurrentPatternPos() || 0;
            if (z) {
                var b = 1,
                    c = b,
                    d = y.height - 2,
                    e = d;
                E = 0, r > 1 && (e = Math.floor(z / r * d), e < 12 && (e = 12), E = (d - e) / (r - 1)), a && E && (c = Math.floor(b + E * a)), Q.setProperties({
                    left: y.width - 16,
                    top: c,
                    width: 16,
                    height: e
                })
            }
        }

        function m() {
            var a = y.width,
                b = Math.floor(a / da.getTrackCount() * B),
                c = (a - b) / (da.getTrackCount() - B),
                d = y.height - 20;
            B >= da.getTrackCount() && (d = -200), S.setProperties({
                top: d,
                width: b,
                left: 0 + Math.floor(F * c)
            })
        }

        function n() {
            L = {
                start: [K.start[0], K.start[1]],
                end: [K.end[0], K.end[1]]
            };
            for (var a = 0; a < 2; a++) K.start[a] > K.end[a] && (L.start[a] = K.end[a], L.end[a] = K.start[a])
        }

        function o(a) {
            P ? (K.end = [da.getCurrentPatternPos(), R.getCurrentTrack()], n(), y.refresh()) : (K.start = [a.prev || 0, R.getCurrentTrack()], K.end = [a.current, R.getCurrentTrack()], K.top = K.left = 1e5, n(), P = !0, y.showSelectionUI(), y.refresh())
        }
        var r, t, u, v, w, x, y = q.panel(a, b, c, d),
            z = 0,
            B = 8,
            C = 13,
            D = 0,
            E = 0,
            F = 0,
            G = {},
            I = {},
            J = {},
            K = {},
            L = {},
            O = [],
            P = !1,
            Q = q.scale9Panel(c - 28, 18, 16, d - 3, {
                img: fa.getImage("bar"),
                left: 2,
                top: 2,
                right: 3,
                bottom: 3
            });
        Q.onDragStart = function() {
            da.isPlaying() || (Q.startDragIndex = da.getCurrentPatternPos())
        }, Q.onDrag = function(a) {
            if (!da.isPlaying() && z && E) {
                var b = a.dragY - a.startY,
                    c = Math.floor(Q.startDragIndex + b / E);
                c = Math.min(c, r - 1), c = Math.max(c, 0), da.setCurrentPatternPos(c)
            }
        }, y.addChild(Q), l();
        var S = q.scale9Panel(c - 28, 18, 16, 16, {
            img: fa.getImage("bar"),
            left: 2,
            top: 2,
            right: 3,
            bottom: 3
        });
        S.onDragStart = function() {
            S.startDragIndex = F
        }, S.onDrag = function(a) {
            var b = da.getTrackCount() - B,
                c = a.dragX - a.startX,
                d = y.width - S.width,
                e = Math.floor(c / (d / b));
            y.setHorizontalScroll(S.startDragIndex + e), y.onResize()
        }, y.addChild(S);
        for (var T = [], U = 0, V = da.getTrackCount(); U < V; U++) {
            var W = q.fxPanel(U);
            T.push(W), y.addChild(W)
        }
        var X = [],
            Y = [],
            $ = 5,
            _ = 70;
        return y.setHorizontalScroll = function(a) {
            var b = da.getTrackCount() - B;
            a != F && a >= 0 && a <= b && (F = a, N.trigger(s.patternHorizontalScrollChange, F), m())
        }, y.onResize = function() {
            w = ga.firstTrackOffsetLeft, x = ga.trackMargin, B = ga.visibleTracks;
            var a = y.height,
                b = B < da.getTrackCount();
            b && (a -= 24);
            for (var c = 0; c < B; c++) {
                var d = F + c;
                if (W = T[d], W && W.visible) {
                    var e = w + c * (ga.trackWidth + x);
                    W.setPosition(e, 0), W.setSize(ga.trackWidth, a), W.setLayout(), W.show()
                }
            }
        }, y.render = function() {
            if (y.isVisible()) {
                if (this.needsRendering) {
                    y.clearCanvas();
                    var a = da.getCurrentPattern() || 0,
                        b = da.getCurrentPatternPos() || 0,
                        c = da.getSong();
                    if (!c) return;
                    t = ga.trackFont, r = da.getPatternLength();
                    var d = B < da.getTrackCount(),
                        j = y.height - 30;
                    u = da.inFTMode();
                    var k = u ? 92 : 72,
                        n = 9,
                        o = 28;
                    ga.useCondensedTrackFont && (k = u ? 46 : 36, n = 5, o = 15);
                    var s = 10,
                        A = Math.floor((ga.trackWidth - k) / 2) + s,
                        E = !1;
                    w && (s = 0, A = 0, E = !0), d && (j -= 24), z = Math.ceil(j / C), z % 2 == 0 && z--;
                    var G = Math.floor(z / 2),
                        H = b - G,
                        I = H + z,
                        J = C + 2;
                    D = Math.floor((j + J) / 2);
                    var N = D - G * C + 4,
                        O = D,
                        U = D + J,
                        V = p.darkPanel;
                    if (!V && fa.getImage("panel_dark")) {
                        var W = q.scale9Panel(0, 0, ga.trackWidth, O, {
                            img: fa.getImage("panel_dark"),
                            left: 3,
                            top: 3,
                            right: 2,
                            bottom: 2
                        });
                        p.darkPanel = W.render(!0), V = p.darkPanel
                    }
                    var Y = [];
                    v = !1, _ > O && (_ = O, $ = _ / 10);
                    for (var Z = 0; Z < B; Z++) {
                        var aa = F + Z;
                        if (Y[aa] = !(T[aa] && T[aa].visible)) {
                            var ba = w + Z * (ga.trackWidth + x);
                            y.ctx.drawImage(V, ba, 0, ga.trackWidth, O), y.ctx.drawImage(V, ba, U, ga.trackWidth, O), T[aa] && (T[aa].left = ba)
                        }
                    }
                    var ca = c.patterns[a];
                    if (ca) {
                        y.ctx.fillStyle = da.isRecording() ? "#A50B0F" : "#202E58", y.ctx.fillRect(0, D, y.width - 0, J);
                        var ea, ha = R.getCurrentTrackPosition(),
                            ia = n;
                        E ? (ba = w + (R.getCurrentTrack() - F) * (ga.trackWidth + x), ea = ba + Math.floor((ga.trackWidth - k) / 2) + ha * ia - 1) : ea = w + A + (R.getCurrentTrack() - F) * ga.trackWidth + ha * ia - 1, ha > 0 ? (ea += 2 * ia + 1, ha > 2 && (ea += 2), ha > 4 && u && (ea += 2)) : ia = o, y.ctx.fillStyle = "rgba(220,220,220,.3)", y.ctx.fillRect(ea, D, ia, C + 2), y.ctx.fillStyle = "rgba(200,150,70,.3)";
                        var ja = 8 * t.charWidth + 14;
                        u && (ja += 2 * t.charWidth + 2);
                        for (var Z = H; Z < I; Z++)
                            if (Z >= 0 && Z < da.getPatternLength()) {
                                var ka = ca[Z],
                                    la = N + (Z - H) * C,
                                    ma = !0;
                                la < D && (la -= 3, ma = !1), la > D + C && (la += 3, ma = !1), h(Z, s, la), ma && (h(Z, s, la), h(Z, s, la));
                                for (var na = 0; na < B; na++)
                                    if (aa = na + F, Y[aa] && aa < da.getTrackCount()) {
                                        var pa, qa = ka[aa] || oa();
                                        E ? (ba = w + na * (ga.trackWidth + x), pa = ba + (ga.trackWidth - k >> 1)) : pa = w + A + na * ga.trackWidth, P && Z >= L.start[0] && Z <= L.end[0] && aa >= L.start[1] && aa <= L.end[1] && (K.top = Math.min(K.top, la - 2), K.left = Math.min(K.left, pa - 2), y.ctx.fillRect(pa - 2, la - 2, ja, C)), ma && (e(qa, pa, la), e(qa, pa, la), (da.isPlaying() || X[na] && "none" !== M.vubars) && g(qa, pa - 12, D, na, a + "." + b)), e(qa, pa, la), f(qa, pa, la)
                                    } v && setTimeout(function() {
                                    y.refresh()
                                }, 20)
                            }
                    }
                    for (var na = 0; na < B; na++) aa = na + F, Y[aa] || T[aa].render();
                    for (l(), Q.render(), d && (m(), S.render()), na = 0; na < B; na++) aa = na + F, Y[aa] && (ba = w + na * (ga.trackWidth + x) + 2, i("" + (aa + 1), ba, 2))
                }
                this.needsRendering = !1, y.parentCtx.drawImage(y.canvas, y.left, y.top, y.width, y.height)
            }
        }, y.onMouseWheel = function(a) {
            if (!da.isPlaying()) {
                var b = da.getCurrentPatternPos();
                a.mouseWheels[0] > 0 ? b && da.moveCurrentPatternPos(-1) : b < r - 1 && da.moveCurrentPatternPos(1)
            }
        }, y.onDragStart = function(a) {
            if (S.startDragIndex = F, !da.isPlaying() && (y.startDragPos = da.getCurrentPatternPos(), a.isMeta || da.isRecording())) {
                var b = Math.floor((a.x - ga.firstTrackOffsetLeft - y.left) / (ga.trackWidth + ga.trackMargin)),
                    c = R.getStepsPerTrack();
                R.setCurrentCursorPosition((F + b) * c), q.clearSelection(), y.startDragTrackX = b * (ga.trackWidth + ga.trackMargin) + (ga.firstTrackOffsetLeft + y.left);
                var d = Math.floor((a.y - y.top - y.parent.top - D) / C);
                K.start = [da.getCurrentPatternPos() + d, R.getCurrentTrack()], K.end = K.start, K.top = K.left = 1e5, y.refresh()
            }
        }, y.onDrag = function(a) {
            if (B < da.getTrackCount() && !a.isMeta && !da.isRecording()) {
                var b = da.getTrackCount() - B,
                    c = a.dragX - a.startX,
                    d = y.width - S.width,
                    e = Math.floor(c / (d / b));
                y.setHorizontalScroll(S.startDragIndex - e)
            }
            if (!da.isPlaying()) {
                c = Math.round((a.dragY - a.startY) / C);
                var f = y.startDragPos - c;
                if (f = Math.max(f, 0), f = Math.min(f, r - 1), a.isMeta || da.isRecording()) {
                    P = !0, c = Math.floor((a.dragY - a.startY) / C);
                    var g = Math.floor((a.dragX - y.startDragTrackX) / ga.trackWidth);
                    K.end = [K.start[0] + c, R.getCurrentTrack() + g], n(), y.refresh()
                } else da.setCurrentPatternPos(f)
            }
        }, y.onTouchUp = function() {
            P && y.showSelectionUI()
        }, y.onClick = function(a) {
            var b = Math.floor((a.x - ga.firstTrackOffsetLeft - y.left) / (ga.trackWidth + ga.trackMargin)),
                c = R.getStepsPerTrack();
            R.setCurrentCursorPosition((F + b) * c)
        }, y.getStartTrack = function() {
            return F
        }, y.processSelection = function(a) {
            if (y.isVisible()) switch (a) {
                case A.RESET:
                    return P = !1, q.hideContextMenu(), y.refresh(), !0;
                case A.CLEAR:
                    var b = da.getCurrentPatternData();
                    if (b && P)
                        for (var c = L.start[0]; c <= L.end[0]; c++)
                            for (var d = b[c], e = L.start[1]; e <= L.end[1]; e++) {
                                var f = d[e];
                                f && f.clear()
                            }
                    y.refresh();
                    break;
                case A.COPY:
                case A.CUT:
                    O = [];
                    var b = da.getCurrentPatternData();
                    if (b && P)
                        for (var c = L.start[0]; c <= L.end[0]; c++) {
                            var d = b[c];
                            if (d) {
                                for (var g = [], e = L.start[1]; e <= L.end[1]; e++) {
                                    var f = d[e];
                                    f && g.push(f.duplicate())
                                }
                                O.push(g)
                            }
                        }
                    if (a === A.CUT && P)
                        for (var c = L.start[0]; c <= L.end[0]; c++) {
                            var d = b[c];
                            if (d)
                                for (var e = L.start[1]; e <= L.end[1]; e++) {
                                    var f = d[e];
                                    f && f.clear()
                                }
                        }
                    y.refresh();
                    break;
                case A.PASTE:
                    var b = da.getCurrentPatternData();
                    if (b && P && O.length)
                        for (var c = 0; c < O.length; c++) {
                            var d = b[L.start[0] + c],
                                g = O[c];
                            if (d)
                                for (var e = 0; e < g.length; e++) {
                                    var f = d[L.start[1] + e];
                                    f && f.populate(g[e])
                                }
                        }
                    y.refresh();
                    break;
                case A.POSITION:
                    K.start = K.end = [da.getCurrentPatternPos(), R.getCurrentTrack()], n(), P = !0, y.refresh()
            }
        }, y.showSelectionUI = function() {
            q.setSelection(y.processSelection), q.showContextMenu({
                name: "patternActions",
                items: [{
                    label: "Clear",
                    onClick: function() {
                        y.processSelection(A.CLEAR)
                    }
                }, {
                    label: "Cut",
                    onClick: function() {
                        y.processSelection(A.CUT)
                    }
                }, {
                    label: "Copy",
                    onClick: function() {
                        y.processSelection(A.COPY)
                    }
                }, {
                    label: "Paste",
                    onClick: function() {
                        y.processSelection(A.PASTE)
                    }
                }],
                x: K.left + y.left,
                y: K.top + y.top + y.parent.top
            })
        }, N.on(s.patternPosChange, function(a) {
            !ia.isMetaKeyDown() || da.isRecording() || da.isPlaying() || o(a)
        }), N.on(s.cursorPositionChange, function(a) {
            !ia.isMetaKeyDown() || da.isRecording() || da.isPlaying() || o({
                current: da.getCurrentPatternPos(),
                prev: da.getCurrentPatternPos()
            })
        }), N.on(s.trackCountChange, function(a) {
            B < a && (B = a), F = Math.min(F, a - B), F = Math.max(F, 0);
            for (var b = T.length, c = a; b < c; b++) {
                var d = q.fxPanel(b);
                T.push(d), y.addChild(d)
            }
            y.onResize(), y.refresh()
        }), N.on(s.songLoaded, function() {
            y.setHorizontalScroll(0)
        }), N.on(s.visibleTracksCountChange, function() {
            F = 0, y.onResize(), y.refresh()
        }), N.on(s.trackerModeChanged, function() {
            y.refresh()
        }), N.on(s.fxPanelToggle, function(a) {
            if (W = T[a], W.visible) W.hide();
            else {
                var b = y.height,
                    c = B < da.getTrackCount();
                c && (b -= 24), W.setPosition(W.left, 0), W.setSize(ga.trackWidth, b), W.setLayout(), W.show()
            }
            y.refresh()
        }), N.on(s.skipFrameChanged, function(a) {
            $ = 5 * (a + 1)
        }), N.on(s.commandSelectAll, function() {
            y.isVisible() && (q.clearSelection(), K.start = [0, R.getCurrentTrack()], K.end = [da.getCurrentPatternData().length - 1, R.getCurrentTrack()], n(), P = !0, K.top = K.left = 1e5, y.showSelectionUI(), y.refresh())
        }), y
    }, q.app_sidebar = function() {
        var a = q.panel();
        a.setProperties({
            name: "sideButtonPanel"
        });
        var b = q.label();
        b.setProperties({
            label: "DEMOSONGS:",
            font: fontFT
        }), a.addChild(b);
        for (var c = [], d = [{
                label: "Demomusic",
                onClick: function() {
                    da.load("demomods/demomusic.mod")
                }
            }, {
                label: "2unlimitedmagic@.MOD",
                onClick: function() {
                    da.load("demomods/jjj/2unlimitedmagic@.MOD")
                }
            }, {
                label: "PumpUpTheJam_@@.mod",
                onClick: function() {
                    da.load("demomods/jjj/PumpUpTheJam_@@.mod")
                }
            }, {
                label: "old-skool-rave-2__v02renamed_samples.mod",
                onClick: function() {
                    da.load("demomods/jjj/old-skool-rave-2__v02renamed_samples.mod")
                }
            }, {
                label: "prodigy2_nice.mod",
                onClick: function() {
                    da.load("demomods/jjj/prodigy2_nice.mod")
                }
            }, {
                label: "2unlimited_med.MOD",
                onClick: function() {
                    da.load("demomods/jjj/2unlimited_med.MOD")
                }
            }, {
                label: "Probe-Excellate__niceTechnoSamples@.mod",
                onClick: function() {
                    da.load("demomods/jjj/Probe-Excellate__niceTechnoSamples@.mod")
                }
            }, {
                label: "westbam@.MOD",
                onClick: function() {
                    da.load("demomods/jjj/westbam@.MOD")
                }
            }, {
                label: "2unl_no_limit_2_othersmps_mix.mod",
                onClick: function() {
                    da.load("demomods/2unlimited_no_limit_2_othersmps_mix.mod")
                }
            }, {
                label: "Stardust",
                onClick: function() {
                    da.load("demomods/StardustMemories.mod")
                }
            }, {
                label: "Space Debris",
                onClick: function() {
                    da.load("demomods/spacedeb.mod")
                }
            }, {
                label: "Tinytune",
                onClick: function() {
                    da.load("demomods/Tinytune.mod")
                }
            }, {
                label: "Lotus 2",
                onClick: function() {
                    da.load("demomods/lotus20.mod")
                }
            }, {
                label: "Professionaltracker",
                onClick: function() {
                    da.load("demomods/hoffman_and_daytripper_-_professional_tracker.mod")
                }
            }, {
                label: "XM: Ambrozia",
                onClick: function() {
                    da.load("demomods/Ambrozia.xm")
                }
            }, {
                label: "8CHN: AceMan",
                onClick: function() {
                    da.load("demomods/AceMan.mod")
                }
            }, {
                label: "Random MOD",
                onClick: function() {
                    Q.doCommand(t.randomSong)
                }
            }, {
                label: "Random XM",
                onClick: function() {
                    Q.doCommand(t.randomSongXM)
                }
            }], e = 0; e < d.length; e++) {
            var f = d[e],
                g = q.button();
            g.info = f, g.onClick = f.onClick, c[e] = g, a.addChild(g)
        }
        var h = q.button();
        return h.setProperties({
            label: "",
            textAlign: "center",
            background: q.Assets.buttonLightScale9,
            image: fa.getImage("piano"),
            font: window.fontMed
        }), h.onClick = function() {
            Q.doCommand(t.togglePiano)
        }, a.addChild(h), a.onResize = function() {
            b.setSize(a.width, ga.trackControlHeight);
            var f = 30;
            for (h.setProperties({
                    left: 0,
                    top: a.height - f,
                    width: a.width,
                    height: f
                }), e = 0; e < d.length; e++) {
                var g = c[e],
                    i = e * f + b.height,
                    j = 0;
                i > h.top - f && (j = -500), g.setProperties({
                    left: j,
                    top: i,
                    width: a.width,
                    height: f,
                    label: g.info.label,
                    textAlign: "left",
                    background: q.Assets.buttonLightScale9,
                    font: window.fontFT
                })
            }
        }, a.onResize(), a
    }, q.app_songControl = function(a, b, c, d, e) {
        var f = q.element(a, b, c, d, e);
        f.type = "songControl";
        var g = q.radioGroup();
        g.setItems([{
            label: "song",
            active: !0
        }, {
            label: "pattern",
            labels: [{
                width: 10,
                label: "p"
            }, {
                width: 20,
                label: "pat"
            }],
            active: !1
        }]), g.onChange = function(a) {
            da.setPlayType(0 == a ? u.song : u.pattern)
        }, f.addChild(g);
        var h = {};
        h.play = q.Assets.generate("buttonDarkGreen"), h.play.setProperties({
            image: fa.getImage("play_green"),
            activeImage: fa.getImage("play_active_red"),
            activeBackground: q.Assets.buttonDarkRedActiveScale9
        }), h.play.onClick = function() {
            h.play.toggleActive(), da.isPlaying() ? da.stop() : da.getPlayType() == u.song ? da.playSong() : da.playPattern()
        }, h.play.setProperties({
            name: "buttonPlay"
        }), f.addChild(h.play), h.record = q.Assets.generate("buttonDarkRed"), h.record.setProperties({
            image: fa.getImage("record"),
            activeImage: fa.getImage("record_active")
        }), h.record.onClick = function() {
            da.toggleRecord()
        }, h.record.setProperties({
            name: "buttonRecord"
        }), f.addChild(h.record), h.song = q.Assets.generate("buttonDark"), h.song.onClick = function() {
            da.playSong()
        }, h.song.setProperties({
            label: "Song"
        }), f.addChild(h.song), h.pattern = q.Assets.generate("buttonDark"), h.pattern.onClick = function() {
            da.playPattern()
        }, h.pattern.setProperties({
            label: "Pattern"
        }), f.addChild(h.pattern), N.on(s.recordingChange, function(a) {
            h.record.setActive(a)
        }), N.on(s.playingChange, function(a) {
            h.play.setActive(a)
        }), N.on(s.playTypeChange, function(a) {
            a == u.song ? g.setSelectedIndex(0, !0) : g.setSelectedIndex(1, !0)
        });
        var i = ["left", "top", "width", "height", "name", "type", "songPatternSelector"];
        return f.setProperties = function(a) {
            i.forEach(function(b) {
                if ("undefined" != typeof a[b]) switch (b) {
                    default:
                        f[b] = a[b]
                }
            }), f.setSize(f.width, f.height), f.setPosition(f.left, f.top);
            var b = Math.floor(f.width / 3);
            g.setProperties({
                left: 0,
                width: b,
                top: 0,
                height: f.height,
                align: "right"
            }), h.play.setProperties({
                left: b,
                width: b,
                top: 0,
                height: f.height
            }), h.record.setProperties({
                left: 2 * b,
                width: b,
                top: 0,
                height: f.height
            }), "big" == f.songPatternSelector && (g.left = -500, b = Math.floor(f.width / 4) + 1, h.play.setProperties({
                left: 0,
                width: b
            }), h.record.setProperties({
                left: b,
                width: b
            }), h.song.setProperties({
                left: 2 * b,
                width: b,
                top: 0,
                height: f.height
            }), h.pattern.setProperties({
                left: 3 * b,
                width: b,
                top: 0,
                height: f.height
            }))
        }, f.render = function(a) {
            return a = !!a, f.needsRendering && (f.clearCanvas(), "small" == f.songPatternSelector && g.render(), h.play.render(), h.record.render(), "big" == f.songPatternSelector && (h.song.render(), h.pattern.render())), f.needsRendering = !1, a ? f.canvas : void f.parentCtx.drawImage(f.canvas, f.left, f.top, f.width, f.height)
        }, f
    }, q.app_songPatternList = function(a) {
        function b(a) {
            return a = "" + a, a.length < 2 && (a = "0" + a), a
        }
        var c = q.panel(),
            d = q.scale9Panel(0, 0, 0, 0, q.Assets.panelInsetScale9);
        c.addChild(d);
        var e = q.listbox();
        e.setItems([{
            label: "01:00",
            data: 1
        }]), e.onClick = function() {
            var a = e.getItemAtPosition(e.eventX, e.eventY);
            if (a) {
                var b = a.index;
                a !== e.getSelectedIndex() && e.setSelectedIndex(b)
            }
        }, c.addChild(e);
        var f = q.Assets.generate("button20_20");
        f.setLabel("↑"), f.onDown = function() {
            var a = e.getSelectedIndex(),
                b = da.getSong().patternTable[a];
            b++, da.updatePatternTable(a, b), q.ticker.onEachTick4(function() {
                var a = e.getSelectedIndex(),
                    b = da.getSong().patternTable[a];
                b++, da.updatePatternTable(a, b)
            }, 5)
        }, f.onTouchUp = function() {
            q.ticker.onEachTick4()
        }, c.addChild(f);
        var g = q.Assets.generate("button20_20");
        return g.setLabel("↓"), g.onDown = function() {
            var a = e.getSelectedIndex(),
                b = da.getSong().patternTable[a];
            b > 0 && b--, da.updatePatternTable(a, b), q.ticker.onEachTick4(function() {
                var a = e.getSelectedIndex(),
                    b = da.getSong().patternTable[a];
                b > 0 && b--, da.updatePatternTable(a, b)
            }, 5)
        }, g.onTouchUp = function() {
            q.ticker.onEachTick4()
        }, c.addChild(g), c.onResize = function() {
            d.setSize(c.width, c.height), e.setProperties({
                left: 0,
                top: 0,
                width: c.width - 42,
                height: c.height,
                centerSelection: !0,
                onChange: function() {
                    da.setCurrentSongPosition(e.getSelectedIndex(), !0)
                }
            }), g.setPosition(c.width - 22, Math.floor(c.height / 2) - 10), f.setPosition(c.width - 42, g.top)
        }, N.on(s.patternTableChange, function(a) {
            c.setPatternTable(da.getSong().patternTable)
        }), c.setPatternTable = function(a) {
            for (var c = [], d = 0, f = da.getSong().length; d < f; d++) {
                var g = a[d];
                c.push({
                    label: b(d + 1) + ":" + b(g),
                    data: g,
                    index: d
                })
            }
            e.setItems(c)
        }, N.on(s.songLoaded, function(a) {
            c.setPatternTable(a.patternTable)
        }), N.on(s.songPositionChange, function(a) {
            e.setSelectedIndex(a, !0)
        }), c
    }, q.trackControl = function(a, b, c, d, e) {
        function f(a) {
            N.trigger(s.trackStateChange, {
                track: g.track,
                solo: j.solo.isActive,
                mute: j.mute.isActive,
                wasSolo: a
            })
        }
        var g = q.element(a, b, c, d, e);
        g.type = "trackControl", g.track = 0;
        var h, i = "",
            j = {};
        j.solo = q.Assets.generate("buttonDark"), j.solo.setProperties({
            activeImage: fa.getImage("solo.png"),
            activeBackground: q.Assets.buttonDarkGreenActiveScale9
        }), j.solo.onClick = function() {
            var a = j.solo.isActive;
            j.solo.toggleActive(), j.mute.isActive && j.mute.toggleActive(), f(a)
        }, j.solo.setProperties({
            name: "buttonSolo",
            label: "S"
        }), g.addChild(j.solo), j.mute = q.Assets.generate("buttonDark"), j.mute.setProperties({
            activeImage: fa.getImage("mute"),
            activeBackground: q.Assets.buttonDarkRedActiveScale9
        }), j.mute.onClick = function() {
            j.mute.toggleActive(), j.solo.isActive && j.solo.toggleActive(), f()
        }, j.mute.setProperties({
            name: "buttonMute",
            label: "M"
        }), g.addChild(j.mute), j.fx = q.Assets.generate("buttonDark"), j.fx.onClick = function() {
            j.fx.toggleActive(), N.trigger(s.fxPanelToggle, g.track)
        }, j.fx.setProperties({
            name: "buttonFX",
            label: "FX"
        }), g.addChild(j.fx);
        var k = ["left", "top", "width", "height", "name", "type", "track", "solo", "mute", "visible"];
        return g.setProperties = function(a) {
            k.forEach(function(b) {
                if ("undefined" != typeof a[b]) switch (b) {
                    case "solo":
                        j.mute.isActive && j.mute.setActive(!1), j.solo.setActive(a[b]), f();
                        break;
                    case "mute":
                        j.solo.isActive && j.solo.setActive(!1), j.mute.setActive(a[b]), f();
                        break;
                    default:
                        g[b] = a[b]
                }
            }), g.setSize(g.width, g.height), g.setPosition(g.left, g.top);
            var b = Math.floor(g.width / 3) + 1;
            j.solo.setProperties({
                left: 0,
                width: b,
                top: 0,
                height: g.height
            }), j.mute.setProperties({
                left: b - 1,
                width: b,
                top: 0,
                height: g.height
            }), j.fx.setProperties({
                left: 2 * b - 2,
                width: b,
                top: 0,
                height: g.height
            })
        }, g.render = function(a) {
            if (g.isVisible()) return a = !!a, g.needsRendering && (g.clearCanvas(), h ? h.write(g.ctx, i.toUpperCase(), 6, 11, 0) : (g.ctx.fillStyle = "white", g.ctx.fillText(i, 10, 10)), j.solo.render(), j.mute.render(), j.fx.render()), g.needsRendering = !1, a ? g.canvas : void g.parentCtx.drawImage(g.canvas, g.left, g.top, g.width, g.height)
        }, N.on(s.trackScopeClick, function(a) {
            a === g.track && j.mute.onClick()
        }), g
    }, q.visualiser = function() {
        function a() {
            j = [];
            var a = da.getTrackCount(),
                b = d.height;
            da.getTrackCount() > 4 && (a = Math.ceil(da.getTrackCount() / 2), b = d.height / 2);
            for (var c = d.width / a, e = 0; e < da.getTrackCount(); e++) {
                var f = e * c,
                    g = 0;
                e >= a && (f = (e - a) * c, g = d.height - b), j[e] = {
                    left: Math.floor(f),
                    top: Math.floor(g),
                    width: Math.floor(c),
                    height: Math.floor(b),
                    lineLeft: Math.ceil(f + c / 70),
                    lineWidth: Math.floor(c - c / 30)
                }
            }
        }
        var b, c, d = q.panel(),
            e = ["wave", "spectrum", "tracks"],
            f = 2,
            g = e[f],
            h = [],
            i = [],
            j = [],
            k = 256;
        d.ctx.fillStyle = "black", d.ctx.lineWidth = 2, d.ctx.strokeStyle = "rgba(120, 255, 50, 0.5)", d.init = function() {
            function e() {
                var a = O.context.createAnalyser();
                a.smoothingTimeConstant = 0, a.fftSize = k, h.push(a)
            }
            if (O.context) {
                b = O.context.createAnalyser(), b.minDecibels = -90, b.maxDecibels = -10, b.smoothingTimeConstant = .85;
                for (var f = 0; f < da.getTrackCount(); f++) e();
                a()
            }
            c = fa.getImage("oscilloscope"), N.on(s.filterChainCountChange, function(b) {
                for (var c = h.length; c < b; c++) e();
                a(), d.connect()
            }), N.on(s.trackStateChange, function(a) {
                "undefined" != typeof a.track && (i[a.track] = a.mute)
            }), d.needsRendering = !0
        }, d.connect = function(a) {
            if (O.context) {
                a && a.connect(b);
                for (var c = 0; c < da.getTrackCount(); c++) O.filterChains[c].output().connect(h[c])
            }
        }, d.nextMode = function() {
            f++, f >= e.length && (f = 0), g = e[f]
        };
        var l = function() {
            d.ctx.clearRect(0, 0, d.width, d.height), d.ctx.lineWidth = 2, d.ctx.strokeStyle = "rgba(120, 255, 50, 0.5)";
            for (var a, b, e = !O.cutOff, f = 0; f < da.getTrackCount(); f++) {
                var g = h[f],
                    l = j[f],
                    m = i[f];
                if (d.ctx.drawImage(c, l.left, l.top, l.width, l.height), g) {
                    d.ctx.beginPath();
                    var n, o = l.lineLeft,
                        p = l.lineWidth;
                    if (e && !m) {
                        g.fftSize = k, a = g.fftSize, b = new Uint8Array(a), g.getByteTimeDomainData(b);
                        for (var q = p / a, r = 0; r < a; r++) {
                            var s = b[r] / 128;
                            n = s * l.height / 2 + l.top, 0 === r ? d.ctx.moveTo(o, n) : d.ctx.lineTo(o, n), o += q
                        }
                    } else n = l.height / 2 + l.top, d.ctx.moveTo(o, n), d.ctx.lineTo(o + p - 1, n);
                    d.ctx.stroke(), m && (d.ctx.fillStyle = "rgba(34, 49, 85, 0.5)", d.ctx.fillRect(l.left, l.top, l.width, l.height))
                }
            }
            V.drawImage(d.canvas, d.left, d.top)
        };
        return d.render = function() {
            O.context && d.isVisible() && l()
        }, d.init(), d.onResize = function() {
            a()
        }, N.on(s.screenRender, function() {
            d.render()
        }), N.on(s.second, function() {
            if (da.isPlaying()) {
                var a = q.getAverageFps();
                a < 32 && k > 32 && (k >>= 1, k = Math.max(k, 32), q.resetAverageFps())
            }
        }), d.onClick = function(a) {
            if ("tracks" === g)
                for (var b = 0; b < da.getTrackCount(); b++) {
                    var c = j[b],
                        e = a.x - d.left,
                        f = a.y - d.top;
                    if (e > c.left && e < c.left + c.width && f > c.top && f < c.top + c.height) {
                        N.trigger(s.trackScopeClick, b);
                        break
                    }
                }
        }, d
    }, q.vumeter = function() {
        function a() {
            n.width = o.width = i, n.height = o.height = j;
            var a = Math.floor(i / (k + l));
            p.clearRect(0, 0, n.width, n.height), r.clearRect(0, 0, o.width, o.height);
            for (var b = 0; b < a; b++) {
                var d = t,
                    e = u;
                b >= a / 3 && (d = v, e = w), b >= a / 1.5 && (d = x, e = y), p.drawImage(d, b * (k + l), 0, k, j), r.drawImage(e, b * (k + l), 0, k, j)
            }
            c.ctx.fillStyle = "#253352"
        }

        function b(a) {
            for (var b = a.length, c = 128, d = 128, e = 0; e < b; e++) {
                var f = a[e];
                f < c ? c = f : f > d && (d = f)
            }
            return (d - c) / 255
        }
        var c = q.panel();
        c.left = 400, c.top = 7;
        var d, e, f, g, h;
        O.context && (d = O.context.createAnalyser(), d.minDecibels = -90, d.maxDecibels = -10, d.smoothingTimeConstant = .85, e = O.context.createAnalyser(), e.minDecibels = -90, e.maxDecibels = -10, e.smoothingTimeConstant = .85, d.fftSize = 32, e.fftSize = 32, g = d.fftSize, h = new Uint8Array(g));
        var i = 500,
            j = 6,
            k = 10,
            l = 2,
            m = 4,
            n = document.createElement("canvas"),
            o = document.createElement("canvas"),
            p = n.getContext("2d"),
            r = o.getContext("2d"),
            t = fa.getImage("vu_green"),
            u = fa.getImage("vu_green_active"),
            v = fa.getImage("vu_yellow"),
            w = fa.getImage("vu_yellow_active"),
            x = fa.getImage("vu_red"),
            y = fa.getImage("vu_red_active");
        return c.setSize(i, 2 * j + m), a(), c.needsRendering = !0, c.connect = function(a) {
            if (O.context) {
                var b = O.context.createChannelSplitter(2);
                a.connect(b), b.connect(d, 0), b.connect(e, 1), f = !0
            }
        }, c.setProperties = function(b) {
            i = b.width, c.left = b.left, c.setSize(i, 2 * j + m), a()
        }, c.render = function() {
            if (f) {
                d.getByteTimeDomainData(h);
                var a = b(h) * (Math.E - 1);
                e.getByteTimeDomainData(h);
                var g = b(h) * (Math.E - 1);
                c.ctx.fillRect(0, 0, c.width, c.height), c.ctx.drawImage(n, 0, 0), c.ctx.drawImage(n, 0, j + m);
                var k = Math.min(Math.floor(a * i), i),
                    l = Math.min(Math.floor(g * i), i);
                k && c.ctx.drawImage(o, 0, 0, k, j, 0, 0, k, j), l && c.ctx.drawImage(o, 0, 0, l, j, 0, j + m, l, j), V.drawImage(c.canvas, c.left, c.top)
            }
        }, N.on(s.screenRender, function() {
            c.render()
        }), c
    }, q.app_controlPanel = function() {
        var a = q.app_panelContainer(40),
            b = q.app_songControl();
        a.addChild(b);
        var c = q.checkboxbutton({
                label: "File",
                onDown: function() {
                    var a = this.isActive ? "diskop_load" : "topmain";
                    N.trigger(s.showView, a)
                }
            }),
            d = q.checkboxbutton({
                label: "Options",
                onDown: function() {
                    var a = this.isActive ? "options" : "topmain";
                    N.trigger(s.showView, a)
                }
            }),
            e = q.checkboxbutton({
                label: "Sample Edit",
                onDown: function() {
                    var a = this.isActive ? "sample" : "bottommain";
                    N.trigger(s.showView, a)
                }
            });
        a.addChild(c), a.addChild(d), a.addChild(e);
        var f = {
                background: q.Assets.buttonKeyScale9,
                activeBackground: q.Assets.buttonKeyActiveScale9,
                isActive: !1,
                textAlign: "center",
                font: window.fontDark,
                paddingTopActive: 1
            },
            g = q.button(),
            h = q.button();
        g.setProperties(f), g.setLabel("mod"), g.onDown = function() {
            da.setTrackerMode(L.PROTRACKER)
        }, a.addChild(g), h.setProperties(f), h.setLabel("XM"), h.onDown = function() {
            da.setTrackerMode(L.FASTTRACKER)
        }, a.addChild(h);
        var i = [4, 8, 12, 16],
            j = [];
        i.forEach(function(a) {
            j.push(q.button())
        }), j.forEach(function(b, c) {
            b.setProperties(f), b.setLabel("" + i[c]), b.index = c, b.onDown = function() {
                if (!this.isDisabled) {
                    var a = this.index;
                    j.forEach(function(b, c) {
                        b.setActive(c === a)
                    }), ga.setVisibleTracks(i[a])
                }
            }, a.addChild(b)
        });
        var k = q.label();
        k.setProperties({
            label: "Mode",
            labels: [{
                width: 20,
                label: ""
            }, {
                width: 78,
                label: "M"
            }, {
                width: 84,
                label: "Md"
            }, {
                width: 100,
                label: "Mode"
            }],
            font: fontSmall,
            width: 100,
            height: 20,
            textAlign: "right"
        }), a.addChild(k);
        var l = q.label();
        l.setProperties({
            label: "Display",
            labels: [{
                width: 10,
                label: ""
            }, {
                width: 78,
                label: "t"
            }, {
                width: 84,
                label: "tr"
            }, {
                width: 100,
                label: "trck"
            }, {
                width: 120,
                label: "Display"
            }],
            font: fontSmall,
            width: 100,
            height: 20,
            textAlign: "right"
        }), a.addChild(l);
        var m = q.spinBox();
        return m.setProperties({
            name: "Pattern",
            value: da.getTrackCount(),
            max: 32,
            min: 2,
            size: "big",
            onChange: function(a) {
                da.setTrackCount(a)
            }
        }), a.addChild(m), a.onPanelResize = function() {
            a.innerHeight = a.height - 2 * ga.defaultMargin;
            var f = ga.defaultMargin,
                n = ga.defaultMargin;
            if ("2row" === ga.controlPanelButtonLayout) {
                var o = Math.floor((a.innerHeight - ga.defaultMargin) / 2);
                n = a.height - o - ga.defaultMargin, a.innerHeight = o
            }
            b.setProperties({
                left: ga.col1X,
                top: f,
                width: ga.songControlWidth,
                height: a.innerHeight,
                songPatternSelector: "small"
            });
            var p = ga.col1W - 60;
            p = Math.max(p, 120);
            var q = Math.floor((ga.col1W - p) / 2),
                r = ga.col4X + q,
                s = "Sample Edit";
            "1row" !== ga.controlPanelButtonLayout && (p = Math.floor(ga.controlPanelButtonsWidth / 3), q = 0, r = ga.controlPanelButtonsLeft + 2 * p, s = "Sample");
            var t = a.innerHeight;
            c.setProperties({
                left: ga.controlPanelButtonsLeft + 1.5 * q,
                top: n,
                width: p,
                height: t
            }), d.setProperties({
                left: c.left + p + q,
                top: n,
                width: p,
                height: t
            }), e.setProperties({
                left: r,
                top: n,
                width: p,
                height: t,
                label: s
            });
            var u = ga.modeButtonsWidth - 101;
            g.setProperties({
                left: ga.modeButtonsLeft + u,
                top: f,
                width: 51,
                height: 16
            }), h.setProperties({
                left: g.left + g.width - 1,
                top: g.top,
                width: g.width,
                height: g.height
            });
            var v = g.left;
            j.forEach(function(a, b) {
                a.setProperties({
                    left: v,
                    top: g.top + g.height,
                    width: 26,
                    height: g.height
                }), v += a.width - 1, a.setActive(i[b] === ga.visibleTracks), a.setDisabled(i[b] > ga.maxVisibleTracks)
            }), k.setProperties({
                left: ga.modeButtonsLeft,
                top: f + 1,
                width: ga.modeButtonsWidth - 94,
                height: 20
            }), l.setProperties({
                left: k.left,
                top: k.top + g.height,
                width: k.width,
                height: k.height
            }), m.setProperties({
                left: ga.modeButtonsLeft,
                top: f,
                width: ga.TrackCountSpinboxWidth,
                height: a.innerHeight
            })
        }, a.onPanelResize(), a.renderInternal = function() {
            "2row" !== ga.controlPanelButtonLayout && (a.ctx.drawImage(fa.getImage("line_ver"), ga.controlPanelButtonsLeft - 2, 0, 2, a.height - 1), a.ctx.drawImage(fa.getImage("line_ver"), ga.modeButtonsLeft - 2, 0, 2, a.height - 1), "condensed" !== ga.controlPanelButtonLayout && (a.ctx.drawImage(fa.getImage("line_ver"), ga.col4X - 2, 0, 2, a.height - 1), a.ctx.translate(.5, .5), a.ctx.strokeStyle = "rgba(255, 255, 255, 0.3)", a.ctx.lineWidth = 1, a.ctx.beginPath(), a.ctx.moveTo(ga.col2X + 10, 10), a.ctx.lineTo(ga.col2X + 10, 20), a.ctx.lineTo(ga.col4X - 14, 20), a.ctx.lineTo(ga.col4X - 14, 10), a.ctx.moveTo(ga.col4X + 10, 30), a.ctx.lineTo(ga.col4X + 10, 20), a.ctx.lineTo(ga.col5X - 14, 20), a.ctx.lineTo(ga.col5X - 14, 30), a.ctx.stroke(), a.ctx.setTransform(1, 0, 0, 1, 0, 0), c.render(), d.render(), e.render()))
        }, N.on(s.showView, function(a) {
            switch (a) {
                case "diskop_load":
                case "diskop_save":
                case "diskop_samples_load":
                case "diskop_modules_load":
                case "diskop_samples_save":
                case "diskop_modules_save":
                    c.setActive(!0), d.setActive(!1);
                    break;
                case "options":
                    c.setActive(!1), d.setActive(!0);
                    break;
                case "topmain":
                    c.setActive(!1), d.setActive(!1);
                    break;
                case "main":
                    c.setActive(!1), d.setActive(!1), e.setActive(!1);
                    break;
                case "bottommain":
                    e.setActive(!1);
                    break;
                case "sample":
                    e.setActive(!0)
            }
        }), N.on(s.trackerModeChanged, function(a) {
            g.setActive(a === L.PROTRACKER), h.setActive(a === L.FASTTRACKER), ga.setLayout()
        }), N.on(s.trackCountChange, function(a) {
            m.setValue(a, !0)
        }), N.on(s.songLoaded, function(b) {
            var c = b.channels;
            c > 12 && c < 16 && (c = 16), c > 8 && c < 12 && (c = 12), c > 4 && c < 8 && (c = 8), c = Math.min(c, ga.maxVisibleTracks), ga.setVisibleTracks(c), a.onPanelResize()
        }), a
    };
    var ga = function() {
        var a = {};
        return a.defaultMargin = 4, a.setLayout = function(b, c) {
            if (a.width = b || a.width, a.height = c || a.height, a.col1W = Math.floor((a.width - 6 * a.defaultMargin - 3) / 5), a.col2W = 2 * a.col1W + a.defaultMargin, a.col3W = 3 * a.col1W + 2 * a.defaultMargin, a.col4W = 4 * a.col1W + 3 * a.defaultMargin, a.col5W = 5 * a.col1W + 4 * a.defaultMargin, a.marginLeft = Math.floor((a.width - a.col5W) / 2), a.marginRight = a.width - a.marginLeft - a.col5W, a.col1X = a.marginLeft, a.col2X = a.col1X + a.defaultMargin + a.col1W, a.col3X = a.col2X + a.defaultMargin + a.col1W, a.col4X = a.col3X + a.defaultMargin + a.col1W, a.col5X = a.col4X + a.defaultMargin + a.col1W, a.colHalfW = Math.floor(a.col1W / 2), a.col31W = Math.floor((a.width - 4 * a.defaultMargin - 5) / 3), a.col32W = 2 * a.col31W + a.defaultMargin, a.col31X = a.col1X, a.col32X = a.col31X + a.defaultMargin + a.col31W, a.col33X = a.col32X + a.defaultMargin + a.col31W, a.prefered = "col5", a.controlPanelHeight = 40, a.controlPanelLayout = "full", a.controlPanelButtonLayout = "1row", a.controlPanelButtonsLeft = a.col2X, a.controlPanelButtonsWidth = a.col3W, a.modeButtonsWidth = a.col1W, a.modeButtonsLeft = a.col5X, a.songControlWidth = a.col1W, a.TrackCountSpinboxWidth = 60, a.trackWidth = a.col1W, a.trackMargin = a.defaultMargin, a.visibleTracks = a.visibleTracks || 4, a.infoPanelHeight = 24, a.trackControlHeight = 32, a.analyserHeight = 66, a.pianoHeight = 200, a.trackFont = fontMed, a.useCondensedTrackFont = !1, a.maxVisibleTracks = 16, a.width < 945 && (a.maxVisibleTracks = 12), a.width < 725 && (a.maxVisibleTracks = 8), a.width < 512 && (a.maxVisibleTracks = 4), a.visibleTracks > a.maxVisibleTracks) return void a.setVisibleTracks(a.maxVisibleTracks);
            a.width < 820 && (a.controlPanelButtonLayout = "condensed", a.modeButtonsWidth = a.col1W + a.colHalfW, a.modeButtonsLeft = a.col5X - a.colHalfW, a.songControlWidth = a.modeButtonsWidth, a.controlPanelButtonsLeft = a.col2X + a.colHalfW, a.controlPanelButtonsWidth = a.col2W), a.width < 650 && (a.controlPanelButtonLayout = "2row", a.controlPanelHeight = 80, a.controlPanelButtonsLeft = a.col1X, a.controlPanelButtonsWidth = a.col5W, a.controlPanelButtonsButton = Math.floor(a.controlPanelButtonsWidth / 3), a.modeButtonsLeft = 2 * a.controlPanelButtonsButton - a.TrackCountSpinboxWidth, a.modeButtonsWidth = a.controlPanelButtonsButton + a.TrackCountSpinboxWidth + a.defaultMargin, a.songControlWidth = a.col2W + a.colHalfW + a.defaultMargin), a.width < 620 && (a.prefered = "col3"), a.height < 800 && (a.pianoHeight = 150), a.height < 650 && (a.pianoHeight = 100);
            var d = a.defaultMargin * (a.visibleTracks - 1);
            a.showSideBar = a.visibleTracks < 5 && a.width > 620;
            var e = a.showSideBar ? a.col4W : a.col5W;
            a.trackWidth = Math.floor((e - d) / a.visibleTracks), a.firstTrackOffsetLeft = 0, a.trackWidth < 125 && (a.firstTrackOffsetLeft = 18, a.trackWidth = Math.floor((e - d - a.firstTrackOffsetLeft) / a.visibleTracks));
            var f = da.inFTMode() ? 100 : 78;
            a.trackWidth < f && (a.trackFont = fontSuperCondensed, a.useCondensedTrackFont = !0)
        }, a.setVisibleTracks = function(b) {
            a.visibleTracks = b, a.setLayout(), N.trigger(s.visibleTracksCountChange, b)
        }, a
    }();
    q.app_mainPanel = function() {
        function a() {
            e = "patterndata", b = q.radioGroup(), b.setProperties({
                align: "right",
                size: "med",
                divider: "line",
                highLightSelection: !0,
                zIndex: 1
            }), b.setItems([{
                label: "About",
                active: !1
            }, {
                label: "Song data",
                labels: [{
                    width: 30,
                    label: "song"
                }],
                active: !1
            }, {
                label: "Pattern data",
                labels: [{
                    width: 40,
                    label: "pattern"
                }],
                active: !0
            }, {
                label: "Instruments",
                labels: [{
                    width: 30,
                    label: "Instr"
                }],
                active: !1
            }]), b.onChange = function(a) {
                e = "about", 1 === a && (e = "songdata"), 2 === a && (e = "patterndata"), 3 === a && (e = "instruments"), c.onPanelResize()
            }, c.addChild(b), c.sortZIndex()
        }
        var b, c = q.app_panelContainer(160),
            d = "",
            e = "",
            f = function() {
                var a = fa.getImage("steffest"),
                    b = "undefined" == typeof versionNumber ? "dev" : versionNumber;
                if (b.indexOf(".") > 0) {
                    var c = b.split(".");
                    b = c[0] + "." + c[1]
                }
                b = "Version " + b;
                var d = a.getContext("2d");
                return fontSmall.write(d, b, 44, 4), fontSmall.write(d, "By", 44, 13), a
            },
            g = q.button();
        g.setProperties({
            background: q.Assets.panelInsetScale9,
            activeBackground: q.Assets.buttonDarkScale9,
            image: fa.getImage("logo_grey_70"),
            activeImage: fa.getImage("logo_colour_70")
        }), g.onDown = function() {
            g.toggleActive()
        }, c.addChild(g);
        var h = q.button();
        h.setProperties({
            background: q.Assets.panelInsetScale9,
            activeBackground: q.Assets.panelInsetScale9,
            image: fa.getImage("tracker"),
            activeImage: f()
        }), h.onDown = function() {
            h.toggleActive()
        }, c.addChild(h);
        var i = q.inputbox({
            name: "modName",
            onChange: function(a) {
                da.getSong().title = a, q.setInfo(a)
            }
        });
        c.addChild(i);
        var j = q.listbox();
        j.setItems([{
            label: "loading ...",
            data: 1
        }]), c.addChild(j), j.onClick = function(a) {
            ia.setFocusElement(j);
            var b = j.getItemAtPosition(j.eventX, j.eventY);
            b && da.setCurrentInstrumentIndex(b.data)
        };
        var k = q.app_songPatternList();
        c.addChild(k);
        var l = window.fontFT,
            m = q.scale9Panel(0, 0, 0, 0, q.Assets.panelInsetScale9);
        c.addChild(m);
        var n = q.scale9Panel(0, 0, 0, 0, q.Assets.panelInsetScale9);
        c.addChild(n);
        var o = q.spinBox();
        o.setProperties({
            name: "Pattern",
            label: "Pattern",
            labels: [{
                width: 10,
                label: "Pat."
            }, {
                width: 140,
                label: "Pattern"
            }],
            value: 0,
            max: 100,
            min: 0,
            font: l,
            onChange: function(a) {
                da.setCurrentPattern(a)
            }
        }), c.addChild(o);
        var p = q.spinBox({
            name: "Instrument",
            label: "Instrument",
            labels: [{
                width: 10,
                label: "Ins."
            }, {
                width: 123,
                label: "Instr"
            }, {
                width: 160,
                label: "Instrument"
            }],
            value: 1,
            max: 31,
            min: 1,
            font: l,
            onChange: function(a) {
                da.setCurrentInstrumentIndex(a)
            }
        });
        c.addChild(p);
        var r = q.spinBox({
            name: "SongLength",
            label: "Song length",
            labels: [{
                width: 10,
                label: "Len."
            }, {
                width: 138,
                label: "Length"
            }, {
                width: 156,
                label: "Song len"
            }, {
                width: 178,
                label: "Song length"
            }],
            value: 1,
            max: 200,
            min: 1,
            font: l,
            onChange: function(a) {
                var b = da.getSong().length;
                b > a ? da.removeFromPatternTable() : b < a && da.addToPatternTable()
            }
        });
        c.addChild(r);
        var t = q.spinBox({
            name: "SongRepeat",
            label: "Song repeat",
            labels: [{
                width: 10,
                label: "Rep."
            }, {
                width: 138,
                label: "Repeat"
            }, {
                width: 156,
                label: "Song rep"
            }, {
                width: 178,
                label: "Song repeat"
            }],
            value: 1,
            max: 200,
            min: 1,
            font: l,
            onChange: function(a) {
                da.getSong().restartPosition = a
            }
        });
        c.addChild(t);
        var u = q.spinBox({
            name: "PatternLength",
            label: "Pattern length",
            labels: [{
                width: 10,
                label: "Plen"
            }, {
                width: 138,
                label: "Pat len"
            }, {
                width: 166,
                label: "Pattern len"
            }, {
                width: 188,
                label: "Pattern length"
            }],
            value: 64,
            max: 128,
            min: 1,
            font: l,
            onChange: function(a) {
                da.setPatternLength(a)
            }
        });
        c.addChild(u);
        var v = q.spinBox({
            name: "BPMLength",
            label: "BPM",
            value: 1,
            max: 400,
            min: 1,
            font: l,
            onChange: function(a) {}
        });
        c.addChild(v);
        var w = q.DiskOperations();
        w.setProperties({
            name: "diskoperations",
            zIndex: 100
        }), c.addChild(w), q.diskOperations = w;
        var x = q.OptionsPanel();
        return x.setProperties({
            name: "options",
            zIndex: 100
        }), c.addChild(x), c.onPanelResize = function() {
            var d = 20,
                f = ga.defaultMargin,
                l = d + 2 * f,
                q = 50,
                s = q + f + f,
                y = c.height - q - 4 * f,
                z = 28,
                A = ga.col1W - 2;
            if ("col3" === ga.prefered) {
                b || a(), y = c.height - 2 * f, s = f, A = ga.col32W - 2, z = 28, b.show(), b.setDimensions({
                    left: ga.col31X,
                    width: ga.col31W,
                    top: f,
                    height: y,
                    visible: !0
                }), i.setDimensions({
                    left: ga.col32X,
                    width: ga.col32W,
                    top: f,
                    height: d
                }), j.setDimensions({
                    left: ga.col32X,
                    width: ga.col32W,
                    top: l,
                    height: c.height - l - 2 * f
                });
                var B = {
                    left: ga.col32X,
                    width: ga.col32W,
                    top: s,
                    height: y
                };
                k.setDimensions(B), m.setDimensions(B), n.setDimensions(B), g.setDimensions({
                    left: ga.col32X,
                    width: ga.col32W,
                    top: s,
                    height: Math.floor(y / 2)
                }), h.setDimensions({
                    left: ga.col32X,
                    width: ga.col32W,
                    top: Math.floor(y / 2) + 1,
                    height: Math.floor(y / 2)
                });
                var C = ga.col32X;
                v.setDimensions({
                    left: C,
                    top: m.top + 3,
                    width: A,
                    height: z
                }), r.setDimensions({
                    left: C,
                    top: m.top + 3 + z,
                    width: A,
                    height: z
                }), t.setDimensions({
                    left: C,
                    top: m.top + 3 + 2 * z,
                    width: A,
                    height: z
                }), t.hide(), o.setDimensions({
                    left: C,
                    top: m.top + 3 + 2 * z,
                    width: A,
                    height: z
                }), u.setDimensions({
                    left: C,
                    top: m.top + 3 + 3 * z,
                    width: A,
                    height: z
                }), p.setDimensions({
                    left: C,
                    top: m.top + 3 + 4 * z,
                    width: A,
                    height: z
                }), g.toggle("about" === e), h.toggle("about" === e), i.toggle("instruments" === e), j.toggle("instruments" === e), k.toggle("songdata" === e), m.toggle("patterndata" === e), v.toggle("patterndata" === e), r.toggle("patterndata" === e), o.toggle("patterndata" === e), u.toggle("patterndata" === e), p.toggle("patterndata" === e), n.hide()
            } else b && b.hide(), g.show(), h.show(), i.show(), j.show(), k.show(), m.show(), n.show(), v.show(), r.show(), o.show(), u.show(), p.show(), t.show(), g.setDimensions({
                left: ga.col1X,
                top: f,
                width: ga.col2W,
                height: q
            }), h.setDimensions({
                left: ga.col3X,
                top: f,
                width: ga.col1W,
                height: q
            }), i.setDimensions({
                left: ga.col4X,
                width: ga.col2W,
                top: f,
                height: d
            }), j.setDimensions({
                left: ga.col4X,
                width: ga.col2W,
                top: l,
                height: c.height - l - 2 * f
            }), k.setDimensions({
                left: ga.col1X,
                width: ga.col1W,
                top: s,
                height: y
            }), m.setDimensions({
                left: ga.col2X,
                width: ga.col1W,
                top: s,
                height: y
            }), n.setDimensions({
                left: ga.col3X,
                width: ga.col1W,
                top: s,
                height: y
            }), v.setDimensions({
                left: ga.col2X,
                top: m.top + 3,
                width: A,
                height: z
            }), r.setDimensions({
                left: ga.col2X,
                top: m.top + 3 + z,
                width: A,
                height: z
            }), t.setDimensions({
                left: ga.col2X,
                top: m.top + 3 + 2 * z,
                width: A,
                height: z
            }), o.setDimensions({
                left: ga.col3X,
                top: m.top + 3,
                width: A,
                height: z
            }), u.setDimensions({
                left: ga.col3X,
                top: m.top + 3 + z,
                width: A,
                height: z
            }), p.setDimensions({
                left: ga.col3X,
                top: m.top + 3 + 2 * z,
                width: A,
                height: z
            });
            w.setSize(c.width, c.height), x.setSize(c.width, c.height)
        }, c.onPanelResize(), c.getCurrentView = function() {
            return d
        }, N.on(s.songLoading, function() {
            i.setValue("Loading ...", !0)
        }), N.on(s.songPropertyChange, function(a) {
            i.setValue(a.title, !0), r.setValue(a.length, !0), p.setMax(da.getMaxInstruments()), t.setMax(a.length), a.restartPosition && a.restartPosition > a.length && (a.restartPosition = a.length), t.setValue(a.restartPosition || 1)
        }), N.on(s.songBPMChange, function(a) {
            v.setValue(a, !0)
        }), N.on(s.instrumentChange, function(a) {
            j.setSelectedIndex(a - 1), p.setValue(a, !0)
        }), N.on(s.instrumentNameChange, function(a) {
            var b = da.getInstrument(a);
            if (b)
                for (var c = j.getItems(), d = 0, e = c.length; d < e; d++)
                    if (c[d].data == a) {
                        c[d].label = a + " " + b.name, N.trigger(s.instrumentListChange, c);
                        break
                    }
        }), N.on(s.instrumentListChange, function(a) {
            j.setItems(a)
        }), N.on(s.patternChange, function(a) {
            o.setValue(a, !0), u.setValue(da.getPatternLength(), !0)
        }), N.on(s.trackerModeChanged, function(a) {
            u.setDisabled(a === L.PROTRACKER), p.setMax(da.getMaxInstruments())
        }), N.on(s.showView, function(a) {
            switch (a) {
                case "diskop_load":
                case "diskop_save":
                case "diskop_samples_load":
                case "diskop_modules_load":
                case "diskop_samples_save":
                case "diskop_modules_save":
                    w.setView(a), w.show(), x.hide(), d = a, c.refresh();
                    break;
                case "options":
                    w.hide(), x.show(!0), d = a, c.refresh();
                    break;
                case "topmain":
                case "main":
                    w.hide(), x.hide(), d = "", c.refresh()
            }
        }), c
    }, q.app_menu = function(a) {
        var b = q.app_panelContainer(32),
            c = q.scale9Panel(5, 0, 20, 26, {
                img: fa.getImage("menu"),
                left: 4,
                top: 0,
                right: 40,
                bottom: 0
            });
        b.addChild(c);
        var d = q.menu(5, 0, b.width, 26, a);
        b.addChild(d), d.setItems([{
            label: "File",
            subItems: [{
                label: "New",
                command: t.newFile
            }, {
                label: "Load Module",
                command: t.openFile
            }, {
                label: "Save Module",
                command: t.saveFile
            }, {
                label: "Open Random MOD Song",
                command: t.randomSong
            }, {
                label: "Open Random XM Song",
                command: t.randomSongXM
            }]
        }, {
            label: "Edit",
            subItems: [{
                label: "Cut",
                command: t.cut
            }, {
                label: "Copy",
                command: t.copy
            }, {
                label: "Paste",
                command: t.paste
            }, {
                label: "Clear Track",
                command: t.clearTrack
            }, {
                label: "Clear Pattern",
                command: t.clearPattern
            }, {
                label: "Clear Song",
                command: t.clearSong
            }, {
                label: "Clear Instruments",
                command: t.clearInstruments
            }, {
                label: "Render Pattern 2 Sample",
                command: t.pattern2Sample
            }]
        }, {
            label: "View",
            subItems: [{
                label: "Main",
                command: t.showMain
            }, {
                label: "Options",
                command: t.showOptions
            }, {
                label: "File Operations",
                command: t.showFileOperations
            }, {
                label: "Sample Editor",
                command: t.showSampleEditor
            }, {
                label: "Piano",
                command: t.togglePiano
            }, {
                label: "Performance stats",
                command: t.showStats
            }]
        }, {
            label: "Help",
            subItems: [{
                label: "About",
                command: t.showAbout
            }, {
                label: "Documentation",
                command: t.showHelp
            }, {
                label: "Sourcecode on Github",
                command: t.showGithub
            }]
        }]);
        var e = q.vumeter();
        return e.connect(O.cutOffVolume), window.vumeter = e, b.onPanelResize = function() {
            var a = 250,
                b = Math.max(ga.col2W, a),
                d = ga.col5W - b,
                f = ga.marginLeft + b + ga.defaultMargin;
            c.setDimensions({
                left: ga.marginLeft,
                top: 0,
                height: 26,
                width: b
            }), e.setProperties({
                width: d,
                left: f
            })
        }, b.onPanelResize(), b
    }, q.app_panelContainer = function(a) {
        var b = q.panel(0, 0, U.width, a, !0),
            c = q.scale9Panel(0, 0, b.width, b.height, q.Assets.panelMainScale9);
        return c.ignoreEvents = !0, b.addChild(c), b.onResize = function() {
            c.setSize(b.width, b.height), b.onPanelResize && b.onPanelResize()
        }, b
    }, q.app_patternPanel = function() {
        function a() {
            var a = n.getStartTrack(),
                c = Math.min(a + ga.visibleTracks, da.getTrackCount()),
                e = !(ga.expandSampleViewHeight && "sample" === h);
            for (b = 0; b < f.length; b++) f[b].setProperties(b >= a && b < c ? {
                track: b,
                left: d + (ga.trackWidth + ga.trackMargin) * (b - a),
                top: ga.defaultMargin + ga.infoPanelHeight + ga.analyserHeight,
                width: ga.trackWidth,
                height: ga.trackControlHeight,
                visible: e
            } : {
                track: b,
                top: -100,
                visible: !1
            })
        }
        var b, c, d, e = q.app_panelContainer(80),
            f = [],
            g = 4,
            h = "main",
            i = q.editPanel();
        e.addChild(i);
        var j = q.InfoPanel();
        for (e.addChild(j), b = 0; b < da.getTrackCount(); b++) f[b] = q.trackControl(), e.addChild(f[b]);
        var k = q.visualiser();
        k.connect(O.cutOffVolume), k.name = "mainAnalyser";
        var l = q.element();
        l.render = function() {}, l.onClick = function(a) {
            k.onClick(a)
        }, e.addChild(l);
        var m = q.app_sidebar();
        e.addChild(m);
        var n = q.app_patternView();
        n.setProperties({
            name: "patternViewPanel"
        }), e.addChild(n);
        var o = q.SampleView();
        return o.setProperties({
            name: "sampleViewPanel"
        }), e.addChild(o), e.onPanelResize = function() {
            ga.showSideBar ? "main" === h && (m.show(), i.show()) : (m.hide(), i.hide());
            var b = ga.infoPanelHeight + ga.trackControlHeight + ga.analyserHeight + 2 * ga.defaultMargin,
                f = e.height - b - ga.defaultMargin;
            ga.expandSampleViewHeight = f < 280, ga.expandSampleViewHeight && "sample" === h ? (k.hide(), i.hide()) : (k.show(), ga.showSideBar && i.show()), c = ga.showSideBar ? ga.col2X : ga.col1X;
            var g = ga.showSideBar ? ga.col4W : ga.col5W;
            d = c + ga.firstTrackOffsetLeft, i.setDimensions({
                left: ga.col1X,
                top: ga.defaultMargin,
                width: ga.col1W,
                height: ga.infoPanelHeight + ga.analyserHeight
            }), j.setDimensions({
                left: ga.showSideBar ? ga.col2X : ga.col1X,
                top: 0,
                width: ga.showSideBar ? ga.col4W : ga.col5W,
                height: ga.infoPanelHeight
            }), n.setDimensions({
                left: c,
                top: b,
                width: g,
                height: f
            }), m.setDimensions({
                left: ga.col1X,
                top: n.top - ga.trackControlHeight,
                width: ga.col1W,
                height: f + ga.trackControlHeight
            }), k.setProperties({
                left: d,
                top: e.top + ga.infoPanelHeight + 3,
                width: g - ga.firstTrackOffsetLeft,
                height: ga.analyserHeight
            }), l.setDimensions({
                left: k.left,
                top: ga.infoPanelHeight + 3,
                width: k.width,
                height: k.height
            }), o.setProperties({
                left: 0,
                top: ga.expandSampleViewHeight ? ga.infoPanelHeight : b,
                width: e.width,
                height: ga.expandSampleViewHeight ? e.height - ga.infoPanelHeight - ga.defaultMargin - 3 : f
            }), a()
        }, e.onPanelResize(), N.on(s.patternChange, function() {
            n.refresh()
        }), N.on(s.patternPosChange, function() {
            n.refresh()
        }), N.on(s.cursorPositionChange, function() {
            n.refresh()
        }), N.on(s.recordingChange, function() {
            n.refresh()
        }), N.on(s.trackStateChange, function(a) {
            if ("undefined" != typeof a.track)
                if (a.solo)
                    for (b = 0; b < da.getTrackCount(); b++) b != a.track && f[b].setProperties({
                        mute: !0
                    });
                else if (a.wasSolo)
                for (b = 0; b < da.getTrackCount(); b++) b != a.track && f[b].setProperties({
                    mute: !1
                })
        }), N.on(s.trackCountChange, function(c) {
            for (e.visibleTracks = Math.min(g, c), b = f.length; b < c; b++) f[b] = q.trackControl(), f[b].setProperties({
                track: b,
                top: -200
            }), e.addChild(f[b]);
            a(), e.refresh()
        }), N.on(s.patternHorizontalScrollChange, function() {
            a()
        }), N.on(s.showView, function(a) {
            switch (a) {
                case "sample":
                    o.show(), n.hide(), m.hide(), ga.expandSampleViewHeight && (k.hide(), i.hide()), h = a, e.onPanelResize(), e.refresh();
                    break;
                case "bottommain":
                case "main":
                    o.hide(), n.show(), k.show(), ga.showSideBar && (m.show(), i.show()), h = "main", e.onPanelResize(), e.refresh()
            }
        }), N.on(s.visibleTracksCountChange, function(a) {
            ga.showSideBar ? "main" === h && (m.show(), i.show()) : (m.hide(), i.hide()), e.onResize()
        }), e
    }, q.app_pianoView = function() {
        var a = q.app_panelContainer(200);
        a.name = "pianoViewPanel";
        var b, c, d = 64,
            e = 4,
            f = d - e,
            g = [],
            h = [0, 2, 4, 5, 7, 9, 11],
            i = [-1, 1, 0, 3, 0, -1, 0, 6, 0, 8, 0, 10, 0, -1],
            j = fa.getImage("pianokey_white"),
            k = fa.getImage("pianokey_white_down"),
            l = fa.getImage("pianokey_black"),
            m = fa.getImage("pianokey_black_down"),
            n = 30,
            o = 0,
            p = 3,
            r = 1,
            u = q.Assets.generate("button20_20");
        u.setLabel("x"), u.onClick = function() {
            Q.doCommand(t.togglePiano)
        }, a.addChild(u);
        var v = q.spinBox();
        v.setProperties({
            name: "Octave",
            label: "Octave",
            value: 1,
            max: p,
            min: r,
            left: 4,
            top: 2,
            height: 28,
            width: 150,
            font: window.fontMed,
            onChange: function(a) {
                ia.setCurrentOctave(a)
            }
        }), a.addChild(v), a.onShow = function() {
            a.onPanelResize()
        }, a.onPanelResize = function() {
            a.innerHeight = a.height - 2 * ga.defaultMargin, u.setProperties({
                top: 4,
                left: a.width - 24
            })
        }, a.onPanelResize(), N.on(s.pianoNoteOn, function(b) {
            a.isVisible() && (g[b] = !0, a.refresh())
        }), N.on(s.pianoNoteOff, function(b) {
            a.isVisible() && (g[b] = !1, a.refresh())
        });
        var w = function(a, b) {
            var c = -1,
                d = 7 * f,
                e = a % d,
                g = Math.floor(a / d);
            if (b >= 0)
                if (b > o) {
                    var j = Math.floor(e / f);
                    c = h[j] + 12 * g
                } else {
                    var k = f / 2,
                        l = k / 2,
                        m = Math.floor((e - l) / k);
                    m < 0 && (m = 0), m > 12 && (m = 12), m % 2 === 0 ? (j = m / 2, c = h[j]) : (c = i[m], c < 0 && (j = Math.floor(e / f), c = h[j])), c += 12 * g
                } return c + 1
        };
        return a.onDown = function(d) {
            var e = d.x,
                f = d.y - a.top - n,
                g = w(e, f);
            g && g !== b && (ia.handleNoteOn(g + 12 * c), b && ia.handleNoteOff(b + 12 * c), b = g)
        }, a.onTouchUp = function(d) {
            var e = d.dragX || a.eventX,
                f = a.eventY - n,
                g = w(e, f);
            g || (g = b), g && (ia.handleNoteOff(g + 12 * c), b = void 0), b && ia.handleNoteOff(b + 12 * c), b = void 0
        }, a.onDrag = function(d) {
            var e = d.dragX,
                f = d.dragY - a.top - n,
                g = w(e, f);
            g && g !== b && (ia.handleNoteOn(g + 12 * c), b && ia.handleNoteOff(b + 12 * c), b = g)
        }, a.renderInternal = function(b) {
            if (a.isVisible()) {
                if (b = !!b, this.needsRendering) {
                    for (var f = a.height - n, p = 0, q = 0; p < a.width;) {
                        var r = Math.floor(q / 7),
                            s = q % 7,
                            t = 12 * (c + r) + h[s] + 1,
                            u = g[t] ? k : j;
                        a.ctx.drawImage(u, p, n, d, f), q++, p += d - e
                    }
                    var v = 48;
                    o = Math.floor(f / 1.7);
                    var w = d - v / 2 - 2;
                    q = 0;
                    for (var x = 0; w < a.width;) {
                        if (r = Math.floor(q / 7), s = q % 7, 2 !== s && 6 !== s) {
                            t = 12 * (c + r) + i[2 * s + 1] + 1;
                            var y = g[t] ? m : l;
                            a.ctx.drawImage(y, w, n, v, o), x++
                        }
                        q++, w += d - e
                    }
                }
                return this.needsRendering = !1, b ? a.canvas : void a.parentCtx.drawImage(a.canvas, a.left, a.top, a.width, a.height)
            }
        }, N.on(s.octaveChanged, function(a) {
            c = a, v.setValue(c, !0)
        }), N.on(s.trackerModeChanged, function(a) {
            p = da.inFTMode() ? 7 : 3, r = da.inFTMode() ? 0 : 1, v.setMax(p, !0), v.setMin(r, !0)
        }), a
    }, q.Assets = function() {
        var a = {},
            b = {};
        a.preLoad = function(a) {
            var b, c, d = X.baseUrl || "",
                e = function() {
                    b && c && (b.forEach(function(a) {
                        a.img = c, fa.sprites[a.name] = fa.sprite(a)
                    }), a && a())
                };
            S.json(d + "skin/spritemap_v2.json?v=" + buildNumber, function(a) {
                b = a, e()
            }), fa.loadImage(d + "skin/spritesheet_v2.png?v=" + buildNumber, function(a) {
                c = a, e()
            })
        }, a.buttonLightScale9 = {
            left: 2,
            top: 2,
            right: 4,
            bottom: 4
        }, a.buttonDarkScale9 = {
            left: 5,
            top: 5,
            right: 5,
            bottom: 5
        }, a.buttonDarkBlueScale9 = {
            left: 5,
            top: 5,
            right: 5,
            bottom: 5
        }, a.buttonDarkRedScale9 = {
            left: 5,
            top: 5,
            right: 5,
            bottom: 5
        }, a.buttonDarkGreenScale9 = {
            left: 5,
            top: 5,
            right: 5,
            bottom: 5
        }, a.buttonDarkActiveScale9 = {
            left: 5,
            top: 5,
            right: 5,
            bottom: 5
        }, a.buttonDarkActiveBlueScale9 = {
            left: 5,
            top: 5,
            right: 5,
            bottom: 5
        }, a.buttonDarkGreenActiveScale9 = {
            left: 5,
            top: 5,
            right: 5,
            bottom: 5
        }, a.buttonDarkRedActiveScale9 = {
            left: 5,
            top: 5,
            right: 5,
            bottom: 5
        }, a.buttonDarkBlueActiveScale9 = {
            left: 5,
            top: 5,
            right: 5,
            bottom: 5
        }, a.buttonDarkYellowActiveScale9 = {
            left: 5,
            top: 5,
            right: 5,
            bottom: 5
        }, a.panelMainScale9 = {
            left: 2,
            top: 2,
            right: 3,
            bottom: 3
        }, a.panelDarkScale9 = {
            left: 3,
            top: 3,
            right: 3,
            bottom: 2
        }, a.panelDarkGreyScale9 = {
            left: 3,
            top: 3,
            right: 3,
            bottom: 2
        }, a.panelDarkGreyBlueScale9 = {
            left: 3,
            top: 3,
            right: 3,
            bottom: 2
        }, a.panelTransScale9 = {
            left: 3,
            top: 3,
            right: 3,
            bottom: 2
        }, a.panelInsetScale9 = {
            left: 2,
            top: 2,
            right: 2,
            bottom: 2
        }, a.panelDarkInsetScale9 = {
            left: 2,
            top: 2,
            right: 2,
            bottom: 2
        }, a.buttonKeyScale9 = {
            left: 5,
            top: 5,
            right: 5,
            bottom: 5
        }, a.buttonKeyActiveScale9 = {
            left: 5,
            top: 5,
            right: 5,
            bottom: 5
        };
        var c = {
            button20_20: {
                generate: function(c) {
                    var d, e = a.panelDarkScale9;
                    return d = q.button(0, 0, 20, 20), d.setProperties({
                        background: e,
                        textAlign: "center",
                        font: window.fontMed,
                        paddingTop: 2
                    }), c ? void(b.buttonUp20_20 = d) : d
                }
            },
            button30_30: {
                generate: function(c) {
                    var d, e = a.buttonLightScale9;
                    return d = q.scale9Panel(0, 0, 30, 30, e), c ? void(b.buttonUp30_30 = d) : d
                }
            },
            buttonLight: {
                generate: function(c) {
                    var d, e = a.buttonLightScale9;
                    return d = q.button(), d.setProperties({
                        background: e,
                        textAlign: "center",
                        font: window.fontMed
                    }), c ? void(b.buttonLight = d) : d
                }
            },
            buttonDark: {
                generate: function(c) {
                    var d, e = a.buttonDarkScale9;
                    return d = q.button(0, 0, 20, 20), d.setProperties({
                        background: e,
                        activeBackground: q.Assets.buttonDarkActiveScale9,
                        isActive: !1,
                        textAlign: "center",
                        font: window.fontMed
                    }), c ? void(b.buttonDark = d) : d
                }
            },
            buttonDarkBlue: {
                generate: function(c) {
                    var d;
                    return d = q.button(0, 0, 20, 20), d.setProperties({
                        background: a.buttonDarkBlueScale9,
                        activeBackground: q.Assets.buttonDarkBlueActiveScale9,
                        isActive: !1,
                        textAlign: "center",
                        font: window.fontMed
                    }), c ? void(b.buttonDarkBlue = d) : d
                }
            },
            buttonDarkRed: {
                generate: function(c) {
                    var d;
                    return d = q.button(0, 0, 20, 20), d.setProperties({
                        background: a.buttonDarkRedScale9,
                        activeBackground: q.Assets.buttonDarkRedActiveScale9,
                        isActive: !1,
                        textAlign: "center",
                        font: window.fontMed
                    }), c ? void(b.buttonDarkRed = d) : d
                }
            },
            buttonDarkGreen: {
                generate: function(c) {
                    var d;
                    return d = q.button(0, 0, 20, 20), d.setProperties({
                        background: a.buttonDarkGreenScale9,
                        activeBackground: q.Assets.buttonDarkGreenActiveScale9,
                        isActive: !1,
                        textAlign: "center",
                        font: window.fontMed
                    }), c ? void(b.buttonDarkGreen = d) : d
                }
            },
            buttonKey: {
                generate: function(c) {
                    var d;
                    return d = q.button(0, 0, 20, 20), d.setProperties({
                        background: a.buttonKeyScale9,
                        activeBackground: q.Assets.buttonKeyActiveScale9,
                        isActive: !1,
                        textAlign: "center",
                        font: window.fontDark
                    }), c ? void(b.buttonKey = d) : d
                }
            }
        };
        return a.init = function() {
            a.buttonLightScale9.img = fa.getImage("button_light"), a.buttonDarkScale9.img = fa.getImage("button_inlay"), a.buttonDarkBlueScale9.img = fa.getImage("button_inlay_blue"), a.buttonDarkRedScale9.img = fa.getImage("button_inlay_red"), a.buttonDarkGreenScale9.img = fa.getImage("button_inlay_green"), a.buttonDarkActiveScale9.img = fa.getImage("button_inlay_active"), a.buttonDarkGreenActiveScale9.img = fa.getImage("button_inlay_green_active"), a.buttonDarkRedActiveScale9.img = fa.getImage("button_inlay_red_active"), a.buttonDarkBlueActiveScale9.img = fa.getImage("button_inlay_blue_active"), a.buttonDarkYellowActiveScale9.img = fa.getImage("button_inlay_yellow_active"), a.panelMainScale9.img = fa.getImage("background"), a.panelDarkScale9.img = fa.getImage("bar"), a.panelDarkGreyScale9.img = fa.getImage("panel_dark_greyish"), a.panelDarkGreyBlueScale9.img = fa.getImage("panel_dark_blueish"), a.panelTransScale9.img = fa.getImage("panel_trans"), a.panelInsetScale9.img = fa.getImage("panel_inset"), a.panelDarkInsetScale9.img = fa.getImage("panel_dark"), a.buttonKeyScale9.img = fa.getImage("keybutton"), a.buttonKeyActiveScale9.img = fa.getImage("keybutton_highlight3")
        }, a.get = function(a) {
            var d = b[a];
            if (d) return d;
            var e = c[a];
            e && (e.isLoading || (e.isLoading = !0, e.generate(!0)))
        }, a.put = function(a, c) {
            b[a] = c
        }, a.generate = function(a) {
            return c[a] ? c[a].generate() : void 0
        }, a
    }(), q.animsprite = function(a, b, c, d, e, f) {
        c = c || 14, d = d || 14;
        var g = q.element(a, b, c, d, !0),
            h = ["left", "top", "width", "height", "name"];
        g.setProperties = function(a) {
            h.forEach(function(b) {
                "undefined" != typeof a[b] && (g[b] = a[b])
            }), g.setSize(g.width, g.height), g.setPosition(g.left, g.top)
        };
        var i = fa.getImage(e),
            j = 0;
        return g.onShow = function() {
            q.ticker.onEachTick2(function() {
                j++, j >= f && (j = 0), g.refresh()
            }, 0)
        }, g.onHide = function() {
            q.ticker.onEachTick2()
        }, g.render = function(a) {
            return a = !!a, this.needsRendering && (g.clearCanvas(), g.ctx.drawImage(i, j * c, 0, c, d, 0, 0, c, d)), this.needsRendering = !1, a ? g.canvas : void g.parentCtx.drawImage(g.canvas, g.left, g.top, g.width, g.height)
        }, g
    };
    var ha = function() {
        function a(a) {
            return f.fixedWidth ? b : b[a]
        }
        var b, c, d, e, f = {},
            g = [],
            h = !1,
            i = !1;
        return f.generate = function(j) {
            var k = j.image,
                l = j.startX,
                m = j.startY;
            b = j.charWidth;
            var n = j.charHeight;
            e = j.spaceWidth || 8;
            var o = j.margin,
                p = j.lineSpacing || 0,
                q = j.charsPerLine,
                r = j.chars || "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            h = j.onlyUpperCase, i = !!j.debug, f.fontArray = [], f.colors = {}, d = o, c = n, f.fixedWidth = !0, f.charHeight = n, "number" != typeof b && (f.fixedWidth = !1, "string" == typeof b && (b = b.split(""), b.forEach(function(a, c) {
                b[c] = parseInt(a)
            }))), f.charWidth = b;
            for (var s = l, t = m, u = 0, v = 0, w = 0, x = r.length; w <= x; w++) {
                var y = document.createElement("canvas"),
                    z = a(w) || 1;
                y.width = z, y.height = n;
                var A = y.getContext("2d");
                if (f.fixedWidth) var B = l + w % q * (z + o),
                    C = m + Math.floor(w / q) * (n + p);
                else B = s, C = t, s += z + o, v++, v >= q[u] && (u++, v = 0, s = l, t += c + p);
                A.drawImage(k, B, C, z, n, 0, 0, z, n);
                var D = r.charCodeAt(w);
                f.fontArray[D] = y, g[D] = z
            }
        }, f.generateColor = function(a, b) {
            a = a || "green", b = b || "rgba(107, 161, 65,0.9)";
            var c = [];
            f.fontArray.forEach(function(a, d) {
                var e = document.createElement("canvas"),
                    f = document.createElement("canvas");
                e.width = a.width, e.height = a.height, f.width = a.width, f.height = a.height;
                var g = e.getContext("2d"),
                    h = f.getContext("2d");
                h.fillStyle = b, h.fillRect(0, 0, 16, 16), h.globalCompositeOperation = "destination-atop", h.drawImage(a, 0, 0), g.drawImage(f, 0, 0), g.globalCompositeOperation = "darken", g.drawImage(a, 0, 0), c[d] = e
            }), f.colors[a] = c
        }, f.getTextWidth = function(a, b) {
            h && (a = a.toUpperCase()), b = b || d;
            for (var c = 0, f = 0, i = a.length; f < i; f++) {
                var j = a.charCodeAt(f),
                    k = g[j] || e;
                c += k + b
            }
            return c
        }, f.write = function(a, b, i, j, k, l) {
            h && (b = b.toUpperCase());
            var m = f.colors[l] || f.fontArray;
            k = k || d, i = i || 0, j = j || 0;
            for (var n = i, o = 0, p = b.length; o < p; o++) {
                var q = b.charCodeAt(o),
                    r = m[q],
                    s = g[q];
                s || (s = e), r && a.drawImage(r, n, j, s, c), n += s + k
            }
        }, f
    };
    q.button = function(a, b, c, d, e) {
        var f = q.element(a, b, c, d);
        f.type = "button", f.isActive = !1;
        var g, h, i, j, k, l, m = e || "",
            n = "left",
            o = 0,
            p = 0,
            r = 10,
            s = ["left", "top", "width", "height", "name", "type", "image", "backgroundImage", "background", "active", "activeBackground", "activeImage", "font", "label", "textAlign", "paddingTop", "paddingTopActive", "paddingLeft"];
        return f.setProperties = function(a) {
            s.forEach(function(b) {
                if ("undefined" != typeof a[b]) switch (b) {
                    case "label":
                        m = a[b];
                        break;
                    case "font":
                        l = a[b];
                        break;
                    case "textAlign":
                        n = a[b];
                        break;
                    case "paddingTop":
                        o = parseInt(a[b]);
                        break;
                    case "paddingTopActive":
                        p = parseInt(a[b]);
                        break;
                    case "paddingLeft":
                        r = parseInt(a[b]);
                        break;
                    case "image":
                        g = a[b];
                        break;
                    case "backgroundImage":
                        h = a[b];
                        break;
                    case "activeImage":
                        k = a[b];
                        break;
                    case "background":
                        a[b].img && (h = void 0, i = q.scale9Panel(0, 0, 0, 0, a[b]), i.setParent(f));
                        break;
                    case "activeBackground":
                        a[b].img && (h = void 0, j = q.scale9Panel(0, 0, 0, 0, a[b]), j.setParent(f));
                        break;
                    default:
                        f[b] = a[b]
                }
            }), i && i.setSize(f.width, f.height), j && j.setSize(f.width, f.height), f.setSize(f.width, f.height), f.setPosition(f.left, f.top)
        }, f.setBackgroundImage = function(a) {
            h = a, f.refresh()
        }, f.setFont = function(a) {
            l = a, f.refresh()
        }, f.setLabel = function(a) {
            m = a, f.refresh()
        }, f.toggleActive = function() {
            f.isActive = !f.isActive, f.refresh()
        }, f.setActive = function(a) {
            "undefined" == typeof a && (a = !0), f.isActive = !!a, f.refresh()
        }, f.setDisabled = function(a) {
            "undefined" == typeof a && (a = !0), f.isDisabled = a, a && (f.isActive = !1), f.refresh()
        }, f.render = function(a) {
            if (f.isVisible()) {
                if (f.needsRendering) {
                    a = !!a;
                    var b = !0;
                    if (h) f.ctx.drawImage(h, 0, 0, f.width, f.height);
                    else if (i) {
                        if (f.isActive && j) {
                            if (j.render(), k) {
                                var c = Math.floor((f.height - k.height) / 2),
                                    d = Math.floor((f.width - k.width) / 2);
                                f.ctx.drawImage(k, d, c)
                            }
                        } else if (i.render(), g) {
                            var c = Math.floor((f.height - g.height) / 2),
                                d = Math.floor((f.width - g.width) / 2);
                            f.ctx.drawImage(g, d, c)
                        }
                    } else f.ctx.fillStyle = "grey", f.ctx.fillRect(0, 0, f.width, f.height), f.ctx.fillStyle = "black", f.ctx.rect(0, 0, f.width, f.height), f.ctx.stroke();
                    if (m && b) {
                        var e = 10,
                            q = 8,
                            s = Math.floor((f.height - e) / 2) + (f.isActive ? p : o),
                            t = r;
                        if (l) {
                            if ("center" === n) {
                                var u = m.length * q;
                                l.fixedWidth || (u = l.getTextWidth(m, 0)), t = Math.floor((f.width - u) / 2)
                            }
                            "right" === n && (u = m.length * q, l.fixedWidth || (u = l.getTextWidth(m, 0)), t = f.width - u - 5), l.write(f.ctx, m, t, s, 0)
                        } else f.ctx.fillStyle = "white", f.ctx.fillText(m, t, s)
                    }
                    f.isDisabled && (f.ctx.fillStyle = "rgba(34, 49, 85, 0.6)", f.ctx.fillRect(0, 0, f.width, f.height)), f.renderInternal && f.renderInternal()
                }
                return f.needsRendering = !1, a ? f.canvas : void f.parentCtx.drawImage(f.canvas, f.left, f.top, f.width, f.height)
            }
        }, f
    }, q.checkbox = function(a, b, c, d) {
        c = c || 14, d = d || 14;
        var e = q.element(a, b, c, d, !0),
            f = ["left", "top", "width", "height", "name", "type", "checked"];
        return e.setProperties = function(a) {
            f.forEach(function(b) {
                "undefined" != typeof a[b] && (e[b] = a[b])
            }), e.setSize(e.width, e.height), e.setPosition(e.left, e.top)
        }, e.setState = function(a, b) {
            e.checked = a, e.refresh(), e.onToggle && !b && e.onToggle(e.checked)
        }, e.onClick = function(a) {
            e.setState(!e.checked)
        }, e.check = function() {
            e.setState(!0)
        }, e.unCheck = function() {
            e.setState(!1)
        }, e.toggle = function() {
            e.setState(!e.checked)
        }, e.render = function(a) {
            if (a = !!a, this.needsRendering) {
                e.clearCanvas();
                var b = fa.getImage(e.checked ? "checkbox_on" : "checkbox_off");
                e.ctx.drawImage(b, 0, 0)
            }
            return this.needsRendering = !1, a ? e.canvas : void e.parentCtx.drawImage(e.canvas, e.left, e.top, e.width, e.height)
        }, e
    }, q.checkboxbutton = function(a) {
        var b = q.button(0, 0, 20, 20);
        return a = a || {}, b.setProperties({
            background: q.Assets.buttonDarkBlueScale9,
            activeBackground: q.Assets.buttonDarkBlueActiveScale9,
            isActive: !1,
            textAlign: "left",
            paddingLeft: 30,
            font: window.fontFT,
            label: a.label || ""
        }), b.renderInternal = function() {
            var a = fa.getImage(b.isActive ? "radio_active" : "radio_inactive");
            b.ctx.drawImage(a, 8, Math.floor(b.height / 2) - 5)
        }, b.onDown = function() {
            b.toggleActive(), a.onDown && a.onDown.bind(b).call()
        }, b
    }, q.element = function(a, b, c, d) {
        var e = {};
        return e.left = a || 0, e.top = b || 0, e.width = c || 20, e.height = d || 20, e.visible = !0, e.needsRendering = !0, e.parentCtx = V, e.canvas = document.createElement("canvas"), e.canvas.width = c, e.canvas.height = d, e.ctx = e.canvas.getContext("2d"), e.children = [], e.hide = function() {
            e.visible = !1, e.onHide && e.onHide()
        }, e.show = function(a, b) {
            e.visible = !0, a && e.refresh(b), e.onShow && e.onShow()
        }, e.toggle = function(a) {
            "boolean" == typeof a ? a ? e.show() : e.hide() : e.visible ? e.hide() : e.show()
        }, e.isVisible = function() {
            for (var a = e.visible, b = e.parent; a && b;) a = b.visible, b = b.parent;
            return a
        }, e.containsPoint = function(a, b) {
            var c = this.left,
                d = this.left + this.width,
                e = this.top,
                f = this.top + this.height;
            return a >= c && a <= d && b >= e && b <= f
        }, e.getElementAtPoint = function(a, b) {
            a -= e.left + (e.scrollOffsetX || 0), b -= e.top + (e.scrollOffsetY || 0), e.scaleX && (a /= e.scaleX), e.scaleY && (b /= e.scaleY);
            for (var c, d = e.children.length - 1; d >= 0; d--) {
                var f = e.children[d];
                if (f.isVisible() && !f.ignoreEvents && f.containsPoint(a, b)) {
                    c = f;
                    break
                }
            }
            if (c) {
                var g = c.getElementAtPoint(a, b);
                g ? c = g : (c.eventX = a, c.eventY = b)
            } else c = e, c.eventX = a, c.eventY = b;
            return c
        }, e.setParent = function(a) {
            e.parent = a, a && (e.parentCtx = a.ctx)
        }, e.addChild = function(a) {
            a.setParent(e), a.zIndex = a.zIndex || e.children.length, e.children.push(a)
        }, e.getChild = function(a) {
            for (var b, c = e.children.length; c;) {
                if (b = e.children[c], b && b.name && b.name == a) return b;
                c--
            }
        }, e.refresh = function(a) {
            if (e.needsRendering = !0, a)
                for (var b, c = e.children.length; c;) b = e.children[c], b && b.refresh(), c--;
            this.visible && e.parent && e.parent.refresh && e.parent.refresh()
        }, e.setSize = function(a, b) {
            e.width = Math.max(a, 1), e.height = Math.max(b, 1), e.canvas.width = e.width, e.canvas.height = e.height, e.onResize && e.onResize(), e.refresh()
        }, e.setPosition = function(a, b) {
            e.left = a, e.top = b, e.refresh()
        }, e.setDimensions = function(a) {
            var b = "boolean" != typeof a.visible || a.visible;
            b && (e.setProperties ? e.setProperties(a) : (e.setPosition(a.left, a.top), e.setSize(a.width, a.height)))
        }, e.clearCanvas = function() {
            e.ctx.clearRect(0, 0, e.width, e.height)
        }, e
    }, q.inputbox = function(a) {
        var b, c, d, e = q.element(),
            f = ["left", "top", "width", "height", "name", "type", "onChange", "backgroundImage"],
            g = "",
            h = "panel_dark";
        e.setProperties = function(a) {
            f.forEach(function(b) {
                "undefined" != typeof a[b] && (e[b] = a[b])
            }), e.setSize(e.width, e.height), e.setPosition(e.left, e.top), i && i.setSize(e.width, e.height), a.value && (g = a.value), a.backgroundImage && (h = a.backgroundImage)
        }, a && e.setProperties(a);
        var i = q.scale9Panel(0, 0, e.width, e.height, {
            img: fa.getImage(h),
            left: 3,
            top: 3,
            right: 2,
            bottom: 2
        });
        i.ignoreEvents = !0, e.addChild(i), e.render = function(a) {
            if (a = !!a, e.isVisible()) {
                if (this.needsRendering) {
                    i.render();
                    var b = 0;
                    if (g && fontMed) {
                        b = 10;
                        var f = 6;
                        fontMed.write(e.ctx, g, b, f, 0)
                    }
                    if (c) {
                        e.ctx.fillStyle = "rgba(255,255,255,0.7)";
                        var h = 9,
                            j = b + d * h + 8;
                        e.ctx.fillRect(j, 4, 2, e.height - 8)
                    }
                }
                return this.needsRendering = !1, a ? e.canvas : void e.parentCtx.drawImage(e.canvas, e.left, e.top, e.width, e.height)
            }
        }, e.setValue = function(a, b) {
            g = a, e.refresh(), !b && e.onChange && e.onChange(g)
        }, e.getValue = function() {
            return g
        }, e.getItemAtPosition = function(a, b) {
            b -= startY;
            var c = Math.floor(b / lineHeight) + visibleIndex;
            return c >= 0 && c < items.length ? items[c] : void 0
        }, e.onClick = function() {
            b || e.activate()
        }, e.activate = function() {
            d = -1, !b && g && (d = g.length - 1), b = !0, ia.setFocusElement(e), j()
        }, e.deActivate = function() {
            b && (c = !1, b = !1, e.refresh(), ia.clearFocusElement())
        }, e.onKeyDown = function(a, b) {
            var c = !1;
            switch (a) {
                case 8:
                    g && (g = g.substr(0, d) + g.substr(d + 1), d--, e.onChange && e.onChange(g)), c = !0;
                    break;
                case 13:
                    e.deActivate(), c = !0;
                    break;
                case 37:
                    d > 0 && d--, e.refresh(), c = !0;
                    break;
                case 39:
                    g && (d++, d = Math.min(d, g.length - 1), e.refresh()), c = !0;
                    break;
                case 46:
                    c = !0
            }
            if (!c && a > 31) {
                var f = b.key;
                1 == f.length && f.match(/[a-z0-9\._:\-\ #]/i) && (g = g.substr(0, d + 1) + f + g.substr(d + 1), e.onChange && e.onChange(g), d++, e.refresh()), c = !0
            }
            return c
        };
        var j = function() {
            b && (c = !c, e.refresh(), setTimeout(j, 200))
        };
        return e
    }, q.knob = function(a) {
        var b = q.element();
        b.type = "knob";
        var c, d = "",
            e = "left",
            f = 0,
            g = 0,
            h = 50,
            i = h,
            j = ["left", "top", "width", "height", "name", "font", "label", "textAlign", "paddingTop", "disabled"],
            k = fa.getImage("knob_back"),
            l = fa.getImage("knob_back_inactive"),
            m = fa.getImage("knob_front"),
            n = 16;
        return b.width = k.width + 2 * n, b.height = k.height + 2 * n, b.setSize(b.width, b.height), b.setProperties = function(a) {
            j.forEach(function(g) {
                if ("undefined" != typeof a[g]) switch (g) {
                    case "label":
                        d = a[g];
                        break;
                    case "font":
                        c = a[g];
                        break;
                    case "textAlign":
                        e = a[g];
                        break;
                    case "paddingTop":
                        f = parseInt(a[g]);
                        break;
                    case "disabled":
                        b.isDisabled = !!a[g];
                    default:
                        b[g] = a[g]
                }
            }), b.setSize(b.width, b.height), b.setPosition(b.left, b.top)
        }, b.setFont = function(a) {
            c = a, b.refresh()
        }, b.setLabel = function(a) {
            d = a, b.refresh()
        }, b.getLabel = function() {
            return d
        }, b.setValue = function(a) {
            g = a, b.refresh()
        }, b.render = function(a) {
            if (b.needsRendering) {
                a = !!a, b.clearCanvas();
                var c = 1;
                c = .8;
                var e = k.width * c,
                    f = k.height * c,
                    g = e / 2,
                    i = f / 2;
                b.ctx.save(), b.ctx.translate(n + g, n + i), b.ctx.drawImage(b.isDisabled ? l : k, -g, -i, e, f);
                var j = -230,
                    o = 50,
                    p = Math.abs(j) + o,
                    q = j + h / 100 * p,
                    r = j * Math.PI / 180,
                    s = q * Math.PI / 180;
                b.ctx.fillStyle = b.isDisabled ? "rgba(170,170,170,0.5)" : "rgba(130,200,255,0.5)", b.ctx.beginPath(), b.ctx.arc(0, 0, 30, r, s, !1), b.ctx.arc(0, 0, 25, s, r, !0), b.ctx.fill();
                var t = h / 100 * 320 - 160;
                if (b.ctx.rotate(t * Math.PI / 180), b.ctx.drawImage(m, -g, -i, e, f), b.ctx.restore(), d) {
                    var u = (b.width - 6 * d.length) / 2;
                    u = n + g - 3 * d.length, fontSmall.write(b.ctx, d, u, f + n + 4)
                }
            }
            return b.needsRendering = !1, a ? b.canvas : void b.parentCtx.drawImage(b.canvas, b.left, b.top, b.width, b.height)
        }, b.onDragStart = function() {
            i = h
        }, b.onDrag = function(a) {
            if (!b.isDisabled) {
                var c = a.dragY - a.startY;
                h = i + c, h = Math.max(h, 0), h = Math.min(h, 100), b.refresh(), b.onChange && b.onChange(h)
            }
        }, b.onClick = function(a) {
            Math.abs(a.x - a.startX) < 3 && Math.abs(a.y - a.startY) < 3 && b.toggleDisabled()
        }, b.toggleDisabled = function() {
            b.isDisabled = !b.isDisabled, b.onToggle && b.onToggle(!b.isDisabled), b.refresh()
        }, b
    }, q.label = function(a) {
        var b = q.element();
        b.type = "label";
        var c, d = "",
            e = "left",
            f = 0,
            g = ["left", "top", "width", "height", "name", "font", "label", "textAlign", "paddingTop"];
        return b.setProperties = function(a) {
            g.forEach(function(g) {
                if ("undefined" != typeof a[g]) switch (g) {
                    case "label":
                        d = a[g];
                        break;
                    case "font":
                        c = a[g];
                        break;
                    case "textAlign":
                        e = a[g];
                        break;
                    case "paddingTop":
                        f = parseInt(a[g]);
                        break;
                    default:
                        b[g] = a[g]
                }
            }), b.setSize(b.width, b.height), b.setPosition(b.left, b.top), a.labels && (b.onResize = function() {
                var c = d;
                a.labels.forEach(function(a) {
                    b.width >= a.width && (d = a.label)
                }), c !== d && b.refresh()
            })
        }, b.setFont = function(a) {
            c = a, b.refresh()
        }, b.setLabel = function(a) {
            d = a, b.refresh()
        }, b.render = function(a) {
            if (b.isVisible()) {
                if (b.needsRendering && (a = !!a, b.clearCanvas(), d)) {
                    var g = 10,
                        h = Math.floor((b.height - g) / 2) + f,
                        i = 10;
                    if (c) {
                        var j;
                        "center" == e && (j = c.getTextWidth(d, 0), i = Math.floor((b.width - j) / 2)), "right" == e && (j = c.getTextWidth(d, 0), i = Math.floor(b.width - j) - 10), c.write(b.ctx, d, i, h, 0)
                    } else b.ctx.fillStyle = "white", b.ctx.fillText(d, i, h)
                }
                return b.needsRendering = !1, a ? b.canvas : void b.parentCtx.drawImage(b.canvas, b.left, b.top, b.width, b.height)
            }
        }, a && b.setProperties(a), b
    }, q.listbox = function(a, b, c, d) {
        function e() {
            var a = m.length;
            o = Math.floor(g.height / p), g.centerSelection && (o = 1);
            var b = 18,
                c = b,
                d = g.height - 4 - 32,
                e = d;
            s = 0, a > o && (e = Math.floor(o / a * d), e < 12 && (e = 12), s = (d - e) / (a - o)), n && s && (c = Math.floor(b + s * n)), x.setProperties({
                left: g.width - 18,
                top: c,
                width: 16,
                height: e
            })
        }

        function f() {
            var a = m.length - 1;
            return g.centerSelection || (a = m.length - o), a < 0 && (a = 0), a
        }
        var g = q.element(a, b, c, d, !0);
        g.selectedIndex = 0;
        var h, i, j = 0,
            k = window.fontMed,
            l = window.fontSmall,
            m = [],
            n = 0,
            o = 0,
            p = 18,
            r = 10,
            s = 0,
            t = ["left", "top", "width", "height", "name", "type", "onChange", "selectedIndex", "centerSelection"];
        g.setProperties = function(a) {
            t.forEach(function(b) {
                "undefined" != typeof a[b] && (g[b] = a[b])
            }), g.setSize(g.width, g.height), g.setPosition(g.left, g.top), u.setSize(g.width, g.height), e(), v.setProperties({
                left: g.width - 18,
                top: 2,
                width: 16,
                height: 16,
                label: "↑"
            }), w.setProperties({
                left: g.width - 18,
                top: g.height - 19,
                width: 16,
                height: 16,
                label: "↓"
            }), g.centerSelection && (r = Math.ceil((g.height - p) / 2))
        }, g.setSelectedIndex = function(a, b) {
            g.selectedIndex = a, g.centerSelection && (n = g.selectedIndex), e(), g.refresh(), !b && g.onChange && j != g.selectedIndex && g.onChange(), j = g.selectedIndex
        }, g.getSelectedIndex = function() {
            return g.selectedIndex
        };
        var u = q.scale9Panel(0, 0, g.width, g.height, {
            img: fa.getImage("panel_dark"),
            left: 3,
            top: 3,
            right: 2,
            bottom: 2
        });
        u.ignoreEvents = !0, g.addChild(u);
        var v = q.Assets.generate("button20_20");
        g.addChild(v), v.onClick = function() {
            g.navigateUp()
        };
        var w = q.Assets.generate("button20_20");
        g.addChild(w), w.onClick = function() {
            g.navigateDown()
        };
        var x = q.scale9Panel(c - 28, 18, 16, d - 3, {
            img: fa.getImage("bar"),
            left: 2,
            top: 2,
            right: 3,
            bottom: 3
        });
        return x.onDragStart = function() {
            x.startDragIndex = n
        }, x.onDrag = function(a) {
            if (m.length > o && s) {
                var b = a.dragY - a.startY;
                n = Math.floor(x.startDragIndex + b / s), n = Math.min(n, f()), n = Math.max(n, 0), g.centerSelection ? g.setSelectedIndex(n) : e()
            }
        }, g.addChild(x), g.navigateUp = function() {
            n > 0 && (n--, e()), g.centerSelection ? g.setSelectedIndex(n) : g.refresh()
        }, g.navigateDown = function() {
            n < f() && (n++, e()), g.centerSelection ? g.setSelectedIndex(n) : g.refresh()
        }, g.render = function(a) {
            if (a = !!a, g.isVisible()) {
                if (this.needsRendering) {
                    u.render();
                    for (var b = fa.getImage("line_hor"), c = 0, d = m.length; c < d; c++) {
                        var e = m[c],
                            f = 10,
                            i = 10,
                            j = 6,
                            o = r + (c - n) * p;
                        if (o > 0 && o < g.height) {
                            var q, s = g.ctx,
                                t = o,
                                y = o >= g.height - p;
                            if (y) {
                                var z = g.height - o + 1;
                                z > 1 ? (q = document.createElement("canvas"), q.width = g.width - 2, q.height = z, s = q.getContext("2d"), t = 4, j = 6) : s = void 0
                            }
                            if (s) {
                                h + n === c && (s.fillStyle = "rgba(110,130,220,0.07)", s.fillRect(0, t - j, g.width - 2, p)), g.selectedIndex === c && (s.fillStyle = "rgba(110,130,220,0.15)", s.fillRect(0, t - j, g.width - 2, p)), e.level && (f += e.level * i), e.icon && (s.drawImage(e.icon, f, t - 2), f += e.icon.width + 4);
                                var A = e.label;
                                if (k) {
                                    if (e.info) {
                                        var B = 6 * e.info.length + 20;
                                        l.write(s, e.info, g.width - B, t, 0),
                                            A = A.substr(0, Math.floor((g.width - B - f - 26) / k.charWidth))
                                    }
                                    k.write(s, A, f, t, 0)
                                }
                                o += 11, t += 11, b && s.drawImage(b, 0, t, g.width - 2, 2), y && g.ctx.drawImage(q, 0, o - 11 - 4)
                            }
                        }
                    }
                    x.render(), v.render(), w.render()
                }
                return this.needsRendering = !1, a ? g.canvas : void g.parentCtx.drawImage(g.canvas, g.left, g.top, g.width, g.height)
            }
        }, g.setItems = function(a) {
            m = a, n = Math.min(n, f()), e(), g.refresh()
        }, g.getItems = function() {
            return m
        }, g.getItemAtPosition = function(a, b) {
            b -= r;
            var c = Math.floor(b / p) + n;
            return c >= 0 && c < m.length ? m[c] : void 0
        }, g.insertItemAfterIndex = function(a, b, c) {}, g.onMouseWheel = function(a) {
            a.mouseWheels[0] > 0 ? g.navigateUp() : g.navigateDown()
        }, g.onDragStart = function(a) {
            g.startDragIndex = n
        }, g.onDrag = function(a) {
            if (m.length > o) {
                var b = Math.round((a.dragY - a.startY) / p);
                n = g.startDragIndex - b, n = Math.max(n, 0), n = Math.min(n, f()), g.centerSelection ? g.setSelectedIndex(n) : e()
            }
        }, g.onHover = function(a) {
            var b = Math.floor((g.eventY - r) / p);
            b !== i && (h = b, i = h, g.refresh())
        }, g.onHoverExit = function() {
            h && (h = void 0, i = void 0, g.refresh())
        }, g
    }, q.menu = function(a, b, c, d, e) {
        var f = q.element(a, b, c, d);
        f.keepSelection = !0;
        var g, h, i = ["left", "top", "width", "height", "name", "type", "background", "layout"],
            j = [];
        return f.setProperties = function(a) {
            i.forEach(function(b) {
                "undefined" != typeof a[b] && (f[b] = a[b])
            }), a.background && (h = q.scale9Panel(0, 0, f.width, f.height, a.background), h.ignoreEvents = !0, f.addChild(h)), f.setSize(f.width, f.height), f.setPosition(f.left, f.top)
        }, f.onClick = function(a) {
            if (g && g.length) {
                var b, c = a.x,
                    d = 0,
                    e = g.length;
                for (b = 0; b < e && !(c < g[b].startX); b++) d = b;
                for (selectedItem = g[d], b = 0; b < e; b++) b !== d && g[b].subMenu && g[b].subMenu.hide();
                selectedItem && (selectedItem.subMenu && (selectedItem.subMenu.setPosition(selectedItem.startX || 0, f.height), selectedItem.subMenu.toggle(), selectedItem.subMenu.parent.refresh()), selectedItem.command && N.trigger(s.command, selectedItem.command))
            }
        }, f.render = function(a) {
            if (f.isVisible()) {
                if (a = !!a, this.needsRendering) {
                    var b = 10,
                        c = 10,
                        d = 9,
                        e = 24;
                    f.clearCanvas(), h && h.render(), j.length ? j.forEach(function(a) {
                        a.render()
                    }) : g && g.forEach(function(a) {
                        a.startX = b, fontMed.write(f.ctx, a.label, b, c), b += a.label.length * d + e
                    })
                }
                return this.needsRendering = !1, a ? f.canvas : void f.parentCtx.drawImage(f.canvas, f.left, f.top, f.width, f.height)
            }
        }, f.setItems = function(a) {
            g = a, e = e || f.parent, j = [];
            var b = {
                    background: q.Assets.buttonKeyScale9,
                    activeBackground: q.Assets.buttonKeyActiveScale9,
                    isActive: !1,
                    textAlign: "center",
                    font: window.fontDark,
                    paddingTopActive: 1
                },
                c = 3,
                d = 3;
            g.forEach(function(a, g) {
                if ("buttons" === f.layout) {
                    var h = q.button(c, d, 60, 18);
                    c += 60, 1 === g && (c = 3, d += 18), h.setProperties(b), h.setLabel(a.label), a.onClick && (h.onClick = function() {
                        a.onClick()
                    }), j.push(h), f.addChild(h)
                }
                if (a.subItems) {
                    var i = q.submenu();
                    i.setProperties({
                        background: q.Assets.buttonLightScale9
                    }), i.hide(), i.setItems(a.subItems), i.zIndex = 200, e.addChild(i), a.subMenu = i
                }
            }), f.zIndex = 9, f.refresh()
        }, f.getItems = function() {
            return g
        }, f.getItemAtPosition = function(a, b) {
            b -= startY;
            var c = Math.floor(b / lineHeight) + visibleIndex;
            return c >= 0 && c < g.length ? g[c] : void 0
        }, f
    }, q.modalDialog = function(a) {
        var b = q.element(),
            c = "",
            d = ["left", "top", "width", "height", "name", "ok", "cancel"];
        b.setProperties = function(a) {
            d.forEach(function(c) {
                "undefined" != typeof a[c] && (b[c] = a[c])
            }), b.setSize(b.width, b.height), b.setPosition(b.left, b.top);
            var c = 200;
            b.height < c && (c = b.height - 20);
            var h = Math.max(Math.floor(b.width / 2), 380);
            e.setSize(h, c), e.setPosition(Math.floor((b.width - h) / 2), Math.floor((b.height - c) / 2)), b.cancel ? (f.setPosition(e.left + Math.floor(e.width / 2) - 110, e.top + e.height - 40), g.setPosition(e.left + Math.floor(e.width / 2) + 10, e.top + e.height - 40)) : f.setPosition(e.left + Math.floor(e.width / 2) - 50, e.top + e.height - 40)
        };
        var e = q.scale9Panel(0, 0, Math.floor(b.width / 2), 200, q.Assets.panelMainScale9);
        e.ignoreEvents = !0, b.addChild(e);
        var f = q.Assets.generate("buttonLight");
        f.setProperties({
            name: "okbutton",
            label: "OK",
            width: 100,
            height: 28
        }), b.addChild(f);
        var g = q.Assets.generate("buttonLight");
        return g.setProperties({
            name: "cancelbutton",
            label: "Cancel",
            width: 100,
            height: 28
        }), b.addChild(g), b.render = function(a) {
            if (a = !!a, this.needsRendering) {
                if (b.ctx.fillStyle = "rgba(0,0,0,0.6)", b.ctx.fillRect(0, 0, b.width, b.height), e.render(), c) {
                    var d = c.split("/"),
                        h = e.top + 20,
                        i = e.width - 20;
                    d.forEach(function(a) {
                        var c = 10;
                        if (fontFT) {
                            var d = fontFT.getTextWidth(a, 0);
                            c = e.left + 10 + Math.floor((i - d) / 2), fontFT.write(b.ctx, a, c, h, 0)
                        }
                        h += 12
                    })
                }
                b.ok && f.render(), b.cancel && g.render()
            }
            return this.needsRendering = !1, a ? b.canvas : void b.parentCtx.drawImage(b.canvas, b.left, b.top, b.width, b.height)
        }, b.setText = function(a) {
            c = a
        }, b.getText = function() {
            return c
        }, b.close = function() {
            b.hide(), b.onClose && b.onClose(), q.removeModalElement(), delete b
        }, b
    }, q.numberDisplay = function(a, b, c, d, e) {
        function f() {
            for (var a = "" + e; a.length < h;) a = i + a;
            return a
        }
        var g = q.element(a, b, c, d);
        g.type = "numberDisplay", g.isActive = !1;
        var e = e || 0,
            h = 4,
            i = " ",
            j = 2,
            k = ["left", "top", "width", "height", "name", "value"];
        return g.setProperties = function(a) {
            k.forEach(function(b) {
                if ("undefined" != typeof a[b]) switch (b) {
                    case "value":
                        e = a[b];
                        break;
                    default:
                        g[b] = a[b]
                }
            }), g.setSize(g.width, g.height), g.setPosition(g.left, g.top)
        }, g.setValue = function(a) {
            e = a, g.refresh()
        }, g.setDisabled = function(a) {
            "undefined" == typeof a && (a = !0), g.isDisabled = a, a && (g.isActive = !1), g.refresh()
        }, g.onResize = function() {
            h = Math.floor(g.width / 9) - 1
        }, g.render = function(a) {
            if (g.isVisible()) {
                if (g.needsRendering) {
                    a = !!a, g.ctx.clearRect(0, 0, g.width, g.height);
                    var b = j,
                        c = j,
                        d = g.width - 2 * j,
                        e = g.height - 2 * j;
                    g.ctx.drawImage(fa.getImage("panel_inset_dark"), b, c, d, e), b += 4, c = 7, window.fontLed.write(g.ctx, f(), b, c, 0), g.isDisabled && (g.ctx.fillStyle = "rgba(34, 49, 85, 0.6)", g.ctx.fillRect(0, 0, g.width, g.height)), g.renderInternal && g.renderInternal()
                }
                return g.needsRendering = !1, a ? g.canvas : void g.parentCtx.drawImage(g.canvas, g.left, g.top, g.width, g.height)
            }
        }, g
    }, q.panel = function(a, b, c, d) {
        var e = q.element(a, b, c, d);
        e.type = "panel";
        var f = ["left", "top", "width", "height", "name", "type", "zIndex", "backgroundColor", "borderColor"];
        return e.setProperties = function(a) {
            f.forEach(function(b) {
                "undefined" != typeof a[b] && (e[b] = a[b])
            }), e.setSize(e.width, e.height), e.setPosition(e.left, e.top), e.setLayout && e.setLayout(e.left, e.top, e.width, e.height)
        }, e.render = function(a) {
            if (e.isVisible()) return a = !!a, this.needsRendering && (e.clearCanvas(), e.backgroundColor && (e.ctx.fillStyle = e.backgroundColor, e.ctx.fillRect(0, 0, e.width, e.height)), e.borderColor && (e.ctx.fillStyle = e.borderColor, e.ctx.rect(0, 0, e.width, e.height), e.ctx.stroke()), this.children.forEach(function(a) {
                a.render()
            }), e.renderInternal && e.renderInternal()), this.needsRendering = !1, a ? e.canvas : void e.parentCtx.drawImage(e.canvas, e.left, e.top, e.width, e.height)
        }, e.onClick = function() {}, e.sortZIndex = function() {
            this.children.sort(function(a, b) {
                return a.zIndex == b.zIndex ? 0 : a.zIndex > b.zIndex || -1
            })
        }, e
    }, q.radioGroup = function(a, b, c, d) {
        var e, f, g, h = q.element(a, b, c, d, !0),
            i = [],
            j = 0,
            k = "small",
            l = "right",
            m = -3,
            n = 13,
            o = "radio",
            p = ["left", "top", "width", "height", "name"];
        return h.setProperties = function(a) {
            p.forEach(function(b) {
                "undefined" != typeof a[b] && (h[b] = a[b])
            }), h.setSize(h.width, h.height), h.setPosition(h.left, h.top), a.align && (l = a.align), a.size && (k = a.size), a.divider && (f = a.divider), a.type && (o = a.type), a.highLightSelection && (g = !0)
        }, h.onClick = function(a) {
            h.setSelectedIndex(Math.floor((h.eventY - j + m) / n))
        }, h.setSelectedIndex = function(a, b) {
            a = Math.min(a, i.length - 1);
            for (var c = 0, d = i.length; c < d; c++) i[c].active = c == a;
            h.selectedIndex = a, h.refresh(), !b && h.onChange && e != h.selectedIndex && h.onChange(h.selectedIndex), e = h.selectedIndex
        }, h.getSelectedIndex = function() {
            return h.selectedIndex
        }, h.getSelectedItem = function() {
            return i[h.selectedIndex]
        }, h.render = function(a) {
            if (a = !!a, h.isVisible()) {
                if (this.needsRendering) {
                    h.clearCanvas();
                    var b = fa.getImage("radio_active"),
                        c = fa.getImage("radio_inactive");
                    n = Math.floor(h.height / i.length);
                    var d = fontSmall,
                        e = 5,
                        o = h.width - 15;
                    m = -3, "med" === k && (b = fa.getImage("radio_big_active"), c = fa.getImage("radio_big_inactive"), m = -2, o = h.width - 20, d = fontMed);
                    var p = Math.floor((n - d.charHeight) / 2);
                    "left" === l && (e = 30, o = 5);
                    for (var q = fa.getImage("line_hor"), r = 0, s = i.length; r < s; r++) {
                        var t = i[r],
                            u = j + r * n,
                            v = u + p;
                        if ("line" == f && r > 0 && h.ctx.drawImage(q, 0, u, h.width, 2), d) {
                            if ("right" === l) {
                                var w = t.label;
                                if (e = o - d.getTextWidth(t.label, 0) - 4, e < 0 && t.labels) {
                                    var x = o - 4;
                                    t.labels.forEach(function(a) {
                                        a.width <= x && (w = a.label)
                                    }), e = o - d.getTextWidth(w, 0) - 4
                                }
                            }
                            d.write(h.ctx, w, e, v, 0)
                        }
                        t.active ? (g && (h.ctx.fillStyle = "rgba(100,100,255,0.1", h.ctx.fillRect(0, u, h.width - 2, n)), h.ctx.drawImage(b, o, v + m)) : h.ctx.drawImage(c, o, v + m)
                    }
                }
                return this.needsRendering = !1, a ? h.canvas : void h.parentCtx.drawImage(h.canvas, h.left, h.top, h.width, h.height)
            }
        }, h.setItems = function(a) {
            h.selectedIndex = void 0, i = a;
            for (var b = 0, c = i.length; b < c; b++) i[b].active && (h.selectedIndex = b);
            h.refresh()
        }, h.getItemAtPosition = function(a, b) {
            b -= j;
            var c = Math.floor(b / n) + visibleIndex;
            return c >= 0 && c < i.length ? (i[c].index = c, i[c]) : void 0
        }, h
    }, q.rangeSlider = function(a) {
        var b = q.element();
        b.type = "rangeslider";
        var c = ["left", "top", "width", "height", "name", "onChange"],
            d = fa.getImage("slider_knob"),
            e = fa.getImage("slider_knob_vert"),
            f = fa.getImage("slider_back"),
            g = fa.getImage("slider_back_vert"),
            h = !1,
            i = 0,
            j = q.scale9Panel(0, 0, 0, 0, {
                img: f,
                left: 4,
                right: 4,
                top: 0,
                bottom: 0,
                scale: "repeatX"
            });
        b.addChild(j), j.ignoreEvents = !0;
        var k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 100,
            r = 0;
        return b.setProperties = function(a) {
            c.forEach(function(c) {
                "undefined" != typeof a[c] && (b[c] = a[c])
            }), b.setSize(b.width, b.height), b.setPosition(b.left, b.top), "undefined" != typeof a.min && (o = a.min), "undefined" != typeof a.max && (p = a.max), "undefined" != typeof a.value && b.setValue(a.value, !0), "undefined" != typeof a.vertical && (h = !!a.vertical, j.setProperties({
                img: g,
                imgLeft: 0,
                imgRight: 0,
                imgTop: 4,
                imgBottom: 4,
                scale: "repeatY"
            }))
        }, b.getValue = function() {
            return r
        }, b.setValue = function(a, c) {
            a > p && (a = p), a < o && (a = o);
            var e = !c && r !== a;
            if (r = a, h) {
                var f = p - o;
                l = i * (1 - (a - o) / f)
            } else {
                var g = b.width - d.width;
                k = g * a / p
            }
            b.refresh(), e && !c && b.onChange && b.onChange(r)
        }, b.setMax = function(a, c) {
            p = a, !c && r > p && b.setValue(p)
        }, b.setMin = function(a, c) {
            o = a, !c && r < o && b.setValue(o)
        }, b.render = function(a) {
            if (b.needsRendering) {
                a = !!a, b.clearCanvas();
                var c = Math.floor(b.width / 2) + 3,
                    f = 6,
                    g = b.height;
                o < 0 && (g = Math.floor(g / 2)), b.ctx.fillStyle = "rgba(255,255,255,0.1", b.ctx.beginPath(), b.ctx.moveTo(c, g), b.ctx.lineTo(c, 2), b.ctx.lineTo(c + f, 2), b.ctx.fill(), o < 0 ? (b.ctx.beginPath(), b.ctx.moveTo(c - 6, g), b.ctx.lineTo(c - 6, b.height), b.ctx.lineTo(c - 6 - f, b.height), b.ctx.fill()) : (b.ctx.beginPath(), b.ctx.moveTo(c - 6, g), b.ctx.lineTo(c - 6, 2), b.ctx.lineTo(c - 6 - f, 2), b.ctx.fill()), j.render(), h ? b.ctx.drawImage(e, -1, l, e.width, e.height) : b.ctx.drawImage(d, k, -1, d.width, d.height)
            }
            return b.needsRendering = !1, a ? b.canvas : void b.parentCtx.drawImage(b.canvas, b.left, b.top, b.width, b.height)
        }, b.onResize = function() {
            i = b.height - e.height + 3, j.setSize(b.width, b.height), b.setValue(r, !0)
        }, b.onDragStart = function() {
            m = k, n = l
        }, b.onDrag = function(a) {
            if (h) {
                var c = a.dragY - a.startY;
                if (l = n + c, l < 0 && (l = 0), l > i && (l = i), i > d.height) {
                    var e = p - o,
                        f = e - Math.round(e * l / i);
                    r = f + o
                } else r = p
            } else {
                c = a.dragX - a.startX, k = m + c, k < 0 && (k = 0);
                var g = b.width - d.width;
                k > g && (k = g), r = g > d.width ? Math.round(p * k / g) : 0
            }
            b.refresh(), b.onChange && b.onChange(r)
        }, a && b.setProperties(a), b
    }, q.scale9Panel = function(a, b, c, d, e) {
        var f = q.element(a, b, c, d, !0);
        f.type = "scale9", e.scale = e.scale || "stretch", f.setProperties = function(a) {
            var b = ["left", "top", "width", "height", "name", "type"];
            if (!a) {
                var c = {};
                return b.forEach(function(a) {
                    c[a] = f[a]
                }), c
            }
            b.forEach(function(b) {
                "undefined" != typeof a[b] && (f[b] = a[b])
            }), "undefined" != typeof a.img && (e.img = a.img), "undefined" != typeof a.scale && (e.scale = a.scale), "undefined" != typeof a.imgTop && (e.top = a.imgTop), "undefined" != typeof a.imgBottom && (e.bottom = a.imgBottom), "undefined" != typeof a.imgLeft && (e.left = a.imgLeft), "undefined" != typeof a.imgRight && (e.right = a.imgRight), f.setSize(f.width, f.height), f.setPosition(f.left, f.top)
        };
        var g = function() {
            var a = e.img;
            if (a) {
                var b = a.width - e.left - e.right,
                    c = a.height - e.top - e.bottom,
                    d = f.width - e.left - e.right,
                    g = f.height - e.top - e.bottom;
                if (f.clearCanvas(), e.top && e.left && f.ctx.drawImage(a, 0, 0, e.left, e.top, 0, 0, e.left, e.top), e.top && f.ctx.drawImage(a, e.left, 0, b, e.top, e.left, 0, d, e.top), e.top && e.right && f.ctx.drawImage(a, e.left + b, 0, e.right, e.top, e.left + d, 0, e.right, e.top), e.left && f.ctx.drawImage(a, 0, e.top, e.left, c, 0, e.top, e.left, g), "stretch" === e.scale && f.ctx.drawImage(a, e.left, e.top, b, c, e.left, e.top, d, g), "repeatX" === e.scale)
                    for (var h, i = e.left, j = e.left + d; i < j;) h = b, i + h > j && (h = j - i), f.ctx.drawImage(a, e.left, e.top, h, c, i, e.top, h, c), i += h;
                if ("repeatY" === e.scale) {
                    var k = e.top;
                    j = e.top + g;
                    for (var l; k < j;) l = c, k + l > j && (l = j - k), f.ctx.drawImage(a, e.left, e.top, b, l, e.left, k, b, l), k += l
                }
                e.right && f.ctx.drawImage(a, e.left + b, e.top, e.right, c, e.left + d, e.top, e.right, g), e.bottom && e.left && f.ctx.drawImage(a, 0, e.top + c, e.left, e.bottom, 0, e.top + g, e.left, e.bottom), e.bottom && f.ctx.drawImage(a, e.left, e.top + c, b, e.bottom, e.left, e.top + g, d, e.bottom), e.bottom && e.right && f.ctx.drawImage(a, e.left + b, e.top + c, e.right, e.bottom, e.left + d, e.top + g, e.right, e.bottom)
            }
        };
        return f.render = function(a) {
            if (a = !!a, f.isVisible()) return f.needsRendering && g(), f.needsRendering = !1, a ? f.canvas : void f.parentCtx.drawImage(f.canvas, f.left, f.top)
        }, f
    }, q.submenu = function(a, b, c, d) {
        var e, f, g, h, i = q.element(a, b, c, d),
            j = 26,
            k = ["left", "top", "width", "height", "name", "type"],
            l = 9,
            m = 9,
            n = 9;
        return i.setProperties = function(a) {
            k.forEach(function(b) {
                "undefined" != typeof a[b] && (i[b] = a[b])
            }), a.background && (f = q.scale9Panel(0, 0, i.width, i.height, a.background), f.ignoreEvents = !0, i.addChild(f)), i.setSize(i.width, i.height), i.setPosition(i.left, i.top)
        }, i.onHover = function(a) {
            var b = Math.floor(i.eventY / j);
            b != h && (g = b, h = g, i.refresh())
        }, i.onHoverExit = function() {
            g && (g = void 0, h = void 0, i.refresh())
        }, i.onClick = function(a) {
            if (e && e.length) {
                var b = e[Math.floor(i.eventY / j)];
                b && b.command && (i.hide(), i.parent.refresh(), N.trigger(s.command, b.command))
            }
        }, i.render = function(a) {
            if (i.isVisible()) {
                if (a = !!a, this.needsRendering) {
                    i.clearCanvas(), f && f.render();
                    for (var b = fa.getImage("line_hor"), c = 0, d = 0, h = i.width - 3, k = e.length - 1, n = 0; n <= k; n++) {
                        var o = e[n];
                        n == g && (i.ctx.fillStyle = "rgba(255,255,255,0.2)", i.ctx.fillRect(d, c, h, j)), o.label && fontFT.write(i.ctx, o.label, d + m, c + l), c += j, n < k && i.ctx.drawImage(b, d, c, h, 2)
                    }
                }
                return this.needsRendering = !1, a ? i.canvas : void i.parentCtx.drawImage(i.canvas, i.left, i.top, i.width, i.height)
            }
        }, i.setItems = function(a) {
            e = a;
            var b = 50;
            e.forEach(function(a) {
                var c = a.label ? a.label.length * n : 0;
                c += 2 * m + 6, b = Math.max(b, c)
            });
            var c = e.length * j + 4;
            i.setSize(b, c), f && f.setSize(i.width, i.height), i.refresh()
        }, i.getItems = function() {
            return e
        }, i
    }, q.DiskOperationActions = function() {
        var a = q.panel(),
            b = q.scale9Panel(0, 0, 20, 20, q.Assets.panelDarkInsetScale9);
        b.ignoreEvents = !0, a.addChild(b);
        var c = q.scale9Panel(0, 0, 20, 20, q.Assets.panelDarkGreyScale9);
        c.ignoreEvents = !0, a.addChild(c);
        var d = q.label({
            label: "Action",
            font: fontSmall
        });
        a.addChild(d);
        var e = q.radioGroup();
        return e.setProperties({
            align: "right",
            size: "med",
            divider: "line",
            type: "buttons",
            highLightSelection: !0
        }), e.setItems([{
            label: "load",
            active: !0
        }, {
            label: "save",
            active: !1
        }]), e.onChange = function(a) {
            N.trigger(s.diskOperationActionChange, this.getSelectedItem())
        }, a.addChild(e), a.setLayout = function() {
            var f = a.width - 2,
                g = 70;
            a.height < 100 && (g = a.height - 20), q.mainPanel && (a.clearCanvas(), b.setProperties({
                left: 0,
                top: 0,
                height: a.height,
                width: a.width
            }), c.setProperties({
                left: 1,
                top: 1,
                height: 16,
                width: f
            }), d.setProperties({
                left: -1,
                top: 3,
                height: 16,
                width: f
            }), e.setProperties({
                left: 4,
                width: f - 4,
                height: g,
                top: 18
            }))
        }, a.getAction = function() {
            var a = e.getSelectedIndex(),
                b = "load";
            return 1 == a && (b = "save"), b
        }, a.setSelectedIndex = function(a) {
            e.setSelectedIndex(a)
        }, a
    }, q.DiskOperationSave = function() {
        function a() {
            var a = b,
                c = b.lastIndexOf("."),
                d = "";
            c >= 0 && (a = b.substr(0, c), d = b.substr(c));
            var e = l.getSelectedItem();
            e && e.extention && (d = e.extention), ".mod" === d && da.inFTMode() && (d = ".xm"), n.setValue(a + d)
        }
        var b, c = q.panel(),
            d = v.module,
            e = v.module,
            f = w.mod,
            h = "local",
            j = q.scale9Panel(0, 0, 20, 20, q.Assets.panelDarkInsetScale9);
        j.ignoreEvents = !0, c.addChild(j);
        var k = {};
        k[v.module] = [{
            label: "module",
            active: !0,
            extention: ".mod",
            fileType: v.module
        }, {
            label: "wav",
            active: !1,
            extention: ".wav",
            fileType: v.sample,
            fileFormat: x.WAVE_PCM
        }, {
            label: "mp3",
            active: !1,
            extention: ".mp3",
            fileType: v.sample,
            fileFormat: x.MP3
        }], k[v.sample] = [{
            label: "wav 16 bit",
            active: !1,
            extention: ".wav",
            fileType: v.sample,
            fileFormat: x.RIFF_16BIT
        }, {
            label: "wav 8 bit",
            active: !0,
            extention: ".wav",
            fileType: v.sample,
            fileFormat: x.RIFF_8BIT
        }, {
            label: "RAW 8 bit",
            active: !1,
            extention: ".sample",
            fileType: v.sample,
            fileFormat: x.RAW_8BIT
        }];
        var l = q.radioGroup();
        l.setProperties({
            align: "right",
            size: "med",
            divider: "line",
            highLightSelection: !0
        }), l.setItems(k[v.module]), l.onChange = function(b) {
            var c = this.getSelectedItem();
            d = c && c.fileType ? c.fileType : v.module, f = c && c.fileFormat ? c.fileFormat : w.mod, a()
        }, c.addChild(l);
        var m = q.button();
        m.setProperties({
            label: "Export",
            textAlign: "center",
            background: q.Assets.buttonLightScale9,
            font: window.fontMed
        }), m.onClick = function() {
            if (e == v.module && (d == v.module && R.save(b, h), d == v.sample && qa.renderFile(b, f === x.MP3)), e == v.sample) {
                var a = da.getCurrentInstrument().sample;
                if (a) {
                    if (f === x.RAW_8BIT) {
                        var c = a.length,
                            j = new ArrayBuffer(c),
                            k = new g(j, !0);
                        k.clear(2);
                        var l;
                        for (i = 0; i < a.length - 2; i++) l = a.data[i] || 0, k.writeByte(Math.round(127 * l))
                    } else k = o(a.data, f === x.RIFF_16BIT ? 16 : 8);
                    var m = new Blob([k.buffer], {
                        type: "application/octet-stream"
                    });
                    "dropbox" === h ? ra.putFile("/" + b, m) : P(m, b)
                }
            }
        }, c.addChild(m);
        var n = q.inputbox({
            name: "fileNameInput",
            height: 20,
            onChange: function(a) {
                b = a
            },
            backgroundImage: "panel_mid"
        });
        return c.addChild(n), c.setLayout = function() {
            var a = c.width - 2;
            q.mainPanel && (c.clearCanvas(), j.setProperties({
                left: 0,
                top: 0,
                height: c.height,
                width: c.width
            }), n.setProperties({
                left: 4,
                width: a - 6,
                top: 4
            }), m.setProperties({
                left: 2,
                width: a,
                height: 28,
                top: c.height - 27
            }), l.setProperties({
                left: 4,
                width: a - 4,
                height: c.height - m.height - 30,
                top: 30
            }))
        }, N.on(s.songPropertyChange, function(c) {
            b = c.filename || "", a()
        }), N.on(s.diskOperationTargetChange, function(a) {
            h = a, h.target && (h = h.target), a && a.fileType && (e = a.fileType, e == v.sample && (b = da.getCurrentInstrument().name.replace(/ /g, "-").replace(/\W/g, "")), e == v.module && (b = da.getFileName()), k[e] && (l.setItems(k[e]), l.onChange()))
        }), N.on(s.instrumentChange, function(d) {
            c.isVisible() && e == v.sample && (b = da.getCurrentInstrument().name.replace(/ /g, "-").replace(/\W/g, "") || "Sample-" + da.getCurrentInstrumentIndex(), a())
        }), N.on(s.trackerModeChanged, function(d) {
            c.isVisible() && e == v.module && (b = da.getSong().filename || "", a())
        }), c
    }, q.DiskOperationTargets = function() {
        var a = q.panel(),
            b = "bassoon",
            c = q.scale9Panel(0, 0, 20, 20, q.Assets.panelDarkInsetScale9);
        c.ignoreEvents = !0, a.addChild(c);
        var d = q.scale9Panel(0, 0, 20, 20, q.Assets.panelDarkGreyScale9);
        d.ignoreEvents = !0, a.addChild(d);
        var e = q.label({
            label: "From",
            font: fontSmall
        });
        a.addChild(e);
        var f = [{
                label: "Bassoon:",
                target: "bassoon",
                active: !0
            }, {
                label: "Modarchive:",
                target: "modarchive"
            }, {
                label: "Modules.pl:",
                target: "modulespl"
            }, {
                label: "Dropbox:",
                target: "dropbox"
            }, {
                label: "local:",
                target: "local"
            }],
            g = [{
                label: "Bassoon:",
                target: "bassoon",
                active: !0
            }, {
                label: "Dropbox:",
                target: "dropbox"
            }, {
                label: "local:",
                target: "local"
            }],
            h = [{
                label: "local:",
                target: "local",
                active: !0
            }, {
                label: "Dropbox:",
                target: "dropbox"
            }],
            i = f,
            j = "load",
            k = q.radioGroup();
        return k.setProperties({
            align: "right",
            size: "med",
            divider: "line",
            highLightSelection: !0
        }), k.setItems(f), k.onChange = function(a) {
            N.trigger(s.diskOperationTargetChange, this.getSelectedItem())
        }, a.addChild(k), a.setLayout = function() {
            var b = a.width - 3;
            if (q.mainPanel) {
                a.clearCanvas(), c.setProperties({
                    left: 0,
                    top: 0,
                    height: a.height,
                    width: a.width
                }), d.setProperties({
                    left: 2,
                    top: 1,
                    height: 16,
                    width: b
                }), e.setProperties({
                    left: -1,
                    top: 3,
                    height: 16,
                    width: b
                });
                var f = 18;
                k.setProperties({
                    width: b,
                    height: a.height - f - 2,
                    left: 2,
                    top: f
                })
            }
        }, a.getTarget = function() {
            return b
        }, N.on(s.diskOperationTargetChange, function(a) {
            a && a.fileType && ("save" === j ? k.setItems(h) : (a.fileType === v.module && (i = f), a.fileType === v.sample && (i = g), k.setItems(i)), k.setSelectedIndex(0))
        }), N.on(s.diskOperationActionChange, function(a) {
            "save" === a.label ? (e.setLabel("To"), j = "save", k.setItems(h)) : (e.setLabel("From"), j = "load", k.setItems(i)), N.trigger(s.diskOperationTargetChange, k.getSelectedItem())
        }), N.on(s.dropboxConnectCancel, function() {
            k.setSelectedIndex(0)
        }), a
    }, q.DiskOperationType = function() {
        var a = q.panel(),
            b = q.scale9Panel(0, 0, 20, 20, q.Assets.panelDarkInsetScale9);
        b.ignoreEvents = !0, a.addChild(b);
        var c = q.scale9Panel(0, 0, 20, 20, q.Assets.panelDarkGreyScale9);
        c.ignoreEvents = !0, a.addChild(c);
        var d = q.label({
            label: "Type",
            font: fontSmall
        });
        a.addChild(d);
        var e = q.radioGroup();
        return e.setProperties({
            align: "right",
            size: "med",
            divider: "line",
            highLightSelection: !0
        }), e.setItems([{
            label: "module",
            active: !0,
            fileType: v.module
        }, {
            label: "sample",
            active: !1,
            fileType: v.sample
        }]), e.onChange = function(a) {
            N.trigger(s.diskOperationTargetChange, this.getSelectedItem())
        }, a.addChild(e), a.setLayout = function() {
            var f = a.width - 2,
                g = 70;
            a.height < 100 && (g = a.height - 20), q.mainPanel && (a.clearCanvas(), b.setProperties({
                left: 0,
                top: 0,
                height: a.height,
                width: a.width
            }), c.setProperties({
                left: 1,
                top: 1,
                height: 16,
                width: f
            }), d.setProperties({
                left: -1,
                top: 3,
                height: 16,
                width: f
            }), e.setProperties({
                left: 4,
                width: f - 4,
                height: g,
                top: 18
            }))
        }, a.getType = function() {
            var a = e.getSelectedIndex(),
                b = "modules";
            return 1 == a && (b = "samples"), 2 == a && (b = "patterns"), b
        }, a.setType = function(a) {
            e.setSelectedIndex(a)
        }, a
    }, q.DiskOperations = function() {
        function a(a, d) {
            D.setSelectedIndex(d), n = d, a.isExpanded ? (a.isExpanded = !1, b.refreshList()) : (a.isExpanded = !0, a.children.length ? b.refreshList() : (a.children = [{
                title: "loading ..."
            }], b.refreshList(), c ? c.get(a.url, function(b) {
                o(a, b)
            }) : S.json(a.url, function(b) {
                o(a, b)
            })))
        }
        var b = q.panel();
        b.hide();
        var c, d = "load",
            e = "modules",
            f = "",
            g = [],
            h = [],
            i = [],
            j = [],
            k = [],
            l = [],
            m = 0,
            n = 0,
            o = function() {},
            p = q.scale9Panel(0, 0, 20, 20, q.Assets.panelMainScale9);
        p.ignoreEvents = !0, b.addChild(p);
        var r = q.DiskOperationActions();
        b.addChild(r);
        var u = q.DiskOperationType();
        b.addChild(u);
        var w = q.DiskOperationTargets();
        b.addChild(w);
        var x = q.DiskOperationSave();
        b.addChild(x);
        var y = {
                background: q.Assets.buttonKeyScale9,
                activeBackground: q.Assets.buttonKeyActiveScale9,
                isActive: !1,
                textAlign: "center",
                font: window.fontDark,
                paddingTopActive: 1,
                height: 18,
                width: 50
            },
            z = q.button(),
            A = q.button();
        A.setActive(!0), z.setProperties(y), z.setLabel("Save"), z.onDown = function() {
            r.setSelectedIndex(1)
        }, b.addChild(z), A.setProperties(y), A.setLabel("Load"), A.onDown = function() {
            r.setSelectedIndex(0)
        }, b.addChild(A);
        var B = q.label({
            label: "Load module",
            font: fontMed
        });
        b.addChild(B);
        var C = q.Assets.generate("button20_20");
        C.setLabel("x"), C.onClick = function() {
            Q.doCommand(t.showTopMain)
        }, b.addChild(C);
        var D = q.listbox();
        b.addChild(D);
        var E = q.button();
        return E.setProperties({
            background: q.Assets.buttonDarkActiveScale9,
            image: fa.getImage("dropzone"),
            font: fontSmall,
            textAlign: "center"
        }), b.addChild(E), E.hide(), b.onShow = function() {
            b.onResize()
        }, b.onResize = function() {
            if (b.isVisible()) {
                b.clearCanvas(), p.setProperties({
                    left: 0,
                    top: 0,
                    height: b.height,
                    width: b.width
                });
                var a = 5;
                C.setProperties({
                    top: a - 2,
                    width: 20,
                    heigth: 18,
                    left: b.width - 30
                }), b.width >= 730 ? (r.show(), B.show(), A.hide(), z.hide(), r.setProperties({
                    top: a,
                    left: ga.col1X,
                    width: ga.col1W,
                    height: b.height - 10
                }), u.setProperties({
                    top: a,
                    left: ga.col2X,
                    width: ga.col1W,
                    height: b.height - 10
                }), w.setProperties({
                    top: a,
                    left: ga.col3X,
                    width: ga.col1W,
                    height: b.height - 10
                }), B.setProperties({
                    left: ga.col4X,
                    top: a,
                    height: 20,
                    width: ga.col2W
                }), D.setProperties({
                    left: ga.col4X,
                    width: ga.col2W,
                    top: a + 19,
                    height: b.height - (19 + a) - 5
                })) : (r.hide(), B.hide(), A.show(), z.show(), A.setProperties({
                    top: 4,
                    left: ga.col3X
                }), z.setProperties({
                    top: 4,
                    left: ga.col3X + 50
                }), u.setProperties({
                    top: a,
                    left: ga.defaultMargin,
                    width: ga.col2W,
                    height: b.height / 2 - a - 16
                }), w.setProperties({
                    top: b.height / 2 - 16,
                    left: ga.defaultMargin,
                    width: ga.col2W,
                    height: b.height / 2 + 16
                }), D.setProperties({
                    left: ga.col3X,
                    width: ga.col3W,
                    top: a + 19,
                    height: b.height - (19 + a) - 5
                })), "save" === d ? (x.setProperties({
                    left: D.left,
                    width: D.width,
                    top: D.top,
                    height: D.height
                }), D.hide(), x.show()) : (D.show(), x.hide()), E.setProperties({
                    left: D.left,
                    width: D.width,
                    top: D.top,
                    height: D.height
                })
            }
        }, b.setView = function(a) {
            f = a, b.refreshList("samples" === f ? "samples" : ""), a.indexOf("_save") > 0 && r.setSelectedIndex(1), a.indexOf("_load") > 0 && r.setSelectedIndex(0), a.indexOf("_samples") > 0 && u.setType(1), a.indexOf("_modules") > 0 && u.setType(0)
        }, b.refreshList = function(f) {
            function p(a, b) {
                a.forEach(function(a) {
                    var c;
                    a.icon && (c = fa.getImage(a.icon)), c || (c = fa.getImage("modules" === e ? "module" : "sample")), a.children && (c = fa.getImage("disk")), s.push({
                        label: a.title,
                        data: a,
                        level: b,
                        index: v,
                        icon: c,
                        info: a.info
                    }), g[v] = a, v++, a.children && a.children.length && a.isExpanded && p(a.children, b + 1)
                })
            }

            function r(a, b) {
                g = [], v = 0, b = b || 0, p(a, 0), D.setItems(s), D.setSelectedIndex(b)
            }
            if ("save" !== d) {
                var s = [],
                    v = 0;
                switch (e !== f && D.setSelectedIndex(0, !0), e = f || e, "local" == e ? (D.hide(), E.show()) : (D.show(), E.hide(), "bassoon" == e && (e = u.getType())), e) {
                    case "modules":
                        c = !1, B.setLabel("Load Module"), D.onClick = function(b) {
                            var c = D.getItemAtPosition(D.eventX, D.eventY);
                            if (c && c.data) {
                                var d = c.index;
                                c = g[d], c.children ? a(c, d) : (D.setSelectedIndex(d), da.load(c.url), Q.doCommand(t.showTopMain))
                            }
                        }, h.length ? r(h, n) : S.json("data/modules.json", function(a) {
                            a && a.modules && (h = a.modules, r(h, n))
                        });
                        break;
                    case "modarchive":
                        c = sa, B.setLabel("Browse Modarchive"), D.onClick = function(b) {
                            var c = D.getItemAtPosition(D.eventX, D.eventY);
                            if (c && c.data) {
                                var d = c.index;
                                c = g[d], c.children ? a(c, d) : (D.setSelectedIndex(d), da.load(c.url), Q.doCommand(t.showTopMain))
                            }
                        }, o = function(a, c) {
                            c && c.length ? "... load more ..." == a.title && a.parent ? (a = a.parent, c.forEach(function(b) {
                                b.parent = a
                            }), a.children.pop(), a.children = a.children.concat(c)) : (c.forEach(function(b) {
                                b.parent = a
                            }), a.children = c) : a.children = [{
                                title: "error loading data"
                            }], b.refreshList()
                        }, j.length ? r(j, 0) : (D.setItems([{
                            label: "loading ..."
                        }]), S.json("data/modarchive.json", function(a) {
                            a && a.modarchive && (j = a.modarchive, r(j, 0))
                        }));
                        break;
                    case "modulespl":
                        c = ta, B.setLabel("Browse Modules.pl"), D.onClick = function(b) {
                            var c = D.getItemAtPosition(D.eventX, D.eventY);
                            if (c && c.data) {
                                var d = c.index;
                                c = g[d], c.children ? a(c, d) : (D.setSelectedIndex(d), da.load(c.url), Q.doCommand(t.showTopMain))
                            }
                        }, o = function(a, c) {
                            c && c.length ? "... load more ..." == a.title && a.parent ? (a = a.parent, c.forEach(function(b) {
                                b.parent = a
                            }), a.children.pop(), a.children = a.children.concat(c)) : (c.forEach(function(b) {
                                b.parent = a
                            }), a.children = c) : a.children = [{
                                title: "error loading data"
                            }], b.refreshList()
                        }, k.length ? r(k, 0) : (D.setItems([{
                            label: "loading ..."
                        }]), S.json("data/modulespl.json", function(a) {
                            a && a.modulespl && (k = a.modulespl, r(k, 0))
                        }));
                        break;
                    case "dropbox":
                        c = ra, B.setLabel("Browse Your Dropbox"), q.setStatus("Contacting Dropbox", !0), D.setItems([{
                            label: "loading ..."
                        }]), D.onClick = function(b) {
                            var c = D.getItemAtPosition(D.eventX, D.eventY);
                            if (c && c.data) {
                                var d = c.index;
                                c = g[d], c.children ? a(c, d) : (D.setSelectedIndex(d), q.setInfo(c.title), q.setStatus("Loading from Dropbox", !0), ra.getFile(c, function(a) {
                                    var b = new FileReader;
                                    b.onload = function() {
                                        da.processFile(b.result, c.title, function(a) {
                                            q.setStatus("Ready")
                                        })
                                    }, b.readAsArrayBuffer(a)
                                }))
                            }
                        }, o = function(a, c) {
                            c && c.length ? (c.forEach(function(b) {
                                b.parent = a
                            }), a.children = c) : a.children = [{
                                title: "error loading data"
                            }], b.refreshList()
                        }, l.length ? r(l, 0) : ra.checkConnected(function(a) {
                            a ? ra.list("", function(a) {
                                q.setStatus(""), l = a, r(a, 0)
                            }) : ra.showConnectDialog()
                        });
                        break;
                    case "samples":
                        c = !1, B.setLabel("Load Sample to slot " + da.getCurrentInstrumentIndex()), D.onClick = function(a) {
                            var c = D.getItemAtPosition(D.eventX, D.eventY);
                            if (c && c.data) {
                                var d = c.index;
                                c = g[d], c.children ? (D.setSelectedIndex(d), m = d, c.isExpanded ? (c.isExpanded = !1, b.refreshList()) : (c.isExpanded = !0, c.children.length ? b.refreshList() : S.json(c.url, function(a) {
                                    a && a.samples && (c.children = a.samples, b.refreshList())
                                }))) : (D.setSelectedIndex(d), da.load(c.url))
                            }
                        }, o = function(a, c) {
                            c && c.samples && (a.children = c.samples, b.refreshList())
                        }, i.length ? r(i, m) : S.json("data/samples.json", function(a) {
                            a && a.samples && (i = a.samples, r(i, m))
                        });
                        break;
                    case "local":
                        c = !1, B.setLabel("Upload files")
                }
            }
        }, b.playRandomSong = function(a) {
            q.setStatus("Fetching random song", !0), q.setInfo(""), S.json("https://www.stef.be/bassoontracker/api/random" + (a || ""), function(a) {
                a && a.modarchive && a.modarchive.module && da.load(a.modarchive.module.url)
            })
        }, N.on(s.diskOperationTargetChange, function(a) {
            var c = r.getAction();
            if (a && a.target && (a = a.target), a && a.fileType && (a.fileType === v.module && (a = "modules"), a.fileType === v.sample && (a = "samples")), "undefined" == typeof a && (a = w.getTarget()), "save" === c) {
                d = "save", e = u.getType();
                var f = "Export Module";
                "samples" === e && (f = "Export Sample"), B.setLabel(f), A.isActive && A.setActive(!1), z.isActive || z.setActive(!0), b.onResize(), "dropbox" === a && ra.checkConnected(function(a) {
                    a || ra.showConnectDialog()
                })
            } else d = "load", b.refreshList(a), A.isActive || A.setActive(!0), z.isActive && z.setActive(!1)
        }), N.on(s.instrumentChange, function(a) {
            b.isVisible() && "samples" == e && B.setLabel("Load Sample to slot " + da.getCurrentInstrumentIndex())
        }), b
    }, q.editPanel = function(a, b, c, d, e) {
        var f = q.element(a, b, c, d, e);
        f.type = "EditPanel";
        var g = q.scale9Panel(0, 0, 0, 0, q.Assets.panelInsetScale9);
        f.addChild(g);
        for (var h = ["clear", "copy", "paste"], i = function(a) {
                switch (a.index) {
                    case 0:
                        R.clearTrack(), q.setStatus("Track cleared");
                        break;
                    case 1:
                        R.clearPattern(), q.setStatus("Pattern cleared");
                        break;
                    case 2:
                        R.copyTrack(), q.setStatus("Track copied");
                        break;
                    case 3:
                        R.copyPattern(), q.setStatus("Pattern copied");
                        break;
                    case 4:
                        q.setStatus(R.pasteTrack() ? "Track pasted" : "Nothing to paste!");
                        break;
                    case 5:
                        q.setStatus(R.pastePattern() ? "Pattern pasted" : "Nothing to paste!")
                }
            }, j = [], k = 0; k < 6; k++) {
            var l;
            l = q.Assets.generate("buttonDark"), l.index = k, l.onClick = function() {
                i(this)
            }, l.setProperties({
                label: "  " + h[Math.floor(k / 2)],
                font: fontSmall,
                textAlign: "center",
                paddingTop: 3
            }), f.addChild(l), j.push(l)
        }
        var m = ["left", "top", "width", "height", "name", "type"];
        return f.setProperties = function(a) {
            m.forEach(function(b) {
                if ("undefined" != typeof a[b]) switch (b) {
                    default:
                        f[b] = a[b]
                }
            }), f.setSize(f.width, f.height), f.setPosition(f.left, f.top), g.setSize(f.width, f.height);
            for (var b = Math.floor(f.width / 2) - 2, c = 21, d = 0; d < 6; d++) {
                var e = d % 2,
                    h = Math.floor(d / 2);
                j[d].setProperties({
                    left: e * b + 2,
                    width: b,
                    top: 25 + h * c,
                    height: c
                })
            }
        }, f.render = function(a) {
            if (a = !!a, f.needsRendering) {
                if (!f.isVisible()) return;
                f.clearCanvas(), g.render(), window.fontMed.write(f.ctx, "↓Track", 6, 11, 0), window.fontMed.write(f.ctx, "↓Pattern", j[1].left + 6, 11, 0);
                for (var b = 0; b < 6; b++) j[b].render()
            }
            return f.needsRendering = !1, a ? f.canvas : void f.parentCtx.drawImage(f.canvas, f.left, f.top, f.width, f.height)
        }, f
    }, q.Envelope = function(a) {
        var b = q.element();
        b.type = a;
        var c = q.scale9Panel(0, 0, b.width, b.height, {
            img: fa.getImage("panel_dark"),
            left: 3,
            top: 3,
            right: 2,
            bottom: 2
        });
        c.ignoreEvents = !0;
        var d, e, f, g, h, i, j, k, l = -1;
        return b.onResize = function() {
            j = b.width / 324, k = b.height / 64
        }, b.onHover = function(a) {
            if (!f && (l = -1, h = void 0, e && e.enabled)) {
                for (var c = Math.round(b.eventX / j), d = Math.round((b.height - b.eventY) / k), g = 0, m = e.count; g < m; g++) {
                    var n = e.points[g] || [0, 0];
                    if (Math.abs(c - n[0]) < 6 && Math.abs(d - n[1]) < 6) {
                        l = g, h = {
                            p: e.points[g],
                            minY: 0,
                            maxY: 64
                        }, 0 === g ? (h.minX = 0, h.maxX = 0) : (h.minX = e.points[g - 1][0], h.maxX = 324, g < e.count - 1 && (h.maxX = e.points[g + 1][0]));
                        break
                    }
                }
                i !== l && (i = l, b.refresh())
            }
        }, b.onDragStart = function(a) {
            h && (g = {
                startX: a.startX,
                startY: a.startY,
                pX: h.p[0],
                pY: h.p[1]
            }, f = !0)
        }, b.onDrag = function(a) {
            if (f) {
                g.deltaX = (g.startX - a.dragX) / j, g.deltaY = (g.startY - a.dragY) / k;
                var c = g.pX - g.deltaX;
                c = Math.min(h.maxX, c), c = Math.max(h.minX, c);
                var d = g.pY + g.deltaY;
                d = Math.min(h.maxY, d), d = Math.max(h.minY, d), h.p[0] = c, h.p[1] = d, b.refresh()
            }
        }, b.onTouchUp = function(a) {
            f = !1
        }, b.setInstrument = function(a) {
            d = a, e = a ? a[b.type + "Envelope"] : void 0, b.refresh()
        }, b.render = function() {
            if (this.needsRendering && (c.width !== b.width && c.setSize(b.width, b.height), b.ctx.drawImage(c.render(!0), 0, 0, b.width, b.height), b.ctx.lineWidth = 1, "panning" === b.type && (b.ctx.strokeStyle = "#4a7c92", b.ctx.setLineDash([1, 2]), i = Math.floor(b.height / 2), b.ctx.beginPath(), b.ctx.moveTo(0, i), b.ctx.lineTo(b.width, i), b.ctx.stroke()), e && e.count)) {
                var a = b.width / 324,
                    d = b.height / 64;
                b.ctx.strokeStyle = e.enabled ? "rgba(120, 255, 50, 0.5)" : "rgba(120, 120, 180, 0.5)", b.ctx.beginPath(), b.ctx.setLineDash([]);
                for (var f = 0; f < e.count; f++) {
                    var g = e.points[f];
                    if (g) {
                        var h = g[0] * a,
                            i = b.height - g[1] * d,
                            j = 4,
                            k = e.enabled ? "#D2861B" : "#546888";
                        f === l && (j = 6, k = "#FFFFFF"), b.ctx.fillStyle = k, 0 === f ? b.ctx.moveTo(h, i) : b.ctx.lineTo(h, i);
                        var m = j / 2;
                        b.ctx.fillRect(h - m, i - m, j, j)
                    }
                }
                b.ctx.stroke(), e.enabled && (e.sustain && (b.ctx.strokeStyle = "#67b6d2", b.ctx.setLineDash([1, 2]), h = e.points[e.sustainPoint][0] * a, b.ctx.beginPath(), b.ctx.moveTo(h, 0), b.ctx.lineTo(h, b.height), b.ctx.stroke()), e.loop && (b.ctx.strokeStyle = "#d2b637", b.ctx.setLineDash([1, 2]), h = e.points[e.loopStartPoint][0] * a,
                    b.ctx.beginPath(), b.ctx.moveTo(h, 0), b.ctx.lineTo(h, b.height), h = e.points[e.loopEndPoint][0] * a, b.ctx.moveTo(h, 0), b.ctx.lineTo(h, b.height), b.ctx.stroke()))
            }
            this.needsRendering = !1, b.parentCtx.drawImage(b.canvas, b.left, b.top, b.width, b.height)
        }, b
    }, q.EnvelopePanel = function(a) {
        var b = q.panel();
        b.type = a;
        var c, d, e = !1,
            f = q.scale9Panel(0, 0, 20, 20, q.Assets.panelDarkGreyScale9);
        f.ignoreEvents = !0, b.addChild(f);
        var g = q.label({
            label: a + " Envelope",
            font: fontSmall
        });
        g.onClick = function() {
            h.toggle()
        }, b.addChild(g);
        var h = q.checkbox();
        h.onToggle = function(a) {
            d && (d.enabled = a, k.refresh())
        }, b.addChild(h);
        var i = q.Assets.generate("button20_20");
        i.onDown = function() {
            if (d.enabled) {
                if (d.points.length > d.count) {
                    var a = d.points[d.count - 1] || [0, 0],
                        b = d.points[d.count];
                    a[0] + 10 < 320 && (b[0] <= a[0] && (b[0] = a[0] + 10), d.count++)
                } else {
                    var c = d.points[d.points.length - 1];
                    if (c[0] + 10 < 320) {
                        var e = [c[0] + 10, 32];
                        d.points.push(e), d.count = d.points.length
                    }
                }
                k.refresh()
            }
        }, i.setProperties({
            label: "+",
            width: 18,
            height: 18
        }), b.addChild(i);
        var j = q.Assets.generate("button20_20");
        j.onDown = function() {
            d.enabled && (d.points.length > 2 && (d.count--, b.checkMax()), k.refresh())
        }, j.setProperties({
            label: "-",
            width: 18,
            height: 18
        }), b.addChild(j);
        var k = q.Envelope(a);
        b.addChild(k);
        var l = q.panel(0, 0, 20, 20),
            m = q.checkbox(),
            n = q.checkbox(),
            o = q.spinBox(),
            p = q.spinBox(),
            r = q.spinBox();
        m.onToggle = function(a) {
            o.setDisabled(!a), d.sustain = a, k.refresh()
        }, n.onToggle = function(a) {
            p.setDisabled(!a), r.setDisabled(!a), d.loop = a, k.refresh()
        }, o.setProperties({
            label: " ",
            value: 0,
            max: 100,
            min: 0,
            padLength: 2,
            disabled: !0,
            font: window.fontFT,
            onChange: function(a) {
                d.sustainPoint = a, b.checkMax(), k.refresh()
            }
        }), p.setProperties({
            label: "From",
            value: 0,
            max: 100,
            min: 0,
            padLength: 2,
            disabled: !0,
            font: window.fontSmall,
            onChange: function(a) {
                d.loopStartPoint = a, b.checkMax(), k.refresh()
            }
        }), r.setProperties({
            label: "To",
            value: 0,
            max: 100,
            min: 0,
            padLength: 2,
            disabled: !0,
            font: window.fontSmall,
            onChange: function(a) {
                d.loopEndPoint = a, b.checkMax(), k.refresh()
            }
        });
        var s = q.scale9Panel(0, 0, l.width, l.height, q.Assets.panelMainScale9);
        s.ignoreEvents = !0, l.addChild(s), l.addChild(o), l.addChild(p), l.addChild(r);
        var t = q.label({
            label: "Sustain",
            font: fontSmall,
            width: 60
        });
        l.addChild(t);
        var u = q.label({
            label: "Loop",
            font: fontSmall,
            width: 60
        });
        return l.addChild(u), l.addChild(m), l.addChild(n), b.addChild(l), b.setInstrument = function(b) {
            d = b[a + "Envelope"], c = b, k.setInstrument(b), h.setState(d && d.enabled), m.setState(d && d.sustain), n.setState(d && d.loop), o.setValue(d.sustainPoint || 0), p.setValue(d.loopStartPoint || 0), r.setValue(d.loopEndPoint || 0)
        }, b.setDisabled = function(a) {
            e = a, b.ignoreEvents = e, b.refresh()
        }, b.onResize = function() {
            l.setSize(120, b.height);
            var a = l.width;
            f.setSize(b.width - a - 36, 18), g.setSize(b.width - a, 20), h.setPosition(2, 2), g.setPosition(12, 2), k.setPosition(0, 20), k.setSize(b.width - a + 1, b.height - 22), s.setSize(l.width, l.height), l.setPosition(b.width - l.width, 0), m.setPosition(4, 4), t.setPosition(14, 4), o.setProperties({
                left: 10,
                top: 20,
                width: 100,
                height: 28
            }), n.setPosition(5, 50), u.setPosition(14, 50), p.setProperties({
                left: 10,
                top: 70,
                width: 100,
                height: 28
            }), r.setProperties({
                left: 10,
                top: 98,
                width: 100,
                height: 28
            }), i.setPosition(f.width, f.top), j.setPosition(f.width + 18, f.top)
        }, b.renderInternal = function() {
            e && (b.ctx.fillStyle = "rgba(34, 49, 85, 0.4)", b.ctx.fillRect(0, 0, b.width, b.height))
        }, b.checkMax = function() {
            d.count && (d.sustainPoint >= d.count && o.setValue(d.count - 1), d.loopStartPoint >= d.count && p.setValue(d.count - 1), d.loopEndPoint >= d.count && r.setValue(d.count - 1))
        }, b
    }, q.fxPanel = function(a) {
        function b(a, b) {
            if (o && !a.isDisabled) {
                var c = a.getLabel();
                switch (c) {
                    case "volume":
                        o.volumeValue(b);
                        break;
                    case "panning":
                        o.panningValue((b - 50) / 50);
                        break;
                    case "high":
                        o.highValue(b / 100);
                        break;
                    case "mid":
                        o.midValue(b / 100);
                        break;
                    case "low":
                        o.lowValue(b / 100);
                        break;
                    case "lowPass":
                        o.lowPassFrequencyValue(b / 100);
                        break;
                    case "reverb":
                        o.reverbValue(b)
                }
            }
        }

        function c(a, b) {
            if (o) {
                var c = a.getLabel();
                o.setState(c, b)
            }
        }
        var d = q.panel();
        d.hide(), a = a || 0;
        var e = q.scale9Panel(0, 0, 20, 20, q.Assets.buttonDarkScale9);
        e.ignoreEvents = !0, d.addChild(e);
        for (var f = 70, g = 70, h = ["volume", "panning", "high", "mid", "low", "lowPass", "reverb"], i = 0, j = 10, k = [], l = 0, m = h.length; l < m; l++) {
            var n = q.knob();
            n.setProperties({
                top: i,
                left: j,
                label: h[l],
                disabled: l > 1
            }), n.onChange = function(a) {
                b(this, a)
            }, n.onToggle = function(a) {
                c(this, a)
            }, d.addChild(n), k.push(n), l % 2 == 0 ? j += f : (j = 10, i += g)
        }
        var o;
        return O.filterChains && (o = O.filterChains[a]), d.setLayout = function() {
            if (q.mainPanel) {
                e.setSize(d.width, d.height);
                var a = 70,
                    b = Math.max(1, Math.floor(d.width / a)),
                    c = Math.floor((d.width - b * a) / 2),
                    f = Math.floor((d.width - 2 * c) / b),
                    g = 70,
                    h = 0;
                k.forEach(function(a, d) {
                    var e = d % b;
                    a.setPosition(e * f + c, h), e === b - 1 && (h += g)
                })
            }
        }, d
    }, q.InfoPanel = function() {
        var a, b = q.element(),
            c = "",
            d = "",
            e = "",
            f = q.Assets.generate("buttonDark");
        f.setLabel("More info "), f.onClick = function() {
            a && window.open(a)
        }, b.addChild(f);
        var g = q.animsprite(5, 7, 20, 18, "boing", 11);
        b.addChild(g), g.hide(), N.on(s.statusChange, function(f) {
            f && ("undefined" != typeof f.status && (e = f.status), "undefined" != typeof f.info && (c = f.info, d = f.source, a = f.url), "undefined" != typeof f.showSpinner && g.toggle(!!f.showSpinner)), b.refresh()
        });
        var h = ["left", "top", "width", "height", "name", "type", "zIndex"];
        return b.setProperties = function(a) {
            h.forEach(function(c) {
                "undefined" != typeof a[c] && (b[c] = a[c])
            }), b.setSize(b.width, b.height), b.setPosition(b.left, b.top), b.setLayout && b.setLayout(b.left, b.top, b.width, b.height)
        }, b.setLayout = function() {
            var a = ga.col1W,
                c = "More Info";
            a < 100 && (c = "info"), a < 45 && (c = "i"), f.setProperties({
                width: ga.col1W,
                height: 24,
                top: 2,
                left: ga.col5X - 2 - b.left,
                label: c,
                font: fontFT
            })
        }, b.render = function(d) {
            if (b.isVisible()) {
                if (d = !!d, this.needsRendering) {
                    b.clearCanvas(), a && f.render();
                    var h = c;
                    e && (h = e + ": " + h);
                    var i = 6;
                    g.isVisible() && (g.render(), i += 20), window.fontFT.write(b.ctx, h, i, 11, 0)
                }
                return this.needsRendering = !1, d ? b.canvas : void b.parentCtx.drawImage(b.canvas, b.left, b.top, b.width, b.height)
            }
        }, b
    };
    var ia = function() {
        function a() {
            if (i.length) {
                var a = i.shift();
                if (a.source) try {
                    a.source.stop()
                } catch (a) {}
            }
        }
        var b = {},
            c = {};
        c.touches = [], c.mouseWheels = [];
        var d, e, f, g = 0,
            h = !1,
            i = [],
            j = {},
            k = !1,
            l = 2,
            m = 3,
            n = 1,
            o = 13;
        b.init = function() {
            function a(a) {
                function b(b, d, f) {
                    c.isTouchDown = !0;
                    var g = U.getBoundingClientRect();
                    d -= g.left + window.pageXOffset, f -= g.top + window.pageYOffset, e = q.getModalElement() || q.getEventElement(d, f);
                    var h = {
                        id: b,
                        x: d,
                        y: f,
                        startX: d,
                        startY: f,
                        UIobject: e,
                        isMeta: a.shiftKey || a.metaKey || a.ctrlKey || a.altKey
                    };
                    c.touches.push(h), h.UIobject && (h.UIobject.onDragStart && h.UIobject.onDragStart(h), h.UIobject.onDown && h.UIobject.onDown(h))
                }
                if (a.preventDefault(), h || "undefined" != typeof O && O.playSilence && O.context && "suspended" !== O.context.state && (O.playSilence(), h = !0), a.touches && a.touches.length > 0)
                    for (var d = a.changedTouches, f = 0; f < d.length; f++) {
                        var g = d[f];
                        b(g.identifier, g.pageX, g.pageY)
                    } else {
                        var i = p("notouch");
                        i >= 0 && c.touches.splice(i, 1), b("notouch", a.pageX, a.pageY)
                    }
            }

            function i(a) {
                function b(a, b, d) {
                    if (a >= 0) {
                        var e = c.touches[a];
                        e.x = b - window.pageXOffset, e.y = d - window.pageYOffset, c.touches.splice(a, 1, e), c.isTouchDown && e.UIobject && e.UIobject.onDrag && (e.dragX = b, e.dragY = d, e.UIobject.onDrag(e))
                    }
                }
                a.preventDefault();
                var d = U.getBoundingClientRect();
                if (a.touches && a.touches.length > 0)
                    for (var e = a.changedTouches, g = 0; g < e.length; g++) {
                        var h = e[g];
                        b(p(h.identifier), h.pageX - d.left, h.pageY - d.top)
                    } else {
                        var i = a.pageX - d.left,
                            j = a.pageY - d.top;
                        if (b(p("notouch"), a.pageX - d.left, a.pageY - d.top), c.currentMouseX = i, c.currentMouseY = j, c.mouseMoved = (new Date).getTime(), M.useHover) {
                            var k = q.getEventElement(i, j);
                            k && k.onHover && k.onHover(c), f && f != k && f.onHoverExit && f.onHoverExit(c, k), f = k
                        }
                    }
            }

            function j(a) {
                function b(a) {
                    if (a >= 0) {
                        var b = c.touches[a],
                            d = b.startX - b.x,
                            e = b.startY - b.y,
                            f = Math.sqrt(d * d + e * e),
                            g = !0;
                        if (b.UIobject) {
                            var h = b.UIobject;
                            h.keepSelection && (g = !1), f < 8 && h.onClick && h.onClick(b), h.onTouchUp && h.onTouchUp(b)
                        }
                        g && f < 8 && q.clearSelection(), c.touches.splice(a, 1)
                    }
                }

                function d() {}
                if (c.isTouchDown = !1, a && a.touches) {
                    for (var e = a.changedTouches, f = 0; f < e.length; f++) {
                        var g = e[f];
                        b(p(g.identifier))
                    }
                    0 === a.touches.length && d()
                } else b(p("notouch")), d()
            }

            function m(a) {
                var c = K[M.keyboardTable] || K.azerty,
                    e = a.keyCode,
                    f = a.key,
                    g = {
                        shift: a.shiftKey,
                        control: a.ctrlKey,
                        alt: a.altKey,
                        command: a.metaKey
                    };
                if (k = g.command || g.control || g.alt || g.shift, !f && a.keyIdentifier) {
                    var h = a.keyIdentifier;
                    h = h.replace("U+", ""), f = String.fromCharCode(parseInt(h, 16)).toLowerCase()
                }
                if (d && d.onKeyDown) {
                    var i = d.onKeyDown(e, a);
                    if (i) return
                }
                switch (e) {
                    case 8:
                        return da.isRecording() ? void(k ? (R.removeNote(), da.moveCurrentPatternPos(-1)) : (m = R.getCurrentTrackPosition(), 0 === m ? R.putNote(0, 0) : !da.inFTMode() || 3 !== m && 4 !== m ? R.putNoteParam(m, 0) : R.putNoteParam(m, -1), da.moveCurrentPatternPos(1))) : (da.playPatternStep(R.getCurrentTrackPosition()), void da.moveCurrentPatternPos(-1));
                    case 9:
                        return a.stopPropagation(), a.preventDefault(), void R.moveCursorPosition(R.getStepsPerTrack());
                    case 13:
                        return void(da.isRecording() && k ? (R.insertNote(), da.moveCurrentPatternPos(1)) : da.togglePlay());
                    case 16:
                        break;
                    case 27:
                        q.clearSelection();
                        break;
                    case 32:
                        return void da.toggleRecord();
                    case 33:
                        var j = Math.floor(da.getPatternLength() / 4);
                        0 === j && (j = 1);
                        var m = Math.floor(da.getCurrentPatternPos() / j) * j;
                        return da.getCurrentPatternPos() === m && (m -= j), m < 0 && (m = 0), void da.setCurrentPatternPos(m);
                    case 34:
                        return j = Math.floor(da.getPatternLength() / 4), 0 === j && (j = 1), m = Math.ceil(da.getCurrentPatternPos() / j) * j, da.getCurrentPatternPos() === m && (m += j), m >= da.getPatternLength() - 1 && (m = da.getPatternLength() - 1), void da.setCurrentPatternPos(m);
                    case 35:
                        return void da.setCurrentPatternPos(da.getPatternLength() - 1);
                    case 36:
                        return void da.setCurrentPatternPos(0);
                    case 37:
                        return void R.moveCursorPosition(-1);
                    case 38:
                        return void da.moveCurrentPatternPos(-1);
                    case 39:
                        return void R.moveCursorPosition(1);
                    case 40:
                        return void da.moveCurrentPatternPos(1);
                    case 46:
                        return void(da.isRecording() && (m = R.getCurrentTrackPosition(), 0 === m ? R.putNote(0, 0) : R.putNoteParam(m, 0), da.moveCurrentPatternPos(1)));
                    case 112:
                    case 113:
                    case 114:
                    case 115:
                    case 116:
                    case 117:
                    case 118:
                        return void b.setCurrentOctave(e - 111);
                    case 119:
                    case 120:
                    case 121:
                    case 122:
                    case 123:
                        return;
                    case 221:
                        return
                }
                if (f && e > 40 && e < 230) {
                    if (k && e >= 65 && e <= 90) {
                        switch (a.stopPropagation(), a.preventDefault(), e) {
                            case 65:
                                return void N.trigger(s.commandSelectAll);
                            case 67:
                                return void q.copySelection(!0);
                            case 86:
                                return void q.pasteSelection(!0);
                            case 88:
                                return void q.cutSelection(!0);
                            case 89:
                                return void N.trigger(s.commandRedo);
                            case 90:
                                return void N.trigger(s.commandUndo)
                        }
                        return
                    }
                    var n = -1,
                        o = c[f];
                    "number" == typeof o && (n = 12 * l + o, 0 === o && (n = 0)), b.handleNoteOn(n, f)
                }
            }

            function n(a) {
                var c = a.key;
                if (!c && a.keyIdentifier) {
                    var d = a.keyIdentifier;
                    d = d.replace("U+", ""), c = String.fromCharCode(parseInt(d, 16)).toLowerCase()
                }
                var e = a.keyCode;
                if (A(e) && (k = !1), c && e > 40 && e < 200) {
                    var f = K[M.keyboardTable] || K.azerty,
                        g = f[c];
                    if ("number" == typeof g) return b.handleNoteOff(12 * l + g)
                }
            }

            function o(a) {
                if (c.currentMouseX) {
                    var b = c.currentMouseX,
                        d = c.currentMouseY,
                        e = q.getEventElement(b, d);
                    if (e && e.onMouseWheel) {
                        var f = a.wheelDeltaY || a.wheelDelta || -a.detail;
                        c.mouseWheels.unshift(f), c.mouseWheels.length > 10 && c.mouseWheels.pop(), e.onMouseWheel(c)
                    }
                }
            }

            function r(a) {
                a.stopPropagation(), a.preventDefault()
            }

            function t(a) {
                a.stopPropagation(), a.preventDefault()
            }

            function u(a) {
                a.stopPropagation(), a.preventDefault();
                var b = a.dataTransfer,
                    c = b.files;
                da.handleUpload(c)
            }

            function v() {
                Q.isPlugin || (clearTimeout(g), g = setTimeout(function() {
                    q.setSize(window.innerWidth, window.innerHeight)
                }, 100))
            }

            function w(a) {
                q.pasteSelection(!0)
            }

            function x(a) {
                q.copySelection(!0)
            }

            function y(a) {
                q.cutSelection(!0)
            }

            function z(a) {}

            function A(a) {
                return 16 === a || 17 === a || 18 === a || 91 === a || 93 === a
            }
            U.addEventListener("mousedown", a, !1), U.addEventListener("mousemove", i, !1), U.addEventListener("mouseup", j, !1), U.addEventListener("touchstart", a, !1), U.addEventListener("touchmove", i, !1), U.addEventListener("touchend", j, !1), window.navigator.msPointerEnabled && (U.addEventListener("MSPointerDown", a, !1), U.addEventListener("MSPointerMove", i, !1), U.addEventListener("MSPointerEnd", j, !1)), U.addEventListener("mousewheel", o, !1), U.addEventListener("DOMMouseScroll", o, !1), document.addEventListener("keydown", m, !1), document.addEventListener("keyup", n, !1), U.addEventListener("dragenter", r, !1), U.addEventListener("dragover", t, !1), U.addEventListener("drop", u, !1), window.addEventListener("paste", w, !1), window.addEventListener("copy", x, !1), window.addEventListener("cut", y, !1), window.addEventListener("delete", z, !1), Q.isPlugin || window.addEventListener("resize", v, !1), v()
        };
        var p = function(a) {
            for (var b = 0; b < c.touches.length; b++)
                if (c.touches[b].id === a) return b;
            return -1
        };
        return b.setFocusElement = function(a) {
            d && d.deActivate && d.deActivate(), d = a
        }, b.clearFocusElement = function() {
            d && d.deActivate && d.deActivate(), d = void 0
        }, b.clearInputNotes = function() {
            for (; i.length;) a()
        }, b.getCurrentOctave = function() {
            return l
        }, b.setCurrentOctave = function(a) {
            a <= m && a >= n && (l = a, N.trigger(s.octaveChanged, l))
        }, b.handleNoteOn = function(b, c, d) {
            var e, f, g, h, k = !0;
            if (b >= 0 && (o = b, q.clearSelection(), f = Math.floor((b - 1) / 12) + 1, g = (b - 1) % 12 + 1, h = J[g]))
                if (da.inFTMode())
                    if ("OFF" === h.name) e = {
                        period: 1,
                        index: 0
                    }, k = !1;
                    else {
                        var l = ba[b];
                        l && (e = {
                            period: l.period,
                            index: b
                        })
                    }
            else {
                var m = h.name + (f - 1);
                e = F[m]
            }
            if (da.isRecording())
                if (R.getCurrentTrackPosition() > 0) {
                    k = !1;
                    var n = /[0-9A-Fa-f]/g,
                        p = -1;
                    if (c = c || "", n.test(c) ? p = parseInt(c, 16) : da.inFTMode() && 5 === R.getCurrentTrackPosition() && (n = /[0-9A-Za-z]/g, n.test(c) && (p = parseInt(c, 36))), da.inFTMode() && 3 === R.getCurrentTrackPosition()) switch (p = -1, c) {
                        case "0":
                            p = 0;
                            break;
                        case "1":
                            p = 1;
                            break;
                        case "2":
                            p = 2;
                            break;
                        case "3":
                            p = 3;
                            break;
                        case "4":
                            p = 4;
                            break;
                        case "-":
                            p = 5;
                            break;
                        case "+":
                            p = 6;
                            break;
                        case "d":
                        case "D":
                            p = 7;
                            break;
                        case "u":
                        case "U":
                            p = 8;
                            break;
                        case "s":
                        case "S":
                            p = 9;
                            break;
                        case "v":
                        case "V":
                            p = 10;
                            break;
                        case "p":
                        case "P":
                            p = 11;
                            break;
                        case "<":
                            p = 12;
                            break;
                        case ">":
                            p = 13;
                            break;
                        case "M":
                            p = 14
                    }
                    p > 255 && (p = -1), p >= 0 && (R.putNoteParam(R.getCurrentTrackPosition(), p), da.moveCurrentPatternPos(1))
                } else {
                    if (j[b]) return;
                    e && (R.putNote(da.getCurrentInstrumentIndex(), e.period, e.index), da.isPlaying() || da.moveCurrentPatternPos(1))
                } if (k && e) {
                if (j[b]) return;
                var r = da.getCurrentInstrument();
                if (r) {
                    if (e.index && (r.setSampleForNoteIndex(e.index), r.sample.relativeNote)) {
                        e.index += r.sample.relativeNote;
                        var t = ba[e.index];
                        t && (e.period = t.period)
                    }
                    O.checkState();
                    var u = void 0;
                    d && (u = {
                        offset: {
                            value: d
                        }
                    }), j[b] = r.play(e.index, e.period, void 0, void 0, u), j[b].instrument = r, j[b].isKey = !0, i.push(j[b]);
                    var e = j[b];
                    if (e.scheduled && e.scheduled.vibrato) {
                        var v = r.scheduleAutoVibrato(e, 2);
                        e.scheduled.vibrato += v
                    }
                    i.length > 64 && a(), N.trigger(s.pianoNoteOn, b)
                }
            }
        }, b.handleNoteOff = function(a) {
            if (!M.sustainKeyboardNotes && j[a] && j[a].source && O.context) {
                N.trigger(s.pianoNoteOff, a);
                try {
                    j[a].instrument ? j[a].instrument.noteOff(O.context.currentTime, j[a]) : j[a].source.stop()
                } catch (a) {}
            }
            j[a] = !1
        }, b.isMetaKeyDown = function() {
            return k
        }, b.getPrevIndex = function() {
            return o
        }, N.on(s.second, function() {
            if (O.context) {
                var a = O.context.currentTime,
                    b = 2;
                i.forEach(function(c) {
                    if (c && c.time && c.scheduled) {
                        if (c.scheduled.volume && a + b >= c.scheduled.volume && c.instrument) {
                            var d = c.instrument.scheduleEnvelopeLoop(c.volumeEnvelope, c.scheduled.volume, 2);
                            c.scheduled.volume += d
                        }
                        c.scheduled.panning && a + b >= c.scheduled.panning && c.instrument && (d = c.instrument.scheduleEnvelopeLoop(c.panningEnvelope, c.scheduled.panning, 2), c.scheduled.panning += d), c.scheduled.vibrato && a + b >= c.scheduled.vibrato && c.instrument && (d = c.instrument.scheduleAutoVibrato(c, 2), c.scheduled.vibrato += d)
                    }
                })
            }
        }), N.on(s.trackerModeChanged, function(a) {
            da.inFTMode() ? (m = 7, n = 0, b.setCurrentOctave(l + 2)) : (m = 3, n = 1, b.setCurrentOctave(Math.min(Math.max(l - 2, n), m)))
        }), b
    }();
    q.MainPanel = function() {
        var a = q.panel(0, 0, U.width, U.height, !0);
        a.setProperties({
            backgroundColor: "#071028"
        }), a.name = "mainPanel";
        var b = {},
            c = q.app_menu(a);
        a.addChild(c);
        var d = q.app_mainPanel();
        a.addChild(d);
        var e = q.app_controlPanel();
        a.addChild(e);
        var f = q.app_patternPanel();
        a.addChild(f);
        var g = q.app_pianoView();
        return g.hide(), a.addChild(g), a.createContextMenu = function(c) {
            var d = b[c.name];
            return d || (d = q.menu(100, 100, 128, 42, a), d.zIndex = 100, d.setProperties({
                background: q.Assets.panelMainScale9,
                layout: "buttons"
            }), d.setItems(c.items), d.hide(), a.addChild(d), b[c.name] = d), d
        }, a.onResize = function() {
            ga.setLayout(a.width, a.height), c.setSize(a.width, c.height);
            var b = c.height;
            d.setSize(a.width, d.height), d.setPosition(0, b), b += d.height, e.setSize(a.width, ga.controlPanelHeight), e.setPosition(0, b), b += e.height;
            var h = a.height - b;
            g.isVisible() && (g.setSize(a.width, ga.pianoHeight), g.setPosition(0, a.height - g.height), h -= g.height), f.setPosition(0, b), f.setSize(a.width, h)
        }, a.sortZIndex(), a.onResize(), N.on(s.toggleView, function(b) {
            if ("piano" === b) {
                g.toggle();
                var c = a.height - f.top;
                g.isVisible() && (g.setSize(a.width, ga.pianoHeight), g.setPosition(0, a.height - g.height), c -= g.height), f.setSize(a.width, c)
            }
        }), N.on(s.showContextMenu, function(b) {
            var c = a.createContextMenu(b),
                d = b.x;
            d + c.width > a.width && (d = a.width - c.width), c.setPosition(d, b.y - c.height - 2), c.show(), a.refresh()
        }), N.on(s.hideContextMenu, function() {
            for (var c in b) b[c].hide();
            a.refresh()
        }), a
    }, q.OptionsPanel = function() {
        var a = q.panel();
        a.hide();
        var b = q.scale9Panel(0, 0, 20, 20, q.Assets.panelMainScale9);
        b.ignoreEvents = !0, a.addChild(b);
        var c = q.label({
            label: "Options:",
            font: fontMed,
            left: 5,
            height: 18,
            top: 9,
            width: 200
        });
        a.addChild(c);
        var d = q.Assets.generate("button20_20");
        d.setLabel("x"), d.onClick = function() {
            Q.doCommand(t.showTopMain)
        }, a.addChild(d);
        var e = [{
            label: "VU bars",
            values: ["NONE", "COLOURS: AMIGA", "TRANSPARENT"],
            setValue: function(a) {
                M.vubars = 0 === a ? "none" : 2 === a ? "trans" : "colour", X.saveSettings()
            },
            getValue: function() {
                var a = 1;
                return "none" === M.vubars && (a = 0), "trans" === M.vubars && (a = 2), a
            }
        }, {
            label: "Stereo",
            values: ["Hard: Amiga", "Balanced", "None: mono"],
            setValue: function(a) {
                O.setStereoSeparation(0 === a ? y.FULL : 2 === a ? y.NONE : y.BALANCED), X.saveSettings()
            },
            getValue: function() {
                var a = 1;
                return M.stereoSeparation === y.NONE && (a = 2), M.stereoSeparation === y.FULL && (a = 0), a
            }
        }, {
            label: "Keyboard Layout",
            labels: [{
                width: 56,
                label: "Keyboard"
            }, {
                width: 110,
                label: "Keyboard Layout"
            }],
            values: ["QWERTY", "AZERTY", "QWERTZ", "Dvorak"],
            setValue: function(a) {
                M.keyboardTable = 0 === a ? "qwerty" : 1 === a ? "azerty" : 2 === a ? "qwertz" : "dvorak", X.saveSettings()
            },
            getValue: function() {
                var a = 0;
                return "azerty" === M.keyboardTable && (a = 1), "qwertz" === M.keyboardTable && (a = 2), "dvorak" === M.keyboardTable && (a = 3), a
            }
        }, {
            label: "Screen refresh",
            labels: [{
                width: 56,
                label: "Screen"
            }, {
                width: 100,
                label: "Screen refresh"
            }],
            values: ["Smooth", "Normal", "Economical", "Low CPU"],
            setValue: function(a) {
                q.skipFrame(a), X.saveSettings()
            },
            getValue: function() {
                return q.getSkipFrame()
            }
        }, {
            label: "Frequency table",
            labels: [{
                width: 56,
                label: "Frequency"
            }, {
                width: 110,
                label: "Frequency table"
            }],
            values: ["Linear", "Amiga periods"],
            setValue: function(a) {
                da.useLinearFrequency = 0 === a
            },
            getValue: function() {
                return da.useLinearFrequency ? 0 : 1
            }
        }, {
            label: "Dropbox: existing file",
            labels: [{
                width: 20,
                label: "Dropbox"
            }, {
                width: 80,
                label: "Dropbox save"
            }, {
                width: 160,
                label: "Dropbox existing file"
            }],
            values: ["Rename", "Overwrite"],
            setValue: function(a) {
                M.dropboxMode = 0 === a ? "rename" : "overwrite", X.saveSettings()
            },
            getValue: function() {
                var a = 0;
                return "overwrite" === M.dropboxMode && (a = 1), a
            }
        }];
        return e.forEach(function(b) {
            var c = q.scale9Panel(0, 0, 20, 20, q.Assets.panelDarkGreyScale9);
            c.ignoreEvents = !0, a.addChild(c);
            var d = q.label();
            d.setProperties({
                label: b.label,
                labels: b.labels,
                font: fontSmall,
                textAlign: "center"
            }), a.addChild(d), b.labelBox = c, b.label = d;
            for (var e = [], f = b.getValue(), g = 0; g < b.values.length; g++) {
                var h, i = b.values[g];
                i && (h = q.Assets.generate("buttonKey"), h.setProperties({
                    label: i
                }), h.setActive(g === f), h.index = g, h.option = b, h.onClick = function() {
                    this.isDisabled || activateOption(this)
                }), a.addChild(h), e.push(h)
            }
            b.buttons = e
        }), activateOption = function(a) {
            var b = a.option;
            b.buttons.forEach(function(a) {
                a.setActive(!1)
            }), a.setActive(!0), b.setValue(a.index)
        }, a.onShow = function() {
            a.onResize()
        }, a.onResize = function() {
            if (a.isVisible()) {
                a.clearCanvas(), b.setProperties({
                    left: 0,
                    top: 0,
                    height: a.height,
                    width: a.width
                });
                var c = 5;
                d.setProperties({
                    top: c,
                    left: a.width - 30
                });
                var f = [27, 103],
                    g = 26,
                    h = 20,
                    i = 0,
                    j = 0,
                    k = !1,
                    l = e.length,
                    m = e.length;
                a.width < 600 && (k = !0, f = [27, 103], g = 18, h = 18, m = 4);
                var n = Math.floor((a.width - ga.defaultMargin * (m + 1)) / m);
                e.forEach(function(b, c) {
                    var d = ga.defaultMargin + i * (n + ga.defaultMargin),
                        e = f[j];
                    c >= l && (d = a.width + 100), b.labelBox.setProperties({
                        top: e,
                        width: n,
                        height: g,
                        left: d
                    }), b.label.setProperties({
                        top: e + 3,
                        _width: ga.col31W,
                        width: n,
                        height: g,
                        left: d + 2
                    });
                    for (var m = b.getValue(), o = 0; o < b.buttons.length; o++) {
                        var p = b.buttons[o];
                        p.setProperties({
                            top: e + o * h + g,
                            height: h,
                            width: n,
                            left: d
                        }), p.setActive(o === m)
                    }
                    i++, k && i >= 4 && (i = 0, j++)
                })
            }
        }, N.on(s.songPropertyChange, function() {
            a.isVisible() && a.onResize()
        }), N.on(s.trackerModeChanged, function() {
            var b = e[4];
            b.buttons && b.buttons.length && b.buttons.forEach(function(a) {
                a.setDisabled(!da.inFTMode())
            });
            var c = e[1];
            c.buttons && c.buttons.length && c.buttons.forEach(function(a) {
                a.setDisabled(da.inFTMode())
            }), a.isVisible() && a.onResize()
        }), a
    }, q.SampleView = function() {
        function a(a) {
            var b = da.getCurrentInstrument();
            if (b)
                if (16 === a) b.sample.bits = 16, l.setActive(!1), m.setActive(!0);
                else {
                    for (var c = 0, d = b.sample.data.length; c < d; c++) b.sample.data[c] = Math.round(127 * b.sample.data[c]) / 127;
                    b.sample.bits = 8, l.setActive(!0), m.setActive(!1)
                }
        }

        function b(a) {
            "loop" === a ? (B.show(), z.show(), y.show(), C.hide(), D.hide(), E.hide(), U.setActive(), W.setActive(!1), G.forEach(function(a) {
                a.hide()
            })) : (B.hide(), z.hide(), y.hide(), C.show(), D.show(), E.show(), U.setActive(!1), W.setActive(), G.forEach(function(a) {
                a.show()
            })), f = a, d.onResize()
        }

        function c(a) {
            G.forEach(function(b, c) {
                b.setActive(a === c)
            });
            var b = da.getCurrentInstrument();
            b && (b.vibrato.type = a)
        }
        var d = q.panel();
        d.hide();
        var e, f = "loop",
            g = 20,
            h = window.fontMed;
        h = window.fontCondensed;
        var i = q.inputbox({
            name: "instrumentName",
            height: g,
            onChange: function(a) {
                if (e) {
                    var b = da.getInstrument(e);
                    b && (b.name = a), N.trigger(s.instrumentNameChange, e)
                }
            }
        });
        d.addChild(i);
        var j = q.Assets.generate("button20_20");
        j.setLabel("x"), j.onClick = function() {
            Q.doCommand(t.showBottomMain)
        }, d.addChild(j);
        var k = {
                background: q.Assets.buttonKeyScale9,
                activeBackground: q.Assets.buttonKeyActiveScale9,
                isActive: !1,
                textAlign: "center",
                font: window.fontDark,
                paddingTopActive: 1
            },
            l = q.button(),
            m = q.button();
        l.setProperties(k), l.setLabel("8"), l.setActive(!0), l.onDown = function() {
            a(8)
        }, d.addChild(l), m.setProperties(k), m.setLabel("16"), m.onDown = function() {
            a(16)
        }, d.addChild(m);
        var n = q.WaveForm();
        d.addChild(n);
        var o = q.EnvelopePanel("volume");
        d.addChild(o);
        var p = q.EnvelopePanel("panning");
        d.addChild(p);
        var r = new q.panel;
        r.setProperties({
            name: "instrumentSideButtonPanel"
        });
        var u = q.spinBox({
            name: "Instrument",
            label: "",
            value: 1,
            max: 64,
            padLength: 2,
            min: 1,
            font: h,
            onChange: function(a) {
                da.setCurrentInstrumentIndex(a)
            }
        });
        d.addChild(u);
        var v = q.sliderBox({
            label: "Volume",
            font: h,
            height: 200,
            width: 40,
            value: 64,
            max: 64,
            min: 0,
            step: 1,
            vertical: !0,
            onChange: function(a) {
                var b = da.getCurrentInstrument();
                b && (b.sample.volume = a)
            }
        });
        r.addChild(v);
        var w = q.sliderBox({
            name: "Finetune",
            label: "Finetune",
            font: h,
            value: 0,
            max: 7,
            min: -8,
            step: 1,
            vertical: !0,
            onChange: function(a) {
                var b = da.getCurrentInstrument();
                b && b.setFineTune(a)
            }
        });
        r.addChild(w);
        var x = q.sliderBox({
            name: "Panning",
            label: "Panning",
            font: h,
            value: 0,
            max: 127,
            min: -127,
            vertical: !0,
            onChange: function(a) {
                var b = da.getCurrentInstrument();
                b && (b.panning = a, b.sample.panning = a)
            }
        });
        r.addChild(x);
        var y = q.spinBox({
            name: "Repeat",
            label: "Start",
            value: 0,
            max: 65535,
            min: 0,
            step: 2,
            font: h,
            onChange: function(a) {
                var b = da.getCurrentInstrument();
                b && (b.sample.loop.length + a > b.sample.length && (a = b.sample.length - b.sample.loop.length, y.setValue(a, !0)), b.sample.loop.start = a), n.refresh()
            }
        });
        r.addChild(y);
        var z = q.spinBox({
            name: "Repeat Length",
            label: "Length",
            value: 0,
            max: 65535,
            min: 0,
            step: 2,
            font: h,
            onChange: function(a) {
                var b = da.getCurrentInstrument();
                b && (b.sample.loop.start + a > b.sample.length && (a = b.sample.length - b.sample.loop.start, z.setValue(a, !0)), b.sample.loop.length = a), N.trigger(s.samplePropertyChange, {
                    interal_loopLength: a
                }), n.refresh()
            }
        });
        r.addChild(z);
        var A = q.sliderBox({
            name: "Fadeout",
            label: "Fadeout",
            value: 0,
            max: 4095,
            min: 0,
            step: 1,
            font: h,
            vertical: !0,
            onChange: function(a) {
                var b = da.getCurrentInstrument();
                b && (b.fadeout = a)
            }
        });
        r.addChild(A);
        var B = q.spinBox({
            name: "relativeNote",
            label: "RelativeNote",
            value: 0,
            max: 128,
            min: -127,
            step: 1,
            font: h,
            onChange: function(a) {
                var b = da.getCurrentInstrument();
                b && (b.sample.relativeNote = a)
            }
        });
        r.addChild(B);
        var C = q.spinBox({
            name: "vibratoSpeed",
            label: "Vib Speed",
            value: 0,
            max: 63,
            min: 0,
            step: 1,
            font: h,
            onChange: function(a) {
                var b = da.getCurrentInstrument();
                b && (b.vibrato.rate = a)
            }
        });
        r.addChild(C), C.hide();
        var D = q.spinBox({
            name: "vibratoDepth",
            label: "Vib Depth",
            value: 0,
            max: 15,
            min: 0,
            step: 1,
            font: h,
            onChange: function(a) {
                var b = da.getCurrentInstrument();
                b && (b.vibrato.depth = a)
            }
        });
        r.addChild(D), D.hide();
        var E = q.spinBox({
            name: "vibratoSweep",
            label: "Vib Sweep",
            value: 0,
            max: 255,
            min: 0,
            step: 1,
            font: h,
            onChange: function(a) {
                var b = da.getCurrentInstrument();
                b && (b.vibrato.sweep = a)
            }
        });
        r.addChild(E), E.hide();
        var F = ["sin", "square", "saw", "saw_inverse"],
            G = [];
        F.forEach(function(a, b) {
            var d = q.button();
            d.setProperties({
                background: q.Assets.buttonKeyScale9,
                activeBackground: q.Assets.buttonKeyActiveScale9,
                image: fa.getImage("wave_" + a),
                activeImage: fa.getImage("wave_" + a),
                isActive: !1
            }), d.onDown = function() {
                c(b)
            }, d.hide(), r.addChild(d), G.push(d)
        }), c(0), d.addChild(r);
        var H = [],
            I = [{
                label: "Load",
                onClick: function() {
                    N.trigger(s.showView, "diskop_samples_load")
                }
            }, {
                label: "Play",
                onDown: function() {
                    ia.handleNoteOn(ia.getPrevIndex())
                },
                onUp: function() {
                    ia.handleNoteOff(ia.getPrevIndex()), ia.clearInputNotes(), n.stop()
                }
            }, {
                label: "Range",
                onDown: function() {
                    n.playSection("range")
                },
                onUp: function() {
                    ia.handleNoteOff(ia.getPrevIndex()), ia.clearInputNotes(), n.stop()
                }
            }, {
                label: "Loop",
                onDown: function() {
                    n.playSection("loop")
                },
                onUp: function() {
                    ia.handleNoteOff(ia.getPrevIndex()), ia.clearInputNotes(), n.stop()
                }
            }, {
                label: "Stop",
                onClick: function() {
                    ia.clearInputNotes(), n.stop()
                }
            }, {
                label: "More",
                onClick: function() {
                    P.toggle(), R.toggle(), S.toggle(), T.toggle(), o.toggle(), p.toggle(), d.refresh()
                }
            }],
            J = [{
                label: "Zoom In",
                width: 62,
                onClick: function() {
                    n.zoom(2)
                }
            }, {
                label: "Out",
                width: 38,
                onClick: function() {
                    n.zoom(.5)
                }
            }, {
                label: "All",
                width: 50,
                onClick: function() {
                    n.zoom(1)
                }
            }, {
                value: 0,
                width: 50,
                type: "number",
                onSamplePropertyChange: function(a, b) {
                    "undefined" != typeof b.sampleLength && a.setValue(b.sampleLength)
                }
            }, {
                label: "Loop",
                width: 50,
                onClick: function() {
                    n.zoom("loop")
                }
            }, {
                value: 0,
                width: 50,
                type: "number",
                onSamplePropertyChange: function(a, b) {
                    "undefined" != typeof b.loopLength && a.setValue(b.loopLength), "undefined" != typeof b.interal_loopLength && a.setValue(b.interal_loopLength)
                }
            }, {
                label: "Range",
                width: 50,
                onClick: function() {
                    n.zoom("range")
                }
            }, {
                value: "0",
                width: 50,
                type: "number",
                onSamplePropertyChange: function(a, b) {
                    "undefined" != typeof b.rangeLength && a.setValue(b.rangeLength)
                }
            }],
            K = [{
                label: "Reverse",
                onClick: function() {
                    n.reverse()
                }
            }, {
                label: "Invert",
                onClick: function() {
                    n.invert()
                }
            }, {
                label: "Upsample",
                onClick: function() {
                    n.resample("up")
                }
            }, {
                label: "DownSample",
                onClick: function() {
                    n.resample("down")
                }
            }],
            M = [{
                label: "Maximize",
                onClick: function() {
                    n.adjustVolume("max")
                }
            }, {
                label: "Fade In",
                width: 62,
                onClick: function() {
                    n.adjustVolume("fadein")
                }
            }, {
                label: "Out",
                width: 38,
                onClick: function() {
                    n.adjustVolume("fadeout")
                }
            }, {
                label: "-5%",
                width: 50,
                onClick: function() {
                    n.adjustVolume(-5)
                }
            }, {
                label: "+5%",
                width: 50,
                onClick: function() {
                    n.adjustVolume(5)
                }
            }, {
                label: "-10%",
                width: 50,
                onClick: function() {
                    n.adjustVolume(-10)
                }
            }, {
                label: "+10%",
                width: 50,
                onClick: function() {
                    n.adjustVolume(10)
                }
            }],
            O = [{
                label: "[",
                width: 15,
                onClick: function() {
                    n.select("start")
                }
            }, {
                label: "All",
                width: 70,
                onClick: function() {
                    n.select("all")
                }
            }, {
                label: "]",
                width: 15,
                onClick: function() {
                    n.select("end")
                }
            }, {
                label: "None",
                width: 50,
                onClick: function() {
                    n.select("none")
                }
            }, {
                label: "Loop",
                width: 50,
                onClick: function() {
                    n.select("loop")
                }
            }, {
                label: "Cut",
                width: 50,
                onClick: function() {
                    q.cutSelection()
                }
            }, {
                label: "Copy",
                width: 50,
                onClick: function() {
                    q.copySelection()
                }
            }, {
                label: "Paste",
                onClick: function() {
                    q.pasteSelection()
                }
            }];
        I.forEach(function(a) {
            var b = q.Assets.generate("buttonLight");
            b.setLabel(a.label), b.onClick = a.onClick, b.onDown = a.onDown, b.onTouchUp = a.onUp, d.addChild(b), H.push(b)
        });
        var P = q.buttonGroup("Display", J),
            R = q.buttonGroup("Select", O),
            S = q.buttonGroup("Edit", K),
            T = q.buttonGroup("Volume", M);
        d.addChild(P), d.addChild(R), d.addChild(S), d.addChild(T);
        var U = q.button();
        U.setProperties({
            background: q.Assets.panelDarkGreyScale9,
            activeBackground: q.Assets.panelDarkGreyBlueScale9,
            isActive: !1,
            label: "Loop",
            font: fontSmall,
            paddingTop: 2,
            paddingTopActive: 2,
            paddingLeft: 20
        }), U.onDown = function() {
            b("loop")
        }, d.addChild(U);
        var V = q.checkbox();
        V.onToggle = function(a) {
            var b = da.getInstrument(e);
            b && (b.sample.loop.enabled = a), y.setDisabled(!a), z.setDisabled(!a), n.refresh()
        }, d.addChild(V);
        var W = q.button();
        return W.setProperties({
            background: q.Assets.panelDarkGreyScale9,
            activeBackground: q.Assets.panelDarkGreyBlueScale9,
            isActive: !1,
            label: "Vibrato",
            font: fontSmall,
            paddingTop: 2,
            paddingTopActive: 2
        }), W.onDown = function() {
            b("vibrato")
        }, d.addChild(W), d.onShow = function() {
            d.onResize()
        }, d.onResize = function() {
            if (d.isVisible()) {
                d.clearCanvas();
                var a = 130,
                    b = 28,
                    c = r.height - a - 10,
                    e = Math.ceil(r.width / 4),
                    f = 0,
                    h = 2 * e;
                r.width < 170 && (e = Math.ceil(r.width / 2), c = Math.floor(c / 2), f = c, h = 0), n.setPosition(ga.col2X, g + ga.defaultMargin + 8), n.setSize(ga.col4W, d.height - n.top - a - b - 8), o.setPosition(ga.col2X, n.top + n.height + ga.defaultMargin + 30), o.setSize(ga.col2W, a), p.setPosition(ga.col4X, o.top), p.setSize(ga.col2W, a), S.setSize(ga.col1W, a), P.setSize(ga.col1W, a), R.setSize(ga.col1W, a), T.setSize(ga.col1W, a), P.setPosition(ga.col2X, n.top + n.height + ga.defaultMargin + 30), R.setPosition(ga.col3X, P.top), S.setPosition(ga.col4X, P.top), T.setPosition(ga.col5X, P.top);
                var k = 0,
                    q = 100;
                da.inFTMode() && (k = 40, q = 0), i.setProperties({
                    top: ga.defaultMargin,
                    left: ga.col2X + 71,
                    width: ga.col4W - 71 - 25 - ga.defaultMargin - k
                }), j.setProperties({
                    top: ga.defaultMargin,
                    left: i.left + i.width + ga.defaultMargin + k
                }), l.setProperties({
                    top: ga.defaultMargin,
                    width: 20,
                    height: 20,
                    left: i.left + i.width + ga.defaultMargin - 2 + q
                }), m.setProperties({
                    top: ga.defaultMargin,
                    width: 20,
                    height: 20,
                    left: i.left + i.width + ga.defaultMargin + 18 + q
                }), r.setProperties({
                    left: 0,
                    top: 0,
                    width: ga.col1W,
                    height: d.height
                }), u.setProperties({
                    left: ga.col2X,
                    top: 1,
                    width: 68,
                    height: b
                }), v.setProperties({
                    left: 0,
                    top: 0,
                    width: e,
                    height: c
                }), w.setProperties({
                    left: e,
                    top: 0,
                    width: e,
                    height: c
                }), A.setProperties({
                    left: h,
                    top: f,
                    width: e,
                    height: c
                }), x.setProperties({
                    left: h + e,
                    top: f,
                    width: e,
                    height: c
                });
                var s = n.top + n.height + ga.defaultMargin,
                    t = ga.col4W / H.length;
                H.forEach(function(a, c) {
                    a.setProperties({
                        width: t,
                        height: b,
                        left: ga.col2X + t * c,
                        top: s
                    })
                }), U.setProperties({
                    width: ga.col1W / 2,
                    height: 18,
                    left: 2,
                    top: o.top
                }), V.setPosition(U.left + 2, U.top + 2), W.setProperties({
                    width: U.width,
                    height: U.height,
                    left: U.left + U.width,
                    top: U.top
                });
                var F = 34,
                    I = 30;
                y.setProperties({
                    left: 0,
                    top: U.top + 24,
                    width: ga.col1W,
                    height: F
                }), z.setProperties({
                    left: 0,
                    top: U.top + 24 + F,
                    width: ga.col1W,
                    height: F
                }), B.setProperties({
                    left: 0,
                    top: U.top + 24 + 2 * F,
                    width: ga.col1W,
                    height: F
                }), C.setProperties({
                    left: 0,
                    top: W.top + 22,
                    width: ga.col1W,
                    height: I
                }), D.setProperties({
                    left: 0,
                    top: W.top + 22 + I,
                    width: ga.col1W,
                    height: I
                }), E.setProperties({
                    left: 0,
                    top: W.top + 22 + 2 * I,
                    width: ga.col1W,
                    height: I
                });
                var J = Math.floor((ga.col1W - 4) / 4),
                    K = ga.col1W - 4 * J;
                G.forEach(function(a, b) {
                    a.setProperties({
                        left: K + b * J,
                        top: W.top + 22 + 3 * I,
                        width: J,
                        height: 17
                    })
                })
            }
        }, N.on(s.instrumentChange, function(a) {
            e = a, u.setValue(a, !0);
            var b = da.getInstrument(a);
            b ? (i.setValue(b.name, !0), w.setValue(b.getFineTune()), A.setValue(b.fadeout || 0), C.setValue(b.vibrato.rate || 0), D.setValue(b.vibrato.depth || 0), E.setValue(b.vibrato.sweep || 0), c(b.vibrato.type || 0), b.sample && (y.setMax(b.sample.length, !0), z.setMax(b.sample.length, !0), v.setValue(b.sample.volume), x.setValue(b.sample.panning || 0), y.setValue(b.sample.loop.start, !0), z.setValue(b.sample.loop.length, !0), B.setValue(b.sample.relativeNote), V.setState(b.sample.loop.enabled), 8 === b.sample.bits ? (l.setActive(!0), m.setActive(!1)) : (l.setActive(!1), m.setActive(!0))), n.setInstrument(b), o.setInstrument(b), p.setInstrument(b)) : (n.setInstrument(), o.setInstrument(), p.setInstrument(), i.setValue("", !0), v.setValue(0), x.setValue(0), w.setValue(0), y.setValue(0), z.setValue(0), B.setValue(0), A.setValue(0))
        }), N.on(s.samplePlay, function(a) {
            d.visible && a && a.instrumentIndex === e && n.play(a.startPeriod)
        }), N.on(s.songPropertyChange, function(a) {
            u.setMax(a.instruments.length - 1)
        }), N.on(s.trackerModeChanged, function(a) {
            w.setMax(a === L.PROTRACKER ? 7 : 127, !0), w.setMin(a === L.PROTRACKER ? -8 : -128, !0);
            var c = da.getInstrument(e);
            c && w.setValue(c.getFineTune(), !0), o.setDisabled(!da.inFTMode()), p.setDisabled(!da.inFTMode()), B.setDisabled(!da.inFTMode()), C.setDisabled(!da.inFTMode()),
                D.setDisabled(!da.inFTMode()), E.setDisabled(!da.inFTMode()), A.setDisabled(!da.inFTMode()), x.setDisabled(!da.inFTMode()), u.setMax(da.getMaxInstruments()), a === L.PROTRACKER ? (y.setProperties({
                    step: 2
                }), z.setProperties({
                    step: 2
                }), c && (c.sample.loop.start = 2 * Math.floor(c.sample.loop.start / 2), c.sample.loop.length = 2 * Math.floor(c.sample.loop.length / 2), y.setValue(c.sample.loop.start, !0), z.setValue(c.sample.loop.length, !0)), b("loop")) : (y.setProperties({
                    step: 1
                }), z.setProperties({
                    step: 1
                })), d.onResize()
        }), N.on(s.samplePropertyChange, function(a) {
            var b = da.getInstrument(e);
            b && ("undefined" != typeof a.loopStart && y.setValue(a.loopStart), "undefined" != typeof a.loopLength && z.setValue(a.loopLength))
        }), N.on(s.sampleIndexChange, function(a) {
            if (d.visible && a === e) {
                da.getInstrument(e);
                N.trigger(s.instrumentChange, e)
            }
        }), d
    }, q.sliderBox = function(a) {
        function b() {
            for (var a = "" + j; a.length < n;) a = o + a;
            return a
        }

        function c(a) {
            "undefined" != typeof a.name && (d.name = a.name), "undefined" != typeof a.left && (d.left = a.left), "undefined" != typeof a.top && (d.top = a.top), "undefined" != typeof a.width && (d.width = a.width), "undefined" != typeof a.height && (d.height = a.height), "undefined" != typeof a.label && (i = a.label), "undefined" != typeof a.value && (j = a.value), "undefined" != typeof a.font && (e = a.font), "undefined" != typeof a.min && (k = a.min), "undefined" != typeof a.max && (l = a.max), "undefined" != typeof a.step && (m = a.step), "undefined" != typeof a.onChange && (g = a.onChange), "undefined" != typeof a.vertical && (h = !!a.vertical, A && A.setProperties({
                vertical: h
            }))
        }
        var d = q.element();
        d.type = "sliderBox";
        var e, f, g, h, i = "",
            j = 0,
            k = 0,
            l = 100,
            m = 1,
            n = 4,
            o = " ",
            p = 0,
            r = 0,
            s = 0,
            t = 0,
            u = 10,
            v = 10,
            w = 20,
            x = 20,
            y = !1,
            z = fa.getImage("line_ver");
        a && c(a), l > 9999 && (n = 5);
        var A = q.rangeSlider({
            min: k,
            max: l,
            height: w,
            width: x,
            vertical: !!h,
            onChange: function(a) {
                j = a, g && g(a)
            }
        });
        return d.addChild(A), d.setProperties = function(a) {
            return a ? (f = a || {}, c(f), d.setSize(d.width, d.height), void d.setPosition(d.left, d.top)) : f
        }, d.setValue = function(a, b) {
            j = a, A.setValue(j, b), d.refresh(), !b && g && g(j)
        }, d.getValue = function() {
            return j
        }, d.setMax = function(a, b) {
            l = a, !b && j > l && d.setValue(l), A.setMax(l, b)
        }, d.setMin = function(a, b) {
            k = a, !b && j < k && d.setValue(k), A.setMin(k, b)
        }, d.setDisabled = function(a) {
            y = a, d.refresh(), d.ignoreEvents = y
        }, d.render = function(a) {
            return a = !!a, d.needsRendering && (d.clearCanvas(), d.ctx.drawImage(fa.getImage("panel_inset_dark"), s, t, u, v), window.fontLed.write(d.ctx, b(), s + 4, t + 2, 0), A.render(), e ? e.write(d.ctx, i, p, r, 0) : (d.ctx.fillStyle = "white", d.ctx.fillText(i, p, r)), h && d.ctx.drawImage(z, d.width - 2, 0, 2, d.height), y && (d.ctx.fillStyle = "rgba(34, 49, 85, 0.6)", d.ctx.fillRect(1, 0, d.width - 1, d.height))), d.needsRendering = !1, a ? d.canvas : void d.parentCtx.drawImage(d.canvas, d.left, d.top, d.width, d.height)
        }, d.onMouseWheel = function(a) {
            a.mouseWheels[0] > 0 ? (j++, j > l && (j = l), d.setValue(j)) : (j--, j < k && (j = k), d.setValue(j))
        }, A.onMouseWheel = d.onMouseWheel, d.onResize = function() {
            u = 40, v = 19, 5 == n && (u = 48, s -= 8), h ? (A.setSize(x, d.height - 36), A.setPosition(Math.floor((d.width - x) / 2), 0), s = Math.floor((d.width - 40) / 2), t = d.height - 32, p = Math.floor((d.width - e.getTextWidth(i, 0)) / 2), r = d.height - 10) : (A.setSize(d.width, w), A.setPosition(0, d.height - w), s = d.width - 40, t = 2)
        }, d
    }, q.spinBox = function(a) {
        function b() {
            for (var a = "" + k; a.length < o;) a = p + a;
            return a
        }

        function c(a) {
            "undefined" != typeof a.size && (i = a.size), "undefined" != typeof a.name && (d.name = a.name), "undefined" != typeof a.left && (d.left = a.left), "undefined" != typeof a.top && (d.top = a.top), "undefined" != typeof a.width && (d.width = a.width), "undefined" != typeof a.height && (d.height = a.height), "undefined" != typeof a.label && (j = a.label), "undefined" != typeof a.labels && (e = a.labels), "undefined" != typeof a.value && (k = a.value), "undefined" != typeof a.font && (f = a.font), "undefined" != typeof a.min && (l = a.min), "undefined" != typeof a.max && (m = a.max), "undefined" != typeof a.step && (n = a.step), "undefined" != typeof a.onChange && (h = a.onChange), "undefined" != typeof a.padLength && (o = a.padLength), "undefined" != typeof a.disabled && (r = !!a.disabled)
        }
        var d = q.element();
        d.type = "spinBox";
        var e, f, g, h, i = "medium",
            j = "",
            k = 0,
            l = 0,
            m = 100,
            n = 1,
            o = 4,
            p = " ",
            r = !1;
        a && c(a), m > 9999 && (o = 5);
        var s = q.Assets.generate("button20_20");
        s.onDown = function() {
            r || (k -= n, k < l && (k = l), d.setValue(k), q.ticker.onEachTick4(function() {
                k -= n, k < l && (k = l), d.setValue(k)
            }, 10))
        }, s.onTouchUp = function() {
            q.ticker.onEachTick4()
        }, s.setProperties({
            name: "buttonDown",
            label: "↓"
        }), d.addChild(s);
        var t = q.Assets.generate("button20_20");
        return t.onDown = function() {
            r || (k += n, k > m && (k = m), d.setValue(k), q.ticker.onEachTick4(function() {
                k += n, k > m && (k = m), d.setValue(k)
            }, 10))
        }, t.onTouchUp = function() {
            q.ticker.onEachTick4()
        }, t.setProperties({
            name: "buttonUp",
            label: "↑"
        }), d.addChild(t), d.setProperties = function(a) {
            return a ? (g = a || {}, c(g), d.setSize(d.width, d.height), d.setPosition(d.left, d.top), void("big" === i ? (o = 2, t.setProperties({
                left: d.width - s.width,
                height: Math.floor(d.height / 2),
                top: 0
            }), s.setProperties({
                left: t.left,
                height: t.height,
                top: d.height - t.height
            })) : (s.setProperties({
                left: d.width - s.width,
                top: 3
            }), t.setProperties({
                left: d.width - t.width - s.width,
                top: 3
            })))) : g
        }, d.setValue = function(a, b) {
            k = a, d.refresh(), !b && h && h(k)
        }, d.getValue = function() {
            return k
        }, d.setMax = function(a, b) {
            m = a, !b && k > m && d.setValue(m)
        }, d.setMin = function(a) {
            l = a, k < l && d.setValue(l)
        }, d.setDisabled = function(a) {
            r = a, d.refresh()
        }, d.render = function(a) {
            if (a = !!a, d.isVisible()) {
                if (d.needsRendering) {
                    if (d.clearCanvas(), j && (f ? f.write(d.ctx, j, 6, 11, 0) : (d.ctx.fillStyle = "white", d.ctx.fillText(j, 10, 10))), t.render(), s.render(), "big" === i) d.ctx.drawImage(fa.getImage("panel_inset_dark"), t.left - 36, 1, 34, d.height - 2), window.fontLedBig.write(d.ctx, b(), t.left - 31, 4, 0);
                    else {
                        var c = t.left - 32 - 10,
                            e = 2,
                            g = 40,
                            h = 24;
                        2 === o && (g = 24, c += 16), 3 === o && (g = 32, c += 8), 5 === o && (g = 48, c -= 8), d.ctx.drawImage(fa.getImage("panel_inset_dark"), c, e, g, h), c += 4, e = 7, window.fontLed.write(d.ctx, b(), c, e, 0)
                    }
                    r && (d.ctx.fillStyle = "rgba(34, 49, 85, 0.6)", d.ctx.fillRect(1, 0, d.width - 1, d.height))
                }
                return d.needsRendering = !1, a ? d.canvas : void d.parentCtx.drawImage(d.canvas, d.left, d.top, d.width, d.height)
            }
        }, d.onMouseWheel = function(a) {
            r || (a.mouseWheels[0] > 0 ? (k++, k > m && (k = m), d.setValue(k)) : (k--, k < l && (k = l), d.setValue(k)))
        }, d.onResize = function() {
            var a = j;
            e && e.forEach(function(a) {
                d.width >= a.width && (j = a.label)
            }), a !== j && d.refresh()
        }, d
    }, q.ticker = function() {
        var a, b, c, d, e, f, g = {},
            h = 0,
            i = 0,
            j = !1;
        return g.onEachTick2 = function(d, f) {
            e = 0, c = f || 0, a = d, j = a || b
        }, g.onEachTick4 = function(c, e) {
            f = 0, d = e || 0, b = c, j = a || b
        }, N.on(s.screenRefresh, function() {
            j && (h = 1 - h, h && (i = 1 - i, a && (e++, e > c && a()), i && b && (f++, f > d && b())))
        }), g
    }(), q.WaveForm = function() {
        function a() {
            return h || i
        }

        function b(a) {
            var b, c = g.sample.loop.start || 0;
            if (a === I.loopStart) return c < C ? -10 : c > D ? -10 : (E = D - C, b = Math.floor((c - C) / E * r.width), Math.max(C > 5 ? 0 : 5, b));
            var d = c + g.sample.loop.length;
            return d < C ? -10 : d > D ? -10 : (b = Math.floor((d - C) / E * r.width), Math.min(b, r.width - (D > l - 6 ? 6 : 0)))
        }

        function c(a) {
            var b;
            if (a === I.rangeStart) return t < C ? -10 : t > D ? -10 : (E = D - C, b = Math.floor((t - C) / E * r.width), Math.max(C > 5 ? 0 : 5, b));
            var c = t + v;
            return c < C ? -10 : c > D ? -10 : (b = Math.floor((c - C) / E * r.width), Math.min(b, r.width - (D > l - 6 ? 6 : 0)))
        }

        function d(a) {
            var b = {};
            return v ? (b.tail = f.slice(t + v), b.range = f.slice(t, t + v), b.head = f.slice(0, t)) : a ? (b.range = [], b.tail = f.slice(t), b.head = f.slice(0, t)) : (b.tail = [], b.range = f.slice(0, f.length), b.head = []), b
        }

        function e(a) {
            f = a.head.concat(a.range).concat(a.tail), g.sample.data = f, g.sample.length = f.length, p = !0, N.trigger(s.instrumentChange, da.getCurrentInstrumentIndex()), p = !1, J.refresh(), r.refresh()
        }
        var f, g, h, i, j, k, l, m, n, o, p, r = q.element(),
            t = 0,
            u = 0,
            v = 0,
            w = 0,
            x = 0,
            y = 0,
            z = !1,
            B = 1,
            C = 0,
            D = 0,
            E = 0,
            F = [],
            G = 0,
            H = 0,
            I = {
                loopStart: 1,
                loopEnd: 2,
                rangeStart: 3,
                rangeEnd: 4
            },
            J = q.element(),
            K = q.scale9Panel(0, 0, r.width, r.height, {
                img: fa.getImage("panel_dark"),
                left: 3,
                top: 3,
                right: 2,
                bottom: 2
            });
        K.ignoreEvents = !0;
        var L = q.scale9Panel(1, 0, 100, 18, {
            img: fa.getImage("bar"),
            left: 2,
            top: 2,
            right: 3,
            bottom: 3
        });
        return L.onDragStart = function() {
            L.startDragIndex = C, L.startLeft = L.left
        }, L.onDrag = function(a) {
            var b = a.dragX - a.startX,
                c = L.startLeft + b,
                d = 1,
                e = r.width - L.width - 1;
            c = Math.max(c, d), c = Math.min(c, e), L.setPosition(c, L.top);
            var f = c / (e - d);
            E = D - C, C = Math.floor((l - E) * f), D = C + E, J.refresh()
        }, r.addChild(L), N.on(s.screenRefresh, function() {
            a() && r.isVisible() && r.refresh()
        }), r.onDragStart = function(a) {
            var d = a.startX - r.left;
            if (g.sample.loop.enabled) {
                var e = b(I.loopEnd);
                if (Math.abs(d - e) < 5) return w = I.loopEnd, void(y = g.sample.loop.length);
                if (e = b(I.loopStart), Math.abs(d - e) < 5) return w = I.loopStart, void(y = g.sample.loop.start)
            }
            if (v && (e = c(I.rangeEnd), Math.abs(d - e) < 5)) return w = I.rangeEnd, void(y = v);
            if (t && (e = c(I.rangeStart), Math.abs(d - e) < 5)) return w = I.rangeStart, void(y = t);
            i = !0, m = n = a.startX - r.left;
            var f = g.sample.length / r.width / B;
            t = u = Math.round(C + m * f), v = 0, N.trigger(s.samplePropertyChange, {
                rangeLength: v
            })
        }, r.onDrag = function(a) {
            var b = g.sample.length / r.width / B;
            if (w && (w === I.loopStart || w === I.loopEnd)) {
                x = w;
                var c = a.dragX - a.startX,
                    d = y + Math.round(b * c);
                da.inFTMode() || (d -= d % 2);
                var e = {};
                return w === I.loopStart ? (d = Math.min(d, l - 2), d = Math.max(d, 0), e.loopStart = d, e.loopStart + g.sample.loop.length > l && (e.loopLength = l - e.loopStart)) : (d = Math.max(d, 2), d = Math.min(d, l - g.sample.loop.start), e.loopLength = d), void N.trigger(s.samplePropertyChange, e)
            }
            return !w || w !== I.rangeStart && w !== I.rangeEnd ? (n = a.dragX - r.left, u = Math.round(C + n * b), v = u - t, void N.trigger(s.samplePropertyChange, {
                rangeLength: Math.abs(v)
            })) : (x = w, c = a.dragX - a.startX, d = y + Math.round(b * c), w === I.rangeStart ? (d = Math.min(d, l - 2), d = Math.max(d, 0), t = d, t + v > l && (v = l - t)) : (d = Math.max(d, 2), d = Math.min(d, l - t), v = d), N.trigger(s.samplePropertyChange, {
                rangeLength: v
            }), void r.refresh())
        }, r.onTouchUp = function(a) {
            i && t > u && (v = t - u, t = u, u = t + v, r.refresh()), i = !1, w = 0, z = !1, v && q.setSelection(r.processSelection)
        }, r.onDown = function(a) {
            z = !0
        }, r.onHover = function(a) {
            if (!i && !w && !z) {
                var d = x;
                z || (x = 0);
                var e = r.eventX;
                if (t && (f = c(I.rangeStart), Math.abs(e - f) < 5)) return x = I.rangeStart, void(d !== x && r.refresh());
                if (u) {
                    var f = c(I.rangeEnd);
                    if (Math.abs(e - f) < 5) return x = I.rangeEnd, void(d !== x && r.refresh())
                }
                if (g.sample.loop.enabled) {
                    if (f = b(I.loopEnd), Math.abs(e - f) < 5) return x = I.loopEnd, void(d !== x && r.refresh());
                    if (f = b(I.loopStart), Math.abs(e - f) < 5) return x = I.loopStart, void(d !== x && r.refresh())
                }
                d !== x && r.refresh()
            }
        }, r.onResize = function() {
            J.setPosition(0, 0), J.setSize(r.width, r.height), L.setPosition(L.left, r.height - 18), B > 1 && L.setSize(Math.floor(r.width / B), 18)
        }, r.setInstrument = function(a) {
            g = a, a ? (f = g.sample.data, l = f.length) : (f = void 0, l = 0), N.trigger(s.samplePropertyChange, {
                sampleLength: l,
                loopLength: a.sample.loop.length
            }), p || (h = !1, r.zoom(1), t = 0, u = 0, v = 0, r.refresh())
        }, r.play = function(a) {
            B > 1 || (H = G, h = !0, j = (new Date).getTime(), k = O.getSampleRateForPeriod(a), r.refresh())
        }, r.playSection = function(a) {
            "range" === a && (G = t, ia.handleNoteOn(ia.getPrevIndex(), void 0, G), G = 0), "loop" === a && (G = g.sample.loop.start, ia.handleNoteOn(ia.getPrevIndex(), void 0, G), G = 0)
        }, r.stop = function() {
            h = !1, r.refresh()
        }, r.zoom = function(a) {
            var b = !1;
            if ("range" === a)
                if (v) {
                    C = t, E = v, D = C + E, B = l / E;
                    var c = r.width / B,
                        d = r.width - c - 2;
                    L.setPosition(Math.floor(C / (l - E) * d), L.top), b = !0
                } else a = 1;
            "loop" === a && (g.sample.loop.enabled && (C = g.sample.loop.start, E = g.sample.loop.length, D = C + E, B = l / E, c = r.width / B, d = r.width - c - 2, L.setPosition(Math.floor(C / (l - E) * d), L.top)), b = !0), 1 !== a && 1 !== B || (B = 1, C = 0), b || (B *= a, B = Math.max(B, 1), E = Math.floor(l / B), D = C + E), L.setSize(Math.floor(r.width / B), 18), o = B > 1, o && D > l && (C = l - E, D = l, L.setPosition(r.width - L.width - 1, L.top)), J.refresh(), r.refresh()
        }, r.select = function(a) {
            "all" === a && (t = 0, u = f.length, v = f.length, r.refresh()), "none" === a && (t = 0, u = 0, v = 0, r.refresh()), "loop" === a && g.sample.loop.length > 2 && (t = g.sample.loop.start, v = g.sample.loop.length, u = t + v, r.refresh()), "start" === a && (t = 0, v = u - t, r.refresh()), "end" === a && (u = f.length, v = u - t, r.refresh()), N.trigger(s.samplePropertyChange, {
                rangeLength: v
            }), q.setSelection(r.processSelection)
        }, r.render = function() {
            if (this.needsRendering) {
                if (J.needsRendering) {
                    if (J.clearCanvas(), J.ctx.fillStyle = "rgb(13, 19, 27)", J.ctx.fillRect(0, 0, r.width, r.height), J.ctx.strokeStyle = "rgba(120, 255, 50, 0.5)", K.width !== r.width && K.setSize(r.width, r.height), J.ctx.drawImage(K.render(!0), 0, 0, r.width, r.height), f && f.length && r.width) {
                        1 === B && (C = 0, D = l), E = D - C;
                        var a = E / r.width,
                            d = r.height / 2;
                        J.ctx.beginPath();
                        for (var e = r.height / 2 - 2, i = 0; i < r.width; i++) {
                            var m = Math.floor(i * a),
                                n = f[C + m] * e;
                            0 === i ? J.ctx.moveTo(i, d + n) : J.ctx.lineTo(i, d + n)
                        }
                        J.ctx.stroke()
                    }
                    J.needsRendering = !1
                }
                if (r.ctx.drawImage(J.canvas, 0, 0), h && l) {
                    var p = (new Date).getTime(),
                        q = p - j,
                        m = H + k * q / 1e3;
                    if (g.sample.loop.enabled && m > g.sample.loop.start) {
                        m = g.sample.loop.start + (m - g.sample.loop.start) % g.sample.loop.length;
                        var s = m / l * r.width;
                        r.ctx.fillStyle = "rgb(241, 162, 71)", r.ctx.fillRect(s, 0, 1, r.height)
                    } else if (m > l) h = !1;
                    else {
                        var s = m / l * r.width;
                        r.ctx.fillStyle = "rgb(241, 162, 71)", r.ctx.fillRect(s, 0, 1, r.height)
                    }
                }
                if (g.sample.loop.length > 2 || g.sample.loop.enabled) {
                    var w = g.sample.loop.enabled ? "rgb(241, 220, 71)" : "rgba(150, 150, 150,0.7)";
                    r.ctx.fillStyle = w, x === I.loopStart && (r.ctx.fillStyle = "white");
                    var y = b(I.loopStart);
                    r.ctx.fillRect(y, 0, 1, r.height - 1), r.ctx.fillRect(y - 4, 0, 4, 10), r.ctx.fillStyle = w, x === I.loopEnd && (r.ctx.fillStyle = "white"), y = b(I.loopEnd), r.ctx.fillRect(y, 0, 1, r.height - 1), r.ctx.fillRect(y + 1, 0, 4, 10)
                }
                var z = -1,
                    A = -1;
                u && (w = "rgb(241, 131, 71)", r.ctx.fillStyle = w, x === I.rangeEnd && (r.ctx.fillStyle = "white"), A = c(I.rangeEnd), r.ctx.fillRect(A, 0, 1, r.height - 1), r.ctx.fillRect(A + 1, 11, 4, 10)), t && (t < C ? z = 0 : (w = "rgb(241, 131, 71)", r.ctx.fillStyle = w, x === I.rangeStart && (r.ctx.fillStyle = "white"), z = c(I.rangeStart), r.ctx.fillRect(z, 0, 1, r.height - 1), r.ctx.fillRect(z - 4, 11, 4, 10)), t + v < C && (z = A = -1)), z !== A && (z >= 0 && (A = Math.min(A, r.width), A <= 0 && (A = r.width)), r.ctx.fillStyle = "rgba(241, 162, 71,0.1)", r.ctx.fillRect(z, 0, A - z, r.height)), o && L.render()
            }
            this.needsRendering = !1, r.parentCtx.drawImage(r.canvas, r.left, r.top, r.width, r.height)
        }, r.adjustVolume = function(a) {
            var b, c, f, g = d(),
                h = !1;
            if ("max" === a) {
                var i = 0,
                    j = 0;
                for (c = 0, f = g.range.length; c < f; c++) i = Math.min(i, g.range[c]), j = Math.max(j, g.range[c]);
                if (b = 1 / Math.max(j, -i), b > 1) {
                    for (c = 0, f = g.range.length; c < f; c++) g.range[c] = g.range[c] * b;
                    h = !0
                }
            }
            if ("fadein" === a) {
                for (c = 0, f = g.range.length - 1; c <= f; c++) b = c / f, g.range[c] = g.range[c] * b;
                h = !0
            }
            if ("fadeout" === a) {
                for (c = 0, f = g.range.length - 1; c <= f; c++) b = 1 - c / f, g.range[c] = g.range[c] * b;
                h = !0
            }
            if (!h) {
                if ("number" == typeof a)
                    for (b = 1 + 1 / a, c = 0, f = g.range.length - 1; c <= f; c++) g.range[c] = Math.min(Math.max(g.range[c] * b, -1), 1);
                h = !0
            }
            h && e(g)
        }, r.reverse = function() {
            var a = d();
            a.range = a.range.reverse(), e(a)
        }, r.invert = function() {
            for (var a = d(), b = 0, c = a.range.length - 1; b <= c; b++) a.range[b] = -a.range[b];
            e(a)
        }, r.resample = function(a) {
            var b = d(),
                c = [];
            if ("up" === a) {
                for (var f = 0, h = b.range.length; f < h; f++) c.push(b.range[f]), c.push(b.range[f]);
                g.sample.loop.start = Math.floor(2 * g.sample.loop.start), g.sample.loop.length = Math.floor(2 * g.sample.loop.length), t *= 2, v *= 2, u = t + v
            } else {
                for (var f = 0, h = b.range.length; f < h; f += 2) c.push(b.range[f]);
                g.sample.loop.start = Math.floor(g.sample.loop.start / 2), g.sample.loop.length = Math.floor(g.sample.loop.length / 2), t = Math.floor(t / 2), v = Math.floor(v / 2), u = t + v
            }
            da.inFTMode() || (g.sample.loop.start = g.sample.loop.start - g.sample.loop.start % 2, g.sample.loop.length = g.sample.loop.length - g.sample.loop.length % 2), b.range = c, e(b)
        }, r.processSelection = function(a) {
            if (r.isVisible()) switch (a) {
                case A.RESET:
                    return !1;
                case A.CLEAR:
                    r.adjustVolume(0);
                    break;
                case A.COPY:
                case A.CUT:
                    if (v > 0) {
                        var b = d();
                        F = b.range.slice(0), a === A.CUT && (b.range = [], e(b), v = 0, u = t + v, N.trigger(s.samplePropertyChange, {
                            rangeLength: v
                        }), r.refresh())
                    }
                    break;
                case A.PASTE:
                    b = d(!0), t ? b.range = b.range.concat(F) : b.tail = b.tail.concat(F), e(b);
                    break;
                case A.POSITION:
            }
        }, N.on(s.commandSelectAll, function() {
            r.isVisible() && r.select("all")
        }), r
    }, ea.sprite = function(a) {
        var b = {};
        if (b.canvas = document.createElement("canvas"), b.ctx = b.canvas.getContext("2d"), a && (a.width && (b.canvas.width = a.width, b.canvas.height = a.height || a.width), a.img)) {
            var c = a.x || 0,
                d = a.y || 0,
                e = b.canvas.width,
                f = b.canvas.height;
            b.ctx.drawImage(a.img, c, d, e, f, 0, 0, e, f)
        }
        return b
    }, FilterChain = function(a) {
        function b() {
            if (m = l, A && (q = q || d(), m.connect(q), m = q), B && (s = s || e(), m.connect(s), m = s), C && (t = t || f(), m.connect(t), m = t), D && (u = u || g(), m.connect(u), m = u), E && (v = v || M.createConvolver(), w = w || M.createGain(), w.gain.value = 0, m.connect(w), w.connect(v), n = v), F) {
                var a = M.createWaveShaper();
                a.curve = i(400), a.oversample = "4x"
            }
            z && (x = x || O.context.createStereoPanner(), m.connect(x), m = x), o = o || M.createGain(), m.connect(o), n && n.connect(o), m = o
        }

        function c() {
            l.disconnect(), q && q.disconnect(), s && s.disconnect(), t && t.disconnect(), u && u.disconnect(), w && w.disconnect(), x && x.disconnect(), n = void 0
        }

        function d() {
            var a = M.createBiquadFilter();
            return a.type = "highshelf", a.frequency.value = 3200, a.gain.value = I, a
        }

        function e() {
            var a = M.createBiquadFilter();
            return a.type = "peaking", a.frequency.value = 1e3, a.Q.value = .5, a.gain.value = H, a
        }

        function f() {
            var a = M.createBiquadFilter();
            return a.type = "lowshelf", a.frequency.value = 320, a.gain.value = G, a
        }

        function g() {
            var a = M.createBiquadFilter();
            return a.type = "lowpass", a.frequency.value = 5e3, a
        }

        function h() {
            b(), j.volumeValue(J)
        }

        function i(a) {
            for (var b, c = "number" == typeof a ? a : 50, d = 44100, e = new Float32Array(d), f = Math.PI / 180, g = 0; g < d; ++g) b = 2 * g / d - 1, e[g] = (3 + c) * b * 20 * f / (Math.PI + c * Math.abs(b));
            return e
        }
        var j = {};
        a = a || {
            volume: !0,
            panning: !0
        };
        var k = !0;
        k && (a = {
            volume: !0,
            panning: !0
        });
        var l, m, n, o, q, s, t, u, v, w, x, y = a.volume,
            z = a.panning && O.context.createStereoPanner,
            A = a.high,
            B = a.mid,
            C = a.low,
            D = a.lowPass,
            E = a.reverb,
            F = a.distortion,
            G = 0,
            H = 0,
            I = 0,
            J = 70,
            K = 0,
            L = 30,
            M = O.context;
        return l = M.createGain(), l.gain.value = 1, m = l, j.lowValue = function(a) {
            if (C) {
                if ("undefined" != typeof a) {
                    var b = 20;
                    G = a, t.gain.value = G * b
                }
                return G
            }
        }, j.midValue = function(a) {
            if (B) {
                if ("undefined" != typeof a) {
                    var b = 20;
                    H = a, s.gain.value = H * b
                }
                return H
            }
        }, j.highValue = function(a) {
            if (A) {
                if ("undefined" != typeof a) {
                    var b = 20;
                    I = a, q.gain.value = I * b
                }
                return I
            }
        }, j.lowPassFrequencyValue = function(a) {
            if (D) {
                var b = 40,
                    c = O.context.sampleRate / 2,
                    d = Math.log(c / b) / Math.LN2,
                    e = Math.pow(2, d * (a - 1));
                u.frequency.value = c * e
            }
        }, j.lowPassQualityValue = function(a) {
            D && (u.Q.value = a * L)
        }, j.reverbValue = function(a) {
            if (E) {
                if (!v.buffer) {
                    var b = p.audio["data/reverb/sportcentre.m4a"];
                    if (b) v.buffer = b;
                    else {
                        var c = W();
                        c.load(["data/reverb/sportcentre.m4a"], r.audio, function() {
                            v.buffer = p.audio["data/reverb/sportcentre.m4a"]
                        })
                    }
                }
                var d = 100,
                    e = parseInt(a) / d;
                w.gain.value = e * e
            }
        }, j.volumeValue = function(a) {
            if (y) {
                if ("undefined" != typeof a) {
                    var b = 100;
                    J = a;
                    var c = a / b;
                    o.gain.value = c * c
                }
                return J
            }
        }, j.panningValue = function(a, b) {
            if (z) return "undefined" != typeof a && (K = a, b ? x.pan.setValueAtTime(K, b) : x.pan.setValueAtTime(K, O.context.currentTime)), K
        }, j.setState = function(a, d) {
            c(), "high" === a && (A = !!d), "mid" === a && (B = !!d), "low" === a && (C = !!d), "lowPass" === a && (D = !!d), "reverb" === a && (E = !!d), "panning" === a && (z = !!d && O.context.createStereoPanner), b()
        }, j.input = function() {
            return l
        }, j.output = function() {
            return m
        }, h(), j
    };
    var ja = function() {
            var a = {},
                b = {
                    unknown: {
                        name: "UNKNOWN"
                    },
                    unsupported: {
                        name: "UNSUPPORTED"
                    },
                    mod_ProTracker: {
                        name: "PROTRACKER",
                        isMod: !0,
                        loader: function() {
                            return la()
                        }
                    },
                    mod_SoundTracker: {
                        name: "SOUNDTRACKER",
                        isMod: !0,
                        loader: function() {
                            return ma()
                        }
                    },
                    mod_FastTracker: {
                        name: "FASTTRACKER",
                        isMod: !0,
                        loader: function() {
                            return ka()
                        }
                    },
                    sample: {
                        name: "SAMPLE",
                        isSample: !0
                    },
                    zip: {
                        name: "ZIP"
                    }
                };
            return a.detect = function(a, c) {
                function d(a) {
                    return a < 128
                }

                function e() {
                    a.goto(0);
                    for (var b = 0; b < 20; b++)
                        if (!d(a.readByte())) return !1;
                    for (var c = 0, e = 0, g = 0; g < 15; g++) {
                        for (b = 0; b < 22; b++)
                            if (!d(a.readByte())) return !1;
                        a.jump(-22);
                        var h = a.readString(22);
                        if ("st-" == h.toLowerCase().substr(0, 3) && (e += 10), e > 20) return !0;
                        c += a.readWord(), a.jump(6)
                    }
                    return !(2 * c + 1624 > f)
                }
                var f = a.length,
                    g = "";
                if (g = a.readString(17, 0), "Extended Module: " == g) return b.mod_FastTracker;
                if (f > 1100 && (g = a.readString(4, 1080)), "M.K." == g) return b.mod_ProTracker;
                if ("M!K!" == g) return b.mod_ProTracker;
                if ("M&K!" == g) return b.mod_ProTracker;
                if ("FLT4" == g) return b.mod_ProTracker;
                if ("2CHN" == g) return b.mod_ProTracker;
                if ("6CHN" == g) return b.mod_ProTracker;
                if ("8CHN" == g) return b.mod_ProTracker;
                if ("10CH" == g) return b.mod_ProTracker;
                if ("12CH" == g) return b.mod_ProTracker;
                if ("14CH" == g) return b.mod_ProTracker;
                if ("16CH" == g) return b.mod_ProTracker;
                if ("18CH" == g) return b.mod_ProTracker;
                if ("20CH" == g) return b.mod_ProTracker;
                if ("22CH" == g) return b.mod_ProTracker;
                if ("24CH" == g) return b.mod_ProTracker;
                if ("26CH" == g) return b.mod_ProTracker;
                if ("28CH" == g) return b.mod_ProTracker;
                if ("30CH" == g) return b.mod_ProTracker;
                if ("32CH" == g) return b.mod_ProTracker;
                var h = "";
                if (c && c.length > 4 && (h = c.substr(c.length - 4)), h = h.toLowerCase(), ".wav" == h) return b.sample;
                if (".mp3" == h) return b.sample;
                if (".iff" == h) return b.sample;
                if (".zip" == h) return b.zip;
                var i = a.readString(2, 0);
                if ("PK" == i) return b.zip;
                if (c && c.indexOf(".") >= 0 && f > 1624) {
                    var j = e();
                    if (j) return b.mod_SoundTracker
                }
                return b.sample
            }, a
        }(),
        ka = function() {
            var a = {};
            return a.load = function(a, b) {
                function c(a) {
                    for (a.points = [], t = 0; t < 12; t++) a.points.push(a.raw.slice(2 * t, 2 * t + 2));
                    return 1 & a.type && (a.enabled = !0), 2 & a.type && (a.sustain = !0), 4 & a.type && (a.loop = !0), a
                }
                da.setTrackerMode(L.FASTTRACKER);
                var d = {},
                    e = {
                        patterns: [],
                        instruments: []
                    };
                a.litteEndian = !0, a.goto(17), e.title = a.readString(20), a.jump(1), d.trackerName = a.readString(20), d.trackerVersion = a.readByte(), d.trackerVersion = a.readByte() + "." + d.trackerVersion, d.headerSize = a.readDWord(), d.songlength = a.readWord(), d.restartPosition = a.readWord(), d.numberOfChannels = a.readWord(), d.numberOfPatterns = a.readWord(), d.numberOfInstruments = a.readWord(), d.flags = a.readWord(), da.useLinearFrequency = d.flags % 2 === 1, d.defaultTempo = a.readWord(), d.defaultBPM = a.readWord();
                for (var f = [], g = 0, h = 0; h < d.songlength; ++h) f[h] = a.readUbyte(), g < f[h] && (g = f[h]);
                e.patternTable = f, e.length = d.songlength, e.channels = d.numberOfChannels, e.restartPosition = d.restartPosition + 1;
                var i = 60 + d.headerSize;
                for (a.goto(i), h = 0; h < d.numberOfPatterns; h++) {
                    var j = [],
                        k = {};
                    k.headerSize = a.readDWord(), k.packingType = a.readUbyte(), k.patternLength = a.readWord(), k.patternSize = a.readWord(), i += k.headerSize, a.goto(i);
                    for (var l = 0; l < k.patternLength; l++) {
                        var m, n = [];
                        for (m = 0; m < d.numberOfChannels; m++) {
                            var o = oa(),
                                p = a.readUbyte();
                            128 & p ? (1 & p && o.setIndex(a.readUbyte()), 2 & p && (o.instrument = a.readUbyte()), 4 & p && (o.volumeEffect = a.readUbyte()), 8 & p && (o.effect = a.readUbyte()), 16 & p && (o.param = a.readUbyte())) : (o.setIndex(p), o.instrument = a.readUbyte(), o.volumeEffect = a.readUbyte(), o.effect = a.readUbyte(), o.param = a.readUbyte()), n.push(o)
                        }
                        j.push(n)
                    }
                    i += k.patternSize, a.goto(i), e.patterns.push(j)
                }
                var q = [];
                for (h = 1; h <= d.numberOfInstruments; ++h) {
                    var r = na();
                    try {
                        if (r.filePosition = a.index, r.headerSize = a.readDWord(), r.name = a.readString(22), r.type = a.readUbyte(), r.numberOfSamples = a.readWord(), r.samples = [], r.sampleHeaderSize = 0, r.numberOfSamples > 0) {
                            r.sampleHeaderSize = a.readDWord(), r.sampleHeaderSize = Math.max(r.sampleHeaderSize, 40), r.sampleHeaderSize > 200 && (r.sampleHeaderSize = 40);
                            for (var t = 0; t < 96; t++) r.sampleNumberForNotes.push(a.readUbyte());
                            for (t = 0; t < 24; t++) r.volumeEnvelope.raw.push(a.readWord());
                            for (t = 0; t < 24; t++) r.panningEnvelope.raw.push(a.readWord());
                            r.volumeEnvelope.count = a.readUbyte(), r.panningEnvelope.count = a.readUbyte(), r.volumeEnvelope.sustainPoint = a.readUbyte(), r.volumeEnvelope.loopStartPoint = a.readUbyte(), r.volumeEnvelope.loopEndPoint = a.readUbyte(), r.panningEnvelope.sustainPoint = a.readUbyte(), r.panningEnvelope.loopStartPoint = a.readUbyte(), r.panningEnvelope.loopEndPoint = a.readUbyte(), r.volumeEnvelope.type = a.readUbyte(), r.panningEnvelope.type = a.readUbyte(), r.vibrato.type = a.readUbyte(), r.vibrato.sweep = a.readUbyte(), r.vibrato.depth = Math.min(a.readUbyte(), 15), r.vibrato.rate = a.readUbyte(), r.fadeout = a.readWord(), r.reserved = a.readWord(), r.volumeEnvelope = c(r.volumeEnvelope), r.panningEnvelope = c(r.panningEnvelope)
                        }
                    } catch (a) {}
                    if (i += r.headerSize, a.goto(i), 0 === r.numberOfSamples) {
                        var u = pa();
                        r.samples.push(u)
                    } else {
                        if (a.isEOF(1)) break;
                        for (var v = 0; v < r.numberOfSamples; v++) u = pa(), u.length = a.readDWord(), u.loop.start = a.readDWord(), u.loop.length = a.readDWord(), u.volume = a.readUbyte(), u.finetuneX = a.readByte(), u.type = a.readUbyte(), u.panning = a.readUbyte() - 128, u.relativeNote = a.readByte(), u.reserved = a.readByte(), u.name = a.readString(22), u.bits = 8, r.samples.push(u), i += r.sampleHeaderSize, a.goto(i);
                        for (v = 0; v < r.numberOfSamples; v++)
                            if (u = r.samples[v], u.length) {
                                i += u.length, 16 & u.type && (u.bits = 16, u.type ^= 16, u.length >>= 1, u.loop.start >>= 1, u.loop.length >>= 1), u.loop.type = u.type || 0, u.loop.enabled = !!u.loop.type;
                                var w = u.length,
                                    x = 0;
                                if (16 === u.bits)
                                    for (var y = 0; y < w; y++) {
                                        var A = a.readShort() + x;
                                        A < -32768 ? A += 65536 : A > 32767 && (A -= 65536), x = A, u.data.push(A / 32768)
                                    } else
                                        for (y = 0; y < w; y++) A = a.readByte() + x, A < -128 ? A += 256 : A > 127 && (A -= 256), x = A, u.data.push(A / 127);
                                if (u.loop.type === z.PINGPONG) {
                                    var B = u.data.slice(u.loop.start, u.loop.start + u.loop.length);
                                    u.data = u.data.slice(0, u.loop.start + u.loop.length), u.data = u.data.concat(B.reverse()), u.loop.length = 2 * u.loop.length, u.length = u.loop.start + u.loop.length
                                }
                                a.goto(i)
                            }
                    }
                    r.setSampleIndex(0), da.setInstrument(h, r), q.push({
                        label: h + " " + r.name,
                        data: h
                    })
                }
                return N.trigger(s.instrumentListChange, q), e.instruments = da.getInstruments(), da.setBPM(d.defaultBPM), da.setAmigaSpeed(d.defaultTempo), e
            }, a.write = function(a) {
                var b = da.getSong(),
                    c = da.getInstruments(),
                    d = da.getTrackCount(),
                    e = "undefined" == typeof versionNumber ? "dev" : versionNumber,
                    f = 0;
                for (k = 0; k < 128; k++) {
                    var h = b.patternTable[k] || 0;
                    f = Math.max(f, h)
                }
                var i = 336;
                for (k = 0; k <= f; k++) b.patterns[k] && (i += 9 + b.patterns[k].length * d * 5);
                for (k = 1; k < c.length; k++) {
                    var j = c[k];
                    j && j.hasSamples() ? j.samples.forEach(function(a) {
                        var b = a.length;
                        16 === a.bits && (b *= 2), i += 283 + b
                    }) : i += 29
                }
                var k, l = new ArrayBuffer(i),
                    m = new g(l, !1);
                for (m.writeStringSection("Extended Module: ", 17), m.writeStringSection(b.title, 20), m.writeByte(26), m.writeStringSection("BassoonTracker " + e, 20), m.writeByte(4), m.writeByte(1), m.writeDWord(276), m.writeWord(b.length), m.writeWord(0), m.writeWord(da.getTrackCount()), m.writeWord(f + 1), m.writeWord(c.length - 1), m.writeWord(da.useLinearFrequency ? 1 : 0), m.writeWord(da.getAmigaSpeed()), m.writeWord(da.getBPM()), k = 0; k < 256; k++) m.writeUByte(b.patternTable[k] || 0);
                for (k = 0; k <= f; k++) {
                    var n = b.patterns[k],
                        o = 0,
                        p = 0;
                    if (n && (o = n.length, p = o * d * 5), m.writeDWord(9), m.writeUByte(0), m.writeWord(o), m.writeWord(p), n)
                        for (var q = 0, r = n.length; q < r; q++)
                            for (var s = n[q], t = 0; t < d; t++) {
                                var u = s[t] || {};
                                m.writeUByte(u.index || 0), m.writeUByte(u.instrument || 0), m.writeUByte(u.volumeEffect || 0), m.writeUByte(u.effect || 0), m.writeUByte(u.param || 0)
                            }
                }
                for (k = 1; k < c.length; k++)
                    if (j = c[k], j && j.hasSamples()) {
                        j.numberOfSamples = j.samples.length, m.writeDWord(243), m.writeStringSection(j.name, 22), m.writeUByte(0), m.writeWord(j.numberOfSamples);
                        var v = (j.volumeEnvelope.enabled ? 1 : 0) + (j.volumeEnvelope.sustain ? 2 : 0) + (j.volumeEnvelope.loop ? 4 : 0),
                            w = (j.panningEnvelope.enabled ? 1 : 0) + (j.panningEnvelope.sustain ? 2 : 0) + (j.panningEnvelope.loop ? 4 : 0);
                        m.writeDWord(40);
                        for (var x = 0; x < 96; x++) m.writeUByte(j.sampleNumberForNotes[x] || 0);
                        for (x = 0; x < 12; x++) {
                            var y = j.volumeEnvelope.points[x] || [0, 0];
                            m.writeWord(y[0]), m.writeWord(y[1])
                        }
                        for (x = 0; x < 12; x++) y = j.panningEnvelope.points[x] || [0, 0], m.writeWord(y[0]), m.writeWord(y[1]);
                        m.writeUByte(j.volumeEnvelope.count || 0), m.writeUByte(j.panningEnvelope.count || 0), m.writeUByte(j.volumeEnvelope.sustainPoint || 0), m.writeUByte(j.volumeEnvelope.loopStartPoint || 0), m.writeUByte(j.volumeEnvelope.loopEndPoint || 0), m.writeUByte(j.panningEnvelope.sustainPoint || 0), m.writeUByte(j.panningEnvelope.loopStartPoint || 0), m.writeUByte(j.panningEnvelope.loopEndPoint || 0), m.writeUByte(v), m.writeUByte(w), m.writeUByte(j.vibrato.type || 0), m.writeUByte(j.vibrato.sweep || 0), m.writeUByte(j.vibrato.depth || 0), m.writeUByte(j.vibrato.rate || 0), m.writeWord(j.fadeout || 0), m.writeWord(0);
                        for (var z = 0; z < j.numberOfSamples; z++) {
                            var A = j.samples[z],
                                B = 0;
                            A.loop.length > 2 && A.loop.enabled && (B = 1);
                            var C = A.length,
                                D = A.loop.start,
                                E = A.loop.length;
                            16 === A.bits && (B += 16, C *= 2, D *= 2, E *= 2), m.writeDWord(C), m.writeDWord(D), m.writeDWord(E), m.writeUByte(A.volume), m.writeByte(A.finetuneX), m.writeUByte(B), m.writeUByte((A.panning || 0) + 128), m.writeUByte(A.relativeNote || 0), m.writeUByte(0), m.writeStringSection(A.name || "", 22)
                        }
                        for (z = 0; z < j.numberOfSamples; z++) {
                            A = j.samples[z];
                            var F, G = 0,
                                H = 0;
                            if (16 === A.bits)
                                for (x = 0, r = A.length; x < r; x++) F = Math.round(32768 * A.data[x]), G = F - H, H = F, G < -32768 ? G += 65536 : G > 32767 && (G -= 65536), m.writeWord(G);
                            else
                                for (x = 0, r = A.length; x < r; x++) F = Math.round(127 * A.data[x]), G = F - H, H = F, G < -128 ? G += 256 : G > 127 && (G -= 256), m.writeByte(G)
                        }
                    } else m.writeDWord(29), m.writeStringSection(j ? j.name : "", 22), m.writeUByte(0), m.writeWord(0);
                a && a(m)
            }, a
        },
        la = function() {
            var a = {};
            return a.load = function(a, b) {
                da.setTrackerMode(L.PROTRACKER), da.useLinearFrequency = !1;
                var c = {
                        patterns: [],
                        restartPosition: 1
                    },
                    d = 64,
                    e = 31,
                    f = 4;
                c.typeId = a.readString(4, 1080), c.title = a.readString(20, 0), "2CHN" === c.typeId && (f = 2), "6CHN" === c.typeId && (f = 6), "8CHN" === c.typeId && (f = 8), "10CH" === c.typeId && (f = 10), "12CH" === c.typeId && (f = 12), "14CH" === c.typeId && (f = 14), "16CH" === c.typeId && (f = 16), "18CH" === c.typeId && (f = 18), "20CH" === c.typeId && (f = 20), "22CH" === c.typeId && (f = 22), "24CH" === c.typeId && (f = 24), "26CH" === c.typeId && (f = 26), "28CH" === c.typeId && (f = 28), "30CH" === c.typeId && (f = 30), "32CH" === c.typeId && (f = 32), c.channels = f;
                var g = 0;
                for (o = 1; o <= e; ++o) {
                    var h = a.readString(22),
                        i = a.readWord(),
                        k = na();
                    k.name = h, k.sample.length = k.sample.realLen = i << 1;
                    var l = a.readUbyte();
                    l > 7 && (l -= 16), k.setFineTune(l), k.sample.volume = a.readUbyte(), k.sample.loop.start = a.readWord() << 1, k.sample.loop.length = a.readWord() << 1, k.sample.loop.enabled = k.sample.loop.length > 2, k.sample.loop.type = z.FORWARD, k.pointer = g, g += k.sample.length, k.setSampleIndex(0), da.setInstrument(o, k)
                }
                c.instruments = da.getInstruments(), a.goto(950), c.length = a.readUbyte(), a.jump(1);
                for (var m = [], n = 0, o = 0; o < 128; ++o) m[o] = a.readUbyte(), m[o] > n && (n = m[o]);
                for (c.patternTable = m, a.goto(1084), o = 0; o <= n; ++o) {
                    for (var p = [], q = 0; q < d; q++) {
                        var r, t = [];
                        for (r = 0; r < f; r++) {
                            var u = oa(),
                                v = a.readUint();
                            u.setPeriod(v >> 16 & 4095), u.effect = v >> 8 & 15, u.instrument = v >> 24 & 240 | v >> 12 & 15, u.param = 255 & v, t.push(u)
                        }
                        for (r = f; r < da.getTrackCount(); r++) t.push(oa());
                        p.push(t)
                    }
                    c.patterns.push(p)
                }
                var w = [];
                for (o = 1; o <= e; o++)
                    if (k = da.getInstrument(o)) {
                        var x = k.sample.length;
                        for (k.sample.loop.length > 2 && M.unrollShortLoops && k.sample.loop.length < 1e3 && (x = Math.min(x, k.sample.loop.start + k.sample.loop.length), k.sample.length = x), j = 0; j < x; j++) {
                            var y = a.readByte();
                            j < 2 && (y = 0), k.sample.data.push(y / 127)
                        }
                        if ((M.unrollShortLoops || M.unrollLoops) && k.sample.loop.length > 2) {
                            var A = Math.ceil(4e4 / k.sample.loop.length) + 1;
                            M.unrollLoops || (A = 0);
                            var B = !1,
                                C = 0;
                            M.unrollShortLoops && k.sample.loop.length < 1600 && (A = Math.floor(1e3 / k.sample.loop.length), B = !0);
                            for (var D = 0; D < A; D++) {
                                var E = k.sample.loop.start,
                                    F = E + k.sample.loop.length;
                                for (j = E; j < F; j++) k.sample.data.push(k.sample.data[j]);
                                C += k.sample.loop.length
                            }
                            B && C && (k.sample.loop.length += C, k.sample.length += C)
                        }
                        w.push({
                            label: o + " " + k.name,
                            data: o
                        })
                    } return N.trigger(s.instrumentListChange, w), c
            }, a.write = function(a) {
                var b = da.getSong(),
                    c = da.getInstruments(),
                    d = da.getTrackCount(),
                    e = da.getPatternLength(),
                    f = 1084,
                    h = 0;
                for (j = 0; j < 128; j++) {
                    var i = b.patternTable[j] || 0;
                    h = Math.max(h, i)
                }
                f += (h + 1) * (256 * d), c.forEach(function(a) {
                    a && (a.setSampleIndex(0), f += a.sample.length)
                });
                var j, k = new ArrayBuffer(f),
                    l = new g(k, !0);
                for (l.writeStringSection(b.title, 20), c.forEach(function(a) {
                        a ? (a.sample.length = Math.min(a.sample.length, 131070), l.writeStringSection(a.name, 22), l.writeWord(a.sample.length >> 1), l.writeUByte(a.sample.finetune), l.writeUByte(a.sample.volume), l.writeWord(a.sample.loop.start >> 1), l.writeWord(a.sample.loop.length >> 1)) : l.clear(30)
                    }), l.writeUByte(b.length), l.writeUByte(127), j = 0; j < 128; j++) {
                    var i = b.patternTable[j] || 0;
                    l.writeUByte(i)
                }
                for (l.writeString(8 == d ? "8CHN" : "M.K."), j = 0; j <= h; j++)
                    for (var m = b.patterns[j], n = 0; n < e; n++)
                        for (var o = m[n], p = 0; p < d; p++) {
                            var q = o[p],
                                r = 0,
                                s = q.instrument;
                            s > 15 && (r = 16, s = q.instrument - 16);
                            var t = (r << 24) + (q.period << 16) + (s << 12) + (q.effect << 8) + q.param;
                            l.writeUint(t)
                        }
                c.forEach(function(a) {
                    if (a && a.sample.data && a.sample.length) {
                        l.clear(2);
                        var b;
                        for (j = 0; j < a.sample.length - 2; j++) b = a.sample.data[j] || 0, l.writeByte(Math.round(127 * b))
                    }
                }), a && a(l)
            }, a
        },
        ma = function() {
            var a = {};
            return a.load = function(a, b) {
                da.setTrackerMode(L.PROTRACKER), da.useLinearFrequency = !1;
                var c = {
                        patterns: [],
                        restartPosition: 1
                    },
                    d = 64,
                    e = 15;
                c.typeId = "ST", c.channels = 4, c.title = a.readString(20, 0);
                var f = 0;
                for (m = 1; m <= e; ++m) {
                    var g = a.readString(22),
                        h = a.readWord(),
                        i = na();
                    i.name = g, i.sample.length = i.realLen = h << 1, i.sample.volume = a.readWord(), i.setFineTune(0), i.sample.loop.start = a.readWord(), i.sample.loop.length = a.readWord() << 1, i.sample.loop.enabled = i.sample.loop.length > 2, i.sample.loop.type = z.FORWARD, i.pointer = f, f += i.sample.length, i.setSampleIndex(0), da.setInstrument(m, i)
                }
                c.instruments = da.getInstruments(), a.goto(470), c.length = a.readUbyte(), c.speed = a.readUbyte();
                for (var k = [], l = 0, m = 0; m < 128; ++m) k[m] = a.readUbyte(), k[m] > l && (l = k[m]);
                for (c.patternTable = k, a.goto(600), m = 0; m <= l; ++m) {
                    for (var n = [], o = 0; o < d; o++) {
                        var p, q = [];
                        for (p = 0; p < 4; p++) {
                            var r = {},
                                t = a.readUint();
                            r.period = t >> 16 & 4095, r.effect = t >> 8 & 15,
                                r.instrument = t >> 24 & 240 | t >> 12 & 15, r.param = 255 & t, q.push(r)
                        }
                        for (p = 4; p < da.getTrackCount(); p++) q.push({
                            note: 0,
                            effect: 0,
                            instrument: 0,
                            param: 0
                        });
                        n.push(q)
                    }
                    c.patterns.push(n)
                }
                var u = [];
                for (m = 1; m <= e; m++)
                    if (i = da.getInstrument(m)) {
                        var v = i.sample.length;
                        for (j = 0; j < v; j++) {
                            var w = a.readByte();
                            j < 2 && (w = 0), i.sample.data.push(w / 127)
                        }
                        u.push({
                            label: m + " " + i.name,
                            data: m
                        })
                    } return N.trigger(s.instrumentListChange, u), c
            }, a
        };
    ! function(a) {
        "use strict";

        function b() {
            function a(a) {
                var b, c, e, f, g, h, j = d.dyn_tree,
                    k = d.stat_desc.static_tree,
                    l = d.stat_desc.extra_bits,
                    m = d.stat_desc.extra_base,
                    n = d.stat_desc.max_length,
                    p = 0;
                for (f = 0; f <= i; f++) a.bl_count[f] = 0;
                for (j[2 * a.heap[a.heap_max] + 1] = 0, b = a.heap_max + 1; b < o; b++) c = a.heap[b], f = j[2 * j[2 * c + 1] + 1] + 1, f > n && (f = n, p++), j[2 * c + 1] = f, c > d.max_code || (a.bl_count[f]++, g = 0, c >= m && (g = l[c - m]), h = j[2 * c], a.opt_len += h * (f + g), k && (a.static_len += h * (k[2 * c + 1] + g)));
                if (0 !== p) {
                    do {
                        for (f = n - 1; 0 === a.bl_count[f];) f--;
                        a.bl_count[f]--, a.bl_count[f + 1] += 2, a.bl_count[n]--, p -= 2
                    } while (p > 0);
                    for (f = n; 0 !== f; f--)
                        for (c = a.bl_count[f]; 0 !== c;) e = a.heap[--b], e > d.max_code || (j[2 * e + 1] != f && (a.opt_len += (f - j[2 * e + 1]) * j[2 * e], j[2 * e + 1] = f), c--)
                }
            }

            function b(a, b) {
                var c = 0;
                do c |= 1 & a, a >>>= 1, c <<= 1; while (--b > 0);
                return c >>> 1
            }

            function c(a, c, d) {
                var e, f, g, h = [],
                    j = 0;
                for (e = 1; e <= i; e++) h[e] = j = j + d[e - 1] << 1;
                for (f = 0; f <= c; f++) g = a[2 * f + 1], 0 !== g && (a[2 * f] = b(h[g]++, g))
            }
            var d = this;
            d.build_tree = function(b) {
                var e, f, g, h = d.dyn_tree,
                    i = d.stat_desc.static_tree,
                    j = d.stat_desc.elems,
                    k = -1;
                for (b.heap_len = 0, b.heap_max = o, e = 0; e < j; e++) 0 !== h[2 * e] ? (b.heap[++b.heap_len] = k = e, b.depth[e] = 0) : h[2 * e + 1] = 0;
                for (; b.heap_len < 2;) g = b.heap[++b.heap_len] = k < 2 ? ++k : 0, h[2 * g] = 1, b.depth[g] = 0, b.opt_len--, i && (b.static_len -= i[2 * g + 1]);
                for (d.max_code = k, e = Math.floor(b.heap_len / 2); e >= 1; e--) b.pqdownheap(h, e);
                g = j;
                do e = b.heap[1], b.heap[1] = b.heap[b.heap_len--], b.pqdownheap(h, 1), f = b.heap[1], b.heap[--b.heap_max] = e, b.heap[--b.heap_max] = f, h[2 * g] = h[2 * e] + h[2 * f], b.depth[g] = Math.max(b.depth[e], b.depth[f]) + 1, h[2 * e + 1] = h[2 * f + 1] = g, b.heap[1] = g++, b.pqdownheap(h, 1); while (b.heap_len >= 2);
                b.heap[--b.heap_max] = b.heap[1], a(b), c(h, d.max_code, b.bl_count)
            }
        }

        function c(a, b, c, d, e) {
            var f = this;
            f.static_tree = a, f.extra_bits = b, f.extra_base = c, f.elems = d, f.max_length = e
        }

        function d(a, b, c, d, e) {
            var f = this;
            f.good_length = a, f.max_lazy = b, f.nice_length = c, f.max_chain = d, f.func = e
        }

        function e(a, b, c, d) {
            var e = a[2 * b],
                f = a[2 * c];
            return e < f || e == f && d[b] <= d[c]
        }

        function f() {
            function a() {
                var a;
                for (Ea = 2 * Aa, Ga[Ia - 1] = 0, a = 0; a < Ia - 1; a++) Ga[a] = 0;
                Va = P[Wa].max_lazy, Ya = P[Wa].good_length, Za = P[Wa].nice_length, Ua = P[Wa].max_chain, Qa = 0, Ma = 0, Sa = 0, Na = Ta = ba - 1, Pa = 0, Ha = 0
            }

            function d() {
                var a;
                for (a = 0; a < n; a++) $a[2 * a] = 0;
                for (a = 0; a < j; a++) _a[2 * a] = 0;
                for (a = 0; a < k; a++) ab[2 * a] = 0;
                $a[2 * p] = 1, bb.opt_len = bb.static_len = 0, hb = jb = 0
            }

            function f() {
                cb.dyn_tree = $a, cb.stat_desc = c.static_l_desc, db.dyn_tree = _a, db.stat_desc = c.static_d_desc, eb.dyn_tree = ab, eb.stat_desc = c.static_bl_desc, lb = 0, mb = 0, kb = 8, d()
            }

            function g(a, b) {
                var c, d, e = -1,
                    f = a[1],
                    g = 0,
                    h = 7,
                    i = 4;
                for (0 === f && (h = 138, i = 3), a[2 * (b + 1) + 1] = 65535, c = 0; c <= b; c++) d = f, f = a[2 * (c + 1) + 1], ++g < h && d == f || (g < i ? ab[2 * d] += g : 0 !== d ? (d != e && ab[2 * d]++, ab[2 * r]++) : g <= 10 ? ab[2 * s]++ : ab[2 * t]++, g = 0, e = d, 0 === f ? (h = 138, i = 3) : d == f ? (h = 6, i = 3) : (h = 7, i = 4))
            }

            function h() {
                var a;
                for (g($a, cb.max_code), g(_a, db.max_code), eb.build_tree(bb), a = k - 1; a >= 3 && 0 === ab[2 * b.bl_order[a] + 1]; a--);
                return bb.opt_len += 3 * (a + 1) + 5 + 5 + 4, a
            }

            function i(a) {
                bb.pending_buf[bb.pending++] = a
            }

            function l(a) {
                i(255 & a), i(a >>> 8 & 255)
            }

            function o(a) {
                i(a >> 8 & 255), i(255 & a & 255)
            }

            function q(a, b) {
                var c, d = b;
                mb > u - d ? (c = a, lb |= c << mb & 65535, l(lb), lb = c >>> u - mb, mb += d - u) : (lb |= a << mb & 65535, mb += d)
            }

            function J(a, b) {
                var c = 2 * a;
                q(65535 & b[c], 65535 & b[c + 1])
            }

            function ea(a, b) {
                var c, d, e = -1,
                    f = a[1],
                    g = 0,
                    h = 7,
                    i = 4;
                for (0 === f && (h = 138, i = 3), c = 0; c <= b; c++)
                    if (d = f, f = a[2 * (c + 1) + 1], !(++g < h && d == f)) {
                        if (g < i) {
                            do J(d, ab); while (0 !== --g)
                        } else 0 !== d ? (d != e && (J(d, ab), g--), J(r, ab), q(g - 3, 2)) : g <= 10 ? (J(s, ab), q(g - 3, 3)) : (J(t, ab), q(g - 11, 7));
                        g = 0, e = d, 0 === f ? (h = 138, i = 3) : d == f ? (h = 6, i = 3) : (h = 7, i = 4)
                    }
            }

            function fa(a, c, d) {
                var e;
                for (q(a - 257, 5), q(c - 1, 5), q(d - 4, 4), e = 0; e < d; e++) q(ab[2 * b.bl_order[e] + 1], 3);
                ea($a, a - 1), ea(_a, c - 1)
            }

            function ga() {
                16 == mb ? (l(lb), lb = 0, mb = 0) : mb >= 8 && (i(255 & lb), lb >>>= 8, mb -= 8)
            }

            function ha() {
                q(_ << 1, 3), J(p, c.static_ltree), ga(), 1 + kb + 10 - mb < 9 && (q(_ << 1, 3), J(p, c.static_ltree), ga()), kb = 7
            }

            function ia(a, c) {
                var d, e, f;
                if (bb.pending_buf[ib + 2 * hb] = a >>> 8 & 255, bb.pending_buf[ib + 2 * hb + 1] = 255 & a, bb.pending_buf[fb + hb] = 255 & c, hb++, 0 === a ? $a[2 * c]++ : (jb++, a--, $a[2 * (b._length_code[c] + m + 1)]++, _a[2 * b.d_code(a)]++), 0 === (8191 & hb) && Wa > 2) {
                    for (d = 8 * hb, e = Qa - Ma, f = 0; f < j; f++) d += _a[2 * f] * (5 + b.extra_dbits[f]);
                    if (d >>>= 3, jb < Math.floor(hb / 2) && d < Math.floor(e / 2)) return !0
                }
                return hb == gb - 1
            }

            function ja(a, c) {
                var d, e, f, g, h = 0;
                if (0 !== hb)
                    do d = bb.pending_buf[ib + 2 * h] << 8 & 65280 | 255 & bb.pending_buf[ib + 2 * h + 1], e = 255 & bb.pending_buf[fb + h], h++, 0 === d ? J(e, a) : (f = b._length_code[e], J(f + m + 1, a), g = b.extra_lbits[f], 0 !== g && (e -= b.base_length[f], q(e, g)), d--, f = b.d_code(d), J(f, c), g = b.extra_dbits[f], 0 !== g && (d -= b.base_dist[f], q(d, g))); while (h < hb);
                J(p, a), kb = a[2 * p + 1]
            }

            function ka() {
                mb > 8 ? l(lb) : mb > 0 && i(255 & lb), lb = 0, mb = 0
            }

            function la(a, b, c) {
                ka(), kb = 8, c && (l(b), l(~b)), bb.pending_buf.set(Da.subarray(a, a + b), bb.pending), bb.pending += b
            }

            function ma(a, b, c) {
                q(($ << 1) + (c ? 1 : 0), 3), la(a, b, !0)
            }

            function na(a, b, e) {
                var f, g, i = 0;
                Wa > 0 ? (cb.build_tree(bb), db.build_tree(bb), i = h(), f = bb.opt_len + 3 + 7 >>> 3, g = bb.static_len + 3 + 7 >>> 3, g <= f && (f = g)) : f = g = b + 5, b + 4 <= f && a != -1 ? ma(a, b, e) : g == f ? (q((_ << 1) + (e ? 1 : 0), 3), ja(c.static_ltree, c.static_dtree)) : (q((aa << 1) + (e ? 1 : 0), 3), fa(cb.max_code + 1, db.max_code + 1, i + 1), ja($a, _a)), d(), e && ka()
            }

            function oa(a) {
                na(Ma >= 0 ? Ma : -1, Qa - Ma, a), Ma = Qa, va.flush_pending()
            }

            function pa() {
                var a, b, c, d;
                do {
                    if (d = Ea - Sa - Qa, 0 === d && 0 === Qa && 0 === Sa) d = Aa;
                    else if (d == -1) d--;
                    else if (Qa >= Aa + Aa - da) {
                        Da.set(Da.subarray(Aa, Aa + Aa), 0), Ra -= Aa, Qa -= Aa, Ma -= Aa, a = Ia, c = a;
                        do b = 65535 & Ga[--c], Ga[c] = b >= Aa ? b - Aa : 0; while (0 !== --a);
                        a = Aa, c = a;
                        do b = 65535 & Fa[--c], Fa[c] = b >= Aa ? b - Aa : 0; while (0 !== --a);
                        d += Aa
                    }
                    if (0 === va.avail_in) return;
                    a = va.read_buf(Da, Qa + Sa, d), Sa += a, Sa >= ba && (Ha = 255 & Da[Qa], Ha = (Ha << La ^ 255 & Da[Qa + 1]) & Ka)
                } while (Sa < da && 0 !== va.avail_in)
            }

            function qa(a) {
                var b, c = 65535;
                for (c > xa - 5 && (c = xa - 5);;) {
                    if (Sa <= 1) {
                        if (pa(), 0 === Sa && a == z) return R;
                        if (0 === Sa) break
                    }
                    if (Qa += Sa, Sa = 0, b = Ma + c, (0 === Qa || Qa >= b) && (Sa = Qa - b, Qa = b, oa(!1), 0 === va.avail_out)) return R;
                    if (Qa - Ma >= Aa - da && (oa(!1), 0 === va.avail_out)) return R
                }
                return oa(a == C), 0 === va.avail_out ? a == C ? T : R : a == C ? U : S
            }

            function ra(a) {
                var b, c, d = Ua,
                    e = Qa,
                    f = Ta,
                    g = Qa > Aa - da ? Qa - (Aa - da) : 0,
                    h = Za,
                    i = Ca,
                    j = Qa + ca,
                    k = Da[e + f - 1],
                    l = Da[e + f];
                Ta >= Ya && (d >>= 2), h > Sa && (h = Sa);
                do
                    if (b = a, Da[b + f] == l && Da[b + f - 1] == k && Da[b] == Da[e] && Da[++b] == Da[e + 1]) {
                        e += 2, b++;
                        do; while (Da[++e] == Da[++b] && Da[++e] == Da[++b] && Da[++e] == Da[++b] && Da[++e] == Da[++b] && Da[++e] == Da[++b] && Da[++e] == Da[++b] && Da[++e] == Da[++b] && Da[++e] == Da[++b] && e < j);
                        if (c = ca - (j - e), e = j - ca, c > f) {
                            if (Ra = a, f = c, c >= h) break;
                            k = Da[e + f - 1], l = Da[e + f]
                        }
                    } while ((a = 65535 & Fa[a & i]) > g && 0 !== --d);
                return f <= Sa ? f : Sa
            }

            function sa(a) {
                for (var b, c = 0;;) {
                    if (Sa < da) {
                        if (pa(), Sa < da && a == z) return R;
                        if (0 === Sa) break
                    }
                    if (Sa >= ba && (Ha = (Ha << La ^ 255 & Da[Qa + (ba - 1)]) & Ka, c = 65535 & Ga[Ha], Fa[Qa & Ca] = Ga[Ha], Ga[Ha] = Qa), 0 !== c && (Qa - c & 65535) <= Aa - da && Xa != x && (Na = ra(c)), Na >= ba)
                        if (b = ia(Qa - Ra, Na - ba), Sa -= Na, Na <= Va && Sa >= ba) {
                            Na--;
                            do Qa++, Ha = (Ha << La ^ 255 & Da[Qa + (ba - 1)]) & Ka, c = 65535 & Ga[Ha], Fa[Qa & Ca] = Ga[Ha], Ga[Ha] = Qa; while (0 !== --Na);
                            Qa++
                        } else Qa += Na, Na = 0, Ha = 255 & Da[Qa], Ha = (Ha << La ^ 255 & Da[Qa + 1]) & Ka;
                    else b = ia(0, 255 & Da[Qa]), Sa--, Qa++;
                    if (b && (oa(!1), 0 === va.avail_out)) return R
                }
                return oa(a == C), 0 === va.avail_out ? a == C ? T : R : a == C ? U : S
            }

            function ta(a) {
                for (var b, c, d = 0;;) {
                    if (Sa < da) {
                        if (pa(), Sa < da && a == z) return R;
                        if (0 === Sa) break
                    }
                    if (Sa >= ba && (Ha = (Ha << La ^ 255 & Da[Qa + (ba - 1)]) & Ka, d = 65535 & Ga[Ha], Fa[Qa & Ca] = Ga[Ha], Ga[Ha] = Qa), Ta = Na, Oa = Ra, Na = ba - 1, 0 !== d && Ta < Va && (Qa - d & 65535) <= Aa - da && (Xa != x && (Na = ra(d)), Na <= 5 && (Xa == w || Na == ba && Qa - Ra > 4096) && (Na = ba - 1)), Ta >= ba && Na <= Ta) {
                        c = Qa + Sa - ba, b = ia(Qa - 1 - Oa, Ta - ba), Sa -= Ta - 1, Ta -= 2;
                        do ++Qa <= c && (Ha = (Ha << La ^ 255 & Da[Qa + (ba - 1)]) & Ka, d = 65535 & Ga[Ha], Fa[Qa & Ca] = Ga[Ha], Ga[Ha] = Qa); while (0 !== --Ta);
                        if (Pa = 0, Na = ba - 1, Qa++, b && (oa(!1), 0 === va.avail_out)) return R
                    } else if (0 !== Pa) {
                        if (b = ia(0, 255 & Da[Qa - 1]), b && oa(!1), Qa++, Sa--, 0 === va.avail_out) return R
                    } else Pa = 1, Qa++, Sa--
                }
                return 0 !== Pa && (b = ia(0, 255 & Da[Qa - 1]), Pa = 0), oa(a == C), 0 === va.avail_out ? a == C ? T : R : a == C ? U : S
            }

            function ua(b) {
                return b.total_in = b.total_out = 0, b.msg = null, bb.pending = 0, bb.pending_out = 0, wa = X, za = z, f(), a(), D
            }
            var va, wa, xa, ya, za, Aa, Ba, Ca, Da, Ea, Fa, Ga, Ha, Ia, Ja, Ka, La, Ma, Na, Oa, Pa, Qa, Ra, Sa, Ta, Ua, Va, Wa, Xa, Ya, Za, $a, _a, ab, bb = this,
                cb = new b,
                db = new b,
                eb = new b;
            bb.depth = [];
            var fb, gb, hb, ib, jb, kb, lb, mb;
            bb.bl_count = [], bb.heap = [], $a = [], _a = [], ab = [], bb.pqdownheap = function(a, b) {
                for (var c = bb.heap, d = c[b], f = b << 1; f <= bb.heap_len && (f < bb.heap_len && e(a, c[f + 1], c[f], bb.depth) && f++, !e(a, d, c[f], bb.depth));) c[b] = c[f], b = f, f <<= 1;
                c[b] = d
            }, bb.deflateInit = function(a, b, c, d, e, f) {
                return d || (d = Z), e || (e = L), f || (f = y), a.msg = null, b == v && (b = 6), e < 1 || e > K || d != Z || c < 9 || c > 15 || b < 0 || b > 9 || f < 0 || f > x ? G : (a.dstate = bb, Ba = c, Aa = 1 << Ba, Ca = Aa - 1, Ja = e + 7, Ia = 1 << Ja, Ka = Ia - 1, La = Math.floor((Ja + ba - 1) / ba), Da = new Uint8Array(2 * Aa), Fa = [], Ga = [], gb = 1 << e + 6, bb.pending_buf = new Uint8Array(4 * gb), xa = 4 * gb, ib = Math.floor(gb / 2), fb = 3 * gb, Wa = b, Xa = f, ya = 255 & d, ua(a))
            }, bb.deflateEnd = function() {
                return wa != W && wa != X && wa != Y ? G : (bb.pending_buf = null, Ga = null, Fa = null, Da = null, bb.dstate = null, wa == X ? H : D)
            }, bb.deflateParams = function(a, b, c) {
                var d = D;
                return b == v && (b = 6), b < 0 || b > 9 || c < 0 || c > x ? G : (P[Wa].func != P[b].func && 0 !== a.total_in && (d = a.deflate(A)), Wa != b && (Wa = b, Va = P[Wa].max_lazy, Ya = P[Wa].good_length, Za = P[Wa].nice_length, Ua = P[Wa].max_chain), Xa = c, d)
            }, bb.deflateSetDictionary = function(a, b, c) {
                var d, e = c,
                    f = 0;
                if (!b || wa != W) return G;
                if (e < ba) return D;
                for (e > Aa - da && (e = Aa - da, f = c - e), Da.set(b.subarray(f, f + e), 0), Qa = e, Ma = e, Ha = 255 & Da[0], Ha = (Ha << La ^ 255 & Da[1]) & Ka, d = 0; d <= e - ba; d++) Ha = (Ha << La ^ 255 & Da[d + (ba - 1)]) & Ka, Fa[d & Ca] = Ga[Ha], Ga[Ha] = d;
                return D
            }, bb.deflate = function(a, b) {
                var c, d, e, f, g;
                if (b > C || b < 0) return G;
                if (!a.next_out || !a.next_in && 0 !== a.avail_in || wa == Y && b != C) return a.msg = Q[F - G], G;
                if (0 === a.avail_out) return a.msg = Q[F - I], I;
                if (va = a, f = za, za = b, wa == W && (d = Z + (Ba - 8 << 4) << 8, e = (Wa - 1 & 255) >> 1, e > 3 && (e = 3), d |= e << 6, 0 !== Qa && (d |= V), d += 31 - d % 31, wa = X, o(d)), 0 !== bb.pending) {
                    if (va.flush_pending(), 0 === va.avail_out) return za = -1, D
                } else if (0 === va.avail_in && b <= f && b != C) return va.msg = Q[F - I], I;
                if (wa == Y && 0 !== va.avail_in) return a.msg = Q[F - I], I;
                if (0 !== va.avail_in || 0 !== Sa || b != z && wa != Y) {
                    switch (g = -1, P[Wa].func) {
                        case M:
                            g = qa(b);
                            break;
                        case N:
                            g = sa(b);
                            break;
                        case O:
                            g = ta(b)
                    }
                    if (g != T && g != U || (wa = Y), g == R || g == T) return 0 === va.avail_out && (za = -1), D;
                    if (g == S) {
                        if (b == A) ha();
                        else if (ma(0, 0, !1), b == B)
                            for (c = 0; c < Ia; c++) Ga[c] = 0;
                        if (va.flush_pending(), 0 === va.avail_out) return za = -1, D
                    }
                }
                return b != C ? D : E
            }
        }

        function g() {
            var a = this;
            a.next_in_index = 0, a.next_out_index = 0, a.avail_in = 0, a.total_in = 0, a.avail_out = 0, a.total_out = 0
        }

        function h(a) {
            var b = this,
                c = new g,
                d = 512,
                e = z,
                f = new Uint8Array(d),
                h = a ? a.level : v;
            "undefined" == typeof h && (h = v), c.deflateInit(h), c.next_out = f, b.append = function(a, b) {
                var g, h, i = [],
                    j = 0,
                    k = 0,
                    l = 0;
                if (a.length) {
                    c.next_in_index = 0, c.next_in = a, c.avail_in = a.length;
                    do {
                        if (c.next_out_index = 0, c.avail_out = d, g = c.deflate(e), g != D) throw new Error("deflating: " + c.msg);
                        c.next_out_index && i.push(c.next_out_index == d ? new Uint8Array(f) : new Uint8Array(f.subarray(0, c.next_out_index))), l += c.next_out_index, b && c.next_in_index > 0 && c.next_in_index != j && (b(c.next_in_index), j = c.next_in_index)
                    } while (c.avail_in > 0 || 0 === c.avail_out);
                    return h = new Uint8Array(l), i.forEach(function(a) {
                        h.set(a, k), k += a.length
                    }), h
                }
            }, b.flush = function() {
                var a, b, e = [],
                    g = 0,
                    h = 0;
                do {
                    if (c.next_out_index = 0, c.avail_out = d, a = c.deflate(C), a != E && a != D) throw new Error("deflating: " + c.msg);
                    d - c.avail_out > 0 && e.push(new Uint8Array(f.subarray(0, c.next_out_index))), h += c.next_out_index
                } while (c.avail_in > 0 || 0 === c.avail_out);
                return c.deflateEnd(), b = new Uint8Array(h), e.forEach(function(a) {
                    b.set(a, g), g += a.length
                }), b
            }
        }
        var i = 15,
            j = 30,
            k = 19,
            l = 29,
            m = 256,
            n = m + 1 + l,
            o = 2 * n + 1,
            p = 256,
            q = 7,
            r = 16,
            s = 17,
            t = 18,
            u = 16,
            v = -1,
            w = 1,
            x = 2,
            y = 0,
            z = 0,
            A = 1,
            B = 3,
            C = 4,
            D = 0,
            E = 1,
            F = 2,
            G = -2,
            H = -3,
            I = -5,
            J = [0, 1, 2, 3, 4, 4, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 0, 0, 16, 17, 18, 18, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29];
        b._length_code = [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28], b.base_length = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 0], b.base_dist = [0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096, 6144, 8192, 12288, 16384, 24576], b.d_code = function(a) {
            return a < 256 ? J[a] : J[256 + (a >>> 7)]
        }, b.extra_lbits = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], b.extra_dbits = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], b.extra_blbits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], b.bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], c.static_ltree = [12, 8, 140, 8, 76, 8, 204, 8, 44, 8, 172, 8, 108, 8, 236, 8, 28, 8, 156, 8, 92, 8, 220, 8, 60, 8, 188, 8, 124, 8, 252, 8, 2, 8, 130, 8, 66, 8, 194, 8, 34, 8, 162, 8, 98, 8, 226, 8, 18, 8, 146, 8, 82, 8, 210, 8, 50, 8, 178, 8, 114, 8, 242, 8, 10, 8, 138, 8, 74, 8, 202, 8, 42, 8, 170, 8, 106, 8, 234, 8, 26, 8, 154, 8, 90, 8, 218, 8, 58, 8, 186, 8, 122, 8, 250, 8, 6, 8, 134, 8, 70, 8, 198, 8, 38, 8, 166, 8, 102, 8, 230, 8, 22, 8, 150, 8, 86, 8, 214, 8, 54, 8, 182, 8, 118, 8, 246, 8, 14, 8, 142, 8, 78, 8, 206, 8, 46, 8, 174, 8, 110, 8, 238, 8, 30, 8, 158, 8, 94, 8, 222, 8, 62, 8, 190, 8, 126, 8, 254, 8, 1, 8, 129, 8, 65, 8, 193, 8, 33, 8, 161, 8, 97, 8, 225, 8, 17, 8, 145, 8, 81, 8, 209, 8, 49, 8, 177, 8, 113, 8, 241, 8, 9, 8, 137, 8, 73, 8, 201, 8, 41, 8, 169, 8, 105, 8, 233, 8, 25, 8, 153, 8, 89, 8, 217, 8, 57, 8, 185, 8, 121, 8, 249, 8, 5, 8, 133, 8, 69, 8, 197, 8, 37, 8, 165, 8, 101, 8, 229, 8, 21, 8, 149, 8, 85, 8, 213, 8, 53, 8, 181, 8, 117, 8, 245, 8, 13, 8, 141, 8, 77, 8, 205, 8, 45, 8, 173, 8, 109, 8, 237, 8, 29, 8, 157, 8, 93, 8, 221, 8, 61, 8, 189, 8, 125, 8, 253, 8, 19, 9, 275, 9, 147, 9, 403, 9, 83, 9, 339, 9, 211, 9, 467, 9, 51, 9, 307, 9, 179, 9, 435, 9, 115, 9, 371, 9, 243, 9, 499, 9, 11, 9, 267, 9, 139, 9, 395, 9, 75, 9, 331, 9, 203, 9, 459, 9, 43, 9, 299, 9, 171, 9, 427, 9, 107, 9, 363, 9, 235, 9, 491, 9, 27, 9, 283, 9, 155, 9, 411, 9, 91, 9, 347, 9, 219, 9, 475, 9, 59, 9, 315, 9, 187, 9, 443, 9, 123, 9, 379, 9, 251, 9, 507, 9, 7, 9, 263, 9, 135, 9, 391, 9, 71, 9, 327, 9, 199, 9, 455, 9, 39, 9, 295, 9, 167, 9, 423, 9, 103, 9, 359, 9, 231, 9, 487, 9, 23, 9, 279, 9, 151, 9, 407, 9, 87, 9, 343, 9, 215, 9, 471, 9, 55, 9, 311, 9, 183, 9, 439, 9, 119, 9, 375, 9, 247, 9, 503, 9, 15, 9, 271, 9, 143, 9, 399, 9, 79, 9, 335, 9, 207, 9, 463, 9, 47, 9, 303, 9, 175, 9, 431, 9, 111, 9, 367, 9, 239, 9, 495, 9, 31, 9, 287, 9, 159, 9, 415, 9, 95, 9, 351, 9, 223, 9, 479, 9, 63, 9, 319, 9, 191, 9, 447, 9, 127, 9, 383, 9, 255, 9, 511, 9, 0, 7, 64, 7, 32, 7, 96, 7, 16, 7, 80, 7, 48, 7, 112, 7, 8, 7, 72, 7, 40, 7, 104, 7, 24, 7, 88, 7, 56, 7, 120, 7, 4, 7, 68, 7, 36, 7, 100, 7, 20, 7, 84, 7, 52, 7, 116, 7, 3, 8, 131, 8, 67, 8, 195, 8, 35, 8, 163, 8, 99, 8, 227, 8], c.static_dtree = [0, 5, 16, 5, 8, 5, 24, 5, 4, 5, 20, 5, 12, 5, 28, 5, 2, 5, 18, 5, 10, 5, 26, 5, 6, 5, 22, 5, 14, 5, 30, 5, 1, 5, 17, 5, 9, 5, 25, 5, 5, 5, 21, 5, 13, 5, 29, 5, 3, 5, 19, 5, 11, 5, 27, 5, 7, 5, 23, 5], c.static_l_desc = new c(c.static_ltree, b.extra_lbits, m + 1, n, i), c.static_d_desc = new c(c.static_dtree, b.extra_dbits, 0, j, i), c.static_bl_desc = new c(null, b.extra_blbits, 0, k, q);
        var K = 9,
            L = 8,
            M = 0,
            N = 1,
            O = 2,
            P = [new d(0, 0, 0, 0, M), new d(4, 4, 8, 4, N), new d(4, 5, 16, 8, N), new d(4, 6, 32, 32, N), new d(4, 4, 16, 16, O), new d(8, 16, 32, 32, O), new d(8, 16, 128, 128, O), new d(8, 32, 128, 256, O), new d(32, 128, 258, 1024, O), new d(32, 258, 258, 4096, O)],
            Q = ["need dictionary", "stream end", "", "", "stream error", "data error", "", "buffer error", "", ""],
            R = 0,
            S = 1,
            T = 2,
            U = 3,
            V = 32,
            W = 42,
            X = 113,
            Y = 666,
            Z = 8,
            $ = 0,
            _ = 1,
            aa = 2,
            ba = 3,
            ca = 258,
            da = ca + ba + 1;
        g.prototype = {
            deflateInit: function(a, b) {
                var c = this;
                return c.dstate = new f, b || (b = i), c.dstate.deflateInit(c, a, b)
            },
            deflate: function(a) {
                var b = this;
                return b.dstate ? b.dstate.deflate(b, a) : G
            },
            deflateEnd: function() {
                var a = this;
                if (!a.dstate) return G;
                var b = a.dstate.deflateEnd();
                return a.dstate = null, b
            },
            deflateParams: function(a, b) {
                var c = this;
                return c.dstate ? c.dstate.deflateParams(c, a, b) : G
            },
            deflateSetDictionary: function(a, b) {
                var c = this;
                return c.dstate ? c.dstate.deflateSetDictionary(c, a, b) : G
            },
            read_buf: function(a, b, c) {
                var d = this,
                    e = d.avail_in;
                return e > c && (e = c), 0 === e ? 0 : (d.avail_in -= e, a.set(d.next_in.subarray(d.next_in_index, d.next_in_index + e), b), d.next_in_index += e, d.total_in += e, e)
            },
            flush_pending: function() {
                var a = this,
                    b = a.dstate.pending;
                b > a.avail_out && (b = a.avail_out), 0 !== b && (a.next_out.set(a.dstate.pending_buf.subarray(a.dstate.pending_out, a.dstate.pending_out + b), a.next_out_index), a.next_out_index += b, a.dstate.pending_out += b, a.total_out += b, a.avail_out -= b, a.dstate.pending -= b, 0 === a.dstate.pending && (a.dstate.pending_out = 0))
            }
        };
        var ea = a.zip || a;
        ea.Deflater = ea._jzlib_Deflater = h
    }(this),
    function(a) {
        "use strict";

        function b() {
            function a(a, b, c, d, j, k, l, n, p, r, s) {
                var t, u, v, w, x, y, z, A, C, D, E, F, G, H, I;
                D = 0, x = c;
                do e[a[b + D]]++, D++, x--; while (0 !== x);
                if (e[0] == c) return l[0] = -1, n[0] = 0, i;
                for (A = n[0], y = 1; y <= B && 0 === e[y]; y++);
                for (z = y, A < y && (A = y), x = B; 0 !== x && 0 === e[x]; x--);
                for (v = x, A > x && (A = x), n[0] = A, H = 1 << y; y < x; y++, H <<= 1)
                    if ((H -= e[y]) < 0) return m;
                if ((H -= e[x]) < 0) return m;
                for (e[x] += H, h[1] = y = 0, D = 1, G = 2; 0 !== --x;) h[G] = y += e[D], G++, D++;
                x = 0, D = 0;
                do 0 !== (y = a[b + D]) && (s[h[y]++] = x), D++; while (++x < c);
                for (c = h[v], h[0] = x = 0, D = 0, w = -1, F = -A, g[0] = 0, E = 0, I = 0; z <= v; z++)
                    for (t = e[z]; 0 !== t--;) {
                        for (; z > F + A;) {
                            if (w++, F += A, I = v - F, I = I > A ? A : I, (u = 1 << (y = z - F)) > t + 1 && (u -= t + 1, G = z, y < I))
                                for (; ++y < I && !((u <<= 1) <= e[++G]);) u -= e[G];
                            if (I = 1 << y, r[0] + I > q) return m;
                            g[w] = E = r[0], r[0] += I, 0 !== w ? (h[w] = x, f[0] = y, f[1] = A, y = x >>> F - A, f[2] = E - g[w - 1] - y, p.set(f, 3 * (g[w - 1] + y))) : l[0] = E
                        }
                        for (f[1] = z - F, D >= c ? f[0] = 192 : s[D] < d ? (f[0] = s[D] < 256 ? 0 : 96, f[2] = s[D++]) : (f[0] = k[s[D] - d] + 16 + 64, f[2] = j[s[D++] - d]), u = 1 << z - F, y = x >>> F; y < I; y += u) p.set(f, 3 * (E + y));
                        for (y = 1 << z - 1; 0 !== (x & y); y >>>= 1) x ^= y;
                        for (x ^= y, C = (1 << F) - 1;
                            (x & C) != h[w];) w--, F -= A, C = (1 << F) - 1
                    }
                return 0 !== H && 1 != v ? o : i
            }

            function b(a) {
                var b;
                for (c || (c = [], d = [], e = new Int32Array(B + 1), f = [], g = new Int32Array(B), h = new Int32Array(B + 1)), d.length < a && (d = []), b = 0; b < a; b++) d[b] = 0;
                for (b = 0; b < B + 1; b++) e[b] = 0;
                for (b = 0; b < 3; b++) f[b] = 0;
                g.set(e.subarray(0, B), 0), h.set(e.subarray(0, B + 1), 0)
            }
            var c, d, e, f, g, h, j = this;
            j.inflate_trees_bits = function(e, f, g, h, i) {
                var j;
                return b(19), c[0] = 0, j = a(e, 0, 19, 19, null, null, g, f, h, c, d), j == m ? i.msg = "oversubscribed dynamic bit lengths tree" : j != o && 0 !== f[0] || (i.msg = "incomplete dynamic bit lengths tree", j = m), j
            }, j.inflate_trees_dynamic = function(e, f, g, h, j, k, l, p, q) {
                var r;
                return b(288), c[0] = 0, r = a(g, 0, e, 257, x, y, k, h, p, c, d), r != i || 0 === h[0] ? (r == m ? q.msg = "oversubscribed literal/length tree" : r != n && (q.msg = "incomplete literal/length tree", r = m), r) : (b(288), r = a(g, e, f, 0, z, A, l, j, p, c, d), r != i || 0 === j[0] && e > 257 ? (r == m ? q.msg = "oversubscribed distance tree" : r == o ? (q.msg = "incomplete distance tree", r = m) : r != n && (q.msg = "empty distance tree with lengths", r = m), r) : i)
            }
        }

        function c() {
            function a(a, b, c, d, e, f, g, h) {
                var k, l, n, o, q, r, s, t, u, v, w, x, y, z, A, B;
                s = h.next_in_index, t = h.avail_in, q = g.bitb, r = g.bitk, u = g.write, v = u < g.read ? g.read - u - 1 : g.end - u, w = p[a], x = p[b];
                do {
                    for (; r < 20;) t--, q |= (255 & h.read_byte(s++)) << r, r += 8;
                    if (k = q & w, l = c, n = d, B = 3 * (n + k), 0 !== (o = l[B]))
                        for (;;) {
                            if (q >>= l[B + 1], r -= l[B + 1], 0 !== (16 & o)) {
                                for (o &= 15, y = l[B + 2] + (q & p[o]), q >>= o, r -= o; r < 15;) t--, q |= (255 & h.read_byte(s++)) << r, r += 8;
                                for (k = q & x, l = e, n = f, B = 3 * (n + k), o = l[B];;) {
                                    if (q >>= l[B + 1], r -= l[B + 1], 0 !== (16 & o)) {
                                        for (o &= 15; r < o;) t--, q |= (255 & h.read_byte(s++)) << r, r += 8;
                                        if (z = l[B + 2] + (q & p[o]), q >>= o, r -= o, v -= y, u >= z) A = u - z, u - A > 0 && 2 > u - A ? (g.window[u++] = g.window[A++], g.window[u++] = g.window[A++], y -= 2) : (g.window.set(g.window.subarray(A, A + 2), u), u += 2, A += 2, y -= 2);
                                        else {
                                            A = u - z;
                                            do A += g.end; while (A < 0);
                                            if (o = g.end - A, y > o) {
                                                if (y -= o, u - A > 0 && o > u - A) {
                                                    do g.window[u++] = g.window[A++]; while (0 !== --o)
                                                } else g.window.set(g.window.subarray(A, A + o), u), u += o, A += o, o = 0;
                                                A = 0
                                            }
                                        }
                                        if (u - A > 0 && y > u - A) {
                                            do g.window[u++] = g.window[A++]; while (0 !== --y)
                                        } else g.window.set(g.window.subarray(A, A + y), u), u += y, A += y, y = 0;
                                        break
                                    }
                                    if (0 !== (64 & o)) return h.msg = "invalid distance code", y = h.avail_in - t, y = r >> 3 < y ? r >> 3 : y, t += y, s -= y, r -= y << 3, g.bitb = q, g.bitk = r, h.avail_in = t, h.total_in += s - h.next_in_index, h.next_in_index = s, g.write = u, m;
                                    k += l[B + 2], k += q & p[o], B = 3 * (n + k), o = l[B]
                                }
                                break
                            }
                            if (0 !== (64 & o)) return 0 !== (32 & o) ? (y = h.avail_in - t, y = r >> 3 < y ? r >> 3 : y, t += y, s -= y, r -= y << 3, g.bitb = q, g.bitk = r, h.avail_in = t, h.total_in += s - h.next_in_index, h.next_in_index = s, g.write = u, j) : (h.msg = "invalid literal/length code", y = h.avail_in - t, y = r >> 3 < y ? r >> 3 : y, t += y, s -= y, r -= y << 3, g.bitb = q, g.bitk = r, h.avail_in = t, h.total_in += s - h.next_in_index, h.next_in_index = s, g.write = u, m);
                            if (k += l[B + 2], k += q & p[o], B = 3 * (n + k), 0 === (o = l[B])) {
                                q >>= l[B + 1], r -= l[B + 1], g.window[u++] = l[B + 2], v--;
                                break
                            }
                        } else q >>= l[B + 1], r -= l[B + 1], g.window[u++] = l[B + 2], v--
                } while (v >= 258 && t >= 10);
                return y = h.avail_in - t, y = r >> 3 < y ? r >> 3 : y, t += y, s -= y, r -= y << 3, g.bitb = q, g.bitk = r, h.avail_in = t, h.total_in += s - h.next_in_index, h.next_in_index = s, g.write = u, i
            }
            var b, c, d, e, f = this,
                g = 0,
                h = 0,
                k = 0,
                n = 0,
                o = 0,
                q = 0,
                r = 0,
                s = 0,
                t = 0,
                u = 0;
            f.init = function(a, f, g, h, i, j) {
                b = C, r = a, s = f, d = g, t = h, e = i, u = j, c = null
            }, f.proc = function(f, v, w) {
                var x, y, z, A, B, M, N, O = 0,
                    P = 0,
                    Q = 0;
                for (Q = v.next_in_index, A = v.avail_in, O = f.bitb, P = f.bitk, B = f.write, M = B < f.read ? f.read - B - 1 : f.end - B;;) switch (b) {
                    case C:
                        if (M >= 258 && A >= 10 && (f.bitb = O, f.bitk = P, v.avail_in = A, v.total_in += Q - v.next_in_index, v.next_in_index = Q, f.write = B, w = a(r, s, d, t, e, u, f, v), Q = v.next_in_index, A = v.avail_in, O = f.bitb, P = f.bitk, B = f.write, M = B < f.read ? f.read - B - 1 : f.end - B, w != i)) {
                            b = w == j ? J : L;
                            break
                        }
                        k = r, c = d, h = t, b = D;
                    case D:
                        for (x = k; P < x;) {
                            if (0 === A) return f.bitb = O, f.bitk = P, v.avail_in = A, v.total_in += Q - v.next_in_index, v.next_in_index = Q, f.write = B, f.inflate_flush(v, w);
                            w = i, A--, O |= (255 & v.read_byte(Q++)) << P, P += 8
                        }
                        if (y = 3 * (h + (O & p[x])), O >>>= c[y + 1], P -= c[y + 1], z = c[y], 0 === z) {
                            n = c[y + 2], b = I;
                            break
                        }
                        if (0 !== (16 & z)) {
                            o = 15 & z, g = c[y + 2], b = E;
                            break
                        }
                        if (0 === (64 & z)) {
                            k = z, h = y / 3 + c[y + 2];
                            break
                        }
                        if (0 !== (32 & z)) {
                            b = J;
                            break
                        }
                        return b = L, v.msg = "invalid literal/length code", w = m, f.bitb = O, f.bitk = P, v.avail_in = A, v.total_in += Q - v.next_in_index, v.next_in_index = Q, f.write = B, f.inflate_flush(v, w);
                    case E:
                        for (x = o; P < x;) {
                            if (0 === A) return f.bitb = O, f.bitk = P, v.avail_in = A, v.total_in += Q - v.next_in_index, v.next_in_index = Q, f.write = B, f.inflate_flush(v, w);
                            w = i, A--, O |= (255 & v.read_byte(Q++)) << P, P += 8
                        }
                        g += O & p[x], O >>= x, P -= x, k = s, c = e, h = u, b = F;
                    case F:
                        for (x = k; P < x;) {
                            if (0 === A) return f.bitb = O, f.bitk = P, v.avail_in = A, v.total_in += Q - v.next_in_index, v.next_in_index = Q, f.write = B, f.inflate_flush(v, w);
                            w = i, A--, O |= (255 & v.read_byte(Q++)) << P, P += 8
                        }
                        if (y = 3 * (h + (O & p[x])), O >>= c[y + 1], P -= c[y + 1], z = c[y], 0 !== (16 & z)) {
                            o = 15 & z, q = c[y + 2], b = G;
                            break
                        }
                        if (0 === (64 & z)) {
                            k = z, h = y / 3 + c[y + 2];
                            break
                        }
                        return b = L, v.msg = "invalid distance code", w = m, f.bitb = O, f.bitk = P, v.avail_in = A, v.total_in += Q - v.next_in_index, v.next_in_index = Q, f.write = B, f.inflate_flush(v, w);
                    case G:
                        for (x = o; P < x;) {
                            if (0 === A) return f.bitb = O, f.bitk = P, v.avail_in = A, v.total_in += Q - v.next_in_index, v.next_in_index = Q, f.write = B, f.inflate_flush(v, w);
                            w = i, A--, O |= (255 & v.read_byte(Q++)) << P, P += 8
                        }
                        q += O & p[x], O >>= x, P -= x, b = H;
                    case H:
                        for (N = B - q; N < 0;) N += f.end;
                        for (; 0 !== g;) {
                            if (0 === M && (B == f.end && 0 !== f.read && (B = 0, M = B < f.read ? f.read - B - 1 : f.end - B), 0 === M && (f.write = B, w = f.inflate_flush(v, w), B = f.write, M = B < f.read ? f.read - B - 1 : f.end - B, B == f.end && 0 !== f.read && (B = 0, M = B < f.read ? f.read - B - 1 : f.end - B), 0 === M))) return f.bitb = O, f.bitk = P, v.avail_in = A, v.total_in += Q - v.next_in_index, v.next_in_index = Q, f.write = B, f.inflate_flush(v, w);
                            f.window[B++] = f.window[N++], M--, N == f.end && (N = 0), g--
                        }
                        b = C;
                        break;
                    case I:
                        if (0 === M && (B == f.end && 0 !== f.read && (B = 0, M = B < f.read ? f.read - B - 1 : f.end - B), 0 === M && (f.write = B, w = f.inflate_flush(v, w), B = f.write, M = B < f.read ? f.read - B - 1 : f.end - B, B == f.end && 0 !== f.read && (B = 0, M = B < f.read ? f.read - B - 1 : f.end - B), 0 === M))) return f.bitb = O, f.bitk = P, v.avail_in = A, v.total_in += Q - v.next_in_index, v.next_in_index = Q, f.write = B, f.inflate_flush(v, w);
                        w = i, f.window[B++] = n, M--, b = C;
                        break;
                    case J:
                        if (P > 7 && (P -= 8, A++, Q--), f.write = B, w = f.inflate_flush(v, w), B = f.write, M = B < f.read ? f.read - B - 1 : f.end - B, f.read != f.write) return f.bitb = O, f.bitk = P, v.avail_in = A, v.total_in += Q - v.next_in_index, v.next_in_index = Q, f.write = B, f.inflate_flush(v, w);
                        b = K;
                    case K:
                        return w = j, f.bitb = O, f.bitk = P, v.avail_in = A, v.total_in += Q - v.next_in_index, v.next_in_index = Q, f.write = B, f.inflate_flush(v, w);
                    case L:
                        return w = m, f.bitb = O, f.bitk = P, v.avail_in = A, v.total_in += Q - v.next_in_index, v.next_in_index = Q, f.write = B, f.inflate_flush(v, w);
                    default:
                        return w = l, f.bitb = O, f.bitk = P, v.avail_in = A, v.total_in += Q - v.next_in_index, v.next_in_index = Q, f.write = B, f.inflate_flush(v, w)
                }
            }, f.free = function() {}
        }

        function d(a, d) {
            var e, f = this,
                g = N,
                h = 0,
                k = 0,
                n = 0,
                r = [0],
                s = [0],
                t = new c,
                u = 0,
                v = new Int32Array(3 * q),
                w = 0,
                x = new b;
            f.bitk = 0, f.bitb = 0, f.window = new Uint8Array(d), f.end = d, f.read = 0, f.write = 0, f.reset = function(a, b) {
                b && (b[0] = w), g == T && t.free(a), g = N, f.bitk = 0, f.bitb = 0, f.read = f.write = 0
            }, f.reset(a, null), f.inflate_flush = function(a, b) {
                var c, d, e;
                return d = a.next_out_index, e = f.read, c = (e <= f.write ? f.write : f.end) - e, c > a.avail_out && (c = a.avail_out), 0 !== c && b == o && (b = i), a.avail_out -= c, a.total_out += c, a.next_out.set(f.window.subarray(e, e + c), d), d += c, e += c, e == f.end && (e = 0, f.write == f.end && (f.write = 0), c = f.write - e, c > a.avail_out && (c = a.avail_out), 0 !== c && b == o && (b = i), a.avail_out -= c, a.total_out += c, a.next_out.set(f.window.subarray(e, e + c), d), d += c, e += c), a.next_out_index = d, f.read = e, b
            }, f.proc = function(a, c) {
                var d, o, q, w, y, z, A, B;
                for (w = a.next_in_index, y = a.avail_in, o = f.bitb, q = f.bitk, z = f.write, A = z < f.read ? f.read - z - 1 : f.end - z;;) switch (g) {
                    case N:
                        for (; q < 3;) {
                            if (0 === y) return f.bitb = o, f.bitk = q, a.avail_in = y, a.total_in += w - a.next_in_index, a.next_in_index = w, f.write = z, f.inflate_flush(a, c);
                            c = i, y--, o |= (255 & a.read_byte(w++)) << q, q += 8
                        }
                        switch (d = 7 & o, u = 1 & d, d >>> 1) {
                            case 0:
                                o >>>= 3, q -= 3, d = 7 & q, o >>>= d, q -= d, g = O;
                                break;
                            case 1:
                                var C = [],
                                    D = [],
                                    E = [
                                        []
                                    ],
                                    F = [
                                        []
                                    ];
                                b.inflate_trees_fixed(C, D, E, F), t.init(C[0], D[0], E[0], 0, F[0], 0), o >>>= 3, q -= 3, g = T;
                                break;
                            case 2:
                                o >>>= 3, q -= 3, g = Q;
                                break;
                            case 3:
                                return o >>>= 3, q -= 3, g = W, a.msg = "invalid block type", c = m, f.bitb = o, f.bitk = q, a.avail_in = y, a.total_in += w - a.next_in_index, a.next_in_index = w, f.write = z, f.inflate_flush(a, c)
                        }
                        break;
                    case O:
                        for (; q < 32;) {
                            if (0 === y) return f.bitb = o, f.bitk = q, a.avail_in = y, a.total_in += w - a.next_in_index, a.next_in_index = w, f.write = z, f.inflate_flush(a, c);
                            c = i, y--, o |= (255 & a.read_byte(w++)) << q, q += 8
                        }
                        if ((~o >>> 16 & 65535) != (65535 & o)) return g = W, a.msg = "invalid stored block lengths", c = m, f.bitb = o, f.bitk = q, a.avail_in = y, a.total_in += w - a.next_in_index, a.next_in_index = w, f.write = z, f.inflate_flush(a, c);
                        h = 65535 & o, o = q = 0, g = 0 !== h ? P : 0 !== u ? U : N;
                        break;
                    case P:
                        if (0 === y) return f.bitb = o, f.bitk = q, a.avail_in = y, a.total_in += w - a.next_in_index, a.next_in_index = w, f.write = z, f.inflate_flush(a, c);
                        if (0 === A && (z == f.end && 0 !== f.read && (z = 0, A = z < f.read ? f.read - z - 1 : f.end - z), 0 === A && (f.write = z, c = f.inflate_flush(a, c), z = f.write, A = z < f.read ? f.read - z - 1 : f.end - z, z == f.end && 0 !== f.read && (z = 0, A = z < f.read ? f.read - z - 1 : f.end - z), 0 === A))) return f.bitb = o, f.bitk = q, a.avail_in = y, a.total_in += w - a.next_in_index, a.next_in_index = w, f.write = z, f.inflate_flush(a, c);
                        if (c = i, d = h, d > y && (d = y), d > A && (d = A), f.window.set(a.read_buf(w, d), z), w += d, y -= d, z += d, A -= d, 0 !== (h -= d)) break;
                        g = 0 !== u ? U : N;
                        break;
                    case Q:
                        for (; q < 14;) {
                            if (0 === y) return f.bitb = o, f.bitk = q, a.avail_in = y, a.total_in += w - a.next_in_index, a.next_in_index = w, f.write = z, f.inflate_flush(a, c);
                            c = i, y--, o |= (255 & a.read_byte(w++)) << q, q += 8
                        }
                        if (k = d = 16383 & o, (31 & d) > 29 || (d >> 5 & 31) > 29) return g = W, a.msg = "too many length or distance symbols", c = m, f.bitb = o, f.bitk = q, a.avail_in = y, a.total_in += w - a.next_in_index, a.next_in_index = w, f.write = z, f.inflate_flush(a, c);
                        if (d = 258 + (31 & d) + (d >> 5 & 31), !e || e.length < d) e = [];
                        else
                            for (B = 0; B < d; B++) e[B] = 0;
                        o >>>= 14, q -= 14, n = 0, g = R;
                    case R:
                        for (; n < 4 + (k >>> 10);) {
                            for (; q < 3;) {
                                if (0 === y) return f.bitb = o, f.bitk = q, a.avail_in = y, a.total_in += w - a.next_in_index, a.next_in_index = w, f.write = z, f.inflate_flush(a, c);
                                c = i, y--, o |= (255 & a.read_byte(w++)) << q, q += 8
                            }
                            e[M[n++]] = 7 & o, o >>>= 3, q -= 3
                        }
                        for (; n < 19;) e[M[n++]] = 0;
                        if (r[0] = 7, d = x.inflate_trees_bits(e, r, s, v, a), d != i) return c = d, c == m && (e = null, g = W), f.bitb = o, f.bitk = q, a.avail_in = y, a.total_in += w - a.next_in_index, a.next_in_index = w, f.write = z, f.inflate_flush(a, c);
                        n = 0, g = S;
                    case S:
                        for (;;) {
                            if (d = k, n >= 258 + (31 & d) + (d >> 5 & 31)) break;
                            var G, H;
                            for (d = r[0]; q < d;) {
                                if (0 === y) return f.bitb = o, f.bitk = q, a.avail_in = y, a.total_in += w - a.next_in_index, a.next_in_index = w, f.write = z, f.inflate_flush(a, c);
                                c = i, y--, o |= (255 & a.read_byte(w++)) << q, q += 8
                            }
                            if (d = v[3 * (s[0] + (o & p[d])) + 1], H = v[3 * (s[0] + (o & p[d])) + 2], H < 16) o >>>= d, q -= d, e[n++] = H;
                            else {
                                for (B = 18 == H ? 7 : H - 14, G = 18 == H ? 11 : 3; q < d + B;) {
                                    if (0 === y) return f.bitb = o, f.bitk = q, a.avail_in = y, a.total_in += w - a.next_in_index, a.next_in_index = w, f.write = z, f.inflate_flush(a, c);
                                    c = i, y--, o |= (255 & a.read_byte(w++)) << q, q += 8
                                }
                                if (o >>>= d, q -= d, G += o & p[B], o >>>= B, q -= B, B = n, d = k, B + G > 258 + (31 & d) + (d >> 5 & 31) || 16 == H && B < 1) return e = null, g = W, a.msg = "invalid bit length repeat", c = m, f.bitb = o, f.bitk = q, a.avail_in = y, a.total_in += w - a.next_in_index, a.next_in_index = w, f.write = z, f.inflate_flush(a, c);
                                H = 16 == H ? e[B - 1] : 0;
                                do e[B++] = H; while (0 !== --G);
                                n = B
                            }
                        }
                        s[0] = -1;
                        var I = [],
                            J = [],
                            K = [],
                            L = [];
                        if (I[0] = 9, J[0] = 6, d = k, d = x.inflate_trees_dynamic(257 + (31 & d), 1 + (d >> 5 & 31), e, I, J, K, L, v, a), d != i) return d == m && (e = null, g = W), c = d, f.bitb = o, f.bitk = q, a.avail_in = y, a.total_in += w - a.next_in_index, a.next_in_index = w, f.write = z, f.inflate_flush(a, c);
                        t.init(I[0], J[0], v, K[0], v, L[0]), g = T;
                    case T:
                        if (f.bitb = o, f.bitk = q, a.avail_in = y, a.total_in += w - a.next_in_index, a.next_in_index = w, f.write = z, (c = t.proc(f, a, c)) != j) return f.inflate_flush(a, c);
                        if (c = i, t.free(a), w = a.next_in_index, y = a.avail_in, o = f.bitb, q = f.bitk, z = f.write, A = z < f.read ? f.read - z - 1 : f.end - z, 0 === u) {
                            g = N;
                            break
                        }
                        g = U;
                    case U:
                        if (f.write = z, c = f.inflate_flush(a, c), z = f.write, A = z < f.read ? f.read - z - 1 : f.end - z, f.read != f.write) return f.bitb = o, f.bitk = q, a.avail_in = y, a.total_in += w - a.next_in_index, a.next_in_index = w, f.write = z, f.inflate_flush(a, c);
                        g = V;
                    case V:
                        return c = j, f.bitb = o, f.bitk = q, a.avail_in = y, a.total_in += w - a.next_in_index, a.next_in_index = w, f.write = z, f.inflate_flush(a, c);
                    case W:
                        return c = m, f.bitb = o, f.bitk = q, a.avail_in = y, a.total_in += w - a.next_in_index, a.next_in_index = w, f.write = z, f.inflate_flush(a, c);
                    default:
                        return c = l, f.bitb = o, f.bitk = q, a.avail_in = y, a.total_in += w - a.next_in_index, a.next_in_index = w, f.write = z, f.inflate_flush(a, c)
                }
            }, f.free = function(a) {
                f.reset(a, null), f.window = null, v = null
            }, f.set_dictionary = function(a, b, c) {
                f.window.set(a.subarray(b, b + c), 0), f.read = f.write = c
            }, f.sync_point = function() {
                return g == O ? 1 : 0
            }
        }

        function e() {
            function a(a) {
                return a && a.istate ? (a.total_in = a.total_out = 0, a.msg = null, a.istate.mode = ea, a.istate.blocks.reset(a, null), i) : l
            }
            var b = this;
            b.mode = 0, b.method = 0, b.was = [0], b.need = 0, b.marker = 0, b.wbits = 0, b.inflateEnd = function(a) {
                return b.blocks && b.blocks.free(a), b.blocks = null, i
            }, b.inflateInit = function(c, e) {
                return c.msg = null, b.blocks = null, e < 8 || e > 15 ? (b.inflateEnd(c), l) : (b.wbits = e, c.istate.blocks = new d(c, 1 << e), a(c), i)
            }, b.inflate = function(a, b) {
                var c, d;
                if (!a || !a.istate || !a.next_in) return l;
                for (b = b == s ? o : i, c = o;;) switch (a.istate.mode) {
                    case Z:
                        if (0 === a.avail_in) return c;
                        if (c = b, a.avail_in--, a.total_in++, (15 & (a.istate.method = a.read_byte(a.next_in_index++))) != Y) {
                            a.istate.mode = ga, a.msg = "unknown compression method", a.istate.marker = 5;
                            break
                        }
                        if ((a.istate.method >> 4) + 8 > a.istate.wbits) {
                            a.istate.mode = ga, a.msg = "invalid window size", a.istate.marker = 5;
                            break
                        }
                        a.istate.mode = $;
                    case $:
                        if (0 === a.avail_in) return c;
                        if (c = b, a.avail_in--, a.total_in++, d = 255 & a.read_byte(a.next_in_index++), ((a.istate.method << 8) + d) % 31 !== 0) {
                            a.istate.mode = ga, a.msg = "incorrect header check", a.istate.marker = 5;
                            break
                        }
                        if (0 === (d & X)) {
                            a.istate.mode = ea;
                            break
                        }
                        a.istate.mode = _;
                    case _:
                        if (0 === a.avail_in) return c;
                        c = b, a.avail_in--, a.total_in++, a.istate.need = (255 & a.read_byte(a.next_in_index++)) << 24 & 4278190080,
                            a.istate.mode = aa;
                    case aa:
                        if (0 === a.avail_in) return c;
                        c = b, a.avail_in--, a.total_in++, a.istate.need += (255 & a.read_byte(a.next_in_index++)) << 16 & 16711680, a.istate.mode = ba;
                    case ba:
                        if (0 === a.avail_in) return c;
                        c = b, a.avail_in--, a.total_in++, a.istate.need += (255 & a.read_byte(a.next_in_index++)) << 8 & 65280, a.istate.mode = ca;
                    case ca:
                        return 0 === a.avail_in ? c : (c = b, a.avail_in--, a.total_in++, a.istate.need += 255 & a.read_byte(a.next_in_index++), a.istate.mode = da, k);
                    case da:
                        return a.istate.mode = ga, a.msg = "need dictionary", a.istate.marker = 0, l;
                    case ea:
                        if (c = a.istate.blocks.proc(a, c), c == m) {
                            a.istate.mode = ga, a.istate.marker = 0;
                            break
                        }
                        if (c == i && (c = b), c != j) return c;
                        c = b, a.istate.blocks.reset(a, a.istate.was), a.istate.mode = fa;
                    case fa:
                        return j;
                    case ga:
                        return m;
                    default:
                        return l
                }
            }, b.inflateSetDictionary = function(a, b, c) {
                var d = 0,
                    e = c;
                return a && a.istate && a.istate.mode == da ? (e >= 1 << a.istate.wbits && (e = (1 << a.istate.wbits) - 1, d = c - e), a.istate.blocks.set_dictionary(b, d, e), a.istate.mode = ea, i) : l
            }, b.inflateSync = function(b) {
                var c, d, e, f, g;
                if (!b || !b.istate) return l;
                if (b.istate.mode != ga && (b.istate.mode = ga, b.istate.marker = 0), 0 === (c = b.avail_in)) return o;
                for (d = b.next_in_index, e = b.istate.marker; 0 !== c && e < 4;) b.read_byte(d) == ha[e] ? e++ : e = 0 !== b.read_byte(d) ? 0 : 4 - e, d++, c--;
                return b.total_in += d - b.next_in_index, b.next_in_index = d, b.avail_in = c, b.istate.marker = e, 4 != e ? m : (f = b.total_in, g = b.total_out, a(b), b.total_in = f, b.total_out = g, b.istate.mode = ea, i)
            }, b.inflateSyncPoint = function(a) {
                return a && a.istate && a.istate.blocks ? a.istate.blocks.sync_point() : l
            }
        }

        function f() {}

        function g() {
            var a = this,
                b = new f,
                c = 512,
                d = r,
                e = new Uint8Array(c),
                g = !1;
            b.inflateInit(), b.next_out = e, a.append = function(a, f) {
                var h, k, l = [],
                    m = 0,
                    n = 0,
                    p = 0;
                if (0 !== a.length) {
                    b.next_in_index = 0, b.next_in = a, b.avail_in = a.length;
                    do {
                        if (b.next_out_index = 0, b.avail_out = c, 0 !== b.avail_in || g || (b.next_in_index = 0, g = !0), h = b.inflate(d), g && h === o) {
                            if (0 !== b.avail_in) throw new Error("inflating: bad input")
                        } else if (h !== i && h !== j) throw new Error("inflating: " + b.msg);
                        if ((g || h === j) && b.avail_in === a.length) throw new Error("inflating: bad input");
                        b.next_out_index && l.push(b.next_out_index === c ? new Uint8Array(e) : new Uint8Array(e.subarray(0, b.next_out_index))), p += b.next_out_index, f && b.next_in_index > 0 && b.next_in_index != m && (f(b.next_in_index), m = b.next_in_index)
                    } while (b.avail_in > 0 || 0 === b.avail_out);
                    return k = new Uint8Array(p), l.forEach(function(a) {
                        k.set(a, n), n += a.length
                    }), k
                }
            }, a.flush = function() {
                b.inflateEnd()
            }
        }
        var h = 15,
            i = 0,
            j = 1,
            k = 2,
            l = -2,
            m = -3,
            n = -4,
            o = -5,
            p = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535],
            q = 1440,
            r = 0,
            s = 4,
            t = 9,
            u = 5,
            v = [96, 7, 256, 0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8, 48, 0, 9, 192, 80, 7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 160, 0, 8, 0, 0, 8, 128, 0, 8, 64, 0, 9, 224, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9, 144, 83, 7, 59, 0, 8, 120, 0, 8, 56, 0, 9, 208, 81, 7, 17, 0, 8, 104, 0, 8, 40, 0, 9, 176, 0, 8, 8, 0, 8, 136, 0, 8, 72, 0, 9, 240, 80, 7, 4, 0, 8, 84, 0, 8, 20, 85, 8, 227, 83, 7, 43, 0, 8, 116, 0, 8, 52, 0, 9, 200, 81, 7, 13, 0, 8, 100, 0, 8, 36, 0, 9, 168, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0, 9, 232, 80, 7, 8, 0, 8, 92, 0, 8, 28, 0, 9, 152, 84, 7, 83, 0, 8, 124, 0, 8, 60, 0, 9, 216, 82, 7, 23, 0, 8, 108, 0, 8, 44, 0, 9, 184, 0, 8, 12, 0, 8, 140, 0, 8, 76, 0, 9, 248, 80, 7, 3, 0, 8, 82, 0, 8, 18, 85, 8, 163, 83, 7, 35, 0, 8, 114, 0, 8, 50, 0, 9, 196, 81, 7, 11, 0, 8, 98, 0, 8, 34, 0, 9, 164, 0, 8, 2, 0, 8, 130, 0, 8, 66, 0, 9, 228, 80, 7, 7, 0, 8, 90, 0, 8, 26, 0, 9, 148, 84, 7, 67, 0, 8, 122, 0, 8, 58, 0, 9, 212, 82, 7, 19, 0, 8, 106, 0, 8, 42, 0, 9, 180, 0, 8, 10, 0, 8, 138, 0, 8, 74, 0, 9, 244, 80, 7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7, 51, 0, 8, 118, 0, 8, 54, 0, 9, 204, 81, 7, 15, 0, 8, 102, 0, 8, 38, 0, 9, 172, 0, 8, 6, 0, 8, 134, 0, 8, 70, 0, 9, 236, 80, 7, 9, 0, 8, 94, 0, 8, 30, 0, 9, 156, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0, 9, 220, 82, 7, 27, 0, 8, 110, 0, 8, 46, 0, 9, 188, 0, 8, 14, 0, 8, 142, 0, 8, 78, 0, 9, 252, 96, 7, 256, 0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31, 0, 8, 113, 0, 8, 49, 0, 9, 194, 80, 7, 10, 0, 8, 97, 0, 8, 33, 0, 9, 162, 0, 8, 1, 0, 8, 129, 0, 8, 65, 0, 9, 226, 80, 7, 6, 0, 8, 89, 0, 8, 25, 0, 9, 146, 83, 7, 59, 0, 8, 121, 0, 8, 57, 0, 9, 210, 81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 178, 0, 8, 9, 0, 8, 137, 0, 8, 73, 0, 9, 242, 80, 7, 4, 0, 8, 85, 0, 8, 21, 80, 8, 258, 83, 7, 43, 0, 8, 117, 0, 8, 53, 0, 9, 202, 81, 7, 13, 0, 8, 101, 0, 8, 37, 0, 9, 170, 0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9, 234, 80, 7, 8, 0, 8, 93, 0, 8, 29, 0, 9, 154, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 218, 82, 7, 23, 0, 8, 109, 0, 8, 45, 0, 9, 186, 0, 8, 13, 0, 8, 141, 0, 8, 77, 0, 9, 250, 80, 7, 3, 0, 8, 83, 0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115, 0, 8, 51, 0, 9, 198, 81, 7, 11, 0, 8, 99, 0, 8, 35, 0, 9, 166, 0, 8, 3, 0, 8, 131, 0, 8, 67, 0, 9, 230, 80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9, 150, 84, 7, 67, 0, 8, 123, 0, 8, 59, 0, 9, 214, 82, 7, 19, 0, 8, 107, 0, 8, 43, 0, 9, 182, 0, 8, 11, 0, 8, 139, 0, 8, 75, 0, 9, 246, 80, 7, 5, 0, 8, 87, 0, 8, 23, 192, 8, 0, 83, 7, 51, 0, 8, 119, 0, 8, 55, 0, 9, 206, 81, 7, 15, 0, 8, 103, 0, 8, 39, 0, 9, 174, 0, 8, 7, 0, 8, 135, 0, 8, 71, 0, 9, 238, 80, 7, 9, 0, 8, 95, 0, 8, 31, 0, 9, 158, 84, 7, 99, 0, 8, 127, 0, 8, 63, 0, 9, 222, 82, 7, 27, 0, 8, 111, 0, 8, 47, 0, 9, 190, 0, 8, 15, 0, 8, 143, 0, 8, 79, 0, 9, 254, 96, 7, 256, 0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8, 48, 0, 9, 193, 80, 7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 161, 0, 8, 0, 0, 8, 128, 0, 8, 64, 0, 9, 225, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9, 145, 83, 7, 59, 0, 8, 120, 0, 8, 56, 0, 9, 209, 81, 7, 17, 0, 8, 104, 0, 8, 40, 0, 9, 177, 0, 8, 8, 0, 8, 136, 0, 8, 72, 0, 9, 241, 80, 7, 4, 0, 8, 84, 0, 8, 20, 85, 8, 227, 83, 7, 43, 0, 8, 116, 0, 8, 52, 0, 9, 201, 81, 7, 13, 0, 8, 100, 0, 8, 36, 0, 9, 169, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0, 9, 233, 80, 7, 8, 0, 8, 92, 0, 8, 28, 0, 9, 153, 84, 7, 83, 0, 8, 124, 0, 8, 60, 0, 9, 217, 82, 7, 23, 0, 8, 108, 0, 8, 44, 0, 9, 185, 0, 8, 12, 0, 8, 140, 0, 8, 76, 0, 9, 249, 80, 7, 3, 0, 8, 82, 0, 8, 18, 85, 8, 163, 83, 7, 35, 0, 8, 114, 0, 8, 50, 0, 9, 197, 81, 7, 11, 0, 8, 98, 0, 8, 34, 0, 9, 165, 0, 8, 2, 0, 8, 130, 0, 8, 66, 0, 9, 229, 80, 7, 7, 0, 8, 90, 0, 8, 26, 0, 9, 149, 84, 7, 67, 0, 8, 122, 0, 8, 58, 0, 9, 213, 82, 7, 19, 0, 8, 106, 0, 8, 42, 0, 9, 181, 0, 8, 10, 0, 8, 138, 0, 8, 74, 0, 9, 245, 80, 7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7, 51, 0, 8, 118, 0, 8, 54, 0, 9, 205, 81, 7, 15, 0, 8, 102, 0, 8, 38, 0, 9, 173, 0, 8, 6, 0, 8, 134, 0, 8, 70, 0, 9, 237, 80, 7, 9, 0, 8, 94, 0, 8, 30, 0, 9, 157, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0, 9, 221, 82, 7, 27, 0, 8, 110, 0, 8, 46, 0, 9, 189, 0, 8, 14, 0, 8, 142, 0, 8, 78, 0, 9, 253, 96, 7, 256, 0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31, 0, 8, 113, 0, 8, 49, 0, 9, 195, 80, 7, 10, 0, 8, 97, 0, 8, 33, 0, 9, 163, 0, 8, 1, 0, 8, 129, 0, 8, 65, 0, 9, 227, 80, 7, 6, 0, 8, 89, 0, 8, 25, 0, 9, 147, 83, 7, 59, 0, 8, 121, 0, 8, 57, 0, 9, 211, 81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 179, 0, 8, 9, 0, 8, 137, 0, 8, 73, 0, 9, 243, 80, 7, 4, 0, 8, 85, 0, 8, 21, 80, 8, 258, 83, 7, 43, 0, 8, 117, 0, 8, 53, 0, 9, 203, 81, 7, 13, 0, 8, 101, 0, 8, 37, 0, 9, 171, 0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9, 235, 80, 7, 8, 0, 8, 93, 0, 8, 29, 0, 9, 155, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 219, 82, 7, 23, 0, 8, 109, 0, 8, 45, 0, 9, 187, 0, 8, 13, 0, 8, 141, 0, 8, 77, 0, 9, 251, 80, 7, 3, 0, 8, 83, 0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115, 0, 8, 51, 0, 9, 199, 81, 7, 11, 0, 8, 99, 0, 8, 35, 0, 9, 167, 0, 8, 3, 0, 8, 131, 0, 8, 67, 0, 9, 231, 80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9, 151, 84, 7, 67, 0, 8, 123, 0, 8, 59, 0, 9, 215, 82, 7, 19, 0, 8, 107, 0, 8, 43, 0, 9, 183, 0, 8, 11, 0, 8, 139, 0, 8, 75, 0, 9, 247, 80, 7, 5, 0, 8, 87, 0, 8, 23, 192, 8, 0, 83, 7, 51, 0, 8, 119, 0, 8, 55, 0, 9, 207, 81, 7, 15, 0, 8, 103, 0, 8, 39, 0, 9, 175, 0, 8, 7, 0, 8, 135, 0, 8, 71, 0, 9, 239, 80, 7, 9, 0, 8, 95, 0, 8, 31, 0, 9, 159, 84, 7, 99, 0, 8, 127, 0, 8, 63, 0, 9, 223, 82, 7, 27, 0, 8, 111, 0, 8, 47, 0, 9, 191, 0, 8, 15, 0, 8, 143, 0, 8, 79, 0, 9, 255],
            w = [80, 5, 1, 87, 5, 257, 83, 5, 17, 91, 5, 4097, 81, 5, 5, 89, 5, 1025, 85, 5, 65, 93, 5, 16385, 80, 5, 3, 88, 5, 513, 84, 5, 33, 92, 5, 8193, 82, 5, 9, 90, 5, 2049, 86, 5, 129, 192, 5, 24577, 80, 5, 2, 87, 5, 385, 83, 5, 25, 91, 5, 6145, 81, 5, 7, 89, 5, 1537, 85, 5, 97, 93, 5, 24577, 80, 5, 4, 88, 5, 769, 84, 5, 49, 92, 5, 12289, 82, 5, 13, 90, 5, 3073, 86, 5, 193, 192, 5, 24577],
            x = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
            y = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 112, 112],
            z = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577],
            A = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
            B = 15;
        b.inflate_trees_fixed = function(a, b, c, d) {
            return a[0] = t, b[0] = u, c[0] = v, d[0] = w, i
        };
        var C = 0,
            D = 1,
            E = 2,
            F = 3,
            G = 4,
            H = 5,
            I = 6,
            J = 7,
            K = 8,
            L = 9,
            M = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
            N = 0,
            O = 1,
            P = 2,
            Q = 3,
            R = 4,
            S = 5,
            T = 6,
            U = 7,
            V = 8,
            W = 9,
            X = 32,
            Y = 8,
            Z = 0,
            $ = 1,
            _ = 2,
            aa = 3,
            ba = 4,
            ca = 5,
            da = 6,
            ea = 7,
            fa = 12,
            ga = 13,
            ha = [0, 0, 255, 255];
        f.prototype = {
            inflateInit: function(a) {
                var b = this;
                return b.istate = new e, a || (a = h), b.istate.inflateInit(b, a)
            },
            inflate: function(a) {
                var b = this;
                return b.istate ? b.istate.inflate(b, a) : l
            },
            inflateEnd: function() {
                var a = this;
                if (!a.istate) return l;
                var b = a.istate.inflateEnd(a);
                return a.istate = null, b
            },
            inflateSync: function() {
                var a = this;
                return a.istate ? a.istate.inflateSync(a) : l
            },
            inflateSetDictionary: function(a, b) {
                var c = this;
                return c.istate ? c.istate.inflateSetDictionary(c, a, b) : l
            },
            read_byte: function(a) {
                var b = this;
                return b.next_in.subarray(a, a + 1)[0]
            },
            read_buf: function(a, b) {
                var c = this;
                return c.next_in.subarray(a, a + b)
            }
        };
        var ia = a.zip || a;
        ia.Inflater = ia._jzlib_Inflater = g
    }(this),
    function(a) {
        "use strict";

        function b(a) {
            a.scripts && a.scripts.length > 0 && importScripts.apply(void 0, a.scripts), postMessage({
                type: "importScripts"
            })
        }

        function c(b) {
            var c = a[b.codecClass],
                d = b.sn;
            if (j[d]) throw Error("duplicated sn");
            j[d] = {
                codec: new c(b.options),
                crcInput: "input" === b.crcType,
                crcOutput: "output" === b.crcType,
                crc: new g
            }, postMessage({
                type: "newTask",
                sn: d
            })
        }

        function d(a) {
            var b = a.sn,
                d = a.type,
                e = a.data,
                f = j[b];
            !f && a.codecClass && (c(a), f = j[b]);
            var g, h = "append" === d,
                i = k();
            if (h) try {
                g = f.codec.append(e, function(a) {
                    postMessage({
                        type: "progress",
                        sn: b,
                        loaded: a
                    })
                })
            } catch (a) {
                throw delete j[b], a
            } else delete j[b], g = f.codec.flush();
            var l = k() - i;
            i = k(), e && f.crcInput && f.crc.append(e), g && f.crcOutput && f.crc.append(g);
            var m = k() - i,
                n = {
                    type: d,
                    sn: b,
                    codecTime: l,
                    crcTime: m
                },
                o = [];
            g && (n.data = g, o.push(g.buffer)), h || !f.crcInput && !f.crcOutput || (n.crc = f.crc.get());
            try {
                postMessage(n, o)
            } catch (a) {
                postMessage(n)
            }
        }

        function e(a, b, c) {
            var d = {
                type: a,
                sn: b,
                error: f(c)
            };
            postMessage(d)
        }

        function f(a) {
            return {
                message: a.message,
                stack: a.stack
            }
        }

        function g() {
            this.crc = -1
        }

        function h() {}
        if (a.zWorkerInitialized) throw new Error("z-worker.js should be run only once");
        a.zWorkerInitialized = !0, addEventListener("message", function(a) {
            var b = a.data,
                c = b.type,
                d = b.sn,
                f = i[c];
            if (f) try {
                f(b)
            } catch (a) {
                e(c, d, a)
            }
        });
        var i = {
                importScripts: b,
                newTask: c,
                append: d,
                flush: d
            },
            j = {},
            k = a.performance ? a.performance.now.bind(a.performance) : Date.now;
        g.prototype.append = function(a) {
            for (var b = 0 | this.crc, c = this.table, d = 0, e = 0 | a.length; d < e; d++) b = b >>> 8 ^ c[255 & (b ^ a[d])];
            this.crc = b
        }, g.prototype.get = function() {
            return ~this.crc
        }, g.prototype.table = function() {
            var a, b, c, d = [];
            for (a = 0; a < 256; a++) {
                for (c = a, b = 0; b < 8; b++) 1 & c ? c = c >>> 1 ^ 3988292384 : c >>>= 1;
                d[a] = c
            }
            return d
        }(), a.NOOP = h, h.prototype.append = function(a, b) {
            return a
        }, h.prototype.flush = function() {}
    }(this);
    var na = function() {
            function a(a, c, d) {
                var e = da.getProperties().tickTime,
                    f = a.sustain ? a.sustainPoint + 1 : a.count;
                a.loopStartPoint = Math.min(a.loopStartPoint, a.count - 1), a.loopEndPoint = Math.min(a.loopEndPoint, a.count - 1);
                var g = a.loop && a.loopStartPoint < a.loopEndPoint;
                a.sustain && a.sustainPoint <= a.loopStartPoint && (g = !1), g && (f = a.loopEndPoint + 1);
                var h = 0,
                    i = 0;
                if (c.gain) var j = c.gain,
                    k = 0,
                    l = 64;
                else j = c.pan, k = 32, l = 32;
                j.setValueAtTime((a.points[0][1] - k) / l, d);
                for (var m = 1; m < f; m++) {
                    var n = a.points[m];
                    i = n[0], h = i * e, j.linearRampToValueAtTime((n[1] - k) / l, d + h)
                }
                return !!g && b.scheduleEnvelopeLoop(c, d, 2, h)
            }
            var b = {};
            return b.type = "sample", b.name = "", b.instrumentIndex = 0, b.sampleIndex = -1, b.fadeout = 128, b.data = [], b.samples = [pa()], b.sample = b.samples[0], b.volumeEnvelope = {
                raw: [],
                enabled: !1,
                points: [
                    [0, 48],
                    [10, 64],
                    [20, 40],
                    [30, 18],
                    [40, 28],
                    [50, 18]
                ],
                count: 6
            }, b.panningEnvelope = {
                raw: [],
                enabled: !1,
                points: [
                    [0, 32],
                    [20, 40],
                    [40, 24],
                    [60, 32],
                    [80, 32]
                ],
                count: 5
            }, b.vibrato = {}, b.sampleNumberForNotes = [], b.play = function(a, c, d, e, f, g) {
                return da.inFTMode() && (c = b.getPeriodForNote(a)), O.playSample(b.instrumentIndex, c, d, e, f, g, a)
            }, b.noteOn = function(c) {
                var d, e, f = {};
                if (b.volumeEnvelope.enabled) {
                    d = O.context.createGain();
                    var g = b.volumeEnvelope,
                        h = a(g, d, c);
                    h && (f.volume = c + h)
                }
                return b.panningEnvelope.enabled && O.usePanning && (e = O.context.createStereoPanner(), g = b.panningEnvelope, h = a(g, e, c), h && (f.panning = c + h)), b.vibrato.rate && b.vibrato.depth && (f.ticks = 0, f.vibrato = c, f.vibratoFunction = b.getAutoVibratoFunction()), {
                    volume: d,
                    panning: e,
                    scheduled: f
                }
            }, b.noteOff = function(a, c) {
                function d() {
                    c.volume.gain.cancelScheduledValues(a), c.volumeFadeOut.gain.cancelScheduledValues(a), c.volumeEnvelope && c.volumeEnvelope.gain.cancelScheduledValues(a), c.panningEnvelope && c.panningEnvelope.pan.cancelScheduledValues(a), c.scheduled = void 0
                }
                if (c && c.volume) {
                    if (da.inFTMode()) {
                        var e = da.getProperties().tickTime;
                        if (b.volumeEnvelope.enabled) {
                            if (b.volumeEnvelope.sustain && c.volumeEnvelope) {
                                d();
                                var f = 0,
                                    g = b.volumeEnvelope.points[b.volumeEnvelope.sustainPoint];
                                g && (f = g[0] * e);
                                for (var h = b.volumeEnvelope.sustainPoint; h < b.volumeEnvelope.count; h++) {
                                    var i = b.volumeEnvelope.points[h];
                                    i && c.volumeEnvelope.gain.linearRampToValueAtTime(i[1] / 64, a + i[0] * e - f)
                                }
                            }
                            if (b.fadeout) {
                                var j = 65536 / b.fadeout * e / 2;
                                c.volumeFadeOut.gain.linearRampToValueAtTime(0, a + j)
                            }
                        } else d(), c.volumeFadeOut.gain.linearRampToValueAtTime(0, a + .1);
                        if (b.panningEnvelope.enabled && O.usePanning)
                            for (f = 0, g = b.panningEnvelope.points[b.panningEnvelope.sustainPoint], g && (f = g[0] * e), h = b.panningEnvelope.sustainPoint; h < b.panningEnvelope.count; h++) i = b.panningEnvelope.points[h], i && c.panningEnvelope.pan.linearRampToValueAtTime((i[1] - 32) / 32, a + i[0] * e - f);
                        return 100
                    }
                    return d(), c.isKey && c.volume ? void c.volume.gain.linearRampToValueAtTime(0, a + .5) : 0
                }
            }, b.scheduleEnvelopeLoop = function(a, c, d, e) {
                e = e || 0;
                var f = da.getProperties().tickTime;
                if (a.gain) var g = b.volumeEnvelope,
                    h = a.gain,
                    i = 0,
                    j = 64;
                else g = b.panningEnvelope, h = a.pan, i = 32, j = 32;
                var k = g.points[g.loopStartPoint],
                    l = k[0],
                    m = g.loop && g.loopStartPoint < g.loopEndPoint;
                if (m)
                    for (; e < d;)
                        for (var n = e, o = g.loopStartPoint; o <= g.loopEndPoint; o++) k = g.points[o], e = n + (k[0] - l) * f, h.linearRampToValueAtTime((k[1] - i) / j, c + e);
                return e
            }, b.scheduleAutoVibrato = function(a, c) {
                var d = 0;
                a.scheduled.ticks = a.scheduled.ticks || 0;
                var e = da.getProperties().tickTime,
                    f = -b.vibrato.rate / 40,
                    g = b.vibrato.depth / 8;
                da.useLinearFrequency && (g *= 4);
                var h, i, j, k;
                for (a.source && (h = a.startPeriod, i = a.scheduled.vibratoFunction || O.waveFormFunction.sine, j = a.scheduled.vibrato || O.context.currentTime, k = 0); d < c;) {
                    if (d += e, h) {
                        var l = 1;
                        b.vibrato.sweep && a.scheduled.ticks < b.vibrato.sweep && (l = 1 - (b.vibrato.sweep - a.scheduled.ticks) / b.vibrato.sweep);
                        var m = i(h, a.scheduled.ticks, f, g * l);
                        da.setPeriodAtTime(a, m, j + k * e), k++
                    }
                    a.scheduled.ticks++
                }
                return d
            }, b.getAutoVibratoFunction = function() {
                switch (b.vibrato.type) {
                    case 1:
                        return O.waveFormFunction.square;
                    case 2:
                        return O.waveFormFunction.saw;
                    case 3:
                        return O.waveFormFunction.sawInverse
                }
                return O.waveFormFunction.sine
            }, b.resetVolume = function(a, c) {
                if (c.volumeFadeOut && (c.volumeFadeOut.gain.cancelScheduledValues(a), c.volumeFadeOut.gain.setValueAtTime(1, a)), c.volumeEnvelope) {
                    c.volumeEnvelope.gain.cancelScheduledValues(a);
                    var d = da.getProperties().tickTime,
                        e = b.volumeEnvelope.sustain ? b.volumeEnvelope.sustainPoint + 1 : b.volumeEnvelope.count;
                    c.volumeEnvelope.gain.setValueAtTime(b.volumeEnvelope.points[0][1] / 64, a);
                    for (var f = 1; f < e; f++) {
                        var g = b.volumeEnvelope.points[f];
                        c.volumeEnvelope.gain.linearRampToValueAtTime(g[1] / 64, a + g[0] * d)
                    }
                }
            }, b.getFineTune = function() {
                return da.inFTMode() ? b.sample.finetuneX : b.sample.finetune
            }, b.setFineTune = function(a) {
                da.inFTMode() ? (b.sample.finetuneX = a, b.sample.finetune = a >> 4) : (a > 7 && (a -= 15), b.sample.finetune = a, b.sample.finetuneX = a << 4)
            }, b.getPeriodForNote = function(a, c) {
                var d = 0;
                return da.useLinearFrequency ? (d = 7680 - 64 * (a - 1), c && (d -= b.getFineTune() / 2)) : (d = ba[a].period, c && b.getFineTune() && (d = O.getFineTuneForNote(a, b.getFineTune()))), d
            }, b.setSampleForNoteIndex = function(a) {
                var c = b.sampleNumberForNotes[a - 1];
                c !== b.sampleIndex && "number" == typeof c && b.setSampleIndex(c)
            }, b.setSampleIndex = function(a) {
                b.sampleIndex !== a && (b.sample = b.samples[a], b.sampleIndex = a, N.trigger(s.sampleIndexChange, b.instrumentIndex))
            }, b.hasSamples = function() {
                for (var a = 0, c = b.samples.length; a < c; a++)
                    if (b.samples[a].length) return !0
            }, b.hasVibrato = function() {
                return b.vibrato.rate && b.vibrato.depth
            }, b
        },
        oa = function() {
            var a = {};
            return a.period = 0, a.index = 0, a.effect = 0, a.instrument = 0, a.param = 0, a.volumeEffect = 0, a.setPeriod = function(b) {
                a.period = b, a.index = ca[b] || 0
            }, a.setIndex = function(b) {
                a.index = b;
                var c = ba[b];
                c ? (a.period = c.modPeriod || c.period, 1 === a.period && (a.period = 0)) : a.period = 0
            }, a.clear = function() {
                a.instrument = 0, a.period = 0, a.effect = 0, a.param = 0, a.index = 0, a.volumeEffect = 0
            }, a.duplicate = function() {
                return {
                    instrument: a.instrument,
                    period: a.period,
                    effect: a.effect,
                    param: a.param,
                    volumeEffect: a.volumeEffect,
                    note: a.index
                }
            }, a.populate = function(b) {
                a.instrument = b.instrument || 0, a.period = b.period || 0, a.effect = b.effect || 0, a.param = b.param || 0, a.volumeEffect = b.volumeEffect || 0, a.index = b.note || b.index || 0
            }, a
        },
        pa = function() {
            var a = {};
            return a.data = [], a.length = 0, a.name = "", a.bits = 8, a.volume = 64, a.finetune = 0, a.finetuneX = 0, a.panning = 0, a.relativeNote = 0, a.loop = {
                enabled: !1,
                start: 0,
                length: 0,
                type: 0
            }, a.check = function() {
                for (var b = 0, c = 0, d = 0, e = a.data.length; d < e; d++) b = Math.min(b, a.data[d]), c = Math.max(c, a.data[d]);
                return {
                    min: b,
                    max: c
                }
            }, a
        },
        qa = function() {
            function a(a, b, e) {
                if (e) {
                    var f = !1,
                        g = b.lastIndexOf(".");
                    g >= 0 && (f = b.substr(g + 1).toLowerCase() === e.toLowerCase()), f || (b += "." + e)
                }
                q.setStatus("Downloading ..."), d = !1, setTimeout(function() {
                    q.setStatus("")
                }, 3e3), document.location.href = c + a + "?dl=1&name=" + b
            }
            var b = {},
                c = "https://www.stef.be/bassoontracker/api/storage/",
                d = !1;
            return b.putFile = function() {
                var a = c + "put/";
                R.buildBinary(da.inFTMode() ? w.xm : w.mod, function(b) {
                    da.getFileName();
                    S.sendBinary(a, b.buffer, function(a) {})
                })
            }, b.renderFile = function(b, e) {
                if (!d) {
                    d = !0;
                    var f = c + "render/" + (da.inFTMode() ? "xm" : "mod"),
                        b = b || da.getFileName();
                    q.setStatus("saving file ...", !0), R.buildBinary(da.inFTMode() ? w.xm : w.mod, function(g) {
                        S.sendBinary(f, g.buffer, function(h) {
                            if ("error" === h) q.setStatus("error saving file"), d = !1;
                            else {
                                var i = h;
                                q.setStatus("rendering file ...", !0), f = c + "convert/" + i, S.sendBinary(f, g.buffer, function(h) {
                                    "error" === h ? (q.setStatus("Error rendering file ..."), d = !1) : (i = h, e ? (q.setStatus("Converting file to mp3...", !0), f = c + "wavtomp3/" + i, S.sendBinary(f, g.buffer, function(c) {
                                        "error" === c ? (q.setStatus("Error converting file to mp3..."), d = !1) : a(c, b, "mp3")
                                    })) : a(i, b, "wav"))
                                })
                            }
                        })
                    })
                }
            }, b
        }(),
        ra = function() {
            var a = {},
                b = "https://www.stef.be/bassoontracker/auth/dropbox.html";
            return a.isConnected = !1, a.checkConnected = function(b) {
                a.isConnected && b && b(!0), dropboxService.getAccessToken() ? dropboxService("users/get_current_account", void 0, {
                    onComplete: function(c) {
                        c && c.account_id && (a.isConnected = !0, b && b(!0))
                    },
                    onError: function() {
                        b && b(!1)
                    }
                }) : b && b(!1)
            }, a.showConnectDialog = function() {
                var a = q.modalDialog();
                a.setProperties({
                    width: q.mainPanel.width,
                    height: q.mainPanel.height,
                    top: 0,
                    left: 0,
                    ok: !0,
                    cancel: !0
                }), a.onClick = function(b) {
                    var c = a.getElementAtPoint(b.x, b.y);
                    c && c.name && (q.setStatus(""), "okbutton" === c.name ? ra.authenticate() : (a.close(), N.trigger(s.dropboxConnectCancel)))
                }, a.setText("DROPBOX ://BassoonTracker is not yet connected to DropBox//Do you want to do that now?//(Bassoontracker will only have access/to its own Bassoontracker folder)"), q.setModalElement(a)
            }, a.authenticate = function() {
                dropboxService.clearAccessToken(), dropboxService.authenticate({
                    client_id: "ukk9z4f0nd1xa13",
                    redirect_uri: b
                }, {
                    onComplete: function(a) {},
                    onError: function(a) {}
                })
            }, a.list = function(a, b) {
                dropboxService("files/list_folder", {
                    path: a
                }, function(a) {
                    var c = [];
                    a.entries.forEach(function(a) {
                        if (a[".tag"] && "folder" === a[".tag"]) c.push({
                            title: a.name,
                            url: a.path_lower,
                            children: []
                        });
                        else {
                            var b = Math.floor(a.size / 1e3) + "kb";
                            c.push({
                                title: a.name + " (" + b + ")" || "---",
                                url: a.id,
                                path: a.path_display
                            })
                        }
                    }), b(c)
                })
            }, a.get = function(b, c) {
                a.list(b, c)
            }, a.getFile = function(a, b) {
                dropboxService("files/download", {
                    path: a.url
                }, function(a, c, d) {
                    b(c)
                })
            }, a.putFile = function(a, b, c) {
                var d = {
                    path: a
                };
                "overwrite" === M.dropboxMode ? d.mode = "overwrite" : (d.mode = "add", d.autorename = !0), dropboxService("files/upload", d, b, {
                    onComplete: function(a, b, d) {
                        c && c(a)
                    },
                    onError: function(a, b, d) {
                        c && c(!1)
                    }
                })
            }, a
        }(),
        sa = function() {
            function a(a) {
                k.length ? a && a(k) : c("genres", function(b) {
                    if (b) {
                        var c = {};
                        b.forEach(function(a) {
                            if (a.parent) {
                                var b = {
                                    title: a.name,
                                    count: a.count,
                                    info: a.count + " >",
                                    children: [],
                                    url: "genre/" + a.id
                                };
                                c[a.parent] || (c[a.parent] = []), c[a.parent].push(b)
                            }
                        }), b.forEach(function(a) {
                            if (!a.parent) {
                                var b = {
                                        title: a.name,
                                        children: c[a.id] || []
                                    },
                                    d = 0;
                                b.children.forEach(function(a) {
                                    d += a.count
                                }), b.info = d + " >", k.push(b)
                            }
                        })
                    }
                    a && a(k)
                })
            }

            function b(a) {
                l.length ? a && a(l) : c("artists", function(b) {
                    b && b.forEach(function(a) {
                        var b = {
                            title: a.handle,
                            children: [],
                            info: a.count + " >",
                            url: "artist/" + a.id
                        };
                        l.push(b)
                    }), a && a(l)
                })
            }

            function c(a, b) {
                S.json(i + a, function(a) {
                    b(a)
                })
            }

            function e(a, b) {
                S.json(j + a, function(a) {
                    a && a.modarchive && (a = a.modarchive), b(a)
                })
            }

            function f(a) {
                var b = [];
                return a && a.forEach(function(a) {
                    b.push({
                        title: a.title || "---",
                        url: "https://api.modarchive.org/downloads.php?moduleid=" + a.id,
                        icon: a.format,
                        info: d(a.size)
                    })
                }), b
            }

            function g(a, b) {
                var c = [];
                if (a) {
                    if (a.module) {
                        var d = a.module;
                        d.forEach ? d.forEach(function(a) {
                            c.push({
                                title: a.songtitle || "---",
                                url: a.url,
                                icon: "mod"
                            })
                        }) : c.push({
                            title: d.songtitle || "---",
                            url: d.url,
                            icon: "mod"
                        })
                    }
                    if (a.totalpages) {
                        var e = parseInt(a.totalpages);
                        if (e > 1) {
                            var f = b[0] + "/",
                                g = parseInt(b[1] || 1);
                            isNaN(g) && (g = 1), "artist/" != f && "genre/" != f || (f += b[1] + "/", g = parseInt(b[2] || 1), isNaN(g) && (g = 1)), e > g && (f += g + 1, c.push({
                                title: "... load more ...",
                                children: [],
                                url: f
                            }))
                        }
                    }
                }
                return c
            }
            var h = {},
                i = "http://localhost:3000/";
            i = "https://www.stef.be/bassoontracker/api/ma/";
            var j = "https://www.stef.be/bassoontracker/api/",
                k = [],
                l = [];
            return h.get = function(d, h) {
                var i = d.split("/");
                d = i[0];
                var j = i[1] || "",
                    k = i[2] || "";
                switch (d) {
                    case "genres":
                        a(h);
                        break;
                    case "artists":
                        b(h);
                        break;
                    case "genre":
                        c("genre/" + j, function(a) {
                            h(f(a))
                        });
                        break;
                    case "toprating":
                        k = j || 1, e("toprating/" + k, function(a) {
                            h(g(a, i))
                        });
                        break;
                    case "topreview":
                        k = j || 1, e("topreview/" + k, function(a) {
                            h(g(a, i))
                        });
                        break;
                    case "artist":
                        var l = "artist/" + j;
                        k && (l += "/" + k), c(l, function(a) {
                            h(f(a, i))
                        });
                        break;
                    default:
                        h([])
                }
            }, h
        }(),
        ta = function() {
            function a(a) {
                k.length ? a && a(k) : e("artists", function(b) {
                    b && b.forEach(function(a) {
                        var b = {
                            title: a.handle,
                            info: a.count + " >",
                            url: "artist/" + a.id,
                            children: []
                        };
                        k.push(b)
                    }), a && a(k)
                })
            }

            function b(a) {
                j.length ? a && a(j) : e("genres", function(b) {
                    b && b.forEach(function(a) {
                        var b = {
                            title: a.name,
                            url: "genre/" + a.name,
                            children: [],
                            info: a.count + " >"
                        };
                        j.push(b)
                    }), a && a(j)
                })
            }

            function c(a, b, c) {
                var d = "genre/" + a;
                b && (b = parseInt(b), d += "/" + b), e(d, function(a) {
                    c(f(a))
                })
            }

            function e(a, b) {
                S.json(h + a, function(a) {
                    b(a)
                })
            }

            function f(a, b) {
                var c = [];
                return a && a.forEach(function(a) {
                    var e = d(a.size),
                        f = a.title || "---";
                    b && (f = a[b] + ": " + f), c.push({
                        title: f,
                        url: i + a.id,
                        info: e,
                        icon: a.format
                    })
                }), c
            }
            var g = {},
                h = "https://www.stef.be/bassoontracker/api/mpl/",
                i = "https://www.stef.be/bassoontracker/api/modules.pl/",
                j = [],
                k = [];
            return g.get = function(d, g) {
                var h = d.split("/");
                d = h[0];
                var i = h[1] || "",
                    j = h[2] || "";
                switch (d) {
                    case "genres":
                        b(g);
                        break;
                    case "genre":
                        c(i, j, g);
                        break;
                    case "toprating":
                        j = i || 1, e("toprating/" + j, function(a) {
                            g(f(a, "rate"))
                        });
                        break;
                    case "topscore":
                        j = i || 1, e("topscore/" + j, function(a) {
                            g(f(a, "score"))
                        });
                        break;
                    case "artists":
                        a(g);
                        break;
                    case "artist":
                        var k = "artist/" + i;
                        j && (k += "/" + j), e(k, function(a) {
                            g(f(a))
                        });
                        break;
                    default:
                        g([])
                }
            }, g
        }();
    return {
        init: da.init,
        load: da.load,
        playSong: da.playSong,
        stop: da.stop,
        togglePlay: da.togglePlay,
        isPlaying: da.isPlaying,
        getTrackCount: da.getTrackCount,
        getSong: da.getSong,
        getStateAtTime: da.getStateAtTime,
        setCurrentSongPosition: da.setCurrentSongPosition,
        audio: O
    }
}();