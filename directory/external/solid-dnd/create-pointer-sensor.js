import '../../require.js';
import '../../exports.js';
import '../solid/solid.js';
import './drag-drop-context.js';
define(de[2161], he([1, 0, 13, 580]), function (ce /*require*/,
 e /*exports*/,
 t /*solid*/,
 i /*drag-drop-context*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.createPointerSensor = void 0);
			const w = (E, C = "pointer-sensor") => {
				const [
						d,
						{
							addSensor: m,
							removeSensor: r,
							sensorStart: u,
							sensorMove: a,
							sensorEnd: h,
							dragStart: c,
							dragEnd: n,
						},
					] = (0, i.useDragDropContext)(),
					g = 250,
					p = 10;
				(0, t.onMount)(() => {
					m({ id: C, activators: { pointerdown: l } });
				}),
					(0, t.onCleanup)(() => {
						r(C);
					});
				const o = () => d.active.sensorId === C,
					f = { x: 0, y: 0 };
				let b = null,
					s = null;
				const l = (T, P) => {
						T.button === 0 &&
							(E.document.addEventListener("pointermove", v),
							E.document.addEventListener("pointerup", S),
							(s = P),
							(f.x = T.clientX),
							(f.y = T.clientY),
							(b = E.setTimeout($, g)));
					},
					y = () => {
						b && (E.clearTimeout(b), (b = null)),
							E.document.removeEventListener("pointermove", v),
							E.document.removeEventListener("pointerup", S),
							E.document.removeEventListener("selectionchange", I);
					},
					$ = () => {
						d.active.sensor
							? o() || y()
							: (u(C, f),
								c(s),
								I(),
								E.document.addEventListener("selectionchange", I));
					},
					v = (T) => {
						const P = { x: T.clientX, y: T.clientY };
						if (!d.active.sensor) {
							const k = { x: P.x - f.x, y: P.y - f.y };
							Math.sqrt(k.x ** 2 + k.y ** 2) > p && $();
						}
						o() && (T.preventDefault(), a(P));
					},
					S = (T) => {
						y(), o() && (T.preventDefault(), n(), h());
					},
					I = () => {
						E.getSelection()?.removeAllRanges();
					};
			};
			e.createPointerSensor = w;
		})
