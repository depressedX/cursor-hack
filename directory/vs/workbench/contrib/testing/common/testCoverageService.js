import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/iterator.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/observable.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/observable/common/platformObservableUtils.js';
import './configuration.js';
import './constants.js';
import './testResultService.js';
import './testingContextKeys.js';
import '../../../services/views/common/viewsService.js';
define(
			de[630],
			he([1, 0, 33, 103, 3, 77, 10, 8, 5, 326, 443, 353, 381, 380, 89]),
			function (ce /*require*/,
 e /*exports*/,
 t /*cancellation*/,
 i /*iterator*/,
 w /*lifecycle*/,
 E /*observable*/,
 C /*configuration*/,
 d /*contextkey*/,
 m /*instantiation*/,
 r /*platformObservableUtils*/,
 u /*configuration*/,
 a /*constants*/,
 h /*testResultService*/,
 c /*testingContextKeys*/,
 n /*viewsService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$UJc = e.$TJc = void 0),
					(e.$TJc = (0, m.$Mi)("testCoverageService"));
				let g = class extends w.$1c {
					constructor(o, f, b, s) {
						super(),
							(this.b = s),
							(this.a = this.D(new w.$2c())),
							(this.selected = (0, E.observableValue)("testCoverage", void 0)),
							(this.filterToTest = (0, E.observableValue)(
								"filterToTest",
								void 0,
							)),
							(this.showInline = (0, E.observableValue)("inlineCoverage", !1));
						const l = (0, r.$Mwb)(
							u.TestingConfigKeys.CoverageToolbarEnabled,
							!0,
							b,
						);
						this.D(
							(0, r.$Nwb)(c.TestingContextKeys.coverageToolbarEnabled, o, (y) =>
								l.read(y),
							),
						),
							this.D(
								(0, r.$Nwb)(
									c.TestingContextKeys.inlineCoverageEnabled,
									o,
									(y) => this.showInline.read(y),
								),
							),
							this.D(
								(0, r.$Nwb)(
									c.TestingContextKeys.isTestCoverageOpen,
									o,
									(y) => !!this.selected.read(y),
								),
							),
							this.D(
								(0, r.$Nwb)(
									c.TestingContextKeys.hasPerTestCoverage,
									o,
									(y) =>
										!i.Iterable.isEmpty(this.selected.read(y)?.allPerTestIDs()),
								),
							),
							this.D(
								(0, r.$Nwb)(
									c.TestingContextKeys.isCoverageFilteredToTest,
									o,
									(y) => !!this.filterToTest.read(y),
								),
							),
							this.D(
								f.onResultsChanged((y) => {
									if ("completed" in y) {
										const $ = y.completed.tasks.find((v) => v.coverage.get());
										$ ? this.openCoverage($, !1) : this.closeCoverage();
									} else if ("removed" in y && this.selected.get()) {
										const $ = this.selected.get()?.fromTaskId;
										y.removed.some((v) => v.tasks.some((S) => S.id === $)) &&
											this.closeCoverage();
									}
								}),
							);
					}
					async openCoverage(o, f = !0) {
						this.a.value?.cancel();
						const b = (this.a.value = new t.$Ce()),
							s = o.coverage.get();
						s &&
							((0, E.transaction)((l) => {
								this.filterToTest.set(void 0, l), this.selected.set(s, l);
							}),
							f &&
								!b.token.isCancellationRequested &&
								this.b.openView(a.Testing.CoverageViewId, !0));
					}
					closeCoverage() {
						this.selected.set(void 0, void 0);
					}
				};
				(e.$UJc = g),
					(e.$UJc = g =
						Ne([j(0, d.$6j), j(1, h.$Kqc), j(2, C.$gj), j(3, n.$HMb)], g));
			},
		),
		