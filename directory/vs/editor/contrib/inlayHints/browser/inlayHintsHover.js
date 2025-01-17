import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../base/common/htmlContent.js';
import '../../../browser/editorBrowser.js';
import '../../../common/core/position.js';
import '../../../common/model/textModel.js';
import '../../hover/browser/hoverTypes.js';
import '../../../common/languages/language.js';
import '../../../common/services/resolverService.js';
import '../../hover/browser/getHover.js';
import '../../hover/browser/markdownHoverParticipant.js';
import './inlayHintsController.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/opener/common/opener.js';
import '../../../common/services/languageFeatures.js';
import '../../../common/config/editorOptions.js';
import '../../../../nls.js';
import '../../../../base/common/platform.js';
import './inlayHints.js';
import '../../../../base/common/arrays.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/hover/browser/hover.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../workbench/services/ai/browser/aiMiscServices.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../workbench/contrib/composer/browser/composer.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
define(
			de[1868],
			he([
				1, 0, 15, 94, 56, 48, 122, 368, 61, 42, 1643, 820, 1316, 10, 41, 69, 38,
				4, 12, 1177, 24, 39, 72, 31, 137, 32, 219, 45,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$shc = void 0),
					(f = mt(f));
				class P extends d.$3Bb {
					constructor(D, M, N, A) {
						super(10, M, D.item.anchor.range, N, A, !0), (this.part = D);
					}
				}
				let k = class extends a.$hhc {
					constructor(D, M, N, A, R, O, B, U, z, F, x, H, q) {
						super(D, M, N, O, U, A, R, z, F, x, H, q),
							(this.r = B),
							(this.hoverOrdinal = 6);
					}
					suggestHoverAnchor(D) {
						if (
							!h.$rhc.get(this.b) ||
							D.target.type !== w.MouseTargetType.CONTENT_TEXT
						)
							return null;
						const N = D.target.detail.injectedText?.options;
						return N instanceof C.$dY && N.attachedData instanceof h.$qhc
							? new P(N.attachedData, this, D.event.posx, D.event.posy)
							: null;
					}
					computeSync() {
						return [];
					}
					computeAsync(D, M, N) {
						return D instanceof P
							? new t.$ai(async (A) => {
									const { part: R } = D;
									if ((await R.item.resolve(N), N.isCancellationRequested))
										return;
									let O;
									typeof R.item.hint.tooltip == "string"
										? (O = new i.$cl().appendText(R.item.hint.tooltip))
										: R.item.hint.tooltip && (O = R.item.hint.tooltip),
										O && A.emitOne(new a.$ghc(this, D.range, [O], !1, 0)),
										(0, s.$Pb)(R.item.hint.textEdits) &&
											A.emitOne(
												new a.$ghc(
													this,
													D.range,
													[new i.$cl().appendText((0, o.localize)(1229, null))],
													!1,
													10001,
												),
											);
									let B;
									if (
										(typeof R.part.tooltip == "string"
											? (B = new i.$cl().appendText(R.part.tooltip))
											: R.part.tooltip && (B = R.part.tooltip),
										B && A.emitOne(new a.$ghc(this, D.range, [B], !1, 1)),
										R.part.location || R.part.command)
									) {
										let z;
										const x =
											this.b.getOption(p.EditorOption.multiCursorModifier) ===
											"altKey"
												? f.$m
													? (0, o.localize)(1230, null)
													: (0, o.localize)(1231, null)
												: f.$m
													? (0, o.localize)(1232, null)
													: (0, o.localize)(1233, null);
										R.part.location && R.part.command
											? (z = new i.$cl().appendText(
													(0, o.localize)(1234, null, x),
												))
											: R.part.location
												? (z = new i.$cl().appendText(
														(0, o.localize)(1235, null, x),
													))
												: R.part.command &&
													(z = new i.$cl(
														`[${(0, o.localize)(1236, null)}](${(0, b.$nhc)(R.part.command)} "${R.part.command.title}") (${x})`,
														{ isTrusted: !0 },
													)),
											z && A.emitOne(new a.$ghc(this, D.range, [z], !1, 1e4));
									}
									const U = await this.s(R, N);
									for await (const z of U) A.emitOne(z);
								})
							: t.$ai.EMPTY;
					}
					async s(D, M) {
						if (!D.part.location) return t.$ai.EMPTY;
						const { uri: N, range: A } = D.part.location,
							R = await this.r.createModelReference(N);
						try {
							const O = R.object.textEditorModel;
							return this.h.hoverProvider.has(O)
								? (0, u.$1Db)(
										this.h.hoverProvider,
										O,
										new E.$hL(A.startLineNumber, A.startColumn),
										M,
									)
										.filter((B) => !(0, i.$dl)(B.hover.contents))
										.map(
											(B) =>
												new a.$ghc(
													this,
													D.item.anchor.range,
													B.hover.contents,
													!1,
													2 + B.ordinal,
												),
										)
								: t.$ai.EMPTY;
						} finally {
							R.dispose();
						}
					}
				};
				(e.$shc = k),
					(e.$shc = k =
						Ne(
							[
								j(1, m.$nM),
								j(2, n.$7rb),
								j(3, l.$uZ),
								j(4, y.$Uyb),
								j(5, c.$gj),
								j(6, r.$MO),
								j(7, g.$k3),
								j(8, $.$ek),
								j(9, I.IComposerService),
								j(10, v.$ifc),
								j(11, S.$km),
								j(12, T.$0zb),
							],
							k,
						));
			},
		),
		