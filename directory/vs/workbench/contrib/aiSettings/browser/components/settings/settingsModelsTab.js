import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/solid.js';
import '../../../../../../base/browser/solidComponents/switch/switch.js';
import '../../../../../../base/common/codicons.js';
import '../../../../../../base/common/themables.js';
import '../../../../controlCommon/browser/solid.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../base/common/constants.js';
import '../../../../../../base/common/platform.js';
import '../../../../ui/browser/inlineTextArea/inlineTextArea.js';
import '../../../../ui/browser/scrollableDiv.js';
import '../../../../ui/browser/simpleButton/simpleButton.js';
import '../../../../ui/browser/simpleCodeRender/simpleCodeRender.js';
import '../../../../ui/browser/hooks/useThemeHooks.js';
import '../../../../utils/browser/copyToClipboard.js';
import './settingsTab.js';
import './settingsSection.js';
import './settingsSectionDivider.js';
import '../../../../../services/cursorAuth/browser/authenticationService.js';
import '../../../../../../platform/reactivestorage/common/reactiveStorageTypes.js';
import './hooks.js';
import './settingsAPIWarningModal.js';
import '../../../../ui/browser/checkbox/checkbox.js';
define(
		de[4341],
		he([
			1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 650, 14, 26, 36, 2, 58, 12, 695, 135, 147,
			865, 331, 1008, 974, 973, 1231, 232, 134, 722, 4229, 1006,
		]),
		function (
			ce,
			e,
			t,
			i,
			w,
			E,
			C,
			d,
			m,
			r,
			u,
			a,
			h,
			c,
			n,
			g,
			p,
			o,
			f,
			b,
			s,
			l,
			y,
			$,
			v,
			S,
			I,
			T,
			P,
			k,
			L,
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$CDc = Y),
				(e.$DDc = ie),
				(e.$EDc = ne),
				(e.$FDc = Q),
				(o = xi(o));
			const D = (0, t.template)("<div>"),
				M = (0, t.template)('<div class="fade-in">'),
				N = (0, t.template)(
					'<div><div>Invalid API Key</div><div class="settings-menu-code-render"><div><div></div><span> error message</span></div></div>Please try again, or run the following command in your terminal to verify that you have not hit your spend limit:<div class="settings-menu-code-render"><div class="settings-menu-code-render-toolbar"><div></div></div></div><div>If this command completes successfully, but you still see this error after trying again, please email us at <span></span>. Note: This requires a Google AI Studio <span>API key</span>.',
				),
				A = (0, t.template)(
					"<div>With your Cursor <!>subscription, you do not need to use your own Google key!",
				),
				R = (0, t.template)("<span>your Google AI Studio key"),
				O = (0, t.template)(
					'<div><div>Invalid API Key</div><div class="settings-menu-code-render"><div><div></div><span> error message</span></div></div>Please try again, or run the following command in your terminal to verify that you have not hit your spend limit:<div class="settings-menu-code-render"><div class="settings-menu-code-render-toolbar"><div></div></div></div><div>If this command completes successfully, but you still see this error after trying again, please email us at <span></span>. Note: This requires an Anthropic <span>API key</span>.',
				),
				B = (0, t.template)(
					"<div>With your Cursor <!>subscription, you do not need to use your own Anthropic key!",
				),
				U = (0, t.template)("<span>your Anthropic key"),
				z = (0, t.template)("<div><div>"),
				F = (0, t.template)(
					'<div><div>Invalid OpenAI API Key</div><div class="settings-menu-code-render"><div><div></div><span> error message</span></div></div>Please try again, or run the following command in your terminal to verify that you have not hit your spend limit:<div class="settings-menu-code-render"><div class="settings-menu-code-render-toolbar"><div></div></div></div><div>If this command completes successfully, but you still see this error after trying again, please email us at <span></span>. Note: This requires an OpenAI <span>API key</span>, not ChatGPT plus.',
				),
				x = (0, t.template)("<div><div>Override OpenAI Base URL <span>"),
				H = (0, t.template)("<span>Saved \u2713"),
				q = (0, t.template)("<span>Saving..."),
				V = (0, t.template)(
					'<div class="cursor-settings-error-message">Invalid credentials. Please try again.',
				),
				G = (0, t.template)(
					'<div class="openai-settings-container"><div><div class="settings_sub_item"><div class="settings_sub_item_title">Base URL</div><div class="settings_sub_item_body"></div></div><div class="settings_sub_item"><div class="settings_sub_item_title">Deployment Name</div><div class="settings_sub_item_body"></div></div><div class="settings_sub_item"><div class="settings_sub_item_title">API Key</div><div class="settings_sub_item_body"></div></div></div><div>',
				),
				K = (0, t.template)("<div>No models available"),
				J = (0, t.template)("<div><div><span></span></div><div>"),
				W = (0, t.template)(
					"<div>With your Cursor <!>subscription, you do not need to use your own OpenAI key unless you're using custom models.",
				),
				X = (0, t.template)("<span>your OpenAI key");
			function Y(Z, se) {
				return (
					se() !== T.MembershipType.FREE &&
					Z.reactiveStorageService.applicationUserPersistentStorage
						.useClaudeKey &&
					!Z.reactiveStorageService.applicationUserPersistentStorage
						.settingsDismissedClaudeKeyWarning
				);
			}
			function ie(Z, se) {
				return (
					se() !== T.MembershipType.FREE &&
					Z.reactiveStorageService.applicationUserPersistentStorage
						.useGoogleKey &&
					!Z.reactiveStorageService.applicationUserPersistentStorage
						.settingsDismissedGoogleKeyWarning
				);
			}
			function ne(Z, se) {
				return (
					se() !== T.MembershipType.FREE &&
					Z.reactiveStorageService.applicationUserPersistentStorage
						.useOpenAIKey &&
					!Z.reactiveStorageService.applicationUserPersistentStorage
						.settingsDismissedOpenAIKeyWarning
				);
			}
			function ee(Z) {
				return (() => {
					const se = D();
					return (
						se.style.setProperty("display", "flex"),
						se.style.setProperty("gap", "2px"),
						se.style.setProperty("flex-direction", "column"),
						se.style.setProperty("font-size", "12px"),
						se.style.setProperty(
							"background",
							"var(--vscode-editor-background)",
						),
						se.style.setProperty("color", "var(--vscode-foreground)"),
						se.style.setProperty("padding", "6px 8px"),
						se.style.setProperty("border-radius", "4px"),
						se.style.setProperty(
							"border",
							"1px solid var(--vscode-commandCenter-inactiveBorder)",
						),
						se.style.setProperty(
							"border-left",
							"4px solid var(--vscode-editorWarning-foreground)",
						),
						se.style.setProperty("margin-bottom", "8px"),
						(0, m.insert)(se, () => Z.children),
						se
					);
				})();
			}
			const _ = () => {
					const Z = (0, c.$odc)(),
						se = Z.cursorAuthenticationService,
						{ aiSettingsService: re } = Z,
						[le, oe] = (0, r.createSignal)(!1),
						[ae, pe] = (0, r.createSignal)(!1),
						[$e, ye] = (0, r.createSignal)(""),
						[ue, fe] = (0, r.createSignal)(!1),
						[me, ve] = (0, r.createSignal)(null),
						[ge, be] = (0, r.createSignal)(""),
						[Ce, Le] = (0, r.createSignal)(null),
						[Fe, Oe] = (0, r.createSignal)(!1),
						[xe, He] = (0, r.createSignal)(!1);
					(0, r.createEffect)(() => {
						se.addGoogleKeyChangedListener(Le),
							(0, r.onCleanup)(() => {
								se.removeGoogleKeyChangedListener(Le);
							});
					}),
						(0, r.createEffect)((ke) => {
							const Ue =
								Z.reactiveStorageService.applicationUserPersistentStorage
									.useGoogleKey;
							if (ke !== Ue)
								if ((console.log("Google key changed", Ue, ke), Ue))
									for (const qe of I.$E6b) Z.aiSettingsService.enableModel(qe);
								else
									for (const qe of I.$E6b) Z.aiSettingsService.removeModel(qe);
							return Ue;
						}, Z
							.reactiveStorageService
							.applicationUserPersistentStorage.useGoogleKey),
						(0, r.createEffect)(() => {
							Le(se.googleKey() ?? null), be(se.googleKey() ?? "");
						}, []);
					const Ke = async () =>
							Z.everythingProviderService.provider?.runCommand(
								T.MiscActions.CheckGoogleAPIKey,
								{ apiKey: ge() },
							),
						Je = async () => {
							if (
								(He(!0),
								Z.reactiveStorageService.applicationUserPersistentStorage
									.useGoogleKey)
							) {
								Se();
								return;
							}
							Oe(!0);
						},
						Te = (0, r.createMemo)(() =>
							(0, l.$d$b)(Z.themeService) ? "dark" : "light",
						),
						[, Ee] = (0, P.$B$b)(),
						Ie = (0, r.createMemo)(() =>
							p.$l
								? Z.terminalService.activeInstance?.shellLaunchConfig.executable?.endsWith(
										"powershell.exe",
									)
									? `# Define headers
$headers = @{
    "Content-Type" = "application/json"
    "X-Goog-Api-Key" = "${ge()}"
}

# Define body
$body = @{
    "generationConfig" = @{}
    "safetySettings" = @()
    "contents" = @(
        @{
            "role" = "user"
            "parts" = @(
                @{
                    "text" = "Testing. Just say hi and nothing else."
                }
            )
        }
    )
} | ConvertTo-Json -Depth 5

# Make the request
Invoke-WebRequest -Uri "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.0-pro:generateContent" -Method Post -Headers $headers -Body $body -Verbose`
									: `curl https://generativelanguage.googleapis.com/v1beta/models/gemini-1.0-pro:generateContent -H "Content-Type: application/json" -H "X-Goog-Api-Key: ${ge()}" -d '{"generationConfig":{},"safetySettings":[],"contents":[{"role":"user","parts":[{"text":"Testing. Just say hi and nothing else."}]}]}'`
								: `curl https://generativelanguage.googleapis.com/v1beta/models/gemini-1.0-pro:generateContent -H "Content-Type: application/json" --header "X-Goog-Api-Key: ${ge()}" --header "anthropic-version: 2023-06-01" -d '{
  "generationConfig": {},
  "safetySettings": [],
  "contents": [
    {
      "role": "user",
      "parts": [
        {
          "text": "Testing. Just say hi and nothing else."
        }
      ]
    }
  ]
}'`,
						),
						Be = (ke) => {
							const Ue =
								ke === void 0
									? !Z.reactiveStorageService.applicationUserPersistentStorage
											.useGoogleKey
									: ke;
							Z.reactiveStorageService.setApplicationUserPersistentStorage(
								"useGoogleKey",
								Ue,
							),
								Ue &&
									Z.reactiveStorageService.setApplicationUserPersistentStorage(
										"settingsDismissedGoogleKeyWarning",
										!1,
									);
						},
						Se = async () => {
							if (xe()) {
								He(!1), Oe(!1), oe(!0);
								const ke = await Ke();
								ke?.valid
									? (se.storeGoogleKey(ge()), ve(!0))
									: (ke !== void 0 && ke.error && ye(ke.error), ve(!1)),
									se.storeGoogleKey(ge()),
									Z.reactiveStorageService.setApplicationUserPersistentStorage(
										"useGoogleKey",
										!0,
									),
									oe(!1);
								return;
							}
							Be(!0), Oe(!1);
						};
					return (0, d.createComponent)(v.$VCc, {
						title: "Google API Key",
						get description() {
							return [
								(0, d.createComponent)(r.Show, {
									get when() {
										return ie(Z, Ee);
									},
									get children() {
										return (0, d.createComponent)(ee, {
											get children() {
												return [
													(() => {
														const ke = A(),
															Ue = ke.firstChild,
															qe = Ue.nextSibling,
															Ae = qe.nextSibling;
														return (
															(0, m.insert)(
																ke,
																(() => {
																	const Me = (0, C.memo)(
																		() => Ee() === T.MembershipType.PRO,
																	);
																	return () =>
																		Me()
																			? "Pro "
																			: (() => {
																					const De = (0, C.memo)(
																						() =>
																							Ee() ===
																							T.MembershipType.ENTERPRISE,
																					);
																					return () =>
																						De()
																							? "Enterprise "
																							: Ee() ===
																									T.MembershipType.FREE_TRIAL
																								? "Pro Trial "
																								: "";
																				})();
																})(),
																qe,
															),
															ke
														);
													})(),
													(() => {
														const ke = D();
														return (
															ke.style.setProperty("display", "flex"),
															ke.style.setProperty("align-items", "center"),
															ke.style.setProperty("gap", "4px"),
															ke.style.setProperty(
																"justify-content",
																"flex-end",
															),
															ke.style.setProperty("transform", "scale(0.8)"),
															ke.style.setProperty("transform-origin", "right"),
															(0, m.insert)(
																ke,
																(0, d.createComponent)(b.$rdc, {
																	type: "secondary",
																	title: "Dismiss",
																	onClick: () =>
																		Z.reactiveStorageService.setApplicationUserPersistentStorage(
																			"settingsDismissedGoogleKeyWarning",
																			!0,
																		),
																}),
																null,
															),
															(0, m.insert)(
																ke,
																(0, d.createComponent)(b.$rdc, {
																	title: "Turn Off Google Key",
																	onClick: () => Be(!1),
																}),
																null,
															),
															ke
														);
													})(),
												];
											},
										});
									},
								}),
								[
									"You can put in",
									" ",
									(() => {
										const ke = R();
										return (
											ke.addEventListener("click", () => {
												Z.openerService.open(
													"https://aistudio.google.com/app/apikey",
												);
											}),
											ke.style.setProperty("display", "inline"),
											ke.style.setProperty(
												"color",
												"var(--vscode-textLink-foreground)",
											),
											ke.style.setProperty("cursor", "pointer"),
											ke
										);
									})(),
									" ",
									"to use Google models at-cost.",
								],
							];
						},
						style: { gap: "14px" },
						get titleExtra() {
							return (0, d.createComponent)(r.Show, {
								get when() {
									return Ce() != null;
								},
								get children() {
									const ke = D();
									return (
										ke.style.setProperty("margin-left", "auto"),
										ke.style.setProperty("display", "flex"),
										ke.style.setProperty("flex-direction", "column"),
										ke.style.setProperty("align-items", "flex-end"),
										ke.style.setProperty("gap", "6px"),
										ke.style.setProperty("margin-right", "12px"),
										(0, m.insert)(
											ke,
											(0, d.createComponent)(u.$dob, {
												style: {
													transform: "scale(0.8)",
													"transform-origin": "right",
												},
												get value() {
													return (
														Z.reactiveStorageService
															.applicationUserPersistentStorage.useGoogleKey ??
														!1
													);
												},
												onToggle: () => Be(),
											}),
										),
										ke
									);
								},
							});
						},
						get children() {
							return [
								(0, d.createComponent)(k.$BDc, {
									get isOpen() {
										return Fe();
									},
									onClose: () => Oe(!1),
									onConfirm: Se,
									apiName: "Google",
								}),
								(() => {
									const ke = D();
									return (
										ke.style.setProperty("display", "flex"),
										ke.style.setProperty("width", "100%"),
										ke.style.setProperty("gap", "6px"),
										ke.style.setProperty("align-items", "center"),
										ke.style.setProperty("margin", "0px auto"),
										(0, m.insert)(
											ke,
											(0, d.createComponent)(o.default, {
												size: "small",
												extraStyles: { "font-size": "12px", flex: 1 },
												get extras() {
													return {
														type: "password",
														placeholder: "Enter your Google AI Studio API Key",
														onInput: (Ue) => {
															be(Ue.currentTarget.value);
														},
														onKeyDown: (Ue) => {
															Ue.key === "Enter" && Je();
														},
														value: ge() || "",
														spellcheck: !1,
													};
												},
											}),
											null,
										),
										(0, m.insert)(
											ke,
											(0, d.createComponent)(b.$rdc, {
												onClick: () => {
													Je();
												},
												size: "small",
												get isLoading() {
													return le();
												},
												title: "Verify",
												get codicon() {
													return a.$ak.arrowRight;
												},
												get style() {
													return {
														display: "flex",
														"flex-direction": "row-reverse",
														opacity: le() ? 0.6 : 1,
													};
												},
											}),
											null,
										),
										ke
									);
								})(),
								(0, d.createComponent)(r.Show, {
									get when() {
										return me() === !1;
									},
									get children() {
										return (0, d.createComponent)(n.Portal, {
											get mount() {
												return Z.portalElement;
											},
											get children() {
												return [
													(() => {
														const ke = D();
														return (
															ke.addEventListener("click", (Ue) => {
																Ue.stopPropagation(), ve(null);
															}),
															ke.style.setProperty("position", "fixed"),
															ke.style.setProperty("top", "0"),
															ke.style.setProperty("left", "0"),
															ke.style.setProperty("bottom", "0"),
															ke.style.setProperty("right", "0"),
															ke.style.setProperty("z-index", "1000003"),
															ke.style.setProperty(
																"background-color",
																"rgba(0, 0, 0, 0.5)",
															),
															ke
														);
													})(),
													(() => {
														const ke = M();
														return (
															ke.style.setProperty("display", "flex"),
															ke.style.setProperty("flex-direction", "column"),
															ke.style.setProperty("gap", "4px"),
															ke.style.setProperty("position", "fixed"),
															ke.style.setProperty("width", "400px"),
															ke.style.setProperty("height", "300px"),
															ke.style.setProperty("z-index", "1000004"),
															ke.style.setProperty("top", "50%"),
															ke.style.setProperty("left", "50%"),
															ke.style.setProperty(
																"transform",
																"translate(-50%, -50%)",
															),
															ke.style.setProperty("border-radius", "5px"),
															ke.style.setProperty("font-size", "12px"),
															ke.style.setProperty(
																"background-color",
																"var(--vscode-sideBar-background)",
															),
															ke.style.setProperty(
																"border",
																"1px solid var(--vscode-commandCenter-inactiveBorder)",
															),
															ke.style.setProperty(
																"color",
																"var(--vscode-foreground)",
															),
															ke.style.setProperty(
																"box-shadow",
																"0 0 8px 2px var(--vscode-widget-shadow)",
															),
															ke.style.setProperty("overflow", "hidden"),
															(0, m.insert)(
																ke,
																(0, d.createComponent)(f.$w0b, {
																	style: { height: "100%" },
																	scrollingDirection: "vertical",
																	get children() {
																		const Ue = N(),
																			qe = Ue.firstChild,
																			Ae = qe.nextSibling,
																			Me = Ae.firstChild,
																			De = Me.firstChild,
																			Re = De.nextSibling,
																			je = Re.firstChild,
																			Ve = Ae.nextSibling,
																			Ze = Ve.nextSibling,
																			et = Ze.firstChild,
																			rt = et.firstChild,
																			ft = Ze.nextSibling,
																			bt = ft.firstChild,
																			nt = bt.nextSibling,
																			lt = nt.nextSibling,
																			ct = lt.nextSibling;
																		return (
																			Ue.style.setProperty("padding", "16px"),
																			Ue.style.setProperty("display", "flex"),
																			Ue.style.setProperty(
																				"flex-direction",
																				"column",
																			),
																			Ue.style.setProperty("gap", "12px"),
																			qe.style.setProperty("font-size", "14px"),
																			qe.style.setProperty(
																				"font-weight",
																				"500",
																			),
																			qe.style.setProperty(
																				"color",
																				"var(--vscode-editorError-foreground)",
																			),
																			Ae.style.setProperty(
																				"background",
																				"var(--vscode-editor-background)",
																			),
																			Ae.style.setProperty(
																				"border-radius",
																				"6px",
																			),
																			Ae.style.setProperty(
																				"border",
																				"1px solid var(--vscode-commandCenter-inactiveBorder)",
																			),
																			Ae.style.setProperty("display", "flex"),
																			Ae.style.setProperty(
																				"flex-direction",
																				"column",
																			),
																			Me.addEventListener("click", () => {
																				fe(!ue());
																			}),
																			Me.style.setProperty("display", "flex"),
																			Me.style.setProperty("gap", "4px"),
																			Me.style.setProperty(
																				"align-items",
																				"center",
																			),
																			Me.style.setProperty("font-size", "12px"),
																			Me.style.setProperty("cursor", "pointer"),
																			Me.style.setProperty(
																				"padding",
																				"0px 8px",
																			),
																			De.style.setProperty("font-size", "10px"),
																			(0, m.insert)(
																				Re,
																				() => (ue() ? "Hide" : "Show"),
																				je,
																			),
																			(0, m.insert)(
																				Ae,
																				(0, d.createComponent)(r.Show, {
																					get when() {
																						return ue();
																					},
																					get children() {
																						const gt = M();
																						return (
																							gt.style.setProperty(
																								"padding",
																								"4px 8px",
																							),
																							(0, m.insert)(
																								gt,
																								(0, d.createComponent)(s.$Ibc, {
																									get text() {
																										return $e().trim();
																									},
																									language: "plaintext",
																									nonReactiveEditorOptions: {
																										fontSize: 10,
																									},
																								}),
																							),
																							gt
																						);
																					},
																				}),
																				null,
																			),
																			Ze.style.setProperty(
																				"background",
																				"var(--vscode-editor-background)",
																			),
																			Ze.style.setProperty("padding", "8px"),
																			Ze.style.setProperty(
																				"border-radius",
																				"6px",
																			),
																			Ze.style.setProperty(
																				"border",
																				"1px solid var(--vscode-commandCenter-inactiveBorder)",
																			),
																			et.style.setProperty(
																				"background",
																				"var(--vscode-editor-background)",
																			),
																			rt.addEventListener("click", () => {
																				(0, y.$Y$b)(Ie()),
																					pe(!0),
																					setTimeout(() => {
																						pe(!1);
																					}, 3e3);
																			}),
																			rt.style.setProperty("display", "flex"),
																			rt.style.setProperty(
																				"align-items",
																				"center",
																			),
																			rt.style.setProperty(
																				"justify-content",
																				"center",
																			),
																			rt.style.setProperty(
																				"border-radius",
																				"4px",
																			),
																			rt.style.setProperty("cursor", "pointer"),
																			rt.style.setProperty("padding", "4px"),
																			(0, m.insert)(
																				Ze,
																				(0, d.createComponent)(s.$Ibc, {
																					get text() {
																						return Ie();
																					},
																					language: "shellscript",
																					nonReactiveEditorOptions: {
																						fontSize: 10,
																					},
																				}),
																				null,
																			),
																			nt.addEventListener("click", () => {
																				Z.openerService.open(`mailto:${g.$vV}`);
																			}),
																			nt.style.setProperty(
																				"color",
																				"var(--vscode-textLink-foreground)",
																			),
																			nt.style.setProperty("cursor", "pointer"),
																			nt.style.setProperty(
																				"text-decoration",
																				"none",
																			),
																			(0, m.insert)(nt, g.$vV),
																			ct.addEventListener("click", () => {
																				Z.openerService.open(
																					"https://aistudio.google.com/app/apikey",
																				);
																			}),
																			ct.style.setProperty("display", "inline"),
																			ct.style.setProperty(
																				"color",
																				"var(--vscode-textLink-foreground)",
																			),
																			ct.style.setProperty("cursor", "pointer"),
																			(0, E.effect)(
																				(gt) => {
																					const ht = ue()
																							? "1px solid var(--vscode-commandCenter-inactiveBorder)"
																							: void 0,
																						Rt =
																							"settings-menu-hoverable " + Te(),
																						Nt = ue()
																							? "rotate(180deg)"
																							: void 0,
																						jt = h.ThemeIcon.asClassName(
																							a.$ak.chevronDown,
																						),
																						ti =
																							(ae()
																								? h.ThemeIcon.asClassName(
																										a.$ak.check,
																									)
																								: h.ThemeIcon.asClassName(
																										a.$ak.copy,
																									)) +
																							" settings-menu-hoverable " +
																							Te();
																					return (
																						ht !== gt._v$ &&
																							((gt._v$ = ht) != null
																								? Me.style.setProperty(
																										"border-bottom",
																										ht,
																									)
																								: Me.style.removeProperty(
																										"border-bottom",
																									)),
																						Rt !== gt._v$2 &&
																							(0, w.className)(
																								Me,
																								(gt._v$2 = Rt),
																							),
																						Nt !== gt._v$3 &&
																							((gt._v$3 = Nt) != null
																								? De.style.setProperty(
																										"transform",
																										Nt,
																									)
																								: De.style.removeProperty(
																										"transform",
																									)),
																						jt !== gt._v$4 &&
																							(0, w.className)(
																								De,
																								(gt._v$4 = jt),
																							),
																						ti !== gt._v$5 &&
																							(0, w.className)(
																								rt,
																								(gt._v$5 = ti),
																							),
																						gt
																					);
																				},
																				{
																					_v$: void 0,
																					_v$2: void 0,
																					_v$3: void 0,
																					_v$4: void 0,
																					_v$5: void 0,
																				},
																			),
																			Ue
																		);
																	},
																}),
															),
															ke
														);
													})(),
												];
											},
										});
									},
								}),
							];
						},
					});
				},
				te = () => {
					const Z = (0, c.$odc)(),
						se = Z.cursorAuthenticationService,
						[re, le] = (0, r.createSignal)(!1),
						[oe, ae] = (0, r.createSignal)(!1),
						[pe, $e] = (0, r.createSignal)(""),
						[ye, ue] = (0, r.createSignal)(!1),
						[fe, me] = (0, r.createSignal)(null),
						[ve, ge] = (0, r.createSignal)(""),
						[be, Ce] = (0, r.createSignal)(null),
						[Le, Fe] = (0, r.createSignal)(!1),
						[Oe, xe] = (0, r.createSignal)(!1);
					(0, r.createEffect)(() => {
						se.addClaudeKeyChangedListener(Ce),
							(0, r.onCleanup)(() => {
								se.removeClaudeKeyChangedListener(Ce);
							});
					}),
						(0, r.createEffect)((Se) => {
							const ke =
								Z.reactiveStorageService.applicationUserPersistentStorage
									.useClaudeKey;
							if (Se !== ke)
								if ((console.log("Claude key changed", ke, Se), ke))
									for (const Ue of I.$D6b) Z.aiSettingsService.enableModel(Ue);
								else
									for (const Ue of I.$D6b) Z.aiSettingsService.removeModel(Ue);
							return ke;
						}, Z
							.reactiveStorageService
							.applicationUserPersistentStorage.useClaudeKey),
						(0, r.createEffect)(() => {
							Ce(se.claudeKey() ?? null), ge(se.claudeKey() ?? "");
						}, []);
					const He = async () =>
							Z.everythingProviderService.provider?.runCommand(
								T.MiscActions.CheckClaudeAPIKey,
								{ apiKey: ve() },
							),
						Ke = async () => {
							if (
								(xe(!0),
								Z.reactiveStorageService.applicationUserPersistentStorage
									.useClaudeKey)
							) {
								Be();
								return;
							}
							Fe(!0);
						},
						Je = (0, r.createMemo)(() =>
							(0, l.$d$b)(Z.themeService) ? "dark" : "light",
						),
						[, Te] = (0, P.$B$b)(),
						Ee = (0, r.createMemo)(() =>
							p.$l
								? Z.terminalService.activeInstance?.shellLaunchConfig.executable?.endsWith(
										"powershell.exe",
									)
									? `$headers = @{
		"Content-Type" = "application/json"
		"Authorization" = "Bearer ${ve()}"
	}

	$body = @{
		"messages" = @(
				@{
						"role" = "system"
						"content" = "You are a test assistant."
				},
				@{
						"role" = "user"
						"content" = "Testing. Just say hi and nothing else."
				}
		)
	} | ConvertTo-Json

	Invoke-WebRequest -Uri "https://api.anthropic.com/v1/messages" -Method Post -Headers $headers -Body $body`
									: `curl https://api.anthropic.com/v1/messages -H "Content-Type: application/json" -H "Authorization: Bearer ${ve()}" -d "{ \\"messages\\": [ { \\"role\\": \\"system\\", \\"content\\": \\"You are a test assistant.\\" }, { \\"role\\": \\"user\\", \\"content\\": \\"Testing. Just say hi and nothing else.\\" } ] }"`
								: `curl https://api.anthropic.com/v1/messages -H "Content-Type: application/json" --header "x-api-key: ${ve()}" --header "anthropic-version: 2023-06-01" -d '{
		"model": "claude-3-opus-20240229",
    "max_tokens": 1024,
		"messages": [
			{
				"role": "user",
				"content": "Testing. Just say hi and nothing else."
			}
		]
	}'`,
						),
						Ie = (Se) => {
							const ke =
								Se === void 0
									? !Z.reactiveStorageService.applicationUserPersistentStorage
											.useClaudeKey
									: Se;
							Z.reactiveStorageService.setApplicationUserPersistentStorage(
								"useClaudeKey",
								ke,
							),
								ke &&
									Z.reactiveStorageService.setApplicationUserPersistentStorage(
										"settingsDismissedClaudeKeyWarning",
										!1,
									);
						},
						Be = async () => {
							if (Oe()) {
								xe(!1), Fe(!1), le(!0);
								const Se = await He();
								Se?.valid
									? (se.storeClaudeKey(ve()), me(!0))
									: (Se !== void 0 && Se.error && $e(Se.error), me(!1)),
									se.storeClaudeKey(ve()),
									Z.reactiveStorageService.setApplicationUserPersistentStorage(
										"useClaudeKey",
										!0,
									),
									le(!1);
								return;
							}
							Ie(!0), Fe(!1);
						};
					return (0, d.createComponent)(v.$VCc, {
						title: "Anthropic API Key",
						get description() {
							return [
								(0, d.createComponent)(r.Show, {
									get when() {
										return Y(Z, Te);
									},
									get children() {
										return (0, d.createComponent)(ee, {
											get children() {
												return [
													(() => {
														const Se = B(),
															ke = Se.firstChild,
															Ue = ke.nextSibling,
															qe = Ue.nextSibling;
														return (
															(0, m.insert)(
																Se,
																(() => {
																	const Ae = (0, C.memo)(
																		() => Te() === T.MembershipType.PRO,
																	);
																	return () =>
																		Ae()
																			? "Pro "
																			: (() => {
																					const Me = (0, C.memo)(
																						() =>
																							Te() ===
																							T.MembershipType.ENTERPRISE,
																					);
																					return () =>
																						Me()
																							? "Enterprise "
																							: Te() ===
																									T.MembershipType.FREE_TRIAL
																								? "Pro Trial "
																								: "";
																				})();
																})(),
																Ue,
															),
															Se
														);
													})(),
													(() => {
														const Se = D();
														return (
															Se.style.setProperty("display", "flex"),
															Se.style.setProperty("align-items", "center"),
															Se.style.setProperty("gap", "4px"),
															Se.style.setProperty(
																"justify-content",
																"flex-end",
															),
															Se.style.setProperty("transform", "scale(0.8)"),
															Se.style.setProperty("transform-origin", "right"),
															(0, m.insert)(
																Se,
																(0, d.createComponent)(b.$rdc, {
																	type: "secondary",
																	title: "Dismiss",
																	onClick: () =>
																		Z.reactiveStorageService.setApplicationUserPersistentStorage(
																			"settingsDismissedClaudeKeyWarning",
																			!0,
																		),
																}),
																null,
															),
															(0, m.insert)(
																Se,
																(0, d.createComponent)(b.$rdc, {
																	title: "Turn Off Anthropic Key",
																	onClick: () => Ie(!1),
																}),
																null,
															),
															Se
														);
													})(),
												];
											},
										});
									},
								}),
								[
									"You can put in",
									" ",
									(() => {
										const Se = U();
										return (
											Se.addEventListener("click", () => {
												Z.openerService.open(
													"https://console.anthropic.com/settings/keys",
												);
											}),
											Se.style.setProperty("display", "inline"),
											Se.style.setProperty(
												"color",
												"var(--vscode-textLink-foreground)",
											),
											Se.style.setProperty("cursor", "pointer"),
											Se
										);
									})(),
									" ",
									'to use Claude at cost. When enabled, this key will be used for all models beginning with "claude-".',
								],
							];
						},
						style: { gap: "14px" },
						get titleExtra() {
							return (0, d.createComponent)(r.Show, {
								get when() {
									return be() != null;
								},
								get children() {
									const Se = D();
									return (
										Se.style.setProperty("margin-left", "auto"),
										Se.style.setProperty("display", "flex"),
										Se.style.setProperty("flex-direction", "column"),
										Se.style.setProperty("align-items", "flex-end"),
										Se.style.setProperty("gap", "6px"),
										Se.style.setProperty("margin-right", "12px"),
										(0, m.insert)(
											Se,
											(0, d.createComponent)(u.$dob, {
												style: {
													transform: "scale(0.8)",
													"transform-origin": "right",
												},
												get value() {
													return (
														Z.reactiveStorageService
															.applicationUserPersistentStorage.useClaudeKey ??
														!1
													);
												},
												onToggle: () => {
													!Z.reactiveStorageService
														.applicationUserPersistentStorage.useClaudeKey
														? Fe(!0)
														: Ie(!1);
												},
											}),
										),
										Se
									);
								},
							});
						},
						get children() {
							return [
								(0, d.createComponent)(k.$BDc, {
									get isOpen() {
										return Le();
									},
									onClose: () => Fe(!1),
									onConfirm: Be,
									apiName: "Anthropic",
								}),
								(() => {
									const Se = D();
									return (
										Se.style.setProperty("display", "flex"),
										Se.style.setProperty("width", "100%"),
										Se.style.setProperty("gap", "6px"),
										Se.style.setProperty("align-items", "center"),
										Se.style.setProperty("margin", "0px auto"),
										(0, m.insert)(
											Se,
											(0, d.createComponent)(o.default, {
												extraStyles: { "font-size": "12px", flex: 1 },
												size: "small",
												get extras() {
													return {
														type: "password",
														placeholder: "Enter your Anthropic API Key",
														onInput: (ke) => {
															ge(ke.currentTarget.value);
														},
														onKeyDown: (ke) => {
															ke.key === "Enter" && Ke();
														},
														value: ve() || "",
														spellcheck: !1,
													};
												},
											}),
											null,
										),
										(0, m.insert)(
											Se,
											(0, d.createComponent)(b.$rdc, {
												onClick: () => {
													Ke();
												},
												size: "small",
												get isLoading() {
													return re();
												},
												title: "Verify",
												get codicon() {
													return a.$ak.arrowRight;
												},
												get style() {
													return {
														display: "flex",
														"flex-direction": "row-reverse",
														opacity: re() ? 0.6 : 1,
													};
												},
											}),
											null,
										),
										Se
									);
								})(),
								(0, d.createComponent)(r.Show, {
									get when() {
										return fe() === !1;
									},
									get children() {
										return (0, d.createComponent)(n.Portal, {
											get mount() {
												return Z.portalElement;
											},
											get children() {
												return [
													(() => {
														const Se = D();
														return (
															Se.addEventListener("click", (ke) => {
																ke.stopPropagation(), me(null);
															}),
															Se.style.setProperty("position", "fixed"),
															Se.style.setProperty("top", "0"),
															Se.style.setProperty("left", "0"),
															Se.style.setProperty("bottom", "0"),
															Se.style.setProperty("right", "0"),
															Se.style.setProperty("z-index", "1000003"),
															Se.style.setProperty(
																"background-color",
																"rgba(0, 0, 0, 0.5)",
															),
															Se
														);
													})(),
													(() => {
														const Se = M();
														return (
															Se.style.setProperty("display", "flex"),
															Se.style.setProperty("flex-direction", "column"),
															Se.style.setProperty("gap", "4px"),
															Se.style.setProperty("position", "fixed"),
															Se.style.setProperty("width", "400px"),
															Se.style.setProperty("height", "300px"),
															Se.style.setProperty("z-index", "1000004"),
															Se.style.setProperty("top", "50%"),
															Se.style.setProperty("left", "50%"),
															Se.style.setProperty(
																"transform",
																"translate(-50%, -50%)",
															),
															Se.style.setProperty("border-radius", "5px"),
															Se.style.setProperty("font-size", "12px"),
															Se.style.setProperty(
																"background-color",
																"var(--vscode-sideBar-background)",
															),
															Se.style.setProperty(
																"border",
																"1px solid var(--vscode-commandCenter-inactiveBorder)",
															),
															Se.style.setProperty(
																"color",
																"var(--vscode-foreground)",
															),
															Se.style.setProperty(
																"box-shadow",
																"0 0 8px 2px var(--vscode-widget-shadow)",
															),
															Se.style.setProperty("overflow", "hidden"),
															(0, m.insert)(
																Se,
																(0, d.createComponent)(f.$w0b, {
																	style: { height: "100%" },
																	scrollingDirection: "vertical",
																	get children() {
																		const ke = O(),
																			Ue = ke.firstChild,
																			qe = Ue.nextSibling,
																			Ae = qe.firstChild,
																			Me = Ae.firstChild,
																			De = Me.nextSibling,
																			Re = De.firstChild,
																			je = qe.nextSibling,
																			Ve = je.nextSibling,
																			Ze = Ve.firstChild,
																			et = Ze.firstChild,
																			rt = Ve.nextSibling,
																			ft = rt.firstChild,
																			bt = ft.nextSibling,
																			nt = bt.nextSibling,
																			lt = nt.nextSibling;
																		return (
																			ke.style.setProperty("padding", "16px"),
																			ke.style.setProperty("display", "flex"),
																			ke.style.setProperty(
																				"flex-direction",
																				"column",
																			),
																			ke.style.setProperty("gap", "12px"),
																			Ue.style.setProperty("font-size", "14px"),
																			Ue.style.setProperty(
																				"font-weight",
																				"500",
																			),
																			Ue.style.setProperty(
																				"color",
																				"var(--vscode-editorError-foreground)",
																			),
																			qe.style.setProperty(
																				"background",
																				"var(--vscode-editor-background)",
																			),
																			qe.style.setProperty(
																				"border-radius",
																				"6px",
																			),
																			qe.style.setProperty(
																				"border",
																				"1px solid var(--vscode-commandCenter-inactiveBorder)",
																			),
																			qe.style.setProperty("display", "flex"),
																			qe.style.setProperty(
																				"flex-direction",
																				"column",
																			),
																			Ae.addEventListener("click", () => {
																				ue(!ye());
																			}),
																			Ae.style.setProperty("display", "flex"),
																			Ae.style.setProperty("gap", "4px"),
																			Ae.style.setProperty(
																				"align-items",
																				"center",
																			),
																			Ae.style.setProperty("font-size", "12px"),
																			Ae.style.setProperty("cursor", "pointer"),
																			Ae.style.setProperty(
																				"padding",
																				"0px 8px",
																			),
																			Me.style.setProperty("font-size", "10px"),
																			(0, m.insert)(
																				De,
																				() => (ye() ? "Hide" : "Show"),
																				Re,
																			),
																			(0, m.insert)(
																				qe,
																				(0, d.createComponent)(r.Show, {
																					get when() {
																						return ye();
																					},
																					get children() {
																						const ct = M();
																						return (
																							ct.style.setProperty(
																								"padding",
																								"4px 8px",
																							),
																							(0, m.insert)(
																								ct,
																								(0, d.createComponent)(s.$Ibc, {
																									get text() {
																										return pe().trim();
																									},
																									language: "plaintext",
																									nonReactiveEditorOptions: {
																										fontSize: 10,
																									},
																								}),
																							),
																							ct
																						);
																					},
																				}),
																				null,
																			),
																			Ve.style.setProperty(
																				"background",
																				"var(--vscode-editor-background)",
																			),
																			Ve.style.setProperty("padding", "8px"),
																			Ve.style.setProperty(
																				"border-radius",
																				"6px",
																			),
																			Ve.style.setProperty(
																				"border",
																				"1px solid var(--vscode-commandCenter-inactiveBorder)",
																			),
																			Ze.style.setProperty(
																				"background",
																				"var(--vscode-editor-background)",
																			),
																			et.addEventListener("click", () => {
																				(0, y.$Y$b)(Ee()),
																					ae(!0),
																					setTimeout(() => {
																						ae(!1);
																					}, 3e3);
																			}),
																			et.style.setProperty("display", "flex"),
																			et.style.setProperty(
																				"align-items",
																				"center",
																			),
																			et.style.setProperty(
																				"justify-content",
																				"center",
																			),
																			et.style.setProperty(
																				"border-radius",
																				"4px",
																			),
																			et.style.setProperty("cursor", "pointer"),
																			et.style.setProperty("padding", "4px"),
																			(0, m.insert)(
																				Ve,
																				(0, d.createComponent)(s.$Ibc, {
																					get text() {
																						return Ee();
																					},
																					language: "shellscript",
																					nonReactiveEditorOptions: {
																						fontSize: 10,
																					},
																				}),
																				null,
																			),
																			bt.addEventListener("click", () => {
																				Z.openerService.open(`mailto:${g.$vV}`);
																			}),
																			bt.style.setProperty(
																				"color",
																				"var(--vscode-textLink-foreground)",
																			),
																			bt.style.setProperty("cursor", "pointer"),
																			bt.style.setProperty(
																				"text-decoration",
																				"none",
																			),
																			(0, m.insert)(bt, g.$vV),
																			lt.addEventListener("click", () => {
																				Z.openerService.open(
																					"https://console.anthropic.com/settings/keys",
																				);
																			}),
																			lt.style.setProperty("display", "inline"),
																			lt.style.setProperty(
																				"color",
																				"var(--vscode-textLink-foreground)",
																			),
																			lt.style.setProperty("cursor", "pointer"),
																			(0, E.effect)(
																				(ct) => {
																					const gt = ye()
																							? "1px solid var(--vscode-commandCenter-inactiveBorder)"
																							: void 0,
																						ht =
																							"settings-menu-hoverable " + Je(),
																						Rt = ye()
																							? "rotate(180deg)"
																							: void 0,
																						Nt = h.ThemeIcon.asClassName(
																							a.$ak.chevronDown,
																						),
																						jt =
																							(oe()
																								? h.ThemeIcon.asClassName(
																										a.$ak.check,
																									)
																								: h.ThemeIcon.asClassName(
																										a.$ak.copy,
																									)) +
																							" settings-menu-hoverable " +
																							Je();
																					return (
																						gt !== ct._v$6 &&
																							((ct._v$6 = gt) != null
																								? Ae.style.setProperty(
																										"border-bottom",
																										gt,
																									)
																								: Ae.style.removeProperty(
																										"border-bottom",
																									)),
																						ht !== ct._v$7 &&
																							(0, w.className)(
																								Ae,
																								(ct._v$7 = ht),
																							),
																						Rt !== ct._v$8 &&
																							((ct._v$8 = Rt) != null
																								? Me.style.setProperty(
																										"transform",
																										Rt,
																									)
																								: Me.style.removeProperty(
																										"transform",
																									)),
																						Nt !== ct._v$9 &&
																							(0, w.className)(
																								Me,
																								(ct._v$9 = Nt),
																							),
																						jt !== ct._v$10 &&
																							(0, w.className)(
																								et,
																								(ct._v$10 = jt),
																							),
																						ct
																					);
																				},
																				{
																					_v$6: void 0,
																					_v$7: void 0,
																					_v$8: void 0,
																					_v$9: void 0,
																					_v$10: void 0,
																				},
																			),
																			ke
																		);
																	},
																}),
															),
															Se
														);
													})(),
												];
											},
										});
									},
								}),
							];
						},
					});
				};
			function Q(Z) {
				const se = (0, c.$odc)(),
					re = se.aiSettingsService,
					le = se.cursorAuthenticationService,
					[oe, ae] = (0, r.createSignal)(null),
					[pe, $e] = (0, r.createSignal)(""),
					[ye, ue] = (0, r.createSignal)(""),
					[fe, me] = (0, r.createSignal)(""),
					[ve, ge] = (0, r.createSignal)(""),
					[be, Ce] = (0, r.createSignal)(!1),
					Le = (0, r.createMemo)(() =>
						se.aiSettingsService.getAvailableModelsReactive(),
					),
					Fe = (0, r.createMemo)(() =>
						se.aiSettingsService.getAllPotentialModelsReactive(),
					),
					[Oe, xe] = (0, r.createSignal)(!1);
				(0, r.createEffect)(() => {
					le.addOpenAIKeyChangedListener($e),
						(0, r.onCleanup)(() => {
							le.removeOpenAIKeyChangedListener($e);
						});
				}),
					(0, r.createEffect)(() => {
						re.getApiKey().then((kt) => {
							kt && $e(kt);
						});
					}),
					(0, r.createEffect)(() => {
						ue(pe());
					}),
					(0, r.createEffect)(() => {
						ye() !== null && (Z.setIsWarningOpen(!1), ae(null));
					});
				const [He, Ke] = (0, r.createSignal)(!1),
					[Je, Te] = (0, r.createSignal)(!1),
					[Ee, Ie] = (0, r.createSignal)(!1),
					[Be, Se] = (0, r.createSignal)(!1),
					[ke, Ue] = (0, r.createSignal)(!1),
					[qe, Ae] = (0, r.createSignal)(!1),
					Me = () => {
						if (
							(Ae(!0),
							se.reactiveStorageService.applicationUserPersistentStorage
								.useOpenAIKey)
						) {
							ti();
							return;
						}
						Ue(!0);
					},
					De = (0, r.createMemo)(() =>
						p.$l
							? se.terminalService.activeInstance?.shellLaunchConfig.executable?.endsWith(
									"powershell.exe",
								)
								? `$headers = @{
		"Content-Type" = "application/json"
		"Authorization" = "Bearer ${ye()}"
}

$body = @{
		"messages" = @(
				@{
						"role" = "system"
						"content" = "You are a test assistant."
				},
				@{
						"role" = "user"
						"content" = "Testing. Just say hi and nothing else."
				}
		)
		"model" = "${se.aiSettingsService.getModelForChallenge()}"
} | ConvertTo-Json

Invoke-WebRequest -Uri "${se.reactiveStorageService.applicationUserPersistentStorage.openAIBaseUrl ?? "https://api.openai.com/v1"}/chat/completions" -Method Post -Headers $headers -Body $body`
								: `curl ${se.reactiveStorageService.applicationUserPersistentStorage.openAIBaseUrl ?? "https://api.openai.com/v1"}/chat/completions -H "Content-Type: application/json" -H "Authorization: Bearer ${ye()}" -d "{ \\"messages\\": [ { \\"role\\": \\"system\\", \\"content\\": \\"You are a test assistant.\\" }, { \\"role\\": \\"user\\", \\"content\\": \\"Testing. Just say hi and nothing else.\\" } ], \\"model\\": \\"${se.aiSettingsService.getModelForChallenge()}\\" }"`
							: `curl ${se.reactiveStorageService.applicationUserPersistentStorage.openAIBaseUrl ?? "https://api.openai.com/v1"}/chat/completions -H "Content-Type: application/json" -H "Authorization: Bearer ${ye()}" -d '{
  "messages": [
    {
      "role": "system",
      "content": "You are a test assistant."
    },
    {
      "role": "user",
      "content": "Testing. Just say hi and nothing else."
    }
  ],
  "model": "${se.aiSettingsService.getModelForChallenge()}"
}'`,
					);
				(0, r.createEffect)(() => {
					const kt = Z.setIsWarningOpen,
						hi = (Kt) => {
							Kt.key === "Escape" &&
								oe() !== null &&
								(Kt.stopImmediatePropagation(), ae(null), kt(!1));
						};
					se.window.document.addEventListener("keydown", hi),
						(0, r.onCleanup)(() => {
							se.window.document.removeEventListener("keydown", hi);
						});
				});
				const Re = (0, r.createMemo)(() =>
					(0, l.$d$b)(se.themeService) ? "dark" : "light",
				);
				let je;
				const [Ve, Ze] = (0, r.createSignal)(
						se.reactiveStorageService.applicationUserPersistentStorage
							.azureState.useAzure,
					),
					[et, rt] = (0, r.createSignal)(null),
					[, ft] = (0, P.$B$b)(),
					[bt, nt] = (0, r.createSignal)(!0),
					[lt, ct] = (0, r.createSignal)(!0);
				let gt = null;
				(0, r.createEffect)(
					(0, r.on)(bt, (kt) => {
						kt == !0
							? ((gt = setTimeout(() => {
									ct(!0);
								}, 300)),
								(0, r.onCleanup)(() => clearTimeout(gt)))
							: ct(!1);
					}),
				);
				const ht = async () => {
						if (
							se.reactiveStorageService.applicationUserPersistentStorage
								.azureState.baseUrl === void 0
						)
							return;
						let kt =
							se.reactiveStorageService.applicationUserPersistentStorage.azureState.baseUrl.trim();
						kt.endsWith("/") && (kt = kt.slice(0, -1)),
							kt.startsWith("https://") || (kt = "https://" + kt);
						const hi =
								se.reactiveStorageService.applicationUserPersistentStorage
									.azureState.deployment,
							Kt = `${kt}/openai/deployments/${hi}/chat/completions?api-version=2023-03-15-preview`;
						try {
							return (
								(
									await fetch(Kt, {
										method: "POST",
										headers: {
											"Content-Type": "application/json",
											"api-key": `${se.reactiveStorageService.applicationUserPersistentStorage.azureState.apiKey}`,
										},
										body: JSON.stringify({
											messages: [
												{
													role: "system",
													content: "You are a helpful assistant.",
												},
												{
													role: "user",
													content: "Test prompt using gpt-3.5-turbo",
												},
											],
											temperature: 1,
											top_p: 1,
											n: 1,
											max_tokens: 10,
											stream: !1,
										}),
									})
								).status === 200
							);
						} catch {
							return !1;
						}
					},
					Rt = () => {
						rt(null),
							nt(!1),
							ct(!1),
							nt(!0),
							se.reactiveStorageService.setApplicationUserPersistentStorage(
								"azureState",
								{ useAzure: !1 },
							),
							Ze(!1);
					},
					Nt = async () => {
						(await ht())
							? (se.reactiveStorageService.setApplicationUserPersistentStorage(
									"azureState",
									{ useAzure: !0 },
								),
								Ze(!0),
								rt(!0))
							: rt(!1);
					},
					jt = (kt) => {
						(
							kt === void 0
								? !se.reactiveStorageService.applicationUserPersistentStorage
										.useOpenAIKey
								: kt
						)
							? Ue(!0)
							: se.aiSettingsService.setUseOpenAIKey(!1);
					},
					ti = () => {
						if (qe()) {
							Ae(!1), Ue(!1), Ke(!0);
							const kt = Z.setIsWarningOpen;
							re.setOpenAIKey(ye()).then((hi) => {
								Ke(!1),
									hi !== !0
										? (ae(!1),
											kt(!0),
											me(`(status code ${hi.code})
${hi.error}`))
										: (ae(!0), kt(!1));
							});
							return;
						}
						se.aiSettingsService.setUseOpenAIKey(!0),
							se.reactiveStorageService.setApplicationUserPersistentStorage(
								"settingsDismissedOpenAIKeyWarning",
								!1,
							),
							Ue(!1);
					};
				return (0, d.createComponent)($.$eDc, {
					get children() {
						return [
							(0, d.createComponent)(k.$BDc, {
								get isOpen() {
									return ke();
								},
								onClose: () => Ue(!1),
								onConfirm: ti,
								apiName: "OpenAI",
							}),
							(0, d.createComponent)(v.$VCc, {
								title: "Model Names",
								description:
									"Add new models to Cursor. Often used to configure the latest OpenAI models or OpenRouter models.",
								style: { gap: "14px" },
								get children() {
									const kt = z(),
										hi = kt.firstChild;
									return (
										kt.style.setProperty("margin", "0px"),
										kt.style.setProperty("font-size", "12px"),
										kt.style.setProperty("color", "var(--vscode-foreground)"),
										kt.style.setProperty("gap", "2px"),
										kt.style.setProperty("display", "flex"),
										kt.style.setProperty("flex-direction", "column"),
										kt.style.setProperty("padding-right", "8px"),
										(0, m.insert)(
											kt,
											(0, d.createComponent)(r.For, {
												get each() {
													return Fe();
												},
												get fallback() {
													return K();
												},
												children: (Kt, di) =>
													(() => {
														const Ye = J(),
															ze = Ye.firstChild,
															Xe = ze.firstChild,
															It = ze.nextSibling;
														return (
															Ye.addEventListener("click", (Lt) => {
																Lt.stopPropagation(),
																	Le().includes(Kt)
																		? se.aiSettingsService.disableModel(Kt)
																		: se.aiSettingsService.enableModel(Kt);
															}),
															Ye.style.setProperty("display", "flex"),
															Ye.style.setProperty("padding", "4px"),
															Ye.style.setProperty("align-items", "center"),
															Ye.style.setProperty(
																"justify-content",
																"space-between",
															),
															Ye.style.setProperty("border-radius", "4px"),
															Ye.style.setProperty("cursor", "pointer"),
															ze.style.setProperty("display", "flex"),
															ze.style.setProperty("align-items", "center"),
															ze.style.setProperty("gap", "4px"),
															(0, m.insert)(
																ze,
																(0, d.createComponent)(L.$XCc, {
																	get value() {
																		return Le().includes(Kt);
																	},
																	onChange: () => {},
																}),
																Xe,
															),
															(0, m.insert)(Xe, Kt),
															It.addEventListener("click", (Lt) => {
																Lt.stopImmediatePropagation(),
																	(async () => {
																		(await se.prettyDialogService.openDialog({
																			primaryButton: {
																				id: "remove-model",
																				label: "Remove",
																			},
																			cancelButton: {
																				id: "cancel-remove-model",
																				label: "Cancel",
																			},
																			title: "Remove model",
																			message: `Are you sure you want to remove the model "${Kt}"? You can add it back later.`,
																		})) === "remove-model" &&
																			se.aiSettingsService.removeModel(Kt);
																	})();
															}),
															It.style.setProperty("padding", "2px"),
															It.style.setProperty("font-size", "12px"),
															It.style.setProperty("border-radius", "4px"),
															It.style.setProperty("cursor", "pointer"),
															(0, E.effect)(
																(Lt) => {
																	const xt = di(),
																		Vt = Le().includes(Kt) ? 1 : 0.5,
																		Bt = "settings-menu-hoverable " + Re(),
																		Gt =
																			h.ThemeIcon.asClassName(a.$ak.x) +
																			" settings-menu-hoverable " +
																			Re(),
																		Mt = se.aiSettingsService.isDefaultModel(Kt)
																			? "none"
																			: "auto",
																		Ut = se.aiSettingsService.isDefaultModel(Kt)
																			? "hidden"
																			: "visible";
																	return (
																		xt !== Lt._v$16 &&
																			(0, i.setAttribute)(
																				Ye,
																				"data-index",
																				(Lt._v$16 = xt),
																			),
																		Vt !== Lt._v$17 &&
																			((Lt._v$17 = Vt) != null
																				? Ye.style.setProperty("opacity", Vt)
																				: Ye.style.removeProperty("opacity")),
																		Bt !== Lt._v$18 &&
																			(0, w.className)(Ye, (Lt._v$18 = Bt)),
																		Gt !== Lt._v$19 &&
																			(0, w.className)(It, (Lt._v$19 = Gt)),
																		Mt !== Lt._v$20 &&
																			((Lt._v$20 = Mt) != null
																				? It.style.setProperty(
																						"pointer-events",
																						Mt,
																					)
																				: It.style.removeProperty(
																						"pointer-events",
																					)),
																		Ut !== Lt._v$21 &&
																			((Lt._v$21 = Ut) != null
																				? It.style.setProperty("visibility", Ut)
																				: It.style.removeProperty(
																						"visibility",
																					)),
																		Lt
																	);
																},
																{
																	_v$16: void 0,
																	_v$17: void 0,
																	_v$18: void 0,
																	_v$19: void 0,
																	_v$20: void 0,
																	_v$21: void 0,
																},
															),
															Ye
														);
													})(),
											}),
											hi,
										),
										hi.style.setProperty("display", "flex"),
										hi.style.setProperty("width", "100%"),
										hi.style.setProperty("gap", "6px"),
										hi.style.setProperty("align-items", "center"),
										hi.style.setProperty("margin", "0px auto"),
										hi.style.setProperty("margin-top", "4px"),
										(0, m.insert)(
											hi,
											(0, d.createComponent)(r.Show, {
												get when() {
													return be();
												},
												get children() {
													return [
														(0, d.createComponent)(o.default, {
															ref(Kt) {
																const di = je;
																typeof di == "function" ? di(Kt) : (je = Kt);
															},
															extraStyles: {
																"font-size": "12px",
																padding: "5px 12px",
																flex: 1,
															},
															size: "small",
															get extras() {
																return {
																	placeholder: "New model name",
																	onInput: (Kt) => {
																		ge(Kt.currentTarget.value);
																	},
																	onKeyDown: (Kt) => {
																		Kt.key === "Enter"
																			? (se.aiSettingsService.enableModel(ve()),
																				Ce(!1),
																				ge(""))
																			: Kt.key === "Escape" && (Ce(!1), ge(""));
																	},
																	onBlur: () => {
																		Ce(!1), ge("");
																	},
																	value: ve() || "",
																	spellcheck: !1,
																};
															},
														}),
														(0, d.createComponent)(b.$rdc, {
															onClick: () => {
																se.aiSettingsService.enableModel(ve()),
																	Ce(!1),
																	ge("");
															},
															type: "secondary",
															title: "Add model",
															get codicon() {
																return a.$ak.plus;
															},
															extras: { style: {} },
														}),
													];
												},
											}),
											null,
										),
										(0, m.insert)(
											hi,
											(0, d.createComponent)(r.Show, {
												get when() {
													return !be();
												},
												get children() {
													return (0, d.createComponent)(b.$rdc, {
														style: { "align-self": "stretch", flex: 1 },
														size: "small",
														onClick: () => {
															Ce(!0),
																setTimeout(() => {
																	je?.focus();
																}, 100);
														},
														get codicon() {
															return a.$ak.plus;
														},
														type: "secondary",
														title: "Add model",
													});
												},
											}),
											null,
										),
										kt
									);
								},
							}),
							(0, d.createComponent)(S.$dDc, {}),
							(0, d.createComponent)(v.$VCc, {
								title: "OpenAI API Key",
								get description() {
									return [
										(0, d.createComponent)(r.Show, {
											get when() {
												return ne(se, ft);
											},
											get children() {
												return (0, d.createComponent)(ee, {
													get children() {
														return [
															(() => {
																const kt = W(),
																	hi = kt.firstChild,
																	Kt = hi.nextSibling,
																	di = Kt.nextSibling;
																return (
																	(0, m.insert)(
																		kt,
																		(() => {
																			const Ye = (0, C.memo)(
																				() => ft() === T.MembershipType.PRO,
																			);
																			return () =>
																				Ye()
																					? "Pro "
																					: (() => {
																							const ze = (0, C.memo)(
																								() =>
																									ft() ===
																									T.MembershipType.ENTERPRISE,
																							);
																							return () =>
																								ze()
																									? "Enterprise "
																									: ft() ===
																											T.MembershipType
																												.FREE_TRIAL
																										? "Pro Trial "
																										: "";
																						})();
																		})(),
																		Kt,
																	),
																	kt
																);
															})(),
															(() => {
																const kt = D();
																return (
																	kt.style.setProperty("display", "flex"),
																	kt.style.setProperty("align-items", "center"),
																	kt.style.setProperty("gap", "4px"),
																	kt.style.setProperty(
																		"justify-content",
																		"flex-end",
																	),
																	kt.style.setProperty(
																		"transform",
																		"scale(0.8)",
																	),
																	kt.style.setProperty(
																		"transform-origin",
																		"right",
																	),
																	(0, m.insert)(
																		kt,
																		(0, d.createComponent)(b.$rdc, {
																			type: "secondary",
																			title: "Dismiss",
																			onClick: () =>
																				se.reactiveStorageService.setApplicationUserPersistentStorage(
																					"settingsDismissedOpenAIKeyWarning",
																					!0,
																				),
																		}),
																		null,
																	),
																	(0, m.insert)(
																		kt,
																		(0, d.createComponent)(b.$rdc, {
																			title: "Turn Off OpenAI Key",
																			onClick: () => jt(!1),
																		}),
																		null,
																	),
																	kt
																);
															})(),
														];
													},
												});
											},
										}),
										[
											"You can put in",
											" ",
											(() => {
												const kt = X();
												return (
													kt.addEventListener("click", () => {
														se.openerService.open(
															"https://platform.openai.com/account/api-keys",
														);
													}),
													kt.style.setProperty("display", "inline"),
													kt.style.setProperty(
														"color",
														"var(--vscode-textLink-foreground)",
													),
													kt.style.setProperty("cursor", "pointer"),
													kt
												);
											})(),
											" ",
											"to use Cursor at public API costs. Note: this can cost more than pro and ",
											"won't",
											" work for custom model features.",
										],
									];
								},
								style: { gap: "14px" },
								get titleExtra() {
									return (0, d.createComponent)(r.Show, {
										get when() {
											return pe();
										},
										get children() {
											const kt = D();
											return (
												kt.style.setProperty("margin-left", "auto"),
												kt.style.setProperty("display", "flex"),
												kt.style.setProperty("flex-direction", "column"),
												kt.style.setProperty("align-items", "flex-end"),
												kt.style.setProperty("gap", "6px"),
												kt.style.setProperty("margin-right", "12px"),
												(0, m.insert)(
													kt,
													(0, d.createComponent)(u.$dob, {
														style: {
															transform: "scale(0.8)",
															"transform-origin": "right",
														},
														get value() {
															return (
																se.reactiveStorageService
																	.applicationUserPersistentStorage
																	.useOpenAIKey ?? !1
															);
														},
														onToggle: () => jt(),
													}),
												),
												kt
											);
										},
									});
								},
								get children() {
									return [
										(() => {
											const kt = D();
											return (
												kt.style.setProperty("display", "flex"),
												kt.style.setProperty("width", "100%"),
												kt.style.setProperty("gap", "6px"),
												kt.style.setProperty("align-items", "center"),
												kt.style.setProperty("margin", "0px auto"),
												(0, m.insert)(
													kt,
													(0, d.createComponent)(o.default, {
														extraStyles: { "font-size": "12px", flex: 1 },
														size: "small",
														get extras() {
															return {
																type: "password",
																placeholder: "Enter your OpenAI API Key",
																onInput: (hi) => {
																	ue(hi.currentTarget.value);
																},
																onKeyDown: (hi) => {
																	hi.key === "Enter" && Me();
																},
																value: ye() || "",
																spellcheck: !1,
															};
														},
													}),
													null,
												),
												(0, m.insert)(
													kt,
													(0, d.createComponent)(b.$rdc, {
														onClick: () => {
															Me();
														},
														size: "small",
														get isLoading() {
															return He();
														},
														title: "Verify",
														get codicon() {
															return a.$ak.arrowRight;
														},
														get style() {
															return {
																display: "flex",
																"flex-direction": "row-reverse",
																opacity: He() ? 0.6 : 1,
															};
														},
													}),
													null,
												),
												kt
											);
										})(),
										(0, d.createComponent)(r.Show, {
											get when() {
												return oe() === !1;
											},
											get children() {
												return (0, d.createComponent)(n.Portal, {
													get mount() {
														return se.portalElement;
													},
													get children() {
														return [
															(() => {
																const kt = D();
																return (
																	kt.addEventListener("click", (hi) => {
																		hi.stopPropagation(),
																			ae(null),
																			Z.setIsWarningOpen(!1);
																	}),
																	kt.style.setProperty("position", "fixed"),
																	kt.style.setProperty("top", "0"),
																	kt.style.setProperty("left", "0"),
																	kt.style.setProperty("bottom", "0"),
																	kt.style.setProperty("right", "0"),
																	kt.style.setProperty("z-index", "1000003"),
																	kt.style.setProperty(
																		"background-color",
																		"rgba(0, 0, 0, 0.5)",
																	),
																	kt
																);
															})(),
															(() => {
																const kt = M();
																return (
																	kt.style.setProperty("display", "flex"),
																	kt.style.setProperty(
																		"flex-direction",
																		"column",
																	),
																	kt.style.setProperty("gap", "4px"),
																	kt.style.setProperty("position", "fixed"),
																	kt.style.setProperty("width", "400px"),
																	kt.style.setProperty("height", "300px"),
																	kt.style.setProperty("z-index", "1000004"),
																	kt.style.setProperty("top", "50%"),
																	kt.style.setProperty("left", "50%"),
																	kt.style.setProperty(
																		"transform",
																		"translate(-50%, -50%)",
																	),
																	kt.style.setProperty("border-radius", "5px"),
																	kt.style.setProperty("font-size", "12px"),
																	kt.style.setProperty(
																		"background-color",
																		"var(--vscode-sideBar-background)",
																	),
																	kt.style.setProperty(
																		"border",
																		"1px solid var(--vscode-commandCenter-inactiveBorder)",
																	),
																	kt.style.setProperty(
																		"color",
																		"var(--vscode-foreground)",
																	),
																	kt.style.setProperty(
																		"box-shadow",
																		"0 0 8px 2px var(--vscode-widget-shadow)",
																	),
																	kt.style.setProperty("overflow", "hidden"),
																	(0, m.insert)(
																		kt,
																		(0, d.createComponent)(f.$w0b, {
																			style: { height: "100%" },
																			scrollingDirection: "vertical",
																			get children() {
																				const hi = F(),
																					Kt = hi.firstChild,
																					di = Kt.nextSibling,
																					Ye = di.firstChild,
																					ze = Ye.firstChild,
																					Xe = ze.nextSibling,
																					It = Xe.firstChild,
																					Lt = di.nextSibling,
																					xt = Lt.nextSibling,
																					Vt = xt.firstChild,
																					Bt = Vt.firstChild,
																					Gt = xt.nextSibling,
																					Mt = Gt.firstChild,
																					Ut = Mt.nextSibling,
																					ei = Ut.nextSibling,
																					mi = ei.nextSibling;
																				return (
																					hi.style.setProperty(
																						"padding",
																						"16px",
																					),
																					hi.style.setProperty(
																						"display",
																						"flex",
																					),
																					hi.style.setProperty(
																						"flex-direction",
																						"column",
																					),
																					hi.style.setProperty("gap", "12px"),
																					Kt.style.setProperty(
																						"font-size",
																						"14px",
																					),
																					Kt.style.setProperty(
																						"font-weight",
																						"500",
																					),
																					Kt.style.setProperty(
																						"color",
																						"var(--vscode-editorError-foreground)",
																					),
																					di.style.setProperty(
																						"background",
																						"var(--vscode-editor-background)",
																					),
																					di.style.setProperty(
																						"border-radius",
																						"6px",
																					),
																					di.style.setProperty(
																						"border",
																						"1px solid var(--vscode-commandCenter-inactiveBorder)",
																					),
																					di.style.setProperty(
																						"display",
																						"flex",
																					),
																					di.style.setProperty(
																						"flex-direction",
																						"column",
																					),
																					Ye.addEventListener("click", () => {
																						Se(!Be());
																					}),
																					Ye.style.setProperty(
																						"display",
																						"flex",
																					),
																					Ye.style.setProperty("gap", "4px"),
																					Ye.style.setProperty(
																						"align-items",
																						"center",
																					),
																					Ye.style.setProperty(
																						"font-size",
																						"12px",
																					),
																					Ye.style.setProperty(
																						"cursor",
																						"pointer",
																					),
																					Ye.style.setProperty(
																						"padding",
																						"0px 8px",
																					),
																					ze.style.setProperty(
																						"font-size",
																						"10px",
																					),
																					(0, m.insert)(
																						Xe,
																						() => (Be() ? "Hide" : "Show"),
																						It,
																					),
																					(0, m.insert)(
																						di,
																						(0, d.createComponent)(r.Show, {
																							get when() {
																								return Be();
																							},
																							get children() {
																								const ii = M();
																								return (
																									ii.style.setProperty(
																										"padding",
																										"4px 8px",
																									),
																									(0, m.insert)(
																										ii,
																										(0, d.createComponent)(
																											s.$Ibc,
																											{
																												get text() {
																													return fe().trim();
																												},
																												language: "plaintext",
																												nonReactiveEditorOptions:
																													{ fontSize: 10 },
																											},
																										),
																									),
																									ii
																								);
																							},
																						}),
																						null,
																					),
																					xt.style.setProperty(
																						"background",
																						"var(--vscode-editor-background)",
																					),
																					xt.style.setProperty(
																						"padding",
																						"8px",
																					),
																					xt.style.setProperty(
																						"border-radius",
																						"6px",
																					),
																					xt.style.setProperty(
																						"border",
																						"1px solid var(--vscode-commandCenter-inactiveBorder)",
																					),
																					Vt.style.setProperty(
																						"background",
																						"var(--vscode-editor-background)",
																					),
																					Bt.addEventListener("click", () => {
																						(0, y.$Y$b)(De()),
																							Ie(!0),
																							setTimeout(() => {
																								Ie(!1);
																							}, 3e3);
																					}),
																					Bt.style.setProperty(
																						"display",
																						"flex",
																					),
																					Bt.style.setProperty(
																						"align-items",
																						"center",
																					),
																					Bt.style.setProperty(
																						"justify-content",
																						"center",
																					),
																					Bt.style.setProperty(
																						"border-radius",
																						"4px",
																					),
																					Bt.style.setProperty(
																						"cursor",
																						"pointer",
																					),
																					Bt.style.setProperty(
																						"padding",
																						"4px",
																					),
																					(0, m.insert)(
																						xt,
																						(0, d.createComponent)(s.$Ibc, {
																							get text() {
																								return De();
																							},
																							language: "shellscript",
																							nonReactiveEditorOptions: {
																								fontSize: 10,
																							},
																						}),
																						null,
																					),
																					Ut.addEventListener("click", () => {
																						se.openerService.open(
																							`mailto:${g.$vV}`,
																						);
																					}),
																					Ut.style.setProperty(
																						"color",
																						"var(--vscode-textLink-foreground)",
																					),
																					Ut.style.setProperty(
																						"cursor",
																						"pointer",
																					),
																					Ut.style.setProperty(
																						"text-decoration",
																						"none",
																					),
																					(0, m.insert)(Ut, g.$vV),
																					mi.addEventListener("click", () => {
																						se.openerService.open(
																							"https://platform.openai.com/account/api-keys",
																						);
																					}),
																					mi.style.setProperty(
																						"display",
																						"inline",
																					),
																					mi.style.setProperty(
																						"color",
																						"var(--vscode-textLink-foreground)",
																					),
																					mi.style.setProperty(
																						"cursor",
																						"pointer",
																					),
																					(0, E.effect)(
																						(ii) => {
																							const Dt = Be()
																									? "1px solid var(--vscode-commandCenter-inactiveBorder)"
																									: void 0,
																								Jt =
																									"settings-menu-hoverable " +
																									Re(),
																								si = Be()
																									? "rotate(180deg)"
																									: void 0,
																								Zt = h.ThemeIcon.asClassName(
																									a.$ak.chevronDown,
																								),
																								ci =
																									(Ee()
																										? h.ThemeIcon.asClassName(
																												a.$ak.check,
																											)
																										: h.ThemeIcon.asClassName(
																												a.$ak.copy,
																											)) +
																									" settings-menu-hoverable " +
																									Re();
																							return (
																								Dt !== ii._v$11 &&
																									((ii._v$11 = Dt) != null
																										? Ye.style.setProperty(
																												"border-bottom",
																												Dt,
																											)
																										: Ye.style.removeProperty(
																												"border-bottom",
																											)),
																								Jt !== ii._v$12 &&
																									(0, w.className)(
																										Ye,
																										(ii._v$12 = Jt),
																									),
																								si !== ii._v$13 &&
																									((ii._v$13 = si) != null
																										? ze.style.setProperty(
																												"transform",
																												si,
																											)
																										: ze.style.removeProperty(
																												"transform",
																											)),
																								Zt !== ii._v$14 &&
																									(0, w.className)(
																										ze,
																										(ii._v$14 = Zt),
																									),
																								ci !== ii._v$15 &&
																									(0, w.className)(
																										Bt,
																										(ii._v$15 = ci),
																									),
																								ii
																							);
																						},
																						{
																							_v$11: void 0,
																							_v$12: void 0,
																							_v$13: void 0,
																							_v$14: void 0,
																							_v$15: void 0,
																						},
																					),
																					hi
																				);
																			},
																		}),
																	),
																	kt
																);
															})(),
														];
													},
												});
											},
										}),
										(() => {
											const kt = x(),
												hi = kt.firstChild,
												Kt = hi.firstChild,
												di = Kt.nextSibling;
											return (
												kt.style.setProperty("display", "flex"),
												kt.style.setProperty("flex-direction", "column"),
												kt.style.setProperty("gap", "6px"),
												hi.addEventListener("click", () => {
													xe((Ye) => !Ye);
												}),
												hi.style.setProperty("font-size", "10px"),
												hi.style.setProperty(
													"color",
													"var(--vscode-input-placeholderForeground)",
												),
												hi.style.setProperty("cursor", "pointer"),
												hi.style.setProperty("display", "flex"),
												hi.style.setProperty("flex-direction", "row"),
												hi.style.setProperty("align-items", "center"),
												hi.style.setProperty("user-select", "none"),
												(0, m.insert)(
													hi,
													(0, d.createComponent)(r.Show, {
														get when() {
															return (
																se.reactiveStorageService
																	.applicationUserPersistentStorage
																	.useOpenAIKey !== !0
															);
														},
														get children() {
															return ["(when using key)", " "];
														},
													}),
													di,
												),
												di.style.setProperty("font-size", "8px"),
												di.style.setProperty("margin-left", "2px"),
												(0, m.insert)(
													kt,
													(0, d.createComponent)(r.Show, {
														get when() {
															return (
																Oe() ||
																(se.reactiveStorageService
																	.applicationUserPersistentStorage
																	.openAIBaseUrl !== void 0 &&
																	se.reactiveStorageService
																		.applicationUserPersistentStorage
																		.useOpenAIKey === !0)
															);
														},
														get children() {
															const Ye = z(),
																ze = Ye.firstChild;
															return (
																Ye.style.setProperty("display", "flex"),
																Ye.style.setProperty("gap", "4px"),
																Ye.style.setProperty("align-items", "center"),
																(0, m.insert)(
																	Ye,
																	(0, d.createComponent)(o.default, {
																		size: "small",
																		extraStyles: {
																			"font-size": "12px",
																			flex: 1,
																		},
																		get extras() {
																			return {
																				placeholder:
																					"https://api.openai.com/v1",
																				onInput: (Xe) => {
																					se.reactiveStorageService.setApplicationUserPersistentStorage(
																						"openAIBaseUrl",
																						Xe.currentTarget.value,
																					);
																				},
																				value:
																					se.reactiveStorageService
																						.applicationUserPersistentStorage
																						.openAIBaseUrl || "",
																				spellcheck: !1,
																			};
																		},
																	}),
																	ze,
																),
																ze.style.setProperty("display", "flex"),
																ze.style.setProperty("align-items", "center"),
																ze.style.setProperty("gap", "4px"),
																(0, m.insert)(
																	ze,
																	(0, d.createComponent)(b.$rdc, {
																		onClick: () => {
																			Te(!0),
																				setTimeout(
																					() => {
																						Te(!1);
																					},
																					800 + Math.random() * 200,
																				);
																		},
																		get codicon() {
																			return a.$ak.save;
																		},
																		title: "Save",
																		size: "small",
																		get style() {
																			return {
																				opacity: Je() ? 0.5 : 1,
																				transition: "opacity 0.1s",
																				"pointer-events": Je()
																					? "none"
																					: "auto",
																			};
																		},
																		get isLoading() {
																			return Je();
																		},
																	}),
																	null,
																),
																(0, m.insert)(
																	ze,
																	(0, d.createComponent)(b.$rdc, {
																		size: "small",
																		onClick: () => {
																			se.reactiveStorageService.setApplicationUserPersistentStorage(
																				"openAIBaseUrl",
																				void 0,
																			);
																		},
																		get codicon() {
																			return a.$ak.refresh;
																		},
																		type: "tertiary",
																		title: "Reset to default",
																	}),
																	null,
																),
																Ye
															);
														},
													}),
													null,
												),
												(0, E.effect)(() =>
													(0, w.className)(
														di,
														Oe()
															? h.ThemeIcon.asClassName(a.$ak.chevronUp)
															: h.ThemeIcon.asClassName(a.$ak.chevronDown),
													),
												),
												kt
											);
										})(),
									];
								},
							}),
							(0, d.createComponent)(S.$dDc, {}),
							(0, d.createComponent)(te, {}),
							(0, d.createComponent)(S.$dDc, {}),
							(0, d.createComponent)(_, {}),
							(0, d.createComponent)(S.$dDc, {}),
							(0, d.createComponent)(v.$VCc, {
								title: "Azure API Key",
								description:
									"Instead of OpenAI's API or pro, you can use Cursor at-cost through the Azure API.",
								titleStyle: { width: "100%" },
								get titleExtra() {
									return (() => {
										const kt = D();
										return (
											kt.style.setProperty("margin-left", "auto"),
											kt.style.setProperty("display", "flex"),
											kt.style.setProperty("width", "100%"),
											kt.style.setProperty("justify-content", "flex-end"),
											kt.style.setProperty("margin-right", "24px"),
											kt.style.setProperty("align-items", "flex-end"),
											kt.style.setProperty("gap", "6px"),
											(0, m.insert)(
												kt,
												(0, d.createComponent)(u.$dob, {
													style: {
														transform: "scale(0.8)",
														"transform-origin": "right",
													},
													get value() {
														return Ve();
													},
													onToggle: () => {
														Ve()
															? (se.reactiveStorageService.setApplicationUserPersistentStorage(
																	"azureState",
																	{ useAzure: !1 },
																),
																Ze(!1))
															: Nt();
													},
												}),
											),
											kt
										);
									})();
								},
								style: { gap: "14px" },
								get children() {
									const kt = G(),
										hi = kt.firstChild,
										Kt = hi.firstChild,
										di = Kt.firstChild,
										Ye = di.nextSibling,
										ze = Kt.nextSibling,
										Xe = ze.firstChild,
										It = Xe.nextSibling,
										Lt = ze.nextSibling,
										xt = Lt.firstChild,
										Vt = xt.nextSibling,
										Bt = hi.nextSibling;
									return (
										kt.style.setProperty("gap", "10px"),
										kt.style.setProperty("margin-left", "8px"),
										hi.style.setProperty("display", "flex"),
										hi.style.setProperty("flex-direction", "column"),
										hi.style.setProperty("gap", "4px"),
										(0, m.insert)(
											Ye,
											(0, d.createComponent)(o.default, {
												extraStyles: {
													width: "100%",
													"font-size": "12px",
													flex: 1,
												},
												size: "small",
												get extras() {
													return {
														placeholder:
															"E.g. https://cursor-oai.openai.azure.com/",
														onInput: (Gt) => {
															se.reactiveStorageService.setApplicationUserPersistentStorage(
																"azureState",
																{ baseUrl: Gt.currentTarget.value },
															),
																Rt();
														},
														value:
															se.reactiveStorageService
																.applicationUserPersistentStorage.azureState
																.baseUrl,
														spellcheck: !1,
													};
												},
											}),
										),
										(0, m.insert)(
											It,
											(0, d.createComponent)(o.default, {
												extraStyles: {
													width: "100%",
													"font-size": "12px",
													flex: 1,
												},
												size: "small",
												get extras() {
													return {
														placeholder:
															"The deployment name you chose when you deployed your model on azure",
														onInput: (Gt) => {
															se.reactiveStorageService.setApplicationUserPersistentStorage(
																"azureState",
																{ deployment: Gt.currentTarget.value },
															),
																Rt();
														},
														value:
															se.reactiveStorageService
																.applicationUserPersistentStorage.azureState
																.deployment,
														spellcheck: !1,
													};
												},
											}),
										),
										(0, m.insert)(
											Vt,
											(0, d.createComponent)(o.default, {
												extraStyles: {
													width: "100%",
													"font-size": "12px",
													flex: 1,
												},
												size: "small",
												get extras() {
													return {
														type: "password",
														placeholder: "Enter your Azure OpenAI Key",
														onInput: (Gt) => {
															se.reactiveStorageService.setApplicationUserPersistentStorage(
																"azureState",
																{ apiKey: Gt.currentTarget.value },
															),
																Rt();
														},
														value:
															se.reactiveStorageService
																.applicationUserPersistentStorage.azureState
																.apiKey,
														spellcheck: !1,
													};
												},
											}),
										),
										Bt.style.setProperty("display", "flex"),
										Bt.style.setProperty("width", "100%"),
										Bt.style.setProperty("align-items", "center"),
										Bt.style.setProperty("font-size", "10px"),
										Bt.style.setProperty(
											"color",
											"var(--vscode-breadcrumb-foreground)",
										),
										(0, m.insert)(
											Bt,
											(0, d.createComponent)(r.Show, {
												get when() {
													return lt();
												},
												get children() {
													const Gt = H();
													return (
														Gt.style.setProperty("margin-right", "8px"), Gt
													);
												},
											}),
											null,
										),
										(0, m.insert)(
											Bt,
											(0, d.createComponent)(r.Show, {
												get when() {
													return !lt();
												},
												get children() {
													const Gt = q();
													return (
														Gt.style.setProperty("margin-right", "8px"), Gt
													);
												},
											}),
											null,
										),
										(0, m.insert)(
											Bt,
											(0, d.createComponent)(r.Show, {
												get when() {
													return et() === !1;
												},
												get children() {
													const Gt = V();
													return (
														Gt.style.setProperty("font-size", "10px"),
														Gt.style.setProperty(
															"color",
															"var(--vscode-editorError-foreground)",
														),
														Gt
													);
												},
											}),
											null,
										),
										kt
									);
								},
							}),
						];
					},
				});
			}
		},
	),
		