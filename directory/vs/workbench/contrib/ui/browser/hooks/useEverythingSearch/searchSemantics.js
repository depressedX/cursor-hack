import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/common/path.js';
import './types.js';
import './constants.js';
define(de[3200], he([1, 0, 54, 444, 1271]), function (ce /*require*/,
 e /*exports*/,
 t /*path*/,
 i /*types*/,
 w /*constants*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Z_b = E);
			async function E(C, d, m, r) {
				if (C === "") return [];
				let u;
				try {
					u = await d.repositoryService.parallelSearch(
						C,
						r?.topK ?? 30,
						r?.finalK ?? 15,
						{ fast: !0, raceNRequests: r?.raceNRequests ?? 6, abortSignal: m },
					);
				} catch {
					return [];
				}
				if (r?.fileBased ?? !0) {
					const h = new Map();
					u.forEach((n) => {
						const g = n.codeBlock;
						if (!g) return;
						const p = { ...g, score: n.score },
							o = (0, t.$sc)(p.relativeWorkspacePath),
							f = p.relativeWorkspacePath;
						if (!h.has(f))
							h.set(f, {
								type: i.EverythingSearchOptionType.Semantic,
								name: o,
								score: n.score * w.$L_b,
								secondaryText: f,
								fileBased: !0,
								codeBlocks: [p],
								uri: d.workspaceContextService.resolveRelativePath(f),
							});
						else {
							const b = h.get(f);
							b.codeBlocks.push(p),
								(b.score = Math.max(b.score, n.score * w.$L_b));
						}
					});
					let c = Array.from(h.values());
					return c.sort((n, g) => g.score - n.score), c;
				}
				return u.map((h) => {
					const c = h.codeBlock;
					if (!c)
						throw new Error(
							"Expected code block in non-file-based semantic search",
						);
					const n = { ...c, score: h.score * w.$L_b },
						g = (0, t.$sc)(n.relativeWorkspacePath);
					return {
						type: i.EverythingSearchOptionType.Semantic,
						name: g,
						score: h.score * w.$L_b,
						secondaryText: n.relativeWorkspacePath,
						fileBased: !1,
						codeBlock: n,
						uri: d.workspaceContextService.resolveRelativePath(
							n.relativeWorkspacePath,
						),
					};
				});
			}
		}),
		