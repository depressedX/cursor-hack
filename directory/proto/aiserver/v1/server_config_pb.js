define(de[1488], he([1, 0, 86, 736]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$abb = e.$_ab = e.$$ab = e.$0ab = void 0);
			class w extends t.Message {
				constructor(r) {
					super(),
						(this.maxConcurrentUploads = 0),
						(this.absoluteMaxNumberFiles = 0),
						(this.maxFileRetries = 0),
						(this.syncConcurrency = 0),
						(this.autoIndexingMaxNumFiles = 0),
						t.proto3.util.initPartial(r, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.IndexingConfig";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "max_concurrent_uploads", kind: "scalar", T: 5 },
						{ no: 2, name: "absolute_max_number_files", kind: "scalar", T: 5 },
						{ no: 3, name: "max_file_retries", kind: "scalar", T: 5 },
						{ no: 4, name: "sync_concurrency", kind: "scalar", T: 5 },
						{
							no: 5,
							name: "auto_indexing_max_num_files",
							kind: "scalar",
							T: 5,
						},
					]);
				}
				static fromBinary(r, u) {
					return new w().fromBinary(r, u);
				}
				static fromJson(r, u) {
					return new w().fromJson(r, u);
				}
				static fromJsonString(r, u) {
					return new w().fromJsonString(r, u);
				}
				static equals(r, u) {
					return t.proto3.util.equals(w, r, u);
				}
			}
			e.$0ab = w;
			class E extends t.Message {
				constructor(r) {
					super(),
						(this.globalSampleRate = 0),
						(this.tracesSampleRate = 0),
						(this.loggerSampleRate = 0),
						(this.minidumpSampleRate = 0),
						(this.errorRateLimit = 0),
						(this.performanceUnitRateLimit = 0),
						t.proto3.util.initPartial(r, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ClientTracingConfig";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "global_sample_rate", kind: "scalar", T: 1 },
						{ no: 2, name: "traces_sample_rate", kind: "scalar", T: 1 },
						{ no: 3, name: "logger_sample_rate", kind: "scalar", T: 1 },
						{ no: 4, name: "minidump_sample_rate", kind: "scalar", T: 1 },
						{ no: 5, name: "error_rate_limit", kind: "scalar", T: 1 },
						{
							no: 6,
							name: "performance_unit_rate_limit",
							kind: "scalar",
							T: 1,
						},
					]);
				}
				static fromBinary(r, u) {
					return new E().fromBinary(r, u);
				}
				static fromJson(r, u) {
					return new E().fromJson(r, u);
				}
				static fromJsonString(r, u) {
					return new E().fromJsonString(r, u);
				}
				static equals(r, u) {
					return t.proto3.util.equals(E, r, u);
				}
			}
			e.$$ab = E;
			class C extends t.Message {
				constructor(r) {
					super(),
						(this.telemEnabled = !1),
						(this.bugBotDismissedNotificationLast10TimesUnixMs = []),
						(this.bugBotViewedNotificationLast10TimesUnixMs = []),
						t.proto3.util.initPartial(r, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.GetServerConfigRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "telem_enabled", kind: "scalar", T: 8 },
						{
							no: 2,
							name: "bug_bot_dismissed_notification_last_10_times_unix_ms",
							kind: "scalar",
							T: 1,
							repeated: !0,
						},
						{
							no: 3,
							name: "bug_bot_viewed_notification_last_10_times_unix_ms",
							kind: "scalar",
							T: 1,
							repeated: !0,
						},
					]);
				}
				static fromBinary(r, u) {
					return new C().fromBinary(r, u);
				}
				static fromJson(r, u) {
					return new C().fromJson(r, u);
				}
				static fromJsonString(r, u) {
					return new C().fromJsonString(r, u);
				}
				static equals(r, u) {
					return t.proto3.util.equals(C, r, u);
				}
			}
			e.$_ab = C;
			class d extends t.Message {
				constructor(r) {
					super(),
						(this.isDevDoNotUseForSecretThingsBecauseCanBeSpoofedByUsers = !1),
						t.proto3.util.initPartial(r, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.GetServerConfigResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "bug_config_response", kind: "message", T: i.$Oab },
						{
							no: 2,
							name: "is_dev_do_not_use_for_secret_things_because_can_be_spoofed_by_users",
							kind: "scalar",
							T: 8,
						},
						{ no: 3, name: "indexing_config", kind: "message", T: w },
						{ no: 4, name: "client_tracing_config", kind: "message", T: E },
					]);
				}
				static fromBinary(r, u) {
					return new d().fromBinary(r, u);
				}
				static fromJson(r, u) {
					return new d().fromJson(r, u);
				}
				static fromJsonString(r, u) {
					return new d().fromJsonString(r, u);
				}
				static equals(r, u) {
					return t.proto3.util.equals(d, r, u);
				}
			}
			e.$abb = d;
		}),
		