import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../services/ai/browser/modalService.js';
define(de[3228], he([1, 0, 11, 22, 25, 445]), function (ce /*require*/,
 e /*exports*/,
 t /*actions*/,
 i /*files*/,
 w /*workspace*/,
 E /*modalService*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Efd = e.$Dfd = void 0);
			class C extends t.$3X {
				static {
					this.LABEL = "Start Project Pane";
				}
				constructor() {
					super({
						id: "aiproject.action.startProjectPane",
						title: {
							value: "Start Project Pane",
							original: "Start Project Pane",
						},
						f1: !0,
					});
				}
				async run(r, ...u) {
					if (u.length < 1) return;
					r.get(E.$68b).render(u[0]);
				}
			}
			e.$Dfd = C;
			class d extends t.$3X {
				static {
					this.LABEL = "Retry Project Pane";
				}
				constructor() {
					super({
						id: "aiproject.action.retryProjectPane",
						title: {
							value: "Retry Project Pane",
							original: "Retry Project Pane",
						},
						f1: !0,
					});
				}
				async run(r, ...u) {
					if (u.length < 1) return;
					const a = r.get(i.$ll),
						c = r.get(w.$Vi).getWorkspace().folders[0].uri;
					for (const g of (await a.resolve(c)).children) a.del(g.resource);
					r.get(E.$68b).render(u[0]);
				}
			}
			(e.$Efd = d), (0, t.$4X)(C), (0, t.$4X)(d);
		})
