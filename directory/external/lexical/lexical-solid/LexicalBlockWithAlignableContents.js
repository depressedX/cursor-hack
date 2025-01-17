import '../../../require.js';
import '../../../exports.js';
import '../../solid/web.js';
import '../../solid/web.js';
import '../../solid/web.js';
import '../../solid/web.js';
import '../../solid/web.js';
import '../lexical/api.js';
import './LexicalComposerContext.js';
import './LexicalDecoratorBlockNode.js';
import './useLexicalNodeSelection.js';
import '../lexical-utils/api.js';
import '../../solid/solid.js';
define(
			de[2600],
			he([1, 0, 2, 2, 2, 2, 2, 164, 181, 1563, 1158, 304, 13]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.BlockWithAlignableContents = n);
				const c = (0, t.template)("<div>");
				function n(g) {
					const [p] = (0, m.useLexicalComposerContext)(),
						[o, f, b] = (0, u.useLexicalNodeSelection)(g.nodeKey);
					let s;
					const l = (y) => (
						o() &&
							(0, d.$isNodeSelection)((0, d.$getSelection)()) &&
							(y.preventDefault(),
							p.update(() => {
								const $ = (0, d.$getNodeByKey)(g.nodeKey);
								$ !== null &&
									((0, d.$setSelection)($.selectPrevious()),
									(0, d.$isDecoratorNode)($) && $.remove(),
									f(!1));
							})),
						!1
					);
					return (
						(0, h.createEffect)(() => {
							(0, h.onCleanup)(
								(0, a.mergeRegister)(
									p.registerCommand(
										d.FORMAT_ELEMENT_COMMAND,
										(y) => {
											if (o()) {
												const $ = (0, d.$getSelection)();
												if ((0, d.$isNodeSelection)($)) {
													const v = (0, d.$getNodeByKey)(g.nodeKey);
													(0, r.$isDecoratorBlockNode)(v) && v.setFormat(y);
												} else if ((0, d.$isRangeSelection)($)) {
													const v = $.getNodes();
													for (const S of v)
														(0, r.$isDecoratorBlockNode)(S)
															? S.setFormat(y)
															: (0, a.$getNearestBlockElementAncestorOrThrow)(
																	S,
																).setFormat(y);
												}
												return !0;
											}
											return !1;
										},
										d.COMMAND_PRIORITY_LOW,
									),
									p.registerCommand(
										d.CLICK_COMMAND,
										(y) =>
											y.target === s
												? (y.preventDefault(), y.shiftKey || b(), f(!o), !0)
												: !1,
										d.COMMAND_PRIORITY_LOW,
									),
									p.registerCommand(
										d.KEY_DELETE_COMMAND,
										l,
										d.COMMAND_PRIORITY_LOW,
									),
									p.registerCommand(
										d.KEY_BACKSPACE_COMMAND,
										l,
										d.COMMAND_PRIORITY_LOW,
									),
								),
							);
						}),
						(() => {
							const y = c(),
								$ = s;
							return (
								typeof $ == "function" ? (0, C.use)($, y) : (s = y),
								(0, E.insert)(y, () => g.children),
								(0, w.effect)(
									(v) => {
										const S = { [g.classes.base]: !0, [g.classes.focus]: o() },
											I = g.format ? g.format : void 0;
										return (
											(v._v$ = (0, i.classList)(y, S, v._v$)),
											I !== v._v$2 &&
												((v._v$2 = I) != null
													? y.style.setProperty("text-align", I)
													: y.style.removeProperty("text-align")),
											v
										);
									},
									{ _v$: void 0, _v$2: void 0 },
								),
								y
							);
						})()
					);
				}
			},
		),
		