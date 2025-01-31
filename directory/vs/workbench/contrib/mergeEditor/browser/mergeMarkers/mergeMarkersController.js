import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/observable.js';
import '../model/lineRange.js';
import '../../../../../nls.js';
define(
			de[3076],
			he([1, 0, 7, 3, 77, 507, 4]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*lifecycle*/,
 w /*observable*/,
 E /*lineRange*/,
 C /*nls*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Anc = e.$znc = void 0),
					(C = mt(C)),
					(e.$znc = { start: "<<<<<<<", end: ">>>>>>>" });
				class d extends i.$1c {
					constructor(a, h) {
						super(),
							(this.editor = a),
							(this.mergeEditorViewModel = h),
							(this.a = []),
							(this.f = new i.$Zc()),
							this.D(
								a.onDidChangeModelContent((c) => {
									this.g();
								}),
							),
							this.D(
								a.onDidChangeModel((c) => {
									this.g();
								}),
							),
							this.g();
					}
					g() {
						const a = this.editor.getModel(),
							h = a
								? m(a, {
										blockToRemoveStartLinePrefix: e.$znc.start,
										blockToRemoveEndLinePrefix: e.$znc.end,
									})
								: { blocks: [] };
						this.editor.setHiddenAreas(
							h.blocks.map((c) => c.lineRange.deltaEnd(-1).toRange()),
							this,
						),
							this.editor.changeViewZones((c) => {
								this.f.clear();
								for (const n of this.a) c.removeZone(n);
								this.a.length = 0;
								for (const n of h.blocks) {
									const g = a
											.getLineContent(n.lineRange.startLineNumber)
											.substring(0, 20),
										p = a
											.getLineContent(n.lineRange.endLineNumberExclusive - 1)
											.substring(0, 20),
										o = n.lineRange.lineCount - 2,
										f = (0, t.h)("div", [
											(0, t.h)("div.conflict-zone-root", [
												(0, t.h)("pre", [g]),
												(0, t.h)("span.dots", ["..."]),
												(0, t.h)("pre", [p]),
												(0, t.h)("span.text", [
													o === 1
														? C.localize(7622, null)
														: C.localize(7623, null, o),
												]),
											]),
										]).root;
									this.a.push(
										c.addZone({
											afterLineNumber: n.lineRange.endLineNumberExclusive - 1,
											domNode: f,
											heightInLines: 1.5,
										}),
									);
									const b = () => {
										const s = this.editor.getLayoutInfo();
										f.style.width = `${s.contentWidth - s.verticalScrollbarWidth}px`;
									};
									this.f.add(
										this.editor.onDidLayoutChange(() => {
											b();
										}),
									),
										b(),
										this.f.add(
											(0, w.autorun)((s) => {
												const l = this.mergeEditorViewModel.read(s);
												if (!l) return;
												const y = l.activeModifiedBaseRange.read(s),
													$ = [];
												$.push("conflict-zone"),
													y &&
														l.model
															.getLineRangeInResult(y.baseRange, s)
															.intersects(n.lineRange) &&
														$.push("focused"),
													(f.className = $.join(" "));
											}),
										);
								}
							});
					}
				}
				e.$Anc = d;
				function m(u, a) {
					const h = [],
						c = [];
					let n = !1,
						g = -1,
						p = 0;
					for (const o of u.getLinesContent())
						p++,
							n
								? o.startsWith(a.blockToRemoveEndLinePrefix) &&
									((n = !1),
									h.push(new r(new E.$bZb(g, p - g + 1))),
									c.push(""))
								: o.startsWith(a.blockToRemoveStartLinePrefix)
									? ((n = !0), (g = p))
									: c.push(o);
					return {
						blocks: h,
						transformedContent: c.join(`
`),
					};
				}
				class r {
					constructor(a) {
						this.lineRange = a;
					}
				}
			},
		)
