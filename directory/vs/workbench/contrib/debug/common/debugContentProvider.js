import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../editor/common/services/languagesAssociations.js';
import '../../../../editor/common/services/model.js';
import '../../../../editor/common/languages/language.js';
import '../../../../editor/common/services/resolverService.js';
import './debug.js';
import './debugSource.js';
import '../../../../editor/common/services/editorWorker.js';
import '../../../../editor/common/core/editOperation.js';
import '../../../../editor/common/core/range.js';
import '../../../../base/common/cancellation.js';
import '../../../../editor/common/languages/modesRegistry.js';
import '../../../../base/common/errors.js';
define(
			de[1800],
			he([1, 0, 4, 671, 67, 61, 42, 112, 826, 200, 188, 17, 33, 172, 29]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				var g;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$9Qc = void 0);
				let p = class {
					static {
						g = this;
					}
					constructor(f, b, s, l, y) {
						(this.c = b),
							(this.d = s),
							(this.e = l),
							(this.f = y),
							(this.b = new Map()),
							f.registerTextModelContentProvider(d.$25, this),
							(g.a = this);
					}
					dispose() {
						this.b.forEach((f) => f.dispose());
					}
					provideTextContent(f) {
						return this.g(f, !0);
					}
					static refreshDebugContent(f) {
						g.a?.g(f, !1);
					}
					g(f, b) {
						const s = this.d.getModel(f);
						if (!s && !b) return null;
						let l;
						if (f.query) {
							const $ = m.$z3.getEncodedDebugData(f);
							l = this.c.getModel().getSession($.sessionId);
						}
						if ((l || (l = this.c.getViewModel().focusedSession), !l))
							return Promise.reject(new n.$fb((0, t.localize)(5833, null)));
						const y = ($) => {
							this.c.sourceIsNotAvailable(f);
							const v = this.e.createById(c.$0M),
								S = $
									? (0, t.localize)(5834, null, f.path, $)
									: (0, t.localize)(5835, null, f.path);
							return this.d.createModel(S, v, f);
						};
						return l.loadSource(f).then(
							($) => {
								if ($ && $.body)
									if (s) {
										const v = $.body.content;
										this.b.get(s.id)?.cancel();
										const I = new h.$Ce();
										return (
											this.b.set(s.id, I),
											this.f
												.computeMoreMinimalEdits(s.uri, [
													{ text: v, range: s.getFullModelRange() },
												])
												.then(
													(T) => (
														this.b.delete(s.id),
														!I.token.isCancellationRequested &&
															T &&
															T.length > 0 &&
															s.applyEdits(
																T.map((P) =>
																	u.$jL.replace(a.$iL.lift(P.range), P.text),
																),
															),
														s
													),
												)
										);
									} else {
										const v = $.body.mimeType || (0, i.$lYb)(f)[0],
											S = this.e.createByMimeType(v);
										return this.d.createModel($.body.content, S, f);
									}
								return y();
							},
							($) => y($.message),
						);
					}
				};
				(e.$9Qc = p),
					(e.$9Qc =
						p =
						g =
							Ne(
								[
									j(0, C.$MO),
									j(1, d.$75),
									j(2, w.$QO),
									j(3, E.$nM),
									j(4, r.$Cxb),
								],
								p,
							));
			},
		),
		