define(
			de[1614],
			he([1, 0, 76, 163, 29, 6, 3, 408, 47, 22, 938]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ueb = e.$Teb = void 0),
					(e.$Teb = "localFilesystem");
				class a extends C.$1c {
					constructor(c, n) {
						super(),
							(this.a = c),
							(this.b = n),
							(this.onDidChangeCapabilities = E.Event.None),
							(this.f = this.D(new E.$re())),
							(this.onDidChangeFile = this.f.event),
							(this.g = this.D(new E.$re())),
							(this.onDidWatchError = this.g.event),
							(this.h = (0, m.$9g)()),
							this.j();
					}
					get capabilities() {
						return (
							this.c ||
								((this.c =
									r.FileSystemProviderCapabilities.FileReadWrite |
									r.FileSystemProviderCapabilities.FileOpenReadWriteClose |
									r.FileSystemProviderCapabilities.FileReadStream |
									r.FileSystemProviderCapabilities.FileFolderCopy |
									r.FileSystemProviderCapabilities.FileWriteUnlock |
									r.FileSystemProviderCapabilities.FileAtomicRead |
									r.FileSystemProviderCapabilities.FileAtomicWrite |
									r.FileSystemProviderCapabilities.FileAtomicDelete |
									r.FileSystemProviderCapabilities.FileClone),
								this.b.pathCaseSensitive &&
									(this.c |=
										r.FileSystemProviderCapabilities.PathCaseSensitive),
								this.b.trash &&
									(this.c |= r.FileSystemProviderCapabilities.Trash)),
							this.c
						);
					}
					stat(c) {
						return this.a.call("stat", [c]);
					}
					readdir(c) {
						return this.a.call("readdir", [c]);
					}
					async readFile(c, n) {
						const { buffer: g } = await this.a.call("readFile", [c, n]);
						return g;
					}
					readFileStream(c, n, g) {
						const p = (0, d.$He)(
								(f) => t.$Te.concat(f.map((b) => t.$Te.wrap(b))).buffer,
							),
							o = new C.$Zc();
						return (
							o.add(
								this.a.listen("readFileStream", [c, n])((f) => {
									if (f instanceof t.$Te) p.write(f.buffer);
									else {
										if (f === "end") p.end();
										else {
											let b;
											if (f instanceof Error) b = f;
											else {
												const s = f;
												b = (0, r.$yl)(
													s.message ?? (0, i.$xj)(s),
													s.code ?? r.FileSystemProviderErrorCode.Unknown,
												);
											}
											p.error(b), p.end();
										}
										o.dispose();
									}
								}),
							),
							o.add(
								g.onCancellationRequested(() => {
									p.error((0, w.$0)()), p.end(), o.dispose();
								}),
							),
							p
						);
					}
					writeFile(c, n, g) {
						return this.a.call("writeFile", [c, t.$Te.wrap(n), g]);
					}
					open(c, n) {
						return this.a.call("open", [c, n]);
					}
					close(c) {
						return this.a.call("close", [c]);
					}
					async read(c, n, g, p, o) {
						const [f, b] = await this.a.call("read", [c, n, o]);
						return g.set(f.buffer.slice(0, b), p), b;
					}
					write(c, n, g, p, o) {
						return this.a.call("write", [c, n, t.$Te.wrap(g), p, o]);
					}
					mkdir(c) {
						return this.a.call("mkdir", [c]);
					}
					delete(c, n) {
						return this.a.call("delete", [c, n]);
					}
					rename(c, n, g) {
						return this.a.call("rename", [c, n, g]);
					}
					copy(c, n, g) {
						return this.a.call("copy", [c, n, g]);
					}
					cloneFile(c, n) {
						return this.a.call("cloneFile", [c, n]);
					}
					j() {
						this.D(
							this.a.listen("fileChange", [this.h])((c) => {
								if (Array.isArray(c)) {
									const n = c;
									this.f.fire((0, u.$yr)(n));
								} else {
									const n = c;
									this.g.fire(n);
								}
							}),
						);
					}
					watch(c, n) {
						const g = (0, m.$9g)();
						return (
							this.a.call("watch", [this.h, g, c, n]),
							(0, C.$Yc)(() => this.a.call("unwatch", [this.h, g]))
						);
					}
				}
				e.$Ueb = a;
			},
		),
		