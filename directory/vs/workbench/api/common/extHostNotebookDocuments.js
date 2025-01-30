import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import '../../../base/common/uri.js';
define(Pe[515], Ne([1, 0, 4, 2]), function (we, t, e, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }), (t.$Oid = void 0);
			class S {
				constructor(P) {
					(this.c = P),
						(this.a = new e.$re()),
						(this.onDidSaveNotebookDocument = this.a.event),
						(this.b = new e.$re()),
						(this.onDidChangeNotebookDocument = this.b.event);
				}
				$acceptModelChanged(P, I, l, n) {
					const y = this.c
						.getNotebookDocument(r.URI.revive(P))
						.acceptModelChanged(I.value, l, n);
					this.b.fire(y);
				}
				$acceptDirtyStateChanged(P, I) {
					this.c.getNotebookDocument(r.URI.revive(P)).acceptDirty(I);
				}
				$acceptModelSaved(P) {
					const I = this.c.getNotebookDocument(r.URI.revive(P));
					this.a.fire(I.apiNotebook);
				}
			}
			t.$Oid = S;
		}),
		