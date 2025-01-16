define(
			de[1023],
			he([1, 0, 6, 103, 3, 37, 4, 109, 5, 34, 53, 175]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$C2 = e.$B2 = e.$A2 = e.ChatMessageRole = void 0);
				var h;
				(function (g) {
					(g[(g.System = 0)] = "System"),
						(g[(g.User = 1)] = "User"),
						(g[(g.Assistant = 2)] = "Assistant");
				})(h || (e.ChatMessageRole = h = {})),
					(e.$A2 = (0, m.$Mi)("ILanguageModelsService"));
				const c = {
					type: "object",
					properties: {
						vendor: {
							type: "string",
							description: (0, C.localize)(4766, null),
						},
					},
				};
				e.$B2 = a.$n2.registerExtensionPoint({
					extensionPoint: "languageModels",
					jsonSchema: {
						description: (0, C.localize)(4767, null),
						oneOf: [c, { type: "array", items: c }],
					},
					activationEventsGenerator: (g, p) => {
						for (const o of g) p.push(`onLanguageModelChat:${o.vendor}`);
					},
				});
				let n = class {
					constructor(p, o) {
						(this.e = p),
							(this.f = o),
							(this.a = new w.$Zc()),
							(this.b = new Map()),
							(this.c = new Set()),
							(this.d = this.a.add(new t.$re())),
							(this.onDidChangeLanguageModels = this.d.event),
							this.a.add(
								e.$B2.setHandler((f) => {
									this.c.clear();
									for (const s of f) {
										if (!(0, u.$t2)(s.description, "chatProvider")) {
											s.collector.error((0, C.localize)(4768, null));
											continue;
										}
										for (const l of i.Iterable.wrap(s.value)) {
											if (this.c.has(l.vendor)) {
												s.collector.error(
													(0, C.localize)(4769, null, l.vendor),
												);
												continue;
											}
											if ((0, E.$jf)(l.vendor)) {
												s.collector.error((0, C.localize)(4770, null));
												continue;
											}
											if (l.vendor.trim() !== l.vendor) {
												s.collector.error((0, C.localize)(4771, null));
												continue;
											}
											this.c.add(l.vendor);
										}
									}
									const b = [];
									for (const [s, l] of this.b)
										this.c.has(l.metadata.vendor) ||
											(this.b.delete(s), b.push(s));
									b.length > 0 && this.d.fire({ removed: b });
								}),
							);
					}
					dispose() {
						this.a.dispose(), this.b.clear();
					}
					getLanguageModelIds() {
						return Array.from(this.b.keys());
					}
					lookupLanguageModel(p) {
						return this.b.get(p)?.metadata;
					}
					async selectLanguageModels(p) {
						if (p.vendor)
							await this.e.activateByEvent(`onLanguageModelChat:${p.vendor}}`);
						else {
							const f = Array.from(this.c).map((b) =>
								this.e.activateByEvent(`onLanguageModelChat:${b}`),
							);
							await Promise.all(f);
						}
						const o = [];
						for (const [f, b] of this.b)
							(p.vendor === void 0 || b.metadata.vendor === p.vendor) &&
								(p.family === void 0 || b.metadata.family === p.family) &&
								(p.version === void 0 || b.metadata.version === p.version) &&
								(p.identifier === void 0 || b.metadata.id === p.identifier) &&
								(!b.metadata.targetExtensions ||
									b.metadata.targetExtensions.some((s) =>
										d.$Gn.equals(s, p.extension),
									)) &&
								o.push(f);
						return this.f.trace("[LM] selected language models", p, o), o;
					}
					registerLanguageModelChat(p, o) {
						if (
							(this.f.trace(
								"[LM] registering language model chat",
								p,
								o.metadata,
							),
							!this.c.has(o.metadata.vendor))
						)
							throw new Error(
								`Chat response provider uses UNKNOWN vendor ${o.metadata.vendor}.`,
							);
						if (this.b.has(p))
							throw new Error(
								`Chat response provider with identifier ${p} is already registered.`,
							);
						return (
							this.b.set(p, o),
							this.d.fire({ added: [{ identifier: p, metadata: o.metadata }] }),
							(0, w.$Yc)(() => {
								this.b.delete(p) &&
									(this.d.fire({ removed: [p] }),
									this.f.trace(
										"[LM] UNregistered language model chat",
										p,
										o.metadata,
									));
							})
						);
					}
					async sendChatRequest(p, o, f, b, s) {
						const l = this.b.get(p);
						if (!l)
							throw new Error(
								`Chat response provider with identifier ${p} is not registered.`,
							);
						return l.sendChatRequest(f, o, b, s);
					}
					computeTokenLength(p, o, f) {
						const b = this.b.get(p);
						if (!b)
							throw new Error(
								`Chat response provider with identifier ${p} is not registered.`,
							);
						return b.provideTokenCount(o, f);
					}
				};
				(e.$C2 = n), (e.$C2 = n = Ne([j(0, u.$q2), j(1, r.$ik)], n));
			},
		),
		