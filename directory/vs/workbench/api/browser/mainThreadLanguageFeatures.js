import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/dataTransfer.js';
import '../../../base/common/errors.js';
import '../../../base/common/event.js';
import '../../../base/common/hierarchicalKind.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/map.js';
import '../../../base/common/marshalling.js';
import '../../../base/common/objects.js';
import '../../../base/common/uri.js';
import '../../../editor/common/languages.js';
import '../../../editor/common/languages/language.js';
import '../../../editor/common/languages/languageConfigurationRegistry.js';
import '../../../editor/common/services/languageFeatures.js';
import '../../../editor/common/services/semanticTokensDto.js';
import '../../../platform/uriIdentity/common/uriIdentity.js';
import './mainThreadBulkEdits.js';
import '../common/extHostTypeConverters.js';
import '../common/shared/dataTransferCache.js';
import '../../contrib/callHierarchy/common/callHierarchy.js';
import '../../contrib/search/common/search.js';
import '../../contrib/typeHierarchy/common/typeHierarchy.js';
import '../../services/extensions/common/extHostCustomers.js';
import '../common/extHost.protocol.js';
define(
			de[3484],
			he([
				1, 0, 489, 29, 6, 318, 3, 59, 197, 82, 9, 74, 61, 152, 69, 1591, 68,
				1303, 1836, 1697, 978, 568, 1003, 101, 88,
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
			) {
				"use strict";
				var S;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$8nc = e.$7nc = e.$6nc = e.$5nc = void 0),
					(a = mt(a)),
					(f = mt(f)),
					(s = mt(s)),
					(l = mt(l)),
					(y = mt(y));
				let I = (S = class extends C.$1c {
					constructor(N, A, R, O, B) {
						if (
							(super(),
							(this.c = A),
							(this.f = R),
							(this.g = O),
							(this.h = B),
							(this.b = this.D(new C.$0c())),
							(this.u = new Map()),
							(this.G = new Map()),
							(this.a = N.getProxy(v.$mbb.ExtHostLanguageFeatures)),
							this.c)
						) {
							const U = () => {
								const z = [];
								for (const F of A.getRegisteredLanguageIds()) {
									const x = this.f
										.getLanguageConfiguration(F)
										.getWordDefinition();
									z.push({
										languageId: F,
										regexSource: x.source,
										regexFlags: x.flags,
									});
								}
								this.a.$setWordDefinitions(z);
							};
							this.D(
								this.f.onDidChange((z) => {
									if (!z.languageId) U();
									else {
										const F = this.f
											.getLanguageConfiguration(z.languageId)
											.getWordDefinition();
										this.a.$setWordDefinitions([
											{
												languageId: z.languageId,
												regexSource: F.source,
												regexFlags: F.flags,
											},
										]);
									}
								}),
							),
								U();
						}
					}
					$unregister(N) {
						this.b.deleteAndDispose(N);
					}
					static j(N) {
						return (
							N &&
							(Array.isArray(N)
								? (N.forEach((A) => S.j(A)), N)
								: ((N.uri = u.URI.revive(N.uri)), N))
						);
					}
					static m(N) {
						return (
							N &&
							(Array.isArray(N)
								? (N.forEach((A) => S.m(A)), N)
								: ((N.uri = u.URI.revive(N.uri)), N))
						);
					}
					static n(N) {
						return (
							N &&
							(Array.isArray(N)
								? (N.forEach(S.n), N)
								: ((N.location = S.j(N.location)), N))
						);
					}
					static q(N, A) {
						return N?.forEach((R) => (0, o.$xmc)(R.edit, A)), N;
					}
					static r(N) {
						return (
							N.url &&
								typeof N.url != "string" &&
								(N.url = u.URI.revive(N.url)),
							N
						);
					}
					static s(N) {
						return N && (N.uri = u.URI.revive(N.uri)), N;
					}
					static t(N) {
						return N && (N.uri = u.URI.revive(N.uri)), N;
					}
					$registerDocumentSymbolProvider(N, A, R) {
						this.b.set(
							N,
							this.g.documentSymbolProvider.register(A, {
								displayName: R,
								provideDocumentSymbols: (O, B) =>
									this.a.$provideDocumentSymbols(N, O.uri, B),
							}),
						);
					}
					$registerCodeLensSupport(N, A, R) {
						const O = {
							provideCodeLenses: async (B, U) => {
								const z = await this.a.$provideCodeLenses(N, B.uri, U);
								if (z)
									return {
										lenses: z.lenses,
										dispose: () =>
											z.cacheId && this.a.$releaseCodeLenses(N, z.cacheId),
									};
							},
							resolveCodeLens: async (B, U, z) => {
								const F = await this.a.$resolveCodeLens(N, U, z);
								if (F) return { ...F, range: B.validateRange(F.range) };
							},
						};
						if (typeof R == "number") {
							const B = new w.$re();
							this.b.set(R, B), (O.onDidChange = B.event);
						}
						this.b.set(N, this.g.codeLensProvider.register(A, O));
					}
					$emitCodeLensEvent(N, A) {
						const R = this.b.get(N);
						R instanceof w.$re && R.fire(A);
					}
					$registerDefinitionSupport(N, A) {
						this.b.set(
							N,
							this.g.definitionProvider.register(A, {
								provideDefinition: (R, O, B) =>
									this.a.$provideDefinition(N, R.uri, O, B).then(S.m),
							}),
						);
					}
					$registerDeclarationSupport(N, A) {
						this.b.set(
							N,
							this.g.declarationProvider.register(A, {
								provideDeclaration: (R, O, B) =>
									this.a.$provideDeclaration(N, R.uri, O, B).then(S.m),
							}),
						);
					}
					$registerImplementationSupport(N, A) {
						this.b.set(
							N,
							this.g.implementationProvider.register(A, {
								provideImplementation: (R, O, B) =>
									this.a.$provideImplementation(N, R.uri, O, B).then(S.m),
							}),
						);
					}
					$registerTypeDefinitionSupport(N, A) {
						this.b.set(
							N,
							this.g.typeDefinitionProvider.register(A, {
								provideTypeDefinition: (R, O, B) =>
									this.a.$provideTypeDefinition(N, R.uri, O, B).then(S.m),
							}),
						);
					}
					$registerHoverProvider(N, A) {
						this.b.set(
							N,
							this.g.hoverProvider.register(A, {
								provideHover: async (R, O, B, U) => {
									const z = {
										verbosityRequest: U?.verbosityRequest
											? {
													verbosityDelta: U.verbosityRequest.verbosityDelta,
													previousHover: {
														id: U.verbosityRequest.previousHover.id,
													},
												}
											: void 0,
									};
									return await this.a.$provideHover(N, R.uri, O, z, B);
								},
							}),
						);
					}
					$registerEvaluatableExpressionProvider(N, A) {
						this.b.set(
							N,
							this.g.evaluatableExpressionProvider.register(A, {
								provideEvaluatableExpression: (R, O, B) =>
									this.a.$provideEvaluatableExpression(N, R.uri, O, B),
							}),
						);
					}
					$registerInlineValuesProvider(N, A, R) {
						const O = {
							provideInlineValues: (B, U, z, F) =>
								this.a.$provideInlineValues(N, B.uri, U, z, F),
						};
						if (typeof R == "number") {
							const B = new w.$re();
							this.b.set(R, B), (O.onDidChangeInlineValues = B.event);
						}
						this.b.set(N, this.g.inlineValuesProvider.register(A, O));
					}
					$emitInlineValuesEvent(N, A) {
						const R = this.b.get(N);
						R instanceof w.$re && R.fire(A);
					}
					$registerDocumentHighlightProvider(N, A) {
						this.b.set(
							N,
							this.g.documentHighlightProvider.register(A, {
								provideDocumentHighlights: (R, O, B) =>
									this.a.$provideDocumentHighlights(N, R.uri, O, B),
							}),
						);
					}
					$registerMultiDocumentHighlightProvider(N, A) {
						this.b.set(
							N,
							this.g.multiDocumentHighlightProvider.register(A, {
								selector: A,
								provideMultiDocumentHighlights: (R, O, B, U) =>
									this.a
										.$provideMultiDocumentHighlights(
											N,
											R.uri,
											O,
											B.map((z) => z.uri),
											U,
										)
										.then((z) => {
											if (z == null) return;
											const F = new d.$Gc();
											return (
												z?.forEach((x) => {
													const H = u.URI.revive(x.uri);
													F.has(H)
														? F.get(H).push(...x.highlights)
														: F.set(H, x.highlights);
												}),
												F
											);
										}),
							}),
						);
					}
					$registerLinkedEditingRangeProvider(N, A) {
						this.b.set(
							N,
							this.g.linkedEditingRangeProvider.register(A, {
								provideLinkedEditingRanges: async (R, O, B) => {
									const U = await this.a.$provideLinkedEditingRanges(
										N,
										R.uri,
										O,
										B,
									);
									if (U)
										return {
											ranges: U.ranges,
											wordPattern: U.wordPattern ? S.y(U.wordPattern) : void 0,
										};
								},
							}),
						);
					}
					$registerReferenceSupport(N, A) {
						this.b.set(
							N,
							this.g.referenceProvider.register(A, {
								provideReferences: (R, O, B, U) =>
									this.a.$provideReferences(N, R.uri, O, B, U).then(S.j),
							}),
						);
					}
					$registerCodeActionSupport(N, A, R, O, B, U) {
						const z = {
							provideCodeActions: async (F, x, H, q) => {
								const V = await this.a.$provideCodeActions(N, F.uri, x, H, q);
								if (V)
									return {
										actions: S.q(V.actions, this.h),
										dispose: () => {
											typeof V.cacheId == "number" &&
												this.a.$releaseCodeActions(N, V.cacheId);
										},
									};
							},
							providedCodeActionKinds: R.providedKinds,
							documentation: R.documentation,
							displayName: O,
							extensionId: B,
						};
						U &&
							(z.resolveCodeAction = async (F, x) => {
								const H = await this.a.$resolveCodeAction(N, F.cacheId, x);
								return (
									H.edit && (F.edit = (0, o.$xmc)(H.edit, this.h)),
									H.command && (F.command = H.command),
									F
								);
							}),
							this.b.set(N, this.g.codeActionProvider.register(A, z));
					}
					$registerPasteEditProvider(N, A, R) {
						const O = new T(N, this.a, R, this.h);
						this.u.set(N, O),
							this.b.set(
								N,
								(0, C.$Xc)(
									this.g.documentPasteEditProvider.register(A, O),
									(0, C.$Yc)(() => this.u.delete(N)),
								),
							);
					}
					$resolvePasteFileData(N, A, R) {
						const O = this.u.get(N);
						if (!O) throw new Error("Could not find provider");
						return O.resolveFileData(A, R);
					}
					$registerDocumentFormattingSupport(N, A, R, O) {
						this.b.set(
							N,
							this.g.documentFormattingEditProvider.register(A, {
								extensionId: R,
								displayName: O,
								provideDocumentFormattingEdits: (B, U, z) =>
									this.a.$provideDocumentFormattingEdits(N, B.uri, U, z),
							}),
						);
					}
					$registerRangeFormattingSupport(N, A, R, O, B) {
						this.b.set(
							N,
							this.g.documentRangeFormattingEditProvider.register(A, {
								extensionId: R,
								displayName: O,
								provideDocumentRangeFormattingEdits: (U, z, F, x) =>
									this.a.$provideDocumentRangeFormattingEdits(
										N,
										U.uri,
										z,
										F,
										x,
									),
								provideDocumentRangesFormattingEdits: B
									? (U, z, F, x) =>
											this.a.$provideDocumentRangesFormattingEdits(
												N,
												U.uri,
												z,
												F,
												x,
											)
									: void 0,
							}),
						);
					}
					$registerOnTypeFormattingSupport(N, A, R, O) {
						this.b.set(
							N,
							this.g.onTypeFormattingEditProvider.register(A, {
								extensionId: O,
								autoFormatTriggerCharacters: R,
								provideOnTypeFormattingEdits: (B, U, z, F, x) =>
									this.a.$provideOnTypeFormattingEdits(N, B.uri, U, z, F, x),
							}),
						);
					}
					$registerNavigateTypeSupport(N, A) {
						let R;
						const O = {
							provideWorkspaceSymbols: async (B, U) => {
								const z = await this.a.$provideWorkspaceSymbols(N, B, U);
								return (
									R !== void 0 && this.a.$releaseWorkspaceSymbols(N, R),
									(R = z.cacheId),
									S.n(z.symbols)
								);
							},
						};
						A &&
							(O.resolveWorkspaceSymbol = async (B, U) => {
								const z = await this.a.$resolveWorkspaceSymbol(N, B, U);
								return z && S.n(z);
							}),
							this.b.set(N, l.WorkspaceSymbolProviderRegistry.register(O));
					}
					$registerRenameSupport(N, A, R) {
						this.b.set(
							N,
							this.g.renameProvider.register(A, {
								provideRenameEdits: (O, B, U, z) =>
									this.a
										.$provideRenameEdits(N, O.uri, B, U, z)
										.then((F) => (0, o.$xmc)(F, this.h)),
								resolveRenameLocation: R
									? (O, B, U) => this.a.$resolveRenameLocation(N, O.uri, B, U)
									: void 0,
							}),
						);
					}
					$registerNewSymbolNamesProvider(N, A) {
						this.b.set(
							N,
							this.g.newSymbolNamesProvider.register(A, {
								supportsAutomaticNewSymbolNamesTriggerKind:
									this.a.$supportsAutomaticNewSymbolNamesTriggerKind(N),
								provideNewSymbolNames: (R, O, B, U) =>
									this.a.$provideNewSymbolNames(N, R.uri, O, B, U),
							}),
						);
					}
					$registerDocumentSemanticTokensProvider(N, A, R, O) {
						let B;
						if (typeof O == "number") {
							const U = new w.$re();
							this.b.set(O, U), (B = U.event);
						}
						this.b.set(
							N,
							this.g.documentSemanticTokensProvider.register(
								A,
								new k(this.a, N, R, B),
							),
						);
					}
					$emitDocumentSemanticTokensEvent(N) {
						const A = this.b.get(N);
						A instanceof w.$re && A.fire(void 0);
					}
					$registerDocumentRangeSemanticTokensProvider(N, A, R) {
						this.b.set(
							N,
							this.g.documentRangeSemanticTokensProvider.register(
								A,
								new L(this.a, N, R),
							),
						);
					}
					static w(N, A, R) {
						const O = A[v.ISuggestDataDtoField.label],
							B = A[v.ISuggestDataDtoField.commandId],
							U = A[v.ISuggestDataDtoField.commandIdent],
							z = A[v.ISuggestDataDtoField.commitCharacters];
						return {
							label: O,
							extensionId: R,
							kind:
								A[v.ISuggestDataDtoField.kind] ?? a.CompletionItemKind.Property,
							tags: A[v.ISuggestDataDtoField.kindModifier],
							detail: A[v.ISuggestDataDtoField.detail],
							documentation: A[v.ISuggestDataDtoField.documentation],
							sortText: A[v.ISuggestDataDtoField.sortText],
							filterText: A[v.ISuggestDataDtoField.filterText],
							preselect: A[v.ISuggestDataDtoField.preselect],
							insertText:
								A[v.ISuggestDataDtoField.insertText] ??
								(typeof O == "string" ? O : O.label),
							range: A[v.ISuggestDataDtoField.range] ?? N,
							insertTextRules: A[v.ISuggestDataDtoField.insertTextRules],
							commitCharacters: z ? Array.from(z) : void 0,
							additionalTextEdits:
								A[v.ISuggestDataDtoField.additionalTextEdits],
							command: B
								? {
										$ident: U,
										id: B,
										title: "",
										arguments: U
											? [U]
											: A[v.ISuggestDataDtoField.commandArguments],
									}
								: void 0,
							_id: A.x,
						};
					}
					$registerCompletionsProvider(N, A, R, O, B) {
						const U = {
							triggerCharacters: R,
							_debugDisplayName: `${B.value}(${R.join("")})`,
							provideCompletionItems: async (z, F, x, H) => {
								const q = await this.a.$provideCompletionItems(
									N,
									z.uri,
									F,
									x,
									H,
								);
								return (
									q && {
										suggestions: q[v.ISuggestResultDtoField.completions].map(
											(V) =>
												S.w(q[v.ISuggestResultDtoField.defaultRanges], V, B),
										),
										incomplete: q[v.ISuggestResultDtoField.isIncomplete] || !1,
										duration: q[v.ISuggestResultDtoField.duration],
										dispose: () => {
											typeof q.x == "number" &&
												this.a.$releaseCompletionItems(N, q.x);
										},
									}
								);
							},
						};
						O &&
							(U.resolveCompletionItem = (z, F) =>
								this.a.$resolveCompletionItem(N, z._id, F).then((x) => {
									if (!x) return z;
									const H = S.w(z.range, x, B);
									return (0, r.$yo)(z, H, !0);
								})),
							this.b.set(N, this.g.completionProvider.register(A, U));
					}
					$registerInlineCompletionsSupport(N, A, R, O, B) {
						const U = {
							provideInlineCompletions: async (z, F, x, H) =>
								this.a.$provideInlineCompletions(N, z.uri, F, x, H),
							provideInlineEdits: async (z, F, x, H) =>
								this.a.$provideInlineEdits(N, z.uri, F, x, H),
							handleItemDidShow: async (z, F, x) => {
								R &&
									(await this.a.$handleInlineCompletionDidShow(
										N,
										z.pid,
										F.idx,
										x,
									));
							},
							handlePartialAccept: async (z, F, x, H) => {
								R &&
									(await this.a.$handleInlineCompletionPartialAccept(
										N,
										z.pid,
										F.idx,
										x,
										H,
									));
							},
							freeInlineCompletions: (z) => {
								this.a.$freeInlineCompletionsList(N, z.pid);
							},
							groupId: O,
							yieldsToGroupIds: B,
							toString() {
								return `InlineCompletionsProvider(${O})`;
							},
						};
						this.b.set(N, this.g.inlineCompletionsProvider.register(A, U));
					}
					$registerInlineEditProvider(N, A, R) {
						const O = {
							provideInlineEdit: async (B, U, z) =>
								this.a.$provideInlineEdit(N, B.uri, U, z),
							freeInlineEdit: (B) => {
								this.a.$freeInlineEdit(N, B.pid);
							},
						};
						this.b.set(N, this.g.inlineEditProvider.register(A, O));
					}
					$registerSignatureHelpProvider(N, A, R) {
						this.b.set(
							N,
							this.g.signatureHelpProvider.register(A, {
								signatureHelpTriggerCharacters: R.triggerCharacters,
								signatureHelpRetriggerCharacters: R.retriggerCharacters,
								provideSignatureHelp: async (O, B, U, z) => {
									const F = await this.a.$provideSignatureHelp(
										N,
										O.uri,
										B,
										z,
										U,
									);
									if (F)
										return {
											value: F,
											dispose: () => {
												this.a.$releaseSignatureHelp(N, F.id);
											},
										};
								},
							}),
						);
					}
					$registerInlayHintsProvider(N, A, R, O, B) {
						const U = {
							displayName: B,
							provideInlayHints: async (z, F, x) => {
								const H = await this.a.$provideInlayHints(N, z.uri, F, x);
								if (H)
									return {
										hints: (0, m.$ji)(H.hints),
										dispose: () => {
											H.cacheId && this.a.$releaseInlayHints(N, H.cacheId);
										},
									};
							},
						};
						if (
							(R &&
								(U.resolveInlayHint = async (z, F) => {
									const x = z;
									if (!x.cacheId) return z;
									const H = await this.a.$resolveInlayHint(N, x.cacheId, F);
									if (F.isCancellationRequested) throw new i.$9();
									return H
										? {
												...z,
												tooltip: H.tooltip,
												label: (0, m.$ji)(H.label),
												textEdits: H.textEdits,
											}
										: z;
								}),
							typeof O == "number")
						) {
							const z = new w.$re();
							this.b.set(O, z), (U.onDidChangeInlayHints = z.event);
						}
						this.b.set(N, this.g.inlayHintsProvider.register(A, U));
					}
					$emitInlayHintsEvent(N) {
						const A = this.b.get(N);
						A instanceof w.$re && A.fire(void 0);
					}
					$registerDocumentLinkProvider(N, A, R) {
						const O = {
							provideLinks: (B, U) =>
								this.a.$provideDocumentLinks(N, B.uri, U).then((z) => {
									if (z)
										return {
											links: z.links.map(S.r),
											dispose: () => {
												typeof z.cacheId == "number" &&
													this.a.$releaseDocumentLinks(N, z.cacheId);
											},
										};
								}),
						};
						R &&
							(O.resolveLink = (B, U) => {
								const z = B;
								return z.cacheId
									? this.a
											.$resolveDocumentLink(N, z.cacheId, U)
											.then((F) => F && S.r(F))
									: B;
							}),
							this.b.set(N, this.g.linkProvider.register(A, O));
					}
					$registerDocumentColorProvider(N, A) {
						const R = this.a;
						this.b.set(
							N,
							this.g.colorProvider.register(A, {
								provideDocumentColors: (O, B) =>
									R.$provideDocumentColors(N, O.uri, B).then((U) =>
										U.map((z) => {
											const [F, x, H, q] = z.color;
											return {
												color: { red: F, green: x, blue: H, alpha: q },
												range: z.range,
											};
										}),
									),
								provideColorPresentations: (O, B, U) =>
									R.$provideColorPresentations(
										N,
										O.uri,
										{
											color: [
												B.color.red,
												B.color.green,
												B.color.blue,
												B.color.alpha,
											],
											range: B.range,
										},
										U,
									),
							}),
						);
					}
					$registerFoldingRangeProvider(N, A, R, O) {
						const B = {
							id: R.value,
							provideFoldingRanges: (U, z, F) =>
								this.a.$provideFoldingRanges(N, U.uri, z, F),
						};
						if (typeof O == "number") {
							const U = new w.$re();
							this.b.set(O, U), (B.onDidChange = U.event);
						}
						this.b.set(N, this.g.foldingRangeProvider.register(A, B));
					}
					$emitFoldingRangeEvent(N, A) {
						const R = this.b.get(N);
						R instanceof w.$re && R.fire(A);
					}
					$registerSelectionRangeProvider(N, A) {
						this.b.set(
							N,
							this.g.selectionRangeProvider.register(A, {
								provideSelectionRanges: (R, O, B) =>
									this.a.$provideSelectionRanges(N, R.uri, O, B),
							}),
						);
					}
					$registerCallHierarchyProvider(N, A) {
						this.b.set(
							N,
							s.$O1.register(A, {
								prepareCallHierarchy: async (R, O, B) => {
									const U = await this.a.$prepareCallHierarchy(N, R.uri, O, B);
									if (!(!U || U.length === 0))
										return {
											dispose: () => {
												for (const z of U)
													this.a.$releaseCallHierarchy(N, z._sessionId);
											},
											roots: U.map(S.s),
										};
								},
								provideOutgoingCalls: async (R, O) => {
									const B = await this.a.$provideCallHierarchyOutgoingCalls(
										N,
										R._sessionId,
										R._itemId,
										O,
									);
									return (
										B &&
										(B.forEach((U) => {
											U.to = S.s(U.to);
										}),
										B)
									);
								},
								provideIncomingCalls: async (R, O) => {
									const B = await this.a.$provideCallHierarchyIncomingCalls(
										N,
										R._sessionId,
										R._itemId,
										O,
									);
									return (
										B &&
										(B.forEach((U) => {
											U.from = S.s(U.from);
										}),
										B)
									);
								},
							}),
						);
					}
					static y(N) {
						return new RegExp(N.pattern, N.flags);
					}
					static z(N) {
						return {
							decreaseIndentPattern: S.y(N.decreaseIndentPattern),
							increaseIndentPattern: S.y(N.increaseIndentPattern),
							indentNextLinePattern: N.indentNextLinePattern
								? S.y(N.indentNextLinePattern)
								: void 0,
							unIndentedLinePattern: N.unIndentedLinePattern
								? S.y(N.unIndentedLinePattern)
								: void 0,
						};
					}
					static C(N) {
						return {
							beforeText: S.y(N.beforeText),
							afterText: N.afterText ? S.y(N.afterText) : void 0,
							previousLineText: N.previousLineText
								? S.y(N.previousLineText)
								: void 0,
							action: N.action,
						};
					}
					static F(N) {
						return N.map(S.C);
					}
					$setLanguageConfiguration(N, A, R) {
						const O = {
							comments: R.comments,
							brackets: R.brackets,
							wordPattern: R.wordPattern ? S.y(R.wordPattern) : void 0,
							indentationRules: R.indentationRules
								? S.z(R.indentationRules)
								: void 0,
							onEnterRules: R.onEnterRules ? S.F(R.onEnterRules) : void 0,
							autoClosingPairs: void 0,
							surroundingPairs: void 0,
							__electricCharacterSupport: void 0,
						};
						R.autoClosingPairs
							? (O.autoClosingPairs = R.autoClosingPairs)
							: R.__characterPairSupport &&
								(O.autoClosingPairs =
									R.__characterPairSupport.autoClosingPairs),
							R.__electricCharacterSupport &&
								R.__electricCharacterSupport.docComment &&
								(O.__electricCharacterSupport = {
									docComment: {
										open: R.__electricCharacterSupport.docComment.open,
										close: R.__electricCharacterSupport.docComment.close,
									},
								}),
							this.c.isRegisteredLanguageId(A) &&
								this.b.set(N, this.f.register(A, O, 100));
					}
					$registerTypeHierarchyProvider(N, A) {
						this.b.set(
							N,
							y.$67.register(A, {
								prepareTypeHierarchy: async (R, O, B) => {
									const U = await this.a.$prepareTypeHierarchy(N, R.uri, O, B);
									if (U)
										return {
											dispose: () => {
												for (const z of U)
													this.a.$releaseTypeHierarchy(N, z._sessionId);
											},
											roots: U.map(S.t),
										};
								},
								provideSupertypes: async (R, O) => {
									const B = await this.a.$provideTypeHierarchySupertypes(
										N,
										R._sessionId,
										R._itemId,
										O,
									);
									return B && B.map(S.t);
								},
								provideSubtypes: async (R, O) => {
									const B = await this.a.$provideTypeHierarchySubtypes(
										N,
										R._sessionId,
										R._itemId,
										O,
									);
									return B && B.map(S.t);
								},
							}),
						);
					}
					$registerDocumentOnDropEditProvider(N, A, R) {
						const O = new P(N, this.a, R, this.h);
						this.G.set(N, O),
							this.b.set(
								N,
								(0, C.$Xc)(
									this.g.documentDropEditProvider.register(A, O),
									(0, C.$Yc)(() => this.G.delete(N)),
								),
							);
					}
					async $resolveDocumentOnDropFileData(N, A, R) {
						const O = this.G.get(N);
						if (!O) throw new Error("Could not find provider");
						return O.resolveDocumentOnDropFileData(A, R);
					}
					$registerMappedEditsProvider(N, A, R) {
						const O = new D(R, N, this.a, this.h);
						this.b.set(N, this.g.mappedEditsProvider.register(A, O));
					}
				});
				(e.$5nc = I),
					(e.$5nc =
						I =
						S =
							Ne(
								[
									(0, $.$tmc)(v.$lbb.MainThreadLanguageFeatures),
									j(1, h.$nM),
									j(2, c.$aN),
									j(3, n.$k3),
									j(4, p.$Vl),
								],
								I,
							));
				let T = class {
					constructor(N, A, R, O) {
						(this.b = N),
							(this.c = A),
							(this.f = O),
							(this.a = new b.$4nc()),
							(this.copyMimeTypes = R.copyMimeTypes),
							(this.pasteMimeTypes = R.pasteMimeTypes),
							(this.providedPasteEditKinds = R.providedPasteEditKinds?.map(
								(B) => new E.$1L(B),
							)),
							R.supportsCopy &&
								(this.prepareDocumentPaste = async (B, U, z, F) => {
									const x = await f.DataTransfer.from(z);
									if (F.isCancellationRequested) return;
									const H = await this.c.$prepareDocumentPaste(
										N,
										B.uri,
										U,
										x,
										F,
									);
									if (!H) return;
									const q = new t.$XL();
									for (const [V, G] of H.items)
										q.replace(V, (0, t.$VL)(G.asString));
									return q;
								}),
							R.supportsPaste &&
								(this.provideDocumentPasteEdits = async (B, U, z, F, x) => {
									const H = this.a.add(z);
									try {
										const q = await f.DataTransfer.from(z);
										if (x.isCancellationRequested) return;
										const V = await this.c.$providePasteEdits(
											this.b,
											H.id,
											B.uri,
											U,
											q,
											{ only: F.only?.value, triggerKind: F.triggerKind },
											x,
										);
										return V
											? {
													edits: V.map((G) => ({
														...G,
														kind: G.kind
															? new E.$1L(G.kind.value)
															: new E.$1L(""),
														yieldTo: G.yieldTo?.map((K) => ({
															kind: new E.$1L(K),
														})),
														additionalEdit: G.additionalEdit
															? (0, o.$xmc)(G.additionalEdit, this.f, (K) =>
																	this.resolveFileData(H.id, K),
																)
															: void 0,
													})),
													dispose: () => {
														this.c.$releasePasteEdits(this.b, H.id);
													},
												}
											: void 0;
									} finally {
										H.dispose();
									}
								}),
							R.supportsResolve &&
								(this.resolveDocumentPasteEdit = async (B, U) => {
									const z = await this.c.$resolvePasteEdit(
										this.b,
										B._cacheId,
										U,
									);
									return (
										z.additionalEdit &&
											(B.additionalEdit = (0, o.$xmc)(
												z.additionalEdit,
												this.f,
											)),
										B
									);
								});
					}
					resolveFileData(N, A) {
						return this.a.resolveFileData(N, A);
					}
				};
				T = Ne([j(3, p.$Vl)], T);
				let P = class {
					constructor(N, A, R, O) {
						(this.b = N),
							(this.c = A),
							(this.f = O),
							(this.a = new b.$4nc()),
							(this.dropMimeTypes = R?.dropMimeTypes ?? ["*/*"]),
							R?.supportsResolve &&
								(this.resolveDocumentDropEdit = async (B, U) => {
									const z = await this.c.$resolvePasteEdit(
										this.b,
										B._cacheId,
										U,
									);
									return (
										z.additionalEdit &&
											(B.additionalEdit = (0, o.$xmc)(
												z.additionalEdit,
												this.f,
											)),
										B
									);
								});
					}
					async provideDocumentDropEdits(N, A, R, O) {
						const B = this.a.add(R);
						try {
							const U = await f.DataTransfer.from(R);
							if (O.isCancellationRequested) return;
							const z = await this.c.$provideDocumentOnDropEdits(
								this.b,
								B.id,
								N.uri,
								A,
								U,
								O,
							);
							return z
								? {
										edits: z.map((F) => ({
											...F,
											yieldTo: F.yieldTo?.map((x) => ({ kind: new E.$1L(x) })),
											kind: F.kind ? new E.$1L(F.kind) : void 0,
											additionalEdit: (0, o.$xmc)(
												F.additionalEdit,
												this.f,
												(x) => this.resolveDocumentOnDropFileData(B.id, x),
											),
										})),
										dispose: () => {
											this.c.$releaseDocumentOnDropEdits(this.b, B.id);
										},
									}
								: void 0;
						} finally {
							B.dispose();
						}
					}
					resolveDocumentOnDropFileData(N, A) {
						return this.a.resolveFileData(N, A);
					}
				};
				P = Ne([j(3, p.$Vl)], P);
				class k {
					constructor(N, A, R, O) {
						(this.a = N), (this.b = A), (this.c = R), (this.onDidChange = O);
					}
					releaseDocumentSemanticTokens(N) {
						N && this.a.$releaseDocumentSemanticTokens(this.b, parseInt(N, 10));
					}
					getLegend() {
						return this.c;
					}
					async provideDocumentSemanticTokens(N, A, R) {
						const O = A ? parseInt(A, 10) : 0,
							B = await this.a.$provideDocumentSemanticTokens(
								this.b,
								N.uri,
								O,
								R,
							);
						if (!B || R.isCancellationRequested) return null;
						const U = (0, g.$8Ob)(B);
						return U.type === "full"
							? { resultId: String(U.id), data: U.data }
							: { resultId: String(U.id), edits: U.deltas };
					}
				}
				e.$6nc = k;
				class L {
					constructor(N, A, R) {
						(this.a = N), (this.b = A), (this.c = R);
					}
					getLegend() {
						return this.c;
					}
					async provideDocumentRangeSemanticTokens(N, A, R) {
						const O = await this.a.$provideDocumentRangeSemanticTokens(
							this.b,
							N.uri,
							A,
							R,
						);
						if (!O || R.isCancellationRequested) return null;
						const B = (0, g.$8Ob)(O);
						if (B.type === "full")
							return { resultId: String(B.id), data: B.data };
						throw new Error("Unexpected");
					}
				}
				e.$7nc = L;
				class D {
					constructor(N, A, R, O) {
						(this.displayName = N), (this.a = A), (this.b = R), (this.c = O);
					}
					async provideMappedEdits(N, A, R, O) {
						const B = await this.b.$provideMappedEdits(this.a, N.uri, A, R, O);
						return B ? (0, o.$xmc)(B, this.c) : null;
					}
				}
				e.$8nc = D;
			},
		),
		