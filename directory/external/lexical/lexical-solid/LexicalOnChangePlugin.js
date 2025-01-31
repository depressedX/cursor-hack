import '../../../require.js';
import '../../../exports.js';
import '../../solid/solid.js';
import './LexicalComposerContext.js';
define(de[2155], he([1, 0, 13, 181]), function (ce /*require*/,
 e /*exports*/,
 t /*solid*/,
 i /*LexicalComposerContext*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.OnChangePlugin = w);
			function w(E) {
				E = (0, t.mergeProps)(
					{ ignoreSelectionChange: !1, ignoreHistoryMergeTagChange: !0 },
					E,
				);
				const [C] = (0, i.useLexicalComposerContext)();
				return (
					(0, t.createEffect)(() => {
						E.onChange &&
							(0, t.onCleanup)(
								C.registerUpdateListener(
									({
										editorState: d,
										dirtyElements: m,
										dirtyLeaves: r,
										prevEditorState: u,
										tags: a,
									}) => {
										(E.ignoreSelectionChange && m.size === 0 && r.size === 0) ||
											(E.ignoreHistoryMergeTagChange &&
												a.has("history-merge")) ||
											u.isEmpty() ||
											E.onChange(d, a, C);
									},
								),
							);
					}),
					null
				);
			}
		})
