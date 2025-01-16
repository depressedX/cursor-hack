define(
			de[3923],
			he([
				1, 0, 167, 45, 219, 262, 395, 351, 209, 67, 9, 17, 64, 18, 44, 19, 47,
				506, 2404,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.EditTrail = void 0);
				const f = 5;
				let b = class extends E.ComposerCapability {
					constructor(l, y, $, v, S, I, T, P) {
						super(l, y),
							(this.composerDataService = $),
							(this.composerService = v),
							(this.composerViewService = S),
							(this.reactiveStorageService = I),
							(this.modelService = T),
							(this.editorService = P),
							(this.priority = 1),
							(this.type =
								t.ComposerCapabilityRequest_ComposerCapabilityType.EDIT_TRAIL),
							(this.name =
								E.capabilityTypeLabels[
									t.ComposerCapabilityRequest_ComposerCapabilityType.EDIT_TRAIL
								]),
							(this.schema = d.editTrailSchema),
							(this.modelTrackers = new Map()),
							(this.decorationOptions = {
								description: "edit-trail-decoration",
								stickiness:
									h.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
								isWholeLine: !0,
								className: "edit-trail-decoration",
							}),
							(this.finalStates = new Map()),
							(this.dirtyFiles = new Set()),
							([this.state, this.setState] = (0,
							E.createEditTrailParamsSignal)()),
							this.D(
								this.reactiveStorageService.onChangeEffectManuallyDisposed({
									deps: [() => this.state().isTrailing],
									onChange: ({ deps: k, prevDeps: L }) => {
										const [D] = k,
											[M] = L ?? [];
										D !== M && (D ? this.startTrailing() : this.stopTrailing());
									},
								}),
							),
							this.D(
								this.modelService.onModelAdded((k) => {
									this.state().isTrailing && this.trackModel(k);
								}),
							),
							this.D(
								this.modelService.onModelRemoved((k) => {
									this.disposeTracker(k.uri);
								}),
							),
							this.D(
								this.composerViewService.onDidHide(() => {
									this.state().isTrailing && this.setState("isTrailing", !1);
								}),
							);
					}
					silentOnStartSubmitChat(l) {
						return !1;
					}
					async onStartSubmitChatReturnShouldStop(l) {
						return (
							!this.state().isTrailing ||
								l.isCapabilityIteration ||
								(await this.stopTrailing(), this.setState("isTrailing", !1)),
							!1
						);
					}
					silentRunInPlaceMutateRequestBeforeSubmit(l) {
						return !0;
					}
					async runInPlaceMutateRequestBeforeSubmit(l, y) {
						if (
							!(
								!this.composerDataService.getComposerData(this.composerId) ||
								!l.conversation
							)
						)
							for (let v = 0; v < l.conversation.length; v++) {
								const S = l.conversation[v];
								if (!S) continue;
								const I = S.context;
								if (!I || !I.editTrailContexts) continue;
								const T = I.editTrailContexts.map((P) => ({
									uniqueId: (0, p.$9g)(),
									editTrailSorted: P.editTrailSorted.map((k) => {
										const L = u.URI.revive(k.uri).toString(),
											D = P.finalStates[L],
											M = D
												? this.getContextLines(D, k.range.startLine, f)
												: "";
										return {
											relativeWorkspacePath: L,
											contextLines: M,
											text: k.text,
											textRange: k.textRange,
											initialRange: k.initialRange,
											range: k.range,
										};
									}),
								}));
								l.conversation[v].editTrailContexts = T;
							}
					}
					startTrailing() {
						this.finalStates.clear();
						for (const l of this.modelService.getModels()) this.trackModel(l);
					}
					trackModel(l) {
						const y = l.uri.toString();
						if (this.modelTrackers.has(y)) return;
						const $ = [],
							v = {
								model: l,
								decorations: [],
								originalContent: l.getValue(),
								dispose: () => {
									$.forEach((I) => I.dispose());
									const S = v.decorations.map((I) => I.id);
									S.length && l.deltaDecorations(S, []);
								},
							};
						$.push(
							l.onDidChangeContent((S) => {
								this.state().hasModifiedAnyModel ||
									this.setState("hasModifiedAnyModel", !0);
								const T = l.uri.toString();
								this.dirtyFiles.has(T) || this.dirtyFiles.add(T);
								for (const P of S.changes)
									if (P.text === "") {
										const k = a.$iL.lift(P.range);
										v.decorations = v.decorations.filter((L) => {
											const D = l.getDecorationRange(L.id);
											return D
												? k.containsRange(D)
													? (l.deltaDecorations([L.id], []), !1)
													: !0
												: !1;
										});
									}
								for (const P of S.changes)
									if (P.text !== "") {
										const k = P.text.split(`
`),
											L = new a.$iL(
												P.range.startLineNumber,
												1,
												P.range.startLineNumber + k.length - 1,
												l.getLineMaxColumn(
													P.range.startLineNumber + k.length - 1,
												),
											);
										if (
											v.decorations.find((N) => {
												const A = l.getDecorationRange(N.id);
												return A
													? A.startLineNumber <= L.startLineNumber &&
															A.endLineNumber >= L.endLineNumber
													: !1;
											})
										)
											continue;
										const M = l.deltaDecorations(
											[],
											[{ range: L, options: this.decorationOptions }],
										)[0];
										v.decorations.push({
											id: M,
											timestamp: Date.now(),
											uri: l.uri,
											initialRange: L,
										});
									}
							}),
						),
							this.modelTrackers.set(y, v);
					}
					disposeTracker(l) {
						const y = this.modelTrackers.get(l.toString());
						y &&
							(y.dispose(),
							this.modelTrackers.delete(l.toString()),
							this.dirtyFiles.delete(l.toString()));
					}
					async stopTrailing() {
						const l = [],
							y = new Map();
						this.finalStates.clear(), this.setState("hasModifiedAnyModel", !1);
						for (const [T, P] of this.modelTrackers) {
							const k = P.model;
							for (const L of P.decorations) {
								const D = k.getDecorationRange(L.id);
								D &&
									l.push({
										uri: L.uri,
										timestamp: L.timestamp,
										range: {
											startLine: D.startLineNumber,
											endLineInclusive: D.endLineNumber,
										},
										initialRange: {
											startLine: L.initialRange.startLineNumber,
											endLineInclusive: L.initialRange.endLineNumber,
										},
										text: k.getValueInRange({
											startLineNumber: D.startLineNumber,
											startColumn: 1,
											endLineNumber: D.endLineNumber,
											endColumn: k.getLineMaxColumn(D.endLineNumber),
										}),
										textRange: {
											startLine: D.startLineNumber,
											endLineInclusive: D.endLineNumber,
										},
										contextLines: "",
									});
							}
							if (this.dirtyFiles.has(T)) {
								this.finalStates.set(T, k.getValue()),
									this.disposeTracker(u.URI.parse(T)),
									k.pushEditOperations(
										null,
										[
											{
												range: new a.$iL(
													1,
													1,
													k.getLineCount(),
													k.getLineMaxColumn(k.getLineCount()),
												),
												text: P.originalContent,
											},
										],
										() => null,
									);
								const L = this.editorService.findEditors(k.uri)[0];
								L &&
									(await this.editorService.save(L, {
										reason: n.SaveReason.EXPLICIT,
									}));
							}
							y.set(T, k);
						}
						l.sort((T, P) => T.timestamp - P.timestamp);
						const $ = [];
						for (const T of l) {
							const P = $[$.length - 1];
							if (!P || !g.$dh.isEqual(u.URI.from(P.uri), u.URI.from(T.uri))) {
								$.push(T);
								continue;
							}
							(T.range.startLine <= P.range.endLineInclusive &&
								T.range.endLineInclusive >= P.range.startLine) ||
							Math.abs(T.range.startLine - P.range.endLineInclusive) <= 1 ||
							Math.abs(P.range.startLine - T.range.endLineInclusive) <= 1
								? y.get(T.uri.toString()) &&
									((P.range = {
										startLine: Math.min(P.range.startLine, T.range.startLine),
										endLineInclusive: Math.max(
											P.range.endLineInclusive,
											T.range.endLineInclusive,
										),
									}),
									T.range.startLine < P.range.startLine
										? (P.text = `${T.text}
${P.text}`)
										: (P.text += `
${T.text}`))
								: $.push(T);
						}
						const v = new Map(),
							S = [];
						for (const T of $) {
							const P = this.finalStates.get(T.uri.toString());
							if (P) {
								v.set(T.uri.toString(), P);
								const k = T.text.split(`
`).length,
									L = this.getContextLines(P, T.range.startLine, k, f),
									D = Math.min(f, T.range.startLine - 1),
									M = { startLine: D + 1, endLineInclusive: D + k };
								S.push({ ...T, contextLines: L, textRange: M });
							} else S.push(T);
						}
						for (const T of S) {
							const P = [];
							if (
								(P.push("<user_edit_instructions>"),
								P.push(
									`In file ${T.uri.toString()} at line ${T.initialRange.startLine}:`,
								),
								v.has(T.uri.toString()))
							) {
								const k = T.contextLines.split(`
`),
									L = k.slice(0, T.textRange.startLine - 1),
									D = k.slice(T.textRange.endLineInclusive);
								P.push(
									L.join(`
`),
								),
									P.push(">>>>>"),
									P.push(T.text),
									P.push("<<<<<"),
									P.push(
										D.join(`
`),
									);
							}
							P.push("</user_edit_instructions>"),
								P.push("---"),
								console.log(
									P.join(`
`),
								),
								console.log("text:", T.text),
								console.log("contextLines:", T.contextLines),
								console.log("textRange:", T.textRange);
						}
						const I = {
							files: Array.from(v.keys()).map((T) => u.URI.parse(T)),
							editTrailSorted: S,
							finalStates: Object.fromEntries(v),
							uniqueId: (0, p.$9g)(),
						};
						this.finalStates.clear(), this.dirtyFiles.clear();
						for (const [T] of this.modelTrackers)
							this.disposeTracker(u.URI.parse(T));
						if (I.editTrailSorted.length === 0) {
							this.setState("hasModifiedAnyModel", !1);
							return;
						}
						this.composerService.addContext({
							composerId: this.composerId,
							contextType: "editTrailContexts",
							value: I,
							uuid: I.uniqueId,
						});
					}
					dispose() {
						this.finalStates.clear();
						for (const [l] of this.modelTrackers)
							this.disposeTracker(u.URI.parse(l));
						super.dispose();
					}
					getContextLines(l, y, $, v = 5) {
						const S = l.split(`
`),
							I = Math.max(0, y - v - 1),
							T = Math.min(S.length, y + $ + v - 1);
						return S.slice(I, T).join(`
`);
					}
				};
				(e.EditTrail = b),
					(e.EditTrail = b =
						Ne(
							[
								(0, C.autoCancellableAndStatusUpdater)(),
								j(2, m.IComposerDataService),
								j(3, w.IComposerService),
								j(4, o.IComposerViewsService),
								j(5, i.$0zb),
								j(6, r.$QO),
								j(7, c.$IY),
							],
							b,
						)),
					(0, E.registerComposerCapability)(
						t.ComposerCapabilityRequest_ComposerCapabilityType.EDIT_TRAIL,
						b,
					);
			},
		),
		