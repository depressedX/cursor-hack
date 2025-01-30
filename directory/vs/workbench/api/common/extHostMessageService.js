import '../../../../require.js';
import '../../../../exports.js';
import './extHost.protocol.js';
import '../../../platform/log/common/log.js';
import '../../services/extensions/common/extensions.js';
define(Pe[547], Ne([1, 0, 6, 14, 29]), function (we, t, e, r, S) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }), (t.$Mid = void 0);
			function N(I) {
				return I && I.title;
			}
			let P = class {
				constructor(l, n) {
					(this.b = n), (this.a = l.getProxy(e.$lbb.MainThreadMessageService));
				}
				showMessage(l, n, p, y, d) {
					const k = {
						source: {
							identifier: l.identifier,
							label: l.displayName || l.name,
						},
					};
					let g;
					typeof y == "string" || N(y)
						? (g = [y, ...d])
						: ((k.modal = y?.modal),
							(k.useCustom = y?.useCustom),
							(k.detail = y?.detail),
							(g = d)),
						k.useCustom && (0, S.$u2)(l, "resolvers");
					const c = [];
					let h = !1;
					for (let $ = 0; $ < g.length; $++) {
						const T = g[$];
						if (typeof T == "string")
							c.push({ title: T, handle: $, isCloseAffordance: !1 });
						else if (typeof T == "object") {
							const { title: a, isCloseAffordance: u } = T;
							c.push({ title: a, isCloseAffordance: !!u, handle: $ }),
								u &&
									(h
										? this.b.warn(
												`[${l.identifier}] Only one message item can have 'isCloseAffordance':`,
												T,
											)
										: (h = !0));
						} else this.b.warn(`[${l.identifier}] Invalid message item:`, T);
					}
					return this.a.$showMessage(n, p, k, c).then(($) => {
						if (typeof $ == "number") return g[$];
					});
				}
			};
			(t.$Mid = P), (t.$Mid = P = wt([rt(1, r.$ik)], P));
		}),
		