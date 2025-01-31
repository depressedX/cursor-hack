import '../../../../require.js';
import '../../../../exports.js';
import '../encodedTokenAttributes.js';
import '../../../platform/theme/common/themeService.js';
import '../../../platform/log/common/log.js';
import '../tokens/sparseMultilineTokens.js';
import '../languages/language.js';
define(
			de[1209],
			he([1, 0, 171, 35, 34, 2575, 61]),
			function (ce /*require*/,
 e /*exports*/,
 t /*encodedTokenAttributes*/,
 i /*themeService*/,
 w /*log*/,
 E /*sparseMultilineTokens*/,
 C /*language*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$fPb = void 0),
					(e.$gPb = a);
				var d;
				(function (n) {
					n[(n.NO_STYLING = 2147483647)] = "NO_STYLING";
				})(d || (d = {}));
				const m = !1;
				let r = class {
					constructor(g, p, o, f) {
						(this.e = g),
							(this.f = p),
							(this.g = o),
							(this.h = f),
							(this.b = !1),
							(this.c = !1),
							(this.d = !1),
							(this.a = new c());
					}
					getMetadata(g, p, o) {
						const f = this.g.languageIdCodec.encodeLanguageId(o),
							b = this.a.get(g, p, f);
						let s;
						if (b)
							(s = b.metadata),
								m &&
									this.h.getLevel() === w.LogLevel.Trace &&
									this.h.trace(
										`SemanticTokensProviderStyling [CACHED] ${g} / ${p}: foreground ${t.$2L.getForeground(s)}, fontStyle ${t.$2L.getFontStyle(s).toString(2)}`,
									);
						else {
							let l = this.e.tokenTypes[g];
							const y = [];
							if (l) {
								let $ = p;
								for (let S = 0; $ > 0 && S < this.e.tokenModifiers.length; S++)
									$ & 1 && y.push(this.e.tokenModifiers[S]), ($ = $ >> 1);
								m &&
									$ > 0 &&
									this.h.getLevel() === w.LogLevel.Trace &&
									(this.h.trace(
										`SemanticTokensProviderStyling: unknown token modifier index: ${p.toString(2)} for legend: ${JSON.stringify(this.e.tokenModifiers)}`,
									),
									y.push("not-in-legend"));
								const v = this.f.getColorTheme().getTokenStyleMetadata(l, y, o);
								if (typeof v > "u") s = d.NO_STYLING;
								else {
									if (((s = 0), typeof v.italic < "u")) {
										const S =
											(v.italic ? t.FontStyle.Italic : 0) <<
											t.MetadataConsts.FONT_STYLE_OFFSET;
										s |= S | t.MetadataConsts.SEMANTIC_USE_ITALIC;
									}
									if (typeof v.bold < "u") {
										const S =
											(v.bold ? t.FontStyle.Bold : 0) <<
											t.MetadataConsts.FONT_STYLE_OFFSET;
										s |= S | t.MetadataConsts.SEMANTIC_USE_BOLD;
									}
									if (typeof v.underline < "u") {
										const S =
											(v.underline ? t.FontStyle.Underline : 0) <<
											t.MetadataConsts.FONT_STYLE_OFFSET;
										s |= S | t.MetadataConsts.SEMANTIC_USE_UNDERLINE;
									}
									if (typeof v.strikethrough < "u") {
										const S =
											(v.strikethrough ? t.FontStyle.Strikethrough : 0) <<
											t.MetadataConsts.FONT_STYLE_OFFSET;
										s |= S | t.MetadataConsts.SEMANTIC_USE_STRIKETHROUGH;
									}
									if (v.foreground) {
										const S =
											v.foreground << t.MetadataConsts.FOREGROUND_OFFSET;
										s |= S | t.MetadataConsts.SEMANTIC_USE_FOREGROUND;
									}
									s === 0 && (s = d.NO_STYLING);
								}
							} else
								m &&
									this.h.getLevel() === w.LogLevel.Trace &&
									this.h.trace(
										`SemanticTokensProviderStyling: unknown token type index: ${g} for legend: ${JSON.stringify(this.e.tokenTypes)}`,
									),
									(s = d.NO_STYLING),
									(l = "not-in-legend");
							this.a.add(g, p, f, s),
								m &&
									this.h.getLevel() === w.LogLevel.Trace &&
									this.h.trace(
										`SemanticTokensProviderStyling ${g} (${l}) / ${p} (${y.join(" ")}): foreground ${t.$2L.getForeground(s)}, fontStyle ${t.$2L.getFontStyle(s).toString(2)}`,
									);
						}
						return s;
					}
					warnOverlappingSemanticTokens(g, p) {
						this.b ||
							((this.b = !0),
							this.h.warn(
								`Overlapping semantic tokens detected at lineNumber ${g}, column ${p}`,
							));
					}
					warnInvalidLengthSemanticTokens(g, p) {
						this.c ||
							((this.c = !0),
							this.h.warn(
								`Semantic token with invalid length detected at lineNumber ${g}, column ${p}`,
							));
					}
					warnInvalidEditStart(g, p, o, f, b) {
						this.d ||
							((this.d = !0),
							this.h.warn(
								`Invalid semantic tokens edit detected (previousResultId: ${g}, resultId: ${p}) at edit #${o}: The provided start offset ${f} is outside the previous data (length ${b}).`,
							));
					}
				};
				(e.$fPb = r),
					(e.$fPb = r = Ne([j(1, i.$iP), j(2, C.$nM), j(3, w.$ik)], r));
				var u;
				(function (n) {
					(n[(n.DesiredTokensPerArea = 400)] = "DesiredTokensPerArea"),
						(n[(n.DesiredMaxAreas = 1024)] = "DesiredMaxAreas");
				})(u || (u = {}));
				function a(n, g, p) {
					const o = n.data,
						f = (n.data.length / 5) | 0,
						b = Math.max(
							Math.ceil(f / u.DesiredMaxAreas),
							u.DesiredTokensPerArea,
						),
						s = [];
					let l = 0,
						y = 1,
						$ = 0;
					for (; l < f; ) {
						const v = l;
						let S = Math.min(v + b, f);
						if (S < f) {
							let M = S;
							for (; M - 1 > v && o[5 * M] === 0; ) M--;
							if (M - 1 === v) {
								let N = S;
								for (; N + 1 < f && o[5 * N] === 0; ) N++;
								S = N;
							} else S = M;
						}
						let I = new Uint32Array((S - v) * 4),
							T = 0,
							P = 0,
							k = 0,
							L = 0;
						for (; l < S; ) {
							const M = 5 * l,
								N = o[M],
								A = o[M + 1],
								R = (y + N) | 0,
								O = N === 0 ? ($ + A) | 0 : A,
								B = o[M + 2],
								U = (O + B) | 0,
								z = o[M + 3],
								F = o[M + 4];
							if (U <= O) g.warnInvalidLengthSemanticTokens(R, O + 1);
							else if (k === R && L > O)
								g.warnOverlappingSemanticTokens(R, O + 1);
							else {
								const x = g.getMetadata(z, F, p);
								x !== d.NO_STYLING &&
									(P === 0 && (P = R),
									(I[T] = R - P),
									(I[T + 1] = O),
									(I[T + 2] = U),
									(I[T + 3] = x),
									(T += 4),
									(k = R),
									(L = U));
							}
							(y = R), ($ = O), l++;
						}
						T !== I.length && (I = I.subarray(0, T));
						const D = E.$EN.create(P, I);
						s.push(D);
					}
					return s;
				}
				class h {
					constructor(g, p, o, f) {
						(this.tokenTypeIndex = g),
							(this.tokenModifierSet = p),
							(this.languageId = o),
							(this.metadata = f),
							(this.next = null);
					}
				}
				class c {
					static {
						this.a = [
							3, 7, 13, 31, 61, 127, 251, 509, 1021, 2039, 4093, 8191, 16381,
							32749, 65521, 131071, 262139, 524287, 1048573, 2097143,
						];
					}
					constructor() {
						(this.b = 0),
							(this.c = 0),
							(this.d = c.a[this.c]),
							(this.e = Math.round(
								this.c + 1 < c.a.length ? (2 / 3) * this.d : 0,
							)),
							(this.f = []),
							c.g(this.f, this.d);
					}
					static g(g, p) {
						for (let o = 0; o < p; o++) g[o] = null;
					}
					h(g, p) {
						return ((g << 5) - g + p) | 0;
					}
					j(g, p, o) {
						return this.h(this.h(g, p), o) % this.d;
					}
					get(g, p, o) {
						const f = this.j(g, p, o);
						let b = this.f[f];
						for (; b; ) {
							if (
								b.tokenTypeIndex === g &&
								b.tokenModifierSet === p &&
								b.languageId === o
							)
								return b;
							b = b.next;
						}
						return null;
					}
					add(g, p, o, f) {
						if ((this.b++, this.e !== 0 && this.b >= this.e)) {
							const b = this.f;
							this.c++,
								(this.d = c.a[this.c]),
								(this.e = Math.round(
									this.c + 1 < c.a.length ? (2 / 3) * this.d : 0,
								)),
								(this.f = []),
								c.g(this.f, this.d);
							for (const s of b) {
								let l = s;
								for (; l; ) {
									const y = l.next;
									(l.next = null), this.k(l), (l = y);
								}
							}
						}
						this.k(new h(g, p, o, f));
					}
					k(g) {
						const p = this.j(
							g.tokenTypeIndex,
							g.tokenModifierSet,
							g.languageId,
						);
						(g.next = this.f[p]), (this.f[p] = g);
					}
				}
			},
		)
