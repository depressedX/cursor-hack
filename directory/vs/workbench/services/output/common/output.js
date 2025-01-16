define(de[297], he([1, 0, 6, 30, 8, 5]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$q8 =
					e.$p8 =
					e.OutputChannelUpdateMode =
					e.$o8 =
					e.$n8 =
					e.$m8 =
					e.$l8 =
					e.$k8 =
					e.$j8 =
					e.$i8 =
					e.$h8 =
					e.$g8 =
					e.$f8 =
					e.$e8 =
					e.$d8 =
						void 0),
				(e.$d8 = "text/x-code-output"),
				(e.$e8 = "Log"),
				(e.$f8 = "text/x-code-log-output"),
				(e.$g8 = "log"),
				(e.$h8 = "workbench.panel.output"),
				(e.$i8 = new w.$5j("inOutput", !1)),
				(e.$j8 = new w.$5j("activeLogOutput", !1)),
				(e.$k8 = new w.$5j("activeLogOutput.levelSettable", !1)),
				(e.$l8 = new w.$5j("activeLogOutput.level", "")),
				(e.$m8 = new w.$5j("activeLogOutput.levelIsDefault", !1)),
				(e.$n8 = new w.$5j("outputView.scrollLock", !1)),
				(e.$o8 = (0, E.$Mi)("outputService"));
			var C;
			(function (m) {
				(m[(m.Append = 1)] = "Append"),
					(m[(m.Replace = 2)] = "Replace"),
					(m[(m.Clear = 3)] = "Clear");
			})(C || (e.OutputChannelUpdateMode = C = {})),
				(e.$p8 = { OutputChannels: "workbench.contributions.outputChannels" });
			class d {
				constructor() {
					(this.a = new Map()),
						(this.b = new t.$re()),
						(this.onDidRegisterChannel = this.b.event),
						(this.c = new t.$re()),
						(this.onDidRemoveChannel = this.c.event);
				}
				registerChannel(r) {
					this.a.has(r.id) || (this.a.set(r.id, r), this.b.fire(r.id));
				}
				getChannels() {
					const r = [];
					return this.a.forEach((u) => r.push(u)), r;
				}
				getChannel(r) {
					return this.a.get(r);
				}
				removeChannel(r) {
					this.a.delete(r), this.c.fire(r);
				}
			}
			i.$Io.add(e.$p8.OutputChannels, new d()),
				(e.$q8 = new w.$5j("activeOutputChannel", ""));
		}),
		