import '../../../../../require.js';
import '../../../../../exports.js';
import './base.js';
define(de[1498], he([1, 0, 1129]), function (ce /*require*/,
 e /*exports*/,
 t /*base*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Sqb = void 0),
				(e.$Tqb = i),
				(e.$Sqb = new t.Diff());
			function i(w, E, C) {
				return w.length > 2e3 || E.length > 2e3
					? (console.error(
							"BAD BAD BAD BAD BAD. THIS SHOULD NOT HAPPEN. PLEASE FIX THE CPP BUG. diffChars received strings that were too long. Returning the trivial diff.",
							w.length,
							E.length,
						),
						[
							{ value: w, removed: !0 },
							{ value: E, added: !0 },
						])
					: e.$Sqb.diff(w, E, C);
			}
		}),
		