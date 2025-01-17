import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/errors.js';
import '../../extensions/common/extensions.js';
define(de[1200], he([1, 0, 29, 109]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$a2 = e.$_1 = void 0);
			class w {
				constructor() {
					(this.a = new Map()), (this.b = new WeakMap());
				}
				register(C, d) {
					this.a.set(C, d);
				}
				readActivationEvents(C) {
					return this.b.has(C) || this.b.set(C, this.c(C)), this.b.get(C);
				}
				createActivationEventsMap(C) {
					const d = Object.create(null);
					for (const m of C) {
						const r = this.readActivationEvents(m);
						r.length > 0 && (d[i.$Gn.toKey(m.identifier)] = r);
					}
					return d;
				}
				c(C) {
					if (typeof C.main > "u" && typeof C.browser > "u") return [];
					const d = Array.isArray(C.activationEvents)
						? C.activationEvents.slice(0)
						: [];
					for (let m = 0; m < d.length; m++)
						d[m] === "onUri" && (d[m] = `onUri:${i.$Gn.toKey(C.identifier)}`);
					if (!C.contributes) return d;
					for (const m in C.contributes) {
						const r = this.a.get(m);
						if (!r) continue;
						const u = C.contributes[m],
							a = Array.isArray(u) ? u : [u];
						try {
							r(a, d);
						} catch (h) {
							(0, t.$4)(h);
						}
					}
					return d;
				}
			}
			(e.$_1 = w), (e.$a2 = new w());
		});
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	