import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../platform/theme/common/theme.js';
define(de[331], he([1, 0, 13, 212]), function (ce /*require*/,
 e /*exports*/,
 t /*solid*/,
 i /*theme*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$d$b = w),
				(e.$e$b = E),
				(e.$f$b = m),
				(e.$g$b = r),
				(e.$h$b = u);
			function w(a) {
				const { type: h } = a.getColorTheme();
				return (
					h === i.ColorScheme.DARK || h === i.ColorScheme.HIGH_CONTRAST_DARK
				);
			}
			function E(a, h) {
				return w(h) ? `${a} dark` : `${a} light`;
			}
			function C(a, h = 0.3) {
				return w(a) ? `rgba(255,255,255,${h})` : `rgba(0,0,0,${h})`;
			}
			function d(a, h = 0.14) {
				return w(a) ? `rgba(255,255,255,${h})` : `rgba(0,0,0,${h})`;
			}
			function m(a) {
				const [h, c] = (0, t.createSignal)(d(a)),
					n = a.onDidColorThemeChange((g) => {
						c(d(a));
					});
				return (
					(0, t.onCleanup)(() => {
						n.dispose();
					}),
					h
				);
			}
			function r(a) {
				const [h, c] = (0, t.createSignal)(C(a)),
					n = a.onDidColorThemeChange((g) => {
						c(C(a));
					});
				return (
					(0, t.onCleanup)(() => {
						n.dispose();
					}),
					h
				);
			}
			function u(a, h) {
				const [c, n] = (0, t.createSignal)(
						h.getColorTheme().getColor(a)?.toString(),
					),
					g = h.onDidColorThemeChange((p) => {
						n(h.getColorTheme().getColor(a)?.toString());
					});
				return (
					(0, t.onCleanup)(() => {
						g.dispose();
					}),
					c
				);
			}
		}),
		