define(
			de[699],
			he([1, 0, 4, 28, 82, 175, 8, 6]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$3 = void 0),
					(t = mt(t)),
					(i = mt(i)),
					(w = mt(w));
				const m = {
					type: "object",
					additionalProperties: !1,
					properties: {
						type: { type: "string", description: t.localize(9940, null) },
						required: { type: "array", items: { type: "string" } },
						properties: {
							type: "object",
							description: t.localize(9941, null),
							additionalProperties: {
								$ref: "http://json-schema.org/draft-07/schema#",
							},
						},
						when: {
							type: "string",
							markdownDescription: t.localize(9942, null),
							default: "",
						},
					},
				};
				var r;
				(function (h) {
					function c(n, g, p) {
						if (!n) return;
						const o = i.$lg(n.type) ? n.type : void 0;
						if (!o || o.length === 0) {
							p.error(t.localize(9943, null));
							return;
						}
						const f = [];
						if (Array.isArray(n.required))
							for (const b of n.required) i.$lg(b) && f.push(b);
						return {
							extensionId: g.value,
							taskType: o,
							required: f,
							properties: n.properties ? w.$vo(n.properties) : {},
							when: n.when ? C.$Kj.deserialize(n.when) : void 0,
						};
					}
					h.from = c;
				})(r || (r = {}));
				const u = E.$n2.registerExtensionPoint({
					extensionPoint: "taskDefinitions",
					activationEventsGenerator: (h, c) => {
						for (const n of h) n.type && c.push(`onTaskType:${n.type}`);
					},
					jsonSchema: {
						description: t.localize(9944, null),
						type: "array",
						items: m,
					},
				});
				class a {
					constructor() {
						(this.d = new d.$re()),
							(this.onDefinitionsChanged = this.d.event),
							(this.a = Object.create(null)),
							(this.b = new Promise((c, n) => {
								u.setHandler((g, p) => {
									this.c = void 0;
									try {
										for (const o of p.removed) {
											const f = o.value;
											for (const b of f)
												this.a &&
													b.type &&
													this.a[b.type] &&
													delete this.a[b.type];
										}
										for (const o of p.added) {
											const f = o.value;
											for (const b of f) {
												const s = r.from(
													b,
													o.description.identifier,
													o.collector,
												);
												s && (this.a[s.taskType] = s);
											}
										}
										(p.removed.length > 0 || p.added.length > 0) &&
											this.d.fire();
									} catch {}
									c(void 0);
								});
							}));
					}
					onReady() {
						return this.b;
					}
					get(c) {
						return this.a[c];
					}
					all() {
						return Object.keys(this.a).map((c) => this.a[c]);
					}
					getJsonSchema() {
						if (this.c === void 0) {
							const c = [];
							for (const n of this.all()) {
								const g = { type: "object", additionalProperties: !1 };
								n.required.length > 0 && (g.required = n.required.slice(0)),
									n.properties !== void 0
										? (g.properties = w.$vo(n.properties))
										: (g.properties = Object.create(null)),
									(g.properties.type = { type: "string", enum: [n.taskType] }),
									c.push(g);
							}
							this.c = { oneOf: c };
						}
						return this.c;
					}
				}
				e.$$3 = new a();
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	