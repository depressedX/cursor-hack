import '../../../require.js';
import '../../../exports.js';
import './platform.js';
import '../../nls.js';
define(de[592], he([1, 0, 12, 4]), function (ce /*require*/,
 e /*exports*/,
 t /*platform*/,
 i /*nls*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$5ob = e.$4ob = e.$3ob = e.$2ob = e.$1ob = void 0),
				(i = mt(i));
			class w {
				constructor(d, m, r = m) {
					(this.modifierLabels = [null]),
						(this.modifierLabels[t.OperatingSystem.Macintosh] = d),
						(this.modifierLabels[t.OperatingSystem.Windows] = m),
						(this.modifierLabels[t.OperatingSystem.Linux] = r);
				}
				toLabel(d, m, r) {
					if (m.length === 0) return null;
					const u = [];
					for (let a = 0, h = m.length; a < h; a++) {
						const c = m[a],
							n = r(c);
						if (n === null) return null;
						u[a] = E(c, n, this.modifierLabels[d]);
					}
					return u.join(" ");
				}
			}
			(e.$1ob = w),
				(e.$2ob = new w(
					{
						ctrlKey: "\u2303",
						shiftKey: "\u21E7",
						altKey: "\u2325",
						metaKey: "\u2318",
						separator: "",
					},
					{
						ctrlKey: i.localize(122, null),
						shiftKey: i.localize(123, null),
						altKey: i.localize(124, null),
						metaKey: i.localize(125, null),
						separator: "+",
					},
					{
						ctrlKey: i.localize(126, null),
						shiftKey: i.localize(127, null),
						altKey: i.localize(128, null),
						metaKey: i.localize(129, null),
						separator: "+",
					},
				)),
				(e.$3ob = new w(
					{
						ctrlKey: i.localize(130, null),
						shiftKey: i.localize(131, null),
						altKey: i.localize(132, null),
						metaKey: i.localize(133, null),
						separator: "+",
					},
					{
						ctrlKey: i.localize(134, null),
						shiftKey: i.localize(135, null),
						altKey: i.localize(136, null),
						metaKey: i.localize(137, null),
						separator: "+",
					},
					{
						ctrlKey: i.localize(138, null),
						shiftKey: i.localize(139, null),
						altKey: i.localize(140, null),
						metaKey: i.localize(141, null),
						separator: "+",
					},
				)),
				(e.$4ob = new w(
					{
						ctrlKey: "Ctrl",
						shiftKey: "Shift",
						altKey: "Alt",
						metaKey: "Cmd",
						separator: "+",
					},
					{
						ctrlKey: "Ctrl",
						shiftKey: "Shift",
						altKey: "Alt",
						metaKey: "Super",
						separator: "+",
					},
				)),
				(e.$5ob = new w(
					{
						ctrlKey: "ctrl",
						shiftKey: "shift",
						altKey: "alt",
						metaKey: "cmd",
						separator: "+",
					},
					{
						ctrlKey: "ctrl",
						shiftKey: "shift",
						altKey: "alt",
						metaKey: "win",
						separator: "+",
					},
					{
						ctrlKey: "ctrl",
						shiftKey: "shift",
						altKey: "alt",
						metaKey: "meta",
						separator: "+",
					},
				));
			function E(C, d, m) {
				if (d === null) return "";
				const r = [];
				return (
					C.ctrlKey && r.push(m.ctrlKey),
					C.shiftKey && r.push(m.shiftKey),
					C.altKey && r.push(m.altKey),
					C.metaKey && r.push(m.metaKey),
					d !== "" && r.push(d),
					r.join(m.separator)
				);
			}
		}),
		