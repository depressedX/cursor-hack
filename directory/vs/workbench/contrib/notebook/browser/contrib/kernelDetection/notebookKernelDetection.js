import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/common/lifecycle.js';
import '../../../../../../platform/registry/common/platform.js';
import '../../../../../common/contributions.js';
import '../../../common/notebookKernelService.js';
import '../../../common/notebookLoggingService.js';
import '../../../../../services/extensions/common/extensions.js';
import '../../../../../services/lifecycle/common/lifecycle.js';
define(
			de[3432],
			he([1, 0, 3, 30, 55, 243, 557, 53, 52]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*platform*/,
 w /*contributions*/,
 E /*notebookKernelService*/,
 C /*notebookLoggingService*/,
 d /*extensions*/,
 m /*lifecycle*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let r = class extends t.$1c {
					constructor(a, h, c) {
						super(),
							(this.c = a),
							(this.f = h),
							(this.g = c),
							(this.a = new Map()),
							(this.b = this.D(new t.$Zc())),
							this.h();
					}
					h() {
						this.b.clear(),
							this.b.add(
								this.f.onWillActivateByEvent((h) => {
									if (h.event.startsWith("onNotebook:")) {
										if (this.f.activationEventIsDone(h.event)) return;
										const c = h.event.substring(11);
										if (c === "*") return;
										let n = !1;
										const g = this.f.getExtensionsStatus();
										if (
											(this.f.extensions.forEach((p) => {
												g[p.identifier.value].activationTimes ||
													(p.activationEvents?.includes(h.event) && (n = !0));
											}),
											n && !this.a.has(c))
										) {
											this.g.debug(
												"KernelDetection",
												`start extension activation for ${c}`,
											);
											const p = this.c.registerNotebookKernelDetectionTask({
												notebookType: c,
											});
											this.a.set(c, p);
										}
									}
								}),
							);
						let a = null;
						this.b.add(
							this.f.onDidChangeExtensionsStatus(() => {
								a && clearTimeout(a),
									(a = setTimeout(() => {
										const h = [];
										for (const [c, n] of this.a)
											this.f.activationEventIsDone(`onNotebook:${c}`) &&
												(this.g.debug(
													"KernelDetection",
													`finish extension activation for ${c}`,
												),
												h.push(c),
												n.dispose());
										h.forEach((c) => {
											this.a.delete(c);
										});
									}));
							}),
						),
							this.b.add({
								dispose: () => {
									a && clearTimeout(a);
								},
							});
					}
				};
				(r = Ne([j(0, E.$f6), j(1, d.$q2), j(2, C.$P2b)], r)),
					i.$Io
						.as(w.Extensions.Workbench)
						.registerWorkbenchContribution(r, m.LifecyclePhase.Restored);
			},
		)
