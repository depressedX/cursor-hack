import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/browser/dom.js';
import '../../../../../../base/browser/ui/iconLabel/iconLabels.js';
import '../../../../../../base/browser/ui/toggle/toggle.js';
import '../../../../../../base/common/actions.js';
import '../../../../../../base/common/codicons.js';
import '../../../../../../base/common/lifecycle.js';
import '../../../../../../base/common/numbers.js';
import '../../../../../../base/common/observable.js';
import '../../../../../../base/common/strings.js';
import '../../../../../../base/common/types.js';
import '../../../../../../editor/common/model.js';
import '../../../../../../nls.js';
import '../../../../../../platform/actions/common/actions.js';
import '../../../../../../platform/configuration/common/configuration.js';
import '../../../../../../platform/contextview/browser/contextView.js';
import '../../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../../platform/theme/browser/defaultStyles.js';
import '../../model/modifiedBaseRange.js';
import '../../utils.js';
import '../colors.js';
import '../editorGutter.js';
import './codeEditorView.js';
define(
			de[3082],
			he([
				1, 0, 7, 182, 268, 50, 14, 3, 201, 77, 37, 28, 64, 4, 11, 10, 49, 5,
				106, 1250, 508, 989, 1251, 1252,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$0Zb = e.$9Zb = e.$8Zb = void 0);
				let v = class extends $.$4Zb {
					constructor(P, k, L, D, M) {
						super(L, k, M),
							(this.inputNumber = P),
							(this.otherInputNumber = this.inputNumber === 1 ? 2 : 1),
							(this.u = (0, r.derivedOpts)(
								{
									debugName: `input${this.inputNumber}.modifiedBaseRangeGutterItemInfos`,
								},
								(N) => {
									const A = this.viewModel.read(N);
									if (!A) return [];
									const R = A.model,
										O = this.inputNumber,
										B = A.showNonConflictingChanges.read(N);
									return R.modifiedBaseRanges
										.read(N)
										.filter(
											(U) =>
												U.getInputDiffs(this.inputNumber).length > 0 &&
												(B || U.isConflicting || !R.isHandled(U).read(N)),
										)
										.map((U, z) => new S(z.toString(), U, O, A));
								},
							)),
							(this.w = (0, r.derivedOpts)(
								{ debugName: `input${this.inputNumber}.decorations` },
								(N) => {
									const A = this.viewModel.read(N);
									if (!A) return [];
									const R = A.model,
										O = (this.inputNumber === 1 ? R.input1 : R.input2)
											.textModel,
										B = A.activeModifiedBaseRange.read(N),
										U = new Array(),
										z = A.showNonConflictingChanges.read(N),
										F = this.j.read(N),
										H =
											!(
												A.baseCodeEditorView.read(N) !== void 0 &&
												A.baseShowDiffAgainst.read(N) === this.inputNumber
											) && this.n.read(N);
									for (const q of R.modifiedBaseRanges.read(N)) {
										const V = q.getInputRange(this.inputNumber);
										if (!V) continue;
										const G = ["merge-editor-block"];
										let K = [0, 0, 0, 0];
										const J = R.isInputHandled(q, this.inputNumber).read(N);
										J && G.push("handled"),
											q === B && (G.push("focused"), (K = [0, 2, 0, 2])),
											q.isConflicting && G.push("conflicting");
										const W = this.inputNumber === 1 ? "input i1" : "input i2";
										if (
											(G.push(W),
											!(!q.isConflicting && !z && J) &&
												(H && !J && G.push("use-simplified-decorations"),
												U.push({
													range: V.toInclusiveRangeOrEmpty(),
													options: {
														showIfCollapsed: !0,
														blockClassName: G.join(" "),
														blockPadding: K,
														blockIsAfterEnd:
															V.startLineNumber > O.getLineCount(),
														description: "Merge Editor",
														minimap: {
															position: h.MinimapPosition.Gutter,
															color: { id: J ? l.$XZb : l.$YZb },
														},
														overviewRuler: q.isConflicting
															? {
																	position: h.OverviewRulerLane.Center,
																	color: { id: J ? l.$XZb : l.$YZb },
																}
															: void 0,
													},
												}),
												!H && (q.isConflicting || !R.isHandled(q).read(N))))
										) {
											const X = q.getInputDiffs(this.inputNumber);
											for (const Y of X) {
												const ie = Y.outputRange.toInclusiveRange();
												if (
													(ie &&
														U.push({
															range: ie,
															options: {
																className: `merge-editor-diff ${W}`,
																description: "Merge Editor",
																isWholeLine: !0,
															},
														}),
													Y.rangeMappings)
												)
													for (const ne of Y.rangeMappings)
														(F || !ne.outputRange.isEmpty()) &&
															U.push({
																range: ne.outputRange,
																options: {
																	className: ne.outputRange.isEmpty()
																		? `merge-editor-diff-empty-word ${W}`
																		: `merge-editor-diff-word ${W}`,
																	description: "Merge Editor",
																	showIfCollapsed: !0,
																},
															});
											}
										}
									}
									return U;
								},
							)),
							this.a.root.classList.add("input"),
							this.D(
								new y.$3Zb(this.editor, this.a.gutterDiv, {
									getIntersectingGutterItems: (N, A) =>
										this.f.read(A) ? this.u.read(A) : [],
									createView: (N, A) => new I(N, A, D),
								}),
							),
							this.D(
								(0, $.$5Zb)(this, (N, A) =>
									A.model.translateBaseRangeToInput(this.inputNumber, N),
								),
							),
							this.D(
								L.createInstance(
									$.$6Zb,
									P === 1 ? n.$XX.MergeInput1Toolbar : n.$XX.MergeInput2Toolbar,
									this.a.toolbar,
								),
							),
							this.D(
								(0, r.autorunOpts)(
									{
										debugName: `input${this.inputNumber}: update labels & text model`,
									},
									(N) => {
										const A = this.viewModel.read(N);
										if (!A) return;
										this.editor.setModel(
											this.inputNumber === 1
												? A.model.input1.textModel
												: A.model.input2.textModel,
										);
										const R =
												this.inputNumber === 1
													? A.model.input1.title || (0, c.localize)(7663, null)
													: A.model.input2.title || (0, c.localize)(7664, null),
											O =
												this.inputNumber === 1
													? A.model.input1.description
													: A.model.input2.description,
											B =
												this.inputNumber === 1
													? A.model.input1.detail
													: A.model.input2.detail;
										(0, t.$hhb)(this.a.title, ...(0, i.$Sib)(R)),
											(0, t.$hhb)(
												this.a.description,
												...(O ? (0, i.$Sib)(O) : []),
											),
											(0, t.$hhb)(this.a.detail, ...(B ? (0, i.$Sib)(B) : []));
									},
								),
							),
							this.D((0, s.$gZb)(this.editor, this.w));
					}
				};
				(e.$8Zb = v),
					(e.$8Zb = v = Ne([j(2, o.$Li), j(3, p.$Xxb), j(4, g.$gj)], v));
				class S {
					constructor(P, k, L, D) {
						(this.id = P),
							(this.b = k),
							(this.f = L),
							(this.g = D),
							(this.a = this.g.model),
							(this.range = this.b.getInputRange(this.f)),
							(this.enabled = this.a.isUpToDate),
							(this.toggleState = (0, r.derived)(this, (M) => {
								const N = this.a.getState(this.b).read(M).getInput(this.f);
								return N === b.InputState.second && !this.b.isOrderRelevant
									? b.InputState.first
									: N;
							})),
							(this.state = (0, r.derived)(this, (M) => {
								const N = this.g.activeModifiedBaseRange.read(M);
								return this.a.hasBaseRange(this.b)
									? {
											handled: this.a.isHandled(this.b).read(M),
											focused: this.b === N,
										}
									: { handled: !1, focused: !1 };
							}));
					}
					setState(P, k) {
						this.g.setState(
							this.b,
							this.a.getState(this.b).get().withInputValue(this.f, P),
							k,
							this.f,
						);
					}
					toggleBothSides() {
						(0, r.transaction)((P) => {
							const k = this.a.getState(this.b).get();
							this.a.setState(
								this.b,
								k.toggle(this.f).toggle(this.f === 1 ? 2 : 1),
								!0,
								P,
							);
						});
					}
					getContextMenuActions() {
						const P = this.a.getState(this.b).get(),
							k = this.a.isHandled(this.b).get(),
							L = (N) => {
								(0, r.transaction)((A) =>
									this.g.setState(this.b, N, A, this.f),
								);
							};
						function D(N, A, R, O) {
							const B = new E.$rj(N, A, void 0, !0, () => {
								L(R);
							});
							return (B.checked = O), B;
						}
						const M = P.includesInput1 && P.includesInput2;
						return [
							this.b.input1Diffs.length > 0
								? D(
										"mergeEditor.acceptInput1",
										(0, c.localize)(7665, null, this.a.input1.title),
										P.toggle(1),
										P.includesInput1,
									)
								: void 0,
							this.b.input2Diffs.length > 0
								? D(
										"mergeEditor.acceptInput2",
										(0, c.localize)(7666, null, this.a.input2.title),
										P.toggle(2),
										P.includesInput2,
									)
								: void 0,
							this.b.isConflicting
								? (0, s.$mZb)(
										D(
											"mergeEditor.acceptBoth",
											(0, c.localize)(7667, null),
											P.withInputValue(1, !M).withInputValue(2, !M),
											M,
										),
										{ enabled: this.b.canBeCombined },
									)
								: void 0,
							new E.$tj(),
							this.b.isConflicting
								? (0, s.$mZb)(
										D(
											"mergeEditor.swap",
											(0, c.localize)(7668, null),
											P.swap(),
											!1,
										),
										{ enabled: !P.kind && (!M || this.b.isOrderRelevant) },
									)
								: void 0,
							(0, s.$mZb)(
								new E.$rj(
									"mergeEditor.markAsHandled",
									(0, c.localize)(7669, null),
									void 0,
									!0,
									() => {
										(0, r.transaction)((N) => {
											this.a.setHandled(this.b, !k, N);
										});
									},
								),
								{ checked: k },
							),
						].filter(a.$tg);
					}
				}
				e.$9Zb = S;
				class I extends d.$1c {
					constructor(P, k, L) {
						super(),
							(this.f = (0, r.observableValue)(this, !1)),
							(this.a = (0, r.observableValue)(this, P));
						const D = new w.$8ib({
							isChecked: !1,
							title: "",
							icon: C.$ak.check,
							...f.$pyb,
						});
						D.domNode.classList.add("accept-conflict-group"),
							this.D(
								(0, t.$0fb)(D.domNode, t.$$gb.MOUSE_DOWN, (M) => {
									const N = this.a.get();
									N &&
										(M.button === 2
											? (M.stopPropagation(),
												M.preventDefault(),
												L.showContextMenu({
													getAnchor: () => D.domNode,
													getActions: () => N.getContextMenuActions(),
												}))
											: M.button === 1 &&
												(M.stopPropagation(),
												M.preventDefault(),
												N.toggleBothSides()));
								}),
							),
							this.D(
								(0, r.autorun)((M) => {
									const N = this.a.read(M),
										A = N.toggleState.read(M),
										O = {
											[b.InputState.excluded]: {
												icon: void 0,
												checked: !1,
												title: (0, c.localize)(7670, null),
											},
											[b.InputState.unrecognized]: {
												icon: C.$ak.circleFilled,
												checked: !1,
												title: (0, c.localize)(7671, null),
											},
											[b.InputState.first]: {
												icon: C.$ak.check,
												checked: !0,
												title: (0, c.localize)(7672, null),
											},
											[b.InputState.second]: {
												icon: C.$ak.checkAll,
												checked: !0,
												title: (0, c.localize)(7673, null),
											},
										}[A];
									D.setIcon(O.icon),
										(D.checked = O.checked),
										D.setTitle(O.title),
										N.enabled.read(M) ? D.enable() : D.disable();
								}),
							),
							this.D(
								(0, r.autorun)((M) => {
									const N = this.a.read(M).state.read(M),
										A = [
											"merge-accept-gutter-marker",
											N.handled && "handled",
											N.focused && "focused",
											this.f.read(M) ? "multi-line" : "single-line",
										];
									k.className = A.filter((R) => typeof R == "string").join(" ");
								}),
							),
							this.D(
								D.onChange(() => {
									(0, r.transaction)((M) => {
										this.a.get().setState(D.checked, M);
									});
								}),
							),
							k.appendChild((0, t.h)("div.background", [u.$ig]).root),
							k.appendChild(
								(this.b = (0, t.h)("div.checkbox", [
									(0, t.h)("div.checkbox-background", [D.domNode]),
								]).root),
							);
					}
					layout(P, k, L, D) {
						const M = this.b.clientHeight,
							N = k / 2 - M / 2,
							A = M;
						let R = P + N;
						const O = [A, L + D - A - M],
							B = [P + A, P + k - M - A];
						B[0] < B[1] &&
							((R = (0, m.$Zm)(R, O[0], O[1])),
							(R = (0, m.$Zm)(R, B[0], B[1]))),
							(this.b.style.top = `${R - P}px`),
							(0, r.transaction)((U) => {
								this.f.set(k > 30, U);
							});
					}
					update(P) {
						(0, r.transaction)((k) => {
							this.a.set(P, k);
						});
					}
				}
				e.$0Zb = I;
			},
		),
		