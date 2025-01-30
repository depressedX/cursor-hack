import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/strings.js';
import '../../../../nls.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/descriptors.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/product/common/productService.js';
import '../../../../platform/registry/common/platform.js';
import '../../../browser/parts/views/viewPaneContainer.js';
import '../../../common/views.js';
import './chat.js';
import './chatViewPane.js';
import '../common/chatAgents.js';
import '../common/chatContextKeys.js';
import '../../extensions/browser/extensionsActions.js';
import '../../extensions/common/extensions.js';
import '../../../services/extensions/common/extensions.js';
import '../../../services/extensions/common/extensionsRegistry.js';
define(
			de[4068],
			he([
				1, 0, 24, 14, 3, 37, 4, 8, 102, 34, 40, 62, 30, 239, 60, 208, 4067, 153,
				207, 404, 141, 53, 175,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*arrays*/,
				i /*codicons*/,
				w /*lifecycle*/,
				E /*strings*/,
				C /*nls*/,
				d /*contextkey*/,
				m /*descriptors*/,
				r /*log*/,
				u /*notification*/,
				a /*productService*/,
				h /*platform*/,
				c /*viewPaneContainer*/,
				n /*views*/,
				g /*chat*/,
				p /*chatViewPane*/,
				o /*chatAgents*/,
				f /*chatContextKeys*/,
				b /*extensionsActions*/,
				s /*extensions*/,
				l /*extensions*/,
				y /*extensionsRegistry*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$OIc = e.$NIc = void 0),
					(E = mt(E)),
					(y = mt(y));
				const $ = y.$n2.registerExtensionPoint({
					extensionPoint: "chatParticipants",
					jsonSchema: {
						description: (0, C.localize)(4690, null),
						type: "array",
						items: {
							additionalProperties: !1,
							type: "object",
							defaultSnippets: [{ body: { name: "", description: "" } }],
							required: ["name", "id"],
							properties: {
								id: {
									description: (0, C.localize)(4691, null),
									type: "string",
								},
								name: {
									description: (0, C.localize)(4692, null),
									type: "string",
									pattern: "^[\\w-]+$",
								},
								fullName: {
									markdownDescription: (0, C.localize)(4693, null, "`name`"),
									type: "string",
								},
								description: {
									description: (0, C.localize)(4694, null),
									type: "string",
								},
								isSticky: {
									description: (0, C.localize)(4695, null),
									type: "boolean",
								},
								sampleRequest: {
									description: (0, C.localize)(4696, null),
									type: "string",
								},
								when: {
									description: (0, C.localize)(4697, null),
									type: "string",
								},
								disambiguation: {
									description: (0, C.localize)(4698, null),
									type: "array",
									items: {
										additionalProperties: !1,
										type: "object",
										defaultSnippets: [
											{
												body: {
													categoryName: "",
													description: "",
													examples: [],
												},
											},
										],
										required: ["categoryName", "description", "examples"],
										properties: {
											categoryName: {
												markdownDescription: (0, C.localize)(4699, null),
												type: "string",
											},
											description: {
												description: (0, C.localize)(4700, null),
												type: "string",
											},
											examples: {
												description: (0, C.localize)(4701, null),
												type: "array",
											},
										},
									},
								},
								commands: {
									markdownDescription: (0, C.localize)(4702, null),
									type: "array",
									items: {
										additionalProperties: !1,
										type: "object",
										defaultSnippets: [{ body: { name: "", description: "" } }],
										required: ["name"],
										properties: {
											name: {
												description: (0, C.localize)(4703, null),
												type: "string",
											},
											description: {
												description: (0, C.localize)(4704, null),
												type: "string",
											},
											when: {
												description: (0, C.localize)(4705, null),
												type: "string",
											},
											sampleRequest: {
												description: (0, C.localize)(4706, null),
												type: "string",
											},
											isSticky: {
												description: (0, C.localize)(4707, null),
												type: "boolean",
											},
											disambiguation: {
												description: (0, C.localize)(4708, null),
												type: "array",
												items: {
													additionalProperties: !1,
													type: "object",
													defaultSnippets: [
														{
															body: {
																categoryName: "",
																description: "",
																examples: [],
															},
														},
													],
													required: ["categoryName", "description", "examples"],
													properties: {
														categoryName: {
															markdownDescription: (0, C.localize)(4709, null),
															type: "string",
														},
														description: {
															description: (0, C.localize)(4710, null),
															type: "string",
														},
														examples: {
															description: (0, C.localize)(4711, null),
															type: "array",
														},
													},
												},
											},
										},
									},
								},
								supportsToolReferences: {
									description: (0, C.localize)(
										4712,
										null,
										"ChatRequest#toolReferences",
									),
									type: "boolean",
								},
							},
						},
					},
					activationEventsGenerator: (T, P) => {
						for (const k of T) P.push(`onChatParticipant:${k.id}`);
					},
				});
				let v = class {
					static {
						this.ID = "workbench.contrib.chatExtensionPointHandler";
					}
					constructor(P, k) {
						(this.c = P),
							(this.d = k),
							(this.b = new w.$0c()),
							(this.a = this.f()),
							this.g(),
							this.e();
					}
					e() {
						$.setHandler((P, k) => {
							for (const L of k.added)
								for (const D of L.value) {
									if (!D.name?.match(/^[\w-]+$/)) {
										this.d.error(
											`Extension '${L.description.identifier.value}' CANNOT register participant with invalid name: ${D.name}. Name must match /^[\\w-]+$/.`,
										);
										continue;
									}
									if (
										D.fullName &&
										E.$jg
											.getInstance(new Set())
											.containsAmbiguousCharacter(D.fullName)
									) {
										this.d.error(
											`Extension '${L.description.identifier.value}' CANNOT register participant with fullName that contains ambiguous characters: ${D.fullName}.`,
										);
										continue;
									}
									if (
										D.fullName &&
										E.$kg.containsInvisibleCharacter(
											D.fullName.replace(/ /g, ""),
										)
									) {
										this.d.error(
											`Extension '${L.description.identifier.value}' CANNOT register participant with fullName that contains invisible characters: ${D.fullName}.`,
										);
										continue;
									}
									if (
										D.isDefault &&
										!(0, l.$t2)(L.description, "defaultChatParticipant")
									) {
										this.d.error(
											`Extension '${L.description.identifier.value}' CANNOT use API proposal: defaultChatParticipant.`,
										);
										continue;
									}
									if (
										(D.defaultImplicitVariables || D.locations) &&
										!(0, l.$t2)(L.description, "chatParticipantAdditions")
									) {
										this.d.error(
											`Extension '${L.description.identifier.value}' CANNOT use API proposal: chatParticipantAdditions.`,
										);
										continue;
									}
									if (!D.id || !D.name) {
										this.d.error(
											`Extension '${L.description.identifier.value}' CANNOT register participant without both id and name.`,
										);
										continue;
									}
									const M = [];
									let N = !1;
									if (
										(D.disambiguation?.length &&
											((0, l.$t2)(
												L.description,
												"contribChatParticipantDetection",
											)
												? M.push(...D.disambiguation)
												: N ||
													(this.d.warn(
														`'${L.description.identifier.value}' must add API proposal: 'contribChatParticipantDetection' to 'enabledApiProposals' to contribute disambiguation metadata.`,
													),
													(N = !0))),
										D.commands)
									)
										for (const R of D.commands)
											R.disambiguation?.length &&
												((0, l.$t2)(
													L.description,
													"contribChatParticipantDetection",
												)
													? M.push(...R.disambiguation)
													: N ||
														(this.d.warn(
															`'${L.description.identifier.value}' must add API proposal: 'contribChatParticipantDetection' to 'enabledApiProposals' to contribute disambiguation metadata.`,
														),
														(N = !0)));
									const A = new w.$Zc();
									A.add(
										this.c.registerAgent(D.id, {
											extensionId: L.description.identifier,
											publisherDisplayName:
												L.description.publisherDisplayName ??
												L.description.publisher,
											extensionPublisherId: L.description.publisher,
											extensionDisplayName:
												L.description.displayName ?? L.description.name,
											id: D.id,
											description: D.description,
											when: D.when,
											metadata: {
												isSticky: D.isSticky,
												sampleRequest: D.sampleRequest,
											},
											name: D.name,
											fullName: D.fullName,
											isDefault: D.isDefault,
											locations: (0, t.$Pb)(D.locations)
												? D.locations.map(o.ChatAgentLocation.fromRaw)
												: [o.ChatAgentLocation.Panel],
											slashCommands: D.commands ?? [],
											disambiguation: (0, t.$Lb)(M.flat()),
											supportsToolReferences: D.supportsToolReferences,
										}),
									),
										this.b.set(S(L.description.identifier, D.id), A);
								}
							for (const L of k.removed)
								for (const D of L.value)
									this.b.deleteAndDispose(S(L.description.identifier, D.id));
						});
					}
					f() {
						const P = (0, C.localize2)(4715, "Chat"),
							k = i.$ak.commentDiscussion,
							L = p.$XMb;
						return h.$Io
							.as(n.Extensions.ViewContainersRegistry)
							.registerViewContainer(
								{
									id: L,
									title: P,
									icon: k,
									ctorDescriptor: new m.$Ji(c.$ZSb, [
										L,
										{ mergeViewWithContainerWhenSingleView: !0 },
									]),
									storageId: L,
									hideIfEmpty: !0,
									order: 100,
								},
								n.ViewContainerLocation.Sidebar,
							);
					}
					g() {
						const P = "GitHub Copilot",
							k = [
								{
									id: g.$MYb,
									containerIcon: this.a.icon,
									containerTitle: this.a.title.value,
									singleViewPaneContainerTitle: this.a.title.value,
									name: { value: P, original: P },
									canToggleVisibility: !1,
									canMoveView: !0,
									ctorDescriptor: new m.$Ji(p.$YMb),
									when: d.$Kj.or(f.$61, f.$71),
								},
							];
						return (
							h.$Io.as(n.Extensions.ViewsRegistry).registerViews(k, this.a),
							(0, w.$Yc)(() => {
								h.$Io.as(n.Extensions.ViewsRegistry).deregisterViews(k, this.a);
							})
						);
					}
				};
				(e.$NIc = v), (e.$NIc = v = Ne([j(0, o.$c3), j(1, r.$ik)], v));
				function S(T, P) {
					return `${T.value}_${P}`;
				}
				let I = class {
					static {
						this.ID = "workbench.contrib.chatCompatNotifier";
					}
					constructor(P, k, L, D) {
						const M = f.$71.bindTo(k);
						P.queryLocal().then((A) => {
							const R = A.find(
								(O) => O.identifier.id === "github.copilot-chat",
							);
							if (
								R?.local?.validations.some((O) => O[0] === u.Severity.Error)
							) {
								const O = (0, C.localize)(4713, null),
									B = (0, C.localize)(
										4714,
										null,
										"GitHub Copilot Chat",
										D.nameLong,
									),
									U = `[${O}](command:${b.$ZTb}?${encodeURIComponent(JSON.stringify([["GitHub.copilot-chat"]]))})`,
									z = `GitHub Copilot Chat version: ${R.version}`;
								h.$Io
									.as(n.Extensions.ViewsRegistry)
									.registerViewWelcomeContent(g.$MYb, {
										content: [B, U, z].join(`

`),
										when: f.$71,
									}),
									M.set(!0);
							}
						});
						const N = L.onDidChangeAgents(() => {
							L.getDefaultAgent(o.ChatAgentLocation.Panel) &&
								(M.set(!1), N.dispose());
						});
					}
				};
				(e.$OIc = I),
					(e.$OIc = I =
						Ne([j(0, s.$MQb), j(1, d.$6j), j(2, o.$c3), j(3, a.$Bk)], I));
			},
		),
		