define(
			de[3787],
			he([
				1, 0, 4, 143, 211, 62, 3786, 952, 34, 78, 40, 55, 32, 110, 9, 41, 133,
				773,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Rcd = void 0),
					(t = mt(t));
				let f = class extends C.$r3c {
					constructor(l, y, $, v, S, I, T) {
						super(l, y, $, v, S, I, T);
					}
				};
				(e.$Rcd = f),
					(e.$Rcd = f =
						Ne(
							[
								j(0, o.$8l),
								j(1, p.$P8),
								j(2, r.$r8),
								j(3, E.$Bk),
								j(4, w.$3l),
								j(5, d.$$l),
								j(6, m.$ik),
							],
							f,
						));
				let b = class {
					static {
						this.ID =
							"workbench.contrib.nativeRemoteConnectionFailureNotification";
					}
					constructor(l, y, $, v, S, I, T) {
						(this.a = l),
							(this.b = I),
							this.a.getRawEnvironment().then(void 0, (P) => {
								if (!w.$6l.isHandled(P)) {
									const k = [
											{
												label: t.localize(12643, null),
												run: () => S.openDevTools(),
											},
										],
										L = this.c();
									L &&
										k.push({
											label: t.localize(12644, null),
											run: () => T.open(L, { openExternal: !0 }),
										}),
										y.prompt(
											u.Severity.Error,
											t.localize(12645, null, P ? P.message : ""),
											k,
										);
								}
							});
					}
					c() {
						const l = this.a.getConnection();
						if (!l) return null;
						const y = this.b.getConnectionData(l.remoteAuthority);
						return !y || y.connectTo.type !== w.RemoteConnectionType.WebSocket
							? null
							: n.URI.from({
									scheme: "http",
									authority: `${y.connectTo.host}:${y.connectTo.port}`,
									path: "/version",
								});
					}
				};
				(b = Ne(
					[
						j(0, i.$$m),
						j(1, u.$4N),
						j(2, r.$r8),
						j(3, h.$km),
						j(4, c.$y7c),
						j(5, w.$3l),
						j(6, g.$7rb),
					],
					b,
				)),
					(0, a.$s6)(b.ID, b, a.WorkbenchPhase.BlockRestore);
			},
		),
		