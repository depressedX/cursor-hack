import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/ui/button/button.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/theme/browser/defaultStyles.js';
import '../common/commentCommandIds.js';
define(
			de[1239],
			he([1, 0, 183, 3, 106, 1238]),
			function (ce /*require*/,
 e /*exports*/,
 t /*button*/,
 i /*lifecycle*/,
 w /*defaultStyles*/,
 E /*commentCommandIds*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$82b = void 0);
				class C {
					constructor(m, r, u, a, h) {
						(this.e = m),
							(this.f = r),
							(this.g = u),
							(this.h = a),
							(this.i = h),
							(this.a = []),
							(this.c = new i.$Zc()),
							(this.d = []);
					}
					setActions(m, r = !1) {
						this.c.clear(), this.a.forEach((h) => h.remove()), (this.a = []);
						const u = m.getActions({ shouldForwardArgs: !0 });
						let a = !r;
						for (const h of u) {
							const [, c] = h;
							this.d = c;
							for (const n of c) {
								let g = this.e.lookupKeybinding(n.id, this.f)?.getLabel();
								!g &&
									a &&
									(g = this.e
										.lookupKeybinding(E.CommentCommandId.Submit, this.f)
										?.getLabel());
								const p = g ? `${n.label} (${g})` : n.label,
									o = new t.$oob(this.g, {
										secondary: !a,
										title: p,
										...w.$lyb,
									});
								if (
									((a = !1),
									this.a.push(o.element),
									this.c.add(o),
									this.c.add(o.onDidClick(() => this.h(n))),
									(o.enabled = n.enabled),
									(o.label = n.label),
									this.i !== void 0 && this.a.length >= this.i)
								) {
									console.warn(
										"An extension has contributed more than the allowable number of actions to a comments menu.",
									);
									return;
								}
							}
						}
					}
					triggerDefaultAction() {
						if (this.d.length) {
							const m = this.d[0];
							if (m.enabled) return this.h(m);
						}
					}
					dispose() {
						this.c.dispose();
					}
				}
				e.$82b = C;
			},
		),
		