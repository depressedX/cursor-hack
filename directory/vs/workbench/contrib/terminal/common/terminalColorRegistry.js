import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../editor/common/core/editorColorRegistry.js';
import '../../../../nls.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../common/theme.js';
define(de[512], he([1, 0, 307, 4, 51, 123]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$EHb =
					e.$DHb =
					e.$CHb =
					e.$BHb =
					e.$AHb =
					e.$zHb =
					e.$yHb =
					e.$xHb =
					e.$wHb =
					e.$vHb =
					e.$uHb =
					e.$tHb =
					e.$sHb =
					e.$rHb =
					e.$qHb =
					e.$pHb =
					e.$oHb =
					e.$nHb =
					e.$mHb =
					e.$lHb =
					e.$kHb =
					e.$jHb =
					e.$iHb =
					e.$hHb =
						void 0),
				(e.$FHb = C),
				(i = mt(i)),
				(e.$hHb = []),
				(e.$iHb = (0, w.$wP)(
					"terminal.background",
					null,
					i.localize(10208, null),
				)),
				(e.$jHb = (0, w.$wP)(
					"terminal.foreground",
					{
						light: "#333333",
						dark: "#CCCCCC",
						hcDark: "#FFFFFF",
						hcLight: "#292929",
					},
					i.localize(10209, null),
				)),
				(e.$kHb = (0, w.$wP)(
					"terminalCursor.foreground",
					null,
					i.localize(10210, null),
				)),
				(e.$lHb = (0, w.$wP)(
					"terminalCursor.background",
					null,
					i.localize(10211, null),
				)),
				(e.$mHb = (0, w.$wP)(
					"terminal.selectionBackground",
					w.$rQ,
					i.localize(10212, null),
				)),
				(e.$nHb = (0, w.$wP)(
					"terminal.inactiveSelectionBackground",
					{
						light: (0, w.$BP)(e.$mHb, 0.5),
						dark: (0, w.$BP)(e.$mHb, 0.5),
						hcDark: (0, w.$BP)(e.$mHb, 0.7),
						hcLight: (0, w.$BP)(e.$mHb, 0.5),
					},
					i.localize(10213, null),
				)),
				(e.$oHb = (0, w.$wP)(
					"terminal.selectionForeground",
					{ light: null, dark: null, hcDark: "#000000", hcLight: "#ffffff" },
					i.localize(10214, null),
				)),
				(e.$pHb = (0, w.$wP)(
					"terminalCommandDecoration.defaultBackground",
					{
						light: "#00000040",
						dark: "#ffffff40",
						hcDark: "#ffffff80",
						hcLight: "#00000040",
					},
					i.localize(10215, null),
				)),
				(e.$qHb = (0, w.$wP)(
					"terminalCommandDecoration.successBackground",
					{
						dark: "#1B81A8",
						light: "#2090D3",
						hcDark: "#1B81A8",
						hcLight: "#007100",
					},
					i.localize(10216, null),
				)),
				(e.$rHb = (0, w.$wP)(
					"terminalCommandDecoration.errorBackground",
					{
						dark: "#F14C4C",
						light: "#E51400",
						hcDark: "#F14C4C",
						hcLight: "#B5200D",
					},
					i.localize(10217, null),
				)),
				(e.$sHb = (0, w.$wP)(
					"terminalOverviewRuler.cursorForeground",
					"#A0A0A0CC",
					i.localize(10218, null),
				)),
				(e.$tHb = (0, w.$wP)(
					"terminal.border",
					E.$rFb,
					i.localize(10219, null),
				)),
				(e.$uHb = (0, w.$wP)(
					"terminalOverviewRuler.border",
					t.$ZT,
					i.localize(10220, null),
				)),
				(e.$vHb = (0, w.$wP)(
					"terminal.findMatchBackground",
					{ dark: w.$wQ, light: w.$wQ, hcDark: null, hcLight: "#0F4A85" },
					i.localize(10221, null),
					!0,
				)),
				(e.$wHb = (0, w.$wP)(
					"terminal.hoverHighlightBackground",
					(0, w.$BP)(w.$EQ, 0.5),
					i.localize(10222, null),
				)),
				(e.$xHb = (0, w.$wP)(
					"terminal.findMatchBorder",
					{ dark: null, light: null, hcDark: "#f38518", hcLight: "#0F4A85" },
					i.localize(10223, null),
				)),
				(e.$yHb = (0, w.$wP)(
					"terminal.findMatchHighlightBackground",
					{ dark: w.$yQ, light: w.$yQ, hcDark: null, hcLight: null },
					i.localize(10224, null),
					!0,
				)),
				(e.$zHb = (0, w.$wP)(
					"terminal.findMatchHighlightBorder",
					{ dark: null, light: null, hcDark: "#f38518", hcLight: "#0F4A85" },
					i.localize(10225, null),
				)),
				(e.$AHb = (0, w.$wP)(
					"terminalOverviewRuler.findMatchForeground",
					{ dark: w.$vR, light: w.$vR, hcDark: "#f38518", hcLight: "#0F4A85" },
					i.localize(10226, null),
				)),
				(e.$BHb = (0, w.$wP)(
					"terminal.dropBackground",
					E.$kFb,
					i.localize(10227, null),
					!0,
				)),
				(e.$CHb = (0, w.$wP)(
					"terminal.tab.activeBorder",
					E.$1Eb,
					i.localize(10228, null),
				)),
				(e.$DHb = (0, w.$wP)(
					"terminal.initialHintForeground",
					{ dark: "#ffffff56", light: "#0007", hcDark: null, hcLight: null },
					i.localize(10229, null),
				)),
				(e.$EHb = {
					"terminal.ansiBlack": {
						index: 0,
						defaults: {
							light: "#000000",
							dark: "#000000",
							hcDark: "#000000",
							hcLight: "#292929",
						},
					},
					"terminal.ansiRed": {
						index: 1,
						defaults: {
							light: "#cd3131",
							dark: "#cd3131",
							hcDark: "#cd0000",
							hcLight: "#cd3131",
						},
					},
					"terminal.ansiGreen": {
						index: 2,
						defaults: {
							light: "#107C10",
							dark: "#0DBC79",
							hcDark: "#00cd00",
							hcLight: "#136C13",
						},
					},
					"terminal.ansiYellow": {
						index: 3,
						defaults: {
							light: "#949800",
							dark: "#e5e510",
							hcDark: "#cdcd00",
							hcLight: "#949800",
						},
					},
					"terminal.ansiBlue": {
						index: 4,
						defaults: {
							light: "#0451a5",
							dark: "#2472c8",
							hcDark: "#0000ee",
							hcLight: "#0451a5",
						},
					},
					"terminal.ansiMagenta": {
						index: 5,
						defaults: {
							light: "#bc05bc",
							dark: "#bc3fbc",
							hcDark: "#cd00cd",
							hcLight: "#bc05bc",
						},
					},
					"terminal.ansiCyan": {
						index: 6,
						defaults: {
							light: "#0598bc",
							dark: "#11a8cd",
							hcDark: "#00cdcd",
							hcLight: "#0598bc",
						},
					},
					"terminal.ansiWhite": {
						index: 7,
						defaults: {
							light: "#555555",
							dark: "#e5e5e5",
							hcDark: "#e5e5e5",
							hcLight: "#555555",
						},
					},
					"terminal.ansiBrightBlack": {
						index: 8,
						defaults: {
							light: "#666666",
							dark: "#666666",
							hcDark: "#7f7f7f",
							hcLight: "#666666",
						},
					},
					"terminal.ansiBrightRed": {
						index: 9,
						defaults: {
							light: "#cd3131",
							dark: "#f14c4c",
							hcDark: "#ff0000",
							hcLight: "#cd3131",
						},
					},
					"terminal.ansiBrightGreen": {
						index: 10,
						defaults: {
							light: "#14CE14",
							dark: "#23d18b",
							hcDark: "#00ff00",
							hcLight: "#00bc00",
						},
					},
					"terminal.ansiBrightYellow": {
						index: 11,
						defaults: {
							light: "#b5ba00",
							dark: "#f5f543",
							hcDark: "#ffff00",
							hcLight: "#b5ba00",
						},
					},
					"terminal.ansiBrightBlue": {
						index: 12,
						defaults: {
							light: "#0451a5",
							dark: "#3b8eea",
							hcDark: "#5c5cff",
							hcLight: "#0451a5",
						},
					},
					"terminal.ansiBrightMagenta": {
						index: 13,
						defaults: {
							light: "#bc05bc",
							dark: "#d670d6",
							hcDark: "#ff00ff",
							hcLight: "#bc05bc",
						},
					},
					"terminal.ansiBrightCyan": {
						index: 14,
						defaults: {
							light: "#0598bc",
							dark: "#29b8db",
							hcDark: "#00ffff",
							hcLight: "#0598bc",
						},
					},
					"terminal.ansiBrightWhite": {
						index: 15,
						defaults: {
							light: "#a5a5a5",
							dark: "#e5e5e5",
							hcDark: "#ffffff",
							hcLight: "#a5a5a5",
						},
					},
				});
			function C() {
				for (const d in e.$EHb) {
					const m = e.$EHb[d],
						r = d.substring(13);
					e.$hHb[m.index] = (0, w.$wP)(
						d,
						m.defaults,
						i.localize(10230, null, r),
					);
				}
			}
		}),
		