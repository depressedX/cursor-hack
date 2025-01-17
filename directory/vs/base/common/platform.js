import '../../../require.js';
import '../../../exports.js';
import '../../nls.js';
define(de[12], he([1, 0, 4]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$L =
					e.$K =
					e.$J =
					e.$I =
					e.$H =
					e.OS =
					e.OperatingSystem =
					e.$E =
					e.$D =
					e.$C =
					e.$B =
					e.$A =
					e.Language =
					e.$z =
					e.$y =
					e.$x =
					e.$w =
					e.$v =
					e.$u =
					e.$t =
					e.$s =
					e.$r =
					e.$q =
					e.$p =
					e.$o =
					e.$n =
					e.$m =
					e.$l =
					e.Platform =
					e.$j =
						void 0),
				(e.$k = $),
				(e.$G = k),
				(e.$M = L),
				(t = mt(t)),
				(e.$j = "en");
			let i = !1,
				w = !1,
				E = !1,
				C = !1,
				d = !1,
				m = !1,
				r = !1,
				u = !1,
				a = !1,
				h = !1,
				c,
				n = e.$j,
				g = e.$j,
				p,
				o;
			const f = globalThis;
			let b;
			typeof f.vscode < "u" && typeof f.vscode.process < "u"
				? (b = f.vscode.process)
				: typeof process < "u" &&
					typeof process?.versions?.node == "string" &&
					(b = process);
			const s = typeof b?.versions?.electron == "string",
				l = s && b?.type === "renderer";
			if (typeof b == "object") {
				(i = b.platform === "win32"),
					(w = b.platform === "darwin"),
					(E = b.platform === "linux"),
					(C = E && !!b.env.SNAP && !!b.env.SNAP_REVISION),
					(r = s),
					(a = !!b.env.CI || !!b.env.BUILD_ARTIFACTSTAGINGDIRECTORY),
					(c = e.$j),
					(n = e.$j);
				const D = b.env.VSCODE_NLS_CONFIG;
				if (D)
					try {
						const M = JSON.parse(D);
						(c = M.userLocale),
							(g = M.osLocale),
							(n = M.resolvedLanguage || e.$j),
							(p = M.languagePack?.translationsConfigFile);
					} catch {}
				d = !0;
			} else
				typeof navigator == "object" && !l
					? ((o = navigator.userAgent),
						(i = o.indexOf("Windows") >= 0),
						(w = o.indexOf("Macintosh") >= 0),
						(u =
							(o.indexOf("Macintosh") >= 0 ||
								o.indexOf("iPad") >= 0 ||
								o.indexOf("iPhone") >= 0) &&
							!!navigator.maxTouchPoints &&
							navigator.maxTouchPoints > 0),
						(E = o.indexOf("Linux") >= 0),
						(h = o?.indexOf("Mobi") >= 0),
						(m = !0),
						(n = t.getNLSLanguage() || e.$j),
						(c = navigator.language.toLowerCase()),
						(g = c))
					: console.error("Unable to resolve platform.");
			var y;
			(function (D) {
				(D[(D.Web = 0)] = "Web"),
					(D[(D.Mac = 1)] = "Mac"),
					(D[(D.Linux = 2)] = "Linux"),
					(D[(D.Windows = 3)] = "Windows");
			})(y || (e.Platform = y = {}));
			function $(D) {
				switch (D) {
					case y.Web:
						return "Web";
					case y.Mac:
						return "Mac";
					case y.Linux:
						return "Linux";
					case y.Windows:
						return "Windows";
				}
			}
			let v = y.Web;
			w ? (v = y.Mac) : i ? (v = y.Windows) : E && (v = y.Linux),
				(e.$l = i),
				(e.$m = w),
				(e.$n = E),
				(e.$o = C),
				(e.$p = d),
				(e.$q = r),
				(e.$r = m),
				(e.$s = m && typeof f.importScripts == "function"),
				(e.$t = e.$s ? f.origin : void 0),
				(e.$u = u),
				(e.$v = h),
				(e.$w = a),
				(e.$x = v),
				(e.$y = o),
				(e.$z = n);
			var S;
			(function (D) {
				function M() {
					return e.$z;
				}
				D.value = M;
				function N() {
					return e.$z.length === 2
						? e.$z === "en"
						: e.$z.length >= 3
							? e.$z[0] === "e" && e.$z[1] === "n" && e.$z[2] === "-"
							: !1;
				}
				D.isDefaultVariant = N;
				function A() {
					return e.$z === "en";
				}
				D.isDefault = A;
			})(S || (e.Language = S = {})),
				(e.$A = c),
				(e.$B = g),
				(e.$C = p),
				(e.$D = typeof f.postMessage == "function" && !f.importScripts),
				(e.$E = (() => {
					if (e.$D) {
						const D = [];
						f.addEventListener("message", (N) => {
							if (N.data && N.data.vscodeScheduleAsyncWork)
								for (let A = 0, R = D.length; A < R; A++) {
									const O = D[A];
									if (O.id === N.data.vscodeScheduleAsyncWork) {
										D.splice(A, 1), O.callback();
										return;
									}
								}
						});
						let M = 0;
						return (N) => {
							const A = ++M;
							D.push({ id: A, callback: N }),
								f.postMessage({ vscodeScheduleAsyncWork: A }, "*");
						};
					}
					return (D) => setTimeout(D);
				})());
			var I;
			(function (D) {
				(D[(D.Windows = 1)] = "Windows"),
					(D[(D.Macintosh = 2)] = "Macintosh"),
					(D[(D.Linux = 3)] = "Linux");
			})(I || (e.OperatingSystem = I = {})),
				(e.OS = w || u ? I.Macintosh : i ? I.Windows : I.Linux);
			let T = !0,
				P = !1;
			function k() {
				if (!P) {
					P = !0;
					const D = new Uint8Array(2);
					(D[0] = 1), (D[1] = 2), (T = new Uint16Array(D.buffer)[0] === 513);
				}
				return T;
			}
			(e.$H = !!(e.$y && e.$y.indexOf("Chrome") >= 0)),
				(e.$I = !!(e.$y && e.$y.indexOf("Firefox") >= 0)),
				(e.$J = !!(!e.$H && e.$y && e.$y.indexOf("Safari") >= 0)),
				(e.$K = !!(e.$y && e.$y.indexOf("Edg/") >= 0)),
				(e.$L = !!(e.$y && e.$y.indexOf("Android") >= 0));
			function L(D) {
				return parseFloat(D) >= 20;
			}
		}),
		