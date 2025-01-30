import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/solid.js';
import '../../../../../../base/common/codicons.js';
import '../../../../controlCommon/browser/solid.js';
import '../../../../../../base/common/constants.js';
import '../../../../ui/browser/simpleButton/simpleButton.js';
import './hooks.js';
import './settingsTab.js';
import './settingsSection.js';
import './settingsSubSection.js';
import './settingsSectionDivider.js';
import './emailAndSignUpType.js';
import '../../../../ui/browser/menu/hooks.js';
import '../../../../ui/browser/menu/menu.js';
import '../../../../ui/browser/dropdown/dropdown.js';
import '../../../../aicontext/browser/components/AiContext.js';
import '../../../../aicontext/browser/aicontextPane.js';
import '../../../../aicontext/browser/contextPaneData.js';
import '../../../../ui/browser/hooks/useKeyboardShortcut.js';
import '../../../../../../base/common/platform.js';
import '../../../../../../platform/reactivestorage/common/reactiveStorageTypes.js';
define(
			de[4230],
			he([
				1, 0, 2, 2, 2, 2, 13, 14, 36, 58, 147, 722, 974, 973, 1064, 1231, 4137,
				364, 484, 523, 1981, 4205, 1714, 385, 12, 134,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*web*/,
				i /*web*/,
				w /*web*/,
				E /*web*/,
				C /*solid*/,
				d /*codicons*/,
				m /*solid*/,
				r /*constants*/,
				u /*simpleButton*/,
				a /*hooks*/,
				h /*settingsTab*/,
				c /*settingsSection*/,
				n /*settingsSubSection*/,
				g /*settingsSectionDivider*/,
				p /*emailAndSignUpType*/,
				o /*hooks*/,
				f /*menu*/,
				b /*dropdown*/,
				s /*AiContext*/,
				l /*aicontextPane*/,
				y /*contextPaneData*/,
				$ /*useKeyboardShortcut*/,
				v /*platform*/,
				S /*reactiveStorageTypes*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$ADc = O);
				const I = (0, t.template)("<div>"),
					T = (0, t.template)(
						"<div><span>Open editor settings.</span> (font, auto-save, word wrap, etc)<br><br><span>Configure keyboard shortcuts.</span> <br><br>Use <span></span> for the command palette, where many editor functions can be controlled.",
					),
					P = (0, t.template)(
						"<div>Check out our <span>docs</span> or join our <span>forum</span>.<br><br>Feel free to reach out at <span>hi@cursor.com</span>.",
					),
					k = (0, t.template)("<div>Business"),
					L = (0, t.template)("<div>Pro"),
					D = (0, t.template)("<div>Pro Trial"),
					M = (0, t.template)('<div class="settings__buttons">'),
					N = (0, t.template)('<div class="openai-model-dropdown-container">'),
					A = (0, t.template)(
						"<div>Are you sure? This replaces your settings and extensions with your vscode ones. This cannot be undone.",
					),
					R = (0, t.template)("<span>Read more");
				function O(B) {
					const U = (0, m.$odc)(),
						z = U.cursorAuthenticationService;
					(0, C.createEffect)(() => {
						z.refreshAuthentication();
						const Z = U.window.setInterval(z.refreshAuthentication, 1e3);
						(0, C.onCleanup)(() => {
							U.window.clearInterval(Z);
						});
					});
					const [F, x, H] = (0, o.$A0b)(),
						[q, V] = (0, C.createSignal)(!1),
						[G, K] = (0, C.createSignal)(!1),
						J = [
							{ id: "enabled", label: "enabled" },
							{ id: "disabled", label: "disabled" },
						],
						[W, X] = (0, C.createSignal)(!1),
						Y = U.window.setInterval(() => {
							X(
								U.cursorAuthenticationService.shouldHaveGhostModeFromEnterprise(),
							);
						}, 1e3);
					(0, C.onCleanup)(() => {
						U.window.clearInterval(Y);
					});
					const ie = (0, C.createMemo)(() =>
							W()
								? [{ id: "enabled", label: "enabled (enforced)" }]
								: [
										{ id: "disabled", label: "disabled" },
										{ id: "enabled", label: "enabled" },
									],
						),
						[ne, ee] = (0, y.$lDc)(
							U.storageService,
							l.$zDc.Id + ".experimental-index.data",
						),
						[_, te] = (0, a.$B$b)(),
						Q = (0, $.$5$b)("workbench.action.showCommands");
					return (0, w.createComponent)(h.$eDc, {
						get children() {
							return [
								(0, w.createComponent)(c.$VCc, {
									title: "Account",
									get titleExtra() {
										return [
											(0, w.createComponent)(C.Show, {
												get when() {
													return te() === S.MembershipType.ENTERPRISE;
												},
												get children() {
													const Z = k();
													return (
														Z.style.setProperty("font-size", "0.6rem"),
														Z.style.setProperty("padding", "0.05rem 0.25rem"),
														Z.style.setProperty("border-radius", "0.25rem"),
														Z.style.setProperty(
															"background",
															"var(--vscode-input-background)",
														),
														Z.style.setProperty(
															"color",
															"var(--vscode-foreground)",
														),
														Z
													);
												},
											}),
											(0, w.createComponent)(C.Show, {
												get when() {
													return te() === S.MembershipType.PRO;
												},
												get children() {
													const Z = L();
													return (
														Z.style.setProperty("font-size", "0.6rem"),
														Z.style.setProperty("padding", "0.05rem 0.25rem"),
														Z.style.setProperty("border-radius", "0.25rem"),
														Z.style.setProperty(
															"background",
															"var(--vscode-input-background)",
														),
														Z.style.setProperty(
															"color",
															"var(--vscode-foreground)",
														),
														Z
													);
												},
											}),
											(0, w.createComponent)(C.Show, {
												get when() {
													return te() === S.MembershipType.FREE_TRIAL;
												},
												get children() {
													const Z = D();
													return (
														Z.style.setProperty("font-size", "0.6rem"),
														Z.style.setProperty("padding", "0.05rem 0.25rem"),
														Z.style.setProperty("border-radius", "0.25rem"),
														Z.style.setProperty(
															"background",
															"var(--vscode-input-background)",
														),
														Z.style.setProperty(
															"color",
															"var(--vscode-foreground)",
														),
														Z
													);
												},
											}),
										];
									},
									get description() {
										return [
											(0, E.memo)(() =>
												_() !== !0
													? "To avoid abuse on our backend, we ask that you login to use the AI features."
													: "",
											),
											(0, w.createComponent)(p.$jDc, {}),
										];
									},
									style: { gap: "8px" },
									get children() {
										return (0, w.createComponent)(C.Show, {
											get when() {
												return _();
											},
											get fallback() {
												return (() => {
													const Z = M();
													return (
														(0, i.insert)(
															Z,
															(0, w.createComponent)(u.$rdc, {
																title: "Sign in",
																onClick: () => z.login(),
															}),
														),
														Z
													);
												})();
											},
											get children() {
												return (0, w.createComponent)(C.Show, {
													get when() {
														return (
															(0, E.memo)(
																() => te() !== S.MembershipType.FREE,
															)() && te() !== S.MembershipType.FREE_TRIAL
														);
													},
													get fallback() {
														return (() => {
															const Z = I();
															return (
																Z.style.setProperty("display", "flex"),
																Z.style.setProperty("gap", "8px"),
																Z.style.setProperty("align-items", "center"),
																Z.style.setProperty("transform-origin", "left"),
																(0, i.insert)(
																	Z,
																	(0, w.createComponent)(u.$rdc, {
																		title: "Upgrade to Pro",
																		size: "small",
																		get codicon() {
																			return d.$ak.rocket;
																		},
																		get onClick() {
																			return z.pay;
																		},
																	}),
																	null,
																),
																(0, i.insert)(
																	Z,
																	(0, w.createComponent)(u.$rdc, {
																		title: "Manage",
																		type: "tertiary",
																		size: "small",
																		get codicon() {
																			return d.$ak.settingsGear;
																		},
																		get onClick() {
																			return z.settings;
																		},
																	}),
																	null,
																),
																(0, i.insert)(
																	Z,
																	(0, w.createComponent)(u.$rdc, {
																		title: "Log out",
																		type: "tertiary",
																		size: "small",
																		get codicon() {
																			return d.$ak.logOut;
																		},
																		onClick: () => z.logout(),
																	}),
																	null,
																),
																Z
															);
														})();
													},
													get children() {
														const Z = I();
														return (
															Z.style.setProperty("display", "flex"),
															Z.style.setProperty("gap", "8px"),
															Z.style.setProperty("align-items", "center"),
															(0, i.insert)(
																Z,
																(0, w.createComponent)(C.Show, {
																	get when() {
																		return te() === S.MembershipType.ENTERPRISE;
																	},
																	get children() {
																		return (0, w.createComponent)(u.$rdc, {
																			title: "Invite To Team",
																			type: "primary",
																			size: "small",
																			get codicon() {
																				return d.$ak.plus;
																			},
																			onClick: (se) => {
																				U.reactiveStorageService.setNonPersistentStorage(
																					"showingInviteModal",
																					!0,
																				);
																			},
																		});
																	},
																}),
																null,
															),
															(0, i.insert)(
																Z,
																(0, w.createComponent)(u.$rdc, {
																	title: "Manage",
																	type: "tertiary",
																	size: "small",
																	get codicon() {
																		return d.$ak.settingsGear;
																	},
																	get onClick() {
																		return z.settings;
																	},
																}),
																null,
															),
															(0, i.insert)(
																Z,
																(0, w.createComponent)(u.$rdc, {
																	title: "Log out",
																	type: "tertiary",
																	size: "small",
																	get codicon() {
																		return d.$ak.logOut;
																	},
																	onClick: () => z.logout(),
																}),
																null,
															),
															Z
														);
													},
												});
											},
										});
									},
								}),
								(0, w.createComponent)(n.$YCc, {
									label: "VS Code Import",
									description:
										"Instantly use all of your extensions, settings and keybindings",
									get extra() {
										return (() => {
											const Z = N();
											return (
												Z.style.setProperty("transform-origin", "right"),
												Z.style.setProperty("position", "relative"),
												(0, i.insert)(
													Z,
													(0, w.createComponent)(u.$rdc, {
														get title() {
															return q() ? "Importing" : "Import";
														},
														type: "tertiary",
														size: "small",
														get codicon() {
															return G() ? d.$ak.check : d.$ak.add;
														},
														get isLoading() {
															return q();
														},
														get style() {
															return {
																opacity: q() ? 0.5 : 1,
																transition: "opacity 0.1s",
																"pointer-events": q() ? "none" : "auto",
															};
														},
														onClick: (se) => {
															const re =
																se?.currentTarget?.getBoundingClientRect();
															re && x({ x: 0, y: re.height + 6 });
														},
													}),
													null,
												),
												(0, i.insert)(
													Z,
													(0, w.createComponent)(C.Show, {
														get when() {
															return F();
														},
														children: (se) =>
															(0, w.createComponent)(f.Menu, {
																isRelative: !0,
																anchor: "top-left",
																get position() {
																	return se();
																},
																close: H,
																width: "240px",
																zIndexModifier: 1e9,
																style: {
																	padding: "8px 12px",
																	gap: "8px",
																	"z-index": "10000",
																},
																animationType: "fade",
																get children() {
																	return [
																		(() => {
																			const re = A();
																			return (
																				re.style.setProperty(
																					"font-size",
																					"12px",
																				),
																				re
																			);
																		})(),
																		(() => {
																			const re = I();
																			return (
																				re.style.setProperty("display", "flex"),
																				re.style.setProperty(
																					"align-items",
																					"center",
																				),
																				re.style.setProperty(
																					"justify-content",
																					"flex-end",
																				),
																				re.style.setProperty("gap", "6px"),
																				(0, i.insert)(
																					re,
																					(0, w.createComponent)(u.$rdc, {
																						title: "Cancel",
																						type: "secondary",
																						onClick: H,
																						style: {
																							"font-size": "12px",
																							padding: "4px",
																							"line-height": "80%",
																						},
																					}),
																					null,
																				),
																				(0, i.insert)(
																					re,
																					(0, w.createComponent)(u.$rdc, {
																						title: "Confirm",
																						style: {
																							"font-size": "12px",
																							padding: "4px",
																							"line-height": "80%",
																						},
																						onClick: () => {
																							(async () => {
																								if ((H(), V(!0), !1))
																									await new Promise((ae) =>
																										setTimeout(ae, 3e3),
																									),
																										V(!1),
																										K(!0),
																										await new Promise((ae) =>
																											setTimeout(ae, 5e3),
																										),
																										K(!1);
																								else
																									try {
																										await U.commandService.executeCommand(
																											r.$9W,
																											!0,
																										),
																											V(!1),
																											K(!0),
																											await new Promise((ae) =>
																												setTimeout(ae, 5e3),
																											),
																											K(!1),
																											U.notificationService.info(
																												"VS Code import completed!",
																											);
																									} catch (ae) {
																										console.error(
																											"Error importing extensions:",
																											ae,
																										),
																											U.notificationService.error(
																												"Error importing extensions, please try again.",
																											),
																											V(!1);
																									}
																							})();
																						},
																					}),
																					null,
																				),
																				re
																			);
																		})(),
																	];
																},
															}),
													}),
													null,
												),
												Z
											);
										})();
									},
								}),
								(0, w.createComponent)(g.$dDc, {}),
								(0, w.createComponent)(c.$VCc, {
									title: "Rules for AI",
									description: `These rules get shown to the AI on all chats and ${v.$m ? "Command" : "Ctrl"}-K sessions.`,
									get children() {
										const Z = I();
										return (
											Z.style.setProperty("display", "flex"),
											Z.style.setProperty("flex-direction", "column"),
											Z.style.setProperty("gap", "4px"),
											(0, i.insert)(
												Z,
												(0, w.createComponent)(s.$tDc, {
													get inputBoxDelegate() {
														return ne.inputBoxDelegate;
													},
												}),
												null,
											),
											(0, i.insert)(
												Z,
												(0, w.createComponent)(n.$YCc, {
													label: "Include .cursorrules file",
													description:
														"If off, we will not include any .cursorrules files in your Rules for AI.",
													get value() {
														return (
															U.reactiveStorageService
																.workspaceUserPersistentStorage
																.ignoreCursorRules !== !0
														);
													},
													onChange: (se) => {
														U.reactiveStorageService.setWorkspaceUserPersistentStorage(
															"ignoreCursorRules",
															!se,
														);
													},
												}),
												null,
											),
											Z
										);
									},
								}),
								(0, w.createComponent)(g.$dDc, {}),
								(0, w.createComponent)(c.$VCc, {
									title: "Editor",
									get children() {
										const Z = T(),
											se = Z.firstChild,
											re = se.nextSibling,
											le = re.nextSibling,
											oe = le.nextSibling,
											ae = oe.nextSibling,
											pe = ae.nextSibling,
											$e = pe.nextSibling,
											ye = $e.nextSibling,
											ue = ye.nextSibling,
											fe = ue.nextSibling;
										return (
											Z.style.setProperty("font-size", "12px"),
											Z.style.setProperty(
												"color",
												"var(--vscode-input-placeholderForeground)",
											),
											se.addEventListener("click", () => {
												U.commandService.executeCommand(
													"workbench.action.openGlobalSettings",
												);
											}),
											se.style.setProperty("cursor", "pointer"),
											se.style.setProperty("text-decoration", "underline"),
											se.style.setProperty("text-underline-offset", "2px"),
											ae.addEventListener("click", () => {
												U.commandService.executeCommand(
													"workbench.action.openGlobalKeybindings",
												);
											}),
											ae.style.setProperty("cursor", "pointer"),
											ae.style.setProperty("text-decoration", "underline"),
											ae.style.setProperty("text-underline-offset", "2px"),
											fe.addEventListener("click", () => {
												U.commandService.executeCommand(
													"workbench.action.showCommands",
												);
											}),
											fe.style.setProperty("cursor", "pointer"),
											fe.style.setProperty("text-decoration", "underline"),
											fe.style.setProperty("text-underline-offset", "2px"),
											(0, i.insert)(fe, Q),
											Z
										);
									},
								}),
								(0, w.createComponent)(g.$dDc, {}),
								(0, w.createComponent)(c.$VCc, {
									title: "Privacy mode",
									get description() {
										return [
											"If on, none of your code will be stored by us. If off, we may save prompts and collect telemetry data to improve Cursor.",
											" ",
											(() => {
												const Z = R();
												return (
													Z.addEventListener("click", () => {
														U.openerService.open("https://cursor.com/privacy", {
															openExternal: !0,
														});
													}),
													Z.style.setProperty("cursor", "pointer"),
													Z.style.setProperty("text-decoration", "underline"),
													Z.style.setProperty("text-underline-offset", "2px"),
													Z
												);
											})(),
											".",
										];
									},
									get children() {
										return (0, w.createComponent)(b.$Kbc, {
											chevronRight: !0,
											get origLabel() {
												return U.cursorAuthenticationService.reactivePrivacyMode() ===
													!0
													? "enabled"
													: "disabled";
											},
											get items() {
												return (0, E.memo)(
													() => te() === S.MembershipType.ENTERPRISE,
												)()
													? ie()
													: J;
											},
											onSelect: (Z) => {
												U.reactiveStorageService.setApplicationUserPersistentStorage(
													"noStorageMode",
													Z === "enabled",
												);
											},
											get value() {
												return U.cursorAuthenticationService.reactivePrivacyMode() !==
													!0
													? "disabled"
													: "enabled";
											},
											isRelative: !0,
										});
									},
								}),
								(0, w.createComponent)(g.$dDc, {}),
								(0, w.createComponent)(c.$VCc, {
									title: "Any questions?",
									get children() {
										const Z = P(),
											se = Z.firstChild,
											re = se.nextSibling,
											le = re.nextSibling,
											oe = le.nextSibling,
											ae = oe.nextSibling,
											pe = ae.nextSibling,
											$e = pe.nextSibling,
											ye = $e.nextSibling,
											ue = ye.nextSibling;
										return (
											Z.style.setProperty("font-size", "12px"),
											Z.style.setProperty(
												"color",
												"var(--vscode-input-placeholderForeground)",
											),
											re.addEventListener("click", () => {
												U.openerService.open("https://docs.cursor.com", {
													openExternal: !0,
												});
											}),
											re.style.setProperty("cursor", "pointer"),
											re.style.setProperty("text-decoration", "underline"),
											re.style.setProperty("text-underline-offset", "2px"),
											oe.addEventListener("click", () => {
												U.openerService.open("https://forum.cursor.com", {
													openExternal: !0,
												});
											}),
											oe.style.setProperty("cursor", "pointer"),
											oe.style.setProperty("text-decoration", "underline"),
											oe.style.setProperty("text-underline-offset", "2px"),
											ue.addEventListener("click", () => {
												U.openerService.open("mailto:hi@cursor.com", {
													openExternal: !0,
												});
											}),
											ue.style.setProperty("cursor", "pointer"),
											ue.style.setProperty("text-decoration", "underline"),
											ue.style.setProperty("text-underline-offset", "2px"),
											Z
										);
									},
								}),
							];
						},
					});
				}
			},
		),
		