import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/keyboardEvent.js';
import '../../../../base/browser/ui/hover/hoverWidget.js';
import '../../../../base/browser/ui/iconLabel/simpleIconLabel.js';
import '../../../../base/common/async.js';
import '../../../../base/common/htmlContent.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/common/languages/language.js';
import '../../../../nls.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/userDataProfile/common/userDataProfile.js';
import '../../../../platform/userDataSync/common/userDataSync.js';
import '../common/preferences.js';
import '../../../services/configuration/common/configuration.js';
import '../../../../platform/hover/browser/hover.js';
define(
			de[3249],
			he([
				1, 0, 7, 114, 160, 758, 15, 94, 27, 3, 61, 4, 31, 10, 129, 150, 468,
				261, 72,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*keyboardEvent*/,
 w /*hoverWidget*/,
 E /*simpleIconLabel*/,
 C /*async*/,
 d /*htmlContent*/,
 m /*keyCodes*/,
 r /*lifecycle*/,
 u /*language*/,
 a /*nls*/,
 h /*commands*/,
 c /*configuration*/,
 n /*userDataProfile*/,
 g /*userDataSync*/,
 p /*preferences*/,
 o /*configuration*/,
 f /*hover*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ICc = void 0),
					(e.$JCc = I),
					(t = mt(t));
				const b = t.$;
				let s = new Set(),
					l = [],
					y = class {
						constructor(P, k, L, D, M, N, A) {
							(this.l = k),
								(this.m = L),
								(this.n = D),
								(this.o = M),
								(this.p = N),
								(this.q = A),
								(this.j = new r.$Zc()),
								(this.k = 0),
								(this.r = {
									trapFocus: !0,
									position: { hoverPosition: w.HoverPosition.BELOW },
									appearance: { showPointer: !0, compact: !1 },
								}),
								(this.a = t.$fhb(P, b(".setting-indicators-container"))),
								(this.a.style.display = "inline"),
								(this.h = this.p.isEnabled()),
								(this.b = this.t()),
								(this.c = this.u()),
								(this.d = this.v()),
								(this.f = this.w()),
								(this.g = [this.b, this.c, this.d, this.f]);
						}
						s(P, k, L) {
							P.clear();
							const D = P.add(
								new C.$Yh(() => {
									const M = L(!1);
									M && P.add(M);
								}, this.l.getValue("workbench.hover.delay")),
							);
							P.add(
								t.$0fb(k, t.$$gb.MOUSE_OVER, () => {
									D.isScheduled() || D.schedule();
								}),
							),
								P.add(
									t.$0fb(k, t.$$gb.MOUSE_LEAVE, () => {
										D.cancel();
									}),
								),
								P.add(
									t.$0fb(k, t.$$gb.KEY_DOWN, (M) => {
										const N = new i.$7fb(M);
										if (
											N.equals(m.KeyCode.Space) ||
											N.equals(m.KeyCode.Enter)
										) {
											const A = L(!0);
											A && P.add(A), M.preventDefault();
										}
									}),
								);
						}
						t() {
							const P = new r.$Zc(),
								k = b("span.setting-indicator.setting-item-workspace-trust"),
								L = P.add(new E.$Yob(k));
							L.text = "$(warning) " + (0, a.localize)(8490, null);
							const D = (0, a.localize)(8491, null),
								M = (N) =>
									this.m.showHover(
										{
											...this.r,
											content: D,
											target: k,
											actions: [
												{
													label: (0, a.localize)(8492, null),
													commandId: "workbench.trust.manage",
													run: (A) => {
														this.q.executeCommand("workbench.trust.manage");
													},
												},
											],
										},
										N,
									);
							return this.s(P, k, M), { element: k, label: L, disposables: P };
						}
						u() {
							const P = new r.$Zc(),
								k = b("span.setting-item-overrides"),
								L = P.add(new E.$Yob(k));
							return { element: k, label: L, disposables: P };
						}
						v() {
							const P = new r.$Zc(),
								k = b("span.setting-indicator.setting-item-ignored"),
								L = P.add(new E.$Yob(k));
							L.text = (0, a.localize)(8493, null);
							const D = (0, a.localize)(8494, null),
								M = (N) =>
									this.m.showHover({ ...this.r, content: D, target: k }, N);
							return this.s(P, k, M), { element: k, label: L, disposables: P };
						}
						w() {
							const P = new r.$Zc(),
								k = b("span.setting-indicator.setting-item-default-overridden"),
								L = P.add(new E.$Yob(k));
							return (
								(L.text = (0, a.localize)(8495, null)),
								{ element: k, label: L, disposables: P }
							);
						}
						x() {
							const P = this.g.filter(
								(k) => k.element.style.display !== "none",
							);
							if (
								((this.a.innerText = ""),
								(this.a.style.display = "none"),
								P.length)
							) {
								(this.a.style.display = "inline"),
									t.$fhb(this.a, b("span", void 0, "("));
								for (let k = 0; k < P.length - 1; k++)
									t.$fhb(this.a, P[k].element),
										t.$fhb(this.a, b("span.comma", void 0, " \u2022 "));
								t.$fhb(this.a, P[P.length - 1].element),
									t.$fhb(this.a, b("span", void 0, ")")),
									this.y(P);
							}
						}
						y(P) {
							if (
								(this.j.clear(),
								(this.a.role = P.length >= 1 ? "toolbar" : "button"),
								!P.length)
							)
								return;
							const k = P[0].focusElement ?? P[0].element;
							(k.tabIndex = 0),
								this.j.add(
									t.$0fb(this.a, "keydown", (L) => {
										const D = new i.$7fb(L);
										let M = !0;
										if (D.equals(m.KeyCode.Home)) this.z(P, 0);
										else if (D.equals(m.KeyCode.End)) this.z(P, P.length - 1);
										else if (D.equals(m.KeyCode.RightArrow)) {
											const N = (this.k + 1) % P.length;
											this.z(P, N);
										} else if (D.equals(m.KeyCode.LeftArrow)) {
											const N = this.k ? this.k - 1 : P.length - 1;
											this.z(P, N);
										} else M = !1;
										M && (L.preventDefault(), L.stopPropagation());
									}),
								);
						}
						z(P, k) {
							if (k === this.k) return;
							const L = P[k],
								D = L.focusElement ?? L.element;
							(D.tabIndex = 0), D.focus();
							const M = P[this.k],
								N = M.focusElement ?? M.element;
							(N.tabIndex = -1), (this.k = k);
						}
						updateWorkspaceTrust(P) {
							(this.b.element.style.display = P.isUntrusted
								? "inline"
								: "none"),
								this.x();
						}
						updateSyncIgnored(P, k) {
							(this.d.element.style.display =
								this.n.isEnabled() && k.includes(P.setting.key)
									? "inline"
									: "none"),
								this.x(),
								l !== k && ((l = k), (s = new Set(l)));
						}
						A(P) {
							const [k, L] = P.split(":"),
								D =
									k === "user"
										? (0, a.localize)(8496, null)
										: k === "workspace"
											? (0, a.localize)(8497, null)
											: (0, a.localize)(8498, null);
							return L ? `${this.o.getLanguageName(L)} > ${D}` : D;
						}
						dispose() {
							this.j.dispose();
							for (const P of this.g) P.disposables.dispose();
						}
						updateScopeOverrides(P, k, L) {
							if (
								((this.c.element.innerText = ""),
								(this.c.element.style.display = "none"),
								(this.c.focusElement = this.c.element),
								P.hasPolicyValue)
							) {
								(this.c.element.style.display = "inline"),
									this.c.element.classList.add("setting-indicator"),
									(this.c.label.text =
										"$(warning) " + (0, a.localize)(8499, null));
								const D = (0, a.localize)(8500, null),
									M = (N) =>
										this.m.showHover(
											{
												...this.r,
												content: D,
												actions: [
													{
														label: (0, a.localize)(8501, null),
														commandId: "_settings.action.viewPolicySettings",
														run: (A) => {
															L.fire(`@${p.$UBc}`);
														},
													},
												],
												target: this.c.element,
											},
											N,
										);
								this.s(this.c.disposables, this.c.element, M);
							} else if (
								this.h &&
								P.settingsTarget === c.ConfigurationTarget.USER_LOCAL &&
								this.l.isSettingAppliedForAllProfiles(P.setting.key)
							) {
								(this.c.element.style.display = "inline"),
									this.c.element.classList.add("setting-indicator"),
									(this.c.label.text = (0, a.localize)(8502, null));
								const D = (0, a.localize)(8503, null),
									M = (N) =>
										this.m.showHover(
											{ ...this.r, content: D, target: this.c.element },
											N,
										);
								this.s(this.c.disposables, this.c.element, M);
							} else if (
								P.overriddenScopeList.length ||
								P.overriddenDefaultsLanguageList.length
							)
								if (
									P.overriddenScopeList.length === 1 &&
									!P.overriddenDefaultsLanguageList.length
								) {
									(this.c.element.style.display = "inline"),
										this.c.element.classList.remove("setting-indicator"),
										this.c.disposables.clear();
									const D = P.isConfigured
										? (0, a.localize)(8504, null)
										: (0, a.localize)(8505, null);
									this.c.label.text = `${D} `;
									const M = P.overriddenScopeList[0],
										N = t.$fhb(
											this.c.element,
											b("a.modified-scope", void 0, this.A(M)),
										);
									(N.tabIndex = -1), (this.c.focusElement = N);
									const A = (R) => {
										const [O, B] = M.split(":");
										k.fire({
											settingKey: P.setting.key,
											scope: O,
											language: B,
										}),
											R.preventDefault(),
											R.stopPropagation();
									};
									this.c.disposables.add(
										t.$0fb(N, t.$$gb.CLICK, (R) => {
											A(R);
										}),
									),
										this.c.disposables.add(
											t.$0fb(N, t.$$gb.KEY_DOWN, (R) => {
												const O = new i.$7fb(R);
												(O.equals(m.KeyCode.Space) ||
													O.equals(m.KeyCode.Enter)) &&
													A(R);
											}),
										);
								} else {
									(this.c.element.style.display = "inline"),
										this.c.element.classList.add("setting-indicator");
									const D = P.isConfigured
										? (0, a.localize)(8506, null)
										: (0, a.localize)(8507, null);
									this.c.label.text = D;
									let M = "";
									if (P.overriddenScopeList.length) {
										M = P.isConfigured
											? (0, a.localize)(8508, null)
											: (0, a.localize)(8509, null);
										for (const O of P.overriddenScopeList) {
											const B = this.A(O);
											M += `
- [${B}](${encodeURIComponent(O)} "${v(O, this.o)}")`;
										}
									}
									if (P.overriddenDefaultsLanguageList.length) {
										M &&
											(M += `

`);
										const R = (0, a.localize)(8510, null);
										M += R;
										for (const O of P.overriddenDefaultsLanguageList) {
											const B = this.o.getLanguageName(O);
											M += `
- [${B}](${encodeURIComponent(`default:${O}`)} "${B}")`;
										}
									}
									const N = { value: M, isTrusted: !1, supportHtml: !1 },
										A = (R) =>
											this.m.showHover(
												{
													...this.r,
													content: N,
													linkHandler: (O) => {
														const [B, U] = decodeURIComponent(O).split(":");
														k.fire({
															settingKey: P.setting.key,
															scope: B,
															language: U,
														});
													},
													target: this.c.element,
												},
												R,
											);
									this.s(this.c.disposables, this.c.element, A);
								}
							this.x();
						}
						updateDefaultOverrideIndicator(P) {
							this.f.element.style.display = "none";
							let k = $(P);
							if (k !== void 0) {
								(this.f.element.style.display = "inline"),
									this.f.disposables.clear(),
									Array.isArray(k) && k.length === 1 && (k = k[0]);
								let L;
								Array.isArray(k)
									? ((k = k.map((M) => `\`${M}\``)),
										(L = (0, a.localize)(
											8512,
											null,
											k.slice(0, -1).join(", ") + " & " + k.slice(-1),
										)))
									: (L = (0, a.localize)(8511, null, k));
								const D = (M) =>
									this.m.showHover(
										{
											content: new d.$cl().appendMarkdown(L),
											target: this.f.element,
											position: { hoverPosition: w.HoverPosition.BELOW },
											appearance: { showPointer: !0, compact: !1 },
										},
										M,
									);
								this.s(this.f.disposables, this.f.element, D);
							}
							this.x();
						}
					};
				(e.$ICc = y),
					(e.$ICc = y =
						Ne(
							[
								j(1, o.$RZ),
								j(2, f.$Uyb),
								j(3, g.$4Rb),
								j(4, u.$nM),
								j(5, n.$Xl),
								j(6, h.$ek),
							],
							y,
						));
				function $(T) {
					let P;
					const k = T.defaultValueSource;
					if (k)
						if (k instanceof Map) {
							P = [];
							for (const [, L] of k) {
								const D = typeof L != "string" ? (L.displayName ?? L.id) : L;
								P.includes(D) || P.push(D);
							}
						} else typeof k == "string" ? (P = k) : (P = k.displayName ?? k.id);
					return P;
				}
				function v(T, P) {
					const [k, L] = T.split(":"),
						D =
							k === "user"
								? (0, a.localize)(8513, null)
								: k === "workspace"
									? (0, a.localize)(8514, null)
									: (0, a.localize)(8515, null);
					return L ? (0, a.localize)(8516, null, D, P.getLanguageName(L)) : D;
				}
				function S(T, P) {
					const [k, L] = T.split(":"),
						D =
							k === "user"
								? (0, a.localize)(8517, null)
								: k === "workspace"
									? (0, a.localize)(8518, null)
									: (0, a.localize)(8519, null);
					return L
						? (0, a.localize)(8520, null, D.toLowerCase(), P.getLanguageName(L))
						: D;
				}
				function I(T, P, k, L) {
					const D = [];
					if (
						(T.isUntrusted && D.push((0, a.localize)(8521, null)),
						T.hasPolicyValue)
					)
						D.push((0, a.localize)(8522, null));
					else if (
						k.isEnabled() &&
						T.settingsTarget === c.ConfigurationTarget.USER_LOCAL &&
						P.isSettingAppliedForAllProfiles(T.setting.key)
					)
						D.push((0, a.localize)(8523, null));
					else {
						const R = T.isConfigured
								? (0, a.localize)(8524, null)
								: (0, a.localize)(8525, null),
							O = T.overriddenScopeList.map((B) => S(B, L)).join(", ");
						T.overriddenScopeList.length && D.push(`${R} ${O}`);
					}
					s.has(T.setting.key) && D.push((0, a.localize)(8526, null));
					let M = $(T);
					if (M !== void 0) {
						Array.isArray(M) && M.length === 1 && (M = M[0]);
						let R;
						Array.isArray(M)
							? (R = (0, a.localize)(
									8528,
									null,
									M.slice(0, -1).join(", ") + " & " + M.slice(-1),
								))
							: (R = (0, a.localize)(8527, null, M)),
							D.push(R);
					}
					const N = T.overriddenDefaultsLanguageList
						.map((R) => L.getLanguageName(R))
						.join(", ");
					if (T.overriddenDefaultsLanguageList.length) {
						const R = (0, a.localize)(8529, null, N);
						D.push(R);
					}
					return D.join(". ");
				}
			},
		)
