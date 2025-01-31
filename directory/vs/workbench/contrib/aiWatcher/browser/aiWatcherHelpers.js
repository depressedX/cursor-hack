import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../editor/common/core/range.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/cppUtils/diff/line.js';
define(de[975], he([1, 0, 17, 3, 901]), function (ce /*require*/,
 e /*exports*/,
 t /*range*/,
 i /*lifecycle*/,
 w /*line*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.RangeWhereIs = e.$59b = void 0),
				(e.$49b = E),
				(e.$69b = m),
				(e.$79b = u);
			async function E(a, h) {
				const c = await new Promise((o) => {
						const f = setTimeout(() => {
							o([]);
						}, 1e3);
						(0, w.$gqb)(a, h, (b, s) => {
							clearTimeout(f), o(s);
						});
					}),
					n = [];
				let g = 1,
					p = 1;
				for (const o of c)
					if (o.added) {
						const f = p,
							b = p + o.count - 1,
							l =
								h.split(`
`)[b - 1].length + 1;
						n.push(new t.$iL(f, 1, b, l)), (p += o.count);
					} else o.removed ? (g += o.count) : ((g += o.count), (p += o.count));
				return n;
			}
			class C extends i.$1c {
				constructor(h, c) {
					super(), (this.a = {});
					for (const n of c)
						for (let g = n.startLineNumber; g <= n.endLineNumber; g++) {
							const p = new t.$iL(g, 1, g, 1),
								o = new d(p);
							this.a[g] && this.a[g].dispose(), (this.a[g] = o), this.D(o);
						}
					this.D(
						h.object.textEditorModel.onDidChangeContent((n) => {
							for (const [g, p] of Object.entries(this.a)) p.handleNewChange(n);
						}),
					);
				}
				getUpdatedLineNumber(h) {
					const c = this.a[h];
					return c ? c.range.startLineNumber : null;
				}
				getUpdatedRange(h) {
					const c = this.getUpdatedLineNumber(h.startLineNumber),
						n = this.getUpdatedLineNumber(h.endLineNumber);
					return c === null || n === null
						? null
						: new t.$iL(c, h.startColumn, n, h.endColumn);
				}
				dispose() {
					super.dispose();
				}
			}
			e.$59b = C;
			class d extends i.$1c {
				constructor(h) {
					super(), (this.range = h);
				}
				handleNewChange(h) {
					for (const c of h.changes)
						switch (m(this.range, c.range)) {
							case r.After:
								break;
							case r.Before: {
								const g =
									c.text.split(`
`).length -
									(c.range.endLineNumber - c.range.startLineNumber + 1);
								this.range = new t.$iL(
									this.range.startLineNumber + g,
									this.range.startColumn,
									this.range.endLineNumber + g,
									this.range.endColumn,
								);
								break;
							}
							case r.Overlap:
								break;
						}
				}
				dispose() {
					super.dispose();
				}
			}
			function m(a, h) {
				return a.endLineNumber < h.startLineNumber
					? r.After
					: a.startLineNumber > h.endLineNumber ||
							(h.endLineNumber === a.startLineNumber &&
								h.endColumn <= a.startColumn)
						? r.Before
						: h.startLineNumber === a.endLineNumber &&
								h.startColumn >= a.endColumn
							? r.After
							: r.Overlap;
			}
			var r;
			(function (a) {
				(a[(a.Before = 0)] = "Before"),
					(a[(a.Overlap = 1)] = "Overlap"),
					(a[(a.After = 2)] = "After");
			})(r || (e.RangeWhereIs = r = {}));
			function u(a) {
				if (a)
					return new t.$iL(
						a.startLineNumber,
						a.startColumn,
						a.endLineNumberInclusive,
						a.endColumn,
					);
			}
		})
