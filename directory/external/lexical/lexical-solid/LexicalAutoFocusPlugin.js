import '../../../require.js';
import '../../../exports.js';
import './LexicalComposerContext.js';
import '../../solid/solid.js';
define(de[2154], he([1, 0, 181, 13]), function (ce /*require*/,
 e /*exports*/,
 t /*LexicalComposerContext*/,
 i /*solid*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.AutoFocusPlugin = w);
			function w(E) {
				const [C] = (0, t.useLexicalComposerContext)();
				return (
					(0, i.onMount)(() => {
						C.focus(
							() => {
								const d = document.activeElement,
									m = C.getRootElement();
								m !== null &&
									(d === null || !m.contains(d)) &&
									m.focus({ preventScroll: !0 });
							},
							{ defaultSelection: E.defaultSelection },
						);
					}),
					null
				);
			}
		})
