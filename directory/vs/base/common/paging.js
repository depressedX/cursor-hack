import '../../../require.js';
import '../../../exports.js';
import './arrays.js';
import './cancellation.js';
import './errors.js';
define(de[1504], he([1, 0, 24, 33, 29]), function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/,
 i /*cancellation*/,
 w /*errors*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$np = e.$mp = e.$lp = e.$kp = void 0),
				(e.$jp = C),
				(e.$op = a);
			function E(h) {
				return {
					isResolved: !!h,
					promise: null,
					cts: null,
					promiseIndexes: new Set(),
					elements: h || [],
				};
			}
			function C(h) {
				return {
					firstPage: h,
					total: h.length,
					pageSize: h.length,
					getPage: (c, n) => Promise.resolve(h),
				};
			}
			class d {
				get length() {
					return this.a.total;
				}
				constructor(c) {
					(this.b = []), (this.a = Array.isArray(c) ? C(c) : c);
					const n = Math.ceil(this.a.total / this.a.pageSize);
					this.b = [
						E(this.a.firstPage.slice()),
						...(0, t.$Vb)(n - 1).map(() => E()),
					];
				}
				isResolved(c) {
					const n = Math.floor(c / this.a.pageSize);
					return !!this.b[n].isResolved;
				}
				get(c) {
					const n = Math.floor(c / this.a.pageSize),
						g = c % this.a.pageSize;
					return this.b[n].elements[g];
				}
				resolve(c, n) {
					if (n.isCancellationRequested) return Promise.reject(new w.$9());
					const g = Math.floor(c / this.a.pageSize),
						p = c % this.a.pageSize,
						o = this.b[g];
					if (o.isResolved) return Promise.resolve(o.elements[p]);
					o.promise ||
						((o.cts = new i.$Ce()),
						(o.promise = this.a.getPage(g, o.cts.token).then(
							(b) => {
								(o.elements = b),
									(o.isResolved = !0),
									(o.promise = null),
									(o.cts = null);
							},
							(b) => (
								(o.isResolved = !1),
								(o.promise = null),
								(o.cts = null),
								Promise.reject(b)
							),
						)));
					const f = n.onCancellationRequested(() => {
						o.cts &&
							(o.promiseIndexes.delete(c),
							o.promiseIndexes.size === 0 && o.cts.cancel());
					});
					return (
						o.promiseIndexes.add(c),
						o.promise.then(() => o.elements[p]).finally(() => f.dispose())
					);
				}
			}
			e.$kp = d;
			class m {
				constructor() {}
				isResolved(c) {
					return !0;
				}
				get length() {
					return 0;
				}
				get(c) {
					throw new Error("Index out of bounds");
				}
				resolve(c, n) {
					throw new Error("Index out of bounds");
				}
			}
			e.$lp = m;
			class r {
				constructor(c, n, g) {
					(this.a = c), (this.b = n), (this.d = g);
				}
				get length() {
					return this.a.length + this.b.length;
				}
				isResolved(c) {
					return c < this.a.length
						? this.a.isResolved(c)
						: this.b.isResolved(c - this.a.length);
				}
				get(c) {
					return c < this.a.length
						? this.a.get(c)
						: this.b.get(c - this.a.length);
				}
				resolve(c, n) {
					return c < this.a.length
						? this.a.resolve(c, n)
						: this.b.resolve(c - this.a.length, n);
				}
			}
			e.$mp = r;
			class u {
				get length() {
					return this.a.length;
				}
				constructor(c, n = 500) {
					(this.a = c), (this.b = n);
				}
				isResolved(c) {
					return this.a.isResolved(c);
				}
				get(c) {
					return this.a.get(c);
				}
				resolve(c, n) {
					return new Promise((g, p) => {
						if (n.isCancellationRequested) return p(new w.$9());
						const o = setTimeout(() => {
								if (n.isCancellationRequested) return p(new w.$9());
								f.dispose(), this.a.resolve(c, n).then(g, p);
							}, this.b),
							f = n.onCancellationRequested(() => {
								clearTimeout(o), f.dispose(), p(new w.$9());
							});
					});
				}
			}
			e.$np = u;
			function a(h, c) {
				return {
					firstPage: h.firstPage.map(c),
					total: h.total,
					pageSize: h.pageSize,
					getPage: (n, g) => h.getPage(n, g).then((p) => p.map(c)),
				};
			}
		}),
		