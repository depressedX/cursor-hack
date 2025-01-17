import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/color.js';
import '../colorUtils.js';
import './baseColors.js';
import './editorColors.js';
define(
			de[1204],
			he([1, 0, 4, 97, 306, 544, 605]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$0S =
						e.$9S =
						e.$8S =
						e.$7S =
						e.$6S =
						e.$5S =
						e.$4S =
						e.$3S =
						e.$2S =
						e.$1S =
						e.$ZS =
						e.$YS =
						e.$XS =
						e.$WS =
						e.$VS =
						e.$US =
						e.$TS =
						e.$SS =
						e.$RS =
						e.$QS =
						e.$PS =
						e.$OS =
						e.$NS =
						e.$MS =
						e.$LS =
						e.$KS =
						e.$JS =
						e.$IS =
						e.$HS =
						e.$GS =
						e.$FS =
						e.$ES =
						e.$DS =
						e.$CS =
						e.$BS =
						e.$AS =
							void 0),
					(t = mt(t)),
					(e.$AS = (0, w.$wP)(
						"list.focusBackground",
						null,
						t.localize(2292, null),
					)),
					(e.$BS = (0, w.$wP)(
						"list.focusForeground",
						null,
						t.localize(2293, null),
					)),
					(e.$CS = (0, w.$wP)(
						"list.focusOutline",
						{ dark: E.$NP, light: E.$NP, hcDark: E.$PP, hcLight: E.$PP },
						t.localize(2294, null),
					)),
					(e.$DS = (0, w.$wP)(
						"list.focusAndSelectionOutline",
						null,
						t.localize(2295, null),
					)),
					(e.$ES = (0, w.$wP)(
						"list.activeSelectionBackground",
						{
							dark: "#04395E",
							light: "#0060C0",
							hcDark: null,
							hcLight: i.$UL.fromHex("#0F4A85").transparent(0.1),
						},
						t.localize(2296, null),
					)),
					(e.$FS = (0, w.$wP)(
						"list.activeSelectionForeground",
						{
							dark: i.$UL.white,
							light: i.$UL.white,
							hcDark: null,
							hcLight: null,
						},
						t.localize(2297, null),
					)),
					(e.$GS = (0, w.$wP)(
						"list.activeSelectionIconForeground",
						null,
						t.localize(2298, null),
					)),
					(e.$HS = (0, w.$wP)(
						"list.inactiveSelectionBackground",
						{
							dark: "#37373D",
							light: "#E4E6F1",
							hcDark: null,
							hcLight: i.$UL.fromHex("#0F4A85").transparent(0.1),
						},
						t.localize(2299, null),
					)),
					(e.$IS = (0, w.$wP)(
						"list.inactiveSelectionForeground",
						null,
						t.localize(2300, null),
					)),
					(e.$JS = (0, w.$wP)(
						"list.inactiveSelectionIconForeground",
						null,
						t.localize(2301, null),
					)),
					(e.$KS = (0, w.$wP)(
						"list.inactiveFocusBackground",
						null,
						t.localize(2302, null),
					)),
					(e.$LS = (0, w.$wP)(
						"list.inactiveFocusOutline",
						null,
						t.localize(2303, null),
					)),
					(e.$MS = (0, w.$wP)(
						"list.hoverBackground",
						{
							dark: "#2A2D2E",
							light: "#F0F0F0",
							hcDark: i.$UL.white.transparent(0.1),
							hcLight: i.$UL.fromHex("#0F4A85").transparent(0.1),
						},
						t.localize(2304, null),
					)),
					(e.$NS = (0, w.$wP)(
						"list.hoverForeground",
						null,
						t.localize(2305, null),
					)),
					(e.$OS = (0, w.$wP)(
						"list.dropBackground",
						{ dark: "#062F4A", light: "#D6EBFF", hcDark: null, hcLight: null },
						t.localize(2306, null),
					)),
					(e.$PS = (0, w.$wP)(
						"list.dropBetweenBackground",
						{ dark: E.$MP, light: E.$MP, hcDark: null, hcLight: null },
						t.localize(2307, null),
					)),
					(e.$QS = (0, w.$wP)(
						"list.highlightForeground",
						{
							dark: "#2AAAFF",
							light: "#0066BF",
							hcDark: E.$NP,
							hcLight: E.$NP,
						},
						t.localize(2308, null),
					)),
					(e.$RS = (0, w.$wP)(
						"list.focusHighlightForeground",
						{
							dark: e.$QS,
							light: (0, w.$EP)(e.$ES, e.$QS, "#BBE7FF"),
							hcDark: e.$QS,
							hcLight: e.$QS,
						},
						t.localize(2309, null),
					)),
					(e.$SS = (0, w.$wP)(
						"list.invalidItemForeground",
						{
							dark: "#B89500",
							light: "#B89500",
							hcDark: "#B89500",
							hcLight: "#B5200D",
						},
						t.localize(2310, null),
					)),
					(e.$TS = (0, w.$wP)(
						"list.errorForeground",
						{ dark: "#F88070", light: "#B01011", hcDark: null, hcLight: null },
						t.localize(2311, null),
					)),
					(e.$US = (0, w.$wP)(
						"list.warningForeground",
						{ dark: "#CCA700", light: "#855F00", hcDark: null, hcLight: null },
						t.localize(2312, null),
					)),
					(e.$VS = (0, w.$wP)(
						"listFilterWidget.background",
						{
							light: (0, w.$zP)(C.$bQ, 0),
							dark: (0, w.$AP)(C.$bQ, 0),
							hcDark: C.$bQ,
							hcLight: C.$bQ,
						},
						t.localize(2313, null),
					)),
					(e.$WS = (0, w.$wP)(
						"listFilterWidget.outline",
						{
							dark: i.$UL.transparent,
							light: i.$UL.transparent,
							hcDark: "#f38518",
							hcLight: "#007ACC",
						},
						t.localize(2314, null),
					)),
					(e.$XS = (0, w.$wP)(
						"listFilterWidget.noMatchesOutline",
						{
							dark: "#BE1100",
							light: "#BE1100",
							hcDark: E.$OP,
							hcLight: E.$OP,
						},
						t.localize(2315, null),
					)),
					(e.$YS = (0, w.$wP)(
						"listFilterWidget.shadow",
						C.$bR,
						t.localize(2316, null),
					)),
					(e.$ZS = (0, w.$wP)(
						"list.filterMatchBackground",
						{ dark: C.$yQ, light: C.$yQ, hcDark: null, hcLight: null },
						t.localize(2317, null),
					)),
					(e.$1S = (0, w.$wP)(
						"list.filterMatchBorder",
						{ dark: C.$CQ, light: C.$CQ, hcDark: E.$OP, hcLight: E.$PP },
						t.localize(2318, null),
					)),
					(e.$2S = (0, w.$wP)(
						"list.deemphasizedForeground",
						{
							dark: "#8C8C8C",
							light: "#8E8E90",
							hcDark: "#A7A8A9",
							hcLight: "#666666",
						},
						t.localize(2319, null),
					)),
					(e.$3S = (0, w.$wP)(
						"tree.indentGuidesStroke",
						{
							dark: "#585858",
							light: "#a9a9a9",
							hcDark: "#a9a9a9",
							hcLight: "#a5a5a5",
						},
						t.localize(2320, null),
					)),
					(e.$4S = (0, w.$wP)(
						"tree.inactiveIndentGuidesStroke",
						(0, w.$BP)(e.$3S, 0.4),
						t.localize(2321, null),
					)),
					(e.$5S = (0, w.$wP)(
						"tree.tableColumnsBorder",
						{
							dark: "#CCCCCC20",
							light: "#61616120",
							hcDark: null,
							hcLight: null,
						},
						t.localize(2322, null),
					)),
					(e.$6S = (0, w.$wP)(
						"tree.tableOddRowsBackground",
						{
							dark: (0, w.$BP)(E.$IP, 0.04),
							light: (0, w.$BP)(E.$IP, 0.04),
							hcDark: null,
							hcLight: null,
						},
						t.localize(2323, null),
					)),
					(e.$7S = (0, w.$wP)(
						"editorActionList.background",
						C.$bQ,
						t.localize(2324, null),
					)),
					(e.$8S = (0, w.$wP)(
						"editorActionList.foreground",
						C.$cQ,
						t.localize(2325, null),
					)),
					(e.$9S = (0, w.$wP)(
						"editorActionList.focusForeground",
						e.$FS,
						t.localize(2326, null),
					)),
					(e.$0S = (0, w.$wP)(
						"editorActionList.focusBackground",
						e.$ES,
						t.localize(2327, null),
					));
			},
		),
		