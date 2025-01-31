import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/objects.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/configuration/common/configurationModels.js';
import '../../../../base/common/types.js';
import '../../../../base/common/arrays.js';
define(
			de[1794],
			he([1, 0, 82, 10, 950, 28, 24]),
			function (ce /*require*/,
 e /*exports*/,
 t /*objects*/,
 i /*configuration*/,
 w /*configurationModels*/,
 E /*types*/,
 C /*arrays*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$w3c = e.$v3c = e.$u3c = void 0);
				class d extends w.$7o {
					constructor(a, h) {
						super(a, h),
							(this.m = []),
							(this.n = !1),
							(this.p = new w.$7o(a, h)),
							(this.q = w.$6o.createEmptyModel(h)),
							(this.r = w.$6o.createEmptyModel(h));
					}
					get folders() {
						return this.m;
					}
					get transient() {
						return this.n;
					}
					get settingsModel() {
						return this.p.configurationModel;
					}
					get launchModel() {
						return this.q;
					}
					get tasksModel() {
						return this.r;
					}
					reparseWorkspaceSettings(a) {
						this.p.reparse(a);
					}
					getRestrictedWorkspaceSettings() {
						return this.p.restrictedConfigurations;
					}
					i(a, h) {
						return (
							(this.m = a.folders || []),
							(this.n = (0, E.$rg)(a.transient) && a.transient),
							this.p.parseRaw(a.settings, h),
							(this.q = this.t(a, "launch")),
							(this.r = this.t(a, "tasks")),
							super.i(a, h)
						);
					}
					t(a, h) {
						const c = a[h];
						if (c) {
							const n = (0, i.$lj)(c, (o) =>
									console.error(`Conflict in settings file ${this.f}: ${o}`),
								),
								g = Object.create(null);
							g[h] = n;
							const p = Object.keys(c).map((o) => `${h}.${o}`);
							return new w.$6o(g, p, [], void 0, this.g);
						}
						return w.$6o.createEmptyModel(this.g);
					}
				}
				e.$u3c = d;
				class m extends w.$7o {
					constructor(a, h, c) {
						super(a, c), (this.m = h);
					}
					i(a, h) {
						const c = (0, i.$lj)(a, (p) =>
								console.error(`Conflict in settings file ${this.f}: ${p}`),
							),
							n = Object.create(null);
						n[this.m] = c;
						const g = Object.keys(a).map((p) => `${this.m}.${p}`);
						return { contents: n, keys: g, overrides: [] };
					}
				}
				e.$v3c = m;
				class r extends w.$9o {
					constructor(a, h, c, n, g, p, o, f, b, s, l) {
						super(a, h, c, n, g, p, o, f, b, l), (this.a = s);
					}
					getValue(a, h = {}) {
						return super.getValue(a, h, this.a);
					}
					inspect(a, h = {}) {
						return super.inspect(a, h, this.a);
					}
					keys() {
						return super.keys(this.a);
					}
					compareAndDeleteFolderConfiguration(a) {
						return this.a &&
							this.a.folders.length > 0 &&
							this.a.folders[0].uri.toString() === a.toString()
							? { keys: [], overrides: [] }
							: super.compareAndDeleteFolderConfiguration(a);
					}
					compare(a) {
						const h = (p, o, f) => {
								const b = [];
								return (
									b.push(...o.filter((s) => p.indexOf(s) === -1)),
									b.push(...p.filter((s) => o.indexOf(s) === -1)),
									b.push(
										...p.filter((s) =>
											o.indexOf(s) === -1
												? !1
												: (0, t.$zo)(
															this.getValue(s, { overrideIdentifier: f }),
															a.getValue(s, { overrideIdentifier: f }),
														)
													? this.a &&
														this.a.folders.some(
															(l) =>
																!(0, t.$zo)(
																	this.getValue(s, {
																		resource: l.uri,
																		overrideIdentifier: f,
																	}),
																	a.getValue(s, {
																		resource: l.uri,
																		overrideIdentifier: f,
																	}),
																),
														)
													: !0,
										),
									),
									b
								);
							},
							c = h(this.allKeys(), a.allKeys()),
							n = [],
							g = (0, C.$Qb)([...this.B(), ...a.B()]);
						for (const p of g) {
							const o = h(this.D(p), a.D(p), p);
							o.length && n.push([p, o]);
						}
						return { keys: c, overrides: n };
					}
				}
				e.$w3c = r;
			},
		)
