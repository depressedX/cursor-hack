import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/codicons.js';
import '../../../common/model.js';
import '../../../common/model/textModel.js';
import '../../../../nls.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../base/common/themables.js';
define(
			de[1219],
			he([1, 0, 14, 64, 122, 4, 51, 79, 35, 26]),
			function (ce /*require*/,
 e /*exports*/,
 t /*codicons*/,
 i /*model*/,
 w /*textModel*/,
 E /*nls*/,
 C /*colorRegistry*/,
 d /*iconRegistry*/,
 m /*themeService*/,
 r /*themables*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$WNb = e.$VNb = e.$UNb = e.$TNb = e.$SNb = void 0);
				const u = (0, C.$wP)(
					"editor.foldBackground",
					{
						light: (0, C.$BP)(C.$rQ, 0.3),
						dark: (0, C.$BP)(C.$rQ, 0.3),
						hcDark: null,
						hcLight: null,
					},
					(0, E.localize)(1066, null),
					!0,
				);
				(0, C.$wP)(
					"editor.foldPlaceholderForeground",
					{ light: "#808080", dark: "#808080", hcDark: null, hcLight: null },
					(0, E.localize)(1067, null),
				),
					(0, C.$wP)(
						"editorGutter.foldingControlForeground",
						C.$MP,
						(0, E.localize)(1068, null),
					),
					(e.$SNb = (0, d.$$O)(
						"folding-expanded",
						t.$ak.chevronDown,
						(0, E.localize)(1069, null),
					)),
					(e.$TNb = (0, d.$$O)(
						"folding-collapsed",
						t.$ak.chevronRight,
						(0, E.localize)(1070, null),
					)),
					(e.$UNb = (0, d.$$O)(
						"folding-manual-collapsed",
						e.$TNb,
						(0, E.localize)(1071, null),
					)),
					(e.$VNb = (0, d.$$O)(
						"folding-manual-expanded",
						e.$SNb,
						(0, E.localize)(1072, null),
					));
				const a = { color: (0, m.$jP)(u), position: i.MinimapPosition.Inline },
					h = (0, E.localize)(1073, null),
					c = (0, E.localize)(1074, null);
				class n {
					static {
						this.a = w.$eY.register({
							description: "folding-collapsed-visual-decoration",
							stickiness: i.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
							afterContentClassName: "inline-folded",
							isWholeLine: !0,
							linesDecorationsTooltip: h,
							firstLineDecorationClassName: r.ThemeIcon.asClassName(e.$TNb),
						});
					}
					static {
						this.b = w.$eY.register({
							description: "folding-collapsed-highlighted-visual-decoration",
							stickiness: i.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
							afterContentClassName: "inline-folded",
							className: "folded-background",
							minimap: a,
							isWholeLine: !0,
							linesDecorationsTooltip: h,
							firstLineDecorationClassName: r.ThemeIcon.asClassName(e.$TNb),
						});
					}
					static {
						this.c = w.$eY.register({
							description: "folding-manually-collapsed-visual-decoration",
							stickiness: i.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
							afterContentClassName: "inline-folded",
							isWholeLine: !0,
							linesDecorationsTooltip: h,
							firstLineDecorationClassName: r.ThemeIcon.asClassName(e.$UNb),
						});
					}
					static {
						this.d = w.$eY.register({
							description:
								"folding-manually-collapsed-highlighted-visual-decoration",
							stickiness: i.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
							afterContentClassName: "inline-folded",
							className: "folded-background",
							minimap: a,
							isWholeLine: !0,
							linesDecorationsTooltip: h,
							firstLineDecorationClassName: r.ThemeIcon.asClassName(e.$UNb),
						});
					}
					static {
						this.e = w.$eY.register({
							description: "folding-no-controls-range-decoration",
							stickiness: i.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
							afterContentClassName: "inline-folded",
							isWholeLine: !0,
							linesDecorationsTooltip: h,
						});
					}
					static {
						this.f = w.$eY.register({
							description: "folding-no-controls-range-decoration",
							stickiness: i.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
							afterContentClassName: "inline-folded",
							className: "folded-background",
							minimap: a,
							isWholeLine: !0,
							linesDecorationsTooltip: h,
						});
					}
					static {
						this.g = w.$eY.register({
							description: "folding-expanded-visual-decoration",
							stickiness: i.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
							isWholeLine: !0,
							firstLineDecorationClassName:
								"alwaysShowFoldIcons " + r.ThemeIcon.asClassName(e.$SNb),
							linesDecorationsTooltip: c,
						});
					}
					static {
						this.h = w.$eY.register({
							description: "folding-expanded-auto-hide-visual-decoration",
							stickiness: i.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
							isWholeLine: !0,
							firstLineDecorationClassName: r.ThemeIcon.asClassName(e.$SNb),
							linesDecorationsTooltip: c,
						});
					}
					static {
						this.i = w.$eY.register({
							description: "folding-manually-expanded-visual-decoration",
							stickiness: i.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
							isWholeLine: !0,
							firstLineDecorationClassName:
								"alwaysShowFoldIcons " + r.ThemeIcon.asClassName(e.$VNb),
							linesDecorationsTooltip: c,
						});
					}
					static {
						this.j = w.$eY.register({
							description:
								"folding-manually-expanded-auto-hide-visual-decoration",
							stickiness: i.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
							isWholeLine: !0,
							firstLineDecorationClassName: r.ThemeIcon.asClassName(e.$VNb),
							linesDecorationsTooltip: c,
						});
					}
					static {
						this.k = w.$eY.register({
							description: "folding-no-controls-range-decoration",
							stickiness: i.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
							isWholeLine: !0,
						});
					}
					static {
						this.l = w.$eY.register({
							description: "folding-hidden-range-decoration",
							stickiness: i.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
						});
					}
					constructor(p, o) {
						(this.m = p),
							(this.n = o),
							(this.showFoldingControls = "mouseover"),
							(this.showFoldingHighlights = !0);
					}
					getDecorationOption(p, o, f) {
						return o
							? n.l
							: this.showFoldingControls === "never"
								? p
									? this.showFoldingHighlights
										? n.f
										: n.e
									: n.k
								: p
									? f
										? this.showFoldingHighlights
											? n.d
											: n.c
										: this.showFoldingHighlights
											? n.b
											: n.a
									: this.showFoldingControls === "mouseover"
										? f
											? n.j
											: n.h
										: f
											? n.i
											: n.g;
					}
					changeDecorations(p) {
						return this.m.changeDecorations(p);
					}
					removeDecorations(p) {
						this.m.removeDecorations(p);
					}
				}
				e.$WNb = n;
			},
		),
		