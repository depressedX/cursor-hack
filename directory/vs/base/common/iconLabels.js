define(de[274], he([1, 0, 132, 37, 26]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$9k = m),
				(e.$0k = u),
				(e.$$k = h),
				(e.$_k = c),
				(e.$al = g),
				(e.$bl = p);
			const E = "$(",
				C = new RegExp(
					`\\$\\(${w.ThemeIcon.iconNameExpression}(?:${w.ThemeIcon.iconModifierExpression})?\\)`,
					"g",
				),
				d = new RegExp(`(\\\\)?${C.source}`, "g");
			function m(o) {
				return o.replace(d, (f, b) => (b ? f : `\\${f}`));
			}
			const r = new RegExp(`\\\\${C.source}`, "g");
			function u(o) {
				return o.replace(r, (f) => `\\${f}`);
			}
			const a = new RegExp(`(\\s)?(\\\\)?${C.source}(\\s)?`, "g");
			function h(o) {
				return o.indexOf(E) === -1
					? o
					: o.replace(a, (f, b, s, l) => (s ? f : b || l || ""));
			}
			function c(o) {
				return o ? o.replace(/\$\((.*?)\)/g, (f, b) => ` ${b} `).trim() : "";
			}
			const n = new RegExp(`\\$\\(${w.ThemeIcon.iconNameCharacter}+\\)`, "g");
			function g(o) {
				n.lastIndex = 0;
				let f = "";
				const b = [];
				let s = 0;
				for (;;) {
					const l = n.lastIndex,
						y = n.exec(o),
						$ = o.substring(l, y?.index);
					if ($.length > 0) {
						f += $;
						for (let v = 0; v < $.length; v++) b.push(s);
					}
					if (!y) break;
					s += y[0].length;
				}
				return { text: f, iconOffsets: b };
			}
			function p(o, f, b = !1) {
				const { text: s, iconOffsets: l } = f;
				if (!l || l.length === 0) return (0, t.$Zk)(o, s, b);
				const y = (0, i.$tf)(s, " "),
					$ = s.length - y.length,
					v = (0, t.$Zk)(o, y, b);
				if (v)
					for (const S of v) {
						const I = l[S.start + $] + $;
						(S.start += I), (S.end += I);
					}
				return v;
			}
		}),
		