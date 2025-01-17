import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/progress/common/progress.js';
import '../common/debug.js';
import '../../../services/views/common/viewsService.js';
define(
			de[3816],
			he([1, 0, 6, 3, 84, 112, 89]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$JQc = void 0);
				let d = class {
					constructor(r, u, a) {
						this.a = [];
						let h;
						const c = (n) => {
							h && (h.dispose(), (h = void 0)),
								n &&
									(h = n.onDidProgressStart(async (g) => {
										const p = new Promise((f) => {
											const b = t.Event.any(
												t.Event.filter(
													n.onDidProgressEnd,
													(s) => s.body.progressId === g.body.progressId,
												),
												n.onDidEndAdapter,
											)(() => {
												b.dispose(), f();
											});
										});
										a.isViewContainerVisible(E.$Q4) &&
											u.withProgress({ location: E.$Q4 }, () => p);
										const o = r
											.getAdapterManager()
											.getDebuggerLabel(n.configuration.type);
										u.withProgress(
											{
												location: w.ProgressLocation.Notification,
												title: g.body.title,
												cancellable: g.body.cancellable,
												source: o,
												delay: 500,
											},
											(f) => {
												let b = 0;
												const s = (y) => {
													let $;
													typeof y.percentage == "number" &&
														(($ = y.percentage - b), (b += $)),
														f.report({
															message: y.message,
															increment: $,
															total: typeof $ == "number" ? 100 : void 0,
														});
												};
												g.body.message && s(g.body);
												const l = n.onDidProgressUpdate((y) => {
													y.body.progressId === g.body.progressId && s(y.body);
												});
												return p.then(() => l.dispose());
											},
											() => n.cancel(g.body.progressId),
										);
									}));
						};
						this.a.push(r.getViewModel().onDidFocusSession(c)),
							c(r.getViewModel().focusedSession),
							this.a.push(
								r.onWillNewSession((n) => {
									h || c(n);
								}),
							);
					}
					dispose() {
						(0, i.$Vc)(this.a);
					}
				};
				(e.$JQc = d),
					(e.$JQc = d = Ne([j(0, E.$75), j(1, w.$8N), j(2, C.$HMb)], d));
			},
		),
		