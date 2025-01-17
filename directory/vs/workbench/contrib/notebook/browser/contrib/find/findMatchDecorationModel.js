import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/common/lifecycle.js';
import '../../../../../../editor/contrib/find/browser/findDecorations.js';
import '../../../../../../platform/theme/common/colorRegistry.js';
import '../../notebookBrowser.js';
define(
			de[1844],
			he([1, 0, 3, 1688, 51, 108]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$n2b = void 0);
				class C extends t.$1c {
					constructor(m, r) {
						super(),
							(this.g = m),
							(this.h = r),
							(this.a = []),
							(this.b = []),
							(this.c = []),
							(this.f = null);
					}
					get currentMatchDecorations() {
						return this.f;
					}
					j() {
						this.clearCurrentFindMatchDecoration(),
							this.setAllFindMatchesDecorations([]);
					}
					async highlightCurrentFindMatchDecorationInCell(m, r) {
						return (
							this.clearCurrentFindMatchDecoration(),
							this.g.changeModelDecorations((u) => {
								const a = i.$71b._CURRENT_FIND_MATCH_DECORATION,
									h = [{ range: r, options: a }],
									c = { ownerId: m.handle, decorations: h };
								this.f = {
									kind: "input",
									decorations: u.deltaDecorations(
										this.f?.kind === "input" ? this.f.decorations : [],
										[c],
									),
								};
							}),
							(this.b = this.g.deltaCellDecorations(this.b, [
								{
									handle: m.handle,
									options: {
										overviewRuler: {
											color: w.$wR,
											modelRanges: [r],
											includeOutput: !1,
											position: E.NotebookOverviewRulerLane.Center,
										},
									},
								},
							])),
							null
						);
					}
					async highlightCurrentFindMatchDecorationInWebview(m, r) {
						this.clearCurrentFindMatchDecoration();
						const u = await this.g.findHighlightCurrent(r, this.h);
						return (
							(this.f = { kind: "output", index: r }),
							(this.b = this.g.deltaCellDecorations(this.b, [
								{
									handle: m.handle,
									options: {
										overviewRuler: {
											color: w.$wR,
											modelRanges: [],
											includeOutput: !0,
											position: E.NotebookOverviewRulerLane.Center,
										},
									},
								},
							])),
							u
						);
					}
					clearCurrentFindMatchDecoration() {
						this.f?.kind === "input"
							? this.g.changeModelDecorations((m) => {
									m.deltaDecorations(
										this.f?.kind === "input" ? this.f.decorations : [],
										[],
									),
										(this.f = null);
								})
							: this.f?.kind === "output" &&
								this.g.findUnHighlightCurrent(this.f.index, this.h),
							(this.b = this.g.deltaCellDecorations(this.b, []));
					}
					setAllFindMatchesDecorations(m) {
						this.g.changeModelDecorations((r) => {
							const u = i.$71b._FIND_MATCH_DECORATION,
								a = m.map((h) => {
									const c = new Array(h.contentMatches.length);
									for (let n = 0; n < h.contentMatches.length; n++)
										c[n] = { range: h.contentMatches[n].range, options: u };
									return { ownerId: h.cell.handle, decorations: c };
								});
							this.a = r.deltaDecorations(this.a, a);
						}),
							(this.c = this.g.deltaCellDecorations(
								this.c,
								m.map((r) => ({
									ownerId: r.cell.handle,
									handle: r.cell.handle,
									options: {
										overviewRuler: {
											color: w.$vR,
											modelRanges: r.contentMatches.map((u) => u.range),
											includeOutput: r.webviewMatches.length > 0,
											position: E.NotebookOverviewRulerLane.Center,
										},
									},
								})),
							));
					}
					stopWebviewFind() {
						this.g.findStop(this.h);
					}
					dispose() {
						this.j(), super.dispose();
					}
				}
				e.$n2b = C;
			},
		),
		