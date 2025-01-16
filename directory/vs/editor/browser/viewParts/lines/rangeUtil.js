define(de[2544], he([1, 0, 210, 746]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Dub = void 0);
			class w {
				static b() {
					return this.a || (this.a = document.createRange()), this.a;
				}
				static c(C, d) {
					C.selectNodeContents(d);
				}
				static d(C, d, m, r, u) {
					const a = this.b();
					try {
						return a.setStart(C, d), a.setEnd(m, r), a.getClientRects();
					} catch {
						return null;
					} finally {
						this.c(a, u);
					}
				}
				static f(C) {
					if (C.length === 1) return C;
					C.sort(i.$uub.compare);
					const d = [];
					let m = 0,
						r = C[0];
					for (let u = 1, a = C.length; u < a; u++) {
						const h = C[u];
						r.left + r.width + 0.9 >= h.left
							? (r.width = Math.max(r.width, h.left + h.width - r.left))
							: ((d[m++] = r), (r = h));
					}
					return (d[m++] = r), d;
				}
				static g(C, d, m) {
					if (!C || C.length === 0) return null;
					const r = [];
					for (let u = 0, a = C.length; u < a; u++) {
						const h = C[u];
						r[u] = new i.$uub(Math.max(0, (h.left - d) / m), h.width / m);
					}
					return this.f(r);
				}
				static readHorizontalRanges(C, d, m, r, u, a) {
					const c = C.children.length - 1;
					if (0 > c) return null;
					if (
						((d = Math.min(c, Math.max(0, d))),
						(r = Math.min(c, Math.max(0, r))),
						d === r && m === u && m === 0 && !C.children[d].firstChild)
					) {
						const o = C.children[d].getClientRects();
						return (
							a.markDidDomLayout(),
							this.g(o, a.clientRectDeltaLeft, a.clientRectScale)
						);
					}
					d !== r &&
						r > 0 &&
						u === 0 &&
						(r--, (u = t.Constants.MAX_SAFE_SMALL_INTEGER));
					let n = C.children[d].firstChild,
						g = C.children[r].firstChild;
					if (
						((!n || !g) &&
							(!n &&
								m === 0 &&
								d > 0 &&
								((n = C.children[d - 1].firstChild),
								(m = t.Constants.MAX_SAFE_SMALL_INTEGER)),
							!g &&
								u === 0 &&
								r > 0 &&
								((g = C.children[r - 1].firstChild),
								(u = t.Constants.MAX_SAFE_SMALL_INTEGER))),
						!n || !g)
					)
						return null;
					(m = Math.min(n.textContent.length, Math.max(0, m))),
						(u = Math.min(g.textContent.length, Math.max(0, u)));
					const p = this.d(n, m, g, u, a.endNode);
					return (
						a.markDidDomLayout(),
						this.g(p, a.clientRectDeltaLeft, a.clientRectScale)
					);
				}
			}
			e.$Dub = w;
		}),
		