import '../../../require.js';
import '../../../exports.js';
import './LexicalComposerContext.js';
import '../lexical/api.js';
import '../../solid/solid.js';
import '../lexical-utils/api.js';
define(
			de[2604],
			he([1, 0, 181, 164, 13, 304]),
			function (ce /*require*/,
 e /*exports*/,
 t /*LexicalComposerContext*/,
 i /*api*/,
 w /*solid*/,
 E /*api*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$filter = C),
					(e.indentOverTab = d),
					(e.registerTabIndentation = m),
					(e.TabIndentationPlugin = r);
				function C(u, a) {
					const h = [];
					for (let c = 0; c < u.length; c++) {
						const n = a(u[c]);
						n !== null && h.push(n);
					}
					return h;
				}
				function d(u) {
					const a = u.getNodes();
					if (
						C(a, (f) =>
							(0, i.$isBlockElementNode)(f) && f.canIndent() ? f : null,
						).length > 0
					)
						return !0;
					const c = u.anchor,
						n = u.focus,
						g = n.isBefore(c) ? n : c,
						p = g.getNode(),
						o = (0, E.$getNearestBlockElementAncestorOrThrow)(p);
					if (o.canIndent()) {
						const f = o.getKey();
						let b = (0, i.$createRangeSelection)();
						if (
							(b.anchor.set(f, 0, "element"),
							b.focus.set(f, 0, "element"),
							(b = (0, i.$normalizeSelection__EXPERIMENTAL)(b)),
							b.anchor.is(g))
						)
							return !0;
					}
					return !1;
				}
				function m(u) {
					return u.registerCommand(
						i.KEY_TAB_COMMAND,
						(a) => {
							const h = (0, i.$getSelection)();
							if (!(0, i.$isRangeSelection)(h)) return !1;
							a.preventDefault();
							const c = d(h)
								? a.shiftKey
									? i.OUTDENT_CONTENT_COMMAND
									: i.INDENT_CONTENT_COMMAND
								: i.INSERT_TAB_COMMAND;
							return u.dispatchCommand(c, void 0);
						},
						i.COMMAND_PRIORITY_EDITOR,
					);
				}
				function r() {
					const [u] = (0, t.useLexicalComposerContext)();
					return (
						(0, w.createEffect)(() => {
							(0, w.onCleanup)(m(u));
						}),
						null
					);
				}
			},
		),
		