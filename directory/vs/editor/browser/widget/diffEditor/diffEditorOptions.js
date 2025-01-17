import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/observable.js';
import '../../../../base/common/observableInternal/utils.js';
import '../../../../base/common/uint.js';
import './components/diffEditorViewZones/diffEditorViewZones.js';
import '../../../common/config/diffEditor.js';
import '../../../common/config/editorOptions.js';
import '../../../../platform/accessibility/common/accessibility.js';
define(
			de[1680],
			he([1, 0, 77, 457, 210, 1216, 1525, 38, 91]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$6xb = void 0);
				let r = class {
					get editorOptions() {
						return this.a;
					}
					constructor(g, p) {
						(this.d = p),
							(this.b = (0, t.observableValue)(this, 0)),
							(this.c = (0, t.observableFromEvent)(
								this,
								this.d.onDidChangeScreenReaderOptimized,
								() => this.d.isScreenReaderOptimized(),
							)),
							(this.couldShowInlineViewBecauseOfSize = (0, t.derived)(
								this,
								(f) =>
									this.a.read(f).renderSideBySide &&
									this.b.read(f) <=
										this.a.read(f).renderSideBySideInlineBreakpoint,
							)),
							(this.renderOverviewRuler = (0, t.derived)(
								this,
								(f) => this.a.read(f).renderOverviewRuler,
							)),
							(this.renderSideBySide = (0, t.derived)(this, (f) =>
								this.compactMode.read(f) && this.g.read(f)
									? !1
									: this.a.read(f).renderSideBySide &&
										!(
											this.a.read(f).useInlineViewWhenSpaceIsLimited &&
											this.couldShowInlineViewBecauseOfSize.read(f) &&
											!this.c.read(f)
										),
							)),
							(this.readOnly = (0, t.derived)(
								this,
								(f) => this.a.read(f).readOnly,
							)),
							(this.shouldRenderOldRevertArrows = (0, t.derived)(
								this,
								(f) =>
									!(
										!this.a.read(f).renderMarginRevertIcon ||
										!this.renderSideBySide.read(f) ||
										this.readOnly.read(f) ||
										this.shouldRenderGutterMenu.read(f)
									),
							)),
							(this.shouldRenderGutterMenu = (0, t.derived)(
								this,
								(f) => this.a.read(f).renderGutterMenu,
							)),
							(this.renderIndicators = (0, t.derived)(
								this,
								(f) => this.a.read(f).renderIndicators,
							)),
							(this.enableSplitViewResizing = (0, t.derived)(
								this,
								(f) => this.a.read(f).enableSplitViewResizing,
							)),
							(this.splitViewDefaultRatio = (0, t.derived)(
								this,
								(f) => this.a.read(f).splitViewDefaultRatio,
							)),
							(this.ignoreTrimWhitespace = (0, t.derived)(
								this,
								(f) => this.a.read(f).ignoreTrimWhitespace,
							)),
							(this.maxComputationTimeMs = (0, t.derived)(
								this,
								(f) => this.a.read(f).maxComputationTime,
							)),
							(this.showMoves = (0, t.derived)(
								this,
								(f) =>
									this.a.read(f).experimental.showMoves &&
									this.renderSideBySide.read(f),
							)),
							(this.isInEmbeddedEditor = (0, t.derived)(
								this,
								(f) => this.a.read(f).isInEmbeddedEditor,
							)),
							(this.diffWordWrap = (0, t.derived)(
								this,
								(f) => this.a.read(f).diffWordWrap,
							)),
							(this.originalEditable = (0, t.derived)(
								this,
								(f) => this.a.read(f).originalEditable,
							)),
							(this.diffCodeLens = (0, t.derived)(
								this,
								(f) => this.a.read(f).diffCodeLens,
							)),
							(this.accessibilityVerbose = (0, t.derived)(
								this,
								(f) => this.a.read(f).accessibilityVerbose,
							)),
							(this.diffAlgorithm = (0, t.derived)(
								this,
								(f) => this.a.read(f).diffAlgorithm,
							)),
							(this.showEmptyDecorations = (0, t.derived)(
								this,
								(f) => this.a.read(f).experimental.showEmptyDecorations,
							)),
							(this.onlyShowAccessibleDiffViewer = (0, t.derived)(
								this,
								(f) => this.a.read(f).onlyShowAccessibleDiffViewer,
							)),
							(this.compactMode = (0, t.derived)(
								this,
								(f) => this.a.read(f).compactMode,
							)),
							(this.e = (0, t.derived)(
								this,
								(f) => this.a.read(f).experimental.useTrueInlineView,
							)),
							(this.useTrueInlineDiffRendering = (0, t.derived)(
								this,
								(f) => !this.renderSideBySide.read(f) && this.e.read(f),
							)),
							(this.hideUnchangedRegions = (0, t.derived)(
								this,
								(f) => this.a.read(f).hideUnchangedRegions.enabled,
							)),
							(this.hideUnchangedRegionsRevealLineCount = (0, t.derived)(
								this,
								(f) => this.a.read(f).hideUnchangedRegions.revealLineCount,
							)),
							(this.hideUnchangedRegionsContextLineCount = (0, t.derived)(
								this,
								(f) => this.a.read(f).hideUnchangedRegions.contextLineCount,
							)),
							(this.hideUnchangedRegionsMinimumLineCount = (0, t.derived)(
								this,
								(f) => this.a.read(f).hideUnchangedRegions.minimumLineCount,
							)),
							(this.f = (0, t.observableValue)(this, void 0)),
							(this.g = this.f
								.map(this, (f) =>
									(0, i.$Pd)(this, (b) => {
										const s = f?.diff.read(b);
										return s ? u(s, this.e.read(b)) : void 0;
									}),
								)
								.flatten()
								.map(this, (f) => !!f)),
							(this.inlineViewHideOriginalLineNumbers = this.compactMode);
						const o = { ...g, ...c(g, C.$5xb) };
						this.a = (0, t.observableValue)(this, o);
					}
					updateOptions(g) {
						const p = c(g, this.a.get()),
							o = { ...this.a.get(), ...g, ...p };
						this.a.set(o, void 0, { changedOptions: g });
					}
					setWidth(g) {
						this.b.set(g, void 0);
					}
					setModel(g) {
						this.f.set(g, void 0);
					}
				};
				(e.$6xb = r), (e.$6xb = r = Ne([j(1, m.$XK)], r));
				function u(n, g) {
					return n.mappings.every(
						(p) =>
							a(p.lineRangeMapping) ||
							h(p.lineRangeMapping) ||
							(g && (0, E.$4xb)(p.lineRangeMapping)),
					);
				}
				function a(n) {
					return n.original.length === 0;
				}
				function h(n) {
					return n.modified.length === 0;
				}
				function c(n, g) {
					return {
						enableSplitViewResizing: (0, d.boolean)(
							n.enableSplitViewResizing,
							g.enableSplitViewResizing,
						),
						splitViewDefaultRatio: (0, d.clampedFloat)(
							n.splitViewDefaultRatio,
							0.5,
							0.1,
							0.9,
						),
						renderSideBySide: (0, d.boolean)(
							n.renderSideBySide,
							g.renderSideBySide,
						),
						renderMarginRevertIcon: (0, d.boolean)(
							n.renderMarginRevertIcon,
							g.renderMarginRevertIcon,
						),
						maxComputationTime: (0, d.clampedInt)(
							n.maxComputationTime,
							g.maxComputationTime,
							0,
							w.Constants.MAX_SAFE_SMALL_INTEGER,
						),
						maxFileSize: (0, d.clampedInt)(
							n.maxFileSize,
							g.maxFileSize,
							0,
							w.Constants.MAX_SAFE_SMALL_INTEGER,
						),
						ignoreTrimWhitespace: (0, d.boolean)(
							n.ignoreTrimWhitespace,
							g.ignoreTrimWhitespace,
						),
						renderIndicators: (0, d.boolean)(
							n.renderIndicators,
							g.renderIndicators,
						),
						originalEditable: (0, d.boolean)(
							n.originalEditable,
							g.originalEditable,
						),
						diffCodeLens: (0, d.boolean)(n.diffCodeLens, g.diffCodeLens),
						renderOverviewRuler: (0, d.boolean)(
							n.renderOverviewRuler,
							g.renderOverviewRuler,
						),
						diffWordWrap: (0, d.stringSet)(n.diffWordWrap, g.diffWordWrap, [
							"off",
							"on",
							"inherit",
						]),
						diffAlgorithm: (0, d.stringSet)(
							n.diffAlgorithm,
							g.diffAlgorithm,
							["legacy", "advanced"],
							{ smart: "legacy", experimental: "advanced" },
						),
						accessibilityVerbose: (0, d.boolean)(
							n.accessibilityVerbose,
							g.accessibilityVerbose,
						),
						experimental: {
							showMoves: (0, d.boolean)(
								n.experimental?.showMoves,
								g.experimental.showMoves,
							),
							showEmptyDecorations: (0, d.boolean)(
								n.experimental?.showEmptyDecorations,
								g.experimental.showEmptyDecorations,
							),
							useTrueInlineView: (0, d.boolean)(
								n.experimental?.useTrueInlineView,
								g.experimental.useTrueInlineView,
							),
						},
						hideUnchangedRegions: {
							enabled: (0, d.boolean)(
								n.hideUnchangedRegions?.enabled ??
									n.experimental?.collapseUnchangedRegions,
								g.hideUnchangedRegions.enabled,
							),
							contextLineCount: (0, d.clampedInt)(
								n.hideUnchangedRegions?.contextLineCount,
								g.hideUnchangedRegions.contextLineCount,
								0,
								w.Constants.MAX_SAFE_SMALL_INTEGER,
							),
							minimumLineCount: (0, d.clampedInt)(
								n.hideUnchangedRegions?.minimumLineCount,
								g.hideUnchangedRegions.minimumLineCount,
								0,
								w.Constants.MAX_SAFE_SMALL_INTEGER,
							),
							revealLineCount: (0, d.clampedInt)(
								n.hideUnchangedRegions?.revealLineCount,
								g.hideUnchangedRegions.revealLineCount,
								0,
								w.Constants.MAX_SAFE_SMALL_INTEGER,
							),
						},
						isInEmbeddedEditor: (0, d.boolean)(
							n.isInEmbeddedEditor,
							g.isInEmbeddedEditor,
						),
						onlyShowAccessibleDiffViewer: (0, d.boolean)(
							n.onlyShowAccessibleDiffViewer,
							g.onlyShowAccessibleDiffViewer,
						),
						renderSideBySideInlineBreakpoint: (0, d.clampedInt)(
							n.renderSideBySideInlineBreakpoint,
							g.renderSideBySideInlineBreakpoint,
							0,
							w.Constants.MAX_SAFE_SMALL_INTEGER,
						),
						useInlineViewWhenSpaceIsLimited: (0, d.boolean)(
							n.useInlineViewWhenSpaceIsLimited,
							g.useInlineViewWhenSpaceIsLimited,
						),
						renderGutterMenu: (0, d.boolean)(
							n.renderGutterMenu,
							g.renderGutterMenu,
						),
						compactMode: (0, d.boolean)(n.compactMode, g.compactMode),
					};
				}
			},
		),
		