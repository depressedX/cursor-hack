import '../../../require.js';
import '../../../exports.js';
import '../../solid/web.js';
import './LexicalComposerContext.js';
import '../../solid/solid.js';
define(de[2157], he([1, 0, 2, 181, 13]), function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*LexicalComposerContext*/,
 w /*solid*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.LexicalNestedComposer = E);
			function E(C) {
				let d = !1;
				const m = (0, w.useContext)(i.LexicalComposerContext);
				if (m == null)
					throw Error("Unexpected parent context null on a nested composer");
				const [r, { getTheme: u }] = m,
					a = C.initialTheme || u() || void 0,
					h = (0, i.createLexicalComposerContext)(m, a);
				if (
					(a !== void 0 && (C.initialEditor._config.theme = a),
					(C.initialEditor._parentEditor = r),
					C.initialNodes)
				)
					for (const c of C.initialNodes) {
						const n = c.getType();
						C.initialEditor._nodes.set(n, {
							klass: c,
							replace: null,
							replaceWithKlass: null,
							transforms: new Set(),
						});
					}
				else {
					const c = (C.initialEditor._nodes = new Map(r._nodes));
					for (const [n, g] of c)
						C.initialEditor._nodes.set(n, {
							klass: g.klass,
							replace: g.replace,
							replaceWithKlass: g.replaceWithKlass,
							transforms: new Set(),
						});
				}
				return (
					(C.initialEditor._config.namespace = r._config.namespace),
					(C.initialEditor._editable = r._editable),
					(0, w.createEffect)(() => {
						(0, w.onCleanup)(
							r.registerEditableListener((c) => {
								C.initialEditor.setEditable(c);
							}),
						);
					}),
					(0, t.createComponent)(i.LexicalComposerContext.Provider, {
						get value() {
							return [C.initialEditor, h];
						},
						get children() {
							return C.children;
						},
					})
				);
			}
		}),
		