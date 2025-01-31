import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/actions.js';
import '../../../../base/common/uri.js';
import '../../../../base/browser/ui/actionbar/actionViewItems.js';
define(
			de[3031],
			he([1, 0, 4, 7, 50, 9, 198]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*dom*/,
 w /*actions*/,
 E /*uri*/,
 C /*actionViewItems*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$q3b = e.$p3b = e.$o3b = void 0),
					(t = mt(t)),
					(i = mt(i));
				class d extends w.$rj {
					static {
						this.ID = "toolbar.toggle.pickReactions";
					}
					constructor(a, h) {
						super(d.ID, h || t.localize(5102, null), "toggle-reactions", !0),
							(this.a = []),
							(this.b = a);
					}
					run() {
						return this.b(), Promise.resolve(!0);
					}
					get menuActions() {
						return this.a;
					}
					set menuActions(a) {
						this.a = a;
					}
				}
				e.$o3b = d;
				class m extends C.$_ib {
					constructor(a) {
						super(null, a, {});
					}
					u() {
						if (!this.I) return;
						const a = this.action;
						if ((a.class && this.I.classList.add(a.class), a.icon)) {
							const h = i.$fhb(this.I, i.$(".reaction-icon")),
								c = E.URI.revive(a.icon);
							h.style.backgroundImage = i.$vhb(c);
						} else {
							const h = i.$fhb(this.I, i.$("span.reaction-label"));
							h.innerText = a.label;
						}
						if (a.count) {
							const h = i.$fhb(this.I, i.$("span.reaction-count"));
							h.innerText = `${a.count}`;
						}
					}
					z() {
						const a = this.action,
							h = a.enabled ? t.localize(5103, null) : "";
						if (a.count === void 0) return t.localize(5104, null, h, a.label);
						if (a.reactors === void 0 || a.reactors.length === 0) {
							if (a.count === 1) return t.localize(5105, null, h, a.label);
							if (a.count > 1)
								return t.localize(5106, null, h, a.count, a.label);
						} else {
							if (a.reactors.length <= 10 && a.reactors.length === a.count)
								return t.localize(
									5107,
									null,
									h,
									a.reactors.join(", "),
									a.label,
								);
							if (a.count > 1) {
								const c = a.reactors.slice(0, 10);
								return t.localize(
									5108,
									null,
									h,
									c.join(", "),
									a.count - c.length,
									a.label,
								);
							}
						}
					}
				}
				e.$p3b = m;
				class r extends w.$rj {
					static {
						this.ID = "toolbar.toggle.reaction";
					}
					constructor(a, h = "", c = "", n = !0, g, p, o, f) {
						super(r.ID, h, c, n, g),
							(this.reactors = p),
							(this.icon = o),
							(this.count = f);
					}
				}
				e.$q3b = r;
			},
		)
