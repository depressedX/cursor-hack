import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/window.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/uri.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/storage/common/storage.js';
import './trustedDomains.js';
import '../common/urlGlob.js';
define(
			de[1292],
			he([1, 0, 7, 75, 3, 9, 5, 21, 1018, 1783]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*window*/,
 w /*lifecycle*/,
 E /*uri*/,
 C /*instantiation*/,
 d /*storage*/,
 m /*trustedDomains*/,
 r /*urlGlob*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$1Xb = e.$ZXb = void 0),
					(e.$2Xb = g),
					(e.$ZXb = (0, C.$Mi)("ITrustedDomainService"));
				let u = class extends w.$1c {
					constructor(o, f) {
						super(), (this.b = o), (this.c = f);
						const b = () =>
							new t.$fgb(i.$Bfb, () => {
								const { defaultTrustedDomains: s, trustedDomains: l } =
									this.b.invokeFunction(m.$XXb);
								return [...s, ...l];
							});
						(this.a = b()),
							this.D(
								this.c.onDidChangeValue(
									d.StorageScope.APPLICATION,
									m.$SXb,
									this.D(new w.$Zc()),
								)(() => {
									this.a?.dispose(), (this.a = b());
								}),
							);
					}
					isValid(o) {
						const { defaultTrustedDomains: f, trustedDomains: b } =
								this.b.invokeFunction(m.$XXb),
							s = [...f, ...b];
						return g(o, s);
					}
				};
				(e.$1Xb = u), (e.$1Xb = u = Ne([j(0, C.$Li), j(1, d.$lq)], u));
				const a = /^localhost(:\d+)?$/i,
					h = /^127.0.0.1(:\d+)?$/;
				function c(p) {
					return a.test(p) || h.test(p);
				}
				function n(p) {
					const o = ["github.com"];
					try {
						const f = typeof p == "string" ? E.URI.parse(p, !0) : p;
						return o.includes(f.authority)
							? f.with({ path: f.path.toLowerCase() }).toString(!0)
							: f.toString(!0);
					} catch {
						return p.toString();
					}
				}
				function g(p, o) {
					if (((p = E.URI.parse(n(p))), (o = o.map(n)), c(p.authority)))
						return !0;
					for (let f = 0; f < o.length; f++)
						if (o[f] === "*" || (0, r.$YXb)(p, o[f])) return !0;
					return !1;
				}
			},
		)
