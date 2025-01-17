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
import '../../../../../../external/solid/solid.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/themables.js';
import '../../../aichat/browser/utils.js';
import '../../../ui/browser/scrollableDiv.js';
import '../../../controlCommon/browser/solid.js';
import '../../../../../base/browser/dom.js';
import '../hooks/useAutoVerticalScroll.js';
import '../../../ui/browser/scrollableDiv.js';
import '../../../../../base/common/uuid.js';
import '../utils.js';
import '../hooks/useComposerDataHandle.js';
import '../../../ui/browser/badge/badge.js';
import '../../../../../base/common/fuzzyScorer.js';
import '../../../ui/browser/highlightedLabel/HighlightedLabel.js';
import '../../../../../platform/tracing/common/tracing.js';
import '../hooks/useComposerChatStatus.js';
import './ComposerGeneralStatusIndicator.js';
import '../../../ui/browser/simpleButton/simpleButton.js';
import '../../../ui/browser/hooks/useKeyboardShortcut.js';
import '../constants.js';
import '../../../../../css!vs/workbench/contrib/composer/browser/components/ComposerHistory.js';
define(
			de[4278],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 13, 14, 26, 397, 135, 36, 7, 794, 135, 47,
				246, 177, 564, 322, 818, 216, 858, 565, 147, 385, 169, 2411,
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
					(e.ComposerHistory = q);
				const D = (0, t.template)(
						'<div class="composer-history-search"><input type="text" placeholder="Search for past composers..." class="composer-history-input">',
					),
					M = (0, t.template)(
						'<div class="composer-history-search-no-results">No composers found',
					),
					N = (0, t.template)(
						'<div tabindex="0" class="previous-composers-list">',
					),
					A = (0, t.template)("<div>"),
					R = (0, t.template)('<div class="chat-timestamp">'),
					O = (0, t.template)("<input autofocus>"),
					B = (0, t.template)("<div><span></span><span>"),
					U = (0, t.template)(
						'<div class="composer-tabs-item-container"><div class="composer-tabs-item">',
					),
					z = (0, t.template)('<span class="composer-title">'),
					F = (0, t.template)(
						'<div class="composer-history-pane"><div class="composer-history-header"><span>Chats & Composers</span><div><span class="composer-button-secondary"><span>',
					),
					x = (0, t.template)('<div class="composer-history-pane-wrapper">');
				function H() {
					var V =
							typeof SuppressedError == "function"
								? SuppressedError
								: function (W, X) {
										var Y = Error();
										return (
											(Y.name = "SuppressedError"),
											(Y.error = W),
											(Y.suppressed = X),
											Y
										);
									},
						G = {},
						K = [];
					function J(W, X) {
						if (X != null) {
							if (Object(X) !== X)
								throw new TypeError(
									"using declarations can only be used with objects, functions, null, or undefined.",
								);
							if (W)
								var Y =
									X[Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose")];
							if (
								Y === void 0 &&
								((Y = X[Symbol.dispose || Symbol.for("Symbol.dispose")]), W)
							)
								var ie = Y;
							if (typeof Y != "function")
								throw new TypeError("Object is not disposable.");
							ie &&
								(Y = function () {
									try {
										ie.call(X);
									} catch (ne) {
										return Promise.reject(ne);
									}
								}),
								K.push({ v: X, d: Y, a: W });
						} else W && K.push({ d: X, a: W });
						return X;
					}
					return {
						e: G,
						u: J.bind(null, !1),
						a: J.bind(null, !0),
						d: function () {
							var W,
								X = this.e,
								Y = 0;
							function ie() {
								for (; (W = K.pop()); )
									try {
										if (!W.a && Y === 1)
											return (Y = 0), K.push(W), Promise.resolve().then(ie);
										if (W.d) {
											var ee = W.d.call(W.v);
											if (W.a)
												return (Y |= 2), Promise.resolve(ee).then(ie, ne);
										} else Y |= 1;
									} catch (_) {
										return ne(_);
									}
								if (Y === 1)
									return X !== G ? Promise.reject(X) : Promise.resolve();
								if (X !== G) throw X;
							}
							function ne(ee) {
								return (X = X !== G ? new V(ee, X) : ee), ie();
							}
							return ie();
						},
					};
				}
				function q(V) {
					try {
						var G = H();
						const K = G.u((0, S.span)("ComposerHistory")),
							J = (0, g.$odc)(),
							{ composerDataService: W } = J,
							{
								composerDataHandle: X,
								currentComposer: Y,
								updateCurrentComposer: ie,
								forceMode: ne,
							} = (0, l.useComposerDataHandle)(() => V.composerDataHandle),
							ee = (0, u.createMemo)(() =>
								J.composerViewsService.getComposerLocation(X().data.composerId),
							),
							_ = (0, b.$9g)(),
							[te, Q] = (0, u.createSignal)(""),
							[Z, se] = (0, u.createSignal)(void 0),
							[re, le] = (0, u.createSignal)(void 0),
							[oe, ae] = (0, u.createSignal)(-1),
							pe = () => {
								J.reactiveStorageService.setNonPersistentStorage(
									"composerState",
									ne() === "chat"
										? "shouldShowChatHistory"
										: "shouldShowComposerHistory",
									!1,
								);
							},
							$e = (0, u.createMemo)(() =>
								ne() === "chat"
									? J.reactiveStorageService.nonPersistentStorage.composerState
											.shouldShowChatHistory
									: J.reactiveStorageService.nonPersistentStorage.composerState
											.shouldShowComposerHistory,
							),
							ye = (0, u.createMemo)(() => {
								const Oe = J.composerDataService.allComposersData.allComposers;
								return (0, s.sortComposers)(Oe);
							}),
							ue = (0, u.createMemo)(() => {
								const Oe = { chat: [], edit: [] };
								return (
									ye().forEach((xe) => {
										Oe[J.composerDataService.getComposerForceMode(xe)].push(xe);
									}),
									Oe
								);
							}),
							fe = (0, u.createMemo)(() => {
								const Oe = (0, $.$hs)(te().toLowerCase());
								if (Oe.normalized === "")
									return ye().map((Ke) => ({
										composer: Ke,
										score: Number.MAX_SAFE_INTEGER,
										labelMatch: [],
									}));
								const xe = {
										getItemLabel: (Ke) => Ke.name || "",
										getItemDescription: () => {},
										getItemPath: () => {},
									},
									He = {};
								return ye()
									.map((Ke) => {
										const Je = (0, $.$fs)(Ke, Oe, !0, xe, He);
										return {
											composer: Ke,
											score: Je.score || 0,
											labelMatch: Je.labelMatch || [],
										};
									})
									.filter(({ score: Ke }) => Ke > 0)
									.sort((Ke, Je) => Je.score - Ke.score);
							}),
							me = (0, u.createMemo)(
								() => V.composerDataHandle.data.composerId,
							);
						(0, u.createEffect)(() => {
							const Oe = pe,
								xe = (He) => {
									$e() &&
										He.key === "Escape" &&
										(J.composerService.focus(me()), Oe());
								};
							(0, p.$Ogb)().document.addEventListener("keydown", xe),
								(0, u.onCleanup)(() =>
									(0, p.$Ogb)().document.removeEventListener("keydown", xe),
								);
						});
						const ve = (Oe = {}) => {
								let xe, He;
								const Ke = (0, f.$y0b)();
								let Je;
								const Te = (Se) => `composer-${Se}-${_}`;
								(0, o.useAutoVerticalScroll)(
									Ke,
									() => Je,
									() => {
										const Se = fe(),
											ke = oe();
										return ke >= 0 && ke < Se.length
											? Te(Se[ke].composer.composerId)
											: "";
									},
									() => [oe()],
									{ paddingToEdge: 6 },
								),
									(0, u.createEffect)(() => {
										const Se = (ke) => {
											if (ke.key === "ArrowUp")
												ke.preventDefault(),
													ae((Ue) => (Ue - 1 + fe().length) % fe().length);
											else if (ke.key === "ArrowDown")
												ke.preventDefault(), ae((Ue) => (Ue + 1) % fe().length);
											else if (ke.key === "Enter")
												if (Z()) {
													if (re()?.trim() === "") return;
													ke.preventDefault(),
														ke.stopImmediatePropagation(),
														Le(Z(), re() ?? ""),
														se(void 0);
												} else {
													ke.preventDefault();
													const Ue = oe();
													Ue !== -1 && ge(fe()[Ue].composer.composerId);
												}
										};
										He?.addEventListener("keydown", Se),
											(0, u.onCleanup)(() =>
												He?.removeEventListener("keydown", Se),
											);
									});
								const Ee = { value: void 0 },
									Ie = (0, k.$5$b)(L.NEW_COMPOSER_CHAT_ACTION_ID),
									Be = (0, k.$5$b)(L.COMPOSER_EDIT_ACTION_ID);
								return (
									(0, u.onMount)(() => {
										if (xe) {
											xe.focus();
											let Se = 0;
											const ke = () => {
												(0, p.$Ogb)().document.activeElement !== xe &&
													Se < 3 &&
													(xe.focus(), Se++, setTimeout(ke, 100));
											};
											setTimeout(ke, 100), Q("");
										}
									}),
									[
										(() => {
											const Se = D(),
												ke = Se.firstChild;
											ke.addEventListener("keydown", (qe) => {
												if (qe.key === "Escape") {
													pe(), J.composerService.focus(me());
													return;
												}
												if (qe.key === "ArrowUp")
													qe.preventDefault(),
														ae((Ae) => (Ae - 1 + fe().length) % fe().length);
												else if (qe.key === "ArrowDown")
													qe.preventDefault(),
														ae((Ae) => (Ae + 1) % fe().length);
												else if (qe.key === "Enter") {
													qe.preventDefault();
													const Ae = oe();
													Ae !== -1 &&
														(ge(fe()[Ae].composer.composerId),
														pe(),
														J.composerService.focus(
															fe()[Ae].composer.composerId,
														));
												}
											}),
												ke.addEventListener("input", (qe) =>
													Q(qe.currentTarget.value),
												);
											const Ue = xe;
											return (
												typeof Ue == "function"
													? (0, r.use)(Ue, ke)
													: (xe = ke),
												ke.style.setProperty("width", "calc(100% - 12px)"),
												ke.style.setProperty("margin", "6px"),
												ke.style.setProperty("padding", "4px 6px"),
												ke.style.setProperty("border-radius", "3px"),
												ke.style.setProperty(
													"background",
													"var(--vscode-input-background)",
												),
												ke.style.setProperty(
													"border",
													"1px solid var(--vscode-commandCenter-activeBorder)",
												),
												ke.style.setProperty(
													"color",
													"var(--vscode-input-foreground)",
												),
												ke.style.setProperty("outline", "none"),
												ke.style.setProperty("font-size", "12px"),
												(0, m.effect)(() =>
													Oe.paddingTop != null
														? Se.style.setProperty("padding-top", Oe.paddingTop)
														: Se.style.removeProperty("padding-top"),
												),
												(0, m.effect)(() => (ke.value = te())),
												Se
											);
										})(),
										(() => {
											const Se = A(),
												ke = Je;
											return (
												typeof ke == "function"
													? (0, r.use)(ke, Se)
													: (Je = Se),
												Se.style.setProperty("overflow", "hidden"),
												Se.style.setProperty("flex-grow", "1"),
												Se.style.setProperty("min-height", "0px"),
												(0, C.insert)(
													Se,
													(0, d.createComponent)(n.$w0b, {
														scrollable: Ke,
														scrollingDirection: "vertical",
														style: { height: "100%" },
														get children() {
															const Ue = N(),
																qe = He;
															return (
																typeof qe == "function"
																	? (0, r.use)(qe, Ue)
																	: (He = Ue),
																Ue.style.setProperty("outline", "none"),
																Ue.style.setProperty("width", "100%"),
																Ue.style.setProperty(
																	"padding-bottom",
																	"0.75rem",
																),
																(0, C.insert)(
																	Ue,
																	(0, d.createComponent)(u.Show, {
																		get when() {
																			return fe().length === 0;
																		},
																		get children() {
																			return M();
																		},
																	}),
																	null,
																),
																(0, C.insert)(
																	Ue,
																	(0, d.createComponent)(u.For, {
																		get each() {
																			return fe();
																		},
																		children: (
																			{ composer: Ae, labelMatch: Me },
																			De,
																		) => {
																			const Re = () =>
																					(0, c.$bgc)(
																						(0, s.getComposerTimestamp)(
																							ye()[De() - 1],
																						),
																					),
																				je = () =>
																					(0, c.$bgc)(
																						(0, s.getComposerTimestamp)(Ae),
																					),
																				Ve = () => je() !== Re(),
																				[Ze, et] = (0, u.createSignal)(!1),
																				rt = (0, u.createMemo)(() =>
																					J.composerDataService.getWeakHandleOptimistic(
																						Ae.composerId,
																					),
																				),
																				ft = (0, u.createMemo)(() => {
																					const nt = rt();
																					return nt
																						? (0, I.useComposerChatStatus)(
																								() => nt,
																							)()
																						: "none";
																				}),
																				bt = (0, u.createMemo)(() =>
																					J.composerDataService.getComposerForceMode(
																						Ae,
																					),
																				);
																			return [
																				(0, d.createComponent)(u.Show, {
																					get when() {
																						return Ve();
																					},
																					get children() {
																						const nt = R();
																						return (0, C.insert)(nt, je), nt;
																					},
																				}),
																				(() => {
																					const nt = U(),
																						lt = nt.firstChild;
																					return (
																						nt.addEventListener(
																							"mouseleave",
																							() => et(!1),
																						),
																						nt.addEventListener(
																							"mouseenter",
																							() => et(!0),
																						),
																						lt.addEventListener(
																							"click",
																							async () => {
																								ge(Ae.composerId), He?.focus();
																							},
																						),
																						(0, C.insert)(
																							lt,
																							(0, d.createComponent)(u.Show, {
																								get when() {
																									return Z() === Ae.composerId;
																								},
																								get fallback() {
																									return (() => {
																										const ct = z();
																										return (
																											ct.style.setProperty(
																												"display",
																												"flex",
																											),
																											ct.style.setProperty(
																												"align-items",
																												"center",
																											),
																											(0, C.insert)(
																												ct,
																												(0, d.createComponent)(
																													v.$tbc,
																													{
																														get text() {
																															return (
																																Ae.name ||
																																(ne() === "chat"
																																	? "New chat"
																																	: "New composer")
																															);
																														},
																														highlights: Me,
																													},
																												),
																												null,
																											),
																											(0, C.insert)(
																												ct,
																												(0, d.createComponent)(
																													u.Show,
																													{
																														get when() {
																															return (
																																ft() ===
																																	"generating" ||
																																ft() ===
																																	"running" ||
																																ft() ===
																																	"applying"
																															);
																														},
																														get children() {
																															return (0,
																															d.createComponent)(
																																T.ComposerGeneralStatusIndicator,
																																{
																																	status:
																																		"applying",
																																	pulse: !0,
																																	style: {
																																		margin:
																																			"4px 6px",
																																	},
																																},
																															);
																														},
																													},
																												),
																												null,
																											),
																											(0, m.effect)(() =>
																												(Ae.name ? 1 : 0.6) !=
																												null
																													? ct.style.setProperty(
																															"opacity",
																															Ae.name ? 1 : 0.6,
																														)
																													: ct.style.removeProperty(
																															"opacity",
																														),
																											),
																											ct
																										);
																									})();
																								},
																								get children() {
																									const ct = O();
																									return (
																										ct.addEventListener(
																											"keydown",
																											(gt) => {
																												gt.key === "Enter" &&
																												gt.isComposing === !1
																													? gt.currentTarget.blur()
																													: gt.key ===
																															"Escape" &&
																														(gt.preventDefault(),
																														gt.stopImmediatePropagation(),
																														se(void 0),
																														le(void 0),
																														He?.focus());
																											},
																										),
																										ct.addEventListener(
																											"blur",
																											async (gt) => {
																												const ht =
																													gt.currentTarget.value.trim();
																												Le(Ae.composerId, ht),
																													se(void 0);
																											},
																										),
																										ct.addEventListener(
																											"click",
																											(gt) => {
																												gt.stopPropagation();
																											},
																										),
																										ct.addEventListener(
																											"focus",
																											(gt) => {
																												gt.currentTarget.select();
																											},
																										),
																										ct.addEventListener(
																											"input",
																											(gt) => {
																												le(
																													gt.currentTarget
																														.value,
																												);
																											},
																										),
																										(0, r.use)(
																											(gt) => (Ee.value = gt),
																											ct,
																										),
																										ct.style.setProperty(
																											"background",
																											"transparent",
																										),
																										ct.style.setProperty(
																											"width",
																											"100%",
																										),
																										ct.style.setProperty(
																											"outline",
																											"none",
																										),
																										ct.style.setProperty(
																											"border",
																											"none",
																										),
																										ct.style.setProperty(
																											"padding",
																											"0px",
																										),
																										(0, m.effect)(
																											() =>
																												(ct.value =
																													re() ?? Ae.name),
																										),
																										ct
																									);
																								},
																							}),
																							null,
																						),
																						(0, C.insert)(
																							lt,
																							(0, d.createComponent)(u.Show, {
																								get when() {
																									return Ze();
																								},
																								get children() {
																									const ct = B(),
																										gt = ct.firstChild,
																										ht = gt.nextSibling;
																									return (
																										ct.style.setProperty(
																											"display",
																											"flex",
																										),
																										ct.style.setProperty(
																											"gap",
																											"4px",
																										),
																										gt.addEventListener(
																											"click",
																											(Rt) => {
																												Rt.stopPropagation(),
																													se(Ae.composerId),
																													le(Ae.name ?? ""),
																													setTimeout(() => {
																														Ee.value?.focus();
																													}, 100);
																											},
																										),
																										gt.style.setProperty(
																											"margin-left",
																											"auto",
																										),
																										gt.style.setProperty(
																											"font-size",
																											"14px",
																										),
																										gt.style.setProperty(
																											"padding",
																											"2px",
																										),
																										ht.addEventListener(
																											"click",
																											(Rt) => {
																												Rt.stopPropagation(),
																													ue()[bt()].length > 1
																														? be(Ae.composerId)
																														: Ce(Ae.composerId);
																											},
																										),
																										ht.style.setProperty(
																											"margin-left",
																											"auto",
																										),
																										ht.style.setProperty(
																											"font-size",
																											"14px",
																										),
																										ht.style.setProperty(
																											"padding",
																											"2px",
																										),
																										(0, m.effect)(
																											(Rt) => {
																												const Nt = [
																														h.ThemeIcon.asClassName(
																															a.$ak.edit,
																														),
																														"composer-tabs-remove-composer-icon",
																														"composer-button-secondary",
																													].join(" "),
																													jt = [
																														h.ThemeIcon.asClassName(
																															ue()[bt()]
																																.length > 1
																																? a.$ak.trash
																																: a.$ak.sync,
																														),
																														"composer-tabs-remove-composer-icon",
																														"composer-button-secondary",
																													].join(" ");
																												return (
																													Nt !== Rt._v$ &&
																														(0, w.className)(
																															gt,
																															(Rt._v$ = Nt),
																														),
																													jt !== Rt._v$2 &&
																														(0, w.className)(
																															ht,
																															(Rt._v$2 = jt),
																														),
																													Rt
																												);
																											},
																											{
																												_v$: void 0,
																												_v$2: void 0,
																											},
																										),
																										ct
																									);
																								},
																							}),
																							null,
																						),
																						(0, C.insert)(
																							lt,
																							(0, d.createComponent)(u.Show, {
																								get when() {
																									return !J
																										.reactiveStorageService
																										.applicationUserPersistentStorage
																										.composerState.unification;
																								},
																								get children() {
																									return (0, d.createComponent)(
																										y.$nac,
																										{
																											get text() {
																												return J.composerDataService.getComposerForceMode(
																													Ae,
																												) === "edit"
																													? "Composer"
																													: "Chat";
																											},
																											type: "subtle",
																											size: "small",
																										},
																									);
																								},
																							}),
																							null,
																						),
																						(0, m.effect)(
																							(ct) => {
																								const gt = Te(Ae.composerId),
																									ht =
																										Ae.composerId ===
																										Y().composerId,
																									Rt = Z() === Ae.composerId,
																									Nt = De() === oe();
																								return (
																									gt !== ct._v$3 &&
																										(0, i.setAttribute)(
																											nt,
																											"id",
																											(ct._v$3 = gt),
																										),
																									ht !== ct._v$4 &&
																										lt.classList.toggle(
																											"selected",
																											(ct._v$4 = ht),
																										),
																									Rt !== ct._v$5 &&
																										lt.classList.toggle(
																											"editing",
																											(ct._v$5 = Rt),
																										),
																									Nt !== ct._v$6 &&
																										lt.classList.toggle(
																											"highlighted",
																											(ct._v$6 = Nt),
																										),
																									ct
																								);
																							},
																							{
																								_v$3: void 0,
																								_v$4: void 0,
																								_v$5: void 0,
																								_v$6: void 0,
																							},
																						),
																						nt
																					);
																				})(),
																			];
																		},
																	}),
																	null,
																),
																Ue
															);
														},
													}),
												),
												(0, m.effect)(() =>
													Oe.listHeight != null
														? Se.style.setProperty("height", Oe.listHeight)
														: Se.style.removeProperty("height"),
												),
												Se
											);
										})(),
										(0, d.createComponent)(u.Show, {
											get when() {
												return V.renderOpenComposerButton;
											},
											get children() {
												const Se = A();
												return (
													Se.style.setProperty("padding", "4px"),
													(0, C.insert)(
														Se,
														(0, d.createComponent)(P.$rdc, {
															get title() {
																return `Open ${Y().forceMode === "chat" ? "chat" : "composer"}`;
															},
															type: "true-secondary",
															style: {
																"font-size": "11px",
																padding: "2px 6px",
															},
															get keyboardShortcut() {
																return (0, E.memo)(
																	() => Y().forceMode === "chat",
																)()
																	? Ie()
																	: Be();
															},
															onClick: () => {
																J.composerService.openComposer(me());
															},
														}),
													),
													Se
												);
											},
										}),
									]
								);
							},
							ge = async (Oe) => {
								await J.composerService.openComposer(Oe);
							},
							be = async (Oe) => {
								await J.composerService.deleteComposer(Oe);
							},
							Ce = async (Oe) => {
								try {
									await J.composerService.resetComposer(Oe);
								} catch (xe) {
									console.error(xe);
								}
							},
							Le = async (Oe, xe) => {
								await J.composerDataService.updateComposerDataAsync(Oe, (He) =>
									He("name", xe),
								);
							};
						let Fe;
						return (0, d.createComponent)(u.Switch, {
							get fallback() {
								return (() => {
									const Oe = A();
									return (
										Oe.style.setProperty("flex", "1"),
										Oe.style.setProperty("overflow", "hidden"),
										Oe.style.setProperty("display", "flex"),
										Oe.style.setProperty("height", "100%"),
										Oe.style.setProperty("flex-direction", "column"),
										(0, C.insert)(Oe, () => ve({ listHeight: "100%" })),
										Oe
									);
								})();
							},
							get children() {
								return (0, d.createComponent)(u.Match, {
									get when() {
										return ee() === "pane";
									},
									get children() {
										const Oe = x(),
											xe = Fe;
										return (
											typeof xe == "function" ? (0, r.use)(xe, Oe) : (Fe = Oe),
											(0, C.insert)(
												Oe,
												(0, d.createComponent)(u.Show, {
													get when() {
														return $e();
													},
													get children() {
														const He = F(),
															Ke = He.firstChild,
															Je = Ke.firstChild,
															Te = Je.nextSibling,
															Ee = Te.firstChild,
															Ie = Ee.firstChild;
														return (
															Je.style.setProperty("padding-left", "0.25rem"),
															Ee.addEventListener("click", () => {
																pe();
															}),
															(0, C.insert)(
																He,
																() => ve({ listHeight: "30vh" }),
																null,
															),
															(0, m.effect)(() =>
																(0, w.className)(
																	Ie,
																	h.ThemeIcon.asClassName(a.$ak.x),
																),
															),
															He
														);
													},
												}),
											),
											Oe
										);
									},
								});
							},
						});
					} catch (K) {
						G.e = K;
					} finally {
						G.d();
					}
				}
			},
		),
		