import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/keybindings.js';
import '../../../base/common/platform.js';
import '../../commands/common/commands.js';
import '../../registry/common/platform.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/linkedList.js';
define(
			de[43],
			he([1, 0, 343, 12, 31, 30, 3, 273]),
			function (ce /*require*/,
 e /*exports*/,
 t /*keybindings*/,
 i /*platform*/,
 w /*commands*/,
 E /*platform*/,
 C /*lifecycle*/,
 d /*linkedList*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$UX = e.$TX = e.KeybindingWeight = void 0);
				var m;
				(function (a) {
					(a[(a.EditorCore = 0)] = "EditorCore"),
						(a[(a.EditorContrib = 100)] = "EditorContrib"),
						(a[(a.WorkbenchContrib = 200)] = "WorkbenchContrib"),
						(a[(a.BuiltinExtension = 300)] = "BuiltinExtension"),
						(a[(a.ExternalExtension = 400)] = "ExternalExtension"),
						(a[(a.CursorDefaultPriority = 500)] = "CursorDefaultPriority"),
						(a[(a.CursorMaxPriority = 600)] = "CursorMaxPriority");
				})(m || (e.KeybindingWeight = m = {}));
				class r {
					constructor() {
						(this.c = new d.$$c()), (this.d = []), (this.e = null);
					}
					static f(h) {
						if (i.OS === i.OperatingSystem.Windows) {
							if (h && h.win) return h.win;
						} else if (i.OS === i.OperatingSystem.Macintosh) {
							if (h && h.mac) return h.mac;
						} else if (h && h.linux) return h.linux;
						return h;
					}
					registerKeybindingRule(h) {
						const c = r.f(h),
							n = new C.$Zc();
						if (c && c.primary) {
							const g = (0, t.$rs)(c.primary, i.OS);
							g && n.add(this.g(g, h.id, h.args, h.weight, 0, h.when));
						}
						if (c && Array.isArray(c.secondary))
							for (let g = 0, p = c.secondary.length; g < p; g++) {
								const o = c.secondary[g],
									f = (0, t.$rs)(o, i.OS);
								f && n.add(this.g(f, h.id, h.args, h.weight, -g - 1, h.when));
							}
						return n;
					}
					setExtensionKeybindings(h) {
						const c = [];
						let n = 0;
						for (const g of h)
							g.keybinding &&
								(c[n++] = {
									keybinding: g.keybinding,
									command: g.id,
									commandArgs: g.args,
									when: g.when,
									weight1: g.weight,
									weight2: 0,
									extensionId: g.extensionId || null,
									isBuiltinExtension: g.isBuiltinExtension || !1,
								});
						(this.d = c), (this.e = null);
					}
					registerCommandAndKeybindingRule(h) {
						return (0, C.$Xc)(
							this.registerKeybindingRule(h),
							w.$fk.registerCommand(h),
						);
					}
					g(h, c, n, g, p, o) {
						const f = this.c.push({
							keybinding: h,
							command: c,
							commandArgs: n,
							when: o,
							weight1: g,
							weight2: p,
							extensionId: null,
							isBuiltinExtension: !1,
						});
						return (
							(this.e = null),
							(0, C.$Yc)(() => {
								f(), (this.e = null);
							})
						);
					}
					getDefaultKeybindings() {
						return (
							this.e ||
								((this.e = Array.from(this.c).concat(this.d)), this.e.sort(u)),
							this.e.slice(0)
						);
					}
				}
				(e.$TX = new r()),
					(e.$UX = { EditorModes: "platform.keybindingsRegistry" }),
					E.$Io.add(e.$UX.EditorModes, e.$TX);
				function u(a, h) {
					if (a.weight1 !== h.weight1) return a.weight1 - h.weight1;
					if (a.command && h.command) {
						if (a.command < h.command) return -1;
						if (a.command > h.command) return 1;
					}
					return a.weight2 - h.weight2;
				}
			},
		),
		