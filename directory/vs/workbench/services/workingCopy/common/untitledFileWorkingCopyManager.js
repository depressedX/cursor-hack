define(
			de[3896],
			he([1, 0, 3, 9, 1925, 6, 23, 227, 73, 34, 335, 22, 1911, 59]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Lpc = void 0);
				let n = class extends h.$Ipc {
					constructor(p, o, f, b, s, l, y, $) {
						super(b, l, y),
							(this.u = p),
							(this.w = o),
							(this.y = f),
							(this.z = s),
							(this.C = $),
							(this.r = this.D(new E.$re())),
							(this.onDidChangeDirty = this.r.event),
							(this.s = this.D(new E.$re())),
							(this.onWillDispose = this.s.event),
							(this.t = new c.$Gc());
					}
					async resolve(p) {
						const o = this.F(p);
						return await o.resolve(), o;
					}
					F(p = Object.create(null)) {
						const o = this.G(p);
						if (o.untitledResource) {
							const f = this.get(o.untitledResource);
							if (f) return f;
						}
						return this.H(o);
					}
					G(p) {
						const o = Object.create(null);
						return (
							p.associatedResource
								? ((o.untitledResource = i.URI.from({
										scheme: C.Schemas.untitled,
										authority: p.associatedResource.authority,
										fragment: p.associatedResource.fragment,
										path: p.associatedResource.path,
										query: p.associatedResource.query,
									})),
									(o.associatedResource = p.associatedResource))
								: (p.untitledResource?.scheme === C.Schemas.untitled &&
										(o.untitledResource = p.untitledResource),
									(o.isScratchpad = p.isScratchpad)),
							(o.contents = p.contents),
							o
						);
					}
					H(p) {
						let o = p.untitledResource;
						if (!o) {
							let b = 1;
							do
								(o = i.URI.from({
									scheme: C.Schemas.untitled,
									path: p.isScratchpad ? `Scratchpad-${b}` : `Untitled-${b}`,
									query: this.u ? `typeId=${this.u}` : void 0,
								})),
									b++;
							while (this.j(o));
						}
						const f = new w.$Kpc(
							this.u,
							o,
							this.z.getUriBasenameLabel(o),
							!!p.associatedResource,
							!!p.isScratchpad,
							p.contents,
							this.w,
							this.y,
							this.C,
							this.h,
							this.g,
						);
						return this.I(f), f;
					}
					I(p) {
						const o = new t.$Zc();
						o.add(p.onDidChangeDirty(() => this.r.fire(p))),
							o.add(p.onWillDispose(() => this.s.fire(p))),
							this.t.set(p.resource, o),
							this.m(p.resource, p),
							p.isDirty() && this.r.fire(p);
					}
					n(p) {
						const o = super.n(p),
							f = this.t.get(p);
						return f && ((0, t.$Vc)(f), this.t.delete(p)), o;
					}
					dispose() {
						super.dispose(), (0, t.$Vc)(this.t.values()), this.t.clear();
					}
				};
				(e.$Lpc = n),
					(e.$Lpc = n =
						Ne(
							[j(3, a.$ll), j(4, m.$3N), j(5, r.$ik), j(6, u.$WO), j(7, d.$gY)],
							n,
						));
			},
		),
		