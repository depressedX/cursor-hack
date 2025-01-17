import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/codicons.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../../platform/terminal/common/terminal.js';
import './terminalIcon.js';
import './terminalIcons.js';
import '../../../../nls.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../base/common/themables.js';
import '../common/terminal.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../../base/common/path.js';
import '../../../../platform/notification/common/notification.js';
define(
			de[3169],
			he([1, 0, 14, 10, 63, 117, 514, 689, 4, 35, 26, 145, 79, 54, 40]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$jUc = void 0),
					(m = mt(m));
				let g = class {
					constructor(o, f, b, s, l, y) {
						(this.c = o),
							(this.d = f),
							(this.f = b),
							(this.g = s),
							(this.h = l),
							(this.i = y);
					}
					async showAndGetResult(o) {
						const f = await this.c.getPlatformKey(),
							b = E.TerminalSettingPrefix.Profiles + f,
							s = await this.j(o),
							l = `${E.TerminalSettingPrefix.DefaultProfile}${f}`;
						if (s) {
							if (o === "setDefault") {
								if ("command" in s.profile) return;
								if ("id" in s.profile)
									return (
										await this.f.updateValue(
											l,
											s.profile.title,
											i.ConfigurationTarget.USER,
										),
										{
											config: {
												extensionIdentifier: s.profile.extensionIdentifier,
												id: s.profile.id,
												title: s.profile.title,
												options: {
													color: s.profile.color,
													icon: s.profile.icon,
												},
											},
											keyMods: s.keyMods,
										}
									);
								if ("isAutoDetected" in s.profile) {
									const y = await this.f.getValue(b);
									if (typeof y == "object") {
										const $ = { path: s.profile.path };
										s.profile.args && ($.args = s.profile.args),
											(y[s.profile.profileName] = this.k(s.profile)),
											await this.f.updateValue(
												b,
												y,
												i.ConfigurationTarget.USER,
											);
									}
								}
								await this.f.updateValue(
									l,
									s.profileName,
									i.ConfigurationTarget.USER,
								);
							} else if (o === "createInstance")
								return "id" in s.profile
									? {
											config: {
												extensionIdentifier: s.profile.extensionIdentifier,
												id: s.profile.id,
												title: s.profile.title,
												options: {
													icon: s.profile.icon,
													color: s.profile.color,
												},
											},
											keyMods: s.keyMods,
										}
									: { config: s.profile, keyMods: s.keyMods };
							return "profileName" in s.profile
								? s.profile.profileName
								: s.profile.title;
						}
					}
					async j(o) {
						const f = await this.c.getPlatformKey(),
							b = this.c.availableProfiles,
							s = E.TerminalSettingPrefix.Profiles + f,
							l = this.c.getDefaultProfileName();
						let y;
						const $ = {
								placeHolder:
									o === "createInstance"
										? m.localize(10128, null)
										: m.localize(10129, null),
								onDidTriggerItemButton: async (L) => {
									if (
										!(await this.l(L.item.profile)) ||
										"command" in L.item.profile ||
										"id" in L.item.profile
									)
										return;
									const D = this.f.getValue(
											E.TerminalSettingPrefix.Profiles + f,
										),
										M = D ? Object.keys(D) : [],
										N = await this.g.input({
											prompt: m.localize(10130, null),
											value: L.item.profile.profileName,
											validateInput: async (R) => {
												if (M.includes(R)) return m.localize(10131, null);
											},
										});
									if (!N) return;
									const A = { ...D, [N]: this.k(L.item.profile) };
									await this.f.updateValue(s, A, i.ConfigurationTarget.USER);
								},
								onKeyMods: (L) => (y = L),
							},
							v = [],
							S = b.filter((L) => !L.isAutoDetected),
							I = b.filter((L) => L.isAutoDetected);
						S.length > 0 &&
							(v.push({ type: "separator", label: m.localize(10132, null) }),
							v.push(
								...this.n(
									S.map((L) => this.m(L)),
									l,
								),
							)),
							v.push({ type: "separator", label: m.localize(10133, null) });
						const T = [];
						for (const L of this.c.contributedProfiles) {
							let D;
							typeof L.icon == "string" &&
								(L.icon.startsWith("$(")
									? (D = u.ThemeIcon.fromString(L.icon))
									: (D = u.ThemeIcon.fromId(L.icon))),
								(!D || !(0, h.$_O)().getIcon(D.id)) &&
									(D = this.d.getDefaultIcon());
							const M = (0, C.$Snc)(L, this.h.getColorTheme().type, !0),
								N = (0, C.$Onc)(L),
								A = [];
							M && A.push(...M),
								N && A.push(N),
								T.push({
									label: `$(${D.id}) ${L.title}`,
									profile: {
										extensionIdentifier: L.extensionIdentifier,
										title: L.title,
										icon: L.icon,
										id: L.id,
										color: L.color,
									},
									profileName: L.title,
									iconClasses: A,
								});
						}
						T.length > 0 && v.push(...this.n(T, l)),
							I.length > 0 &&
								(v.push({ type: "separator", label: m.localize(10134, null) }),
								v.push(
									...this.n(
										I.map((L) => this.m(L)),
										l,
									),
								));
						const P = (0, C.$Qnc)(this.h.getColorTheme()),
							k = await this.g.pick(v, $);
						if ((P.dispose(), !!k && (await this.l(k.profile))))
							return y && (k.keyMods = y), k;
					}
					k(o) {
						const f = { path: o.path };
						return o.args && (f.args = o.args), o.env && (f.env = o.env), f;
					}
					async l(o) {
						const f = "isUnsafePath" in o && o.isUnsafePath,
							b = "requiresUnsafePath" in o && o.requiresUnsafePath;
						return !f && !b
							? !0
							: await new Promise((s) => {
									const l = [];
									f && l.push(o.path),
										b && l.push(b),
										this.i
											.prompt(
												n.Severity.Warning,
												m.localize(10135, null, `"${l.join(",")}"`),
												[
													{ label: m.localize(10136, null), run: () => s(!0) },
													{ label: m.localize(10137, null), run: () => s(!1) },
												],
											)
											.onDidClose(() => s(!1));
								});
					}
					m(o) {
						const f = [
								{
									iconClass: u.ThemeIcon.asClassName(d.$ZHb),
									tooltip: m.localize(10138, null),
								},
							],
							s = `$(${(o.icon && u.ThemeIcon.isThemeIcon(o.icon) ? o.icon : t.$ak.terminal).id}) ${o.profileName}`,
							l = o.isFromPath ? (0, c.$sc)(o.path) : o.path,
							y = (0, C.$Onc)(o),
							$ = [];
						if ((y && $.push(y), o.args)) {
							if (typeof o.args == "string")
								return {
									label: s,
									description: `${o.path} ${o.args}`,
									profile: o,
									profileName: o.profileName,
									buttons: f,
									iconClasses: $,
								};
							const v = o.args
								.map((S) =>
									S.includes(" ") ? `"${S.replace(/"/g, '\\"')}"` : S,
								)
								.join(" ");
							return {
								label: s,
								description: `${l} ${v}`,
								profile: o,
								profileName: o.profileName,
								buttons: f,
								iconClasses: $,
							};
						}
						return {
							label: s,
							description: l,
							profile: o,
							profileName: o.profileName,
							buttons: f,
							iconClasses: $,
						};
					}
					n(o, f) {
						return o.sort((b, s) =>
							s.profileName === f
								? 1
								: b.profileName === f
									? -1
									: b.profileName.localeCompare(s.profileName),
						);
					}
				};
				(e.$jUc = g),
					(e.$jUc = g =
						Ne(
							[
								j(0, a.$teb),
								j(1, a.$reb),
								j(2, i.$gj),
								j(3, w.$DJ),
								j(4, r.$iP),
								j(5, n.$4N),
							],
							g,
						));
			},
		),
		