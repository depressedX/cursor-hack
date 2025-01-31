import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/lexical/lexical-solid/LexicalComposerContext.js';
import '../../../../../../external/lexical/lexical/lexical.js';
import '../../../../../../external/solid/solid.js';
import '../../../controlCommon/browser/solid.js';
import '../../../ui/browser/aiInput/aiInput2.js';
define(
			de[4317],
			he([1, 0, 181, 158, 13, 36, 450]),
			function (ce /*require*/,
 e /*exports*/,
 t /*LexicalComposerContext*/,
 i /*lexical*/,
 w /*solid*/,
 E /*solid*/,
 C /*aiInput2*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerArrowPlugin = void 0);
				const d = (m) => {
					const [r] = (0, t.useLexicalComposerContext)(),
						u = (0, E.$odc)(),
						[a, h] = (0, w.createSignal)(-1),
						[c, n] = (0, w.createSignal)([]),
						[g, p] = (0, w.createSignal)("");
					(0, w.createEffect)(() => {
						g().trim() === ""
							? n([g(), ...u.aiService.getPreviousPrompts()])
							: n(u.aiService.getPreviousPrompts());
					});
					const o = r.registerCommand(
							i.KEY_ALT_ARROW_UP_COMMAND,
							(b) => {
								if (!b.altKey) return !1;
								const s = r.getRootElement();
								return (
									s !== null &&
										(0, C.$Vac)(s) &&
										(a() === c().length - 1 ||
											(a() === -1 && p(s.innerText), h((l) => l + 1))),
									!1
								);
							},
							i.COMMAND_PRIORITY_LOW,
						),
						f = r.registerCommand(
							i.KEY_ALT_ARROW_DOWN_COMMAND,
							(b) => {
								if (!b.altKey) return !1;
								const s = r.getRootElement();
								return (
									s !== null && (0, C.$Wac)(s) && a() !== -1 && h(a() - 1), !1
								);
							},
							i.COMMAND_PRIORITY_LOW,
						);
					return (
						(0, w.createEffect)(() => {
							const b = c().length - 1 - a();
							c().length > 0 && b >= 0 && b < c().length
								? (m.setText && m.setText(c()[b]),
									r.update(() => {
										const s = (0, i.$getRoot)(),
											l = (0, i.$createParagraphNode)(),
											y = (0, i.$createTextNode)(c()[b]);
										l.append(y);
										for (const $ of s.getChildren()) $.remove();
										s.append(l), s.selectEnd();
									}))
								: a();
						}),
						(0, w.onCleanup)(() => {
							o(), f();
						}),
						null
					);
				};
				e.ComposerArrowPlugin = d;
			},
		)
