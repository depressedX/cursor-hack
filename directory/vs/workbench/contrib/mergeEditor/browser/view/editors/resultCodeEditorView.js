import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/browser/dom.js';
import '../../../../../../base/browser/ui/actionbar/actionbar.js';
import '../../../../../../base/browser/ui/iconLabel/iconLabels.js';
import '../../../../../../base/common/arrays.js';
import '../../../../../../base/common/errors.js';
import '../../../../../../base/common/lifecycle.js';
import '../../../../../../base/common/observable.js';
import '../../../../../../editor/common/model.js';
import '../../../../../../nls.js';
import '../../../../../../platform/actions/common/actions.js';
import '../../../../../../platform/configuration/common/configuration.js';
import '../../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../../platform/label/common/label.js';
import '../../model/lineRange.js';
import '../../utils.js';
import '../colors.js';
import '../editorGutter.js';
import '../../../common/mergeEditor.js';
import './codeEditorView.js';
define(
			de[3088],
			he([
				1, 0, 7, 105, 182, 24, 29, 3, 77, 64, 4, 11, 10, 8, 5, 73, 507, 508,
				989, 1251, 687, 1252,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*actionbar*/,
				w /*iconLabels*/,
				E /*arrays*/,
				C /*errors*/,
				d /*lifecycle*/,
				m /*observable*/,
				r /*model*/,
				u /*nls*/,
				a /*actions*/,
				h /*configuration*/,
				c /*contextkey*/,
				n /*instantiation*/,
				g /*label*/,
				p /*lineRange*/,
				o /*utils*/,
				f /*colors*/,
				b /*editorGutter*/,
				s /*mergeEditor*/,
				l /*codeEditorView*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$h1b = void 0);
				let y = class extends l.$4Zb {
					constructor(v, S, I, T) {
						super(S, v, T),
							(this.u = I),
							(this.w = (0, m.derived)(this, (k) => {
								const L = this.viewModel.read(k);
								if (!L) return [];
								const D = L.model,
									M = D.resultTextModel,
									N = new Array(),
									A = (0, o.join)(
										D.modifiedBaseRanges.read(k),
										D.baseResultDiffs.read(k),
										(B, U) =>
											B.baseRange.touches(U.inputRange)
												? E.CompareResult.neitherLessOrGreaterThan
												: p.$bZb.compareByStart(B.baseRange, U.inputRange),
									),
									R = L.activeModifiedBaseRange.read(k),
									O = L.showNonConflictingChanges.read(k);
								for (const B of A) {
									const U = B.left;
									if (U) {
										const z = ["merge-editor-block"];
										let F = [0, 0, 0, 0];
										const x = D.isHandled(U).read(k);
										if (
											(x && z.push("handled"),
											U === R && (z.push("focused"), (F = [0, 2, 0, 2])),
											U.isConflicting && z.push("conflicting"),
											z.push("result"),
											!U.isConflicting && !O && x)
										)
											continue;
										const H = D.getLineRangeInResult(U.baseRange, k);
										N.push({
											range: H.toInclusiveRangeOrEmpty(),
											options: {
												showIfCollapsed: !0,
												blockClassName: z.join(" "),
												blockPadding: F,
												blockIsAfterEnd: H.startLineNumber > M.getLineCount(),
												description: "Result Diff",
												minimap: {
													position: r.MinimapPosition.Gutter,
													color: { id: x ? f.$XZb : f.$YZb },
												},
												overviewRuler: U.isConflicting
													? {
															position: r.OverviewRulerLane.Center,
															color: { id: x ? f.$XZb : f.$YZb },
														}
													: void 0,
											},
										});
									}
									if (!U || U.isConflicting)
										for (const z of B.rights) {
											const F = z.outputRange.toInclusiveRange();
											if (
												(F &&
													N.push({
														range: F,
														options: {
															className: "merge-editor-diff result",
															description: "Merge Editor",
															isWholeLine: !0,
														},
													}),
												z.rangeMappings)
											)
												for (const x of z.rangeMappings)
													N.push({
														range: x.outputRange,
														options: {
															className: "merge-editor-diff-word result",
															description: "Merge Editor",
														},
													});
										}
								}
								return N;
							})),
							this.editor.invokeWithinContext((k) => {
								const L = k.get(c.$6j),
									D = s.$_Zb.bindTo(L);
								D.set(!0), this.D((0, d.$Yc)(() => D.reset()));
							}),
							(this.a.gutterDiv.style.width = "5px"),
							this.a.root.classList.add("result"),
							this.D(
								(0, m.autorunWithStore)((k, L) => {
									this.f.read(k) &&
										L.add(
											new b.$3Zb(this.editor, this.a.gutterDiv, {
												getIntersectingGutterItems: (D, M) => [],
												createView: (D, M) => {
													throw new C.$gb();
												},
											}),
										);
								}),
							),
							this.D(
								(0, m.autorun)((k) => {
									const L = this.viewModel.read(k);
									L &&
										(this.editor.setModel(L.model.resultTextModel),
										(0, t.$hhb)(
											this.a.title,
											...(0, w.$Sib)((0, u.localize)(7674, null)),
										),
										(0, t.$hhb)(
											this.a.description,
											...(0, w.$Sib)(
												this.u.getUriLabel(L.model.resultTextModel.uri, {
													relative: !0,
												}),
											),
										));
								}),
							);
						const P = this.D(new i.$eib(this.a.detail));
						this.D(
							(0, m.autorun)((k) => {
								const L = this.viewModel.read(k);
								if (!L) return;
								const D = L.model;
								if (!D) return;
								const M = D.unhandledConflictsCount.read(k),
									N =
										M === 1
											? (0, u.localize)(7675, null, M)
											: (0, u.localize)(7676, null, M);
								P.clear(),
									P.push({
										class: void 0,
										enabled: M > 0,
										id: "nextConflict",
										label: N,
										run() {
											L.model.telemetry.reportConflictCounterClicked(),
												L.goToNextModifiedBaseRange(
													(A) => !D.isHandled(A).get(),
												);
										},
										tooltip:
											M > 0
												? (0, u.localize)(7677, null)
												: (0, u.localize)(7678, null),
									});
							}),
						),
							this.D((0, o.$gZb)(this.editor, this.w)),
							this.D(
								(0, l.$5Zb)(this, (k, L) =>
									L.model.translateBaseRangeToResult(k),
								),
							),
							this.D(
								S.createInstance(
									l.$6Zb,
									a.$XX.MergeInputResultToolbar,
									this.a.toolbar,
								),
							);
					}
				};
				(e.$h1b = y),
					(e.$h1b = y = Ne([j(1, n.$Li), j(2, g.$3N), j(3, h.$gj)], y));
			},
		)
