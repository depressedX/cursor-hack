define(
			de[2160],
			he([1, 0, 13, 580, 579, 891]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.createDroppable = void 0);
				const C = (d, m = {}) => {
					const [r, { addDroppable: u, removeDroppable: a }] = (0,
						i.useDragDropContext)(),
						[h, c] = (0, t.createSignal)(null);
					(0, t.onMount)(() => {
						const o = h();
						o &&
							u({ id: d, node: o, layout: (0, w.elementLayout)(o), data: m });
					}),
						(0, t.onCleanup)(() => a(d));
					const n = () => r.active.droppableId === d,
						g = () => r.droppables[d]?.transform || (0, w.noopTransform)();
					return Object.defineProperties(
						(o, f) => {
							const b = f ? f() : {};
							c(o),
								b.skipTransform ||
									(0, t.createEffect)(() => {
										const s = g();
										if ((0, w.transformsAreEqual)(s, (0, w.noopTransform)()))
											o.style.removeProperty("transform");
										else {
											const l = (0, E.transformStyle)(g());
											o.style.setProperty("transform", l.transform ?? null);
										}
									});
						},
						{
							ref: { enumerable: !0, value: c },
							isActiveDroppable: { enumerable: !0, get: n },
							transform: { enumerable: !0, get: g },
						},
					);
				};
				e.createDroppable = C;
			},
		),
		