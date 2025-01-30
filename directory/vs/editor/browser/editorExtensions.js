import '../../../require.js';
import '../../../exports.js';
import '../../nls.js';
import '../../base/common/uri.js';
import './services/codeEditorService.js';
import '../common/core/position.js';
import '../common/services/model.js';
import '../common/services/resolverService.js';
import '../../platform/actions/common/actions.js';
import '../../platform/commands/common/commands.js';
import '../../platform/contextkey/common/contextkey.js';
import '../../platform/instantiation/common/instantiation.js';
import '../../platform/keybinding/common/keybindingsRegistry.js';
import '../../platform/registry/common/platform.js';
import '../../platform/telemetry/common/telemetry.js';
import '../../base/common/types.js';
import '../../base/common/keyCodes.js';
import '../../platform/log/common/log.js';
import '../../base/browser/dom.js';
define(
			de[46],
			he([1, 0, 4, 9, 65, 48, 67, 42, 11, 31, 8, 5, 43, 30, 32, 28, 27, 34, 7]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*uri*/,
 w /*codeEditorService*/,
 E /*position*/,
 C /*model*/,
 d /*resolverService*/,
 m /*actions*/,
 r /*commands*/,
 u /*contextkey*/,
 a /*instantiation*/,
 h /*keybindingsRegistry*/,
 c /*platform*/,
 n /*telemetry*/,
 g /*types*/,
 p /*keyCodes*/,
 o /*log*/,
 f /*dom*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$utb =
						e.$ttb =
						e.$stb =
						e.EditorExtensionsRegistry =
						e.$ktb =
						e.$jtb =
						e.$itb =
						e.$htb =
						e.$gtb =
						e.$ftb =
						e.$etb =
						e.EditorContributionInstantiation =
							void 0),
					(e.$ltb = T),
					(e.$mtb = P),
					(e.$ntb = k),
					(e.$otb = L),
					(e.$ptb = D),
					(e.$qtb = M),
					(e.$rtb = N),
					(t = mt(t));
				var b;
				(function (U) {
					(U[(U.Eager = 0)] = "Eager"),
						(U[(U.AfterFirstRender = 1)] = "AfterFirstRender"),
						(U[(U.BeforeFirstInteraction = 2)] = "BeforeFirstInteraction"),
						(U[(U.Eventually = 3)] = "Eventually"),
						(U[(U.Lazy = 4)] = "Lazy");
				})(b || (e.EditorContributionInstantiation = b = {}));
				class s {
					constructor(z) {
						(this.id = z.id),
							(this.precondition = z.precondition),
							(this.f = z.kbOpts),
							(this.g = z.menuOpts),
							(this.metadata = z.metadata);
					}
					register() {
						if (
							(Array.isArray(this.g)
								? this.g.forEach(this.q, this)
								: this.g && this.q(this.g),
							this.f)
						) {
							const z = Array.isArray(this.f) ? this.f : [this.f];
							for (const F of z) {
								let x = F.kbExpr;
								this.precondition &&
									(x
										? (x = u.$Kj.and(x, this.precondition))
										: (x = this.precondition));
								const H = {
									id: this.id,
									weight: F.weight,
									args: F.args,
									when: x,
									primary: F.primary,
									secondary: F.secondary,
									win: F.win,
									linux: F.linux,
									mac: F.mac,
								};
								h.$TX.registerKeybindingRule(H);
							}
						}
						r.$fk.registerCommand({
							id: this.id,
							handler: (z, F) => this.runCommand(z, F),
							metadata: this.metadata,
						});
					}
					q(z) {
						m.$ZX.appendMenuItem(z.menuId, {
							group: z.group,
							command: {
								id: this.id,
								title: z.title,
								icon: z.icon,
								precondition: this.precondition,
							},
							when: z.when,
							order: z.order,
						});
					}
				}
				e.$etb = s;
				class l extends s {
					constructor() {
						super(...arguments), (this.d = []);
					}
					addImplementation(z, F, x, H) {
						return (
							this.d.push({ priority: z, name: F, implementation: x, when: H }),
							this.d.sort((q, V) => V.priority - q.priority),
							{
								dispose: () => {
									for (let q = 0; q < this.d.length; q++)
										if (this.d[q].implementation === x) {
											this.d.splice(q, 1);
											return;
										}
								},
							}
						);
					}
					runCommand(z, F) {
						const x = z.get(o.$ik),
							H = z.get(u.$6j);
						x.trace(
							`Executing Command '${this.id}' which has ${this.d.length} bound.`,
						);
						for (const q of this.d) {
							if (q.when) {
								const G = H.getContext((0, f.$Jgb)());
								if (!q.when.evaluate(G)) continue;
							}
							const V = q.implementation(z, F);
							if (V)
								return (
									x.trace(`Command '${this.id}' was handled by '${q.name}'.`),
									typeof V == "boolean" ? void 0 : V
								);
						}
						x.trace(
							`The Command '${this.id}' was not handled by any implementation.`,
						);
					}
				}
				e.$ftb = l;
				class y extends s {
					constructor(z, F) {
						super(F), (this.d = z);
					}
					runCommand(z, F) {
						return this.d.runCommand(z, F);
					}
				}
				e.$gtb = y;
				class $ extends s {
					static bindToContribution(z) {
						return class extends $ {
							constructor(x) {
								super(x), (this.d = x.handler);
							}
							runEditorCommand(x, H, q) {
								const V = z(H);
								V && this.d(V, q);
							}
						};
					}
					static runEditorCommand(z, F, x, H) {
						const q = z.get(w.$dtb),
							V = q.getFocusedCodeEditor() || q.getActiveCodeEditor();
						if (V)
							return V.invokeWithinContext((G) => {
								if (G.get(u.$6j).contextMatchesRules(x ?? void 0))
									return H(G, V, F);
							});
					}
					runCommand(z, F) {
						return $.runEditorCommand(z, F, this.precondition, (x, H, q) =>
							this.runEditorCommand(x, H, q),
						);
					}
				}
				e.$htb = $;
				class v extends $ {
					static u(z) {
						let F;
						Array.isArray(z.menuOpts)
							? (F = z.menuOpts)
							: z.menuOpts
								? (F = [z.menuOpts])
								: (F = []);
						function x(H) {
							return (
								H.menuId || (H.menuId = m.$XX.EditorContext),
								H.title || (H.title = z.label),
								(H.when = u.$Kj.and(z.precondition, H.when)),
								H
							);
						}
						return (
							Array.isArray(z.contextMenuOpts)
								? F.push(...z.contextMenuOpts.map(x))
								: z.contextMenuOpts && F.push(x(z.contextMenuOpts)),
							(z.menuOpts = F),
							z
						);
					}
					constructor(z) {
						super(v.u(z)), (this.label = z.label), (this.alias = z.alias);
					}
					runEditorCommand(z, F, x) {
						return this.w(z, F), this.run(z, F, x || {});
					}
					w(z, F) {
						z.get(n.$km).publicLog2("editorActionInvoked", {
							name: this.label,
							id: this.id,
						});
					}
				}
				e.$itb = v;
				class S extends v {
					constructor() {
						super(...arguments), (this.d = []);
					}
					addImplementation(z, F) {
						return (
							this.d.push([z, F]),
							this.d.sort((x, H) => H[0] - x[0]),
							{
								dispose: () => {
									for (let x = 0; x < this.d.length; x++)
										if (this.d[x][1] === F) {
											this.d.splice(x, 1);
											return;
										}
								},
							}
						);
					}
					run(z, F, x) {
						for (const H of this.d) {
							const q = H[1](z, F, x);
							if (q) return typeof q == "boolean" ? void 0 : q;
						}
					}
				}
				e.$jtb = S;
				class I extends m.$3X {
					run(z, ...F) {
						const x = z.get(w.$dtb),
							H = x.getFocusedCodeEditor() || x.getActiveCodeEditor();
						if (H)
							return H.invokeWithinContext((q) => {
								const V = q.get(u.$6j),
									G = q.get(o.$ik);
								if (!V.contextMatchesRules(this.desc.precondition ?? void 0)) {
									G.debug(
										"[EditorAction2] NOT running command because its precondition is FALSE",
										this.desc.id,
										this.desc.precondition?.serialize(),
									);
									return;
								}
								return this.runEditorCommand(q, H, ...F);
							});
					}
				}
				e.$ktb = I;
				function T(U, z) {
					r.$fk.registerCommand(U, function (F, ...x) {
						const H = F.get(a.$Li),
							[q, V] = x;
						(0, g.$vg)(i.URI.isUri(q)), (0, g.$vg)(E.$hL.isIPosition(V));
						const G = F.get(C.$QO).getModel(q);
						if (G) {
							const K = E.$hL.lift(V);
							return H.invokeFunction(z, G, K, ...x.slice(2));
						}
						return F.get(d.$MO)
							.createModelReference(q)
							.then((K) =>
								new Promise((J, W) => {
									try {
										const X = H.invokeFunction(
											z,
											K.object.textEditorModel,
											E.$hL.lift(V),
											x.slice(2),
										);
										J(X);
									} catch (X) {
										W(X);
									}
								}).finally(() => {
									K.dispose();
								}),
							);
					});
				}
				function P(U) {
					return O.INSTANCE.registerEditorCommand(U), U;
				}
				function k(U) {
					const z = new U();
					return O.INSTANCE.registerEditorAction(z), z;
				}
				function L(U) {
					return O.INSTANCE.registerEditorAction(U), U;
				}
				function D(U) {
					O.INSTANCE.registerEditorAction(U);
				}
				function M(U, z, F) {
					O.INSTANCE.registerEditorContribution(U, z, F);
				}
				function N(U, z) {
					O.INSTANCE.registerDiffEditorContribution(U, z);
				}
				var A;
				(function (U) {
					function z(V) {
						return O.INSTANCE.getEditorCommand(V);
					}
					U.getEditorCommand = z;
					function F() {
						return O.INSTANCE.getEditorActions();
					}
					U.getEditorActions = F;
					function x() {
						return O.INSTANCE.getEditorContributions();
					}
					U.getEditorContributions = x;
					function H(V) {
						return O.INSTANCE.getEditorContributions().filter(
							(G) => V.indexOf(G.id) >= 0,
						);
					}
					U.getSomeEditorContributions = H;
					function q() {
						return O.INSTANCE.getDiffEditorContributions();
					}
					U.getDiffEditorContributions = q;
				})(A || (e.EditorExtensionsRegistry = A = {}));
				const R = { EditorCommonContributions: "editor.contributions" };
				class O {
					static {
						this.INSTANCE = new O();
					}
					constructor() {
						(this.d = []),
							(this.e = []),
							(this.f = []),
							(this.g = Object.create(null));
					}
					registerEditorContribution(z, F, x) {
						this.d.push({ id: z, ctor: F, instantiation: x });
					}
					getEditorContributions() {
						return this.d.slice(0);
					}
					registerDiffEditorContribution(z, F) {
						this.e.push({ id: z, ctor: F });
					}
					getDiffEditorContributions() {
						return this.e.slice(0);
					}
					registerEditorAction(z) {
						z.register(), this.f.push(z);
					}
					getEditorActions() {
						return this.f;
					}
					registerEditorCommand(z) {
						z.register(), (this.g[z.id] = z);
					}
					getEditorCommand(z) {
						return this.g[z] || null;
					}
				}
				c.$Io.add(R.EditorCommonContributions, O.INSTANCE);
				function B(U) {
					return U.register(), U;
				}
				(e.$stb = B(
					new l({
						id: "undo",
						precondition: void 0,
						kbOpts: {
							weight: h.KeybindingWeight.EditorCore,
							primary: p.KeyMod.CtrlCmd | p.KeyCode.KeyZ,
						},
						menuOpts: [
							{
								menuId: m.$XX.MenubarEditMenu,
								group: "1_do",
								title: t.localize(181, null),
								order: 1,
							},
							{
								menuId: m.$XX.CommandPalette,
								group: "",
								title: t.localize(182, null),
								order: 1,
							},
						],
					}),
				)),
					B(new y(e.$stb, { id: "default:undo", precondition: void 0 })),
					(e.$ttb = B(
						new l({
							id: "redo",
							precondition: void 0,
							kbOpts: {
								weight: h.KeybindingWeight.EditorCore,
								primary: p.KeyMod.CtrlCmd | p.KeyCode.KeyY,
								secondary: [p.KeyMod.CtrlCmd | p.KeyMod.Shift | p.KeyCode.KeyZ],
								mac: {
									primary: p.KeyMod.CtrlCmd | p.KeyMod.Shift | p.KeyCode.KeyZ,
								},
							},
							menuOpts: [
								{
									menuId: m.$XX.MenubarEditMenu,
									group: "1_do",
									title: t.localize(183, null),
									order: 2,
								},
								{
									menuId: m.$XX.CommandPalette,
									group: "",
									title: t.localize(184, null),
									order: 1,
								},
							],
						}),
					)),
					B(new y(e.$ttb, { id: "default:redo", precondition: void 0 })),
					(e.$utb = B(
						new l({
							id: "editor.action.selectAll",
							precondition: void 0,
							kbOpts: {
								weight: h.KeybindingWeight.EditorCore,
								kbExpr: null,
								primary: p.KeyMod.CtrlCmd | p.KeyCode.KeyA,
							},
							menuOpts: [
								{
									menuId: m.$XX.MenubarSelectionMenu,
									group: "1_basic",
									title: t.localize(185, null),
									order: 1,
								},
								{
									menuId: m.$XX.CommandPalette,
									group: "",
									title: t.localize(186, null),
									order: 1,
								},
							],
						}),
					));
			},
		),
		