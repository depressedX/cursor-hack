import '../../../../../../../../require.js';
import '../../../../../../../../exports.js';
import '../../../../../../../../external/lexical/lexical-solid/LexicalComposerContext.js';
import '../../../../../../../../external/lexical/lexical-utils/api.js';
import '../../../../../../../../external/lexical/lexical/lexical.js';
import '../../../../../../../../external/solid/solid.js';
import './GhostTextNode.js';
define(
			de[3190],
			he([1, 0, 181, 304, 158, 13, 1775]),
			function (ce /*require*/,
 e /*exports*/,
 t /*LexicalComposerContext*/,
 i /*api*/,
 w /*lexical*/,
 E /*solid*/,
 C /*GhostTextNode*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Fac = d);
				function d(m) {
					const [r] = (0, t.useLexicalComposerContext)();
					let u = null;
					const a = () => {
							const c = u !== null ? (0, w.$getNodeByKey)(u) : null;
							c !== null && c.isAttached() && (c.remove(), (u = null));
						},
						h = (c) => {
							if (!c) return;
							const n = (0, w.$getSelection)();
							if (!(0, w.$isRangeSelection)(n)) return;
							const g = n.clone();
							u !== null && (0, w.$getNodeByKey)(u)?.remove();
							const p = (0, C.$createGhostTextNode)(C.$Cac, c);
							(u = p.getKey()), n.insertNodes([p]), (0, w.$setSelection)(g);
						};
					return (
						(0, E.createEffect)(() => {
							const c = m.ghostText();
							if (c)
								r.update(() => {
									h(c);
								});
							else {
								r.update(() => {
									a();
								});
								return;
							}
						}),
						(0, E.createEffect)(() => {
							(0, E.onMount)(() => {
								r.update(() => {
									a();
								});
							});
						}),
						(0, E.createEffect)(() => {
							function c(g) {
								const p = g.getKey();
								g.__uuid === C.$Cac && p !== u && a();
							}
							function n() {
								r.update(() => {
									a();
								});
							}
							(0, E.onCleanup)(
								(0, i.mergeRegister)(r.registerNodeTransform(C.$Dac, c), n),
							);
						}),
						null
					);
				}
			},
		)
