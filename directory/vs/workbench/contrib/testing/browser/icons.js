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
		