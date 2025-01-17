import '../../require.js';
import '../../exports.js';
import '../solid/web.js';
import '../solid/web.js';
import '../solid/web.js';
import '../solid/web.js';
import '../solid/web.js';
import '../solid/web.js';
import '../solid/web.js';
import '../solid/web.js';
import '../solid/web.js';
import '../solid/solid.js';
import './drag-drop-context.js';
import './style.js';
import './layout.js';
define(
			de[2163],
			he([1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13, 580, 891, 579]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.DragOverlay = void 0);
				const g = (0, t.template)("<div>"),
					p = (o) => {
						const [
							f,
							{ onDragStart: b, onDragEnd: s, setOverlay: l, clearOverlay: y },
						] = (0, h.useDragDropContext)();
						let $;
						b(({ draggable: S }) => {
							l({ node: S.node, layout: S.layout }),
								queueMicrotask(() => {
									if ($) {
										const I = (0, n.elementLayout)($),
											T = {
												x: (S.layout.width - I.width) / 2,
												y: (S.layout.height - I.height) / 2,
											};
										(I.x += T.x), (I.y += T.y), l({ node: $, layout: I });
									}
								});
						}),
							s(() => queueMicrotask(y));
						const v = () => {
							const S = f.active.overlay,
								I = f.active.draggable;
							return !S || !I
								? {}
								: {
										position: "fixed",
										transition: "transform 0s",
										top: `${S.layout.top}px`,
										left: `${S.layout.left}px`,
										"min-width": `${I.layout.width}px`,
										"min-height": `${I.layout.height}px`,
										...(0, c.transformStyle)(S.transform),
										...o.style,
									};
						};
						return (0, i.createComponent)(u.Portal, {
							get mount() {
								return o.mount ?? document.body;
							},
							get children() {
								return (0, i.createComponent)(a.Show, {
									get when() {
										return f.active.draggable;
									},
									get children() {
										const S = g(),
											I = $;
										return (
											typeof I == "function" ? (0, m.use)(I, S) : ($ = S),
											(0, d.insert)(
												S,
												(() => {
													const T = (0, r.memo)(
														() => typeof o.children == "function",
													);
													return () =>
														T() ? o.children(f.active.draggable) : o.children;
												})(),
											),
											(0, C.effect)(
												(T) => {
													const P = o.class,
														k = v();
													return (
														P !== T._v$ && (0, E.className)(S, (T._v$ = P)),
														(T._v$2 = (0, w.style)(S, k, T._v$2)),
														T
													);
												},
												{ _v$: void 0, _v$2: void 0 },
											),
											S
										);
									},
								});
							},
						});
					};
				e.DragOverlay = p;
			},
		),
		