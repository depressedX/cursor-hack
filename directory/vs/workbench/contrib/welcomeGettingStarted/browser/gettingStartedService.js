import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../base/common/event.js';
import '../../../../platform/storage/common/storage.js';
import '../../../common/memento.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/userDataSync/common/userDataSync.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/network.js';
import '../../../../platform/extensionManagement/common/extensionManagement.js';
import '../common/gettingStartedContent.js';
import '../../../services/assignment/common/assignmentService.js';
import '../../../services/host/browser/host.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../base/common/linkedText.js';
import './gettingStartedExtensionPoint.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../base/common/path.js';
import '../../../../base/common/arrays.js';
import '../../../services/views/common/viewsService.js';
import '../../../../nls.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../services/extensions/common/workspaceContains.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../base/common/cancellation.js';
import '../../../services/extensionManagement/common/extensionManagement.js';
define(
			de[3850],
			he([
				1, 0, 5, 6, 21, 282, 11, 31, 8, 3, 150, 9, 19, 23, 119, 3723, 708, 87,
				10, 488, 3333, 20, 54, 24, 89, 4, 32, 1315, 25, 33, 157,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$DXc =
						e.$CXc =
						e.$BXc =
						e.$AXc =
						e.$zXc =
						e.$yXc =
						e.$xXc =
							void 0),
					(e.$xXc = new m.$5j("hasMultipleNewFileEntries", !1)),
					(e.$yXc = (0, t.$Mi)("walkthroughsService")),
					(e.$zXc = "workbench.welcomePage.hiddenCategories"),
					(e.$AXc = "workbench.welcomePage.walkthroughMetadata");
				const D = (0, S.localize)(11478, null),
					N = 7 * (24 * 60 * 60 * 1e3);
				let A = class extends r.$1c {
					constructor(F, x, H, q, V, G, K, J, W, X, Y, ie) {
						super(),
							(this.F = F),
							(this.G = x),
							(this.H = H),
							(this.I = q),
							(this.J = V),
							(this.L = G),
							(this.M = K),
							(this.N = J),
							(this.O = W),
							(this.P = X),
							(this.Q = Y),
							(this.R = ie),
							(this.b = new i.$re()),
							(this.onDidAddWalkthrough = this.b.event),
							(this.c = new i.$re()),
							(this.onDidRemoveWalkthrough = this.c.event),
							(this.g = new i.$re()),
							(this.onDidChangeWalkthrough = this.g.event),
							(this.h = new i.$re()),
							(this.onDidProgressStep = this.h.event),
							(this.n = new Set()),
							(this.q = new Map()),
							(this.r = new Map()),
							(this.t = new Map()),
							(this.u = new Set()),
							(this.w = new Set()),
							(this.y = new Set()),
							(this.z = new Set()),
							(this.C = new Map(
								JSON.parse(this.F.get(e.$AXc, w.StorageScope.PROFILE, "[]")),
							)),
							(this.j = new E.$eEb("gettingStartedService", this.F)),
							(this.m = this.j.getMemento(
								w.StorageScope.PROFILE,
								w.StorageTarget.USER,
							)),
							this.U(),
							e.$xXc.bindTo(this.J).set(!1),
							this.S();
					}
					S() {
						g.$vXc.forEach(async (F, x) => {
							this._registerWalkthrough({
								...F,
								icon: { type: "icon", icon: F.icon },
								order: g.$vXc.length - x,
								source: D,
								when: m.$Kj.deserialize(F.when) ?? m.$Kj.true(),
								steps: F.content.steps.map((H, q) => ({
									...H,
									completionEvents: H.completionEvents ?? [],
									description: (0, e.$CXc)(H.description),
									category: F.id,
									order: q,
									when: m.$Kj.deserialize(H.when) ?? m.$Kj.true(),
									media:
										H.media.type === "image"
											? {
													type: "image",
													altText: H.media.altText,
													path: U(H.media.path),
												}
											: H.media.type === "svg"
												? {
														type: "svg",
														altText: H.media.altText,
														path: (0, e.$DXc)(H.media.path).with({
															query: JSON.stringify({
																moduleId:
																	"vs/workbench/contrib/welcomeGettingStarted/common/media/" +
																	H.media.path,
															}),
														}),
													}
												: {
														type: "markdown",
														path: (0, e.$DXc)(H.media.path).with({
															query: JSON.stringify({
																moduleId:
																	"vs/workbench/contrib/welcomeGettingStarted/common/media/" +
																	H.media.path,
															}),
														}),
														base: c.$7g.asFileUri(
															"vs/workbench/contrib/welcomeGettingStarted/common/media/",
														),
														root: c.$7g.asFileUri(
															"vs/workbench/contrib/welcomeGettingStarted/common/media/",
														),
													},
								})),
							});
						}),
							s.$wXc.setHandler((F, { added: x, removed: H }) => {
								x.map((q) => this.W(q.description)),
									H.map((q) => this.X(q.description));
							});
					}
					U() {
						this.D(
							this.G.onDidExecuteCommand((F) =>
								this.progressByEvent(`onCommand:${F.commandId}`),
							),
						),
							this.N.getInstalled().then((F) => {
								F.forEach((x) =>
									this.progressByEvent(
										`extensionInstalled:${x.identifier.id.toLowerCase()}`,
									),
								);
							}),
							this.D(
								this.N.onDidInstallExtensions((F) => {
									for (const x of F)
										x?.context?.[n.$up] ||
											x?.context?.[n.$wp] ||
											this.u.add(x.identifier.id.toLowerCase()),
											this.progressByEvent(
												`extensionInstalled:${x.identifier.id.toLowerCase()}`,
											);
								}),
							),
							this.D(
								this.J.onDidChangeContext((F) => {
									F.affectsSome(this.z) &&
										this.y.forEach((x) => {
											F.affectsSome(new Set(x.keys())) &&
												this.J.contextMatchesRules(x) &&
												this.progressByEvent("onContext:" + x.serialize());
										});
								}),
							),
							this.D(
								this.P.onDidChangeViewVisibility((F) => {
									F.visible && this.progressByEvent("onView:" + F.id);
								}),
							),
							this.D(
								this.M.onDidChangeConfiguration((F) => {
									F.affectedKeys.forEach((x) => {
										this.progressByEvent("onSettingChanged:" + x);
									});
								}),
							),
							this.L.isEnabled() &&
								this.progressByEvent("onEvent:sync-enabled"),
							this.D(
								this.L.onDidChangeEnablement(() => {
									this.L.isEnabled() &&
										this.progressByEvent("onEvent:sync-enabled");
								}),
							);
					}
					markWalkthroughOpened(F) {
						const x = this.r.get(F),
							H = this.C.get(F);
						H &&
							x &&
							this.C.set(F, {
								...H,
								manaullyOpened: !0,
								stepIDs: x.steps.map((q) => q.id),
							}),
							this.F.store(
								e.$AXc,
								JSON.stringify([...this.C.entries()]),
								w.StorageScope.PROFILE,
								w.StorageTarget.USER,
							);
					}
					async W(F) {
						const x = (K) =>
								K.startsWith("https://")
									? a.URI.parse(K, !0)
									: c.$7g.uriToFileUri((0, h.$nh)(F.extensionLocation, K)),
							H = (K) => {
								const J = (W) =>
									W.startsWith("https://")
										? a.URI.parse(W, !0)
										: c.$7g.uriToBrowserUri((0, h.$nh)(F.extensionLocation, W));
								if (typeof K == "string") {
									const W = J(K);
									return { hcDark: W, hcLight: W, dark: W, light: W };
								} else
									return {
										hcDark: J(K.hc),
										hcLight: J(K.hcLight ?? K.light),
										light: J(K.light),
										dark: J(K.dark),
									};
							};
						if (!F.contributes?.walkthroughs?.length) return;
						let q,
							V = Math.min();
						await Promise.all(
							F.contributes?.walkthroughs?.map(async (K, J) => {
								const W = F.identifier.value + "#" + K.id,
									X = !this.C.get(W);
								X &&
									this.C.set(W, {
										firstSeen: +new Date(),
										stepIDs: K.steps?.map((te) => te.id) ?? [],
										manaullyOpened: !1,
									});
								const Y = await Promise.race([
									this.R?.getTreatment(
										`gettingStarted.overrideCategory.${F.identifier.value + "." + K.id}.when`,
									),
									new Promise((te) => setTimeout(() => te(K.when), 5e3)),
								]);
								this.u.has(F.identifier.value.toLowerCase()) &&
									this.J.contextMatchesRules(
										m.$Kj.deserialize(Y ?? K.when) ?? m.$Kj.true(),
									) &&
									(this.u.delete(F.identifier.value.toLowerCase()),
									J < V && X && ((q = W), (V = J)));
								const ie = (K.steps ?? []).map((te, Q) => {
									const Z = (0, e.$CXc)(te.description || ""),
										se = F.identifier.value + "#" + K.id + "#" + te.id;
									let re;
									if (!te.media)
										throw Error(
											"missing media in walkthrough step: " +
												K.id +
												"@" +
												te.id,
										);
									if (te.media.image) {
										const le = te.media.altText;
										le === void 0 &&
											console.error(
												"Walkthrough item:",
												se,
												"is missing altText for its media element.",
											),
											(re = {
												type: "image",
												altText: le,
												path: H(te.media.image),
											});
									} else if (te.media.markdown)
										re = {
											type: "markdown",
											path: x(te.media.markdown),
											base: x((0, y.$rc)(te.media.markdown)),
											root: c.$7g.uriToFileUri(F.extensionLocation),
										};
									else if (te.media.svg)
										re = {
											type: "svg",
											path: x(te.media.svg),
											altText: te.media.svg,
										};
									else
										throw new Error(
											"Unknown walkthrough format detected for " + se,
										);
									return {
										description: Z,
										media: re,
										completionEvents:
											te.completionEvents?.filter(
												(le) => typeof le == "string",
											) ?? [],
										id: se,
										title: te.title,
										when: m.$Kj.deserialize(te.when) ?? m.$Kj.true(),
										category: W,
										order: Q,
									};
								});
								let ne = !1;
								if (K.featuredFor) {
									const te = this.I.getWorkspace().folders.map((Z) => Z.uri),
										Q = new k.$Ce();
									setTimeout(() => Q.cancel(), 2e3),
										(ne = await this.H.invokeFunction((Z) =>
											(0, T.$7oc)(Z, te, K.featuredFor, Q.token),
										));
								}
								const ee = K.icon ?? F.icon,
									_ = {
										description: K.description,
										title: K.title,
										id: W,
										isFeatured: ne,
										source: F.displayName ?? F.name,
										order: 0,
										steps: ie,
										icon: {
											type: "image",
											path: ee
												? c.$7g
														.uriToBrowserUri(
															(0, h.$nh)(F.extensionLocation, ee),
														)
														.toString(!0)
												: L.$FQb,
										},
										when: m.$Kj.deserialize(Y ?? K.when) ?? m.$Kj.true(),
									};
								this._registerWalkthrough(_), this.b.fire(this.Y(_));
							}),
						),
							this.F.store(
								e.$AXc,
								JSON.stringify([...this.C.entries()]),
								w.StorageScope.PROFILE,
								w.StorageTarget.USER,
							),
							(await this.O.hadLastFocus()) &&
								q &&
								this.M.getValue(
									"workbench.welcomePage.walkthroughs.openOnInstall",
								) &&
								(this.Q.publicLog2("gettingStarted.didAutoOpenWalkthrough", {
									id: q,
								}),
								this.G.executeCommand(
									"workbench.action.openWalkthrough",
									q,
									!0,
								));
					}
					X(F) {
						F.contributes?.walkthroughs?.length &&
							F.contributes?.walkthroughs?.forEach((x) => {
								const H = F.identifier.value + "#" + x.id;
								x.steps.forEach((q) => {
									const V = F.identifier.value + "#" + x.id + "#" + q.id;
									this.t.delete(V);
								}),
									this.r.delete(H),
									this.c.fire(H);
							});
					}
					getWalkthrough(F) {
						const x = this.r.get(F);
						if (!x) throw Error("Trying to get unknown walkthrough: " + F);
						return this.Y(x);
					}
					getWalkthroughs() {
						return [...this.r.values()]
							.map((H) => ({
								...H,
								content: { type: "steps", steps: H.steps },
							}))
							.filter(
								(H) => H.content.type !== "steps" || H.content.steps.length,
							)
							.map((H) => this.Y(H));
					}
					Y(F) {
						const x = F.steps.map((Y) => this.Z(Y)),
							H = this.C.get(F.id)?.manaullyOpened,
							q = this.C.get(F.id)?.firstSeen,
							V = q && q > +new Date() - N,
							G = this.C.get(F.id)?.stepIDs,
							K = this.r.get(F.id);
						if (!K) throw Error("Could not find walkthrough with id " + F.id);
						const J = K.steps.map((Y) => Y.id),
							W =
								G && (J.length !== G.length || J.some((Y, ie) => Y !== G[ie]));
						let X = 0;
						if (q) {
							const ie = +new Date() - q;
							X = Math.max(0, (N - ie) / N);
						}
						return {
							...F,
							recencyBonus: X,
							steps: x,
							newItems: !!W,
							newEntry: !!(V && !H),
						};
					}
					Z(F) {
						return { ...F, done: !1, ...this.m[F.id] };
					}
					progressStep(F) {
						const x = this.m[F];
						if (!x || x.done !== !0) {
							(this.m[F] = { done: !0 }), this.j.saveMemento();
							const H = this.bb(F);
							if (!H) throw Error("Tried to progress unknown step");
							this.h.fire(this.Z(H));
						}
					}
					deprogressStep(F) {
						delete this.m[F], this.j.saveMemento();
						const x = this.bb(F);
						this.h.fire(this.Z(x));
					}
					progressByEvent(F) {
						this.n.has(F) ||
							(this.n.add(F),
							this.q.get(F)?.forEach((x) => this.progressStep(x)));
					}
					registerWalkthrough(F) {
						this._registerWalkthrough({
							...F,
							steps: F.steps.map((x) => ({
								...x,
								description: (0, e.$CXc)(x.description),
							})),
						});
					}
					_registerWalkthrough(F) {
						if (this.r.get(F.id)) {
							console.error(
								`Skipping attempt to overwrite walkthrough. (${F.id})`,
							);
							return;
						}
						this.r.set(F.id, F),
							F.steps.forEach((H) => {
								if (this.t.has(H.id))
									throw Error(
										"Attempting to register step with id " +
											H.id +
											" twice. Second is dropped.",
									);
								this.t.set(H.id, H),
									H.when.keys().forEach((q) => this.w.add(q)),
									this.$(H);
							}),
							F.when.keys().forEach((H) => this.w.add(H));
					}
					$(F) {
						if (F.doneOn) {
							console.error(
								"wakthrough step",
								F,
								"uses deprecated 'doneOn' property. Adopt 'completionEvents' to silence this warning",
							);
							return;
						}
						F.completionEvents.length ||
							(F.completionEvents = (0, $.$Lb)(
								F.description
									.filter((x) => x.nodes.length === 1)
									.flatMap((x) =>
										x.nodes
											.filter((H) => typeof H != "string")
											.map(({ href: H }) => {
												if (H.startsWith("command:"))
													return (
														"onCommand:" +
														H.slice(
															8,
															H.includes("?") ? H.indexOf("?") : void 0,
														)
													);
												if (H.startsWith("https://") || H.startsWith("http://"))
													return "onLink:" + H;
											}),
									),
							)),
							F.completionEvents.length ||
								F.completionEvents.push("stepSelected");
						for (let x of F.completionEvents) {
							const [H, q, V] = /^([^:]*):?(.*)$/.exec(x) ?? [];
							if (!q) {
								console.error(
									`Unknown completionEvent ${x} when registering step ${F.id}`,
								);
								continue;
							}
							switch (q) {
								case "onLink":
								case "onEvent":
								case "onView":
								case "onSettingChanged":
									break;
								case "onContext": {
									const G = m.$Kj.deserialize(V);
									G
										? (this.y.add(G),
											G.keys().forEach((K) => this.z.add(K)),
											(x = q + ":" + G.serialize()),
											this.J.contextMatchesRules(G) && this.n.add(x))
										: console.error(
												"Unable to parse context key expression:",
												G,
												"in walkthrough step",
												F.id,
											);
									break;
								}
								case "onStepSelected":
								case "stepSelected":
									x = "stepSelected:" + F.id;
									break;
								case "onCommand":
									x = q + ":" + V.replace(/^toSide:/, "");
									break;
								case "onExtensionInstalled":
								case "extensionInstalled":
									x = "extensionInstalled:" + V.toLowerCase();
									break;
								default:
									console.error(
										`Unknown completionEvent ${x} when registering step ${F.id}`,
									);
									continue;
							}
							this.ab(x, F);
						}
					}
					ab(F, x) {
						this.q.has(F) || this.q.set(F, new Set()), this.q.get(F)?.add(x.id);
					}
					bb(F) {
						const x = this.t.get(F);
						if (!x)
							throw Error(
								"Attempting to access step which does not exist in registry " +
									F,
							);
						return x;
					}
				};
				(e.$BXc = A),
					(e.$BXc = A =
						Ne(
							[
								j(0, w.$lq),
								j(1, d.$ek),
								j(2, t.$Li),
								j(3, P.$Vi),
								j(4, m.$6j),
								j(5, u.$4Rb),
								j(6, f.$gj),
								j(7, n.$Hp),
								j(8, o.$asb),
								j(9, v.$HMb),
								j(10, I.$km),
								j(11, p.$h4b),
							],
							A,
						));
				const R = (z) =>
					z
						.split(`
`)
						.filter((F) => F)
						.map((F) => (0, b.$Zpb)(F));
				e.$CXc = R;
				const O = (z) =>
					z.startsWith("https://")
						? a.URI.parse(z, !0)
						: c.$7g.asFileUri(
								`vs/workbench/contrib/welcomeGettingStarted/common/media/${z}`,
							);
				e.$DXc = O;
				const B = (z) =>
						z.startsWith("https://")
							? a.URI.parse(z, !0)
							: c.$7g.asBrowserUri(
									`vs/workbench/contrib/welcomeGettingStarted/common/media/${z}`,
								),
					U = (z) => {
						if (typeof z == "string") {
							const F = B(z);
							return { hcDark: F, hcLight: F, dark: F, light: F };
						} else
							return {
								hcDark: B(z.hc),
								hcLight: B(z.hcLight ?? z.light),
								light: B(z.light),
								dark: B(z.dark),
							};
					};
				(0, C.$4X)(
					class extends C.$3X {
						constructor() {
							super({
								id: "resetGettingStartedProgress",
								category: (0, S.localize2)(11479, "Developer"),
								title: (0, S.localize2)(
									11480,
									"Reset Welcome Page Walkthrough Progress",
								),
								f1: !0,
								metadata: {
									description: (0, S.localize2)(
										11481,
										"Reset the progress of all Walkthrough steps on the Welcome Page to make them appear as if they are being viewed for the first time, providing a fresh start to the getting started experience.",
									),
								},
							});
						}
						run(z) {
							const F = z.get(e.$yXc),
								x = z.get(w.$lq);
							x.store(
								e.$zXc,
								JSON.stringify([]),
								w.StorageScope.PROFILE,
								w.StorageTarget.USER,
							),
								x.store(
									e.$AXc,
									JSON.stringify([]),
									w.StorageScope.PROFILE,
									w.StorageTarget.USER,
								);
							const H = new E.$eEb("gettingStartedService", z.get(w.$lq)),
								q = H.getMemento(w.StorageScope.PROFILE, w.StorageTarget.USER);
							for (const V in q)
								if (Object.prototype.hasOwnProperty.call(q, V))
									try {
										F.deprogressStep(V);
									} catch (G) {
										console.error(G);
									}
							H.saveMemento();
						}
					},
				),
					(0, l.$lK)(e.$yXc, A, l.InstantiationType.Delayed);
			},
		),
		