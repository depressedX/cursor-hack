define(
			de[3598],
			he([
				1, 0, 23, 12, 9, 31, 22, 5, 41, 63, 25, 562, 189, 18, 78, 87, 361, 186,
				10, 997, 117,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$kWc = e.$jWc = e.$iWc = e.$hWc = e.$gWc = void 0);
				let l = class {
					constructor(T) {
						this.a = T;
					}
					async open(T) {
						if (!T.uri)
							throw new Error("Tried to open file link without a resolved URI");
						const P = T.parsedLink ? T.parsedLink.suffix : (0, b.$zoc)(T.text);
						let k = T.selection;
						k ||
							(k =
								P?.row === void 0
									? void 0
									: {
											startLineNumber: P.row ?? 1,
											startColumn: P.col ?? 1,
											endLineNumber: P.rowEnd,
											endColumn: P.colEnd,
										}),
							await this.a.openEditor({
								resource: T.uri,
								options: { pinned: !0, selection: k, revealIfOpened: !0 },
							});
					}
				};
				(e.$gWc = l), (e.$gWc = l = Ne([j(0, c.$IY)], l));
				let y = class {
					constructor(T) {
						this.a = T;
					}
					async open(T) {
						if (!T.uri)
							throw new Error(
								"Tried to open folder in workspace link without a resolved URI",
							);
						await this.a.executeCommand("revealInExplorer", T.uri);
					}
				};
				(e.$hWc = y), (e.$hWc = y = Ne([j(0, E.$ek)], y));
				let $ = class {
					constructor(T) {
						this.a = T;
					}
					async open(T) {
						if (!T.uri)
							throw new Error(
								"Tried to open folder in workspace link without a resolved URI",
							);
						this.a.openWindow([{ folderUri: T.uri }], { forceNewWindow: !0 });
					}
				};
				(e.$iWc = $), (e.$iWc = $ = Ne([j(0, g.$asb)], $));
				let v = class {
					constructor(T, P, k, L, D, M, N, A, R, O, B, U) {
						(this.b = T),
							(this.c = P),
							(this.d = k),
							(this.f = L),
							(this.g = D),
							(this.h = M),
							(this.i = N),
							(this.j = A),
							(this.k = R),
							(this.l = O),
							(this.m = B),
							(this.n = U),
							(this.a = this.i.createInstance(p.$M8));
					}
					async open(T) {
						const P = (0, a.$cWc)(this.g()),
							k = P.sep;
						let L = T.text.replace(/^file:\/\/\/?/, "");
						if (
							((L = P.normalize(L).replace(/^(\.+[\\/])+/, "")), T.contextLine)
						) {
							const N = (0, b.$Boc)(T.contextLine, this.g()).find(
								(A) => A.suffix && T.text.startsWith(A.path.text),
							);
							N &&
								N.suffix?.row !== void 0 &&
								((L = N.path.text),
								(L += `:${N.suffix.row}`),
								N.suffix?.col !== void 0 && (L += `:${N.suffix.col}`));
						}
						(L = L.replace(/:[^\\/\d][^\d]*$/, "")),
							(L = L.replace(/\.$/, "")),
							this.m.getWorkspace().folders.forEach((M) => {
								if (L.substring(0, M.name.length + 1) === M.name + k) {
									L = L.substring(M.name.length + 1);
									return;
								}
							});
						let D = L;
						if (
							(this.b.has(h.TerminalCapability.CommandDetection) &&
								(D =
									(0, a.$bWc)(
										this.b,
										T.bufferRange.start.y,
										L,
										P,
										this.j,
									)?.[0] || L),
							!(await this.p(D, T)) && !(L !== D && (await this.p(L, T))))
						)
							return this.k.quickAccess.show(L);
					}
					async o(T) {
						const P = this.g(),
							k = (0, a.$cWc)(P),
							L = k.isAbsolute(T);
						let D = L ? T : void 0;
						!L && this.c.length > 0 && (D = k.join(this.c, T));
						let M;
						if (D) {
							let N = D;
							P === i.OperatingSystem.Windows &&
								((N = D.replace(/\\/g, "/")),
								N.match(/[a-z]:/i) && (N = `/${N}`));
							let A;
							this.n.remoteAuthority
								? (A = w.URI.from({
										scheme: t.Schemas.vscodeRemote,
										authority: this.n.remoteAuthority,
										path: N,
									}))
								: (A = w.URI.file(N));
							try {
								const R = await this.h.stat(A);
								M = { uri: A, isDirectory: R.isDirectory };
							} catch {}
						}
						if (!M) {
							const N = await this.l.fileSearch(
								this.a.file(this.m.getWorkspace().folders, {
									filePattern: T,
									maxResults: 2,
								}),
							);
							if (N.results.length > 0) {
								if (N.results.length === 1) M = { uri: N.results[0].resource };
								else if (!L) {
									const R = (
										await this.l.fileSearch(
											this.a.file(this.m.getWorkspace().folders, {
												filePattern: `**/${T}`,
											}),
										)
									).results.filter((O) => O.resource.toString().endsWith(T));
									R.length === 1 && (M = { uri: R[0].resource });
								}
							}
						}
						return M;
					}
					async p(T, P) {
						const k = T.replace(/:\d+(:\d+)?$/, "");
						try {
							const L = await this.o(k);
							if (L) {
								const { uri: D, isDirectory: M } = L,
									N = {
										text: L.uri.path + (T.match(/:\d+(:\d+)?$/)?.[0] || ""),
										uri: D,
										bufferRange: P.bufferRange,
										type: P.type,
									};
								if (D) return await (M ? this.f.open(N) : this.d.open(N)), !0;
							}
						} catch {
							return !1;
						}
						return !1;
					}
				};
				(e.$jWc = v),
					(e.$jWc = v =
						Ne(
							[
								j(5, C.$ll),
								j(6, d.$Li),
								j(7, s.$YJ),
								j(8, r.$DJ),
								j(9, o.$p7),
								j(10, u.$Vi),
								j(11, n.$r8),
							],
							v,
						));
				let S = class {
					constructor(T, P, k) {
						(this.a = T), (this.b = P), (this.c = k);
					}
					async open(T) {
						if (!T.uri)
							throw new Error("Tried to open a url without a resolved URI");
						this.b.open(T.text, {
							allowTunneling: this.a && this.c.getValue("remote.forwardOnOpen"),
							allowContributedOpeners: !0,
							openExternal: !0,
						});
					}
				};
				(e.$kWc = S), (e.$kWc = S = Ne([j(1, m.$7rb), j(2, f.$gj)], S));
			},
		),
		