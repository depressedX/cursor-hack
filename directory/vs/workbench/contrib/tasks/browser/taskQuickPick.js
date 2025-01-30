import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/objects.js';
import '../common/tasks.js';
import '../../../../base/common/types.js';
import '../common/taskService.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/event.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../base/common/codicons.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../base/common/themables.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../terminal/browser/terminalIcon.js';
import '../../../../platform/quickinput/browser/quickPickPin.js';
import '../../../../platform/storage/common/storage.js';
define(
			de[1815],
			he([
				1, 0, 4, 82, 424, 28, 419, 63, 10, 3, 6, 40, 14, 35, 26, 79, 57, 514,
				1678, 21,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*objects*/,
 w /*tasks*/,
 E /*types*/,
 C /*taskService*/,
 d /*quickInput*/,
 m /*configuration*/,
 r /*lifecycle*/,
 u /*event*/,
 a /*notification*/,
 h /*codicons*/,
 c /*themeService*/,
 n /*themables*/,
 g /*iconRegistry*/,
 p /*dialogs*/,
 o /*terminalIcon*/,
 f /*quickPickPin*/,
 b /*storage*/) {
				"use strict";
				var s;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$iXc = e.$hXc = e.$fXc = e.$eXc = void 0),
					(e.$gXc = l),
					(t = mt(t)),
					(i = mt(i)),
					(E = mt(E)),
					(e.$eXc = "task.quickOpen.detail"),
					(e.$fXc = "task.quickOpen.skip");
				function l(I) {
					return "uri" in I;
				}
				const y = t.localize(9681, null);
				e.$hXc = (0, g.$$O)(
					"tasks-list-configure",
					h.$ak.gear,
					t.localize(9682, null),
				);
				const $ = (0, g.$$O)(
						"tasks-remove",
						h.$ak.close,
						t.localize(9683, null),
					),
					v = "runTaskStorageKey";
				let S = (s = class extends r.$1c {
					constructor(T, P, k, L, D, M, N) {
						super(),
							(this.g = T),
							(this.h = P),
							(this.m = k),
							(this.n = L),
							(this.q = D),
							(this.r = M),
							(this.s = N),
							(this.c = this.g.createSorter());
					}
					u() {
						return !!this.h.getValue(e.$eXc);
					}
					w(T) {
						if (T._label) return T._label;
						if (w.$f4.is(T)) {
							let P = T.configures.type;
							const k = i.$vo(T.configures);
							return (
								delete k._key,
								delete k.type,
								Object.keys(k).forEach((L) => (P += `: ${k[L]}`)),
								P
							);
						}
						return "";
					}
					static getTaskLabelWithIcon(T, P) {
						const k = P || T._label,
							L = T.configurationProperties.icon;
						return L
							? L.id
								? `$(${L.id}) ${k}`
								: `$(${h.$ak.tools.id}) ${k}`
							: `${k}`;
					}
					static applyColorStyles(T, P, k) {
						if (T.configurationProperties.icon?.color) {
							const L = k.getColorTheme(),
								D = (0, o.$Qnc)(L);
							return (
								(P.iconClasses = [
									(0, o.$Onc)(T.configurationProperties.icon.color),
								]),
								D
							);
						}
					}
					y(T, P = []) {
						const k = [
								{
									iconClass: n.ThemeIcon.asClassName(e.$hXc),
									tooltip: t.localize(9684, null),
								},
								...P,
							],
							L = {
								label: s.getTaskLabelWithIcon(T, this.w(T)),
								description: this.g.getTaskDescription(T),
								task: T,
								detail: this.u() ? T.configurationProperties.detail : void 0,
								buttons: k,
							},
							D = s.applyColorStyles(T, L, this.q);
						return D && this.D(D), L;
					}
					z(T, P, k, L = []) {
						T.push({ type: "separator", label: k }),
							P.forEach((D) => {
								D.configurationProperties.hide || T.push(this.y(D, L));
							});
					}
					C(T, P) {
						T.push({ type: "separator", label: t.localize(9685, null) }),
							P.forEach((k) => {
								T.push({
									label: `$(folder) ${k}`,
									task: k,
									ariaLabel: t.localize(9686, null, k),
								});
							}),
							T.push({ label: y, task: y, alwaysShow: !0 });
					}
					F(T) {
						const P = [];
						return (
							Array.from(T).forEach(([k, L]) => {
								if ((L.set && P.push(...L.set.tasks), L.configurations))
									for (const D in L.configurations.byIdentifier)
										P.push(L.configurations.byIdentifier[D]);
							}),
							P
						);
					}
					G(T, P) {
						let k = [];
						const L = Array(T.length).fill(!1);
						for (let M = 0; M < P.length; M++) {
							const N = P[M].getWorkspaceFolder()?.uri.toString(),
								A = P[M].getDefinition()?._key,
								R = P[M].type,
								O = P[M]._label,
								B = P[M].getKey(),
								U = T.findIndex(
									(z) =>
										(N &&
											A &&
											z.getWorkspaceFolder()?.uri.toString() === N &&
											(z.getDefinition()?._key === A ||
												(z.type === R && z._label === O))) ||
										(B && z.getKey() === B),
								);
							U === -1 ? k.push(P[M]) : ((T[U] = P[M]), (L[U] = !0));
						}
						k = k.sort((M, N) => this.c.compare(M, N));
						const D = [];
						for (let M = 0; M < T.length; M++)
							(L[M] || w.$f4.is(T[M])) && D.push(T[M]);
						return { configuredTasks: k, recentTasks: D };
					}
					async getTopLevelEntries(T) {
						if (this.f !== void 0) return { entries: this.f };
						let P = (await this.g.getSavedTasks("historical")).reverse();
						const k = this.F(await this.g.getWorkspaceTasks()),
							L = this.g.taskTypes();
						this.f = [];
						const D = this.G(P, k),
							M = D.configuredTasks;
						if (((P = D.recentTasks), P.length > 0)) {
							const N = {
								iconClass: n.ThemeIcon.asClassName($),
								tooltip: t.localize(9687, null),
							};
							this.z(this.f, P, t.localize(9688, null), [N]);
						}
						return (
							k.length > 0 &&
								M.length > 0 &&
								this.z(this.f, M, t.localize(9689, null)),
							T &&
								k.length === 0 &&
								(this.f.push({
									type: "separator",
									label: t.localize(9690, null),
								}),
								this.f.push(T)),
							L.length > 0 && this.C(this.f, L),
							{
								entries: this.f,
								isSingleConfigured: k.length === 1 ? k[0] : void 0,
							}
						);
					}
					async handleSettingOption(T) {
						const { confirmed: P } = await this.r.confirm({
							type: a.Severity.Warning,
							message: t.localize(9691, null, T),
							cancelButton: t.localize(9692, null),
						});
						if (P)
							return (
								await this.h.updateValue(`${T}.autoDetect`, "on"),
								await new Promise((k) => setTimeout(() => k(), 100)),
								this.show(t.localize(9693, null), void 0, T)
							);
					}
					async show(T, P, k, L) {
						const D = new r.$Zc(),
							M = D.add(this.m.createQuickPick({ useSeparators: !0 }));
						(M.placeholder = T),
							(M.matchOnDescription = !0),
							(M.ignoreFocusOut = !1),
							D.add(
								M.onDidTriggerItemButton(async (A) => {
									const R = A.item.task;
									if (A.button.iconClass === n.ThemeIcon.asClassName($)) {
										const O = R && !E.$lg(R) ? R.getKey() : void 0;
										O && this.g.removeRecentlyUsedTask(O);
										const B = M.items.indexOf(A.item);
										B >= 0 &&
											(M.items = [
												...M.items.slice(0, B),
												...M.items.slice(B + 1),
											]);
									} else if (
										A.button.iconClass === n.ThemeIcon.asClassName(e.$hXc)
									) {
										if ((this.m.cancel(), w.$g4.is(R)))
											this.g.customize(R, void 0, !0);
										else if (w.$e4.is(R) || w.$f4.is(R)) {
											let O = !1;
											try {
												O = await this.g.openConfig(R);
											} catch {}
											O || this.g.customize(R, void 0, !0);
										}
									}
								}),
							),
							L && (M.value = L);
						let N = k;
						if (!N) {
							const A = await this.getTopLevelEntries(P);
							if (A.isSingleConfigured && this.h.getValue(e.$fXc))
								return D.dispose(), this.J(A.isSingleConfigured);
							const R = A.entries;
							N = await this.H(M, R, D);
						}
						do
							if (E.$lg(N)) {
								if (L) {
									await this.H(
										M,
										(await this.getTopLevelEntries(P)).entries,
										D,
									),
										D.dispose();
									return;
								}
								const A = await this.doPickerSecondLevel(M, D, N);
								if (A && !A.settingType && A.task === null)
									(M.value = ""),
										(N = await this.H(
											M,
											(await this.getTopLevelEntries(P)).entries,
											D,
										));
								else
									return A && E.$lg(A.settingType)
										? (D.dispose(), this.handleSettingOption(A.settingType))
										: (D.dispose(),
											A?.task && !E.$lg(A?.task) ? this.J(A?.task) : void 0);
							} else return N ? (D.dispose(), this.J(N)) : (D.dispose(), N);
						while (!0);
					}
					async H(T, P, k) {
						return (
							(T.items = P),
							k.add((0, f.$7Uc)(this.s, v, T, !0)),
							(
								await new Promise((D) => {
									k.add(
										u.Event.once(T.onDidAccept)(async () => {
											D(T.selectedItems ? T.selectedItems[0] : void 0);
										}),
									);
								})
							)?.task
						);
					}
					async doPickerSecondLevel(T, P, k, L) {
						if (((T.busy = !0), k === y)) {
							const M = (await this.g.tasks())
								.filter((N) => !N.configurationProperties.hide)
								.sort((N, A) => this.c.compare(N, A))
								.map((N) => this.y(N));
							M.push(...s.allSettingEntries(this.h)), (T.items = M);
						} else (T.value = L || ""), (T.items = await this.I(k));
						return (
							await T.show(),
							(T.busy = !1),
							await new Promise((M) => {
								P.add(
									u.Event.once(T.onDidAccept)(async () => {
										M(T.selectedItems ? T.selectedItems[0] : void 0);
									}),
								);
							})
						);
					}
					static allSettingEntries(T) {
						const P = [],
							k = s.getSettingEntry(T, "grunt");
						k && P.push(k);
						const L = s.getSettingEntry(T, "gulp");
						L && P.push(L);
						const D = s.getSettingEntry(T, "jake");
						return D && P.push(D), P;
					}
					static getSettingEntry(T, P) {
						if (T.getValue(`${P}.autoDetect`) === "off")
							return {
								label: t.localize(
									9694,
									null,
									P[0].toUpperCase() + P.slice(1),
									P,
								),
								task: null,
								settingType: P,
								alwaysShow: !0,
							};
					}
					async I(T) {
						const P = (await this.g.tasks({ type: T })).sort((D, M) =>
							this.c.compare(D, M),
						);
						let k = [];
						if (P.length > 0) {
							for (const D of P)
								D.configurationProperties.hide || k.push(this.y(D));
							k.push(
								{ type: "separator" },
								{ label: t.localize(9695, null), task: null, alwaysShow: !0 },
							);
						} else
							k = [
								{
									label: t.localize(9696, null, T),
									task: null,
									alwaysShow: !0,
								},
							];
						const L = s.getSettingEntry(this.h, T);
						return L && k.push(L), k;
					}
					async J(T) {
						if (!w.$f4.is(T)) return T;
						const P = await this.g.tryResolveTask(T);
						return P || this.n.error(t.localize(9697, null, T.type)), P;
					}
				});
				(e.$iXc = S),
					(e.$iXc =
						S =
						s =
							Ne(
								[
									j(0, C.$Zpc),
									j(1, m.$gj),
									j(2, d.$DJ),
									j(3, a.$4N),
									j(4, c.$iP),
									j(5, p.$GO),
									j(6, b.$lq),
								],
								S,
							));
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	