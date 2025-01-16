define(
			de[3517],
			he([1, 0, 33, 29, 6, 3, 23, 19, 10, 22, 25, 1223, 475]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$src = e.$rrc = e.$qrc = void 0);
				class c {
					constructor(o, f) {
						(this.uri = o), (this.kind = f);
					}
				}
				e.$qrc = c;
				class n {
					constructor(o, f) {
						(this.element = o), (this.outline = f);
					}
				}
				e.$rrc = n;
				let g = class {
					constructor(o, f, b, s, l) {
						(this.resource = o),
							(this.h = s),
							(this.j = l),
							(this.a = new E.$Zc()),
							(this.e = new E.$2c()),
							(this.f = new E.$Zc()),
							(this.g = new w.$re()),
							(this.onDidUpdate = this.g.event),
							(this.c = a.$prc.FilePath.bindTo(b)),
							(this.d = a.$prc.SymbolPath.bindTo(b)),
							this.a.add(this.c.onDidChange((y) => this.g.fire(this))),
							this.a.add(this.d.onDidChange((y) => this.g.fire(this))),
							this.h.onDidChangeWorkspaceFolders(this.l, this, this.a),
							(this.b = this.k(o)),
							f &&
								(this.m(f),
								this.a.add(l.onDidChange(() => this.m(f))),
								this.a.add(f.onDidChangeControl(() => this.m(f)))),
							this.g.fire(this);
					}
					dispose() {
						this.a.dispose(),
							this.c.dispose(),
							this.d.dispose(),
							this.e.dispose(),
							this.f.dispose(),
							this.g.dispose();
					}
					isRelative() {
						return !!this.b.folder;
					}
					getElements() {
						let o = [];
						if (
							(this.c.getValue() === "on"
								? (o = o.concat(this.b.path))
								: this.c.getValue() === "last" &&
									this.b.path.length > 0 &&
									(o = o.concat(this.b.path.slice(-1))),
							this.d.getValue() === "off" || !this.e.value)
						)
							return o;
						const f =
							this.e.value.config.breadcrumbsDataSource.getBreadcrumbElements();
						for (
							let b =
								this.d.getValue() === "last" && f.length > 0 ? f.length - 1 : 0;
							b < f.length;
							b++
						)
							o.push(new n(f[b], this.e.value));
						return (
							f.length === 0 &&
								!this.e.value.isEmpty &&
								o.push(new n(this.e.value, this.e.value)),
							o
						);
					}
					k(o) {
						if ((0, C.$Wg)(o, C.Schemas.untitled, C.Schemas.data))
							return { folder: void 0, path: [] };
						const f = {
							folder: this.h.getWorkspaceFolder(o) ?? void 0,
							path: [],
						};
						let b = o;
						for (
							;
							b && b.path !== "/" && !(f.folder && (0, d.$gh)(f.folder.uri, b));
						) {
							f.path.unshift(
								new c(
									b,
									f.path.length === 0 ? r.FileKind.FILE : r.FileKind.FOLDER,
								),
							);
							const s = b.path.length;
							if (((b = (0, d.$mh)(b)), b.path.length === s)) break;
						}
						return (
							f.folder &&
								this.h.getWorkbenchState() === u.WorkbenchState.WORKSPACE &&
								f.path.unshift(new c(f.folder.uri, r.FileKind.ROOT_FOLDER)),
							f
						);
					}
					l() {
						(this.b = this.k(this.resource)), this.g.fire(this);
					}
					m(o) {
						const f = new t.$Ce();
						this.e.clear(),
							this.f.clear(),
							this.f.add((0, E.$Yc)(() => f.dispose(!0))),
							this.j
								.createOutline(o, h.OutlineTarget.Breadcrumbs, f.token)
								.then((b) => {
									f.token.isCancellationRequested &&
										(b?.dispose(), (b = void 0)),
										(this.e.value = b),
										this.g.fire(this),
										b && this.f.add(b.onDidChange(() => this.g.fire(this)));
								})
								.catch((b) => {
									this.g.fire(this), (0, i.$4)(b);
								});
					}
				};
				(e.$src = g),
					(e.$src = g = Ne([j(2, m.$gj), j(3, u.$Vi), j(4, h.$x4b)], g));
			},
		),
		