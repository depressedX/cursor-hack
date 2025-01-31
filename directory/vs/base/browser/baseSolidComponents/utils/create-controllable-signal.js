import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/solid.js';
import './solid-primitives/utils/utils.js';
define(de[897], he([1, 0, 13, 302]), function (ce /*require*/,
 e /*exports*/,
 t /*solid*/,
 i /*utils*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$okb = w),
				(e.$pkb = E),
				(e.$qkb = C),
				(e.$rkb = d);
			function w(m) {
				const [r, u] = (0, t.createSignal)(m.defaultValue?.()),
					a = (0, t.createMemo)(() => m.value?.() !== void 0),
					h = (0, t.createMemo)(() => (a() ? m.value?.() : r()));
				return [
					h,
					(n) => {
						(0, t.untrack)(() => {
							const g = (0, i.$ekb)(n, h());
							return Object.is(g, h()) || (a() || u(g), m.onChange?.(g)), g;
						});
					},
				];
			}
			function E(m) {
				const [r, u] = w(m);
				return [() => r() ?? !1, u];
			}
			function C(m) {
				const [r, u] = w(m);
				return [() => r() ?? [], u];
			}
			function d(m) {
				const [r, u] = w(m);
				return [() => r() ?? new Set(), u];
			}
		})
