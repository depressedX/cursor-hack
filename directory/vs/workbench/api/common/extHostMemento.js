import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/async.js';
define(Pe[514], Ne([1, 0, 9]), function (we, t, e) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }),
				(t.$Phd = t.$Ohd = void 0);
			class r {
				constructor(P, I, l) {
					(this.h = new Map()),
						(this.a = P),
						(this.b = I),
						(this.c = l),
						(this.d = this.c
							.initializeExtensionStorage(this.b, this.a, Object.create(null))
							.then((n) => ((this.f = n), this))),
						(this.g = this.c.onDidChangeStorage((n) => {
							n.shared === this.b && n.key === this.a && (this.f = n.value);
						})),
						(this.i = new e.$Yh(() => {
							const n = this.h;
							(this.h = new Map()),
								(async () => {
									try {
										await this.c.setValue(this.b, this.a, this.f);
										for (const p of n.values()) p.complete();
									} catch (p) {
										for (const y of n.values()) y.error(p);
									}
								})();
						}, 0));
				}
				keys() {
					return Object.entries(this.f ?? {})
						.filter(([, P]) => P !== void 0)
						.map(([P]) => P);
				}
				get whenReady() {
					return this.d;
				}
				get(P, I) {
					let l = this.f[P];
					return typeof l > "u" && (l = I), l;
				}
				update(P, I) {
					this.f[P] = I;
					const l = this.h.get(P);
					if (l !== void 0) return l.p;
					const n = new e.$0h();
					return (
						this.h.set(P, n), this.i.isScheduled() || this.i.schedule(), n.p
					);
				}
				dispose() {
					this.g.dispose();
				}
			}
			t.$Ohd = r;
			class S extends r {
				setKeysForSync(P) {
					this.c.registerExtensionStorageKeysToSync(
						{ id: this.a, version: this.j.version },
						P,
					);
				}
				constructor(P, I) {
					super(P.identifier.value, !0, I), (this.j = P);
				}
			}
			t.$Phd = S;
		}),
		