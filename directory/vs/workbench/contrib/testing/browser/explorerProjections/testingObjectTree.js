define(de[3178], he([1, 0, 93, 811, 259]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$aLc = void 0);
			class E extends t.$CMb {
				getOptimizedViewState(d) {
					const m = d || {},
						r = (u, a) => {
							if (!(u.element instanceof i.$7Kc)) return !1;
							const h = w.$k4.localId(u.element.test.item.extId),
								c = a.children?.[h] || {};
							c.collapsed =
								u.depth === 0 || !u.collapsed ? u.collapsed : void 0;
							let n = c.collapsed !== void 0;
							if (u.children.length)
								for (const g of u.children) n = r(g, c) || n;
							return (
								n
									? ((a.children ??= {}), (a.children[h] = c))
									: a.children?.hasOwnProperty(h) && delete a.children[h],
								n
							);
						};
					m.children ??= {};
					for (const u of this.getNode().children)
						if (u.element instanceof i.$7Kc)
							if (u.element.test.controllerId === u.element.test.item.extId)
								r(u, m);
							else {
								const a = (m.children[u.element.test.controllerId] ??= {
									children: {},
								});
								r(u, a);
							}
					return m;
				}
			}
			e.$aLc = E;
		}),
		define(
			de[1771],
			he([1, 0, 97, 4, 51, 35, 185]),
			function (ce, e, t, i, w, E, C) {
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
		),
		define(
			de[470],
			he([1, 0, 14, 4, 79, 35, 26, 1771, 185]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$PKc =
						e.$OKc =
						e.$NKc =
						e.$MKc =
						e.$LKc =
						e.$KKc =
						e.$JKc =
						e.$IKc =
						e.$HKc =
						e.$GKc =
						e.$FKc =
						e.$EKc =
						e.$DKc =
						e.$CKc =
						e.$BKc =
						e.$AKc =
						e.$zKc =
						e.$yKc =
						e.$xKc =
						e.$wKc =
						e.$vKc =
						e.$uKc =
						e.$tKc =
						e.$sKc =
							void 0),
					(e.$sKc = (0, w.$$O)(
						"test-view-icon",
						t.$ak.beaker,
						(0, i.localize)(10632, null),
					)),
					(e.$tKc = (0, w.$$O)(
						"test-results-icon",
						t.$ak.checklist,
						(0, i.localize)(10633, null),
					)),
					(e.$uKc = (0, w.$$O)(
						"testing-run-icon",
						t.$ak.run,
						(0, i.localize)(10634, null),
					)),
					(e.$vKc = (0, w.$$O)(
						"testing-rerun-icon",
						t.$ak.refresh,
						(0, i.localize)(10635, null),
					)),
					(e.$wKc = (0, w.$$O)(
						"testing-run-all-icon",
						t.$ak.runAll,
						(0, i.localize)(10636, null),
					)),
					(e.$xKc = (0, w.$$O)(
						"testing-debug-all-icon",
						t.$ak.debugAltSmall,
						(0, i.localize)(10637, null),
					)),
					(e.$yKc = (0, w.$$O)(
						"testing-debug-icon",
						t.$ak.debugAltSmall,
						(0, i.localize)(10638, null),
					)),
					(e.$zKc = (0, w.$$O)(
						"testing-coverage-icon",
						t.$ak.runCoverage,
						(0, i.localize)(10639, null),
					)),
					(e.$AKc = (0, w.$$O)(
						"testing-coverage-all-icon",
						t.$ak.runAllCoverage,
						(0, i.localize)(10640, null),
					)),
					(e.$BKc = (0, w.$$O)(
						"testing-cancel-icon",
						t.$ak.debugStop,
						(0, i.localize)(10641, null),
					)),
					(e.$CKc = (0, w.$$O)(
						"testing-filter",
						t.$ak.filter,
						(0, i.localize)(10642, null),
					)),
					(e.$DKc = (0, w.$$O)(
						"testing-hidden",
						t.$ak.eyeClosed,
						(0, i.localize)(10643, null),
					)),
					(e.$EKc = (0, w.$$O)(
						"testing-show-as-list-icon",
						t.$ak.listTree,
						(0, i.localize)(10644, null),
					)),
					(e.$FKc = (0, w.$$O)(
						"testing-show-as-list-icon",
						t.$ak.listFlat,
						(0, i.localize)(10645, null),
					)),
					(e.$GKc = (0, w.$$O)(
						"testing-update-profiles",
						t.$ak.gear,
						(0, i.localize)(10646, null),
					)),
					(e.$HKc = (0, w.$$O)(
						"testing-refresh-tests",
						t.$ak.refresh,
						(0, i.localize)(10647, null),
					)),
					(e.$IKc = (0, w.$$O)(
						"testing-turn-continuous-run-on",
						t.$ak.eye,
						(0, i.localize)(10648, null),
					)),
					(e.$JKc = (0, w.$$O)(
						"testing-turn-continuous-run-off",
						t.$ak.eyeClosed,
						(0, i.localize)(10649, null),
					)),
					(e.$KKc = (0, w.$$O)(
						"testing-continuous-is-on",
						t.$ak.eye,
						(0, i.localize)(10650, null),
					)),
					(e.$LKc = (0, w.$$O)(
						"testing-cancel-refresh-tests",
						t.$ak.stop,
						(0, i.localize)(10651, null),
					)),
					(e.$MKc = (0, w.$$O)(
						"testing-coverage",
						t.$ak.coverage,
						(0, i.localize)(10652, null),
					)),
					(e.$NKc = (0, w.$$O)(
						"testing-was-covered",
						t.$ak.check,
						(0, i.localize)(10653, null),
					)),
					(e.$OKc = (0, w.$$O)(
						"testing-missing-branch",
						t.$ak.question,
						(0, i.localize)(10654, null),
					)),
					(e.$PKc = new Map([
						[
							m.TestResultState.Errored,
							(0, w.$$O)(
								"testing-error-icon",
								t.$ak.issues,
								(0, i.localize)(10655, null),
							),
						],
						[
							m.TestResultState.Failed,
							(0, w.$$O)(
								"testing-failed-icon",
								t.$ak.error,
								(0, i.localize)(10656, null),
							),
						],
						[
							m.TestResultState.Passed,
							(0, w.$$O)(
								"testing-passed-icon",
								t.$ak.pass,
								(0, i.localize)(10657, null),
							),
						],
						[
							m.TestResultState.Queued,
							(0, w.$$O)(
								"testing-queued-icon",
								t.$ak.history,
								(0, i.localize)(10658, null),
							),
						],
						[m.TestResultState.Running, w.$fP],
						[
							m.TestResultState.Skipped,
							(0, w.$$O)(
								"testing-skipped-icon",
								t.$ak.debugStepOver,
								(0, i.localize)(10659, null),
							),
						],
						[
							m.TestResultState.Unset,
							(0, w.$$O)(
								"testing-unset-icon",
								t.$ak.circleOutline,
								(0, i.localize)(10660, null),
							),
						],
					])),
					(0, E.$oP)((r, u) => {
						for (const [a, h] of e.$PKc.entries()) {
							const c = d.$kKc[a],
								n = d.$rKc[a];
							c &&
								(u.addRule(`.monaco-workbench ${C.ThemeIcon.asCSSSelector(h)} {
			color: ${r.getColor(c)} !important;
		}`),
								n &&
									u.addRule(`
			.test-explorer .computed-state.retired${C.ThemeIcon.asCSSSelector(h)},
			.testing-run-glyph.retired${C.ThemeIcon.asCSSSelector(h)}{
				color: ${r.getColor(n)} !important;
			}
		`));
						}
						u.addRule(`
		.monaco-editor .glyph-margin-widgets ${C.ThemeIcon.asCSSSelector(e.$uKc)},
		.monaco-editor .glyph-margin-widgets ${C.ThemeIcon.asCSSSelector(e.$wKc)},
		.monaco-editor .glyph-margin-widgets ${C.ThemeIcon.asCSSSelector(e.$yKc)},
		.monaco-editor .glyph-margin-widgets ${C.ThemeIcon.asCSSSelector(e.$xKc)} {
			color: ${r.getColor(d.$6Jc)};
		}
	`);
					});
			},
		),
		