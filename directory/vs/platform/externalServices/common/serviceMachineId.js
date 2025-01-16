define(de[678], he([1, 0, 76, 47, 21]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.getServiceMachineId = E);
			async function E(C, d, m) {
				let r =
					(m &&
						m.get("storage.serviceMachineId", w.StorageScope.APPLICATION)) ||
					null;
				if (r) return r;
				try {
					const a = (
						await d.readFile(C.serviceMachineIdResource)
					).value.toString();
					r = (0, i.$8g)(a) ? a : null;
				} catch {
					r = null;
				}
				if (!r) {
					r = (0, i.$9g)();
					try {
						await d.writeFile(C.serviceMachineIdResource, t.$Te.fromString(r));
					} catch {}
				}
				return (
					m?.store(
						"storage.serviceMachineId",
						r,
						w.StorageScope.APPLICATION,
						w.StorageTarget.MACHINE,
					),
					r
				);
			}
		}),
		define(
			de[546],
			he([1, 0, 12, 37, 9, 5, 678, 32, 269, 23, 109]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$dYb = e.$bYb = void 0),
					(e.$cYb = h);
				const a = "/web-extension-resource/";
				e.$bYb = (0, E.$Mi)("extensionResourceLoaderService");
				function h(n, g) {
					if (n.query !== `target=${g}`) return;
					const p = n.path.split("/");
					if (p[3])
						return (
							(p[3] = `${p[3]}+${g}`),
							n.with({ query: null, path: p.join("/") })
						);
				}
				class c {
					constructor(g, p, o, f, b) {
						(this.c = g),
							(this.d = p),
							(this.e = o),
							(this.f = f),
							(this.g = b),
							o.extensionsGallery &&
								((this.a = o.extensionsGallery.resourceUrlTemplate),
								(this.b = this.a ? this.k(w.URI.parse(this.a)) : void 0));
					}
					get supportsExtensionGalleryResources() {
						return this.a !== void 0;
					}
					getExtensionGalleryResourceURL(
						{ publisher: g, name: p, version: o, targetPlatform: f },
						b,
					) {
						if (this.a) {
							const s = w.URI.parse(
								(0, i.$lf)(this.a, {
									publisher: g,
									name: p,
									version:
										f !== void 0 &&
										f !== u.TargetPlatform.UNDEFINED &&
										f !== u.TargetPlatform.UNKNOWN &&
										f !== u.TargetPlatform.UNIVERSAL
											? `${o}+${f}`
											: o,
									path: "extension",
								}),
							);
							return this.l(s)
								? s.with({ scheme: r.$Zg.getPreferredWebSchema() })
								: s;
						}
					}
					isExtensionGalleryResource(g) {
						return !!this.b && this.b === this.k(g);
					}
					async h() {
						const g = {
							"X-Client-Name": `${this.e.applicationName}${t.$r ? "-web" : ""}`,
							"X-Client-Version": this.e.version,
						};
						return (
							(0, m.$Xp)(this.e, this.f) &&
								(0, m.$Zp)(this.g) === d.TelemetryLevel.USAGE &&
								(g["X-Machine-Id"] = await this.j()),
							this.e.commit && (g["X-Client-Commit"] = this.e.commit),
							g
						);
					}
					j() {
						return (
							this.i ||
								(this.i = (0, C.getServiceMachineId)(this.f, this.c, this.d)),
							this.i
						);
					}
					k(g) {
						if (this.l(g)) return g.authority;
						const p = g.authority.indexOf(".");
						return p !== -1 ? g.authority.substring(p + 1) : void 0;
					}
					l(g) {
						const p = g.path,
							o = r.$Zg.getServerRootPath();
						return p.startsWith(o) && p.startsWith(a, o.length);
					}
				}
				e.$dYb = c;
			},
		),
		define(
			de[2898],
			he([1, 0, 20, 22, 62, 327, 21, 113, 10, 33, 546]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ybd = void 0);
				let a = class extends u.$dYb {
					constructor(c, n, g, p, o, f) {
						super(c, n, g, p, o), (this.m = f);
					}
					async readExtensionResource(c) {
						if (this.isExtensionGalleryResource(c)) {
							const g = await this.h(),
								p = await this.m.request(
									{ url: c.toString(), headers: g },
									r.CancellationToken.None,
								);
							return (await (0, E.$Fq)(p)) || "";
						}
						return (await this.c.readFile(c)).value.toString();
					}
				};
				(e.$Ybd = a),
					(e.$Ybd = a =
						Ne(
							[
								j(0, i.$ll),
								j(1, C.$lq),
								j(2, w.$Bk),
								j(3, d.$Ti),
								j(4, m.$gj),
								j(5, E.$Aq),
							],
							a,
						)),
					(0, t.$lK)(u.$bYb, a, t.InstantiationType.Delayed);
			},
		),
		