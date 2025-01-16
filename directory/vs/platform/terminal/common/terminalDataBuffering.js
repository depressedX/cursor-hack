define(de[2826], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$uoc = void 0);
			class t {
				constructor(w) {
					(this.b = w), (this.a = new Map());
				}
				dispose() {
					for (const w of this.a.values()) w.dispose();
				}
				startBuffering(w, E, C = 5) {
					const d = E((m) => {
						const r = typeof m == "string" ? m : m.data;
						let u = this.a.get(w);
						if (u) {
							u.data.push(r);
							return;
						}
						const a = setTimeout(() => this.flushBuffer(w), C);
						(u = {
							data: [r],
							timeoutId: a,
							dispose: () => {
								clearTimeout(a), this.flushBuffer(w), d.dispose();
							},
						}),
							this.a.set(w, u);
					});
					return d;
				}
				stopBuffering(w) {
					this.a.get(w)?.dispose();
				}
				flushBuffer(w) {
					const E = this.a.get(w);
					E && (this.a.delete(w), this.b(w, E.data.join("")));
				}
			}
			e.$uoc = t;
		}),
		