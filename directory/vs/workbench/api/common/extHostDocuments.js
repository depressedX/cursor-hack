import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/uri.js';
import './extHost.protocol.js';
import './extHostDocumentData.js';
import './extHostTypeConverters.js';
import '../../../base/common/types.js';
import '../../../base/common/objects.js';
import './extHostTypes.js';
define(
			Pe[568],
			Ne([1, 0, 4, 3, 2, 6, 301, 17, 19, 27, 11]),
			function (we, t, e, r, S, N, P, I, l, n, p) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$bhd = void 0),
					(I = tt(I));
				class y {
					constructor(k, g) {
						(this.a = new e.$re()),
							(this.b = new e.$re()),
							(this.c = new e.$re()),
							(this.d = new e.$re()),
							(this.onDidAddDocument = this.a.event),
							(this.onDidRemoveDocument = this.b.event),
							(this.onDidChangeDocument = this.c.event),
							(this.onDidSaveDocument = this.d.event),
							(this.e = new r.$Zc()),
							(this.h = new Map()),
							(this.f = k.getProxy(N.$lbb.MainThreadDocuments)),
							(this.g = g),
							this.g.onDidRemoveDocuments(
								(c) => {
									for (const h of c) this.b.fire(h.document);
								},
								void 0,
								this.e,
							),
							this.g.onDidAddDocuments(
								(c) => {
									for (const h of c) this.a.fire(h.document);
								},
								void 0,
								this.e,
							);
					}
					dispose() {
						this.e.dispose();
					}
					getAllDocumentData() {
						return [...this.g.allDocuments()];
					}
					getDocumentData(k) {
						if (!k) return;
						const g = this.g.getDocument(k);
						if (g) return g;
					}
					getDocument(k) {
						const g = this.getDocumentData(k);
						if (!g?.document)
							throw new Error(`Unable to retrieve document from URI '${k}'`);
						return g.document;
					}
					ensureDocumentData(k) {
						const g = this.g.getDocument(k);
						if (g) return Promise.resolve(g);
						let c = this.h.get(k.toString());
						return (
							c ||
								((c = this.f.$tryOpenDocument(k).then(
									(h) => {
										this.h.delete(k.toString());
										const $ = S.URI.revive(h);
										return (0, l.$wg)(this.g.getDocument($));
									},
									(h) => (this.h.delete(k.toString()), Promise.reject(h)),
								)),
								this.h.set(k.toString(), c)),
							c
						);
					}
					createDocumentData(k) {
						return this.f.$tryCreateDocument(k).then((g) => S.URI.revive(g));
					}
					$acceptModelLanguageChanged(k, g) {
						const c = S.URI.revive(k),
							h = this.g.getDocument(c);
						if (!h) throw new Error("unknown document");
						this.b.fire(h.document),
							h._acceptLanguageId(g),
							this.a.fire(h.document);
					}
					$acceptModelSaved(k) {
						const g = S.URI.revive(k),
							c = this.g.getDocument(g);
						if (!c) throw new Error("unknown document");
						this.$acceptDirtyStateChanged(k, !1), this.d.fire(c.document);
					}
					$acceptDirtyStateChanged(k, g) {
						const c = S.URI.revive(k),
							h = this.g.getDocument(c);
						if (!h) throw new Error("unknown document");
						h._acceptIsDirty(g),
							this.c.fire({
								document: h.document,
								contentChanges: [],
								reason: void 0,
							});
					}
					$acceptModelChanged(k, g, c) {
						const h = S.URI.revive(k),
							$ = this.g.getDocument(h);
						if (!$) throw new Error("unknown document");
						$._acceptIsDirty(c), $.onEvents(g);
						let T;
						g.isUndoing
							? (T = p.TextDocumentChangeReason.Undo)
							: g.isRedoing && (T = p.TextDocumentChangeReason.Redo),
							this.c.fire(
								(0, n.$wo)({
									document: $.document,
									contentChanges: g.changes.map((a) => ({
										range: I.Range.to(a.range),
										rangeOffset: a.rangeOffset,
										rangeLength: a.rangeLength,
										text: a.text,
									})),
									reason: T,
								}),
							);
					}
					setWordDefinitionFor(k, g) {
						(0, P.$Odb)(k, g);
					}
				}
				t.$bhd = y;
			},
		),
		