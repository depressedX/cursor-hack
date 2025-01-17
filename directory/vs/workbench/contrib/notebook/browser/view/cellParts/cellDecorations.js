import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/browser/dom.js';
import '../cellPart.js';
define(de[3095], he([1, 0, 7, 294]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$H3b = void 0),
				(t = mt(t));
			class w extends i.$A1b {
				constructor(C, d) {
					super(), (this.rootContainer = C), (this.decorationContainer = d);
				}
				didRenderCell(C) {
					const d = [];
					this.rootContainer.classList.forEach((r) => {
						/^nb\-.*$/.test(r) && d.push(r);
					}),
						d.forEach((r) => {
							this.rootContainer.classList.remove(r);
						}),
						(this.decorationContainer.innerText = "");
					const m = () => {
						(this.decorationContainer.innerText = ""),
							C.getCellDecorations()
								.filter((r) => r.topClassName !== void 0)
								.forEach((r) => {
									this.decorationContainer.append(t.$(`.${r.topClassName}`));
								});
					};
					this.f.add(
						C.onCellDecorationsChanged((r) => {
							(r.added.find((a) => a.topClassName) ||
								r.removed.find((a) => a.topClassName)) &&
								m();
						}),
					),
						m();
				}
			}
			e.$H3b = w;
		}),
		