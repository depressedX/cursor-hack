define(de[4004], he([1, 0, 20, 1671]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$dvc = void 0);
			class w {
				constructor() {
					this.a = new Map();
				}
				registerCanonicalUriProvider(C) {
					return (
						this.a.set(C.scheme, C), { dispose: () => this.a.delete(C.scheme) }
					);
				}
				async provideCanonicalUri(C, d, m) {
					const r = this.a.get(C.scheme);
					if (r) return r.provideCanonicalUri(C, d, m);
				}
			}
			(e.$dvc = w), (0, t.$lK)(i.$8oc, w, t.InstantiationType.Delayed);
		}),
		define(
			de[4005],
			he([1, 0, 24, 3, 20, 34, 781, 53]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$cvc = void 0);
				let m = class {
					constructor(u, a) {
						(this.b = u), (this.c = a), (this.a = new Map()), (this.d = []);
					}
					registerEditSessionIdentityProvider(u) {
						if (this.a.get(u.scheme))
							throw new Error(
								`A provider has already been registered for scheme ${u.scheme}`,
							);
						return (
							this.a.set(u.scheme, u),
							(0, i.$Yc)(() => {
								this.a.delete(u.scheme);
							})
						);
					}
					async getEditSessionIdentifier(u, a) {
						const { scheme: h } = u.uri,
							c = await this.e(h);
						return (
							this.c.trace(
								`EditSessionIdentityProvider for scheme ${h} available: ${!!c}`,
							),
							c?.getEditSessionIdentifier(u, a)
						);
					}
					async provideEditSessionIdentityMatch(u, a, h, c) {
						const { scheme: n } = u.uri,
							g = await this.e(n);
						return (
							this.c.trace(
								`EditSessionIdentityProvider for scheme ${n} available: ${!!g}`,
							),
							g?.provideEditSessionIdentityMatch?.(u, a, h, c)
						);
					}
					async onWillCreateEditSessionIdentity(u, a) {
						this.c.debug(
							"Running onWillCreateEditSessionIdentity participants...",
						);
						for (const h of this.d) await h.participate(u, a);
						this.c.debug(
							`Done running ${this.d.length} onWillCreateEditSessionIdentity participants.`,
						);
					}
					addEditSessionIdentityCreateParticipant(u) {
						const a = (0, t.$Xb)(this.d, u);
						return (0, i.$Yc)(() => a());
					}
					async e(u) {
						const a = u === "vscode-remote" ? "file" : u,
							h = this.a.get(u);
						return (
							h ||
							(await this.b.activateByEvent(`onEditSession:${a}`),
							this.a.get(u))
						);
					}
				};
				(e.$cvc = m),
					(e.$cvc = m = Ne([j(0, d.$q2), j(1, E.$ik)], m)),
					(0, w.$lK)(C.$O8, m, w.InstantiationType.Delayed);
			},
		),
		