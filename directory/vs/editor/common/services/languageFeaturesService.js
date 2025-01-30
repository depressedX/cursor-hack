import '../../../../require.js';
import '../../../../exports.js';
import '../languageFeatureRegistry.js';
import './languageFeatures.js';
import '../../../platform/instantiation/common/extensions.js';
define(de[2763], he([1, 0, 945, 69, 20]), function (ce /*require*/,
 e /*exports*/,
 t /*languageFeatureRegistry*/,
 i /*languageFeatures*/,
 w /*extensions*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$syc = void 0);
			class E {
				constructor() {
					(this.referenceProvider = new t.$N1(this.b.bind(this))),
						(this.renameProvider = new t.$N1(this.b.bind(this))),
						(this.newSymbolNamesProvider = new t.$N1(this.b.bind(this))),
						(this.codeActionProvider = new t.$N1(this.b.bind(this))),
						(this.definitionProvider = new t.$N1(this.b.bind(this))),
						(this.typeDefinitionProvider = new t.$N1(this.b.bind(this))),
						(this.declarationProvider = new t.$N1(this.b.bind(this))),
						(this.implementationProvider = new t.$N1(this.b.bind(this))),
						(this.documentSymbolProvider = new t.$N1(this.b.bind(this))),
						(this.inlayHintsProvider = new t.$N1(this.b.bind(this))),
						(this.colorProvider = new t.$N1(this.b.bind(this))),
						(this.codeLensProvider = new t.$N1(this.b.bind(this))),
						(this.documentFormattingEditProvider = new t.$N1(
							this.b.bind(this),
						)),
						(this.documentRangeFormattingEditProvider = new t.$N1(
							this.b.bind(this),
						)),
						(this.onTypeFormattingEditProvider = new t.$N1(this.b.bind(this))),
						(this.signatureHelpProvider = new t.$N1(this.b.bind(this))),
						(this.hoverProvider = new t.$N1(this.b.bind(this))),
						(this.documentHighlightProvider = new t.$N1(this.b.bind(this))),
						(this.multiDocumentHighlightProvider = new t.$N1(
							this.b.bind(this),
						)),
						(this.selectionRangeProvider = new t.$N1(this.b.bind(this))),
						(this.foldingRangeProvider = new t.$N1(this.b.bind(this))),
						(this.linkProvider = new t.$N1(this.b.bind(this))),
						(this.inlineCompletionsProvider = new t.$N1(this.b.bind(this))),
						(this.inlineEditProvider = new t.$N1(this.b.bind(this))),
						(this.completionProvider = new t.$N1(this.b.bind(this))),
						(this.linkedEditingRangeProvider = new t.$N1(this.b.bind(this))),
						(this.inlineValuesProvider = new t.$N1(this.b.bind(this))),
						(this.evaluatableExpressionProvider = new t.$N1(this.b.bind(this))),
						(this.documentRangeSemanticTokensProvider = new t.$N1(
							this.b.bind(this),
						)),
						(this.documentSemanticTokensProvider = new t.$N1(
							this.b.bind(this),
						)),
						(this.documentDropEditProvider = new t.$N1(this.b.bind(this))),
						(this.documentPasteEditProvider = new t.$N1(this.b.bind(this))),
						(this.mappedEditsProvider = new t.$N1(this.b.bind(this)));
				}
				setNotebookTypeResolver(d) {
					this.a = d;
				}
				b(d) {
					return this.a?.(d);
				}
			}
			(e.$syc = E), (0, w.$lK)(i.$k3, E, w.InstantiationType.Delayed);
		}),
		