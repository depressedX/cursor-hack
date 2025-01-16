define(de[3350], he([1, 0, 29, 101, 88]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Wnc = void 0);
			let E = class {
				dispose() {}
				$onUnexpectedError(d) {
					d && d.$isError && (d = (0, t.$7)(d)), (0, t.$4)(d);
				}
			};
			(e.$Wnc = E),
				(e.$Wnc = E = Ne([(0, i.$tmc)(w.$lbb.MainThreadErrors)], E));
		}),
		define(
			de[3351],
			he([1, 0, 6, 3, 9, 22, 101, 88, 76]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				var r;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$2nc = void 0);
				let u = (r = class {
					constructor(c, n) {
						(this.d = n),
							(this.b = new i.$0c()),
							(this.c = new i.$Zc()),
							(this.a = c.getProxy(d.$mbb.ExtHostFileSystem));
						const g = c.getProxy(d.$mbb.ExtHostFileSystemInfo);
						for (const p of n.listCapabilities())
							g.$acceptProviderInfos(
								w.URI.from({ scheme: p.scheme, path: "/dummy" }),
								p.capabilities,
							);
						this.c.add(
							n.onDidChangeFileSystemProviderRegistrations((p) =>
								g.$acceptProviderInfos(
									w.URI.from({ scheme: p.scheme, path: "/dummy" }),
									p.provider?.capabilities ?? null,
								),
							),
						),
							this.c.add(
								n.onDidChangeFileSystemProviderCapabilities((p) =>
									g.$acceptProviderInfos(
										w.URI.from({ scheme: p.scheme, path: "/dummy" }),
										p.provider.capabilities,
									),
								),
							);
					}
					dispose() {
						this.c.dispose(), this.b.dispose();
					}
					async $registerFileSystemProvider(c, n, g, p) {
						this.b.set(c, new a(this.d, n, g, p, c, this.a));
					}
					$unregisterProvider(c) {
						this.b.deleteAndDispose(c);
					}
					$onFileSystemChange(c, n) {
						const g = this.b.get(c);
						if (!g) throw new Error("Unknown file provider");
						g.$onFileSystemChange(n);
					}
					$stat(c) {
						return this.d
							.stat(w.URI.revive(c))
							.then((n) => ({
								ctime: n.ctime,
								mtime: n.mtime,
								size: n.size,
								permissions: n.readonly ? E.FilePermission.Readonly : void 0,
								type: r.f(n),
							}))
							.catch(r.g);
					}
					$readdir(c) {
						return this.d
							.resolve(w.URI.revive(c), { resolveMetadata: !1 })
							.then((n) => {
								if (!n.isDirectory) {
									const g = new Error(n.name);
									throw (
										((g.name = E.FileSystemProviderErrorCode.FileNotADirectory),
										g)
									);
								}
								return n.children
									? n.children.map((g) => [g.name, r.f(g)])
									: [];
							})
							.catch(r.g);
					}
					static f(c) {
						let n = 0;
						return (
							c.isFile
								? (n += E.FileType.File)
								: c.isDirectory && (n += E.FileType.Directory),
							c.isSymbolicLink && (n += E.FileType.SymbolicLink),
							n
						);
					}
					$readFile(c) {
						return this.d
							.readFile(w.URI.revive(c))
							.then((n) => n.value)
							.catch(r.g);
					}
					$writeFile(c, n) {
						return this.d
							.writeFile(w.URI.revive(c), n)
							.then(() => {})
							.catch(r.g);
					}
					$rename(c, n, g) {
						return this.d
							.move(w.URI.revive(c), w.URI.revive(n), g.overwrite)
							.then(() => {})
							.catch(r.g);
					}
					$copy(c, n, g) {
						return this.d
							.copy(w.URI.revive(c), w.URI.revive(n), g.overwrite)
							.then(() => {})
							.catch(r.g);
					}
					$mkdir(c) {
						return this.d
							.createFolder(w.URI.revive(c))
							.then(() => {})
							.catch(r.g);
					}
					$delete(c, n) {
						return this.d.del(w.URI.revive(c), n).catch(r.g);
					}
					static g(c) {
						if (c instanceof E.$Gl)
							switch (c.fileOperationResult) {
								case E.FileOperationResult.FILE_NOT_FOUND:
									c.name = E.FileSystemProviderErrorCode.FileNotFound;
									break;
								case E.FileOperationResult.FILE_IS_DIRECTORY:
									c.name = E.FileSystemProviderErrorCode.FileIsADirectory;
									break;
								case E.FileOperationResult.FILE_PERMISSION_DENIED:
									c.name = E.FileSystemProviderErrorCode.NoPermissions;
									break;
								case E.FileOperationResult.FILE_MOVE_CONFLICT:
									c.name = E.FileSystemProviderErrorCode.FileExists;
									break;
							}
						else if (c instanceof Error) {
							const n = (0, E.$Bl)(c);
							n !== E.FileSystemProviderErrorCode.Unknown && (c.name = n);
						}
						throw c;
					}
					$ensureActivation(c) {
						return this.d.activateProvider(c);
					}
				});
				(e.$2nc = u),
					(e.$2nc =
						u =
						r =
							Ne([(0, C.$tmc)(d.$lbb.MainThreadFileSystem), j(1, E.$ll)], u));
				class a {
					constructor(c, n, g, p, o, f) {
						(this.readOnlyMessage = p),
							(this.c = o),
							(this.d = f),
							(this.a = new t.$re()),
							(this.onDidChangeFile = this.a.event),
							(this.onDidChangeCapabilities = t.Event.None),
							(this.capabilities = g),
							(this.b = c.registerProvider(n, this));
					}
					dispose() {
						this.b.dispose(), this.a.dispose();
					}
					watch(c, n) {
						const g = Math.random();
						return (
							this.d.$watch(this.c, g, c, n),
							(0, i.$Yc)(() => {
								this.d.$unwatch(this.c, g);
							})
						);
					}
					$onFileSystemChange(c) {
						this.a.fire(c.map(a.f));
					}
					static f(c) {
						return { resource: w.URI.revive(c.resource), type: c.type };
					}
					stat(c) {
						return this.d.$stat(this.c, c).then(void 0, (n) => {
							throw n;
						});
					}
					readFile(c) {
						return this.d.$readFile(this.c, c).then((n) => n.buffer);
					}
					writeFile(c, n, g) {
						return this.d.$writeFile(this.c, c, m.$Te.wrap(n), g);
					}
					delete(c, n) {
						return this.d.$delete(this.c, c, n);
					}
					mkdir(c) {
						return this.d.$mkdir(this.c, c);
					}
					readdir(c) {
						return this.d.$readdir(this.c, c);
					}
					rename(c, n, g) {
						return this.d.$rename(this.c, c, n, g);
					}
					copy(c, n, g) {
						return this.d.$copy(this.c, c, n, g);
					}
					open(c, n) {
						return this.d.$open(this.c, c, n);
					}
					close(c) {
						return this.d.$close(this.c, c);
					}
					read(c, n, g, p, o) {
						return this.d
							.$read(this.c, c, n, o)
							.then((f) => (g.set(f.buffer, p), f.byteLength));
					}
					write(c, n, g, p, o) {
						return this.d.$write(this.c, c, n, m.$Te.wrap(g).slice(p, p + o));
					}
				}
			},
		),
		define(
			de[3352],
			he([1, 0, 3, 172, 88, 101, 1245]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Rpc = void 0);
				let d = class {
					constructor(r, u) {
						(this.b = new t.$Zc()),
							(this.a = r.getProxy(w.$mbb.ExtHostInteractive)),
							this.b.add(
								u.onWillAddInteractiveDocument((a) => {
									this.a.$willAddInteractiveDocument(
										a.inputUri,
										`
`,
										i.$0M,
										a.notebookUri,
									);
								}),
							),
							this.b.add(
								u.onWillRemoveInteractiveDocument((a) => {
									this.a.$willRemoveInteractiveDocument(
										a.inputUri,
										a.notebookUri,
									);
								}),
							);
					}
					dispose() {
						this.b.dispose();
					}
				};
				(e.$Rpc = d),
					(e.$Rpc = d =
						Ne([(0, E.$tmc)(w.$lbb.MainThreadInteractive), j(1, C.$unc)], d));
			},
		),
		