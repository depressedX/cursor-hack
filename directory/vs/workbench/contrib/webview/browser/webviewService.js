import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/instantiation/common/instantiation.js';
import './themeing.js';
import './webviewElement.js';
import './overlayWebview.js';
define(
			de[3719],
			he([1, 0, 6, 3, 5, 3718, 1805, 3406]),
			function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*lifecycle*/,
 w /*instantiation*/,
 E /*themeing*/,
 C /*webviewElement*/,
 d /*overlayWebview*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$h6c = void 0);
				let m = class extends i.$1c {
					constructor(u) {
						super(),
							(this.b = u),
							(this.g = new Set()),
							(this.h = this.D(new t.$re())),
							(this.onDidChangeActiveWebview = this.h.event),
							(this.a = this.b.createInstance(E.$b6c));
					}
					get activeWebview() {
						return this.c;
					}
					f(u) {
						u !== this.c && ((this.c = u), this.h.fire(u));
					}
					get webviews() {
						return this.g.values();
					}
					createWebviewElement(u) {
						const a = this.b.createInstance(C.$f6c, u, this.a);
						return this.j(a), a;
					}
					createWebviewOverlay(u) {
						const a = this.b.createInstance(d.$g6c, u);
						return this.j(a), a;
					}
					j(u) {
						this.g.add(u);
						const a = new i.$Zc();
						a.add(
							u.onDidFocus(() => {
								this.f(u);
							}),
						);
						const h = () => {
							this.c === u && this.f(void 0);
						};
						a.add(u.onDidBlur(h)),
							a.add(
								u.onDidDispose(() => {
									h(), a.dispose(), this.g.delete(u);
								}),
							);
					}
				};
				(e.$h6c = m), (e.$h6c = m = Ne([j(0, w.$Li)], m));
			},
		),
		