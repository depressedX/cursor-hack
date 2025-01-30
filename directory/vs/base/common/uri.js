import '../../../require.js';
import '../../../exports.js';
import './charCode.js';
import './marshallingIds.js';
import './path.js';
import './platform.js';
define(de[9], he([1, 0, 120, 221, 54, 12]), function (ce /*require*/,
 e /*exports*/,
 t /*charCode*/,
 i /*marshallingIds*/,
 w /*path*/,
 E /*platform*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.URI = void 0),
				(e.$Ac = p),
				(e.$Bc = o),
				(e.$Cc = $),
				(w = mt(w));
			const C = /^\w[\w\d+.-]*$/,
				d = /^\//,
				m = /^\/\//;
			function r(P, k) {
				if (!P.scheme && k)
					throw new Error(
						`[UriError]: Scheme is missing: {scheme: "", authority: "${P.authority}", path: "${P.path}", query: "${P.query}", fragment: "${P.fragment}"}`,
					);
				if (P.scheme && !C.test(P.scheme))
					throw new Error("[UriError]: Scheme contains illegal characters.");
				if (P.path) {
					if (P.authority) {
						if (!d.test(P.path))
							throw new Error(
								'[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character',
							);
					} else if (m.test(P.path))
						throw new Error(
							'[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")',
						);
				}
			}
			function u(P, k) {
				return !P && !k ? "file" : P;
			}
			function a(P, k) {
				switch (P) {
					case "https":
					case "http":
					case "file":
						k ? k[0] !== c && (k = c + k) : (k = c);
						break;
				}
				return k;
			}
			const h = "",
				c = "/",
				n = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
			class g {
				static isUri(k) {
					return k instanceof g
						? !0
						: k
							? typeof k.authority == "string" &&
								typeof k.fragment == "string" &&
								typeof k.path == "string" &&
								typeof k.query == "string" &&
								typeof k.scheme == "string" &&
								typeof k.fsPath == "string" &&
								typeof k.with == "function" &&
								typeof k.toString == "function"
							: !1;
				}
				constructor(k, L, D, M, N, A = !1) {
					typeof k == "object"
						? ((this.scheme = k.scheme || h),
							(this.authority = k.authority || h),
							(this.path = k.path || h),
							(this.query = k.query || h),
							(this.fragment = k.fragment || h))
						: ((this.scheme = u(k, A)),
							(this.authority = L || h),
							(this.path = a(this.scheme, D || h)),
							(this.query = M || h),
							(this.fragment = N || h),
							r(this, A));
				}
				get fsPath() {
					return $(this, !1);
				}
				with(k) {
					if (!k) return this;
					let { scheme: L, authority: D, path: M, query: N, fragment: A } = k;
					return (
						L === void 0 ? (L = this.scheme) : L === null && (L = h),
						D === void 0 ? (D = this.authority) : D === null && (D = h),
						M === void 0 ? (M = this.path) : M === null && (M = h),
						N === void 0 ? (N = this.query) : N === null && (N = h),
						A === void 0 ? (A = this.fragment) : A === null && (A = h),
						L === this.scheme &&
						D === this.authority &&
						M === this.path &&
						N === this.query &&
						A === this.fragment
							? this
							: new b(L, D, M, N, A)
					);
				}
				static parse(k, L = !1) {
					const D = n.exec(k);
					return D
						? new b(
								D[2] || h,
								T(D[4] || h),
								T(D[5] || h),
								T(D[7] || h),
								T(D[9] || h),
								L,
							)
						: new b(h, h, h, h, h);
				}
				static file(k) {
					let L = h;
					if ((E.$l && (k = k.replace(/\\/g, c)), k[0] === c && k[1] === c)) {
						const D = k.indexOf(c, 2);
						D === -1
							? ((L = k.substring(2)), (k = c))
							: ((L = k.substring(2, D)), (k = k.substring(D) || c));
					}
					return new b("file", L, k, h, h);
				}
				static from(k, L) {
					return new b(k.scheme, k.authority, k.path, k.query, k.fragment, L);
				}
				static joinPath(k, ...L) {
					if (!k.path)
						throw new Error(
							"[UriError]: cannot call joinPath on URI without path",
						);
					let D;
					return (
						E.$l && k.scheme === "file"
							? (D = g.file(w.$kc.join($(k, !0), ...L)).path)
							: (D = w.$lc.join(k.path, ...L)),
						k.with({ path: D })
					);
				}
				toString(k = !1) {
					return v(this, k);
				}
				toJSON() {
					return this;
				}
				static revive(k) {
					if (k) {
						if (k instanceof g) return k;
						{
							const L = new b(k);
							return (
								(L._formatted = k.external ?? null),
								(L._fsPath = k._sep === f ? (k.fsPath ?? null) : null),
								L
							);
						}
					} else return k;
				}
				[Symbol.for("debug.description")]() {
					return `URI(${this.toString()})`;
				}
			}
			e.URI = g;
			function p(P, k) {
				return (
					P.path === k.path &&
					(P.scheme ?? "") === (k.scheme ?? "") &&
					(P.query ?? "") === (k.query ?? "") &&
					(P.fragment ?? "") === (k.fragment ?? "")
				);
			}
			function o(P) {
				return !P || typeof P != "object"
					? !1
					: typeof P.scheme == "string" &&
							(typeof P.authority == "string" || typeof P.authority > "u") &&
							(typeof P.path == "string" || typeof P.path > "u") &&
							(typeof P.query == "string" || typeof P.query > "u") &&
							(typeof P.fragment == "string" || typeof P.fragment > "u");
			}
			const f = E.$l ? 1 : void 0;
			class b extends g {
				constructor() {
					super(...arguments), (this._formatted = null), (this._fsPath = null);
				}
				get fsPath() {
					return this._fsPath || (this._fsPath = $(this, !1)), this._fsPath;
				}
				toString(k = !1) {
					return k
						? v(this, !0)
						: (this._formatted || (this._formatted = v(this, !1)),
							this._formatted);
				}
				toJSON() {
					const k = { $mid: i.MarshalledId.Uri };
					return (
						this._fsPath && ((k.fsPath = this._fsPath), (k._sep = f)),
						this._formatted && (k.external = this._formatted),
						this.path && (k.path = this.path),
						this.scheme && (k.scheme = this.scheme),
						this.authority && (k.authority = this.authority),
						this.query && (k.query = this.query),
						this.fragment && (k.fragment = this.fragment),
						k
					);
				}
			}
			const s = {
				[t.CharCode.Colon]: "%3A",
				[t.CharCode.Slash]: "%2F",
				[t.CharCode.QuestionMark]: "%3F",
				[t.CharCode.Hash]: "%23",
				[t.CharCode.OpenSquareBracket]: "%5B",
				[t.CharCode.CloseSquareBracket]: "%5D",
				[t.CharCode.AtSign]: "%40",
				[t.CharCode.ExclamationMark]: "%21",
				[t.CharCode.DollarSign]: "%24",
				[t.CharCode.Ampersand]: "%26",
				[t.CharCode.SingleQuote]: "%27",
				[t.CharCode.OpenParen]: "%28",
				[t.CharCode.CloseParen]: "%29",
				[t.CharCode.Asterisk]: "%2A",
				[t.CharCode.Plus]: "%2B",
				[t.CharCode.Comma]: "%2C",
				[t.CharCode.Semicolon]: "%3B",
				[t.CharCode.Equals]: "%3D",
				[t.CharCode.Space]: "%20",
			};
			function l(P, k, L) {
				let D,
					M = -1;
				for (let N = 0; N < P.length; N++) {
					const A = P.charCodeAt(N);
					if (
						(A >= t.CharCode.a && A <= t.CharCode.z) ||
						(A >= t.CharCode.A && A <= t.CharCode.Z) ||
						(A >= t.CharCode.Digit0 && A <= t.CharCode.Digit9) ||
						A === t.CharCode.Dash ||
						A === t.CharCode.Period ||
						A === t.CharCode.Underline ||
						A === t.CharCode.Tilde ||
						(k && A === t.CharCode.Slash) ||
						(L && A === t.CharCode.OpenSquareBracket) ||
						(L && A === t.CharCode.CloseSquareBracket) ||
						(L && A === t.CharCode.Colon)
					)
						M !== -1 &&
							((D += encodeURIComponent(P.substring(M, N))), (M = -1)),
							D !== void 0 && (D += P.charAt(N));
					else {
						D === void 0 && (D = P.substr(0, N));
						const R = s[A];
						R !== void 0
							? (M !== -1 &&
									((D += encodeURIComponent(P.substring(M, N))), (M = -1)),
								(D += R))
							: M === -1 && (M = N);
					}
				}
				return (
					M !== -1 && (D += encodeURIComponent(P.substring(M))),
					D !== void 0 ? D : P
				);
			}
			function y(P) {
				let k;
				for (let L = 0; L < P.length; L++) {
					const D = P.charCodeAt(L);
					D === t.CharCode.Hash || D === t.CharCode.QuestionMark
						? (k === void 0 && (k = P.substr(0, L)), (k += s[D]))
						: k !== void 0 && (k += P[L]);
				}
				return k !== void 0 ? k : P;
			}
			function $(P, k) {
				let L;
				return (
					P.authority && P.path.length > 1 && P.scheme === "file"
						? (L = `//${P.authority}${P.path}`)
						: P.path.charCodeAt(0) === t.CharCode.Slash &&
								((P.path.charCodeAt(1) >= t.CharCode.A &&
									P.path.charCodeAt(1) <= t.CharCode.Z) ||
									(P.path.charCodeAt(1) >= t.CharCode.a &&
										P.path.charCodeAt(1) <= t.CharCode.z)) &&
								P.path.charCodeAt(2) === t.CharCode.Colon
							? k
								? (L = P.path.substr(1))
								: (L = P.path[1].toLowerCase() + P.path.substr(2))
							: (L = P.path),
					E.$l && (L = L.replace(/\//g, "\\")),
					L
				);
			}
			function v(P, k) {
				const L = k ? y : l;
				let D = "",
					{ scheme: M, authority: N, path: A, query: R, fragment: O } = P;
				if (
					(M && ((D += M), (D += ":")),
					(N || M === "file") && ((D += c), (D += c)),
					N)
				) {
					let B = N.indexOf("@");
					if (B !== -1) {
						const U = N.substr(0, B);
						(N = N.substr(B + 1)),
							(B = U.lastIndexOf(":")),
							B === -1
								? (D += L(U, !1, !1))
								: ((D += L(U.substr(0, B), !1, !1)),
									(D += ":"),
									(D += L(U.substr(B + 1), !1, !0))),
							(D += "@");
					}
					(N = N.toLowerCase()),
						(B = N.lastIndexOf(":")),
						B === -1
							? (D += L(N, !1, !0))
							: ((D += L(N.substr(0, B), !1, !0)), (D += N.substr(B)));
				}
				if (A) {
					if (
						A.length >= 3 &&
						A.charCodeAt(0) === t.CharCode.Slash &&
						A.charCodeAt(2) === t.CharCode.Colon
					) {
						const B = A.charCodeAt(1);
						B >= t.CharCode.A &&
							B <= t.CharCode.Z &&
							(A = `/${String.fromCharCode(B + 32)}:${A.substr(3)}`);
					} else if (A.length >= 2 && A.charCodeAt(1) === t.CharCode.Colon) {
						const B = A.charCodeAt(0);
						B >= t.CharCode.A &&
							B <= t.CharCode.Z &&
							(A = `${String.fromCharCode(B + 32)}:${A.substr(2)}`);
					}
					D += L(A, !0, !1);
				}
				return (
					R && ((D += "?"), (D += L(R, !1, !1))),
					O && ((D += "#"), (D += k ? O : l(O, !1, !1))),
					D
				);
			}
			function S(P) {
				try {
					return decodeURIComponent(P);
				} catch {
					return P.length > 3 ? P.substr(0, 3) + S(P.substr(3)) : P;
				}
			}
			const I = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
			function T(P) {
				return P.match(I) ? P.replace(I, (k) => S(k)) : P;
			}
		}),
		