import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/resources.js';
import '../../../base/common/severity.js';
import '../../../nls.js';
import '../../instantiation/common/instantiation.js';
import '../../../base/common/labels.js';
import '../../../base/common/platform.js';
import '../../../base/common/objects.js';
define(
		de[57],
		he([1, 0, 19, 111, 4, 5, 222, 12, 82]),
		function (ce /*require*/,
 e /*exports*/,
 t /*resources*/,
 i /*severity*/,
 w /*nls*/,
 E /*instantiation*/,
 C /*labels*/,
 d /*platform*/,
 m /*objects*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.ConfirmResult = e.$IO = e.$HO = e.$GO = void 0),
				(e.$JO = c),
				(e.$KO = n),
				(i = xi(i)),
				(e.$GO = (0, E.$Mi)("dialogService"));
			var r;
			(function (g) {
				(g[(g.Confirmation = 1)] = "Confirmation"),
					(g[(g.Prompt = 2)] = "Prompt"),
					(g[(g.Input = 3)] = "Input");
			})(r || (r = {}));
			class u {
				a(p) {
					return this.d(p, r.Confirmation);
				}
				b(p) {
					return this.d(p, r.Prompt);
				}
				c(p) {
					return this.d(p, r.Input);
				}
				d(p, o) {
					const f = [];
					switch (o) {
						case r.Confirmation: {
							const b = p;
							b.primaryButton
								? f.push(b.primaryButton)
								: f.push((0, w.localize)(1710, null)),
								b.cancelButton
									? f.push(b.cancelButton)
									: f.push((0, w.localize)(1711, null));
							break;
						}
						case r.Prompt: {
							const b = p;
							Array.isArray(b.buttons) &&
								b.buttons.length > 0 &&
								f.push(...b.buttons.map((s) => s.label)),
								b.cancelButton &&
									(b.cancelButton === !0
										? f.push((0, w.localize)(1712, null))
										: typeof b.cancelButton == "string"
											? f.push(b.cancelButton)
											: b.cancelButton.label
												? f.push(b.cancelButton.label)
												: f.push((0, w.localize)(1713, null))),
								f.length === 0 && f.push((0, w.localize)(1714, null));
							break;
						}
						case r.Input: {
							const b = p;
							b.primaryButton
								? f.push(b.primaryButton)
								: f.push((0, w.localize)(1715, null)),
								b.cancelButton
									? f.push(b.cancelButton)
									: f.push((0, w.localize)(1716, null));
							break;
						}
					}
					return f;
				}
				e(p) {
					if (typeof p == "string") return p;
					if (typeof p == "number")
						return p === i.default.Info
							? "info"
							: p === i.default.Error
								? "error"
								: p === i.default.Warning
									? "warning"
									: "none";
				}
				f(p, o, f) {
					const b = [...(p.buttons ?? [])];
					p.cancelButton &&
						typeof p.cancelButton != "string" &&
						typeof p.cancelButton != "boolean" &&
						b.push(p.cancelButton);
					let s = b[o]?.run({ checkboxChecked: f });
					return (
						s instanceof Promise || (s = Promise.resolve(s)),
						{ result: s, checkboxChecked: f }
					);
				}
			}
			(e.$HO = u), (e.$IO = (0, E.$Mi)("fileDialogService"));
			var a;
			(function (g) {
				(g[(g.SAVE = 0)] = "SAVE"),
					(g[(g.DONT_SAVE = 1)] = "DONT_SAVE"),
					(g[(g.CANCEL = 2)] = "CANCEL");
			})(a || (e.ConfirmResult = a = {}));
			const h = 10;
			function c(g) {
				const p = [];
				return (
					p.push(
						...g
							.slice(0, h)
							.map((o) => (typeof o == "string" ? o : (0, t.$kh)(o))),
					),
					g.length > h &&
						(g.length - h === 1
							? p.push((0, w.localize)(1717, null))
							: p.push((0, w.localize)(1718, null, g.length - h))),
					p.push(""),
					p.join(`
`)
				);
			}
			function n(g, p) {
				const o = (0, m.$vo)(g);
				let f = (o.buttons ?? []).map((y) => (0, C.$DO)(y)),
					b = (g.buttons || []).map((y, $) => $),
					s = 0,
					l = o.cancelId ?? f.length - 1;
				if (f.length > 1) {
					const y = typeof l == "number" ? f[l] : void 0;
					if (d.$n || d.$m) {
						if (typeof y == "string" && f.length > 1 && l !== 1) {
							f.splice(l, 1), f.splice(1, 0, y);
							const $ = b[l];
							b.splice(l, 1), b.splice(1, 0, $), (l = 1);
						}
						d.$n &&
							f.length > 1 &&
							((f = f.reverse()),
							(b = b.reverse()),
							(s = f.length - 1),
							typeof y == "string" && (l = s - 1));
					} else if (
						d.$l &&
						typeof y == "string" &&
						f.length > 1 &&
						l !== f.length - 1
					) {
						f.splice(l, 1), f.push(y);
						const $ = b[l];
						b.splice(l, 1), b.push($), (l = f.length - 1);
					}
				}
				return (
					(o.buttons = f),
					(o.defaultId = s),
					(o.cancelId = l),
					(o.noLink = !0),
					(o.title = o.title || p.nameLong),
					{ options: o, buttonIndeces: b }
				);
			}
		},
	),
		