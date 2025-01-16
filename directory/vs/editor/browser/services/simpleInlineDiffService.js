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
		