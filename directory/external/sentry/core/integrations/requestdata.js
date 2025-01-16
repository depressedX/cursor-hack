define(de[2113], he([1, 0, 80, 316]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.requestDataIntegration = void 0);
			const w = {
					include: {
						cookies: !0,
						data: !0,
						headers: !0,
						ip: !1,
						query_string: !0,
						url: !0,
						user: { id: !0, username: !0, email: !0 },
					},
					transactionNamingScheme: "methodPath",
				},
				E = "RequestData",
				C = (m = {}) => {
					const r = {
						...w,
						...m,
						include: {
							...w.include,
							...m.include,
							user:
								m.include && typeof m.include.user == "boolean"
									? m.include.user
									: { ...w.include.user, ...(m.include || {}).user },
						},
					};
					return {
						name: E,
						processEvent(u) {
							const { sdkProcessingMetadata: a = {} } = u,
								h = a.request;
							if (!h) return u;
							const c = d(r);
							return (0, t.addRequestDataToEvent)(u, h, c);
						},
					};
				};
			e.requestDataIntegration = (0, i.defineIntegration)(C);
			function d(m) {
				const {
						transactionNamingScheme: r,
						include: { ip: u, user: a, ...h },
					} = m,
					c = ["method"];
				for (const [g, p] of Object.entries(h)) p && c.push(g);
				let n;
				if (a === void 0) n = !0;
				else if (typeof a == "boolean") n = a;
				else {
					const g = [];
					for (const [p, o] of Object.entries(a)) o && g.push(p);
					n = g;
				}
				return {
					include: {
						ip: u,
						user: n,
						request: c.length !== 0 ? c : void 0,
						transaction: r,
					},
				};
			}
		}),
		