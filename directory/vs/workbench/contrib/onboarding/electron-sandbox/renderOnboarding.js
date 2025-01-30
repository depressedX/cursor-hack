import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/solid.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/uri.js';
import '../../ui/browser/simpleButton/simpleButton.js';
import '../../../../base/common/codicons.js';
import '../../ui/browser/dropdown/dropdown.js';
import '../../controlCommon/browser/solid.js';
import '../../ui/browser/inlineTextArea/inlineTextArea.js';
import '../../ui/browser/loadingStateButton/loadingStateButton.js';
import '../../../../base/common/platform.js';
import './onboardingActions.js';
import '../../../../base/common/constants.js';
import '../../../../base/browser/solidComponents/switch/switch.js';
import '../../ui/browser/scrollableDiv.js';
import '../../../../platform/product/common/product.js';
import '../../../../base/common/themables.js';
import '../browser/components/sparkleDiv.js';
import '../../aichat/browser/components/Utils.js';
import '../../aiCursorHelp/browser/AiCursorHelpPane.js';
import '../../authentication/browser/components/login/login.js';
import '../../../../css!vs/workbench/contrib/onboarding/electron-sandbox/Onboarding.js';
import '../../../../css!vs/workbench/contrib/onboarding/electron-sandbox/onboardingLogin.js';
define(
		de[4339],
		he([
			1, 0, 2, 2, 2, 2, 2, 2, 13, 33, 9, 147, 14, 523, 36, 695, 1073, 12, 1897,
			58, 650, 135, 372, 26, 3120, 242, 4234, 1987, 2471, 2472,
		]),
		function (			ce /*require*/,
			e /*exports*/,
			t /*web*/,
			i /*web*/,
			w /*web*/,
			E /*web*/,
			C /*web*/,
			d /*web*/,
			m /*solid*/,
			r /*cancellation*/,
			u /*uri*/,
			a /*simpleButton*/,
			h /*codicons*/,
			c /*dropdown*/,
			n /*solid*/,
			g /*inlineTextArea*/,
			p /*loadingStateButton*/,
			o /*platform*/,
			f /*onboardingActions*/,
			b /*constants*/,
			s /*switch*/,
			l /*scrollableDiv*/,
			y /*product*/,
			$ /*themables*/,
			v /*sparkleDiv*/,
			S /*Utils*/,
			I /*AiCursorHelpPane*/,
			T /*login*/,
) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$hed = void 0),
				(e.$ied = _),
				(g = xi(g)),
				(y = xi(y));
			const P = (0, t.template)("<div>"),
				k = (0, t.template)(
					"<div><p>Help Improve Cursor</p><p>To make Cursor better, this option lets us collect usage data. This includes questions in chat, code snippets, edits, and editor actions.",
				),
				L = (0, t.template)(
					'<div class="welcome-screen-inner"><div class="key-bindings-section section"><h2 class="key-bindings-title title">Data Preferences</h2><div><div><p>Privacy Mode</p><p>If you enable Privacy Mode, none of your questions or code will ever be stored by us or any third-party.</p></div></div><div><p class="index-subheading"><span>You can always change this later in the settings. <span>Read more</span>.</span></p></div></div><div class="done-button-section"><div>',
				),
				D = (0, t.template)(
					'<div class="onboarding-cursor"><div class="fullscreen">',
				),
				M = (0, t.template)(
					'<div class="onboarding-cursor"><div class="fullscreen"><div class="welcome-screen-container"><div class="welcome-screen-inner"><div class="key-bindings-section section"></div><div class="done-button-section"><div>',
				),
				N = (0, t.template)("<div> extension<span>"),
				A = (0, t.template)(
					'<div class="onboarding-cursor"><div class="fullscreen"><div class="welcome-screen-container"> <div class="welcome-screen-inner"><div class="key-bindings-section section"><h2 class="copilot-setup-title title">VS Code Extensions</h2><p class="key-bindings-subheading subheading">Instantly import your extensions, settings, and keybindings from VS Code to make trying out Cursor simple.</p><div class="click-area"></div></div><div class="done-button-section"><div></div><div><div>',
				),
				R = (0, t.template)("<div>Activating<span></span> "),
				O = (0, t.template)(
					'<div class="onboarding-cursor"><div class="fullscreen"><div class="welcome-screen-container"> <div class="welcome-screen-inner"><div class="key-bindings-section section"><h2 class="copilot-setup-title title">Autocomplete Preferences</h2><p class="key-bindings-subheading subheading">Importing <!> will override Cursor Tab, a more powerful version of Copilot that can suggest mid-line completions and full diffs.</p><div class="click-area"></div></div><div class="done-button-section"><div></div><div><div>',
				),
				B = (0, t.template)('<span class="openai-switch-text">Enabled'),
				U = (0, t.template)(
					'<div class="welcome-screen-inner first-screen"><div class="key-bindings-section section"><h2 class="key-bindings-title title">Keyboard</h2><p class="key-bindings-subheading subheading">Vim, Emacs, Atom, Sublime, and Jetbrains keybindings.</p></div><div class="key-bindings-section section"><h2 class="key-bindings-title title">Language for AI</h2><p class="key-bindings-subheading subheading">You can specify a non-English language for the AI.</p></div><div class="key-bindings-section section"><h2 class="index-title title">Codebase-wide</h2><p class="index-subheading subheading">Compute embeddings for codebase-wide questions.</p><div class="click-area"> </div></div><div class="key-bindings-section section"><h2 class="key-bindings-title title">Add </h2><p class="key-bindings-subheading subheading">Launch from the<!> using `code` or `<!>`.</p><div class="click-area"><div></div></div></div><div class="done-button-section">',
				),
				z = (0, t.template)('<span class="openai-switch-text">Disabled'),
				F = (0, t.template)(
					"<div><div><div>You can find Cursor Help in the AI Pane next to the Chat tab.</div><div>",
				),
				x = (0, t.template)(
					"<div><div></div><div><div><div>Cursor Help</div><div>",
				),
				H = (0, t.template)(
					`<div class="onboarding-cursor-login"><div class="fullscreen"><div class="welcome-screen-container login-screen-container"><div class="welcome-screen-inner"><h1>You're all set!</h1><div class="done-button-section"><div>`,
				),
				q = (0, t.template)('<div class="welcome-cards">');
			e.$hed = !1;
			const V = [
					{ label: "Default (VS Code)", vsix: null },
					{ label: "Vim", vsix: "vscodevim.vim" },
					{ label: "Jetbrains", vsix: "k--kato.intellij-idea-keybindings" },
					{ label: "Emacs", vsix: "tuttieee.emacs-mcx" },
					{ label: "Sublime", vsix: "ms-vscode.sublime-keybindings" },
					{ label: "Atom", vsix: "ms-vscode.atom-keybindings" },
				],
				G = (te) => {
					const [Q, Z] = (0, m.createSignal)("");
					(0, m.createEffect)(() => {
						Z(te.plans[0].label);
					});
					const se = (re) => {
						te.onClick(re), Z(re.label);
					};
					return (0, d.createComponent)(c.$Kbc, {
						get origLabel() {
							return te.plans[0].label;
						},
						get items() {
							return te.plans.map((re) => ({ id: re.label, label: re.label }));
						},
						onSelect: (re) => {
							const le = te.plans.find((oe) => oe.label === re);
							le && se(le);
						},
						get value() {
							return Q();
						},
					});
				},
				K = (te) => {
					const Q = (0, n.$odc)(),
						Z = (0, m.createMemo)(
							() => Q.cursorAuthenticationService.reactivePrivacyMode() === !0,
						),
						se = (0, m.createMemo)(
							() =>
								Q.reactiveStorageService.applicationUserPersistentStorage
									.indexRepository === !0,
						),
						re = (fe) => {
							Q.reactiveStorageService.setApplicationUserPersistentStorage(
								"noStorageMode",
								fe,
							);
						},
						le = (fe) => {
							Q.reactiveStorageService.setApplicationUserPersistentStorage(
								"indexRepository",
								fe,
							);
						},
						oe = () => {
							try {
								Q.cursorAuthenticationService.reactivePrivacyMode() ===
									void 0 && re(!1),
									Z()
										? (Q.telemetryService.publicLogCapture(
												"onboarding.card.privacy.disabled",
											),
											Q.metricsService.increment({
												stat: "onboarding.card.privacy.disabled",
											}),
											Q.reactiveStorageService.setApplicationUserPersistentStorage(
												"selectedPrivacyForOnboarding",
												!0,
											))
										: (Q.telemetryService.publicLogCapture(
												"onboarding.card.privacy.enabled",
											),
											Q.metricsService.increment({
												stat: "onboarding.card.privacy.enabled",
											}),
											Q.reactiveStorageService.setApplicationUserPersistentStorage(
												"selectedPrivacyForOnboarding",
												!1,
											));
							} catch (fe) {
								console.error(fe);
							}
							te.onSubmit();
						},
						ae = Q.themeService
							.getColorTheme()
							.getColor("foreground")
							?.transparent(0.7).rgba;
					console.log("FOREGROUND COLOR: ", ae);
					const pe = { value: void 0 },
						[$e, ye] = (0, m.createSignal)(0),
						ue = () => {
							pe.value && ye(pe.value.clientHeight);
						};
					return (
						(0, m.createEffect)(() => {
							const fe = new ResizeObserver(ue);
							pe.value && (fe.observe(pe.value), ue()),
								(0, m.onCleanup)(() => {
									pe.value && fe.unobserve(pe.value);
								});
						}),
						(() => {
							const fe = D(),
								me = fe.firstChild;
							return (
								(0, i.insert)(
									me,
									(0, d.createComponent)(l.$w0b, {
										get style() {
											return {
												height: `${$e() + 142}px`,
												"max-height": "min(800px, 90vh)",
												overflow: "hidden",
												"max-width": "625px",
												"min-width": "500px",
											};
										},
										scrollingDirection: "vertical",
										class: "welcome-screen-container",
										get children() {
											const ve = L(),
												ge = ve.firstChild,
												be = ge.firstChild,
												Ce = be.nextSibling,
												Le = Ce.firstChild,
												Fe = Le.firstChild,
												Oe = Fe.nextSibling,
												xe = Ce.nextSibling,
												He = xe.firstChild,
												Ke = He.firstChild,
												Je = Ke.firstChild,
												Te = Je.nextSibling,
												Ee = ge.nextSibling,
												Ie = Ee.firstChild;
											return (
												ve.style.setProperty("min-width", "500px"),
												(0, C.use)((Be) => {
													pe.value = Be;
												}, ge),
												ge.style.setProperty("margin-bottom", "20px"),
												Ce.style.setProperty("display", "grid"),
												Ce.style.setProperty(
													"grid-template-columns",
													"1fr 1fr",
												),
												Ce.style.setProperty("margin-top", "50px"),
												Ce.style.setProperty("margin-bottom", "32px"),
												(0, i.insert)(
													Ce,
													(0, d.createComponent)(v.$ged, {
														get active() {
															return !Z();
														},
														get children() {
															const Be = k(),
																Se = Be.firstChild,
																ke = Se.nextSibling;
															return (
																Be.addEventListener("click", () => {
																	Z() !== !0 && oe(), re(!1);
																}),
																Be.style.setProperty("position", "relative"),
																Be.style.setProperty(
																	"box-sizing",
																	"border-box",
																),
																Be.style.setProperty(
																	"background-color",
																	"var(--vscode-editor-background)",
																),
																Be.style.setProperty("margin-right", "8px"),
																Be.style.setProperty("border-width", "2px"),
																Be.style.setProperty("border-style", "solid"),
																Be.style.setProperty("cursor", "pointer"),
																Be.style.setProperty("border-radius", "10px"),
																Be.style.setProperty("padding", "10px 20px"),
																Be.style.setProperty("padding-bottom", "24px"),
																Be.style.setProperty("height", "100%"),
																Se.style.setProperty("font-weight", "500"),
																Se.style.setProperty("font-size", "18px"),
																ke.style.setProperty("opacity", "0.7"),
																ke.style.setProperty("font-size", "11px"),
																(0, i.insert)(
																	Be,
																	(0, d.createComponent)(m.Show, {
																		get when() {
																			return !Z();
																		},
																		get children() {
																			const Ue = P();
																			return (
																				Ue.style.setProperty(
																					"position",
																					"absolute",
																				),
																				Ue.style.setProperty("bottom", "10px"),
																				Ue.style.setProperty("right", "10px"),
																				Ue.style.setProperty(
																					"color",
																					"var(--vscode-testing-iconPassed)",
																				),
																				(0, E.effect)(() =>
																					(0, w.className)(
																						Ue,
																						$.ThemeIcon.asClassName(
																							h.$ak.passFilled,
																						),
																					),
																				),
																				Ue
																			);
																		},
																	}),
																	null,
																),
																(0, E.effect)(
																	(Ue) => {
																		const qe = Z() ? "0.7" : "1",
																			Ae = Z()
																				? "rgba(0,0,0,0)"
																				: "var(--vscode-testing-iconPassed)";
																		return (
																			qe !== Ue._v$ &&
																				((Ue._v$ = qe) != null
																					? Be.style.setProperty("opacity", qe)
																					: Be.style.removeProperty("opacity")),
																			Ae !== Ue._v$2 &&
																				((Ue._v$2 = Ae) != null
																					? Be.style.setProperty(
																							"border-color",
																							Ae,
																						)
																					: Be.style.removeProperty(
																							"border-color",
																						)),
																			Ue
																		);
																	},
																	{ _v$: void 0, _v$2: void 0 },
																),
																Be
															);
														},
													}),
													Le,
												),
												Le.addEventListener("click", () => {
													re(!0);
												}),
												Le.style.setProperty("position", "relative"),
												Le.style.setProperty("margin-right", "8px"),
												Le.style.setProperty("border-width", "2px"),
												Le.style.setProperty("box-sizing", "border-box"),
												Le.style.setProperty("cursor", "pointer"),
												Le.style.setProperty("border-style", "solid"),
												Le.style.setProperty("border-radius", "10px"),
												Le.style.setProperty("padding-top", "5px"),
												Le.style.setProperty("padding", "10px 20px"),
												Le.style.setProperty("padding-bottom", "24px"),
												Le.style.setProperty("height", "100%"),
												Fe.style.setProperty("font-weight", "500"),
												Fe.style.setProperty("font-size", "18px"),
												Oe.style.setProperty("opacity", "0.7"),
												Oe.style.setProperty("font-size", "11px"),
												(0, i.insert)(
													Le,
													(0, d.createComponent)(m.Show, {
														get when() {
															return Z();
														},
														get children() {
															const Be = P();
															return (
																Be.style.setProperty("position", "absolute"),
																Be.style.setProperty("bottom", "10px"),
																Be.style.setProperty("right", "10px"),
																(0, E.effect)(() =>
																	(0, w.className)(
																		Be,
																		$.ThemeIcon.asClassName(h.$ak.lock),
																	),
																),
																Be
															);
														},
													}),
													null,
												),
												xe.style.setProperty("margin-top", "32px"),
												He.style.setProperty(
													"color",
													"var(--vscode-input-placeholderForeground)",
												),
												He.style.setProperty("font-size", "11px"),
												He.style.setProperty("max-width", "425px"),
												He.style.setProperty("margin", "12px auto 0px auto"),
												He.style.setProperty("line-height", "1.5"),
												Te.addEventListener("click", () => {
													Q.openerService.open("https://cursor.com/privacy", {
														openExternal: !0,
													});
												}),
												Te.style.setProperty("cursor", "pointer"),
												Te.style.setProperty("text-decoration", "underline"),
												Te.style.setProperty("text-underline-offset", "2px"),
												(0, i.insert)(
													Ee,
													(0, d.createComponent)(a.$rdc, {
														onClick: () => {
															te.onBack();
														},
														type: "secondary",
														title: "Back",
													}),
													Ie,
												),
												Ie.style.setProperty("flex-grow", "1"),
												(0, i.insert)(
													Ee,
													(0, d.createComponent)(a.$rdc, {
														onClick: () => {
															oe();
														},
														type: "primary",
														title: "Continue",
													}),
													null,
												),
												(0, E.effect)(
													(Be) => {
														const Se = Z() ? "1" : "0.7",
															ke = Z()
																? ae
																	? `rgba(${ae.r},${ae.g},${ae.b},${ae.a})`
																	: "var(--vscode-foreground)"
																: "rgba(0,0,0,0)";
														return (
															Se !== Be._v$3 &&
																((Be._v$3 = Se) != null
																	? Le.style.setProperty("opacity", Se)
																	: Le.style.removeProperty("opacity")),
															ke !== Be._v$4 &&
																((Be._v$4 = ke) != null
																	? Le.style.setProperty("border-color", ke)
																	: Le.style.removeProperty("border-color")),
															Be
														);
													},
													{ _v$3: void 0, _v$4: void 0 },
												),
												ve
											);
										},
									}),
								),
								fe
							);
						})()
					);
				},
				J = (te) => {
					const Q = (0, n.$odc)();
					return (() => {
						const Z = M(),
							se = Z.firstChild,
							re = se.firstChild,
							le = re.firstChild,
							oe = le.firstChild,
							ae = oe.nextSibling,
							pe = ae.firstChild;
						return (
							re.style.setProperty("max-height", "500px"),
							re.style.setProperty("text-align", "center"),
							(0, i.insert)(
								ae,
								(0, d.createComponent)(a.$rdc, {
									onClick: () => {
										te.onBack();
									},
									type: "secondary",
									title: "Back",
								}),
								pe,
							),
							pe.style.setProperty("flex-grow", "1"),
							(0, i.insert)(
								ae,
								(0, d.createComponent)(a.$rdc, {
									onClick: () => {
										te.onSubmit();
									},
									title: "Continue",
								}),
								null,
							),
							Z
						);
					})();
				},
				W = (te) => {
					const Q = (0, n.$odc)(),
						[Z, se] = (0, m.createSignal)(!1),
						[re, le] = (0, m.createSignal)(!1),
						[oe, ae] = (0, m.createSignal)(0);
					(0, m.createEffect)(() => {
						const $e = async () => {
								console.log("updating");
								const ue = await (0, f.$ced)(
									Q.fileService,
									Q.productService,
									te.nativeWorkbenchEnvironmentService,
								);
								ae(ue);
							},
							ye = Q.window.setInterval($e, 1e3);
						(0, m.onCleanup)(() => Q.window.clearInterval(ye));
					});
					async function pe() {
						le(!0);
						try {
							await Q?.commandService?.executeCommand(b.$9W, !1);
						} catch ($e) {
							console.error($e);
						}
						te.onSubmit(!0), se(!0);
					}
					return (() => {
						const $e = A(),
							ye = $e.firstChild,
							ue = ye.firstChild,
							fe = ue.firstChild,
							me = fe.nextSibling,
							ve = me.firstChild,
							ge = ve.firstChild,
							be = ge.nextSibling,
							Ce = ve.nextSibling,
							Le = Ce.firstChild,
							Fe = Le.nextSibling,
							Oe = Fe.firstChild;
						return (
							ue.style.setProperty("max-height", "min(600px, 90vh)"),
							be.style.setProperty("margin-top", "12px"),
							be.style.setProperty("color", "#888"),
							(0, i.insert)(
								Ce,
								(0, d.createComponent)(a.$rdc, {
									onClick: () => {
										te.onBack();
									},
									type: "secondary",
									title: "Back",
								}),
								Le,
							),
							Le.style.setProperty("flex-grow", "1"),
							Fe.style.setProperty("display", "flex"),
							Fe.style.setProperty("align-items", "center"),
							Fe.style.setProperty("gap", "6px"),
							(0, i.insert)(
								Fe,
								(0, d.createComponent)(a.$rdc, {
									onClick: () => {
										te.onSubmit(!1);
									},
									type: "secondary",
									title: "Start from Scratch",
								}),
								Oe,
							),
							Oe.style.setProperty("display", "flex"),
							Oe.style.setProperty("align-items", "center"),
							Oe.style.setProperty("justify-content", "flex-end"),
							(0, i.insert)(
								Oe,
								(0, d.createComponent)(m.Switch, {
									get children() {
										return [
											(0, d.createComponent)(m.Match, {
												get when() {
													return re() === !1;
												},
												get children() {
													return (0, d.createComponent)(a.$rdc, {
														onClick: () => {
															pe(),
																Q?.telemetryService &&
																	Q.telemetryService.publicLogCapture(
																		"welcome screen:captured extensions",
																	);
														},
														type: "primary",
														title: "Use Extensions",
													});
												},
											}),
											(0, d.createComponent)(m.Match, {
												get when() {
													return Z();
												},
												get children() {
													return [
														(0, d.createComponent)(a.$rdc, {
															onClick: () => {
																te.onSubmit(!0);
															},
															type: "primary",
															title: "Continue",
														}),
														" ",
													];
												},
											}),
											(0, d.createComponent)(m.Match, {
												get when() {
													return !Z();
												},
												get children() {
													const xe = N(),
														He = xe.firstChild,
														Ke = He.nextSibling;
													return (
														xe.style.setProperty("display", "flex"),
														xe.style.setProperty("flex-direction", "row"),
														xe.style.setProperty("align-items", "center"),
														xe.style.setProperty("padding", "4px 8px"),
														(0, i.insert)(xe, oe, He),
														(0, i.insert)(
															xe,
															() => (oe() === 1 ? "" : "s"),
															Ke,
														),
														Ke.style.setProperty("width", "8px"),
														Ke.style.setProperty("display", "block"),
														(0, i.insert)(
															Ke,
															(0, d.createComponent)(S.$C$b, { show: !0 }),
														),
														xe
													);
												},
											}),
										];
									},
								}),
							),
							$e
						);
					})();
				},
				X = (te) => {
					const Q = (0, n.$odc)(),
						[Z, se] = (0, m.createSignal)(!1),
						[re, le] = (0, m.createSignal)(!1);
					async function oe() {
						le(!0);
						try {
							await Q?.commandService?.executeCommand(b.$9W, !0),
								(te.badExtNames.includes("github.copilot") ||
									te.badExtNames.includes("GH Copilot")) &&
									Q.reactiveStorageService.setApplicationUserPersistentStorage(
										"oneTimeSettings",
										"shouldDisableGithubCopilot",
										!1,
									);
						} catch (ae) {
							console.error(ae);
						}
						te.onSubmit(), se(!0);
					}
					return (() => {
						const ae = O(),
							pe = ae.firstChild,
							$e = pe.firstChild,
							ye = $e.firstChild,
							ue = ye.nextSibling,
							fe = ue.firstChild,
							me = fe.firstChild,
							ve = me.nextSibling,
							ge = ve.firstChild,
							be = ge.nextSibling,
							Ce = be.nextSibling,
							Le = fe.nextSibling,
							Fe = Le.firstChild,
							Oe = Fe.nextSibling,
							xe = Oe.firstChild;
						return (
							$e.style.setProperty("max-height", "min(600px, 90vh)"),
							ve.style.setProperty("margin-top", "12px"),
							ve.style.setProperty("color", "#888"),
							(0, i.insert)(
								ve,
								() => te.badExtNames[0] ?? "an AI autocomplete extension",
								be,
							),
							(0, i.insert)(
								Le,
								(0, d.createComponent)(a.$rdc, {
									onClick: () => {
										te.onBack();
									},
									type: "secondary",
									title: "Back",
								}),
								Fe,
							),
							Fe.style.setProperty("flex-grow", "1"),
							Oe.style.setProperty("display", "flex"),
							Oe.style.setProperty("align-items", "center"),
							Oe.style.setProperty("gap", "6px"),
							(0, i.insert)(
								Oe,
								(0, d.createComponent)(m.Switch, {
									get children() {
										return [
											(0, d.createComponent)(m.Match, {
												get when() {
													return re() === !1;
												},
												get children() {
													return (0, d.createComponent)(a.$rdc, {
														onClick: () => {
															oe(),
																Q?.telemetryService &&
																	Q.telemetryService.publicLogCapture(
																		"welcome screen:imported copilot",
																	);
														},
														type: "secondary",
														get title() {
															return `Switch to ${te.badExtNames[0] ?? "extension"}`;
														},
													});
												},
											}),
											(0, d.createComponent)(m.Match, {
												get when() {
													return Z();
												},
												get children() {
													return [
														(0, d.createComponent)(a.$rdc, {
															onClick: () => {
																te.onSubmit();
															},
															type: "secondary",
															title: "Continue",
														}),
														" ",
													];
												},
											}),
											(0, d.createComponent)(m.Match, {
												get when() {
													return !Z();
												},
												get children() {
													const He = R(),
														Ke = He.firstChild,
														Je = Ke.nextSibling;
													return (
														He.style.setProperty("display", "flex"),
														He.style.setProperty("flex-direction", "row"),
														He.style.setProperty("align-items", "center"),
														He.style.setProperty("padding", "4px 8px"),
														Je.style.setProperty("width", "8px"),
														Je.style.setProperty("display", "block"),
														(0, i.insert)(
															Je,
															(0, d.createComponent)(S.$C$b, { show: !0 }),
														),
														He
													);
												},
											}),
										];
									},
								}),
								xe,
							),
							xe.style.setProperty("display", "flex"),
							xe.style.setProperty("justify-content", "flex-end"),
							xe.style.setProperty("align-items", "center"),
							(0, i.insert)(
								xe,
								(0, d.createComponent)(a.$rdc, {
									onClick: () => {
										te.onSubmit();
									},
									type: "primary",
									title: "Continue with Default",
								}),
							),
							ae
						);
					})();
				},
				Y = (te) => {
					const Q = (0, n.$odc)(),
						[Z, se] = (0, m.createSignal)(null),
						[re, le] = (0, m.createSignal)(null),
						[oe, ae] = (0, m.createSignal)(null);
					async function pe(ge) {
						const be = await Q?.extensionGalleryService?.getExtensions(
							[{ id: ge }],
							r.CancellationToken.None,
						);
						if (be && be.length > 0) {
							const Ce = be[0];
							return (
								await Q?.extensionManagementService?.installFromGallery(Ce), !0
							);
						}
						return !1;
					}
					async function $e() {
						const ge = await Q?.fileService?.resolve(
							u.URI.joinPath(
								te.nativeWorkbenchEnvironmentService.userHome,
								".vscode",
								"extensions",
							),
						);
						console.log("RES", ge);
						const be = [];
						for (const Ce of ge?.children || []) {
							if (!Ce.isDirectory) continue;
							const Le = Ce.name,
								Fe = Le.lastIndexOf("-"),
								Oe = Le.substring(0, Fe);
							be.push(Oe);
						}
						return be;
					}
					(0, m.createEffect)(() => {
						$e();
					});
					const ye = { value: void 0 },
						[ue, fe] = (0, m.createSignal)(0),
						me = () => {
							ye.value && fe(ye.value.clientHeight);
						};
					(0, m.createEffect)(() => {
						const ge = new ResizeObserver(me);
						ye.value && (ge.observe(ye.value), me()),
							(0, m.onCleanup)(() => {
								ye.value && ge.unobserve(ye.value);
							});
					});
					const ve = () =>
						Q.reactiveStorageService.setApplicationUserPersistentStorage(
							"indexRepository",
							(ge) => !ge,
						);
					return (() => {
						const ge = D(),
							be = ge.firstChild;
						return (
							(0, i.insert)(
								be,
								(0, d.createComponent)(l.$w0b, {
									get style() {
										return {
											height: `${ue() + 96}px`,
											"max-height": "min(800px, 90vh)",
											overflow: "hidden",
										};
									},
									scrollingDirection: "vertical",
									class: "welcome-screen-container",
									get children() {
										const Ce = U(),
											Le = Ce.firstChild,
											Fe = Le.firstChild,
											Oe = Fe.nextSibling,
											xe = Le.nextSibling,
											He = xe.firstChild,
											Ke = He.nextSibling,
											Je = xe.nextSibling,
											Te = Je.firstChild,
											Ee = Te.nextSibling,
											Ie = Ee.nextSibling,
											Be = Ie.firstChild,
											Se = Je.nextSibling,
											ke = Se.firstChild,
											Ue = ke.firstChild,
											qe = ke.nextSibling,
											Ae = qe.firstChild,
											Me = Ae.nextSibling,
											De = Me.nextSibling,
											Re = De.nextSibling,
											je = Re.nextSibling,
											Ve = qe.nextSibling,
											Ze = Ve.firstChild,
											et = Se.nextSibling;
										return (
											(0, C.use)((rt) => {
												ye.value = rt;
											}, Ce),
											(0, i.insert)(
												Le,
												(0, d.createComponent)(G, {
													plans: V,
													onClick: (rt) => {
														se(rt);
													},
												}),
												null,
											),
											(0, i.insert)(
												xe,
												(0, d.createComponent)(g.default, {
													extras: {
														placeholder:
															"E.g. Svenska, \u4E2D\u6587, \u0939\u093F\u0902\u0926\u0940",
														onInput: (rt) => {
															ae(rt.target.value);
														},
													},
												}),
												null,
											),
											Ie.style.setProperty("padding", "4px 8px"),
											(0, i.insert)(
												Ie,
												(0, d.createComponent)(s.$dob, {
													onToggle: ve,
													subtle: !0,
													get value() {
														return Q.reactiveStorageService
															.applicationUserPersistentStorage.indexRepository;
													},
												}),
												Be,
											),
											(0, i.insert)(
												Ie,
												(0, d.createComponent)(m.Show, {
													get when() {
														return Q.reactiveStorageService
															.applicationUserPersistentStorage.indexRepository;
													},
													get fallback() {
														return z();
													},
													get children() {
														return B();
													},
												}),
												null,
											),
											(0, i.insert)(
												ke,
												o.$l ? "to Command Line" : "Terminal Command",
												null,
											),
											(0, i.insert)(
												qe,
												o.$l ? " command line" : " terminal",
												Me,
											),
											(0, i.insert)(qe, () => y.default.applicationName, Re),
											Ze.style.setProperty("display", "inline-block"),
											Ze.style.setProperty("margin-right", "8px"),
											(0, i.insert)(
												Ze,
												(0, d.createComponent)(p.$18b, {
													doneTitle: 'Installed "code"',
													get buttonProps() {
														return {
															type: "secondary",
															codicon: h.$ak.plus,
															title: 'Install "code" command',
														};
													},
													loadingProps: {},
													onClick: async () => {
														Q.telemetryService.publicLogCapture(
															"submitted.welcome.code_command",
														),
															Q.reactiveStorageService.setApplicationUserPersistentStorage(
																"cmdLineHookState",
																{ ignored: !0 },
															),
															await Q.commandService.executeCommand(
																"workbench.action.replaceCommandLine",
															);
													},
												}),
											),
											(0, i.insert)(
												Ve,
												(0, d.createComponent)(p.$18b, {
													get buttonProps() {
														return {
															type: "secondary",
															codicon: h.$ak.plus,
															title: `Install "${y.default.applicationName}"`,
														};
													},
													loadingProps: {},
													get doneTitle() {
														return `Installed "${y.default.applicationName}"`;
													},
													onClick: async () => {
														Q.telemetryService.publicLogCapture(
															"submitted.welcome.cursor_command",
														),
															Q.reactiveStorageService.setApplicationUserPersistentStorage(
																"cmdLineHookState",
																{ ignored: !0 },
															),
															await Q.commandService.executeCommand(
																"workbench.action.installCommandLine",
															);
													},
												}),
												null,
											),
											(0, i.insert)(
												et,
												(0, d.createComponent)(a.$rdc, {
													onClick: () => {
														console.log("KEYMAP PLAN", Z()),
															console.log("EDITING PLAN", re());
														const rt = re()?.vsix;
														if (
															rt != null &&
															(pe(rt),
															Q.telemetryService.publicLogCapture(
																"submitted.welcome.keybindings",
															),
															re()?.label === "Vim" &&
																y.default.todesktopAppId &&
																o.$m)
														)
															try {
																te.nativeHostService.exec2(
																	`defaults write ${y.default.todesktopAppId} ApplePressAndHoldEnabled -bool false`,
																	{ maxBuffer: 1024 * 1024, timeout: 4e3 },
																);
															} catch (bt) {
																console.warn(
																	bt,
																	"couldn't disable press and hold",
																);
															}
														const ft = Z()?.vsix;
														ft != null &&
															(pe(ft),
															Q.telemetryService.publicLogCapture(
																"submitted.welcome.shortcuts",
															)),
															oe() !== null &&
															oe()?.trim().toLowerCase() !== "english" &&
															oe()?.trim().toLowerCase() !== "null"
																? Q?.aiService.updatePersonalContext(
																		"Always respond in " + oe(),
																	)
																: Q?.aiService.updatePersonalContext(""),
															te.onSubmit();
													},
													title: "Continue",
												}),
											),
											Ce
										);
									},
								}),
							),
							ge
						);
					})();
				},
				ie = (te) => {
					const [Q, Z] = (0, m.createSignal)(!1);
					return (() => {
						const se = x(),
							re = se.firstChild,
							le = re.nextSibling,
							oe = le.firstChild,
							ae = oe.firstChild,
							pe = ae.nextSibling;
						return (
							se.style.setProperty("position", "absolute"),
							se.style.setProperty("top", "0"),
							se.style.setProperty("left", "0"),
							se.style.setProperty("width", "100%"),
							se.style.setProperty("height", "100%"),
							se.style.setProperty("background-color", "rgba(0, 0, 0, 0.5)"),
							se.style.setProperty("z-index", "10000"),
							se.style.setProperty("display", "flex"),
							se.style.setProperty("align-items", "center"),
							se.style.setProperty("justify-content", "center"),
							(0, i.insert)(
								se,
								(0, d.createComponent)(m.Show, {
									get when() {
										return Q();
									},
									get children() {
										const $e = F(),
											ye = $e.firstChild,
											ue = ye.firstChild,
											fe = ue.nextSibling;
										return (
											$e.style.setProperty("position", "absolute"),
											$e.style.setProperty("top", "0"),
											$e.style.setProperty("left", "0"),
											$e.style.setProperty("width", "100%"),
											$e.style.setProperty("height", "100%"),
											$e.style.setProperty(
												"background-color",
												"rgba(0, 0, 0, 0.5)",
											),
											$e.style.setProperty("z-index", "10001"),
											$e.style.setProperty("display", "flex"),
											$e.style.setProperty("align-items", "center"),
											$e.style.setProperty("justify-content", "center"),
											ye.style.setProperty("width", "fit-content"),
											ye.style.setProperty("margin", "0 auto"),
											ye.style.setProperty("color", "#fff"),
											ye.style.setProperty(
												"background-color",
												"var(--vscode-editor-background)",
											),
											ye.style.setProperty("border-radius", "5px"),
											ye.style.setProperty(
												"border",
												"1px solid var(--vscode-commandCenter-inactiveBorder)",
											),
											ye.style.setProperty("z-index", "10000"),
											ye.style.setProperty("display", "flex"),
											ye.style.setProperty("gap", "4px"),
											ye.style.setProperty("flex-direction", "column"),
											ye.style.setProperty("padding", "8px 12px"),
											ye.style.setProperty("overflow", "hidden"),
											fe.style.setProperty("display", "flex"),
											fe.style.setProperty("align-items", "center"),
											fe.style.setProperty("transform", "scale(0.8)"),
											fe.style.setProperty("width", "100%"),
											fe.style.setProperty("justify-content", "flex-end"),
											fe.style.setProperty("transform-origin", "right"),
											fe.style.setProperty("gap", "4px"),
											(0, i.insert)(
												fe,
												(0, d.createComponent)(a.$rdc, {
													type: "secondary",
													onClick: () => {
														Z(!1);
													},
													title: "Back",
												}),
												null,
											),
											(0, i.insert)(
												fe,
												(0, d.createComponent)(a.$rdc, {
													onClick: () => {
														te.onSubmit();
													},
													title: "Close",
												}),
												null,
											),
											$e
										);
									},
								}),
								re,
							),
							re.addEventListener("click", () => {
								Z(!0);
							}),
							re.style.setProperty("position", "absolute"),
							re.style.setProperty("top", "0"),
							re.style.setProperty("left", "0"),
							re.style.setProperty("width", "100%"),
							re.style.setProperty("height", "100%"),
							le.style.setProperty("max-width", "540px"),
							le.style.setProperty("width", "100%"),
							le.style.setProperty("margin", "0 auto"),
							le.style.setProperty("color", "#fff"),
							le.style.setProperty("height", "50vh"),
							le.style.setProperty(
								"background-color",
								"var(--vscode-editor-background)",
							),
							le.style.setProperty("border-radius", "5px"),
							le.style.setProperty(
								"border",
								"1px solid var(--vscode-commandCenter-inactiveBorder)",
							),
							le.style.setProperty("z-index", "10000"),
							le.style.setProperty("display", "flex"),
							le.style.setProperty("flex-direction", "column"),
							le.style.setProperty("overflow", "hidden"),
							oe.style.setProperty("display", "flex"),
							oe.style.setProperty("align-items", "center"),
							oe.style.setProperty("justify-content", "space-between"),
							oe.style.setProperty("padding", "6px 10px"),
							ae.style.setProperty("color", "var(--vscode-editor-foreground)"),
							ae.style.setProperty("font-size", "11px"),
							ae.style.setProperty("font-weight", "500"),
							ae.style.setProperty("text-transform", "uppercase"),
							ae.style.setProperty("opacity", "0.6"),
							pe.addEventListener("click", () => {
								Z(!0);
							}),
							pe.style.setProperty("font-size", "13px"),
							pe.style.setProperty("color", "var(--vscode-editor-foreground)"),
							pe.style.setProperty("cursor", "pointer"),
							(0, i.insert)(
								le,
								(0, d.createComponent)(I.$MDc, {
									customTitle: "Welcome to Cursor!",
									customSubtitle: "Discover how Cursor can help you",
									style: {},
									renderBubbleLeftRightBorders: !1,
									actionClickHook: () => {
										Z(!0);
									},
									topKQuestions: 3,
									onCloseAttempt: () => {
										Z(!0);
									},
								}),
								null,
							),
							(0, E.effect)(() =>
								(0, w.className)(
									pe,
									$.ThemeIcon.asClassName(h.$ak.x) + " cursor-help-close",
								),
							),
							se
						);
					})();
				},
				ne = (te) => {
					const [Q, Z] = (0, m.createSignal)(!1),
						se = (0, n.$odc)();
					return (
						(0, m.createEffect)(() => {
							se?.aiSettingsService.addOpenAIKeyListener((re) => {
								te.onSubmit();
							}),
								se?.cursorAuthenticationService.addOpenAIKeyChangedListener(
									(re) => {
										te.onSubmit();
									},
								);
						}),
						(0, m.createEffect)(async () => {
							e.$hed ||
								((await se?.cursorAuthenticationService.isAuthenticated()) &&
									te.onSubmit());
						}),
						(0, m.createEffect)(() => {
							console.log("One of the dependencies changed in this effect"),
								se?.cursorAuthenticationService.addLoginChangedListener(
									(re) => {
										re && te.onSubmit();
									},
								);
						}),
						(() => {
							const re = H(),
								le = re.firstChild,
								oe = le.firstChild,
								ae = oe.firstChild,
								pe = ae.firstChild,
								$e = pe.nextSibling,
								ye = $e.firstChild;
							return (
								pe.style.setProperty("font-weight", "300"),
								(0, i.insert)(
									ae,
									(0, d.createComponent)(T.$3Zc, {
										skipForNowCallback: () => {
											te.onSubmit();
										},
									}),
									$e,
								),
								(0, i.insert)(
									$e,
									(0, d.createComponent)(a.$rdc, {
										onClick: () => {
											te.onBack();
										},
										type: "secondary",
										title: "Back",
									}),
									ye,
								),
								ye.style.setProperty("flex-grow", "1"),
								re
							);
						})()
					);
				},
				ee = (te) => {
					const Q = (0, n.$odc)(),
						[Z, se] = (0, m.createSignal)(0),
						[re, le] = (0, m.createSignal)(0);
					function oe(ge) {
						Q?.telemetryService &&
							Q.telemetryService.publicLogCapture(
								"Welcome Screen Continue " + Z(),
							),
							se(Z() + (ge ?? 1));
					}
					function ae() {
						Q?.telemetryService &&
							Q.telemetryService.publicLogCapture("Welcome Screen Back " + Z()),
							se(Z() - 1);
					}
					(0, m.createEffect)(() => {
						Q?.telemetryService &&
							Q.telemetryService.publicLogCapture("Welcome Screen");
					});
					function pe() {
						te.onSubmit();
					}
					const [$e, ye] = (0, m.createSignal)([
							{
								case: "welcome",
								comp: (0, d.createComponent)(Y, {
									get nativeWorkbenchEnvironmentService() {
										return te.nativeWorkbenchEnvironmentService;
									},
									get nativeHostService() {
										return te.nativeHostService;
									},
									onBack: ae,
									onSubmit: oe,
								}),
							},
							{
								case: "privacy",
								comp: (0, d.createComponent)(K, { onSubmit: oe, onBack: ae }),
							},
							{
								case: "login",
								comp: (0, d.createComponent)(ne, { onSubmit: pe, onBack: ae }),
							},
						]),
						[ue, fe] = (0, m.createSignal)([]),
						me = {
							case: "vscode",
							comp: (0, d.createComponent)(W, {
								get nativeWorkbenchEnvironmentService() {
									return te.nativeWorkbenchEnvironmentService;
								},
								onSubmit: (ge) => {
									if ($e()[Z()].case !== "vscode") return;
									function be() {
										return $e()[Z()].case === "vscode";
									}
									ge
										? (0, f.$ded)(
												Q.fileService,
												te.nativeWorkbenchEnvironmentService,
												Q.storageService,
											)
												.then((Ce) => {
													if (be()) {
														if (
															Ce.length > 0 &&
															$e()[Z() + 1].case !== "copilot"
														) {
															fe(Ce);
															const Le = $e();
															Le.splice(Z() + 1, 0, ve), ye(Le);
														}
														oe();
													}
												})
												.catch((Ce) => {
													console.error(Ce), be() && oe();
												})
										: oe();
								},
								onBack: ae,
							}),
						},
						ve = {
							case: "copilot",
							comp: (0, d.createComponent)(X, {
								get nativeWorkbenchEnvironmentService() {
									return te.nativeWorkbenchEnvironmentService;
								},
								get badExtNames() {
									return ue();
								},
								onSubmit: oe,
								onBack: ae,
							}),
						};
					return (
						(0, m.createEffect)(async () => {
							if (
								await (0, f.$bed)(
									Q.fileService,
									te.nativeWorkbenchEnvironmentService,
								)
							) {
								const be = $e();
								be.splice(1, 0, me), ye(be);
							}
						}),
						(0, m.createEffect)(async () => {}),
						(() => {
							const ge = q();
							return (0, i.insert)(ge, () => $e()[Z()].comp), ge;
						})()
					);
				};
			function _(te, Q, Z, se, re) {
				return (0, n.$ndc)(
					() =>
						(0, d.createComponent)(ee, {
							nativeWorkbenchEnvironmentService: Z,
							nativeHostService: se,
							onSubmit: () => {
								console.log("trying to dispose"), re();
							},
						}),
					te,
					Q,
				);
			}
		},
	),
		