import '../../../require.js';
import '../../../exports.js';
import './LexicalComposerContext.js';
import '../lexical-utils/api.js';
import '../lexical/api.js';
import '../../solid/solid.js';
define(
			de[2603],
			he([1, 0, 181, 304, 164, 13]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.NodeEventPlugin = d);
				const C = new Set(["mouseenter", "mouseleave"]);
				function d(m) {
					const [r] = (0, t.useLexicalComposerContext)();
					return (
						(0, E.createEffect)(() => {
							const u = (0, E.untrack)(() => m.eventType),
								a = C.has(u),
								h = (c) => {
									r.update(() => {
										const n = (0, w.$getNearestNodeFromDOMNode)(c.target);
										if (n !== null) {
											const g = a
												? n instanceof m.nodeType
													? n
													: null
												: (0, i.$findMatchingParent)(
														n,
														(p) => p instanceof m.nodeType,
													);
											if (g !== null) {
												m.eventListener(c, r, g.getKey());
												return;
											}
										}
									});
								};
							return r.registerRootListener((c, n) => {
								c && c.addEventListener(u, h, a),
									n && n.removeEventListener(u, h, a);
							});
						}),
						null
					);
				}
			},
		),
		