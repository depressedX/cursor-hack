import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/cppUtils/utils.js';
import '../../../common/core/position.js';
define(de[1155], he([1, 0, 646, 48]), function (ce /*require*/,
 e /*exports*/,
 t /*utils*/,
 i /*position*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$bfc = u),
				(e.$cfc = a),
				(e.$dfc = h),
				(e.$efc = c);
			class w {
				constructor(g, p, o) {
					(this.a = g), (this.uri = p), (this.b = o);
				}
				getValueInRange(g, p) {
					return r(this.a, g);
				}
				getLineMaxColumn(g) {
					return d(this.a, g);
				}
				getPositionAt(g) {
					return E(this.a, g);
				}
				getOffsetAt(g) {
					return C(this.a, g);
				}
				getValue(g, p) {
					return this.a;
				}
				getLineCount() {
					return this.a.split(`
`).length;
				}
				getVersionId() {
					return this.b ?? 0;
				}
			}
			function E(n, g) {
				const p = n.split(`
`);
				let o = 0,
					f = 1;
				for (const b of p) {
					if (o + b.length + 1 > g) return new i.$hL(f, g - o + 1);
					(o += b.length + 1), f++;
				}
				return new i.$hL(p.length, p[p.length - 1].length + 1);
			}
			function C(n, g) {
				const p = n.split(`
`);
				let o = 0;
				if (g.lineNumber > p.length || g.lineNumber < 1) return -1;
				for (let f = 0; f < g.lineNumber - 1; f++) o += p[f].length + 1;
				return (o += Math.min(g.column - 1, p[g.lineNumber - 1].length)), o;
			}
			function d(n, g) {
				if (g < 1) return 0;
				const p = n.split(`
`);
				return g > p.length ? p[p.length - 1].length + 1 : p[g - 1].length + 1;
			}
			function m(n, g) {
				const p = n.split(`
`),
					o = g.startLineNumber - 1,
					f = g.endLineNumberInclusive - 1,
					b = g.startColumn - 1;
				let s = g.endColumn - 1;
				const l = p.slice(o, f + 1);
				return l.length === 0
					? ""
					: (f >= p.length && (s = void 0),
						l.length === 1
							? (l[0] = l[0].slice(b, s))
							: ((l[0] = l[0].slice(b)),
								(l[l.length - 1] = l[l.length - 1].slice(0, s))),
						l.join(`
`));
			}
			function r(n, g) {
				return m(n, {
					startColumn: g.startColumn,
					startLineNumber: g.startLineNumber,
					endColumn: g.endColumn,
					endLineNumberInclusive: g.endLineNumber,
				});
			}
			function u(n, g) {
				return new w(n, g);
			}
			function a(n) {
				const g = n.uri,
					p = n.getValue(),
					o = n.getVersionId();
				return new w(p, g, o);
			}
			function h(n, g) {
				const p = g.reduce((o, f) => (0, t.$tqb)(o, f), n.getValue());
				return new w(p, n.uri, n.getVersionId() + 1);
			}
			function c(n, g) {
				const p = (0, t.$tqb)(n.getValue(), g);
				return new w(p, n.uri, n.getVersionId() + 1);
			}
		}),
		