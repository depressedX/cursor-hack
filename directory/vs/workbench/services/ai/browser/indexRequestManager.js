import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../proto/aiserver/v1/symbolic_context_pb.js';
import '../../../../base/common/uuid.js';
import './utils.js';
define(de[3232], he([1, 0, 643, 47, 191]), function (ce /*require*/,
 e /*exports*/,
 t /*symbolic_context_pb*/,
 i /*uuid*/,
 w /*utils*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 });
			class E {
				constructor(d, m) {
					(this.e = d), (this.f = m), (this.c = {}), (this.d = {});
					const { sender: r, handler: u } = this._create("register", (g) =>
						this.f.registerFileToIndex(g, {
							headers: (0, w.$m6b)((0, i.$9g)()),
						}),
					);
					(this.registerFileToIndex = r), (this.registerHandler = u);
					const { sender: a, handler: h } = this._create("choose", (g) =>
						this.f.chooseCodeReferences(g, {
							headers: (0, w.$m6b)((0, i.$9g)()),
						}),
					);
					(this.chooseCodeReferences = a), (this.chooseHandler = h);
					const { sender: c, handler: n } = this._create("summarize", (g) =>
						this.f.summarizeWithReferences(g, {
							headers: (0, w.$m6b)((0, i.$9g)()),
						}),
					);
					(this.summarizeWithReferences = c), (this.summarizeHandler = n);
				}
				async listen() {
					const d = new Promise((a, h) => {
							(this.a = a), (this.b = h);
						}),
						m = new t.$ut({ indexId: this.e });
					let r = 0;
					return (
						(async () => {
							for await (const a of this.f.listenExperimentalIndex(m, {
								headers: (0, w.$m6b)((0, i.$9g)()),
							}))
								switch ((r++, a.item.case)) {
									case "ready":
										this.a?.();
										break;
									case "register":
										this.registerHandler.success(
											a.item.value.request,
											a.item.value.response,
											a.item.value.reqUuid,
										);
										break;
									case "choose":
										this.chooseHandler.success(
											a.item.value.request,
											a.item.value.response,
											a.item.value.reqUuid,
										);
										break;
									case "summarize":
										this.summarizeHandler.success(
											a.item.value.request,
											a.item.value.response,
											a.item.value.reqUuid,
										);
										break;
									case "error":
										switch (
											(console.error("Error during request"),
											console.error(a.item.value),
											a.item.value.request.case)
										) {
											case "register":
												this.registerHandler.error(
													a.item.value.request.value,
													new Error("Error during request"),
													a.item.value.reqUuid,
												);
												break;
											case "choose":
												this.chooseHandler.error(
													a.item.value.request.value,
													new Error("Error during request"),
													a.item.value.reqUuid,
												);
												break;
											case "summarize":
												this.summarizeHandler.error(
													a.item.value.request.value,
													new Error("Error during request"),
													a.item.value.reqUuid,
												);
												break;
											default:
												throw (
													(console.error("Unexpected request case"),
													console.error(a.item.value.request),
													new Error(
														"Unexpected request case: " +
															a.item.value.request.case,
													))
												);
										}
										break;
									default:
										throw (
											(console.error("Unexpected response item"),
											console.error(a.item),
											new Error(
												"Unexpected index response case: " + a.item.case,
											))
										);
								}
						})(),
						d
					);
				}
				_create(d, m) {
					const r = async (c) => (
							this.c[d] === void 0 && (this.c[d] = new Map()),
							await m(c).then(
								(n) =>
									new Promise((g, p) => {
										if (this.d[d]?.has(n.reqUuid) ?? !1) {
											const o = this.d[d].get(n.reqUuid);
											if (o === void 0)
												throw (
													(console.error("Early result is undefined"),
													new Error("Early result is undefined"))
												);
											o(g, p), this.d[d].delete(n.reqUuid);
											return;
										} else this.c[d].set(n.reqUuid, { resolve: g, reject: p });
									}),
							)
						),
						u = (c, n) => {
							if (c === void 0)
								throw (
									(console.error("Request is undefined during resolve"),
									new Error("Request is undefined during resolve"))
								);
							const g = this.c[d]?.get(n);
							return g === void 0
								? (console.warn(
										"No resolver for case " +
											d +
											" id " +
											n +
											" (early result)",
									),
									this.d[d] === void 0 && (this.d[d] = new Map()),
									{
										resolver: {
											resolve: (p) => {
												this.d[d].set(n, (o, f) => o(p));
											},
											reject: (p) => {
												this.d[d].set(n, (o, f) => f(p));
											},
										},
										dispose: () => {},
									})
								: { resolver: g, dispose: () => this.c[d].delete(n) };
						};
					return {
						handler: {
							success: (c, n, g) => {
								if (n === void 0)
									throw (
										(console.error("Response is undefined"),
										console.error(n),
										new Error("Response is undefined"))
									);
								const { resolver: p, dispose: o } = u(c, g);
								p.resolve(n), o();
							},
							error: (c, n, g) => {
								const { resolver: p, dispose: o } = u(c, g);
								p.reject(n), o();
							},
						},
						sender: r,
					};
				}
			}
			e.default = E;
		})
