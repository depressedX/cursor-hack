import '../../../../../../require.js';
import '../../../../../../exports.js';
define(de[1851], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Acd = t);
			function t(i, w, E, C) {
				const d = i,
					m = i.replace(w, E);
				return (
					C.debugMode &&
						d === m &&
						!m.includes(E) &&
						console.log(
							`EXTENSION REWRITING PROBLEM: No match for ${w} for ${E}`,
						),
					m
				);
			}
		}),
		