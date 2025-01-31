import '../../../../../require.js';
import '../../../../../exports.js';
import '../../view/dynamicViewOverlay.js';
import '../../../common/core/editorColorRegistry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../common/config/editorOptions.js';
import '../../../common/core/position.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/types.js';
import '../../../common/model/guidesTextModelPart.js';
import '../../../common/textModelGuides.js';
import '../../../../css!vs/editor/browser/viewParts/indentGuides/indentGuides.js';
define(
			de[2848],
			he([1, 0, 591, 307, 35, 38, 48, 24, 28, 1543, 1150, 2266]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dynamicViewOverlay*/,
 i /*editorColorRegistry*/,
 w /*themeService*/,
 E /*editorOptions*/,
 C /*position*/,
 d /*arrays*/,
 m /*types*/,
 r /*guidesTextModelPart*/,
 u /*textModelGuides*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$tvb = void 0);
				class a extends t.$_ub {
					constructor(n) {
						super(), (this.a = n), (this.b = null);
						const g = this.a.configuration.options,
							p = g.get(E.EditorOption.wrappingInfo),
							o = g.get(E.EditorOption.fontInfo);
						(this.j = o.spaceWidth),
							(this.n =
								p.wrappingColumn === -1
									? -1
									: p.wrappingColumn * o.typicalHalfwidthCharacterWidth),
							(this.q = g.get(E.EditorOption.guides)),
							(this.m = null),
							this.a.addEventHandler(this);
					}
					dispose() {
						this.a.removeEventHandler(this), (this.m = null), super.dispose();
					}
					onConfigurationChanged(n) {
						const g = this.a.configuration.options,
							p = g.get(E.EditorOption.wrappingInfo),
							o = g.get(E.EditorOption.fontInfo);
						return (
							(this.j = o.spaceWidth),
							(this.n =
								p.wrappingColumn === -1
									? -1
									: p.wrappingColumn * o.typicalHalfwidthCharacterWidth),
							(this.q = g.get(E.EditorOption.guides)),
							!0
						);
					}
					onCursorStateChanged(n) {
						const p = n.selections[0].getPosition();
						return this.b?.equals(p) ? !1 : ((this.b = p), !0);
					}
					onDecorationsChanged(n) {
						return !0;
					}
					onFlushed(n) {
						return !0;
					}
					onLinesChanged(n) {
						return !0;
					}
					onLinesDeleted(n) {
						return !0;
					}
					onLinesInserted(n) {
						return !0;
					}
					onScrollChanged(n) {
						return n.scrollTopChanged;
					}
					onZonesChanged(n) {
						return !0;
					}
					onLanguageConfigurationChanged(n) {
						return !0;
					}
					prepareRender(n) {
						if (!this.q.indentation && this.q.bracketPairs === !1) {
							this.m = null;
							return;
						}
						const g = n.visibleRange.startLineNumber,
							p = n.visibleRange.endLineNumber,
							o = n.scrollWidth,
							f = this.b,
							b = this.r(
								g,
								Math.min(p + 1, this.a.viewModel.getLineCount()),
								f,
							),
							s = [];
						for (let l = g; l <= p; l++) {
							const y = l - g,
								$ = b[y];
							let v = "";
							const S = n.visibleRangeForPosition(new C.$hL(l, 1))?.left ?? 0;
							for (const I of $) {
								const T =
									I.column === -1
										? S + (I.visibleColumn - 1) * this.j
										: n.visibleRangeForPosition(new C.$hL(l, I.column)).left;
								if (T > o || (this.n > 0 && T > this.n)) break;
								const P = I.horizontalLine
										? I.horizontalLine.top
											? "horizontal-top"
											: "horizontal-bottom"
										: "vertical",
									k = I.horizontalLine
										? (n.visibleRangeForPosition(
												new C.$hL(l, I.horizontalLine.endColumn),
											)?.left ?? T + this.j) - T
										: this.j;
								v += `<div class="core-guide ${I.className} ${P}" style="left:${T}px;width:${k}px"></div>`;
							}
							s[y] = v;
						}
						this.m = s;
					}
					r(n, g, p) {
						const o =
								this.q.bracketPairs !== !1
									? this.a.viewModel.getBracketGuidesInRangeByLine(n, g, p, {
											highlightActive: this.q.highlightActiveBracketPair,
											horizontalGuides:
												this.q.bracketPairsHorizontal === !0
													? u.HorizontalGuidesState.Enabled
													: this.q.bracketPairsHorizontal === "active"
														? u.HorizontalGuidesState.EnabledForActive
														: u.HorizontalGuidesState.Disabled,
											includeInactive: this.q.bracketPairs === !0,
										})
									: null,
							f = this.q.indentation
								? this.a.viewModel.getLinesIndentGuides(n, g)
								: null;
						let b = 0,
							s = 0,
							l = 0;
						if (this.q.highlightActiveIndentation !== !1 && p) {
							const v = this.a.viewModel.getActiveIndentGuide(
								p.lineNumber,
								n,
								g,
							);
							(b = v.startLineNumber), (s = v.endLineNumber), (l = v.indent);
						}
						const { indentSize: y } = this.a.viewModel.model.getOptions(),
							$ = [];
						for (let v = n; v <= g; v++) {
							const S = new Array();
							$.push(S);
							const I = o ? o[v - n] : [],
								T = new d.$cc(I),
								P = f ? f[v - n] : 0;
							for (let k = 1; k <= P; k++) {
								const L = (k - 1) * y + 1,
									D =
										(this.q.highlightActiveIndentation === "always" ||
											I.length === 0) &&
										b <= v &&
										v <= s &&
										k === l;
								S.push(...(T.takeWhile((N) => N.visibleColumn < L) || []));
								const M = T.peek();
								(!M || M.visibleColumn !== L || M.horizontalLine) &&
									S.push(
										new u.$CN(
											L,
											-1,
											`core-guide-indent lvl-${(k - 1) % 30}` +
												(D ? " indent-active" : ""),
											null,
											-1,
											-1,
										),
									);
							}
							S.push(...(T.takeWhile((k) => !0) || []));
						}
						return $;
					}
					render(n, g) {
						if (!this.m) return "";
						const p = g - n;
						return p < 0 || p >= this.m.length ? "" : this.m[p];
					}
				}
				e.$tvb = a;
				function h(c) {
					if (!(c && c.isTransparent())) return c;
				}
				(0, w.$oP)((c, n) => {
					const g = [
							{
								bracketColor: i.$_T,
								guideColor: i.$gU,
								guideColorActive: i.$mU,
							},
							{
								bracketColor: i.$aU,
								guideColor: i.$hU,
								guideColorActive: i.$nU,
							},
							{
								bracketColor: i.$bU,
								guideColor: i.$iU,
								guideColorActive: i.$oU,
							},
							{
								bracketColor: i.$cU,
								guideColor: i.$jU,
								guideColorActive: i.$pU,
							},
							{
								bracketColor: i.$dU,
								guideColor: i.$kU,
								guideColorActive: i.$qU,
							},
							{
								bracketColor: i.$eU,
								guideColor: i.$lU,
								guideColorActive: i.$rU,
							},
						],
						p = new r.$DU(),
						o = [
							{ indentColor: i.$HT, indentColorActive: i.$NT },
							{ indentColor: i.$IT, indentColorActive: i.$OT },
							{ indentColor: i.$JT, indentColorActive: i.$PT },
							{ indentColor: i.$KT, indentColorActive: i.$QT },
							{ indentColor: i.$LT, indentColorActive: i.$RT },
							{ indentColor: i.$MT, indentColorActive: i.$ST },
						],
						f = g
							.map((s) => {
								const l = c.getColor(s.bracketColor),
									y = c.getColor(s.guideColor),
									$ = c.getColor(s.guideColorActive),
									v = h(h(y) ?? l?.transparent(0.3)),
									S = h(h($) ?? l);
								if (!(!v || !S)) return { guideColor: v, guideColorActive: S };
							})
							.filter(m.$tg),
						b = o
							.map((s) => {
								const l = c.getColor(s.indentColor),
									y = c.getColor(s.indentColorActive),
									$ = h(l),
									v = h(y);
								if (!(!$ || !v))
									return { indentColor: $, indentColorActive: v };
							})
							.filter(m.$tg);
					if (f.length > 0) {
						for (let s = 0; s < 30; s++) {
							const l = f[s % f.length];
							n.addRule(
								`.monaco-editor .${p.getInlineClassNameOfLevel(s).replace(/ /g, ".")} { --guide-color: ${l.guideColor}; --guide-color-active: ${l.guideColorActive}; }`,
							);
						}
						n.addRule(
							".monaco-editor .vertical { box-shadow: 1px 0 0 0 var(--guide-color) inset; }",
						),
							n.addRule(
								".monaco-editor .horizontal-top { border-top: 1px solid var(--guide-color); }",
							),
							n.addRule(
								".monaco-editor .horizontal-bottom { border-bottom: 1px solid var(--guide-color); }",
							),
							n.addRule(
								`.monaco-editor .vertical.${p.activeClassName} { box-shadow: 1px 0 0 0 var(--guide-color-active) inset; }`,
							),
							n.addRule(
								`.monaco-editor .horizontal-top.${p.activeClassName} { border-top: 1px solid var(--guide-color-active); }`,
							),
							n.addRule(
								`.monaco-editor .horizontal-bottom.${p.activeClassName} { border-bottom: 1px solid var(--guide-color-active); }`,
							);
					}
					if (b.length > 0) {
						for (let s = 0; s < 30; s++) {
							const l = b[s % b.length];
							n.addRule(
								`.monaco-editor .lines-content .core-guide-indent.lvl-${s} { --indent-color: ${l.indentColor}; --indent-color-active: ${l.indentColorActive}; }`,
							);
						}
						n.addRule(
							".monaco-editor .lines-content .core-guide-indent { box-shadow: 1px 0 0 0 var(--indent-color) inset; }",
						),
							n.addRule(
								".monaco-editor .lines-content .core-guide-indent.indent-active { box-shadow: 1px 0 0 0 var(--indent-color-active) inset; }",
							);
					}
				});
			},
		)
