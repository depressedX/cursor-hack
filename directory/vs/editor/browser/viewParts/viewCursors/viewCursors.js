import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/fastDomNode.js';
import '../../../../base/common/async.js';
import '../../view/viewPart.js';
import './viewCursor.js';
import '../../../common/config/editorOptions.js';
import '../../../common/core/editorColorRegistry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../platform/theme/common/theme.js';
import '../../../common/cursorEvents.js';
import '../../../../base/browser/dom.js';
import '../../../../css!vs/editor/browser/viewParts/viewCursors/viewCursors.js';
define(
			de[2851],
			he([1, 0, 194, 15, 303, 2720, 38, 307, 35, 212, 248, 7, 2277]),
			function (ce /*require*/,
 e /*exports*/,
 t /*fastDomNode*/,
 i /*async*/,
 w /*viewPart*/,
 E /*viewCursor*/,
 C /*editorOptions*/,
 d /*editorColorRegistry*/,
 m /*themeService*/,
 r /*theme*/,
 u /*cursorEvents*/,
 a /*dom*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Lvb = void 0);
				class h extends w.$yub {
					static {
						this.BLINK_INTERVAL = 500;
					}
					constructor(n) {
						super(n);
						const g = this._context.configuration.options;
						(this.a = g.get(C.EditorOption.readOnly)),
							(this.b = g.get(C.EditorOption.cursorBlinking)),
							(this.c = g.get(C.EditorOption.cursorStyle)),
							(this.g = g.get(C.EditorOption.cursorSmoothCaretAnimation)),
							(this.j = !0),
							(this.m = !1),
							(this.n = !1),
							(this.y = new E.$Tub(this._context, E.CursorPlurality.Single)),
							(this.z = []),
							(this.C = []),
							(this.q = (0, t.$Shb)(document.createElement("div"))),
							this.q.setAttribute("role", "presentation"),
							this.q.setAttribute("aria-hidden", "true"),
							this.I(),
							this.q.appendChild(this.y.getDomNode()),
							(this.s = new i.$Wh()),
							(this.t = new a.$jgb()),
							(this.u = !1),
							(this.w = !1),
							this.H();
					}
					dispose() {
						super.dispose(), this.s.dispose(), this.t.dispose();
					}
					getDomNode() {
						return this.q;
					}
					onCompositionStart(n) {
						return (this.m = !0), this.H(), !0;
					}
					onCompositionEnd(n) {
						return (this.m = !1), this.H(), !0;
					}
					onConfigurationChanged(n) {
						const g = this._context.configuration.options;
						(this.a = g.get(C.EditorOption.readOnly)),
							(this.b = g.get(C.EditorOption.cursorBlinking)),
							(this.c = g.get(C.EditorOption.cursorStyle)),
							(this.g = g.get(C.EditorOption.cursorSmoothCaretAnimation)),
							this.H(),
							this.I(),
							this.y.onConfigurationChanged(n);
						for (let p = 0, o = this.z.length; p < o; p++)
							this.z[p].onConfigurationChanged(n);
						return !0;
					}
					F(n, g, p) {
						const o =
							this.z.length !== g.length ||
							(this.g === "explicit" && p !== u.CursorChangeReason.Explicit);
						if (
							(this.y.setPlurality(
								g.length
									? E.CursorPlurality.MultiPrimary
									: E.CursorPlurality.Single,
							),
							this.y.onCursorPositionChanged(n, o),
							this.H(),
							this.z.length < g.length)
						) {
							const f = g.length - this.z.length;
							for (let b = 0; b < f; b++) {
								const s = new E.$Tub(
									this._context,
									E.CursorPlurality.MultiSecondary,
								);
								this.q.domNode.insertBefore(
									s.getDomNode().domNode,
									this.y.getDomNode().domNode.nextSibling,
								),
									this.z.push(s);
							}
						} else if (this.z.length > g.length) {
							const f = this.z.length - g.length;
							for (let b = 0; b < f; b++)
								this.q.removeChild(this.z[0].getDomNode()), this.z.splice(0, 1);
						}
						for (let f = 0; f < g.length; f++)
							this.z[f].onCursorPositionChanged(g[f], o);
					}
					onCursorStateChanged(n) {
						const g = [];
						for (let o = 0, f = n.selections.length; o < f; o++)
							g[o] = n.selections[o].getPosition();
						this.F(g[0], g.slice(1), n.reason);
						const p = n.selections[0].isEmpty();
						return this.j !== p && ((this.j = p), this.I()), !0;
					}
					onDecorationsChanged(n) {
						return !0;
					}
					onFlushed(n) {
						return !0;
					}
					onFocusChanged(n) {
						return (this.w = n.isFocused), this.H(), !1;
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
						return !0;
					}
					onTokensChanged(n) {
						const g = (p) => {
							for (let o = 0, f = n.ranges.length; o < f; o++)
								if (
									n.ranges[o].fromLineNumber <= p.lineNumber &&
									p.lineNumber <= n.ranges[o].toLineNumber
								)
									return !0;
							return !1;
						};
						if (g(this.y.getPosition())) return !0;
						for (const p of this.z) if (g(p.getPosition())) return !0;
						return !1;
					}
					onZonesChanged(n) {
						return !0;
					}
					G() {
						return this.m || !this.w
							? C.TextEditorCursorBlinkingStyle.Hidden
							: this.a
								? C.TextEditorCursorBlinkingStyle.Solid
								: this.b;
					}
					H() {
						this.s.cancel(), this.t.cancel();
						const n = this.G(),
							g = n === C.TextEditorCursorBlinkingStyle.Hidden,
							p = n === C.TextEditorCursorBlinkingStyle.Solid;
						g ? this.M() : this.L(),
							(this.u = !1),
							this.I(),
							!g &&
								!p &&
								(n === C.TextEditorCursorBlinkingStyle.Blink
									? this.t.cancelAndSet(
											() => {
												this.n ? this.M() : this.L();
											},
											h.BLINK_INTERVAL,
											(0, a.getWindow)(this.q.domNode),
										)
									: this.s.setIfNotSet(() => {
											(this.u = !0), this.I();
										}, h.BLINK_INTERVAL));
					}
					I() {
						this.q.setClassName(this.J());
					}
					J() {
						let n = "cursors-layer";
						switch ((this.j || (n += " has-selection"), this.c)) {
							case C.TextEditorCursorStyle.Line:
								n += " cursor-line-style";
								break;
							case C.TextEditorCursorStyle.Block:
								n += " cursor-block-style";
								break;
							case C.TextEditorCursorStyle.Underline:
								n += " cursor-underline-style";
								break;
							case C.TextEditorCursorStyle.LineThin:
								n += " cursor-line-thin-style";
								break;
							case C.TextEditorCursorStyle.BlockOutline:
								n += " cursor-block-outline-style";
								break;
							case C.TextEditorCursorStyle.UnderlineThin:
								n += " cursor-underline-thin-style";
								break;
							default:
								n += " cursor-line-style";
						}
						if (this.u)
							switch (this.G()) {
								case C.TextEditorCursorBlinkingStyle.Blink:
									n += " cursor-blink";
									break;
								case C.TextEditorCursorBlinkingStyle.Smooth:
									n += " cursor-smooth";
									break;
								case C.TextEditorCursorBlinkingStyle.Phase:
									n += " cursor-phase";
									break;
								case C.TextEditorCursorBlinkingStyle.Expand:
									n += " cursor-expand";
									break;
								case C.TextEditorCursorBlinkingStyle.Solid:
									n += " cursor-solid";
									break;
								default:
									n += " cursor-solid";
							}
						else n += " cursor-solid";
						return (
							(this.g === "on" || this.g === "explicit") &&
								(n += " cursor-smooth-caret-animation"),
							n
						);
					}
					L() {
						this.y.show();
						for (let n = 0, g = this.z.length; n < g; n++) this.z[n].show();
						this.n = !0;
					}
					M() {
						this.y.hide();
						for (let n = 0, g = this.z.length; n < g; n++) this.z[n].hide();
						this.n = !1;
					}
					prepareRender(n) {
						this.y.prepareRender(n);
						for (let g = 0, p = this.z.length; g < p; g++)
							this.z[g].prepareRender(n);
					}
					render(n) {
						const g = [];
						let p = 0;
						const o = this.y.render(n);
						o && (g[p++] = o);
						for (let f = 0, b = this.z.length; f < b; f++) {
							const s = this.z[f].render(n);
							s && (g[p++] = s);
						}
						this.C = g;
					}
					getLastRenderData() {
						return this.C;
					}
				}
				(e.$Lvb = h),
					(0, m.$oP)((c, n) => {
						const g = [
							{ class: ".cursor", foreground: d.$xT, background: d.$yT },
							{
								class: ".cursor-primary",
								foreground: d.$zT,
								background: d.$AT,
							},
							{
								class: ".cursor-secondary",
								foreground: d.$BT,
								background: d.$CT,
							},
						];
						for (const p of g) {
							const o = c.getColor(p.foreground);
							if (o) {
								let f = c.getColor(p.background);
								f || (f = o.opposite()),
									n.addRule(
										`.monaco-editor .cursors-layer ${p.class} { background-color: ${o}; border-color: ${o}; color: ${f}; }`,
									),
									(0, r.$gP)(c.type) &&
										n.addRule(
											`.monaco-editor .cursors-layer.has-selection ${p.class} { border-left: 1px solid ${f}; border-right: 1px solid ${f}; }`,
										);
							}
						}
					});
			},
		),
		