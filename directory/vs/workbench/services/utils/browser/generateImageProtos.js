import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../proto/aiserver/v1/utils_pb.js';
import '../../../../base/common/network.js';
import '../../../../base/common/uri.js';
define(de[1045], he([1, 0, 83, 23, 9]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$E7b = d),
				(e.$F7b = r);
			const E = 5 * 1024 * 1024,
				C = 2048;
			async function d(u, a, h, c = {}) {
				const n = w.URI.file(u.path),
					g = c.maxDimension ?? C;
				let p;
				try {
					p = (await h.readFile(n)).value.buffer;
				} catch (f) {
					throw (
						(console.error(f),
						a.forEach((b) => b()),
						new Error("Image selected in conversation was not found on disk"))
					);
				}
				const o = document.createElement("canvas");
				try {
					const f = new Image(),
						b = async (y, $ = 1) =>
							new Promise((v, S) => {
								(f.src = i.$7g.uriToBrowserUri(n).toString(!0)),
									(f.onload = function () {
										let I = Math.floor(f.width * $),
											T = Math.floor(f.height * $);
										const P = Math.max(I / g, T / g);
										if (
											(P > 1 &&
												((I = Math.floor(I / P)), (T = Math.floor(T / P))),
											$ === 1 && P <= 1 && y.length <= E)
										) {
											v({ bytes: y, width: f.width, height: f.height });
											return;
										}
										(o.width = I),
											(o.height = T),
											o.getContext("2d")?.drawImage(f, 0, 0, I, T);
										const D = o.toDataURL("image/jpeg", 0.9).split(",")[1],
											M = atob(D);
										let N = new Uint8Array(M.length);
										for (let A = 0; A < M.length; A++) N[A] = M.charCodeAt(A);
										v({ bytes: N, width: I, height: T });
									}),
									(f.onerror = S);
							});
					let s = await b(p);
					if (s.bytes.length > E) {
						let y = 0.9;
						for (; s.bytes.length > E && y > 0.1; )
							(s = await b(p, y)), (y *= 0.8);
					}
					return (
						f.remove(),
						new t.$ct({
							data: s.bytes,
							dimension: { width: s.width, height: s.height },
						})
					);
				} finally {
					o.remove();
				}
			}
			const m = new WeakMap();
			async function r(u, a, h, c) {
				const n = m.get(u);
				if (n) {
					const f = n.removeCallbacks;
					return (
						f.add(a),
						(async function () {
							try {
								return await n.data;
							} finally {
								f.delete(a);
							}
						})()
					);
				}
				const g = new Set([a]),
					p = { data: d(u, g, h, { maxDimension: c }), removeCallbacks: g };
				return (
					m.set(u, p),
					(async function () {
						try {
							return await p.data;
						} finally {
							p.removeCallbacks.delete(a);
						}
					})()
				);
			}
		}),
		