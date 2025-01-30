import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../editor/contrib/documentSymbols/browser/outlineModel.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../services/ai/browser/gitContextService.js';
define(
			de[1300],
			he([1, 0, 3, 42, 204, 20, 5, 45, 32, 25, 359]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*resolverService*/,
 w /*outlineModel*/,
 E /*extensions*/,
 C /*instantiation*/,
 d /*reactiveStorageService*/,
 m /*telemetry*/,
 r /*workspace*/,
 u /*gitContextService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Med = e.$Led = void 0),
					(e.$Led = (0, C.$Mi)("cppTypeService"));
				class a {
					constructor(n) {
						(this.a = []), (this.b = n);
					}
					add(n, g) {
						this.remove(n),
							this.a.length >= this.b && this.a.shift(),
							this.a.push({ key: n, value: g });
					}
					get(n) {
						return this.a.find((p) => p.key === n)?.value;
					}
					remove(n) {
						const g = this.a.findIndex((p) => p.key === n);
						g !== -1 && this.a.splice(g, 1);
					}
					clear() {
						this.a.length = 0;
					}
				}
				let h = class extends t.$1c {
					constructor(n, g, p, o, f, b) {
						super(),
							(this.b = n),
							(this.c = g),
							(this.f = p),
							(this.g = o),
							(this.h = f),
							(this.j = b),
							(this.a = []),
							(this.m = new a(100));
					}
					onChangedHints(n, g) {
						const p =
							g?.signatures
								.filter((o) => o.label.length < 5e3)
								.slice(0, 2)
								.map((o) => ({
									label: o.label,
									documentation:
										typeof o.documentation == "string"
											? o.documentation
											: o.documentation?.value,
								})) ?? [];
						this.m.add(n.getId(), p);
					}
					getRelevantType(n) {
						return this.m.get(n.getId()) || [];
					}
				};
				(e.$Med = h),
					(e.$Med = h =
						Ne(
							[
								j(0, w.$9Db),
								j(1, i.$MO),
								j(2, r.$Vi),
								j(3, d.$0zb),
								j(4, m.$km),
								j(5, u.$$Db),
							],
							h,
						)),
					(0, E.$lK)(e.$Led, h, E.InstantiationType.Delayed);
			},
		),
		