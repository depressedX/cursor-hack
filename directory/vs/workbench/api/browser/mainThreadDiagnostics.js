import '../../../../require.js';
import '../../../../exports.js';
import '../../../platform/markers/common/markers.js';
import '../../../base/common/uri.js';
import '../common/extHost.protocol.js';
import '../../services/extensions/common/extHostCustomers.js';
import '../../../platform/uriIdentity/common/uriIdentity.js';
define(
			de[3344],
			he([1, 0, 90, 9, 88, 101, 68]),
			function (ce /*require*/,
 e /*exports*/,
 t /*markers*/,
 i /*uri*/,
 w /*extHost.protocol*/,
 E /*extHostCustomers*/,
 C /*uriIdentity*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Zmc = void 0);
				let d = class {
					constructor(r, u, a) {
						(this.d = u),
							(this.e = a),
							(this.a = new Set()),
							(this.b = r.getProxy(w.$mbb.ExtHostDiagnostics)),
							(this.c = this.d.onMarkerChanged(this.f, this));
					}
					dispose() {
						this.c.dispose(),
							this.a.forEach((r) => this.d.changeAll(r, [])),
							this.a.clear();
					}
					f(r) {
						const u = [];
						for (const a of r) {
							const h = this.d.read({ resource: a });
							if (h.length === 0) u.push([a, []]);
							else {
								const c = h.filter((n) => !this.a.has(n.owner));
								c.length > 0 && u.push([a, c]);
							}
						}
						u.length > 0 && this.b.$acceptMarkersChange(u);
					}
					$changeMany(r, u) {
						for (const a of u) {
							const [h, c] = a;
							if (c)
								for (const n of c) {
									if (n.relatedInformation)
										for (const g of n.relatedInformation)
											g.resource = i.URI.revive(g.resource);
									n.code &&
										typeof n.code != "string" &&
										(n.code.target = i.URI.revive(n.code.target));
								}
							this.d.changeOne(r, this.e.asCanonicalUri(i.URI.revive(h)), c);
						}
						this.a.add(r);
					}
					$clear(r) {
						this.d.changeAll(r, []), this.a.delete(r);
					}
				};
				(e.$Zmc = d),
					(e.$Zmc = d =
						Ne(
							[
								(0, E.$tmc)(w.$lbb.MainThreadDiagnostics),
								j(1, t.$aM),
								j(2, C.$Vl),
							],
							d,
						));
			},
		)
