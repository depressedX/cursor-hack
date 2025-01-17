import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import './lexicalReducerService.js';
define(de[3408], he([1, 0, 3, 1298]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Myc = void 0);
			class w extends t.$1c {
				constructor() {
					super(),
						(this.a = new Map()),
						(this.b = new Map()),
						(this.c = new Map()),
						this.registerReducer({
							name: i.BasicLexicalReducers.FocusTask,
							command(C, d) {
								d.focus();
							},
						});
				}
				registerEditor(C) {
					return this.a.has(C.id)
						? !1
						: (this.a.set(C.id, C),
							this.b.set(C.type, C.type),
							() => this.unregisterEditor(C.id));
				}
				registerReducer(C) {
					return this.c.has(C.name) ? !1 : (this.c.set(C.name, C), !0);
				}
				unregisterReducer(C) {
					return this.c.has(C.name) ? (this.c.delete(C.name), !0) : !1;
				}
				unregisterEditor(C) {
					this.a.has(C) && (this.a.delete(C), this.b.delete(C));
				}
				runCommand(C) {
					const d = this.c.get(C.name);
					if (!d)
						throw new Error(`Reducer with name ${C.name} is not registered.`);
					const m = this.a.get(C.id);
					if (!m) throw new Error(`Editor with id ${C.id} is not registered.`);
					m.editor.update(() => {
						d.command(C.payload, m.editor);
					});
				}
			}
			e.$Myc = w;
		}),
		