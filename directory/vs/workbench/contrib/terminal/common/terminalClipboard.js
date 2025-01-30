import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/terminal/common/terminal.js';
define(de[3149], he([1, 0, 4, 10, 57, 117]), function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*configuration*/,
 w /*dialogs*/,
 E /*terminal*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$eVc = C);
			async function C(d, m, r) {
				const u = d.get(i.$gj),
					a = d.get(w.$GO),
					h = m.split(/\r?\n/);
				if (h.length === 1) return !0;
				function c(s) {
					return typeof s == "string" &&
						(s === "auto" || s === "always" || s === "never")
						? s
						: typeof s == "boolean"
							? s
								? "auto"
								: "never"
							: "auto";
				}
				const n = c(
					u.getValue(E.TerminalSettingId.EnableMultiLinePasteWarning),
				);
				if (n === "never") return !0;
				if (n === "auto") {
					if (r) return !0;
					const s = m.split(/\r?\n/);
					if (s.length === 2 && s[1].trim().length === 0) return !0;
				}
				const g = 3,
					p = 30;
				let o = (0, t.localize)(10203, null);
				for (let s = 0; s < Math.min(h.length, g); s++) {
					const l = h[s],
						y = l.length > p ? `${l.slice(0, p)}\u2026` : l;
					o += `
${y}`;
				}
				h.length > g &&
					(o += `
\u2026`);
				const { result: f, checkboxChecked: b } = await a.prompt({
					message: (0, t.localize)(10204, null, h.length),
					detail: o,
					type: "warning",
					buttons: [
						{
							label: (0, t.localize)(10205, null),
							run: () => ({ confirmed: !0, singleLine: !1 }),
						},
						{
							label: (0, t.localize)(10206, null),
							run: () => ({ confirmed: !0, singleLine: !0 }),
						},
					],
					cancelButton: !0,
					checkbox: { label: (0, t.localize)(10207, null) },
				});
				return f
					? (f.confirmed &&
							b &&
							(await u.updateValue(
								E.TerminalSettingId.EnableMultiLinePasteWarning,
								!1,
							)),
						f.singleLine
							? { modifiedText: m.replace(/\r?\n/g, "") }
							: f.confirmed)
					: !1;
			}
		}),
		