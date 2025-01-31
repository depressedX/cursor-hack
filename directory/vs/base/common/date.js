import '../../../require.js';
import '../../../exports.js';
import '../../nls.js';
define(de[275], he([1, 0, 4]), function (ce /*require*/,
 e /*exports*/,
 t /*nls*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$dn = r),
				(e.$en = u),
				(e.$fn = a),
				(e.$gn = h);
			const i = 60,
				w = i * 60,
				E = w * 24,
				C = E * 7,
				d = E * 30,
				m = E * 365;
			function r(c, n, g, p) {
				typeof c != "number" && (c = c.getTime());
				const o = Math.round((new Date().getTime() - c) / 1e3);
				if (o < -30)
					return (0, t.localize)(
						42,
						null,
						r(new Date().getTime() + o * 1e3, !1),
					);
				if (!p && o < 30) return (0, t.localize)(43, null);
				let f;
				return o < i
					? ((f = o),
						n
							? f === 1
								? g
									? (0, t.localize)(44, null, f)
									: (0, t.localize)(45, null, f)
								: g
									? (0, t.localize)(46, null, f)
									: (0, t.localize)(47, null, f)
							: f === 1
								? g
									? (0, t.localize)(48, null, f)
									: (0, t.localize)(49, null, f)
								: g
									? (0, t.localize)(50, null, f)
									: (0, t.localize)(51, null, f))
					: o < w
						? ((f = Math.floor(o / i)),
							n
								? f === 1
									? g
										? (0, t.localize)(52, null, f)
										: (0, t.localize)(53, null, f)
									: g
										? (0, t.localize)(54, null, f)
										: (0, t.localize)(55, null, f)
								: f === 1
									? g
										? (0, t.localize)(56, null, f)
										: (0, t.localize)(57, null, f)
									: g
										? (0, t.localize)(58, null, f)
										: (0, t.localize)(59, null, f))
						: o < E
							? ((f = Math.floor(o / w)),
								n
									? f === 1
										? g
											? (0, t.localize)(60, null, f)
											: (0, t.localize)(61, null, f)
										: g
											? (0, t.localize)(62, null, f)
											: (0, t.localize)(63, null, f)
									: f === 1
										? g
											? (0, t.localize)(64, null, f)
											: (0, t.localize)(65, null, f)
										: g
											? (0, t.localize)(66, null, f)
											: (0, t.localize)(67, null, f))
							: o < C
								? ((f = Math.floor(o / E)),
									n
										? f === 1
											? (0, t.localize)(68, null, f)
											: (0, t.localize)(69, null, f)
										: f === 1
											? (0, t.localize)(70, null, f)
											: (0, t.localize)(71, null, f))
								: o < d
									? ((f = Math.floor(o / C)),
										n
											? f === 1
												? g
													? (0, t.localize)(72, null, f)
													: (0, t.localize)(73, null, f)
												: g
													? (0, t.localize)(74, null, f)
													: (0, t.localize)(75, null, f)
											: f === 1
												? g
													? (0, t.localize)(76, null, f)
													: (0, t.localize)(77, null, f)
												: g
													? (0, t.localize)(78, null, f)
													: (0, t.localize)(79, null, f))
									: o < m
										? ((f = Math.floor(o / d)),
											n
												? f === 1
													? g
														? (0, t.localize)(80, null, f)
														: (0, t.localize)(81, null, f)
													: g
														? (0, t.localize)(82, null, f)
														: (0, t.localize)(83, null, f)
												: f === 1
													? g
														? (0, t.localize)(84, null, f)
														: (0, t.localize)(85, null, f)
													: g
														? (0, t.localize)(86, null, f)
														: (0, t.localize)(87, null, f))
										: ((f = Math.floor(o / m)),
											n
												? f === 1
													? g
														? (0, t.localize)(88, null, f)
														: (0, t.localize)(89, null, f)
													: g
														? (0, t.localize)(90, null, f)
														: (0, t.localize)(91, null, f)
												: f === 1
													? g
														? (0, t.localize)(92, null, f)
														: (0, t.localize)(93, null, f)
													: g
														? (0, t.localize)(94, null, f)
														: (0, t.localize)(95, null, f));
			}
			function u(c, n, g) {
				typeof c != "number" && (c = c.getTime());
				const p = new Date();
				p.setHours(0, 0, 0, 0);
				const o = new Date(p.getTime());
				return (
					o.setDate(o.getDate() - 1),
					c > p.getTime()
						? (0, t.localize)(96, null)
						: c > o.getTime()
							? (0, t.localize)(97, null)
							: r(c, n, g)
				);
			}
			function a(c, n) {
				const g = Math.abs(c / 1e3);
				return g < 1
					? n
						? (0, t.localize)(98, null, c)
						: (0, t.localize)(99, null, c)
					: g < i
						? n
							? (0, t.localize)(100, null, Math.round(c) / 1e3)
							: (0, t.localize)(101, null, Math.round(c) / 1e3)
						: g < w
							? n
								? (0, t.localize)(102, null, Math.round(c / (1e3 * i)))
								: (0, t.localize)(103, null, Math.round(c / (1e3 * i)))
							: g < E
								? n
									? (0, t.localize)(104, null, Math.round(c / (1e3 * w)))
									: (0, t.localize)(105, null, Math.round(c / (1e3 * w)))
								: (0, t.localize)(106, null, Math.round(c / (1e3 * E)));
			}
			function h(c) {
				return (
					c.getFullYear() +
					"-" +
					String(c.getMonth() + 1).padStart(2, "0") +
					"-" +
					String(c.getDate()).padStart(2, "0") +
					"T" +
					String(c.getHours()).padStart(2, "0") +
					":" +
					String(c.getMinutes()).padStart(2, "0") +
					":" +
					String(c.getSeconds()).padStart(2, "0") +
					"." +
					(c.getMilliseconds() / 1e3).toFixed(3).slice(2, 5) +
					"Z"
				);
			}
		})
