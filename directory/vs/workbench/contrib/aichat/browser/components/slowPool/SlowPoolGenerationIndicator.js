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
import '../../../../controlCommon/browser/solid.js';
import '../../../../../../base/common/uri.js';
import '../../../../../../platform/reactivestorage/common/reactiveStorageTypes.js';
import '../Utils.js';
import '../../../../../../base/common/themables.js';
import '../../../../../../base/common/codicons.js';
define(
			de[863],
			he([1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 36, 9, 134, 242, 26, 14]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/,
 C /*web*/,
 d /*web*/,
 m /*web*/,
 r /*solid*/,
 u /*solid*/,
 a /*uri*/,
 h /*reactiveStorageTypes*/,
 c /*Utils*/,
 n /*themables*/,
 g /*codicons*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$k_b = e.$j_b = e.$i_b = e.$h_b = void 0);
				const p = (0, t.template)('<span class="infotext">'),
					o = (0, t.template)("<span>Increase hard limit."),
					f = (0, t.template)(
						"<span>Enable usage-based pricing for unlimited fast requests",
					),
					b = (0, t.template)(
						'<div><div><span class="slow-gen-info-icon"><span></span></span><span>Using slow request</span></div><span></span><span>',
					),
					s = (0, t.template)(
						"<div><span>Slow request<span></span><span>(<!>)</span><span>Skip the wait.</span></span><span>",
					),
					l = (0, t.template)('<span class="slow-gen-info-icon"><span>'),
					y = (0, t.template)("<span>Using slow request"),
					$ = (0, t.template)(
						"<span>usage-based pricing for unlimited fast requests",
					),
					v = (0, t.template)("<span>"),
					S = (0, t.template)("<span>here"),
					I = (0, t.template)("<div><span>Slow request, "),
					T = (0, t.template)("<div>"),
					P = (0, t.template)("<span>usage-based pricing"),
					k = (0, t.template)("<span>Upgrade to Pro"),
					L = (0, t.template)("<span>fast requests"),
					D = (R) => {
						const O = (0, u.$odc)(),
							B = O.cursorAuthenticationService.membershipType(),
							U = (0, r.createMemo)(() => !(R.hideDotsLoading ?? !1)),
							[z, F] = (0, r.createSignal)(!1),
							x = (0, r.createMemo)(
								() =>
									R.queuePositionResponse !== void 0 &&
									(R.queuePositionResponse.position !== -1 ||
										R.queuePositionResponse.secondsLeftToWait !== void 0 ||
										R.queuePositionResponse.newQueuePosition !== void 0),
							);
						let H;
						const q = (0, r.createMemo)(
							() => R.queuePositionResponse !== void 0,
						);
						(0, r.createEffect)(() => {
							const K = q();
							(0, e.$j_b)(O)
								.then(
									({
										usageBasedPremiumRequestsEnabled: J,
										isUsagePricingEnabled: W,
									}) => {
										F(J),
											O.reactiveStorageService.setApplicationUserPersistentStorage(
												"aiSettings",
												{ isUsagePricingEnabled: W },
											);
									},
								)
								.catch((J) => {
									console.error(J);
								});
						});
						const V = () => {
								R.setIsUpsellingUsageBasedPricing?.(!0);
							},
							G = async () => {
								R.setIsUpsellingHardLimit?.(!0);
							};
						return (0, d.createComponent)(r.Show, {
							get when() {
								return x();
							},
							get fallback() {
								return (0, d.createComponent)(r.Show, {
									get when() {
										return U() && R.isLoading;
									},
									get children() {
										const K = T();
										return (
											K.style.setProperty(
												"color",
												"var(--vscode-input-placeholderForeground)",
											),
											(0, C.insert)(
												K,
												(0, d.createComponent)(r.Show, {
													get when() {
														return R.statusMessages?.at(0);
													},
													children: (J) =>
														(() => {
															const W = v();
															return (
																W.style.setProperty("font-size", "10px"),
																(0, C.insert)(W, J),
																W
															);
														})(),
												}),
												null,
											),
											(0, C.insert)(
												K,
												(0, d.createComponent)(c.$C$b, { show: !0 }),
												null,
											),
											K
										);
									},
								});
							},
							get children() {
								return (0, d.createComponent)(r.Switch, {
									get children() {
										return [
											(0, d.createComponent)(r.Match, {
												get when() {
													return (
														R.queuePositionResponse?.secondsLeftToWait !==
															void 0 ||
														R.queuePositionResponse?.newQueuePosition !== void 0
													);
												},
												get children() {
													return [
														(0, d.createComponent)(r.Show, {
															get when() {
																return !R.conciseMessage;
															},
															get children() {
																const K = b(),
																	J = K.firstChild,
																	W = J.firstChild,
																	X = W.firstChild,
																	Y = W.nextSibling,
																	ie = Y.firstChild,
																	ne = J.nextSibling,
																	ee = ne.nextSibling;
																return (
																	K.style.setProperty("display", "flex"),
																	K.style.setProperty(
																		"flex-direction",
																		"column",
																	),
																	K.style.setProperty("align-items", "left"),
																	K.style.setProperty("gap", "0.25rem"),
																	J.style.setProperty("display", "flex"),
																	J.style.setProperty("flex-direction", "row"),
																	J.style.setProperty("align-items", "center"),
																	J.style.setProperty("gap", "0.25rem"),
																	W.style.setProperty("font-size", "0.8rem"),
																	W.style.setProperty("height", "1rem"),
																	W.style.setProperty("max-width", "100%"),
																	(0, C.insert)(
																		W,
																		(0, d.createComponent)(r.Show, {
																			get when() {
																				return B === h.MembershipType.FREE;
																			},
																			get children() {
																				const _ = p();
																				return (
																					(0, C.insert)(
																						_,
																						(0, d.createComponent)(r.Show, {
																							get when() {
																								return R.spaceBelow !== !1;
																							},
																							get fallback() {
																								return "Consider upgrading to get fast access.";
																							},
																							children:
																								"During times of high demand, free users are given slower requests. Consider upgrading to get fast access.",
																						}),
																					),
																					_
																				);
																			},
																		}),
																		null,
																	),
																	(0, C.insert)(
																		W,
																		(0, d.createComponent)(r.Show, {
																			get when() {
																				return B !== h.MembershipType.FREE;
																			},
																			get children() {
																				const _ = p();
																				return (
																					(0, C.insert)(
																						_,
																						(0, d.createComponent)(r.Show, {
																							get when() {
																								return R.spaceBelow !== !1;
																							},
																							get fallback() {
																								return "You have reached your included limit.";
																							},
																							children:
																								"You have reached your included limit, so subsequent requests will be slow. You can get more fast requests with usage-based pricing.",
																						}),
																					),
																					_
																				);
																			},
																		}),
																		null,
																	),
																	(0, C.insert)(
																		Y,
																		(() => {
																			const _ = (0, m.memo)(() => !R.isLoading);
																			return () => _() && ". ";
																		})(),
																		null,
																	),
																	(0, C.insert)(
																		J,
																		(0, d.createComponent)(r.Show, {
																			get when() {
																				return R.isLoading;
																			},
																			get children() {
																				return (0, d.createComponent)(c.$C$b, {
																					get show() {
																						return U();
																					},
																				});
																			},
																		}),
																		null,
																	),
																	ne.style.setProperty("opacity", "0.75"),
																	(0, C.insert)(
																		ne,
																		(0, d.createComponent)(r.Show, {
																			get when() {
																				return R.isLoading;
																			},
																			get children() {
																				return [
																					(0, d.createComponent)(r.Show, {
																						get when() {
																							return (
																								R.queuePositionResponse
																									?.secondsLeftToWait !== void 0
																							);
																						},
																						get children() {
																							return [
																								"Wait time: approximately",
																								" ",
																								(0, m.memo)(
																									() =>
																										R.queuePositionResponse
																											?.secondsLeftToWait,
																								),
																								" ",
																								"second",
																								(0, m.memo)(() =>
																									R.queuePositionResponse
																										?.secondsLeftToWait !==
																										void 0 &&
																									R.queuePositionResponse
																										?.secondsLeftToWait !== 1
																										? "s"
																										: "",
																								),
																								".",
																								" ",
																							];
																						},
																					}),
																					(0, d.createComponent)(r.Show, {
																						get when() {
																							return (
																								R.queuePositionResponse
																									?.newQueuePosition !== void 0
																							);
																						},
																						get children() {
																							return [
																								"Queue position:",
																								" ",
																								(0, m.memo)(
																									() =>
																										R.queuePositionResponse
																											?.newQueuePosition,
																								),
																								".",
																								" ",
																							];
																						},
																					}),
																				];
																			},
																		}),
																	),
																	ee.style.setProperty("opacity", "0.75"),
																	(0, C.insert)(
																		ee,
																		(0, d.createComponent)(r.Switch, {
																			get children() {
																				return [
																					(0, d.createComponent)(r.Match, {
																						get when() {
																							return R.queuePositionResponse
																								?.hitHardLimit;
																						},
																						get children() {
																							return [
																								"Monthly hard limit reached.",
																								" ",
																								(() => {
																									const _ = o();
																									return (
																										_.addEventListener(
																											"click",
																											() => {
																												O.reactiveStorageService.setNonPersistentStorage(
																													"showUsageBasedPricingModal",
																													R
																														.queuePositionResponse
																														?.usageEventDetails ??
																														"justshow",
																												);
																											},
																										),
																										_.style.setProperty(
																											"display",
																											"inline",
																										),
																										_.style.setProperty(
																											"color",
																											"var(--vscode-textLink-foreground)",
																										),
																										_.style.setProperty(
																											"cursor",
																											"pointer",
																										),
																										_
																									);
																								})(),
																							];
																						},
																					}),
																					(0, d.createComponent)(r.Match, {
																						get when() {
																							return R.queuePositionResponse
																								?.couldEnableUsageBasedPricingToSkip;
																						},
																						get children() {
																							const _ = f();
																							return (
																								_.addEventListener("click", V),
																								_.style.setProperty(
																									"display",
																									"inline",
																								),
																								_.style.setProperty(
																									"color",
																									"var(--vscode-textLink-foreground)",
																								),
																								_.style.setProperty(
																									"cursor",
																									"pointer",
																								),
																								_
																							);
																						},
																					}),
																					(0, d.createComponent)(r.Match, {
																						get when() {
																							return R.queuePositionResponse
																								?.customLink;
																						},
																						children: (_) =>
																							(() => {
																								const te = v();
																								return (
																									te.addEventListener(
																										"click",
																										() => {
																											try {
																												let Q = a.URI.parse(
																													_().address,
																												);
																												O.openerService.open(
																													Q,
																													{
																														fromUserGesture: !0,
																													},
																												);
																											} catch (Q) {
																												console.error(
																													"error in slow pool component",
																													Q,
																												);
																											}
																										},
																									),
																									te.style.setProperty(
																										"display",
																										"inline",
																									),
																									te.style.setProperty(
																										"color",
																										"var(--vscode-textLink-foreground)",
																									),
																									te.style.setProperty(
																										"cursor",
																										"pointer",
																									),
																									(0, C.insert)(
																										te,
																										() => _().message,
																									),
																									te
																								);
																							})(),
																					}),
																				];
																			},
																		}),
																	),
																	(0, E.effect)(
																		(_) => {
																			const te =
																					R.spaceBelow === !1
																						? "nowrap"
																						: void 0,
																				Q = n.ThemeIcon.asClassName(g.$ak.info);
																			return (
																				te !== _._v$ &&
																					((_._v$ = te) != null
																						? W.style.setProperty(
																								"white-space",
																								te,
																							)
																						: W.style.removeProperty(
																								"white-space",
																							)),
																				Q !== _._v$2 &&
																					(0, w.className)(X, (_._v$2 = Q)),
																				_
																			);
																		},
																		{ _v$: void 0, _v$2: void 0 },
																	),
																	K
																);
															},
														}),
														(0, d.createComponent)(r.Show, {
															get when() {
																return R.conciseMessage;
															},
															get children() {
																const K = s(),
																	J = K.firstChild,
																	W = J.firstChild,
																	X = W.nextSibling,
																	Y = X.nextSibling,
																	ie = Y.firstChild,
																	ne = ie.nextSibling,
																	ee = ne.nextSibling,
																	_ = Y.nextSibling;
																return (
																	K.style.setProperty("display", "flex"),
																	K.style.setProperty(
																		"flex-direction",
																		"column",
																	),
																	X.style.setProperty("width", "15px"),
																	X.style.setProperty(
																		"display",
																		"inline-block",
																	),
																	(0, C.insert)(
																		X,
																		(0, d.createComponent)(c.$C$b, {
																			show: !0,
																		}),
																	),
																	Y.style.setProperty(
																		"display",
																		"inline-block",
																	),
																	(0, C.insert)(
																		Y,
																		() =>
																			R.queuePositionResponse
																				?.secondsLeftToWait ??
																			R.queuePositionResponse?.newQueuePosition,
																		ne,
																	),
																	_.addEventListener("click", () => {
																		O.reactiveStorageService.setNonPersistentStorage(
																			"showUsageBasedPricingModal",
																			R.queuePositionResponse
																				?.usageEventDetails ?? "justshow",
																		);
																	}),
																	_.style.setProperty("display", "inline"),
																	_.style.setProperty(
																		"color",
																		"var(--vscode-textLink-foreground)",
																	),
																	_.style.setProperty("cursor", "pointer"),
																	(0, E.effect)(() =>
																		`${String(R.queuePositionResponse?.secondsLeftToWait ?? R.queuePositionResponse?.newQueuePosition).length * 10 + 10}px` !=
																		null
																			? Y.style.setProperty(
																					"width",
																					`${String(R.queuePositionResponse?.secondsLeftToWait ?? R.queuePositionResponse?.newQueuePosition).length * 10 + 10}px`,
																				)
																			: Y.style.removeProperty("width"),
																	),
																	K
																);
															},
														}),
													];
												},
											}),
											(0, d.createComponent)(r.Match, {
												when: !0,
												get children() {
													const K = T();
													return (
														K.style.setProperty("display", "flex"),
														K.style.setProperty("flex-direction", "row"),
														K.style.setProperty("align-items", "center"),
														K.style.setProperty("gap", "0.25rem"),
														(0, C.insert)(
															K,
															(0, d.createComponent)(r.Show, {
																get when() {
																	return !R.conciseMessage;
																},
																get children() {
																	return [
																		(() => {
																			const J = l(),
																				W = J.firstChild;
																			return (
																				J.style.setProperty(
																					"font-size",
																					"0.8rem",
																				),
																				J.style.setProperty("height", "1rem"),
																				J.style.setProperty(
																					"max-width",
																					"100%",
																				),
																				(0, C.insert)(
																					J,
																					(0, d.createComponent)(r.Show, {
																						get when() {
																							return (
																								B === h.MembershipType.FREE
																							);
																						},
																						get children() {
																							const X = p();
																							return (
																								(0, C.insert)(
																									X,
																									(0, d.createComponent)(
																										r.Show,
																										{
																											get when() {
																												return (
																													R.spaceBelow !== !1
																												);
																											},
																											get fallback() {
																												return "Consider upgrading to get fast access.";
																											},
																											children:
																												"During times of high demand, free users are given slower access to premium models. Consider upgrading to get fast access.",
																										},
																									),
																								),
																								X
																							);
																						},
																					}),
																					null,
																				),
																				(0, C.insert)(
																					J,
																					(0, d.createComponent)(r.Show, {
																						get when() {
																							return (
																								B !== h.MembershipType.FREE
																							);
																						},
																						get children() {
																							const X = p();
																							return (
																								(0, C.insert)(
																									X,
																									(0, d.createComponent)(
																										r.Show,
																										{
																											get when() {
																												return (
																													R.spaceBelow !== !1
																												);
																											},
																											get fallback() {
																												return "Your account is above its fast premium model access quota for the month.";
																											},
																											children:
																												"Your account is above its fast premium model (GPT-4/GPT-4o/Claude 3.5 Sonnet) request quota for the month. During times of high demand, requests will be delayed.",
																										},
																									),
																								),
																								X
																							);
																						},
																					}),
																					null,
																				),
																				(0, E.effect)(
																					(X) => {
																						const Y =
																								R.spaceBelow === !1
																									? "nowrap"
																									: void 0,
																							ie = n.ThemeIcon.asClassName(
																								g.$ak.info,
																							);
																						return (
																							Y !== X._v$3 &&
																								((X._v$3 = Y) != null
																									? J.style.setProperty(
																											"white-space",
																											Y,
																										)
																									: J.style.removeProperty(
																											"white-space",
																										)),
																							ie !== X._v$4 &&
																								(0, w.className)(
																									W,
																									(X._v$4 = ie),
																								),
																							X
																						);
																					},
																					{ _v$3: void 0, _v$4: void 0 },
																				),
																				J
																			);
																		})(),
																		(() => {
																			const J = y(),
																				W = J.firstChild;
																			return (
																				(0, C.insert)(
																					J,
																					(() => {
																						const X = (0, m.memo)(
																							() => !R.isLoading,
																						);
																						return () => X() && ". ";
																					})(),
																					null,
																				),
																				J
																			);
																		})(),
																		(() => {
																			const J = v();
																			return (
																				J.style.setProperty("opacity", "0.75"),
																				(0, C.insert)(
																					J,
																					(0, d.createComponent)(r.Show, {
																						get when() {
																							return (
																								R.isLoading &&
																								R.queuePositionResponse
																									?.position !== -1
																							);
																						},
																						get children() {
																							return [
																								"Position ",
																								(0, m.memo)(
																									() =>
																										R.queuePositionResponse
																											?.position,
																								),
																								".",
																								" ",
																							];
																						},
																					}),
																					null,
																				),
																				(0, C.insert)(
																					J,
																					(0, d.createComponent)(r.Show, {
																						get when() {
																							return B === h.MembershipType.PRO;
																						},
																						get fallback() {
																							return (0, d.createComponent)(
																								r.Show,
																								{
																									get when() {
																										return (
																											B ===
																											h.MembershipType
																												.ENTERPRISE
																										);
																									},
																									get fallback() {
																										return [
																											(() => {
																												const W = k();
																												return (
																													(0,
																													i.addEventListener)(
																														W,
																														"click",
																														O
																															.cursorAuthenticationService
																															.settings,
																													),
																													W.style.setProperty(
																														"display",
																														"inline",
																													),
																													W.style.setProperty(
																														"color",
																														"var(--vscode-textLink-foreground)",
																													),
																													W.style.setProperty(
																														"cursor",
																														"pointer",
																													),
																													W
																												);
																											})(),
																											" ",
																											"to get fast access.",
																										];
																									},
																									get children() {
																										return (0,
																										d.createComponent)(r.Show, {
																											get when() {
																												return z();
																											},
																											get fallback() {
																												return [
																													"Add fast requests",
																													" ",
																													(() => {
																														const W = S();
																														return (
																															(0,
																															i.addEventListener)(
																																W,
																																"click",
																																O
																																	.cursorAuthenticationService
																																	.settings,
																															),
																															W.style.setProperty(
																																"display",
																																"inline",
																															),
																															W.style.setProperty(
																																"color",
																																"var(--vscode-textLink-foreground)",
																															),
																															W.style.setProperty(
																																"cursor",
																																"pointer",
																															),
																															W
																														);
																													})(),
																													".",
																												];
																											},
																											get children() {
																												return [
																													"Enable",
																													" ",
																													(() => {
																														const W = P();
																														return (
																															W.addEventListener(
																																"click",
																																V,
																															),
																															W.style.setProperty(
																																"display",
																																"inline",
																															),
																															W.style.setProperty(
																																"color",
																																"var(--vscode-textLink-foreground)",
																															),
																															W.style.setProperty(
																																"cursor",
																																"pointer",
																															),
																															W
																														);
																													})(),
																												];
																											},
																										});
																									},
																								},
																							);
																						},
																						get children() {
																							return (0, d.createComponent)(
																								r.Show,
																								{
																									get when() {
																										return z();
																									},
																									get fallback() {
																										return [
																											"If you'd like, you can add more",
																											" ",
																											(() => {
																												const W = L();
																												return (
																													W.addEventListener(
																														"click",
																														() => {
																															R.setIsUpsellFastRequestsShowing(
																																!0,
																															);
																														},
																													),
																													W.style.setProperty(
																														"display",
																														"inline",
																													),
																													W.style.setProperty(
																														"color",
																														"var(--vscode-textLink-foreground)",
																													),
																													W.style.setProperty(
																														"cursor",
																														"pointer",
																													),
																													W
																												);
																											})(),
																											".",
																										];
																									},
																									get children() {
																										return [
																											"If you'd like, you can enable",
																											" ",
																											(() => {
																												const W = $();
																												return (
																													W.addEventListener(
																														"click",
																														V,
																													),
																													W.style.setProperty(
																														"display",
																														"inline",
																													),
																													W.style.setProperty(
																														"color",
																														"var(--vscode-textLink-foreground)",
																													),
																													W.style.setProperty(
																														"cursor",
																														"pointer",
																													),
																													W
																												);
																											})(),
																											".",
																										];
																									},
																								},
																							);
																						},
																					}),
																					null,
																				),
																				J
																			);
																		})(),
																		(0, d.createComponent)(r.Show, {
																			get when() {
																				return R.isLoading;
																			},
																			get children() {
																				return (0, d.createComponent)(c.$C$b, {
																					get show() {
																						return U();
																					},
																				});
																			},
																		}),
																	];
																},
															}),
															null,
														),
														(0, C.insert)(
															K,
															(0, d.createComponent)(r.Show, {
																get when() {
																	return R.conciseMessage;
																},
																get children() {
																	const J = I(),
																		W = J.firstChild,
																		X = W.firstChild;
																	return (
																		(0, C.insert)(
																			W,
																			(0, d.createComponent)(r.Show, {
																				get when() {
																					return B === h.MembershipType.PRO;
																				},
																				get fallback() {
																					return (0, d.createComponent)(
																						r.Show,
																						{
																							get when() {
																								return (
																									B ===
																									h.MembershipType.ENTERPRISE
																								);
																							},
																							get fallback() {
																								return [
																									"upgrade",
																									" ",
																									(() => {
																										const Y = S();
																										return (
																											(0, i.addEventListener)(
																												Y,
																												"click",
																												O
																													.cursorAuthenticationService
																													.settings,
																											),
																											Y.style.setProperty(
																												"display",
																												"inline",
																											),
																											Y.style.setProperty(
																												"color",
																												"var(--vscode-textLink-foreground)",
																											),
																											Y.style.setProperty(
																												"cursor",
																												"pointer",
																											),
																											Y
																										);
																									})(),
																									" ",
																								];
																							},
																							get children() {
																								return (0, d.createComponent)(
																									r.Show,
																									{
																										get when() {
																											return z();
																										},
																										get fallback() {
																											return [
																												"add fast requests",
																												" ",
																												(() => {
																													const Y = S();
																													return (
																														(0,
																														i.addEventListener)(
																															Y,
																															"click",
																															O
																																.cursorAuthenticationService
																																.settings,
																														),
																														Y.style.setProperty(
																															"display",
																															"inline",
																														),
																														Y.style.setProperty(
																															"color",
																															"var(--vscode-textLink-foreground)",
																														),
																														Y.style.setProperty(
																															"cursor",
																															"pointer",
																														),
																														Y
																													);
																												})(),
																												".",
																											];
																										},
																										get children() {
																											return [
																												"get fast access",
																												" ",
																												(() => {
																													const Y = S();
																													return (
																														Y.addEventListener(
																															"click",
																															V,
																														),
																														Y.style.setProperty(
																															"display",
																															"inline",
																														),
																														Y.style.setProperty(
																															"color",
																															"var(--vscode-textLink-foreground)",
																														),
																														Y.style.setProperty(
																															"cursor",
																															"pointer",
																														),
																														Y
																													);
																												})(),
																											];
																										},
																									},
																								);
																							},
																						},
																					);
																				},
																				get children() {
																					return (0, d.createComponent)(
																						r.Show,
																						{
																							get when() {
																								return z();
																							},
																							get fallback() {
																								return [
																									"add",
																									" ",
																									(() => {
																										const Y = L();
																										return (
																											Y.addEventListener(
																												"click",
																												() => {
																													R.setIsUpsellFastRequestsShowing(
																														!0,
																													);
																												},
																											),
																											Y.style.setProperty(
																												"display",
																												"inline",
																											),
																											Y.style.setProperty(
																												"color",
																												"var(--vscode-textLink-foreground)",
																											),
																											Y.style.setProperty(
																												"cursor",
																												"pointer",
																											),
																											Y
																										);
																									})(),
																									".",
																								];
																							},
																							get children() {
																								return [
																									"get fast access",
																									" ",
																									(() => {
																										const Y = S();
																										return (
																											Y.addEventListener(
																												"click",
																												() => {
																													O
																														.reactiveStorageService
																														.applicationUserPersistentStorage
																														.aiSettings
																														.isUsagePricingEnabled
																														? ((0, e.$k_b)(O),
																															G())
																														: V();
																												},
																											),
																											Y.style.setProperty(
																												"display",
																												"inline",
																											),
																											Y.style.setProperty(
																												"color",
																												"var(--vscode-textLink-foreground)",
																											),
																											Y.style.setProperty(
																												"cursor",
																												"pointer",
																											),
																											Y
																										);
																									})(),
																								];
																							},
																						},
																					);
																				},
																			}),
																			null,
																		),
																		(0, C.insert)(
																			J,
																			(0, d.createComponent)(c.$C$b, {
																				show: !0,
																			}),
																			null,
																		),
																		J
																	);
																},
															}),
															null,
														),
														K
													);
												},
											}),
										];
									},
								});
							},
						});
					};
				e.$h_b = D;
				const M = async (R) => {
					const { isUsagePricingEnabled: O } = await (0, e.$j_b)(R);
					R.reactiveStorageService.setApplicationUserPersistentStorage(
						"aiSettings",
						{ isUsagePricingEnabled: O },
					);
				};
				e.$i_b = M;
				const N = async (R) => {
					try {
						const O = await R.cursorAuthenticationService.dashboardClient(),
							B =
								R.cursorAuthenticationService.membershipType() ===
								h.MembershipType.ENTERPRISE
									? R.reactiveStorageService.applicationUserPersistentStorage
											.aiSettings.teamIds
									: [],
							U = await O.getUsageBasedPremiumRequests({ teamId: B?.at(0) });
						return (
							await (0, e.$k_b)(R),
							{
								usageBasedPremiumRequestsEnabled: !0,
								isUsagePricingEnabled: U.usageBasedPremiumRequests,
							}
						);
					} catch {
						return {
							usageBasedPremiumRequestsEnabled: !1,
							isUsagePricingEnabled: !1,
						};
					}
				};
				e.$j_b = N;
				const A = async (R) => {
					const O = await R.cursorAuthenticationService.dashboardClient(),
						B =
							R.cursorAuthenticationService.membershipType() ===
							h.MembershipType.ENTERPRISE
								? R.reactiveStorageService.applicationUserPersistentStorage
										.aiSettings.teamIds
								: [],
						U = await O.getHardLimit({ teamId: B?.at(0) });
					return (
						R.reactiveStorageService.setApplicationUserPersistentStorage(
							"aiSettings",
							{ usageHardLimit: U.hardLimit },
						),
						U.hardLimit
					);
				};
				e.$k_b = A;
			},
		)
