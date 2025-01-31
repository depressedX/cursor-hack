import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/markdownRenderer.js';
import '../../../../../base/browser/trustedTypes.js';
import '../../../../../base/common/errors.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/lifecycle.js';
import '../../../config/domFontInfo.js';
import '../../../../common/config/editorOptions.js';
import '../../../../common/languages/language.js';
import '../../../../common/languages/modesRegistry.js';
import '../../../../common/languages/textToHtmlTokenizer.js';
import '../../../../../platform/opener/common/opener.js';
import '../../../../../css!vs/editor/browser/widget/markdownRenderer/browser/renderedMarkdown.js';
define(
			de[251],
			he([1, 0, 267, 432, 29, 6, 3, 321, 38, 61, 172, 597, 41, 2282]),
			function (ce /*require*/,
 e /*exports*/,
 t /*markdownRenderer*/,
 i /*trustedTypes*/,
 w /*errors*/,
 E /*event*/,
 C /*lifecycle*/,
 d /*domFontInfo*/,
 m /*editorOptions*/,
 r /*language*/,
 u /*modesRegistry*/,
 a /*textToHtmlTokenizer*/,
 h /*opener*/) {
				"use strict";
				var c;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Qzb = void 0),
					(e.$Rzb = g);
				let n = class {
					static {
						c = this;
					}
					static {
						this._ttpTokenizer = (0, i.$bjb)("tokenizeToString", {
							createHTML(f) {
								return f;
							},
						});
					}
					constructor(f, b, s) {
						(this.b = f),
							(this.c = b),
							(this.d = s),
							(this.a = new E.$re()),
							(this.onDidRenderAsync = this.a.event);
					}
					dispose() {
						this.a.dispose();
					}
					render(f, b, s) {
						if (!f)
							return {
								element: document.createElement("span"),
								dispose: () => {},
							};
						const l = new C.$Zc(),
							y = l.add((0, t.$Uib)(f, { ...this.f(f, l), ...b }, s));
						return (
							y.element.classList.add("rendered-markdown"),
							{ element: y.element, dispose: () => l.dispose() }
						);
					}
					f(f, b) {
						return {
							codeBlockRenderer: async (s, l) => {
								let y;
								s
									? (y = this.c.getLanguageIdByLanguageName(s))
									: this.b.editor &&
										(y = this.b.editor.getModel()?.getLanguageId()),
									y || (y = u.$0M);
								const $ = await (0, a.$cwb)(this.c, l, y),
									v = document.createElement("span");
								if (
									((v.innerHTML = c._ttpTokenizer?.createHTML($) ?? $),
									this.b.editor)
								) {
									const S = this.b.editor.getOption(m.EditorOption.fontInfo);
									(0, d.$jsb)(v, S);
								} else
									this.b.codeBlockFontFamily &&
										(v.style.fontFamily = this.b.codeBlockFontFamily);
								return (
									this.b.codeBlockFontSize !== void 0 &&
										(v.style.fontSize = this.b.codeBlockFontSize),
									v
								);
							},
							asyncRenderCallback: () => this.a.fire(),
							actionHandler: {
								callback: (s) => g(this.d, s, f.isTrusted),
								disposables: b,
							},
						};
					}
				};
				(e.$Qzb = n), (e.$Qzb = n = c = Ne([j(1, r.$nM), j(2, h.$7rb)], n));
				async function g(o, f, b) {
					try {
						return await o.open(f, {
							fromUserGesture: !0,
							allowContributedOpeners: !0,
							allowCommands: p(b),
						});
					} catch (s) {
						return (0, w.$4)(s), !1;
					}
				}
				function p(o) {
					return o === !0
						? !0
						: o && Array.isArray(o.enabledCommands)
							? o.enabledCommands
							: !1;
				}
			},
		)
