import '../../../require.js';
import '../../../exports.js';
import '../../solid/web.js';
import '../../solid/web.js';
import './LexicalComposerContext.js';
import '../lexical/api.js';
import '../../solid/solid.js';
import '../../../vs/workbench/contrib/controlCommon/browser/solid.js';
define(
			de[1063],
			he([1, 0, 2, 2, 181, 164, 13, 36]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.LexicalComposer = r),
					(e.initializeEditor = u);
				const m = { tag: "history-merge" };
				function r(a) {
					const {
						editable: h,
						theme: c,
						namespace: n,
						nodes: g,
						onError: p,
						editorState: o,
					} = a.initialConfig;
					if ((0, C.useContext)(w.LexicalComposerContext) != null)
						return (0, i.memo)(() => a.children);
					const b = (0, w.createLexicalComposerContext)(null, c),
						s = (0, E.createEditor)({
							editable: h,
							namespace: n,
							nodes: g,
							onError: (l) => p(l, s),
							theme: c,
						});
					if ((u(s, o), a.reducerRegistration)) {
						const y = (0, d.$odc)().lexicalReducerService.registerEditor({
							editor: s,
							id: a.reducerRegistration.id,
							type: a.reducerRegistration.type,
						});
						y === !1 &&
							console.error(
								`Failed to register editor, id: ${a.reducerRegistration.id}, type: ${a.reducerRegistration.type}`,
							),
							(0, C.onCleanup)(() => {
								y && y();
							});
					}
					return (
						(0, C.onMount)(() => {
							const l = a.initialConfig.editable;
							s.setEditable(l !== void 0 ? l : !0);
						}),
						(0, t.createComponent)(w.LexicalComposerContext.Provider, {
							value: [s, b],
							get children() {
								return a.children;
							},
						})
					);
				}
				function u(a, h) {
					if (h !== null) {
						if (h === void 0)
							a.update(() => {
								const c = (0, E.$getRoot)();
								if (c.isEmpty()) {
									const n = (0, E.$createParagraphNode)();
									c.append(n);
									const g = typeof window < "u" ? document.activeElement : null;
									((0, E.$getSelection)() !== null ||
										(g !== null && g === a.getRootElement())) &&
										n.select();
								}
							}, m);
						else if (h !== null)
							switch (typeof h) {
								case "string": {
									const c = a.parseEditorState(h);
									a.setEditorState(c, m);
									break;
								}
								case "object": {
									a.setEditorState(h, m);
									break;
								}
								case "function": {
									a.update(() => {
										(0, E.$getRoot)().isEmpty() && h(a);
									}, m);
									break;
								}
							}
					}
				}
			},
		),
		