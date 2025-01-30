import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/async.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/map.js';
import '../../../../base/common/types.js';
import '../../../../base/common/uri.js';
import '../../../browser/editorBrowser.js';
import '../../../browser/editorDom.js';
import '../../../browser/stableEditorScroll.js';
import '../../../common/config/editorOptions.js';
import '../../../common/core/editOperation.js';
import '../../../common/core/range.js';
import '../../../common/languages.js';
import '../../../common/model.js';
import '../../../common/model/textModel.js';
import '../../../common/services/languageFeatureDebounce.js';
import '../../../common/services/languageFeatures.js';
import '../../../common/services/resolverService.js';
import '../../gotoSymbol/browser/link/clickLinkGesture.js';
import './inlayHints.js';
import './inlayHintsLocations.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/theme/common/themeService.js';
define(
			de[1316],
			he([
				1, 0, 7, 24, 15, 33, 29, 3, 59, 28, 9, 56, 777, 491, 38, 188, 17, 74,
				64, 122, 391, 69, 42, 766, 1177, 1867, 31, 20, 5, 40, 51, 35,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*arrays*/,
				w /*async*/,
				E /*cancellation*/,
				C /*errors*/,
				d /*lifecycle*/,
				m /*map*/,
				r /*types*/,
				u /*uri*/,
				a /*editorBrowser*/,
				h /*editorDom*/,
				c /*stableEditorScroll*/,
				n /*editorOptions*/,
				g /*editOperation*/,
				p /*range*/,
				o /*languages*/,
				f /*model*/,
				b /*textModel*/,
				s /*languageFeatureDebounce*/,
				l /*languageFeatures*/,
				y /*resolverService*/,
				$ /*clickLinkGesture*/,
				v /*inlayHints*/,
				S /*inlayHintsLocations*/,
				I /*commands*/,
				T /*extensions*/,
				P /*instantiation*/,
				k /*notification*/,
				L /*colorRegistry*/,
				D /*themeService*/,
) {
				"use strict";
				var M;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$rhc = e.$qhc = void 0),
					(o = mt(o)),
					(L = mt(L));
				class N {
					constructor() {
						this.a = new m.$Jc(50);
					}
					get(x) {
						const H = N.b(x);
						return this.a.get(H);
					}
					set(x, H) {
						const q = N.b(x);
						this.a.set(q, H);
					}
					static b(x) {
						return `${x.uri.toString()}/${x.getVersionId()}`;
					}
				}
				const A = (0, P.$Mi)("IInlayHintsCache");
				(0, T.$lK)(A, N, T.InstantiationType.Delayed);
				class R {
					constructor(x, H) {
						(this.item = x), (this.index = H);
					}
					get part() {
						const x = this.item.hint.label;
						return typeof x == "string" ? { label: x } : x[this.index];
					}
				}
				e.$qhc = R;
				class O {
					constructor(x, H) {
						(this.part = x), (this.hasTriggerModifier = H);
					}
				}
				var B;
				(function (F) {
					(F[(F.Normal = 0)] = "Normal"), (F[(F.Invisible = 1)] = "Invisible");
				})(B || (B = {}));
				let U = class {
					static {
						M = this;
					}
					static {
						this.ID = "editor.contrib.InlayHints";
					}
					static {
						this.a = 1500;
					}
					static {
						this.b = 43;
					}
					static get(x) {
						return x.getContribution(M.ID) ?? void 0;
					}
					constructor(x, H, q, V, G, K, J) {
						(this.m = x),
							(this.n = H),
							(this.o = V),
							(this.p = G),
							(this.q = K),
							(this.s = J),
							(this.c = new d.$Zc()),
							(this.f = new d.$Zc()),
							(this.h = new Map()),
							(this.j = new h.$oub(this.m)),
							(this.k = B.Normal),
							(this.g = q.for(H.inlayHintsProvider, "InlayHint", { min: 25 })),
							this.c.add(H.inlayHintsProvider.onDidChange(() => this.t())),
							this.c.add(x.onDidChangeModel(() => this.t())),
							this.c.add(x.onDidChangeModelLanguage(() => this.t())),
							this.c.add(
								x.onDidChangeConfiguration((W) => {
									W.hasChanged(n.EditorOption.inlayHints) && this.t();
								}),
							),
							this.t();
					}
					dispose() {
						this.f.dispose(), this.G(), this.c.dispose();
					}
					t() {
						this.f.clear(), this.G();
						const x = this.m.getOption(n.EditorOption.inlayHints);
						if (x.enabled === "off") return;
						const H = this.m.getModel();
						if (!H || !this.n.inlayHintsProvider.has(H)) return;
						if (x.enabled === "on") this.k = B.Normal;
						else {
							let J, W;
							x.enabled === "onUnlessPressed"
								? ((J = B.Normal), (W = B.Invisible))
								: ((J = B.Invisible), (W = B.Normal)),
								(this.k = J),
								this.f.add(
									t.$Fhb.getInstance().event((X) => {
										if (!this.m.hasModel()) return;
										const Y =
											X.altKey && X.ctrlKey && !(X.shiftKey || X.metaKey)
												? W
												: J;
										if (Y !== this.k) {
											this.k = Y;
											const ie = this.m.getModel(),
												ne = this.B(ie);
											this.D([ie.getFullModelRange()], ne), K.schedule(0);
										}
									}),
								);
						}
						const q = this.o.get(H);
						q && this.D([H.getFullModelRange()], q),
							this.f.add(
								(0, d.$Yc)(() => {
									H.isDisposed() || this.A(H);
								}),
							);
						let V;
						const G = new Set(),
							K = new w.$Yh(async () => {
								const J = Date.now();
								V?.dispose(!0), (V = new E.$Ce());
								const W = H.onWillDispose(() => V?.cancel());
								try {
									const X = V.token,
										Y = await v.$mhc.create(
											this.n.inlayHintsProvider,
											H,
											this.C(),
											X,
										);
									if (
										((K.delay = this.g.update(H, Date.now() - J)),
										X.isCancellationRequested)
									) {
										Y.dispose();
										return;
									}
									for (const ie of Y.provider)
										typeof ie.onDidChangeInlayHints == "function" &&
											!G.has(ie) &&
											(G.add(ie),
											this.f.add(
												ie.onDidChangeInlayHints(() => {
													K.isScheduled() || K.schedule();
												}),
											));
									this.f.add(Y), this.D(Y.ranges, Y.items), this.A(H);
								} catch (X) {
									(0, C.$4)(X);
								} finally {
									V.dispose(), W.dispose();
								}
							}, this.g.get(H));
						this.f.add(K),
							this.f.add((0, d.$Yc)(() => V?.dispose(!0))),
							K.schedule(0),
							this.f.add(
								this.m.onDidScrollChange((J) => {
									(J.scrollTopChanged || !K.isScheduled()) && K.schedule();
								}),
							),
							this.f.add(
								this.m.onDidChangeModelContent((J) => {
									V?.cancel();
									const W = Math.max(K.delay, 1250);
									K.schedule(W);
								}),
							),
							this.f.add(this.w(() => K.schedule(0))),
							this.f.add(this.u()),
							this.f.add(this.x());
					}
					u() {
						const x = new d.$Zc(),
							H = x.add(new $.$6Mb(this.m)),
							q = new d.$Zc();
						return (
							x.add(q),
							x.add(
								H.onMouseMoveOrRelevantKeyDown((V) => {
									const [G] = V,
										K = this.y(G),
										J = this.m.getModel();
									if (!K || !J) {
										q.clear();
										return;
									}
									const W = new E.$Ce();
									q.add((0, d.$Yc)(() => W.dispose(!0))),
										K.item.resolve(W.token),
										(this.l =
											K.part.command || K.part.location
												? new O(K, G.hasTriggerModifier)
												: void 0);
									const X = J.validatePosition(K.item.hint.position).lineNumber,
										Y = new p.$iL(X, 1, X, J.getLineMaxColumn(X)),
										ie = this.v(Y);
									this.D([Y], ie),
										q.add(
											(0, d.$Yc)(() => {
												(this.l = void 0), this.D([Y], ie);
											}),
										);
								}),
							),
							x.add(H.onCancel(() => q.clear())),
							x.add(
								H.onExecute(async (V) => {
									const G = this.y(V);
									if (G) {
										const K = G.part;
										K.location
											? this.s.invokeFunction(S.$phc, V, this.m, K.location)
											: o.Command.is(K.command) &&
												(await this.z(K.command, G.item));
									}
								}),
							),
							x
						);
					}
					v(x) {
						const H = new Set();
						for (const q of this.h.values())
							x.containsRange(q.item.anchor.range) && H.add(q.item);
						return Array.from(H);
					}
					w(x) {
						return this.m.onMouseUp(async (H) => {
							if (H.event.detail !== 2) return;
							const q = this.y(H);
							if (
								q &&
								(H.event.preventDefault(),
								await q.item.resolve(E.CancellationToken.None),
								(0, i.$Pb)(q.item.hint.textEdits))
							) {
								const V = q.item.hint.textEdits.map((G) =>
									g.$jL.replace(p.$iL.lift(G.range), G.text),
								);
								this.m.executeEdits("inlayHint.default", V), x();
							}
						});
					}
					x() {
						return this.m.onContextMenu(async (x) => {
							if (!(0, t.$Ygb)(x.event.target)) return;
							const H = this.y(x);
							H &&
								(await this.s.invokeFunction(
									S.$ohc,
									this.m,
									x.event.target,
									H,
								));
						});
					}
					y(x) {
						if (x.target.type !== a.MouseTargetType.CONTENT_TEXT) return;
						const H = x.target.detail.injectedText?.options;
						if (H instanceof b.$dY && H?.attachedData instanceof R)
							return H.attachedData;
					}
					async z(x, H) {
						try {
							await this.p.executeCommand(x.id, ...(x.arguments ?? []));
						} catch (q) {
							this.q.notify({
								severity: k.Severity.Error,
								source: H.provider.displayName,
								message: q,
							});
						}
					}
					A(x) {
						const H = this.B(x);
						this.o.set(x, H);
					}
					B(x) {
						const H = new Map();
						for (const [q, V] of this.h) {
							if (H.has(V.item)) continue;
							const G = x.getDecorationRange(q);
							if (G) {
								const K = new v.$khc(G, V.item.anchor.direction),
									J = V.item.with({ anchor: K });
								H.set(V.item, J);
							}
						}
						return Array.from(H.values());
					}
					C() {
						const H = this.m.getModel(),
							q = this.m.getVisibleRangesPlusViewportAboveBelow(),
							V = [];
						for (const G of q.sort(p.$iL.compareRangesUsingStarts)) {
							const K = H.validateRange(
								new p.$iL(
									G.startLineNumber - 30,
									G.startColumn,
									G.endLineNumber + 30,
									G.endColumn,
								),
							);
							V.length === 0 ||
							!p.$iL.areIntersectingOrTouching(V[V.length - 1], K)
								? V.push(K)
								: (V[V.length - 1] = p.$iL.plusRange(V[V.length - 1], K));
						}
						return V;
					}
					D(x, H) {
						const q = [],
							V = (_, te, Q, Z, se) => {
								const re = {
									content: Q,
									inlineClassNameAffectsLetterSpacing: !0,
									inlineClassName: te.className,
									cursorStops: Z,
									attachedData: se,
								};
								q.push({
									item: _,
									classNameRef: te,
									decoration: {
										range: _.anchor.range,
										options: {
											description: "InlayHint",
											showIfCollapsed: _.anchor.range.isEmpty(),
											collapseOnReplaceEdit: !_.anchor.range.isEmpty(),
											stickiness:
												f.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
											[_.anchor.direction]: this.k === B.Normal ? re : void 0,
										},
									},
								});
							},
							G = (_, te) => {
								const Q = this.j.createClassNameRef({
									width: `${(K / 3) | 0}px`,
									display: "inline-block",
								});
								V(
									_,
									Q,
									"\u200A",
									te
										? f.InjectedTextCursorStops.Right
										: f.InjectedTextCursorStops.None,
								);
							},
							{
								fontSize: K,
								fontFamily: J,
								padding: W,
								isUniform: X,
							} = this.F(),
							Y = "--code-editorInlayHintsFontFamily";
						this.m.getContainerDomNode().style.setProperty(Y, J);
						let ie = { line: 0, totalLen: 0 };
						for (const _ of H) {
							if (
								(ie.line !== _.anchor.range.startLineNumber &&
									(ie = { line: _.anchor.range.startLineNumber, totalLen: 0 }),
								ie.totalLen > M.b)
							)
								continue;
							_.hint.paddingLeft && G(_, !1);
							const te =
								typeof _.hint.label == "string"
									? [{ label: _.hint.label }]
									: _.hint.label;
							for (let Q = 0; Q < te.length; Q++) {
								const Z = te[Q],
									se = Q === 0,
									re = Q === te.length - 1,
									le = {
										fontSize: `${K}px`,
										fontFamily: `var(${Y}), ${n.EDITOR_FONT_DEFAULTS.fontFamily}`,
										verticalAlign: X ? "baseline" : "middle",
										unicodeBidi: "isolate",
									};
								(0, i.$Pb)(_.hint.textEdits) && (le.cursor = "default"),
									this.E(le, _.hint),
									(Z.command || Z.location) &&
										this.l?.part.item === _ &&
										this.l.part.index === Q &&
										((le.textDecoration = "underline"),
										this.l.hasTriggerModifier &&
											((le.color = (0, D.$jP)(L.$qQ)),
											(le.cursor = "pointer"))),
									W &&
										(se && re
											? ((le.padding = `1px ${Math.max(1, K / 4) | 0}px`),
												(le.borderRadius = `${(K / 4) | 0}px`))
											: se
												? ((le.padding = `1px 0 1px ${Math.max(1, K / 4) | 0}px`),
													(le.borderRadius = `${(K / 4) | 0}px 0 0 ${(K / 4) | 0}px`))
												: re
													? ((le.padding = `1px ${Math.max(1, K / 4) | 0}px 1px 0`),
														(le.borderRadius = `0 ${(K / 4) | 0}px ${(K / 4) | 0}px 0`))
													: (le.padding = "1px 0 1px 0"));
								let oe = Z.label;
								ie.totalLen += oe.length;
								let ae = !1;
								const pe = ie.totalLen - M.b;
								if (
									(pe > 0 && ((oe = oe.slice(0, -pe) + "\u2026"), (ae = !0)),
									V(
										_,
										this.j.createClassNameRef(le),
										z(oe),
										re && !_.hint.paddingRight
											? f.InjectedTextCursorStops.Right
											: f.InjectedTextCursorStops.None,
										new R(_, Q),
									),
									ae)
								)
									break;
							}
							if ((_.hint.paddingRight && G(_, !0), q.length > M.a)) break;
						}
						const ne = [];
						for (const [_, te] of this.h) {
							const Q = this.m.getModel()?.getDecorationRange(_);
							Q &&
								x.some((Z) => Z.containsRange(Q)) &&
								(ne.push(_), te.classNameRef.dispose(), this.h.delete(_));
						}
						const ee = c.$uwb.capture(this.m);
						this.m.changeDecorations((_) => {
							const te = _.deltaDecorations(
								ne,
								q.map((Q) => Q.decoration),
							);
							for (let Q = 0; Q < te.length; Q++) {
								const Z = q[Q];
								this.h.set(te[Q], Z);
							}
						}),
							ee.restore(this.m);
					}
					E(x, H) {
						H.kind === o.InlayHintKind.Parameter
							? ((x.backgroundColor = (0, D.$jP)(L.$OQ)),
								(x.color = (0, D.$jP)(L.$NQ)))
							: H.kind === o.InlayHintKind.Type
								? ((x.backgroundColor = (0, D.$jP)(L.$MQ)),
									(x.color = (0, D.$jP)(L.$LQ)))
								: ((x.backgroundColor = (0, D.$jP)(L.$KQ)),
									(x.color = (0, D.$jP)(L.$JQ)));
					}
					F() {
						const x = this.m.getOption(n.EditorOption.inlayHints),
							H = x.padding,
							q = this.m.getOption(n.EditorOption.fontSize),
							V = this.m.getOption(n.EditorOption.fontFamily);
						let G = x.fontSize;
						(!G || G < 5 || G > q) && (G = q);
						const K = x.fontFamily || V;
						return {
							fontSize: G,
							fontFamily: K,
							padding: H,
							isUniform: !H && K === V && G === q,
						};
					}
					G() {
						this.m.removeDecorations(Array.from(this.h.keys()));
						for (const x of this.h.values()) x.classNameRef.dispose();
						this.h.clear();
					}
					getInlayHintsForLine(x) {
						if (!this.m.hasModel()) return [];
						const H = new Set(),
							q = [];
						for (const V of this.m.getLineDecorations(x)) {
							const G = this.h.get(V.id);
							G && !H.has(G.item.hint) && (H.add(G.item.hint), q.push(G.item));
						}
						return q;
					}
				};
				(e.$rhc = U),
					(e.$rhc =
						U =
						M =
							Ne(
								[
									j(1, l.$k3),
									j(2, s.$PBb),
									j(3, A),
									j(4, I.$ek),
									j(5, k.$4N),
									j(6, P.$Li),
								],
								U,
							));
				function z(F) {
					return F.replace(/[ \t]/g, "\xA0");
				}
				I.$fk.registerCommand("_executeInlayHintProvider", async (F, ...x) => {
					const [H, q] = x;
					(0, r.$vg)(u.URI.isUri(H)), (0, r.$vg)(p.$iL.isIRange(q));
					const { inlayHintsProvider: V } = F.get(l.$k3),
						G = await F.get(y.$MO).createModelReference(H);
					try {
						const K = await v.$mhc.create(
								V,
								G.object.textEditorModel,
								[p.$iL.lift(q)],
								E.CancellationToken.None,
							),
							J = K.items.map((W) => W.hint);
						return setTimeout(() => K.dispose(), 0), J;
					} finally {
						G.dispose();
					}
				});
			},
		),
		