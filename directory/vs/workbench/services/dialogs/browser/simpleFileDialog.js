define(
			de[1860],
			he([
				1, 0, 4, 19, 82, 22, 63, 9, 12, 57, 73, 25, 40, 67, 61, 252, 23, 78,
				143, 8, 37, 39, 249, 6, 3, 15, 18, 222, 44, 165, 91, 7,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$m5c =
						e.$l5c =
						e.OpenLocalFileFolderCommand =
						e.OpenLocalFolderCommand =
						e.SaveLocalFileCommand =
						e.OpenLocalFileCommand =
							void 0),
					(t = mt(t)),
					(i = mt(i)),
					(w = mt(w));
				var M;
				(function (U) {
					(U.ID = "workbench.action.files.openLocalFile"),
						(U.LABEL = t.localize(12220, null));
					function z() {
						return (F) =>
							F.get(r.$IO).pickFileAndOpen({
								forceNewWindow: !1,
								availableFileSystems: [p.Schemas.file],
							});
					}
					U.handler = z;
				})(M || (e.OpenLocalFileCommand = M = {}));
				var N;
				(function (U) {
					(U.ID = "workbench.action.files.saveLocalFile"),
						(U.LABEL = t.localize(12221, null));
					function z() {
						return (F) => {
							const x = F.get(I.$IY),
								H = x.activeEditorPane;
							return H
								? x.save(
										{ groupId: H.group.id, editor: H.input },
										{
											saveAs: !0,
											availableFileSystems: [p.Schemas.file],
											reason: P.SaveReason.EXPLICIT,
										},
									)
								: Promise.resolve(void 0);
						};
					}
					U.handler = z;
				})(N || (e.SaveLocalFileCommand = N = {}));
				var A;
				(function (U) {
					(U.ID = "workbench.action.files.openLocalFolder"),
						(U.LABEL = t.localize(12222, null));
					function z() {
						return (F) =>
							F.get(r.$IO).pickFolderAndOpen({
								forceNewWindow: !1,
								availableFileSystems: [p.Schemas.file],
							});
					}
					U.handler = z;
				})(A || (e.OpenLocalFolderCommand = A = {}));
				var R;
				(function (U) {
					(U.ID = "workbench.action.files.openLocalFileFolder"),
						(U.LABEL = t.localize(12223, null));
					function z() {
						return (F) =>
							F.get(r.$IO).pickFileFolderAndOpen({
								forceNewWindow: !1,
								availableFileSystems: [p.Schemas.file],
							});
					}
					U.handler = z;
				})(R || (e.OpenLocalFileFolderCommand = R = {}));
				var O;
				(function (U) {
					(U[(U.Updated = 0)] = "Updated"),
						(U[(U.UpdatedWithTrailing = 1)] = "UpdatedWithTrailing"),
						(U[(U.Updating = 2)] = "Updating"),
						(U[(U.NotUpdated = 3)] = "NotUpdated"),
						(U[(U.InvalidPath = 4)] = "InvalidPath");
				})(O || (O = {})),
					(e.$l5c = new b.$5j("remoteFileDialogVisible", !1));
				let B = class {
					constructor(z, F, x, H, q, V, G, K, J, W, X, Y, ie, ne) {
						(this.B = z),
							(this.C = F),
							(this.D = x),
							(this.E = H),
							(this.F = q),
							(this.G = V),
							(this.H = G),
							(this.I = K),
							(this.J = J),
							(this.K = W),
							(this.L = X),
							(this.M = Y),
							(this.N = ne),
							(this.d = !1),
							(this.f = !0),
							(this.g = !1),
							(this.k = !1),
							(this.o = ""),
							(this.p = ""),
							(this.u = !1),
							(this.x = "/"),
							(this.y = new $.$re()),
							(this.A = [this.y]),
							(this.h = this.J.remoteAuthority),
							(this.n = e.$l5c.bindTo(ie)),
							(this.m = this.L.defaultUriScheme);
					}
					set busy(z) {
						this.c.busy !== z && ((this.c.busy = z), this.y.fire(z));
					}
					get busy() {
						return this.c.busy;
					}
					async showOpenDialog(z = {}) {
						(this.m = this.Q(z.availableFileSystems, z.defaultUri)),
							(this.r = await this.S()),
							(this.t = await this.S(!0));
						const F = this.O(z);
						return F ? ((this.a = F), this.T()) : Promise.resolve(void 0);
					}
					async showSaveDialog(z) {
						(this.m = this.Q(z.availableFileSystems, z.defaultUri)),
							(this.r = await this.S()),
							(this.t = await this.S(!0)),
							(this.k = !0);
						const F = this.O(z, !0);
						return F
							? ((this.a = F),
								(this.a.canSelectFolders = !0),
								(this.a.canSelectFiles = !0),
								new Promise((x) => {
									this.T(!0).then((H) => {
										x(H);
									});
								}))
							: Promise.resolve(void 0);
					}
					O(z, F = !1) {
						let x, H;
						if (
							(z.defaultUri &&
								((x = this.m === z.defaultUri.scheme ? z.defaultUri : void 0),
								(H = F ? i.$kh(z.defaultUri) : void 0)),
							x || ((x = this.r), H && (x = i.$nh(x, H))),
							this.m !== p.Schemas.file && !this.B.hasProvider(x))
						) {
							this.F.info(t.localize(12224, null, x.toString()));
							return;
						}
						const q = w.$vo(z);
						return (q.defaultUri = x), q;
					}
					P(z, F) {
						z.startsWith("\\\\") || (z = z.replace(/\\/g, "/"));
						const x =
								this.m === p.Schemas.file
									? d.URI.file(z)
									: d.URI.from({
											scheme: this.m,
											path: z,
											query: F?.query,
											fragment: F?.fragment,
										}),
							H =
								x.scheme === p.Schemas.file ? void 0 : (this.h ?? F?.authority);
						return i.$xh(x, H, H ? this.L.defaultUriScheme : x.scheme);
					}
					Q(z, F) {
						return z && z.length > 0
							? F && z.indexOf(F.scheme) >= 0
								? F.scheme
								: z[0]
							: F
								? F.scheme
								: p.Schemas.file;
					}
					async R() {
						return (
							this.w === void 0 && (this.w = await this.K.getEnvironment()),
							this.w
						);
					}
					S(z = !1) {
						return z
							? this.L.userHome({ preferLocal: this.m === p.Schemas.file })
							: this.G.preferredHome(this.m);
					}
					async T(z = !1) {
						(this.g = !!this.a.canSelectFolders),
							(this.f = !!this.a.canSelectFiles),
							(this.x = this.D.getSeparator(this.m, this.h)),
							(this.d = !1),
							(this.u = await this.pb());
						let F = this.a.defaultUri
								? this.a.defaultUri
								: this.E.getWorkspace().folders[0].uri,
							x;
						const H = i.$lh(F);
						if (this.a.defaultUri) {
							try {
								x = await this.B.stat(this.a.defaultUri);
							} catch {}
							(!x || !x.isDirectory) &&
								((F = i.$mh(this.a.defaultUri)),
								(this.l = i.$kh(this.a.defaultUri)));
						}
						return new Promise((q) => {
							if (
								((this.c = this.C.createQuickPick()),
								(this.busy = !0),
								(this.c.matchOnLabel = !1),
								(this.c.sortByLabel = !1),
								(this.c.ignoreFocusOut = !0),
								(this.c.ok = !0),
								this.m !== p.Schemas.file &&
									this.a &&
									this.a.availableFileSystems &&
									this.a.availableFileSystems.length > 1 &&
									this.a.availableFileSystems.indexOf(p.Schemas.file) > -1)
							) {
								(this.c.customButton = !0),
									(this.c.customLabel = t.localize(12225, null));
								let W;
								z ? (W = N) : (W = this.f ? (this.g ? R : M) : A);
								const X = this.M.lookupKeybinding(W.ID);
								if (X) {
									const Y = X.getLabel();
									Y &&
										(this.c.customHover = (0, s.$kf)("{0} ({1})", W.LABEL, Y));
								}
							}
							let V = 0,
								G = !1;
							(this.b = i.$mh(F)),
								(this.o = ""),
								(this.p = ""),
								(this.c.title = this.a.title),
								(this.c.value = this.nb(this.b, !0)),
								(this.c.valueSelection = [
									this.c.value.length,
									this.c.value.length,
								]);
							function K(W, X) {
								X && ((X = i.$vh(X, W.x)), (X = i.$uh(X))),
									q(X),
									W.n.set(!1),
									W.c.dispose(),
									(0, v.$Vc)(W.A);
							}
							this.c.onDidCustom(() => {
								if (!(G || this.busy))
									return (
										(G = !0),
										V++,
										this.a.availableFileSystems &&
											this.a.availableFileSystems.length > 1 &&
											(this.a.availableFileSystems =
												this.a.availableFileSystems.slice(1)),
										this.c.hide(),
										z
											? this.G.showSaveDialog(this.a).then((W) => {
													K(this, W);
												})
											: this.G.showOpenDialog(this.a).then((W) => {
													K(this, W ? W[0] : void 0);
												})
									);
							});
							function J(W) {
								if (W.busy) {
									W.y.event((X) => {
										X || J(W);
									});
									return;
								} else if (G) return;
								(G = !0),
									V++,
									W.$().then((X) => {
										X
											? (W.c.hide(), K(W, X))
											: W.d
												? K(W, void 0)
												: (V--, (G = !1));
									});
							}
							this.c.onDidAccept((W) => {
								J(this);
							}),
								this.c.onDidChangeActive((W) => {
									if (((G = !1), W.length === 1 && this.X())) {
										this.c.validationMessage = void 0;
										const X = this.Y();
										(0, s.$Mf)(this.c.value.substring(0, X.length), X) ||
											((this.c.valueSelection = [0, this.c.value.length]),
											this.hb(X, X)),
											this.gb(X, this.o, W[0], !0);
									}
								}),
								this.c.onDidChangeValue(async (W) => this.U(W)),
								this.c.onDidHide(() => {
									(this.d = !0), V === 0 && K(this, void 0);
								}),
								this.c.show(),
								this.n.set(!0),
								this.mb(F, !0, this.l).then(() => {
									this.l
										? (this.c.valueSelection = [
												this.c.value.length - this.l.length,
												this.c.value.length - H.length,
											])
										: (this.c.valueSelection = [
												this.c.value.length,
												this.c.value.length,
											]),
										(this.busy = !1);
								});
						});
					}
					async U(z) {
						try {
							if (this.W())
								if (!(0, s.$Mf)(z, this.Y()) && !this.V(z)) {
									this.c.validationMessage = void 0;
									const F = this.Z();
									let x = O.NotUpdated;
									i.$fh.isEqual(this.b, F) || (x = await this.db(z, F)),
										(x === O.NotUpdated || x === O.UpdatedWithTrailing) &&
											this.fb(z);
								} else (this.c.activeItems = []), (this.o = "");
						} catch {}
					}
					V(z) {
						return (
							this.v &&
							z.length > this.v.length &&
							(0, s.$Mf)(z.substring(0, this.v.length), this.v)
						);
					}
					W() {
						return !(0, s.$Mf)(this.c.value, this.ob(this.b, this.o + this.p));
					}
					X() {
						return (
							this.q !== (this.c.activeItems ? this.c.activeItems[0] : void 0)
						);
					}
					Y() {
						const z = this.nb(this.b);
						return (0, s.$Mf)(this.c.value.substr(0, this.o.length), this.o)
							? (0, s.$Mf)(this.c.value.substr(0, z.length), z)
								? z
								: this.o
							: this.ob(this.b, this.o);
					}
					Z() {
						const z = this.P(this.c.value.trimRight(), this.b),
							F = this.nb(this.b);
						if ((0, s.$Mf)(this.c.value, F)) return this.b;
						const x = this.P(F, this.b),
							H = i.$ph(x, z),
							q =
								this.c.value.length > 1 && F.length > 1
									? (0, s.$Mf)(this.c.value.substr(0, 2), F.substr(0, 2))
									: !1;
						if (H && q) {
							let V = i.$nh(this.b, H);
							const G = i.$kh(z);
							return (
								(G === "." || G === "..") &&
									(V = this.P(this.ob(V, G), this.b)),
								i.$th(z) ? i.$vh(V) : V
							);
						} else return z;
					}
					async $() {
						if (((this.busy = !0), this.c.activeItems.length === 1)) {
							const F = this.c.selectedItems[0];
							if (F.isFolder) {
								if (this.l) await this.mb(F.uri, !0, this.l);
								else {
									const x = this.nb(F.uri);
									(0, s.$Nf)(x, this.c.value) &&
									(0, s.$Mf)(F.label, i.$kh(F.uri))
										? ((this.c.valueSelection = [
												this.nb(this.b).length,
												this.c.value.length,
											]),
											this.hb(x, this.rb(F.uri)))
										: F.label === ".." && (0, s.$Nf)(this.c.value, x)
											? ((this.c.valueSelection = [
													x.length,
													this.c.value.length,
												]),
												this.hb(x, ""))
											: await this.mb(F.uri, !0);
								}
								this.c.busy = !1;
								return;
							}
						} else if (
							(await this.db(this.c.value, this.Z())) !== O.NotUpdated
						) {
							this.c.busy = !1;
							return;
						}
						let z;
						if (
							(this.c.activeItems.length === 0
								? (z = this.Z())
								: this.c.activeItems.length === 1 &&
									(z = this.c.selectedItems[0].uri),
							z && (z = this.ib(z)),
							await this.lb(z))
						)
							return (this.busy = !1), z;
						this.busy = !1;
					}
					ab(z) {
						let F = z,
							x = i.$mh(z);
						for (; !i.$gh(F, x); ) (F = x), (x = i.$mh(x));
						return x;
					}
					bb(z) {
						const F = this.t;
						return z.length > 0 && z[0] === "~"
							? i.$nh(F, z.substring(1))
							: this.P(z);
					}
					cb(z, F) {
						return F.isDirectory && !this.qb(z.path) ? i.$vh(z) : z;
					}
					async db(z, F) {
						if (z.length > 0 && z[0] === "~") {
							const x = this.bb(z);
							return (await this.mb(x, !0)) ? O.UpdatedWithTrailing : O.Updated;
						} else {
							if (z === "\\")
								return (
									(F = this.ab(this.b)),
									(z = this.nb(F)),
									(await this.mb(F, !0)) ? O.UpdatedWithTrailing : O.Updated
								);
							{
								const x = i.$fh.isEqual(this.b, F),
									H = i.$fh.isEqual(this.b, i.$mh(F)),
									q = i.$fh.isEqualOrParent(this.b, i.$mh(F)),
									V = !q && !H;
								if (!x && (this.qb(z) || q || V)) {
									let G;
									try {
										G = await this.B.stat(F);
									} catch {}
									if (G && G.isDirectory && i.$kh(F) !== "." && this.qb(z))
										return (
											(F = this.cb(F, G)),
											(await this.mb(F)) ? O.UpdatedWithTrailing : O.Updated
										);
									if (this.qb(z))
										return (
											(this.c.validationMessage = t.localize(12226, null)),
											(this.v = z),
											O.InvalidPath
										);
									{
										let K = i.$mh(F);
										const J = i.$uh(i.$vh(this.b)),
											W = i.$uh(i.$vh(K));
										if (
											!i.$fh.isEqual(J, W) &&
											(!/^[a-zA-Z]:$/.test(this.c.value) ||
												!(0, s.$Mf)(
													this.nb(this.b).substring(0, this.c.value.length),
													this.c.value,
												))
										) {
											let X;
											try {
												X = await this.B.stat(K);
											} catch {}
											if (X && X.isDirectory)
												return (
													(this.v = void 0),
													(K = this.cb(K, X)),
													(await this.mb(K, !1, i.$kh(F)))
														? O.UpdatedWithTrailing
														: O.Updated
												);
										}
									}
								}
							}
						}
						return (this.v = void 0), O.NotUpdated;
					}
					eb(z) {
						const F = i.$lh(z);
						this.l && F && (this.l = i.$kh(z));
					}
					fb(z) {
						z = this.nb(this.bb(z));
						const F = this.P(z),
							x = i.$kh(F),
							H = this.Y();
						if (
							(0, s.$Mf)(H, z.substring(0, H.length)) ||
							(0, s.$Mf)(z, H.substring(0, z.length))
						) {
							let V = !1;
							for (let G = 0; G < this.c.items.length; G++) {
								const K = this.c.items[G];
								if (this.gb(z, x, K)) {
									V = !0;
									break;
								}
							}
							if (!V) {
								const G =
									x.length >= 2 ? H.substring(H.length - x.length + 2) : "";
								(this.o = G === x ? x : ""),
									(this.p = ""),
									(this.c.activeItems = []),
									this.eb(F);
							}
						} else
							(this.o = x),
								(this.p = ""),
								(this.c.activeItems = []),
								this.eb(F);
					}
					gb(z, F, x, H = !1) {
						if (this.busy) return (this.o = F), (this.p = ""), !1;
						const q = x.label;
						return q === ".."
							? ((this.o = ""),
								(this.p = ""),
								(this.q = x),
								H && (0, D.$Ngb)().execCommand("insertText", !1, ""),
								!1)
							: !H &&
									q.length >= F.length &&
									(0, s.$Mf)(q.substr(0, F.length), F)
								? ((this.o = F),
									(this.q = x),
									(this.p = ""),
									x.isFolder || !this.l
										? (this.c.activeItems = [x])
										: (this.c.activeItems = []),
									!0)
								: H && !(0, s.$Mf)(this.rb(x.uri), this.o + this.p)
									? ((this.o = ""),
										this.N.isScreenReaderOptimized() || (this.p = this.jb(q)),
										(this.q = x),
										this.N.isScreenReaderOptimized() ||
											((this.c.valueSelection = [
												this.nb(this.b, !0).length,
												this.c.value.length,
											]),
											this.hb(this.ob(this.b, this.p), this.p),
											(this.c.valueSelection = [
												this.c.value.length - this.p.length,
												this.c.value.length,
											])),
										!0)
									: ((this.o = F), (this.p = ""), !1);
					}
					hb(z, F) {
						this.c.inputHasFocus()
							? ((0, D.$Ngb)().execCommand("insertText", !1, F),
								this.c.value !== z && ((this.c.value = z), this.U(z)))
							: ((this.c.value = z), this.U(z));
					}
					ib(z) {
						let F = z;
						if (
							this.k &&
							this.a.filters &&
							this.a.filters.length > 0 &&
							!i.$th(z)
						) {
							let x = !1;
							const H = i.$lh(z).substr(1);
							for (let q = 0; q < this.a.filters.length; q++) {
								for (let V = 0; V < this.a.filters[q].extensions.length; V++)
									if (
										this.a.filters[q].extensions[V] === "*" ||
										this.a.filters[q].extensions[V] === H
									) {
										x = !0;
										break;
									}
								if (x) break;
							}
							x ||
								(F = i.$nh(
									i.$mh(z),
									i.$kh(z) + "." + this.a.filters[0].extensions[0],
								));
						}
						return F;
					}
					jb(z) {
						return z.length > 1 && this.qb(z) ? z.substr(0, z.length - 1) : z;
					}
					kb(z, F) {
						const x = this.C.createQuickPick();
						(x.title = F),
							(x.ignoreFocusOut = !0),
							(x.ok = !0),
							(x.customButton = !0),
							(x.customLabel = t.localize(12227, null)),
							(x.value = this.nb(z));
						let H = !1;
						return new Promise((q) => {
							x.onDidAccept(() => {
								(H = !0), x.hide(), q(!0);
							}),
								x.onDidHide(() => {
									H || q(!1), this.c.show(), (this.d = !1), x.dispose();
								}),
								x.onDidChangeValue(() => {
									x.hide();
								}),
								x.onDidCustom(() => {
									x.hide();
								}),
								x.show();
						});
					}
					async lb(z) {
						if (z === void 0)
							return (
								(this.c.validationMessage = t.localize(12228, null)),
								Promise.resolve(!1)
							);
						let F, x;
						try {
							(x = await this.B.stat(i.$mh(z))), (F = await this.B.stat(z));
						} catch {}
						if (this.k) {
							if (F && F.isDirectory)
								return (
									(this.c.validationMessage = t.localize(12229, null)),
									Promise.resolve(!1)
								);
							if (F) {
								const H = t.localize(12230, null, i.$kh(z));
								return this.kb(z, H);
							} else if ((0, y.$Jg)(i.$kh(z), this.u))
								if (x)
									if (x.isDirectory) {
										if (x.readonly)
											return (
												(this.c.validationMessage = t.localize(12234, null)),
												Promise.resolve(!1)
											);
									} else
										return (
											(this.c.validationMessage = t.localize(12233, null)),
											Promise.resolve(!1)
										);
								else {
									const H = t.localize(12232, null, i.$kh(i.$mh(z)));
									return this.kb(z, H);
								}
							else
								return (
									(this.c.validationMessage = t.localize(12231, null)),
									Promise.resolve(!1)
								);
						} else if (F) {
							if (z.path === "/" && this.u)
								return (
									(this.c.validationMessage = t.localize(12236, null)),
									Promise.resolve(!1)
								);
							if (F.isDirectory && !this.g)
								return (
									(this.c.validationMessage = t.localize(12237, null)),
									Promise.resolve(!1)
								);
							if (!F.isDirectory && !this.f)
								return (
									(this.c.validationMessage = t.localize(12238, null)),
									Promise.resolve(!1)
								);
						} else
							return (
								(this.c.validationMessage = t.localize(12235, null)),
								Promise.resolve(!1)
							);
						return Promise.resolve(!0);
					}
					async mb(z, F = !1, x) {
						(this.busy = !0), (this.p = "");
						const H = !!x;
						let q = !1;
						const V = (0, S.$zh)(async (G) => {
							let K;
							try {
								(K = await this.B.resolve(z)),
									K.isDirectory ||
										((x = i.$kh(z)), (z = i.$mh(z)), (K = void 0), (q = !0));
							} catch {}
							const J = x ? this.ob(z, x) : this.nb(z, !0);
							return (
								(this.b = this.qb(z.path) ? z : i.$vh(z, this.x)),
								(this.o = x || ""),
								this.tb(K, this.b, G).then((W) =>
									G.isCancellationRequested
										? ((this.busy = !1), !1)
										: ((this.c.itemActivation = C.ItemActivation.NONE),
											(this.c.items = W),
											!(0, s.$Mf)(this.c.value, J) &&
												F &&
												((this.c.valueSelection = [0, this.c.value.length]),
												this.hb(J, J)),
											F && x && H
												? (this.c.valueSelection = [
														this.c.value.length - x.length,
														this.c.value.length - x.length,
													])
												: x ||
													(this.c.valueSelection = [
														this.c.value.length,
														this.c.value.length,
													]),
											(this.busy = !1),
											(this.z = void 0),
											q),
								)
							);
						});
						return this.z !== void 0 && this.z.cancel(), (this.z = V), V;
					}
					nb(z, F = !1) {
						let x = (0, T.$xO)(z.fsPath, this.u).replace(/\n/g, "");
						return (
							this.x === "/"
								? (x = x.replace(/\\/g, this.x))
								: (x = x.replace(/\//g, this.x)),
							F && !this.qb(x) && (x = x + this.x),
							x
						);
					}
					ob(z, F) {
						return F === ".." || F === "."
							? this.nb(z, !0) + F
							: this.nb(i.$nh(z, F));
					}
					async pb() {
						let z = m.$l;
						const F = await this.R();
						return F && (z = F.os === m.OperatingSystem.Windows), z;
					}
					qb(z) {
						return /[\/\\]$/.test(z);
					}
					rb(z) {
						const F = this.nb(z, !0),
							x = this.nb(i.$mh(z), !0);
						return F.substring(x.length);
					}
					async sb(z) {
						const F = this.b.with({ scheme: p.Schemas.file, authority: "" }),
							x = i.$mh(F);
						if (!i.$gh(F, x)) {
							const H = i.$mh(z);
							if (await this.B.exists(H))
								return { label: "..", uri: i.$vh(H, this.x), isFolder: !0 };
						}
					}
					async tb(z, F, x) {
						const H = [],
							q = await this.sb(F);
						try {
							z || (z = await this.B.resolve(F));
							const G = z.children
								? await Promise.all(z.children.map((K) => this.vb(K, F, x)))
								: [];
							for (const K of G) K && H.push(K);
						} catch (G) {
							console.log(G);
						}
						if (x.isCancellationRequested) return [];
						const V = H.sort((G, K) => {
							if (G.isFolder !== K.isFolder) return G.isFolder ? -1 : 1;
							const J = this.qb(G.label)
									? G.label.substr(0, G.label.length - 1)
									: G.label,
								W = this.qb(K.label)
									? K.label.substr(0, K.label.length - 1)
									: K.label;
							return J.localeCompare(W);
						});
						return q && V.unshift(q), V;
					}
					ub(z) {
						if (this.a.filters) {
							for (let F = 0; F < this.a.filters.length; F++)
								for (let x = 0; x < this.a.filters[F].extensions.length; x++) {
									const H = this.a.filters[F].extensions[x];
									if (H === "*" || z.path.endsWith("." + H)) return !0;
								}
							return !1;
						}
						return !0;
					}
					async vb(z, F, x) {
						if (x.isCancellationRequested) return;
						let H = i.$nh(F, z.name);
						if (z.isDirectory) {
							const q = i.$kh(H);
							return (
								(H = i.$vh(H, this.x)),
								{
									label: q,
									uri: H,
									isFolder: !0,
									iconClasses: (0, g.$BDb)(
										this.H,
										this.I,
										H || void 0,
										E.FileKind.FOLDER,
									),
								}
							);
						} else if (!z.isDirectory && this.f && this.ub(H))
							return {
								label: z.name,
								uri: H,
								isFolder: !1,
								iconClasses: (0, g.$BDb)(this.H, this.I, H || void 0),
							};
					}
				};
				(e.$m5c = B),
					(e.$m5c = B =
						Ne(
							[
								j(0, E.$ll),
								j(1, C.$DJ),
								j(2, u.$3N),
								j(3, a.$Vi),
								j(4, h.$4N),
								j(5, r.$IO),
								j(6, c.$QO),
								j(7, n.$nM),
								j(8, o.$r8),
								j(9, f.$$m),
								j(10, k.$I8),
								j(11, l.$uZ),
								j(12, b.$6j),
								j(13, L.$XK),
							],
							B,
						));
			},
		),
		