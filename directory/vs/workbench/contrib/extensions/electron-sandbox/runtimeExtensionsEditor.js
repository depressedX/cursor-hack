define(
			de[1295],
			he([
				1, 0, 4, 50, 32, 5, 141, 35, 53, 49, 40, 8, 21, 73, 1806, 78, 3065,
				1809, 76, 9, 22, 941, 121, 57, 23, 19, 244, 72,
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
			) {
				"use strict";
				var P, k;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$5fd =
						e.$4fd =
						e.$3fd =
						e.$2fd =
						e.ProfileSessionState =
						e.$1fd =
						e.$Zfd =
						e.$Yfd =
							void 0),
					(t = mt(t)),
					(e.$Yfd = (0, E.$Mi)("extensionHostProfileService")),
					(e.$Zfd = new a.$5j("profileSessionState", "none")),
					(e.$1fd = new a.$5j("extensionHostProfileRecorded", !1));
				var L;
				(function (R) {
					(R[(R.None = 0)] = "None"),
						(R[(R.Starting = 1)] = "Starting"),
						(R[(R.Running = 2)] = "Running"),
						(R[(R.Stopping = 3)] = "Stopping");
				})(L || (e.ProfileSessionState = L = {}));
				let D = class extends o.$VTc {
					constructor(O, B, U, z, F, x, H, q, V, G, K, J, W, X, Y, ie) {
						super(O, B, U, z, F, x, H, q, V, G, K, J, W, Y, ie),
							(this.vb = X),
							(this.sb = this.vb.lastProfile),
							(this.tb = e.$1fd.bindTo(z)),
							(this.ub = e.$Zfd.bindTo(z)),
							this.D(
								this.vb.onDidChangeLastProfile(() => {
									(this.sb = this.vb.lastProfile),
										this.tb.set(!!this.sb),
										this.ib();
								}),
							),
							this.D(
								this.vb.onDidChangeState(() => {
									const ne = this.vb.state;
									this.ub.set(L[ne].toLowerCase());
								}),
							);
					}
					mb() {
						return this.sb;
					}
					nb(O) {
						return this.vb.getUnresponsiveProfile(O);
					}
					ob(O) {
						return O.unresponsiveProfile
							? this.cb.createInstance(
									n.$Wfd,
									O.description,
									O.unresponsiveProfile,
								)
							: null;
					}
					pb(O) {
						return O.marketplaceInfo
							? this.cb.createInstance(p.$i6c, O.description)
							: null;
					}
					qb() {
						return this.cb.createInstance(A, A.ID, A.LABEL);
					}
					rb() {
						return this.vb.state === L.Running
							? this.cb.createInstance(N, N.ID, N.LABEL)
							: this.cb.createInstance(M, M.ID, M.LABEL);
					}
				};
				(e.$2fd = D),
					(e.$2fd = D =
						Ne(
							[
								j(1, w.$km),
								j(2, d.$iP),
								j(3, a.$6j),
								j(4, C.$MQb),
								j(5, m.$q2),
								j(6, u.$4N),
								j(7, r.$Xxb),
								j(8, E.$Li),
								j(9, h.$lq),
								j(10, c.$3N),
								j(11, g.$r8),
								j(12, y.$Vxb),
								j(13, e.$Yfd),
								j(14, I.$$Sb),
								j(15, T.$Uyb),
							],
							D,
						));
				let M = class extends i.$rj {
					static {
						P = this;
					}
					static {
						this.ID = "workbench.extensions.action.extensionHostProfile";
					}
					static {
						this.LABEL = t.localize(6626, null);
					}
					constructor(O = P.ID, B = P.LABEL, U) {
						super(O, B), (this.a = U);
					}
					run() {
						return this.a.startProfiling(), Promise.resolve();
					}
				};
				(e.$3fd = M), (e.$3fd = M = P = Ne([j(2, e.$Yfd)], M));
				let N = class extends i.$rj {
					static {
						this.ID = "workbench.extensions.action.stopExtensionHostProfile";
					}
					static {
						this.LABEL = t.localize(6627, null);
					}
					constructor(O = M.ID, B = M.LABEL, U) {
						super(O, B), (this.a = U);
					}
					run() {
						return this.a.stopProfiling(), Promise.resolve();
					}
				};
				(e.$4fd = N), (e.$4fd = N = Ne([j(2, e.$Yfd)], N));
				let A = class extends i.$rj {
					static {
						k = this;
					}
					static {
						this.LABEL = t.localize(6628, null);
					}
					static {
						this.ID = "workbench.extensions.action.saveExtensionHostProfile";
					}
					constructor(O = k.ID, B = k.LABEL, U, z, F, x) {
						super(O, B, void 0, !1),
							(this.a = U),
							(this.b = z),
							(this.c = F),
							(this.f = x),
							this.b.onDidChangeLastProfile(() => {
								this.enabled = this.b.lastProfile !== null;
							});
					}
					run() {
						return Promise.resolve(this.g());
					}
					async g() {
						const O = await this.f.showSaveDialog({
							title: t.localize(6629, null),
							availableFileSystems: [v.Schemas.file],
							defaultUri: (0, S.$nh)(
								await this.f.defaultFilePath(),
								`CPU-${new Date().toISOString().replace(/[\-:]/g, "")}.cpuprofile`,
							),
							filters: [
								{ name: "CPU Profiles", extensions: ["cpuprofile", "txt"] },
							],
						});
						if (!O) return;
						const B = this.b.lastProfile;
						let U = B ? B.data : {},
							z = O.fsPath;
						return (
							this.a.isBuilt &&
								((U = l.Utils.rewriteAbsolutePaths(U, "piiRemoved")),
								(z = z + ".txt")),
							this.c.writeFile(
								b.URI.file(z),
								f.$Te.fromString(JSON.stringify(B ? B.data : {}, null, "	")),
							)
						);
					}
				};
				(e.$5fd = A),
					(e.$5fd =
						A =
						k =
							Ne([j(2, g.$r8), j(3, e.$Yfd), j(4, s.$ll), j(5, $.$IO)], A));
			},
		),
		