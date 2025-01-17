import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/arrays.js';
import '../../../base/common/cancellation.js';
import '../../../base/common/errors.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/uri.js';
import '../../../editor/common/languages/language.js';
import './mainThreadNotebookDto.js';
import '../../services/extensions/common/extHostCustomers.js';
import '../../contrib/notebook/browser/services/notebookEditorService.js';
import '../../contrib/notebook/common/notebookExecutionStateService.js';
import '../../contrib/notebook/common/notebookKernelService.js';
import '../common/extHost.protocol.js';
import '../../contrib/notebook/common/notebookService.js';
import '../../../base/common/async.js';
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
		