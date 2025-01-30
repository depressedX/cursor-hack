import '../../../require.js';
import '../../../exports.js';
define(de[741], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.Lock = e.$Opb = e.$Npb = void 0),
				(e.$Mpb = t);
			async function* t(C) {
				const d = C.map((u, a) => u.then((h) => ({ idx: a, value: h }))),
					m = new Map();
				for (const [u, a] of d.entries()) m.set(u, a);
				const r = new Set();
				for (const u of d) r.add(u);
				for (; r.size > 0; ) {
					const u = Array.from(r.keys()),
						{ idx: a, value: h } = await Promise.race(u);
					yield h;
					const c = m.get(a);
					if (c === void 0)
						throw new Error("Invariant violation: original promise not found");
					r.delete(c);
				}
			}
			class i {
				constructor({
					numParallel: d,
					onError: m,
					abortSignal: r,
					onResult: u,
				}) {
					(this.a = []),
						(this.g = 0),
						(this.b = d),
						(this.c = m),
						(this.d = r),
						(this.f = u);
				}
				async run(d) {
					if (this.d?.aborted) throw new Error("Aborted");
					for (; this.a.length >= this.b; ) await Promise.race(this.a);
					const m = this.g;
					this.g++;
					const r = d(this.d)
						.then((u) => {
							this.f && this.f(u, m);
						})
						.catch((u) => this.c(u, m))
						.finally(() => {
							this.a.splice(this.a.indexOf(r), 1);
						});
					this.a.push(r);
				}
				async done() {
					await Promise.all(this.a);
				}
			}
			e.$Npb = i;
			class w {
				getCount() {
					return this.a;
				}
				constructor(d, m) {
					(this.d = d),
						(this.a = 0),
						(this.b = []),
						(this.c = m ?? new AbortController().signal);
				}
				async withSemaphore(d, m) {
					await this.acquire();
					const r = Date.now();
					try {
						return this.c.aborted ? Promise.reject("Aborted") : await d();
					} finally {
						this.release(), m && m(Date.now() - r);
					}
				}
				async withRetrySemaphore(d, m, r = 3) {
					if (this.c.aborted) return Promise.reject("Aborted");
					for (let u = 1; u < r; u++)
						try {
							return await this.withSemaphore(d, m);
						} catch {
							await new Promise((h) => setTimeout(h, 200 * u));
						}
					return await this.withSemaphore(d);
				}
				take() {
					if (this.b.length > 0 && this.a < this.d) {
						this.a++;
						const d = this.b.shift();
						d && d.resolve();
					}
				}
				acquire() {
					return this.a < this.d
						? (this.a++,
							new Promise((d) => {
								d();
							}))
						: new Promise((d, m) => {
								this.b.push({ resolve: d, err: m });
							});
				}
				release() {
					this.a--, this.take();
				}
				purge() {
					const d = this.b.length;
					for (let m = 0; m < d; m++) this.b[m].err("Task has been purged.");
					return (this.a = 0), (this.b = []), d;
				}
			}
			e.$Opb = w;
			class E extends w {
				constructor() {
					super(1);
				}
			}
			e.Lock = E;
		}),
		