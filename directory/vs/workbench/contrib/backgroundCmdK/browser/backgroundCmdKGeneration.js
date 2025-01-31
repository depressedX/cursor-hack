import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/uuid.js';
import '../../../../../external/solid/store.js';
import '../../../../base/common/event.js';
import '../../../../editor/common/model.js';
import '../../../../editor/common/services/resolverService.js';
define(
			de[1717],
			he([1, 0, 3, 47, 193, 6, 64, 42]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*uuid*/,
 w /*store*/,
 E /*event*/,
 C /*model*/,
 d /*resolverService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$_ec = void 0);
				let m = class extends t.$1c {
					constructor(u, a, h, c, n, g) {
						super(),
							(this.uri = u),
							(this.initialRange = a),
							(this.backendIdentifier = h),
							(this.payload = c),
							(this.options = n),
							(this.g = g),
							(this.a = !1),
							(this.f = this.D(new E.$re())),
							(this.onStatusChange = this.f.event),
							(this.id = (0, i.$9g)());
						const [p, o] = (0, w.createStore)({ status: "none" }, {});
						(this.store = p), (this.setStore = o), this.h();
					}
					getContexts() {
						return this.options.contexts;
					}
					getInstruction() {
						return this.options.instruction;
					}
					getRangeToGenerate() {
						if (this.b && this.c) {
							const u = this.c.getDecorationRange(this.b);
							if (u) return u;
						}
						return this.options.specificInitialRange ?? this.initialRange;
					}
					get status() {
						return this.store.status;
					}
					set status(u) {
						this.setStore("status", u),
							this.f.fire({ newStatus: u, oldStatus: this.status });
					}
					dispose() {
						this.abortController &&
							!this.abortController.signal.aborted &&
							this.abortController.abort(),
							super.dispose();
					}
					async h() {
						if (this.a) return;
						const u = await this.g.createModelReference(this.uri);
						(this.c = u.object.textEditorModel), u.dispose();
						const a = this.getRangeToGenerate(),
							h = this.c.changeDecorations((c) =>
								c.addDecoration(a, {
									className: "background-cmdk-generation",
									description: "background-cmdk-generation",
									stickiness:
										C.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
								}),
							);
						h && (this.b = h), (this.a = !0);
					}
				};
				(e.$_ec = m), (e.$_ec = m = Ne([j(5, d.$MO)], m));
			},
		)
