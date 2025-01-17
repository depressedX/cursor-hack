import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/cancellation.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/keyCodes.js';
import '../../../../../base/common/network.js';
import '../../../../../base/common/strings.js';
import '../../../../../base/common/themables.js';
import '../../../../../base/common/uri.js';
import '../../../../../editor/common/editorCommon.js';
import '../../../../../editor/contrib/quickAccess/browser/gotoSymbolQuickAccess.js';
import '../../../../../nls.js';
import '../../../../../platform/actions/common/actions.js';
import '../../../../../platform/commands/common/commands.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../../platform/quickinput/common/quickInput.js';
import './chatActions.js';
import '../chat.js';
import '../chatWidget.js';
import '../contrib/chatContextAttachments.js';
import '../../common/chatAgents.js';
import '../../common/chatContextKeys.js';
import '../../common/chatParserTypes.js';
import '../../common/chatVariables.js';
import '../../common/languageModelToolsService.js';
import '../../../search/browser/anythingQuickAccess.js';
import '../../../search/browser/symbolsQuickAccess.js';
import '../../../../services/editor/common/editorService.js';
define(
			de[4110],
			he([
				1, 0, 33, 14, 27, 23, 37, 26, 9, 98, 1667, 4, 11, 31, 8, 43, 63, 402,
				208, 481, 1355, 153, 207, 329, 503, 569, 721, 827, 18,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$FIc = k);
				function k() {
					(0, h.$4X)(M), (0, h.$4X)(L), (0, h.$4X)(D);
				}
				class L extends h.$3X {
					static {
						this.ID = "workbench.action.chat.attachFile";
					}
					constructor() {
						super({
							id: L.ID,
							title: (0, a.localize2)(4588, "Attach File"),
							category: o.$3Yb,
							f1: !1,
						});
					}
					async run(A, ...R) {
						const O = A.get(v.$D2),
							B = A.get(P.$IY),
							U = B.activeEditor?.resource;
						B.activeTextEditorControl?.getEditorType() ===
							r.EditorType.ICodeEditor &&
							U &&
							[
								E.Schemas.file,
								E.Schemas.vscodeRemote,
								E.Schemas.untitled,
							].includes(U.scheme) &&
							O.attachContext("file", U, l.ChatAgentLocation.Panel);
					}
				}
				class D extends h.$3X {
					static {
						this.ID = "workbench.action.chat.attachSelection";
					}
					constructor() {
						super({
							id: D.ID,
							title: (0, a.localize2)(4589, "Add Selection to Chat"),
							category: o.$3Yb,
							f1: !1,
						});
					}
					async run(A, ...R) {
						const O = A.get(v.$D2),
							B = A.get(P.$IY),
							U = B.activeTextEditorControl,
							z = B.activeEditor?.resource;
						if (
							B.activeTextEditorControl?.getEditorType() ===
								r.EditorType.ICodeEditor &&
							z &&
							[
								E.Schemas.file,
								E.Schemas.vscodeRemote,
								E.Schemas.untitled,
							].includes(z.scheme)
						) {
							const F = U?.getSelection();
							F &&
								O.attachContext(
									"file",
									{ uri: z, range: F },
									l.ChatAgentLocation.Panel,
								);
						}
					}
				}
				class M extends h.$3X {
					static {
						this.ID = "workbench.action.chat.attachContext";
					}
					static {
						this.c = n.$Kj.or(
							n.$Kj.and(y.$01.isEqualTo(l.ChatAgentLocation.Panel)),
							n.$Kj.and(
								y.$01.isEqualTo(l.ChatAgentLocation.Editor),
								n.$Kj.equals("config.chat.experimental.variables.editor", !0),
							),
							n.$Kj.and(
								y.$01.isEqualTo(l.ChatAgentLocation.Notebook),
								n.$Kj.equals("config.chat.experimental.variables.notebook", !0),
							),
							n.$Kj.and(
								y.$01.isEqualTo(l.ChatAgentLocation.Terminal),
								n.$Kj.equals("config.chat.experimental.variables.terminal", !0),
							),
						);
					}
					constructor() {
						super({
							id: M.ID,
							title: (0, a.localize2)(4590, "Attach Context"),
							icon: i.$ak.attach,
							category: o.$3Yb,
							precondition: M.c,
							keybinding: {
								when: y.$31,
								primary: w.KeyMod.CtrlCmd | w.KeyCode.Slash,
								weight: g.KeybindingWeight.EditorContrib,
							},
							menu: [{ when: M.c, id: h.$XX.ChatExecute, group: "navigation" }],
						});
					}
					d(A) {
						return "resource" in A
							? A.resource.toString()
							: A.uri.toString() +
									(A.range.startLineNumber !== A.range.endLineNumber
										? `:${A.range.startLineNumber}-${A.range.endLineNumber}`
										: `:${A.range.startLineNumber}`);
					}
					async e(A, R, ...O) {
						const B = [];
						for (const U of O)
							if (U && typeof U == "object" && "command" in U && U.command) {
								const z = await R.executeCommand(
									U.command.id,
									...(U.command.arguments ?? []),
								);
								if (!z) continue;
								B.push({
									...U,
									isDynamic: U.isDynamic,
									value: U.value,
									name: `${typeof U.value == "string" && U.value.startsWith("#") ? U.value.slice(1) : ""}${z}`,
									fullName: z,
								});
							} else
								"symbol" in U && U.symbol
									? B.push({
											...U,
											id: this.d(U.symbol.location),
											value: U.symbol.location,
											fullName: U.label,
											name: U.symbol.name,
											isDynamic: !0,
										})
									: U && typeof U == "object" && "resource" in U && U.resource
										? B.push({
												...U,
												id: this.d({ resource: U.resource }),
												value: U.resource,
												name: U.label,
												isFile: !0,
												isDynamic: !0,
											})
										: "symbolName" in U && U.uri && U.range
											? B.push({
													...U,
													range: void 0,
													id: this.d({ uri: U.uri, range: U.range.decoration }),
													value: { uri: U.uri, range: U.range.decoration },
													fullName: U.label,
													name: U.symbolName,
													isDynamic: !0,
												})
											: "kind" in U && U.kind === "tool"
												? B.push({
														id: U.id,
														name: U.label,
														fullName: U.label,
														value: void 0,
														icon: U.icon,
														isTool: !0,
													})
												: B.push({
														...U,
														range: void 0,
														id: U.id ?? "",
														value: "value" in U ? U.value : void 0,
														fullName: U.label,
														name:
															"name" in U && typeof U.name == "string"
																? U.name
																: U.label,
														icon:
															"icon" in U && d.ThemeIcon.isThemeIcon(U.icon)
																? U.icon
																: void 0,
													});
						A.getContrib(s.$EIc.ID)?.setContext(!1, ...B);
					}
					async run(A, ...R) {
						const O = A.get(p.$DJ),
							B = A.get(l.$c3),
							U = A.get(v.$D2),
							z = A.get(c.$ek),
							F = A.get(f.$GYb),
							x = A.get(S.$E2),
							H = A.get(f.$IYb),
							V = R[0]?.widget ?? F.lastFocusedWidget;
						if (!V) return;
						const G = V.parsedInput.parts.find((X) => X instanceof $.$U2),
							K = G ? G.agent.metadata.supportsSlowVariables : !0,
							J = [];
						for (const X of U.getVariables(V.location))
							X.fullName &&
								(!X.isSlow || K) &&
								J.push({
									label: X.fullName,
									name: X.name,
									id: X.id,
									iconClass: X.icon ? d.ThemeIcon.asClassName(X.icon) : void 0,
									icon: X.icon,
								});
						if (V.viewModel?.sessionId) {
							const X = V.parsedInput.parts.find((Y) => Y instanceof $.$U2);
							if (X) {
								const Y = await B.getAgentCompletionItems(
									X.agent.id,
									"",
									t.CancellationToken.None,
								);
								for (const ie of Y)
									ie.fullName &&
										J.push({
											label: ie.fullName,
											id: ie.id,
											command: ie.command,
											icon: ie.icon,
											iconClass: ie.icon
												? d.ThemeIcon.asClassName(ie.icon)
												: void 0,
											value: ie.value,
											isDynamic: !0,
											name: ie.name,
										});
							}
						}
						if (!G || G.agent.supportsToolReferences) {
							for (const X of x.getTools())
								if (X.canBeInvokedManually) {
									const Y = {
										kind: "tool",
										label: X.displayName ?? X.name ?? "",
										id: X.id,
										icon: d.ThemeIcon.isThemeIcon(X.icon) ? X.icon : void 0,
									};
									d.ThemeIcon.isThemeIcon(X.icon)
										? (Y.iconClass = d.ThemeIcon.asClassName(X.icon))
										: X.icon && (Y.iconPath = X.icon),
										J.push(Y);
								}
						}
						J.push({
							label: (0, a.localize)(4586, null),
							icon: d.ThemeIcon.fromId(i.$ak.symbolField.id),
							iconClass: d.ThemeIcon.asClassName(i.$ak.symbolField),
							prefix: T.$Ifc.PREFIX,
						});
						function W(X) {
							if (!X) return "";
							const Y = X.match(/\$\([^\)]+\)\s*(.+)/);
							return Y ? Y[1] : X;
						}
						this.f(
							O,
							z,
							V,
							H,
							J.sort(function (X, Y) {
								const ie = W(X.label).toUpperCase(),
									ne = W(Y.label).toUpperCase();
								return (0, C.$Ff)(ie, ne);
							}),
						);
					}
					f(A, R, O, B, U, z = "") {
						A.quickAccess.show(z, {
							enabledProviderPrefixes: [
								I.$S9b.PREFIX,
								T.$Ifc.PREFIX,
								u.$m9b.PREFIX,
							],
							placeholder: (0, a.localize)(4587, null),
							providerOptions: {
								handleAccept: (F) => {
									"prefix" in F
										? this.f(A, R, O, B, U, F.prefix)
										: (this.e(O, R, F), (0, b.$WYb)(O) && B.open());
								},
								additionPicks: U,
								filter: (F) => {
									const x = O.getContrib(s.$EIc.ID)?.getContext() ?? new Set();
									return "symbol" in F && F.symbol
										? !x.has(this.d(F.symbol.location))
										: F &&
												typeof F == "object" &&
												"resource" in F &&
												m.URI.isUri(F.resource)
											? [E.Schemas.file, E.Schemas.vscodeRemote].includes(
													F.resource.scheme,
												) && !x.has(this.d({ resource: F.resource }))
											: F &&
													typeof F == "object" &&
													"uri" in F &&
													F.uri &&
													F.range
												? !x.has(
														this.d({ uri: F.uri, range: F.range.decoration }),
													)
												: !("command" in F) && F.id
													? !x.has(F.id)
													: !0;
								},
							},
						});
					}
				}
			},
		),
		