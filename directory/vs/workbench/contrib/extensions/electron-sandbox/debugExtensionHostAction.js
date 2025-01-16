define(
			de[3387],
			he([1, 0, 50, 3, 1501, 4, 57, 5, 110, 62, 84, 21, 112, 517, 53, 87]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				var p;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$7fd = e.$6fd = void 0),
					(E = mt(E));
				let o = class extends t.$rj {
					static {
						p = this;
					}
					static {
						this.ID = "workbench.extensions.action.debugExtensionHost";
					}
					static {
						this.LABEL = E.localize(6598, null);
					}
					static {
						this.CSS_CLASS = "debug-extension-host";
					}
					constructor(l, y, $, v, S, I) {
						super(p.ID, p.LABEL, p.CSS_CLASS),
							(this.a = l),
							(this.b = y),
							(this.c = $),
							(this.f = v),
							(this.g = S),
							(this.h = I);
					}
					async run(l) {
						const y = await this.c.getInspectPorts(
							c.ExtensionHostKind.LocalProcess,
							!1,
						);
						if (y.length === 0) {
							(
								await this.b.confirm({
									message: E.localize(6599, null),
									detail: E.localize(6600, null, this.f.nameLong),
									primaryButton: E.localize(6601, null),
								})
							).confirmed &&
								(await this.a.relaunch({
									addArgs: [`--inspect-extensions=${(0, w.$1pb)()}`],
								}));
							return;
						}
						y.length > 1 &&
							console.warn(
								"There are multiple extension hosts available for debugging. Picking the first one...",
							),
							this.g.createInstance(f).storeDebugOnNewWindow(y[0].port),
							this.h.openWindow();
					}
				};
				(e.$6fd = o),
					(e.$6fd =
						o =
						p =
							Ne(
								[
									j(0, m.$y7c),
									j(1, C.$GO),
									j(2, n.$q2),
									j(3, r.$Bk),
									j(4, d.$Li),
									j(5, g.$asb),
								],
								o,
							));
				let f = class {
					constructor(l) {
						this.a = l;
					}
					storeDebugOnNewWindow(l) {
						this.a.store(
							"debugExtensionHost.debugPort",
							l,
							a.StorageScope.APPLICATION,
							a.StorageTarget.MACHINE,
						);
					}
					getAndDeleteDebugPortIfSet() {
						const l = this.a.getNumber(
							"debugExtensionHost.debugPort",
							a.StorageScope.APPLICATION,
						);
						return (
							l !== void 0 &&
								this.a.remove(
									"debugExtensionHost.debugPort",
									a.StorageScope.APPLICATION,
								),
							l
						);
					}
				};
				f = Ne([j(0, a.$lq)], f);
				let b = class extends i.$1c {
					constructor(l, y, $) {
						super(), (this.a = l), (this.b = y);
						const S = this.b.createInstance(f).getAndDeleteDebugPortIfSet();
						S !== void 0 &&
							$.withProgress(
								{
									location: u.ProgressLocation.Notification,
									title: E.localize(6602, null),
								},
								async (I) => {
									await this.a.startDebugging(void 0, {
										type: "node",
										name: E.localize(6603, null),
										request: "attach",
										port: S,
									});
								},
							);
					}
				};
				(e.$7fd = b),
					(e.$7fd = b = Ne([j(0, h.$75), j(1, d.$Li), j(2, u.$8N)], b));
			},
		),
		