import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../proto/aiserver/v1/tools_pb.js';
define(de[1284], he([1, 0, 124]), function (ce /*require*/,
 e /*exports*/,
 t /*tools_pb*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$ehc = E);
			const i = 5e6,
				w = 1e6;
			async function E(d, m, r) {
				try {
					const u = new Set();
					for (const n of d) {
						const g = n.codeBlock?.relativeWorkspacePath;
						g !== void 0 && u.add(g);
					}
					const a = await Promise.allSettled(
							[...u].map((n) => C(n, m, r)),
						).then((n) =>
							n.filter((g) => g.status === "fulfilled").map((g) => g.value),
						),
						h = a.filter((n) => "contents" in n),
						c = a.filter((n) => "missingReason" in n);
					return { files: h, missingFiles: c };
				} catch (u) {
					return (
						console.error("Error reading files", u),
						{ files: [], missingFiles: [] }
					);
				}
			}
			async function C(d, m, r) {
				const u = m.resolveRelativePath(d);
				if (!(await r.exists(u)))
					return {
						relativeWorkspacePath: d,
						missingReason: t.MissingFile_MissingReason.NOT_FOUND,
					};
				const h = await r.stat(u);
				if (h.size > i)
					return {
						relativeWorkspacePath: d,
						missingReason: t.MissingFile_MissingReason.TOO_LARGE,
					};
				const c = await r.readFile(u);
				return h.size > w
					? {
							relativeWorkspacePath: d,
							missingReason: t.MissingFile_MissingReason.TOO_LARGE,
							numLines: c.value.toString().split(`
`).length,
						}
					: { relativeWorkspacePath: d, contents: c.value.toString() };
			}
		}),
		