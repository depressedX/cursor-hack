define(de[1370], he([1, 0, 2, 13, 13, 36]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$2cc = C);
			function C(d) {
				const m = (0, E.$odc)(),
					[r, u] = (0, i.createSignal)(!1),
					a = d.nonReactiveDelay;
				return (
					(0, w.onMount)(() => {
						if (a === 0) {
							u(!0), d.onLoad?.();
							return;
						}
						const h = m.window.requestIdleCallback(
							() => {
								u(!0), d.onLoad?.();
							},
							{ timeout: a },
						);
						(0, w.onCleanup)(() => clearTimeout(h));
					}),
					(0, t.createComponent)(w.Show, {
						get when() {
							return r();
						},
						get fallback() {
							return d.fallback;
						},
						get children() {
							return d.children;
						},
					})
				);
			}
		}),
		define(
			de[1071],
			he([1, 0, 13, 33, 36, 3202, 3919, 3198, 3199, 3201, 3200, 444]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$1_b = h);
				function h(c, n, g, p) {
					const [o, f] = (0, t.createSignal)([]),
						[b, s] = (0, t.createSignal)(null),
						[l, y] = (0, t.createSignal)(null),
						[$, v] = (0, t.createSignal)(!1),
						S = (0, w.$odc)();
					(0, t.onMount)(() => {
						S.anythingQuickAccessProvider.initializeCaches(),
							S.selectedContextService.addOnCursorIgnoreLoadedCallback(() => {
								console.log("Cursor ignore loaded, searching again"), T();
							});
					});
					const I = (k, L, D, M, N) => {
							const A = {
								[a.EverythingSearchOptionType.File]: () =>
									(0, E.$U_b)(k, S, D, N.file),
								[a.EverythingSearchOptionType.Folder]: () =>
									(0, C.$V_b)(k, S, D),
								[a.EverythingSearchOptionType.Symbol]: () =>
									(0, r.$Y_b)(k, S, D),
								[a.EverythingSearchOptionType.Git]: () => (0, d.$W_b)(k, S, D),
								[a.EverythingSearchOptionType.Notepad]: () => (0, m.$X_b)(k, S),
								[a.EverythingSearchOptionType.Semantic]: () =>
									(0, u.$Z_b)(k, S, M, N.semantic),
							};
							return L.length === 0
								? Object.values(A).map((R) => R())
								: L.map((R) => A[R]());
						},
						T = async () => {
							if (p?.()) {
								f([]), v(!1);
								return;
							}
							const k = c(),
								L = n ? n() : [],
								D = g ? g() : {};
							b()?.cancel(), b()?.dispose(), l()?.abort();
							const M = new i.$Ce(),
								N = new AbortController();
							s(M), y(N), v(!0);
							try {
								const A = I(k, L, M, N.signal, D);
								let R = [];
								const O = [...A];
								for (; O.length > 0; ) {
									const B = await Promise.race(
										O.map((U, z) =>
											U.then((F) => ({
												result: F,
												index: z,
												error: null,
											})).catch((F) => ({ result: [], index: z, error: F })),
										),
									);
									O.splice(B.index, 1),
										B.error
											? console.error("Search failed:", B.error)
											: ((R = [...R, ...B.result].sort(
													(U, z) => z.score - U.score,
												)),
												f(R));
								}
							} catch (A) {
								A.name === "AbortError"
									? console.log("Search aborted")
									: console.error("Error during search:", A);
							} finally {
								v(!1);
							}
						};
					let P;
					return (
						(0, t.createEffect)(
							(0, t.on)(
								[c, () => n?.() ?? [], () => g?.() ?? {}, () => p?.() ?? !1],
								async () => {
									if (p?.()) {
										f([]), v(!1);
										return;
									}
									clearTimeout(P),
										(P = setTimeout(async () => {
											await T();
										}, 30));
								},
							),
						),
						(0, t.onMount)(() => {
							p?.() || T();
						}),
						{ options: o, isLoading: $ }
					);
				}
			},
		),
		define(
			de[1973],
			he([
				1, 0, 2, 2, 2, 2, 181, 13, 14, 26, 36, 156, 310, 444, 1071, 295, 164,
				816,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$5_b = s);
				const f = (0, t.template)("<span>");
				function b(l, y) {
					return new h.$u_b(
						l.name,
						(0, E.createComponent)(a.$k$b, {
							get fileName() {
								return l.name;
							},
							get workspaceContextService() {
								return y.workspaceContextService;
							},
							get modelService() {
								return y.modelService;
							},
							get languageService() {
								return y.languageService;
							},
						}),
						h.TypeaheadOptionType.auto_context,
						l.score,
						{ uri: l.uri },
						void 0,
						l.secondaryText,
					);
				}
				function s(l, y) {
					const $ = (0, u.$odc)(),
						[v] = (0, C.useLexicalComposerContext)(),
						[S, I] = (0, d.createSignal)(0);
					v.registerUpdateListener(() => {
						I((O) => O + 1);
					});
					const T = (0, d.createMemo)(() => {
							try {
								S();
								const O = v.getEditorState();
								if (!O) return "";
								const B = O.read(() => {
									try {
										let U = "";
										const z = (0, p.$getRoot)();
										if (!z) return "";
										const F = (x) => {
											x &&
												((0, o.$isMentionNode)(x) ||
													((0, p.$isTextNode)(x)
														? (U += x.getTextContent())
														: "getChildren" in x &&
															x.getChildren().forEach(F)));
										};
										return "getChildren" in z && z.getChildren().forEach(F), U;
									} catch (U) {
										return (
											console.error("Error traversing editor state:", U), ""
										);
									}
								});
								return B === "$" || B === "@" ? "" : B;
							} catch (O) {
								return console.error("Error in plainText memo:", O), "";
							}
						}),
						P = (0, d.createMemo)(() => ({
							semantic: { fileBased: !0, topK: 50, finalK: 25 },
							file: { autoPopulate: T() === "" },
						})),
						k = (0, d.createMemo)(() => {
							const O = l() || "";
							return O.startsWith("$") ? O.slice(1) : O;
						}),
						{ options: L, isLoading: D } = (0, n.$1_b)(
							k,
							() => [c.EverythingSearchOptionType.Semantic],
							P,
							() => y?.disabled?.() ?? !1,
						),
						{ options: M, isLoading: N } = (0, n.$1_b)(
							() => T(),
							() => [c.EverythingSearchOptionType.Semantic],
							P,
							() => y?.disabled?.() ?? !1,
						),
						A = (0, d.createMemo)(() => D() || N());
					return {
						options: (0, d.createMemo)(() => {
							const O = new Set(),
								B = [...L(), ...M()]
									.filter((z) => {
										if (!z.uri) return !1;
										const F = z.uri.toString();
										return !(
											O.has(F) ||
											(O.add(F),
											y?.excludeFiles?.()?.some((x) => x.toString() === F))
										);
									})
									.sort((z, F) => F.score - z.score),
								U = [];
							return (
								U.push(
									...B.map((z) => b(z, $)).slice(
										0,
										y?.resultsLimit?.() ?? 1 / 0,
									),
								),
								y?.showLoading && A()
									? U.push(
											new h.$u_b(
												"Loading",
												(0, E.createComponent)(g.$Z8b, {}),
												h.TypeaheadOptionType.staticheading,
												0,
												void 0,
												void 0,
												void 0,
											),
										)
									: B.length > (y?.resultsLimit?.() ?? 1 / 0) &&
										y?.showLoadMore &&
										U.push(
											new h.$u_b(
												`${B.length - (y?.resultsLimit?.() ?? 1 / 0)} more results`,
												(() => {
													const z = f();
													return (
														(0, w.effect)(() =>
															(0, i.className)(
																z,
																r.ThemeIcon.asClassName(m.$ak.ellipsis),
															),
														),
														z
													);
												})(),
												h.TypeaheadOptionType.heading,
												0,
												void 0,
												void 0,
												void 0,
												void 0,
												{ isLoadMore: !0 },
											),
										),
								U
							);
						}),
						isLoading: A,
					};
				}
			},
		),
		