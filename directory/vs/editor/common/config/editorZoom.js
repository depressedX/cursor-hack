import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
define(de[909], he([1, 0, 6]), function (ce /*require*/,
 e /*exports*/,
 t /*event*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.EditorZoom = void 0),
				(e.EditorZoom = new (class {
					constructor() {
						(this.a = 0),
							(this.b = new t.$re()),
							(this.onDidChangeZoomLevel = this.b.event);
					}
					getZoomLevel() {
						return this.a;
					}
					setZoomLevel(i) {
						(i = Math.min(Math.max(-5, i), 20)),
							this.a !== i && ((this.a = i), this.b.fire(this.a));
					}
				})());
		})
