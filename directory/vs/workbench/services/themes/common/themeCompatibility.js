import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/color.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../editor/common/core/editorColorRegistry.js';
define(de[3714], he([1, 0, 97, 51, 307]), function (ce /*require*/,
 e /*exports*/,
 t /*color*/,
 i /*colorRegistry*/,
 w /*editorColorRegistry*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Tvc = d),
				(i = mt(i)),
				(w = mt(w));
			const E = {};
			function C(r, u) {
				let a = E[r];
				a || (E[r] = a = []), a.push(u);
			}
			function d(r, u) {
				for (const a of r)
					if ((u.textMateRules.push(a), !a.scope)) {
						const h = a.settings;
						if (!h) a.settings = {};
						else
							for (const c in h) {
								const n = c,
									g = E[n];
								if (g) {
									const p = h[n];
									if (typeof p == "string") {
										const o = t.$UL.fromHex(p);
										for (const f of g) u.colors[f] = o;
									}
								}
								n !== "foreground" &&
									n !== "background" &&
									n !== "fontStyle" &&
									delete h[n];
							}
					}
			}
			C("background", i.$8P),
				C("foreground", i.$9P),
				C("selection", i.$rQ),
				C("inactiveSelection", i.$tQ),
				C("selectionHighlightColor", i.$uQ),
				C("findMatchHighlight", i.$yQ),
				C("currentFindMatchHighlight", i.$wQ),
				C("hoverHighlight", i.$EQ),
				C("wordHighlight", "editor.wordHighlightBackground"),
				C("wordHighlightStrong", "editor.wordHighlightStrongBackground"),
				C("findRangeHighlight", i.$AQ),
				C("findMatchHighlight", "peekViewResult.matchHighlightBackground"),
				C("referenceHighlight", "peekViewEditor.matchHighlightBackground"),
				C("lineHighlight", w.$rT),
				C("rangeHighlight", w.$tT),
				C("caret", w.$xT),
				C("invisibles", w.$DT),
				C("guide", w.$HT),
				C("activeGuide", w.$NT);
			const m = [
				"ansiBlack",
				"ansiRed",
				"ansiGreen",
				"ansiYellow",
				"ansiBlue",
				"ansiMagenta",
				"ansiCyan",
				"ansiWhite",
				"ansiBrightBlack",
				"ansiBrightRed",
				"ansiBrightGreen",
				"ansiBrightYellow",
				"ansiBrightBlue",
				"ansiBrightMagenta",
				"ansiBrightCyan",
				"ansiBrightWhite",
			];
			for (const r of m) C(r, "terminal." + r);
		})
