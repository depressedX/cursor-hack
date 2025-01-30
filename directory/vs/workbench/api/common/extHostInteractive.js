import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/uri.js';
import './extHostCommands.js';
define(Pe[585], Ne([1, 0, 2, 44]), function (we, t, e, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }), (t.$Iid = void 0);
			class S {
				constructor(P, I, l, n, p) {
					(this.a = I), (this.b = l), (this.c = n);
					const y = new r.$_db(
						"interactive.open",
						"_interactive.open",
						"Open interactive window and return notebook editor and input URI",
						[
							new r.$0db(
								"showOptions",
								"Show Options",
								(d) => !0,
								(d) => d,
							),
							new r.$0db(
								"resource",
								"Interactive resource Uri",
								(d) => !0,
								(d) => d,
							),
							new r.$0db(
								"controllerId",
								"Notebook controller Id",
								(d) => !0,
								(d) => d,
							),
							new r.$0db(
								"title",
								"Interactive editor title",
								(d) => !0,
								(d) => d,
							),
						],
						new r.$$db("Notebook and input URI", (d) => {
							if (
								(p.debug(
									"[ExtHostInteractive] open iw with notebook editor id",
									d.notebookEditorId,
								),
								d.notebookEditorId !== void 0)
							) {
								const k = this.a.getEditorById(d.notebookEditorId);
								return (
									p.debug("[ExtHostInteractive] notebook editor found", k.id),
									{
										notebookUri: e.URI.revive(d.notebookUri),
										inputUri: e.URI.revive(d.inputUri),
										notebookEditor: k.apiEditor,
									}
								);
							}
							return (
								p.debug(
									"[ExtHostInteractive] notebook editor not found, uris for the interactive document",
									d.notebookUri,
									d.inputUri,
								),
								{
									notebookUri: e.URI.revive(d.notebookUri),
									inputUri: e.URI.revive(d.inputUri),
								}
							);
						}),
					);
					this.c.registerApiCommand(y);
				}
				$willAddInteractiveDocument(P, I, l, n) {
					this.b.acceptDocumentsAndEditorsDelta({
						addedDocuments: [
							{
								EOL: I,
								lines: [""],
								languageId: l,
								uri: P,
								isDirty: !1,
								versionId: 1,
							},
						],
					});
				}
				$willRemoveInteractiveDocument(P, I) {
					this.b.acceptDocumentsAndEditorsDelta({ removedDocuments: [P] });
				}
			}
			t.$Iid = S;
		}),
		