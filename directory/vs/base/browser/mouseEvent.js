import '../../../require.js';
import '../../../exports.js';
import './browser.js';
import './iframe.js';
import '../common/platform.js';
define(de[168], he([1, 0, 139, 1126, 12]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$4fb = e.$3fb = e.$2fb = void 0),
				(t = mt(t)),
				(w = mt(w));
			class E {
				constructor(r, u) {
					(this.timestamp = Date.now()),
						(this.browserEvent = u),
						(this.leftButton = u.button === 0),
						(this.middleButton = u.button === 1),
						(this.rightButton = u.button === 2),
						(this.buttons = u.buttons),
						(this.target = u.target),
						(this.detail = u.detail || 1),
						u.type === "dblclick" && (this.detail = 2),
						(this.ctrlKey = u.ctrlKey),
						(this.shiftKey = u.shiftKey),
						(this.altKey = u.altKey),
						(this.metaKey = u.metaKey),
						typeof u.pageX == "number"
							? ((this.posx = u.pageX), (this.posy = u.pageY))
							: ((this.posx =
									u.clientX +
									this.target.ownerDocument.body.scrollLeft +
									this.target.ownerDocument.documentElement.scrollLeft),
								(this.posy =
									u.clientY +
									this.target.ownerDocument.body.scrollTop +
									this.target.ownerDocument.documentElement.scrollTop));
					const a = i.$Zfb.getPositionOfChildWindowRelativeToAncestorWindow(
						r,
						u.view,
					);
					(this.posx -= a.left), (this.posy -= a.top);
				}
				preventDefault() {
					this.browserEvent.preventDefault();
				}
				stopPropagation() {
					this.browserEvent.stopPropagation();
				}
			}
			e.$2fb = E;
			class C extends E {
				constructor(r, u) {
					super(r, u), (this.dataTransfer = u.dataTransfer);
				}
			}
			e.$3fb = C;
			class d {
				constructor(r, u = 0, a = 0) {
					(this.browserEvent = r || null),
						(this.target = r ? r.target || r.targetNode || r.srcElement : null),
						(this.deltaY = a),
						(this.deltaX = u);
					let h = !1;
					if (t.$Qfb) {
						const c = navigator.userAgent.match(/Chrome\/(\d+)/);
						h = (c ? parseInt(c[1]) : 123) <= 122;
					}
					if (r) {
						const c = r,
							n = r,
							g = r.view?.devicePixelRatio || 1;
						if (typeof c.wheelDeltaY < "u")
							h
								? (this.deltaY = c.wheelDeltaY / (120 * g))
								: (this.deltaY = c.wheelDeltaY / 120);
						else if (typeof n.VERTICAL_AXIS < "u" && n.axis === n.VERTICAL_AXIS)
							this.deltaY = -n.detail / 3;
						else if (r.type === "wheel") {
							const p = r;
							p.deltaMode === p.DOM_DELTA_LINE
								? t.$Ofb && !w.$m
									? (this.deltaY = -r.deltaY / 3)
									: (this.deltaY = -r.deltaY)
								: (this.deltaY = -r.deltaY / 40);
						}
						if (typeof c.wheelDeltaX < "u")
							t.$Rfb && w.$l
								? (this.deltaX = -(c.wheelDeltaX / 120))
								: h
									? (this.deltaX = c.wheelDeltaX / (120 * g))
									: (this.deltaX = c.wheelDeltaX / 120);
						else if (
							typeof n.HORIZONTAL_AXIS < "u" &&
							n.axis === n.HORIZONTAL_AXIS
						)
							this.deltaX = -r.detail / 3;
						else if (r.type === "wheel") {
							const p = r;
							p.deltaMode === p.DOM_DELTA_LINE
								? t.$Ofb && !w.$m
									? (this.deltaX = -r.deltaX / 3)
									: (this.deltaX = -r.deltaX)
								: (this.deltaX = -r.deltaX / 40);
						}
						this.deltaY === 0 &&
							this.deltaX === 0 &&
							r.wheelDelta &&
							(h
								? (this.deltaY = r.wheelDelta / (120 * g))
								: (this.deltaY = r.wheelDelta / 120));
					}
				}
				preventDefault() {
					this.browserEvent?.preventDefault();
				}
				stopPropagation() {
					this.browserEvent?.stopPropagation();
				}
			}
			e.$4fb = d;
		}),
		