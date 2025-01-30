import '../../require.js';
import '../../exports.js';
import '../solid/solid.js';
import './create-draggable.js';
import './create-droppable.js';
import './combine-refs.js';
import './sortable-context.js';
import './drag-drop-context.js';
import './layout.js';
import './style.js';
define(
			de[2164],
			he([1, 0, 13, 2159, 2160, 2152, 1465, 580, 579, 891]),
			function (ce /*require*/,
 e /*exports*/,
 t /*solid*/,
 i /*create-draggable*/,
 w /*create-droppable*/,
 E /*combine-refs*/,
 C /*sortable-context*/,
 d /*drag-drop-context*/,
 m /*layout*/,
 r /*style*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.createSortable = void 0);
				const u = (a, h = {}) => {
					const [c, { addTransformer: n, removeTransformer: g }] = (0,
						d.useDragDropContext)(),
						[p] = (0, C.useSortableContext)(),
						o = (0, i.createDraggable)(a, h),
						f = (0, w.createDroppable)(a, h),
						b = (0, E.combineRefs)(o.ref, f.ref),
						s = () => p.initialIds.indexOf(a),
						l = () => p.sortedIds.indexOf(a),
						y = (T) => c.droppables[T]?.layout || null,
						$ = () => {
							const T = (0, m.noopTransform)(),
								P = s(),
								k = l();
							if (k !== P) {
								const L = y(a),
									D = y(p.initialIds[k]);
								L && D && ((T.x = D.x - L.x), (T.y = D.y - L.y));
							}
							return T;
						},
						v = {
							id: "sortableOffset",
							order: 100,
							callback: (T) => {
								const P = $();
								return { x: T.x + P.x, y: T.y + P.y };
							},
						};
					(0, t.onMount)(() => n("droppables", a, v)),
						(0, t.onCleanup)(() => g("droppables", a, v.id));
					const S = () =>
						(a === c.active.draggableId && !c.active.overlay
							? c.draggables[a]?.transform
							: c.droppables[a]?.transform) || (0, m.noopTransform)();
					return Object.defineProperties(
						(T) => {
							o(T, () => ({ skipTransform: !0 })),
								f(T, () => ({ skipTransform: !0 })),
								(0, t.createEffect)(() => {
									const P = S();
									if ((0, m.transformsAreEqual)(P, (0, m.noopTransform)()))
										T.style.removeProperty("transform");
									else {
										const k = (0, r.transformStyle)(S());
										T.style.setProperty("transform", k.transform ?? null);
									}
								});
						},
						{
							ref: { enumerable: !0, value: b },
							transform: { enumerable: !0, get: S },
							isActiveDraggable: {
								enumerable: !0,
								get: () => o.isActiveDraggable,
							},
							dragActivators: { enumerable: !0, get: () => o.dragActivators },
							isActiveDroppable: {
								enumerable: !0,
								get: () => f.isActiveDroppable,
							},
						},
					);
				};
				e.createSortable = u;
			},
		),
		