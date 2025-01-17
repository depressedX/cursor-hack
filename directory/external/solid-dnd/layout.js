import '../../require.js';
import '../../exports.js';
define(de[579], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.layoutContainsPoint =
					e.layoutsAreEqual =
					e.intersectionRatioOfLayouts =
					e.distanceBetweenPoints =
					e.stripTransformFromLayout =
					e.transformLayout =
					e.transformsAreEqual =
					e.noopTransform =
					e.elementLayout =
					e.Layout =
						void 0);
			class t {
				constructor(c) {
					(this.x = Math.floor(c.x)),
						(this.y = Math.floor(c.y)),
						(this.width = Math.floor(c.width)),
						(this.height = Math.floor(c.height));
				}
				get rect() {
					return {
						x: this.x,
						y: this.y,
						width: this.width,
						height: this.height,
					};
				}
				get left() {
					return this.x;
				}
				get top() {
					return this.y;
				}
				get right() {
					return this.x + this.width;
				}
				get bottom() {
					return this.y + this.height;
				}
				get center() {
					return {
						x: this.x + this.width * 0.5,
						y: this.y + this.height * 0.5,
					};
				}
				get corners() {
					return {
						topLeft: { x: this.left, y: this.top },
						topRight: { x: this.right, y: this.top },
						bottomRight: { x: this.left, y: this.bottom },
						bottomLeft: { x: this.right, y: this.bottom },
					};
				}
			}
			e.Layout = t;
			const i = (h) => {
				let c = new t(h.getBoundingClientRect());
				const { transform: n } = getComputedStyle(h);
				return n && (c = w(c, n)), c;
			};
			e.elementLayout = i;
			const w = (h, c) => {
				let n, g;
				if (c.startsWith("matrix3d(")) {
					const p = c.slice(9, -1).split(/, /);
					(n = +p[12]), (g = +p[13]);
				} else if (c.startsWith("matrix(")) {
					const p = c.slice(7, -1).split(/, /);
					(n = +p[4]), (g = +p[5]);
				} else (n = 0), (g = 0);
				return new t({ ...h, x: h.x - n, y: h.y - g });
			};
			e.stripTransformFromLayout = w;
			const E = () => ({ x: 0, y: 0 });
			e.noopTransform = E;
			const C = (h, c) => h.x === c.x && h.y === c.y;
			e.transformsAreEqual = C;
			const d = (h, c) => new t({ ...h, x: h.x + c.x, y: h.y + c.y });
			e.transformLayout = d;
			const m = (h, c) =>
				Math.sqrt(Math.pow(h.x - c.x, 2) + Math.pow(h.y - c.y, 2));
			e.distanceBetweenPoints = m;
			const r = (h, c) => {
				const n = Math.max(h.top, c.top),
					g = Math.max(h.left, c.left),
					p = Math.min(h.right, c.right),
					o = Math.min(h.bottom, c.bottom),
					f = p - g,
					b = o - n;
				if (g < p && n < o) {
					const s = h.width * h.height,
						l = c.width * c.height,
						y = f * b;
					return y / (s + l - y);
				}
				return 0;
			};
			e.intersectionRatioOfLayouts = r;
			const u = (h, c) =>
				h.x === c.x &&
				h.y === c.y &&
				h.width === c.width &&
				h.height === c.height;
			e.layoutsAreEqual = u;
			const a = (h, c) =>
				!(c.x < h.left || c.x > h.right || c.y > h.bottom || c.y < h.top);
			e.layoutContainsPoint = a;
		}),
		