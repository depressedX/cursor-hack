import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/ui/aria/aria.js';
import '../../../../base/common/async.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/htmlContent.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/types.js';
import '../../../../base/common/uri.js';
import '../../../browser/editorExtensions.js';
import '../../../browser/services/bulkEditService.js';
import '../../../browser/services/codeEditorService.js';
import '../../../common/core/position.js';
import '../../../common/core/range.js';
import '../../../common/editorContextKeys.js';
import '../../../common/languages.js';
import '../../../common/services/languageFeatures.js';
import '../../../common/services/textResourceConfiguration.js';
import '../../editorState/browser/editorState.js';
import '../../message/browser/messageController.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/progress/common/progress.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/telemetry/common/telemetry.js';
import './renameWidget.js';
define(
			de[2863],
			he([
				1, 0, 127, 15, 33, 29, 94, 27, 3, 28, 9, 46, 199, 65, 48, 17, 71, 74,
				69, 125, 439, 440, 4, 11, 81, 8, 5, 43, 34, 40, 84, 30, 32, 2862,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*aria*/,
				i /*async*/,
				w /*cancellation*/,
				E /*errors*/,
				C /*htmlContent*/,
				d /*keyCodes*/,
				m /*lifecycle*/,
				r /*types*/,
				u /*uri*/,
				a /*editorExtensions*/,
				h /*bulkEditService*/,
				c /*codeEditorService*/,
				n /*position*/,
				g /*range*/,
				p /*editorContextKeys*/,
				o /*languages*/,
				f /*languageFeatures*/,
				b /*textResourceConfiguration*/,
				s /*editorState*/,
				l /*messageController*/,
				y /*nls*/,
				$ /*actions*/,
				v /*configurationRegistry*/,
				S /*contextkey*/,
				I /*instantiation*/,
				T /*keybindingsRegistry*/,
				P /*log*/,
				k /*notification*/,
				L /*progress*/,
				D /*platform*/,
				M /*telemetry*/,
				N /*renameWidget*/,
) {
				"use strict";
				var A;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ekc = void 0),
					(e.$dkc = O),
					(y = mt(y));
				class R {
					constructor(x, H, q) {
						(this.c = x), (this.d = H), (this.b = 0), (this.a = q.ordered(x));
					}
					hasProvider() {
						return this.a.length > 0;
					}
					async resolveRenameLocation(x) {
						const H = [];
						for (this.b = 0; this.b < this.a.length; this.b++) {
							const V = this.a[this.b];
							if (!V.resolveRenameLocation) break;
							const G = await V.resolveRenameLocation(this.c, this.d, x);
							if (G) {
								if (G.rejectReason) {
									H.push(G.rejectReason);
									continue;
								}
								return G;
							}
						}
						this.b = 0;
						const q = this.c.getWordAtPosition(this.d);
						return q
							? {
									range: new g.$iL(
										this.d.lineNumber,
										q.startColumn,
										this.d.lineNumber,
										q.endColumn,
									),
									text: q.word,
									rejectReason:
										H.length > 0
											? H.join(`
`)
											: void 0,
								}
							: {
									range: g.$iL.fromPositions(this.d),
									text: "",
									rejectReason:
										H.length > 0
											? H.join(`
`)
											: void 0,
								};
					}
					async provideRenameEdits(x, H) {
						return this.f(x, this.b, [], H);
					}
					async f(x, H, q, V) {
						const G = this.a[H];
						if (!G)
							return {
								edits: [],
								rejectReason: q.join(`
`),
							};
						const K = await G.provideRenameEdits(this.c, this.d, x, V);
						if (K) {
							if (K.rejectReason)
								return this.f(x, H + 1, q.concat(K.rejectReason), V);
						} else return this.f(x, H + 1, q.concat(y.localize(1402, null)), V);
						return K;
					}
				}
				async function O(F, x, H, q) {
					const V = new R(x, H, F),
						G = await V.resolveRenameLocation(w.CancellationToken.None);
					return G?.rejectReason
						? { edits: [], rejectReason: G.rejectReason }
						: V.provideRenameEdits(q, w.CancellationToken.None);
				}
				let B = class {
					static {
						A = this;
					}
					static {
						this.ID = "editor.contrib.renameController";
					}
					static get(x) {
						return x.getContribution(A.ID);
					}
					constructor(x, H, q, V, G, K, J, W, X) {
						(this.d = x),
							(this.f = H),
							(this.g = q),
							(this.h = V),
							(this.j = G),
							(this.l = K),
							(this.m = J),
							(this.n = W),
							(this.o = X),
							(this.b = new m.$Zc()),
							(this.c = new w.$Ce()),
							(this.a = this.b.add(
								this.f.createInstance(N.$ckc, this.d, [
									"acceptRenameInput",
									"acceptRenameInputWithPreview",
								]),
							));
					}
					dispose() {
						this.b.dispose(), this.c.dispose(!0);
					}
					async run() {
						const x = this.l.trace.bind(this.l, "[rename]");
						if (
							(this.c.dispose(!0), (this.c = new w.$Ce()), !this.d.hasModel())
						) {
							x("editor has no model");
							return;
						}
						const H = this.d.getPosition(),
							q = new R(this.d.getModel(), H, this.n.renameProvider);
						if (!q.hasProvider()) {
							x("skeleton has no provider");
							return;
						}
						const V = new s.$Nzb(
							this.d,
							s.CodeEditorStateFlag.Position | s.CodeEditorStateFlag.Value,
							void 0,
							this.c.token,
						);
						let G;
						try {
							x("resolving rename location");
							const _ = q.resolveRenameLocation(V.token);
							this.j.showWhile(_, 250),
								(G = await _),
								x("resolved rename location");
						} catch (_) {
							_ instanceof E.$9
								? x(
										"resolve rename location cancelled",
										JSON.stringify(_, null, "	"),
									)
								: (x(
										"resolve rename location failed",
										_ instanceof Error ? _ : JSON.stringify(_, null, "	"),
									),
									(typeof _ == "string" || (0, C.$el)(_)) &&
										l.$Szb
											.get(this.d)
											?.showMessage(_ || y.localize(1403, null), H));
							return;
						} finally {
							V.dispose();
						}
						if (!G) {
							x("returning early - no loc");
							return;
						}
						if (G.rejectReason) {
							x(
								`returning early - rejected with reason: ${G.rejectReason}`,
								G.rejectReason,
							),
								l.$Szb.get(this.d)?.showMessage(G.rejectReason, H);
							return;
						}
						if (V.token.isCancellationRequested) {
							x("returning early - cts1 cancelled");
							return;
						}
						const K = new s.$Nzb(
								this.d,
								s.CodeEditorStateFlag.Position | s.CodeEditorStateFlag.Value,
								G.range,
								this.c.token,
							),
							J = this.d.getModel(),
							W = this.n.newSymbolNamesProvider.all(J),
							X = await Promise.all(
								W.map(async (_) => [
									_,
									(await _.supportsAutomaticNewSymbolNamesTriggerKind) ?? !1,
								]),
							),
							Y = (_, te) => {
								let Q = X.slice();
								return (
									_ === o.NewSymbolNameTriggerKind.Automatic &&
										(Q = Q.filter(([Z, se]) => se)),
									Q.map(([Z]) => Z.provideNewSymbolNames(J, G.range, _, te))
								);
							};
						x("creating rename input field and awaiting its result");
						const ie =
								this.h.hasPreviewHandler() &&
								this.m.getValue(
									this.d.getModel().uri,
									"editor.rename.enablePreview",
								),
							ne = await this.a.getInput(
								G.range,
								G.text,
								ie,
								W.length > 0 ? Y : void 0,
								K,
							);
						if (
							(x("received response from rename input field"),
							W.length > 0 && this.q(W.length, J.getLanguageId(), ne),
							typeof ne == "boolean")
						) {
							x(`returning early - rename input field response - ${ne}`),
								ne && this.d.focus(),
								K.dispose();
							return;
						}
						this.d.focus(), x("requesting rename edits");
						const ee = (0, i.$Ah)(
							q.provideRenameEdits(ne.newName, K.token),
							K.token,
						)
							.then(
								async (_) => {
									if (!_) {
										x("returning early - no rename edits result");
										return;
									}
									if (!this.d.hasModel()) {
										x(
											"returning early - no model after rename edits are provided",
										);
										return;
									}
									if (_.rejectReason) {
										x(
											`returning early - rejected with reason: ${_.rejectReason}`,
										),
											this.g.info(_.rejectReason);
										return;
									}
									this.d.setSelection(
										g.$iL.fromPositions(this.d.getSelection().getPosition()),
									),
										x("applying edits"),
										this.h
											.apply(_, {
												editor: this.d,
												showPreview: ne.wantsPreview,
												label: y.localize(1404, null, G?.text, ne.newName),
												code: "undoredo.rename",
												quotableLabel: y.localize(
													1405,
													null,
													G?.text,
													ne.newName,
												),
												respectAutoSaveConfig: !0,
											})
											.then((te) => {
												x("edits applied"),
													te.ariaSummary &&
														(0, t.$oib)(
															y.localize(
																1406,
																null,
																G.text,
																ne.newName,
																te.ariaSummary,
															),
														);
											})
											.catch((te) => {
												x(
													`error when applying edits ${JSON.stringify(te, null, "	")}`,
												),
													this.g.error(y.localize(1407, null)),
													this.l.error(te);
											});
								},
								(_) => {
									x(
										"error when providing rename edits",
										JSON.stringify(_, null, "	"),
									),
										this.g.error(y.localize(1408, null)),
										this.l.error(_);
								},
							)
							.finally(() => {
								K.dispose();
							});
						return (
							x("returning rename operation"), this.j.showWhile(ee, 250), ee
						);
					}
					acceptRenameInput(x) {
						this.a.acceptInput(x);
					}
					cancelRenameInput() {
						this.a.cancelInput(!0, "cancelRenameInput command");
					}
					focusNextRenameSuggestion() {
						this.a.focusNextRenameSuggestion();
					}
					focusPreviousRenameSuggestion() {
						this.a.focusPreviousRenameSuggestion();
					}
					q(x, H, q) {
						const V =
							typeof q == "boolean"
								? {
										kind: "cancelled",
										languageId: H,
										nRenameSuggestionProviders: x,
									}
								: {
										kind: "accepted",
										languageId: H,
										nRenameSuggestionProviders: x,
										source: q.stats.source.k,
										nRenameSuggestions: q.stats.nRenameSuggestions,
										timeBeforeFirstInputFieldEdit:
											q.stats.timeBeforeFirstInputFieldEdit,
										wantsPreview: q.wantsPreview,
										nRenameSuggestionsInvocations:
											q.stats.nRenameSuggestionsInvocations,
										hadAutomaticRenameSuggestionsInvocation:
											q.stats.hadAutomaticRenameSuggestionsInvocation,
									};
						this.o.publicLog2("renameInvokedEvent", V);
					}
				};
				B = A = Ne(
					[
						j(1, I.$Li),
						j(2, k.$4N),
						j(3, h.$rzb),
						j(4, L.$bO),
						j(5, P.$ik),
						j(6, b.$XO),
						j(7, f.$k3),
						j(8, M.$km),
					],
					B,
				);
				class U extends a.$itb {
					constructor() {
						super({
							id: "editor.action.rename",
							label: y.localize(1409, null),
							alias: "Rename Symbol",
							precondition: S.$Kj.and(
								p.EditorContextKeys.writable,
								p.EditorContextKeys.hasRenameProvider,
							),
							kbOpts: {
								kbExpr: p.EditorContextKeys.editorTextFocus,
								primary: d.KeyCode.F2,
								weight: T.KeybindingWeight.EditorContrib,
							},
							contextMenuOpts: { group: "1_modification", order: 1.1 },
						});
					}
					runCommand(x, H) {
						const q = x.get(c.$dtb),
							[V, G] = (Array.isArray(H) && H) || [void 0, void 0];
						return u.URI.isUri(V) && n.$hL.isIPosition(G)
							? q
									.openCodeEditor({ resource: V }, q.getActiveCodeEditor())
									.then((K) => {
										K &&
											(K.setPosition(G),
											K.invokeWithinContext(
												(J) => (this.w(J, K), this.run(J, K)),
											));
									}, E.$4)
							: super.runCommand(x, H);
					}
					run(x, H) {
						const q = x.get(P.$ik),
							V = B.get(H);
						return V
							? (q.trace("[RenameAction] got controller, running..."), V.run())
							: (q.trace("[RenameAction] returning early - controller missing"),
								Promise.resolve());
					}
				}
				(e.$ekc = U),
					(0, a.$qtb)(B.ID, B, a.EditorContributionInstantiation.Lazy),
					(0, a.$ntb)(U);
				const z = a.$htb.bindToContribution(B.get);
				(0, a.$mtb)(
					new z({
						id: "acceptRenameInput",
						precondition: N.$akc,
						handler: (F) => F.acceptRenameInput(!1),
						kbOpts: {
							weight: T.KeybindingWeight.EditorContrib + 99,
							kbExpr: S.$Kj.and(
								p.EditorContextKeys.focus,
								S.$Kj.not("isComposing"),
							),
							primary: d.KeyCode.Enter,
						},
					}),
				),
					(0, a.$mtb)(
						new z({
							id: "acceptRenameInputWithPreview",
							precondition: S.$Kj.and(
								N.$akc,
								S.$Kj.has("config.editor.rename.enablePreview"),
							),
							handler: (F) => F.acceptRenameInput(!0),
							kbOpts: {
								weight: T.KeybindingWeight.EditorContrib + 99,
								kbExpr: S.$Kj.and(
									p.EditorContextKeys.focus,
									S.$Kj.not("isComposing"),
								),
								primary: d.KeyMod.CtrlCmd + d.KeyCode.Enter,
							},
						}),
					),
					(0, a.$mtb)(
						new z({
							id: "cancelRenameInput",
							precondition: N.$akc,
							handler: (F) => F.cancelRenameInput(),
							kbOpts: {
								weight: T.KeybindingWeight.EditorContrib + 99,
								kbExpr: p.EditorContextKeys.focus,
								primary: d.KeyCode.Escape,
								secondary: [d.KeyMod.Shift | d.KeyCode.Escape],
							},
						}),
					),
					(0, $.$4X)(
						class extends $.$3X {
							constructor() {
								super({
									id: "focusNextRenameSuggestion",
									title: {
										...y.localize2(1411, "Focus Next Rename Suggestion"),
									},
									precondition: N.$akc,
									keybinding: [
										{
											primary: d.KeyCode.DownArrow,
											weight: T.KeybindingWeight.EditorContrib + 99,
										},
									],
								});
							}
							run(x) {
								const H = x.get(c.$dtb).getFocusedCodeEditor();
								if (!H) return;
								const q = B.get(H);
								q && q.focusNextRenameSuggestion();
							}
						},
					),
					(0, $.$4X)(
						class extends $.$3X {
							constructor() {
								super({
									id: "focusPreviousRenameSuggestion",
									title: {
										...y.localize2(1412, "Focus Previous Rename Suggestion"),
									},
									precondition: N.$akc,
									keybinding: [
										{
											primary: d.KeyCode.UpArrow,
											weight: T.KeybindingWeight.EditorContrib + 99,
										},
									],
								});
							}
							run(x) {
								const H = x.get(c.$dtb).getFocusedCodeEditor();
								if (!H) return;
								const q = B.get(H);
								q && q.focusPreviousRenameSuggestion();
							}
						},
					),
					(0, a.$ltb)(
						"_executeDocumentRenameProvider",
						function (F, x, H, ...q) {
							const [V] = q;
							(0, r.$vg)(typeof V == "string");
							const { renameProvider: G } = F.get(f.$k3);
							return O(G, x, H, V);
						},
					),
					(0, a.$ltb)("_executePrepareRename", async function (F, x, H) {
						const { renameProvider: q } = F.get(f.$k3),
							G = await new R(x, H, q).resolveRenameLocation(
								w.CancellationToken.None,
							);
						if (G?.rejectReason) throw new Error(G.rejectReason);
						return G;
					}),
					D.$Io
						.as(v.$No.Configuration)
						.registerConfiguration({
							id: "editor",
							properties: {
								"editor.rename.enablePreview": {
									scope: v.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									description: y.localize(1410, null),
									default: !0,
									type: "boolean",
								},
							},
						});
			},
		)
