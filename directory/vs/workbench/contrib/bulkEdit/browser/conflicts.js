import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/files/common/files.js';
import '../../../../editor/common/services/model.js';
import '../../../../base/common/map.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/event.js';
import '../../../../editor/browser/services/bulkEditService.js';
import './bulkCellEdits.js';
import '../../../../platform/log/common/log.js';
define(
			de[3485],
			he([1, 0, 22, 67, 59, 3, 6, 199, 572, 34]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$_Mc = void 0);
				let u = class {
					constructor(h, c, n, g) {
						(this.a = new w.$Gc()),
							(this.b = new E.$Zc()),
							(this.c = new C.$re()),
							(this.onDidConflict = this.c.event);
						const p = new w.$Gc();
						for (const f of h)
							if (f instanceof d.$tzb) {
								if ((p.set(f.resource, !0), typeof f.versionId == "number")) {
									const b = n.getModel(f.resource);
									b &&
										b.getVersionId() !== f.versionId &&
										(this.a.set(f.resource, !0), this.c.fire(this));
								}
							} else
								f instanceof d.$uzb
									? f.newResource
										? p.set(f.newResource, !0)
										: f.oldResource && p.set(f.oldResource, !0)
									: f instanceof m.$hJb
										? p.set(f.resource, !0)
										: g.warn("UNKNOWN edit type", f);
						this.b.add(
							c.onDidFilesChange((f) => {
								for (const b of p.keys())
									if (!n.getModel(b) && f.contains(b)) {
										this.a.set(b, !0), this.c.fire(this);
										break;
									}
							}),
						);
						const o = (f) => {
							p.has(f.uri) && (this.a.set(f.uri, !0), this.c.fire(this));
						};
						for (const f of n.getModels())
							this.b.add(f.onDidChangeContent(() => o(f)));
					}
					dispose() {
						this.b.dispose(), this.c.dispose();
					}
					list() {
						return [...this.a.keys()];
					}
					hasConflicts() {
						return this.a.size > 0;
					}
				};
				(e.$_Mc = u),
					(e.$_Mc = u = Ne([j(1, t.$ll), j(2, i.$QO), j(3, r.$ik)], u));
			},
		),
		