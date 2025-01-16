define(de[1849], he([1, 0, 215, 54, 70]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$LIb = void 0),
				(t = mt(t));
			class E {
				get selectors() {
					return this.a;
				}
				get options() {
					return this.b;
				}
				constructor(d) {
					(this.extension = d.extension),
						(this.id = d.id),
						(this.displayName = d.displayName),
						(this.a =
							d.selectors?.map((m) => ({
								include: m.filenamePattern,
								exclude: m.excludeFileNamePattern || "",
							})) || []),
						(this.priority = d.priority),
						(this.providerDisplayName = d.providerDisplayName),
						(this.b = {
							transientCellMetadata: {},
							transientDocumentMetadata: {},
							transientOutputs: !1,
							cellContentMetadata: {},
						});
				}
				update(d) {
					d.selectors && (this.a = d.selectors),
						d.options && (this.b = d.options);
				}
				matches(d) {
					return this.selectors?.some((m) => E.selectorMatches(m, d));
				}
				static selectorMatches(d, m) {
					if (
						(typeof d == "string" &&
							t.$Ik(d.toLowerCase(), (0, i.$sc)(m.fsPath).toLowerCase())) ||
						(t.$Kk(d) && t.$Ik(d, (0, i.$sc)(m.fsPath).toLowerCase()))
					)
						return !0;
					if (!(0, w.$36)(d)) return !1;
					const r = d.include,
						u = d.exclude;
					return t.$Ik(r, (0, i.$sc)(m.fsPath).toLowerCase())
						? !(u && t.$Ik(u, (0, i.$sc)(m.fsPath).toLowerCase()))
						: !1;
				}
				static possibleFileEnding(d) {
					for (const m of d) {
						const r = E.c(m);
						if (r) return r;
					}
				}
				static c(d) {
					const m = /^.*(\.[a-zA-Z0-9_-]+)$/;
					let r;
					if (typeof d == "string") r = d;
					else if (t.$Kk(d)) r = d.pattern;
					else if (d.include) return E.c(d.include);
					if (r) {
						const u = m.exec(r);
						if (u) return u[1];
					}
				}
			}
			e.$LIb = E;
		}),
		