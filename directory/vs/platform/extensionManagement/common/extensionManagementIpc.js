define(
			de[2786],
			he([1, 0, 6, 3, 82, 9, 1172, 119]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$2q = e.$1q = e.$Zq = void 0);
				function m(p, o) {
					return p ? E.URI.revive(o ? o.transformIncoming(p) : p) : void 0;
				}
				function r(p, o) {
					return o ? o.transformOutgoingURI(p) : p;
				}
				function u(p, o) {
					o = o || C.$3n;
					const f = p.manifest;
					return { ...(0, C.$6n)({ ...p, manifest: void 0 }, o), manifest: f };
				}
				function a(p, o) {
					return p?.profileLocation ? (0, C.$6n)(p, o ?? C.$3n) : p;
				}
				function h(p, o) {
					return o
						? (0, w.$xo)(p, (f) =>
								f instanceof E.URI ? o.transformOutgoingURI(f) : void 0,
							)
						: p;
				}
				class c {
					constructor(o, f) {
						(this.a = o),
							(this.b = f),
							(this.onInstallExtension = t.Event.buffer(
								o.onInstallExtension,
								!0,
							)),
							(this.onDidInstallExtensions = t.Event.buffer(
								o.onDidInstallExtensions,
								!0,
							)),
							(this.onUninstallExtension = t.Event.buffer(
								o.onUninstallExtension,
								!0,
							)),
							(this.onDidUninstallExtension = t.Event.buffer(
								o.onDidUninstallExtension,
								!0,
							)),
							(this.onDidUpdateExtensionMetadata = t.Event.buffer(
								o.onDidUpdateExtensionMetadata,
								!0,
							));
					}
					listen(o, f) {
						const b = this.b(o);
						switch (f) {
							case "onInstallExtension":
								return t.Event.map(this.onInstallExtension, (s) => ({
									...s,
									profileLocation: s.profileLocation
										? r(s.profileLocation, b)
										: s.profileLocation,
								}));
							case "onDidInstallExtensions":
								return t.Event.map(this.onDidInstallExtensions, (s) =>
									s.map((l) => ({
										...l,
										local: l.local ? h(l.local, b) : l.local,
										profileLocation: l.profileLocation
											? r(l.profileLocation, b)
											: l.profileLocation,
									})),
								);
							case "onUninstallExtension":
								return t.Event.map(this.onUninstallExtension, (s) => ({
									...s,
									profileLocation: s.profileLocation
										? r(s.profileLocation, b)
										: s.profileLocation,
								}));
							case "onDidUninstallExtension":
								return t.Event.map(this.onDidUninstallExtension, (s) => ({
									...s,
									profileLocation: s.profileLocation
										? r(s.profileLocation, b)
										: s.profileLocation,
								}));
							case "onDidUpdateExtensionMetadata":
								return t.Event.map(this.onDidUpdateExtensionMetadata, (s) => ({
									local: h(s.local, b),
									profileLocation: r(s.profileLocation, b),
								}));
						}
						throw new Error("Invalid listen");
					}
					async call(o, f, b) {
						const s = this.b(o);
						switch (f) {
							case "zip": {
								const l = u(b[0], s),
									y = await this.a.zip(l);
								return r(y, s);
							}
							case "install":
								return this.a.install(m(b[0], s), a(b[1], s));
							case "installFromLocation":
								return this.a.installFromLocation(m(b[0], s), m(b[1], s));
							case "installExtensionsFromProfile":
								return this.a.installExtensionsFromProfile(
									b[0],
									m(b[1], s),
									m(b[2], s),
								);
							case "getManifest":
								return this.a.getManifest(m(b[0], s));
							case "getTargetPlatform":
								return this.a.getTargetPlatform();
							case "canInstall":
								return this.a.canInstall(b[0]);
							case "installFromGallery":
								return this.a.installFromGallery(b[0], a(b[1], s));
							case "installGalleryExtensions": {
								const l = b[0];
								return this.a.installGalleryExtensions(
									l.map(({ extension: y, options: $ }) => ({
										extension: y,
										options: a($, s) ?? {},
									})),
								);
							}
							case "uninstall":
								return this.a.uninstall(u(b[0], s), a(b[1], s));
							case "uninstallExtensions": {
								const l = b[0];
								return this.a.uninstallExtensions(
									l.map(({ extension: y, options: $ }) => ({
										extension: u(y, s),
										options: a($, s),
									})),
								);
							}
							case "reinstallFromGallery":
								return this.a.reinstallFromGallery(u(b[0], s));
							case "getInstalled":
								return (await this.a.getInstalled(b[0], m(b[1], s), b[2])).map(
									(y) => h(y, s),
								);
							case "toggleAppliationScope": {
								const l = await this.a.toggleAppliationScope(
									u(b[0], s),
									m(b[1], s),
								);
								return h(l, s);
							}
							case "copyExtensions":
								return this.a.copyExtensions(m(b[0], s), m(b[1], s));
							case "updateMetadata": {
								const l = await this.a.updateMetadata(
									u(b[0], s),
									b[1],
									m(b[2], s),
								);
								return h(l, s);
							}
							case "resetPinnedStateForAllUserExtensions":
								return this.a.resetPinnedStateForAllUserExtensions(b[0]);
							case "getExtensionsControlManifest":
								return this.a.getExtensionsControlManifest();
							case "download":
								return this.a.download(b[0], b[1], b[2]);
							case "cleanUp":
								return this.a.cleanUp();
						}
						throw new Error("Invalid call");
					}
				}
				e.$Zq = c;
				class n extends i.$1c {
					get onInstallExtension() {
						return this.c.event;
					}
					get onDidInstallExtensions() {
						return this.f.event;
					}
					get onUninstallExtension() {
						return this.g.event;
					}
					get onDidUninstallExtension() {
						return this.h.event;
					}
					get onDidUpdateExtensionMetadata() {
						return this.j.event;
					}
					constructor(o) {
						super(),
							(this.m = o),
							(this.c = this.D(new t.$re())),
							(this.f = this.D(new t.$re())),
							(this.g = this.D(new t.$re())),
							(this.h = this.D(new t.$re())),
							(this.j = this.D(new t.$re())),
							this.D(
								this.m.listen("onInstallExtension")((f) =>
									this.n(this.c, {
										...f,
										source: this.q(f.source)
											? E.URI.revive(f.source)
											: f.source,
										profileLocation: E.URI.revive(f.profileLocation),
									}),
								),
							),
							this.D(
								this.m.listen("onDidInstallExtensions")((f) =>
									this.n(
										this.f,
										f.map((b) => ({
											...b,
											local: b.local ? u(b.local, null) : b.local,
											source: this.q(b.source)
												? E.URI.revive(b.source)
												: b.source,
											profileLocation: E.URI.revive(b.profileLocation),
										})),
									),
								),
							),
							this.D(
								this.m.listen("onUninstallExtension")((f) =>
									this.n(this.g, {
										...f,
										profileLocation: E.URI.revive(f.profileLocation),
									}),
								),
							),
							this.D(
								this.m.listen("onDidUninstallExtension")((f) =>
									this.n(this.h, {
										...f,
										profileLocation: E.URI.revive(f.profileLocation),
									}),
								),
							),
							this.D(
								this.m.listen("onDidUpdateExtensionMetadata")((f) =>
									this.n(this.j, {
										profileLocation: E.URI.revive(f.profileLocation),
										local: u(f.local, null),
									}),
								),
							);
					}
					n(o, f) {
						o.fire(f);
					}
					q(o) {
						return o
							? typeof o.path == "string" && typeof o.scheme == "string"
							: !1;
					}
					getTargetPlatform() {
						return (
							this.r || (this.r = this.m.call("getTargetPlatform")), this.r
						);
					}
					async canInstall(o) {
						const f = await this.getTargetPlatform();
						return o.allTargetPlatforms.some((b) =>
							(0, d.$Cp)(b, o.allTargetPlatforms, f),
						);
					}
					zip(o) {
						return Promise.resolve(
							this.m.call("zip", [o]).then((f) => E.URI.revive(f)),
						);
					}
					install(o, f) {
						return Promise.resolve(this.m.call("install", [o, f])).then((b) =>
							u(b, null),
						);
					}
					installFromLocation(o, f) {
						return Promise.resolve(
							this.m.call("installFromLocation", [o, f]),
						).then((b) => u(b, null));
					}
					async installExtensionsFromProfile(o, f, b) {
						return (
							await this.m.call("installExtensionsFromProfile", [o, f, b])
						).map((l) => u(l, null));
					}
					getManifest(o) {
						return Promise.resolve(this.m.call("getManifest", [o]));
					}
					installFromGallery(o, f) {
						return Promise.resolve(
							this.m.call("installFromGallery", [o, f]),
						).then((b) => u(b, null));
					}
					async installGalleryExtensions(o) {
						return (await this.m.call("installGalleryExtensions", [o])).map(
							(b) => ({
								...b,
								local: b.local ? u(b.local, null) : b.local,
								source: this.q(b.source) ? E.URI.revive(b.source) : b.source,
								profileLocation: E.URI.revive(b.profileLocation),
							}),
						);
					}
					uninstall(o, f) {
						if (o.isWorkspaceScoped)
							throw new Error("Cannot uninstall a workspace extension");
						return Promise.resolve(this.m.call("uninstall", [o, f]));
					}
					uninstallExtensions(o) {
						if (o.some((f) => f.extension.isWorkspaceScoped))
							throw new Error("Cannot uninstall a workspace extension");
						return Promise.resolve(this.m.call("uninstallExtensions", [o]));
					}
					reinstallFromGallery(o) {
						return Promise.resolve(
							this.m.call("reinstallFromGallery", [o]),
						).then((f) => u(f, null));
					}
					getInstalled(o = null, f, b) {
						return Promise.resolve(this.m.call("getInstalled", [o, f, b])).then(
							(s) => s.map((l) => u(l, null)),
						);
					}
					updateMetadata(o, f, b) {
						return Promise.resolve(
							this.m.call("updateMetadata", [o, f, b]),
						).then((s) => u(s, null));
					}
					resetPinnedStateForAllUserExtensions(o) {
						return this.m.call("resetPinnedStateForAllUserExtensions", [o]);
					}
					toggleAppliationScope(o, f) {
						return this.m
							.call("toggleAppliationScope", [o, f])
							.then((b) => u(b, null));
					}
					copyExtensions(o, f) {
						return this.m.call("copyExtensions", [o, f]);
					}
					getExtensionsControlManifest() {
						return Promise.resolve(this.m.call("getExtensionsControlManifest"));
					}
					async download(o, f, b) {
						const s = await this.m.call("download", [o, f, b]);
						return E.URI.revive(s);
					}
					async cleanUp() {
						return this.m.call("cleanUp");
					}
					registerParticipant() {
						throw new Error("Not Supported");
					}
				}
				e.$1q = n;
				class g {
					constructor(o) {
						this.a = o;
					}
					listen(o, f) {
						throw new Error("Invalid listen");
					}
					call(o, f, b) {
						switch (f) {
							case "getConfigBasedTips":
								return this.a.getConfigBasedTips(E.URI.revive(b[0]));
							case "getImportantExecutableBasedTips":
								return this.a.getImportantExecutableBasedTips();
							case "getOtherExecutableBasedTips":
								return this.a.getOtherExecutableBasedTips();
						}
						throw new Error("Invalid call");
					}
				}
				e.$2q = g;
			},
		),
		