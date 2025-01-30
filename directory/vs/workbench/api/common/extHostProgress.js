import '../../../../require.js';
import '../../../../exports.js';
import './extHostTypeConverters.js';
import '../../../platform/progress/common/progress.js';
import '../../../base/common/cancellation.js';
import '../../../base/common/decorators.js';
import '../../../base/common/errors.js';
define(
			Pe[578],
			Ne([1, 0, 17, 138, 23, 89, 12]),
			function (we, t, e, r, S, N, P) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$Wid = void 0);
				class I {
					constructor(y) {
						(this.b = 0), (this.c = new Map()), (this.a = y);
					}
					async withProgress(y, d, k) {
						const g = this.b++,
							{ title: c, location: h, cancellable: $ } = d,
							T = { label: y.displayName || y.name, id: y.identifier.value };
						return (
							this.a
								.$startProgress(
									g,
									{
										location: e.ProgressLocation.from(h),
										title: c,
										source: T,
										cancellable: $,
									},
									y.isUnderDevelopment ? void 0 : y.identifier.value,
								)
								.catch(P.$5),
							this.d(g, k, !!$)
						);
					}
					d(y, d, k) {
						let g;
						k && ((g = new S.$Ce()), this.c.set(y, g));
						const c = ($) => {
							this.a.$progressEnd($), this.c.delete($), g?.dispose();
						};
						let h;
						try {
							h = d(
								new n(this.a, y),
								k && g ? g.token : S.CancellationToken.None,
							);
						} catch ($) {
							throw (c(y), $);
						}
						return (
							h.then(
								($) => c(y),
								($) => c(y),
							),
							h
						);
					}
					$acceptProgressCanceled(y) {
						const d = this.c.get(y);
						d && (d.cancel(), this.c.delete(y));
					}
				}
				t.$Wid = I;
				function l(p, y) {
					return (
						(p.message = y.message),
						typeof y.increment == "number" &&
							(typeof p.increment == "number"
								? (p.increment += y.increment)
								: (p.increment = y.increment)),
						p
					);
				}
				class n extends r.$0N {
					constructor(y, d) {
						super((k) => this.throttledReport(k)), (this.c = y), (this.d = d);
					}
					throttledReport(y) {
						this.c.$progressReport(this.d, y);
					}
				}
				wt(
					[
						(0, N.$gi)(
							100,
							(p, y) => l(p, y),
							() => Object.create(null),
						),
					],
					n.prototype,
					"throttledReport",
					null,
				);
			},
		),
		