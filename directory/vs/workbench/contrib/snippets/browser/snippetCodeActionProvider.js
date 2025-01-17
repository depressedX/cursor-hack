import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/common/core/selection.js';
import '../../../../editor/common/services/languageFeatures.js';
import '../../../../editor/contrib/codeAction/common/types.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/instantiation/common/instantiation.js';
import './commands/fileTemplateSnippets.js';
import './commands/surroundWithSnippet.js';
import './snippets.js';
define(
			de[3268],
			he([1, 0, 3, 104, 69, 291, 4, 10, 5, 1289, 1754, 510]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				var h, c;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$7Xc = void 0);
				let n = class {
					static {
						h = this;
					}
					static {
						this.a = 4;
					}
					static {
						this.b = {
							kind: E.$GAb.SurroundWith.value,
							title: (0, C.localize)(9452, null),
							command: {
								id: u.$6Xc.options.id,
								title: u.$6Xc.options.title.value,
							},
						};
					}
					constructor(b) {
						this.c = b;
					}
					async provideCodeActions(b, s) {
						if (s.isEmpty()) return;
						const l = i.$kL.isISelection(s)
								? s.getPosition()
								: s.getStartPosition(),
							y = await (0, u.$5Xc)(this.c, b, l, !1);
						if (!y.length) return;
						const $ = [];
						for (const v of y) {
							if ($.length >= h.a) {
								$.push(h.b);
								break;
							}
							$.push({
								title: (0, C.localize)(9453, null, v.name),
								kind: E.$GAb.SurroundWith.value,
								edit: p(b, s, v),
							});
						}
						return { actions: $, dispose() {} };
					}
				};
				n = h = Ne([j(0, a.$gYb)], n);
				let g = class {
					static {
						c = this;
					}
					static {
						this.a = 4;
					}
					static {
						this.b = {
							title: (0, C.localize)(9454, null),
							kind: E.$GAb.SurroundWith.value,
							command: { id: r.$HFc.Id, title: "" },
						};
					}
					constructor(b) {
						(this.c = b),
							(this.providedCodeActionKinds = [E.$GAb.SurroundWith.value]);
					}
					async provideCodeActions(b) {
						if (b.getValueLength() !== 0) return;
						const s = await this.c.getSnippets(b.getLanguageId(), {
								fileTemplateSnippets: !0,
								includeNoPrefixSnippets: !0,
							}),
							l = [];
						for (const y of s) {
							if (l.length >= c.a) {
								l.push(c.b);
								break;
							}
							l.push({
								title: (0, C.localize)(9455, null, y.name),
								kind: E.$GAb.SurroundWith.value,
								edit: p(b, b.getFullModelRange(), y),
							});
						}
						return { actions: l, dispose() {} };
					}
				};
				g = c = Ne([j(0, a.$gYb)], g);
				function p(f, b, s) {
					return {
						edits: [
							{
								versionId: f.getVersionId(),
								resource: f.uri,
								textEdit: { range: b, text: s.body, insertAsSnippet: !0 },
							},
						],
					};
				}
				let o = class {
					constructor(b, s, l) {
						this.a = new t.$Zc();
						const y = "editor.snippets.codeActions.enabled",
							$ = new t.$Zc(),
							v = () => {
								$.clear(),
									l.getValue(y) &&
										($.add(
											s.codeActionProvider.register("*", b.createInstance(n)),
										),
										$.add(
											s.codeActionProvider.register("*", b.createInstance(g)),
										));
							};
						v(),
							this.a.add(
								l.onDidChangeConfiguration(
									(S) => S.affectsConfiguration(y) && v(),
								),
							),
							this.a.add($);
					}
					dispose() {
						this.a.dispose();
					}
				};
				(e.$7Xc = o),
					(e.$7Xc = o = Ne([j(0, m.$Li), j(1, w.$k3), j(2, d.$gj)], o));
			},
		),
		