define(
			de[1695],
			he([1, 0, 64, 122, 74, 4, 51, 35, 2326]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$mPb = f),
					(e.$nPb = b),
					(E = mt(E));
				const m = (0, C.$wP)(
					"editor.wordHighlightBackground",
					{
						dark: "#575757B8",
						light: "#57575740",
						hcDark: null,
						hcLight: null,
					},
					E.localize(1582, null),
					!0,
				);
				(0, C.$wP)(
					"editor.wordHighlightStrongBackground",
					{
						dark: "#004972B8",
						light: "#0e639c40",
						hcDark: null,
						hcLight: null,
					},
					E.localize(1583, null),
					!0,
				),
					(0, C.$wP)(
						"editor.wordHighlightTextBackground",
						m,
						E.localize(1584, null),
						!0,
					);
				const r = (0, C.$wP)(
					"editor.wordHighlightBorder",
					{ light: null, dark: null, hcDark: C.$PP, hcLight: C.$PP },
					E.localize(1585, null),
				);
				(0, C.$wP)(
					"editor.wordHighlightStrongBorder",
					{ light: null, dark: null, hcDark: C.$PP, hcLight: C.$PP },
					E.localize(1586, null),
				),
					(0, C.$wP)(
						"editor.wordHighlightTextBorder",
						r,
						E.localize(1587, null),
					);
				const u = (0, C.$wP)(
						"editorOverviewRuler.wordHighlightForeground",
						"#A0A0A0CC",
						E.localize(1588, null),
						!0,
					),
					a = (0, C.$wP)(
						"editorOverviewRuler.wordHighlightStrongForeground",
						"#C0A0C0CC",
						E.localize(1589, null),
						!0,
					),
					h = (0, C.$wP)(
						"editorOverviewRuler.wordHighlightTextForeground",
						C.$wR,
						E.localize(1590, null),
						!0,
					),
					c = i.$eY.register({
						description: "word-highlight-strong",
						stickiness: t.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
						className: "wordHighlightStrong",
						overviewRuler: {
							color: (0, d.$jP)(a),
							position: t.OverviewRulerLane.Center,
						},
						minimap: {
							color: (0, d.$jP)(C.$BR),
							position: t.MinimapPosition.Inline,
						},
					}),
					n = i.$eY.register({
						description: "word-highlight-text",
						stickiness: t.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
						className: "wordHighlightText",
						overviewRuler: {
							color: (0, d.$jP)(h),
							position: t.OverviewRulerLane.Center,
						},
						minimap: {
							color: (0, d.$jP)(C.$BR),
							position: t.MinimapPosition.Inline,
						},
					}),
					g = i.$eY.register({
						description: "selection-highlight-overview",
						stickiness: t.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
						className: "selectionHighlight",
						overviewRuler: {
							color: (0, d.$jP)(C.$wR),
							position: t.OverviewRulerLane.Center,
						},
						minimap: {
							color: (0, d.$jP)(C.$BR),
							position: t.MinimapPosition.Inline,
						},
					}),
					p = i.$eY.register({
						description: "selection-highlight",
						stickiness: t.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
						className: "selectionHighlight",
					}),
					o = i.$eY.register({
						description: "word-highlight",
						stickiness: t.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
						className: "wordHighlight",
						overviewRuler: {
							color: (0, d.$jP)(u),
							position: t.OverviewRulerLane.Center,
						},
						minimap: {
							color: (0, d.$jP)(C.$BR),
							position: t.MinimapPosition.Inline,
						},
					});
				function f(s) {
					return s === w.DocumentHighlightKind.Write
						? c
						: s === w.DocumentHighlightKind.Text
							? n
							: o;
				}
				function b(s) {
					return s ? p : g;
				}
				(0, d.$oP)((s, l) => {
					const y = s.getColor(C.$uQ);
					y &&
						l.addRule(
							`.monaco-editor .selectionHighlight { background-color: ${y.transparent(0.5)}; }`,
						);
				});
			},
		),
		