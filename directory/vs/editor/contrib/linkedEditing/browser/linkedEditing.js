import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/async.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/color.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/event.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/strings.js';
import '../../../../base/common/uri.js';
import '../../../browser/editorExtensions.js';
import '../../../browser/services/codeEditorService.js';
import '../../../common/config/editorOptions.js';
import '../../../common/core/position.js';
import '../../../common/core/range.js';
import '../../../common/editorContextKeys.js';
import '../../../common/model.js';
import '../../../common/model/textModel.js';
import '../../../common/languages/languageConfigurationRegistry.js';
import '../../../../nls.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../common/services/languageFeatures.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../common/services/languageFeatureDebounce.js';
import '../../../../base/common/stopwatch.js';
import '../../../../css!vs/editor/contrib/linkedEditing/browser/linkedEditing.js';
define(
			de[2920],
			he([
				1, 0, 24, 15, 33, 97, 29, 6, 27, 3, 37, 9, 46, 65, 38, 48, 17, 71, 64,
				122, 152, 4, 8, 43, 69, 51, 391, 162, 2312,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*arrays*/,
				i /*async*/,
				w /*cancellation*/,
				E /*color*/,
				C /*errors*/,
				d /*event*/,
				m /*keyCodes*/,
				r /*lifecycle*/,
				u /*strings*/,
				a /*uri*/,
				h /*editorExtensions*/,
				c /*codeEditorService*/,
				n /*editorOptions*/,
				g /*position*/,
				p /*range*/,
				o /*editorContextKeys*/,
				f /*model*/,
				b /*textModel*/,
				s /*languageConfigurationRegistry*/,
				l /*nls*/,
				y /*contextkey*/,
				$ /*keybindingsRegistry*/,
				v /*languageFeatures*/,
				S /*colorRegistry*/,
				I /*languageFeatureDebounce*/,
				T /*stopwatch*/,
) {
				"use strict";
				var P;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ijc = e.$hjc = e.$gjc = e.$fjc = void 0),
					(t = mt(t)),
					(u = mt(u)),
					(l = mt(l)),
					(e.$fjc = new y.$5j("LinkedEditingInputVisible", !1));
				const k = "linked-editing-decoration";
				let L = class extends r.$1c {
					static {
						P = this;
					}
					static {
						this.ID = "editor.contrib.linkedEditing";
					}
					static {
						this.a = b.$eY.register({
							description: "linked-editing",
							stickiness: f.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
							className: k,
						});
					}
					static get(R) {
						return R.getContribution(P.ID);
					}
					constructor(R, O, B, U, z) {
						super(),
							(this.G = U),
							(this.w = 0),
							(this.F = this.D(new r.$Zc())),
							(this.f = R),
							(this.g = B.linkedEditingRangeProvider),
							(this.h = !1),
							(this.j = e.$fjc.bindTo(O)),
							(this.m = z.for(this.g, "Linked Editing", { max: 200 })),
							(this.u = this.f.createDecorationsCollection()),
							(this.y = null),
							(this.z = null),
							(this.C = !1),
							(this.F = this.D(new r.$Zc())),
							(this.n = null),
							(this.q = null),
							(this.r = null),
							(this.s = null),
							(this.t = null),
							this.D(this.f.onDidChangeModel(() => this.H(!0))),
							this.D(
								this.f.onDidChangeConfiguration((F) => {
									(F.hasChanged(n.EditorOption.linkedEditing) ||
										F.hasChanged(n.EditorOption.renameOnType)) &&
										this.H(!1);
								}),
							),
							this.D(this.g.onDidChange(() => this.H(!1))),
							this.D(this.f.onDidChangeModelLanguage(() => this.H(!0))),
							this.H(!0);
					}
					H(R) {
						const O = this.f.getModel(),
							B =
								O !== null &&
								(this.f.getOption(n.EditorOption.linkedEditing) ||
									this.f.getOption(n.EditorOption.renameOnType)) &&
								this.g.has(O);
						if (
							(B === this.h && !R) ||
							((this.h = B),
							this.clearRanges(),
							this.F.clear(),
							!B || O === null)
						)
							return;
						this.F.add(
							d.Event.runAndSubscribe(
								O.onDidChangeLanguageConfiguration,
								() => {
									this.y = this.G.getLanguageConfiguration(
										O.getLanguageId(),
									).getWordDefinition();
								},
							),
						);
						const U = new i.$Jh(this.m.get(O)),
							z = () => {
								this.n = U.trigger(
									() => this.updateRanges(),
									this.b ?? this.m.get(O),
								);
							},
							F = new i.$Jh(0),
							x = (H) => {
								this.q = F.trigger(() => this.I(H));
							};
						this.F.add(
							this.f.onDidChangeCursorPosition(() => {
								z();
							}),
						),
							this.F.add(
								this.f.onDidChangeModelContent((H) => {
									if (!this.C && this.u.length > 0) {
										const q = this.u.getRange(0);
										if (
											q &&
											H.changes.every((V) => q.intersectRanges(V.range))
										) {
											x(this.w);
											return;
										}
									}
									z();
								}),
							),
							this.F.add({
								dispose: () => {
									U.dispose(), F.dispose();
								},
							}),
							this.updateRanges();
					}
					I(R) {
						if (!this.f.hasModel() || R !== this.w || this.u.length === 0)
							return;
						const O = this.f.getModel(),
							B = this.u.getRange(0);
						if (!B || B.startLineNumber !== B.endLineNumber)
							return this.clearRanges();
						const U = O.getValueInRange(B);
						if (this.z) {
							const F = U.match(this.z);
							if ((F ? F[0].length : 0) !== U.length) return this.clearRanges();
						}
						const z = [];
						for (let F = 1, x = this.u.length; F < x; F++) {
							const H = this.u.getRange(F);
							if (H)
								if (H.startLineNumber !== H.endLineNumber)
									z.push({ range: H, text: U });
								else {
									let q = O.getValueInRange(H),
										V = U,
										G = H.startColumn,
										K = H.endColumn;
									const J = u.$Of(q, V);
									(G += J), (q = q.substr(J)), (V = V.substr(J));
									const W = u.$Pf(q, V);
									(K -= W),
										(q = q.substr(0, q.length - W)),
										(V = V.substr(0, V.length - W)),
										(G !== K || V.length !== 0) &&
											z.push({
												range: new p.$iL(
													H.startLineNumber,
													G,
													H.endLineNumber,
													K,
												),
												text: V,
											});
								}
						}
						if (z.length !== 0)
							try {
								this.f.popUndoStop(), (this.C = !0);
								const F = this.f._getViewModel().getPrevEditOperationType();
								this.f.executeEdits("linkedEditing", z),
									this.f._getViewModel().setPrevEditOperationType(F);
							} finally {
								this.C = !1;
							}
					}
					dispose() {
						this.clearRanges(), super.dispose();
					}
					clearRanges() {
						this.j.set(!1),
							this.u.clear(),
							this.r && (this.r.cancel(), (this.r = null), (this.s = null));
					}
					get currentUpdateTriggerPromise() {
						return this.n || Promise.resolve();
					}
					get currentSyncTriggerPromise() {
						return this.q || Promise.resolve();
					}
					async updateRanges(R = !1) {
						if (!this.f.hasModel()) {
							this.clearRanges();
							return;
						}
						const O = this.f.getPosition();
						if ((!this.h && !R) || this.f.getSelections().length > 1) {
							this.clearRanges();
							return;
						}
						const B = this.f.getModel(),
							U = B.getVersionId();
						if (this.s && this.t === U) {
							if (O.equals(this.s)) return;
							if (this.u.length > 0) {
								const F = this.u.getRange(0);
								if (F && F.containsPosition(O)) return;
							}
						}
						this.clearRanges(), (this.s = O), (this.t = U);
						const z = (this.r = new w.$Ce());
						try {
							const F = new T.$le(!1),
								x = await N(this.g, B, O, z.token);
							if (
								(this.m.update(B, F.elapsed()),
								z !== this.r || ((this.r = null), U !== B.getVersionId()))
							)
								return;
							let H = [];
							x?.ranges && (H = x.ranges), (this.z = x?.wordPattern || this.y);
							let q = !1;
							for (let G = 0, K = H.length; G < K; G++)
								if (p.$iL.containsPosition(H[G], O)) {
									if (((q = !0), G !== 0)) {
										const J = H[G];
										H.splice(G, 1), H.unshift(J);
									}
									break;
								}
							if (!q) {
								this.clearRanges();
								return;
							}
							const V = H.map((G) => ({ range: G, options: P.a }));
							this.j.set(!0), this.u.set(V), this.w++;
						} catch (F) {
							(0, C.$8)(F) || (0, C.$4)(F),
								(this.r === z || !this.r) && this.clearRanges();
						}
					}
					setDebounceDuration(R) {
						this.b = R;
					}
				};
				(e.$gjc = L),
					(e.$gjc =
						L =
						P =
							Ne([j(1, y.$6j), j(2, v.$k3), j(3, s.$aN), j(4, I.$PBb)], L));
				class D extends h.$itb {
					constructor() {
						super({
							id: "editor.action.linkedEditing",
							label: l.localize(1302, null),
							alias: "Start Linked Editing",
							precondition: y.$Kj.and(
								o.EditorContextKeys.writable,
								o.EditorContextKeys.hasRenameProvider,
							),
							kbOpts: {
								kbExpr: o.EditorContextKeys.editorTextFocus,
								primary: m.KeyMod.CtrlCmd | m.KeyMod.Shift | m.KeyCode.F2,
								weight: $.KeybindingWeight.EditorContrib,
							},
						});
					}
					runCommand(R, O) {
						const B = R.get(c.$dtb),
							[U, z] = (Array.isArray(O) && O) || [void 0, void 0];
						return a.URI.isUri(U) && g.$hL.isIPosition(z)
							? B.openCodeEditor({ resource: U }, B.getActiveCodeEditor()).then(
									(F) => {
										F &&
											(F.setPosition(z),
											F.invokeWithinContext(
												(x) => (this.w(x, F), this.run(x, F)),
											));
									},
									C.$4,
								)
							: super.runCommand(R, O);
					}
					run(R, O) {
						const B = L.get(O);
						return B ? Promise.resolve(B.updateRanges(!0)) : Promise.resolve();
					}
				}
				e.$hjc = D;
				const M = h.$htb.bindToContribution(L.get);
				(0, h.$mtb)(
					new M({
						id: "cancelLinkedEditingInput",
						precondition: e.$fjc,
						handler: (A) => A.clearRanges(),
						kbOpts: {
							kbExpr: o.EditorContextKeys.editorTextFocus,
							weight: $.KeybindingWeight.EditorContrib + 99,
							primary: m.KeyCode.Escape,
							secondary: [m.KeyMod.Shift | m.KeyCode.Escape],
						},
					}),
				);
				function N(A, R, O, B) {
					const U = A.ordered(R);
					return (0, i.$Qh)(
						U.map((z) => async () => {
							try {
								return await z.provideLinkedEditingRanges(R, O, B);
							} catch (F) {
								(0, C.$5)(F);
								return;
							}
						}),
						(z) => !!z && t.$Pb(z?.ranges),
					);
				}
				(e.$ijc = (0, S.$wP)(
					"editor.linkedEditingBackground",
					{
						dark: E.$UL.fromHex("#f00").transparent(0.3),
						light: E.$UL.fromHex("#f00").transparent(0.3),
						hcDark: E.$UL.fromHex("#f00").transparent(0.3),
						hcLight: E.$UL.white,
					},
					l.localize(1303, null),
				)),
					(0, h.$ltb)("_executeLinkedEditingProvider", (A, R, O) => {
						const { linkedEditingRangeProvider: B } = A.get(v.$k3);
						return N(B, R, O, w.CancellationToken.None);
					}),
					(0, h.$qtb)(
						L.ID,
						L,
						h.EditorContributionInstantiation.AfterFirstRender,
					),
					(0, h.$ntb)(D);
			},
		),
		