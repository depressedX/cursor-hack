import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/solid.js';
import '../../../../css!vs/base/browser/solidComponents/switch/switch.js';
define(
			de[650],
			he([1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 2230]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/,
 C /*web*/,
 d /*web*/,
 m /*web*/,
 r /*solid*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$dob = void 0);
				const u = (0, t.template)("<span>"),
					a = (0, t.template)("<div><div>"),
					h = (c) =>
						(() => {
							const n = a(),
								g = n.firstChild;
							return (
								n.addEventListener("mouseleave", (p) => c.onMouseLeave?.(p)),
								n.addEventListener("mouseenter", (p) => c.onMouseEnter?.(p)),
								n.addEventListener("click", (p) => {
									c.onToggle(p);
								}),
								(0, m.insert)(
									n,
									(0, C.createComponent)(r.Show, {
										get when() {
											return c.textBeside;
										},
										get children() {
											const p = u();
											return (
												p.style.setProperty(
													"color",
													"var(--vscode-input-placeholderForeground)",
												),
												(0, m.insert)(p, () => (c.value ? "On" : "Off")),
												(0, d.effect)(() =>
													(c.size === "small"
														? "10px"
														: c.size === "extra-small"
															? "8px"
															: "12px") != null
														? p.style.setProperty(
																"font-size",
																c.size === "small"
																	? "10px"
																	: c.size === "extra-small"
																		? "8px"
																		: "12px",
															)
														: p.style.removeProperty("font-size"),
												),
												p
											);
										},
									}),
									g,
								),
								(0, d.effect)(
									(p) => {
										const o = `solid-switch ${c.size === "small" ? "solid-switch-small" : c.size === "extra-small" ? "solid-switch-extra-small" : ""}`,
											f = c.style,
											b = c.value ? "On" : "Off",
											s = `solid-switch-toggle ${c.value ? "on" : "off"} ${c.variant === "subtle" ? "solid-switch-toggle-subtle" : ""} ${c.size === "small" ? "solid-switch-toggle-small" : c.size === "extra-small" ? "solid-switch-toggle-extra-small" : ""}`;
										return (
											o !== p._v$ && (0, E.className)(n, (p._v$ = o)),
											(p._v$2 = (0, w.style)(n, f, p._v$2)),
											b !== p._v$3 &&
												(0, i.setAttribute)(n, "title", (p._v$3 = b)),
											s !== p._v$4 && (0, E.className)(g, (p._v$4 = s)),
											p
										);
									},
									{ _v$: void 0, _v$2: void 0, _v$3: void 0, _v$4: void 0 },
								),
								n
							);
						})();
				e.$dob = h;
			},
		),
		