import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/htmlContent.js';
import '../../../../base/common/lifecycle.js';
import '../../../browser/widget/markdownRenderer/browser/markdownRenderer.js';
import './hoverActionIds.js';
import '../../../common/core/range.js';
import '../../../common/languages/language.js';
import './hoverTypes.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/opener/common/opener.js';
import '../../../common/services/languageFeatures.js';
import '../../../common/config/editorOptions.js';
import '../../../common/languages.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/themables.js';
import '../../../../base/common/errors.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../base/browser/ui/hover/hoverWidget.js';
import '../../../../base/common/keyCodes.js';
import '../../../../platform/hover/browser/hover.js';
import '../../../../base/common/async.js';
import './getHover.js';
import '../../../../platform/commands/common/commands.js';
import './utils.js';
import '../../../../workbench/contrib/composer/browser/constants.js';
import '../../../../workbench/contrib/composer/browser/composer.js';
import '../../../../workbench/services/ai/browser/aiMiscServices.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../base/common/platform.js';
import '../../gotoSymbol/browser/goToSymbol.js';
import '../../gotoSymbol/browser/goToSymbol.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../base/common/async.js';
import '../../../../base/common/constants.js';
define(
			de[820],
			he([
				1, 0, 7, 24, 33, 94, 3, 251, 936, 17, 61, 368, 4, 10, 41, 69, 38, 74,
				79, 14, 26, 29, 39, 160, 27, 72, 15, 1643, 31, 1593, 169, 219, 137, 32,
				12, 414, 414, 45, 15, 58,
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
					(e.$hhc = e.$ghc = void 0),
					(e.$ihc = W),
					(e.$jhc = Y),
					(t = mt(t)),
					(h = mt(h));
				const F = t.$,
					x = (0, f.$$O)(
						"hover-increase-verbosity",
						b.$ak.add,
						h.localize(1195, null),
					),
					H = (0, f.$$O)(
						"hover-decrease-verbosity",
						b.$ak.remove,
						h.localize(1196, null),
					);
				class q {
					constructor(ne, ee, _, te, Q, Z = void 0) {
						(this.owner = ne),
							(this.range = ee),
							(this.contents = _),
							(this.isBeforeContent = te),
							(this.ordinal = Q),
							(this.source = Z);
					}
					isValidForHoverAnchor(ne) {
						return (
							ne.type === a.HoverAnchorType.Range &&
							this.range.startColumn <= ne.range.startColumn &&
							this.range.endColumn >= ne.range.endColumn
						);
					}
				}
				e.$ghc = q;
				class V {
					constructor(ne, ee, _) {
						(this.hover = ne),
							(this.hoverProvider = ee),
							(this.hoverPosition = _);
					}
					supportsVerbosityAction(ne) {
						switch (ne) {
							case o.HoverVerbosityAction.Increase:
								return this.hover.canIncreaseVerbosity ?? !1;
							case o.HoverVerbosityAction.Decrease:
								return this.hover.canDecreaseVerbosity ?? !1;
						}
					}
				}
				let G = class {
					constructor(ne, ee, _, te, Q, Z, se, re, le, oe, ae, pe) {
						(this.b = ne),
							(this.c = ee),
							(this.f = _),
							(this.g = te),
							(this.h = Q),
							(this.i = Z),
							(this.j = se),
							(this.k = re),
							(this.l = le),
							(this.m = oe),
							(this.o = ae),
							(this.p = pe),
							(this.hoverOrdinal = 3);
					}
					createLoadingMessage(ne) {
						return new q(
							this,
							ne.range,
							[new E.$cl().appendText(h.localize(1197, null))],
							!1,
							2e3,
						);
					}
					computeSync(ne, ee) {
						if (!this.b.hasModel() || ne.type !== a.HoverAnchorType.Range)
							return [];
						if (
							this.b.isHallucinatedFunctionPreviewBox === !0 ||
							this.b.isChatCodeblock === !0
						)
							return [];
						const _ = this.b.getModel(),
							te = ne.range.startLineNumber,
							Q = _.getLineMaxColumn(te),
							Z = [];
						let se = 1e3;
						const re = _.getLineLength(te),
							le = _.getLanguageIdAtPosition(
								ne.range.startLineNumber,
								ne.range.startColumn,
							),
							oe = this.b.getOption(p.EditorOption.stopRenderingLineAfter),
							ae = this.g.getValue("editor.maxTokenizationLineLength", {
								overrideIdentifier: le,
							});
						let pe = !1;
						oe >= 0 &&
							re > oe &&
							ne.range.startColumn >= oe &&
							((pe = !0),
							Z.push(
								new q(
									this,
									ne.range,
									[{ value: h.localize(1198, null) }],
									!1,
									se++,
								),
							)),
							!pe &&
								typeof ae == "number" &&
								re >= ae &&
								Z.push(
									new q(
										this,
										ne.range,
										[{ value: h.localize(1199, null) }],
										!1,
										se++,
									),
								);
						let $e = !1;
						for (const ye of ee) {
							const ue =
									ye.range.startLineNumber === te ? ye.range.startColumn : 1,
								fe = ye.range.endLineNumber === te ? ye.range.endColumn : Q,
								me = ye.options.hoverMessage;
							if (!me || (0, E.$dl)(me)) continue;
							ye.options.beforeContentClassName && ($e = !0);
							const ve = new r.$iL(
								ne.range.startLineNumber,
								ue,
								ne.range.startLineNumber,
								fe,
							);
							Z.push(new q(this, ve, (0, i.$6b)(me), $e, se++));
						}
						return Z;
					}
					computeAsync(ne, ee, _) {
						if (
							!this.b.hasModel() ||
							ne.type !== a.HoverAnchorType.Range ||
							this.b.isHallucinatedFunctionPreviewBox === !0 ||
							this.b.isChatCodeblock === !0
						)
							return I.$ai.EMPTY;
						const te = this.b.getModel(),
							Q = this.h.hoverProvider;
						return Q.has(te) ? this.q(Q, te, ne, _) : I.$ai.EMPTY;
					}
					q(ne, ee, _, te) {
						if (
							this.b.isHallucinatedFunctionPreviewBox === !0 ||
							this.b.isChatCodeblock === !0
						)
							return I.$ai.EMPTY;
						const Q = _.range.getStartPosition();
						return (0, T.$1Db)(ne, ee, Q, te)
							.filter((re) => !(0, E.$dl)(re.hover.contents))
							.map((re) => {
								const le = re.hover.range
										? r.$iL.lift(re.hover.range)
										: _.range,
									oe = new V(re.hover, re.provider, Q);
								return new q(this, le, re.hover.contents, !1, re.ordinal, oe);
							});
					}
					renderHoverParts(ne, ee) {
						return (
							(this.a = new J(
								ee,
								ne.fragment,
								this,
								this.b,
								this.c,
								this.f,
								this.k,
								this.i,
								this.j,
								this.g,
								this.l,
								this.m,
								this.o,
								this.h,
								this.p,
								ne.onContentsChanged,
							)),
							this.a
						);
					}
					getAccessibleContent(ne) {
						return this.a?.getAccessibleContent(ne) ?? "";
					}
					doesMarkdownHoverAtIndexSupportVerbosityAction(ne, ee) {
						return (
							this.a?.doesMarkdownHoverAtIndexSupportVerbosityAction(ne, ee) ??
							!1
						);
					}
					updateMarkdownHoverVerbosityLevel(ne, ee, _) {
						return Promise.resolve(
							this.a?.updateMarkdownHoverPartVerbosityLevel(ne, ee, _),
						);
					}
				};
				(e.$hhc = G),
					(e.$hhc = G =
						Ne(
							[
								j(1, u.$nM),
								j(2, n.$7rb),
								j(3, c.$gj),
								j(4, g.$k3),
								j(5, y.$uZ),
								j(6, S.$Uyb),
								j(7, P.$ek),
								j(8, D.IComposerService),
								j(9, M.$ifc),
								j(10, N.$km),
								j(11, B.$0zb),
							],
							G,
						));
				class K {
					constructor(ne, ee, _) {
						(this.hoverPart = ne),
							(this.hoverElement = ee),
							(this.disposables = _);
					}
					get hoverAccessibleContent() {
						return this.hoverElement.innerText.trim();
					}
					dispose() {
						this.disposables.dispose();
					}
				}
				class J {
					constructor(
						ne,
						ee,
						_,
						te,
						Q,
						Z,
						se,
						re,
						le,
						oe,
						ae,
						pe,
						$e,
						ye,
						ue,
						fe,
					) {
						(this.c = _),
							(this.f = te),
							(this.g = Q),
							(this.h = Z),
							(this.i = se),
							(this.j = re),
							(this.k = le),
							(this.l = oe),
							(this.m = ae),
							(this.o = pe),
							(this.p = $e),
							(this.q = ye),
							(this.r = ue),
							(this.s = fe),
							(this.a = new Map()),
							(this.b = new C.$Zc()),
							(this.renderedHoverParts = this.t(ne, ee, this.s)),
							this.b.add(
								(0, C.$Yc)(() => {
									this.renderedHoverParts.forEach((me) => {
										me.dispose();
									}),
										this.a.forEach((me) => {
											me.tokenSource.dispose(!0);
										});
								}),
							);
					}
					t(ne, ee, _) {
						return (
							ne.sort((0, i.$0b)((te) => te.ordinal, i.$_b)),
							ne.map((te) => {
								const Q = this.u(te, _);
								return ee.appendChild(Q.hoverElement), Q;
							})
						);
					}
					u(ne, ee) {
						const _ = this.v(ne, ee),
							te = _.hoverElement,
							Q = ne.source,
							Z = new C.$Zc();
						if ((Z.add(_), !Q)) return new K(ne, te, Z);
						const se = Q.supportsVerbosityAction(
								o.HoverVerbosityAction.Increase,
							),
							re = Q.supportsVerbosityAction(o.HoverVerbosityAction.Decrease);
						if (!se && !re) return new K(ne, te, Z);
						const le = F("div.verbosity-actions");
						return (
							te.prepend(le),
							Z.add(this.y(le, o.HoverVerbosityAction.Increase, se)),
							Z.add(this.y(le, o.HoverVerbosityAction.Decrease, re)),
							new K(ne, te, Z)
						);
					}
					v(ne, ee) {
						const _ = document.createElement("div"),
							te = F("div.hover-row");
						_.appendChild(te), (te.tabIndex = 0);
						const Q = X(this.f, ne, this.g, this.h, ee);
						return (
							te.appendChild(Q.hoverElement),
							this.l.getValue(z.$IW) && !1 && this.w(_, ne, ee),
							{
								hoverPart: ne,
								hoverElement: _,
								dispose: () => {
									Q.dispose();
								},
							}
						);
					}
					async w(ne, ee, _) {
						const te = this.f.getModel();
						if (!te) return;
						const Q = await this.x(
							this.f,
							3,
							ee.range.getStartPosition(),
							this.q,
						);
						if (Q.length > 0) {
							const Z = F("div.fix-buttons-container");
							ne.appendChild(Z);
							const se = F("div.fix-buttons-row");
							Z.appendChild(se);
							const re = (0, k.$fhc)(
								"Add to Composer",
								"edit",
								!0,
								this.m,
								this.o,
								this.p,
								"",
								te.uri.toString(),
								ee.range,
							);
							se.appendChild(re);
							const le = (ae, pe, $e, ye, ue, fe) => {
								const me = new U.$Yh(() => {
									(ae.textContent = ye),
										(ae.style.opacity = "0.5"),
										(ae.style.pointerEvents = "none");
								}, 500);
								return async (ve) => {
									ve.preventDefault(), ve.stopPropagation();
									const be = ve.ctrlKey || ve.metaKey ? $e : pe;
									me.schedule();
									try {
										await this.i.executeCommand(
											be,
											{
												locationLinks: Q,
												positionOverride: ee.range.getStartPosition(),
												uri: te.uri,
											},
											fe ? "chat" : void 0,
										);
									} finally {
										me.cancel(),
											(ae.textContent = ue),
											(ae.style.opacity = "1"),
											(ae.style.pointerEvents = "auto");
									}
								};
							};
							if (
								((re.onclick = le(
									re,
									L.ADD_SYMBOL_TO_CURRENT_COMPOSER_ACTION_ID,
									L.ADD_SYMBOL_TO_NEW_COMPOSER_ACTION_ID,
									"Adding to Composer...",
									"Add to Composer",
									!1,
								)),
								this.r.applicationUserPersistentStorage.composerState
									.unification !== !0)
							) {
								const ae = (0, k.$fhc)(
									"Add to Chat",
									"chat",
									!1,
									this.m,
									this.o,
									this.p,
									"",
									te.uri.toString(),
									ee.range,
								);
								se.appendChild(ae),
									(ae.onclick = le(
										ae,
										L.ADD_SYMBOL_TO_CURRENT_COMPOSER_ACTION_ID,
										L.ADD_SYMBOL_TO_NEW_COMPOSER_ACTION_ID,
										"Adding to Chat...",
										"Add to Chat",
										!0,
									));
							}
							if (
								this.r.applicationUserPersistentStorage.composerState
									.unification !== !0
							) {
								const ae = F("div.fix-buttons-hint"),
									pe = A.$m ? "\u2318" : "Ctrl";
								(ae.textContent = `${pe}+click to add to new composer`),
									Z.appendChild(ae);
							} else Z.style.marginBottom = "5px";
							_();
						}
					}
					async x(ne, ee, _, te) {
						const Q = ne.getModel();
						return Q === null || _ === null
							? []
							: (
									await (0, O.$UOb)(() =>
										(0, R.$POb)(
											te.definitionProvider,
											Q,
											_,
											!1,
											w.CancellationToken.None,
										),
									)
								).slice(0, ee);
					}
					y(ne, ee, _) {
						const te = new C.$Zc(),
							Q = ee === o.HoverVerbosityAction.Increase,
							Z = t.$fhb(ne, F(s.ThemeIcon.asCSSSelector(Q ? x : H)));
						Z.tabIndex = 0;
						const se = new S.$Vyb(
							"mouse",
							!1,
							{ target: ne, position: { hoverPosition: $.HoverPosition.LEFT } },
							this.l,
							this.k,
						);
						if ((te.add(this.k.setupManagedHover(se, Z, Y(this.j, ee))), !_))
							return Z.classList.add("disabled"), te;
						Z.classList.add("enabled");
						const re = () =>
							this.i.executeCommand(
								ee === o.HoverVerbosityAction.Increase ? m.$lCb : m.$oCb,
							);
						return (
							te.add(new $.$_hb(Z, re)),
							te.add(new $.$aib(Z, re, [v.KeyCode.Enter, v.KeyCode.Space])),
							te
						);
					}
					async updateMarkdownHoverPartVerbosityLevel(ne, ee, _ = !0) {
						const te = this.f.getModel();
						if (!te) return;
						const Q = this.C(ee),
							Z = Q?.hoverPart.source;
						if (!Q || !Z?.supportsVerbosityAction(ne)) return;
						const se = await this.z(Z, te, ne);
						if (!se) return;
						const re = new V(se, Z.hoverProvider, Z.hoverPosition),
							le = Q.hoverPart,
							oe = new q(
								this.c,
								le.range,
								se.contents,
								le.isBeforeContent,
								le.ordinal,
								re,
							),
							ae = this.u(oe, this.s);
						return (
							this.A(ee, ae, oe),
							_ && this.B(ee),
							{ hoverPart: oe, hoverElement: ae.hoverElement }
						);
					}
					getAccessibleContent(ne) {
						const ee = this.renderedHoverParts.findIndex(
							(Z) => Z.hoverPart === ne,
						);
						if (ee === -1) return;
						const _ = this.C(ee);
						return _
							? _.hoverElement.innerText.replace(/[^\S\n\r]+/gu, " ")
							: void 0;
					}
					doesMarkdownHoverAtIndexSupportVerbosityAction(ne, ee) {
						const _ = this.C(ne),
							te = _?.hoverPart.source;
						return !(!_ || !te?.supportsVerbosityAction(ee));
					}
					async z(ne, ee, _) {
						let te = _ === o.HoverVerbosityAction.Increase ? 1 : -1;
						const Q = ne.hoverProvider,
							Z = this.a.get(Q);
						Z && (Z.tokenSource.cancel(), (te += Z.verbosityDelta));
						const se = new w.$Ce();
						this.a.set(Q, { verbosityDelta: te, tokenSource: se });
						const re = {
							verbosityRequest: { verbosityDelta: te, previousHover: ne.hover },
						};
						let le;
						try {
							le = await Promise.resolve(
								Q.provideHover(ee, ne.hoverPosition, se.token, re),
							);
						} catch (oe) {
							(0, l.$5)(oe);
						}
						return se.dispose(), this.a.delete(Q), le;
					}
					A(ne, ee, _) {
						if (ne >= this.renderedHoverParts.length || ne < 0) return;
						const te = this.renderedHoverParts[ne],
							Q = te.hoverElement,
							Z = ee.hoverElement,
							se = Array.from(Z.children);
						Q.replaceChildren(...se);
						const re = new K(_, Q, ee.disposables);
						Q.focus(), te.dispose(), (this.renderedHoverParts[ne] = re);
					}
					B(ne) {
						this.renderedHoverParts[ne].hoverElement.focus();
					}
					C(ne) {
						return this.renderedHoverParts[ne];
					}
					dispose() {
						this.b.dispose();
					}
				}
				function W(ie, ne, ee, _, te) {
					ne.sort((0, i.$0b)((Z) => Z.ordinal, i.$_b));
					const Q = [];
					for (const Z of ne) Q.push(X(ee, Z, _, te, ie.onContentsChanged));
					return new a.$4Bb(Q);
				}
				function X(ie, ne, ee, _, te) {
					const Q = new C.$Zc(),
						Z = F("div.hover-row"),
						se = F("div.hover-row-contents");
					Z.appendChild(se);
					const re = ne.contents;
					for (const oe of re) {
						if ((0, E.$dl)(oe)) continue;
						const ae = F("div.markdown-hover"),
							pe = t.$fhb(ae, F("div.hover-contents")),
							$e = Q.add(new d.$Qzb({ editor: ie }, ee, _));
						Q.add(
							$e.onDidRenderAsync(() => {
								(pe.className = "hover-contents code-hover-contents"), te();
							}),
						);
						const ye = Q.add($e.render(oe));
						pe.appendChild(ye.element), se.appendChild(ae);
					}
					return {
						hoverPart: ne,
						hoverElement: Z,
						dispose() {
							Q.dispose();
						},
					};
				}
				function Y(ie, ne) {
					switch (ne) {
						case o.HoverVerbosityAction.Increase: {
							const ee = ie.lookupKeybinding(m.$lCb);
							return ee
								? h.localize(1200, null, ee.getLabel())
								: h.localize(1201, null);
						}
						case o.HoverVerbosityAction.Decrease: {
							const ee = ie.lookupKeybinding(m.$oCb);
							return ee
								? h.localize(1202, null, ee.getLabel())
								: h.localize(1203, null);
						}
					}
				}
			},
		),
		