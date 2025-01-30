import '../../../../../../../require.js';
import '../../../../../../../exports.js';
define(de[2994], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 });
			const t = !0;
			class i {
				constructor(E, C = 1.2, d = 0.75) {
					(this.c = C),
						(this.d = d),
						(this.e = E),
						(this.g = []),
						(this.h = 0),
						(this.i = new Map()),
						this.j();
				}
				splitDocument(E) {
					const C = [
						"const",
						"let",
						"var",
						"int",
						"string",
						"return",
						"import",
						"export",
						"from",
						"as",
						"default",
						"extends",
						"implements",
						"private",
						"protected",
						"public",
						"static",
						"readonly",
						"async",
						"await",
						"break",
						"switch",
						"case",
						"catch",
						"continue",
						"console",
						"map",
						"filter",
						"new",
						"for",
						"while",
						"foreach",
						"try",
						"constructor",
						"yield",
					];
					return E.toLowerCase()
						.split(/[\s,()[\]'",:.{}]+/)
						.map((r) => r.replace(/[={[(,}\]\s/\-;]/g, ""))
						.filter((r) => r.trim() !== "")
						.filter((r) => !C.includes(r));
				}
				j() {
					let E = 0;
					this.e.forEach((C, d) => {
						const m = this.splitDocument(C);
						(this.g[d] = m.length),
							(E += m.length),
							m.forEach((r) => {
								this.i.has(r) ||
									this.i.set(r, new Array(this.e.length).fill(0));
								const u = this.i.get(r);
								u[d]++;
							});
					}),
						(this.h = E / this.e.length);
				}
				search(E) {
					const C = this.splitDocument(E),
						d = new Array(this.e.length).fill(0);
					return (
						C.forEach((m) => {
							if (this.i.has(m)) {
								const r = this.i.get(m);
								r.forEach((u, a) => {
									const h = this.g[a],
										c = u,
										g =
											Math.log(
												1 +
													(this.e.length -
														r.filter((p) => p > 0).length +
														0.5) /
														(r.filter((p) => p > 0).length + 0.5),
											) *
											((c * (this.c + 1)) /
												(c + this.c * (1 - this.d + this.d * (h / this.h))));
									d[a] += g;
								});
							}
						}),
						d
							.map((m, r) => ({ document: this.e[r], score: m, index: r }))
							.sort((m, r) => r.score - m.score)
					);
				}
			}
			e.default = i;
		}),
		