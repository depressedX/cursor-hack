import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/event.js';
define(de[3083], he([1, 0, 7, 3, 6]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$IZb = void 0);
			class E extends i.$1c {
				static {
					this.a = 0;
				}
				constructor(d, m, r, u, a) {
					super(),
						(this.j = d),
						(this.b = `fixedZoneWidget-${E.a++}`),
						(this.f = (0, t.h)("div.fixed-zone-widget").root),
						(this.g = {
							getId: () => this.b,
							getDomNode: () => this.f,
							getPosition: () => null,
						}),
						(this.c = m.addZone({
							domNode: document.createElement("div"),
							afterLineNumber: r,
							heightInPx: u,
							ordinal: 50001,
							onComputedHeight: (h) => {
								this.f.style.height = `${h}px`;
							},
							onDomNodeTop: (h) => {
								this.f.style.top = `${h}px`;
							},
						})),
						a.push(this.c),
						this.D(
							w.Event.runAndSubscribe(this.j.onDidLayoutChange, () => {
								this.f.style.left = this.j.getLayoutInfo().contentLeft + "px";
							}),
						),
						this.j.addOverlayWidget(this.g),
						this.D({
							dispose: () => {
								this.j.removeOverlayWidget(this.g);
							},
						});
				}
			}
			e.$IZb = E;
		}),
		