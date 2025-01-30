import '../../require.js';
import '../../exports.js';
import '../solid/web.js';
import '../solid/solid.js';
import '../solid/store.js';
import './drag-drop-context.js';
import './move-array-item.js';
define(
			de[1465],
			he([1, 0, 2, 13, 193, 580, 2153]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*solid*/,
 w /*store*/,
 E /*drag-drop-context*/,
 C /*move-array-item*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.useSortableContext = e.SortableProvider = e.Context = void 0);
				const d = (0, i.createContext)();
				e.Context = d;
				const m = (u) => {
					const [a] = (0, E.useDragDropContext)(),
						[h, c] = (0, w.createStore)({ initialIds: [], sortedIds: [] }),
						n = (o) => o >= 0 && o < h.initialIds.length;
					(0, i.createEffect)(() => {
						c("initialIds", [...u.ids]), c("sortedIds", [...u.ids]);
					}),
						(0, i.createEffect)(() => {
							a.active.draggableId && a.active.droppableId
								? (0, i.untrack)(() => {
										const o = h.sortedIds.indexOf(a.active.draggableId),
											f = h.initialIds.indexOf(a.active.droppableId);
										if (!n(o) || !n(f)) c("sortedIds", [...u.ids]);
										else if (o !== f) {
											const b = (0, C.moveArrayItem)(h.sortedIds, o, f);
											c("sortedIds", b);
										}
									})
								: c("sortedIds", [...u.ids]);
						});
					const p = [h, {}];
					return (0, t.createComponent)(d.Provider, {
						value: p,
						get children() {
							return u.children;
						},
					});
				};
				e.SortableProvider = m;
				const r = () => (0, i.useContext)(d) || null;
				e.useSortableContext = r;
			},
		),
		