define(de[3647], he([1, 0, 228, 25, 400]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$LZc = void 0);
			let E = class {
				constructor(d, m, r) {
					(this.a = d),
						(this.b = m),
						(this.c = r),
						(this.d = new AbortController()),
						(this.e = !1),
						(this.f = void 0);
				}
				update_IS_CALLED_ON_EVERY_KEYSTROKE_SO_BE_CAREFUL(d, m) {
					this.d.signal.aborted ||
						this.e ||
						((this.e = !0),
						(this.f = (async () => {
							let r = await this.b.getVisibleTabs();
							if (d.case === "cmd-k") {
								const c = this.c.asRelativePath(d.fileUri);
								r = r.filter((n) => {
									const g = n.lines[0].lineNumber,
										p = n.lines[n.lines.length - 1].lineNumber;
									return !(
										n.relativeWorkspacePath === c &&
										Math.min(
											Math.abs(g - d.replaceRange.endLineNumberExclusive),
											Math.abs(p - d.replaceRange.startLineNumber),
										) < 100
									);
								});
							}
							const u = await this.b.getRecentChunks();
							r = r.filter((c) => {
								const n = c.lines[0].lineNumber,
									g = c.lines[c.lines.length - 1].lineNumber,
									p = g - n + 1;
								return !u.some((f) => {
									if (f.relativeWorkspacePath !== c.relativeWorkspacePath)
										return !1;
									const b = f.range?.startLineNumber ?? 1,
										s = f.range?.endLineNumber ?? 1;
									return (
										Math.max(0, Math.min(g, s) - Math.max(n, b) + 1) / p > 0.4
									);
								});
							});
							const a = r.slice(0, 5);
							(
								await this.a.newItems([
									...a.map((c) => ({
										intent: m,
										item: { case: "sparseFileChunk", value: c },
									})),
								])
							).ok() ||
								this.a.error({ message: "Failed to add in recent locations." });
						})()));
				}
				async blockForFinalInput(d, m) {
					return m.type === t.ContextIntent_Type.AUTOMATIC
						? "fallBackToCachedReranked"
						: (await this.f, "useFreshItemsEvenIfNotRerankedYet");
				}
				freeze() {
					this.d.abort();
				}
				unfreeze() {
					this.d = new AbortController();
				}
				dispose() {
					this.d.abort();
				}
			};
			(e.$LZc = E), (e.$LZc = E = Ne([j(1, w.$26b), j(2, i.$Vi)], E));
		}),
		