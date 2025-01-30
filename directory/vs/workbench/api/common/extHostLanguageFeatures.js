import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/arrays.js';
import '../../../base/common/async.js';
import '../../../base/common/cancellation.js';
import '../../../base/common/errors.js';
import '../../../base/common/idGenerator.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/objects.js';
import '../../../base/common/stopwatch.js';
import '../../../base/common/strings.js';
import '../../../base/common/types.js';
import '../../../base/common/uri.js';
import '../../../editor/common/core/range.js';
import '../../../editor/common/core/selection.js';
import '../../../editor/common/languages.js';
import '../../../editor/common/services/semanticTokensDto.js';
import '../../../nls.js';
import '../../../platform/extensions/common/extensions.js';
import './extHostTypeConverters.js';
import './extHostTypes.js';
import '../../services/extensions/common/extensions.js';
import './cache.js';
import './extHost.protocol.js';
define(
			Pe[571],
			Ne([
				1, 0, 20, 9, 23, 12, 262, 3, 27, 57, 15, 19, 2, 39, 456, 137, 273, 10,
				25, 17, 11, 29, 186, 6,
			]),
			function (
				we,
				t,
				e,
				r,
				S,
				N,
				P,
				I,
				l,
				n,
				p,
				y,
				d,
				k,
				g,
				c,
				h,
				$,
				T,
				a,
				u,
				s,
				f,
				o,
			) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$chd = void 0),
					(c = tt(c)),
					(a = tt(a)),
					(o = tt(o));
				class w {
					constructor(se, re) {
						(this.d = se), (this.e = re);
					}
					async provideDocumentSymbols(se, re) {
						const x = this.d.getDocument(se),
							V = await this.e.provideDocumentSymbols(x, re);
						if (!(0, e.$Ob)(V))
							return V[0] instanceof u.$Jbb
								? V.map(a.DocumentSymbol.from)
								: w.f(V);
					}
					static f(se) {
						se = se.slice(0).sort((V, te) => {
							let Me = V.location.range.start.compareTo(
								te.location.range.start,
							);
							return (
								Me === 0 &&
									(Me = te.location.range.end.compareTo(V.location.range.end)),
								Me
							);
						});
						const re = [],
							x = [];
						for (const V of se) {
							const te = {
								name: V.name || "!!MISSING: name!!",
								kind: a.SymbolKind.from(V.kind),
								tags: V.tags?.map(a.SymbolTag.from) || [],
								detail: "",
								containerName: V.containerName,
								range: a.Range.from(V.location.range),
								selectionRange: a.Range.from(V.location.range),
								children: [],
							};
							for (;;) {
								if (x.length === 0) {
									x.push(te), re.push(te);
									break;
								}
								const Me = x[x.length - 1];
								if (
									k.$iL.containsRange(Me.range, te.range) &&
									!k.$iL.equalsRange(Me.range, te.range)
								) {
									Me.children?.push(te), x.push(te);
									break;
								}
								x.pop();
							}
						}
						return re;
					}
				}
				class m {
					constructor(se, re, x, V, te, Me) {
						(this.f = se),
							(this.g = re),
							(this.h = x),
							(this.j = V),
							(this.k = te),
							(this.l = Me),
							(this.d = new f.$7gd("CodeLens")),
							(this.e = new Map());
					}
					async provideCodeLenses(se, re) {
						const x = this.f.getDocument(se),
							V = await this.h.provideCodeLenses(x, re);
						if (!V || re.isCancellationRequested) return;
						const te = this.d.add(V),
							Me = new I.$Zc();
						this.e.set(te, Me);
						const ze = { cacheId: te, lenses: [] };
						for (let et = 0; et < V.length; et++)
							ze.lenses.push({
								cacheId: [te, et],
								range: a.Range.from(V[et].range),
								command: this.g.toInternal(V[et].command, Me),
							});
						return ze;
					}
					async resolveCodeLens(se, re) {
						const x = se.cacheId && this.d.get(...se.cacheId);
						if (!x) return;
						let V;
						if (
							(typeof this.h.resolveCodeLens != "function" || x.isResolved
								? (V = x)
								: (V = await this.h.resolveCodeLens(x, re)),
							V || (V = x),
							re.isCancellationRequested)
						)
							return;
						const te = se.cacheId && this.e.get(se.cacheId[0]);
						if (te) {
							if (!V.command) {
								const Me = new Error(
									"INVALID code lens resolved, lacks command: " +
										this.j.identifier.value,
								);
								this.k.onExtensionError(this.j.identifier, Me),
									this.l.error(Me);
								return;
							}
							return (se.command = this.g.toInternal(V.command, te)), se;
						}
					}
					releaseCodeLenses(se) {
						this.e.get(se)?.dispose(), this.e.delete(se), this.d.delete(se);
					}
				}
				function E(Ge) {
					return Array.isArray(Ge)
						? Ge.map(a.DefinitionLink.from)
						: Ge
							? [a.DefinitionLink.from(Ge)]
							: [];
				}
				class R {
					constructor(se, re) {
						(this.d = se), (this.e = re);
					}
					async provideDefinition(se, re, x) {
						const V = this.d.getDocument(se),
							te = a.Position.to(re),
							Me = await this.e.provideDefinition(V, te, x);
						return E(Me);
					}
				}
				class C {
					constructor(se, re) {
						(this.d = se), (this.e = re);
					}
					async provideDeclaration(se, re, x) {
						const V = this.d.getDocument(se),
							te = a.Position.to(re),
							Me = await this.e.provideDeclaration(V, te, x);
						return E(Me);
					}
				}
				class O {
					constructor(se, re) {
						(this.d = se), (this.e = re);
					}
					async provideImplementation(se, re, x) {
						const V = this.d.getDocument(se),
							te = a.Position.to(re),
							Me = await this.e.provideImplementation(V, te, x);
						return E(Me);
					}
				}
				class A {
					constructor(se, re) {
						(this.d = se), (this.e = re);
					}
					async provideTypeDefinition(se, re, x) {
						const V = this.d.getDocument(se),
							te = a.Position.to(re),
							Me = await this.e.provideTypeDefinition(V, te, x);
						return E(Me);
					}
				}
				class J {
					static {
						this.f = 10;
					}
					constructor(se, re) {
						(this.g = se), (this.h = re), (this.d = 0), (this.e = new Map());
					}
					async provideHover(se, re, x, V) {
						const te = this.g.getDocument(se),
							Me = a.Position.to(re);
						let ze;
						if (x && x.verbosityRequest) {
							const St = x.verbosityRequest.previousHover.id,
								Et = this.e.get(St);
							if (!Et) throw new Error(`Hover with id ${St} not found`);
							const pt = {
								verbosityDelta: x.verbosityRequest.verbosityDelta,
								previousHover: Et,
							};
							ze = await this.h.provideHover(te, Me, V, pt);
						} else ze = await this.h.provideHover(te, Me, V);
						if (!ze || (0, e.$Ob)(ze.contents)) return;
						ze.range || (ze.range = te.getWordRangeAtPosition(Me)),
							ze.range || (ze.range = new u.$pbb(Me, Me));
						const et = a.Hover.from(ze),
							ot = this.d;
						if (this.e.size === J.f) {
							const St = Math.min(...this.e.keys());
							this.e.delete(St);
						}
						return this.e.set(ot, ze), (this.d += 1), { ...et, id: ot };
					}
					releaseHover(se) {
						this.e.delete(se);
					}
				}
				class L {
					constructor(se, re) {
						(this.d = se), (this.e = re);
					}
					async provideEvaluatableExpression(se, re, x) {
						const V = this.d.getDocument(se),
							te = a.Position.to(re),
							Me = await this.e.provideEvaluatableExpression(V, te, x);
						if (Me) return a.EvaluatableExpression.from(Me);
					}
				}
				class b {
					constructor(se, re) {
						(this.d = se), (this.e = re);
					}
					async provideInlineValues(se, re, x, V) {
						const te = this.d.getDocument(se),
							Me = await this.e.provideInlineValues(
								te,
								a.Range.to(re),
								a.InlineValueContext.to(x),
								V,
							);
						if (Array.isArray(Me))
							return Me.map((ze) => a.InlineValue.from(ze));
					}
				}
				class F {
					constructor(se, re) {
						(this.d = se), (this.e = re);
					}
					async provideDocumentHighlights(se, re, x) {
						const V = this.d.getDocument(se),
							te = a.Position.to(re),
							Me = await this.e.provideDocumentHighlights(V, te, x);
						if (Array.isArray(Me)) return Me.map(a.DocumentHighlight.from);
					}
				}
				class D {
					constructor(se, re) {
						(this.d = se), (this.e = re);
					}
					async provideMultiDocumentHighlights(se, re, x, V) {
						const te = this.d.getDocument(se),
							Me = x.map((ot) => this.d.getDocument(ot)),
							ze = a.Position.to(re),
							et = await this.e.provideMultiDocumentHighlights(te, ze, Me, V);
						if (Array.isArray(et)) return et.map(a.MultiDocumentHighlight.from);
					}
				}
				class M {
					constructor(se, re) {
						(this.d = se), (this.e = re);
					}
					async provideLinkedEditingRanges(se, re, x) {
						const V = this.d.getDocument(se),
							te = a.Position.to(re),
							Me = await this.e.provideLinkedEditingRanges(V, te, x);
						if (Me && Array.isArray(Me.ranges))
							return {
								ranges: (0, e.$Lb)(Me.ranges.map(a.Range.from)),
								wordPattern: Me.wordPattern,
							};
					}
				}
				class z {
					constructor(se, re) {
						(this.d = se), (this.e = re);
					}
					async provideReferences(se, re, x, V) {
						const te = this.d.getDocument(se),
							Me = a.Position.to(re),
							ze = await this.e.provideReferences(te, Me, x, V);
						if (Array.isArray(ze)) return ze.map(a.location.from);
					}
				}
				class Q {
					static {
						this.d = 1e3;
					}
					constructor(se, re, x, V, te, Me, ze) {
						(this.g = se),
							(this.h = re),
							(this.j = x),
							(this.k = V),
							(this.l = te),
							(this.m = Me),
							(this.n = ze),
							(this.e = new f.$7gd("CodeAction")),
							(this.f = new Map());
					}
					async provideCodeActions(se, re, x, V) {
						const te = this.g.getDocument(se),
							Me = g.$kL.isISelection(re) ? a.Selection.to(re) : a.Range.to(re),
							ze = [];
						for (const pt of this.j.getDiagnostics(se))
							if (Me.intersection(pt.range) && ze.push(pt) > Q.d) break;
						const et = {
								diagnostics: ze,
								only: x.only ? new u.$Lbb(x.only) : void 0,
								triggerKind: a.CodeActionTriggerKind.to(x.trigger),
							},
							ot = await this.k.provideCodeActions(te, Me, et, V);
						if (!(0, e.$Pb)(ot) || V.isCancellationRequested) return;
						const gt = this.e.add(ot),
							St = new I.$Zc();
						this.f.set(gt, St);
						const Et = [];
						for (let pt = 0; pt < ot.length; pt++) {
							const dt = ot[pt];
							if (dt)
								if (Q.o(dt))
									this.n.report(
										"CodeActionProvider.provideCodeActions - return commands",
										this.m,
										"Return 'CodeAction' instances instead.",
									),
										Et.push({
											_isSynthetic: !0,
											title: dt.title,
											command: this.h.toInternal(dt, St),
										});
								else {
									et.only &&
										(dt.kind
											? et.only.contains(dt.kind) ||
												this.l.warn(
													`${this.m.identifier.value} - Code actions of kind '${et.only.value}' requested but returned code action is of kind '${dt.kind.value}'. Code action will be dropped. Please check 'CodeActionContext.only' to only return requested code actions.`,
												)
											: this.l.warn(
													`${this.m.identifier.value} - Code actions of kind '${et.only.value}' requested but returned code action does not have a 'kind'. Code action will be dropped. Please set 'CodeAction.kind'.`,
												));
									const ve = dt.ranges ?? [];
									Et.push({
										cacheId: [gt, pt],
										title: dt.title,
										command: dt.command && this.h.toInternal(dt.command, St),
										diagnostics:
											dt.diagnostics && dt.diagnostics.map(a.Diagnostic.from),
										edit: dt.edit && a.WorkspaceEdit.from(dt.edit, void 0),
										kind: dt.kind && dt.kind.value,
										isPreferred: dt.isPreferred,
										isAI: (0, s.$t2)(this.m, "codeActionAI") ? dt.isAI : !1,
										ranges: (0, s.$t2)(this.m, "codeActionRanges")
											? (0, e.$Lb)(ve.map(a.Range.from))
											: void 0,
										disabled: dt.disabled?.reason,
									});
								}
						}
						return { cacheId: gt, actions: Et };
					}
					async resolveCodeAction(se, re) {
						const [x, V] = se,
							te = this.e.get(x, V);
						if (!te || Q.o(te)) return {};
						if (!this.k.resolveCodeAction) return {};
						const Me = (await this.k.resolveCodeAction(te, re)) ?? te;
						let ze;
						Me.edit && (ze = a.WorkspaceEdit.from(Me.edit, void 0));
						let et;
						if (Me.command) {
							const ot = this.f.get(x);
							ot && (et = this.h.toInternal(Me.command, ot));
						}
						return { edit: ze, command: et };
					}
					releaseCodeActions(se) {
						this.f.get(se)?.dispose(), this.f.delete(se), this.e.delete(se);
					}
					static o(se) {
						return typeof se.command == "string" && typeof se.title == "string";
					}
				}
				class H {
					constructor(se, re, x, V, te) {
						(this.e = se),
							(this.f = re),
							(this.g = x),
							(this.h = V),
							(this.j = te),
							(this.d = new f.$7gd("DocumentPasteEdit"));
					}
					async prepareDocumentPaste(se, re, x, V) {
						if (!this.g.prepareDocumentPaste) return;
						const te = this.f.getDocument(se),
							Me = re.map((ot) => a.Range.to(ot)),
							ze = a.DataTransfer.toDataTransfer(x, () => {
								throw new N.$cb();
							});
						if (
							(await this.g.prepareDocumentPaste(te, Me, ze, V),
							V.isCancellationRequested)
						)
							return;
						const et = Array.from(ze).filter(
							([, ot]) => !(ot instanceof u.$fcb),
						);
						return a.DataTransfer.from(et);
					}
					async providePasteEdits(se, re, x, V, te, Me) {
						if (!this.g.provideDocumentPasteEdits) return [];
						const ze = this.f.getDocument(re),
							et = x.map((Et) => a.Range.to(Et)),
							ot = a.DataTransfer.toDataTransfer(
								V,
								async (Et) =>
									(await this.e.$resolvePasteFileData(this.h, se, Et)).buffer,
							),
							gt = await this.g.provideDocumentPasteEdits(
								ze,
								et,
								ot,
								{
									only: te.only ? new u.$kcb(te.only) : void 0,
									triggerKind: te.triggerKind,
								},
								Me,
							);
						if (!gt || Me.isCancellationRequested) return [];
						const St = this.d.add(gt);
						return gt.map((Et, pt) => ({
							_cacheId: [St, pt],
							title:
								Et.title ??
								(0, $.localize)(2710, null, this.j.displayName || this.j.name),
							kind: Et.kind,
							yieldTo: Et.yieldTo?.map((dt) => dt.value),
							insertText:
								typeof Et.insertText == "string"
									? Et.insertText
									: { snippet: Et.insertText.value },
							additionalEdit: Et.additionalEdit
								? a.WorkspaceEdit.from(Et.additionalEdit, void 0)
								: void 0,
						}));
					}
					async resolvePasteEdit(se, re) {
						const [x, V] = se,
							te = this.d.get(x, V);
						if (!te || !this.g.resolveDocumentPasteEdit) return {};
						const Me = (await this.g.resolveDocumentPasteEdit(te, re)) ?? te;
						return {
							additionalEdit: Me.additionalEdit
								? a.WorkspaceEdit.from(Me.additionalEdit, void 0)
								: void 0,
						};
					}
					releasePasteEdits(se) {
						this.d.delete(se);
					}
				}
				class B {
					constructor(se, re) {
						(this.d = se), (this.e = re);
					}
					async provideDocumentFormattingEdits(se, re, x) {
						const V = this.d.getDocument(se),
							te = await this.e.provideDocumentFormattingEdits(V, re, x);
						if (Array.isArray(te)) return te.map(a.TextEdit.from);
					}
				}
				class U {
					constructor(se, re) {
						(this.d = se), (this.e = re);
					}
					async provideDocumentRangeFormattingEdits(se, re, x, V) {
						const te = this.d.getDocument(se),
							Me = a.Range.to(re),
							ze = await this.e.provideDocumentRangeFormattingEdits(
								te,
								Me,
								x,
								V,
							);
						if (Array.isArray(ze)) return ze.map(a.TextEdit.from);
					}
					async provideDocumentRangesFormattingEdits(se, re, x, V) {
						(0, y.$vg)(
							typeof this.e.provideDocumentRangesFormattingEdits == "function",
							"INVALID invocation of `provideDocumentRangesFormattingEdits`",
						);
						const te = this.d.getDocument(se),
							Me = re.map(a.Range.to),
							ze = await this.e.provideDocumentRangesFormattingEdits(
								te,
								Me,
								x,
								V,
							);
						if (Array.isArray(ze)) return ze.map(a.TextEdit.from);
					}
				}
				class Z {
					constructor(se, re) {
						(this.d = se),
							(this.e = re),
							(this.autoFormatTriggerCharacters = []);
					}
					async provideOnTypeFormattingEdits(se, re, x, V, te) {
						const Me = this.d.getDocument(se),
							ze = a.Position.to(re),
							et = await this.e.provideOnTypeFormattingEdits(Me, ze, x, V, te);
						if (Array.isArray(et)) return et.map(a.TextEdit.from);
					}
				}
				class W {
					constructor(se, re) {
						(this.e = se),
							(this.f = re),
							(this.d = new f.$7gd("WorkspaceSymbols"));
					}
					async provideWorkspaceSymbols(se, re) {
						const x = await this.e.provideWorkspaceSymbols(se, re);
						if (!(0, e.$Pb)(x)) return { symbols: [] };
						const V = this.d.add(x),
							te = { cacheId: V, symbols: [] };
						for (let Me = 0; Me < x.length; Me++) {
							const ze = x[Me];
							if (!ze || !ze.name) {
								this.f.warn("INVALID SymbolInformation", ze);
								continue;
							}
							te.symbols.push({
								...a.WorkspaceSymbol.from(ze),
								cacheId: [V, Me],
							});
						}
						return te;
					}
					async resolveWorkspaceSymbol(se, re) {
						if (
							typeof this.e.resolveWorkspaceSymbol != "function" ||
							!se.cacheId
						)
							return se;
						const x = this.d.get(...se.cacheId);
						if (x) {
							const V = await this.e.resolveWorkspaceSymbol(x, re);
							return V && (0, l.$yo)(se, a.WorkspaceSymbol.from(V), !0);
						}
					}
					releaseWorkspaceSymbols(se) {
						this.d.delete(se);
					}
				}
				class G {
					static supportsResolving(se) {
						return typeof se.prepareRename == "function";
					}
					constructor(se, re, x) {
						(this.d = se), (this.e = re), (this.f = x);
					}
					async provideRenameEdits(se, re, x, V) {
						const te = this.d.getDocument(se),
							Me = a.Position.to(re);
						try {
							const ze = await this.e.provideRenameEdits(te, Me, x, V);
							return ze ? a.WorkspaceEdit.from(ze) : void 0;
						} catch (ze) {
							const et = G.g(ze);
							return et
								? { rejectReason: et, edits: void 0 }
								: Promise.reject(ze);
						}
					}
					async resolveRenameLocation(se, re, x) {
						if (typeof this.e.prepareRename != "function")
							return Promise.resolve(void 0);
						const V = this.d.getDocument(se),
							te = a.Position.to(re);
						try {
							const Me = await this.e.prepareRename(V, te, x);
							let ze, et;
							if (
								(u.$pbb.isRange(Me)
									? ((ze = Me), (et = V.getText(Me)))
									: (0, y.$ng)(Me) && ((ze = Me.range), (et = Me.placeholder)),
								!ze || !et)
							)
								return;
							if (ze.start.line > te.line || ze.end.line < te.line) {
								this.f.warn(
									"INVALID rename location: position line must be within range start/end lines",
								);
								return;
							}
							return { range: a.Range.from(ze), text: et };
						} catch (Me) {
							const ze = G.g(Me);
							return ze
								? { rejectReason: ze, range: void 0, text: void 0 }
								: Promise.reject(Me);
						}
					}
					static g(se) {
						return typeof se == "string"
							? se
							: se instanceof Error && typeof se.message == "string"
								? se.message
								: void 0;
					}
				}
				class fe {
					static {
						this.d = {
							[c.NewSymbolNameTriggerKind.Invoke]:
								u.NewSymbolNameTriggerKind.Invoke,
							[c.NewSymbolNameTriggerKind.Automatic]:
								u.NewSymbolNameTriggerKind.Automatic,
						};
					}
					constructor(se, re, x) {
						(this.e = se), (this.f = re), (this.g = x);
					}
					async supportsAutomaticNewSymbolNamesTriggerKind() {
						return this.f.supportsAutomaticTriggerKind;
					}
					async provideNewSymbolNames(se, re, x, V) {
						const te = this.e.getDocument(se),
							Me = a.Range.to(re);
						try {
							const ze = fe.d[x],
								et = await this.f.provideNewSymbolNames(te, Me, ze, V);
							return et
								? et.map((ot) =>
										typeof ot == "string"
											? { newSymbolName: ot }
											: { newSymbolName: ot.newSymbolName, tags: ot.tags },
									)
								: void 0;
						} catch (ze) {
							this.g.error(fe.h(ze) ?? JSON.stringify(ze, null, "	"));
							return;
						}
					}
					static h(se) {
						return typeof se == "string"
							? se
							: se instanceof Error && typeof se.message == "string"
								? se.message
								: void 0;
					}
				}
				class ae {
					constructor(se, re) {
						(this.resultId = se), (this.tokens = re);
					}
				}
				class Se {
					constructor(se, re) {
						(this.f = se), (this.g = re), (this.e = 1), (this.d = new Map());
					}
					async provideDocumentSemanticTokens(se, re, x) {
						const V = this.f.getDocument(se),
							te = re !== 0 ? this.d.get(re) : null;
						let Me =
							typeof te?.resultId == "string" &&
							typeof this.g.provideDocumentSemanticTokensEdits == "function"
								? await this.g.provideDocumentSemanticTokensEdits(
										V,
										te.resultId,
										x,
									)
								: await this.g.provideDocumentSemanticTokens(V, x);
						return (
							te && this.d.delete(re),
							Me ? ((Me = Se.h(Me)), this.o(Se.n(te, Me), Me)) : null
						);
					}
					async releaseDocumentSemanticColoring(se) {
						this.d.delete(se);
					}
					static h(se) {
						return Se.j(se)
							? Se.k(se)
								? se
								: new u.$Kcb(new Uint32Array(se.data), se.resultId)
							: Se.l(se)
								? Se.m(se)
									? se
									: new u.$Mcb(
											se.edits.map(
												(re) =>
													new u.$Lcb(
														re.start,
														re.deleteCount,
														re.data ? new Uint32Array(re.data) : re.data,
													),
											),
											se.resultId,
										)
								: se;
					}
					static j(se) {
						return se && !!se.data;
					}
					static k(se) {
						return se.data instanceof Uint32Array;
					}
					static l(se) {
						return se && Array.isArray(se.edits);
					}
					static m(se) {
						for (const re of se.edits)
							if (!(re.data instanceof Uint32Array)) return !1;
						return !0;
					}
					static n(se, re) {
						if (!Se.j(re) || !se || !se.tokens) return re;
						const x = se.tokens,
							V = x.length,
							te = re.data,
							Me = te.length;
						let ze = 0;
						const et = Math.min(V, Me);
						for (; ze < et && x[ze] === te[ze]; ) ze++;
						if (ze === V && ze === Me) return new u.$Mcb([], re.resultId);
						let ot = 0;
						const gt = et - ze;
						for (; ot < gt && x[V - ot - 1] === te[Me - ot - 1]; ) ot++;
						return new u.$Mcb(
							[
								{
									start: ze,
									deleteCount: V - ze - ot,
									data: te.subarray(ze, Me - ot),
								},
							],
							re.resultId,
						);
					}
					o(se, re) {
						if (Se.j(se)) {
							const x = this.e++;
							return (
								this.d.set(x, new ae(se.resultId, se.data)),
								(0, h.$7Ob)({ id: x, type: "full", data: se.data })
							);
						}
						if (Se.l(se)) {
							const x = this.e++;
							return (
								Se.j(re)
									? this.d.set(x, new ae(re.resultId, re.data))
									: this.d.set(x, new ae(se.resultId)),
								(0, h.$7Ob)({
									id: x,
									type: "delta",
									deltas: (se.edits || []).map((V) => ({
										start: V.start,
										deleteCount: V.deleteCount,
										data: V.data,
									})),
								})
							);
						}
						return null;
					}
				}
				class he {
					constructor(se, re) {
						(this.d = se), (this.e = re);
					}
					async provideDocumentRangeSemanticTokens(se, re, x) {
						const V = this.d.getDocument(se),
							te = await this.e.provideDocumentRangeSemanticTokens(
								V,
								a.Range.to(re),
								x,
							);
						return te ? this.f(te) : null;
					}
					f(se) {
						return (0, h.$7Ob)({ id: 0, type: "full", data: se.data });
					}
				}
				class _ {
					static supportsResolving(se) {
						return typeof se.resolveCompletionItem == "function";
					}
					constructor(se, re, x, V, te) {
						(this.f = se),
							(this.g = re),
							(this.h = x),
							(this.j = V),
							(this.k = te),
							(this.d = new f.$7gd("CompletionItem")),
							(this.e = new Map());
					}
					async provideCompletionItems(se, re, x, V) {
						const te = this.f.getDocument(se),
							Me = a.Position.to(re),
							ze = te.getWordRangeAtPosition(Me) || new u.$pbb(Me, Me),
							et = ze.with({ end: Me }),
							ot = new n.$le(),
							gt = await this.h.provideCompletionItems(
								te,
								Me,
								V,
								a.CompletionContext.to(x),
							);
						if (!gt || V.isCancellationRequested) return;
						const St = Array.isArray(gt) ? new u.$Ybb(gt) : gt,
							Et = _.supportsResolving(this.h)
								? this.d.add(St.items)
								: this.d.add([]),
							pt = new I.$Zc();
						this.e.set(Et, pt);
						const dt = [],
							ve = {
								x: Et,
								[o.ISuggestResultDtoField.completions]: dt,
								[o.ISuggestResultDtoField.defaultRanges]: {
									replace: a.Range.from(ze),
									insert: a.Range.from(et),
								},
								[o.ISuggestResultDtoField.isIncomplete]:
									St.isIncomplete || void 0,
								[o.ISuggestResultDtoField.duration]: ot.elapsed(),
							};
						for (let Ee = 0; Ee < St.items.length; Ee++) {
							const Ae = St.items[Ee],
								j = this.l(Ae, [Et, Ee], et, ze);
							dt.push(j);
						}
						return ve;
					}
					async resolveCompletionItem(se, re) {
						if (typeof this.h.resolveCompletionItem != "function") return;
						const x = this.d.get(...se);
						if (!x) return;
						const V = this.l(x, se),
							te = await this.h.resolveCompletionItem(x, re);
						if (!te) return;
						const Me = this.l(te, se);
						return (
							(V[o.ISuggestDataDtoField.insertText] !==
								Me[o.ISuggestDataDtoField.insertText] ||
								V[o.ISuggestDataDtoField.insertTextRules] !==
									Me[o.ISuggestDataDtoField.insertTextRules]) &&
								this.j.report(
									"CompletionItem.insertText",
									this.k,
									"extension MAY NOT change 'insertText' of a CompletionItem during resolve",
								),
							(V[o.ISuggestDataDtoField.commandIdent] !==
								Me[o.ISuggestDataDtoField.commandIdent] ||
								V[o.ISuggestDataDtoField.commandId] !==
									Me[o.ISuggestDataDtoField.commandId] ||
								!(0, l.$zo)(
									V[o.ISuggestDataDtoField.commandArguments],
									Me[o.ISuggestDataDtoField.commandArguments],
								)) &&
								this.j.report(
									"CompletionItem.command",
									this.k,
									"extension MAY NOT change 'command' of a CompletionItem during resolve",
								),
							{
								...V,
								[o.ISuggestDataDtoField.documentation]:
									Me[o.ISuggestDataDtoField.documentation],
								[o.ISuggestDataDtoField.detail]:
									Me[o.ISuggestDataDtoField.detail],
								[o.ISuggestDataDtoField.additionalTextEdits]:
									Me[o.ISuggestDataDtoField.additionalTextEdits],
								[o.ISuggestDataDtoField.insertText]:
									Me[o.ISuggestDataDtoField.insertText],
								[o.ISuggestDataDtoField.insertTextRules]:
									Me[o.ISuggestDataDtoField.insertTextRules],
								[o.ISuggestDataDtoField.commandIdent]:
									Me[o.ISuggestDataDtoField.commandIdent],
								[o.ISuggestDataDtoField.commandId]:
									Me[o.ISuggestDataDtoField.commandId],
								[o.ISuggestDataDtoField.commandArguments]:
									Me[o.ISuggestDataDtoField.commandArguments],
							}
						);
					}
					releaseCompletionItems(se) {
						this.e.get(se)?.dispose(), this.e.delete(se), this.d.delete(se);
					}
					l(se, re, x, V) {
						const te = this.e.get(re[0]);
						if (!te) throw Error("DisposableStore is missing...");
						const Me = this.g.toInternal(se.command, te),
							ze = {
								x: re,
								[o.ISuggestDataDtoField.label]: se.label,
								[o.ISuggestDataDtoField.kind]:
									se.kind !== void 0
										? a.CompletionItemKind.from(se.kind)
										: void 0,
								[o.ISuggestDataDtoField.kindModifier]:
									se.tags && se.tags.map(a.CompletionItemTag.from),
								[o.ISuggestDataDtoField.detail]: se.detail,
								[o.ISuggestDataDtoField.documentation]:
									typeof se.documentation > "u"
										? void 0
										: a.MarkdownString.fromStrict(se.documentation),
								[o.ISuggestDataDtoField.sortText]:
									se.sortText !== se.label ? se.sortText : void 0,
								[o.ISuggestDataDtoField.filterText]:
									se.filterText !== se.label ? se.filterText : void 0,
								[o.ISuggestDataDtoField.preselect]: se.preselect || void 0,
								[o.ISuggestDataDtoField.insertTextRules]: se.keepWhitespace
									? c.CompletionItemInsertTextRule.KeepWhitespace
									: c.CompletionItemInsertTextRule.None,
								[o.ISuggestDataDtoField.commitCharacters]:
									se.commitCharacters?.join(""),
								[o.ISuggestDataDtoField.additionalTextEdits]:
									se.additionalTextEdits &&
									se.additionalTextEdits.map(a.TextEdit.from),
								[o.ISuggestDataDtoField.commandIdent]: Me?.$ident,
								[o.ISuggestDataDtoField.commandId]: Me?.id,
								[o.ISuggestDataDtoField.commandArguments]: Me?.$ident
									? void 0
									: Me?.arguments,
							};
						se.textEdit
							? (this.j.report(
									"CompletionItem.textEdit",
									this.k,
									"Use 'CompletionItem.insertText' and 'CompletionItem.range' instead.",
								),
								(ze[o.ISuggestDataDtoField.insertText] = se.textEdit.newText))
							: typeof se.insertText == "string"
								? (ze[o.ISuggestDataDtoField.insertText] = se.insertText)
								: se.insertText instanceof u.$Abb &&
									((ze[o.ISuggestDataDtoField.insertText] =
										se.insertText.value),
									(ze[o.ISuggestDataDtoField.insertTextRules] |=
										c.CompletionItemInsertTextRule.InsertAsSnippet));
						let et;
						return (
							se.textEdit
								? (et = se.textEdit.range)
								: se.range && (et = se.range),
							u.$pbb.isRange(et)
								? (ze[o.ISuggestDataDtoField.range] = a.Range.from(et))
								: et &&
									(!x?.isEqual(et.inserting) || !V?.isEqual(et.replacing)) &&
									(ze[o.ISuggestDataDtoField.range] = {
										insert: a.Range.from(et.inserting),
										replace: a.Range.from(et.replacing),
									}),
							ze
						);
					}
				}
				class oe {
					async provideInlineCompletions(se, re, x, V) {}
					async provideInlineEdits(se, re, x, V) {}
					disposeCompletions(se) {}
					handleDidShowCompletionItem(se, re, x) {}
					handlePartialAccept(se, re, x, V) {}
				}
				class ke extends oe {
					constructor(se, re, x, V) {
						super(),
							(this.f = se),
							(this.g = re),
							(this.h = x),
							(this.j = V),
							(this.d = new ee()),
							(this.e = (0, s.$t2)(this.f, "inlineCompletionsAdditions")),
							(this.k = {
								[c.InlineCompletionTriggerKind.Automatic]:
									u.InlineCompletionTriggerKind.Automatic,
								[c.InlineCompletionTriggerKind.Explicit]:
									u.InlineCompletionTriggerKind.Invoke,
							});
					}
					get supportsHandleEvents() {
						return (
							(0, s.$t2)(this.f, "inlineCompletionsAdditions") &&
							(typeof this.h.handleDidShowCompletionItem == "function" ||
								typeof this.h.handleDidPartiallyAcceptCompletionItem ==
									"function")
						);
					}
					async provideInlineCompletions(se, re, x, V) {
						const te = this.g.getDocument(se),
							Me = a.Position.to(re),
							ze = await this.h.provideInlineCompletionItems(
								te,
								Me,
								{
									selectedCompletionInfo: x.selectedSuggestionInfo
										? {
												range: a.Range.to(x.selectedSuggestionInfo.range),
												text: x.selectedSuggestionInfo.text,
											}
										: void 0,
									triggerKind: this.k[x.triggerKind],
								},
								V,
							);
						if (!ze || V.isCancellationRequested) return;
						const et = Array.isArray(ze) ? ze : ze.items,
							ot = this.e ? (Array.isArray(ze) ? [] : ze.commands || []) : [],
							gt =
								this.e && !Array.isArray(ze)
									? ze.enableForwardStability
									: void 0;
						let St;
						return {
							pid: this.d.createReferenceId({
								dispose() {
									St?.dispose();
								},
								items: et,
							}),
							items: et.map((pt, dt) => {
								let ve;
								pt.command &&
									(St || (St = new I.$Zc()),
									(ve = this.j.toInternal(pt.command, St)));
								const Ee = pt.insertText;
								return {
									insertText:
										typeof Ee == "string" ? Ee : { snippet: Ee.value },
									filterText: pt.filterText,
									range: pt.range ? a.Range.from(pt.range) : void 0,
									command: ve,
									idx: dt,
									completeBracketPairs: this.e ? pt.completeBracketPairs : !1,
								};
							}),
							commands: ot.map(
								(pt) => (St || (St = new I.$Zc()), this.j.toInternal(pt, St)),
							),
							suppressSuggestions: !1,
							enableForwardStability: gt,
						};
					}
					async provideInlineEdits(se, re, x, V) {
						if (!this.h.provideInlineEdits) return;
						(0, s.$u2)(this.f, "inlineCompletionsAdditions");
						const te = this.g.getDocument(se),
							Me = a.Range.to(re),
							ze = await this.h.provideInlineEdits(
								te,
								Me,
								{
									selectedCompletionInfo: x.selectedSuggestionInfo
										? {
												range: a.Range.to(x.selectedSuggestionInfo.range),
												text: x.selectedSuggestionInfo.text,
											}
										: void 0,
									triggerKind: this.k[x.triggerKind],
									userPrompt: x.userPrompt,
								},
								V,
							);
						if (!ze || V.isCancellationRequested) return;
						const et = Array.isArray(ze) ? ze : ze.items,
							ot = this.e ? (Array.isArray(ze) ? [] : ze.commands || []) : [],
							gt =
								this.e && !Array.isArray(ze)
									? ze.enableForwardStability
									: void 0;
						let St;
						return {
							pid: this.d.createReferenceId({
								dispose() {
									St?.dispose();
								},
								items: et,
							}),
							items: et.map((pt, dt) => {
								let ve;
								pt.command &&
									(St || (St = new I.$Zc()),
									(ve = this.j.toInternal(pt.command, St)));
								const Ee = pt.insertText;
								return {
									insertText:
										typeof Ee == "string" ? Ee : { snippet: Ee.value },
									filterText: pt.filterText,
									range: pt.range ? a.Range.from(pt.range) : void 0,
									command: ve,
									idx: dt,
									completeBracketPairs: this.e ? pt.completeBracketPairs : !1,
								};
							}),
							commands: ot.map(
								(pt) => (St || (St = new I.$Zc()), this.j.toInternal(pt, St)),
							),
							suppressSuggestions: !1,
							enableForwardStability: gt,
						};
					}
					disposeCompletions(se) {
						this.d.disposeReferenceId(se)?.dispose();
					}
					handleDidShowCompletionItem(se, re, x) {
						const V = this.d.get(se)?.items[re];
						V &&
							this.h.handleDidShowCompletionItem &&
							this.e &&
							this.h.handleDidShowCompletionItem(V, x);
					}
					handlePartialAccept(se, re, x, V) {
						const te = this.d.get(se)?.items[re];
						te &&
							this.h.handleDidPartiallyAcceptCompletionItem &&
							this.e &&
							(this.h.handleDidPartiallyAcceptCompletionItem(te, x),
							this.h.handleDidPartiallyAcceptCompletionItem(
								te,
								a.PartialAcceptInfo.to(V),
							));
					}
				}
				class ge {
					async provideInlineEdits(se, re, x) {
						const V = this.f.getDocument(se),
							te = await this.g.provideInlineEdit(
								V,
								{ triggerKind: this.e[re.triggerKind] },
								x,
							);
						if (!te || x.isCancellationRequested) return;
						let Me;
						const ze = this.d.createReferenceId({
							dispose() {
								Me?.dispose();
							},
							item: te,
						});
						let et;
						te.accepted &&
							(Me || (Me = new I.$Zc()),
							(et = this.h.toInternal(te.accepted, Me)));
						let ot;
						return (
							te.rejected &&
								(Me || (Me = new I.$Zc()),
								(ot = this.h.toInternal(te.rejected, Me))),
							{
								pid: ze,
								text: te.text,
								range: a.Range.from(te.range),
								accepted: et,
								rejected: ot,
							}
						);
					}
					disposeEdit(se) {
						this.d.disposeReferenceId(se)?.dispose();
					}
					constructor(se, re, x, V) {
						(this.f = re),
							(this.g = x),
							(this.h = V),
							(this.d = new ee()),
							(this.e = {
								[c.InlineEditTriggerKind.Automatic]:
									u.InlineEditTriggerKind.Automatic,
								[c.InlineEditTriggerKind.Invoke]:
									u.InlineEditTriggerKind.Invoke,
							});
					}
				}
				class ee {
					constructor() {
						(this.d = new Map()), (this.e = 1);
					}
					createReferenceId(se) {
						const re = this.e++;
						return this.d.set(re, se), re;
					}
					disposeReferenceId(se) {
						const re = this.d.get(se);
						return this.d.delete(se), re;
					}
					get(se) {
						return this.d.get(se);
					}
				}
				class me {
					constructor(se, re) {
						(this.e = se),
							(this.f = re),
							(this.d = new f.$7gd("SignatureHelp"));
					}
					async provideSignatureHelp(se, re, x, V) {
						const te = this.e.getDocument(se),
							Me = a.Position.to(re),
							ze = this.g(x),
							et = await this.f.provideSignatureHelp(te, Me, V, ze);
						if (et) {
							const ot = this.d.add([et]);
							return { ...a.SignatureHelp.from(et), id: ot };
						}
					}
					g(se) {
						let re;
						if (se.activeSignatureHelp) {
							const x = a.SignatureHelp.to(se.activeSignatureHelp),
								V = this.d.get(se.activeSignatureHelp.id, 0);
							V
								? ((re = V),
									(re.activeSignature = x.activeSignature),
									(re.activeParameter = x.activeParameter))
								: (re = x);
						}
						return { ...se, activeSignatureHelp: re };
					}
					releaseSignatureHelp(se) {
						this.d.delete(se);
					}
				}
				class ne {
					constructor(se, re, x, V, te) {
						(this.f = se),
							(this.g = re),
							(this.h = x),
							(this.j = V),
							(this.k = te),
							(this.d = new f.$7gd("InlayHints")),
							(this.e = new Map());
					}
					async provideInlayHints(se, re, x) {
						const V = this.f.getDocument(se),
							te = a.Range.to(re),
							Me = await this.h.provideInlayHints(V, te, x);
						if (!Array.isArray(Me) || Me.length === 0) {
							this.j.trace(
								`[InlayHints] NO inlay hints from '${this.k.identifier.value}' for range ${JSON.stringify(re)}`,
							);
							return;
						}
						if (x.isCancellationRequested) return;
						const ze = this.d.add(Me);
						this.e.set(ze, new I.$Zc());
						const et = { hints: [], cacheId: ze };
						for (let ot = 0; ot < Me.length; ot++)
							this.l(Me[ot], te) && et.hints.push(this.m(Me[ot], [ze, ot]));
						return (
							this.j.trace(
								`[InlayHints] ${et.hints.length} inlay hints from '${this.k.identifier.value}' for range ${JSON.stringify(re)}`,
							),
							et
						);
					}
					async resolveInlayHint(se, re) {
						if (typeof this.h.resolveInlayHint != "function") return;
						const x = this.d.get(...se);
						if (!x) return;
						const V = await this.h.resolveInlayHint(x, re);
						if (V && this.l(V)) return this.m(V, se);
					}
					releaseHints(se) {
						this.e.get(se)?.dispose(), this.e.delete(se), this.d.delete(se);
					}
					l(se, re) {
						return se.label.length === 0 ||
							(Array.isArray(se.label) &&
								se.label.every((x) => x.value.length === 0))
							? (console.log("INVALID inlay hint, empty label", se), !1)
							: !(re && !re.contains(se.position));
					}
					m(se, re) {
						const x = this.e.get(re[0]);
						if (!x) throw Error("DisposableStore is missing...");
						const V = {
							label: "",
							cacheId: re,
							tooltip: a.MarkdownString.fromStrict(se.tooltip),
							position: a.Position.from(se.position),
							textEdits: se.textEdits && se.textEdits.map(a.TextEdit.from),
							kind: se.kind && a.InlayHintKind.from(se.kind),
							paddingLeft: se.paddingLeft,
							paddingRight: se.paddingRight,
						};
						if (typeof se.label == "string") V.label = se.label;
						else {
							const te = [];
							V.label = te;
							for (const Me of se.label) {
								if (!Me.value) {
									console.warn(
										"INVALID inlay hint, empty label part",
										this.k.identifier.value,
									);
									continue;
								}
								const ze = {
									label: Me.value,
									tooltip: a.MarkdownString.fromStrict(Me.tooltip),
								};
								u.$Bbb.isLocation(Me.location) &&
									(ze.location = a.location.from(Me.location)),
									Me.command && (ze.command = this.g.toInternal(Me.command, x)),
									te.push(ze);
							}
						}
						return V;
					}
				}
				class de {
					constructor(se, re) {
						(this.e = se), (this.f = re), (this.d = new f.$7gd("DocumentLink"));
					}
					async provideLinks(se, re) {
						const x = this.e.getDocument(se),
							V = await this.f.provideDocumentLinks(x, re);
						if (
							!(!Array.isArray(V) || V.length === 0) &&
							!re.isCancellationRequested
						) {
							if (typeof this.f.resolveDocumentLink != "function")
								return { links: V.filter(de.g).map(a.DocumentLink.from) };
							{
								const te = this.d.add(V),
									Me = { links: [], cacheId: te };
								for (let ze = 0; ze < V.length; ze++) {
									if (!de.g(V[ze])) continue;
									const et = a.DocumentLink.from(V[ze]);
									(et.cacheId = [te, ze]), Me.links.push(et);
								}
								return Me;
							}
						}
					}
					static g(se) {
						return se.target && se.target.path.length > 5e4
							? (console.warn("DROPPING link because it is too long"), !1)
							: !0;
					}
					async resolveLink(se, re) {
						if (typeof this.f.resolveDocumentLink != "function") return;
						const x = this.d.get(...se);
						if (!x) return;
						const V = await this.f.resolveDocumentLink(x, re);
						if (!(!V || !de.g(V))) return a.DocumentLink.from(V);
					}
					releaseLinks(se) {
						this.d.delete(se);
					}
				}
				class Le {
					constructor(se, re) {
						(this.d = se), (this.e = re);
					}
					async provideColors(se, re) {
						const x = this.d.getDocument(se),
							V = await this.e.provideDocumentColors(x, re);
						return Array.isArray(V)
							? V.map((Me) => ({
									color: a.Color.from(Me.color),
									range: a.Range.from(Me.range),
								}))
							: [];
					}
					async provideColorPresentations(se, re, x) {
						const V = this.d.getDocument(se),
							te = a.Range.to(re.range),
							Me = a.Color.to(re.color),
							ze = await this.e.provideColorPresentations(
								Me,
								{ document: V, range: te },
								x,
							);
						if (Array.isArray(ze)) return ze.map(a.ColorPresentation.from);
					}
				}
				class Ce {
					constructor(se, re) {
						(this.d = se), (this.e = re);
					}
					async provideFoldingRanges(se, re, x) {
						const V = this.d.getDocument(se),
							te = await this.e.provideFoldingRanges(V, re, x);
						if (Array.isArray(te)) return te.map(a.FoldingRange.from);
					}
				}
				class je {
					constructor(se, re, x) {
						(this.d = se), (this.e = re), (this.f = x);
					}
					async provideSelectionRanges(se, re, x) {
						const V = this.d.getDocument(se),
							te = re.map(a.Position.to),
							Me = await this.e.provideSelectionRanges(V, te, x);
						if (!(0, e.$Pb)(Me)) return [];
						if (Me.length !== te.length)
							return (
								this.f.warn(
									"BAD selection ranges, provider must return ranges for each position",
								),
								[]
							);
						const ze = [];
						for (let et = 0; et < te.length; et++) {
							const ot = [];
							ze.push(ot);
							let gt = te[et],
								St = Me[et];
							for (;;) {
								if (!St.range.contains(gt))
									throw new Error(
										"INVALID selection range, must contain the previous range",
									);
								if ((ot.push(a.SelectionRange.from(St)), !St.parent)) break;
								(gt = St.range), (St = St.parent);
							}
						}
						return ze;
					}
				}
				class We {
					constructor(se, re) {
						(this.f = se),
							(this.g = re),
							(this.d = new P.$Rdb("")),
							(this.e = new Map());
					}
					async prepareSession(se, re, x) {
						const V = this.f.getDocument(se),
							te = a.Position.to(re),
							Me = await this.g.prepareCallHierarchy(V, te, x);
						if (!Me) return;
						const ze = this.d.nextId();
						return (
							this.e.set(ze, new Map()),
							Array.isArray(Me)
								? Me.map((et) => this.h(ze, et))
								: [this.h(ze, Me)]
						);
					}
					async provideCallsTo(se, re, x) {
						const V = this.j(se, re);
						if (!V) throw new Error("missing call hierarchy item");
						const te = await this.g.provideCallHierarchyIncomingCalls(V, x);
						if (te)
							return te.map((Me) => ({
								from: this.h(se, Me.from),
								fromRanges: Me.fromRanges.map((ze) => a.Range.from(ze)),
							}));
					}
					async provideCallsFrom(se, re, x) {
						const V = this.j(se, re);
						if (!V) throw new Error("missing call hierarchy item");
						const te = await this.g.provideCallHierarchyOutgoingCalls(V, x);
						if (te)
							return te.map((Me) => ({
								to: this.h(se, Me.to),
								fromRanges: Me.fromRanges.map((ze) => a.Range.from(ze)),
							}));
					}
					releaseSession(se) {
						this.e.delete(se);
					}
					h(se, re) {
						const x = this.e.get(se),
							V = a.CallHierarchyItem.from(re, se, x.size.toString(36));
						return x.set(V._itemId, re), V;
					}
					j(se, re) {
						return this.e.get(se)?.get(re);
					}
				}
				class pe {
					constructor(se, re) {
						(this.f = se),
							(this.g = re),
							(this.d = new P.$Rdb("")),
							(this.e = new Map());
					}
					async prepareSession(se, re, x) {
						const V = this.f.getDocument(se),
							te = a.Position.to(re),
							Me = await this.g.prepareTypeHierarchy(V, te, x);
						if (!Me) return;
						const ze = this.d.nextId();
						return (
							this.e.set(ze, new Map()),
							Array.isArray(Me)
								? Me.map((et) => this.h(ze, et))
								: [this.h(ze, Me)]
						);
					}
					async provideSupertypes(se, re, x) {
						const V = this.j(se, re);
						if (!V) throw new Error("missing type hierarchy item");
						const te = await this.g.provideTypeHierarchySupertypes(V, x);
						if (te) return te.map((Me) => this.h(se, Me));
					}
					async provideSubtypes(se, re, x) {
						const V = this.j(se, re);
						if (!V) throw new Error("missing type hierarchy item");
						const te = await this.g.provideTypeHierarchySubtypes(V, x);
						if (te) return te.map((Me) => this.h(se, Me));
					}
					releaseSession(se) {
						this.e.delete(se);
					}
					h(se, re) {
						const x = this.e.get(se),
							V = a.TypeHierarchyItem.from(re, se, x.size.toString(36));
						return x.set(V._itemId, re), V;
					}
					j(se, re) {
						return this.e.get(se)?.get(re);
					}
				}
				class Re {
					constructor(se, re, x, V, te) {
						(this.e = se),
							(this.f = re),
							(this.g = x),
							(this.h = V),
							(this.j = te),
							(this.d = new f.$7gd("DocumentDropEdit"));
					}
					async provideDocumentOnDropEdits(se, re, x, V, te) {
						const Me = this.f.getDocument(re),
							ze = a.Position.to(x),
							et = a.DataTransfer.toDataTransfer(
								V,
								async (Et) =>
									(await this.e.$resolveDocumentOnDropFileData(this.h, se, Et))
										.buffer,
							),
							ot = await this.g.provideDocumentDropEdits(Me, ze, et, te);
						if (!ot) return;
						const gt = (0, e.$6b)(ot),
							St = this.d.add(gt);
						return gt.map((Et, pt) => ({
							_cacheId: [St, pt],
							title:
								Et.title ??
								(0, $.localize)(2711, null, this.j.displayName || this.j.name),
							kind: Et.kind?.value,
							yieldTo: Et.yieldTo?.map((dt) => dt.value),
							insertText:
								typeof Et.insertText == "string"
									? Et.insertText
									: { snippet: Et.insertText.value },
							additionalEdit: Et.additionalEdit
								? a.WorkspaceEdit.from(Et.additionalEdit, void 0)
								: void 0,
						}));
					}
					async resolveDropEdit(se, re) {
						const [x, V] = se,
							te = this.d.get(x, V);
						if (!te || !this.g.resolveDocumentDropEdit) return {};
						const Me = (await this.g.resolveDocumentDropEdit(te, re)) ?? te;
						return {
							additionalEdit: Me.additionalEdit
								? a.WorkspaceEdit.from(Me.additionalEdit, void 0)
								: void 0,
						};
					}
					releaseDropEdits(se) {
						this.d.delete(se);
					}
				}
				class lt {
					constructor(se, re) {
						(this.d = se), (this.e = re);
					}
					async provideMappedEdits(se, re, x, V) {
						const te = d.URI.revive(se),
							Me = this.d.getDocument(te),
							ze = x.documents.map((gt) =>
								gt.map((St) => ({
									uri: d.URI.revive(St.uri),
									version: St.version,
									ranges: St.ranges.map((Et) => a.Range.to(Et)),
								})),
							),
							et = { documents: ze, selections: ze[0]?.[0]?.ranges ?? [] },
							ot = await this.e.provideMappedEdits(Me, re, et, V);
						return ot ? a.WorkspaceEdit.from(ot) : null;
					}
				}
				class Ye {
					constructor(se, re) {
						(this.adapter = se), (this.extension = re);
					}
				}
				class Ze {
					static {
						this.d = 0;
					}
					constructor(se, re, x, V, te, Me, ze, et) {
						(this.g = re),
							(this.h = x),
							(this.j = V),
							(this.k = te),
							(this.l = Me),
							(this.m = ze),
							(this.n = et),
							(this.f = new Map()),
							(this.e = se.getProxy(o.$lbb.MainThreadLanguageFeatures));
					}
					o(se, re) {
						return a.DocumentSelector.from(se, this.g, re);
					}
					p(se) {
						return new u.$nbb(() => {
							this.f.delete(se), this.e.$unregister(se);
						});
					}
					q() {
						return Ze.d++;
					}
					async s(se, re, x, V, te, Me = !1) {
						const ze = this.f.get(se);
						if (!ze || !(ze.adapter instanceof re)) return V;
						const et = Date.now();
						Me ||
							this.l.trace(
								`[${ze.extension.identifier.value}] INVOKE provider '${x.toString().replace(/[\r\n]/g, "")}'`,
							);
						const ot = x(ze.adapter, ze.extension);
						return (
							Promise.resolve(ot)
								.catch((gt) => {
									(0, N.$8)(gt) ||
										(this.l.error(
											`[${ze.extension.identifier.value}] provider FAILED`,
										),
										this.l.error(gt),
										this.n.onExtensionError(ze.extension.identifier, gt));
								})
								.finally(() => {
									Me ||
										this.l.trace(
											`[${ze.extension.identifier.value}] provider DONE after ${Date.now() - et}ms`,
										);
								}),
							S.CancellationToken.isCancellationToken(te)
								? (0, r.$Bh)(ot, te)
								: ot
						);
					}
					t(se, re) {
						const x = this.q();
						return this.f.set(x, new Ye(se, re)), x;
					}
					static u(se) {
						return se.displayName || se.name;
					}
					static w(se) {
						return se.identifier.value;
					}
					registerDocumentSymbolProvider(se, re, x, V) {
						const te = this.t(new w(this.h, x), se),
							Me = (V && V.label) || Ze.u(se);
						return (
							this.e.$registerDocumentSymbolProvider(te, this.o(re, se), Me),
							this.p(te)
						);
					}
					$provideDocumentSymbols(se, re, x) {
						return this.s(
							se,
							w,
							(V) => V.provideDocumentSymbols(d.URI.revive(re), x),
							void 0,
							x,
						);
					}
					registerCodeLensProvider(se, re, x) {
						const V = this.q(),
							te =
								typeof x.onDidChangeCodeLenses == "function"
									? this.q()
									: void 0;
						this.f.set(
							V,
							new Ye(
								new m(this.h, this.j.converter, x, se, this.n, this.l),
								se,
							),
						),
							this.e.$registerCodeLensSupport(V, this.o(re, se), te);
						let Me = this.p(V);
						if (te !== void 0) {
							const ze = x.onDidChangeCodeLenses((et) =>
								this.e.$emitCodeLensEvent(te),
							);
							Me = u.$nbb.from(Me, ze);
						}
						return Me;
					}
					$provideCodeLenses(se, re, x) {
						return this.s(
							se,
							m,
							(V) => V.provideCodeLenses(d.URI.revive(re), x),
							void 0,
							x,
							re.scheme === "output",
						);
					}
					$resolveCodeLens(se, re, x) {
						return this.s(
							se,
							m,
							(V) => V.resolveCodeLens(re, x),
							void 0,
							void 0,
							!0,
						);
					}
					$releaseCodeLenses(se, re) {
						this.s(
							se,
							m,
							(x) => Promise.resolve(x.releaseCodeLenses(re)),
							void 0,
							void 0,
							!0,
						);
					}
					registerDefinitionProvider(se, re, x) {
						const V = this.t(new R(this.h, x), se);
						return (
							this.e.$registerDefinitionSupport(V, this.o(re, se)), this.p(V)
						);
					}
					$provideDefinition(se, re, x, V) {
						return this.s(
							se,
							R,
							(te) => te.provideDefinition(d.URI.revive(re), x, V),
							[],
							V,
						);
					}
					registerDeclarationProvider(se, re, x) {
						const V = this.t(new C(this.h, x), se);
						return (
							this.e.$registerDeclarationSupport(V, this.o(re, se)), this.p(V)
						);
					}
					$provideDeclaration(se, re, x, V) {
						return this.s(
							se,
							C,
							(te) => te.provideDeclaration(d.URI.revive(re), x, V),
							[],
							V,
						);
					}
					registerImplementationProvider(se, re, x) {
						const V = this.t(new O(this.h, x), se);
						return (
							this.e.$registerImplementationSupport(V, this.o(re, se)),
							this.p(V)
						);
					}
					$provideImplementation(se, re, x, V) {
						return this.s(
							se,
							O,
							(te) => te.provideImplementation(d.URI.revive(re), x, V),
							[],
							V,
						);
					}
					registerTypeDefinitionProvider(se, re, x) {
						const V = this.t(new A(this.h, x), se);
						return (
							this.e.$registerTypeDefinitionSupport(V, this.o(re, se)),
							this.p(V)
						);
					}
					$provideTypeDefinition(se, re, x, V) {
						return this.s(
							se,
							A,
							(te) => te.provideTypeDefinition(d.URI.revive(re), x, V),
							[],
							V,
						);
					}
					registerHoverProvider(se, re, x, V) {
						const te = this.t(new J(this.h, x), se);
						return (
							this.e.$registerHoverProvider(te, this.o(re, se)), this.p(te)
						);
					}
					$provideHover(se, re, x, V, te) {
						return this.s(
							se,
							J,
							(Me) => Me.provideHover(d.URI.revive(re), x, V, te),
							void 0,
							te,
						);
					}
					$releaseHover(se, re) {
						this.s(
							se,
							J,
							(x) => Promise.resolve(x.releaseHover(re)),
							void 0,
							void 0,
						);
					}
					registerEvaluatableExpressionProvider(se, re, x, V) {
						const te = this.t(new L(this.h, x), se);
						return (
							this.e.$registerEvaluatableExpressionProvider(te, this.o(re, se)),
							this.p(te)
						);
					}
					$provideEvaluatableExpression(se, re, x, V) {
						return this.s(
							se,
							L,
							(te) => te.provideEvaluatableExpression(d.URI.revive(re), x, V),
							void 0,
							V,
						);
					}
					registerInlineValuesProvider(se, re, x, V) {
						const te =
								typeof x.onDidChangeInlineValues == "function"
									? this.q()
									: void 0,
							Me = this.t(new b(this.h, x), se);
						this.e.$registerInlineValuesProvider(Me, this.o(re, se), te);
						let ze = this.p(Me);
						if (te !== void 0) {
							const et = x.onDidChangeInlineValues((ot) =>
								this.e.$emitInlineValuesEvent(te),
							);
							ze = u.$nbb.from(ze, et);
						}
						return ze;
					}
					$provideInlineValues(se, re, x, V, te) {
						return this.s(
							se,
							b,
							(Me) => Me.provideInlineValues(d.URI.revive(re), x, V, te),
							void 0,
							te,
						);
					}
					registerDocumentHighlightProvider(se, re, x) {
						const V = this.t(new F(this.h, x), se);
						return (
							this.e.$registerDocumentHighlightProvider(V, this.o(re, se)),
							this.p(V)
						);
					}
					registerMultiDocumentHighlightProvider(se, re, x) {
						const V = this.t(new D(this.h, x), se);
						return (
							this.e.$registerMultiDocumentHighlightProvider(V, this.o(re, se)),
							this.p(V)
						);
					}
					$provideDocumentHighlights(se, re, x, V) {
						return this.s(
							se,
							F,
							(te) => te.provideDocumentHighlights(d.URI.revive(re), x, V),
							void 0,
							V,
						);
					}
					$provideMultiDocumentHighlights(se, re, x, V, te) {
						return this.s(
							se,
							D,
							(Me) =>
								Me.provideMultiDocumentHighlights(
									d.URI.revive(re),
									x,
									V.map((ze) => d.URI.revive(ze)),
									te,
								),
							void 0,
							te,
						);
					}
					registerLinkedEditingRangeProvider(se, re, x) {
						const V = this.t(new M(this.h, x), se);
						return (
							this.e.$registerLinkedEditingRangeProvider(V, this.o(re, se)),
							this.p(V)
						);
					}
					$provideLinkedEditingRanges(se, re, x, V) {
						return this.s(
							se,
							M,
							async (te) => {
								const Me = await te.provideLinkedEditingRanges(
									d.URI.revive(re),
									x,
									V,
								);
								if (Me)
									return {
										ranges: Me.ranges,
										wordPattern: Me.wordPattern ? Ze.y(Me.wordPattern) : void 0,
									};
							},
							void 0,
							V,
						);
					}
					registerReferenceProvider(se, re, x) {
						const V = this.t(new z(this.h, x), se);
						return (
							this.e.$registerReferenceSupport(V, this.o(re, se)), this.p(V)
						);
					}
					$provideReferences(se, re, x, V, te) {
						return this.s(
							se,
							z,
							(Me) => Me.provideReferences(d.URI.revive(re), x, V, te),
							void 0,
							te,
						);
					}
					registerCodeActionProvider(se, re, x, V) {
						const te = new I.$Zc(),
							Me = this.t(
								new Q(this.h, this.j.converter, this.k, x, this.l, se, this.m),
								se,
							);
						return (
							this.e.$registerCodeActionSupport(
								Me,
								this.o(re, se),
								{
									providedKinds: V?.providedCodeActionKinds?.map(
										(ze) => ze.value,
									),
									documentation: V?.documentation?.map((ze) => ({
										kind: ze.kind.value,
										command: this.j.converter.toInternal(ze.command, te),
									})),
								},
								Ze.u(se),
								Ze.w(se),
								!!x.resolveCodeAction,
							),
							te.add(this.p(Me)),
							te
						);
					}
					$provideCodeActions(se, re, x, V, te) {
						return this.s(
							se,
							Q,
							(Me) => Me.provideCodeActions(d.URI.revive(re), x, V, te),
							void 0,
							te,
						);
					}
					$resolveCodeAction(se, re, x) {
						return this.s(se, Q, (V) => V.resolveCodeAction(re, x), {}, void 0);
					}
					$releaseCodeActions(se, re) {
						this.s(
							se,
							Q,
							(x) => Promise.resolve(x.releaseCodeActions(re)),
							void 0,
							void 0,
						);
					}
					registerDocumentFormattingEditProvider(se, re, x) {
						const V = this.t(new B(this.h, x), se);
						return (
							this.e.$registerDocumentFormattingSupport(
								V,
								this.o(re, se),
								se.identifier,
								se.displayName || se.name,
							),
							this.p(V)
						);
					}
					$provideDocumentFormattingEdits(se, re, x, V) {
						return this.s(
							se,
							B,
							(te) => te.provideDocumentFormattingEdits(d.URI.revive(re), x, V),
							void 0,
							V,
						);
					}
					registerDocumentRangeFormattingEditProvider(se, re, x) {
						const V =
								typeof x.provideDocumentRangesFormattingEdits == "function",
							te = this.t(new U(this.h, x), se);
						return (
							this.e.$registerRangeFormattingSupport(
								te,
								this.o(re, se),
								se.identifier,
								se.displayName || se.name,
								V,
							),
							this.p(te)
						);
					}
					$provideDocumentRangeFormattingEdits(se, re, x, V, te) {
						return this.s(
							se,
							U,
							(Me) =>
								Me.provideDocumentRangeFormattingEdits(
									d.URI.revive(re),
									x,
									V,
									te,
								),
							void 0,
							te,
						);
					}
					$provideDocumentRangesFormattingEdits(se, re, x, V, te) {
						return this.s(
							se,
							U,
							(Me) =>
								Me.provideDocumentRangesFormattingEdits(
									d.URI.revive(re),
									x,
									V,
									te,
								),
							void 0,
							te,
						);
					}
					registerOnTypeFormattingEditProvider(se, re, x, V) {
						const te = this.t(new Z(this.h, x), se);
						return (
							this.e.$registerOnTypeFormattingSupport(
								te,
								this.o(re, se),
								V,
								se.identifier,
							),
							this.p(te)
						);
					}
					$provideOnTypeFormattingEdits(se, re, x, V, te, Me) {
						return this.s(
							se,
							Z,
							(ze) =>
								ze.provideOnTypeFormattingEdits(d.URI.revive(re), x, V, te, Me),
							void 0,
							Me,
						);
					}
					registerWorkspaceSymbolProvider(se, re) {
						const x = this.t(new W(re, this.l), se);
						return (
							this.e.$registerNavigateTypeSupport(
								x,
								typeof re.resolveWorkspaceSymbol == "function",
							),
							this.p(x)
						);
					}
					$provideWorkspaceSymbols(se, re, x) {
						return this.s(
							se,
							W,
							(V) => V.provideWorkspaceSymbols(re, x),
							{ symbols: [] },
							x,
						);
					}
					$resolveWorkspaceSymbol(se, re, x) {
						return this.s(
							se,
							W,
							(V) => V.resolveWorkspaceSymbol(re, x),
							void 0,
							void 0,
						);
					}
					$releaseWorkspaceSymbols(se, re) {
						this.s(se, W, (x) => x.releaseWorkspaceSymbols(re), void 0, void 0);
					}
					registerRenameProvider(se, re, x) {
						const V = this.t(new G(this.h, x, this.l), se);
						return (
							this.e.$registerRenameSupport(
								V,
								this.o(re, se),
								G.supportsResolving(x),
							),
							this.p(V)
						);
					}
					$provideRenameEdits(se, re, x, V, te) {
						return this.s(
							se,
							G,
							(Me) => Me.provideRenameEdits(d.URI.revive(re), x, V, te),
							void 0,
							te,
						);
					}
					$resolveRenameLocation(se, re, x, V) {
						return this.s(
							se,
							G,
							(te) => te.resolveRenameLocation(d.URI.revive(re), x, V),
							void 0,
							V,
						);
					}
					registerNewSymbolNamesProvider(se, re, x) {
						const V = this.t(new fe(this.h, x, this.l), se);
						return (
							this.e.$registerNewSymbolNamesProvider(V, this.o(re, se)),
							this.p(V)
						);
					}
					$supportsAutomaticNewSymbolNamesTriggerKind(se) {
						return this.s(
							se,
							fe,
							(re) => re.supportsAutomaticNewSymbolNamesTriggerKind(),
							!1,
							void 0,
						);
					}
					$provideNewSymbolNames(se, re, x, V, te) {
						return this.s(
							se,
							fe,
							(Me) => Me.provideNewSymbolNames(d.URI.revive(re), x, V, te),
							void 0,
							te,
						);
					}
					registerDocumentSemanticTokensProvider(se, re, x, V) {
						const te = this.t(new Se(this.h, x), se),
							Me =
								typeof x.onDidChangeSemanticTokens == "function"
									? this.q()
									: void 0;
						this.e.$registerDocumentSemanticTokensProvider(
							te,
							this.o(re, se),
							V,
							Me,
						);
						let ze = this.p(te);
						if (Me) {
							const et = x.onDidChangeSemanticTokens((ot) =>
								this.e.$emitDocumentSemanticTokensEvent(Me),
							);
							ze = u.$nbb.from(ze, et);
						}
						return ze;
					}
					$provideDocumentSemanticTokens(se, re, x, V) {
						return this.s(
							se,
							Se,
							(te) => te.provideDocumentSemanticTokens(d.URI.revive(re), x, V),
							null,
							V,
						);
					}
					$releaseDocumentSemanticTokens(se, re) {
						this.s(
							se,
							Se,
							(x) => x.releaseDocumentSemanticColoring(re),
							void 0,
							void 0,
						);
					}
					registerDocumentRangeSemanticTokensProvider(se, re, x, V) {
						const te = this.t(new he(this.h, x), se);
						return (
							this.e.$registerDocumentRangeSemanticTokensProvider(
								te,
								this.o(re, se),
								V,
							),
							this.p(te)
						);
					}
					$provideDocumentRangeSemanticTokens(se, re, x, V) {
						return this.s(
							se,
							he,
							(te) =>
								te.provideDocumentRangeSemanticTokens(d.URI.revive(re), x, V),
							null,
							V,
						);
					}
					registerCompletionItemProvider(se, re, x, V) {
						const te = this.t(
							new _(this.h, this.j.converter, x, this.m, se),
							se,
						);
						return (
							this.e.$registerCompletionsProvider(
								te,
								this.o(re, se),
								V,
								_.supportsResolving(x),
								se.identifier,
							),
							this.p(te)
						);
					}
					$provideCompletionItems(se, re, x, V, te) {
						return this.s(
							se,
							_,
							(Me) => Me.provideCompletionItems(d.URI.revive(re), x, V, te),
							void 0,
							te,
						);
					}
					$resolveCompletionItem(se, re, x) {
						return this.s(
							se,
							_,
							(V) => V.resolveCompletionItem(re, x),
							void 0,
							x,
						);
					}
					$releaseCompletionItems(se, re) {
						this.s(se, _, (x) => x.releaseCompletionItems(re), void 0, void 0);
					}
					registerInlineCompletionsProvider(se, re, x, V) {
						const te = new ke(se, this.h, x, this.j.converter),
							Me = this.t(te, se);
						return (
							this.e.$registerInlineCompletionsSupport(
								Me,
								this.o(re, se),
								te.supportsHandleEvents,
								T.$Gn.toKey(se.identifier.value),
								V?.yieldTo?.map((ze) => T.$Gn.toKey(ze)) || [],
							),
							this.p(Me)
						);
					}
					$provideInlineCompletions(se, re, x, V, te) {
						return this.s(
							se,
							oe,
							(Me) => Me.provideInlineCompletions(d.URI.revive(re), x, V, te),
							void 0,
							te,
						);
					}
					$provideInlineEdits(se, re, x, V, te) {
						return this.s(
							se,
							oe,
							(Me) => Me.provideInlineEdits(d.URI.revive(re), x, V, te),
							void 0,
							te,
						);
					}
					$handleInlineCompletionDidShow(se, re, x, V) {
						this.s(
							se,
							oe,
							async (te) => {
								te.handleDidShowCompletionItem(re, x, V);
							},
							void 0,
							void 0,
						);
					}
					$handleInlineCompletionPartialAccept(se, re, x, V, te) {
						this.s(
							se,
							oe,
							async (Me) => {
								Me.handlePartialAccept(re, x, V, te);
							},
							void 0,
							void 0,
						);
					}
					$freeInlineCompletionsList(se, re) {
						this.s(
							se,
							oe,
							async (x) => {
								x.disposeCompletions(re);
							},
							void 0,
							void 0,
						);
					}
					registerInlineEditProvider(se, re, x) {
						const V = new ge(se, this.h, x, this.j.converter),
							te = this.t(V, se);
						return (
							this.e.$registerInlineEditProvider(
								te,
								this.o(re, se),
								se.identifier,
							),
							this.p(te)
						);
					}
					$provideInlineEdit(se, re, x, V) {
						return this.s(
							se,
							ge,
							(te) => te.provideInlineEdits(d.URI.revive(re), x, V),
							void 0,
							V,
						);
					}
					$freeInlineEdit(se, re) {
						this.s(
							se,
							ge,
							async (x) => {
								x.disposeEdit(re);
							},
							void 0,
							void 0,
						);
					}
					registerSignatureHelpProvider(se, re, x, V) {
						const te = Array.isArray(V)
								? { triggerCharacters: V, retriggerCharacters: [] }
								: V,
							Me = this.t(new me(this.h, x), se);
						return (
							this.e.$registerSignatureHelpProvider(Me, this.o(re, se), te),
							this.p(Me)
						);
					}
					$provideSignatureHelp(se, re, x, V, te) {
						return this.s(
							se,
							me,
							(Me) => Me.provideSignatureHelp(d.URI.revive(re), x, V, te),
							void 0,
							te,
						);
					}
					$releaseSignatureHelp(se, re) {
						this.s(se, me, (x) => x.releaseSignatureHelp(re), void 0, void 0);
					}
					registerInlayHintsProvider(se, re, x) {
						const V =
								typeof x.onDidChangeInlayHints == "function"
									? this.q()
									: void 0,
							te = this.t(new ne(this.h, this.j.converter, x, this.l, se), se);
						this.e.$registerInlayHintsProvider(
							te,
							this.o(re, se),
							typeof x.resolveInlayHint == "function",
							V,
							Ze.u(se),
						);
						let Me = this.p(te);
						if (V !== void 0) {
							const ze = x.onDidChangeInlayHints((et) =>
								this.e.$emitInlayHintsEvent(V),
							);
							Me = u.$nbb.from(Me, ze);
						}
						return Me;
					}
					$provideInlayHints(se, re, x, V) {
						return this.s(
							se,
							ne,
							(te) => te.provideInlayHints(d.URI.revive(re), x, V),
							void 0,
							V,
						);
					}
					$resolveInlayHint(se, re, x) {
						return this.s(se, ne, (V) => V.resolveInlayHint(re, x), void 0, x);
					}
					$releaseInlayHints(se, re) {
						this.s(se, ne, (x) => x.releaseHints(re), void 0, void 0);
					}
					registerDocumentLinkProvider(se, re, x) {
						const V = this.t(new de(this.h, x), se);
						return (
							this.e.$registerDocumentLinkProvider(
								V,
								this.o(re, se),
								typeof x.resolveDocumentLink == "function",
							),
							this.p(V)
						);
					}
					$provideDocumentLinks(se, re, x) {
						return this.s(
							se,
							de,
							(V) => V.provideLinks(d.URI.revive(re), x),
							void 0,
							x,
							re.scheme === "output",
						);
					}
					$resolveDocumentLink(se, re, x) {
						return this.s(
							se,
							de,
							(V) => V.resolveLink(re, x),
							void 0,
							void 0,
							!0,
						);
					}
					$releaseDocumentLinks(se, re) {
						this.s(se, de, (x) => x.releaseLinks(re), void 0, void 0, !0);
					}
					registerColorProvider(se, re, x) {
						const V = this.t(new Le(this.h, x), se);
						return (
							this.e.$registerDocumentColorProvider(V, this.o(re, se)),
							this.p(V)
						);
					}
					$provideDocumentColors(se, re, x) {
						return this.s(
							se,
							Le,
							(V) => V.provideColors(d.URI.revive(re), x),
							[],
							x,
						);
					}
					$provideColorPresentations(se, re, x, V) {
						return this.s(
							se,
							Le,
							(te) => te.provideColorPresentations(d.URI.revive(re), x, V),
							void 0,
							V,
						);
					}
					registerFoldingRangeProvider(se, re, x) {
						const V = this.q(),
							te =
								typeof x.onDidChangeFoldingRanges == "function"
									? this.q()
									: void 0;
						this.f.set(V, new Ye(new Ce(this.h, x), se)),
							this.e.$registerFoldingRangeProvider(
								V,
								this.o(re, se),
								se.identifier,
								te,
							);
						let Me = this.p(V);
						if (te !== void 0) {
							const ze = x.onDidChangeFoldingRanges(() =>
								this.e.$emitFoldingRangeEvent(te),
							);
							Me = u.$nbb.from(Me, ze);
						}
						return Me;
					}
					$provideFoldingRanges(se, re, x, V) {
						return this.s(
							se,
							Ce,
							(te) => te.provideFoldingRanges(d.URI.revive(re), x, V),
							void 0,
							V,
						);
					}
					registerSelectionRangeProvider(se, re, x) {
						const V = this.t(new je(this.h, x, this.l), se);
						return (
							this.e.$registerSelectionRangeProvider(V, this.o(re, se)),
							this.p(V)
						);
					}
					$provideSelectionRanges(se, re, x, V) {
						return this.s(
							se,
							je,
							(te) => te.provideSelectionRanges(d.URI.revive(re), x, V),
							[],
							V,
						);
					}
					registerCallHierarchyProvider(se, re, x) {
						const V = this.t(new We(this.h, x), se);
						return (
							this.e.$registerCallHierarchyProvider(V, this.o(re, se)),
							this.p(V)
						);
					}
					$prepareCallHierarchy(se, re, x, V) {
						return this.s(
							se,
							We,
							(te) =>
								Promise.resolve(te.prepareSession(d.URI.revive(re), x, V)),
							void 0,
							V,
						);
					}
					$provideCallHierarchyIncomingCalls(se, re, x, V) {
						return this.s(
							se,
							We,
							(te) => te.provideCallsTo(re, x, V),
							void 0,
							V,
						);
					}
					$provideCallHierarchyOutgoingCalls(se, re, x, V) {
						return this.s(
							se,
							We,
							(te) => te.provideCallsFrom(re, x, V),
							void 0,
							V,
						);
					}
					$releaseCallHierarchy(se, re) {
						this.s(
							se,
							We,
							(x) => Promise.resolve(x.releaseSession(re)),
							void 0,
							void 0,
						);
					}
					registerTypeHierarchyProvider(se, re, x) {
						const V = this.t(new pe(this.h, x), se);
						return (
							this.e.$registerTypeHierarchyProvider(V, this.o(re, se)),
							this.p(V)
						);
					}
					$prepareTypeHierarchy(se, re, x, V) {
						return this.s(
							se,
							pe,
							(te) =>
								Promise.resolve(te.prepareSession(d.URI.revive(re), x, V)),
							void 0,
							V,
						);
					}
					$provideTypeHierarchySupertypes(se, re, x, V) {
						return this.s(
							se,
							pe,
							(te) => te.provideSupertypes(re, x, V),
							void 0,
							V,
						);
					}
					$provideTypeHierarchySubtypes(se, re, x, V) {
						return this.s(
							se,
							pe,
							(te) => te.provideSubtypes(re, x, V),
							void 0,
							V,
						);
					}
					$releaseTypeHierarchy(se, re) {
						this.s(
							se,
							pe,
							(x) => Promise.resolve(x.releaseSession(re)),
							void 0,
							void 0,
						);
					}
					registerDocumentOnDropEditProvider(se, re, x, V) {
						const te = this.q();
						return (
							this.f.set(te, new Ye(new Re(this.e, this.h, x, te, se), se)),
							this.e.$registerDocumentOnDropEditProvider(
								te,
								this.o(re, se),
								(0, s.$t2)(se, "documentPaste") && V
									? {
											supportsResolve: !!x.resolveDocumentDropEdit,
											dropMimeTypes: V.dropMimeTypes,
										}
									: void 0,
							),
							this.p(te)
						);
					}
					$provideDocumentOnDropEdits(se, re, x, V, te, Me) {
						return this.s(
							se,
							Re,
							(ze) =>
								Promise.resolve(
									ze.provideDocumentOnDropEdits(re, d.URI.revive(x), V, te, Me),
								),
							void 0,
							void 0,
						);
					}
					$resolveDropEdit(se, re, x) {
						return this.s(se, Re, (V) => V.resolveDropEdit(re, x), {}, void 0);
					}
					$releaseDocumentOnDropEdits(se, re) {
						this.s(
							se,
							Re,
							(x) => Promise.resolve(x.releaseDropEdits(re)),
							void 0,
							void 0,
						);
					}
					registerMappedEditsProvider(se, re, x) {
						const V = this.t(new lt(this.h, x), se);
						return (
							this.e.$registerMappedEditsProvider(
								V,
								this.o(re, se),
								se.displayName ?? se.name,
							),
							this.p(V)
						);
					}
					$provideMappedEdits(se, re, x, V, te) {
						return this.s(
							se,
							lt,
							(Me) => Promise.resolve(Me.provideMappedEdits(re, x, V, te)),
							null,
							te,
						);
					}
					registerDocumentPasteEditProvider(se, re, x, V) {
						const te = this.q();
						return (
							this.f.set(te, new Ye(new H(this.e, this.h, x, te, se), se)),
							this.e.$registerPasteEditProvider(te, this.o(re, se), {
								supportsCopy: !!x.prepareDocumentPaste,
								supportsPaste: !!x.provideDocumentPasteEdits,
								supportsResolve: !!x.resolveDocumentPasteEdit,
								providedPasteEditKinds: V.providedPasteEditKinds?.map(
									(Me) => Me.value,
								),
								copyMimeTypes: V.copyMimeTypes,
								pasteMimeTypes: V.pasteMimeTypes,
							}),
							this.p(te)
						);
					}
					$prepareDocumentPaste(se, re, x, V, te) {
						return this.s(
							se,
							H,
							(Me) => Me.prepareDocumentPaste(d.URI.revive(re), x, V, te),
							void 0,
							te,
						);
					}
					$providePasteEdits(se, re, x, V, te, Me, ze) {
						return this.s(
							se,
							H,
							(et) => et.providePasteEdits(re, d.URI.revive(x), V, te, Me, ze),
							void 0,
							ze,
						);
					}
					$resolvePasteEdit(se, re, x) {
						return this.s(se, H, (V) => V.resolvePasteEdit(re, x), {}, void 0);
					}
					$releasePasteEdits(se, re) {
						this.s(
							se,
							H,
							(x) => Promise.resolve(x.releasePasteEdits(re)),
							void 0,
							void 0,
						);
					}
					static y(se) {
						return { pattern: se.source, flags: se.flags };
					}
					static z(se) {
						return {
							decreaseIndentPattern: Ze.y(se.decreaseIndentPattern),
							increaseIndentPattern: Ze.y(se.increaseIndentPattern),
							indentNextLinePattern: se.indentNextLinePattern
								? Ze.y(se.indentNextLinePattern)
								: void 0,
							unIndentedLinePattern: se.unIndentedLinePattern
								? Ze.y(se.unIndentedLinePattern)
								: void 0,
						};
					}
					static B(se) {
						return {
							beforeText: Ze.y(se.beforeText),
							afterText: se.afterText ? Ze.y(se.afterText) : void 0,
							previousLineText: se.previousLineText
								? Ze.y(se.previousLineText)
								: void 0,
							action: se.action,
						};
					}
					static C(se) {
						return se.map(Ze.B);
					}
					static D(se) {
						return {
							open: se.open,
							close: se.close,
							notIn: se.notIn
								? se.notIn.map((re) => u.SyntaxTokenType.toString(re))
								: void 0,
						};
					}
					static E(se) {
						return se.map(Ze.D);
					}
					setLanguageConfiguration(se, re, x) {
						const { wordPattern: V } = x;
						if (V && (0, p.$yf)(V))
							throw new Error(
								`Invalid language configuration: wordPattern '${V}' is not allowed to match the empty string.`,
							);
						V
							? this.h.setWordDefinitionFor(re, V)
							: this.h.setWordDefinitionFor(re, void 0),
							x.__electricCharacterSupport &&
								this.m.report(
									"LanguageConfiguration.__electricCharacterSupport",
									se,
									"Do not use.",
								),
							x.__characterPairSupport &&
								this.m.report(
									"LanguageConfiguration.__characterPairSupport",
									se,
									"Do not use.",
								);
						const te = this.q(),
							Me = {
								comments: x.comments,
								brackets: x.brackets,
								wordPattern: x.wordPattern ? Ze.y(x.wordPattern) : void 0,
								indentationRules: x.indentationRules
									? Ze.z(x.indentationRules)
									: void 0,
								onEnterRules: x.onEnterRules ? Ze.C(x.onEnterRules) : void 0,
								__electricCharacterSupport: x.__electricCharacterSupport,
								__characterPairSupport: x.__characterPairSupport,
								autoClosingPairs: x.autoClosingPairs
									? Ze.E(x.autoClosingPairs)
									: void 0,
							};
						return this.e.$setLanguageConfiguration(te, re, Me), this.p(te);
					}
					$setWordDefinitions(se) {
						for (const re of se)
							this.h.setWordDefinitionFor(
								re.languageId,
								new RegExp(re.regexSource, re.regexFlags),
							);
					}
				}
				t.$chd = Ze;
			},
		),
		