import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../services/workingCopy/common/workingCopyFileService.js';
import '../../../../platform/undoRedo/common/undoRedo.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/log/common/log.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/arrays.js';
import '../../../services/textfile/common/textfiles.js';
import '../../../../base/common/network.js';
define(
			de[3903],
			he([1, 0, 22, 10, 336, 155, 5, 34, 33, 24, 85, 23]),
			function (ce /*require*/,
 e /*exports*/,
 t /*files*/,
 i /*configuration*/,
 w /*workingCopyFileService*/,
 E /*undoRedo*/,
 C /*instantiation*/,
 d /*log*/,
 m /*cancellation*/,
 r /*arrays*/,
 u /*textfiles*/,
 a /*network*/) {
				"use strict";
				var h;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$9Mc = void 0);
				class c {
					constructor() {
						this.uris = [];
					}
					async perform() {
						return this;
					}
					toString() {
						return "(noop)";
					}
				}
				class n {
					constructor(S, I, T) {
						(this.newUri = S),
							(this.oldUri = I),
							(this.options = T),
							(this.type = "rename");
					}
				}
				let g = (h = class {
					constructor(S, I, T, P) {
						(this.a = S), (this.b = I), (this.c = T), (this.d = P);
					}
					get uris() {
						return this.a.flatMap((S) => [S.newUri, S.oldUri]);
					}
					async perform(S) {
						const I = [],
							T = [];
						for (const P of this.a)
							(P.options.overwrite === void 0 &&
								P.options.ignoreIfExists &&
								(await this.d.exists(P.newUri))) ||
								(I.push({
									file: { source: P.oldUri, target: P.newUri },
									overwrite: P.options.overwrite,
								}),
								T.push(new n(P.oldUri, P.newUri, P.options)));
						return I.length === 0
							? new c()
							: (await this.c.move(I, S, this.b),
								new h(T, { isUndoing: !0 }, this.c, this.d));
					}
					toString() {
						return `(rename ${this.a.map((S) => `${S.oldUri} to ${S.newUri}`).join(", ")})`;
					}
				});
				g = h = Ne([j(2, w.$iZ), j(3, t.$ll)], g);
				class p {
					constructor(S, I, T) {
						(this.newUri = S),
							(this.oldUri = I),
							(this.options = T),
							(this.type = "copy");
					}
				}
				let o = class {
					constructor(S, I, T, P, k) {
						(this.a = S),
							(this.b = I),
							(this.c = T),
							(this.d = P),
							(this.e = k);
					}
					get uris() {
						return this.a.flatMap((S) => [S.newUri, S.oldUri]);
					}
					async perform(S) {
						const I = [];
						for (const k of this.a)
							(k.options.overwrite === void 0 &&
								k.options.ignoreIfExists &&
								(await this.d.exists(k.newUri))) ||
								I.push({
									file: { source: k.oldUri, target: k.newUri },
									overwrite: k.options.overwrite,
								});
						if (I.length === 0) return new c();
						const T = await this.c.copy(I, S, this.b),
							P = [];
						for (let k = 0; k < T.length; k++) {
							const L = T[k],
								D = this.a[k];
							P.push(
								new s(
									L.resource,
									{
										recursive: !0,
										folder: this.a[k].options.folder || L.isDirectory,
										...D.options,
									},
									!1,
								),
							);
						}
						return this.e.createInstance(l, P, { isUndoing: !0 });
					}
					toString() {
						return `(copy ${this.a.map((S) => `${S.oldUri} to ${S.newUri}`).join(", ")})`;
					}
				};
				o = Ne([j(2, w.$iZ), j(3, t.$ll), j(4, C.$Li)], o);
				class f {
					constructor(S, I, T) {
						(this.newUri = S),
							(this.options = I),
							(this.contents = T),
							(this.type = "create");
					}
				}
				let b = class {
					constructor(S, I, T, P, k, L) {
						(this.a = S),
							(this.b = I),
							(this.c = T),
							(this.d = P),
							(this.e = k),
							(this.f = L);
					}
					get uris() {
						return this.a.map((S) => S.newUri);
					}
					async perform(S) {
						const I = [],
							T = [],
							P = [];
						for (const k of this.a)
							if (
								k.newUri.scheme !== a.Schemas.untitled &&
								!(
									k.options.overwrite === void 0 &&
									k.options.ignoreIfExists &&
									(await this.c.exists(k.newUri))
								)
							) {
								if (k.options.folder) I.push({ resource: k.newUri });
								else {
									const L =
										typeof k.contents < "u"
											? k.contents
											: await this.f.getEncodedReadable(k.newUri);
									T.push({
										resource: k.newUri,
										contents: L,
										overwrite: k.options.overwrite,
									});
								}
								P.push(
									new s(k.newUri, k.options, !k.options.folder && !k.contents),
								);
							}
						return I.length === 0 && T.length === 0
							? new c()
							: (await this.d.createFolder(I, S, this.b),
								await this.d.create(T, S, this.b),
								this.e.createInstance(l, P, { isUndoing: !0 }));
					}
					toString() {
						return `(create ${this.a.map((S) => (S.options.folder ? `folder ${S.newUri}` : `file ${S.newUri} with ${S.contents?.byteLength || 0} bytes`)).join(", ")})`;
					}
				};
				b = Ne([j(2, t.$ll), j(3, w.$iZ), j(4, C.$Li), j(5, u.$kZ)], b);
				class s {
					constructor(S, I, T) {
						(this.oldUri = S),
							(this.options = I),
							(this.undoesCreate = T),
							(this.type = "delete");
					}
				}
				let l = class {
					constructor(S, I, T, P, k, L, D) {
						(this.a = S),
							(this.b = I),
							(this.c = T),
							(this.d = P),
							(this.e = k),
							(this.f = L),
							(this.g = D);
					}
					get uris() {
						return this.a.map((S) => S.oldUri);
					}
					async perform(S) {
						const I = [],
							T = [];
						for (const P of this.a) {
							let k;
							try {
								k = await this.d.resolve(P.oldUri, { resolveMetadata: !0 });
							} catch {
								if (!P.options.ignoreIfNotExists)
									throw new Error(
										`${P.oldUri} does not exist and can not be deleted`,
									);
								continue;
							}
							I.push({
								resource: P.oldUri,
								recursive: P.options.recursive,
								useTrash:
									!P.options.skipTrashBin &&
									this.d.hasCapability(
										P.oldUri,
										t.FileSystemProviderCapabilities.Trash,
									) &&
									this.e.getValue("files.enableTrash"),
							});
							let L;
							if (
								!P.undoesCreate &&
								!P.options.folder &&
								!(
									typeof P.options.maxSize == "number" &&
									k.size > P.options.maxSize
								)
							)
								try {
									L = await this.d.readFile(P.oldUri);
								} catch (D) {
									this.g.error(D);
								}
							L !== void 0 && T.push(new f(P.oldUri, P.options, L.value));
						}
						return I.length === 0
							? new c()
							: (await this.c.delete(I, S, this.b),
								T.length === 0
									? new c()
									: this.f.createInstance(b, T, { isUndoing: !0 }));
					}
					toString() {
						return `(delete ${this.a.map((S) => S.oldUri).join(", ")})`;
					}
				};
				l = Ne(
					[j(2, w.$iZ), j(3, t.$ll), j(4, i.$gj), j(5, C.$Li), j(6, d.$ik)],
					l,
				);
				class y {
					constructor(S, I, T, P) {
						(this.label = S),
							(this.code = I),
							(this.operations = T),
							(this.confirmBeforeUndo = P),
							(this.type = E.UndoRedoElementType.Workspace),
							(this.resources = T.flatMap((k) => k.uris));
					}
					async undo() {
						await this.a();
					}
					async redo() {
						await this.a();
					}
					async a() {
						for (let S = 0; S < this.operations.length; S++) {
							const T = await this.operations[S].perform(
								m.CancellationToken.None,
							);
							this.operations[S] = T;
						}
					}
					toString() {
						return this.operations.map((S) => String(S)).join(", ");
					}
				}
				let $ = class {
					constructor(S, I, T, P, k, L, D, M, N, A) {
						(this.a = S),
							(this.b = I),
							(this.c = T),
							(this.d = P),
							(this.e = k),
							(this.f = L),
							(this.g = D),
							(this.h = M),
							(this.j = N),
							(this.k = A);
					}
					async apply() {
						const S = [],
							I = { undoRedoGroupId: this.c.id },
							T = [];
						for (const L of this.h)
							L.newResource && L.oldResource && !L.options?.copy
								? T.push(new n(L.newResource, L.oldResource, L.options ?? {}))
								: L.newResource && L.oldResource && L.options?.copy
									? T.push(new p(L.newResource, L.oldResource, L.options ?? {}))
									: !L.newResource && L.oldResource
										? T.push(new s(L.oldResource, L.options ?? {}, !1))
										: L.newResource &&
											!L.oldResource &&
											T.push(
												new f(
													L.newResource,
													L.options ?? {},
													await L.options.contents,
												),
											);
						if (T.length === 0) return [];
						const P = [];
						P[0] = [T[0]];
						for (let L = 1; L < T.length; L++) {
							const D = T[L],
								M = (0, r.$wb)(P);
							M?.[0].type === D.type ? M.push(D) : P.push([D]);
						}
						for (const L of P) {
							if (this.g.isCancellationRequested) break;
							let D;
							switch (L[0].type) {
								case "rename":
									D = this.j.createInstance(g, L, I);
									break;
								case "copy":
									D = this.j.createInstance(o, L, I);
									break;
								case "delete":
									D = this.j.createInstance(l, L, I);
									break;
								case "create":
									D = this.j.createInstance(b, L, I);
									break;
							}
							if (D) {
								const M = await D.perform(this.g);
								S.push(M);
							}
							this.f.report(void 0);
						}
						const k = new y(this.a, this.b, S, this.e);
						return this.k.pushElement(k, this.c, this.d), k.resources;
					}
				};
				(e.$9Mc = $), (e.$9Mc = $ = Ne([j(8, C.$Li), j(9, E.$GN)], $));
			},
		),
		