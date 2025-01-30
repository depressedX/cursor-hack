import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/iterator.js';
import './testTypes.js';
import './testingStates.js';
define(de[1773], he([1, 0, 103, 185, 563]), function (ce /*require*/,
 e /*exports*/,
 t /*iterator*/,
 i /*testTypes*/,
 w /*testingStates*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$D4 = void 0);
			const E = (a) => "getOwnDuration" in a,
				C = (a, h, c = !1) => {
					let n = a.getCurrentComputedState(h);
					if (n === void 0 || c) {
						n = a.getOwnState(h) ?? i.TestResultState.Unset;
						let g = 0;
						const p = (0, w.$C4)();
						for (const o of a.getChildren(h)) {
							const f = C(a, o);
							g++,
								p[f]++,
								(n =
									f === i.TestResultState.Skipped &&
									n === i.TestResultState.Unset
										? i.TestResultState.Skipped
										: (0, w.$z4)(n, f));
						}
						g > m && r.set(h, p), a.setComputedState(h, n);
					}
					return n;
				},
				d = (a, h, c = !1) => {
					let n = a.getCurrentComputedDuration(h);
					if (n === void 0 || c) {
						const g = a.getOwnDuration(h);
						if (g !== void 0) n = g;
						else {
							n = void 0;
							for (const p of a.getChildren(h)) {
								const o = d(a, p);
								o !== void 0 && (n = (n || 0) + o);
							}
						}
						a.setComputedDuration(h, n);
					}
					return n;
				},
				m = 64,
				r = new WeakMap(),
				u = (a, h, c, n = !0) => {
					const g = a.getCurrentComputedState(h),
						p = w.$u4[g],
						o = c ?? C(a, h, !0),
						f = w.$u4[o],
						b = new Set();
					if (f !== p) {
						a.setComputedState(h, o), b.add(h);
						let s = g,
							l = o;
						for (const y of a.getParents(h)) {
							const $ = r.get(y);
							$ && ($[s]--, $[l]++);
							const v = a.getCurrentComputedState(y);
							if (f > p) {
								if ((v !== void 0 && w.$u4[v] >= f) || ($ && $[l] > 1)) break;
								a.setComputedState(y, o), b.add(y);
							} else {
								if (v === void 0 || w.$u4[v] > p || ($ && $[s] > 0)) break;
								(l = C(a, y, !0)), a.setComputedState(y, l), b.add(y);
							}
							s = v;
						}
					}
					if (E(a) && n)
						for (const s of t.Iterable.concat(
							t.Iterable.single(h),
							a.getParents(h),
						)) {
							const l = a.getCurrentComputedDuration(s),
								y = d(a, s, !0);
							if (l === y) break;
							a.setComputedDuration(s, y), b.add(s);
						}
					return b;
				};
			e.$D4 = u;
		}),
		