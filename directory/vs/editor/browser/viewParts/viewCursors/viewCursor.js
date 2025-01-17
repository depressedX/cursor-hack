import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/fastDomNode.js';
import '../../../../base/common/strings.js';
import '../../config/domFontInfo.js';
import '../../../common/config/editorOptions.js';
import '../../../common/core/position.js';
import '../../../common/core/range.js';
import '../../../../base/browser/ui/mouseCursor/mouseCursor.js';
define(
			de[2720],
			he([1, 0, 7, 194, 37, 321, 38, 48, 17, 651]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Tub = e.CursorPlurality = void 0),
					(t = mt(t)),
					(w = mt(w));
				class u {
					constructor(n, g, p, o, f, b, s) {
						(this.top = n),
							(this.left = g),
							(this.paddingLeft = p),
							(this.width = o),
							(this.height = f),
							(this.textContent = b),
							(this.textContentClassName = s);
					}
				}
				var a;
				(function (c) {
					(c[(c.Single = 0)] = "Single"),
						(c[(c.MultiPrimary = 1)] = "MultiPrimary"),
						(c[(c.MultiSecondary = 2)] = "MultiSecondary");
				})(a || (e.CursorPlurality = a = {}));
				class h {
					constructor(n, g) {
						this.a = n;
						const p = this.a.configuration.options,
							o = p.get(C.EditorOption.fontInfo);
						(this.c = p.get(C.EditorOption.cursorStyle)),
							(this.f = p.get(C.EditorOption.lineHeight)),
							(this.g = o.typicalHalfwidthCharacterWidth),
							(this.d = Math.min(p.get(C.EditorOption.cursorWidth), this.g)),
							(this.h = !0),
							(this.b = (0, i.$Shb)(document.createElement("div"))),
							this.b.setClassName(`cursor ${r.$0ob}`),
							this.b.setHeight(this.f),
							this.b.setTop(0),
							this.b.setLeft(0),
							(0, E.$jsb)(this.b, o),
							this.b.setDisplay("none"),
							(this.i = new d.$hL(1, 1)),
							(this.j = ""),
							this.setPlurality(g),
							(this.k = ""),
							(this.l = null);
					}
					getDomNode() {
						return this.b;
					}
					getPosition() {
						return this.i;
					}
					setPlurality(n) {
						switch (n) {
							default:
							case a.Single:
								this.j = "";
								break;
							case a.MultiPrimary:
								this.j = "cursor-primary";
								break;
							case a.MultiSecondary:
								this.j = "cursor-secondary";
								break;
						}
					}
					show() {
						this.h || (this.b.setVisibility("inherit"), (this.h = !0));
					}
					hide() {
						this.h && (this.b.setVisibility("hidden"), (this.h = !1));
					}
					onConfigurationChanged(n) {
						const g = this.a.configuration.options,
							p = g.get(C.EditorOption.fontInfo);
						return (
							(this.c = g.get(C.EditorOption.cursorStyle)),
							(this.f = g.get(C.EditorOption.lineHeight)),
							(this.g = p.typicalHalfwidthCharacterWidth),
							(this.d = Math.min(g.get(C.EditorOption.cursorWidth), this.g)),
							(0, E.$jsb)(this.b, p),
							!0
						);
					}
					onCursorPositionChanged(n, g) {
						return (
							g
								? (this.b.domNode.style.transitionProperty = "none")
								: (this.b.domNode.style.transitionProperty = ""),
							(this.i = n),
							!0
						);
					}
					m() {
						const { lineNumber: n, column: g } = this.i,
							p = this.a.viewModel.getLineContent(n),
							[o, f] = w.$Yf(p, g - 1);
						return [new d.$hL(n, o + 1), p.substring(o, f)];
					}
					n(n) {
						let g = "",
							p = "";
						const [o, f] = this.m();
						if (
							this.c === C.TextEditorCursorStyle.Line ||
							this.c === C.TextEditorCursorStyle.LineThin
						) {
							const S = n.visibleRangeForPosition(o);
							if (!S || S.outsideRenderedLine) return null;
							const I = t.getWindow(this.b.domNode);
							let T;
							this.c === C.TextEditorCursorStyle.Line
								? ((T = t.$qhb(I, this.d > 0 ? this.d : 2)),
									T > 2 && ((g = f), (p = this.o(o))))
								: (T = t.$qhb(I, 1));
							let P = S.left,
								k = 0;
							T >= 2 && P >= 1 && ((k = 1), (P -= k));
							const L =
								n.getVerticalOffsetForLineNumber(o.lineNumber) -
								n.bigNumbersDelta;
							return new u(L, P, k, T, this.f, g, p);
						}
						const b = n.linesVisibleRangesForRange(
							new m.$iL(
								o.lineNumber,
								o.column,
								o.lineNumber,
								o.column + f.length,
							),
							!1,
						);
						if (!b || b.length === 0) return null;
						const s = b[0];
						if (s.outsideRenderedLine || s.ranges.length === 0) return null;
						const l = s.ranges[0],
							y = f === "	" ? this.g : l.width < 1 ? this.g : l.width;
						this.c === C.TextEditorCursorStyle.Block &&
							((g = f), (p = this.o(o)));
						let $ =
								n.getVerticalOffsetForLineNumber(o.lineNumber) -
								n.bigNumbersDelta,
							v = this.f;
						return (
							(this.c === C.TextEditorCursorStyle.Underline ||
								this.c === C.TextEditorCursorStyle.UnderlineThin) &&
								(($ += this.f - 2), (v = 2)),
							new u($, l.left, 0, y, v, g, p)
						);
					}
					o(n) {
						const g = this.a.viewModel.getViewLineData(n.lineNumber),
							p = g.tokens.findTokenIndexAtOffset(n.column - 1);
						return g.tokens.getClassName(p);
					}
					prepareRender(n) {
						this.l = this.n(n);
					}
					render(n) {
						return this.l
							? (this.k !== this.l.textContent &&
									((this.k = this.l.textContent),
									(this.b.domNode.textContent = this.k)),
								this.b.setClassName(
									`cursor ${this.j} ${r.$0ob} ${this.l.textContentClassName}`,
								),
								this.b.setDisplay("block"),
								this.b.setTop(this.l.top),
								this.b.setLeft(this.l.left),
								this.b.setPaddingLeft(this.l.paddingLeft),
								this.b.setWidth(this.l.width),
								this.b.setLineHeight(this.l.height),
								this.b.setHeight(this.l.height),
								{
									domNode: this.b.domNode,
									position: this.i,
									contentLeft: this.l.left,
									height: this.l.height,
									width: 2,
								})
							: (this.b.setDisplay("none"), null);
					}
				}
				e.$Tub = h;
			},
		),
		