import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/arrays.js';
import '../core/position.js';
import './contiguousTokensEditing.js';
import './lineTokens.js';
import '../encodedTokenAttributes.js';
define(
			de[2574],
			he([1, 0, 24, 48, 1544, 388, 171]),
			function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/,
 i /*position*/,
 w /*contiguousTokensEditing*/,
 E /*lineTokens*/,
 C /*encodedTokenAttributes*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$pV = void 0),
					(t = mt(t));
				class d {
					constructor(u) {
						(this.c = []), (this.d = 0), (this.e = u);
					}
					flush() {
						(this.c = []), (this.d = 0);
					}
					get hasTokens() {
						return this.c.length > 0;
					}
					getTokens(u, a, h) {
						let c = null;
						if ((a < this.d && (c = this.c[a]), c !== null && c !== w.$9L))
							return new E.$7L((0, w.$$L)(c), h, this.e);
						const n = new Uint32Array(2);
						return (
							(n[0] = h.length),
							(n[1] = m(this.e.encodeLanguageId(u))),
							new E.$7L(n, h, this.e)
						);
					}
					static f(u, a, h) {
						const c = h ? (0, w.$$L)(h) : null;
						if (a === 0) {
							let n = !1;
							if (
								(c && c.length > 1 && (n = C.$2L.getLanguageId(c[1]) !== u), !n)
							)
								return w.$9L;
						}
						if (!c || c.length === 0) {
							const n = new Uint32Array(2);
							return (n[0] = a), (n[1] = m(u)), n.buffer;
						}
						return (
							(c[c.length - 2] = a),
							c.byteOffset === 0 && c.byteLength === c.buffer.byteLength
								? c.buffer
								: c
						);
					}
					g(u) {
						for (; u >= this.d; ) (this.c[this.d] = null), this.d++;
					}
					h(u, a) {
						a !== 0 &&
							(u + a > this.d && (a = this.d - u),
							this.c.splice(u, a),
							(this.d -= a));
					}
					j(u, a) {
						if (a === 0) return;
						const h = [];
						for (let c = 0; c < a; c++) h[c] = null;
						(this.c = t.$Zb(this.c, u, h)), (this.d += a);
					}
					setTokens(u, a, h, c, n) {
						const g = d.f(this.e.encodeLanguageId(u), h, c);
						this.g(a);
						const p = this.c[a];
						return (this.c[a] = g), n ? !d.k(p, g) : !1;
					}
					static k(u, a) {
						if (!u || !a) return !u && !a;
						const h = (0, w.$$L)(u),
							c = (0, w.$$L)(a);
						if (h.length !== c.length) return !1;
						for (let n = 0, g = h.length; n < g; n++)
							if (h[n] !== c[n]) return !1;
						return !0;
					}
					acceptEdit(u, a, h) {
						this.l(u),
							this.m(new i.$hL(u.startLineNumber, u.startColumn), a, h);
					}
					l(u) {
						const a = u.startLineNumber - 1;
						if (a >= this.d) return;
						if (u.startLineNumber === u.endLineNumber) {
							if (u.startColumn === u.endColumn) return;
							this.c[a] = w.$0L.delete(
								this.c[a],
								u.startColumn - 1,
								u.endColumn - 1,
							);
							return;
						}
						this.c[a] = w.$0L.deleteEnding(this.c[a], u.startColumn - 1);
						const h = u.endLineNumber - 1;
						let c = null;
						h < this.d &&
							(c = w.$0L.deleteBeginning(this.c[h], u.endColumn - 1)),
							(this.c[a] = w.$0L.append(this.c[a], c)),
							this.h(u.startLineNumber, u.endLineNumber - u.startLineNumber);
					}
					m(u, a, h) {
						if (a === 0 && h === 0) return;
						const c = u.lineNumber - 1;
						if (!(c >= this.d)) {
							if (a === 0) {
								this.c[c] = w.$0L.insert(this.c[c], u.column - 1, h);
								return;
							}
							(this.c[c] = w.$0L.deleteEnding(this.c[c], u.column - 1)),
								(this.c[c] = w.$0L.insert(this.c[c], u.column - 1, h)),
								this.j(u.lineNumber, a);
						}
					}
					setMultilineTokens(u, a) {
						if (u.length === 0) return { changes: [] };
						const h = [];
						for (let c = 0, n = u.length; c < n; c++) {
							const g = u[c];
							let p = 0,
								o = 0,
								f = !1;
							for (let b = g.startLineNumber; b <= g.endLineNumber; b++)
								f
									? (this.setTokens(
											a.getLanguageId(),
											b - 1,
											a.getLineLength(b),
											g.getLineTokens(b),
											!1,
										),
										(o = b))
									: this.setTokens(
											a.getLanguageId(),
											b - 1,
											a.getLineLength(b),
											g.getLineTokens(b),
											!0,
										) && ((f = !0), (p = b), (o = b));
							f && h.push({ fromLineNumber: p, toLineNumber: o });
						}
						return { changes: h };
					}
				}
				e.$pV = d;
				function m(r) {
					return (
						((r << C.MetadataConsts.LANGUAGEID_OFFSET) |
							(C.StandardTokenType.Other <<
								C.MetadataConsts.TOKEN_TYPE_OFFSET) |
							(C.FontStyle.None << C.MetadataConsts.FONT_STYLE_OFFSET) |
							(C.ColorId.DefaultForeground <<
								C.MetadataConsts.FOREGROUND_OFFSET) |
							(C.ColorId.DefaultBackground <<
								C.MetadataConsts.BACKGROUND_OFFSET) |
							C.MetadataConsts.BALANCED_BRACKETS_MASK) >>>
						0
					);
				}
			},
		)
