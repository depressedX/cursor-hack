define(de[385], he([1, 0, 13, 36]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$5$b = void 0);
			const w = (E, C) => {
				const d = (0, i.$odc)(),
					[m, r] = (0, t.createSignal)(void 0),
					u = () =>
						C?.useDefaultKeybindingEvenIfNotActive
							? d.keybindingService.lookupDefaultKeybindings(E)
							: d.keybindingService.lookupKeybindings(E);
				return (
					(0, t.createEffect)(() => {
						const a = u().at(0)?.getLabel() ?? void 0;
						r(a);
						const h = d.keybindingService.onDidUpdateKeybindings(() => {
							const c = u().at(0)?.getLabel() ?? void 0;
							r(c);
						});
						(0, t.onCleanup)(() => {
							h.dispose();
						});
					}),
					m
				);
			};
			e.$5$b = w;
		}),
		define(
			de[4183],
			he([1, 0, 13, 58, 169, 177, 36, 385]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.useComposerPlaceholder = void 0);
				const m = (r, u, a) => {
					const h = (0, C.$odc)(),
						c = (0, d.$5$b)(i.$dX),
						n = (0, d.$5$b)(w.NEW_CHAT_FOLLOW_UP_ACTION_ID),
						g = (0, d.$5$b)(w.COMPOSER_EDIT_ACTION_ID),
						p = (0, t.createMemo)(() => {
							const y = u().data,
								$ =
									h.reactiveStorageService.applicationUserPersistentStorage
										.composerState.location2;
							return (y.conversation.length > 0 && !a()) || $ === "bar";
						}),
						{ currentComposer: o, forceMode: f } = (0, E.useComposerDataHandle)(
							u,
						),
						b = (0, t.createMemo)(() =>
							o().conversation.length > 0 ? n() : c(),
						),
						s = (0, t.createMemo)(() =>
							o().conversation.length > 0 ? "Ask followup" : "Ask anything",
						);
					return (0, t.createMemo)(() => {
						const y = b(),
							$ = g(),
							v = y ? ` (${y})` : "",
							S = $ ? ` (${$})` : "",
							I = s(),
							T = [
								[
									`Edit code ${S}`,
									`${I} ${v}`,
									"Ask agent to do anything",
									210,
								],
								[
									`Edit code ${S}, @ to mention`,
									`${I} ${v}, @ to mention`,
									"Ask agent to do anything, @ to mention",
									360,
								],
								[
									`Edit code ${S}, @ to mention, ${p() ? "\u2191" : "\u21C5"} to select`,
									`${I}${y ? ` (${y}), @ to mention, ${p() ? "\u2191" : "\u21C5"} to select` : `, @ to mention, ${p() ? "\u2191" : "\u21C5"} to select`}`,
									`Ask agent to do anything, @ to mention, ${p() ? "\u2191" : "\u21C5"} to select`,
								],
							],
							P =
								h.reactiveStorageService.applicationUserPersistentStorage
									.composerState.isAutoApplyEnabled,
							k =
								h.reactiveStorageService.applicationUserPersistentStorage
									.composerState.unification;
						for (const [L, D, M, N] of T)
							if (!N || r() <= N)
								return f() === "chat"
									? D
									: k && o().isAgentic
										? M
										: k && !P
											? D
											: o().isAgentic
												? M
												: L;
						return f() === "chat" ? T[0][1] : o().isAgentic ? T[0][2] : T[0][0];
					});
				};
				e.useComposerPlaceholder = m;
			},
		),
		define(
			de[1371],
			he([1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 2, 14, 26, 36]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$l$b = o),
					(e.$m$b = f);
				const n = (0, t.template)("<div>"),
					g = (0, t.template)("<div><div>"),
					p = (0, t.template)("<span>");
				function o(b) {
					const [s, l] = (0, r.createSignal)(!1);
					let y, $;
					const v = (0, c.$pdc)(),
						S = () => {
							l(!s());
						},
						I = () => {
							l(!0);
						},
						T = (k) => {
							($ && $.contains(k.relatedTarget)) || l(!1);
						},
						P = () => {
							l(!1);
						};
					return [
						(0, m.createComponent)(r.Show, {
							get when() {
								return b.hidden;
							},
							get children() {
								return b.children;
							},
						}),
						(0, m.createComponent)(r.Show, {
							get when() {
								return b.hidden !== !0;
							},
							get children() {
								return [
									(() => {
										const k = n(),
											L = y;
										return (
											typeof L == "function" ? (0, d.use)(L, k) : (y = k),
											k.addEventListener("mouseleave", T),
											k.addEventListener("mouseenter", I),
											k.addEventListener("click", S),
											(0, C.insert)(k, () => b.children),
											(0, E.effect)((D) => (0, w.style)(k, b.parentStyle, D)),
											k
										);
									})(),
									(0, m.createComponent)(r.Show, {
										get when() {
											return s();
										},
										get children() {
											return (0, m.createComponent)(u.Portal, {
												get mount() {
													return v.portalElement;
												},
												get children() {
													const k = g(),
														L = k.firstChild,
														D = $;
													return (
														typeof D == "function" ? (0, d.use)(D, k) : ($ = k),
														k.addEventListener("mouseleave", P),
														k.style.setProperty("position", "absolute"),
														k.style.setProperty("z-index", "1000"),
														k.style.setProperty("padding-top", "10px"),
														L.style.setProperty(
															"background-color",
															"var(--vscode-settings-dropdownBackground)",
														),
														L.style.setProperty(
															"border",
															"1px solid var(--vscode-commandCenter-inactiveBorder)",
														),
														L.style.setProperty("border-radius", "3px"),
														L.style.setProperty(
															"box-shadow",
															"0px 0px 0px 0px rgba(0, 0, 0, 0.1)",
														),
														L.style.setProperty("font-size", "10px"),
														L.style.setProperty("width", "250px"),
														L.style.setProperty("padding", "2px 6px"),
														L.style.setProperty("user-select", "text"),
														(0, C.insert)(L, () => b.text),
														(0, E.effect)(
															(M) => {
																const N = `${(y?.getBoundingClientRect().bottom ?? 0) - 3}px`,
																	A = `${Math.min(v.window.innerWidth - 275, (y?.getBoundingClientRect().left ?? 0) + (b.leftDelta ?? 0))}px`;
																return (
																	N !== M._v$ &&
																		((M._v$ = N) != null
																			? k.style.setProperty("top", N)
																			: k.style.removeProperty("top")),
																	A !== M._v$2 &&
																		((M._v$2 = A) != null
																			? k.style.setProperty("left", A)
																			: k.style.removeProperty("left")),
																	M
																);
															},
															{ _v$: void 0, _v$2: void 0 },
														),
														k
													);
												},
											});
										},
									}),
								];
							},
						}),
					];
				}
				function f(b) {
					return (0, m.createComponent)(o, {
						get text() {
							return b.text;
						},
						get parentStyle() {
							return b.parentStyle;
						},
						get children() {
							const s = p();
							return (
								(0, E.effect)(
									(l) => {
										const y = b.style,
											$ = h.ThemeIcon.asClassName(a.$ak.info);
										return (
											(l._v$3 = (0, w.style)(s, y, l._v$3)),
											$ !== l._v$4 && (0, i.className)(s, (l._v$4 = $)),
											l
										);
									},
									{ _v$3: void 0, _v$4: void 0 },
								),
								s
							);
						},
					});
				}
			},
		),
		