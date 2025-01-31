import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../base/common/keyCodes.js';
import '../../../../../base/common/keybindings.js';
import '../../../../../base/common/platform.js';
define(
			de[2699],
			he([1, 0, 2, 2, 27, 343, 12]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*keyCodes*/,
 E /*keybindings*/,
 C /*platform*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$1dc = e.$Zdc = void 0),
					(e.$2dc = m);
				const d = (0, t.template)("<div> for GPT-4");
				(e.$Zdc = w.KeyMod.CtrlCmd | w.KeyCode.Enter),
					(e.$1dc = (0, E.$rs)(e.$Zdc, C.OS));
				function m(r, u) {
					const a = e.$1dc
						? ` ${u.keybindingService.resolveKeybinding(e.$1dc)[0].getLabel()}`
						: "";
					return u.reactiveStorageRoot.render(
						() =>
							(() => {
								const h = d(),
									c = h.firstChild;
								return (
									h.style.setProperty("visibility", "hidden"),
									h.style.setProperty("display", "none"),
									h.style.setProperty("position", "absolute"),
									h.style.setProperty("align-items", "center"),
									h.style.setProperty("height", "12px"),
									h.style.setProperty("overflow", "hidden"),
									h.style.setProperty("z-index", "100"),
									h.style.setProperty("font-size", "8px"),
									h.style.setProperty("left", "400px"),
									(0, i.insert)(h, a, c),
									h
								);
							})(),
						r,
					);
				}
			},
		)
