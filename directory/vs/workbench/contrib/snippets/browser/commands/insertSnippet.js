import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../editor/common/editorContextKeys.js';
import '../../../../../editor/common/languages/language.js';
import '../../../../../editor/contrib/snippet/browser/snippetController2.js';
import '../../../../../nls.js';
import '../../../../../platform/clipboard/common/clipboardService.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import './abstractSnippetsActions.js';
import '../snippetPicker.js';
import '../snippets.js';
import '../snippetsFile.js';
define(
			de[3137],
			he([1, 0, 71, 61, 254, 4, 121, 5, 994, 1753, 510, 805]),
			function (ce /*require*/,
 e /*exports*/,
 t /*editorContextKeys*/,
 i /*language*/,
 w /*snippetController2*/,
 E /*nls*/,
 C /*clipboardService*/,
 d /*instantiation*/,
 m /*abstractSnippetsActions*/,
 r /*snippetPicker*/,
 u /*snippets*/,
 a /*snippetsFile*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$4Xc = void 0),
					(E = mt(E));
				class h {
					static fromUser(g) {
						if (!g || typeof g != "object") return h.a;
						let { snippet: p, name: o, langId: f } = g;
						return (
							typeof p != "string" && (p = void 0),
							typeof o != "string" && (o = void 0),
							typeof f != "string" && (f = void 0),
							new h(p, o, f)
						);
					}
					static {
						this.a = new h(void 0, void 0, void 0);
					}
					constructor(g, p, o) {
						(this.snippet = g), (this.name = p), (this.langId = o);
					}
				}
				class c extends m.$GFc {
					constructor() {
						super({
							id: "editor.action.insertSnippet",
							title: E.localize2(9450, "Insert Snippet"),
							f1: !0,
							precondition: t.EditorContextKeys.writable,
							metadata: {
								description: "Insert Snippet",
								args: [
									{
										name: "args",
										schema: {
											type: "object",
											properties: {
												snippet: { type: "string" },
												langId: { type: "string" },
												name: { type: "string" },
											},
										},
									},
								],
							},
						});
					}
					async runEditorCommand(g, p, o) {
						const f = g.get(i.$nM),
							b = g.get(u.$gYb);
						if (!p.hasModel()) return;
						const s = g.get(C.$Vxb),
							l = g.get(d.$Li),
							y = await new Promise((v, S) => {
								const { lineNumber: I, column: T } = p.getPosition(),
									{ snippet: P, name: k, langId: L } = h.fromUser(o);
								if (P)
									return v(
										new a.$eYb(
											!1,
											[],
											"",
											"",
											"",
											P,
											"",
											a.SnippetSource.User,
											`random/${Math.random()}`,
										),
									);
								let D;
								if (L) {
									if (!f.isRegisteredLanguageId(L)) return v(void 0);
									D = L;
								} else
									p.getModel().tokenization.tokenizeIfCheap(I),
										(D = p.getModel().getLanguageIdAtPosition(I, T)),
										f.getLanguageName(D) || (D = p.getModel().getLanguageId());
								k
									? b
											.getSnippets(D, { includeNoPrefixSnippets: !0 })
											.then((M) => M.find((N) => N.name === k))
											.then(v, S)
									: v(l.invokeFunction(r.$3Xc, D));
							});
						if (!y) return;
						let $;
						y.needsClipboard && ($ = await s.readText()),
							p.focus(),
							w.$aDb.get(p)?.insert(y.codeSnippet, { clipboardText: $ }),
							b.updateUsageTimestamp(y);
					}
				}
				e.$4Xc = c;
			},
		)
