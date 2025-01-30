import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/async.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import './actions.js';
import '../../commands/common/commands.js';
import '../../contextkey/common/contextkey.js';
import '../../../base/common/actions.js';
import '../../storage/common/storage.js';
import '../../../base/common/arrays.js';
import '../../../nls.js';
import '../../keybinding/common/keybinding.js';
define(
			de[1677],
			he([1, 0, 15, 6, 3, 11, 31, 8, 50, 21, 24, 4, 39]),
			function (ce /*require*/,
 e /*exports*/,
 t /*async*/,
 i /*event*/,
 w /*lifecycle*/,
 E /*actions*/,
 C /*commands*/,
 d /*contextkey*/,
 m /*actions*/,
 r /*storage*/,
 u /*arrays*/,
 a /*nls*/,
 h /*keybinding*/) {
				"use strict";
				var c, n;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Qyb = void 0),
					(e.$Ryb = l);
				let g = class {
					constructor($, v, S) {
						(this.d = $), (this.f = v), (this.c = new p(S));
					}
					createMenu($, v, S) {
						return new b(
							$,
							this.c,
							{ emitEventsForSubmenuChanges: !1, eventDebounceDelay: 50, ...S },
							this.d,
							this.f,
							v,
						);
					}
					getMenuActions($, v, S) {
						const I = new b(
								$,
								this.c,
								{
									emitEventsForSubmenuChanges: !1,
									eventDebounceDelay: 50,
									...S,
								},
								this.d,
								this.f,
								v,
							),
							T = I.getActions(S);
						return I.dispose(), T;
					}
					getMenuContexts($) {
						const v = new o($, !1);
						return new Set([
							...v.structureContextKeys,
							...v.preconditionContextKeys,
							...v.toggledContextKeys,
						]);
					}
					resetHiddenStates($) {
						this.c.reset($);
					}
				};
				(e.$Qyb = g),
					(e.$Qyb = g = Ne([j(0, C.$ek), j(1, h.$uZ), j(2, r.$lq)], g));
				let p = class {
					static {
						c = this;
					}
					static {
						this.c = "menu.hiddenCommands";
					}
					constructor($) {
						(this.k = $),
							(this.d = new w.$Zc()),
							(this.f = new i.$re()),
							(this.onDidChange = this.f.event),
							(this.h = !1),
							(this.j = new Map());
						try {
							const v = $.get(c.c, r.StorageScope.PROFILE, "{}");
							this.i = JSON.parse(v);
						} catch {
							this.i = Object.create(null);
						}
						this.d.add(
							$.onDidChangeValue(
								r.StorageScope.PROFILE,
								c.c,
								this.d,
							)(() => {
								if (!this.h)
									try {
										const v = $.get(c.c, r.StorageScope.PROFILE, "{}");
										this.i = JSON.parse(v);
									} catch (v) {
										console.log("FAILED to read storage after UPDATE", v);
									}
								this.f.fire();
							}),
						);
					}
					dispose() {
						this.f.dispose(), this.d.dispose();
					}
					l($, v) {
						return this.j.get(`${$.id}/${v}`) ?? !1;
					}
					setDefaultState($, v, S) {
						this.j.set(`${$.id}/${v}`, S);
					}
					isHidden($, v) {
						const S = this.l($, v),
							I = this.i[$.id]?.includes(v) ?? !1;
						return S ? !I : I;
					}
					updateHidden($, v, S) {
						this.l($, v) && (S = !S);
						const T = this.i[$.id];
						if (S) T ? T.indexOf(v) < 0 && T.push(v) : (this.i[$.id] = [v]);
						else if (T) {
							const P = T.indexOf(v);
							P >= 0 && (0, u.$zb)(T, P), T.length === 0 && delete this.i[$.id];
						}
						this.m();
					}
					reset($) {
						if ($ === void 0) (this.i = Object.create(null)), this.m();
						else {
							for (const { id: v } of $) this.i[v] && delete this.i[v];
							this.m();
						}
					}
					m() {
						try {
							this.h = !0;
							const $ = JSON.stringify(this.i);
							this.k.store(
								c.c,
								$,
								r.StorageScope.PROFILE,
								r.StorageTarget.USER,
							);
						} finally {
							this.h = !1;
						}
					}
				};
				p = c = Ne([j(0, r.$lq)], p);
				class o {
					constructor($, v) {
						(this.j = $),
							(this.k = v),
							(this.c = []),
							(this.d = new Set()),
							(this.f = new Set()),
							(this.h = new Set()),
							(this.i = new Set()),
							this.refresh();
					}
					get allMenuIds() {
						return this.d;
					}
					get structureContextKeys() {
						return this.f;
					}
					get preconditionContextKeys() {
						return this.h;
					}
					get toggledContextKeys() {
						return this.i;
					}
					refresh() {
						(this.c.length = 0),
							this.d.clear(),
							this.f.clear(),
							this.h.clear(),
							this.i.clear();
						const $ = this.l(E.$ZX.getMenuItems(this.j));
						let v;
						for (const S of $) {
							const I = S.group || "";
							(!v || v[0] !== I) && ((v = [I, []]), this.c.push(v)),
								v[1].push(S),
								this.m(S);
						}
						this.d.add(this.j);
					}
					l($) {
						return $;
					}
					m($) {
						if ((o.n($.when, this.f), (0, E.$VX)($))) {
							if (
								($.command.precondition && o.n($.command.precondition, this.h),
								$.command.toggled)
							) {
								const v = $.command.toggled.condition || $.command.toggled;
								o.n(v, this.i);
							}
						} else
							this.k &&
								(E.$ZX.getMenuItems($.submenu).forEach(this.m, this),
								this.d.add($.submenu));
					}
					static n($, v) {
						if ($) for (const S of $.keys()) v.add(S);
					}
				}
				let f = (n = class extends o {
					constructor($, v, S, I, T, P) {
						super($, S),
							(this.o = v),
							(this.p = I),
							(this.q = T),
							(this.r = P),
							this.refresh();
					}
					createActionGroups($) {
						const v = [];
						for (const S of this.c) {
							const [I, T] = S;
							let P;
							for (const k of T)
								if (this.r.contextMatchesRules(k.when)) {
									const L = (0, E.$VX)(k);
									L &&
										this.o.setDefaultState(
											this.j,
											k.command.id,
											!!k.isHiddenByDefault,
										);
									const D = s(this.j, L ? k.command : k, this.o);
									if (L) {
										const M = l(this.p, this.q, k.command.id, k.when);
										(P ??= []).push(
											new E.$2X(k.command, k.alt, $, D, M, this.r, this.p),
										);
									} else {
										const M = new n(
												k.submenu,
												this.o,
												this.k,
												this.p,
												this.q,
												this.r,
											).createActionGroups($),
											N = m.$tj.join(...M.map((A) => A[1]));
										N.length > 0 && (P ??= []).push(new E.$1X(k, D, N));
									}
								}
							P && P.length > 0 && v.push([I, P]);
						}
						return v;
					}
					l($) {
						return $.sort(n.t);
					}
					static t($, v) {
						const S = $.group,
							I = v.group;
						if (S !== I) {
							if (S) {
								if (!I) return -1;
							} else return 1;
							if (S === "navigation") return -1;
							if (I === "navigation") return 1;
							const k = S.localeCompare(I);
							if (k !== 0) return k;
						}
						const T = $.order || 0,
							P = v.order || 0;
						return T < P
							? -1
							: T > P
								? 1
								: n.u(
										(0, E.$VX)($) ? $.command.title : $.title,
										(0, E.$VX)(v) ? v.command.title : v.title,
									);
					}
					static u($, v) {
						const S = typeof $ == "string" ? $ : $.original,
							I = typeof v == "string" ? v : v.original;
						return S.localeCompare(I);
					}
				});
				f = n = Ne([j(3, C.$ek), j(4, h.$uZ), j(5, d.$6j)], f);
				let b = class {
					constructor($, v, S, I, T, P) {
						(this.d = new w.$Zc()),
							(this.c = new f($, v, S.emitEventsForSubmenuChanges, I, T, P));
						const k = new t.$Yh(() => {
							this.c.refresh(),
								this.f.fire({
									menu: this,
									isStructuralChange: !0,
									isEnablementChange: !0,
									isToggleChange: !0,
								});
						}, S.eventDebounceDelay);
						this.d.add(k),
							this.d.add(
								E.$ZX.onDidChangeMenu((N) => {
									for (const A of this.c.allMenuIds)
										if (N.has(A)) {
											k.schedule();
											break;
										}
								}),
							);
						const L = this.d.add(new w.$Zc()),
							D = (N) => {
								let A = !1,
									R = !1,
									O = !1;
								for (const B of N)
									if (
										((A = A || B.isStructuralChange),
										(R = R || B.isEnablementChange),
										(O = O || B.isToggleChange),
										A && R && O)
									)
										break;
								return {
									menu: this,
									isStructuralChange: A,
									isEnablementChange: R,
									isToggleChange: O,
								};
							},
							M = () => {
								L.add(
									P.onDidChangeContext((N) => {
										const A = N.affectsSome(this.c.structureContextKeys),
											R = N.affectsSome(this.c.preconditionContextKeys),
											O = N.affectsSome(this.c.toggledContextKeys);
										(A || R || O) &&
											this.f.fire({
												menu: this,
												isStructuralChange: A,
												isEnablementChange: R,
												isToggleChange: O,
											});
									}),
								),
									L.add(
										v.onDidChange((N) => {
											this.f.fire({
												menu: this,
												isStructuralChange: !0,
												isEnablementChange: !1,
												isToggleChange: !1,
											});
										}),
									);
							};
						(this.f = new i.$ve({
							onWillAddFirstListener: M,
							onDidRemoveLastListener: L.clear.bind(L),
							delay: S.eventDebounceDelay,
							merge: D,
						})),
							(this.onDidChange = this.f.event);
					}
					getActions($) {
						return this.c.createActionGroups($);
					}
					dispose() {
						this.d.dispose(), this.f.dispose();
					}
				};
				b = Ne([j(3, C.$ek), j(4, h.$uZ), j(5, d.$6j)], b);
				function s(y, $, v) {
					const S = (0, E.$WX)($) ? $.submenu.id : $.id,
						I = typeof $.title == "string" ? $.title : $.title.value,
						T = (0, m.$wj)({
							id: `hide/${y.id}/${S}`,
							label: (0, a.localize)(1661, null, I),
							run() {
								v.updateHidden(y, S, !0);
							},
						}),
						P = (0, m.$wj)({
							id: `toggle/${y.id}/${S}`,
							label: I,
							get checked() {
								return !v.isHidden(y, S);
							},
							run() {
								v.updateHidden(y, S, !!this.checked);
							},
						});
					return {
						hide: T,
						toggle: P,
						get isHidden() {
							return !P.checked;
						},
					};
				}
				function l(y, $, v, S = void 0, I = !0) {
					return (0, m.$wj)({
						id: `configureKeybinding/${v}`,
						label: (0, a.localize)(1662, null),
						enabled: I,
						run() {
							const P = !!!$.lookupKeybinding(v) && S ? S.serialize() : void 0;
							y.executeCommand(
								"workbench.action.openGlobalKeybindings",
								`@command:${v}` + (P ? ` +when:${P}` : ""),
							);
						},
					});
				}
			},
		),
		