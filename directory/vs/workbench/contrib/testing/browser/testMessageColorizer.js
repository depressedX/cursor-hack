import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/markdownRenderer.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/strings.js';
import '../../../../editor/common/core/position.js';
import '../../../../editor/common/core/range.js';
import '../../../../css!vs/workbench/contrib/testing/browser/media/testMessageColorizer.js';
define(
			de[999],
			he([1, 0, 267, 3, 37, 48, 17, 2500]),
			function (ce /*require*/,
 e /*exports*/,
 t /*markdownRenderer*/,
 i /*lifecycle*/,
 w /*strings*/,
 E /*position*/,
 C /*range*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$WKc = e.$VKc = void 0);
				const d = /^\x1b\[([0-9]+)m$/;
				var m;
				(function (a) {
					(a.Prefix = "tstm-ansidec-"),
						(a.ForegroundPrefix = "tstm-ansidec-fg"),
						(a.BackgroundPrefix = "tstm-ansidec-bg"),
						(a.Bold = "tstm-ansidec-1"),
						(a.Faint = "tstm-ansidec-2"),
						(a.Italic = "tstm-ansidec-3"),
						(a.Underline = "tstm-ansidec-4");
				})(m || (m = {}));
				const r = (a) =>
					typeof a == "string" ? (0, w.$9f)(a) : (0, t.$Wib)(a);
				e.$VKc = r;
				const u = (a, h) => {
					const c = [];
					return (
						h.changeDecorations((n) => {
							let g = new E.$hL(1, 1),
								p = [];
							for (const o of (0, w.$8f)(a))
								if (o.isCode) {
									const f = d.exec(o.str)?.[1];
									if (!f) continue;
									const b = Number(f);
									b === 0
										? (p.length = 0)
										: b === 22
											? (p = p.filter((s) => s !== m.Bold && s !== m.Italic))
											: b === 23
												? (p = p.filter((s) => s !== m.Italic))
												: b === 24
													? (p = p.filter((s) => s !== m.Underline))
													: (b >= 30 && b <= 39) || (b >= 90 && b <= 99)
														? ((p = p.filter(
																(s) => !s.startsWith(m.ForegroundPrefix),
															)),
															p.push(m.ForegroundPrefix + f))
														: (b >= 40 && b <= 49) || (b >= 100 && b <= 109)
															? ((p = p.filter(
																	(s) => !s.startsWith(m.BackgroundPrefix),
																)),
																p.push(m.BackgroundPrefix + f))
															: p.push(m.Prefix + f);
								} else {
									let f = g.lineNumber,
										b = g.column;
									const s = new w.$Vf(o.str);
									for (let y = 0; !s.eol(); y += s.nextGraphemeLength())
										o.str[y] ===
										`
`
											? (f++, (b = 1))
											: b++;
									const l = new E.$hL(f, b);
									p.length &&
										c.push(
											n.addDecoration(C.$iL.fromPositions(g, l), {
												inlineClassName: p.join(" "),
												description: "test-message-colorized",
											}),
										),
										(g = l);
								}
						}),
						(0, i.$Yc)(() => h.removeDecorations(c))
					);
				};
				e.$WKc = u;
			},
		)
