import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/htmlContent.js';
define(de[2953], he([1, 0, 94]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$F2c = i);
			function i(w, E) {
				if (!E) return;
				const C = [],
					d = [],
					m = E.matchAll(/(\<keybinding:(?<commandId>[^\<]*)\>)/gm);
				for (const u of [...m]) {
					const a = u?.groups?.commandId;
					let h;
					if (u?.length && a) {
						const c = w.lookupKeybinding(a)?.getAriaLabel();
						c
							? ((h = " (" + c + ")"), d.push({ label: a, id: a }))
							: ((h = " (unassigned keybinding)"), C.push({ label: a, id: a })),
							(E = E.replace(u[0], h));
					}
				}
				const r = new t.$cl(E);
				return (
					(r.isTrusted = !0),
					{
						content: r,
						configureKeybindingItems: C.length ? C : void 0,
						configuredKeybindingItems: d.length ? d : void 0,
					}
				);
			}
		}),
		