import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/arrays.js';
import '../../../base/common/lifecycle.js';
import '../../registry/common/platform.js';
define(de[348], he([1, 0, 24, 3, 30]), function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/,
 i /*lifecycle*/,
 w /*platform*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$2r = e.$1r = e.DefaultQuickAccessFilterValue = void 0);
			var E;
			(function (d) {
				(d[(d.PRESERVE = 0)] = "PRESERVE"), (d[(d.LAST = 1)] = "LAST");
			})(E || (e.DefaultQuickAccessFilterValue = E = {})),
				(e.$1r = { Quickaccess: "workbench.contributions.quickaccess" });
			class C {
				constructor() {
					(this.a = []), (this.b = void 0);
				}
				registerQuickAccessProvider(m) {
					return (
						m.prefix.length === 0 ? (this.b = m) : this.a.push(m),
						this.a.sort((r, u) => u.prefix.length - r.prefix.length),
						(0, i.$Yc)(() => {
							this.a.splice(this.a.indexOf(m), 1),
								this.b === m && (this.b = void 0);
						})
					);
				}
				getQuickAccessProviders() {
					return (0, t.$Lb)([this.b, ...this.a]);
				}
				getQuickAccessProvider(m) {
					return (
						(m && this.a.find((u) => m.startsWith(u.prefix))) ||
						void 0 ||
						this.b
					);
				}
				clear() {
					const m = [...this.a],
						r = this.b;
					return (
						(this.a = []),
						(this.b = void 0),
						() => {
							(this.a = m), (this.b = r);
						}
					);
				}
			}
			(e.$2r = C), w.$Io.add(e.$1r.Quickaccess, new C());
		})
