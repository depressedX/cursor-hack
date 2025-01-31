import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/lifecycle.js';
import '../../../common/config/editorOptions.js';
import '../../../common/core/characterClassifier.js';
import './suggestModel.js';
define(
			de[2926],
			he([1, 0, 24, 3, 38, 654, 1221]),
			function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/,
 i /*lifecycle*/,
 w /*editorOptions*/,
 E /*characterClassifier*/,
 C /*suggestModel*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$JDb = void 0);
				class d {
					constructor(r, u, a, h, c) {
						(this.a = new i.$Zc()),
							this.a.add(
								h.onDidSuggest((n) => {
									n.completionModel.items.length === 0 && this.reset();
								}),
							),
							this.a.add(
								h.onDidCancel((n) => {
									this.reset();
								}),
							),
							this.a.add(a.onDidShow(() => this.c(a.getFocusedItem()))),
							this.a.add(a.onDidFocus(this.c, this)),
							this.a.add(a.onDidHide(this.reset, this)),
							this.a.add(
								r.onWillType((n) => {
									if (this.b && !a.isFrozen() && h.state !== C.State.Idle) {
										const g = n.charCodeAt(n.length - 1);
										this.b.acceptCharacters.has(g) &&
											r.getOption(
												w.EditorOption.acceptSuggestionOnCommitCharacter,
											) &&
											c(this.b.item);
									}
								}),
							);
					}
					c(r) {
						if (!r || !(0, t.$Pb)(r.item.completion.commitCharacters)) {
							this.reset();
							return;
						}
						if (this.b && this.b.item.item === r.item) return;
						const u = new E.$OL();
						for (const a of r.item.completion.commitCharacters)
							a.length > 0 && u.add(a.charCodeAt(0));
						this.b = { acceptCharacters: u, item: r };
					}
					reset() {
						this.b = void 0;
					}
					dispose() {
						this.a.dispose();
					}
				}
				e.$JDb = d;
			},
		)
