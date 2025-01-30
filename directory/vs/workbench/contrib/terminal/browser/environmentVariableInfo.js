import '../../../../../require.js';
import '../../../../../exports.js';
import '../common/terminal.js';
import './terminal.js';
import '../../../../nls.js';
import '../../../../base/common/codicons.js';
import './terminalStatusList.js';
import '../../../../base/common/severity.js';
import '../../../../platform/commands/common/commands.js';
import '../../../services/extensions/common/extensions.js';
define(
		de[3312],
		he([1, 0, 145, 107, 4, 14, 806, 111, 31, 53]),
		function (ce /*require*/,
 e /*exports*/,
 t /*terminal*/,
 i /*terminal*/,
 w /*nls*/,
 E /*codicons*/,
 C /*terminalStatusList*/,
 d /*severity*/,
 m /*commands*/,
 r /*extensions*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$eIb = e.$dIb = void 0),
				(d = xi(d));
			let u = class {
				constructor(p, o, f, b, s) {
					(this.a = p),
						(this.b = o),
						(this.c = f),
						(this.d = b),
						(this.f = s),
						(this.requiresAction = !0);
				}
				g(p) {
					const o = new Set();
					c(o, this.a.added.values()),
						c(o, this.a.removed.values()),
						c(o, this.a.changed.values());
					let f = (0, w.localize)(9965, null);
					return (f += h(this.c, p, this.f, o)), f;
				}
				h() {
					return [
						{
							label: (0, w.localize)(9966, null),
							run: () => this.d.getInstanceFromId(this.b)?.relaunch(),
							commandId: t.TerminalCommandId.Relaunch,
						},
					];
				}
				getStatus(p) {
					return {
						id: C.TerminalStatus.RelaunchNeeded,
						severity: d.default.Warning,
						icon: E.$ak.warning,
						tooltip: this.g(p),
						hoverActions: this.h(),
					};
				}
			};
			(e.$dIb = u), (e.$dIb = u = Ne([j(3, i.$iIb), j(4, r.$q2)], u));
			let a = class {
				constructor(p, o, f) {
					(this.a = p), (this.b = o), (this.c = f), (this.requiresAction = !1);
				}
				d(p) {
					const o = new Set();
					c(o, this.a.getVariableMap(p).values());
					let f = (0, w.localize)(9967, null);
					return (f += h(this.a, p, this.c, o)), f;
				}
				f(p) {
					return [
						{
							label: (0, w.localize)(9968, null),
							run: () =>
								this.b.executeCommand(
									t.TerminalCommandId.ShowEnvironmentContributions,
									p,
								),
							commandId: t.TerminalCommandId.ShowEnvironmentContributions,
						},
					];
				}
				getStatus(p) {
					return {
						id: C.TerminalStatus.EnvironmentVariableInfoChangesActive,
						severity: d.default.Info,
						tooltip: this.d(p),
						hoverActions: this.f(p),
					};
				}
			};
			(e.$eIb = a), (e.$eIb = a = Ne([j(1, m.$ek), j(2, r.$q2)], a));
			function h(g, p, o, f) {
				const b = [
						`
`,
					],
					s = g.getDescriptionMap(void 0),
					l = g.getDescriptionMap(p);
				for (const y of f) {
					const $ = s.get(y);
					$ &&
						(b.push(`
- \`${n(y, o)}\``),
						b.push(`: ${$}`));
					const v = l.get(y);
					if (v) {
						const S = $ ? ` (${(0, w.localize)(9969, null)})` : "";
						b.push(`
- \`${n(y, o)}${S}\``),
							b.push(`: ${v}`);
					}
					!$ &&
						!v &&
						b.push(`
- \`${n(y, o)}\``);
				}
				return b.join("");
			}
			function c(g, p) {
				for (const o of p) for (const f of o) g.add(f.extensionIdentifier);
			}
			function n(g, p) {
				return p.extensions.find((o) => o.id === g)?.displayName || g;
			}
		},
	),
		