import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/async.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/keybindings.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/resources.js';
import '../../../common/config/editorOptions.js';
import '../../../common/core/range.js';
import '../../../common/languages.js';
import '../../../common/services/languageFeatures.js';
import '../../../common/services/markerDecorations.js';
import '../../codeAction/browser/codeAction.js';
import '../../codeAction/browser/codeActionController.js';
import '../../codeAction/common/types.js';
import '../../gotoError/browser/gotoError.js';
import './hoverTypes.js';
import '../../../../nls.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/markers/common/markers.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/progress/common/progress.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../platform/markers/common/markerService.js';
import './renderMarkerHover.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../common/languages/language.js';
import '../../../../base/common/uuid.js';
import '../../../../base/common/constants.js';
import '../../../../workbench/contrib/composer/browser/composer.js';
import '../../../../workbench/services/ai/browser/aiMiscServices.js';
import '../../../../workbench/contrib/composer/browser/constants.js';
import './utils.js';
import '../../../../css!vs/editor/contrib/hover/browser/markerHoverParticipant.js';
define(
			de[4114],
			he([
				1, 0, 7, 24, 15, 29, 27, 343, 3, 12, 19, 38, 17, 74, 69, 496, 393, 500,
				291, 857, 368, 4, 31, 39, 90, 41, 84, 32, 35, 667, 1965, 45, 5, 61, 47,
				58, 219, 137, 169, 1593, 2301,
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
				P,
				k,
				L,
				D,
				M,
				N,
				A,
				R,
				O,
				B,
				U,
				z,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ric = e.$qic = e.$pic = e.$oic = e.$nic = e.$mic = void 0),
					(t = mt(t)),
					(l = mt(l)),
					(e.$mic = C.KeyMod.CtrlCmd | C.KeyMod.Shift | C.KeyCode.KeyE),
					(e.$nic = (0, d.$rs)(e.$mic, r.OS)),
					(e.$oic = C.KeyMod.CtrlCmd | C.KeyCode.Backspace),
					(e.$pic = (0, d.$rs)(e.$oic, r.OS));
				const F = t.$;
				class x {
					constructor(G, K, J) {
						(this.owner = G), (this.range = K), (this.marker = J);
					}
					isValidForHoverAnchor(G) {
						return (
							G.type === s.HoverAnchorType.Range &&
							this.range.startColumn <= G.range.startColumn &&
							this.range.endColumn >= G.range.endColumn
						);
					}
				}
				e.$qic = x;
				const H = {
					type: c.CodeActionTriggerType.Invoke,
					filter: { include: f.$GAb.QuickFix },
					triggerAction: f.CodeActionTriggerSource.QuickFixHover,
				};
				let q = class {
					constructor(G, K, J, W, X, Y, ie, ne, ee, _, te, Q, Z) {
						(this.f = G),
							(this.g = K),
							(this.h = J),
							(this.i = W),
							(this.j = X),
							(this.k = Y),
							(this.l = ie),
							(this.m = ne),
							(this.n = ee),
							(this.o = _),
							(this.p = te),
							(this.q = Q),
							(this.r = Z),
							(this.hoverOrdinal = 1),
							(this.c = void 0);
					}
					computeSync(G, K) {
						if (
							!this.f.hasModel() ||
							(G.type !== s.HoverAnchorType.Range && !G.supportsMarkerHover)
						)
							return [];
						const J = this.f.getModel(),
							W = G.range.startLineNumber,
							X = J.getLineMaxColumn(W),
							Y = [];
						for (const ie of K) {
							const ne =
									ie.range.startLineNumber === W ? ie.range.startColumn : 1,
								ee = ie.range.endLineNumber === W ? ie.range.endColumn : X,
								_ = this.g.getMarker(J.uri, ie);
							if (!_) continue;
							const te = new h.$iL(
								G.range.startLineNumber,
								ne,
								G.range.startLineNumber,
								ee,
							);
							Y.push(new x(this, te, _));
						}
						return Y;
					}
					renderHoverParts(G, K) {
						if (!K.length) return new s.$4Bb([]);
						const J = new m.$Zc(),
							W = [];
						K.forEach((Y) => {
							const ie = this.s(Y, J, G);
							G.fragment.appendChild(ie.hoverElement), W.push(ie);
						});
						const X =
							K.length === 1
								? K[0]
								: K.sort((Y, ie) =>
										v.MarkerSeverity.compare(
											Y.marker.severity,
											ie.marker.severity,
										),
									)[0];
						return this.t(G, X, J), new s.$4Bb(W);
					}
					getAccessibleContent(G) {
						return G.marker.message;
					}
					s(G, K, J) {
						const W = document.createElement("div"),
							X = F("div.hover-row");
						W.appendChild(X), (X.tabIndex = 0);
						const Y = t.$fhb(X, F("div.marker.hover-contents")),
							{
								source: ie,
								message: ne,
								code: ee,
								relatedInformation: _,
							} = G.marker,
							te = G.marker.owner.startsWith(k.$kic);
						if (te) {
							const se = this.p.createByFilepathOrFirstLine(G.marker.resource);
							K.add(
								(0, L.$5hc)(
									Y,
									G.marker,
									this.o,
									se,
									({ width: oe, height: ae }) => J.onContentsChanged(),
								),
							);
							const re = G.marker.aiLintBugData?.bugUuid,
								le = re ? re + R.$CV + (0, A.$9g)() : null;
							return (
								this.n.setNonPersistentStorage(
									"lintState",
									"hoveringOverBugUuid",
									le,
								),
								K.add(
									(0, m.$Yc)(() => {
										this.n.nonPersistentStorage.lintState
											.hoveringOverBugUuid === le &&
											this.n.setNonPersistentStorage(
												"lintState",
												"hoveringOverBugUuid",
												null,
											);
									}),
								),
								{ hoverPart: G, hoverElement: W, dispose: () => K.dispose() }
							);
						}
						this.f.applyFontInfo(Y);
						const Q = t.$fhb(Y, F("span"));
						if (
							((Q.style.whiteSpace = "pre-wrap"),
							(Q.innerText = ne),
							this.f.isHallucinatedFunctionPreviewBox !== !0 && !te)
						) {
							const se = F("div.fix-buttons-container");
							W.appendChild(se);
							const re = F("div.fix-buttons-row");
							se.appendChild(re);
							const le = this.k.lookupKeybinding(
									U.FIX_ERROR_IN_COMPOSER_MESSAGE_ACTION_ID,
								),
								oe = this.k.lookupKeybinding(
									U.FIX_ERROR_IN_CHAT_MESSAGE_ACTION_ID,
								);
							re.appendChild(
								(0, z.$fhc)(
									"Fix in Composer" + (le ? ` (${le.getLabel()})` : ""),
									"edit",
									!0,
									this.q,
									this.r,
									this.m,
									G.marker.message,
									G.marker.resource.toString(),
									G.range,
								),
							),
								this.n.applicationUserPersistentStorage.composerState
									.unification !== !0 &&
									re.appendChild(
										(0, z.$fhc)(
											"Fix in Chat" + (oe ? ` (${oe.getLabel()})` : ""),
											"chat",
											!1,
											this.q,
											this.r,
											this.m,
											G.marker.message,
											G.marker.resource.toString(),
											G.range,
										),
									);
							const ae = F("div.fix-buttons-hint"),
								pe = r.$m ? "\u2318" : "Ctrl";
							(ae.textContent = `${pe}+click to open in new tab`),
								se.appendChild(ae);
						}
						if (ie || ee)
							if (ee && typeof ee != "string") {
								const se = F("span");
								if (ie) {
									const ae = t.$fhb(se, F("span"));
									ae.innerText = ie;
								}
								const re = t.$fhb(se, F("a.code-link"));
								re.setAttribute("href", ee.target.toString()),
									K.add(
										t.$0fb(re, "click", (ae) => {
											this.h.open(ee.target, { allowCommands: !0 }),
												ae.preventDefault(),
												ae.stopPropagation();
										}),
									);
								const le = t.$fhb(re, F("span"));
								le.innerText = ee.value;
								const oe = t.$fhb(Y, se);
								(oe.style.opacity = "0.6"), (oe.style.paddingLeft = "6px");
							} else {
								const se = t.$fhb(Y, F("span"));
								(se.style.opacity = "0.6"),
									(se.style.paddingLeft = "6px"),
									(se.innerText = ie && ee ? `${ie}(${ee})` : ie || `(${ee})`);
							}
						if ((0, i.$Pb)(_))
							for (const {
								message: se,
								resource: re,
								startLineNumber: le,
								startColumn: oe,
							} of _) {
								const ae = t.$fhb(Y, F("div"));
								ae.style.marginTop = "8px";
								const pe = t.$fhb(ae, F("a"));
								(pe.innerText = `${(0, u.$kh)(re)}(${le}, ${oe}): `),
									(pe.style.cursor = "pointer"),
									K.add(
										t.$0fb(pe, "click", (ye) => {
											if ((ye.stopPropagation(), ye.preventDefault(), this.h)) {
												const ue = {
													selection: { startLineNumber: le, startColumn: oe },
												};
												this.h
													.open(re, { fromUserGesture: !0, editorOptions: ue })
													.catch(E.$4);
											}
										}),
									);
								const $e = t.$fhb(ae, F("span"));
								($e.innerText = se), this.f.applyFontInfo($e);
							}
						return {
							hoverPart: G,
							hoverElement: W,
							dispose: () => K.dispose(),
						};
					}
					t(G, K, J) {
						if (
							K.marker.severity === v.MarkerSeverity.Error ||
							K.marker.severity === v.MarkerSeverity.Warning ||
							K.marker.severity === v.MarkerSeverity.Info
						) {
							const X = b.$7hc.get(this.f);
							X &&
								G.statusBar.addAction({
									label: l.localize(1204, null),
									commandId: b.$8hc.ID,
									run: () => {
										G.hide(), X.showAtMarker(K.marker), this.f.focus();
									},
								});
						}
						const W = K.marker.owner.startsWith(k.$kic);
						if (!this.f.getOption(a.EditorOption.readOnly)) {
							const X = G.statusBar.append(F("div"));
							this.c &&
								(v.IMarkerData.makeKey(this.c.marker) ===
								v.IMarkerData.makeKey(K.marker)
									? this.c.hasCodeActions ||
										(X.textContent = l.localize(1205, null))
									: (this.c = void 0));
							const Y =
								this.c && !this.c.hasCodeActions
									? m.$1c.None
									: (0, w.$Oh)(
											() => (X.textContent = l.localize(1206, null)),
											200,
											J,
										);
							X.textContent || (X.textContent = "\xA0");
							const ie = this.u(K.marker);
							J.add((0, m.$Yc)(() => ie.cancel())),
								ie.then((ne) => {
									if (
										(Y.dispose(),
										(this.c = {
											marker: K.marker,
											hasCodeActions: ne.validActions.length > 0,
										}),
										!this.c.hasCodeActions || W)
									) {
										ne.dispose(), (X.textContent = l.localize(1207, null));
										return;
									}
									X.style.display = "none";
									let ee = !1;
									J.add(
										(0, m.$Yc)(() => {
											ee || ne.dispose();
										}),
									),
										W ||
											G.statusBar.addAction({
												label: l.localize(1208, null),
												commandId: p.$MAb,
												run: (_) => {
													ee = !0;
													const te = o.$BBb.get(this.f),
														Q = t.$tgb(_);
													G.hide(),
														te?.showCodeActions(H, ne, {
															x: Q.left,
															y: Q.top,
															width: Q.width,
															height: Q.height,
														});
												},
											});
								}, E.$4);
						}
					}
					u(G) {
						return (0, w.$zh)((K) =>
							(0, p.$UAb)(
								this.i.codeActionProvider,
								this.f.getModel(),
								new h.$iL(
									G.startLineNumber,
									G.startColumn,
									G.endLineNumber,
									G.endColumn,
								),
								H,
								I.$0N.None,
								K,
								this.k,
							),
						);
					}
				};
				(e.$ric = q),
					(e.$ric = q =
						Ne(
							[
								j(1, g.$bub),
								j(2, S.$7rb),
								j(3, n.$k3),
								j(4, y.$ek),
								j(5, $.$uZ),
								j(6, P.$iP),
								j(7, T.$km),
								j(8, D.$0zb),
								j(9, M.$Li),
								j(10, N.$nM),
								j(11, O.IComposerService),
								j(12, B.$ifc),
							],
							q,
						));
			},
		),
		