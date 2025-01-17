import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../controlCommon/browser/solid.js';
import '../../../../../base/common/codicons.js';
import '../../../../../platform/theme/common/iconRegistry.js';
import '../../../../../base/common/themables.js';
import '../../../../../base/browser/solidComponents/switch/switch.js';
import '../../../../services/aiErrors/browser/errors.js';
import '../../../../../../proto/aiserver/v1/utils_pb.js';
import '../../../../../base/common/constants.js';
import '../../../authentication/browser/components/login/login.js';
import '../../../../../platform/reactivestorage/common/reactiveStorageTypes.js';
import '../../../../../css!vs/workbench/contrib/aiErrors/browser/components/errorPopup.js';
define(
			de[4253],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13, 36, 14, 79, 26, 650, 1286, 83, 58,
				1987, 134, 2361,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$4Zc = R),
					(e.$5Zc = x);
				const y = (0, t.template)('<div class="error__title">'),
					$ = (0, t.template)('<div class="error__content">'),
					v = (0, t.template)(
						'<div class="error-container-backing"><div class="error-container"><div class="error"><div><i class="fas fa-times"></i></div></div><div class="cover-bar">',
					),
					S = (0, t.template)('<div class="error__content"><div>'),
					I = (0, t.template)(
						`<div class="error__content"><div>You've exceeded the maximum number of requests per minute.</div><br><div>To protect our servers from abuse, we limit the number of AI requests you can make per minute. If you get this error often, please email us at <!>.`,
					),
					T = (0, t.template)(
						`<div class="error__content"><div>You've used up your 50 free <!> requests.</div><div class="error__content_subtitle">You can continue using <!> by subscribing to Pro or entering your OpenAI key in settings. Otherwise, you can stay on our free plan (200 cursor-small requests per month).</div><div class="error__content_subtitle">Cursor Pro comes with other benefits too, such as unlimited Cursor Tab requests and access to all the latest models (see <a href="https://cursor.com/pricing" target="_blank">cursor.com/pricing</a> for more details).</div><div><button>Switch to cursor-small, continue for free</button><button><div></div>Use <!> and upgrade to pro</button></div><div>`,
					),
					P = (0, t.template)(
						'<div class="cursor-settings-error-message">Invalid API Key. Please try again.',
					),
					k = (0, t.template)('<span class="openai-switch-text">Using key'),
					L = (0, t.template)('<div class="openai-enabled-container">'),
					D = (0, t.template)(
						`<div class="settings__item"><div class="settings__item_title">Bring-your-own-key</div><div class="settings__item_description">If you'd like, you can put in your OpenAI api key to use Cursor at-cost.</div><div class="openai-settings-container"><div class="openai-area"><input placeholder="Enter your OpenAI API Key"><button class="cursor-settings-submit-button">Update`,
					),
					M = (0, t.template)('<span class="openai-switch-text">Not using key'),
					N = (0, t.template)(
						`<div class="error__content">You've used up your 200 free monthly cursor-small requests.<br><br>You can continue using the AI features by subscribing to Pro or by using your own API key. You can also wait until the next month to use your 200 free requests again.<div><div><button><div></div>Upgrade to pro & Get unlimited cursor-small</button></div><div><button>Dismiss & wait until next month</button></div></div><div>You can always upgrade later in settings.</div><div><i>What's the difference between gpt-4 and cursor-small?</i> Gpt-4 is smarter than cursor-small, but slower. The devs are almost always on gpt-4, but occasionally switch to cursor-small for faster results.</div><hr>`,
					),
					A = (0, n.$$O)(
						"tabbar-remove-chat",
						c.$ak.x,
						"Icon for removing a tab in the tab list for chats.",
					);
				function R(V) {
					return (0, u.createComponent)(O, {
						get closePopup() {
							return V.closePopup;
						},
						get style() {
							return V.style;
						},
						get children() {
							return [
								(() => {
									const G = y();
									return (
										(0, r.insert)(
											G,
											(0, u.createComponent)(a.Show, {
												get when() {
													return V.error instanceof o.$Q6b;
												},
												get fallback() {
													return "Error";
												},
												get children() {
													return (0, u.createComponent)(B, {
														get error() {
															return V.error;
														},
													});
												},
											}),
										),
										G
									);
								})(),
								(() => {
									const G = $();
									return (
										(0, r.insert)(
											G,
											(0, u.createComponent)(a.Switch, {
												get children() {
													return (0, u.createComponent)(a.Match, {
														get when() {
															return V.error instanceof o.$Q6b;
														},
														get children() {
															return (0, u.createComponent)(U, {
																get error() {
																	return V.error;
																},
																get closePopup() {
																	return V.closePopup;
																},
															});
														},
													});
												},
											}),
										),
										G
									);
								})(),
							];
						},
					});
				}
				function O(V) {
					const G = (0, h.$odc)();
					return (
						(0, a.createEffect)(() => {
							const K = (J) => {
								J.key === "Escape" && V.closePopup();
							};
							G.window.addEventListener("keydown", K),
								(0, a.onCleanup)(() => {
									G.window.removeEventListener("keydown", K);
								});
						}),
						(() => {
							const K = v(),
								J = K.firstChild,
								W = J.firstChild,
								X = W.firstChild;
							return (
								K.addEventListener("click", (Y) => {
									V.closePopup(), Y.stopPropagation();
								}),
								J.addEventListener("click", (Y) => {
									Y.stopPropagation();
								}),
								X.addEventListener("click", () => {
									V.closePopup();
								}),
								(0, r.insert)(W, () => V.children, null),
								(0, m.effect)(
									(Y) => {
										const ie = V.style,
											ne = ["error__dismiss", g.ThemeIcon.asClassName(A)].join(
												" ",
											);
										return (
											(Y._v$ = (0, d.style)(K, ie, Y._v$)),
											ne !== Y._v$2 && (0, C.className)(X, (Y._v$2 = ne)),
											Y
										);
									},
									{ _v$: void 0, _v$2: void 0 },
								),
								K
							);
						})()
					);
				}
				function B(V) {
					return (0, u.createComponent)(a.Switch, {
						fallback: "Error",
						get children() {
							return [
								(0, u.createComponent)(a.Match, {
									get when() {
										return (
											V.error.error ===
											f.ErrorDetails_Error.PRO_USER_USAGE_LIMIT
										);
									},
									children: "Many Slow Requests",
								}),
								(0, u.createComponent)(a.Match, {
									get when() {
										return (
											(0, E.memo)(
												() =>
													V.error.error ===
													f.ErrorDetails_Error.FREE_USER_USAGE_LIMIT,
											)() && V.error.model.startsWith("gpt-4")
										);
									},
									children: "Limit Reached",
								}),
								(0, u.createComponent)(a.Match, {
									get when() {
										return (
											(0, E.memo)(
												() =>
													V.error.error ===
													f.ErrorDetails_Error.FREE_USER_USAGE_LIMIT,
											)() && V.error.model.startsWith("gpt-3")
										);
									},
									children: "Limit Reached",
								}),
								(0, u.createComponent)(a.Match, {
									get when() {
										return (
											V.error.error ===
												f.ErrorDetails_Error.FREE_USER_RATE_LIMIT_EXCEEDED ||
											V.error.error ===
												f.ErrorDetails_Error.PRO_USER_RATE_LIMIT_EXCEEDED
										);
									},
									children: "Limit Reached",
								}),
								(0, u.createComponent)(a.Match, {
									get when() {
										return V.error.error === f.ErrorDetails_Error.NOT_LOGGED_IN;
									},
									children: "Login",
								}),
								(0, u.createComponent)(a.Match, {
									get when() {
										return V.error.error === f.ErrorDetails_Error.BAD_API_KEY;
									},
									children: "Invalid API Key",
								}),
								(0, u.createComponent)(a.Match, {
									get when() {
										return (
											V.error.error === f.ErrorDetails_Error.BAD_MODEL_NAME
										);
									},
									children: "Invalid Model",
								}),
							];
						},
					});
				}
				function U(V) {
					return (0, u.createComponent)(a.Switch, {
						get fallback() {
							return (() => {
								const G = S(),
									K = G.firstChild;
								return (
									K.style.setProperty("font-size", "16px"),
									K.style.setProperty("margin-bottom", "10px"),
									K.style.setProperty("display", "flex"),
									K.style.setProperty("justify-content", "center"),
									K.style.setProperty("align-items", "center"),
									K.style.setProperty("padding", "0px 20px"),
									K.style.setProperty("color", "var(--vscode-foreground)"),
									(0, r.insert)(K, () => V.error.toMessage()),
									G
								);
							})();
						},
						get children() {
							return [
								(0, u.createComponent)(a.Match, {
									get when() {
										return (
											(0, E.memo)(
												() =>
													V.error.error ===
													f.ErrorDetails_Error.FREE_USER_USAGE_LIMIT,
											)() &&
											(V.error.model.startsWith("gpt-4") ||
												V.error.model.startsWith("claude-3.5-sonnet"))
										);
									},
									get children() {
										return (0, u.createComponent)(F, {
											get closePopup() {
												return V.closePopup;
											},
											get model() {
												return V.error.model;
											},
											get error() {
												return V.error;
											},
										});
									},
								}),
								(0, u.createComponent)(a.Match, {
									get when() {
										return (
											(0, E.memo)(
												() =>
													V.error.error ===
													f.ErrorDetails_Error.FREE_USER_USAGE_LIMIT,
											)() && V.error.model.startsWith("gpt-3")
										);
									},
									get children() {
										return (0, u.createComponent)(H, {
											get closePopup() {
												return V.closePopup;
											},
											get model() {
												return V.error.model;
											},
											get error() {
												return V.error;
											},
										});
									},
								}),
								(0, u.createComponent)(a.Match, {
									get when() {
										return (
											V.error.error ===
												f.ErrorDetails_Error.FREE_USER_RATE_LIMIT_EXCEEDED ||
											V.error.error ===
												f.ErrorDetails_Error.PRO_USER_RATE_LIMIT_EXCEEDED
										);
									},
									get children() {
										return (0, u.createComponent)(z, {
											get model() {
												return V.error.model;
											},
											get error() {
												return V.error.error;
											},
										});
									},
								}),
								(0, u.createComponent)(a.Match, {
									get when() {
										return (
											V.error.error === f.ErrorDetails_Error.NOT_LOGGED_IN ||
											V.error.error ===
												f.ErrorDetails_Error.AGENT_REQUIRES_LOGIN
										);
									},
									get children() {
										return (0, u.createComponent)(q, {
											get closePopup() {
												return V.closePopup;
											},
											get error() {
												return V.error;
											},
										});
									},
								}),
							];
						},
					});
				}
				function z(V) {
					const { openerService: G } = (0, h.$odc)();
					return (() => {
						const K = I(),
							J = K.firstChild,
							W = J.nextSibling,
							X = W.nextSibling,
							Y = X.firstChild,
							ie = Y.nextSibling,
							ne = ie.nextSibling;
						return (0, r.insert)(X, b.$vV, ie), K;
					})();
				}
				function F(V) {
					const G = (0, h.$odc)();
					return (
						(0, a.createEffect)(() => {
							const K = (J) => {
								J !== l.MembershipType.FREE &&
									(V.closePopup(), V.error.rerun());
							};
							G.cursorAuthenticationService.addSubscriptionChangedListener(K),
								(0, a.onCleanup)(() => {
									G.cursorAuthenticationService.removeSubscriptionChangedListener(
										K,
									);
								});
						}),
						(() => {
							const K = T(),
								J = K.firstChild,
								W = J.firstChild,
								X = W.nextSibling,
								Y = X.nextSibling,
								ie = J.nextSibling,
								ne = ie.firstChild,
								ee = ne.nextSibling,
								_ = ee.nextSibling,
								te = ie.nextSibling,
								Q = te.firstChild,
								Z = Q.nextSibling,
								se = te.nextSibling,
								re = se.firstChild,
								le = re.nextSibling,
								oe = le.firstChild,
								ae = oe.nextSibling,
								pe = ae.nextSibling,
								$e = pe.nextSibling,
								ye = se.nextSibling;
							return (
								J.style.setProperty("font-size", "16px"),
								J.style.setProperty("margin-bottom", "10px"),
								J.style.setProperty("color", "var(--vscode-foreground)"),
								(0, r.insert)(J, () => V.model, X),
								(0, r.insert)(ie, () => V.model, ee),
								Z.style.setProperty(
									"color",
									"var(--vscode-textLink-foreground)",
								),
								se.style.setProperty("display", "grid"),
								se.style.setProperty("grid-template-columns", "1fr 1fr"),
								se.style.setProperty("justify-items", "center"),
								se.style.setProperty("margin-top", "30px"),
								se.style.setProperty("margin-bottom", "20px"),
								re.addEventListener("click", () => {
									G.aiSettingsService.setModel("cursor-small"),
										V.closePopup(),
										V.error.rerun();
								}),
								re.style.setProperty("background-color", "transparent"),
								re.style.setProperty("border", "none"),
								re.style.setProperty("cursor", "pointer"),
								re.style.setProperty("color", "var(--vscode-foreground)"),
								(0, w.addEventListener)(
									le,
									"click",
									G.cursorAuthenticationService.pay,
								),
								le.style.setProperty(
									"background-color",
									"var(--vscode-button-background)",
								),
								le.style.setProperty("border", "none"),
								le.style.setProperty("border-radius", "5px"),
								le.style.setProperty(
									"color",
									"var(--vscode-button-foreground)",
								),
								le.style.setProperty("cursor", "pointer"),
								le.style.setProperty("padding", "10px 20px"),
								le.style.setProperty("gap", "7px"),
								le.style.setProperty("display", "flex"),
								le.style.setProperty("align-items", "center"),
								oe.style.setProperty(
									"color",
									"var(--vscode-button-foreground)",
								),
								(0, r.insert)(le, () => V.model, pe),
								ye.style.setProperty("font-size", "12px"),
								ye.style.setProperty("opacity", "0.5"),
								(0, m.effect)(() =>
									(0, C.className)(oe, g.ThemeIcon.asClassName(c.$ak.rocket)),
								),
								K
							);
						})()
					);
				}
				function x(V) {
					const G = (0, h.$odc)(),
						K = G.aiSettingsService,
						J = G.cursorAuthenticationService,
						[W, X] = (0, a.createSignal)(K.getUseOpenAIKey()),
						[Y, ie] = (0, a.createSignal)(K.getModel()),
						[ne, ee] = (0, a.createSignal)(K.getLongContextModel()),
						[_, te] = (0, a.createSignal)(null),
						[Q, Z] = (0, a.createSignal)(""),
						[se, re] = (0, a.createSignal)("");
					return (
						(0, a.createEffect)(() => {
							K.addOpenAIKeyListener(X),
								K.addOpenAIModelListener(ie),
								K.addLongContextOpenAIModelListener(ee),
								J.addOpenAIKeyChangedListener(Z),
								(0, a.onCleanup)(() => {
									K.removeOpenAIKeyListener(X),
										K.removeOpenAIModelListener(ie),
										K.removeLongContextOpenAIModelListener(ee),
										J.removeOpenAIKeyChangedListener(Z);
								});
						}),
						(0, a.createEffect)(() => {
							K.getApiKey().then((le) => {
								le && Z(le);
							});
						}),
						(0, a.createEffect)(() => {
							re(Q());
						}),
						(0, a.createEffect)(() => {
							se() !== null && te(null);
						}),
						(() => {
							const le = D(),
								oe = le.firstChild,
								ae = oe.nextSibling,
								pe = ae.nextSibling,
								$e = pe.firstChild,
								ye = $e.firstChild,
								ue = ye.nextSibling;
							return (
								ye.addEventListener("input", (fe) => {
									re(fe.currentTarget.value);
								}),
								(0, i.setAttribute)(ye, "spellcheck", !1),
								ue.addEventListener("click", () => {
									K.setOpenAIKey(se()).then((fe) => {
										fe !== !0 ? te(!1) : (te(!0), V.onClose(), V.error.rerun());
									});
								}),
								(0, r.insert)(
									pe,
									(0, u.createComponent)(a.Show, {
										get when() {
											return _() === !1;
										},
										get children() {
											return P();
										},
									}),
									null,
								),
								(0, r.insert)(
									pe,
									(0, u.createComponent)(a.Show, {
										get when() {
											return Q();
										},
										get children() {
											const fe = L();
											return (
												(0, r.insert)(
													fe,
													(0, u.createComponent)(p.$dob, {
														get value() {
															return W();
														},
														onToggle: () => K.setUseOpenAIKey(!W()),
													}),
													null,
												),
												(0, r.insert)(
													fe,
													(0, u.createComponent)(a.Show, {
														get when() {
															return W();
														},
														get fallback() {
															return M();
														},
														get children() {
															return k();
														},
													}),
													null,
												),
												fe
											);
										},
									}),
									null,
								),
								(0, m.effect)(() =>
									(0, C.className)(
										ye,
										`settings__item_textarea
										${_() === !1 ? "input-error" : _() === !0 ? "input-success" : ""}`,
									),
								),
								(0, m.effect)(() => (ye.value = se() || "")),
								le
							);
						})()
					);
				}
				function H(V) {
					const G = (0, h.$odc)();
					return (
						(0, a.createEffect)(() => {
							const K = (J) => {
								J === l.MembershipType.PRO && (V.closePopup(), V.error.rerun());
							};
							G.cursorAuthenticationService.addSubscriptionChangedListener(K),
								(0, a.onCleanup)(() => {
									G.cursorAuthenticationService.removeSubscriptionChangedListener(
										K,
									);
								});
						}),
						(() => {
							const K = N(),
								J = K.firstChild,
								W = J.nextSibling,
								X = W.nextSibling,
								Y = X.nextSibling,
								ie = Y.nextSibling,
								ne = ie.firstChild,
								ee = ne.firstChild,
								_ = ee.firstChild,
								te = ne.nextSibling,
								Q = te.firstChild,
								Z = ie.nextSibling,
								se = Z.nextSibling,
								re = se.nextSibling;
							return (
								ie.style.setProperty("display", "grid"),
								ie.style.setProperty("grid-template-columns", "1fr 1fr"),
								ie.style.setProperty("justify-items", "center"),
								ie.style.setProperty("margin-top", "30px"),
								ie.style.setProperty("margin-bottom", "20px"),
								ne.style.setProperty("display", "flex"),
								ne.style.setProperty("justify-content", "center"),
								(0, w.addEventListener)(
									ee,
									"click",
									G.cursorAuthenticationService.pay,
								),
								ee.style.setProperty(
									"background-color",
									"var(--vscode-button-background)",
								),
								ee.style.setProperty("border", "solid"),
								ee.style.setProperty("border-width", "1px"),
								ee.style.setProperty("border-radius", "10px"),
								ee.style.setProperty(
									"color",
									"var(--vscode-button-foreground)",
								),
								ee.style.setProperty("cursor", "pointer"),
								ee.style.setProperty("padding", "10px 20px"),
								ee.style.setProperty("gap", "7px"),
								ee.style.setProperty("display", "flex"),
								ee.style.setProperty("align-items", "center"),
								_.style.setProperty("color", "var(--vscode-button-foreground)"),
								te.style.setProperty("display", "flex"),
								te.style.setProperty("justify-content", "center"),
								Q.addEventListener("click", () => {
									V.closePopup();
								}),
								Q.style.setProperty("text-decoration", "underline"),
								Q.style.setProperty("text-underline-offset", "2px"),
								Q.style.setProperty("background-color", "transparent"),
								Q.style.setProperty("border", "none"),
								Q.style.setProperty("cursor", "pointer"),
								Q.style.setProperty("color", "var(--vscode-foreground)"),
								Z.style.setProperty("text-align", "center"),
								Z.style.setProperty("font-size", "12px"),
								Z.style.setProperty("opacity", "0.5"),
								Z.style.setProperty("margin-bottom", "20px"),
								se.style.setProperty("font-size", "12px"),
								se.style.setProperty("opacity", "0.5"),
								re.style.setProperty("margin-top", "20px"),
								re.style.setProperty("margin-bottom", "20px"),
								(0, r.insert)(
									K,
									(0, u.createComponent)(x, {
										onClose: () => V.closePopup(),
										get error() {
											return V.error;
										},
									}),
									null,
								),
								(0, m.effect)(
									(le) => {
										const oe = G.themeService
												.getColorTheme()
												.getColor("button.background")
												?.lighten(0.3)
												.toString(),
											ae = g.ThemeIcon.asClassName(c.$ak.rocket);
										return (
											oe !== le._v$3 &&
												((le._v$3 = oe) != null
													? ee.style.setProperty("border-color", oe)
													: ee.style.removeProperty("border-color")),
											ae !== le._v$4 && (0, C.className)(_, (le._v$4 = ae)),
											le
										);
									},
									{ _v$3: void 0, _v$4: void 0 },
								),
								K
							);
						})()
					);
				}
				function q(V) {
					const G = (0, h.$odc)();
					(0, a.createEffect)(() => {
						const J = (W) => {
							W && (V.closePopup(), V.error.rerun());
						};
						G.cursorAuthenticationService.addLoginChangedListener(J),
							(0, a.onCleanup)(() => {
								G.cursorAuthenticationService.removeLoginChangedListener(J);
							});
					});
					const K = (0, a.createMemo)(() => {
						switch (V.error.error) {
							case f.ErrorDetails_Error.NOT_LOGGED_IN:
								return "To avoid abuse on our backend, we ask that you login to use the AI features";
							case f.ErrorDetails_Error.AGENT_REQUIRES_LOGIN:
								return "As a safety measure for our users, please login to use AI agents.";
							default:
								return;
						}
					});
					return (() => {
						const J = $();
						return (
							(0, r.insert)(
								J,
								(0, u.createComponent)(s.$3Zc, {
									get message() {
										return K();
									},
								}),
							),
							J
						);
					})();
				}
			},
		),
		