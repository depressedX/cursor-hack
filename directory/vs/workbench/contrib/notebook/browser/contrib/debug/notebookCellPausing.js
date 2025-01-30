import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/common/async.js';
import '../../../../../../base/common/lifecycle.js';
import '../../../../../../base/common/uri.js';
import '../../../../../../platform/registry/common/platform.js';
import '../../../../../common/contributions.js';
import '../../../../debug/common/debug.js';
import '../../../common/notebookCommon.js';
import '../../../common/notebookExecutionService.js';
import '../../../common/notebookExecutionStateService.js';
import '../../../../../services/lifecycle/common/lifecycle.js';
define(
			de[3468],
			he([1, 0, 15, 3, 9, 30, 55, 112, 70, 611, 190, 52]),
			function (ce /*require*/,
 e /*exports*/,
 t /*async*/,
 i /*lifecycle*/,
 w /*uri*/,
 E /*platform*/,
 C /*contributions*/,
 d /*debug*/,
 m /*notebookCommon*/,
 r /*notebookExecutionService*/,
 u /*notebookExecutionStateService*/,
 a /*lifecycle*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let h = class extends i.$1c {
					constructor(n, g) {
						super(),
							(this.c = n),
							(this.f = g),
							(this.a = new Set()),
							this.D(
								n.getModel().onDidChangeCallStack(() => {
									this.g(!0), this.b.schedule();
								}),
							),
							(this.b = this.D(new t.$Yh(() => this.g(!1), 2e3)));
					}
					async g(n) {
						const g = new Set();
						for (const p of this.c.getModel().getSessions())
							for (const o of p.getAllThreads()) {
								let f = o.getCallStack();
								n && !f.length && (f = o.getStaleCallStack()),
									f.forEach((b) => {
										m.CellUri.parse(b.source.uri) &&
											(g.add(b.source.uri.toString()),
											this.h(b.source.uri, !0));
									});
							}
						for (const p of this.a)
							g.has(p) || (this.h(w.URI.parse(p), !1), this.a.delete(p));
						g.forEach((p) => this.a.add(p));
					}
					h(n, g) {
						if (m.CellUri.parse(n)) {
							const o = this.f.getCellExecution(n);
							o &&
								(o.isPaused !== g || !o.didPause) &&
								o.update([
									{
										editType: r.CellExecutionUpdateType.ExecutionState,
										didPause: !0,
										isPaused: g,
									},
								]);
						}
					}
				};
				(h = Ne([j(0, d.$75), j(1, u.$d6)], h)),
					E.$Io
						.as(C.Extensions.Workbench)
						.registerWorkbenchContribution(h, a.LifecyclePhase.Restored);
			},
		),
		