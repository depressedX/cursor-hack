import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/uuid.js';
define(de[551], he([1, 0, 47]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$r6b = void 0),
				(e.$s6b = w),
				(e.$t6b = E),
				(e.$u6b = C),
				(e.$v6b = d),
				(e.$w6b = m);
			class i {
				constructor(u, a, h) {
					(this.b = u), (this.c = a), (this.d = h), (this.a = []);
				}
				setDebouncingDurations({
					clientDebounceDuration: u,
					totalDebounceDuration: a,
				}) {
					(this.b = u), (this.c = a);
				}
				pruneOldRequests() {
					const u = performance.now() + performance.timeOrigin,
						a = [...this.a.entries()].reverse();
					for (const [h, c] of a)
						u - c.startTime > this.d && this.a.splice(h, 1);
				}
				runRequest() {
					this.pruneOldRequests();
					const u = performance.now() + performance.timeOrigin,
						a = (0, t.$9g)(),
						h = this.a
							.filter((n) => n.startTime + this.c > u)
							.map((n) => n.requestId);
					this.a.push({ requestId: a, startTime: u });
					const c = new AbortController();
					return {
						generationUUID: a,
						startTime: u,
						abortController: c,
						requestIdsToCancel: h,
					};
				}
				async shouldDebounce(u, a = !1) {
					const h = [...this.a];
					let c = -1;
					for (const [f, b] of h.entries()) b.requestId === u && (c = f);
					if (c === -1) return !1;
					const n = performance.now() + performance.timeOrigin,
						g = h[c],
						p = n - g.startTime;
					return p < this.b && !a
						? (await new Promise((f) => setTimeout(f, this.b - p)),
							await this.shouldDebounce(u, !0))
						: c === h.length - 1
							? !1
							: h[c + 1].startTime - g.startTime < this.b;
				}
			}
			e.$r6b = i;
			function w(r, u) {
				let a;
				return (...c) => {
					clearTimeout(a), (a = setTimeout(() => r(...c), u));
				};
			}
			function E(r, u) {
				let a,
					h = -(u + 1);
				return (...n) => {
					if (performance.now() - h > u)
						clearTimeout(a), r(...n), (h = performance.now());
					else {
						clearTimeout(a);
						const g = Math.max(u - (performance.now() - h), 0);
						a = setTimeout(() => {
							r(...n), (h = performance.now());
						}, g);
					}
				};
			}
			function C(r, u) {
				let a,
					h = -(u + 1);
				return (...n) => {
					performance.now() - h > u
						? (clearTimeout(a), (h = performance.now()), r(...n))
						: (clearTimeout(a),
							(h = performance.now()),
							(a = setTimeout(() => {
								r(...n);
							}, u)));
				};
			}
			function d(r, u, a) {
				const h = {};
				return (...n) => {
					const g = u(...n);
					clearTimeout(h[g]), (h[g] = setTimeout(() => r(...n), a));
				};
			}
			async function m(r, u) {
				let a = 0,
					h = u.initialRetryTimeMs;
				for (; a < u.maxNumberOfRetries; )
					try {
						return await r();
					} catch (c) {
						if ((a++, a >= u.maxNumberOfRetries)) throw c;
						await new Promise((n) => setTimeout(n, h)), (h *= 2);
					}
				throw new Error("Max retries reached");
			}
		}),
		