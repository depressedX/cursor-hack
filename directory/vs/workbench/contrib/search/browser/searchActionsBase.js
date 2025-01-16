define(de[483], he([1, 0, 7, 4, 405, 186]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$oOc = void 0),
				(e.$pOc = C),
				(e.$qOc = d),
				(e.$rOc = m),
				(e.$sOc = r),
				(e.$tOc = u),
				(e.$uOc = h),
				(t = mt(t)),
				(i = mt(i)),
				(e.$oOc = i.localize2(9226, "Search"));
			function C(n) {
				const g = m(n);
				return !!(g && t.$Lgb(g.getContainer()));
			}
			function d(n, g) {
				return c(n, g);
			}
			function m(n) {
				return n.getActiveViewWithId(E.$l7);
			}
			function r(n, g, p) {
				let o = n
					.getSelection()
					.filter((f) => f !== null)
					.sort((f, b) => (0, w.$PNc)(f, b, p.sortOrder));
				return g && !(o.length > 1 && o.includes(g)) && (o = [g]), o;
			}
			function u(n, g) {
				return g ? !g || n.includes(g) || a(n, g) : !1;
			}
			function a(n, g) {
				for (const p of n)
					if (
						(p instanceof w.$INc &&
							g instanceof w.$FNc &&
							p.matches().includes(g)) ||
						(p instanceof w.$JNc &&
							((g instanceof w.$INc && p.getDownstreamFileMatch(g.resource)) ||
								(g instanceof w.$FNc &&
									p.getDownstreamFileMatch(g.parent().resource))))
					)
						return !0;
				return !1;
			}
			function h(n, g) {
				return n.openView(E.$l7, g).then((p) => p ?? void 0);
			}
			function c(n, g) {
				return g ? n + " (" + g.getLabel() + ")" : n;
			}
		}),
		