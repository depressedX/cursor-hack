import '../../require.js';
import '../../exports.js';
import '../solid/web.js';
import './create-pointer-sensor.js';
define(de[2162], he([1, 0, 2, 2161]), function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*create-pointer-sensor*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.DragDropSensors = void 0);
			const w = (E) => (
				(0, i.createPointerSensor)(E.window), (0, t.memo)(() => E.children)
			);
			e.DragDropSensors = w;
		}),
		