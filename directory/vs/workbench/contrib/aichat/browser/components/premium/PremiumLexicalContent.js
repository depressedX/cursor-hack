import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/lexical/lexical-solid/LexicalComposer.js';
import '../../../../../../../external/lexical/lexical-solid/LexicalComposerContext.js';
import '../../../../../../../external/lexical/lexical-solid/LexicalContentEditable.js';
import '../../../../../../../external/lexical/lexical-solid/LexicalErrorBoundary.js';
import '../../../../../../../external/lexical/lexical-solid/LexicalPlainTextPlugin.js';
import '../../../../../../../external/lexical/lexical/lexical.js';
import '../../../../../../../external/solid/solid.js';
import '../../chatData.js';
import '../../../../ui/browser/aiInput/aiInput2.js';
define(
			de[1994],
			he([1, 0, 2, 2, 2, 1063, 181, 1362, 1106, 1160, 158, 13, 140, 450]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$_ac = void 0),
					(e.$$ac = p);
				const n = (0, t.template)(
						'<div><div class="aislash-editor-placeholder">Empty message...',
					),
					g = (0, t.template)("<div>");
				function p(b) {
					const { chatDataService: s } = (0, h.$zgc)(),
						l = {
							...(0, c.$Rac)(),
							namespace: "chat-lexical-display" + b.id,
							onError: (I) => {
								console.error(I);
							},
							editable: !1,
						},
						[y, $] = (0, a.createSignal)(),
						v = () =>
							(0, w.createComponent)(d.ContentEditable, {
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
					function S() {
						return (() => {
							const I = n(),
								T = I.firstChild;
							return (
								I.style.setProperty("grid-area", "1 / 2 / 1 / 2"),
								T.style.setProperty("position", "relative"),
								T.style.setProperty("top", "0"),
								T.style.setProperty("left", "-100%"),
								T.style.setProperty("pointer-events", "none"),
								T.style.setProperty("user-select", "none"),
								T.style.setProperty(
									"color",
									"var(--vscode-input-placeholderForeground)",
								),
								T.style.setProperty("font-style", "italic"),
								I
							);
						})();
					}
					return (() => {
						const I = g();
						return (
							I.style.setProperty("display", "grid"),
							I.style.setProperty("position", "relative"),
							I.style.setProperty("grid-template-rows", "1"),
							I.style.setProperty("grid-template-columns", "1fr 1fr"),
							I.style.setProperty("width", "200%"),
							(0, i.insert)(
								I,
								(0, w.createComponent)(E.LexicalComposer, {
									initialConfig: l,
									get children() {
										return [
											(0, w.createComponent)(o, { setEditor: $ }),
											(0, w.createComponent)(r.PlainTextPlugin, {
												get contentEditable() {
													return v();
												},
												get placeholder() {
													return (0, w.createComponent)(S, {});
												},
												errorBoundary: m.LexicalErrorBoundary,
											}),
											(0, w.createComponent)(e.$_ac, {
												get text() {
													return b.text;
												},
												force: !0,
											}),
										];
									},
								}),
							),
							I
						);
					})();
				}
				const o = (b) => {
						const [s] = (0, C.useLexicalComposerContext)();
						return (
							(0, a.createEffect)(() => {
								b.setEditor && b.setEditor(s);
							}),
							null
						);
					},
					f = (b) => {
						const [s] = (0, C.useLexicalComposerContext)(),
							l = ($, v) => {
								const S = b.setForce;
								s.update(() => {
									const I = (0, u.$getRoot)();
									if (
										!I.getChildren().every((D) =>
											D instanceof u.ParagraphNode
												? D.getTextContent() === ""
												: !1,
										) &&
										!v
									)
										return;
									if ((v && S?.(!1), $.startsWith("{")))
										try {
											s.setEditorState(s.parseEditorState($));
											return;
										} catch (D) {
											console.error(D);
										}
									const k = (0, u.$createParagraphNode)(),
										L = (0, u.$createTextNode)($);
									k.append(L);
									for (const D of I.getChildren()) D.remove();
									I.append(k), I.selectEnd();
								});
							},
							y = ($) => {
								if (!($ === void 0 || $ === "")) {
									if ($.startsWith("{"))
										try {
											s.setEditorState(s.parseEditorState($));
											return;
										} catch (v) {
											console.error(v);
										}
									l($);
								}
							};
						return (
							(0, a.createEffect)(() => {
								b.force && l(b.richText ?? b.text, b.force);
							}),
							[]
						);
					};
				e.$_ac = f;
			},
		),
		