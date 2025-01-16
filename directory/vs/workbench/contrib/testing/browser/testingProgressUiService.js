define(
			de[1909],
			he([1, 0, 3, 77, 4, 10, 1335, 443, 353, 630, 563, 421, 381, 185, 89]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$CMc = e.$BMc = e.$AMc = void 0);
				let g = class extends t.$1c {
					constructor(b, s, l, y) {
						super(),
							(this.a = l),
							(this.b = y),
							this.D(
								b.onResultsChanged((v) => {
									"started" in v && this.c(v.started);
								}),
							);
						const $ = (0, i.autorun)((v) => {
							s.selected.read(v) && ($.dispose(), C.$WJc.register());
						});
						this.D($);
					}
					c(b) {
						if (b.request.preserveFocus === !0) return;
						const s = (0, d.$RJc)(this.a, d.TestingConfigKeys.OpenTesting);
						if (s === d.AutoOpenTesting.NeverOpen) return;
						if (s === d.AutoOpenTesting.OpenExplorerOnTestStart)
							return this.f();
						if (s === d.AutoOpenTesting.OpenOnTestStart) return this.g();
						const l = new t.$Zc();
						l.add(b.onComplete(() => l.dispose())),
							l.add(
								b.onChange((y) => {
									y.reason === a.TestResultItemChangeReason.OwnStateChange &&
										(0, u.$v4)(y.item.ownComputedState) &&
										(this.g(), l.dispose());
								}),
							);
					}
					f() {
						this.b.openView(m.Testing.ExplorerViewId, !1);
					}
					g() {
						this.b.openView(m.Testing.ResultsViewId, !1);
					}
				};
				(e.$AMc = g),
					(e.$AMc = g =
						Ne([j(0, h.$Kqc), j(1, r.$TJc), j(2, E.$gj), j(3, n.$HMb)], g));
				const p = (f, b) => {
					let s = 0,
						l = 0,
						y = 0,
						$ = 0,
						v = 0;
					for (const S of b) {
						const I = S.counts;
						(l += I[c.TestResultState.Errored] + I[c.TestResultState.Failed]),
							(s += I[c.TestResultState.Passed]),
							(y += I[c.TestResultState.Skipped]),
							($ += I[c.TestResultState.Running]),
							(v += I[c.TestResultState.Queued]);
					}
					return {
						isRunning: f,
						passed: s,
						failed: l,
						runSoFar: s + l,
						totalWillBeRun: s + l + v + $,
						skipped: y,
					};
				};
				e.$BMc = p;
				const o = ({
					isRunning: f,
					passed: b,
					runSoFar: s,
					totalWillBeRun: l,
					skipped: y,
					failed: $,
				}) => {
					let v = (b / s) * 100;
					return (
						$ > 0 ? (v = Math.min(v, 99.9)) : s === 0 && (v = 0),
						f
							? s === 0
								? (0, w.localize)(10809, null)
								: y === 0
									? (0, w.localize)(10810, null, b, l, v.toPrecision(3))
									: (0, w.localize)(10811, null, b, l, v.toPrecision(3), y)
							: y === 0
								? (0, w.localize)(10812, null, b, s, v.toPrecision(3))
								: (0, w.localize)(10813, null, b, s, v.toPrecision(3), y)
					);
				};
				e.$CMc = o;
			},
		),
		