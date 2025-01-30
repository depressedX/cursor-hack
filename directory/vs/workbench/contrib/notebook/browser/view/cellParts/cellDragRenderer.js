import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/browser/dom.js';
import '../../../../../../base/browser/trustedTypes.js';
import '../../../../../../base/common/color.js';
import '../../../../../../base/common/platform.js';
import '../../../../../../editor/common/config/editorOptions.js';
import '../../../../../../editor/common/core/range.js';
import '../../../../../../editor/common/encodedTokenAttributes.js';
import '../../../../../../editor/common/languages.js';
import '../../../../../../editor/common/languages/textToHtmlTokenizer.js';
define(
			de[3096],
			he([1, 0, 7, 432, 97, 12, 38, 17, 171, 74, 597]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*trustedTypes*/,
 w /*color*/,
 E /*platform*/,
 C /*editorOptions*/,
 d /*range*/,
 m /*encodedTokenAttributes*/,
 r /*languages*/,
 u /*textToHtmlTokenizer*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$I3b = void 0),
					(t = mt(t)),
					(E = mt(E)),
					(r = mt(r));
				class a {
					static {
						this.a = (0, i.$bjb)("cellRendererEditorText", {
							createHTML(n) {
								return n;
							},
						});
					}
					getRichText(n, g) {
						const p = n.getModel();
						if (!p) return null;
						const o = this.d(),
							f = n.getOptions().get(C.EditorOption.fontInfo),
							b = "--notebook-editor-font-family",
							s = "--notebook-editor-font-size",
							l = "--notebook-editor-font-weight",
							y = `color: ${o[m.ColorId.DefaultForeground]};background-color: ${o[m.ColorId.DefaultBackground]};font-family: var(${b});font-weight: var(${l});font-size: var(${s});line-height: ${f.lineHeight}px;white-space: pre;`,
							$ = t.$("div", { style: y }),
							v = f.fontSize,
							S = f.fontWeight;
						$.style.setProperty(b, f.fontFamily),
							$.style.setProperty(s, `${v}px`),
							$.style.setProperty(l, S);
						const I = this.b(p, g, o);
						return ($.innerHTML = I), $;
					}
					b(n, g, p) {
						const o = g.startLineNumber,
							f = g.startColumn,
							b = g.endLineNumber,
							s = g.endColumn,
							l = n.getOptions().tabSize;
						let y = "";
						for (let $ = o; $ <= b; $++) {
							const v = n.tokenization.getLineTokens($),
								S = v.getLineContent(),
								I = $ === o ? f - 1 : 0,
								T = $ === b ? s - 1 : S.length;
							S === ""
								? (y += "<br>")
								: (y += (0, u.$dwb)(S, v.inflate(), p, I, T, l, E.$l));
						}
						return a.a?.createHTML(y) ?? y;
					}
					d() {
						const n = r.$lM.getColorMap(),
							g = ["#000000"];
						if (n)
							for (let p = 1, o = n.length; p < o; p++)
								g[p] = w.$UL.Format.CSS.formatHex(n[p]);
						return g;
					}
				}
				class h {
					getDragImage(n, g, p) {
						let o = this.a(n, g, p);
						return (
							o ||
								((o = document.createElement("div")),
								(o.textContent = "1 cell")),
							o
						);
					}
					a(n, g, p) {
						const o = n.container.cloneNode(!0);
						o.classList.forEach((s) => o.classList.remove(s)),
							o.classList.add(
								"cell-drag-image",
								"monaco-list-row",
								"focused",
								`${p}-cell-row`,
							);
						const f = o.querySelector(".cell-editor-container");
						if (!f) return null;
						const b = new a().getRichText(g, new d.$iL(1, 1, 1, 1e3));
						return b ? (t.$hhb(f, b), o) : null;
					}
				}
				e.$I3b = h;
			},
		),
		