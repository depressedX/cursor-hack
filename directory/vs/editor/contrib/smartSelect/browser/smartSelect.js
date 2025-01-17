import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/keyCodes.js';
import '../../../browser/editorExtensions.js';
import '../../../common/config/editorOptions.js';
import '../../../common/core/position.js';
import '../../../common/core/range.js';
import '../../../common/core/selection.js';
import '../../../common/editorContextKeys.js';
import './bracketSelections.js';
import './wordSelections.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../common/services/languageFeatures.js';
import '../../../common/services/resolverService.js';
import '../../../../base/common/types.js';
import '../../../../base/common/uri.js';
define(
			de[1646],
			he([
				1, 0, 24, 33, 29, 27, 46, 38, 48, 17, 104, 71, 1556, 2590, 4, 11, 31,
				43, 69, 42, 28, 9,
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
			) {
				"use strict";
				var y;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$kPb = void 0),
					(e.$lPb = P),
					(t = mt(t)),
					(n = mt(n));
				class $ {
					constructor(L, D) {
						(this.index = L), (this.ranges = D);
					}
					mov(L) {
						const D = this.index + (L ? 1 : -1);
						if (D < 0 || D >= this.ranges.length) return this;
						const M = new $(D, this.ranges);
						return M.ranges[D].equalsRange(this.ranges[this.index])
							? M.mov(L)
							: M;
					}
				}
				let v = class {
					static {
						y = this;
					}
					static {
						this.ID = "editor.contrib.smartSelectController";
					}
					static get(L) {
						return L.getContribution(y.ID);
					}
					constructor(L, D) {
						(this.f = L), (this.g = D), (this.e = !1);
					}
					dispose() {
						this.d?.dispose();
					}
					async run(L) {
						if (!this.f.hasModel()) return;
						const D = this.f.getSelections(),
							M = this.f.getModel();
						if (
							(this.c ||
								(await P(
									this.g.selectionRangeProvider,
									M,
									D.map((A) => A.getPosition()),
									this.f.getOption(d.EditorOption.smartSelect),
									i.CancellationToken.None,
								).then((A) => {
									if (
										!(!t.$Pb(A) || A.length !== D.length) &&
										!(
											!this.f.hasModel() ||
											!t.$yb(this.f.getSelections(), D, (R, O) =>
												R.equalsSelection(O),
											)
										)
									) {
										for (let R = 0; R < A.length; R++)
											(A[R] = A[R].filter(
												(O) =>
													O.containsPosition(D[R].getStartPosition()) &&
													O.containsPosition(D[R].getEndPosition()),
											)),
												A[R].unshift(D[R]);
										(this.c = A.map((R) => new $(0, R))),
											this.d?.dispose(),
											(this.d = this.f.onDidChangeCursorPosition(() => {
												this.e || (this.d?.dispose(), (this.c = void 0));
											}));
									}
								})),
							!this.c)
						)
							return;
						this.c = this.c.map((A) => A.mov(L));
						const N = this.c.map((A) =>
							u.$kL.fromPositions(
								A.ranges[A.index].getStartPosition(),
								A.ranges[A.index].getEndPosition(),
							),
						);
						this.e = !0;
						try {
							this.f.setSelections(N);
						} finally {
							this.e = !1;
						}
					}
				};
				(e.$kPb = v), (e.$kPb = v = y = Ne([j(1, f.$k3)], v));
				class S extends C.$itb {
					constructor(L, D) {
						super(D), (this.d = L);
					}
					async run(L, D) {
						const M = v.get(D);
						M && (await M.run(this.d));
					}
				}
				class I extends S {
					constructor() {
						super(!0, {
							id: "editor.action.smartSelect.expand",
							label: n.localize(1420, null),
							alias: "Expand Selection",
							precondition: void 0,
							kbOpts: {
								kbExpr: a.EditorContextKeys.editorTextFocus,
								primary: E.KeyMod.Shift | E.KeyMod.Alt | E.KeyCode.RightArrow,
								mac: {
									primary:
										E.KeyMod.CtrlCmd |
										E.KeyMod.WinCtrl |
										E.KeyMod.Shift |
										E.KeyCode.RightArrow,
									secondary: [
										E.KeyMod.WinCtrl | E.KeyMod.Shift | E.KeyCode.RightArrow,
									],
								},
								weight: o.KeybindingWeight.EditorContrib,
							},
							menuOpts: {
								menuId: g.$XX.MenubarSelectionMenu,
								group: "1_basic",
								title: n.localize(1421, null),
								order: 2,
							},
						});
					}
				}
				p.$fk.registerCommandAlias(
					"editor.action.smartSelect.grow",
					"editor.action.smartSelect.expand",
				);
				class T extends S {
					constructor() {
						super(!1, {
							id: "editor.action.smartSelect.shrink",
							label: n.localize(1422, null),
							alias: "Shrink Selection",
							precondition: void 0,
							kbOpts: {
								kbExpr: a.EditorContextKeys.editorTextFocus,
								primary: E.KeyMod.Shift | E.KeyMod.Alt | E.KeyCode.LeftArrow,
								mac: {
									primary:
										E.KeyMod.CtrlCmd |
										E.KeyMod.WinCtrl |
										E.KeyMod.Shift |
										E.KeyCode.LeftArrow,
									secondary: [
										E.KeyMod.WinCtrl | E.KeyMod.Shift | E.KeyCode.LeftArrow,
									],
								},
								weight: o.KeybindingWeight.EditorContrib,
							},
							menuOpts: {
								menuId: g.$XX.MenubarSelectionMenu,
								group: "1_basic",
								title: n.localize(1423, null),
								order: 3,
							},
						});
					}
				}
				(0, C.$qtb)(v.ID, v, C.EditorContributionInstantiation.Lazy),
					(0, C.$ntb)(I),
					(0, C.$ntb)(T);
				async function P(k, L, D, M, N) {
					const A = k.all(L).concat(new c.$jPb(M.selectSubwords));
					A.length === 1 && A.unshift(new h.$RCb());
					const R = [],
						O = [];
					for (const B of A)
						R.push(
							Promise.resolve(B.provideSelectionRanges(L, D, N)).then((U) => {
								if (t.$Pb(U) && U.length === D.length)
									for (let z = 0; z < D.length; z++) {
										O[z] || (O[z] = []);
										for (const F of U[z])
											r.$iL.isIRange(F.range) &&
												r.$iL.containsPosition(F.range, D[z]) &&
												O[z].push(r.$iL.lift(F.range));
									}
							}, w.$5),
						);
					return (
						await Promise.all(R),
						O.map((B) => {
							if (B.length === 0) return [];
							B.sort((x, H) =>
								m.$hL.isBefore(x.getStartPosition(), H.getStartPosition())
									? 1
									: m.$hL.isBefore(
												H.getStartPosition(),
												x.getStartPosition(),
											) ||
											m.$hL.isBefore(x.getEndPosition(), H.getEndPosition())
										? -1
										: m.$hL.isBefore(H.getEndPosition(), x.getEndPosition())
											? 1
											: 0,
							);
							const U = [];
							let z;
							for (const x of B)
								(!z ||
									(r.$iL.containsRange(x, z) && !r.$iL.equalsRange(x, z))) &&
									(U.push(x), (z = x));
							if (!M.selectLeadingAndTrailingWhitespace) return U;
							const F = [U[0]];
							for (let x = 1; x < U.length; x++) {
								const H = U[x - 1],
									q = U[x];
								if (
									q.startLineNumber !== H.startLineNumber ||
									q.endLineNumber !== H.endLineNumber
								) {
									const V = new r.$iL(
										H.startLineNumber,
										L.getLineFirstNonWhitespaceColumn(H.startLineNumber),
										H.endLineNumber,
										L.getLineLastNonWhitespaceColumn(H.endLineNumber),
									);
									V.containsRange(H) &&
										!V.equalsRange(H) &&
										q.containsRange(V) &&
										!q.equalsRange(V) &&
										F.push(V);
									const G = new r.$iL(
										H.startLineNumber,
										1,
										H.endLineNumber,
										L.getLineMaxColumn(H.endLineNumber),
									);
									G.containsRange(H) &&
										!G.equalsRange(V) &&
										q.containsRange(G) &&
										!q.equalsRange(G) &&
										F.push(G);
								}
								F.push(q);
							}
							return F;
						})
					);
				}
				p.$fk.registerCommand(
					"_executeSelectionRangeProvider",
					async function (k, ...L) {
						const [D, M] = L;
						(0, s.$vg)(l.URI.isUri(D));
						const N = k.get(f.$k3).selectionRangeProvider,
							A = await k.get(b.$MO).createModelReference(D);
						try {
							return P(
								N,
								A.object.textEditorModel,
								M,
								{ selectLeadingAndTrailingWhitespace: !0, selectSubwords: !0 },
								i.CancellationToken.None,
							);
						} finally {
							A.dispose();
						}
					},
				);
			},
		),
		