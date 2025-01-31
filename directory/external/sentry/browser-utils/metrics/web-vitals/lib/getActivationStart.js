import '../../../../../../require.js';
import '../../../../../../exports.js';
import './getNavigationEntry.js';
define(de[728], he([1, 0, 883]), function (ce /*require*/,
 e /*exports*/,
 t /*getNavigationEntry*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.getActivationStart = void 0);
			const i = () => {
				const w = (0, t.getNavigationEntry)();
				return (w && w.activationStart) || 0;
			};
			e.getActivationStart = i;
		})
