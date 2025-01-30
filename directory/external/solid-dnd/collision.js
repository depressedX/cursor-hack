import '../../require.js';
import '../../exports.js';
import './layout.js';
define(de[1463], he([1, 0, 579]), function (ce /*require*/,
 e /*exports*/,
 t /*layout*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.mostIntersecting = e.closestCorners = e.closestCenter = void 0);
			const i = (C, d, m) => {
				const r = C.transformed.center,
					u = { distance: 1 / 0, droppable: null };
				for (const a of d) {
					const h = (0, t.distanceBetweenPoints)(r, a.layout.center);
					h < u.distance
						? ((u.distance = h), (u.droppable = a))
						: h === u.distance &&
							a.id === m.activeDroppableId &&
							(u.droppable = a);
				}
				return u.droppable;
			};
			e.closestCenter = i;
			const w = (C, d, m) => {
				const r = C.transformed.corners,
					u = { distance: 1 / 0, droppable: null };
				for (const a of d) {
					const h = a.layout.corners,
						c =
							(0, t.distanceBetweenPoints)(h.topLeft, r.topLeft) +
							(0, t.distanceBetweenPoints)(h.topRight, r.topRight) +
							(0, t.distanceBetweenPoints)(h.bottomRight, r.bottomRight) +
							(0, t.distanceBetweenPoints)(h.bottomLeft, r.bottomLeft);
					c < u.distance
						? ((u.distance = c), (u.droppable = a))
						: c === u.distance &&
							a.id === m.activeDroppableId &&
							(u.droppable = a);
				}
				return u.droppable;
			};
			e.closestCorners = w;
			const E = (C, d, m) => {
				const r = C.transformed,
					u = { ratio: 0, droppable: null };
				for (const a of d) {
					const h = (0, t.intersectionRatioOfLayouts)(r, a.layout);
					h > u.ratio
						? ((u.ratio = h), (u.droppable = a))
						: h > 0 &&
							h === u.ratio &&
							a.id === m.activeDroppableId &&
							(u.droppable = a);
				}
				return u.droppable;
			};
			e.mostIntersecting = E;
		}),
		