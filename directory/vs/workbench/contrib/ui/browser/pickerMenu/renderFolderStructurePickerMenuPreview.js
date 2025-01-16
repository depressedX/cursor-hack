define(
			de[860],
			he([1, 0, 2, 2, 2, 2, 2, 36, 54, 156, 13, 26, 14]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$7bc = void 0);
				const c = (0, t.template)("<div><div><div></div><span>"),
					n = (0, t.template)("<div><span><span>"),
					g = (0, t.template)("<div>"),
					p = (o) => {
						const f = (0, d.$odc)(),
							b = f.workspaceContextService.asRelativePath(o),
							s = (0, m.$sc)(b),
							y = b
								.replace(s, "")
								.split("/")
								.filter((v) => !!v.trim()),
							$ = 12;
						return (() => {
							const v = c(),
								S = v.firstChild,
								I = S.firstChild,
								T = I.nextSibling;
							return (
								v.style.setProperty("display", "flex"),
								v.style.setProperty("flex-direction", "column"),
								v.style.setProperty("padding", "0.25rem 0.5rem"),
								v.style.setProperty("gap", "2px"),
								(0, E.insert)(
									v,
									(0, C.createComponent)(u.For, {
										each: y,
										children: (P, k) =>
											(() => {
												const L = n(),
													D = L.firstChild,
													M = D.firstChild;
												return (
													L.style.setProperty("display", "flex"),
													L.style.setProperty("align-items", "center"),
													L.style.setProperty("overflow", "hidden"),
													L.style.setProperty("text-overflow", "ellipsis"),
													L.style.setProperty("white-space", "nowrap"),
													(0, E.insert)(
														L,
														(0, C.createComponent)(u.For, {
															get each() {
																return Array(k()).fill(null);
															},
															children: () =>
																(() => {
																	const N = g();
																	return (
																		N.style.setProperty("margin-left", "12px"),
																		N.style.setProperty(
																			"border-left",
																			"1px solid var(--vscode-commandCenter-inactiveBorder)",
																		),
																		N.style.setProperty(
																			"display",
																			"inline-block",
																		),
																		N
																	);
																})(),
														}),
														D,
													),
													D.style.setProperty("display", "flex"),
													D.style.setProperty("align-items", "center"),
													D.style.setProperty("gap", "4px"),
													D.style.setProperty("overflow", "hidden"),
													D.style.setProperty("text-overflow", "ellipsis"),
													D.style.setProperty("white-space", "nowrap"),
													D.style.setProperty("font-size", "12px"),
													M.style.setProperty("font-size", "12px"),
													(0, E.insert)(D, P, null),
													(0, w.effect)(
														(N) => {
															const A = k() === y.length - 1 ? 1 : 0.5,
																R = `calc(100% - ${$ * k()}px)`,
																O = a.ThemeIcon.asClassName(h.$ak.folder);
															return (
																A !== N._v$ &&
																	((N._v$ = A) != null
																		? D.style.setProperty("opacity", A)
																		: D.style.removeProperty("opacity")),
																R !== N._v$2 &&
																	((N._v$2 = R) != null
																		? D.style.setProperty("max-width", R)
																		: D.style.removeProperty("max-width")),
																O !== N._v$3 &&
																	(0, i.className)(M, (N._v$3 = O)),
																N
															);
														},
														{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
													),
													L
												);
											})(),
									}),
									S,
								),
								S.style.setProperty("display", "flex"),
								S.style.setProperty("align-items", "center"),
								S.style.setProperty("overflow", "hidden"),
								S.style.setProperty("text-overflow", "ellipsis"),
								S.style.setProperty("white-space", "nowrap"),
								I.style.setProperty(
									"border-left",
									"1px solid var(--vscode-commandCenter-inactiveBorder)",
								),
								I.style.setProperty("display", "inline-block"),
								T.style.setProperty("display", "flex"),
								T.style.setProperty("align-items", "center"),
								T.style.setProperty("overflow", "hidden"),
								T.style.setProperty("text-overflow", "ellipsis"),
								T.style.setProperty("white-space", "nowrap"),
								T.style.setProperty("font-size", "12px"),
								(0, E.insert)(
									T,
									(0, C.createComponent)(r.$k$b, {
										fileName: s,
										get workspaceContextService() {
											return f.workspaceContextService;
										},
										get modelService() {
											return f.modelService;
										},
										get languageService() {
											return f.languageService;
										},
									}),
									null,
								),
								(0, E.insert)(T, s, null),
								(0, w.effect)(() =>
									`${$ * y.length}px` != null
										? I.style.setProperty("margin-left", `${$ * y.length}px`)
										: I.style.removeProperty("margin-left"),
								),
								v
							);
						})();
					};
				e.$7bc = p;
			},
		),
		