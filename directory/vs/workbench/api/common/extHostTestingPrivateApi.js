import '../../../../require.js';
import '../../../../exports.js';
import '../../contrib/testing/common/testItemCollection.js';
define(de[3181], he([1, 0, 3180]), function (ce /*require*/,
 e /*exports*/,
 t /*testItemCollection*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$f9 = e.$e9 = void 0);
			const i = new WeakMap(),
				w = (C, d) => {
					const m = { controllerId: d };
					return i.set(C, m), m;
				};
			e.$e9 = w;
			const E = (C) => {
				const d = i.get(C);
				if (!d) throw new t.$b9(C?.id || "<unknown>");
				return d;
			};
			e.$f9 = E;
		}),
		