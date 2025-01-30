import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/uuid.js';
import '../../../../../editor/common/model/prefixSumComputer.js';
import '../viewModel/cellOutputViewModel.js';
import '../../common/notebookService.js';
define(
			de[3478],
			he([1, 0, 6, 3, 47, 589, 1840, 161]),
			function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*lifecycle*/,
 w /*uuid*/,
 E /*prefixSumComputer*/,
 C /*cellOutputViewModel*/,
 d /*notebookService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$JEc = void 0);
				let m = class extends i.$1c {
					get id() {
						return this.a;
					}
					get outputs() {
						return this.textModel.outputs;
					}
					get language() {
						return this.textModel.language;
					}
					get metadata() {
						return this.textModel.metadata;
					}
					get uri() {
						return this.textModel.uri;
					}
					get handle() {
						return this.textModel.handle;
					}
					get outputIsHovered() {
						return this.c;
					}
					set outputIsHovered(u) {
						(this.c = u), this.b.fire({ outputIsHoveredChanged: !0 });
					}
					get outputIsFocused() {
						return this.f;
					}
					set outputIsFocused(u) {
						(this.f = u), this.b.fire({ outputIsFocusedChanged: !0 });
					}
					get inputInOutputIsFocused() {
						return this.g;
					}
					set inputInOutputIsFocused(u) {
						this.g = u;
					}
					get outputsViewModels() {
						return this.h;
					}
					constructor(u, a) {
						super(),
							(this.textModel = u),
							(this.q = a),
							(this.b = this.D(new t.$re())),
							(this.c = !1),
							(this.f = !1),
							(this.g = !1),
							(this.j = []),
							(this.m = null),
							(this.n = this.D(new t.$re())),
							(this.onDidChangeOutputLayout = this.n.event),
							(this.a = (0, w.$9g)()),
							(this.h = this.textModel.outputs.map(
								(h) => new C.$D1b(this, h, this.q),
							)),
							this.D(
								this.textModel.onDidChangeOutputs((h) => {
									this.j.splice(
										h.start,
										h.deleteCount,
										...h.newOutputs.map(() => 0),
									),
										this.h
											.splice(
												h.start,
												h.deleteCount,
												...h.newOutputs.map((n) => new C.$D1b(this, n, this.q)),
											)
											.forEach((n) => n.dispose()),
										(this.m = null),
										this.n.fire();
								}),
							),
							(this.j = new Array(this.textModel.outputs.length));
					}
					r() {
						if (!this.m) {
							const u = new Uint32Array(this.j.length);
							for (let a = 0; a < this.j.length; a++) u[a] = this.j[a];
							this.m = new E.$WN(u);
						}
					}
					getOutputOffset(u) {
						if ((this.r(), u >= this.j.length))
							throw new Error("Output index out of range!");
						return this.m.getPrefixSum(u - 1);
					}
					updateOutputHeight(u, a) {
						if (u >= this.j.length)
							throw new Error("Output index out of range!");
						this.r(), (this.j[u] = a), this.m.setValue(u, a) && this.n.fire();
					}
					getOutputTotalHeight() {
						return this.r(), this.m?.getTotalSum() ?? 0;
					}
					dispose() {
						super.dispose(),
							this.h.forEach((u) => {
								u.dispose();
							});
					}
				};
				(e.$JEc = m), (e.$JEc = m = Ne([j(1, d.$MIb)], m));
			},
		),
		