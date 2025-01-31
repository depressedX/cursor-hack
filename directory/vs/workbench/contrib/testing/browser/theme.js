import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/color.js';
import '../../../../nls.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/theme/common/themeService.js';
import '../common/testTypes.js';
define(
			de[1771],
			he([1, 0, 97, 4, 51, 35, 185]),
			function (ce /*require*/,
 e /*exports*/,
 t /*color*/,
 i /*nls*/,
 w /*colorRegistry*/,
 E /*themeService*/,
 C /*testTypes*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$rKc =
						e.$qKc =
						e.$pKc =
						e.$oKc =
						e.$nKc =
						e.$mKc =
						e.$lKc =
						e.$kKc =
						e.$jKc =
						e.$iKc =
						e.$hKc =
						e.$gKc =
						e.$fKc =
						e.$eKc =
						e.$dKc =
						e.$cKc =
						e.$bKc =
						e.$aKc =
						e.$_Jc =
						e.$$Jc =
						e.$0Jc =
						e.$9Jc =
						e.$8Jc =
						e.$7Jc =
						e.$6Jc =
						e.$5Jc =
						e.$4Jc =
						e.$3Jc =
							void 0),
					(e.$3Jc = (0, w.$wP)(
						"testing.iconFailed",
						{
							dark: "#f14c4c",
							light: "#f14c4c",
							hcDark: "#f14c4c",
							hcLight: "#B5200D",
						},
						(0, i.localize)(10840, null),
					)),
					(e.$4Jc = (0, w.$wP)(
						"testing.iconErrored",
						{
							dark: "#f14c4c",
							light: "#f14c4c",
							hcDark: "#f14c4c",
							hcLight: "#B5200D",
						},
						(0, i.localize)(10841, null),
					)),
					(e.$5Jc = (0, w.$wP)(
						"testing.iconPassed",
						{
							dark: "#73c991",
							light: "#73c991",
							hcDark: "#73c991",
							hcLight: "#007100",
						},
						(0, i.localize)(10842, null),
					)),
					(e.$6Jc = (0, w.$wP)(
						"testing.runAction",
						e.$5Jc,
						(0, i.localize)(10843, null),
					)),
					(e.$7Jc = (0, w.$wP)(
						"testing.iconQueued",
						"#cca700",
						(0, i.localize)(10844, null),
					)),
					(e.$8Jc = (0, w.$wP)(
						"testing.iconUnset",
						"#848484",
						(0, i.localize)(10845, null),
					)),
					(e.$9Jc = (0, w.$wP)(
						"testing.iconSkipped",
						"#848484",
						(0, i.localize)(10846, null),
					)),
					(e.$0Jc = (0, w.$wP)(
						"testing.peekBorder",
						{ dark: w.$gQ, light: w.$gQ, hcDark: w.$OP, hcLight: w.$OP },
						(0, i.localize)(10847, null),
					)),
					(e.$$Jc = (0, w.$wP)(
						"testing.messagePeekBorder",
						{ dark: w.$mQ, light: w.$mQ, hcDark: w.$OP, hcLight: w.$OP },
						(0, i.localize)(10848, null),
					)),
					(e.$_Jc = (0, w.$wP)(
						"testing.peekHeaderBackground",
						{
							dark: (0, w.$BP)(w.$gQ, 0.1),
							light: (0, w.$BP)(w.$gQ, 0.1),
							hcDark: null,
							hcLight: null,
						},
						(0, i.localize)(10849, null),
					)),
					(e.$aKc = (0, w.$wP)(
						"testing.messagePeekHeaderBackground",
						{
							dark: (0, w.$BP)(w.$mQ, 0.1),
							light: (0, w.$BP)(w.$mQ, 0.1),
							hcDark: null,
							hcLight: null,
						},
						(0, i.localize)(10850, null),
					)),
					(e.$bKc = (0, w.$wP)(
						"testing.coveredBackground",
						{ dark: w.$YQ, light: w.$YQ, hcDark: null, hcLight: null },
						(0, i.localize)(10851, null),
					)),
					(e.$cKc = (0, w.$wP)(
						"testing.coveredBorder",
						{
							dark: (0, w.$BP)(e.$bKc, 0.75),
							light: (0, w.$BP)(e.$bKc, 0.75),
							hcDark: w.$OP,
							hcLight: w.$OP,
						},
						(0, i.localize)(10852, null),
					)),
					(e.$dKc = (0, w.$wP)(
						"testing.coveredGutterBackground",
						{
							dark: (0, w.$BP)(w.$YQ, 0.6),
							light: (0, w.$BP)(w.$YQ, 0.6),
							hcDark: w.$RR,
							hcLight: w.$RR,
						},
						(0, i.localize)(10853, null),
					)),
					(e.$eKc = (0, w.$wP)(
						"testing.uncoveredBranchBackground",
						{
							dark: (0, w.$CP)((0, w.$BP)(w.$ZQ, 2), w.$8P),
							light: (0, w.$CP)((0, w.$BP)(w.$ZQ, 2), w.$8P),
							hcDark: null,
							hcLight: null,
						},
						(0, i.localize)(10854, null),
					)),
					(e.$fKc = (0, w.$wP)(
						"testing.uncoveredBackground",
						{ dark: w.$ZQ, light: w.$ZQ, hcDark: null, hcLight: null },
						(0, i.localize)(10855, null),
					)),
					(e.$gKc = (0, w.$wP)(
						"testing.uncoveredBorder",
						{
							dark: (0, w.$BP)(e.$fKc, 0.75),
							light: (0, w.$BP)(e.$fKc, 0.75),
							hcDark: w.$OP,
							hcLight: w.$OP,
						},
						(0, i.localize)(10856, null),
					)),
					(e.$hKc = (0, w.$wP)(
						"testing.uncoveredGutterBackground",
						{
							dark: (0, w.$BP)(w.$ZQ, 1.5),
							light: (0, w.$BP)(w.$ZQ, 1.5),
							hcDark: w.$NR,
							hcLight: w.$NR,
						},
						(0, i.localize)(10857, null),
					)),
					(e.$iKc = (0, w.$wP)(
						"testing.coverCountBadgeBackground",
						w.$1P,
						(0, i.localize)(10858, null),
					)),
					(e.$jKc = (0, w.$wP)(
						"testing.coverCountBadgeForeground",
						w.$2P,
						(0, i.localize)(10859, null),
					)),
					(0, w.$wP)(
						"testing.message.error.decorationForeground",
						{ dark: w.$gQ, light: w.$gQ, hcDark: w.$9P, hcLight: w.$9P },
						(0, i.localize)(10860, null),
					),
					(0, w.$wP)(
						"testing.message.error.lineBackground",
						{
							dark: new t.$UL(new t.$RL(255, 0, 0, 0.1)),
							light: new t.$UL(new t.$RL(255, 0, 0, 0.1)),
							hcDark: null,
							hcLight: null,
						},
						(0, i.localize)(10861, null),
					),
					(0, w.$wP)(
						"testing.message.info.decorationForeground",
						(0, w.$BP)(w.$9P, 0.5),
						(0, i.localize)(10862, null),
					),
					(0, w.$wP)(
						"testing.message.info.lineBackground",
						null,
						(0, i.localize)(10863, null),
					),
					(e.$kKc = {
						[C.TestResultState.Errored]: e.$4Jc,
						[C.TestResultState.Failed]: e.$3Jc,
						[C.TestResultState.Passed]: e.$5Jc,
						[C.TestResultState.Queued]: e.$7Jc,
						[C.TestResultState.Unset]: e.$8Jc,
						[C.TestResultState.Skipped]: e.$9Jc,
					}),
					(e.$lKc = (0, w.$wP)(
						"testing.iconErrored.retired",
						(0, w.$BP)(e.$4Jc, 0.7),
						(0, i.localize)(10864, null),
					)),
					(e.$mKc = (0, w.$wP)(
						"testing.iconFailed.retired",
						(0, w.$BP)(e.$3Jc, 0.7),
						(0, i.localize)(10865, null),
					)),
					(e.$nKc = (0, w.$wP)(
						"testing.iconPassed.retired",
						(0, w.$BP)(e.$5Jc, 0.7),
						(0, i.localize)(10866, null),
					)),
					(e.$oKc = (0, w.$wP)(
						"testing.iconQueued.retired",
						(0, w.$BP)(e.$7Jc, 0.7),
						(0, i.localize)(10867, null),
					)),
					(e.$pKc = (0, w.$wP)(
						"testing.iconUnset.retired",
						(0, w.$BP)(e.$8Jc, 0.7),
						(0, i.localize)(10868, null),
					)),
					(e.$qKc = (0, w.$wP)(
						"testing.iconSkipped.retired",
						(0, w.$BP)(e.$9Jc, 0.7),
						(0, i.localize)(10869, null),
					)),
					(e.$rKc = {
						[C.TestResultState.Errored]: e.$lKc,
						[C.TestResultState.Failed]: e.$mKc,
						[C.TestResultState.Passed]: e.$nKc,
						[C.TestResultState.Queued]: e.$oKc,
						[C.TestResultState.Unset]: e.$pKc,
						[C.TestResultState.Skipped]: e.$qKc,
					}),
					(0, E.$oP)((d, m) => {
						const r = d.getColor(w.$8P),
							u = r && d.getColor(e.$fKc)?.transparent(2).makeOpaque(r);
						m.addRule(`
	.coverage-deco-inline.coverage-deco-hit.coverage-deco-hovered {
		background: ${d.getColor(e.$bKc)?.transparent(1.3)};
		outline-color: ${d.getColor(e.$cKc)?.transparent(2)};
	}
	.coverage-deco-inline.coverage-deco-miss.coverage-deco-hovered {
		background: ${d.getColor(e.$fKc)?.transparent(1.3)};
		outline-color: ${d.getColor(e.$gKc)?.transparent(2)};
	}
	.coverage-deco-branch-miss-indicator::before {
		border-color: ${u?.transparent(1.3)};
		background-color: ${u};
	}
	`);
					});
			},
		)
