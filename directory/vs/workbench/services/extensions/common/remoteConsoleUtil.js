define(de[3377], he([1, 0, 1560]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Smc = i),
				(e.$Tmc = w);
			function i(E, C, d = null) {
				const m = (0, t.$Gr)(C).args;
				let r = m.shift();
				if (typeof r == "string")
					switch (
						(C.severity || (C.severity = "info"),
						d &&
							(/^\[/.test(d) || (d = `[${d}]`),
							/ $/.test(d) || (d = `${d} `),
							(r = d + r)),
						C.severity)
					) {
						case "log":
						case "info":
							E.info(r, ...m);
							break;
						case "warn":
							E.warn(r, ...m);
							break;
						case "error":
							E.error(r, ...m);
							break;
					}
			}
			function w(E, C, d) {
				const m = (0, t.$Gr)(C).args,
					r = m.shift();
				typeof r != "string" ||
					C.severity !== "error" ||
					(/^\[/.test(d) || (d = `[${d}]`),
					/ $/.test(d) || (d = `${d} `),
					E.error(d + r, ...m));
			}
		}),
		define(
			de[3378],
			he([1, 0, 101, 88, 113, 1560, 3377, 698, 34]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Vmc = void 0);
				let r = class {
					constructor(a, h, c) {
						(this.b = h), (this.c = c);
						const n = (0, d.$Umc)(this.b);
						this.a = n.isExtensionDevTestFromCli;
					}
					dispose() {}
					$logExtensionHostMessage(a) {
						this.a
							? (0, C.$Smc)(this.c, a)
							: ((0, C.$Tmc)(this.c, a, "Extension Host"),
								(0, E.log)(a, "Extension Host"));
					}
				};
				(e.$Vmc = r),
					(e.$Vmc = r =
						Ne(
							[(0, t.$tmc)(i.$lbb.MainThreadConsole), j(1, w.$Ti), j(2, m.$ik)],
							r,
						));
			},
		),
		define(
			de[3379],
			he([
				1, 0, 76, 6, 3, 23, 12, 767, 73, 34, 62, 604, 211, 773, 952, 32, 269,
				25, 78, 698, 1021, 53,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$74c = void 0),
					(C = mt(C));
				let y = class extends w.$1c {
					constructor(v, S, I, T, P, k, L, D, M, N, A, R, O) {
						super(),
							(this.runningLocation = v),
							(this.j = S),
							(this.m = I),
							(this.n = T),
							(this.q = P),
							(this.r = k),
							(this.s = L),
							(this.t = D),
							(this.u = M),
							(this.w = N),
							(this.y = A),
							(this.z = R),
							(this.C = O),
							(this.pid = null),
							(this.startup = l.ExtensionHostStartup.EagerAutoStart),
							(this.extensions = null),
							(this.a = this.D(new i.$re())),
							(this.onExit = this.a.event),
							(this.g = !1),
							(this.remoteAuthority = this.j.remoteAuthority),
							(this.b = null),
							(this.c = !1),
							(this.f = !1);
						const B = (0, b.$Umc)(this.q);
						this.h = B.isExtensionDevHost;
					}
					start() {
						const v = {
							commit: this.z.commit,
							quality: this.z.quality,
							addressProvider: {
								getAddress: async () => {
									const { authority: S } = await this.w.resolveAuthority(
										this.j.remoteAuthority,
									);
									return {
										connectTo: S.connectTo,
										connectionToken: S.connectionToken,
									};
								},
							},
							remoteSocketFactoryService: this.m,
							signService: this.C,
							logService: this.s,
							ipcLogger: null,
						};
						return this.w.resolveAuthority(this.j.remoteAuthority).then((S) => {
							const I = {
									language: C.$z,
									debugId: this.q.debugExtensionHost.debugId,
									break: this.q.debugExtensionHost.break,
									port: this.q.debugExtensionHost.port,
									env: {
										...this.q.debugExtensionHost.env,
										...S.options?.extensionHostEnv,
									},
								},
								T = this.q.extensionDevelopmentLocationURI;
							let P = !0;
							return (
								T && T.length > 0 && T[0].scheme === E.Schemas.file && (P = !1),
								P || (I.break = !1),
								(0, a.$am)(v, I).then((k) => {
									this.D(k);
									const { protocol: L, debugPort: D, reconnectionToken: M } = k,
										N = typeof D == "number";
									return (
										P &&
											this.q.isExtensionDevelopment &&
											this.q.debugExtensionHost.debugId &&
											D &&
											this.y.attachSession(
												this.q.debugExtensionHost.debugId,
												D,
												this.j.remoteAuthority,
											),
										L.onDidDispose(() => {
											this.F(M);
										}),
										L.onSocketClose(() => {
											this.h && this.F(M);
										}),
										new Promise((A, R) => {
											const O = setTimeout(() => {
													R(
														"The remote extension host took longer than 60s to send its ready message.",
													);
												}, 6e4),
												B = L.onMessage((U) => {
													if ((0, s.$Rn)(U, s.MessageType.Ready)) {
														this.G(N).then((z) => {
															L.send(t.$Te.fromString(JSON.stringify(z)));
														});
														return;
													}
													if ((0, s.$Rn)(U, s.MessageType.Initialized)) {
														clearTimeout(O), B.dispose(), (this.b = L), A(L);
														return;
													}
													console.error(
														"received unexpected message during handshake phase from the extension host: ",
														U,
													);
												});
										})
									);
								})
							);
						});
					}
					F(v) {
						this.c ||
							((this.c = !0),
							this.h &&
								this.q.debugExtensionHost.debugId &&
								this.y.close(this.q.debugExtensionHost.debugId),
							!this.f && this.a.fire([0, v]));
					}
					async G(v) {
						const S = await this.j.getInitData();
						this.extensions = S.extensions;
						const I = this.n.getWorkspace();
						return {
							commit: this.z.commit,
							version: this.z.version,
							vscodeVersion: this.z.vscodeVersion,
							rendererPerformanceTimeOrigin: S.rendererPerformanceTimeOrigin,
							quality: this.z.quality,
							parentPid: S.pid,
							environment: {
								isExtensionDevelopmentDebug: v,
								appRoot: S.appRoot,
								appName: this.z.nameLong,
								appHost: this.z.embedderIdentifier || "desktop",
								appUriScheme: this.z.urlProtocol,
								extensionTelemetryLogResource: this.q.extHostTelemetryLogFile,
								isExtensionTelemetryLoggingOnly: (0, p.$Yp)(this.z, this.q),
								appLanguage: C.$z,
								extensionDevelopmentLocationURI:
									this.q.extensionDevelopmentLocationURI,
								extensionTestsLocationURI: this.q.extensionTestsLocationURI,
								globalStorageHome: S.globalStorageHome,
								workspaceStorageHome: S.workspaceStorageHome,
								extensionLogLevel: this.q.extensionLogLevel,
							},
							workspace:
								this.n.getWorkbenchState() === o.WorkbenchState.EMPTY
									? null
									: {
											configuration: I.configuration,
											id: I.id,
											name: this.u.getWorkspaceLabel(I),
											transient: I.transient,
										},
							remote: {
								isRemote: !0,
								authority: this.j.remoteAuthority,
								connectionData: S.connectionData,
							},
							consoleForward: {
								includeStack: !1,
								logNative: !!this.q.debugExtensionHost.debugId,
							},
							extensions: this.extensions.toSnapshot(),
							telemetryInfo: {
								sessionId: this.r.sessionId,
								machineId: this.r.machineId,
								macMachineId: this.r.macMachineId,
								sqmId: this.r.sqmId,
								devDeviceId: this.r.devDeviceId,
								firstSessionDate: this.r.firstSessionDate,
								msftInternal: this.r.msftInternal,
							},
							logLevel: this.s.getLevel(),
							loggers: [...this.t.getRegisteredLoggers()],
							logsLocation: S.extensionHostLogsPath,
							autoStart: this.startup === l.ExtensionHostStartup.EagerAutoStart,
							uiKind: C.$r ? s.UIKind.Web : s.UIKind.Desktop,
						};
					}
					getInspectPort() {}
					enableInspectPort() {
						return Promise.resolve(!1);
					}
					async disconnect() {
						this.b &&
							!this.g &&
							(this.b.send((0, s.$Qn)(s.MessageType.Terminate)),
							this.b.sendDisconnect(),
							(this.g = !0),
							await this.b.drain());
					}
					dispose() {
						super.dispose(),
							(this.f = !0),
							this.disconnect(),
							this.b && (this.b.getSocket().end(), (this.b = null));
					}
				};
				(e.$74c = y),
					(e.$74c = y =
						Ne(
							[
								j(2, c.$8l),
								j(3, o.$Vi),
								j(4, f.$r8),
								j(5, g.$km),
								j(6, r.$ik),
								j(7, r.$jk),
								j(8, m.$3N),
								j(9, h.$3l),
								j(10, d.$dp),
								j(11, u.$Bk),
								j(12, n.$$l),
							],
							y,
						));
			},
		),
		define(
			de[1821],
			he([1, 0, 15, 76, 33, 120, 29, 6, 3, 221, 1172, 3335, 622]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				var c;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Q4c = e.ResponsiveState = e.RequestInitiator = void 0),
					(e.$O4c = f),
					(e.$P4c = b),
					(C = mt(C));
				function n(A, R) {
					try {
						return JSON.stringify(A, R);
					} catch {
						return "null";
					}
				}
				const g = "$$ref$$",
					p = { [g]: -1 };
				class o {
					constructor(R, O) {
						(this.jsonString = R), (this.referencedBuffers = O);
					}
				}
				function f(A, R = null, O = !1) {
					const B = [];
					return {
						jsonString: (O ? n : JSON.stringify)(A, (z, F) => {
							if (typeof F > "u") return p;
							if (typeof F == "object") {
								if (F instanceof i.$Te) {
									const x = B.push(F) - 1;
									return { [g]: x };
								}
								if (R) return R(z, F);
							}
							return F;
						}),
						referencedBuffers: B,
					};
				}
				function b(A, R, O) {
					return JSON.parse(A, (B, U) => {
						if (U) {
							const z = U[g];
							if (typeof z == "number") return R[z];
							if (O && U.$mid === r.MarshalledId.Uri)
								return O.transformIncoming(U);
						}
						return U;
					});
				}
				function s(A, R) {
					return JSON.stringify(A, R);
				}
				function l(A) {
					return A
						? (R, O) =>
								O && O.$mid === r.MarshalledId.Uri ? A.transformOutgoing(O) : O
						: null;
				}
				var y;
				(function (A) {
					(A[(A.LocalSide = 0)] = "LocalSide"),
						(A[(A.OtherSide = 1)] = "OtherSide");
				})(y || (e.RequestInitiator = y = {}));
				var $;
				(function (A) {
					(A[(A.Responsive = 0)] = "Responsive"),
						(A[(A.Unresponsive = 1)] = "Unresponsive");
				})($ || (e.ResponsiveState = $ = {}));
				const v = () => {},
					S = Symbol.for("rpcProtocol"),
					I = Symbol.for("rpcProxy");
				class T extends m.$1c {
					static {
						c = S;
					}
					static {
						this.a = 3 * 1e3;
					}
					constructor(R, O = null, B = null) {
						super(),
							(this[c] = !0),
							(this.b = this.D(new d.$re())),
							(this.onDidChangeResponsiveState = this.b.event),
							(this.c = R),
							(this.f = O),
							(this.g = B),
							(this.h = l(this.g)),
							(this.j = !1),
							(this.m = []),
							(this.q = []);
						for (let U = 0, z = h.$rO.count; U < z; U++)
							(this.m[U] = null), (this.q[U] = null);
						(this.s = 0),
							(this.t = Object.create(null)),
							(this.u = {}),
							(this.w = $.Responsive),
							(this.y = 0),
							(this.z = 0),
							(this.C = this.D(new t.$Yh(() => this.H(), 1e3))),
							this.D(this.c.onMessage((U) => this.L(U)));
					}
					dispose() {
						(this.j = !0),
							Object.keys(this.u).forEach((R) => {
								const O = this.u[R];
								delete this.u[R], O.resolveErr(C.$0());
							}),
							super.dispose();
					}
					drain() {
						return typeof this.c.drain == "function"
							? this.c.drain()
							: Promise.resolve();
					}
					F(R) {
						this.y === 0 && (this.z = Date.now() + T.a),
							this.y++,
							this.C.isScheduled() || this.C.schedule();
					}
					G(R) {
						(this.z = Date.now() + T.a),
							this.y--,
							this.y === 0 && this.C.cancel(),
							this.I($.Responsive);
					}
					H() {
						this.y !== 0 &&
							(Date.now() > this.z
								? this.I($.Unresponsive)
								: this.C.schedule());
					}
					I(R) {
						this.w !== R && ((this.w = R), this.b.fire(this.w));
					}
					get responsiveState() {
						return this.w;
					}
					transformIncomingURIs(R) {
						return this.g ? (0, u.$5n)(R, this.g) : R;
					}
					getProxy(R) {
						const { nid: O, sid: B } = R;
						return this.q[O] || (this.q[O] = this.J(O, B)), this.q[O];
					}
					J(R, O) {
						const B = {
							get: (U, z) => (
								typeof z == "string" &&
									!U[z] &&
									z.charCodeAt(0) === E.CharCode.DollarSign &&
									(U[z] = (...F) => this.U(R, z, F)),
								z === I ? O : U[z]
							),
						};
						return new Proxy(Object.create(null), B);
					}
					set(R, O) {
						return (this.m[R.nid] = O), O;
					}
					assertRegistered(R) {
						for (let O = 0, B = R.length; O < B; O++) {
							const U = R[O];
							if (!this.m[U.nid])
								throw new Error(`Missing proxy instance ${U.sid}`);
						}
					}
					L(R) {
						if (this.j) return;
						const O = R.byteLength,
							B = k.read(R, 0),
							U = B.readUInt8(),
							z = B.readUInt32();
						switch (U) {
							case M.RequestJSONArgs:
							case M.RequestJSONArgsWithCancellation: {
								let {
									rpcId: F,
									method: x,
									args: H,
								} = D.deserializeRequestJSONArgs(B);
								this.g && (H = (0, u.$5n)(H, this.g)),
									this.M(
										O,
										z,
										F,
										x,
										H,
										U === M.RequestJSONArgsWithCancellation,
									);
								break;
							}
							case M.RequestMixedArgs:
							case M.RequestMixedArgsWithCancellation: {
								let {
									rpcId: F,
									method: x,
									args: H,
								} = D.deserializeRequestMixedArgs(B);
								this.g && (H = (0, u.$5n)(H, this.g)),
									this.M(
										O,
										z,
										F,
										x,
										H,
										U === M.RequestMixedArgsWithCancellation,
									);
								break;
							}
							case M.Acknowledged: {
								this.f?.logIncoming(O, z, y.LocalSide, "ack"), this.G(z);
								break;
							}
							case M.Cancel: {
								this.N(O, z);
								break;
							}
							case M.ReplyOKEmpty: {
								this.O(O, z, void 0);
								break;
							}
							case M.ReplyOKJSON: {
								let F = D.deserializeReplyOKJSON(B);
								this.g && (F = (0, u.$5n)(F, this.g)), this.O(O, z, F);
								break;
							}
							case M.ReplyOKJSONWithBuffers: {
								const F = D.deserializeReplyOKJSONWithBuffers(B, this.g);
								this.O(O, z, F);
								break;
							}
							case M.ReplyOKVSBuffer: {
								const F = D.deserializeReplyOKVSBuffer(B);
								this.O(O, z, F);
								break;
							}
							case M.ReplyErrError: {
								let F = D.deserializeReplyErrError(B);
								this.g && (F = (0, u.$5n)(F, this.g)), this.P(O, z, F);
								break;
							}
							case M.ReplyErrEmpty: {
								this.P(O, z, void 0);
								break;
							}
							default:
								console.error("received unexpected message"), console.error(R);
						}
					}
					M(R, O, B, U, z, F) {
						this.f?.logIncoming(
							R,
							O,
							y.OtherSide,
							`receiveRequest ${(0, h.$tO)(B)}.${U}(`,
							z,
						);
						const x = String(O);
						let H, q;
						if (F) {
							const G = new w.$Ce();
							z.push(G.token), (H = this.Q(B, U, z)), (q = () => G.cancel());
						} else (H = this.Q(B, U, z)), (q = v);
						this.t[x] = q;
						const V = D.serializeAcknowledged(O);
						this.f?.logOutgoing(V.byteLength, O, y.OtherSide, "ack"),
							this.c.send(V),
							H.then(
								(G) => {
									delete this.t[x];
									const K = D.serializeReplyOK(O, G, this.h);
									this.f?.logOutgoing(
										K.byteLength,
										O,
										y.OtherSide,
										"reply:",
										G,
									),
										this.c.send(K);
								},
								(G) => {
									delete this.t[x];
									const K = D.serializeReplyErr(O, G);
									this.f?.logOutgoing(
										K.byteLength,
										O,
										y.OtherSide,
										"replyErr:",
										G,
									),
										this.c.send(K);
								},
							);
					}
					N(R, O) {
						this.f?.logIncoming(R, O, y.OtherSide, "receiveCancel");
						const B = String(O);
						this.t[B]?.();
					}
					O(R, O, B) {
						this.f?.logIncoming(R, O, y.LocalSide, "receiveReply:", B);
						const U = String(O);
						if (!this.u.hasOwnProperty(U)) return;
						const z = this.u[U];
						delete this.u[U], z.resolveOk(B);
					}
					P(R, O, B) {
						this.f?.logIncoming(R, O, y.LocalSide, "receiveReplyErr:", B);
						const U = String(O);
						if (!this.u.hasOwnProperty(U)) return;
						const z = this.u[U];
						delete this.u[U];
						let F;
						B &&
							(B.$isError
								? ((F = new Error()),
									(F.name = B.name),
									(F.message = B.message),
									(F.stack = B.stack))
								: (F = B)),
							z.resolveErr(F);
					}
					Q(R, O, B) {
						try {
							return Promise.resolve(this.S(R, O, B));
						} catch (U) {
							return Promise.reject(U);
						}
					}
					S(R, O, B) {
						const U = this.m[R];
						if (!U) throw new Error("Unknown actor " + (0, h.$tO)(R));
						const z = U[O];
						if (typeof z != "function")
							throw new Error(
								"Unknown method " + O + " on actor " + (0, h.$tO)(R),
							);
						return z.apply(U, B);
					}
					U(R, O, B) {
						if (this.j) return new a.$N4c();
						let U = null;
						if (
							(B.length > 0 &&
								w.CancellationToken.isCancellationToken(B[B.length - 1]) &&
								(U = B.pop()),
							U && U.isCancellationRequested)
						)
							return Promise.reject(C.$0());
						const z = D.serializeRequestArguments(B, this.h),
							F = ++this.s,
							x = String(F),
							H = new a.$M4c(),
							q = new m.$Zc();
						U &&
							q.add(
								U.onCancellationRequested(() => {
									const G = D.serializeCancel(F);
									this.f?.logOutgoing(G.byteLength, F, y.LocalSide, "cancel"),
										this.c.send(D.serializeCancel(F));
								}),
							),
							(this.u[x] = new P(H, q)),
							this.F(F);
						const V = D.serializeRequest(F, R, O, z, !!U);
						return (
							this.f?.logOutgoing(
								V.byteLength,
								F,
								y.LocalSide,
								`request: ${(0, h.$tO)(R)}.${O}(`,
								B,
							),
							this.c.send(V),
							H
						);
					}
				}
				e.$Q4c = T;
				class P {
					constructor(R, O) {
						(this.a = R), (this.b = O);
					}
					resolveOk(R) {
						this.a.resolveOk(R), this.b.dispose();
					}
					resolveErr(R) {
						this.a.resolveErr(R), this.b.dispose();
					}
				}
				class k {
					static alloc(R, O, B) {
						const U = new k(i.$Te.alloc(B + 1 + 4), 0);
						return U.writeUInt8(R), U.writeUInt32(O), U;
					}
					static read(R, O) {
						return new k(R, O);
					}
					get buffer() {
						return this.a;
					}
					constructor(R, O) {
						(this.a = R), (this.b = O);
					}
					static sizeUInt8() {
						return 1;
					}
					static {
						this.sizeUInt32 = 4;
					}
					writeUInt8(R) {
						this.a.writeUInt8(R, this.b), (this.b += 1);
					}
					readUInt8() {
						const R = this.a.readUInt8(this.b);
						return (this.b += 1), R;
					}
					writeUInt32(R) {
						this.a.writeUInt32BE(R, this.b), (this.b += 4);
					}
					readUInt32() {
						const R = this.a.readUInt32BE(this.b);
						return (this.b += 4), R;
					}
					static sizeShortString(R) {
						return 1 + R.byteLength;
					}
					writeShortString(R) {
						this.a.writeUInt8(R.byteLength, this.b),
							(this.b += 1),
							this.a.set(R, this.b),
							(this.b += R.byteLength);
					}
					readShortString() {
						const R = this.a.readUInt8(this.b);
						this.b += 1;
						const B = this.a.slice(this.b, this.b + R).toString();
						return (this.b += R), B;
					}
					static sizeLongString(R) {
						return 4 + R.byteLength;
					}
					writeLongString(R) {
						this.a.writeUInt32BE(R.byteLength, this.b),
							(this.b += 4),
							this.a.set(R, this.b),
							(this.b += R.byteLength);
					}
					readLongString() {
						const R = this.a.readUInt32BE(this.b);
						this.b += 4;
						const B = this.a.slice(this.b, this.b + R).toString();
						return (this.b += R), B;
					}
					writeBuffer(R) {
						this.a.writeUInt32BE(R.byteLength, this.b),
							(this.b += 4),
							this.a.set(R, this.b),
							(this.b += R.byteLength);
					}
					static sizeVSBuffer(R) {
						return 4 + R.byteLength;
					}
					writeVSBuffer(R) {
						this.a.writeUInt32BE(R.byteLength, this.b),
							(this.b += 4),
							this.a.set(R, this.b),
							(this.b += R.byteLength);
					}
					readVSBuffer() {
						const R = this.a.readUInt32BE(this.b);
						this.b += 4;
						const O = this.a.slice(this.b, this.b + R);
						return (this.b += R), O;
					}
					static sizeMixedArray(R) {
						let O = 0;
						O += 1;
						for (let B = 0, U = R.length; B < U; B++) {
							const z = R[B];
							switch (((O += 1), z.type)) {
								case N.String:
									O += this.sizeLongString(z.value);
									break;
								case N.VSBuffer:
									O += this.sizeVSBuffer(z.value);
									break;
								case N.SerializedObjectWithBuffers:
									(O += this.sizeUInt32), (O += this.sizeLongString(z.value));
									for (let F = 0; F < z.buffers.length; ++F)
										O += this.sizeVSBuffer(z.buffers[F]);
									break;
								case N.Undefined:
									break;
							}
						}
						return O;
					}
					writeMixedArray(R) {
						this.a.writeUInt8(R.length, this.b), (this.b += 1);
						for (let O = 0, B = R.length; O < B; O++) {
							const U = R[O];
							switch (U.type) {
								case N.String:
									this.writeUInt8(N.String), this.writeLongString(U.value);
									break;
								case N.VSBuffer:
									this.writeUInt8(N.VSBuffer), this.writeVSBuffer(U.value);
									break;
								case N.SerializedObjectWithBuffers:
									this.writeUInt8(N.SerializedObjectWithBuffers),
										this.writeUInt32(U.buffers.length),
										this.writeLongString(U.value);
									for (let z = 0; z < U.buffers.length; ++z)
										this.writeBuffer(U.buffers[z]);
									break;
								case N.Undefined:
									this.writeUInt8(N.Undefined);
									break;
							}
						}
					}
					readMixedArray() {
						const R = this.a.readUInt8(this.b);
						this.b += 1;
						const O = new Array(R);
						for (let B = 0; B < R; B++)
							switch (this.readUInt8()) {
								case N.String:
									O[B] = this.readLongString();
									break;
								case N.VSBuffer:
									O[B] = this.readVSBuffer();
									break;
								case N.SerializedObjectWithBuffers: {
									const z = this.readUInt32(),
										F = this.readLongString(),
										x = [];
									for (let H = 0; H < z; ++H) x.push(this.readVSBuffer());
									O[B] = new h.$uO(b(F, x, null));
									break;
								}
								case N.Undefined:
									O[B] = void 0;
									break;
							}
						return O;
					}
				}
				var L;
				(function (A) {
					(A[(A.Simple = 0)] = "Simple"), (A[(A.Mixed = 1)] = "Mixed");
				})(L || (L = {}));
				class D {
					static a(R) {
						for (let O = 0, B = R.length; O < B; O++)
							if (
								R[O] instanceof i.$Te ||
								R[O] instanceof h.$uO ||
								typeof R[O] > "u"
							)
								return !0;
						return !1;
					}
					static serializeRequestArguments(R, O) {
						if (this.a(R)) {
							const B = [];
							for (let U = 0, z = R.length; U < z; U++) {
								const F = R[U];
								if (F instanceof i.$Te) B[U] = { type: N.VSBuffer, value: F };
								else if (typeof F > "u") B[U] = { type: N.Undefined };
								else if (F instanceof h.$uO) {
									const { jsonString: x, referencedBuffers: H } = f(F.value, O);
									B[U] = {
										type: N.SerializedObjectWithBuffers,
										value: i.$Te.fromString(x),
										buffers: H,
									};
								} else
									B[U] = { type: N.String, value: i.$Te.fromString(s(F, O)) };
							}
							return { type: L.Mixed, args: B };
						}
						return { type: L.Simple, args: s(R, O) };
					}
					static serializeRequest(R, O, B, U, z) {
						switch (U.type) {
							case L.Simple:
								return this.b(R, O, B, U.args, z);
							case L.Mixed:
								return this.c(R, O, B, U.args, z);
						}
					}
					static b(R, O, B, U, z) {
						const F = i.$Te.fromString(B),
							x = i.$Te.fromString(U);
						let H = 0;
						(H += k.sizeUInt8()),
							(H += k.sizeShortString(F)),
							(H += k.sizeLongString(x));
						const q = k.alloc(
							z ? M.RequestJSONArgsWithCancellation : M.RequestJSONArgs,
							R,
							H,
						);
						return (
							q.writeUInt8(O),
							q.writeShortString(F),
							q.writeLongString(x),
							q.buffer
						);
					}
					static deserializeRequestJSONArgs(R) {
						const O = R.readUInt8(),
							B = R.readShortString(),
							U = R.readLongString();
						return { rpcId: O, method: B, args: JSON.parse(U) };
					}
					static c(R, O, B, U, z) {
						const F = i.$Te.fromString(B);
						let x = 0;
						(x += k.sizeUInt8()),
							(x += k.sizeShortString(F)),
							(x += k.sizeMixedArray(U));
						const H = k.alloc(
							z ? M.RequestMixedArgsWithCancellation : M.RequestMixedArgs,
							R,
							x,
						);
						return (
							H.writeUInt8(O),
							H.writeShortString(F),
							H.writeMixedArray(U),
							H.buffer
						);
					}
					static deserializeRequestMixedArgs(R) {
						const O = R.readUInt8(),
							B = R.readShortString(),
							U = R.readMixedArray(),
							z = new Array(U.length);
						for (let F = 0, x = U.length; F < x; F++) {
							const H = U[F];
							typeof H == "string" ? (z[F] = JSON.parse(H)) : (z[F] = H);
						}
						return { rpcId: O, method: B, args: z };
					}
					static serializeAcknowledged(R) {
						return k.alloc(M.Acknowledged, R, 0).buffer;
					}
					static serializeCancel(R) {
						return k.alloc(M.Cancel, R, 0).buffer;
					}
					static serializeReplyOK(R, O, B) {
						if (typeof O > "u") return this.d(R);
						if (O instanceof i.$Te) return this.e(R, O);
						if (O instanceof h.$uO) {
							const { jsonString: U, referencedBuffers: z } = f(O.value, B, !0);
							return this.g(R, U, z);
						} else return this.f(R, n(O, B));
					}
					static d(R) {
						return k.alloc(M.ReplyOKEmpty, R, 0).buffer;
					}
					static e(R, O) {
						let B = 0;
						B += k.sizeVSBuffer(O);
						const U = k.alloc(M.ReplyOKVSBuffer, R, B);
						return U.writeVSBuffer(O), U.buffer;
					}
					static deserializeReplyOKVSBuffer(R) {
						return R.readVSBuffer();
					}
					static f(R, O) {
						const B = i.$Te.fromString(O);
						let U = 0;
						U += k.sizeLongString(B);
						const z = k.alloc(M.ReplyOKJSON, R, U);
						return z.writeLongString(B), z.buffer;
					}
					static g(R, O, B) {
						const U = i.$Te.fromString(O);
						let z = 0;
						(z += k.sizeUInt32), (z += k.sizeLongString(U));
						for (const x of B) z += k.sizeVSBuffer(x);
						const F = k.alloc(M.ReplyOKJSONWithBuffers, R, z);
						F.writeUInt32(B.length), F.writeLongString(U);
						for (const x of B) F.writeBuffer(x);
						return F.buffer;
					}
					static deserializeReplyOKJSON(R) {
						const O = R.readLongString();
						return JSON.parse(O);
					}
					static deserializeReplyOKJSONWithBuffers(R, O) {
						const B = R.readUInt32(),
							U = R.readLongString(),
							z = [];
						for (let F = 0; F < B; ++F) z.push(R.readVSBuffer());
						return new h.$uO(b(U, z, O));
					}
					static serializeReplyErr(R, O) {
						const B = O ? n(C.$6(O), null) : void 0;
						if (typeof B != "string") return this.h(R);
						const U = i.$Te.fromString(B);
						let z = 0;
						z += k.sizeLongString(U);
						const F = k.alloc(M.ReplyErrError, R, z);
						return F.writeLongString(U), F.buffer;
					}
					static deserializeReplyErrError(R) {
						const O = R.readLongString();
						return JSON.parse(O);
					}
					static h(R) {
						return k.alloc(M.ReplyErrEmpty, R, 0).buffer;
					}
				}
				var M;
				(function (A) {
					(A[(A.RequestJSONArgs = 1)] = "RequestJSONArgs"),
						(A[(A.RequestJSONArgsWithCancellation = 2)] =
							"RequestJSONArgsWithCancellation"),
						(A[(A.RequestMixedArgs = 3)] = "RequestMixedArgs"),
						(A[(A.RequestMixedArgsWithCancellation = 4)] =
							"RequestMixedArgsWithCancellation"),
						(A[(A.Acknowledged = 5)] = "Acknowledged"),
						(A[(A.Cancel = 6)] = "Cancel"),
						(A[(A.ReplyOKEmpty = 7)] = "ReplyOKEmpty"),
						(A[(A.ReplyOKVSBuffer = 8)] = "ReplyOKVSBuffer"),
						(A[(A.ReplyOKJSON = 9)] = "ReplyOKJSON"),
						(A[(A.ReplyOKJSONWithBuffers = 10)] = "ReplyOKJSONWithBuffers"),
						(A[(A.ReplyErrError = 11)] = "ReplyErrError"),
						(A[(A.ReplyErrEmpty = 12)] = "ReplyErrEmpty");
				})(M || (M = {}));
				var N;
				(function (A) {
					(A[(A.String = 1)] = "String"),
						(A[(A.VSBuffer = 2)] = "VSBuffer"),
						(A[(A.SerializedObjectWithBuffers = 3)] =
							"SerializedObjectWithBuffers"),
						(A[(A.Undefined = 4)] = "Undefined");
				})(N || (N = {}));
			},
		),
		define(
			de[1822],
			he([
				1, 0, 15, 76, 29, 6, 3, 162, 4, 99, 11, 5, 34, 211, 32, 18, 78, 101,
				517, 53, 1821, 31, 40,
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
			) {
				"use strict";
				var $;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$R4c = void 0),
					(e.$S4c = T),
					(w = mt(w)),
					(m = mt(m));
				const v = !1,
					S = !0;
				let I = ($ = class extends C.$1c {
					get pid() {
						return this.q.pid;
					}
					get kind() {
						return this.q.runningLocation.kind;
					}
					get startup() {
						return this.q.startup;
					}
					get friendyName() {
						return T(this.kind, this.pid);
					}
					constructor(F, x, H, q, V, G, K) {
						super(),
							(this.t = H),
							(this.u = q),
							(this.w = V),
							(this.y = G),
							(this.z = K),
							(this.c = this.D(new E.$re())),
							(this.onDidChangeResponsiveState = this.c.event),
							(this.s = !1),
							(this.f = new Map()),
							(this.g = new Set()),
							(this.h = null),
							(this.j = []),
							(this.q = F),
							(this.onDidExit = this.q.onExit);
						const J = {
							time: Date.now(),
							action: "starting",
							kind: (0, f.$c2)(this.kind),
						};
						this.y.publicLog2("extensionHostStartup", J),
							(this.r = this.q.start().then(
								(W) => {
									this.s = !0;
									const X = {
										time: Date.now(),
										action: "success",
										kind: (0, f.$c2)(this.kind),
									};
									return (
										this.y.publicLog2("extensionHostStartup", X),
										this.J(this.kind, W)
									);
								},
								(W) => {
									this.z.error(
										`Error received from starting extension host (kind: ${(0, f.$c2)(this.kind)})`,
									),
										this.z.error(W);
									const X = {
										time: Date.now(),
										action: "error",
										kind: (0, f.$c2)(this.kind),
									};
									return (
										W && W.name && (X.errorName = W.name),
										W && W.message && (X.errorMessage = W.message),
										W && W.stack && (X.errorStack = W.stack),
										this.y.publicLog2("extensionHostStartup", X),
										null
									);
								},
							)),
							this.r.then(() => {
								x.forEach((W) =>
									this.activateByEvent(W, b.ActivationKind.Normal),
								),
									this.D(B({ measure: () => this.C() }));
							});
					}
					async disconnect() {
						await this.q?.disconnect?.();
					}
					dispose() {
						this.q?.dispose(), this.h?.dispose();
						for (let F = 0, x = this.j.length; F < x; F++) {
							const H = this.j[F];
							try {
								H.dispose();
							} catch (q) {
								w.$4(q);
							}
						}
						(this.r = null), super.dispose();
					}
					async C() {
						const F = await this.r;
						if (!F) return null;
						const x = await this.F(F),
							H = await this.I(F),
							q = await this.H(F);
						return {
							remoteAuthority: this.q.remoteAuthority,
							latency: x,
							down: H,
							up: q,
						};
					}
					async ready() {
						await this.r;
					}
					async F(F) {
						let H = 0;
						for (let q = 0; q < 10; q++) {
							const V = d.$le.create();
							await F.test_latency(q), V.stop(), (H += V.elapsed());
						}
						return H / 10;
					}
					static G(F, x) {
						return (F * 1e3 * 8) / x;
					}
					async H(F) {
						const H = i.$Te.alloc(10485760),
							q = Math.ceil(Math.random() * 256);
						for (let G = 0; G < H.byteLength; G++) H.writeUInt8(G, q);
						const V = d.$le.create();
						return await F.test_up(H), V.stop(), $.G(10485760, V.elapsed());
					}
					async I(F) {
						const H = d.$le.create();
						return (
							await F.test_down(10485760), H.stop(), $.G(10485760, H.elapsed())
						);
					}
					J(F, x) {
						let H = null;
						v || this.w.logExtensionHostCommunication
							? (H = new A(F))
							: R.isEnabled()
								? (H = new R(this.y))
								: (H = new D(F)),
							(this.h = new s.$Q4c(x, H)),
							this.D(this.h.onDidChangeResponsiveState((W) => this.c.fire(W)));
						let q = null,
							V = [];
						const G = {
								remoteAuthority: this.q.remoteAuthority,
								extensionHostKind: this.kind,
								getProxy: (W) => this.h.getProxy(W),
								set: (W, X) => this.h.set(W, X),
								dispose: () => this.h.dispose(),
								assertRegistered: (W) => this.h.assertRegistered(W),
								drain: () => this.h.drain(),
								internalExtensionService: this.t,
								_setExtensionHostProxy: (W) => {
									q = W;
								},
								_setAllMainProxyIdentifiers: (W) => {
									V = W;
								},
							},
							K = o.ExtHostCustomersRegistry.getNamedCustomers();
						for (let W = 0, X = K.length; W < X; W++) {
							const [Y, ie] = K[W];
							try {
								const ne = this.u.createInstance(ie, G);
								this.j.push(ne), this.h.set(Y, ne);
							} catch (ne) {
								this.z.error(`Cannot instantiate named customer: '${Y.sid}'`),
									this.z.error(ne),
									w.$4(ne);
							}
						}
						const J = o.ExtHostCustomersRegistry.getCustomers();
						for (const W of J)
							try {
								const X = this.u.createInstance(W, G);
								this.j.push(X);
							} catch (X) {
								this.z.error(X), w.$4(X);
							}
						if (!q) throw new Error("Missing IExtensionHostProxy!");
						return this.h.assertRegistered(V), q;
					}
					async activate(F, x) {
						const H = await this.r;
						return H ? H.activate(F, x) : !1;
					}
					activateByEvent(F, x) {
						return x === b.ActivationKind.Immediate && !this.s
							? Promise.resolve()
							: (this.f.has(F) || this.f.set(F, this.L(F, x)), this.f.get(F));
					}
					activationEventIsDone(F) {
						return this.g.has(F);
					}
					async L(F, x) {
						if (!this.r) return;
						const H = await this.r;
						if (H) {
							if (!this.q.extensions.containsActivationEvent(F)) {
								this.g.add(F);
								return;
							}
							await H.activateByEvent(F, x), this.g.add(F);
						}
					}
					async getInspectPort(F) {
						if (this.q) {
							F && (await this.q.enableInspectPort());
							const x = this.q.getInspectPort();
							if (x) return x;
						}
					}
					async resolveAuthority(F, x) {
						const H = d.$le.create(!1),
							q = () =>
								`[${(0, f.$c2)(this.q.runningLocation.kind)}${this.q.runningLocation.affinity}][resolveAuthority(${(0, c.$7l)(F)},${x})][${H.elapsed()}ms] `,
							V = (W) => this.z.info(`${q()}${W}`),
							G = (W, X = void 0) => this.z.error(`${q()}${W}`, X);
						V("obtaining proxy...");
						const K = await this.r;
						if (!K)
							return (
								G("no proxy"),
								{
									type: "error",
									error: {
										message: "Cannot resolve authority",
										code: c.RemoteAuthorityResolverErrorCode.Unknown,
										detail: void 0,
									},
								}
							);
						V("invoking...");
						const J = new t.$Xh();
						try {
							J.cancelAndSet(() => V("waiting..."), 1e3);
							const W = await K.resolveAuthority(F, x);
							return (
								J.dispose(),
								W.type === "ok"
									? V(`returned ${W.value.authority.connectTo}`)
									: G("returned an error", W.error),
								W
							);
						} catch (W) {
							return (
								J.dispose(),
								G("returned an error", W),
								{
									type: "error",
									error: {
										message: W.message,
										code: c.RemoteAuthorityResolverErrorCode.Unknown,
										detail: W,
									},
								}
							);
						}
					}
					async getCanonicalURI(F, x) {
						const H = await this.r;
						if (!H) throw new Error("Cannot resolve canonical URI");
						return H.getCanonicalURI(F, x);
					}
					async start(F, x, H) {
						const q = await this.r;
						if (!q) return;
						const V = this.q.extensions.set(F, x, H);
						return q.startExtensionHost(V);
					}
					async extensionTestsExecute() {
						const F = await this.r;
						if (!F) throw new Error("Could not obtain Extension Host Proxy");
						return F.extensionTestsExecute();
					}
					representsRunningLocation(F) {
						return this.q.runningLocation.equals(F);
					}
					async deltaExtensions(F) {
						const x = await this.r;
						if (!x) return;
						const H = this.q.extensions.delta(F);
						if (H) return x.deltaExtensions(H);
					}
					containsExtension(F) {
						return this.q.extensions?.containsExtension(F) ?? !1;
					}
					async setRemoteEnvironment(F) {
						const x = await this.r;
						if (x) return x.setRemoteEnvironment(F);
					}
				});
				(e.$R4c = I),
					(e.$R4c =
						I =
						$ =
							Ne([j(3, a.$Li), j(4, p.$r8), j(5, n.$km), j(6, h.$ik)], I));
				function T(z, F) {
					return F ? `${(0, f.$c2)(z)} pid: ${F}` : `${(0, f.$c2)(z)}`;
				}
				const P = [
					["#2977B1", "#FC802D", "#34A13A", "#D3282F", "#9366BA"],
					["#8B564C", "#E177C0", "#7F7F7F", "#BBBE3D", "#2EBECD"],
				];
				function k(z) {
					if (Array.isArray(z)) return z;
					if (z && typeof z == "object" && typeof z.toString == "function") {
						const F = z.toString();
						if (F !== "[object Object]") return F;
					}
					return z;
				}
				function L(z) {
					return Array.isArray(z) ? z.map(k) : k(z);
				}
				class D {
					constructor(F) {
						this.c = F;
					}
					logIncoming(F, x, H, q, V) {
						N.instance.isEnabled() &&
							N.instance.recordIncoming(this.c, F, x, H, q, V);
					}
					logOutgoing(F, x, H, q, V) {
						N.instance.isEnabled() &&
							N.instance.recordOutgoing(this.c, F, x, H, q, V);
					}
				}
				class M {
					constructor() {
						(this.c = 0),
							(this.d = 0),
							(this.e = Number.MAX_VALUE),
							(this.f = 0);
					}
					record(F) {
						this.c++,
							(this.d += F),
							(this.e = Math.min(this.e, F)),
							(this.f = Math.max(this.f, F));
					}
					get count() {
						return this.c;
					}
					get min() {
						return this.c > 0 ? this.e : 0;
					}
					get max() {
						return this.f;
					}
					get avg() {
						return this.c > 0 ? this.d / this.c : 0;
					}
				}
				class N {
					static get instance() {
						return this.c || (this.c = new N()), this.c;
					}
					constructor() {
						(this.d = !1), (this.e = Date.now()), (this.f = new Map());
					}
					g(F) {
						return (
							this.f.has(F) ||
								this.f.set(F, {
									incoming: {
										total: 0,
										count: 0,
										byCommand: new Map(),
										pendingRequests: new Map(),
										latencies: new M(),
									},
									outgoing: {
										total: 0,
										count: 0,
										byCommand: new Map(),
										pendingRequests: new Map(),
										latencies: new M(),
									},
								}),
							this.f.get(F)
						);
					}
					isEnabled() {
						return this.d;
					}
					reset() {
						(this.d = !1), this.f.clear();
					}
					toggle() {
						this.d = !this.d;
					}
					recordIncoming(F, x, H, q, V, G) {
						const K = this.g(F);
						(K.incoming.total += x), K.incoming.count++;
						const J = this.h(V);
						if (J) {
							const W = K.incoming.byCommand.get(J) || {
								count: 0,
								bytes: 0,
								latencies: new M(),
							};
							W.count++, (W.bytes += x), K.incoming.byCommand.set(J, W);
						}
						if (q === s.RequestInitiator.LocalSide) {
							const W = K.outgoing.pendingRequests.get(H);
							if (W) {
								const X = Date.now() - W.time;
								if ((K.outgoing.latencies.record(X), W.command)) {
									const Y = K.outgoing.byCommand.get(W.command);
									Y && Y.latencies.record(X);
								}
								K.outgoing.pendingRequests.delete(H);
							}
						} else
							K.incoming.pendingRequests.set(H, {
								time: Date.now(),
								command: J || V,
							});
					}
					recordOutgoing(F, x, H, q, V, G) {
						const K = this.g(F);
						(K.outgoing.total += x), K.outgoing.count++;
						const J = this.h(V);
						if (J) {
							const W = K.outgoing.byCommand.get(J) || {
								count: 0,
								bytes: 0,
								latencies: new M(),
							};
							W.count++, (W.bytes += x), K.outgoing.byCommand.set(J, W);
						}
						if (q === s.RequestInitiator.LocalSide)
							K.outgoing.pendingRequests.set(H, {
								time: Date.now(),
								command: J || V,
							});
						else {
							const W = K.incoming.pendingRequests.get(H);
							if (W) {
								const X = Date.now() - W.time;
								if ((K.incoming.latencies.record(X), W.command)) {
									const Y = K.incoming.byCommand.get(W.command);
									Y && Y.latencies.record(X);
								}
								K.incoming.pendingRequests.delete(H);
							}
						}
					}
					h(F) {
						const x = F.match(/^(?:request|receiveRequest): ([^(]+)/);
						return x ? x[1].trim() : null;
					}
					j(F) {
						const x = F.split(".", 2);
						return x.length > 1 ? x[0] : "Other";
					}
					generateReport() {
						let F = `# Extension Host RPC Statistics

`;
						F += `*Duration: ${((Date.now() - this.e) / 1e3).toFixed(1)}s*

`;
						const x = this.k,
							H = this.l;
						for (const [q, V] of this.f) {
							(F += `## ${(0, f.$c2)(q)}

`),
								(F += `### Traffic Summary
`),
								(F += `- **Incoming:** ${H(V.incoming.total)} (${x(V.incoming.count)} messages)
`),
								(F += `- **Outgoing:** ${H(V.outgoing.total)} (${x(V.outgoing.count)} messages)
`),
								(F += `- **Messages/sec:** ${(((V.incoming.count + V.outgoing.count) * 1e3) / (Date.now() - this.e)).toFixed(1)}

`),
								(F += `### Overall Latency (ms)
`),
								(F += `|Direction|Min|Avg|Max|
|-|-|-|-|
`),
								(F += `|**Incoming**|${V.incoming.latencies.min.toFixed(1)}ms|${V.incoming.latencies.avg.toFixed(1)}ms|${V.incoming.latencies.max.toFixed(1)}ms|
`),
								(F += `|**Outgoing**|${V.outgoing.latencies.min.toFixed(1)}ms|${V.outgoing.latencies.avg.toFixed(1)}ms|${V.outgoing.latencies.max.toFixed(1)}ms|

`);
							const G = new Map([
									...V.incoming.byCommand,
									...V.outgoing.byCommand,
								]),
								K = new Map();
							for (const [W, X] of G) {
								const Y = this.j(W);
								K.has(Y) ||
									K.set(Y, {
										count: 0,
										bytes: 0,
										latencies: new M(),
										commands: [],
									});
								const ie = K.get(Y);
								(ie.count += X.count),
									(ie.bytes += X.bytes),
									ie.latencies.record(X.latencies.avg),
									ie.commands.push([W, X]);
							}
							const J = [...K.entries()].sort(
								(W, X) => X[1].latencies.avg - W[1].latencies.avg,
							);
							(F += `### Command Groups
`),
								(F += `|Namespace|Avg Latency|Count|Total Size|
`),
								(F += `|-|-:|-:|-:|
`);
							for (const [W, X] of J)
								F += `|**\`${W}\`**|${X.latencies.avg.toFixed(1)}ms|${x(X.count)}|${H(X.bytes)}|
`;
							(F += `

`),
								(F += `### Top Commands By Latency
`),
								(F += `

`),
								(F += `|Command|Count|Avg|Max|Min|Traffic|
`),
								(F += `|-|-:|-:|-:|-:|-:|
`);
							for (const [W, X] of J) {
								(F += `||
`),
									(F += `|**\`${W}\`**|
`),
									(F += `||
`);
								const Y = X.commands
									.sort((ie, ne) => ne[1].latencies.avg - ie[1].latencies.avg)
									.slice(0, 10);
								for (const [ie, ne] of Y) {
									const ee = ie.split(".").slice(1).join(".");
									F += `|&nbsp; &nbsp; &nbsp; &nbsp; \`${ee}\`|${x(ne.count)}|${ne.latencies.avg.toFixed(1)}ms|${ne.latencies.max.toFixed(1)}ms|${ne.latencies.min.toFixed(1)}ms|${H(ne.bytes)}|
`;
								}
							}
							F += `

`;
						}
						return F;
					}
					k(F) {
						return F.toLocaleString();
					}
					l(F) {
						const x = ["B", "KB", "MB", "GB"];
						let H = F,
							q = 0;
						for (; H >= 1024 && q < x.length - 1; ) (H /= 1024), q++;
						return `${H.toFixed(1)} ${x[q]}`;
					}
				}
				class A {
					constructor(F) {
						(this.e = F), (this.c = 0), (this.d = 0);
					}
					f(F, x, H, q, V, G, K) {
						K = L(K);
						const J = P[V],
							W = S ? J[q % J.length] : "#000000";
						let X = [
							`%c[${(0, f.$c2)(this.e)}][${F}]%c[${String(x).padStart(7)}]%c[len: ${String(H).padStart(5)}]%c${String(q).padStart(5)} - ${G}`,
							"color: darkgreen",
							"color: grey",
							"color: grey",
							`color: ${W}`,
						];
						/\($/.test(G) ? ((X = X.concat(K)), X.push(")")) : X.push(K),
							("stdlog" in console ? console.stdlog : console.log).apply(
								console,
								X,
							);
					}
					logIncoming(F, x, H, q, V) {
						(this.c += F), this.f("Ext \u2192 Win", this.c, F, x, H, q, V);
					}
					logOutgoing(F, x, H, q, V) {
						(this.d += F), this.f("Win \u2192 Ext", this.d, F, x, H, q, V);
					}
				}
				let R = class {
					static isEnabled() {
						return Math.trunc(Math.random() * 1e3) < 0.5;
					}
					constructor(F) {
						(this.d = F), (this.c = new Map());
					}
					logIncoming(F, x, H, q) {
						if (
							H === s.RequestInitiator.LocalSide &&
							/^receiveReply(Err)?:/.test(q)
						) {
							const V = this.c.get(x) ?? "unknown_reply";
							this.c.delete(x),
								this.d.publicLog2("extensionhost.incoming", {
									type: `${q} ${V}`,
									length: F,
								});
						}
						H === s.RequestInitiator.OtherSide &&
							/^receiveRequest /.test(q) &&
							this.d.publicLog2("extensionhost.incoming", {
								type: `${q}`,
								length: F,
							});
					}
					logOutgoing(F, x, H, q) {
						H === s.RequestInitiator.LocalSide &&
							q.startsWith("request: ") &&
							(this.c.set(x, q),
							this.d.publicLog2("extensionhost.outgoing", {
								type: q,
								length: F,
							}));
					}
				};
				R = Ne([j(0, n.$km)], R);
				const O = [];
				function B(z) {
					return (
						O.push(z),
						{
							dispose: () => {
								for (let F = 0; F < O.length; F++)
									if (O[F] === z) {
										O.splice(F, 1);
										return;
									}
							},
						}
					);
				}
				function U() {
					return O.slice(0);
				}
				(0, u.$4X)(
					class sa extends u.$3X {
						constructor() {
							super({
								id: "editor.action.measureExtHostLatency",
								title: m.localize2(12348, "Measure Extension Host Latency"),
								category: r.$ck.Developer,
								f1: !0,
							});
						}
						async run(F) {
							const x = F.get(g.$IY),
								H = await Promise.all(U().map((q) => q.measure()));
							x.openEditor({
								resource: void 0,
								contents: H.map(sa.c).join(`

`),
								options: { pinned: !0 },
							});
						}
						static c(F) {
							return F
								? `${
										F.remoteAuthority
											? `Authority: ${F.remoteAuthority}
`
											: ""
									}Roundtrip latency: ${F.latency.toFixed(3)}ms
Up: ${sa.d(F.up)}
Down: ${sa.d(F.down)}
`
								: "";
						}
						static d(F) {
							return F <= 1024
								? `${F} bps`
								: F < 1024 * 1024
									? `${(F / 1024).toFixed(1)} kbps`
									: `${(F / 1024 / 1024).toFixed(1)} Mbps`;
						}
					},
				),
					(0, u.$4X)(
						class extends u.$3X {
							constructor() {
								super({
									id: "exthost.action.toggleExtHostProfiler",
									title: m.localize2(12349, "Start Extension Host Profiler"),
									category: r.$ck.Developer,
									f1: !0,
								});
							}
							async run(F) {
								const x = F.get(g.$IY),
									H = F.get(l.$ek),
									q = F.get(y.$4N),
									V = async () => {
										const J = N.instance.generateReport();
										N.instance.reset();
										const W = await x.openEditor({
											resource: void 0,
											contents: J,
										});
										W?.input?.resource &&
											(await H.executeCommand(
												"markdown.showPreview",
												W.input.resource,
											));
									};
								if (N.instance.isEnabled()) {
									await V();
									return;
								}
								N.instance.toggle();
								const G = {
										id: "stopExtHostStats",
										label: "Stop",
										tooltip: "Stop profiler and show results",
										enabled: !0,
										class: "codicon codicon-graph-line",
										run: async () => {
											(G.enabled = !1),
												N.instance.isEnabled() && (await V(), K.close());
										},
									},
									K = await q.notify({
										severity: y.Severity.Info,
										message: "Extension Host Profiler is running",
										progress: { infinite: !0 },
										actions: { primary: [G] },
									});
							}
						},
					);
			},
		),
		define(
			de[3380],
			he([1, 0, 15, 6, 3, 5, 34, 211, 1822, 53]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$X4c = void 0);
				let u = class extends w.$1c {
					get pid() {
						return this.f ? this.f.pid : null;
					}
					get kind() {
						return this.b.runningLocation.kind;
					}
					get startup() {
						return this.b.startup;
					}
					get friendyName() {
						return (0, m.$S4c)(this.kind, this.pid);
					}
					constructor(h, c, n, g) {
						super(),
							(this.h = c),
							(this.j = n),
							(this.m = g),
							(this.a = this.D(new i.$re())),
							(this.onDidChangeResponsiveState = this.a.event),
							(this.b = h),
							(this.onDidExit = h.onExit),
							(this.c = new t.$Lh()),
							(this.f = null),
							(this.g = null);
					}
					n(h) {
						return (
							this.m.info(
								`Creating lazy extension host (${this.friendyName}). Reason: ${h}`,
							),
							(this.f = this.D(
								this.j.createInstance(m.$R4c, this.b, [], this.h),
							)),
							this.D(this.f.onDidChangeResponsiveState((c) => this.a.fire(c))),
							this.f
						);
					}
					async q(h) {
						if (this.f) return this.f;
						const c = this.n(h);
						return (
							await c.start(
								this.g.versionId,
								this.g.allExtensions,
								this.g.myExtensions,
							),
							c
						);
					}
					async ready() {
						await this.c.wait(), this.f && (await this.f.ready());
					}
					async disconnect() {
						await this.f?.disconnect();
					}
					representsRunningLocation(h) {
						return this.b.runningLocation.equals(h);
					}
					async deltaExtensions(h) {
						if ((await this.c.wait(), this.f)) return this.f.deltaExtensions(h);
						if ((this.g.delta(h), h.myToAdd.length > 0)) {
							await this.n(
								`contains ${h.myToAdd.length} new extension(s) (installed or enabled): ${h.myToAdd.map((n) => n.value)}`,
							).start(
								this.g.versionId,
								this.g.allExtensions,
								this.g.myExtensions,
							);
							return;
						}
					}
					containsExtension(h) {
						return this.b.extensions?.containsExtension(h) ?? !1;
					}
					async activate(h, c) {
						return await this.c.wait(), this.f ? this.f.activate(h, c) : !1;
					}
					async activateByEvent(h, c) {
						if (c === r.ActivationKind.Immediate)
							return this.f ? this.f.activateByEvent(h, c) : void 0;
						if ((await this.c.wait(), this.f))
							return this.f.activateByEvent(h, c);
					}
					activationEventIsDone(h) {
						return this.c.isOpen()
							? this.f
								? this.f.activationEventIsDone(h)
								: !0
							: !1;
					}
					async getInspectPort(h) {
						return await this.c.wait(), this.f?.getInspectPort(h);
					}
					async resolveAuthority(h, c) {
						return (
							await this.c.wait(),
							this.f
								? this.f.resolveAuthority(h, c)
								: {
										type: "error",
										error: {
											message: "Cannot resolve authority",
											code: d.RemoteAuthorityResolverErrorCode.Unknown,
											detail: void 0,
										},
									}
						);
					}
					async getCanonicalURI(h, c) {
						if ((await this.c.wait(), this.f))
							return this.f.getCanonicalURI(h, c);
						throw new Error("Cannot resolve canonical URI");
					}
					async start(h, c, n) {
						if (n.length > 0) {
							const p = this.n(
								`contains ${n.length} extension(s): ${n.map((o) => o.value)}.`,
							).start(h, c, n);
							return this.c.open(), p;
						}
						(this.g = new r.$s2(h, c, n)), this.c.open();
					}
					async extensionTestsExecute() {
						return (
							await this.c.wait(),
							(await this.q("execute tests.")).extensionTestsExecute()
						);
					}
					async setRemoteEnvironment(h) {
						if ((await this.c.wait(), this.f))
							return this.f.setRemoteEnvironment(h);
					}
				};
				(e.$X4c = u), (e.$X4c = u = Ne([j(2, E.$Li), j(3, C.$ik)], u));
			},
		),
		define(
			de[1823],
			he([1, 0, 387, 53, 23, 9, 941, 288]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$fd = void 0);
				let m = class {
					constructor(u, a, h, c) {
						(this.a = u), (this.b = a), (this.c = h), (this.d = c);
					}
					async start() {
						const u = await this.d.startProfiling({
							host: this.a,
							port: this.b,
						});
						return {
							stop: (0, d.$hb)(async () => {
								const a = await this.d.stopProfiling(u);
								await this.c.whenInstalledExtensionsRegistered();
								const h = this.c.extensions;
								return this.e(a, h);
							}),
						};
					}
					e(u, a) {
						const h = t.$Si.forUris();
						for (const $ of a)
							$.extensionLocation.scheme === w.Schemas.file &&
								h.set(E.URI.file($.extensionLocation.fsPath), $);
						const c = u.nodes,
							n = new Map(),
							g = new Map();
						for (const $ of c) n.set($.id, $);
						function p($, v) {
							if (v) {
								if (v === "self" && $.callFrame.url) {
									let S;
									try {
										S = h.findSubstr(E.URI.parse($.callFrame.url));
									} catch {}
									S && (v = S.identifier.value);
								}
							} else
								switch ($.callFrame.functionName) {
									case "(root)":
										break;
									case "(program)":
										v = "program";
										break;
									case "(garbage collector)":
										v = "gc";
										break;
									default:
										v = "self";
										break;
								}
							if ((g.set($.id, v), $.children))
								for (const S of $.children) {
									const I = n.get(S);
									I && p(I, v);
								}
						}
						p(c[0], null);
						const o = u.samples || [],
							f = u.timeDeltas || [],
							b = [],
							s = [];
						let l = 0,
							y;
						for (let $ = 0; $ < o.length; $++) {
							const v = o[$],
								S = g.get(v);
							S !== y &&
								(y && (s.push(y), b.push(l)), (y = S ?? void 0), (l = 0)),
								(l += f[$]);
						}
						return (
							y && (s.push(y), b.push(l)),
							{
								startTime: u.startTime,
								endTime: u.endTime,
								deltas: b,
								ids: s,
								data: u,
								getAggregatedTimes: () => {
									const $ = new Map();
									for (let v = 0; v < s.length; v++) {
										const S = s[v];
										$.set(S, ($.get(S) || 0) + b[v]);
									}
									return $;
								},
							}
						);
					}
				};
				(e.$$fd = m), (e.$$fd = m = Ne([j(2, i.$q2), j(3, C.$b2)], m));
			},
		),
		