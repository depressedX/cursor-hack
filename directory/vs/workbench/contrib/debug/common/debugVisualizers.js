define(
			de[1039],
			he([1, 0, 3, 28, 8, 109, 5, 34, 112, 1730, 300, 53, 175]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$F3 = e.$E3 = e.$D3 = void 0),
					(e.$D3 = (0, C.$Mi)("debugVisualizerService"));
				class c {
					get name() {
						return this.b.name;
					}
					get iconPath() {
						return this.b.iconPath;
					}
					get iconClass() {
						return this.b.iconClass;
					}
					constructor(b, s) {
						(this.a = b), (this.b = s);
					}
					async resolve(b) {
						return (this.b.visualization ??=
							await this.a.resolveDebugVisualizer(this.b, b));
					}
					async execute() {
						await this.a.executeDebugVisualizerCommand(this.b.id);
					}
				}
				e.$E3 = c;
				const n = { object: [], dispose: () => {} };
				let g = class {
					constructor(b, s, l) {
						(this.g = b),
							(this.h = s),
							(this.i = l),
							(this.a = new Map()),
							(this.b = new Map()),
							(this.d = new Map()),
							(this.f = []),
							o.setHandler((y, { added: $, removed: v }) => {
								(this.f = this.f.filter(
									(S) =>
										!v.some((I) =>
											E.$Gn.equals(I.description.identifier, S.extensionId),
										),
								)),
									$.forEach((S) => this.k(S.description));
							});
					}
					async getApplicableFor(b, s) {
						if (!(b instanceof u.$K3)) return n;
						const l = b.getThreadId();
						if (l === void 0) return n;
						const y = this.j(l, b),
							$ = (0, r.$C3)(this.g, b, [
								[m.$O5.key, b.name],
								[m.$L5.key, b.value],
								[m.$M5.key, b.type],
							]),
							v = await Promise.all(
								this.f.map(async (I) => {
									if (!$.contextMatchesRules(I.expr)) return;
									let T = this.d.get(I.id);
									if (
										(T ||
											((T = this.h.activateByEvent(
												`onDebugVisualizer:${I.id}`,
											)),
											this.d.set(I.id, T)),
										await T,
										s.isCancellationRequested)
									)
										return;
									const P = this.a.get(p(I.extensionId, I.id));
									return (
										P && {
											handle: P,
											result: await P.provideDebugVisualizers(y, s),
										}
									);
								}),
							),
							S = {
								object: v
									.filter(i.$tg)
									.flatMap((I) => I.result.map((T) => new c(I.handle, T))),
								dispose: () => {
									for (const I of v)
										I?.handle.disposeDebugVisualizers(
											I.result.map((T) => T.id),
										);
								},
							};
						return s.isCancellationRequested && S.dispose(), S;
					}
					register(b) {
						const s = p(b.extensionId, b.id);
						return this.a.set(s, b), (0, t.$Yc)(() => this.a.delete(s));
					}
					registerTree(b, s) {
						return this.b.set(b, s), (0, t.$Yc)(() => this.b.delete(b));
					}
					async getVisualizedNodeFor(b, s) {
						if (!(s instanceof u.$K3)) return;
						const l = s.getThreadId();
						if (l === void 0) return;
						const y = this.b.get(b);
						if (y)
							try {
								const $ = await y.getTreeItem(this.j(l, s));
								return $ ? new u.$I3(this, b, $, s) : void 0;
							} catch ($) {
								this.i.warn("Failed to get visualized node", $);
								return;
							}
					}
					async getVisualizedChildren(b, s) {
						return ((await this.b.get(b)?.getChildren(s)) || []).map(
							(y) => new u.$I3(this, b, y, void 0),
						);
					}
					async editTreeItem(b, s, l) {
						const y = await this.b.get(b)?.editItem?.(s.id, l);
						y && Object.assign(s, y);
					}
					j(b, s) {
						const l = {
							sessionId: s.getSession()?.getId() || "",
							containerId: s.parent instanceof u.$K3 ? s.reference : void 0,
							threadId: b,
							variable: {
								name: s.name,
								value: s.value,
								type: s.type,
								evaluateName: s.evaluateName,
								variablesReference: s.reference || 0,
								indexedVariables: s.indexedVariables,
								memoryReference: s.memoryReference,
								namedVariables: s.namedVariables,
								presentationHint: s.presentationHint,
							},
						};
						for (let y = s; y instanceof u.$K3; y = y.parent)
							y.parent instanceof u.$L3 &&
								(l.frameId = y.parent.stackFrame.frameId);
						return l;
					}
					k(b) {
						const s = b.contributes?.debugVisualizers;
						if (s instanceof Array)
							for (const { when: l, id: y } of s)
								try {
									const $ = w.$Kj.deserialize(l);
									$ &&
										this.f.push({ expr: $, id: y, extensionId: b.identifier });
								} catch ($) {
									this.i.error(
										`Error processing debug visualizer registration from extension '${b.identifier.value}'`,
										$,
									);
								}
					}
				};
				(e.$F3 = g),
					(e.$F3 = g = Ne([j(0, w.$6j), j(1, a.$q2), j(2, d.$ik)], g));
				const p = (f, b) => `${E.$Gn.toKey(f)}\0${b}`,
					o = h.$n2.registerExtensionPoint({
						extensionPoint: "debugVisualizers",
						jsonSchema: {
							type: "array",
							items: {
								type: "object",
								properties: {
									id: {
										type: "string",
										description: "Name of the debug visualizer",
									},
									when: {
										type: "string",
										description:
											"Condition when the debug visualizer is applicable",
									},
								},
								required: ["id", "when"],
							},
						},
						activationEventsGenerator: (f, b) => {
							for (const s of f) s.id && b.push(`onDebugVisualizer:${s.id}`);
						},
					});
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	