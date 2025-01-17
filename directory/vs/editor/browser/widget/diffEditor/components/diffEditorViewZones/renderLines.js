import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/browser/trustedTypes.js';
import '../../../../config/domFontInfo.js';
import '../../../../../common/config/editorOptions.js';
import '../../../../../common/core/stringBuilder.js';
import '../../../../../common/viewLayout/lineDecorations.js';
import '../../../../../common/viewLayout/viewLineRenderer.js';
import '../../../../../common/viewModel.js';
define(
			de[1606],
			he([1, 0, 432, 321, 38, 462, 533, 598, 290]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$2xb = e.$1xb = void 0),
					(e.$Zxb = u);
				const r = (0, t.$bjb)("diffEditorWidget", { createHTML: (n) => n });
				function u(n, g, p, o) {
					(0, i.$jsb)(o, g.fontInfo);
					const f = p.length > 0,
						b = new E.$KL(1e4);
					let s = 0,
						l = 0;
					const y = [];
					for (let I = 0; I < n.lineTokens.length; I++) {
						const T = I + 1,
							P = n.lineTokens[I],
							k = n.lineBreakData[I],
							L = C.$Fub.filter(p, T, 1, Number.MAX_SAFE_INTEGER);
						if (k) {
							let D = 0;
							for (const M of k.breakOffsets) {
								const N = P.sliceAndInflate(D, M, 0);
								(s = Math.max(
									s,
									c(
										l,
										N,
										C.$Fub.extractWrapped(L, D, M),
										f,
										n.mightContainNonBasicASCII,
										n.mightContainRTL,
										g,
										b,
									),
								)),
									l++,
									(D = M);
							}
							y.push(k.breakOffsets.length);
						} else
							y.push(1),
								(s = Math.max(
									s,
									c(
										l,
										P,
										L,
										f,
										n.mightContainNonBasicASCII,
										n.mightContainRTL,
										g,
										b,
									),
								)),
								l++;
					}
					s += g.scrollBeyondLastColumn;
					const $ = b.build(),
						v = r ? r.createHTML($) : $;
					o.innerHTML = v;
					const S = s * g.typicalHalfwidthCharacterWidth;
					return { heightInLines: l, minWidthInPx: S, viewLineCounts: y };
				}
				class a {
					constructor(g, p, o, f) {
						(this.lineTokens = g),
							(this.lineBreakData = p),
							(this.mightContainNonBasicASCII = o),
							(this.mightContainRTL = f);
					}
				}
				e.$1xb = a;
				class h {
					static fromEditor(g) {
						const p = g.getOptions(),
							o = p.get(w.EditorOption.fontInfo),
							f = p.get(w.EditorOption.layoutInfo);
						return new h(
							g.getModel()?.getOptions().tabSize || 0,
							o,
							p.get(w.EditorOption.disableMonospaceOptimizations),
							o.typicalHalfwidthCharacterWidth,
							p.get(w.EditorOption.scrollBeyondLastColumn),
							p.get(w.EditorOption.lineHeight),
							f.decorationsWidth,
							p.get(w.EditorOption.stopRenderingLineAfter),
							p.get(w.EditorOption.renderWhitespace),
							p.get(w.EditorOption.renderControlCharacters),
							p.get(w.EditorOption.fontLigatures),
						);
					}
					constructor(g, p, o, f, b, s, l, y, $, v, S) {
						(this.tabSize = g),
							(this.fontInfo = p),
							(this.disableMonospaceOptimizations = o),
							(this.typicalHalfwidthCharacterWidth = f),
							(this.scrollBeyondLastColumn = b),
							(this.lineHeight = s),
							(this.lineDecorationsWidth = l),
							(this.stopRenderingLineAfter = y),
							(this.renderWhitespace = $),
							(this.renderControlCharacters = v),
							(this.fontLigatures = S);
					}
				}
				e.$2xb = h;
				function c(n, g, p, o, f, b, s, l) {
					l.appendString('<div class="view-line'),
						o || l.appendString(" char-delete"),
						l.appendString('" style="top:'),
						l.appendString(String(n * s.lineHeight)),
						l.appendString('px;width:1000000px;">');
					const y = g.getLineContent(),
						$ = m.$2sb.isBasicASCII(y, f),
						v = m.$2sb.containsRTL(y, $, b),
						S = (0, d.$Nub)(
							new d.$Jub(
								s.fontInfo.isMonospace && !s.disableMonospaceOptimizations,
								s.fontInfo.canUseHalfwidthRightwardsArrow,
								y,
								!1,
								$,
								v,
								0,
								g,
								p,
								s.tabSize,
								0,
								s.fontInfo.spaceWidth,
								s.fontInfo.middotWidth,
								s.fontInfo.wsmiddotWidth,
								s.stopRenderingLineAfter,
								s.renderWhitespace,
								s.renderControlCharacters,
								s.fontLigatures !== w.EditorFontLigatures.OFF,
								null,
							),
							l,
						);
					return (
						l.appendString("</div>"),
						S.characterMapping.getHorizontalOffset(S.characterMapping.length)
					);
				}
			},
		),
		