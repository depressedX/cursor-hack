import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/ui/aria/aria.js';
import '../../../../base/common/async.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/types.js';
import '../../../../base/common/uri.js';
import '../../editorState/browser/editorState.js';
import '../../../browser/editorBrowser.js';
import '../../../browser/editorExtensions.js';
import '../../../browser/services/codeEditorService.js';
import '../../../browser/widget/codeEditor/embeddedCodeEditorWidget.js';
import '../../../common/config/editorOptions.js';
import '../../../common/core/position.js';
import '../../../common/core/range.js';
import '../../../common/editorCommon.js';
import '../../../common/editorContextKeys.js';
import '../../../common/languages.js';
import './peek/referencesController.js';
import './referencesModel.js';
import './symbolNavigation.js';
import '../../message/browser/messageController.js';
import '../../peekView/browser/peekView.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/editor/common/editor.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/progress/common/progress.js';
import './goToSymbol.js';
import '../../../common/services/languageFeatures.js';
import '../../../../base/common/iterator.js';
import '../../../common/services/markerDecorations.js';
import '../../../../platform/contextkey/common/contextkeys.js';
define(
			de[1036],
			he([
				1, 0, 127, 15, 33, 27, 28, 9, 439, 56, 46, 65, 281, 38, 48, 17, 98, 71,
				74, 840, 541, 2809, 440, 255, 4, 11, 31, 8, 116, 5, 43, 40, 84, 414, 69,
				103, 496, 179,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*aria*/,
				i /*async*/,
				w /*cancellation*/,
				E /*keyCodes*/,
				C /*types*/,
				d /*uri*/,
				m /*editorState*/,
				r /*editorBrowser*/,
				u /*editorExtensions*/,
				a /*codeEditorService*/,
				h /*embeddedCodeEditorWidget*/,
				c /*editorOptions*/,
				n /*position*/,
				g /*range*/,
				p /*editorCommon*/,
				o /*editorContextKeys*/,
				f /*languages*/,
				b /*referencesController*/,
				s /*referencesModel*/,
				l /*symbolNavigation*/,
				y /*messageController*/,
				$ /*peekView*/,
				v /*nls*/,
				S /*actions*/,
				I /*commands*/,
				T /*contextkey*/,
				P /*editor*/,
				k /*instantiation*/,
				L /*keybindingsRegistry*/,
				D /*notification*/,
				M /*progress*/,
				N /*goToSymbol*/,
				A /*languageFeatures*/,
				R /*iterator*/,
				O /*markerDecorations*/,
				B /*contextkeys*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$XOb = e.$WOb = e.$VOb = void 0),
					(n = mt(n)),
					(v = mt(v)),
					S.$ZX.appendMenuItem(S.$XX.EditorContext, {
						submenu: S.$XX.EditorContextPeek,
						title: v.localize(1103, null),
						group: "navigation",
						order: 100,
					});
				class U {
					static is(W) {
						return !W || typeof W != "object"
							? !1
							: !!(
									W instanceof U ||
									(n.$hL.isIPosition(W.position) && W.model)
								);
					}
					constructor(W, X) {
						(this.model = W), (this.position = X);
					}
				}
				e.$VOb = U;
				class z extends u.$ktb {
					static {
						this.d = new Map();
					}
					static {
						this.f = new Set();
					}
					static all() {
						return z.d.values();
					}
					static g(W) {
						const X = { ...W, f1: !0 };
						if (X.menu)
							for (const Y of R.Iterable.wrap(X.menu))
								(Y.id === S.$XX.EditorContext ||
									Y.id === S.$XX.EditorContextPeek) &&
									(Y.when = T.$Kj.and(W.precondition, Y.when));
						return X;
					}
					constructor(W, X) {
						super(z.g(X)), (this.configuration = W), z.d.set(X.id, this);
					}
					runEditorCommand(W, X, Y, ie) {
						if (!X.hasModel()) return Promise.resolve(void 0);
						const ne = W.get(D.$4N),
							ee = W.get(a.$dtb),
							_ = W.get(M.$bO),
							te = W.get(l.$GOb),
							Q = W.get(A.$k3),
							Z = W.get(k.$Li),
							se = X.getModel(),
							re = X.getPosition(),
							le = U.is(Y) ? Y : new U(se, re),
							oe = new m.$Nzb(
								X,
								m.CodeEditorStateFlag.Value | m.CodeEditorStateFlag.Position,
							),
							ae = (0, i.$Ah)(
								this.h(Q, le.model, le.position, oe.token),
								oe.token,
							)
								.then(
									async (pe) => {
										if (!pe || oe.token.isCancellationRequested) return;
										(0, t.$oib)(pe.ariaMessage);
										let $e;
										if (pe.referenceAt(se.uri, re)) {
											const ue = this.k(X);
											!z.f.has(ue) && z.d.has(ue) && ($e = z.d.get(ue));
										}
										this.configuration.onlyGoToDefIfDefAndSingleResult &&
											($e = null);
										const ye = pe.references.length;
										if (ye === 0) {
											if (!this.configuration.muteMessage) {
												const ue = se.getWordAtPosition(re);
												y.$Szb.get(X)?.showMessage(this.j(ue), re);
											}
										} else if (ye === 1 && $e)
											z.f.add(this.desc.id),
												Z.invokeFunction((ue) =>
													$e.runEditorCommand(ue, X, Y, ie).finally(() => {
														z.f.delete(this.desc.id);
													}),
												);
										else return this.m(ee, te, X, pe, ie);
									},
									(pe) => {
										ne.error(pe);
									},
								)
								.finally(() => {
									oe.dispose();
								});
						return _.showWhile(ae, 250), ae;
					}
					async m(W, X, Y, ie, ne) {
						const ee = this.l(Y);
						if (
							!(Y instanceof h.$wDb) &&
							(this.configuration.openInPeek ||
								(ee === "peek" && ie.references.length > 1))
						)
							this.o(Y, ie, ne);
						else {
							const _ = ie.firstReference(),
								te = ie.references.length > 1 && ee === "gotoAndPeek",
								Q = await this.n(Y, W, _, this.configuration.openToSide, !te);
							te && Q ? this.o(Q, ie, ne) : ie.dispose(),
								ee === "goto" && X.put(_);
						}
					}
					async n(W, X, Y, ie, ne) {
						let ee;
						if (
							((0, f.$fM)(Y) && (ee = Y.targetSelectionRange),
							ee || (ee = Y.range),
							!ee)
						)
							return;
						const _ = await X.openCodeEditor(
							{
								resource: Y.uri,
								options: {
									selection: g.$iL.collapseToStart(ee),
									selectionRevealType:
										P.TextEditorSelectionRevealType.NearTopIfOutsideViewport,
									selectionSource: P.TextEditorSelectionSource.JUMP,
								},
							},
							W,
							ie,
						);
						if (_) {
							if (ne) {
								const te = _.getModel(),
									Q = _.createDecorationsCollection([
										{
											range: ee,
											options: {
												description: "symbol-navigate-action-highlight",
												className: "symbolHighlight",
											},
										},
									]);
								setTimeout(() => {
									_.getModel() === te && Q.clear();
								}, 350);
							}
							return _;
						}
					}
					o(W, X, Y) {
						const ie = b.$EOb.get(W);
						ie && W.hasModel()
							? ie.toggleWidget(
									Y ?? W.getSelection(),
									(0, i.$zh)((ne) => Promise.resolve(X)),
									this.configuration.openInPeek,
								)
							: X.dispose();
					}
				}
				e.$WOb = z;
				class F extends z {
					async h(W, X, Y, ie) {
						return new s.$pNb(
							await (0, N.$POb)(W.definitionProvider, X, Y, !1, ie),
							v.localize(1104, null),
						);
					}
					j(W) {
						return W && W.word
							? v.localize(1105, null, W.word)
							: v.localize(1106, null);
					}
					k(W) {
						return W.getOption(c.EditorOption.gotoLocation)
							.alternativeDefinitionCommand;
					}
					l(W) {
						return W.getOption(c.EditorOption.gotoLocation).multipleDefinitions;
					}
				}
				(e.$XOb = F),
					(0, S.$4X)(
						class ga extends F {
							static {
								this.id = "editor.action.revealDefinition";
							}
							constructor() {
								super(
									{ openToSide: !1, openInPeek: !1, muteMessage: !1 },
									{
										id: ga.id,
										title: {
											...v.localize2(1130, "Go to Definition"),
											mnemonicTitle: v.localize(1107, null),
										},
										precondition: o.EditorContextKeys.hasDefinitionProvider,
										keybinding: [
											{
												when: o.EditorContextKeys.editorTextFocus,
												primary: E.KeyCode.F12,
												weight: L.KeybindingWeight.EditorContrib,
											},
											{
												when: T.$Kj.and(
													o.EditorContextKeys.editorTextFocus,
													B.$7Lb,
												),
												primary: E.KeyMod.CtrlCmd | E.KeyCode.F12,
												weight: L.KeybindingWeight.EditorContrib,
											},
										],
										menu: [
											{
												id: S.$XX.EditorContext,
												group: "navigation",
												order: 1.1,
											},
											{
												id: S.$XX.MenubarGoMenu,
												precondition: null,
												group: "4_symbol_nav",
												order: 2,
											},
										],
									},
								),
									I.$fk.registerCommandAlias(
										"editor.action.goToDeclaration",
										ga.id,
									);
							}
						},
					),
					(0, S.$4X)(
						class ma extends F {
							static {
								this.id = "editor.action.revealDefinitionAside";
							}
							constructor() {
								super(
									{ openToSide: !0, openInPeek: !1, muteMessage: !1 },
									{
										id: ma.id,
										title: v.localize2(1131, "Open Definition to the Side"),
										precondition: T.$Kj.and(
											o.EditorContextKeys.hasDefinitionProvider,
											o.EditorContextKeys.isInEmbeddedEditor.toNegated(),
										),
										keybinding: [
											{
												when: o.EditorContextKeys.editorTextFocus,
												primary: (0, E.$os)(E.$ps, E.KeyCode.F12),
												mac: { primary: (0, E.$os)(E.$qs, E.KeyCode.F12) },
												weight: L.KeybindingWeight.EditorContrib,
											},
											{
												when: T.$Kj.and(
													o.EditorContextKeys.editorTextFocus,
													B.$7Lb,
												),
												primary: (0, E.$os)(
													E.$ps,
													E.KeyMod.CtrlCmd | E.KeyCode.F12,
												),
												mac: {
													primary: (0, E.$os)(
														E.$qs,
														E.KeyMod.CtrlCmd | E.KeyCode.F12,
													),
												},
												weight: L.KeybindingWeight.EditorContrib,
											},
										],
									},
								),
									I.$fk.registerCommandAlias(
										"editor.action.openDeclarationToTheSide",
										ma.id,
									);
							}
						},
					),
					(0, S.$4X)(
						class pa extends F {
							static {
								this.id = "editor.action.peekDefinition";
							}
							constructor() {
								super(
									{ openToSide: !1, openInPeek: !0, muteMessage: !1 },
									{
										id: pa.id,
										title: v.localize2(1132, "Peek Definition"),
										precondition: T.$Kj.and(
											o.EditorContextKeys.hasDefinitionProvider,
											$.PeekContext.notInPeekEditor,
											o.EditorContextKeys.isInEmbeddedEditor.toNegated(),
										),
										keybinding: {
											when: o.EditorContextKeys.editorTextFocus,
											primary: E.KeyMod.Alt | E.KeyCode.F12,
											linux: {
												primary:
													E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.F10,
											},
											weight: L.KeybindingWeight.EditorContrib,
										},
										menu: {
											id: S.$XX.EditorContextPeek,
											group: "peek",
											order: 2,
										},
									},
								),
									I.$fk.registerCommandAlias(
										"editor.action.previewDeclaration",
										pa.id,
									);
							}
						},
					);
				class x extends z {
					async h(W, X, Y, ie) {
						return new s.$pNb(
							await (0, N.$QOb)(W.declarationProvider, X, Y, !1, ie),
							v.localize(1108, null),
						);
					}
					j(W) {
						return W && W.word
							? v.localize(1109, null, W.word)
							: v.localize(1110, null);
					}
					k(W) {
						return W.getOption(c.EditorOption.gotoLocation)
							.alternativeDeclarationCommand;
					}
					l(W) {
						return W.getOption(c.EditorOption.gotoLocation)
							.multipleDeclarations;
					}
				}
				(0, S.$4X)(
					class Na extends x {
						static {
							this.id = "editor.action.revealDeclaration";
						}
						constructor() {
							super(
								{ openToSide: !1, openInPeek: !1, muteMessage: !1 },
								{
									id: Na.id,
									title: {
										...v.localize2(1133, "Go to Declaration"),
										mnemonicTitle: v.localize(1111, null),
									},
									precondition: T.$Kj.and(
										o.EditorContextKeys.hasDeclarationProvider,
										o.EditorContextKeys.isInEmbeddedEditor.toNegated(),
									),
									menu: [
										{
											id: S.$XX.EditorContext,
											group: "navigation",
											order: 1.3,
										},
										{
											id: S.$XX.MenubarGoMenu,
											precondition: null,
											group: "4_symbol_nav",
											order: 3,
										},
									],
								},
							);
						}
						j(W) {
							return W && W.word
								? v.localize(1112, null, W.word)
								: v.localize(1113, null);
						}
					},
				),
					(0, S.$4X)(
						class extends x {
							constructor() {
								super(
									{ openToSide: !1, openInPeek: !0, muteMessage: !1 },
									{
										id: "editor.action.peekDeclaration",
										title: v.localize2(1134, "Peek Declaration"),
										precondition: T.$Kj.and(
											o.EditorContextKeys.hasDeclarationProvider,
											$.PeekContext.notInPeekEditor,
											o.EditorContextKeys.isInEmbeddedEditor.toNegated(),
										),
										menu: {
											id: S.$XX.EditorContextPeek,
											group: "peek",
											order: 3,
										},
									},
								);
							}
						},
					);
				class H extends z {
					async h(W, X, Y, ie) {
						return new s.$pNb(
							await (0, N.$SOb)(W.typeDefinitionProvider, X, Y, !1, ie),
							v.localize(1114, null),
						);
					}
					j(W) {
						return W && W.word
							? v.localize(1115, null, W.word)
							: v.localize(1116, null);
					}
					k(W) {
						return W.getOption(c.EditorOption.gotoLocation)
							.alternativeTypeDefinitionCommand;
					}
					l(W) {
						return W.getOption(c.EditorOption.gotoLocation)
							.multipleTypeDefinitions;
					}
				}
				(0, S.$4X)(
					class Ra extends H {
						static {
							this.ID = "editor.action.goToTypeDefinition";
						}
						constructor() {
							super(
								{ openToSide: !1, openInPeek: !1, muteMessage: !1 },
								{
									id: Ra.ID,
									title: {
										...v.localize2(1135, "Go to Type Definition"),
										mnemonicTitle: v.localize(1117, null),
									},
									precondition: o.EditorContextKeys.hasTypeDefinitionProvider,
									keybinding: {
										when: o.EditorContextKeys.editorTextFocus,
										primary: 0,
										weight: L.KeybindingWeight.EditorContrib,
									},
									menu: [
										{
											id: S.$XX.EditorContext,
											group: "navigation",
											order: 1.4,
										},
										{
											id: S.$XX.MenubarGoMenu,
											precondition: null,
											group: "4_symbol_nav",
											order: 3,
										},
									],
								},
							);
						}
					},
				),
					(0, S.$4X)(
						class Aa extends H {
							static {
								this.ID = "editor.action.peekTypeDefinition";
							}
							constructor() {
								super(
									{ openToSide: !1, openInPeek: !0, muteMessage: !1 },
									{
										id: Aa.ID,
										title: v.localize2(1136, "Peek Type Definition"),
										precondition: T.$Kj.and(
											o.EditorContextKeys.hasTypeDefinitionProvider,
											$.PeekContext.notInPeekEditor,
											o.EditorContextKeys.isInEmbeddedEditor.toNegated(),
										),
										menu: {
											id: S.$XX.EditorContextPeek,
											group: "peek",
											order: 4,
										},
									},
								);
							}
						},
					);
				class q extends z {
					async h(W, X, Y, ie) {
						return new s.$pNb(
							await (0, N.$ROb)(W.implementationProvider, X, Y, !1, ie),
							v.localize(1118, null),
						);
					}
					j(W) {
						return W && W.word
							? v.localize(1119, null, W.word)
							: v.localize(1120, null);
					}
					k(W) {
						return W.getOption(c.EditorOption.gotoLocation)
							.alternativeImplementationCommand;
					}
					l(W) {
						return W.getOption(c.EditorOption.gotoLocation)
							.multipleImplementations;
					}
				}
				(0, S.$4X)(
					class Oa extends q {
						static {
							this.ID = "editor.action.goToImplementation";
						}
						constructor() {
							super(
								{ openToSide: !1, openInPeek: !1, muteMessage: !1 },
								{
									id: Oa.ID,
									title: {
										...v.localize2(1137, "Go to Implementations"),
										mnemonicTitle: v.localize(1121, null),
									},
									precondition: o.EditorContextKeys.hasImplementationProvider,
									keybinding: {
										when: o.EditorContextKeys.editorTextFocus,
										primary: E.KeyMod.CtrlCmd | E.KeyCode.F12,
										weight: L.KeybindingWeight.EditorContrib,
									},
									menu: [
										{
											id: S.$XX.EditorContext,
											group: "navigation",
											order: 1.45,
										},
										{
											id: S.$XX.MenubarGoMenu,
											precondition: null,
											group: "4_symbol_nav",
											order: 4,
										},
									],
								},
							);
						}
					},
				),
					(0, S.$4X)(
						class Fa extends q {
							static {
								this.ID = "editor.action.peekImplementation";
							}
							constructor() {
								super(
									{ openToSide: !1, openInPeek: !0, muteMessage: !1 },
									{
										id: Fa.ID,
										title: v.localize2(1138, "Peek Implementations"),
										precondition: T.$Kj.and(
											o.EditorContextKeys.hasImplementationProvider,
											$.PeekContext.notInPeekEditor,
											o.EditorContextKeys.isInEmbeddedEditor.toNegated(),
										),
										keybinding: {
											when: o.EditorContextKeys.editorTextFocus,
											primary:
												E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.F12,
											weight: L.KeybindingWeight.EditorContrib,
										},
										menu: {
											id: S.$XX.EditorContextPeek,
											group: "peek",
											order: 5,
										},
									},
								);
							}
						},
					);
				class V extends z {
					j(W) {
						return W ? v.localize(1122, null, W.word) : v.localize(1123, null);
					}
					k(W) {
						return W.getOption(c.EditorOption.gotoLocation)
							.alternativeReferenceCommand;
					}
					l(W) {
						return W.getOption(c.EditorOption.gotoLocation).multipleReferences;
					}
				}
				(0, S.$4X)(
					class extends V {
						constructor() {
							super(
								{ openToSide: !1, openInPeek: !1, muteMessage: !1 },
								{
									id: "editor.action.goToReferences",
									title: {
										...v.localize2(1139, "Go to References"),
										mnemonicTitle: v.localize(1124, null),
									},
									precondition: T.$Kj.and(
										o.EditorContextKeys.hasReferenceProvider,
										$.PeekContext.notInPeekEditor,
										o.EditorContextKeys.isInEmbeddedEditor.toNegated(),
									),
									keybinding: {
										when: o.EditorContextKeys.editorTextFocus,
										primary: E.KeyMod.Shift | E.KeyCode.F12,
										weight: L.KeybindingWeight.EditorContrib,
									},
									menu: [
										{
											id: S.$XX.EditorContext,
											group: "navigation",
											order: 1.45,
										},
										{
											id: S.$XX.MenubarGoMenu,
											precondition: null,
											group: "4_symbol_nav",
											order: 5,
										},
									],
								},
							);
						}
						async h(W, X, Y, ie) {
							return new s.$pNb(
								await (0, N.$TOb)(W.referenceProvider, X, Y, !0, !1, ie),
								v.localize(1125, null),
							);
						}
					},
				),
					(0, S.$4X)(
						class extends V {
							constructor() {
								super(
									{ openToSide: !1, openInPeek: !0, muteMessage: !1 },
									{
										id: "editor.action.referenceSearch.trigger",
										title: v.localize2(1140, "Peek References"),
										precondition: T.$Kj.and(
											o.EditorContextKeys.hasReferenceProvider,
											$.PeekContext.notInPeekEditor,
											o.EditorContextKeys.isInEmbeddedEditor.toNegated(),
										),
										menu: {
											id: S.$XX.EditorContextPeek,
											group: "peek",
											order: 6,
										},
									},
								);
							}
							async h(W, X, Y, ie) {
								return new s.$pNb(
									await (0, N.$TOb)(W.referenceProvider, X, Y, !1, !1, ie),
									v.localize(1126, null),
								);
							}
						},
					);
				class G extends z {
					constructor(W, X, Y) {
						super(W, {
							id: "editor.action.goToLocation",
							title: v.localize2(1141, "Go to Any Symbol"),
							precondition: T.$Kj.and(
								$.PeekContext.notInPeekEditor,
								o.EditorContextKeys.isInEmbeddedEditor.toNegated(),
							),
						}),
							(this.e = X),
							(this.p = Y);
					}
					async h(W, X, Y, ie) {
						return new s.$pNb(this.e, v.localize(1127, null));
					}
					j(W) {
						return (W && v.localize(1128, null, W.word)) || "";
					}
					l(W) {
						return (
							this.p ??
							W.getOption(c.EditorOption.gotoLocation).multipleReferences
						);
					}
					k() {
						return "";
					}
				}
				I.$fk.registerCommand({
					id: "editor.action.goToLocations",
					metadata: {
						description: "Go to locations from a position in a file",
						args: [
							{
								name: "uri",
								description: "The text document in which to start",
								constraint: d.URI,
							},
							{
								name: "position",
								description: "The position at which to start",
								constraint: n.$hL.isIPosition,
							},
							{
								name: "locations",
								description: "An array of locations.",
								constraint: Array,
							},
							{
								name: "multiple",
								description:
									"Define what to do when having multiple results, either `peek`, `gotoAndPeek`, or `goto`",
							},
							{
								name: "noResultsMessage",
								description:
									"Human readable message that shows when locations is empty.",
							},
						],
					},
					handler: async (J, W, X, Y, ie, ne, ee) => {
						(0, C.$vg)(d.URI.isUri(W)),
							(0, C.$vg)(n.$hL.isIPosition(X)),
							(0, C.$vg)(Array.isArray(Y)),
							(0, C.$vg)(typeof ie > "u" || typeof ie == "string"),
							(0, C.$vg)(typeof ee > "u" || typeof ee == "boolean");
						const _ = J.get(a.$dtb),
							te = await _.openCodeEditor(
								{ resource: W },
								_.getFocusedCodeEditor(),
							);
						if ((0, r.$0sb)(te))
							return (
								te.setPosition(X),
								te.revealPositionInCenterIfOutsideViewport(
									X,
									p.ScrollType.Smooth,
								),
								te.invokeWithinContext((Q) => {
									const Z = new (class extends G {
										j(se) {
											return ne || super.j(se);
										}
									})(
										{ muteMessage: !ne, openInPeek: !!ee, openToSide: !1 },
										Y,
										ie,
									);
									Q.get(k.$Li).invokeFunction(Z.run.bind(Z), te);
								})
							);
					},
				}),
					I.$fk.registerCommand({
						id: "editor.action.peekLocations",
						metadata: {
							description: "Peek locations from a position in a file",
							args: [
								{
									name: "uri",
									description: "The text document in which to start",
									constraint: d.URI,
								},
								{
									name: "position",
									description: "The position at which to start",
									constraint: n.$hL.isIPosition,
								},
								{
									name: "locations",
									description: "An array of locations.",
									constraint: Array,
								},
								{
									name: "multiple",
									description:
										"Define what to do when having multiple results, either `peek`, `gotoAndPeek`, or `goto`",
								},
							],
						},
						handler: async (J, W, X, Y, ie) => {
							J.get(I.$ek).executeCommand(
								"editor.action.goToLocations",
								W,
								X,
								Y,
								ie,
								void 0,
								!0,
							);
						},
					}),
					I.$fk.registerCommand({
						id: "editor.action.findReferences",
						handler: (J, W, X) => {
							(0, C.$vg)(d.URI.isUri(W)), (0, C.$vg)(n.$hL.isIPosition(X));
							const Y = J.get(A.$k3),
								ie = J.get(a.$dtb);
							return ie
								.openCodeEditor({ resource: W }, ie.getFocusedCodeEditor())
								.then((ne) => {
									if (!(0, r.$0sb)(ne) || !ne.hasModel()) return;
									const ee = b.$EOb.get(ne);
									if (!ee) return;
									const _ = (0, i.$zh)((Q) =>
											(0, N.$TOb)(
												Y.referenceProvider,
												ne.getModel(),
												n.$hL.lift(X),
												!1,
												!1,
												Q,
											).then((Z) => new s.$pNb(Z, v.localize(1129, null))),
										),
										te = new g.$iL(
											X.lineNumber,
											X.column,
											X.lineNumber,
											X.column,
										);
									return Promise.resolve(ee.toggleWidget(te, _, !1));
								});
						},
					}),
					I.$fk.registerCommandAlias(
						"editor.action.showReferences",
						"editor.action.peekLocations",
					);
				class K extends u.$ktb {
					runEditorCommand(W, X, ...Y) {
						const ie = X.getModel()?.uri.toString(),
							ne = X.getModel(),
							ee = X.getPosition(),
							_ = W.get(A.$k3),
							te = W.get(O.$bub),
							Q = W.get(I.$ek),
							Z = new w.$Ce();
						setTimeout(() => Z.cancel(), 1e3),
							(0, N.$POb)(_.definitionProvider, ne, ee, !1, Z.token).then(
								(se) => {
									const re = se[0],
										le = re.originSelectionRange ?? re.range,
										oe = ne.getValueInRange(le);
									te.callInsertExplainSymbolChatCallback({
										editorUri: ie,
										symbolName: oe,
									}),
										Q.executeCommand("aichat.opensidebar"),
										Q.executeCommand("aichat.focus");
								},
							);
					}
				}
			},
		)
