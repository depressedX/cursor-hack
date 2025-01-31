import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/objects.js';
import './jsonSchemaCommon.js';
import './problemMatcher.js';
import './taskDefinitionRegistry.js';
import '../../../services/configurationResolver/common/configurationResolverUtils.js';
import '../../../services/configurationResolver/common/configurationResolverSchema.js';
import '../../../../base/common/codicons.js';
define(
		de[3327],
		he([1, 0, 4, 82, 1813, 570, 699, 1796, 1795, 14]),
		function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*objects*/,
 w /*jsonSchemaCommon*/,
 E /*problemMatcher*/,
 C /*taskDefinitionRegistry*/,
 d /*configurationResolverUtils*/,
 m /*configurationResolverSchema*/,
 r /*codicons*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$1Wc = A),
				(e.$2Wc = G),
				(t = mt(t)),
				(i = mt(i)),
				(w = xi(w)),
				(d = mt(d));
			function u(K) {
				Array.isArray(K)
					? K.forEach(u)
					: typeof K == "object" &&
						(K.$ref && (K.$ref = K.$ref + "2"),
						Object.getOwnPropertyNames(K).forEach((J) => {
							const W = K[J];
							(Array.isArray(W) || typeof W == "object") && u(W);
						}));
			}
			const a = {
					anyOf: [
						{
							type: "boolean",
							default: !0,
							description: t.localize(9733, null),
						},
						{ $ref: "#/definitions/shellConfiguration" },
					],
					deprecationMessage: t.localize(9734, null),
				},
				h = {
					type: "boolean",
					description: t.localize(9735, null),
					default: !0,
				},
				c = {
					type: "object",
					additionalProperties: !0,
					properties: {
						type: { type: "string", description: t.localize(9736, null) },
					},
				},
				n = {
					anyOf: [
						{ type: "string", description: t.localize(9737, null) },
						c,
						{
							type: "array",
							description: t.localize(9738, null),
							items: { anyOf: [{ type: "string" }, c] },
						},
					],
					description: t.localize(9739, null),
				},
				g = {
					type: "string",
					enum: ["parallel", "sequence"],
					enumDescriptions: [t.localize(9740, null), t.localize(9741, null)],
					default: "parallel",
					description: t.localize(9742, null),
				},
				p = { type: "string", description: t.localize(9743, null) },
				o = {
					type: "object",
					description: t.localize(9744, null),
					properties: {
						id: {
							description: t.localize(9745, null),
							type: ["string", "null"],
							enum: Array.from((0, r.$$j)(), (K) => K.id),
							markdownEnumDescriptions: Array.from(
								(0, r.$$j)(),
								(K) => `$(${K.id})`,
							),
						},
						color: {
							description: t.localize(9746, null),
							type: ["string", "null"],
							enum: [
								"terminal.ansiBlack",
								"terminal.ansiRed",
								"terminal.ansiGreen",
								"terminal.ansiYellow",
								"terminal.ansiBlue",
								"terminal.ansiMagenta",
								"terminal.ansiCyan",
								"terminal.ansiWhite",
							],
						},
					},
				},
				f = {
					type: "object",
					default: {
						echo: !0,
						reveal: "always",
						focus: !1,
						panel: "shared",
						showReuseMessage: !0,
						clear: !1,
					},
					description: t.localize(9747, null),
					additionalProperties: !1,
					properties: {
						echo: {
							type: "boolean",
							default: !0,
							description: t.localize(9748, null),
						},
						focus: {
							type: "boolean",
							default: !1,
							description: t.localize(9749, null),
						},
						revealProblems: {
							type: "string",
							enum: ["always", "onProblem", "never"],
							enumDescriptions: [
								t.localize(9750, null),
								t.localize(9751, null),
								t.localize(9752, null),
							],
							default: "never",
							description: t.localize(9753, null),
						},
						reveal: {
							type: "string",
							enum: ["always", "silent", "never"],
							enumDescriptions: [
								t.localize(9754, null),
								t.localize(9755, null),
								t.localize(9756, null),
							],
							default: "always",
							description: t.localize(9757, null),
						},
						panel: {
							type: "string",
							enum: ["shared", "dedicated", "new"],
							default: "shared",
							description: t.localize(9758, null),
						},
						showReuseMessage: {
							type: "boolean",
							default: !0,
							description: t.localize(9759, null),
						},
						clear: {
							type: "boolean",
							default: !1,
							description: t.localize(9760, null),
						},
						group: { type: "string", description: t.localize(9761, null) },
						close: { type: "boolean", description: t.localize(9762, null) },
					},
				},
				b = i.$vo(f);
			b.deprecationMessage = t.localize(9763, null);
			const s = {
					type: "string",
					enum: ["build", "test", "none"],
					enumDescriptions: [
						t.localize(9764, null),
						t.localize(9765, null),
						t.localize(9766, null),
					],
					description: t.localize(9767, null),
				},
				l = {
					oneOf: [
						s,
						{
							type: "object",
							properties: {
								kind: s,
								isDefault: {
									type: ["boolean", "string"],
									default: !1,
									description: t.localize(9768, null),
								},
							},
						},
					],
					defaultSnippets: [
						{
							body: { kind: "build", isDefault: !0 },
							description: t.localize(9769, null),
						},
						{
							body: { kind: "test", isDefault: !0 },
							description: t.localize(9770, null),
						},
					],
					description: t.localize(9771, null),
				},
				y = {
					type: "string",
					enum: ["shell"],
					default: "process",
					description: t.localize(9772, null),
				},
				$ = {
					oneOf: [
						{
							oneOf: [
								{ type: "string" },
								{
									type: "array",
									items: { type: "string" },
									description: t.localize(9773, null),
								},
							],
						},
						{
							type: "object",
							required: ["value", "quoting"],
							properties: {
								value: {
									oneOf: [
										{ type: "string" },
										{
											type: "array",
											items: { type: "string" },
											description: t.localize(9774, null),
										},
									],
									description: t.localize(9775, null),
								},
								quoting: {
									type: "string",
									enum: ["escape", "strong", "weak"],
									enumDescriptions: [
										t.localize(9776, null),
										t.localize(9777, null),
										t.localize(9778, null),
									],
									default: "strong",
									description: t.localize(9779, null),
								},
							},
						},
					],
					description: t.localize(9780, null),
				},
				v = {
					type: "array",
					items: {
						oneOf: [
							{ type: "string" },
							{
								type: "object",
								required: ["value", "quoting"],
								properties: {
									value: {
										type: "string",
										description: t.localize(9781, null),
									},
									quoting: {
										type: "string",
										enum: ["escape", "strong", "weak"],
										enumDescriptions: [
											t.localize(9782, null),
											t.localize(9783, null),
											t.localize(9784, null),
										],
										default: "strong",
										description: t.localize(9785, null),
									},
								},
							},
						],
					},
					description: t.localize(9786, null),
				},
				S = { type: "string", description: t.localize(9787, null) },
				I = {
					type: "string",
					enum: ["2.0.0"],
					description: t.localize(9788, null),
				},
				T = {
					type: "string",
					description: t.localize(9789, null),
					deprecationMessage: t.localize(9790, null),
				},
				P = {
					type: "object",
					additionalProperties: !1,
					properties: {
						reevaluateOnRerun: {
							type: "boolean",
							description: t.localize(9791, null),
							default: !0,
						},
						runOn: {
							type: "string",
							enum: ["default", "folderOpen"],
							description: t.localize(9792, null),
							default: "default",
						},
						instanceLimit: {
							type: "number",
							description: t.localize(9793, null),
							default: 1,
						},
					},
					description: t.localize(9794, null),
				},
				k = w.default.definitions,
				L = i.$vo(k.options),
				D = L.properties;
			D.shell = i.$vo(k.shellConfiguration);
			const M = {
					type: "object",
					additionalProperties: !1,
					properties: {
						label: { type: "string", description: t.localize(9795, null) },
						taskName: {
							type: "string",
							description: t.localize(9796, null),
							deprecationMessage: t.localize(9797, null),
						},
						identifier: i.$vo(T),
						group: i.$vo(l),
						isBackground: {
							type: "boolean",
							description: t.localize(9798, null),
							default: !0,
						},
						promptOnClose: {
							type: "boolean",
							description: t.localize(9799, null),
							default: !1,
						},
						presentation: i.$vo(f),
						icon: i.$vo(o),
						hide: i.$vo(h),
						options: L,
						problemMatcher: {
							$ref: "#/definitions/problemMatcherType",
							description: t.localize(9800, null),
						},
						runOptions: i.$vo(P),
						dependsOn: i.$vo(n),
						dependsOrder: i.$vo(g),
						detail: i.$vo(p),
					},
				},
				N = [];
			C.$$3.onReady().then(() => {
				A();
			});
			function A() {
				for (const K of C.$$3.all()) {
					if (
						N.find((X) =>
							X.properties?.type?.enum?.find
								? X.properties?.type.enum.find((Y) => Y === K.taskType)
								: void 0,
						)
					)
						continue;
					const J = i.$vo(M),
						W = J.properties;
					if (
						((W.type = {
							type: "string",
							description: t.localize(9801, null),
							enum: [K.taskType],
						}),
						K.required ? (J.required = K.required.slice()) : (J.required = []),
						J.required.push("type"),
						K.properties)
					)
						for (const X of Object.keys(K.properties)) {
							const Y = K.properties[X];
							W[X] = i.$vo(Y);
						}
					u(J), N.push(J);
				}
			}
			const R = i.$vo(M);
			(R.properties.customize = {
				type: "string",
				deprecationMessage: t.localize(9802, null),
			}),
				R.required || (R.required = []),
				R.required.push("customize"),
				N.push(R);
			const O = i.$vo(k),
				B = O.taskDescription;
			B.required = ["label"];
			const U = B.properties;
			(U.label = i.$vo(S)),
				(U.command = i.$vo($)),
				(U.args = i.$vo(v)),
				(U.isShellCommand = i.$vo(a)),
				(U.dependsOn = n),
				(U.hide = i.$vo(h)),
				(U.dependsOrder = g),
				(U.identifier = i.$vo(T)),
				(U.type = i.$vo(y)),
				(U.presentation = i.$vo(f)),
				(U.terminal = b),
				(U.icon = i.$vo(o)),
				(U.group = i.$vo(l)),
				(U.runOptions = i.$vo(P)),
				(U.detail = p),
				(U.taskName.deprecationMessage = t.localize(9803, null));
			const z = i.$vo(B);
			(B.default = {
				label: "My Task",
				type: "shell",
				command: "echo Hello",
				problemMatcher: [],
			}),
				(O.showOutputType.deprecationMessage = t.localize(9804, null)),
				(U.echoCommand.deprecationMessage = t.localize(9805, null)),
				(U.suppressTaskName.deprecationMessage = t.localize(9806, null)),
				(U.isBuildCommand.deprecationMessage = t.localize(9807, null)),
				(U.isTestCommand.deprecationMessage = t.localize(9808, null)),
				(z.properties.type = {
					type: "string",
					enum: ["process"],
					default: "process",
					description: t.localize(9809, null),
				}),
				z.required.push("command"),
				z.required.push("type"),
				N.push(z),
				N.push({ $ref: "#/definitions/taskDescription" });
			const F = O.taskRunnerConfiguration.properties,
				x = F.tasks;
			(x.items = { oneOf: N }),
				(F.inputs = m.$OQc.definitions.inputs),
				(O.commandConfiguration.properties.isShellCommand = i.$vo(a)),
				(O.commandConfiguration.properties.args = i.$vo(v)),
				(O.options.properties.shell = {
					$ref: "#/definitions/shellConfiguration",
				}),
				(F.isShellCommand = i.$vo(a)),
				(F.type = i.$vo(y)),
				(F.group = i.$vo(l)),
				(F.presentation = i.$vo(f)),
				(F.suppressTaskName.deprecationMessage = t.localize(9810, null)),
				(F.taskSelector.deprecationMessage = t.localize(9811, null));
			const H = i.$vo(O.taskRunnerConfiguration);
			delete H.properties.tasks,
				(H.additionalProperties = !1),
				(O.osSpecificTaskRunnerConfiguration = H),
				(F.version = i.$vo(I));
			const q = {
				oneOf: [
					{
						allOf: [
							{
								type: "object",
								required: ["version"],
								properties: {
									version: i.$vo(I),
									windows: {
										$ref: "#/definitions/osSpecificTaskRunnerConfiguration",
										description: t.localize(9812, null),
									},
									osx: {
										$ref: "#/definitions/osSpecificTaskRunnerConfiguration",
										description: t.localize(9813, null),
									},
									linux: {
										$ref: "#/definitions/osSpecificTaskRunnerConfiguration",
										description: t.localize(9814, null),
									},
								},
							},
							{ $ref: "#/definitions/taskRunnerConfiguration" },
						],
					},
				],
			};
			q.definitions = O;
			function V(K, J) {
				const W = K[J].properties;
				W
					? Object.keys(W).forEach((X) => {
							V(W, X);
						})
					: d.$MQc(K[J]);
			}
			Object.getOwnPropertyNames(O).forEach((K) => {
				const J = K + "2";
				(O[J] = O[K]), delete O[K], V(O, J);
			}),
				u(q);
			function G() {
				try {
					const K = E.$03.keys().map((J) => "$" + J);
					(O.problemMatcherType2.oneOf[0].enum = K),
						(O.problemMatcherType2.oneOf[2].items.anyOf[0].enum = K);
				} catch {
					console.log("Installing problem matcher ids failed");
				}
			}
			E.$03.onReady().then(() => {
				G();
			}),
				(e.default = q);
		},
	)
