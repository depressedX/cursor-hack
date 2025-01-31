import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/arrays.js';
import './lineTokens.js';
import '../encodedTokenAttributes.js';
define(de[2576], he([1, 0, 24, 388, 171]), function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/,
 i /*lineTokens*/,
 w /*encodedTokenAttributes*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$qV = void 0),
				(t = mt(t));
			class E {
				constructor(d) {
					(this.c = []), (this.d = !1), (this.e = d);
				}
				flush() {
					(this.c = []), (this.d = !1);
				}
				isEmpty() {
					return this.c.length === 0;
				}
				set(d, m) {
					(this.c = d || []), (this.d = m);
				}
				setPartial(d, m) {
					let r = d;
					if (m.length > 0) {
						const a = m[0].getRange(),
							h = m[m.length - 1].getRange();
						if (!a || !h) return d;
						r = d.plusRange(a).plusRange(h);
					}
					let u = null;
					for (let a = 0, h = this.c.length; a < h; a++) {
						const c = this.c[a];
						if (c.endLineNumber < r.startLineNumber) continue;
						if (c.startLineNumber > r.endLineNumber) {
							u = u || { index: a };
							break;
						}
						if ((c.removeTokens(r), c.isEmpty())) {
							this.c.splice(a, 1), a--, h--;
							continue;
						}
						if (c.endLineNumber < r.startLineNumber) continue;
						if (c.startLineNumber > r.endLineNumber) {
							u = u || { index: a };
							continue;
						}
						const [n, g] = c.split(r);
						if (n.isEmpty()) {
							u = u || { index: a };
							continue;
						}
						g.isEmpty() ||
							(this.c.splice(a, 1, n, g), a++, h++, (u = u || { index: a }));
					}
					return (
						(u = u || { index: this.c.length }),
						m.length > 0 && (this.c = t.$Zb(this.c, u.index, m)),
						r
					);
				}
				isComplete() {
					return this.d;
				}
				addSparseTokens(d, m) {
					if (m.getLineContent().length === 0) return m;
					const r = this.c;
					if (r.length === 0) return m;
					const u = E.f(r, d),
						a = r[u].getLineTokens(d);
					if (!a) return m;
					const h = m.getCount(),
						c = a.getCount();
					let n = 0;
					const g = [];
					let p = 0,
						o = 0;
					const f = (b, s) => {
						b !== o && ((o = b), (g[p++] = b), (g[p++] = s));
					};
					for (let b = 0; b < c; b++) {
						const s = a.getStartCharacter(b),
							l = a.getEndCharacter(b),
							y = a.getMetadata(b),
							$ =
								((y & w.MetadataConsts.SEMANTIC_USE_ITALIC
									? w.MetadataConsts.ITALIC_MASK
									: 0) |
									(y & w.MetadataConsts.SEMANTIC_USE_BOLD
										? w.MetadataConsts.BOLD_MASK
										: 0) |
									(y & w.MetadataConsts.SEMANTIC_USE_UNDERLINE
										? w.MetadataConsts.UNDERLINE_MASK
										: 0) |
									(y & w.MetadataConsts.SEMANTIC_USE_STRIKETHROUGH
										? w.MetadataConsts.STRIKETHROUGH_MASK
										: 0) |
									(y & w.MetadataConsts.SEMANTIC_USE_FOREGROUND
										? w.MetadataConsts.FOREGROUND_MASK
										: 0) |
									(y & w.MetadataConsts.SEMANTIC_USE_BACKGROUND
										? w.MetadataConsts.BACKGROUND_MASK
										: 0)) >>>
								0,
							v = ~$ >>> 0;
						for (; n < h && m.getEndOffset(n) <= s; )
							f(m.getEndOffset(n), m.getMetadata(n)), n++;
						for (
							n < h && m.getStartOffset(n) < s && f(s, m.getMetadata(n));
							n < h && m.getEndOffset(n) < l;
						)
							f(m.getEndOffset(n), (m.getMetadata(n) & v) | (y & $)), n++;
						if (n < h)
							f(l, (m.getMetadata(n) & v) | (y & $)),
								m.getEndOffset(n) === l && n++;
						else {
							const S = Math.min(Math.max(0, n - 1), h - 1);
							f(l, (m.getMetadata(S) & v) | (y & $));
						}
					}
					for (; n < h; ) f(m.getEndOffset(n), m.getMetadata(n)), n++;
					return new i.$7L(new Uint32Array(g), m.getLineContent(), this.e);
				}
				static f(d, m) {
					let r = 0,
						u = d.length - 1;
					for (; r < u; ) {
						let a = r + Math.floor((u - r) / 2);
						if (d[a].endLineNumber < m) r = a + 1;
						else if (d[a].startLineNumber > m) u = a - 1;
						else {
							for (
								;
								a > r &&
								d[a - 1].startLineNumber <= m &&
								m <= d[a - 1].endLineNumber;
							)
								a--;
							return a;
						}
					}
					return r;
				}
				acceptEdit(d, m, r, u, a) {
					for (const h of this.c) h.acceptEdit(d, m, r, u, a);
				}
			}
			e.$qV = E;
		})
