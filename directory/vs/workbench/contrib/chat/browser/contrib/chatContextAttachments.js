import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/lifecycle.js';
import '../chatWidget.js';
define(de[1355], he([1, 0, 3, 481]), function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*chatWidget*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$EIc = void 0);
			class w extends t.$1c {
				static {
					this.ID = "chatContextAttachments";
				}
				get id() {
					return w.ID;
				}
				constructor(C) {
					super(),
						(this.widget = C),
						(this.a = new Set()),
						this.D(
							this.widget.onDidChangeContext((d) => {
								d.removed && this.b(d.removed);
							}),
						),
						this.D(
							this.widget.onDidSubmitAgent(() => {
								this.c();
							}),
						);
				}
				getInputState() {
					return [...this.a.values()];
				}
				setInputState(C) {
					Array.isArray(C) || (C = []), this.a.clear();
					for (const d of C) this.a.add(d);
					this.widget.setContext(!0, ...C);
				}
				getContext() {
					return new Set([...this.a.values()].map((C) => C.id));
				}
				setContext(C, ...d) {
					C && this.a.clear();
					for (const m of d) this.a.add(m);
					this.widget.setContext(C, ...d);
				}
				b(C) {
					C.length && C.forEach(this.a.delete, this.a);
				}
				c() {
					this.a.clear();
				}
			}
			(e.$EIc = w), i.$XYb.CONTRIBS.push(w);
		}),
		