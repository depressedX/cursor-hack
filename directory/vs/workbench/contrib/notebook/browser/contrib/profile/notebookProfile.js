define(de[3469], he([1, 0, 4, 11, 10, 70]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.NotebookProfileType = void 0);
			var C;
			(function (u) {
				(u.default = "default"), (u.jupyter = "jupyter"), (u.colab = "colab");
			})(C || (e.NotebookProfileType = C = {}));
			const d = {
				[C.default]: {
					[E.$56.focusIndicator]: "gutter",
					[E.$56.insertToolbarLocation]: "both",
					[E.$56.globalToolbar]: !0,
					[E.$56.cellToolbarLocation]: { default: "right" },
					[E.$56.compactView]: !0,
					[E.$56.showCellStatusBar]: "visible",
					[E.$56.consolidatedRunButton]: !0,
					[E.$56.undoRedoPerCell]: !1,
				},
				[C.jupyter]: {
					[E.$56.focusIndicator]: "gutter",
					[E.$56.insertToolbarLocation]: "notebookToolbar",
					[E.$56.globalToolbar]: !0,
					[E.$56.cellToolbarLocation]: { default: "left" },
					[E.$56.compactView]: !0,
					[E.$56.showCellStatusBar]: "visible",
					[E.$56.consolidatedRunButton]: !1,
					[E.$56.undoRedoPerCell]: !0,
				},
				[C.colab]: {
					[E.$56.focusIndicator]: "border",
					[E.$56.insertToolbarLocation]: "betweenCells",
					[E.$56.globalToolbar]: !1,
					[E.$56.cellToolbarLocation]: { default: "right" },
					[E.$56.compactView]: !1,
					[E.$56.showCellStatusBar]: "hidden",
					[E.$56.consolidatedRunButton]: !0,
					[E.$56.undoRedoPerCell]: !1,
				},
			};
			async function m(u, a) {
				const h = [];
				for (const c in a) h.push(u.updateValue(c, a[c]));
				await Promise.all(h);
			}
			(0, i.$4X)(
				class extends i.$3X {
					constructor() {
						super({
							id: "notebook.setProfile",
							title: (0, t.localize)(7810, null),
						});
					}
					async run(u, a) {
						if (!r(a)) return;
						const h = u.get(w.$gj);
						return m(h, d[a.profile]);
					}
				},
			);
			function r(u) {
				const a = u;
				return (
					a.profile === C.colab ||
					a.profile === C.default ||
					a.profile === C.jupyter
				);
			}
		}),
		define(
			de[3470],
			he([1, 0, 215, 9, 31, 70, 243, 161]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(t = mt(t)),
					w.$fk.registerCommand("_resolveNotebookContentProvider", (m) =>
						m
							.get(d.$MIb)
							.getContributedNotebookTypes()
							.map((a) => {
								const h = a.selectors
									.map((c) =>
										typeof c == "string" || t.$Kk(c)
											? c
											: (0, E.$36)(c)
												? { include: c.include, exclude: c.exclude }
												: null,
									)
									.filter((c) => c !== null);
								return {
									viewType: a.id,
									displayName: a.displayName,
									filenamePattern: h,
									options: {
										transientCellMetadata: a.options.transientCellMetadata,
										transientDocumentMetadata:
											a.options.transientDocumentMetadata,
										transientOutputs: a.options.transientOutputs,
									},
								};
							}),
					),
					w.$fk.registerCommand("_resolveNotebookKernels", async (m, r) => {
						const u = m.get(C.$f6),
							a = i.URI.revive(r.uri);
						return u
							.getMatchingKernel({ uri: a, notebookType: r.viewType })
							.all.map((c) => ({
								id: c.id,
								label: c.label,
								description: c.description,
								detail: c.detail,
								isPreferred: !1,
								preloads: c.preloadUris,
							}));
					});
			},
		),
		define(
			de[3471],
			he([1, 0, 4, 175, 70, 3, 102, 244, 30]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$qEc = e.$pEc = e.$oEc = void 0),
					(t = mt(t));
				const r = Object.freeze({
						type: "type",
						displayName: "displayName",
						selector: "selector",
						priority: "priority",
					}),
					u = Object.freeze({
						id: "id",
						displayName: "displayName",
						mimeTypes: "mimeTypes",
						entrypoint: "entrypoint",
						hardDependencies: "dependencies",
						optionalDependencies: "optionalDependencies",
						requiresMessaging: "requiresMessaging",
					}),
					a = Object.freeze({
						type: "type",
						entrypoint: "entrypoint",
						localResourceRoots: "localResourceRoots",
					}),
					h = {
						description: t.localize(8116, null),
						type: "array",
						defaultSnippets: [
							{
								body: [
									{
										type: "",
										displayName: "",
										selector: [{ filenamePattern: "" }],
									},
								],
							},
						],
						items: {
							type: "object",
							required: [r.type, r.displayName, r.selector],
							properties: {
								[r.type]: {
									type: "string",
									description: t.localize(8117, null),
								},
								[r.displayName]: {
									type: "string",
									description: t.localize(8118, null),
								},
								[r.selector]: {
									type: "array",
									description: t.localize(8119, null),
									items: {
										type: "object",
										properties: {
											filenamePattern: {
												type: "string",
												description: t.localize(8120, null),
											},
											excludeFileNamePattern: {
												type: "string",
												description: t.localize(8121, null),
											},
										},
									},
								},
								[r.priority]: {
									type: "string",
									markdownDeprecationMessage: t.localize(8122, null),
									enum: [
										w.NotebookEditorPriority.default,
										w.NotebookEditorPriority.option,
									],
									markdownEnumDescriptions: [
										t.localize(8123, null),
										t.localize(8124, null),
									],
									default: "default",
								},
							},
						},
					},
					c = Object.freeze({
						id: "",
						displayName: "",
						mimeTypes: [""],
						entrypoint: "",
					}),
					n = {
						description: t.localize(8125, null),
						type: "array",
						defaultSnippets: [{ body: [c] }],
						items: {
							defaultSnippets: [{ body: c }],
							allOf: [
								{
									type: "object",
									required: [u.id, u.displayName],
									properties: {
										[u.id]: {
											type: "string",
											description: t.localize(8126, null),
										},
										[u.displayName]: {
											type: "string",
											description: t.localize(8127, null),
										},
										[u.hardDependencies]: {
											type: "array",
											uniqueItems: !0,
											items: { type: "string" },
											markdownDescription: t.localize(8128, null),
										},
										[u.optionalDependencies]: {
											type: "array",
											uniqueItems: !0,
											items: { type: "string" },
											markdownDescription: t.localize(8129, null),
										},
										[u.requiresMessaging]: {
											default: "never",
											enum: ["always", "optional", "never"],
											enumDescriptions: [
												t.localize(8130, null),
												t.localize(8131, null),
												t.localize(8132, null),
											],
											description: t.localize(8133, null),
										},
									},
								},
								{
									oneOf: [
										{
											required: [u.entrypoint, u.mimeTypes],
											properties: {
												[u.mimeTypes]: {
													type: "array",
													description: t.localize(8134, null),
													items: { type: "string" },
												},
												[u.entrypoint]: {
													description: t.localize(8135, null),
													type: "string",
												},
											},
										},
										{
											required: [u.entrypoint],
											properties: {
												[u.entrypoint]: {
													description: t.localize(8136, null),
													type: "object",
													required: ["extends", "path"],
													properties: {
														extends: {
															type: "string",
															description: t.localize(8137, null),
														},
														path: {
															type: "string",
															description: t.localize(8138, null),
														},
													},
												},
											},
										},
									],
								},
							],
						},
					},
					g = {
						description: t.localize(8139, null),
						type: "array",
						defaultSnippets: [{ body: [{ type: "", entrypoint: "" }] }],
						items: {
							type: "object",
							required: [a.type, a.entrypoint],
							properties: {
								[a.type]: {
									type: "string",
									description: t.localize(8140, null),
								},
								[a.entrypoint]: {
									type: "string",
									description: t.localize(8141, null),
								},
								[a.localResourceRoots]: {
									type: "array",
									items: { type: "string" },
									description: t.localize(8142, null),
								},
							},
						},
					};
				(e.$oEc = i.$n2.registerExtensionPoint({
					extensionPoint: "notebooks",
					jsonSchema: h,
					activationEventsGenerator: (f, b) => {
						for (const s of f)
							s.type && b.push(`onNotebookSerializer:${s.type}`);
					},
				})),
					(e.$pEc = i.$n2.registerExtensionPoint({
						extensionPoint: "notebookRenderer",
						jsonSchema: n,
						activationEventsGenerator: (f, b) => {
							for (const s of f) s.id && b.push(`onRenderer:${s.id}`);
						},
					})),
					(e.$qEc = i.$n2.registerExtensionPoint({
						extensionPoint: "notebookPreload",
						jsonSchema: g,
					}));
				class p extends E.$1c {
					constructor() {
						super(...arguments), (this.type = "table");
					}
					shouldRender(b) {
						return !!b.contributes?.notebooks;
					}
					render(b) {
						const s = b.contributes?.notebooks || [];
						if (!s.length)
							return { data: { headers: [], rows: [] }, dispose: () => {} };
						const l = [t.localize(8143, null), t.localize(8144, null)],
							y = s
								.sort(($, v) => $.type.localeCompare(v.type))
								.map(($) => [$.type, $.displayName]);
						return { data: { headers: l, rows: y }, dispose: () => {} };
					}
				}
				class o extends E.$1c {
					constructor() {
						super(...arguments), (this.type = "table");
					}
					shouldRender(b) {
						return !!b.contributes?.notebookRenderer;
					}
					render(b) {
						const s = b.contributes?.notebookRenderer || [];
						if (!s.length)
							return { data: { headers: [], rows: [] }, dispose: () => {} };
						const l = [t.localize(8145, null), t.localize(8146, null)],
							y = s
								.sort(($, v) => $.displayName.localeCompare(v.displayName))
								.map(($) => [$.displayName, $.mimeTypes.join(",")]);
						return { data: { headers: l, rows: y }, dispose: () => {} };
					}
				}
				m.$Io
					.as(d.Extensions.ExtensionFeaturesRegistry)
					.registerExtensionFeature({
						id: "notebooks",
						label: t.localize(8147, null),
						access: { canToggle: !1 },
						renderer: new C.$Ji(p),
					}),
					m.$Io
						.as(d.Extensions.ExtensionFeaturesRegistry)
						.registerExtensionFeature({
							id: "notebookRenderer",
							label: t.localize(8148, null),
							access: { canToggle: !1 },
							renderer: new C.$Ji(o),
						});
			},
		),
		define(
			de[835],
			he([1, 0, 345, 6, 3, 28, 600, 65, 463, 10, 70, 190]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$XIb = e.$WIb = void 0);
				const h = 18;
				e.$WIb = 4;
				const c = Object.freeze({
						codeCellLeftMargin: 28,
						cellRunGutter: 32,
						markdownCellTopMargin: 8,
						markdownCellBottomMargin: 8,
						markdownCellLeftMargin: 0,
						markdownCellGutter: 32,
						focusIndicatorLeftMargin: 4,
					}),
					n = Object.freeze({
						codeCellLeftMargin: 8,
						cellRunGutter: 36,
						markdownCellTopMargin: 6,
						markdownCellBottomMargin: 6,
						markdownCellLeftMargin: 8,
						markdownCellGutter: 36,
						focusIndicatorLeftMargin: 4,
					});
				let g = class extends w.$1c {
					constructor(o, f, b, s, l, y) {
						super(),
							(this.targetWindow = o),
							(this.f = f),
							(this.g = b),
							(this.h = s),
							(this.j = l),
							(this.m = y),
							(this.b = this.D(new i.$re())),
							(this.onDidChangeOptions = this.b.event),
							(this.c = 12);
						const $ = this.h.getValue(u.$56.showCellStatusBar),
							v =
								b?.globalToolbar ?? this.h.getValue(u.$56.globalToolbar) ?? !0,
							S =
								b?.stickyScrollEnabled ??
								this.h.getValue(u.$56.stickyScrollEnabled) ??
								!1,
							I = this.z(),
							T = this.h.getValue(u.$56.consolidatedOutputButton) ?? !0,
							P = this.h.getValue(u.$56.consolidatedRunButton) ?? !1,
							k =
								b?.dragAndDropEnabled ??
								this.h.getValue(u.$56.dragAndDropEnabled) ??
								!0,
							L = this.h.getValue(u.$56.cellToolbarLocation) ?? {
								default: "right",
							},
							D =
								b?.cellToolbarInteraction ??
								this.h.getValue(u.$56.cellToolbarVisibility),
							M = this.h.getValue(u.$56.compactView) ?? !0,
							N = this.y(),
							A = this.t(this.f),
							R = this.u(),
							O = this.w(),
							B = this.h.getValue("editor.fontSize"),
							U = this.h.getValue(u.$56.markupFontSize),
							z = this.h.getValue(u.$56.markdownLineHeight);
						let F =
							this.h.getValue(u.$56.cellEditorOptionsCustomizations) ?? {};
						F = (0, E.$ng)(F) ? F : {};
						const x = this.h.getValue(u.$56.interactiveWindowCollapseCodeCells);
						let H;
						const q = this.h.getValue(u.$56.outputLineHeightDeprecated);
						q !== void 0
							? (this.q(
									u.$56.outputLineHeightDeprecated,
									u.$56.outputLineHeight,
								),
								(H = q))
							: (H = this.h.getValue(u.$56.outputLineHeight));
						let V;
						const G = this.h.getValue(u.$56.outputFontSizeDeprecated);
						G !== void 0
							? (this.q(u.$56.outputFontSizeDeprecated, u.$56.outputFontSize),
								(V = G))
							: (V = this.h.getValue(u.$56.outputFontSize) || B);
						let K;
						const J = this.h.getValue(u.$56.outputFontFamilyDeprecated);
						J !== void 0
							? (this.q(
									u.$56.outputFontFamilyDeprecated,
									u.$56.outputFontFamily,
								),
								(K = J))
							: (K = this.h.getValue(u.$56.outputFontFamily));
						let W;
						const X = this.h.getValue(u.$56.outputScrollingDeprecated);
						X !== void 0
							? (this.q(u.$56.outputScrollingDeprecated, u.$56.outputScrolling),
								(W = X))
							: (W = this.h.getValue(u.$56.outputScrolling));
						const Y = this.r(H, V),
							ie = this.h.getValue(u.$56.outputWordWrap),
							ne = this.h.getValue(u.$56.textOutputLineLimit) ?? 30,
							ee = this.h.getValue(u.$56.LinkifyOutputFilePaths) ?? !0,
							_ = this.h.getValue(u.$56.minimalErrorRendering),
							te = this.n();
						(this.a = {
							...(M ? n : c),
							cellTopMargin: 6,
							cellBottomMargin: 6,
							cellRightMargin: 16,
							cellStatusBarHeight: 22,
							cellOutputPadding: 8,
							markdownPreviewPadding: 8,
							editorToolbarHeight: 0,
							editorTopPadding: te,
							editorBottomPadding: 4,
							editorBottomPaddingWithoutStatusBar: 12,
							collapsedIndicatorHeight: 28,
							showCellStatusBar: $,
							globalToolbar: v,
							stickyScrollEnabled: S,
							stickyScrollMode: I,
							consolidatedOutputButton: T,
							consolidatedRunButton: P,
							dragAndDropEnabled: k,
							cellToolbarLocation: L,
							cellToolbarInteraction: D,
							compactView: M,
							focusIndicator: N,
							insertToolbarPosition: A,
							insertToolbarAlignment: R,
							showFoldingControls: O,
							fontSize: B,
							outputFontSize: V,
							outputFontFamily: K,
							outputLineHeight: Y,
							markupFontSize: U,
							markdownLineHeight: z,
							editorOptionsCustomizations: F,
							focusIndicatorGap: 3,
							interactiveWindowCollapseCodeCells: x,
							markdownFoldHintHeight: 22,
							outputScrolling: W,
							outputWordWrap: ie,
							outputLineLimit: ne,
							outputLinkifyFilePaths: ee,
							outputMinimalError: _,
						}),
							this.D(
								this.h.onDidChangeConfiguration((Q) => {
									this.s(Q);
								}),
							);
					}
					updateOptions(o) {
						this.f !== o &&
							((this.f = o),
							this.s({
								affectsConfiguration(f) {
									return f === u.$56.insertToolbarLocation;
								},
								source: r.ConfigurationTarget.DEFAULT,
								affectedKeys: new Set([u.$56.insertToolbarLocation]),
								change: { keys: [u.$56.insertToolbarLocation], overrides: [] },
							}));
					}
					n() {
						let o = !1;
						const f = (l) => {
								this.c = l;
								const y = Object.assign({}, this.a);
								(y.editorTopPadding = this.c),
									(this.a = y),
									this.b.fire({ editorTopPadding: !0 });
							},
							b = new Set(),
							s = (l) => {
								if (!o && !b.has(l))
									try {
										const y = this.m.resolveDecorationOptions(l, !0);
										if (y.afterContentClassName || y.beforeContentClassName) {
											const $ = this.m.resolveDecorationCSSRules(l);
											if ($ !== null) {
												for (let v = 0; v < $.length; v++)
													if (
														($[v].selectorText.endsWith("::after") ||
															$[v].selectorText.endsWith("::after")) &&
														$[v].cssText.indexOf("top:") > -1
													) {
														const S = this.h.getValue("editor");
														f(
															m.$OK.createFromRawSettings(
																S,
																t.$sjb.getInstance(this.targetWindow).value,
															).lineHeight + 2,
														),
															(o = !0);
														break;
													}
											}
										}
										b.add(l);
									} catch {}
							};
						return (
							this.D(this.m.onDecorationTypeRegistered(s)),
							this.m.listDecorationTypes().forEach(s),
							this.c
						);
					}
					q(o, f) {
						const b = this.h.inspect(o);
						b.application !== void 0 &&
							(this.h.updateValue(o, void 0, r.ConfigurationTarget.APPLICATION),
							this.h.updateValue(
								f,
								b.application.value,
								r.ConfigurationTarget.APPLICATION,
							)),
							b.user !== void 0 &&
								(this.h.updateValue(o, void 0, r.ConfigurationTarget.USER),
								this.h.updateValue(
									f,
									b.user.value,
									r.ConfigurationTarget.USER,
								)),
							b.userLocal !== void 0 &&
								(this.h.updateValue(
									o,
									void 0,
									r.ConfigurationTarget.USER_LOCAL,
								),
								this.h.updateValue(
									f,
									b.userLocal.value,
									r.ConfigurationTarget.USER_LOCAL,
								)),
							b.userRemote !== void 0 &&
								(this.h.updateValue(
									o,
									void 0,
									r.ConfigurationTarget.USER_REMOTE,
								),
								this.h.updateValue(
									f,
									b.userRemote.value,
									r.ConfigurationTarget.USER_REMOTE,
								)),
							b.workspace !== void 0 &&
								(this.h.updateValue(o, void 0, r.ConfigurationTarget.WORKSPACE),
								this.h.updateValue(
									f,
									b.workspace.value,
									r.ConfigurationTarget.WORKSPACE,
								)),
							b.workspaceFolder !== void 0 &&
								(this.h.updateValue(
									o,
									void 0,
									r.ConfigurationTarget.WORKSPACE_FOLDER,
								),
								this.h.updateValue(
									f,
									b.workspaceFolder.value,
									r.ConfigurationTarget.WORKSPACE_FOLDER,
								));
					}
					r(o, f) {
						if (o === 0) {
							const s = this.h.getValue("editor");
							o = C.$osb.readFontInfo(
								this.targetWindow,
								m.$OK.createFromRawSettings(
									s,
									t.$sjb.getInstance(this.targetWindow).value,
								),
							).lineHeight;
						} else if (o < 9) {
							let s = f;
							s === 0 && (s = this.h.getValue("editor.fontSize")), (o = o * s);
						}
						return (o = Math.round(o)), o < 9 && (o = 9), o;
					}
					s(o) {
						const f = o.affectsConfiguration(u.$56.showCellStatusBar),
							b = o.affectsConfiguration(u.$56.cellToolbarLocation),
							s = o.affectsConfiguration(u.$56.cellToolbarVisibility),
							l = o.affectsConfiguration(u.$56.compactView),
							y = o.affectsConfiguration(u.$56.focusIndicator),
							$ = o.affectsConfiguration(u.$56.insertToolbarLocation),
							v = o.affectsConfiguration(
								u.$56.experimentalInsertToolbarAlignment,
							),
							S = o.affectsConfiguration(u.$56.globalToolbar),
							I = o.affectsConfiguration(u.$56.stickyScrollEnabled),
							T = o.affectsConfiguration(u.$56.stickyScrollMode),
							P = o.affectsConfiguration(u.$56.consolidatedOutputButton),
							k = o.affectsConfiguration(u.$56.consolidatedRunButton),
							L = o.affectsConfiguration(u.$56.showFoldingControls),
							D = o.affectsConfiguration(u.$56.dragAndDropEnabled),
							M = o.affectsConfiguration("editor.fontSize"),
							N = o.affectsConfiguration(u.$56.outputFontSize),
							A = o.affectsConfiguration(u.$56.markupFontSize),
							R = o.affectsConfiguration(u.$56.markdownLineHeight),
							O = o.affectsConfiguration("editor.fontFamily"),
							B = o.affectsConfiguration(u.$56.outputFontFamily),
							U = o.affectsConfiguration(u.$56.cellEditorOptionsCustomizations),
							z = o.affectsConfiguration(
								u.$56.interactiveWindowCollapseCodeCells,
							),
							F = o.affectsConfiguration(u.$56.outputLineHeight),
							x = o.affectsConfiguration(u.$56.outputScrolling),
							H = o.affectsConfiguration(u.$56.outputWordWrap),
							q = o.affectsConfiguration(u.$56.LinkifyOutputFilePaths),
							V = o.affectsConfiguration(u.$56.minimalErrorRendering);
						if (
							!f &&
							!b &&
							!s &&
							!l &&
							!y &&
							!$ &&
							!v &&
							!S &&
							!I &&
							!T &&
							!P &&
							!k &&
							!L &&
							!D &&
							!M &&
							!N &&
							!A &&
							!R &&
							!O &&
							!B &&
							!U &&
							!z &&
							!F &&
							!x &&
							!H &&
							!q &&
							!V
						)
							return;
						let G = Object.assign({}, this.a);
						if (
							(f &&
								(G.showCellStatusBar = this.h.getValue(
									u.$56.showCellStatusBar,
								)),
							b &&
								(G.cellToolbarLocation = this.h.getValue(
									u.$56.cellToolbarLocation,
								) ?? { default: "right" }),
							s &&
								!this.g?.cellToolbarInteraction &&
								(G.cellToolbarInteraction = this.h.getValue(
									u.$56.cellToolbarVisibility,
								)),
							y && (G.focusIndicator = this.y()),
							l)
						) {
							const K = this.h.getValue(u.$56.compactView) ?? !0;
							(G = Object.assign(G, { ...(K ? n : c) })), (G.compactView = K);
						}
						if (
							(v && (G.insertToolbarAlignment = this.u()),
							$ && (G.insertToolbarPosition = this.t(this.f)),
							S &&
								this.g?.globalToolbar === void 0 &&
								(G.globalToolbar = this.h.getValue(u.$56.globalToolbar) ?? !0),
							I &&
								this.g?.stickyScrollEnabled === void 0 &&
								(G.stickyScrollEnabled =
									this.h.getValue(u.$56.stickyScrollEnabled) ?? !1),
							T &&
								(G.stickyScrollMode =
									this.h.getValue(u.$56.stickyScrollMode) ?? "flat"),
							P &&
								(G.consolidatedOutputButton =
									this.h.getValue(u.$56.consolidatedOutputButton) ?? !0),
							k &&
								(G.consolidatedRunButton =
									this.h.getValue(u.$56.consolidatedRunButton) ?? !0),
							L && (G.showFoldingControls = this.w()),
							D &&
								(G.dragAndDropEnabled =
									this.h.getValue(u.$56.dragAndDropEnabled) ?? !0),
							M && (G.fontSize = this.h.getValue("editor.fontSize")),
							(N || M) &&
								(G.outputFontSize =
									this.h.getValue(u.$56.outputFontSize) || G.fontSize),
							A && (G.markupFontSize = this.h.getValue(u.$56.markupFontSize)),
							R &&
								(G.markdownLineHeight = this.h.getValue(
									u.$56.markdownLineHeight,
								)),
							B &&
								(G.outputFontFamily = this.h.getValue(u.$56.outputFontFamily)),
							U &&
								(G.editorOptionsCustomizations = this.h.getValue(
									u.$56.cellEditorOptionsCustomizations,
								)),
							z &&
								(G.interactiveWindowCollapseCodeCells = this.h.getValue(
									u.$56.interactiveWindowCollapseCodeCells,
								)),
							F || M || N)
						) {
							const K = this.h.getValue(u.$56.outputLineHeight);
							G.outputLineHeight = this.r(K, G.outputFontSize);
						}
						H && (G.outputWordWrap = this.h.getValue(u.$56.outputWordWrap)),
							x && (G.outputScrolling = this.h.getValue(u.$56.outputScrolling)),
							q &&
								(G.outputLinkifyFilePaths = this.h.getValue(
									u.$56.LinkifyOutputFilePaths,
								)),
							V &&
								(G.outputMinimalError = this.h.getValue(
									u.$56.minimalErrorRendering,
								)),
							(this.a = Object.freeze(G)),
							this.b.fire({
								cellStatusBarVisibility: f,
								cellToolbarLocation: b,
								cellToolbarInteraction: s,
								compactView: l,
								focusIndicator: y,
								insertToolbarPosition: $,
								insertToolbarAlignment: v,
								globalToolbar: S,
								stickyScrollEnabled: I,
								stickyScrollMode: T,
								showFoldingControls: L,
								consolidatedOutputButton: P,
								consolidatedRunButton: k,
								dragAndDropEnabled: D,
								fontSize: M,
								outputFontSize: N,
								markupFontSize: A,
								markdownLineHeight: R,
								fontFamily: O,
								outputFontFamily: B,
								editorOptionsCustomizations: U,
								interactiveWindowCollapseCodeCells: z,
								outputLineHeight: F,
								outputScrolling: x,
								outputWordWrap: H,
								outputLinkifyFilePaths: q,
								minimalError: V,
							});
					}
					t(o) {
						return o
							? "hidden"
							: (this.h.getValue(u.$56.insertToolbarLocation) ?? "both");
					}
					u() {
						return (
							this.h.getValue(u.$56.experimentalInsertToolbarAlignment) ??
							"center"
						);
					}
					w() {
						return this.h.getValue(u.$56.showFoldingControls) ?? "mouseover";
					}
					y() {
						return this.h.getValue(u.$56.focusIndicator) ?? "gutter";
					}
					z() {
						return this.h.getValue(u.$56.stickyScrollMode) ?? "flat";
					}
					getCellCollapseDefault() {
						return this.a.interactiveWindowCollapseCodeCells === "never"
							? { codeCell: { inputCollapsed: !1 } }
							: { codeCell: { inputCollapsed: !0 } };
					}
					getLayoutConfiguration() {
						return this.a;
					}
					getDisplayOptions() {
						return this.a;
					}
					getCellEditorContainerLeftMargin() {
						const { codeCellLeftMargin: o, cellRunGutter: f } = this.a;
						return o + f;
					}
					computeCollapsedMarkdownCellHeight(o) {
						const { bottomToolbarGap: f } =
							this.computeBottomToolbarDimensions(o);
						return (
							this.a.markdownCellTopMargin +
							this.a.collapsedIndicatorHeight +
							f +
							this.a.markdownCellBottomMargin
						);
					}
					computeBottomToolbarOffset(o, f) {
						const { bottomToolbarGap: b, bottomToolbarHeight: s } =
							this.computeBottomToolbarDimensions(f);
						return o - b - s / 2;
					}
					computeCodeCellEditorWidth(o) {
						return (
							o -
							(this.a.codeCellLeftMargin +
								this.a.cellRunGutter +
								this.a.cellRightMargin)
						);
					}
					computeMarkdownCellEditorWidth(o) {
						return (
							o -
							this.a.markdownCellGutter -
							this.a.markdownCellLeftMargin -
							this.a.cellRightMargin
						);
					}
					computeStatusBarHeight() {
						return this.a.cellStatusBarHeight;
					}
					C(o, f, b, s) {
						return b === "left" || s !== "hidden"
							? { bottomToolbarGap: 18, bottomToolbarHeight: 18 }
							: f === "betweenCells" || f === "both"
								? o
									? { bottomToolbarGap: 12, bottomToolbarHeight: 20 }
									: { bottomToolbarGap: 20, bottomToolbarHeight: 20 }
								: { bottomToolbarGap: 0, bottomToolbarHeight: 0 };
					}
					computeBottomToolbarDimensions(o) {
						const f = this.a,
							b = this.computeCellToolbarLocation(o),
							{ bottomToolbarGap: s, bottomToolbarHeight: l } = this.C(
								f.compactView,
								f.insertToolbarPosition,
								f.insertToolbarAlignment,
								b,
							);
						return { bottomToolbarGap: s, bottomToolbarHeight: l };
					}
					computeCellToolbarLocation(o) {
						const f = this.a.cellToolbarLocation;
						if (typeof f == "string") {
							if (f === "left" || f === "right" || f === "hidden") return f;
						} else if (o) {
							const b = f[o] ?? f.default;
							let s = "right";
							switch (b) {
								case "left":
									s = "left";
									break;
								case "right":
									s = "right";
									break;
								case "hidden":
									s = "hidden";
									break;
								default:
									s = "right";
									break;
							}
							return s;
						}
						return "right";
					}
					computeTopInsertToolbarHeight(o) {
						if (
							this.a.insertToolbarPosition === "betweenCells" ||
							this.a.insertToolbarPosition === "both"
						)
							return h;
						const f = this.computeCellToolbarLocation(o);
						return f === "left" || f === "right" ? h : 0;
					}
					computeEditorPadding(o, f) {
						return {
							top: this.c,
							bottom: this.F(o, f)
								? this.a.editorBottomPadding
								: this.a.editorBottomPaddingWithoutStatusBar,
						};
					}
					computeEditorStatusbarHeight(o, f) {
						return this.F(o, f) ? this.computeStatusBarHeight() : 0;
					}
					F(o, f) {
						const b = this.j.getCellExecution(f);
						return this.a.showCellStatusBar === "visible"
							? !0
							: this.a.showCellStatusBar === "visibleAfterExecute"
								? typeof o.lastRunSuccess == "boolean" || b !== void 0
								: !1;
					}
					computeWebviewOptions() {
						return {
							outputNodePadding: this.a.cellOutputPadding,
							outputNodeLeftPadding: this.a.cellOutputPadding,
							previewNodePadding: this.a.markdownPreviewPadding,
							markdownLeftMargin:
								this.a.markdownCellGutter + this.a.markdownCellLeftMargin,
							leftMargin: this.a.codeCellLeftMargin,
							rightMargin: this.a.cellRightMargin,
							runGutter: this.a.cellRunGutter,
							dragAndDropEnabled: this.a.dragAndDropEnabled,
							fontSize: this.a.fontSize,
							outputFontSize: this.a.outputFontSize,
							outputFontFamily: this.a.outputFontFamily,
							markupFontSize: this.a.markupFontSize,
							markdownLineHeight: this.a.markdownLineHeight,
							outputLineHeight: this.a.outputLineHeight,
							outputScrolling: this.a.outputScrolling,
							outputWordWrap: this.a.outputWordWrap,
							outputLineLimit: this.a.outputLineLimit,
							outputLinkifyFilePaths: this.a.outputLinkifyFilePaths,
							minimalError: this.a.outputMinimalError,
						};
					}
					computeDiffWebviewOptions() {
						return {
							outputNodePadding: this.a.cellOutputPadding,
							outputNodeLeftPadding: 0,
							previewNodePadding: this.a.markdownPreviewPadding,
							markdownLeftMargin: 0,
							leftMargin: 32,
							rightMargin: 0,
							runGutter: 0,
							dragAndDropEnabled: !1,
							fontSize: this.a.fontSize,
							outputFontSize: this.a.outputFontSize,
							outputFontFamily: this.a.outputFontFamily,
							markupFontSize: this.a.markupFontSize,
							markdownLineHeight: this.a.markdownLineHeight,
							outputLineHeight: this.a.outputLineHeight,
							outputScrolling: this.a.outputScrolling,
							outputWordWrap: this.a.outputWordWrap,
							outputLineLimit: this.a.outputLineLimit,
							outputLinkifyFilePaths: !1,
							minimalError: !1,
						};
					}
					computeIndicatorPosition(o, f, b) {
						const { bottomToolbarGap: s } =
							this.computeBottomToolbarDimensions(b);
						return {
							bottomIndicatorTop: o - s - this.a.cellBottomMargin - f,
							verticalIndicatorHeight: o - s - f,
						};
					}
				};
				(e.$XIb = g),
					(e.$XIb = g = Ne([j(3, r.$gj), j(4, a.$d6), j(5, d.$dtb)], g));
			},
		),
		define(
			de[3472],
			he([1, 0, 6, 3, 59, 19, 47, 184, 5, 34, 70, 611, 190, 243, 161]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$KGc = void 0);
				let g = class extends i.$1c {
					constructor($, v, S, I) {
						super(),
							(this.q = $),
							(this.r = v),
							(this.s = S),
							(this.t = I),
							(this.a = new w.$Gc()),
							(this.b = new w.$Gc()),
							(this.f = new w.$Gc()),
							(this.g = new w.$Gc()),
							(this.j = new w.$Gc()),
							(this.m = this.D(new t.$re())),
							(this.onDidChangeExecution = this.m.event),
							(this.n = this.D(new t.$re())),
							(this.onDidChangeLastRunFailState = this.n.event);
					}
					getLastFailedCellForNotebook($) {
						const v = this.j.get($);
						return v?.visible ? v.cellHandle : void 0;
					}
					forceCancelNotebookExecutions($) {
						const v = this.a.get($);
						if (v) for (const S of v.values()) this.y($, S.cellHandle, S);
						this.b.has($) && this.C($);
					}
					getCellExecution($) {
						const v = u.CellUri.parse($);
						if (!v) throw new Error(`Not a cell URI: ${$}`);
						const S = this.a.get(v.notebook);
						if (S) return S.get(v.handle);
					}
					getExecution($) {
						return this.b.get($)?.[0];
					}
					getCellExecutionsForNotebook($) {
						const v = this.a.get($);
						return v ? Array.from(v.values()) : [];
					}
					getCellExecutionsByHandleForNotebook($) {
						const v = this.a.get($);
						return v ? new Map(v.entries()) : void 0;
					}
					w($, v, S) {
						this.m.fire(new p($, v, S));
					}
					y($, v, S, I) {
						const T = this.a.get($);
						if (!T) {
							this.r.debug(
								`NotebookExecutionStateService#_onCellExecutionDidComplete - unknown notebook ${$.toString()}`,
							);
							return;
						}
						S.dispose();
						const P = u.CellUri.generate($, v);
						this.g.get(P)?.dispose(),
							this.g.delete(P),
							T.delete(v),
							T.size === 0 &&
								(this.a.delete($), this.f.get($)?.dispose(), this.f.delete($)),
							I !== void 0 &&
								(I
									? (this.a.size === 0 &&
											this.t.playSignal(d.$Twb.notebookCellCompleted),
										this.J($))
									: (this.t.playSignal(d.$Twb.notebookCellFailed),
										this.H($, v))),
							this.m.fire(new p($, v));
					}
					z($, v) {
						this.m.fire(new o($, v));
					}
					C($) {
						const v = this.b.get($);
						if (!Array.isArray(v)) {
							this.r.debug(
								`NotebookExecutionStateService#_onCellExecutionDidComplete - unknown notebook ${$.toString()}`,
							);
							return;
						}
						this.b.delete($),
							this.m.fire(new o($)),
							v.forEach((S) => S.dispose());
					}
					createCellExecution($, v) {
						const S = this.s.getNotebookTextModel($);
						if (!S) throw new Error(`Notebook not found: ${$.toString()}`);
						let I = this.a.get($);
						if (!I) {
							const P = this.q.createInstance(f, $);
							this.f.set($, P), (I = new Map()), this.a.set($, I);
						}
						let T = I.get(v);
						return (
							T ||
								((T = this.F(S, v)),
								I.set(v, T),
								T.initialize(),
								this.m.fire(new p($, v, T))),
							T
						);
					}
					createExecution($) {
						const v = this.s.getNotebookTextModel($);
						if (!v) throw new Error(`Notebook not found: ${$.toString()}`);
						if (!this.f.has($)) {
							const I = this.q.createInstance(f, $);
							this.f.set($, I);
						}
						let S = this.b.get($);
						return (
							S ||
								((S = this.G(v)),
								this.b.set($, S),
								this.m.fire(new o($, S[0]))),
							S[0]
						);
					}
					F($, v) {
						const S = $.uri,
							I = this.q.createInstance(s, v, $),
							T = (0, i.$Xc)(
								I.onDidUpdate(() => this.w(S, v, I)),
								I.onDidComplete((P) => this.y(S, v, I, P)),
							);
						return this.g.set(u.CellUri.generate(S, v), T), I;
					}
					G($) {
						const v = $.uri,
							S = this.q.createInstance(l, $),
							I = (0, i.$Xc)(
								S.onDidUpdate(() => this.z(v, S)),
								S.onDidComplete(() => this.C(v)),
							);
						return [S, I];
					}
					H($, v) {
						const S = this.j.get($),
							I = this.s.getNotebookTextModel($);
						if (!I) return;
						const T = {
							cellHandle: v,
							disposable: S ? S.disposable : this.L(I),
							visible: !0,
						};
						this.j.set($, T), this.n.fire({ visible: !0, notebook: $ });
					}
					I($, v) {
						const S = this.j.get($);
						S &&
							this.j.set($, {
								cellHandle: S.cellHandle,
								disposable: S.disposable,
								visible: v,
							}),
							this.n.fire({ visible: v, notebook: $ });
					}
					J($) {
						const v = this.j.get($);
						v && (v.disposable?.dispose(), this.j.delete($)),
							this.n.fire({ visible: !1, notebook: $ });
					}
					L($) {
						return $.onWillAddRemoveCells((v) => {
							const S = this.j.get($.uri)?.cellHandle;
							if (S !== void 0) {
								const I = $.cells.findIndex((T) => T.handle === S);
								v.rawEvent.changes.forEach(([T, P, k]) => {
									P && I >= T && I < T + P && this.I($.uri, !1),
										k.some((L) => L.handle === S) && this.I($.uri, !0);
								});
							}
						});
					}
					dispose() {
						super.dispose(),
							this.a.forEach(($) => {
								$.forEach((v) => v.dispose()), $.clear();
							}),
							this.a.clear(),
							this.b.forEach(($) => {
								$.forEach((v) => v.dispose());
							}),
							this.b.clear(),
							this.g.forEach(($) => $.dispose()),
							this.f.forEach(($) => $.dispose()),
							this.j.forEach(($) => $.disposable.dispose());
					}
				};
				(e.$KGc = g),
					(e.$KGc = g =
						Ne([j(0, m.$Li), j(1, r.$ik), j(2, n.$MIb), j(3, d.$Owb)], g));
				class p {
					constructor($, v, S) {
						(this.notebook = $),
							(this.cellHandle = v),
							(this.changed = S),
							(this.type = h.NotebookExecutionType.cell);
					}
					affectsCell($) {
						const v = u.CellUri.parse($);
						return (
							!!v &&
							(0, E.$gh)(this.notebook, v.notebook) &&
							this.cellHandle === v.handle
						);
					}
					affectsNotebook($) {
						return (0, E.$gh)(this.notebook, $);
					}
				}
				class o {
					constructor($, v) {
						(this.notebook = $),
							(this.changed = v),
							(this.type = h.NotebookExecutionType.notebook);
					}
					affectsNotebook($) {
						return (0, E.$gh)(this.notebook, $);
					}
				}
				let f = class extends i.$1c {
					constructor($, v, S, I, T, P) {
						super(),
							(this.b = v),
							(this.f = S),
							(this.g = I),
							(this.j = T),
							(this.m = P),
							this.m.debug(`NotebookExecution#ctor ${$.toString()}`);
						const k = this.b.getNotebookTextModel($);
						if (!k) throw new Error("Notebook not found: " + $);
						(this.a = k),
							this.D(this.a.onWillAddRemoveCells((L) => this.r(L))),
							this.D(this.a.onWillDispose(() => this.q()));
					}
					n() {
						this.m.debug("NotebookExecutionListeners#cancelAll");
						const $ = this.j.getCellExecutionsForNotebook(this.a.uri);
						this.g.cancelNotebookCellHandles(
							this.a,
							$.map((v) => v.cellHandle),
						);
					}
					q() {
						this.m.debug("NotebookExecution#onWillDisposeDocument"), this.n();
					}
					r($) {
						const v = this.j.getCellExecutionsByHandleForNotebook(this.a.uri),
							S = new Set(),
							I = new Set();
						if (
							(v &&
								$.rawEvent.changes.forEach(([T, P]) => {
									P &&
										this.a.cells
											.slice(T, T + P)
											.map((L) => L.handle)
											.forEach((L) => {
												const D = v.get(L);
												D?.state === u.NotebookCellExecutionState.Executing
													? S.add(L)
													: D && I.add(L);
											});
								}),
							S.size || I.size)
						) {
							const T = this.f.getSelectedOrSuggestedKernel(this.a);
							if (T) {
								const k = T.implementsInterrupt ? [...S] : [...S, ...I];
								this.m.debug(
									`NotebookExecution#onWillAddRemoveCells, ${JSON.stringify([...k])}`,
								),
									k.length && T.cancelNotebookCellExecution(this.a.uri, k);
							}
						}
					}
				};
				f = Ne(
					[j(1, n.$MIb), j(2, c.$f6), j(3, a.$c6), j(4, h.$d6), j(5, r.$ik)],
					f,
				);
				function b(y, $) {
					if (y.editType === a.CellExecutionUpdateType.Output)
						return {
							editType: u.CellEditType.Output,
							handle: y.cellHandle,
							append: y.append,
							outputs: y.outputs,
						};
					if (y.editType === a.CellExecutionUpdateType.OutputItems)
						return {
							editType: u.CellEditType.OutputItems,
							items: y.items,
							append: y.append,
							outputId: y.outputId,
						};
					if (y.editType === a.CellExecutionUpdateType.ExecutionState) {
						const v = {};
						return (
							typeof y.executionOrder < "u" &&
								(v.executionOrder = y.executionOrder),
							typeof y.runStartTime < "u" && (v.runStartTime = y.runStartTime),
							{
								editType: u.CellEditType.PartialInternalMetadata,
								handle: $,
								internalMetadata: v,
							}
						);
					}
					throw new Error("Unknown cell update type");
				}
				let s = class extends i.$1c {
					get state() {
						return this.f;
					}
					get notebook() {
						return this.m.uri;
					}
					get didPause() {
						return this.g;
					}
					get isPaused() {
						return this.j;
					}
					constructor($, v, S) {
						super(),
							(this.cellHandle = $),
							(this.m = v),
							(this.n = S),
							(this.a = this.D(new t.$re())),
							(this.onDidUpdate = this.a.event),
							(this.b = this.D(new t.$re())),
							(this.onDidComplete = this.b.event),
							(this.f = u.NotebookCellExecutionState.Unconfirmed),
							(this.g = !1),
							(this.j = !1),
							this.n.debug(`CellExecution#ctor ${this.q()}`);
					}
					initialize() {
						const $ = {
							editType: u.CellEditType.PartialInternalMetadata,
							handle: this.cellHandle,
							internalMetadata: {
								executionId: (0, C.$9g)(),
								runStartTime: null,
								runEndTime: null,
								lastRunSuccess: null,
								executionOrder: null,
								renderDuration: null,
							},
						};
						this.s([$]);
					}
					q() {
						return `${this.m.uri.toString()}, ${this.cellHandle}`;
					}
					r($) {
						const v = $.map((S) => a.CellExecutionUpdateType[S.editType]).join(
							", ",
						);
						this.n.debug(`CellExecution#updateExecution ${this.q()}, [${v}]`);
					}
					confirm() {
						this.n.debug(`CellExecution#confirm ${this.q()}`),
							(this.f = u.NotebookCellExecutionState.Pending),
							this.a.fire();
					}
					update($) {
						this.r($),
							$.some(
								(I) => I.editType === a.CellExecutionUpdateType.ExecutionState,
							) && (this.f = u.NotebookCellExecutionState.Executing),
							!this.g &&
								$.some(
									(I) =>
										I.editType === a.CellExecutionUpdateType.ExecutionState &&
										I.didPause,
								) &&
								(this.g = !0);
						const v = [...$]
							.reverse()
							.find(
								(I) =>
									I.editType === a.CellExecutionUpdateType.ExecutionState &&
									typeof I.isPaused == "boolean",
							);
						if (
							(v && (this.j = v.isPaused),
							!this.m.cells.find((I) => I.handle === this.cellHandle))
						)
							this.n.debug(
								`CellExecution#update, updating cell not in notebook: ${this.m.uri.toString()}, ${this.cellHandle}`,
							);
						else {
							const I = $.map((T) => b(T, this.cellHandle));
							this.s(I);
						}
						$.some(
							(I) => I.editType === a.CellExecutionUpdateType.ExecutionState,
						) && this.a.fire();
					}
					complete($) {
						const v = this.m.cells.find((S) => S.handle === this.cellHandle);
						if (!v)
							this.n.debug(
								`CellExecution#complete, completing cell not in notebook: ${this.m.uri.toString()}, ${this.cellHandle}`,
							);
						else {
							const S = {
								editType: u.CellEditType.PartialInternalMetadata,
								handle: this.cellHandle,
								internalMetadata: {
									lastRunSuccess: $.lastRunSuccess,
									runStartTime: this.g ? null : v.internalMetadata.runStartTime,
									runEndTime: this.g ? null : $.runEndTime,
									error: $.error,
								},
							};
							this.s([S]);
						}
						this.b.fire($.lastRunSuccess);
					}
					s($) {
						this.m.applyEdits($, !0, void 0, () => {}, void 0, !1);
					}
				};
				s = Ne([j(2, r.$ik)], s);
				let l = class extends i.$1c {
					get state() {
						return this.f;
					}
					get notebook() {
						return this.g.uri;
					}
					constructor($, v) {
						super(),
							(this.g = $),
							(this.j = v),
							(this.a = this.D(new t.$re())),
							(this.onDidUpdate = this.a.event),
							(this.b = this.D(new t.$re())),
							(this.onDidComplete = this.b.event),
							(this.f = u.NotebookExecutionState.Unconfirmed),
							this.j.debug("NotebookExecution#ctor");
					}
					m($) {
						this.j.debug(`${$} ${this.g.uri.toString()}`);
					}
					confirm() {
						this.m("Execution#confirm"),
							(this.f = u.NotebookExecutionState.Pending),
							this.a.fire();
					}
					begin() {
						this.m("Execution#begin"),
							(this.f = u.NotebookExecutionState.Executing),
							this.a.fire();
					}
					complete() {
						this.m("Execution#begin"),
							(this.f = u.NotebookExecutionState.Unconfirmed),
							this.b.fire();
					}
				};
				l = Ne([j(1, r.$ik)], l);
			},
		),
		