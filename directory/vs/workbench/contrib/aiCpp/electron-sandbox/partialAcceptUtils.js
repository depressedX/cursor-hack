import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../editor/common/core/position.js';
import '../../../../editor/common/core/range.js';
import '../common/cppUtils.js';
define(de[2961], he([1, 0, 48, 17, 971]), function (ce /*require*/,
 e /*exports*/,
 t /*position*/,
 i /*range*/,
 w /*cppUtils*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Ned = d);
			function E(m, r) {
				const u = new RegExp(
						m.wordDefinition.source,
						m.wordDefinition.flags.replace("g", ""),
					),
					a = r.match(u);
				let h = 0;
				a && a.index !== void 0
					? a.index === 0
						? (h = a[0].length)
						: (h = a.index)
					: (h = r.length);
				const n = /\s+/g.exec(r);
				return (
					n &&
						n.index !== void 0 &&
						n.index + n[0].length < h &&
						(h = n.index + n[0].length),
					r.slice(0, h)
				);
			}
			function C(m, r) {
				const u = r.split(`
`);
				return u.length === 1
					? new t.$hL(m.lineNumber, m.column + u[0].length)
					: new t.$hL(m.lineNumber + u.length - 1, u[u.length - 1].length + 1);
			}
			function d(m, r, u, a) {
				const h = u;
				let c = -1,
					n = -1;
				for (const [s, l] of m.entries()) {
					let y;
					if (!l.added) {
						const $ = l.value.split(`
`);
						if (
							((y = C(u, l.value)),
							y.lineNumber > r.lineNumber ||
								(y.lineNumber === r.lineNumber && y.column >= r.column))
						) {
							const v = r.lineNumber - u.lineNumber;
							let S = $.slice(0, v)
									.map(
										(T) =>
											T +
											`
`,
									)
									.join("").length,
								I;
							S === 0 ? (I = r.column - u.column) : (I = r.column - 1),
								(n = S + I),
								(c = s),
								(u = y);
							break;
						} else u = y;
					}
				}
				if (c === -1)
					return (
						console.warn("No position found in diff. This is unexpected!"),
						{ type: w.AcceptResult.NotAccepted }
					);
				let g = "",
					p = "",
					o = i.$iL.fromPositions(h, h);
				for (const s of m.slice(0, c + 1)) {
					let l = s.value;
					if ((s === m[c] && (l = l.slice(0, n)), !s.added)) {
						const y = C(o.getEndPosition(), l);
						(o = i.$iL.fromPositions(o.getStartPosition(), y)), (p += l);
					}
					s.removed || (g += l);
				}
				const f = m[c],
					b = f.value.slice(n);
				if (p === g) (g = b), (o = i.$iL.fromPositions(r, u));
				else {
					const s = C(o.getEndPosition(), b);
					(o = i.$iL.fromPositions(o.getStartPosition(), s)),
						f.removed || (g += b);
				}
				for (let s = c + 1; s < m.length; s++) {
					const l = m[s];
					if (l.added) {
						const y = E(a, l.value);
						g += y;
						break;
					} else if (l.removed) {
						const y = C(o.getEndPosition(), l.value);
						o = i.$iL.fromPositions(o.getStartPosition(), y);
					} else {
						const y = C(o.getEndPosition(), l.value);
						(o = i.$iL.fromPositions(o.getStartPosition(), y)), (g += l.value);
					}
				}
				return {
					type: w.AcceptResult.AcceptedWord,
					edit: { text: g, range: o },
				};
			}
		})
