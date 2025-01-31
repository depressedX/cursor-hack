import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/iterator.js';
import '../../../../base/common/linkedList.js';
import '../../../../base/common/types.js';
import '../../../../base/common/uri.js';
import '../../editorState/browser/editorState.js';
import '../../../browser/editorBrowser.js';
import '../../../common/core/position.js';
import '../../../common/core/range.js';
import '../../../common/core/selection.js';
import '../../../common/editorCommon.js';
import '../../../common/services/editorWorker.js';
import '../../../common/services/resolverService.js';
import './formattingEdit.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/extensions/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../common/services/languageFeatures.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/accessibilitySignal/browser/accessibilitySignalService.js';
define(
			de[674],
			he([
				1, 0, 24, 33, 29, 103, 273, 28, 9, 439, 56, 48, 17, 104, 98, 200, 42,
				1552, 31, 109, 5, 69, 34, 184,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*arrays*/,
				i /*cancellation*/,
				w /*errors*/,
				E /*iterator*/,
				C /*linkedList*/,
				d /*types*/,
				m /*uri*/,
				r /*editorState*/,
				u /*editorBrowser*/,
				a /*position*/,
				h /*range*/,
				c /*selection*/,
				n /*editorCommon*/,
				g /*editorWorker*/,
				p /*resolverService*/,
				o /*formattingEdit*/,
				f /*commands*/,
				b /*extensions*/,
				s /*instantiation*/,
				l /*languageFeatures*/,
				y /*log*/,
				$ /*accessibilitySignalService*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Khc = e.FormattingMode = e.FormattingKind = void 0),
					(e.$Jhc = v),
					(e.$Lhc = P),
					(e.$Mhc = k),
					(e.$Nhc = L),
					(e.$Ohc = D),
					(e.$Phc = M),
					(e.$Qhc = N),
					(e.$Rhc = A),
					(e.$Shc = R);
				function v(O, B, U) {
					const z = [],
						F = new b.$Hn(),
						x = O.ordered(U);
					for (const q of x) z.push(q), q.extensionId && F.add(q.extensionId);
					const H = B.ordered(U);
					for (const q of H) {
						if (q.extensionId) {
							if (F.has(q.extensionId)) continue;
							F.add(q.extensionId);
						}
						z.push({
							displayName: q.displayName,
							extensionId: q.extensionId,
							provideDocumentFormattingEdits(V, G, K) {
								return q.provideDocumentRangeFormattingEdits(
									V,
									V.getFullModelRange(),
									G,
									K,
								);
							},
						});
					}
					return z;
				}
				var S;
				(function (O) {
					(O[(O.File = 1)] = "File"), (O[(O.Selection = 2)] = "Selection");
				})(S || (e.FormattingKind = S = {}));
				var I;
				(function (O) {
					(O[(O.Explicit = 1)] = "Explicit"), (O[(O.Silent = 2)] = "Silent");
				})(I || (e.FormattingMode = I = {}));
				class T {
					static {
						this.c = new C.$$c();
					}
					static setFormatterSelector(B) {
						return { dispose: T.c.unshift(B) };
					}
					static async select(B, U, z, F) {
						if (B.length === 0) return;
						const x = E.Iterable.first(T.c);
						if (x) return await x(B, U, z, F);
					}
				}
				e.$Khc = T;
				async function P(O, B, U, z, F, x, H) {
					const q = O.get(s.$Li),
						{ documentRangeFormattingEditProvider: V } = O.get(l.$k3),
						G = (0, u.$0sb)(B) ? B.getModel() : B,
						K = V.ordered(G),
						J = await T.select(K, G, z, S.Selection);
					J && (F.report(J), await q.invokeFunction(k, J, B, U, x, H));
				}
				async function k(O, B, U, z, F, x) {
					const H = O.get(g.$Cxb),
						q = O.get(y.$ik),
						V = O.get($.$Owb);
					let G, K;
					(0, u.$0sb)(U)
						? ((G = U.getModel()),
							(K = new r.$Nzb(
								U,
								r.CodeEditorStateFlag.Value | r.CodeEditorStateFlag.Position,
								void 0,
								F,
							)))
						: ((G = U), (K = new r.$Ozb(U, F)));
					const J = [];
					let W = 0;
					for (const ee of (0, t.$6b)(z).sort(h.$iL.compareRangesUsingStarts))
						W > 0 && h.$iL.areIntersectingOrTouching(J[W - 1], ee)
							? (J[W - 1] = h.$iL.fromPositions(
									J[W - 1].getStartPosition(),
									ee.getEndPosition(),
								))
							: (W = J.push(ee));
					const X = async (ee) => {
							q.trace(
								"[format][provideDocumentRangeFormattingEdits] (request)",
								B.extensionId?.value,
								ee,
							);
							const _ =
								(await B.provideDocumentRangeFormattingEdits(
									G,
									ee,
									G.getFormattingOptions(),
									K.token,
								)) || [];
							return (
								q.trace(
									"[format][provideDocumentRangeFormattingEdits] (response)",
									B.extensionId?.value,
									_,
								),
								_
							);
						},
						Y = (ee, _) => {
							if (!ee.length || !_.length) return !1;
							const te = ee.reduce(
								(Q, Z) => h.$iL.plusRange(Q, Z.range),
								ee[0].range,
							);
							if (!_.some((Q) => h.$iL.intersectRanges(te, Q.range))) return !1;
							for (const Q of ee)
								for (const Z of _)
									if (h.$iL.intersectRanges(Q.range, Z.range)) return !0;
							return !1;
						},
						ie = [],
						ne = [];
					try {
						if (typeof B.provideDocumentRangesFormattingEdits == "function") {
							q.trace(
								"[format][provideDocumentRangeFormattingEdits] (request)",
								B.extensionId?.value,
								J,
							);
							const ee =
								(await B.provideDocumentRangesFormattingEdits(
									G,
									J,
									G.getFormattingOptions(),
									K.token,
								)) || [];
							q.trace(
								"[format][provideDocumentRangeFormattingEdits] (response)",
								B.extensionId?.value,
								ee,
							),
								ne.push(ee);
						} else {
							for (const ee of J) {
								if (K.token.isCancellationRequested) return !0;
								ne.push(await X(ee));
							}
							for (let ee = 0; ee < J.length; ++ee)
								for (let _ = ee + 1; _ < J.length; ++_) {
									if (K.token.isCancellationRequested) return !0;
									if (Y(ne[ee], ne[_])) {
										const te = h.$iL.plusRange(J[ee], J[_]),
											Q = await X(te);
										J.splice(_, 1),
											J.splice(ee, 1),
											J.push(te),
											ne.splice(_, 1),
											ne.splice(ee, 1),
											ne.push(Q),
											(ee = 0),
											(_ = 0);
									}
								}
						}
						for (const ee of ne) {
							if (K.token.isCancellationRequested) return !0;
							const _ = await H.computeMoreMinimalEdits(G.uri, ee);
							_ && ie.push(..._);
						}
					} finally {
						K.dispose();
					}
					if (ie.length === 0) return !1;
					if ((0, u.$0sb)(U))
						o.$Ihc.execute(U, ie, !0),
							U.revealPositionInCenterIfOutsideViewport(
								U.getPosition(),
								n.ScrollType.Immediate,
							);
					else {
						const [{ range: ee }] = ie,
							_ = new c.$kL(
								ee.startLineNumber,
								ee.startColumn,
								ee.endLineNumber,
								ee.endColumn,
							);
						G.pushEditOperations(
							[_],
							ie.map((te) => ({
								text: te.text,
								range: h.$iL.lift(te.range),
								forceMoveMarkers: !0,
							})),
							(te) => {
								for (const { range: Q } of te)
									if (h.$iL.areIntersectingOrTouching(Q, _))
										return [
											new c.$kL(
												Q.startLineNumber,
												Q.startColumn,
												Q.endLineNumber,
												Q.endColumn,
											),
										];
								return null;
							},
						);
					}
					return V.playSignal($.$Twb.format, { userGesture: x }), !0;
				}
				async function L(O, B, U, z, F, x) {
					const H = O.get(s.$Li),
						q = O.get(l.$k3),
						V = (0, u.$0sb)(B) ? B.getModel() : B,
						G = v(
							q.documentFormattingEditProvider,
							q.documentRangeFormattingEditProvider,
							V,
						),
						K = await T.select(G, V, U, S.File);
					K && (z.report(K), await H.invokeFunction(D, K, B, U, F, x));
				}
				async function D(O, B, U, z, F, x) {
					const H = O.get(g.$Cxb),
						q = O.get($.$Owb);
					let V, G;
					(0, u.$0sb)(U)
						? ((V = U.getModel()),
							(G = new r.$Nzb(
								U,
								r.CodeEditorStateFlag.Value | r.CodeEditorStateFlag.Position,
								void 0,
								F,
							)))
						: ((V = U), (G = new r.$Ozb(U, F)));
					let K;
					try {
						const J = await B.provideDocumentFormattingEdits(
							V,
							V.getFormattingOptions(),
							G.token,
						);
						if (
							((K = await H.computeMoreMinimalEdits(V.uri, J)),
							G.token.isCancellationRequested)
						)
							return !0;
					} finally {
						G.dispose();
					}
					if (!K || K.length === 0) return !1;
					if ((0, u.$0sb)(U))
						o.$Ihc.execute(U, K, z !== I.Silent),
							z !== I.Silent &&
								U.revealPositionInCenterIfOutsideViewport(
									U.getPosition(),
									n.ScrollType.Immediate,
								);
					else {
						const [{ range: J }] = K,
							W = new c.$kL(
								J.startLineNumber,
								J.startColumn,
								J.endLineNumber,
								J.endColumn,
							);
						V.pushEditOperations(
							[W],
							K.map((X) => ({
								text: X.text,
								range: h.$iL.lift(X.range),
								forceMoveMarkers: !0,
							})),
							(X) => {
								for (const { range: Y } of X)
									if (h.$iL.areIntersectingOrTouching(Y, W))
										return [
											new c.$kL(
												Y.startLineNumber,
												Y.startColumn,
												Y.endLineNumber,
												Y.endColumn,
											),
										];
								return null;
							},
						);
					}
					return q.playSignal($.$Twb.format, { userGesture: x }), !0;
				}
				async function M(O, B, U, z, F, x) {
					const H = B.documentRangeFormattingEditProvider.ordered(U);
					for (const q of H) {
						const V = await Promise.resolve(
							q.provideDocumentRangeFormattingEdits(U, z, F, x),
						).catch(w.$5);
						if ((0, t.$Pb)(V)) return await O.computeMoreMinimalEdits(U.uri, V);
					}
				}
				async function N(O, B, U, z, F) {
					const x = v(
						B.documentFormattingEditProvider,
						B.documentRangeFormattingEditProvider,
						U,
					);
					for (const H of x) {
						const q = await Promise.resolve(
							H.provideDocumentFormattingEdits(U, z, F),
						).catch(w.$5);
						if ((0, t.$Pb)(q)) return await O.computeMoreMinimalEdits(U.uri, q);
					}
				}
				async function A(O, B, U, z, F) {
					const x = (0, u.$0sb)(U) ? U.getModel() : U,
						H = v(
							B.documentFormattingEditProvider,
							B.documentRangeFormattingEditProvider,
							x,
						),
						q = await T.select(H, x, z, S.File);
					if (q) {
						const V = await Promise.resolve(
							q.provideDocumentFormattingEdits(x, x.getOptions(), F),
						).catch(w.$5);
						return await O.computeMoreMinimalEdits(x.uri, V);
					}
				}
				function R(O, B, U, z, F, x, H) {
					const q = B.onTypeFormattingEditProvider.ordered(U);
					return q.length === 0 ||
						q[0].autoFormatTriggerCharacters.indexOf(F) < 0
						? Promise.resolve(void 0)
						: Promise.resolve(q[0].provideOnTypeFormattingEdits(U, z, F, x, H))
								.catch(w.$5)
								.then((V) => O.computeMoreMinimalEdits(U.uri, V));
				}
				f.$fk.registerCommand(
					"_executeFormatRangeProvider",
					async function (O, ...B) {
						const [U, z, F] = B;
						(0, d.$vg)(m.URI.isUri(U)), (0, d.$vg)(h.$iL.isIRange(z));
						const x = O.get(p.$MO),
							H = O.get(g.$Cxb),
							q = O.get(l.$k3),
							V = await x.createModelReference(U);
						try {
							return M(
								H,
								q,
								V.object.textEditorModel,
								h.$iL.lift(z),
								F,
								i.CancellationToken.None,
							);
						} finally {
							V.dispose();
						}
					},
				),
					f.$fk.registerCommand(
						"_executeFormatDocumentProvider",
						async function (O, ...B) {
							const [U, z] = B;
							(0, d.$vg)(m.URI.isUri(U));
							const F = O.get(p.$MO),
								x = O.get(g.$Cxb),
								H = O.get(l.$k3),
								q = await F.createModelReference(U);
							try {
								return N(
									x,
									H,
									q.object.textEditorModel,
									z,
									i.CancellationToken.None,
								);
							} finally {
								q.dispose();
							}
						},
					),
					f.$fk.registerCommand(
						"_executeFormatOnTypeProvider",
						async function (O, ...B) {
							const [U, z, F, x] = B;
							(0, d.$vg)(m.URI.isUri(U)),
								(0, d.$vg)(a.$hL.isIPosition(z)),
								(0, d.$vg)(typeof F == "string");
							const H = O.get(p.$MO),
								q = O.get(g.$Cxb),
								V = O.get(l.$k3),
								G = await H.createModelReference(U);
							try {
								return R(
									q,
									V,
									G.object.textEditorModel,
									a.$hL.lift(z),
									F,
									x,
									i.CancellationToken.None,
								);
							} finally {
								G.dispose();
							}
						},
					);
			},
		)
