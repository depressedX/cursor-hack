import '../../../require.js';
import '../../../exports.js';
import '../../solid/web.js';
import '../../solid/web.js';
import '../../solid/web.js';
import '../../solid/web.js';
import './LexicalComposerContext.js';
import './shared/useCharacterLimit.js';
import '../../solid/solid.js';
define(
			de[2609],
			he([1, 0, 2, 2, 2, 2, 181, 2608, 13]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/,
 C /*LexicalComposerContext*/,
 d /*useCharacterLimit*/,
 m /*solid*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.textEncoder = h),
					(e.utf8Length = c),
					(e.CharacterLimitPlugin = n);
				const r = (0, t.template)("<span>"),
					u = 5;
				let a = null;
				function h() {
					return window.TextEncoder === void 0
						? null
						: (a === null && (a = new window.TextEncoder()), a);
				}
				function c(g) {
					const p = h();
					if (p === null) {
						const o = encodeURIComponent(g).match(/%[89ABab]/g);
						return g.length + (o ? o.length : 0);
					}
					return p.encode(g).length;
				}
				function n(g) {
					g = (0, m.mergeProps)({ charset: "UTF-16", maxLength: u }, g);
					const [p] = (0, C.useLexicalComposerContext)(),
						[o, f] = (0, m.createSignal)(g.maxLength),
						b = (0, m.createMemo)(() => ({
							remainingCharacters: f,
							strlen: (s) => {
								if (g.charset === "UTF-8") return c(s);
								if (g.charset === "UTF-16") return s.length;
								throw new Error("Unrecognized charset");
							},
						}));
					return (
						(0, d.useCharacterLimit)(p, g.maxLength, b),
						(() => {
							const s = r();
							return (
								(0, E.insert)(s, o),
								(0, w.effect)(() =>
									(0, i.className)(
										s,
										`characters-limit ${o() < 0 ? "characters-limit-exceeded" : ""}`,
									),
								),
								s
							);
						})()
					);
				}
			},
		)
