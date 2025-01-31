import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/resources.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../platform/markers/common/markers.js';
import '../../common/notebookCommon.js';
import '../../common/notebookExecutionStateService.js';
import '../../../../services/outline/browser/outline.js';
import '../../../../../editor/contrib/documentSymbols/browser/outlineModel.js';
import './notebookOutlineEntryFactory.js';
define(
			de[3520],
			he([1, 0, 6, 3, 19, 10, 90, 70, 190, 475, 204, 1301]),
			function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*lifecycle*/,
 w /*resources*/,
 E /*configuration*/,
 C /*markers*/,
 d /*notebookCommon*/,
 m /*notebookExecutionStateService*/,
 r /*outline*/,
 u /*outlineModel*/,
 a /*notebookOutlineEntryFactory*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$y4b = void 0);
				let h = class {
					constructor(n, g, p, o, f) {
						(this.h = n),
							(this.j = g),
							(this.k = p),
							(this.l = o),
							(this.m = f),
							(this.a = new i.$Zc()),
							(this.b = new t.$re()),
							(this.onDidChange = this.b.event),
							(this.d = []),
							(this.g = new a.$wOb(this.j)),
							this.recomputeState();
					}
					get activeElement() {
						return this.f;
					}
					get entries() {
						return this.d;
					}
					get isEmpty() {
						return this.d.length === 0;
					}
					get uri() {
						return this.c;
					}
					async computeFullSymbols(n) {
						const p = this.h
							?.getViewModel()
							?.viewCells.filter((o) => o.cellKind === d.CellKind.Code);
						if (p) {
							const o = [];
							for (const f of p.slice(0, 100))
								o.push(this.g.cacheSymbols(f, this.k, n));
							await Promise.allSettled(o);
						}
						this.recomputeState();
					}
					recomputeState() {
						if (
							(this.a.clear(),
							(this.f = void 0),
							(this.c = void 0),
							!this.h.hasModel())
						)
							return;
						this.c = this.h.textModel.uri;
						const n = this.h;
						if (n.getLength() === 0) return;
						const g = n.getViewModel().viewCells,
							p = [];
						for (const s of g) p.push(...this.g.getOutlineEntries(s, p.length));
						if (p.length > 0) {
							const s = [p[0]],
								l = [p[0]];
							for (let y = 1; y < p.length; y++) {
								const $ = p[y];
								for (;;) {
									const v = l.length;
									if (v === 0) {
										s.push($), l.push($);
										break;
									} else {
										const S = l[v - 1];
										if (S.level < $.level) {
											S.addChild($), l.push($);
											break;
										} else l.pop();
									}
								}
							}
							this.d = s;
						}
						const o = new i.$2c();
						this.a.add(o);
						const f = () => {
							if (n.isDisposed) return;
							const s = ($) => {
									for (const v of this.d)
										$ ? v.clearMarkers() : v.updateMarkers(this.l);
								},
								l = this.m.getValue("problems.visibility");
							if (l === void 0) return;
							const y = this.m.getValue(r.OutlineConfigKeys.problemsEnabled);
							l && y
								? ((o.value = this.l.onMarkerChanged(($) => {
										if (n.isDisposed) {
											console.error("notebook editor is disposed");
											return;
										}
										$.some((v) =>
											n.getCellsInRange().some((S) => (0, w.$gh)(S.uri, v)),
										) && (s(!1), this.b.fire({}));
									})),
									s(!1))
								: (o.clear(), s(!0));
						};
						f(),
							this.a.add(
								this.m.onDidChangeConfiguration((s) => {
									(s.affectsConfiguration("problems.visibility") ||
										s.affectsConfiguration(
											r.OutlineConfigKeys.problemsEnabled,
										)) &&
										(f(), this.b.fire({}));
								}),
							);
						const { changeEventTriggered: b } = this.recomputeActive();
						b || this.b.fire({});
					}
					recomputeActive() {
						let n;
						const g = this.h;
						if (g && g.hasModel() && g.getLength() > 0) {
							const p = g.cellAt(g.getFocus().start);
							if (p) {
								for (const o of this.d) if (((n = o.find(p, [])), n)) break;
							}
						}
						return n !== this.f
							? ((this.f = n),
								this.b.fire({ affectOnlyActiveElement: !0 }),
								{ changeEventTriggered: !0 })
							: { changeEventTriggered: !1 };
					}
					dispose() {
						(this.d.length = 0), (this.f = void 0), this.a.dispose();
					}
				};
				(e.$y4b = h),
					(e.$y4b = h =
						Ne([j(1, m.$d6), j(2, u.$9Db), j(3, C.$aM), j(4, E.$gj)], h));
			},
		)
