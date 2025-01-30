import '../../../require.js';
import '../../../exports.js';
import './LexicalComposerContext.js';
import '../lexical/api.js';
import '../../solid/solid.js';
define(de[1158], he([1, 0, 181, 164, 13]), function (ce /*require*/,
 e /*exports*/,
 t /*LexicalComposerContext*/,
 i /*api*/,
 w /*solid*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.isNodeSelected = E),
				(e.useLexicalNodeSelection = C);
			function E(d, m) {
				return d.getEditorState().read(() => {
					const r = (0, i.$getNodeByKey)(m);
					return r === null ? !1 : r.isSelected();
				});
			}
			function C(d) {
				const [m] = (0, t.useLexicalComposerContext)(),
					[r, u] = (0, w.createSignal)(E(m, d));
				return (
					(0, w.onMount)(() => {
						let c = !0;
						const n = m.registerUpdateListener(() => {
							c && u(E(m, d));
						});
						(0, w.onCleanup)(() => {
							(c = !1), n();
						});
					}),
					[
						r,
						(c) => {
							m.update(() => {
								let n = (0, i.$getSelection)();
								(0, i.$isNodeSelection)(n) ||
									((n = (0, i.$createNodeSelection)()),
									(0, i.$setSelection)(n)),
									c ? n.add(d) : n.delete(d);
							});
						},
						() => {
							m.update(() => {
								const c = (0, i.$getSelection)();
								(0, i.$isNodeSelection)(c) && c.clear();
							});
						},
					]
				);
			}
		}),
		