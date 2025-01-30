import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/actionbar/actionViewItems.js';
import '../../../../base/common/actions.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/platform.js';
import '../../../browser/editorBrowser.js';
import '../../../browser/editorExtensions.js';
import '../../../common/config/editorOptions.js';
import '../../../common/editorCommon.js';
import '../../../common/editorContextKeys.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/workspace/common/workspace.js';
define(
			de[375],
			he([
				1, 0, 7, 198, 50, 27, 3, 12, 56, 46, 38, 98, 71, 4, 11, 8, 49, 39, 43,
				10, 25,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*actionViewItems*/,
				w /*actions*/,
				E /*keyCodes*/,
				C /*lifecycle*/,
				d /*platform*/,
				m /*editorBrowser*/,
				r /*editorExtensions*/,
				u /*editorOptions*/,
				a /*editorCommon*/,
				h /*editorContextKeys*/,
				c /*nls*/,
				n /*actions*/,
				g /*contextkey*/,
				p /*contextView*/,
				o /*keybinding*/,
				f /*keybindingsRegistry*/,
				b /*configuration*/,
				s /*workspace*/,
) {
				"use strict";
				var l;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$2Mb = void 0),
					(t = mt(t)),
					(c = mt(c));
				let y = class {
					static {
						l = this;
					}
					static {
						this.ID = "editor.contrib.contextmenu";
					}
					static get(S) {
						return S.getContribution(l.ID);
					}
					constructor(S, I, T, P, k, L, D, M) {
						(this.d = I),
							(this.f = T),
							(this.g = P),
							(this.h = k),
							(this.i = L),
							(this.j = D),
							(this.k = M),
							(this.a = new C.$Zc()),
							(this.b = 0),
							(this.c = S),
							this.a.add(this.c.onContextMenu((N) => this.l(N))),
							this.a.add(
								this.c.onMouseWheel((N) => {
									if (this.b > 0) {
										const A = this.f.getContextViewElement(),
											R = N.srcElement;
										(R.shadowRoot && t.$Igb(A) === R.shadowRoot) ||
											this.f.hideContextView();
									}
								}),
							),
							this.a.add(
								this.c.onKeyDown((N) => {
									this.c.getOption(u.EditorOption.contextmenu) &&
										N.keyCode === E.KeyCode.ContextMenu &&
										(N.preventDefault(),
										N.stopPropagation(),
										this.showContextMenu());
								}),
							);
					}
					l(S) {
						if (!this.c.hasModel()) return;
						if (!this.c.getOption(u.EditorOption.contextmenu)) {
							this.c.focus(),
								S.target.position &&
									!this.c.getSelection().containsPosition(S.target.position) &&
									this.c.setPosition(S.target.position);
							return;
						}
						if (
							S.target.type === m.MouseTargetType.OVERLAY_WIDGET ||
							(S.target.type === m.MouseTargetType.CONTENT_TEXT &&
								S.target.detail.injectedText)
						)
							return;
						if (
							(S.event.preventDefault(),
							S.event.stopPropagation(),
							S.target.type === m.MouseTargetType.SCROLLBAR)
						)
							return this.o(S.event);
						if (
							S.target.type !== m.MouseTargetType.CONTENT_TEXT &&
							S.target.type !== m.MouseTargetType.CONTENT_EMPTY &&
							S.target.type !== m.MouseTargetType.TEXTAREA
						)
							return;
						if ((this.c.focus(), S.target.position)) {
							let T = !1;
							for (const P of this.c.getSelections())
								if (P.containsPosition(S.target.position)) {
									T = !0;
									break;
								}
							T || this.c.setPosition(S.target.position);
						}
						let I = null;
						S.target.type !== m.MouseTargetType.TEXTAREA && (I = S.event),
							this.showContextMenu(I);
					}
					showContextMenu(S) {
						if (
							!this.c.getOption(u.EditorOption.contextmenu) ||
							!this.c.hasModel()
						)
							return;
						const I = this.m(this.c.getModel(), this.c.contextMenuId);
						I.length > 0 && this.n(I, S);
					}
					m(S, I) {
						const T = [],
							P = this.i.getMenuActions(I, this.g, { arg: S.uri });
						for (const k of P) {
							const [, L] = k;
							let D = 0;
							for (const M of L)
								if (M instanceof n.$1X) {
									const N = this.m(S, M.item.submenu);
									N.length > 0 && (T.push(new w.$uj(M.id, M.label, N)), D++);
								} else T.push(M), D++;
							D && T.push(new w.$tj());
						}
						return T.length && T.pop(), T;
					}
					n(S, I = null) {
						if (!this.c.hasModel()) return;
						const T = this.c.getOption(u.EditorOption.hover);
						this.c.updateOptions({ hover: { enabled: !1 } });
						let P = I;
						if (!P) {
							this.c.revealPosition(
								this.c.getPosition(),
								a.ScrollType.Immediate,
							),
								this.c.render();
							const L = this.c.getScrolledVisiblePosition(this.c.getPosition()),
								D = t.$tgb(this.c.getDomNode()),
								M = D.left + L.left,
								N = D.top + L.top + L.height;
							P = { x: M, y: N };
						}
						const k = this.c.getOption(u.EditorOption.useShadowDOM) && !d.$u;
						this.b++,
							this.d.showContextMenu({
								domForShadowRoot: k
									? (this.c.getOverflowWidgetsDomNode() ?? this.c.getDomNode())
									: void 0,
								getAnchor: () => P,
								getActions: () => S,
								getActionViewItem: (L) => {
									const D = this.p(L);
									if (D)
										return new i.$_ib(L, L, {
											label: !0,
											keybinding: D.getLabel(),
											isMenu: !0,
										});
									const M = L;
									return typeof M.getActionViewItem == "function"
										? M.getActionViewItem()
										: new i.$_ib(L, L, { icon: !0, label: !0, isMenu: !0 });
								},
								getKeyBinding: (L) => this.p(L),
								onHide: (L) => {
									this.b--, this.c.updateOptions({ hover: T });
								},
							});
					}
					o(S) {
						if (!this.c.hasModel() || (0, s.$dj)(this.k.getWorkspace())) return;
						const I = this.c.getOption(u.EditorOption.minimap);
						let T = 0;
						const P = (N) => ({
								id: `menu-action-${++T}`,
								label: N.label,
								tooltip: "",
								class: void 0,
								enabled: typeof N.enabled > "u" ? !0 : N.enabled,
								checked: N.checked,
								run: N.run,
							}),
							k = (N, A) => new w.$uj(`menu-action-${++T}`, N, A, void 0),
							L = (N, A, R, O, B) => {
								if (!A) return P({ label: N, enabled: A, run: () => {} });
								const U = (F) => () => {
										this.j.updateValue(R, F);
									},
									z = [];
								for (const F of B)
									z.push(
										P({
											label: F.label,
											checked: O === F.value,
											run: U(F.value),
										}),
									);
								return k(N, z);
							},
							D = [];
						D.push(
							P({
								label: c.localize(967, null),
								checked: I.enabled,
								run: () => {
									this.j.updateValue("editor.minimap.enabled", !I.enabled);
								},
							}),
						),
							D.push(new w.$tj()),
							D.push(
								P({
									label: c.localize(968, null),
									enabled: I.enabled,
									checked: I.renderCharacters,
									run: () => {
										this.j.updateValue(
											"editor.minimap.renderCharacters",
											!I.renderCharacters,
										);
									},
								}),
							),
							D.push(
								L(
									c.localize(969, null),
									I.enabled,
									"editor.minimap.size",
									I.size,
									[
										{ label: c.localize(970, null), value: "proportional" },
										{ label: c.localize(971, null), value: "fill" },
										{ label: c.localize(972, null), value: "fit" },
									],
								),
							),
							D.push(
								L(
									c.localize(973, null),
									I.enabled,
									"editor.minimap.showSlider",
									I.showSlider,
									[
										{ label: c.localize(974, null), value: "mouseover" },
										{ label: c.localize(975, null), value: "always" },
									],
								),
							);
						const M = this.c.getOption(u.EditorOption.useShadowDOM) && !d.$u;
						this.b++,
							this.d.showContextMenu({
								domForShadowRoot: M ? this.c.getDomNode() : void 0,
								getAnchor: () => S,
								getActions: () => D,
								onHide: (N) => {
									this.b--, this.c.focus();
								},
							});
					}
					p(S) {
						return this.h.lookupKeybinding(S.id);
					}
					dispose() {
						this.b > 0 && this.f.hideContextView(), this.a.dispose();
					}
				};
				(e.$2Mb = y),
					(e.$2Mb =
						y =
						l =
							Ne(
								[
									j(1, p.$Xxb),
									j(2, p.$Wxb),
									j(3, g.$6j),
									j(4, o.$uZ),
									j(5, n.$YX),
									j(6, b.$gj),
									j(7, s.$Vi),
								],
								y,
							));
				class $ extends r.$itb {
					constructor() {
						super({
							id: "editor.action.showContextMenu",
							label: c.localize(976, null),
							alias: "Show Editor Context Menu",
							precondition: void 0,
							kbOpts: {
								kbExpr: h.EditorContextKeys.textInputFocus,
								primary: E.KeyMod.Shift | E.KeyCode.F10,
								weight: f.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(S, I) {
						y.get(I)?.showContextMenu();
					}
				}
				(0, r.$qtb)(
					y.ID,
					y,
					r.EditorContributionInstantiation.BeforeFirstInteraction,
				),
					(0, r.$ntb)($);
			},
		),
		