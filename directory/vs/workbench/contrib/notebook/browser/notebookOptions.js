import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/pixelRatio.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/types.js';
import '../../../../editor/browser/config/fontMeasurements.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../editor/common/config/fontInfo.js';
import '../../../../platform/configuration/common/configuration.js';
import '../common/notebookCommon.js';
import '../common/notebookExecutionStateService.js';
define(
			de[835],
			he([1, 0, 345, 6, 3, 28, 600, 65, 463, 10, 70, 190]),
			function (ce /*require*/,
 e /*exports*/,
 t /*pixelRatio*/,
 i /*event*/,
 w /*lifecycle*/,
 E /*types*/,
 C /*fontMeasurements*/,
 d /*codeEditorService*/,
 m /*fontInfo*/,
 r /*configuration*/,
 u /*notebookCommon*/,
 a /*notebookExecutionStateService*/) {
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
		