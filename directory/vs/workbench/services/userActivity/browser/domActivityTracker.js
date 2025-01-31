import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/window.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
define(de[3747], he([1, 0, 7, 75, 6, 3]), function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*window*/,
 w /*event*/,
 E /*lifecycle*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$OAc = void 0),
				(t = mt(t));
			const C = 3e4,
				d = 2,
				m = { passive: !0, capture: !0 };
			class r extends E.$1c {
				constructor(a) {
					super();
					let h = d;
					const c = this.D(new t.$jgb()),
						n = this.D(new E.$2c());
					n.value = a.markActive();
					const g = () => {
							++h === d && (n.clear(), c.cancel());
						},
						p = (o) => {
							h === d && ((n.value = a.markActive()), c.cancelAndSet(g, C, o)),
								(h = 0);
						};
					this.D(
						w.Event.runAndSubscribe(
							t.onDidRegisterWindow,
							({ window: o, disposables: f }) => {
								f.add(t.$0fb(o.document, "touchstart", () => p(o), m)),
									f.add(t.$0fb(o.document, "mousedown", () => p(o), m)),
									f.add(t.$0fb(o.document, "keydown", () => p(o), m));
							},
							{ window: i.$Bfb, disposables: this.B },
						),
					),
						p(i.$Bfb);
				}
			}
			e.$OAc = r;
		})
