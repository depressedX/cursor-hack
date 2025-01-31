import '../../../../../require.js';
import '../../../../../exports.js';
define(de[990], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$KIb = e.$JIb = e.$IIb = e.NotebookViewEventType = void 0);
			var t;
			(function (C) {
				(C[(C.LayoutChanged = 1)] = "LayoutChanged"),
					(C[(C.MetadataChanged = 2)] = "MetadataChanged"),
					(C[(C.CellStateChanged = 3)] = "CellStateChanged");
			})(t || (e.NotebookViewEventType = t = {}));
			class i {
				constructor(d, m) {
					(this.source = d), (this.value = m), (this.type = t.LayoutChanged);
				}
			}
			e.$IIb = i;
			class w {
				constructor(d) {
					(this.source = d), (this.type = t.MetadataChanged);
				}
			}
			e.$JIb = w;
			class E {
				constructor(d, m) {
					(this.source = d), (this.cell = m), (this.type = t.CellStateChanged);
				}
			}
			e.$KIb = E;
		})
