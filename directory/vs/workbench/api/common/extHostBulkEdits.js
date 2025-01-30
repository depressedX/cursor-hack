import '../../../../require.js';
import '../../../../exports.js';
import './extHost.protocol.js';
import './extHostRpcService.js';
import './extHostTypeConverters.js';
import '../../services/extensions/common/proxyIdentifier.js';
define(Pe[561], Ne([1, 0, 6, 21, 17, 74]), function (we, t, e, r, S, N) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }), (t.$ghd = void 0);
			let P = class {
				constructor(l, n) {
					(this.a = l.getProxy(e.$lbb.MainThreadBulkEdits)),
						(this.b = {
							getTextDocumentVersion: (p) => n.getDocument(p)?.version,
							getNotebookDocumentVersion: () => {},
						});
				}
				applyWorkspaceEdit(l, n, p) {
					const y = new N.$uO(S.WorkspaceEdit.from(l, this.b));
					return this.a.$tryApplyWorkspaceEdit(
						y,
						void 0,
						p?.isRefactoring ?? !1,
					);
				}
			};
			(t.$ghd = P), (t.$ghd = P = wt([rt(0, r.$08)], P));
		}),
		