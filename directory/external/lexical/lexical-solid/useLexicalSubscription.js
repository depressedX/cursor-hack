import '../../../require.js';
import '../../../exports.js';
import './LexicalComposerContext.js';
import '../../solid/solid.js';
define(de[1464], he([1, 0, 181, 13]), function (ce /*require*/,
 e /*exports*/,
 t /*LexicalComposerContext*/,
 i /*solid*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.useLexicalSubscription = w);
			function w(E) {
				const [C] = (0, t.useLexicalComposerContext)(),
					d = (0, i.createMemo)(() => E(C));
				let m = d().initialValueFn();
				const [r, u] = (0, i.createSignal)(m);
				return (
					(0, i.createEffect)(() => {
						const { initialValueFn: a, subscribe: h } = d(),
							c = a();
						m !== c && ((m = c), u(() => c)),
							(0, i.onCleanup)(
								h((n) => {
									(m = n), u(() => n);
								}),
							);
					}),
					r
				);
			}
		}),
		