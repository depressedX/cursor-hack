define(de[2869], he([1, 0, 12]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$sV = void 0);
			const i = t.$m ? "\u2318" : "Ctrl";
			e.$sV = [
				{
					name: "terminal.cmdk",
					showOn: {
						sequences: [
							{
								events: [
									["*", "terminal.show", "terminal.focus", "terminal.type"],
									[
										"*",
										"chat.open",
										"chat.input.focus",
										"chat.insert_selection.terminal.empty",
									],
									["*", "chat.type", "chat.paste", "_"],
									"chat.submit",
									["*", "!", "chat.submit", "editor.paste", "_"],
									"chat.copy.codeblock",
									["*", "!", "chat.submit", "editor.type", "editor.paste", "_"],
									["*", "terminal.type", "_"],
									"terminal.paste",
								],
								timeout_ms: 12e4,
							},
						],
						gracePeriod_ms: 30 * 24 * 60 * 6e4,
					},
					popup: {
						header: `Generate Terminal Command (${i} + K)`,
						subheader: `You can use ${i} + K to generate commands directly inside the terminal`,
						location: "terminal",
					},
					disableOn: {
						sequences: [
							{ events: ["terminal.cmdk.submit"], timeout_ms: 1 / 0 },
						],
						gracePeriod_ms: 30 * 24 * 60 * 6e4,
					},
				},
				{
					name: "editor.cmdk",
					showOn: {
						sequences: [
							{
								events: [
									"editor.copy",
									[
										"*",
										"chat.open",
										"chat.input.focus",
										"chat.insert_selection.editor.empty",
									],
									["*", "chat.type", "_"],
									["*", "chat.paste"],
									["*", "chat.type", "_"],
									"chat.submit",
									["*", "!", "chat.submit", "editor.paste", "_"],
									"chat.copy.codeblock",
									[
										"*",
										"!",
										"chat.submit",
										"terminal.paste",
										"terminal.type",
										"_",
									],
									["*", "editor.type", "_"],
									"editor.paste",
								],
								timeout_ms: 12e4,
							},
							{
								events: [
									"chat.open",
									"chat.insert_selection.editor.non_empty",
									["*", "_", "chat.input.focus"],
									["*", "chat.type", "_"],
									"chat.submit",
									["*", "!", "chat.submit", "terminal.paste", "_"],
									"chat.copy.codeblock",
									[
										"*",
										"!",
										"chat.submit",
										"terminal.paste",
										"terminal.type",
										"_",
									],
									["*", "editor.type", "_"],
									"editor.paste",
								],
								timeout_ms: 12e4,
							},
						],
						gracePeriod_ms: 30 * 24 * 60 * 6e4,
					},
					popup: {
						header: `Edit Code (${i} + K)`,
						subheader: `You can select code and edit it in your editor using ${i} + K`,
						location: "editor",
					},
					disableOn: {
						sequences: [{ events: ["editor.cmdk.submit"], timeout_ms: 1 / 0 }],
						gracePeriod_ms: 30 * 24 * 60 * 6e4,
					},
				},
			];
		});
	const oc =
		"https://80ec2259ebfad12d8aa2afe6eb4f6dd5@metrics.cursor.sh/4508016051945472";
	function _o() {
		return globalThis._CURSOR_SENTRY;
	}
	function ac() {
		globalThis._CURSOR_SENTRY === void 0 &&
			(globalThis._CURSOR_SENTRY = {
				buffer: [],
				enabled: !0,
				loggerSampleRate: 1,
				tracesSampleRate: 0.01,
				transport: cc(),
			});
	}
	function cc() {
		return {
			send: function (e) {
				const t = _o().buffer;
				return t.length < 64 && t.push(e), Promise.resolve({ statusCode: 200 });
			},
			flush: function (e) {
				return Promise.resolve(!0);
			},
		};
	}
	function lc() {
		return {
			send: function (ce) {
				return _o().enabled
					? _o().transport.send(ce)
					: Promise.resolve({ statusCode: 200 });
			},
			flush: function (ce) {
				return _o().transport.flush(ce);
			},
		};
	}
	function uc() {
		return {
			defaultIntegrations: !1,
			dsn: oc,
			parentSpanIsAlwaysRootSpan: !0,
			tracesSampleRate: 1,
			transport: lc,
		};
	}
	(function () {
		function ce() {
			return (
				ac(), { getProcessGlobalState: _o, makeSharedSentryClientOptions: uc }
			);
		}
		typeof define == "function"
			? define("vs/platform/tracing/common/global", [], function () {
					return ce();
				})
			: typeof module == "object" && typeof module.exports == "object"
				? (module.exports = ce())
				: console.trace(
						"initialize.js defined in UNKNOWN context (neither requirejs or commonjs)",
					);
	})();
	var Yi =
		(this && this.__exportStar) ||
		function (ce, e) {
			for (var t in ce)
				t !== "default" &&
					!Object.prototype.hasOwnProperty.call(e, t) &&
					Ns(e, ce, t);
		};
	define(
		de[1668],
		he([1, 0, 144, 453, 2146, 1092, 727, 1426]),
		function (ce, e, t, i, w, E, C, d) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.makePromiseBuffer =
					e.uuid4 =
					e.SentryError =
					e.eventFromEnvelope =
					e.startSpanManual =
					e.getIsolationScope =
					e.getEnvelopeEndpointWithUrlEncodedAuth =
					e.getCurrentScope =
					e.getClient =
						void 0),
				Object.defineProperty(e, "getClient", {
					enumerable: !0,
					get: function () {
						return t.getClient;
					},
				}),
				Object.defineProperty(e, "getCurrentScope", {
					enumerable: !0,
					get: function () {
						return t.getCurrentScope;
					},
				}),
				Object.defineProperty(e, "getEnvelopeEndpointWithUrlEncodedAuth", {
					enumerable: !0,
					get: function () {
						return t.getEnvelopeEndpointWithUrlEncodedAuth;
					},
				}),
				Object.defineProperty(e, "getIsolationScope", {
					enumerable: !0,
					get: function () {
						return t.getIsolationScope;
					},
				}),
				Object.defineProperty(e, "startSpanManual", {
					enumerable: !0,
					get: function () {
						return t.startSpanManual;
					},
				}),
				Yi(i, e),
				Object.defineProperty(e, "eventFromEnvelope", {
					enumerable: !0,
					get: function () {
						return w.eventFromEnvelope;
					},
				}),
				Object.defineProperty(e, "SentryError", {
					enumerable: !0,
					get: function () {
						return E.SentryError;
					},
				}),
				Object.defineProperty(e, "uuid4", {
					enumerable: !0,
					get: function () {
						return C.uuid4;
					},
				}),
				Object.defineProperty(e, "makePromiseBuffer", {
					enumerable: !0,
					get: function () {
						return d.makePromiseBuffer;
					},
				});
		},
	),
		