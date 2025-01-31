import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/uuid.js';
import './backgroundCmdKGeneration.js';
import '../../../../base/common/event.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../services/ai/browser/aiMiscServices.js';
import '../../../../../external/solid/store.js';
import '../../../../editor/common/model.js';
import '../../../../editor/common/services/resolverService.js';
define(
			de[3222],
			he([1, 0, 3, 47, 1717, 6, 5, 137, 193, 64, 42]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*uuid*/,
 w /*backgroundCmdKGeneration*/,
 E /*event*/,
 C /*instantiation*/,
 d /*aiMiscServices*/,
 m /*store*/,
 r /*model*/,
 u /*resolverService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$afc = void 0);
				const a = { shouldAutoSubmit: !0 };
				let h = class extends t.$1c {
					constructor(n, g, p, o, f, b, s) {
						super(),
							(this.uri = n),
							(this.initialRange = g),
							(this.source = p),
							(this.h = f),
							(this.j = b),
							(this.m = s),
							(this.generations = []),
							(this.a = !1),
							(this.f = this.D(new E.$re())),
							(this.onStatusChange = this.f.event),
							(this.g = this.D(new E.$re())),
							(this.onGenerationStatusChange = this.g.event);
						const [l, y] = (0, m.createStore)({ status: "none" }, {});
						(this.store = l),
							(this.setStore = y),
							(this.options = { ...a, ...o }),
							(this.id = (0, i.$9g)()),
							this.q();
					}
					getRangeToGenerate() {
						if (this.b && this.c) {
							const n = this.c.getDecorationRange(this.b);
							if (n) return n;
						}
						return this.initialRange;
					}
					get lastGenerationId() {
						return this.store.lastGenerationId;
					}
					get n() {
						return this.store.status;
					}
					dispose() {
						super.dispose(), this.generations.forEach((n) => n.dispose());
					}
					set n(n) {
						const g = this.n;
						this.setStore("status", n),
							g !== n && this.f.fire({ newStatus: n, oldStatus: g });
					}
					async run() {
						return this.j.runGeneration(
							this.generations[this.generations.length - 1],
						);
					}
					async add(n, g, p) {
						this.n === "none" && (this.n = "initial");
						const o = this.h.createInstance(
							w.$_ec,
							this.uri,
							this.getRangeToGenerate(),
							n,
							g,
							p,
						);
						if (
							((o.sequenceId = this.id),
							(o.abortController = g.abortController),
							this.D(
								o.onStatusChange((f) => {
									this.g.fire({
										generation: o,
										newStatus: f.newStatus,
										oldStatus: f.oldStatus,
									});
								}),
							),
							this.generations.push(o),
							this.setStore("lastGenerationId", o.id),
							this.options.shouldAutoSubmit)
						)
							return this.j.runGeneration(o);
					}
					followUp(n, g, p) {
						if (this.n === "none" || this.generations.length === 0) {
							console.error(
								"[bg-cmdk] cannot follow-up a sequence that has not been started. call 'add' instead",
							);
							return;
						}
						(this.n = "follow-up"), this.add(n, g, p);
					}
					findGenerationById(n) {
						return this.generations.find((g) => g.id === n);
					}
					async q() {
						if (this.a) return;
						const n = await this.m.createModelReference(this.uri);
						(this.c = n.object.textEditorModel), n.dispose();
						const g = this.initialRange,
							p = this.c.changeDecorations((o) =>
								o.addDecoration(g, {
									description: "background-cmdk-sequence",
									className: "background-cmdk-sequence",
									stickiness:
										r.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
								}),
							);
						p && (this.b = p), (this.a = !0);
					}
				};
				(e.$afc = h),
					(e.$afc = h = Ne([j(4, C.$Li), j(5, d.$qfc), j(6, u.$MO)], h));
			},
		)
