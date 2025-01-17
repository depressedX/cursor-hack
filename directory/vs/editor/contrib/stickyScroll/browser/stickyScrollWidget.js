import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/trustedTypes.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/themables.js';
import '../../../browser/editorBrowser.js';
import '../../../browser/viewParts/lines/viewLine.js';
import '../../../browser/widget/codeEditor/embeddedCodeEditorWidget.js';
import '../../../common/config/editorOptions.js';
import '../../../common/core/position.js';
import '../../../common/core/stringBuilder.js';
import '../../../common/viewLayout/lineDecorations.js';
import '../../../common/viewLayout/viewLineRenderer.js';
import '../../folding/browser/foldingDecorations.js';
import '../../../../css!vs/editor/contrib/stickyScroll/browser/stickyScroll.js';
define(
			de[2925],
			he([
				1, 0, 7, 432, 24, 3, 26, 56, 1208, 281, 38, 48, 462, 533, 598, 1219,
				2320,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ikc = e.$hkc = void 0),
					(t = mt(t));
				class p {
					constructor(I, T, P, k = null) {
						(this.startLineNumbers = I),
							(this.endLineNumbers = T),
							(this.lastLineRelativePosition = P),
							(this.showEndForLine = k);
					}
					equals(I) {
						return (
							!!I &&
							this.lastLineRelativePosition === I.lastLineRelativePosition &&
							this.showEndForLine === I.showEndForLine &&
							(0, w.$yb)(this.startLineNumbers, I.startLineNumbers) &&
							(0, w.$yb)(this.endLineNumbers, I.endLineNumbers)
						);
					}
					static get Empty() {
						return new p([], [], 0);
					}
				}
				e.$hkc = p;
				const o = (0, i.$bjb)("stickyScrollViewLayer", {
						createHTML: (S) => S,
					}),
					f = "data-sticky-line-index",
					b = "data-sticky-is-line",
					s = "data-sticky-is-line-number",
					l = "data-sticky-is-folding-icon";
				class y extends E.$1c {
					constructor(I) {
						super(),
							(this.t = I),
							(this.a = new E.$Zc()),
							(this.b = document.createElement("div")),
							(this.c = document.createElement("div")),
							(this.f = document.createElement("div")),
							(this.g = document.createElement("div")),
							(this.j = this.t.getOption(u.EditorOption.lineHeight)),
							(this.m = []),
							(this.n = []),
							(this.q = 0),
							(this.r = 0),
							(this.s = !1),
							(this.c.className = "sticky-widget-line-numbers"),
							this.c.setAttribute("role", "none"),
							(this.g.className = "sticky-widget-lines"),
							this.g.setAttribute("role", "list"),
							(this.f.className = "sticky-widget-lines-scrollable"),
							this.f.appendChild(this.g),
							(this.b.className = "sticky-widget"),
							this.b.classList.toggle("peek", I instanceof r.$wDb),
							this.b.appendChild(this.c),
							this.b.appendChild(this.f);
						const T = () => {
							this.g.style.left = this.t.getOption(u.EditorOption.stickyScroll)
								.scrollWithEditor
								? `-${this.t.getScrollLeft()}px`
								: "0px";
						};
						this.D(
							this.t.onDidChangeConfiguration((P) => {
								P.hasChanged(u.EditorOption.stickyScroll) && T(),
									P.hasChanged(u.EditorOption.lineHeight) &&
										(this.j = this.t.getOption(u.EditorOption.lineHeight));
							}),
						),
							this.D(
								this.t.onDidScrollChange((P) => {
									P.scrollLeftChanged && T(), P.scrollWidthChanged && this.y();
								}),
							),
							this.D(
								this.t.onDidChangeModel(() => {
									T(), this.y();
								}),
							),
							this.D(this.a),
							T(),
							this.D(
								this.t.onDidLayoutChange((P) => {
									this.y();
								}),
							),
							this.y();
					}
					get lineNumbers() {
						return this.n;
					}
					get lineNumberCount() {
						return this.n.length;
					}
					getRenderedStickyLine(I) {
						return this.m.find((T) => T.lineNumber === I);
					}
					getCurrentLines() {
						return this.n;
					}
					setState(I, T, P) {
						if (
							P === void 0 &&
							((!this.h && !I) || (this.h && this.h.equals(I)))
						)
							return;
						const k = this.u(I),
							L = k ? void 0 : I,
							D = k ? 0 : this.w(I, P);
						this.G(L, T, D), (this.h = I);
					}
					u(I) {
						if (!I) return !0;
						const T =
							I.startLineNumbers.length * this.j + I.lastLineRelativePosition;
						if (T > 0) {
							this.q = I.lastLineRelativePosition;
							const P = [...I.startLineNumbers];
							I.showEndForLine !== null &&
								(P[I.showEndForLine] = I.endLineNumbers[I.showEndForLine]),
								(this.n = P);
						} else (this.q = 0), (this.n = []);
						return T === 0;
					}
					w(I, T) {
						if (!I || !this.h) return 0;
						if (T !== void 0) return T;
						const P = this.h,
							k = I.startLineNumbers.findIndex(
								(L) => !P.startLineNumbers.includes(L),
							);
						return k === -1 ? 0 : k;
					}
					y() {
						const I = this.t.getLayoutInfo(),
							T = I.contentLeft;
						(this.c.style.width = `${T}px`),
							this.f.style.setProperty(
								"--vscode-editorStickyScroll-scrollableWidth",
								`${this.t.getScrollWidth() - I.verticalScrollbarWidth}px`,
							),
							(this.b.style.width = `${I.width - I.verticalScrollbarWidth}px`);
					}
					z(I) {
						this.a.clear();
						for (let T = I; T < this.m.length; T++) {
							const P = this.m[T];
							P.lineNumberDomNode.remove(), P.lineDomNode.remove();
						}
						(this.m = this.m.slice(0, I)), (this.b.style.display = "none");
					}
					C(I) {
						this.c.style.setProperty(
							"--vscode-editorStickyScroll-foldingOpacityTransition",
							`opacity ${I ? 0.5 : 0}s`,
						);
					}
					F(I) {
						for (const T of this.m) {
							const P = T.foldingIcon;
							P && P.setVisible(I ? !0 : P.isCollapsed);
						}
					}
					async G(I, T, P) {
						if ((this.z(P), !I)) return;
						for (const M of this.m) this.J(M);
						const k = this.t.getLayoutInfo(),
							L = this.n.slice(P);
						for (const [M, N] of L.entries()) {
							const A = this.I(M + P, N, T, k);
							A &&
								(this.g.appendChild(A.lineDomNode),
								this.c.appendChild(A.lineNumberDomNode),
								this.m.push(A));
						}
						T && (this.H(), this.C(!this.s));
						const D = this.n.length * this.j + this.q;
						(this.b.style.display = "block"),
							(this.c.style.height = `${D}px`),
							(this.f.style.height = `${D}px`),
							(this.b.style.height = `${D}px`),
							(this.b.style.marginLeft = "0px"),
							(this.r =
								Math.max(...this.m.map((M) => M.scrollWidth)) +
								k.verticalScrollbarWidth),
							this.t.layoutOverlayWidget(this);
					}
					H() {
						this.t.getOption(u.EditorOption.showFoldingControls) ===
							"mouseover" &&
							(this.a.add(
								t.$0fb(this.c, t.$$gb.MOUSE_ENTER, () => {
									(this.s = !0), this.F(!0);
								}),
							),
							this.a.add(
								t.$0fb(this.c, t.$$gb.MOUSE_LEAVE, () => {
									(this.s = !1), this.C(!0), this.F(!1);
								}),
							));
					}
					I(I, T, P, k) {
						const L = this.t._getViewModel();
						if (!L) return;
						const D = L.coordinatesConverter.convertModelPositionToViewPosition(
								new a.$hL(T, 1),
							).lineNumber,
							M = L.getViewLineRenderingData(D),
							N = this.t.getOption(u.EditorOption.lineNumbers);
						let A;
						try {
							A = c.$Fub.filter(
								M.inlineDecorations,
								D,
								M.minColumn,
								M.maxColumn,
							);
						} catch {
							A = [];
						}
						const R = new n.$Jub(
								!0,
								!0,
								M.content,
								M.continuesWithWrappedLine,
								M.isBasicASCII,
								M.containsRTL,
								0,
								M.tokens,
								A,
								M.tabSize,
								M.startVisibleColumn,
								1,
								1,
								1,
								500,
								"none",
								!0,
								!0,
								null,
							),
							O = new h.$KL(2e3),
							B = (0, n.$Nub)(R, O);
						let U;
						o ? (U = o.createHTML(O.build())) : (U = O.build());
						const z = document.createElement("span");
						z.setAttribute(f, String(I)),
							z.setAttribute(b, ""),
							z.setAttribute("role", "listitem"),
							(z.tabIndex = 0),
							(z.className = "sticky-line-content"),
							z.classList.add(`stickyLine${T}`),
							(z.style.lineHeight = `${this.j}px`),
							(z.innerHTML = U);
						const F = document.createElement("span");
						F.setAttribute(f, String(I)),
							F.setAttribute(s, ""),
							(F.className = "sticky-line-number"),
							(F.style.lineHeight = `${this.j}px`);
						const x = k.contentLeft;
						F.style.width = `${x}px`;
						const H = document.createElement("span");
						N.renderType === u.RenderLineNumbersType.On ||
						(N.renderType === u.RenderLineNumbersType.Interval && T % 10 === 0)
							? (H.innerText = T.toString())
							: N.renderType === u.RenderLineNumbersType.Relative &&
								(H.innerText = Math.abs(
									T - this.t.getPosition().lineNumber,
								).toString()),
							(H.className = "sticky-line-number-inner"),
							(H.style.lineHeight = `${this.j}px`),
							(H.style.width = `${k.lineNumbersWidth}px`),
							(H.style.paddingLeft = `${k.lineNumbersLeft}px`),
							F.appendChild(H);
						const q = this.L(P, T);
						q && F.appendChild(q.domNode),
							this.t.applyFontInfo(z),
							this.t.applyFontInfo(H),
							(F.style.lineHeight = `${this.j}px`),
							(z.style.lineHeight = `${this.j}px`),
							(F.style.height = `${this.j}px`),
							(z.style.height = `${this.j}px`);
						const V = new $(I, T, z, F, q, B.characterMapping, z.scrollWidth);
						return this.J(V);
					}
					J(I) {
						const T = I.index,
							P = I.lineDomNode,
							k = I.lineNumberDomNode,
							L = T === this.n.length - 1,
							D = "0",
							M = "1";
						(P.style.zIndex = L ? D : M), (k.style.zIndex = L ? D : M);
						const N = `${T * this.j + this.q + (I.foldingIcon?.isCollapsed ? 1 : 0)}px`,
							A = `${T * this.j}px`;
						return (P.style.top = L ? N : A), (k.style.top = L ? N : A), I;
					}
					L(I, T) {
						const P = this.t.getOption(u.EditorOption.showFoldingControls);
						if (!I || P === "never") return;
						const k = I.regions,
							L = k.findRange(T),
							D = k.getStartLineNumber(L);
						if (!(T === D)) return;
						const N = k.isCollapsed(L),
							A = new v(N, D, k.getEndLineNumber(L), this.j);
						return (
							A.setVisible(this.s ? !0 : N || P === "always"),
							A.domNode.setAttribute(l, ""),
							A
						);
					}
					getId() {
						return "editor.contrib.stickyScrollWidget";
					}
					getDomNode() {
						return this.b;
					}
					getPosition() {
						return {
							preference: d.OverlayWidgetPositionPreference.TOP_CENTER,
							stackOridinal: 10,
						};
					}
					getMinContentWidthInPx() {
						return this.r;
					}
					focusLineWithIndex(I) {
						0 <= I && I < this.m.length && this.m[I].lineDomNode.focus();
					}
					getEditorPositionFromNode(I) {
						if (!I || I.children.length > 0) return null;
						const T = this.M(I);
						if (!T) return null;
						const P = (0, m.$Sub)(T.characterMapping, I, 0);
						return new a.$hL(T.lineNumber, P);
					}
					getLineNumberFromChildDomNode(I) {
						return this.M(I)?.lineNumber ?? null;
					}
					M(I) {
						const T = this.getLineIndexFromChildDomNode(I);
						return T === null || T < 0 || T >= this.m.length ? null : this.m[T];
					}
					getLineIndexFromChildDomNode(I) {
						const T = this.N(I, f);
						return T ? parseInt(T, 10) : null;
					}
					isInStickyLine(I) {
						return this.N(I, b) !== void 0;
					}
					isInFoldingIconDomNode(I) {
						return this.N(I, l) !== void 0;
					}
					N(I, T) {
						for (; I && I !== this.b; ) {
							const P = I.getAttribute(T);
							if (P !== null) return P;
							I = I.parentElement;
						}
					}
				}
				e.$ikc = y;
				class $ {
					constructor(I, T, P, k, L, D, M) {
						(this.index = I),
							(this.lineNumber = T),
							(this.lineDomNode = P),
							(this.lineNumberDomNode = k),
							(this.foldingIcon = L),
							(this.characterMapping = D),
							(this.scrollWidth = M);
					}
				}
				class v {
					constructor(I, T, P, k) {
						(this.isCollapsed = I),
							(this.foldingStartLine = T),
							(this.foldingEndLine = P),
							(this.dimension = k),
							(this.domNode = document.createElement("div")),
							(this.domNode.style.width = `${k}px`),
							(this.domNode.style.height = `${k}px`),
							(this.domNode.className = C.ThemeIcon.asClassName(
								I ? g.$TNb : g.$SNb,
							));
					}
					setVisible(I) {
						(this.domNode.style.cursor = I ? "pointer" : "default"),
							(this.domNode.style.opacity = I ? "1" : "0");
					}
				}
			},
		),
		