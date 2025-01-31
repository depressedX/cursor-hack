import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/async.js';
import '../../../../../base/common/errors.js';
import '../../../../../base/common/keyCodes.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../browser/services/codeEditorService.js';
import '../../../../common/config/editorOptions.js';
import '../../../../common/core/position.js';
import '../../../../common/core/range.js';
import '../../../peekView/browser/peekView.js';
import '../../../../../nls.js';
import '../../../../../platform/commands/common/commands.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../platform/editor/common/editor.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../../platform/list/browser/listService.js';
import '../../../../../platform/notification/common/notification.js';
import '../../../../../platform/storage/common/storage.js';
import '../referencesModel.js';
import './referencesWidget.js';
import '../../../../common/editorContextKeys.js';
import '../../../../../platform/contextkey/common/contextkeys.js';
define(
			de[840],
			he([
				1, 0, 15, 29, 27, 3, 65, 38, 48, 17, 255, 4, 31, 10, 8, 116, 5, 43, 93,
				40, 21, 541, 3604, 71, 179,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*async*/,
				i /*errors*/,
				w /*keyCodes*/,
				E /*lifecycle*/,
				C /*codeEditorService*/,
				d /*editorOptions*/,
				m /*position*/,
				r /*range*/,
				u /*peekView*/,
				a /*nls*/,
				h /*commands*/,
				c /*configuration*/,
				n /*contextkey*/,
				g /*editor*/,
				p /*instantiation*/,
				o /*keybindingsRegistry*/,
				f /*listService*/,
				b /*notification*/,
				s /*storage*/,
				l /*referencesModel*/,
				y /*referencesWidget*/,
				$ /*editorContextKeys*/,
				v /*contextkeys*/,
) {
				"use strict";
				var S;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$EOb = e.$DOb = void 0),
					(a = mt(a)),
					(e.$DOb = new n.$5j(
						"referenceSearchVisible",
						!1,
						a.localize(1143, null),
					));
				let I = class {
					static {
						S = this;
					}
					static {
						this.ID = "editor.contrib.referencesController";
					}
					static get(k) {
						return k.getContribution(S.ID);
					}
					constructor(k, L, D, M, N, A, R, O) {
						(this.h = k),
							(this.i = L),
							(this.j = M),
							(this.k = N),
							(this.l = A),
							(this.m = R),
							(this.n = O),
							(this.a = new E.$Zc()),
							(this.e = 0),
							(this.f = !1),
							(this.g = e.$DOb.bindTo(D));
					}
					dispose() {
						this.g.reset(),
							this.a.dispose(),
							this.b?.dispose(),
							this.c?.dispose(),
							(this.b = void 0),
							(this.c = void 0);
					}
					getWidget() {
						return this.b;
					}
					toggleWidget(k, L, D) {
						let M;
						if (
							(this.b && (M = this.b.position),
							this.closeWidget(),
							M && k.containsPosition(M))
						)
							return;
						(this.d = D),
							this.g.set(!0),
							this.a.add(
								this.i.onDidChangeModelLanguage(() => {
									this.closeWidget();
								}),
							),
							this.a.add(
								this.i.onDidChangeModel(() => {
									this.f || this.closeWidget();
								}),
							);
						const N = "peekViewLayout",
							A = y.$BOb.fromJSON(this.m.get(N, s.StorageScope.PROFILE, "{}"));
						(this.b = this.l.createInstance(y.$COb, this.i, this.h, A)),
							this.b.setTitle(a.localize(1144, null)),
							this.b.show(k),
							this.a.add(
								this.b.onDidClose(() => {
									L.cancel(),
										this.b
											? (this.m.store(
													N,
													JSON.stringify(this.b.layoutData),
													s.StorageScope.PROFILE,
													s.StorageTarget.MACHINE,
												),
												this.b.isClosing || this.closeWidget(),
												(this.b = void 0))
											: this.closeWidget();
								}),
							),
							this.a.add(
								this.b.onDidSelectReference((O) => {
									const { element: B, kind: U } = O;
									if (B)
										switch (U) {
											case "open":
												(O.source !== "editor" ||
													!this.n.getValue("editor.stablePeek")) &&
													this.openReference(B, !1, !1);
												break;
											case "side":
												this.openReference(B, !0, !1);
												break;
											case "goto":
												D ? this.o(B, !0) : this.openReference(B, !1, !0);
												break;
										}
								}),
							);
						const R = ++this.e;
						L.then(
							(O) => {
								if (R !== this.e || !this.b) {
									O.dispose();
									return;
								}
								return (
									this.c?.dispose(),
									(this.c = O),
									this.b.setModel(this.c).then(() => {
										if (this.b && this.c && this.i.hasModel()) {
											this.c.isEmpty
												? this.b.setMetaTitle("")
												: this.b.setMetaTitle(
														a.localize(
															1145,
															null,
															this.c.title,
															this.c.references.length,
														),
													);
											const B = this.i.getModel().uri,
												U = new m.$hL(k.startLineNumber, k.startColumn),
												z = this.c.nearestReference(B, U);
											if (z)
												return this.b.setSelection(z).then(() => {
													this.b &&
														this.i.getOption(
															d.EditorOption.peekWidgetDefaultFocus,
														) === "editor" &&
														this.b.focusOnPreviewEditor();
												});
										}
									})
								);
							},
							(O) => {
								this.k.error(O);
							},
						);
					}
					changeFocusBetweenPreviewAndReferences() {
						this.b &&
							(this.b.isPreviewEditorFocused()
								? this.b.focusOnReferenceTree()
								: this.b.focusOnPreviewEditor());
					}
					async goToNextOrPreviousReference(k) {
						if (!this.i.hasModel() || !this.c || !this.b) return;
						const L = this.b.position;
						if (!L) return;
						const D = this.c.nearestReference(this.i.getModel().uri, L);
						if (!D) return;
						const M = this.c.nextOrPreviousReference(D, k),
							N = this.i.hasTextFocus(),
							A = this.b.isPreviewEditorFocused();
						await this.b.setSelection(M),
							await this.o(M, !1),
							N ? this.i.focus() : this.b && A && this.b.focusOnPreviewEditor();
					}
					async revealReference(k) {
						!this.i.hasModel() ||
							!this.c ||
							!this.b ||
							(await this.b.revealReference(k));
					}
					closeWidget(k = !0) {
						this.b?.dispose(),
							this.c?.dispose(),
							this.g.reset(),
							this.a.clear(),
							(this.b = void 0),
							(this.c = void 0),
							k && this.i.focus(),
							(this.e += 1);
					}
					o(k, L) {
						this.b?.hide(), (this.f = !0);
						const D = r.$iL.lift(k.range).collapseToStart();
						return this.j
							.openCodeEditor(
								{
									resource: k.uri,
									options: {
										selection: D,
										selectionSource: g.TextEditorSelectionSource.JUMP,
										pinned: L,
									},
								},
								this.i,
							)
							.then(
								(M) => {
									if (((this.f = !1), !M || !this.b)) {
										this.closeWidget();
										return;
									}
									if (this.i === M)
										this.b.show(D), this.b.focusOnReferenceTree();
									else {
										const N = S.get(M),
											A = this.c.clone();
										this.closeWidget(),
											M.focus(),
											N?.toggleWidget(
												D,
												(0, t.$zh)((R) => Promise.resolve(A)),
												this.d ?? !1,
											);
									}
								},
								(M) => {
									(this.f = !1), (0, i.$4)(M);
								},
							);
					}
					openReference(k, L, D) {
						L || this.closeWidget();
						const { uri: M, range: N } = k;
						this.j.openCodeEditor(
							{
								resource: M,
								options: {
									selection: N,
									selectionSource: g.TextEditorSelectionSource.JUMP,
									pinned: D,
								},
							},
							this.i,
							L,
						);
					}
				};
				(e.$EOb = I),
					(e.$EOb =
						I =
						S =
							Ne(
								[
									j(2, n.$6j),
									j(3, C.$dtb),
									j(4, b.$4N),
									j(5, p.$Li),
									j(6, s.$lq),
									j(7, c.$gj),
								],
								I,
							));
				function T(P, k) {
					const L = (0, u.$8Mb)(P);
					if (!L) return;
					const D = I.get(L);
					D && k(D);
				}
				o.$TX.registerCommandAndKeybindingRule({
					id: "togglePeekWidgetFocus",
					weight: o.KeybindingWeight.EditorContrib,
					primary: (0, w.$os)(w.$ps, w.KeyCode.F2),
					mac: { primary: (0, w.$os)(w.$qs, w.KeyCode.F2) },
					when: n.$Kj.or(e.$DOb, u.PeekContext.inPeekEditor),
					handler(P) {
						T(P, (k) => {
							k.changeFocusBetweenPreviewAndReferences();
						});
					},
				}),
					o.$TX.registerCommandAndKeybindingRule({
						id: "goToNextReference",
						weight: o.KeybindingWeight.EditorContrib - 10,
						primary: w.KeyCode.F4,
						secondary: [w.KeyCode.F12],
						when: n.$Kj.or(e.$DOb, u.PeekContext.inPeekEditor),
						handler(P) {
							T(P, (k) => {
								k.goToNextOrPreviousReference(!0);
							});
						},
					}),
					o.$TX.registerCommandAndKeybindingRule({
						id: "goToPreviousReference",
						weight: o.KeybindingWeight.EditorContrib - 10,
						primary: w.KeyMod.Shift | w.KeyCode.F4,
						secondary: [w.KeyMod.Shift | w.KeyCode.F12],
						when: n.$Kj.or(e.$DOb, u.PeekContext.inPeekEditor),
						handler(P) {
							T(P, (k) => {
								k.goToNextOrPreviousReference(!1);
							});
						},
					}),
					h.$fk.registerCommandAlias(
						"goToNextReferenceFromEmbeddedEditor",
						"goToNextReference",
					),
					h.$fk.registerCommandAlias(
						"goToPreviousReferenceFromEmbeddedEditor",
						"goToPreviousReference",
					),
					h.$fk.registerCommandAlias(
						"closeReferenceSearchEditor",
						"closeReferenceSearch",
					),
					h.$fk.registerCommand("closeReferenceSearch", (P) =>
						T(P, (k) => k.closeWidget()),
					),
					o.$TX.registerKeybindingRule({
						id: "closeReferenceSearch",
						weight: o.KeybindingWeight.EditorContrib - 101,
						primary: w.KeyCode.Escape,
						secondary: [w.KeyMod.Shift | w.KeyCode.Escape],
						when: n.$Kj.and(
							u.PeekContext.inPeekEditor,
							n.$Kj.not("config.editor.stablePeek"),
						),
					}),
					o.$TX.registerKeybindingRule({
						id: "closeReferenceSearch",
						weight: o.KeybindingWeight.WorkbenchContrib + 50,
						primary: w.KeyCode.Escape,
						secondary: [w.KeyMod.Shift | w.KeyCode.Escape],
						when: n.$Kj.and(
							e.$DOb,
							n.$Kj.not("config.editor.stablePeek"),
							n.$Kj.or($.EditorContextKeys.editorTextFocus, v.$bMb.negate()),
						),
					}),
					o.$TX.registerCommandAndKeybindingRule({
						id: "revealReference",
						weight: o.KeybindingWeight.WorkbenchContrib,
						primary: w.KeyCode.Enter,
						mac: {
							primary: w.KeyCode.Enter,
							secondary: [w.KeyMod.CtrlCmd | w.KeyCode.DownArrow],
						},
						when: n.$Kj.and(e.$DOb, f.$nMb, f.$tMb.negate(), f.$vMb.negate()),
						handler(P) {
							const L = P.get(f.$fMb).lastFocusedList?.getFocus();
							Array.isArray(L) &&
								L[0] instanceof l.$mNb &&
								T(P, (D) => D.revealReference(L[0]));
						},
					}),
					o.$TX.registerCommandAndKeybindingRule({
						id: "openReferenceToSide",
						weight: o.KeybindingWeight.EditorContrib,
						primary: w.KeyMod.CtrlCmd | w.KeyCode.Enter,
						mac: { primary: w.KeyMod.WinCtrl | w.KeyCode.Enter },
						when: n.$Kj.and(e.$DOb, f.$nMb, f.$tMb.negate(), f.$vMb.negate()),
						handler(P) {
							const L = P.get(f.$fMb).lastFocusedList?.getFocus();
							Array.isArray(L) &&
								L[0] instanceof l.$mNb &&
								T(P, (D) => D.openReference(L[0], !0, !0));
						},
					}),
					h.$fk.registerCommand("openReference", (P) => {
						const L = P.get(f.$fMb).lastFocusedList?.getFocus();
						Array.isArray(L) &&
							L[0] instanceof l.$mNb &&
							T(P, (D) => D.openReference(L[0], !1, !0));
					});
			},
		)
