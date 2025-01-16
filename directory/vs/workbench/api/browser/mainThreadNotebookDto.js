define(de[1027], he([1, 0, 70, 611]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.NotebookDto = void 0),
				(t = mt(t));
			var w;
			(function (E) {
				function C(f) {
					return { mime: f.mime, valueBytes: f.data };
				}
				E.toNotebookOutputItemDto = C;
				function d(f) {
					return {
						outputId: f.outputId,
						metadata: f.metadata,
						items: f.outputs.map(C),
					};
				}
				E.toNotebookOutputDto = d;
				function m(f) {
					return {
						cellKind: f.cellKind,
						language: f.language,
						mime: f.mime,
						source: f.source,
						internalMetadata: f.internalMetadata,
						metadata: f.metadata,
						outputs: f.outputs.map(d),
					};
				}
				E.toNotebookCellDataDto = m;
				function r(f) {
					return { metadata: f.metadata, cells: f.cells.map(m) };
				}
				E.toNotebookDataDto = r;
				function u(f) {
					return { mime: f.mime, data: f.valueBytes };
				}
				E.fromNotebookOutputItemDto = u;
				function a(f) {
					return {
						outputId: f.outputId,
						metadata: f.metadata,
						outputs: f.items.map(u),
					};
				}
				E.fromNotebookOutputDto = a;
				function h(f) {
					return {
						cellKind: f.cellKind,
						language: f.language,
						mime: f.mime,
						source: f.source,
						outputs: f.outputs.map(a),
						metadata: f.metadata,
						internalMetadata: f.internalMetadata,
					};
				}
				E.fromNotebookCellDataDto = h;
				function c(f) {
					return { metadata: f.metadata, cells: f.cells.map(h) };
				}
				E.fromNotebookDataDto = c;
				function n(f) {
					return {
						handle: f.handle,
						uri: f.uri,
						source: f.textBuffer.getLinesContent(),
						eol: f.textBuffer.getEOL(),
						language: f.language,
						cellKind: f.cellKind,
						outputs: f.outputs.map(d),
						metadata: f.metadata,
						internalMetadata: f.internalMetadata,
					};
				}
				E.toNotebookCellDto = n;
				function g(f) {
					return f.editType === i.CellExecutionUpdateType.Output
						? {
								editType: f.editType,
								cellHandle: f.cellHandle,
								append: f.append,
								outputs: f.outputs.map(a),
							}
						: f.editType === i.CellExecutionUpdateType.OutputItems
							? {
									editType: f.editType,
									append: f.append,
									outputId: f.outputId,
									items: f.items.map(u),
								}
							: f;
				}
				E.fromCellExecuteUpdateDto = g;
				function p(f) {
					return f;
				}
				E.fromCellExecuteCompleteDto = p;
				function o(f) {
					return f.editType === t.CellEditType.Replace
						? {
								editType: f.editType,
								index: f.index,
								count: f.count,
								cells: f.cells.map(h),
							}
						: f;
				}
				E.fromCellEditOperationDto = o;
			})(w || (e.NotebookDto = w = {}));
		}),
		define(
			de[3463],
			he([
				1, 0, 76, 33, 6, 3, 162, 28, 9, 31, 34, 1027, 991, 161, 101, 622, 88,
				197, 24,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Cpc = void 0);
				let b = class {
					constructor(l, y, $, v) {
						(this.f = y),
							(this.g = $),
							(this.h = v),
							(this.a = new E.$Zc()),
							(this.c = new Map()),
							(this.d = new Map()),
							(this.b = l.getProxy(p.$mbb.ExtHostNotebook));
					}
					dispose() {
						this.a.dispose(), (0, E.$Vc)(this.c.values());
					}
					$registerNotebookSerializer(l, y, $, v, S) {
						const I = new E.$Zc();
						I.add(
							this.f.registerNotebookSerializer($, y, {
								options: v,
								dataToNotebook: async (T) => {
									const P = new C.$le();
									let k;
									if (T.byteLength === 0 && $ === "interactive")
										k = a.NotebookDto.fromNotebookDataDto({
											cells: [],
											metadata: {},
										});
									else {
										const L = await this.b.$dataToNotebook(
											l,
											T,
											i.CancellationToken.None,
										);
										k = a.NotebookDto.fromNotebookDataDto(L.value);
									}
									return (
										this.h.trace(
											`[NotebookSerializer] dataToNotebook DONE after ${P.elapsed()}ms`,
											{ viewType: $, extensionId: y.id.value },
										),
										k
									);
								},
								notebookToData: (T) => {
									const P = new C.$le(),
										k = this.b.$notebookToData(
											l,
											new g.$uO(a.NotebookDto.toNotebookDataDto(T)),
											i.CancellationToken.None,
										);
									return (
										this.h.trace(
											`[NotebookSerializer] notebookToData DONE after ${P.elapsed()}`,
											{ viewType: $, extensionId: y.id.value },
										),
										k
									);
								},
								save: async (T, P, k, L) => ({
									...(await this.b.$saveNotebook(l, T, P, k, L)),
									children: void 0,
									resource: T,
								}),
								searchInNotebooks: async (T, P, k) => {
									const L = this.f.getContributedNotebookType($);
									if (!L) return { results: [], limitHit: !1 };
									const M = L.selectors.map((B) => (B.include || B).toString());
									if (!M.length) return { results: [], limitHit: !1 };
									const N = (0, f.$Lb)([
											{ isFromSettings: !1, filenamePatterns: M },
											...(k.get($) ?? []),
										]),
										A = Array.from(k.keys()).flatMap((B) =>
											B !== $ ? (k.get(B) ?? []) : [],
										),
										R = await this.b.$searchInNotebooks(l, T, N, A, P);
									return {
										results: R.results.map((B) => ({
											resource: m.URI.revive(B.resource),
											cellResults: B.cellResults.map((z) => (0, o.$ji)(z)),
										})),
										limitHit: R.limitHit,
									};
								},
							}),
						),
							S && I.add(this.f.registerContributedNotebookType($, S)),
							this.c.set(l, I),
							this.h.trace(
								"[NotebookSerializer] registered notebook serializer",
								{ viewType: $, extensionId: y.id.value },
							);
					}
					$unregisterNotebookSerializer(l) {
						this.c.get(l)?.dispose(), this.c.delete(l);
					}
					$emitCellStatusBarEvent(l) {
						const y = this.d.get(l);
						y instanceof w.$re && y.fire(void 0);
					}
					async $registerNotebookCellStatusBarItemProvider(l, y, $) {
						const v = this,
							S = {
								async provideCellStatusBarItems(T, P, k) {
									const L = await v.b.$provideNotebookCellStatusBarItems(
										l,
										T,
										P,
										k,
									);
									return {
										items: L?.items ?? [],
										dispose() {
											L && v.b.$releaseNotebookCellStatusBarItems(L.cacheId);
										},
									};
								},
								viewType: $,
							};
						if (typeof y == "number") {
							const T = new w.$re();
							this.d.set(y, T), (S.onDidChangeStatusBarItems = T.event);
						}
						const I = this.g.registerCellStatusBarItemProvider(S);
						this.d.set(l, I);
					}
					async $unregisterNotebookCellStatusBarItemProvider(l, y) {
						const $ = (v) => {
							this.d.get(v) && (this.d.get(v)?.dispose(), this.d.delete(v));
						};
						$(l), typeof y == "number" && $(y);
					}
				};
				(e.$Cpc = b),
					(e.$Cpc = b =
						Ne(
							[
								(0, n.$tmc)(p.$lbb.MainThreadNotebook),
								j(1, c.$MIb),
								j(2, h.$Bpc),
								j(3, u.$ik),
							],
							b,
						)),
					r.$fk.registerCommand("_executeDataToNotebook", async (s, ...l) => {
						const [y, $] = l;
						(0, d.$vg)(typeof y == "string", "string"),
							(0, d.$vg)($ instanceof t.$Te, "VSBuffer");
						const S = await s.get(c.$MIb).withNotebookDataProvider(y);
						if (!(S instanceof c.$NIb)) return;
						const I = await S.serializer.dataToNotebook($);
						return new g.$uO(a.NotebookDto.toNotebookDataDto(I));
					}),
					r.$fk.registerCommand("_executeNotebookToData", async (s, ...l) => {
						const [y, $] = l;
						(0, d.$vg)(typeof y == "string", "string"),
							(0, d.$vg)(typeof $ == "object");
						const S = await s.get(c.$MIb).withNotebookDataProvider(y);
						if (!(S instanceof c.$NIb)) return;
						const I = a.NotebookDto.fromNotebookDataDto($.value);
						return await S.serializer.notebookToData(I);
					});
			},
		),
		define(
			de[3464],
			he([
				1, 0, 24, 33, 29, 6, 3, 9, 61, 1027, 101, 293, 190, 243, 88, 161, 15,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Dpc = void 0);
				class o {
					get preloadUris() {
						return this.b.map((l) => l.uri);
					}
					get preloadProvides() {
						return this.b.flatMap((l) => l.provides);
					}
					constructor(l, y) {
						(this.c = y),
							(this.a = new E.$re()),
							(this.onDidChange = this.a.event),
							(this.id = l.id),
							(this.viewType = l.notebookType),
							(this.extension = l.extensionId),
							(this.implementsInterrupt = l.supportsInterrupt ?? !1),
							(this.label = l.label),
							(this.description = l.description),
							(this.detail = l.detail),
							(this.supportedLanguages = (0, t.$Pb)(l.supportedLanguages)
								? l.supportedLanguages
								: y.getRegisteredLanguageIds()),
							(this.implementsExecutionOrder = l.supportsExecutionOrder ?? !1),
							(this.hasVariableProvider = l.hasVariableProvider ?? !1),
							(this.localResourceRoot = d.URI.revive(l.extensionLocation)),
							(this.b =
								l.preloads?.map(($) => ({
									uri: d.URI.revive($.uri),
									provides: $.provides,
								})) ?? []);
					}
					update(l) {
						const y = Object.create(null);
						l.label !== void 0 && ((this.label = l.label), (y.label = !0)),
							l.description !== void 0 &&
								((this.description = l.description), (y.description = !0)),
							l.detail !== void 0 &&
								((this.detail = l.detail), (y.detail = !0)),
							l.supportedLanguages !== void 0 &&
								((this.supportedLanguages = (0, t.$Pb)(l.supportedLanguages)
									? l.supportedLanguages
									: this.c.getRegisteredLanguageIds()),
								(y.supportedLanguages = !0)),
							l.supportsExecutionOrder !== void 0 &&
								((this.implementsExecutionOrder = l.supportsExecutionOrder),
								(y.hasExecutionOrder = !0)),
							l.supportsInterrupt !== void 0 &&
								((this.implementsInterrupt = l.supportsInterrupt),
								(y.hasInterruptHandler = !0)),
							l.hasVariableProvider !== void 0 &&
								((this.hasVariableProvider = l.hasVariableProvider),
								(y.hasVariableProvider = !0)),
							this.a.fire(y);
					}
				}
				class f {
					constructor(l) {
						this.notebookType = l;
					}
				}
				let b = class {
					constructor(l, y, $, v, S, I) {
						(this.k = y),
							(this.l = $),
							(this.m = v),
							(this.n = S),
							(this.a = new C.$0c()),
							(this.b = new C.$Zc()),
							(this.c = new Map()),
							(this.d = new Map()),
							(this.f = new Map()),
							(this.g = new Map()),
							(this.i = new Map()),
							(this.j = new Map()),
							(this.r = 0),
							(this.s = new Map()),
							(this.h = l.getProxy(n.$mbb.ExtHostNotebookKernels)),
							I.listNotebookEditors().forEach(this.o, this),
							I.onDidAddNotebookEditor(this.o, this, this.b),
							I.onDidRemoveNotebookEditor(this.q, this, this.b),
							this.b.add(
								(0, C.$Yc)(() => {
									this.i.forEach((T) => {
										T.complete({});
									}),
										this.j.forEach((T) => T.complete());
								}),
							),
							this.b.add(
								this.m.onDidChangeExecution((T) => {
									T.type === h.NotebookExecutionType.cell &&
										this.h.$cellExecutionChanged(
											T.notebook,
											T.cellHandle,
											T.changed?.state,
										);
								}),
							);
					}
					dispose() {
						this.b.dispose();
						for (const [, l] of this.c.values()) l.dispose();
						for (const [, l] of this.d.values()) l.dispose();
						for (const [, l] of this.f.values()) l.dispose();
						this.a.dispose();
					}
					o(l) {
						const y = l.onDidReceiveMessage(($) => {
							if (!l.hasModel()) return;
							const { selected: v } = this.l.getMatchingKernel(l.textModel);
							if (v) {
								for (const [S, I] of this.c)
									if (I[0] === v) {
										this.h.$acceptKernelMessageFromRenderer(
											S,
											l.getId(),
											$.message,
										);
										break;
									}
							}
						});
						this.a.set(l, y);
					}
					q(l) {
						this.a.deleteAndDispose(l);
					}
					async $postMessage(l, y, $) {
						const v = this.c.get(l);
						if (!v) throw new Error("kernel already disposed");
						const [S] = v;
						let I = !1;
						for (const [T] of this.a)
							if (
								T.hasModel() &&
								this.l.getMatchingKernel(T.textModel).selected === S
							) {
								if (y === void 0) T.postMessage($), (I = !0);
								else if (T.getId() === y) {
									T.postMessage($), (I = !0);
									break;
								}
							}
						return I;
					}
					$receiveVariable(l, y) {
						const $ = this.s.get(l);
						$ && $.emitOne(y);
					}
					async $addKernel(l, y) {
						const $ = this,
							v = new (class extends o {
								async executeNotebookCellsRequest(T, P) {
									await $.h.$executeCells(l, T, P);
								}
								async cancelNotebookCellExecution(T, P) {
									await $.h.$cancelCells(l, T, P);
								}
								provideVariables(T, P, k, L, D) {
									const M = `${l}variables${$.r++}`;
									if ($.s.has(M)) return $.s.get(M).asyncIterable;
									const N = new p.$di();
									return (
										$.s.set(M, N),
										$.h
											.$provideVariables(l, M, T, P, k, L, D)
											.then(() => {
												N.resolve(), $.s.delete(M);
											})
											.catch((A) => {
												N.reject(A), $.s.delete(M);
											}),
										N.asyncIterable
									);
								}
							})(y, this.k),
							S = this.l.onDidChangeSelectedNotebooks((T) => {
								T.oldKernel === v.id
									? this.h.$acceptNotebookAssociation(l, T.notebook, !1)
									: T.newKernel === v.id &&
										this.h.$acceptNotebookAssociation(l, T.notebook, !0);
							}),
							I = this.l.registerKernel(v);
						this.c.set(l, [v, (0, C.$Xc)(S, I)]);
					}
					$updateKernel(l, y) {
						const $ = this.c.get(l);
						$ && $[0].update(y);
					}
					$removeKernel(l) {
						const y = this.c.get(l);
						y && (y[1].dispose(), this.c.delete(l));
					}
					$updateNotebookPriority(l, y, $) {
						const v = this.c.get(l);
						v && this.l.updateKernelNotebookAffinity(v[0], d.URI.revive(y), $);
					}
					$createExecution(l, y, $, v) {
						const S = d.URI.revive($),
							I = this.n.getNotebookTextModel(S);
						if (!I) throw new Error(`Notebook not found: ${S.toString()}`);
						const T = this.l.getMatchingKernel(I);
						if (!T.selected || T.selected.id !== y)
							throw new Error(
								`Kernel is not selected: ${T.selected?.id} !== ${y}`,
							);
						const P = this.m.createCellExecution(S, v);
						P.confirm(), this.i.set(l, P);
					}
					$updateExecution(l, y) {
						const $ = y.value;
						try {
							this.i
								.get(l)
								?.update($.map(r.NotebookDto.fromCellExecuteUpdateDto));
						} catch (v) {
							(0, w.$4)(v);
						}
					}
					$completeExecution(l, y) {
						try {
							this.i
								.get(l)
								?.complete(r.NotebookDto.fromCellExecuteCompleteDto(y.value));
						} catch ($) {
							(0, w.$4)($);
						} finally {
							this.i.delete(l);
						}
					}
					$createNotebookExecution(l, y, $) {
						const v = d.URI.revive($),
							S = this.n.getNotebookTextModel(v);
						if (!S) throw new Error(`Notebook not found: ${v.toString()}`);
						const I = this.l.getMatchingKernel(S);
						if (!I.selected || I.selected.id !== y)
							throw new Error(
								`Kernel is not selected: ${I.selected?.id} !== ${y}`,
							);
						const T = this.m.createExecution(v);
						T.confirm(), this.j.set(l, T);
					}
					$beginNotebookExecution(l) {
						try {
							this.j.get(l)?.begin();
						} catch (y) {
							(0, w.$4)(y);
						}
					}
					$completeNotebookExecution(l) {
						try {
							this.j.get(l)?.complete();
						} catch (y) {
							(0, w.$4)(y);
						} finally {
							this.j.delete(l);
						}
					}
					async $addKernelDetectionTask(l, y) {
						const $ = new f(y),
							v = this.l.registerNotebookKernelDetectionTask($);
						this.d.set(l, [$, v]);
					}
					$removeKernelDetectionTask(l) {
						const y = this.d.get(l);
						y && (y[1].dispose(), this.d.delete(l));
					}
					async $addKernelSourceActionProvider(l, y, $) {
						const v = {
							viewType: $,
							provideKernelSourceActions: async () =>
								(
									await this.h.$provideKernelSourceActions(
										l,
										i.CancellationToken.None,
									)
								).map((T) => {
									let P = T.documentation;
									return (
										T.documentation &&
											typeof T.documentation != "string" &&
											(P = d.URI.revive(T.documentation)),
										{
											label: T.label,
											command: T.command,
											description: T.description,
											detail: T.detail,
											documentation: P,
										}
									);
								}),
						};
						if (typeof y == "number") {
							const I = new E.$re();
							this.g.set(y, I), (v.onDidChangeSourceActions = I.event);
						}
						const S = this.l.registerKernelSourceActionProvider($, v);
						this.f.set(l, [v, S]);
					}
					$removeKernelSourceActionProvider(l, y) {
						const $ = this.f.get(l);
						$ && ($[1].dispose(), this.f.delete(l)),
							typeof y == "number" && this.g.delete(y);
					}
					$emitNotebookKernelSourceActionsChangeEvent(l) {
						const y = this.g.get(l);
						y instanceof E.$re && y.fire(void 0);
					}
					$variablesUpdated(l) {
						this.l.notifyVariablesChange(d.URI.revive(l));
					}
				};
				(e.$Dpc = b),
					(e.$Dpc = b =
						Ne(
							[
								(0, u.$tmc)(n.$lbb.MainThreadNotebookKernels),
								j(1, m.$nM),
								j(2, c.$f6),
								j(3, h.$d6),
								j(4, g.$MIb),
								j(5, a.$n5b),
							],
							b,
						));
			},
		),
		define(
			de[1028],
			he([1, 0, 24, 29, 94, 59, 266, 37, 28, 9, 47, 109, 22, 211, 70]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				var g, p, o, f, b, s, l, y, $, v, S, I, T, P, k, L, D;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.InlineEditTriggerKind =
						e.$Ndb =
						e.KeywordRecognitionStatus =
						e.TextToSpeechStatus =
						e.SpeechToTextStatus =
						e.RelatedInformationType =
						e.$Mdb =
						e.$Ldb =
						e.$Kdb =
						e.$Jdb =
						e.$Idb =
						e.$Hdb =
						e.$Gdb =
						e.$Fdb =
						e.LanguageModelChatMessageRole =
						e.$Edb =
						e.$Ddb =
						e.ChatResponseReferencePartStatusKind =
						e.ChatLocation =
						e.$Cdb =
						e.$Bdb =
						e.$Adb =
						e.$zdb =
						e.$ydb =
						e.$xdb =
						e.$wdb =
						e.$vdb =
						e.$udb =
						e.$tdb =
						e.$sdb =
						e.$rdb =
						e.$qdb =
						e.$pdb =
						e.$odb =
						e.$ndb =
						e.ChatResultFeedbackKind =
						e.InteractiveEditorResponseFeedbackKind =
						e.$mdb =
						e.ChatVariableLevel =
						e.ChatCopyKind =
						e.InteractiveSessionVoteDirection =
						e.$ldb =
						e.$kdb =
						e.$jdb =
						e.$idb =
						e.$hdb =
						e.$gdb =
						e.$fdb =
						e.$edb =
						e.$ddb =
						e.$cdb =
						e.$bdb =
						e.$adb =
						e.PortAutoForwardAction =
						e.WorkspaceTrustState =
						e.ExternalUriOpenerPriority =
						e.$_cb =
						e.$$cb =
						e.$0cb =
						e.$9cb =
						e.$7cb =
						e.$6cb =
						e.$5cb =
						e.$4cb =
						e.$3cb =
						e.TestRunProfileKind =
						e.TestResultState =
						e.$2cb =
						e.$1cb =
						e.StandardTokenType =
						e.ExtensionRuntime =
						e.ExtensionMode =
						e.$Zcb =
						e.NotebookVariablesRequestKind =
						e.$Ycb =
						e.$Xcb =
						e.NotebookControllerAffinity2 =
						e.NotebookControllerAffinity =
						e.$Wcb =
						e.NotebookEditorRevealType =
						e.NotebookCellStatusBarAlignment =
						e.NotebookCellExecutionState =
						e.NotebookCellKind =
						e.$Vcb =
						e.$Ucb =
						e.$Tcb =
						e.$Scb =
						e.$Rcb =
						e.ColorThemeKind =
						e.$Qcb =
						e.$Pcb =
						e.ExtensionKind =
						e.InputBoxValidationSeverity =
						e.QuickPickItemKind =
						e.$Ocb =
						e.QuickInputButtonLocation =
						e.$Ncb =
						e.DebugConsoleMode =
						e.$Mcb =
						e.$Lcb =
						e.$Kcb =
						e.$Jcb =
						e.$Icb =
						e.CommentThreadFocus =
						e.CommentThreadApplicability =
						e.CommentThreadState =
						e.CommentState =
						e.CommentMode =
						e.CommentThreadCollapsibleState =
						e.FoldingRangeKind =
						e.$Hcb =
						e.$Gcb =
						e.FileChangeType =
						e.$Fcb =
						e.NewSymbolNameTriggerKind =
						e.NewSymbolNameTag =
						e.$Ecb =
						e.$Dcb =
						e.$Ccb =
						e.$Bcb =
						e.InlineCompletionTriggerKind =
						e.$Acb =
						e.$zcb =
						e.$ycb =
						e.$xcb =
						e.$wcb =
						e.$vcb =
						e.$ucb =
						e.$tcb =
						e.$scb =
						e.$rcb =
						e.$qcb =
						e.$ocb =
						e.ConfigurationTarget =
						e.$ncb =
						e.$mcb =
						e.$lcb =
						e.$kcb =
						e.DocumentPasteTriggerKind =
						e.$jcb =
						e.$icb =
						e.$hcb =
						e.$gcb =
						e.$fcb =
						e.$ecb =
						e.TreeItemCheckboxState =
						e.TreeItemCollapsibleState =
						e.$dcb =
						e.ViewBadge =
						e.ProgressLocation =
						e.Task =
						e.$bcb =
						e.TaskScope =
						e.ShellQuoting =
						e.$acb =
						e.$_bb =
						e.$$bb =
						e.TaskPanelKind =
						e.TaskRevealKind =
						e.$0bb =
						e.TerminalLocation =
						e.$9bb =
						e.$8bb =
						e.$7bb =
						e.TerminalShellExecutionCommandLineConfidence =
						e.TerminalExitReason =
						e.SourceControlInputBoxValidationType =
						e.ColorFormat =
						e.$6bb =
						e.$5bb =
						e.$4bb =
						e.$3bb =
						e.SyntaxTokenType =
						e.DecorationRangeBehavior =
						e.TextDocumentChangeReason =
						e.TextEditorSelectionChangeKind =
						e.TextEditorRevealType =
						e.TextDocumentSaveReason =
						e.TextEditorLineNumbersStyle =
						e.StatusBarAlignment =
						e.ViewColumn =
						e.PartialAcceptTriggerKind =
						e.$1bb =
						e.$Zbb =
						e.$Ybb =
						e.$Xbb =
						e.CompletionItemTag =
						e.CompletionItemKind =
						e.CompletionTriggerKind =
						e.$Wbb =
						e.$Vbb =
						e.InlayHintKind =
						e.SignatureHelpTriggerKind =
						e.$Ubb =
						e.$Tbb =
						e.$Sbb =
						e.$Rbb =
						e.$Qbb =
						e.LanguageStatusSeverity =
						e.$Pbb =
						e.$Obb =
						e.$Nbb =
						e.$Mbb =
						e.$Lbb =
						e.$Kbb =
						e.CodeActionTriggerKind =
						e.$Jbb =
						e.$Ibb =
						e.SymbolTag =
						e.SymbolKind =
						e.$Hbb =
						e.$Gbb =
						e.DocumentHighlightKind =
						e.HoverVerbosityAction =
						e.$Fbb =
						e.$Ebb =
						e.$Dbb =
						e.$Cbb =
						e.$Bbb =
						e.DiagnosticSeverity =
						e.DiagnosticTag =
						e.$Abb =
						e.$zbb =
						e.FileEditType =
						e.$ybb =
						e.$xbb =
						e.$wbb =
						e.EnvironmentVariableMutatorType =
						e.EndOfLine =
						e.$vbb =
						e.$ubb =
						e.$tbb =
						e.$qbb =
						e.$pbb =
						e.$obb =
						e.$nbb =
						e.TerminalQuickFixType =
						e.TerminalOutputAnchor =
							void 0),
					(e.$rbb = z),
					(e.$sbb = F),
					(e.$2bb = et),
					(e.$pcb = Ai),
					(e.$8cb = Jn);
				function M(St) {
					return Object.assign(St, {
						apply: function (...oi) {
							if (oi.length === 0) return Reflect.construct(St, []);
							{
								const Ei = oi.length === 1 ? [] : oi[1];
								return Reflect.construct(St, Ei, oi[0].constructor);
							}
						},
						call: function (...oi) {
							if (oi.length === 0) return Reflect.construct(St, []);
							{
								const [Ei, ...tn] = oi;
								return Reflect.construct(St, tn, Ei.constructor);
							}
						},
					});
				}
				var N;
				(function (St) {
					(St[(St.Top = 0)] = "Top"), (St[(St.Bottom = 1)] = "Bottom");
				})(N || (e.TerminalOutputAnchor = N = {}));
				var A;
				(function (St) {
					(St[(St.TerminalCommand = 0)] = "TerminalCommand"),
						(St[(St.Opener = 1)] = "Opener"),
						(St[(St.Command = 3)] = "Command");
				})(A || (e.TerminalQuickFixType = A = {}));
				let R = (g = class {
					static from(...vt) {
						let oi = vt;
						return new g(function () {
							if (oi) {
								for (const Ei of oi)
									Ei && typeof Ei.dispose == "function" && Ei.dispose();
								oi = void 0;
							}
						});
					}
					#e;
					constructor(vt) {
						this.#e = vt;
					}
					dispose() {
						typeof this.#e == "function" && (this.#e(), (this.#e = void 0));
					}
				});
				(e.$nbb = R), (e.$nbb = R = g = Ne([M], R));
				let O = (p = class {
					static Min(...vt) {
						if (vt.length === 0) throw new TypeError();
						let oi = vt[0];
						for (let Ei = 1; Ei < vt.length; Ei++) {
							const tn = vt[Ei];
							tn.isBefore(oi) && (oi = tn);
						}
						return oi;
					}
					static Max(...vt) {
						if (vt.length === 0) throw new TypeError();
						let oi = vt[0];
						for (let Ei = 1; Ei < vt.length; Ei++) {
							const tn = vt[Ei];
							tn.isAfter(oi) && (oi = tn);
						}
						return oi;
					}
					static isPosition(vt) {
						if (!vt) return !1;
						if (vt instanceof p) return !0;
						const { line: oi, character: Ei } = vt;
						return typeof oi == "number" && typeof Ei == "number";
					}
					static of(vt) {
						if (vt instanceof p) return vt;
						if (this.isPosition(vt)) return new p(vt.line, vt.character);
						throw new Error("Invalid argument, is NOT a position-like object");
					}
					get line() {
						return this.c;
					}
					get character() {
						return this.e;
					}
					constructor(vt, oi) {
						if (vt < 0) throw (0, i.$$)("line must be non-negative");
						if (oi < 0) throw (0, i.$$)("character must be non-negative");
						(this.c = vt), (this.e = oi);
					}
					isBefore(vt) {
						return this.c < vt.c ? !0 : vt.c < this.c ? !1 : this.e < vt.e;
					}
					isBeforeOrEqual(vt) {
						return this.c < vt.c ? !0 : vt.c < this.c ? !1 : this.e <= vt.e;
					}
					isAfter(vt) {
						return !this.isBeforeOrEqual(vt);
					}
					isAfterOrEqual(vt) {
						return !this.isBefore(vt);
					}
					isEqual(vt) {
						return this.c === vt.c && this.e === vt.e;
					}
					compareTo(vt) {
						return this.c < vt.c
							? -1
							: this.c > vt.line
								? 1
								: this.e < vt.e
									? -1
									: this.e > vt.e
										? 1
										: 0;
					}
					translate(vt, oi = 0) {
						if (vt === null || oi === null) throw (0, i.$$)();
						let Ei;
						return (
							typeof vt > "u"
								? (Ei = 0)
								: typeof vt == "number"
									? (Ei = vt)
									: ((Ei = typeof vt.lineDelta == "number" ? vt.lineDelta : 0),
										(oi =
											typeof vt.characterDelta == "number"
												? vt.characterDelta
												: 0)),
							Ei === 0 && oi === 0
								? this
								: new p(this.line + Ei, this.character + oi)
						);
					}
					with(vt, oi = this.character) {
						if (vt === null || oi === null) throw (0, i.$$)();
						let Ei;
						return (
							typeof vt > "u"
								? (Ei = this.line)
								: typeof vt == "number"
									? (Ei = vt)
									: ((Ei = typeof vt.line == "number" ? vt.line : this.line),
										(oi =
											typeof vt.character == "number"
												? vt.character
												: this.character)),
							Ei === this.line && oi === this.character ? this : new p(Ei, oi)
						);
					}
					toJSON() {
						return { line: this.line, character: this.character };
					}
					[Symbol.for("debug.description")]() {
						return `(${this.line}:${this.character})`;
					}
				});
				(e.$obb = O), (e.$obb = O = p = Ne([M], O));
				let B = (o = class {
					static isRange(vt) {
						return vt instanceof o
							? !0
							: vt
								? O.isPosition(vt.start) && O.isPosition(vt.end)
								: !1;
					}
					static of(vt) {
						if (vt instanceof o) return vt;
						if (this.isRange(vt)) return new o(vt.start, vt.end);
						throw new Error("Invalid argument, is NOT a range-like object");
					}
					get start() {
						return this.c;
					}
					get end() {
						return this.e;
					}
					constructor(vt, oi, Ei, tn) {
						let hn, In;
						if (
							(typeof vt == "number" &&
							typeof oi == "number" &&
							typeof Ei == "number" &&
							typeof tn == "number"
								? ((hn = new O(vt, oi)), (In = new O(Ei, tn)))
								: O.isPosition(vt) &&
									O.isPosition(oi) &&
									((hn = O.of(vt)), (In = O.of(oi))),
							!hn || !In)
						)
							throw new Error("Invalid arguments");
						hn.isBefore(In)
							? ((this.c = hn), (this.e = In))
							: ((this.c = In), (this.e = hn));
					}
					contains(vt) {
						return o.isRange(vt)
							? this.contains(vt.start) && this.contains(vt.end)
							: O.isPosition(vt)
								? !(O.of(vt).isBefore(this.c) || this.e.isBefore(vt))
								: !1;
					}
					isEqual(vt) {
						return this.c.isEqual(vt.c) && this.e.isEqual(vt.e);
					}
					intersection(vt) {
						const oi = O.Max(vt.start, this.c),
							Ei = O.Min(vt.end, this.e);
						if (!oi.isAfter(Ei)) return new o(oi, Ei);
					}
					union(vt) {
						if (this.contains(vt)) return this;
						if (vt.contains(this)) return vt;
						const oi = O.Min(vt.start, this.c),
							Ei = O.Max(vt.end, this.end);
						return new o(oi, Ei);
					}
					get isEmpty() {
						return this.c.isEqual(this.e);
					}
					get isSingleLine() {
						return this.c.line === this.e.line;
					}
					with(vt, oi = this.end) {
						if (vt === null || oi === null) throw (0, i.$$)();
						let Ei;
						return (
							vt
								? O.isPosition(vt)
									? (Ei = vt)
									: ((Ei = vt.start || this.start), (oi = vt.end || this.end))
								: (Ei = this.start),
							Ei.isEqual(this.c) && oi.isEqual(this.end) ? this : new o(Ei, oi)
						);
					}
					toJSON() {
						return [this.start, this.end];
					}
					[Symbol.for("debug.description")]() {
						return z(this);
					}
				});
				(e.$pbb = B), (e.$pbb = B = o = Ne([M], B));
				let U = (f = class extends B {
					static isSelection(vt) {
						return vt instanceof f
							? !0
							: vt
								? B.isRange(vt) &&
									O.isPosition(vt.anchor) &&
									O.isPosition(vt.active) &&
									typeof vt.isReversed == "boolean"
								: !1;
					}
					get anchor() {
						return this.f;
					}
					get active() {
						return this.g;
					}
					constructor(vt, oi, Ei, tn) {
						let hn, In;
						if (
							(typeof vt == "number" &&
							typeof oi == "number" &&
							typeof Ei == "number" &&
							typeof tn == "number"
								? ((hn = new O(vt, oi)), (In = new O(Ei, tn)))
								: O.isPosition(vt) &&
									O.isPosition(oi) &&
									((hn = O.of(vt)), (In = O.of(oi))),
							!hn || !In)
						)
							throw new Error("Invalid arguments");
						super(hn, In), (this.f = hn), (this.g = In);
					}
					get isReversed() {
						return this.f === this.e;
					}
					toJSON() {
						return {
							start: this.start,
							end: this.end,
							active: this.active,
							anchor: this.anchor,
						};
					}
					[Symbol.for("debug.description")]() {
						return F(this);
					}
				});
				(e.$qbb = U), (e.$qbb = U = f = Ne([M], U));
				function z(St) {
					return St.isEmpty
						? `[${St.start.line}:${St.start.character})`
						: `[${St.start.line}:${St.start.character} -> ${St.end.line}:${St.end.character})`;
				}
				function F(St) {
					let vt = z(St);
					return (
						St.isEmpty ||
							(St.active.isEqual(St.start) ? (vt = `|${vt}`) : (vt = `${vt}|`)),
						vt
					);
				}
				const x = (St) => {
					if (
						typeof St != "string" ||
						St.length === 0 ||
						!/^[0-9A-Za-z_\-]+$/.test(St)
					)
						throw (0, i.$$)("connectionToken");
				};
				class H {
					static isResolvedAuthority(vt) {
						return (
							vt &&
							typeof vt == "object" &&
							typeof vt.host == "string" &&
							typeof vt.port == "number" &&
							(vt.connectionToken === void 0 ||
								typeof vt.connectionToken == "string")
						);
					}
					constructor(vt, oi, Ei) {
						if (typeof vt != "string" || vt.length === 0)
							throw (0, i.$$)("host");
						if (typeof oi != "number" || oi === 0 || Math.round(oi) !== oi)
							throw (0, i.$$)("port");
						typeof Ei < "u" && x(Ei),
							(this.host = vt),
							(this.port = Math.round(oi)),
							(this.connectionToken = Ei);
					}
				}
				e.$tbb = H;
				class q {
					static isManagedResolvedAuthority(vt) {
						return (
							vt &&
							typeof vt == "object" &&
							typeof vt.makeConnection == "function" &&
							(vt.connectionToken === void 0 ||
								typeof vt.connectionToken == "string")
						);
					}
					constructor(vt, oi) {
						(this.makeConnection = vt),
							(this.connectionToken = oi),
							typeof oi < "u" && x(oi);
					}
				}
				e.$ubb = q;
				class V extends Error {
					static NotAvailable(vt, oi) {
						return new V(
							vt,
							c.RemoteAuthorityResolverErrorCode.NotAvailable,
							oi,
						);
					}
					static TemporarilyNotAvailable(vt) {
						return new V(
							vt,
							c.RemoteAuthorityResolverErrorCode.TemporarilyNotAvailable,
						);
					}
					constructor(vt, oi = c.RemoteAuthorityResolverErrorCode.Unknown, Ei) {
						super(vt),
							(this._message = vt),
							(this._code = oi),
							(this._detail = Ei),
							Object.setPrototypeOf(this, V.prototype);
					}
				}
				e.$vbb = V;
				var G;
				(function (St) {
					(St[(St.LF = 1)] = "LF"), (St[(St.CRLF = 2)] = "CRLF");
				})(G || (e.EndOfLine = G = {}));
				var K;
				(function (St) {
					(St[(St.Replace = 1)] = "Replace"),
						(St[(St.Append = 2)] = "Append"),
						(St[(St.Prepend = 3)] = "Prepend");
				})(K || (e.EnvironmentVariableMutatorType = K = {}));
				let J = (b = class {
					static isTextEdit(vt) {
						return vt instanceof b
							? !0
							: vt
								? B.isRange(vt) && typeof vt.newText == "string"
								: !1;
					}
					static replace(vt, oi) {
						return new b(vt, oi);
					}
					static insert(vt, oi) {
						return b.replace(new B(vt, vt), oi);
					}
					static delete(vt) {
						return b.replace(vt, "");
					}
					static setEndOfLine(vt) {
						const oi = new b(new B(new O(0, 0), new O(0, 0)), "");
						return (oi.newEol = vt), oi;
					}
					get range() {
						return this.c;
					}
					set range(vt) {
						if (vt && !B.isRange(vt)) throw (0, i.$$)("range");
						this.c = vt;
					}
					get newText() {
						return this.e || "";
					}
					set newText(vt) {
						if (vt && typeof vt != "string") throw (0, i.$$)("newText");
						this.e = vt;
					}
					get newEol() {
						return this.f;
					}
					set newEol(vt) {
						if (vt && typeof vt != "number") throw (0, i.$$)("newEol");
						this.f = vt;
					}
					constructor(vt, oi) {
						(this.c = vt), (this.e = oi);
					}
					toJSON() {
						return { range: this.range, newText: this.newText, newEol: this.f };
					}
				});
				(e.$wbb = J), (e.$wbb = J = b = Ne([M], J));
				let W = (s = class {
					static isNotebookCellEdit(vt) {
						return vt instanceof s
							? !0
							: vt
								? jn.isNotebookRange(vt) && Array.isArray(vt.newCells)
								: !1;
					}
					static replaceCells(vt, oi) {
						return new s(vt, oi);
					}
					static insertCells(vt, oi) {
						return new s(new jn(vt, vt), oi);
					}
					static deleteCells(vt) {
						return new s(vt, []);
					}
					static updateCellMetadata(vt, oi) {
						const Ei = new s(new jn(vt, vt), []);
						return (Ei.newCellMetadata = oi), Ei;
					}
					static updateNotebookMetadata(vt) {
						const oi = new s(new jn(0, 0), []);
						return (oi.newNotebookMetadata = vt), oi;
					}
					constructor(vt, oi) {
						(this.range = vt), (this.newCells = oi);
					}
				});
				(e.$xbb = W), (e.$xbb = W = s = Ne([M], W));
				class X {
					static isSnippetTextEdit(vt) {
						return vt instanceof X
							? !0
							: vt
								? B.isRange(vt.range) && ne.isSnippetString(vt.snippet)
								: !1;
					}
					static replace(vt, oi) {
						return new X(vt, oi);
					}
					static insert(vt, oi) {
						return X.replace(new B(vt, vt), oi);
					}
					constructor(vt, oi) {
						(this.range = vt), (this.snippet = oi);
					}
				}
				e.$ybb = X;
				var Y;
				(function (St) {
					(St[(St.File = 1)] = "File"),
						(St[(St.Text = 2)] = "Text"),
						(St[(St.Cell = 3)] = "Cell"),
						(St[(St.CellReplace = 5)] = "CellReplace"),
						(St[(St.Snippet = 6)] = "Snippet");
				})(Y || (e.FileEditType = Y = {}));
				let ie = class {
					constructor() {
						this.c = [];
					}
					_allEntries() {
						return this.c;
					}
					renameFile(vt, oi, Ei, tn) {
						this.c.push({
							_type: Y.File,
							from: vt,
							to: oi,
							options: Ei,
							metadata: tn,
						});
					}
					createFile(vt, oi, Ei) {
						this.c.push({
							_type: Y.File,
							from: void 0,
							to: vt,
							options: oi,
							metadata: Ei,
						});
					}
					deleteFile(vt, oi, Ei) {
						this.c.push({
							_type: Y.File,
							from: vt,
							to: void 0,
							options: oi,
							metadata: Ei,
						});
					}
					e(vt, oi, Ei) {
						this.c.push({
							_type: Y.Cell,
							metadata: Ei,
							uri: vt,
							edit: { editType: n.CellEditType.DocumentMetadata, metadata: oi },
							notebookMetadata: oi,
						});
					}
					f(vt, oi, Ei, tn) {
						const hn = oi.start,
							In = oi.end;
						(hn !== In || Ei.length > 0) &&
							this.c.push({
								_type: Y.CellReplace,
								uri: vt,
								index: hn,
								count: In - hn,
								cells: Ei,
								metadata: tn,
							});
					}
					g(vt, oi, Ei, tn) {
						this.c.push({
							_type: Y.Cell,
							metadata: tn,
							uri: vt,
							edit: {
								editType: n.CellEditType.Metadata,
								index: oi,
								metadata: Ei,
							},
						});
					}
					replace(vt, oi, Ei, tn) {
						this.c.push({
							_type: Y.Text,
							uri: vt,
							edit: new J(oi, Ei),
							metadata: tn,
						});
					}
					insert(vt, oi, Ei, tn) {
						this.replace(vt, new B(oi, oi), Ei, tn);
					}
					delete(vt, oi, Ei) {
						this.replace(vt, oi, "", Ei);
					}
					has(vt) {
						return this.c.some(
							(oi) =>
								oi._type === Y.Text && oi.uri.toString() === vt.toString(),
						);
					}
					set(vt, oi) {
						if (oi)
							for (const Ei of oi) {
								if (!Ei) continue;
								let tn, hn;
								Array.isArray(Ei) ? ((tn = Ei[0]), (hn = Ei[1])) : (tn = Ei),
									W.isNotebookCellEdit(tn)
										? tn.newCellMetadata
											? this.g(vt, tn.range.start, tn.newCellMetadata, hn)
											: tn.newNotebookMetadata
												? this.e(vt, tn.newNotebookMetadata, hn)
												: this.f(vt, tn.range, tn.newCells, hn)
										: X.isSnippetTextEdit(tn)
											? this.c.push({
													_type: Y.Snippet,
													uri: vt,
													range: tn.range,
													edit: tn.snippet,
													metadata: hn,
												})
											: this.c.push({
													_type: Y.Text,
													uri: vt,
													edit: tn,
													metadata: hn,
												});
							}
						else {
							for (let Ei = 0; Ei < this.c.length; Ei++) {
								const tn = this.c[Ei];
								switch (tn._type) {
									case Y.Text:
									case Y.Snippet:
									case Y.Cell:
									case Y.CellReplace:
										tn.uri.toString() === vt.toString() &&
											(this.c[Ei] = void 0);
										break;
								}
							}
							(0, t.$Mb)(this.c);
						}
					}
					get(vt) {
						const oi = [];
						for (const Ei of this.c)
							Ei._type === Y.Text &&
								Ei.uri.toString() === vt.toString() &&
								oi.push(Ei.edit);
						return oi;
					}
					entries() {
						const vt = new E.$Gc();
						for (const oi of this.c)
							if (oi._type === Y.Text) {
								let Ei = vt.get(oi.uri);
								Ei || ((Ei = [oi.uri, []]), vt.set(oi.uri, Ei)),
									Ei[1].push(oi.edit);
							}
						return [...vt.values()];
					}
					get size() {
						return this.entries().length;
					}
					toJSON() {
						return this.entries();
					}
				};
				(e.$zbb = ie), (e.$zbb = ie = Ne([M], ie));
				let ne = (l = class {
					static isSnippetString(vt) {
						return vt instanceof l ? !0 : vt ? typeof vt.value == "string" : !1;
					}
					static c(vt) {
						return vt.replace(/\$|}|\\/g, "\\$&");
					}
					constructor(vt) {
						(this.e = 1), (this.value = vt || "");
					}
					appendText(vt) {
						return (this.value += l.c(vt)), this;
					}
					appendTabstop(vt = this.e++) {
						return (this.value += "$"), (this.value += vt), this;
					}
					appendPlaceholder(vt, oi = this.e++) {
						if (typeof vt == "function") {
							const Ei = new l();
							(Ei.e = this.e), vt(Ei), (this.e = Ei.e), (vt = Ei.value);
						} else vt = l.c(vt);
						return (
							(this.value += "${"),
							(this.value += oi),
							(this.value += ":"),
							(this.value += vt),
							(this.value += "}"),
							this
						);
					}
					appendChoice(vt, oi = this.e++) {
						const Ei = vt
							.map((tn) => tn.replaceAll(/[|\\,]/g, "\\$&"))
							.join(",");
						return (
							(this.value += "${"),
							(this.value += oi),
							(this.value += "|"),
							(this.value += Ei),
							(this.value += "|}"),
							this
						);
					}
					appendVariable(vt, oi) {
						if (typeof oi == "function") {
							const Ei = new l();
							(Ei.e = this.e), oi(Ei), (this.e = Ei.e), (oi = Ei.value);
						} else typeof oi == "string" && (oi = oi.replace(/\$|}/g, "\\$&"));
						return (
							(this.value += "${"),
							(this.value += vt),
							oi && ((this.value += ":"), (this.value += oi)),
							(this.value += "}"),
							this
						);
					}
				});
				(e.$Abb = ne), (e.$Abb = ne = l = Ne([M], ne));
				var ee;
				(function (St) {
					(St[(St.Unnecessary = 1)] = "Unnecessary"),
						(St[(St.Deprecated = 2)] = "Deprecated");
				})(ee || (e.DiagnosticTag = ee = {}));
				var _;
				(function (St) {
					(St[(St.Hint = 3)] = "Hint"),
						(St[(St.Information = 2)] = "Information"),
						(St[(St.Warning = 1)] = "Warning"),
						(St[(St.Error = 0)] = "Error");
				})(_ || (e.DiagnosticSeverity = _ = {}));
				let te = (y = class {
					static isLocation(vt) {
						return vt instanceof y
							? !0
							: vt
								? B.isRange(vt.range) && r.URI.isUri(vt.uri)
								: !1;
					}
					constructor(vt, oi) {
						if (((this.uri = vt), oi))
							if (B.isRange(oi)) this.range = B.of(oi);
							else if (O.isPosition(oi)) this.range = new B(oi, oi);
							else throw new Error("Illegal argument");
					}
					toJSON() {
						return { uri: this.uri, range: this.range };
					}
				});
				(e.$Bbb = te), (e.$Bbb = te = y = Ne([M], te));
				let Q = class {
					static is(vt) {
						return vt
							? typeof vt.message == "string" &&
									vt.location &&
									B.isRange(vt.location.range) &&
									r.URI.isUri(vt.location.uri)
							: !1;
					}
					constructor(vt, oi) {
						(this.location = vt), (this.message = oi);
					}
					static isEqual(vt, oi) {
						return vt === oi
							? !0
							: !vt || !oi
								? !1
								: vt.message === oi.message &&
									vt.location.range.isEqual(oi.location.range) &&
									vt.location.uri.toString() === oi.location.uri.toString();
					}
				};
				(e.$Cbb = Q), (e.$Cbb = Q = Ne([M], Q));
				let Z = class {
					constructor(vt, oi, Ei = _.Error) {
						if (!B.isRange(vt)) throw new TypeError("range must be set");
						if (!oi) throw new TypeError("message must be set");
						(this.range = vt), (this.message = oi), (this.severity = Ei);
					}
					toJSON() {
						return {
							severity: _[this.severity],
							message: this.message,
							range: this.range,
							source: this.source,
							code: this.code,
						};
					}
					static isEqual(vt, oi) {
						return vt === oi
							? !0
							: !vt || !oi
								? !1
								: vt.message === oi.message &&
									vt.severity === oi.severity &&
									vt.code === oi.code &&
									vt.severity === oi.severity &&
									vt.source === oi.source &&
									vt.range.isEqual(oi.range) &&
									(0, t.$yb)(vt.tags, oi.tags) &&
									(0, t.$yb)(
										vt.relatedInformation,
										oi.relatedInformation,
										Q.isEqual,
									);
					}
				};
				(e.$Dbb = Z), (e.$Dbb = Z = Ne([M], Z));
				let se = class {
					constructor(vt, oi) {
						if (!vt)
							throw new Error("Illegal argument, contents must be defined");
						Array.isArray(vt) ? (this.contents = vt) : (this.contents = [vt]),
							(this.range = oi);
					}
				};
				(e.$Ebb = se), (e.$Ebb = se = Ne([M], se));
				let re = class extends se {
					constructor(vt, oi, Ei, tn) {
						super(vt, oi),
							(this.canIncreaseVerbosity = Ei),
							(this.canDecreaseVerbosity = tn);
					}
				};
				(e.$Fbb = re), (e.$Fbb = re = Ne([M], re));
				var le;
				(function (St) {
					(St[(St.Increase = 0)] = "Increase"),
						(St[(St.Decrease = 1)] = "Decrease");
				})(le || (e.HoverVerbosityAction = le = {}));
				var oe;
				(function (St) {
					(St[(St.Text = 0)] = "Text"),
						(St[(St.Read = 1)] = "Read"),
						(St[(St.Write = 2)] = "Write");
				})(oe || (e.DocumentHighlightKind = oe = {}));
				let ae = class {
					constructor(vt, oi = oe.Text) {
						(this.range = vt), (this.kind = oi);
					}
					toJSON() {
						return { range: this.range, kind: oe[this.kind] };
					}
				};
				(e.$Gbb = ae), (e.$Gbb = ae = Ne([M], ae));
				let pe = class {
					constructor(vt, oi) {
						(this.uri = vt), (this.highlights = oi);
					}
					toJSON() {
						return {
							uri: this.uri,
							highlights: this.highlights.map((vt) => vt.toJSON()),
						};
					}
				};
				(e.$Hbb = pe), (e.$Hbb = pe = Ne([M], pe));
				var $e;
				(function (St) {
					(St[(St.File = 0)] = "File"),
						(St[(St.Module = 1)] = "Module"),
						(St[(St.Namespace = 2)] = "Namespace"),
						(St[(St.Package = 3)] = "Package"),
						(St[(St.Class = 4)] = "Class"),
						(St[(St.Method = 5)] = "Method"),
						(St[(St.Property = 6)] = "Property"),
						(St[(St.Field = 7)] = "Field"),
						(St[(St.Constructor = 8)] = "Constructor"),
						(St[(St.Enum = 9)] = "Enum"),
						(St[(St.Interface = 10)] = "Interface"),
						(St[(St.Function = 11)] = "Function"),
						(St[(St.Variable = 12)] = "Variable"),
						(St[(St.Constant = 13)] = "Constant"),
						(St[(St.String = 14)] = "String"),
						(St[(St.Number = 15)] = "Number"),
						(St[(St.Boolean = 16)] = "Boolean"),
						(St[(St.Array = 17)] = "Array"),
						(St[(St.Object = 18)] = "Object"),
						(St[(St.Key = 19)] = "Key"),
						(St[(St.Null = 20)] = "Null"),
						(St[(St.EnumMember = 21)] = "EnumMember"),
						(St[(St.Struct = 22)] = "Struct"),
						(St[(St.Event = 23)] = "Event"),
						(St[(St.Operator = 24)] = "Operator"),
						(St[(St.TypeParameter = 25)] = "TypeParameter");
				})($e || (e.SymbolKind = $e = {}));
				var ye;
				(function (St) {
					St[(St.Deprecated = 1)] = "Deprecated";
				})(ye || (e.SymbolTag = ye = {}));
				let ue = ($ = class {
					static validate(vt) {
						if (!vt.name) throw new Error("name must not be falsy");
					}
					constructor(vt, oi, Ei, tn, hn) {
						(this.name = vt),
							(this.kind = oi),
							(this.containerName = hn),
							typeof Ei == "string" && (this.containerName = Ei),
							tn instanceof te
								? (this.location = tn)
								: Ei instanceof B && (this.location = new te(tn, Ei)),
							$.validate(this);
					}
					toJSON() {
						return {
							name: this.name,
							kind: $e[this.kind],
							location: this.location,
							containerName: this.containerName,
						};
					}
				});
				(e.$Ibb = ue), (e.$Ibb = ue = $ = Ne([M], ue));
				let fe = (v = class {
					static validate(vt) {
						if (!vt.name) throw new Error("name must not be falsy");
						if (!vt.range.contains(vt.selectionRange))
							throw new Error("selectionRange must be contained in fullRange");
						vt.children?.forEach(v.validate);
					}
					constructor(vt, oi, Ei, tn, hn) {
						(this.name = vt),
							(this.detail = oi),
							(this.kind = Ei),
							(this.range = tn),
							(this.selectionRange = hn),
							(this.children = []),
							v.validate(this);
					}
				});
				(e.$Jbb = fe), (e.$Jbb = fe = v = Ne([M], fe));
				var me;
				(function (St) {
					(St[(St.Invoke = 1)] = "Invoke"),
						(St[(St.Automatic = 2)] = "Automatic");
				})(me || (e.CodeActionTriggerKind = me = {}));
				let ve = class {
					constructor(vt, oi) {
						(this.title = vt), (this.kind = oi);
					}
				};
				(e.$Kbb = ve), (e.$Kbb = ve = Ne([M], ve));
				let ge = class {
					static {
						S = this;
					}
					static {
						this.c = ".";
					}
					constructor(vt) {
						this.value = vt;
					}
					append(vt) {
						return new S(this.value ? this.value + S.c + vt : vt);
					}
					intersects(vt) {
						return this.contains(vt) || vt.contains(this);
					}
					contains(vt) {
						return (
							this.value === vt.value || vt.value.startsWith(this.value + S.c)
						);
					}
				};
				(e.$Lbb = ge),
					(e.$Lbb = ge = S = Ne([M], ge)),
					(ge.Empty = new ge("")),
					(ge.QuickFix = ge.Empty.append("quickfix")),
					(ge.Refactor = ge.Empty.append("refactor")),
					(ge.RefactorExtract = ge.Refactor.append("extract")),
					(ge.RefactorInline = ge.Refactor.append("inline")),
					(ge.RefactorMove = ge.Refactor.append("move")),
					(ge.RefactorRewrite = ge.Refactor.append("rewrite")),
					(ge.Source = ge.Empty.append("source")),
					(ge.SourceOrganizeImports = ge.Source.append("organizeImports")),
					(ge.SourceFixAll = ge.Source.append("fixAll")),
					(ge.Notebook = ge.Empty.append("notebook"));
				let be = class {
					constructor(vt, oi) {
						if (
							((this.range = vt),
							(this.parent = oi),
							oi && !oi.range.contains(this.range))
						)
							throw new Error(
								"Invalid argument: parent must contain this range",
							);
					}
				};
				(e.$Mbb = be), (e.$Mbb = be = Ne([M], be));
				class Ce {
					constructor(vt, oi, Ei, tn, hn, In) {
						(this.kind = vt),
							(this.name = oi),
							(this.detail = Ei),
							(this.uri = tn),
							(this.range = hn),
							(this.selectionRange = In);
					}
				}
				e.$Nbb = Ce;
				class Le {
					constructor(vt, oi) {
						(this.fromRanges = oi), (this.from = vt);
					}
				}
				e.$Obb = Le;
				class Fe {
					constructor(vt, oi) {
						(this.fromRanges = oi), (this.to = vt);
					}
				}
				e.$Pbb = Fe;
				var Oe;
				(function (St) {
					(St[(St.Information = 0)] = "Information"),
						(St[(St.Warning = 1)] = "Warning"),
						(St[(St.Error = 2)] = "Error");
				})(Oe || (e.LanguageStatusSeverity = Oe = {}));
				let xe = class {
					constructor(vt, oi) {
						(this.range = vt), (this.command = oi);
					}
					get isResolved() {
						return !!this.command;
					}
				};
				(e.$Qbb = xe), (e.$Qbb = xe = Ne([M], xe));
				let He = (I = class {
					#e;
					static isMarkdownString(vt) {
						return vt instanceof I
							? !0
							: vt &&
									vt.appendCodeblock &&
									vt.appendMarkdown &&
									vt.appendText &&
									vt.value !== void 0;
					}
					constructor(vt, oi = !1) {
						this.#e = new w.$cl(vt, { supportThemeIcons: oi });
					}
					get value() {
						return this.#e.value;
					}
					set value(vt) {
						this.#e.value = vt;
					}
					get isTrusted() {
						return this.#e.isTrusted;
					}
					set isTrusted(vt) {
						this.#e.isTrusted = vt;
					}
					get supportThemeIcons() {
						return this.#e.supportThemeIcons;
					}
					set supportThemeIcons(vt) {
						this.#e.supportThemeIcons = vt;
					}
					get supportHtml() {
						return this.#e.supportHtml;
					}
					set supportHtml(vt) {
						this.#e.supportHtml = vt;
					}
					get baseUri() {
						return this.#e.baseUri;
					}
					set baseUri(vt) {
						this.#e.baseUri = vt;
					}
					appendText(vt) {
						return this.#e.appendText(vt), this;
					}
					appendMarkdown(vt) {
						return this.#e.appendMarkdown(vt), this;
					}
					appendCodeblock(vt, oi) {
						return this.#e.appendCodeblock(oi ?? "", vt), this;
					}
				});
				(e.$Rbb = He), (e.$Rbb = He = I = Ne([M], He));
				let Ke = class {
					constructor(vt, oi) {
						(this.label = vt), (this.documentation = oi);
					}
				};
				(e.$Sbb = Ke), (e.$Sbb = Ke = Ne([M], Ke));
				let Je = class {
					constructor(vt, oi) {
						(this.label = vt),
							(this.documentation = oi),
							(this.parameters = []);
					}
				};
				(e.$Tbb = Je), (e.$Tbb = Je = Ne([M], Je));
				let Te = class {
					constructor() {
						(this.activeSignature = 0),
							(this.activeParameter = 0),
							(this.signatures = []);
					}
				};
				(e.$Ubb = Te), (e.$Ubb = Te = Ne([M], Te));
				var Ee;
				(function (St) {
					(St[(St.Invoke = 1)] = "Invoke"),
						(St[(St.TriggerCharacter = 2)] = "TriggerCharacter"),
						(St[(St.ContentChange = 3)] = "ContentChange");
				})(Ee || (e.SignatureHelpTriggerKind = Ee = {}));
				var Ie;
				(function (St) {
					(St[(St.Type = 1)] = "Type"), (St[(St.Parameter = 2)] = "Parameter");
				})(Ie || (e.InlayHintKind = Ie = {}));
				let Be = class {
					constructor(vt) {
						this.value = vt;
					}
				};
				(e.$Vbb = Be), (e.$Vbb = Be = Ne([M], Be));
				let Se = class {
					constructor(vt, oi, Ei) {
						(this.position = vt), (this.label = oi), (this.kind = Ei);
					}
				};
				(e.$Wbb = Se), (e.$Wbb = Se = Ne([M], Se));
				var ke;
				(function (St) {
					(St[(St.Invoke = 0)] = "Invoke"),
						(St[(St.TriggerCharacter = 1)] = "TriggerCharacter"),
						(St[(St.TriggerForIncompleteCompletions = 2)] =
							"TriggerForIncompleteCompletions");
				})(ke || (e.CompletionTriggerKind = ke = {}));
				var Ue;
				(function (St) {
					(St[(St.Text = 0)] = "Text"),
						(St[(St.Method = 1)] = "Method"),
						(St[(St.Function = 2)] = "Function"),
						(St[(St.Constructor = 3)] = "Constructor"),
						(St[(St.Field = 4)] = "Field"),
						(St[(St.Variable = 5)] = "Variable"),
						(St[(St.Class = 6)] = "Class"),
						(St[(St.Interface = 7)] = "Interface"),
						(St[(St.Module = 8)] = "Module"),
						(St[(St.Property = 9)] = "Property"),
						(St[(St.Unit = 10)] = "Unit"),
						(St[(St.Value = 11)] = "Value"),
						(St[(St.Enum = 12)] = "Enum"),
						(St[(St.Keyword = 13)] = "Keyword"),
						(St[(St.Snippet = 14)] = "Snippet"),
						(St[(St.Color = 15)] = "Color"),
						(St[(St.File = 16)] = "File"),
						(St[(St.Reference = 17)] = "Reference"),
						(St[(St.Folder = 18)] = "Folder"),
						(St[(St.EnumMember = 19)] = "EnumMember"),
						(St[(St.Constant = 20)] = "Constant"),
						(St[(St.Struct = 21)] = "Struct"),
						(St[(St.Event = 22)] = "Event"),
						(St[(St.Operator = 23)] = "Operator"),
						(St[(St.TypeParameter = 24)] = "TypeParameter"),
						(St[(St.User = 25)] = "User"),
						(St[(St.Issue = 26)] = "Issue");
				})(Ue || (e.CompletionItemKind = Ue = {}));
				var qe;
				(function (St) {
					St[(St.Deprecated = 1)] = "Deprecated";
				})(qe || (e.CompletionItemTag = qe = {}));
				let Ae = class {
					constructor(vt, oi) {
						(this.label = vt), (this.kind = oi);
					}
					toJSON() {
						return {
							label: this.label,
							kind: this.kind && Ue[this.kind],
							detail: this.detail,
							documentation: this.documentation,
							sortText: this.sortText,
							filterText: this.filterText,
							preselect: this.preselect,
							insertText: this.insertText,
							textEdit: this.textEdit,
						};
					}
				};
				(e.$Xbb = Ae), (e.$Xbb = Ae = Ne([M], Ae));
				let Me = class {
					constructor(vt = [], oi = !1) {
						(this.items = vt), (this.isIncomplete = oi);
					}
				};
				(e.$Ybb = Me), (e.$Ybb = Me = Ne([M], Me));
				let De = class {
					constructor(vt, oi, Ei) {
						(this.insertText = vt), (this.range = oi), (this.command = Ei);
					}
				};
				(e.$Zbb = De), (e.$Zbb = De = Ne([M], De));
				let Re = class {
					constructor(vt) {
						(this.commands = void 0),
							(this.suppressSuggestions = void 0),
							(this.items = vt);
					}
				};
				(e.$1bb = Re), (e.$1bb = Re = Ne([M], Re));
				var je;
				(function (St) {
					(St[(St.Unknown = 0)] = "Unknown"),
						(St[(St.Word = 1)] = "Word"),
						(St[(St.Line = 2)] = "Line"),
						(St[(St.Suggest = 3)] = "Suggest");
				})(je || (e.PartialAcceptTriggerKind = je = {}));
				var Ve;
				(function (St) {
					(St[(St.Active = -1)] = "Active"),
						(St[(St.Beside = -2)] = "Beside"),
						(St[(St.One = 1)] = "One"),
						(St[(St.Two = 2)] = "Two"),
						(St[(St.Three = 3)] = "Three"),
						(St[(St.Four = 4)] = "Four"),
						(St[(St.Five = 5)] = "Five"),
						(St[(St.Six = 6)] = "Six"),
						(St[(St.Seven = 7)] = "Seven"),
						(St[(St.Eight = 8)] = "Eight"),
						(St[(St.Nine = 9)] = "Nine");
				})(Ve || (e.ViewColumn = Ve = {}));
				var Ze;
				(function (St) {
					(St[(St.Left = 1)] = "Left"), (St[(St.Right = 2)] = "Right");
				})(Ze || (e.StatusBarAlignment = Ze = {}));
				function et(St, vt) {
					return `${a.$Gn.toKey(St)}.${vt}`;
				}
				var rt;
				(function (St) {
					(St[(St.Off = 0)] = "Off"),
						(St[(St.On = 1)] = "On"),
						(St[(St.Relative = 2)] = "Relative"),
						(St[(St.Interval = 3)] = "Interval");
				})(rt || (e.TextEditorLineNumbersStyle = rt = {}));
				var ft;
				(function (St) {
					(St[(St.Manual = 1)] = "Manual"),
						(St[(St.AfterDelay = 2)] = "AfterDelay"),
						(St[(St.FocusOut = 3)] = "FocusOut");
				})(ft || (e.TextDocumentSaveReason = ft = {}));
				var bt;
				(function (St) {
					(St[(St.Default = 0)] = "Default"),
						(St[(St.InCenter = 1)] = "InCenter"),
						(St[(St.InCenterIfOutsideViewport = 2)] =
							"InCenterIfOutsideViewport"),
						(St[(St.AtTop = 3)] = "AtTop");
				})(bt || (e.TextEditorRevealType = bt = {}));
				var nt;
				(function (St) {
					(St[(St.Keyboard = 1)] = "Keyboard"),
						(St[(St.Mouse = 2)] = "Mouse"),
						(St[(St.Command = 3)] = "Command");
				})(nt || (e.TextEditorSelectionChangeKind = nt = {}));
				var lt;
				(function (St) {
					(St[(St.Undo = 1)] = "Undo"), (St[(St.Redo = 2)] = "Redo");
				})(lt || (e.TextDocumentChangeReason = lt = {}));
				var ct;
				(function (St) {
					(St[(St.OpenOpen = 0)] = "OpenOpen"),
						(St[(St.ClosedClosed = 1)] = "ClosedClosed"),
						(St[(St.OpenClosed = 2)] = "OpenClosed"),
						(St[(St.ClosedOpen = 3)] = "ClosedOpen");
				})(ct || (e.DecorationRangeBehavior = ct = {})),
					(function (St) {
						function vt(oi) {
							switch (oi) {
								case "keyboard":
									return St.Keyboard;
								case "mouse":
									return St.Mouse;
								case "api":
									return St.Command;
							}
						}
						St.fromValue = vt;
					})(nt || (e.TextEditorSelectionChangeKind = nt = {}));
				var gt;
				(function (St) {
					(St[(St.Other = 0)] = "Other"),
						(St[(St.Comment = 1)] = "Comment"),
						(St[(St.String = 2)] = "String"),
						(St[(St.RegEx = 3)] = "RegEx");
				})(gt || (e.SyntaxTokenType = gt = {})),
					(function (St) {
						function vt(oi) {
							switch (oi) {
								case St.Other:
									return "other";
								case St.Comment:
									return "comment";
								case St.String:
									return "string";
								case St.RegEx:
									return "regex";
							}
							return "other";
						}
						St.toString = vt;
					})(gt || (e.SyntaxTokenType = gt = {}));
				let ht = class {
					constructor(vt, oi) {
						if (oi && !r.URI.isUri(oi)) throw (0, i.$$)("target");
						if (!B.isRange(vt) || vt.isEmpty) throw (0, i.$$)("range");
						(this.range = vt), (this.target = oi);
					}
				};
				(e.$3bb = ht), (e.$3bb = ht = Ne([M], ht));
				let Rt = class {
					constructor(vt, oi, Ei, tn) {
						(this.red = vt),
							(this.green = oi),
							(this.blue = Ei),
							(this.alpha = tn);
					}
				};
				(e.$4bb = Rt), (e.$4bb = Rt = Ne([M], Rt));
				let Nt = class {
					constructor(vt, oi) {
						if (oi && !(oi instanceof Rt)) throw (0, i.$$)("color");
						if (!B.isRange(vt) || vt.isEmpty) throw (0, i.$$)("range");
						(this.range = vt), (this.color = oi);
					}
				};
				(e.$5bb = Nt), (e.$5bb = Nt = Ne([M], Nt));
				let jt = class {
					constructor(vt) {
						if (!vt || typeof vt != "string") throw (0, i.$$)("label");
						this.label = vt;
					}
				};
				(e.$6bb = jt), (e.$6bb = jt = Ne([M], jt));
				var ti;
				(function (St) {
					(St[(St.RGB = 0)] = "RGB"),
						(St[(St.HEX = 1)] = "HEX"),
						(St[(St.HSL = 2)] = "HSL");
				})(ti || (e.ColorFormat = ti = {}));
				var kt;
				(function (St) {
					(St[(St.Error = 0)] = "Error"),
						(St[(St.Warning = 1)] = "Warning"),
						(St[(St.Information = 2)] = "Information");
				})(kt || (e.SourceControlInputBoxValidationType = kt = {}));
				var hi;
				(function (St) {
					(St[(St.Unknown = 0)] = "Unknown"),
						(St[(St.Shutdown = 1)] = "Shutdown"),
						(St[(St.Process = 2)] = "Process"),
						(St[(St.User = 3)] = "User"),
						(St[(St.Extension = 4)] = "Extension");
				})(hi || (e.TerminalExitReason = hi = {}));
				var Kt;
				(function (St) {
					(St[(St.Low = 0)] = "Low"),
						(St[(St.Medium = 1)] = "Medium"),
						(St[(St.High = 2)] = "High");
				})(Kt || (e.TerminalShellExecutionCommandLineConfidence = Kt = {}));
				class di {
					constructor(vt, oi, Ei) {
						if (
							((this.startIndex = vt),
							(this.length = oi),
							(this.tooltip = Ei),
							typeof vt != "number" || vt < 0)
						)
							throw (0, i.$$)("startIndex");
						if (typeof oi != "number" || oi < 1) throw (0, i.$$)("length");
						if (Ei !== void 0 && typeof Ei != "string")
							throw (0, i.$$)("tooltip");
					}
				}
				e.$7bb = di;
				class Ye {
					constructor(vt) {
						this.uri = vt;
					}
				}
				e.$8bb = Ye;
				class ze {
					constructor(vt) {
						this.terminalCommand = vt;
					}
				}
				e.$9bb = ze;
				var Xe;
				(function (St) {
					(St[(St.Panel = 1)] = "Panel"), (St[(St.Editor = 2)] = "Editor");
				})(Xe || (e.TerminalLocation = Xe = {}));
				class It {
					constructor(vt) {
						if (((this.options = vt), typeof vt != "object"))
							throw (0, i.$$)("options");
					}
				}
				e.$0bb = It;
				var Lt;
				(function (St) {
					(St[(St.Always = 1)] = "Always"),
						(St[(St.Silent = 2)] = "Silent"),
						(St[(St.Never = 3)] = "Never");
				})(Lt || (e.TaskRevealKind = Lt = {}));
				var xt;
				(function (St) {
					(St[(St.Shared = 1)] = "Shared"),
						(St[(St.Dedicated = 2)] = "Dedicated"),
						(St[(St.New = 3)] = "New");
				})(xt || (e.TaskPanelKind = xt = {}));
				let Vt = class {
					static {
						T = this;
					}
					static {
						this.Clean = new T("clean", "Clean");
					}
					static {
						this.Build = new T("build", "Build");
					}
					static {
						this.Rebuild = new T("rebuild", "Rebuild");
					}
					static {
						this.Test = new T("test", "Test");
					}
					static from(vt) {
						switch (vt) {
							case "clean":
								return T.Clean;
							case "build":
								return T.Build;
							case "rebuild":
								return T.Rebuild;
							case "test":
								return T.Test;
							default:
								return;
						}
					}
					constructor(vt, oi) {
						if (
							((this.label = oi),
							typeof vt != "string" || typeof oi != "string")
						)
							throw (0, i.$$)("name");
						this.c = vt;
					}
					get id() {
						return this.c;
					}
				};
				(e.$$bb = Vt), (e.$$bb = Vt = T = Ne([M], Vt));
				function Bt(St) {
					let vt = "";
					for (let oi = 0; oi < St.length; oi++)
						vt += St[oi].replace(/,/g, ",,") + ",";
					return vt;
				}
				let Gt = class {
					constructor(vt, oi, Ei) {
						if (typeof vt != "string") throw (0, i.$$)("process");
						(this.e = []),
							(this.c = vt),
							oi !== void 0 &&
								(Array.isArray(oi)
									? ((this.e = oi), (this.f = Ei))
									: (this.f = oi));
					}
					get process() {
						return this.c;
					}
					set process(vt) {
						if (typeof vt != "string") throw (0, i.$$)("process");
						this.c = vt;
					}
					get args() {
						return this.e;
					}
					set args(vt) {
						Array.isArray(vt) || (vt = []), (this.e = vt);
					}
					get options() {
						return this.f;
					}
					set options(vt) {
						this.f = vt;
					}
					computeId() {
						const vt = [];
						if (
							(vt.push("process"),
							this.c !== void 0 && vt.push(this.c),
							this.e && this.e.length > 0)
						)
							for (const oi of this.e) vt.push(oi);
						return Bt(vt);
					}
				};
				(e.$_bb = Gt), (e.$_bb = Gt = Ne([M], Gt));
				let Mt = class {
					constructor(vt, oi, Ei) {
						if (((this.f = []), Array.isArray(oi))) {
							if (!vt) throw (0, i.$$)("command can't be undefined or null");
							if (typeof vt != "string" && typeof vt.value != "string")
								throw (0, i.$$)("command");
							(this.e = vt), (this.f = oi), (this.g = Ei);
						} else {
							if (typeof vt != "string") throw (0, i.$$)("commandLine");
							(this.c = vt), (this.g = oi);
						}
					}
					get commandLine() {
						return this.c;
					}
					set commandLine(vt) {
						if (typeof vt != "string") throw (0, i.$$)("commandLine");
						this.c = vt;
					}
					get command() {
						return this.e ? this.e : "";
					}
					set command(vt) {
						if (typeof vt != "string" && typeof vt.value != "string")
							throw (0, i.$$)("command");
						this.e = vt;
					}
					get args() {
						return this.f;
					}
					set args(vt) {
						this.f = vt || [];
					}
					get options() {
						return this.g;
					}
					set options(vt) {
						this.g = vt;
					}
					computeId() {
						const vt = [];
						if (
							(vt.push("shell"),
							this.c !== void 0 && vt.push(this.c),
							this.e !== void 0 &&
								vt.push(typeof this.e == "string" ? this.e : this.e.value),
							this.f && this.f.length > 0)
						)
							for (const oi of this.f)
								vt.push(typeof oi == "string" ? oi : oi.value);
						return Bt(vt);
					}
				};
				(e.$acb = Mt), (e.$acb = Mt = Ne([M], Mt));
				var Ut;
				(function (St) {
					(St[(St.Escape = 1)] = "Escape"),
						(St[(St.Strong = 2)] = "Strong"),
						(St[(St.Weak = 3)] = "Weak");
				})(Ut || (e.ShellQuoting = Ut = {}));
				var ei;
				(function (St) {
					(St[(St.Global = 1)] = "Global"),
						(St[(St.Workspace = 2)] = "Workspace");
				})(ei || (e.TaskScope = ei = {}));
				class mi {
					constructor(vt) {
						this.c = vt;
					}
					computeId() {
						return "customExecution" + (0, u.$9g)();
					}
					set callback(vt) {
						this.c = vt;
					}
					get callback() {
						return this.c;
					}
				}
				e.$bcb = mi;
				let ii = class {
					static {
						P = this;
					}
					static {
						this.c = "customExecution";
					}
					static {
						this.e = "process";
					}
					static {
						this.f = "shell";
					}
					static {
						this.g = "$empty";
					}
					constructor(vt, oi, Ei, tn, hn, In) {
						(this.k = !1), (this.l = this.definition = vt);
						let kn;
						typeof oi == "string"
							? ((this.o = this.name = oi),
								(this.w = this.source = Ei),
								(this.execution = tn),
								(kn = hn),
								(this.k = !0))
							: oi === ei.Global || oi === ei.Workspace
								? ((this.target = oi),
									(this.o = this.name = Ei),
									(this.w = this.source = tn),
									(this.execution = hn),
									(kn = In))
								: ((this.target = oi),
									(this.o = this.name = Ei),
									(this.w = this.source = tn),
									(this.execution = hn),
									(kn = In)),
							typeof kn == "string"
								? ((this.r = [kn]), (this.t = !0))
								: Array.isArray(kn)
									? ((this.r = kn), (this.t = !0))
									: ((this.r = []), (this.t = !1)),
							(this.u = !1),
							(this.y = Object.create(null)),
							(this.z = Object.create(null));
					}
					get _id() {
						return this.j;
					}
					set _id(vt) {
						this.j = vt;
					}
					get _deprecated() {
						return this.k;
					}
					B() {
						this.j !== void 0 &&
							((this.j = void 0), (this.m = void 0), this.C());
					}
					C() {
						this.q instanceof Gt
							? (this.l = { type: P.e, id: this.q.computeId() })
							: this.q instanceof Mt
								? (this.l = { type: P.f, id: this.q.computeId() })
								: this.q instanceof mi
									? (this.l = { type: P.c, id: this.q.computeId() })
									: (this.l = { type: P.g, id: (0, u.$9g)() });
					}
					get definition() {
						return this.l;
					}
					set definition(vt) {
						if (vt == null) throw (0, i.$$)("Kind can't be undefined or null");
						this.B(), (this.l = vt);
					}
					get scope() {
						return this.m;
					}
					set target(vt) {
						this.B(), (this.m = vt);
					}
					get name() {
						return this.o;
					}
					set name(vt) {
						if (typeof vt != "string") throw (0, i.$$)("name");
						this.B(), (this.o = vt);
					}
					get execution() {
						return this.q;
					}
					set execution(vt) {
						vt === null && (vt = void 0), this.B(), (this.q = vt);
						const oi = this.l.type;
						(P.g === oi || P.e === oi || P.f === oi || P.c === oi) && this.C();
					}
					get problemMatchers() {
						return this.r;
					}
					set problemMatchers(vt) {
						if (Array.isArray(vt)) this.B(), (this.r = vt), (this.t = !0);
						else {
							this.B(), (this.r = []), (this.t = !1);
							return;
						}
					}
					get hasDefinedMatchers() {
						return this.t;
					}
					get isBackground() {
						return this.u;
					}
					set isBackground(vt) {
						vt !== !0 && vt !== !1 && (vt = !1), this.B(), (this.u = vt);
					}
					get source() {
						return this.w;
					}
					set source(vt) {
						if (typeof vt != "string" || vt.length === 0)
							throw (0, i.$$)("source must be a string of length > 0");
						this.B(), (this.w = vt);
					}
					get group() {
						return this.x;
					}
					set group(vt) {
						vt === null && (vt = void 0), this.B(), (this.x = vt);
					}
					get detail() {
						return this.A;
					}
					set detail(vt) {
						vt === null && (vt = void 0), (this.A = vt);
					}
					get presentationOptions() {
						return this.y;
					}
					set presentationOptions(vt) {
						vt == null && (vt = Object.create(null)), this.B(), (this.y = vt);
					}
					get runOptions() {
						return this.z;
					}
					set runOptions(vt) {
						vt == null && (vt = Object.create(null)), this.B(), (this.z = vt);
					}
				};
				(e.Task = ii), (e.Task = ii = P = Ne([M], ii));
				var Dt;
				(function (St) {
					(St[(St.SourceControl = 1)] = "SourceControl"),
						(St[(St.Window = 10)] = "Window"),
						(St[(St.Notification = 15)] = "Notification");
				})(Dt || (e.ProgressLocation = Dt = {}));
				var Jt;
				(function (St) {
					function vt(oi) {
						const Ei = oi;
						return (0, m.$pg)(Ei.value)
							? Ei.tooltip && !(0, m.$lg)(Ei.tooltip)
								? (console.log(
										"INVALID view badge, invalid tooltip",
										Ei.tooltip,
									),
									!1)
								: !0
							: (console.log("INVALID view badge, invalid value", Ei.value),
								!1);
					}
					St.isViewBadge = vt;
				})(Jt || (e.ViewBadge = Jt = {}));
				let si = (k = class {
					static isTreeItem(vt, oi) {
						const Ei = vt;
						if (Ei.checkboxState !== void 0) {
							const tn = (0, m.$pg)(Ei.checkboxState)
									? Ei.checkboxState
									: (0, m.$ng)(Ei.checkboxState) &&
											(0, m.$pg)(Ei.checkboxState.state)
										? Ei.checkboxState.state
										: void 0,
								hn =
									!(0, m.$pg)(Ei.checkboxState) && (0, m.$ng)(Ei.checkboxState)
										? Ei.checkboxState.tooltip
										: void 0;
							if (
								tn === void 0 ||
								(tn !== ci.Checked && tn !== ci.Unchecked) ||
								(hn !== void 0 && !(0, m.$lg)(hn))
							)
								return (
									console.log(
										"INVALID tree item, invalid checkboxState",
										Ei.checkboxState,
									),
									!1
								);
						}
						if (vt instanceof k) return !0;
						if (
							Ei.label !== void 0 &&
							!(0, m.$lg)(Ei.label) &&
							!Ei.label?.label
						)
							return (
								console.log("INVALID tree item, invalid label", Ei.label), !1
							);
						if (Ei.id !== void 0 && !(0, m.$lg)(Ei.id))
							return console.log("INVALID tree item, invalid id", Ei.id), !1;
						if (
							Ei.iconPath !== void 0 &&
							!(0, m.$lg)(Ei.iconPath) &&
							!r.URI.isUri(Ei.iconPath) &&
							(!Ei.iconPath || !(0, m.$lg)(Ei.iconPath.id))
						) {
							const tn = Ei.iconPath;
							if (
								!tn ||
								(!(0, m.$lg)(tn.light) &&
									!r.URI.isUri(tn.light) &&
									!(0, m.$lg)(tn.dark) &&
									!r.URI.isUri(tn.dark))
							)
								return (
									console.log(
										"INVALID tree item, invalid iconPath",
										Ei.iconPath,
									),
									!1
								);
						}
						return Ei.description !== void 0 &&
							!(0, m.$lg)(Ei.description) &&
							typeof Ei.description != "boolean"
							? (console.log(
									"INVALID tree item, invalid description",
									Ei.description,
								),
								!1)
							: Ei.resourceUri !== void 0 && !r.URI.isUri(Ei.resourceUri)
								? (console.log(
										"INVALID tree item, invalid resourceUri",
										Ei.resourceUri,
									),
									!1)
								: Ei.tooltip !== void 0 &&
										!(0, m.$lg)(Ei.tooltip) &&
										!(Ei.tooltip instanceof He)
									? (console.log(
											"INVALID tree item, invalid tooltip",
											Ei.tooltip,
										),
										!1)
									: Ei.command !== void 0 && !Ei.command.command
										? (console.log(
												"INVALID tree item, invalid command",
												Ei.command,
											),
											!1)
										: Ei.collapsibleState !== void 0 &&
												Ei.collapsibleState < Zt.None &&
												Ei.collapsibleState > Zt.Expanded
											? (console.log(
													"INVALID tree item, invalid collapsibleState",
													Ei.collapsibleState,
												),
												!1)
											: Ei.contextValue !== void 0 &&
													!(0, m.$lg)(Ei.contextValue)
												? (console.log(
														"INVALID tree item, invalid contextValue",
														Ei.contextValue,
													),
													!1)
												: Ei.accessibilityInformation !== void 0 &&
														!Ei.accessibilityInformation?.label
													? (console.log(
															"INVALID tree item, invalid accessibilityInformation",
															Ei.accessibilityInformation,
														),
														!1)
													: !0;
					}
					constructor(vt, oi = Zt.None) {
						(this.collapsibleState = oi),
							r.URI.isUri(vt) ? (this.resourceUri = vt) : (this.label = vt);
					}
				});
				(e.$dcb = si), (e.$dcb = si = k = Ne([M], si));
				var Zt;
				(function (St) {
					(St[(St.None = 0)] = "None"),
						(St[(St.Collapsed = 1)] = "Collapsed"),
						(St[(St.Expanded = 2)] = "Expanded");
				})(Zt || (e.TreeItemCollapsibleState = Zt = {}));
				var ci;
				(function (St) {
					(St[(St.Unchecked = 0)] = "Unchecked"),
						(St[(St.Checked = 1)] = "Checked");
				})(ci || (e.TreeItemCheckboxState = ci = {}));
				let ri = class {
					async asString() {
						return typeof this.value == "string"
							? this.value
							: JSON.stringify(this.value);
					}
					asFile() {}
					constructor(vt) {
						this.value = vt;
					}
				};
				(e.$ecb = ri), (e.$ecb = ri = Ne([M], ri));
				class $i extends ri {}
				e.$fcb = $i;
				class Wt extends $i {
					#e;
					constructor(vt) {
						super(""), (this.#e = vt);
					}
					asFile() {
						return this.#e;
					}
				}
				e.$gcb = Wt;
				class tt {
					constructor(vt, oi, Ei, tn) {
						(this.name = vt),
							(this.uri = oi),
							(this._itemId = Ei),
							(this.c = tn);
					}
					data() {
						return this.c();
					}
				}
				e.$hcb = tt;
				let at = class {
					#e = new Map();
					constructor(vt) {
						for (const [oi, Ei] of vt ?? []) {
							const tn = this.#e.get(this.#t(oi));
							tn ? tn.push(Ei) : this.#e.set(this.#t(oi), [Ei]);
						}
					}
					get(vt) {
						return this.#e.get(this.#t(vt))?.[0];
					}
					set(vt, oi) {
						this.#e.set(this.#t(vt), [oi]);
					}
					forEach(vt, oi) {
						for (const [Ei, tn] of this.#e)
							for (const hn of tn) vt.call(oi, hn, Ei, this);
					}
					*[Symbol.iterator]() {
						for (const [vt, oi] of this.#e) for (const Ei of oi) yield [vt, Ei];
					}
					#t(vt) {
						return vt.toLowerCase();
					}
				};
				(e.$icb = at), (e.$icb = at = Ne([M], at));
				let pi = class {
					constructor(vt, oi, Ei) {
						(this.insertText = vt), (this.title = oi), (this.kind = Ei);
					}
				};
				(e.$jcb = pi), (e.$jcb = pi = Ne([M], pi));
				var Li;
				(function (St) {
					(St[(St.Automatic = 0)] = "Automatic"),
						(St[(St.PasteAs = 1)] = "PasteAs");
				})(Li || (e.DocumentPasteTriggerKind = Li = {}));
				class Di {
					static {
						this.c = ".";
					}
					constructor(vt) {
						this.value = vt;
					}
					append(...vt) {
						return new Di((this.value ? [this.value, ...vt] : vt).join(Di.c));
					}
					intersects(vt) {
						return this.contains(vt) || vt.contains(this);
					}
					contains(vt) {
						return (
							this.value === vt.value || vt.value.startsWith(this.value + Di.c)
						);
					}
				}
				(e.$kcb = Di), (Di.Empty = new Di(""));
				class Ui {
					constructor(vt, oi, Ei) {
						(this.title = oi), (this.insertText = vt), (this.kind = Ei);
					}
				}
				e.$lcb = Ui;
				let Wi = class {
					constructor(vt, oi) {
						(this.id = vt), (this.color = oi);
					}
					static isThemeIcon(vt) {
						return typeof vt.id != "string"
							? (console.log("INVALID ThemeIcon, invalid id", vt.id), !1)
							: !0;
					}
				};
				(e.$mcb = Wi),
					(e.$mcb = Wi = Ne([M], Wi)),
					(Wi.File = new Wi("file")),
					(Wi.Folder = new Wi("folder"));
				let Gi = class {
					constructor(vt) {
						this.id = vt;
					}
				};
				(e.$ncb = Gi), (e.$ncb = Gi = Ne([M], Gi));
				var qi;
				(function (St) {
					(St[(St.Global = 1)] = "Global"),
						(St[(St.Workspace = 2)] = "Workspace"),
						(St[(St.WorkspaceFolder = 3)] = "WorkspaceFolder");
				})(qi || (e.ConfigurationTarget = qi = {}));
				let Oi = class {
					get base() {
						return this.c;
					}
					set base(vt) {
						(this.c = vt), (this.e = r.URI.file(vt));
					}
					get baseUri() {
						return this.e;
					}
					set baseUri(vt) {
						(this.e = vt), (this.c = vt.fsPath);
					}
					constructor(vt, oi) {
						if (
							typeof vt != "string" &&
							(!vt || (!r.URI.isUri(vt) && !r.URI.isUri(vt.uri)))
						)
							throw (0, i.$$)("base");
						if (typeof oi != "string") throw (0, i.$$)("pattern");
						typeof vt == "string"
							? (this.baseUri = r.URI.file(vt))
							: r.URI.isUri(vt)
								? (this.baseUri = vt)
								: (this.baseUri = vt.uri),
							(this.pattern = oi);
					}
					toJSON() {
						return {
							pattern: this.pattern,
							base: this.base,
							baseUri: this.baseUri.toJSON(),
						};
					}
				};
				(e.$ocb = Oi), (e.$ocb = Oi = Ne([M], Oi));
				const yi = new WeakMap();
				function Ai(St, vt) {
					yi.set(St, vt);
				}
				let li = class {
					constructor(vt, oi, Ei, tn, hn) {
						(this.enabled = typeof vt == "boolean" ? vt : !0),
							typeof oi == "string" && (this.condition = oi),
							typeof Ei == "string" && (this.hitCondition = Ei),
							typeof tn == "string" && (this.logMessage = tn),
							typeof hn == "string" && (this.mode = hn);
					}
					get id() {
						return this.c || (this.c = yi.get(this) ?? (0, u.$9g)()), this.c;
					}
				};
				(e.$qcb = li), (e.$qcb = li = Ne([M], li));
				let Vi = class extends li {
					constructor(vt, oi, Ei, tn, hn, In) {
						if ((super(oi, Ei, tn, hn, In), vt === null))
							throw (0, i.$$)("location");
						this.location = vt;
					}
				};
				(e.$rcb = Vi), (e.$rcb = Vi = Ne([M], Vi));
				let wi = class extends li {
					constructor(vt, oi, Ei, tn, hn, In) {
						super(oi, Ei, tn, hn, In), (this.functionName = vt);
					}
				};
				(e.$scb = wi), (e.$scb = wi = Ne([M], wi));
				let _t = class extends li {
					constructor(vt, oi, Ei, tn, hn, In, kn, Wn) {
						if ((super(tn, hn, In, kn, Wn), !oi)) throw (0, i.$$)("dataId");
						(this.label = vt), (this.dataId = oi), (this.canPersist = Ei);
					}
				};
				(e.$tcb = _t), (e.$tcb = _t = Ne([M], _t));
				let ai = class {
					constructor(vt, oi, Ei) {
						(this.command = vt), (this.args = oi || []), (this.options = Ei);
					}
				};
				(e.$ucb = ai), (e.$ucb = ai = Ne([M], ai));
				let Ft = class {
					constructor(vt, oi) {
						(this.port = vt), (this.host = oi);
					}
				};
				(e.$vcb = Ft), (e.$vcb = Ft = Ne([M], Ft));
				let Xt = class {
					constructor(vt) {
						this.path = vt;
					}
				};
				(e.$wcb = Xt), (e.$wcb = Xt = Ne([M], Xt));
				let $t = class {
					constructor(vt) {
						this.implementation = vt;
					}
				};
				(e.$xcb = $t), (e.$xcb = $t = Ne([M], $t));
				class ut {
					constructor(vt, oi, Ei) {
						(this.session = vt), (this.threadId = oi), (this.frameId = Ei);
					}
				}
				e.$ycb = ut;
				class Et {
					constructor(vt, oi) {
						(this.session = vt), (this.threadId = oi);
					}
				}
				e.$zcb = Et;
				let Tt = class {
					constructor(vt, oi) {
						(this.range = vt), (this.expression = oi);
					}
				};
				(e.$Acb = Tt), (e.$Acb = Tt = Ne([M], Tt));
				var qt;
				(function (St) {
					(St[(St.Invoke = 0)] = "Invoke"),
						(St[(St.Automatic = 1)] = "Automatic");
				})(qt || (e.InlineCompletionTriggerKind = qt = {}));
				let At = class {
					constructor(vt, oi) {
						(this.range = vt), (this.text = oi);
					}
				};
				(e.$Bcb = At), (e.$Bcb = At = Ne([M], At));
				let Yt = class {
					constructor(vt, oi, Ei = !0) {
						(this.range = vt),
							(this.variableName = oi),
							(this.caseSensitiveLookup = Ei);
					}
				};
				(e.$Ccb = Yt), (e.$Ccb = Yt = Ne([M], Yt));
				let ni = class {
					constructor(vt, oi) {
						(this.range = vt), (this.expression = oi);
					}
				};
				(e.$Dcb = ni), (e.$Dcb = ni = Ne([M], ni));
				let bi = class {
					constructor(vt, oi) {
						(this.frameId = vt), (this.stoppedLocation = oi);
					}
				};
				(e.$Ecb = bi), (e.$Ecb = bi = Ne([M], bi));
				var fi;
				(function (St) {
					St[(St.AIGenerated = 1)] = "AIGenerated";
				})(fi || (e.NewSymbolNameTag = fi = {}));
				var Ti;
				(function (St) {
					(St[(St.Invoke = 0)] = "Invoke"),
						(St[(St.Automatic = 1)] = "Automatic");
				})(Ti || (e.NewSymbolNameTriggerKind = Ti = {}));
				class wt {
					constructor(vt, oi) {
						(this.newSymbolName = vt), (this.tags = oi);
					}
				}
				e.$Fcb = wt;
				var We;
				(function (St) {
					(St[(St.Changed = 1)] = "Changed"),
						(St[(St.Created = 2)] = "Created"),
						(St[(St.Deleted = 3)] = "Deleted");
				})(We || (e.FileChangeType = We = {}));
				let _e = (L = class extends Error {
					static FileExists(vt) {
						return new L(
							vt,
							h.FileSystemProviderErrorCode.FileExists,
							L.FileExists,
						);
					}
					static FileNotFound(vt) {
						return new L(
							vt,
							h.FileSystemProviderErrorCode.FileNotFound,
							L.FileNotFound,
						);
					}
					static FileNotADirectory(vt) {
						return new L(
							vt,
							h.FileSystemProviderErrorCode.FileNotADirectory,
							L.FileNotADirectory,
						);
					}
					static FileIsADirectory(vt) {
						return new L(
							vt,
							h.FileSystemProviderErrorCode.FileIsADirectory,
							L.FileIsADirectory,
						);
					}
					static NoPermissions(vt) {
						return new L(
							vt,
							h.FileSystemProviderErrorCode.NoPermissions,
							L.NoPermissions,
						);
					}
					static Unavailable(vt) {
						return new L(
							vt,
							h.FileSystemProviderErrorCode.Unavailable,
							L.Unavailable,
						);
					}
					constructor(vt, oi = h.FileSystemProviderErrorCode.Unknown, Ei) {
						super(r.URI.isUri(vt) ? vt.toString(!0) : vt),
							(this.code = Ei?.name ?? "Unknown"),
							(0, h.$Al)(this, oi),
							Object.setPrototypeOf(this, L.prototype),
							typeof Error.captureStackTrace == "function" &&
								typeof Ei == "function" &&
								Error.captureStackTrace(this, Ei);
					}
				});
				(e.$Gcb = _e), (e.$Gcb = _e = L = Ne([M], _e));
				let Si = class {
					constructor(vt, oi, Ei) {
						(this.start = vt), (this.end = oi), (this.kind = Ei);
					}
				};
				(e.$Hcb = Si), (e.$Hcb = Si = Ne([M], Si));
				var gi;
				(function (St) {
					(St[(St.Comment = 1)] = "Comment"),
						(St[(St.Imports = 2)] = "Imports"),
						(St[(St.Region = 3)] = "Region");
				})(gi || (e.FoldingRangeKind = gi = {}));
				var ki;
				(function (St) {
					(St[(St.Collapsed = 0)] = "Collapsed"),
						(St[(St.Expanded = 1)] = "Expanded");
				})(ki || (e.CommentThreadCollapsibleState = ki = {}));
				var Pi;
				(function (St) {
					(St[(St.Editing = 0)] = "Editing"),
						(St[(St.Preview = 1)] = "Preview");
				})(Pi || (e.CommentMode = Pi = {}));
				var Hi;
				(function (St) {
					(St[(St.Published = 0)] = "Published"),
						(St[(St.Draft = 1)] = "Draft");
				})(Hi || (e.CommentState = Hi = {}));
				var Ji;
				(function (St) {
					(St[(St.Unresolved = 0)] = "Unresolved"),
						(St[(St.Resolved = 1)] = "Resolved");
				})(Ji || (e.CommentThreadState = Ji = {}));
				var cn;
				(function (St) {
					(St[(St.Current = 0)] = "Current"),
						(St[(St.Outdated = 1)] = "Outdated");
				})(cn || (e.CommentThreadApplicability = cn = {}));
				var un;
				(function (St) {
					(St[(St.Reply = 1)] = "Reply"), (St[(St.Comment = 2)] = "Comment");
				})(un || (e.CommentThreadFocus = un = {}));
				class yn {
					constructor(vt, oi = []) {
						(this.tokenTypes = vt), (this.tokenModifiers = oi);
					}
				}
				e.$Icb = yn;
				function Rn(St) {
					return typeof St > "u" || (0, m.$mg)(St);
				}
				class _i {
					constructor(vt) {
						if (
							((this.c = 0),
							(this.e = 0),
							(this.f = !0),
							(this.g = []),
							(this.j = 0),
							(this.k = new Map()),
							(this.l = new Map()),
							(this.m = !1),
							vt)
						) {
							this.m = !0;
							for (let oi = 0, Ei = vt.tokenTypes.length; oi < Ei; oi++)
								this.k.set(vt.tokenTypes[oi], oi);
							for (let oi = 0, Ei = vt.tokenModifiers.length; oi < Ei; oi++)
								this.l.set(vt.tokenModifiers[oi], oi);
						}
					}
					push(vt, oi, Ei, tn, hn) {
						if (
							typeof vt == "number" &&
							typeof oi == "number" &&
							typeof Ei == "number" &&
							typeof tn == "number" &&
							(typeof hn == "number" || typeof hn > "u")
						)
							return typeof hn > "u" && (hn = 0), this.q(vt, oi, Ei, tn, hn);
						if (B.isRange(vt) && typeof oi == "string" && Rn(Ei))
							return this.o(vt, oi, Ei);
						throw (0, i.$$)();
					}
					o(vt, oi, Ei) {
						if (!this.m)
							throw new Error("Legend must be provided in constructor");
						if (vt.start.line !== vt.end.line)
							throw new Error("`range` cannot span multiple lines");
						if (!this.k.has(oi))
							throw new Error("`tokenType` is not in the provided legend");
						const tn = vt.start.line,
							hn = vt.start.character,
							In = vt.end.character - vt.start.character,
							kn = this.k.get(oi);
						let Wn = 0;
						if (Ei)
							for (const ys of Ei) {
								if (!this.l.has(ys))
									throw new Error(
										"`tokenModifier` is not in the provided legend",
									);
								const fs = this.l.get(ys);
								Wn |= (1 << fs) >>> 0;
							}
						this.q(tn, hn, In, kn, Wn);
					}
					q(vt, oi, Ei, tn, hn) {
						if (this.f && (vt < this.c || (vt === this.c && oi < this.e))) {
							this.f = !1;
							const Wn = (this.g.length / 5) | 0;
							let ys = 0,
								fs = 0;
							for (let bs = 0; bs < Wn; bs++) {
								let Ls = this.g[5 * bs],
									Gs = this.g[5 * bs + 1];
								Ls === 0 ? ((Ls = ys), (Gs += fs)) : (Ls += ys),
									(this.g[5 * bs] = Ls),
									(this.g[5 * bs + 1] = Gs),
									(ys = Ls),
									(fs = Gs);
							}
						}
						let In = vt,
							kn = oi;
						this.f &&
							this.j > 0 &&
							((In -= this.c), In === 0 && (kn -= this.e)),
							(this.g[this.j++] = In),
							(this.g[this.j++] = kn),
							(this.g[this.j++] = Ei),
							(this.g[this.j++] = tn),
							(this.g[this.j++] = hn),
							(this.c = vt),
							(this.e = oi);
					}
					static r(vt) {
						const oi = [],
							Ei = (vt.length / 5) | 0;
						for (let kn = 0; kn < Ei; kn++) oi[kn] = kn;
						oi.sort((kn, Wn) => {
							const ys = vt[5 * kn],
								fs = vt[5 * Wn];
							if (ys === fs) {
								const bs = vt[5 * kn + 1],
									Ls = vt[5 * Wn + 1];
								return bs - Ls;
							}
							return ys - fs;
						});
						const tn = new Uint32Array(vt.length);
						let hn = 0,
							In = 0;
						for (let kn = 0; kn < Ei; kn++) {
							const Wn = 5 * oi[kn],
								ys = vt[Wn + 0],
								fs = vt[Wn + 1],
								bs = vt[Wn + 2],
								Ls = vt[Wn + 3],
								Gs = vt[Wn + 4],
								er = ys - hn,
								Nr = er === 0 ? fs - In : fs,
								Fs = 5 * kn;
							(tn[Fs + 0] = er),
								(tn[Fs + 1] = Nr),
								(tn[Fs + 2] = bs),
								(tn[Fs + 3] = Ls),
								(tn[Fs + 4] = Gs),
								(hn = ys),
								(In = fs);
						}
						return tn;
					}
					build(vt) {
						return this.f
							? new Bn(new Uint32Array(this.g), vt)
							: new Bn(_i.r(this.g), vt);
					}
				}
				e.$Jcb = _i;
				class Bn {
					constructor(vt, oi) {
						(this.resultId = oi), (this.data = vt);
					}
				}
				e.$Kcb = Bn;
				class Mn {
					constructor(vt, oi, Ei) {
						(this.start = vt), (this.deleteCount = oi), (this.data = Ei);
					}
				}
				e.$Lcb = Mn;
				class zn {
					constructor(vt, oi) {
						(this.resultId = oi), (this.edits = vt);
					}
				}
				e.$Mcb = zn;
				var $n;
				(function (St) {
					(St[(St.Separate = 0)] = "Separate"),
						(St[(St.MergeWithParent = 1)] = "MergeWithParent");
				})($n || (e.DebugConsoleMode = $n = {}));
				class Ln {
					constructor(vt) {
						this.name = vt;
					}
				}
				e.$Ncb = Ln;
				var wn;
				(function (St) {
					(St[(St.Title = 1)] = "Title"), (St[(St.Inline = 2)] = "Inline");
				})(wn || (e.QuickInputButtonLocation = wn = {}));
				let Hn = class {
					static {
						this.Back = { iconPath: new Wi("arrow-left") };
					}
					constructor() {}
				};
				(e.$Ocb = Hn), (e.$Ocb = Hn = Ne([M], Hn));
				var Yn;
				(function (St) {
					(St[(St.Separator = -1)] = "Separator"),
						(St[(St.Default = 0)] = "Default");
				})(Yn || (e.QuickPickItemKind = Yn = {}));
				var Es;
				(function (St) {
					(St[(St.Info = 1)] = "Info"),
						(St[(St.Warning = 2)] = "Warning"),
						(St[(St.Error = 3)] = "Error");
				})(Es || (e.InputBoxValidationSeverity = Es = {}));
				var Nn;
				(function (St) {
					(St[(St.UI = 1)] = "UI"), (St[(St.Workspace = 2)] = "Workspace");
				})(Nn || (e.ExtensionKind = Nn = {}));
				class Fn {
					static validate(vt) {
						if (typeof vt.badge == "string") {
							let oi = (0, d.$Wf)(vt.badge, 0);
							if (
								(oi < vt.badge.length && (oi += (0, d.$Wf)(vt.badge, oi)),
								vt.badge.length > oi)
							)
								throw new Error(
									"The 'badge'-property must be undefined or a short character",
								);
						} else if (vt.badge && !Wi.isThemeIcon(vt.badge))
							throw new Error("The 'badge'-property is not a valid ThemeIcon");
						if (!vt.color && !vt.badge && !vt.tooltip)
							throw new Error("The decoration is empty");
						return !0;
					}
					constructor(vt, oi, Ei) {
						(this.badge = vt), (this.tooltip = oi), (this.color = Ei);
					}
				}
				e.$Pcb = Fn;
				let Gn = class {
					constructor(vt) {
						this.kind = vt;
					}
				};
				(e.$Qcb = Gn), (e.$Qcb = Gn = Ne([M], Gn));
				var Dn;
				(function (St) {
					(St[(St.Light = 1)] = "Light"),
						(St[(St.Dark = 2)] = "Dark"),
						(St[(St.HighContrast = 3)] = "HighContrast"),
						(St[(St.HighContrastLight = 4)] = "HighContrastLight");
				})(Dn || (e.ColorThemeKind = Dn = {}));
				class jn {
					static isNotebookRange(vt) {
						return vt instanceof jn
							? !0
							: vt
								? typeof vt.start == "number" && typeof vt.end == "number"
								: !1;
					}
					get start() {
						return this.c;
					}
					get end() {
						return this.e;
					}
					get isEmpty() {
						return this.c === this.e;
					}
					constructor(vt, oi) {
						if (vt < 0) throw (0, i.$$)("start must be positive");
						if (oi < 0) throw (0, i.$$)("end must be positive");
						vt <= oi
							? ((this.c = vt), (this.e = oi))
							: ((this.c = oi), (this.e = vt));
					}
					with(vt) {
						let oi = this.c,
							Ei = this.e;
						return (
							vt.start !== void 0 && (oi = vt.start),
							vt.end !== void 0 && (Ei = vt.end),
							oi === this.c && Ei === this.e ? this : new jn(oi, Ei)
						);
					}
				}
				e.$Rcb = jn;
				class rs {
					static validate(vt) {
						if (typeof vt.kind != "number")
							throw new Error("NotebookCellData MUST have 'kind' property");
						if (typeof vt.value != "string")
							throw new Error("NotebookCellData MUST have 'value' property");
						if (typeof vt.languageId != "string")
							throw new Error(
								"NotebookCellData MUST have 'languageId' property",
							);
					}
					static isNotebookCellDataArray(vt) {
						return (
							Array.isArray(vt) && vt.every((oi) => rs.isNotebookCellData(oi))
						);
					}
					static isNotebookCellData(vt) {
						return !0;
					}
					constructor(vt, oi, Ei, tn, hn, In, kn) {
						(this.kind = vt),
							(this.value = oi),
							(this.languageId = Ei),
							(this.mime = tn),
							(this.outputs = hn ?? []),
							(this.metadata = In),
							(this.executionSummary = kn),
							rs.validate(this);
					}
				}
				e.$Scb = rs;
				class Js {
					constructor(vt) {
						this.cells = vt;
					}
				}
				e.$Tcb = Js;
				class ts {
					static isNotebookCellOutputItem(vt) {
						return vt instanceof ts
							? !0
							: vt
								? typeof vt.mime == "string" && vt.data instanceof Uint8Array
								: !1;
					}
					static error(vt) {
						const oi = { name: vt.name, message: vt.message, stack: vt.stack };
						return ts.json(oi, "application/vnd.code.notebook.error");
					}
					static stdout(vt) {
						return ts.text(vt, "application/vnd.code.notebook.stdout");
					}
					static stderr(vt) {
						return ts.text(vt, "application/vnd.code.notebook.stderr");
					}
					static bytes(vt, oi = "application/octet-stream") {
						return new ts(vt, oi);
					}
					static #e = new TextEncoder();
					static text(vt, oi = C.$EK.text) {
						const Ei = ts.#e.encode(String(vt));
						return new ts(Ei, oi);
					}
					static json(vt, oi = "text/x-json") {
						const Ei = JSON.stringify(vt, void 0, "	");
						return ts.text(Ei, oi);
					}
					constructor(vt, oi) {
						(this.data = vt), (this.mime = oi);
						const Ei = (0, C.$IK)(oi, !0);
						if (!Ei)
							throw new Error(
								`INVALID mime type: ${oi}. Must be in the format "type/subtype[;optionalparameter]"`,
							);
						this.mime = Ei;
					}
				}
				e.$Ucb = ts;
				class js {
					static isNotebookCellOutput(vt) {
						return vt instanceof js
							? !0
							: !vt || typeof vt != "object"
								? !1
								: typeof vt.id == "string" && Array.isArray(vt.items);
					}
					static ensureUniqueMimeTypes(vt, oi = !1) {
						const Ei = new Set(),
							tn = new Set();
						for (let hn = 0; hn < vt.length; hn++) {
							const In = vt[hn],
								kn = (0, C.$IK)(In.mime);
							if (!Ei.has(kn) || (0, n.$76)(kn)) {
								Ei.add(kn);
								continue;
							}
							tn.add(hn),
								oi &&
									console.warn(
										`DUPLICATED mime type '${In.mime}' will be dropped`,
									);
						}
						return tn.size === 0 ? vt : vt.filter((hn, In) => !tn.has(In));
					}
					constructor(vt, oi, Ei) {
						(this.items = js.ensureUniqueMimeTypes(vt, !0)),
							typeof oi == "string"
								? ((this.id = oi), (this.metadata = Ei))
								: ((this.id = (0, u.$9g)()), (this.metadata = oi ?? Ei));
					}
				}
				e.$Vcb = js;
				var os;
				(function (St) {
					(St[(St.Markup = 1)] = "Markup"), (St[(St.Code = 2)] = "Code");
				})(os || (e.NotebookCellKind = os = {}));
				var En;
				(function (St) {
					(St[(St.Idle = 1)] = "Idle"),
						(St[(St.Pending = 2)] = "Pending"),
						(St[(St.Executing = 3)] = "Executing");
				})(En || (e.NotebookCellExecutionState = En = {}));
				var ns;
				(function (St) {
					(St[(St.Left = 1)] = "Left"), (St[(St.Right = 2)] = "Right");
				})(ns || (e.NotebookCellStatusBarAlignment = ns = {}));
				var Fi;
				(function (St) {
					(St[(St.Default = 0)] = "Default"),
						(St[(St.InCenter = 1)] = "InCenter"),
						(St[(St.InCenterIfOutsideViewport = 2)] =
							"InCenterIfOutsideViewport"),
						(St[(St.AtTop = 3)] = "AtTop");
				})(Fi || (e.NotebookEditorRevealType = Fi = {}));
				class zi {
					constructor(vt, oi) {
						(this.text = vt), (this.alignment = oi);
					}
				}
				e.$Wcb = zi;
				var Zi;
				(function (St) {
					(St[(St.Default = 1)] = "Default"),
						(St[(St.Preferred = 2)] = "Preferred");
				})(Zi || (e.NotebookControllerAffinity = Zi = {}));
				var nn;
				(function (St) {
					(St[(St.Default = 1)] = "Default"),
						(St[(St.Preferred = 2)] = "Preferred"),
						(St[(St.Hidden = -1)] = "Hidden");
				})(nn || (e.NotebookControllerAffinity2 = nn = {}));
				class fn {
					constructor(vt, oi = []) {
						(this.uri = vt), (this.provides = (0, t.$6b)(oi));
					}
				}
				e.$Xcb = fn;
				class xn {
					constructor(vt) {
						this.label = vt;
					}
				}
				e.$Ycb = xn;
				var Sn;
				(function (St) {
					(St[(St.Named = 1)] = "Named"), (St[(St.Indexed = 2)] = "Indexed");
				})(Sn || (e.NotebookVariablesRequestKind = Sn = {}));
				let Un = class {
					constructor(vt, oi) {
						(this.label = vt), (this.timestamp = oi);
					}
				};
				(e.$Zcb = Un), (e.$Zcb = Un = Ne([M], Un));
				var as;
				(function (St) {
					(St[(St.Production = 1)] = "Production"),
						(St[(St.Development = 2)] = "Development"),
						(St[(St.Test = 3)] = "Test");
				})(as || (e.ExtensionMode = as = {}));
				var Qn;
				(function (St) {
					(St[(St.Node = 1)] = "Node"), (St[(St.Webworker = 2)] = "Webworker");
				})(Qn || (e.ExtensionRuntime = Qn = {}));
				var $s;
				(function (St) {
					(St[(St.Other = 0)] = "Other"),
						(St[(St.Comment = 1)] = "Comment"),
						(St[(St.String = 2)] = "String"),
						(St[(St.RegEx = 3)] = "RegEx");
				})($s || (e.StandardTokenType = $s = {}));
				class Us {
					constructor(vt, oi) {
						(this.ranges = vt), (this.wordPattern = oi);
					}
				}
				e.$1cb = Us;
				class _n {
					constructor(vt) {
						this.c = vt;
					}
					get autoForwardAction() {
						return this.c;
					}
				}
				e.$2cb = _n;
				var sn;
				(function (St) {
					(St[(St.Queued = 1)] = "Queued"),
						(St[(St.Running = 2)] = "Running"),
						(St[(St.Passed = 3)] = "Passed"),
						(St[(St.Failed = 4)] = "Failed"),
						(St[(St.Skipped = 5)] = "Skipped"),
						(St[(St.Errored = 6)] = "Errored");
				})(sn || (e.TestResultState = sn = {}));
				var dn;
				(function (St) {
					(St[(St.Run = 1)] = "Run"),
						(St[(St.Debug = 2)] = "Debug"),
						(St[(St.Coverage = 3)] = "Coverage");
				})(dn || (e.TestRunProfileKind = dn = {}));
				let An = class {
					constructor(vt = void 0, oi = void 0, Ei = void 0, tn = !1, hn = !0) {
						(this.include = vt),
							(this.exclude = oi),
							(this.profile = Ei),
							(this.continuous = tn),
							(this.preserveFocus = hn);
					}
				};
				(e.$3cb = An), (e.$3cb = An = Ne([M], An));
				let vn = (D = class {
					static diff(vt, oi, Ei) {
						const tn = new D(vt);
						return (tn.expectedOutput = oi), (tn.actualOutput = Ei), tn;
					}
					constructor(vt) {
						this.message = vt;
					}
				});
				(e.$4cb = vn), (e.$4cb = vn = D = Ne([M], vn));
				let Pn = class {
					constructor(vt) {
						this.id = vt;
					}
				};
				(e.$5cb = Pn), (e.$5cb = Pn = Ne([M], Pn));
				class es {
					constructor(vt, oi, Ei) {
						(this.label = vt), (this.uri = oi), (this.position = Ei);
					}
				}
				e.$6cb = es;
				class ls {
					constructor(vt, oi) {
						(this.covered = vt), (this.total = oi), Jn(this);
					}
				}
				e.$7cb = ls;
				function Jn(St) {
					if (St) {
						if (St.covered > St.total)
							throw new Error(
								`The total number of covered items (${St.covered}) cannot be greater than the total (${St.total})`,
							);
						if (St.total < 0)
							throw new Error(
								`The number of covered items (${St.total}) cannot be negative`,
							);
					}
				}
				class ss {
					static fromDetails(vt, oi) {
						const Ei = new ls(0, 0),
							tn = new ls(0, 0),
							hn = new ls(0, 0);
						for (const kn of oi)
							if ("branches" in kn) {
								(Ei.total += 1), (Ei.covered += kn.executed ? 1 : 0);
								for (const Wn of kn.branches)
									(tn.total += 1), (tn.covered += Wn.executed ? 1 : 0);
							} else (hn.total += 1), (hn.covered += kn.executed ? 1 : 0);
						const In = new ss(
							vt,
							Ei,
							tn.total > 0 ? tn : void 0,
							hn.total > 0 ? hn : void 0,
						);
						return (In.detailedCoverage = oi), In;
					}
					constructor(vt, oi, Ei, tn, hn = []) {
						(this.uri = vt),
							(this.statementCoverage = oi),
							(this.branchCoverage = Ei),
							(this.declarationCoverage = tn),
							(this.fromTests = hn);
					}
				}
				e.$9cb = ss;
				class us {
					get executionCount() {
						return +this.executed;
					}
					set executionCount(vt) {
						this.executed = vt;
					}
					constructor(vt, oi, Ei = []) {
						(this.executed = vt), (this.location = oi), (this.branches = Ei);
					}
				}
				e.$0cb = us;
				class Rs {
					get executionCount() {
						return +this.executed;
					}
					set executionCount(vt) {
						this.executed = vt;
					}
					constructor(vt, oi, Ei) {
						(this.executed = vt), (this.location = oi), (this.label = Ei);
					}
				}
				e.$$cb = Rs;
				class Ws {
					get executionCount() {
						return +this.executed;
					}
					set executionCount(vt) {
						this.executed = vt;
					}
					constructor(vt, oi, Ei) {
						(this.name = vt), (this.executed = oi), (this.location = Ei);
					}
				}
				e.$_cb = Ws;
				var br;
				(function (St) {
					(St[(St.None = 0)] = "None"),
						(St[(St.Option = 1)] = "Option"),
						(St[(St.Default = 2)] = "Default"),
						(St[(St.Preferred = 3)] = "Preferred");
				})(br || (e.ExternalUriOpenerPriority = br = {}));
				var $r;
				(function (St) {
					(St[(St.Untrusted = 0)] = "Untrusted"),
						(St[(St.Trusted = 1)] = "Trusted"),
						(St[(St.Unspecified = 2)] = "Unspecified");
				})($r || (e.WorkspaceTrustState = $r = {}));
				var Xs;
				(function (St) {
					(St[(St.Notify = 1)] = "Notify"),
						(St[(St.OpenBrowser = 2)] = "OpenBrowser"),
						(St[(St.OpenPreview = 3)] = "OpenPreview"),
						(St[(St.Silent = 4)] = "Silent"),
						(St[(St.Ignore = 5)] = "Ignore"),
						(St[(St.OpenBrowserOnce = 6)] = "OpenBrowserOnce");
				})(Xs || (e.PortAutoForwardAction = Xs = {}));
				class ir {
					constructor(vt, oi, Ei, tn, hn, In) {
						(this.kind = vt),
							(this.name = oi),
							(this.detail = Ei),
							(this.uri = tn),
							(this.range = hn),
							(this.selectionRange = In);
					}
				}
				e.$adb = ir;
				class nr {
					constructor(vt) {
						this.uri = vt;
					}
				}
				e.$bdb = nr;
				class Ys {
					constructor(vt, oi) {
						(this.original = vt), (this.modified = oi);
					}
				}
				e.$cdb = Ys;
				class yr {
					constructor(vt, oi, Ei, tn) {
						(this.base = vt),
							(this.input1 = oi),
							(this.input2 = Ei),
							(this.result = tn);
					}
				}
				e.$ddb = yr;
				class Zs {
					constructor(vt, oi) {
						(this.uri = vt), (this.viewType = oi);
					}
				}
				e.$edb = Zs;
				class wr {
					constructor(vt) {
						this.viewType = vt;
					}
				}
				e.$fdb = wr;
				class vr {
					constructor(vt, oi) {
						(this.uri = vt), (this.notebookType = oi);
					}
				}
				e.$gdb = vr;
				class Cr {
					constructor(vt, oi, Ei) {
						(this.original = vt),
							(this.modified = oi),
							(this.notebookType = Ei);
					}
				}
				e.$hdb = Cr;
				class sr {
					constructor() {}
				}
				e.$idb = sr;
				class Io {
					constructor(vt, oi) {
						(this.uri = vt), (this.inputBoxUri = oi);
					}
				}
				e.$jdb = Io;
				class Sr {
					constructor() {}
				}
				e.$kdb = Sr;
				class Xr {
					constructor(vt) {
						this.textDiffs = vt;
					}
				}
				e.$ldb = Xr;
				var Qs;
				(function (St) {
					(St[(St.Down = 0)] = "Down"), (St[(St.Up = 1)] = "Up");
				})(Qs || (e.InteractiveSessionVoteDirection = Qs = {}));
				var qs;
				(function (St) {
					(St[(St.Action = 1)] = "Action"), (St[(St.Toolbar = 2)] = "Toolbar");
				})(qs || (e.ChatCopyKind = qs = {}));
				var xr;
				(function (St) {
					(St[(St.Short = 1)] = "Short"),
						(St[(St.Medium = 2)] = "Medium"),
						(St[(St.Full = 3)] = "Full");
				})(xr || (e.ChatVariableLevel = xr = {}));
				class Yr {
					constructor(vt, oi, Ei) {
						(this.id = vt), (this.label = oi), (this.values = Ei);
					}
				}
				e.$mdb = Yr;
				var zr;
				(function (St) {
					(St[(St.Unhelpful = 0)] = "Unhelpful"),
						(St[(St.Helpful = 1)] = "Helpful"),
						(St[(St.Undone = 2)] = "Undone"),
						(St[(St.Accepted = 3)] = "Accepted"),
						(St[(St.Bug = 4)] = "Bug");
				})(zr || (e.InteractiveEditorResponseFeedbackKind = zr = {}));
				var Er;
				(function (St) {
					(St[(St.Unhelpful = 0)] = "Unhelpful"),
						(St[(St.Helpful = 1)] = "Helpful");
				})(Er || (e.ChatResultFeedbackKind = Er = {}));
				class Zr {
					constructor(vt) {
						if (typeof vt != "string" && vt.isTrusted === !0)
							throw new Error(
								"The boolean form of MarkdownString.isTrusted is NOT supported for chat participants.",
							);
						this.value = typeof vt == "string" ? new He(vt) : vt;
					}
				}
				e.$ndb = Zr;
				class uo {
					constructor(vt, oi) {
						if (typeof vt != "string" && vt.isTrusted === !0)
							throw new Error(
								"The boolean form of MarkdownString.isTrusted is NOT supported for chat participants.",
							);
						(this.value = typeof vt == "string" ? new He(vt) : vt),
							(this.vulnerabilities = oi);
					}
				}
				e.$odb = uo;
				class Ir {
					constructor(vt, oi) {
						(this.participant = vt), (this.command = oi);
					}
				}
				e.$pdb = Ir;
				class jr {
					constructor(vt, oi, Ei, tn) {
						(this.title = vt),
							(this.message = oi),
							(this.data = Ei),
							(this.buttons = tn);
					}
				}
				e.$qdb = jr;
				class Is {
					constructor(vt, oi) {
						(this.value = vt), (this.baseUri = oi);
					}
				}
				e.$rdb = Is;
				class Ur {
					constructor(vt, oi) {
						(this.value = vt), (this.title = oi);
					}
				}
				e.$sdb = Ur;
				class rr {
					constructor(vt) {
						this.value = vt;
					}
				}
				e.$tdb = rr;
				class Vs {
					constructor(vt, oi) {
						(this.value = vt), (this.task = oi);
					}
				}
				e.$udb = Vs;
				class or {
					constructor(vt) {
						if (typeof vt != "string" && vt.isTrusted === !0)
							throw new Error(
								"The boolean form of MarkdownString.isTrusted is NOT supported for chat participants.",
							);
						this.value = typeof vt == "string" ? new He(vt) : vt;
					}
				}
				e.$vdb = or;
				class Hs {
					constructor(vt) {
						this.value = vt;
					}
				}
				e.$wdb = Hs;
				class ar {
					constructor(vt, oi, Ei) {
						(this.value = vt), (this.iconPath = oi), (this.options = Ei);
					}
				}
				e.$xdb = ar;
				class Tr {
					constructor(vt, oi, Ei) {
						(this.value = vt), (this.license = oi), (this.snippet = Ei);
					}
				}
				e.$ydb = Tr;
				class ws {
					constructor(vt, oi) {
						(this.uri = vt), (this.range = oi);
					}
				}
				e.$zdb = ws;
				class Pr {
					constructor(vt, oi) {
						(this.uri = vt), (this.edits = Array.isArray(oi) ? oi : [oi]);
					}
				}
				e.$Adb = Pr;
				class Ci {
					constructor(vt, oi, Ei, tn) {
						(this.prompt = vt),
							(this.command = oi),
							(this.references = Ei),
							(this.participant = tn);
					}
				}
				e.$Bdb = Ci;
				class vs {
					constructor(vt, oi, Ei, tn) {
						(this.response = vt),
							(this.result = oi),
							(this.participant = Ei),
							(this.command = tn);
					}
				}
				e.$Cdb = vs;
				var Ts;
				(function (St) {
					(St[(St.Panel = 1)] = "Panel"),
						(St[(St.Terminal = 2)] = "Terminal"),
						(St[(St.Notebook = 3)] = "Notebook"),
						(St[(St.Editor = 4)] = "Editor");
				})(Ts || (e.ChatLocation = Ts = {}));
				var kr;
				(function (St) {
					(St[(St.Complete = 1)] = "Complete"),
						(St[(St.Partial = 2)] = "Partial"),
						(St[(St.Omitted = 3)] = "Omitted");
				})(kr || (e.ChatResponseReferencePartStatusKind = kr = {}));
				class ks {
					constructor(vt, oi, Ei) {
						(this.document = vt), (this.selection = oi), (this.wholeRange = Ei);
					}
				}
				e.$Ddb = ks;
				class cr {
					constructor(vt) {
						this.cell = vt;
					}
				}
				e.$Edb = cr;
				var ds;
				(function (St) {
					(St[(St.User = 1)] = "User"),
						(St[(St.Assistant = 2)] = "Assistant"),
						(St[(St.System = 3)] = "System");
				})(ds || (e.LanguageModelChatMessageRole = ds = {}));
				class Lr {
					constructor(vt, oi, Ei) {
						(this.toolCallId = vt),
							(this.content = oi),
							(this.isError = Ei ?? !1);
					}
				}
				e.$Fdb = Lr;
				class is {
					static User(vt, oi) {
						const Ei = new is(ds.User, typeof vt == "string" ? vt : "", oi);
						return (Ei.content2 = [vt]), Ei;
					}
					static Assistant(vt, oi) {
						return new is(ds.Assistant, vt, oi);
					}
					constructor(vt, oi, Ei) {
						(this.role = vt),
							(this.content = oi),
							(this.content2 = [oi]),
							(this.name = Ei);
					}
				}
				e.$Gdb = is;
				class Wr {
					constructor(vt, oi, Ei) {
						(this.name = vt), (this.toolCallId = oi), (this.parameters = Ei);
					}
				}
				e.$Hdb = Wr;
				class hs {
					constructor(vt) {
						this.value = vt;
					}
				}
				e.$Idb = hs;
				class _s {
					constructor(vt) {
						this.content = vt;
					}
				}
				e.$Jdb = _s;
				class Qr {
					constructor(vt, oi) {
						(this.content = vt), (this.name = oi);
					}
				}
				e.$Kdb = Qr;
				class Dr {
					constructor(vt, oi) {
						(this.content = vt), (this.name = oi);
					}
				}
				e.$Ldb = Dr;
				class Cs extends Error {
					static NotFound(vt) {
						return new Cs(vt, Cs.NotFound.name);
					}
					static NoPermissions(vt) {
						return new Cs(vt, Cs.NoPermissions.name);
					}
					static Blocked(vt) {
						return new Cs(vt, Cs.Blocked.name);
					}
					constructor(vt, oi, Ei) {
						super(vt, { cause: Ei }),
							(this.name = "LanguageModelError"),
							(this.code = oi ?? "");
					}
				}
				e.$Mdb = Cs;
				var lr;
				(function (St) {
					(St[(St.SymbolInformation = 1)] = "SymbolInformation"),
						(St[(St.CommandInformation = 2)] = "CommandInformation"),
						(St[(St.SearchInformation = 3)] = "SearchInformation"),
						(St[(St.SettingInformation = 4)] = "SettingInformation");
				})(lr || (e.RelatedInformationType = lr = {}));
				var en;
				(function (St) {
					(St[(St.Started = 1)] = "Started"),
						(St[(St.Recognizing = 2)] = "Recognizing"),
						(St[(St.Recognized = 3)] = "Recognized"),
						(St[(St.Stopped = 4)] = "Stopped"),
						(St[(St.Error = 5)] = "Error");
				})(en || (e.SpeechToTextStatus = en = {}));
				var Ks;
				(function (St) {
					(St[(St.Started = 1)] = "Started"),
						(St[(St.Stopped = 2)] = "Stopped"),
						(St[(St.Error = 3)] = "Error");
				})(Ks || (e.TextToSpeechStatus = Ks = {}));
				var As;
				(function (St) {
					(St[(St.Recognized = 1)] = "Recognized"),
						(St[(St.Stopped = 2)] = "Stopped");
				})(As || (e.KeywordRecognitionStatus = As = {}));
				class Os {
					constructor(vt, oi) {
						(this.text = vt), (this.range = oi);
					}
				}
				e.$Ndb = Os;
				var Mr;
				(function (St) {
					(St[(St.Invoke = 0)] = "Invoke"),
						(St[(St.Automatic = 1)] = "Automatic");
				})(Mr || (e.InlineEditTriggerKind = Mr = {}));
			},
		),
		define(
			de[3465],
			he([1, 0, 6, 3, 9, 189, 88, 107, 78, 101, 1028]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Hoc = void 0);
				let a = class extends i.$1c {
					constructor(n, g, p) {
						super(),
							(this.b = g),
							(this.a = n.getProxy(C.$mbb.ExtHostTerminalShellIntegration));
						const o = new Map();
						this.D(
							(0, i.$Yc)(() => {
								for (const $ of o.values()) $.dispose();
							}),
						);
						const f = this.B.add(
							this.b.createOnInstanceEvent(($) =>
								t.Event.map(
									t.Event.filter(
										$.capabilities.onDidAddCapabilityType,
										(v) => v === E.TerminalCapability.CommandDetection,
									),
									() => $,
								),
							),
						).event;
						this.B.add(f(($) => this.a.$shellIntegrationChange($.instanceId)));
						const b = this.B.add(
							this.b.createOnInstanceCapabilityEvent(
								E.TerminalCapability.CommandDetection,
								($) => $.onCommandExecuted,
							),
						);
						let s;
						this.B.add(
							b.event(($) => {
								if ($.data === s) return;
								s = $.data;
								const v = $.instance.instanceId;
								this.a.$shellExecutionStart(
									v,
									$.data.command,
									h($.data),
									$.data.isTrusted,
									this.c($.data.cwd),
								),
									o.get(v)?.dispose(),
									o.set(
										v,
										t.Event.accumulate(
											$.instance.onData,
											50,
											this.B,
										)((S) => this.a.$shellExecutionData(v, S.join(""))),
									);
							}),
						);
						const l = this.B.add(
							this.b.createOnInstanceCapabilityEvent(
								E.TerminalCapability.CommandDetection,
								($) => $.onCommandFinished,
							),
						);
						this.B.add(
							l.event(($) => {
								s = void 0;
								const v = $.instance.instanceId;
								o.get(v)?.dispose(),
									setTimeout(() => {
										this.a.$shellExecutionEnd(
											v,
											$.data.command,
											h($.data),
											$.data.isTrusted,
											$.data.exitCode,
										);
									});
							}),
						);
						const y = this.B.add(
							this.b.createOnInstanceCapabilityEvent(
								E.TerminalCapability.CwdDetection,
								($) => $.onDidChangeCwd,
							),
						);
						this.B.add(
							y.event(($) => {
								this.a.$cwdChange($.instance.instanceId, this.c($.data));
							}),
						),
							this.B.add(
								this.b.onDidDisposeInstance(($) =>
									this.a.$closeTerminal($.instanceId),
								),
							);
					}
					$executeCommand(n, g) {
						this.b.getInstanceFromId(n)?.runCommand(g, !0);
					}
					c(n) {
						return n ? w.URI.file(n) : void 0;
					}
				};
				(e.$Hoc = a),
					(e.$Hoc = a =
						Ne(
							[
								(0, r.$tmc)(C.$lbb.MainThreadTerminalShellIntegration),
								j(1, d.$iIb),
								j(2, m.$r8),
							],
							a,
						));
				function h(c) {
					switch (c.commandLineConfidence) {
						case "high":
							return u.TerminalShellExecutionCommandLineConfidence.High;
						case "medium":
							return u.TerminalShellExecutionCommandLineConfidence.Medium;
						case "low":
						default:
							return u.TerminalShellExecutionCommandLineConfidence.Low;
					}
				}
			},
		),
		define(
			de[3466],
			he([1, 0, 33, 6, 3, 4, 5, 34, 374, 88, 2941, 2942, 1028]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$4pc = e.$3pc = e.TunnelDtoConverter = void 0),
					(E = mt(E)),
					(h = mt(h));
				class c extends m.$mO {}
				var n;
				(function (p) {
					function o(b) {
						return {
							remoteAddress: b.remoteAddress,
							localAddress: b.localAddress,
							public: !!b.public,
							privacy:
								b.privacy ??
								(b.public
									? m.TunnelPrivacyId.Public
									: m.TunnelPrivacyId.Private),
							protocol: b.protocol,
						};
					}
					p.fromApiTunnel = o;
					function f(b) {
						return {
							remoteAddress: {
								host: b.tunnelRemoteHost,
								port: b.tunnelRemotePort,
							},
							localAddress: b.localAddress,
							public:
								b.privacy !== m.TunnelPrivacyId.ConstantPrivate &&
								b.privacy !== m.TunnelPrivacyId.ConstantPrivate,
							privacy: b.privacy,
							protocol: b.protocol,
						};
					}
					p.fromServiceTunnel = f;
				})(n || (e.TunnelDtoConverter = n = {})),
					(e.$3pc = (0, C.$Mi)("IExtHostTunnelService"));
				let g = class extends w.$1c {
					constructor(o, f, b) {
						super(),
							(this.r = b),
							(this.f = () => Promise.resolve(!0)),
							(this.g = new Map()),
							(this.h = new i.$re()),
							(this.onDidChangeTunnels = this.h.event),
							(this.n = 0),
							(this.q = new Map()),
							(this.a = o.getProxy(r.$lbb.MainThreadTunnelService));
					}
					async openTunnel(o, f) {
						this.r.trace(
							`ForwardedPorts: (ExtHostTunnelService) ${o.identifier.value} called openTunnel API for ${f.remoteAddress.host}:${f.remoteAddress.port}.`,
						);
						const b = await this.a.$openTunnel(f, o.displayName);
						if (b) {
							const s = new c(b.remoteAddress, b.localAddress, () =>
								this.a.$closeTunnel(b.remoteAddress),
							);
							return this.D(s), s;
						}
					}
					async getTunnels() {
						return this.a.$getTunnels();
					}
					s() {
						return this.n++;
					}
					registerPortsAttributesProvider(o, f) {
						o.portRange === void 0 &&
							o.commandPattern === void 0 &&
							this.r.error(
								"PortAttributesProvider must specify either a portRange or a commandPattern",
							);
						const b = this.s();
						return (
							this.q.set(b, { selector: o, provider: f }),
							this.a.$registerPortsAttributesProvider(o, b),
							new h.$nbb(() => {
								this.q.delete(b), this.a.$unregisterPortsAttributesProvider(b);
							})
						);
					}
					async $providePortAttributes(o, f, b, s, l) {
						const y = [];
						for (const v of o) {
							const S = this.q.get(v);
							if (!S) return [];
							y.push(
								...(await Promise.all(
									f.map(async (I) => {
										let T;
										try {
											T = await S.provider.providePortAttributes(
												{ port: I, pid: b, commandLine: s },
												l,
											);
										} catch {
											T = await S.provider.providePortAttributes(I, b, s, l);
										}
										return { providedAttributes: T, port: I };
									}),
								)),
							);
						}
						const $ = y.filter((v) => !!v.providedAttributes);
						return $.length > 0
							? $.map((v) => ({
									autoForwardAction: v.providedAttributes.autoForwardAction,
									port: v.port,
								}))
							: [];
					}
					async $registerCandidateFinder(o) {}
					registerTunnelProvider(o, f) {
						if (this.b)
							throw new Error(
								"A tunnel provider has already been registered. Only the first tunnel provider to be registered will be used.",
							);
						this.b = async (s, l) =>
							(await o.provideTunnel(s, l, t.CancellationToken.None)) ?? void 0;
						const b = f.tunnelFeatures
							? {
									elevation: !!f.tunnelFeatures?.elevation,
									privacyOptions: f.tunnelFeatures?.privacyOptions,
									protocol:
										f.tunnelFeatures.protocol === void 0
											? !0
											: f.tunnelFeatures.protocol,
								}
							: void 0;
						return (
							this.a.$setTunnelProvider(b),
							Promise.resolve(
								(0, w.$Yc)(() => {
									(this.b = void 0), this.a.$setTunnelProvider(void 0);
								}),
							)
						);
					}
					async setTunnelFactory(o, f) {
						if (o) {
							o.candidatePortSource !== void 0 &&
								this.a.$setCandidatePortSource(o.candidatePortSource),
								o.showCandidatePort &&
									((this.f = o.showCandidatePort),
									this.a.$setCandidateFilter());
							const b = o.tunnelFactory ?? (f ? this.u(f) : void 0);
							if (b) {
								this.b = b;
								let s = o.tunnelFeatures?.privacyOptions ?? [];
								o.tunnelFeatures?.public &&
									s.length === 0 &&
									(s = [
										{
											id: "private",
											label: E.localize(2723, null),
											themeIcon: "lock",
										},
										{
											id: "public",
											label: E.localize(2724, null),
											themeIcon: "eye",
										},
									]);
								const l = o.tunnelFeatures
									? {
											elevation: !!o.tunnelFeatures?.elevation,
											public: !!o.tunnelFeatures?.public,
											privacyOptions: s,
											protocol: !0,
										}
									: void 0;
								this.a.$setTunnelProvider(l);
							}
						} else this.b = void 0;
						return (0, w.$Yc)(() => {
							this.b = void 0;
						});
					}
					u(o) {}
					async $closeTunnel(o, f) {
						if (this.g.has(o.host)) {
							const b = this.g.get(o.host);
							b.has(o.port) &&
								(f && b.get(o.port).disposeListener.dispose(),
								await b.get(o.port).tunnel.dispose(),
								b.delete(o.port));
						}
					}
					async $onDidTunnelsChange() {
						this.h.fire();
					}
					async $forwardPort(o, f) {
						if (this.b)
							try {
								this.r.trace(
									"ForwardedPorts: (ExtHostTunnelService) Getting tunnel from provider.",
								);
								const b = this.b(o, f);
								if (
									(this.r.trace(
										"ForwardedPorts: (ExtHostTunnelService) Got tunnel promise from provider.",
									),
									b !== void 0)
								) {
									const s = await b;
									if (
										(this.r.trace(
											"ForwardedPorts: (ExtHostTunnelService) Successfully awaited tunnel from provider.",
										),
										s === void 0)
									) {
										this.r.error(
											"ForwardedPorts: (ExtHostTunnelService) Resolved tunnel is undefined",
										);
										return;
									}
									this.g.has(o.remoteAddress.host) ||
										this.g.set(o.remoteAddress.host, new Map());
									const l = this.D(
										s.onDidDispose(
											() => (
												this.r.trace(
													"ForwardedPorts: (ExtHostTunnelService) Extension fired tunnel's onDidDispose.",
												),
												this.a.$closeTunnel(s.remoteAddress)
											),
										),
									);
									return (
										this.g
											.get(o.remoteAddress.host)
											.set(o.remoteAddress.port, {
												tunnel: s,
												disposeListener: l,
											}),
										n.fromApiTunnel(s)
									);
								} else
									this.r.trace(
										"ForwardedPorts: (ExtHostTunnelService) Tunnel is undefined",
									);
							} catch (b) {
								if (
									(this.r.trace(
										"ForwardedPorts: (ExtHostTunnelService) tunnel provider error",
									),
									b instanceof Error)
								)
									return b.message;
							}
					}
					async $applyCandidateFilter(o) {
						const f = await Promise.all(
								o.map((s) => this.f(s.host, s.port, s.detail ?? "")),
							),
							b = o.filter((s, l) => f[l]);
						return (
							this.r.trace(
								`ForwardedPorts: (ExtHostTunnelService) filtered from ${o.map((s) => s.port).join(", ")} to ${b.map((s) => s.port).join(", ")}`,
							),
							b
						);
					}
				};
				(e.$4pc = g),
					(e.$4pc = g = Ne([j(0, a.$08), j(1, u.$98), j(2, d.$ik)], g));
			},
		),
		define(
			de[1836],
			he([
				1, 0, 24, 76, 489, 288, 94, 59, 434, 197, 266, 82, 743, 19, 26, 28, 9,
				38, 17, 171, 74, 64, 90, 84, 3181, 44, 153, 1023, 112, 70, 259, 185, 18,
				1028,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.LanguageModelToolDescription =
						e.DebugTreeItem =
						e.PartialAcceptTriggerKind =
						e.PartialAcceptInfo =
						e.TerminalQuickFix =
						e.LanguageModelToolResult =
						e.ChatAgentUserActionEvent =
						e.ChatAgentResult =
						e.ChatAgentCompletionItem =
						e.ChatLanguageModelToolReference =
						e.ChatPromptReference =
						e.ChatLocation =
						e.ChatAgentRequest =
						e.ChatResponsePart =
						e.ChatResponseCodeCitationPart =
						e.ChatResponseReferencePart =
						e.ChatResponseTextEditPart =
						e.ChatResponseCommandButtonPart =
						e.ChatTaskResult =
						e.ChatTask =
						e.ChatResponseMovePart =
						e.ChatResponseWarningPart =
						e.ChatResponseProgressPart =
						e.ChatResponseAnchorPart =
						e.ChatResponseFilesPart =
						e.ChatResponseConfirmationPart =
						e.ChatResponseDetectedParticipantPart =
						e.ChatResponseMarkdownWithVulnerabilitiesPart =
						e.ChatResponseMarkdownPart =
						e.LanguageModelChatMessage =
						e.LanguageModelChatMessageRole =
						e.ChatFollowup =
						e.DataTransfer =
						e.DataTransferItem =
						e.ViewBadge =
						e.TypeHierarchyItem =
						e.CodeActionTriggerKind =
						e.TestCoverage =
						e.TestResults =
						e.TestItem =
						e.TestTag =
						e.TestMessage =
						e.NotebookRendererScript =
						e.NotebookDocumentContentOptions =
						e.NotebookKernelSourceAction =
						e.NotebookStatusBarItem =
						e.NotebookExclusiveDocumentPattern =
						e.NotebookCellOutput =
						e.NotebookCellOutputItem =
						e.NotebookCellData =
						e.NotebookData =
						e.NotebookCellKind =
						e.NotebookCellExecutionState =
						e.NotebookCellExecutionSummary =
						e.NotebookRange =
						e.MappedEditsContext =
						e.LanguageSelector =
						e.GlobPattern =
						e.TextEditorOpenOptions =
						e.FoldingRangeKind =
						e.FoldingRange =
						e.ProgressLocation =
						e.EndOfLine =
						e.TextEditorLineNumbersStyle =
						e.TextDocumentSaveReason =
						e.SelectionRange =
						e.Color =
						e.ColorPresentation =
						e.DocumentLink =
						e.InlayHintKind =
						e.InlayHintLabelPart =
						e.InlayHint =
						e.SignatureHelp =
						e.SignatureInformation =
						e.ParameterInformation =
						e.CompletionItem =
						e.CompletionItemKind =
						e.CompletionItemTag =
						e.CompletionContext =
						e.CompletionTriggerKind =
						e.MultiDocumentHighlight =
						e.DocumentHighlight =
						e.InlineValueContext =
						e.InlineValue =
						e.EvaluatableExpression =
						e.Hover =
						e.DefinitionLink =
						e.location =
						e.CallHierarchyOutgoingCall =
						e.CallHierarchyIncomingCall =
						e.CallHierarchyItem =
						e.DocumentSymbol =
						e.WorkspaceSymbol =
						e.SymbolTag =
						e.SymbolKind =
						e.WorkspaceEdit =
						e.TextEdit =
						e.DecorationRenderOptions =
						e.DecorationRangeBehavior =
						e.ThemableDecorationRenderOptions =
						e.ThemableDecorationAttachmentRenderOptions =
						e.MarkdownString =
						e.ViewColumn =
						e.DiagnosticSeverity =
						e.DiagnosticRelatedInformation =
						e.Diagnostic =
						e.DiagnosticTag =
						e.DocumentSelector =
						e.Position =
						e.TokenType =
						e.Location =
						e.Range =
						e.Selection =
							void 0),
					(e.$g9 = K),
					(e.$h9 = W),
					(e.$i9 = X),
					(C = mt(C)),
					(m = mt(m)),
					(f = mt(f)),
					(b = mt(b)),
					(s = mt(s)),
					(T = mt(T)),
					(k = mt(k)),
					(N = mt(N));
				var A;
				(function (Ft) {
					function Xt(ut) {
						const {
								selectionStartLineNumber: Et,
								selectionStartColumn: Tt,
								positionLineNumber: qt,
								positionColumn: At,
							} = ut,
							Yt = new N.$obb(Et - 1, Tt - 1),
							ni = new N.$obb(qt - 1, At - 1);
						return new N.$qbb(Yt, ni);
					}
					Ft.to = Xt;
					function $t(ut) {
						const { anchor: Et, active: Tt } = ut;
						return {
							selectionStartLineNumber: Et.line + 1,
							selectionStartColumn: Et.character + 1,
							positionLineNumber: Tt.line + 1,
							positionColumn: Tt.character + 1,
						};
					}
					Ft.from = $t;
				})(A || (e.Selection = A = {}));
				var R;
				(function (Ft) {
					function Xt(ut) {
						if (!ut) return;
						const { start: Et, end: Tt } = ut;
						return {
							startLineNumber: Et.line + 1,
							startColumn: Et.character + 1,
							endLineNumber: Tt.line + 1,
							endColumn: Tt.character + 1,
						};
					}
					Ft.from = Xt;
					function $t(ut) {
						if (!ut) return;
						const {
							startLineNumber: Et,
							startColumn: Tt,
							endLineNumber: qt,
							endColumn: At,
						} = ut;
						return new N.$pbb(Et - 1, Tt - 1, qt - 1, At - 1);
					}
					Ft.to = $t;
				})(R || (e.Range = R = {}));
				var O;
				(function (Ft) {
					function Xt(ut) {
						return { uri: ut.uri, range: R.from(ut.range) };
					}
					Ft.from = Xt;
					function $t(ut) {
						return new N.$Bbb(p.URI.revive(ut.uri), R.to(ut.range));
					}
					Ft.to = $t;
				})(O || (e.Location = O = {}));
				var B;
				(function (Ft) {
					function Xt($t) {
						switch ($t) {
							case b.StandardTokenType.Comment:
								return N.StandardTokenType.Comment;
							case b.StandardTokenType.Other:
								return N.StandardTokenType.Other;
							case b.StandardTokenType.RegEx:
								return N.StandardTokenType.RegEx;
							case b.StandardTokenType.String:
								return N.StandardTokenType.String;
						}
					}
					Ft.to = Xt;
				})(B || (e.TokenType = B = {}));
				var U;
				(function (Ft) {
					function Xt(ut) {
						return new N.$obb(ut.lineNumber - 1, ut.column - 1);
					}
					Ft.to = Xt;
					function $t(ut) {
						return { lineNumber: ut.line + 1, column: ut.character + 1 };
					}
					Ft.from = $t;
				})(U || (e.Position = U = {}));
				var z;
				(function (Ft) {
					function Xt(Et, Tt, qt) {
						return (0, t.$Lb)((0, t.$6b)(Et).map((At) => $t(At, Tt, qt)));
					}
					Ft.from = Xt;
					function $t(Et, Tt, qt) {
						if (typeof Et == "string")
							return {
								$serialized: !0,
								language: Et,
								isBuiltin: qt?.isBuiltin,
							};
						if (Et)
							return {
								$serialized: !0,
								language: Et.language,
								scheme: ut(Et.scheme, Tt),
								pattern: Ve.from(Et.pattern) ?? void 0,
								exclusive: Et.exclusive,
								notebookType: Et.notebookType,
								isBuiltin: qt?.isBuiltin,
							};
					}
					function ut(Et, Tt) {
						return Tt && typeof Et == "string"
							? Tt.transformOutgoingScheme(Et)
							: Et;
					}
				})(z || (e.DocumentSelector = z = {}));
				var F;
				(function (Ft) {
					function Xt(ut) {
						switch (ut) {
							case N.DiagnosticTag.Unnecessary:
								return y.MarkerTag.Unnecessary;
							case N.DiagnosticTag.Deprecated:
								return y.MarkerTag.Deprecated;
						}
					}
					Ft.from = Xt;
					function $t(ut) {
						switch (ut) {
							case y.MarkerTag.Unnecessary:
								return N.DiagnosticTag.Unnecessary;
							case y.MarkerTag.Deprecated:
								return N.DiagnosticTag.Deprecated;
							default:
								return;
						}
					}
					Ft.to = $t;
				})(F || (e.DiagnosticTag = F = {}));
				var x;
				(function (Ft) {
					function Xt(ut) {
						let Et;
						return (
							ut.code &&
								((0, g.$lg)(ut.code) || (0, g.$pg)(ut.code)
									? (Et = String(ut.code))
									: (Et = {
											value: String(ut.code.value),
											target: ut.code.target,
										})),
							{
								...R.from(ut.range),
								message: ut.message,
								source: ut.source,
								code: Et,
								severity: q.from(ut.severity),
								relatedInformation:
									ut.relatedInformation && ut.relatedInformation.map(H.from),
								tags: Array.isArray(ut.tags)
									? (0, t.$Lb)(ut.tags.map(F.from))
									: void 0,
							}
						);
					}
					Ft.from = Xt;
					function $t(ut) {
						const Et = new N.$Dbb(R.to(ut), ut.message, q.to(ut.severity));
						return (
							(Et.source = ut.source),
							(Et.code = (0, g.$lg)(ut.code) ? ut.code : ut.code?.value),
							(Et.relatedInformation =
								ut.relatedInformation && ut.relatedInformation.map(H.to)),
							(Et.tags = ut.tags && (0, t.$Lb)(ut.tags.map(F.to))),
							Et
						);
					}
					Ft.to = $t;
				})(x || (e.Diagnostic = x = {}));
				var H;
				(function (Ft) {
					function Xt(ut) {
						return {
							...R.from(ut.location.range),
							message: ut.message,
							resource: ut.location.uri,
						};
					}
					Ft.from = Xt;
					function $t(ut) {
						return new N.$Cbb(new N.$Bbb(ut.resource, R.to(ut)), ut.message);
					}
					Ft.to = $t;
				})(H || (e.DiagnosticRelatedInformation = H = {}));
				var q;
				(function (Ft) {
					function Xt(ut) {
						switch (ut) {
							case N.DiagnosticSeverity.Error:
								return y.MarkerSeverity.Error;
							case N.DiagnosticSeverity.Warning:
								return y.MarkerSeverity.Warning;
							case N.DiagnosticSeverity.Information:
								return y.MarkerSeverity.Info;
							case N.DiagnosticSeverity.Hint:
								return y.MarkerSeverity.Hint;
						}
						return y.MarkerSeverity.Error;
					}
					Ft.from = Xt;
					function $t(ut) {
						switch (ut) {
							case y.MarkerSeverity.Info:
								return N.DiagnosticSeverity.Information;
							case y.MarkerSeverity.Warning:
								return N.DiagnosticSeverity.Warning;
							case y.MarkerSeverity.Error:
								return N.DiagnosticSeverity.Error;
							case y.MarkerSeverity.Hint:
								return N.DiagnosticSeverity.Hint;
							default:
								return N.DiagnosticSeverity.Error;
						}
					}
					Ft.to = $t;
				})(q || (e.DiagnosticSeverity = q = {}));
				var V;
				(function (Ft) {
					function Xt(ut) {
						return typeof ut == "number" && ut >= N.ViewColumn.One
							? ut - 1
							: ut === N.ViewColumn.Beside
								? M.$KY
								: M.$JY;
					}
					Ft.from = Xt;
					function $t(ut) {
						if (typeof ut == "number" && ut >= 0) return ut + 1;
						throw new Error("invalid 'EditorGroupColumn'");
					}
					Ft.to = $t;
				})(V || (e.ViewColumn = V = {}));
				function G(Ft) {
					return typeof Ft.range < "u";
				}
				function K(Ft) {
					return Ft.length === 0 ? !0 : !!G(Ft[0]);
				}
				var J;
				(function (Ft) {
					function Xt(At) {
						return At.map(Ft.from);
					}
					Ft.fromMany = Xt;
					function $t(At) {
						return (
							At &&
							typeof At == "object" &&
							typeof At.language == "string" &&
							typeof At.value == "string"
						);
					}
					function ut(At) {
						let Yt;
						if ($t(At)) {
							const { language: fi, value: Ti } = At;
							Yt = {
								value:
									"```" +
									fi +
									`
` +
									Ti +
									"\n```\n",
							};
						} else
							N.$Rbb.isMarkdownString(At)
								? (Yt = {
										value: At.value,
										isTrusted: At.isTrusted,
										supportThemeIcons: At.supportThemeIcons,
										supportHtml: At.supportHtml,
										baseUri: At.baseUri,
									})
								: typeof At == "string"
									? (Yt = { value: At })
									: (Yt = { value: "" });
						const ni = Object.create(null);
						Yt.uris = ni;
						const bi = ({ href: fi }) => {
							try {
								let Ti = p.URI.parse(fi, !0);
								(Ti = Ti.with({ query: Et(Ti.query, ni) })), (ni[fi] = Ti);
							} catch {}
							return "";
						};
						return (
							m.marked.walkTokens(m.marked.lexer(Yt.value), (fi) => {
								fi.type === "link"
									? bi({ href: fi.href })
									: fi.type === "image" &&
										typeof fi.href == "string" &&
										bi(C.$kl(fi.href));
							}),
							Yt
						);
					}
					Ft.from = ut;
					function Et(At, Yt) {
						if (!At) return At;
						let ni;
						try {
							ni = (0, r.$ii)(At);
						} catch {}
						if (!ni) return At;
						let bi = !1;
						return (
							(ni = (0, a.$xo)(ni, (fi) => {
								if (p.URI.isUri(fi)) {
									const Ti = `__uri_${Math.random().toString(16).slice(2, 8)}`;
									return (Yt[Ti] = fi), (bi = !0), Ti;
								} else return;
							})),
							bi ? JSON.stringify(ni) : At
						);
					}
					function Tt(At) {
						const Yt = new N.$Rbb(At.value, At.supportThemeIcons);
						return (
							(Yt.isTrusted = At.isTrusted),
							(Yt.supportHtml = At.supportHtml),
							(Yt.baseUri = At.baseUri ? p.URI.from(At.baseUri) : void 0),
							Yt
						);
					}
					Ft.to = Tt;
					function qt(At) {
						if (At) return typeof At == "string" ? At : Ft.from(At);
					}
					Ft.fromStrict = qt;
				})(J || (e.MarkdownString = J = {}));
				function W(Ft) {
					return K(Ft)
						? Ft.map((Xt) => ({
								range: R.from(Xt.range),
								hoverMessage: Array.isArray(Xt.hoverMessage)
									? J.fromMany(Xt.hoverMessage)
									: Xt.hoverMessage
										? J.from(Xt.hoverMessage)
										: void 0,
								renderOptions: Xt.renderOptions,
							}))
						: Ft.map((Xt) => ({ range: R.from(Xt) }));
				}
				function X(Ft) {
					return typeof Ft > "u"
						? Ft
						: typeof Ft == "string"
							? p.URI.file(Ft)
							: Ft;
				}
				var Y;
				(function (Ft) {
					function Xt($t) {
						return typeof $t > "u"
							? $t
							: {
									contentText: $t.contentText,
									contentIconPath: $t.contentIconPath
										? X($t.contentIconPath)
										: void 0,
									border: $t.border,
									borderColor: $t.borderColor,
									fontStyle: $t.fontStyle,
									fontWeight: $t.fontWeight,
									textDecoration: $t.textDecoration,
									color: $t.color,
									backgroundColor: $t.backgroundColor,
									margin: $t.margin,
									width: $t.width,
									height: $t.height,
								};
					}
					Ft.from = Xt;
				})(Y || (e.ThemableDecorationAttachmentRenderOptions = Y = {}));
				var ie;
				(function (Ft) {
					function Xt($t) {
						return typeof $t > "u"
							? $t
							: {
									backgroundColor: $t.backgroundColor,
									outline: $t.outline,
									outlineColor: $t.outlineColor,
									outlineStyle: $t.outlineStyle,
									outlineWidth: $t.outlineWidth,
									border: $t.border,
									borderColor: $t.borderColor,
									borderRadius: $t.borderRadius,
									borderSpacing: $t.borderSpacing,
									borderStyle: $t.borderStyle,
									borderWidth: $t.borderWidth,
									fontStyle: $t.fontStyle,
									fontWeight: $t.fontWeight,
									textDecoration: $t.textDecoration,
									cursor: $t.cursor,
									color: $t.color,
									opacity: $t.opacity,
									letterSpacing: $t.letterSpacing,
									gutterIconPath: $t.gutterIconPath
										? X($t.gutterIconPath)
										: void 0,
									gutterIconSize: $t.gutterIconSize,
									overviewRulerColor: $t.overviewRulerColor,
									before: $t.before ? Y.from($t.before) : void 0,
									after: $t.after ? Y.from($t.after) : void 0,
								};
					}
					Ft.from = Xt;
				})(ie || (e.ThemableDecorationRenderOptions = ie = {}));
				var ne;
				(function (Ft) {
					function Xt($t) {
						if (typeof $t > "u") return $t;
						switch ($t) {
							case N.DecorationRangeBehavior.OpenOpen:
								return l.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges;
							case N.DecorationRangeBehavior.ClosedClosed:
								return l.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges;
							case N.DecorationRangeBehavior.OpenClosed:
								return l.TrackedRangeStickiness.GrowsOnlyWhenTypingBefore;
							case N.DecorationRangeBehavior.ClosedOpen:
								return l.TrackedRangeStickiness.GrowsOnlyWhenTypingAfter;
						}
					}
					Ft.from = Xt;
				})(ne || (e.DecorationRangeBehavior = ne = {}));
				var ee;
				(function (Ft) {
					function Xt($t) {
						return {
							isWholeLine: $t.isWholeLine,
							rangeBehavior: $t.rangeBehavior
								? ne.from($t.rangeBehavior)
								: void 0,
							overviewRulerLane: $t.overviewRulerLane,
							light: $t.light ? ie.from($t.light) : void 0,
							dark: $t.dark ? ie.from($t.dark) : void 0,
							backgroundColor: $t.backgroundColor,
							outline: $t.outline,
							outlineColor: $t.outlineColor,
							outlineStyle: $t.outlineStyle,
							outlineWidth: $t.outlineWidth,
							border: $t.border,
							borderColor: $t.borderColor,
							borderRadius: $t.borderRadius,
							borderSpacing: $t.borderSpacing,
							borderStyle: $t.borderStyle,
							borderWidth: $t.borderWidth,
							fontStyle: $t.fontStyle,
							fontWeight: $t.fontWeight,
							textDecoration: $t.textDecoration,
							cursor: $t.cursor,
							color: $t.color,
							opacity: $t.opacity,
							letterSpacing: $t.letterSpacing,
							gutterIconPath: $t.gutterIconPath ? X($t.gutterIconPath) : void 0,
							gutterIconSize: $t.gutterIconSize,
							overviewRulerColor: $t.overviewRulerColor,
							before: $t.before ? Y.from($t.before) : void 0,
							after: $t.after ? Y.from($t.after) : void 0,
						};
					}
					Ft.from = Xt;
				})(ee || (e.DecorationRenderOptions = ee = {}));
				var _;
				(function (Ft) {
					function Xt(ut) {
						return {
							text: ut.newText,
							eol: ut.newEol && Ae.from(ut.newEol),
							range: R.from(ut.range),
						};
					}
					Ft.from = Xt;
					function $t(ut) {
						const Et = new N.$wbb(R.to(ut.range), ut.text);
						return (
							(Et.newEol = typeof ut.eol > "u" ? void 0 : Ae.to(ut.eol)), Et
						);
					}
					Ft.to = $t;
				})(_ || (e.TextEdit = _ = {}));
				var te;
				(function (Ft) {
					function Xt(ut, Et) {
						const Tt = { edits: [] };
						if (ut instanceof N.$zbb) {
							const qt = new d.$Hc();
							for (const At of ut._allEntries())
								At._type === N.FileEditType.File &&
									p.URI.isUri(At.to) &&
									At.from === void 0 &&
									qt.add(At.to);
							for (const At of ut._allEntries())
								if (At._type === N.FileEditType.File) {
									let Yt;
									At.options?.contents &&
										(ArrayBuffer.isView(At.options.contents)
											? (Yt = {
													type: "base64",
													value: (0, i.$cf)(i.$Te.wrap(At.options.contents)),
												})
											: (Yt = {
													type: "dataTransferItem",
													id: At.options.contents._itemId,
												})),
										Tt.edits.push({
											oldResource: At.from,
											newResource: At.to,
											options: { ...At.options, contents: Yt },
											metadata: At.metadata,
										});
								} else
									At._type === N.FileEditType.Text
										? Tt.edits.push({
												resource: At.uri,
												textEdit: _.from(At.edit),
												versionId: qt.has(At.uri)
													? void 0
													: Et?.getTextDocumentVersion(At.uri),
												metadata: At.metadata,
											})
										: At._type === N.FileEditType.Snippet
											? Tt.edits.push({
													resource: At.uri,
													textEdit: {
														range: R.from(At.range),
														text: At.edit.value,
														insertAsSnippet: !0,
													},
													versionId: qt.has(At.uri)
														? void 0
														: Et?.getTextDocumentVersion(At.uri),
													metadata: At.metadata,
												})
											: At._type === N.FileEditType.Cell
												? Tt.edits.push({
														metadata: At.metadata,
														resource: At.uri,
														cellEdit: At.edit,
														notebookMetadata: At.notebookMetadata,
														notebookVersionId: Et?.getNotebookDocumentVersion(
															At.uri,
														),
													})
												: At._type === N.FileEditType.CellReplace &&
													Tt.edits.push({
														metadata: At.metadata,
														resource: At.uri,
														notebookVersionId: Et?.getNotebookDocumentVersion(
															At.uri,
														),
														cellEdit: {
															editType: k.CellEditType.Replace,
															index: At.index,
															count: At.count,
															cells: At.cells.map(ct.from),
														},
													});
						}
						return Tt;
					}
					Ft.from = Xt;
					function $t(ut) {
						const Et = new N.$zbb(),
							Tt = new d.$Gc();
						for (const qt of ut.edits)
							if (qt.textEdit) {
								const At = qt,
									Yt = p.URI.revive(At.resource),
									ni = R.to(At.textEdit.range),
									bi = At.textEdit.text,
									fi = At.textEdit.insertAsSnippet;
								let Ti;
								fi
									? (Ti = N.$ybb.replace(ni, new N.$Abb(bi)))
									: (Ti = N.$wbb.replace(ni, bi));
								const wt = Tt.get(Yt);
								wt ? wt.push(Ti) : Tt.set(Yt, [Ti]);
							} else
								Et.renameFile(
									p.URI.revive(qt.oldResource),
									p.URI.revive(qt.newResource),
									qt.options,
								);
						for (const [qt, At] of Tt) Et.set(qt, At);
						return Et;
					}
					Ft.to = $t;
				})(te || (e.WorkspaceEdit = te = {}));
				var Q;
				(function (Ft) {
					const Xt = Object.create(null);
					(Xt[N.SymbolKind.File] = s.SymbolKind.File),
						(Xt[N.SymbolKind.Module] = s.SymbolKind.Module),
						(Xt[N.SymbolKind.Namespace] = s.SymbolKind.Namespace),
						(Xt[N.SymbolKind.Package] = s.SymbolKind.Package),
						(Xt[N.SymbolKind.Class] = s.SymbolKind.Class),
						(Xt[N.SymbolKind.Method] = s.SymbolKind.Method),
						(Xt[N.SymbolKind.Property] = s.SymbolKind.Property),
						(Xt[N.SymbolKind.Field] = s.SymbolKind.Field),
						(Xt[N.SymbolKind.Constructor] = s.SymbolKind.Constructor),
						(Xt[N.SymbolKind.Enum] = s.SymbolKind.Enum),
						(Xt[N.SymbolKind.Interface] = s.SymbolKind.Interface),
						(Xt[N.SymbolKind.Function] = s.SymbolKind.Function),
						(Xt[N.SymbolKind.Variable] = s.SymbolKind.Variable),
						(Xt[N.SymbolKind.Constant] = s.SymbolKind.Constant),
						(Xt[N.SymbolKind.String] = s.SymbolKind.String),
						(Xt[N.SymbolKind.Number] = s.SymbolKind.Number),
						(Xt[N.SymbolKind.Boolean] = s.SymbolKind.Boolean),
						(Xt[N.SymbolKind.Array] = s.SymbolKind.Array),
						(Xt[N.SymbolKind.Object] = s.SymbolKind.Object),
						(Xt[N.SymbolKind.Key] = s.SymbolKind.Key),
						(Xt[N.SymbolKind.Null] = s.SymbolKind.Null),
						(Xt[N.SymbolKind.EnumMember] = s.SymbolKind.EnumMember),
						(Xt[N.SymbolKind.Struct] = s.SymbolKind.Struct),
						(Xt[N.SymbolKind.Event] = s.SymbolKind.Event),
						(Xt[N.SymbolKind.Operator] = s.SymbolKind.Operator),
						(Xt[N.SymbolKind.TypeParameter] = s.SymbolKind.TypeParameter);
					function $t(Et) {
						return typeof Xt[Et] == "number" ? Xt[Et] : s.SymbolKind.Property;
					}
					Ft.from = $t;
					function ut(Et) {
						for (const Tt in Xt) if (Xt[Tt] === Et) return Number(Tt);
						return N.SymbolKind.Property;
					}
					Ft.to = ut;
				})(Q || (e.SymbolKind = Q = {}));
				var Z;
				(function (Ft) {
					function Xt(ut) {
						switch (ut) {
							case N.SymbolTag.Deprecated:
								return s.SymbolTag.Deprecated;
						}
					}
					Ft.from = Xt;
					function $t(ut) {
						switch (ut) {
							case s.SymbolTag.Deprecated:
								return N.SymbolTag.Deprecated;
						}
					}
					Ft.to = $t;
				})(Z || (e.SymbolTag = Z = {}));
				var se;
				(function (Ft) {
					function Xt(ut) {
						return {
							name: ut.name,
							kind: Q.from(ut.kind),
							tags: ut.tags && ut.tags.map(Z.from),
							containerName: ut.containerName,
							location: pe.from(ut.location),
						};
					}
					Ft.from = Xt;
					function $t(ut) {
						const Et = new N.$Ibb(
							ut.name,
							Q.to(ut.kind),
							ut.containerName,
							pe.to(ut.location),
						);
						return (Et.tags = ut.tags && ut.tags.map(Z.to)), Et;
					}
					Ft.to = $t;
				})(se || (e.WorkspaceSymbol = se = {}));
				var re;
				(function (Ft) {
					function Xt(ut) {
						const Et = {
							name: ut.name || "!!MISSING: name!!",
							detail: ut.detail,
							range: R.from(ut.range),
							selectionRange: R.from(ut.selectionRange),
							kind: Q.from(ut.kind),
							tags: ut.tags?.map(Z.from) ?? [],
						};
						return ut.children && (Et.children = ut.children.map(Xt)), Et;
					}
					Ft.from = Xt;
					function $t(ut) {
						const Et = new N.$Jbb(
							ut.name,
							ut.detail,
							Q.to(ut.kind),
							R.to(ut.range),
							R.to(ut.selectionRange),
						);
						return (
							(0, t.$Pb)(ut.tags) && (Et.tags = ut.tags.map(Z.to)),
							ut.children && (Et.children = ut.children.map($t)),
							Et
						);
					}
					Ft.to = $t;
				})(re || (e.DocumentSymbol = re = {}));
				var le;
				(function (Ft) {
					function Xt(ut) {
						const Et = new N.$Nbb(
							Q.to(ut.kind),
							ut.name,
							ut.detail || "",
							p.URI.revive(ut.uri),
							R.to(ut.range),
							R.to(ut.selectionRange),
						);
						return (
							(Et._sessionId = ut._sessionId), (Et._itemId = ut._itemId), Et
						);
					}
					Ft.to = Xt;
					function $t(ut, Et, Tt) {
						if (
							((Et = Et ?? ut._sessionId),
							(Tt = Tt ?? ut._itemId),
							Et === void 0 || Tt === void 0)
						)
							throw new Error("invalid item");
						return {
							_sessionId: Et,
							_itemId: Tt,
							name: ut.name,
							detail: ut.detail,
							kind: Q.from(ut.kind),
							uri: ut.uri,
							range: R.from(ut.range),
							selectionRange: R.from(ut.selectionRange),
							tags: ut.tags?.map(Z.from),
						};
					}
					Ft.from = $t;
				})(le || (e.CallHierarchyItem = le = {}));
				var oe;
				(function (Ft) {
					function Xt($t) {
						return new N.$Obb(
							le.to($t.from),
							$t.fromRanges.map((ut) => R.to(ut)),
						);
					}
					Ft.to = Xt;
				})(oe || (e.CallHierarchyIncomingCall = oe = {}));
				var ae;
				(function (Ft) {
					function Xt($t) {
						return new N.$Pbb(
							le.to($t.to),
							$t.fromRanges.map((ut) => R.to(ut)),
						);
					}
					Ft.to = Xt;
				})(ae || (e.CallHierarchyOutgoingCall = ae = {}));
				var pe;
				(function (Ft) {
					function Xt(ut) {
						return { range: ut.range && R.from(ut.range), uri: ut.uri };
					}
					Ft.from = Xt;
					function $t(ut) {
						return new N.$Bbb(p.URI.revive(ut.uri), R.to(ut.range));
					}
					Ft.to = $t;
				})(pe || (e.location = pe = {}));
				var $e;
				(function (Ft) {
					function Xt(ut) {
						const Et = ut,
							Tt = ut;
						return {
							originSelectionRange: Et.originSelectionRange
								? R.from(Et.originSelectionRange)
								: void 0,
							uri: Et.targetUri ? Et.targetUri : Tt.uri,
							range: R.from(Et.targetRange ? Et.targetRange : Tt.range),
							targetSelectionRange: Et.targetSelectionRange
								? R.from(Et.targetSelectionRange)
								: void 0,
						};
					}
					Ft.from = Xt;
					function $t(ut) {
						return {
							targetUri: p.URI.revive(ut.uri),
							targetRange: R.to(ut.range),
							targetSelectionRange: ut.targetSelectionRange
								? R.to(ut.targetSelectionRange)
								: void 0,
							originSelectionRange: ut.originSelectionRange
								? R.to(ut.originSelectionRange)
								: void 0,
						};
					}
					Ft.to = $t;
				})($e || (e.DefinitionLink = $e = {}));
				var ye;
				(function (Ft) {
					function Xt(ut) {
						return {
							range: R.from(ut.range),
							contents: J.fromMany(ut.contents),
							canIncreaseVerbosity: ut.canIncreaseVerbosity,
							canDecreaseVerbosity: ut.canDecreaseVerbosity,
						};
					}
					Ft.from = Xt;
					function $t(ut) {
						const Et = ut.contents.map(J.to),
							Tt = R.to(ut.range),
							qt = ut.canIncreaseVerbosity,
							At = ut.canDecreaseVerbosity;
						return new N.$Fbb(Et, Tt, qt, At);
					}
					Ft.to = $t;
				})(ye || (e.Hover = ye = {}));
				var ue;
				(function (Ft) {
					function Xt(ut) {
						return { range: R.from(ut.range), expression: ut.expression };
					}
					Ft.from = Xt;
					function $t(ut) {
						return new N.$Acb(R.to(ut.range), ut.expression);
					}
					Ft.to = $t;
				})(ue || (e.EvaluatableExpression = ue = {}));
				var fe;
				(function (Ft) {
					function Xt(ut) {
						if (ut instanceof N.$Bcb)
							return { type: "text", range: R.from(ut.range), text: ut.text };
						if (ut instanceof N.$Ccb)
							return {
								type: "variable",
								range: R.from(ut.range),
								variableName: ut.variableName,
								caseSensitiveLookup: ut.caseSensitiveLookup,
							};
						if (ut instanceof N.$Dcb)
							return {
								type: "expression",
								range: R.from(ut.range),
								expression: ut.expression,
							};
						throw new Error("Unknown 'InlineValue' type");
					}
					Ft.from = Xt;
					function $t(ut) {
						switch (ut.type) {
							case "text":
								return { range: R.to(ut.range), text: ut.text };
							case "variable":
								return {
									range: R.to(ut.range),
									variableName: ut.variableName,
									caseSensitiveLookup: ut.caseSensitiveLookup,
								};
							case "expression":
								return { range: R.to(ut.range), expression: ut.expression };
						}
					}
					Ft.to = $t;
				})(fe || (e.InlineValue = fe = {}));
				var me;
				(function (Ft) {
					function Xt(ut) {
						return {
							frameId: ut.frameId,
							stoppedLocation: R.from(ut.stoppedLocation),
						};
					}
					Ft.from = Xt;
					function $t(ut) {
						return new N.$Ecb(ut.frameId, R.to(ut.stoppedLocation));
					}
					Ft.to = $t;
				})(me || (e.InlineValueContext = me = {}));
				var ve;
				(function (Ft) {
					function Xt(ut) {
						return { range: R.from(ut.range), kind: ut.kind };
					}
					Ft.from = Xt;
					function $t(ut) {
						return new N.$Gbb(R.to(ut.range), ut.kind);
					}
					Ft.to = $t;
				})(ve || (e.DocumentHighlight = ve = {}));
				var ge;
				(function (Ft) {
					function Xt(ut) {
						return { uri: ut.uri, highlights: ut.highlights.map(ve.from) };
					}
					Ft.from = Xt;
					function $t(ut) {
						return new N.$Hbb(p.URI.revive(ut.uri), ut.highlights.map(ve.to));
					}
					Ft.to = $t;
				})(ge || (e.MultiDocumentHighlight = ge = {}));
				var be;
				(function (Ft) {
					function Xt($t) {
						switch ($t) {
							case s.CompletionTriggerKind.TriggerCharacter:
								return N.CompletionTriggerKind.TriggerCharacter;
							case s.CompletionTriggerKind.TriggerForIncompleteCompletions:
								return N.CompletionTriggerKind.TriggerForIncompleteCompletions;
							case s.CompletionTriggerKind.Invoke:
							default:
								return N.CompletionTriggerKind.Invoke;
						}
					}
					Ft.to = Xt;
				})(be || (e.CompletionTriggerKind = be = {}));
				var Ce;
				(function (Ft) {
					function Xt($t) {
						return {
							triggerKind: be.to($t.triggerKind),
							triggerCharacter: $t.triggerCharacter,
						};
					}
					Ft.to = Xt;
				})(Ce || (e.CompletionContext = Ce = {}));
				var Le;
				(function (Ft) {
					function Xt(ut) {
						switch (ut) {
							case N.CompletionItemTag.Deprecated:
								return s.CompletionItemTag.Deprecated;
						}
					}
					Ft.from = Xt;
					function $t(ut) {
						switch (ut) {
							case s.CompletionItemTag.Deprecated:
								return N.CompletionItemTag.Deprecated;
						}
					}
					Ft.to = $t;
				})(Le || (e.CompletionItemTag = Le = {}));
				var Fe;
				(function (Ft) {
					const Xt = new Map([
						[N.CompletionItemKind.Method, s.CompletionItemKind.Method],
						[N.CompletionItemKind.Function, s.CompletionItemKind.Function],
						[
							N.CompletionItemKind.Constructor,
							s.CompletionItemKind.Constructor,
						],
						[N.CompletionItemKind.Field, s.CompletionItemKind.Field],
						[N.CompletionItemKind.Variable, s.CompletionItemKind.Variable],
						[N.CompletionItemKind.Class, s.CompletionItemKind.Class],
						[N.CompletionItemKind.Interface, s.CompletionItemKind.Interface],
						[N.CompletionItemKind.Struct, s.CompletionItemKind.Struct],
						[N.CompletionItemKind.Module, s.CompletionItemKind.Module],
						[N.CompletionItemKind.Property, s.CompletionItemKind.Property],
						[N.CompletionItemKind.Unit, s.CompletionItemKind.Unit],
						[N.CompletionItemKind.Value, s.CompletionItemKind.Value],
						[N.CompletionItemKind.Constant, s.CompletionItemKind.Constant],
						[N.CompletionItemKind.Enum, s.CompletionItemKind.Enum],
						[N.CompletionItemKind.EnumMember, s.CompletionItemKind.EnumMember],
						[N.CompletionItemKind.Keyword, s.CompletionItemKind.Keyword],
						[N.CompletionItemKind.Snippet, s.CompletionItemKind.Snippet],
						[N.CompletionItemKind.Text, s.CompletionItemKind.Text],
						[N.CompletionItemKind.Color, s.CompletionItemKind.Color],
						[N.CompletionItemKind.File, s.CompletionItemKind.File],
						[N.CompletionItemKind.Reference, s.CompletionItemKind.Reference],
						[N.CompletionItemKind.Folder, s.CompletionItemKind.Folder],
						[N.CompletionItemKind.Event, s.CompletionItemKind.Event],
						[N.CompletionItemKind.Operator, s.CompletionItemKind.Operator],
						[
							N.CompletionItemKind.TypeParameter,
							s.CompletionItemKind.TypeParameter,
						],
						[N.CompletionItemKind.Issue, s.CompletionItemKind.Issue],
						[N.CompletionItemKind.User, s.CompletionItemKind.User],
					]);
					function $t(Tt) {
						return Xt.get(Tt) ?? s.CompletionItemKind.Property;
					}
					Ft.from = $t;
					const ut = new Map([
						[s.CompletionItemKind.Method, N.CompletionItemKind.Method],
						[s.CompletionItemKind.Function, N.CompletionItemKind.Function],
						[
							s.CompletionItemKind.Constructor,
							N.CompletionItemKind.Constructor,
						],
						[s.CompletionItemKind.Field, N.CompletionItemKind.Field],
						[s.CompletionItemKind.Variable, N.CompletionItemKind.Variable],
						[s.CompletionItemKind.Class, N.CompletionItemKind.Class],
						[s.CompletionItemKind.Interface, N.CompletionItemKind.Interface],
						[s.CompletionItemKind.Struct, N.CompletionItemKind.Struct],
						[s.CompletionItemKind.Module, N.CompletionItemKind.Module],
						[s.CompletionItemKind.Property, N.CompletionItemKind.Property],
						[s.CompletionItemKind.Unit, N.CompletionItemKind.Unit],
						[s.CompletionItemKind.Value, N.CompletionItemKind.Value],
						[s.CompletionItemKind.Constant, N.CompletionItemKind.Constant],
						[s.CompletionItemKind.Enum, N.CompletionItemKind.Enum],
						[s.CompletionItemKind.EnumMember, N.CompletionItemKind.EnumMember],
						[s.CompletionItemKind.Keyword, N.CompletionItemKind.Keyword],
						[s.CompletionItemKind.Snippet, N.CompletionItemKind.Snippet],
						[s.CompletionItemKind.Text, N.CompletionItemKind.Text],
						[s.CompletionItemKind.Color, N.CompletionItemKind.Color],
						[s.CompletionItemKind.File, N.CompletionItemKind.File],
						[s.CompletionItemKind.Reference, N.CompletionItemKind.Reference],
						[s.CompletionItemKind.Folder, N.CompletionItemKind.Folder],
						[s.CompletionItemKind.Event, N.CompletionItemKind.Event],
						[s.CompletionItemKind.Operator, N.CompletionItemKind.Operator],
						[
							s.CompletionItemKind.TypeParameter,
							N.CompletionItemKind.TypeParameter,
						],
						[s.CompletionItemKind.User, N.CompletionItemKind.User],
						[s.CompletionItemKind.Issue, N.CompletionItemKind.Issue],
					]);
					function Et(Tt) {
						return ut.get(Tt) ?? N.CompletionItemKind.Property;
					}
					Ft.to = Et;
				})(Fe || (e.CompletionItemKind = Fe = {}));
				var Oe;
				(function (Ft) {
					function Xt($t, ut) {
						const Et = new N.$Xbb($t.label);
						return (
							(Et.insertText = $t.insertText),
							(Et.kind = Fe.to($t.kind)),
							(Et.tags = $t.tags?.map(Le.to)),
							(Et.detail = $t.detail),
							(Et.documentation = C.$el($t.documentation)
								? J.to($t.documentation)
								: $t.documentation),
							(Et.sortText = $t.sortText),
							(Et.filterText = $t.filterText),
							(Et.preselect = $t.preselect),
							(Et.commitCharacters = $t.commitCharacters),
							f.$iL.isIRange($t.range)
								? (Et.range = R.to($t.range))
								: typeof $t.range == "object" &&
									(Et.range = {
										inserting: R.to($t.range.insert),
										replacing: R.to($t.range.replace),
									}),
							(Et.keepWhitespace =
								typeof $t.insertTextRules > "u"
									? !1
									: !!(
											$t.insertTextRules &
											s.CompletionItemInsertTextRule.KeepWhitespace
										)),
							typeof $t.insertTextRules < "u" &&
							$t.insertTextRules &
								s.CompletionItemInsertTextRule.InsertAsSnippet
								? (Et.insertText = new N.$Abb($t.insertText))
								: ((Et.insertText = $t.insertText),
									(Et.textEdit =
										Et.range instanceof N.$pbb
											? new N.$wbb(Et.range, Et.insertText)
											: void 0)),
							$t.additionalTextEdits &&
								$t.additionalTextEdits.length > 0 &&
								(Et.additionalTextEdits = $t.additionalTextEdits.map((Tt) =>
									_.to(Tt),
								)),
							(Et.command =
								ut && $t.command ? ut.fromInternal($t.command) : void 0),
							Et
						);
					}
					Ft.to = Xt;
				})(Oe || (e.CompletionItem = Oe = {}));
				var xe;
				(function (Ft) {
					function Xt(ut) {
						if (typeof ut.label != "string" && !Array.isArray(ut.label))
							throw new TypeError("Invalid label");
						return {
							label: ut.label,
							documentation: J.fromStrict(ut.documentation),
						};
					}
					Ft.from = Xt;
					function $t(ut) {
						return {
							label: ut.label,
							documentation: C.$el(ut.documentation)
								? J.to(ut.documentation)
								: ut.documentation,
						};
					}
					Ft.to = $t;
				})(xe || (e.ParameterInformation = xe = {}));
				var He;
				(function (Ft) {
					function Xt(ut) {
						return {
							label: ut.label,
							documentation: J.fromStrict(ut.documentation),
							parameters: Array.isArray(ut.parameters)
								? ut.parameters.map(xe.from)
								: [],
							activeParameter: ut.activeParameter,
						};
					}
					Ft.from = Xt;
					function $t(ut) {
						return {
							label: ut.label,
							documentation: C.$el(ut.documentation)
								? J.to(ut.documentation)
								: ut.documentation,
							parameters: Array.isArray(ut.parameters)
								? ut.parameters.map(xe.to)
								: [],
							activeParameter: ut.activeParameter,
						};
					}
					Ft.to = $t;
				})(He || (e.SignatureInformation = He = {}));
				var Ke;
				(function (Ft) {
					function Xt(ut) {
						return {
							activeSignature: ut.activeSignature,
							activeParameter: ut.activeParameter,
							signatures: Array.isArray(ut.signatures)
								? ut.signatures.map(He.from)
								: [],
						};
					}
					Ft.from = Xt;
					function $t(ut) {
						return {
							activeSignature: ut.activeSignature,
							activeParameter: ut.activeParameter,
							signatures: Array.isArray(ut.signatures)
								? ut.signatures.map(He.to)
								: [],
						};
					}
					Ft.to = $t;
				})(Ke || (e.SignatureHelp = Ke = {}));
				var Je;
				(function (Ft) {
					function Xt($t, ut) {
						const Et = new N.$Wbb(
							U.to(ut.position),
							typeof ut.label == "string"
								? ut.label
								: ut.label.map(Te.to.bind(void 0, $t)),
							ut.kind && Ee.to(ut.kind),
						);
						return (
							(Et.textEdits = ut.textEdits && ut.textEdits.map(_.to)),
							(Et.tooltip = C.$el(ut.tooltip) ? J.to(ut.tooltip) : ut.tooltip),
							(Et.paddingLeft = ut.paddingLeft),
							(Et.paddingRight = ut.paddingRight),
							Et
						);
					}
					Ft.to = Xt;
				})(Je || (e.InlayHint = Je = {}));
				var Te;
				(function (Ft) {
					function Xt($t, ut) {
						const Et = new N.$Vbb(ut.label);
						return (
							(Et.tooltip = C.$el(ut.tooltip) ? J.to(ut.tooltip) : ut.tooltip),
							s.Command.is(ut.command) &&
								(Et.command = $t.fromInternal(ut.command)),
							ut.location && (Et.location = pe.to(ut.location)),
							Et
						);
					}
					Ft.to = Xt;
				})(Te || (e.InlayHintLabelPart = Te = {}));
				var Ee;
				(function (Ft) {
					function Xt(ut) {
						return ut;
					}
					Ft.from = Xt;
					function $t(ut) {
						return ut;
					}
					Ft.to = $t;
				})(Ee || (e.InlayHintKind = Ee = {}));
				var Ie;
				(function (Ft) {
					function Xt(ut) {
						return {
							range: R.from(ut.range),
							url: ut.target,
							tooltip: ut.tooltip,
						};
					}
					Ft.from = Xt;
					function $t(ut) {
						let Et;
						if (ut.url)
							try {
								Et =
									typeof ut.url == "string"
										? p.URI.parse(ut.url, !0)
										: p.URI.revive(ut.url);
							} catch {}
						const Tt = new N.$3bb(R.to(ut.range), Et);
						return (Tt.tooltip = ut.tooltip), Tt;
					}
					Ft.to = $t;
				})(Ie || (e.DocumentLink = Ie = {}));
				var Be;
				(function (Ft) {
					function Xt(ut) {
						const Et = new N.$6bb(ut.label);
						return (
							ut.textEdit && (Et.textEdit = _.to(ut.textEdit)),
							ut.additionalTextEdits &&
								(Et.additionalTextEdits = ut.additionalTextEdits.map((Tt) =>
									_.to(Tt),
								)),
							Et
						);
					}
					Ft.to = Xt;
					function $t(ut) {
						return {
							label: ut.label,
							textEdit: ut.textEdit ? _.from(ut.textEdit) : void 0,
							additionalTextEdits: ut.additionalTextEdits
								? ut.additionalTextEdits.map((Et) => _.from(Et))
								: void 0,
						};
					}
					Ft.from = $t;
				})(Be || (e.ColorPresentation = Be = {}));
				var Se;
				(function (Ft) {
					function Xt(ut) {
						return new N.$4bb(ut[0], ut[1], ut[2], ut[3]);
					}
					Ft.to = Xt;
					function $t(ut) {
						return [ut.red, ut.green, ut.blue, ut.alpha];
					}
					Ft.from = $t;
				})(Se || (e.Color = Se = {}));
				var ke;
				(function (Ft) {
					function Xt(ut) {
						return { range: R.from(ut.range) };
					}
					Ft.from = Xt;
					function $t(ut) {
						return new N.$Mbb(R.to(ut.range));
					}
					Ft.to = $t;
				})(ke || (e.SelectionRange = ke = {}));
				var Ue;
				(function (Ft) {
					function Xt($t) {
						switch ($t) {
							case S.SaveReason.AUTO:
								return N.TextDocumentSaveReason.AfterDelay;
							case S.SaveReason.EXPLICIT:
								return N.TextDocumentSaveReason.Manual;
							case S.SaveReason.FOCUS_CHANGE:
							case S.SaveReason.WINDOW_CHANGE:
								return N.TextDocumentSaveReason.FocusOut;
						}
					}
					Ft.to = Xt;
				})(Ue || (e.TextDocumentSaveReason = Ue = {}));
				var qe;
				(function (Ft) {
					function Xt(ut) {
						switch (ut) {
							case N.TextEditorLineNumbersStyle.Off:
								return o.RenderLineNumbersType.Off;
							case N.TextEditorLineNumbersStyle.Relative:
								return o.RenderLineNumbersType.Relative;
							case N.TextEditorLineNumbersStyle.Interval:
								return o.RenderLineNumbersType.Interval;
							case N.TextEditorLineNumbersStyle.On:
							default:
								return o.RenderLineNumbersType.On;
						}
					}
					Ft.from = Xt;
					function $t(ut) {
						switch (ut) {
							case o.RenderLineNumbersType.Off:
								return N.TextEditorLineNumbersStyle.Off;
							case o.RenderLineNumbersType.Relative:
								return N.TextEditorLineNumbersStyle.Relative;
							case o.RenderLineNumbersType.Interval:
								return N.TextEditorLineNumbersStyle.Interval;
							case o.RenderLineNumbersType.On:
							default:
								return N.TextEditorLineNumbersStyle.On;
						}
					}
					Ft.to = $t;
				})(qe || (e.TextEditorLineNumbersStyle = qe = {}));
				var Ae;
				(function (Ft) {
					function Xt(ut) {
						if (ut === N.EndOfLine.CRLF) return l.EndOfLineSequence.CRLF;
						if (ut === N.EndOfLine.LF) return l.EndOfLineSequence.LF;
					}
					Ft.from = Xt;
					function $t(ut) {
						if (ut === l.EndOfLineSequence.CRLF) return N.EndOfLine.CRLF;
						if (ut === l.EndOfLineSequence.LF) return N.EndOfLine.LF;
					}
					Ft.to = $t;
				})(Ae || (e.EndOfLine = Ae = {}));
				var Me;
				(function (Ft) {
					function Xt($t) {
						if (typeof $t == "object") return $t.viewId;
						switch ($t) {
							case N.ProgressLocation.SourceControl:
								return $.ProgressLocation.Scm;
							case N.ProgressLocation.Window:
								return $.ProgressLocation.Window;
							case N.ProgressLocation.Notification:
								return $.ProgressLocation.Notification;
						}
						throw new Error("Unknown 'ProgressLocation'");
					}
					Ft.from = Xt;
				})(Me || (e.ProgressLocation = Me = {}));
				var De;
				(function (Ft) {
					function Xt(ut) {
						const Et = { start: ut.start + 1, end: ut.end + 1 };
						return ut.kind && (Et.kind = Re.from(ut.kind)), Et;
					}
					Ft.from = Xt;
					function $t(ut) {
						const Et = { start: ut.start - 1, end: ut.end - 1 };
						return ut.kind && (Et.kind = Re.to(ut.kind)), Et;
					}
					Ft.to = $t;
				})(De || (e.FoldingRange = De = {}));
				var Re;
				(function (Ft) {
					function Xt(ut) {
						if (ut)
							switch (ut) {
								case N.FoldingRangeKind.Comment:
									return s.$jM.Comment;
								case N.FoldingRangeKind.Imports:
									return s.$jM.Imports;
								case N.FoldingRangeKind.Region:
									return s.$jM.Region;
							}
					}
					Ft.from = Xt;
					function $t(ut) {
						if (ut)
							switch (ut.value) {
								case s.$jM.Comment.value:
									return N.FoldingRangeKind.Comment;
								case s.$jM.Imports.value:
									return N.FoldingRangeKind.Imports;
								case s.$jM.Region.value:
									return N.FoldingRangeKind.Region;
							}
					}
					Ft.to = $t;
				})(Re || (e.FoldingRangeKind = Re = {}));
				var je;
				(function (Ft) {
					function Xt($t) {
						if ($t)
							return {
								pinned: typeof $t.preview == "boolean" ? !$t.preview : void 0,
								inactive: $t.background,
								preserveFocus: $t.preserveFocus,
								selection:
									typeof $t.selection == "object"
										? R.from($t.selection)
										: void 0,
								override: typeof $t.override == "boolean" ? S.$b1.id : void 0,
							};
					}
					Ft.from = Xt;
				})(je || (e.TextEditorOpenOptions = je = {}));
				var Ve;
				(function (Ft) {
					function Xt(Tt) {
						return Tt instanceof N.$ocb
							? Tt.toJSON()
							: typeof Tt == "string"
								? Tt
								: $t(Tt) || ut(Tt)
									? new N.$ocb(Tt.baseUri ?? Tt.base, Tt.pattern).toJSON()
									: Tt;
					}
					Ft.from = Xt;
					function $t(Tt) {
						const qt = Tt;
						return qt
							? p.URI.isUri(qt.baseUri) && typeof qt.pattern == "string"
							: !1;
					}
					function ut(Tt) {
						const qt = Tt;
						return qt
							? typeof qt.base == "string" && typeof qt.pattern == "string"
							: !1;
					}
					function Et(Tt) {
						return typeof Tt == "string"
							? Tt
							: new N.$ocb(p.URI.revive(Tt.baseUri), Tt.pattern);
					}
					Ft.to = Et;
				})(Ve || (e.GlobPattern = Ve = {}));
				var Ze;
				(function (Ft) {
					function Xt($t) {
						if ($t) {
							if (Array.isArray($t)) return $t.map(Xt);
							if (typeof $t == "string") return $t;
							{
								const ut = $t;
								return {
									language: ut.language,
									scheme: ut.scheme,
									pattern: Ve.from(ut.pattern),
									exclusive: ut.exclusive,
									notebookType: ut.notebookType,
								};
							}
						} else return;
					}
					Ft.from = Xt;
				})(Ze || (e.LanguageSelector = Ze = {}));
				var et;
				(function (Ft) {
					function Xt(ut) {
						return (
							!!ut &&
							typeof ut == "object" &&
							"documents" in ut &&
							Array.isArray(ut.documents) &&
							ut.documents.every(
								(Et) =>
									Array.isArray(Et) &&
									Et.every(
										(Tt) =>
											Tt &&
											typeof Tt == "object" &&
											"uri" in Tt &&
											p.URI.isUri(Tt.uri) &&
											"version" in Tt &&
											typeof Tt.version == "number" &&
											"ranges" in Tt &&
											Array.isArray(Tt.ranges) &&
											Tt.ranges.every((qt) => qt instanceof N.$pbb),
									),
							)
						);
					}
					Ft.is = Xt;
					function $t(ut) {
						return {
							documents: ut.documents.map((Et) =>
								Et.map((Tt) => ({
									uri: p.URI.from(Tt.uri),
									version: Tt.version,
									ranges: Tt.ranges.map((qt) => R.from(qt)),
								})),
							),
						};
					}
					Ft.from = $t;
				})(et || (e.MappedEditsContext = et = {}));
				var rt;
				(function (Ft) {
					function Xt(ut) {
						return { start: ut.start, end: ut.end };
					}
					Ft.from = Xt;
					function $t(ut) {
						return new N.$Rcb(ut.start, ut.end);
					}
					Ft.to = $t;
				})(rt || (e.NotebookRange = rt = {}));
				var ft;
				(function (Ft) {
					function Xt(ut) {
						return {
							timing:
								typeof ut.runStartTime == "number" &&
								typeof ut.runEndTime == "number"
									? { startTime: ut.runStartTime, endTime: ut.runEndTime }
									: void 0,
							executionOrder: ut.executionOrder,
							success: ut.lastRunSuccess,
						};
					}
					Ft.to = Xt;
					function $t(ut) {
						return {
							lastRunSuccess: ut.success,
							runStartTime: ut.timing?.startTime,
							runEndTime: ut.timing?.endTime,
							executionOrder: ut.executionOrder,
						};
					}
					Ft.from = $t;
				})(ft || (e.NotebookCellExecutionSummary = ft = {}));
				var bt;
				(function (Ft) {
					function Xt($t) {
						if ($t === k.NotebookCellExecutionState.Unconfirmed)
							return N.NotebookCellExecutionState.Pending;
						if ($t === k.NotebookCellExecutionState.Pending) return;
						if ($t === k.NotebookCellExecutionState.Executing)
							return N.NotebookCellExecutionState.Executing;
						throw new Error(`Unknown state: ${$t}`);
					}
					Ft.to = Xt;
				})(bt || (e.NotebookCellExecutionState = bt = {}));
				var nt;
				(function (Ft) {
					function Xt(ut) {
						switch (ut) {
							case N.NotebookCellKind.Markup:
								return k.CellKind.Markup;
							case N.NotebookCellKind.Code:
							default:
								return k.CellKind.Code;
						}
					}
					Ft.from = Xt;
					function $t(ut) {
						switch (ut) {
							case k.CellKind.Markup:
								return N.NotebookCellKind.Markup;
							case k.CellKind.Code:
							default:
								return N.NotebookCellKind.Code;
						}
					}
					Ft.to = $t;
				})(nt || (e.NotebookCellKind = nt = {}));
				var lt;
				(function (Ft) {
					function Xt(ut) {
						const Et = {
							metadata: ut.metadata ?? Object.create(null),
							cells: [],
						};
						for (const Tt of ut.cells)
							N.$Scb.validate(Tt), Et.cells.push(ct.from(Tt));
						return Et;
					}
					Ft.from = Xt;
					function $t(ut) {
						const Et = new N.$Tcb(ut.cells.map(ct.to));
						return (0, g.$yg)(ut.metadata) || (Et.metadata = ut.metadata), Et;
					}
					Ft.to = $t;
				})(lt || (e.NotebookData = lt = {}));
				var ct;
				(function (Ft) {
					function Xt(ut) {
						return {
							cellKind: nt.from(ut.kind),
							language: ut.languageId,
							mime: ut.mime,
							source: ut.value,
							metadata: ut.metadata,
							internalMetadata: ft.from(ut.executionSummary ?? {}),
							outputs: ut.outputs ? ut.outputs.map(ht.from) : [],
						};
					}
					Ft.from = Xt;
					function $t(ut) {
						return new N.$Scb(
							nt.to(ut.cellKind),
							ut.source,
							ut.language,
							ut.mime,
							ut.outputs ? ut.outputs.map(ht.to) : void 0,
							ut.metadata,
							ut.internalMetadata ? ft.to(ut.internalMetadata) : void 0,
						);
					}
					Ft.to = $t;
				})(ct || (e.NotebookCellData = ct = {}));
				var gt;
				(function (Ft) {
					function Xt(ut) {
						return { mime: ut.mime, valueBytes: i.$Te.wrap(ut.data) };
					}
					Ft.from = Xt;
					function $t(ut) {
						return new N.$Ucb(ut.valueBytes.buffer, ut.mime);
					}
					Ft.to = $t;
				})(gt || (e.NotebookCellOutputItem = gt = {}));
				var ht;
				(function (Ft) {
					function Xt(ut) {
						return {
							outputId: ut.id,
							items: ut.items.map(gt.from),
							metadata: ut.metadata,
						};
					}
					Ft.from = Xt;
					function $t(ut) {
						const Et = ut.items.map(gt.to);
						return new N.$Vcb(Et, ut.outputId, ut.metadata);
					}
					Ft.to = $t;
				})(ht || (e.NotebookCellOutput = ht = {}));
				var Rt;
				(function (Ft) {
					function Xt(Et) {
						return ut(Et)
							? {
									include: Ve.from(Et.include) ?? void 0,
									exclude: Ve.from(Et.exclude) ?? void 0,
								}
							: (Ve.from(Et) ?? void 0);
					}
					Ft.from = Xt;
					function $t(Et) {
						return ut(Et)
							? { include: Ve.to(Et.include), exclude: Ve.to(Et.exclude) }
							: Ve.to(Et);
					}
					Ft.to = $t;
					function ut(Et) {
						const Tt = Et;
						return Tt ? !(0, g.$ug)(Tt.include) && !(0, g.$ug)(Tt.exclude) : !1;
					}
				})(Rt || (e.NotebookExclusiveDocumentPattern = Rt = {}));
				var Nt;
				(function (Ft) {
					function Xt($t, ut, Et) {
						const Tt =
							typeof $t.command == "string"
								? { title: "", command: $t.command }
								: $t.command;
						return {
							alignment:
								$t.alignment === N.NotebookCellStatusBarAlignment.Left
									? k.CellStatusbarAlignment.Left
									: k.CellStatusbarAlignment.Right,
							command: ut.toInternal(Tt, Et),
							text: $t.text,
							tooltip: $t.tooltip,
							accessibilityInformation: $t.accessibilityInformation,
							priority: $t.priority,
						};
					}
					Ft.from = Xt;
				})(Nt || (e.NotebookStatusBarItem = Nt = {}));
				var jt;
				(function (Ft) {
					function Xt($t, ut, Et) {
						const Tt =
							typeof $t.command == "string"
								? { title: "", command: $t.command }
								: $t.command;
						return {
							command: ut.toInternal(Tt, Et),
							label: $t.label,
							description: $t.description,
							detail: $t.detail,
							documentation: $t.documentation,
						};
					}
					Ft.from = Xt;
				})(jt || (e.NotebookKernelSourceAction = jt = {}));
				var ti;
				(function (Ft) {
					function Xt($t) {
						return {
							transientOutputs: $t?.transientOutputs ?? !1,
							transientCellMetadata: $t?.transientCellMetadata ?? {},
							transientDocumentMetadata: $t?.transientDocumentMetadata ?? {},
							cellContentMetadata: $t?.cellContentMetadata ?? {},
						};
					}
					Ft.from = Xt;
				})(ti || (e.NotebookDocumentContentOptions = ti = {}));
				var kt;
				(function (Ft) {
					function Xt(ut) {
						return { uri: ut.uri, provides: ut.provides };
					}
					Ft.from = Xt;
					function $t(ut) {
						return new N.$Xcb(p.URI.revive(ut.uri), ut.provides);
					}
					Ft.to = $t;
				})(kt || (e.NotebookRendererScript = kt = {}));
				var hi;
				(function (Ft) {
					function Xt(ut) {
						return {
							message: J.fromStrict(ut.message) || "",
							type: D.TestMessageType.Error,
							expected: ut.expectedOutput,
							actual: ut.actualOutput,
							contextValue: ut.contextValue,
							location: ut.location && {
								range: R.from(ut.location.range),
								uri: ut.location.uri,
							},
							stackTrace: ut.stackTrace?.map((Et) => ({
								label: Et.label,
								position: Et.position && U.from(Et.position),
								uri: Et.uri && p.URI.revive(Et.uri).toJSON(),
							})),
						};
					}
					Ft.from = Xt;
					function $t(ut) {
						const Et = new N.$4cb(
							typeof ut.message == "string" ? ut.message : J.to(ut.message),
						);
						return (
							(Et.actualOutput = ut.actual),
							(Et.expectedOutput = ut.expected),
							(Et.contextValue = ut.contextValue),
							(Et.location = ut.location ? pe.to(ut.location) : void 0),
							Et
						);
					}
					Ft.to = $t;
				})(hi || (e.TestMessage = hi = {}));
				var Kt;
				(function (Ft) {
					(Ft.namespace = D.$p4), (Ft.denamespace = D.$q4);
				})(Kt || (e.TestTag = Kt = {}));
				var di;
				(function (Ft) {
					function Xt(ut) {
						const Et = (0, v.$f9)(ut).controllerId;
						return {
							extId: L.$k4.fromExtHostTestItem(ut, Et).toString(),
							label: ut.label,
							uri: p.URI.revive(ut.uri),
							busy: ut.busy,
							tags: ut.tags.map((Tt) => Kt.namespace(Et, Tt.id)),
							range: f.$iL.lift(R.from(ut.range)),
							description: ut.description || null,
							sortText: ut.sortText || null,
							error: (ut.error && J.fromStrict(ut.error)) || null,
						};
					}
					Ft.from = Xt;
					function $t(ut) {
						return {
							parent: void 0,
							error: void 0,
							id: L.$k4.fromString(ut.extId).localId,
							label: ut.label,
							uri: p.URI.revive(ut.uri),
							tags: (ut.tags || []).map((Et) => {
								const { tagId: Tt } = Kt.denamespace(Et);
								return new N.$5cb(Tt);
							}),
							children: {
								add: () => {},
								delete: () => {},
								forEach: () => {},
								*[Symbol.iterator]() {},
								get: () => {},
								replace: () => {},
								size: 0,
							},
							range: R.to(ut.range || void 0),
							canResolveChildren: !1,
							busy: ut.busy,
							description: ut.description || void 0,
							sortText: ut.sortText || void 0,
						};
					}
					Ft.toPlain = $t;
				})(di || (e.TestItem = di = {})),
					(function (Ft) {
						function Xt(ut) {
							return { id: ut.id };
						}
						Ft.from = Xt;
						function $t(ut) {
							return new N.$5cb(ut.id);
						}
						Ft.to = $t;
					})(Kt || (e.TestTag = Kt = {}));
				var Ye;
				(function (Ft) {
					const Xt = (ut, Et) => {
						const Tt = ut.value;
						if (!Tt) return;
						const qt = {
							...di.toPlain(Tt.item),
							parent: Et,
							taskStates: Tt.tasks.map((At) => ({
								state: At.state,
								duration: At.duration,
								messages: At.messages
									.filter((Yt) => Yt.type === D.TestMessageType.Error)
									.map(hi.to),
							})),
							children: [],
						};
						if (ut.children)
							for (const At of ut.children.values()) {
								const Yt = Xt(At, qt);
								Yt && qt.children.push(Yt);
							}
						return qt;
					};
					function $t(ut) {
						const Et = new h.$j4();
						for (const At of ut.items)
							Et.insert(L.$k4.fromString(At.item.extId).path, At);
						const Tt = [Et.nodes],
							qt = [];
						for (; Tt.length; )
							for (const At of Tt.pop())
								At.value
									? qt.push(At)
									: At.children && Tt.push(At.children.values());
						return {
							completedAt: ut.completedAt,
							results: qt.map((At) => Xt(At)).filter(g.$tg),
						};
					}
					Ft.to = $t;
				})(Ye || (e.TestResults = Ye = {}));
				var ze;
				(function (Ft) {
					function Xt(At) {
						return { covered: At.covered, total: At.total };
					}
					function $t(At) {
						return "line" in At ? U.from(At) : R.from(At);
					}
					function ut(At) {
						if (At) return "endLineNumber" in At ? R.to(At) : U.to(At);
					}
					function Et(At) {
						if (At.type === D.DetailType.Statement) {
							const Yt = [];
							if (At.branches)
								for (const ni of At.branches)
									Yt.push({
										executed: ni.count,
										location: ut(ni.location),
										label: ni.label,
									});
							return new N.$0cb(
								At.count,
								ut(At.location),
								At.branches?.map(
									(ni) => new N.$$cb(ni.count, ut(ni.location), ni.label),
								),
							);
						} else return new N.$_cb(At.name, At.count, ut(At.location));
					}
					Ft.to = Et;
					function Tt(At) {
						if (typeof At.executed == "number" && At.executed < 0)
							throw new Error(`Invalid coverage count ${At.executed}`);
						return "branches" in At
							? {
									count: At.executed,
									location: $t(At.location),
									type: D.DetailType.Statement,
									branches: At.branches.length
										? At.branches.map((Yt) => ({
												count: Yt.executed,
												location: Yt.location && $t(Yt.location),
												label: Yt.label,
											}))
										: void 0,
								}
							: {
									type: D.DetailType.Declaration,
									name: At.name,
									count: At.executed,
									location: $t(At.location),
								};
					}
					Ft.fromDetails = Tt;
					function qt(At, Yt, ni) {
						return (
							N.$8cb(ni.statementCoverage),
							N.$8cb(ni.branchCoverage),
							N.$8cb(ni.declarationCoverage),
							{
								id: Yt,
								uri: ni.uri,
								statement: Xt(ni.statementCoverage),
								branch: ni.branchCoverage && Xt(ni.branchCoverage),
								declaration:
									ni.declarationCoverage && Xt(ni.declarationCoverage),
								testIds:
									ni instanceof N.$9cb && ni.fromTests.length
										? ni.fromTests.map((bi) =>
												L.$k4.fromExtHostTestItem(bi, At).toString(),
											)
										: void 0,
							}
						);
					}
					Ft.fromFile = qt;
				})(ze || (e.TestCoverage = ze = {}));
				var Xe;
				(function (Ft) {
					function Xt($t) {
						switch ($t) {
							case s.CodeActionTriggerType.Invoke:
								return N.CodeActionTriggerKind.Invoke;
							case s.CodeActionTriggerType.Auto:
								return N.CodeActionTriggerKind.Automatic;
						}
					}
					Ft.to = Xt;
				})(Xe || (e.CodeActionTriggerKind = Xe = {}));
				var It;
				(function (Ft) {
					function Xt(ut) {
						const Et = new N.$adb(
							Q.to(ut.kind),
							ut.name,
							ut.detail || "",
							p.URI.revive(ut.uri),
							R.to(ut.range),
							R.to(ut.selectionRange),
						);
						return (
							(Et._sessionId = ut._sessionId), (Et._itemId = ut._itemId), Et
						);
					}
					Ft.to = Xt;
					function $t(ut, Et, Tt) {
						if (
							((Et = Et ?? ut._sessionId),
							(Tt = Tt ?? ut._itemId),
							Et === void 0 || Tt === void 0)
						)
							throw new Error("invalid item");
						return {
							_sessionId: Et,
							_itemId: Tt,
							kind: Q.from(ut.kind),
							name: ut.name,
							detail: ut.detail ?? "",
							uri: ut.uri,
							range: R.from(ut.range),
							selectionRange: R.from(ut.selectionRange),
							tags: ut.tags?.map(Z.from),
						};
					}
					Ft.from = $t;
				})(It || (e.TypeHierarchyItem = It = {}));
				var Lt;
				(function (Ft) {
					function Xt($t) {
						if ($t) return { value: $t.value, tooltip: $t.tooltip };
					}
					Ft.from = Xt;
				})(Lt || (e.ViewBadge = Lt = {}));
				var xt;
				(function (Ft) {
					function Xt(Tt, qt, At) {
						const Yt = qt.fileData;
						return Yt
							? new N.$gcb(
									new N.$hcb(
										Yt.name,
										p.URI.revive(Yt.uri),
										Yt.id,
										(0, E.$hb)(() => At(Yt.id)),
									),
								)
							: Tt === u.$EK.uriList && qt.uriListData
								? new N.$fcb(Et(qt.uriListData))
								: new N.$fcb(qt.asString);
					}
					Ft.to = Xt;
					async function $t(Tt, qt) {
						const At = await qt.asString();
						if (Tt === u.$EK.uriList)
							return { asString: At, fileData: void 0, uriListData: ut(At) };
						const Yt = qt.asFile();
						return {
							asString: At,
							fileData: Yt
								? { name: Yt.name, uri: Yt.uri, id: Yt._itemId ?? Yt.id }
								: void 0,
						};
					}
					Ft.from = $t;
					function ut(Tt) {
						return w.$ZL.split(Tt).map((qt) => {
							if (qt.startsWith("#")) return qt;
							try {
								return p.URI.parse(qt);
							} catch {}
							return qt;
						});
					}
					function Et(Tt) {
						return w.$ZL.create(
							Tt.map((qt) => (typeof qt == "string" ? qt : p.URI.revive(qt))),
						);
					}
				})(xt || (e.DataTransferItem = xt = {}));
				var Vt;
				(function (Ft) {
					function Xt(ut, Et) {
						const Tt = ut.items.map(([qt, At]) => [qt, xt.to(qt, At, Et)]);
						return new N.$icb(Tt);
					}
					Ft.toDataTransfer = Xt;
					async function $t(ut) {
						const Et = { items: [] },
							Tt = [];
						for (const [qt, At] of ut)
							Tt.push(
								(async () => {
									Et.items.push([qt, await xt.from(qt, At)]);
								})(),
							);
						return await Promise.all(Tt), Et;
					}
					Ft.from = $t;
				})(Vt || (e.DataTransfer = Vt = {}));
				var Bt;
				(function (Ft) {
					function Xt(ut, Et) {
						return {
							kind: "reply",
							agentId: ut.participant ?? Et?.agentId ?? "",
							subCommand: ut.command ?? Et?.command,
							message: ut.prompt,
							title: ut.label,
						};
					}
					Ft.from = Xt;
					function $t(ut) {
						return {
							prompt: ut.message,
							label: ut.title,
							participant: ut.agentId,
							command: ut.subCommand,
						};
					}
					Ft.to = $t;
				})(Bt || (e.ChatFollowup = Bt = {}));
				var Gt;
				(function (Ft) {
					function Xt(ut) {
						switch (ut) {
							case T.ChatMessageRole.System:
								return N.LanguageModelChatMessageRole.System;
							case T.ChatMessageRole.User:
								return N.LanguageModelChatMessageRole.User;
							case T.ChatMessageRole.Assistant:
								return N.LanguageModelChatMessageRole.Assistant;
						}
					}
					Ft.to = Xt;
					function $t(ut) {
						switch (ut) {
							case N.LanguageModelChatMessageRole.System:
								return T.ChatMessageRole.System;
							case N.LanguageModelChatMessageRole.User:
								return T.ChatMessageRole.User;
							case N.LanguageModelChatMessageRole.Assistant:
								return T.ChatMessageRole.Assistant;
						}
						return T.ChatMessageRole.User;
					}
					Ft.from = $t;
				})(Gt || (e.LanguageModelChatMessageRole = Gt = {}));
				var Mt;
				(function (Ft) {
					function Xt(ut) {
						const Et = ut.content.map((Yt) =>
								Yt.type === "text"
									? Yt.value
									: Yt.type === "tool_result"
										? new N.$Fdb(Yt.toolCallId, Yt.value, Yt.isError)
										: new N.$Hdb(Yt.name, Yt.toolCallId, Yt.parameters),
							),
							Tt = Et.find((Yt) => typeof Yt == "string") ?? "",
							qt = Gt.to(ut.role),
							At = new N.$Gdb(qt, Tt, ut.name);
						return (At.content2 = Et), At;
					}
					Ft.to = Xt;
					function $t(ut) {
						const Et = Gt.from(ut.role),
							Tt = ut.name,
							qt = ut.content2.map((At) => {
								if (At instanceof N.$Fdb)
									return {
										type: "tool_result",
										toolCallId: At.toolCallId,
										value: At.content,
										isError: At.isError,
									};
								if (At instanceof N.$Hdb)
									return {
										type: "tool_use",
										toolCallId: At.toolCallId,
										name: At.name,
										parameters: At.parameters,
									};
								if (typeof At != "string")
									throw new Error("Unexpected chat message content type");
								return { type: "text", value: At };
							});
						return { role: Et, name: Tt, content: qt };
					}
					Ft.from = $t;
				})(Mt || (e.LanguageModelChatMessage = Mt = {}));
				var Ut;
				(function (Ft) {
					function Xt(ut) {
						return { kind: "markdownContent", content: J.from(ut.value) };
					}
					Ft.from = Xt;
					function $t(ut) {
						return new N.$ndb(J.to(ut.content));
					}
					Ft.to = $t;
				})(Ut || (e.ChatResponseMarkdownPart = Ut = {}));
				var ei;
				(function (Ft) {
					function Xt(ut) {
						return {
							kind: "markdownVuln",
							content: J.from(ut.value),
							vulnerabilities: ut.vulnerabilities,
						};
					}
					Ft.from = Xt;
					function $t(ut) {
						return new N.$odb(J.to(ut.content), ut.vulnerabilities);
					}
					Ft.to = $t;
				})(ei || (e.ChatResponseMarkdownWithVulnerabilitiesPart = ei = {}));
				var mi;
				(function (Ft) {
					function Xt(ut) {
						return {
							kind: "agentDetection",
							agentId: ut.participant,
							command: ut.command,
						};
					}
					Ft.from = Xt;
					function $t(ut) {
						return new N.$pdb(ut.agentId, ut.command);
					}
					Ft.to = $t;
				})(mi || (e.ChatResponseDetectedParticipantPart = mi = {}));
				var ii;
				(function (Ft) {
					function Xt($t) {
						return {
							kind: "confirmation",
							title: $t.title,
							message: $t.message,
							data: $t.data,
							buttons: $t.buttons,
						};
					}
					Ft.from = Xt;
				})(ii || (e.ChatResponseConfirmationPart = ii = {}));
				var Dt;
				(function (Ft) {
					function Xt(ut) {
						const { value: Et, baseUri: Tt } = ut;
						function qt(At, Yt) {
							return At.map((ni) => {
								const bi = p.URI.joinPath(Yt, ni.name);
								return {
									label: ni.name,
									uri: bi,
									children: ni.children && qt(ni.children, bi),
								};
							});
						}
						return {
							kind: "treeData",
							treeData: {
								label: (0, c.$kh)(Tt),
								uri: Tt,
								children: qt(Et, Tt),
							},
						};
					}
					Ft.from = Xt;
					function $t(ut) {
						const Et = (0, r.$ji)(ut.treeData);
						function Tt(Yt) {
							return Yt.map((ni) => ({
								name: ni.label,
								children: ni.children && Tt(ni.children),
							}));
						}
						const qt = Et.uri,
							At = Et.children ? Tt(Et.children) : [];
						return new N.$rdb(At, qt);
					}
					Ft.to = $t;
				})(Dt || (e.ChatResponseFilesPart = Dt = {}));
				var Jt;
				(function (Ft) {
					function Xt(ut) {
						const Et = (Tt) => p.URI.isUri(Tt);
						return {
							kind: "inlineReference",
							name: ut.title,
							inlineReference: Et(ut.value) ? ut.value : O.from(ut.value),
						};
					}
					Ft.from = Xt;
					function $t(ut) {
						const Et = (0, r.$ji)(ut);
						return new N.$sdb(
							p.URI.isUri(Et.inlineReference)
								? Et.inlineReference
								: O.to(Et.inlineReference),
							ut.name,
						);
					}
					Ft.to = $t;
				})(Jt || (e.ChatResponseAnchorPart = Jt = {}));
				var si;
				(function (Ft) {
					function Xt(ut) {
						return { kind: "progressMessage", content: J.from(ut.value) };
					}
					Ft.from = Xt;
					function $t(ut) {
						return new N.$tdb(ut.content.value);
					}
					Ft.to = $t;
				})(si || (e.ChatResponseProgressPart = si = {}));
				var Zt;
				(function (Ft) {
					function Xt(ut) {
						return { kind: "warning", content: J.from(ut.value) };
					}
					Ft.from = Xt;
					function $t(ut) {
						return new N.$vdb(ut.content.value);
					}
					Ft.to = $t;
				})(Zt || (e.ChatResponseWarningPart = Zt = {}));
				var ci;
				(function (Ft) {
					function Xt(ut) {
						return { kind: "move", uri: ut.uri, range: R.from(ut.range) };
					}
					Ft.from = Xt;
					function $t(ut) {
						return new N.$zdb(p.URI.revive(ut.uri), R.to(ut.range));
					}
					Ft.to = $t;
				})(ci || (e.ChatResponseMovePart = ci = {}));
				var ri;
				(function (Ft) {
					function Xt($t) {
						return { kind: "progressTask", content: J.from($t.value) };
					}
					Ft.from = Xt;
				})(ri || (e.ChatTask = ri = {}));
				var $i;
				(function (Ft) {
					function Xt($t) {
						return {
							kind: "progressTaskResult",
							content: typeof $t == "string" ? J.from($t) : void 0,
						};
					}
					Ft.from = Xt;
				})($i || (e.ChatTaskResult = $i = {}));
				var Wt;
				(function (Ft) {
					function Xt(ut, Et, Tt) {
						return {
							kind: "command",
							command: Et.toInternal(ut.value, Tt) ?? {
								command: ut.value.command,
								title: ut.value.title,
							},
						};
					}
					Ft.from = Xt;
					function $t(ut, Et) {
						return new N.$wdb(
							Et.fromInternal(ut.command) ?? {
								command: ut.command.id,
								title: ut.command.title,
							},
						);
					}
					Ft.to = $t;
				})(Wt || (e.ChatResponseCommandButtonPart = Wt = {}));
				var tt;
				(function (Ft) {
					function Xt(ut) {
						return {
							kind: "textEdit",
							uri: ut.uri,
							edits: ut.edits.map((Et) => _.from(Et)),
						};
					}
					Ft.from = Xt;
					function $t(ut) {
						return new N.$Adb(
							p.URI.revive(ut.uri),
							ut.edits.map((Et) => _.to(Et)),
						);
					}
					Ft.to = $t;
				})(tt || (e.ChatResponseTextEditPart = tt = {}));
				var at;
				(function (Ft) {
					function Xt(ut) {
						const Et = n.ThemeIcon.isThemeIcon(ut.iconPath)
							? ut.iconPath
							: p.URI.isUri(ut.iconPath)
								? { light: p.URI.revive(ut.iconPath) }
								: ut.iconPath &&
										"light" in ut.iconPath &&
										"dark" in ut.iconPath &&
										p.URI.isUri(ut.iconPath.light) &&
										p.URI.isUri(ut.iconPath.dark)
									? {
											light: p.URI.revive(ut.iconPath.light),
											dark: p.URI.revive(ut.iconPath.dark),
										}
									: void 0;
						return typeof ut.value == "object" && "variableName" in ut.value
							? {
									kind: "reference",
									reference: {
										variableName: ut.value.variableName,
										value:
											p.URI.isUri(ut.value.value) || !ut.value.value
												? ut.value.value
												: O.from(ut.value.value),
									},
									iconPath: Et,
									options: ut.options,
								}
							: {
									kind: "reference",
									reference:
										p.URI.isUri(ut.value) || typeof ut.value == "string"
											? ut.value
											: O.from(ut.value),
									iconPath: Et,
									options: ut.options,
								};
					}
					Ft.from = Xt;
					function $t(ut) {
						const Et = (0, r.$ji)(ut),
							Tt = (qt) => (p.URI.isUri(qt) ? qt : O.to(qt));
						return new N.$xdb(
							typeof Et.reference == "string"
								? Et.reference
								: "variableName" in Et.reference
									? {
											variableName: Et.reference.variableName,
											value: Et.reference.value && Tt(Et.reference.value),
										}
									: Tt(Et.reference),
						);
					}
					Ft.to = $t;
				})(at || (e.ChatResponseReferencePart = at = {}));
				var pi;
				(function (Ft) {
					function Xt($t) {
						return {
							kind: "codeCitation",
							value: $t.value,
							license: $t.license,
							snippet: $t.snippet,
						};
					}
					Ft.from = Xt;
				})(pi || (e.ChatResponseCodeCitationPart = pi = {}));
				var Li;
				(function (Ft) {
					function Xt(Et, Tt, qt) {
						return Et instanceof N.$ndb
							? Ut.from(Et)
							: Et instanceof N.$sdb
								? Jt.from(Et)
								: Et instanceof N.$xdb
									? at.from(Et)
									: Et instanceof N.$tdb
										? si.from(Et)
										: Et instanceof N.$rdb
											? Dt.from(Et)
											: Et instanceof N.$wdb
												? Wt.from(Et, Tt, qt)
												: Et instanceof N.$Adb
													? tt.from(Et)
													: Et instanceof N.$odb
														? ei.from(Et)
														: Et instanceof N.$pdb
															? mi.from(Et)
															: Et instanceof N.$vdb
																? Zt.from(Et)
																: Et instanceof N.$qdb
																	? ii.from(Et)
																	: Et instanceof N.$ydb
																		? pi.from(Et)
																		: Et instanceof N.$zdb
																			? ci.from(Et)
																			: {
																					kind: "markdownContent",
																					content: J.from(""),
																				};
					}
					Ft.from = Xt;
					function $t(Et, Tt) {
						switch (Et.kind) {
							case "reference":
								return at.to(Et);
							case "markdownContent":
							case "inlineReference":
							case "progressMessage":
							case "treeData":
							case "command":
								return ut(Et, Tt);
						}
					}
					Ft.to = $t;
					function ut(Et, Tt) {
						switch (Et.kind) {
							case "markdownContent":
								return Ut.to(Et);
							case "inlineReference":
								return Jt.to(Et);
							case "progressMessage":
								return;
							case "treeData":
								return Dt.to(Et);
							case "command":
								return Wt.to(Et, Tt);
						}
					}
					Ft.toContent = ut;
				})(Li || (e.ChatResponsePart = Li = {}));
				var Di;
				(function (Ft) {
					function Xt($t, ut) {
						const Et = $t.variables.variables.filter((qt) => qt.isTool),
							Tt = $t.variables.variables.filter((qt) => !qt.isTool);
						return {
							prompt: $t.message,
							command: $t.command,
							attempt: $t.attempt ?? 0,
							enableCommandDetection: $t.enableCommandDetection ?? !0,
							isParticipantDetected: $t.isParticipantDetected ?? !1,
							references: Tt.map(Wi.to),
							toolReferences: Et.map(Gi.to),
							location: Ui.to($t.location),
							acceptedConfirmationData: $t.acceptedConfirmationData,
							rejectedConfirmationData: $t.rejectedConfirmationData,
							location2: ut,
						};
					}
					Ft.to = Xt;
				})(Di || (e.ChatAgentRequest = Di = {}));
				var Ui;
				(function (Ft) {
					function Xt(ut) {
						switch (ut) {
							case I.ChatAgentLocation.Notebook:
								return N.ChatLocation.Notebook;
							case I.ChatAgentLocation.Terminal:
								return N.ChatLocation.Terminal;
							case I.ChatAgentLocation.Panel:
								return N.ChatLocation.Panel;
							case I.ChatAgentLocation.Editor:
								return N.ChatLocation.Editor;
						}
					}
					Ft.to = Xt;
					function $t(ut) {
						switch (ut) {
							case N.ChatLocation.Notebook:
								return I.ChatAgentLocation.Notebook;
							case N.ChatLocation.Terminal:
								return I.ChatAgentLocation.Terminal;
							case N.ChatLocation.Panel:
								return I.ChatAgentLocation.Panel;
							case N.ChatLocation.Editor:
								return I.ChatAgentLocation.Editor;
						}
					}
					Ft.from = $t;
				})(Ui || (e.ChatLocation = Ui = {}));
				var Wi;
				(function (Ft) {
					function Xt($t) {
						const ut = $t.value;
						if (!ut) throw new Error("Invalid value reference");
						return {
							id: $t.id,
							name: $t.name,
							range: $t.range && [$t.range.start, $t.range.endExclusive],
							value: (0, p.$Bc)(ut)
								? p.URI.revive(ut)
								: ut &&
										typeof ut == "object" &&
										"uri" in ut &&
										"range" in ut &&
										(0, p.$Bc)(ut.uri)
									? O.to((0, r.$ji)(ut))
									: ut,
							modelDescription: $t.modelDescription,
						};
					}
					Ft.to = Xt;
				})(Wi || (e.ChatPromptReference = Wi = {}));
				var Gi;
				(function (Ft) {
					function Xt($t) {
						if ($t.value) throw new Error("Invalid tool reference");
						return {
							id: $t.id,
							range: $t.range && [$t.range.start, $t.range.endExclusive],
						};
					}
					Ft.to = Xt;
				})(Gi || (e.ChatLanguageModelToolReference = Gi = {}));
				var qi;
				(function (Ft) {
					function Xt($t, ut, Et) {
						return {
							id: $t.id,
							label: $t.label,
							fullName: $t.fullName,
							icon: $t.icon?.id,
							value: $t.values[0].value,
							insertText: $t.insertText,
							detail: $t.detail,
							documentation: $t.documentation,
							command: ut.toInternal($t.command, Et),
						};
					}
					Ft.from = Xt;
				})(qi || (e.ChatAgentCompletionItem = qi = {}));
				var Oi;
				(function (Ft) {
					function Xt($t) {
						return {
							errorDetails: $t.errorDetails,
							metadata: $t.metadata,
							nextQuestion: $t.nextQuestion,
						};
					}
					Ft.to = Xt;
				})(Oi || (e.ChatAgentResult = Oi = {}));
				var yi;
				(function (Ft) {
					function Xt($t, ut, Et) {
						if (ut.action.kind === "vote") return;
						const Tt = Oi.to($t);
						if (ut.action.kind === "command") {
							const qt = ut.action.commandButton.command;
							return {
								action: {
									kind: "command",
									commandButton: {
										command: Et.fromInternal(qt) ?? {
											command: qt.id,
											title: qt.title,
										},
									},
								},
								result: Tt,
							};
						} else
							return ut.action.kind === "followUp"
								? {
										action: {
											kind: "followUp",
											followup: Bt.to(ut.action.followup),
										},
										result: Tt,
									}
								: ut.action.kind === "inlineChat"
									? {
											action: {
												kind: "editor",
												accepted: ut.action.action === "accepted",
											},
											result: Tt,
										}
									: { action: ut.action, result: Tt };
					}
					Ft.to = Xt;
				})(yi || (e.ChatAgentUserActionEvent = yi = {}));
				var Ai;
				(function (Ft) {
					function Xt(ut) {
						return { ...ut, string: ut.toString() };
					}
					Ft.from = Xt;
					function $t(ut) {
						const Et = { ...ut, toString: () => ut.string };
						return delete Et.string, Et;
					}
					Ft.to = $t;
				})(Ai || (e.LanguageModelToolResult = Ai = {}));
				var li;
				(function (Ft) {
					function Xt($t, ut, Et) {
						return "terminalCommand" in $t
							? {
									terminalCommand: $t.terminalCommand,
									shouldExecute: $t.shouldExecute,
								}
							: "uri" in $t
								? { uri: $t.uri }
								: ut.toInternal($t, Et);
					}
					Ft.from = Xt;
				})(li || (e.TerminalQuickFix = li = {}));
				var Vi;
				(function (Ft) {
					function Xt($t) {
						return { kind: wi.to($t.kind) };
					}
					Ft.to = Xt;
				})(Vi || (e.PartialAcceptInfo = Vi = {}));
				var wi;
				(function (Ft) {
					function Xt($t) {
						switch ($t) {
							case s.PartialAcceptTriggerKind.Word:
								return N.PartialAcceptTriggerKind.Word;
							case s.PartialAcceptTriggerKind.Line:
								return N.PartialAcceptTriggerKind.Line;
							case s.PartialAcceptTriggerKind.Suggest:
								return N.PartialAcceptTriggerKind.Suggest;
							default:
								return N.PartialAcceptTriggerKind.Unknown;
						}
					}
					Ft.to = Xt;
				})(wi || (e.PartialAcceptTriggerKind = wi = {}));
				var _t;
				(function (Ft) {
					function Xt($t, ut) {
						return {
							id: ut,
							label: $t.label,
							description: $t.description,
							canEdit: $t.canEdit,
							collapsibleState:
								$t.collapsibleState || P.DebugTreeItemCollapsibleState.None,
							contextValue: $t.contextValue,
						};
					}
					Ft.from = Xt;
				})(_t || (e.DebugTreeItem = _t = {}));
				var ai;
				(function (Ft) {
					function Xt($t) {
						return {
							id: $t.id,
							modelDescription: $t.modelDescription,
							parametersSchema: $t.parametersSchema,
							displayName: $t.displayName,
						};
					}
					Ft.to = Xt;
				})(ai || (e.LanguageModelToolDescription = ai = {}));
			},
		),
		define(
			de[3467],
			he([
				1, 0, 553, 157, 314, 141, 4, 21, 62, 23, 19, 215, 67, 61, 666, 24, 3,
				70, 15, 25, 154, 28, 172, 45,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ITc = void 0);
				const v = "fileBasedRecommendations/promptedRecommendations",
					S = "extensionsAssistant/recommendations",
					I = 1e3 * 60 * 60 * 24;
				let T = class extends t.$DTc {
					get recommendations() {
						const k = [];
						return (
							[...this.j.keys()]
								.sort((L, D) => {
									if (
										this.j.get(L).recommendedTime ===
										this.j.get(D).recommendedTime
									) {
										if (this.m.has(L)) return -1;
										if (this.m.has(D)) return 1;
									}
									return this.j.get(L).recommendedTime >
										this.j.get(D).recommendedTime
										? -1
										: 1;
								})
								.forEach((L) => {
									k.push({
										extension: L,
										reason: {
											reasonId: w.ExtensionRecommendationReason.File,
											reasonText: (0, C.localize)(6580, null),
										},
									});
								}),
							k
						);
					}
					get importantRecommendations() {
						return this.recommendations.filter((k) => this.m.has(k.extension));
					}
					get otherRecommendations() {
						return this.recommendations.filter((k) => !this.m.has(k.extension));
					}
					constructor(k, L, D, M, N, A, R, O, B) {
						if (
							(super(),
							(this.n = k),
							(this.q = L),
							(this.r = D),
							(this.s = N),
							(this.t = A),
							(this.u = R),
							(this.w = O),
							(this.y = B),
							(this.h = new Map()),
							(this.j = new Map()),
							(this.m = new Set()),
							(this.g = {}),
							M.extensionRecommendations)
						)
							for (const [U, z] of Object.entries(M.extensionRecommendations))
								z.onFileOpen && (this.g[U.toLowerCase()] = z.onFileOpen);
					}
					async c() {
						if ((0, l.$yg)(this.g)) return;
						await this.n.whenInitialized;
						const k = this.O(),
							L = Date.now();
						Object.entries(k).forEach(([D, M]) => {
							(L - M) / I <= 7 &&
								this.g[D] &&
								this.j.set(D.toLowerCase(), { recommendedTime: M });
						}),
							this.D(this.q.onModelAdded((D) => this.C(D))),
							this.q.getModels().forEach((D) => this.C(D));
					}
					C(k) {
						const L =
							k.uri.scheme === r.Schemas.vscodeNotebookCell
								? o.CellUri.parse(k.uri)?.notebook
								: k.uri;
						if (!L) return;
						const D = (0, g.$Qb)([
							r.Schemas.untitled,
							r.Schemas.file,
							r.Schemas.vscodeRemote,
							...this.w.getWorkspace().folders.map((M) => M.uri.scheme),
						]);
						!L ||
							!D.includes(L.scheme) ||
							(Date.now() -
								(this.y.nonPersistentStorage
									.suppressFileExtensionRecommendationsStart ?? 0) >
								2e3 &&
								(0, f.$Oh)(() => this.F(L, k), 0, this.B));
					}
					F(k, L, D) {
						if (L.isDisposed()) return;
						const M = (0, u.$lh)(k).toLowerCase();
						D = D ?? this.h.get(M) ?? this.g;
						const N = Object.entries(D);
						if (N.length === 0) return;
						const A = new Map(),
							R = this.n.local,
							O = {},
							B = {},
							U = {};
						let z = !1;
						const F = L.getLanguageId();
						for (const [x, H] of N) {
							const q = [],
								V = [],
								G = [];
							for (const K of H) {
								let J = !1,
									W = !1;
								const X = !!K.languages,
									Y = !!K.contentPattern;
								if (
									((X || Y) && q.push(K),
									X && K.languages.includes(F) && (J = !0),
									K.pathGlob)
								) {
									const ne = K.pathGlob;
									(A.get(ne) ??
										(0, a.$Ik)(
											K.pathGlob,
											k.with({ fragment: "" }).toString(),
										)) &&
										(W = !0),
										A.set(ne, W);
								}
								let ie = J || W;
								(M && !ie) ||
									(ie &&
										K.whenInstalled &&
										(K.whenInstalled.every((ne) =>
											R.some((ee) => (0, s.$7p)({ id: ne }, ee.identifier)),
										) ||
											(ie = !1)),
									ie &&
										K.whenNotInstalled &&
										R.some((ne) =>
											K.whenNotInstalled?.some((ee) =>
												(0, s.$7p)({ id: ee }, ne.identifier),
											),
										) &&
										(ie = !1),
									ie &&
										Y &&
										(L.findMatches(K.contentPattern, !1, !0, !1, null, !1)
											.length ||
											(ie = !1)),
									ie
										? (V.push(K), q.pop())
										: (X || Y) && (G.push(K), X && (z = !0)));
							}
							V.length && (B[x] = V),
								G.length && (U[x] = G),
								q.length && (O[x] = q);
						}
						if ((M && this.h.set(M, O), Object.keys(U).length && z)) {
							const x = new p.$Zc();
							x.add(
								L.onDidChangeLanguage(() => {
									(0, f.$Oh)(
										() => {
											x.isDisposed || (this.F(k, L, U), x.dispose());
										},
										0,
										x,
									);
								}),
							),
								x.add(L.onWillDispose(() => x.dispose()));
						}
						Object.keys(B).length && this.G(k, L, B);
					}
					G(k, L, D) {
						let M = !1;
						const N = new Set(),
							A = new Set();
						for (const [B, U] of Object.entries(D))
							for (const z of U)
								A.add(B),
									z.important && (N.add(B), this.m.add(B)),
									z.languages && (M = !0);
						for (const B of A) {
							const U = this.j.get(B) || {
								recommendedTime: Date.now(),
								sources: [],
							};
							(U.recommendedTime = Date.now()), this.j.set(B, U);
						}
						if ((this.P(), this.t.hasToIgnoreRecommendationNotifications()))
							return;
						const R = L.getLanguageId(),
							O = this.r.getLanguageName(R);
						N.size &&
							this.H(
								O && M && R !== y.$0M
									? (0, C.localize)(6581, null, O)
									: (0, u.$kh)(k),
								R,
								[...N],
							);
					}
					H(k, L, D) {
						if (((D = this.M(D)), D.length === 0)) return !1;
						D = this.N(D, this.n.local).filter((N) => this.m.has(N));
						const M = L !== y.$0M ? this.J()[L] : void 0;
						return (
							M && (D = D.filter((N) => M.includes(N))),
							D.length === 0 ? !1 : (this.I(D, k, L), !0)
						);
					}
					async I(k, L, D) {
						try {
							(await this.t.promptImportantExtensionsInstallNotification({
								extensions: k,
								name: L,
								source: n.RecommendationSource.FILE,
							})) === n.RecommendationsNotificationResult.Accepted &&
								this.L(D, k);
						} catch {}
					}
					J() {
						return JSON.parse(this.s.get(v, d.StorageScope.PROFILE, "{}"));
					}
					L(k, L) {
						const D = this.J();
						(D[k] = (0, g.$Qb)([...(D[k] ?? []), ...L])),
							this.s.store(
								v,
								JSON.stringify(D),
								d.StorageScope.PROFILE,
								d.StorageTarget.USER,
							);
					}
					M(k) {
						const L = [
							...this.u.ignoredRecommendations,
							...this.t.ignoredRecommendations,
						];
						return k.filter((D) => !L.includes(D));
					}
					N(k, L) {
						const D = L.reduce(
							(M, N) => (
								N.enablementState !==
									i.EnablementState.DisabledByExtensionKind &&
									M.add(N.identifier.id.toLowerCase()),
								M
							),
							new Set(),
						);
						return k.filter((M) => !D.has(M.toLowerCase()));
					}
					O() {
						let k = JSON.parse(this.s.get(S, d.StorageScope.PROFILE, "[]"));
						Array.isArray(k) &&
							(k = k.reduce((D, M) => ((D[M] = Date.now()), D), {}));
						const L = {};
						return (
							Object.entries(k).forEach(([D, M]) => {
								typeof M == "number" && (L[D.toLowerCase()] = M);
							}),
							L
						);
					}
					P() {
						const k = {};
						this.j.forEach((L, D) => (k[D] = L.recommendedTime)),
							this.s.store(
								S,
								JSON.stringify(k),
								d.StorageScope.PROFILE,
								d.StorageTarget.MACHINE,
							);
					}
				};
				(e.$ITc = T),
					(e.$ITc = T =
						Ne(
							[
								j(0, E.$MQb),
								j(1, h.$QO),
								j(2, c.$nM),
								j(3, m.$Bk),
								j(4, d.$lq),
								j(5, n.$HTc),
								j(6, w.$0Qb),
								j(7, b.$Vi),
								j(8, $.$0zb),
							],
							T,
						));
			},
		),
		