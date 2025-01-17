import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import '../../../base/common/iterator.js';
import '../../../base/common/lifecycle.js';
import '../../instantiation/common/instantiation.js';
define(de[940], he([1, 0, 6, 103, 3, 5]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Mo = e.$Lo = e.$Ko = void 0),
				(e.$Ko = (0, E.$Mi)("policy"));
			class C extends w.$1c {
				constructor() {
					super(...arguments),
						(this.f = {}),
						(this.g = new Map()),
						(this.h = this.D(new t.$re())),
						(this.onDidChange = this.h.event);
				}
				async updatePolicyDefinitions(r) {
					const u = Object.keys(this.f).length;
					return (
						(this.f = { ...r, ...this.f }),
						u !== Object.keys(this.f).length && (await this.j(r)),
						i.Iterable.reduce(
							this.g.entries(),
							(a, [h, c]) => ({ ...a, [h]: c }),
							{},
						)
					);
				}
				getPolicyValue(r) {
					return this.g.get(r);
				}
				serialize() {
					return i.Iterable.reduce(
						Object.entries(this.f),
						(r, [u, a]) => ({
							...r,
							[u]: { definition: a, value: this.g.get(u) },
						}),
						{},
					);
				}
			}
			e.$Lo = C;
			class d {
				constructor() {
					this.onDidChange = t.Event.None;
				}
				async updatePolicyDefinitions() {
					return {};
				}
				getPolicyValue() {}
				serialize() {}
			}
			e.$Mo = d;
		}),
		