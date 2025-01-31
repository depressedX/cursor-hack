import '../../../../../require.js';
import '../../../../../exports.js';
define(de[3139], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$ygd = e.$xgd = e.$wgd = e.$vgd = e.$ugd = e.$tgd = e.$sgd = void 0),
				(e.$sgd =
					/group\s*:\s*[\'\"](.*?)[\'\"]\s*,\s*name\s*:\s*[\'\"](.*?)[\'\"]\s*,\s*version\s*:\s*[\'\"](.*?)[\'\"]/g),
				(e.$tgd = /[\'\"]([^\'\"\s]*?)\:([^\'\"\s]*?)\:([^\'\"\s]*?)[\'\"]/g),
				(e.$ugd = /<dependencies>([\s\S]*?)<\/dependencies>/g),
				(e.$vgd = /<dependency>([\s\S]*?)<\/dependency>/g),
				(e.$wgd = /<groupId>([\s\S]*?)<\/groupId>/),
				(e.$xgd = /<artifactId>([\s\S]*?)<\/artifactId>/),
				(e.$ygd = [
					{
						predicate: (t, i) => t === "com.microsoft.azure" && i === "azure",
						tag: "azure",
					},
					{
						predicate: (t, i) =>
							t === "com.microsoft.azure" && i.startsWith("azure-mgmt-"),
						tag: "azure",
					},
					{
						predicate: (t, i) =>
							t.startsWith("com.microsoft.azure") &&
							i.startsWith("azure-mgmt-"),
						tag: "azure",
					},
					{
						predicate: (t, i) =>
							t === "com.azure.resourcemanager" &&
							i.startsWith("azure-resourcemanager"),
						tag: "azure",
					},
					{
						predicate: (t, i) => t === "javax" && i === "javaee-api",
						tag: "javaee",
					},
					{
						predicate: (t, i) => t === "javax.xml.bind" && i === "jaxb-api",
						tag: "javaee",
					},
					{
						predicate: (t, i) => t === "mysql" && i === "mysql-connector-java",
						tag: "jdbc",
					},
					{
						predicate: (t, i) =>
							t === "com.microsoft.sqlserver" && i === "mssql-jdbc",
						tag: "jdbc",
					},
					{
						predicate: (t, i) =>
							t === "com.oracle.database.jdbc" && i.startsWith("ojdbc"),
						tag: "jdbc",
					},
					{ predicate: (t, i) => t === "org.hibernate", tag: "jpa" },
					{
						predicate: (t, i) =>
							t === "org.eclipse.persistence" && i === "eclipselink",
						tag: "jpa",
					},
					{ predicate: (t, i) => t === "org.projectlombok", tag: "lombok" },
					{
						predicate: (t, i) =>
							t === "org.springframework.data" && i === "spring-data-redis",
						tag: "redis",
					},
					{
						predicate: (t, i) => t === "redis.clients" && i === "jedis",
						tag: "redis",
					},
					{ predicate: (t, i) => t === "org.redisson", tag: "redis" },
					{
						predicate: (t, i) => t === "io.lettuce" && i === "lettuce-core",
						tag: "redis",
					},
					{
						predicate: (t, i) => t === "org.springframework.boot",
						tag: "springboot",
					},
					{ predicate: (t, i) => t === "org.jooq", tag: "sql" },
					{ predicate: (t, i) => t === "org.mybatis", tag: "sql" },
					{
						predicate: (t, i) =>
							t === "org.junit.jupiter" && i === "junit-jupiter-api",
						tag: "unitTest",
					},
					{
						predicate: (t, i) => t === "junit" && i === "junit",
						tag: "unitTest",
					},
					{
						predicate: (t, i) => t === "org.testng" && i === "testng",
						tag: "unitTest",
					},
					{
						predicate: (t, i) => t === "com.azure" && i.includes("cosmos"),
						tag: "azure-cosmos",
					},
					{
						predicate: (t, i) =>
							t === "com.azure.spring" && i.includes("cosmos"),
						tag: "azure-cosmos",
					},
					{
						predicate: (t, i) =>
							t === "com.azure" && i.includes("azure-storage"),
						tag: "azure-storage",
					},
					{
						predicate: (t, i) =>
							t === "com.azure.spring" && i.includes("storage"),
						tag: "azure-storage",
					},
					{
						predicate: (t, i) =>
							t === "com.azure" && i === "azure-messaging-servicebus",
						tag: "azure-servicebus",
					},
					{
						predicate: (t, i) =>
							t === "com.azure.spring" && i.includes("servicebus"),
						tag: "azure-servicebus",
					},
					{
						predicate: (t, i) =>
							t === "com.azure" && i.startsWith("azure-messaging-eventhubs"),
						tag: "azure-eventhubs",
					},
					{
						predicate: (t, i) =>
							t === "com.azure.spring" && i.includes("eventhubs"),
						tag: "azure-eventhubs",
					},
					{ predicate: (t, i) => t === "dev.langchain4j", tag: "langchain4j" },
					{
						predicate: (t, i) => t === "io.springboot.ai",
						tag: "springboot-ai",
					},
					{
						predicate: (t, i) => t === "com.microsoft.semantic-kernel",
						tag: "semantic-kernel",
					},
					{
						predicate: (t, i) =>
							t === "com.azure" && i === "azure-ai-anomalydetector",
						tag: "azure-ai-anomalydetector",
					},
					{
						predicate: (t, i) =>
							t === "com.azure" && i === "azure-ai-formrecognizer",
						tag: "azure-ai-formrecognizer",
					},
					{
						predicate: (t, i) =>
							t === "com.azure" && i === "azure-ai-documentintelligence",
						tag: "azure-ai-documentintelligence",
					},
					{
						predicate: (t, i) =>
							t === "com.azure" && i === "azure-ai-translation-document",
						tag: "azure-ai-translation-document",
					},
					{
						predicate: (t, i) =>
							t === "com.azure" && i === "azure-ai-personalizer",
						tag: "azure-ai-personalizer",
					},
					{
						predicate: (t, i) =>
							t === "com.azure" && i === "azure-ai-translation-text",
						tag: "azure-ai-translation-text",
					},
					{
						predicate: (t, i) =>
							t === "com.azure" && i === "azure-ai-contentsafety",
						tag: "azure-ai-contentsafety",
					},
					{
						predicate: (t, i) =>
							t === "com.azure" && i === "azure-ai-vision-imageanalysis",
						tag: "azure-ai-vision-imageanalysis",
					},
					{
						predicate: (t, i) =>
							t === "com.azure" && i === "azure-ai-textanalytics",
						tag: "azure-ai-textanalytics",
					},
					{
						predicate: (t, i) =>
							t === "com.azure" && i === "azure-search-documents",
						tag: "azure-search-documents",
					},
					{
						predicate: (t, i) =>
							t === "com.azure" && i === "azure-ai-documenttranslator",
						tag: "azure-ai-documenttranslator",
					},
					{
						predicate: (t, i) =>
							t === "com.azure" && i === "azure-ai-vision-face",
						tag: "azure-ai-vision-face",
					},
					{
						predicate: (t, i) =>
							t === "com.azure" && i === "azure-ai-openai-assistants",
						tag: "azure-ai-openai-assistants",
					},
					{
						predicate: (t, i) => t === "com.microsoft.azure.cognitiveservices",
						tag: "azure-cognitiveservices",
					},
					{
						predicate: (t, i) => t === "com.microsoft.cognitiveservices.speech",
						tag: "azure-cognitiveservices-speech",
					},
					{
						predicate: (t, i) => t === "com.theokanning.openai-gpt3-java",
						tag: "openai",
					},
					{
						predicate: (t, i) => t === "com.azure" && i === "azure-ai-openai",
						tag: "azure-openai",
					},
					{
						predicate: (t, i) =>
							t === "com.microsoft.azure.functions" &&
							i === "azure-functions-java-library",
						tag: "azure-functions",
					},
					{ predicate: (t, i) => t === "io.quarkus", tag: "quarkus" },
					{
						predicate: (t, i) => t.startsWith("org.eclipse.microprofile"),
						tag: "microprofile",
					},
					{ predicate: (t, i) => t === "io.micronaut", tag: "micronaut" },
					{ predicate: (t, i) => t.startsWith("org.graalvm"), tag: "graalvm" },
				]);
		})
