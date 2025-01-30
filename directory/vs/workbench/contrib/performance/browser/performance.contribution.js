import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/action/common/actionCommonCategories.js';
import '../../../common/contributions.js';
import '../../../common/editor.js';
import './perfviewEditor.js';
import '../../../services/editor/common/editorService.js';
import '../../../../platform/instantiation/common/instantiationService.js';
import '../../../../base/common/event.js';
import './inputLatencyContrib.js';
define(
			de[3733],
			he([1, 0, 4, 11, 5, 52, 30, 99, 55, 44, 1892, 18, 1615, 6, 3267]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*actions*/,
 w /*instantiation*/,
 E /*lifecycle*/,
 C /*platform*/,
 d /*actionCommonCategories*/,
 m /*contributions*/,
 r /*editor*/,
 u /*perfviewEditor*/,
 a /*editorService*/,
 h /*instantiationService*/,
 c /*event*/,
 n /*inputLatencyContrib*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, m.$s6)(u.$lEc.ID, u.$lEc, { lazy: !0 }),
					C.$Io.as(r.$a1.EditorFactory).registerEditorSerializer(
						u.$mEc.Id,
						class {
							canSerialize() {
								return !0;
							}
							serialize() {
								return "";
							}
							deserialize(g) {
								return g.createInstance(u.$mEc);
							}
						},
					),
					(0, i.$4X)(
						class extends i.$3X {
							constructor() {
								super({
									id: "perfview.show",
									title: (0, t.localize2)(8324, "Startup Performance"),
									category: d.$ck.Developer,
									f1: !0,
								});
							}
							run(g) {
								const p = g.get(a.$IY),
									o = u.$lEc.get();
								return p.openEditor(o.getEditorInput(), { pinned: !0 });
							}
						},
					),
					(0, i.$4X)(
						class extends i.$3X {
							constructor() {
								super({
									id: "perf.insta.printAsyncCycles",
									title: (0, t.localize2)(8325, "Print Service Cycles"),
									category: d.$ck.Developer,
									f1: !0,
								});
							}
							run(p) {
								const o = p.get(w.$Li);
								if (o instanceof h.$Yr) {
									const f = o._globalGraph?.findCycleSlow();
									f
										? console.warn("CYCLE", f)
										: console.warn("YEAH, no more cycles");
								}
							}
						},
					),
					(0, i.$4X)(
						class extends i.$3X {
							constructor() {
								super({
									id: "perf.insta.printTraces",
									title: (0, t.localize2)(8326, "Print Service Traces"),
									category: d.$ck.Developer,
									f1: !0,
								});
							}
							run() {
								if (h.$Zr.all.size === 0) {
									console.log(
										"Enable via `instantiationService.ts#_enableAllTracing`",
									);
									return;
								}
								for (const p of h.$Zr.all) console.log(p);
							}
						},
					),
					(0, i.$4X)(
						class extends i.$3X {
							constructor() {
								super({
									id: "perf.event.profiling",
									title: (0, t.localize2)(8327, "Print Emitter Profiles"),
									category: d.$ck.Developer,
									f1: !0,
								});
							}
							run() {
								if (c.$ne.all.size === 0) {
									console.log(
										"USE `EmitterOptions._profName` to enable profiling",
									);
									return;
								}
								for (const p of c.$ne.all)
									console.log(
										`${p.name}: ${p.invocationCount} invocations COST ${p.elapsedOverall}ms, ${p.listenerCount} listeners, avg cost is ${p.durations.reduce((o, f) => o + f, 0) / p.durations.length}ms`,
									);
							}
						},
					),
					C.$Io
						.as(m.Extensions.Workbench)
						.registerWorkbenchContribution(n.$nEc, E.LifecyclePhase.Eventually);
			},
		),
		