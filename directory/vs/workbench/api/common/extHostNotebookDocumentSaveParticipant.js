import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import '../../../base/common/uri.js';
import './extHostTypeConverters.js';
import './extHostTypes.js';
import '../../services/extensions/common/proxyIdentifier.js';
define(
			Pe[575],
			Ne([1, 0, 4, 2, 17, 11, 74]),
			function (we, t, e, r, S, N, P) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$Nid = void 0);
				class I {
					constructor(n, p, y, d = { timeout: 1500, errors: 3 }) {
						(this.b = n),
							(this.c = p),
							(this.d = y),
							(this.f = d),
							(this.a = new e.$te());
					}
					dispose() {}
					getOnWillSaveNotebookDocumentEvent(n) {
						return (p, y, d) => {
							const k = function (c) {
								p.call(y, c);
							};
							return (k.extension = n), this.a.event(k, void 0, d);
						};
					}
					async $participateInSave(n, p, y) {
						const d = r.URI.revive(n),
							k = this.c.getNotebookDocument(d);
						if (!k) throw new Error("Unable to resolve notebook document");
						const g = [];
						if (
							(await this.a.fireAsync(
								{
									notebook: k.apiNotebook,
									reason: S.TextDocumentSaveReason.to(p),
								},
								y,
								async (h, $) => {
									const T = Date.now(),
										a = await await Promise.resolve(h);
									Date.now() - T > this.f.timeout &&
										this.b.warn(
											"onWillSaveNotebookDocument-listener from extension",
											$.extension.identifier,
										),
										!y.isCancellationRequested &&
											a &&
											(a instanceof N.$zbb
												? g.push(a)
												: this.b.warn(
														"onWillSaveNotebookDocument-listener from extension",
														$.extension.identifier,
														"ignored due to invalid data",
													));
								},
							),
							y.isCancellationRequested)
						)
							return !1;
						if (g.length === 0) return !0;
						const c = { edits: [] };
						for (const h of g) {
							const { edits: $ } = S.WorkspaceEdit.from(h);
							c.edits = c.edits.concat($);
						}
						return this.d.$tryApplyWorkspaceEdit(new P.$uO(c));
					}
				}
				t.$Nid = I;
			},
		),
		