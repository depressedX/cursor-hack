define(de[1840], he([1, 0, 6, 3, 77, 70]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$D1b = void 0);
			let C = 0;
			class d extends i.$1c {
				setVisible(r = !0, u = !1) {
					(!r && this.b) ||
						(u && r && (this.b = !0), this.visible.set(r, void 0));
				}
				get model() {
					return this.f;
				}
				get pickedMimeType() {
					return this.c;
				}
				set pickedMimeType(r) {
					this.c = r;
				}
				constructor(r, u, a) {
					super(),
						(this.cellViewModel = r),
						(this.f = u),
						(this.g = a),
						(this.a = this.D(new t.$re())),
						(this.onDidResetRenderer = this.a.event),
						(this.b = !1),
						(this.visible = (0, w.observableValue)("outputVisible", !1)),
						(this.outputHandle = C++);
				}
				hasMultiMimeType() {
					if (this.f.outputs.length < 2) return !1;
					const r = this.f.outputs[0].mime;
					return this.f.outputs.some((u) => u.mime !== r);
				}
				resolveMimeTypes(r, u) {
					const a = this.g.getOutputMimeTypeInfo(r, u, this.model),
						h = a.findIndex((c) => c.rendererId !== E.$X6 && c.isTrusted);
					return [a, Math.max(h, 0)];
				}
				resetRenderer() {
					(this.c = void 0), this.model.bumpVersion(), this.a.fire();
				}
				toRawJSON() {
					return { outputs: this.f.outputs };
				}
			}
			e.$D1b = d;
		}),
		