import '../../../../../require.js';
import '../../../../../exports.js';
define(de[1012], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Dcc = e.$Ccc = void 0);
			class t {
				constructor(E, C, d, m) {
					(this.c = m),
						(this.b = new Map()),
						(this.d = 0),
						(this.a = new i(
							E,
							C,
							(r, u) => r < u,
							d,
							m,
							(r) => this.f(r),
						));
				}
				f(E) {
					this.b.forEach((C, d) => {
						d <= E && (C.resolve(), this.b.delete(d));
					});
				}
				async process(E) {
					const C = this.d++,
						d = this.a.process({
							state: C,
							runEvenIfAlreadyProcessing: E.runEvenIfAlreadyProcessing,
							tryAgainCount: E.tryAgainCount,
						});
					E.waitUntilProcessed
						? await new Promise((m, r) => {
								this.b.set(C, { resolve: m, reject: r });
							})
						: await d;
				}
			}
			e.$Ccc = t;
			class i {
				constructor(E, C, d, m, r, u) {
					(this.a = E),
						(this.b = C),
						(this.c = d),
						(this.d = m),
						(this.f = r),
						(this.g = u),
						(this.h = void 0),
						(this.i = void 0),
						(this.j = void 0);
				}
				async process(E) {
					if (((this.h = E.state), this.b.aborted)) return;
					if (E.tryAgainCount !== void 0 && E.tryAgainCount > 5) {
						this.d(
							new Error(
								"SimpleSerialProcessor: tried 5 times and failed, giving up",
							),
						);
						return;
					}
					if (
						(this.i !== void 0 && !this.c(this.i, this.h)) ||
						(!E.runEvenIfAlreadyProcessing && this.j !== void 0)
					)
						return;
					this.j?.abort(), (this.j = new AbortController());
					const C = () => {
						this.j?.abort();
					};
					this.b.addEventListener("abort", C);
					let d = !0;
					try {
						(await this.a(this.j.signal)).ok() &&
							((this.i = E.state), this.g?.(this.i));
					} catch (m) {
						this.d(m), (d = !1);
					} finally {
						await new Promise((m) => setTimeout(m, this.f)),
							this.b.removeEventListener("abort", C),
							(this.j = void 0),
							d &&
								this.process({
									state: this.h,
									runEvenIfAlreadyProcessing: !1,
									tryAgainCount:
										this.h === E.state ? (E.tryAgainCount ?? 0) + 1 : 0,
								});
					}
				}
			}
			e.$Dcc = i;
		})
