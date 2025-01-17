import '../../../require.js';
import '../../../exports.js';
import '../../solid/web.js';
import '../lexical/api.js';
import '../../solid/solid.js';
import '../lexical/api.js';
import './LexicalComposerContext.js';
import './useLexicalNodeSelection.js';
import '../lexical-utils/api.js';
define(
			de[1564],
			he([1, 0, 2, 164, 13, 164, 181, 1158, 304]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.HorizontalRuleNode = e.INSERT_HORIZONTAL_RULE_COMMAND = void 0),
					(e.HorizontalRuleComponent = r),
					(e.convertHorizontalRuleElement = a),
					(e.$createHorizontalRuleNode = h),
					(e.$isHorizontalRuleNode = c),
					(e.INSERT_HORIZONTAL_RULE_COMMAND = (0, E.createCommand)(
						"INSERT_HORIZONTAL_RULE_COMMAND",
					));
				function r(n) {
					const [g] = (0, C.useLexicalComposerContext)(),
						[p, o, f] = (0, d.useLexicalNodeSelection)(n.nodeKey),
						b = (s) => {
							if (p() && (0, i.$isNodeSelection)((0, i.$getSelection)())) {
								s.preventDefault();
								const y = (0, i.$getNodeByKey)(n.nodeKey);
								c(y) && y.remove(), o(!1);
							}
							return !1;
						};
					return (
						(0, w.createEffect)(() => {
							(0, w.onCleanup)(
								(0, m.mergeRegister)(
									g.registerCommand(
										i.CLICK_COMMAND,
										(s) => {
											const l = g.getElementByKey(n.nodeKey);
											return s.target === l
												? (s.shiftKey || f(), o(!p), !0)
												: !1;
										},
										i.COMMAND_PRIORITY_LOW,
									),
									g.registerCommand(
										i.KEY_DELETE_COMMAND,
										b,
										i.COMMAND_PRIORITY_LOW,
									),
									g.registerCommand(
										i.KEY_BACKSPACE_COMMAND,
										b,
										i.COMMAND_PRIORITY_LOW,
									),
								),
							);
						}),
						(0, w.createEffect)(() => {
							const s = g.getElementByKey(n.nodeKey);
							s !== null && (s.className = p() ? "selected" : "");
						}),
						null
					);
				}
				class u extends E.DecoratorNode {
					static getType() {
						return "horizontalrule";
					}
					static clone(g) {
						return new u(g.__key);
					}
					static importJSON(g) {
						return h();
					}
					static importDOM() {
						return { hr: () => ({ conversion: a, priority: 0 }) };
					}
					exportJSON() {
						return { type: "horizontalrule", version: 1 };
					}
					exportDOM() {
						return { element: document.createElement("hr") };
					}
					createDOM() {
						return document.createElement("hr");
					}
					getTextContent() {
						return `
`;
					}
					isInline() {
						return !1;
					}
					updateDOM() {
						return !1;
					}
					decorate() {
						const g = this;
						return (0, t.createComponent)(r, {
							get nodeKey() {
								return g.__key;
							},
						});
					}
				}
				e.HorizontalRuleNode = u;
				function a() {
					return { node: h() };
				}
				function h() {
					return (0, i.$applyNodeReplacement)(new u());
				}
				function c(n) {
					return n instanceof u;
				}
			},
		),
		