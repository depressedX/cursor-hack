import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/common/lifecycle.js';
import '../../../../../../nls.js';
import '../../../../../../platform/action/common/actionCommonCategories.js';
import '../../../../../../platform/actions/common/actions.js';
import '../../notebookBrowser.js';
import '../../notebookEditorExtensions.js';
import '../../../common/notebookCommon.js';
import '../../../common/notebookService.js';
import '../../../../../services/editor/common/editorService.js';
define(
			de[3490],
			he([1, 0, 3, 4, 99, 11, 108, 330, 70, 161, 18]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*nls*/,
 w /*actionCommonCategories*/,
 E /*actions*/,
 C /*notebookBrowser*/,
 d /*notebookEditorExtensions*/,
 m /*notebookCommon*/,
 r /*notebookService*/,
 u /*editorService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$Fc = void 0);
				class a extends t.$1c {
					static {
						this.id = "workbench.notebook.troubleshoot";
					}
					constructor(c) {
						super(),
							(this.g = c),
							(this.a = this.D(new t.$Zc())),
							(this.b = []),
							(this.c = !1),
							(this.f = []),
							this.D(
								this.g.onDidChangeModel(() => {
									this.h();
								}),
							),
							this.h();
					}
					toggle() {
						(this.c = !this.c), this.h();
					}
					h() {
						this.a.clear(),
							this.b.forEach((c) => c.dispose()),
							this.g.hasModel() && this.m();
					}
					j(c, n) {
						if (this.c) {
							const g = this.g.getViewHeight(c);
							console.log(
								`cell#${c.handle}`,
								n,
								`${g} -> ${c.layoutInfo.totalHeight}`,
							);
						}
					}
					m() {
						if (!this.g.hasModel()) return;
						for (let g = 0; g < this.g.getLength(); g++) {
							const p = this.g.cellAt(g);
							this.b.push(
								p.onDidChangeLayout((o) => {
									this.j(p, o);
								}),
							);
						}
						this.a.add(
							this.g.onDidChangeViewCells((g) => {
								[...g.splices].reverse().forEach((p) => {
									const [o, f, b] = p,
										s = this.b.splice(
											o,
											f,
											...b.map((l) =>
												l.onDidChangeLayout((y) => {
													this.j(l, y);
												}),
											),
										);
									(0, t.$Vc)(s);
								});
							}),
						);
						const c = this.g.getViewModel();
						let n = [];
						this.c && (n = this.n()),
							(this.f = c.deltaCellStatusBarItems(this.f, n));
					}
					n() {
						const c = [];
						for (let n = 0; n < this.g.getLength(); n++)
							c.push({
								handle: n,
								items: [
									{
										text: `index: ${n}`,
										alignment: m.CellStatusbarAlignment.Left,
										priority: Number.MAX_SAFE_INTEGER,
									},
								],
							});
						return c;
					}
					dispose() {
						(0, t.$Vc)(this.b), super.dispose();
					}
				}
				(e.$$Fc = a),
					(0, d.$PKb)(a.id, a),
					(0, E.$4X)(
						class extends E.$3X {
							constructor() {
								super({
									id: "notebook.toggleLayoutTroubleshoot",
									title: (0, i.localize2)(7823, "Toggle Layout Troubleshoot"),
									category: w.$ck.Developer,
									f1: !0,
								});
							}
							async run(h) {
								const c = h.get(u.$IY),
									n = (0, C.$eJb)(c.activeEditorPane);
								if (!n) return;
								n.getContribution(a.id)?.toggle();
							}
						},
					),
					(0, E.$4X)(
						class extends E.$3X {
							constructor() {
								super({
									id: "notebook.inspectLayout",
									title: (0, i.localize2)(7824, "Inspect Notebook Layout"),
									category: w.$ck.Developer,
									f1: !0,
								});
							}
							async run(h) {
								const c = h.get(u.$IY),
									n = (0, C.$eJb)(c.activeEditorPane);
								if (!(!n || !n.hasModel()))
									for (let g = 0; g < n.getLength(); g++) {
										const p = n.cellAt(g);
										console.log(`cell#${p.handle}`, p.layoutInfo);
									}
							}
						},
					),
					(0, E.$4X)(
						class extends E.$3X {
							constructor() {
								super({
									id: "notebook.clearNotebookEdtitorTypeCache",
									title: (0, i.localize2)(
										7825,
										"Clear Notebook Editor Type Cache",
									),
									category: w.$ck.Developer,
									f1: !0,
								});
							}
							async run(h) {
								h.get(r.$MIb).clearEditorCache();
							}
						},
					);
			},
		),
		