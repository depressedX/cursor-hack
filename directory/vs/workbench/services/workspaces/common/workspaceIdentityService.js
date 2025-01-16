define(
			de[1952],
			he([1, 0, 76, 19, 9, 20, 5, 781, 25]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$U1c = e.$T1c = void 0),
					(e.$T1c = (0, C.$Mi)("IWorkspaceIdentityService"));
				let r = class {
					constructor(a, h) {
						(this.a = a), (this.b = h);
					}
					async getWorkspaceStateFolders(a) {
						const h = [];
						for (const c of this.a.getWorkspace().folders) {
							const n = await this.b.getEditSessionIdentifier(c, a);
							n &&
								h.push({
									resourceUri: c.uri.toString(),
									workspaceFolderIdentity: n,
								});
						}
						return h;
					}
					async matches(a, h) {
						const c = {},
							n = {};
						for (const f of a) n[f.workspaceFolderIdentity] = f.resourceUri;
						const g = new Map();
						for (const f of this.a.getWorkspace().folders) {
							const b = await this.b.getEditSessionIdentifier(f, h);
							b && g.set(f, b);
						}
						for (const [f, b] of g.entries()) {
							const s = n[b];
							if (s) {
								c[s] = f.uri.toString();
								continue;
							}
							let l = !1;
							for (const [y, $] of Object.entries(n))
								if (
									(await this.b.provideEditSessionIdentityMatch(f, b, y, h)) ===
									d.EditSessionIdentityMatch.Complete
								) {
									(c[$] = f.uri.toString()), (l = !0);
									break;
								}
							if (!l) return !1;
						}
						const p = (f) => {
								for (const b of Object.keys(c)) {
									const s = w.URI.parse(b);
									if ((0, i.$hh)(s, f)) {
										const l = c[b],
											y = (0, i.$ph)(s, f);
										if (y) return (0, i.$nh)(w.URI.parse(l), y);
									}
								}
								return f;
							},
							o = (f, b = 0) => {
								if (
									!f ||
									b > 200 ||
									f instanceof t.$Te ||
									f instanceof Uint8Array
								)
									return f;
								if (w.URI.isUri(f)) return p(f);
								if (Array.isArray(f))
									for (let s = 0; s < f.length; ++s) f[s] = o(f[s], b + 1);
								else
									for (const s in f)
										Object.hasOwnProperty.call(f, s) && (f[s] = o(f[s], b + 1));
								return f;
							};
						return o;
					}
				};
				(e.$U1c = r),
					(e.$U1c = r = Ne([j(0, m.$Vi), j(1, d.$O8)], r)),
					(0, E.$lK)(e.$T1c, r, E.InstantiationType.Delayed);
			},
		),
		