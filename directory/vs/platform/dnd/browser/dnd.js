import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/browser/dnd.js';
import '../../../base/browser/window.js';
import '../../../base/common/arrays.js';
import '../../../base/common/async.js';
import '../../../base/common/buffer.js';
import '../../../base/common/map.js';
import '../../../base/common/marshalling.js';
import '../../../base/common/network.js';
import '../../../base/common/platform.js';
import '../../../base/common/uri.js';
import '../../../nls.js';
import '../../dialogs/common/dialogs.js';
import '../../files/browser/htmlFileSystemProvider.js';
import '../../files/browser/webFileSystemAccess.js';
import '../../files/common/files.js';
import '../../instantiation/common/instantiation.js';
import '../../opener/common/opener.js';
import '../../registry/common/platform.js';
define(
			de[347],
			he([
				1, 0, 323, 75, 24, 15, 76, 59, 197, 23, 12, 9, 4, 57, 2730, 762, 22, 5,
				41, 30,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dnd*/,
 i /*window*/,
 w /*arrays*/,
 E /*async*/,
 C /*buffer*/,
 d /*map*/,
 m /*marshalling*/,
 r /*network*/,
 u /*platform*/,
 a /*uri*/,
 h /*nls*/,
 c /*dialogs*/,
 n /*htmlFileSystemProvider*/,
 g /*webFileSystemAccess*/,
 p /*files*/,
 o /*instantiation*/,
 f /*opener*/,
 b /*platform*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ozb = e.$nzb = e.$hzb = void 0),
					(e.$izb = s),
					(e.$jzb = l),
					(e.$kzb = y),
					(e.$lzb = S),
					(e.$mzb = I),
					(e.$hzb = { EDITORS: "CodeEditors", FILES: "CodeFiles" });
				function s(k) {
					const L = [];
					if (k.dataTransfer && k.dataTransfer.types.length > 0) {
						const N = k.dataTransfer.getData(e.$hzb.EDITORS);
						if (N)
							try {
								L.push(...(0, m.$ii)(N));
							} catch {}
						else
							try {
								const O = k.dataTransfer.getData(t.$Ohb.RESOURCES);
								L.push(...y(O));
							} catch {}
						if (k.dataTransfer?.files)
							for (let O = 0; O < k.dataTransfer.files.length; O++) {
								const B = k.dataTransfer.files[O];
								if (B && B.path)
									try {
										L.push({
											resource: a.URI.file(B.path),
											isExternal: !0,
											allowWorkspaceOpen: !0,
										});
									} catch {}
							}
						const A = k.dataTransfer.getData(e.$hzb.FILES);
						if (A)
							try {
								const O = JSON.parse(A);
								for (const B of O)
									L.push({
										resource: a.URI.file(B),
										isExternal: !0,
										allowWorkspaceOpen: !0,
									});
							} catch {}
						const R = b.$Io.as(e.$nzb.DragAndDropContribution).getAll();
						for (const O of R) {
							const B = k.dataTransfer.getData(O.dataFormatKey);
							if (B)
								try {
									L.push(...O.getEditorInputs(B));
								} catch {}
						}
					}
					const D = [],
						M = new d.$Gc();
					for (const N of L)
						N.resource
							? M.has(N.resource) || (D.push(N), M.set(N.resource, !0))
							: D.push(N);
					return D;
				}
				async function l(k, L) {
					const D = s(L);
					if (
						L.dataTransfer &&
						u.$r &&
						I(L, t.$Ohb.FILES) &&
						L.dataTransfer.items
					) {
						const A = await k.get(o.$Li).invokeFunction((R) => $(R, L));
						for (const R of A)
							D.push({
								resource: R.resource,
								contents: R.contents?.toString(),
								isExternal: !0,
								allowWorkspaceOpen: R.isDirectory,
							});
					}
					return D;
				}
				function y(k) {
					const L = [];
					if (k) {
						const D = JSON.parse(k);
						for (const M of D)
							if (M.indexOf(":") > 0) {
								const { selection: N, uri: A } = (0, f.$9rb)(a.URI.parse(M));
								L.push({ resource: A, options: { selection: N } });
							}
					}
					return L;
				}
				async function $(k, L) {
					if (g.WebFileSystemAccess.supported(i.$Bfb)) {
						const M = L.dataTransfer?.items;
						if (M) return v(k, M);
					}
					const D = L.dataTransfer?.files;
					return D ? S(k, D) : [];
				}
				async function v(k, L) {
					const D = k.get(p.$ll).getProvider(r.Schemas.file);
					if (!(D instanceof n.$gzb)) return [];
					const M = [];
					for (let N = 0; N < L.length; N++) {
						const A = L[N];
						if (A) {
							const R = new E.$0h();
							M.push(R),
								(async () => {
									try {
										const O = await A.getAsFileSystemHandle();
										if (!O) {
											R.complete(void 0);
											return;
										}
										g.WebFileSystemAccess.isFileSystemFileHandle(O)
											? R.complete({
													resource: await D.registerFileHandle(O),
													isDirectory: !1,
												})
											: g.WebFileSystemAccess.isFileSystemDirectoryHandle(O)
												? R.complete({
														resource: await D.registerDirectoryHandle(O),
														isDirectory: !0,
													})
												: R.complete(void 0);
									} catch {
										R.complete(void 0);
									}
								})();
						}
					}
					return (0, w.$Lb)(await Promise.all(M.map((N) => N.p)));
				}
				async function S(k, L) {
					const D = k.get(c.$GO),
						M = [];
					for (let N = 0; N < L.length; N++) {
						const A = L.item(N);
						if (A) {
							if (A.size > 100 * p.$Tl.MB) {
								D.warn((0, h.localize)(1724, null));
								continue;
							}
							const R = new E.$0h();
							M.push(R);
							const O = new FileReader();
							(O.onerror = () => R.complete(void 0)),
								(O.onabort = () => R.complete(void 0)),
								(O.onload = async (B) => {
									const U = A.name,
										z = B.target?.result ?? void 0;
									if (typeof U != "string" || typeof z > "u") {
										R.complete(void 0);
										return;
									}
									R.complete({
										resource: a.URI.from({
											scheme: r.Schemas.untitled,
											path: U,
										}),
										contents:
											typeof z == "string"
												? C.$Te.fromString(z)
												: C.$Te.wrap(new Uint8Array(z)),
									});
								}),
								O.readAsArrayBuffer(A);
						}
					}
					return (0, w.$Lb)(await Promise.all(M.map((N) => N.p)));
				}
				function I(k, ...L) {
					if (!k.dataTransfer) return !1;
					const D = k.dataTransfer.types,
						M = [];
					for (let N = 0; N < D.length; N++) M.push(D[N].toLowerCase());
					for (const N of L) if (M.indexOf(N.toLowerCase()) >= 0) return !0;
					return !1;
				}
				class T {
					constructor() {
						this.a = new Map();
					}
					register(L) {
						if (this.a.has(L.dataFormatKey))
							throw new Error(
								`A drag and drop contributiont with key '${L.dataFormatKey}' was already registered.`,
							);
						this.a.set(L.dataFormatKey, L);
					}
					getAll() {
						return this.a.values();
					}
				}
				(e.$nzb = {
					DragAndDropContribution: "workbench.contributions.dragAndDrop",
				}),
					b.$Io.add(e.$nzb.DragAndDropContribution, new T());
				class P {
					static {
						this.a = new P();
					}
					constructor() {}
					static getInstance() {
						return P.a;
					}
					hasData(L) {
						return L && L === this.c;
					}
					clearData(L) {
						this.hasData(L) && ((this.c = void 0), (this.b = void 0));
					}
					getData(L) {
						if (this.hasData(L)) return this.b;
					}
					setData(L, D) {
						D && ((this.b = L), (this.c = D));
					}
				}
				e.$ozb = P;
			},
		)
