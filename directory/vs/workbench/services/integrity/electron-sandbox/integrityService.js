import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/severity.js';
import '../../../../base/common/uri.js';
import '../common/integrity.js';
import '../../lifecycle/common/lifecycle.js';
import '../../../../platform/product/common/productService.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../base/common/network.js';
import '../../../../platform/checksum/common/checksumService.js';
import '../../../../platform/log/common/log.js';
define(
		de[3454],
		he([1, 0, 4, 111, 9, 1297, 52, 62, 40, 21, 20, 41, 23, 1600, 34]),
		function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*severity*/,
 w /*uri*/,
 E /*integrity*/,
 C /*lifecycle*/,
 d /*productService*/,
 m /*notification*/,
 r /*storage*/,
 u /*extensions*/,
 a /*opener*/,
 h /*network*/,
 c /*checksumService*/,
 n /*log*/) {
			"use strict";
			var g;
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Vdd = void 0),
				(i = xi(i));
			class p {
				static {
					this.a = "integrityService";
				}
				constructor(b) {
					(this.c = b), (this.b = this.d());
				}
				d() {
					const b = this.c.get(p.a, r.StorageScope.APPLICATION);
					if (!b) return null;
					try {
						return JSON.parse(b);
					} catch {
						return null;
					}
				}
				get() {
					return this.b;
				}
				set(b) {
					(this.b = b),
						this.c.store(
							p.a,
							JSON.stringify(this.b),
							r.StorageScope.APPLICATION,
							r.StorageTarget.MACHINE,
						);
				}
			}
			let o = (g = class {
				isPure() {
					return this.b;
				}
				constructor(b, s, l, y, $, v, S) {
					(this.c = b),
						(this.d = s),
						(this.e = l),
						(this.f = y),
						(this.g = $),
						(this.h = v),
						(this.j = S),
						(this.a = new p(this.d)),
						(this.b = this.l()),
						this.k();
				}
				async k() {
					const { isPure: b } = await this.isPure();
					if (b) return;
					this.j.warn(`

----------------------------------------------
***	Installation has been modified on disk ***
----------------------------------------------

`);
					const s = this.a.get();
					(s?.dontShowPrompt && s.commit === this.g.commit) || this.o();
				}
				async l() {
					const b = this.g.checksums || {};
					await this.e.when(C.LifecyclePhase.Eventually);
					const s = await Promise.all(
						Object.keys(b).map((y) => this.m(y, b[y])),
					);
					let l = !0;
					for (let y = 0, $ = s.length; y < $; y++)
						if (!s[y].isPure) {
							l = !1;
							break;
						}
					return { isPure: l, proof: s };
				}
				async m(b, s) {
					const l = h.$7g.asFileUri(b);
					try {
						const y = await this.h.checksum(l);
						return g.n(l, y, s);
					} catch {
						return g.n(l, "", s);
					}
				}
				static n(b, s, l) {
					return { uri: b, actual: s, expected: l, isPure: s === l };
				}
				o() {
					const b = this.g.checksumFailMoreInfoUrl,
						s = (0, t.localize)(12482, null, this.g.nameShort);
					b
						? this.c.prompt(
								i.default.Warning,
								s,
								[
									{
										label: (0, t.localize)(12483, null),
										run: () => this.f.open(w.URI.parse(b)),
									},
									{
										label: (0, t.localize)(12484, null),
										isSecondary: !0,
										run: () =>
											this.a.set({ dontShowPrompt: !0, commit: this.g.commit }),
									},
								],
								{ sticky: !0, priority: m.NotificationPriority.URGENT },
							)
						: this.c.notify({
								severity: i.default.Warning,
								message: s,
								sticky: !0,
								priority: m.NotificationPriority.URGENT,
							});
				}
			});
			(e.$Vdd = o),
				(e.$Vdd =
					o =
					g =
						Ne(
							[
								j(0, m.$4N),
								j(1, r.$lq),
								j(2, C.$n6),
								j(3, a.$7rb),
								j(4, d.$Bk),
								j(5, c.$f9c),
								j(6, n.$ik),
							],
							o,
						)),
				(0, u.$lK)(E.$k4c, o, u.InstantiationType.Delayed);
		},
	)
