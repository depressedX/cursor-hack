import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/observable.js';
import '../../../../nls.js';
import '../../accessibility/browser/accessibilityConfiguration.js';
import '../../accessibility/common/accessibilityCommands.js';
import '../common/notebookCommon.js';
import '../common/notebookExecutionStateService.js';
define(
			de[3559],
			he([1, 0, 6, 3, 77, 4, 130, 417, 70, 190]),
			function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*lifecycle*/,
 w /*observable*/,
 E /*nls*/,
 C /*accessibilityConfiguration*/,
 d /*accessibilityCommands*/,
 m /*notebookCommon*/,
 r /*notebookExecutionStateService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Y4b = void 0),
					(E = mt(E));
				class u extends i.$1c {
					constructor(h, c, n, g) {
						super(),
							(this.c = h),
							(this.f = c),
							(this.g = n),
							(this.h = g),
							(this.a = new t.$re()),
							(this.b = this.a.event),
							this.D(
								t.Event.debounce(
									this.c.onDidChangeExecution,
									(p, o) => this.m(p, o),
									100,
								)((p) => {
									const o = this.f();
									if (o)
										for (const f of p) {
											const b = o.getCellByHandle(f);
											b && this.a.fire(b);
										}
								}, this),
							);
					}
					getAriaLabel(h) {
						const c = t.Event.filter(this.b, (n) => n === h);
						return (0, w.observableFromEvent)(this, c, () => {
							const n = this.f();
							if (!n) return "";
							const g = n.getCellIndex(h);
							return g >= 0 ? this.j(g, h) : "";
						});
					}
					j(h, c) {
						const n = this.c.getCellExecution(c.uri)?.state,
							g =
								n === m.NotebookCellExecutionState.Executing
									? ", executing"
									: n === m.NotebookCellExecutionState.Pending
										? ", pending"
										: "";
						return `Cell ${h}, ${c.cellKind === m.CellKind.Markup ? "markdown" : "code"} cell${g}`;
					}
					getWidgetAriaLabel() {
						const h = this.g
							.lookupKeybinding(d.AccessibilityCommandId.OpenAccessibilityHelp)
							?.getLabel();
						return this.h.getValue(C.AccessibilityVerbositySettingId.Notebook)
							? h
								? E.localize(8081, null, h)
								: E.localize(8082, null, h)
							: E.localize(8083, null);
					}
					m(h, c) {
						const n = this.f(),
							g = h || [];
						return (
							n &&
								c.type === r.NotebookExecutionType.cell &&
								c.affectsNotebook(n.uri) &&
								g.indexOf(c.cellHandle) < 0 &&
								g.push(c.cellHandle),
							g
						);
					}
				}
				e.$Y4b = u;
			},
		)
