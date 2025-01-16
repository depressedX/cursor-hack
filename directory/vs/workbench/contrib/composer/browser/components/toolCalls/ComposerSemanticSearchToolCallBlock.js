define(de[4211], he([1, 0, 2, 861]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.ComposerSemanticSearchToolCallBlock = w);
			function w(E) {
				return (0, t.createComponent)(i.ComposerSearchToolCallBlock, {
					get results() {
						return E.results.map((C) => ({ uri: C.uri, metadata: C }));
					},
					onResultClick: (C) => C.metadata && E.onResultClick(C.metadata),
					get searchContext() {
						return `"${E.query}"${E.includePattern || E.excludePattern ? ` (${E.includePattern ? `${E.includePattern}` : ""}${E.excludePattern ? (E.includePattern ? ", " : "") + `excluding ${E.excludePattern}` : ""})` : ""}`;
					},
					get maxHeight() {
						return E.maxHeight;
					},
					get isLoading() {
						return E.isLoading;
					},
					formatResult: (C) => ({
						score: C.score,
						selection: C.metadata?.range
							? {
									startLineNumber: C.metadata.range.startPosition?.line ?? 0,
									startColumn: 1,
									endLineNumber: C.metadata.range.endPosition?.line ?? 0,
									endColumn: 1,
								}
							: void 0,
					}),
				});
			}
		}),
		