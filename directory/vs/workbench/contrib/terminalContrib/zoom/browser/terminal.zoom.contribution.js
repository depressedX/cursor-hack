import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/event.js';
import '../../../../../base/browser/ui/scrollbar/scrollableElement.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/platform.js';
import '../../../../../platform/terminal/common/terminal.js';
import '../../../terminal/browser/terminalExtensions.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../terminal/browser/terminalActions.js';
import '../../../../../nls.js';
import '../../../../../base/common/types.js';
import '../../../terminal/common/terminalConfiguration.js';
import '../common/terminal.zoom.js';
define(
			de[4046],
			he([1, 0, 6, 203, 3, 12, 117, 378, 10, 363, 4, 28, 1859, 1770]),
			function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*scrollableElement*/,
 w /*lifecycle*/,
 E /*platform*/,
 C /*terminal*/,
 d /*terminalExtensions*/,
 m /*configuration*/,
 r /*terminalActions*/,
 u /*nls*/,
 a /*types*/,
 h /*terminalConfiguration*/,
 c /*terminal.zoom*/) {
				"use strict";
				var n;
				Object.defineProperty(e, "__esModule", { value: !0 });
				let g = class extends w.$1c {
					static {
						n = this;
					}
					static {
						this.ID = "terminal.mouseWheelZoom";
					}
					static get(o) {
						return o.getContribution(n.ID);
					}
					constructor(o, f, b, s) {
						super(), (this.b = s), (this.a = this.D(new w.$2c()));
					}
					xtermOpen(o) {
						this.D(
							t.Event.runAndSubscribe(this.b.onDidChangeConfiguration, (f) => {
								(!f ||
									f.affectsConfiguration(
										c.TerminalZoomSettingId.MouseWheelZoom,
									)) &&
									(this.b.getValue(c.TerminalZoomSettingId.MouseWheelZoom)
										? this.g(o.raw)
										: this.a.clear());
							}),
						);
					}
					f() {
						return this.b.getValue(C.TerminalSettingId.FontSize);
					}
					g(o) {
						const f = i.$3hb.INSTANCE;
						let b = 0,
							s = this.f(),
							l = !1,
							y = 0;
						o.attachCustomWheelEventHandler(($) => {
							const v = $;
							if (f.isPhysicalMouseWheel()) {
								if (this.h(v)) {
									const S = v.deltaY > 0 ? -1 : 1;
									return (
										this.b.updateValue(
											C.TerminalSettingId.FontSize,
											this.f() + S,
										),
										v.preventDefault(),
										v.stopPropagation(),
										!1
									);
								}
							} else if (
								(Date.now() - b > 50 &&
									((s = this.f()), (l = this.h(v)), (y = 0)),
								(b = Date.now()),
								(y += v.deltaY),
								l)
							) {
								const S = Math.ceil(Math.abs(y / 5)),
									I = y > 0 ? -1 : 1,
									T = S * I;
								return (
									this.b.updateValue(C.TerminalSettingId.FontSize, s + T),
									(y += v.deltaY),
									v.preventDefault(),
									v.stopPropagation(),
									!1
								);
							}
							return !0;
						}),
							(this.a.value = (0, w.$Yc)(() =>
								o.attachCustomWheelEventHandler(() => !0),
							));
					}
					h(o) {
						return E.$m
							? (o.metaKey || o.ctrlKey) && !o.shiftKey && !o.altKey
							: o.ctrlKey && !o.metaKey && !o.shiftKey && !o.altKey;
					}
				};
				(g = n = Ne([j(3, m.$gj)], g)),
					(0, d.$qLc)(g.ID, g, !0),
					(0, r.$EUc)({
						id: c.TerminalZoomCommandId.FontZoomIn,
						title: (0, u.localize2)(10605, "Increase Font Size"),
						run: async (p, o) => {
							const f = o.get(m.$gj),
								b = f.getValue(C.TerminalSettingId.FontSize);
							(0, a.$pg)(b) &&
								(await f.updateValue(C.TerminalSettingId.FontSize, b + 1));
						},
					}),
					(0, r.$EUc)({
						id: c.TerminalZoomCommandId.FontZoomOut,
						title: (0, u.localize2)(10606, "Decrease Font Size"),
						run: async (p, o) => {
							const f = o.get(m.$gj),
								b = f.getValue(C.TerminalSettingId.FontSize);
							(0, a.$pg)(b) &&
								(await f.updateValue(C.TerminalSettingId.FontSize, b - 1));
						},
					}),
					(0, r.$EUc)({
						id: c.TerminalZoomCommandId.FontZoomReset,
						title: (0, u.localize2)(10607, "Reset Font Size"),
						run: async (p, o) => {
							await o
								.get(m.$gj)
								.updateValue(C.TerminalSettingId.FontSize, h.$HVc);
						},
					});
			},
		)
