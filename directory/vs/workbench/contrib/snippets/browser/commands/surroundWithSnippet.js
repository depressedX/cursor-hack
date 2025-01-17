import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../editor/common/editorContextKeys.js';
import '../../../../../editor/contrib/snippet/browser/snippetController2.js';
import '../../../../../platform/clipboard/common/clipboardService.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import './abstractSnippetsActions.js';
import '../snippetPicker.js';
import '../snippets.js';
import '../../../../../nls.js';
define(
			de[1754],
			he([1, 0, 71, 254, 121, 8, 5, 994, 1753, 510, 4]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$6Xc = void 0),
					(e.$5Xc = a);
				async function a(c, n, g, p) {
					const { lineNumber: o, column: f } = g;
					n.tokenization.tokenizeIfCheap(o);
					const b = n.getLanguageIdAtPosition(o, f);
					return (
						await c.getSnippets(b, {
							includeNoPrefixSnippets: !0,
							includeDisabledSnippets: p,
						})
					).filter((l) => l.usesSelection);
				}
				class h extends d.$GFc {
					static {
						this.options = {
							id: "editor.action.surroundWithSnippet",
							title: (0, u.localize2)(9451, "Surround with Snippet..."),
						};
					}
					constructor() {
						super({
							...h.options,
							precondition: E.$Kj.and(
								t.EditorContextKeys.writable,
								t.EditorContextKeys.hasNonEmptySelection,
							),
							f1: !0,
						});
					}
					async runEditorCommand(n, g) {
						if (!g.hasModel()) return;
						const p = n.get(C.$Li),
							o = n.get(r.$gYb),
							f = n.get(w.$Vxb),
							b = await a(o, g.getModel(), g.getPosition(), !0);
						if (!b.length) return;
						const s = await p.invokeFunction(m.$3Xc, b);
						if (!s) return;
						let l;
						s.needsClipboard && (l = await f.readText()),
							g.focus(),
							i.$aDb.get(g)?.insert(s.codeSnippet, { clipboardText: l }),
							o.updateUsageTimestamp(s);
					}
				}
				e.$6Xc = h;
			},
		),
		