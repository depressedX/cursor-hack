define(de[3693], he([1, 0, 1830, 3528, 1885]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 });
		}),
		define(
			de[3694],
			he([
				1, 0, 4, 12, 61, 55, 30, 32, 21, 62, 52, 40, 85, 41, 9, 344, 15, 3, 53,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				class b extends o.$1c {
					constructor(y, $, v, S, I, T, P, k) {
						super();
						const L = `${y.surveyId}.sessionCount`,
							D = `${y.surveyId}.lastSessionDate`,
							M = `${y.surveyId}.skipVersion`,
							N = `${y.surveyId}.isCandidate`,
							A = `${y.surveyId}.editedCount`,
							R = `${y.surveyId}.editedDate`;
						if ($.get(M, m.StorageScope.APPLICATION, "")) return;
						const B = new Date().toDateString();
						if ($.getNumber(A, m.StorageScope.APPLICATION, 0) < y.editCount) {
							const x = this.D(
								new p.$1h((H) => {
									H.forEach((q) => {
										if (
											q.getLanguageId() === y.languageId &&
											B !== $.get(R, m.StorageScope.APPLICATION)
										) {
											const V =
												$.getNumber(A, m.StorageScope.APPLICATION, 0) + 1;
											$.store(
												A,
												V,
												m.StorageScope.APPLICATION,
												m.StorageTarget.USER,
											),
												$.store(
													R,
													B,
													m.StorageScope.APPLICATION,
													m.StorageTarget.USER,
												);
										}
									});
								}, 250),
							);
							this.D(T.files.onDidSave((H) => x.work(H.model)));
						}
						const U = $.get(
							D,
							m.StorageScope.APPLICATION,
							new Date(0).toDateString(),
						);
						if (B === U) return;
						const z = $.getNumber(L, m.StorageScope.APPLICATION, 0) + 1;
						if (
							($.store(D, B, m.StorageScope.APPLICATION, m.StorageTarget.USER),
							$.store(L, z, m.StorageScope.APPLICATION, m.StorageTarget.USER),
							z < 9 ||
								$.getNumber(A, m.StorageScope.APPLICATION, 0) < y.editCount)
						)
							return;
						const F =
							$.getBoolean(N, m.StorageScope.APPLICATION, !1) ||
							Math.random() < y.userProbability;
						if (
							($.store(N, F, m.StorageScope.APPLICATION, m.StorageTarget.USER),
							!F)
						) {
							$.store(
								M,
								k.version,
								m.StorageScope.APPLICATION,
								m.StorageTarget.USER,
							);
							return;
						}
						v.prompt(
							a.Severity.Info,
							(0, t.localize)(
								9520,
								null,
								I.getLanguageName(y.languageId) ?? y.languageId,
							),
							[
								{
									label: (0, t.localize)(9521, null),
									run: () => {
										S.publicLog(`${y.surveyId}.survey/takeShortSurvey`),
											P.open(
												n.URI.parse(
													`${y.surveyUrl}?o=${encodeURIComponent(g.$ic)}&v=${encodeURIComponent(k.version)}&m=${encodeURIComponent(S.machineId)}`,
												),
											),
											$.store(
												N,
												!1,
												m.StorageScope.APPLICATION,
												m.StorageTarget.USER,
											),
											$.store(
												M,
												k.version,
												m.StorageScope.APPLICATION,
												m.StorageTarget.USER,
											);
									},
								},
								{
									label: (0, t.localize)(9522, null),
									run: () => {
										S.publicLog(`${y.surveyId}.survey/remindMeLater`),
											$.store(
												L,
												z - 3,
												m.StorageScope.APPLICATION,
												m.StorageTarget.USER,
											);
									},
								},
								{
									label: (0, t.localize)(9523, null),
									isSecondary: !0,
									run: () => {
										S.publicLog(`${y.surveyId}.survey/dontShowAgain`),
											$.store(
												N,
												!1,
												m.StorageScope.APPLICATION,
												m.StorageTarget.USER,
											),
											$.store(
												M,
												k.version,
												m.StorageScope.APPLICATION,
												m.StorageTarget.USER,
											);
									},
								},
							],
							{ sticky: !0 },
						);
					}
				}
				let s = class {
					constructor(y, $, v, S, I, T, P, k) {
						(this.a = y),
							(this.b = $),
							(this.c = v),
							(this.d = S),
							(this.f = I),
							(this.g = T),
							(this.h = P),
							(this.i = k),
							this.j();
					}
					async j() {
						this.g.surveys &&
							(await this.i.whenInstalledExtensionsRegistered(),
							this.g.surveys
								.filter(
									(y) =>
										y.surveyId &&
										y.editCount &&
										y.languageId &&
										y.surveyUrl &&
										y.userProbability,
								)
								.map(
									(y) =>
										new b(
											y,
											this.a,
											this.b,
											this.c,
											this.h,
											this.d,
											this.f,
											this.g,
										),
								));
					}
				};
				(s = Ne(
					[
						j(0, m.$lq),
						j(1, a.$4N),
						j(2, d.$km),
						j(3, h.$kZ),
						j(4, c.$7rb),
						j(5, r.$Bk),
						j(6, w.$nM),
						j(7, f.$q2),
					],
					s,
				)),
					i.$z === "en" &&
						C.$Io
							.as(E.Extensions.Workbench)
							.registerWorkbenchContribution(s, u.LifecyclePhase.Restored);
			},
		),
		define(
			de[1886],
			he([1, 0, 530, 29, 22, 32, 25, 85, 1260, 768, 327, 12, 1597, 110, 62]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				var g;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$rgd = void 0),
					(e.$qgd = p);
				async function p(f, b = !1) {
					return (0, m.$k1c)(f, b, (s) => (0, t.$ojb)(s));
				}
				let o = (g = class {
					constructor(b, s, l, y, $, v, S, I, T) {
						(this.a = b),
							(this.b = s),
							(this.d = l),
							(this.e = y),
							(this.f = $),
							(this.g = v),
							(this.h = S),
							(this.i = I),
							(this.j = T),
							this.d.telemetryLevel === E.TelemetryLevel.USAGE && this.k();
					}
					async k() {
						this.l(),
							this.g.getTags().then(
								(b) => this.n(b),
								(b) => (0, i.$4)(b),
							),
							this.u(),
							this.w(),
							this.m().then((b) => this.h.reportWorkspaceStats(b));
					}
					async l() {
						if (!a.$l) return;
						let b = await this.j.windowsGetStringRegKey(
							"HKEY_LOCAL_MACHINE",
							"SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion",
							"EditionID",
						);
						b === void 0 && (b = "Unknown"),
							this.d.publicLog2("windowsEdition", { edition: b });
					}
					async m() {
						const b = this.b.getWorkspace(),
							s = this.b.getWorkbenchState(),
							l = await this.g.getTelemetryWorkspaceId(b, s);
						return {
							id: b.id,
							telemetryId: l,
							rendererSessionId: this.d.sessionId,
							folders: b.folders,
							transient: b.transient,
							configuration: b.configuration,
						};
					}
					n(b) {
						this.d.publicLog("workspce.tags", b);
					}
					o(b) {
						Promise.all(
							b.map((s) => {
								const l = s.path,
									y = s.with({ path: `${l !== "/" ? l : ""}/.git/config` });
								return this.a.exists(y).then(($) =>
									$
										? this.f.read(y, { acceptTextOnly: !0 }).then(
												(v) => (0, h.$h1c)(v.value, h.$g1c),
												(v) => [],
											)
										: [],
								);
							}),
						).then((s) => {
							const l = s.reduce(
									($, v) => v.reduce((S, I) => S.add(I), $),
									new Set(),
								),
								y = [];
							l.forEach(($) => y.push($)),
								this.d.publicLog("workspace.remotes", { domains: y.sort() });
						}, i.$4);
					}
					p(b) {
						Promise.all(
							b.map((s) => this.g.getHashedRemotesFromUri(s, !0)),
						).then(() => {}, i.$4);
					}
					q(b, s) {
						const l = b.map((y) => {
							const $ = y.path;
							return y.with({ path: `${$ !== "/" ? $ : ""}/node_modules` });
						});
						return this.a.resolveAll(l.map((y) => ({ resource: y }))).then(
							(y) => {
								const $ = []
									.concat(
										...y.map((S) => (S.success ? S.stat.children || [] : [])),
									)
									.map((S) => S.name);
								return g.r($, /azure/i) && (s.node = !0), s;
							},
							(y) => s,
						);
					}
					static r(b, s) {
						return b.some((l) => l.search(s) > -1) || void 0;
					}
					s(b, s) {
						return Promise.all(
							b.map((l) => {
								const y = l.path,
									$ = l.with({ path: `${y !== "/" ? y : ""}/pom.xml` });
								return this.a.exists($).then((v) =>
									v
										? this.f.read($, { acceptTextOnly: !0 }).then(
												(S) => !!S.value.match(/azure/i),
												(S) => !1,
											)
										: !1,
								);
							}),
						).then((l) => (l.indexOf(!0) !== -1 && (s.java = !0), s));
					}
					t(b) {
						const s = Object.create(null);
						this.q(b, s)
							.then((l) => this.s(b, l))
							.then((l) => {
								Object.keys(l).length && this.d.publicLog("workspace.azure", l);
							})
							.then(void 0, i.$4);
					}
					u() {
						const b = this.b.getWorkspace().folders.map((s) => s.uri);
						b.length && this.a && (this.o(b), this.p(b), this.t(b));
					}
					w() {
						const b = this.i.downloadUrl;
						b &&
							this.e
								.resolveProxy(b)
								.then((s) => {
									let l = s ? String(s).trim().split(/\s+/, 1)[0] : "EMPTY";
									["DIRECT", "PROXY", "HTTPS", "SOCKS", "EMPTY"].indexOf(l) ===
										-1 && (l = "UNKNOWN");
								})
								.then(void 0, i.$4);
					}
				});
				(e.$rgd = o),
					(e.$rgd =
						o =
						g =
							Ne(
								[
									j(0, w.$ll),
									j(1, C.$Vi),
									j(2, E.$km),
									j(3, u.$Aq),
									j(4, d.$kZ),
									j(5, m.$j1c),
									j(6, r.$8m),
									j(7, n.$Bk),
									j(8, c.$y7c),
								],
								o,
							));
			},
		),
		define(
			de[3695],
			he([1, 0, 30, 55, 1886, 52]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					t.$Io
						.as(i.Extensions.Workbench)
						.registerWorkbenchContribution(w.$rgd, E.LifecyclePhase.Eventually);
			},
		),
		define(
			de[3696],
			he([1, 0, 530, 22, 25, 78, 85, 9, 23, 20, 1260, 1886, 37, 3139]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zgd = void 0);
				const n = [
						"@azure",
						"@azure/ai",
						"@azure/core",
						"@azure/cosmos",
						"@azure/event",
						"@azure/identity",
						"@azure/keyvault",
						"@azure/search",
						"@azure/storage",
					],
					g = [
						"express",
						"sails",
						"koa",
						"hapi",
						"socket.io",
						"restify",
						"next",
						"nuxt",
						"@nestjs/core",
						"strapi",
						"gatsby",
						"react",
						"react-native",
						"react-native-macos",
						"react-native-windows",
						"rnpm-plugin-windows",
						"@angular/core",
						"@ionic",
						"vue",
						"tns-core-modules",
						"@nativescript/core",
						"electron",
						"aws-sdk",
						"aws-amplify",
						"azure",
						"azure-storage",
						"chroma",
						"faiss",
						"firebase",
						"@google-cloud/common",
						"heroku-cli",
						"langchain",
						"milvus",
						"openai",
						"pinecone",
						"qdrant",
						"@microsoft/teams-js",
						"@microsoft/office-js",
						"@microsoft/office-js-helpers",
						"@types/office-js",
						"@types/office-runtime",
						"office-ui-fabric-react",
						"@uifabric/icons",
						"@uifabric/merge-styles",
						"@uifabric/styling",
						"@uifabric/experiments",
						"@uifabric/utilities",
						"@microsoft/rush",
						"lerna",
						"just-task",
						"beachball",
						"playwright",
						"playwright-cli",
						"@playwright/test",
						"playwright-core",
						"playwright-chromium",
						"playwright-firefox",
						"playwright-webkit",
						"cypress",
						"nightwatch",
						"protractor",
						"puppeteer",
						"selenium-webdriver",
						"webdriverio",
						"gherkin",
						"@azure/app-configuration",
						"@azure/cosmos-sign",
						"@azure/cosmos-language-service",
						"@azure/synapse-spark",
						"@azure/synapse-monitoring",
						"@azure/synapse-managed-private-endpoints",
						"@azure/synapse-artifacts",
						"@azure/synapse-access-control",
						"@azure/ai-metrics-advisor",
						"@azure/service-bus",
						"@azure/keyvault-secrets",
						"@azure/keyvault-keys",
						"@azure/keyvault-certificates",
						"@azure/keyvault-admin",
						"@azure/digital-twins-core",
						"@azure/cognitiveservices-anomalydetector",
						"@azure/ai-anomaly-detector",
						"@azure/core-xml",
						"@azure/core-tracing",
						"@azure/core-paging",
						"@azure/core-https",
						"@azure/core-client",
						"@azure/core-asynciterator-polyfill",
						"@azure/core-arm",
						"@azure/amqp-common",
						"@azure/core-lro",
						"@azure/logger",
						"@azure/core-http",
						"@azure/core-auth",
						"@azure/core-amqp",
						"@azure/abort-controller",
						"@azure/eventgrid",
						"@azure/storage-file-datalake",
						"@azure/search-documents",
						"@azure/storage-file",
						"@azure/storage-datalake",
						"@azure/storage-queue",
						"@azure/storage-file-share",
						"@azure/storage-blob-changefeed",
						"@azure/storage-blob",
						"@azure/cognitiveservices-formrecognizer",
						"@azure/ai-form-recognizer",
						"@azure/cognitiveservices-textanalytics",
						"@azure/ai-text-analytics",
						"@azure/event-processor-host",
						"@azure/schema-registry-avro",
						"@azure/schema-registry",
						"@azure/eventhubs-checkpointstore-blob",
						"@azure/event-hubs",
						"@azure/communication-signaling",
						"@azure/communication-calling",
						"@azure/communication-sms",
						"@azure/communication-common",
						"@azure/communication-chat",
						"@azure/communication-administration",
						"@azure/attestation",
						"@azure/data-tables",
						"@azure/arm-appservice",
						"@azure-rest/ai-inference",
						"@azure-rest/arm-appservice",
						"@azure/arm-appcontainers",
						"@azure/arm-rediscache",
						"@azure/arm-redisenterprisecache",
						"@azure/arm-apimanagement",
						"@azure/arm-logic",
						"@azure/app-configuration",
						"@azure/arm-appconfiguration",
						"@azure/arm-dashboard",
						"@azure/arm-signalr",
						"@azure/arm-securitydevops",
						"@azure/arm-labservices",
						"@azure/web-pubsub",
						"@azure/web-pubsub-client",
						"@azure/web-pubsub-client-protobuf",
						"@azure/web-pubsub-express",
						"@azure/openai",
						"@azure/arm-hybridkubernetes",
						"@azure/arm-kubernetesconfiguration",
						"@anthropic-ai/sdk",
						"@anthropic-ai/tokenizer",
						"@arizeai/openinference-instrumentation-langchain",
						"@arizeai/openinference-instrumentation-openai",
						"@aws-sdk-client-bedrock-runtime",
						"@aws-sdk/client-bedrock",
						"@datastax/astra-db-ts",
						"fireworks-js",
						"@google-cloud/aiplatform",
						"@huggingface/inference",
						"humanloop",
						"@langchain/anthropic",
						"langsmith",
						"llamaindex",
						"mongodb",
						"neo4j-driver",
						"ollama",
						"onnxruntime-node",
						"onnxruntime-web",
						"pg",
						"postgresql",
						"redis",
						"@supabase/supabase-js",
						"@tensorflow/tfjs",
						"@xenova/transformers",
						"tika",
						"weaviate-client",
						"@zilliz/milvus2-sdk-node",
						"@azure-rest/ai-anomaly-detector",
						"@azure-rest/ai-content-safety",
						"@azure-rest/ai-document-intelligence",
						"@azure-rest/ai-document-translator",
						"@azure-rest/ai-personalizer",
						"@azure-rest/ai-translation-text",
						"@azure-rest/ai-vision-image-analysis",
						"@azure/ai-anomaly-detector",
						"@azure/ai-form-recognizer",
						"@azure/ai-language-conversations",
						"@azure/ai-language-text",
						"@azure/ai-text-analytics",
						"@azure/arm-botservice",
						"@azure/arm-cognitiveservices",
						"@azure/arm-machinelearning",
						"@azure/cognitiveservices-contentmoderator",
						"@azure/cognitiveservices-customvision-prediction",
						"@azure/cognitiveservices-customvision-training",
						"@azure/cognitiveservices-face",
						"@azure/cognitiveservices-translatortext",
						"microsoft-cognitiveservices-speech-sdk",
						"@google/generative-ai",
					],
					p = [
						"azure-ai",
						"azure-cognitiveservices",
						"azure-core",
						"azure-cosmos",
						"azure-event",
						"azure-identity",
						"azure-keyvault",
						"azure-mgmt",
						"azure-ml",
						"azure-search",
						"azure-storage",
					],
					o = [
						"azure",
						"azure-ai-inference",
						"azure-ai-language-conversations",
						"azure-ai-language-questionanswering",
						"azure-ai-ml",
						"azure-ai-translation-document",
						"azure-appconfiguration",
						"azure-appconfiguration-provider",
						"azure-loganalytics",
						"azure-synapse-nspkg",
						"azure-synapse-spark",
						"azure-synapse-artifacts",
						"azure-synapse-accesscontrol",
						"azure-synapse",
						"azure-cognitiveservices-vision-nspkg",
						"azure-cognitiveservices-search-nspkg",
						"azure-cognitiveservices-nspkg",
						"azure-cognitiveservices-language-nspkg",
						"azure-cognitiveservices-knowledge-nspkg",
						"azure-containerregistry",
						"azure-communication-identity",
						"azure-communication-phonenumbers",
						"azure-communication-email",
						"azure-communication-rooms",
						"azure-communication-callautomation",
						"azure-confidentialledger",
						"azure-containerregistry",
						"azure-developer-loadtesting",
						"azure-iot-deviceupdate",
						"azure-messaging-webpubsubservice",
						"azure-monitor",
						"azure-monitor-query",
						"azure-monitor-ingestion",
						"azure-mgmt-appcontainers",
						"azure-mgmt-apimanagement",
						"azure-mgmt-web",
						"azure-mgmt-redis",
						"azure-mgmt-redisenterprise",
						"azure-mgmt-logic",
						"azure-appconfiguration",
						"azure-appconfiguration-provider",
						"azure-mgmt-appconfiguration",
						"azure-mgmt-dashboard",
						"azure-mgmt-signalr",
						"azure-messaging-webpubsubservice",
						"azure-mgmt-webpubsub",
						"azure-mgmt-securitydevops",
						"azure-mgmt-labservices",
						"azure-ai-metricsadvisor",
						"azure-servicebus",
						"azureml-sdk",
						"azure-keyvault-nspkg",
						"azure-keyvault-secrets",
						"azure-keyvault-keys",
						"azure-keyvault-certificates",
						"azure-keyvault-administration",
						"azure-digitaltwins-nspkg",
						"azure-digitaltwins-core",
						"azure-cognitiveservices-anomalydetector",
						"azure-ai-anomalydetector",
						"azure-applicationinsights",
						"azure-core-tracing-opentelemetry",
						"azure-core-tracing-opencensus",
						"azure-nspkg",
						"azure-common",
						"azure-eventgrid",
						"azure-storage-file-datalake",
						"azure-search-nspkg",
						"azure-search-documents",
						"azure-storage-nspkg",
						"azure-storage-file",
						"azure-storage-common",
						"azure-storage-queue",
						"azure-storage-file-share",
						"azure-storage-blob-changefeed",
						"azure-storage-blob",
						"azure-cognitiveservices-formrecognizer",
						"azure-ai-formrecognizer",
						"azure-ai-nspkg",
						"azure-cognitiveservices-language-textanalytics",
						"azure-ai-textanalytics",
						"azure-schemaregistry-avroencoder",
						"azure-schemaregistry-avroserializer",
						"azure-schemaregistry",
						"azure-eventhub-checkpointstoreblob-aio",
						"azure-eventhub-checkpointstoreblob",
						"azure-eventhub",
						"azure-servicefabric",
						"azure-communication-nspkg",
						"azure-communication-sms",
						"azure-communication-chat",
						"azure-communication-administration",
						"azure-security-attestation",
						"azure-data-nspkg",
						"azure-data-tables",
						"azure-devtools",
						"azure-elasticluster",
						"azure-functions",
						"azure-graphrbac",
						"azure-iothub-device-client",
						"azure-shell",
						"azure-translator",
						"azure-mgmt-hybridkubernetes",
						"azure-mgmt-kubernetesconfiguration",
						"adal",
						"pydocumentdb",
						"botbuilder-core",
						"botbuilder-schema",
						"botframework-connector",
						"playwright",
						"transformers",
						"langchain",
						"llama-index",
						"guidance",
						"openai",
						"semantic-kernel",
						"sentence-transformers",
						"anthropic",
						"aporia",
						"arize",
						"deepchecks",
						"fireworks-ai",
						"langchain-fireworks",
						"humanloop",
						"pymongo",
						"langchain-anthropic",
						"langchain-huggingface",
						"langchain-fireworks",
						"ollama",
						"onnxruntime",
						"pgvector",
						"sentence-transformers",
						"tika",
						"trulens",
						"trulens-eval",
						"wandb",
						"azure-ai-contentsafety",
						"azure-ai-documentintelligence",
						"azure-ai-translation-text",
						"azure-ai-vision",
						"azure-cognitiveservices-language-luis",
						"azure-cognitiveservices-speech",
						"azure-cognitiveservices-vision-contentmoderator",
						"azure-cognitiveservices-vision-face",
						"azure-mgmt-cognitiveservices",
						"azure-mgmt-search",
						"google-generativeai",
					],
					f = [
						"github.com/Azure/azure-sdk-for-go/sdk/storage/azblob",
						"github.com/Azure/azure-sdk-for-go/sdk/storage/azfile",
						"github.com/Azure/azure-sdk-for-go/sdk/storage/azqueue",
						"github.com/Azure/azure-sdk-for-go/sdk/storage/azdatalake",
						"github.com/Azure/azure-sdk-for-go/sdk/tracing/azotel",
						"github.com/Azure/azure-sdk-for-go/sdk/security/keyvault/azadmin",
						"github.com/Azure/azure-sdk-for-go/sdk/security/keyvault/azcertificates",
						"github.com/Azure/azure-sdk-for-go/sdk/security/keyvault/azkeys",
						"github.com/Azure/azure-sdk-for-go/sdk/security/keyvault/azsecrets",
						"github.com/Azure/azure-sdk-for-go/sdk/monitor/azquery",
						"github.com/Azure/azure-sdk-for-go/sdk/monitor/azingest",
						"github.com/Azure/azure-sdk-for-go/sdk/messaging/azeventhubs",
						"github.com/Azure/azure-sdk-for-go/sdk/messaging/azservicebus",
						"github.com/Azure/azure-sdk-for-go/sdk/data/azappconfig",
						"github.com/Azure/azure-sdk-for-go/sdk/data/azcosmos",
						"github.com/Azure/azure-sdk-for-go/sdk/data/aztables",
						"github.com/Azure/azure-sdk-for-go/sdk/containers/azcontainerregistry",
						"github.com/Azure/azure-sdk-for-go/sdk/ai/azopenai",
						"github.com/Azure/azure-sdk-for-go/sdk/azidentity",
						"github.com/Azure/azure-sdk-for-go/sdk/azcore",
						"github.com/Azure/azure-sdk-for-go/sdk/resourcemanager/",
					];
				let b = class {
					constructor(l, y, $, v) {
						(this.b = l), (this.d = y), (this.f = $), (this.g = v);
					}
					async getTags() {
						return this.a || (this.a = await this.h()), this.a;
					}
					async getTelemetryWorkspaceId(l, y) {
						function $(S) {
							return (0, t.$ojb)(
								S.scheme === m.Schemas.file ? S.fsPath : S.toString(),
							);
						}
						let v;
						switch (y) {
							case w.WorkbenchState.EMPTY:
								v = void 0;
								break;
							case w.WorkbenchState.FOLDER:
								v = await $(l.folders[0].uri);
								break;
							case w.WorkbenchState.WORKSPACE:
								l.configuration && (v = await $(l.configuration));
						}
						return v;
					}
					getHashedRemotesFromUri(l, y = !1) {
						const $ = l.path,
							v = l.with({ path: `${$ !== "/" ? $ : ""}/.git/config` });
						return this.b.exists(v).then((S) =>
							S
								? this.g.read(v, { acceptTextOnly: !0 }).then(
										(I) => (0, a.$qgd)(I.value, y),
										(I) => [],
									)
								: [],
						);
					}
					async h() {
						const l = Object.create(null),
							y = this.d.getWorkbenchState(),
							$ = this.d.getWorkspace();
						l["workspace.id"] = await this.getTelemetryWorkspaceId($, y);
						const {
							filesToOpenOrCreate: v,
							filesToDiff: S,
							filesToMerge: I,
						} = this.f;
						(l["workbench.filesToOpenOrCreate"] = (v && v.length) || 0),
							(l["workbench.filesToDiff"] = (S && S.length) || 0),
							(l["workbench.filesToMerge"] = (I && I.length) || 0);
						const T = y === w.WorkbenchState.EMPTY;
						(l["workspace.roots"] = T ? 0 : $.folders.length),
							(l["workspace.empty"] = T);
						const P = T ? void 0 : $.folders.map((L) => L.uri);
						if (!P || !P.length) return Promise.resolve(l);
						const k = d.URI.joinPath(
							this.f.workspaceStorageHome,
							"aiGeneratedWorkspaces.json",
						);
						return (
							await this.b.exists(k).then(async (L) => {
								if (L)
									try {
										const D = await this.b.readFile(k);
										JSON.parse(D.value.toString()).indexOf(
											$.folders[0].uri.toString(),
										) > -1 && (l.aiGenerated = !0);
									} catch {}
							}),
							this.b.resolveAll(P.map((L) => ({ resource: L }))).then((L) => {
								const D = []
										.concat(
											...L.map((ie) =>
												ie.success ? ie.stat.children || [] : [],
											),
										)
										.map((ie) => ie.name),
									M = D.reduce((ie, ne) => ie.add(ne.toLowerCase()), new Set());
								(l["workspace.grunt"] = M.has("gruntfile.js")),
									(l["workspace.gulp"] = M.has("gulpfile.js")),
									(l["workspace.jake"] = M.has("jakefile.js")),
									(l["workspace.tsconfig"] = M.has("tsconfig.json")),
									(l["workspace.jsconfig"] = M.has("jsconfig.json")),
									(l["workspace.config.xml"] = M.has("config.xml")),
									(l["workspace.vsc.extension"] = M.has(
										"vsc-extension-quickstart.md",
									)),
									(l["workspace.ASP5"] =
										M.has("project.json") && this.l(D, /^.+\.cs$/i)),
									(l["workspace.sln"] = this.l(D, /^.+\.sln$|^.+\.csproj$/i)),
									(l["workspace.unity"] =
										M.has("assets") &&
										M.has("library") &&
										M.has("projectsettings")),
									(l["workspace.npm"] =
										M.has("package.json") || M.has("node_modules")),
									(l["workspace.bower"] =
										M.has("bower.json") || M.has("bower_components")),
									(l["workspace.java.pom"] = M.has("pom.xml")),
									(l["workspace.java.gradle"] =
										M.has("build.gradle") ||
										M.has("settings.gradle") ||
										M.has("build.gradle.kts") ||
										M.has("settings.gradle.kts") ||
										M.has("gradlew") ||
										M.has("gradlew.bat")),
									(l["workspace.yeoman.code.ext"] = M.has(
										"vsc-extension-quickstart.md",
									)),
									(l["workspace.py.requirements"] = M.has("requirements.txt")),
									(l["workspace.py.requirements.star"] = this.l(
										D,
										/^(.*)requirements(.*)\.txt$/i,
									)),
									(l["workspace.py.Pipfile"] = M.has("pipfile")),
									(l["workspace.py.conda"] = this.l(
										D,
										/^environment(\.yml$|\.yaml$)/i,
									)),
									(l["workspace.py.setup"] = M.has("setup.py")),
									(l["workspace.py.manage"] = M.has("manage.py")),
									(l["workspace.py.setupcfg"] = M.has("setup.cfg")),
									(l["workspace.py.app"] = M.has("app.py")),
									(l["workspace.py.pyproject"] = M.has("pyproject.toml")),
									(l["workspace.go.mod"] = M.has("go.mod"));
								const N = M.has("mainactivity.cs") || M.has("mainactivity.fs"),
									A = M.has("appdelegate.cs") || M.has("appdelegate.fs"),
									R = M.has("androidmanifest.xml"),
									O = M.has("platforms"),
									B = M.has("plugins"),
									U = M.has("www"),
									z = M.has("properties"),
									F = M.has("resources"),
									x = M.has("jni");
								l["workspace.config.xml"] &&
									!l["workspace.language.cs"] &&
									!l["workspace.language.vb"] &&
									!l["workspace.language.aspx"] &&
									(O && B && U
										? (l["workspace.cordova.high"] = !0)
										: (l["workspace.cordova.low"] = !0)),
									l["workspace.config.xml"] &&
										!l["workspace.language.cs"] &&
										!l["workspace.language.vb"] &&
										!l["workspace.language.aspx"] &&
										M.has("ionic.config.json") &&
										(l["workspace.ionic"] = !0),
									N && z && F && (l["workspace.xamarin.android"] = !0),
									A && F && (l["workspace.xamarin.ios"] = !0),
									R && x && (l["workspace.android.cpp"] = !0);
								function H(ie, ne, ee, _) {
									return M.has(ie)
										? P.map((te) => {
												const Q = te.with({
													path: `${te.path !== "/" ? te.path : ""}/${ie}`,
												});
												return ne.exists(Q).then(
													(Z) => {
														if (Z)
															return ee.read(Q, { acceptTextOnly: !0 }).then(_);
													},
													(Z) => {},
												);
											})
										: [];
								}
								function q(ie) {
									o.indexOf(ie) > -1 && (l["workspace.py." + ie] = !0);
									for (const ne of p)
										ie.startsWith(ne) && (l["workspace.py." + ne] = !0);
									l["workspace.py.any-azure"] ||
										(l["workspace.py.any-azure"] = /azure/i.test(ie));
								}
								const V = H("requirements.txt", this.b, this.g, (ie) => {
										const ne = (0, h.$zf)(ie.value);
										for (const ee of ne) {
											const _ = ee.split("=="),
												te = ee.split(">="),
												Q = (_.length === 2 ? _[0] : te[0]).trim();
											q(Q);
										}
									}),
									G = H("pipfile", this.b, this.g, (ie) => {
										let ne = (0, h.$zf)(ie.value);
										ne = ne.slice(ne.indexOf("[packages]") + 1);
										for (const ee of ne) {
											if (ee.trim().indexOf("[") > -1) break;
											if (ee.indexOf("=") === -1) continue;
											const _ = ee.split("=")[0].trim();
											q(_);
										}
									}),
									K = H("package.json", this.b, this.g, (ie) => {
										try {
											const ne = JSON.parse(ie.value),
												ee = Object.keys(ne.dependencies || {}).concat(
													Object.keys(ne.devDependencies || {}),
												);
											for (const _ of ee)
												if (_.startsWith("react-native"))
													l["workspace.reactNative"] = !0;
												else if (
													_ === "tns-core-modules" ||
													_ === "@nativescript/core"
												)
													l["workspace.nativescript"] = !0;
												else if (g.indexOf(_) > -1)
													l["workspace.npm." + _] = !0;
												else
													for (const te of n)
														_.startsWith(te) && (l["workspace.npm." + te] = !0);
										} catch {}
									}),
									J = H("go.mod", this.b, this.g, (ie) => {
										try {
											const ne = (0, h.$zf)(ie.value);
											let ee = !1;
											for (let _ = 0; _ < ne.length; _++) {
												const te = ne[_].trim();
												if (te.startsWith("require (")) {
													if (ee) break;
													ee = !0;
													continue;
												}
												if (te.startsWith(")")) break;
												if (ee && te !== "") {
													const Q = te.split(" ")[0].trim();
													for (const Z of f)
														Q.startsWith(Z) &&
															(l["workspace.go.mod." + Q] = !0);
												}
											}
										} catch {}
									}),
									W = H("pom.xml", this.b, this.g, (ie) => {
										try {
											let ne;
											for (; (ne = c.$ugd.exec(ie.value)); ) {
												let ee;
												for (; (ee = c.$vgd.exec(ne[1])); ) {
													const _ = c.$wgd.exec(ee[1]),
														te = c.$xgd.exec(ee[1]);
													_ && te && this.k(_[1], te[1], "workspace.pom.", l);
												}
											}
										} catch {}
									}),
									X = H("build.gradle", this.b, this.g, (ie) => {
										try {
											this.j(ie.value, c.$sgd, l), this.j(ie.value, c.$tgd, l);
										} catch {}
									}),
									Y = P.map((ie) => {
										const ne = d.URI.joinPath(
											ie,
											"/app/src/main/AndroidManifest.xml",
										);
										return this.b.exists(ne).then(
											(ee) => {
												ee && (l["workspace.java.android"] = !0);
											},
											(ee) => {},
										);
									});
								return Promise.all([
									...K,
									...V,
									...G,
									...W,
									...X,
									...Y,
									...J,
								]).then(() => l);
							})
						);
					}
					j(l, y, $) {
						let v;
						for (; (v = y.exec(l)); ) {
							const S = v[1],
								I = v[2];
							S && I && this.k(S, I, "workspace.gradle.", $);
						}
					}
					k(l, y, $, v) {
						for (const S of c.$ygd)
							if (S.predicate(l, y)) {
								v[$ + S.tag] = !0;
								return;
							}
					}
					l(l, y) {
						return l.some(($) => $.search(y) > -1) || void 0;
					}
				};
				(e.$zgd = b),
					(e.$zgd = b =
						Ne([j(0, i.$ll), j(1, w.$Vi), j(2, E.$r8), j(3, C.$kZ)], b)),
					(0, r.$lK)(u.$j1c, b, r.InstantiationType.Delayed);
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[3697],
		he([
			1, 0, 93, 10, 8, 39, 35, 26, 107, 4, 7, 5, 105, 11, 92, 145, 117, 14, 50,
			233, 472, 72, 111, 3, 431, 323, 15, 539, 9, 514, 49, 292, 288, 27, 347,
			469, 52, 237, 690, 1261, 106, 6, 23, 806, 616, 87, 160,
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
			F,
			x,
			H,
			q,
			V,
			G,
			K,
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$3Uc = e.TerminalTabsListSizes = void 0),
				(u = mt(u)),
				(y = xi(y));
			const J = u.$;
			var W;
			(function (_) {
				(_[(_.TabHeight = 22)] = "TabHeight"),
					(_[(_.NarrowViewWidth = 46)] = "NarrowViewWidth"),
					(_[(_.WideViewMinimumWidth = 80)] = "WideViewMinimumWidth"),
					(_[(_.DefaultWidth = 120)] = "DefaultWidth"),
					(_[(_.MidpointViewWidth = 63)] = "MidpointViewWidth"),
					(_[(_.ActionbarMinimumWidth = 105)] = "ActionbarMinimumWidth"),
					(_[(_.MaximumWidth = 500)] = "MaximumWidth");
			})(W || (e.TerminalTabsListSizes = W = {}));
			let X = class extends t.$yMb {
				constructor(te, Q, Z, se, re, le, oe, ae, pe, $e, ye, ue) {
					super(
						"TerminalTabsList",
						te,
						{
							getHeight: () => W.TabHeight,
							getTemplateId: () => "terminal.tabs",
						},
						[
							ae.createInstance(Y, te, ae.createInstance(b.$uPb, b.$tPb), () =>
								this.getSelectedElements(),
							),
						],
						{
							horizontalScrolling: !1,
							supportDynamicHeights: !1,
							selectionNavigation: !0,
							identityProvider: { getId: (me) => me?.instanceId },
							accessibilityProvider: ae.createInstance(ie),
							smoothScrolling: re.getValue("workbench.list.smoothScrolling"),
							multipleSelectionSupport: !0,
							paddingBottom: W.TabHeight,
							dnd: ae.createInstance(ne),
							openOnSingleClick: !0,
						},
						Q,
						Z,
						re,
						ae,
					),
						(this.V = re),
						(this.W = le),
						(this.X = oe),
						(this.Y = $e),
						(this.Z = ue);
					const fe = [
						this.X.onDidChangeInstances(() => this.refresh()),
						this.X.onDidChangeGroups(() => this.refresh()),
						this.X.onDidShow(() => this.refresh()),
						this.X.onDidChangeInstanceCapability(() => this.refresh()),
						this.W.onAnyInstanceTitleChange(() => this.refresh()),
						this.W.onAnyInstanceIconChange(() => this.refresh()),
						this.W.onAnyInstancePrimaryStatusChange(() => this.refresh()),
						this.W.onDidChangeConnectionState(() => this.refresh()),
						this.Y.onDidColorThemeChange(() => this.refresh()),
						this.X.onDidChangeActiveInstance((me) => {
							if (me) {
								const ve = this.X.instances.indexOf(me);
								this.setSelection([ve]), this.reveal(ve);
							}
							this.refresh();
						}),
					];
					this.y.add(
						ye.onWillShutdown((me) => {
							(0, $.$Vc)(fe), (fe.length = 0);
						}),
					),
						this.y.add(
							(0, $.$Yc)(() => {
								(0, $.$Vc)(fe), (fe.length = 0);
							}),
						),
						this.y.add(
							this.onMouseDblClick(async (me) => {
								if (this.getFocus().length === 0) {
									const ge = await this.W.createTerminal({
										location: p.TerminalLocation.Panel,
									});
									this.X.setActiveInstance(ge), await ge.focusWhenReady();
								}
								this.W.getEditingTerminal()?.instanceId !==
									me.element?.instanceId &&
									this.ab() === "doubleClick" &&
									this.getFocus().length === 1 &&
									me.element?.focus(!0);
							}),
						),
						this.y.add(
							this.onMouseClick(async (me) => {
								this.W.getEditingTerminal()?.instanceId !==
									me.element?.instanceId &&
									(me.browserEvent.altKey && me.element
										? await this.W.createTerminal({
												location: { parentTerminal: me.element },
											})
										: this.ab() === "singleClick" &&
											this.getSelection().length <= 1 &&
											me.element?.focus(!0));
							}),
						),
						this.y.add(
							this.onContextMenu((me) => {
								if (!me.element) {
									this.setSelection([]);
									return;
								}
								const ve = this.getSelectedElements();
								(!ve || !ve.find((ge) => me.element === ge)) &&
									this.setFocus(me.index !== void 0 ? [me.index] : []);
							}),
						),
						(this.S = B.TerminalContextKeys.tabsSingularSelection.bindTo(Q)),
						(this.U = B.TerminalContextKeys.splitTerminal.bindTo(Q)),
						this.y.add(this.onDidChangeSelection((me) => this.bb())),
						this.y.add(this.onDidChangeFocus(() => this.bb())),
						this.y.add(
							this.onDidOpen(async (me) => {
								const ve = me.element;
								ve &&
									(this.X.setActiveInstance(ve),
									me.editorOptions.preserveFocus ||
										(await ve.focusWhenReady()));
							}),
						),
						this.R ||
							((this.R = this.y.add(ae.createInstance(ee))),
							this.y.add(pe.registerDecorationsProvider(this.R))),
						this.refresh();
				}
				ab() {
					return this.V.getValue(p.TerminalSettingId.TabsFocusMode);
				}
				refresh(te = !0) {
					te && this.W.isEditable(void 0) && this.domFocus(),
						this.splice(0, this.length, this.X.instances.slice());
				}
				focusHover() {
					const te = this.getSelectedElements()[0];
					te &&
						this.Z.showHover(
							{
								...(0, z.$ZUc)(te),
								target: this.getHTMLElement(),
								trapFocus: !0,
							},
							!0,
						);
				}
				bb() {
					this.S.set(this.getSelectedElements().length === 1);
					const te = this.getFocusedElements();
					this.U.set(te.length > 0 && this.X.instanceIsSplit(te[0]));
				}
			};
			(e.$3Uc = X),
				(e.$3Uc = X =
					Ne(
						[
							j(1, w.$6j),
							j(2, t.$fMb),
							j(3, C.$iP),
							j(4, i.$gj),
							j(5, m.$iIb),
							j(6, m.$lIb),
							j(7, a.$Li),
							j(8, s.$sPb),
							j(9, C.$iP),
							j(10, O.$n6),
							j(11, l.$Uyb),
						],
						X,
					));
			let Y = class {
				constructor(te, Q, Z, se, re, le, oe, ae, pe, $e, ye, ue, fe) {
					(this.a = te),
						(this.b = Q),
						(this.c = Z),
						(this.d = se),
						(this.f = re),
						(this.g = le),
						(this.h = oe),
						(this.j = ae),
						(this.k = pe),
						(this.l = $e),
						(this.m = ye),
						(this.n = ue),
						(this.o = fe),
						(this.templateId = "terminal.tabs");
				}
				renderTemplate(te) {
					const Q = u.$fhb(te, J(".terminal-tabs-entry")),
						Z = {},
						se = this.b.create(Q, {
							supportHighlights: !0,
							supportDescriptionHighlights: !0,
							supportIcons: !0,
							hoverDelegate: {
								delay: this.k.getValue("workbench.hover.delay"),
								showHover: (oe) =>
									this.j.showHover({
										...oe,
										actions: Z.hoverActions,
										target: Q,
										persistence: { hideOnHover: !0 },
										appearance: { showPointer: !0 },
										position: {
											hoverPosition:
												this.f.config.tabs.location === "left"
													? K.HoverPosition.RIGHT
													: K.HoverPosition.LEFT,
										},
									}),
							},
						}),
						re = u.$fhb(se.element, J(".actions")),
						le = new h.$eib(re, {
							actionRunner: new V.$yUc(),
							actionViewItemProvider: (oe, ae) =>
								oe instanceof c.$2X
									? this.d.createInstance(n.$Lyb, oe, {
											hoverDelegate: ae.hoverDelegate,
										})
									: void 0,
						});
					return {
						element: Q,
						label: se,
						actionBar: le,
						context: Z,
						elementDisposables: new $.$Zc(),
					};
				}
				shouldHideText() {
					return this.a ? this.a.clientWidth < W.MidpointViewWidth : !1;
				}
				shouldHideActionBar() {
					return this.a ? this.a.clientWidth <= W.ActionbarMinimumWidth : !1;
				}
				renderElement(te, Q, Z) {
					const se = !this.shouldHideText(),
						re = this.h.getGroupForInstance(te);
					if (!re)
						throw new Error(
							`Could not find group for instance "${te.instanceId}"`,
						);
					Z.element.classList.toggle("has-text", se),
						Z.element.classList.toggle(
							"is-active",
							this.h.activeInstance === te,
						);
					let le = "";
					if (re.terminalInstances.length > 1) {
						const ve = re.terminalInstances.indexOf(te);
						ve === 0
							? (le = "\u250C ")
							: ve === re.terminalInstances.length - 1
								? (le = "\u2514 ")
								: (le = "\u251C ");
					}
					const oe = (0, z.$ZUc)(te);
					Z.context.hoverActions = oe.actions;
					const ae = this.d.invokeFunction(k.$Tnc, te),
						pe = !this.shouldHideActionBar();
					let $e = "";
					if (se)
						this.fillActionBar(te, Z),
							($e = le),
							te.icon && ($e += `$(${ae}) ${te.title}`);
					else {
						const ve = te.statusList.primary;
						ve && ve.severity > y.default.Ignore
							? ($e = `${le}$(${ve.icon?.id || ae})`)
							: ($e = `${le}$(${ae})`);
					}
					pe || Z.actionBar.clear(),
						Z.elementDisposables.add(
							u.$0fb(Z.element, u.$$gb.AUXCLICK, (ve) => {
								ve.stopImmediatePropagation(),
									ve.button === 1 && this.g.safeDisposeTerminal(te);
							}),
						);
					const ye = [],
						ue = (0, k.$Onc)(te);
					ue && ye.push(ue);
					const fe = (0, k.$Snc)(te, this.n.getColorTheme().type);
					fe && ye.push(...fe),
						Z.label.setResource(
							{
								resource: te.resource,
								name: $e,
								description: se ? te.description : void 0,
							},
							{
								fileDecorations: { colors: !0, badges: se },
								title: {
									markdown: oe.content,
									markdownNotSupportedFallback: void 0,
								},
								extraClasses: ye,
							},
						);
					const me = this.g.getEditableData(te);
					Z.label.element.classList.toggle("editable-tab", !!me),
						me &&
							(Z.elementDisposables.add(
								this.q(
									Z.label.element.querySelector(".monaco-icon-label-container"),
									te,
									me,
								),
							),
							Z.actionBar.clear());
				}
				q(te, Q, Z) {
					const se = Q.title || "",
						re = new D.$Mob(te, this.o, {
							validationOptions: {
								validation: (pe) => {
									const $e = Z.validationMessage(pe);
									return !$e || $e.severity !== y.default.Error
										? null
										: {
												content: $e.content,
												formatContent: !0,
												type: D.MessageType.ERROR,
											};
								},
							},
							ariaLabel: (0, r.localize)(10157, null),
							inputBoxStyles: F.$wyb,
						});
					(re.element.style.height = "22px"),
						(re.value = se),
						re.focus(),
						re.select({ start: 0, end: se.length });
					const le = (0, M.$hb)((pe, $e) => {
							re.element.style.display = "none";
							const ye = re.value;
							(0, $.$Vc)(ae), re.element.remove(), $e && Z.onFinish(ye, pe);
						}),
						oe = () => {
							if (re.isInputValid()) {
								const pe = Z.validationMessage(re.value);
								pe
									? re.showMessage({
											content: pe.content,
											formatContent: !0,
											type:
												pe.severity === y.default.Info
													? D.MessageType.INFO
													: pe.severity === y.default.Warning
														? D.MessageType.WARNING
														: D.MessageType.ERROR,
										})
									: re.hideMessage();
							}
						};
					oe();
					const ae = [
						re,
						u.$$fb(re.inputElement, u.$$gb.KEY_DOWN, (pe) => {
							pe.stopPropagation(),
								pe.equals(N.KeyCode.Enter)
									? le(re.isInputValid(), !0)
									: pe.equals(N.KeyCode.Escape) && le(!1, !0);
						}),
						u.$$fb(re.inputElement, u.$$gb.KEY_UP, (pe) => {
							oe();
						}),
						u.$0fb(re.inputElement, u.$$gb.BLUR, () => {
							le(re.isInputValid(), !0);
						}),
					];
					return (0, $.$Yc)(() => {
						le(!1, !1);
					});
				}
				disposeElement(te, Q, Z) {
					Z.elementDisposables.clear(), Z.actionBar.clear();
				}
				disposeTemplate(te) {
					te.elementDisposables.dispose(),
						te.label.dispose(),
						te.actionBar.dispose();
				}
				fillActionBar(te, Q) {
					const Z = [
						new f.$rj(
							g.TerminalCommandId.SplitActiveTab,
							R.$hUc.split.short,
							d.ThemeIcon.asClassName(o.$ak.splitHorizontal),
							!0,
							async () => {
								this.r(te, async (se) => {
									this.g.createTerminal({ location: { parentTerminal: se } });
								});
							},
						),
						new f.$rj(
							g.TerminalCommandId.KillActiveTab,
							R.$hUc.kill.short,
							d.ThemeIcon.asClassName(o.$ak.trashcan),
							!0,
							async () => {
								this.r(te, (se) => this.g.safeDisposeTerminal(se));
							},
						),
					];
					Q.actionBar.clear();
					for (const se of Z)
						Q.actionBar.push(se, {
							icon: !0,
							label: !1,
							keybinding: this.l.lookupKeybinding(se.id)?.getLabel(),
						});
				}
				r(te, Q) {
					const Z = this.c();
					if (Z.includes(te)) for (const se of Z) se && Q(se);
					else Q(te);
					this.h.focusTabs(), this.m.lastFocusedList?.focusNext();
				}
			};
			Y = Ne(
				[
					j(3, a.$Li),
					j(4, m.$jIb),
					j(5, m.$iIb),
					j(6, m.$lIb),
					j(7, l.$Uyb),
					j(8, i.$gj),
					j(9, E.$uZ),
					j(10, t.$fMb),
					j(11, C.$iP),
					j(12, L.$Wxb),
				],
				Y,
			);
			let ie = class {
				constructor(te) {
					this.a = te;
				}
				getWidgetAriaLabel() {
					return (0, r.localize)(10158, null);
				}
				getAriaLabel(te) {
					let Q = "";
					const Z = this.a.getGroupForInstance(te);
					if (Z && Z.terminalInstances?.length > 1) {
						const se = Z.terminalInstances.indexOf(te);
						Q = (0, r.localize)(
							10159,
							null,
							te.instanceId,
							te.title,
							se + 1,
							Z.terminalInstances.length,
						);
					} else Q = (0, r.localize)(10160, null, te.instanceId, te.title);
					return Q;
				}
			};
			ie = Ne([j(0, m.$lIb)], ie);
			let ne = class extends $.$1c {
				constructor(te, Q, Z) {
					super(),
						(this.f = te),
						(this.g = Q),
						(this.h = Z),
						(this.b = $.$1c.None),
						(this.c = this.f.getPrimaryBackend());
				}
				getDragURI(te) {
					return this.f.getEditingTerminal()?.instanceId === te.instanceId
						? null
						: te.resource.toString();
				}
				getDragLabel(te, Q) {
					return te.length === 1 ? te[0].title : void 0;
				}
				onDragLeave() {
					(this.a = void 0), this.b.dispose(), (this.b = $.$1c.None);
				}
				onDragStart(te, Q) {
					if (!Q.dataTransfer) return;
					const Z = te.getData();
					if (!Array.isArray(Z)) return;
					const se = Z.filter((re) => "instanceId" in re);
					se.length > 0 &&
						Q.dataTransfer.setData(
							m.TerminalDataTransfers.Terminals,
							JSON.stringify(se.map((re) => re.resource.toString())),
						);
				}
				onDragOver(te, Q, Z, se, re) {
					if (
						te instanceof T.$yib &&
						!(0, A.$mzb)(
							re,
							S.$Ohb.FILES,
							S.$Ohb.RESOURCES,
							m.TerminalDataTransfers.Terminals,
							A.$hzb.FILES,
						)
					)
						return !1;
					const le = this.a !== Q;
					return (
						le && (this.b.dispose(), (this.a = Q)),
						!Q && !(0, A.$mzb)(re, m.TerminalDataTransfers.Terminals)
							? te instanceof T.$wib
							: (le &&
									Q &&
									(this.b = (0, I.$Oh)(
										() => {
											this.f.setActiveInstance(Q), (this.a = void 0);
										},
										500,
										this.B,
									)),
								{
									feedback: Z ? [Z] : void 0,
									accept: !0,
									effect: {
										type: v.ListDragOverEffectType.Move,
										position: v.ListDragOverEffectPosition.Over,
									},
								})
					);
				}
				async drop(te, Q, Z, se, re) {
					this.b.dispose(), (this.a = void 0);
					let le;
					const oe = [],
						ae = (0, U.$VUc)(re);
					if (ae)
						for (const pe of ae) {
							const $e = this.f.getInstanceFromResource(pe);
							if ($e)
								Array.isArray(le) ? le.push($e) : (le = [$e]),
									this.f.moveToTerminalView($e);
							else if (this.c) {
								const ye = (0, U.$TUc)(pe);
								ye.instanceId &&
									oe.push(
										this.c.requestDetachInstance(ye.workspaceId, ye.instanceId),
									);
							}
						}
					if (oe.length) {
						let pe = await Promise.all(oe);
						pe = pe.filter((ye) => ye !== void 0);
						let $e;
						for (const ye of pe)
							$e = await this.f.createTerminal({
								config: { attachPersistentProcess: ye },
							});
						$e && this.f.setActiveInstance($e);
						return;
					}
					if (le === void 0) {
						if (!(te instanceof T.$wib)) {
							this.j(Q, re);
							return;
						}
						const pe = te.getData();
						if (!pe || !Array.isArray(pe)) return;
						le = [];
						for (const $e of pe) "instanceId" in $e && le.push($e);
					}
					if (!Q) {
						this.g.moveGroupToEnd(le), this.f.setActiveInstance(le[0]);
						return;
					}
					this.g.moveGroup(le, Q), this.f.setActiveInstance(le[0]);
				}
				async j(te, Q) {
					if (!te || !Q.dataTransfer) return;
					let Z;
					const se = Q.dataTransfer.getData(S.$Ohb.RESOURCES);
					se && (Z = P.URI.parse(JSON.parse(se)[0]));
					const re = Q.dataTransfer.getData(A.$hzb.FILES);
					!Z && re && (Z = P.URI.file(JSON.parse(re)[0])),
						!Z &&
							Q.dataTransfer.files.length > 0 &&
							this.h.getPathForFile(Q.dataTransfer.files[0]) &&
							(Z = P.URI.file(this.h.getPathForFile(Q.dataTransfer.files[0]))),
						Z &&
							(this.f.setActiveInstance(te),
							te.focus(),
							await te.sendPath(Z, !1));
				}
			};
			ne = Ne([j(0, m.$iIb), j(1, m.$lIb), j(2, G.$asb)], ne);
			let ee = class extends $.$1c {
				constructor(te) {
					super(),
						(this.b = te),
						(this.label = (0, r.localize)(10161, null)),
						(this.a = this.D(new x.$re())),
						(this.onDidChange = this.a.event),
						this.D(
							this.b.onAnyInstancePrimaryStatusChange((Q) =>
								this.a.fire([Q.resource]),
							),
						);
				}
				provideDecorations(te) {
					if (te.scheme !== H.Schemas.vscodeTerminal) return;
					const Q = this.b.getInstanceFromResource(te);
					if (!Q) return;
					const Z = Q?.statusList?.primary;
					if (Z?.icon)
						return {
							color: (0, q.$gHb)(Z.severity),
							letter: Z.icon,
							tooltip: Z.tooltip,
						};
				}
			};
			ee = Ne([j(0, m.$iIb)], ee);
		},
	),
		define(
			de[3698],
			he([
				1, 0, 279, 3, 10, 5, 107, 3697, 7, 50, 11, 8, 49, 117, 21, 4, 616, 691,
				237, 1261, 72, 45,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$4Uc = void 0),
					(m = mt(m));
				const y = m.$;
				var $;
				(function (I) {
					I.ViewIsVertical = "terminal-side-view";
				})($ || ($ = {}));
				var v;
				(function (I) {
					(I[(I.StatusIcon = 30)] = "StatusIcon"),
						(I[(I.SplitAnnotation = 30)] = "SplitAnnotation");
				})(v || (v = {}));
				let S = class extends i.$1c {
					constructor(T, P, k, L, D, M, N, A, R, O, B, U) {
						super(),
							(this.H = P),
							(this.I = k),
							(this.J = L),
							(this.L = D),
							(this.M = M),
							(this.N = N),
							(this.O = R),
							(this.P = B),
							(this.Q = U),
							(this.t = !1),
							(this.g = y(".tabs-container"));
						const z = y(".tabs-list-container");
						(this.f = y(".tabs-list")),
							z.appendChild(this.f),
							this.g.appendChild(z),
							(this.u = this.D(A.createMenu(u.$XX.TerminalInstanceContext, O))),
							(this.w = this.D(A.createMenu(u.$XX.TerminalTabContext, O))),
							(this.y = this.D(
								A.createMenu(u.$XX.TerminalTabEmptyAreaContext, O),
							)),
							(this.h = this.D(this.L.createInstance(d.$3Uc, this.f)));
						const F = y(".terminal-outer-container");
						(this.b = y(".terminal-groups-container")),
							F.appendChild(this.b),
							this.D(
								this.Q.onChangeEffectManuallyDisposed({
									deps: [
										() =>
											this.Q.nonPersistentStorage
												.shouldHighlightTerminalContainer,
									],
									onChange: () => {
										this.b.classList.toggle(
											"should-highlight",
											this.Q.nonPersistentStorage
												.shouldHighlightTerminalContainer,
										);
									},
								}),
							),
							this.H.setContainers(T, this.b),
							(this.z = f.TerminalContextKeys.tabsNarrow.bindTo(O)),
							(this.C = f.TerminalContextKeys.tabsFocus.bindTo(O)),
							(this.F = f.TerminalContextKeys.tabsMouse.bindTo(O)),
							(this.n = this.I.config.tabs.location === "left" ? 0 : 1),
							(this.q = this.I.config.tabs.location === "left" ? 1 : 0),
							this.D(
								N.onDidChangeConfiguration((x) => {
									x.affectsConfiguration(c.TerminalSettingId.TabsEnabled) ||
									x.affectsConfiguration(c.TerminalSettingId.TabsHideCondition)
										? this.S()
										: x.affectsConfiguration(
												c.TerminalSettingId.TabsLocation,
											) &&
											((this.n =
												this.I.config.tabs.location === "left" ? 0 : 1),
											(this.q = this.I.config.tabs.location === "left" ? 1 : 0),
											this.R() &&
												(this.a.swapViews(0, 1),
												this.db(),
												this.cb(),
												this.a.resizeView(this.n, this.U())));
								}),
							),
							this.D(this.J.onDidChangeInstances(() => this.S())),
							this.D(this.J.onDidChangeGroups(() => this.S())),
							this.fb(T, this.b),
							this.D(
								this.J.onDidChangePanelOrientation((x) => {
									(this.G = x),
										this.G === t.Orientation.VERTICAL
											? this.b.classList.add($.ViewIsVertical)
											: this.b.classList.remove($.ViewIsVertical);
								}),
							),
							(this.a = new t.$vob(T, {
								orientation: t.Orientation.HORIZONTAL,
								proportionalLayout: !1,
							})),
							this.ab(F);
					}
					R() {
						const T = this.I.config.tabs.enabled,
							P = this.I.config.tabs.hideCondition;
						return T
							? P === "never" ||
									(P === "singleTerminal" && this.J.instances.length > 1) ||
									(P === "singleGroup" && this.J.groups.length > 1)
							: !1;
					}
					S() {
						this.R()
							? this.a.length === 1 &&
								(this.bb(),
								this.cb(),
								this.a.resizeView(this.n, this.U()),
								this.rerenderTabs())
							: this.a.length === 2 &&
								!this.F.get() &&
								(this.a.removeView(this.n), this.m?.remove(), this.db());
					}
					U() {
						const T =
								this.G === t.Orientation.VERTICAL
									? o.TerminalStorageKeys.TabsListWidthVertical
									: o.TerminalStorageKeys.TabsListWidthHorizontal,
							P = this.O.get(T, n.StorageScope.PROFILE);
						return !P || !parseInt(P)
							? this.G === t.Orientation.VERTICAL
								? d.TerminalTabsListSizes.NarrowViewWidth
								: d.TerminalTabsListSizes.DefaultWidth
							: parseInt(P);
					}
					W() {
						let T = d.TerminalTabsListSizes.WideViewMinimumWidth;
						const P = document.createElement("canvas");
						(P.width = 1), (P.height = 1);
						const k = P.getContext("2d");
						if (k) {
							const D = m.getWindow(this.f).getComputedStyle(this.f);
							k.font = `${D.fontStyle} ${D.fontSize} ${D.fontFamily}`;
							const M = this.J.instances.reduce(
								(N, A) =>
									Math.max(
										N,
										k.measureText(A.title + (A.description || "")).width +
											this.X(A),
									),
								0,
							);
							T = Math.ceil(
								Math.max(M, d.TerminalTabsListSizes.WideViewMinimumWidth),
							);
						}
						Math.ceil(this.a.getViewSize(this.n)) === T &&
							(T = d.TerminalTabsListSizes.NarrowViewWidth),
							this.a.resizeView(this.n, T),
							this.Z(T);
					}
					X(T) {
						const k = T.statusList.statuses.length > 0 ? v.StatusIcon : 0;
						return (
							40 +
							((this.J.getGroupForInstance(T)?.terminalInstances.length || 0) >
							1
								? v.SplitAnnotation
								: 0) +
							k
						);
					}
					Y() {
						const T = this.a.getViewSize(this.n);
						!this.s || T <= 0 || this.Z(T);
					}
					Z(T) {
						T < d.TerminalTabsListSizes.MidpointViewWidth &&
						T >= d.TerminalTabsListSizes.NarrowViewWidth
							? ((T = d.TerminalTabsListSizes.NarrowViewWidth),
								this.a.resizeView(this.n, T))
							: T >= d.TerminalTabsListSizes.MidpointViewWidth &&
								T < d.TerminalTabsListSizes.WideViewMinimumWidth &&
								((T = d.TerminalTabsListSizes.WideViewMinimumWidth),
								this.a.resizeView(this.n, T)),
							this.rerenderTabs();
						const P =
							this.G === t.Orientation.VERTICAL
								? o.TerminalStorageKeys.TabsListWidthVertical
								: o.TerminalStorageKeys.TabsListWidthHorizontal;
						this.O.store(P, T, n.StorageScope.PROFILE, n.StorageTarget.USER);
					}
					ab(T) {
						this.D(this.a.onDidSashReset(() => this.W())),
							this.D(this.a.onDidSashChange(() => this.Y())),
							this.R() && this.bb(),
							this.a.addView(
								{
									element: T,
									layout: (P) =>
										this.J.groups.forEach((k) => k.layout(P, this.r || 0)),
									minimumSize: 120,
									maximumSize: Number.POSITIVE_INFINITY,
									onDidChange: () => i.$1c.None,
									priority: t.LayoutPriority.High,
								},
								t.Sizing.Distribute,
								this.q,
							),
							this.R() && this.cb();
					}
					bb() {
						this.a.addView(
							{
								element: this.g,
								layout: (T) => this.h.layout(this.r || 0, T),
								minimumSize: d.TerminalTabsListSizes.NarrowViewWidth,
								maximumSize: d.TerminalTabsListSizes.MaximumWidth,
								onDidChange: () => i.$1c.None,
								priority: t.LayoutPriority.Low,
							},
							t.Sizing.Distribute,
							this.n,
						),
							this.rerenderTabs();
					}
					rerenderTabs() {
						this.eb(), this.h.refresh();
					}
					cb() {
						let T;
						this.j = [
							this.a.sashes[0].onDidStart((P) => {
								T = m.$igb(
									m.getWindow(this.a.el),
									() => {
										this.rerenderTabs();
									},
									100,
								);
							}),
							this.a.sashes[0].onDidEnd((P) => {
								T.dispose();
							}),
						];
					}
					db() {
						this.j && ((0, i.$Vc)(this.j), (this.j = void 0));
					}
					eb() {
						const T =
							this.f.clientWidth > d.TerminalTabsListSizes.MidpointViewWidth;
						this.g.classList.toggle("has-text", T), this.z.set(!T);
					}
					layout(T, P) {
						(this.r = P),
							(this.s = T),
							this.a.layout(T),
							this.R() && this.a.resizeView(this.n, this.U()),
							this.eb();
					}
					fb(T, P) {
						this.D(
							m.$0fb(this.g, "mouseleave", async (k) => {
								this.F.set(!1), this.S(), k.stopPropagation();
							}),
						),
							this.D(
								m.$0fb(this.g, "mouseenter", async (k) => {
									this.F.set(!0), k.stopPropagation();
								}),
							),
							this.D(
								m.$0fb(P, "mousedown", async (k) => {
									const L = this.J.activeInstance;
									if (this.J.instances.length > 0 && L) {
										const D = await L.handleMouseEvent(k, this.u);
										typeof D == "object" &&
											D.cancelContextMenu &&
											(this.t = !0);
									}
								}),
							),
							this.D(
								m.$0fb(P, "contextmenu", (k) => {
									this.I.config.rightClickBehavior === "nothing" &&
										!k.shiftKey &&
										(this.t = !0),
										P.focus(),
										this.t ||
											(0, p.$zUc)(
												m.getWindow(P),
												k,
												this.J.activeInstance,
												this.u,
												this.M,
											),
										k.preventDefault(),
										k.stopImmediatePropagation(),
										(this.t = !1);
								}),
							),
							this.D(
								m.$0fb(this.g, "contextmenu", (k) => {
									if (
										(this.I.config.rightClickBehavior === "nothing" &&
											!k.shiftKey &&
											(this.t = !0),
										!this.t)
									) {
										const D = this.h.getFocus().length === 0;
										D || (this.J.lastAccessedMenu = "tab-list");
										const M = this.h.getSelectedElements(),
											N = this.h.getFocusedElements()?.[0];
										N &&
											(M.splice(
												M.findIndex((A) => A.instanceId === N.instanceId),
												1,
											),
											M.unshift(N)),
											(0, p.$zUc)(
												m.getWindow(this.g),
												k,
												M,
												D ? this.y : this.w,
												this.M,
												D ? this.gb() : void 0,
											);
									}
									k.preventDefault(),
										k.stopImmediatePropagation(),
										(this.t = !1);
								}),
							),
							this.D(
								m.$0fb(P.ownerDocument, "keydown", (k) => {
									P.classList.toggle("alt-active", !!k.altKey);
								}),
							),
							this.D(
								m.$0fb(P.ownerDocument, "keyup", (k) => {
									P.classList.toggle("alt-active", !!k.altKey);
								}),
							),
							this.D(
								m.$0fb(T, "keyup", (k) => {
									k.keyCode === 27 && k.stopPropagation();
								}),
							),
							this.D(
								m.$0fb(this.g, m.$$gb.FOCUS_IN, () => {
									this.C.set(!0);
								}),
							),
							this.D(
								m.$0fb(this.g, m.$$gb.FOCUS_OUT, () => {
									this.C.set(!1);
								}),
							);
					}
					gb() {
						return [
							new r.$tj(),
							this.N.inspect(c.TerminalSettingId.TabsLocation).userValue ===
							"left"
								? new r.$rj(
										"moveRight",
										(0, g.localize)(10154, null),
										void 0,
										void 0,
										async () => {
											this.N.updateValue(
												c.TerminalSettingId.TabsLocation,
												"right",
											);
										},
									)
								: new r.$rj(
										"moveLeft",
										(0, g.localize)(10155, null),
										void 0,
										void 0,
										async () => {
											this.N.updateValue(
												c.TerminalSettingId.TabsLocation,
												"left",
											);
										},
									),
							new r.$rj(
								"hideTabs",
								(0, g.localize)(10156, null),
								void 0,
								void 0,
								async () => {
									this.N.updateValue(c.TerminalSettingId.TabsEnabled, !1);
								},
							),
						];
					}
					setEditable(T) {
						T || this.h.domFocus(), this.h.refresh(!1);
					}
					focusTabs() {
						if (!this.R()) return;
						this.C.set(!0);
						const T = this.h.getSelection();
						this.h.domFocus(), T && this.h.setFocus(T);
					}
					focus() {
						if (
							this.H.connectionState === C.TerminalConnectionState.Connected
						) {
							this.hb();
							return;
						}
						const T = this.f.ownerDocument.activeElement;
						T &&
							this.D(
								this.H.onDidChangeConnectionState(() => {
									m.$Kgb(T) && this.hb();
								}),
							);
					}
					focusHover() {
						if (this.R()) {
							this.h.focusHover();
							return;
						}
						const T = this.J.activeInstance;
						T &&
							this.P.showHover(
								{ ...(0, b.$ZUc)(T), target: this.b, trapFocus: !0 },
								!0,
							);
					}
					hb() {
						this.J.activeInstance?.focusWhenReady();
					}
				};
				(e.$4Uc = S),
					(e.$4Uc = S =
						Ne(
							[
								j(1, C.$iIb),
								j(2, C.$jIb),
								j(3, C.$lIb),
								j(4, E.$Li),
								j(5, h.$Xxb),
								j(6, w.$gj),
								j(7, u.$YX),
								j(8, n.$lq),
								j(9, a.$6j),
								j(10, s.$Uyb),
								j(11, l.$0zb),
							],
							S,
						));
			},
		),
		