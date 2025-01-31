import '../../require.js';
import '../../exports.js';
import './layout.js';
define(de[891], he([1, 0, 579]), function (ce /*require*/,
 e /*exports*/,
 t /*layout*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.maybeTransformStyle = e.transformStyle = e.layoutStyle = void 0);
			const i = (C) => ({
				top: `${C.y}px`,
				left: `${C.x}px`,
				width: `${C.width}px`,
				height: `${C.height}px`,
			});
			e.layoutStyle = i;
			const w = (C) => ({ transform: `translate3d(${C.x}px, ${C.y}px, 0)` });
			e.transformStyle = w;
			const E = (C) =>
				(0, t.transformsAreEqual)(C, (0, t.noopTransform)()) ? {} : w(C);
			e.maybeTransformStyle = E;
		})
