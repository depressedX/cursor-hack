import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/themables.js';
define(
			de[3003],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13, 14, 26]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/,
 C /*web*/,
 d /*web*/,
 m /*solid*/,
 r /*codicons*/,
 u /*themables*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Qzc = p);
				const a = (0, t.template)("<div><span>"),
					h = (0, t.template)("<div>"),
					c = (0, t.template)("<span> "),
					n = (0, t.template)("<div><div>"),
					g = (0, t.template)("<span>");
				function p(o) {
					const f = {
							small: {
								width: "6px",
								height: "6px",
								fontSize: "10px",
								dotSize: "4px",
							},
							medium: {
								width: "10px",
								height: "10px",
								fontSize: "12px",
								dotSize: "6px",
							},
							large: {
								width: "14px",
								height: "14px",
								fontSize: "16px",
								dotSize: "10px",
							},
						},
						b = () => {
							switch (o.bugbot.status.type) {
								case "generating":
									return "var(--vscode-testing-iconQueued)";
								case "completed":
									return "var(--vscode-testing-iconPassed)";
								case "errored":
									return "var(--vscode-testing-iconFailed)";
								default:
									return "var(--vscode-testing-iconUnset)";
							}
						},
						s = () =>
							o.bugbot.bugReports?.bugReports?.length
								? r.$ak.bug
								: r.$ak.circleOutline,
						l = () => o.bugbot.bugReports?.bugReports?.length ?? 0,
						y = (0, m.createMemo)(() => f[o.size || "small"]);
					return (() => {
						const $ = n(),
							v = $.firstChild;
						return (
							(0, w.insert)(
								$,
								(0, E.createComponent)(m.Show, {
									get when() {
										return (
											o.bugbot.status.type === "completed" && o.bugbot.isUnread
										);
									},
									get children() {
										const S = a(),
											I = S.firstChild;
										return (
											S.style.setProperty("display", "inline-flex"),
											S.style.setProperty("align-items", "center"),
											S.style.setProperty("justify-content", "center"),
											I.style.setProperty(
												"color",
												"var(--vscode-activityBarBadge-background)",
											),
											(0, d.effect)(
												(T) => {
													const P = y().width,
														k = y().height,
														L = y().fontSize,
														D = u.ThemeIcon.asClassName(r.$ak.circleFilled);
													return (
														P !== T._v$ &&
															((T._v$ = P) != null
																? S.style.setProperty("width", P)
																: S.style.removeProperty("width")),
														k !== T._v$2 &&
															((T._v$2 = k) != null
																? S.style.setProperty("height", k)
																: S.style.removeProperty("height")),
														L !== T._v$3 &&
															((T._v$3 = L) != null
																? I.style.setProperty("font-size", L)
																: I.style.removeProperty("font-size")),
														D !== T._v$4 && (0, C.className)(I, (T._v$4 = D)),
														T
													);
												},
												{
													_v$: void 0,
													_v$2: void 0,
													_v$3: void 0,
													_v$4: void 0,
												},
											),
											S
										);
									},
								}),
								v,
							),
							v.style.setProperty("display", "inline-flex"),
							v.style.setProperty("align-items", "center"),
							v.style.setProperty("justify-content", "center"),
							(0, w.insert)(
								v,
								(0, E.createComponent)(m.Show, {
									get when() {
										return o.bugbot.status.type === "generating";
									},
									get fallback() {
										return (() => {
											const S = g();
											return (
												(0, d.effect)(
													(I) => {
														const T = y().fontSize,
															P = b(),
															k = u.ThemeIcon.asClassName(s());
														return (
															T !== I._v$11 &&
																((I._v$11 = T) != null
																	? S.style.setProperty("font-size", T)
																	: S.style.removeProperty("font-size")),
															P !== I._v$12 &&
																((I._v$12 = P) != null
																	? S.style.setProperty("color", P)
																	: S.style.removeProperty("color")),
															k !== I._v$13 &&
																(0, C.className)(S, (I._v$13 = k)),
															I
														);
													},
													{ _v$11: void 0, _v$12: void 0, _v$13: void 0 },
												),
												S
											);
										})();
									},
									get children() {
										const S = h();
										return (
											S.style.setProperty("border-radius", "50%"),
											S.style.setProperty("animation", "pulse 1.5s infinite"),
											(0, d.effect)(
												(I) => {
													const T = y().dotSize,
														P = y().dotSize,
														k = b();
													return (
														T !== I._v$5 &&
															((I._v$5 = T) != null
																? S.style.setProperty("width", T)
																: S.style.removeProperty("width")),
														P !== I._v$6 &&
															((I._v$6 = P) != null
																? S.style.setProperty("height", P)
																: S.style.removeProperty("height")),
														k !== I._v$7 &&
															((I._v$7 = k) != null
																? S.style.setProperty("background", k)
																: S.style.removeProperty("background")),
														I
													);
												},
												{ _v$5: void 0, _v$6: void 0, _v$7: void 0 },
											),
											S
										);
									},
								}),
							),
							(0, w.insert)(
								$,
								(0, E.createComponent)(m.Show, {
									get when() {
										return l() > 0;
									},
									get children() {
										const S = c(),
											I = S.firstChild;
										return (
											S.style.setProperty("font-size", "10px"),
											S.style.setProperty(
												"color",
												"var(--vscode-descriptionForeground)",
											),
											(0, w.insert)(S, l, I),
											(0, w.insert)(
												S,
												() => (l() === 1 ? "bug" : "bugs"),
												null,
											),
											S
										);
									},
								}),
								null,
							),
							(0, d.effect)(
								(S) => {
									const I = {
											display: "inline-flex",
											"align-items": "center",
											gap: "4px",
											...o.style,
										},
										T = y().width,
										P = y().height;
									return (
										(S._v$8 = (0, i.style)($, I, S._v$8)),
										T !== S._v$9 &&
											((S._v$9 = T) != null
												? v.style.setProperty("width", T)
												: v.style.removeProperty("width")),
										P !== S._v$10 &&
											((S._v$10 = P) != null
												? v.style.setProperty("height", P)
												: v.style.removeProperty("height")),
										S
									);
								},
								{ _v$8: void 0, _v$9: void 0, _v$10: void 0 },
							),
							$
						);
					})();
				}
			},
		)
