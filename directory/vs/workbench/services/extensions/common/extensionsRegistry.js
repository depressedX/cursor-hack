import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/severity.js';
import '../../../../platform/extensionManagement/common/extensionManagement.js';
import '../../../../platform/jsonschemas/common/jsonContributionRegistry.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/extensions/common/extensions.js';
import '../../../../platform/product/common/productService.js';
import '../../../../platform/extensionManagement/common/implicitActivationEvents.js';
import '../../../../platform/extensions/common/extensionsApiProposals.js';
define(
		de[175],
		he([1, 0, 4, 29, 111, 119, 250, 30, 109, 62, 1200, 1179]),
		function (ce, e, t, i, w, E, C, d, m, r, u, a) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$n2 = e.$m2 = e.$l2 = e.$k2 = e.$j2 = e.$i2 = void 0),
				(t = mt(t)),
				(w = xi(w));
			const h = d.$Io.as(C.$Jo.JSONContribution);
			class c {
				constructor(l, y, $) {
					(this.a = l), (this.b = y), (this.c = $);
				}
				d(l, y) {
					this.a({
						type: l,
						message: y,
						extensionId: this.b.identifier,
						extensionPointId: this.c,
					});
				}
				error(l) {
					this.d(w.default.Error, l);
				}
				warn(l) {
					this.d(w.default.Warning, l);
				}
				info(l) {
					this.d(w.default.Info, l);
				}
			}
			e.$i2 = c;
			class n {
				static a(l) {
					const y = new m.$Hn();
					for (let $ = 0, v = l.length; $ < v; $++)
						y.add(l[$].description.identifier);
					return y;
				}
				static compute(l, y) {
					if (!l || !l.length) return new n(y, []);
					if (!y || !y.length) return new n([], l);
					const $ = this.a(l),
						v = this.a(y),
						S = y.filter((T) => !$.has(T.description.identifier)),
						I = l.filter((T) => !v.has(T.description.identifier));
					return new n(S, I);
				}
				constructor(l, y) {
					(this.added = l), (this.removed = y);
				}
			}
			e.$j2 = n;
			class g {
				constructor(l, y) {
					(this.name = l),
						(this.defaultExtensionKind = y),
						(this.a = null),
						(this.b = null),
						(this.c = null);
				}
				setHandler(l) {
					if (this.a !== null) throw new Error("Handler already set!");
					return (
						(this.a = l),
						this.d(),
						{
							dispose: () => {
								this.a = null;
							},
						}
					);
				}
				acceptUsers(l) {
					(this.c = n.compute(this.b, l)), (this.b = l), this.d();
				}
				d() {
					if (!(this.a === null || this.b === null || this.c === null))
						try {
							this.a(this.b, this.c);
						} catch (l) {
							(0, i.$4)(l);
						}
				}
			}
			e.$k2 = g;
			const p = {
					type: "string",
					enum: ["ui", "workspace"],
					enumDescriptions: [t.localize(12351, null), t.localize(12352, null)],
				},
				o = "vscode://schemas/vscode-extensions";
			e.$l2 = {
				properties: {
					engines: {
						type: "object",
						description: t.localize(12353, null),
						properties: {
							vscode: {
								type: "string",
								description: t.localize(12354, null),
								default: "^1.22.0",
							},
						},
					},
					publisher: { description: t.localize(12355, null), type: "string" },
					displayName: { description: t.localize(12356, null), type: "string" },
					categories: {
						description: t.localize(12357, null),
						type: "array",
						uniqueItems: !0,
						items: {
							oneOf: [
								{ type: "string", enum: m.$Fn },
								{
									type: "string",
									const: "Languages",
									deprecationMessage: t.localize(12358, null),
								},
							],
						},
					},
					galleryBanner: {
						type: "object",
						description: t.localize(12359, null),
						properties: {
							color: { description: t.localize(12360, null), type: "string" },
							theme: {
								description: t.localize(12361, null),
								type: "string",
								enum: ["dark", "light"],
							},
						},
					},
					contributes: {
						description: t.localize(12362, null),
						type: "object",
						properties: {},
						default: {},
					},
					preview: { type: "boolean", description: t.localize(12363, null) },
					enableProposedApi: {
						type: "boolean",
						deprecationMessage: t.localize(12364, null),
					},
					enabledApiProposals: {
						markdownDescription: t.localize(12365, null),
						type: "array",
						uniqueItems: !0,
						items: {
							type: "string",
							enum: Object.keys(a.allApiProposals).map((s) => s),
							markdownEnumDescriptions: Object.values(a.allApiProposals).map(
								(s) => s.proposal,
							),
						},
					},
					api: {
						markdownDescription: t.localize(12366, null),
						type: "string",
						enum: ["none"],
						enumDescriptions: [t.localize(12367, null)],
					},
					activationEvents: {
						description: t.localize(12368, null),
						type: "array",
						items: {
							type: "string",
							defaultSnippets: [
								{
									label: "onWebviewPanel",
									description: t.localize(12369, null),
									body: "onWebviewPanel:viewType",
								},
								{
									label: "onLanguage",
									description: t.localize(12370, null),
									body: "onLanguage:${1:languageId}",
								},
								{
									label: "onCommand",
									description: t.localize(12371, null),
									body: "onCommand:${2:commandId}",
								},
								{
									label: "onDebug",
									description: t.localize(12372, null),
									body: "onDebug",
								},
								{
									label: "onDebugInitialConfigurations",
									description: t.localize(12373, null),
									body: "onDebugInitialConfigurations",
								},
								{
									label: "onDebugDynamicConfigurations",
									description: t.localize(12374, null),
									body: "onDebugDynamicConfigurations",
								},
								{
									label: "onDebugResolve",
									description: t.localize(12375, null),
									body: "onDebugResolve:${6:type}",
								},
								{
									label: "onDebugAdapterProtocolTracker",
									description: t.localize(12376, null),
									body: "onDebugAdapterProtocolTracker:${6:type}",
								},
								{
									label: "workspaceContains",
									description: t.localize(12377, null),
									body: "workspaceContains:${4:filePattern}",
								},
								{
									label: "onStartupFinished",
									description: t.localize(12378, null),
									body: "onStartupFinished",
								},
								{
									label: "onTaskType",
									description: t.localize(12379, null),
									body: "onTaskType:${1:taskType}",
								},
								{
									label: "onFileSystem",
									description: t.localize(12380, null),
									body: "onFileSystem:${1:scheme}",
								},
								{
									label: "onEditSession",
									description: t.localize(12381, null),
									body: "onEditSession:${1:scheme}",
								},
								{
									label: "onSearch",
									description: t.localize(12382, null),
									body: "onSearch:${7:scheme}",
								},
								{
									label: "onView",
									body: "onView:${5:viewId}",
									description: t.localize(12383, null),
								},
								{
									label: "onUri",
									body: "onUri",
									description: t.localize(12384, null),
								},
								{
									label: "onOpenExternalUri",
									body: "onOpenExternalUri",
									description: t.localize(12385, null),
								},
								{
									label: "onCustomEditor",
									body: "onCustomEditor:${9:viewType}",
									description: t.localize(12386, null),
								},
								{
									label: "onNotebook",
									body: "onNotebook:${1:type}",
									description: t.localize(12387, null),
								},
								{
									label: "onAuthenticationRequest",
									body: "onAuthenticationRequest:${11:authenticationProviderId}",
									description: t.localize(12388, null),
								},
								{
									label: "onRenderer",
									description: t.localize(12389, null),
									body: "onRenderer:${11:rendererId}",
								},
								{
									label: "onTerminalProfile",
									body: "onTerminalProfile:${1:terminalId}",
									description: t.localize(12390, null),
								},
								{
									label: "onTerminalQuickFixRequest",
									body: "onTerminalQuickFixRequest:${1:quickFixId}",
									description: t.localize(12391, null),
								},
								{
									label: "onWalkthrough",
									body: "onWalkthrough:${1:walkthroughID}",
									description: t.localize(12392, null),
								},
								{
									label: "onIssueReporterOpened",
									body: "onIssueReporterOpened",
									description: t.localize(12393, null),
								},
								{
									label: "onChatParticipant",
									body: "onChatParticipant:${1:participantId}",
									description: t.localize(12394, null),
								},
								{
									label: "onLanguageModelTool",
									body: "onLanguageModelTool:${1:toolId}",
									description: t.localize(12395, null),
								},
								{ label: "*", description: t.localize(12396, null), body: "*" },
							],
						},
					},
					badges: {
						type: "array",
						description: t.localize(12397, null),
						items: {
							type: "object",
							required: ["url", "href", "description"],
							properties: {
								url: { type: "string", description: t.localize(12398, null) },
								href: { type: "string", description: t.localize(12399, null) },
								description: {
									type: "string",
									description: t.localize(12400, null),
								},
							},
						},
					},
					markdown: {
						type: "string",
						description: t.localize(12401, null),
						enum: ["github", "standard"],
						default: "github",
					},
					qna: {
						default: "marketplace",
						description: t.localize(12402, null),
						anyOf: [
							{ type: ["string", "boolean"], enum: ["marketplace", !1] },
							{ type: "string" },
						],
					},
					extensionDependencies: {
						description: t.localize(12403, null),
						type: "array",
						uniqueItems: !0,
						items: { type: "string", pattern: E.$rp },
					},
					extensionPack: {
						description: t.localize(12404, null),
						type: "array",
						uniqueItems: !0,
						items: { type: "string", pattern: E.$rp },
					},
					extensionKind: {
						description: t.localize(12405, null),
						type: "array",
						items: p,
						default: ["workspace"],
						defaultSnippets: [
							{ body: ["ui"], description: t.localize(12406, null) },
							{ body: ["workspace"], description: t.localize(12407, null) },
							{
								body: ["ui", "workspace"],
								description: t.localize(12408, null),
							},
							{
								body: ["workspace", "ui"],
								description: t.localize(12409, null),
							},
							{ body: [], description: t.localize(12410, null) },
						],
					},
					capabilities: {
						description: t.localize(12411, null),
						type: "object",
						properties: {
							virtualWorkspaces: {
								description: t.localize(12412, null),
								type: ["boolean", "object"],
								defaultSnippets: [
									{
										label: "limited",
										body: { supported: "${1:limited}", description: "${2}" },
									},
									{
										label: "false",
										body: { supported: !1, description: "${2}" },
									},
								],
								default: (!0).valueOf,
								properties: {
									supported: {
										markdownDescription: t.localize(12413, null),
										type: ["string", "boolean"],
										enum: ["limited", !0, !1],
										enumDescriptions: [
											t.localize(12414, null),
											t.localize(12415, null),
											t.localize(12416, null),
										],
									},
									description: {
										type: "string",
										markdownDescription: t.localize(12417, null),
									},
								},
							},
							untrustedWorkspaces: {
								description: t.localize(12418, null),
								type: "object",
								required: ["supported"],
								defaultSnippets: [
									{ body: { supported: "${1:limited}", description: "${2}" } },
								],
								properties: {
									supported: {
										markdownDescription: t.localize(12419, null),
										type: ["string", "boolean"],
										enum: ["limited", !0, !1],
										enumDescriptions: [
											t.localize(12420, null),
											t.localize(12421, null),
											t.localize(12422, null),
										],
									},
									restrictedConfigurations: {
										description: t.localize(12423, null),
										type: "array",
										items: { type: "string" },
									},
									description: {
										type: "string",
										markdownDescription: t.localize(12424, null),
									},
								},
							},
						},
					},
					sponsor: {
						description: t.localize(12425, null),
						type: "object",
						defaultSnippets: [{ body: { url: "${1:https:}" } }],
						properties: {
							url: { description: t.localize(12426, null), type: "string" },
						},
					},
					scripts: {
						type: "object",
						properties: {
							"vscode:prepublish": {
								description: t.localize(12427, null),
								type: "string",
							},
							"vscode:uninstall": {
								description: t.localize(12428, null),
								type: "string",
							},
						},
					},
					icon: { type: "string", description: t.localize(12429, null) },
					l10n: { type: "string", description: t.localize(12430, null) },
					pricing: {
						type: "string",
						markdownDescription: t.localize(12431, null),
						enum: ["Free", "Trial"],
						default: "Free",
					},
				},
			};
			class f {
				constructor() {
					this.a = new Map();
				}
				registerExtensionPoint(l) {
					if (this.a.has(l.extensionPoint))
						throw new Error("Duplicate extension point: " + l.extensionPoint);
					const y = new g(l.extensionPoint, l.defaultExtensionKind);
					return (
						this.a.set(l.extensionPoint, y),
						l.activationEventsGenerator &&
							u.$a2.register(l.extensionPoint, l.activationEventsGenerator),
						(e.$l2.properties.contributes.properties[l.extensionPoint] =
							l.jsonSchema),
						h.registerSchema(o, e.$l2),
						y
					);
				}
				getExtensionPoints() {
					return Array.from(this.a.values());
				}
			}
			e.$m2 = f;
			const b = { ExtensionsRegistry: "ExtensionsRegistry" };
			d.$Io.add(b.ExtensionsRegistry, new f()),
				(e.$n2 = d.$Io.as(b.ExtensionsRegistry)),
				h.registerSchema(o, e.$l2),
				h.registerSchema(r.$Ck, {
					properties: {
						extensionEnabledApiProposals: {
							description: t.localize(12432, null),
							type: "object",
							properties: {},
							additionalProperties: {
								anyOf: [
									{
										type: "array",
										uniqueItems: !0,
										items: {
											type: "string",
											enum: Object.keys(a.allApiProposals),
											markdownEnumDescriptions: Object.values(
												a.allApiProposals,
											).map((s) => s.proposal),
										},
									},
								],
							},
						},
					},
				});
		},
	),
		