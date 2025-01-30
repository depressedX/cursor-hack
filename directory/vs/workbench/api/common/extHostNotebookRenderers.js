import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import './extHost.protocol.js';
import './extHostNotebookEditor.js';
define(Pe[577], Ne([1, 0, 4, 6, 302]), function (we, t, e, r, S) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }), (t.$Sid = void 0);
			class N {
				constructor(I, l) {
					(this.c = l),
						(this.a = new Map()),
						(this.b = I.getProxy(r.$lbb.MainThreadNotebookRenderers));
				}
				$postRendererMessage(I, l, n) {
					const p = this.c.getEditorById(I);
					this.a.get(l)?.fire({ editor: p.apiEditor, message: n });
				}
				createRendererMessaging(I, l) {
					if (!I.contributes?.notebookRenderer?.some((p) => p.id === l))
						throw new Error(
							`Extensions may only call createRendererMessaging() for renderers they contribute (got ${l})`,
						);
					return {
						onDidReceiveMessage: (p, y, d) => this.d(l).event(p, y, d),
						postMessage: (p, y) => {
							S.$tid.apiEditorsToExtHost.has(p) && ([p, y] = [y, p]);
							const d = y && S.$tid.apiEditorsToExtHost.get(y);
							return this.b.$postMessage(d?.id, l, p);
						},
					};
				}
				d(I) {
					let l = this.a.get(I);
					return (
						l ||
						((l = new e.$re({
							onDidRemoveLastListener: () => {
								l?.dispose(), this.a.delete(I);
							},
						})),
						this.a.set(I, l),
						l)
					);
				}
			}
			t.$Sid = N;
		}),
		