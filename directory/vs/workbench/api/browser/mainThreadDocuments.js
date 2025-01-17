import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/errorMessage.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/network.js';
import '../../../base/common/uri.js';
import '../../../editor/common/model.js';
import '../../../editor/common/services/model.js';
import '../../../editor/common/services/resolverService.js';
import '../../../platform/files/common/files.js';
import '../common/extHost.protocol.js';
import '../../services/textfile/common/textfiles.js';
import '../../services/environment/common/environmentService.js';
import '../../../base/common/resources.js';
import '../../services/workingCopy/common/workingCopyFileService.js';
import '../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../base/common/event.js';
import '../../services/path/common/pathService.js';
import '../../../base/common/map.js';
import '../../../base/common/errors.js';
define(
			de[1342],
			he([
				1, 0, 163, 3, 23, 9, 64, 67, 42, 22, 88, 85, 78, 19, 336, 68, 6, 165,
				59, 29,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$4mc = e.$3mc = void 0);
				class s {
					constructor(v, S = 1e3 * 60 * 3, I = 1024 * 1024 * 80, T = 50) {
						(this.c = v),
							(this.d = S),
							(this.f = I),
							(this.g = T),
							(this.a = new Array()),
							(this.b = 0);
					}
					dispose() {
						this.a = (0, i.$Vc)(this.a);
					}
					remove(v) {
						for (const S of [...this.a])
							this.c.isEqualOrParent(S.uri, v) && S.dispose();
					}
					add(v, S, I = 0) {
						const T = () => {
								const L = this.a.indexOf(k);
								L >= 0 &&
									((this.b -= I),
									S.dispose(),
									clearTimeout(P),
									this.a.splice(L, 1));
							},
							P = setTimeout(T, this.d),
							k = { uri: v, length: I, dispose: T };
						this.a.push(k), (this.b += I), this.h();
					}
					h() {
						for (; this.b > this.f; ) this.a[0].dispose();
						const v = Math.ceil(this.g * 1.2);
						this.a.length >= v && (0, i.$Vc)(this.a.slice(0, v - this.g));
					}
				}
				e.$3mc = s;
				class l extends i.$1c {
					constructor(v, S, I, T) {
						super(),
							(this.b = v),
							(this.c = S),
							(this.f = I),
							(this.g = T),
							(this.a = this.b.getVersionId()),
							this.B.add(
								this.b.onDidChangeContent((P) => {
									(this.a = P.versionId),
										this.f.$acceptModelChanged(
											this.b.uri,
											P,
											this.g.isDirty(this.b.uri),
										),
										this.isCaughtUpWithContentChanges() &&
											this.c.fire(this.b.uri);
								}),
							);
					}
					isCaughtUpWithContentChanges() {
						return this.b.getVersionId() === this.a;
					}
				}
				let y = class extends i.$1c {
					constructor(v, S, I, T, P, k, L, D, M) {
						super(),
							(this.g = S),
							(this.h = I),
							(this.j = T),
							(this.n = P),
							(this.q = k),
							(this.r = L),
							(this.s = M),
							(this.a = this.B.add(new p.$re())),
							(this.onIsCaughtUpWithContentChanges = this.a.event),
							(this.c = new f.$Gc()),
							(this.f = this.B.add(new s(L.extUri))),
							(this.b = v.getProxy(u.$mbb.ExtHostDocuments)),
							this.B.add(S.onModelLanguageChanged(this.u, this)),
							this.B.add(
								I.files.onDidSave((N) => {
									this.t(N.model.resource) &&
										this.b.$acceptModelSaved(N.model.resource);
								}),
							),
							this.B.add(
								I.files.onDidChangeDirty((N) => {
									this.t(N.resource) &&
										this.b.$acceptDirtyStateChanged(N.resource, N.isDirty());
								}),
							),
							this.B.add(
								D.onDidRunWorkingCopyFileOperation((N) => {
									const A = N.operation === r.FileOperation.MOVE;
									if (A || N.operation === r.FileOperation.DELETE)
										for (const R of N.files) {
											const O = A ? R.source : R.target;
											O && this.f.remove(O);
										}
								}),
							);
					}
					dispose() {
						(0, i.$Vc)(this.c.values()), this.c.clear(), super.dispose();
					}
					isCaughtUpWithContentChanges(v) {
						const S = this.c.get(v);
						return S ? S.isCaughtUpWithContentChanges() : !0;
					}
					t(v) {
						const S = this.g.getModel(v);
						return !!S && (0, C.$TN)(S);
					}
					handleModelAdded(v) {
						(0, C.$TN)(v) &&
							this.c.set(v.uri, new l(v, this.a, this.b, this.h));
					}
					u(v) {
						const { model: S } = v;
						this.c.has(S.uri) &&
							this.b.$acceptModelLanguageChanged(S.uri, S.getLanguageId());
					}
					handleModelRemoved(v) {
						this.c.has(v) && (this.c.get(v).dispose(), this.c.delete(v));
					}
					async $trySaveDocument(v) {
						return !!(await this.h.save(E.URI.revive(v)));
					}
					async $tryOpenDocument(v) {
						const S = E.URI.revive(v);
						if (!S.scheme || !(S.fsPath || S.authority))
							throw new b.$fb(
								"Invalid uri. Scheme and authority or path must be set.",
							);
						const I = this.r.asCanonicalUri(S);
						let T;
						switch (I.scheme) {
							case w.Schemas.untitled:
								T = this.y(I);
								break;
							case w.Schemas.file:
							default:
								T = this.w(I);
								break;
						}
						let P;
						try {
							P = await T;
						} catch (k) {
							throw new b.$fb(
								`cannot open ${I.toString()}. Detail: ${(0, t.$xj)(k)}`,
							);
						}
						if (P)
							if (c.$dh.isEqual(P, I)) {
								if (this.c.has(I)) return I;
								throw new b.$fb(
									`cannot open ${I.toString()}. Detail: Files above 50MB cannot be synchronized with extensions.`,
								);
							} else
								throw new b.$fb(
									`cannot open ${I.toString()}. Detail: Actual document opened as ${P.toString()}`,
								);
						else throw new b.$fb(`cannot open ${I.toString()}`);
					}
					$tryCreateDocument(v) {
						return this.z(
							void 0,
							v ? v.language : void 0,
							v ? v.content : void 0,
						);
					}
					async w(v) {
						const S = await this.n.createModelReference(v);
						return (
							this.f.add(v, S, S.object.textEditorModel.getValueLength()),
							S.object.textEditorModel.uri
						);
					}
					async y(v) {
						const S = (0, c.$xh)(
							v,
							this.q.remoteAuthority,
							this.s.defaultUriScheme,
						);
						return (await this.j.exists(S))
							? Promise.reject(new Error("file already exists"))
							: await this.z(v.path ? v : void 0);
					}
					async z(v, S, I) {
						const T = this.h.untitled.create({
								associatedResource: v,
								languageId: S,
								initialValue: I,
							}),
							P = T.resource,
							k = await this.n.createModelReference(P);
						if (!this.c.has(P))
							throw (
								(k.dispose(),
								new Error(`expected URI ${P.toString()} to have come to LIFE`))
							);
						return (
							this.f.add(P, k, k.object.textEditorModel.getValueLength()),
							p.Event.once(T.onDidRevert)(() => this.f.remove(P)),
							this.b.$acceptDirtyStateChanged(P, !0),
							P
						);
					}
				};
				(e.$4mc = y),
					(e.$4mc = y =
						Ne(
							[
								j(1, d.$QO),
								j(2, a.$kZ),
								j(3, r.$ll),
								j(4, m.$MO),
								j(5, h.$r8),
								j(6, g.$Vl),
								j(7, n.$iZ),
								j(8, o.$I8),
							],
							y,
						));
			},
		),
		