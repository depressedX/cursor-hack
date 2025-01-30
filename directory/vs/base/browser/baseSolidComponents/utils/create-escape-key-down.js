import '../../../../../require.js';
import '../../../../../exports.js';
import './utils.js';
import './solid-primitives/utils/utils.js';
import '../../../../../external/solid/solid.js';
define(de[2616], he([1, 0, 369, 302, 13]), function (ce /*require*/,
 e /*exports*/,
 t /*utils*/,
 i /*utils*/,
 w /*solid*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Dkb = E);
			function E(C) {
				const d = (m) => {
					m.key === "Escape" && C.onEscapeKeyDown?.(m);
				};
				(0, w.createEffect)(() => {
					if ((0, i.$_jb)(C.isDisabled)) return;
					const m = C.ownerDocument?.() ?? (0, t.$Rjb)();
					m.addEventListener("keydown", d),
						(0, w.onCleanup)(() => {
							m.removeEventListener("keydown", d);
						});
				});
			}
		}); /*!
	 * Portions of this file are based on code from floating-ui.
	 * MIT Licensed, Copyright (c) 2021 Floating UI contributors.
	 *
	 * Credits to the Floating UI contributors:
	 * https://github.com/floating-ui/floating-ui/blob/f7ce9420aa32c150eb45049f12cf3b5506715341/packages/react/src/components/FloatingOverlay.tsx
	 *
	 * Portions of this file are based on code from ariakit.
	 * MIT Licensed, Copyright (c) Diego Haz.
	 *
	 * Credits to the Ariakit team:
	 * https://github.com/ariakit/ariakit/blob/5d8a1f047fcadcf117073c70359663a3946b73bf/packages/ariakit/src/dialog/__utils/use-prevent-body-scroll.ts
	 */
	