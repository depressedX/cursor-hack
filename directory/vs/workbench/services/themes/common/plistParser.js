define(de[3711], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Uvc = w);
			var t;
			(function (C) {
				(C[(C.BOM = 65279)] = "BOM"),
					(C[(C.SPACE = 32)] = "SPACE"),
					(C[(C.TAB = 9)] = "TAB"),
					(C[(C.CARRIAGE_RETURN = 13)] = "CARRIAGE_RETURN"),
					(C[(C.LINE_FEED = 10)] = "LINE_FEED"),
					(C[(C.SLASH = 47)] = "SLASH"),
					(C[(C.LESS_THAN = 60)] = "LESS_THAN"),
					(C[(C.QUESTION_MARK = 63)] = "QUESTION_MARK"),
					(C[(C.EXCLAMATION_MARK = 33)] = "EXCLAMATION_MARK");
			})(t || (t = {}));
			var i;
			(function (C) {
				(C[(C.ROOT_STATE = 0)] = "ROOT_STATE"),
					(C[(C.DICT_STATE = 1)] = "DICT_STATE"),
					(C[(C.ARR_STATE = 2)] = "ARR_STATE");
			})(i || (i = {}));
			function w(C) {
				return E(C, null, null);
			}
			function E(C, d, m) {
				const r = C.length;
				let u = 0,
					a = 1,
					h = 0;
				r > 0 && C.charCodeAt(0) === t.BOM && (u = 1);
				function c(q) {
					if (m === null) u = u + q;
					else
						for (; q > 0; )
							C.charCodeAt(u) === t.LINE_FEED
								? (u++, a++, (h = 0))
								: (u++, h++),
								q--;
				}
				function n(q) {
					m === null ? (u = q) : c(q - u);
				}
				function g() {
					for (; u < r; ) {
						const q = C.charCodeAt(u);
						if (
							q !== t.SPACE &&
							q !== t.TAB &&
							q !== t.CARRIAGE_RETURN &&
							q !== t.LINE_FEED
						)
							break;
						c(1);
					}
				}
				function p(q) {
					return C.substr(u, q.length) === q ? (c(q.length), !0) : !1;
				}
				function o(q) {
					const V = C.indexOf(q, u);
					n(V !== -1 ? V + q.length : r);
				}
				function f(q) {
					const V = C.indexOf(q, u);
					if (V !== -1) {
						const G = C.substring(u, V);
						return n(V + q.length), G;
					} else {
						const G = C.substr(u);
						return n(r), G;
					}
				}
				let b = i.ROOT_STATE,
					s = null;
				const l = [],
					y = [];
				let $ = null;
				function v(q, V) {
					l.push(b), y.push(s), (b = q), (s = V);
				}
				function S() {
					if (l.length === 0) return I("illegal state stack");
					(b = l.pop()), (s = y.pop());
				}
				function I(q) {
					throw new Error(
						"Near offset " + u + ": " + q + " ~~~" + C.substr(u, 50) + "~~~",
					);
				}
				const T = {
						enterDict: function () {
							if ($ === null) return I("missing <key>");
							const q = {};
							m !== null && (q[m] = { filename: d, line: a, char: h }),
								(s[$] = q),
								($ = null),
								v(i.DICT_STATE, q);
						},
						enterArray: function () {
							if ($ === null) return I("missing <key>");
							const q = [];
							(s[$] = q), ($ = null), v(i.ARR_STATE, q);
						},
					},
					P = {
						enterDict: function () {
							const q = {};
							m !== null && (q[m] = { filename: d, line: a, char: h }),
								s.push(q),
								v(i.DICT_STATE, q);
						},
						enterArray: function () {
							const q = [];
							s.push(q), v(i.ARR_STATE, q);
						},
					};
				function k() {
					b === i.DICT_STATE
						? T.enterDict()
						: b === i.ARR_STATE
							? P.enterDict()
							: ((s = {}),
								m !== null && (s[m] = { filename: d, line: a, char: h }),
								v(i.DICT_STATE, s));
				}
				function L() {
					if (b === i.DICT_STATE) S();
					else return b === i.ARR_STATE, I("unexpected </dict>");
				}
				function D() {
					b === i.DICT_STATE
						? T.enterArray()
						: b === i.ARR_STATE
							? P.enterArray()
							: ((s = []), v(i.ARR_STATE, s));
				}
				function M() {
					if (b === i.DICT_STATE) return I("unexpected </array>");
					if (b === i.ARR_STATE) S();
					else return I("unexpected </array>");
				}
				function N(q) {
					if (b === i.DICT_STATE) {
						if ($ !== null) return I("too many <key>");
						$ = q;
					} else return b === i.ARR_STATE, I("unexpected <key>");
				}
				function A(q) {
					if (b === i.DICT_STATE) {
						if ($ === null) return I("missing <key>");
						(s[$] = q), ($ = null);
					} else b === i.ARR_STATE ? s.push(q) : (s = q);
				}
				function R(q) {
					if (isNaN(q)) return I("cannot parse float");
					if (b === i.DICT_STATE) {
						if ($ === null) return I("missing <key>");
						(s[$] = q), ($ = null);
					} else b === i.ARR_STATE ? s.push(q) : (s = q);
				}
				function O(q) {
					if (isNaN(q)) return I("cannot parse integer");
					if (b === i.DICT_STATE) {
						if ($ === null) return I("missing <key>");
						(s[$] = q), ($ = null);
					} else b === i.ARR_STATE ? s.push(q) : (s = q);
				}
				function B(q) {
					if (b === i.DICT_STATE) {
						if ($ === null) return I("missing <key>");
						(s[$] = q), ($ = null);
					} else b === i.ARR_STATE ? s.push(q) : (s = q);
				}
				function U(q) {
					if (b === i.DICT_STATE) {
						if ($ === null) return I("missing <key>");
						(s[$] = q), ($ = null);
					} else b === i.ARR_STATE ? s.push(q) : (s = q);
				}
				function z(q) {
					if (b === i.DICT_STATE) {
						if ($ === null) return I("missing <key>");
						(s[$] = q), ($ = null);
					} else b === i.ARR_STATE ? s.push(q) : (s = q);
				}
				function F(q) {
					return q
						.replace(/&#([0-9]+);/g, function (V, G) {
							return String.fromCodePoint(parseInt(G, 10));
						})
						.replace(/&#x([0-9a-f]+);/g, function (V, G) {
							return String.fromCodePoint(parseInt(G, 16));
						})
						.replace(/&amp;|&lt;|&gt;|&quot;|&apos;/g, function (V) {
							switch (V) {
								case "&amp;":
									return "&";
								case "&lt;":
									return "<";
								case "&gt;":
									return ">";
								case "&quot;":
									return '"';
								case "&apos;":
									return "'";
							}
							return V;
						});
				}
				function x() {
					let q = f(">"),
						V = !1;
					return (
						q.charCodeAt(q.length - 1) === t.SLASH &&
							((V = !0), (q = q.substring(0, q.length - 1))),
						{ name: q.trim(), isClosed: V }
					);
				}
				function H(q) {
					if (q.isClosed) return "";
					const V = f("</");
					return o(">"), F(V);
				}
				for (; u < r && (g(), !(u >= r)); ) {
					const q = C.charCodeAt(u);
					if ((c(1), q !== t.LESS_THAN)) return I("expected <");
					if (u >= r) return I("unexpected end of input");
					const V = C.charCodeAt(u);
					if (V === t.QUESTION_MARK) {
						c(1), o("?>");
						continue;
					}
					if (V === t.EXCLAMATION_MARK) {
						if ((c(1), p("--"))) {
							o("-->");
							continue;
						}
						o(">");
						continue;
					}
					if (V === t.SLASH) {
						if ((c(1), g(), p("plist"))) {
							o(">");
							continue;
						}
						if (p("dict")) {
							o(">"), L();
							continue;
						}
						if (p("array")) {
							o(">"), M();
							continue;
						}
						return I("unexpected closed tag");
					}
					const G = x();
					switch (G.name) {
						case "dict":
							k(), G.isClosed && L();
							continue;
						case "array":
							D(), G.isClosed && M();
							continue;
						case "key":
							N(H(G));
							continue;
						case "string":
							A(H(G));
							continue;
						case "real":
							R(parseFloat(H(G)));
							continue;
						case "integer":
							O(parseInt(H(G), 10));
							continue;
						case "date":
							B(new Date(H(G)));
							continue;
						case "data":
							U(H(G));
							continue;
						case "true":
							H(G), z(!0);
							continue;
						case "false":
							H(G), z(!1);
							continue;
					}
					if (!/^plist/.test(G.name))
						return I("unexpected opened tag " + G.name);
				}
				return s;
			}
		}),
		