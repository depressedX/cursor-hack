define(
			de[1411],
			he([1, 0, 86, 2050, 213, 876, 202, 868]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.grpcStatusOk = void 0),
					(e.setTrailerStatus = m),
					(e.findTrailerError = r),
					(e.grpcStatusOk = "0");
				function m(u, a) {
					if (a) {
						if (
							(u.set(d.headerGrpcStatus, a.code.toString(10)),
							u.set(d.headerGrpcMessage, encodeURIComponent(a.rawMessage)),
							a.details.length > 0)
						) {
							const h = new i.Status({
								code: a.code,
								message: a.rawMessage,
								details: a.details.map((c) =>
									"getType" in c
										? t.Any.pack(c)
										: new t.Any({
												typeUrl: `type.googleapis.com/${c.type}`,
												value: c.value,
											}),
								),
							});
							u.set(d.headerStatusDetailsBin, (0, E.encodeBinaryHeader)(h));
						}
					} else u.set(d.headerGrpcStatus, e.grpcStatusOk.toString());
					return u;
				}
				function r(u) {
					const a = u.get(d.headerStatusDetailsBin);
					if (a != null) {
						const c = (0, E.decodeBinaryHeader)(a, i.Status);
						if (c.code == 0) return;
						const n = new w.ConnectError(c.message, c.code, u);
						return (
							(n.details = c.details.map((g) => ({
								type: g.typeUrl.substring(g.typeUrl.lastIndexOf("/") + 1),
								value: g.value,
							}))),
							n
						);
					}
					const h = u.get(d.headerGrpcStatus);
					if (h != null) {
						if (h === e.grpcStatusOk) return;
						const c = parseInt(h, 10);
						return c in C.Code
							? new w.ConnectError(
									decodeURIComponent(u.get(d.headerGrpcMessage) ?? ""),
									c,
									u,
								)
							: new w.ConnectError(
									`invalid grpc-status: ${h}`,
									C.Code.Internal,
									u,
								);
					}
				}
			},
		),
		