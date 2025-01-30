import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/browser/ui/actionbar/actionViewItems.js';
import '../../../../../base/browser/ui/keybindingLabel/keybindingLabel.js';
import '../../../../../base/common/actions.js';
import '../../../../../base/common/arrays.js';
import '../../../../../base/common/async.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/observable.js';
import '../../../../../base/common/observableInternal/derived.js';
import '../../../../../base/common/platform.js';
import '../../../../../base/common/themables.js';
import '../../../../browser/editorBrowser.js';
import '../../../../common/config/editorOptions.js';
import '../../../../common/core/position.js';
import '../../../../common/languages.js';
import '../../../../common/model.js';
import '../controller/commandIds.js';
import '../../../../../nls.js';
import '../../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../../platform/actions/browser/toolbar.js';
import '../../../../../platform/actions/common/actions.js';
import '../../../../../platform/commands/common/commands.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../platform/contextview/browser/contextView.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/keybinding/common/keybinding.js';
import '../../../../../platform/telemetry/common/telemetry.js';
import '../../../../../platform/theme/common/iconRegistry.js';
import '../../../../../css!vs/editor/contrib/inlineCompletions/browser/hintsWidget/inlineCompletionsHintsWidget.js';
define(
			de[1215],
			he([
				1, 0, 7, 198, 460, 50, 24, 15, 14, 3, 77, 319, 12, 26, 56, 38, 48, 74,
				64, 1154, 4, 92, 173, 11, 31, 8, 49, 5, 39, 32, 79, 2303,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*actionViewItems*/,
				w /*keybindingLabel*/,
				E /*actions*/,
				C /*arrays*/,
				d /*async*/,
				m /*codicons*/,
				r /*lifecycle*/,
				u /*observable*/,
				a /*derived*/,
				h /*platform*/,
				c /*themables*/,
				n /*editorBrowser*/,
				g /*editorOptions*/,
				p /*position*/,
				o /*languages*/,
				f /*model*/,
				b /*commandIds*/,
				s /*nls*/,
				l /*menuEntryActionViewItem*/,
				y /*toolbar*/,
				$ /*actions*/,
				v /*commands*/,
				S /*contextkey*/,
				I /*contextView*/,
				T /*instantiation*/,
				P /*keybinding*/,
				k /*telemetry*/,
				L /*iconRegistry*/,
) {
				"use strict";
				var D;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$SDb = e.$RDb = e.$QDb = void 0);
				let M = class extends r.$1c {
					constructor(F, x, H) {
						super(),
							(this.n = F),
							(this.q = x),
							(this.r = H),
							(this.f = (0, u.observableFromEvent)(
								this,
								this.n.onDidChangeConfiguration,
								() =>
									this.n.getOption(g.EditorOption.inlineSuggest).showToolbar ===
									"always",
							)),
							(this.j = void 0),
							(this.m = (0, u.derived)(this, (q) => {
								const V = this.q.read(q)?.primaryGhostText.read(q);
								if (!this.f.read(q) || !V || V.parts.length === 0)
									return (this.j = void 0), null;
								const G = V.parts[0].column;
								this.j &&
									this.j.lineNumber !== V.lineNumber &&
									(this.j = void 0);
								const K = new p.$hL(
									V.lineNumber,
									Math.min(G, this.j?.column ?? Number.MAX_SAFE_INTEGER),
								);
								return (this.j = K), K;
							})),
							this.D(
								(0, u.autorunWithStore)((q, V) => {
									const G = this.q.read(q);
									if (!G || !this.f.read(q)) return;
									const K = (0, a.$Xd)((W, X) => {
											const Y = X.add(
												this.r.createInstance(
													R,
													this.n,
													!0,
													this.m,
													G.selectedInlineCompletionIndex,
													G.inlineCompletionsCount,
													G.activeCommands,
												),
											);
											return (
												F.addContentWidget(Y),
												X.add((0, r.$Yc)(() => F.removeContentWidget(Y))),
												X.add(
													(0, u.autorun)((ie) => {
														this.m.read(ie) &&
															G.lastTriggerKind.read(ie) !==
																o.InlineCompletionTriggerKind.Explicit &&
															G.triggerExplicitly();
													}),
												),
												Y
											);
										}),
										J = (0, u.derivedObservableWithCache)(
											this,
											(W, X) => !!this.m.read(W) || !!X,
										);
									V.add(
										(0, u.autorun)((W) => {
											J.read(W) && K.read(W);
										}),
									);
								}),
							);
					}
				};
				(e.$QDb = M), (e.$QDb = M = Ne([j(2, T.$Li)], M));
				const N = (0, L.$$O)(
						"inline-suggestion-hints-next",
						m.$ak.chevronRight,
						(0, s.localize)(1255, null),
					),
					A = (0, L.$$O)(
						"inline-suggestion-hints-previous",
						m.$ak.chevronLeft,
						(0, s.localize)(1256, null),
					);
				let R = class extends r.$1c {
					static {
						D = this;
					}
					static {
						this.f = !1;
					}
					static get dropDownVisible() {
						return this.f;
					}
					static {
						this.id = 0;
					}
					n(F, x, H) {
						const q = new E.$rj(F, x, H, !0, () => this.J.executeCommand(F)),
							V = this.L.lookupKeybinding(F, this.M);
						let G = x;
						return (
							V && (G = (0, s.localize)(1257, null, x, V.getLabel())),
							(q.tooltip = G),
							q
						);
					}
					constructor(F, x, H, q, V, G, K, J, W, X, Y) {
						super(),
							(this.z = F),
							(this.C = x),
							(this.F = H),
							(this.G = q),
							(this.H = V),
							(this.I = G),
							(this.J = K),
							(this.L = W),
							(this.M = X),
							(this.N = Y),
							(this.j = `InlineSuggestionHintsContentWidget${D.id++}`),
							(this.allowEditorOverflow = !0),
							(this.suppressMouseDown = !1),
							(this.m = (0, t.h)(
								"div.inlineSuggestionsHints",
								{ className: this.C ? ".withBorder" : "" },
								[(0, t.h)("div@toolBar")],
							)),
							(this.q = this.n(
								b.$uCb,
								(0, s.localize)(1258, null),
								c.ThemeIcon.asClassName(A),
							)),
							(this.r = new E.$rj(
								"inlineSuggestionHints.availableSuggestionCount",
								"",
								void 0,
								!1,
							)),
							(this.s = this.n(
								b.$vCb,
								(0, s.localize)(1259, null),
								c.ThemeIcon.asClassName(N),
							)),
							(this.u = this.D(
								this.N.createMenu($.$XX.InlineCompletionsActions, this.M),
							)),
							(this.w = this.D(
								new d.$Yh(() => {
									this.r.label = "";
								}, 100),
							)),
							(this.y = this.D(
								new d.$Yh(() => {
									this.q.enabled = this.s.enabled = !1;
								}, 100),
							)),
							(this.t = this.D(
								J.createInstance(
									U,
									this.m.toolBar,
									$.$XX.InlineSuggestionToolbar,
									{
										menuOptions: { renderShortTitle: !0 },
										toolbarOptions: {
											primaryGroup: (ie) => ie.startsWith("primary"),
										},
										actionViewItemProvider: (ie, ne) => {
											if (ie instanceof $.$2X)
												return J.createInstance(B, ie, void 0);
											if (ie === this.r) {
												const ee = new O(void 0, ie, { label: !0, icon: !1 });
												return ee.setClass("availableSuggestionCount"), ee;
											}
										},
										telemetrySource: "InlineSuggestionToolbar",
									},
								),
							)),
							this.t.setPrependedPrimaryActions([this.q, this.r, this.s]),
							this.D(
								this.t.onDidChangeDropdownVisibility((ie) => {
									D.f = ie;
								}),
							),
							this.D(
								(0, u.autorun)((ie) => {
									this.F.read(ie), this.z.layoutContentWidget(this);
								}),
							),
							this.D(
								(0, u.autorun)((ie) => {
									const ne = this.H.read(ie),
										ee = this.G.read(ie);
									ne !== void 0
										? (this.w.cancel(), (this.r.label = `${ee + 1}/${ne}`))
										: this.w.schedule(),
										ne !== void 0 && ne > 1
											? (this.y.cancel(),
												(this.q.enabled = this.s.enabled = !0))
											: this.y.schedule();
								}),
							),
							this.D(
								(0, u.autorun)((ie) => {
									const ee = this.I.read(ie).map((_) => ({
										class: void 0,
										id: _.id,
										enabled: !0,
										tooltip: _.tooltip || "",
										label: _.title,
										run: (te) => this.J.executeCommand(_.id),
									}));
									for (const [_, te] of this.u.getActions())
										for (const Q of te) Q instanceof $.$2X && ee.push(Q);
									ee.length > 0 && ee.unshift(new E.$tj()),
										this.t.setAdditionalSecondaryActions(ee);
								}),
							);
					}
					getId() {
						return this.j;
					}
					getDomNode() {
						return this.m.root;
					}
					getPosition() {
						return {
							position: this.F.get(),
							preference: [
								n.ContentWidgetPositionPreference.ABOVE,
								n.ContentWidgetPositionPreference.BELOW,
							],
							positionAffinity: f.PositionAffinity.LeftOfInjectedText,
						};
					}
				};
				(e.$RDb = R),
					(e.$RDb =
						R =
						D =
							Ne(
								[
									j(6, v.$ek),
									j(7, T.$Li),
									j(8, P.$uZ),
									j(9, S.$6j),
									j(10, $.$YX),
								],
								R,
							));
				class O extends i.$_ib {
					constructor() {
						super(...arguments), (this.n = void 0);
					}
					setClass(F) {
						this.n = F;
					}
					render(F) {
						super.render(F), this.n && F.classList.add(this.n);
					}
					C() {}
				}
				class B extends l.$Lyb {
					u() {
						const F = this.X.lookupKeybinding(this._action.id, this.Z);
						if (!F) return super.u();
						if (this.I) {
							const x = (0, t.h)("div.keybinding").root;
							this.D(new w.$7ob(x, h.OS, { disableTitle: !0, ...w.$6ob })).set(
								F,
							),
								(this.I.textContent = this._action.label),
								this.I.appendChild(x),
								this.I.classList.add("inlineSuggestionStatusBarItemLabel");
						}
					}
					C() {}
				}
				let U = class extends y.$Syb {
					constructor(F, x, H, q, V, G, K, J, W) {
						super(F, { resetMenu: x, ...H }, q, V, G, K, J, W),
							(this.O = x),
							(this.P = H),
							(this.Q = q),
							(this.R = V),
							(this.j = this.B.add(
								this.Q.createMenu(this.O, this.R, {
									emitEventsForSubmenuChanges: !0,
								}),
							)),
							(this.r = []),
							(this.s = []),
							this.B.add(this.j.onDidChange(() => this.S())),
							this.S();
					}
					S() {
						const F = [],
							x = [];
						(0, l.$Kyb)(
							this.j,
							this.P?.menuOptions,
							{ primary: F, secondary: x },
							this.P?.toolbarOptions?.primaryGroup,
							this.P?.toolbarOptions?.shouldInlineSubmenu,
							this.P?.toolbarOptions?.useSeparatorsInPrimaryActions,
						),
							x.push(...this.r),
							F.unshift(...this.s),
							this.setActions(F, x);
					}
					setPrependedPrimaryActions(F) {
						(0, C.$yb)(this.s, F, (x, H) => x === H) ||
							((this.s = F), this.S());
					}
					setAdditionalSecondaryActions(F) {
						(0, C.$yb)(this.r, F, (x, H) => x === H) ||
							((this.r = F), this.S());
					}
				};
				(e.$SDb = U),
					(e.$SDb = U =
						Ne(
							[
								j(3, $.$YX),
								j(4, S.$6j),
								j(5, I.$Xxb),
								j(6, P.$uZ),
								j(7, v.$ek),
								j(8, k.$km),
							],
							U,
						));
			},
		),
		