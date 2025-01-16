define(de[2568], he([1, 0, 37, 48, 589]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$ZN = void 0);
			class E {
				constructor(d, m, r, u) {
					(this.a = d),
						(this.b = m),
						(this.c = r),
						(this.d = u),
						(this.f = null),
						(this.g = null);
				}
				dispose() {
					this.b.length = 0;
				}
				get version() {
					return this.d;
				}
				getText() {
					return this.g === null && (this.g = this.b.join(this.c)), this.g;
				}
				onEvents(d) {
					d.eol && d.eol !== this.c && ((this.c = d.eol), (this.f = null));
					const m = d.changes;
					for (const r of m)
						this.k(r.range),
							this.l(
								new i.$hL(r.range.startLineNumber, r.range.startColumn),
								r.text,
							);
					(this.d = d.versionId), (this.g = null);
				}
				h() {
					if (!this.f) {
						const d = this.c.length,
							m = this.b.length,
							r = new Uint32Array(m);
						for (let u = 0; u < m; u++) r[u] = this.b[u].length + d;
						this.f = new w.$WN(r);
					}
				}
				j(d, m) {
					(this.b[d] = m),
						this.f && this.f.setValue(d, this.b[d].length + this.c.length);
				}
				k(d) {
					if (d.startLineNumber === d.endLineNumber) {
						if (d.startColumn === d.endColumn) return;
						this.j(
							d.startLineNumber - 1,
							this.b[d.startLineNumber - 1].substring(0, d.startColumn - 1) +
								this.b[d.startLineNumber - 1].substring(d.endColumn - 1),
						);
						return;
					}
					this.j(
						d.startLineNumber - 1,
						this.b[d.startLineNumber - 1].substring(0, d.startColumn - 1) +
							this.b[d.endLineNumber - 1].substring(d.endColumn - 1),
					),
						this.b.splice(
							d.startLineNumber,
							d.endLineNumber - d.startLineNumber,
						),
						this.f &&
							this.f.removeValues(
								d.startLineNumber,
								d.endLineNumber - d.startLineNumber,
							);
				}
				l(d, m) {
					if (m.length === 0) return;
					const r = (0, t.$zf)(m);
					if (r.length === 1) {
						this.j(
							d.lineNumber - 1,
							this.b[d.lineNumber - 1].substring(0, d.column - 1) +
								r[0] +
								this.b[d.lineNumber - 1].substring(d.column - 1),
						);
						return;
					}
					(r[r.length - 1] += this.b[d.lineNumber - 1].substring(d.column - 1)),
						this.j(
							d.lineNumber - 1,
							this.b[d.lineNumber - 1].substring(0, d.column - 1) + r[0],
						);
					const u = new Uint32Array(r.length - 1);
					for (let a = 1; a < r.length; a++)
						this.b.splice(d.lineNumber + a - 1, 0, r[a]),
							(u[a - 1] = r[a].length + this.c.length);
					this.f && this.f.insertValues(d.lineNumber, u);
				}
			}
			e.$ZN = E;
		}),
		