import '../../../../../require.js';
import '../../../../../exports.js';
import '../../dom.js';
define(de[2675], he([1, 0, 7]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$vib = void 0);
			class i {
				constructor(E) {
					(this.d = E),
						(this.a = new Map()),
						(this.b = new Set()),
						(this.c = !1);
				}
				alloc(E) {
					let C = this.g(E).pop(),
						d = !1;
					if (C) (d = this.b.has(C.domNode)), d && this.b.delete(C.domNode);
					else {
						const m = (0, t.$)(".monaco-list-row"),
							u = this.h(E).renderTemplate(m);
						C = { domNode: m, templateId: E, templateData: u };
					}
					return { row: C, isReusingConnectedDomNode: d };
				}
				release(E) {
					E && this.e(E);
				}
				transact(E) {
					if (this.c) throw new Error("Already in transaction");
					this.c = !0;
					try {
						E();
					} finally {
						for (const C of this.b) this.f(C);
						this.b.clear(), (this.c = !1);
					}
				}
				e(E) {
					const { domNode: C, templateId: d } = E;
					C && (this.c ? this.b.add(C) : this.f(C)), this.g(d).push(E);
				}
				f(E) {
					E.classList.remove("scrolling"), E.remove();
				}
				g(E) {
					let C = this.a.get(E);
					return C || ((C = []), this.a.set(E, C)), C;
				}
				dispose() {
					this.a.forEach((E, C) => {
						for (const d of E)
							this.h(C).disposeTemplate(d.templateData),
								(d.templateData = null);
					}),
						this.a.clear(),
						this.b.clear();
				}
				h(E) {
					const C = this.d.get(E);
					if (!C) throw new Error(`No renderer found for ${E}`);
					return C;
				}
			}
			e.$vib = i;
		}),
		