define(de[3326], he([1, 0, 4, 82, 570, 1813]), function (ce, e, t, i, w, E) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(t = mt(t)),
			(i = mt(i)),
			(E = xi(E));
		const C = {
				oneOf: [
					{
						allOf: [
							{
								type: "object",
								required: ["version"],
								properties: {
									version: {
										type: "string",
										enum: ["0.1.0"],
										deprecationMessage: t.localize(9725, null),
										description: t.localize(9726, null),
									},
									_runner: { deprecationMessage: t.localize(9727, null) },
									runner: {
										type: "string",
										enum: ["process", "terminal"],
										default: "process",
										description: t.localize(9728, null),
									},
									windows: {
										$ref: "#/definitions/taskRunnerConfiguration",
										description: t.localize(9729, null),
									},
									osx: {
										$ref: "#/definitions/taskRunnerConfiguration",
										description: t.localize(9730, null),
									},
									linux: {
										$ref: "#/definitions/taskRunnerConfiguration",
										description: t.localize(9731, null),
									},
								},
							},
							{ $ref: "#/definitions/taskRunnerConfiguration" },
						],
					},
				],
			},
			d = { type: "boolean", default: !0, description: t.localize(9732, null) };
		C.definitions = i.$vo(E.default.definitions);
		const m = C.definitions;
		(m.commandConfiguration.properties.isShellCommand = i.$vo(d)),
			(m.taskDescription.properties.isShellCommand = i.$vo(d)),
			(m.taskRunnerConfiguration.properties.isShellCommand = i.$vo(d)),
			Object.getOwnPropertyNames(m).forEach((u) => {
				const a = u + "1";
				(m[a] = m[u]), delete m[u];
			});
		function r(u) {
			Array.isArray(u)
				? u.forEach(r)
				: typeof u == "object" &&
					(u.$ref && (u.$ref = u.$ref + "1"),
					Object.getOwnPropertyNames(u).forEach((a) => {
						const h = u[a];
						(Array.isArray(h) || typeof h == "object") && r(h);
					}));
		}
		r(C),
			w.$03.onReady().then(() => {
				try {
					const u = w.$03.keys().map((a) => "$" + a);
					(m.problemMatcherType1.oneOf[0].enum = u),
						(m.problemMatcherType1.oneOf[2].items.anyOf[1].enum = u);
				} catch {
					console.log("Installing problem matcher ids failed");
				}
			}),
			(e.default = C);
	}),
		define(
			de[1814],
			he([1, 0, 9, 6, 3, 570, 90, 47, 12]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$9Wc =
						e.$8Wc =
						e.ProblemHandlingStrategy =
						e.$7Wc =
						e.ProblemCollectorEventKind =
							void 0);
				var r;
				(function (g) {
					(g.BackgroundProcessingBegins = "backgroundProcessingBegins"),
						(g.BackgroundProcessingEnds = "backgroundProcessingEnds");
				})(r || (e.ProblemCollectorEventKind = r = {}));
				var u;
				(function (g) {
					function p(o) {
						return Object.freeze({ kind: o });
					}
					g.create = p;
				})(u || (u = {}));
				class a extends w.$1c {
					constructor(p, o, f, b) {
						super(),
							(this.problemMatchers = p),
							(this.C = o),
							(this.F = f),
							(this.m = new w.$Zc()),
							(this.w = new i.$re()),
							(this.onDidFindFirstMatch = this.w.event),
							(this.y = new i.$re()),
							(this.onDidFindErrors = this.y.event),
							(this.z = new i.$re()),
							(this.onDidRequestInvalidateLastMarker = this.z.event),
							(this.a = Object.create(null)),
							(this.h = 1),
							p
								.map((s) => (0, E.$53)(s, b))
								.forEach((s) => {
									const l = s.matchLength;
									l > this.h && (this.h = l);
									let y = this.a[l];
									y || ((y = []), (this.a[l] = y)), y.push(s);
								}),
							(this.g = []),
							(this.b = null),
							(this.c = 0),
							(this.f = void 0),
							(this.j = Object.create(null)),
							(this.q = new Map());
						for (const s of p) {
							const l = this.q.get(s.owner);
							l === void 0
								? this.q.set(s.owner, s.applyTo)
								: this.q.set(s.owner, this.J(l, s.applyTo));
						}
						(this.r = new Map()),
							(this.s = new Map()),
							(this.t = new Map()),
							this.D(
								this.F.onModelAdded(
									(s) => {
										this.j[s.uri.toString()] = !0;
									},
									this,
									this.m,
								),
							),
							this.D(
								this.F.onModelRemoved(
									(s) => {
										delete this.j[s.uri.toString()];
									},
									this,
									this.m,
								),
							),
							this.F.getModels().forEach(
								(s) => (this.j[s.uri.toString()] = !0),
							),
							(this.u = new i.$re());
					}
					get onDidStateChange() {
						return this.u.event;
					}
					processLine(p) {
						if (this.n) {
							const o = this.n;
							this.n = o.then(() => this.G(p));
						} else this.n = this.G(p);
					}
					dispose() {
						super.dispose(), this.m.dispose();
					}
					get numberOfMatches() {
						return this.c;
					}
					get maxMarkerSeverity() {
						return this.f;
					}
					H(p) {
						let o = null;
						if (this.b) {
							if (((o = this.b.next(p)), o)) return this.M(o), o;
							this.N(), (this.b = null);
						}
						if (this.g.length < this.h) this.g.push(p);
						else {
							const f = this.g.length - 1;
							for (let b = 0; b < f; b++) this.g[b] = this.g[b + 1];
							this.g[f] = p;
						}
						return (o = this.L()), o && this.N(), o;
					}
					async I(p) {
						switch (p.description.applyTo) {
							case E.ApplyToKind.allDocuments:
								return !0;
							case E.ApplyToKind.openDocuments:
								return !!this.j[(await p.resource).toString()];
							case E.ApplyToKind.closedDocuments:
								return !this.j[(await p.resource).toString()];
							default:
								return !0;
						}
					}
					J(p, o) {
						return p === o || p === E.ApplyToKind.allDocuments
							? p
							: E.ApplyToKind.allDocuments;
					}
					L() {
						this.b = null;
						const p = this.g.length;
						for (let o = 0; o < p; o++) {
							const f = this.a[p - o];
							if (f)
								for (const b of f) {
									const s = b.handle(this.g, o);
									if (s.match)
										return this.M(s.match), s.continue && (this.b = b), s.match;
								}
						}
						return null;
					}
					M(p) {
						this.c++,
							(this.f === void 0 || p.marker.severity > this.f) &&
								(this.f = p.marker.severity);
					}
					N() {
						this.g.length > 0 && (this.g = []);
					}
					O(p) {
						const o = this.R(p);
						this.C.read({ owner: p }).forEach((f) =>
							o.set(f.resource.toString(), f.resource),
						);
					}
					P(p, o) {
						this.R(p).set(o.toString(), o);
					}
					Q(p, o) {
						this.r.get(p)?.delete(o);
					}
					R(p) {
						let o = this.r.get(p);
						return o || ((o = new Map()), this.r.set(p, o)), o;
					}
					S() {
						this.r.forEach((p, o) => {
							this.W(o, p);
						}),
							(this.r = new Map());
					}
					U(p) {
						const o = this.r.get(p);
						o && (this.W(p, o), this.r.delete(p));
					}
					W(p, o) {
						const f = [],
							b = this.q.get(p);
						o.forEach((s, l) => {
							(b === E.ApplyToKind.allDocuments ||
								(b === E.ApplyToKind.openDocuments && this.j[l]) ||
								(b === E.ApplyToKind.closedDocuments && !this.j[l])) &&
								f.push(s);
						}),
							this.C.remove(p, f);
					}
					X(p, o, f) {
						let b = this.s.get(o);
						b || ((b = new Map()), this.s.set(o, b));
						let s = b.get(f);
						s || ((s = new Map()), b.set(f, s));
						const l = C.IMarkerData.makeKeyOptionalMessage(p, !1);
						let y;
						s.has(l)
							? (y = s.get(l)) !== void 0 &&
								y.message.length < p.message.length &&
								m.$l &&
								s.set(l, p)
							: s.set(l, p);
					}
					Y() {
						this.s.forEach((p, o) => {
							const f = this.ab(o);
							p.forEach((b, s) => {
								this.$(o, s, b, f);
							});
						});
					}
					Z(p, o) {
						const f = this.s.get(p);
						if (!f) return;
						const b = this.ab(p),
							s = f.get(o);
						s && this.$(p, o, s, b);
					}
					$(p, o, f, b) {
						if (f.size !== b.get(o)) {
							const s = [];
							f.forEach((l) => s.push(l)),
								this.C.changeOne(p, t.URI.parse(o), s),
								b.set(o, f.size);
						}
					}
					ab(p) {
						let o = this.t.get(p);
						return o || ((o = new Map()), this.t.set(p, o)), o;
					}
					bb() {
						(this.c = 0), (this.f = void 0), this.s.clear(), this.t.clear();
					}
					done() {
						this.Y(), this.S();
					}
				}
				e.$7Wc = a;
				var h;
				(function (g) {
					g[(g.Clean = 0)] = "Clean";
				})(h || (e.ProblemHandlingStrategy = h = {}));
				class c extends a {
					constructor(p, o, f, b = h.Clean, s) {
						super(p, o, f, s);
						const l = Object.create(null);
						p.forEach((y) => (l[y.owner] = !0)),
							(this.cb = Object.keys(l)),
							this.cb.forEach((y) => {
								this.O(y);
							});
					}
					async G(p) {
						const o = this.H(p);
						if (!o) return;
						const f = o.description.owner,
							s = (await o.resource).toString();
						this.Q(f, s),
							(await this.I(o)) &&
								(this.X(o.marker, f, s),
								(this.db !== f || this.eb !== s) &&
									(this.db && this.eb && this.Z(this.db, this.eb),
									(this.db = f),
									(this.eb = s)));
					}
				}
				e.$8Wc = c;
				class n extends a {
					constructor(p, o, f, b) {
						super(p, o, f, b),
							(this.gb = []),
							(this.beginPatterns = []),
							this.kb(),
							(this.cb = []),
							(this.db = new Set()),
							this.problemMatchers.forEach((s) => {
								if (s.watching) {
									const l = (0, d.$9g)();
									this.cb.push({
										key: l,
										matcher: s,
										begin: s.watching.beginsPattern,
										end: s.watching.endsPattern,
									}),
										this.beginPatterns.push(s.watching.beginsPattern.regexp);
								}
							}),
							this.m.add(
								this.F.onModelRemoved((s) => {
									let l = i.Event.debounce(
										this.C.onMarkerChanged,
										(y, $) => (y ?? []).concat($),
										500,
										!1,
										!0,
									)(async (y) => {
										if (
											(l?.dispose(),
											(l = void 0),
											!y ||
												!y.includes(s.uri) ||
												this.C.read({ resource: s.uri }).length !== 0)
										)
											return;
										const $ = Array.from(this.gb);
										for (const v of $) await this.G(v);
									});
									setTimeout(async () => {
										const y = l;
										(l = void 0), y?.dispose();
									}, 600);
								}),
							);
					}
					aboutToStart() {
						for (const p of this.cb)
							p.matcher.watching &&
								p.matcher.watching.activeOnStart &&
								(this.db.add(p.key),
								this.u.fire(u.create(r.BackgroundProcessingBegins)),
								this.O(p.matcher.owner));
					}
					async G(p) {
						if ((await this.ib(p)) || this.jb(p)) return;
						this.gb.push(p);
						const o = this.H(p);
						if (!o) return;
						const f = await o.resource,
							b = o.description.owner,
							s = f.toString();
						this.Q(b, s),
							(await this.I(o)) &&
								(this.X(o.marker, b, s),
								(this.eb !== b || this.fb !== s) &&
									(this.lb(), (this.eb = b), (this.fb = s)));
					}
					forceDelivery() {
						this.lb();
					}
					async ib(p) {
						let o = !1;
						for (const f of this.cb) {
							const b = f.begin.regexp.exec(p);
							if (b) {
								if (this.db.has(f.key)) continue;
								this.db.add(f.key),
									(o = !0),
									this.w.fire(),
									(this.gb = []),
									this.gb.push(p),
									this.u.fire(u.create(r.BackgroundProcessingBegins)),
									this.bb(),
									this.kb();
								const s = f.matcher.owner,
									l = b[f.begin.file];
								if (l) {
									const y = (0, E.$43)(l, f.matcher);
									this.P(s, await y);
								} else this.O(s);
							}
						}
						return o;
					}
					jb(p) {
						let o = !1;
						for (const f of this.cb)
							if (
								f.end.regexp.exec(p) &&
								(this.c > 0 ? this.y.fire() : this.z.fire(), this.db.has(f.key))
							) {
								this.db.delete(f.key),
									this.kb(),
									this.u.fire(u.create(r.BackgroundProcessingEnds)),
									(o = !0),
									this.gb.push(p);
								const s = f.matcher.owner;
								this.U(s), this.bb();
							}
						return o;
					}
					kb() {
						this.lb(), (this.eb = void 0), (this.fb = void 0);
					}
					lb() {
						this.eb && this.fb && this.Z(this.eb, this.fb);
					}
					done() {
						[...this.q.keys()].forEach((p) => {
							this.O(p);
						}),
							super.done();
					}
					isWatching() {
						return this.cb.length > 0;
					}
				}
				e.$9Wc = n;
			},
		),
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
	define(
		de[3327],
		he([1, 0, 4, 82, 1813, 570, 699, 1796, 1795, 14]),
		function (ce, e, t, i, w, E, C, d, m, r) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$1Wc = A),
				(e.$2Wc = G),
				(t = mt(t)),
				(i = mt(i)),
				(w = xi(w)),
				(d = mt(d));
			function u(K) {
				Array.isArray(K)
					? K.forEach(u)
					: typeof K == "object" &&
						(K.$ref && (K.$ref = K.$ref + "2"),
						Object.getOwnPropertyNames(K).forEach((J) => {
							const W = K[J];
							(Array.isArray(W) || typeof W == "object") && u(W);
						}));
			}
			const a = {
					anyOf: [
						{
							type: "boolean",
							default: !0,
							description: t.localize(9733, null),
						},
						{ $ref: "#/definitions/shellConfiguration" },
					],
					deprecationMessage: t.localize(9734, null),
				},
				h = {
					type: "boolean",
					description: t.localize(9735, null),
					default: !0,
				},
				c = {
					type: "object",
					additionalProperties: !0,
					properties: {
						type: { type: "string", description: t.localize(9736, null) },
					},
				},
				n = {
					anyOf: [
						{ type: "string", description: t.localize(9737, null) },
						c,
						{
							type: "array",
							description: t.localize(9738, null),
							items: { anyOf: [{ type: "string" }, c] },
						},
					],
					description: t.localize(9739, null),
				},
				g = {
					type: "string",
					enum: ["parallel", "sequence"],
					enumDescriptions: [t.localize(9740, null), t.localize(9741, null)],
					default: "parallel",
					description: t.localize(9742, null),
				},
				p = { type: "string", description: t.localize(9743, null) },
				o = {
					type: "object",
					description: t.localize(9744, null),
					properties: {
						id: {
							description: t.localize(9745, null),
							type: ["string", "null"],
							enum: Array.from((0, r.$$j)(), (K) => K.id),
							markdownEnumDescriptions: Array.from(
								(0, r.$$j)(),
								(K) => `$(${K.id})`,
							),
						},
						color: {
							description: t.localize(9746, null),
							type: ["string", "null"],
							enum: [
								"terminal.ansiBlack",
								"terminal.ansiRed",
								"terminal.ansiGreen",
								"terminal.ansiYellow",
								"terminal.ansiBlue",
								"terminal.ansiMagenta",
								"terminal.ansiCyan",
								"terminal.ansiWhite",
							],
						},
					},
				},
				f = {
					type: "object",
					default: {
						echo: !0,
						reveal: "always",
						focus: !1,
						panel: "shared",
						showReuseMessage: !0,
						clear: !1,
					},
					description: t.localize(9747, null),
					additionalProperties: !1,
					properties: {
						echo: {
							type: "boolean",
							default: !0,
							description: t.localize(9748, null),
						},
						focus: {
							type: "boolean",
							default: !1,
							description: t.localize(9749, null),
						},
						revealProblems: {
							type: "string",
							enum: ["always", "onProblem", "never"],
							enumDescriptions: [
								t.localize(9750, null),
								t.localize(9751, null),
								t.localize(9752, null),
							],
							default: "never",
							description: t.localize(9753, null),
						},
						reveal: {
							type: "string",
							enum: ["always", "silent", "never"],
							enumDescriptions: [
								t.localize(9754, null),
								t.localize(9755, null),
								t.localize(9756, null),
							],
							default: "always",
							description: t.localize(9757, null),
						},
						panel: {
							type: "string",
							enum: ["shared", "dedicated", "new"],
							default: "shared",
							description: t.localize(9758, null),
						},
						showReuseMessage: {
							type: "boolean",
							default: !0,
							description: t.localize(9759, null),
						},
						clear: {
							type: "boolean",
							default: !1,
							description: t.localize(9760, null),
						},
						group: { type: "string", description: t.localize(9761, null) },
						close: { type: "boolean", description: t.localize(9762, null) },
					},
				},
				b = i.$vo(f);
			b.deprecationMessage = t.localize(9763, null);
			const s = {
					type: "string",
					enum: ["build", "test", "none"],
					enumDescriptions: [
						t.localize(9764, null),
						t.localize(9765, null),
						t.localize(9766, null),
					],
					description: t.localize(9767, null),
				},
				l = {
					oneOf: [
						s,
						{
							type: "object",
							properties: {
								kind: s,
								isDefault: {
									type: ["boolean", "string"],
									default: !1,
									description: t.localize(9768, null),
								},
							},
						},
					],
					defaultSnippets: [
						{
							body: { kind: "build", isDefault: !0 },
							description: t.localize(9769, null),
						},
						{
							body: { kind: "test", isDefault: !0 },
							description: t.localize(9770, null),
						},
					],
					description: t.localize(9771, null),
				},
				y = {
					type: "string",
					enum: ["shell"],
					default: "process",
					description: t.localize(9772, null),
				},
				$ = {
					oneOf: [
						{
							oneOf: [
								{ type: "string" },
								{
									type: "array",
									items: { type: "string" },
									description: t.localize(9773, null),
								},
							],
						},
						{
							type: "object",
							required: ["value", "quoting"],
							properties: {
								value: {
									oneOf: [
										{ type: "string" },
										{
											type: "array",
											items: { type: "string" },
											description: t.localize(9774, null),
										},
									],
									description: t.localize(9775, null),
								},
								quoting: {
									type: "string",
									enum: ["escape", "strong", "weak"],
									enumDescriptions: [
										t.localize(9776, null),
										t.localize(9777, null),
										t.localize(9778, null),
									],
									default: "strong",
									description: t.localize(9779, null),
								},
							},
						},
					],
					description: t.localize(9780, null),
				},
				v = {
					type: "array",
					items: {
						oneOf: [
							{ type: "string" },
							{
								type: "object",
								required: ["value", "quoting"],
								properties: {
									value: {
										type: "string",
										description: t.localize(9781, null),
									},
									quoting: {
										type: "string",
										enum: ["escape", "strong", "weak"],
										enumDescriptions: [
											t.localize(9782, null),
											t.localize(9783, null),
											t.localize(9784, null),
										],
										default: "strong",
										description: t.localize(9785, null),
									},
								},
							},
						],
					},
					description: t.localize(9786, null),
				},
				S = { type: "string", description: t.localize(9787, null) },
				I = {
					type: "string",
					enum: ["2.0.0"],
					description: t.localize(9788, null),
				},
				T = {
					type: "string",
					description: t.localize(9789, null),
					deprecationMessage: t.localize(9790, null),
				},
				P = {
					type: "object",
					additionalProperties: !1,
					properties: {
						reevaluateOnRerun: {
							type: "boolean",
							description: t.localize(9791, null),
							default: !0,
						},
						runOn: {
							type: "string",
							enum: ["default", "folderOpen"],
							description: t.localize(9792, null),
							default: "default",
						},
						instanceLimit: {
							type: "number",
							description: t.localize(9793, null),
							default: 1,
						},
					},
					description: t.localize(9794, null),
				},
				k = w.default.definitions,
				L = i.$vo(k.options),
				D = L.properties;
			D.shell = i.$vo(k.shellConfiguration);
			const M = {
					type: "object",
					additionalProperties: !1,
					properties: {
						label: { type: "string", description: t.localize(9795, null) },
						taskName: {
							type: "string",
							description: t.localize(9796, null),
							deprecationMessage: t.localize(9797, null),
						},
						identifier: i.$vo(T),
						group: i.$vo(l),
						isBackground: {
							type: "boolean",
							description: t.localize(9798, null),
							default: !0,
						},
						promptOnClose: {
							type: "boolean",
							description: t.localize(9799, null),
							default: !1,
						},
						presentation: i.$vo(f),
						icon: i.$vo(o),
						hide: i.$vo(h),
						options: L,
						problemMatcher: {
							$ref: "#/definitions/problemMatcherType",
							description: t.localize(9800, null),
						},
						runOptions: i.$vo(P),
						dependsOn: i.$vo(n),
						dependsOrder: i.$vo(g),
						detail: i.$vo(p),
					},
				},
				N = [];
			C.$$3.onReady().then(() => {
				A();
			});
			function A() {
				for (const K of C.$$3.all()) {
					if (
						N.find((X) =>
							X.properties?.type?.enum?.find
								? X.properties?.type.enum.find((Y) => Y === K.taskType)
								: void 0,
						)
					)
						continue;
					const J = i.$vo(M),
						W = J.properties;
					if (
						((W.type = {
							type: "string",
							description: t.localize(9801, null),
							enum: [K.taskType],
						}),
						K.required ? (J.required = K.required.slice()) : (J.required = []),
						J.required.push("type"),
						K.properties)
					)
						for (const X of Object.keys(K.properties)) {
							const Y = K.properties[X];
							W[X] = i.$vo(Y);
						}
					u(J), N.push(J);
				}
			}
			const R = i.$vo(M);
			(R.properties.customize = {
				type: "string",
				deprecationMessage: t.localize(9802, null),
			}),
				R.required || (R.required = []),
				R.required.push("customize"),
				N.push(R);
			const O = i.$vo(k),
				B = O.taskDescription;
			B.required = ["label"];
			const U = B.properties;
			(U.label = i.$vo(S)),
				(U.command = i.$vo($)),
				(U.args = i.$vo(v)),
				(U.isShellCommand = i.$vo(a)),
				(U.dependsOn = n),
				(U.hide = i.$vo(h)),
				(U.dependsOrder = g),
				(U.identifier = i.$vo(T)),
				(U.type = i.$vo(y)),
				(U.presentation = i.$vo(f)),
				(U.terminal = b),
				(U.icon = i.$vo(o)),
				(U.group = i.$vo(l)),
				(U.runOptions = i.$vo(P)),
				(U.detail = p),
				(U.taskName.deprecationMessage = t.localize(9803, null));
			const z = i.$vo(B);
			(B.default = {
				label: "My Task",
				type: "shell",
				command: "echo Hello",
				problemMatcher: [],
			}),
				(O.showOutputType.deprecationMessage = t.localize(9804, null)),
				(U.echoCommand.deprecationMessage = t.localize(9805, null)),
				(U.suppressTaskName.deprecationMessage = t.localize(9806, null)),
				(U.isBuildCommand.deprecationMessage = t.localize(9807, null)),
				(U.isTestCommand.deprecationMessage = t.localize(9808, null)),
				(z.properties.type = {
					type: "string",
					enum: ["process"],
					default: "process",
					description: t.localize(9809, null),
				}),
				z.required.push("command"),
				z.required.push("type"),
				N.push(z),
				N.push({ $ref: "#/definitions/taskDescription" });
			const F = O.taskRunnerConfiguration.properties,
				x = F.tasks;
			(x.items = { oneOf: N }),
				(F.inputs = m.$OQc.definitions.inputs),
				(O.commandConfiguration.properties.isShellCommand = i.$vo(a)),
				(O.commandConfiguration.properties.args = i.$vo(v)),
				(O.options.properties.shell = {
					$ref: "#/definitions/shellConfiguration",
				}),
				(F.isShellCommand = i.$vo(a)),
				(F.type = i.$vo(y)),
				(F.group = i.$vo(l)),
				(F.presentation = i.$vo(f)),
				(F.suppressTaskName.deprecationMessage = t.localize(9810, null)),
				(F.taskSelector.deprecationMessage = t.localize(9811, null));
			const H = i.$vo(O.taskRunnerConfiguration);
			delete H.properties.tasks,
				(H.additionalProperties = !1),
				(O.osSpecificTaskRunnerConfiguration = H),
				(F.version = i.$vo(I));
			const q = {
				oneOf: [
					{
						allOf: [
							{
								type: "object",
								required: ["version"],
								properties: {
									version: i.$vo(I),
									windows: {
										$ref: "#/definitions/osSpecificTaskRunnerConfiguration",
										description: t.localize(9812, null),
									},
									osx: {
										$ref: "#/definitions/osSpecificTaskRunnerConfiguration",
										description: t.localize(9813, null),
									},
									linux: {
										$ref: "#/definitions/osSpecificTaskRunnerConfiguration",
										description: t.localize(9814, null),
									},
								},
							},
							{ $ref: "#/definitions/taskRunnerConfiguration" },
						],
					},
				],
			};
			q.definitions = O;
			function V(K, J) {
				const W = K[J].properties;
				W
					? Object.keys(W).forEach((X) => {
							V(W, X);
						})
					: d.$MQc(K[J]);
			}
			Object.getOwnPropertyNames(O).forEach((K) => {
				const J = K + "2";
				(O[J] = O[K]), delete O[K], V(O, J);
			}),
				u(q);
			function G() {
				try {
					const K = E.$03.keys().map((J) => "$" + J);
					(O.problemMatcherType2.oneOf[0].enum = K),
						(O.problemMatcherType2.oneOf[2].items.anyOf[0].enum = K);
				} catch {
					console.log("Installing problem matcher ids failed");
				}
			}
			E.$03.onReady().then(() => {
				G();
			}),
				(e.default = q);
		},
	),
		define(
			de[424],
			he([1, 0, 4, 28, 19, 82, 8, 699, 10]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.TaskDefinition =
						e.TasksSchemaProperties =
						e.TaskSettingId =
						e.KeyedTaskIdentifier =
						e.TaskEvent =
						e.TaskRunSource =
						e.TaskRunType =
						e.TaskEventKind =
						e.$i4 =
						e.JsonSchemaVersion =
						e.ExecutionEngine =
						e.$h4 =
						e.$g4 =
						e.$f4 =
						e.$e4 =
						e.$d4 =
						e.RunOptions =
						e.RunOnOptions =
						e.DependsOrder =
						e.TaskSourceKind =
						e.TaskScope =
						e.TaskGroup =
						e.CommandString =
						e.RuntimeType =
						e.PresentationOptions =
						e.PanelKind =
						e.RevealProblemKind =
						e.RevealKind =
						e.CommandOptions =
						e.$c4 =
						e.ShellQuoting =
						e.$b4 =
						e.$a4 =
						e.$_3 =
							void 0),
					(t = mt(t)),
					(i = mt(i)),
					(w = mt(w)),
					(E = mt(E)),
					(e.$_3 = "settings"),
					(e.$a4 = new C.$5j("taskRunning", !1, t.localize(9945, null))),
					(e.$b4 = t.localize2(9947, "Tasks"));
				var r;
				(function (z) {
					(z[(z.Escape = 1)] = "Escape"),
						(z[(z.Strong = 2)] = "Strong"),
						(z[(z.Weak = 3)] = "Weak");
				})(r || (e.ShellQuoting = r = {})),
					(e.$c4 = "$customized"),
					(function (z) {
						function F(x) {
							if (!x) return z.Strong;
							switch (x.toLowerCase()) {
								case "escape":
									return z.Escape;
								case "strong":
									return z.Strong;
								case "weak":
									return z.Weak;
								default:
									return z.Strong;
							}
						}
						z.from = F;
					})(r || (e.ShellQuoting = r = {}));
				var u;
				(function (z) {
					z.defaults = { cwd: "${workspaceFolder}" };
				})(u || (e.CommandOptions = u = {}));
				var a;
				(function (z) {
					(z[(z.Always = 1)] = "Always"),
						(z[(z.Silent = 2)] = "Silent"),
						(z[(z.Never = 3)] = "Never");
				})(a || (e.RevealKind = a = {})),
					(function (z) {
						function F(x) {
							switch (x.toLowerCase()) {
								case "always":
									return z.Always;
								case "silent":
									return z.Silent;
								case "never":
									return z.Never;
								default:
									return z.Always;
							}
						}
						z.fromString = F;
					})(a || (e.RevealKind = a = {}));
				var h;
				(function (z) {
					(z[(z.Never = 1)] = "Never"),
						(z[(z.OnProblem = 2)] = "OnProblem"),
						(z[(z.Always = 3)] = "Always");
				})(h || (e.RevealProblemKind = h = {})),
					(function (z) {
						function F(x) {
							switch (x.toLowerCase()) {
								case "always":
									return z.Always;
								case "never":
									return z.Never;
								case "onproblem":
									return z.OnProblem;
								default:
									return z.OnProblem;
							}
						}
						z.fromString = F;
					})(h || (e.RevealProblemKind = h = {}));
				var c;
				(function (z) {
					(z[(z.Shared = 1)] = "Shared"),
						(z[(z.Dedicated = 2)] = "Dedicated"),
						(z[(z.New = 3)] = "New");
				})(c || (e.PanelKind = c = {})),
					(function (z) {
						function F(x) {
							switch (x.toLowerCase()) {
								case "shared":
									return z.Shared;
								case "dedicated":
									return z.Dedicated;
								case "new":
									return z.New;
								default:
									return z.Shared;
							}
						}
						z.fromString = F;
					})(c || (e.PanelKind = c = {}));
				var n;
				(function (z) {
					z.defaults = {
						echo: !0,
						reveal: a.Always,
						revealProblems: h.Never,
						focus: !1,
						panel: c.Shared,
						showReuseMessage: !0,
						clear: !1,
					};
				})(n || (e.PresentationOptions = n = {}));
				var g;
				(function (z) {
					(z[(z.Shell = 1)] = "Shell"),
						(z[(z.Process = 2)] = "Process"),
						(z[(z.CustomExecution = 3)] = "CustomExecution");
				})(g || (e.RuntimeType = g = {})),
					(function (z) {
						function F(H) {
							switch (H.toLowerCase()) {
								case "shell":
									return z.Shell;
								case "process":
									return z.Process;
								case "customExecution":
									return z.CustomExecution;
								default:
									return z.Process;
							}
						}
						z.fromString = F;
						function x(H) {
							switch (H) {
								case z.Shell:
									return "shell";
								case z.Process:
									return "process";
								case z.CustomExecution:
									return "customExecution";
								default:
									return "process";
							}
						}
						z.toString = x;
					})(g || (e.RuntimeType = g = {}));
				var p;
				(function (z) {
					function F(x) {
						return i.$lg(x) ? x : x.value;
					}
					z.value = F;
				})(p || (e.CommandString = p = {}));
				var o;
				(function (z) {
					(z.Clean = { _id: "clean", isDefault: !1 }),
						(z.Build = { _id: "build", isDefault: !1 }),
						(z.Rebuild = { _id: "rebuild", isDefault: !1 }),
						(z.Test = { _id: "test", isDefault: !1 });
					function F(H) {
						return (
							H === z.Clean._id ||
							H === z.Build._id ||
							H === z.Rebuild._id ||
							H === z.Test._id
						);
					}
					z.is = F;
					function x(H) {
						if (H !== void 0)
							return i.$lg(H) ? (F(H) ? { _id: H, isDefault: !1 } : void 0) : H;
					}
					z.from = x;
				})(o || (e.TaskGroup = o = {}));
				var f;
				(function (z) {
					(z[(z.Global = 1)] = "Global"),
						(z[(z.Workspace = 2)] = "Workspace"),
						(z[(z.Folder = 3)] = "Folder");
				})(f || (e.TaskScope = f = {}));
				var b;
				(function (z) {
					(z.Workspace = "workspace"),
						(z.Extension = "extension"),
						(z.InMemory = "inMemory"),
						(z.WorkspaceFile = "workspaceFile"),
						(z.User = "user");
					function F(x) {
						switch (x) {
							case z.User:
								return m.ConfigurationTarget.USER;
							case z.WorkspaceFile:
								return m.ConfigurationTarget.WORKSPACE;
							default:
								return m.ConfigurationTarget.WORKSPACE_FOLDER;
						}
					}
					z.toConfigurationTarget = F;
				})(b || (e.TaskSourceKind = b = {}));
				var s;
				(function (z) {
					(z.parallel = "parallel"), (z.sequence = "sequence");
				})(s || (e.DependsOrder = s = {}));
				var l;
				(function (z) {
					(z[(z.default = 1)] = "default"),
						(z[(z.folderOpen = 2)] = "folderOpen");
				})(l || (e.RunOnOptions = l = {}));
				var y;
				(function (z) {
					z.defaults = {
						reevaluateOnRerun: !0,
						runOn: l.default,
						instanceLimit: 1,
					};
				})(y || (e.RunOptions = y = {}));
				class $ {
					constructor(F, x, H, q, V, G) {
						(this._label = ""),
							(this._id = F),
							x && (this._label = x),
							H && (this.type = H),
							(this.runOptions = q),
							(this.configurationProperties = V),
							(this._source = G);
					}
					getDefinition(F) {}
					getMapKey() {
						return this._id;
					}
					getKey() {}
					getCommonTaskId() {
						const F = { folder: this.d(), id: this._id };
						return JSON.stringify(F);
					}
					clone() {
						return this.f(Object.assign({}, this));
					}
					getWorkspaceFolder() {}
					getWorkspaceFileName() {}
					getTelemetryKind() {
						return "unknown";
					}
					matches(F, x = !1) {
						if (F === void 0) return !1;
						if (i.$lg(F))
							return (
								F === this._label ||
								F === this.configurationProperties.identifier ||
								(x && F === this._id)
							);
						const H = this.getDefinition(!0);
						return H !== void 0 && H._key === F._key;
					}
					getQualifiedLabel() {
						const F = this.getWorkspaceFolder();
						return F ? `${this._label} (${F.name})` : this._label;
					}
					getTaskExecution() {
						return { id: this._id, task: this };
					}
					addTaskLoadMessages(F) {
						this.c === void 0 && (this.c = []),
							F && (this.c = this.c.concat(F));
					}
					get taskLoadMessages() {
						return this.c;
					}
				}
				e.$d4 = $;
				class v extends $ {
					constructor(F, x, H, q, V, G, K, J) {
						super(F, H, void 0, K, J, x),
							(this.command = {}),
							(this._source = x),
							(this.hasDefinedMatchers = G),
							V && (this.command = V);
					}
					clone() {
						return new v(
							this._id,
							this._source,
							this._label,
							this.type,
							this.command,
							this.hasDefinedMatchers,
							this.runOptions,
							this.configurationProperties,
						);
					}
					customizes() {
						if (this._source && this._source.customizes)
							return this._source.customizes;
					}
					getDefinition(F = !1) {
						if (F && this._source.customizes !== void 0)
							return this._source.customizes;
						{
							let x;
							switch (this.command ? this.command.runtime : void 0) {
								case g.Shell:
									x = "shell";
									break;
								case g.Process:
									x = "process";
									break;
								case g.CustomExecution:
									x = "customExecution";
									break;
								case void 0:
									x = "$composite";
									break;
								default:
									throw new Error("Unexpected task runtime");
							}
							return { type: x, _key: this._id, id: this._id };
						}
					}
					static is(F) {
						return F instanceof v;
					}
					getMapKey() {
						const F = this._source.config.workspaceFolder;
						return F
							? `${F.uri.toString()}|${this._id}|${this.instance}`
							: `${this._id}|${this.instance}`;
					}
					d() {
						return this._source.kind === b.User
							? e.$_3
							: this._source.config.workspaceFolder?.uri.toString();
					}
					getCommonTaskId() {
						return this._source.customizes
							? super.getCommonTaskId()
							: (this.getKey() ?? super.getCommonTaskId());
					}
					getKey() {
						const F = this.d();
						if (!F) return;
						let x = this.configurationProperties.identifier;
						this._source.kind !== b.Workspace && (x += this._source.kind);
						const H = { type: e.$c4, folder: F, id: x };
						return JSON.stringify(H);
					}
					getWorkspaceFolder() {
						return this._source.config.workspaceFolder;
					}
					getWorkspaceFileName() {
						return this._source.config.workspace &&
							this._source.config.workspace.configuration
							? w.$kh(this._source.config.workspace.configuration)
							: void 0;
					}
					getTelemetryKind() {
						return this._source.customizes
							? "workspace>extension"
							: "workspace";
					}
					f(F) {
						return new v(
							F._id,
							F._source,
							F._label,
							F.type,
							F.command,
							F.hasDefinedMatchers,
							F.runOptions,
							F.configurationProperties,
						);
					}
				}
				e.$e4 = v;
				class S extends $ {
					constructor(F, x, H, q, V, G, K) {
						super(F, H, q, G, K, x), (this._source = x), (this.configures = V);
					}
					static is(F) {
						return F instanceof S;
					}
					f(F) {
						return F;
					}
					getDefinition() {
						return this.configures;
					}
					getWorkspaceFileName() {
						return this._source.config.workspace &&
							this._source.config.workspace.configuration
							? w.$kh(this._source.config.workspace.configuration)
							: void 0;
					}
					getWorkspaceFolder() {
						return this._source.config.workspaceFolder;
					}
					d() {
						return this._source.kind === b.User
							? e.$_3
							: this._source.config.workspaceFolder?.uri.toString();
					}
					getKey() {
						const F = this.d();
						if (!F) return;
						let x = this.configurationProperties.identifier;
						this._source.kind !== b.Workspace && (x += this._source.kind);
						const H = { type: e.$c4, folder: F, id: x };
						return JSON.stringify(H);
					}
				}
				e.$f4 = S;
				class I extends $ {
					constructor(F, x, H, q, V, G, K, J, W) {
						super(F, H, q, J, W, x),
							(this.defines = V),
							(this.hasDefinedMatchers = K),
							(this.command = G),
							(this.icon = W.icon),
							(this.hide = W.hide);
					}
					clone() {
						return new I(
							this._id,
							this._source,
							this._label,
							this.type,
							this.defines,
							this.command,
							this.hasDefinedMatchers,
							this.runOptions,
							this.configurationProperties,
						);
					}
					getDefinition() {
						return this.defines;
					}
					static is(F) {
						return F instanceof I;
					}
					getMapKey() {
						const F = this._source.workspaceFolder;
						return F
							? `${this._source.scope.toString()}|${F.uri.toString()}|${this._id}|${this.instance}`
							: `${this._source.scope.toString()}|${this._id}|${this.instance}`;
					}
					d() {
						if (this._source.scope === f.Folder && this._source.workspaceFolder)
							return this._source.workspaceFolder.uri.toString();
					}
					getKey() {
						const F = {
							type: "contributed",
							scope: this._source.scope,
							id: this._id,
						};
						return (F.folder = this.d()), JSON.stringify(F);
					}
					getWorkspaceFolder() {
						return this._source.workspaceFolder;
					}
					getTelemetryKind() {
						return "extension";
					}
					f(F) {
						return new I(
							F._id,
							F._source,
							F._label,
							F.type,
							F.defines,
							F.command,
							F.hasDefinedMatchers,
							F.runOptions,
							F.configurationProperties,
						);
					}
				}
				e.$g4 = I;
				class T extends $ {
					constructor(F, x, H, q, V, G) {
						super(F, H, q, V, G, x), (this._source = x);
					}
					clone() {
						return new T(
							this._id,
							this._source,
							this._label,
							this.type,
							this.runOptions,
							this.configurationProperties,
						);
					}
					static is(F) {
						return F instanceof T;
					}
					getTelemetryKind() {
						return "composite";
					}
					getMapKey() {
						return `${this._id}|${this.instance}`;
					}
					d() {}
					f(F) {
						return new T(
							F._id,
							F._source,
							F._label,
							F.type,
							F.runOptions,
							F.configurationProperties,
						);
					}
				}
				e.$h4 = T;
				var P;
				(function (z) {
					(z[(z.Process = 1)] = "Process"), (z[(z.Terminal = 2)] = "Terminal");
				})(P || (e.ExecutionEngine = P = {})),
					(function (z) {
						z._default = z.Terminal;
					})(P || (e.ExecutionEngine = P = {}));
				var k;
				(function (z) {
					(z[(z.V0_1_0 = 1)] = "V0_1_0"), (z[(z.V2_0_0 = 2)] = "V2_0_0");
				})(k || (e.JsonSchemaVersion = k = {}));
				class L {
					constructor(F) {
						this.c = new Map();
						for (let x = 0; x < F.length; x++)
							this.c.set(F[x].uri.toString(), x);
					}
					compare(F, x) {
						const H = F.getWorkspaceFolder(),
							q = x.getWorkspaceFolder();
						if (H && q) {
							let V = this.c.get(H.uri.toString());
							V = V === void 0 ? 0 : V + 1;
							let G = this.c.get(q.uri.toString());
							return (
								(G = G === void 0 ? 0 : G + 1),
								V === G ? F._label.localeCompare(x._label) : V - G
							);
						} else return !H && q ? -1 : H && !q ? 1 : 0;
					}
				}
				e.$i4 = L;
				var D;
				(function (z) {
					(z.DependsOnStarted = "dependsOnStarted"),
						(z.AcquiredInput = "acquiredInput"),
						(z.Start = "start"),
						(z.ProcessStarted = "processStarted"),
						(z.Active = "active"),
						(z.Inactive = "inactive"),
						(z.Changed = "changed"),
						(z.Terminated = "terminated"),
						(z.ProcessEnded = "processEnded"),
						(z.End = "end");
				})(D || (e.TaskEventKind = D = {}));
				var M;
				(function (z) {
					(z.SingleRun = "singleRun"), (z.Background = "background");
				})(M || (e.TaskRunType = M = {}));
				var N;
				(function (z) {
					(z[(z.System = 0)] = "System"),
						(z[(z.User = 1)] = "User"),
						(z[(z.FolderOpen = 2)] = "FolderOpen"),
						(z[(z.ConfigurationChange = 3)] = "ConfigurationChange"),
						(z[(z.Reconnect = 4)] = "Reconnect");
				})(N || (e.TaskRunSource = N = {}));
				var A;
				(function (z) {
					function F(J) {
						return {
							taskId: J._id,
							taskName: J.configurationProperties.name,
							runType: J.configurationProperties.isBackground
								? M.Background
								: M.SingleRun,
							group: J.configurationProperties.group,
							__task: J,
						};
					}
					function x(J, W, X) {
						return {
							...F(J),
							kind: D.Start,
							terminalId: W,
							resolvedVariables: X,
						};
					}
					z.start = x;
					function H(J, W, X) {
						return {
							...F(J),
							kind: D.ProcessStarted,
							terminalId: W,
							processId: X,
						};
					}
					z.processStarted = H;
					function q(J, W, X) {
						return {
							...F(J),
							kind: D.ProcessEnded,
							terminalId: W,
							exitCode: X,
						};
					}
					z.processEnded = q;
					function V(J, W, X) {
						return {
							...F(J),
							kind: D.Terminated,
							exitReason: X,
							terminalId: W,
						};
					}
					z.terminated = V;
					function G(J, W, X) {
						return { ...F(W), kind: J, terminalId: X };
					}
					z.general = G;
					function K() {
						return { kind: D.Changed };
					}
					z.changed = K;
				})(A || (e.TaskEvent = A = {}));
				var R;
				(function (z) {
					function F(H) {
						const q = Object.keys(H).sort();
						let V = "";
						for (const G of q) {
							let K = H[G];
							K instanceof Object
								? (K = F(K))
								: typeof K == "string" && (K = K.replace(/,/g, ",,")),
								(V += G + "," + K + ",");
						}
						return V;
					}
					function x(H) {
						const V = { _key: F(H), type: H.taskType };
						return Object.assign(V, H), V;
					}
					z.create = x;
				})(R || (e.KeyedTaskIdentifier = R = {}));
				var O;
				(function (z) {
					(z.AutoDetect = "task.autoDetect"),
						(z.SaveBeforeRun = "task.saveBeforeRun"),
						(z.ShowDecorations = "task.showDecorations"),
						(z.ProblemMatchersNeverPrompt = "task.problemMatchers.neverPrompt"),
						(z.SlowProviderWarning = "task.slowProviderWarning"),
						(z.QuickOpenHistory = "task.quickOpen.history"),
						(z.QuickOpenDetail = "task.quickOpen.detail"),
						(z.QuickOpenSkip = "task.quickOpen.skip"),
						(z.QuickOpenShowAll = "task.quickOpen.showAll"),
						(z.AllowAutomaticTasks = "task.allowAutomaticTasks"),
						(z.Reconnection = "task.reconnection"),
						(z.VerboseLogging = "task.verboseLogging");
				})(O || (e.TaskSettingId = O = {}));
				var B;
				(function (z) {
					(z.Tasks = "tasks"),
						(z.SuppressTaskName = "tasks.suppressTaskName"),
						(z.Windows = "tasks.windows"),
						(z.Osx = "tasks.osx"),
						(z.Linux = "tasks.linux"),
						(z.ShowOutput = "tasks.showOutput"),
						(z.IsShellCommand = "tasks.isShellCommand"),
						(z.ServiceTestSetting = "tasks.service.testSetting");
				})(B || (e.TasksSchemaProperties = B = {}));
				var U;
				(function (z) {
					function F(x, H) {
						const q = d.$$3.get(x.type);
						if (q === void 0) {
							const J = E.$vo(x);
							return delete J._key, R.create(J);
						}
						const V = Object.create(null);
						V.type = q.taskType;
						const G = new Set();
						q.required.forEach((J) => G.add(J));
						const K = q.properties;
						for (const J of Object.keys(K)) {
							const W = x[J];
							if (W != null) V[J] = W;
							else if (G.has(J)) {
								const X = K[J];
								if (X.default !== void 0) V[J] = E.$vo(X.default);
								else
									switch (X.type) {
										case "boolean":
											V[J] = !1;
											break;
										case "number":
										case "integer":
											V[J] = 0;
											break;
										case "string":
											V[J] = "";
											break;
										default:
											H.error(
												t.localize(9946, null, JSON.stringify(x, void 0, 0), J),
											);
											return;
									}
							}
						}
						return R.create(V);
					}
					z.createTaskIdentifier = F;
				})(U || (e.TaskDefinition = U = {}));
			},
		),
		define(
			de[3328],
			he([1, 0, 4, 19, 3, 419, 424, 63, 11, 174, 10, 6, 34]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ZWc = e.$YWc = void 0),
					(t = mt(t)),
					(i = mt(i));
				const c = "task.allowAutomaticTasks";
				let n = class extends w.$1c {
					constructor(o, f, b, s) {
						super(),
							(this.b = o),
							(this.c = f),
							(this.f = b),
							(this.g = s),
							(this.a = !1),
							this.b.isReconnected
								? this.h()
								: this.D(
										a.Event.once(this.b.onDidReconnectToTasks)(
											async () => await this.h(),
										),
									),
							this.D(this.f.onDidChangeTrust(async () => await this.h()));
					}
					async h() {
						if (
							!this.f.isWorkspaceTrusted() ||
							this.a ||
							this.c.getValue(c) === "off"
						)
							return;
						(this.a = !0),
							this.g.trace("RunAutomaticTasks: Trying to run tasks."),
							this.b.hasTaskSystemInfo ||
								(this.g.trace("RunAutomaticTasks: Awaiting task system info."),
								await a.Event.toPromise(
									a.Event.once(this.b.onDidChangeTaskSystemInfo),
								));
						let o = await this.b.getWorkspaceTasks(C.TaskRunSource.FolderOpen);
						this.g.trace(`RunAutomaticTasks: Found ${o.size} automatic tasks`);
						let f = this.n(this.b, o);
						if (
							(this.g.trace(
								`RunAutomaticTasks: taskNames=${JSON.stringify(f.taskNames)}`,
							),
							f.taskNames.length === 0)
						) {
							if (
								!(await Promise.race([
									new Promise((s) => {
										a.Event.toPromise(
											a.Event.once(this.b.onDidChangeTaskConfig),
										).then(() => s(!0));
									}),
									new Promise((s) => {
										const l = setTimeout(() => {
											clearTimeout(l), s(!1);
										}, 1e4);
									}),
								]))
							) {
								this.g.trace(
									"RunAutomaticTasks: waited some extra time, but no update of tasks configuration",
								);
								return;
							}
							(o = await this.b.getWorkspaceTasks(C.TaskRunSource.FolderOpen)),
								(f = this.n(this.b, o)),
								this.g.trace(
									`RunAutomaticTasks: updated taskNames=${JSON.stringify(f.taskNames)}`,
								);
						}
						this.q(this.b, this.c, f.tasks, f.taskNames);
					}
					j(o, f) {
						f.forEach((b) => {
							b instanceof Promise
								? b.then((s) => {
										s && o.run(s);
									})
								: o.run(b);
						});
					}
					m(o) {
						switch (C.TaskSourceKind.toConfigurationTarget(o.kind)) {
							case u.ConfigurationTarget.WORKSPACE_FOLDER:
								return i.$nh(o.config.workspaceFolder.uri, o.config.file);
							case u.ConfigurationTarget.WORKSPACE:
								return o.config.workspace?.configuration ?? void 0;
						}
					}
					n(o, f) {
						const b = new Array(),
							s = new Array(),
							l = new Map();
						return (
							f &&
								f.forEach((y) => {
									if (
										(y.set &&
											y.set.tasks.forEach(($) => {
												if ($.runOptions.runOn === C.RunOnOptions.folderOpen) {
													b.push($), s.push($._label);
													const v = this.m($._source);
													v && l.set(v.fsPath, v);
												}
											}),
										y.configurations)
									) {
										for (const $ of Object.values(
											y.configurations.byIdentifier,
										))
											if ($.runOptions.runOn === C.RunOnOptions.folderOpen) {
												b.push(
													new Promise((S) => {
														o.getTask(y.workspaceFolder, $._id, !0).then((I) =>
															S(I),
														);
													}),
												),
													$._label
														? s.push($._label)
														: s.push($.configures.task);
												const v = this.m($._source);
												v && l.set(v.fsPath, v);
											}
									}
								}),
							{ tasks: b, taskNames: s, locations: l }
						);
					}
					async q(o, f, b, s) {
						s.length !== 0 && f.getValue(c) !== "off" && this.j(o, b);
					}
				};
				(e.$YWc = n),
					(e.$YWc = n =
						Ne([j(0, E.$Zpc), j(1, u.$gj), j(2, r.$pO), j(3, h.$ik)], n));
				class g extends m.$3X {
					static {
						this.ID = "workbench.action.tasks.manageAutomaticRunning";
					}
					static {
						this.LABEL = t.localize(9631, null);
					}
					constructor() {
						super({ id: g.ID, title: g.LABEL, category: C.$b4 });
					}
					async run(o) {
						const f = o.get(d.$DJ),
							b = o.get(u.$gj),
							s = { label: t.localize(9632, null) },
							l = { label: t.localize(9633, null) },
							y = await f.pick([s, l], { canPickMany: !1 });
						y &&
							b.updateValue(
								c,
								y === s ? "on" : "off",
								u.ConfigurationTarget.USER,
							);
					}
				}
				e.$ZWc = g;
			},
		),
		define(
			de[1815],
			he([
				1, 0, 4, 82, 424, 28, 419, 63, 10, 3, 6, 40, 14, 35, 26, 79, 57, 514,
				1678, 21,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				var s;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$iXc = e.$hXc = e.$fXc = e.$eXc = void 0),
					(e.$gXc = l),
					(t = mt(t)),
					(i = mt(i)),
					(E = mt(E)),
					(e.$eXc = "task.quickOpen.detail"),
					(e.$fXc = "task.quickOpen.skip");
				function l(I) {
					return "uri" in I;
				}
				const y = t.localize(9681, null);
				e.$hXc = (0, g.$$O)(
					"tasks-list-configure",
					h.$ak.gear,
					t.localize(9682, null),
				);
				const $ = (0, g.$$O)(
						"tasks-remove",
						h.$ak.close,
						t.localize(9683, null),
					),
					v = "runTaskStorageKey";
				let S = (s = class extends r.$1c {
					constructor(T, P, k, L, D, M, N) {
						super(),
							(this.g = T),
							(this.h = P),
							(this.m = k),
							(this.n = L),
							(this.q = D),
							(this.r = M),
							(this.s = N),
							(this.c = this.g.createSorter());
					}
					u() {
						return !!this.h.getValue(e.$eXc);
					}
					w(T) {
						if (T._label) return T._label;
						if (w.$f4.is(T)) {
							let P = T.configures.type;
							const k = i.$vo(T.configures);
							return (
								delete k._key,
								delete k.type,
								Object.keys(k).forEach((L) => (P += `: ${k[L]}`)),
								P
							);
						}
						return "";
					}
					static getTaskLabelWithIcon(T, P) {
						const k = P || T._label,
							L = T.configurationProperties.icon;
						return L
							? L.id
								? `$(${L.id}) ${k}`
								: `$(${h.$ak.tools.id}) ${k}`
							: `${k}`;
					}
					static applyColorStyles(T, P, k) {
						if (T.configurationProperties.icon?.color) {
							const L = k.getColorTheme(),
								D = (0, o.$Qnc)(L);
							return (
								(P.iconClasses = [
									(0, o.$Onc)(T.configurationProperties.icon.color),
								]),
								D
							);
						}
					}
					y(T, P = []) {
						const k = [
								{
									iconClass: n.ThemeIcon.asClassName(e.$hXc),
									tooltip: t.localize(9684, null),
								},
								...P,
							],
							L = {
								label: s.getTaskLabelWithIcon(T, this.w(T)),
								description: this.g.getTaskDescription(T),
								task: T,
								detail: this.u() ? T.configurationProperties.detail : void 0,
								buttons: k,
							},
							D = s.applyColorStyles(T, L, this.q);
						return D && this.D(D), L;
					}
					z(T, P, k, L = []) {
						T.push({ type: "separator", label: k }),
							P.forEach((D) => {
								D.configurationProperties.hide || T.push(this.y(D, L));
							});
					}
					C(T, P) {
						T.push({ type: "separator", label: t.localize(9685, null) }),
							P.forEach((k) => {
								T.push({
									label: `$(folder) ${k}`,
									task: k,
									ariaLabel: t.localize(9686, null, k),
								});
							}),
							T.push({ label: y, task: y, alwaysShow: !0 });
					}
					F(T) {
						const P = [];
						return (
							Array.from(T).forEach(([k, L]) => {
								if ((L.set && P.push(...L.set.tasks), L.configurations))
									for (const D in L.configurations.byIdentifier)
										P.push(L.configurations.byIdentifier[D]);
							}),
							P
						);
					}
					G(T, P) {
						let k = [];
						const L = Array(T.length).fill(!1);
						for (let M = 0; M < P.length; M++) {
							const N = P[M].getWorkspaceFolder()?.uri.toString(),
								A = P[M].getDefinition()?._key,
								R = P[M].type,
								O = P[M]._label,
								B = P[M].getKey(),
								U = T.findIndex(
									(z) =>
										(N &&
											A &&
											z.getWorkspaceFolder()?.uri.toString() === N &&
											(z.getDefinition()?._key === A ||
												(z.type === R && z._label === O))) ||
										(B && z.getKey() === B),
								);
							U === -1 ? k.push(P[M]) : ((T[U] = P[M]), (L[U] = !0));
						}
						k = k.sort((M, N) => this.c.compare(M, N));
						const D = [];
						for (let M = 0; M < T.length; M++)
							(L[M] || w.$f4.is(T[M])) && D.push(T[M]);
						return { configuredTasks: k, recentTasks: D };
					}
					async getTopLevelEntries(T) {
						if (this.f !== void 0) return { entries: this.f };
						let P = (await this.g.getSavedTasks("historical")).reverse();
						const k = this.F(await this.g.getWorkspaceTasks()),
							L = this.g.taskTypes();
						this.f = [];
						const D = this.G(P, k),
							M = D.configuredTasks;
						if (((P = D.recentTasks), P.length > 0)) {
							const N = {
								iconClass: n.ThemeIcon.asClassName($),
								tooltip: t.localize(9687, null),
							};
							this.z(this.f, P, t.localize(9688, null), [N]);
						}
						return (
							k.length > 0 &&
								M.length > 0 &&
								this.z(this.f, M, t.localize(9689, null)),
							T &&
								k.length === 0 &&
								(this.f.push({
									type: "separator",
									label: t.localize(9690, null),
								}),
								this.f.push(T)),
							L.length > 0 && this.C(this.f, L),
							{
								entries: this.f,
								isSingleConfigured: k.length === 1 ? k[0] : void 0,
							}
						);
					}
					async handleSettingOption(T) {
						const { confirmed: P } = await this.r.confirm({
							type: a.Severity.Warning,
							message: t.localize(9691, null, T),
							cancelButton: t.localize(9692, null),
						});
						if (P)
							return (
								await this.h.updateValue(`${T}.autoDetect`, "on"),
								await new Promise((k) => setTimeout(() => k(), 100)),
								this.show(t.localize(9693, null), void 0, T)
							);
					}
					async show(T, P, k, L) {
						const D = new r.$Zc(),
							M = D.add(this.m.createQuickPick({ useSeparators: !0 }));
						(M.placeholder = T),
							(M.matchOnDescription = !0),
							(M.ignoreFocusOut = !1),
							D.add(
								M.onDidTriggerItemButton(async (A) => {
									const R = A.item.task;
									if (A.button.iconClass === n.ThemeIcon.asClassName($)) {
										const O = R && !E.$lg(R) ? R.getKey() : void 0;
										O && this.g.removeRecentlyUsedTask(O);
										const B = M.items.indexOf(A.item);
										B >= 0 &&
											(M.items = [
												...M.items.slice(0, B),
												...M.items.slice(B + 1),
											]);
									} else if (
										A.button.iconClass === n.ThemeIcon.asClassName(e.$hXc)
									) {
										if ((this.m.cancel(), w.$g4.is(R)))
											this.g.customize(R, void 0, !0);
										else if (w.$e4.is(R) || w.$f4.is(R)) {
											let O = !1;
											try {
												O = await this.g.openConfig(R);
											} catch {}
											O || this.g.customize(R, void 0, !0);
										}
									}
								}),
							),
							L && (M.value = L);
						let N = k;
						if (!N) {
							const A = await this.getTopLevelEntries(P);
							if (A.isSingleConfigured && this.h.getValue(e.$fXc))
								return D.dispose(), this.J(A.isSingleConfigured);
							const R = A.entries;
							N = await this.H(M, R, D);
						}
						do
							if (E.$lg(N)) {
								if (L) {
									await this.H(
										M,
										(await this.getTopLevelEntries(P)).entries,
										D,
									),
										D.dispose();
									return;
								}
								const A = await this.doPickerSecondLevel(M, D, N);
								if (A && !A.settingType && A.task === null)
									(M.value = ""),
										(N = await this.H(
											M,
											(await this.getTopLevelEntries(P)).entries,
											D,
										));
								else
									return A && E.$lg(A.settingType)
										? (D.dispose(), this.handleSettingOption(A.settingType))
										: (D.dispose(),
											A?.task && !E.$lg(A?.task) ? this.J(A?.task) : void 0);
							} else return N ? (D.dispose(), this.J(N)) : (D.dispose(), N);
						while (!0);
					}
					async H(T, P, k) {
						return (
							(T.items = P),
							k.add((0, f.$7Uc)(this.s, v, T, !0)),
							(
								await new Promise((D) => {
									k.add(
										u.Event.once(T.onDidAccept)(async () => {
											D(T.selectedItems ? T.selectedItems[0] : void 0);
										}),
									);
								})
							)?.task
						);
					}
					async doPickerSecondLevel(T, P, k, L) {
						if (((T.busy = !0), k === y)) {
							const M = (await this.g.tasks())
								.filter((N) => !N.configurationProperties.hide)
								.sort((N, A) => this.c.compare(N, A))
								.map((N) => this.y(N));
							M.push(...s.allSettingEntries(this.h)), (T.items = M);
						} else (T.value = L || ""), (T.items = await this.I(k));
						return (
							await T.show(),
							(T.busy = !1),
							await new Promise((M) => {
								P.add(
									u.Event.once(T.onDidAccept)(async () => {
										M(T.selectedItems ? T.selectedItems[0] : void 0);
									}),
								);
							})
						);
					}
					static allSettingEntries(T) {
						const P = [],
							k = s.getSettingEntry(T, "grunt");
						k && P.push(k);
						const L = s.getSettingEntry(T, "gulp");
						L && P.push(L);
						const D = s.getSettingEntry(T, "jake");
						return D && P.push(D), P;
					}
					static getSettingEntry(T, P) {
						if (T.getValue(`${P}.autoDetect`) === "off")
							return {
								label: t.localize(
									9694,
									null,
									P[0].toUpperCase() + P.slice(1),
									P,
								),
								task: null,
								settingType: P,
								alwaysShow: !0,
							};
					}
					async I(T) {
						const P = (await this.g.tasks({ type: T })).sort((D, M) =>
							this.c.compare(D, M),
						);
						let k = [];
						if (P.length > 0) {
							for (const D of P)
								D.configurationProperties.hide || k.push(this.y(D));
							k.push(
								{ type: "separator" },
								{ label: t.localize(9695, null), task: null, alwaysShow: !0 },
							);
						} else
							k = [
								{
									label: t.localize(9696, null, T),
									task: null,
									alwaysShow: !0,
								},
							];
						const L = s.getSettingEntry(this.h, T);
						return L && k.push(L), k;
					}
					async J(T) {
						if (!w.$f4.is(T)) return T;
						const P = await this.g.tryResolveTask(T);
						return P || this.n.error(t.localize(9697, null, T.type)), P;
					}
				});
				(e.$iXc = S),
					(e.$iXc =
						S =
						s =
							Ne(
								[
									j(0, C.$Zpc),
									j(1, m.$gj),
									j(2, d.$DJ),
									j(3, a.$4N),
									j(4, c.$iP),
									j(5, p.$GO),
									j(6, b.$lq),
								],
								S,
							));
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[3329],
		he([1, 0, 4, 14, 3, 111, 1814, 424, 419, 90, 79, 184]),
		function (ce, e, t, i, w, E, C, d, m, r, u, a) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$aXc = e.$_Wc = e.$$Wc = e.$0Wc = void 0),
				(t = mt(t)),
				(E = xi(E));
			const h = "task_terminal_status";
			(e.$0Wc = {
				id: h,
				icon: u.$fP,
				severity: E.default.Info,
				tooltip: t.localize(9701, null),
			}),
				(e.$$Wc = {
					id: h,
					icon: i.$ak.check,
					severity: E.default.Info,
					tooltip: t.localize(9702, null),
				});
			const c = {
				id: h,
				icon: i.$ak.check,
				severity: E.default.Info,
				tooltip: t.localize(9703, null),
			};
			e.$_Wc = {
				id: h,
				icon: i.$ak.error,
				severity: E.default.Error,
				tooltip: t.localize(9704, null),
			};
			const n = {
					id: h,
					icon: i.$ak.error,
					severity: E.default.Error,
					tooltip: t.localize(9705, null),
				},
				g = {
					id: h,
					icon: i.$ak.warning,
					severity: E.default.Warning,
					tooltip: t.localize(9706, null),
				},
				p = {
					id: h,
					icon: i.$ak.warning,
					severity: E.default.Warning,
					tooltip: t.localize(9707, null),
				},
				o = {
					id: h,
					icon: i.$ak.info,
					severity: E.default.Info,
					tooltip: t.localize(9708, null),
				},
				f = {
					id: h,
					icon: i.$ak.info,
					severity: E.default.Info,
					tooltip: t.localize(9709, null),
				};
			let b = class extends w.$1c {
				constructor(l, y) {
					super(),
						(this.c = y),
						(this.a = new Map()),
						this.D(
							l.onDidStateChange(($) => {
								switch ($.kind) {
									case d.TaskEventKind.ProcessStarted:
									case d.TaskEventKind.Active:
										this.j($);
										break;
									case d.TaskEventKind.Inactive:
										this.h($);
										break;
									case d.TaskEventKind.ProcessEnded:
										this.g($);
										break;
								}
							}),
						),
						this.D(
							(0, w.$Yc)(() => {
								for (const $ of this.a.values()) $.disposeListener?.dispose();
								this.a.clear();
							}),
						);
				}
				addTerminal(l, y, $) {
					const v = { id: h, severity: E.default.Info };
					y.statusList.add(v),
						this.D(
							$.onDidFindFirstMatch(() => {
								(this.b = y.registerMarker()), this.b && this.D(this.b);
							}),
						),
						this.D(
							$.onDidFindErrors(() => {
								this.b &&
									y.addBufferMarker({
										marker: this.b,
										hoverMessage: t.localize(9710, null),
										disableCommandStorage: !0,
									});
							}),
						),
						this.D(
							$.onDidRequestInvalidateLastMarker(() => {
								this.b?.dispose(), (this.b = void 0);
							}),
						),
						this.a.set(y.instanceId, {
							terminal: y,
							task: l,
							status: v,
							problemMatcher: $,
							taskRunEnded: !1,
						});
				}
				f(l) {
					if (!(!("terminalId" in l) || !l.terminalId))
						return this.a.get(l.terminalId);
				}
				g(l) {
					const y = this.f(l);
					if (y)
						if (
							((y.taskRunEnded = !0),
							y.terminal.statusList.remove(y.status),
							l.exitCode === 0 && y.problemMatcher.numberOfMatches === 0)
						)
							if (
								(this.c.playSignal(a.$Twb.taskCompleted),
								y.task.configurationProperties.isBackground)
							)
								for (const $ of y.terminal.statusList.statuses)
									y.terminal.statusList.remove($);
							else y.terminal.statusList.add(e.$$Wc);
						else
							l.exitCode ||
							y.problemMatcher.maxMarkerSeverity === r.MarkerSeverity.Error
								? (this.c.playSignal(a.$Twb.taskFailed),
									y.terminal.statusList.add(e.$_Wc))
								: y.problemMatcher.maxMarkerSeverity ===
										r.MarkerSeverity.Warning
									? y.terminal.statusList.add(g)
									: y.problemMatcher.maxMarkerSeverity ===
											r.MarkerSeverity.Info && y.terminal.statusList.add(o);
				}
				h(l) {
					const y = this.f(l);
					!y ||
						!y.problemMatcher ||
						y.taskRunEnded ||
						(y.terminal.statusList.remove(y.status),
						y.problemMatcher.numberOfMatches === 0
							? (this.c.playSignal(a.$Twb.taskCompleted),
								y.terminal.statusList.add(c))
							: y.problemMatcher.maxMarkerSeverity === r.MarkerSeverity.Error
								? (this.c.playSignal(a.$Twb.taskFailed),
									y.terminal.statusList.add(n))
								: y.problemMatcher.maxMarkerSeverity ===
										r.MarkerSeverity.Warning
									? y.terminal.statusList.add(p)
									: y.problemMatcher.maxMarkerSeverity ===
											r.MarkerSeverity.Info && y.terminal.statusList.add(f));
				}
				j(l) {
					const y = this.f(l);
					y &&
						(y.disposeListener ||
							((y.disposeListener = this.D(new w.$2c())),
							(y.disposeListener.value = y.terminal.onDisposed(() => {
								l.terminalId &&
									(this.a.delete(l.terminalId), y.disposeListener?.dispose());
							}))),
						(y.taskRunEnded = !1),
						y.terminal.statusList.remove(y.status),
						(y.problemMatcher instanceof C.$8Wc ||
							y.problemMatcher?.problemMatchers.length > 0 ||
							l.runType === d.TaskRunType.SingleRun) &&
							y.terminal.statusList.add(e.$0Wc));
				}
			};
			(e.$aXc = b), (e.$aXc = b = Ne([j(0, m.$Zpc), j(1, a.$Owb)], b));
		},
	),
		define(
			de[3330],
			he([1, 0, 4, 63, 392, 132, 53, 419, 424, 1815, 10, 28, 40, 57, 35, 21]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				var p;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$kXc = void 0);
				let o = class extends w.$GLb {
					static {
						p = this;
					}
					static {
						this.PREFIX = "task ";
					}
					constructor(b, s, l, y, $, v, S, I) {
						super(p.PREFIX, {
							noResultsPick: { label: (0, t.localize)(9699, null) },
						}),
							(this.a = s),
							(this.b = l),
							(this.h = y),
							(this.j = $),
							(this.m = v),
							(this.n = S),
							(this.q = I);
					}
					async g(b, s, l) {
						if (l.isCancellationRequested) return [];
						const y = new r.$iXc(
								this.a,
								this.b,
								this.h,
								this.j,
								this.n,
								this.m,
								this.q,
							),
							$ = await y.getTopLevelEntries(),
							v = [];
						for (const S of $.entries) {
							const I = (0, E.$Zk)(b, S.label);
							if (!I) continue;
							S.type === "separator" && v.push(S);
							const T = S.task,
								P = S;
							(P.highlights = { label: I }),
								(P.trigger = (k) => {
									if (k === 1 && P.buttons?.length === 2) {
										const L = T && !(0, a.$lg)(T) ? T.getKey() : void 0;
										return (
											L && this.a.removeRecentlyUsedTask(L),
											w.TriggerAction.REFRESH_PICKER
										);
									} else
										return (
											m.$g4.is(T)
												? this.a.customize(T, void 0, !0)
												: m.$e4.is(T) && this.a.openConfig(T),
											w.TriggerAction.CLOSE_PICKER
										);
								}),
								(P.accept = async () => {
									if ((0, a.$lg)(T)) {
										const k = await y.show(
											(0, t.localize)(9700, null),
											void 0,
											T,
										);
										k && this.a.run(k, { attachProblemMatcher: !0 });
									} else
										this.a.run(await this.s(T), { attachProblemMatcher: !0 });
								}),
								v.push(P);
						}
						return v;
					}
					async s(b) {
						return m.$f4.is(b) ? this.a.tryResolveTask(b) : b;
					}
				};
				(e.$kXc = o),
					(e.$kXc =
						o =
						p =
							Ne(
								[
									j(0, C.$q2),
									j(1, d.$Zpc),
									j(2, u.$gj),
									j(3, i.$DJ),
									j(4, h.$4N),
									j(5, c.$GO),
									j(6, n.$iP),
									j(7, g.$lq),
								],
								o,
							));
			},
		),
		define(
			de[1816],
			he([1, 0, 4, 82, 12, 28, 47, 570, 424, 699, 419]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.TaskConfigSource =
						e.$4Wc =
						e.JsonSchemaVersion =
						e.ExecutionEngine =
						e.TaskParser =
						e.GroupKind =
						e.ProblemMatcherConverter =
						e.RunOptions =
						e.RunOnOptions =
						e.CommandString =
						e.ITaskIdentifier =
						e.ShellQuoting =
							void 0),
					(e.$5Wc = G),
					(e.$6Wc = K),
					(t = mt(t)),
					(i = mt(i)),
					(E = mt(E)),
					(C = mt(C)),
					(m = mt(m));
				var a;
				(function (J) {
					(J[(J.escape = 1)] = "escape"),
						(J[(J.strong = 2)] = "strong"),
						(J[(J.weak = 3)] = "weak");
				})(a || (e.ShellQuoting = a = {}));
				var h;
				(function (J) {
					function W(X) {
						return X !== void 0 && E.$lg(X.type);
					}
					J.is = W;
				})(h || (e.ITaskIdentifier = h = {}));
				var c;
				(function (J) {
					function W(X) {
						return E.$lg(X)
							? X
							: E.$mg(X)
								? X.join(" ")
								: E.$lg(X.value)
									? X.value
									: X.value.join(" ");
					}
					J.value = W;
				})(c || (e.CommandString = c = {}));
				var n;
				(function (J) {
					(J[(J.Unknown = 0)] = "Unknown"),
						(J[(J.String = 1)] = "String"),
						(J[(J.ProblemMatcher = 2)] = "ProblemMatcher"),
						(J[(J.Array = 3)] = "Array");
				})(n || (n = {}));
				const g = [];
				Object.freeze(g);
				function p(J, W, X) {
					const Y = W[X];
					Y !== void 0 && (J[X] = Y);
				}
				function o(J, W, X) {
					const Y = W[X];
					J[X] === void 0 && Y !== void 0 && (J[X] = Y);
				}
				function f(J, W, X = !1) {
					if (J == null || W === void 0) return !0;
					for (const Y of W) {
						const ie = J[Y.property];
						if (ie != null) {
							if (Y.type !== void 0 && !Y.type.isEmpty(ie)) return !1;
							if (!Array.isArray(ie) || ie.length > 0 || X) return !1;
						}
					}
					return !0;
				}
				function b(J, W, X) {
					if (!W || f(W, X)) return J;
					if (!J || f(J, X)) return W;
					for (const Y of X) {
						const ie = Y.property;
						let ne;
						Y.type !== void 0
							? (ne = Y.type.assignProperties(J[ie], W[ie]))
							: (ne = W[ie]),
							ne != null && (J[ie] = ne);
					}
					return J;
				}
				function s(J, W, X, Y = !1) {
					if (!W || f(W, X)) return J;
					if (!J || f(J, X, Y)) return W;
					for (const ie of X) {
						const ne = ie.property;
						let ee;
						ie.type
							? (ee = ie.type.fillProperties(J[ne], W[ne]))
							: J[ne] === void 0 && (ee = W[ne]),
							ee != null && (J[ne] = ee);
					}
					return J;
				}
				function l(J, W, X, Y) {
					if (J && Object.isFrozen(J)) return J;
					if (J == null || W === void 0 || W === null)
						return W != null ? i.$vo(W) : void 0;
					for (const ie of X) {
						const ne = ie.property;
						if (J[ne] !== void 0) continue;
						let ee;
						ie.type ? (ee = ie.type.fillDefaults(J[ne], Y)) : (ee = W[ne]),
							ee != null && (J[ne] = ee);
					}
					return J;
				}
				function y(J, W) {
					if (J != null) {
						if (Object.isFrozen(J)) return J;
						for (const X of W)
							if (X.type) {
								const Y = J[X.property];
								Y && X.type.freeze(Y);
							}
						return Object.freeze(J), J;
					}
				}
				var $;
				(function (J) {
					function W(X) {
						if (!X) return m.RunOnOptions.default;
						switch (X.toLowerCase()) {
							case "folderopen":
								return m.RunOnOptions.folderOpen;
							case "default":
							default:
								return m.RunOnOptions.default;
						}
					}
					J.fromString = W;
				})($ || (e.RunOnOptions = $ = {}));
				var v;
				(function (J) {
					const W = [
						{ property: "reevaluateOnRerun" },
						{ property: "runOn" },
						{ property: "instanceLimit" },
					];
					function X(ne) {
						return {
							reevaluateOnRerun: ne ? ne.reevaluateOnRerun : !0,
							runOn: ne ? $.fromString(ne.runOn) : m.RunOnOptions.default,
							instanceLimit: ne ? ne.instanceLimit : 1,
						};
					}
					J.fromConfiguration = X;
					function Y(ne, ee) {
						return b(ne, ee, W);
					}
					J.assignProperties = Y;
					function ie(ne, ee) {
						return s(ne, ee, W);
					}
					J.fillProperties = ie;
				})(v || (e.RunOptions = v = {}));
				var S;
				(function (J) {
					const W = [
						{ property: "executable" },
						{ property: "args" },
						{ property: "quoting" },
					];
					function X(Q) {
						const Z = Q;
						return Z && (E.$lg(Z.executable) || E.$mg(Z.args));
					}
					J.is = X;
					function Y(Q, Z) {
						if (!X(Q)) return;
						const se = {};
						return (
							Q.executable !== void 0 && (se.executable = Q.executable),
							Q.args !== void 0 && (se.args = Q.args.slice()),
							Q.quoting !== void 0 && (se.quoting = i.$vo(Q.quoting)),
							se
						);
					}
					J.from = Y;
					function ie(Q) {
						return f(Q, W, !0);
					}
					J.isEmpty = ie;
					function ne(Q, Z) {
						return b(Q, Z, W);
					}
					J.assignProperties = ne;
					function ee(Q, Z) {
						return s(Q, Z, W, !0);
					}
					J.fillProperties = ee;
					function _(Q, Z) {
						return Q;
					}
					J.fillDefaults = _;
					function te(Q) {
						if (Q) return Object.freeze(Q);
					}
					J.freeze = te;
				})(S || (S = {}));
				var I;
				(function (J) {
					const W = [
							{ property: "cwd" },
							{ property: "env" },
							{ property: "shell", type: S },
						],
						X = { cwd: "${workspaceFolder}" };
					function Y(Q, Z) {
						const se = {};
						return (
							Q.cwd !== void 0 &&
								(E.$lg(Q.cwd)
									? (se.cwd = Q.cwd)
									: Z.taskLoadIssues.push(t.localize(9924, null, Q.cwd))),
							Q.env !== void 0 && (se.env = i.$vo(Q.env)),
							(se.shell = S.from(Q.shell, Z)),
							ie(se) ? void 0 : se
						);
					}
					J.from = Y;
					function ie(Q) {
						return f(Q, W);
					}
					J.isEmpty = ie;
					function ne(Q, Z) {
						if (Z === void 0 || ie(Z)) return Q;
						if (Q === void 0 || ie(Q)) return Z;
						if ((p(Q, Z, "cwd"), Q.env === void 0)) Q.env = Z.env;
						else if (Z.env !== void 0) {
							const se = Object.create(null);
							Q.env !== void 0 &&
								Object.keys(Q.env).forEach((re) => (se[re] = Q.env[re])),
								Z.env !== void 0 &&
									Object.keys(Z.env).forEach((re) => (se[re] = Z.env[re])),
								(Q.env = se);
						}
						return (Q.shell = S.assignProperties(Q.shell, Z.shell)), Q;
					}
					J.assignProperties = ne;
					function ee(Q, Z) {
						return s(Q, Z, W);
					}
					J.fillProperties = ee;
					function _(Q, Z) {
						return l(Q, X, W, Z);
					}
					J.fillDefaults = _;
					function te(Q) {
						return y(Q, W);
					}
					J.freeze = te;
				})(I || (I = {}));
				var T;
				(function (J) {
					let W;
					(function (le) {
						const oe = [
							{ property: "echo" },
							{ property: "reveal" },
							{ property: "revealProblems" },
							{ property: "focus" },
							{ property: "panel" },
							{ property: "showReuseMessage" },
							{ property: "clear" },
							{ property: "group" },
							{ property: "close" },
						];
						function ae(me, ve) {
							let ge,
								be,
								Ce,
								Le,
								Fe,
								Oe,
								xe,
								He,
								Ke,
								Je = !1;
							E.$rg(me.echoCommand) && ((ge = me.echoCommand), (Je = !0)),
								E.$lg(me.showOutput) &&
									((be = m.RevealKind.fromString(me.showOutput)), (Je = !0));
							const Te = me.presentation || me.terminal;
							if (
								(Te &&
									(E.$rg(Te.echo) && (ge = Te.echo),
									E.$lg(Te.reveal) && (be = m.RevealKind.fromString(Te.reveal)),
									E.$lg(Te.revealProblems) &&
										(Ce = m.RevealProblemKind.fromString(Te.revealProblems)),
									E.$rg(Te.focus) && (Le = Te.focus),
									E.$lg(Te.panel) && (Fe = m.PanelKind.fromString(Te.panel)),
									E.$rg(Te.showReuseMessage) && (Oe = Te.showReuseMessage),
									E.$rg(Te.clear) && (xe = Te.clear),
									E.$lg(Te.group) && (He = Te.group),
									E.$rg(Te.close) && (Ke = Te.close),
									(Je = !0)),
								!!Je)
							)
								return {
									echo: ge,
									reveal: be,
									revealProblems: Ce,
									focus: Le,
									panel: Fe,
									showReuseMessage: Oe,
									clear: xe,
									group: He,
									close: Ke,
								};
						}
						le.from = ae;
						function pe(me, ve) {
							return b(me, ve, oe);
						}
						le.assignProperties = pe;
						function $e(me, ve) {
							return s(me, ve, oe);
						}
						le.fillProperties = $e;
						function ye(me, ve) {
							const ge = ve.engine === m.ExecutionEngine.Terminal;
							return l(
								me,
								{
									echo: ge,
									reveal: m.RevealKind.Always,
									revealProblems: m.RevealProblemKind.Never,
									focus: !1,
									panel: m.PanelKind.Shared,
									showReuseMessage: !0,
									clear: !1,
								},
								oe,
								ve,
							);
						}
						le.fillDefaults = ye;
						function ue(me) {
							return y(me, oe);
						}
						le.freeze = ue;
						function fe(me) {
							return f(me, oe);
						}
						le.isEmpty = fe;
					})((W = J.PresentationOptions || (J.PresentationOptions = {})));
					let X;
					(function (le) {
						function oe(ae) {
							if (ae != null) {
								if (E.$lg(ae)) return ae;
								if (E.$mg(ae)) return ae.join(" ");
								{
									const pe = m.ShellQuoting.from(ae.quoting),
										$e = E.$lg(ae.value)
											? ae.value
											: E.$mg(ae.value)
												? ae.value.join(" ")
												: void 0;
									return $e ? { value: $e, quoting: pe } : void 0;
								}
							}
						}
						le.from = oe;
					})(X || (X = {}));
					const Y = [
						{ property: "runtime" },
						{ property: "name" },
						{ property: "options", type: I },
						{ property: "args" },
						{ property: "taskSelector" },
						{ property: "suppressTaskName" },
						{ property: "presentation", type: W },
					];
					function ie(le, oe) {
						let ae = ne(le, oe),
							pe;
						return (
							le.windows && oe.platform === w.Platform.Windows
								? (pe = ne(le.windows, oe))
								: le.osx && oe.platform === w.Platform.Mac
									? (pe = ne(le.osx, oe))
									: le.linux &&
										oe.platform === w.Platform.Linux &&
										(pe = ne(le.linux, oe)),
							pe &&
								(ae = te(
									ae,
									pe,
									oe.schemaVersion === m.JsonSchemaVersion.V2_0_0,
								)),
							_(ae) ? void 0 : ae
						);
					}
					J.from = ie;
					function ne(le, oe) {
						const ae = X.from(le.command);
						let pe;
						E.$lg(le.type) &&
							(le.type === "shell" || le.type === "process") &&
							(pe = m.RuntimeType.fromString(le.type)),
							E.$rg(le.isShellCommand) || S.is(le.isShellCommand)
								? (pe = m.RuntimeType.Shell)
								: le.isShellCommand !== void 0 &&
									(pe = le.isShellCommand
										? m.RuntimeType.Shell
										: m.RuntimeType.Process);
						const $e = { name: ae, runtime: pe, presentation: W.from(le, oe) };
						if (le.args !== void 0) {
							$e.args = [];
							for (const ye of le.args) {
								const ue = X.from(ye);
								ue !== void 0
									? $e.args.push(ue)
									: oe.taskLoadIssues.push(
											t.localize(
												9925,
												null,
												ye ? JSON.stringify(ye, void 0, 4) : "undefined",
											),
										);
							}
						}
						return (
							le.options !== void 0 &&
								(($e.options = I.from(le.options, oe)),
								$e.options &&
									$e.options.shell === void 0 &&
									S.is(le.isShellCommand) &&
									(($e.options.shell = S.from(le.isShellCommand, oe)),
									oe.engine !== m.ExecutionEngine.Terminal &&
										oe.taskLoadIssues.push(t.localize(9926, null)))),
							E.$lg(le.taskSelector) && ($e.taskSelector = le.taskSelector),
							E.$rg(le.suppressTaskName) &&
								($e.suppressTaskName = le.suppressTaskName),
							_($e) ? void 0 : $e
						);
					}
					function ee(le) {
						return le && !!le.name;
					}
					J.hasCommand = ee;
					function _(le) {
						return f(le, Y);
					}
					J.isEmpty = _;
					function te(le, oe, ae) {
						return _(oe)
							? le
							: _(le)
								? oe
								: (p(le, oe, "name"),
									p(le, oe, "runtime"),
									p(le, oe, "taskSelector"),
									p(le, oe, "suppressTaskName"),
									oe.args !== void 0 &&
										(le.args === void 0 || ae
											? (le.args = oe.args)
											: (le.args = le.args.concat(oe.args))),
									(le.presentation = W.assignProperties(
										le.presentation,
										oe.presentation,
									)),
									(le.options = I.assignProperties(le.options, oe.options)),
									le);
					}
					J.assignProperties = te;
					function Q(le, oe) {
						return s(le, oe, Y);
					}
					J.fillProperties = Q;
					function Z(le, oe, ae) {
						if (oe === void 0 || _(oe)) return le;
						if (
							((le = le || {
								name: void 0,
								runtime: void 0,
								presentation: void 0,
							}),
							le.name === void 0)
						) {
							o(le, oe, "name"),
								o(le, oe, "taskSelector"),
								o(le, oe, "suppressTaskName");
							let pe = oe.args ? oe.args.slice() : [];
							!le.suppressTaskName &&
								ae &&
								(le.taskSelector !== void 0
									? pe.push(le.taskSelector + ae)
									: pe.push(ae)),
								le.args && (pe = pe.concat(le.args)),
								(le.args = pe);
						}
						return (
							o(le, oe, "runtime"),
							(le.presentation = W.fillProperties(
								le.presentation,
								oe.presentation,
							)),
							(le.options = I.fillProperties(le.options, oe.options)),
							le
						);
					}
					J.fillGlobals = Z;
					function se(le, oe) {
						!le ||
							Object.isFrozen(le) ||
							(le.name !== void 0 &&
								le.runtime === void 0 &&
								(le.runtime = m.RuntimeType.Process),
							(le.presentation = W.fillDefaults(le.presentation, oe)),
							_(le) || (le.options = I.fillDefaults(le.options, oe)),
							le.args === void 0 && (le.args = g),
							le.suppressTaskName === void 0 &&
								(le.suppressTaskName =
									oe.schemaVersion === m.JsonSchemaVersion.V2_0_0));
					}
					J.fillDefaults = se;
					function re(le) {
						return y(le, Y);
					}
					J.freeze = re;
				})(T || (T = {}));
				var P;
				(function (J) {
					function W(ee, _) {
						const te = Object.create(null);
						return (
							Array.isArray(ee) &&
								ee.forEach((Q) => {
									const Z = new d.$93(_.problemReporter).parse(Q);
									(0, d.$33)(Z)
										? (te[Z.name] = Z)
										: _.problemReporter.error(
												t.localize(9927, null, JSON.stringify(Q, void 0, 4)),
											);
								}),
							te
						);
					}
					J.namedFrom = W;
					function X(ee, _) {
						let te = {};
						return (
							ee.windows &&
							ee.windows.problemMatcher &&
							_.platform === w.Platform.Windows
								? (te = Y(ee.windows.problemMatcher, _))
								: ee.osx &&
										ee.osx.problemMatcher &&
										_.platform === w.Platform.Mac
									? (te = Y(ee.osx.problemMatcher, _))
									: ee.linux &&
											ee.linux.problemMatcher &&
											_.platform === w.Platform.Linux
										? (te = Y(ee.linux.problemMatcher, _))
										: ee.problemMatcher && (te = Y(ee.problemMatcher, _)),
							te
						);
					}
					J.fromWithOsConfig = X;
					function Y(ee, _) {
						const te = [];
						if (ee === void 0) return { value: te };
						const Q = [];
						function Z(re) {
							re.value && te.push(re.value), re.errors && Q.push(...re.errors);
						}
						const se = ie(ee);
						if (se === n.Unknown) {
							const re = t.localize(9928, null, JSON.stringify(ee, null, 4));
							_.problemReporter.warn(re);
						} else
							se === n.String || se === n.ProblemMatcher
								? Z(ne(ee, _))
								: se === n.Array &&
									ee.forEach((le) => {
										Z(ne(le, _));
									});
						return { value: te, errors: Q };
					}
					J.from = Y;
					function ie(ee) {
						return E.$lg(ee)
							? n.String
							: Array.isArray(ee)
								? n.Array
								: E.$sg(ee)
									? n.Unknown
									: n.ProblemMatcher;
					}
					function ne(ee, _) {
						if (E.$lg(ee)) {
							let te = ee;
							if (te.length > 1 && te[0] === "$") {
								te = te.substring(1);
								const Q = d.$03.get(te);
								if (Q) return { value: i.$vo(Q) };
								let Z = _.namedProblemMatchers[te];
								if (Z) return (Z = i.$vo(Z)), delete Z.name, { value: Z };
							}
							return { errors: [t.localize(9929, null, ee)] };
						} else {
							const te = ee;
							return { value: new d.$93(_.problemReporter).parse(te) };
						}
					}
				})(P || (e.ProblemMatcherConverter = P = {}));
				var k;
				(function (J) {
					function W(Y) {
						if (Y !== void 0) {
							if (E.$lg(Y) && m.TaskGroup.is(Y))
								return { _id: Y, isDefault: !1 };
							if (E.$lg(Y.kind) && m.TaskGroup.is(Y.kind)) {
								const ie = Y.kind,
									ne = E.$sg(Y.isDefault) ? !1 : Y.isDefault;
								return { _id: ie, isDefault: ne };
							}
						}
					}
					J.from = W;
					function X(Y) {
						return E.$lg(Y)
							? Y
							: Y.isDefault
								? { kind: Y._id, isDefault: Y.isDefault }
								: Y._id;
					}
					J.to = X;
				})(k || (e.GroupKind = k = {}));
				var L;
				(function (J) {
					function W(Y, ie) {
						switch (ie) {
							case x.User:
								return m.$_3;
							case x.TasksJson:
								return Y.workspaceFolder.uri;
							default:
								return Y.workspace && Y.workspace.configuration
									? Y.workspace.configuration
									: Y.workspaceFolder.uri;
						}
					}
					function X(Y, ie, ne) {
						return E.$lg(Y)
							? { uri: W(ie, ne), task: Y }
							: h.is(Y)
								? {
										uri: W(ie, ne),
										task: m.TaskDefinition.createTaskIdentifier(
											Y,
											ie.problemReporter,
										),
									}
								: void 0;
					}
					J.from = X;
				})(L || (L = {}));
				var D;
				(function (J) {
					function W(X) {
						switch (X) {
							case m.DependsOrder.sequence:
								return m.DependsOrder.sequence;
							case m.DependsOrder.parallel:
							default:
								return m.DependsOrder.parallel;
						}
					}
					J.from = W;
				})(D || (D = {}));
				var M;
				(function (J) {
					const W = [
						{ property: "name" },
						{ property: "identifier" },
						{ property: "group" },
						{ property: "isBackground" },
						{ property: "promptOnClose" },
						{ property: "dependsOn" },
						{ property: "presentation", type: T.PresentationOptions },
						{ property: "problemMatchers" },
						{ property: "options" },
						{ property: "icon" },
						{ property: "hide" },
					];
					function X(ie, ne, ee, _, te) {
						if (!ie) return {};
						const Q = {};
						if (te)
							for (const se of Object.keys(te))
								ie[se] !== void 0 && (Q[se] = i.$vo(ie[se]));
						if (
							(E.$lg(ie.taskName) && (Q.name = ie.taskName),
							E.$lg(ie.label) &&
								ne.schemaVersion === m.JsonSchemaVersion.V2_0_0 &&
								(Q.name = ie.label),
							E.$lg(ie.identifier) && (Q.identifier = ie.identifier),
							(Q.icon = ie.icon),
							(Q.hide = ie.hide),
							ie.isBackground !== void 0 &&
								(Q.isBackground = !!ie.isBackground),
							ie.promptOnClose !== void 0 &&
								(Q.promptOnClose = !!ie.promptOnClose),
							(Q.group = k.from(ie.group)),
							ie.dependsOn !== void 0)
						)
							if (Array.isArray(ie.dependsOn))
								Q.dependsOn = ie.dependsOn.reduce((se, re) => {
									const le = L.from(re, ne, _);
									return le && se.push(le), se;
								}, []);
							else {
								const se = L.from(ie.dependsOn, ne, _);
								Q.dependsOn = se ? [se] : void 0;
							}
						(Q.dependsOrder = D.from(ie.dependsOrder)),
							ee &&
								(ie.presentation !== void 0 || ie.terminal !== void 0) &&
								(Q.presentation = T.PresentationOptions.from(ie, ne)),
							ee &&
								ie.options !== void 0 &&
								(Q.options = I.from(ie.options, ne));
						const Z = P.fromWithOsConfig(ie, ne);
						return (
							Z.value !== void 0 && (Q.problemMatchers = Z.value),
							ie.detail && (Q.detail = ie.detail),
							Y(Q) ? {} : { value: Q, errors: Z.errors }
						);
					}
					J.from = X;
					function Y(ie) {
						return f(ie, W);
					}
					J.isEmpty = Y;
				})(M || (M = {}));
				const N = "Workspace";
				var A;
				(function (J) {
					const W = "grunt.",
						X = "jake.",
						Y = "gulp.",
						ie = "vscode.npm.",
						ne = "vscode.typescript.";
					function ee(_, te, Q, Z, se) {
						if (!_) return;
						const re = _.type,
							le = _.customize;
						if (!re && !le) {
							te.problemReporter.error(
								t.localize(9930, null, JSON.stringify(_, null, 4)),
							);
							return;
						}
						const oe = re ? se?.get?.(re) || r.$$3.get(re) : void 0;
						if (!oe) {
							const me = t.localize(9931, null, re);
							te.problemReporter.error(me);
							return;
						}
						let ae;
						if (
							(E.$lg(le)
								? le.indexOf(W) === 0
									? (ae = { type: "grunt", task: le.substring(W.length) })
									: le.indexOf(X) === 0
										? (ae = { type: "jake", task: le.substring(X.length) })
										: le.indexOf(Y) === 0
											? (ae = { type: "gulp", task: le.substring(Y.length) })
											: le.indexOf(ie) === 0
												? (ae = {
														type: "npm",
														script: le.substring(ie.length + 4),
													})
												: le.indexOf(ne) === 0 &&
													(ae = {
														type: "typescript",
														tsconfig: le.substring(ne.length + 6),
													})
								: E.$lg(_.type) && (ae = _),
							ae === void 0)
						) {
							te.problemReporter.error(
								t.localize(9932, null, JSON.stringify(_, void 0, 0)),
							);
							return;
						}
						const pe = m.TaskDefinition.createTaskIdentifier(
							ae,
							te.problemReporter,
						);
						if (pe === void 0) {
							te.problemReporter.error(
								t.localize(9933, null, JSON.stringify(_, void 0, 0)),
							);
							return;
						}
						const $e = {
							workspaceFolder: te.workspaceFolder,
							file: ".vscode/tasks.json",
							index: Q,
							element: _,
						};
						let ye;
						switch (Z) {
							case x.User: {
								ye = { kind: m.TaskSourceKind.User, config: $e, label: N };
								break;
							}
							case x.WorkspaceFile: {
								ye = {
									kind: m.TaskSourceKind.WorkspaceFile,
									config: $e,
									label: N,
								};
								break;
							}
							default: {
								ye = { kind: m.TaskSourceKind.Workspace, config: $e, label: N };
								break;
							}
						}
						const ue = new m.$f4(
								`${oe.extensionId}.${pe._key}`,
								ye,
								void 0,
								re,
								pe,
								v.fromConfiguration(_.runOptions),
								{ hide: _.hide },
							),
							fe = M.from(_, te, !0, Z, oe.properties);
						if ((ue.addTaskLoadMessages(fe.errors), fe.value)) {
							if (
								((ue.configurationProperties = Object.assign(
									ue.configurationProperties,
									fe.value,
								)),
								ue.configurationProperties.name)
							)
								ue._label = ue.configurationProperties.name;
							else {
								let me = ue.configures.type;
								if (oe.required && oe.required.length > 0)
									for (const ve of oe.required) {
										const ge = ue.configures[ve];
										if (ge) {
											me = me + ": " + ge;
											break;
										}
									}
								ue._label = me;
							}
							ue.configurationProperties.identifier ||
								(ue.configurationProperties.identifier = pe._key);
						}
						return ue;
					}
					J.from = ee;
				})(A || (A = {}));
				var R;
				(function (J) {
					function W(ne, ee, _, te) {
						if (!ne) return;
						let Q = ne.type;
						if (
							(Q == null && (Q = m.$c4),
							Q !== m.$c4 && Q !== "shell" && Q !== "process")
						) {
							ee.problemReporter.error(
								t.localize(9934, null, JSON.stringify(ne, null, 4)),
							);
							return;
						}
						let Z = ne.taskName;
						if (
							(E.$lg(ne.label) &&
								ee.schemaVersion === m.JsonSchemaVersion.V2_0_0 &&
								(Z = ne.label),
							!Z)
						) {
							ee.problemReporter.error(
								t.localize(9935, null, JSON.stringify(ne, null, 4)),
							);
							return;
						}
						let se;
						switch (te) {
							case x.User: {
								se = {
									kind: m.TaskSourceKind.User,
									config: {
										index: _,
										element: ne,
										file: ".vscode/tasks.json",
										workspaceFolder: ee.workspaceFolder,
									},
									label: N,
								};
								break;
							}
							case x.WorkspaceFile: {
								se = {
									kind: m.TaskSourceKind.WorkspaceFile,
									config: {
										index: _,
										element: ne,
										file: ".vscode/tasks.json",
										workspaceFolder: ee.workspaceFolder,
										workspace: ee.workspace,
									},
									label: N,
								};
								break;
							}
							default: {
								se = {
									kind: m.TaskSourceKind.Workspace,
									config: {
										index: _,
										element: ne,
										file: ".vscode/tasks.json",
										workspaceFolder: ee.workspaceFolder,
									},
									label: N,
								};
								break;
							}
						}
						const re = new m.$e4(
								ee.uuidMap.getUUID(Z),
								se,
								Z,
								m.$c4,
								void 0,
								!1,
								v.fromConfiguration(ne.runOptions),
								{ name: Z, identifier: Z },
							),
							le = M.from(ne, ee, !1, te);
						if (
							(re.addTaskLoadMessages(le.errors),
							le.value &&
								(re.configurationProperties = Object.assign(
									re.configurationProperties,
									le.value,
								)),
							!0)
						) {
							const pe = ne;
							re.configurationProperties.isBackground === void 0 &&
								pe.isWatching !== void 0 &&
								(re.configurationProperties.isBackground = !!pe.isWatching),
								re.configurationProperties.group === void 0 &&
									(pe.isBuildCommand === !0
										? (re.configurationProperties.group = m.TaskGroup.Build)
										: pe.isTestCommand === !0 &&
											(re.configurationProperties.group = m.TaskGroup.Test));
						}
						const ae = T.from(ne, ee);
						return (
							ae && (re.command = ae),
							ne.command !== void 0 && (ae.suppressTaskName = !0),
							re
						);
					}
					J.from = W;
					function X(ne, ee) {
						(T.hasCommand(ne.command) ||
							ne.configurationProperties.dependsOn === void 0) &&
							(ne.command = T.fillGlobals(
								ne.command,
								ee.command,
								ne.configurationProperties.name,
							)),
							ne.configurationProperties.problemMatchers === void 0 &&
								ee.problemMatcher !== void 0 &&
								((ne.configurationProperties.problemMatchers = i.$vo(
									ee.problemMatcher,
								)),
								(ne.hasDefinedMatchers = !0)),
							ne.configurationProperties.promptOnClose === void 0 &&
								ne.configurationProperties.isBackground === void 0 &&
								ee.promptOnClose !== void 0 &&
								(ne.configurationProperties.promptOnClose = ee.promptOnClose);
					}
					J.fillGlobals = X;
					function Y(ne, ee) {
						T.fillDefaults(ne.command, ee),
							ne.configurationProperties.promptOnClose === void 0 &&
								(ne.configurationProperties.promptOnClose =
									ne.configurationProperties.isBackground !== void 0
										? !ne.configurationProperties.isBackground
										: !0),
							ne.configurationProperties.isBackground === void 0 &&
								(ne.configurationProperties.isBackground = !1),
							ne.configurationProperties.problemMatchers === void 0 &&
								(ne.configurationProperties.problemMatchers = g);
					}
					J.fillDefaults = Y;
					function ie(ne, ee) {
						const _ = new m.$e4(
							ee._id,
							Object.assign({}, ee._source, { customizes: ne.defines }),
							ee.configurationProperties.name || ne._label,
							m.$c4,
							ne.command,
							!1,
							ne.runOptions,
							{
								name:
									ee.configurationProperties.name ||
									ne.configurationProperties.name,
								identifier:
									ee.configurationProperties.identifier ||
									ne.configurationProperties.identifier,
								icon: ee.configurationProperties.icon,
								hide: ee.configurationProperties.hide,
							},
						);
						_.addTaskLoadMessages(ee.taskLoadMessages);
						const te = _.configurationProperties;
						p(te, ee.configurationProperties, "group"),
							p(te, ee.configurationProperties, "isBackground"),
							p(te, ee.configurationProperties, "dependsOn"),
							p(te, ee.configurationProperties, "problemMatchers"),
							p(te, ee.configurationProperties, "promptOnClose"),
							p(te, ee.configurationProperties, "detail"),
							(_.command.presentation = T.PresentationOptions.assignProperties(
								_.command.presentation,
								ee.configurationProperties.presentation,
							)),
							(_.command.options = I.assignProperties(
								_.command.options,
								ee.configurationProperties.options,
							)),
							(_.runOptions = v.assignProperties(_.runOptions, ee.runOptions));
						const Q = ne.configurationProperties;
						return (
							o(te, Q, "group"),
							o(te, Q, "isBackground"),
							o(te, Q, "dependsOn"),
							o(te, Q, "problemMatchers"),
							o(te, Q, "promptOnClose"),
							o(te, Q, "detail"),
							(_.command.presentation = T.PresentationOptions.fillProperties(
								_.command.presentation,
								Q.presentation,
							)),
							(_.command.options = I.fillProperties(
								_.command.options,
								Q.options,
							)),
							(_.runOptions = v.fillProperties(_.runOptions, ne.runOptions)),
							ne.hasDefinedMatchers === !0 && (_.hasDefinedMatchers = !0),
							_
						);
					}
					J.createCustomTask = ie;
				})(R || (R = {}));
				var O;
				(function (J) {
					function W(ne) {
						const ee = ne.type;
						return (
							ne.customize === void 0 &&
							(ee == null || ee === m.$c4 || ee === "shell" || ee === "process")
						);
					}
					const X = { shell: u.$Upc, process: u.$Wpc };
					function Y(ne, ee, _, te, Q) {
						const Z = { custom: [], configured: [] };
						if (!ne) return Z;
						const se = { task: void 0, rank: -1 },
							re = { task: void 0, rank: -1 },
							le = _.schemaVersion === m.JsonSchemaVersion.V2_0_0,
							oe = i.$vo(_.taskLoadIssues);
						for (let $e = 0; $e < ne.length; $e++) {
							const ye = ne[$e],
								ue = ye.type ? Q?.get?.(ye.type) || r.$$3.get(ye.type) : void 0;
							let fe = !1;
							if (
								ue &&
								ue.when &&
								!_.contextKeyService.contextMatchesRules(ue.when)
							)
								fe = !0;
							else if (!ue && ye.type) {
								for (const me of Object.keys(X))
									if (ye.type === me) {
										fe = !u.$Upc.evaluate(_.contextKeyService.getContext(null));
										break;
									}
							}
							if (fe) {
								_.problemReporter.info(t.localize(9936, null, ye.type));
								continue;
							}
							if (W(ye)) {
								const me = R.from(ye, _, $e, te);
								if (me) {
									if ((R.fillGlobals(me, ee), R.fillDefaults(me, _), le)) {
										if (
											(me.command === void 0 || me.command.name === void 0) &&
											(me.configurationProperties.dependsOn === void 0 ||
												me.configurationProperties.dependsOn.length === 0)
										) {
											_.problemReporter.error(
												t.localize(
													9937,
													null,
													me.configurationProperties.name,
													JSON.stringify(ye, void 0, 4),
												),
											);
											continue;
										}
									} else if (
										me.command === void 0 ||
										me.command.name === void 0
									) {
										_.problemReporter.warn(
											t.localize(
												9938,
												null,
												me.configurationProperties.name,
												JSON.stringify(ye, void 0, 4),
											),
										);
										continue;
									}
									me.configurationProperties.group === m.TaskGroup.Build &&
									se.rank < 2
										? ((se.task = me), (se.rank = 2))
										: me.configurationProperties.group === m.TaskGroup.Test &&
												re.rank < 2
											? ((re.task = me), (re.rank = 2))
											: me.configurationProperties.name === "build" &&
													se.rank < 1
												? ((se.task = me), (se.rank = 1))
												: me.configurationProperties.name === "test" &&
													re.rank < 1 &&
													((re.task = me), (re.rank = 1)),
										me.addTaskLoadMessages(_.taskLoadIssues),
										Z.custom.push(me);
								}
							} else {
								const me = A.from(ye, _, $e, te, Q);
								me &&
									(me.addTaskLoadMessages(_.taskLoadIssues),
									Z.configured.push(me));
							}
							_.taskLoadIssues = i.$vo(oe);
						}
						const ae = E.$lg(se.task?.configurationProperties.group)
								? se.task?.configurationProperties.group
								: se.task?.configurationProperties.group?._id,
							pe = E.$lg(re.task?.configurationProperties.group)
								? re.task?.configurationProperties.group
								: re.task?.configurationProperties.group?._id;
						return (
							ae !== m.TaskGroup.Build._id &&
							se.rank > -1 &&
							se.rank < 2 &&
							se.task
								? (se.task.configurationProperties.group = m.TaskGroup.Build)
								: pe !== m.TaskGroup.Test._id &&
									re.rank > -1 &&
									re.rank < 2 &&
									re.task &&
									(re.task.configurationProperties.group = m.TaskGroup.Test),
							Z
						);
					}
					J.from = Y;
					function ie(ne, ee) {
						if (ee === void 0 || ee.length === 0) return ne;
						if (ne === void 0 || ne.length === 0) return ee;
						if (ee) {
							const _ = Object.create(null);
							ne.forEach((Q) => {
								_[Q.configurationProperties.name] = Q;
							}),
								ee.forEach((Q) => {
									_[Q.configurationProperties.name] = Q;
								});
							const te = [];
							ne.forEach((Q) => {
								te.push(_[Q.configurationProperties.name]),
									delete _[Q.configurationProperties.name];
							}),
								Object.keys(_).forEach((Q) => te.push(_[Q])),
								(ne = te);
						}
						return ne;
					}
					J.assignTasks = ie;
				})(O || (e.TaskParser = O = {}));
				var B;
				(function (J) {
					function W(_, te) {
						let Q = X(_, te),
							Z;
						_.windows && te.platform === w.Platform.Windows
							? (Z = X(_.windows, te))
							: _.osx && te.platform === w.Platform.Mac
								? (Z = X(_.osx, te))
								: _.linux &&
									te.platform === w.Platform.Linux &&
									(Z = X(_.linux, te)),
							Z && (Q = J.assignProperties(Q, Z));
						const se = T.from(_, te);
						return (
							se && (Q.command = se), J.fillDefaults(Q, te), J.freeze(Q), Q
						);
					}
					J.from = W;
					function X(_, te) {
						const Q = {};
						return (
							_.suppressTaskName !== void 0 &&
								(Q.suppressTaskName = !!_.suppressTaskName),
							_.promptOnClose !== void 0 &&
								(Q.promptOnClose = !!_.promptOnClose),
							_.problemMatcher &&
								(Q.problemMatcher = P.from(_.problemMatcher, te).value),
							Q
						);
					}
					J.fromBase = X;
					function Y(_) {
						return (
							!_ ||
							(_.command === void 0 &&
								_.promptOnClose === void 0 &&
								_.suppressTaskName === void 0)
						);
					}
					J.isEmpty = Y;
					function ie(_, te) {
						return Y(te)
							? _
							: Y(_)
								? te
								: (p(_, te, "promptOnClose"), p(_, te, "suppressTaskName"), _);
					}
					J.assignProperties = ie;
					function ne(_, te) {
						_ &&
							(T.fillDefaults(_.command, te),
							_.suppressTaskName === void 0 &&
								(_.suppressTaskName =
									te.schemaVersion === m.JsonSchemaVersion.V2_0_0),
							_.promptOnClose === void 0 && (_.promptOnClose = !0));
					}
					J.fillDefaults = ne;
					function ee(_) {
						Object.freeze(_), _.command && T.freeze(_.command);
					}
					J.freeze = ee;
				})(B || (B = {}));
				var U;
				(function (J) {
					function W(X) {
						const Y = X.runner || X._runner;
						let ie;
						if (Y)
							switch (Y) {
								case "terminal":
									ie = m.ExecutionEngine.Terminal;
									break;
								case "process":
									ie = m.ExecutionEngine.Process;
									break;
							}
						const ne = z.from(X);
						if (ne === m.JsonSchemaVersion.V0_1_0)
							return ie || m.ExecutionEngine.Process;
						if (ne === m.JsonSchemaVersion.V2_0_0)
							return m.ExecutionEngine.Terminal;
						throw new Error("Shouldn't happen.");
					}
					J.from = W;
				})(U || (e.ExecutionEngine = U = {}));
				var z;
				(function (J) {
					const W = m.JsonSchemaVersion.V2_0_0;
					function X(Y) {
						const ie = Y.version;
						if (!ie) return W;
						switch (ie) {
							case "0.1.0":
								return m.JsonSchemaVersion.V0_1_0;
							case "2.0.0":
								return m.JsonSchemaVersion.V2_0_0;
							default:
								return W;
						}
					}
					J.from = X;
				})(z || (e.JsonSchemaVersion = z = {}));
				class F {
					constructor(W) {
						if (((this.b = Object.create(null)), W))
							for (const X of Object.keys(W.b)) {
								const Y = W.b[X];
								Array.isArray(Y) ? (this.b[X] = Y.slice()) : (this.b[X] = Y);
							}
					}
					start() {
						(this.a = this.b), (this.b = Object.create(null));
					}
					getUUID(W) {
						const X = this.a ? this.a[W] : void 0;
						let Y;
						X !== void 0 &&
							(Array.isArray(X)
								? ((Y = X.shift()), X.length === 0 && delete this.a[W])
								: ((Y = X), delete this.a[W])),
							Y === void 0 && (Y = C.$9g());
						const ie = this.b[W];
						if (ie === void 0) this.b[W] = Y;
						else if (Array.isArray(ie)) ie.push(Y);
						else {
							const ne = [ie];
							ne.push(Y), (this.b[W] = ne);
						}
						return Y;
					}
					finish() {
						this.a = void 0;
					}
				}
				e.$4Wc = F;
				var x;
				(function (J) {
					(J[(J.TasksJson = 0)] = "TasksJson"),
						(J[(J.WorkspaceFile = 1)] = "WorkspaceFile"),
						(J[(J.User = 2)] = "User");
				})(x || (e.TaskConfigSource = x = {}));
				class H {
					constructor(W, X, Y, ie, ne) {
						(this.a = W),
							(this.b = X),
							(this.e = Y),
							(this.c = ie),
							(this.d = ne);
					}
					run(W, X, Y) {
						const ie = U.from(W),
							ne = z.from(W),
							ee = {
								workspaceFolder: this.a,
								workspace: this.b,
								problemReporter: this.c,
								uuidMap: this.d,
								namedProblemMatchers: {},
								engine: ie,
								schemaVersion: ne,
								platform: this.e,
								taskLoadIssues: [],
								contextKeyService: Y,
							},
							_ = this.f(W, ee, X);
						return {
							validationStatus: this.c.status,
							custom: _.custom,
							configured: _.configured,
							engine: ie,
						};
					}
					f(W, X, Y) {
						const ie = B.from(W, X);
						if (this.c.status.isFatal()) return { custom: [], configured: [] };
						X.namedProblemMatchers = P.namedFrom(W.declares, X);
						let ne, ee;
						if (
							(W.windows && X.platform === w.Platform.Windows
								? ((ne = O.from(W.windows.tasks, ie, X, Y).custom),
									(ee = W.windows.tasks))
								: W.osx && X.platform === w.Platform.Mac
									? ((ne = O.from(W.osx.tasks, ie, X, Y).custom),
										(ee = W.osx.tasks))
									: W.linux &&
										X.platform === w.Platform.Linux &&
										((ne = O.from(W.linux.tasks, ie, X, Y).custom),
										(ee = W.linux.tasks)),
							X.schemaVersion === m.JsonSchemaVersion.V2_0_0 &&
								ne &&
								ne.length > 0 &&
								ee &&
								ee.length > 0)
						) {
							const te = [];
							for (const Q of ee) te.push(JSON.stringify(Q, null, 4));
							X.problemReporter.error(
								t.localize(
									9939,
									null,
									te.join(`
`),
								),
							);
						}
						let _ = { custom: [], configured: [] };
						if (
							(W.tasks && (_ = O.from(W.tasks, ie, X, Y)),
							ne && (_.custom = O.assignTasks(_.custom, ne)),
							(!_.custom || _.custom.length === 0) &&
								ie.command &&
								ie.command.name)
						) {
							const te = P.from(W.problemMatcher, X).value ?? [],
								Q = W.isBackground
									? !!W.isBackground
									: W.isWatching
										? !!W.isWatching
										: void 0,
								Z = m.CommandString.value(ie.command.name),
								se = new m.$e4(
									X.uuidMap.getUUID(Z),
									Object.assign({}, Y, "workspace", {
										config: {
											index: -1,
											element: W,
											workspaceFolder: X.workspaceFolder,
										},
									}),
									Z,
									m.$c4,
									{
										name: void 0,
										runtime: void 0,
										presentation: void 0,
										suppressTaskName: !0,
									},
									!1,
									{ reevaluateOnRerun: !0 },
									{
										name: Z,
										identifier: Z,
										group: m.TaskGroup.Build,
										isBackground: Q,
										problemMatchers: te,
									},
								),
								re = k.from(W.group);
							re !== void 0
								? (se.configurationProperties.group = re)
								: W.group === "none" &&
									(se.configurationProperties.group = void 0),
								R.fillGlobals(se, ie),
								R.fillDefaults(se, X),
								(_.custom = [se]);
						}
						return (
							(_.custom = _.custom || []),
							(_.configured = _.configured || []),
							_
						);
					}
				}
				const q = new Map(),
					V = new Map();
				function G(J, W, X, Y, ie, ne, ee, _ = !1) {
					const te = _ ? V : q;
					let Q = te.get(ne);
					Q || (te.set(ne, new Map()), (Q = te.get(ne)));
					let Z = Q.get(J.uri.toString());
					Z || ((Z = new F()), Q.set(J.uri.toString(), Z));
					try {
						return Z.start(), new H(J, W, X, ie, Z).run(Y, ne, ee);
					} finally {
						Z.finish();
					}
				}
				function K(J, W) {
					return R.createCustomTask(J, W);
				}
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[1817],
		he([
			1, 0, 24, 15, 6, 249, 3, 59, 82, 54, 12, 19, 111, 28, 4, 90, 25, 555, 570,
			14, 23, 26, 9, 776, 60, 3329, 1814, 1816, 1757, 424, 3143, 1758, 145,
		]),
		function (
			ce,
			e,
			t,
			i,
			w,
			E,
			C,
			d,
			m,
			r,
			u,
			a,
			h,
			c,
			n,
			g,
			p,
			o,
			f,
			b,
			s,
			l,
			y,
			$,
			v,
			S,
			I,
			T,
			P,
			k,
			L,
			D,
			M,
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$dXc = void 0),
				(i = mt(i)),
				(m = mt(m)),
				(r = mt(r)),
				(u = mt(u)),
				(a = mt(a)),
				(h = xi(h)),
				(c = mt(c)),
				(n = mt(n));
			const N = "Task";
			class A {
				static {
					this.b = /\$\{(.*?)\}/g;
				}
				constructor(x, H, q, V) {
					(this.workspaceFolder = x),
						(this.taskSystemInfo = H),
						(this.values = q),
						(this.c = V);
				}
				async resolve(x) {
					const H = [];
					x.replace(A.b, (V, ...G) => (H.push(this.d(V, G)), V));
					const q = await Promise.all(H);
					return x.replace(A.b, () => q.shift());
				}
				async d(x, H) {
					const q = this.values.get(x.substring(2, x.length - 1));
					return (
						q ?? (this.c ? this.c.resolveAsync(this.workspaceFolder, x) : x)
					);
				}
			}
			class R {
				constructor(x, H, q) {
					(this.task = x), (this.resolver = H), (this.trigger = q);
				}
				verify() {
					let x = !1;
					return (
						this.trigger &&
							this.resolvedVariables &&
							this.workspaceFolder &&
							this.shellLaunchConfig !== void 0 &&
							(x = !0),
						x
					);
				}
				getVerifiedTask() {
					if (this.verify())
						return {
							task: this.task,
							resolver: this.resolver,
							trigger: this.trigger,
							resolvedVariables: this.resolvedVariables,
							systemInfo: this.systemInfo,
							workspaceFolder: this.workspaceFolder,
							shellLaunchConfig: this.shellLaunchConfig,
						};
					throw new Error(
						"VerifiedTask was not checked. verify must be checked before getVerifiedTask.",
					);
				}
			}
			class O extends C.$1c {
				static {
					this.TelemetryEventName = "taskService";
				}
				static {
					this.b = "__process__";
				}
				static {
					this.c = {
						cmd: { strong: '"' },
						powershell: {
							escape: { escapeChar: "`", charsToEscape: ` "'()` },
							strong: "'",
							weak: '"',
						},
						bash: {
							escape: { escapeChar: "\\", charsToEscape: ` "'` },
							strong: "'",
							weak: '"',
						},
						zsh: {
							escape: { escapeChar: "\\", charsToEscape: ` "'` },
							strong: "'",
							weak: '"',
						},
					};
				}
				static {
					this.f = { Linux: O.c.bash, Mac: O.c.bash, Windows: O.c.powershell };
				}
				taskShellIntegrationStartSequence(x) {
					return (
						(0, L.$bXc)(L.VSCodeOscPt.PromptStart) +
						(0, L.$bXc)(
							L.VSCodeOscPt.Property,
							`${L.VSCodeOscProperty.Task}=True`,
						) +
						(x
							? (0, L.$bXc)(
									L.VSCodeOscPt.Property,
									`${L.VSCodeOscProperty.Cwd}=${typeof x == "string" ? x : x.fsPath}`,
								)
							: "") +
						(0, L.$bXc)(L.VSCodeOscPt.CommandStart)
					);
				}
				get taskShellIntegrationOutputSequence() {
					return (0, L.$bXc)(L.VSCodeOscPt.CommandExecuted);
				}
				constructor(
					x,
					H,
					q,
					V,
					G,
					K,
					J,
					W,
					X,
					Y,
					ie,
					ne,
					ee,
					_,
					te,
					Q,
					Z,
					se,
					re,
				) {
					super(),
						(this.L = x),
						(this.M = H),
						(this.N = q),
						(this.O = V),
						(this.P = G),
						(this.Q = K),
						(this.R = J),
						(this.S = W),
						(this.U = X),
						(this.W = Y),
						(this.X = ie),
						(this.Y = ne),
						(this.Z = ee),
						(this.$ = _),
						(this.ab = te),
						(this.bb = Q),
						(this.cb = Z),
						(this.y = !1),
						(this.G = Promise.resolve()),
						(this.H = !1),
						(this.g = Object.create(null)),
						(this.h = Object.create(null)),
						(this.j = Object.create(null)),
						(this.m = new d.$Ic()),
						(this.n = Object.create(null)),
						(this.I = new w.$re()),
						(this.q = re),
						this.D((this.F = se.createInstance(S.$aXc)));
				}
				get onDidStateChange() {
					return this.I.event;
				}
				db(x) {
					this.Sb(
						x +
							`
`,
					);
				}
				eb() {
					this.N.showChannel(this.X, !0);
				}
				reconnect(x, H) {
					return this.Db(), this.run(x, H, P.Triggers.reconnect);
				}
				run(x, H, q = P.Triggers.command) {
					x = x.clone();
					const V = k.$h4.is(x) || this.vb(x) ? [] : this.gb(x),
						G = V.length < ((x.runOptions && x.runOptions.instanceLimit) ?? 1),
						K = V[0]?.count?.count ?? 0;
					if (((this.w = new R(x, H, q)), K > 0 && (x.instance = K), !G)) {
						const J = V[V.length - 1];
						return (
							(this.u = this.w),
							{
								kind: P.TaskExecuteKind.Active,
								task: J.task,
								active: {
									same: !0,
									background: x.configurationProperties.isBackground,
								},
								promise: J.promise,
							}
						);
					}
					try {
						const J = {
							kind: P.TaskExecuteKind.Started,
							task: x,
							started: {},
							promise: this.kb(x, H, q, new Set(), new Map(), void 0),
						};
						return (
							J.promise.then((W) => {
								this.u = this.w;
							}),
							J
						);
					} catch (J) {
						throw J instanceof P.$Spc
							? J
							: J instanceof Error
								? (this.db(J.message),
									new P.$Spc(
										h.default.Error,
										J.message,
										P.TaskErrors.UnknownError,
									))
								: (this.db(J.toString()),
									new P.$Spc(
										h.default.Error,
										n.localize(9711, null),
										P.TaskErrors.UnknownError,
									));
					}
				}
				rerun() {
					if (this.u && this.u.verify()) {
						this.u.task.runOptions.reevaluateOnRerun !== void 0 &&
							!this.u.task.runOptions.reevaluateOnRerun &&
							(this.y = !0);
						const x = this.run(this.u.task, this.u.resolver);
						return (
							x.promise.then((H) => {
								this.y = !1;
							}),
							x
						);
					} else return;
				}
				fb(x) {
					x.taskLoadMessages &&
						x.taskLoadMessages.length > 0 &&
						(x.taskLoadMessages.forEach((q) => {
							this.db(
								q +
									`
`,
							);
						}),
						this.cb.prompt(
							h.default.Warning,
							n.localize(9712, null, x._label),
							[{ label: "Show Output", run: () => this.eb() }],
						));
				}
				isTaskVisible(x) {
					const H = this.g[x.getMapKey()];
					if (!H?.terminal) return !1;
					const q = this.L.activeInstance;
					return (
						!!this.P.getActiveViewWithId(M.$geb) &&
						q?.instanceId === H.terminal.instanceId
					);
				}
				revealTask(x) {
					const H = this.g[x.getMapKey()];
					if (!H?.terminal) return !1;
					const q =
						this.ab.getViewLocationById(M.$geb) ===
						v.ViewContainerLocation.Panel;
					return (
						q && this.isTaskVisible(x)
							? (this.z
									? (this.C && this.L.setActiveInstance(this.C),
										this.O.openPaneComposite(
											this.z,
											v.ViewContainerLocation.Panel,
										))
									: this.O.hideActivePaneComposite(
											v.ViewContainerLocation.Panel,
										),
								(this.z = void 0),
								(this.C = void 0))
							: (q &&
									((this.z = this.O.getActivePaneComposite(
										v.ViewContainerLocation.Panel,
									)?.getId()),
									this.z === M.$geb &&
										(this.C = this.L.activeInstance ?? void 0)),
								this.L.setActiveInstance(H.terminal),
								(k.$e4.is(x) || k.$g4.is(x)) &&
									this.M.showPanel(x.command.presentation.focus)),
						!0
					);
				}
				isActive() {
					return Promise.resolve(this.isActiveSync());
				}
				isActiveSync() {
					return Object.values(this.g).some((x) => !!x.terminal);
				}
				canAutoTerminate() {
					return Object.values(this.g).every(
						(x) => !x.task.configurationProperties.promptOnClose,
					);
				}
				getActiveTasks() {
					return Object.values(this.g).flatMap((x) =>
						x.terminal ? x.task : [],
					);
				}
				getLastInstance(x) {
					const H = x.getKey();
					return Object.values(this.g)
						.reverse()
						.find((q) => H && H === q.task.getKey())?.task;
				}
				getBusyTasks() {
					return Object.keys(this.h).map((x) => this.h[x]);
				}
				customExecutionComplete(x, H) {
					return this.g[x.getMapKey()]?.terminal
						? new Promise((V) => {
								V();
							})
						: Promise.reject(
								new Error(
									"Expected to have a terminal for a custom execution task",
								),
							);
				}
				gb(x) {
					const H = x.getKey();
					return Object.values(this.g).filter(
						(q) => H && H === q.task.getKey(),
					);
				}
				hb(x) {
					const H = typeof x == "string" ? x : x.getMapKey();
					this.g[H] && delete this.g[H];
				}
				ib(x) {
					if (x.kind !== k.TaskEventKind.Changed) {
						const H = this.g[x.__task.getMapKey()];
						H && (H.state = x.kind);
					}
					this.I.fire(x);
				}
				terminate(x) {
					const H = this.g[x.getMapKey()];
					if (!H) return Promise.resolve({ success: !1, task: void 0 });
					const q = H.terminal;
					return q
						? new Promise((V, G) => {
								q.onDisposed((J) => {
									this.ib(
										k.TaskEvent.terminated(x, J.instanceId, J.exitReason),
									);
								});
								const K = q.onExit(() => {
									const J = H.task;
									try {
										K.dispose(),
											this.ib(
												k.TaskEvent.terminated(J, q.instanceId, q.exitReason),
											);
									} catch {}
									V({ success: !0, task: J });
								});
								q.dispose();
							})
						: Promise.resolve({ success: !1, task: void 0 });
				}
				terminateAll() {
					const x = [];
					for (const [H, q] of Object.entries(this.g)) {
						const V = q?.terminal;
						V &&
							(x.push(
								new Promise((G, K) => {
									const J = V.onExit(() => {
										const W = q.task;
										try {
											J.dispose(),
												this.ib(
													k.TaskEvent.terminated(W, V.instanceId, V.exitReason),
												);
										} catch {}
										this.g[H] === q && delete this.g[H],
											G({ success: !0, task: q.task });
									});
								}),
							),
							V.dispose());
					}
					return Promise.all(x);
				}
				jb(x) {
					this.db(n.localize(9713, null, x._label)), this.eb();
				}
				kb(x, H, q, V, G, K) {
					this.fb(x);
					const J = x.getMapKey(),
						W = Promise.resolve()
							.then(async () => {
								K = K ?? new Map();
								const ne = [];
								if (x.configurationProperties.dependsOn) {
									const ee = new Set(V).add(x.getCommonTaskId());
									for (const _ of x.configurationProperties.dependsOn) {
										const te = await H.resolve(_.uri, _.task);
										if (te) {
											this.mb(te, x);
											let Q;
											const Z = te.getCommonTaskId();
											if (ee.has(Z)) this.jb(te), (Q = Promise.resolve({}));
											else if (((Q = G.get(Z)), !Q)) {
												const se = this.g[te.getMapKey()] ?? this.gb(te).pop();
												Q = se && this.nb(se);
											}
											if (
												(Q ||
													(this.ib(
														k.TaskEvent.general(
															k.TaskEventKind.DependsOnStarted,
															x,
														),
													),
													(Q = this.ob(te, H, q, ee, G, K))),
												G.set(Z, Q),
												ne.push(Q),
												x.configurationProperties.dependsOrder ===
													k.DependsOrder.sequence && (await Q).exitCode !== 0)
											)
												break;
										} else
											this.db(
												n.localize(
													9714,
													null,
													c.$lg(_.task)
														? _.task
														: JSON.stringify(_.task, void 0, 0),
													_.uri.toString(),
												),
											),
												this.eb();
									}
								}
								return Promise.all(ne).then((ee) => {
									for (const _ of ee)
										if (_.exitCode !== 0) return { exitCode: _.exitCode };
									return (k.$g4.is(x) || k.$e4.is(x)) && x.command
										? this.y
											? this.wb(x, q, K)
											: this.ub(x, q, K)
										: { exitCode: 0 };
								});
							})
							.finally(() => {
								delete this.g[J];
							}),
						Y = this.gb(x).pop()?.count ?? { count: 0 };
					Y.count++;
					const ie = { task: x, promise: W, count: Y };
					return (this.g[J] = ie), W;
				}
				lb(x) {
					return new Promise((H) => {
						const q = this.onDidStateChange((V) => {
							V.kind === k.TaskEventKind.Inactive &&
								V.__task === x &&
								(q.dispose(), H({ exitCode: 0 }));
						});
					});
				}
				mb(x, H) {
					x.configurationProperties.icon
						? ((x.configurationProperties.icon.id ||=
								H.configurationProperties.icon?.id),
							(x.configurationProperties.icon.color ||=
								H.configurationProperties.icon?.color))
						: (x.configurationProperties.icon = H.configurationProperties.icon);
				}
				async nb(x) {
					return !x.task.configurationProperties.isBackground ||
						!x.task.configurationProperties.problemMatchers ||
						x.task.configurationProperties.problemMatchers.length === 0
						? x.promise
						: x.state === k.TaskEventKind.Inactive
							? { exitCode: 0 }
							: this.lb(x.task);
				}
				async ob(x, H, q, V, G, K) {
					if (!x.configurationProperties.isBackground)
						return this.kb(x, H, q, V, G, K);
					const J = this.lb(x);
					return Promise.race([J, this.kb(x, H, q, V, G, K)]);
				}
				async pb(x, H, q, V, G) {
					const K = await this.S.resolveAsync(
						H,
						k.CommandString.value(q.command.name),
					);
					V = V ? await this.S.resolveAsync(H, V) : void 0;
					const J = G
						? await Promise.all(
								G.split(r.$yc).map((X) => this.S.resolveAsync(H, X)),
							)
						: void 0;
					let W = await x?.findExecutable(K, V, J);
					return W || (W = r.$oc(V ?? "", K)), W;
				}
				qb(x, H) {
					if (H.size === 0) return x;
					const q = new Set();
					for (const V of x) H.has(V.substring(2, V.length - 1)) || q.add(V);
					return q;
				}
				rb(x, H) {
					for (const q of H) x.has(q[0]) || x.set(q[0], q[1]);
				}
				async sb(x, H, q, V, G) {
					const K = await this.tb(x, H, q, V, G);
					return (
						this.ib(k.TaskEvent.general(k.TaskEventKind.AcquiredInput, q)), K
					);
				}
				tb(x, H, q, V, G) {
					const K = q.command && q.command.runtime === k.RuntimeType.Process,
						J = q.command && q.command.options ? q.command.options : void 0,
						W = J ? J.cwd : void 0;
					let X;
					if (J && J.env) {
						for (const ne of Object.keys(J.env))
							if (ne.toLowerCase() === "path") {
								c.$lg(J.env[ne]) && (X = J.env[ne]);
								break;
							}
					}
					const Y = this.qb(V, G);
					let ie;
					if (x && H) {
						const ne = { variables: Y };
						return (
							x.platform === u.Platform.Windows &&
								K &&
								((ne.process = { name: k.CommandString.value(q.command.name) }),
								W && (ne.process.cwd = W),
								X && (ne.process.path = X)),
							(ie = x
								.resolveVariables(
									H,
									ne,
									k.TaskSourceKind.toConfigurationTarget(q._source.kind),
								)
								.then(async (ee) => {
									if (ee) {
										if (
											(this.rb(G, ee.variables), (ee.variables = new Map(G)), K)
										) {
											let _ = k.CommandString.value(q.command.name);
											x.platform === u.Platform.Windows &&
												(_ = await this.pb(x, H, q, W, X)),
												ee.variables.set(O.b, _);
										}
										return ee;
									}
								})),
							ie
						);
					} else {
						const ne = new Array();
						return (
							Y.forEach((ee) => ne.push(ee)),
							new Promise((ee, _) => {
								this.S.resolveWithInteraction(
									H,
									ne,
									"tasks",
									void 0,
									k.TaskSourceKind.toConfigurationTarget(q._source.kind),
								).then(
									async (te) => {
										if (te) {
											if ((this.rb(G, te), (te = new Map(G)), K)) {
												let Z;
												u.$l
													? (Z = await this.pb(x, H, q, W, X))
													: (Z = await this.S.resolveAsync(
															H,
															k.CommandString.value(q.command.name),
														)),
													te.set(O.b, Z);
											}
											ee({ variables: te });
										} else ee(void 0);
									},
									(te) => {
										_(te);
									},
								);
							})
						);
					}
				}
				ub(x, H, q) {
					const V = x.getWorkspaceFolder();
					let G;
					if (V) G = this.w.workspaceFolder = V;
					else {
						const X = this.U.getWorkspace().folders;
						G = X.length > 0 ? X[0] : void 0;
					}
					const K = (this.w.systemInfo = this.q(G)),
						J = new Set();
					return (
						this.Ib(J, x),
						this.sb(K, G, x, J, q).then(
							(X) =>
								X && !this.vb(x)
									? ((this.w.resolvedVariables = X),
										this.xb(x, H, new A(G, K, X.variables, this.S), G))
									: (this.ib(k.TaskEvent.general(k.TaskEventKind.End, x)),
										Promise.resolve({ exitCode: 0 })),
							(X) => Promise.reject(X),
						)
					);
				}
				vb(x) {
					const H = x.command.runtime === k.RuntimeType.CustomExecution;
					return !(
						x.command !== void 0 &&
						x.command.runtime &&
						(H || x.command.name !== void 0)
					);
				}
				wb(x, H, q) {
					const V = this.u;
					if (!V) return Promise.reject(new Error("No task previously run"));
					const G = (this.w.workspaceFolder = V.workspaceFolder),
						K = new Set();
					this.Ib(K, x);
					let J = !0;
					return (
						K.forEach((W) => {
							W.substring(2, W.length - 1) in
								V.getVerifiedTask().resolvedVariables && (J = !1);
						}),
						J
							? ((this.w.resolvedVariables =
									V.getVerifiedTask().resolvedVariables),
								this.xb(
									x,
									H,
									new A(
										V.getVerifiedTask().workspaceFolder,
										V.getVerifiedTask().systemInfo,
										V.getVerifiedTask().resolvedVariables.variables,
										this.S,
									),
									G,
								))
							: this.sb(
									V.getVerifiedTask().systemInfo,
									V.getVerifiedTask().workspaceFolder,
									x,
									K,
									q,
								).then(
									(W) =>
										W
											? ((this.w.resolvedVariables = W),
												this.xb(
													x,
													H,
													new A(
														V.getVerifiedTask().workspaceFolder,
														V.getVerifiedTask().systemInfo,
														W.variables,
														this.S,
													),
													G,
												))
											: (this.ib(k.TaskEvent.general(k.TaskEventKind.End, x)),
												{ exitCode: 0 }),
									(W) => Promise.reject(W),
								)
					);
				}
				async xb(x, H, q, V) {
					let G, K, J;
					if (x.configurationProperties.isBackground) {
						const X = await this.Pb(
								q,
								x.configurationProperties.problemMatchers,
							),
							Y = new I.$9Wc(X, this.Q, this.R, this.Y);
						X.length > 0 &&
							!Y.isWatching() &&
							(this.Sb(n.localize(9715, null, x._label)), this.eb());
						const ie = new C.$Zc();
						let ne = 0;
						const ee = x.getMapKey();
						ie.add(
							Y.onDidStateChange((Z) => {
								if (
									Z.kind ===
									I.ProblemCollectorEventKind.BackgroundProcessingBegins
								)
									ne++,
										(this.h[ee] = x),
										this.ib(
											k.TaskEvent.general(
												k.TaskEventKind.Active,
												x,
												G?.instanceId,
											),
										);
								else if (
									Z.kind ===
										I.ProblemCollectorEventKind.BackgroundProcessingEnds &&
									(ne--,
									this.h[ee] && delete this.h[ee],
									this.ib(
										k.TaskEvent.general(
											k.TaskEventKind.Inactive,
											x,
											G?.instanceId,
										),
									),
									ne === 0 &&
										Y.numberOfMatches > 0 &&
										Y.maxMarkerSeverity &&
										Y.maxMarkerSeverity >= g.MarkerSeverity.Error)
								) {
									const se = x.command.presentation.reveal;
									x.command.presentation.revealProblems ===
									k.RevealProblemKind.OnProblem
										? this.P.openView(o.Markers.MARKERS_VIEW_ID, !0)
										: se === k.RevealKind.Silent &&
											(this.L.setActiveInstance(G), this.M.showPanel(!1));
								}
							}),
						),
							Y.aboutToStart();
						let _;
						if ((([G, K] = await this.Fb(x, q, V)), K))
							return Promise.reject(new Error(K.message));
						if (!G)
							return Promise.reject(
								new Error(`Failed to create terminal for task ${x._label}`),
							);
						this.F.addTerminal(x, G, Y);
						let te = !1;
						G.processReady.then(
							() => {
								te ||
									(this.ib(
										k.TaskEvent.processStarted(x, G.instanceId, G.processId),
									),
									(te = !0));
							},
							(Z) => {
								this.bb.error("Task terminal process never got ready");
							},
						),
							this.ib(k.TaskEvent.start(x, G.instanceId, q.values));
						let Q;
						if (
							(X.length &&
								(Q = G.onLineData((Z) => {
									Y.processLine(Z),
										_ || (_ = new i.$Jh(3e3)),
										_.trigger(() => {
											Y.forceDelivery(), (_ = void 0);
										});
								})),
							(J = new Promise((Z, se) => {
								const re = G.onExit((le) => {
									const oe = typeof le == "number" ? le : le?.code;
									Q?.dispose(), re.dispose();
									const ae = x.getMapKey();
									if (
										(this.h[ee] && delete this.h[ee],
										this.hb(x),
										this.ib(k.TaskEvent.changed()),
										le !== void 0)
									)
										switch (x.command.presentation.panel) {
											case k.PanelKind.Dedicated:
												this.n[ae] = G.instanceId.toString();
												break;
											case k.PanelKind.Shared:
												this.m.set(ae, G.instanceId.toString(), d.Touch.AsOld);
												break;
										}
									if (
										x.command.presentation.reveal === k.RevealKind.Silent &&
										(oe !== 0 ||
											(Y.numberOfMatches > 0 &&
												Y.maxMarkerSeverity &&
												Y.maxMarkerSeverity >= g.MarkerSeverity.Error))
									)
										try {
											this.L.setActiveInstance(G), this.M.showPanel(!1);
										} catch {}
									Y.done(),
										Y.dispose(),
										te ||
											(this.ib(
												k.TaskEvent.processStarted(
													x,
													G.instanceId,
													G.processId,
												),
											),
											(te = !0)),
										this.ib(k.TaskEvent.processEnded(x, G.instanceId, oe));
									for (let $e = 0; $e < ne; $e++)
										this.ib(
											k.TaskEvent.general(
												k.TaskEventKind.Inactive,
												x,
												G.instanceId,
											),
										);
									(ne = 0),
										this.ib(k.TaskEvent.general(k.TaskEventKind.End, x)),
										ie.dispose(),
										Z({ exitCode: oe ?? void 0 });
								});
							})),
							H === P.Triggers.reconnect && G.xterm)
						) {
							const Z = [],
								se = G.xterm.getBufferReverseIterator(),
								re = new RegExp(
									Y.beginPatterns.map((oe) => oe.source).join("|"),
								);
							for (const oe of se) if ((Z.push(oe), re.test(oe))) break;
							let le;
							for (let oe = Z.length - 1; oe >= 0; oe--)
								Y.processLine(Z[oe]),
									le || (le = new i.$Jh(3e3)),
									le.trigger(() => {
										Y.forceDelivery(), (le = void 0);
									});
						}
					} else {
						if ((([G, K] = await this.Fb(x, q, V)), K))
							return Promise.reject(new Error(K.message));
						if (!G)
							return Promise.reject(
								new Error(`Failed to create terminal for task ${x._label}`),
							);
						this.ib(k.TaskEvent.start(x, G.instanceId, q.values));
						const X = x.getMapKey();
						(this.h[X] = x),
							this.ib(
								k.TaskEvent.general(k.TaskEventKind.Active, x, G.instanceId),
							);
						const Y = await this.Pb(
								q,
								x.configurationProperties.problemMatchers,
							),
							ie = new I.$8Wc(
								Y,
								this.Q,
								this.R,
								I.ProblemHandlingStrategy.Clean,
								this.Y,
							);
						this.F.addTerminal(x, G, ie);
						let ne = !1;
						G.processReady.then(
							() => {
								ne ||
									(this.ib(
										k.TaskEvent.processStarted(x, G.instanceId, G.processId),
									),
									(ne = !0));
							},
							(_) => {},
						);
						const ee = G.onLineData((_) => {
							ie.processLine(_);
						});
						J = new Promise((_, te) => {
							const Q = G.onExit((Z) => {
								const se = typeof Z == "number" ? Z : Z?.code;
								Q.dispose();
								const re = x.getMapKey();
								if ((this.hb(x), this.ib(k.TaskEvent.changed()), Z !== void 0))
									switch (x.command.presentation.panel) {
										case k.PanelKind.Dedicated:
											this.n[re] = G.instanceId.toString();
											break;
										case k.PanelKind.Shared:
											this.m.set(re, G.instanceId.toString(), d.Touch.AsOld);
											break;
									}
								const le = x.command.presentation.reveal,
									oe = x.command.presentation.revealProblems;
								if (
									G &&
									oe === k.RevealProblemKind.OnProblem &&
									ie.numberOfMatches > 0
								)
									this.P.openView(o.Markers.MARKERS_VIEW_ID);
								else if (
									G &&
									le === k.RevealKind.Silent &&
									(se !== 0 ||
										(ie.numberOfMatches > 0 &&
											ie.maxMarkerSeverity &&
											ie.maxMarkerSeverity >= g.MarkerSeverity.Error))
								)
									try {
										this.L.setActiveInstance(G), this.M.showPanel(!1);
									} catch {}
								setTimeout(() => {
									ee.dispose(), ie.done(), ie.dispose();
								}, 100),
									!ne &&
										G &&
										(this.ib(
											k.TaskEvent.processStarted(x, G.instanceId, G.processId),
										),
										(ne = !0)),
									this.ib(
										k.TaskEvent.processEnded(x, G?.instanceId, se ?? void 0),
									),
									this.h[X] && delete this.h[X],
									this.ib(
										k.TaskEvent.general(
											k.TaskEventKind.Inactive,
											x,
											G?.instanceId,
										),
									),
									this.ib(
										k.TaskEvent.general(k.TaskEventKind.End, x, G?.instanceId),
									),
									_({ exitCode: se ?? void 0 });
							});
						});
					}
					return (
						x.command.presentation &&
						x.command.presentation.revealProblems === k.RevealProblemKind.Always
							? this.P.openView(o.Markers.MARKERS_VIEW_ID)
							: x.command.presentation &&
								(x.command.presentation.focus ||
									x.command.presentation.reveal === k.RevealKind.Always) &&
								(this.L.setActiveInstance(G),
								await this.L.revealTerminal(G),
								x.command.presentation.focus && this.L.focusInstance(G)),
						(this.g[x.getMapKey()].terminal = G),
						this.ib(k.TaskEvent.changed()),
						J
					);
				}
				yb(x) {
					return this.U.getWorkbenchState() === p.WorkbenchState.WORKSPACE
						? x.getQualifiedLabel()
						: x.configurationProperties.name || "";
				}
				async zb(x, H, q, V, G, K, J, W) {
					let X;
					const Y = x.command.runtime === k.RuntimeType.Shell,
						ie = this.U.getWorkbenchState() === p.WorkbenchState.WORKSPACE,
						ne = this.yb(x),
						ee = N,
						_ = x.command.name;
					let te;
					if (
						(G.cwd &&
							((te = G.cwd),
							r.$nc(te) ||
								(H &&
									H.uri.scheme === s.Schemas.file &&
									(te = r.$oc(H.uri.fsPath, te))),
							(te = (0, E.$Ig)(te)
								? te
								: a.$xh(
										y.URI.from({ scheme: s.Schemas.file, path: te }),
										this.W.remoteAuthority,
										this.$.defaultUriScheme,
									))),
						Y)
					) {
						let Q;
						switch (V) {
							case u.Platform.Windows:
								Q = u.OperatingSystem.Windows;
								break;
							case u.Platform.Mac:
								Q = u.OperatingSystem.Macintosh;
								break;
							case u.Platform.Linux:
							default:
								Q = u.OperatingSystem.Linux;
								break;
						}
						const Z = await this.Z.getDefaultProfile({
							allowAutomationShell: !0,
							os: Q,
							remoteAuthority: this.W.remoteAuthority,
						});
						let se;
						if (x.configurationProperties.icon?.id)
							se = l.ThemeIcon.fromId(x.configurationProperties.icon.id);
						else {
							const fe = x.configurationProperties.group
								? T.GroupKind.to(x.configurationProperties.group)
								: void 0;
							se =
								(typeof fe == "string" ? fe : fe?.kind) === "test"
									? l.ThemeIcon.fromId(b.$ak.beaker.id)
									: Z.icon;
						}
						X = {
							name: ne,
							type: ee,
							executable: Z.path,
							args: Z.args,
							env: { ...Z.env },
							icon: se,
							color: x.configurationProperties.icon?.color || void 0,
							waitOnExit: W,
						};
						let re = !1;
						const le = x.command.options && x.command.options.shell;
						le &&
							(le.executable &&
								(le.executable !== X.executable && (X.args = void 0),
								(X.executable = await this.Qb(q, le.executable)),
								(re = !0)),
							le.args && (X.args = await this.Ob(q, le.args.slice()))),
							X.args === void 0 && (X.args = []);
						const oe = Array.isArray(X.args) ? X.args.slice(0) : [X.args],
							ae = [],
							pe = r.$lc
								.basename((await this.$.fileURI(X.executable)).path)
								.toLowerCase(),
							$e = this.Gb(V, pe, le, K, _, J);
						let ye = !1;
						if (V === u.Platform.Windows) {
							ye = !0;
							const fe = await this.$.userHome();
							if (
								pe === "cmd.exe" &&
								((G.cwd && (0, E.$Ig)(G.cwd)) ||
									(!G.cwd && (0, E.$Ig)(fe.fsPath)))
							)
								return;
							pe === "powershell.exe" || pe === "pwsh.exe"
								? re || ae.push("-Command")
								: pe === "bash.exe" || pe === "zsh.exe"
									? ((ye = !1), re || ae.push("-c"))
									: pe === "wsl.exe"
										? re || ae.push("-e")
										: re || ae.push("/d", "/c");
						} else re || (u.Platform.Mac, ae.push("-c"));
						const ue = this.Ab(ae, oe);
						if (
							(ue.push($e),
							(X.args = ye ? ue.join(" ") : ue),
							x.command.presentation && x.command.presentation.echo)
						)
							if (ie && H) {
								const fe =
									te && typeof te == "object" && "path" in te
										? r.$sc(te.path)
										: H.name;
								X.initialText =
									this.taskShellIntegrationStartSequence(te) +
									(0, $.$aIb)(n.localize(9716, null, fe, $e), {
										excludeLeadingNewLine: !0,
									}) +
									this.taskShellIntegrationOutputSequence;
							} else
								X.initialText =
									this.taskShellIntegrationStartSequence(te) +
									(0, $.$aIb)(n.localize(9717, null, $e), {
										excludeLeadingNewLine: !0,
									}) +
									this.taskShellIntegrationOutputSequence;
						else
							X.initialText = {
								text:
									this.taskShellIntegrationStartSequence(te) +
									this.taskShellIntegrationOutputSequence,
								trailingNewLine: !1,
							};
					} else {
						const Q =
								x.command.runtime !== k.RuntimeType.CustomExecution
									? k.CommandString.value(K)
									: void 0,
							Z = Y ? Q : await this.Qb(q, await this.Qb(q, "${" + O.b + "}"));
						if (
							((X = {
								name: ne,
								type: ee,
								icon: x.configurationProperties.icon?.id
									? l.ThemeIcon.fromId(x.configurationProperties.icon.id)
									: void 0,
								color: x.configurationProperties.icon?.color || void 0,
								executable: Z,
								args: J.map((se) => (c.$lg(se) ? se : se.value)),
								waitOnExit: W,
							}),
							x.command.presentation && x.command.presentation.echo)
						) {
							const se = (re) =>
								!re || re.length === 0 ? "" : c.$lg(re) ? re : re.join(" ");
							ie && H
								? (X.initialText =
										this.taskShellIntegrationStartSequence(te) +
										(0, $.$aIb)(
											n.localize(
												9718,
												null,
												H.name,
												`${X.executable} ${se(X.args)}`,
											),
											{ excludeLeadingNewLine: !0 },
										) +
										this.taskShellIntegrationOutputSequence)
								: (X.initialText =
										this.taskShellIntegrationStartSequence(te) +
										(0, $.$aIb)(
											n.localize(9719, null, `${X.executable} ${se(X.args)}`),
											{ excludeLeadingNewLine: !0 },
										) +
										this.taskShellIntegrationOutputSequence);
						} else
							X.initialText = {
								text:
									this.taskShellIntegrationStartSequence(te) +
									this.taskShellIntegrationOutputSequence,
								trailingNewLine: !1,
							};
					}
					return (
						te && (X.cwd = te),
						G.env &&
							(X.env ? (X.env = { ...X.env, ...G.env }) : (X.env = G.env)),
						(X.isFeatureTerminal = !0),
						(X.useShellEnvironment = !0),
						X
					);
				}
				Ab(x, H) {
					const q = m.$vo(H);
					return (
						x.forEach((V) => {
							H.every((K, J) =>
								K.toLowerCase() === V && H.length > J + 1
									? !H.slice(J + 1).every((W) => W.startsWith("-"))
									: K.toLowerCase() !== V,
							) && q.push(V);
						}),
						q
					);
				}
				async Bb(x) {
					if (this.J)
						for (let H = 0; H < this.J.length; H++) {
							const q = this.J[H];
							if (z(q)?.lastTask === x.getCommonTaskId())
								return this.J.splice(H, 1), q;
						}
				}
				async Cb(x, H, q) {
					const V = await this.Bb(x),
						G = (J) =>
							this.ib(k.TaskEvent.terminated(x, J.instanceId, J.exitReason));
					if (V)
						return (
							"command" in x &&
								x.command.presentation &&
								(V.waitOnExit = B(
									x.command.presentation,
									x.configurationProperties,
								)),
							V.onDisposed(G),
							this.bb.trace("reconnected to task and terminal", x._id),
							V
						);
					if (H) {
						for (const J of Object.values(this.j))
							if (J.group === H) {
								this.bb.trace(`Found terminal to split for group ${H}`);
								const W = J.terminal,
									X = await this.L.createTerminal({
										location: { parentTerminal: W },
										config: q,
									});
								if ((X.onDisposed(G), X)) return X;
							}
						this.bb.trace(`No terminal found to split for group ${H}`);
					}
					const K = await this.L.createTerminal({ config: q });
					return K.onDisposed(G), K;
				}
				Db() {
					if (this.H) {
						this.bb.trace(
							`Already reconnected, to ${this.J?.length} terminals so returning`,
						);
						return;
					}
					if (
						((this.J =
							this.L.getReconnectedTerminals(N)?.filter(
								(x) => !x.isDisposed && z(x),
							) || []),
						this.bb.trace(
							`Attempting reconnection of ${this.J?.length} terminals`,
						),
						!this.J?.length)
					)
						this.bb.trace("No terminals to reconnect to so returning");
					else
						for (const x of this.J) {
							const H = z(x);
							if (H) {
								const q = { lastTask: H.lastTask, group: H.group, terminal: x };
								(this.j[x.instanceId] = q),
									this.bb.trace(
										"Reconnecting to task terminal",
										q.lastTask,
										x.instanceId,
									);
							}
						}
					this.H = !0;
				}
				Eb(x, H) {
					delete this.j[x.instanceId],
						delete this.n[H.lastTask],
						this.m.delete(H.lastTask);
					const q = H.lastTask;
					this.hb(q), this.h[q] && delete this.h[q];
				}
				async Fb(x, H, q) {
					const V = H.taskSystemInfo ? H.taskSystemInfo.platform : u.$x,
						G = await this.Rb(H, x.command.options),
						K = x.command.presentation;
					if (!K)
						throw new Error(
							"Task presentation options should not be undefined here.",
						);
					const J = B(K, x.configurationProperties);
					let W, X, Y;
					if (x.command.runtime === k.RuntimeType.CustomExecution)
						this.w.shellLaunchConfig = Y = {
							customPtyImplementation: (re, le, oe) =>
								new D.$voc(re, le, oe, this.L),
							waitOnExit: J,
							name: this.yb(x),
							initialText:
								x.command.presentation && x.command.presentation.echo
									? (0, $.$aIb)(n.localize(9720, null, x._label), {
											excludeLeadingNewLine: !0,
										})
									: void 0,
							isFeatureTerminal: !0,
							icon: x.configurationProperties.icon?.id
								? l.ThemeIcon.fromId(x.configurationProperties.icon.id)
								: void 0,
							color: x.configurationProperties.icon?.color || void 0,
						};
					else {
						const re = await this.Nb(H, x.command);
						if (
							((W = re.command),
							(X = re.args),
							(this.w.shellLaunchConfig = Y =
								await this.zb(x, q, H, V, G, W, X, J)),
							Y === void 0)
						)
							return [
								void 0,
								new P.$Spc(
									h.default.Error,
									n.localize(9721, null),
									P.TaskErrors.UnknownError,
								),
							];
					}
					const ie = K.panel === k.PanelKind.Dedicated,
						ne = K.panel === k.PanelKind.Shared,
						ee = K.group,
						_ = x.getMapKey();
					let te;
					if (ie) {
						const re = this.n[_];
						re && ((te = this.j[re]), delete this.n[_]);
					} else if (ne) {
						let re = this.m.remove(_);
						if (!re)
							for (const le of this.m.keys()) {
								const oe = this.m.get(le);
								if (oe && this.j[oe] && this.j[oe].group === ee) {
									re = this.m.remove(le);
									break;
								}
							}
						re && (te = this.j[re]);
					}
					if (te) {
						if (!Y)
							throw new Error(
								"Task shell launch configuration should not be undefined here.",
							);
						return (
							te.terminal.scrollToBottom(),
							x.configurationProperties.isBackground &&
								(Y.reconnectionProperties = {
									ownerId: N,
									data: {
										lastTask: x.getCommonTaskId(),
										group: ee,
										label: x._label,
										id: x._id,
									},
								}),
							await te.terminal.reuseTerminal(Y),
							x.command.presentation &&
								x.command.presentation.clear &&
								te.terminal.clearBuffer(),
							(this.j[te.terminal.instanceId.toString()].lastTask = _),
							[te.terminal, void 0]
						);
					}
					this.G = this.G.then(() => this.Cb(x, ee, Y));
					const Q = await this.G;
					x.configurationProperties.isBackground &&
						(Q.shellLaunchConfig.reconnectionProperties = {
							ownerId: N,
							data: {
								lastTask: x.getCommonTaskId(),
								group: ee,
								label: x._label,
								id: x._id,
							},
						});
					const Z = Q.instanceId.toString(),
						se = { terminal: Q, lastTask: _, group: ee };
					return (
						Q.onDisposed(() => this.Eb(Q, se)), (this.j[Z] = se), [Q, void 0]
					);
				}
				Gb(x, H, q, V, G, K) {
					const J = r.$vc(H).name.toLowerCase(),
						W = this.Hb(J, q, x);
					function X(se) {
						if (
							se.length >= 2 &&
							(se[0] === W.strong
								? W.strong
								: se[0] === W.weak
									? W.weak
									: void 0) === se[se.length - 1]
						)
							return !1;
						let re;
						for (let le = 0; le < se.length; le++) {
							const oe = se[le];
							if (oe === re) re = void 0;
							else {
								if (re !== void 0) continue;
								if (oe === W.escape) le++;
								else if (oe === W.strong || oe === W.weak) re = oe;
								else if (oe === " ") return !0;
							}
						}
						return !1;
					}
					function Y(se, re) {
						if (re === k.ShellQuoting.Strong && W.strong)
							return [W.strong + se + W.strong, !0];
						if (re === k.ShellQuoting.Weak && W.weak)
							return [W.weak + se + W.weak, !0];
						if (re === k.ShellQuoting.Escape && W.escape) {
							if (c.$lg(W.escape))
								return [se.replace(/ /g, W.escape + " "), !0];
							{
								const le = [];
								for (const pe of W.escape.charsToEscape) le.push(`\\${pe}`);
								const oe = new RegExp("[" + le.join(",") + "]", "g"),
									ae = W.escape.escapeChar;
								return [se.replace(oe, (pe) => ae + pe), !0];
							}
						}
						return [se, !1];
					}
					function ie(se) {
						return c.$lg(se)
							? X(se)
								? Y(se, k.ShellQuoting.Strong)
								: [se, !1]
							: Y(se.value, se.quoting);
					}
					if ((!K || K.length === 0) && c.$lg(V) && (V === G || X(G))) return V;
					const ne = [];
					let ee = !1,
						_ = !1,
						te,
						Q;
					([te, Q] = ie(V)), ne.push(te), (ee = Q);
					for (const se of K) ([te, Q] = ie(se)), ne.push(te), (_ = _ || Q);
					let Z = ne.join(" ");
					return (
						x === u.Platform.Windows &&
							(J === "cmd" && ee && _
								? (Z = '"' + Z + '"')
								: (J === "powershell" || J === "pwsh") && ee && (Z = "& " + Z)),
						Z
					);
				}
				Hb(x, H, q) {
					return H && H.quoting ? H.quoting : O.c[x] || O.f[u.$k(q)];
				}
				Ib(x, H) {
					if (
						(H.command && H.command.name && this.Kb(x, H.command, H),
						this.Lb(x, H.configurationProperties.problemMatchers),
						H.command.runtime === k.RuntimeType.CustomExecution &&
							(k.$e4.is(H) || k.$g4.is(H)))
					) {
						let q;
						k.$e4.is(H)
							? (q = H._source.config.element)
							: ((q = m.$vo(H.defines)), delete q._key, delete q.type),
							this.Jb(x, q);
					}
				}
				Jb(x, H) {
					if (c.$lg(H)) this.Mb(x, H);
					else if (Array.isArray(H)) H.forEach((q) => this.Jb(x, q));
					else if (c.$ng(H)) for (const q in H) this.Jb(x, H[q]);
				}
				Kb(x, H, q) {
					if (H.runtime === k.RuntimeType.CustomExecution) return;
					if (H.name === void 0)
						throw new Error("Command name should never be undefined here.");
					if (
						(this.Mb(x, H.name),
						H.args?.forEach((G) => this.Mb(x, G)),
						q._source.scope !== k.TaskScope.Global &&
							x.add("${workspaceFolder}"),
						H.options)
					) {
						const G = H.options;
						G.cwd && this.Mb(x, G.cwd);
						const K = G.env;
						K &&
							Object.keys(K).forEach((J) => {
								const W = K[J];
								c.$lg(W) && this.Mb(x, W);
							}),
							G.shell &&
								(G.shell.executable && this.Mb(x, G.shell.executable),
								G.shell.args?.forEach((J) => this.Mb(x, J)));
					}
				}
				Lb(x, H) {
					H == null ||
						H.length === 0 ||
						H.forEach((q) => {
							let V;
							if (
								(c.$lg(q)
									? q[0] === "$"
										? (V = f.$03.get(q.substring(1)))
										: (V = f.$03.get(q))
									: (V = q),
								V && V.filePrefix)
							)
								if (c.$lg(V.filePrefix)) this.Mb(x, V.filePrefix);
								else
									for (const G of [
										...(0, t.$6b)(V.filePrefix.include || []),
										...(0, t.$6b)(V.filePrefix.exclude || []),
									])
										this.Mb(x, G);
						});
				}
				Mb(x, H) {
					const q = c.$lg(H) ? H : H.value,
						V = /\$\{(.*?)\}/g;
					let G;
					do (G = V.exec(q)), G && x.add(G[0]);
					while (G);
				}
				async Nb(x, H) {
					let q = H.args ? H.args.slice() : [];
					return (
						(q = await this.Ob(x, q)),
						{ command: await this.Qb(x, H.name), args: q }
					);
				}
				async Ob(x, H) {
					return Promise.all(H.map((q) => this.Qb(x, q)));
				}
				async Pb(x, H) {
					if (H == null || H.length === 0) return [];
					const q = [];
					for (const V of H) {
						let G;
						if (
							(c.$lg(V)
								? V[0] === "$"
									? (G = f.$03.get(V.substring(1)))
									: (G = f.$03.get(V))
								: (G = V),
							!G)
						) {
							this.Sb(n.localize(9722, null));
							continue;
						}
						const K = x.taskSystemInfo,
							J = G.filePrefix !== void 0,
							W = K !== void 0 && K.uriProvider !== void 0;
						if (!J && !W) q.push(G);
						else {
							const X = m.$vo(G);
							if ((W && K !== void 0 && (X.uriProvider = K.uriProvider), J)) {
								const Y = X.filePrefix;
								c.$lg(Y)
									? (X.filePrefix = await this.Qb(x, Y))
									: Y !== void 0 &&
										(Y.include &&
											(Y.include = Array.isArray(Y.include)
												? await Promise.all(
														Y.include.map((ie) => this.Qb(x, ie)),
													)
												: await this.Qb(x, Y.include)),
										Y.exclude &&
											(Y.exclude = Array.isArray(Y.exclude)
												? await Promise.all(
														Y.exclude.map((ie) => this.Qb(x, ie)),
													)
												: await this.Qb(x, Y.exclude)));
							}
							q.push(X);
						}
					}
					return q;
				}
				async Qb(x, H) {
					if (c.$lg(H)) return x.resolve(H);
					if (H !== void 0)
						return { value: await x.resolve(H.value), quoting: H.quoting };
					throw new Error("Should never try to resolve undefined.");
				}
				async Rb(x, H) {
					if (H == null) {
						let V;
						try {
							V = await this.Qb(x, "${workspaceFolder}");
						} catch {}
						return { cwd: V };
					}
					const q = c.$lg(H.cwd)
						? { cwd: await this.Qb(x, H.cwd) }
						: { cwd: await this.Qb(x, "${workspaceFolder}") };
					if (H.env) {
						q.env = Object.create(null);
						for (const V of Object.keys(H.env)) {
							const G = H.env[V];
							c.$lg(G)
								? (q.env[V] = await this.Qb(x, G))
								: (q.env[V] = G.toString());
						}
					}
					return q;
				}
				static {
					this.WellKnownCommands = {
						ant: !0,
						cmake: !0,
						eslint: !0,
						gradle: !0,
						grunt: !0,
						gulp: !0,
						jake: !0,
						jenkins: !0,
						jshint: !0,
						make: !0,
						maven: !0,
						msbuild: !0,
						msc: !0,
						nmake: !0,
						npm: !0,
						rake: !0,
						tsc: !0,
						xbuild: !0,
					};
				}
				getSanitizedCommand(x) {
					let H = x.toLowerCase();
					const q = H.lastIndexOf(r.sep);
					return (
						q !== -1 && (H = H.substring(q + 1)),
						O.WellKnownCommands[H] ? H : "other"
					);
				}
				Sb(x) {
					this.N.getChannel(this.X)?.append(x);
				}
			}
			e.$dXc = O;
			function B(F, x) {
				return (F.close === void 0 || F.close === !1) &&
					(F.reveal !== k.RevealKind.Never || !x.isBackground || F.close === !1)
					? F.panel === k.PanelKind.New
						? U(n.localize(9723, null))
						: F.showReuseMessage
							? U(n.localize(9724, null))
							: !0
					: !F.close;
			}
			function U(F) {
				return (x) =>
					`${(0, L.$bXc)(L.VSCodeOscPt.CommandFinished, x.toString())}${F}`;
			}
			function z(F) {
				return F.shellLaunchConfig.attachPersistentProcess
					?.reconnectionProperties?.data;
			}
		},
	),
		