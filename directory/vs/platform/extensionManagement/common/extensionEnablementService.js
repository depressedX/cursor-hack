import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/types.js';
import './extensionManagement.js';
import './extensionManagementUtil.js';
import '../../storage/common/storage.js';
define(
			de[959],
			he([1, 0, 6, 3, 28, 119, 154, 21]),
			function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*lifecycle*/,
 w /*types*/,
 E /*extensionManagement*/,
 C /*extensionManagementUtil*/,
 d /*storage*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$uwc = e.$twc = void 0);
				let m = class extends i.$1c {
					constructor(a, h) {
						super(),
							(this.a = new t.$re()),
							(this.onDidChangeEnablement = this.a.event),
							(this.b = this.D(new r(a))),
							this.D(
								this.b.onDidChange((c) =>
									this.a.fire({ extensions: c, source: "storage" }),
								),
							),
							this.D(
								h.onDidInstallExtensions((c) =>
									c.forEach(({ local: n, operation: g }) => {
										n &&
											g === E.InstallOperation.Migrate &&
											this.f(n.identifier);
									}),
								),
							);
					}
					async enableExtension(a, h) {
						return this.f(a)
							? (this.a.fire({ extensions: [a], source: h }), !0)
							: !1;
					}
					async disableExtension(a, h) {
						return this.c(a)
							? (this.a.fire({ extensions: [a], source: h }), !0)
							: !1;
					}
					getDisabledExtensions() {
						return this.h(E.$Ip);
					}
					async getDisabledExtensionsAsync() {
						return this.getDisabledExtensions();
					}
					c(a) {
						const h = this.getDisabledExtensions();
						return h.every((c) => !(0, C.$7p)(c, a))
							? (h.push(a), this.g(h), !0)
							: !1;
					}
					f(a) {
						const h = this.getDisabledExtensions();
						for (let c = 0; c < h.length; c++) {
							const n = h[c];
							if ((0, C.$7p)(n, a)) return h.splice(c, 1), this.g(h), !0;
						}
						return !1;
					}
					g(a) {
						this.j(E.$Ip, a);
					}
					h(a) {
						return this.b.get(a, d.StorageScope.PROFILE);
					}
					j(a, h) {
						this.b.set(a, h, d.StorageScope.PROFILE);
					}
				};
				(e.$twc = m), (e.$twc = m = Ne([j(0, d.$lq), j(1, E.$Hp)], m));
				class r extends i.$1c {
					constructor(a) {
						super(),
							(this.c = a),
							(this.a = Object.create(null)),
							(this.b = this.D(new t.$re())),
							(this.onDidChange = this.b.event),
							this.D(
								a.onDidChangeValue(
									d.StorageScope.PROFILE,
									void 0,
									this.D(new i.$Zc()),
								)((h) => this.f(h)),
							);
					}
					get(a, h) {
						let c;
						return (
							h === d.StorageScope.PROFILE
								? ((0, w.$ug)(this.a[a]) && (this.a[a] = this.g(a, h)),
									(c = this.a[a]))
								: (c = this.g(a, h)),
							JSON.parse(c)
						);
					}
					set(a, h, c) {
						const n = JSON.stringify(
							h.map(({ id: p, uuid: o }) => ({ id: p, uuid: o })),
						);
						this.g(a, c) !== n &&
							(c === d.StorageScope.PROFILE &&
								(h.length ? (this.a[a] = n) : delete this.a[a]),
							this.h(a, h.length ? n : void 0, c));
					}
					f(a) {
						if (
							!(0, w.$ug)(this.a[a.key]) &&
							this.g(a.key, a.scope) !== this.a[a.key]
						) {
							const c = this.get(a.key, a.scope);
							delete this.a[a.key];
							const n = this.get(a.key, a.scope),
								g = c.filter((o) => !n.some((f) => (0, C.$7p)(o, f))),
								p = n.filter((o) => !c.some((f) => (0, C.$7p)(f, o)));
							(g.length || p.length) && this.b.fire([...g, ...p]);
						}
					}
					g(a, h) {
						return this.c.get(a, h, "[]");
					}
					h(a, h, c) {
						h
							? this.c.store(a, h, c, d.StorageTarget.MACHINE)
							: this.c.remove(a, c);
					}
				}
				e.$uwc = r;
			},
		)
