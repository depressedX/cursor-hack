import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/errorMessage.js';
import '../../../../base/common/event.js';
import '../../../../base/common/uri.js';
import './textFileEditorModel.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../base/common/map.js';
import '../../../../platform/files/common/files.js';
import '../../../../base/common/async.js';
import '../../../../base/common/errors.js';
import './textFileSaveParticipant.js';
import '../../../../platform/notification/common/notification.js';
import '../../workingCopy/common/workingCopyFileService.js';
import '../../../../base/common/resources.js';
import '../../../../editor/common/model/textModel.js';
import '../../../../editor/common/languages/modesRegistry.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
define(
			de[3905],
			he([
				1, 0, 4, 163, 6, 9, 1920, 3, 5, 59, 22, 15, 29, 3676, 40, 336, 19, 122,
				172, 68,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$r4c = void 0);
				let s = class extends d.$1c {
					get models() {
						return [...this.r.values()];
					}
					constructor(y, $, v, S, I) {
						super(),
							(this.y = y),
							(this.z = $),
							(this.C = v),
							(this.F = S),
							(this.G = I),
							(this.a = this.D(new w.$re({ leakWarningThreshold: 500 }))),
							(this.onDidCreate = this.a.event),
							(this.b = this.D(new w.$re())),
							(this.onDidResolve = this.b.event),
							(this.c = this.D(new w.$re())),
							(this.onDidRemove = this.c.event),
							(this.f = this.D(new w.$re())),
							(this.onDidChangeDirty = this.f.event),
							(this.g = this.D(new w.$re())),
							(this.onDidChangeReadonly = this.g.event),
							(this.h = this.D(new w.$re())),
							(this.onDidChangeOrphaned = this.h.event),
							(this.j = this.D(new w.$re())),
							(this.onDidSaveError = this.j.event),
							(this.m = this.D(new w.$re())),
							(this.onDidSave = this.m.event),
							(this.n = this.D(new w.$re())),
							(this.onDidRevert = this.n.event),
							(this.q = this.D(new w.$re())),
							(this.onDidChangeEncoding = this.q.event),
							(this.r = new r.$Gc()),
							(this.s = new r.$Gc()),
							(this.t = new r.$Gc()),
							(this.u = new r.$Gc()),
							(this.w = this.D(new a.$Vh())),
							(this.saveErrorHandler = (() => {
								const T = this.C;
								return {
									onSaveError(P, k) {
										T.error(
											(0, t.localize)(12676, null, k.name, (0, i.$xj)(P, !1)),
										);
									},
								};
							})()),
							(this.O = new Map()),
							(this.$ = this.D(this.y.createInstance(c.$q4c))),
							this.H();
					}
					H() {
						this.D(this.z.onDidFilesChange((y) => this.I(y))),
							this.D(
								this.z.onDidChangeFileSystemProviderCapabilities((y) =>
									this.J(y),
								),
							),
							this.D(
								this.z.onDidChangeFileSystemProviderRegistrations((y) =>
									this.L(y),
								),
							),
							this.D(
								this.F.onWillRunWorkingCopyFileOperation((y) => this.P(y)),
							),
							this.D(
								this.F.onDidFailWorkingCopyFileOperation((y) => this.Q(y)),
							),
							this.D(this.F.onDidRunWorkingCopyFileOperation((y) => this.R(y)));
					}
					I(y) {
						for (const $ of this.models)
							$.isDirty() ||
								(y.contains(
									$.resource,
									u.FileChangeType.UPDATED,
									u.FileChangeType.ADDED,
								) &&
									this.N($));
					}
					J(y) {
						this.M(y.scheme);
					}
					L(y) {
						y.added && this.M(y.scheme);
					}
					M(y) {
						for (const $ of this.models)
							$.isDirty() || (y === $.resource.scheme && this.N($));
					}
					N(y) {
						this.w.queueSize(y.resource) <= 1 &&
							this.w.queueFor(y.resource, async () => {
								try {
									await this.U(y);
								} catch (v) {
									(0, h.$4)(v);
								}
							});
					}
					P(y) {
						if (
							y.operation === u.FileOperation.MOVE ||
							y.operation === u.FileOperation.COPY
						) {
							const $ = [];
							for (const { source: v, target: S } of y.files)
								if (v) {
									if (this.G.extUri.isEqual(v, S)) continue;
									const I = [];
									for (const T of this.models)
										this.G.extUri.isEqualOrParent(T.resource, v) && I.push(T);
									for (const T of I) {
										const P = T.resource;
										let k;
										this.G.extUri.isEqual(P, v)
											? (k = S)
											: (k = (0, p.$nh)(S, P.path.substr(v.path.length + 1))),
											$.push({
												source: P,
												target: k,
												languageId: T.getLanguageId(),
												encoding: T.getEncoding(),
												snapshot: T.isDirty() ? T.createSnapshot() : void 0,
											});
									}
								}
							this.O.set(y.correlationId, $);
						}
					}
					Q(y) {
						if (
							y.operation === u.FileOperation.MOVE ||
							y.operation === u.FileOperation.COPY
						) {
							const $ = this.O.get(y.correlationId);
							$ &&
								(this.O.delete(y.correlationId),
								$.forEach((v) => {
									v.snapshot && this.get(v.source)?.setDirty(!0);
								}));
						}
					}
					R(y) {
						switch (y.operation) {
							case u.FileOperation.CREATE:
								y.waitUntil(
									(async () => {
										for (const { target: $ } of y.files) {
											const v = this.get($);
											v && !v.isDisposed() && (await v.revert());
										}
									})(),
								);
								break;
							case u.FileOperation.MOVE:
							case u.FileOperation.COPY:
								y.waitUntil(
									(async () => {
										const $ = this.O.get(y.correlationId);
										$ &&
											(this.O.delete(y.correlationId),
											await a.Promises.settled(
												$.map(async (v) => {
													const S = this.G.asCanonicalUri(v.target),
														I = await this.resolve(S, {
															reload: { async: !1 },
															contents: v.snapshot
																? (0, o.$9X)(v.snapshot)
																: void 0,
															encoding: v.encoding,
														});
													v.languageId &&
														v.languageId !== f.$0M &&
														I.getLanguageId() === f.$0M &&
														(0, p.$lh)(S) !== f.$$M &&
														I.updateTextEditorModel(void 0, v.languageId);
												}),
											));
									})(),
								);
								break;
						}
					}
					get(y) {
						return this.r.get(y);
					}
					S(y) {
						return this.r.has(y);
					}
					async U(y) {
						await this.X(y.resource),
							!(y.isDirty() || y.isDisposed() || !this.S(y.resource)) &&
								(await this.W(y, { reload: { async: !1 } }));
					}
					async resolve(y, $) {
						const v = this.X(y);
						return v && (await v), this.W(y, $);
					}
					async W(y, $) {
						let v, S;
						E.URI.isUri(y)
							? ((S = y), (v = this.get(S)))
							: ((S = y.resource), (v = y));
						let I,
							T = !1;
						if (v)
							$?.contents
								? (I = v.resolve($))
								: $?.reload
									? $.reload.async
										? ((I = Promise.resolve()),
											(async () => {
												try {
													await v.resolve($);
												} catch (P) {
													(0, h.$4)(P);
												}
											})())
										: (I = v.resolve($))
									: (I = Promise.resolve());
						else {
							T = !0;
							const P = (v = this.y.createInstance(
								C.$xvc,
								S,
								$ ? $.encoding : void 0,
								$ ? $.languageId : void 0,
							));
							(I = v.resolve($)), this.Z(P);
						}
						this.u.set(S, I),
							this.add(S, v),
							T && (this.a.fire(v), v.isDirty() && this.f.fire(v));
						try {
							await I;
						} catch (P) {
							throw (T && v.dispose(), P);
						} finally {
							this.u.delete(S);
						}
						return (
							$?.languageId && v.setLanguageId($.languageId),
							T && v.isDirty() && this.f.fire(v),
							v
						);
					}
					X(y) {
						if (this.u.get(y)) return this.Y(y);
					}
					async Y(y) {
						let $;
						for (; this.u.has(y); ) {
							const v = this.u.get(y);
							if (v === $) return;
							$ = v;
							try {
								await v;
							} catch {}
						}
					}
					Z(y) {
						const $ = new d.$Zc();
						$.add(y.onDidResolve((v) => this.b.fire({ model: y, reason: v }))),
							$.add(y.onDidChangeDirty(() => this.f.fire(y))),
							$.add(y.onDidChangeReadonly(() => this.g.fire(y))),
							$.add(y.onDidChangeOrphaned(() => this.h.fire(y))),
							$.add(y.onDidSaveError(() => this.j.fire(y))),
							$.add(y.onDidSave((v) => this.m.fire({ model: y, ...v }))),
							$.add(y.onDidRevert(() => this.n.fire(y))),
							$.add(y.onDidChangeEncoding(() => this.q.fire(y))),
							this.s.set(y.resource, $);
					}
					add(y, $) {
						if (this.r.get(y) === $) return;
						this.t.get(y)?.dispose(),
							this.r.set(y, $),
							this.t.set(
								y,
								$.onWillDispose(() => this.remove(y)),
							);
					}
					remove(y) {
						const $ = this.r.delete(y),
							v = this.t.get(y);
						v && ((0, d.$Vc)(v), this.t.delete(y));
						const S = this.s.get(y);
						S && ((0, d.$Vc)(S), this.s.delete(y)), $ && this.c.fire(y);
					}
					addSaveParticipant(y) {
						return this.$.addSaveParticipant(y);
					}
					runSaveParticipants(y, $, v, S) {
						return this.$.participate(y, $, v, S);
					}
					canDispose(y) {
						return y.isDisposed() || (!this.u.has(y.resource) && !y.isDirty())
							? !0
							: this.ab(y);
					}
					async ab(y) {
						const $ = this.X(y.resource);
						return $
							? (await $, this.canDispose(y))
							: y.isDirty()
								? (await w.Event.toPromise(y.onDidChangeDirty),
									this.canDispose(y))
								: !0;
					}
					dispose() {
						super.dispose(),
							this.r.clear(),
							this.u.clear(),
							(0, d.$Vc)(this.t.values()),
							this.t.clear(),
							(0, d.$Vc)(this.s.values()),
							this.s.clear();
					}
				};
				(e.$r4c = s),
					(e.$r4c = s =
						Ne(
							[j(0, m.$Li), j(1, u.$ll), j(2, n.$4N), j(3, g.$iZ), j(4, b.$Vl)],
							s,
						));
			},
		),
		