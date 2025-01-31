import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/lexical/lexical-solid/LexicalComposer.js';
import '../../../../../../external/lexical/lexical-solid/LexicalComposerContext.js';
import '../../../../../../external/lexical/lexical-solid/LexicalContentEditable.js';
import '../../../../../../external/lexical/lexical-solid/LexicalErrorBoundary.js';
import '../../../../../../external/lexical/lexical-solid/LexicalPlainTextPlugin.js';
import '../../../../../../external/lexical/lexical/lexical.js';
import '../../../../../../external/solid/solid.js';
import '../../../ui/browser/aiInput/aiInput2.js';
define(
			de[4318],
			he([1, 0, 2, 1063, 181, 1362, 1106, 1160, 158, 13, 450]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*LexicalComposer*/,
 w /*LexicalComposerContext*/,
 E /*LexicalContentEditable*/,
 C /*LexicalErrorBoundary*/,
 d /*LexicalPlainTextPlugin*/,
 m /*lexical*/,
 r /*solid*/,
 u /*aiInput2*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerLexicalRenderer = a);
				function a(c) {
					const n = {
							...(0, u.$Rac)(),
							namespace: "composer-lexical-display",
							onError: (p) => {
								console.error(p);
							},
							editable: !1,
						},
						g = () =>
							(0, t.createComponent)(E.ContentEditable, {
								class: "aislash-editor-input-readonly",
								style: {
									resize: "none",
									"grid-area": "1 / 1 / 1 / 1",
									overflow: "hidden",
									"line-height": "inherit",
									"font-family": "inherit",
									"font-size": "inherit",
									color: "var(--vscode-input-foreground)",
									"background-color": "transparent",
									display: "block",
									outline: "none",
									"scrollbar-width": "none",
									"box-sizing": "border-box",
									border: "none",
									"word-wrap": "break-word",
									"word-break": "break-word",
									padding: "0px",
								},
								turnOffCmdZ: !0,
								spellCheck: !1,
								autoCapitalize: "off",
								readOnly: !0,
							});
					return (0, t.createComponent)(i.LexicalComposer, {
						initialConfig: n,
						get children() {
							return [
								(0, t.createComponent)(d.PlainTextPlugin, {
									get contentEditable() {
										return g();
									},
									get placeholder() {
										return [];
									},
									errorBoundary: C.LexicalErrorBoundary,
								}),
								(0, t.createComponent)(h, {
									get text() {
										return c.text;
									},
								}),
							];
						},
					});
				}
				const h = (c) => {
					const [n] = (0, w.useLexicalComposerContext)(),
						g = (o) => {
							n.update(() => {
								const f = (0, m.$getRoot)();
								if (
									!f
										.getChildren()
										.every(($) =>
											$ instanceof m.ParagraphNode
												? $.getTextContent() === ""
												: !1,
										)
								)
									return;
								if (o.startsWith("{"))
									try {
										n.setEditorState(n.parseEditorState(o));
										return;
									} catch ($) {
										console.error($);
									}
								const l = (0, m.$createParagraphNode)(),
									y = (0, m.$createTextNode)(o);
								l.append(y);
								for (const $ of f.getChildren()) $.remove();
								f.append(l), f.selectEnd();
							});
						},
						p = (o) => {
							if (!(o === void 0 || o === "")) {
								if (o.startsWith("{"))
									try {
										n.setEditorState(n.parseEditorState(o));
										return;
									} catch (f) {
										console.error(f);
									}
								g(o);
							}
						};
					return (
						(0, r.createEffect)(() => {
							p(c.text);
						}),
						[]
					);
				};
			},
		)
