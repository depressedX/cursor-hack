define(
			de[631],
			he([1, 0, 9, 5, 1339, 10, 6, 59, 23, 3, 20]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				var a;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$8Y = e.$7Y = void 0),
					(e.$7Y = (0, i.$Mi)("untitledTextEditorService"));
				let h = class extends r.$1c {
					static {
						a = this;
					}
					static {
						this.a = /Untitled-\d+/;
					}
					constructor(n, g) {
						super(),
							(this.m = n),
							(this.n = g),
							(this.b = this.D(new C.$re())),
							(this.onDidChangeDirty = this.b.event),
							(this.c = this.D(new C.$re())),
							(this.onDidChangeEncoding = this.c.event),
							(this.f = this.D(new C.$re())),
							(this.onDidCreate = this.f.event),
							(this.g = this.D(new C.$re())),
							(this.onWillDispose = this.g.event),
							(this.h = this.D(new C.$re())),
							(this.onDidChangeLabel = this.h.event),
							(this.j = new d.$Gc());
					}
					get(n) {
						return this.j.get(n);
					}
					getValue(n) {
						return this.get(n)?.textEditorModel?.getValue();
					}
					async resolve(n) {
						const g = this.q(n);
						return await g.resolve(), g;
					}
					create(n) {
						return this.q(n);
					}
					q(n = Object.create(null)) {
						const g = this.r(n);
						return g.untitledResource && this.j.has(g.untitledResource)
							? this.j.get(g.untitledResource)
							: this.s(g);
					}
					r(n) {
						const g = Object.create(null);
						if (
							(n.associatedResource
								? ((g.untitledResource = t.URI.from({
										scheme: m.Schemas.untitled,
										authority: n.associatedResource.authority,
										fragment: n.associatedResource.fragment,
										path: n.associatedResource.path,
										query: n.associatedResource.query,
									})),
									(g.associatedResource = n.associatedResource))
								: n.untitledResource?.scheme === m.Schemas.untitled &&
									(g.untitledResource = n.untitledResource),
							n.languageId)
						)
							g.languageId = n.languageId;
						else if (!g.associatedResource) {
							const p = this.n.getValue();
							p.files?.defaultLanguage &&
								(g.languageId = p.files.defaultLanguage);
						}
						return (
							(g.encoding = n.encoding), (g.initialValue = n.initialValue), g
						);
					}
					s(n) {
						let g = n.untitledResource;
						if (!g) {
							let o = 1;
							do
								(g = t.URI.from({
									scheme: m.Schemas.untitled,
									path: `Untitled-${o}`,
								})),
									o++;
							while (this.j.has(g));
						}
						const p = this.D(
							this.m.createInstance(
								w.$6Y,
								g,
								!!n.associatedResource,
								n.initialValue,
								n.languageId,
								n.encoding,
							),
						);
						return this.t(p), p;
					}
					t(n) {
						const g = new r.$Zc();
						g.add(n.onDidChangeDirty(() => this.b.fire(n))),
							g.add(n.onDidChangeName(() => this.h.fire(n))),
							g.add(n.onDidChangeEncoding(() => this.c.fire(n))),
							g.add(n.onWillDispose(() => this.g.fire(n))),
							C.Event.once(n.onWillDispose)(() => {
								this.j.delete(n.resource), g.dispose();
							}),
							this.j.set(n.resource, n),
							this.f.fire(n),
							n.isDirty() && this.b.fire(n);
					}
					isUntitledWithAssociatedResource(n) {
						return (
							n.scheme === m.Schemas.untitled &&
							n.path.length > 1 &&
							!a.a.test(n.path)
						);
					}
					canDispose(n) {
						return n.isDisposed() ? !0 : this.u(n);
					}
					async u(n) {
						return n.isDirty()
							? (await C.Event.toPromise(n.onDidChangeDirty),
								this.canDispose(n))
							: !0;
					}
				};
				(e.$8Y = h),
					(e.$8Y = h = a = Ne([j(0, i.$Li), j(1, E.$gj)], h)),
					(0, u.$lK)(e.$7Y, h, u.InstantiationType.Delayed);
			},
		),
		