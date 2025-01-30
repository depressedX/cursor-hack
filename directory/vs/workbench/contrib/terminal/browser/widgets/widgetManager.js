import '../../../../../../require.js';
import '../../../../../../exports.js';
define(de[1760], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$pLc = void 0);
			class t {
				constructor() {
					this.b = new Map();
				}
				attachToElement(w) {
					this.a ||
						((this.a = document.createElement("div")),
						this.a.classList.add("terminal-widget-container"),
						w.appendChild(this.a));
				}
				dispose() {
					this.a && (this.a.remove(), (this.a = void 0));
				}
				attachWidget(w) {
					if (this.a)
						return (
							this.b.get(w.id)?.dispose(),
							w.attach(this.a),
							this.b.set(w.id, w),
							{
								dispose: () => {
									this.b.get(w.id) === w && (this.b.delete(w.id), w.dispose());
								},
							}
						);
				}
			}
			e.$pLc = t;
		}),
		