import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../editor/common/services/resolverService.js';
import '../../../../../platform/workspace/common/workspace.js';
define(de[3237], he([1, 0, 42, 25]), function (ce /*require*/,
 e /*exports*/,
 t /*resolverService*/,
 i /*workspace*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$IZc = void 0);
			let w = class {
				constructor(C, d, m) {
					(this.a = C),
						(this.b = d),
						(this.c = m),
						(this.d = new AbortController());
				}
				async process(C, d) {
					if (this.d.signal.aborted) return;
					const m = [
						{
							intent: d,
							item: { case: "cmdKQuery", value: { query: C.query } },
						},
					];
					C.queryHistory &&
						m.push({
							intent: d,
							item: { case: "cmdKQueryHistory", value: C.queryHistory },
						}),
						C.chatHistory &&
							m.push({
								intent: d,
								item: {
									case: "chatHistory",
									value: { ...C.chatHistory, activeForCmdK: !0 },
								},
							}),
						await this.a.newItems(m);
				}
				update_IS_CALLED_ON_EVERY_KEYSTROKE_SO_BE_CAREFUL(C, d) {
					this.process(C, d);
				}
				async blockForFinalInput(C, d) {
					return await this.process(C, d), "useFreshItemsEvenIfNotRerankedYet";
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
			(e.$IZc = w), (e.$IZc = w = Ne([j(1, i.$Vi), j(2, t.$MO)], w));
		})
