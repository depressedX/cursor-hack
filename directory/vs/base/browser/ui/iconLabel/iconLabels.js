import '../../../../../require.js';
import '../../../../../exports.js';
import '../../dom.js';
import '../../../common/themables.js';
define(de[182], he([1, 0, 7, 26]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Sib = E),
				(e.$Tib = C),
				(t = mt(t));
			const w = new RegExp(
				`(\\\\)?\\$\\((${i.ThemeIcon.iconNameExpression}(?:${i.ThemeIcon.iconModifierExpression})?)\\)`,
				"g",
			);
			function E(d) {
				const m = new Array();
				let r,
					u = 0,
					a = 0;
				for (; (r = w.exec(d)) !== null; ) {
					(a = r.index || 0),
						u < a && m.push(d.substring(u, a)),
						(u = (r.index || 0) + r[0].length);
					const [, h, c] = r;
					m.push(h ? `$(${c})` : C({ id: c }));
				}
				return u < d.length && m.push(d.substring(u)), m;
			}
			function C(d) {
				const m = t.$("span");
				return m.classList.add(...i.ThemeIcon.asClassNameArray(d)), m;
			}
		}),
		