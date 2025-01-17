import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/bufbuild/protobuf.js';
import '../../../../../../proto/aiserver/v1/tools_pb.js';
import '../../../../../base/common/uri.js';
import '../../../../../base/common/async.js';
define(de[1790], he([1, 0, 86, 124, 9, 15]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$3cc = u);
			const C = 1024 * 1024,
				d = 4,
				m = 50,
				r = 100;
			async function u(h, c, n) {
				let g;
				try {
					g = await c.resolve(h, { resolveMetadata: !0 });
				} catch (y) {
					throw new Error(`Could not resolve URI: ${y}`);
				}
				const p = await n.filterCursorIgnoredFiles(g.children || [], (y) =>
					w.URI.joinPath(h, y.name),
				);
				if (!g.isDirectory || !p) throw new Error("URI is not a directory.");
				if (p.length === 0) return new i.$1x({ files: [] });
				const o = p.sort((y, $) => ($.mtime || 0) - (y.mtime || 0)).slice(0, r),
					f = o
						.filter((y) => !y.isDirectory && y.size !== void 0 && y.size <= C)
						.slice(0, m),
					b = new Set(f.map((y) => y.name)),
					s = new E.$Sh(d),
					l = await Promise.all(
						o.map(async (y) => {
							const $ = w.URI.joinPath(h, y.name);
							let v;
							return (
								b.has(y.name) &&
									(v = await s.queue(async () => a($, y.size, c))),
								{
									name: y.name,
									isDirectory: y.isDirectory,
									size: y.size !== void 0 ? BigInt(y.size) : void 0,
									lastModified: y.mtime
										? new t.Timestamp({
												seconds: BigInt(Math.floor(y.mtime / 1e3)),
											})
										: void 0,
									numChildren: y.children?.length,
									numLines: v,
								}
							);
						}),
					);
				return new i.$1x({ files: l, directoryRelativeWorkspacePath: h.path });
			}
			async function a(h, c, n) {
				if (!(c === void 0 || c > C))
					try {
						const p = (await n.readFile(h)).value.toString();
						return (p.match(/\n/g) || []).length + (p.length > 0 ? 1 : 0);
					} catch (g) {
						console.warn("Failed to count lines:", g);
						return;
					}
			}
		}),
		