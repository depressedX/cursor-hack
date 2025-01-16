define(de[1229], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Ped = t),
				(e.$Qed = i),
				(e.$Red = w);
			function t(E) {
				let C = 0;
				for (let d = E.length - 1; d >= 0 && E[d] === ""; d--) C++;
				return C;
			}
			function i(E, C, d, m) {
				d = d.replace(/\r?\n/g, m);
				const r = E.getValueInRange({
						startLineNumber: C.startLineNumber,
						startColumn: C.startColumn,
						endLineNumber: C.endLineNumberInclusive,
						endColumn: C.endColumn,
					}),
					u = t(r.split(m));
				if (
					((d = d.replace(/(\r?\n)+$/, m.repeat(u + 1))),
					E.uri.scheme.startsWith("vscode-notebook-cell"))
				) {
					const p = E.getValue().split(m).length ?? 0;
					C.endLineNumberInclusive === p &&
						d.endsWith(m) &&
						(d = d.slice(0, -m.length));
				}
				const a = r.split(m);
				let h = d.split(m);
				t(h) === t(a) + 1 && (h = h.slice(0, -1));
				let n = 0;
				for (let p = 0; p < Math.min(a.length, h.length); p++) {
					const o = a[a.length - p - 1],
						f = h[h.length - p - 1];
					if (o !== f) break;
					n++;
				}
				return { isNoOp: n === a.length && n === h.length };
			}
			function w(E, C, d, m, r) {
				const u = E.getValue().split(m),
					a = [d],
					h = d.split(m),
					c = u.slice(C.startLineNumber - 1, C.endLineNumberInclusive);
				let n = 0;
				for (; n < Math.min(h.length, c.length) && c[n] === h[n]; n++);
				if (c[n] !== "" && h[n] === "") {
					const p = h.filter((o, f) => n !== f).join(m);
					a.push(p);
				}
				const g = (p) => {
					let o =
						u
							.slice(0, C.startLineNumber - 1)
							.map((f) => f + m)
							.join("") +
						p +
						m +
						u.slice(C.endLineNumberInclusive).join(m);
					return (
						E.uri.scheme === "vscode-notebook-cell" &&
							(o =
								(r?.prevCellValues ?? []).map((f) => f + m).join("") +
								o +
								(r?.afterCellValues ?? []).map((f) => m + f).join("")),
						o
					);
				};
				return a.map(g);
			}
		}),
		define(
			de[2963],
			he([1, 0, 148, 45, 1229, 25, 280, 134, 20, 5, 1153]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$1ed = e.$Zed = void 0),
					(e.$Zed = (0, r.$Mi)("cppBadHeuristics"));
				let a = class {
					constructor(c, n, g) {
						(this.a = c), (this.b = n), (this.c = g);
					}
					async isValidCppCase({
						model: c,
						modelOutputText: n,
						startingRange: g,
						notebookInfo: p,
						eol: o,
					}) {
						let { isNoOp: f } = (0, w.$Qed)(c, g, n, o);
						if (f) return { valid: !1 };
						if (
							!this.a.applicationUserPersistentStorage
								.cppShowWhitespaceOnlyChanges
						) {
							const $ = c.getValueInRange({
									startLineNumber: g.startLineNumber,
									startColumn: g.startColumn,
									endLineNumber: g.endLineNumberInclusive,
									endColumn: g.endColumn,
								}),
								{ charDiffs: v } = (0, u.$wlc)($, n, o);
							let S = !0;
							for (const I of v)
								if (
									(I.added === !0 || I.removed === !0) &&
									I.value.trim() !== ""
								) {
									S = !1;
									break;
								}
							if (S)
								return (
									console.log(
										"[Cpp] Bad Case: all changes are whitespace only but user has showWhitespaceOnlyChanges disabled",
									),
									{ valid: !1 }
								);
						}
						let s = n.split(o),
							l = c.getValue().split(o);
						const y =
							this.a.applicationUserPersistentStorage.cppConfig?.heuristics;
						if (y === void 0) return { valid: !0, modelOutputText: n };
						if (
							y.includes(t.CppConfigResponse_Heuristic.REVERTING_USER_CHANGE)
						) {
							const $ = (0, w.$Red)(c, g, n, o, p),
								v = this.b.asRelativePath(c.uri);
							for (const S of $)
								if (
									await this.c.onlyLocalProvider?.runCommand(
										d.EditHistoryActions.IsRevertingToRecentModel,
										{ relativePath: v, modelValue: S },
									)
								)
									return (
										console.log(
											"[Bad CPP Case 4] Reverting a change the user just made",
										),
										{ valid: !1 }
									);
						}
						if (
							y.includes(
								t.CppConfigResponse_Heuristic
									.OUTPUT_EXTENDS_BEYOND_RANGE_AND_IS_REPEATED,
							)
						) {
							(s = n.split(o)),
								(l = c.getValue().split(o).slice(g.startLineNumber));
							let $ = !0;
							for (
								let v = 0;
								v < s.length && !(v === s.length - 1 && s[v] === "");
								v++
							)
								if (
									s[v] === void 0 ||
									l[v] === void 0 ||
									s[v].trim() !== l[v].trim()
								) {
									$ = !1;
									break;
								}
							if ($)
								return (
									console.log(
										"[Bad CPP Case 5] Output extends beyond range but is all same",
									),
									{ valid: !1 }
								);
						}
						if (
							y.includes(
								t.CppConfigResponse_Heuristic.SUGGESTING_RECENTLY_REJECTED_EDIT,
							)
						) {
							const $ = (0, w.$Red)(c, g, n, o, p),
								v = this.b.asRelativePath(c.uri),
								S =
									this.a.applicationUserPersistentStorage.cppConfig
										?.recentlyRejectedEditThresholds;
							if (S !== void 0) {
								for (const I of $)
									if (
										await this.c.onlyLocalProvider?.runCommand(
											d.EditHistoryActions.IsSuggestingRecentlyRejectedEdit,
											{
												relativePath: v,
												modelValue: I,
												numberOfTimesSoftRejectedThreshold:
													S.softRejectThreshold,
												numberOfTimesHardRejectedThreshold:
													S.hardRejectThreshold,
											},
										)
									)
										return (
											console.log(
												"[Bad CPP Case 6] Suggesting a recently rejected edit",
											),
											{ valid: !1 }
										);
							}
						}
						return { valid: !0, modelOutputText: n };
					}
				};
				(e.$1ed = a),
					(e.$1ed = a = Ne([j(0, i.$0zb), j(1, E.$Vi), j(2, C.$3Db)], a)),
					(0, m.$lK)(e.$Zed, a, m.InstantiationType.Delayed);
			},
		),
		define(
			de[2964],
			he([1, 0, 47, 20, 5, 45, 155, 1229]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ted = e.$Sed = void 0),
					(e.$Sed = (0, w.$Mi)("cppSuggestionService"));
				let m = class {
					constructor(u) {
						(this.b = u), (this.a = 1);
					}
					createUnseenSuggestion(u) {
						const a = (0, t.$9g)(),
							{ isNoOp: h } = (0, d.$Qed)(
								u.model,
								u.startingRange,
								u.diffText,
								u.eol,
							);
						if (h) return;
						const c = u.model.getValueInRange({
							startLineNumber: u.startingRange.startLineNumber,
							startColumn: u.startingRange.startColumn,
							endLineNumber: u.startingRange.endLineNumberInclusive,
							endColumn: u.startingRange.endColumn,
						});
						return {
							uniqueId: a,
							uri: u.model.uri,
							modelVersionWhenInvoked: u.modelVersionWhenInvoked,
							suggestionIsCurrentlyHidden: !0,
							modelVersionWhenCreated: u.model.getVersionId(),
							monotonicallyIncreasingSuggestionId: this.a++,
							range: u.startingRange,
							replaceText: u.diffText,
							originalText: c,
							startingSuggestionRange: u.startingRange,
							diffText: u.diffText,
							fullOriginalText: c,
							suggestionTriggerTime: u.suggestionTriggerTime,
							greens: [],
							source: u.source,
							requestId: u.requestId,
							selection: u.selection,
							fusedCursorPredictionId: u.fusedCursorPredictionId,
							undoRedoGroup: new C.$IN(),
							immediatelySeen: !1,
							hasBeenSeen: !1,
						};
					}
				};
				(e.$Ted = m),
					(e.$Ted = m = Ne([j(0, E.$0zb)], m)),
					(0, i.$lK)(e.$Sed, m, i.InstantiationType.Delayed);
			},
		),
		define(
			de[2965],
			he([1, 0, 3, 56, 7, 35, 38, 10]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$0ed = void 0),
					(w = mt(w));
				let m = class extends t.$1c {
					static {
						this.a = [i.ContentWidgetPositionPreference.EXACT];
					}
					constructor(u, a, h, c) {
						super(),
							(this.g = u),
							(this.h = a),
							(this.j = c),
							(this.f =
								"cursorPredictionHintLineWidget." +
								Math.random().toString(36).substring(2, 15)),
							(this.b = w.$("span.cursor-prediction-hint-line-widget")),
							(this.c = w.$("span", {}, "\u21E5 tab")),
							w.$fhb(this.b, this.c),
							this.b.classList.add("fancy"),
							(this.c.style.fontSize =
								this.g.getOption(C.EditorOption.fontSize) + "px"),
							this.D(
								this.j.onDidChangeConfiguration((n) => {
									n.affectsConfiguration("editor.fontSize") &&
										(this.c.style.fontSize =
											this.j.getValue("editor.fontSize") + "px");
								}),
							),
							this.g.addContentWidget(this);
					}
					dispose() {
						super.dispose(), this.g.removeContentWidget(this), this.b.remove();
					}
					hide() {
						this.g.removeContentWidget(this);
					}
					show() {
						this.g.addContentWidget(this);
					}
					getId() {
						return this.f;
					}
					getDomNode() {
						return this.b;
					}
					getPosition() {
						const u = this.g.getModel();
						if (u === null) return null;
						const a = u.getDecorationRange(this.h);
						return a === null
							? null
							: {
									position: {
										lineNumber: a.startLineNumber,
										column: a.endColumn,
									},
									preference: [i.ContentWidgetPositionPreference.EXACT],
								};
					}
					updateMarginLeft(u) {}
				};
				(e.$0ed = m), (e.$0ed = m = Ne([j(2, E.$iP), j(3, d.$gj)], m));
			},
		),
		