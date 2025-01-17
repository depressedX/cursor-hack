import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/common/lifecycle.js';
import '../../../../../../base/common/observable.js';
import '../../../../../../nls.js';
import '../../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../../platform/keybinding/common/keybinding.js';
import './cellDiagnosticsActions.js';
import '../cellStatusBar/executionStatusBarItemController.js';
import '../../notebookEditorExtensions.js';
import '../../viewModel/codeCellViewModel.js';
import '../../../common/notebookCommon.js';
define(
			de[4099],
			he([1, 0, 3, 77, 4, 5, 39, 1960, 1062, 330, 482, 70]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$yGc = void 0);
				let h = class extends t.$1c {
					static {
						this.id = "workbench.notebook.statusBar.diagtnostic";
					}
					constructor(g, p) {
						super(),
							this.D(
								new m.$4Fc(g, (o, f) =>
									f instanceof u.$31b ? p.createInstance(c, o, f) : t.$1c.None,
								),
							);
					}
				};
				(e.$yGc = h), (e.$yGc = h = Ne([j(1, E.$Li)], h)), (0, r.$PKb)(h.id, h);
				let c = class extends t.$1c {
					constructor(g, p, o) {
						super(),
							(this.b = g),
							(this.c = p),
							(this.f = o),
							(this.a = []),
							this.D(
								(0, i.autorun)((f) =>
									this.g(f.readObservable(p.excecutionError)),
								),
							);
					}
					async g(g) {
						let p;
						if (g?.location) {
							const f = this.f.lookupKeybinding(d.$xGc)?.getLabel();
							p = {
								text: "$(sparkle)",
								tooltip: (0, w.localize)(7724, null, `(${f})`),
								alignment: a.CellStatusbarAlignment.Left,
								command: d.$xGc,
								priority: Number.MAX_SAFE_INTEGER - 1,
							};
						}
						const o = p ? [p] : [];
						this.a = this.b.deltaCellStatusBarItems(this.a, [
							{ handle: this.c.handle, items: o },
						]);
					}
					dispose() {
						super.dispose(),
							this.b.deltaCellStatusBarItems(this.a, [
								{ handle: this.c.handle, items: [] },
							]);
					}
				};
				c = Ne([j(2, C.$uZ)], c);
			},
		),
		