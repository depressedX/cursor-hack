define(de[155], he([1, 0, 5]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$JN = e.$IN = e.$HN = e.UndoRedoElementType = e.$GN = void 0),
				(e.$GN = (0, t.$Mi)("undoRedoService"));
			var i;
			(function (d) {
				(d[(d.Resource = 0)] = "Resource"),
					(d[(d.Workspace = 1)] = "Workspace");
			})(i || (e.UndoRedoElementType = i = {}));
			class w {
				constructor(m, r) {
					(this.resource = m), (this.elements = r);
				}
			}
			e.$HN = w;
			class E {
				static {
					this.a = 0;
				}
				constructor() {
					(this.id = E.a++), (this.b = 1);
				}
				nextOrder() {
					return this.id === 0 ? 0 : this.b++;
				}
				static {
					this.None = new E();
				}
			}
			e.$IN = E;
			class C {
				static {
					this.a = 0;
				}
				constructor() {
					(this.id = C.a++), (this.b = 1);
				}
				nextOrder() {
					return this.id === 0 ? 0 : this.b++;
				}
				static {
					this.None = new C();
				}
			}
			e.$JN = C;
		}),
		