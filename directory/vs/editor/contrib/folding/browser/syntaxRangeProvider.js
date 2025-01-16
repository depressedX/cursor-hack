define(de[660], he([1, 0, 29, 3, 659]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$XNb = void 0),
				(e.$YNb = u);
			const E = {},
				C = "syntax";
			class d {
				constructor(h, c, n, g, p) {
					(this.a = h),
						(this.b = c),
						(this.handleFoldingRangesChange = n),
						(this.c = g),
						(this.d = p),
						(this.id = C),
						(this.disposables = new i.$Zc()),
						p && this.disposables.add(p);
					for (const o of c)
						typeof o.onDidChange == "function" &&
							this.disposables.add(o.onDidChange(n));
				}
				compute(h) {
					return m(this.b, this.a, h).then((c) =>
						c ? u(c, this.c) : (this.d?.compute(h) ?? null),
					);
				}
				dispose() {
					this.disposables.dispose();
				}
			}
			e.$XNb = d;
			function m(a, h, c) {
				let n = null;
				const g = a.map((p, o) =>
					Promise.resolve(p.provideFoldingRanges(h, E, c)).then((f) => {
						if (!c.isCancellationRequested && Array.isArray(f)) {
							Array.isArray(n) || (n = []);
							const b = h.getLineCount();
							for (const s of f)
								s.start > 0 &&
									s.end > s.start &&
									s.end <= b &&
									n.push({ start: s.start, end: s.end, rank: o, kind: s.kind });
						}
					}, t.$5),
				);
				return Promise.all(g).then((p) => n);
			}
			class r {
				constructor(h) {
					(this.a = []),
						(this.b = []),
						(this.c = []),
						(this.d = []),
						(this.e = []),
						(this.f = 0),
						(this.g = h);
				}
				add(h, c, n, g) {
					if (h > w.$zNb || c > w.$zNb) return;
					const p = this.f;
					(this.a[p] = h),
						(this.b[p] = c),
						(this.c[p] = g),
						(this.e[p] = n),
						this.f++,
						g < 30 && (this.d[g] = (this.d[g] || 0) + 1);
				}
				toIndentRanges() {
					const h = this.g.limit;
					if (this.f <= h) {
						this.g.update(this.f, !1);
						const c = new Uint32Array(this.f),
							n = new Uint32Array(this.f);
						for (let g = 0; g < this.f; g++)
							(c[g] = this.a[g]), (n[g] = this.b[g]);
						return new w.$ANb(c, n, this.e);
					} else {
						this.g.update(this.f, h);
						let c = 0,
							n = this.d.length;
						for (let f = 0; f < this.d.length; f++) {
							const b = this.d[f];
							if (b) {
								if (b + c > h) {
									n = f;
									break;
								}
								c += b;
							}
						}
						const g = new Uint32Array(h),
							p = new Uint32Array(h),
							o = [];
						for (let f = 0, b = 0; f < this.f; f++) {
							const s = this.c[f];
							(s < n || (s === n && c++ < h)) &&
								((g[b] = this.a[f]),
								(p[b] = this.b[f]),
								(o[b] = this.e[f]),
								b++);
						}
						return new w.$ANb(g, p, o);
					}
				}
			}
			function u(a, h) {
				const c = a.sort((o, f) => {
						let b = o.start - f.start;
						return b === 0 && (b = o.rank - f.rank), b;
					}),
					n = new r(h);
				let g;
				const p = [];
				for (const o of c)
					if (!g)
						(g = o), n.add(o.start, o.end, o.kind && o.kind.value, p.length);
					else if (o.start > g.start)
						if (o.end <= g.end)
							p.push(g),
								(g = o),
								n.add(o.start, o.end, o.kind && o.kind.value, p.length);
						else {
							if (o.start > g.end) {
								do g = p.pop();
								while (g && o.start > g.end);
								g && p.push(g), (g = o);
							}
							n.add(o.start, o.end, o.kind && o.kind.value, p.length);
						}
				return n.toIndentRanges();
			}
		}),
		