import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/arrays.js';
import '../../../../../base/common/strings.js';
import '../../../../../editor/browser/editorBrowser.js';
import '../../../../../editor/common/languages/language.js';
import '../../../../../editor/contrib/snippet/browser/snippetController2.js';
import '../../../../../nls.js';
import '../../../../../platform/quickinput/common/quickInput.js';
import './abstractSnippetsActions.js';
import '../snippets.js';
import '../../../../services/editor/common/editorService.js';
define(
			de[1289],
			he([1, 0, 24, 37, 56, 61, 254, 4, 63, 994, 510, 18]),
			function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/,
 i /*strings*/,
 w /*editorBrowser*/,
 E /*language*/,
 C /*snippetController2*/,
 d /*nls*/,
 m /*quickInput*/,
 r /*abstractSnippetsActions*/,
 u /*snippets*/,
 a /*editorService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$HFc = void 0);
				class h extends r.$FFc {
					static {
						this.Id = "workbench.action.populateFileFromSnippet";
					}
					constructor() {
						super({
							id: h.Id,
							title: (0, d.localize2)(9449, "Fill File with Snippet"),
							f1: !0,
						});
					}
					async run(n) {
						const g = n.get(u.$gYb),
							p = n.get(m.$DJ),
							o = n.get(a.$IY),
							f = n.get(E.$nM),
							b = (0, w.$btb)(o.activeTextEditorControl);
						if (!b || !b.hasModel()) return;
						const s = await g.getSnippets(void 0, {
							fileTemplateSnippets: !0,
							noRecencySort: !0,
							includeNoPrefixSnippets: !0,
						});
						if (s.length === 0) return;
						const l = await this.c(p, f, s);
						l &&
							b.hasModel() &&
							(C.$aDb
								.get(b)
								?.apply([
									{
										range: b.getModel().getFullModelRange(),
										template: l.snippet.body,
									},
								]),
							b.getModel().setLanguage(f.createById(l.langId), h.Id),
							b.focus());
					}
					async c(n, g, p) {
						const o = [];
						for (const l of p)
							if ((0, t.$Ob)(l.scopes)) o.push({ langId: "", snippet: l });
							else for (const y of l.scopes) o.push({ langId: y, snippet: l });
						const f = [],
							b = (0, t.$Db)(o, (l, y) => (0, i.$Ff)(l.langId, y.langId));
						for (const l of b) {
							let y = !0;
							for (const $ of l)
								y &&
									(f.push({
										type: "separator",
										label: g.getLanguageName($.langId) ?? $.langId,
									}),
									(y = !1)),
									f.push({
										snippet: $,
										label: $.snippet.prefix || $.snippet.name,
										detail: $.snippet.description,
									});
						}
						return (
							await n.pick(f, {
								placeHolder: (0, d.localize)(9448, null),
								matchOnDetail: !0,
							})
						)?.snippet;
					}
				}
				e.$HFc = h;
			},
		),
		