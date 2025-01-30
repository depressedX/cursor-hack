import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/uri.js';
import '../../../base/common/errors.js';
import './extHostTypes.js';
import './extHostTypeConverters.js';
import '../../../base/common/linkedList.js';
import '../../services/extensions/common/proxyIdentifier.js';
define(
			Pe[567],
			Ne([1, 0, 2, 12, 11, 17, 131, 74]),
			function (we, t, e, r, S, N, P, I) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$mid = void 0);
				class l {
					constructor(p, y, d, k = { timeout: 1500, errors: 3 }) {
						(this.c = p),
							(this.d = y),
							(this.f = d),
							(this.g = k),
							(this.a = new P.$$c()),
							(this.b = new WeakMap());
					}
					dispose() {
						this.a.clear();
					}
					getOnWillSaveTextDocumentEvent(p) {
						return (y, d, k) => {
							const c = { dispose: this.a.push([y, d, p]) };
							return Array.isArray(k) && k.push(c), c;
						};
					}
					async $participateInSave(p, y) {
						const d = e.URI.revive(p);
						let k = !1;
						const g = setTimeout(() => (k = !0), this.g.timeout),
							c = [];
						try {
							for (const h of [...this.a]) {
								if (k) break;
								const $ = this.d.getDocument(d),
									T = await this.h(h, {
										document: $,
										reason: N.TextDocumentSaveReason.to(y),
									});
								c.push(T);
							}
						} finally {
							clearTimeout(g);
						}
						return c;
					}
					h([p, y, d], k) {
						const g = this.b.get(p);
						return typeof g == "number" && g > this.g.errors
							? Promise.resolve(!1)
							: this.i(d, p, y, k).then(
									() => !0,
									(c) => {
										if (
											(this.c.error(
												`onWillSaveTextDocument-listener from extension '${d.identifier.value}' threw ERROR`,
											),
											this.c.error(c),
											!(c instanceof Error) || c.message !== "concurrent_edits")
										) {
											const h = this.b.get(p);
											this.b.set(p, h ? h + 1 : 1),
												typeof h == "number" &&
													h > this.g.errors &&
													this.c.info(
														`onWillSaveTextDocument-listener from extension '${d.identifier.value}' will now be IGNORED because of timeouts and/or errors`,
													);
										}
										return !1;
									},
								);
					}
					i(p, y, d, k) {
						const g = [],
							c = Date.now(),
							{ document: h, reason: $ } = k,
							{ version: T } = h,
							a = Object.freeze({
								document: h,
								reason: $,
								waitUntil(u) {
									if (Object.isFrozen(g))
										throw (0, r.$_)("waitUntil can not be called async");
									g.push(Promise.resolve(u));
								},
							});
						try {
							y.apply(d, [a]);
						} catch (u) {
							return Promise.reject(u);
						}
						return (
							Object.freeze(g),
							new Promise((u, s) => {
								const f = setTimeout(
									() => s(new Error("timeout")),
									this.g.timeout,
								);
								return Promise.all(g)
									.then((o) => {
										this.c.debug(
											`onWillSaveTextDocument-listener from extension '${p.identifier.value}' finished after ${Date.now() - c}ms`,
										),
											clearTimeout(f),
											u(o);
									})
									.catch((o) => {
										clearTimeout(f), s(o);
									});
							}).then((u) => {
								const s = { edits: [] };
								for (const f of u)
									if (Array.isArray(f) && f.every((o) => o instanceof S.$wbb))
										for (const { newText: o, newEol: w, range: m } of f)
											s.edits.push({
												resource: h.uri,
												versionId: void 0,
												textEdit: {
													range: m && N.Range.from(m),
													text: o,
													eol: w && N.EndOfLine.from(w),
												},
											});
								if (s.edits.length !== 0)
									return T === h.version
										? this.f.$tryApplyWorkspaceEdit(new I.$uO(s))
										: Promise.reject(new Error("concurrent_edits"));
							})
						);
					}
				}
				t.$mid = l;
			},
		),
		