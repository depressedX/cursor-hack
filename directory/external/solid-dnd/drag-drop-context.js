import '../../require.js';
import '../../exports.js';
import '../solid/web.js';
import '../solid/solid.js';
import '../solid/store.js';
import './collision.js';
import './layout.js';
define(
			de[580],
			he([1, 0, 2, 13, 193, 1463, 579]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*solid*/,
 w /*store*/,
 E /*collision*/,
 C /*layout*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.useDragDropContext = e.DragDropProvider = e.Context = void 0);
				const d = (0, i.createContext)();
				e.Context = d;
				const m = (u) => {
					const a = (0, i.mergeProps)(
							{ collisionDetector: E.mostIntersecting },
							u,
						),
						[h, c] = (0, w.createStore)({
							draggables: {},
							droppables: {},
							sensors: {},
							active: {
								draggableId: null,
								get draggable() {
									return h.active.draggableId !== null
										? h.draggables[h.active.draggableId]
										: null;
								},
								droppableId: null,
								get droppable() {
									return h.active.droppableId !== null
										? h.droppables[h.active.droppableId]
										: null;
								},
								sensorId: null,
								get sensor() {
									return h.active.sensorId !== null
										? h.sensors[h.active.sensorId]
										: null;
								},
								overlay: null,
							},
						}),
						n = (F, x, H) => {
							const q = F.substring(0, F.length - 1);
							if (!(0, i.untrack)(() => h[F][x])) {
								console.warn(
									`Cannot add transformer to nonexistent ${q} with id: ${x}`,
								);
								return;
							}
							c(F, x, "transformers", H.id, H);
						},
						g = (F, x, H) => {
							const q = F.substring(0, F.length - 1);
							if (!(0, i.untrack)(() => h[F][x])) {
								console.warn(
									`Cannot remove transformer from nonexistent ${q} with id: ${x}`,
								);
								return;
							}
							if (!(0, i.untrack)(() => h[F][x].transformers[H])) {
								console.warn(
									`Cannot remove from ${q} with id ${x}, nonexistent transformer with id: ${H}`,
								);
								return;
							}
							c(F, x, "transformers", H, void 0);
						},
						p = ({ id: F, node: x, layout: H, data: q }) => {
							const V = h.draggables[F],
								G = { id: F, node: x, layout: H, data: q, _pendingCleanup: !1 };
							let K;
							if (!V)
								Object.defineProperties(G, {
									transformers: {
										enumerable: !0,
										configurable: !0,
										writable: !0,
										value: {},
									},
									transform: {
										enumerable: !0,
										configurable: !0,
										get: () => {
											if (h.active.overlay) return (0, C.noopTransform)();
											const J = Object.values(h.draggables[F].transformers);
											return (
												J.sort((W, X) => W.order - X.order),
												J.reduce(
													(W, X) => X.callback(W),
													(0, C.noopTransform)(),
												)
											);
										},
									},
									transformed: {
										enumerable: !0,
										configurable: !0,
										get: () =>
											(0, C.transformLayout)(
												h.draggables[F].layout,
												h.draggables[F].transform,
											),
									},
								});
							else if (h.active.draggableId === F && !h.active.overlay) {
								const J = { x: V.layout.x - H.x, y: V.layout.y - H.y },
									W = "addDraggable-existing-offset",
									X = V.transformers[W],
									Y = X ? X.callback(J) : J;
								(K = {
									id: W,
									order: 100,
									callback: (ie) => ({ x: ie.x + Y.x, y: ie.y + Y.y }),
								}),
									B(() => g("draggables", F, W));
							}
							(0, i.batch)(() => {
								c("draggables", F, G), K && n("draggables", F, K);
							}),
								h.active.draggable && L();
						},
						o = (F) => {
							if (!(0, i.untrack)(() => h.draggables[F])) {
								console.warn(
									`Cannot remove nonexistent draggable with id: ${F}`,
								);
								return;
							}
							c("draggables", F, "_pendingCleanup", !0),
								queueMicrotask(() => f(F));
						},
						f = (F) => {
							if (h.draggables[F]?._pendingCleanup) {
								const x = h.active.draggableId === F;
								(0, i.batch)(() => {
									x && c("active", "draggableId", null),
										c("draggables", F, void 0);
								});
							}
						},
						b = ({ id: F, node: x, layout: H, data: q }) => {
							const V = h.droppables[F],
								G = { id: F, node: x, layout: H, data: q, _pendingCleanup: !1 };
							V ||
								Object.defineProperties(G, {
									transformers: {
										enumerable: !0,
										configurable: !0,
										writable: !0,
										value: {},
									},
									transform: {
										enumerable: !0,
										configurable: !0,
										get: () => {
											const K = Object.values(h.droppables[F].transformers);
											return (
												K.sort((J, W) => J.order - W.order),
												K.reduce(
													(J, W) => W.callback(J),
													(0, C.noopTransform)(),
												)
											);
										},
									},
									transformed: {
										enumerable: !0,
										configurable: !0,
										get: () =>
											(0, C.transformLayout)(
												h.droppables[F].layout,
												h.droppables[F].transform,
											),
									},
								}),
								c("droppables", F, G),
								h.active.draggable && L();
						},
						s = (F) => {
							if (!(0, i.untrack)(() => h.droppables[F])) {
								console.warn(
									`Cannot remove nonexistent droppable with id: ${F}`,
								);
								return;
							}
							c("droppables", F, "_pendingCleanup", !0),
								queueMicrotask(() => l(F));
						},
						l = (F) => {
							if (h.droppables[F]?._pendingCleanup) {
								const x = h.active.droppableId === F;
								(0, i.batch)(() => {
									x && c("active", "droppableId", null),
										c("droppables", F, void 0);
								});
							}
						},
						y = ({ id: F, activators: x }) => {
							c("sensors", F, {
								id: F,
								activators: x,
								coordinates: {
									origin: { x: 0, y: 0 },
									current: { x: 0, y: 0 },
									get delta() {
										return {
											x:
												h.sensors[F].coordinates.current.x -
												h.sensors[F].coordinates.origin.x,
											y:
												h.sensors[F].coordinates.current.y -
												h.sensors[F].coordinates.origin.y,
										};
									},
								},
							});
						},
						$ = (F) => {
							if (!(0, i.untrack)(() => h.sensors[F])) {
								console.warn(`Cannot remove nonexistent sensor with id: ${F}`);
								return;
							}
							const x = h.active.sensorId === F;
							(0, i.batch)(() => {
								x && c("active", "sensorId", null), c("sensors", F, void 0);
							});
						},
						v = ({ node: F, layout: x }) => {
							const H = h.active.overlay,
								q = { node: F, layout: x };
							H ||
								Object.defineProperties(q, {
									id: {
										enumerable: !0,
										configurable: !0,
										get: () => h.active.draggable?.id,
									},
									data: {
										enumerable: !0,
										configurable: !0,
										get: () => h.active.draggable?.data,
									},
									transformers: {
										enumerable: !0,
										configurable: !0,
										get: () =>
											Object.fromEntries(
												Object.entries(
													h.active.draggable
														? h.active.draggable.transformers
														: {},
												).filter(([V]) => V !== "addDraggable-existing-offset"),
											),
									},
									transform: {
										enumerable: !0,
										configurable: !0,
										get: () => {
											const V = Object.values(
												h.active.overlay ? h.active.overlay.transformers : [],
											);
											return (
												V.sort((G, K) => G.order - K.order),
												V.reduce(
													(G, K) => K.callback(G),
													(0, C.noopTransform)(),
												)
											);
										},
									},
									transformed: {
										enumerable: !0,
										configurable: !0,
										get: () =>
											h.active.overlay
												? (0, C.transformLayout)(
														h.active.overlay.layout,
														h.active.overlay.transform,
													)
												: new C.Layout({ x: 0, y: 0, width: 0, height: 0 }),
									},
								}),
								c("active", "overlay", q);
						},
						S = () => c("active", "overlay", null),
						I = (F, x) => {
							(0, i.batch)(() => {
								c("sensors", F, "coordinates", {
									origin: { ...x },
									current: { ...x },
								}),
									c("active", "sensorId", F);
							});
						},
						T = (F) => {
							const x = h.active.sensorId;
							if (!x) {
								console.warn("Cannot move sensor when no sensor active.");
								return;
							}
							c("sensors", x, "coordinates", "current", { ...F });
						},
						P = () => c("active", "sensorId", null),
						k = (F, x) => {
							const H = {};
							for (const V of Object.values(h.sensors))
								if (V)
									for (const [G, K] of Object.entries(V.activators))
										(H[G] ??= []), H[G].push({ sensor: V, activator: K });
							const q = {};
							for (const V in H) {
								let G = V;
								x && (G = `on${V}`),
									(q[G] = (K) => {
										for (const { activator: J } of H[V]) {
											if (h.active.sensor) break;
											J(K, F);
										}
									});
							}
							return q;
						},
						L = () => {
							let F = !1;
							const x = Object.values(h.draggables),
								H = Object.values(h.droppables),
								q = h.active.overlay;
							return (
								(0, i.batch)(() => {
									const V = new WeakMap();
									for (const G of x)
										if (G) {
											const K = G.layout;
											V.has(G.node) ||
												V.set(G.node, (0, C.elementLayout)(G.node));
											const J = V.get(G.node);
											(0, C.layoutsAreEqual)(K, J) ||
												(c("draggables", G.id, "layout", J), (F = !0));
										}
									for (const G of H)
										if (G) {
											const K = G.layout;
											V.has(G.node) ||
												V.set(G.node, (0, C.elementLayout)(G.node));
											const J = V.get(G.node);
											(0, C.layoutsAreEqual)(K, J) ||
												(c("droppables", G.id, "layout", J), (F = !0));
										}
									if (q) {
										const G = q.layout,
											K = (0, C.elementLayout)(q.node);
										(0, C.layoutsAreEqual)(G, K) ||
											(c("active", "overlay", "layout", K), (F = !0));
									}
								}),
								F
							);
						},
						D = () => {
							const F = h.active.overlay ?? h.active.draggable;
							if (F) {
								const x = a.collisionDetector(F, Object.values(h.droppables), {
										activeDroppableId: h.active.droppableId,
									}),
									H = x ? x.id : null;
								h.active.droppableId !== H && c("active", "droppableId", H);
							}
						},
						M = (F) => {
							const x = {
								id: "sensorMove",
								order: 0,
								callback: (H) =>
									h.active.sensor
										? {
												x: H.x + h.active.sensor.coordinates.delta.x,
												y: H.y + h.active.sensor.coordinates.delta.y,
											}
										: H,
							};
							L(),
								(0, i.batch)(() => {
									c("active", "draggableId", F), n("draggables", F, x);
								}),
								D();
						},
						N = () => {
							const F = (0, i.untrack)(() => h.active.draggableId);
							(0, i.batch)(() => {
								F !== null && g("draggables", F, "sensorMove"),
									c("active", ["draggableId", "droppableId"], null);
							}),
								L();
						},
						A = (F) => {
							(0, i.createEffect)(() => {
								const x = h.active.draggable;
								x && (0, i.untrack)(() => F({ draggable: x }));
							});
						},
						R = (F) => {
							(0, i.createEffect)(() => {
								const x = h.active.draggable;
								if (x) {
									const H = (0, i.untrack)(() => h.active.overlay);
									Object.values(H ? H.transform : x.transform),
										(0, i.untrack)(() => F({ draggable: x, overlay: H }));
								}
							});
						},
						O = (F) => {
							(0, i.createEffect)(() => {
								const x = h.active.draggable,
									H = h.active.droppable;
								x &&
									(0, i.untrack)(() =>
										F({
											draggable: x,
											droppable: H,
											overlay: h.active.overlay,
										}),
									);
							});
						},
						B = (F) => {
							(0, i.createEffect)(
								({
									previousDraggable: x,
									previousDroppable: H,
									previousOverlay: q,
								}) => {
									const V = h.active.draggable,
										G = V ? h.active.droppable : null,
										K = V ? h.active.overlay : null;
									return (
										!V &&
											x &&
											(0, i.untrack)(() =>
												F({ draggable: x, droppable: H, overlay: q }),
											),
										{
											previousDraggable: V,
											previousDroppable: G,
											previousOverlay: K,
										}
									);
								},
								{
									previousDraggable: null,
									previousDroppable: null,
									previousOverlay: null,
								},
							);
						};
					R(() => D()),
						a.onDragStart && A(a.onDragStart),
						a.onDragMove && R(a.onDragMove),
						a.onDragOver && O(a.onDragOver),
						a.onDragEnd && B(a.onDragEnd);
					const z = [
						h,
						{
							addTransformer: n,
							removeTransformer: g,
							addDraggable: p,
							removeDraggable: o,
							addDroppable: b,
							removeDroppable: s,
							addSensor: y,
							removeSensor: $,
							setOverlay: v,
							clearOverlay: S,
							recomputeLayouts: L,
							detectCollisions: D,
							draggableActivators: k,
							sensorStart: I,
							sensorMove: T,
							sensorEnd: P,
							dragStart: M,
							dragEnd: N,
							onDragStart: A,
							onDragMove: R,
							onDragOver: O,
							onDragEnd: B,
						},
					];
					return (0, t.createComponent)(d.Provider, {
						value: z,
						get children() {
							return a.children;
						},
					});
				};
				e.DragDropProvider = m;
				const r = () => (0, i.useContext)(d) || null;
				e.useDragDropContext = r;
			},
		)
