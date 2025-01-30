import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../common/memento.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/product/common/productService.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/assignment/common/assignmentService.js';
import '../../../common/configuration.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../../platform/environment/common/environment.js';
define(
			de[708],
			he([1, 0, 4, 5, 282, 32, 21, 20, 10, 62, 30, 2816, 224, 81, 113]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*instantiation*/,
 w /*memento*/,
 E /*telemetry*/,
 C /*storage*/,
 d /*extensions*/,
 m /*configuration*/,
 r /*productService*/,
 u /*platform*/,
 a /*assignmentService*/,
 h /*configuration*/,
 c /*configurationRegistry*/,
 n /*environment*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$i4b = e.$h4b = void 0),
					(e.$h4b = (0, i.$Mi)("WorkbenchAssignmentService"));
				class g {
					constructor(s) {
						(this.b = s),
							(this.a = s.getMemento(
								C.StorageScope.APPLICATION,
								C.StorageTarget.MACHINE,
							));
					}
					async getValue(s, l) {
						return (await this.a[s]) || l;
					}
					setValue(s, l) {
						(this.a[s] = l), this.b.saveMemento();
					}
				}
				class p {
					constructor(s, l) {
						(this.b = s), (this.c = l);
					}
					get assignmentContext() {
						return this.a?.split(";");
					}
					setSharedProperty(s, l) {
						s === this.c.tasConfig?.assignmentContextTelemetryPropertyName &&
							(this.a = l),
							this.b.setExperimentProperty(s, l);
					}
					postEvent(s, l) {
						const y = {};
						for (const [$, v] of l.entries()) y[$] = v;
						this.b.publicLog(s, y);
					}
				}
				let o = class extends a.$g4b {
					constructor(s, l, y, $, v) {
						super(
							s.machineId,
							y,
							$,
							v,
							new p(s, $),
							new g(new w.$eEb("experiment.service.memento", l)),
						),
							(this.l = s);
					}
					get d() {
						return this.f.getValue("workbench.enableExperiments") === !0;
					}
					async getTreatment(s) {
						const l = await super.getTreatment(s);
						return (
							this.l.publicLog2("tasClientReadTreatmentComplete", {
								treatmentName: s,
								treatmentValue: JSON.stringify(l),
							}),
							l
						);
					}
					async getCurrentExperiments() {
						if (this.a && this.d)
							return await this.a, this.i?.assignmentContext;
					}
				};
				(e.$i4b = o),
					(e.$i4b = o =
						Ne(
							[j(0, E.$km), j(1, C.$lq), j(2, m.$gj), j(3, r.$Bk), j(4, n.$Ti)],
							o,
						)),
					(0, d.$lK)(e.$h4b, o, d.InstantiationType.Delayed),
					u.$Io
						.as(c.$No.Configuration)
						.registerConfiguration({
							...h.$v6,
							properties: {
								"workbench.enableExperiments": {
									type: "boolean",
									description: (0, t.localize)(12090, null),
									default: !0,
									scope: c.ConfigurationScope.APPLICATION,
									restricted: !0,
									tags: ["usesOnlineServices"],
								},
							},
						});
			},
		),
		