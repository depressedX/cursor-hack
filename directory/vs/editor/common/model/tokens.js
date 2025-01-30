import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/arrays.js';
import '../../../base/common/async.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../core/lineRange.js';
import '../tokenizationTextModelPart.js';
define(
			de[1176],
			he([1, 0, 24, 15, 6, 3, 196, 916]),
			function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/,
 i /*async*/,
 w /*event*/,
 E /*lifecycle*/,
 C /*lineRange*/,
 d /*tokenizationTextModelPart*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$lV = e.$kV = e.$jV = void 0);
				class m {
					constructor() {
						(this.c = new w.$re()),
							(this.onDidChangeVisibleRanges = this.c.event),
							(this.d = new Set());
					}
					attachView() {
						const c = new r((n) => {
							this.c.fire({ view: c, state: n });
						});
						return this.d.add(c), c;
					}
					detachView(c) {
						this.d.delete(c), this.c.fire({ view: c, state: void 0 });
					}
				}
				e.$jV = m;
				class r {
					constructor(c) {
						this.c = c;
					}
					setVisibleLines(c, n) {
						const g = c.map(
							(p) => new C.$rL(p.startLineNumber, p.endLineNumber + 1),
						);
						this.c({ visibleLineRanges: g, stabilized: n });
					}
				}
				class u extends E.$1c {
					get lineRanges() {
						return this.g;
					}
					constructor(c) {
						super(),
							(this.h = c),
							(this.c = this.D(new i.$Yh(() => this.j(), 50))),
							(this.f = []),
							(this.g = []);
					}
					j() {
						(0, t.$yb)(this.f, this.g, (c, n) => c.equals(n)) ||
							((this.f = this.g), this.h());
					}
					handleStateChange(c) {
						(this.g = c.visibleLineRanges),
							c.stabilized ? (this.c.cancel(), this.j()) : this.c.schedule();
					}
				}
				e.$kV = u;
				class a extends E.$1c {
					get backgroundTokenizationState() {
						return this.f;
					}
					constructor(c, n, g) {
						super(),
							(this.j = c),
							(this.m = n),
							(this.n = g),
							(this.f = d.BackgroundTokenizationState.InProgress),
							(this.g = this.D(new w.$re())),
							(this.onDidChangeBackgroundTokenizationState = this.g.event),
							(this.h = this.D(new w.$re())),
							(this.onDidChangeTokens = this.h.event);
					}
					tokenizeIfCheap(c) {
						this.isCheapToTokenize(c) && this.forceTokenization(c);
					}
				}
				e.$lV = a;
			},
		),
		