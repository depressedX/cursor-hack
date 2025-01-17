import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/observable.js';
import '../../../../base/common/uri.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import './debugModel.js';
import '../../../services/textfile/common/textfiles.js';
define(
			de[3683],
			he([1, 0, 3, 77, 9, 34, 21, 68, 300, 85]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$B3 = void 0);
				const u = "debug.breakpoint",
					a = "debug.functionbreakpoint",
					h = "debug.databreakpoint",
					c = "debug.exceptionbreakpoint",
					n = "debug.watchexpressions",
					g = "debug.chosenenvironment",
					p = "debug.uxstate";
				let o = class extends t.$1c {
					constructor(b, s, l, y) {
						super(),
							(this.a = b),
							(this.b = s),
							(this.c = l),
							(this.f = y),
							(this.breakpoints = (0, i.observableValue)(this, this.g())),
							(this.functionBreakpoints = (0, i.observableValue)(
								this,
								this.h(),
							)),
							(this.exceptionBreakpoints = (0, i.observableValue)(
								this,
								this.j(),
							)),
							(this.dataBreakpoints = (0, i.observableValue)(this, this.m())),
							(this.watchExpressions = (0, i.observableValue)(this, this.n())),
							this.D(
								b.onDidChangeValue(
									C.StorageScope.WORKSPACE,
									void 0,
									this.B,
								)(($) => {
									if ($.external)
										switch ($.key) {
											case u:
												return this.breakpoints.set(this.g(), void 0);
											case a:
												return this.functionBreakpoints.set(this.h(), void 0);
											case c:
												return this.exceptionBreakpoints.set(this.j(), void 0);
											case h:
												return this.dataBreakpoints.set(this.m(), void 0);
											case n:
												return this.watchExpressions.set(this.n(), void 0);
										}
								}),
							);
					}
					loadDebugUxState() {
						return this.a.get(p, C.StorageScope.WORKSPACE, "default");
					}
					storeDebugUxState(b) {
						this.a.store(
							p,
							b,
							C.StorageScope.WORKSPACE,
							C.StorageTarget.MACHINE,
						);
					}
					g() {
						let b;
						try {
							b = JSON.parse(this.a.get(u, C.StorageScope.WORKSPACE, "[]")).map(
								(s) => (
									(s.uri = w.URI.revive(s.uri)),
									new m.$T3(s, this.b, this.c, this.f, s.id)
								),
							);
						} catch {}
						return b || [];
					}
					h() {
						let b;
						try {
							b = JSON.parse(this.a.get(a, C.StorageScope.WORKSPACE, "[]")).map(
								(s) => new m.$U3(s, s.id),
							);
						} catch {}
						return b || [];
					}
					j() {
						let b;
						try {
							b = JSON.parse(this.a.get(c, C.StorageScope.WORKSPACE, "[]")).map(
								(s) => new m.$W3(s, s.id),
							);
						} catch {}
						return b || [];
					}
					m() {
						let b;
						try {
							b = JSON.parse(this.a.get(h, C.StorageScope.WORKSPACE, "[]")).map(
								(s) => new m.$V3(s, s.id),
							);
						} catch {}
						return b || [];
					}
					n() {
						let b;
						try {
							b = JSON.parse(this.a.get(n, C.StorageScope.WORKSPACE, "[]")).map(
								(s) => new m.$J3(s.name, s.id),
							);
						} catch {}
						return b || [];
					}
					loadChosenEnvironments() {
						return JSON.parse(this.a.get(g, C.StorageScope.WORKSPACE, "{}"));
					}
					storeChosenEnvironments(b) {
						this.a.store(
							g,
							JSON.stringify(b),
							C.StorageScope.WORKSPACE,
							C.StorageTarget.MACHINE,
						);
					}
					storeWatchExpressions(b) {
						b.length
							? this.a.store(
									n,
									JSON.stringify(
										b.map((s) => ({ name: s.name, id: s.getId() })),
									),
									C.StorageScope.WORKSPACE,
									C.StorageTarget.MACHINE,
								)
							: this.a.remove(n, C.StorageScope.WORKSPACE);
					}
					storeBreakpoints(b) {
						const s = b.getBreakpoints();
						s.length
							? this.a.store(
									u,
									JSON.stringify(s),
									C.StorageScope.WORKSPACE,
									C.StorageTarget.MACHINE,
								)
							: this.a.remove(u, C.StorageScope.WORKSPACE);
						const l = b.getFunctionBreakpoints();
						l.length
							? this.a.store(
									a,
									JSON.stringify(l),
									C.StorageScope.WORKSPACE,
									C.StorageTarget.MACHINE,
								)
							: this.a.remove(a, C.StorageScope.WORKSPACE);
						const y = b.getDataBreakpoints().filter((v) => v.canPersist);
						y.length
							? this.a.store(
									h,
									JSON.stringify(y),
									C.StorageScope.WORKSPACE,
									C.StorageTarget.MACHINE,
								)
							: this.a.remove(h, C.StorageScope.WORKSPACE);
						const $ = b.getExceptionBreakpoints();
						$.length
							? this.a.store(
									c,
									JSON.stringify($),
									C.StorageScope.WORKSPACE,
									C.StorageTarget.MACHINE,
								)
							: this.a.remove(c, C.StorageScope.WORKSPACE);
					}
				};
				(e.$B3 = o),
					(e.$B3 = o =
						Ne([j(0, C.$lq), j(1, r.$kZ), j(2, d.$Vl), j(3, E.$ik)], o));
			},
		),
		