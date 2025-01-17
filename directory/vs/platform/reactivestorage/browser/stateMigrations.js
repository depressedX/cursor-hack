import '../../../../require.js';
import '../../../../exports.js';
define(de[1626], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.SpecialCase = void 0),
				(e.$Vzb = i),
				(e.$Wzb = w),
				(e.$Xzb = E);
			var t;
			(function (m) {
				m[(m.array = 0)] = "array";
			})(t || (e.SpecialCase = t = {}));
			function i({ origObject: m, pathToKey: r, keyToKeep: u }) {
				if (!(typeof m != "object" || m === null))
					if (r.length === 0) for (const a in m) a !== u && delete m[a];
					else {
						const [a, ...h] = r;
						typeof a == "string"
							? a in m && i({ origObject: m[a], pathToKey: h, keyToKeep: u })
							: a === t.array &&
								Array.isArray(m) &&
								m.forEach((c) => {
									i({ origObject: c, pathToKey: h, keyToKeep: u });
								});
					}
			}
			function w({ origObject: m, pathToKey: r, keyToRemove: u }) {
				if (!(typeof m != "object" || m === null))
					if (r.length === 0) u in m && delete m[u];
					else {
						const [a, ...h] = r;
						typeof a == "string"
							? a in m && w({ origObject: m[a], pathToKey: h, keyToRemove: u })
							: a === t.array &&
								Array.isArray(m) &&
								m.forEach((c) => {
									w({ origObject: c, pathToKey: h, keyToRemove: u });
								});
					}
			}
			function E({
				origObject: m,
				pathToKey: r,
				keyToRemove: u,
				cutoffSize: a = 5e5,
			}) {
				if (!(typeof m != "object" || m === null))
					if (r.length === 0)
						u === t.array && Array.isArray(m)
							? C(m, a)
							: u !== t.array && m !== null && d(m, u, a);
					else {
						const [h, ...c] = r;
						typeof h == "string"
							? h in m &&
								E({
									origObject: m[h],
									pathToKey: c,
									keyToRemove: u,
									cutoffSize: a,
								})
							: h === t.array &&
								Array.isArray(m) &&
								m.forEach((n) => {
									E({
										origObject: n,
										pathToKey: c,
										keyToRemove: u,
										cutoffSize: a,
									});
								});
					}
			}
			function C(m, r) {
				const u = m.length;
				for (let a = u - 1; a >= 0; a--) {
					const h = m[a];
					h != null && JSON.stringify(h).length > r && m.splice(a, 1);
				}
			}
			function d(m, r, u) {
				if (r in m) {
					const a = m[r];
					a != null && JSON.stringify(a).length > u && delete m[r];
				}
			}
		}),
		