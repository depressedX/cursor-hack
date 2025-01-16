define(de[779], he([1, 0, 155]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$y7b = void 0);
			class i {
				get type() {
					return t.UndoRedoElementType.Resource;
				}
				constructor(E, C, d, m, r, u) {
					(this.label = E),
						(this.code = C),
						(this.diffId = d),
						(this.resource = m),
						(this.a = []),
						(this.b = []),
						(this.confirmBeforeUndo = !1),
						this.a.push(r),
						this.b.push(u);
				}
				push(E) {
					this.a.push(...E.a), this.b.push(...E.b);
				}
				async undo() {
					for (let E = this.a.length - 1; E >= 0; E--) {
						const C = this.a[E],
							d = C();
						d instanceof Promise && (await d);
					}
				}
				async redo() {
					for (let E = 0; E < this.b.length; E++) {
						const C = this.b[E],
							d = C();
						d instanceof Promise && (await d);
					}
				}
				rebase() {}
				toString() {
					return `InlineDiffUndoRedoElement: ${this.label}`;
				}
			}
			e.$y7b = i;
		}),
		define(
			de[2874],
			he([1, 0, 5, 17, 3, 20, 42, 45, 155, 48, 8, 606]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Vdc = e.$Udc = void 0),
					(e.$Wdc = n),
					(e.$Udc = (0, t.$Mi)("inlineGPT4Service"));
				let h = class extends w.$1c {
					constructor(p, o, f, b, s) {
						super(),
							(this.c = p),
							(this.f = o),
							(this.g = f),
							(this.h = b),
							(this.j = s),
							(this.a = new Map());
					}
					isEndOfScopeToken(p) {
						let o = p.trim();
						return o === "}" || o === "]" || o === ")";
					}
					async streamCompletion({
						uri: p,
						triggerPosition: o,
						currentLine: f,
						generationUUID: b,
						streamingLines: s,
						undoRedo: l,
						editor: y,
						cancellationToken: $,
						onFirstTokenListener: v,
						onDoneListener: S,
						shouldSwitchToNewLine: I,
					}) {
						const T = await this.addCompletion(
								{
									uri: p,
									triggerPosition: o,
									generationUUID: b,
									currentRange: {
										startLineNumber: o.lineNumber,
										endLineNumberExclusive: o.lineNumber + 1,
									},
									_isPostCopilot: I ?? !1,
								},
								y,
								l,
							),
							P = f.search(/\S|$/);
						let k = P,
							L = !1,
							D = !0,
							M = !1,
							N = 0,
							A = "";
						try {
							for await (let R of s) {
								if ($.isCancellationRequested) break;
								if (
									(N++,
									D && v(),
									R ===
										`
` ||
										R ===
											`\r
`)
								) {
									if (M) {
										A += R;
										continue;
									}
									T.addToken(R), (k = 0);
									continue;
								}
								const O = R.search(/\S|$/);
								if (O === -1) {
									A += R;
									const U = R.replace(/\n/g, "").replace(/\r\n/g, "").length;
									k += U;
									continue;
								} else (R = A + R), (k += O), (A = "");
								let B = R.trimStart();
								if (B !== "")
									if (M && this.isEndOfScopeToken(B)) T.addToken(R);
									else if (k < P)
										if (this.isEndOfScopeToken(B)) T.addToken(R), (M = !0);
										else break;
									else T.addToken(R);
								else T.addToken(R);
								D = !1;
							}
						} catch (R) {
							console.error("error while streaming lines:", R), (L = !0);
						}
						L &&
							(console.error("failed to complete streaming"),
							T.finishFailure()),
							S(),
							T.dispose();
					}
					async addCompletion(p, o, f) {
						const b = new m.$IN(),
							s = new c(p, b, this.h, this.f, o);
						if ((this.a.set(s.id, s), f)) {
							const l = new a.$x7b(
								"InlineGPT4",
								"InlineGPT4",
								p.uri,
								f.undo,
								f.redo,
							);
							this.h.pushElement(l, b);
						}
						return s;
					}
					pushUndoRedoElement(p) {
						this.h.pushElement(p);
					}
					findHandlerGivenPosition(p) {
						const o = p.getPosition();
						if (o)
							for (const [f, b] of this.a) {
								const s = b.completion.triggerPosition.lineNumber,
									l = b.completion.livePositionOfCursor.lineNumber,
									y = o.lineNumber,
									$ =
										b.completion.uri.toString() ===
										p.getModel()?.uri.toString();
								if (s <= y && y < l && $) return { handler: b, id: f };
							}
					}
					findHandlersGivenEditor(p) {
						const o = p.getPosition(),
							f = p.getModel();
						if (!o || !f) return [];
						let b = [];
						for (const [s, l] of this.a)
							l.completion.uri.toString() === f.uri.toString() &&
								b.push({ handler: l, id: s });
						return b;
					}
					acceptCompletion(p) {
						const { handler: o, id: f } = this.findHandlerGivenPosition(p) ?? {
							handler: void 0,
							id: void 0,
						};
						!o || !f || (o.accept(), this.a.delete(f));
					}
					acceptImplicitly(p) {
						const o = this.findHandlersGivenEditor(p);
						for (const f of o)
							f.handler.acceptImplicitly(), this.a.delete(f.id);
					}
					rejectCompletion(p) {
						const { handler: o, id: f } = this.findHandlerGivenPosition(p) ?? {
							handler: void 0,
							id: void 0,
						};
						!o || !f || (o.reject(), this.a.delete(f));
					}
					cancelCompletion(p) {
						this.removeHandler(p);
					}
					removeHandler(p) {
						const o = this.a.get(p);
						o && (this.a.delete(p), o.dispose());
					}
				};
				(e.$Vdc = h),
					(e.$Vdc = h =
						Ne(
							[
								j(0, t.$Li),
								j(1, C.$MO),
								j(2, d.$0zb),
								j(3, m.$GN),
								j(4, u.$6j),
							],
							h,
						)),
					(0, E.$lK)(e.$Udc, h, E.InstantiationType.Delayed);
				class c extends w.$1c {
					get id() {
						return this.completion.id;
					}
					constructor(p, o, f, b, s) {
						super(),
							(this.h = o),
							(this.j = f),
							(this.m = b),
							(this.q = s),
							(this.c = []),
							(this.f = []),
							(this.g = !1),
							(this.u = !0),
							(this.a = {}),
							this.m
								.createModelReference(p.uri)
								.then((l) => {
									this.a = l;
								})
								.catch((l) => {
									console.error(
										"InlineLongCompletionHandler#constructor: error while creating model reference:",
										l,
									),
										(this.g = !0);
								}),
							(this.completion = {
								id: p.generationUUID,
								livePositionOfCursor: p.triggerPosition,
								onAccept: () => {},
								onReject: () => {},
								newTextLines: [],
								...p,
							});
					}
					dispose() {
						this._checkInvariants() && (this.a.dispose(), super.dispose());
					}
					r() {
						const p = this.a.object.textEditorModel,
							o = this.c;
						p.deltaDecorations(o, []), (this.c = []);
					}
					acceptImplicitly() {
						this.r();
					}
					accept() {
						this.r();
						const p = this.completion.livePositionOfCursor.lineNumber;
						this.q.setPosition(
							new r.$hL(p, this.a.object.textEditorModel.getLineMaxColumn(p)),
						);
					}
					reject() {
						this.j.undo(this.a.object.textEditorModel.uri), this.r();
					}
					addToken(p) {
						if (!this._checkInvariants()) return;
						const o = this.a.object.textEditorModel.getEOL();
						p ===
							`
` ||
						p ===
							`\r
`
							? (this.completion.newTextLines.push(""),
								this._updatePositionAndDecorationsWithNewLine())
							: ((this.completion.newTextLines[
									this.completion.newTextLines.length - 1
								] += p),
								this._updatePositionAndDecorationsWithNewToken(p)),
							this.u && (this.u = !1);
					}
					finishFailure() {
						this.g;
					}
					_checkInvariants() {
						return !this.g;
					}
					_updatePositionAndDecorationsWithNewLine() {
						const p = this.a.object.textEditorModel,
							o = p.getEOL(),
							f = this.completion.livePositionOfCursor,
							b = this.completion.triggerPosition,
							s = [
								{
									range: new i.$iL(
										f.lineNumber,
										f.column,
										f.lineNumber,
										f.column,
									),
									text: o,
									forceMoveMarkers: !0,
								},
							];
						p.pushEditOperations([], s, () => null, this.h);
						const l = this.completion.livePositionOfCursor.lineNumber;
						this.completion.livePositionOfCursor = {
							lineNumber: l + 1,
							column: 1,
						};
					}
					_updatePositionAndDecorationsWithNewToken(p) {
						const o = this.a.object.textEditorModel,
							f = o.getEOL(),
							b = this.completion.livePositionOfCursor,
							s = this.completion.triggerPosition;
						if (this.u && !this.completion._isPostCopilot) {
							const S = p.trimStart(),
								I = [
									{
										range: new i.$iL(
											b.lineNumber,
											b.column,
											b.lineNumber,
											b.column,
										),
										text: S,
										forceMoveMarkers: !0,
									},
								];
							o.pushEditOperations([], I, () => null, this.h);
						} else {
							const S = [
								{
									range: new i.$iL(
										b.lineNumber,
										b.column,
										b.lineNumber,
										b.column,
									),
									text: p,
									forceMoveMarkers: !0,
								},
							];
							o.pushEditOperations([], S, () => null, this.h);
						}
						this.q.setPosition(s);
						const l = {
								range: new i.$iL(b.lineNumber, 1, b.lineNumber, 1),
								options: {
									isWholeLine: !0,
									description: "inline-long-completion",
									className: "inline-long-completion",
								},
							},
							y = {
								range: new i.$iL(b.lineNumber, 1, b.lineNumber, 1),
								options: {
									isWholeLine: !0,
									description: "inline-long-completion-opacitycover",
									inlineClassName: "inline-long-completion-opacitycover",
									zIndex: 10,
								},
							};
						this.f.push(y),
							(this.c = this.a.object.textEditorModel.deltaDecorations(
								this.c,
								this.f,
							));
						const $ = this.completion.livePositionOfCursor.lineNumber,
							v = this.completion.livePositionOfCursor.column;
						this.completion.livePositionOfCursor = {
							lineNumber: b.lineNumber,
							column: v + p.length,
						};
					}
				}
				function n(g) {
					const p = JSON.parse(JSON.stringify(g));
					return (p.uri = g.uri), (p.triggerPosition = g.triggerPosition), p;
				}
			},
		),
		define(
			de[545],
			he([1, 0, 3, 47, 65, 17, 64, 42, 20, 5, 45, 155]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$B8b = e.$A8b = e.$z8b = e.$y8b = void 0);
				let h = class extends t.$1c {
					constructor(o, f, b, s) {
						super(),
							(this.b = o),
							(this.c = f),
							(this.f = b),
							(this.g = s),
							(this.a = new Map());
					}
					allDiffs() {
						return Array.from(this.a.keys());
					}
					async addDiff(o) {
						const f = await this.c.createModelReference(o.uri),
							b = new g(this.f, f, o);
						return this.a.set(b.id, b), b.id;
					}
					addAndApplyDiff(o, f) {
						return g.reapply(o, f), this.addDiffSync(o, f);
					}
					addDiffSync(o, f) {
						const b = new g(this.f, f, o);
						return this.a.set(b.id, b), b.id;
					}
					getDiff(o) {
						return this.a.get(o);
					}
					acceptDiff(o, f = !0) {
						const b = this.a.get(o);
						if (b) {
							const s = c(b.getInlineDiff());
							b.commit();
							const l = [0];
							this.g.pushElement({
								type: a.UndoRedoElementType.Resource,
								resource: s.uri,
								label: `Undo accept diff ${b.id}`,
								code: `undoAcceptDiff:${b.id}`,
								undo: () => {
									const y = c(s);
									(y.id = b.id + "-undo-" + l[0]),
										this.addDiff(y),
										y.onUndoAccept && y.onUndoAccept(y);
								},
								redo: () => {
									const y = b.id + "-undo-" + l[0];
									this.a.get(y)?.commit(), (l[0] = l[0] + 1);
								},
								rebase: (y, $, v, S, I, T, P, k) => {
									g.rebase(s, I, P);
								},
							});
						}
					}
					rejectDiff(o) {
						const f = this.a.get(o);
						if (f) {
							const b = c(f.getInlineDiff()),
								s = [0];
							f.abort(),
								this.g.pushElement({
									type: a.UndoRedoElementType.Resource,
									resource: b.uri,
									label: `Undo reject diff ${f.id}`,
									code: `undoRejectDiff:${f.id}`,
									undo: async () => {
										const l = await this.c.createModelReference(b.uri);
										g.reapply(b, l);
										const y = c(b);
										(y.id = f.id + "-undo-" + s[0]),
											this.addDiff(y),
											y.onUndoReject && y.onUndoReject(y);
									},
									redo: async () => {
										const l = f.id + "-undo-" + s[0];
										this.a.get(l)?.abort(), (s[0] = s[0] + 1);
									},
									rebase: (l, y, $, v, S, I, T, P) => {
										g.rebase(b, S, T);
									},
								});
						}
					}
					editLineInDiff(o, f, b) {
						const s = this.a.get(o);
						s && s.editLine(f, b);
					}
					newLineInDiff(o, f) {
						const b = this.a.get(o);
						b && b.newLine(f);
					}
					deleteLineInDiff(o, f) {
						const b = this.a.get(o);
						b && b.deleteLine(f);
					}
					expandDiff(o, f) {
						const b = this.a.get(o);
						b && b.expandLine(f);
					}
					simplifyDiff(o) {
						const f = this.a.get(o);
						f && f.simplify();
					}
				};
				(e.$y8b = h),
					(e.$y8b = h =
						Ne([j(0, w.$dtb), j(1, d.$MO), j(2, u.$0zb), j(3, a.$GN)], h)),
					(e.$z8b = (0, r.$Mi)("simpleInlineDiffService")),
					(0, m.$lK)(e.$z8b, h, m.InstantiationType.Delayed);
				function c(p) {
					const {
						id: o,
						live: f,
						startLineNumber: b,
						uri: s,
						acceptTextLines: l,
						rejectTextLines: y,
						onAccept: $,
						onReject: v,
						onUndoAccept: S,
						onUndoReject: I,
					} = p;
					return {
						id: o,
						live: f,
						startLineNumber: b,
						uri: s,
						onAccept: $,
						onReject: v,
						onUndoAccept: S,
						onUndoReject: I,
						acceptTextLines: [...l],
						rejectTextLines: [...y],
					};
				}
				class n extends t.$1c {
					constructor(o, f, b, s) {
						super(),
							(this.a = o),
							(this.b = f),
							(this.c = s),
							(this.handlers = []),
							this.D(o),
							b !== void 0 && (this.handlers = b);
					}
					f(o) {
						const f = this.b.addDiffSync(
							{
								startLineNumber: o,
								uri: this.a.object.textEditorModel.uri,
								...(this.c ?? {}),
							},
							this.a,
						);
						return this.handlers.push(f), f;
					}
					g(o) {
						return this.b.getDiff(o).getInlineDiff();
					}
					diffAt(o, f = !1, b = !1) {
						const s = [];
						for (const l of this.handlers)
							if (this.g(l).live) {
								if (
									this.g(l).startLineNumber - (f ? 1 : 0) <= o &&
									o < this.b.getDiff(l).endLineNumberExclusive() + (b ? 1 : 0)
								)
									return this.g(l).id;
							} else s.push(l);
					}
					getHandlers() {
						return [...this.handlers];
					}
					commit() {
						for (const o of this.handlers.values())
							this.g(o).live && this.b.acceptDiff(o);
						this.handlers = [];
					}
					abort() {
						for (const o of this.handlers.values())
							this.g(o).live && this.b.rejectDiff(o);
						this.handlers = [];
					}
					editLine(o, f) {
						const b = this.diffAt(f);
						if (b)
							return (
								this.b.editLineInDiff(b, o, f - this.g(b).startLineNumber),
								this.b.simplifyDiff(b),
								b
							);
						{
							const s = this.f(f);
							return (
								this.b.expandDiff(s, "after"), this.b.editLineInDiff(s, o, 0), s
							);
						}
					}
					newLine(o) {
						const f = this.diffAt(o, !0);
						if (f)
							return (
								this.b.newLineInDiff(f, o - this.g(f).startLineNumber + 1),
								this.b.simplifyDiff(f),
								f
							);
						{
							const b = this.f(o + 1);
							return this.b.newLineInDiff(b, 0), b;
						}
					}
					deleteLine(o) {
						const f = this.diffAt(o, !0, !0);
						if (f)
							return (
								this.b.deleteLineInDiff(f, o - this.g(f).startLineNumber),
								this.b.simplifyDiff(f),
								f
							);
						{
							const b = this.f(o);
							return this.b.deleteLineInDiff(b, 0), b;
						}
					}
				}
				e.$A8b = n;
				class g extends t.$1c {
					constructor(o, f, b) {
						super(),
							(this.f = o),
							(this.g = f),
							(this.b = []),
							(this.c = !1),
							(this.a = {
								id: (0, i.$9g)(),
								live: !0,
								acceptTextLines: [],
								rejectTextLines: [],
								onAccept: void 0,
								onReject: void 0,
								onUndoAccept: void 0,
								onUndoReject: void 0,
								...b,
							}),
							(this.id = this.a.id),
							(this.uri = this.a.uri),
							(this.live = this.a.live),
							this.D(
								this.g.object.textEditorModel.onDidChangeContent((s) => {
									for (const l of s.changes) {
										const y = l.text.split(`
`),
											$ =
												this.a.startLineNumber + this.a.acceptTextLines.length;
										for (
											let v = l.range.startLineNumber;
											v < l.range.endLineNumber;
											v++
										)
											v >= this.a.startLineNumber &&
												v < $ &&
												this.deleteLineDiffOnly(v - this.a.startLineNumber);
										if (l.range.startLineNumber < this.a.startLineNumber)
											this.a.startLineNumber +=
												Math.max(y.length - 1, 0) -
												(l.range.endLineNumber - l.range.startLineNumber);
										else if (l.range.startLineNumber < $) {
											(l.range.startColumn === 1 &&
												l.range.endLineNumber >= $) ||
												this.editLineDiffOnly(
													f.object.textEditorModel.getLineContent(
														l.range.startLineNumber,
													),
													l.range.startLineNumber - this.a.startLineNumber,
												);
											for (
												let v = 1;
												v < y.length &&
												!(
													v === y.length - 1 &&
													l.range.endColumn === 1 &&
													l.range.endLineNumber >= $
												);
												v++
											)
												this.newLineDiffOnly(
													l.range.startLineNumber - this.a.startLineNumber,
												),
													this.editLineDiffOnly(
														f.object.textEditorModel.getLineContent(
															l.range.startLineNumber,
														),
														l.range.startLineNumber - this.a.startLineNumber,
													);
										}
									}
									this.c ? this.m() : this.simplify();
								}),
							),
							this.m();
					}
					h() {}
					j() {
						for (
							;
							!(
								this.a.acceptTextLines.length === 0 ||
								this.a.rejectTextLines.length === 0
							);
						)
							if (this.a.acceptTextLines[0] === this.a.rejectTextLines[0])
								this.a.acceptTextLines.shift(),
									this.a.rejectTextLines.shift(),
									this.a.startLineNumber++;
							else if (
								this.a.acceptTextLines[this.a.acceptTextLines.length - 1] ===
								this.a.rejectTextLines[this.a.rejectTextLines.length - 1]
							)
								this.a.acceptTextLines.pop(), this.a.rejectTextLines.pop();
							else break;
					}
					viewRange() {
						return new E.$iL(
							this.a.startLineNumber,
							1,
							this.a.startLineNumber + this.a.acceptTextLines.length,
							1,
						);
					}
					simplify() {
						this.j(), !this.n() && this.m();
					}
					m() {
						this.f.setNonPersistentStorage("simpleDiffs", (f) => [
							...f.filter((b) => b.id !== this.a.id),
							this.a,
						]);
						const o = [];
						if (this.a.acceptTextLines.length !== 0) {
							const f = new E.$iL(
								this.a.startLineNumber,
								0,
								this.a.startLineNumber + this.a.acceptTextLines.length - 1,
								0,
							);
							o.push({
								range: f,
								options: {
									description: "inline-diff-added",
									className: "inline-diff-added",
									inlineClassName: "inline-diff-added-lines",
									isWholeLine: !0,
								},
							}),
								o.push({
									range: f,
									options: {
										description: "inline-diff-removed",
										overviewRuler: {
											position: C.OverviewRulerLane.Center,
											color:
												"var(--vscode-diffEditor-removedLineBackground, hsl(348deg 90% 50% / 25%))",
										},
									},
								});
						}
						this.b = this.g.object.textEditorModel.deltaDecorations(this.b, o);
					}
					getInlineDiff() {
						return this.a;
					}
					editLineDiffOnly(o, f) {
						this.a.live && (this.a.acceptTextLines[f] = o);
					}
					editLine(o, f) {
						if (!this.a.live) return;
						this.c = !0;
						const b = this.a.startLineNumber + f;
						this.g.object.textEditorModel.applyEdits(
							[
								{
									range: new E.$iL(
										b,
										1,
										b,
										this.g.object.textEditorModel.getLineMaxColumn(b),
									),
									text: o,
								},
							],
							!1,
							!0,
						),
							this.m(),
							(this.c = !1);
					}
					newLineDiffOnly(o) {
						this.a.live && this.a.acceptTextLines.splice(o, 0, "");
					}
					newLine(o) {
						if (!this.a.live) return;
						this.c = !0;
						const f = this.a.startLineNumber + o;
						if (f !== this.g.object.textEditorModel.getLineCount() + 1)
							this.g.object.textEditorModel.applyEdits(
								[
									{
										range: new E.$iL(f, 1, f, 1),
										text: this.g.object.textEditorModel.getEOL(),
									},
								],
								!1,
								!0,
							),
								o === this.a.acceptTextLines.length &&
									this.a.acceptTextLines.push("");
						else {
							const b = f - 1;
							this.g.object.textEditorModel.applyEdits(
								[
									{
										range: new E.$iL(
											b,
											this.g.object.textEditorModel.getLineMaxColumn(b),
											b,
											this.g.object.textEditorModel.getLineMaxColumn(b),
										),
										text: this.g.object.textEditorModel.getEOL(),
									},
								],
								!1,
								!0,
							),
								this.a.acceptTextLines.length === 0 &&
									(this.a.startLineNumber--, this.a.acceptTextLines.push(""));
						}
						this.m(), (this.c = !1);
					}
					deleteLineDiffOnly(o) {
						if (!this.a.live) return;
						const f = this.g.object.textEditorModel.getLineContent(
							this.a.startLineNumber + o,
						);
						o === -1
							? this.a.rejectTextLines.splice(0, 0, f)
							: o === this.a.acceptTextLines.length
								? this.a.rejectTextLines.push(f)
								: this.a.acceptTextLines.splice(o, 1);
					}
					deleteLine(o) {
						const f = this.g.object.textEditorModel.getLineContent(
							this.a.startLineNumber + o,
						);
						if (!this.a.live) return;
						(this.c = !0),
							o < -1 ||
								o > this.a.acceptTextLines.length ||
								(o === -1
									? this.a.rejectTextLines.splice(0, 0, f)
									: o === this.a.acceptTextLines.length &&
										this.a.rejectTextLines.push(f));
						const b = this.a.startLineNumber + o;
						b !== this.g.object.textEditorModel.getLineCount()
							? this.g.object.textEditorModel.applyEdits(
									[{ range: new E.$iL(b, 1, b + 1, 1), text: "" }],
									!1,
									!0,
								)
							: (this.g.object.textEditorModel.applyEdits(
									[
										{
											range: new E.$iL(
												b - 1,
												this.g.object.textEditorModel.getLineMaxColumn(b - 1),
												b,
												this.g.object.textEditorModel.getLineMaxColumn(b),
											),
											text: "",
										},
									],
									!1,
									!0,
								),
								this.a.acceptTextLines.length === 1 &&
									(this.a.startLineNumber++, this.a.acceptTextLines.pop())),
							this.m(),
							(this.c = !1);
					}
					expandLine(o) {
						if (o === "before") {
							const f = this.g.object.textEditorModel.getLineContent(
								this.a.startLineNumber - 1,
							);
							(this.a.startLineNumber -= 1),
								this.a.acceptTextLines.splice(0, 0, f),
								this.a.rejectTextLines.splice(0, 0, f);
						} else {
							const f = this.g.object.textEditorModel.getLineContent(
								this.a.startLineNumber + this.a.acceptTextLines.length,
							);
							this.a.acceptTextLines.push(f), this.a.rejectTextLines.push(f);
						}
						this.m();
					}
					commit() {
						(this.a.live = !1),
							(this.a.acceptTextLines = []),
							(this.a.rejectTextLines = []),
							this.m(),
							this.f.setNonPersistentStorage("simpleDiffs", (o) =>
								o.filter((f) => f.id !== this.a.id),
							),
							this.a.onAccept && this.a.onAccept(this.a),
							this.dispose();
					}
					n() {
						return this.a.acceptTextLines.length === 0 &&
							this.a.rejectTextLines.length === 0
							? (this.m(),
								(this.a.live = !1),
								this.f.setNonPersistentStorage("simpleDiffs", (o) =>
									o.filter((f) => f.id !== this.a.id),
								),
								this.a.onAccept && this.a.onAccept(this.a),
								this.dispose(),
								!0)
							: !1;
					}
					abort() {
						(this.c = !0),
							g.unroll(this.a, this.g),
							(this.a.live = !1),
							(this.a.acceptTextLines = []),
							(this.a.rejectTextLines = []),
							this.m(),
							this.f.setNonPersistentStorage("simpleDiffs", (o) =>
								o.filter((f) => f.id !== this.a.id),
							),
							this.a.onReject && this.a.onReject(this.a),
							this.dispose();
					}
					static unroll(o, f) {
						f.object.textEditorModel.applyEdits(
							[
								{
									range: new E.$iL(
										o.startLineNumber,
										1,
										o.startLineNumber + o.acceptTextLines.length,
										1,
									),
									text: o.rejectTextLines
										.map((b) => b + f.object.textEditorModel.getEOL())
										.join(""),
								},
							],
							!1,
							!0,
						);
					}
					static reapply(o, f) {
						f.object.textEditorModel.applyEdits(
							[
								{
									range: new E.$iL(
										o.startLineNumber,
										1,
										o.startLineNumber + o.rejectTextLines.length,
										1,
									),
									text: o.acceptTextLines
										.map((b) => b + f.object.textEditorModel.getEOL())
										.join(""),
								},
							],
							!1,
							!0,
						);
					}
					static rebase(o, f, b) {
						o.startLineNumber > f && (o.startLineNumber += b);
					}
					endLineNumberExclusive() {
						return this.a.startLineNumber + this.a.acceptTextLines.length;
					}
				}
				e.$B8b = g;
			},
		),
		define(
			de[780],
			he([1, 0, 4, 29, 104, 64, 155, 9, 1589, 76, 19, 48]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zU = e.$xU = e.$wU = e.$vU = void 0),
					(e.$yU = o),
					(t = mt(t)),
					(r = mt(r));
				function h(b) {
					return b.toString();
				}
				class c {
					static create(s, l) {
						const y = s.getAlternativeVersionId(),
							$ = p(s);
						return new c(y, y, $, $, l, l, []);
					}
					constructor(s, l, y, $, v, S, I) {
						(this.beforeVersionId = s),
							(this.afterVersionId = l),
							(this.beforeEOL = y),
							(this.afterEOL = $),
							(this.beforeCursorState = v),
							(this.afterCursorState = S),
							(this.changes = I);
					}
					append(s, l, y, $, v) {
						l.length > 0 && (this.changes = (0, m.$ML)(this.changes, l)),
							(this.afterEOL = y),
							(this.afterVersionId = $),
							(this.afterCursorState = v);
					}
					static c(s) {
						return 4 + 4 * 4 * (s ? s.length : 0);
					}
					static d(s, l, y) {
						if ((r.$Ye(s, l ? l.length : 0, y), (y += 4), l))
							for (const $ of l)
								r.$Ye(s, $.selectionStartLineNumber, y),
									(y += 4),
									r.$Ye(s, $.selectionStartColumn, y),
									(y += 4),
									r.$Ye(s, $.positionLineNumber, y),
									(y += 4),
									r.$Ye(s, $.positionColumn, y),
									(y += 4);
						return y;
					}
					static f(s, l, y) {
						const $ = r.$Xe(s, l);
						l += 4;
						for (let v = 0; v < $; v++) {
							const S = r.$Xe(s, l);
							l += 4;
							const I = r.$Xe(s, l);
							l += 4;
							const T = r.$Xe(s, l);
							l += 4;
							const P = r.$Xe(s, l);
							(l += 4), y.push(new w.$kL(S, I, T, P));
						}
						return l;
					}
					serialize() {
						let s =
							10 + c.c(this.beforeCursorState) + c.c(this.afterCursorState) + 4;
						for (const $ of this.changes) s += $.writeSize();
						const l = new Uint8Array(s);
						let y = 0;
						r.$Ye(l, this.beforeVersionId, y),
							(y += 4),
							r.$Ye(l, this.afterVersionId, y),
							(y += 4),
							r.$3e(l, this.beforeEOL, y),
							(y += 1),
							r.$3e(l, this.afterEOL, y),
							(y += 1),
							(y = c.d(l, this.beforeCursorState, y)),
							(y = c.d(l, this.afterCursorState, y)),
							r.$Ye(l, this.changes.length, y),
							(y += 4);
						for (const $ of this.changes) y = $.write(l, y);
						return l.buffer;
					}
					static deserialize(s) {
						const l = new Uint8Array(s);
						let y = 0;
						const $ = r.$Xe(l, y);
						y += 4;
						const v = r.$Xe(l, y);
						y += 4;
						const S = r.$2e(l, y);
						y += 1;
						const I = r.$2e(l, y);
						y += 1;
						const T = [];
						y = c.f(l, y, T);
						const P = [];
						y = c.f(l, y, P);
						const k = r.$Xe(l, y);
						y += 4;
						const L = [];
						for (let D = 0; D < k; D++) y = m.$LL.read(l, y, L);
						return new c($, v, S, I, T, P, L);
					}
				}
				e.$vU = c;
				class n {
					get type() {
						return C.UndoRedoElementType.Resource;
					}
					get resource() {
						return d.URI.isUri(this.model) ? this.model : this.model.uri;
					}
					constructor(s, l, y, $) {
						(this.label = s),
							(this.code = l),
							(this.model = y),
							(this.c = c.create(y, $));
					}
					toString() {
						return (
							this.c instanceof c ? this.c : c.deserialize(this.c)
						).changes
							.map((l) => l.toString())
							.join(", ");
					}
					matchesResource(s) {
						return (
							(d.URI.isUri(this.model)
								? this.model
								: this.model.uri
							).toString() === s.toString()
						);
					}
					setModel(s) {
						this.model = s;
					}
					canAppend(s) {
						return this.model === s && this.c instanceof c;
					}
					append(s, l, y, $, v) {
						this.c instanceof c && this.c.append(s, l, y, $, v);
					}
					close() {
						this.c instanceof c && (this.c = this.c.serialize());
					}
					open() {
						this.c instanceof c || (this.c = c.deserialize(this.c));
					}
					undo() {
						if (d.URI.isUri(this.model))
							throw new Error("Invalid SingleModelEditStackElement");
						this.c instanceof c && (this.c = this.c.serialize());
						const s = c.deserialize(this.c);
						this.model._applyUndo(
							s.changes,
							s.beforeEOL,
							s.beforeVersionId,
							s.beforeCursorState,
						);
					}
					redo() {
						if (d.URI.isUri(this.model))
							throw new Error("Invalid SingleModelEditStackElement");
						this.c instanceof c && (this.c = this.c.serialize());
						const s = c.deserialize(this.c);
						this.model._applyRedo(
							s.changes,
							s.afterEOL,
							s.afterVersionId,
							s.afterCursorState,
						);
					}
					rebase(s, l, y, $, v, S, I, T) {
						this.open();
						const P = y - (l - s),
							k = this.c,
							L = k.changes.map((N) =>
								($ ? N.newPosition : N.oldPosition) >= l ? N.shift(P) : N,
							);
						k.changes = L;
						const D = (N) =>
								N.lineNumber > v
									? new a.$hL(N.lineNumber + I, N.column)
									: N.lineNumber === v && N.column >= S
										? new a.$hL(N.lineNumber + I, N.column + T)
										: N,
							M = (N) =>
								w.$kL.fromPositions(
									D(N.getStartPosition()),
									D(N.getEndPosition()),
								);
						(k.afterCursorState = k.afterCursorState?.map(M) ?? null),
							(k.beforeCursorState = k.beforeCursorState?.map(M) ?? null),
							this.close();
					}
					heapSize() {
						return (
							this.c instanceof c && (this.c = this.c.serialize()),
							this.c.byteLength + 168
						);
					}
				}
				e.$wU = n;
				class g {
					get resources() {
						return this.d.map((s) => s.resource);
					}
					constructor(s, l, y) {
						(this.label = s),
							(this.code = l),
							(this.type = C.UndoRedoElementType.Workspace),
							(this.c = !0),
							(this.d = y.slice(0)),
							(this.f = new Map());
						for (const $ of this.d) {
							const v = h($.resource);
							this.f.set(v, $);
						}
						this.g = null;
					}
					setDelegate(s) {
						this.g = s;
					}
					prepareUndoRedo() {
						if (this.g) return this.g.prepareUndoRedo(this);
					}
					getMissingModels() {
						const s = [];
						for (const l of this.d) d.URI.isUri(l.model) && s.push(l.model);
						return s;
					}
					matchesResource(s) {
						const l = h(s);
						return this.f.has(l);
					}
					setModel(s) {
						const l = h(d.URI.isUri(s) ? s : s.uri);
						this.f.has(l) && this.f.get(l).setModel(s);
					}
					canAppend(s) {
						if (!this.c) return !1;
						const l = h(s.uri);
						return this.f.has(l) ? this.f.get(l).canAppend(s) : !1;
					}
					append(s, l, y, $, v) {
						const S = h(s.uri);
						this.f.get(S).append(s, l, y, $, v);
					}
					close() {
						this.c = !1;
					}
					open() {}
					undo() {
						this.c = !1;
						for (const s of this.d) s.undo();
					}
					redo() {
						for (const s of this.d) s.redo();
					}
					heapSize(s) {
						const l = h(s);
						return this.f.has(l) ? this.f.get(l).heapSize() : 0;
					}
					split() {
						return this.d;
					}
					toString() {
						const s = [];
						for (const l of this.d) s.push(`${(0, u.$kh)(l.resource)}: ${l}`);
						return `{${s.join(", ")}}`;
					}
				}
				e.$xU = g;
				function p(b) {
					return b.getEOL() ===
						`
`
						? E.EndOfLineSequence.LF
						: E.EndOfLineSequence.CRLF;
				}
				function o(b) {
					return b ? b instanceof n || b instanceof g : !1;
				}
				class f {
					constructor(s, l) {
						(this.c = s), (this.d = l);
					}
					pushStackElement() {
						const s = this.d.getLastElement(this.c.uri);
						o(s) && s.close();
					}
					popStackElement() {
						const s = this.d.getLastElement(this.c.uri);
						o(s) && s.open();
					}
					clear() {
						this.d.removeElements(this.c.uri);
					}
					f(s, l, y) {
						const $ = this.d.getLastElement(this.c.uri);
						if (o($) && $.canAppend(this.c) && y !== !0) return $;
						const v = new n(
							t.localize(818, null),
							"undoredo.textBufferEdit",
							this.c,
							s,
						);
						return this.d.pushElement(v, l), v;
					}
					pushEOL(s) {
						const l = this.f(null, void 0);
						this.c.setEOL(s),
							l.append(
								this.c,
								[],
								p(this.c),
								this.c.getAlternativeVersionId(),
								null,
							);
					}
					pushEditOperation(s, l, y, $, v) {
						const S = this.f(s, $, v),
							I = this.c.applyEdits(l, !0),
							T = f.g(y, I),
							P = I.map((k, L) => ({ index: L, textChange: k.textChange }));
						return (
							P.sort((k, L) =>
								k.textChange.oldPosition === L.textChange.oldPosition
									? k.index - L.index
									: k.textChange.oldPosition - L.textChange.oldPosition,
							),
							S.append(
								this.c,
								P.map((k) => k.textChange),
								p(this.c),
								this.c.getAlternativeVersionId(),
								T,
							),
							T
						);
					}
					static g(s, l) {
						try {
							return s ? s(l) : null;
						} catch (y) {
							return (0, i.$4)(y), null;
						}
					}
				}
				e.$zU = f;
			},
		),
		define(
			de[2875],
			he([1, 0, 67, 42, 3, 155, 780]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$yvc = void 0);
				let d = class extends w.$1c {
					constructor(r, u, a) {
						super(),
							(this.a = r),
							(this.b = u),
							(this.c = a),
							this.D(
								this.a.onModelRemoved((h) => {
									const c = this.c.getElements(h.uri);
									if (!(c.past.length === 0 && c.future.length === 0)) {
										for (const n of c.past)
											n instanceof C.$xU && n.setDelegate(this);
										for (const n of c.future)
											n instanceof C.$xU && n.setDelegate(this);
									}
								}),
							);
					}
					prepareUndoRedo(r) {
						const u = r.getMissingModels();
						if (u.length === 0) return w.$1c.None;
						const a = u.map(async (h) => {
							try {
								return await this.b.createModelReference(h);
							} catch {
								return w.$1c.None;
							}
						});
						return Promise.all(a).then((h) => ({
							dispose: () => (0, w.$Vc)(h),
						}));
					}
				};
				(e.$yvc = d),
					(e.$yvc = d = Ne([j(0, t.$QO), j(1, i.$MO), j(2, E.$GN)], d));
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[2876],
		he([1, 0, 29, 3, 23, 111, 4, 57, 20, 40, 155]),
		function (ce, e, t, i, w, E, C, d, m, r, u) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$bvc = void 0),
				(E = xi(E)),
				(C = mt(C));
			const a = !1;
			function h(v) {
				return v.scheme === w.Schemas.file ? v.fsPath : v.path;
			}
			let c = 0;
			class n {
				constructor(S, I, T, P, k, L, D) {
					(this.id = ++c),
						(this.type = u.UndoRedoElementType.Resource),
						(this.actual = S),
						(this.label = S.label),
						(this.confirmBeforeUndo = S.confirmBeforeUndo || !1),
						(this.resourceLabel = I),
						(this.strResource = T),
						(this.resourceLabels = [this.resourceLabel]),
						(this.strResources = [this.strResource]),
						(this.groupId = P),
						(this.groupOrder = k),
						(this.sourceId = L),
						(this.sourceOrder = D),
						(this.isValid = !0);
				}
				setValid(S) {
					this.isValid = S;
				}
				toString() {
					return `[id:${this.id}] [group:${this.groupId}] [${this.isValid ? "  VALID" : "INVALID"}] ${this.actual.constructor.name} - ${this.actual}`;
				}
			}
			var g;
			(function (v) {
				(v[(v.ExternalRemoval = 0)] = "ExternalRemoval"),
					(v[(v.NoParallelUniverses = 1)] = "NoParallelUniverses");
			})(g || (g = {}));
			class p {
				constructor(S, I) {
					(this.resourceLabel = S), (this.reason = I);
				}
			}
			class o {
				constructor() {
					this.a = new Map();
				}
				createMessage() {
					const S = [],
						I = [];
					for (const [, P] of this.a)
						(P.reason === g.ExternalRemoval ? S : I).push(P.resourceLabel);
					const T = [];
					return (
						S.length > 0 && T.push(C.localize(2415, null, S.join(", "))),
						I.length > 0 && T.push(C.localize(2416, null, I.join(", "))),
						T.join(`
`)
					);
				}
				get size() {
					return this.a.size;
				}
				has(S) {
					return this.a.has(S);
				}
				set(S, I) {
					this.a.set(S, I);
				}
				delete(S) {
					return this.a.delete(S);
				}
			}
			class f {
				constructor(S, I, T, P, k, L, D) {
					(this.id = ++c),
						(this.type = u.UndoRedoElementType.Workspace),
						(this.actual = S),
						(this.label = S.label),
						(this.confirmBeforeUndo = S.confirmBeforeUndo || !1),
						(this.resourceLabels = I),
						(this.strResources = T),
						(this.groupId = P),
						(this.groupOrder = k),
						(this.sourceId = L),
						(this.sourceOrder = D),
						(this.removedResources = null),
						(this.invalidatedResources = null);
				}
				canSplit() {
					return typeof this.actual.split == "function";
				}
				removeResource(S, I, T) {
					this.removedResources || (this.removedResources = new o()),
						this.removedResources.has(I) ||
							this.removedResources.set(I, new p(S, T));
				}
				setValid(S, I, T) {
					T
						? this.invalidatedResources &&
							(this.invalidatedResources.delete(I),
							this.invalidatedResources.size === 0 &&
								(this.invalidatedResources = null))
						: (this.invalidatedResources ||
								(this.invalidatedResources = new o()),
							this.invalidatedResources.has(I) ||
								this.invalidatedResources.set(I, new p(S, g.ExternalRemoval)));
				}
				toString() {
					return `[id:${this.id}] [group:${this.groupId}] [${this.invalidatedResources ? "INVALID" : "  VALID"}] ${this.actual.constructor.name} - ${this.actual}`;
				}
			}
			class b {
				constructor(S, I) {
					(this.resourceLabel = S),
						(this.a = I),
						(this.b = []),
						(this.c = []),
						(this.locked = !1),
						(this.versionId = 1);
				}
				dispose() {
					for (const S of this.b)
						S.type === u.UndoRedoElementType.Workspace &&
							S.removeResource(this.resourceLabel, this.a, g.ExternalRemoval);
					for (const S of this.c)
						S.type === u.UndoRedoElementType.Workspace &&
							S.removeResource(this.resourceLabel, this.a, g.ExternalRemoval);
					this.versionId++;
				}
				toString() {
					const S = [];
					S.push(`* ${this.a}:`);
					for (let I = 0; I < this.b.length; I++)
						S.push(`   * [UNDO] ${this.b[I].toString()}`);
					for (let I = this.c.length - 1; I >= 0; I--)
						S.push(`   * [REDO] ${this.c[I].toString()}`);
					return S.join(`
`);
				}
				flushAllElements() {
					(this.b = []), (this.c = []), this.versionId++;
				}
				setElementsIsValid(S) {
					for (const I of this.b)
						I.type === u.UndoRedoElementType.Workspace
							? I.setValid(this.resourceLabel, this.a, S)
							: I.setValid(S);
					for (const I of this.c)
						I.type === u.UndoRedoElementType.Workspace
							? I.setValid(this.resourceLabel, this.a, S)
							: I.setValid(S);
				}
				d(S, I) {
					S.type === u.UndoRedoElementType.Workspace
						? S.setValid(this.resourceLabel, this.a, I)
						: S.setValid(I);
				}
				setElementsValidFlag(S, I) {
					for (const T of this.b) I(T.actual) && this.d(T, S);
					for (const T of this.c) I(T.actual) && this.d(T, S);
				}
				pushElement(S) {
					for (const I of this.c)
						I.type === u.UndoRedoElementType.Workspace &&
							I.removeResource(
								this.resourceLabel,
								this.a,
								g.NoParallelUniverses,
							);
					(this.c = []), this.b.push(S), this.versionId++;
				}
				createSnapshot(S) {
					const I = [];
					for (let T = 0, P = this.b.length; T < P; T++) I.push(this.b[T].id);
					for (let T = this.c.length - 1; T >= 0; T--) I.push(this.c[T].id);
					return new u.$HN(S, I);
				}
				restoreSnapshot(S) {
					const I = S.elements.length;
					let T = !0,
						P = 0,
						k = -1;
					for (let D = 0, M = this.b.length; D < M; D++, P++) {
						const N = this.b[D];
						T && (P >= I || N.id !== S.elements[P]) && ((T = !1), (k = 0)),
							!T &&
								N.type === u.UndoRedoElementType.Workspace &&
								N.removeResource(this.resourceLabel, this.a, g.ExternalRemoval);
					}
					let L = -1;
					for (let D = this.c.length - 1; D >= 0; D--, P++) {
						const M = this.c[D];
						T && (P >= I || M.id !== S.elements[P]) && ((T = !1), (L = D)),
							!T &&
								M.type === u.UndoRedoElementType.Workspace &&
								M.removeResource(this.resourceLabel, this.a, g.ExternalRemoval);
					}
					k !== -1 && (this.b = this.b.slice(0, k)),
						L !== -1 && (this.c = this.c.slice(L + 1)),
						this.versionId++;
				}
				getElements() {
					const S = [],
						I = [];
					for (const T of this.b) S.push(T.actual);
					for (const T of this.c) I.push(T.actual);
					return { past: S, future: I };
				}
				getClosestPastElement() {
					return this.b.length === 0 ? null : this.b[this.b.length - 1];
				}
				getSecondClosestPastElement() {
					return this.b.length < 2 ? null : this.b[this.b.length - 2];
				}
				getClosestFutureElement() {
					return this.c.length === 0 ? null : this.c[this.c.length - 1];
				}
				hasPastElements() {
					return this.b.length > 0;
				}
				hasFutureElements() {
					return this.c.length > 0;
				}
				splitPastWorkspaceElement(S, I) {
					for (let T = this.b.length - 1; T >= 0; T--)
						if (this.b[T] === S) {
							I.has(this.a) ? (this.b[T] = I.get(this.a)) : this.b.splice(T, 1);
							break;
						}
					this.versionId++;
				}
				splitFutureWorkspaceElement(S, I) {
					for (let T = this.c.length - 1; T >= 0; T--)
						if (this.c[T] === S) {
							I.has(this.a) ? (this.c[T] = I.get(this.a)) : this.c.splice(T, 1);
							break;
						}
					this.versionId++;
				}
				moveBackward(S) {
					this.b.pop(), this.c.push(S), this.versionId++;
				}
				moveForward(S) {
					this.c.pop(), this.b.push(S), this.versionId++;
				}
				rebase(S, I, T, P, k, L, D) {
					for (const M of [...this.b])
						M.type === u.UndoRedoElementType.Resource &&
							M.actual.type === u.UndoRedoElementType.Resource &&
							M.actual.rebase(S, I, T, !0, P, k, L, D);
					for (const M of [...this.c])
						M.type === u.UndoRedoElementType.Resource &&
							M.actual.type === u.UndoRedoElementType.Resource &&
							M.actual.rebase(S, I, T, !1, P, k, L, D);
				}
			}
			class s {
				constructor(S) {
					(this.editStacks = S), (this.a = []);
					for (let I = 0, T = this.editStacks.length; I < T; I++)
						this.a[I] = this.editStacks[I].versionId;
				}
				isValid() {
					for (let S = 0, I = this.editStacks.length; S < I; S++)
						if (this.a[S] !== this.editStacks[S].versionId) return !1;
					return !0;
				}
			}
			const l = new b("", "");
			l.locked = !0;
			let y = class {
				constructor(S, I) {
					(this.c = S), (this.d = I), (this.a = new Map()), (this.b = []);
				}
				registerUriComparisonKeyComputer(S, I) {
					return (
						this.b.push([S, I]),
						{
							dispose: () => {
								for (let T = 0, P = this.b.length; T < P; T++)
									if (this.b[T][1] === I) {
										this.b.splice(T, 1);
										return;
									}
							},
						}
					);
				}
				getUriComparisonKey(S) {
					for (const I of this.b)
						if (I[0] === S.scheme) return I[1].getComparisonKey(S);
					return S.toString();
				}
				e(S) {
					console.log("------------------------------------"),
						console.log(`AFTER ${S}: `);
					const I = [];
					for (const T of this.a) I.push(T[1].toString());
					console.log(
						I.join(`
`),
					);
				}
				pushElement(S, I = u.$IN.None, T = u.$JN.None) {
					if (S.type === u.UndoRedoElementType.Resource) {
						const P = h(S.resource),
							k = this.getUriComparisonKey(S.resource);
						this.f(new n(S, P, k, I.id, I.nextOrder(), T.id, T.nextOrder()));
					} else {
						const P = new Set(),
							k = [],
							L = [];
						for (const D of S.resources) {
							const M = h(D),
								N = this.getUriComparisonKey(D);
							P.has(N) || (P.add(N), k.push(M), L.push(N));
						}
						k.length === 1
							? this.f(
									new n(
										S,
										k[0],
										L[0],
										I.id,
										I.nextOrder(),
										T.id,
										T.nextOrder(),
									),
								)
							: this.f(
									new f(S, k, L, I.id, I.nextOrder(), T.id, T.nextOrder()),
								);
					}
					a && this.e("pushElement");
				}
				f(S) {
					for (let I = 0, T = S.strResources.length; I < T; I++) {
						const P = S.resourceLabels[I],
							k = S.strResources[I];
						let L;
						this.a.has(k)
							? (L = this.a.get(k))
							: ((L = new b(P, k)), this.a.set(k, L)),
							L.pushElement(S);
					}
				}
				getLastElement(S) {
					const I = this.getUriComparisonKey(S);
					if (this.a.has(I)) {
						const T = this.a.get(I);
						if (T.hasFutureElements()) return null;
						const P = T.getClosestPastElement();
						return P ? P.actual : null;
					}
					return null;
				}
				g(S, I) {
					const T = S.actual.split(),
						P = new Map();
					for (const k of T) {
						const L = h(k.resource),
							D = this.getUriComparisonKey(k.resource),
							M = new n(k, L, D, 0, 0, 0, 0);
						P.set(M.strResource, M);
					}
					for (const k of S.strResources) {
						if (I && I.has(k)) continue;
						this.a.get(k).splitPastWorkspaceElement(S, P);
					}
				}
				h(S, I) {
					const T = S.actual.split(),
						P = new Map();
					for (const k of T) {
						const L = h(k.resource),
							D = this.getUriComparisonKey(k.resource),
							M = new n(k, L, D, 0, 0, 0, 0);
						P.set(M.strResource, M);
					}
					for (const k of S.strResources) {
						if (I && I.has(k)) continue;
						this.a.get(k).splitFutureWorkspaceElement(S, P);
					}
				}
				removeElements(S) {
					const I = typeof S == "string" ? S : this.getUriComparisonKey(S);
					this.a.has(I) && (this.a.get(I).dispose(), this.a.delete(I)),
						a && this.e("removeElements");
				}
				setElementsValidFlag(S, I, T) {
					const P = this.getUriComparisonKey(S);
					this.a.has(P) && this.a.get(P).setElementsValidFlag(I, T),
						a && this.e("setElementsValidFlag");
				}
				hasElements(S) {
					const I = this.getUriComparisonKey(S);
					if (this.a.has(I)) {
						const T = this.a.get(I);
						return T.hasPastElements() || T.hasFutureElements();
					}
					return !1;
				}
				createSnapshot(S) {
					const I = this.getUriComparisonKey(S);
					return this.a.has(I)
						? this.a.get(I).createSnapshot(S)
						: new u.$HN(S, []);
				}
				restoreSnapshot(S) {
					const I = this.getUriComparisonKey(S.resource);
					if (this.a.has(I)) {
						const T = this.a.get(I);
						T.restoreSnapshot(S),
							!T.hasPastElements() &&
								!T.hasFutureElements() &&
								(T.dispose(), this.a.delete(I));
					}
					a && this.e("restoreSnapshot");
				}
				getElements(S) {
					const I = this.getUriComparisonKey(S);
					return this.a.has(I)
						? this.a.get(I).getElements()
						: { past: [], future: [] };
				}
				k(S) {
					if (!S) return [null, null];
					let I = null,
						T = null;
					for (const [P, k] of this.a) {
						const L = k.getClosestPastElement();
						L &&
							L.sourceId === S &&
							(!I || L.sourceOrder > I.sourceOrder) &&
							((I = L), (T = P));
					}
					return [I, T];
				}
				canUndo(S) {
					if (S instanceof u.$JN) {
						const [, T] = this.k(S.id);
						return !!T;
					}
					const I = this.getUriComparisonKey(S);
					return this.a.has(I) ? this.a.get(I).hasPastElements() : !1;
				}
				l(S, I) {
					(0, t.$4)(S);
					for (const T of I.strResources) this.removeElements(T);
					this.d.error(S);
				}
				m(S) {
					for (const I of S.editStacks)
						if (I.locked) throw new Error("Cannot acquire edit stack lock");
					for (const I of S.editStacks) I.locked = !0;
					return () => {
						for (const I of S.editStacks) I.locked = !1;
					};
				}
				n(S, I, T, P, k) {
					const L = this.m(T);
					let D;
					try {
						D = I();
					} catch (M) {
						return L(), P.dispose(), this.l(M, S);
					}
					return D
						? D.then(
								() => (L(), P.dispose(), k()),
								(M) => (L(), P.dispose(), this.l(M, S)),
							)
						: (L(), P.dispose(), k());
				}
				async o(S) {
					if (typeof S.actual.prepareUndoRedo > "u") return i.$1c.None;
					const I = S.actual.prepareUndoRedo();
					return typeof I > "u" ? i.$1c.None : I;
				}
				p(S, I) {
					if (
						S.actual.type !== u.UndoRedoElementType.Workspace ||
						typeof S.actual.prepareUndoRedo > "u"
					)
						return I(i.$1c.None);
					const T = S.actual.prepareUndoRedo();
					return T
						? (0, i.$Uc)(T)
							? I(T)
							: T.then((P) => I(P))
						: I(i.$1c.None);
				}
				q(S) {
					const I = [];
					for (const T of S.strResources) I.push(this.a.get(T) || l);
					return new s(I);
				}
				s(S, I, T, P) {
					if (I.canSplit())
						return this.g(I, T), this.d.warn(P), new $(this.A(S, 0, !0));
					for (const k of I.strResources) this.removeElements(k);
					return this.d.warn(P), new $();
				}
				t(S, I, T, P) {
					if (I.removedResources)
						return this.s(
							S,
							I,
							I.removedResources,
							C.localize(
								2417,
								null,
								I.label,
								I.removedResources.createMessage(),
							),
						);
					if (P && I.invalidatedResources)
						return this.s(
							S,
							I,
							I.invalidatedResources,
							C.localize(
								2418,
								null,
								I.label,
								I.invalidatedResources.createMessage(),
							),
						);
					const k = [];
					for (const D of T.editStacks)
						D.getClosestPastElement() !== I && k.push(D.resourceLabel);
					if (k.length > 0)
						return this.s(
							S,
							I,
							null,
							C.localize(2419, null, I.label, k.join(", ")),
						);
					const L = [];
					for (const D of T.editStacks) D.locked && L.push(D.resourceLabel);
					return L.length > 0
						? this.s(S, I, null, C.localize(2420, null, I.label, L.join(", ")))
						: T.isValid()
							? null
							: this.s(S, I, null, C.localize(2421, null, I.label));
				}
				u(S, I, T) {
					const P = this.q(I),
						k = this.t(S, I, P, !1);
					return k ? k.returnValue : this.w(S, I, P, T);
				}
				v(S) {
					if (!S.groupId) return !1;
					for (const [, I] of this.a) {
						const T = I.getClosestPastElement();
						if (T) {
							if (T === S) {
								const P = I.getSecondClosestPastElement();
								if (P && P.groupId === S.groupId) return !0;
							}
							if (T.groupId === S.groupId) return !0;
						}
					}
					return !1;
				}
				async w(S, I, T, P) {
					if (I.canSplit() && !this.v(I)) {
						let D;
						(function (A) {
							(A[(A.All = 0)] = "All"),
								(A[(A.This = 1)] = "This"),
								(A[(A.Cancel = 2)] = "Cancel");
						})(D || (D = {}));
						const { result: M } = await this.c.prompt({
							type: E.default.Info,
							message: C.localize(2422, null, I.label),
							buttons: [
								{
									label: C.localize(2423, null, T.editStacks.length),
									run: () => D.All,
								},
								{ label: C.localize(2424, null), run: () => D.This },
							],
							cancelButton: { run: () => D.Cancel },
						});
						if (M === D.Cancel) return;
						if (M === D.This) return this.g(I, null), this.A(S, 0, !0);
						const N = this.t(S, I, T, !1);
						if (N) return N.returnValue;
						P = !0;
					}
					let k;
					try {
						k = await this.o(I);
					} catch (D) {
						return this.l(D, I);
					}
					const L = this.t(S, I, T, !0);
					if (L) return k.dispose(), L.returnValue;
					for (const D of T.editStacks) D.moveBackward(I);
					return this.n(
						I,
						() => I.actual.undo(),
						T,
						k,
						() => this.z(I.groupId, P),
					);
				}
				x(S, I, T) {
					if (!I.isValid) {
						S.flushAllElements();
						return;
					}
					if (S.locked) {
						const P = C.localize(2425, null, I.label);
						this.d.warn(P);
						return;
					}
					return this.p(
						I,
						(P) => (
							S.moveBackward(I),
							this.n(
								I,
								() => I.actual.undo(),
								new s([S]),
								P,
								() => this.z(I.groupId, T),
							)
						),
					);
				}
				y(S) {
					if (!S) return [null, null];
					let I = null,
						T = null;
					for (const [P, k] of this.a) {
						const L = k.getClosestPastElement();
						L &&
							L.groupId === S &&
							(!I || L.groupOrder > I.groupOrder) &&
							((I = L), (T = P));
					}
					return [I, T];
				}
				z(S, I) {
					if (!S) return;
					const [, T] = this.y(S);
					if (T) return this.A(T, 0, I);
				}
				undo(S) {
					if (S instanceof u.$JN) {
						const [, I] = this.k(S.id);
						return I ? this.A(I, S.id, !1) : void 0;
					}
					return typeof S == "string"
						? this.A(S, 0, !1)
						: this.A(this.getUriComparisonKey(S), 0, !1);
				}
				A(S, I = 0, T) {
					if (!this.a.has(S)) return;
					const P = this.a.get(S),
						k = P.getClosestPastElement();
					if (!k) return;
					if (k.groupId) {
						const [D, M] = this.y(k.groupId);
						if (k !== D && M) return this.A(M, I, T);
					}
					if ((k.sourceId !== I || k.confirmBeforeUndo) && !T)
						return this.B(S, I, k);
					try {
						return k.type === u.UndoRedoElementType.Workspace
							? this.u(S, k, T)
							: this.x(P, k, T);
					} finally {
						a && this.e("undo");
					}
				}
				async B(S, I, T) {
					if (
						(
							await this.c.confirm({
								message: C.localize(2426, null, T.label),
								primaryButton: C.localize(2427, null),
								cancelButton: C.localize(2428, null),
							})
						).confirmed
					)
						return this.A(S, I, !0);
				}
				C(S) {
					if (!S) return [null, null];
					let I = null,
						T = null;
					for (const [P, k] of this.a) {
						const L = k.getClosestFutureElement();
						L &&
							L.sourceId === S &&
							(!I || L.sourceOrder < I.sourceOrder) &&
							((I = L), (T = P));
					}
					return [I, T];
				}
				canRedo(S) {
					if (S instanceof u.$JN) {
						const [, T] = this.C(S.id);
						return !!T;
					}
					const I = this.getUriComparisonKey(S);
					return this.a.has(I) ? this.a.get(I).hasFutureElements() : !1;
				}
				D(S, I, T, P) {
					if (I.canSplit())
						return this.h(I, T), this.d.warn(P), new $(this.K(S));
					for (const k of I.strResources) this.removeElements(k);
					return this.d.warn(P), new $();
				}
				E(S, I, T, P) {
					if (I.removedResources)
						return this.D(
							S,
							I,
							I.removedResources,
							C.localize(
								2429,
								null,
								I.label,
								I.removedResources.createMessage(),
							),
						);
					if (P && I.invalidatedResources)
						return this.D(
							S,
							I,
							I.invalidatedResources,
							C.localize(
								2430,
								null,
								I.label,
								I.invalidatedResources.createMessage(),
							),
						);
					const k = [];
					for (const D of T.editStacks)
						D.getClosestFutureElement() !== I && k.push(D.resourceLabel);
					if (k.length > 0)
						return this.D(
							S,
							I,
							null,
							C.localize(2431, null, I.label, k.join(", ")),
						);
					const L = [];
					for (const D of T.editStacks) D.locked && L.push(D.resourceLabel);
					return L.length > 0
						? this.D(S, I, null, C.localize(2432, null, I.label, L.join(", ")))
						: T.isValid()
							? null
							: this.D(S, I, null, C.localize(2433, null, I.label));
				}
				F(S, I) {
					const T = this.q(I),
						P = this.E(S, I, T, !1);
					return P ? P.returnValue : this.G(S, I, T);
				}
				async G(S, I, T) {
					let P;
					try {
						P = await this.o(I);
					} catch (L) {
						return this.l(L, I);
					}
					const k = this.E(S, I, T, !0);
					if (k) return P.dispose(), k.returnValue;
					for (const L of T.editStacks) L.moveForward(I);
					return this.n(
						I,
						() => I.actual.redo(),
						T,
						P,
						() => this.J(I.groupId),
					);
				}
				H(S, I) {
					if (!I.isValid) {
						S.flushAllElements();
						return;
					}
					if (S.locked) {
						const T = C.localize(2434, null, I.label);
						this.d.warn(T);
						return;
					}
					return this.p(
						I,
						(T) => (
							S.moveForward(I),
							this.n(
								I,
								() => I.actual.redo(),
								new s([S]),
								T,
								() => this.J(I.groupId),
							)
						),
					);
				}
				I(S) {
					if (!S) return [null, null];
					let I = null,
						T = null;
					for (const [P, k] of this.a) {
						const L = k.getClosestFutureElement();
						L &&
							L.groupId === S &&
							(!I || L.groupOrder < I.groupOrder) &&
							((I = L), (T = P));
					}
					return [I, T];
				}
				J(S) {
					if (!S) return;
					const [, I] = this.I(S);
					if (I) return this.K(I);
				}
				redo(S) {
					if (S instanceof u.$JN) {
						const [, I] = this.C(S.id);
						return I ? this.K(I) : void 0;
					}
					return typeof S == "string"
						? this.K(S)
						: this.K(this.getUriComparisonKey(S));
				}
				K(S) {
					if (!this.a.has(S)) return;
					const I = this.a.get(S),
						T = I.getClosestFutureElement();
					if (T) {
						if (T.groupId) {
							const [P, k] = this.I(T.groupId);
							if (T !== P && k) return this.K(k);
						}
						try {
							return T.type === u.UndoRedoElementType.Workspace
								? this.F(S, T)
								: this.H(I, T);
						} finally {
							a && this.e("redo");
						}
					}
				}
				rebaseStack(S, I, T, P, k, L, D, M) {
					const N = this.getUriComparisonKey(S);
					if (!this.a.has(N)) return;
					this.a.get(N).rebase(I, T, P, k, L, D, M);
				}
			};
			(e.$bvc = y), (e.$bvc = y = Ne([j(0, d.$GO), j(1, r.$4N)], y));
			class $ {
				constructor(S) {
					this.returnValue = S;
				}
			}
			(0, m.$lK)(u.$GN, y, m.InstantiationType.Delayed);
		},
	),
		