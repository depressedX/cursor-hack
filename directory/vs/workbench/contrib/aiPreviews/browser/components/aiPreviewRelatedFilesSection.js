define(
			de[4132],
			he([1, 0, 2, 2, 2, 2, 13, 14, 26, 41, 1272, 156, 36, 9, 972]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$cZc = p);
				const g = (0, t.template)(
					'<div class="ai-preview-clickable"><div></div><span></span><span>(<!>)</span><span>',
				);
				function p(o) {
					const f = (0, h.$odc)(),
						[b, s] = (0, C.createSignal)(0),
						[l, y] = (0, C.createSignal)(0),
						$ = (0, C.createMemo)(() => {
							if (o.relatedFiles.length === 0) return () => {};
							const v = o.relatedFiles;
							return (S) => {
								const I = S === void 0 ? b() : S,
									T = f.workspaceContextService.resolveRelativePath(v[I].path);
								f.openerService.open(
									(0, r.$8rb)(T, {
										startLineNumber: v[I].ranges[0].startLineNumber || 0,
										startColumn: v[I].ranges[0].startColumn || 0,
										endLineNumber: v[I].ranges[0].endLineNumber || 0,
										endColumn: v[I].ranges[0].endColumn || 0,
									}),
								);
							};
						});
					return (
						(0, C.createEffect)(() => {
							if (o.relatedFiles.length === 0) return;
							const v = o.isRunning,
								S = o.relatedFiles.length,
								I = o.stopRunning,
								T = o.maxToShow,
								P = (k) => {
									if (v) {
										if (k.key === "ArrowUp" || k.key === "k") {
											if (
												(k.preventDefault(),
												k.stopImmediatePropagation(),
												b() === 0)
											) {
												I();
												return;
											}
											s((L) => L - 1), l() > b() && l() > 0 && y((L) => L - 1);
											return;
										}
										if (k.key === "ArrowDown" || k.key === "j") {
											if (
												(k.preventDefault(),
												k.stopImmediatePropagation(),
												b() === S - 1)
											) {
												I();
												return;
											}
											s((L) => L + 1), b() >= T + l() && y((L) => L + 1);
											return;
										}
										if (k.key === "Enter" || k.key === " ") {
											k.preventDefault(), k.stopImmediatePropagation(), $()();
											return;
										}
									}
								};
							f.window.document.addEventListener("keydown", P),
								(0, C.onCleanup)(() => {
									f.window.document.removeEventListener("keydown", P);
								});
						}),
						(0, E.createComponent)(C.Show, {
							get when() {
								return o.relatedFiles.length > 0;
							},
							get children() {
								return (0, E.createComponent)(u.$$Yc, {
									get title() {
										return `${n.$bZc["related-files"]} (${(o.isRunning ? `${b() + 1}/` : "") + o.relatedFiles.length})`;
									},
									get isSelected() {
										return !o.isRunning && o.isSelected;
									},
									get iconClass() {
										return m.ThemeIcon.asClassName(d.$ak.linkExternal);
									},
									get isOpen() {
										return o.isOpen;
									},
									get setIsOpen() {
										return o.setIsOpen;
									},
									get children() {
										return (0, E.createComponent)(C.For, {
											get each() {
												return o.relatedFiles.slice(l(), l() + o.maxToShow);
											},
											children: (v, S) => {
												const I = f.codeEditorService
														.getActiveCodeEditor()
														?.getModel()?.uri,
													T =
														I &&
														f.workspaceContextService.asRelativePath(
															c.URI.file(v.path),
														) === f.workspaceContextService.asRelativePath(I);
												return (() => {
													const P = g(),
														k = P.firstChild,
														L = k.nextSibling,
														D = L.nextSibling,
														M = D.firstChild,
														N = M.nextSibling,
														A = N.nextSibling,
														R = D.nextSibling;
													return (
														P.addEventListener("click", () => {
															$()(S() + l());
														}),
														P.style.setProperty("white-space", "nowrap"),
														P.style.setProperty("overflow", "hidden"),
														P.style.setProperty("text-overflow", "ellipsis"),
														P.style.setProperty("font-size", "0.7rem"),
														P.style.setProperty("display", "flex"),
														P.style.setProperty("align-items", "center"),
														P.style.setProperty("gap", "3px"),
														P.style.setProperty("cursor", "pointer"),
														P.style.setProperty("border-radius", "4px"),
														P.style.setProperty(
															"border",
															"1px solid transparent",
														),
														k.style.setProperty("margin-right", "-6px"),
														(0, w.insert)(
															k,
															(0, E.createComponent)(a.$k$b, {
																get fileName() {
																	return v.fileName;
																},
																get languageService() {
																	return f.languageService;
																},
																get modelService() {
																	return f.modelService;
																},
																get workspaceContextService() {
																	return f.workspaceContextService;
																},
															}),
														),
														L.style.setProperty(
															"color",
															"var(--vscode-editor-foreground)",
														),
														(0, w.insert)(L, () => v.fileName),
														(T
															? "var(--vscode-editor-foreground)"
															: "var(--vscode-input-placeholderForeground)") !=
														null
															? D.style.setProperty(
																	"color",
																	T
																		? "var(--vscode-editor-foreground)"
																		: "var(--vscode-input-placeholderForeground)",
																)
															: D.style.removeProperty("color"),
														(0, w.insert)(D, () => v.ranges.length, N),
														R.style.setProperty(
															"color",
															"var(--vscode-input-placeholderForeground)",
														),
														R.style.setProperty("white-space", "nowrap"),
														R.style.setProperty("overflow", "hidden"),
														R.style.setProperty("text-overflow", "ellipsis"),
														(0, w.insert)(R, () =>
															f.workspaceContextService.asRelativePath(
																c.URI.file(v.path),
															),
														),
														(0, i.effect)(() =>
															(o.isRunning && S() + l() === b()
																? "var(--vscode-editor-foreground)"
																: "transparent") != null
																? P.style.setProperty(
																		"border-color",
																		o.isRunning && S() + l() === b()
																			? "var(--vscode-editor-foreground)"
																			: "transparent",
																	)
																: P.style.removeProperty("border-color"),
														),
														P
													);
												})();
											},
										});
									},
								});
							},
						})
					);
				}
			},
		),
		