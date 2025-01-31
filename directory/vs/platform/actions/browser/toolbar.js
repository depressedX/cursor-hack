import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/browser/dom.js';
import '../../../base/browser/mouseEvent.js';
import '../../../base/browser/ui/toolbar/toolbar.js';
import '../../../base/common/actions.js';
import '../../../base/common/arrays.js';
import '../../../base/common/collections.js';
import '../../../base/common/errors.js';
import '../../../base/common/event.js';
import '../../../base/common/iterator.js';
import '../../../base/common/lifecycle.js';
import '../../../nls.js';
import './menuEntryActionViewItem.js';
import '../common/actions.js';
import '../common/menuService.js';
import '../../commands/common/commands.js';
import '../../contextkey/common/contextkey.js';
import '../../contextview/browser/contextView.js';
import '../../keybinding/common/keybinding.js';
import '../../telemetry/common/telemetry.js';
define(
			de[173],
			he([
				1, 0, 7, 168, 461, 50, 24, 456, 29, 6, 103, 3, 4, 92, 11, 1677, 31, 8,
				49, 39, 32,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*mouseEvent*/,
				w /*toolbar*/,
				E /*actions*/,
				C /*arrays*/,
				d /*collections*/,
				m /*errors*/,
				r /*event*/,
				u /*iterator*/,
				a /*lifecycle*/,
				h /*nls*/,
				c /*menuEntryActionViewItem*/,
				n /*actions*/,
				g /*menuService*/,
				p /*commands*/,
				o /*contextkey*/,
				f /*contextView*/,
				b /*keybinding*/,
				s /*telemetry*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Tyb = e.$Syb = e.HiddenItemStrategy = void 0);
				var l;
				(function (v) {
					(v[(v.NoHide = -1)] = "NoHide"),
						(v[(v.Ignore = 0)] = "Ignore"),
						(v[(v.RenderInSecondaryGroup = 1)] = "RenderInSecondaryGroup");
				})(l || (e.HiddenItemStrategy = l = {}));
				let y = class extends w.$jpb {
					constructor(S, I, T, P, k, L, D, M) {
						super(S, k, {
							getKeyBinding: (A) => L.lookupKeybinding(A.id) ?? void 0,
							...I,
							allowContextMenu: !0,
							skipTelemetry: typeof I?.telemetrySource == "string",
						}),
							(this.H = I),
							(this.I = T),
							(this.J = P),
							(this.L = k),
							(this.M = L),
							(this.N = D),
							(this.G = this.B.add(new a.$Zc()));
						const N = I?.telemetrySource;
						N &&
							this.B.add(
								this.m.onDidRun((A) =>
									M.publicLog2("workbenchActionExecuted", {
										id: A.action.id,
										from: N,
									}),
								),
							);
					}
					setActions(S, I = [], T) {
						this.G.clear();
						const P = S.slice(),
							k = I.slice(),
							L = [];
						let D = 0;
						const M = [];
						let N = !1;
						if (this.H?.hiddenItemStrategy !== l.NoHide)
							for (let A = 0; A < P.length; A++) {
								const R = P[A];
								(!(R instanceof n.$2X) && !(R instanceof n.$1X)) ||
									(R.hideActions &&
										(L.push(R.hideActions.toggle),
										R.hideActions.toggle.checked && D++,
										R.hideActions.isHidden &&
											((N = !0),
											(P[A] = void 0),
											this.H?.hiddenItemStrategy !== l.Ignore && (M[A] = R))));
							}
						if (this.H?.overflowBehavior !== void 0) {
							const A = (0, d.$h)(
									new Set(this.H.overflowBehavior.exempted),
									u.Iterable.map(P, (B) => B?.id),
								),
								R = this.H.overflowBehavior.maxItems - A.size;
							let O = 0;
							for (let B = 0; B < P.length; B++) {
								const U = P[B];
								U &&
									(O++,
									!A.has(U.id) && O >= R && ((P[B] = void 0), (M[B] = U)));
							}
						}
						(0, C.$Mb)(P),
							(0, C.$Mb)(M),
							super.setActions(P, E.$tj.join(M, k)),
							(L.length > 0 || P.length > 0) &&
								this.G.add(
									(0, t.$0fb)(this.getElement(), "contextmenu", (A) => {
										const R = new i.$2fb(
												(0, t.getWindow)(this.getElement()),
												A,
											),
											O = this.getItemAction(R.target);
										if (!O) return;
										R.preventDefault(), R.stopPropagation();
										const B = [];
										if (O instanceof n.$2X && O.menuKeybinding)
											B.push(O.menuKeybinding);
										else if (!(O instanceof n.$1X || O instanceof w.$kpb)) {
											const z = !!this.M.lookupKeybinding(O.id);
											B.push((0, g.$Ryb)(this.N, this.M, O.id, void 0, z));
										}
										if (L.length > 0) {
											let z = !1;
											if (D === 1 && this.H?.hiddenItemStrategy === l.Ignore) {
												z = !0;
												for (let F = 0; F < L.length; F++)
													if (L[F].checked) {
														L[F] = (0, E.$wj)({
															id: O.id,
															label: O.label,
															checked: !0,
															enabled: !1,
															run() {},
														});
														break;
													}
											}
											if (!z && (O instanceof n.$2X || O instanceof n.$1X)) {
												if (!O.hideActions) return;
												B.push(O.hideActions.hide);
											} else
												B.push(
													(0, E.$wj)({
														id: "label",
														label: (0, h.localize)(1658, null),
														enabled: !1,
														run() {},
													}),
												);
										}
										const U = E.$tj.join(B, L);
										this.H?.resetMenu && !T && (T = [this.H.resetMenu]),
											N &&
												T &&
												(U.push(new E.$tj()),
												U.push(
													(0, E.$wj)({
														id: "resetThisMenu",
														label: (0, h.localize)(1659, null),
														run: () => this.I.resetHiddenStates(T),
													}),
												)),
											U.length !== 0 &&
												this.L.showContextMenu({
													getAnchor: () => R,
													getActions: () => U,
													menuId: this.H?.contextMenu,
													menuActionOptions: {
														renderShortTitle: !0,
														...this.H?.menuOptions,
													},
													skipTelemetry:
														typeof this.H?.telemetrySource == "string",
													contextKeyService: this.J,
												});
									}),
								);
					}
				};
				(e.$Syb = y),
					(e.$Syb = y =
						Ne(
							[
								j(2, n.$YX),
								j(3, o.$6j),
								j(4, f.$Xxb),
								j(5, b.$uZ),
								j(6, p.$ek),
								j(7, s.$km),
							],
							y,
						));
				let $ = class extends y {
					constructor(S, I, T, P, k, L, D, M, N) {
						super(S, { resetMenu: I, ...T }, P, k, L, D, M, N),
							(this.b = this.B.add(new r.$re())),
							(this.onDidChangeMenuItems = this.b.event);
						const A = this.B.add(
								P.createMenu(I, k, { emitEventsForSubmenuChanges: !0 }),
							),
							R = () => {
								const O = [],
									B = [];
								(0, c.$Kyb)(
									A,
									T?.menuOptions,
									{ primary: O, secondary: B },
									T?.toolbarOptions?.primaryGroup,
									T?.toolbarOptions?.shouldInlineSubmenu,
									T?.toolbarOptions?.useSeparatorsInPrimaryActions,
								),
									S.classList.toggle(
										"has-no-actions",
										O.length === 0 && B.length === 0,
									),
									super.setActions(O, B);
							};
						this.B.add(
							A.onDidChange(() => {
								R(), this.b.fire(this);
							}),
						),
							R();
					}
					setActions() {
						throw new m.$gb("This toolbar is populated from a menu.");
					}
				};
				(e.$Tyb = $),
					(e.$Tyb = $ =
						Ne(
							[
								j(3, n.$YX),
								j(4, o.$6j),
								j(5, f.$Xxb),
								j(6, b.$uZ),
								j(7, p.$ek),
								j(8, s.$km),
							],
							$,
						));
			},
		)
