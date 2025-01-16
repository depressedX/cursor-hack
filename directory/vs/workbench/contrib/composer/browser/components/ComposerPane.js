define(
			de[4413],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 13, 7, 123, 4277, 2013, 4278, 4412, 4288,
				177, 36, 331, 216, 1370, 485, 14, 169, 58, 693, 50, 858, 565, 1125, 663,
				2416,
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
				D,
				M,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerPane = F);
				const N = (0, t.template)("<div>"),
					A = (0, t.template)("<div><div>Composer"),
					R = (0, t.template)('<div class="conversations"><div>'),
					O = (0, t.template)('<div tabindex="0">');
				function B() {
					var x =
							typeof SuppressedError == "function"
								? SuppressedError
								: function (G, K) {
										var J = Error();
										return (
											(J.name = "SuppressedError"),
											(J.error = G),
											(J.suppressed = K),
											J
										);
									},
						H = {},
						q = [];
					function V(G, K) {
						if (K != null) {
							if (Object(K) !== K)
								throw new TypeError(
									"using declarations can only be used with objects, functions, null, or undefined.",
								);
							if (G)
								var J =
									K[Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose")];
							if (
								J === void 0 &&
								((J = K[Symbol.dispose || Symbol.for("Symbol.dispose")]), G)
							)
								var W = J;
							if (typeof J != "function")
								throw new TypeError("Object is not disposable.");
							W &&
								(J = function () {
									try {
										W.call(K);
									} catch (X) {
										return Promise.reject(X);
									}
								}),
								q.push({ v: K, d: J, a: G });
						} else G && q.push({ d: K, a: G });
						return K;
					}
					return {
						e: H,
						u: V.bind(null, !1),
						a: V.bind(null, !0),
						d: function () {
							var G,
								K = this.e,
								J = 0;
							function W() {
								for (; (G = q.pop()); )
									try {
										if (!G.a && J === 1)
											return (J = 0), q.push(G), Promise.resolve().then(W);
										if (G.d) {
											var Y = G.d.call(G.v);
											if (G.a) return (J |= 2), Promise.resolve(Y).then(W, X);
										} else J |= 1;
									} catch (ie) {
										return X(ie);
									}
								if (J === 1)
									return K !== H ? Promise.reject(K) : Promise.resolve();
								if (K !== H) throw K;
							}
							function X(Y) {
								return (K = K !== H ? new x(Y, K) : Y), W();
							}
							return W();
						},
					};
				}
				const U = "border-color 50ms ease-in-out";
				function z(x, H, q, V, G) {
					const K = G.innerWidth - q - S.COMPOSER_BAR_WINDOW_MARGIN,
						J = G.innerHeight - V - S.COMPOSER_BAR_WINDOW_MARGIN;
					return {
						x: (0, D.$Rlb)(S.COMPOSER_BAR_WINDOW_MARGIN, x, K),
						y: (0, D.$Rlb)(S.COMPOSER_BAR_WINDOW_MARGIN, H, J),
					};
				}
				function F(x) {
					try {
						var H = B();
						const q = H.u((0, l.span)("openComposerPane")),
							V = (0, b.$odc)(),
							{ composerDataService: G, composerService: K } = V,
							{
								composerDataHandle: J,
								currentComposer: W,
								forceMode: X,
								updateCurrentComposer: Y,
							} = (0, f.useComposerDataHandle)(() => x.composerDataHandle),
							ie = (0, u.createMemo)(() => W().composerId),
							ne = (0, u.createMemo)(() => K.getInputDelegate(ie())),
							ee = (0, a.$Ogb)(),
							[_, te] = (0, u.createSignal)(!1),
							[Q, Z] = (0, u.createSignal)(!1),
							[se, re] = (0, u.createSignal)(!1),
							[le, oe] = (0, u.createSignal)(void 0),
							[ae, pe] = (0, u.createSignal)(void 0),
							$e = (0, u.createMemo)(() => W()?.currentBubbleId),
							ye = (0, u.createMemo)(() => W()?.editingBubbleId),
							ue = (0, u.createMemo)(() => W()?.tabs),
							fe = (jt) => {
								Y({ tabs: jt });
							},
							me = (0, u.createMemo)(() => W()?.selectedTabIndex),
							ve = (jt) => {
								Y({ selectedTabIndex: jt });
							};
						(0, u.createEffect)(() => {
							me() !== 0 && re(!0);
						});
						const ge = (0, s.$h$b)(h.$wGb, V.themeService),
							be = (0, u.createMemo)(() =>
								W() ? W().conversation.length > 0 : !1,
							);
						let Ce, Le;
						const Fe = (jt) => {
								!ee.getSelection()?.toString() &&
									Ce &&
									Ce === ee.document.activeElement &&
									(ne().focus(), jt.preventDefault());
							},
							Oe = (0, u.createMemo)(
								() =>
									"1px solid " +
									(_() || Q()
										? "var(--vscode-commandCenter-activeBorder)"
										: "var(--vscode-commandCenter-inactiveBorder)"),
							),
							[xe, He] = (0, u.createSignal)(-1);
						(0, u.onMount)(() => {
							if (Ce === void 0) return;
							const jt = (0, a.getWindow)(Ce).document,
								ti = (kt) => {
									!kt.target.closest(".composer-history-pane") &&
										V.composerViewsService.getComposerLocation(
											J().data.composerId,
										) === "pane" &&
										V.reactiveStorageService.setNonPersistentStorage(
											"composerState",
											X() === "chat"
												? "shouldShowChatHistory"
												: "shouldShowComposerHistory",
											!1,
										);
								};
							jt.addEventListener("mousedown", ti),
								(0, u.onCleanup)(() => {
									jt.removeEventListener("mousedown", ti);
								});
						});
						const Ke = (0, u.createMemo)(() => x.location === "bar"),
							Je = (0, u.createMemo)(() =>
								(() => {
									const jt = N();
									return (
										jt.style.setProperty("display", "flex"),
										jt.style.setProperty("justify-content", "center"),
										jt.style.setProperty("align-items", "center"),
										jt.style.setProperty("gap", "2px"),
										(0, m.insert)(
											jt,
											(0, r.createComponent)($.ComposerToolbarSimpleButton, {
												type: "secondary",
												style: {
													width: "18px",
													height: "18px",
													padding: "0px",
													background: "transparent",
												},
												get codicon() {
													return v.$ak.add;
												},
												onMouseDown: (ti) => {
													ti.stopImmediatePropagation();
												},
												class: "composer-bar-control-button",
												onClick: () => {
													V.commandService.executeCommand(I.$GV);
												},
											}),
											null,
										),
										(0, m.insert)(
											jt,
											(0, r.createComponent)($.ComposerToolbarSimpleButton, {
												type: "secondary",
												style: {
													width: "18px",
													height: "18px",
													padding: "0px",
													background: "transparent",
												},
												class: "composer-bar-control-button",
												get codicon() {
													return v.$ak.ellipsis;
												},
												onMouseDown: (ti) => {
													ti.stopImmediatePropagation();
												},
												onClick: (ti) => {
													ti.stopImmediatePropagation(),
														V.contextMenuService.showContextMenu({
															getAnchor: () => ti.target,
															getActions: () => [
																{
																	id: S.SHOW_COMPOSER_HISTORY_ACTION_ID,
																	label: "Show History",
																	tooltip: "Show History",
																	class: "show-composer-history",
																	enabled: !0,
																	run: () => {
																		V.commandService.executeCommand(
																			S.SHOW_COMPOSER_HISTORY_ACTION_ID,
																		);
																	},
																},
																new P.$tj(),
																{
																	id: S.OPEN_COMPOSER_AS_EDITOR_ACTION_ID,
																	label: "Open as Editor",
																	tooltip: "Open as Editor",
																	class: "open-composer-as-editor",
																	enabled: !0,
																	run: () => {
																		V.commandService.executeCommand(
																			S.OPEN_COMPOSER_AS_EDITOR_ACTION_ID,
																		);
																	},
																},
																{
																	id: S.OPEN_COMPOSER_AS_PANE_ACTION_ID,
																	label: "Open as Pane",
																	tooltip: "Open as Pane",
																	enabled: !0,
																	class: "open-composer-as-pane",
																	run: () => {
																		V.commandService.executeCommand(
																			S.OPEN_COMPOSER_AS_PANE_ACTION_ID,
																		);
																	},
																},
																new P.$tj(),
																{
																	id: "reset-composer-position",
																	label: "Reset Position",
																	tooltip: "Reset Composer Position",
																	enabled: !0,
																	class: "reset-composer-position",
																	run: () => {
																		Ae(null);
																	},
																},
																new P.$tj(),
																{
																	id: "open-composer-settings",
																	label: "Open Composer Settings",
																	tooltip: "Open Composer Settings",
																	enabled: !0,
																	class: "open-composer-settings",
																	run: () => {
																		V.commandService.executeCommand(
																			I.$QV,
																			"features",
																			"cursor-settings-chat-composer",
																		);
																	},
																},
																{
																	id: "collapse-composer",
																	label: "Collapse",
																	tooltip: "Collapse Composer",
																	enabled: !0,
																	class: "collapse-composer",
																	run: () => {
																		De(!0);
																	},
																},
															],
														});
												},
											}),
											null,
										),
										(0, m.insert)(
											jt,
											(0, r.createComponent)($.ComposerToolbarSimpleButton, {
												type: "secondary",
												style: {
													width: "18px",
													height: "18px",
													padding: "0px",
													background: "transparent",
												},
												get codicon() {
													return v.$ak.x;
												},
												onMouseDown: (ti) => {
													ti.stopImmediatePropagation();
												},
												class: "composer-bar-control-button",
												onClick: (ti) => {
													K.close(ie());
												},
											}),
											null,
										),
										jt
									);
								})(),
							),
							[Te, Ee] = (0, u.createSignal)(!1),
							[Ie, Be] = (0, u.createSignal)({ x: 0, y: 0 }),
							[Se, ke] = (0, u.createSignal)({ x: 0, y: 0 }),
							Ue = 5,
							qe = (0, u.createMemo)(
								() =>
									V.reactiveStorageService.workspaceUserPersistentStorage
										.composerState?.composerBarPosition,
							),
							Ae = (jt) => {
								V.reactiveStorageService.setWorkspaceUserPersistentStorage(
									"composerState",
									"composerBarPosition",
									jt,
								);
							},
							Me = (0, u.createMemo)(
								() =>
									Ke() &&
									V.reactiveStorageService.workspaceUserPersistentStorage
										.composerState?.isComposerBarChatCollapsed,
							),
							De = (jt) => {
								V.reactiveStorageService.setWorkspaceUserPersistentStorage(
									"composerState",
									"isComposerBarChatCollapsed",
									jt,
								);
							},
							Re = (jt) => {
								if (!jt || !Ce) return null;
								const ti = (0, a.$Ogb)(),
									kt = (0, M.$wmb)(Ce),
									hi = z(jt.x, jt.y - kt.height, kt.width, kt.height, ti);
								return { x: hi.x, y: hi.y + kt.height };
							};
						(0, u.createEffect)(() => {
							if (!Ke()) return;
							const jt = qe();
							if (jt) {
								const ti = Re(jt);
								ti && (ti.x !== jt.x || ti.y !== jt.y) && Ae(ti);
							}
						});
						const je = (jt) => {
								if (!Ke()) return;
								const ti = Ce?.getBoundingClientRect();
								ti &&
									(Be({
										x: jt.clientX - ti.left,
										y: jt.clientY - (ti.top + ti.height),
									}),
									ke({ x: jt.clientX, y: jt.clientY }));
							},
							Ve = (jt) => {
								if (!Ke()) return;
								if (!Te()) {
									const Kt = jt.clientX - Se().x,
										di = jt.clientY - Se().y;
									if (Math.sqrt(Kt * Kt + di * di) > Ue) Ee(!0);
									else return;
								}
								if (!Ce) return;
								const ti = (0, a.$Ogb)(),
									kt = (0, M.$wmb)(Ce),
									hi = z(
										jt.clientX - Ie().x,
										jt.clientY - Ie().y - kt.height,
										kt.width,
										kt.height,
										ti,
									);
								Ae({ x: hi.x, y: hi.y + kt.height });
							};
						(0, u.createEffect)(() => {
							if (!Ke()) return;
							const jt = (0, a.$Ogb)(),
								ti = () => {
									Ee(!1),
										ke({ x: 0, y: 0 }),
										jt.removeEventListener("mousemove", Ve);
								};
							(Se().x !== 0 || Se().y !== 0) &&
								(jt.addEventListener("mousemove", Ve),
								jt.addEventListener("mouseup", ti)),
								(0, u.onCleanup)(() => {
									jt.removeEventListener("mousemove", Ve),
										jt.removeEventListener("mouseup", ti);
								});
						});
						const [Ze, et] = (0, u.createSignal)({
								width: S.COMPOSER_BAR_DEFAULT_WIDTH,
								height: S.COMPOSER_BAR_DEFAULT_MESSAGES_HEIGHT,
							}),
							[rt, ft] = (0, u.createSignal)(null),
							bt = (jt, ti) => {
								!Ke() ||
									(!be() && jt !== "e" && jt !== "w") ||
									(ti.preventDefault(), ti.stopPropagation(), ft(jt));
							},
							nt = (jt) => {
								if (!rt() || !Ce) return;
								const ti = rt();
								if (!ti) return;
								const kt = (0, M.$wmb)(Ce);
								let hi = kt.width,
									Kt = kt.height,
									di = qe() ? { ...qe() } : void 0;
								const Ye = jt.movementX,
									ze = jt.movementY,
									Xe = (0, a.$Ogb)();
								if (ti.includes("e") || ti.includes("w"))
									if (ti.includes("e")) {
										const It = hi + Ye;
										It >= S.COMPOSER_BAR_MIN_WIDTH &&
											It <= S.COMPOSER_BAR_MAX_WIDTH &&
											(hi = It);
									} else {
										const It = hi - Ye;
										It >= S.COMPOSER_BAR_MIN_WIDTH &&
											It <= S.COMPOSER_BAR_MAX_WIDTH &&
											((hi = It), di && (di.x += Ye));
									}
								if (ti.includes("n") || ti.includes("s"))
									if (ti.includes("n")) {
										const It = Kt - ze;
										It >= S.COMPOSER_BAR_MIN_HEIGHT &&
											It <= S.COMPOSER_BAR_MAX_HEIGHT &&
											((Kt = It), Me() && ze < 0 && De(!1));
									} else {
										const It = Kt + ze;
										It >= S.COMPOSER_BAR_MIN_HEIGHT &&
											It <= S.COMPOSER_BAR_MAX_HEIGHT &&
											((Kt = It), di && (di.y += ze));
									}
								if (di) {
									const It = z(di.x, di.y - Kt, hi, Kt, Xe);
									Ae({ x: It.x, y: It.y + Kt });
								}
								et({ width: hi, height: Kt });
							},
							lt = () => {
								ft(null);
							};
						(0, u.createEffect)(() => {
							if (!Ke()) return;
							const jt = (0, a.$Ogb)();
							rt() &&
								(jt.addEventListener("mousemove", nt),
								jt.addEventListener("mouseup", lt)),
								(0, u.onCleanup)(() => {
									jt.removeEventListener("mousemove", nt),
										jt.removeEventListener("mouseup", lt);
								});
						});
						const ct = () => {
								if (rt())
									switch (rt()) {
										case "n":
										case "s":
											return "ns-resize";
										case "e":
										case "w":
											return "ew-resize";
									}
								return Te() ? "grabbing" : "auto";
							},
							gt = (0, T.$A$b)(() => (Ke() ? le() : void 0));
						(0, u.createEffect)(() => {
							if (!Ke()) return;
							const jt = (0, a.$Ogb)(),
								ti = () => {
									const kt = qe();
									if (kt) {
										const Kt = Re(kt);
										Kt && Ae(Kt);
									}
									const hi = {
										width: Math.min(
											Math.max(Ze().width, S.COMPOSER_BAR_MIN_WIDTH),
											jt.innerWidth - 2 * S.COMPOSER_BAR_WINDOW_MARGIN,
										),
										height: Math.min(
											Math.max(Ze().height, S.COMPOSER_BAR_MIN_HEIGHT),
											jt.innerHeight - 2 * S.COMPOSER_BAR_WINDOW_MARGIN,
										),
									};
									et(hi);
								};
							jt.addEventListener("resize", ti),
								(0, u.onCleanup)(() => jt.removeEventListener("resize", ti));
						});
						const ht = (0, u.createMemo)(() =>
								be() && !Me() ? `${Ze().height}px` : "fit-content",
							),
							Rt = (0, u.createMemo)(() =>
								be() && !Me() ? `${S.COMPOSER_BAR_MIN_HEIGHT}px` : "0px",
							),
							Nt = (0, k.useComposerChatStatus)(J);
						return [
							(0, r.createComponent)(u.Show, {
								get when() {
									return x.renderAs === "history";
								},
								get children() {
									return (0, r.createComponent)(g.ComposerHistory, {
										get composerDataHandle() {
											return J();
										},
										renderOpenComposerButton: !0,
									});
								},
							}),
							(0, r.createComponent)(u.Show, {
								get when() {
									return x.renderAs === "composer";
								},
								get children() {
									return [
										(0, r.createComponent)(u.Show, {
											get when() {
												return (
													(X() === "chat"
														? V.reactiveStorageService.nonPersistentStorage
																.composerState.shouldShowChatHistory
														: V.reactiveStorageService.nonPersistentStorage
																.composerState.shouldShowComposerHistory) &&
													x.location === "pane"
												);
											},
											get children() {
												return (0, r.createComponent)(g.ComposerHistory, {
													get composerDataHandle() {
														return J();
													},
												});
											},
										}),
										(() => {
											const jt = O();
											jt.addEventListener("drop", (kt) => {
												if (kt.defaultPrevented || kt.hardCodedStopper) return;
												kt.preventDefault(), kt.stopPropagation();
												const hi = Ce?.querySelector(".aislash-editor-input");
												if (hi) {
													const Kt = new DragEvent(kt.type, kt);
													(Kt.hardCodedStopper = !0), hi.dispatchEvent(Kt);
												}
											}),
												jt.addEventListener("click", () => {
													const kt = ye(),
														hi = $e();
													kt !== hi && Y({ editingBubbleId: void 0 });
												}),
												jt.addEventListener("blur", () => {
													Z(!1);
												}),
												jt.addEventListener("focus", () => {
													Z(!0);
												}),
												jt.addEventListener("keydown", Fe);
											const ti = Ce;
											return (
												typeof ti == "function"
													? (0, C.use)(ti, jt)
													: (Ce = jt),
												(0, m.insert)(
													jt,
													(0, r.createComponent)(u.Show, {
														get when() {
															return (0, d.memo)(() => !!be())() && Ke();
														},
														get children() {
															return [
																(() => {
																	const kt = N();
																	return (
																		kt.addEventListener("mousedown", (hi) =>
																			bt("nw", hi),
																		),
																		`${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION}px` !=
																		null
																			? kt.style.setProperty(
																					"height",
																					`${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION}px`,
																				)
																			: kt.style.removeProperty("height"),
																		`${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION}px` !=
																		null
																			? kt.style.setProperty(
																					"width",
																					`${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION}px`,
																				)
																			: kt.style.removeProperty("width"),
																		S.COMPOSER_BAR_RESIZER_CORNER_BACKGROUND_COLOR !=
																		null
																			? kt.style.setProperty(
																					"background",
																					S.COMPOSER_BAR_RESIZER_CORNER_BACKGROUND_COLOR,
																				)
																			: kt.style.removeProperty("background"),
																		kt.style.setProperty(
																			"cursor",
																			"nwse-resize",
																		),
																		`-${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION / 2}px` !=
																		null
																			? kt.style.setProperty(
																					"top",
																					`-${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION / 2}px`,
																				)
																			: kt.style.removeProperty("top"),
																		`${S.COMPOSER_BAR_INDENT - S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION / 2}px` !=
																		null
																			? kt.style.setProperty(
																					"left",
																					`${S.COMPOSER_BAR_INDENT - S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION / 2}px`,
																				)
																			: kt.style.removeProperty("left"),
																		kt.style.setProperty(
																			"position",
																			"absolute",
																		),
																		kt.style.setProperty("z-index", "11"),
																		kt
																	);
																})(),
																(() => {
																	const kt = N();
																	return (
																		kt.addEventListener("mousedown", (hi) =>
																			bt("ne", hi),
																		),
																		`${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION}px` !=
																		null
																			? kt.style.setProperty(
																					"height",
																					`${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION}px`,
																				)
																			: kt.style.removeProperty("height"),
																		`${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION}px` !=
																		null
																			? kt.style.setProperty(
																					"width",
																					`${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION}px`,
																				)
																			: kt.style.removeProperty("width"),
																		S.COMPOSER_BAR_RESIZER_CORNER_BACKGROUND_COLOR !=
																		null
																			? kt.style.setProperty(
																					"background",
																					S.COMPOSER_BAR_RESIZER_CORNER_BACKGROUND_COLOR,
																				)
																			: kt.style.removeProperty("background"),
																		kt.style.setProperty(
																			"cursor",
																			"nesw-resize",
																		),
																		`-${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION / 2}px` !=
																		null
																			? kt.style.setProperty(
																					"top",
																					`-${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION / 2}px`,
																				)
																			: kt.style.removeProperty("top"),
																		`${S.COMPOSER_BAR_INDENT - S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION / 2}px` !=
																		null
																			? kt.style.setProperty(
																					"right",
																					`${S.COMPOSER_BAR_INDENT - S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION / 2}px`,
																				)
																			: kt.style.removeProperty("right"),
																		kt.style.setProperty(
																			"position",
																			"absolute",
																		),
																		kt.style.setProperty("z-index", "11"),
																		kt
																	);
																})(),
																(() => {
																	const kt = N();
																	return (
																		kt.addEventListener("mousedown", (hi) =>
																			bt("n", hi),
																		),
																		`${S.COMPOSER_BAR_RESIZER_DIMENSION}px` !=
																		null
																			? kt.style.setProperty(
																					"height",
																					`${S.COMPOSER_BAR_RESIZER_DIMENSION}px`,
																				)
																			: kt.style.removeProperty("height"),
																		S.COMPOSER_BAR_RESIZER_BACKGROUND_COLOR !=
																		null
																			? kt.style.setProperty(
																					"background",
																					S.COMPOSER_BAR_RESIZER_BACKGROUND_COLOR,
																				)
																			: kt.style.removeProperty("background"),
																		kt.style.setProperty("cursor", "ns-resize"),
																		`-${S.COMPOSER_BAR_RESIZER_DIMENSION / 2}px` !=
																		null
																			? kt.style.setProperty(
																					"top",
																					`-${S.COMPOSER_BAR_RESIZER_DIMENSION / 2}px`,
																				)
																			: kt.style.removeProperty("top"),
																		kt.style.setProperty("left", "0px"),
																		kt.style.setProperty("right", "0px"),
																		kt.style.setProperty(
																			"position",
																			"absolute",
																		),
																		kt.style.setProperty("z-index", "10"),
																		kt
																	);
																})(),
																(() => {
																	const kt = N();
																	return (
																		kt.addEventListener("mousedown", (hi) =>
																			bt("w", hi),
																		),
																		`${S.COMPOSER_BAR_RESIZER_DIMENSION + S.COMPOSER_BAR_INDENT}px` !=
																		null
																			? kt.style.setProperty(
																					"width",
																					`${S.COMPOSER_BAR_RESIZER_DIMENSION + S.COMPOSER_BAR_INDENT}px`,
																				)
																			: kt.style.removeProperty("width"),
																		S.COMPOSER_BAR_RESIZER_BACKGROUND_COLOR !=
																		null
																			? kt.style.setProperty(
																					"background",
																					S.COMPOSER_BAR_RESIZER_BACKGROUND_COLOR,
																				)
																			: kt.style.removeProperty("background"),
																		kt.style.setProperty("cursor", "ew-resize"),
																		kt.style.setProperty("top", "0px"),
																		kt.style.setProperty("left", "0px"),
																		kt.style.setProperty(
																			"position",
																			"absolute",
																		),
																		kt.style.setProperty("z-index", "10"),
																		(0, E.effect)(() =>
																			`${gt().height + 10}px` != null
																				? kt.style.setProperty(
																						"bottom",
																						`${gt().height + 10}px`,
																					)
																				: kt.style.removeProperty("bottom"),
																		),
																		kt
																	);
																})(),
																(() => {
																	const kt = N();
																	return (
																		kt.addEventListener("mousedown", (hi) =>
																			bt("e", hi),
																		),
																		`${S.COMPOSER_BAR_RESIZER_DIMENSION + S.COMPOSER_BAR_INDENT}px` !=
																		null
																			? kt.style.setProperty(
																					"width",
																					`${S.COMPOSER_BAR_RESIZER_DIMENSION + S.COMPOSER_BAR_INDENT}px`,
																				)
																			: kt.style.removeProperty("width"),
																		S.COMPOSER_BAR_RESIZER_BACKGROUND_COLOR !=
																		null
																			? kt.style.setProperty(
																					"background",
																					S.COMPOSER_BAR_RESIZER_BACKGROUND_COLOR,
																				)
																			: kt.style.removeProperty("background"),
																		kt.style.setProperty("cursor", "ew-resize"),
																		kt.style.setProperty("top", "0px"),
																		kt.style.setProperty("right", "0px"),
																		kt.style.setProperty(
																			"position",
																			"absolute",
																		),
																		kt.style.setProperty("z-index", "10"),
																		(0, E.effect)(() =>
																			`${gt().height + 10}px` != null
																				? kt.style.setProperty(
																						"bottom",
																						`${gt().height + 10}px`,
																					)
																				: kt.style.removeProperty("bottom"),
																		),
																		kt
																	);
																})(),
															];
														},
													}),
													null,
												),
												(0, m.insert)(
													jt,
													(0, r.createComponent)(u.Show, {
														get when() {
															return be();
														},
														get children() {
															const kt = R(),
																hi = kt.firstChild;
															kt.addEventListener("mousedown", (di) => {
																di.stopImmediatePropagation();
															});
															const Kt = Le;
															return (
																typeof Kt == "function"
																	? (0, C.use)(Kt, kt)
																	: (Le = kt),
																(0, m.insert)(
																	kt,
																	(0, r.createComponent)(u.Show, {
																		get when() {
																			return Ke();
																		},
																		get children() {
																			const di = A(),
																				Ye = di.firstChild,
																				ze = Ye.firstChild;
																			return (
																				di.addEventListener(
																					"mousedown",
																					(Xe) => {
																						je(Xe);
																					},
																				),
																				di.addEventListener("mouseup", () => {
																					Te() || rt() || De(!Me());
																				}),
																				di.style.setProperty(
																					"padding",
																					"2px 8px",
																				),
																				di.style.setProperty(
																					"padding-right",
																					"4px",
																				),
																				di.style.setProperty("display", "flex"),
																				di.style.setProperty(
																					"justify-content",
																					"space-between",
																				),
																				di.style.setProperty(
																					"align-items",
																					"center",
																				),
																				Ye.style.setProperty(
																					"color",
																					"var(--vscode-input-placeholderForeground)",
																				),
																				Ye.style.setProperty(
																					"font-size",
																					"11px",
																				),
																				Ye.style.setProperty("display", "flex"),
																				Ye.style.setProperty(
																					"align-items",
																					"center",
																				),
																				Ye.style.setProperty("gap", "4px"),
																				(0, m.insert)(
																					Ye,
																					(0, r.createComponent)(
																						L.ComposerGeneralStatusIndicator,
																						{
																							get status() {
																								return Nt();
																							},
																							size: "small",
																							get style() {
																								return {
																									opacity: Me() ? 1 : 0,
																									transition: "opacity 0.2s",
																								};
																							},
																						},
																					),
																					null,
																				),
																				(0, m.insert)(di, Je, null),
																				(0, E.effect)(() =>
																					(Me() ? "none" : Oe()) != null
																						? di.style.setProperty(
																								"border-bottom",
																								Me() ? "none" : Oe(),
																							)
																						: di.style.removeProperty(
																								"border-bottom",
																							),
																				),
																				di
																			);
																		},
																	}),
																	hi,
																),
																(0, m.insert)(
																	hi,
																	(0, r.createComponent)(y.$2cc, {
																		nonReactiveDelay: 30,
																		get children() {
																			return (0, r.createComponent)(
																				p.ComposerMessages,
																				{
																					get composerDataHandle() {
																						return J();
																					},
																					lexicalEditor: ae,
																					tabs: ue,
																					setTabs: fe,
																					setSelectedTabIndex: ve,
																					get hideHints() {
																						return se();
																					},
																					get isInputFocused() {
																						return _();
																					},
																					get location() {
																						return x.location;
																					},
																					get inputBoxDelegate() {
																						return ne();
																					},
																					get verticalScrollbarSize() {
																						return Ke() ? 8 : void 0;
																					},
																					onAfterMinCurrentEditBubbleClick:
																						() => {
																							const di = ye(),
																								Ye = $e();
																							di === Ye &&
																								Ye &&
																								di &&
																								(async () => (
																									await V.composerService.checkoutToLatest(
																										J().data.composerId,
																									),
																									V.composerService.focus(
																										J().data.composerId,
																										!0,
																									)
																								))();
																						},
																					customScrollableDivProps: {
																						style: { height: "100%" },
																						innerContainerStyle: {
																							position: "relative",
																							"box-sizing": "border-box",
																						},
																					},
																					get aiMessageStyle() {
																						return Ke()
																							? {
																									"padding-left": "12px",
																									"padding-right": "12px",
																								}
																							: void 0;
																					},
																					get humanMessageStyle() {
																						return Ke()
																							? {
																									"padding-left": "8px",
																									"padding-right": "8px",
																								}
																							: void 0;
																					},
																					get statusContainerStyle() {
																						return Ke()
																							? {
																									"padding-left": "14px",
																									"padding-right": "14px",
																									"padding-bottom": "14px",
																								}
																							: void 0;
																					},
																				},
																			);
																		},
																	}),
																),
																(0, m.insert)(
																	kt,
																	(0, r.createComponent)(u.Show, {
																		get when() {
																			return Ke();
																		},
																		get children() {
																			return (0, r.createComponent)(
																				o.ComposerToolbar,
																				{
																					get composerDataHandle() {
																						return J();
																					},
																					isInputFocused: _,
																					get style() {
																						return {
																							background:
																								"var(--vscode-input-background)",
																							"border-top": Oe(),
																						};
																					},
																					onStartDrag: je,
																					isDragging: Te,
																				},
																			);
																		},
																	}),
																	null,
																),
																(0, E.effect)(
																	(di) => {
																		const Ye = {
																				display: "flex",
																				"flex-direction": "column",
																				"padding-top":
																					V.composerViewsService.getComposerLocation(
																						J().data.composerId,
																					) === "editor"
																						? "10px"
																						: "0px",
																				...(Me()
																					? {}
																					: { flex: 1, "min-height": "0px" }),
																				...(Ke()
																					? {
																							margin: `0px ${S.COMPOSER_BAR_INDENT}px`,
																							"box-sizing": "border-box",
																							border: Oe(),
																							"border-bottom": "none",
																							"border-top-left-radius": "5px",
																							"border-top-right-radius": "5px",
																							"box-shadow":
																								"0 0 4px 1px var(--vscode-widget-shadow)",
																							position: "relative",
																							overflow: "hidden",
																							background:
																								"var(--vscode-input-background, var(--vscode-editor-background))",
																							"z-index": "8",
																						}
																					: {
																							width: "100%",
																							background: ge(),
																						}),
																			},
																			ze = {
																				position: "relative",
																				overflow: "hidden",
																				...(Me()
																					? {
																							display: "none",
																							"pointer-events": "none",
																						}
																					: { flex: 1 }),
																			};
																		return (
																			(di._v$ = (0, w.style)(kt, Ye, di._v$)),
																			(di._v$2 = (0, w.style)(hi, ze, di._v$2)),
																			di
																		);
																	},
																	{ _v$: void 0, _v$2: void 0 },
																),
																kt
															);
														},
													}),
													null,
												),
												(0, m.insert)(
													jt,
													(0, r.createComponent)(y.$2cc, {
														get nonReactiveDelay() {
															return Ke() ? 0 : 10;
														},
														get children() {
															return (0, r.createComponent)(
																n.ComposerFullInputBox,
																{
																	setRef: oe,
																	setLexicalEditor: pe,
																	get composerDataHandle() {
																		return J();
																	},
																	get location() {
																		return x.location;
																	},
																	disableImagesList: !0,
																	isInputFocused: _,
																	setIsInputFocused: te,
																	get overrideShouldCollapse() {
																		return Ke() ? !0 : void 0;
																	},
																	get buttonArea() {
																		return (0, d.memo)(
																			() => !!(be() || !Ke()),
																		)()
																			? void 0
																			: Je();
																	},
																	allowCmdPFilePicker: !0,
																	get minHeight() {
																		return W().conversation.length === 0 &&
																			!Ke()
																			? 56
																			: void 0;
																	},
																	shouldMergeSuggestedPillsWithAllPills: !0,
																	get containerStyle() {
																		return {
																			margin: Ke() ? "0px" : "10px",
																			...(Ke()
																				? {
																						position: "relative",
																						"z-index": "10",
																					}
																				: {
																						"margin-top":
																							W().conversation.length === 0
																								? "10px"
																								: "0px",
																						"margin-bottom":
																							W().conversation.length === 0
																								? "0px"
																								: "10px",
																					}),
																		};
																	},
																	get style() {
																		return {
																			margin: "0px",
																			border: Oe(),
																			...(Ke()
																				? {
																						"box-shadow":
																							"0 0 4px 1px var(--vscode-widget-shadow)",
																					}
																				: {}),
																		};
																	},
																	onSubmit: () => {
																		De(!1),
																			Y({
																				scrollToBottomTrigger:
																					(W().scrollToBottomTrigger ?? 0) + 1,
																			});
																	},
																	setSelectedPreviousComposerIndex: He,
																	get role() {
																		return W().conversation.length === 0
																			? "top"
																			: "bottom";
																	},
																	get aboveContent() {
																		return (0, r.createComponent)(u.Show, {
																			get when() {
																				return (
																					(0, d.memo)(
																						() => !!(!Ke() && be()),
																					)() && X() !== "chat"
																				);
																			},
																			get children() {
																				return (0, r.createComponent)(y.$2cc, {
																					nonReactiveDelay: 10,
																					get children() {
																						const kt = N();
																						return (
																							kt.style.setProperty(
																								"padding",
																								"0px 6px",
																							),
																							(0, m.insert)(
																								kt,
																								(0, r.createComponent)(
																									o.ComposerToolbar,
																									{
																										get composerDataHandle() {
																											return J();
																										},
																										isInputFocused: _,
																										get style() {
																											return {
																												background:
																													"var(--vscode-input-background)",
																												border: Oe(),
																												"border-bottom": "none",
																												"border-top-left-radius":
																													"5px",
																												"border-top-right-radius":
																													"5px",
																											};
																										},
																									},
																								),
																							),
																							kt
																						);
																					},
																				});
																			},
																		});
																	},
																	onStartDrag: je,
																	get children() {
																		return (0, r.createComponent)(u.Show, {
																			get when() {
																				return Ke();
																			},
																			get children() {
																				return [
																					(0, r.createComponent)(u.Show, {
																						get when() {
																							return be();
																						},
																						get children() {
																							return [
																								(() => {
																									const kt = N();
																									return (
																										kt.addEventListener(
																											"mousedown",
																											(hi) => bt("s", hi),
																										),
																										`${S.COMPOSER_BAR_RESIZER_DIMENSION}px` !=
																										null
																											? kt.style.setProperty(
																													"height",
																													`${S.COMPOSER_BAR_RESIZER_DIMENSION}px`,
																												)
																											: kt.style.removeProperty(
																													"height",
																												),
																										S.COMPOSER_BAR_RESIZER_BACKGROUND_COLOR !=
																										null
																											? kt.style.setProperty(
																													"background",
																													S.COMPOSER_BAR_RESIZER_BACKGROUND_COLOR,
																												)
																											: kt.style.removeProperty(
																													"background",
																												),
																										kt.style.setProperty(
																											"cursor",
																											"ns-resize",
																										),
																										`-${S.COMPOSER_BAR_RESIZER_DIMENSION / 2}px` !=
																										null
																											? kt.style.setProperty(
																													"bottom",
																													`-${S.COMPOSER_BAR_RESIZER_DIMENSION / 2}px`,
																												)
																											: kt.style.removeProperty(
																													"bottom",
																												),
																										kt.style.setProperty(
																											"left",
																											"0px",
																										),
																										kt.style.setProperty(
																											"right",
																											"0px",
																										),
																										kt.style.setProperty(
																											"position",
																											"absolute",
																										),
																										kt.style.setProperty(
																											"z-index",
																											"10",
																										),
																										kt
																									);
																								})(),
																								(() => {
																									const kt = N();
																									return (
																										kt.addEventListener(
																											"mousedown",
																											(hi) => bt("sw", hi),
																										),
																										`${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION}px` !=
																										null
																											? kt.style.setProperty(
																													"height",
																													`${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION}px`,
																												)
																											: kt.style.removeProperty(
																													"height",
																												),
																										`${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION}px` !=
																										null
																											? kt.style.setProperty(
																													"width",
																													`${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION}px`,
																												)
																											: kt.style.removeProperty(
																													"width",
																												),
																										S.COMPOSER_BAR_RESIZER_CORNER_BACKGROUND_COLOR !=
																										null
																											? kt.style.setProperty(
																													"background",
																													S.COMPOSER_BAR_RESIZER_CORNER_BACKGROUND_COLOR,
																												)
																											: kt.style.removeProperty(
																													"background",
																												),
																										kt.style.setProperty(
																											"cursor",
																											"nesw-resize",
																										),
																										`-${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION / 2}px` !=
																										null
																											? kt.style.setProperty(
																													"bottom",
																													`-${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION / 2}px`,
																												)
																											: kt.style.removeProperty(
																													"bottom",
																												),
																										`-${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION / 2}px` !=
																										null
																											? kt.style.setProperty(
																													"left",
																													`-${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION / 2}px`,
																												)
																											: kt.style.removeProperty(
																													"left",
																												),
																										kt.style.setProperty(
																											"position",
																											"absolute",
																										),
																										kt.style.setProperty(
																											"z-index",
																											"11",
																										),
																										kt
																									);
																								})(),
																								(() => {
																									const kt = N();
																									return (
																										kt.addEventListener(
																											"mousedown",
																											(hi) => bt("se", hi),
																										),
																										`${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION}px` !=
																										null
																											? kt.style.setProperty(
																													"height",
																													`${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION}px`,
																												)
																											: kt.style.removeProperty(
																													"height",
																												),
																										`${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION}px` !=
																										null
																											? kt.style.setProperty(
																													"width",
																													`${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION}px`,
																												)
																											: kt.style.removeProperty(
																													"width",
																												),
																										S.COMPOSER_BAR_RESIZER_CORNER_BACKGROUND_COLOR !=
																										null
																											? kt.style.setProperty(
																													"background",
																													S.COMPOSER_BAR_RESIZER_CORNER_BACKGROUND_COLOR,
																												)
																											: kt.style.removeProperty(
																													"background",
																												),
																										kt.style.setProperty(
																											"cursor",
																											"nwse-resize",
																										),
																										`-${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION / 2}px` !=
																										null
																											? kt.style.setProperty(
																													"bottom",
																													`-${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION / 2}px`,
																												)
																											: kt.style.removeProperty(
																													"bottom",
																												),
																										`-${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION / 2}px` !=
																										null
																											? kt.style.setProperty(
																													"right",
																													`-${S.COMPOSER_BAR_RESIZER_CORNER_DIMENSION / 2}px`,
																												)
																											: kt.style.removeProperty(
																													"right",
																												),
																										kt.style.setProperty(
																											"position",
																											"absolute",
																										),
																										kt.style.setProperty(
																											"z-index",
																											"11",
																										),
																										kt
																									);
																								})(),
																							];
																						},
																					}),
																					(() => {
																						const kt = N();
																						return (
																							kt.addEventListener(
																								"mousedown",
																								(hi) => bt("w", hi),
																							),
																							`${S.COMPOSER_BAR_RESIZER_DIMENSION}px` !=
																							null
																								? kt.style.setProperty(
																										"width",
																										`${S.COMPOSER_BAR_RESIZER_DIMENSION}px`,
																									)
																								: kt.style.removeProperty(
																										"width",
																									),
																							S.COMPOSER_BAR_RESIZER_BACKGROUND_COLOR !=
																							null
																								? kt.style.setProperty(
																										"background",
																										S.COMPOSER_BAR_RESIZER_BACKGROUND_COLOR,
																									)
																								: kt.style.removeProperty(
																										"background",
																									),
																							kt.style.setProperty(
																								"cursor",
																								"ew-resize",
																							),
																							kt.style.setProperty(
																								"top",
																								"0px",
																							),
																							kt.style.setProperty(
																								"bottom",
																								"0px",
																							),
																							`-${S.COMPOSER_BAR_RESIZER_DIMENSION / 2}px` !=
																							null
																								? kt.style.setProperty(
																										"left",
																										`-${S.COMPOSER_BAR_RESIZER_DIMENSION / 2}px`,
																									)
																								: kt.style.removeProperty(
																										"left",
																									),
																							kt.style.setProperty(
																								"position",
																								"absolute",
																							),
																							kt.style.setProperty(
																								"z-index",
																								"10",
																							),
																							kt
																						);
																					})(),
																					(() => {
																						const kt = N();
																						return (
																							kt.addEventListener(
																								"mousedown",
																								(hi) => bt("e", hi),
																							),
																							`${S.COMPOSER_BAR_RESIZER_DIMENSION}px` !=
																							null
																								? kt.style.setProperty(
																										"width",
																										`${S.COMPOSER_BAR_RESIZER_DIMENSION}px`,
																									)
																								: kt.style.removeProperty(
																										"width",
																									),
																							S.COMPOSER_BAR_RESIZER_BACKGROUND_COLOR !=
																							null
																								? kt.style.setProperty(
																										"background",
																										S.COMPOSER_BAR_RESIZER_BACKGROUND_COLOR,
																									)
																								: kt.style.removeProperty(
																										"background",
																									),
																							kt.style.setProperty(
																								"cursor",
																								"ew-resize",
																							),
																							kt.style.setProperty(
																								"top",
																								"0px",
																							),
																							kt.style.setProperty(
																								"bottom",
																								"0px",
																							),
																							`-${S.COMPOSER_BAR_RESIZER_DIMENSION / 2}px` !=
																							null
																								? kt.style.setProperty(
																										"right",
																										`-${S.COMPOSER_BAR_RESIZER_DIMENSION / 2}px`,
																									)
																								: kt.style.removeProperty(
																										"right",
																									),
																							kt.style.setProperty(
																								"position",
																								"absolute",
																							),
																							kt.style.setProperty(
																								"z-index",
																								"10",
																							),
																							kt
																						);
																					})(),
																				];
																			},
																		});
																	},
																},
															);
														},
													}),
													null,
												),
												(0, m.insert)(
													jt,
													(0, r.createComponent)(u.Show, {
														get when() {
															return (
																(0, d.memo)(() => !Ke())() &&
																W().conversation.length === 0
															);
														},
														get children() {
															return (0, r.createComponent)(
																c.ComposerBelowChatHistory,
																{
																	get composerDataHandle() {
																		return J();
																	},
																	get selectedPreviousComposerIndex() {
																		return xe();
																	},
																	setSelectedPreviousComposerIndex: He,
																	isRenderingSuggestedPillsBelowInputBox: !1,
																},
															);
														},
													}),
													null,
												),
												(0, E.effect)(
													(kt) => {
														const hi = {
																"box-sizing": "border-box",
																outline: "none",
																display: "flex",
																"flex-direction": "column",
																...x.style,
																...(Ke()
																	? {
																			position: "fixed",
																			...(qe()
																				? {
																						bottom: `${ee.innerHeight - qe().y}px`,
																						left: `${qe().x}px`,
																					}
																				: {
																						bottom: "20px",
																						left: "50%",
																						transform: "translateX(-50%)",
																					}),
																			width: `${Ze().width}px`,
																			height: ht(),
																			"min-width": `${S.COMPOSER_BAR_MIN_WIDTH}px`,
																			"min-height": Rt(),
																			"max-width": `${S.COMPOSER_BAR_MAX_WIDTH}px`,
																			"max-height": `${S.COMPOSER_BAR_MAX_HEIGHT}px`,
																			"z-index": "2548",
																			"justify-content": "flex-end",
																			cursor: ct(),
																			transition: Te() || rt() ? "none" : U,
																		}
																	: {
																			background: ge(),
																			width: "100%",
																			height: "100%",
																			overflow: "hidden",
																		}),
															},
															Kt =
																"composer-bar" +
																(x.location === "editor" ? " editor" : "");
														return (
															(kt._v$3 = (0, w.style)(jt, hi, kt._v$3)),
															Kt !== kt._v$4 &&
																(0, i.className)(jt, (kt._v$4 = Kt)),
															kt
														);
													},
													{ _v$3: void 0, _v$4: void 0 },
												),
												jt
											);
										})(),
									];
								},
							}),
						];
					} catch (q) {
						H.e = q;
					} finally {
						H.d();
					}
				}
			},
		),
		