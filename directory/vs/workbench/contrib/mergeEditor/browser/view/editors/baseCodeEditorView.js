import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/browser/dom.js';
import '../../../../../../base/browser/ui/iconLabel/iconLabels.js';
import '../../../../../../base/common/errors.js';
import '../../../../../../base/common/observable.js';
import '../../../../../../editor/common/model.js';
import '../../../../../../nls.js';
import '../../../../../../platform/actions/common/actions.js';
import '../../../../../../platform/configuration/common/configuration.js';
import '../../../../../../platform/instantiation/common/instantiation.js';
import '../../utils.js';
import '../colors.js';
import '../editorGutter.js';
import './codeEditorView.js';
define(
			de[3081],
			he([1, 0, 7, 182, 29, 77, 64, 4, 11, 10, 5, 508, 989, 1251, 1252]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*iconLabels*/,
 w /*errors*/,
 E /*observable*/,
 C /*model*/,
 d /*nls*/,
 m /*actions*/,
 r /*configuration*/,
 u /*instantiation*/,
 a /*utils*/,
 h /*colors*/,
 c /*editorGutter*/,
 n /*codeEditorView*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$7Zb = void 0);
				let g = class extends n.$4Zb {
					constructor(o, f, b) {
						super(f, o, b),
							(this.u = (0, E.derived)(this, (s) => {
								const l = this.viewModel.read(s);
								if (!l) return [];
								const y = l.model,
									$ = y.base,
									v = l.activeModifiedBaseRange.read(s),
									S = l.showNonConflictingChanges.read(s),
									I = this.j.read(s),
									T = [];
								for (const P of y.modifiedBaseRanges.read(s)) {
									const k = P.baseRange;
									if (!k) continue;
									const L = y.isHandled(P).read(s);
									if (!P.isConflicting && L && !S) continue;
									const D = ["merge-editor-block"];
									let M = [0, 0, 0, 0];
									L && D.push("handled"),
										P === v && (D.push("focused"), (M = [0, 2, 0, 2])),
										D.push("base");
									const N = l.baseShowDiffAgainst.read(s);
									if (N)
										for (const A of P.getInputDiffs(N)) {
											const R = A.inputRange.toInclusiveRange();
											R &&
												T.push({
													range: R,
													options: {
														className: "merge-editor-diff base",
														description: "Merge Editor",
														isWholeLine: !0,
													},
												});
											for (const O of A.rangeMappings)
												(I || !O.inputRange.isEmpty()) &&
													T.push({
														range: O.inputRange,
														options: {
															className: O.inputRange.isEmpty()
																? "merge-editor-diff-empty-word base"
																: "merge-editor-diff-word base",
															description: "Merge Editor",
															showIfCollapsed: !0,
														},
													});
										}
									T.push({
										range: k.toInclusiveRangeOrEmpty(),
										options: {
											showIfCollapsed: !0,
											blockClassName: D.join(" "),
											blockPadding: M,
											blockIsAfterEnd: k.startLineNumber > $.getLineCount(),
											description: "Merge Editor",
											minimap: {
												position: C.MinimapPosition.Gutter,
												color: { id: L ? h.$XZb : h.$YZb },
											},
											overviewRuler: P.isConflicting
												? {
														position: C.OverviewRulerLane.Center,
														color: { id: L ? h.$XZb : h.$YZb },
													}
												: void 0,
										},
									});
								}
								return T;
							})),
							this.D((0, n.$5Zb)(this, (s, l) => s)),
							this.D(
								f.createInstance(n.$6Zb, m.$XX.MergeBaseToolbar, this.a.title),
							),
							this.D(
								(0, E.autorunWithStore)((s, l) => {
									this.f.read(s) &&
										l.add(
											new c.$3Zb(this.editor, this.a.gutterDiv, {
												getIntersectingGutterItems: (y, $) => [],
												createView: (y, $) => {
													throw new w.$gb();
												},
											}),
										);
								}),
							),
							this.D(
								(0, E.autorun)((s) => {
									const l = this.viewModel.read(s);
									if (!l) return;
									this.editor.setModel(l.model.base),
										(0, t.$hhb)(
											this.a.title,
											...(0, i.$Sib)((0, d.localize)(7660, null)),
										);
									const y = l.baseShowDiffAgainst.read(s);
									let $;
									if (y) {
										const v = (0, d.localize)(
												7661,
												null,
												y === 1 ? l.model.input1.title : l.model.input2.title,
											),
											S = (0, d.localize)(7662, null);
										$ = (0, t.h)("span", { title: S }, [v]).root;
									}
									(0, t.$hhb)(this.a.description, ...($ ? [$] : []));
								}),
							),
							this.D((0, a.$gZb)(this.editor, this.u));
					}
				};
				(e.$7Zb = g), (e.$7Zb = g = Ne([j(1, u.$Li), j(2, r.$gj)], g));
			},
		)
