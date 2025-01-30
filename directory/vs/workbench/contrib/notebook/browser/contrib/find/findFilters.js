import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/common/event.js';
import '../../../../../../base/common/lifecycle.js';
import '../../../common/notebookCommon.js';
define(de[1838], he([1, 0, 6, 3, 70]), function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*lifecycle*/,
 w /*notebookCommon*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$m2b = void 0);
			class E extends i.$1c {
				get markupInput() {
					return this.b;
				}
				set markupInput(d) {
					this.b !== d && ((this.b = d), this.a.fire({ markupInput: d }));
				}
				get markupPreview() {
					return this.c;
				}
				set markupPreview(d) {
					this.c !== d && ((this.c = d), this.a.fire({ markupPreview: d }));
				}
				get codeInput() {
					return this.f;
				}
				set codeInput(d) {
					this.f !== d && ((this.f = d), this.a.fire({ codeInput: d }));
				}
				get codeOutput() {
					return this.g;
				}
				set codeOutput(d) {
					this.g !== d && ((this.g = d), this.a.fire({ codeOutput: d }));
				}
				get findScope() {
					return this.h;
				}
				set findScope(d) {
					this.h !== d && ((this.h = d), this.a.fire({ findScope: !0 }));
				}
				constructor(d, m, r, u, a) {
					super(),
						(this.a = this.D(new t.$re())),
						(this.onDidChange = this.a.event),
						(this.b = !0),
						(this.c = !0),
						(this.f = !0),
						(this.g = !0),
						(this.h = { findScopeType: w.NotebookFindScopeType.None }),
						(this.b = d),
						(this.c = m),
						(this.f = r),
						(this.g = u),
						(this.h = a),
						(this.j = d),
						(this.m = m),
						(this.n = r),
						(this.q = u);
				}
				isModified() {
					return (
						this.b !== this.j ||
						this.c !== this.m ||
						this.f !== this.n ||
						this.g !== this.q
					);
				}
				update(d) {
					(this.b = d.markupInput),
						(this.c = d.markupPreview),
						(this.f = d.codeInput),
						(this.g = d.codeOutput),
						(this.h = d.findScope);
				}
			}
			e.$m2b = E;
		}),
		