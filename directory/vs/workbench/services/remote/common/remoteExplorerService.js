import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/event.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/tunnel/common/tunnel.js';
import './tunnelModel.js';
import '../../extensions/common/extensionsRegistry.js';
define(
			de[519],
			he([1, 0, 4, 6, 5, 20, 21, 374, 839, 175]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*event*/,
 w /*instantiation*/,
 E /*extensions*/,
 C /*storage*/,
 d /*tunnel*/,
 m /*tunnelModel*/,
 r /*extensionsRegistry*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.TunnelEditId =
						e.TunnelType =
						e.$bqc =
						e.$aqc =
						e.$_pc =
						e.$$pc =
						e.$0pc =
						e.$9pc =
						e.$8pc =
						e.$7pc =
						e.$6pc =
						e.$5pc =
							void 0),
					(t = mt(t)),
					(e.$5pc = (0, w.$Mi)("remoteExplorerService")),
					(e.$6pc = "remote.explorerType"),
					(e.$7pc = "~remote.forwardedPorts"),
					(e.$8pc = "~remote.forwardedPortsContainer"),
					(e.$9pc = "remote.autoForwardPorts"),
					(e.$0pc = "remote.autoForwardPortsSource"),
					(e.$$pc = "remote.autoForwardPortsFallback"),
					(e.$_pc = "process"),
					(e.$aqc = "output"),
					(e.$bqc = "hybrid");
				var u;
				(function (g) {
					(g.Candidate = "Candidate"),
						(g.Detected = "Detected"),
						(g.Forwarded = "Forwarded"),
						(g.Add = "Add");
				})(u || (e.TunnelType = u = {}));
				var a;
				(function (g) {
					(g[(g.None = 0)] = "None"),
						(g[(g.New = 1)] = "New"),
						(g[(g.Label = 2)] = "Label"),
						(g[(g.LocalPort = 3)] = "LocalPort");
				})(a || (e.TunnelEditId = a = {}));
				const h = {
						type: "object",
						required: ["id"],
						properties: {
							id: { description: t.localize(12630, null), type: "string" },
						},
					},
					c = r.$n2.registerExtensionPoint({
						extensionPoint: "remoteHelp",
						jsonSchema: {
							description: t.localize(12631, null),
							type: "object",
							properties: {
								getStarted: {
									description: t.localize(12632, null),
									oneOf: [{ type: "string" }, h],
								},
								documentation: {
									description: t.localize(12633, null),
									type: "string",
								},
								feedback: {
									description: t.localize(12634, null),
									type: "string",
									markdownDeprecationMessage: t.localize(
										12635,
										null,
										"`reportIssue`",
									),
								},
								reportIssue: {
									description: t.localize(12636, null),
									type: "string",
								},
								issues: {
									description: t.localize(12637, null),
									type: "string",
								},
							},
						},
					});
				let n = class {
					constructor(p, o, f) {
						(this.j = p),
							(this.k = o),
							(this.a = []),
							(this.b = new i.$re()),
							(this.onDidChangeTargetType = this.b.event),
							(this.c = new i.$re()),
							(this.onDidChangeHelpInformation = this.c.event),
							(this.d = []),
							(this.g = new i.$re()),
							(this.onDidChangeEditable = this.g.event),
							(this.h = new i.$re()),
							(this.onEnabledPortsFeatures = this.h.event),
							(this.i = !1),
							(this.namedProcesses = new Map()),
							(this.e = f.createInstance(m.$C8)),
							c.setHandler((b) => {
								this.d.push(...b), this.c.fire(b);
							});
					}
					get helpInformation() {
						return this.d;
					}
					set targetType(p) {
						const o = this.a.length > 0 ? this.a[0] : "",
							f = p.length > 0 ? p[0] : "";
						o !== f &&
							((this.a = p),
							this.j.store(
								e.$6pc,
								this.a.toString(),
								C.StorageScope.WORKSPACE,
								C.StorageTarget.MACHINE,
							),
							this.j.store(
								e.$6pc,
								this.a.toString(),
								C.StorageScope.PROFILE,
								C.StorageTarget.USER,
							),
							this.b.fire(this.a));
					}
					get targetType() {
						return this.a;
					}
					get tunnelModel() {
						return this.e;
					}
					forward(p, o) {
						return this.tunnelModel.forward(p, o);
					}
					close(p, o) {
						return this.tunnelModel.close(p.host, p.port, o);
					}
					setTunnelInformation(p) {
						p?.features && this.k.setTunnelFeatures(p.features),
							this.tunnelModel.addEnvironmentTunnels(p?.environmentTunnels);
					}
					setEditable(p, o, f) {
						f
							? (this.f = { tunnelItem: p, data: f, editId: o })
							: (this.f = void 0),
							this.g.fire(p ? { tunnel: p, editId: o } : void 0);
					}
					getEditableData(p, o) {
						return this.f &&
							((!p && p === this.f.tunnelItem) ||
								(p &&
									this.f.tunnelItem?.remotePort === p.remotePort &&
									this.f.tunnelItem.remoteHost === p.remoteHost &&
									this.f.editId === o))
							? this.f.data
							: void 0;
					}
					setCandidateFilter(p) {
						return p
							? (this.tunnelModel.setCandidateFilter(p),
								{
									dispose: () => {
										this.tunnelModel.setCandidateFilter(void 0);
									},
								})
							: { dispose: () => {} };
					}
					onFoundNewCandidates(p) {
						this.tunnelModel.setCandidates(p);
					}
					restore() {
						return this.tunnelModel.restoreForwarded();
					}
					enablePortsFeatures() {
						(this.i = !0), this.h.fire();
					}
					get portsFeaturesEnabled() {
						return this.i;
					}
				};
				(n = Ne([j(0, C.$lq), j(1, d.$cO), j(2, w.$Li)], n)),
					(0, E.$lK)(e.$5pc, n, E.InstantiationType.Delayed);
			},
		),
		