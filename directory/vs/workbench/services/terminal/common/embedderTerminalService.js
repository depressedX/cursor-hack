define(
			de[1875],
			he([1, 0, 20, 5, 6, 117, 3]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$csb = void 0),
					(e.$csb = (0, i.$Mi)("embedderTerminalService"));
				class d {
					constructor() {
						(this.a = new w.$re()),
							(this.onDidCreateTerminal = w.Event.buffer(this.a.event));
					}
					createTerminal(u) {
						const a = {
							name: u.name,
							isFeatureTerminal: !0,
							customPtyImplementation(h, c, n) {
								return new m(h, u.pty);
							},
						};
						this.a.fire(a);
					}
				}
				class m extends C.$1c {
					constructor(u, a) {
						super(),
							(this.id = u),
							(this.shouldPersist = !1),
							(this.b = this.D(new w.$re())),
							(this.onProcessReady = this.b.event),
							(this.c = this.D(new w.$re())),
							(this.onDidChangeProperty = this.c.event),
							(this.f = this.D(new w.$re())),
							(this.onProcessExit = this.f.event),
							(this.a = a),
							(this.onProcessData = this.a.onDidWrite),
							this.a.onDidClose &&
								this.D(this.a.onDidClose((h) => this.f.fire(h || void 0))),
							this.a.onDidChangeName &&
								this.D(
									this.a.onDidChangeName((h) =>
										this.c.fire({
											type: E.ProcessPropertyType.Title,
											value: h,
										}),
									),
								);
					}
					async start() {
						this.b.fire({ pid: -1, cwd: "", windowsPty: void 0 }),
							this.a.open();
					}
					shutdown() {
						this.a.close();
					}
					input() {}
					async processBinary() {}
					resize() {}
					clearBuffer() {}
					acknowledgeDataEvent() {}
					async setUnicodeVersion() {}
					async getInitialCwd() {
						return "";
					}
					async getCwd() {
						return "";
					}
					refreshProperty(u) {
						throw new Error(
							`refreshProperty is not suppported in EmbedderTerminalProcess. property: ${u}`,
						);
					}
					updateProperty(u, a) {
						throw new Error(
							`updateProperty is not suppported in EmbedderTerminalProcess. property: ${u}, value: ${a}`,
						);
					}
				}
				(0, t.$lK)(e.$csb, d, t.InstantiationType.Delayed);
			},
		),
		