import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/keyboardEvent.js';
import '../../../../base/browser/ui/button/button.js';
import '../../../../base/browser/ui/hover/hoverDelegateFactory.js';
import '../../../../base/browser/ui/selectBox/selectBox.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/uri.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../editor/browser/widget/codeEditor/codeEditorWidget.js';
import '../../../../editor/common/config/editorOptions.js';
import '../../../../editor/common/core/position.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/common/editorContextKeys.js';
import '../../../../editor/common/languages.js';
import '../../../../editor/common/languages/modesRegistry.js';
import '../../../../editor/common/services/languageFeatures.js';
import '../../../../editor/common/services/model.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../editor/contrib/suggest/browser/suggest.js';
import '../../../../editor/contrib/zoneWidget/browser/zoneWidget.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/hover/browser/hover.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/instantiation/common/serviceCollection.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../platform/label/common/label.js';
import '../../../../platform/theme/browser/defaultStyles.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../codeEditor/browser/simpleEditorOptions.js';
import '../common/debug.js';
import '../../../../css!vs/workbench/contrib/debug/browser/media/breakpointWidget.js';
define(
			de[3769],
			he([
				1, 0, 7, 114, 183, 95, 596, 29, 27, 3, 9, 46, 65, 206, 38, 48, 17, 71,
				74, 172, 69, 67, 42, 373, 680, 4, 10, 8, 49, 72, 5, 128, 39, 43, 73,
				106, 51, 35, 521, 112, 2425,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*keyboardEvent*/,
				w /*button*/,
				E /*hoverDelegateFactory*/,
				C /*selectBox*/,
				d /*errors*/,
				m /*keyCodes*/,
				r /*lifecycle*/,
				u /*uri*/,
				a /*editorExtensions*/,
				h /*codeEditorService*/,
				c /*codeEditorWidget*/,
				n /*editorOptions*/,
				g /*position*/,
				p /*range*/,
				o /*editorContextKeys*/,
				f /*languages*/,
				b /*modesRegistry*/,
				s /*languageFeatures*/,
				l /*model*/,
				y /*resolverService*/,
				$ /*suggest*/,
				v /*zoneWidget*/,
				S /*nls*/,
				I /*configuration*/,
				T /*contextkey*/,
				P /*contextView*/,
				k /*hover*/,
				L /*instantiation*/,
				D /*serviceCollection*/,
				M /*keybinding*/,
				N /*keybindingsRegistry*/,
				A /*label*/,
				R /*defaultStyles*/,
				O /*colorRegistry*/,
				B /*themeService*/,
				U /*simpleEditorOptions*/,
				z /*debug*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$pGc = void 0),
					(t = mt(t)),
					(r = mt(r)),
					(S = mt(S));
				const F = t.$,
					x = (0, L.$Mi)("privateBreakpointWidgetService"),
					H = "breakpointwidgetdecoration";
				function q(W) {
					return W.getModel()
						.bracketPairs.getBracketPairsInRange(
							p.$iL.fromPositions(W.getPosition()),
						)
						.some((ie) => ie.openingBracketInfo.bracketText === "{");
				}
				function V(W, X) {
					const Y = W.getColor(O.$9P)?.transparent(0.4);
					return [
						{
							range: {
								startLineNumber: 0,
								endLineNumber: 0,
								startColumn: 0,
								endColumn: 1,
							},
							renderOptions: {
								after: { contentText: X, color: Y ? Y.toString() : void 0 },
							},
						},
					];
				}
				let G = class extends v.$FLb {
					constructor(
						X,
						Y,
						ie,
						ne,
						ee,
						_,
						te,
						Q,
						Z,
						se,
						re,
						le,
						oe,
						ae,
						pe,
						$e,
						ye,
					) {
						super(X, {
							showFrame: !0,
							showArrow: !1,
							frameWidth: 1,
							isAccessible: !0,
						}),
							(this.P = Y),
							(this.Q = ie),
							(this.R = ee),
							(this.S = _),
							(this.T = te),
							(this.U = Q),
							(this.V = Z),
							(this.W = se),
							(this.X = re),
							(this.Y = le),
							(this.Z = oe),
							(this.ab = ae),
							(this.bb = pe),
							(this.cb = $e),
							(this.db = ye),
							(this.H = ""),
							(this.I = ""),
							(this.J = ""),
							(this.r = []);
						const ue = this.editor.getModel();
						if (ue) {
							const fe = ue.uri,
								me = this.S.getModel().getBreakpoints({
									lineNumber: this.P,
									column: this.Q,
									uri: fe,
								});
							this.L = me.length ? me[0] : void 0;
						}
						ne === void 0
							? this.L &&
								!this.L.condition &&
								!this.L.hitCondition &&
								this.L.logMessage
								? (this.M = z.BreakpointWidgetContext.LOG_MESSAGE)
								: this.L && !this.L.condition && this.L.hitCondition
									? (this.M = z.BreakpointWidgetContext.HIT_COUNT)
									: this.L && this.L.triggeredBy
										? (this.M = z.BreakpointWidgetContext.TRIGGER_POINT)
										: (this.M = z.BreakpointWidgetContext.CONDITION)
							: (this.M = ne),
							this.r.push(
								this.S.getModel().onDidChangeBreakpoints((fe) => {
									this.L &&
										fe &&
										fe.removed &&
										fe.removed.indexOf(this.L) >= 0 &&
										this.dispose();
								}),
							),
							this.X.registerDecorationType("breakpoint-widget", H, {}),
							this.create();
					}
					get eb() {
						const X = this.ab.lookupKeybinding(K.ID)?.getLabel() || "Enter",
							Y = this.ab.lookupKeybinding(J.ID)?.getLabel() || "Escape";
						switch (this.M) {
							case z.BreakpointWidgetContext.LOG_MESSAGE:
								return S.localize(5249, null, X, Y);
							case z.BreakpointWidgetContext.HIT_COUNT:
								return S.localize(5250, null, X, Y);
							default:
								return S.localize(5251, null, X, Y);
						}
					}
					fb(X) {
						switch (this.M) {
							case z.BreakpointWidgetContext.LOG_MESSAGE:
								return X && X.logMessage ? X.logMessage : this.J;
							case z.BreakpointWidgetContext.HIT_COUNT:
								return X && X.hitCondition ? X.hitCondition : this.I;
							default:
								return X && X.condition ? X.condition : this.H;
						}
					}
					gb() {
						if (this.M !== z.BreakpointWidgetContext.TRIGGER_POINT) {
							const X = this.d.getModel().getValue();
							switch (this.M) {
								case z.BreakpointWidgetContext.LOG_MESSAGE:
									this.J = X;
									break;
								case z.BreakpointWidgetContext.HIT_COUNT:
									this.I = X;
									break;
								default:
									this.H = X;
							}
						}
					}
					hb() {
						if (this.editor.hasModel()) {
							const X =
								this.M === z.BreakpointWidgetContext.LOG_MESSAGE
									? b.$0M
									: this.editor.getModel().getLanguageId();
							this.d.getModel().setLanguage(X);
						}
					}
					show(X) {
						const Y = this.d.getModel().getLineCount();
						super.show(X, Y + 1);
					}
					fitHeightToContent() {
						const X = this.d.getModel().getLineCount();
						this.F(X + 1);
					}
					C(X) {
						this.B("breakpoint-widget");
						const Y = new C.$5ib(
							[
								{ text: S.localize(5252, null) },
								{ text: S.localize(5253, null) },
								{ text: S.localize(5254, null) },
								{ text: S.localize(5255, null) },
							],
							this.M,
							this.R,
							R.$Fyb,
							{ ariaLabel: S.localize(5256, null) },
						);
						(this.a = F(".breakpoint-select-container")),
							Y.render(t.$fhb(X, this.a)),
							Y.onDidSelect((ie) => {
								this.gb(), (this.M = ie.index), this.lb();
							}),
							this.jb(X),
							(this.b = F(".inputContainer")),
							this.r.push(
								this.db.setupManagedHover(
									(0, E.$cib)("mouse"),
									this.b,
									this.eb,
								),
							),
							this.ob(t.$fhb(X, this.b)),
							this.d.getModel().setValue(this.fb(this.L)),
							this.r.push(
								this.d.getModel().onDidChangeContent(() => {
									this.fitHeightToContent();
								}),
							),
							this.d.setPosition({
								lineNumber: 1,
								column: this.d.getModel().getLineMaxColumn(1),
							}),
							this.kb(X),
							this.lb(),
							setTimeout(() => this.rb(), 150);
					}
					jb(X) {
						const Y = this.S.getModel().getBreakpointModes("source");
						if (Y.length <= 1) return;
						const ie = (this.k = new C.$5ib(
							[
								{ text: S.localize(5257, null), isDisabled: !0 },
								...Y.map((_) => ({
									text: _.label,
									description: _.description,
								})),
							],
							Y.findIndex((_) => _.mode === this.L?.mode) + 1,
							this.R,
							R.$Fyb,
						));
						this.r.push(ie),
							this.r.push(
								ie.onDidSelect((_) => {
									this.K = Y[_.index - 1];
								}),
							);
						const ne = F(".select-mode-container"),
							ee = F(".select-box-container");
						t.$fhb(ne, ee), ie.render(ee), t.$fhb(X, ne);
					}
					kb(X) {
						const Y = this.S.getModel()
								.getBreakpoints()
								.filter((Q) => Q !== this.L && !Q.logMessage),
							ie = [
								{ text: S.localize(5258, null), isDisabled: !0 },
								...Y.map((Q) => ({
									text: `${this.bb.getUriLabel(Q.uri, { relative: !0 })}: ${Q.lineNumber}`,
									description: S.localize(5259, null),
								})),
							],
							ne = Y.findIndex((Q) => this.L?.triggeredBy === Q.getId());
						for (const [Q, Z] of Y.entries())
							this.cb
								.createModelReference(Z.uri)
								.then((se) => {
									try {
										ie[Q + 1].description = se.object.textEditorModel
											.getLineContent(Z.lineNumber)
											.trim();
									} finally {
										se.dispose();
									}
								})
								.catch(() => {
									ie[Q + 1].description = S.localize(5260, null);
								});
						const ee = (this.j = new C.$5ib(ie, ne + 1, this.R, R.$Fyb, {
							ariaLabel: S.localize(5261, null),
						}));
						ee.onDidSelect((Q) => {
							Q.index === 0 ? (this.O = void 0) : (this.O = Y[Q.index - 1]);
						}),
							this.r.push(ee),
							(this.c = F(".select-breakpoint-container")),
							this.r.push(
								t.$0fb(this.c, t.$$gb.KEY_DOWN, (Q) => {
									new i.$7fb(Q).equals(m.KeyCode.Escape) && this.close(!1);
								}),
							);
						const _ = F(".select-box-container");
						t.$fhb(this.c, _), ee.render(_), t.$fhb(X, this.c);
						const te = new w.$oob(this.c, R.$lyb);
						(te.label = S.localize(5262, null)),
							this.r.push(te.onDidClick(() => this.close(!0))),
							this.r.push(te);
					}
					lb() {
						if (this.M === z.BreakpointWidgetContext.TRIGGER_POINT)
							(this.b.hidden = !0), (this.c.hidden = !1);
						else {
							(this.b.hidden = !1), (this.c.hidden = !0), this.hb();
							const X = this.fb(this.L);
							this.d.getModel().setValue(X), this.rb();
						}
					}
					E(X, Y) {
						(this.N = X),
							this.d.layout({ height: X, width: Y - 113 }),
							this.qb();
					}
					D(X) {
						typeof this.N == "number" && this.E(this.N, X);
					}
					ob(X) {
						const Y = this.U.createScoped(X);
						this.r.push(Y);
						const ie = this.V.createChild(new D.$Ki([T.$6j, Y], [x, this]));
						this.r.push(ie);
						const ne = this.pb(),
							ee = (0, U.$yYb)();
						(this.d = ie.createInstance(c.$rwb, X, ne, ee)),
							z.$04.bindTo(Y).set(!0);
						const _ = this.W.createModel(
							"",
							null,
							u.URI.parse(`${z.$25}:${this.editor.getId()}:breakpointinput`),
							!0,
						);
						this.editor.hasModel() &&
							_.setLanguage(this.editor.getModel().getLanguageId()),
							this.d.setModel(_),
							this.hb(),
							this.r.push(_);
						const te = () => {
							const Z = this.d.getModel().getValue()
								? []
								: V(this.T.getColorTheme(), this.eb);
							this.d.setDecorationsByType("breakpoint-widget", H, Z);
						};
						this.d.getModel().onDidChangeContent(() => te()),
							this.T.onDidColorThemeChange(() => te()),
							this.r.push(
								this.Z.completionProvider.register(
									{ scheme: z.$25, hasAccessToAllModels: !0 },
									{
										_debugDisplayName: "breakpointWidget",
										provideCompletionItems: (Q, Z, se, re) => {
											let le;
											const oe = this.editor.getModel();
											return (
												oe &&
												(this.M === z.BreakpointWidgetContext.CONDITION ||
													(this.M === z.BreakpointWidgetContext.LOG_MESSAGE &&
														q(this.d)))
													? (le = (0, $.$6Cb)(
															this.Z.completionProvider,
															oe,
															new g.$hL(this.P, 1),
															new $.$2Cb(
																void 0,
																new Set().add(f.CompletionItemKind.Snippet),
															),
															se,
															re,
														).then((ae) => {
															let pe = 0;
															if (
																this.M === z.BreakpointWidgetContext.CONDITION
															)
																pe = Z.column - 1;
															else {
																const $e = this.d.getModel().getValue();
																for (
																	;
																	Z.column - 2 - pe >= 0 &&
																	$e[Z.column - 2 - pe] !== "{" &&
																	$e[Z.column - 2 - pe] !== " ";
																)
																	pe++;
															}
															return {
																suggestions: ae.items.map(
																	($e) => (
																		($e.completion.range = p.$iL.fromPositions(
																			Z.delta(0, -pe),
																			Z,
																		)),
																		$e.completion
																	),
																),
															};
														}))
													: (le = Promise.resolve({ suggestions: [] })),
												le
											);
										},
									},
								),
							),
							this.r.push(
								this.Y.onDidChangeConfiguration((Q) => {
									(Q.affectsConfiguration("editor.fontSize") ||
										Q.affectsConfiguration("editor.lineHeight")) &&
										(this.d.updateOptions(this.pb()), this.qb());
								}),
							);
					}
					pb() {
						const X = this.Y.getValue("editor"),
							Y = (0, U.$xYb)(this.Y);
						return (
							(Y.fontSize = X.fontSize),
							(Y.fontFamily = X.fontFamily),
							(Y.lineHeight = X.lineHeight),
							(Y.fontLigatures = X.fontLigatures),
							(Y.ariaLabel = this.eb),
							Y
						);
					}
					qb() {
						if (this.container && typeof this.N == "number") {
							const X = this.d.getOption(n.EditorOption.lineHeight),
								Y = this.d.getModel().getLineCount(),
								ie = (this.N - Y * X) / 2;
							this.b.style.marginTop = ie + "px";
						}
					}
					close(X) {
						if (X) {
							let Y, ie, ne, ee, _, te;
							if (
								(this.gb(),
								(this.H || this.M === z.BreakpointWidgetContext.CONDITION) &&
									(Y = this.H),
								(this.I || this.M === z.BreakpointWidgetContext.HIT_COUNT) &&
									(ie = this.I),
								(this.J || this.M === z.BreakpointWidgetContext.LOG_MESSAGE) &&
									(ne = this.J),
								this.k && ((_ = this.K?.mode), (te = this.K?.label)),
								this.M === z.BreakpointWidgetContext.TRIGGER_POINT &&
									((Y = void 0),
									(ie = void 0),
									(ne = void 0),
									(ee = this.O?.getId())),
								this.L)
							) {
								const Q = new Map();
								Q.set(this.L.getId(), {
									condition: Y,
									hitCondition: ie,
									logMessage: ne,
									triggeredBy: ee,
									mode: _,
									modeLabel: te,
								}),
									this.S.updateBreakpoints(this.L.originalUri, Q, !1).then(
										void 0,
										d.$4,
									);
							} else {
								const Q = this.editor.getModel();
								Q &&
									this.S.addBreakpoints(Q.uri, [
										{
											lineNumber: this.P,
											column: this.Q,
											enabled: !0,
											condition: Y,
											hitCondition: ie,
											logMessage: ne,
											triggeredBy: ee,
											mode: _,
											modeLabel: te,
										},
									]);
							}
						}
						this.dispose();
					}
					rb() {
						this.M === z.BreakpointWidgetContext.TRIGGER_POINT
							? this.j.focus()
							: this.d.focus();
					}
					dispose() {
						super.dispose(),
							this.d.dispose(),
							r.$Vc(this.r),
							setTimeout(() => this.editor.focus(), 0);
					}
				};
				(e.$pGc = G),
					(e.$pGc = G =
						Ne(
							[
								j(4, P.$Wxb),
								j(5, z.$75),
								j(6, B.$iP),
								j(7, T.$6j),
								j(8, L.$Li),
								j(9, l.$QO),
								j(10, h.$dtb),
								j(11, I.$gj),
								j(12, s.$k3),
								j(13, M.$uZ),
								j(14, A.$3N),
								j(15, y.$MO),
								j(16, k.$Uyb),
							],
							G,
						));
				class K extends a.$htb {
					static {
						this.ID = "breakpointWidget.action.acceptInput";
					}
					constructor() {
						super({
							id: K.ID,
							precondition: z.$94,
							kbOpts: {
								kbExpr: z.$04,
								primary: m.KeyCode.Enter,
								weight: N.KeybindingWeight.EditorContrib,
							},
						});
					}
					runEditorCommand(X, Y) {
						X.get(x).close(!0);
					}
				}
				class J extends a.$htb {
					static {
						this.ID = "closeBreakpointWidget";
					}
					constructor() {
						super({
							id: J.ID,
							precondition: z.$94,
							kbOpts: {
								kbExpr: o.EditorContextKeys.textInputFocus,
								primary: m.KeyCode.Escape,
								secondary: [m.KeyMod.Shift | m.KeyCode.Escape],
								weight: N.KeybindingWeight.EditorContrib,
							},
						});
					}
					runEditorCommand(X, Y, ie) {
						const ne = Y.getContribution(z.$15);
						if (ne) return ne.closeBreakpointWidget();
						X.get(x).close(!1);
					}
				}
				(0, a.$mtb)(new K()), (0, a.$mtb)(new J());
			},
		),
		