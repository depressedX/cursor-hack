import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/uuid.js';
define(de[670], he([1, 0, 47]), function (ce /*require*/,
 e /*exports*/,
 t /*uuid*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$KN = void 0);
			class i {
				constructor() {
					(this.id = (0, t.$9g)()),
						(this.a = ""),
						(this.b = void 0),
						(this.c = new Map()),
						(this.d = new Map()),
						(this.e = new Map()),
						(this.f = new Map()),
						(this.g = () => {}),
						(this.h = new Map());
				}
				setForceFocusNoScroll(E) {
					this.g = E;
				}
				doForceFocusNoScroll() {
					this.g();
				}
				onTextChange(E) {
					const C = (0, t.$9g)();
					return (
						this.c.set(C, E),
						() => {
							this.c.delete(C);
						}
					);
				}
				onFireEditNode(E) {
					const C = (0, t.$9g)();
					return (
						this.d.set(C, E),
						() => {
							this.d.delete(C);
						}
					);
				}
				getText() {
					return this.a;
				}
				getRichText() {
					return this.b;
				}
				setText(E, C) {
					if (!(E === this.a && C === this.b)) {
						(this.a = E), (this.b = C);
						for (const d of this.c.values()) d(E, C);
					}
				}
				fireEditNode(E) {
					for (const C of this.d.values()) C(E);
				}
				numSubmitListeners() {
					return this.e.size;
				}
				onSubmit(E) {
					const C = (0, t.$9g)();
					return (
						this.e.set(C, E),
						() => {
							this.e.delete(C);
						}
					);
				}
				submit() {
					for (const E of this.e.values()) E();
				}
				onFocus(E) {
					const C = (0, t.$9g)();
					return (
						this.f.set(C, E),
						() => {
							this.f.delete(C);
						}
					);
				}
				notifyFocus() {
					for (const E of this.f.values()) E();
				}
				clear() {
					this.a = "";
					for (const E of this.h.values()) E();
				}
				onClear(E) {
					const C = (0, t.$9g)();
					return (
						this.h.set(C, E),
						() => {
							this.h.delete(C);
						}
					);
				}
			}
			e.$KN = i;
		}),
		