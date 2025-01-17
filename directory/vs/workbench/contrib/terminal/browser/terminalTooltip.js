import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/terminal/common/capabilities/capabilities.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/htmlContent.js';
define(de[1261], he([1, 0, 4, 189, 24, 94]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$ZUc = C),
				(e.$1Uc = d),
				(e.$2Uc = m);
			function C(r) {
				let u = "";
				const a = r.statusList.statuses,
					h = [];
				for (const p of a)
					(u += `

---

${p.icon ? `$(${p.icon?.id}) ` : ""}${p.tooltip || p.id}`),
						p.hoverActions && h.push(...p.hoverActions);
				const c = m(r, !0),
					n = d(r, !0);
				return {
					content: new E.$cl(r.title + c + n + u, { supportThemeIcons: !0 }),
					actions: h,
				};
			}
			function d(r, u) {
				const a = [];
				r.capabilities.has(i.TerminalCapability.CommandDetection) &&
					a.push(i.TerminalCapability.CommandDetection),
					r.capabilities.has(i.TerminalCapability.CwdDetection) &&
						a.push(i.TerminalCapability.CwdDetection);
				let h = "";
				return (
					a.length > 0
						? (h += `${
								u
									? `

---

`
									: `

`
							}${(0, t.localize)(10162, null)}`)
						: r.shellLaunchConfig.ignoreShellIntegration
							? (h += `${
									u
										? `

---

`
										: `

`
								}${(0, t.localize)(10163, null)}`)
							: r.usedShellIntegrationInjection &&
								(h += `${
									u
										? `

---

`
										: `

`
								}${(0, t.localize)(10164, null)}`),
					h
				);
			}
			function m(r, u) {
				const a = [];
				if (
					(r.processId &&
						r.processId > 0 &&
						a.push(
							(0, t.localize)(10165, null, "PID", r.processId) +
								`
`,
						),
					r.shellLaunchConfig.executable)
				) {
					let h = r.shellLaunchConfig.executable;
					const c = (0, w.$6b)(r.injectedArgs || r.shellLaunchConfig.args || [])
						.map((n) => `'${n}'`)
						.join(" ");
					c && (h += ` ${c}`), a.push((0, t.localize)(10166, null, h));
				}
				return a.length
					? `${
							u
								? `

---

`
								: `

`
						}${a.join(`
`)}`
					: "";
			}
		}),
		