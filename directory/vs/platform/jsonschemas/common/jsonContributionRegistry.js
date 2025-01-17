import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import '../../../base/common/jsonSchema.js';
import '../../registry/common/platform.js';
define(de[250], he([1, 0, 6, 2217, 30]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Jo = void 0),
				(w = mt(w)),
				(e.$Jo = { JSONContribution: "base.contributions.json" });
			function E(m) {
				return m.length > 0 && m.charAt(m.length - 1) === "#"
					? m.substring(0, m.length - 1)
					: m;
			}
			class C {
				constructor() {
					(this.b = new t.$re()),
						(this.onDidChangeSchema = this.b.event),
						(this.a = {});
				}
				registerSchema(r, u) {
					(this.a[E(r)] = u), this.b.fire(r);
				}
				notifySchemaChanged(r) {
					this.b.fire(r);
				}
				getSchemaContributions() {
					return { schemas: this.a };
				}
				getSchemaContent(r) {
					const u = this.a[r];
					return u ? (0, i.$dk)(u) : void 0;
				}
				hasSchemaContent(r) {
					return !!this.a[r];
				}
			}
			const d = new C();
			w.$Io.add(e.$Jo.JSONContribution, d);
		}),
		