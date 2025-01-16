define(de[3239], he([1, 0, 228]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$RZc = void 0);
			class i {
				constructor(E) {
					(this.a = E), (this.b = new AbortController());
				}
				async c(E) {
					const C = await this.a.newItems([
						{
							intent: E,
							item: {
								case: "fileChunk",
								value: {
									chunkContents: E.intent.value.text
										.split(`
`)
										.slice(1, -1)
										.join(`
`),
									relativeWorkspacePath: E.intent.value.relativeWorkspacePath,
									startLineNumber:
										E.intent.value.potentiallyOutOfDateRange?.startLineNumber ??
										0,
								},
							},
						},
					]);
				}
				update_IS_CALLED_ON_EVERY_KEYSTROKE_SO_BE_CAREFUL(E, C) {
					this.b.signal.aborted || this.c(C);
				}
				async blockForFinalInput(E, C) {
					return C.type === t.ContextIntent_Type.AUTOMATIC
						? "fallBackToCachedReranked"
						: (await this.c(C), "useFreshItemsEvenIfNotRerankedYet");
				}
				freeze() {
					this.b.abort();
				}
				unfreeze() {
					this.b = new AbortController();
				}
				dispose() {
					this.b.abort();
				}
			}
			e.$RZc = i;
		}),
		