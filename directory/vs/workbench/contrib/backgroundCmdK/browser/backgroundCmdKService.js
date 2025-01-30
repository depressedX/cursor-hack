import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../base/common/lifecycle.js';
import './backgroundCmdKSequence.js';
import '../../../../platform/instantiation/common/extensions.js';
import './backgroundCmdKGeneration.js';
import '../../../../base/common/event.js';
import './backends/hyperModeBackend.js';
import '../../../services/ai/browser/aiMiscServices.js';
import './backends/coalesceChainBackend.js';
import './backends/regularCmdKBackend.js';
import './backends/finetunedInstructionsBackend.js';
import './backends/cursorMotionBackend.js';
import './backends/chatAndApplyBackend.js';
define(
			de[3990],
			he([
				1, 0, 5, 3, 3222, 20, 1717, 6, 3988, 137, 3948, 3989, 3950, 3949, 3947,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*instantiation*/,
 i /*lifecycle*/,
 w /*backgroundCmdKSequence*/,
 E /*extensions*/,
 C /*backgroundCmdKGeneration*/,
 d /*event*/,
 m /*hyperModeBackend*/,
 r /*aiMiscServices*/,
 u /*coalesceChainBackend*/,
 a /*regularCmdKBackend*/,
 h /*finetunedInstructionsBackend*/,
 c /*cursorMotionBackend*/,
 n /*chatAndApplyBackend*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Bed = void 0);
				let g = class extends i.$1c {
					constructor(o) {
						super(),
							(this.h = o),
							(this.a = this.D(new d.$re())),
							(this.onSequenceAdd = this.a.event),
							(this.b = this.D(new d.$re())),
							(this.onSequenceStatusChange = this.b.event),
							(this.c = this.D(new d.$re())),
							(this.onGenerationStatusChange = this.c.event),
							(this.g = {}),
							(this.f = {
								"hyper-mode": this.h.createInstance(m.$0ec),
								"coalesce-chain": this.h.createInstance(u.$n7b),
								"finetuned-instructions": this.h.createInstance(h.$p7b),
								"chat-and-apply": this.h.createInstance(n.$m7b),
								"regular-cmdk": this.h.createInstance(a.$$ec),
								"cursor-motion": this.h.createInstance(c.$o7b),
							});
					}
					removeSequence(o) {
						const f = this.g[o];
						f && (f.dispose(), delete this.g[o]);
					}
					dispose() {
						super.dispose();
						for (const o of Object.values(this.g)) o.dispose();
						for (const o of Object.values(this.f)) o?.dispose();
					}
					getSequenceById(o) {
						return this.g[o];
					}
					getGenerationById(o) {
						for (const f of Object.values(this.g)) {
							const b = f.findGenerationById(o);
							if (b) return b;
						}
					}
					createSequence(o, f, b, s = {}) {
						const l = this.h.createInstance(w.$afc, o, f, b, s);
						return (
							(this.g[l.id] = l),
							this.D(
								l.onStatusChange((y) => {
									this.b.fire({
										oldStatus: y.oldStatus,
										newStatus: y.newStatus,
										sequence: l,
									});
								}),
							),
							this.D(
								l.onGenerationStatusChange((y) => {
									this.c.fire({
										generation: y.generation,
										newStatus: y.newStatus,
										oldStatus: y.oldStatus,
									});
								}),
							),
							this.a.fire(l),
							l
						);
					}
					async runStandaloneGeneration(o, f, b, s, l) {
						const y = this.h.createInstance(C.$_ec, o, f, b, l, s),
							$ = await this.runGeneration(y);
						return y.dispose(), $;
					}
					async runGeneration(o) {
						const f = this.f[o.backendIdentifier];
						if (!f)
							return (
								console.error("Backend not found", o.backendIdentifier),
								Promise.resolve(void 0)
							);
						const b = this.getSequenceById(o.sequenceId ?? ""),
							s = () => {
								o.status = "aborted";
							};
						o.payload.abortController.signal.addEventListener("abort", s),
							(o.status = "generating");
						const l = await f.run(o, o.payload, b);
						return (
							l?.finalResultPromise
								.then(() => {
									o.status = "completed";
								})
								.catch(() => {
									o.status = "aborted";
								}),
							o.payload.abortController.signal.removeEventListener("abort", s),
							l
						);
					}
				};
				(e.$Bed = g),
					(e.$Bed = g = Ne([j(0, t.$Li)], g)),
					(0, E.$lK)(r.$qfc, g, E.InstantiationType.Delayed);
			},
		),
		