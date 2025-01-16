define(
			de[336],
			he([1, 0, 5, 20, 6, 15, 24, 3, 22, 33, 227, 68, 3856, 3853]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$jZ = e.$iZ = void 0),
					(e.$iZ = (0, t.$Mi)("workingCopyFileService"));
				let n = class extends d.$1c {
					constructor(p, o, f, b) {
						super(),
							(this.g = p),
							(this.h = o),
							(this.j = f),
							(this.m = b),
							(this.a = this.D(new w.$te())),
							(this.onWillRunWorkingCopyFileOperation = this.a.event),
							(this.b = this.D(new w.$te())),
							(this.onDidFailWorkingCopyFileOperation = this.b.event),
							(this.c = this.D(new w.$te())),
							(this.onDidRunWorkingCopyFileOperation = this.c.event),
							(this.f = 0),
							(this.q = this.D(this.j.createInstance(h.$9Y))),
							(this.s = this.D(this.j.createInstance(c.$hZ))),
							(this.t = []),
							this.D(
								this.registerWorkingCopyProvider((s) =>
									this.h.workingCopies.filter((l) =>
										this.g.hasProvider(s)
											? this.m.extUri.isEqualOrParent(l.resource, s)
											: this.m.extUri.isEqual(l.resource, s),
									),
								),
							);
					}
					create(p, o, f) {
						return this.doCreateFileOrFolder(p, !0, o, f);
					}
					createFolder(p, o, f) {
						return this.doCreateFileOrFolder(p, !1, o, f);
					}
					async doCreateFileOrFolder(p, o, f, b) {
						if (p.length === 0) return [];
						if (o) {
							const v = (
								await E.Promises.settled(
									p.map((S) =>
										this.g.canCreateFile(S.resource, {
											overwrite: S.overwrite,
										}),
									),
								)
							).find((S) => S instanceof Error);
							if (v instanceof Error) throw v;
						}
						const s = p.map(($) => ({ target: $.resource }));
						await this.r(s, m.FileOperation.CREATE, b, f);
						const l = {
							correlationId: this.f++,
							operation: m.FileOperation.CREATE,
							files: s,
						};
						await this.a.fireAsync(l, r.CancellationToken.None);
						let y;
						try {
							o
								? (y = await E.Promises.settled(
										p.map(($) =>
											this.g.createFile($.resource, $.contents, {
												overwrite: $.overwrite,
											}),
										),
									))
								: (y = await E.Promises.settled(
										p.map(($) => this.g.createFolder($.resource)),
									));
						} catch ($) {
							throw (await this.b.fireAsync(l, r.CancellationToken.None), $);
						}
						return await this.c.fireAsync(l, r.CancellationToken.None), y;
					}
					async move(p, o, f) {
						return this.n(p, !0, o, f);
					}
					async copy(p, o, f) {
						return this.n(p, !1, o, f);
					}
					async n(p, o, f, b) {
						const s = [];
						for (const {
							file: { source: $, target: v },
							overwrite: S,
						} of p) {
							const I = await (o
								? this.g.canMove($, v, S)
								: this.g.canCopy($, v, S));
							if (I instanceof Error) throw I;
						}
						const l = p.map(($) => $.file);
						await this.r(
							l,
							o ? m.FileOperation.MOVE : m.FileOperation.COPY,
							b,
							f,
						);
						const y = {
							correlationId: this.f++,
							operation: o ? m.FileOperation.MOVE : m.FileOperation.COPY,
							files: l,
						};
						await this.a.fireAsync(y, r.CancellationToken.None);
						try {
							for (const {
								file: { source: $, target: v },
								overwrite: S,
							} of p) {
								if (!this.m.extUri.isEqual($, v)) {
									const I = o
										? [...this.getDirty($), ...this.getDirty(v)]
										: this.getDirty(v);
									await E.Promises.settled(
										I.map((T) => T.revert({ soft: !0 })),
									);
								}
								o
									? s.push(await this.g.move($, v, S))
									: s.push(await this.g.copy($, v, S));
							}
						} catch ($) {
							throw (await this.b.fireAsync(y, r.CancellationToken.None), $);
						}
						return await this.c.fireAsync(y, r.CancellationToken.None), s;
					}
					async delete(p, o, f) {
						for (const l of p) {
							const y = await this.g.canDelete(l.resource, {
								recursive: l.recursive,
								useTrash: l.useTrash,
							});
							if (y instanceof Error) throw y;
						}
						const b = p.map((l) => ({ target: l.resource }));
						await this.r(b, m.FileOperation.DELETE, f, o);
						const s = {
							correlationId: this.f++,
							operation: m.FileOperation.DELETE,
							files: b,
						};
						await this.a.fireAsync(s, r.CancellationToken.None);
						for (const l of p) {
							const y = this.getDirty(l.resource);
							await E.Promises.settled(y.map(($) => $.revert({ soft: !0 })));
						}
						try {
							for (const l of p)
								await this.g.del(l.resource, {
									recursive: l.recursive,
									useTrash: l.useTrash,
								});
						} catch (l) {
							throw (await this.b.fireAsync(s, r.CancellationToken.None), l);
						}
						await this.c.fireAsync(s, r.CancellationToken.None);
					}
					addFileOperationParticipant(p) {
						return this.q.addFileOperationParticipant(p);
					}
					r(p, o, f, b) {
						return this.q.participate(p, o, f, b);
					}
					get hasSaveParticipants() {
						return this.s.length > 0;
					}
					addSaveParticipant(p) {
						return this.s.addSaveParticipant(p);
					}
					runSaveParticipants(p, o, f, b) {
						return this.s.participate(p, o, f, b);
					}
					registerWorkingCopyProvider(p) {
						const o = (0, C.$Xb)(this.t, p);
						return (0, d.$Yc)(o);
					}
					getDirty(p) {
						const o = new Set();
						for (const f of this.t)
							for (const b of f(p)) b.isDirty() && o.add(b);
						return Array.from(o);
					}
				};
				(e.$jZ = n),
					(e.$jZ = n =
						Ne([j(0, m.$ll), j(1, u.$gY), j(2, t.$Li), j(3, a.$Vl)], n)),
					(0, i.$lK)(e.$iZ, n, i.InstantiationType.Delayed);
			},
		),
		