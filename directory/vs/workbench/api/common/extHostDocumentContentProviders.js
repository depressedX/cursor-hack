import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/errors.js';
import '../../../base/common/uri.js';
import './extHostTypes.js';
import './extHost.protocol.js';
import '../../../base/common/network.js';
import '../../../base/common/cancellation.js';
import '../../../base/common/strings.js';
define(
			Pe[558],
			Ne([1, 0, 12, 2, 11, 6, 16, 23, 15]),
			function (we, t, e, r, S, N, P, I, l) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$lid = void 0);
				class n {
					static {
						this.a = 0;
					}
					constructor(y, d, k) {
						(this.d = d),
							(this.e = k),
							(this.b = new Map()),
							(this.c = y.getProxy(N.$lbb.MainThreadDocumentContentProviders));
					}
					registerTextDocumentContentProvider(y, d) {
						if (Object.keys(P.Schemas).indexOf(y) >= 0)
							throw new Error(`scheme '${y}' already registered`);
						const k = n.a++;
						this.b.set(k, d), this.c.$registerTextContentProvider(k, y);
						let g;
						if (typeof d.onDidChange == "function") {
							let c;
							g = d.onDidChange(async (h) => {
								if (h.scheme !== y) {
									this.e.warn(
										`Provider for scheme '${y}' is firing event for schema '${h.scheme}' which will be IGNORED`,
									);
									return;
								}
								if (!this.d.getDocument(h)) return;
								c && (await c);
								const $ = this.$provideTextDocumentContent(k, h)
									.then(async (T) => {
										if (!T && typeof T != "string") return;
										const a = this.d.getDocument(h);
										if (!a) return;
										const u = (0, l.$zf)(T);
										if (!a.equalLines(u))
											return this.c.$onVirtualDocumentChange(h, T);
									})
									.catch(e.$4)
									.finally(() => {
										c === $ && (c = void 0);
									});
								c = $;
							});
						}
						return new S.$nbb(() => {
							this.b.delete(k) && this.c.$unregisterTextContentProvider(k),
								g && (g.dispose(), (g = void 0));
						});
					}
					$provideTextDocumentContent(y, d) {
						const k = this.b.get(y);
						return k
							? Promise.resolve(
									k.provideTextDocumentContent(
										r.URI.revive(d),
										I.CancellationToken.None,
									),
								)
							: Promise.reject(
									new Error(`unsupported uri-scheme: ${d.scheme}`),
								);
					}
				}
				t.$lid = n;
			},
		),
		