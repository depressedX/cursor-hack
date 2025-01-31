import '../../../../../require.js';
import '../../../../../exports.js';
define(de[330], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.NotebookEditorExtensionsRegistry = void 0),
				(e.$PKb = i);
			class t {
				static {
					this.INSTANCE = new t();
				}
				constructor() {
					this.a = [];
				}
				registerEditorContribution(C, d) {
					this.a.push({ id: C, ctor: d });
				}
				getEditorContributions() {
					return this.a.slice(0);
				}
			}
			function i(E, C) {
				t.INSTANCE.registerEditorContribution(E, C);
			}
			var w;
			(function (E) {
				function C() {
					return t.INSTANCE.getEditorContributions();
				}
				E.getEditorContributions = C;
				function d(m) {
					return t.INSTANCE.getEditorContributions().filter(
						(r) => m.indexOf(r.id) >= 0,
					);
				}
				E.getSomeEditorContributions = d;
			})(w || (e.NotebookEditorExtensionsRegistry = w = {}));
		})
