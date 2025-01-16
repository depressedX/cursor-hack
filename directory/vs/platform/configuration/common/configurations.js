define(
			de[1634],
			he([1, 0, 24, 6, 3, 82, 28, 950, 81, 34, 940, 30]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$bp = e.$ap = e.$_o = void 0);
				class h extends w.$1c {
					get configurationModel() {
						return this.b;
					}
					constructor(p) {
						super(),
							(this.c = p),
							(this.a = this.D(new i.$re())),
							(this.onDidChangeConfiguration = this.a.event),
							(this.b = d.$6o.createEmptyModel(this.c));
					}
					async initialize() {
						return (
							this.h(),
							this.D(
								a.$Io
									.as(m.$No.Configuration)
									.onDidUpdateConfiguration(
										({ properties: p, defaultsOverrides: o }) =>
											this.f(Array.from(p), o),
									),
							),
							this.configurationModel
						);
					}
					reload() {
						return this.h(), this.configurationModel;
					}
					f(p, o) {
						this.j(
							p,
							a.$Io.as(m.$No.Configuration).getConfigurationProperties(),
						),
							this.a.fire({ defaults: this.configurationModel, properties: p });
					}
					g() {
						return {};
					}
					h() {
						this.b = d.$6o.createEmptyModel(this.c);
						const p = a.$Io
							.as(m.$No.Configuration)
							.getConfigurationProperties();
						this.j(Object.keys(p), p);
					}
					j(p, o) {
						const f = this.g();
						for (const b of p) {
							const s = f[b],
								l = o[b];
							s !== void 0
								? this.b.setValue(b, s)
								: l
									? this.b.setValue(b, l.default)
									: this.b.removeValue(b);
						}
					}
				}
				e.$_o = h;
				class c {
					constructor() {
						(this.onDidChangeConfiguration = i.Event.None),
							(this.configurationModel = d.$6o.createEmptyModel(new r.$vk()));
					}
					async initialize() {
						return this.configurationModel;
					}
				}
				e.$ap = c;
				let n = class extends w.$1c {
					get configurationModel() {
						return this.b;
					}
					constructor(p, o, f) {
						super(),
							(this.c = p),
							(this.f = o),
							(this.g = f),
							(this.a = this.D(new i.$re())),
							(this.onDidChangeConfiguration = this.a.event),
							(this.b = d.$6o.createEmptyModel(this.g));
					}
					async initialize() {
						return (
							this.g.trace("PolicyConfiguration#initialize"),
							this.m(await this.h(this.c.configurationModel.keys), !1),
							this.D(this.f.onDidChange((p) => this.j(p))),
							this.D(
								this.c.onDidChangeConfiguration(async ({ properties: p }) =>
									this.m(await this.h(p), !0),
								),
							),
							this.b
						);
					}
					async h(p) {
						this.g.trace("PolicyConfiguration#updatePolicyDefinitions", p);
						const o = {},
							f = [],
							b = a.$Io.as(m.$No.Configuration).getConfigurationProperties();
						for (const s of p) {
							const l = b[s];
							if (!l) {
								f.push(s);
								continue;
							}
							if (l.policy) {
								if (l.type !== "string" && l.type !== "number") {
									this.g.warn(
										`Policy ${l.policy.name} has unsupported type ${l.type}`,
									);
									continue;
								}
								f.push(s), (o[l.policy.name] = { type: l.type });
							}
						}
						return (
							(0, C.$yg)(o) || (await this.f.updatePolicyDefinitions(o)), f
						);
					}
					j(p) {
						this.g.trace("PolicyConfiguration#onDidChangePolicies", p);
						const o = a.$Io.as(m.$No.Configuration).getPolicyConfigurations(),
							f = (0, t.$Lb)(p.map((b) => o.get(b)));
						this.m(f, !0);
					}
					m(p, o) {
						this.g.trace("PolicyConfiguration#update", p);
						const f = a.$Io
								.as(m.$No.Configuration)
								.getConfigurationProperties(),
							b = [],
							s = this.b.isEmpty();
						for (const l of p) {
							const y = f[l]?.policy?.name;
							if (y) {
								const $ = this.f.getPolicyValue(y);
								(s ? $ !== void 0 : !(0, E.$zo)(this.b.getValue(l), $)) &&
									b.push([l, $]);
							} else this.b.getValue(l) !== void 0 && b.push([l, void 0]);
						}
						if (b.length) {
							this.g.trace("PolicyConfiguration#changed", b);
							const l = this.b;
							this.b = d.$6o.createEmptyModel(this.g);
							for (const y of l.keys) this.b.setValue(y, l.getValue(y));
							for (const [y, $] of b)
								$ === void 0 ? this.b.removeValue(y) : this.b.setValue(y, $);
							o && this.a.fire(this.b);
						}
					}
				};
				(e.$bp = n), (e.$bp = n = Ne([j(1, u.$Ko), j(2, r.$ik)], n));
			},
		),
		