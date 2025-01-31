import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../css!vs/workbench/contrib/ui/browser/expandingTextArea/expandingTextArea.js';
define(
			de[3196],
			he([1, 0, 2, 2, 2, 2, 13, 2517]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/,
 C /*solid*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wfd = void 0);
				const d = (0, t.template)('<textarea name="text" id="text">'),
					m = (r) => {
						const [u, a] = (0, C.createSignal)(r.defaultValue ?? ""),
							[h, c] = (0, C.createSignal)(null),
							n = () => {
								const g = h();
								if (!g) return;
								g.style.height = "auto";
								const p = g.scrollHeight,
									f = (g.offsetHeight - g.clientHeight) / 2;
								(g.style.height = `${p + f}px`),
									(g.style.paddingTop = `${f}px`),
									(g.style.paddingBottom = `${f}px`),
									(g.style.boxSizing = "border-box");
							};
						return (
							(0, C.createEffect)(() => {
								(0, C.onMount)(() => {
									n();
								});
							}),
							(0, C.createEffect)(() => {
								if (h()) {
									const g = new ResizeObserver(() => {
										n();
									});
									return (
										g.observe(h()),
										() => {
											g.disconnect();
										}
									);
								}
							}),
							(() => {
								const g = d();
								return (
									(0, i.use)((p) => {
										r.setRef != null && r.setRef(p), c(p);
									}, g),
									g.addEventListener("keydown", (p) => {
										r.onKeyDown && r.onKeyDown(p);
									}),
									g.addEventListener("input", (p) => {
										n(), a(p.currentTarget.value), r.onInput && r.onInput(p);
									}),
									(0, w.spread)(
										g,
										(0, E.mergeProps)(
											{
												get class() {
													return (
														"cursor-expanding-text-area" +
														(r.class ? ` ${r.class}` : "")
													);
												},
												get value() {
													return u();
												},
												get rows() {
													return r.defaultRows ?? 1;
												},
												get placeholder() {
													return r.placeholder;
												},
												get style() {
													return { ...r.style };
												},
												get disabled() {
													return r.disabled;
												},
											},
											() => r.extras ?? [],
										),
										!1,
										!1,
									),
									g
								);
							})()
						);
					};
				e.$wfd = m;
			},
		)
