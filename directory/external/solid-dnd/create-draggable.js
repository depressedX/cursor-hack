import '../../require.js';
import '../../exports.js';
import '../solid/solid.js';
import './drag-drop-context.js';
import './layout.js';
import './style.js';
define(
			de[2159],
			he([1, 0, 13, 580, 579, 891]),
			function (ce /*require*/,
 e /*exports*/,
 t /*solid*/,
 i /*drag-drop-context*/,
 w /*layout*/,
 E /*style*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.createDraggable = void 0);
				const C = (d, m = {}) => {
					const [
							r,
							{ addDraggable: u, removeDraggable: a, draggableActivators: h },
						] = (0, i.useDragDropContext)(),
						[c, n] = (0, t.createSignal)(null);
					(0, t.onMount)(() => {
						const f = c();
						f &&
							u({ id: d, node: f, layout: (0, w.elementLayout)(f), data: m });
					}),
						(0, t.onCleanup)(() => a(d));
					const g = () => r.active.draggableId === d,
						p = () => r.draggables[d]?.transform || (0, w.noopTransform)();
					return Object.defineProperties(
						(f, b) => {
							const s = b ? b() : {};
							(0, t.createEffect)(() => {
								const l = c(),
									y = h(d);
								if (l) for (const $ in y) l.addEventListener($, y[$]);
								(0, t.onCleanup)(() => {
									if (l) for (const $ in y) l.removeEventListener($, y[$]);
								});
							}),
								n(f),
								s.skipTransform ||
									(0, t.createEffect)(() => {
										const l = p();
										if ((0, w.transformsAreEqual)(l, (0, w.noopTransform)()))
											f.style.removeProperty("transform");
										else {
											const y = (0, E.transformStyle)(p());
											f.style.setProperty("transform", y.transform ?? null);
										}
									});
						},
						{
							ref: { enumerable: !0, value: n },
							isActiveDraggable: { enumerable: !0, get: g },
							dragActivators: { enumerable: !0, get: () => h(d, !0) },
							transform: { enumerable: !0, get: p },
						},
					);
				};
				e.createDraggable = C;
			},
		),
		